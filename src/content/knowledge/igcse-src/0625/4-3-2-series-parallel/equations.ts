// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-3-2-series-parallel/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "R = \\frac{V}{I}",
    meaning: {"en":"Resistance is the p.d. across a component divided by the current through it.","zh":"电阻等于元件两端的电压除以通过它的电流。"},
  },
  {
    latex: "R_{\\text{series}} = R_1 + R_2",
    meaning: {"en":"In series the resistances simply add — the total is always larger than either one.","zh":"串联时电阻直接相加——总电阻总是大于任一个。"},
  },
  {
    latex: "\\frac{1}{R_{\\text{parallel}}} = \\frac{1}{R_1} + \\frac{1}{R_2}",
    meaning: {"en":"In parallel the reciprocals add, so the total is always smaller than either one.","zh":"并联时倒数相加，所以总电阻总是小于任一个。"},
    substitute: (r) => {
        const total = formatSigFigs(r["totalResistance"] ?? 0, 3);
        if (r["isParallel"] === 1) {
          const currents = formatSigFigs(r["sumOfCurrents"] ?? 0, 3);
          return `R_{\\text{total}} = ${total}\\ \\Omega,\\quad I_1 + I_2 = ${currents}\\ \\text{A} = I_{\\text{supply}}`;
        }
        const pds = formatSigFigs(r["sumOfPds"] ?? 0, 3);
        const supply = formatSigFigs(r["supplyCurrent"] ?? 0, 3);
        return `R_{\\text{total}} = ${total}\\ \\Omega,\\quad V_1 + V_2 = ${pds}\\ \\text{V},\\quad I = ${supply}\\ \\text{A}`;
      },
  },
];
