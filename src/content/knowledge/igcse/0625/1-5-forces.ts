/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-5-forces
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/1-5-forces/narration';
import { equations } from '../../igcse-src/0625/1-5-forces/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/1-5-forces/kernel';

export const kp15Forces: KnowledgePoint = {
  "id": "igcse-0625-1-5-forces",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "力",
    "en": "Forces"
  },
  "summary": {
    "zh": "这个模拟从未被告知\"终极速度\"。它只是 F = ma 加上一个随速度增大的力，速率变平是算出来的结果。",
    "en": "Nothing in this simulation was ever told about terminal velocity. It is F = ma with a force that grows as you go, and the levelling off falls out of the arithmetic."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/1.2.10",
      "0625/1.2.13",
      "0625/1.5.1.1",
      "0625/1.5.1.2",
      "0625/1.5.1.3",
      "0625/1.5.1.4",
      "0625/1.5.1.5",
      "0625/1.5.1.6",
      "0625/1.5.1.7",
      "0625/1.5.1.8",
      "0625/1.5.1.9",
      "0625/1.5.1.10",
      "0625/1.5.1.11",
      "0625/1.5.1.12",
      "0625/1.5.3.1",
      "0625/1.5.3.2",
      "0625/1.5.3.3"
    ]
  },
  "keywords": {
    "zh": [
      "合力",
      "弹簧常数",
      "比例极限",
      "终极速度",
      "重心"
    ],
    "en": [
      "resultant force",
      "spring constant",
      "limit of proportionality",
      "terminal velocity",
      "centre of gravity"
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
          "说明力可以改变物体的大小和形状，并求同一直线上各力的合力。",
          "绘制、作图并解读伸长量—载荷图，并描述该实验。",
          "定义弹簧常数并识别比例极限。（Extended）",
          "说明有无合力时会发生什么，并描述摩擦力与阻力。",
          "使用 F = ma，并知道力与加速度方向相同。（Extended）",
          "描述有无空气阻力时的下落，包括终极速度。（Extended）",
          "用垂直方向的力定性描述圆周运动。（Extended）",
          "说明重心的含义，测定不规则薄板的重心，并把其位置与稳定性联系起来。"
        ]
      },
      {
        "type": "paragraph",
        "text": "这个模拟从未被告知\"终极速度\"。它只是 F = ma 加上一个随速度增大的力，速率变平是算出来的结果。"
      },
      {
        "type": "formula",
        "latex": "F = kx",
        "caption": "胡克定律：伸长量与载荷成正比，但仅在比例极限以内成立。k 取自直线部分的梯度。"
      },
      {
        "type": "formula",
        "latex": "F = ma",
        "caption": "这里的 F 是合力，不是某一个力。力与加速度方向始终相同——因此阻力增大、合力减小时，加速度也随之减小。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "resultant force（合力）：与所有作用力共同效果相同的那个单一的力。合力为零意味着静止或匀速运动。",
          "spring constant（弹簧常数）：单位伸长量所需的力，k = F / x，单位 N/m。只能从图中直线部分的梯度读出。",
          "limit of proportionality（比例极限）：超过它之后伸长量不再与载荷成正比的那个载荷——即图线不再是直线之处。",
          "terminal velocity（终极速度）：当阻力增大到与重力相等、合力为零时所达到的恒定速率。",
          "centre of gravity（重心）：可以认为物体全部重力集中作用的那一点。"
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
          "State that forces can change the size and shape of an object, and find the resultant of forces along a line.",
          "Sketch, plot and interpret load–extension graphs, and describe the experiment.",
          "Define the spring constant and identify the limit of proportionality. (Extended)",
          "State what happens with and without a resultant force, and describe friction and drag.",
          "Use F = ma, knowing that force and acceleration share a direction. (Extended)",
          "Describe falling with and without air resistance, including terminal velocity. (Extended)",
          "Describe circular motion qualitatively in terms of a perpendicular force. (Extended)",
          "State what is meant by centre of gravity, find it for an irregular lamina, and relate its position to stability."
        ]
      },
      {
        "type": "paragraph",
        "text": "Nothing in this simulation was ever told about terminal velocity. It is F = ma with a force that grows as you go, and the levelling off falls out of the arithmetic."
      },
      {
        "type": "formula",
        "latex": "F = kx",
        "caption": "Hooke’s law: extension is proportional to load, but only up to the limit of proportionality. Take k from the gradient of the straight part."
      },
      {
        "type": "formula",
        "latex": "F = ma",
        "caption": "The resultant force, not any single force. Force and acceleration always point the same way — so as drag grows and the resultant shrinks, so does the acceleration."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "resultant force (合力): The single force that has the same effect as all the forces acting together. Zero means at rest or at constant velocity.",
          "spring constant (弹簧常数): Force per unit extension, k = F / x, in N/m. Read from the gradient of the straight part of the graph only.",
          "limit of proportionality (比例极限): The load beyond which extension is no longer proportional to load — where the graph stops being straight.",
          "terminal velocity (终极速度): The constant speed reached when drag has grown to equal the weight, so the resultant force is zero.",
          "centre of gravity (重心): The point at which the whole weight of an object may be taken to act."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0625-1-5-cp1",
      "syllabus": [
        "0625/1.2.13"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 5,
      "stem": "A skydiver steps from an aircraft, falls freely, and later reaches a constant speed. Explain, in terms of the forces acting, why the speed increases at first and then becomes constant.",
      "markScheme": [
        {
          "text": "At the start the speed is zero so there is no air resistance, and the only force is the weight",
          "marks": 1
        },
        {
          "text": "The resultant force is therefore equal to the weight, and the acceleration is 9.8 m/s²",
          "marks": 1
        },
        {
          "text": "As the speed increases the air resistance increases, so the resultant force decreases",
          "marks": 1
        },
        {
          "text": "Since F = ma the acceleration decreases, so the skydiver is still speeding up but less quickly",
          "marks": 1
        },
        {
          "text": "When the air resistance has grown to equal the weight, the resultant is zero, so there is no acceleration and the speed stays constant — terminal velocity",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "绝不要说重力减小了——它没有，质量和 g 都没变。变化的是空气阻力，从而改变了合力。",
        "en": "Never say the weight decreases — it does not, the mass and g are unchanged. What changes is the air resistance and therefore the resultant."
      }
    },
    {
      "id": "0625-1-5-cp2",
      "syllabus": [
        "0625/1.5.1.9",
        "0625/1.5.1.10"
      ],
      "tier": "supplement",
      "commandWord": "Determine",
      "marks": 3,
      "stem": "A load–extension graph for a spring is a straight line through the origin up to a load of 8.0 N, at which the extension is 0.16 m. Beyond 8.0 N the line curves. Determine the spring constant, and state what happens at 8.0 N.",
      "markScheme": [
        {
          "text": "k = F / x, taken from the straight portion of the graph",
          "marks": 1
        },
        {
          "text": "k = 8.0 / 0.16 = 50 N/m",
          "marks": 1
        },
        {
          "text": "At 8.0 N the spring reaches its limit of proportionality — beyond it the extension is no longer proportional to the load",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "只能取直线部分的梯度。用曲线上的点计算，得到的数字不是任何东西的弹簧常数。",
        "en": "Take the gradient from the straight part only. Using a point on the curve gives a number that is not the spring constant of anything."
      }
    },
    {
      "id": "0625-1-5-cp3",
      "syllabus": [
        "0625/1.5.1.11",
        "0625/1.5.1.3"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A car of mass 1200 kg has a forward driving force of 4200 N. The total resistive force is 1800 N. Calculate the acceleration of the car.",
      "markScheme": [
        {
          "text": "Resultant force = 4200 − 1800 = 2400 N",
          "marks": 1
        },
        {
          "text": "a = F / m = 2400 / 1200",
          "marks": 1
        },
        {
          "text": "= 2.0 m/s², in the direction of motion",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "F = ma 中的 F 是合力，不是牵引力。直接用 4200 会得到 3.5 m/s²，第一步之后的分数全部丢失。",
        "en": "F in F = ma is the resultant, not the driving force. Using 4200 straight off gives 3.5 m/s² and loses every mark after the first."
      }
    },
    {
      "id": "0625-1-5-cp4",
      "syllabus": [
        "0625/1.5.1.4",
        "0625/1.5.1.5"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A car travels along a straight road at a constant 20 m/s. Explain what this tells you about the forces acting on it.",
      "markScheme": [
        {
          "text": "The resultant force on the car is zero",
          "marks": 1
        },
        {
          "text": "because at constant velocity the driving force is balanced by the resistive forces of friction and air resistance",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "匀速意味着合力为零，而不是没有力。力是存在的——只是相互抵消了。",
        "en": "Constant velocity means zero resultant, not zero force. There are forces — they cancel."
      }
    },
    {
      "id": "0625-1-5-cp5",
      "syllabus": [
        "0625/1.5.3.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe an experiment to find the centre of gravity of an irregularly shaped piece of card.",
      "markScheme": [
        {
          "text": "Make a hole near the edge and hang the card from a pin so that it can swing freely",
          "marks": 1
        },
        {
          "text": "Hang a plumb line from the same pin and draw a line on the card along the string",
          "marks": 1
        },
        {
          "text": "Repeat from a different hole; the centre of gravity is where the lines cross",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "卡片必须能自由摆动，否则它不会停在重心位于针下方的位置。再画第三条线作检验是好做法，值得提及。",
        "en": "The card must swing freely, or it does not settle with its centre of gravity below the pin. A third line drawn as a check is good practice and worth mentioning."
      }
    },
    {
      "id": "0625-1-5-cp6",
      "syllabus": [
        "0625/1.5.3.3"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A bus is designed with heavy components mounted low in its chassis and a wide wheelbase. Explain how these features make it less likely to topple over.",
      "markScheme": [
        {
          "text": "Mounting heavy parts low keeps the centre of gravity low",
          "marks": 1
        },
        {
          "text": "A wide wheelbase gives a wide base",
          "marks": 1
        },
        {
          "text": "so the bus must be tilted through a larger angle before its centre of gravity passes outside the base, beyond which its weight would turn it further over",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "第三个得分点是机理：重心越出底面之外时才开始倾倒。重心低和底面宽都使这一点更难达到。",
        "en": "The third mark is the mechanism: toppling starts when the centre of gravity passes outside the base. Low and wide both make that harder to reach."
      }
    },
    {
      "id": "0625-1-5-cp7",
      "syllabus": [
        "0625/1.5.1.12"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A ball on a string is whirled in a horizontal circle at a constant speed. Explain why it is accelerating, and state the direction of the resultant force.",
      "markScheme": [
        {
          "text": "Velocity is a vector, and although the speed is constant the direction of motion is changing continuously",
          "marks": 1
        },
        {
          "text": "so the velocity is changing, which means the ball is accelerating",
          "marks": 1
        },
        {
          "text": "The resultant force acts towards the centre of the circle, perpendicular to the direction of motion",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这个力与运动方向垂直，因此只改变方向而不改变速率。剪断绳子，球沿切线飞出，而不是向外飞。",
        "en": "The force is perpendicular to the motion, which is why it changes direction without changing speed. Cut the string and the ball goes off along the tangent, not outwards."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "mode",
        "label": {
          "zh": "实验",
          "en": "Experiment"
        },
        "min": 1,
        "max": 2,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "springConstant",
        "label": {
          "zh": "弹簧常数",
          "en": "Spring constant"
        },
        "min": 1,
        "max": 200,
        "step": 1,
        "defaultValue": 25,
        "unit": "N/m"
      },
      {
        "key": "limitOfProportionality",
        "label": {
          "zh": "比例极限",
          "en": "Limit of proportionality"
        },
        "min": 1,
        "max": 40,
        "step": 1,
        "defaultValue": 10,
        "unit": "N"
      },
      {
        "key": "mass",
        "label": {
          "zh": "下落物体的质量",
          "en": "Mass of the falling object"
        },
        "min": 0.1,
        "max": 200,
        "step": 1,
        "defaultValue": 70,
        "unit": "kg"
      },
      {
        "key": "drag",
        "label": {
          "zh": "所受阻力的大小",
          "en": "How much drag it experiences"
        },
        "min": 0,
        "max": 20,
        "step": 0.25,
        "defaultValue": 0.25,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "1-5-forces",
        "hint": {
          "en": "Follow the spring past its limit, then switch to the falling object and watch the resultant force shrink to zero.",
          "zh": "先看弹簧越过比例极限，再切换到下落物体，观察合力如何减小到零。"
        },
        "params": [
          {
            "key": "mode",
            "label": {
              "en": "Experiment",
              "zh": "实验"
            },
            "unit": "",
            "min": 1,
            "max": 2,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 1,
                "label": {
                  "en": "Stretching a spring",
                  "zh": "拉伸弹簧"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Falling through air",
                  "zh": "在空气中下落"
                }
              }
            ]
          },
          {
            "key": "springConstant",
            "label": {
              "en": "Spring constant",
              "zh": "弹簧常数"
            },
            "unit": "N/m",
            "min": 1,
            "max": 200,
            "step": 1,
            "default": 25
          },
          {
            "key": "limitOfProportionality",
            "label": {
              "en": "Limit of proportionality",
              "zh": "比例极限"
            },
            "unit": "N",
            "min": 1,
            "max": 40,
            "step": 1,
            "default": 10
          },
          {
            "key": "mass",
            "label": {
              "en": "Mass of the falling object",
              "zh": "下落物体的质量"
            },
            "unit": "kg",
            "min": 0.1,
            "max": 200,
            "step": 1,
            "default": 70
          },
          {
            "key": "drag",
            "label": {
              "en": "How much drag it experiences",
              "zh": "所受阻力的大小"
            },
            "unit": "",
            "min": 0,
            "max": 20,
            "step": 0.25,
            "default": 0.25
          }
        ],
        "readouts": [
          {
            "key": "springConstant",
            "label": {
              "en": "Spring constant",
              "zh": "弹簧常数"
            },
            "unit": "N/m",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "weight",
            "label": {
              "en": "Weight of the object",
              "zh": "物体的重力"
            },
            "unit": "N",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "terminal",
            "label": {
              "en": "Terminal velocity",
              "zh": "终极速度"
            },
            "unit": "m/s",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "finalAcceleration",
            "label": {
              "en": "Acceleration at the end",
              "zh": "最后的加速度"
            },
            "unit": "m/s²",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A spring within its limit",
              "zh": "未超过极限的弹簧"
            },
            "params": {
              "mode": 1,
              "springConstant": 25,
              "limitOfProportionality": 25,
              "mass": 70,
              "drag": 0.25
            }
          },
          {
            "label": {
              "en": "Stretched past the limit",
              "zh": "被拉过比例极限"
            },
            "params": {
              "mode": 1,
              "springConstant": 25,
              "limitOfProportionality": 10,
              "mass": 70,
              "drag": 0.25
            }
          },
          {
            "label": {
              "en": "A skydiver, free fall",
              "zh": "跳伞者：自由下落"
            },
            "params": {
              "mode": 2,
              "springConstant": 25,
              "limitOfProportionality": 10,
              "mass": 70,
              "drag": 0.25
            }
          },
          {
            "label": {
              "en": "The parachute opens",
              "zh": "降落伞打开"
            },
            "params": {
              "mode": 2,
              "springConstant": 25,
              "limitOfProportionality": 10,
              "mass": 70,
              "drag": 6
            }
          },
          {
            "label": {
              "en": "No air resistance at all",
              "zh": "完全没有空气阻力"
            },
            "params": {
              "mode": 2,
              "springConstant": 25,
              "limitOfProportionality": 10,
              "mass": 70,
              "drag": 0
            }
          },
          {
            "label": {
              "en": "A heavier faller",
              "zh": "更重的下落物体"
            },
            "params": {
              "mode": 2,
              "springConstant": 25,
              "limitOfProportionality": 10,
              "mass": 120,
              "drag": 0.25
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
        "zh": "未超过极限的弹簧",
        "en": "A spring within its limit"
      },
      "params": {
        "mode": 1,
        "springConstant": 25,
        "limitOfProportionality": 25,
        "mass": 70,
        "drag": 0.25
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "被拉过比例极限",
        "en": "Stretched past the limit"
      },
      "params": {
        "mode": 1,
        "springConstant": 25,
        "limitOfProportionality": 10,
        "mass": 70,
        "drag": 0.25
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "跳伞者：自由下落",
        "en": "A skydiver, free fall"
      },
      "params": {
        "mode": 2,
        "springConstant": 25,
        "limitOfProportionality": 10,
        "mass": 70,
        "drag": 0.25
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "降落伞打开",
        "en": "The parachute opens"
      },
      "params": {
        "mode": 2,
        "springConstant": 25,
        "limitOfProportionality": 10,
        "mass": 70,
        "drag": 6
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "完全没有空气阻力",
        "en": "No air resistance at all"
      },
      "params": {
        "mode": 2,
        "springConstant": 25,
        "limitOfProportionality": 10,
        "mass": 70,
        "drag": 0
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "更重的下落物体",
        "en": "A heavier faller"
      },
      "params": {
        "mode": 2,
        "springConstant": 25,
        "limitOfProportionality": 10,
        "mass": 120,
        "drag": 0.25
      }
    }
  ]
};
