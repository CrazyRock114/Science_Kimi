/**
 * pH 内核（纯函数）。
 * pH = -log10([H+])，[H+] 单位 mol/L。
 */

export function hydrogenIonConcentration(pH: number): number {
  return 10 ** -pH;
}

/** 探针用：命名输入 → 命名输出 */
export function phKernel(input: Record<string, number>): Record<string, number> {
  return { hConcentration: hydrogenIonConcentration(input.pH) };
}

/**
 * 通用指示剂在对应 pH 下的近似颜色（用于溶液颜色演示）。
 * 返回 CSS 颜色。酸性红橙 → 中性绿 → 碱性蓝紫。
 */
export function universalIndicatorColor(pH: number): string {
  const clamped = Math.max(0, Math.min(14, pH));
  const stops: Array<[number, [number, number, number]]> = [
    [0, [220, 38, 38]], // 红
    [3, [249, 115, 22]], // 橙
    [5, [234, 179, 8]], // 黄
    [7, [34, 197, 94]], // 绿
    [9, [20, 184, 166]], // 青绿
    [11, [59, 130, 246]], // 蓝
    [14, [126, 34, 206]], // 紫
  ];
  for (let i = 0; i < stops.length - 1; i++) {
    const [p0, c0] = stops[i];
    const [p1, c1] = stops[i + 1];
    if (clamped >= p0 && clamped <= p1) {
      const f = (clamped - p0) / (p1 - p0);
      const mix = c0.map((v, k) => Math.round(v + (c1[k] - v) * f));
      return `rgb(${mix[0]}, ${mix[1]}, ${mix[2]})`;
    }
  }
  return 'rgb(34, 197, 94)';
}
