// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/3-4-sound/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "v = f\\lambda",
    meaning: {"en":"The source fixes the frequency; the medium fixes the speed; the wavelength follows.","zh":"声源决定频率，介质决定声速，波长随之确定。"},
    substitute: (r) => `v = ${formatSigFigs(r["speed"] ?? 0, 3)}\\ \\text{m/s},\\quad \\lambda = ${formatSigFigs(
        r["wavelength"] ?? 0,
        3
      )}\\ \\text{m}`,
  },
  {
    latex: "d = \\frac{v\\,t}{2}",
    meaning: {"en":"For an echo or a sonar ping, halve the measured time — the sound made the journey twice.","zh":"回声或声呐要把测得的时间除以二——声音走了两趟。"},
    substitute: (r) => `t_{\\text{echo}} = ${formatSigFigs(r["echoTime"] ?? 0, 3)}\\ \\text{s}`,
  },
];
