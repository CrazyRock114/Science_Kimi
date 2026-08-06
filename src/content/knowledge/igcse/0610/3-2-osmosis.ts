/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/3-2-osmosis
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/3-2-osmosis/narration';
import { equations } from '../../igcse-src/0610/3-2-osmosis/equations';
import kernel from '../../../../simulations/igcse-kernels/0610/3-2-osmosis/kernel';

export const kp32Osmosis: KnowledgePoint = {
  "id": "igcse-0610-3-2-osmosis",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "渗透",
    "en": "Osmosis"
  },
  "summary": {
    "zh": "直线穿过零点之处，就是细胞内部的浓度——你通过找到\"什么都没发生\"的那一点，测出了一个你从未接触到的量。",
    "en": "Where the line crosses zero is the concentration inside the cell — you measure something you never get access to, by finding the point where nothing happens."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/3.2.1",
      "0610/3.2.2",
      "0610/3.2.3",
      "0610/3.2.4",
      "0610/3.2.5",
      "0610/3.2.6",
      "0610/3.2.7",
      "0610/3.2.8",
      "0610/3.2.9"
    ]
  },
  "keywords": {
    "zh": [
      "渗透",
      "水势",
      "半透（性）",
      "膨胀（的）",
      "质壁分离"
    ],
    "en": [
      "osmosis",
      "water potential",
      "partially permeable",
      "turgid",
      "plasmolysis"
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
          "描述水在生物体内作为溶剂的作用。",
          "说明水通过半透膜的扩散称为渗透，并以此进出细胞。",
          "用透析袋以及置于不同浓度溶液中的植物组织探究渗透。",
          "说明细胞内压顶住细胞壁为植物提供支撑。",
          "用水势描述水分子跨半透膜的渗透。（Extended）",
          "用膨胀、萎蔫与质壁分离解释对植物细胞的影响。（Extended）",
          "解释水势在水分吸收与散失中的重要性。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "动物细胞没有细胞壁"
      },
      {
        "type": "paragraph",
        "text": "以上一切都依赖细胞壁。动物细胞没有细胞壁，因此没有什么能阻止水进入——它会膨胀，最终胀破。把红细胞放进纯水中，正是如此。"
      },
      {
        "type": "paragraph",
        "text": "而在浓溶液中，动物细胞会皱缩变形，而不是发生质壁分离，因为根本没有细胞壁供细胞膜脱离。这就是为什么血液的水势受到如此严格的调控——同样是渗透，只是没有细胞壁来救你。"
      },
      {
        "type": "formula",
        "latex": "\\%\\ \\text{change} = \\dfrac{m_{\\text{final}} - m_{\\text{initial}}}{m_{\\text{initial}}} \\times 100",
        "caption": "用百分比而不是原始质量，因为各个圆柱起初的大小并不相同。不这样做，结果根本无法比较。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "osmosis（渗透）：水通过半透膜，由水势较高处向水势较低处的扩散。",
          "water potential（水势）：衡量水分子移动自由程度的量。纯水的水势最高；加入溶质会使它降低。",
          "partially permeable（半透（性））：只允许某些分子通过而阻止另一些——水可通过，溶解的蔗糖不可。",
          "turgid（膨胀（的））：充满水分，内容物紧紧顶住细胞壁。这种压力正是支撑非木质植物直立的力量。",
          "plasmolysis（质壁分离）：植物细胞失水过多，以致细胞膜从细胞壁上分离开来。"
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
          "Describe the role of water as a solvent in organisms.",
          "State that water diffuses through partially permeable membranes by osmosis, into and out of cells.",
          "Investigate osmosis using dialysis tubing and using plant tissue in different concentrations.",
          "State that turgor pressure against the cell wall supports plants.",
          "Describe osmosis in terms of water potential across a partially permeable membrane. (Extended)",
          "Explain the effects on plant cells using the terms turgid, flaccid and plasmolysed. (Extended)",
          "Explain the importance of water potential in water uptake and loss. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "An animal cell has no wall"
      },
      {
        "type": "paragraph",
        "text": "Everything above depended on the cell wall. An animal cell has none, so nothing stops water entering — it swells and eventually bursts. A red blood cell put into pure water does exactly that."
      },
      {
        "type": "paragraph",
        "text": "And in a concentrated solution an animal cell shrinks and crinkles instead of plasmolysing, because there is no wall for the membrane to pull away from. That is why the water potential of your blood is controlled so carefully — it is the same osmosis, with no wall to save you."
      },
      {
        "type": "formula",
        "latex": "\\%\\ \\text{change} = \\dfrac{m_{\\text{final}} - m_{\\text{initial}}}{m_{\\text{initial}}} \\times 100",
        "caption": "Percentage rather than raw mass, because the cylinders were not all the same size to begin with. Without this the results cannot be compared at all."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "osmosis (渗透): The diffusion of water from a higher water potential to a lower one, through a partially permeable membrane.",
          "water potential (水势): A measure of how free the water is to move. Pure water has the highest; adding solute lowers it.",
          "partially permeable (半透（性）): Letting some molecules through but not others — water through, dissolved sucrose not.",
          "turgid (膨胀（的）): Full of water, with the contents pressing hard against the cell wall. That pressure is what holds a non-woody plant up.",
          "plasmolysis (质壁分离): When so much water has left a plant cell that the membrane pulls away from the cell wall."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-3-2-cp1",
      "syllabus": [
        "0610/3.2.7"
      ],
      "tier": "supplement",
      "commandWord": "Define",
      "marks": 2,
      "stem": "Define osmosis.",
      "markScheme": [
        {
          "text": "The net movement of water molecules from a region of higher water potential to a region of lower water potential",
          "marks": 1
        },
        {
          "text": "through a partially permeable membrane",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两半都要写。写\"水从高浓度移向低浓度\"会失分，因为关键是\"水势\"，而且必须点出半透膜。",
        "en": "Both halves are needed. \"Water moving from high to low concentration\" loses the mark, because it is the *water* potential that matters and the membrane must be named."
      }
    },
    {
      "id": "0610-3-2-cp2",
      "syllabus": [
        "0610/3.2.5"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "In an experiment, potato cylinders are placed in a range of sucrose concentrations and the percentage change in mass is plotted against concentration. Explain why the line crosses the zero line at one particular concentration, and state what that concentration tells you.",
      "markScheme": [
        {
          "text": "At that concentration the solution and the cell sap have the same water potential",
          "marks": 1
        },
        {
          "text": "so there is no net movement of water into or out of the cells, and the mass does not change",
          "marks": 1
        },
        {
          "text": "That concentration is therefore equal to the concentration of the cell sap inside the potato cells",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "第三个得分点是整个实验的意义所在。只解释质量为何不变，而不说明它让你测出了什么，只答了三分之二。",
        "en": "The third mark is the point of the whole experiment. Explaining why the mass does not change without saying what it lets you measure answers only two thirds of the question."
      }
    },
    {
      "id": "0610-3-2-cp3",
      "syllabus": [
        "0610/3.2.5"
      ],
      "tier": "core",
      "commandWord": "Suggest",
      "marks": 2,
      "stem": "The results are plotted as percentage change in mass rather than as change in mass in grams. Suggest why.",
      "markScheme": [
        {
          "text": "The cylinders were not all exactly the same mass at the start",
          "marks": 1
        },
        {
          "text": "so a percentage change allows a fair comparison between them",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这是实验设计的得分点，在 Paper 6 中反复出现。凡是要在起始大小不同的样品之间比较的测量，都必须做归一化处理。",
        "en": "This is an experimental-design mark, and it turns up in Paper 6 constantly. Any measurement compared between samples of different starting size has to be normalised."
      }
    },
    {
      "id": "0610-3-2-cp4",
      "syllabus": [
        "0610/3.2.6",
        "0610/3.2.8"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "A plant that has not been watered for several days wilts. Explain, in terms of osmosis and the cells, why this happens.",
      "markScheme": [
        {
          "text": "Water is lost from the cells by osmosis, because the soil solution has a lower water potential than the cell sap",
          "marks": 1
        },
        {
          "text": "The vacuole shrinks and the cells become flaccid",
          "marks": 1
        },
        {
          "text": "so the contents no longer press against the cell wall and the turgor pressure is lost",
          "marks": 1
        },
        {
          "text": "It is that pressure that supports a non-woody stem, so without it the plant droops",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要落在\"支撑\"上收尾。写\"细胞失水\"只是描述；得分点在于从失水到压力丧失、再到支撑丧失的这条链。",
        "en": "Finish on the support. \"The cells lose water\" describes it; the marks are for the chain from water loss to loss of pressure to loss of support."
      }
    },
    {
      "id": "0610-3-2-cp5",
      "syllabus": [
        "0610/3.2.3",
        "0610/3.2.9"
      ],
      "tier": "supplement",
      "commandWord": "Predict",
      "marks": 3,
      "stem": "A red blood cell and a plant cell are both placed in distilled water. Predict what happens to each, and explain the difference.",
      "markScheme": [
        {
          "text": "Water enters both cells by osmosis, because distilled water has a higher water potential than the cell contents",
          "marks": 1
        },
        {
          "text": "The plant cell becomes turgid: the cell wall resists the pressure and stops further water entering",
          "marks": 1
        },
        {
          "text": "The red blood cell has no cell wall, so it swells and bursts",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "细胞壁就是全部差别所在。从渗透的角度看两种细胞的行为相同；只不过其中一种能挺过来。",
        "en": "The cell wall is the whole difference. Both cells do the same thing osmotically; only one of them survives it."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "external",
        "label": {
          "zh": "圆柱外的蔗糖浓度",
          "en": "Sucrose outside the cylinder"
        },
        "min": 0,
        "max": 1,
        "step": 0.025,
        "defaultValue": 0.2,
        "unit": "mol/dm³"
      },
      {
        "key": "cellSap",
        "label": {
          "zh": "细胞液的浓度",
          "en": "Concentration of the cell sap"
        },
        "min": 0.05,
        "max": 0.8,
        "step": 0.05,
        "defaultValue": 0.3,
        "unit": "mol/dm³"
      },
      {
        "key": "minutes",
        "label": {
          "zh": "在溶液中的时间",
          "en": "Time in the solution"
        },
        "min": 0,
        "max": 60,
        "step": 5,
        "defaultValue": 60,
        "unit": "min"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "3-2-osmosis",
        "hint": {
          "en": "Find where the first line crosses zero, then change the cell sap concentration and watch the crossing follow it.",
          "zh": "找出第一条线穿过零点的位置，然后改变细胞液浓度，看那个交点如何随之移动。"
        },
        "params": [
          {
            "key": "external",
            "label": {
              "en": "Sucrose outside the cylinder",
              "zh": "圆柱外的蔗糖浓度"
            },
            "unit": "mol/dm³",
            "min": 0,
            "max": 1,
            "step": 0.025,
            "default": 0.2
          },
          {
            "key": "cellSap",
            "label": {
              "en": "Concentration of the cell sap",
              "zh": "细胞液的浓度"
            },
            "unit": "mol/dm³",
            "min": 0.05,
            "max": 0.8,
            "step": 0.05,
            "default": 0.3
          },
          {
            "key": "minutes",
            "label": {
              "en": "Time in the solution",
              "zh": "在溶液中的时间"
            },
            "unit": "min",
            "min": 0,
            "max": 60,
            "step": 5,
            "default": 60
          }
        ],
        "readouts": [
          {
            "key": "change",
            "label": {
              "en": "Change in mass so far",
              "zh": "目前的质量变化"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "final",
            "label": {
              "en": "Change once it settles",
              "zh": "最终稳定后的变化"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "difference",
            "label": {
              "en": "Concentration difference",
              "zh": "浓度差"
            },
            "unit": "mol/dm³",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "intercept",
            "label": {
              "en": "Where the line crosses zero",
              "zh": "直线穿过零点之处"
            },
            "unit": "mol/dm³",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Distilled water: gains mass",
              "zh": "蒸馏水：质量增加"
            },
            "params": {
              "external": 0,
              "cellSap": 0.3,
              "minutes": 60
            }
          },
          {
            "label": {
              "en": "Concentrated: loses mass",
              "zh": "浓溶液：质量减少"
            },
            "params": {
              "external": 0.8,
              "cellSap": 0.3,
              "minutes": 60
            }
          },
          {
            "label": {
              "en": "No change: the answer",
              "zh": "无变化：即答案"
            },
            "params": {
              "external": 0.3,
              "cellSap": 0.3,
              "minutes": 60
            }
          },
          {
            "label": {
              "en": "A more concentrated cell sap",
              "zh": "细胞液浓度更高时"
            },
            "params": {
              "external": 0.3,
              "cellSap": 0.55,
              "minutes": 60
            }
          },
          {
            "label": {
              "en": "Only ten minutes in",
              "zh": "仅浸泡十分钟"
            },
            "params": {
              "external": 0,
              "cellSap": 0.3,
              "minutes": 10
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
        "zh": "蒸馏水：质量增加",
        "en": "Distilled water: gains mass"
      },
      "params": {
        "external": 0,
        "cellSap": 0.3,
        "minutes": 60
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "浓溶液：质量减少",
        "en": "Concentrated: loses mass"
      },
      "params": {
        "external": 0.8,
        "cellSap": 0.3,
        "minutes": 60
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "无变化：即答案",
        "en": "No change: the answer"
      },
      "params": {
        "external": 0.3,
        "cellSap": 0.3,
        "minutes": 60
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "细胞液浓度更高时",
        "en": "A more concentrated cell sap"
      },
      "params": {
        "external": 0.3,
        "cellSap": 0.55,
        "minutes": 60
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "仅浸泡十分钟",
        "en": "Only ten minutes in"
      },
      "params": {
        "external": 0,
        "cellSap": 0.3,
        "minutes": 10
      }
    }
  ]
};
