/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-3-2-series-parallel
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/4-3-2-series-parallel/narration';
import { equations } from '../../igcse-src/0625/4-3-2-series-parallel/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/4-3-2-series-parallel/kernel';

export const kp432SeriesParallel: KnowledgePoint = {
  "id": "igcse-0625-4-3-2-series-parallel",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "串联与并联电路",
    "en": "Series and parallel circuits"
  },
  "summary": {
    "zh": "在串联与并联之间切换，观察电荷流动的变化。电流规律、电压规律与总电阻，都在同一张电路图上。",
    "en": "Switch a circuit between series and parallel and watch the charge flow change. Current rules, p.d. rules and combined resistance, all on one diagram."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/4.3.2.1",
      "0625/4.3.2.2",
      "0625/4.3.2.3",
      "0625/4.3.2.4",
      "0625/4.3.2.5",
      "0625/4.3.2.6",
      "0625/4.3.2.7",
      "0625/4.3.2.8",
      "0625/4.3.2.9",
      "0625/4.3.2.10",
      "0625/4.2.2.2",
      "0625/4.2.3.5"
    ]
  },
  "keywords": {
    "zh": [
      "串联",
      "并联",
      "节点",
      "电势差",
      "电流表",
      "电压表"
    ],
    "en": [
      "series",
      "parallel",
      "junction",
      "potential difference",
      "ammeter",
      "voltmeter"
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
          "知道串联电路各处电流相同。",
          "会连接并使用串联与并联电路。",
          "计算串联电源的总电动势。",
          "计算串联电阻的总电阻。",
          "说明干路电流大于各并联支路电流。",
          "说明两并联电阻的总电阻小于任一支路。",
          "说明灯泡并联的优点。",
          "把电流表串联、电压表并联在被测元件两端。",
          "在计算中使用节点电流与电压关系。（Extended）",
          "计算两并联电阻的总电阻。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "串联：电流相同，电压分配"
      },
      {
        "type": "paragraph",
        "text": "电流在各处都相同。两个电阻读到的电流一样。这就是为什么电流表放在串联回路的任何位置读数都相同。"
      },
      {
        "type": "paragraph",
        "text": "但电压不同。四十欧的电阻分到八伏，二十欧的分到四伏。电阻加倍，分压加倍——两者相加正好等于电源的十二伏。"
      },
      {
        "type": "formula",
        "latex": "V_1 + V_2 = \\text{e.m.f.}"
      },
      {
        "type": "heading",
        "text": "电表怎么接"
      },
      {
        "type": "paragraph",
        "text": "电流表串联接在导线里，被测电流要穿过它。电压表并联接在元件两端，测量两点间的电压而不分走电流。"
      },
      {
        "type": "paragraph",
        "text": "接反了电路就不能工作。电压表串联时电阻极大，几乎没有电流能通过。"
      },
      {
        "type": "formula",
        "latex": "R = \\frac{V}{I}",
        "caption": "电阻等于元件两端的电压除以通过它的电流。"
      },
      {
        "type": "formula",
        "latex": "R_{\\text{series}} = R_1 + R_2",
        "caption": "串联时电阻直接相加——总电阻总是大于任一个。"
      },
      {
        "type": "formula",
        "latex": "\\frac{1}{R_{\\text{parallel}}} = \\frac{1}{R_1} + \\frac{1}{R_2}",
        "caption": "并联时倒数相加，所以总电阻总是小于任一个。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "series（串联）：元件依次相连，电流只有一条路径。",
          "parallel（并联）：元件接在同两点之间，电流有多条路径可选。",
          "junction（节点）：导线交汇、电流分流或汇合的点。流入等于流出。",
          "potential difference（电势差）：单位电荷通过元件时所做的功，单位伏特。也叫电压。",
          "ammeter（电流表）：测电流。串联接在导线中，因为电流必须穿过它。",
          "voltmeter（电压表）：测电压。并联接在元件两端，因为它比较的是两点之间。"
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
          "Know that the current is the same at every point in a series circuit.",
          "Construct and use series and parallel circuits.",
          "Calculate the combined e.m.f. of sources in series.",
          "Calculate the combined resistance of resistors in series.",
          "State that the supply current is larger than the current in each parallel branch.",
          "State that two resistors in parallel combine to less than either alone.",
          "State the advantages of connecting lamps in parallel.",
          "Place an ammeter in series and a voltmeter in parallel with the component measured.",
          "Use the junction and p.d. rules in calculations. (Extended)",
          "Calculate the combined resistance of two resistors in parallel. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Series: current same, p.d. shares"
      },
      {
        "type": "paragraph",
        "text": "The current is the same at every point. Both resistors read the same amps. That is why an ammeter can go anywhere in a series loop and give the same answer."
      },
      {
        "type": "paragraph",
        "text": "But the p.d. does not. The forty-ohm resistor takes eight volts and the twenty-ohm resistor takes four. Twice the resistance, twice the share — and together they add up to the full twelve volts of the supply."
      },
      {
        "type": "formula",
        "latex": "V_1 + V_2 = \\text{e.m.f.}"
      },
      {
        "type": "heading",
        "text": "Where the meters go"
      },
      {
        "type": "paragraph",
        "text": "An ammeter goes in series, in the wire, so the current it measures passes through it. A voltmeter goes in parallel, across the component, so it samples the p.d. between two points without taking the current."
      },
      {
        "type": "paragraph",
        "text": "Swap them by mistake and the circuit breaks. A voltmeter in series has such a high resistance that almost no current flows at all."
      },
      {
        "type": "formula",
        "latex": "R = \\frac{V}{I}",
        "caption": "Resistance is the p.d. across a component divided by the current through it."
      },
      {
        "type": "formula",
        "latex": "R_{\\text{series}} = R_1 + R_2",
        "caption": "In series the resistances simply add — the total is always larger than either one."
      },
      {
        "type": "formula",
        "latex": "\\frac{1}{R_{\\text{parallel}}} = \\frac{1}{R_1} + \\frac{1}{R_2}",
        "caption": "In parallel the reciprocals add, so the total is always smaller than either one."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "series (串联): Components connected one after another, so there is a single path for the current.",
          "parallel (并联): Components connected across the same two points, so the current has a choice of paths.",
          "junction (节点): A point where wires meet and current divides or recombines. The current in equals the current out.",
          "potential difference (电势差): The work done per unit charge passing through a component, measured in volts. Often called p.d. or voltage.",
          "ammeter (电流表): Measures current. Connected in series, in the wire, because the current must pass through it.",
          "voltmeter (电压表): Measures p.d. Connected in parallel, across the component, because it compares two points."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "4-3-2-cp1",
      "syllabus": [
        "0625/4.3.2.1"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 1,
      "stem": "Three lamps are connected in series with a cell. State how the current at a point just after the cell compares with the current at a point between the second and third lamps.",
      "options": [
        "The currents are the same",
        "The current after the cell is larger",
        "The current after the cell is smaller",
        "It depends on the resistance of the lamps"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "The current is the same at both points",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "电流不会被元件\"用掉\"。在单一回路中电荷既不能堆积也不会消失，所以串联各处电流完全相同。",
        "en": "Current is not \"used up\" by components. Charge cannot pile up or vanish in a single loop, so the current is identical everywhere in series."
      }
    },
    {
      "id": "4-3-2-cp2",
      "syllabus": [
        "0625/4.3.2.4",
        "0625/4.3.2.8"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 4,
      "stem": "A 12 V battery is connected in series with a 30 Ω resistor and a 60 Ω resistor. Calculate the current in the circuit and the p.d. across the 60 Ω resistor.",
      "markScheme": [
        {
          "text": "Total resistance = 30 + 60 = 90 Ω",
          "marks": 1
        },
        {
          "text": "Uses I = V / R",
          "marks": 1
        },
        {
          "text": "I = 0.13 A (accept 0.133 A)",
          "marks": 1,
          "alternatives": [
            "12 / 90"
          ]
        },
        {
          "text": "p.d. = 0.133 × 60 = 8.0 V",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "先求总电阻，再求电流，最后求分压。自查：两个分压之和应等于 12 V，且较大的电阻分到较大的电压。",
        "en": "Find the total resistance first, then the current, then the individual p.d. Check your answer: the two p.d.s should add to 12 V, and the larger resistor should get the larger share."
      }
    },
    {
      "id": "4-3-2-cp3",
      "syllabus": [
        "0625/4.3.2.6",
        "0625/4.3.2.10"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A 30 Ω resistor and a 60 Ω resistor are connected in parallel. Calculate their combined resistance.",
      "markScheme": [
        {
          "text": "Uses 1/R = 1/R₁ + 1/R₂ or R = R₁R₂ / (R₁ + R₂)",
          "marks": 1
        },
        {
          "text": "Correct substitution",
          "marks": 1,
          "alternatives": [
            "(30 × 60) / 90"
          ]
        },
        {
          "text": "20 Ω",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "常见错误是忘了最后取倒数，写成 0.05 Ω。自查：答案必须小于 30 Ω，即两者中较小的那个。",
        "en": "A very common error is forgetting the final reciprocal and writing 0.05 Ω. Sanity-check the answer: it must be smaller than 30 Ω, the smaller of the two resistors."
      }
    },
    {
      "id": "4-3-2-cp4",
      "syllabus": [
        "0625/4.3.2.7"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Household lighting circuits connect lamps in parallel rather than in series. Explain one advantage of this.",
      "markScheme": [
        {
          "text": "Each lamp receives the full mains p.d., so all lamps are at full brightness",
          "marks": 1,
          "alternatives": [
            "lamps are brighter"
          ]
        },
        {
          "text": "If one lamp fails the others still work, because each has its own path for the current",
          "marks": 1,
          "alternatives": [
            "can be switched independently"
          ]
        }
      ],
      "examinerNote": {
        "zh": "命令词是 Explain，每个优点都要给出理由。\"一个坏了其他还亮\"只有说明原因（每条支路是独立路径）才能得分。",
        "en": "The command word is Explain, so each advantage needs its reason. \"One can break and the others stay on\" earns the mark only when you say why — each branch is a separate path."
      }
    },
    {
      "id": "4-3-2-cp5",
      "syllabus": [
        "0625/4.2.2.2",
        "0625/4.2.3.5"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 2,
      "stem": "A student wants to measure the current through a resistor and the p.d. across it. Describe how each meter should be connected.",
      "markScheme": [
        {
          "text": "The ammeter is connected in series with the resistor",
          "marks": 1
        },
        {
          "text": "The voltmeter is connected in parallel with (across) the resistor",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "电压表串联时电阻极大，几乎截断电流；电流表并联则会把元件短路。",
        "en": "A voltmeter connected in series has such a high resistance that it stops almost all the current; an ammeter connected in parallel short-circuits the component."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "parallel",
        "label": {
          "zh": "电路类型",
          "en": "Circuit type"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "emf",
        "label": {
          "zh": "电源电动势",
          "en": "Supply e.m.f."
        },
        "min": 1,
        "max": 12,
        "step": 0.5,
        "defaultValue": 12,
        "unit": "V"
      },
      {
        "key": "r1",
        "label": {
          "zh": "电阻 R₁",
          "en": "Resistance R₁"
        },
        "min": 5,
        "max": 100,
        "step": 5,
        "defaultValue": 20,
        "unit": "Ω"
      },
      {
        "key": "r2",
        "label": {
          "zh": "电阻 R₂",
          "en": "Resistance R₂"
        },
        "min": 5,
        "max": 100,
        "step": 5,
        "defaultValue": 40,
        "unit": "Ω"
      },
      {
        "key": "t",
        "label": {
          "zh": "时间",
          "en": "Time"
        },
        "min": 0,
        "max": 60,
        "step": 0.01,
        "defaultValue": 0,
        "unit": "s"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "circuit",
        "kernel": "4-3-2-series-parallel",
        "animate": {
          "param": "t",
          "speed": 1,
          "loop": 60
        },
        "hint": {
          "en": "Switch between series and parallel and watch the dots — in parallel the main wire carries more of them than either branch.",
          "zh": "在串联与并联之间切换，注意蓝点——并联时主干线上的点比任一支路都多。"
        },
        "params": [
          {
            "key": "parallel",
            "label": {
              "en": "Circuit type",
              "zh": "电路类型"
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
                  "en": "Series",
                  "zh": "串联"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Parallel",
                  "zh": "并联"
                }
              }
            ]
          },
          {
            "key": "emf",
            "label": {
              "en": "Supply e.m.f.",
              "zh": "电源电动势"
            },
            "unit": "V",
            "symbol": "E",
            "min": 1,
            "max": 12,
            "step": 0.5,
            "default": 12
          },
          {
            "key": "r1",
            "label": {
              "en": "Resistance R₁",
              "zh": "电阻 R₁"
            },
            "unit": "Ω",
            "symbol": "R_1",
            "min": 5,
            "max": 100,
            "step": 5,
            "default": 20
          },
          {
            "key": "r2",
            "label": {
              "en": "Resistance R₂",
              "zh": "电阻 R₂"
            },
            "unit": "Ω",
            "symbol": "R_2",
            "min": 5,
            "max": 100,
            "step": 5,
            "default": 40
          },
          {
            "key": "t",
            "label": {
              "en": "Time",
              "zh": "时间"
            },
            "unit": "s",
            "min": 0,
            "max": 60,
            "step": 0.01,
            "default": 0,
            "hidden": true
          }
        ],
        "readouts": [
          {
            "key": "totalResistance",
            "label": {
              "en": "Total resistance",
              "zh": "总电阻"
            },
            "unit": "Ω",
            "sigFigs": 3
          },
          {
            "key": "supplyCurrent",
            "label": {
              "en": "Supply current",
              "zh": "干路电流"
            },
            "unit": "A",
            "symbol": "I",
            "sigFigs": 3
          },
          {
            "key": "sumOfPds",
            "label": {
              "en": "V₁ + V₂",
              "zh": "V₁ + V₂"
            },
            "unit": "V",
            "sigFigs": 3
          },
          {
            "key": "sumOfCurrents",
            "label": {
              "en": "I₁ + I₂",
              "zh": "I₁ + I₂"
            },
            "unit": "A",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Series 20 Ω + 40 Ω",
              "zh": "串联 20 Ω + 40 Ω"
            },
            "params": {
              "parallel": 0,
              "emf": 12,
              "r1": 20,
              "r2": 40
            }
          },
          {
            "label": {
              "en": "Same pair in parallel",
              "zh": "同一对并联"
            },
            "params": {
              "parallel": 1,
              "emf": 12,
              "r1": 20,
              "r2": 40
            }
          },
          {
            "label": {
              "en": "Two equal resistors",
              "zh": "两个相等电阻"
            },
            "params": {
              "parallel": 1,
              "emf": 12,
              "r1": 20,
              "r2": 20
            }
          },
          {
            "label": {
              "en": "Very unequal branches",
              "zh": "两支路差别极大"
            },
            "params": {
              "parallel": 1,
              "emf": 12,
              "r1": 5,
              "r2": 100
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
        "zh": "串联 20 Ω + 40 Ω",
        "en": "Series 20 Ω + 40 Ω"
      },
      "params": {
        "parallel": 0,
        "emf": 12,
        "r1": 20,
        "r2": 40
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "同一对并联",
        "en": "Same pair in parallel"
      },
      "params": {
        "parallel": 1,
        "emf": 12,
        "r1": 20,
        "r2": 40
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "两个相等电阻",
        "en": "Two equal resistors"
      },
      "params": {
        "parallel": 1,
        "emf": 12,
        "r1": 20,
        "r2": 20
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "两支路差别极大",
        "en": "Very unequal branches"
      },
      "params": {
        "parallel": 1,
        "emf": 12,
        "r1": 5,
        "r2": 100
      }
    }
  ]
};
