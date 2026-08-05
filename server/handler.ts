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
 * 滥用防护（本服务无鉴权，靠以下措施控制 LLM token 消耗）：
 *   - 请求体总大小上限（超出 413）
 *   - question / 上下文字段 / 历史对话长度上限（超出截断而非报错）
 *   - 按来源 IP 的内存滑动窗口限流（超限 429）
 *   - 客户端断连时把 abort signal 传给上游 fetch，停止生成
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

// ===== 输入上限（数值理由见各注释；都是“截断而非报错”，除非整个请求体超限）=====

/**
 * 请求体总大小上限。正常请求（问题 + 10 条历史 + 知识点上下文）远低于 64KB；
 * 超出说明是异常/恶意流量，直接 413，避免解析超大 JSON 占用内存。
 */
export const MAX_BODY_BYTES = 64 * 1024;

/** 单条问题上限：足够完整描述一道中学理科题；超出部分截断。 */
export const MAX_QUESTION_CHARS = 2000;

/** 知识点标题上限：标题本应简短，截断防止注入超长上下文。 */
export const MAX_TITLE_CHARS = 200;

/** kpSummary / kpTheory 等上下文字段上限：前端拍平的理论文本正常在 1-2KB 内，截断防爆 token。 */
export const MAX_CONTEXT_CHARS = 4000;

/** 历史对话条数上限（与 prompts.ts 的 MAX_HISTORY_ITEMS 保持一致，双保险）。 */
export const MAX_HISTORY_ITEMS = 10;

/** 历史对话总字符上限：超出时从最旧的消息开始丢弃（截断而非报错）。 */
export const MAX_HISTORY_TOTAL_CHARS = 6000;

// ===== 限流 =====

/** 默认每 IP 每分钟请求数；可被 AI_RATE_LIMIT_PER_MIN 覆盖。 */
export const DEFAULT_RATE_LIMIT_PER_MIN = 20;

const RATE_LIMIT_WINDOW_MS = 60_000;

/**
 * 内存滑动窗口限流桶：ip -> 窗口内请求时间戳。
 * 局限（注释说明）：云函数多实例各自计数，不共享状态；实例冷启动后计数清零；
 * 因此这是“单实例语义”的软限流，只能挡住最粗糙的滥用，精确限流应在
 * API 网关 / Cloudflare 层做。
 */
const rateLimitBuckets = new Map<string, number[]>();

/** 测试用：清空限流状态。 */
export function resetRateLimiter(): void {
  rateLimitBuckets.clear();
}

function rateLimitPerMinute(env: Record<string, string | undefined>): number {
  const raw = env.AI_RATE_LIMIT_PER_MIN?.trim();
  if (!raw) return DEFAULT_RATE_LIMIT_PER_MIN;
  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed)) return DEFAULT_RATE_LIMIT_PER_MIN;
  return parsed; // <= 0 表示关闭限流（本地调试可用）
}

/** 取客户端 IP：优先平台注入的直连 IP 头，其次代理链第一跳，兜底 'unknown'。 */
function clientIp(request: Request): string {
  const cfIp = request.headers.get('cf-connecting-ip')?.trim();
  if (cfIp) return cfIp;
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (forwarded) return forwarded;
  return 'unknown';
}

/** 滑动窗口计数；返回 true 表示放行。 */
function checkRateLimit(ip: string, limitPerMin: number): boolean {
  if (limitPerMin <= 0) return true;
  const now = Date.now();
  const timestamps = (rateLimitBuckets.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= limitPerMin) {
    rateLimitBuckets.set(ip, timestamps);
    return false;
  }
  timestamps.push(now);
  rateLimitBuckets.set(ip, timestamps);
  // 防止 map 无限增长：桶过多时全量清理过期时间戳
  if (rateLimitBuckets.size > 10_000) {
    for (const [key, list] of rateLimitBuckets) {
      const alive = list.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (alive.length === 0) rateLimitBuckets.delete(key);
      else rateLimitBuckets.set(key, alive);
    }
  }
  return true;
}

// ===== CORS =====

function corsOrigin(env: Record<string, string | undefined>): string {
  // AI_ALLOWED_ORIGIN 指定静态站来源（如 https://example.github.io）。
  // 生产环境必须配置具体域名；默认 * 仅为本地开发方便（* 下浏览器不带凭证，
  // 但任何人都能从浏览器直接调用，务必配合限流）。
  return env.AI_ALLOWED_ORIGIN?.trim() || '*';
}

function baseHeaders(env: Record<string, string | undefined>): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': corsOrigin(env),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

// ===== 通用工具 =====

interface ApiError {
  error: { code: string; message: string };
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
  extraHeaders?: Record<string, string>,
): Response {
  const body: ApiError = { error: { code, message } };
  const res = jsonResponse(body, status, env);
  if (extraHeaders) {
    for (const [key, value] of Object.entries(extraHeaders)) res.headers.set(key, value);
  }
  return res;
}

