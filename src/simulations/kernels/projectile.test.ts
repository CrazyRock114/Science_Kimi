import { describe, expect, it } from 'vitest';
import {
  flightTime,
  maxHeight,
  positionAt,
  projectileKernel,
  range,
  velocityAt,
} from './projectile';

describe('抛体运动内核', () => {
  it('45° 时射程最大：R = v₀²/g', () => {
    expect(range(20, 45, 10)).toBeCloseTo(40, 10);
    expect(range(50, 45, 9.8)).toBeCloseTo((50 * 50) / 9.8, 10);
  });

  it('射程公式 R = v₀² sin(2θ)/g（θ = 30°）', () => {
    // v0=10, g=10：R = 100·sin60°/10 = 5√3
    expect(range(10, 30, 10)).toBeCloseTo(5 * Math.sqrt(3), 10);
  });

  it('飞行时间 T = 2 v₀ sinθ / g', () => {
    // v0=20, 45°, g=10：T = 2·20·(√2/2)/10 = 2√2
    expect(flightTime(20, 45, 10)).toBeCloseTo(2 * Math.sqrt(2), 10);
    // 竖直上抛（90°）：T = 2v₀/g
    expect(flightTime(10, 90, 10)).toBeCloseTo(2, 10);
  });

  it('最大高度 H = (v₀ sinθ)² / (2g)', () => {
    // v0=20, 45°, g=10：vy = 10√2 → H = 200/20 = 10
    expect(maxHeight(20, 45, 10)).toBeCloseTo(10, 10);
    // 竖直上抛：H = v₀²/2g
    expect(maxHeight(10, 90, 10)).toBeCloseTo(5, 10);
  });

  it('positionAt：t = T/2 到达最高点，t = T 落地（y=0, x=R）', () => {
    const v0 = 20;
    const angle = 45;
    const g = 10;
    const T = flightTime(v0, angle, g);
    const top = positionAt(v0, angle, g, T / 2);
    expect(top.y).toBeCloseTo(maxHeight(v0, angle, g), 10);
    expect(top.x).toBeCloseTo(range(v0, angle, g) / 2, 10);
    const land = positionAt(v0, angle, g, T);
    expect(land.y).toBeCloseTo(0, 10);
    expect(land.x).toBeCloseTo(range(v0, angle, g), 10);
  });

  it('velocityAt：最高点竖直分量为 0，水平分量全程不变', () => {
    const v0 = 20;
    const angle = 45;
    const g = 10;
    const T = flightTime(v0, angle, g);
    const top = velocityAt(v0, angle, g, T / 2);
    expect(top.vy).toBeCloseTo(0, 10);
    expect(top.vx).toBeCloseTo(v0 * Math.cos(Math.PI / 4), 10);
    const start = velocityAt(v0, angle, g, 0);
    const end = velocityAt(v0, angle, g, T);
    expect(end.vx).toBeCloseTo(start.vx, 10);
    expect(end.vy).toBeCloseTo(-start.vy, 10);
  });

  it('射程与 g 成反比（月球 g=1.6 与地球 g=9.8）', () => {
    expect(range(10, 45, 1.6) / range(10, 45, 9.8)).toBeCloseTo(9.8 / 1.6, 10);
  });

  it('projectileKernel 命名输入输出', () => {
    const out = projectileKernel({ v0: 20, angle: 45, g: 10 });
    expect(out.range).toBeCloseTo(40, 10);
    expect(out.maxHeight).toBeCloseTo(10, 10);
    expect(out.flightTime).toBeCloseTo(2 * Math.sqrt(2), 10);
  });
});
