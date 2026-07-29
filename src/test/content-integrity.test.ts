import { describe, expect, it } from 'vitest';
import { knowledgePoints } from '../content/knowledge';
import { resolveIgcseRef } from '../content/syllabus/igcse';
import { resolvePepRef } from '../content/syllabus/pep';
import { hasSimulationRenderer } from '../simulations/registry';
import type { Localized } from '../content/types';

function expectLocalizedNonEmpty(value: Localized<string>, what: string) {
  expect(value.zh.trim(), `${what} 缺少中文`).not.toBe('');
  expect(value.en.trim(), `${what} 缺少英文`).not.toBe('');
}

describe('内容数据完整性', () => {
  it('知识点 id 全局唯一', () => {
    const ids = knowledgePoints.map((kp) => kp.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  for (const kp of knowledgePoints) {
    describe(kp.id, () => {
      it('标题 / 摘要双语非空', () => {
        expectLocalizedNonEmpty(kp.title, 'title');
        expectLocalizedNonEmpty(kp.summary, 'summary');
      });

      it('关键词双语非空', () => {
        expect(kp.keywords.zh.length).toBeGreaterThan(0);
        expect(kp.keywords.en.length).toBeGreaterThan(0);
      });

      it('理论区双语齐全且内容非空', () => {
        for (const lang of ['zh', 'en'] as const) {
          expect(kp.theory[lang].length, `theory.${lang} 为空`).toBeGreaterThan(0);
        }
        for (const lang of ['zh', 'en'] as const) {
          for (const block of kp.theory[lang]) {
            if (block.type === 'paragraph' || block.type === 'heading') {
              expect(block.text.trim()).not.toBe('');
            } else if (block.type === 'formula') {
              expect(block.latex.trim()).not.toBe('');
            } else {
              expect(block.items.length).toBeGreaterThan(0);
              for (const item of block.items) expect(item.trim()).not.toBe('');
            }
          }
        }
      });

      it('小测：双语题干/选项/解析齐全，答案索引合法', () => {
        expect(kp.quiz.length).toBeGreaterThan(0);
        for (const item of kp.quiz) {
          expectLocalizedNonEmpty(item.question, `quiz ${item.id} question`);
          expectLocalizedNonEmpty(item.explanation, `quiz ${item.id} explanation`);
          expect(item.options.zh.length).toBeGreaterThanOrEqual(2);
          expect(item.options.zh.length).toBe(item.options.en.length);
          for (const option of [...item.options.zh, ...item.options.en]) {
            expect(option.trim()).not.toBe('');
          }
          expect(item.answerIndex).toBeGreaterThanOrEqual(0);
          expect(item.answerIndex).toBeLessThan(item.options.zh.length);
        }
      });

      it('考纲引用可解析（IGCSE 与人教版）', () => {
        const hasAny =
          (kp.syllabus.igcse?.length ?? 0) > 0 || (kp.syllabus.pep?.length ?? 0) > 0;
        expect(hasAny, '知识点必须至少挂一条考纲/教材映射').toBe(true);
        for (const ref of kp.syllabus.igcse ?? []) {
          expect(resolveIgcseRef(ref), `IGCSE 引用无法解析: ${ref}`).toBeDefined();
        }
        for (const ref of kp.syllabus.pep ?? []) {
          expect(resolvePepRef(ref), `人教版引用无法解析: ${ref}`).toBeDefined();
        }
      });

      it('仿真：渲染器已注册，参数默认值在范围内', () => {
        if (!kp.simulation) return;
        expect(
          hasSimulationRenderer(kp.simulation.renderer),
          `渲染器未注册: ${kp.simulation.renderer}`,
        ).toBe(true);
        const keys = new Set<string>();
        for (const def of kp.simulation.params) {
          expect(keys.has(def.key), `参数 key 重复: ${def.key}`).toBe(false);
          keys.add(def.key);
          expect(def.min).toBeLessThan(def.max);
          expect(def.step).toBeGreaterThan(0);
          expect(def.defaultValue).toBeGreaterThanOrEqual(def.min);
          expect(def.defaultValue).toBeLessThanOrEqual(def.max);
          expectLocalizedNonEmpty(def.label, `param ${def.key} label`);
        }
      });

      it('预设：参数 key 合法且取值在范围内', () => {
        if (!kp.presets || !kp.simulation) return;
        const defs = new Map(kp.simulation.params.map((d) => [d.key, d]));
        for (const preset of kp.presets) {
          expectLocalizedNonEmpty(preset.name, `preset ${preset.id} name`);
          for (const [key, value] of Object.entries(preset.params)) {
            const def = defs.get(key);
            expect(def, `预设 ${preset.id} 引用了未定义的参数: ${key}`).toBeDefined();
            expect(value).toBeGreaterThanOrEqual(def!.min);
            expect(value).toBeLessThanOrEqual(def!.max);
          }
        }
      });

      it('探针：引用的内核存在，描述双语非空', () => {
        for (const probe of kp.expectedResults ?? []) {
          expectLocalizedNonEmpty(probe.description, `probe ${probe.id} description`);
          expect(kp.kernels?.[probe.kernel], `内核不存在: ${probe.kernel}`).toBeDefined();
        }
      });
    });
  }
});
