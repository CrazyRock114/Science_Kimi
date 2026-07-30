/**
 * 种群数量增长内核（纯函数）。
 * model: 0 = 指数增长（J 型），1 = 逻辑斯谛增长（S 型）
 * r: 内禀增长率 (0.05–1)，k: 环境容纳量 (100–1000)，n0: 初始个体数 (5–100)
 * t: 时间（任意单位）
 */

export const MODEL_EXPONENTIAL = 0;
export const MODEL_LOGISTIC = 1;

/**
 * t 时刻种群数量。
 * 指数：N = N₀·e^(rt)
 * 逻辑斯谛：N = K / (1 + ((K−N₀)/N₀)·e^(−rt))
 */
export function populationAt(
  t: number,
  model: number,
  r: number,
  k: number,
  n0: number,
): number {
  if (n0 <= 0) return 0;
  if (model === MODEL_EXPONENTIAL) {
    return n0 * Math.exp(r * t);
  }
  return k / (1 + ((k - n0) / n0) * Math.exp(-r * t));
}

/** 指数增长（或逻辑斯谛初期近似）的倍增时间 td = ln2 / r */
export function doublingTime(r: number): number {
  return Math.LN2 / r;
}

/** 探针用：命名输入 → 命名输出 */
export function populationKernel(input: Record<string, number>): Record<string, number> {
  const { t, model, r, k, n0 } = input;
  return {
    N: populationAt(t, model, r, k, n0),
    doublingTime: r > 0 ? doublingTime(r) : Infinity,
  };
}
