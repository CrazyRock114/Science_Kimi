// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/2-2-thermal-properties/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "E = mc\\,\\Delta\\theta",
    meaning: {"en":"Use this on the sloping sections, where the temperature is changing.","zh":"用于倾斜段，即温度发生变化的部分。"},
    substitute: (r) => `\\text{gradient} = ${formatSigFigs(r["liquidGradient"] ?? 0, 3)}\\ ^\\circ\\text{C/s},\\quad E_{\\text{liquid}} = ${formatSigFigs(
        r["energyToHeatLiquid"] ?? 0,
        3
      )}\\ \\text{J}`,
  },
  {
    latex: "E = mL",
    meaning: {"en":"Use this on the flat plateaus, where the state is changing but the temperature is not.","zh":"用于水平平台，即物态改变而温度不变的部分。"},
    substitute: (r) => `E_{\\text{melt}} = ${formatSigFigs(r["energyToMelt"] ?? 0, 3)}\\ \\text{J},\\quad E_{\\text{boil}} = ${formatSigFigs(
        r["energyToBoil"] ?? 0,
        3
      )}\\ \\text{J}\\ (${formatSigFigs(r["boilToMeltRatio"] ?? 0, 2)}\\times)`,
  },
];
