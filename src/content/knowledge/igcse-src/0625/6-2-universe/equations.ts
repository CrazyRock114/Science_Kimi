// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/6-2-universe/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "H_0 = \\frac{v}{d}",
    meaning: {"en":"The Hubble constant is the gradient of the recession speed against distance graph.","zh":"哈勃常数就是退行速度–距离图像的斜率。"},
    substitute: (r) => `H_0 = ${formatSigFigs(r["hubbleConstant"] ?? 0, 3)} \\times 10^{-18}\\ \\text{s}^{-1},\\quad \\text{gradient} = ${formatSigFigs(
        r["gradient"] ?? 0,
        3
      )}\\ \\text{km/s per Mly}`,
  },
  {
    latex: "\\text{age} \\approx \\frac{1}{H_0}",
    meaning: {"en":"One over the Hubble constant estimates how long the Universe has been expanding.","zh":"哈勃常数的倒数给出宇宙膨胀持续时间的估计。"},
    substitute: (r) => `\\approx ${formatSigFigs(r["ageOfUniverse"] ?? 0, 3)}\\ \\text{billion years}`,
  },
];
