import { describe, expect, it } from 'vitest';
import { igcseStatements } from '../content/syllabus/igcse-statements';
import {
  getIgcseSyllabus,
  resolveIgcseRef,
  resolveIgcseStatement,
} from '../content/syllabus/igcse';

describe('IGCSE 考纲引用解析', () => {
  it('一级 topic 引用', () => {
    const r = resolveIgcseRef('0620/7');
    expect(r?.topic.code).toBe('7');
    expect(r?.subtopic).toBeUndefined();
    expect(r?.statement).toBeUndefined();
  });

  it('二级 subtopic 引用', () => {
    const r = resolveIgcseRef('0625/1.2');
    expect(r?.subtopic?.code).toBe('1.2');
    expect(r?.statement).toBeUndefined();
  });

  it('三段编号的 subtopic 引用（0625/1.5.1 是 subtopic 而非 statement）', () => {
    const r = resolveIgcseRef('0625/1.5.1');
    expect(r?.subtopic?.code).toBe('1.5.1');
    expect(r?.statement).toBeUndefined();
  });

  it('三级 statement 引用', () => {
    const r = resolveIgcseRef('0625/1.2.6');
    expect(r?.subtopic?.code).toBe('1.2');
    expect(r?.statement?.id).toBe('0625/1.2.6');
    expect(r?.statement?.tier).toBe('core');
    // 三段编号 subtopic 下的 statement
    expect(resolveIgcseRef('0625/1.5.1.12')?.statement?.n).toBe(12);
    expect(resolveIgcseStatement('0625/1.2.6')?.label.en).not.toBe('');
  });

  it('resolveIgcseStatement 对非 statement 引用返回 undefined', () => {
    expect(resolveIgcseStatement('0625/1.2')).toBeUndefined();
    expect(resolveIgcseStatement('0625/1')).toBeUndefined();
  });

  it('兼容：旧骨架中被拆分的 subtopic 引用退化为 topic 级解析', () => {
    for (const ref of ['0625/1.5', '0625/1.7', '0625/2.1', '0625/3.2', '0625/4.2', '0625/4.3']) {
      const r = resolveIgcseRef(ref);
      expect(r, `${ref} 应可解析`).toBeDefined();
      expect(r?.subtopic).toBeUndefined();
    }
  });

  it('无法解析的引用返回 undefined', () => {
    expect(resolveIgcseRef('')).toBeUndefined();
    expect(resolveIgcseRef('0625')).toBeUndefined();
    expect(resolveIgcseRef('9999/1')).toBeUndefined();
    expect(resolveIgcseRef('0625/99')).toBeUndefined();
    expect(resolveIgcseRef('0625/1.99')).toBeUndefined();
    expect(resolveIgcseRef('0625/1.2.99')).toBeUndefined();
  });
});

describe('IGCSE statement 数据自洽', () => {
  it('id 全局唯一', () => {
    const ids = igcseStatements.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  for (const s of igcseStatements) {
    it(`${s.id} 结构合法`, () => {
      // id 的父级 subtopic 必须存在于骨架中，且末段序号与 n 一致
      const resolved = resolveIgcseRef(s.id);
      expect(resolved?.statement?.id).toBe(s.id);
      const segments = s.id.split('/')[1].split('.');
      expect(Number(segments[segments.length - 1])).toBe(s.n);
      // zh 豁免：源数据 zh 可选，缺失时暂以英文填充，此处不校验中文；
      // 英文 label 必须非空，tier 必须合法
      expect(s.label.en.trim()).not.toBe('');
      expect(['core', 'supplement']).toContain(s.tier);
    });
  }

  it('三个学科的 statement 都有数据', () => {
    for (const code of ['0625', '0620', '0610']) {
      expect(getIgcseSyllabus(code)).toBeDefined();
      expect(igcseStatements.some((s) => s.id.startsWith(`${code}/`))).toBe(true);
    }
  });
});
