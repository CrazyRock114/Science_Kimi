// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/2-2-atomic-structure/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{mass number} = \\text{protons} + \\text{neutrons}",
    meaning: {"en":"Electrons are never counted — their mass is about 1/1836 of a proton.","zh":"绝不计入电子——其质量约为质子的 1/1836。"},
    substitute: (r) => `${Math.round(r["protonNumber"] ?? 0)} + ${Math.round(r["neutrons"] ?? 0)} = ${Math.round(r["massNumber"] ?? 0)}`,
  },
  {
    latex: "\\text{charge} = \\text{protons} - \\text{electrons}",
    meaning: {"en":"A neutral atom has equal numbers. Losing electrons gives a positive ion, gaining them a negative one.","zh":"中性原子两者相等。失电子成正离子，得电子成负离子。"},
    substitute: (r) => `${Math.round(r["protonNumber"] ?? 0)} - ${Math.round(r["electrons"] ?? 0)} = ${Math.round(r["netCharge"] ?? 0)}`,
  },
  {
    latex: "A_r = \\frac{\\sum (\\text{mass} \\times \\text{abundance})}{100}",
    meaning: {"en":"Relative atomic mass is a weighted average over isotopes — which is why chlorine is 35.5.","zh":"相对原子质量是各同位素的加权平均——这就是氯为 35.5 的原因。"},
  },
];
