// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/11-3-fuels/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{boiling point} \\uparrow \\text{ as chain length} \\uparrow",
    meaning: {"en":"The one trend behind everything in this topic — the order of the fractions, their viscosity, their volatility and their uses. Larger molecules attract each other more strongly, so more energy is needed to separate them.","zh":"本主题一切内容背后的唯一趋势——馏分的顺序、黏度、挥发性与用途。较大的分子之间吸引力更强，因此分开它们需要更多能量。"},
    substitute: (r) => `\\mathrm{C}_{${r["carbonAtoms"] ?? 0}} \\rightarrow ${r["boilingPoint"] ?? 0}\\,^{\\circ}\\mathrm{C}`,
  },
];
