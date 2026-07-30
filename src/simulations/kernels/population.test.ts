import { describe, expect, it } from 'vitest';
import { doublingTime, populationAt, populationKernel } from './population';

describe('种群数量增长内核', () => {
  it('指数增长（J 型）：N = N₀·e^(rt)', () => {
    expect(populationAt(0, 0, 0.3, 500, 10)).toBe(10);
    expect(populationAt(1, 0, 0.3, 500, 10)).toBeCloseTo(10 * Math.exp(0.3), 10);
  });

  it('指数增长：一个倍增时间后数量翻倍', () => {
    const td = doublingTime(0.3);
    expect(td).toBeCloseTo(Math.LN2 / 0.3, 12);
    expect(populationAt(td, 0, 0.3, 500, 10)).toBeCloseTo(20, 8);
  });

  it('逻辑斯谛（S 型）：t = 0 时 N = N₀，公式 N = K/(1+((K−N₀)/N₀)·e^(−rt))', () => {
    expect(populationAt(0, 1, 0.3, 500, 10)).toBeCloseTo(10, 10);
    const t = 5;
    const expected = 500 / (1 + (500 - 10) / 10 * Math.exp(-0.3 * t));
    expect(populationAt(t, 1, 0.3, 500, 10)).toBeCloseTo(expected, 10);
  });

  it('逻辑斯谛：长期趋于环境容纳量 K 且不越过', () => {
    expect(populationAt(100, 1, 0.3, 500, 10)).toBeCloseTo(500, 4);
    for (let t = 0; t <= 50; t += 5) {
      expect(populationAt(t, 1, 0.3, 500, 10)).toBeLessThanOrEqual(500);
    }
  });

  it('逻辑斯谛：N₀ = K 时种群保持稳定', () => {
    expect(populationAt(10, 1, 0.3, 500, 500)).toBeCloseTo(500, 10);
  });

  it('S 型曲线：初期近指数、中期近线性、后期减速', () => {
    const n5 = populationAt(5, 1, 0.5, 1000, 10);
    const n10 = populationAt(10, 1, 0.5, 1000, 10);
    const n15 = populationAt(15, 1, 0.5, 1000, 10);
    // 增长率先升后降：前段增量 < 中段增量 > 后段增量
    expect(n10 - n5).toBeGreaterThan(n5 - 10);
    expect(n15 - n10).toBeLessThan(n10 - n5);
  });

  it('populationKernel 命名输入输出', () => {
    const out = populationKernel({ t: 0, model: 1, r: 0.3, k: 500, n0: 10 });
    expect(out.N).toBeCloseTo(10, 10);
    expect(out.doublingTime).toBeCloseTo(Math.LN2 / 0.3, 12);
  });
});
