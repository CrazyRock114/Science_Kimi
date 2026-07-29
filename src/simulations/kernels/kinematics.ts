/**
 * 匀变速直线运动内核（纯函数）。
 * u: 初速度 (m/s)，a: 加速度 (m/s²)，t: 时间 (s)
 */

export function velocityAt(u: number, a: number, t: number): number {
  return u + a * t;
}

export function displacementAt(u: number, a: number, t: number): number {
  return u * t + 0.5 * a * t * t;
}

/** 探针用：命名输入 → 命名输出（v: 末速度, s: 位移） */
export function kinematicsKernel(input: Record<string, number>): Record<string, number> {
  const { u, a, t } = input;
  return {
    v: velocityAt(u, a, t),
    s: displacementAt(u, a, t),
  };
}
