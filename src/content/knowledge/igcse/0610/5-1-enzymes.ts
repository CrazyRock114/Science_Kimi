/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/5-1-enzymes
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/5-1-enzymes/narration';
import { equations } from '../../igcse-src/0610/5-1-enzymes/equations';
import kernel from '../../../../simulations/igcse-kernels/0610/5-1-enzymes/kernel';

export const kp51Enzymes: KnowledgePoint = {
  "id": "igcse-0610-5-1-enzymes",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "酶",
    "en": "Enzymes"
  },
  "summary": {
    "zh": "pH 曲线是钟形的，温度曲线不是——它缓慢上升、陡然坠落，因为两侧是完全不同的过程。",
    "en": "The pH curve is a bell. The temperature curve is not — it climbs gently and falls off a cliff, because the two sides are different processes."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/5.1.1",
      "0610/5.1.2",
      "0610/5.1.3",
      "0610/5.1.4",
      "0610/5.1.5",
      "0610/5.1.6",
      "0610/5.1.7",
      "0610/5.1.8",
      "0610/5.1.9"
    ]
  },
  "keywords": {
    "zh": [
      "催化剂",
      "活性位点",
      "底物",
      "变性",
      "最适条件"
    ],
    "en": [
      "catalyst",
      "active site",
      "substrate",
      "denatured",
      "optimum"
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
          "把催化剂描述为加快反应而自身不变的物质。",
          "把酶描述为作为生物催化剂的蛋白质。",
          "说明酶对维持生命为何必不可少。",
          "用活性位点及与之互补的底物描述酶的作用。",
          "探究并描述温度和 pH 对酶活性的影响。",
          "用酶—底物复合物解释酶的作用。（Extended）",
          "用形状互补与契合解释酶的专一性。（Extended）",
          "用动能与变性解释温度的影响。（Extended）",
          "用形状、契合与变性解释 pH 的影响。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "一种酶，一件事"
      },
      {
        "type": "paragraph",
        "text": "底物与活性位点的契合就像钥匙配锁。二者结合形成酶—底物复合物，反应发生，产物离开，而酶毫无变化，随时准备接待下一个底物。"
      },
      {
        "type": "paragraph",
        "text": "正因为必须精确契合，每种酶只作用于一种底物。淀粉酶分解淀粉，对蛋白质完全不起作用。这就是专一性，而它完全是形状带来的结果。"
      },
      {
        "type": "paragraph",
        "text": "记住这一点。本主题其余全部内容，讲的都是形状被破坏之后会发生什么。"
      },
      {
        "type": "heading",
        "text": "最适值不是普适常数"
      },
      {
        "type": "paragraph",
        "text": "很容易以为酶的最适条件就是 37 °C 和中性 pH。并非如此。酶的最适条件取决于生物所处的环境，以及它在体内工作的部位。"
      },
      {
        "type": "paragraph",
        "text": "这一种来自生活在近沸温泉中的细菌，最适温度是 70 °C——而淀粉酶在低于此 20 °C 时就已经被破坏了。"
      },
      {
        "type": "paragraph",
        "text": "化学原理相同、锁钥模型相同、变性机制相同。不同的只是数值，因为蛋白质折叠方式不同，以适应不同的环境。"
      },
      {
        "type": "formula",
        "latex": "\\text{enzyme} + \\text{substrate} \\rightarrow \\text{enzyme–substrate complex}",
        "caption": "二者像钥匙配锁一样契合。反应发生，产物离开，而酶毫无变化。"
      },
      {
        "type": "formula",
        "latex": "\\text{rate} \\approx 2 \\times \\text{ for each } 10\\,\\degree\\text{C, below the optimum}",
        "caption": "温度越高，粒子碰撞越频繁、越剧烈。最适温度以下只有这一个机制在起作用。"
      },
      {
        "type": "formula",
        "latex": "\\text{above the optimum: shape lost} \\Rightarrow \\text{no fit}",
        "caption": "这是完全不同的过程，所以曲线并不对称——也因此冷却后活性不会恢复。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "catalyst（催化剂）：能加快反应速率而自身不发生改变的物质，所以一个分子可以反复起作用。",
          "active site（活性位点）：酶上形状与底物互补的凹陷。形状一旦改变，酶就停止工作。",
          "substrate（底物）：酶所作用的分子。只有与活性位点契合的底物才能在那里反应。",
          "denatured（变性）：活性位点失去了原有形状，底物不再契合。变性在冷却后不可恢复。",
          "optimum（最适条件）：酶活性最高时的温度或 pH。它反映生物所处的环境，而不是一个普适数值。"
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
          "Describe a catalyst as speeding up a reaction without being changed by it.",
          "Describe enzymes as proteins acting as biological catalysts.",
          "Describe why enzymes are essential to sustain life.",
          "Describe enzyme action using the active site and its complementary substrate.",
          "Investigate and describe the effect of temperature and pH on enzyme activity.",
          "Explain enzyme action using the enzyme–substrate complex. (Extended)",
          "Explain enzyme specificity in terms of complementary shape and fit. (Extended)",
          "Explain the effect of temperature using kinetic energy and denaturation. (Extended)",
          "Explain the effect of pH in terms of shape, fit and denaturation. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "One enzyme, one job"
      },
      {
        "type": "paragraph",
        "text": "The substrate fits the active site the way a key fits a lock. They come together as an enzyme–substrate complex, the reaction happens, the products leave, and the enzyme is unchanged and ready for the next one."
      },
      {
        "type": "paragraph",
        "text": "And because the fit has to be exact, each enzyme works on one substrate and no other. Amylase breaks down starch and will not touch protein. That is what specificity means, and it is entirely a consequence of shape."
      },
      {
        "type": "paragraph",
        "text": "Keep hold of that. Everything else in this topic is about what happens when the shape is disturbed."
      },
      {
        "type": "heading",
        "text": "Optimum is not a universal number"
      },
      {
        "type": "paragraph",
        "text": "It is easy to come away thinking enzymes optimise at thirty-seven degrees and neutral pH. They do not. They optimise wherever the organism lives and wherever in it they work."
      },
      {
        "type": "paragraph",
        "text": "This one comes from bacteria living in a hot spring, near boiling. Its optimum is seventy degrees — a temperature that would have destroyed amylase twenty degrees ago."
      },
      {
        "type": "paragraph",
        "text": "Same chemistry, same lock-and-key, same denaturation. Only the number differs, because the protein folded differently to suit different conditions."
      },
      {
        "type": "formula",
        "latex": "\\text{enzyme} + \\text{substrate} \\rightarrow \\text{enzyme–substrate complex}",
        "caption": "They fit together like a key in a lock. The reaction happens, the products leave, and the enzyme is unchanged."
      },
      {
        "type": "formula",
        "latex": "\\text{rate} \\approx 2 \\times \\text{ for each } 10\\,\\degree\\text{C, below the optimum}",
        "caption": "Warmer particles collide more often and harder. This is the only mechanism acting below the optimum."
      },
      {
        "type": "formula",
        "latex": "\\text{above the optimum: shape lost} \\Rightarrow \\text{no fit}",
        "caption": "A different process entirely, which is why the curve is not symmetric — and why cooling it down does not bring the activity back."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "catalyst (催化剂): A substance that increases the rate of a reaction without being changed by it, so one molecule works over and over.",
          "active site (活性位点): The pocket in an enzyme whose shape is complementary to its substrate. Change the shape and the enzyme stops working.",
          "substrate (底物): The molecule an enzyme acts on. Only a substrate that fits the active site can react there.",
          "denatured (变性): The active site has lost its shape, so the substrate no longer fits. Denaturation does not reverse on cooling.",
          "optimum (最适条件): The temperature or pH at which an enzyme works fastest. It reflects where the organism lives, not a universal number."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-5-1-cp1",
      "syllabus": [
        "0610/5.1.4",
        "0610/5.1.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain why amylase breaks down starch but has no effect on protein.",
      "markScheme": [
        {
          "text": "The active site of amylase has a specific shape",
          "marks": 1
        },
        {
          "text": "which is complementary to starch, so starch fits and forms an enzyme–substrate complex",
          "marks": 1
        },
        {
          "text": "Protein has a different shape and does not fit the active site",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要写\"互补\"，而不只是\"形状相同\"——底物是嵌入活性位点，而不是与之相同。另外，除了写什么能契合，也要写什么不能。",
        "en": "Say \"complementary\", not just \"the same shape\" — the substrate fits into the site, it does not match it. And name what does *not* fit as well as what does."
      }
    },
    {
      "id": "0610-5-1-cp2",
      "syllabus": [
        "0610/5.1.8"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "A student measures the rate of an enzyme reaction from 10 °C to 60 °C. Explain the shape of the graph they obtain.",
      "markScheme": [
        {
          "text": "The rate increases up to the optimum temperature",
          "marks": 1
        },
        {
          "text": "because molecules have more kinetic energy, so there are more frequent successful collisions between enzyme and substrate",
          "marks": 1
        },
        {
          "text": "Above the optimum the rate falls sharply",
          "marks": 1
        },
        {
          "text": "because the enzyme is denatured — the active site changes shape and the substrate no longer fits",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两半曲线，两个不同的原因。写\"温暖时酶工作得更好、太热时更差\"只是描述图形，两侧都没有解释，得不到分。",
        "en": "Two halves, two different reasons. Writing \"the enzyme works better when warm and worse when hot\" describes the graph without explaining either side, and scores nothing."
      }
    },
    {
      "id": "0610-5-1-cp3",
      "syllabus": [
        "0610/5.1.9"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Pepsin works best at pH 2. Explain why it has almost no activity at pH 7.",
      "markScheme": [
        {
          "text": "pH 7 is far from its optimum, so the active site changes shape and is denatured",
          "marks": 1
        },
        {
          "text": "The substrate no longer fits the active site, so no enzyme–substrate complexes form",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "最适 pH 两侧的原因是一样的——过碱和过酸一样会破坏形状。不要写成 pH 7\"酸度不够以致反应无法进行\"。",
        "en": "The reason is the same on either side of the optimum — too alkaline damages the shape just as too acidic does. Do not write that pH 7 is \"not acidic enough for the reaction\"."
      }
    },
    {
      "id": "0610-5-1-cp4",
      "syllabus": [
        "0610/5.1.1",
        "0610/5.1.2"
      ],
      "tier": "core",
      "commandWord": "Define",
      "marks": 2,
      "stem": "Define the term enzyme.",
      "markScheme": [
        {
          "text": "A protein",
          "marks": 1
        },
        {
          "text": "that acts as a biological catalyst, speeding up a reaction without being changed",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"蛋白质\"本身就是一分，而且最常被漏掉。只写\"生物催化剂\"只能得一半分。",
        "en": "\"Protein\" is a mark on its own and is the one most often left out. An answer that says only \"a biological catalyst\" gets half of this."
      }
    },
    {
      "id": "0610-5-1-cp5",
      "syllabus": [
        "0610/5.1.5"
      ],
      "tier": "core",
      "commandWord": "Predict",
      "marks": 2,
      "stem": "An enzyme from a bacterium living in a hot spring has an optimum temperature of 70 °C. Predict its activity at 37 °C and at 90 °C, and give a reason for each.",
      "markScheme": [
        {
          "text": "At 37 °C it works, but slowly — the molecules have less kinetic energy than at the optimum",
          "marks": 1
        },
        {
          "text": "At 90 °C it has little or no activity, because it is above the optimum and has been denatured",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "低于最适温度时酶只是慢，但结构完好；高于最适温度则被破坏。两个温度都写\"不工作\"完全忽略了这个区别。",
        "en": "Below the optimum an enzyme is slow but intact; above it, it is destroyed. Saying \"it does not work\" for both temperatures misses that difference entirely."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "enzyme",
        "label": {
          "zh": "酶",
          "en": "Enzyme"
        },
        "min": 0,
        "max": 3,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "temperature",
        "label": {
          "zh": "温度",
          "en": "Temperature"
        },
        "min": 0,
        "max": 90,
        "step": 1,
        "defaultValue": 37,
        "unit": "°C"
      },
      {
        "key": "ph",
        "label": {
          "zh": "pH",
          "en": "pH"
        },
        "min": 0,
        "max": 14,
        "step": 0.5,
        "defaultValue": 7,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "5-1-enzymes",
        "hint": {
          "en": "Set the pH away from the optimum and watch the whole temperature curve shrink — the two factors multiply.",
          "zh": "把 pH 调离最适值，观察整条温度曲线如何缩小——两个因素是相乘的。"
        },
        "params": [
          {
            "key": "enzyme",
            "label": {
              "en": "Enzyme",
              "zh": "酶"
            },
            "unit": "",
            "min": 0,
            "max": 3,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Pepsin (stomach)",
                  "zh": "胃蛋白酶（胃）"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Amylase (mouth)",
                  "zh": "淀粉酶（口腔）"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Lipase (small intestine)",
                  "zh": "脂肪酶（小肠）"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "A hot-spring enzyme",
                  "zh": "温泉中的酶"
                }
              }
            ]
          },
          {
            "key": "temperature",
            "label": {
              "en": "Temperature",
              "zh": "温度"
            },
            "unit": "°C",
            "min": 0,
            "max": 90,
            "step": 1,
            "default": 37
          },
          {
            "key": "ph",
            "label": {
              "en": "pH",
              "zh": "pH"
            },
            "unit": "",
            "min": 0,
            "max": 14,
            "step": 0.5,
            "default": 7
          }
        ],
        "readouts": [
          {
            "key": "activity",
            "label": {
              "en": "Activity now",
              "zh": "当前活性"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "optimumTemperature",
            "label": {
              "en": "Optimum temperature",
              "zh": "最适温度"
            },
            "unit": "°C",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "optimumPh",
            "label": {
              "en": "Optimum pH",
              "zh": "最适 pH"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "denatured",
            "label": {
              "en": "Denatured? (1 = yes)",
              "zh": "是否变性？（1 = 是）"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Amylase at its best",
              "zh": "淀粉酶的最佳条件"
            },
            "params": {
              "enzyme": 1,
              "temperature": 37,
              "ph": 7
            }
          },
          {
            "label": {
              "en": "Boil it: denatured",
              "zh": "加热至变性"
            },
            "params": {
              "enzyme": 1,
              "temperature": 60,
              "ph": 7
            }
          },
          {
            "label": {
              "en": "Pepsin in stomach acid",
              "zh": "胃蛋白酶在胃酸中"
            },
            "params": {
              "enzyme": 0,
              "temperature": 37,
              "ph": 2
            }
          },
          {
            "label": {
              "en": "Pepsin at neutral: stops",
              "zh": "胃蛋白酶在中性：停止"
            },
            "params": {
              "enzyme": 0,
              "temperature": 37,
              "ph": 7
            }
          },
          {
            "label": {
              "en": "Amylase swallowed",
              "zh": "淀粉酶被吞下"
            },
            "params": {
              "enzyme": 1,
              "temperature": 37,
              "ph": 2
            }
          },
          {
            "label": {
              "en": "A hot-spring enzyme at 70 °C",
              "zh": "温泉中的酶在 70 °C"
            },
            "params": {
              "enzyme": 3,
              "temperature": 70,
              "ph": 7
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
        "zh": "淀粉酶的最佳条件",
        "en": "Amylase at its best"
      },
      "params": {
        "enzyme": 1,
        "temperature": 37,
        "ph": 7
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "加热至变性",
        "en": "Boil it: denatured"
      },
      "params": {
        "enzyme": 1,
        "temperature": 60,
        "ph": 7
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "胃蛋白酶在胃酸中",
        "en": "Pepsin in stomach acid"
      },
      "params": {
        "enzyme": 0,
        "temperature": 37,
        "ph": 2
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "胃蛋白酶在中性：停止",
        "en": "Pepsin at neutral: stops"
      },
      "params": {
        "enzyme": 0,
        "temperature": 37,
        "ph": 7
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "淀粉酶被吞下",
        "en": "Amylase swallowed"
      },
      "params": {
        "enzyme": 1,
        "temperature": 37,
        "ph": 2
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "温泉中的酶在 70 °C",
        "en": "A hot-spring enzyme at 70 °C"
      },
      "params": {
        "enzyme": 3,
        "temperature": 70,
        "ph": 7
      }
    }
  ]
};
