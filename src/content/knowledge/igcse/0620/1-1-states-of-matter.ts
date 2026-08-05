/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/1-1-states-of-matter
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/1-1-states-of-matter/narration';
import { equations } from '../../igcse-src/0620/1-1-states-of-matter/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/1-1-states-of-matter/kernel';

export const kp11StatesOfMatter: KnowledgePoint = {
  "id": "igcse-0620-1-1-states-of-matter",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "物质的三态与粒子模型",
    "en": "States of matter and the particle model"
  },
  "summary": {
    "zh": "熔化过程中加热器并没有关，那能量去哪了？去把粒子分开，而不是加速粒子——这正是温度计停住的原因。",
    "en": "The heater is still on during melting, so where is the energy going? Into pulling particles apart rather than speeding them up — which is exactly why the thermometer stops."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/1.1.1",
      "0620/1.1.2",
      "0620/1.1.3",
      "0620/1.1.4",
      "0620/1.1.5",
      "0620/1.1.6",
      "0620/1.2.1",
      "0620/1.2.2"
    ]
  },
  "keywords": {
    "zh": [
      "分子动理论",
      "蒸发",
      "扩散",
      "绝对零度"
    ],
    "en": [
      "kinetic particle model",
      "evaporation",
      "diffusion",
      "absolute zero"
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
          "说出固体、液体和气体的区别性质。",
          "用粒子的排列、间距与运动描述三种状态。",
          "描述熔化、沸腾、蒸发、凝固与凝结。",
          "描述温度与压强对气体体积的影响。",
          "用分子动理论解释物态变化与气体的行为。（Extended）",
          "用分子动理论描述并解释扩散。",
          "解释为何相对分子质量较小的气体扩散更快。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "熔化过程中加热器并没有关，那能量去哪了？去把粒子分开，而不是加速粒子——这正是温度计停住的原因。"
      },
      {
        "type": "formula",
        "latex": "\\text{temperature} \\propto \\text{mean kinetic energy of the particles}",
        "caption": "本主题所有解释的依据。它解释了为什么物态变化时温度无法上升，也解释了为什么在相同温度下较轻的分子扩散更快。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "kinetic particle model（分子动理论）：认为一切物质都由不断运动的粒子构成，而温度是粒子运动快慢的量度。",
          "evaporation（蒸发）：液体在低于沸点的任何温度下于表面变为气体。只有运动最快的粒子能逃逸，因此蒸发会使剩下的液体变冷。",
          "diffusion（扩散）：由粒子的随机运动引起的、从高浓度区域向低浓度区域的净移动。",
          "absolute zero（绝对零度）：−273 °C，气体体积图外推到零时对应的温度。没有真实气体能达到它——所有气体都会先凝结。"
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
          "State the distinguishing properties of solids, liquids and gases.",
          "Describe the three states in terms of the arrangement, separation and motion of the particles.",
          "Describe melting, boiling, evaporating, freezing and condensing.",
          "Describe the effect of temperature and pressure on the volume of a gas.",
          "Explain changes of state and the behaviour of a gas using the kinetic particle model. (Extended)",
          "Describe and explain diffusion using the kinetic particle model.",
          "Explain why gases with a lower relative molecular mass diffuse faster. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "The heater is still on during melting, so where is the energy going? Into pulling particles apart rather than speeding them up — which is exactly why the thermometer stops."
      },
      {
        "type": "formula",
        "latex": "\\text{temperature} \\propto \\text{mean kinetic energy of the particles}",
        "caption": "The sentence behind every explanation in this topic. It is why the temperature cannot rise during a change of state, and why lighter molecules diffuse faster at the same temperature."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "kinetic particle model (分子动理论): The idea that all matter is made of particles in constant motion, and that temperature is a measure of how fast they move.",
          "evaporation (蒸发): Liquid turning to gas at the surface, at any temperature below the boiling point. Only the fastest-moving particles escape, which is why evaporation cools what is left behind.",
          "diffusion (扩散): The net movement of particles from a region of higher concentration to one of lower concentration, caused by their random motion.",
          "absolute zero (绝对零度): −273 °C, the temperature a gas volume graph extrapolates to zero at. No real gas reaches it — every gas condenses first."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-1-1-cp1",
      "syllabus": [
        "0620/1.1.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe the arrangement, the separation and the motion of the particles in a liquid.",
      "markScheme": [
        {
          "text": "The particles are arranged randomly / irregularly",
          "marks": 1
        },
        {
          "text": "They are close together, touching, with little space between them",
          "marks": 1
        },
        {
          "text": "They move by sliding past one another / they can change position",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "题目问的是三件事，每一件各有一分。\"粒子靠得很近并能运动\"只回答了其中两件。",
        "en": "Three separate things are being asked for, and each earns its own mark. \"The particles are close together and can move\" answers two of the three."
      }
    },
    {
      "id": "0620-1-1-cp2",
      "syllabus": [
        "0620/1.1.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A solid is heated steadily. Its temperature rises until it reaches the melting point, then stays constant until all the solid has melted, even though heating continues. Explain why the temperature stays constant.",
      "markScheme": [
        {
          "text": "Energy is still being supplied to the substance throughout",
          "marks": 1
        },
        {
          "text": "but it is being used to overcome the forces of attraction between the particles / to separate the particles, rather than to increase their speed",
          "marks": 1
        },
        {
          "text": "Temperature is a measure of the average kinetic energy of the particles, so if their average speed does not increase the temperature does not rise",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "最后一分是把温度与粒子速度联系起来。没有这一步，答案只说明了能量的去向，却没有说明为什么温度计因此不动。",
        "en": "The last mark connects temperature to particle speed. Without it the answer says where the energy goes but never says why that stops the thermometer moving."
      }
    },
    {
      "id": "0620-1-1-cp3",
      "syllabus": [
        "0620/1.1.6"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A sealed syringe contains a fixed mass of gas. Explain, in terms of the particles, what happens to the volume of the gas when it is heated at constant pressure.",
      "markScheme": [
        {
          "text": "The volume increases",
          "marks": 1
        },
        {
          "text": "Heating gives the particles more kinetic energy, so they move faster and collide with the walls of the syringe more often and with greater force",
          "marks": 1
        },
        {
          "text": "so the gas pushes the plunger out until the pressure inside falls back to match the pressure outside",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "压强是恒定的，因此答案必须写到体积变化直至压强回落。只写\"压强增大\"与题目条件矛盾。",
        "en": "The pressure is constant, so the answer must end with the volume changing until the pressure comes back down. Stopping at \"the pressure increases\" contradicts the question."
      }
    },
    {
      "id": "0620-1-1-cp4",
      "syllabus": [
        "0620/1.2.1",
        "0620/1.2.2"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Cotton wool soaked in concentrated ammonia solution is placed at one end of a long glass tube and cotton wool soaked in concentrated hydrochloric acid at the other. A white ring of ammonium chloride forms inside the tube, closer to the hydrochloric acid end. Explain these observations. (Mr: NH₃ = 17, HCl = 36.5)",
      "markScheme": [
        {
          "text": "Both liquids give off a gas, and the gas particles diffuse along the tube by random motion, moving from where they are more concentrated to where they are less concentrated",
          "marks": 1
        },
        {
          "text": "The white ring forms where the two gases meet and react to form ammonium chloride",
          "marks": 1
        },
        {
          "text": "At the same temperature all the gas particles have the same average kinetic energy, so the lighter ammonia molecules move faster than the heavier hydrogen chloride molecules",
          "marks": 1
        },
        {
          "text": "so in the same time the ammonia travels further along the tube, and the ring forms nearer the hydrochloric acid end",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"轻则快\"的理由本身值一分：平均动能相同，质量越小则速度越大。仅断言轻气体扩散更快得不到这一分。",
        "en": "The reason lighter means faster is worth a mark on its own: same average kinetic energy, so smaller mass means greater speed. Simply asserting that light gases diffuse faster does not earn it."
      }
    },
    {
      "id": "0620-1-1-cp5",
      "syllabus": [
        "0620/1.1.3"
      ],
      "tier": "core",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Compare evaporation and boiling.",
      "markScheme": [
        {
          "text": "Both are a change from liquid to gas",
          "marks": 1
        },
        {
          "text": "Evaporation happens only at the surface of the liquid, while boiling happens throughout the liquid, with bubbles forming inside it",
          "marks": 1
        },
        {
          "text": "Evaporation happens at any temperature below the boiling point, while boiling happens only at the boiling point",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"Compare\" 要求写出相同点和不同点。只罗列蒸发是什么的答案并没有作出比较。",
        "en": "\"Compare\" wants both the similarity and the differences. An answer that lists only what evaporation is has compared nothing."
      }
    },
    {
      "id": "0620-1-1-cp6",
      "syllabus": [
        "0620/1.1.1",
        "0620/1.1.4"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A gas can be compressed into a much smaller volume, but a liquid cannot. Explain why.",
      "markScheme": [
        {
          "text": "In a gas the particles are far apart, with a great deal of empty space between them, and compressing the gas pushes them closer together",
          "marks": 1
        },
        {
          "text": "In a liquid the particles are already touching, so there is almost no space left to remove",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "被压缩的是粒子之间的空隙，而不是粒子本身。粒子不会变小。",
        "en": "It is the space between the particles that is compressed, not the particles themselves. Particles do not get smaller."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "meltingPoint",
        "label": {
          "zh": "熔点",
          "en": "Melting point"
        },
        "min": -250,
        "max": 100,
        "step": 1,
        "defaultValue": 0,
        "unit": "°C"
      },
      {
        "key": "boilingPoint",
        "label": {
          "zh": "沸点",
          "en": "Boiling point"
        },
        "min": -200,
        "max": 400,
        "step": 1,
        "defaultValue": 100,
        "unit": "°C"
      },
      {
        "key": "temperature",
        "label": {
          "zh": "样品温度",
          "en": "Temperature of the sample"
        },
        "min": -250,
        "max": 400,
        "step": 1,
        "defaultValue": 25,
        "unit": "°C"
      },
      {
        "key": "pressure",
        "label": {
          "zh": "气体所受压强",
          "en": "Pressure on the gas"
        },
        "min": 0.5,
        "max": 4,
        "step": 0.5,
        "defaultValue": 1,
        "unit": "atm"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "1-1-states-of-matter",
        "hint": {
          "en": "Compare the lengths of the two flat stretches. Boiling takes several times the energy of melting, and that is not a drawing choice.",
          "zh": "比较两段水平线的长度。沸腾所需能量是熔化的数倍，这并不是作图时随意画的。"
        },
        "params": [
          {
            "key": "meltingPoint",
            "label": {
              "en": "Melting point",
              "zh": "熔点"
            },
            "unit": "°C",
            "min": -250,
            "max": 100,
            "step": 1,
            "default": 0
          },
          {
            "key": "boilingPoint",
            "label": {
              "en": "Boiling point",
              "zh": "沸点"
            },
            "unit": "°C",
            "min": -200,
            "max": 400,
            "step": 1,
            "default": 100
          },
          {
            "key": "temperature",
            "label": {
              "en": "Temperature of the sample",
              "zh": "样品温度"
            },
            "unit": "°C",
            "min": -250,
            "max": 400,
            "step": 1,
            "default": 25
          },
          {
            "key": "pressure",
            "label": {
              "en": "Pressure on the gas",
              "zh": "气体所受压强"
            },
            "unit": "atm",
            "min": 0.5,
            "max": 4,
            "step": 0.5,
            "default": 1
          }
        ],
        "readouts": [
          {
            "key": "meltingPoint",
            "label": {
              "en": "Melting point",
              "zh": "熔点"
            },
            "unit": "°C",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "boilingPoint",
            "label": {
              "en": "Boiling point",
              "zh": "沸点"
            },
            "unit": "°C",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "temperature",
            "label": {
              "en": "Temperature now",
              "zh": "当前温度"
            },
            "unit": "°C",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "gasVolume",
            "label": {
              "en": "Volume of one mole of gas",
              "zh": "1 摩尔气体的体积"
            },
            "unit": "dm³",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Water — solid, liquid and gas",
              "zh": "水——固、液、气"
            },
            "params": {
              "meltingPoint": 0,
              "boilingPoint": 100,
              "temperature": 25,
              "pressure": 1
            }
          },
          {
            "label": {
              "en": "Water below freezing",
              "zh": "冰点以下的水"
            },
            "params": {
              "meltingPoint": 0,
              "boilingPoint": 100,
              "temperature": -20,
              "pressure": 1
            }
          },
          {
            "label": {
              "en": "Ethanol",
              "zh": "乙醇"
            },
            "params": {
              "meltingPoint": -114,
              "boilingPoint": 78,
              "temperature": 25,
              "pressure": 1
            }
          },
          {
            "label": {
              "en": "Oxygen — a gas at room temperature",
              "zh": "氧——室温下的气体"
            },
            "params": {
              "meltingPoint": -218,
              "boilingPoint": -183,
              "temperature": 25,
              "pressure": 1
            }
          },
          {
            "label": {
              "en": "Mercury — a liquid metal",
              "zh": "汞——液态金属"
            },
            "params": {
              "meltingPoint": -39,
              "boilingPoint": 357,
              "temperature": 25,
              "pressure": 1
            }
          },
          {
            "label": {
              "en": "The gas under four atmospheres",
              "zh": "4 个大气压下的气体"
            },
            "params": {
              "meltingPoint": 0,
              "boilingPoint": 100,
              "temperature": 25,
              "pressure": 4
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
        "zh": "水——固、液、气",
        "en": "Water — solid, liquid and gas"
      },
      "params": {
        "meltingPoint": 0,
        "boilingPoint": 100,
        "temperature": 25,
        "pressure": 1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "冰点以下的水",
        "en": "Water below freezing"
      },
      "params": {
        "meltingPoint": 0,
        "boilingPoint": 100,
        "temperature": -20,
        "pressure": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "乙醇",
        "en": "Ethanol"
      },
      "params": {
        "meltingPoint": -114,
        "boilingPoint": 78,
        "temperature": 25,
        "pressure": 1
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "氧——室温下的气体",
        "en": "Oxygen — a gas at room temperature"
      },
      "params": {
        "meltingPoint": -218,
        "boilingPoint": -183,
        "temperature": 25,
        "pressure": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "汞——液态金属",
        "en": "Mercury — a liquid metal"
      },
      "params": {
        "meltingPoint": -39,
        "boilingPoint": 357,
        "temperature": 25,
        "pressure": 1
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "4 个大气压下的气体",
        "en": "The gas under four atmospheres"
      },
      "params": {
        "meltingPoint": 0,
        "boilingPoint": 100,
        "temperature": 25,
        "pressure": 4
      }
    }
  ]
};
