// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-7-energy/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "E_p = mg\\Delta h",
    meaning: {"en":"Potential energy is mass × gravitational field strength × change in height.","zh":"重力势能等于质量 × 重力场强度 × 高度变化。"},
    substitute: (r) => `E_p = ${formatSigFigs(r["startPotential"] ?? 0, 3)}\\ \\text{J at the top}`,
  },
  {
    latex: "E_k = \\tfrac{1}{2}mv^2",
    meaning: {"en":"Kinetic energy depends on the square of the speed — double the speed, four times the energy.","zh":"动能与速度的平方成正比——速度加倍，能量变四倍。"},
    substitute: (r) => `E_k = ${formatSigFigs(r["impactKinetic"] ?? 0, 3)}\\ \\text{J},\\quad v = ${formatSigFigs(
        r["impactSpeed"] ?? 0,
        3
      )}\\ \\text{m/s on impact}`,
  },
  {
    latex: "\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%",
    meaning: {"en":"The energy account must balance: useful output plus wasted energy equals the input.","zh":"能量账目必须平衡：有用输出加损耗等于输入。"},
    substitute: (r) => `${formatSigFigs(r["efficiencyPercent"] ?? 0, 3)}\\%\\ \\text{useful},\\quad ${formatSigFigs(
        r["wastedEnergy"] ?? 0,
        3
      )}\\ \\text{J wasted}`,
  },
  {
    latex: "P = \\frac{W}{t}",
    meaning: {"en":"Power is work done per unit time. The same work in less time needs more power.","zh":"功率是单位时间内所做的功。同样的功用更短时间完成，需要更大功率。"},
    substitute: (r) => `W = ${formatSigFigs(r["liftingWork"] ?? 0, 3)}\\ \\text{J},\\quad P = ${formatSigFigs(
        r["liftingPower"] ?? 0,
        3
      )}\\ \\text{W to lift it back}`,
  },
];
