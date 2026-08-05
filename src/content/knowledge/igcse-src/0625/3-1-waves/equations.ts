// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/3-1-waves/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "v = f\\lambda",
    meaning: {"en":"Wave speed equals frequency times wavelength. In a given medium the speed is fixed, so f and λ trade off.","zh":"波速等于频率乘波长。在给定介质中波速固定，因此频率与波长此消彼长。"},
    substitute: (r) => `v = ${formatSigFigs(r["waveSpeed"] ?? 0, 3)}\\ \\text{m/s},\\quad \\lambda = ${formatSigFigs(
        r["wavelength"] ?? 0,
        3
      )}\\ \\text{m}`,
  },
  {
    latex: "T = \\frac{1}{f}",
    meaning: {"en":"The period is the time for one complete wave — the reciprocal of the frequency.","zh":"周期是完成一次全振动所需的时间——频率的倒数。"},
    substitute: (r) => `T = ${formatSigFigs(r["period"] ?? 0, 3)}\\ \\text{s}`,
  },
];
