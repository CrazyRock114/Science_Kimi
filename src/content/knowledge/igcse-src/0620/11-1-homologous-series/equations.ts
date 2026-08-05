// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/11-1-homologous-series/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "M_r = \\sum (\\text{atoms} \\times A_r)",
    meaning: {"en":"Relative molecular mass is the sum over every atom in the formula. C is 12, H is 1, O is 16.","zh":"相对分子质量是分子式中所有原子的加和。C 为 12，H 为 1，O 为 16。"},
    substitute: (r) => `${Math.round(r["carbons"] ?? 0)}\xD712 + ${Math.round(r["hydrogens"] ?? 0)}\xD71 + \u2026 = ${Math.round(r["relativeMolecularMass"] ?? 0)}`,
  },
  {
    latex: "\\Delta M_r = 14 \\text{ per } \\mathrm{CH_2}",
    meaning: {"en":"Each step up a homologous series adds one CH₂ — 12 for the carbon plus 2 for the hydrogens.","zh":"同系物每上升一级就增加一个 CH₂——碳 12 加上两个氢 2。"},
  },
];
