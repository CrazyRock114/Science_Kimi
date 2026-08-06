/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/9-3-alloys
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/9-3-alloys/narration';
import { equations } from '../../igcse-src/0620/9-3-alloys/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/9-3-alloys/kernel';

export const kp93Alloys: KnowledgePoint = {
  "id": "igcse-0620-9-3-alloys",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "合金",
    "en": "Alloys"
  },
  "summary": {
    "zh": "相同原子构成的层可以轻易相互滑动。塞进一个大小不同的原子，它们就卡住了——这就是合金更硬的全部原因。",
    "en": "Layers of identical atoms slide over each other easily. Put an atom of a different size in the way and they catch — which is the whole of why an alloy is harder."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/9.2.1",
      "0620/9.3.1",
      "0620/9.3.2",
      "0620/9.3.3",
      "0620/9.3.4",
      "0620/9.3.5"
    ]
  },
  "keywords": {
    "zh": [
      "合金",
      "有延展性",
      "原子层"
    ],
    "en": [
      "alloy",
      "malleable",
      "layers of atoms"
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
          "用物理性质说明金属的用途。",
          "把合金描述为金属与其他元素的混合物。",
          "说明合金可以比纯金属更硬更强。",
          "用性质说明合金的用途。",
          "由结构图识别合金。",
          "用结构解释合金为何更硬更强。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "合金是混合物"
      },
      {
        "type": "paragraph",
        "text": "注意什么*没有*发生。没有键断裂、没有新物质生成、没有发生反应。铜还是铜，锌还是锌——它们只是在原子尺度上混合在一起。"
      },
      {
        "type": "paragraph",
        "text": "所以合金是混合物，不是化合物。这就是它没有化学式、没有固定组成的原因——黄铜里锌多一点少一点，仍然是黄铜。"
      },
      {
        "type": "paragraph",
        "text": "这也是在图中识别合金的方法。纯金属是同样大小的圆排成规则的行。合金有两种大小的圆，而且行被那些\"异类\"挤得不齐。"
      },
      {
        "type": "heading",
        "text": "按用途选择合金"
      },
      {
        "type": "paragraph",
        "text": "一旦能让金属变硬，就可以按所需性质来选择。钢用于钢梁和工具，因为强度最重要。黄铜用于门把手和乐器，因为它既硬又耐腐蚀。"
      },
      {
        "type": "paragraph",
        "text": "不锈钢中加入了铬，铬原子比铁原子大。它既硬又不生锈——所以用于餐具、水槽和手术器械。而当你需要相反的性质时就用纯金属：铜导线故意做得柔软，以便绕过转角。"
      },
      {
        "type": "formula",
        "latex": "\\text{slip} = \\text{applied force} \\times \\text{how far the layers can move}",
        "caption": "同样的推力能让纯金属的层滑过整整一个原子，而合金的层几乎不动。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "alloy（合金）：金属与一种或多种其他元素的混合物。是混合物而非化合物——没有发生反应，也没有化学式。",
          "malleable（有延展性）：可以被锤打成形而不断裂，因为原子层之间能够相互滑动。",
          "layers of atoms（原子层）：金属原子排列成的规则行列。它们能否滑动，决定了金属是软还是硬。"
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
          "Describe the uses of metals in terms of their physical properties.",
          "Describe an alloy as a mixture of a metal with other elements.",
          "State that alloys can be harder and stronger than the pure metals.",
          "Describe the uses of alloys in terms of their properties.",
          "Identify alloys from diagrams of their structure.",
          "Explain in terms of structure why alloys are harder and stronger. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "An alloy is a mixture"
      },
      {
        "type": "paragraph",
        "text": "Notice what has not happened. No bonds broke, no new substance formed, no reaction took place. The copper is still copper and the zinc is still zinc — they are simply mixed at the atomic scale."
      },
      {
        "type": "paragraph",
        "text": "So an alloy is a mixture, not a compound. That is why it has no formula and no fixed composition — you can make brass with more zinc or less, and it is still brass."
      },
      {
        "type": "paragraph",
        "text": "And that is how you spot one in a diagram. A pure metal is circles of one size in regular rows. An alloy is circles of two sizes, and the rows are pushed out of line by the odd ones."
      },
      {
        "type": "heading",
        "text": "Choosing an alloy for a job"
      },
      {
        "type": "paragraph",
        "text": "Once you can make a metal harder, you choose the property you need. Steel for girders and tools, because strength is everything. Brass for door handles and instruments, because it is hard and resists corrosion."
      },
      {
        "type": "paragraph",
        "text": "Stainless steel adds chromium, whose atoms are larger than iron’s. Hard, and it does not rust — so cutlery, sinks and surgical instruments. And where you want the opposite, you use the pure metal: copper wiring is soft on purpose, so it bends round corners."
      },
      {
        "type": "formula",
        "latex": "\\text{slip} = \\text{applied force} \\times \\text{how far the layers can move}",
        "caption": "The same push moves a pure metal’s layers a whole atom along, and an alloy’s hardly at all."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "alloy (合金): A mixture of a metal with one or more other elements. A mixture, not a compound — no reaction has taken place and there is no formula.",
          "malleable (有延展性): Able to be hammered into shape without breaking, because layers of atoms can slide over one another.",
          "layers of atoms (原子层): The regular rows a metal’s atoms sit in. Whether these can slide decides whether the metal is soft or hard."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-9-3-cp1",
      "syllabus": [
        "0620/9.3.1"
      ],
      "tier": "core",
      "commandWord": "Define",
      "marks": 1,
      "stem": "Define the term alloy.",
      "markScheme": [
        {
          "text": "A mixture of a metal with one or more other elements",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "关键词是\"混合物\"。把合金说成化合物是错的——没有发生反应，也没有固定组成。",
        "en": "The word \"mixture\" is doing the work. Calling an alloy a compound is wrong — no reaction happens and there is no fixed composition."
      }
    },
    {
      "id": "0620-9-3-cp2",
      "syllabus": [
        "0620/9.3.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain, in terms of structure, why brass is harder than pure copper.",
      "markScheme": [
        {
          "text": "Brass contains zinc atoms, which are a different size from copper atoms",
          "marks": 1
        },
        {
          "text": "These distort the regular layers of copper atoms",
          "marks": 1
        },
        {
          "text": "so the layers can no longer slide over one another, making the alloy harder",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "三步都要写，最常被跳过的是中间那一步。\"含有锌所以更硬\"只写了原因和结果，中间的机理没有交代。",
        "en": "All three steps are needed, and the middle one is the one most often skipped. \"It contains zinc so it is harder\" states the input and the output with no mechanism between them."
      }
    },
    {
      "id": "0620-9-3-cp3",
      "syllabus": [
        "0620/9.3.4"
      ],
      "tier": "core",
      "commandWord": "Identify",
      "marks": 2,
      "stem": "Two diagrams show circles representing atoms. In diagram A all the circles are the same size and sit in regular rows. In diagram B there are circles of two sizes and the rows are irregular. Identify which shows an alloy and justify your choice.",
      "markScheme": [
        {
          "text": "Diagram B",
          "marks": 1
        },
        {
          "text": "because it contains atoms of two different sizes, so it is a mixture of two elements",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要找的是两种大小的圆，而不是仅仅\"排列不整齐\"。纯金属画得潦草仍然是纯金属。",
        "en": "Look for two sizes of circle, not for untidiness on its own. A pure metal drawn badly is still a pure metal."
      }
    },
    {
      "id": "0620-9-3-cp4",
      "syllabus": [
        "0620/9.2.1",
        "0620/9.3.3"
      ],
      "tier": "core",
      "commandWord": "Suggest",
      "marks": 2,
      "stem": "Electrical cables are made from pure copper, but bridges are made from steel rather than pure iron. Suggest a reason for each choice.",
      "markScheme": [
        {
          "text": "Copper is a good electrical conductor and is soft enough to bend, so cables can be routed",
          "marks": 1
        },
        {
          "text": "Steel is much stronger and harder than pure iron, so it can carry the load without deforming",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每个答案都要把性质与用途对应起来。只写\"铜导电\"不够——要说明电缆为什么需要柔软。",
        "en": "Each answer must match the property to the job. \"Copper conducts\" is not enough on its own — say why softness is wanted in a cable."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "mixture",
        "label": {
          "zh": "材料",
          "en": "Material"
        },
        "min": 0,
        "max": 3,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "force",
        "label": {
          "zh": "施加在上层的力",
          "en": "Force on the upper layers"
        },
        "min": 0,
        "max": 1,
        "step": 0.05,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "lattice",
        "kernel": "9-3-alloys",
        "hint": {
          "en": "Push the force slider to its maximum, then switch between the pure metal and the alloys with the force held there.",
          "zh": "把力的滑块推到最大，然后保持不变，在纯金属与各种合金之间切换。"
        },
        "params": [
          {
            "key": "mixture",
            "label": {
              "en": "Material",
              "zh": "材料"
            },
            "unit": "",
            "min": 0,
            "max": 3,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Pure copper",
                  "zh": "纯铜"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Brass",
                  "zh": "黄铜"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Steel",
                  "zh": "钢"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Stainless steel",
                  "zh": "不锈钢"
                }
              }
            ]
          },
          {
            "key": "force",
            "label": {
              "en": "Force on the upper layers",
              "zh": "施加在上层的力"
            },
            "unit": "",
            "min": 0,
            "max": 1,
            "step": 0.05,
            "default": 0
          }
        ],
        "readouts": [
          {
            "key": "layerSlip",
            "label": {
              "en": "Layers have slipped",
              "zh": "层已滑动"
            },
            "unit": "× spacing",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "maximumSlip",
            "label": {
              "en": "Most they could slip",
              "zh": "最多能滑动"
            },
            "unit": "× spacing",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "percentGuest",
            "label": {
              "en": "Of the atoms drawn",
              "zh": "占图中原子的比例"
            },
            "unit": "%",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "guestAtoms",
            "label": {
              "en": "Other-element atoms",
              "zh": "其他元素原子数"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Pure copper, pushed",
              "zh": "纯铜，施力"
            },
            "params": {
              "mixture": 0,
              "force": 1
            }
          },
          {
            "label": {
              "en": "Brass, same push",
              "zh": "黄铜，同样的力"
            },
            "params": {
              "mixture": 1,
              "force": 1
            }
          },
          {
            "label": {
              "en": "Steel: a smaller atom",
              "zh": "钢：更小的原子"
            },
            "params": {
              "mixture": 2,
              "force": 1
            }
          },
          {
            "label": {
              "en": "Stainless: a larger atom",
              "zh": "不锈钢：更大的原子"
            },
            "params": {
              "mixture": 3,
              "force": 1
            }
          },
          {
            "label": {
              "en": "No force applied",
              "zh": "不施力"
            },
            "params": {
              "mixture": 1,
              "force": 0
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
        "zh": "纯铜，施力",
        "en": "Pure copper, pushed"
      },
      "params": {
        "mixture": 0,
        "force": 1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "黄铜，同样的力",
        "en": "Brass, same push"
      },
      "params": {
        "mixture": 1,
        "force": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "钢：更小的原子",
        "en": "Steel: a smaller atom"
      },
      "params": {
        "mixture": 2,
        "force": 1
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "不锈钢：更大的原子",
        "en": "Stainless: a larger atom"
      },
      "params": {
        "mixture": 3,
        "force": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "不施力",
        "en": "No force applied"
      },
      "params": {
        "mixture": 1,
        "force": 0
      }
    }
  ]
};
