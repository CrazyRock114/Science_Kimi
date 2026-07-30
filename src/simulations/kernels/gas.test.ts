import { describe, expect, it } from 'vitest';
import { gasKernel, pressure, pvProduct, T0_KELVIN } from './gas';

describe('气体内核（p = nRT/V，基准 1 atm @ V₀, 20 °C）', () => {
  it('基准状态 V=V₀, T=20 °C 时 p = 1 atm', () => {
    expect(pressure(1, 20)).toBeCloseTo(1);
  });

  it('玻意耳定律：等温压缩到一半体积，压强加倍', () => {
    expect(pressure(0.5, 20)).toBeCloseTo(2);
    expect(pressure(0.2, 20)).toBeCloseTo(5);
  });

  it('等温时 pV 乘积恒定（玻意耳定律）', () => {
    for (const v of [0.2, 0.35, 0.5, 0.8, 1]) {
      expect(pvProduct(v, 20)).toBeCloseTo(1);
    }
  });

  it('等容时压强与热力学温度成正比（查理定律）', () => {
    // 40 °C = 313.15 K
    expect(pressure(1, 40)).toBeCloseTo(313.15 / T0_KELVIN);
    expect(pressure(1, 100)).toBeCloseTo(373.15 / T0_KELVIN);
  });

  it('pV 乘积只随温度变化：pV/p₀V₀ = T/T₀', () => {
    expect(pvProduct(0.5, 100)).toBeCloseTo(373.15 / T0_KELVIN);
    expect(pvProduct(1, 0)).toBeCloseTo(273.15 / T0_KELVIN);
  });

  it('升温 + 压缩叠加：p = p₀·(T/T₀)·(V₀/V)', () => {
    const expected = (313.15 / T0_KELVIN) * (1 / 0.5);
    expect(pressure(0.5, 40)).toBeCloseTo(expected);
  });

  it('gasKernel 命名输入输出', () => {
    const out = gasKernel({ volume: 0.5, temperature: 20 });
    expect(out.pressure).toBeCloseTo(2);
    expect(out.pv).toBeCloseTo(1);
  });
});
