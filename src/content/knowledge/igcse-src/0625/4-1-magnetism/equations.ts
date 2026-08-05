// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-1-magnetism/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{field strength} \\propto \\text{line density}",
    meaning: {"en":"The closer the field lines, the stronger the field. This is a rule about the drawing, not a formula to substitute into.","zh":"磁感线越密，磁场越强。这是关于画法的规则，不是用来代入的公式。"},
    substitute: (r) => `\\text{near a pole} : \\text{far away} = ${formatSigFigs(r["ratio"] ?? 0, 3)} : 1`,
  },
];
