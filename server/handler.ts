/**
 * 与平台无关的 fetch 风格处理器：(request: Request) => Promise<Response>。
 * 本地由 server/dev.ts 桥接到 node:http；部署到 Cloudflare Workers / Vercel
 * Edge 等平台时直接导出 handleRequest 即可。
 *
 * 路由：
 *   POST /api/tutor   流式转发 LLM SSE（text/event-stream）
 *   POST /api/report  非流式，返回 { report: string }
 *   OPTIONS *         CORS 预检
 *
 * 错误统一返回结构化 JSON：{ error: { code, message } }
 */
import { LlmConfigError, createChatCompletion, chatCompletionText, getLlmConfig } from './llm.ts';
import {
  buildReportMessages,
  buildTutorMessages,
  type ReportRecord,
  type TutorHistoryItem,
  type TutorLanguage,
} from './prompts.ts';

interface ApiError {
  error: { code: string; message: string };
}

function corsOrigin(env: Record<string, string | undefined>): string {
  // AI_ALLOWED_ORIGIN 指定静态站来源（如 https://example.github.io），默认 *
  return env.AI_ALLOWED_ORIGIN?.trim() || '*';
}

function baseHeaders(env: Record<string, string | undefined>): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': corsOrigin(env),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(
  body: unknown,
  status: number,
  env: Record<string, string | undefined>,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...baseHeaders(env), 'Content-Type': 'application/json; charset=utf-8' },
  });
}

function errorResponse(
  code: string,
  message: string,
  status: number,
  env: Record<string, string | undefined>,
): Response {
  const body: ApiError = { error: { code, message } };
  return jsonResponse(body, status, env);
}

async function readJson(request: Request): Promise<Record<string, unknown> | undefined> {
  try {
    const data: unknown = await request.json();
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      return data as Record<string, unknown>;
    }
  } catch {
    // fall through
  }
  return undefined;
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function asParams(value: unknown): Record<string, number | string> | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
  const out: Record<string, number | string> = {};
  for (const [key, v] of Object.entries(value as Record<string, unknown>)) {
    if (typeof v === 'number' || typeof v === 'string') out[key] = v;
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

function asHistory(value: unknown): TutorHistoryItem[] {
  if (!Array.isArray(value)) return [];
  const out: TutorHistoryItem[] = [];
  for (const item of value as unknown[]) {
    if (!item || typeof item !== 'object') continue;
    const { role, content } = item as Record<string, unknown>;
    if ((role === 'user' || role === 'assistant') && typeof content === 'string') {
      out.push({ role, content });
    }
  }
  return out;
}

function asRecords(value: unknown): ReportRecord[] {
  if (!Array.isArray(value)) return [];
  const out: ReportRecord[] = [];
  for (const item of value as unknown[]) {
    if (!item || typeof item !== 'object') continue;
    const r = item as Record<string, unknown>;
    if (typeof r.title !== 'string' || !r.title.trim()) continue;
    out.push({
      title: r.title,
      bestScore: typeof r.bestScore === 'number' ? r.bestScore : undefined,
      total: typeof r.total === 'number' ? r.total : undefined,
      completed: r.completed === true,
    });
  }
  return out;
}

async function handleTutor(
  request: Request,
  env: Record<string, string | undefined>,
): Promise<Response> {
  const body = await readJson(request);
  if (!body) return errorResponse('bad_request', 'Request body must be a JSON object.', 400, env);

  const question = asString(body.question).trim();
  const kpTitle = asString(body.kpTitle).trim();
  if (!question || !kpTitle) {
    return errorResponse('bad_request', 'Fields "kpTitle" and "question" are required.', 400, env);
  }
  const language: TutorLanguage = body.language === 'en' ? 'en' : 'zh';

  let config;
  try {
    config = getLlmConfig(env);
  } catch (err) {
    if (err instanceof LlmConfigError) {
      return errorResponse('llm_not_configured', err.message, 503, env);
    }
    throw err;
  }

  const messages = buildTutorMessages({
    kpTitle,
    kpSummary: asString(body.kpSummary),
    kpTheory: asString(body.kpTheory),
    language,
    gradeTier: asString(body.gradeTier) || 'both',
    params: asParams(body.params),
    history: asHistory(body.history),
    question,
  });

  let upstream: Response;
  try {
    upstream = await createChatCompletion({ messages, stream: true, config });
  } catch (err) {
    return errorResponse(
      'llm_upstream_error',
      err instanceof Error ? err.message : 'LLM upstream request failed.',
      502,
      env,
    );
  }

  // 流式转发上游 SSE
  return new Response(upstream.body, {
    status: 200,
    headers: {
      ...baseHeaders(env),
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  });
}

async function handleReport(
  request: Request,
  env: Record<string, string | undefined>,
): Promise<Response> {
  const body = await readJson(request);
  if (!body) return errorResponse('bad_request', 'Request body must be a JSON object.', 400, env);

  const records = asRecords(body.records);
  if (records.length === 0) {
    return errorResponse('bad_request', 'Field "records" must be a non-empty array.', 400, env);
  }
  const language: TutorLanguage = body.language === 'en' ? 'en' : 'zh';

  let config;
  try {
    config = getLlmConfig(env);
  } catch (err) {
    if (err instanceof LlmConfigError) {
      return errorResponse('llm_not_configured', err.message, 503, env);
    }
    throw err;
  }

  try {
    const report = await chatCompletionText(buildReportMessages({ language, records }), config);
    return jsonResponse({ report }, 200, env);
  } catch (err) {
    return errorResponse(
      'llm_upstream_error',
      err instanceof Error ? err.message : 'LLM upstream request failed.',
      502,
      env,
    );
  }
}

/** 平台无关入口：本地 dev 服务器与云函数共用 */
export async function handleRequest(
  request: Request,
  env: Record<string, string | undefined> = process.env,
): Promise<Response> {
  const url = new URL(request.url);

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: baseHeaders(env) });
  }
  if (request.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Only POST is supported.', 405, env);
  }
  if (url.pathname === '/api/tutor') return handleTutor(request, env);
  if (url.pathname === '/api/report') return handleReport(request, env);
  return errorResponse('not_found', `Unknown route: ${url.pathname}`, 404, env);
}
