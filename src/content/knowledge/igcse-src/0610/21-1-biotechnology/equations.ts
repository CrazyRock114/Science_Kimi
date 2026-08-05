// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/21-1-biotechnology/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\,\\mathrm{C_2H_5OH} + 2\\,\\mathrm{CO_2}",
    meaning: {"en":"Anaerobic respiration in yeast. In brewing the ethanol is the product; in bread-making the carbon dioxide is. One reaction, two industries.","zh":"酵母的无氧呼吸。酿酒时乙醇是产物，做面包时二氧化碳才是。一个反应，两个行业。"},
    substitute: (r) => `\\text{temperature } ${r["temperature"] ?? 0}\\ ^\\circ\\mathrm{C} \\quad \\text{growth } ${r["growthRate"] ?? 0}\\% \\quad \\text{yield } ${r["yield"] ?? 0}`,
  },
];
