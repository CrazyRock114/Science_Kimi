// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/19-1-ecosystems/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "E_{n} = E_{1} \\times t^{\\,n-1}",
    meaning: {"en":"Energy at the nth trophic level, where t is the fraction passed on at each step. Because t is about a tenth, the fall is not steady — it is a factor of ten every level.","zh":"第 n 营养级的能量，其中 t 是每一步传递的比例。由于 t 约为十分之一，下降不是匀速的——而是每升高一级就减少到十分之一。"},
    substitute: (r) => `\\text{top level } ${r["top"] ?? 0}\\ \\mathrm{kJ\\,m^{-2}\\,yr^{-1}} \\quad (${r["efficiency"] ?? 0}\\%)`,
  },
  {
    latex: "\\text{people fed} \\;\\propto\\; \\dfrac{1}{t}",
    meaning: {"en":"Feed a crop to an animal and you get back only the fraction t of its energy. Eating the crop directly feeds 1/t times as many people from the same land.","zh":"把作物喂给动物，你只能取回其能量的 t 倍。直接食用作物，同样的土地能养活 1/t 倍的人。"},
    substitute: (r) => `\\dfrac{1}{t} = ${r["cropAdvantage"] ?? 0} \\quad \\text{5th level: } ${r["fifth"] ?? 0}\\ \\mathrm{kJ\\,m^{-2}\\,yr^{-1}}`,
  },
];
