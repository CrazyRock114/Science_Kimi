// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/3-2-osmosis/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\%\\ \\text{change} = \\dfrac{m_{\\text{final}} - m_{\\text{initial}}}{m_{\\text{initial}}} \\times 100",
    meaning: {"en":"Percentage rather than raw mass, because the cylinders were not all the same size to begin with. Without this the results cannot be compared at all.","zh":"用百分比而不是原始质量，因为各个圆柱起初的大小并不相同。不这样做，结果根本无法比较。"},
    substitute: (r) => `\\text{change } ${r["change"] ?? 0}\\%\\quad \\text{at equilibrium } ${r["final"] ?? 0}\\%`,
  },
];
