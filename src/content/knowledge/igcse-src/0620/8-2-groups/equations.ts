// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/8-2-groups/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "2\\,\\mathrm{Na} + 2\\,\\mathrm{H_2O} \\rightarrow 2\\,\\mathrm{NaOH} + \\mathrm{H_2}",
    meaning: {"en":"Every alkali metal does this. The product is an alkaline hydroxide solution, which is where the name comes from.","zh":"每种碱金属都会这样反应。产物是碱性的氢氧化物溶液，\"碱金属\"之名由此而来。"},
    substitute: (r) => `\\text{position } ${Math.round(r["position"] ?? 0)} \\quad \\text{melts at } ${Math.round(r["meltingPoint"] ?? 0)}\\ \\degree\\text{C} \\quad \\text{displaces } ${Math.round(r["displaces"] ?? 0)}`,
  },
  {
    latex: "\\mathrm{Cl_2} + 2\\,\\mathrm{KBr} \\rightarrow 2\\,\\mathrm{KCl} + \\mathrm{Br_2}",
    meaning: {"en":"Chlorine is above bromine, so it takes the electron and the bromine is pushed out. The solution turns orange.","zh":"氯排在溴之上，所以它夺走电子，把溴置换出来。溶液变为橙色。"},
  },
];
