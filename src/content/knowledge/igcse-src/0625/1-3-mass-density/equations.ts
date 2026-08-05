// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-3-mass-density/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "W = mg",
    meaning: {"en":"Weight is a force in newtons; mass is in kilograms. Rearranged, g = W / m is the gravitational field strength — the force per unit mass.","zh":"重力是以牛顿为单位的力，质量以千克为单位。变形后 g = W / m 就是重力场强度——单位质量所受的力。"},
    substitute: (r) => `W = ${r["weight"] ?? 0}\\ \\mathrm{N} \\quad \\text{at } g = ${r["fieldStrength"] ?? 0}\\ \\mathrm{N\\,kg^{-1}}`,
  },
  {
    latex: "\\rho = \\dfrac{m}{V}",
    meaning: {"en":"Convert the units before dividing. Grams and cubic centimetres give g/cm³; kilograms and cubic metres give kg/m³, and the two differ by a factor of 1000.","zh":"做除法之前先换算单位。克与立方厘米得到 g/cm³；千克与立方米得到 kg/m³，两者相差 1000 倍。"},
    substitute: (r) => `\\rho = ${r["density"] ?? 0}\\ \\mathrm{g\\,cm^{-3}} \\quad \\text{submerged } ${r["submerged"] ?? 0}\\%`,
  },
];
