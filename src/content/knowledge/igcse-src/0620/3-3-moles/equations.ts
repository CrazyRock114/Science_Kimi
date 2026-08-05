// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/3-3-moles/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "n = \\dfrac{m}{M_r}",
    meaning: {"en":"Amount of substance from mass and molar mass. Rearrange it whichever way the question needs — nearly every calculation in this topic is this one line used twice.","zh":"由质量与摩尔质量求物质的量。按题目需要变形即可——本主题几乎每道计算都是这一行用两次。"},
    substitute: (r) => `n(\\mathrm{Mg}) = ${r["magnesiumMoles"] ?? 0}\\ \\mathrm{mol} \\quad n(\\mathrm{O_2}) = ${r["oxygenMoles"] ?? 0}\\ \\mathrm{mol}`,
  },
  {
    latex: "c = \\dfrac{n}{V}",
    meaning: {"en":"Concentration in mol/dm³, with the volume in cubic decimetres. A volume given in cm³ has to be divided by 1000 first, and forgetting that is out by a factor of a thousand.","zh":"以 mol/dm³ 计的浓度，体积用立方分米。若题目给的是 cm³，必须先除以 1000，忘记这一步会差一千倍。"},
    substitute: (r) => `c = ${r["concentration"] ?? 0}\\ \\mathrm{mol/dm^3}`,
  },
  {
    latex: "V_{\\text{gas}} = 24n \\ \\mathrm{dm^3\\ (r.t.p.)}",
    meaning: {"en":"One mole of any gas takes up 24 dm³ at room temperature and pressure. Which gas it is makes no difference at all.","zh":"室温常压下任何气体 1 摩尔占 24 dm³。是哪种气体完全没有影响。"},
    substitute: (r) => `m(\\mathrm{MgO}) = ${r["productMass"] ?? 0}\\ \\mathrm{g}`,
  },
];
