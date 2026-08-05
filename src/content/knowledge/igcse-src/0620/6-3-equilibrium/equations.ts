// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/6-3-equilibrium/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{N_2(g)} + 3\\mathrm{H_2(g)} \\rightleftharpoons 2\\mathrm{NH_3(g)}",
    meaning: {"en":"The Haber process. Exothermic forwards, and four molecules of gas becoming two — which is why cooling and squeezing both push it towards ammonia.","zh":"哈伯法。正反应放热，且 4 个气体分子变成 2 个——因此降温与加压都推动它向氨的方向进行。"},
    substitute: (r) => `\\text{yield} = ${r["yieldHere"] ?? 0}\\% \\text{ at } ${r["temperature"] ?? 0}\\,^{\\circ}\\mathrm{C},\\ ${r["pressure"] ?? 0}\\ \\mathrm{atm}`,
  },
  {
    latex: "2\\mathrm{SO_2(g)} + \\mathrm{O_2(g)} \\rightleftharpoons 2\\mathrm{SO_3(g)}",
    meaning: {"en":"The key step of the Contact process, with a vanadium(V) oxide catalyst at about 450 °C — but only 2 atm, because the yield is already about 95% without squeezing.","zh":"接触法的关键一步，用五氧化二钒催化剂，约 450 °C——但只需 2 atm，因为不加压产率就已约 95%。"},
    substitute: (r) => `\\text{Haber at } 450\\,^{\\circ}\\mathrm{C} = ${r["yieldIndustrial"] ?? 0}\\%`,
  },
];
