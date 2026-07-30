/**
 * 牛顿第二定律内核（纯函数）。
 * 水平面上物块受水平拉力 F，摩擦按 f = μ m g 计（μ 为摩擦因数）。
 * 拉力不超过最大摩擦时物块保持静止（合力为 0），物块由静止开始运动。
 * g 默认 9.8 m/s²。
 */

/** 最大摩擦力 f = μ m g */
export function maxFriction(mass: number, mu: number, g = 9.8): number {
  return mu * mass * g;
}

/** 拉力是否足以驱动物块（严格大于最大摩擦） */
export function willMove(force: number, mass: number, mu: number, g = 9.8): boolean {
  return force > maxFriction(mass, mu, g);
}

/** 合力 F_net = max(0, F − μmg)（静止时摩擦与拉力抵消，合力为 0） */
export function netForce(force: number, mass: number, mu: number, g = 9.8): number {
  return Math.max(0, force - maxFriction(mass, mu, g));
}

/** 加速度 a = F_net / m */
export function acceleration(force: number, mass: number, mu: number, g = 9.8): number {
  return netForce(force, mass, mu, g) / mass;
}

/** 由静止开始 t 时刻的速度 v = at */
export function speedAt(force: number, mass: number, mu: number, t: number, g = 9.8): number {
  return acceleration(force, mass, mu, g) * t;
}

/** 由静止开始 t 内的位移 s = ½at² */
export function displacementAt(
  force: number,
  mass: number,
  mu: number,
  t: number,
  g = 9.8,
): number {
  const a = acceleration(force, mass, mu, g);
  return 0.5 * a * t * t;
}

/** 探针用：命名输入 → 命名输出（friction/netForce/acceleration） */
export function newtonKernel(input: Record<string, number>): Record<string, number> {
  const { force, mass, mu } = input;
  return {
    friction: maxFriction(mass, mu),
    netForce: netForce(force, mass, mu),
    acceleration: acceleration(force, mass, mu),
  };
}
