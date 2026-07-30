import { describe, expect, it } from 'vitest';
import { mendelKernel, offspringRatios, phenotypeOf, simulateSample } from './mendel';

describe('孟德尔遗传内核', () => {
  it('Aa×Aa 自交：基因型 1:2:1，表型 3:1', () => {
    const r = offspringRatios(0);
    expect(r.genotypes).toEqual({ AA: 1 / 4, Aa: 1 / 2, aa: 1 / 4 });
    expect(r.phenotypes).toEqual({ dominant: 3 / 4, recessive: 1 / 4 });
  });

  it('Aa×aa 测交：基因型与表型均为 1:1', () => {
    const r = offspringRatios(1);
    expect(r.genotypes).toEqual({ Aa: 1 / 2, aa: 1 / 2 });
    expect(r.phenotypes).toEqual({ dominant: 1 / 2, recessive: 1 / 2 });
  });

  it('AaBb×AaBb 双因子自交：9 种基因型，表型 9:3:3:1', () => {
    const r = offspringRatios(2);
    expect(Object.keys(r.genotypes)).toHaveLength(9);
    expect(r.genotypes.AaBb).toBe(4 / 16);
    expect(r.genotypes.aabb).toBe(1 / 16);
    expect(r.phenotypes).toEqual({ A_B_: 9 / 16, A_bb: 3 / 16, aaB_: 3 / 16, aabb: 1 / 16 });
    // 比例合计为 1
    const sum = Object.values(r.genotypes).reduce((a, b) => a + b, 0);
    expect(sum).toBeCloseTo(1, 12);
  });

  it('phenotypeOf：单因子与双因子基因型映射正确', () => {
    expect(phenotypeOf('AA')).toBe('dominant');
    expect(phenotypeOf('Aa')).toBe('dominant');
    expect(phenotypeOf('aa')).toBe('recessive');
    expect(phenotypeOf('AaBb')).toBe('A_B_');
    expect(phenotypeOf('Aabb')).toBe('A_bb');
    expect(phenotypeOf('aaBb')).toBe('aaB_');
    expect(phenotypeOf('aabb')).toBe('aabb');
  });

  it('simulateSample：固定 seed 结果确定且计数合计为 n', () => {
    const counts = simulateSample(0, 100, 42);
    expect(counts).toEqual({ AA: 26, Aa: 52, aa: 22 });
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    expect(total).toBe(100);
    // 同参数复现
    expect(simulateSample(0, 100, 42)).toEqual(counts);
  });

  it('simulateSample：测交只产生 Aa 与 aa', () => {
    const counts = simulateSample(1, 100, 42);
    expect(counts).toEqual({ Aa: 50, aa: 50 });
  });

  it('simulateSample：双因子自交产生全部 9 种基因型', () => {
    const counts = simulateSample(2, 160, 7);
    expect(Object.keys(counts)).toHaveLength(9);
    expect(counts.AaBb).toBe(39); // 杂合双因子占比最高
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    expect(total).toBe(160);
  });

  it('simulateSample：大样本抽样比例收敛于理论比例', () => {
    const counts = simulateSample(0, 1000, 42);
    expect(counts.AA / 1000).toBeCloseTo(0.25, 1);
    expect(counts.Aa / 1000).toBeCloseTo(0.5, 1);
    expect(counts.aa / 1000).toBeCloseTo(0.25, 1);
  });

  it('mendelKernel 命名输入输出', () => {
    expect(mendelKernel({ crossType: 0, sampleSize: 100, seed: 42 })).toEqual({
      n: 100,
      count_AA: 26,
      count_Aa: 52,
      count_aa: 22,
      ratio_dominant: 0.75,
      ratio_recessive: 0.25,
    });
  });

  it('mendelKernel：双因子自交理论表型比例 9:3:3:1', () => {
    const out = mendelKernel({ crossType: 2, sampleSize: 10, seed: 1 });
    expect(out.ratio_A_B_).toBe(9 / 16);
    expect(out.ratio_aabb).toBe(1 / 16);
  });
});
