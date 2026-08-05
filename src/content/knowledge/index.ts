import type { KnowledgePoint, KnowledgePointMeta, Subject } from '../types';
import { handwrittenMetas } from './metas';
import { igcseMetas } from './igcse/metas';

/**
 * 知识点内容层的入口。
 *
 * 首屏性能设计：所有知识点正文（手写 + IGCSE_miniMax 转换课程）都不进主 chunk，
 * 经 getKnowledgePoint 按课动态 import（每课一个 chunk，点进课程页才下载）。
 * 首页/学科列表页只消费下方的轻量元数据 knowledgePointMetas：
 * - 手写知识点的 meta 由 scripts/extract-handwritten-metas.ts 生成（./metas.ts，勿手改）；
 * - IGCSE 课程的 meta 由 scripts/convert-igcse-lessons.ts 生成（igcse/<subject>/meta.ts）。
 */

/** 全部知识点的轻量元数据（按加入顺序）：首页/学科列表页渲染与搜索筛选用 */
export const knowledgePointMetas: KnowledgePointMeta[] = [
  ...handwrittenMetas,
  // IGCSE_miniMax 转换课程（按学科排在既有知识点之后）
  ...igcseMetas,
];

export function getKnowledgePointMetasBySubject(subject: Subject): KnowledgePointMeta[] {
  return knowledgePointMetas.filter((meta) => meta.subject === subject);
}

/** 从完整知识点提取元数据（extract-handwritten-metas.ts 用同一套字段；测试校验两者一致） */
export function toMeta(kp: KnowledgePoint): KnowledgePointMeta {
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

// 全部知识点正文按课懒加载：每课一个 chunk。
// （排除本文件、生成的 meta 文件与 IGCSE 学科聚合 index.ts。）
const lessonModules = import.meta.glob<Record<string, unknown>>([
  './*.ts',
  './igcse/*/*.ts',
  '!./index.ts',
  '!./metas.ts',
  '!./igcse/*/index.ts',
  '!./igcse/*/meta.ts',
]);

const metaByKey = new Map(knowledgePointMetas.map((meta) => [`${meta.subject}/${meta.id}`, meta]));

const loadCache = new Map<string, Promise<KnowledgePoint | undefined>>();

/** 按 id 动态 import 对应课程模块并取出其中的知识点导出 */
async function loadLesson(id: string): Promise<KnowledgePoint | undefined> {
  // 手写知识点：文件名与 id 一致（如 phy-motion-001 → ./phy-motion-001.ts）；
  // IGCSE 转换课程：id 形如 igcse-0625-1-2-motion → ./igcse/0625/1-2-motion.ts
  const igcseMatch = /^igcse-(\d{4})-(.+)$/.exec(id);
  const key = igcseMatch ? `./igcse/${igcseMatch[1]}/${igcseMatch[2]}.ts` : `./${id}.ts`;
  const loader = lessonModules[key];
  if (!loader) return undefined;
  const mod = await loader();
  for (const value of Object.values(mod)) {
    if (value && typeof value === 'object' && (value as KnowledgePoint).id === id) {
      return value as KnowledgePoint;
    }
  }
  return undefined;
}

/**
 * 加载知识点正文：动态 import 对应课程模块（带缓存）。
 * 首页/列表页不需要正文，请使用 knowledgePointMetas。
 */
export function getKnowledgePoint(
  subject: Subject,
  id: string,
): Promise<KnowledgePoint | undefined> {
  if (!metaByKey.has(`${subject}/${id}`)) return Promise.resolve(undefined);
  let pending = loadCache.get(id);
  if (!pending) {
    pending = loadLesson(id);
    // 加载失败（如 chunk 网络错误）不缓存拒绝态，否则界面重试永远拿到同一个失败 Promise
    pending.catch(() => loadCache.delete(id));
    loadCache.set(id, pending);
  }
  return pending;
}

/**
 * 全量加载所有知识点正文。
 * 仅供测试/审计等打包外场景使用；应用代码一律走 knowledgePointMetas + getKnowledgePoint。
 */
export async function getAllKnowledgePoints(): Promise<KnowledgePoint[]> {
  const loaded = await Promise.all(
    knowledgePointMetas.map((meta) => getKnowledgePoint(meta.subject, meta.id)),
  );
  return loaded.filter((kp): kp is KnowledgePoint => kp !== undefined);
}
