/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/20-1-human-influences
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/20-1-human-influences/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/20-1-human-influences/kernel';

export const kp201HumanInfluences: KnowledgePoint = {
  "id": "igcse-0610-20-1-human-influences",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "人类对生态系统的影响",
    "en": "Human influences on ecosystems"
  },
  "summary": {
    "zh": "鱼不是被化肥毒死的——化肥对它们没有毒性。它们死于这条链上再往下四步的细菌耗尽了氧气。",
    "en": "The fish did not die of the fertiliser — it is not poisonous to them. They died because bacteria, four steps down the chain, used up the oxygen."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/20.1.1",
      "0610/20.1.2",
      "0610/20.1.3",
      "0610/20.2.1",
      "0610/20.2.2",
      "0610/20.2.3",
      "0610/20.2.4",
      "0610/20.3.1",
      "0610/20.3.2",
      "0610/20.3.3",
      "0610/20.3.4",
      "0610/20.4.1",
      "0610/20.4.2",
      "0610/20.4.3",
      "0610/20.4.4",
      "0610/20.4.5",
      "0610/20.4.6",
      "0610/20.4.7",
      "0610/20.4.8",
      "0610/20.4.9"
    ]
  },
  "keywords": {
    "zh": [
      "生物多样性",
      "水体富营养化",
      "单一栽培",
      "可持续资源",
      "不可生物降解的"
    ],
    "en": [
      "biodiversity",
      "eutrophication",
      "monoculture",
      "sustainable resource",
      "non-biodegradable"
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
          "描述人类提高粮食产量的方式，以及单一栽培与集约化畜牧的优缺点。",
          "描述生物多样性、栖息地被破坏的原因，以及森林砍伐的不良后果。",
          "描述未处理污水、过量化肥与不可降解塑料对生态系统的影响。",
          "解释水体富营养化的过程。（Extended）",
          "描述甲烷与二氧化碳污染的来源与影响。",
          "描述可持续资源，并解释如何保护森林与鱼类资源。（Extended）",
          "解释生物为何濒危、如何加以保护，以及失去遗传变异的风险。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "栖息地消失时失去了什么"
      },
      {
        "type": "paragraph",
        "text": "生物多样性是指某一地区不同物种的数目。栖息地被破坏的原因包括：开采木材或矿产等资源、为住房和工业腾出空间，尤其是为农业开垦土地。"
      },
      {
        "type": "paragraph",
        "text": "森林砍伐有四项后果值得分别说明。栖息地和物种消失，生物多样性下降。没有根系固持，土壤被冲走、河流淤塞——这就是水土流失与洪涝。光合作用减少意味着从空气中移除的二氧化碳减少，而焚烧木材又把更多二氧化碳送回空气。"
      },
      {
        "type": "paragraph",
        "text": "而由于食物网是相互连接的，移走一个物种会影响所有与之相连的生物。它的捕食者失去食物来源；它原本捕食的对象则失控增殖。这是一条普遍原理，也是为什么\"我们只移走了一个物种\"从来不是一个完整的答案。"
      },
      {
        "type": "heading",
        "text": "不会分解的东西"
      },
      {
        "type": "paragraph",
        "text": "不可生物降解的塑料无法被分解者分解，因此会长期存在。在海中，动物误把它们当作食物吞下，塑料填满消化道，动物因此饿死；更大的碎片则会缠住它们并使其溺亡。"
      },
      {
        "type": "paragraph",
        "text": "二氧化碳和甲烷是温室气体：它们吸收地球辐射出的热量，再把其中一部分辐射回地面，使地表升温。二氧化碳主要来自化石燃料燃烧和森林砍伐。甲烷来自牛、稻田以及垃圾填埋场中腐烂的废弃物。"
      },
      {
        "type": "paragraph",
        "text": "后果你已经知道：平均气温上升、冰层融化、海平面上升、极端天气增多，以及随着其所适应的气候带迁移，物种分布发生改变。"
      },
      {
        "type": "heading",
        "text": "取用不超过再生的量"
      },
      {
        "type": "paragraph",
        "text": "可持续资源是指其补充速度不低于消耗速度的资源。森林和鱼类资源都可以这样管理，而在没有约束时两者通常都被管理得很糟，因为\"再多拿一点\"的动机始终存在。"
      },
      {
        "type": "paragraph",
        "text": "对森林而言：边砍边种、只伐成熟树木、其余保留、并轮换采伐区域。对渔业而言：设定配额、限制网目尺寸使幼鱼得以逃脱并繁殖、在繁殖季禁渔，并把部分海域完全划为保护区。"
      },
      {
        "type": "paragraph",
        "text": "物种濒危的原因包括栖息地破坏、猎捕、污染、引入物种的竞争以及气候变化——通常是数种同时发生。保护手段包括自然保护区、采用人工授精与试管受精的圈养繁育计划、种子库，以及教育与法律保护。"
      },
      {
        "type": "paragraph",
        "text": "还有一种风险值得理解而不只是罗列。个体数量降到极少的物种会失去遗传变异，因为死去的个体所携带的等位基因永远消失了。变异少，自然选择可作用的对象就少——因此即使数量恢复，这个种群也无法适应新的疾病或变化的气候。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "biodiversity（生物多样性）：某一地区不同物种的数目。",
          "eutrophication（水体富营养化）：水体硝酸盐富集，经藻类繁盛与分解作用，最终导致溶解氧被耗尽。",
          "monoculture（单一栽培）：在大片土地上种植同一种作物。作业高效，但易受某一种害虫或病害的毁灭性影响。",
          "sustainable resource（可持续资源）：补充速度不低于消耗速度的资源，因而可以长期使用。",
          "non-biodegradable（不可生物降解的）：无法被分解者分解，因而会长期留存在环境中。"
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
          "Describe how humans have increased food production, and the advantages and disadvantages of monocultures and intensive livestock production.",
          "Describe biodiversity, the reasons for habitat destruction, and the undesirable effects of deforestation.",
          "Describe the effects of untreated sewage, excess fertiliser and non-biodegradable plastics on ecosystems.",
          "Explain the process of eutrophication. (Extended)",
          "Describe the sources and effects of methane and carbon dioxide pollution.",
          "Describe sustainable resources, and explain how forests and fish stocks can be conserved. (Extended)",
          "Explain why organisms become endangered, how they can be conserved, and the risks of losing genetic variation. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "What is lost when a habitat goes"
      },
      {
        "type": "paragraph",
        "text": "Biodiversity is the number of different species living in an area. Habitats are destroyed to extract materials such as timber or minerals, to make room for housing and industry, and above all to clear land for farming."
      },
      {
        "type": "paragraph",
        "text": "Deforestation has four consequences worth naming separately. Habitats and species are lost, so biodiversity falls. With no roots to bind it, soil is washed away and rivers silt up — soil erosion and flooding. Less photosynthesis means less carbon dioxide removed from the air, and burning the timber puts more back."
      },
      {
        "type": "paragraph",
        "text": "And because a food web is connected, removing one species affects everything joined to it. Its predators lose a food source; what it fed on multiplies unchecked. That is a general principle, and it is why \"we only removed one species\" is never a complete answer."
      },
      {
        "type": "heading",
        "text": "What does not break down"
      },
      {
        "type": "paragraph",
        "text": "Non-biodegradable plastics cannot be broken down by decomposers, so they stay. In the sea they are eaten by animals that mistake them for food, filling the gut so the animal starves; larger pieces entangle and drown them."
      },
      {
        "type": "paragraph",
        "text": "Carbon dioxide and methane are greenhouse gases: they absorb heat radiated from the Earth and re-radiate some of it back, warming the surface. Carbon dioxide comes mostly from burning fossil fuels and from deforestation. Methane comes from cattle, from rice paddies and from decaying waste in landfill."
      },
      {
        "type": "paragraph",
        "text": "The consequences are the ones you already know: rising average temperatures, ice melting and sea levels rising, more extreme weather, and changes in the distribution of species as the climate they are adapted to moves."
      },
      {
        "type": "heading",
        "text": "Taking no more than grows back"
      },
      {
        "type": "paragraph",
        "text": "A sustainable resource is one that is replaced as fast as it is removed. Forests and fish stocks can both be managed that way, and both are managed badly by default because the incentive is always to take a little more."
      },
      {
        "type": "paragraph",
        "text": "For a forest: replant as you fell, take only mature trees, leave the rest standing, and rotate which area is cut. For fish: set quotas, restrict the mesh size so young fish escape and can breed, close the fishery during the breeding season, and protect some areas entirely."
      },
      {
        "type": "paragraph",
        "text": "Species become endangered through habitat destruction, hunting, pollution, competition from introduced species and climate change — usually several at once. They can be conserved in wildlife reserves, in captive breeding programmes using artificial insemination and IVF, in seed banks, and by education and legal protection."
      },
      {
        "type": "paragraph",
        "text": "And there is one risk worth understanding rather than listing. A species reduced to very few individuals loses genetic variation, because the alleles carried by the ones that died are gone for good. With little variation there is little for natural selection to act on — so the population cannot adapt to a new disease or a changing climate, even if its numbers recover."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "biodiversity (生物多样性): The number of different species living in an area.",
          "eutrophication (水体富营养化): Nitrate enrichment of water leading, through an algal bloom and decomposition, to the removal of dissolved oxygen.",
          "monoculture (单一栽培): Growing a single crop over a large area. Efficient to work, but vulnerable to one pest or disease.",
          "sustainable resource (可持续资源): One that is replaced as fast as it is removed, so it can be used indefinitely.",
          "non-biodegradable (不可生物降解的): Cannot be broken down by decomposers, so it remains in the environment indefinitely."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-20-1-cp1",
      "syllabus": [
        "0610/20.3.4"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 5,
      "stem": "Fertiliser washed from a field into a river causes fish downstream to die several weeks later. Explain the process that leads to their death.",
      "markScheme": [
        {
          "text": "The fertiliser adds nitrate ions to the water, which had been the limiting factor on algal growth",
          "marks": 1
        },
        {
          "text": "Algae grow rapidly and form a bloom over the surface of the water",
          "marks": 1
        },
        {
          "text": "The bloom blocks light from reaching the plants below, so they cannot photosynthesise and they die",
          "marks": 1
        },
        {
          "text": "Decomposer bacteria multiply, feeding on the dead plants and dead algae",
          "marks": 1
        },
        {
          "text": "The bacteria respire aerobically and use up the dissolved oxygen, so the fish cannot respire and suffocate",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "五个环节，得分点就在这个顺序上。化肥对鱼并没有毒性——写它有毒，即使结论对了也会丢掉五分中的四分。",
        "en": "Five links, and the marks are for the sequence. The fertiliser is not toxic to the fish — saying so throws away four of the five marks even though the conclusion is right."
      }
    },
    {
      "id": "0610-20-1-cp2",
      "syllabus": [
        "0610/20.2.4"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain four undesirable effects of clearing a large area of forest.",
      "markScheme": [
        {
          "text": "Habitats are destroyed, so species are lost and biodiversity is reduced",
          "marks": 1
        },
        {
          "text": "Tree roots no longer bind the soil, so it is washed away — soil erosion",
          "marks": 1
        },
        {
          "text": "Less water is taken up and intercepted, so rivers receive more run-off and flooding increases",
          "marks": 1
        },
        {
          "text": "Less photosynthesis removes less carbon dioxide from the atmosphere, and burning the timber releases more, contributing to the greenhouse effect",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这是四项不同的后果，不是把同一件事说四遍。二氧化碳这一点有两半——吸收的减少了，排放的增加了。",
        "en": "Four separate effects, not one effect described four ways. The carbon dioxide point has two halves — less taken out, and more put back."
      }
    },
    {
      "id": "0610-20-1-cp3",
      "syllabus": [
        "0610/20.4.6"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe three measures that could be used to conserve a fish stock, and explain how each one works.",
      "markScheme": [
        {
          "text": "Quotas limit the mass of fish that may be caught, so fewer are removed than are replaced by breeding",
          "marks": 1
        },
        {
          "text": "A minimum mesh size lets young fish escape the nets so they survive to breed at least once",
          "marks": 1
        },
        {
          "text": "Closed seasons or protected areas allow fish to breed undisturbed, or one from: fish farming reduces pressure on wild stocks",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每项措施都要说清其机理。\"少捕鱼\"是这三项共同的目的，并不能把它们区分开。",
        "en": "Every measure needs its mechanism. \"Catch fewer fish\" is the aim of all three and does not distinguish them."
      }
    },
    {
      "id": "0610-20-1-cp4",
      "syllabus": [
        "0610/20.4.9"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A species is reduced to a very small number of individuals before a conservation programme increases its numbers again. Explain why the species may still be at risk.",
      "markScheme": [
        {
          "text": "The small population has lost much of its genetic variation, because alleles carried only by the individuals that died have been lost permanently",
          "marks": 1
        },
        {
          "text": "The recovered population is descended from few individuals, so it remains genetically very similar",
          "marks": 1
        },
        {
          "text": "With little variation there is little for natural selection to act on, so the species may be unable to adapt to a new disease or a change in the environment",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "数量恢复并不能恢复变异。这是把自然选择那一课用到保护生物学上——选择需要变异，而变异已经没有了。",
        "en": "Numbers recovering does not restore variation. This is the natural selection lesson applied to conservation — selection needs variation, and the variation is gone."
      }
    },
    {
      "id": "0610-20-1-cp5",
      "syllabus": [
        "0610/20.1.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe one advantage and two disadvantages of growing a single crop over a very large area.",
      "markScheme": [
        {
          "text": "Sowing, treating and harvesting can all be mechanised and done at once, so it is efficient and yields more food per worker",
          "marks": 1
        },
        {
          "text": "The plants are genetically similar, so a single pest or disease can destroy the entire crop",
          "marks": 1
        },
        {
          "text": "Growing the same crop repeatedly removes the same mineral ions from the soil, and habitats and biodiversity are reduced",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这种脆弱性来自作物在遗传上高度相似，而不只是因为数量多。",
        "en": "The vulnerability comes from the plants being genetically similar, not simply from there being many of them."
      }
    },
    {
      "id": "0610-20-1-cp6",
      "syllabus": [
        "0610/20.3.2",
        "0610/20.3.3"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe the effects of non-biodegradable plastics on aquatic ecosystems, and state one source of methane pollution.",
      "markScheme": [
        {
          "text": "Plastics cannot be broken down by decomposers, so they remain in the environment indefinitely",
          "marks": 1
        },
        {
          "text": "Animals eat them mistaking them for food, filling the gut so the animal starves; or larger pieces entangle animals and drown them",
          "marks": 1
        },
        {
          "text": "Methane comes from cattle, from rice paddies, or from decaying waste in landfill sites",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要说明塑料为何持久存在——分解者无法分解它们。写\"它们能存在很久\"只是描述，没有解释。",
        "en": "Say why plastics persist — decomposers cannot break them down. \"They last a long time\" describes it without explaining it."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "nitrate",
        "label": {
          "zh": "进入水体的硝酸盐",
          "en": "Nitrate entering the water"
        },
        "min": 0,
        "max": 100,
        "step": 5,
        "defaultValue": 70,
        "unit": ""
      },
      {
        "key": "flow",
        "label": {
          "zh": "河水流速",
          "en": "How fast the river flows"
        },
        "min": 0,
        "max": 100,
        "step": 5,
        "defaultValue": 20,
        "unit": ""
      },
      {
        "key": "day",
        "label": {
          "zh": "进入水体后的天数",
          "en": "Days after it arrives"
        },
        "min": 0,
        "max": 60,
        "step": 1,
        "defaultValue": 30,
        "unit": "days"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "20-1-human-influences",
        "hint": {
          "en": "Step the day forward and watch the five curves rise and fall in order. Then turn the flow up and see the chain never start.",
          "zh": "把日期逐步推进，看五条曲线依次起落。然后把水流调大，看这条链如何根本没有启动。"
        },
        "params": [
          {
            "key": "nitrate",
            "label": {
              "en": "Nitrate entering the water",
              "zh": "进入水体的硝酸盐"
            },
            "unit": "",
            "min": 0,
            "max": 100,
            "step": 5,
            "default": 70
          },
          {
            "key": "flow",
            "label": {
              "en": "How fast the river flows",
              "zh": "河水流速"
            },
            "unit": "",
            "min": 0,
            "max": 100,
            "step": 5,
            "default": 20
          },
          {
            "key": "day",
            "label": {
              "en": "Days after it arrives",
              "zh": "进入水体后的天数"
            },
            "unit": "days",
            "min": 0,
            "max": 60,
            "step": 1,
            "default": 30
          }
        ],
        "readouts": [
          {
            "key": "algae",
            "label": {
              "en": "Algae",
              "zh": "藻类"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "oxygen",
            "label": {
              "en": "Dissolved oxygen",
              "zh": "溶解氧"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "fish",
            "label": {
              "en": "Fish surviving",
              "zh": "存活的鱼"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "bloomDay",
            "label": {
              "en": "Day the algae bloomed",
              "zh": "藻类爆发的日子"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "deathDay",
            "label": {
              "en": "Day the oxygen ran out",
              "zh": "氧气耗尽的日子"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Before anything happens",
              "zh": "事情尚未发生"
            },
            "params": {
              "nitrate": 80,
              "flow": 10,
              "day": 3
            }
          },
          {
            "label": {
              "en": "The algal bloom",
              "zh": "藻类爆发"
            },
            "params": {
              "nitrate": 80,
              "flow": 10,
              "day": 15
            }
          },
          {
            "label": {
              "en": "The plants below have died",
              "zh": "水下植物已死亡"
            },
            "params": {
              "nitrate": 80,
              "flow": 10,
              "day": 28
            }
          },
          {
            "label": {
              "en": "The oxygen has gone",
              "zh": "氧气已耗尽"
            },
            "params": {
              "nitrate": 80,
              "flow": 10,
              "day": 55
            }
          },
          {
            "label": {
              "en": "A fast-flowing river copes",
              "zh": "湍急的河流能够承受"
            },
            "params": {
              "nitrate": 80,
              "flow": 95,
              "day": 55
            }
          },
          {
            "label": {
              "en": "No fertiliser at all",
              "zh": "完全没有化肥"
            },
            "params": {
              "nitrate": 0,
              "flow": 20,
              "day": 55
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
        "zh": "事情尚未发生",
        "en": "Before anything happens"
      },
      "params": {
        "nitrate": 80,
        "flow": 10,
        "day": 3
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "藻类爆发",
        "en": "The algal bloom"
      },
      "params": {
        "nitrate": 80,
        "flow": 10,
        "day": 15
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "水下植物已死亡",
        "en": "The plants below have died"
      },
      "params": {
        "nitrate": 80,
        "flow": 10,
        "day": 28
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "氧气已耗尽",
        "en": "The oxygen has gone"
      },
      "params": {
        "nitrate": 80,
        "flow": 10,
        "day": 55
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "湍急的河流能够承受",
        "en": "A fast-flowing river copes"
      },
      "params": {
        "nitrate": 80,
        "flow": 95,
        "day": 55
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "完全没有化肥",
        "en": "No fertiliser at all"
      },
      "params": {
        "nitrate": 0,
        "flow": 20,
        "day": 55
      }
    }
  ]
};
