import { describe, expect, it } from 'vitest';
import {
  acceleration,
  components,
  inclineKernel,
  maxFriction,
  parallelComponent,
  perpendicularComponent,
  willSlide,
} from './incline';

describe('斜面与摩擦内核', () => {
  it('重力分解：沿斜面 mg·sinθ，垂直斜面 mg·cosθ', () => {
    // m=2, θ=30°, g=10：parallel = 20·0.5 = 10，perpendicular = 20·(√3/2) = 10√3
    expect(parallelComponent(2, 30, 10)).toBeCloseTo(10, 10);
    expect(perpendicularComponent(2, 30, 10)).toBeCloseTo(10 * Math.sqrt(3), 10);
    const c = components(2, 30, 10);
    expect(c.parallel).toBeCloseTo(10, 10);
    expect(c.perpendicular).toBeCloseTo(10 * Math.sqrt(3), 10);
  });

  it('分力平方和 = (mg)²（正交分解自洽）', () => {
    const c = components(3, 42, 9.8);
    const mg = 3 * 9.8;
    expect(Math.hypot(c.parallel, c.perpendicular)).toBeCloseTo(mg, 10);
  });

  it('最大摩擦力 f_max = μ m g cosθ', () => {
    // m=2, θ=30°, μ=0.2, g=10：f_max = 0.2·10√3 = 2√3
    expect(maxFriction(2, 30, 0.2, 10)).toBeCloseTo(2 * Math.sqrt(3), 10);
  });

  it('下滑判断：mg·sinθ > μ·mg·cosθ ⟺ tanθ > μ', () => {
    // θ=30°：tan30°≈0.577 > 0.2 → 下滑；< 0.8 → 静止
    expect(willSlide(2, 30, 0.2, 10)).toBe(true);
    expect(willSlide(2, 30, 0.8, 10)).toBe(false);
  });

  it('临界：tanθ = μ 时恰好不滑（摩擦力不超过最大静摩擦）', () => {
    // θ=45°, μ=1：mg·sin45° = μ·mg·cos45°
    expect(willSlide(2, 45, 1, 10)).toBe(false);
    expect(acceleration(2, 45, 1, 10)).toBe(0);
    // μ 略小于 tan45° 则下滑
    expect(willSlide(2, 45, 0.99, 10)).toBe(true);
  });

  it('下滑加速度 a = g(sinθ − μcosθ)', () => {
    // m=2, θ=30°, μ=0.2, g=10：a = 10(0.5 − 0.2·√3/2) = 5 − √3
    expect(acceleration(2, 30, 0.2, 10)).toBeCloseTo(5 - Math.sqrt(3), 10);
  });

  it('静止时加速度为 0；光滑斜面 a = g·sinθ', () => {
    expect(acceleration(2, 30, 0.8, 10)).toBe(0);
    expect(acceleration(5, 30, 0, 10)).toBeCloseTo(5, 10);
    // 竖直（90°）光滑 → 自由落体
    expect(acceleration(5, 90, 0, 9.8)).toBeCloseTo(9.8, 10);
  });

  it('inclineKernel 命名输入输出', () => {
    const out = inclineKernel({ angle: 30, mu: 0.2, mass: 2 });
    expect(out.parallel).toBeCloseTo(9.8, 10); // g 默认 9.8
    expect(out.perpendicular).toBeCloseTo(9.8 * Math.sqrt(3), 10);
    expect(out.friction).toBeCloseTo(0.2 * 9.8 * Math.sqrt(3), 10);
    expect(out.acceleration).toBeCloseTo(9.8 * (0.5 - 0.1 * Math.sqrt(3)), 10);
  });
});
