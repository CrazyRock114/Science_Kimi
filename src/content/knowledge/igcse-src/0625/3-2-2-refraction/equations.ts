// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/3-2-2-refraction/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "n = \\frac{\\sin i}{\\sin r}",
    meaning: {"en":"The refractive index is the ratio of the sine of the angle of incidence to the sine of the angle of refraction.","zh":"折射率等于入射角的正弦与折射角的正弦之比。"},
    substitute: (r) => {
        const i = r["angleOfIncidence"] ?? 0;
        const rr = r["angleOfRefraction"] ?? 0;
        if (r["totalInternalReflection"] === 1) {
          return `i = ${formatSigFigs(i, 3)}^\\circ > c = ${formatSigFigs(
            r["criticalAngle"] ?? 0,
            3
          )}^\\circ \\;\\Rightarrow\\; \\text{no refracted ray}`;
        }
        return `i = ${formatSigFigs(i, 3)}^\\circ,\\quad r = ${formatSigFigs(rr, 3)}^\\circ`;
      },
  },
  {
    latex: "n = \\frac{1}{\\sin c}",
    meaning: {"en":"The critical angle follows directly from the refractive index — a denser material has a smaller critical angle.","zh":"临界角由折射率直接决定——介质越密，临界角越小。"},
    substitute: (r) => `c = ${formatSigFigs(r["criticalAngle"] ?? 0, 3)}^\\circ`,
  },
];
