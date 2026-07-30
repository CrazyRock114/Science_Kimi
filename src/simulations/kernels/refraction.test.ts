import { describe, expect, it } from 'vitest';
import {
  criticalAngle,
  isTotalInternalReflection,
  refractionAngle,
  refractionKernel,
} from './refraction';

describe('折射内核（斯涅尔定律）', () => {
  it('空气 → 玻璃：n₁=1, n₂=1.5, θ₁=40° → θ₂≈25.37°', () => {
    expect(refractionAngle(1, 1.5, 40)).toBeCloseTo(25.37, 2);
  });

  it('垂直入射（θ₁=0°）不偏折', () => {
    expect(refractionAngle(1, 1.5, 0)).toBe(0);
    expect(refractionAngle(2.5, 1, 0)).toBe(0);
  });

  it('同种介质（n₁=n₂）不发生偏折', () => {
    expect(refractionAngle(1.5, 1.5, 30)).toBeCloseTo(30);
  });

  it('光密 → 光疏时折射角大于入射角（远离法线）', () => {
    expect(refractionAngle(1.5, 1, 30)).toBeCloseTo(48.59, 2);
  });

  it('临界角 θc = arcsin(n₂/n₁)：玻璃→空气 θc≈41.81°', () => {
    expect(criticalAngle(1.5, 1)).toBeCloseTo(41.81, 2);
  });

  it('n₁ ≤ n₂ 时无临界角（返回 NaN）', () => {
    expect(Number.isNaN(criticalAngle(1, 1.5))).toBe(true);
    expect(Number.isNaN(criticalAngle(1.5, 1.5))).toBe(true);
  });

  it('超过临界角发生全反射，折射角为 NaN', () => {
    expect(isTotalInternalReflection(1.5, 1, 50)).toBe(true);
    expect(Number.isNaN(refractionAngle(1.5, 1, 50))).toBe(true);
  });

  it('未超过临界角不发生全反射；光疏→光密永不全反射', () => {
    expect(isTotalInternalReflection(1.5, 1, 40)).toBe(false);
    expect(isTotalInternalReflection(1, 1.5, 89)).toBe(false);
  });

  it('恰好等于临界角时折射角为 90°（沿界面）', () => {
    const critical = criticalAngle(1.5, 1);
    expect(refractionAngle(1.5, 1, critical)).toBeCloseTo(90);
    expect(isTotalInternalReflection(1.5, 1, critical)).toBe(false);
  });

  it('refractionKernel 命名输入输出', () => {
    const out = refractionKernel({ n1: 1, n2: 1.5, incidentAngle: 40 });
    expect(out.refractedAngle).toBeCloseTo(25.37, 2);
    expect(Number.isNaN(out.criticalAngle)).toBe(true);
    expect(out.tir).toBe(0);
  });
});
