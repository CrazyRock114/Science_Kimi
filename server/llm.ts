/**
 * OpenAI 兼容聊天接口的最小封装（无 SDK，直接 fetch）。
 * 配置全部走环境变量：
 *   LLM_BASE_URL  默认 https://api.deepseek.com
 *   LLM_API_KEY   必填，缺失时抛出 LlmConfigError
 *   LLM_MODEL     默认 deepseek-chat
 * 兼容 DeepSeek / OpenAI / 任何 OpenAI 兼容端点。
 */

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LlmConfig {
  baseURL: string;
  apiKey: string;
  model: string;
}

/** 配置缺失/非法错误：handler 将其转换为结构化 500 响应 */
export class LlmConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LlmConfigError';
  }
}

export const DEFAULT_BASE_URL = 'https://api.deepseek.com';
export const DEFAULT_MODEL = 'deepseek-chat';

type EnvLike = Record<string, string | undefined>;

/** 从环境变量读取配置；无 key 时抛出 LlmConfigError（信息明确，不含敏感内容） */
export function getLlmConfig(env: EnvLike = process.env): LlmConfig {
  const apiKey = env.LLM_API_KEY?.trim();
  if (!apiKey) {
    throw new LlmConfigError(
      'LLM_API_KEY is not set. Configure LLM_API_KEY (and optionally LLM_BASE_URL / LLM_MODEL) to enable AI features.',
    );
  }
  const baseURL = (env.LLM_BASE_URL?.trim() || DEFAULT_BASE_URL).replace(/\/+$/, '');
  const model = env.LLM_MODEL?.trim() || DEFAULT_MODEL;
  return { baseURL, apiKey, model };
}

export interface ChatCompletionOptions {
  messages: ChatMessage[];
  /** true 时请求 SSE 流式响应 */
  stream: boolean;
  config?: LlmConfig;
  signal?: AbortSignal;
}

/**
 * 调用 POST {baseURL}/chat/completions，原样返回 fetch Response。
 * - stream=true：body 为上游 SSE 流，调用方可直接转发。
 * - stream=false：调用方自行 res.json() 取 choices[0].message.content。
 * 上游返回非 2xx 时抛出带状态码与摘要的错误。
 */
export async function createChatCompletion(options: ChatCompletionOptions): Promise<Response> {
  const config = options.config ?? getLlmConfig();
  const res = await fetch(`${config.baseURL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: options.messages,
      stream: options.stream,
    }),
    signal: options.signal,
  });
  if (!res.ok) {
    const detail = (await res.text().catch(() => '')).slice(0, 300);
    throw new Error(`LLM upstream error ${res.status}: ${detail}`);
  }
  return res;
}

/** 非流式便捷封装：返回助手消息文本；signal 用于客户端断连时取消上游请求 */
export async function chatCompletionText(
  messages: ChatMessage[],
  config?: LlmConfig,
  signal?: AbortSignal,
): Promise<string> {
  const res = await createChatCompletion({ messages, stream: false, config, signal });
  const data: unknown = await res.json();
  const content = (data as { choices?: { message?: { content?: unknown } }[] })?.choices?.[0]
    ?.message?.content;
  if (typeof content !== 'string') {
    throw new Error('LLM response missing choices[0].message.content');
  }
  return content;
}
