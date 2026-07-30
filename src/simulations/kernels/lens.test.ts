import { describe, expect, it } from 'vitest';
import { imageDistance, imageType, imageTypeCode, lensKernel, magnification } from './lens';

describe('凸透镜内核（1/f = 1/u + 1/v）', () => {
  it('u = 2f 时 v = 2f，放大率 |m| = 1（等大倒立实像）', () => {
    expect(imageDistance(10, 20)).toBeCloseTo(20);
    expect(magnification(10, 20)).toBeCloseTo(-1);
  });

  it('f < u < 2f 时 v > 2f，放大倒立实像（投影仪）', () => {
    expect(imageDistance(10, 15)).toBeCloseTo(30);
    expect(magnification(10, 15)).toBeCloseTo(-2);
    expect(imageType(10, 15)).toBe('real-inverted');
  });

  it('u > 2f 时 f < v < 2f，缩小倒立实像（照相机）', () => {
    expect(imageDistance(10, 30)).toBeCloseTo(15);
    expect(magnification(10, 30)).toBeCloseTo(-0.5);
    expect(imageType(10, 30)).toBe('real-inverted');
  });

  it('u < f 时 v < 0，正立放大虚像（放大镜）', () => {
    expect(imageDistance(10, 5)).toBeCloseTo(-10);
    expect(magnification(10, 5)).toBeCloseTo(2);
    expect(imageType(10, 5)).toBe('virtual-upright');
  });

  it('u = f 时不成像（v → ∞）', () => {
    expect(imageDistance(10, 10)).toBe(Infinity);
    expect(imageType(10, 10)).toBe('no-image');
    expect(imageTypeCode(10, 10)).toBe(2);
  });

  it('像距与焦距互换对称：1/v = 1/f − 1/u', () => {
    const f = 12;
    const u = 18;
    const v = imageDistance(f, u);
    expect(1 / v).toBeCloseTo(1 / f - 1 / u);
  });

  it('lensKernel 命名输入输出', () => {
    const out = lensKernel({ focalLength: 10, objectDistance: 20 });
    expect(out.v).toBeCloseTo(20);
    expect(out.m).toBeCloseTo(-1);
    expect(out.type).toBe(0);
  });
});
