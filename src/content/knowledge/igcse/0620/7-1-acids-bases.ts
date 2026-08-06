/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/7-1-acids-bases
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/7-1-acids-bases/narration';
import { equations } from '../../igcse-src/0620/7-1-acids-bases/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/7-1-acids-bases/kernel';

export const kp71AcidsBases: KnowledgePoint = {
  "id": "igcse-0620-7-1-acids-bases",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "酸、碱与 pH",
    "en": "Acids, bases and pH"
  },
  "summary": {
    "zh": "并排滴定强酸与弱酸。浓度相同，pH 却大不相同——因为\"强\"和\"浓\"不是一回事。",
    "en": "Titrate a strong and a weak acid side by side. Same concentration, very different pH — because \"strong\" and \"concentrated\" are not the same thing."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/7.1.1",
      "0620/7.1.2",
      "0620/7.1.3",
      "0620/7.1.4",
      "0620/7.1.5",
      "0620/7.1.6",
      "0620/7.1.7",
      "0620/7.1.8",
      "0620/7.1.9",
      "0620/7.1.10",
      "0620/7.1.11",
      "0620/7.1.12"
    ]
  },
  "keywords": {
    "zh": [
      "酸",
      "碱",
      "可溶性碱",
      "强酸",
      "弱酸",
      "中和",
      "pH 值"
    ],
    "en": [
      "acid",
      "base",
      "alkali",
      "strong acid",
      "weak acid",
      "neutralisation",
      "pH scale"
    ]
  },
  "theory": {
    "zh": [
      {
        "type": "heading",
        "text": "学习目标"
      },
      {
        "type": "list",
        "items": [
          "描述酸与金属、碱和碳酸盐的特征反应。",
          "描述酸碱对石蕊、百里酚酞与甲基橙的作用。",
          "说明碱是金属氧化物或氢氧化物，可溶的碱称为强碱溶液。",
          "说明酸性溶液含 H⁺，碱性溶液含 OH⁻。",
          "用 pH 比较氢离子浓度并判断中性。",
          "描述酸与碱的中和反应。",
          "把酸定义为质子给体、碱定义为质子受体。（Extended）",
          "用完全电离与部分电离定义强酸与弱酸。（Extended）",
          "说明如何区分强酸与弱酸。（Extended）",
          "解释同浓度强酸与弱酸的 pH 差异。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "pH 值"
      },
      {
        "type": "paragraph",
        "text": "pH 衡量氢离子浓度。小于七为酸性，等于七为中性，大于七为碱性。每变化一个单位，浓度相差十倍——pH 三比 pH 四酸性强十倍。"
      },
      {
        "type": "paragraph",
        "text": "蓝色曲线是用氢氧化钠滴定盐酸。它从 pH 一开始，很长一段几乎不变，随后近乎垂直地跃升，然后再次趋平。"
      },
      {
        "type": "paragraph",
        "text": "那段近乎垂直的部分就是滴定终点，也是滴定法有效的原因。一滴之差就能从酸性跨到碱性，指示剂颜色骤变，体积便可精确读出。"
      },
      {
        "type": "heading",
        "text": "曲线中的两条线索"
      },
      {
        "type": "paragraph",
        "text": "对比两条曲线还有两点不同。第一，弱酸的等当点在 pH 七以上，而不是正好七——因为它生成的盐略呈碱性。"
      },
      {
        "type": "paragraph",
        "text": "第二，弱酸的垂直跃升更短。这在实践中很重要：它限制了可用的指示剂，因为指示剂必须在这段跃升范围内变色。"
      },
      {
        "type": "paragraph",
        "text": "现在把滴定管中碱的浓度加倍。等当点体积减半——中和同样的酸只需一半的量。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{H^{+}(aq) + OH^{-}(aq) \\rightarrow H_2O(l)}",
        "caption": "任何酸碱中和的离子方程式，与所用的具体酸碱无关。"
      },
      {
        "type": "formula",
        "latex": "\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}",
        "caption": "通式。与碳酸盐反应还生成二氧化碳；与金属反应生成氢气。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "acid（酸）：在水溶液中释放氢离子的物质。按布朗斯特理论，即质子给体。",
          "base（碱）：能中和酸的金属氧化物或氢氧化物。按布朗斯特理论，即质子受体。",
          "alkali（可溶性碱）：能溶于水的碱，其溶液含氢氧根离子。",
          "strong acid（强酸）：在溶液中完全电离的酸——每个分子都释放质子。与浓度无关。",
          "weak acid（弱酸）：只部分电离的酸，大多数分子保持完整，释放的 H⁺ 较少。",
          "neutralisation（中和）：H⁺ 与 OH⁻ 结合生成水的反应，另一产物为盐。",
          "pH scale（pH 值）：氢离子浓度的量度。每差一个单位相差十倍；7 为中性。"
        ]
      }
    ],
    "en": [
      {
        "type": "heading",
        "text": "Learning objectives"
      },
      {
        "type": "list",
        "items": [
          "Describe the characteristic reactions of acids with metals, bases and carbonates.",
          "Describe the effect of acids and alkalis on litmus, thymolphthalein and methyl orange.",
          "State that bases are metal oxides or hydroxides, and that alkalis are soluble bases.",
          "State that acidic solutions contain H⁺ ions and alkaline solutions contain OH⁻ ions.",
          "Compare hydrogen ion concentration and neutrality using the pH scale.",
          "Describe the neutralisation reaction between an acid and an alkali.",
          "Define acids as proton donors and bases as proton acceptors. (Extended)",
          "Define strong and weak acids in terms of complete and partial dissociation. (Extended)",
          "Describe how to distinguish a strong acid from a weak acid. (Extended)",
          "Explain the pH difference between strong and weak acids of the same concentration. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "The pH scale"
      },
      {
        "type": "paragraph",
        "text": "pH measures hydrogen ion concentration. Below seven is acidic, seven is neutral, above seven is alkaline. Each step of one on the scale is a factor of ten in concentration — pH three is ten times more acidic than pH four."
      },
      {
        "type": "paragraph",
        "text": "The blue curve is hydrochloric acid being titrated with sodium hydroxide. It starts at pH one, barely moves for a long time, then leaps almost vertically before flattening out again."
      },
      {
        "type": "paragraph",
        "text": "That near-vertical section is the end-point, and it is why titration works. A single drop takes you from acidic to alkaline, so an indicator changes colour sharply and you can read the volume precisely."
      },
      {
        "type": "heading",
        "text": "Two clues in the curves"
      },
      {
        "type": "paragraph",
        "text": "Compare the two curves and there are two more differences. First, the weak acid ends up at an equivalence point above pH seven, not exactly at seven — because the salt it forms is slightly alkaline."
      },
      {
        "type": "paragraph",
        "text": "Second, the vertical jump is shorter for the weak acid. That matters practically: it limits which indicators will work, because the indicator must change colour inside that jump."
      },
      {
        "type": "paragraph",
        "text": "Now double the concentration of the alkali in the burette. The equivalence point halves — you need only half as much to neutralise the same acid."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{H^{+}(aq) + OH^{-}(aq) \\rightarrow H_2O(l)}",
        "caption": "The ionic equation for every acid–alkali neutralisation, whichever acid and alkali are used."
      },
      {
        "type": "formula",
        "latex": "\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}",
        "caption": "The general pattern. With a carbonate you also get carbon dioxide; with a metal you get hydrogen."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "acid (酸): A substance that releases hydrogen ions in aqueous solution. In Brønsted terms, a proton donor.",
          "base (碱): A metal oxide or hydroxide that neutralises an acid. In Brønsted terms, a proton acceptor.",
          "alkali (可溶性碱): A base that dissolves in water, giving a solution containing hydroxide ions.",
          "strong acid (强酸): An acid that is fully dissociated in solution — every molecule releases its proton. Nothing to do with how concentrated it is.",
          "weak acid (弱酸): An acid that is only partly dissociated, so most molecules stay intact and fewer H⁺ ions are released.",
          "neutralisation (中和): The reaction of H⁺ with OH⁻ to form water, giving a salt as the other product.",
          "pH scale (pH 值): A measure of hydrogen ion concentration. Each unit is a factor of ten; 7 is neutral."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-7-1-cp1",
      "syllabus": [
        "0620/7.1.10",
        "0620/7.1.12"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Hydrochloric acid and ethanoic acid both have a concentration of 0.1 mol / dm³. The hydrochloric acid has a pH of 1 and the ethanoic acid has a pH of about 3. Explain this difference.",
      "markScheme": [
        {
          "text": "Hydrochloric acid is a strong acid and is fully dissociated into ions",
          "marks": 1
        },
        {
          "text": "Ethanoic acid is a weak acid and is only partially dissociated",
          "marks": 1
        },
        {
          "text": "so the ethanoic acid has a lower concentration of hydrogen ions, giving a higher pH",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两者浓度完全相同——本题只考电离程度。答\"乙酸更稀\"是典型错误，得零分。",
        "en": "The concentrations are identical — this question is entirely about dissociation. Answering \"the ethanoic acid is more dilute\" is the classic error and scores zero."
      }
    },
    {
      "id": "0620-7-1-cp2",
      "syllabus": [
        "0620/7.1.8"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 1,
      "stem": "State the ionic equation for the neutralisation of any acid by any alkali.",
      "options": [
        "H⁺(aq) + OH⁻(aq) → H₂O(l)",
        "H⁺(aq) + Cl⁻(aq) → HCl(aq)",
        "Na⁺(aq) + OH⁻(aq) → NaOH(aq)",
        "H₂O(l) → H⁺(aq) + OH⁻(aq)"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "H⁺(aq) + OH⁻(aq) → H₂O(l)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "旁观离子相互抵消，所以一个方程式适用于所有酸碱组合。需要写状态符号。",
        "en": "The spectator ions cancel, which is why one equation covers every acid–alkali pair. State symbols are expected."
      }
    },
    {
      "id": "0620-7-1-cp3",
      "syllabus": [
        "0620/7.1.1"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe what you would observe, and name the products, when dilute hydrochloric acid is added to solid calcium carbonate.",
      "markScheme": [
        {
          "text": "Effervescence / bubbles of gas are seen and the solid dissolves",
          "marks": 1
        },
        {
          "text": "The gas produced is carbon dioxide",
          "marks": 1
        },
        {
          "text": "The other products are calcium chloride and water",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "酸 + 碳酸盐永远生成盐 + 水 + 二氧化碳。盐由所用的酸决定：盐酸生成氯化物，硫酸生成硫酸盐，硝酸生成硝酸盐。",
        "en": "Acid + carbonate always gives salt + water + carbon dioxide. Name the salt from the acid used: hydrochloric gives a chloride, sulfuric a sulfate, nitric a nitrate."
      }
    },
    {
      "id": "0620-7-1-cp4",
      "syllabus": [
        "0620/7.1.11"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 2,
      "stem": "Suggest one experiment, other than measuring pH, that would distinguish a strong acid from a weak acid of the same concentration.",
      "markScheme": [
        {
          "text": "Add the same piece of magnesium to each and compare the rate of effervescence",
          "marks": 1,
          "alternatives": [
            "compare the electrical conductivity of the two solutions"
          ]
        },
        {
          "text": "The strong acid reacts faster / conducts better, because it has a higher concentration of ions",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两种酸最终生成的氢气体积相同——酸的总量相同。只有速率不同，因为只有 H⁺ 浓度不同。",
        "en": "Both acids will eventually produce the same volume of hydrogen — the same amount of acid is present. Only the rate differs, because only the H⁺ concentration differs."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "acidConcentration",
        "label": {
          "zh": "酸的浓度",
          "en": "Acid concentration"
        },
        "min": 0.01,
        "max": 1,
        "step": 0.01,
        "defaultValue": 0.1,
        "unit": "mol / dm³"
      },
      {
        "key": "alkaliConcentration",
        "label": {
          "zh": "碱的浓度",
          "en": "Alkali concentration"
        },
        "min": 0.01,
        "max": 1,
        "step": 0.01,
        "defaultValue": 0.1,
        "unit": "mol / dm³"
      },
      {
        "key": "acidVolume",
        "label": {
          "zh": "酸的体积",
          "en": "Volume of acid"
        },
        "min": 10,
        "max": 50,
        "step": 5,
        "defaultValue": 25,
        "unit": "cm³"
      },
      {
        "key": "maxVolume",
        "label": {
          "zh": "加入碱的最大体积",
          "en": "Alkali added (max)"
        },
        "min": 20,
        "max": 100,
        "step": 10,
        "defaultValue": 50,
        "unit": "cm³"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "7-1-acids-bases",
        "hint": {
          "en": "Both acids are at the same concentration — yet they start three pH units apart. That gap is dissociation.",
          "zh": "两种酸浓度完全相同——起始 pH 却相差三个单位。这个差距就是电离程度。"
        },
        "params": [
          {
            "key": "acidConcentration",
            "label": {
              "en": "Acid concentration",
              "zh": "酸的浓度"
            },
            "unit": "mol / dm³",
            "min": 0.01,
            "max": 1,
            "step": 0.01,
            "default": 0.1
          },
          {
            "key": "alkaliConcentration",
            "label": {
              "en": "Alkali concentration",
              "zh": "碱的浓度"
            },
            "unit": "mol / dm³",
            "min": 0.01,
            "max": 1,
            "step": 0.01,
            "default": 0.1
          },
          {
            "key": "acidVolume",
            "label": {
              "en": "Volume of acid",
              "zh": "酸的体积"
            },
            "unit": "cm³",
            "min": 10,
            "max": 50,
            "step": 5,
            "default": 25
          },
          {
            "key": "maxVolume",
            "label": {
              "en": "Alkali added (max)",
              "zh": "加入碱的最大体积"
            },
            "unit": "cm³",
            "min": 20,
            "max": 100,
            "step": 10,
            "default": 50
          }
        ],
        "readouts": [
          {
            "key": "equivalenceVolume",
            "label": {
              "en": "Equivalence point",
              "zh": "等当点"
            },
            "unit": "cm³",
            "sigFigs": 3
          },
          {
            "key": "strongStartPh",
            "label": {
              "en": "Strong acid start pH",
              "zh": "强酸初始 pH"
            },
            "unit": "",
            "sigFigs": 2
          },
          {
            "key": "weakStartPh",
            "label": {
              "en": "Weak acid start pH",
              "zh": "弱酸初始 pH"
            },
            "unit": "",
            "sigFigs": 2
          },
          {
            "key": "weakEquivalencePh",
            "label": {
              "en": "Weak acid pH at equivalence",
              "zh": "弱酸等当点 pH"
            },
            "unit": "",
            "sigFigs": 2
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Equal concentrations",
              "zh": "浓度相同"
            },
            "params": {
              "acidConcentration": 0.1,
              "alkaliConcentration": 0.1,
              "acidVolume": 25,
              "maxVolume": 50
            }
          },
          {
            "label": {
              "en": "Double the alkali",
              "zh": "碱浓度加倍"
            },
            "params": {
              "acidConcentration": 0.1,
              "alkaliConcentration": 0.2,
              "acidVolume": 25,
              "maxVolume": 50
            }
          },
          {
            "label": {
              "en": "Dilute acid",
              "zh": "稀酸"
            },
            "params": {
              "acidConcentration": 0.01,
              "alkaliConcentration": 0.1,
              "acidVolume": 25,
              "maxVolume": 50
            }
          },
          {
            "label": {
              "en": "More acid in the flask",
              "zh": "烧瓶中酸更多"
            },
            "params": {
              "acidConcentration": 0.1,
              "alkaliConcentration": 0.1,
              "acidVolume": 50,
              "maxVolume": 100
            }
          }
        ]
      },
      "kernel": kernel
    },
    "liveFormulas": igcseLiveFormulas(equations)
  },
  "presets": [
    {
      "id": "preset-1",
      "name": {
        "zh": "浓度相同",
        "en": "Equal concentrations"
      },
      "params": {
        "acidConcentration": 0.1,
        "alkaliConcentration": 0.1,
        "acidVolume": 25,
        "maxVolume": 50
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "碱浓度加倍",
        "en": "Double the alkali"
      },
      "params": {
        "acidConcentration": 0.1,
        "alkaliConcentration": 0.2,
        "acidVolume": 25,
        "maxVolume": 50
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "稀酸",
        "en": "Dilute acid"
      },
      "params": {
        "acidConcentration": 0.01,
        "alkaliConcentration": 0.1,
        "acidVolume": 25,
        "maxVolume": 50
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "烧瓶中酸更多",
        "en": "More acid in the flask"
      },
      "params": {
        "acidConcentration": 0.1,
        "alkaliConcentration": 0.1,
        "acidVolume": 50,
        "maxVolume": 100
      }
    }
  ]
};
