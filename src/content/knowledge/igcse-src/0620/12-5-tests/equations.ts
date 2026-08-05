// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/12-5-tests/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{titre} = V_{\\text{final}} - V_{\\text{initial}}",
    meaning: {"en":"The volume delivered by a burette is a difference between two readings, not a single number read off the scale. Both readings go in the table.","zh":"滴定管放出的体积是两次读数之差，而不是从刻度上直接读出的一个数。两次读数都要记入表格。"},
    substitute: (r) => `\\text{correct } ${r["correct"] ?? 0}/${r["total"] ?? 0} \\quad \\text{paired } ${r["paired"] ?? 0}`,
  },
];
