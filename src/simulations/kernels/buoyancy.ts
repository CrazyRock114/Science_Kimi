/**
 * 浮力内核（纯函数）。
 * objectDensity: 物体密度 (kg/m³)，liquidDensity: 液体密度 (kg/m³)，
 * volumeCm3: 物体体积 (cm³)，g 默认 9.8 m/s²。
 */

/** 浮沉状态：float 漂浮 / suspend 悬浮 / sink 沉底 */
export type FloatState = 'float' | 'suspend' | 'sink';

export function volumeM3(volumeCm3: number): number {
  return volumeCm3 * 1e-6;
}

/** 物体质量 m = ρ物 · V */
export function objectMass(objectDensity: number, volumeCm3: number): number {
  return objectDensity * volumeM3(volumeCm3);
}

/** 物体重力 W = ρ物 · V · g */
export function weight(objectDensity: number, volumeCm3: number, g = 9.8): number {
  return objectMass(objectDensity, volumeCm3) * g;
}

/** 浸入体积分数：漂浮时 V排/V = ρ物/ρ液；沉底或悬浮时全浸（= 1） */
export function submergedFraction(objectDensity: number, liquidDensity: number): number {
  return Math.min(1, objectDensity / liquidDensity);
}

/** 浮力 F_b = ρ液 · g · V排 */
export function buoyantForce(
  objectDensity: number,
  liquidDensity: number,
  volumeCm3: number,
  g = 9.8,
): number {
  return (
    liquidDensity * g * volumeM3(volumeCm3) * submergedFraction(objectDensity, liquidDensity)
  );
}

/** 浮沉判断：ρ物 < ρ液 漂浮，= 悬浮，> 沉底 */
export function floatState(objectDensity: number, liquidDensity: number): FloatState {
  if (objectDensity < liquidDensity) return 'float';
  if (objectDensity > liquidDensity) return 'sink';
  return 'suspend';
}

/** 探针用：命名输入 → 命名输出（weight/buoyantForce/submergedFraction） */
export function buoyancyKernel(input: Record<string, number>): Record<string, number> {
  const { objectDensity, liquidDensity, volume } = input;
  return {
    weight: weight(objectDensity, volume),
    buoyantForce: buoyantForce(objectDensity, liquidDensity, volume),
    submergedFraction: submergedFraction(objectDensity, liquidDensity),
  };
}
