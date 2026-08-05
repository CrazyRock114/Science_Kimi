/**
 * IGCSE 考纲 statement 覆盖度数据层（考纲地图页用）。
 *
 * 从知识点轻量元数据（knowledgePointMetas）静态计算每条 statement 的覆盖情况：
 * - taught：被课程以 statement 级引用精确命中（如 "0625/1.2.6"），可展开"教它的课程"；
 * - related：仅被 topic/subtopic 级引用覆盖（手写知识点，如 "0610/2"、"0620/7.1"）；
 * - none：未被任何知识点引用。
 *
 * 覆盖判定与 scripts/check-igcse-coverage.ts 口径一致：
 * statement id 与引用完全相等，或以 "引用." 为前缀，即视为被该引用覆盖
 * （covered = taught ∪ related）。
 */

import type { KnowledgePointMeta } from '../types';
import { igcseStatementById, igcseStatements, type IgcseStatement } from './igcse-statements';

export type StatementCoverageStatus = 'taught' | 'related' | 'none';

export interface StatementCoverage {
  /** 精确引用该 statement 的课程（statement 级引用） */
  taughtBy: KnowledgePointMeta[];
  /** 仅以 topic/subtopic 级引用覆盖该 statement 的知识点（不含 taughtBy 中的课程） */
  relatedBy: KnowledgePointMeta[];
}

export type IgcseCoverageMap = ReadonlyMap<string, StatementCoverage>;

/** 从知识点 meta 列表构建 statement 覆盖映射（纯函数，结果可缓存复用） */
export function buildIgcseCoverageMap(metas: readonly KnowledgePointMeta[]): IgcseCoverageMap {
  const taughtBy = new Map<string, KnowledgePointMeta[]>();
  const relatedBy = new Map<string, KnowledgePointMeta[]>();

  const push = (map: Map<string, KnowledgePointMeta[]>, id: string, meta: KnowledgePointMeta) => {
    const list = map.get(id);
    if (list) {
      if (!list.includes(meta)) list.push(meta);
    } else {
      map.set(id, [meta]);
    }
  };

  for (const meta of metas) {
    for (const ref of meta.syllabus.igcse ?? []) {
      if (igcseStatementById.has(ref)) {
        // statement 级精确引用
        push(taughtBy, ref, meta);
      } else {
        // topic/subtopic 级引用：覆盖其下全部 statement
        for (const s of igcseStatements) {
          if (s.id === ref || s.id.startsWith(`${ref}.`)) push(relatedBy, s.id, meta);
        }
      }
    }
  }

  // relatedBy 去除已精确教授该 statement 的课程（同一条 statement 不重复列同一课程）
  const map = new Map<string, StatementCoverage>();
  const ids = new Set([...taughtBy.keys(), ...relatedBy.keys()]);
  for (const id of ids) {
    const taught = taughtBy.get(id) ?? [];
    const related = (relatedBy.get(id) ?? []).filter((meta) => !taught.includes(meta));
    map.set(id, { taughtBy: taught, relatedBy: related });
  }
  return map;
}

/** 查询单条 statement 的覆盖状态 */
export function getStatementStatus(
  coverage: IgcseCoverageMap,
  statementId: string,
): StatementCoverageStatus {
  const entry = coverage.get(statementId);
  if (!entry) return 'none';
  if (entry.taughtBy.length > 0) return 'taught';
  return 'related';
}

export interface TierCoverageSummary {
  total: number;
  /** 被引用覆盖（taught ∪ related），与 check-igcse-coverage.ts 口径一致 */
  covered: number;
  /** 其中被课程精确教授的条数 */
  taught: number;
}

export interface SyllabusCoverageSummary {
  core: TierCoverageSummary;
  supplement: TierCoverageSummary;
  all: TierCoverageSummary;
}

/** 汇总一组 statement 的覆盖率（按 Core/Supplement 分档） */
export function summarizeCoverage(
  statements: readonly IgcseStatement[],
  coverage: IgcseCoverageMap,
): SyllabusCoverageSummary {
  const summary: SyllabusCoverageSummary = {
    core: { total: 0, covered: 0, taught: 0 },
    supplement: { total: 0, covered: 0, taught: 0 },
    all: { total: 0, covered: 0, taught: 0 },
  };
  for (const s of statements) {
    const tier = summary[s.tier];
    const status = getStatementStatus(coverage, s.id);
    for (const bucket of [tier, summary.all]) {
      bucket.total += 1;
      if (status !== 'none') bucket.covered += 1;
      if (status === 'taught') bucket.taught += 1;
    }
  }
  return summary;
}
