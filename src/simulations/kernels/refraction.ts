/**
 * 光的折射内核（纯函数）：斯涅尔定律 n₁sinθ₁ = n₂sinθ₂。
 * 角度单位均为度（°），相对于法线测量。
 */

const DEG = Math.PI / 180;

/**
 * 折射角 θ₂ = arcsin(n₁sinθ₁/n₂) (°)。
 * 发生全反射时（n₁ > n₂ 且超过临界角）返回 NaN。
 */
export function refractionAngle(n1: number, n2: number, incidentAngle: number): number {
  const sin2 = (n1 * Math.sin(incidentAngle * DEG)) / n2;
  if (sin2 > 1) return NaN;
  return Math.asin(sin2) / DEG;
}

/**
 * 临界角 θc = arcsin(n₂/n₁) (°)。
 * 仅当 n₁ > n₂（光密 → 光疏）时存在，否则返回 NaN。
 */
export function criticalAngle(n1: number, n2: number): number {
  if (n1 <= n2) return NaN;
  return Math.asin(n2 / n1) / DEG;
}

/** 是否发生全反射：n₁ > n₂ 且入射角大于临界角 */
export function isTotalInternalReflection(n1: number, n2: number, incidentAngle: number): boolean {
  const critical = criticalAngle(n1, n2);
  return !Number.isNaN(critical) && incidentAngle > critical;
}

/** 探针用：命名输入 → 命名输出（tir: 1 = 全反射） */
export function refractionKernel(input: Record<string, number>): Record<string, number> {
  const { n1, n2, incidentAngle } = input;
  return {
    refractedAngle: refractionAngle(n1, n2, incidentAngle),
    criticalAngle: criticalAngle(n1, n2),
    tir: isTotalInternalReflection(n1, n2, incidentAngle) ? 1 : 0,
  };
}
