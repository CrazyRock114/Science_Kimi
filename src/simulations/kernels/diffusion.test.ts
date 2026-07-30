import { describe, expect, it } from 'vitest';
import { diffusionKernel, equilibriumCount, expectedLeftCount } from './diffusion';

describe('扩散作用内核', () => {
  it('t = 0 时左侧为全部初始粒子', () => {
    expect(expectedLeftCount(0, 100)).toBe(100);
    expect(expectedLeftCount(0, 20)).toBe(20);
  });

  it('动态平衡时两侧各半', () => {
    expect(equilibriumCount(100)).toBe(50);
    expect(expectedLeftCount(100, 100)).toBeCloseTo(50, 6);
  });

  it('指数趋衡：L(t) = n0/2·(1 + e^(−t/τ))，τ = 2', () => {
    expect(expectedLeftCount(2, 100)).toBeCloseTo(50 + 50 * Math.exp(-1), 10);
    expect(expectedLeftCount(4, 200)).toBeCloseTo(100 + 100 * Math.exp(-2), 10);
  });

  it('左侧计数随时间单调递减趋于平衡值', () => {
    let prev = Infinity;
    for (let t = 0; t <= 10; t += 1) {
      const v = expectedLeftCount(t, 100);
      expect(v).toBeLessThanOrEqual(prev);
      expect(v).toBeGreaterThanOrEqual(50);
      prev = v;
    }
  });

  it('diffusionKernel 命名输入输出：left + right = n0', () => {
    const out = diffusionKernel({ t: 2, n0: 100 });
    expect(out.equilibrium).toBe(50);
    expect(out.left + out.right).toBeCloseTo(100, 10);
    expect(diffusionKernel({ t: 0, n0: 60 })).toEqual({
      left: 60,
      right: 0,
      equilibrium: 30,
    });
  });
});
