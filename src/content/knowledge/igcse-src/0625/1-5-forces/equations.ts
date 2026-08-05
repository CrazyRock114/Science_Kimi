// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-5-forces/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "F = kx",
    meaning: {"en":"Hooke’s law: extension is proportional to load, but only up to the limit of proportionality. Take k from the gradient of the straight part.","zh":"胡克定律：伸长量与载荷成正比，但仅在比例极限以内成立。k 取自直线部分的梯度。"},
    substitute: (r) => `k = ${r["springConstant"] ?? 0}\\ \\mathrm{N\\,m^{-1}} \\quad \\text{limit at } ${r["limit"] ?? 0}\\ \\mathrm{N}`,
  },
  {
    latex: "F = ma",
    meaning: {"en":"The resultant force, not any single force. Force and acceleration always point the same way — so as drag grows and the resultant shrinks, so does the acceleration.","zh":"这里的 F 是合力，不是某一个力。力与加速度方向始终相同——因此阻力增大、合力减小时，加速度也随之减小。"},
    substitute: (r) => `W = ${r["weight"] ?? 0}\\ \\mathrm{N} \\quad v_{\\text{terminal}} = ${r["terminal"] ?? 0}\\ \\mathrm{m\\,s^{-1}} \\quad a = ${r["finalAcceleration"] ?? 0}\\ \\mathrm{m\\,s^{-2}}`,
  },
];
