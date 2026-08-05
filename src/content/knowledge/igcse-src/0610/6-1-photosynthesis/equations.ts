// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/6-1-photosynthesis/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{carbon dioxide} + \\text{water} \\xrightarrow{\\text{light, chlorophyll}} \\text{glucose} + \\text{oxygen}",
    meaning: {"en":"Light and chlorophyll go above the arrow, not on the left — neither is used up, so neither is a reactant.","zh":"光和叶绿素写在箭头上方而不是左边——两者都不被消耗，所以都不是反应物。"},
    substitute: (r) => `\\text{rate } ${r["rate"] ?? 0}\\% \\quad \\text{light } ${Math.round(r["lightSupply"] ?? 0)}\\% \\quad \\mathrm{CO_2}\\ ${Math.round(r["carbonDioxideSupply"] ?? 0)}\\% \\quad \\text{temp } ${Math.round(r["temperatureEffect"] ?? 0)}\\%`,
  },
  {
    latex: "6\\,\\mathrm{CO_2} + 6\\,\\mathrm{H_2O} \\rightarrow \\mathrm{C_6H_{12}O_6} + 6\\,\\mathrm{O_2}",
    meaning: {"en":"The balanced equation. Six carbons in, six carbons out — every carbon atom in the glucose came from the air.","zh":"配平后的方程式。六个碳进、六个碳出——葡萄糖中的每个碳原子都来自空气。"},
  },
  {
    latex: "\\text{rate} = \\min(\\text{light}, \\mathrm{CO_2}) \\times f(\\text{temperature})",
    meaning: {"en":"The two raw materials do not add up — the smaller one wins. Temperature multiplies, because it is a condition rather than a supply.","zh":"两种原料不是相加——较少的那个说了算。温度是相乘的，因为它是条件而不是供应量。"},
  },
];
