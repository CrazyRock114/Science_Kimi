import { describe, expect, it } from 'vitest';
import { enzymeKernel, phFactor, rate, temperatureFactor } from './enzyme';

describe('酶活性内核', () => {
  it('唾液淀粉酶：最适 37 °C / pH 7 时速率为 1', () => {
    expect(rate(37, 7, 0)).toBe(1);
  });

  it('胃蛋白酶：最适 37 °C / pH 2 时速率为 1', () => {
    expect(rate(37, 2, 1)).toBe(1);
  });

  it('pH 偏离最适值时速率下降（钟形）', () => {
    expect(phFactor(7, 0)).toBe(1);
    expect(phFactor(5, 0)).toBeLessThan(1);
    expect(phFactor(9, 0)).toBeLessThan(1);
    // 胃蛋白酶在强酸环境工作，中性环境几乎失活
    expect(phFactor(7, 1)).toBeLessThan(0.001);
    // 淀粉酶在 pH 2 几乎失活
    expect(phFactor(2, 0)).toBeLessThan(0.01);
  });

  it('温度偏离最适值时速率下降（钟形）', () => {
    expect(temperatureFactor(37, 0)).toBe(1);
    expect(temperatureFactor(20, 0)).toBeLessThan(1);
    expect(temperatureFactor(50, 0)).toBeLessThan(1);
  });

  it('高温（80 °C）变性失活：速率趋近 0 且 denatured = 1', () => {
    expect(rate(80, 7, 0)).toBeLessThan(0.01);
    expect(enzymeKernel({ temperature: 80, ph: 7, enzymeType: 0 }).denatured).toBe(1);
    expect(enzymeKernel({ temperature: 60, ph: 2, enzymeType: 1 }).denatured).toBe(1);
    expect(enzymeKernel({ temperature: 59, ph: 2, enzymeType: 1 }).denatured).toBe(0);
  });

  it('低温（0 °C）抑制活性但不变性', () => {
    const out = enzymeKernel({ temperature: 0, ph: 7, enzymeType: 0 });
    expect(out.rate).toBeLessThan(0.01);
    expect(out.denatured).toBe(0);
  });

  it('enzymeKernel 命名输入输出', () => {
    expect(enzymeKernel({ temperature: 37, ph: 7, enzymeType: 0 })).toEqual({
      rate: 1,
      tempFactor: 1,
      phFactor: 1,
      denatured: 0,
    });
  });
});
