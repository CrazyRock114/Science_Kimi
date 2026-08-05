// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/10-1-water/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{pure water: melts at } 0\\,\\degree\\text{C, boils at } 100\\,\\degree\\text{C}",
    meaning: {"en":"Exactly, at normal pressure. Anything dissolved lowers the melting point and raises the boiling point, and a mixture melts over a range.","zh":"在常压下恰好如此。任何溶解物都会降低熔点、升高沸点，而混合物是在一个范围内熔化。"},
    substitute: (r) => `${Math.round(r["stagesDone"] ?? 0)}\\ \\text{stages done} \\quad ${Math.round(r["contaminantsRemaining"] ?? 0)}\\ \\text{contaminants left} \\quad ${(r["fitToDrink"] ?? 0) > 0 ? "\\text{fit to drink}" : "\\text{not yet safe}"}`,
  },
  {
    latex: "\\mathrm{CoCl_2} \\text{ (blue)} + \\text{water} \\rightarrow \\text{pink}",
    meaning: {"en":"Tests that water is present. It says nothing about whether that water is pure.","zh":"用于检验水的存在。它对这水是否纯净只字未提。"},
  },
  {
    latex: "\\mathrm{CuSO_4} \\text{ (white)} + \\text{water} \\rightarrow \\text{blue}",
    meaning: {"en":"The same test with a different salt. Anhydrous copper(II) sulfate turns blue as it becomes hydrated again.","zh":"同一类检验，换一种盐。无水硫酸铜重新水合时变为蓝色。"},
  },
];
