// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/5-1-energetics/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\Delta H = \\Sigma(\\text{bonds broken}) - \\Sigma(\\text{bonds made})",
    meaning: {"en":"Breaking costs, making pays back. Written in this order the sign comes out right on its own.","zh":"断键付出，成键收回。按这个顺序写，符号会自动正确。"},
    substitute: (r) => `${Math.round(r["energyIn"] ?? 0)} - ${Math.round(r["energyOut"] ?? 0)} = ${Math.round(r["enthalpyChange"] ?? 0)}\\ \\text{kJ/mol}`,
  },
  {
    latex: "\\Delta H < 0 \\Rightarrow \\text{exothermic}",
    meaning: {"en":"Measured from the chemicals, not the room. They lost the energy, so it is negative — and the room got warmer because that is where it went.","zh":"从化学物质而非房间的角度衡量。它们失去了能量，所以是负值——而房间变暖，正是因为能量去了那里。"},
  },
  {
    latex: "E_a \\text{ is measured from the reactants to the peak}",
    meaning: {"en":"Not from the products, and not from the bottom of the graph. A catalyst lowers it and changes nothing else.","zh":"不是从产物量起，也不是从图的底部量起。催化剂降低它，其余一概不变。"},
  },
];
