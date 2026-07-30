/**
 * AI 功能前端客户端：对接 server/ 提供的 /api/tutor 与 /api/report。
 * API 地址取 import.meta.env.VITE_AI_API_URL；未配置时 isAiConfigured() 为 false，
 * 所有 AI 组件应优雅降级（显示配置指引），不得报错或白屏。
 */
import type { Lang, TheoryBlock } from '../content/types';

const API_URL = (import.meta.env.VITE_AI_API_URL as string | undefined)?.trim().replace(/\/+$/, '');

/** AI 后端是否已配置 */
export function isAiConfigured(): boolean {
  return Boolean(API_URL);
}

export interface TutorHistoryItem {
  role: 'user' | 'assistant';
  content: string;
}

export interface TutorRequest {
  kpTitle: string;
  kpSummary: string;
  /** 理论区纯文本摘要（用 theoryBlocksToText 生成） */
  kpTheory: string;
  language: Lang;
  gradeTier: string;
  /** 当前仿真/实验状态（参数值或已加入试剂等文本） */
  params?: Record<string, number | string>;
  history: TutorHistoryItem[];
  question: string;
}

/** 服务端错误响应结构 */
interface ApiErrorBody {
  error?: { code?: string; message?: string };
}

async function throwIfNotOk(res: Response): Promise<void> {
  if (res.ok) return;
  let message = `AI request failed (${res.status})`;
  try {
    const body = (await res.json()) as ApiErrorBody;
    if (body.error?.message) message = body.error.message;
  } catch {
    // 保留默认 message
  }
  throw new Error(message);
}

/**
 * 流式助教对话：POST /api/tutor，逐 token 回调 onToken。
 * 解析 OpenAI 兼容 SSE（data: {...}\n\n，data: [DONE] 结束）。
 */
export async function tutorChat(
  req: TutorRequest,
  onToken: (token: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  if (!API_URL) throw new Error('AI is not configured (VITE_AI_API_URL missing).');
  const res = await fetch(`${API_URL}/api/tutor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
    signal,
  });
  await throwIfNotOk(res);
  if (!res.body) throw new Error('AI response has no body.');

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    // SSE 事件以空行分隔
    const events = buffer.split('\n\n');
    buffer = events.pop() ?? '';
    for (const event of events) {
      for (const line of event.split('\n')) {
        if (!line.startsWith('data:')) continue;
        const data = line.slice(5).trim();
        if (!data || data === '[DONE]') continue;
        try {
          const json = JSON.parse(data) as { choices?: { delta?: { content?: unknown } }[] };
          const delta = json.choices?.[0]?.delta?.content;
          if (typeof delta === 'string' && delta) onToken(delta);
        } catch {
          // 忽略不完整的 JSON 片段（下一个事件会补齐语义）
        }
      }
    }
  }
}

export interface ReportRecord {
  title: string;
  bestScore?: number;
  total?: number;
  completed: boolean;
}

/** 生成学习报告：POST /api/report，返回 Markdown 文本 */
export async function generateReport(language: Lang, records: ReportRecord[]): Promise<string> {
  if (!API_URL) throw new Error('AI is not configured (VITE_AI_API_URL missing).');
  const res = await fetch(`${API_URL}/api/report`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language, records }),
  });
  await throwIfNotOk(res);
  const data = (await res.json()) as { report?: unknown };
  if (typeof data.report !== 'string') throw new Error('AI response missing "report" field.');
  return data.report;
}

/** 把理论区 TheoryBlock 拍平为纯文本摘要（供 LLM 上下文使用） */
export function theoryBlocksToText(blocks: TheoryBlock[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case 'heading':
          return `## ${block.text}`;
        case 'paragraph':
          return block.text;
        case 'formula':
          return block.caption ? `$${block.latex}$ (${block.caption})` : `$${block.latex}$`;
        case 'list':
          return block.items.map((item) => `- ${item}`).join('\n');
      }
    })
    .join('\n\n');
}
