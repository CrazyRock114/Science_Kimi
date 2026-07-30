/**
 * 电路内核（纯函数）：欧姆定律 + 串并联电路。
 * voltage: 电压 U (V)，resistance/r1/r2: 电阻 (Ω)
 * circuitType: 0 = 串联，1 = 并联
 */

/** 欧姆定律：I = U / R (A) */
export function current(voltage: number, resistance: number): number {
  return voltage / resistance;
}

/** 电功率：P = UI = U²/R (W) */
export function power(voltage: number, resistance: number): number {
  return (voltage * voltage) / resistance;
}

/** 串联等效电阻 R = R₁ + R₂ (Ω) */
export function seriesEquivalent(r1: number, r2: number): number {
  return r1 + r2;
}

/** 并联等效电阻 R = R₁R₂/(R₁+R₂) (Ω) */
export function parallelEquivalent(r1: number, r2: number): number {
  return (r1 * r2) / (r1 + r2);
}

/** 按电路类型求等效电阻 (Ω) */
export function equivalentResistance(r1: number, r2: number, circuitType: number): number {
  return circuitType === 1 ? parallelEquivalent(r1, r2) : seriesEquivalent(r1, r2);
}

/**
 * 各支路电流 (A)。
 * 串联：I₁ = I₂ = U/(R₁+R₂)；并联：I₁ = U/R₁，I₂ = U/R₂。
 */
export function branchCurrents(
  voltage: number,
  r1: number,
  r2: number,
  circuitType: number,
): { i1: number; i2: number; iTotal: number } {
  if (circuitType === 1) {
    const i1 = voltage / r1;
    const i2 = voltage / r2;
    return { i1, i2, iTotal: i1 + i2 };
  }
  const i = voltage / (r1 + r2);
  return { i1: i, i2: i, iTotal: i };
}

/**
 * 各电阻两端电压 (V)。
 * 串联分压：U₁ = U·R₁/(R₁+R₂)；并联：U₁ = U₂ = U。
 */
export function branchVoltages(
  voltage: number,
  r1: number,
  r2: number,
  circuitType: number,
): { v1: number; v2: number } {
  if (circuitType === 1) {
    return { v1: voltage, v2: voltage };
  }
  const v1 = (voltage * r1) / (r1 + r2);
  return { v1, v2: voltage - v1 };
}

/** 探针用：命名输入 → 命名输出 */
export function circuitsKernel(input: Record<string, number>): Record<string, number> {
  const { voltage, r1, r2, circuitType } = input;
  const rEq = equivalentResistance(r1, r2, circuitType);
  const { i1, i2, iTotal } = branchCurrents(voltage, r1, r2, circuitType);
  const { v1, v2 } = branchVoltages(voltage, r1, r2, circuitType);
  return { rEq, i1, i2, iTotal, v1, v2, p: voltage * iTotal };
}
