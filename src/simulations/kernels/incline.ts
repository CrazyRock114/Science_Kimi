/**
 * 斜面与摩擦内核（纯函数）。
 * mass: 质量 (kg)，angleDeg: 斜面倾角 (°)，mu: 摩擦因数，g 默认 9.8 m/s²。
 * 沿斜面向下为正方向。
 */

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** 重力沿斜面分力 mg·sinθ（使物块下滑） */
export function parallelComponent(mass: number, angleDeg: number, g = 9.8): number {
  return mass * g * Math.sin(degToRad(angleDeg));
}

/** 重力垂直斜面分力 mg·cosθ（大小等于支持力 N） */
export function perpendicularComponent(mass: number, angleDeg: number, g = 9.8): number {
  return mass * g * Math.cos(degToRad(angleDeg));
}

/** 重力沿/垂直斜面分解 */
export function components(
  mass: number,
  angleDeg: number,
  g = 9.8,
): { parallel: number; perpendicular: number } {
  return {
    parallel: parallelComponent(mass, angleDeg, g),
    perpendicular: perpendicularComponent(mass, angleDeg, g),
  };
}

/** 最大摩擦力 f_max = μ N = μ m g cosθ */
export function maxFriction(mass: number, angleDeg: number, mu: number, g = 9.8): number {
  return mu * perpendicularComponent(mass, angleDeg, g);
}

/** 是否下滑：mg·sinθ > μ·mg·cosθ（等号时静止，摩擦力不超过最大静摩擦） */
export function willSlide(mass: number, angleDeg: number, mu: number, g = 9.8): boolean {
  return parallelComponent(mass, angleDeg, g) > maxFriction(mass, angleDeg, mu, g);
}

/** 下滑加速度 a = g(sinθ − μcosθ)；静止时为 0 */
export function acceleration(mass: number, angleDeg: number, mu: number, g = 9.8): number {
  if (!willSlide(mass, angleDeg, mu, g)) return 0;
  const rad = degToRad(angleDeg);
  return g * (Math.sin(rad) - mu * Math.cos(rad));
}

/** 探针用：命名输入 → 命名输出（parallel/perpendicular/friction/acceleration） */
export function inclineKernel(input: Record<string, number>): Record<string, number> {
  const { angle, mu, mass } = input;
  return {
    parallel: parallelComponent(mass, angle),
    perpendicular: perpendicularComponent(mass, angle),
    friction: maxFriction(mass, angle, mu),
    acceleration: acceleration(mass, angle, mu),
  };
}
