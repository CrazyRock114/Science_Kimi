// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/8-1-periodic-table/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{period} = \\text{number of occupied shells}",
    meaning: {"en":"A new row starts whenever a shell fills. That is the only reason the rows are where they are.","zh":"每当一层填满，就开始新的一行。这就是各行位置的唯一原因。"},
    substitute: (r) => `\\text{Period } ${Math.round(r["period"] ?? 0)} \\quad \\text{Group } ${Math.round(r["group"] ?? 0)} \\quad \\text{proton number } ${Math.round(r["protonNumber"] ?? 0)}`,
  },
  {
    latex: "\\text{group} = \\text{number of outer-shell electrons}",
    meaning: {"en":"True for the main groups. Helium is the exception: its shell is full at two, which is why it sits in Group VIII.","zh":"对主族成立。氦是例外：它的电子层填满两个就满了，所以它位于第 VIII 主族。"},
  },
  {
    latex: "\\text{ionic charge} = \\text{group} \\text{ or } \\text{group} - 8",
    meaning: {"en":"Groups I to III lose electrons; groups V to VII gain them. Whichever is fewer moves.","zh":"第 I 至 III 主族失去电子，第 V 至 VII 主族得到电子。总是移动较少的那一边。"},
  },
];
