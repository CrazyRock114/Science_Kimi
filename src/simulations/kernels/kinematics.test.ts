import { describe, expect, it } from 'vitest';
import { displacementAt, kinematicsKernel, velocityAt } from './kinematics';

describe('运动学内核（匀变速直线运动）', () => {
  it('末速度 v = u + at', () => {
    expect(velocityAt(10, 2, 3)).toBe(16);
    expect(velocityAt(0, 2.5, 4)).toBe(10);
  });

  it('位移 s = ut + ½at²', () => {
    expect(displacementAt(0, 4, 2)).toBe(8);
    expect(displacementAt(10, 0, 5)).toBe(50);
  });

  it('刹车：25 m/s 以 -5 m/s² 减速，5 s 后停下', () => {
    expect(velocityAt(25, -5, 5)).toBe(0);
    expect(displacementAt(25, -5, 5)).toBe(62.5);
  });

  it('匀速运动（a = 0）时 v 不变、s 与 t 成正比', () => {
    expect(velocityAt(12, 0, 100)).toBe(12);
    expect(displacementAt(12, 0, 4)).toBe(48);
  });

  it('kinematicsKernel 命名输入输出', () => {
    expect(kinematicsKernel({ u: 0, a: 2, t: 3 })).toEqual({ v: 6, s: 9 });
  });
});
