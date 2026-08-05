/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/10-3-air-and-climate
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/10-3-air-and-climate/narration';
import { equations } from '../../igcse-src/0620/10-3-air-and-climate/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/10-3-air-and-climate/kernel';

export const kp103AirAndClimate: KnowledgePoint = {
  "id": "igcse-0620-10-3-air-and-climate",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "空气质量与气候",
    "en": "Air quality and climate"
  },
  "summary": {
    "zh": "二氧化碳在一个世纪里每十年上升不到 1 ppm，此后每十年约上升 16 ppm。这条曲线的形状本身就是论据。",
    "en": "Carbon dioxide rose by less than one part per million per decade for a century, then by about sixteen. The shape of that curve is the argument."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/10.3.1",
      "0620/10.3.2",
      "0620/10.3.3",
      "0620/10.3.4",
      "0620/10.3.5",
      "0620/10.3.6",
      "0620/10.3.7",
      "0620/10.3.8"
    ]
  },
  "keywords": {
    "zh": [
      "温室气体",
      "酸雨",
      "催化转化器",
      "颗粒物",
      "ppm（百万分之一）"
    ],
    "en": [
      "greenhouse gas",
      "acid rain",
      "catalytic converter",
      "particulate",
      "ppm"
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
          "说出洁净干燥空气的组成。",
          "说出常见空气污染物的来源与危害。",
          "说明二氧化碳和甲烷是温室气体。",
          "描述温室效应及其与气候变化的联系。",
          "描述减缓气候变化影响的措施。",
          "描述催化转化器在减少污染中的作用。",
          "写出催化转化器中反应的化学方程式。（Extended）",
          "解释光化学烟雾与酸雨的形成。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "二氧化碳在一个世纪里每十年上升不到 1 ppm，此后每十年约上升 16 ppm。这条曲线的形状本身就是论据。"
      },
      {
        "type": "formula",
        "latex": "2\\,\\mathrm{CO} + 2\\,\\mathrm{NO} \\rightarrow 2\\,\\mathrm{CO_2} + \\mathrm{N_2}",
        "caption": "催化转化器中的反应。两种污染物相互反应：一氧化碳被氧化，一氧化氮被还原。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{N_2} + \\mathrm{O_2} \\rightarrow 2\\,\\mathrm{NO}",
        "caption": "吸热反应，所以只在高温处发生——即发动机内部。尾气中的氮氧化物由此而来。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{SO_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{H_2SO_3}",
        "caption": "二氧化硫溶于雨水。在空气中进一步氧化生成硫酸，这正是酸雨腐蚀性强的原因。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "greenhouse gas（温室气体）：能吸收地球放出的长波辐射并将部分重新向下发射的气体。考纲提到的是二氧化碳和甲烷。",
          "acid rain（酸雨）：因溶有二氧化硫和氮氧化物而呈酸性的降雨。它腐蚀建筑、毁坏树木、使湖泊酸化。",
          "catalytic converter（催化转化器）：排气系统中镀铂的蜂窝结构，把一氧化碳和一氧化氮转化为二氧化碳和氮气。",
          "particulate（颗粒物）：不完全燃烧产生的微小固体颗粒，主要成分为碳。它沉积在肺部，引起呼吸系统疾病。",
          "ppm（ppm（百万分之一））：百万分率：400 ppm 表示每一百万个分子中有 400 个。甲烷更为稀少，用十亿分率（ppb）表示。"
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
          "State the composition of clean, dry air.",
          "State the sources and adverse effects of common air pollutants.",
          "State that carbon dioxide and methane are greenhouse gases.",
          "Describe the greenhouse effect and its link to climate change.",
          "Describe strategies to reduce the effects of climate change.",
          "Describe the use of catalytic converters in reducing pollution.",
          "State the symbol equations for the reactions in a catalytic converter. (Extended)",
          "Explain how photochemical smog and acid rain are formed. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Carbon dioxide rose by less than one part per million per decade for a century, then by about sixteen. The shape of that curve is the argument."
      },
      {
        "type": "formula",
        "latex": "2\\,\\mathrm{CO} + 2\\,\\mathrm{NO} \\rightarrow 2\\,\\mathrm{CO_2} + \\mathrm{N_2}",
        "caption": "The catalytic converter. Two pollutants react with each other: the carbon monoxide is oxidised, the nitrogen monoxide reduced."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{N_2} + \\mathrm{O_2} \\rightarrow 2\\,\\mathrm{NO}",
        "caption": "Endothermic, so it only happens where it is hot — inside an engine. This is where the nitrogen oxides in exhaust come from."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{SO_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{H_2SO_3}",
        "caption": "Sulfur dioxide dissolving in rain. Further oxidation in the air gives sulfuric acid, which is what makes acid rain so corrosive."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "greenhouse gas (温室气体): A gas that absorbs the longer-wavelength radiation the Earth emits and re-emits some of it downwards. Carbon dioxide and methane are the two the syllabus names.",
          "acid rain (酸雨): Rain made acidic by dissolved sulfur dioxide and oxides of nitrogen. It damages buildings, kills trees and acidifies lakes.",
          "catalytic converter (催化转化器): A platinum-coated honeycomb in an exhaust that converts carbon monoxide and nitrogen monoxide into carbon dioxide and nitrogen.",
          "particulate (颗粒物): A tiny solid particle, mostly carbon, from incomplete combustion. It lodges in the lungs and causes respiratory disease.",
          "ppm (ppm（百万分之一）): Parts per million: 400 ppm means 400 molecules in every million. Methane is rarer still and is quoted in parts per billion."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-10-3-cp1",
      "syllabus": [
        "0620/10.3.1"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 2,
      "stem": "State the approximate percentages of the two main gases in clean, dry air.",
      "markScheme": [
        {
          "text": "Nitrogen: about 78%",
          "marks": 1
        },
        {
          "text": "Oxygen: about 21%",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "氮气在前，而且占比大得多——相当多的答案把两者写反了。写 80% 和 20% 通常也接受，但真实数字值得记住。",
        "en": "Nitrogen first and by far the larger — a surprising number of answers reverse them. 80% and 20% are usually accepted, but the real figures are worth knowing."
      }
    },
    {
      "id": "0620-10-3-cp2",
      "syllabus": [
        "0620/10.3.2"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 4,
      "stem": "State one source and one adverse effect for each of carbon monoxide and sulfur dioxide.",
      "markScheme": [
        {
          "text": "Carbon monoxide: from incomplete combustion of fuels",
          "marks": 1
        },
        {
          "text": "It is toxic — it binds to haemoglobin and prevents the blood carrying oxygen",
          "marks": 1
        },
        {
          "text": "Sulfur dioxide: from burning fossil fuels containing sulfur",
          "marks": 1
        },
        {
          "text": "It causes acid rain, which damages buildings and kills trees",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "只写\"它有毒\"不如说明毒性机理。血红蛋白这个细节是\"记住\"与\"理解\"的差别，考官会给分。",
        "en": "\"It is poisonous\" is worth less than saying how. The haemoglobin detail is the difference between a stated fact and an understood one, and examiners reward it."
      }
    },
    {
      "id": "0620-10-3-cp3",
      "syllabus": [
        "0620/10.3.4"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe how the greenhouse effect warms the Earth.",
      "markScheme": [
        {
          "text": "Short-wavelength radiation from the Sun passes through the atmosphere and is absorbed by the Earth’s surface",
          "marks": 1
        },
        {
          "text": "The warmed surface re-emits energy at a longer wavelength",
          "marks": 1
        },
        {
          "text": "Greenhouse gases absorb this longer-wavelength radiation and re-emit some of it back towards the surface",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两种波长才是机理。\"这些气体把热量困住\"只是描述结果，最多得一分——得分点在于短波进入、长波射出、射出时被吸收。",
        "en": "The two wavelengths are the mechanism. \"The gases trap the heat\" describes the result and scores at most one — the marks are for short in, long out, absorbed on the way out."
      }
    },
    {
      "id": "0620-10-3-cp4",
      "syllabus": [
        "0620/10.3.6",
        "0620/10.3.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A catalytic converter is fitted to a car exhaust. Write an equation for the main reaction and explain why the converter does not help with climate change.",
      "markScheme": [
        {
          "text": "2CO + 2NO → 2CO₂ + N₂",
          "marks": 1
        },
        {
          "text": "It removes carbon monoxide and nitrogen monoxide, which are toxic and cause acid rain",
          "marks": 1
        },
        {
          "text": "but it produces carbon dioxide, which is a greenhouse gas — so it improves air quality without reducing warming",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "第三分是拉开差距的地方。转化器把局部污染问题变成了全球性问题；写出这一点说明你真正理解了它的作用。",
        "en": "The third mark is the one that separates answers. A converter turns a local pollution problem into a global one; saying so shows you have read what it actually does."
      }
    },
    {
      "id": "0620-10-3-cp5",
      "syllabus": [
        "0620/10.3.8"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain how oxides of nitrogen are formed in a car engine and how they lead to acid rain.",
      "markScheme": [
        {
          "text": "Nitrogen and oxygen from the air react together at the high temperature inside the engine",
          "marks": 1
        },
        {
          "text": "N₂ + O₂ → 2NO, which is further oxidised in the air to NO₂",
          "marks": 1
        },
        {
          "text": "The nitrogen dioxide dissolves in rainwater to form nitric acid, making the rain acidic",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "氮来自空气，而不是燃料。这正是该反应吸热、需要高温发动机的原因——也是题目特意点明\"发动机\"的原因。",
        "en": "The nitrogen comes from the air, not from the fuel. That is why the reaction is endothermic and needs a hot engine — and it is why the question specifies an engine."
      }
    },
    {
      "id": "0620-10-3-cp6",
      "syllabus": [
        "0620/10.3.5"
      ],
      "tier": "core",
      "commandWord": "Suggest",
      "marks": 2,
      "stem": "Suggest two strategies for reducing the effects of climate change.",
      "markScheme": [
        {
          "text": "Reduce fossil fuel use by switching to renewable energy sources",
          "marks": 1
        },
        {
          "text": "Plant trees to absorb carbon dioxide, or capture and store carbon dioxide from power stations",
          "marks": 1,
          "alternatives": [
            "Reduce methane emissions from livestock and landfill"
          ]
        }
      ],
      "examinerNote": {
        "zh": "要写两个*不同*的措施。两种说法都在说\"少用燃料\"只算一次——把\"减少排放\"与\"移除已排放的\"配成一对，两分都稳。",
        "en": "Two *different* strategies. Two ways of saying \"use less fuel\" counts once — pair a reduction with a removal and both marks are secure."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "gas",
        "label": {
          "zh": "温室气体",
          "en": "Greenhouse gas"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "startYear",
        "label": {
          "zh": "起始年份",
          "en": "Show from year"
        },
        "min": 1750,
        "max": 2000,
        "step": 10,
        "defaultValue": 1750,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "10-3-air-and-climate",
        "hint": {
          "en": "Slide the start year forward and watch the rise per decade in the readings. The curve is flat for a century, then it is not.",
          "zh": "把起始年份向后滑动，注意读数中每十年的增速。曲线平了一个世纪，然后就不平了。"
        },
        "params": [
          {
            "key": "gas",
            "label": {
              "en": "Greenhouse gas",
              "zh": "温室气体"
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
                  "en": "Carbon dioxide",
                  "zh": "二氧化碳"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Methane",
                  "zh": "甲烷"
                }
              }
            ]
          },
          {
            "key": "startYear",
            "label": {
              "en": "Show from year",
              "zh": "起始年份"
            },
            "unit": "",
            "min": 1750,
            "max": 2000,
            "step": 10,
            "default": 1750
          }
        ],
        "readouts": [
          {
            "key": "preIndustrial",
            "label": {
              "en": "Level in 1750",
              "zh": "1750 年的水平"
            },
            "unit": "",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "latest",
            "label": {
              "en": "Level in 2020",
              "zh": "2020 年的水平"
            },
            "unit": "",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "percentIncrease",
            "label": {
              "en": "Rise since 1750",
              "zh": "自 1750 年以来的增幅"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "risePerDecade",
            "label": {
              "en": "Rise per decade, over the window shown",
              "zh": "所示区间内每十年的增量"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "The whole record",
              "zh": "完整记录"
            },
            "params": {
              "gas": 0,
              "startYear": 1750
            }
          },
          {
            "label": {
              "en": "A stable century: 1750–1850",
              "zh": "平稳的一个世纪：1750–1850"
            },
            "params": {
              "gas": 0,
              "startYear": 1750
            }
          },
          {
            "label": {
              "en": "Since 1960",
              "zh": "1960 年以来"
            },
            "params": {
              "gas": 0,
              "startYear": 1960
            }
          },
          {
            "label": {
              "en": "Since 1990",
              "zh": "1990 年以来"
            },
            "params": {
              "gas": 0,
              "startYear": 1990
            }
          },
          {
            "label": {
              "en": "Methane",
              "zh": "甲烷"
            },
            "params": {
              "gas": 1,
              "startYear": 1750
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
        "zh": "完整记录",
        "en": "The whole record"
      },
      "params": {
        "gas": 0,
        "startYear": 1750
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "平稳的一个世纪：1750–1850",
        "en": "A stable century: 1750–1850"
      },
      "params": {
        "gas": 0,
        "startYear": 1750
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "1960 年以来",
        "en": "Since 1960"
      },
      "params": {
        "gas": 0,
        "startYear": 1960
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "1990 年以来",
        "en": "Since 1990"
      },
      "params": {
        "gas": 0,
        "startYear": 1990
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "甲烷",
        "en": "Methane"
      },
      "params": {
        "gas": 1,
        "startYear": 1750
      }
    }
  ]
};
