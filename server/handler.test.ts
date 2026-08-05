import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_RATE_LIMIT_PER_MIN,
  MAX_BODY_BYTES,
  MAX_CONTEXT_CHARS,
  MAX_HISTORY_TOTAL_CHARS,
  MAX_QUESTION_CHARS,
  handleRequest,
  resetRateLimiter,
} from './handler.ts';
import type { ChatMessage } from './llm.ts';

const ENV = { LLM_API_KEY: 'test-key' };

const TUTOR_BODY = {
  kpTitle: '自由落体运动',
  kpSummary: '物体只在重力作用下从静止开始下落。',
  kpTheory: '自由落体是匀加速直线运动。',
  question: '为什么羽毛和铁球在真空中同时落地？',
};

function tutorRequest(body: unknown = TUTOR_BODY, init?: RequestInit): Request {
  return new Request('http://localhost/api/tutor', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
    ...init,
  });
}

function sseResponse(): Response {
  return new Response('data: {"choices":[]}\ndata: [DONE]\n\n', {
    status: 200,
    headers: { 'Content-Type': 'text/event-stream' },
  });
}

interface FetchCapture {
  url: string;
  body: { messages: ChatMessage[]; model: string; stream: boolean };
  signal: AbortSignal | null;
}

/** stub 全局 fetch，返回捕获器用于断言上游请求内容 */
function stubFetch(response: () => Response = sseResponse): { calls: FetchCapture[] } {
  const calls: FetchCapture[] = [];
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: unknown, init?: RequestInit) => {
      calls.push({
        url: String(url),
        body: JSON.parse(String(init?.body)) as FetchCapture['body'],
        signal: init?.signal ?? null,
      });
      return response();
    }),
  );
  return { calls };
}

