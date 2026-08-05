// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-5-induction/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "e.m.f. \\propto \\text{rate of cutting field lines}",
    meaning: {"en":"Not a formula to substitute into at IGCSE, but the sentence behind every question on this topic. Faster cutting, stronger field or more turns all raise the e.m.f.; no movement gives none.","zh":"IGCSE 阶段不需要代入计算，但这句话是本主题所有题目的依据。切割更快、磁场更强或匝数更多都会增大电动势；没有运动则完全没有。"},
    substitute: (r) => `\\text{now } ${r["emfNow"] ?? 0}\\ \\mathrm{V} \\quad \\text{peak } ${r["peak"] ?? 0}\\ \\mathrm{V}`,
  },
];
