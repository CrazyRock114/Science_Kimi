/**
 * 抛体运动内核（纯函数）。
 * v0: 初速度 (m/s)，angleDeg: 抛射角 (°)，g: 重力加速度 (m/s²)。
 * 忽略空气阻力，落点与出射点同高。
 */

export function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** 飞行时间 T = 2 v₀ sinθ / g */
export function flightTime(v0: number, angleDeg: number, g: number): number {
  return (2 * v0 * Math.sin(degToRad(angleDeg))) / g;
}

/** 射程 R = v₀² sin(2θ) / g */
export function range(v0: number, angleDeg: number, g: number): number {
  return (v0 * v0 * Math.sin(2 * degToRad(angleDeg))) / g;
}

/** 最大高度 H = (v₀ sinθ)² / (2g) */
export function maxHeight(v0: number, angleDeg: number, g: number): number {
  const vy = v0 * Math.sin(degToRad(angleDeg));
  return (vy * vy) / (2 * g);
}

/** t 时刻位置（出射点为原点，x 水平、y 竖直向上） */
export function positionAt(
  v0: number,
  angleDeg: number,
  g: number,
  t: number,
): { x: number; y: number } {
  const rad = degToRad(angleDeg);
  return {
    x: v0 * Math.cos(rad) * t,
    y: v0 * Math.sin(rad) * t - 0.5 * g * t * t,
  };
}

/** t 时刻速度分量：vx 恒定，vy = v₀ sinθ − gt */
export function velocityAt(
  v0: number,
  angleDeg: number,
  g: number,
  t: number,
): { vx: number; vy: number } {
  const rad = degToRad(angleDeg);
  return {
    vx: v0 * Math.cos(rad),
    vy: v0 * Math.sin(rad) - g * t,
  };
}

/** 探针用：命名输入 → 命名输出（range/maxHeight/flightTime） */
export function projectileKernel(input: Record<string, number>): Record<string, number> {
  const { v0, angle, g } = input;
  return {
    range: range(v0, angle, g),
    maxHeight: maxHeight(v0, angle, g),
    flightTime: flightTime(v0, angle, g),
  };
}
