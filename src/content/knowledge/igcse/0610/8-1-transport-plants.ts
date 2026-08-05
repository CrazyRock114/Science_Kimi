/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/8-1-transport-plants
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/8-1-transport-plants/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/8-1-transport-plants/kernel';

export const kp81TransportPlants: KnowledgePoint = {
  "id": "igcse-0610-8-1-transport-plants",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "植物体内的运输",
    "en": "Transport in plants"
  },
  "summary": {
    "zh": "让水出去的孔，正是让二氧化碳进来的孔。关上它，植物保住了水却会挨饿；打开它，植物能进食却会失水。",
    "en": "The holes that let water out are the holes that let carbon dioxide in. Close them and the plant keeps its water and starves; open them and it feeds and dries out."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/8.1.1",
      "0610/8.1.2",
      "0610/8.1.3",
      "0610/8.2.1",
      "0610/8.2.2",
      "0610/8.2.3",
      "0610/8.2.4",
      "0610/8.3.1",
      "0610/8.3.2",
      "0610/8.3.3",
      "0610/8.3.4",
      "0610/8.3.5",
      "0610/8.3.6",
      "0610/8.3.7",
      "0610/8.4.1",
      "0610/8.4.2",
      "0610/8.4.3"
    ]
  },
  "keywords": {
    "zh": [
      "木质部",
      "韧皮部",
      "蒸腾作用",
      "蒸腾拉力",
      "源与库"
    ],
    "en": [
      "xylem",
      "phloem",
      "transpiration",
      "transpiration pull",
      "source and sink"
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
          "说出木质部与韧皮部的功能，并在根、茎、叶中识别其位置。",
          "把导管的结构与其功能联系起来。（Extended）",
          "识别根毛细胞，说出其功能，并概述水在植物体内的路径。",
          "描述蒸腾作用，并探究温度与风速对它的影响。",
          "解释温度、湿度、光照与风对蒸腾速率的影响。（Extended）",
          "解释蒸腾拉力如何使水在木质部中上升，以及萎蔫如何发生及其原因。（Extended）",
          "描述有机物运输、源与库，以及同一部位为何在不同时期角色不同。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "让水出去的孔，正是让二氧化碳进来的孔。关上它，植物保住了水却会挨饿；打开它，植物能进食却会失水。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "xylem（木质部）：由死细胞构成的中空、木质化管道，只向上运输水和矿质离子。",
          "phloem（韧皮部）：由活细胞构成的组织，把蔗糖和氨基酸从源运往库，方向可变。",
          "transpiration（蒸腾作用）：叶片散失水蒸气：先从叶肉细胞蒸发，再经气孔扩散出去。",
          "transpiration pull（蒸腾拉力）：叶片蒸发失水时，把木质部中的水柱向上拉的张力。",
          "source and sink（源与库）：源把蔗糖释放进韧皮部，库把它取走。同一器官在一年中的不同时期可以分别扮演两者。"
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
          "State the functions of xylem and phloem, and identify their positions in root, stem and leaf.",
          "Relate the structure of xylem vessels to their function. (Extended)",
          "Identify root hair cells, state their function, and outline the pathway of water through the plant.",
          "Describe transpiration, and investigate the effects of temperature and wind speed on it.",
          "Explain the effects of temperature, humidity, light and wind on the rate of transpiration. (Extended)",
          "Explain how water moves up the xylem by the transpiration pull, and how and why wilting occurs. (Extended)",
          "Describe translocation, sources and sinks, and why a part may be either at different times. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "The holes that let water out are the holes that let carbon dioxide in. Close them and the plant keeps its water and starves; open them and it feeds and dries out."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "xylem (木质部): Dead, hollow, lignified tubes carrying water and mineral ions upwards only.",
          "phloem (韧皮部): Living tissue carrying sucrose and amino acids from a source to a sink, in either direction.",
          "transpiration (蒸腾作用): The loss of water vapour from leaves — evaporation from the mesophyll, then diffusion out of the stomata.",
          "transpiration pull (蒸腾拉力): The tension that draws the column of water up the xylem as water evaporates from the leaves above it.",
          "source and sink (源与库): A source releases sucrose into the phloem; a sink removes it. The same organ can be either at different times of year."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-8-1-cp1",
      "syllabus": [
        "0610/8.3.6"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain why the rate of transpiration falls as the humidity of the surrounding air increases.",
      "markScheme": [
        {
          "text": "Water vapour diffuses out of the stomata down a concentration gradient between the air spaces in the leaf and the air outside",
          "marks": 1
        },
        {
          "text": "Higher humidity means more water vapour in the air outside, so the difference in concentration is smaller",
          "marks": 1
        },
        {
          "text": "A shallower gradient means slower diffusion, so less water vapour is lost",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "所有关于蒸腾的解释都要经过\"梯度\"。写\"空气已经很湿，所以蒸发得少\"抓住了意思，但得分点在于点出浓度梯度和扩散。",
        "en": "Every transpiration explanation goes through the gradient. \"The air is already wet so less can evaporate\" is the idea, but the marks are for naming the concentration gradient and the diffusion."
      }
    },
    {
      "id": "0610-8-1-cp2",
      "syllabus": [
        "0610/8.3.6"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "The rate of transpiration increases as light intensity increases, but levels off at high light intensity. Explain why.",
      "markScheme": [
        {
          "text": "Light causes the guard cells to open the stomata",
          "marks": 1
        },
        {
          "text": "so more water vapour can diffuse out, and the rate increases",
          "marks": 1
        },
        {
          "text": "It levels off because once the stomata are fully open they cannot open any further, so more light has no additional effect",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "在这四个条件中，只有光作用于气孔而不是蒸发，这正是它的曲线有平台而其他曲线没有的原因。",
        "en": "Light is the only one of the four that acts on the stomata rather than on evaporation, and that is exactly why its graph has a plateau and the others do not."
      }
    },
    {
      "id": "0610-8-1-cp3",
      "syllabus": [
        "0610/8.3.5",
        "0610/8.1.3"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain how water moves from the roots to the leaves of a tall tree, and how the structure of xylem makes this possible.",
      "markScheme": [
        {
          "text": "Water evaporates from the mesophyll cells and diffuses out of the stomata",
          "marks": 1
        },
        {
          "text": "This creates a tension, and because water molecules are attracted to one another the whole column is pulled up behind it — the transpiration pull",
          "marks": 1
        },
        {
          "text": "Xylem vessels are dead cells with no cytoplasm and no end walls, forming a continuous open tube",
          "marks": 1
        },
        {
          "text": "Their walls are strengthened with lignin so they do not collapse under the tension",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "水是从上方被拉上去的，不是从下方被推上去的。木质素这一分给的是\"抵抗塌陷\"——否则处于张力下的管道会被压扁。",
        "en": "The water is pulled from above, not pushed from below. And the lignin mark is for resisting collapse — a tube under tension would otherwise be squeezed shut."
      }
    },
    {
      "id": "0610-8-1-cp4",
      "syllabus": [
        "0610/8.3.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "On a hot, dry, windy day a plant closes its stomata. Explain the advantage and the disadvantage of doing this.",
      "markScheme": [
        {
          "text": "Advantage: much less water vapour can diffuse out, so the plant loses far less water and is less likely to wilt",
          "marks": 1
        },
        {
          "text": "Disadvantage: carbon dioxide can no longer diffuse in through the stomata",
          "marks": 1
        },
        {
          "text": "so the rate of photosynthesis falls and the plant makes less food",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "同样的气孔同时承担两项功能。凡是谈关闭气孔却只提\"省了水\"的答案，等于自动丢掉了一半分数。",
        "en": "The same pores serve both. Any answer about closing stomata that mentions only the water saved has taken half the marks off itself."
      }
    },
    {
      "id": "0610-8-1-cp5",
      "syllabus": [
        "0610/8.4.3"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A potato tuber acts as a sink in summer and as a source in the following spring. Explain why.",
      "markScheme": [
        {
          "text": "In summer the leaves are photosynthesising and producing more sucrose than they need",
          "marks": 1
        },
        {
          "text": "so sucrose is translocated down to the tuber and stored as starch — the tuber is receiving, so it is a sink",
          "marks": 1
        },
        {
          "text": "In spring there are no leaves yet, so the stored starch is converted back to sucrose and translocated up to the growing shoot — the tuber is supplying, so it is a source",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "源和库是角色，不是固定的位置。这道题实际问的是：在一年中的这两个时期，蔗糖各朝哪个方向移动。",
        "en": "Source and sink are roles, not places. The question is really asking which way the sucrose is moving at each time of year."
      }
    },
    {
      "id": "0610-8-1-cp6",
      "syllabus": [
        "0610/8.2.1",
        "0610/8.2.2"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Explain how the shape of a root hair cell helps a plant to absorb water.",
      "markScheme": [
        {
          "text": "It is drawn out into a long, thin projection, which gives a large surface area",
          "marks": 1
        },
        {
          "text": "so more water can be absorbed by osmosis in a given time",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "又是表面积——和绒毛、肺泡、叶片的答案一样。要说清这个大表面积是\"为了什么\"，否则第二分就没了。",
        "en": "Surface area again — the same answer as villi, alveoli and leaves. Say what the large area is *for*, or the second mark goes."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "temperature",
        "label": {
          "zh": "气温",
          "en": "Air temperature"
        },
        "min": 0,
        "max": 45,
        "step": 1,
        "defaultValue": 20,
        "unit": "°C"
      },
      {
        "key": "humidity",
        "label": {
          "zh": "空气湿度",
          "en": "Humidity of the air"
        },
        "min": 0,
        "max": 100,
        "step": 5,
        "defaultValue": 50,
        "unit": "%"
      },
      {
        "key": "wind",
        "label": {
          "zh": "风速",
          "en": "Wind speed"
        },
        "min": 0,
        "max": 10,
        "step": 0.5,
        "defaultValue": 0,
        "unit": "m/s"
      },
      {
        "key": "light",
        "label": {
          "zh": "光照强度",
          "en": "Light intensity"
        },
        "min": 0,
        "max": 100,
        "step": 2,
        "defaultValue": 60,
        "unit": "%"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "8-1-transport-plants",
        "hint": {
          "en": "Push the humidity to 100% and watch transpiration stop. Then turn the light down and watch what closing the stomata costs.",
          "zh": "把湿度推到 100%，看蒸腾如何停止。然后调低光照，看关闭气孔付出了什么代价。"
        },
        "params": [
          {
            "key": "temperature",
            "label": {
              "en": "Air temperature",
              "zh": "气温"
            },
            "unit": "°C",
            "min": 0,
            "max": 45,
            "step": 1,
            "default": 20
          },
          {
            "key": "humidity",
            "label": {
              "en": "Humidity of the air",
              "zh": "空气湿度"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 5,
            "default": 50
          },
          {
            "key": "wind",
            "label": {
              "en": "Wind speed",
              "zh": "风速"
            },
            "unit": "m/s",
            "min": 0,
            "max": 10,
            "step": 0.5,
            "default": 0
          },
          {
            "key": "light",
            "label": {
              "en": "Light intensity",
              "zh": "光照强度"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 2,
            "default": 60
          }
        ],
        "readouts": [
          {
            "key": "rate",
            "label": {
              "en": "Transpiration rate",
              "zh": "蒸腾速率"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "opening",
            "label": {
              "en": "How far the stomata are open",
              "zh": "气孔张开的程度"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "photosynthesis",
            "label": {
              "en": "Photosynthesis possible",
              "zh": "可进行的光合作用"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "evaporation",
            "label": {
              "en": "Evaporation from the mesophyll",
              "zh": "叶肉的蒸发强度"
            },
            "unit": "×",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A still, mild day",
              "zh": "无风的温和天气"
            },
            "params": {
              "temperature": 20,
              "humidity": 50,
              "wind": 0,
              "light": 60
            }
          },
          {
            "label": {
              "en": "Hot and dry and windy",
              "zh": "又热又干又有风"
            },
            "params": {
              "temperature": 38,
              "humidity": 15,
              "wind": 6,
              "light": 90
            }
          },
          {
            "label": {
              "en": "Saturated air: it stops",
              "zh": "空气饱和：蒸腾停止"
            },
            "params": {
              "temperature": 38,
              "humidity": 100,
              "wind": 6,
              "light": 60
            }
          },
          {
            "label": {
              "en": "Night: stomata closed",
              "zh": "夜间：气孔关闭"
            },
            "params": {
              "temperature": 15,
              "humidity": 70,
              "wind": 1,
              "light": 0
            }
          },
          {
            "label": {
              "en": "Closing up in a drought",
              "zh": "干旱时关闭气孔"
            },
            "params": {
              "temperature": 35,
              "humidity": 20,
              "wind": 3,
              "light": 2
            }
          },
          {
            "label": {
              "en": "Wind alone, from still air",
              "zh": "仅增加风速"
            },
            "params": {
              "temperature": 20,
              "humidity": 50,
              "wind": 8,
              "light": 60
            }
          }
        ]
      },
      "kernel": kernel
    }
  },
  "presets": [
    {
      "id": "preset-1",
      "name": {
        "zh": "无风的温和天气",
        "en": "A still, mild day"
      },
      "params": {
        "temperature": 20,
        "humidity": 50,
        "wind": 0,
        "light": 60
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "又热又干又有风",
        "en": "Hot and dry and windy"
      },
      "params": {
        "temperature": 38,
        "humidity": 15,
        "wind": 6,
        "light": 90
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "空气饱和：蒸腾停止",
        "en": "Saturated air: it stops"
      },
      "params": {
        "temperature": 38,
        "humidity": 100,
        "wind": 6,
        "light": 60
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "夜间：气孔关闭",
        "en": "Night: stomata closed"
      },
      "params": {
        "temperature": 15,
        "humidity": 70,
        "wind": 1,
        "light": 0
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "干旱时关闭气孔",
        "en": "Closing up in a drought"
      },
      "params": {
        "temperature": 35,
        "humidity": 20,
        "wind": 3,
        "light": 2
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "仅增加风速",
        "en": "Wind alone, from still air"
      },
      "params": {
        "temperature": 20,
        "humidity": 50,
        "wind": 8,
        "light": 60
      }
    }
  ]
};
