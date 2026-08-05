import { describe, expect, it } from 'vitest';
import type { KnowledgePointMeta } from '../content/types';
import { knowledgePointMetas } from '../content/knowledge';
import { igcseStatements } from '../content/syllabus/igcse-statements';
import {
  buildIgcseCoverageMap,
  getStatementStatus,
  summarizeCoverage,
} from '../content/syllabus/igcse-coverage';

/** 构造仅带 IGCSE 引用的合成 meta（测纯函数用） */
function makeMeta(id: string, igcse: string[]): KnowledgePointMeta {
  return {
    id,
    subject: 'physics',
    title: { zh: id, en: id },
    summary: { zh: '', en: '' },
    gradeTier: 'both',
    syllabus: { igcse },
    keywords: { zh: [], en: [] },
    hasSimulation: false,
    hasExamPractice: false,
    hasNarration: false,
    hasExtras: false,
  };
}

describe('buildIgcseCoverageMap（合成数据）', () => {
  it('statement 级精确引用 → taught', () => {
    const meta = makeMeta('lesson-a', ['0625/1.2.6']);
    const map = buildIgcseCoverageMap([meta]);
    expect(getStatementStatus(map, '0625/1.2.6')).toBe('taught');
    const entry = map.get('0625/1.2.6');
    expect(entry?.taughtBy.map((m) => m.id)).toEqual(['lesson-a']);
    expect(entry?.relatedBy).toEqual([]);
  });

  it('subtopic 级引用 → 其下 statement 为 related', () => {
    const meta = makeMeta('lesson-b', ['0625/1.2']);
    const map = buildIgcseCoverageMap([meta]);
    expect(getStatementStatus(map, '0625/1.2.6')).toBe('related');
    expect(map.get('0625/1.2.6')?.relatedBy.map((m) => m.id)).toEqual(['lesson-b']);
    // subtopic 外的 statement 不受影响
    expect(getStatementStatus(map, '0625/1.3.1')).toBe('none');
    expect(map.get('0625/1.3.1')).toBeUndefined();
  });

  it('topic 级引用 → 整个 topic（含三段编号 subtopic）为 related', () => {
    const meta = makeMeta('lesson-c', ['0625/1']);
    const map = buildIgcseCoverageMap([meta]);
    expect(getStatementStatus(map, '0625/1.1.1')).toBe('related');
    expect(getStatementStatus(map, '0625/1.5.1.1')).toBe('related');
    expect(getStatementStatus(map, '0625/2.1.1.1')).toBe('none');
  });

  it('旧骨架合并 subtopic 引用（0625/1.5）→ 拆分后的 statement 为 related', () => {
    const meta = makeMeta('lesson-d', ['0625/1.5']);
    const map = buildIgcseCoverageMap([meta]);
    expect(getStatementStatus(map, '0625/1.5.1.1')).toBe('related');
    expect(getStatementStatus(map, '0625/1.5.2.6')).toBe('related');
    expect(getStatementStatus(map, '0625/1.4.1')).toBe('none');
  });

  it('同一 statement 同时被精确与前缀引用：taught 优先，relatedBy 去重', () => {
    const exact = makeMeta('lesson-exact', ['0625/1.2.6']);
    const both = makeMeta('lesson-both', ['0625/1.2', '0625/1.2.6']);
    const prefix = makeMeta('lesson-prefix', ['0625/1.2']);
    const map = buildIgcseCoverageMap([exact, both, prefix]);
    const entry = map.get('0625/1.2.6');
    expect(getStatementStatus(map, '0625/1.2.6')).toBe('taught');
    // both 出现在 taughtBy，不在 relatedBy 重复出现
    expect(entry?.taughtBy.map((m) => m.id).sort()).toEqual(['lesson-both', 'lesson-exact']);
    expect(entry?.relatedBy.map((m) => m.id)).toEqual(['lesson-prefix']);
  });

  it('未被引用的 statement → none', () => {
    const map = buildIgcseCoverageMap([makeMeta('lesson-e', ['0625/1.1.1'])]);
    expect(getStatementStatus(map, '0625/6.2.3.1')).toBe('none');
  });

  it('summarizeCoverage 按 Core/Supplement 分档汇总', () => {
    const map = buildIgcseCoverageMap([
      makeMeta('t', ['0625/1.1.1']), // core，taught
      makeMeta('r', ['0625/1.1']), // core+supplement 全部 related
    ]);
    const summary = summarizeCoverage(
      igcseStatements.filter((s) => s.id.startsWith('0625/1.1.')),
      map,
    );
    expect(summary.all.total).toBe(7);
    expect(summary.all.covered).toBe(7);
    expect(summary.all.taught).toBe(1);
    expect(summary.core.total).toBe(3);
    expect(summary.supplement.total).toBe(4);
    expect(summary.core.covered + summary.supplement.covered).toBe(summary.all.covered);
  });
});

describe('buildIgcseCoverageMap（真实知识点数据）', () => {
  const map = buildIgcseCoverageMap(knowledgePointMetas);

  it('转换课程的 statement 级引用精确命中', () => {
    const entry = map.get('0625/1.2.6');
    expect(getStatementStatus(map, '0625/1.2.6')).toBe('taught');
    expect(entry?.taughtBy.some((m) => m.id === 'igcse-0625-1-2-motion')).toBe(true);
  });

  it('手写知识点的 topic/subtopic 级引用进入 relatedBy', () => {
    // bio-cell-001 引用 "0610/2"（topic 级）；其下 statement 同时被转换课程精确教授，
    // 故 bio-cell-001 出现在 relatedBy（状态仍为 taught）
    const bioCell001 = knowledgePointMetas.find((m) => m.id === 'bio-cell-001');
    expect(bioCell001).toBeDefined();
    const under2 = igcseStatements.filter((s) => s.id.startsWith('0610/2.'));
    expect(under2.length).toBeGreaterThan(0);
    for (const s of under2) {
      expect(getStatementStatus(map, s.id)).not.toBe('none');
    }
    expect(under2.some((s) => map.get(s.id)?.relatedBy.includes(bioCell001!))).toBe(true);
  });

  it('覆盖口径与 scripts/check-igcse-coverage.ts 一致（id === ref 或以 "ref." 为前缀）', () => {
    // 与脚本相同的判定规则，但引用取自 meta 的 syllabus.igcse
    // （脚本因 node 无法 import 知识点索引而按文本扫描，规则一致）
    const refs = knowledgePointMetas.flatMap((m) => m.syllabus.igcse ?? []);
    for (const s of igcseStatements) {
      const scriptCovered = refs.some((ref) => s.id === ref || s.id.startsWith(`${ref}.`));
      expect(getStatementStatus(map, s.id) !== 'none', `${s.id} 覆盖判定应与脚本一致`).toBe(
        scriptCovered,
      );
    }
  });

  it('各科覆盖率与逐条判定汇总一致', () => {
    for (const code of ['0625', '0620', '0610']) {
      const statements = igcseStatements.filter((s) => s.id.startsWith(`${code}/`));
      const summary = summarizeCoverage(statements, map);
      expect(summary.all.total).toBe(statements.length);
      expect(summary.core.total + summary.supplement.total).toBe(statements.length);
      expect(summary.all.covered).toBeGreaterThan(0);
    }
  });
});
