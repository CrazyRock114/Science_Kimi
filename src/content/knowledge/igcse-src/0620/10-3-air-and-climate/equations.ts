// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/10-3-air-and-climate/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "2\\,\\mathrm{CO} + 2\\,\\mathrm{NO} \\rightarrow 2\\,\\mathrm{CO_2} + \\mathrm{N_2}",
    meaning: {"en":"The catalytic converter. Two pollutants react with each other: the carbon monoxide is oxidised, the nitrogen monoxide reduced.","zh":"催化转化器中的反应。两种污染物相互反应：一氧化碳被氧化，一氧化氮被还原。"},
    substitute: (r) => `${Math.round(r["preIndustrial"] ?? 0)} \\rightarrow ${Math.round(r["latest"] ?? 0)} \\quad +${Math.round(r["percentIncrease"] ?? 0)}\\% \\quad ${r["risePerDecade"] ?? 0}\\ \\text{per decade}`,
  },
  {
    latex: "\\mathrm{N_2} + \\mathrm{O_2} \\rightarrow 2\\,\\mathrm{NO}",
    meaning: {"en":"Endothermic, so it only happens where it is hot — inside an engine. This is where the nitrogen oxides in exhaust come from.","zh":"吸热反应，所以只在高温处发生——即发动机内部。尾气中的氮氧化物由此而来。"},
  },
  {
    latex: "\\mathrm{SO_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{H_2SO_3}",
    meaning: {"en":"Sulfur dioxide dissolving in rain. Further oxidation in the air gives sulfuric acid, which is what makes acid rain so corrosive.","zh":"二氧化硫溶于雨水。在空气中进一步氧化生成硫酸，这正是酸雨腐蚀性强的原因。"},
  },
];
