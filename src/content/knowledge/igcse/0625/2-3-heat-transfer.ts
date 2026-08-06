/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/2-3-heat-transfer
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/2-3-heat-transfer/narration';
import { equations } from '../../igcse-src/0625/2-3-heat-transfer/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/2-3-heat-transfer/kernel';

export const kp23HeatTransfer: KnowledgePoint = {
  "id": "igcse-0625-2-3-heat-transfer",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "传导、对流与辐射",
    "en": "Conduction, convection and radiation"
  },
  "summary": {
    "zh": "冷却一个热物体，在同一坐标上比较不同表面。光亮银色明显比粗糙黑色保持更高温度。",
    "en": "Cool a hot object and compare surfaces on the same axes. A shiny silver surface stays measurably hotter than a dull black one."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/2.3.1.1",
      "0625/2.3.1.2",
      "0625/2.3.1.3",
      "0625/2.3.1.4",
      "0625/2.3.2.1",
      "0625/2.3.2.2",
      "0625/2.3.3.1",
      "0625/2.3.3.2",
      "0625/2.3.3.3",
      "0625/2.3.3.4",
      "0625/2.3.3.5",
      "0625/2.3.3.6",
      "0625/2.3.3.7",
      "0625/2.3.3.8",
      "0625/2.3.3.9",
      "0625/2.3.4.1",
      "0625/2.3.4.2"
    ]
  },
  "keywords": {
    "zh": [
      "热传导",
      "对流",
      "热辐射",
      "发射体",
      "吸收体",
      "绝热体"
    ],
    "en": [
      "conduction",
      "convection",
      "thermal radiation",
      "emitter",
      "absorber",
      "insulator"
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
          "描述比较良导热体与绝热体的实验。",
          "用晶格振动与自由电子解释热传导。（Extended）",
          "解释气体与多数液体导热为何差。（Extended）",
          "知道对流在液体与气体中传热，并用密度变化解释。",
          "知道热辐射是红外线，所有物体都发射，且不需要介质。",
          "说明表面颜色与粗糙度对发射、吸收和反射的影响。",
          "描述区分红外良/劣发射体与吸收体的实验。",
          "知道恒温要求吸收与放出能量的速率相等。（Extended）",
          "知道地球温度取决于辐射平衡。（Extended）",
          "说明辐射速率与表面温度及面积的关系。（Extended）",
          "解释传导、对流与辐射的日常应用。"
        ]
      },
      {
        "type": "heading",
        "text": "传导需要接触"
      },
      {
        "type": "paragraph",
        "text": "传导中能量沿物质传递，而物质本身不移动。所有固体中粒子都在振动并推挤邻近粒子。金属还有第二条快得多的通道：自由电子在晶格中携带能量。"
      },
      {
        "type": "paragraph",
        "text": "正是这第二条通道让金属摸起来发凉——它把能量迅速从你手上导走。气体导热差，因为粒子相距远、碰撞少，所以封闭空气是极好的绝热材料。"
      },
      {
        "type": "paragraph",
        "text": "加上保温层，看曲线变平。保温层起作用靠的是封住不流动的空气，而不是材料本身有什么特别。"
      },
      {
        "type": "heading",
        "text": "对流靠流体本身搬运"
      },
      {
        "type": "paragraph",
        "text": "对流只发生在液体和气体中，因为物质本身必须移动。杯边的空气受热膨胀、密度变小而上升，较冷的空气下沉补充，形成对流。"
      },
      {
        "type": "paragraph",
        "text": "这就是暖气片装在窗下、冷冻室置于顶部的原因。这也解释了固体中为何不能发生对流——粒子被固定在原位。"
      },
      {
        "type": "formula",
        "latex": "\\text{rate of cooling} \\propto \\Delta\\theta",
        "caption": "物体相对环境越热，能量逃逸越快——因此冷却过程会越来越慢。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "conduction（热传导）：能量在物质中传递而物质本身不移动。金属中很快，因为自由电子携带能量。",
          "convection（对流）：靠流体整体流动传递能量。受热流体膨胀、密度变小而上升。",
          "thermal radiation（热辐射）：所有物体都发射的红外线。唯一能穿过真空的传热方式。",
          "emitter（发射体）：发出红外线的表面。粗糙深色最好，光亮浅色最差。",
          "absorber（吸收体）：吸收红外线的表面。良好的发射体同样是良好的吸收体。",
          "insulator（绝热体）：导热差的材料，通常靠封住不流动的空气。它减慢能量传递，但无法完全阻止。"
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
          "Describe experiments comparing good and bad thermal conductors.",
          "Explain conduction using lattice vibrations and free electrons. (Extended)",
          "Explain why gases and most liquids conduct badly. (Extended)",
          "Know that convection transfers energy in liquids and gases, and explain it using density changes.",
          "Know that thermal radiation is infrared, emitted by all objects, and needs no medium.",
          "Describe how surface colour and texture affect emission, absorption and reflection.",
          "Describe experiments distinguishing good and bad emitters and absorbers of infrared.",
          "Know that constant temperature requires equal rates of energy in and out. (Extended)",
          "Know how the Earth’s temperature depends on the radiation balance. (Extended)",
          "Describe how emission rate depends on surface temperature and area. (Extended)",
          "Explain everyday applications of conduction, convection and radiation."
        ]
      },
      {
        "type": "heading",
        "text": "Conduction needs contact"
      },
      {
        "type": "paragraph",
        "text": "In conduction, energy passes along without the material itself moving. In all solids the particles vibrate and jostle their neighbours. In metals there is a second, much faster route: free electrons carrying energy through the lattice."
      },
      {
        "type": "paragraph",
        "text": "That second route is why metals feel cold — they conduct energy out of your hand fast. Gases conduct badly because their particles are far apart and rarely collide, which is why trapped air is such a good insulator."
      },
      {
        "type": "paragraph",
        "text": "Add lagging and watch the curve flatten. The lagging works by trapping still air, not by being special in itself."
      },
      {
        "type": "heading",
        "text": "Convection carries the fluid"
      },
      {
        "type": "paragraph",
        "text": "Convection only happens in liquids and gases, because the material itself has to move. Warm the air near the cup and it expands, so it becomes less dense, so it rises. Cooler air sinks to replace it and a convection current forms."
      },
      {
        "type": "paragraph",
        "text": "This is why radiators go under windows and freezer compartments sit at the top. It also explains why convection cannot happen in a solid — the particles are locked in place."
      },
      {
        "type": "formula",
        "latex": "\\text{rate of cooling} \\propto \\Delta\\theta",
        "caption": "Energy escapes faster the hotter the object is relative to its surroundings — so cooling slows as it proceeds."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "conduction (热传导): Energy transfer through a material without the material moving. Fast in metals because free electrons carry the energy.",
          "convection (对流): Energy transfer by the bulk movement of a fluid. Warmed fluid expands, becomes less dense and rises.",
          "thermal radiation (热辐射): Infrared emitted by every object. The only transfer that works across a vacuum.",
          "emitter (发射体): A surface giving out infrared. Dull dark surfaces are the best emitters; shiny light ones the worst.",
          "absorber (吸收体): A surface taking in infrared. A good emitter is always an equally good absorber.",
          "insulator (绝热体): A material that conducts badly, usually by trapping still air. It slows energy transfer but never stops it."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "2-3-cp1",
      "syllabus": [
        "0625/2.3.1.2",
        "0625/2.3.1.3"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain why a metal spoon conducts thermal energy much better than a plastic one.",
      "markScheme": [
        {
          "text": "In both, particles vibrate more when heated and pass energy to neighbouring particles",
          "marks": 1
        },
        {
          "text": "A metal also contains free (delocalised) electrons",
          "marks": 1
        },
        {
          "text": "These move through the metal carrying energy, which is a much faster process",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两种机制都要写到。自由电子通道才是金属的特殊之处——晶格振动在塑料中同样存在。",
        "en": "Both mechanisms should appear. The free-electron route is what makes metals special — lattice vibration alone happens in the plastic too."
      }
    },
    {
      "id": "2-3-cp2",
      "syllabus": [
        "0625/2.3.2.2"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A heater is placed at the bottom of a tank of water. Explain how convection warms the whole tank.",
      "markScheme": [
        {
          "text": "Water near the heater is warmed and expands",
          "marks": 1
        },
        {
          "text": "so its density decreases and it rises",
          "marks": 1
        },
        {
          "text": "Cooler, denser water sinks to take its place, setting up a convection current",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "因果链是膨胀 → 密度变小 → 上升。只写\"热水上升\"而不提密度，最多得一分。",
        "en": "The chain is expand → less dense → rises. Writing \"hot water rises\" without the density step is worth only one mark."
      }
    },
    {
      "id": "2-3-cp3",
      "syllabus": [
        "0625/2.3.3.3"
      ],
      "tier": "core",
      "commandWord": "Predict",
      "marks": 2,
      "stem": "Two identical cans of hot water are left to cool. One is painted dull black, the other polished silver. Predict which cools faster and give a reason.",
      "markScheme": [
        {
          "text": "The dull black can cools faster",
          "marks": 1
        },
        {
          "text": "because a dull dark surface is a better emitter of infrared radiation",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "既要给预测也要给理由。注意\"黑色吸收更好\"虽然正确但不是这里的理由——罐子是在发射而不是吸收。",
        "en": "Give the prediction and the reason. Note that \"black absorbs better\" is true but not the reason here — the can is emitting, not absorbing."
      }
    },
    {
      "id": "2-3-cp4",
      "syllabus": [
        "0625/2.3.3.4",
        "0625/2.3.3.6"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "The Earth has stayed at a roughly steady average temperature for a long time. Explain what this implies about the radiation it receives and emits.",
      "markScheme": [
        {
          "text": "The Earth must emit energy at the same rate as it receives it from the Sun",
          "marks": 1
        },
        {
          "text": "If the rates were unequal the average temperature would rise or fall until balance was restored",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "恒温永远意味着吸收与放出速率相等——而不是完全没有能量传递。",
        "en": "Constant temperature always means equal rates in and out — not that no energy is being transferred at all."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "surface",
        "label": {
          "zh": "表面处理",
          "en": "Surface finish"
        },
        "min": 0,
        "max": 3,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "startTemp",
        "label": {
          "zh": "初始温度",
          "en": "Starting temperature"
        },
        "min": 25,
        "max": 100,
        "step": 5,
        "defaultValue": 80,
        "unit": "°C"
      },
      {
        "key": "roomTemp",
        "label": {
          "zh": "室温",
          "en": "Room temperature"
        },
        "min": 0,
        "max": 30,
        "step": 1,
        "defaultValue": 20,
        "unit": "°C"
      },
      {
        "key": "area",
        "label": {
          "zh": "表面积",
          "en": "Surface area"
        },
        "min": 0.5,
        "max": 3,
        "step": 0.5,
        "defaultValue": 1,
        "unit": "× reference"
      },
      {
        "key": "lagging",
        "label": {
          "zh": "保温层",
          "en": "Insulating lagging"
        },
        "min": 0,
        "max": 1,
        "step": 0.1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "duration",
        "label": {
          "zh": "绘图时长",
          "en": "Time plotted"
        },
        "min": 10,
        "max": 90,
        "step": 5,
        "defaultValue": 40,
        "unit": "min"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "2-3-heat-transfer",
        "hint": {
          "en": "Switch to shiny silver — the grey reference stays dull black, so the gap between them is the surface effect.",
          "zh": "切换到光亮银色——灰色参照线始终是粗糙黑色，两线之间的差距就是表面效应。"
        },
        "params": [
          {
            "key": "surface",
            "label": {
              "en": "Surface finish",
              "zh": "表面处理"
            },
            "unit": "",
            "min": 0,
            "max": 3,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Dull black",
                  "zh": "粗糙黑色"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Shiny silver",
                  "zh": "光亮银色"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Dull white",
                  "zh": "粗糙白色"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Shiny black",
                  "zh": "光亮黑色"
                }
              }
            ]
          },
          {
            "key": "startTemp",
            "label": {
              "en": "Starting temperature",
              "zh": "初始温度"
            },
            "unit": "°C",
            "min": 25,
            "max": 100,
            "step": 5,
            "default": 80
          },
          {
            "key": "roomTemp",
            "label": {
              "en": "Room temperature",
              "zh": "室温"
            },
            "unit": "°C",
            "min": 0,
            "max": 30,
            "step": 1,
            "default": 20
          },
          {
            "key": "area",
            "label": {
              "en": "Surface area",
              "zh": "表面积"
            },
            "unit": "× reference",
            "symbol": "A",
            "min": 0.5,
            "max": 3,
            "step": 0.5,
            "default": 1
          },
          {
            "key": "lagging",
            "label": {
              "en": "Insulating lagging",
              "zh": "保温层"
            },
            "unit": "",
            "min": 0,
            "max": 1,
            "step": 0.1,
            "default": 0
          },
          {
            "key": "duration",
            "label": {
              "en": "Time plotted",
              "zh": "绘图时长"
            },
            "unit": "min",
            "min": 10,
            "max": 90,
            "step": 5,
            "default": 40
          }
        ],
        "readouts": [
          {
            "key": "initialRate",
            "label": {
              "en": "Initial cooling rate",
              "zh": "初始冷却速率"
            },
            "unit": "°C / min",
            "sigFigs": 3
          },
          {
            "key": "halfTime",
            "label": {
              "en": "Time for excess to halve",
              "zh": "温差减半所需时间"
            },
            "unit": "min",
            "sigFigs": 3
          },
          {
            "key": "finalTemp",
            "label": {
              "en": "Temperature at end",
              "zh": "末温"
            },
            "unit": "°C",
            "sigFigs": 3
          },
          {
            "key": "excessRemaining",
            "label": {
              "en": "Excess still remaining",
              "zh": "剩余温差"
            },
            "unit": "°C",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Dull black",
              "zh": "粗糙黑色"
            },
            "params": {
              "startTemp": 80,
              "roomTemp": 20,
              "surface": 0,
              "area": 1,
              "lagging": 0,
              "duration": 40
            }
          },
          {
            "label": {
              "en": "Shiny silver",
              "zh": "光亮银色"
            },
            "params": {
              "startTemp": 80,
              "roomTemp": 20,
              "surface": 1,
              "area": 1,
              "lagging": 0,
              "duration": 40
            }
          },
          {
            "label": {
              "en": "Triple the area",
              "zh": "表面积三倍"
            },
            "params": {
              "startTemp": 80,
              "roomTemp": 20,
              "surface": 0,
              "area": 3,
              "lagging": 0,
              "duration": 40
            }
          },
          {
            "label": {
              "en": "Well lagged",
              "zh": "厚保温层"
            },
            "params": {
              "startTemp": 80,
              "roomTemp": 20,
              "surface": 0,
              "area": 1,
              "lagging": 1,
              "duration": 40
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
        "zh": "粗糙黑色",
        "en": "Dull black"
      },
      "params": {
        "startTemp": 80,
        "roomTemp": 20,
        "surface": 0,
        "area": 1,
        "lagging": 0,
        "duration": 40
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "光亮银色",
        "en": "Shiny silver"
      },
      "params": {
        "startTemp": 80,
        "roomTemp": 20,
        "surface": 1,
        "area": 1,
        "lagging": 0,
        "duration": 40
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "表面积三倍",
        "en": "Triple the area"
      },
      "params": {
        "startTemp": 80,
        "roomTemp": 20,
        "surface": 0,
        "area": 3,
        "lagging": 0,
        "duration": 40
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "厚保温层",
        "en": "Well lagged"
      },
      "params": {
        "startTemp": 80,
        "roomTemp": 20,
        "surface": 0,
        "area": 1,
        "lagging": 1,
        "duration": 40
      }
    }
  ]
};
