// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/9-4-reactivity-series/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{metal} + \\text{water} \\rightarrow \\text{metal hydroxide} + \\mathrm{H_2}",
    meaning: {"en":"Only the top few metals do this with cold water. Hydrogen is displaced, so it comes off as a gas.","zh":"只有最上面几种金属能与冷水这样反应。氢被置换出来，以气体形式放出。"},
    substitute: (r) => `\\text{position } ${Math.round(r["position"] ?? 0)} \\quad \\text{reacts with } ${Math.round(r["reactionsOutOf4"] ?? 0)} \\text{ of the 4 reagents}`,
  },
  {
    latex: "\\text{metal} + \\text{acid} \\rightarrow \\text{salt} + \\mathrm{H_2}",
    meaning: {"en":"Only for metals above hydrogen in the series. Below it, nothing happens at all.","zh":"只适用于排在氢之上的金属。排在氢之下则完全不反应。"},
  },
  {
    latex: "\\mathrm{M} \\rightarrow \\mathrm{M^{n+}} + n e^-",
    meaning: {"en":"The more readily a metal does this — gives up electrons to become a positive ion — the higher it sits.","zh":"金属越容易做到这一点——失去电子变成正离子——它的位置就越高。"},
  },
];
