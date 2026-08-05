// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/3-1-transport/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{rate of diffusion} \\propto \\text{gradient} \\times \\text{surface area}",
    meaning: {"en":"And inversely proportional to the distance across. Zero gradient means zero net movement, however warm it is.","zh":"并与穿越距离成反比。梯度为零时净移动即为零，无论温度多高。"},
    substitute: (r) => `\\text{diffusion } ${r["diffusionRate"] ?? 0} \\quad \\text{active transport } ${r["activeTransportRate"] ?? 0} \\quad \\text{gradient } ${Math.round(r["gradient"] ?? 0)}`,
  },
  {
    latex: "\\text{active transport} \\ne f(\\text{gradient})",
    meaning: {"en":"A flat line across the whole graph, including where the gradient opposes it. That independence is what makes it useful.","zh":"整张图上都是一条水平线，包括梯度不利的一侧。这种\"不受梯度影响\"正是它的价值所在。"},
  },
  {
    latex: "\\text{active transport} = f(\\text{respiration}) = f(\\text{enzymes})",
    meaning: {"en":"Which is why its temperature curve is the enzyme curve, and why cyanide or lack of oxygen stops it dead.","zh":"所以它的温度曲线就是酶的曲线，也因此氰化物或缺氧会使它完全停止。"},
  },
];
