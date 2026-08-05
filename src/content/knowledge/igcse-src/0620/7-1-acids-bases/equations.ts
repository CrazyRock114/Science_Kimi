// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/7-1-acids-bases/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{H^{+}(aq) + OH^{-}(aq) \\rightarrow H_2O(l)}",
    meaning: {"en":"The ionic equation for every acid–alkali neutralisation, whichever acid and alkali are used.","zh":"任何酸碱中和的离子方程式，与所用的具体酸碱无关。"},
    substitute: (r) => `\\text{equivalence at } ${formatSigFigs(r["equivalenceVolume"] ?? 0, 3)}\\ \\text{cm}^3`,
  },
  {
    latex: "\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}",
    meaning: {"en":"The general pattern. With a carbonate you also get carbon dioxide; with a metal you get hydrogen.","zh":"通式。与碳酸盐反应还生成二氧化碳；与金属反应生成氢气。"},
    substitute: (r) => `\\text{start: strong pH } ${formatSigFigs(r["strongStartPh"] ?? 0, 2)},\\ \\text{weak pH } ${formatSigFigs(
        r["weakStartPh"] ?? 0,
        2
      )}`,
  },
];
