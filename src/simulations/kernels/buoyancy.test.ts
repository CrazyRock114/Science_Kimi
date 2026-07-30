import { describe, expect, it } from 'vitest';
import {
  buoyancyKernel,
  buoyantForce,
  floatState,
  objectMass,
  submergedFraction,
  volumeM3,
  weight,
} from './buoyancy';

describe('浮力内核', () => {
  it('体积换算与质量：m = ρV', () => {
    expect(volumeM3(500)).toBeCloseTo(5e-4, 15);
    expect(objectMass(500, 500)).toBeCloseTo(0.25, 10);
  });

  it('重力 W = ρ物 V g', () => {
    // ρ=500, V=500 cm³, g=10 → m=0.25 kg → W=2.5 N
    expect(weight(500, 500, 10)).toBeCloseTo(2.5, 10);
  });

  it('漂浮平衡：F_b = W，浸入分数 = ρ物/ρ液', () => {
    // 木块 500 kg/m³ 在水中：一半浸入
    expect(submergedFraction(500, 1000)).toBeCloseTo(0.5, 10);
    // F_b = 1000·10·5e-4·0.5 = 2.5 N = W
    expect(buoyantForce(500, 1000, 500, 10)).toBeCloseTo(2.5, 10);
    expect(buoyantForce(500, 1000, 500, 10)).toBeCloseTo(weight(500, 500, 10), 10);
    expect(floatState(500, 1000)).toBe('float');
  });

  it('沉底：全浸，F_b = ρ液 g V < W', () => {
    // 铁块 2000 kg/m³ 在水中，V=500 cm³, g=10
    expect(submergedFraction(2000, 1000)).toBe(1);
    expect(weight(2000, 500, 10)).toBeCloseTo(10, 10);
    expect(buoyantForce(2000, 1000, 500, 10)).toBeCloseTo(5, 10);
    expect(floatState(2000, 1000)).toBe('sink');
  });

  it('悬浮：ρ物 = ρ液，全浸且 F_b = W', () => {
    expect(submergedFraction(1000, 1000)).toBe(1);
    expect(floatState(1000, 1000)).toBe('suspend');
    expect(buoyantForce(1000, 1000, 800, 9.8)).toBeCloseTo(weight(1000, 800, 9.8), 10);
  });

  it('密度比决定浸入分数（木头 600 → 60%，冰 920 → 92%）', () => {
    expect(submergedFraction(600, 1000)).toBeCloseTo(0.6, 10);
    expect(submergedFraction(920, 1000)).toBeCloseTo(0.92, 10);
  });

  it('阿基米德原理：全浸时浮力只取决于液体密度与体积', () => {
    // 任意沉底物体在 ρ=1200 液体中 V=1000 cm³, g=9.8：F_b = 1200·9.8·1e-3 = 11.76 N
    expect(buoyantForce(8000, 1200, 1000, 9.8)).toBeCloseTo(11.76, 10);
    expect(buoyantForce(2000, 1200, 1000, 9.8)).toBeCloseTo(11.76, 10);
  });

  it('buoyancyKernel 命名输入输出', () => {
    const out = buoyancyKernel({ objectDensity: 500, liquidDensity: 1000, volume: 500 });
    expect(out.weight).toBeCloseTo(2.45, 10); // g 默认 9.8
    expect(out.buoyantForce).toBeCloseTo(2.45, 10);
    expect(out.submergedFraction).toBeCloseTo(0.5, 10);
  });
});
