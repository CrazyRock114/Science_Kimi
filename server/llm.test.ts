import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_BASE_URL,
  DEFAULT_MODEL,
  LlmConfigError,
  chatCompletionText,
  createChatCompletion,
  getLlmConfig,
} from './llm.ts';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('getLlmConfig', () => {
  it('缺 LLM_API_KEY 抛出 LlmConfigError，信息指明缺哪个变量', () => {
    expect(() => getLlmConfig({})).toThrow(LlmConfigError);
    expect(() => getLlmConfig({})).toThrow(/LLM_API_KEY/);
  });

  it('LLM_API_KEY 仅空白字符视为缺失', () => {
    expect(() => getLlmConfig({ LLM_API_KEY: '   ' })).toThrow(LlmConfigError);
  });

  it('默认 baseURL 与 model', () => {
    const config = getLlmConfig({ LLM_API_KEY: 'k' });
    expect(config).toEqual({ baseURL: DEFAULT_BASE_URL, apiKey: 'k', model: DEFAULT_MODEL });
  });

  it('自定义 baseURL（去掉尾部斜杠）与 model，apiKey 去空白', () => {
    const config = getLlmConfig({
      LLM_API_KEY: '  sk-abc  ',
      LLM_BASE_URL: 'https://api.openai.com///',
      LLM_MODEL: 'gpt-4o-mini',
    });
    expect(config.baseURL).toBe('https://api.openai.com');
    expect(config.model).toBe('gpt-4o-mini');
    expect(config.apiKey).toBe('sk-abc');
  });
});

describe('createChatCompletion', () => {
  const messages = [{ role: 'user' as const, content: 'hi' }];

  it('向 {baseURL}/chat/completions 发 POST，带 Authorization 头与 signal', async () => {
    const controller = new AbortController();
    let captured: { url: string; init?: RequestInit } | null = null;
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: unknown, init?: RequestInit) => {
        captured = { url: String(url), init };
        return new Response('ok', { status: 200 });
      }),
    );
    const config = getLlmConfig({ LLM_API_KEY: 'k', LLM_BASE_URL: 'https://llm.example.com' });
    await createChatCompletion({ messages, stream: true, config, signal: controller.signal });
    expect(captured!.url).toBe('https://llm.example.com/chat/completions');
    const headers = new Headers(captured!.init?.headers);
    expect(headers.get('Authorization')).toBe('Bearer k');
    expect(captured!.init?.signal).toBe(controller.signal);
    const body = JSON.parse(String(captured!.init?.body)) as { model: string; stream: boolean };
    expect(body).toMatchObject({ model: DEFAULT_MODEL, stream: true });
  });

  it('上游非 2xx 抛出带状态码的错误', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('rate limited', { status: 429 })),
    );
    const config = getLlmConfig({ LLM_API_KEY: 'k' });
    await expect(createChatCompletion({ messages, stream: false, config })).rejects.toThrow(/429/);
  });
});

describe('chatCompletionText', () => {
  const messages = [{ role: 'user' as const, content: 'hi' }];

  it('返回 choices[0].message.content，并透传 signal', async () => {
    const controller = new AbortController();
    let capturedSignal: AbortSignal | null = null;
    vi.stubGlobal(
      'fetch',
      vi.fn(async (_url: unknown, init?: RequestInit) => {
        capturedSignal = init?.signal ?? null;
        return new Response(JSON.stringify({ choices: [{ message: { content: '回答' } }] }), {
          status: 200,
        });
      }),
    );
    const config = getLlmConfig({ LLM_API_KEY: 'k' });
    const text = await chatCompletionText(messages, config, controller.signal);
    expect(text).toBe('回答');
    expect(capturedSignal).toBe(controller.signal);
  });

  it('响应缺少 content 时抛错', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify({ choices: [] }), { status: 200 })),
    );
    const config = getLlmConfig({ LLM_API_KEY: 'k' });
    await expect(chatCompletionText(messages, config)).rejects.toThrow(/content/);
  });
});
