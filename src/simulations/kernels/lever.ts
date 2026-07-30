/**
 * 杠杆平衡内核（纯函数）。
 * f1/d1: 左侧力 (N) 与力臂（格），f2/d2: 右侧力 (N) 与力臂（格）。
 * 力矩 τ = F · d；约定 netTorque = τ左 − τ右（正值表示左侧占优、向左倾）。
 */

/** 力矩 τ = F · d */
export function torque(force: number, arm: number): number {
  return force * arm;
}

/** 净力矩 = 左力矩 − 右力矩 */
export function netTorque(f1: number, d1: number, f2: number, d2: number): number {
  return torque(f1, d1) - torque(f2, d2);
}

/** 平衡条件：F₁d₁ = F₂d₂（在容差内） */
export function isBalanced(
  f1: number,
  d1: number,
  f2: number,
  d2: number,
  epsilon = 1e-9,
): boolean {
  return Math.abs(netTorque(f1, d1, f2, d2)) <= epsilon;
}

/** 探针用：命名输入 → 命名输出（torqueLeft/torqueRight/netTorque） */
export function leverKernel(input: Record<string, number>): Record<string, number> {
  const { f1, d1, f2, d2 } = input;
  return {
    torqueLeft: torque(f1, d1),
    torqueRight: torque(f2, d2),
    netTorque: netTorque(f1, d1, f2, d2),
  };
}
