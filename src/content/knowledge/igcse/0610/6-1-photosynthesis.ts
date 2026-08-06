/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/6-1-photosynthesis
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/6-1-photosynthesis/narration';
import { equations } from '../../igcse-src/0610/6-1-photosynthesis/equations';
import kernel from '../../../../simulations/igcse-kernels/0610/6-1-photosynthesis/kernel';

export const kp61Photosynthesis: KnowledgePoint = {
  "id": "igcse-0610-6-1-photosynthesis",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "光合作用与限制因素",
    "en": "Photosynthesis and limiting factors"
  },
  "summary": {
    "zh": "当植物缺的是二氧化碳时，再多给光也毫无作用。限制因素就是决定上限的那一个。",
    "en": "Give a plant more light when carbon dioxide is what it is short of and nothing happens. A limiting factor is the one that sets the ceiling."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/6.1.1",
      "0610/6.1.2",
      "0610/6.1.3",
      "0610/6.1.4",
      "0610/6.1.5",
      "0610/6.1.6",
      "0610/6.1.7",
      "0610/6.1.8",
      "0610/6.1.9",
      "0610/6.1.10",
      "0610/6.1.11",
      "0610/6.2.1",
      "0610/6.2.2",
      "0610/6.2.3"
    ]
  },
  "keywords": {
    "zh": [
      "限制因素",
      "叶绿素",
      "栅栏组织",
      "气孔",
      "淀粉"
    ],
    "en": [
      "limiting factor",
      "chlorophyll",
      "palisade mesophyll",
      "stoma",
      "starch"
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
          "把光合作用描述为利用光能合成糖类。",
          "写出光合作用的文字表达式。",
          "说明叶绿素是叶绿体中转移光能的绿色色素。",
          "概述所合成糖类的利用与贮存。",
          "解释植物为何需要硝酸根离子和镁离子。",
          "探究叶绿素、光和二氧化碳的必要性，以及改变它们的影响。",
          "写出光合作用的化学方程式。（Extended）",
          "找出并解释光合作用的限制因素。（Extended）",
          "解释叶的结构如何使其适应光合作用。"
        ]
      },
      {
        "type": "heading",
        "text": "叶片就是为此而生的"
      },
      {
        "type": "paragraph",
        "text": "叶片的每一个特征，都是对这三种短缺之一的回应。宽而扁平：大表面积以捕获光照。薄：二氧化碳只需扩散很短距离就能到达任何需要它的细胞。"
      },
      {
        "type": "paragraph",
        "text": "内部，栅栏组织细胞位于上层，富含叶绿体并排列成柱状，因为光首先到达那里。下方的海绵组织充满气腔，二氧化碳可以自由移动。"
      },
      {
        "type": "paragraph",
        "text": "下表皮的气孔让二氧化碳进入，保卫细胞在缺水时把它们关闭。而叶脉网络由木质部输入水分、由韧皮部运走糖分。"
      },
      {
        "type": "formula",
        "latex": "\\text{carbon dioxide} + \\text{water} \\xrightarrow{\\text{light, chlorophyll}} \\text{glucose} + \\text{oxygen}",
        "caption": "光和叶绿素写在箭头上方而不是左边——两者都不被消耗，所以都不是反应物。"
      },
      {
        "type": "formula",
        "latex": "6\\,\\mathrm{CO_2} + 6\\,\\mathrm{H_2O} \\rightarrow \\mathrm{C_6H_{12}O_6} + 6\\,\\mathrm{O_2}",
        "caption": "配平后的方程式。六个碳进、六个碳出——葡萄糖中的每个碳原子都来自空气。"
      },
      {
        "type": "formula",
        "latex": "\\text{rate} = \\min(\\text{light}, \\mathrm{CO_2}) \\times f(\\text{temperature})",
        "caption": "两种原料不是相加——较少的那个说了算。温度是相乘的，因为它是条件而不是供应量。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "limiting factor（限制因素）：供应最短缺的因素，它决定速率的上限。增加其他任何因素都毫无作用。",
          "chlorophyll（叶绿素）：叶绿体中把光能转移到化学物质中的绿色色素，其中含有镁。",
          "palisade mesophyll（栅栏组织）：靠近叶片上表面的柱状细胞，富含叶绿体，因为光首先到达那里。",
          "stoma（气孔）：下表皮上的小孔，让二氧化碳进入，由一对保卫细胞控制开闭。",
          "starch（淀粉）：植物贮存所合成葡萄糖的形式。它不溶，因而不会打乱细胞的水分平衡。"
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
          "Describe photosynthesis as making carbohydrates using energy from light.",
          "State the word equation for photosynthesis.",
          "State that chlorophyll is a green pigment in chloroplasts that transfers light energy.",
          "Outline how the carbohydrates made are used and stored.",
          "Explain why plants need nitrate ions and magnesium ions.",
          "Investigate the need for chlorophyll, light and carbon dioxide, and the effect of varying them.",
          "State the balanced chemical equation for photosynthesis. (Extended)",
          "Identify and explain the limiting factors of photosynthesis. (Extended)",
          "Explain how the structure of a leaf adapts it for photosynthesis."
        ]
      },
      {
        "type": "heading",
        "text": "A leaf is built for this"
      },
      {
        "type": "paragraph",
        "text": "Every feature of a leaf is an answer to one of these three shortages. Broad and flat: a large surface area to catch light. Thin: carbon dioxide has a short distance to diffuse to any cell that needs it."
      },
      {
        "type": "paragraph",
        "text": "Inside, the palisade cells are at the top, packed with chloroplasts and lined up in a column, because that is where the light arrives first. Below them the spongy mesophyll is full of air spaces, so carbon dioxide can move about freely."
      },
      {
        "type": "paragraph",
        "text": "Stomata in the lower epidermis let that carbon dioxide in, with guard cells to close them when water is short. And a network of veins brings water from the xylem and takes the sugars away in the phloem."
      },
      {
        "type": "formula",
        "latex": "\\text{carbon dioxide} + \\text{water} \\xrightarrow{\\text{light, chlorophyll}} \\text{glucose} + \\text{oxygen}",
        "caption": "Light and chlorophyll go above the arrow, not on the left — neither is used up, so neither is a reactant."
      },
      {
        "type": "formula",
        "latex": "6\\,\\mathrm{CO_2} + 6\\,\\mathrm{H_2O} \\rightarrow \\mathrm{C_6H_{12}O_6} + 6\\,\\mathrm{O_2}",
        "caption": "The balanced equation. Six carbons in, six carbons out — every carbon atom in the glucose came from the air."
      },
      {
        "type": "formula",
        "latex": "\\text{rate} = \\min(\\text{light}, \\mathrm{CO_2}) \\times f(\\text{temperature})",
        "caption": "The two raw materials do not add up — the smaller one wins. Temperature multiplies, because it is a condition rather than a supply."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "limiting factor (限制因素): The factor in shortest supply, which sets the ceiling on the rate. Increasing anything else has no effect at all.",
          "chlorophyll (叶绿素): The green pigment in chloroplasts that transfers energy from light into chemicals. It contains magnesium.",
          "palisade mesophyll (栅栏组织): The column-shaped cells near the top of a leaf, packed with chloroplasts because that is where the light arrives first.",
          "stoma (气孔): A pore in the lower epidermis that lets carbon dioxide in, opened and closed by a pair of guard cells.",
          "starch (淀粉): How a plant stores the glucose it makes. Insoluble, so it does not upset the water balance of the cell."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-6-1-cp1",
      "syllabus": [
        "0610/6.1.11"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A graph of the rate of photosynthesis against light intensity rises and then becomes horizontal. Explain the shape of the graph.",
      "markScheme": [
        {
          "text": "At low light intensity, light is the limiting factor, so increasing it increases the rate",
          "marks": 1
        },
        {
          "text": "At the plateau, light is no longer limiting — some other factor is",
          "marks": 1
        },
        {
          "text": "That factor is carbon dioxide concentration or temperature, and the rate cannot rise until that one is increased",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要指出具体是哪个其他因素。\"别的东西成了限制因素\"只答了一半；得分点在于说出二氧化碳或温度，并指出提高*它*才有用。",
        "en": "Name a specific other factor. \"Something else is limiting\" is half an answer; the mark is for saying carbon dioxide or temperature and that raising *that* is what would help."
      }
    },
    {
      "id": "0610-6-1-cp2",
      "syllabus": [
        "0610/6.1.2"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 2,
      "stem": "State the word equation for photosynthesis, including the conditions required.",
      "markScheme": [
        {
          "text": "carbon dioxide + water → glucose + oxygen",
          "marks": 1
        },
        {
          "text": "in the presence of light and chlorophyll",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "光和叶绿素是条件，不是反应物——它们写在箭头上方。把它们写在左边、当作被消耗的物质，会丢掉第二分。",
        "en": "Light and chlorophyll are conditions, not reactants — they go above the arrow. Writing them on the left as though they were consumed loses the second mark."
      }
    },
    {
      "id": "0610-6-1-cp3",
      "syllabus": [
        "0610/6.1.6"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A plant grown without magnesium ions develops yellow leaves and grows poorly. Explain why.",
      "markScheme": [
        {
          "text": "Magnesium ions are needed to make chlorophyll",
          "marks": 1
        },
        {
          "text": "Without chlorophyll the plant cannot absorb light energy, so the rate of photosynthesis falls and less glucose is made for growth",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "因果链有两环：镁 → 叶绿素，叶绿素 → 光合作用。只写\"叶绿素需要镁\"解释了叶片发黄，却没有解释生长不良。",
        "en": "Two links in the chain: magnesium to chlorophyll, chlorophyll to photosynthesis. Stopping at \"it needs magnesium for chlorophyll\" leaves the yellow leaves explained but not the poor growth."
      }
    },
    {
      "id": "0610-6-1-cp4",
      "syllabus": [
        "0610/6.2.1",
        "0610/6.2.3"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain how the structure of a leaf adapts it for photosynthesis. Give three features with a reason for each.",
      "markScheme": [
        {
          "text": "Broad and flat, giving a large surface area to absorb light",
          "marks": 1
        },
        {
          "text": "Thin, so carbon dioxide has only a short distance to diffuse to the cells",
          "marks": 1
        },
        {
          "text": "Palisade cells near the upper surface packed with chloroplasts, where the light arrives first; or air spaces in the spongy mesophyll to let carbon dioxide move; or stomata to let it enter",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每个特征都要给出原因。只写\"叶片很薄\"不得分——得分点在于把\"薄\"与扩散距离联系起来。",
        "en": "Every feature needs a reason. \"Leaves are thin\" scores nothing on its own — the mark is for tying thinness to the diffusion distance."
      }
    },
    {
      "id": "0610-6-1-cp5",
      "syllabus": [
        "0610/6.1.5"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Plants convert much of the glucose they make into starch. Explain the advantage of storing it as starch rather than as glucose.",
      "markScheme": [
        {
          "text": "Starch is insoluble",
          "marks": 1
        },
        {
          "text": "so it does not affect the water potential of the cell and water does not enter by osmosis",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "原因与渗透有关，而不是\"节省空间\"。贮存大量可溶的葡萄糖会把水吸入细胞，甚至可能使其胀破。",
        "en": "The reason is osmotic, not about space. Storing a lot of soluble glucose would draw water into the cell and could burst it."
      }
    },
    {
      "id": "0610-6-1-cp6",
      "syllabus": [
        "0610/6.1.8",
        "0610/6.1.11"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 2,
      "stem": "A grower increases the carbon dioxide concentration in a greenhouse but sees no increase in crop yield. Suggest two reasons why.",
      "markScheme": [
        {
          "text": "Carbon dioxide was not the limiting factor — light intensity or temperature was",
          "marks": 1
        },
        {
          "text": "so increasing carbon dioxide alone cannot raise the rate until that factor is increased too",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这是平台论证的逆用。种植者把钱花在了不是限制因素的那一项上——正是图中平坦部分所预示的结果。",
        "en": "This is the plateau argument run backwards. The grower has spent money on the factor that was not limiting — exactly what the flat part of the graph predicts."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "light",
        "label": {
          "zh": "光照强度",
          "en": "Light intensity"
        },
        "min": 0,
        "max": 100,
        "step": 2,
        "defaultValue": 50,
        "unit": "%"
      },
      {
        "key": "carbonDioxide",
        "label": {
          "zh": "二氧化碳浓度",
          "en": "Carbon dioxide"
        },
        "min": 0,
        "max": 0.4,
        "step": 0.01,
        "defaultValue": 0.04,
        "unit": "%"
      },
      {
        "key": "temperature",
        "label": {
          "zh": "温度",
          "en": "Temperature"
        },
        "min": 0,
        "max": 50,
        "step": 1,
        "defaultValue": 30,
        "unit": "°C"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "6-1-photosynthesis",
        "hint": {
          "en": "Turn the light up to full with carbon dioxide low, then raise the carbon dioxide and watch the whole light curve lift.",
          "zh": "在二氧化碳很低时把光调到最大，然后提高二氧化碳，看整条光曲线如何抬升。"
        },
        "params": [
          {
            "key": "light",
            "label": {
              "en": "Light intensity",
              "zh": "光照强度"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 2,
            "default": 50
          },
          {
            "key": "carbonDioxide",
            "label": {
              "en": "Carbon dioxide",
              "zh": "二氧化碳浓度"
            },
            "unit": "%",
            "min": 0,
            "max": 0.4,
            "step": 0.01,
            "default": 0.04
          },
          {
            "key": "temperature",
            "label": {
              "en": "Temperature",
              "zh": "温度"
            },
            "unit": "°C",
            "min": 0,
            "max": 50,
            "step": 1,
            "default": 30
          }
        ],
        "readouts": [
          {
            "key": "rate",
            "label": {
              "en": "Rate of photosynthesis",
              "zh": "光合作用速率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "lightSupply",
            "label": {
              "en": "Light supply",
              "zh": "光照供应"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "carbonDioxideSupply",
            "label": {
              "en": "CO₂ supply",
              "zh": "二氧化碳供应"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "temperatureEffect",
            "label": {
              "en": "Temperature effect",
              "zh": "温度的影响"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Shade: light is limiting",
              "zh": "荫蔽：光是限制因素"
            },
            "params": {
              "light": 6,
              "carbonDioxide": 0.04,
              "temperature": 30
            }
          },
          {
            "label": {
              "en": "Bright day: CO₂ is limiting",
              "zh": "晴天：二氧化碳是限制因素"
            },
            "params": {
              "light": 100,
              "carbonDioxide": 0.04,
              "temperature": 30
            }
          },
          {
            "label": {
              "en": "Greenhouse: CO₂ enriched",
              "zh": "温室：富集二氧化碳"
            },
            "params": {
              "light": 100,
              "carbonDioxide": 0.2,
              "temperature": 30
            }
          },
          {
            "label": {
              "en": "Cold morning",
              "zh": "寒冷的早晨"
            },
            "params": {
              "light": 100,
              "carbonDioxide": 0.2,
              "temperature": 8
            }
          },
          {
            "label": {
              "en": "Too hot: enzymes fail",
              "zh": "过热：酶失效"
            },
            "params": {
              "light": 100,
              "carbonDioxide": 0.2,
              "temperature": 45
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
        "zh": "荫蔽：光是限制因素",
        "en": "Shade: light is limiting"
      },
      "params": {
        "light": 6,
        "carbonDioxide": 0.04,
        "temperature": 30
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "晴天：二氧化碳是限制因素",
        "en": "Bright day: CO₂ is limiting"
      },
      "params": {
        "light": 100,
        "carbonDioxide": 0.04,
        "temperature": 30
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "温室：富集二氧化碳",
        "en": "Greenhouse: CO₂ enriched"
      },
      "params": {
        "light": 100,
        "carbonDioxide": 0.2,
        "temperature": 30
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "寒冷的早晨",
        "en": "Cold morning"
      },
      "params": {
        "light": 100,
        "carbonDioxide": 0.2,
        "temperature": 8
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "过热：酶失效",
        "en": "Too hot: enzymes fail"
      },
      "params": {
        "light": 100,
        "carbonDioxide": 0.2,
        "temperature": 45
      }
    }
  ]
};