beforeEach(() => {
  resetRateLimiter();
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('handleRequest 基础行为', () => {
  it('OPTIONS 预检返回 204 与 CORS 头', async () => {
    const res = await handleRequest(
      new Request('http://localhost/api/tutor', { method: 'OPTIONS' }),
      ENV,
    );
    expect(res.status).toBe(204);
    expect(res.headers.get('Access-Control-Allow-Methods')).toContain('POST');
  });

  it('非 POST 返回结构化 405', async () => {
    const res = await handleRequest(
      new Request('http://localhost/api/tutor', { method: 'GET' }),
      ENV,
    );
    expect(res.status).toBe(405);
    const data = (await res.json()) as { error: { code: string; message: string } };
    expect(data.error.code).toBe('method_not_allowed');
    expect(typeof data.error.message).toBe('string');
  });

  it('未知路由返回结构化 404', async () => {
    const res = await handleRequest(
      new Request('http://localhost/api/nope', { method: 'POST' }),
      ENV,
    );
    expect(res.status).toBe(404);
    const data = (await res.json()) as { error: { code: string } };
    expect(data.error.code).toBe('not_found');
  });

  it('非法 JSON body 返回结构化 400', async () => {
    const res = await handleRequest(tutorRequest('not json {{{'), ENV);
    expect(res.status).toBe(400);
    const data = (await res.json()) as { error: { code: string } };
    expect(data.error.code).toBe('bad_request');
  });

  it('缺 LLM_API_KEY 返回 503 llm_not_configured，且不打上游', async () => {
    const { calls } = stubFetch();
    const res = await handleRequest(tutorRequest(), {});
    expect(res.status).toBe(503);
    const data = (await res.json()) as { error: { code: string } };
    expect(data.error.code).toBe('llm_not_configured');
    expect(calls).toHaveLength(0);
  });

  it('正常请求流式转发上游 SSE', async () => {
    stubFetch();
    const res = await handleRequest(tutorRequest(), ENV);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('text/event-stream');
    expect(await res.text()).toContain('[DONE]');
  });
});

describe('CORS 来源', () => {
  it('默认 Access-Control-Allow-Origin 为 *', async () => {
    stubFetch();
    const res = await handleRequest(tutorRequest(), ENV);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('*');
  });

  it('配置 AI_ALLOWED_ORIGIN 后回传具体域名', async () => {
    stubFetch();
    const env = { ...ENV, AI_ALLOWED_ORIGIN: 'https://example.github.io' };
    const res = await handleRequest(tutorRequest(), env);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('https://example.github.io');
  });
});

describe('输入上限', () => {
  it('超长 question 截断到 MAX_QUESTION_CHARS 而非报错', async () => {
    const { calls } = stubFetch();
    const res = await handleRequest(
      tutorRequest({ ...TUTOR_BODY, question: 'q'.repeat(MAX_QUESTION_CHARS + 3000) }),
      ENV,
    );
    expect(res.status).toBe(200);
    const messages = calls[0].body.messages;
    const last = messages[messages.length - 1];
    expect(last.role).toBe('user');
    expect(last.content).toHaveLength(MAX_QUESTION_CHARS);
  });

  it('超长 kpTheory / kpSummary 截断到 MAX_CONTEXT_CHARS', async () => {
    const { calls } = stubFetch();
    const res = await handleRequest(
      tutorRequest({
        ...TUTOR_BODY,
        kpTheory: 'T'.repeat(MAX_CONTEXT_CHARS + 1000),
        kpSummary: 'S'.repeat(MAX_CONTEXT_CHARS + 1000),
      }),
      ENV,
    );
    expect(res.status).toBe(200);
    const context = calls[0].body.messages.find((m) => m.content.includes('自由落体运动'))!;
    expect(context.content).toContain('T'.repeat(MAX_CONTEXT_CHARS));
    expect(context.content).not.toContain('T'.repeat(MAX_CONTEXT_CHARS + 1));
    expect(context.content).toContain('S'.repeat(MAX_CONTEXT_CHARS));
    expect(context.content).not.toContain('S'.repeat(MAX_CONTEXT_CHARS + 1));
  });

  it('历史对话超出总字符上限时从最旧丢弃（截断而非报错）', async () => {
    const { calls } = stubFetch();
    // 10 条 × 1000 字符 = 10000 > MAX_HISTORY_TOTAL_CHARS，应丢弃最旧若干条
    const history = Array.from({ length: 10 }, (_, i) => ({
      role: i % 2 === 0 ? ('user' as const) : ('assistant' as const),
      content: `msg-${i}-` + 'x'.repeat(1000),
    }));
    const res = await handleRequest(tutorRequest({ ...TUTOR_BODY, history }), ENV);
    expect(res.status).toBe(200);
    const historyMessages = calls[0].body.messages.filter((m) => m.content.startsWith('msg-'));
    const total = historyMessages.reduce((sum, m) => sum + m.content.length, 0);
    expect(total).toBeLessThanOrEqual(MAX_HISTORY_TOTAL_CHARS);
    // 保留的是最近的若干条，且顺序不变
    expect(historyMessages[historyMessages.length - 1].content).toContain('msg-9-');
    expect(historyMessages.length).toBeLessThan(10);
  });

  it('请求体超过 MAX_BODY_BYTES 返回结构化 413，且不打上游', async () => {
    const { calls } = stubFetch();
    const bigBody = JSON.stringify({ ...TUTOR_BODY, question: 'q'.repeat(MAX_BODY_BYTES) });
    expect(bigBody.length).toBeGreaterThan(MAX_BODY_BYTES);
    const res = await handleRequest(tutorRequest(bigBody), ENV);
    expect(res.status).toBe(413);
    const data = (await res.json()) as { error: { code: string } };
    expect(data.error.code).toBe('payload_too_large');
    expect(calls).toHaveLength(0);
  });
});

describe('限流', () => {
  function withIp(request: Request, ip: string): Request {
    return new Request(request, { headers: { 'x-forwarded-for': ip } });
  }

  it('同一 IP 超过限额返回结构化 429 与 Retry-After，且不打上游', async () => {
    const { calls } = stubFetch();
    const env = { ...ENV, AI_RATE_LIMIT_PER_MIN: '2' };
    const statuses: number[] = [];
    for (let i = 0; i < 3; i++) {
      const res = await handleRequest(withIp(tutorRequest(), '1.2.3.4'), env);
      statuses.push(res.status);
    }
    expect(statuses).toEqual([200, 200, 429]);
    expect(calls).toHaveLength(2);
  });

  it('429 响应体为结构化错误并带 Retry-After 头', async () => {
    stubFetch();
    const env = { ...ENV, AI_RATE_LIMIT_PER_MIN: '1' };
    await handleRequest(withIp(tutorRequest(), '5.6.7.8'), env);
    const res = await handleRequest(withIp(tutorRequest(), '5.6.7.8'), env);
    expect(res.status).toBe(429);
    expect(res.headers.get('Retry-After')).toBe('60');
    const data = (await res.json()) as { error: { code: string } };
    expect(data.error.code).toBe('rate_limited');
  });

  it('不同 IP 独立计数', async () => {
    stubFetch();
    const env = { ...ENV, AI_RATE_LIMIT_PER_MIN: '1' };
    const first = await handleRequest(withIp(tutorRequest(), '10.0.0.1'), env);
    const other = await handleRequest(withIp(tutorRequest(), '10.0.0.2'), env);
    expect(first.status).toBe(200);
    expect(other.status).toBe(200);
  });

  it('默认限额为 DEFAULT_RATE_LIMIT_PER_MIN', async () => {
    stubFetch();
    for (let i = 0; i < DEFAULT_RATE_LIMIT_PER_MIN; i++) {
      const res = await handleRequest(withIp(tutorRequest(), '9.9.9.9'), ENV);
      expect(res.status).toBe(200);
    }
    const res = await handleRequest(withIp(tutorRequest(), '9.9.9.9'), ENV);
    expect(res.status).toBe(429);
  });

  it('AI_RATE_LIMIT_PER_MIN=0 关闭限流', async () => {
    stubFetch();
    const env = { ...ENV, AI_RATE_LIMIT_PER_MIN: '0' };
    for (let i = 0; i < 30; i++) {
      const res = await handleRequest(withIp(tutorRequest(), '8.8.8.8'), env);
      expect(res.status).toBe(200);
    }
  });
});

// 注意：jsdom 环境的 AbortController 与 undici Request 的 AbortSignal 不同源，
// 无法把外部 signal 传进 Request 构造函数；这里改用同一性断言——
// 上游收到的 signal 与 request.signal 是同一对象，客户端断连自然传导到上游。
describe('断连传播', () => {
  it('/api/tutor 把客户端 request.signal 传给上游 fetch', async () => {
    const { calls } = stubFetch();
    const request = tutorRequest();
    const res = await handleRequest(request, ENV);
    expect(res.status).toBe(200);
    expect(calls[0].signal).toBe(request.signal);
  });

  it('/api/report 把客户端 request.signal 传给上游 fetch', async () => {
    const { calls } = stubFetch(
      () =>
        new Response(JSON.stringify({ choices: [{ message: { content: '报告' } }] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
    );
    const request = new Request('http://localhost/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: [{ title: '自由落体运动', completed: true }] }),
    });
    const res = await handleRequest(request, ENV);
    expect(res.status).toBe(200);
    const data = (await res.json()) as { report: string };
    expect(data.report).toBe('报告');
    expect(calls[0].signal).toBe(request.signal);
  });
});
