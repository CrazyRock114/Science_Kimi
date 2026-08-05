// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/4-1-electrolysis/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{Pb^{2+}} + 2e^- \\rightarrow \\mathrm{Pb}",
    meaning: {"en":"Reduction at the cathode: electrons on the left means electrons gained. The number of electrons always matches the charge on the ion.","zh":"阴极的还原：电子在左边表示得到电子。电子数总是与离子所带电荷数相同。"},
    substitute: (r) => `\\text{correct } ${r["correct"] ?? 0}/${r["total"] ?? 0} \\quad \\text{placed } ${r["placed"] ?? 0}`,
  },
  {
    latex: "2\\mathrm{Br^-} \\rightarrow \\mathrm{Br_2} + 2e^-",
    meaning: {"en":"Oxidation at the anode: electrons on the right means electrons lost. Check that the total charge is the same on both sides — here it is zero either way.","zh":"阳极的氧化：电子在右边表示失去电子。要核对两边总电荷是否相等——这里两边都是零。"},
    substitute: (r) => `${r["placed"] ?? 0}\\ \\text{placed}`,
  },
];
