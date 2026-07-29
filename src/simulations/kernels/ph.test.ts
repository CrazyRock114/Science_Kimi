import { describe, expect, it } from 'vitest';
import { hydrogenIonConcentration, phKernel, universalIndicatorColor } from './ph';

describe('pH 内核', () => {
  it('[H⁺] = 10^(-pH)', () => {
    expect(hydrogenIonConcentration(7)).toBeCloseTo(1e-7, 12);
    expect(hydrogenIonConcentration(0)).toBe(1);
    expect(hydrogenIonConcentration(14)).toBeCloseTo(1e-14, 20);
    expect(hydrogenIonConcentration(2)).toBeCloseTo(0.01, 10);
  });

  it('pH 减小 1，[H⁺] 增大 10 倍', () => {
    expect(hydrogenIonConcentration(3) / hydrogenIonConcentration(5)).toBeCloseTo(100, 6);
  });

  it('phKernel 命名输入输出', () => {
    const out = phKernel({ pH: 7 });
    expect(out.hConcentration).toBeCloseTo(1e-7, 12);
  });

  it('通用指示剂颜色：酸性偏红、中性偏绿、碱性偏蓝紫', () => {
    expect(universalIndicatorColor(1)).toMatch(/^rgb\(/);
    expect(universalIndicatorColor(7)).toBe('rgb(34, 197, 94)');
    // 越界值被截断
    expect(universalIndicatorColor(-2)).toBe(universalIndicatorColor(0));
    expect(universalIndicatorColor(99)).toBe(universalIndicatorColor(14));
  });
});
