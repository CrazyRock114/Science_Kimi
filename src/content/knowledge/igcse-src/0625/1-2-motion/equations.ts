// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-2-motion/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "v = \\frac{s}{t}",
    meaning: {"en":"Speed is distance travelled divided by the time taken.","zh":"速率等于通过的距离除以所用时间。"},
  },
  {
    latex: "a = \\frac{\\Delta v}{\\Delta t}",
    meaning: {"en":"Acceleration is the change in velocity divided by the time it took.","zh":"加速度等于速度变化量除以所用时间。"},
  },
  {
    latex: "s = ut + \\tfrac{1}{2}at^{2}",
    meaning: {"en":"Distance travelled under constant acceleration — this is what the graph below is drawing.","zh":"匀加速运动通过的距离——下方图像画的就是它。"},
    substitute: (r) => `s = ${formatSigFigs(r["distance"] ?? 0, 3)}\\ \\text{m},\\quad v = ${formatSigFigs(
        r["finalSpeed"] ?? 0,
        3
      )}\\ \\text{m/s}`,
  },
];
