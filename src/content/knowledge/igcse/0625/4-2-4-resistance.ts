/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-2-4-resistance
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/4-2-4-resistance/narration';
import { equations } from '../../igcse-src/0625/4-2-4-resistance/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/4-2-4-resistance/kernel';

export const kp424Resistance: KnowledgePoint = {
  "id": "igcse-0625-4-2-4-resistance",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "电阻与伏安特性",
    "en": "Resistance and I–V characteristics"
  },
  "summary": {
    "zh": "在同一坐标上切换定值电阻、灯丝灯泡与二极管，并改变导线形状，看电阻如何随之变化。",
    "en": "Flip between a resistor, a filament lamp and a diode on the same axes, and stretch a wire to see resistance change with its shape."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/4.2.4.1",
      "0625/4.2.4.2",
      "0625/4.2.4.3",
      "0625/4.2.4.4",
      "0625/4.2.4.5"
    ]
  },
  "keywords": {
    "zh": [
      "电阻",
      "欧姆导体",
      "灯丝灯泡",
      "二极管",
      "横截面积"
    ],
    "en": [
      "resistance",
      "ohmic conductor",
      "filament lamp",
      "diode",
      "cross-sectional area"
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
          "记住并使用 R = V / I。",
          "描述用电压表和电流表测电阻的实验。",
          "定性说明金属导线电阻与长度及横截面积的关系。",
          "画出并解释定值电阻、灯丝灯泡与二极管的伏安特性曲线。（Extended）",
          "对金属导体使用 R ∝ l 与 R ∝ 1 / A。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "在同一坐标上切换定值电阻、灯丝灯泡与二极管，并改变导线形状，看电阻如何随之变化。"
      },
      {
        "type": "formula",
        "latex": "R = \\frac{V}{I}",
        "caption": "电阻等于元件两端电压除以通过它的电流。"
      },
      {
        "type": "formula",
        "latex": "R \\propto \\dfrac{l}{A}",
        "caption": "电阻与长度成正比，与横截面积成反比。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "resistance（电阻）：元件对电流阻碍作用的大小。R = V / I，单位欧姆。",
          "ohmic conductor（欧姆导体）：电阻保持恒定的元件，其伏安特性是过原点的直线。",
          "filament lamp（灯丝灯泡）：内有发光细金属丝的灯泡。灯丝受热后电阻增大，伏安特性因此弯曲。",
          "diode（二极管）：只在一个方向导电，且需超过一个较小正向电压才导通的元件。",
          "cross-sectional area（横截面积）：垂直切开导线所得截面的面积。导线越粗，面积越大，电阻越小。"
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
          "Recall and use R = V / I.",
          "Describe an experiment to determine resistance using a voltmeter and an ammeter.",
          "State qualitatively how the resistance of a metallic wire depends on its length and cross-sectional area.",
          "Sketch and explain the I–V graphs for a fixed resistor, a filament lamp and a diode. (Extended)",
          "Use R ∝ l and R ∝ 1 / A for a metallic conductor. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Flip between a resistor, a filament lamp and a diode on the same axes, and stretch a wire to see resistance change with its shape."
      },
      {
        "type": "formula",
        "latex": "R = \\frac{V}{I}",
        "caption": "Resistance is the p.d. across a component divided by the current through it."
      },
      {
        "type": "formula",
        "latex": "R \\propto \\dfrac{l}{A}",
        "caption": "Resistance is proportional to length and inversely proportional to cross-sectional area."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "resistance (电阻): How strongly a component opposes the current through it. R = V / I, measured in ohms.",
          "ohmic conductor (欧姆导体): A component whose resistance stays constant, so its I–V graph is a straight line through the origin.",
          "filament lamp (灯丝灯泡): A lamp with a thin metal wire that glows. Its resistance rises as it heats, so its I–V graph curves.",
          "diode (二极管): A component that conducts in one direction only, and only above a small forward voltage.",
          "cross-sectional area (横截面积): The area of a slice through the wire. A thicker wire has a larger area and a lower resistance."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "4-2-4-cp1",
      "syllabus": [
        "0625/4.2.4.1"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 2,
      "stem": "The p.d. across a resistor is 9.0 V and the current through it is 0.30 A. Calculate the resistance of the resistor.",
      "markScheme": [
        {
          "text": "Uses R = V / I",
          "marks": 1,
          "alternatives": [
            "9.0 / 0.30"
          ]
        },
        {
          "text": "30 Ω",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "注意题目中电流可能以毫安给出。300 mA 即 0.30 A；直接代入 300 会得到 0.03 Ω，差了一千倍。",
        "en": "Watch for currents given in milliamps. 300 mA is 0.30 A; substituting 300 gives 0.03 Ω, which is out by a factor of a thousand."
      }
    },
    {
      "id": "4-2-4-cp2",
      "syllabus": [
        "0625/4.2.4.4"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "The I–V graph for a filament lamp is a curve rather than a straight line. Explain why.",
      "markScheme": [
        {
          "text": "As the p.d. increases, the current increases and the filament gets hotter",
          "marks": 1
        },
        {
          "text": "The resistance of the filament increases with temperature",
          "marks": 1
        },
        {
          "text": "So the current increases less than in proportion to the p.d., and the graph bends towards the voltage axis",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "因果链要完整：电流变大 → 温度升高 → 电阻增大 → 曲线弯曲。只写\"电阻变化\"最多得一分。",
        "en": "The chain must be complete: more current → hotter → higher resistance → curve. Saying only \"the resistance changes\" earns one mark at most."
      }
    },
    {
      "id": "4-2-4-cp3",
      "syllabus": [
        "0625/4.2.4.5"
      ],
      "tier": "supplement",
      "commandWord": "Determine",
      "marks": 3,
      "stem": "A wire has a resistance of 8.0 Ω. A second wire of the same material is twice as long and has twice the cross-sectional area. Determine the resistance of the second wire.",
      "markScheme": [
        {
          "text": "Doubling the length doubles the resistance",
          "marks": 1
        },
        {
          "text": "Doubling the cross-sectional area halves the resistance",
          "marks": 1
        },
        {
          "text": "The two effects cancel, so R = 8.0 Ω",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "先分别处理两个变化，再合起来。只注意到其中一个的同学会答 16 Ω 或 4.0 Ω。",
        "en": "Deal with the two changes separately, then combine. Candidates who spot only one of them answer 16 Ω or 4.0 Ω."
      }
    },
    {
      "id": "4-2-4-cp4",
      "syllabus": [
        "0625/4.2.4.4"
      ],
      "tier": "supplement",
      "commandWord": "Identify",
      "marks": 1,
      "stem": "An I–V graph shows no current for all negative p.d., no current up to about +0.7 V, and then a steeply rising current. Identify the component.",
      "options": [
        "A diode",
        "A fixed resistor",
        "A filament lamp",
        "A thermistor"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "A diode",
          "marks": 1,
          "alternatives": [
            "light-emitting diode"
          ]
        }
      ],
      "examinerNote": {
        "zh": "在本考纲的元件中，只有二极管单向导电。定值电阻和灯泡都是对称导电的。",
        "en": "One-way conduction is unique to the diode among the components on this syllabus. Resistors and lamps both conduct symmetrically."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "component",
        "label": {
          "zh": "元件",
          "en": "Component"
        },
        "min": 0,
        "max": 2,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "resistance",
        "label": {
          "zh": "冷态电阻",
          "en": "Resistance when cold"
        },
        "min": 5,
        "max": 100,
        "step": 5,
        "defaultValue": 20,
        "unit": "Ω"
      },
      {
        "key": "lengthFactor",
        "label": {
          "zh": "导线长度",
          "en": "Wire length"
        },
        "min": 0.5,
        "max": 3,
        "step": 0.5,
        "defaultValue": 1,
        "unit": "× reference"
      },
      {
        "key": "areaFactor",
        "label": {
          "zh": "横截面积",
          "en": "Cross-sectional area"
        },
        "min": 0.5,
        "max": 4,
        "step": 0.5,
        "defaultValue": 1,
        "unit": "× reference"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "4-2-4-resistance",
        "hint": {
          "en": "Switch component to compare the three graph shapes — these are the sketches exams ask for.",
          "zh": "切换元件，比较三种图形——考试常要求画的正是这三种。"
        },
        "params": [
          {
            "key": "component",
            "label": {
              "en": "Component",
              "zh": "元件"
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
                  "en": "Fixed resistor",
                  "zh": "定值电阻"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Filament lamp",
                  "zh": "灯丝灯泡"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Diode",
                  "zh": "二极管"
                }
              }
            ]
          },
          {
            "key": "resistance",
            "label": {
              "en": "Resistance when cold",
              "zh": "冷态电阻"
            },
            "unit": "Ω",
            "symbol": "R",
            "min": 5,
            "max": 100,
            "step": 5,
            "default": 20
          },
          {
            "key": "lengthFactor",
            "label": {
              "en": "Wire length",
              "zh": "导线长度"
            },
            "unit": "× reference",
            "symbol": "l",
            "min": 0.5,
            "max": 3,
            "step": 0.5,
            "default": 1
          },
          {
            "key": "areaFactor",
            "label": {
              "en": "Cross-sectional area",
              "zh": "横截面积"
            },
            "unit": "× reference",
            "symbol": "A",
            "min": 0.5,
            "max": 4,
            "step": 0.5,
            "default": 1
          }
        ],
        "readouts": [
          {
            "key": "effectiveResistance",
            "label": {
              "en": "Resistance from geometry",
              "zh": "由形状决定的电阻"
            },
            "unit": "Ω",
            "sigFigs": 3
          },
          {
            "key": "measuredResistance",
            "label": {
              "en": "Measured V / I at 4 V",
              "zh": "4 V 处测得的 V / I"
            },
            "unit": "Ω",
            "sigFigs": 3
          },
          {
            "key": "currentAt4V",
            "label": {
              "en": "Current at 4 V",
              "zh": "4 V 时的电流"
            },
            "unit": "A",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Fixed resistor",
              "zh": "定值电阻"
            },
            "params": {
              "component": 0,
              "resistance": 20,
              "lengthFactor": 1,
              "areaFactor": 1
            }
          },
          {
            "label": {
              "en": "Filament lamp",
              "zh": "灯丝灯泡"
            },
            "params": {
              "component": 1,
              "resistance": 20,
              "lengthFactor": 1,
              "areaFactor": 1
            }
          },
          {
            "label": {
              "en": "Diode",
              "zh": "二极管"
            },
            "params": {
              "component": 2,
              "resistance": 20,
              "lengthFactor": 1,
              "areaFactor": 1
            }
          },
          {
            "label": {
              "en": "Three times longer",
              "zh": "长度三倍"
            },
            "params": {
              "component": 0,
              "resistance": 20,
              "lengthFactor": 3,
              "areaFactor": 1
            }
          },
          {
            "label": {
              "en": "Four times thicker",
              "zh": "截面四倍"
            },
            "params": {
              "component": 0,
              "resistance": 20,
              "lengthFactor": 1,
              "areaFactor": 4
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
        "zh": "定值电阻",
        "en": "Fixed resistor"
      },
      "params": {
        "component": 0,
        "resistance": 20,
        "lengthFactor": 1,
        "areaFactor": 1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "灯丝灯泡",
        "en": "Filament lamp"
      },
      "params": {
        "component": 1,
        "resistance": 20,
        "lengthFactor": 1,
        "areaFactor": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "二极管",
        "en": "Diode"
      },
      "params": {
        "component": 2,
        "resistance": 20,
        "lengthFactor": 1,
        "areaFactor": 1
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "长度三倍",
        "en": "Three times longer"
      },
      "params": {
        "component": 0,
        "resistance": 20,
        "lengthFactor": 3,
        "areaFactor": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "截面四倍",
        "en": "Four times thicker"
      },
      "params": {
        "component": 0,
        "resistance": 20,
        "lengthFactor": 1,
        "areaFactor": 4
      }
    }
  ]
};
