/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-7-energy
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/1-7-energy/narration';
import { equations } from '../../igcse-src/0625/1-7-energy/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/1-7-energy/kernel';

export const kp17Energy: KnowledgePoint = {
  "id": "igcse-0625-1-7-energy",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "能量、功与功率",
    "en": "Energy, work and power"
  },
  "summary": {
    "zh": "让物体下落，看势能变成动能而总能量保持水平。加上空气阻力，水平线开始倾斜——那个缺口就是损耗的能量。",
    "en": "Drop an object and watch potential turn into kinetic while the total stays flat. Add air resistance and the flat line tilts — that gap is the wasted energy."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/1.7.1.1",
      "0625/1.7.1.2",
      "0625/1.7.1.3",
      "0625/1.7.1.4",
      "0625/1.7.1.5",
      "0625/1.7.1.6",
      "0625/1.7.2.1",
      "0625/1.7.2.2",
      "0625/1.7.3.1",
      "0625/1.7.3.2",
      "0625/1.7.3.3",
      "0625/1.7.3.4",
      "0625/1.7.3.5",
      "0625/1.7.3.6",
      "0625/1.7.3.7",
      "0625/1.7.4.1"
    ]
  },
  "keywords": {
    "zh": [
      "动能",
      "重力势能",
      "能量守恒",
      "功",
      "功率",
      "效率",
      "桑基图"
    ],
    "en": [
      "kinetic energy",
      "gravitational potential energy",
      "conservation of energy",
      "work done",
      "power",
      "efficiency",
      "Sankey diagram"
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
          "列举能量的储存形式：动能、重力势能、化学能、弹性势能、核能、静电能与内能。",
          "描述能量在储存形式之间的转移。",
          "应用能量守恒定律，包括流程图。",
          "记住并使用 Ek = ½mv²。（Extended）",
          "记住并使用 ΔEp = mgΔh。（Extended）",
          "对多级过程应用能量守恒，包括桑基图。（Extended）",
          "理解做功等于能量转移。",
          "记住并使用 W = Fd = ΔE。",
          "描述各类主要能源如何提供有用能量。",
          "说出各类能源的优缺点，并定性理解效率。",
          "知道太阳是多数能源的来源，其能量来自核聚变。（Extended）",
          "定义并计算百分效率。（Extended）",
          "定义功率并使用 P = W / t 与 P = E / t。"
        ]
      },
      {
        "type": "paragraph",
        "text": "让物体下落，看势能变成动能而总能量保持水平。加上空气阻力，水平线开始倾斜——那个缺口就是损耗的能量。"
      },
      {
        "type": "formula",
        "latex": "E_p = mg\\Delta h",
        "caption": "重力势能等于质量 × 重力场强度 × 高度变化。"
      },
      {
        "type": "formula",
        "latex": "E_k = \\tfrac{1}{2}mv^2",
        "caption": "动能与速度的平方成正比——速度加倍，能量变四倍。"
      },
      {
        "type": "formula",
        "latex": "\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%",
        "caption": "能量账目必须平衡：有用输出加损耗等于输入。"
      },
      {
        "type": "formula",
        "latex": "P = \\frac{W}{t}",
        "caption": "功率是单位时间内所做的功。同样的功用更短时间完成，需要更大功率。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "kinetic energy（动能）：物体因运动而具有的能量。Ek = ½mv²，注意速度是平方。",
          "gravitational potential energy（重力势能）：物体因在重力场中的高度而具有的能量。ΔEp = mgΔh。",
          "conservation of energy（能量守恒）：能量既不能产生也不能消灭，只能在储存形式间转移。总量始终不变。",
          "work done（功）：力使物体移动一段距离所转移的能量。W = Fd，单位焦耳。",
          "power（功率）：做功或转移能量的快慢。P = W / t，单位瓦特。",
          "efficiency（效率）：有用输出能量占总输入能量的比例，通常以百分数表示。永远不超过 100%。",
          "Sankey diagram（桑基图）：能量流程图，箭头宽度与所携带的能量成正比。"
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
          "Name the energy stores: kinetic, gravitational, chemical, elastic, nuclear, electrostatic and internal.",
          "Describe how energy is transferred between stores.",
          "Apply the principle of conservation of energy, including flow diagrams.",
          "Recall and use Ek = ½mv². (Extended)",
          "Recall and use ΔEp = mgΔh. (Extended)",
          "Apply conservation of energy to multi-stage cases, including Sankey diagrams. (Extended)",
          "Understand that work done equals energy transferred.",
          "Recall and use W = Fd = ΔE.",
          "Describe how useful energy is obtained from the major energy resources.",
          "Give advantages and disadvantages of each resource, and understand efficiency qualitatively.",
          "Know that the Sun is the source of most energy resources, and is powered by fusion. (Extended)",
          "Define and calculate percentage efficiency. (Extended)",
          "Define power and use P = W / t and P = E / t."
        ]
      },
      {
        "type": "paragraph",
        "text": "Drop an object and watch potential turn into kinetic while the total stays flat. Add air resistance and the flat line tilts — that gap is the wasted energy."
      },
      {
        "type": "formula",
        "latex": "E_p = mg\\Delta h",
        "caption": "Potential energy is mass × gravitational field strength × change in height."
      },
      {
        "type": "formula",
        "latex": "E_k = \\tfrac{1}{2}mv^2",
        "caption": "Kinetic energy depends on the square of the speed — double the speed, four times the energy."
      },
      {
        "type": "formula",
        "latex": "\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%",
        "caption": "The energy account must balance: useful output plus wasted energy equals the input."
      },
      {
        "type": "formula",
        "latex": "P = \\frac{W}{t}",
        "caption": "Power is work done per unit time. The same work in less time needs more power."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "kinetic energy (动能): The energy an object has because it is moving. Ek = ½mv² — note the square on the speed.",
          "gravitational potential energy (重力势能): The energy an object has because of its height in a gravitational field. ΔEp = mgΔh.",
          "conservation of energy (能量守恒): Energy cannot be created or destroyed, only transferred between stores. The total always stays the same.",
          "work done (功): Energy transferred by a force moving through a distance. W = Fd, measured in joules.",
          "power (功率): The rate of doing work, or of transferring energy. P = W / t, measured in watts.",
          "efficiency (效率): The useful energy output as a fraction of the total energy input, usually as a percentage. Never more than 100%.",
          "Sankey diagram (桑基图): An energy flow diagram in which the width of each arrow is proportional to the energy it carries."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "1-7-cp1",
      "syllabus": [
        "0625/1.7.1.4",
        "0625/1.7.1.5"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 4,
      "stem": "A ball of mass 0.40 kg is dropped from a height of 5.0 m. Air resistance is negligible. Calculate the speed of the ball as it reaches the ground. Take g = 9.8 N / kg.",
      "markScheme": [
        {
          "text": "States or uses Ep at the top = Ek at the bottom",
          "marks": 1
        },
        {
          "text": "Ep = 0.40 × 9.8 × 5.0 = 19.6 J",
          "marks": 1
        },
        {
          "text": "Uses Ek = ½mv², so v² = 2Ek / m",
          "marks": 1
        },
        {
          "text": "v = 9.9 m / s (accept 9.9 to 10 m / s)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "质量会约掉，也可直接用 v = √(2gh)。最后忘记开方会得到 98，对 5 米高的下落来说一眼就该看出不对。",
        "en": "The mass cancels, so you can also use v = √(2gh) directly. Forgetting to square-root at the end gives 98, which should look obviously wrong for a 5 m drop."
      }
    },
    {
      "id": "1-7-cp2",
      "syllabus": [
        "0625/1.7.3.7"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "An electric motor is supplied with 2400 J of electrical energy. It does 1560 J of useful work lifting a load. Calculate the percentage efficiency of the motor, and state what happens to the remaining energy.",
      "markScheme": [
        {
          "text": "Uses efficiency = useful output / total input × 100%",
          "marks": 1
        },
        {
          "text": "65%",
          "marks": 1,
          "alternatives": [
            "(1560 / 2400) × 100"
          ]
        },
        {
          "text": "The remaining 840 J is transferred to the surroundings as internal energy, mainly by heating and sound",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "能量绝不会\"消失\"。必须说明它去了哪里——加热电机与周围环境——否则拿不到最后一分。",
        "en": "Energy is never \"lost\". Say where it went — heating the motor and the surroundings — or the last mark is not awarded."
      }
    },
    {
      "id": "1-7-cp3",
      "syllabus": [
        "0625/1.7.4.1"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A crane lifts a 250 kg load through a height of 12 m in 20 s. Take g = 9.8 N / kg. Calculate the useful output power of the crane.",
      "markScheme": [
        {
          "text": "Work done = mgh = 250 × 9.8 × 12",
          "marks": 1
        },
        {
          "text": "= 29 400 J",
          "marks": 1
        },
        {
          "text": "P = W / t = 29 400 / 20 = 1470 W (accept 1.5 kW)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "先求功，再除以时间。若先用高度除以时间会得到速度而不是功率——检查最后的单位。",
        "en": "Work first, then divide by time. Dividing the height by the time instead gives a speed, not a power — check the unit you end up with."
      }
    },
    {
      "id": "1-7-cp4",
      "syllabus": [
        "0625/1.7.3.4"
      ],
      "tier": "supplement",
      "commandWord": "Identify",
      "marks": 1,
      "stem": "Identify the energy resource that does NOT ultimately derive its energy from the Sun.",
      "options": [
        "Geothermal",
        "Wind",
        "Hydroelectric",
        "Biofuel"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "Geothermal",
          "marks": 1,
          "alternatives": [
            "nuclear",
            "tidal"
          ]
        }
      ],
      "examinerNote": {
        "zh": "只有地热、核能和潮汐与太阳无关。风能、波浪能、水电、生物燃料和化石燃料都可追溯到太阳加热。",
        "en": "Only geothermal, nuclear and tidal are independent of the Sun. Wind, waves, hydroelectric, biofuels and fossil fuels all trace back to solar heating."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "mass",
        "label": {
          "zh": "质量",
          "en": "Mass"
        },
        "min": 0.5,
        "max": 10,
        "step": 0.5,
        "defaultValue": 2,
        "unit": "kg"
      },
      {
        "key": "height",
        "label": {
          "zh": "下落高度",
          "en": "Drop height"
        },
        "min": 1,
        "max": 30,
        "step": 1,
        "defaultValue": 10,
        "unit": "m"
      },
      {
        "key": "lossFraction",
        "label": {
          "zh": "损耗于空气的比例",
          "en": "Energy lost to air"
        },
        "min": 0,
        "max": 0.6,
        "step": 0.05,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "liftTime",
        "label": {
          "zh": "举回所用时间",
          "en": "Time to lift it back"
        },
        "min": 0.5,
        "max": 20,
        "step": 0.5,
        "defaultValue": 4,
        "unit": "s"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "1-7-energy",
        "hint": {
          "en": "Change the mass — the impact speed does not move. Then add air resistance and watch the total line tilt.",
          "zh": "改变质量——撞击速度不变。再加入空气阻力，看总能量线开始倾斜。"
        },
        "params": [
          {
            "key": "mass",
            "label": {
              "en": "Mass",
              "zh": "质量"
            },
            "unit": "kg",
            "symbol": "m",
            "min": 0.5,
            "max": 10,
            "step": 0.5,
            "default": 2
          },
          {
            "key": "height",
            "label": {
              "en": "Drop height",
              "zh": "下落高度"
            },
            "unit": "m",
            "symbol": "h",
            "min": 1,
            "max": 30,
            "step": 1,
            "default": 10
          },
          {
            "key": "lossFraction",
            "label": {
              "en": "Energy lost to air",
              "zh": "损耗于空气的比例"
            },
            "unit": "",
            "min": 0,
            "max": 0.6,
            "step": 0.05,
            "default": 0
          },
          {
            "key": "liftTime",
            "label": {
              "en": "Time to lift it back",
              "zh": "举回所用时间"
            },
            "unit": "s",
            "symbol": "t",
            "min": 0.5,
            "max": 20,
            "step": 0.5,
            "default": 4
          }
        ],
        "readouts": [
          {
            "key": "impactSpeed",
            "label": {
              "en": "Speed on impact",
              "zh": "撞击速度"
            },
            "unit": "m / s",
            "symbol": "v",
            "sigFigs": 3
          },
          {
            "key": "efficiencyPercent",
            "label": {
              "en": "Efficiency",
              "zh": "效率"
            },
            "unit": "%",
            "sigFigs": 3
          },
          {
            "key": "wastedEnergy",
            "label": {
              "en": "Energy wasted",
              "zh": "损耗能量"
            },
            "unit": "J",
            "sigFigs": 3
          },
          {
            "key": "liftingPower",
            "label": {
              "en": "Power to lift back",
              "zh": "举回所需功率"
            },
            "unit": "W",
            "symbol": "P",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Free fall",
              "zh": "自由落体"
            },
            "params": {
              "mass": 2,
              "height": 10,
              "lossFraction": 0,
              "liftTime": 4
            }
          },
          {
            "label": {
              "en": "Four times the mass",
              "zh": "质量四倍"
            },
            "params": {
              "mass": 8,
              "height": 10,
              "lossFraction": 0,
              "liftTime": 4
            }
          },
          {
            "label": {
              "en": "With air resistance",
              "zh": "有空气阻力"
            },
            "params": {
              "mass": 2,
              "height": 10,
              "lossFraction": 0.4,
              "liftTime": 4
            }
          },
          {
            "label": {
              "en": "Lift it twice as fast",
              "zh": "举回速度加倍"
            },
            "params": {
              "mass": 2,
              "height": 10,
              "lossFraction": 0,
              "liftTime": 2
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
        "zh": "自由落体",
        "en": "Free fall"
      },
      "params": {
        "mass": 2,
        "height": 10,
        "lossFraction": 0,
        "liftTime": 4
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "质量四倍",
        "en": "Four times the mass"
      },
      "params": {
        "mass": 8,
        "height": 10,
        "lossFraction": 0,
        "liftTime": 4
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "有空气阻力",
        "en": "With air resistance"
      },
      "params": {
        "mass": 2,
        "height": 10,
        "lossFraction": 0.4,
        "liftTime": 4
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "举回速度加倍",
        "en": "Lift it twice as fast"
      },
      "params": {
        "mass": 2,
        "height": 10,
        "lossFraction": 0,
        "liftTime": 2
      }
    }
  ]
};
