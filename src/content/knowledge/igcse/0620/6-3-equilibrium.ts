/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/6-3-equilibrium
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/6-3-equilibrium/narration';
import { equations } from '../../igcse-src/0620/6-3-equilibrium/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/6-3-equilibrium/kernel';

export const kp63Equilibrium: KnowledgePoint = {
  "id": "igcse-0620-6-3-equilibrium",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "可逆反应、平衡与工业生产",
    "en": "Reversible reactions, equilibrium and industry"
  },
  "summary": {
    "zh": "给哈伯反应器降温能让产率翻三倍。没有工厂这么做——图上显示的是化学想要的，而不这么做的理由不在任何一条坐标轴上。",
    "en": "Cooling the Haber reactor would triple the yield. No plant does it — the graph shows what chemistry wants, and the reason not to is on neither axis."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/6.1.1",
      "0620/6.3.1",
      "0620/6.3.2",
      "0620/6.3.3",
      "0620/6.3.4",
      "0620/6.3.5",
      "0620/6.3.6"
    ]
  },
  "keywords": {
    "zh": [
      "可逆反应",
      "动态平衡",
      "封闭体系",
      "哈伯法"
    ],
    "en": [
      "reversible reaction",
      "dynamic equilibrium",
      "closed system",
      "Haber process"
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
          "识别物理变化与化学变化，并描述二者的区别。",
          "说明有些反应是可逆的（用 ⇌ 表示），并描述改变条件如何改变反应方向。",
          "说明封闭体系中平衡的特征。（Extended）",
          "预测并解释温度、压强与催化剂对平衡位置的影响。（Extended）",
          "写出哈伯法的方程式与条件。（Extended）",
          "写出接触法的方程式与条件。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "给哈伯反应器降温能让产率翻三倍。没有工厂这么做——图上显示的是化学想要的，而不这么做的理由不在任何一条坐标轴上。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{N_2(g)} + 3\\mathrm{H_2(g)} \\rightleftharpoons 2\\mathrm{NH_3(g)}",
        "caption": "哈伯法。正反应放热，且 4 个气体分子变成 2 个——因此降温与加压都推动它向氨的方向进行。"
      },
      {
        "type": "formula",
        "latex": "2\\mathrm{SO_2(g)} + \\mathrm{O_2(g)} \\rightleftharpoons 2\\mathrm{SO_3(g)}",
        "caption": "接触法的关键一步，用五氧化二钒催化剂，约 450 °C——但只需 2 atm，因为不加压产率就已约 95%。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "reversible reaction（可逆反应）：能向两个方向进行的反应，用 ⇌ 表示。在相同条件下生成物能反应重新生成反应物。",
          "dynamic equilibrium（动态平衡）：封闭体系中正反应与逆反应速率相等的状态，此时各物质浓度保持恒定，而两个反应仍在进行。",
          "closed system（封闭体系）：没有物质进出的体系。只有在封闭体系中才能达到平衡——若生成物逸出，逆反应就缺乏原料。",
          "Haber process（哈伯法）：合成氨的工业方法：N₂ + 3H₂ ⇌ 2NH₃，用铁催化剂，约 450 °C、200 atm。"
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
          "Identify physical and chemical changes and describe the differences between them.",
          "State that some reactions are reversible, shown by the symbol ⇌, and describe how changing the conditions changes the direction.",
          "State the characteristics of equilibrium in a closed system. (Extended)",
          "Predict and explain how temperature, pressure and a catalyst affect the position of equilibrium. (Extended)",
          "State the equation and conditions for the Haber process. (Extended)",
          "State the equation and conditions for the Contact process. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Cooling the Haber reactor would triple the yield. No plant does it — the graph shows what chemistry wants, and the reason not to is on neither axis."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{N_2(g)} + 3\\mathrm{H_2(g)} \\rightleftharpoons 2\\mathrm{NH_3(g)}",
        "caption": "The Haber process. Exothermic forwards, and four molecules of gas becoming two — which is why cooling and squeezing both push it towards ammonia."
      },
      {
        "type": "formula",
        "latex": "2\\mathrm{SO_2(g)} + \\mathrm{O_2(g)} \\rightleftharpoons 2\\mathrm{SO_3(g)}",
        "caption": "The key step of the Contact process, with a vanadium(V) oxide catalyst at about 450 °C — but only 2 atm, because the yield is already about 95% without squeezing."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "reversible reaction (可逆反应): One that goes in both directions, written with ⇌. The products can react to re-form the reactants under the same conditions.",
          "dynamic equilibrium (动态平衡): The state in a closed system where the forward and backward reactions happen at equal rates, so the concentrations stay constant while both reactions continue.",
          "closed system (封闭体系): One where nothing can enter or leave. Equilibrium can only be reached in a closed system — if a product escapes, the backward reaction is starved.",
          "Haber process (哈伯法): The manufacture of ammonia: N₂ + 3H₂ ⇌ 2NH₃, with an iron catalyst at about 450 °C and 200 atm."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-6-3-cp1",
      "syllabus": [
        "0620/6.3.3"
      ],
      "tier": "supplement",
      "commandWord": "State",
      "marks": 3,
      "stem": "State three characteristics of a reaction that has reached equilibrium in a closed system.",
      "markScheme": [
        {
          "text": "The rate of the forward reaction equals the rate of the backward reaction",
          "marks": 1
        },
        {
          "text": "The concentrations of reactants and products remain constant",
          "marks": 1
        },
        {
          "text": "Both reactions are still taking place — the equilibrium is dynamic, not a reaction that has stopped",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"反应停止了\"这个答案会丢掉第三分。什么也没有停止；只是两个方向达到了相同的速率。",
        "en": "\"The reaction has stopped\" is the answer that loses the third mark. Nothing has stopped; the two directions have simply reached the same speed."
      }
    },
    {
      "id": "0620-6-3-cp2",
      "syllabus": [
        "0620/6.3.4",
        "0620/6.3.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "In the Haber process, N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the forward reaction is exothermic. Explain the effect on the equilibrium yield of ammonia of (i) increasing the temperature and (ii) increasing the pressure.",
      "markScheme": [
        {
          "text": "(i) Increasing the temperature decreases the yield of ammonia",
          "marks": 1
        },
        {
          "text": "(i) because the equilibrium shifts in the direction that absorbs heat, which is the backward, endothermic direction",
          "marks": 1
        },
        {
          "text": "(ii) Increasing the pressure increases the yield of ammonia",
          "marks": 1
        },
        {
          "text": "(ii) because there are four molecules of gas on the left and only two on the right, so the equilibrium shifts towards the side with fewer gas molecules",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每个方向都要给出理由，而压强的理由必须数气体分子。若把所有物质都数上而不只数气体，一旦涉及固体或液体就会得出错误结论。",
        "en": "Each direction needs its reason, and the pressure reason must count the gas molecules. Counting all species rather than only the gases gives the wrong answer whenever a solid or liquid is involved."
      }
    },
    {
      "id": "0620-6-3-cp3",
      "syllabus": [
        "0620/6.3.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "The equilibrium yield of ammonia is much higher at 250 °C than at 450 °C, yet industrial plants operate at about 450 °C. Explain why.",
      "markScheme": [
        {
          "text": "At 250 °C the rate of reaction is very slow, so equilibrium would take an impractically long time to reach",
          "marks": 1
        },
        {
          "text": "and the iron catalyst is much less effective at low temperatures",
          "marks": 1
        },
        {
          "text": "450 °C is a compromise: a lower yield, but reached quickly enough to produce a worthwhile amount of ammonia per hour, and the unreacted gases are recycled",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "题目要的正是\"折中\"这个词。达到得太慢的高产率，每天生产的氨反而少于快速达到的低产率。",
        "en": "The word \"compromise\" is what the question is after. A high yield reached too slowly produces less ammonia per day than a low yield reached quickly."
      }
    },
    {
      "id": "0620-6-3-cp4",
      "syllabus": [
        "0620/6.3.4"
      ],
      "tier": "supplement",
      "commandWord": "Predict",
      "marks": 2,
      "stem": "An iron catalyst is added to a mixture of nitrogen and hydrogen at equilibrium. Predict the effect on the position of the equilibrium and on the time taken to reach it, and justify your answer.",
      "markScheme": [
        {
          "text": "The position of the equilibrium is unchanged, so the yield is unchanged",
          "marks": 1
        },
        {
          "text": "because the catalyst speeds up the forward and backward reactions equally; equilibrium is simply reached sooner",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "催化剂改变的是\"什么时候\"，绝不是\"多少\"。说它提高产率是本主题最常见的错误答案。",
        "en": "A catalyst changes when, never how much. Saying it increases the yield is the most common wrong answer in this topic."
      }
    },
    {
      "id": "0620-6-3-cp5",
      "syllabus": [
        "0620/6.3.6"
      ],
      "tier": "supplement",
      "commandWord": "State",
      "marks": 3,
      "stem": "State the equation for the key step of the Contact process and the conditions used, and suggest why a much lower pressure is used than in the Haber process.",
      "markScheme": [
        {
          "text": "2SO₂(g) + O₂(g) ⇌ 2SO₃(g)",
          "marks": 1
        },
        {
          "text": "A vanadium(V) oxide catalyst, at about 450 °C and about 2 atm",
          "marks": 1
        },
        {
          "text": "The yield is already about 95% at low pressure, so there is very little extra product to gain and the cost of high-pressure equipment could not be justified",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两个工艺中化学给出的结论相同——气体分子数减少，所以加压有利。工业决策不同，是因为这里几乎没有提升空间。",
        "en": "The chemistry says the same thing in both processes — fewer gas molecules, so pressure helps. The industrial decision differs because there is almost nothing left to gain here."
      }
    },
    {
      "id": "0620-6-3-cp6",
      "syllabus": [
        "0620/6.1.1",
        "0620/6.3.1"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Blue hydrated copper(II) sulfate crystals turn white when heated, and the white solid turns blue again when water is added. Describe what this shows about the reaction, and describe one difference between this change and the melting of ice.",
      "markScheme": [
        {
          "text": "The reaction is reversible: heating drives the water off and adding water re-forms the hydrated compound",
          "marks": 1
        },
        {
          "text": "so it is written with the ⇌ symbol rather than a single arrow",
          "marks": 1
        },
        {
          "text": "This is a chemical change because a new substance is formed — the colour change and the heat released on adding water show this — whereas melting ice is a physical change producing no new substance",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "可逆并不等于物理变化。这个反应容易逆转，但仍是化学变化，因为白色固体与蓝色固体是不同的物质。",
        "en": "Reversible does not mean physical. This reaction is easily reversed and is still a chemical change, because the white and blue solids are different substances."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "temperature",
        "label": {
          "zh": "温度",
          "en": "Temperature"
        },
        "min": 200,
        "max": 600,
        "step": 10,
        "defaultValue": 450,
        "unit": "°C"
      },
      {
        "key": "pressure",
        "label": {
          "zh": "压强",
          "en": "Pressure"
        },
        "min": 10,
        "max": 400,
        "step": 10,
        "defaultValue": 200,
        "unit": "atm"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "6-3-equilibrium",
        "hint": {
          "en": "Cool the reactor and watch the yield climb. Then read the note — the reason no plant does it is not on either graph.",
          "zh": "给反应器降温，看产率上升。然后读说明——没有工厂这么做的理由，不在任何一幅图上。"
        },
        "params": [
          {
            "key": "temperature",
            "label": {
              "en": "Temperature",
              "zh": "温度"
            },
            "unit": "°C",
            "min": 200,
            "max": 600,
            "step": 10,
            "default": 450
          },
          {
            "key": "pressure",
            "label": {
              "en": "Pressure",
              "zh": "压强"
            },
            "unit": "atm",
            "min": 10,
            "max": 400,
            "step": 10,
            "default": 200
          }
        ],
        "readouts": [
          {
            "key": "yieldHere",
            "label": {
              "en": "Yield of ammonia",
              "zh": "氨的产率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "yieldIndustrial",
            "label": {
              "en": "Yield at 450 °C and 200 atm",
              "zh": "450 °C、200 atm 下的产率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "temperature",
            "label": {
              "en": "Temperature",
              "zh": "温度"
            },
            "unit": "°C",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "pressure",
            "label": {
              "en": "Pressure",
              "zh": "压强"
            },
            "unit": "atm",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "What a real plant uses",
              "zh": "真实工厂采用的条件"
            },
            "params": {
              "temperature": 450,
              "pressure": 200
            }
          },
          {
            "label": {
              "en": "Cold — a wonderful yield",
              "zh": "低温——极好的产率"
            },
            "params": {
              "temperature": 250,
              "pressure": 200
            }
          },
          {
            "label": {
              "en": "Hot — fast but hardly any product",
              "zh": "高温——快但几乎没有产物"
            },
            "params": {
              "temperature": 600,
              "pressure": 200
            }
          },
          {
            "label": {
              "en": "Squeezed to 400 atm",
              "zh": "加压到 400 atm"
            },
            "params": {
              "temperature": 450,
              "pressure": 400
            }
          },
          {
            "label": {
              "en": "Almost no pressure",
              "zh": "几乎不加压"
            },
            "params": {
              "temperature": 450,
              "pressure": 10
            }
          },
          {
            "label": {
              "en": "Both pushed to the limit",
              "zh": "两个条件都推到极限"
            },
            "params": {
              "temperature": 200,
              "pressure": 400
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
        "zh": "真实工厂采用的条件",
        "en": "What a real plant uses"
      },
      "params": {
        "temperature": 450,
        "pressure": 200
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "低温——极好的产率",
        "en": "Cold — a wonderful yield"
      },
      "params": {
        "temperature": 250,
        "pressure": 200
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "高温——快但几乎没有产物",
        "en": "Hot — fast but hardly any product"
      },
      "params": {
        "temperature": 600,
        "pressure": 200
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "加压到 400 atm",
        "en": "Squeezed to 400 atm"
      },
      "params": {
        "temperature": 450,
        "pressure": 400
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "几乎不加压",
        "en": "Almost no pressure"
      },
      "params": {
        "temperature": 450,
        "pressure": 10
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "两个条件都推到极限",
        "en": "Both pushed to the limit"
      },
      "params": {
        "temperature": 200,
        "pressure": 400
      }
    }
  ]
};
