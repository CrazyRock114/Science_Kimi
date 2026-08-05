// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-6-momentum-pressure/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "p = mv",
    meaning: {"en":"Momentum. A vector, so give opposing velocities a negative sign before adding — a head-on collision worked as a scalar gives a meaningless answer.","zh":"动量。它是矢量，相加前要给反向的速度加负号——把迎面相撞当作标量来算，得到的答案毫无意义。"},
    substitute: (r) => `\\text{before } ${r["momentumBefore"] ?? 0}\\ \\mathrm{kg\\,m\\,s^{-1}} \\quad \\text{after } ${r["momentumAfter"] ?? 0}\\ \\mathrm{kg\\,m\\,s^{-1}}`,
  },
  {
    latex: "F = \\dfrac{\\Delta p}{\\Delta t}",
    meaning: {"en":"The change in momentum is fixed by the crash. Increasing the time is the only way left to reduce the force — which is what every safety feature does.","zh":"动量的变化由碰撞本身决定。延长时间是减小力的唯一途径——每一项安全设计做的都是这件事。"},
    substitute: (r) => `F = ${r["force"] ?? 0}\\ \\mathrm{N} \\quad \\text{energy lost } ${r["energyLost"] ?? 0}\\ \\mathrm{J}`,
  },
  {
    latex: "\\Delta p = \\rho g \\Delta h",
    meaning: {"en":"Liquid pressure depends on density and depth only. The shape of the container and the total volume of liquid do not appear.","zh":"液体压强只取决于密度和深度。容器的形状和液体的总体积都不出现在式子里。"},
  },
];
