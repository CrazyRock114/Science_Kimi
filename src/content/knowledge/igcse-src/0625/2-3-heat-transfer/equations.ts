// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/2-3-heat-transfer/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{rate of cooling} \\propto \\Delta\\theta",
    meaning: {"en":"Energy escapes faster the hotter the object is relative to its surroundings — so cooling slows as it proceeds.","zh":"物体相对环境越热，能量逃逸越快——因此冷却过程会越来越慢。"},
    substitute: (r) => `\\text{initial rate} = ${formatSigFigs(r["initialRate"] ?? 0, 3)}\\ ^\\circ\\text{C/min},\\quad \\text{excess halves in } ${formatSigFigs(
        r["halfTime"] ?? 0,
        3
      )}\\ \\text{min}`,
  },
];
