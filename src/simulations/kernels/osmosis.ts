/**
 * 渗透作用内核（纯函数）。
 * internalConc: 细胞液浓度 (mol/L, 0.1–1)
 * externalConc: 外界溶液浓度 (mol/L, 0–1)
 * 水分子经半透膜从低浓度（水势高）一侧向高浓度（水势低）一侧净移动。
 */

export type WaterFlow = 'into' | 'outof' | 'none';

const EPS = 1e-9;

/** 水分净流动方向：流入细胞 / 流出细胞 / 动态平衡 */
export function waterFlowDirection(internalConc: number, externalConc: number): WaterFlow {
  if (externalConc > internalConc + EPS) return 'outof';
  if (internalConc > externalConc + EPS) return 'into';
  return 'none';
}

/**
 * 质壁分离程度 0–1。
 * 外界浓度 ≤ 细胞液浓度时为 0（细胞正常或膨胀）；
 * 外界浓度越高分离越明显，外界浓度达 1 mol/L（最大）时为 1。
 */
export function plasmolysisDegree(internalConc: number, externalConc: number): number {
  if (externalConc <= internalConc) return 0;
  const headroom = 1 - internalConc; // 外界浓度相对细胞液的最大富余
  if (headroom <= EPS) return 0;
  return Math.min(1, (externalConc - internalConc) / headroom);
}

/** 探针用：命名输入 → 命名输出（flow: 1 流入 / -1 流出 / 0 平衡） */
export function osmosisKernel(input: Record<string, number>): Record<string, number> {
  const { internalConc, externalConc } = input;
  const dir = waterFlowDirection(internalConc, externalConc);
  return {
    flow: dir === 'into' ? 1 : dir === 'outof' ? -1 : 0,
    plasmolysis: plasmolysisDegree(internalConc, externalConc),
    concGradient: externalConc - internalConc,
  };
}
