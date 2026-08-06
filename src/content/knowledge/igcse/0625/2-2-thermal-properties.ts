/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/2-2-thermal-properties
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/2-2-thermal-properties/narration';
import { equations } from '../../igcse-src/0625/2-2-thermal-properties/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/2-2-thermal-properties/kernel';

export const kp22ThermalProperties: KnowledgePoint = {
  "id": "igcse-0625-2-2-thermal-properties",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "加热、熔化与沸腾",
    "en": "Heating, melting and boiling"
  },
  "summary": {
    "zh": "持续加热冰块并记录温度。会出现两段水平平台——能量在输入，温度却不变。",
    "en": "Heat ice steadily and plot the temperature. Two flat plateaus appear where energy goes in but the temperature will not move."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/2.2.1.1",
      "0625/2.2.1.2",
      "0625/2.2.1.3",
      "0625/2.2.2.1",
      "0625/2.2.2.2",
      "0625/2.2.2.3",
      "0625/2.2.2.4",
      "0625/2.2.3.1",
      "0625/2.2.3.2",
      "0625/2.2.3.3",
      "0625/2.2.3.4",
      "0625/2.2.3.5",
      "0625/2.2.3.6",
      "0625/2.2.3.7",
      "0625/2.2.3.8"
    ]
  },
  "keywords": {
    "zh": [
      "比热容",
      "内能",
      "熔化",
      "沸腾",
      "蒸发",
      "热膨胀"
    ],
    "en": [
      "specific heat capacity",
      "internal energy",
      "melting",
      "boiling",
      "evaporation",
      "thermal expansion"
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
          "描述固体、液体和气体的热膨胀及其日常后果。",
          "用粒子排列与运动解释三态膨胀量级的差异。（Extended）",
          "知道温度升高会增加内能。",
          "把升温描述为粒子平均动能增大。（Extended）",
          "定义比热容并使用 c = E / (mΔθ)。（Extended）",
          "描述测定固体与液体比热容的实验。（Extended）",
          "把熔化和沸腾描述为吸热而温度不变。",
          "知道标准大气压下水的熔点与沸点。",
          "用粒子描述凝结、凝固与蒸发。",
          "知道蒸发使剩余液体降温。",
          "说明沸腾与蒸发的区别。（Extended）",
          "说明温度、表面积与空气流动对蒸发的影响。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "斜率对应比热容"
      },
      {
        "type": "paragraph",
        "text": "在倾斜段，能量使温度升高。每升高一度所需的能量就是比热容——每千克每度所需的能量。"
      },
      {
        "type": "formula",
        "latex": "c = \\frac{E}{m\\,\\Delta\\theta}"
      },
      {
        "type": "paragraph",
        "text": "看我把比热容加倍时会怎样。斜率减半。比热容大的物质很\"倔\"——要让它升温需要很多能量。"
      },
      {
        "type": "paragraph",
        "text": "这就是为什么暖气和汽车散热器都用水，也是沿海地区气候比内陆温和的原因。水每升高一度能储存大量能量。"
      },
      {
        "type": "heading",
        "text": "为什么沸腾要久得多"
      },
      {
        "type": "paragraph",
        "text": "回到水。比较两段水平线。在同样的加热功率下，沸腾平台比熔化平台长将近七倍。"
      },
      {
        "type": "paragraph",
        "text": "熔化只需让粒子松动到能相互滑动。沸腾则要克服液体内部所有作用力，把粒子彻底拉开。所需能量多得多。"
      },
      {
        "type": "heading",
        "text": "蒸发不是沸腾"
      },
      {
        "type": "paragraph",
        "text": "蒸发在任何温度下都能发生，只在表面进行，且只有能量最高的粒子逸出。沸腾在固定温度下发生，在液体内部各处进行，内部会产生气泡。"
      },
      {
        "type": "paragraph",
        "text": "由于跑掉的是最快的粒子，剩下粒子的平均能量下降——液体因此变冷。这就是出汗降温的原理，也是你出泳池时感到冷的原因。"
      },
      {
        "type": "heading",
        "text": "受热会变大"
      },
      {
        "type": "paragraph",
        "text": "还有一个效应。几乎所有物质受热都会膨胀，因为粒子振动加剧、彼此推得更开。气体膨胀最多，其次液体，最后固体——因为固体中粒子束缚得最紧。"
      },
      {
        "type": "paragraph",
        "text": "工程师会预留余量：铁轨之间的缝隙、桥梁下的滚轴、高压线的下垂弧度。注意粒子本身从不变大——变大的只是它们之间的间隙。"
      },
      {
        "type": "formula",
        "latex": "E = mc\\,\\Delta\\theta",
        "caption": "用于倾斜段，即温度发生变化的部分。"
      },
      {
        "type": "formula",
        "latex": "E = mL",
        "caption": "用于水平平台，即物态改变而温度不变的部分。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "specific heat capacity（比热容）：使 1 kg 物质升温 1 °C 所需的能量。水的比热容异常高，约 4200 J / (kg °C)。",
          "internal energy（内能）：物体内所有粒子动能与势能的总和。加热会使其增加。",
          "melting（熔化）：在固定温度下由固态变为液态。吸收能量但温度不变。",
          "boiling（沸腾）：在固定温度下由液态变为气态，发生在液体内部各处并产生气泡。",
          "evaporation（蒸发）：能量较高的粒子从液面逸出。在任何温度下都能发生，并使剩余液体降温。",
          "thermal expansion（热膨胀）：受热时体积增大，因粒子振动加剧、间距变大。粒子本身并不变大。"
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
          "Describe the thermal expansion of solids, liquids and gases, with everyday consequences.",
          "Explain the relative sizes of expansion using particle arrangement and motion. (Extended)",
          "Know that a rise in temperature increases internal energy.",
          "Describe a temperature rise as an increase in average particle kinetic energy. (Extended)",
          "Define specific heat capacity and use c = E / (mΔθ). (Extended)",
          "Describe experiments to measure the specific heat capacity of a solid and a liquid. (Extended)",
          "Describe melting and boiling as energy input without a change in temperature.",
          "Know the melting and boiling temperatures of water at standard pressure.",
          "Describe condensation, solidification and evaporation in terms of particles.",
          "Know that evaporation cools the liquid left behind.",
          "Describe the differences between boiling and evaporation. (Extended)",
          "Describe how temperature, surface area and air movement affect evaporation. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "The slope is the specific heat capacity"
      },
      {
        "type": "paragraph",
        "text": "On the sloping sections, energy raises the temperature. How much energy each degree costs is the specific heat capacity — the energy needed per kilogram per degree."
      },
      {
        "type": "formula",
        "latex": "c = \\frac{E}{m\\,\\Delta\\theta}"
      },
      {
        "type": "paragraph",
        "text": "Watch what happens when I double the specific heat capacity. The slope halves. A substance with a high specific heat capacity is stubborn — it takes a lot of energy to warm it up."
      },
      {
        "type": "paragraph",
        "text": "That is why water is used in central heating and car radiators, and why coastal places have milder weather than inland ones. Water stores a lot of energy for each degree."
      },
      {
        "type": "heading",
        "text": "Why boiling takes so much longer"
      },
      {
        "type": "paragraph",
        "text": "Back to water. Now compare the two flat sections. The boiling plateau is nearly seven times longer than the melting one, with the same heater running."
      },
      {
        "type": "paragraph",
        "text": "Melting only has to loosen the particles enough to let them slide past each other. Boiling has to pull them completely apart, against all the forces holding the liquid together. That takes far more energy."
      },
      {
        "type": "heading",
        "text": "Evaporation is not boiling"
      },
      {
        "type": "paragraph",
        "text": "Evaporation happens at any temperature, only at the surface, and only the most energetic particles escape. Boiling happens at one fixed temperature, throughout the liquid, with bubbles forming inside it."
      },
      {
        "type": "paragraph",
        "text": "Because the fastest particles leave, the average energy of those remaining falls — so the liquid cools. That is why sweating works, and why you feel cold stepping out of a swimming pool."
      },
      {
        "type": "heading",
        "text": "Heating makes things bigger"
      },
      {
        "type": "paragraph",
        "text": "One more effect. Heat almost anything and it expands, because the particles vibrate more and push each other further apart. Gases expand most, then liquids, then solids — because the particles start out most tightly held in a solid."
      },
      {
        "type": "paragraph",
        "text": "Engineers plan for it: gaps between railway rails, rollers under bridges, and loops in overhead power lines. Note that the particles themselves never get bigger — only the spaces between them."
      },
      {
        "type": "formula",
        "latex": "E = mc\\,\\Delta\\theta",
        "caption": "Use this on the sloping sections, where the temperature is changing."
      },
      {
        "type": "formula",
        "latex": "E = mL",
        "caption": "Use this on the flat plateaus, where the state is changing but the temperature is not."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "specific heat capacity (比热容): The energy needed to raise the temperature of 1 kg of a substance by 1 °C. Water’s is unusually high, about 4200 J / (kg °C).",
          "internal energy (内能): The total kinetic and potential energy of all the particles in an object. Heating increases it.",
          "melting (熔化): The change from solid to liquid at a fixed temperature. Energy goes in but the temperature stays constant.",
          "boiling (沸腾): A change from liquid to gas at one fixed temperature, happening throughout the liquid with bubbles forming inside it.",
          "evaporation (蒸发): The escape of the more energetic particles from the surface of a liquid. Happens at any temperature and cools what is left.",
          "thermal expansion (热膨胀): The increase in size on heating, caused by particles vibrating more and moving further apart. The particles themselves do not grow."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "2-2-cp1",
      "syllabus": [
        "0625/2.2.3.1"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A beaker of pure water is heated steadily. While it is boiling, the temperature stays at 100 °C even though the heater is still on. Explain why.",
      "markScheme": [
        {
          "text": "The energy supplied is used to separate the particles / overcome the forces between them",
          "marks": 1,
          "alternatives": [
            "used to change state"
          ]
        },
        {
          "text": "rather than to increase the kinetic energy of the particles, so the temperature does not rise",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两半都要写：能量在做什么，以及它没在做什么。只写\"在改变状态\"得一分。",
        "en": "Both halves are needed: what the energy IS doing, and what it is NOT doing. Saying only \"it is changing state\" scores one mark."
      }
    },
    {
      "id": "2-2-cp2",
      "syllabus": [
        "0625/2.2.2.3"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A 2.0 kg block of aluminium is heated from 20 °C to 70 °C. The specific heat capacity of aluminium is 900 J / (kg °C). Calculate the energy supplied.",
      "markScheme": [
        {
          "text": "Uses E = mcΔθ",
          "marks": 1
        },
        {
          "text": "Correct substitution: 2.0 × 900 × 50",
          "marks": 1
        },
        {
          "text": "90 000 J (accept 90 kJ)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "Δθ 是温度变化量 50 °C，不是末温 70 °C。代入 70 会得到 126 000 J，丢两分。",
        "en": "Δθ is the temperature CHANGE, 50 °C, not the final temperature of 70 °C. Substituting 70 gives 126 000 J and loses two marks."
      }
    },
    {
      "id": "2-2-cp3",
      "syllabus": [
        "0625/2.2.3.6"
      ],
      "tier": "supplement",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Compare evaporation with boiling.",
      "markScheme": [
        {
          "text": "Evaporation happens at any temperature, whereas boiling happens only at one fixed temperature",
          "marks": 1
        },
        {
          "text": "Evaporation happens only at the surface, whereas boiling happens throughout the liquid",
          "marks": 1
        },
        {
          "text": "Bubbles form in the liquid during boiling but not during evaporation",
          "marks": 1,
          "alternatives": [
            "evaporation is a slower process"
          ]
        }
      ],
      "examinerNote": {
        "zh": "Compare 要求对照着写。先列三条蒸发再列三条沸腾往往会失分——要成对写。",
        "en": "Compare means linked statements. Writing three facts about evaporation and then three about boiling usually loses marks — pair them up."
      }
    },
    {
      "id": "2-2-cp4",
      "syllabus": [
        "0625/2.2.1.3"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "For the same rise in temperature, a gas expands far more than a solid. Explain why, in terms of particles.",
      "markScheme": [
        {
          "text": "In a solid the particles are held closely together by strong forces, so they can only vibrate a little further apart",
          "marks": 1
        },
        {
          "text": "In a gas the forces between particles are negligible, so the particles are free to move much further apart",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "绝不要写粒子本身膨胀。膨胀完全是粒子之间间距增大所致。",
        "en": "Never write that the particles themselves expand. Expansion is entirely about the spacing between particles increasing."
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
        "min": 0.1,
        "max": 2,
        "step": 0.1,
        "defaultValue": 0.5,
        "unit": "kg"
      },
      {
        "key": "specificHeat",
        "label": {
          "zh": "比热容",
          "en": "Specific heat capacity"
        },
        "min": 500,
        "max": 8000,
        "step": 100,
        "defaultValue": 4200,
        "unit": "J / (kg °C)"
      },
      {
        "key": "latentFusion",
        "label": {
          "zh": "熔化潜热",
          "en": "Latent heat of fusion"
        },
        "min": 50,
        "max": 500,
        "step": 10,
        "defaultValue": 334,
        "unit": "kJ / kg"
      },
      {
        "key": "latentVaporisation",
        "label": {
          "zh": "汽化潜热",
          "en": "Latent heat of vaporisation"
        },
        "min": 200,
        "max": 3000,
        "step": 50,
        "defaultValue": 2260,
        "unit": "kJ / kg"
      },
      {
        "key": "power",
        "label": {
          "zh": "加热功率",
          "en": "Heater power"
        },
        "min": 100,
        "max": 2000,
        "step": 50,
        "defaultValue": 500,
        "unit": "W"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "2-2-thermal-properties",
        "hint": {
          "en": "Double the specific heat capacity — the sloping sections get shallower, but the plateaus do not move.",
          "zh": "把比热容加倍——倾斜段变缓，但两段平台的长度不变。"
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
            "min": 0.1,
            "max": 2,
            "step": 0.1,
            "default": 0.5
          },
          {
            "key": "specificHeat",
            "label": {
              "en": "Specific heat capacity",
              "zh": "比热容"
            },
            "unit": "J / (kg °C)",
            "symbol": "c",
            "min": 500,
            "max": 8000,
            "step": 100,
            "default": 4200
          },
          {
            "key": "latentFusion",
            "label": {
              "en": "Latent heat of fusion",
              "zh": "熔化潜热"
            },
            "unit": "kJ / kg",
            "min": 50,
            "max": 500,
            "step": 10,
            "default": 334
          },
          {
            "key": "latentVaporisation",
            "label": {
              "en": "Latent heat of vaporisation",
              "zh": "汽化潜热"
            },
            "unit": "kJ / kg",
            "min": 200,
            "max": 3000,
            "step": 50,
            "default": 2260
          },
          {
            "key": "power",
            "label": {
              "en": "Heater power",
              "zh": "加热功率"
            },
            "unit": "W",
            "symbol": "P",
            "min": 100,
            "max": 2000,
            "step": 50,
            "default": 500
          }
        ],
        "readouts": [
          {
            "key": "liquidGradient",
            "label": {
              "en": "Slope while liquid",
              "zh": "液态段斜率"
            },
            "unit": "°C / s",
            "sigFigs": 3
          },
          {
            "key": "energyToMelt",
            "label": {
              "en": "Energy to melt",
              "zh": "熔化所需能量"
            },
            "unit": "J",
            "sigFigs": 3
          },
          {
            "key": "energyToBoil",
            "label": {
              "en": "Energy to boil",
              "zh": "沸腾所需能量"
            },
            "unit": "J",
            "sigFigs": 3
          },
          {
            "key": "boilToMeltRatio",
            "label": {
              "en": "Boiling ÷ melting",
              "zh": "沸腾 ÷ 熔化"
            },
            "unit": "×",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Water",
              "zh": "水"
            },
            "params": {
              "mass": 0.5,
              "specificHeat": 4200,
              "latentFusion": 334,
              "latentVaporisation": 2260,
              "power": 500
            }
          },
          {
            "label": {
              "en": "Double the specific heat",
              "zh": "比热容加倍"
            },
            "params": {
              "mass": 0.5,
              "specificHeat": 8000,
              "latentFusion": 334,
              "latentVaporisation": 2260,
              "power": 500
            }
          },
          {
            "label": {
              "en": "Twice the mass",
              "zh": "质量加倍"
            },
            "params": {
              "mass": 1,
              "specificHeat": 4200,
              "latentFusion": 334,
              "latentVaporisation": 2260,
              "power": 500
            }
          },
          {
            "label": {
              "en": "Stronger heater",
              "zh": "加热功率更大"
            },
            "params": {
              "mass": 0.5,
              "specificHeat": 4200,
              "latentFusion": 334,
              "latentVaporisation": 2260,
              "power": 1500
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
        "zh": "水",
        "en": "Water"
      },
      "params": {
        "mass": 0.5,
        "specificHeat": 4200,
        "latentFusion": 334,
        "latentVaporisation": 2260,
        "power": 500
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "比热容加倍",
        "en": "Double the specific heat"
      },
      "params": {
        "mass": 0.5,
        "specificHeat": 8000,
        "latentFusion": 334,
        "latentVaporisation": 2260,
        "power": 500
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "质量加倍",
        "en": "Twice the mass"
      },
      "params": {
        "mass": 1,
        "specificHeat": 4200,
        "latentFusion": 334,
        "latentVaporisation": 2260,
        "power": 500
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "加热功率更大",
        "en": "Stronger heater"
      },
      "params": {
        "mass": 0.5,
        "specificHeat": 4200,
        "latentFusion": 334,
        "latentVaporisation": 2260,
        "power": 1500
      }
    }
  ]
};
