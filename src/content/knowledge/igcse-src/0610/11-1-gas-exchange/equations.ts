// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/11-1-gas-exchange/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{C_6H_{12}O_6} + 6\\,\\mathrm{O_2} \\rightarrow 6\\,\\mathrm{CO_2} + 6\\,\\mathrm{H_2O}",
    meaning: {"en":"Aerobic respiration. The reverse of photosynthesis, atom for atom — and about 32 ATP per glucose.","zh":"有氧呼吸。逐个原子来看，它正是光合作用的逆过程——每分子葡萄糖约产生 32 个 ATP。"},
    substitute: (r) => `\\text{aerobic ceiling } ${r["ceiling"] ?? 0} \\quad \\text{demand } ${r["demand"] ?? 0}`,
  },
  {
    latex: "\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\,\\mathrm{C_2H_5OH} + 2\\,\\mathrm{CO_2}",
    meaning: {"en":"Anaerobic respiration in yeast: ethanol and carbon dioxide. In muscle the product is lactic acid instead. Either way, about 2 ATP per glucose.","zh":"酵母的无氧呼吸：生成乙醇和二氧化碳。在肌肉中产物则是乳酸。无论哪种，每分子葡萄糖约只产生 2 个 ATP。"},
    substitute: (r) => `\\text{shortfall } ${r["shortfall"] ?? 0} \\quad \\text{peak lactic acid } ${r["peakLactate"] ?? 0} \\quad \\text{recovery } ${r["recovery"] ?? 0}\\ \\mathrm{min}`,
  },
];
