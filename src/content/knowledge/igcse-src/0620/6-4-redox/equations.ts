// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/6-4-redox/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{Mg} \\rightarrow \\mathrm{Mg^{2+}} + 2e^-",
    meaning: {"en":"Oxidation: electrons on the right, so they have been lost, and the oxidation number rises from 0 to +2. Magnesium does this whether it meets oxygen or chlorine.","zh":"氧化：电子在右边，说明被失去，氧化数由 0 升到 +2。无论遇到氧还是氯，镁都会这样。"},
    substitute: (r) => `\\text{correct } ${r["correct"] ?? 0}/${r["total"] ?? 0} \\quad \\text{placed } ${r["placed"] ?? 0}`,
  },
  {
    latex: "\\mathrm{CuO} + \\mathrm{H_2} \\rightarrow \\mathrm{Cu} + \\mathrm{H_2O}",
    meaning: {"en":"Both halves at once: the copper oxide loses oxygen and is reduced, the hydrogen gains it and is oxidised. Neither can happen without the other.","zh":"两半同时发生：氧化铜失去氧被还原，氢得到氧被氧化。二者缺一不可。"},
    substitute: (r) => `${r["placed"] ?? 0}\\ \\text{placed}`,
  },
];
