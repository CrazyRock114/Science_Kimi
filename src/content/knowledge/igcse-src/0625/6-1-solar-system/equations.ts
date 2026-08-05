// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/6-1-solar-system/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "v = \\frac{2\\pi r}{T}",
    meaning: {"en":"Average orbital speed is the circumference of the orbit divided by the time to complete it.","zh":"平均轨道速度等于轨道周长除以公转周期。"},
    substitute: (r) => `v = ${formatSigFigs(r["orbitalSpeed"] ?? 0, 3)}\\ \\text{km/s},\\quad T = ${formatSigFigs(
        r["orbitalPeriod"] ?? 0,
        3
      )}\\ \\text{years}`,
  },
  {
    latex: "t = \\frac{d}{c}",
    meaning: {"en":"Light travel time is distance divided by 3.0 × 10⁸ m / s. Convert the distance to metres first.","zh":"光传播时间等于距离除以 3.0 × 10⁸ m / s。先把距离换算成米。"},
    substitute: (r) => `d = ${formatSigFigs(r["distanceFromSun"] ?? 0, 4)}\\ \\text{million km} \\Rightarrow ${formatSigFigs(
        r["lightMinutes"] ?? 0,
        3
      )}\\ \\text{light-minutes}`,
  },
];
