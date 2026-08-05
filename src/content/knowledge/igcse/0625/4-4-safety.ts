/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-4-safety
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/4-4-safety/narration';
import { equations } from '../../igcse-src/0625/4-4-safety/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/4-4-safety/kernel';

export const kp44Safety: KnowledgePoint = {
  "id": "igcse-0625-4-4-safety",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "电路元件与用电安全",
    "en": "Circuit components and electrical safety"
  },
  "summary": {
    "zh": "额定值低于工作电流的保险丝什么也保护不了——它只会让电器无法工作。额定值远高于工作电流，它则会在电缆过热时无动于衷。",
    "en": "A fuse rated below the working current protects nothing — it just stops the appliance working. Rated far above it, it sits there while the cable overheats."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/4.3.1.1",
      "0625/4.3.1.2",
      "0625/4.3.3.1",
      "0625/4.3.3.2",
      "0625/4.3.3.3",
      "0625/4.4.1",
      "0625/4.4.2",
      "0625/4.4.3",
      "0625/4.4.4",
      "0625/4.4.5"
    ]
  },
  "keywords": {
    "zh": [
      "分压器",
      "火线",
      "保险丝",
      "双重绝缘"
    ],
    "en": [
      "potential divider",
      "live wire",
      "fuse",
      "double insulation"
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
          "绘制并解读含标准元件的电路图，包括二极管与发光二极管。（Extended）",
          "知道在电流恒定时，导体两端的电势差随电阻增大而增大。",
          "描述可变分压器的作用并使用 R₁/R₂ = V₁/V₂。（Extended）",
          "说出绝缘破损、过热、潮湿环境与过载的危险。",
          "掌握火线、零线与地线，以及开关和保险丝为何接在火线上。",
          "解释断路器与保险丝，选择合适的额定值，并解释双重绝缘与接地。"
        ]
      },
      {
        "type": "paragraph",
        "text": "额定值低于工作电流的保险丝什么也保护不了——它只会让电器无法工作。额定值远高于工作电流，它则会在电缆过热时无动于衷。"
      },
      {
        "type": "formula",
        "latex": "\\dfrac{V_1}{V_2} = \\dfrac{R_1}{R_2}",
        "caption": "两者流过相同的电流，因此由 V = IR，分得的电压与阻值成正比。而两个电压之和必须等于电源电压——核对这一点能查出大多数错误。"
      },
      {
        "type": "formula",
        "latex": "I = \\dfrac{P}{V}",
        "caption": "选择保险丝额定值的方法：先求出工作电流，再取高于它的最小标准规格。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "potential divider（分压器）：串联的两个电阻按阻值比例分配电源电压。两个电压之和始终等于电源电压。",
          "live wire（火线）：传送交流电的导线，也是危险的那一根。开关和保险丝接在它上面，使电器关闭时与电源隔离。",
          "fuse（保险丝）：电流过大时会熔断的细导线。额定值略高于工作电流——必须高于，否则正常使用时就会熔断。",
          "double insulation（双重绝缘）：塑料外壳且无裸露金属，因此没有任何部件会带电。这类电器不需要地线。"
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
          "Draw and interpret circuit diagrams with the standard components, including diodes and LEDs. (Extended)",
          "Know that p.d. across a conductor increases with resistance at constant current.",
          "Describe the action of a variable potential divider and use R₁/R₂ = V₁/V₂. (Extended)",
          "State the hazards of damaged insulation, overheating, damp conditions and overloading.",
          "Know the live, neutral and earth wires, and why switches and fuses go in the live wire.",
          "Explain trip switches and fuses, choose appropriate ratings, and explain double insulation and earthing."
        ]
      },
      {
        "type": "paragraph",
        "text": "A fuse rated below the working current protects nothing — it just stops the appliance working. Rated far above it, it sits there while the cable overheats."
      },
      {
        "type": "formula",
        "latex": "\\dfrac{V_1}{V_2} = \\dfrac{R_1}{R_2}",
        "caption": "The same current flows through both, so V = IR makes the shares proportional to the resistances. And the two voltages must add to the supply — checking that catches most errors."
      },
      {
        "type": "formula",
        "latex": "I = \\dfrac{P}{V}",
        "caption": "How a fuse rating is chosen: find the working current, then take the smallest standard fuse above it."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "potential divider (分压器): Two resistors in series sharing a supply voltage in the ratio of their resistances. The two voltages always add to the supply.",
          "live wire (火线): The wire carrying the alternating supply, and the dangerous one. Switches and fuses go in it so that the appliance is isolated when off.",
          "fuse (保险丝): A thin wire that melts if the current gets too large. Rated just above the working current — above, or it blows in normal use.",
          "double insulation (双重绝缘): A plastic casing with no exposed metal, so nothing can become live. Such an appliance needs no earth wire."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0625-4-4-cp1",
      "syllabus": [
        "0625/4.4.3"
      ],
      "tier": "core",
      "commandWord": "Determine",
      "marks": 3,
      "stem": "A 1.2 kW hairdryer is used on a 230 V mains supply. Fuses are available rated at 1 A, 3 A, 5 A, 10 A and 13 A. Determine which fuse should be fitted, and justify your choice.",
      "markScheme": [
        {
          "text": "I = P / V = 1200 / 230 = 5.2 A",
          "marks": 1
        },
        {
          "text": "The 10 A fuse should be fitted",
          "marks": 1
        },
        {
          "text": "because the rating must be above the working current or the fuse blows in normal use, but as close to it as possible so that it blows quickly if a fault occurs — 5 A is below 5.2 A and 13 A is unnecessarily high",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "理由的两个方面都要写。额定值低于工作电流的保险丝什么也保护不了，只会让电器无法工作。",
        "en": "Both halves of the justification are needed. A fuse rated below the working current does not protect anything, it simply stops the appliance working."
      }
    },
    {
      "id": "0625-4-4-cp2",
      "syllabus": [
        "0625/4.3.3.3"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A 9.0 V supply is connected across a 300 Ω resistor in series with a 600 Ω resistor. Calculate the potential difference across each resistor.",
      "markScheme": [
        {
          "text": "Total resistance = 900 Ω, so the current is 9.0 / 900 = 0.010 A",
          "marks": 1
        },
        {
          "text": "Across the 300 Ω resistor: V = IR = 0.010 × 300 = 3.0 V",
          "marks": 1
        },
        {
          "text": "Across the 600 Ω resistor: 0.010 × 600 = 6.0 V, and 3.0 + 6.0 = 9.0 V",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "核对两者之和是否等于电源电压。若不等，说明有错，而这个检查只需两秒。",
        "en": "Check the two add to the supply. If they do not, something has gone wrong, and it takes two seconds to notice."
      }
    },
    {
      "id": "0625-4-4-cp3",
      "syllabus": [
        "0625/4.4.2"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain why a switch in a mains appliance must be connected in the live wire rather than in the neutral wire.",
      "markScheme": [
        {
          "text": "The live wire is the one at a high potential relative to earth",
          "marks": 1
        },
        {
          "text": "A switch in the live wire disconnects the appliance from that high potential when it is off",
          "marks": 1
        },
        {
          "text": "A switch in the neutral would stop the current, but the appliance would remain connected to the live supply, so someone touching it could still receive a shock",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两种接法都能切断电流。但只有一种能让电器安全地被打开，这个区别就是全部答案。",
        "en": "Both switch positions stop the current. Only one of them makes the appliance safe to open, and that difference is the whole answer."
      }
    },
    {
      "id": "0625-4-4-cp4",
      "syllabus": [
        "0625/4.4.4",
        "0625/4.4.5"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "A metal-cased appliance is earthed, while a plastic-cased one is double insulated and has no earth wire. Explain how each is made safe, and state what the fuse in the double-insulated appliance protects.",
      "markScheme": [
        {
          "text": "If a live wire touches an earthed metal case, a very large current flows through the earth wire to the ground",
          "marks": 1
        },
        {
          "text": "That large current blows the fuse and disconnects the supply before anyone can touch the case",
          "marks": 1
        },
        {
          "text": "A double-insulated appliance has a non-conducting casing with no exposed metal, so no part a user can touch can ever become live — which is why it needs no earth",
          "marks": 1
        },
        {
          "text": "Its fuse protects the cable, stopping the flex overheating and catching fire if too large a current is drawn",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "最后一分最容易被漏掉。既没有地线、也没有会带电的金属，保险丝就不是在保护使用者免受外壳危害——它保护的是线路。",
        "en": "The last mark is the one that catches people out. With no earth and no metal to become live, the fuse is not protecting the user from the casing — it is protecting the wiring."
      }
    },
    {
      "id": "0625-4-4-cp5",
      "syllabus": [
        "0625/4.4.1"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 3,
      "stem": "State three electrical hazards in the home and, for each, state why it is dangerous.",
      "markScheme": [
        {
          "text": "Damaged insulation exposes a live conductor that could be touched",
          "marks": 1
        },
        {
          "text": "Overloaded sockets or cables that are too thin overheat and can start a fire",
          "marks": 1
        },
        {
          "text": "Damp conditions allow current to pass through water to earth, and through a person",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每种危险都要写出其后果。\"水很危险\"不算答案；\"水能导电，因此电流可以经人体流入大地\"才是。",
        "en": "Each hazard needs its consequence. \"Water is dangerous\" is not an answer; \"water conducts, so current can flow through a person to earth\" is."
      }
    },
    {
      "id": "0625-4-4-cp6",
      "syllabus": [
        "0625/4.3.1.2"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A diode is connected in series with a lamp and a cell. When the cell is reversed, the lamp does not light. Explain why.",
      "markScheme": [
        {
          "text": "A diode allows current to flow through it in one direction only",
          "marks": 1
        },
        {
          "text": "With the cell reversed the diode is connected the wrong way round, so it has a very high resistance and almost no current flows — so the lamp does not light",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "二极管并不是\"挡住电\"——它在反向时电阻极大。这也正是它被画成三角形抵住一条横杠的原因。",
        "en": "The diode does not \"block electricity\" — it has a very high resistance in reverse. That is why it is drawn as a triangle meeting a bar."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "supply",
        "label": {
          "zh": "电源电压",
          "en": "Supply voltage"
        },
        "min": 1,
        "max": 250,
        "step": 1,
        "defaultValue": 12,
        "unit": "V"
      },
      {
        "key": "r1",
        "label": {
          "zh": "第一个电阻 R₁",
          "en": "First resistance R₁"
        },
        "min": 1,
        "max": 1000,
        "step": 10,
        "defaultValue": 100,
        "unit": "Ω"
      },
      {
        "key": "r2",
        "label": {
          "zh": "第二个电阻 R₂",
          "en": "Second resistance R₂"
        },
        "min": 1,
        "max": 1000,
        "step": 10,
        "defaultValue": 200,
        "unit": "Ω"
      },
      {
        "key": "fuseRating",
        "label": {
          "zh": "所装保险丝",
          "en": "Fuse fitted"
        },
        "min": 1,
        "max": 13,
        "step": 1,
        "defaultValue": 3,
        "unit": "A"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "4-4-safety",
        "hint": {
          "en": "Raise one resistance and watch both voltages — one rises as the other falls, and they always add to the supply.",
          "zh": "提高其中一个电阻，同时看两个电压——一个升高另一个降低，两者之和始终等于电源电压。"
        },
        "params": [
          {
            "key": "supply",
            "label": {
              "en": "Supply voltage",
              "zh": "电源电压"
            },
            "unit": "V",
            "min": 1,
            "max": 250,
            "step": 1,
            "default": 12
          },
          {
            "key": "r1",
            "label": {
              "en": "First resistance R₁",
              "zh": "第一个电阻 R₁"
            },
            "unit": "Ω",
            "min": 1,
            "max": 1000,
            "step": 10,
            "default": 100
          },
          {
            "key": "r2",
            "label": {
              "en": "Second resistance R₂",
              "zh": "第二个电阻 R₂"
            },
            "unit": "Ω",
            "min": 1,
            "max": 1000,
            "step": 10,
            "default": 200
          },
          {
            "key": "fuseRating",
            "label": {
              "en": "Fuse fitted",
              "zh": "所装保险丝"
            },
            "unit": "A",
            "min": 1,
            "max": 13,
            "step": 1,
            "default": 3,
            "options": [
              {
                "value": 1,
                "label": {
                  "en": "1 A",
                  "zh": "1 A"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "3 A",
                  "zh": "3 A"
                }
              },
              {
                "value": 5,
                "label": {
                  "en": "5 A",
                  "zh": "5 A"
                }
              },
              {
                "value": 10,
                "label": {
                  "en": "10 A",
                  "zh": "10 A"
                }
              },
              {
                "value": 13,
                "label": {
                  "en": "13 A",
                  "zh": "13 A"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "v1",
            "label": {
              "en": "Voltage across R₁",
              "zh": "R₁ 两端的电压"
            },
            "unit": "V",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "v2",
            "label": {
              "en": "Voltage across R₂",
              "zh": "R₂ 两端的电压"
            },
            "unit": "V",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "current",
            "label": {
              "en": "Current in the circuit",
              "zh": "电路中的电流"
            },
            "unit": "A",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "recommendedFuse",
            "label": {
              "en": "Fuse it should have",
              "zh": "应装的保险丝"
            },
            "unit": "A",
            "sigFigs": 2,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A 1 : 2 divider",
              "zh": "1∶2 分压"
            },
            "params": {
              "supply": 12,
              "r1": 100,
              "r2": 200,
              "fuseRating": 1
            }
          },
          {
            "label": {
              "en": "Equal resistances",
              "zh": "两电阻相等"
            },
            "params": {
              "supply": 12,
              "r1": 150,
              "r2": 150,
              "fuseRating": 1
            }
          },
          {
            "label": {
              "en": "Most of the supply on R₁",
              "zh": "大部分电压落在 R₁ 上"
            },
            "params": {
              "supply": 12,
              "r1": 900,
              "r2": 100,
              "fuseRating": 1
            }
          },
          {
            "label": {
              "en": "A fuse that blows in use",
              "zh": "正常使用就熔断的保险丝"
            },
            "params": {
              "supply": 230,
              "r1": 20,
              "r2": 20,
              "fuseRating": 1
            }
          },
          {
            "label": {
              "en": "A fuse far too large",
              "zh": "额定值过大的保险丝"
            },
            "params": {
              "supply": 12,
              "r1": 100,
              "r2": 200,
              "fuseRating": 13
            }
          },
          {
            "label": {
              "en": "A mains appliance",
              "zh": "一台市电电器"
            },
            "params": {
              "supply": 230,
              "r1": 30,
              "r2": 30,
              "fuseRating": 5
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
        "zh": "1∶2 分压",
        "en": "A 1 : 2 divider"
      },
      "params": {
        "supply": 12,
        "r1": 100,
        "r2": 200,
        "fuseRating": 1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "两电阻相等",
        "en": "Equal resistances"
      },
      "params": {
        "supply": 12,
        "r1": 150,
        "r2": 150,
        "fuseRating": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "大部分电压落在 R₁ 上",
        "en": "Most of the supply on R₁"
      },
      "params": {
        "supply": 12,
        "r1": 900,
        "r2": 100,
        "fuseRating": 1
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "正常使用就熔断的保险丝",
        "en": "A fuse that blows in use"
      },
      "params": {
        "supply": 230,
        "r1": 20,
        "r2": 20,
        "fuseRating": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "额定值过大的保险丝",
        "en": "A fuse far too large"
      },
      "params": {
        "supply": 12,
        "r1": 100,
        "r2": 200,
        "fuseRating": 13
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "一台市电电器",
        "en": "A mains appliance"
      },
      "params": {
        "supply": 230,
        "r1": 30,
        "r2": 30,
        "fuseRating": 5
      }
    }
  ]
};
