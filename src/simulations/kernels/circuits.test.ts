import { describe, expect, it } from 'vitest';
import {
  branchCurrents,
  branchVoltages,
  circuitsKernel,
  current,
  equivalentResistance,
  parallelEquivalent,
  power,
  seriesEquivalent,
} from './circuits';

describe('电路内核（欧姆定律）', () => {
  it('电流 I = U/R', () => {
    expect(current(6, 10)).toBeCloseTo(0.6);
    expect(current(24, 100)).toBeCloseTo(0.24);
    expect(current(1, 1)).toBe(1);
  });

  it('电功率 P = UI = U²/R', () => {
    expect(power(6, 10)).toBeCloseTo(3.6);
    expect(power(12, 4)).toBe(36);
  });
});

describe('电路内核（串并联）', () => {
  it('串联等效电阻 R = R₁+R₂', () => {
    expect(seriesEquivalent(10, 20)).toBe(30);
    expect(seriesEquivalent(1, 50)).toBe(51);
  });

  it('并联等效电阻 R = R₁R₂/(R₁+R₂)', () => {
    expect(parallelEquivalent(10, 20)).toBeCloseTo(200 / 30);
    expect(parallelEquivalent(6, 3)).toBe(2);
  });

  it('equivalentResistance 按 circuitType 分派', () => {
    expect(equivalentResistance(10, 20, 0)).toBe(30);
    expect(equivalentResistance(10, 20, 1)).toBeCloseTo(6.6667, 4);
  });

  it('串联：电流处处相等，电压按电阻分配', () => {
    const { i1, i2, iTotal } = branchCurrents(6, 10, 20, 0);
    expect(i1).toBeCloseTo(0.2);
    expect(i2).toBeCloseTo(0.2);
    expect(iTotal).toBeCloseTo(0.2);
    const { v1, v2 } = branchVoltages(6, 10, 20, 0);
    expect(v1).toBeCloseTo(2);
    expect(v2).toBeCloseTo(4);
    expect(v1 + v2).toBeCloseTo(6);
  });

  it('并联：各支路电压相等，电流按电阻反比分配', () => {
    const { i1, i2, iTotal } = branchCurrents(6, 10, 20, 1);
    expect(i1).toBeCloseTo(0.6);
    expect(i2).toBeCloseTo(0.3);
    expect(iTotal).toBeCloseTo(0.9);
    const { v1, v2 } = branchVoltages(6, 10, 20, 1);
    expect(v1).toBe(6);
    expect(v2).toBe(6);
  });

  it('并联干路电流 = 支路电流之和，且等效电阻满足 U = IR', () => {
    const U = 12;
    const { iTotal } = branchCurrents(U, 8, 24, 1);
    const rEq = parallelEquivalent(8, 24);
    expect(iTotal).toBeCloseTo(U / rEq);
  });

  it('circuitsKernel 命名输入输出（串联）', () => {
    const out = circuitsKernel({ voltage: 6, r1: 10, r2: 20, circuitType: 0 });
    expect(out.rEq).toBe(30);
    expect(out.iTotal).toBeCloseTo(0.2);
    expect(out.v1).toBeCloseTo(2);
    expect(out.v2).toBeCloseTo(4);
    expect(out.p).toBeCloseTo(1.2);
  });
});
