// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-4-safety/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\dfrac{V_1}{V_2} = \\dfrac{R_1}{R_2}",
    meaning: {"en":"The same current flows through both, so V = IR makes the shares proportional to the resistances. And the two voltages must add to the supply — checking that catches most errors.","zh":"两者流过相同的电流，因此由 V = IR，分得的电压与阻值成正比。而两个电压之和必须等于电源电压——核对这一点能查出大多数错误。"},
    substitute: (r) => `V_1 = ${r["v1"] ?? 0}\\ \\mathrm{V} \\quad V_2 = ${r["v2"] ?? 0}\\ \\mathrm{V}`,
  },
  {
    latex: "I = \\dfrac{P}{V}",
    meaning: {"en":"How a fuse rating is chosen: find the working current, then take the smallest standard fuse above it.","zh":"选择保险丝额定值的方法：先求出工作电流，再取高于它的最小标准规格。"},
    substitute: (r) => `I = ${r["current"] ?? 0}\\ \\mathrm{A} \\rightarrow \\text{fuse } ${r["recommendedFuse"] ?? 0}\\ \\mathrm{A}`,
  },
];
