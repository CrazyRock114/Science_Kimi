// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-2-1-electric-charge/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{field direction} = \\text{force on a } +\\text{ charge}",
    meaning: {"en":"Field lines point away from positive charge and towards negative charge. This is a definition, not a formula.","zh":"电场线从正电荷指出、指向负电荷。这是定义，不是公式。"},
    substitute: (r) => r["isUniform"] === 1 ? `\\text{uniform: strength is the same across the gap}` : `\\text{near} : \\text{far} = ${formatSigFigs(r["ratio"] ?? 0, 3)} : 1`,
  },
];
