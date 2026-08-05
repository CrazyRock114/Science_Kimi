// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/14-1-nervous-system/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "P = \\dfrac{1}{v} + \\dfrac{1}{u}",
    meaning: {"en":"The power the lens must have, with v the distance to the retina and u the distance to the object, both in metres. The eye cannot change v, so every change in u must be met by the lens.","zh":"晶状体所需的屈光力，其中 v 是到视网膜的距离、u 是到物体的距离，单位均为米。眼睛无法改变 v，因此 u 的每一次变化都必须由晶状体来应对。"},
    substitute: (r) => `P = ${r["power"] ?? 0}\\ \\mathrm{D} \\quad \\text{spare} = ${r["spare"] ?? 0}\\ \\mathrm{D}`,
  },
  {
    latex: "I_{\\text{retina}} \\;\\propto\\; I \\times \\pi r^{2}",
    meaning: {"en":"Light reaching the retina depends on the area of the pupil, not its width. Halving the diameter quarters the light — which is also why the reflex can only ever change it sixteenfold.","zh":"到达视网膜的光取决于瞳孔的面积而非宽度。直径减半，光量降为四分之一——这也正是该反射最多只能改变 16 倍的原因。"},
    substitute: (r) => `d = ${r["pupil"] ?? 0}\\ \\mathrm{mm} \\quad I_{\\text{retina}} = ${r["retina"] ?? 0}`,
  },
];