function truncate(text: string, maxChars: number): string {
  return text.length > maxChars ? text.slice(0, maxChars) : text;
}

/**
 * 读取并解析 JSON 请求体，强制 64KB 上限。
 * 返回 undefined 表示非法 JSON；请求体超限时抛出 BodyTooLargeError（由调用方转 413）。
 */
class BodyTooLargeError extends Error {}

async function readJson(request: Request): Promise<Record<string, unknown> | undefined> {
  // 有 Content-Length 时先快速拒绝，不必读 body
  const declared = Number(request.headers.get('content-length'));
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) {
    throw new BodyTooLargeError();
  }
  let text: string;
  try {
    text = await request.text();
  } catch {
    return undefined;
  }
  if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) {
    throw new BodyTooLargeError();
  }
  try {
    const data: unknown = JSON.parse(text);
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

/** 历史对话双上限：先截断单条内容，再保留最近 N 条，最后按总字符数从最旧丢弃。 */
function clampHistory(items: TutorHistoryItem[]): TutorHistoryItem[] {
  const clamped = items
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => ({ ...item, content: truncate(item.content, MAX_QUESTION_CHARS) }));
  let total = clamped.reduce((sum, item) => sum + item.content.length, 0);
  let start = 0;
  // 至少保留最后一条（单条已被截到 MAX_QUESTION_CHARS，必然低于总上限）
  while (total > MAX_HISTORY_TOTAL_CHARS && start < clamped.length - 1) {
    total -= clamped[start].content.length;
    start += 1;
  }
  return clamped.slice(start);
}

function asRecords(value: unknown): ReportRecord[] {
  if (!Array.isArray(value)) return [];
  const out: ReportRecord[] = [];
  for (const item of value as unknown[]) {
    if (!item || typeof item !== 'object') continue;
    const r = item as Record<string, unknown>;
    if (typeof r.title !== 'string' || !r.title.trim()) continue;
    out.push({
      title: truncate(r.title, MAX_TITLE_CHARS),
      bestScore: typeof r.bestScore === 'number' ? r.bestScore : undefined,
      total: typeof r.total === 'number' ? r.total : undefined,
      completed: r.completed === true,
    });
  }
  return out;
}

/** 读取 JSON body；统一把 BodyTooLargeError 转成 413。 */
async function parseBody(
  request: Request,
  env: Record<string, string | undefined>,
): Promise<{ body: Record<string, unknown> } | { error: Response }> {
  try {
    const body = await readJson(request);
    if (!body) {
      return { error: errorResponse('bad_request', 'Request body must be a JSON object.', 400, env) };
    }
    return { body };
  } catch (err) {
    if (err instanceof BodyTooLargeError) {
      return {
        error: errorResponse(
          'payload_too_large',
          `Request body exceeds the ${MAX_BODY_BYTES}-byte limit.`,
          413,
          env,
        ),
      };
    }
    throw err;
  }
}

// ===== 路由处理 =====

async function handleTutor(
  request: Request,
  env: Record<string, string | undefined>,
): Promise<Response> {
  const parsed = await parseBody(request, env);
  if ('error' in parsed) return parsed.error;
  const body = parsed.body;

  const question = truncate(asString(body.question).trim(), MAX_QUESTION_CHARS);
  const kpTitle = truncate(asString(body.kpTitle).trim(), MAX_TITLE_CHARS);
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
    kpSummary: truncate(asString(body.kpSummary), MAX_CONTEXT_CHARS),
    kpTheory: truncate(asString(body.kpTheory), MAX_CONTEXT_CHARS),
    language,
    gradeTier: truncate(asString(body.gradeTier), 20) || 'both',
    params: asParams(body.params),
    history: clampHistory(asHistory(body.history)),
    question,
  });

  let upstream: Response;
  try {
    // 把客户端断连 signal 传给上游：学生关闭面板后停止生成，不浪费 token
    upstream = await createChatCompletion({
      messages,
      stream: true,
      config,
      signal: request.signal,
    });
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
  const parsed = await parseBody(request, env);
  if ('error' in parsed) return parsed.error;
  const body = parsed.body;

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
    const report = await chatCompletionText(
      buildReportMessages({ language, records }),
      config,
      request.signal, // 断连传播：客户端关闭后取消上游请求
    );
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
  if (url.pathname !== '/api/tutor' && url.pathname !== '/api/report') {
    return errorResponse('not_found', `Unknown route: ${url.pathname}`, 404, env);
  }

  // 按来源 IP 限流（单实例内存语义，见 rateLimitBuckets 注释）
  if (!checkRateLimit(clientIp(request), rateLimitPerMinute(env))) {
    return errorResponse(
      'rate_limited',
      'Too many requests. Please try again later.',
      429,
      env,
      { 'Retry-After': '60' },
    );
  }

  if (url.pathname === '/api/tutor') return handleTutor(request, env);
  return handleReport(request, env);
}
