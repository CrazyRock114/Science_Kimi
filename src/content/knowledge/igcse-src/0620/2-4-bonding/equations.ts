// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/2-4-bonding/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{Na} \\rightarrow \\mathrm{Na^+} + e^-",
    meaning: {"en":"A metal loses its outer electrons. The nucleus is untouched, so it is still sodium — just charged.","zh":"金属失去最外层电子。原子核毫无变化，所以它仍是钠，只是带了电。"},
    substitute: (r) => `${Math.round(r["electronsTransferred"] ?? 0)}\\ \\text{transferred} \\quad ${Math.round(r["sharedPairs"] ?? 0)}\\ \\text{shared pairs} \\quad ${Math.round(r["outerElectronsWhenBonded"] ?? 0)}\\ \\text{in the outer shell}`,
  },
  {
    latex: "\\mathrm{Cl} + e^- \\rightarrow \\mathrm{Cl^-}",
    meaning: {"en":"A non-metal gains electrons to complete its outer shell. Seven plus one is eight.","zh":"非金属得到电子以填满最外层。七加一等于八。"},
  },
  {
    latex: "\\text{outer electrons} = \\text{own} + 2 \\times \\text{shared pairs}",
    meaning: {"en":"In a covalent bond both atoms count both shared electrons. That double-counting is what lets sharing work at all.","zh":"在共价键中，两个原子都把共用的两个电子算作自己的。正是这种\"重复计数\"使共用成为可能。"},
  },
];
