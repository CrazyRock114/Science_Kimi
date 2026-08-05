// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/12-3-chromatography/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "R_f = \\dfrac{\\text{distance moved by the spot}}{\\text{distance moved by the solvent}}",
    meaning: {"en":"Both distances are measured from the baseline, and the spot is measured to its centre. The ratio is unchanged by how far the solvent ran, which is what makes it a property of the substance rather than of the experiment.","zh":"两个距离都从基线量起，斑点量到中心。这个比值不随溶剂跑多远而改变，这使它成为物质的性质而不是实验的性质。"},
    substitute: (r) => `R_f = \\dfrac{${r["spotDistance"] ?? 0}}{${r["solventDistance"] ?? 0}} = ${r["rf"] ?? 0}`,
  },
];
