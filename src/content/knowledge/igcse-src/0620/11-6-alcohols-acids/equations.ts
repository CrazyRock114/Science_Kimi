// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/11-6-alcohols-acids/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}",
    meaning: {"en":"Fermentation: glucose to ethanol and carbon dioxide, with yeast at about 30 °C and no air. Renewable and cheap, but slow and impure.","zh":"发酵：葡萄糖生成乙醇和二氧化碳，用酵母、约 30 °C、隔绝空气。可再生且便宜，但慢且不纯。"},
    substitute: (r) => `\\mathrm{C}_{${r["carbonAtoms"] ?? 0}}\\mathrm{H}_{${r["hydrogenAtoms"] ?? 0}} \\quad M_r = ${r["relativeMolecularMass"] ?? 0}`,
  },
  {
    latex: "\\mathrm{C_2H_4} + \\mathrm{H_2O} \\rightarrow \\mathrm{C_2H_5OH}",
    meaning: {"en":"Catalytic addition: steam added across the double bond of ethene, at about 300 °C and 60 atm. Fast, continuous and pure, but from a finite resource.","zh":"催化加成：水蒸气加到乙烯的双键上，约 300 °C、60 atm。快速、连续、纯净，但原料有限。"},
    substitute: (r) => `M_r = ${r["relativeMolecularMass"] ?? 0}`,
  },
  {
    latex: "\\mathrm{CH_3COOH} + \\mathrm{C_2H_5OH} \\rightleftharpoons \\mathrm{CH_3COOC_2H_5} + \\mathrm{H_2O}",
    meaning: {"en":"Ethanoic acid plus ethanol gives ethyl ethanoate and water, with concentrated sulfuric acid as the catalyst. The alcohol names the first half of the ester, the acid the second.","zh":"乙酸加乙醇生成乙酸乙酯和水，用浓硫酸作催化剂。酯名称的前半来自醇，后半来自酸。"},
    substitute: (r) => `\\text{oxygen atoms} = ${r["oxygenAtoms"] ?? 0}`,
  },
];
