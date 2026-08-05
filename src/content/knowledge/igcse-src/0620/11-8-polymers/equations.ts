// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/11-8-polymers/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "n\\,\\mathrm{C_2H_4} \\rightarrow -\\!\\left[\\mathrm{CH_2CH_2}\\right]_n\\!-",
    meaning: {"en":"n monomers give one polymer and nothing else. The n on each side must match.","zh":"n 个单体生成一个聚合物，别无其他产物。两边的 n 必须相同。"},
    substitute: (r) => `n = ${Math.round(r["repeatUnits"] ?? 0)} \xB7 M_r = ${Math.round(r["repeatUnitMass"] ?? 0)} \xD7 ${Math.round(r["repeatUnits"] ?? 0)} = ${Math.round(r["relativeMolecularMass"] ?? 0)}`,
  },
  {
    latex: "M_r(\\text{polymer}) = n \\times M_r(\\text{repeat unit})",
    meaning: {"en":"Every repeat unit is identical, so the mass is a simple multiple. A real chain has n in the tens of thousands.","zh":"每个重复单元完全相同，所以质量是简单的倍数关系。真实分子链的 n 可达数万。"},
  },
];
