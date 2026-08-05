// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/11-5-alkenes/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{C_2H_4} + \\mathrm{Br_2} \\rightarrow \\mathrm{C_2H_4Br_2}",
    meaning: {"en":"Addition: the whole reagent joins the molecule, so nothing appears on the right except the single product.","zh":"加成：整个试剂并入分子，右边除了唯一的产物什么都没有。"},
    substitute: (r) => `M_r = ${Math.round(r["relativeMolecularMass"] ?? 0)} \\quad ${Math.round(r["productMolecules"] ?? 0)}\\ \\text{product molecules}`,
  },
  {
    latex: "\\mathrm{CH_4} + \\mathrm{Cl_2} \\xrightarrow{\\text{UV}} \\mathrm{CH_3Cl} + \\mathrm{HCl}",
    meaning: {"en":"Substitution: one hydrogen is swapped out, and it leaves as hydrogen chloride — a second product.","zh":"取代：一个氢被换下，并以氯化氢的形式离开——这就是第二种产物。"},
  },
  {
    latex: "\\mathrm{C_{10}H_{22}} \\rightarrow \\mathrm{C_8H_{18}} + \\mathrm{C_2H_4}",
    meaning: {"en":"Cracking: a long alkane breaks into a shorter alkane and an alkene. The atoms must balance on both sides.","zh":"裂化：长链烷烃断裂成较短的烷烃和一个烯烃。两边原子数必须配平。"},
  },
];
