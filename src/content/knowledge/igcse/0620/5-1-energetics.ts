/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/5-1-energetics
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/5-1-energetics/narration';
import { equations } from '../../igcse-src/0620/5-1-energetics/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/5-1-energetics/kernel';

export const kp51Energetics: KnowledgePoint = {
  "id": "igcse-0620-5-1-energetics",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "放热反应与吸热反应",
    "en": "Exothermic and endothermic reactions"
  },
  "summary": {
    "zh": "断键消耗能量，成键放出能量。两者之差就是 ΔH——而 ΔH 决定了产物在能量图上的高度。",
    "en": "Breaking bonds costs energy and making them releases it. The difference is ΔH — and ΔH is where the product level sits on the diagram."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/5.1.1",
      "0620/5.1.2",
      "0620/5.1.3",
      "0620/5.1.4",
      "0620/5.1.5",
      "0620/5.1.6",
      "0620/5.1.7",
      "0620/5.1.8"
    ]
  },
  "keywords": {
    "zh": [
      "放热",
      "吸热",
      "活化能",
      "焓变",
      "键能"
    ],
    "en": [
      "exothermic",
      "endothermic",
      "activation energy",
      "enthalpy change",
      "bond energy"
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
          "说明放热反应向环境放出热能。",
          "说明吸热反应从环境吸收热能。",
          "解读放热与吸热反应的能量变化图。",
          "使用 ΔH，放热为负、吸热为正。（Extended）",
          "定义活化能 Ea。（Extended）",
          "画出并标注含 Ea 与 ΔH 的能量变化图。（Extended）",
          "说明断键吸热、成键放热。（Extended）",
          "用键能计算反应的焓变。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "为什么放热是负值"
      },
      {
        "type": "paragraph",
        "text": "ΔH 是 −184。学生常觉得这个符号反了，因为房间变*暖*了——为什么是负的？"
      },
      {
        "type": "paragraph",
        "text": "因为 ΔH 是从化学物质的角度、而不是从房间的角度衡量的。是化学物质失去了这部分能量，把它送了出去。能量流出反应体系记为负，而它出现在周围环境中，所以温度计读数上升。"
      },
      {
        "type": "paragraph",
        "text": "现在切换到氮气加氧气。断三键要 945，断氧氧双键要 496——而收回的只有 1262，净亏 179。"
      },
      {
        "type": "paragraph",
        "text": "ΔH 是正的，再看图——产物现在高于反应物。这个反应必须从别处吸收能量。这就是吸热。它不会在你周围的空气中发生，但在汽车发动机内会，尾气中的氮氧化物正源于此。"
      },
      {
        "type": "heading",
        "text": "做这个计算"
      },
      {
        "type": "paragraph",
        "text": "三步，永远一样。把所有断裂的键的键能加起来。把所有形成的键的键能加起来。用前者减后者。这个顺序——断键减成键——会自动给出正确的符号。"
      },
      {
        "type": "paragraph",
        "text": "有一点容易出错：只计算真正发生变化的键。乙烯加氢只断 C=C 和 H–H，别无其他。乙烯原有的四根 C–H 键在乙烷中依然存在、毫发无损，所以两边都不出现它们。"
      },
      {
        "type": "paragraph",
        "text": "要坦白一点：这些是*平均*键能，是在许多化合物上取的平均值，所以算出的 ΔH 接近实测值但不等于它。这里甲烷算得 −822，而实测约为 −890。接近——而\"接近\"正是这个方法所能承诺的。"
      },
      {
        "type": "formula",
        "latex": "\\Delta H = \\Sigma(\\text{bonds broken}) - \\Sigma(\\text{bonds made})",
        "caption": "断键付出，成键收回。按这个顺序写，符号会自动正确。"
      },
      {
        "type": "formula",
        "latex": "\\Delta H < 0 \\Rightarrow \\text{exothermic}",
        "caption": "从化学物质而非房间的角度衡量。它们失去了能量，所以是负值——而房间变暖，正是因为能量去了那里。"
      },
      {
        "type": "formula",
        "latex": "E_a \\text{ is measured from the reactants to the peak}",
        "caption": "不是从产物量起，也不是从图的底部量起。催化剂降低它，其余一概不变。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "exothermic（放热）：向环境放出热能，使环境温度升高。ΔH 为负——是化学物质失去了这部分能量。",
          "endothermic（吸热）：从环境吸收热能，使环境温度降低。ΔH 为正。",
          "activation energy（活化能）：碰撞粒子引发反应所需的最小能量。从反应物能级量到峰顶。",
          "enthalpy change（焓变）：ΔH，反应的总能量变化：断键能量减成键能量。它就是能量图上两个能级之间的差距。",
          "bond energy（键能）：断裂 1 摩尔某种键所需的能量。它是在许多化合物上取的平均值，所以计算结果接近实测 ΔH 但不等于它。"
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
          "State that an exothermic reaction transfers thermal energy to the surroundings.",
          "State that an endothermic reaction takes in thermal energy from the surroundings.",
          "Interpret reaction pathway diagrams for exothermic and endothermic reactions.",
          "Use ΔH, negative for exothermic and positive for endothermic. (Extended)",
          "Define activation energy, Ea. (Extended)",
          "Draw and label reaction pathway diagrams including Ea and ΔH. (Extended)",
          "State that bond breaking is endothermic and bond making is exothermic. (Extended)",
          "Calculate the enthalpy change of a reaction using bond energies. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Why exothermic is negative"
      },
      {
        "type": "paragraph",
        "text": "ΔH is minus one hundred and eighty-four. Students find that sign backwards, because the room got *warmer* — so why is it negative?"
      },
      {
        "type": "paragraph",
        "text": "Because ΔH is measured from the chemicals, not the room. The chemicals lost that energy; they gave it away. Energy out of the reaction is negative, and it turned up in the surroundings, which is why the thermometer went up."
      },
      {
        "type": "paragraph",
        "text": "Now switch to nitrogen plus oxygen. Nine hundred and forty-five to break the triple bond, four hundred and ninety-six for the oxygen — and you only get twelve hundred and sixty-two back. You are down by a hundred and seventy-nine."
      },
      {
        "type": "paragraph",
        "text": "ΔH is positive, and look at the diagram — the products sit above the reactants now. This reaction has to take energy in from somewhere. Endothermic. It does not happen in the air around you, but it does inside a car engine, and that is where the nitrogen oxides in exhaust come from."
      },
      {
        "type": "heading",
        "text": "Doing the calculation"
      },
      {
        "type": "paragraph",
        "text": "Three steps, always the same. Add up the bond energies of everything that breaks. Add up the bond energies of everything that forms. Subtract the second from the first. That order — broken minus made — gives you the sign for free."
      },
      {
        "type": "paragraph",
        "text": "And one thing that catches people out: only count the bonds that actually change. Hydrogenating ethene breaks the C=C and the H–H, and nothing else. Ethene’s four C–H bonds are still there in ethane, untouched, so they appear on neither side."
      },
      {
        "type": "paragraph",
        "text": "One honest caveat. These are *mean* bond energies, averaged over many compounds, so a calculated ΔH lands near the measured value rather than on it. Methane comes out at minus eight hundred and twenty-two here; measured, it is about minus eight hundred and ninety. Close, and close is what the method promises."
      },
      {
        "type": "formula",
        "latex": "\\Delta H = \\Sigma(\\text{bonds broken}) - \\Sigma(\\text{bonds made})",
        "caption": "Breaking costs, making pays back. Written in this order the sign comes out right on its own."
      },
      {
        "type": "formula",
        "latex": "\\Delta H < 0 \\Rightarrow \\text{exothermic}",
        "caption": "Measured from the chemicals, not the room. They lost the energy, so it is negative — and the room got warmer because that is where it went."
      },
      {
        "type": "formula",
        "latex": "E_a \\text{ is measured from the reactants to the peak}",
        "caption": "Not from the products, and not from the bottom of the graph. A catalyst lowers it and changes nothing else."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "exothermic (放热): Transferring thermal energy to the surroundings, so they get warmer. ΔH is negative — the chemicals lost that energy.",
          "endothermic (吸热): Taking thermal energy in from the surroundings, so they get colder. ΔH is positive.",
          "activation energy (活化能): The minimum energy colliding particles need for a reaction to happen. Measured from the reactant level to the top of the hump.",
          "enthalpy change (焓变): ΔH, the overall energy change of a reaction: bonds broken minus bonds made. It is the gap between the two levels on the diagram.",
          "bond energy (键能): The energy needed to break one mole of a particular bond. A mean value averaged over many compounds, so a calculation lands close to the measured ΔH rather than on it."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-5-1-cp1",
      "syllabus": [
        "0620/5.1.1",
        "0620/5.1.4"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "When magnesium is added to dilute hydrochloric acid, the temperature of the mixture rises. State whether the reaction is exothermic or endothermic, and state the sign of ΔH.",
      "markScheme": [
        {
          "text": "Exothermic",
          "marks": 1
        },
        {
          "text": "ΔH is negative",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "温度升高意味着*环境*得到了能量，所以化学物质失去了它。ΔH 从化学物质的角度衡量，所以是负值。这个\"反转\"就是全部难点所在。",
        "en": "The temperature rising means the *surroundings* gained energy, so the chemicals lost it. ΔH is measured from the chemicals, so it is negative. That inversion is the whole difficulty."
      }
    },
    {
      "id": "0620-5-1-cp2",
      "syllabus": [
        "0620/5.1.8",
        "0620/5.1.7"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "Hydrogen reacts with chlorine: H₂ + Cl₂ → 2HCl. Bond energies in kJ/mol: H–H 436, Cl–Cl 242, H–Cl 431. Calculate ΔH for this reaction.",
      "markScheme": [
        {
          "text": "Bonds broken: 436 + 242 = 678 kJ/mol",
          "marks": 1
        },
        {
          "text": "Bonds made: 2 × 431 = 862 kJ/mol",
          "marks": 1
        },
        {
          "text": "ΔH = 678 − 862 = −184 kJ/mol",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "生成的是两根 H–Cl 键，不是一根——配平方程式前面有个 2。漏掉它会算成 −29，丢掉两分，而这正是本计算中最常见的失误。",
        "en": "Two H–Cl bonds form, not one — the balanced equation has a 2 in front. Dropping it gives −29 and loses two marks, and it is the single most common slip in this calculation."
      }
    },
    {
      "id": "0620-5-1-cp3",
      "syllabus": [
        "0620/5.1.3",
        "0620/5.1.6"
      ],
      "tier": "supplement",
      "commandWord": "Sketch",
      "marks": 3,
      "stem": "Sketch a reaction pathway diagram for an endothermic reaction. Label the reactants, the products, ΔH and the activation energy.",
      "markScheme": [
        {
          "text": "Products drawn at a higher energy level than the reactants",
          "marks": 1
        },
        {
          "text": "A hump between them, higher than both levels",
          "marks": 1
        },
        {
          "text": "ΔH arrowed between the two levels, and Ea arrowed from the reactant level to the top of the hump",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "Ea 是从反应物量到峰顶——不是从坐标轴底部，也不是从产物量起。标错起点是丢掉第三分的常见方式。",
        "en": "Ea is measured from the reactants to the peak — not from the bottom of the axis, and not from the products. Marking it from the wrong place is a common way to lose the third mark."
      }
    },
    {
      "id": "0620-5-1-cp4",
      "syllabus": [
        "0620/5.1.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A catalyst is added to an exothermic reaction. Explain the effect on the activation energy and on ΔH.",
      "markScheme": [
        {
          "text": "The activation energy is lowered, because the catalyst provides an alternative route",
          "marks": 1
        },
        {
          "text": "ΔH is unchanged, because the reactants and products are the same substances at the same energies",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "第二个得分点是关键区别。催化剂改变的是路径，不是终点——所以它无法改变反应总共放出多少能量。",
        "en": "The second mark is the discriminator. A catalyst changes the route, not the destination — so it cannot change how much energy the reaction releases overall."
      }
    },
    {
      "id": "0620-5-1-cp5",
      "syllabus": [
        "0620/5.1.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A reaction has ΔH = +52 kJ/mol. Explain what this tells you about the bonds broken and the bonds made.",
      "markScheme": [
        {
          "text": "More energy was needed to break the bonds than was released when new bonds formed",
          "marks": 1
        },
        {
          "text": "so the reaction takes energy in overall and is endothermic",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "在任何反应中，断键总是吸热、成键总是放热。决定总体符号的只是哪一边的总量更大。",
        "en": "Bond breaking is always endothermic and bond making always exothermic, in every reaction. It is only which total is larger that decides the overall sign."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "reaction",
        "label": {
          "zh": "反应",
          "en": "Reaction"
        },
        "min": 0,
        "max": 4,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "activationEnergy",
        "label": {
          "zh": "活化能",
          "en": "Activation energy"
        },
        "min": 20,
        "max": 600,
        "step": 10,
        "defaultValue": 250,
        "unit": "kJ/mol"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "5-1-energetics",
        "hint": {
          "en": "Drag the activation energy and watch the hump change while the two levels stay put — that is what a catalyst does.",
          "zh": "拖动活化能，看山峰变化而两个能级保持不动——这正是催化剂的作用。"
        },
        "params": [
          {
            "key": "reaction",
            "label": {
              "en": "Reaction",
              "zh": "反应"
            },
            "unit": "",
            "min": 0,
            "max": 4,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "H₂ + Cl₂",
                  "zh": "H₂ + Cl₂"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Burning CH₄",
                  "zh": "甲烷燃烧"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "N₂ + 3H₂ (Haber)",
                  "zh": "N₂ + 3H₂（哈伯法）"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "N₂ + O₂ (endothermic)",
                  "zh": "N₂ + O₂（吸热）"
                }
              },
              {
                "value": 4,
                "label": {
                  "en": "C₂H₄ + H₂",
                  "zh": "C₂H₄ + H₂"
                }
              }
            ]
          },
          {
            "key": "activationEnergy",
            "label": {
              "en": "Activation energy",
              "zh": "活化能"
            },
            "unit": "kJ/mol",
            "symbol": "E_a",
            "min": 20,
            "max": 600,
            "step": 10,
            "default": 250
          }
        ],
        "readouts": [
          {
            "key": "energyIn",
            "label": {
              "en": "Energy to break bonds",
              "zh": "断键所需能量"
            },
            "unit": "kJ/mol",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "energyOut",
            "label": {
              "en": "Energy from making bonds",
              "zh": "成键放出能量"
            },
            "unit": "kJ/mol",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "enthalpyChange",
            "label": {
              "en": "Enthalpy change",
              "zh": "焓变"
            },
            "unit": "kJ/mol",
            "symbol": "\\Delta H",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "activationEnergy",
            "label": {
              "en": "Activation energy",
              "zh": "活化能"
            },
            "unit": "kJ/mol",
            "symbol": "E_a",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Burning methane",
              "zh": "甲烷燃烧"
            },
            "params": {
              "reaction": 1,
              "activationEnergy": 250
            }
          },
          {
            "label": {
              "en": "Endothermic: N₂ + O₂",
              "zh": "吸热：N₂ + O₂"
            },
            "params": {
              "reaction": 3,
              "activationEnergy": 400
            }
          },
          {
            "label": {
              "en": "Catalyst: a lower hump",
              "zh": "催化剂：更矮的山峰"
            },
            "params": {
              "reaction": 1,
              "activationEnergy": 60
            }
          },
          {
            "label": {
              "en": "Haber: only just exothermic",
              "zh": "哈伯法：仅略微放热"
            },
            "params": {
              "reaction": 2,
              "activationEnergy": 300
            }
          },
          {
            "label": {
              "en": "Only changed bonds count",
              "zh": "只算变化的键"
            },
            "params": {
              "reaction": 4,
              "activationEnergy": 200
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
        "zh": "甲烷燃烧",
        "en": "Burning methane"
      },
      "params": {
        "reaction": 1,
        "activationEnergy": 250
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "吸热：N₂ + O₂",
        "en": "Endothermic: N₂ + O₂"
      },
      "params": {
        "reaction": 3,
        "activationEnergy": 400
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "催化剂：更矮的山峰",
        "en": "Catalyst: a lower hump"
      },
      "params": {
        "reaction": 1,
        "activationEnergy": 60
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "哈伯法：仅略微放热",
        "en": "Haber: only just exothermic"
      },
      "params": {
        "reaction": 2,
        "activationEnergy": 300
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "只算变化的键",
        "en": "Only changed bonds count"
      },
      "params": {
        "reaction": 4,
        "activationEnergy": 200
      }
    }
  ]
};
