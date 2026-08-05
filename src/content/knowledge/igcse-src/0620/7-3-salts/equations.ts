// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/7-3-salts/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}",
    meaning: {"en":"The reaction behind two of the three routes. Which route you use depends on whether the base can be filtered out afterwards.","zh":"三条路线中有两条基于这个反应。用哪一条，取决于事后能否把碱过滤掉。"},
    substitute: (r) => `\\text{charge } ${Math.round(r["cationCharge"] ?? 0)}+ \\Rightarrow ${Math.round(r["cationsInFormula"] ?? 0)}:${Math.round(r["anionsInFormula"] ?? 0)} \\quad ${(r["soluble"] ?? 0) > 0 ? "\\text{soluble}" : "\\text{insoluble}"}`,
  },
  {
    latex: "\\mathrm{Ba(NO_3)_2} + \\mathrm{Na_2SO_4} \\rightarrow \\mathrm{BaSO_4} + 2\\,\\mathrm{NaNO_3}",
    meaning: {"en":"Precipitation. Two soluble salts in, one insoluble salt out — it falls as a solid the instant the ions meet.","zh":"沉淀反应。两种可溶盐进去，一种难溶盐出来——离子一相遇它就以固体析出。"},
  },
  {
    latex: "\\mathrm{CuSO_4 \\cdot 5H_2O} \\xrightarrow{\\text{heat}} \\mathrm{CuSO_4} + 5\\,\\mathrm{H_2O}",
    meaning: {"en":"Blue to white as the water of crystallisation is driven off. Add water back and the blue returns — which is the test for water.","zh":"结晶水被赶走时由蓝变白。再加水又变回蓝色——这正是水的检验方法。"},
  },
];
