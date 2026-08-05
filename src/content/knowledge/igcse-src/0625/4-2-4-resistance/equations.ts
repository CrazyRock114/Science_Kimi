// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-2-4-resistance/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "R = \\frac{V}{I}",
    meaning: {"en":"Resistance is the p.d. across a component divided by the current through it.","zh":"电阻等于元件两端电压除以通过它的电流。"},
    substitute: (r) => {
        const measured = formatSigFigs(r["measuredResistance"] ?? 0, 3);
        return r["isOhmic"] === 1 ? `R = ${measured}\\ \\Omega \\text{ \u2014 the same at every point}` : `R = ${measured}\\ \\Omega \\text{ at this p.d. only}`;
      },
  },
  {
    latex: "R \\propto \\dfrac{l}{A}",
    meaning: {"en":"Resistance is proportional to length and inversely proportional to cross-sectional area.","zh":"电阻与长度成正比，与横截面积成反比。"},
    substitute: (r) => `R_{\\text{effective}} = ${formatSigFigs(r["effectiveResistance"] ?? 0, 3)}\\ \\Omega`,
  },
];
