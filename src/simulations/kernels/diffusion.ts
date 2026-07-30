/**
 * 扩散作用内核（纯函数）。
 * 双室容器中间为半透膜，粒子由高浓度侧向低浓度侧净扩散直至动态平衡。
 * n0: 左侧初始粒子数（右侧初始为 0，总数恒为 n0）
 * t: 时间（任意单位）
 */

/** 指数趋衡时间常数 */
export const TAU = 2;

/** 动态平衡时每侧粒子数（两侧等体积 → 各半） */
export function equilibriumCount(n0: number): number {
  return n0 / 2;
}

/** 左侧粒子数的期望：指数趋衡模型 L(t) = n0/2 · (1 + e^(−t/τ)) */
export function expectedLeftCount(t: number, n0: number, tau: number = TAU): number {
  return n0 / 2 + (n0 / 2) * Math.exp(-t / tau);
}

/** 探针用：命名输入 → 命名输出 */
export function diffusionKernel(input: Record<string, number>): Record<string, number> {
  const { t, n0 } = input;
  const left = expectedLeftCount(t, n0);
  return {
    left,
    right: n0 - left,
    equilibrium: equilibriumCount(n0),
  };
}
