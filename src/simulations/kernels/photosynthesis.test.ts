import { describe, expect, it } from 'vitest';
import {
  limitingFactor,
  photosynthesisKernel,
  rate,
  temperatureFactor,
} from './photosynthesis';

describe('光合作用速率内核', () => {
  it('光照或 CO₂ 为 0 时速率为 0', () => {
    expect(rate(0, 50, 25)).toBe(0);
    expect(rate(50, 0, 25)).toBe(0);
  });

  it('最适温度 27.5 °C 时温度系数为 1', () => {
    expect(temperatureFactor(27.5)).toBe(1);
    // 25–30 °C 内接近最大
    expect(temperatureFactor(25)).toBeGreaterThan(0.9);
    expect(temperatureFactor(30)).toBeGreaterThan(0.9);
  });

  it('45 °C 高温时速率趋近 0', () => {
    expect(temperatureFactor(45)).toBeLessThan(0.1);
    expect(rate(100, 100, 45)).toBeLessThan(0.1);
  });

  it('0 °C 低温时速率接近 0', () => {
    expect(temperatureFactor(0)).toBeLessThan(0.01);
  });

  it('速率随光强单调增加并趋于饱和', () => {
    const r20 = rate(20, 100, 27.5);
    const r60 = rate(60, 100, 27.5);
    const r100 = rate(100, 100, 27.5);
    expect(r20).toBeLessThan(r60);
    expect(r60).toBeLessThan(r100);
    expect(r100).toBeLessThan(1); // 饱和渐近
    expect(r100).toBeCloseTo(100 / 120, 10);
  });

  it('限制因素：低光高光 → 光照限制；高光低 CO₂ → CO₂ 限制', () => {
    expect(limitingFactor(10, 80)).toBe(0);
    expect(limitingFactor(80, 10)).toBe(1);
    expect(limitingFactor(50, 50)).toBe(2); // 相等 → 共同限制
  });

  it('固定 CO₂ 时提高光照，限制因素由光照转为 CO₂', () => {
    expect(limitingFactor(5, 80)).toBe(0);
    expect(limitingFactor(95, 5)).toBe(1);
  });

  it('photosynthesisKernel 命名输入输出', () => {
    const out = photosynthesisKernel({ lightIntensity: 20, co2Level: 60, temperature: 27.5 });
    expect(out.lightSat).toBeCloseTo(0.5, 10); // 20/(20+20)
    expect(out.co2Sat).toBeCloseTo(0.75, 10); // 60/(60+20)
    expect(out.limiting).toBe(0); // 光照限制
    expect(out.tempFactor).toBe(1);
    expect(out.rate).toBeCloseTo(0.5, 10); // min(0.5, 0.75) × 1
  });
});
