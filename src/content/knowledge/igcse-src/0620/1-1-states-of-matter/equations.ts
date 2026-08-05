// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/1-1-states-of-matter/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{temperature} \\propto \\text{mean kinetic energy of the particles}",
    meaning: {"en":"The sentence behind every explanation in this topic. It is why the temperature cannot rise during a change of state, and why lighter molecules diffuse faster at the same temperature.","zh":"本主题所有解释的依据。它解释了为什么物态变化时温度无法上升，也解释了为什么在相同温度下较轻的分子扩散更快。"},
    substitute: (r) => `T = ${r["temperature"] ?? 0}\\,^{\\circ}\\mathrm{C} \\quad m.p. = ${r["meltingPoint"] ?? 0}\\,^{\\circ}\\mathrm{C} \\quad b.p. = ${r["boilingPoint"] ?? 0}\\,^{\\circ}\\mathrm{C}`,
  },
];
