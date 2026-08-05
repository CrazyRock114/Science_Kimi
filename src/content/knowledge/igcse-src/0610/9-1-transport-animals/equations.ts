// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/9-1-transport-animals/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{cardiac output} = \\text{heart rate} \\times \\text{stroke volume}",
    meaning: {"en":"Two ways to move more blood: beat faster, or push more out per beat. Exercise does both; training raises the second so that resting needs less of the first.","zh":"输送更多血液有两条途径：跳得更快，或每次搏动泵出更多。运动两者兼用；训练提高后者，从而使静息时不必依赖前者。"},
    substitute: (r) => `${r["resting"] ?? 0} \\times ${r["stroke"] ?? 0}\\ \\mathrm{cm^3} \\approx 5\\ \\mathrm{dm^3\\,min^{-1}}\\ \\text{at rest}`,
  },
  {
    latex: "\\text{peak} = \\text{HR}_{\\max} \\times \\text{SV}_{\\max}",
    meaning: {"en":"Maximum heart rate is set by age and barely changes with training. The whole gain from training is in the stroke volume.","zh":"最大心率主要由年龄决定，几乎不随训练改变。训练带来的全部提升都在每搏输出量上。"},
    substitute: (r) => `\\text{peak } ${r["peak"] ?? 0}\\ \\mathrm{min^{-1}} \\rightarrow ${r["peakOutput"] ?? 0}\\ \\mathrm{dm^3\\,min^{-1}} \\quad \\text{recovery } ${r["recovery"] ?? 0}\\ \\mathrm{min}`,
  },
];
