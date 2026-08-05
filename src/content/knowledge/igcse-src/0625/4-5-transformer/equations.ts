// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-5-transformer/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\dfrac{V_p}{V_s} = \\dfrac{N_p}{N_s}",
    meaning: {"en":"Voltage in the same ratio as turns. More turns on the secondary steps the voltage up; fewer steps it down.","zh":"电压之比等于匝数之比。副线圈匝数多则升压，匝数少则降压。"},
    substitute: (r) => `V_s = ${r["secondaryVoltage"] ?? 0}\\ \\mathrm{kV}`,
  },
  {
    latex: "I_p V_p = I_s V_s",
    meaning: {"en":"Power in equals power out for a perfect transformer. Step the voltage up by sixteen and the current is divided by sixteen — a transformer trades one against the other and never increases both.","zh":"理想变压器输入功率等于输出功率。电压升高 16 倍，电流就变为十六分之一——变压器只是在两者之间交换，绝不会同时增大两者。"},
    substitute: (r) => `I = ${r["lineCurrent"] ?? 0}\\ \\mathrm{A}`,
  },
  {
    latex: "P = I^2 R",
    meaning: {"en":"Power wasted heating the cable. It is the square that matters: doubling the transmission voltage halves the current and so cuts the loss to a quarter.","zh":"电缆发热浪费的功率。关键在于平方：输电电压加倍使电流减半，损耗因此降到四分之一。"},
    substitute: (r) => `P_{\\text{lost}} = ${r["powerLost"] ?? 0}\\ \\mathrm{MW} = ${r["percentLost"] ?? 0}\\%`,
  },
];
