import { describe, expect, it } from 'vitest';
import { adaptIgcseNarration, igcseLiveFormulas } from './adapt';
import type { EquationBlock, NarrationScript as RefNarrationScript } from './types';

describe('adaptIgcseNarration', () => {
  it('保留行级 latex/action/pause，段落标题作为段落 text，段落类型映射为 kind', () => {
    const ref: RefNarrationScript = {
      id: 'demo',
      sections: [
        {
          id: 'gradient',
          type: 'concept',
          title: { en: 'Gradient tells you the rate', zh: '斜率代表变化率' },
          lines: [
            {
              id: 'gradient-1',
              text: { en: 'The gradient is the speed.', zh: '斜率就是速度。' },
              latex: 'v = \\frac{\\Delta s}{\\Delta t}',
            },
            {
              id: 'gradient-2',
              text: { en: 'Set acceleration to zero.', zh: '把加速度设为零。' },
              action: { type: 'setParams', params: { u: 10, a: 0 } },
              pause: 1,
            },
          ],
        },
        {
          id: 'try-it',
          type: 'animation',
          title: { en: 'Try it' },
          lines: [{ id: 'try-1', text: { en: 'Press play.' } }],
        },
      ],
    };
    const script = adaptIgcseNarration(ref);
    expect(script.sections).toHaveLength(2);

    const first = script.sections[0];
    expect(first.kind).toBe('concept');
    expect(first.text).toEqual({ zh: '斜率代表变化率', en: 'Gradient tells you the rate' });
    expect(first.lines).toHaveLength(2);
    expect(first.lines?.[0].latex).toBe('v = \\frac{\\Delta s}{\\Delta t}');
    expect(first.lines?.[1].action).toEqual({ type: 'setParams', params: { u: 10, a: 0 } });
    expect(first.lines?.[1].pause).toBe(1);

    // animation → interaction；zh 缺失回退 en（段落标题与行文本同样处理）
    const second = script.sections[1];
    expect(second.kind).toBe('interaction');
    expect(second.text.zh).toBe('Try it');
    expect(second.lines?.[0].text.zh).toBe('Press play.');
  });
});

describe('igcseLiveFormulas', () => {
  it('只保留带 substitute 的公式，substitute 接收内核读数', () => {
    const equations: EquationBlock[] = [
      { latex: 'v = \\frac{s}{t}', meaning: { en: 'speed' } },
      {
        latex: 's = ut + \\tfrac{1}{2}at^{2}',
        meaning: { en: 'distance' },
        substitute: (r) => `s = ${r['distance'] ?? 0}\\ \\text{m}`,
      },
    ];
    const formulas = igcseLiveFormulas(equations);
    expect(formulas).toHaveLength(1);
    expect(formulas[0].id).toBe('eq-2');
    expect(formulas[0].latex).toBe('s = ut + \\tfrac{1}{2}at^{2}');
    expect(formulas[0].substituteFromReadouts({ distance: 25 })).toBe('s = 25\\ \\text{m}');
    // 读数缺失时按源约定回退 0
    expect(formulas[0].substituteFromReadouts({})).toBe('s = 0\\ \\text{m}');
  });
});
