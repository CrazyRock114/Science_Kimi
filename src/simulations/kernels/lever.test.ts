import { describe, expect, it } from 'vitest';
import { isBalanced, leverKernel, netTorque, torque } from './lever';

describe('杠杆平衡内核', () => {
  it('力矩 τ = F · d', () => {
    expect(torque(6, 4)).toBe(24);
    expect(torque(4, 6)).toBe(24);
    expect(torque(7.5, 2.5)).toBeCloseTo(18.75, 10);
  });

  it('默认参数平衡：6 N × 4 格 = 4 N × 6 格 = 24', () => {
    expect(netTorque(6, 4, 4, 6)).toBe(0);
    expect(isBalanced(6, 4, 4, 6)).toBe(true);
  });

  it('力矩差决定倾斜方向（正值左倾，负值右倾）', () => {
    // 左侧力矩更大 → 左倾
    expect(netTorque(10, 5, 4, 6)).toBeCloseTo(26, 10);
    expect(isBalanced(10, 5, 4, 6)).toBe(false);
    // 右侧力矩更大 → 右倾
    expect(netTorque(2, 3, 8, 4)).toBeCloseTo(-26, 10);
    expect(isBalanced(2, 3, 8, 4)).toBe(false);
  });

  it('平衡条件 F₁d₁ = F₂d₂：同力不同臂也可平衡', () => {
    // 5 × 6 = 10 × 3
    expect(isBalanced(5, 6, 10, 3)).toBe(true);
    // 微小不平衡应被检出
    expect(isBalanced(5, 6, 10, 3.5)).toBe(false);
  });

  it('leverKernel 命名输入输出', () => {
    const out = leverKernel({ f1: 6, d1: 4, f2: 4, d2: 6 });
    expect(out.torqueLeft).toBe(24);
    expect(out.torqueRight).toBe(24);
    expect(out.netTorque).toBe(0);
  });
});
