import { describe, expect, it } from 'vitest';
import { osmosisKernel, plasmolysisDegree, waterFlowDirection } from './osmosis';

describe('渗透作用内核', () => {
  it('外界浓度低于细胞液：水流入细胞，不发生质壁分离', () => {
    expect(waterFlowDirection(0.5, 0.3)).toBe('into');
    expect(plasmolysisDegree(0.5, 0.3)).toBe(0);
  });

  it('外界浓度高于细胞液：水流出细胞，发生质壁分离', () => {
    expect(waterFlowDirection(0.5, 0.8)).toBe('outof');
    expect(plasmolysisDegree(0.5, 0.8)).toBeCloseTo(0.6, 10); // (0.8-0.5)/(1-0.5)
  });

  it('等渗溶液：无净流动，质壁分离为 0', () => {
    expect(waterFlowDirection(0.5, 0.5)).toBe('none');
    expect(plasmolysisDegree(0.5, 0.5)).toBe(0);
  });

  it('外界浓度达最大值 1 时质壁分离程度为 1', () => {
    expect(plasmolysisDegree(0.5, 1)).toBe(1);
    expect(plasmolysisDegree(0.1, 1)).toBe(1);
  });

  it('边界：细胞液浓度为 1（最大）时不存在更高外界浓度，永不分离', () => {
    expect(waterFlowDirection(1, 1)).toBe('none');
    expect(plasmolysisDegree(1, 1)).toBe(0);
  });

  it('边界：外界为纯水（0 mol/L）时水流入', () => {
    expect(waterFlowDirection(0.5, 0)).toBe('into');
    expect(plasmolysisDegree(0.5, 0)).toBe(0);
  });

  it('osmosisKernel 命名输入输出：flow 编码 1/-1/0', () => {
    const hypo = osmosisKernel({ internalConc: 0.5, externalConc: 0.3 });
    expect(hypo.flow).toBe(1);
    expect(hypo.plasmolysis).toBe(0);
    expect(hypo.concGradient).toBeCloseTo(-0.2, 12);
    const hyper = osmosisKernel({ internalConc: 0.5, externalConc: 1 });
    expect(hyper.flow).toBe(-1);
    expect(hyper.plasmolysis).toBe(1);
    expect(osmosisKernel({ internalConc: 0.5, externalConc: 0.5 }).flow).toBe(0);
  });
});
