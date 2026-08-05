// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/2-1-gas-particles/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';
import { formatSigFigs } from '../../../../../simulations/igcse-kernels/lib/units';

export const equations: EquationBlock[] = [
  {
    latex: "T\\,(\\text{K}) = \\theta\\,(^\\circ\\text{C}) + 273",
    meaning: {"en":"Convert Celsius to kelvin by adding 273. Gas law calculations always need kelvin.","zh":"摄氏温度加 273 得到开尔文温度。气体定律计算必须用开尔文。"},
    substitute: (r) => `\\theta = ${formatSigFigs(r["temperatureCelsius"] ?? 0, 3)}\\ ^\\circ\\text{C}`,
  },
  {
    latex: "pV = \\text{constant}",
    meaning: {"en":"For a fixed mass of gas at constant temperature, pressure times volume does not change. Move the piston and watch it hold.","zh":"对恒温下一定质量的气体，压强与体积的乘积不变。移动活塞，看它保持不变。"},
    substitute: (r) => `pV = ${formatSigFigs(r["pV"] ?? 0, 3)}\\ \\text{(relative units)}`,
  },
];
