// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/5-1-atom-nucleus/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "{}^{A}_{Z}\\mathrm{X}",
    meaning: {"en":"Nuclide notation: the nucleon number A above, the proton number Z below. The number of neutrons is A − Z, which is the calculation this topic asks for most often.","zh":"核素符号：上方是核子数 A，下方是质子数 Z。中子数为 A − Z，这是本主题最常要求的计算。"},
    substitute: (r) => `{}^{${r["massNumber"] ?? 0}}_{${r["protonNumber"] ?? 0}}\\mathrm{X} \\quad N = ${r["neutrons"] ?? 0}`,
  },
  {
    latex: "N = A - Z",
    meaning: {"en":"Neutrons are whatever is left of the nucleons once the protons are counted. The nucleus itself has a relative charge of +Z and a relative mass of A.","zh":"数完质子后，核子中剩下的就是中子。原子核本身的相对电荷为 +Z，相对质量为 A。"},
    substitute: (r) => `\\text{charge } +${r["nuclearCharge"] ?? 0} \\quad \\text{mass } ${r["massNumber"] ?? 0}`,
  },
];
