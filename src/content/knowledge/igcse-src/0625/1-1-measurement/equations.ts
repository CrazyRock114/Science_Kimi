// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-1-measurement/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "R = \\sqrt{a^{2} + b^{2}}",
    meaning: {"en":"The magnitude of the resultant of two perpendicular vectors — the diagonal of the rectangle they form. Never simply a + b.","zh":"两个垂直矢量的合矢量的大小——它们所构成矩形的对角线。绝不是简单的 a + b。"},
    substitute: (r) => `R = ${r["resultant"] ?? 0} \\quad \\theta = ${r["angle"] ?? 0}^\\circ \\quad \\text{from drawing } ${r["drawn"] ?? 0}`,
  },
  {
    latex: "\\tan\\theta = \\dfrac{b}{a}",
    meaning: {"en":"The direction, measured from the first vector. A vector answer without a direction is only half an answer.","zh":"方向，从第一个矢量量起。矢量的答案若没有方向，只答了一半。"},
  },
];
