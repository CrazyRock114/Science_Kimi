/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/12-3-chromatography
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/12-3-chromatography/narration';
import { equations } from '../../igcse-src/0620/12-3-chromatography/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/12-3-chromatography/kernel';

export const kp123Chromatography: KnowledgePoint = {
  "id": "igcse-0620-12-3-chromatography",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "分离、提纯与色谱法",
    "en": "Separation, purification and chromatography"
  },
  "summary": {
    "zh": "把层析跑得更久，每一个距离都会变。而没有一个 Rf 会变——这正是 Rf 才是值得记录的数字的原因。",
    "en": "Run the plate for longer and every distance changes. Not one Rf does — which is exactly why Rf is the number worth writing down."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/12.1.1",
      "0620/12.1.2",
      "0620/12.1.3",
      "0620/12.3.1",
      "0620/12.3.2",
      "0620/12.3.3",
      "0620/12.3.4",
      "0620/12.4.1",
      "0620/12.4.2",
      "0620/12.4.3"
    ]
  },
  "keywords": {
    "zh": [
      "饱和溶液",
      "比移值 (Rf)",
      "显色剂",
      "结晶"
    ],
    "en": [
      "saturated solution",
      "retention factor (Rf)",
      "locating agent",
      "crystallisation"
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
          "说出测量时间、温度、质量与体积的合适仪器。",
          "说明实验方法与仪器的优缺点。",
          "说明溶剂、溶质、溶液与饱和溶液。",
          "描述并解释分离与提纯的方法，并为给定的物质组合选择合适的技术。",
          "用熔点与沸点鉴定物质并评估其纯度。",
          "说明纸色谱如何分离可溶有色物质的混合物，并解读简单的色谱图。",
          "说明显色剂的用途，并写出与使用 Rf 的计算式。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "把层析跑得更久，每一个距离都会变。而没有一个 Rf 会变——这正是 Rf 才是值得记录的数字的原因。"
      },
      {
        "type": "formula",
        "latex": "R_f = \\dfrac{\\text{distance moved by the spot}}{\\text{distance moved by the solvent}}",
        "caption": "两个距离都从基线量起，斑点量到中心。这个比值不随溶剂跑多远而改变，这使它成为物质的性质而不是实验的性质。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "saturated solution（饱和溶液）：在该温度下已溶解了最多溶质的溶液。加热通常能再溶解更多；冷却则会析出晶体。",
          "retention factor (Rf)（比移值 (Rf)）：斑点移动距离 ÷ 溶剂移动距离，量到斑点中心。它是该物质在该溶剂中的性质，因此不随层析时间长短改变。",
          "locating agent（显色剂）：喷在晾干的色谱纸上使无色斑点显现的化学试剂。茚三酮能使氨基酸斑点变紫。",
          "crystallisation（结晶）：蒸发部分溶剂后让热溶液冷却析出晶体，从而回收可溶固体。它不同于蒸干，蒸干会把杂质一同留下。"
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
          "Name appropriate apparatus for measuring time, temperature, mass and volume.",
          "Suggest advantages and disadvantages of experimental methods and apparatus.",
          "Describe the terms solvent, solute, solution and saturated solution.",
          "Describe and explain methods of separation and purification, and suggest a suitable technique for a given pair of substances.",
          "Identify substances and assess their purity using melting and boiling points.",
          "Describe how paper chromatography separates mixtures of soluble coloured substances, and interpret simple chromatograms.",
          "Describe the use of a locating agent, and state and use the equation for Rf. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Run the plate for longer and every distance changes. Not one Rf does — which is exactly why Rf is the number worth writing down."
      },
      {
        "type": "formula",
        "latex": "R_f = \\dfrac{\\text{distance moved by the spot}}{\\text{distance moved by the solvent}}",
        "caption": "Both distances are measured from the baseline, and the spot is measured to its centre. The ratio is unchanged by how far the solvent ran, which is what makes it a property of the substance rather than of the experiment."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "saturated solution (饱和溶液): One that has dissolved as much solute as it can at that temperature. Warming it usually lets it dissolve more; cooling it drops crystals out.",
          "retention factor (Rf) (比移值 (Rf)): Distance moved by the spot ÷ distance moved by the solvent, measured to the centre of the spot. A property of the substance in that solvent, so it does not change with how long the plate is run.",
          "locating agent (显色剂): A chemical sprayed onto a dried chromatogram to make colourless spots visible. Ninhydrin turns amino acid spots purple.",
          "crystallisation (结晶): Recovering a soluble solid by evaporating some of the solvent and letting the hot solution cool, so crystals form. Not the same as evaporating to dryness, which leaves the impurities behind too."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-12-3-cp1",
      "syllabus": [
        "0620/12.3.4"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "On a chromatogram, the solvent front is 12.0 cm from the baseline and the centre of a spot is 4.8 cm from the baseline. Calculate the Rf value of the substance, and state why an Rf value is more useful than the distance the spot moved.",
      "markScheme": [
        {
          "text": "Rf = distance moved by spot / distance moved by solvent = 4.8 / 12.0",
          "marks": 1
        },
        {
          "text": "Rf = 0.40",
          "marks": 1
        },
        {
          "text": "The Rf value is the same whatever distance the solvent is allowed to run, so it identifies the substance and can be compared with values measured elsewhere, whereas a distance describes only that one chromatogram",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "Rf 没有单位——它是两个长度之比。写成 \"0.40 cm\" 会丢分。",
        "en": "An Rf has no units — it is a ratio of two lengths. Writing \"0.40 cm\" loses the mark."
      }
    },
    {
      "id": "0620-12-3-cp2",
      "syllabus": [
        "0620/12.3.1"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "In paper chromatography the baseline is drawn in pencil, and the level of the solvent in the tank is kept below the baseline. Explain both of these instructions.",
      "markScheme": [
        {
          "text": "Pencil is used because ink would dissolve in the solvent and travel up the paper with the substances being separated, ruining the chromatogram",
          "marks": 1
        },
        {
          "text": "The solvent level is below the baseline so that the spots are not washed off the paper into the solvent",
          "marks": 1
        },
        {
          "text": "The solvent instead rises up the paper past the spots, carrying the substances with it",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "铅笔芯是石墨，不溶——这就是全部理由。\"铅笔更容易看清\"不是答案。",
        "en": "Pencil is graphite, which is insoluble — that is the whole reason. \"Pencil is easier to see\" is not it."
      }
    },
    {
      "id": "0620-12-3-cp3",
      "syllabus": [
        "0620/12.3.2",
        "0620/12.3.3"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "A student runs a chromatogram of a mixture of amino acids alongside three known amino acids, but sees no spots at all. Describe what has gone wrong and how it is put right, and describe how the chromatogram would then be interpreted.",
      "markScheme": [
        {
          "text": "Amino acids are colourless, so the separated spots cannot be seen even though the separation has taken place",
          "marks": 1
        },
        {
          "text": "A locating agent such as ninhydrin is sprayed on the dried chromatogram, reacting with the spots to make them visible",
          "marks": 1
        },
        {
          "text": "A spot in the mixture at the same height, or with the same Rf, as one of the known amino acids shows that amino acid is present in the mixture",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "分离其实已经完成了。失败的只是\"看见\"这一步，写出这一点才能得到第一分。",
        "en": "The separation still happened. Nothing has failed except the seeing of it, and saying so is what earns the first mark."
      }
    },
    {
      "id": "0620-12-3-cp4",
      "syllabus": [
        "0620/12.4.1",
        "0620/12.4.2"
      ],
      "tier": "core",
      "commandWord": "Suggest",
      "marks": 3,
      "stem": "Suggest a suitable technique for separating each of these, giving a reason in each case: (i) sand from a mixture of sand and water, (ii) pure water from sea water, (iii) copper(II) sulfate crystals from copper(II) sulfate solution.",
      "markScheme": [
        {
          "text": "(i) Filtration, because sand is insoluble in water",
          "marks": 1
        },
        {
          "text": "(ii) Simple distillation, because the water boils off and is condensed while the dissolved salts are left behind",
          "marks": 1
        },
        {
          "text": "(iii) Crystallisation, because the copper(II) sulfate is soluble and forms crystals as the saturated solution cools",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "理由必须点明所利用的性质——可溶或不溶、沸点不同。写\"因为这样行得通\"得不到分。",
        "en": "The reason has to name the property being exploited — soluble or insoluble, different boiling points. \"Because it works\" earns nothing."
      }
    },
    {
      "id": "0620-12-3-cp5",
      "syllabus": [
        "0620/12.4.3"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A student measures the melting point of a sample of a substance and finds that it melts between 112 °C and 118 °C. The pure substance melts sharply at 121 °C. Explain what this tells the student about the sample.",
      "markScheme": [
        {
          "text": "The sample is impure, because a pure substance melts sharply at one temperature while an impure one melts over a range",
          "marks": 1
        },
        {
          "text": "The impurity has also lowered the melting point below that of the pure substance",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "杂质有两个不同的影响，各值一分：范围变宽，温度降低。",
        "en": "Two separate effects of an impurity, and both are worth a mark: the range widens and the temperature drops."
      }
    },
    {
      "id": "0620-12-3-cp6",
      "syllabus": [
        "0620/12.1.1",
        "0620/12.1.2"
      ],
      "tier": "core",
      "commandWord": "Suggest",
      "marks": 2,
      "stem": "A student needs to add exactly 25.0 cm³ of acid to a flask, and then to add alkali a little at a time until the colour changes. Suggest a suitable piece of apparatus for each, giving a reason.",
      "markScheme": [
        {
          "text": "A pipette for the acid, because it delivers one fixed volume accurately",
          "marks": 1
        },
        {
          "text": "A burette for the alkali, because it lets liquid be added a little at a time and the volume added can be read off",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "量筒对这里的两项工作都不够精确。题目要求你按用途区分这两种仪器。",
        "en": "A measuring cylinder is not accurate enough for either job here. The question is asking you to distinguish the two instruments by what each is for."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "solventDistance",
        "label": {
          "zh": "溶剂前沿移动的距离",
          "en": "Distance the solvent ran"
        },
        "min": 4,
        "max": 14,
        "step": 0.5,
        "defaultValue": 8,
        "unit": "cm"
      },
      {
        "key": "mixture",
        "label": {
          "zh": "未知混合物",
          "en": "Unknown mixture"
        },
        "min": 0,
        "max": 3,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "selected",
        "label": {
          "zh": "要核对的参照物",
          "en": "Reference to check"
        },
        "min": 0,
        "max": 3,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "chromatogram",
        "kernel": "12-3-chromatography",
        "hint": {
          "en": "Slide the solvent distance and watch the spots move. Then look at the numbers beside them — not one has changed.",
          "zh": "滑动溶剂前沿距离，看斑点如何移动。再看它们旁边的数字——没有一个变过。"
        },
        "params": [
          {
            "key": "solventDistance",
            "label": {
              "en": "Distance the solvent ran",
              "zh": "溶剂前沿移动的距离"
            },
            "unit": "cm",
            "min": 4,
            "max": 14,
            "step": 0.5,
            "default": 8
          },
          {
            "key": "mixture",
            "label": {
              "en": "Unknown mixture",
              "zh": "未知混合物"
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
                  "en": "Mixture 1",
                  "zh": "混合物 1"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Mixture 2",
                  "zh": "混合物 2"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Mixture 3",
                  "zh": "混合物 3"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Mixture 4",
                  "zh": "混合物 4"
                }
              }
            ]
          },
          {
            "key": "selected",
            "label": {
              "en": "Reference to check",
              "zh": "要核对的参照物"
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
                  "en": "dye A",
                  "zh": "染料 A"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "dye B",
                  "zh": "染料 B"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "dye C",
                  "zh": "染料 C"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "dye D",
                  "zh": "染料 D"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "rf",
            "label": {
              "en": "Rf of the selected dye",
              "zh": "所选染料的 Rf"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "spotDistance",
            "label": {
              "en": "Distance the spot moved",
              "zh": "斑点移动的距离"
            },
            "unit": "cm",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "solventDistance",
            "label": {
              "en": "Distance the solvent moved",
              "zh": "溶剂移动的距离"
            },
            "unit": "cm",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "spotsInMixture",
            "label": {
              "en": "Substances in the unknown",
              "zh": "未知样品中的物质数"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A short run",
              "zh": "较短的层析"
            },
            "params": {
              "solventDistance": 4,
              "mixture": 0,
              "selected": 0
            }
          },
          {
            "label": {
              "en": "The same plate, run twice as far",
              "zh": "同一张纸，跑两倍远"
            },
            "params": {
              "solventDistance": 8,
              "mixture": 0,
              "selected": 0
            }
          },
          {
            "label": {
              "en": "Run as far as the paper allows",
              "zh": "跑到纸允许的最远处"
            },
            "params": {
              "solventDistance": 14,
              "mixture": 0,
              "selected": 0
            }
          },
          {
            "label": {
              "en": "A mixture of three dyes",
              "zh": "三种染料的混合物"
            },
            "params": {
              "solventDistance": 8,
              "mixture": 2,
              "selected": 1
            }
          },
          {
            "label": {
              "en": "Checking for a dye that is absent",
              "zh": "核对一种并不存在的染料"
            },
            "params": {
              "solventDistance": 8,
              "mixture": 3,
              "selected": 0
            }
          },
          {
            "label": {
              "en": "A single pure substance",
              "zh": "单一纯物质"
            },
            "params": {
              "solventDistance": 8,
              "mixture": 3,
              "selected": 2
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
        "zh": "较短的层析",
        "en": "A short run"
      },
      "params": {
        "solventDistance": 4,
        "mixture": 0,
        "selected": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "同一张纸，跑两倍远",
        "en": "The same plate, run twice as far"
      },
      "params": {
        "solventDistance": 8,
        "mixture": 0,
        "selected": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "跑到纸允许的最远处",
        "en": "Run as far as the paper allows"
      },
      "params": {
        "solventDistance": 14,
        "mixture": 0,
        "selected": 0
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "三种染料的混合物",
        "en": "A mixture of three dyes"
      },
      "params": {
        "solventDistance": 8,
        "mixture": 2,
        "selected": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "核对一种并不存在的染料",
        "en": "Checking for a dye that is absent"
      },
      "params": {
        "solventDistance": 8,
        "mixture": 3,
        "selected": 0
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "单一纯物质",
        "en": "A single pure substance"
      },
      "params": {
        "solventDistance": 8,
        "mixture": 3,
        "selected": 2
      }
    }
  ]
};
