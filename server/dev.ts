/**
 * 本地开发服务器：把 fetch 风格处理器桥接到 node:http，监听 8787。
 * 运行：npm run ai:dev（Node ≥ 22.6 直接执行 TS；无需额外依赖）。
 * 会在启动时读取项目根目录 .env（若存在），不覆盖已有环境变量。
 */
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { Readable } from 'node:stream';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { handleRequest } from './handler.ts';

const PORT = 8787;

/** 极简 .env 加载：KEY=VALUE 每行一条，# 开头为注释；不覆盖已存在的环境变量 */
function loadDotEnv(): void {
  const root = join(dirname(fileURLToPath(import.meta.url)), '..');
  let raw: string;
  try {
    raw = readFileSync(join(root, '.env'), 'utf8');
  } catch {
    return; // .env 不存在属正常
  }
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

async function readBody(req: IncomingMessage): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(chunk as Buffer);
  }
  return Buffer.concat(chunks);
}

async function bridge(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    const url = `http://localhost:${PORT}${req.url ?? '/'}`;
    const method = req.method ?? 'GET';
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (typeof value === 'string') headers.set(key, value);
    }
    // 补上客户端 IP，让 handler 的按 IP 限流在本地也生效（不覆盖已有代理头）
    if (!headers.has('x-forwarded-for') && req.socket.remoteAddress) {
      headers.set('x-forwarded-for', req.socket.remoteAddress);
    }
    const hasBody = method !== 'GET' && method !== 'HEAD';
    const request = new Request(url, {
      method,
      headers,
      body: hasBody ? await readBody(req) : undefined,
    });

    const response = await handleRequest(request);
    res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
    if (response.body) {
      // Web ReadableStream → node 流，逐块写出（支持 SSE 流式转发）
      for await (const chunk of Readable.fromWeb(response.body as import('node:stream/web').ReadableStream)) {
        res.write(chunk);
      }
    }
    res.end();
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: { code: 'internal_error', message } }));
  }
}

loadDotEnv();
createServer((req, res) => {
  void bridge(req, res);
}).listen(PORT, () => {
  const configured = process.env.LLM_API_KEY ? 'LLM_API_KEY ✓' : 'LLM_API_KEY 未配置（AI 请求将返回 503）';
  console.log(`[ai:dev] listening on http://localhost:${PORT}  (${configured})`);
  console.log('[ai:dev] 前端请设置 VITE_AI_API_URL=http://localhost:8787');
});
