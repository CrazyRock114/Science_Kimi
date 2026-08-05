// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/3-3-em-spectrum/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "c = f\\lambda = 3.0 \\times 10^{8}\\ \\text{m/s}",
    meaning: {"en":"Every electromagnetic wave travels at this speed in a vacuum, whatever its wavelength.","zh":"无论波长如何，所有电磁波在真空中都以此速度传播。"},
    substitute: (r) => `\\lambda = ${formatSigFigs(r["wavelength"] ?? 0, 2)}\\ \\text{m},\\quad f = ${formatSigFigs(
        r["frequency"] ?? 0,
        3
      )}\\ \\text{Hz},\\quad f\\lambda = ${formatSigFigs(r["speed"] ?? 0, 3)}\\ \\text{m/s}`,
  },
];
