// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/5-1-enzymes/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{enzyme} + \\text{substrate} \\rightarrow \\text{enzyme–substrate complex}",
    meaning: {"en":"They fit together like a key in a lock. The reaction happens, the products leave, and the enzyme is unchanged.","zh":"二者像钥匙配锁一样契合。反应发生，产物离开，而酶毫无变化。"},
    substitute: (r) => `${r["activity"] ?? 0}\\%\\ \\text{of maximum} \\quad \\text{optimum } ${Math.round(r["optimumTemperature"] ?? 0)}\\,\\degree\\text{C, pH } ${r["optimumPh"] ?? 0}`,
  },
  {
    latex: "\\text{rate} \\approx 2 \\times \\text{ for each } 10\\,\\degree\\text{C, below the optimum}",
    meaning: {"en":"Warmer particles collide more often and harder. This is the only mechanism acting below the optimum.","zh":"温度越高，粒子碰撞越频繁、越剧烈。最适温度以下只有这一个机制在起作用。"},
  },
  {
    latex: "\\text{above the optimum: shape lost} \\Rightarrow \\text{no fit}",
    meaning: {"en":"A different process entirely, which is why the curve is not symmetric — and why cooling it down does not bring the activity back.","zh":"这是完全不同的过程，所以曲线并不对称——也因此冷却后活性不会恢复。"},
  },
];
