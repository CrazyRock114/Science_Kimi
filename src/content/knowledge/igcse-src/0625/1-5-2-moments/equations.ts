// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-5-2-moments/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{moment} = F \\times d",
    meaning: {"en":"The moment of a force equals the force multiplied by the perpendicular distance from the pivot.","zh":"力矩等于力乘以到支点的垂直距离。"},
  },
  {
    latex: "F_1 d_1 = F_2 d_2",
    meaning: {"en":"At balance, the anticlockwise moment equals the clockwise moment.","zh":"平衡时，逆时针力矩等于顺时针力矩。"},
    substitute: (r) => {
        const a = formatSigFigs(r["anticlockwiseMoment"] ?? 0, 3);
        const c = formatSigFigs(r["clockwiseMoment"] ?? 0, 3);
        if (r["balanced"] === 1) return `${a} = ${c}\\ \\text{N m} \\;\\Rightarrow\\; \\text{balanced}`;
        const bigger = (r["netMoment"] ?? 0) > 0;
        return bigger ? `${a} < ${c}\\ \\text{N m} \\;\\Rightarrow\\; \\text{right sinks}` : `${a} > ${c}\\ \\text{N m} \\;\\Rightarrow\\; \\text{left sinks}`;
      },
  },
];
