// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/5-2-radioactivity/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "A = A_0 \\left(\\tfrac{1}{2}\\right)^{t / t_{1/2}}",
    meaning: {"en":"The corrected count rate halves once per half-life, however far along you start.","zh":"校正后的计数率每过一个半衰期减半，无论从哪里开始都一样。"},
    substitute: (r) => `t_{1/2} = ${formatSigFigs(r["measuredHalfLife"] ?? 0, 3)}\\ \\text{h},\\quad ${formatSigFigs(
        r["halfLivesElapsed"] ?? 0,
        2
      )}\\ \\text{half-lives elapsed}`,
  },
  {
    latex: "^{238}_{92}\\mathrm{U} \\rightarrow\\ ^{234}_{90}\\mathrm{Th} + ^{4}_{2}\\alpha",
    meaning: {"en":"Alpha decay: nucleon number falls by 4, proton number by 2. Both columns must balance.","zh":"α 衰变：核子数减 4，质子数减 2。上下两行都必须配平。"},
  },
  {
    latex: "^{14}_{6}\\mathrm{C} \\rightarrow\\ ^{14}_{7}\\mathrm{N} + ^{\\ \\ 0}_{-1}\\beta",
    meaning: {"en":"Beta decay: a neutron becomes a proton, so the proton number rises by 1 and the nucleon number is unchanged.","zh":"β 衰变：中子变质子，质子数加 1，核子数不变。"},
  },
];
