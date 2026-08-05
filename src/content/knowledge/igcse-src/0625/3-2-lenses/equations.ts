// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/3-2-lenses/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}",
    meaning: {"en":"The thin lens equation. A negative v means the image is virtual — on the same side as the object, where no light actually is.","zh":"薄透镜公式。v 为负表示成虚像——与物体同侧，而那里实际上没有光。"},
    substitute: (r) => `v = ${r["imageDistance"] ?? 0}\\ \\mathrm{cm} \\quad f = ${r["focalPoint"] ?? 0}\\ \\mathrm{cm}`,
  },
  {
    latex: "m = \\dfrac{v}{u} = \\dfrac{h_{i}}{h_{o}}",
    meaning: {"en":"Magnification. Greater than one means enlarged, less than one diminished — and the sign carries whether it is inverted.","zh":"放大率。大于 1 为放大，小于 1 为缩小——正负号则表示是否倒立。"},
    substitute: (r) => `m = ${r["magnification"] ?? 0} \\quad h_{i} = ${r["imageHeight"] ?? 0}\\ \\mathrm{cm}`,
  },
];
