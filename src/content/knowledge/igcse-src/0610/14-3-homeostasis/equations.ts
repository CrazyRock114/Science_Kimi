// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/14-3-homeostasis/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{glucose} \\;\\xrightarrow{\\;\\text{insulin}\\;}\\; \\text{glycogen}",
    meaning: {"en":"Insulin makes the liver and muscles take glucose out of the blood and store it. It lowers blood glucose.","zh":"胰岛素促使肝脏和肌肉把葡萄糖从血液中取走并贮存起来。它降低血糖。"},
    substitute: (r) => `\\text{peak } ${r["peak"] ?? 0}\\ \\mathrm{mmol\\,dm^{-3}} \\quad \\text{trough } ${r["trough"] ?? 0}\\ \\mathrm{mmol\\,dm^{-3}}`,
  },
  {
    latex: "\\text{glycogen} \\;\\xrightarrow{\\;\\text{glucagon}\\;}\\; \\text{glucose}",
    meaning: {"en":"Glucagon does the reverse, releasing stored glucose back into the blood. It raises blood glucose.","zh":"胰高血糖素做相反的事，把贮存的葡萄糖释放回血液。它升高血糖。"},
    substitute: (r) => `\\text{above } 10\\ \\mathrm{mmol\\,dm^{-3}}\\text{: } ${r["urine"] ?? 0}\\ \\mathrm{min} \\quad \\text{back to normal: } ${r["settle"] ?? 0}\\ \\mathrm{min}`,
  },
];
