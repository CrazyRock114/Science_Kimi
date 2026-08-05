// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-2-current-power/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "I = \\dfrac{Q}{t}",
    meaning: {"en":"Current is charge per second, so t must be in seconds. Rearranged, Q = It — and using hours here is out by a factor of 3600.","zh":"电流是每秒通过的电荷，因此 t 必须以秒计。变形得 Q = It——这里若用小时会差 3600 倍。"},
  },
  {
    latex: "P = IV \\qquad E = IVt",
    meaning: {"en":"V is joules per coulomb and I is coulombs per second, so IV is joules per second. The formula is two units multiplied, not something to memorise.","zh":"V 是焦耳每库仑，I 是库仑每秒，因此 IV 就是焦耳每秒。这个公式只是两个单位相乘，不必硬背。"},
    substitute: (r) => `P = ${r["power"] ?? 0}\\ \\mathrm{W} \\quad E = ${r["energyJoules"] ?? 0}\\ \\mathrm{J} = ${r["energyKwh"] ?? 0}\\ \\mathrm{kW\\,h}`,
  },
  {
    latex: "1\\ \\mathrm{kW\\,h} = 3.6 \\times 10^{6}\\ \\mathrm{J}",
    meaning: {"en":"A thousand watts times three thousand six hundred seconds. To find a cost, work in kilowatts and hours and then multiply by the price.","zh":"1000 瓦乘以 3600 秒。计算费用时用千瓦和小时，再乘以单价。"},
    substitute: (r) => `\\text{cost} = ${r["cost"] ?? 0}\\ \\text{pence}`,
  },
];
