/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-5-2-moments
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/1-5-2-moments/narration';
import { equations } from '../../igcse-src/0625/1-5-2-moments/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/1-5-2-moments/kernel';

export const kp152Moments: KnowledgePoint = {
  "id": "igcse-0625-1-5-2-moments",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "力矩与平衡",
    "en": "Moments and balance"
  },
  "summary": {
    "zh": "在杠杆上移动重物，看它如何倾斜。转动效果取决于到支点的距离，而不只是力的大小。",
    "en": "Move masses along a beam and watch it tip. Turning effect depends on distance from the pivot, not just on force."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/1.5.2.1",
      "0625/1.5.2.2",
      "0625/1.5.2.3",
      "0625/1.5.2.4",
      "0625/1.5.2.5",
      "0625/1.5.2.6"
    ]
  },
  "keywords": {
    "zh": [
      "力矩",
      "支点",
      "垂直距离",
      "力矩平衡原理",
      "平衡"
    ],
    "en": [
      "moment",
      "pivot",
      "perpendicular distance",
      "principle of moments",
      "equilibrium"
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
          "把力矩描述为转动效果，并举出日常例子。",
          "使用 力矩 = 力 × 到支点的垂直距离。",
          "对支点两侧各有一个力的杠杆应用力矩平衡原理。",
          "说明平衡条件：合力为零且合力矩为零。",
          "对每侧多个力的情形应用力矩平衡原理。（Extended）",
          "描述验证平衡时合力矩为零的实验。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "在杠杆上移动重物，看它如何倾斜。转动效果取决于到支点的距离，而不只是力的大小。"
      },
      {
        "type": "formula",
        "latex": "\\text{moment} = F \\times d",
        "caption": "力矩等于力乘以到支点的垂直距离。"
      },
      {
        "type": "formula",
        "latex": "F_1 d_1 = F_2 d_2",
        "caption": "平衡时，逆时针力矩等于顺时针力矩。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "moment（力矩）：力绕支点的转动效果：力 × 垂直距离。单位为 N m。",
          "pivot（支点）：物体转动时所绕的固定点，也称为支点。",
          "perpendicular distance（垂直距离）：从支点到力的作用线的最短距离——与力的方向垂直。",
          "principle of moments（力矩平衡原理）：对平衡的物体，绕任一支点的顺时针力矩总和等于逆时针力矩总和。",
          "equilibrium（平衡）：合力为零且合力矩为零。物体既不加速也不开始转动。"
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
          "Describe the moment of a force as its turning effect, and give everyday examples.",
          "Use moment = force × perpendicular distance from the pivot.",
          "Apply the principle of moments to a beam with one force each side of the pivot.",
          "State the condition for equilibrium: no resultant force and no resultant moment.",
          "Apply the principle of moments with more than one force each side. (Extended)",
          "Describe an experiment showing there is no resultant moment in equilibrium. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Move masses along a beam and watch it tip. Turning effect depends on distance from the pivot, not just on force."
      },
      {
        "type": "formula",
        "latex": "\\text{moment} = F \\times d",
        "caption": "The moment of a force equals the force multiplied by the perpendicular distance from the pivot."
      },
      {
        "type": "formula",
        "latex": "F_1 d_1 = F_2 d_2",
        "caption": "At balance, the anticlockwise moment equals the clockwise moment."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "moment (力矩): The turning effect of a force about a pivot: force × perpendicular distance. Measured in N m.",
          "pivot (支点): The fixed point about which an object turns. Also called the fulcrum.",
          "perpendicular distance (垂直距离): The shortest distance from the pivot to the line of action of the force — measured at right angles to it.",
          "principle of moments (力矩平衡原理): For a balanced object, the total clockwise moment about any pivot equals the total anticlockwise moment.",
          "equilibrium (平衡): No resultant force and no resultant moment. The object neither accelerates nor starts to turn."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "1-5-2-moments-cp1",
      "syllabus": [
        "0625/1.5.2.2"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 2,
      "stem": "A force of 12 N acts at a perpendicular distance of 0.25 m from a pivot. Calculate the moment of the force.",
      "markScheme": [
        {
          "text": "Uses moment = force × perpendicular distance",
          "marks": 1,
          "alternatives": [
            "12 × 0.25"
          ]
        },
        {
          "text": "3.0 N m",
          "marks": 1,
          "alternatives": [
            "3 N m"
          ]
        }
      ],
      "examinerNote": {
        "zh": "单位是牛顿米，不是牛顿。在多数力矩题中漏写或写错单位都会失分。",
        "en": "The unit is newton metres, not newtons. Dropping or mis-stating the unit costs a mark in most moment questions."
      }
    },
    {
      "id": "1-5-2-moments-cp2",
      "syllabus": [
        "0625/1.5.2.3"
      ],
      "tier": "core",
      "commandWord": "Determine",
      "marks": 3,
      "stem": "A uniform beam is pivoted at its centre. A weight of 6.0 N hangs 40 cm to the left of the pivot. A second weight hangs 30 cm to the right of the pivot and the beam balances. Determine the size of the second weight.",
      "markScheme": [
        {
          "text": "Uses the principle of moments: F₁d₁ = F₂d₂",
          "marks": 1
        },
        {
          "text": "Correct substitution, e.g. 6.0 × 0.40 = F₂ × 0.30",
          "marks": 1
        },
        {
          "text": "8.0 N",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "只要两边单位一致，距离可以都用厘米——但先换成米更稳妥。答案必须大于 6.0 N，因为第二个重物离支点更近。",
        "en": "Distances may stay in centimetres provided both sides use the same unit — but converting to metres first is safer. The answer must be larger than 6.0 N because the second weight is closer in."
      }
    },
    {
      "id": "1-5-2-moments-cp3",
      "syllabus": [
        "0625/1.5.2.4"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 2,
      "stem": "State the two conditions that must be satisfied for an object to be in equilibrium.",
      "markScheme": [
        {
          "text": "There is no resultant force on the object",
          "marks": 1
        },
        {
          "text": "There is no resultant moment about any point",
          "marks": 1,
          "alternatives": [
            "clockwise moments = anticlockwise moments"
          ]
        }
      ],
      "examinerNote": {
        "zh": "两个条件都要满足。力矩平衡但合力不为零的物体并不平衡——它会平动加速而不转动。",
        "en": "Both conditions are needed. An object with balanced moments but an unbalanced force is not in equilibrium — it accelerates without turning."
      }
    },
    {
      "id": "1-5-2-moments-cp4",
      "syllabus": [
        "0625/1.5.2.5"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 4,
      "stem": "A light rod is pivoted at one end. Weights of 4.0 N and 6.0 N hang at 0.20 m and 0.50 m from the pivot on the same side. A single upward force F acts at 0.80 m from the pivot and holds the rod horizontal. Calculate F.",
      "markScheme": [
        {
          "text": "Total clockwise moment = (4.0 × 0.20) + (6.0 × 0.50)",
          "marks": 1
        },
        {
          "text": "= 0.80 + 3.0 = 3.8 N m",
          "marks": 1
        },
        {
          "text": "Sets F × 0.80 equal to the total moment",
          "marks": 1
        },
        {
          "text": "F = 4.75 N (accept 4.8 N)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "同侧有多个力时，必须先把各力矩相加再求平衡。只用较大的那个重物会得到 3.75 N，丢掉三分。",
        "en": "With several forces on one side, every moment must be added before balancing. Using only the larger weight gives 3.75 N and loses three marks."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "leftMass",
        "label": {
          "zh": "左侧质量",
          "en": "Left mass"
        },
        "min": 0.1,
        "max": 5,
        "step": 0.1,
        "defaultValue": 2,
        "unit": "kg"
      },
      {
        "key": "leftDistance",
        "label": {
          "zh": "左侧距离",
          "en": "Left distance"
        },
        "min": 0.05,
        "max": 0.5,
        "step": 0.05,
        "defaultValue": 0.2,
        "unit": "m"
      },
      {
        "key": "rightMass",
        "label": {
          "zh": "右侧质量",
          "en": "Right mass"
        },
        "min": 0.1,
        "max": 5,
        "step": 0.1,
        "defaultValue": 1,
        "unit": "kg"
      },
      {
        "key": "rightDistance",
        "label": {
          "zh": "右侧距离",
          "en": "Right distance"
        },
        "min": 0.05,
        "max": 0.5,
        "step": 0.05,
        "defaultValue": 0.4,
        "unit": "m"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "beam",
        "kernel": "1-5-2-moments",
        "hint": {
          "en": "Change a distance without changing a mass — the beam still tips.",
          "zh": "只改距离、不改质量——杠杆照样会倾斜。"
        },
        "params": [
          {
            "key": "leftMass",
            "label": {
              "en": "Left mass",
              "zh": "左侧质量"
            },
            "unit": "kg",
            "symbol": "m_1",
            "min": 0.1,
            "max": 5,
            "step": 0.1,
            "default": 2
          },
          {
            "key": "leftDistance",
            "label": {
              "en": "Left distance",
              "zh": "左侧距离"
            },
            "unit": "m",
            "symbol": "d_1",
            "min": 0.05,
            "max": 0.5,
            "step": 0.05,
            "default": 0.2
          },
          {
            "key": "rightMass",
            "label": {
              "en": "Right mass",
              "zh": "右侧质量"
            },
            "unit": "kg",
            "symbol": "m_2",
            "min": 0.1,
            "max": 5,
            "step": 0.1,
            "default": 1
          },
          {
            "key": "rightDistance",
            "label": {
              "en": "Right distance",
              "zh": "右侧距离"
            },
            "unit": "m",
            "symbol": "d_2",
            "min": 0.05,
            "max": 0.5,
            "step": 0.05,
            "default": 0.4
          }
        ],
        "readouts": [
          {
            "key": "anticlockwiseMoment",
            "label": {
              "en": "Anticlockwise",
              "zh": "逆时针力矩"
            },
            "unit": "N m",
            "sigFigs": 3
          },
          {
            "key": "clockwiseMoment",
            "label": {
              "en": "Clockwise",
              "zh": "顺时针力矩"
            },
            "unit": "N m",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Balanced",
              "zh": "平衡"
            },
            "params": {
              "leftMass": 2,
              "leftDistance": 0.2,
              "rightMass": 1,
              "rightDistance": 0.4
            }
          },
          {
            "label": {
              "en": "Same distance, different mass",
              "zh": "距离相同，质量不同"
            },
            "params": {
              "leftMass": 3,
              "leftDistance": 0.3,
              "rightMass": 1,
              "rightDistance": 0.3
            }
          },
          {
            "label": {
              "en": "Child lifts an adult",
              "zh": "小孩跷起大人"
            },
            "params": {
              "leftMass": 5,
              "leftDistance": 0.1,
              "rightMass": 1,
              "rightDistance": 0.5
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
        "zh": "平衡",
        "en": "Balanced"
      },
      "params": {
        "leftMass": 2,
        "leftDistance": 0.2,
        "rightMass": 1,
        "rightDistance": 0.4
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "距离相同，质量不同",
        "en": "Same distance, different mass"
      },
      "params": {
        "leftMass": 3,
        "leftDistance": 0.3,
        "rightMass": 1,
        "rightDistance": 0.3
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "小孩跷起大人",
        "en": "Child lifts an adult"
      },
      "params": {
        "leftMass": 5,
        "leftDistance": 0.1,
        "rightMass": 1,
        "rightDistance": 0.5
      }
    }
  ]
};
