// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-5-motor/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{turning effect} \\propto N B I",
    meaning: {"en":"Not a formula to substitute into at IGCSE, but the three things a question will ask you to change. More turns, a stronger field or a bigger current all make the coil turn harder.","zh":"IGCSE 阶段不需要代入计算，但题目要你改变的正是这三样。更多匝数、更强磁场或更大电流，都会让线圈转得更有力。"},
    substitute: (r) => `\\text{peak } ${r["peakTurning"] ?? 0} \\quad \\text{now } ${r["turningNow"] ?? 0}`,
  },
];
