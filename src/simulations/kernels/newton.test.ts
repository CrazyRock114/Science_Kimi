import { describe, expect, it } from 'vitest';
import {
  acceleration,
  displacementAt,
  maxFriction,
  netForce,
  newtonKernel,
  speedAt,
  willMove,
} from './newton';

describe('牛顿第二定律内核', () => {
  it('最大摩擦力 f = μ m g', () => {
    expect(maxFriction(2, 0.1, 9.8)).toBeCloseTo(1.96, 10);
    expect(maxFriction(10, 0.5, 10)).toBeCloseTo(50, 10);
    expect(maxFriction(5, 0, 9.8)).toBe(0);
  });

  it('合力 F_net = F − μmg（F 大于摩擦时）', () => {
    // m=2, μ=0.1, g=9.8 → f=1.96；F=10 → F_net=8.04
    expect(netForce(10, 2, 0.1, 9.8)).toBeCloseTo(8.04, 10);
  });

  it('加速度 a = F_net / m', () => {
    expect(acceleration(10, 2, 0.1, 9.8)).toBeCloseTo(4.02, 10);
    // 无摩擦：a = F/m
    expect(acceleration(20, 4, 0, 10)).toBeCloseTo(5, 10);
  });

  it('拉力不超过最大摩擦时物块静止（合力、加速度、位移均为 0）', () => {
    // f_max = 1.96 N
    expect(willMove(1, 2, 0.1, 9.8)).toBe(false);
    expect(netForce(1, 2, 0.1, 9.8)).toBe(0);
    expect(acceleration(1, 2, 0.1, 9.8)).toBe(0);
    expect(speedAt(1, 2, 0.1, 5, 9.8)).toBe(0);
    expect(displacementAt(1, 2, 0.1, 5, 9.8)).toBe(0);
  });

  it('边界：拉力恰好等于最大摩擦时仍保持静止', () => {
    const f = maxFriction(2, 0.1, 9.8);
    expect(willMove(f, 2, 0.1, 9.8)).toBe(false);
    expect(netForce(f, 2, 0.1, 9.8)).toBe(0);
  });

  it('由静止开始：v = at，s = ½at²', () => {
    // F=10, m=2, μ=0.1, g=9.8 → a=4.02
    expect(speedAt(10, 2, 0.1, 2, 9.8)).toBeCloseTo(8.04, 10);
    expect(displacementAt(10, 2, 0.1, 2, 9.8)).toBeCloseTo(8.04, 10);
    expect(displacementAt(10, 2, 0.1, 1, 9.8)).toBeCloseTo(2.01, 10);
  });

  it('F = 0 时无论参数如何都静止', () => {
    expect(acceleration(0, 2, 0.1, 9.8)).toBe(0);
    expect(netForce(0, 2, 0.1, 9.8)).toBe(0);
  });

  it('newtonKernel 命名输入输出', () => {
    const out = newtonKernel({ force: 10, mass: 2, mu: 0.1 });
    expect(out.friction).toBeCloseTo(1.96, 10);
    expect(out.netForce).toBeCloseTo(8.04, 10);
    expect(out.acceleration).toBeCloseTo(4.02, 10);
  });
});
