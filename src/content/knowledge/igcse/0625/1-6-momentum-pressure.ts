/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-6-momentum-pressure
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/1-6-momentum-pressure/narration';
import { equations } from '../../igcse-src/0625/1-6-momentum-pressure/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/1-6-momentum-pressure/kernel';

export const kp16MomentumPressure: KnowledgePoint = {
  "id": "igcse-0625-1-6-momentum-pressure",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "动量与压强",
    "en": "Momentum and pressure"
  },
  "summary": {
    "zh": "溃缩区并不吸收动量——它办不到，动量是固定的。它拉长了失去动量的时间，力便按比例下降。",
    "en": "A crumple zone does not absorb the momentum — it cannot, that is fixed. It extends the time over which the momentum is lost, and the force falls in proportion."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/1.6.1",
      "0625/1.6.2",
      "0625/1.6.3",
      "0625/1.6.4",
      "0625/1.8.1",
      "0625/1.8.2",
      "0625/1.8.3",
      "0625/1.8.4"
    ]
  },
  "keywords": {
    "zh": [
      "动量",
      "冲量",
      "动量守恒",
      "压强"
    ],
    "en": [
      "momentum",
      "impulse",
      "conservation of momentum",
      "pressure"
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
          "定义动量并使用 p = mv。（Extended）",
          "定义冲量并使用 冲量 = FΔt = Δ(mv)。（Extended）",
          "把动量守恒原理应用于一维问题。（Extended）",
          "把合力定义为动量的变化率并使用 F = Δp / Δt。（Extended）",
          "定义压强并使用 p = F / A。",
          "用日常实例描述压强如何随力与面积变化。",
          "定性描述液体压强如何随深度与密度变化，并使用 Δp = ρgΔh。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "溃缩区并不吸收动量——它办不到，动量是固定的。它拉长了失去动量的时间，力便按比例下降。"
      },
      {
        "type": "formula",
        "latex": "p = mv",
        "caption": "动量。它是矢量，相加前要给反向的速度加负号——把迎面相撞当作标量来算，得到的答案毫无意义。"
      },
      {
        "type": "formula",
        "latex": "F = \\dfrac{\\Delta p}{\\Delta t}",
        "caption": "动量的变化由碰撞本身决定。延长时间是减小力的唯一途径——每一项安全设计做的都是这件事。"
      },
      {
        "type": "formula",
        "latex": "\\Delta p = \\rho g \\Delta h",
        "caption": "液体压强只取决于密度和深度。容器的形状和液体的总体积都不出现在式子里。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "momentum（动量）：质量 × 速度，单位 kg m/s。它是矢量，因此在一维中反向的速度取负号。",
          "impulse（冲量）：力 × 作用时间，等于它所引起的动量变化。",
          "conservation of momentum（动量守恒）：在封闭系统中，相互作用前的总动量等于作用后的总动量——无论物体做了什么。",
          "pressure（压强）：单位面积上的力，单位为帕斯卡。1 帕即 1 牛每平方米。"
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
          "Define momentum and use p = mv. (Extended)",
          "Define impulse and use impulse = FΔt = Δ(mv). (Extended)",
          "Apply the principle of conservation of momentum to problems in one dimension. (Extended)",
          "Define resultant force as the rate of change of momentum and use F = Δp / Δt. (Extended)",
          "Define pressure and use p = F / A.",
          "Describe how pressure varies with force and area in everyday examples.",
          "Describe qualitatively how liquid pressure varies with depth and density, and use Δp = ρgΔh. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "A crumple zone does not absorb the momentum — it cannot, that is fixed. It extends the time over which the momentum is lost, and the force falls in proportion."
      },
      {
        "type": "formula",
        "latex": "p = mv",
        "caption": "Momentum. A vector, so give opposing velocities a negative sign before adding — a head-on collision worked as a scalar gives a meaningless answer."
      },
      {
        "type": "formula",
        "latex": "F = \\dfrac{\\Delta p}{\\Delta t}",
        "caption": "The change in momentum is fixed by the crash. Increasing the time is the only way left to reduce the force — which is what every safety feature does."
      },
      {
        "type": "formula",
        "latex": "\\Delta p = \\rho g \\Delta h",
        "caption": "Liquid pressure depends on density and depth only. The shape of the container and the total volume of liquid do not appear."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "momentum (动量): Mass × velocity, in kg m/s. A vector, so in one dimension opposing velocities take a negative sign.",
          "impulse (冲量): Force × the time it acts for, and equal to the change in momentum it produces.",
          "conservation of momentum (动量守恒): In a closed system, the total momentum before an interaction equals the total momentum after it — whatever the objects do.",
          "pressure (压强): Force per unit area, in pascals. One pascal is one newton per square metre."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0625-1-6-cp1",
      "syllabus": [
        "0625/1.6.1",
        "0625/1.6.3"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A trolley of mass 2.0 kg moving at 3.0 m/s collides with a stationary trolley of mass 4.0 kg. They stick together. Calculate their common velocity after the collision.",
      "markScheme": [
        {
          "text": "Total momentum before = 2.0 × 3.0 + 4.0 × 0 = 6.0 kg m/s",
          "marks": 1
        },
        {
          "text": "Momentum is conserved, so total momentum after = 6.0 kg m/s",
          "marks": 1
        },
        {
          "text": "v = 6.0 / (2.0 + 4.0) = 1.0 m/s in the original direction",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "合并后的质量是 6.0 kg，不是 4.0。另外要写出方向——动量是矢量，你所报告的速度也是。",
        "en": "The combined mass is 6.0 kg, not 4.0. And state the direction — momentum is a vector, and so is the velocity you are reporting."
      }
    },
    {
      "id": "0625-1-6-cp2",
      "syllabus": [
        "0625/1.6.2",
        "0625/1.6.4"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Modern cars are designed with a crumple zone at the front. Explain, in terms of momentum and force, how this reduces injury in a collision.",
      "markScheme": [
        {
          "text": "In the collision the car’s momentum must be reduced to zero, and that change in momentum is fixed by the mass and the speed",
          "marks": 1
        },
        {
          "text": "The resultant force equals the change in momentum divided by the time taken",
          "marks": 1
        },
        {
          "text": "The crumple zone deforms, so the collision takes place over a longer time",
          "marks": 1
        },
        {
          "text": "For the same change in momentum a longer time means a smaller force, and it is the force on the occupants that causes injury",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "溃缩区并不\"吸收动量\"——动量无论如何都得消失。它改变的是时间，力随之改变。",
        "en": "The crumple zone does not \"absorb the momentum\" — the momentum has to go regardless. It changes the time, and the force follows."
      }
    },
    {
      "id": "0625-1-6-cp3",
      "syllabus": [
        "0625/1.6.3"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 4,
      "stem": "A 0.50 kg ball moving right at 8.0 m/s collides head-on with a 0.30 kg ball moving left at 4.0 m/s. After the collision they move off together. Calculate their common velocity, stating its direction.",
      "markScheme": [
        {
          "text": "Takes right as positive: momentum before = 0.50 × 8.0 + 0.30 × (−4.0)",
          "marks": 1
        },
        {
          "text": "= 4.0 − 1.2 = 2.8 kg m/s",
          "marks": 1
        },
        {
          "text": "v = 2.8 / (0.50 + 0.30) = 3.5 m/s",
          "marks": 1
        },
        {
          "text": "The answer is positive, so the motion is to the right",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "在开头声明正方向在这里非常值得。把 4.0 与 1.2 相加会得到 6.5 m/s，这是错的，而且方向也说不通。",
        "en": "A sign convention stated at the start earns its keep here. Adding 4.0 and 1.2 gives 6.5 m/s, which is wrong and does not even point in a sensible direction."
      }
    },
    {
      "id": "0625-1-6-cp4",
      "syllabus": [
        "0625/1.8.1",
        "0625/1.8.2"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A drawing pin has a sharp point at one end and a broad flat head at the other. Explain why, in terms of pressure.",
      "markScheme": [
        {
          "text": "Pressure is force per unit area, p = F / A",
          "marks": 1
        },
        {
          "text": "The same force is applied to both ends, but the point has a very small area so the pressure under it is very large — large enough to push into the wood",
          "marks": 1
        },
        {
          "text": "The head has a large area so the pressure on the thumb is small and does not hurt",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两端受的力是相同的——正因如此这才是压强题而不是力的题。不同的只是面积。",
        "en": "The force is the same at both ends — that is what makes it a pressure question rather than a force question. Only the area differs."
      }
    },
    {
      "id": "0625-1-6-cp5",
      "syllabus": [
        "0625/1.8.4"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A diver descends to a depth of 25 m in sea water of density 1030 kg/m³. Taking g as 9.8 N/kg, calculate the increase in pressure on the diver compared with the surface.",
      "markScheme": [
        {
          "text": "Δp = ρgΔh",
          "marks": 1
        },
        {
          "text": "= 1030 × 9.8 × 25",
          "marks": 1
        },
        {
          "text": "= 2.5 × 10⁵ Pa (252 350 Pa)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "题目问的是\"增加量\"，因此不加大气压。另外海的形状与此无关——只有深度起作用。",
        "en": "The question asks for the increase, so atmospheric pressure is not added. And the shape of the sea has nothing to do with it — only the depth."
      }
    },
    {
      "id": "0625-1-6-cp6",
      "syllabus": [
        "0625/1.8.3"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A dam is built much thicker at its base than at the top. Explain why.",
      "markScheme": [
        {
          "text": "The pressure in a liquid increases with depth, because there is a greater weight of water above",
          "marks": 1
        },
        {
          "text": "so the water pushes hardest at the bottom, and the dam must be strongest there to withstand it",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "起作用的是深度，而不是水库蓄了多少水。同样深度下，狭长的深湖底部所受的压强与宽阔的湖一样大。",
        "en": "It is the depth that matters, not how much water the reservoir holds. A deep narrow lake presses just as hard at the bottom as a wide one of the same depth."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "massA",
        "label": {
          "zh": "第一个物体的质量",
          "en": "Mass of the first object"
        },
        "min": 0.1,
        "max": 5000,
        "step": 10,
        "defaultValue": 1000,
        "unit": "kg"
      },
      {
        "key": "velocityA",
        "label": {
          "zh": "它碰撞前的速度",
          "en": "Its velocity before"
        },
        "min": -50,
        "max": 50,
        "step": 1,
        "defaultValue": 20,
        "unit": "m/s"
      },
      {
        "key": "massB",
        "label": {
          "zh": "第二个物体的质量",
          "en": "Mass of the second"
        },
        "min": 0.1,
        "max": 5000,
        "step": 10,
        "defaultValue": 1500,
        "unit": "kg"
      },
      {
        "key": "velocityB",
        "label": {
          "zh": "它碰撞前的速度",
          "en": "Its velocity before"
        },
        "min": -50,
        "max": 50,
        "step": 1,
        "defaultValue": 0,
        "unit": "m/s"
      },
      {
        "key": "stick",
        "label": {
          "zh": "碰撞时发生什么",
          "en": "What happens on impact"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "contactTime",
        "label": {
          "zh": "碰撞持续多久",
          "en": "How long the impact lasts"
        },
        "min": 0.01,
        "max": 2,
        "step": 0.01,
        "defaultValue": 0.1,
        "unit": "s"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "1-6-momentum-pressure",
        "hint": {
          "en": "Compare the two momentum readings, then the energy. Then lengthen the contact time and watch the force fall.",
          "zh": "先比较两个动量读数，再看能量。然后延长接触时间，看力如何下降。"
        },
        "params": [
          {
            "key": "massA",
            "label": {
              "en": "Mass of the first object",
              "zh": "第一个物体的质量"
            },
            "unit": "kg",
            "min": 0.1,
            "max": 5000,
            "step": 10,
            "default": 1000
          },
          {
            "key": "velocityA",
            "label": {
              "en": "Its velocity before",
              "zh": "它碰撞前的速度"
            },
            "unit": "m/s",
            "min": -50,
            "max": 50,
            "step": 1,
            "default": 20
          },
          {
            "key": "massB",
            "label": {
              "en": "Mass of the second",
              "zh": "第二个物体的质量"
            },
            "unit": "kg",
            "min": 0.1,
            "max": 5000,
            "step": 10,
            "default": 1500
          },
          {
            "key": "velocityB",
            "label": {
              "en": "Its velocity before",
              "zh": "它碰撞前的速度"
            },
            "unit": "m/s",
            "min": -50,
            "max": 50,
            "step": 1,
            "default": 0
          },
          {
            "key": "stick",
            "label": {
              "en": "What happens on impact",
              "zh": "碰撞时发生什么"
            },
            "unit": "",
            "min": 0,
            "max": 1,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 1,
                "label": {
                  "en": "They stick together",
                  "zh": "黏在一起"
                }
              },
              {
                "value": 0,
                "label": {
                  "en": "They bounce apart",
                  "zh": "弹开"
                }
              }
            ]
          },
          {
            "key": "contactTime",
            "label": {
              "en": "How long the impact lasts",
              "zh": "碰撞持续多久"
            },
            "unit": "s",
            "min": 0.01,
            "max": 2,
            "step": 0.01,
            "default": 0.1
          }
        ],
        "readouts": [
          {
            "key": "momentumBefore",
            "label": {
              "en": "Total momentum before",
              "zh": "碰撞前的总动量"
            },
            "unit": "kg m/s",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "momentumAfter",
            "label": {
              "en": "Total momentum after",
              "zh": "碰撞后的总动量"
            },
            "unit": "kg m/s",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "energyLost",
            "label": {
              "en": "Kinetic energy lost",
              "zh": "损失的动能"
            },
            "unit": "J",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "force",
            "label": {
              "en": "Average force on the first",
              "zh": "第一个物体受的平均力"
            },
            "unit": "N",
            "sigFigs": 4,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A car hits a stationary lorry",
              "zh": "汽车撞上静止的卡车"
            },
            "params": {
              "massA": 1000,
              "velocityA": 20,
              "massB": 1500,
              "velocityB": 0,
              "stick": 1,
              "contactTime": 0.1
            }
          },
          {
            "label": {
              "en": "The same, but they bounce",
              "zh": "同样的碰撞，但会弹开"
            },
            "params": {
              "massA": 1000,
              "velocityA": 20,
              "massB": 1500,
              "velocityB": 0,
              "stick": 0,
              "contactTime": 0.1
            }
          },
          {
            "label": {
              "en": "Head-on",
              "zh": "迎面相撞"
            },
            "params": {
              "massA": 1000,
              "velocityA": 20,
              "massB": 1500,
              "velocityB": -15,
              "stick": 1,
              "contactTime": 0.1
            }
          },
          {
            "label": {
              "en": "Into a rigid wall",
              "zh": "撞上刚性墙"
            },
            "params": {
              "massA": 1000,
              "velocityA": 20,
              "massB": 5000,
              "velocityB": 0,
              "stick": 1,
              "contactTime": 0.02
            }
          },
          {
            "label": {
              "en": "With a crumple zone",
              "zh": "有溃缩区"
            },
            "params": {
              "massA": 1000,
              "velocityA": 20,
              "massB": 5000,
              "velocityB": 0,
              "stick": 1,
              "contactTime": 0.6
            }
          },
          {
            "label": {
              "en": "Equal masses, one at rest",
              "zh": "质量相等，一个静止"
            },
            "params": {
              "massA": 1000,
              "velocityA": 20,
              "massB": 1000,
              "velocityB": 0,
              "stick": 0,
              "contactTime": 0.1
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
        "zh": "汽车撞上静止的卡车",
        "en": "A car hits a stationary lorry"
      },
      "params": {
        "massA": 1000,
        "velocityA": 20,
        "massB": 1500,
        "velocityB": 0,
        "stick": 1,
        "contactTime": 0.1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "同样的碰撞，但会弹开",
        "en": "The same, but they bounce"
      },
      "params": {
        "massA": 1000,
        "velocityA": 20,
        "massB": 1500,
        "velocityB": 0,
        "stick": 0,
        "contactTime": 0.1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "迎面相撞",
        "en": "Head-on"
      },
      "params": {
        "massA": 1000,
        "velocityA": 20,
        "massB": 1500,
        "velocityB": -15,
        "stick": 1,
        "contactTime": 0.1
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "撞上刚性墙",
        "en": "Into a rigid wall"
      },
      "params": {
        "massA": 1000,
        "velocityA": 20,
        "massB": 5000,
        "velocityB": 0,
        "stick": 1,
        "contactTime": 0.02
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "有溃缩区",
        "en": "With a crumple zone"
      },
      "params": {
        "massA": 1000,
        "velocityA": 20,
        "massB": 5000,
        "velocityB": 0,
        "stick": 1,
        "contactTime": 0.6
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "质量相等，一个静止",
        "en": "Equal masses, one at rest"
      },
      "params": {
        "massA": 1000,
        "velocityA": 20,
        "massB": 1000,
        "velocityB": 0,
        "stick": 0,
        "contactTime": 0.1
      }
    }
  ]
};
