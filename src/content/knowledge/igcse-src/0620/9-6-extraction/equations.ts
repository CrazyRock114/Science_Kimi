// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/9-6-extraction/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\mathrm{C} + \\mathrm{O_2} \\rightarrow \\mathrm{CO_2}",
    meaning: {"en":"The coke burns in the blast of hot air. This is what heats the furnace to about 1500 °C.","zh":"焦炭在鼓入的热空气中燃烧。正是它把炉温加热到约 1500 °C。"},
    substitute: (r) => `\\text{position } ${Math.round(r["position"] ?? 0)} \\quad \\text{the line sits at position } ${Math.round(r["landmarkPosition"] ?? 0)}`,
  },
  {
    latex: "\\mathrm{CO_2} + \\mathrm{C} \\rightarrow 2\\,\\mathrm{CO}",
    meaning: {"en":"Carbon dioxide rises through hot coke and is reduced to carbon monoxide — the reducing agent that does the real work.","zh":"二氧化碳上升穿过热焦炭，被还原为一氧化碳——真正起还原作用的就是它。"},
  },
  {
    latex: "\\mathrm{Fe_2O_3} + 3\\,\\mathrm{CO} \\rightarrow 2\\,\\mathrm{Fe} + 3\\,\\mathrm{CO_2}",
    meaning: {"en":"Carbon monoxide takes the oxygen from the ore. The molten iron runs to the bottom of the furnace.","zh":"一氧化碳夺走矿石中的氧。熔融的铁流到炉底。"},
  },
  {
    latex: "\\mathrm{CaCO_3} \\rightarrow \\mathrm{CaO} + \\mathrm{CO_2}",
    meaning: {"en":"Limestone decomposes in the heat. The calcium oxide then reacts with sandy impurities to make slag.","zh":"石灰石受热分解。生成的氧化钙再与砂质杂质反应生成炉渣。"},
  },
  {
    latex: "\\mathrm{CaO} + \\mathrm{SiO_2} \\rightarrow \\mathrm{CaSiO_3}",
    meaning: {"en":"The slag. It floats on the molten iron and is drained off separately.","zh":"这就是炉渣。它浮在铁水上，单独排出。"},
  },
];
