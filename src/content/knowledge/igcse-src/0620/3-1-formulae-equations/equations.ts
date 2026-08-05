// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/3-1-formulae-equations/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{atoms in} = \\text{atoms out}",
    meaning: {"en":"The law of conservation of mass, and the only reason equations are balanced at all. Atoms are rearranged in a reaction, never created or destroyed.","zh":"质量守恒定律，也是方程式需要配平的唯一原因。反应中原子只是重新排列，绝不会产生或消失。"},
    substitute: (r) => `${r["atomsLeft"] ?? 0} \\rightarrow ${r["atomsRight"] ?? 0} \\quad (${r["elementsBalanced"] ?? 0}/${r["elementsTotal"] ?? 0}\\text{ elements})`,
  },
];
