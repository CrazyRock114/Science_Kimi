// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/9-3-alloys/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{slip} = \\text{applied force} \\times \\text{how far the layers can move}",
    meaning: {"en":"The same push moves a pure metal’s layers a whole atom along, and an alloy’s hardly at all.","zh":"同样的推力能让纯金属的层滑过整整一个原子，而合金的层几乎不动。"},
    substitute: (r) => `${(r["layerSlip"] ?? 0).toFixed(2)} \\text{ of a possible } ${(r["maximumSlip"] ?? 0).toFixed(2)} \\quad ${Math.round(r["percentGuest"] ?? 0)}\\%\\ \\text{other atoms}`,
  },
];
