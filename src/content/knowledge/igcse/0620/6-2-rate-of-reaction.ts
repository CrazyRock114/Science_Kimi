/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/6-2-rate-of-reaction
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/6-2-rate-of-reaction/narration';
import { equations } from '../../igcse-src/0620/6-2-rate-of-reaction/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/6-2-rate-of-reaction/kernel';

export const kp62RateOfReaction: KnowledgePoint = {
  "id": "igcse-0620-6-2-rate-of-reaction",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "反应速率",
    "en": "Rate of reaction"
  },
  "summary": {
    "zh": "加热、研磨、加催化剂——曲线更陡，终点却相同。只有限量反应物能改变平台高度。",
    "en": "Heat it, grind it, add a catalyst — the curve gets steeper but ends in the same place. Only the limiting reactant moves the plateau."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/6.2.1",
      "0620/6.2.2",
      "0620/6.2.3",
      "0620/6.2.4",
      "0620/6.2.5",
      "0620/6.2.6",
      "0620/6.2.7",
      "0620/6.2.8"
    ]
  },
  "keywords": {
    "zh": [
      "反应速率",
      "碰撞理论",
      "活化能",
      "催化剂",
      "限量反应物",
      "表面积"
    ],
    "en": [
      "rate of reaction",
      "collision theory",
      "activation energy",
      "catalyst",
      "limiting reactant",
      "surface area"
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
          "说明浓度、压强、表面积与温度对反应速率的影响。",
          "说明催化剂加快反应且反应后化学性质不变。",
          "描述研究反应速率的实验方法。",
          "解读反应速率实验的数据与图像。",
          "用碰撞频率与能量描述碰撞理论。（Extended）",
          "用碰撞理论解释各因素对速率的影响。（Extended）",
          "说明催化剂降低活化能。（Extended）",
          "评价研究反应速率的实验方法。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "斜率就是速率"
      },
      {
        "type": "paragraph",
        "text": "反应速率就是这条曲线的斜率。测初始速率的方法是在原点处画切线并求其斜率——这是标准的考试技巧。"
      },
      {
        "type": "paragraph",
        "text": "现在把温度升到四十五度。曲线陡峭得多。灰色参照线是原来的实验，可以清楚看出快了多少。"
      },
      {
        "type": "paragraph",
        "text": "但看它最终停在哪里——和之前完全相同的气体体积。加热让反应更快，但并没有产生更多二氧化碳。"
      },
      {
        "type": "heading",
        "text": "各因素为何有效"
      },
      {
        "type": "paragraph",
        "text": "碰撞理论能解释这一切。反应发生的条件是：粒子相互碰撞、能量足够（至少达到活化能）、且取向合适。"
      },
      {
        "type": "paragraph",
        "text": "温度升高使粒子动能增大，碰撞更频繁，*而且*能量足够的碰撞比例更大。第二点正是加热效果如此显著的原因。"
      },
      {
        "type": "paragraph",
        "text": "把大理石磨成粉末暴露出多得多的表面，酸能同时接触更多部分。大理石总量不变，但可发生碰撞的位置多得多。"
      },
      {
        "type": "paragraph",
        "text": "催化剂的作用方式不同。它提供活化能更低的途径，使更大比例的碰撞成功。而且反应结束时催化剂化学性质不变——可以全部回收。"
      },
      {
        "type": "formula",
        "latex": "\\text{rate} = \\frac{\\Delta V}{\\Delta t}",
        "caption": "速率是体积–时间曲线的斜率。用原点处的切线求初始速率。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "rate of reaction（反应速率）：反应物消耗或产物生成的快慢。在体积–时间图上就是斜率。",
          "collision theory（碰撞理论）：当粒子以不低于活化能的能量、以合适取向相互碰撞时反应才发生。",
          "activation energy（活化能）：碰撞粒子发生反应所需的最小能量，符号 Ea。",
          "catalyst（催化剂）：通过提供活化能更低的途径加快反应、且反应后化学性质不变的物质。",
          "limiting reactant（限量反应物）：最先耗尽的反应物。只有它决定能生成多少产物。",
          "surface area（表面积）：固体暴露给另一反应物的面积。把固体分得越碎，表面积越大。"
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
          "Describe the effect of concentration, pressure, surface area and temperature on rate.",
          "State that a catalyst increases rate and is chemically unchanged at the end.",
          "Describe practical methods for investigating the rate of a reaction.",
          "Interpret data and graphs from rate of reaction experiments.",
          "Describe collision theory in terms of collision frequency and energy. (Extended)",
          "Explain the effect of each factor on rate using collision theory. (Extended)",
          "State that a catalyst decreases the activation energy. (Extended)",
          "Evaluate practical methods for investigating rate of reaction. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Gradient is the rate"
      },
      {
        "type": "paragraph",
        "text": "The rate of reaction is the gradient of this curve. To measure the initial rate, draw a tangent at the origin and find its slope — that is the standard exam technique."
      },
      {
        "type": "paragraph",
        "text": "Now raise the temperature to forty-five degrees. The curve shoots up far more steeply. The grey reference line is the original run, so you can see exactly how much faster it got."
      },
      {
        "type": "paragraph",
        "text": "But look where it ends up. Exactly the same volume of gas as before. Heating the flask made the reaction faster; it did not make any more carbon dioxide."
      },
      {
        "type": "heading",
        "text": "Why each factor works"
      },
      {
        "type": "paragraph",
        "text": "Collision theory explains all of it. A reaction happens when particles collide with enough energy — at least the activation energy — and in the right orientation."
      },
      {
        "type": "paragraph",
        "text": "Higher temperature gives the particles more kinetic energy, so they collide more often *and* a greater fraction of collisions has enough energy. That second part is why heating has such a large effect."
      },
      {
        "type": "paragraph",
        "text": "Grinding the marble into powder exposes far more surface, so the acid can reach more of it at once. Same amount of marble, many more places for collisions to happen."
      },
      {
        "type": "paragraph",
        "text": "A catalyst works differently. It provides a route with a lower activation energy, so a larger fraction of collisions succeeds. And it is chemically unchanged at the end — you get it all back."
      },
      {
        "type": "formula",
        "latex": "\\text{rate} = \\frac{\\Delta V}{\\Delta t}",
        "caption": "Rate is the gradient of the volume–time curve. Measure the initial rate from a tangent at the origin."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "rate of reaction (反应速率): How quickly reactants are used up or products formed. On a volume–time graph it is the gradient.",
          "collision theory (碰撞理论): Reactions occur when particles collide with at least the activation energy and in a suitable orientation.",
          "activation energy (活化能): The minimum energy colliding particles must have for a reaction to occur. Symbol Ea.",
          "catalyst (催化剂): A substance that speeds up a reaction by providing a route of lower activation energy, and is chemically unchanged at the end.",
          "limiting reactant (限量反应物): The reactant that runs out first. It alone determines how much product can form.",
          "surface area (表面积): The area of solid exposed to the other reactant. Breaking a solid into smaller pieces increases it."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-6-2-cp1",
      "syllabus": [
        "0620/6.2.6"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain, using collision theory, why increasing the temperature increases the rate of a reaction.",
      "markScheme": [
        {
          "text": "The particles gain kinetic energy and move faster",
          "marks": 1
        },
        {
          "text": "so they collide more frequently",
          "marks": 1
        },
        {
          "text": "and a greater proportion of collisions has energy equal to or greater than the activation energy",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两个效应都要写，第二点分值更高。只写\"碰撞更多\"只是部分答案——碰撞的能量才是关键。",
        "en": "Both effects are needed, and the second earns most of the credit. \"More collisions\" alone is a partial answer — the energy of those collisions is what matters most."
      }
    },
    {
      "id": "0620-6-2-cp2",
      "syllabus": [
        "0620/6.2.4"
      ],
      "tier": "core",
      "commandWord": "Predict",
      "marks": 2,
      "stem": "Excess marble chips react with 50 cm³ of 1.0 mol / dm³ hydrochloric acid. The experiment is repeated with the acid warmed to 40 °C. Predict how the total volume of gas collected changes, and explain your answer.",
      "markScheme": [
        {
          "text": "The total volume of gas is unchanged",
          "marks": 1
        },
        {
          "text": "because the amount of acid, which is the limiting reactant, has not changed",
          "marks": 1,
          "alternatives": [
            "the marble is in excess so the acid determines the yield"
          ]
        }
      ],
      "examinerNote": {
        "zh": "加热只改变快慢，绝不改变多少。题目中的\"过量\"一词提示酸是限量反应物。",
        "en": "Heating changes how fast, never how much. The word \"excess\" in the question is the clue that the acid is limiting."
      }
    },
    {
      "id": "0620-6-2-cp3",
      "syllabus": [
        "0620/6.2.2",
        "0620/6.2.7"
      ],
      "tier": "supplement",
      "commandWord": "State",
      "marks": 2,
      "stem": "State how a catalyst increases the rate of a reaction, and state what happens to the catalyst by the end of the reaction.",
      "markScheme": [
        {
          "text": "It provides an alternative route with a lower activation energy",
          "marks": 1
        },
        {
          "text": "It is chemically unchanged at the end of the reaction",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "催化剂不会\"给粒子更多能量\"，也不降低粒子的能量——它降低的是粒子必须跨越的能垒。",
        "en": "A catalyst does not \"give the particles more energy\" and does not lower the energy of the particles — it lowers the energy barrier they must clear."
      }
    },
    {
      "id": "0620-6-2-cp4",
      "syllabus": [
        "0620/6.2.1"
      ],
      "tier": "core",
      "commandWord": "Identify",
      "marks": 1,
      "stem": "Two experiments use the same mass of calcium carbonate and the same acid. Identify the change that would make the reaction fastest.",
      "options": [
        "Using powder instead of large lumps",
        "Using larger lumps instead of powder",
        "Using a larger volume of the same acid",
        "Cooling the acid before adding it"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "Using powder, because it has a larger surface area",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "质量相同、表面积不同。用更大体积的同种酸只是增加反应物总量而不提高浓度，改变的是产量而非初始速率。",
        "en": "Same mass, different surface area. A larger volume of the same acid adds more reactant but does not increase the concentration, so it changes the yield rather than the initial rate."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "concentration",
        "label": {
          "zh": "酸的浓度",
          "en": "Acid concentration"
        },
        "min": 0.2,
        "max": 3,
        "step": 0.2,
        "defaultValue": 1,
        "unit": "mol / dm³"
      },
      {
        "key": "temperature",
        "label": {
          "zh": "温度",
          "en": "Temperature"
        },
        "min": 10,
        "max": 70,
        "step": 5,
        "defaultValue": 25,
        "unit": "°C"
      },
      {
        "key": "surfaceArea",
        "label": {
          "zh": "固体形态",
          "en": "Form of the solid"
        },
        "min": 0,
        "max": 2,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "catalyst",
        "label": {
          "zh": "催化剂",
          "en": "Catalyst"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "duration",
        "label": {
          "zh": "绘图时长",
          "en": "Time plotted"
        },
        "min": 50,
        "max": 500,
        "step": 25,
        "defaultValue": 200,
        "unit": "s"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "6-2-rate-of-reaction",
        "hint": {
          "en": "Raise the temperature — the curve steepens but ends in exactly the same place. Only concentration moves the plateau.",
          "zh": "升高温度——曲线变陡，但终点完全不变。只有浓度能改变平台高度。"
        },
        "params": [
          {
            "key": "concentration",
            "label": {
              "en": "Acid concentration",
              "zh": "酸的浓度"
            },
            "unit": "mol / dm³",
            "min": 0.2,
            "max": 3,
            "step": 0.2,
            "default": 1
          },
          {
            "key": "temperature",
            "label": {
              "en": "Temperature",
              "zh": "温度"
            },
            "unit": "°C",
            "min": 10,
            "max": 70,
            "step": 5,
            "default": 25
          },
          {
            "key": "surfaceArea",
            "label": {
              "en": "Form of the solid",
              "zh": "固体形态"
            },
            "unit": "",
            "min": 0,
            "max": 2,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Large chips",
                  "zh": "大块"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Small chips",
                  "zh": "小块"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Powder",
                  "zh": "粉末"
                }
              }
            ]
          },
          {
            "key": "catalyst",
            "label": {
              "en": "Catalyst",
              "zh": "催化剂"
            },
            "unit": "",
            "min": 0,
            "max": 1,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "None",
                  "zh": "无"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Present",
                  "zh": "加入"
                }
              }
            ]
          },
          {
            "key": "duration",
            "label": {
              "en": "Time plotted",
              "zh": "绘图时长"
            },
            "unit": "s",
            "min": 50,
            "max": 500,
            "step": 25,
            "default": 200
          }
        ],
        "readouts": [
          {
            "key": "initialRate",
            "label": {
              "en": "Initial rate",
              "zh": "初始速率"
            },
            "unit": "cm³ / s",
            "sigFigs": 3
          },
          {
            "key": "finalVolume",
            "label": {
              "en": "Final volume of gas",
              "zh": "最终气体体积"
            },
            "unit": "cm³",
            "sigFigs": 3
          },
          {
            "key": "halfTime",
            "label": {
              "en": "Time to reach half",
              "zh": "达到一半所需时间"
            },
            "unit": "s",
            "sigFigs": 3
          },
          {
            "key": "volumeAtEnd",
            "label": {
              "en": "Collected by end",
              "zh": "结束时已收集"
            },
            "unit": "cm³",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Reference run",
              "zh": "参照实验"
            },
            "params": {
              "concentration": 1,
              "temperature": 25,
              "surfaceArea": 0,
              "catalyst": 0,
              "duration": 200
            }
          },
          {
            "label": {
              "en": "Hotter",
              "zh": "升温"
            },
            "params": {
              "concentration": 1,
              "temperature": 45,
              "surfaceArea": 0,
              "catalyst": 0,
              "duration": 200
            }
          },
          {
            "label": {
              "en": "Powdered",
              "zh": "磨成粉"
            },
            "params": {
              "concentration": 1,
              "temperature": 25,
              "surfaceArea": 2,
              "catalyst": 0,
              "duration": 200
            }
          },
          {
            "label": {
              "en": "With catalyst",
              "zh": "加催化剂"
            },
            "params": {
              "concentration": 1,
              "temperature": 25,
              "surfaceArea": 0,
              "catalyst": 1,
              "duration": 200
            }
          },
          {
            "label": {
              "en": "Double concentration",
              "zh": "浓度加倍"
            },
            "params": {
              "concentration": 2,
              "temperature": 25,
              "surfaceArea": 0,
              "catalyst": 0,
              "duration": 200
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
        "zh": "参照实验",
        "en": "Reference run"
      },
      "params": {
        "concentration": 1,
        "temperature": 25,
        "surfaceArea": 0,
        "catalyst": 0,
        "duration": 200
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "升温",
        "en": "Hotter"
      },
      "params": {
        "concentration": 1,
        "temperature": 45,
        "surfaceArea": 0,
        "catalyst": 0,
        "duration": 200
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "磨成粉",
        "en": "Powdered"
      },
      "params": {
        "concentration": 1,
        "temperature": 25,
        "surfaceArea": 2,
        "catalyst": 0,
        "duration": 200
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "加催化剂",
        "en": "With catalyst"
      },
      "params": {
        "concentration": 1,
        "temperature": 25,
        "surfaceArea": 0,
        "catalyst": 1,
        "duration": 200
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "浓度加倍",
        "en": "Double concentration"
      },
      "params": {
        "concentration": 2,
        "temperature": 25,
        "surfaceArea": 0,
        "catalyst": 0,
        "duration": 200
      }
    }
  ]
};
