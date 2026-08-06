/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/6-1-solar-system
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/6-1-solar-system/narration';
import { equations } from '../../igcse-src/0625/6-1-solar-system/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/6-1-solar-system/kernel';

export const kp61SolarSystem: KnowledgePoint = {
  "id": "igcse-0625-6-1-solar-system",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "地球与太阳系",
    "en": "The Earth and the Solar System"
  },
  "summary": {
    "zh": "用真实行星数据作图，看轨道速度随距离下降——再切换到表面重力，看趋势消失。",
    "en": "Plot real planetary data and watch orbital speed fall with distance — then switch to surface gravity and watch the trend disappear."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/6.1.1.1",
      "0625/6.1.1.2",
      "0625/6.1.1.3",
      "0625/6.1.1.4",
      "0625/6.1.2.1",
      "0625/6.1.2.2",
      "0625/6.1.2.3",
      "0625/6.1.2.4",
      "0625/6.1.2.5",
      "0625/6.1.2.6",
      "0625/6.1.2.7",
      "0625/6.1.2.8",
      "0625/6.1.2.9",
      "0625/6.1.2.10"
    ]
  },
  "keywords": {
    "zh": [
      "轨道",
      "公转周期",
      "重力场强度",
      "吸积",
      "矮行星"
    ],
    "en": [
      "orbit",
      "orbital period",
      "gravitational field strength",
      "accretion",
      "minor planet"
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
          "用地球倾斜自转解释昼夜。",
          "用地球公转解释四季。",
          "用月球公转解释月相。",
          "定义并使用平均轨道速度 v = 2πr / T。（Extended）",
          "描述太阳系的组成。",
          "用吸积模型对比内侧岩质与外侧气态行星。",
          "知道重力场强度与行星质量及距离的关系。",
          "计算光穿越太阳系距离所需时间。",
          "知道太阳占绝大部分质量，引力维持天体轨道运行。",
          "知道轨道是椭圆且太阳不在中心。（Extended）",
          "分析与解读行星数据。（Extended）",
          "知道太阳引力与行星速度随距离减小。（Extended）",
          "用能量守恒解释近日点速度更快。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "越远越慢"
      },
      {
        "type": "paragraph",
        "text": "平均轨道速度就是绕行一周的路程除以周期：2πr 除以 T。"
      },
      {
        "type": "formula",
        "latex": "v = \\frac{2\\pi r}{T}"
      },
      {
        "type": "paragraph",
        "text": "看图。离太阳越远的行星运动越慢。水星以每秒约四十八公里飞驰，海王星只有每秒五公里。"
      },
      {
        "type": "paragraph",
        "text": "原因是引力。太阳几乎占有太阳系全部质量，其引力场随距离减弱——所以远处的行星只需更小的速度就能维持轨道。"
      },
      {
        "type": "heading",
        "text": "光需要时间"
      },
      {
        "type": "paragraph",
        "text": "太阳距我们一亿五千万公里。除以光速，约得八又三分之一分钟。你从未看到此刻的太阳——只看到八分钟前的它。"
      },
      {
        "type": "paragraph",
        "text": "到海王星要四小时。这类计算就是距离除以 3 × 10⁸ 米每秒——记得先把距离换算成米。"
      },
      {
        "type": "heading",
        "text": "日、年与月"
      },
      {
        "type": "paragraph",
        "text": "三种周期，三种运动。地球绕倾斜的自转轴约二十四小时转一圈，形成昼夜；绕太阳约三百六十五天转一圈，而由于自转轴倾斜，便产生了四季。"
      },
      {
        "type": "paragraph",
        "text": "月球绕地球约一个月一圈，形成月相变化。把这三者分清楚——混淆自转与公转是常见且代价不小的错误。"
      },
      {
        "type": "formula",
        "latex": "v = \\frac{2\\pi r}{T}",
        "caption": "平均轨道速度等于轨道周长除以公转周期。"
      },
      {
        "type": "formula",
        "latex": "t = \\frac{d}{c}",
        "caption": "光传播时间等于距离除以 3.0 × 10⁸ m / s。先把距离换算成米。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "orbit（轨道）：一个天体绕另一个天体运行的路径，由引力维持。行星轨道是椭圆而非圆。",
          "orbital period（公转周期）：完成一圈公转所需的时间，符号 T。离太阳越远周期越长。",
          "gravitational field strength（重力场强度）：某点处单位质量所受的力。在行星表面它取决于行星自身质量，而非与太阳的距离。",
          "accretion（吸积）：气体与尘埃在引力下聚集成更大天体——解释内侧行星为何多岩的模型。",
          "minor planet（矮行星）：绕太阳运行但不属于八大行星的天体，如冥王星或小行星。"
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
          "Explain day and night from the Earth’s tilted daily rotation.",
          "Explain the seasons from the Earth’s yearly orbit.",
          "Explain the Moon’s phases from its monthly orbit.",
          "Define and use average orbital speed v = 2πr / T. (Extended)",
          "Describe the contents of the Solar System.",
          "Contrast inner rocky and outer gaseous planets using an accretion model.",
          "Know how gravitational field strength depends on planet mass and distance.",
          "Calculate light travel times across Solar System distances.",
          "Know that the Sun holds most of the mass, and gravity keeps objects in orbit.",
          "Know that orbits are elliptical with the Sun off centre. (Extended)",
          "Analyse and interpret planetary data. (Extended)",
          "Know how the Sun’s field strength and planetary speeds fall with distance. (Extended)",
          "Explain faster motion near the Sun using conservation of energy. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Further out means slower"
      },
      {
        "type": "paragraph",
        "text": "Average orbital speed is just the distance once round the orbit divided by the time to go round: two pi r over T."
      },
      {
        "type": "formula",
        "latex": "v = \\frac{2\\pi r}{T}"
      },
      {
        "type": "paragraph",
        "text": "Look at the graph. Every planet further from the Sun moves more slowly. Mercury races round at about forty-eight kilometres per second; Neptune crawls at five."
      },
      {
        "type": "paragraph",
        "text": "The reason is gravity. The Sun holds nearly all the mass of the Solar System, and its gravitational field gets weaker with distance — so distant planets need less speed to stay in orbit."
      },
      {
        "type": "heading",
        "text": "Light takes time"
      },
      {
        "type": "paragraph",
        "text": "The Sun is a hundred and fifty million kilometres away. Divide by the speed of light and you get about eight and a third minutes. You never see the Sun as it is now — only as it was eight minutes ago."
      },
      {
        "type": "paragraph",
        "text": "For Neptune it is four hours. Any calculation like this is just distance divided by three times ten to the eight metres per second — remember to convert the distance into metres first."
      },
      {
        "type": "heading",
        "text": "Day, year and month"
      },
      {
        "type": "paragraph",
        "text": "Three cycles, three different motions. The Earth spins on its tilted axis once in about twenty-four hours, giving day and night. It orbits the Sun once in about three hundred and sixty-five days, and because the axis is tilted, that gives the seasons."
      },
      {
        "type": "paragraph",
        "text": "The Moon takes about a month to orbit the Earth, which gives the cycle of phases. Keep those three straight — mixing up rotation and orbit is a common and expensive slip."
      },
      {
        "type": "formula",
        "latex": "v = \\frac{2\\pi r}{T}",
        "caption": "Average orbital speed is the circumference of the orbit divided by the time to complete it."
      },
      {
        "type": "formula",
        "latex": "t = \\frac{d}{c}",
        "caption": "Light travel time is distance divided by 3.0 × 10⁸ m / s. Convert the distance to metres first."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "orbit (轨道): The path of one body around another, held there by gravitational attraction. Planetary orbits are ellipses, not circles.",
          "orbital period (公转周期): The time for one complete orbit. Symbol T. Longer for planets further from the Sun.",
          "gravitational field strength (重力场强度): The force per unit mass at a point. At a planet’s surface it depends on the planet’s own mass, not on its distance from the Sun.",
          "accretion (吸积): The gathering of gas and dust under gravity into larger bodies — the model that explains why inner planets are rocky.",
          "minor planet (矮行星): A body orbiting the Sun that is not one of the eight planets, such as Pluto or an asteroid."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "6-1-cp1",
      "syllabus": [
        "0625/6.1.1.4"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A satellite orbits the Earth at an average radius of 7.0 × 10⁶ m with a period of 5.8 × 10³ s. Calculate its average orbital speed.",
      "markScheme": [
        {
          "text": "Uses v = 2πr / T",
          "marks": 1
        },
        {
          "text": "Correct substitution: (2 × π × 7.0 × 10⁶) / (5.8 × 10³)",
          "marks": 1
        },
        {
          "text": "7.6 × 10³ m / s (accept 7.6 km / s)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "很容易漏掉 2π。卫星每圈走完整个周长，而不只是半径。",
        "en": "The 2π is easy to drop. A satellite travels the whole circumference each orbit, not just the radius."
      }
    },
    {
      "id": "6-1-cp2",
      "syllabus": [
        "0625/6.1.2.4"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 2,
      "stem": "Light from the Sun takes about 8.3 minutes to reach the Earth. Taking the speed of light as 3.0 × 10⁸ m / s, calculate the distance from the Sun to the Earth.",
      "markScheme": [
        {
          "text": "Converts 8.3 minutes to 498 s and uses d = ct",
          "marks": 1
        },
        {
          "text": "1.5 × 10¹¹ m (accept 1.49 to 1.5 × 10¹¹ m)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "相乘前先把分钟换算成秒。直接用 8.3 会得到小 60 倍的答案。",
        "en": "Convert minutes to seconds before multiplying. Using 8.3 directly gives an answer 60 times too small."
      }
    },
    {
      "id": "6-1-cp3",
      "syllabus": [
        "0625/6.1.2.9"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Planets further from the Sun have smaller average orbital speeds. Explain why.",
      "markScheme": [
        {
          "text": "The Sun’s gravitational field strength decreases with distance",
          "marks": 1
        },
        {
          "text": "so a smaller force is available to keep the planet in orbit, and a smaller orbital speed is needed",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要把引力场减弱与速度变小联系起来。只说远处行星更慢是在重复题目，而不是解释。",
        "en": "Link the weaker field to the smaller speed. Simply stating that distant planets are slower repeats the question rather than explaining it."
      }
    },
    {
      "id": "6-1-cp4",
      "syllabus": [
        "0625/6.1.1.2"
      ],
      "tier": "core",
      "commandWord": "Identify",
      "marks": 1,
      "stem": "Identify the cause of the seasons on Earth.",
      "options": [
        "The tilt of the Earth’s axis as it orbits the Sun",
        "The changing distance between the Earth and the Sun",
        "The rotation of the Earth on its axis",
        "The orbit of the Moon around the Earth"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "The tilt of the Earth’s axis combined with its orbit around the Sun",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"距离决定四季\"是顽固的误解——地球其实在北半球冬季时离太阳最近。真正起作用的是自转轴倾斜改变了阳光的集中程度。",
        "en": "Distance is a persistent misconception — the Earth is actually closest to the Sun during the northern winter. The tilt is what changes the concentration of sunlight."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "quantity",
        "label": {
          "zh": "绘制",
          "en": "Plot"
        },
        "min": 0,
        "max": 2,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "planet",
        "label": {
          "zh": "行星",
          "en": "Planet"
        },
        "min": 0,
        "max": 7,
        "step": 1,
        "defaultValue": 2,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "6-1-solar-system",
        "hint": {
          "en": "Switch to surface gravity — the neat downward trend disappears, because that depends on the planet, not the Sun.",
          "zh": "切换到表面重力——整齐的下降趋势消失了，因为它取决于行星本身而非太阳。"
        },
        "params": [
          {
            "key": "quantity",
            "label": {
              "en": "Plot",
              "zh": "绘制"
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
                  "en": "Orbital speed",
                  "zh": "轨道速度"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Surface gravity",
                  "zh": "表面重力"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Orbital period",
                  "zh": "公转周期"
                }
              }
            ]
          },
          {
            "key": "planet",
            "label": {
              "en": "Planet",
              "zh": "行星"
            },
            "unit": "",
            "min": 0,
            "max": 7,
            "step": 1,
            "default": 2,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Mercury",
                  "zh": "Mercury"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Venus",
                  "zh": "Venus"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Earth",
                  "zh": "Earth"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Mars",
                  "zh": "Mars"
                }
              },
              {
                "value": 4,
                "label": {
                  "en": "Jupiter",
                  "zh": "Jupiter"
                }
              },
              {
                "value": 5,
                "label": {
                  "en": "Saturn",
                  "zh": "Saturn"
                }
              },
              {
                "value": 6,
                "label": {
                  "en": "Uranus",
                  "zh": "Uranus"
                }
              },
              {
                "value": 7,
                "label": {
                  "en": "Neptune",
                  "zh": "Neptune"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "orbitalSpeed",
            "label": {
              "en": "Orbital speed",
              "zh": "轨道速度"
            },
            "unit": "km / s",
            "symbol": "v",
            "sigFigs": 3
          },
          {
            "key": "lightMinutes",
            "label": {
              "en": "Light travel time",
              "zh": "光传播时间"
            },
            "unit": "min",
            "sigFigs": 3
          },
          {
            "key": "surfaceGravity",
            "label": {
              "en": "Surface gravity",
              "zh": "表面重力"
            },
            "unit": "N / kg",
            "symbol": "g",
            "sigFigs": 3
          },
          {
            "key": "density",
            "label": {
              "en": "Mean density",
              "zh": "平均密度"
            },
            "unit": "kg / m³",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Earth",
              "zh": "地球"
            },
            "params": {
              "planet": 2,
              "quantity": 0
            }
          },
          {
            "label": {
              "en": "Jupiter",
              "zh": "木星"
            },
            "params": {
              "planet": 4,
              "quantity": 0
            }
          },
          {
            "label": {
              "en": "Neptune",
              "zh": "海王星"
            },
            "params": {
              "planet": 7,
              "quantity": 0
            }
          },
          {
            "label": {
              "en": "Compare surface gravity",
              "zh": "比较表面重力"
            },
            "params": {
              "planet": 4,
              "quantity": 1
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
        "zh": "地球",
        "en": "Earth"
      },
      "params": {
        "planet": 2,
        "quantity": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "木星",
        "en": "Jupiter"
      },
      "params": {
        "planet": 4,
        "quantity": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "海王星",
        "en": "Neptune"
      },
      "params": {
        "planet": 7,
        "quantity": 0
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "比较表面重力",
        "en": "Compare surface gravity"
      },
      "params": {
        "planet": 4,
        "quantity": 1
      }
    }
  ]
};
