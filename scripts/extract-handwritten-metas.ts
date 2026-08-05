/**
 * 手写知识点元数据提取器。
 *
 * 用法：node scripts/extract-handwritten-metas.ts
 *
 * 手写知识点（src/content/knowledge/*.ts，不含 index/metas）正文按课懒加载，
 * 首页/列表页只消费轻量元数据。本脚本把每个手写知识点 esbuild 打包后动态加载，
 * 提取 meta（id/subject/title/summary/keywords/gradeTier/syllabus/tier 及各布尔标记），
 * 生成 src/content/knowledge/metas.ts（请勿手改；改动手写知识点后需重跑）。
 *
 * content-integrity 测试会校验 metas.ts 与正文一致，漂移会以测试失败暴露。
 *
 * 与 server/ 一致，直接用 node 运行 TS（需 Node >= 22.18 的类型剥离）。
 */
import * as esbuild from 'esbuild';
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const KP_ROOT = resolve(import.meta.dirname, '../src/content/knowledge');
const BUNDLE_CACHE = resolve(import.meta.dirname, '../node_modules/.cache/extract-metas');
const OUT_FILE = join(KP_ROOT, 'metas.ts');

/** 与 src/content/knowledge/index.ts 的 toMeta 保持一致（测试负责校验漂移） */
function toMeta(kp: Record<string, any>): Record<string, unknown> {
  return {
    id: kp.id,
    subject: kp.subject,
    title: kp.title,
    summary: kp.summary,
    gradeTier: kp.gradeTier,
    syllabus: kp.syllabus,
    keywords: kp.keywords,
    ...(kp.tier ? { tier: kp.tier } : {}),
    hasSimulation: kp.simulation !== undefined,
    hasExamPractice: (kp.examPractice?.length ?? 0) > 0,
    hasNarration: kp.narration !== undefined,
    hasExtras: (kp.extras?.length ?? 0) > 0,
  };
}

async function loadKnowledgePoint(file: string): Promise<Record<string, any>> {
  mkdirSync(BUNDLE_CACHE, { recursive: true });
  const outfile = join(BUNDLE_CACHE, `${file.replace(/\.ts$/, '')}.mjs`);
  await esbuild.build({
    entryPoints: [join(KP_ROOT, file)],
    outfile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent',
  });
  const mod = await import(pathToFileURL(outfile).href);
  for (const value of Object.values(mod)) {
    if (value && typeof value === 'object' && typeof (value as any).id === 'string') {
      return value as Record<string, any>;
    }
  }
  throw new Error(`${file} 中找不到知识点导出`);
}

async function main() {
  const files = readdirSync(KP_ROOT)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'metas.ts')
    .sort();

  const metas: Array<Record<string, unknown>> = [];
  for (const file of files) {
    const kp = await loadKnowledgePoint(file);
    metas.push(toMeta(kp));
    console.log(`[ok] ${file}`);
  }

  const source = `// 由 scripts/extract-handwritten-metas.ts 生成，请勿手改。
// 改动手写知识点后重跑 npm run extract:metas（content-integrity 测试会校验一致性）。
import type { KnowledgePointMeta } from '../types';

/** 手写知识点轻量元数据（${metas.length} 个；正文经 getKnowledgePoint 按课懒加载） */
export const handwrittenMetas: KnowledgePointMeta[] = ${JSON.stringify(metas, null, 2)};
`;
  writeFileSync(OUT_FILE, source);
  console.log(`\n已生成 ${OUT_FILE}（${metas.length} 个知识点元数据）`);
}

await main();
