// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/6-2-rate-of-reaction/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{rate} = \\frac{\\Delta V}{\\Delta t}",
    meaning: {"en":"Rate is the gradient of the volume–time curve. Measure the initial rate from a tangent at the origin.","zh":"速率是体积–时间曲线的斜率。用原点处的切线求初始速率。"},
    substitute: (r) => `\\text{initial rate} = ${formatSigFigs(r["initialRate"] ?? 0, 3)}\\ \\text{cm}^3/\\text{s},\\quad V_{\\text{final}} = ${formatSigFigs(
        r["finalVolume"] ?? 0,
        3
      )}\\ \\text{cm}^3`,
  },
];
