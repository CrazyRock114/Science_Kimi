/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/18-1-variation-selection
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/18-1-variation-selection/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/18-1-variation-selection/kernel';

export const kp181VariationSelection: KnowledgePoint = {
  "id": "igcse-0610-18-1-variation-selection",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "变异与选择",
    "en": "Variation and selection"
  },
  "summary": {
    "zh": "这个模拟中从未有任何个体发生改变。没有一个生物\"适应\"了什么——改变的只是各类个体的数量比例。",
    "en": "Nothing in this simulation ever changes an individual. Not one organism adapts to anything — the only thing that changes is how many of each kind there are."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/18.1.1",
      "0610/18.1.2",
      "0610/18.1.3",
      "0610/18.1.4",
      "0610/18.1.5",
      "0610/18.1.6",
      "0610/18.1.7",
      "0610/18.1.8",
      "0610/18.1.9",
      "0610/18.1.10",
      "0610/18.2.1",
      "0610/18.2.2",
      "0610/18.2.3",
      "0610/18.3.1",
      "0610/18.3.2",
      "0610/18.3.3",
      "0610/18.3.4",
      "0610/18.3.5",
      "0610/18.3.6"
    ]
  },
  "keywords": {
    "zh": [
      "连续变异",
      "不连续变异",
      "突变",
      "适应性特征",
      "旱生植物",
      "选择育种"
    ],
    "en": [
      "continuous variation",
      "discontinuous variation",
      "mutation",
      "adaptive feature",
      "xerophyte",
      "selective breeding"
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
          "描述连续变异与不连续变异，并说明各自的成因。",
          "把突变描述为 DNA 碱基序列的随机改变，以及新等位基因的唯一来源。（Extended）",
          "描述适应性特征，并解释旱生植物与水生植物的适应。（Extended）",
          "用变异、竞争与可遗传优势描述自然选择。",
          "把抗生素耐药菌作为自然选择的实例加以描述。（Extended）",
          "描述选择育种，并概述自然选择与人工选择的区别。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "同样的事，发生在医院里"
      },
      {
        "type": "paragraph",
        "text": "抗生素耐药性是你能在一个人的一生中亲眼看到的自然选择。在庞大的细菌种群中，突变会产生少数对某种抗生素耐药的个体——而这发生在抗生素被使用之前。"
      },
      {
        "type": "paragraph",
        "text": "使用抗生素后，不耐药的细菌死去。少数耐药个体存活下来，竞争者被清除后它们迅速繁殖——细菌每二十分钟分裂一次——并把耐药等位基因传下去。"
      },
      {
        "type": "paragraph",
        "text": "几天之内，整个种群就以耐药者为主了。这不是因为哪个细菌发生了改变，也不是因为它们\"习惯\"了药物——而是因为药物清除了除本来就恰好能存活的那些以外的一切。"
      },
      {
        "type": "heading",
        "text": "为生存之地而生"
      },
      {
        "type": "paragraph",
        "text": "适应性特征是有助于生物在其环境中生存与繁殖的、可遗传的特征。\"可遗传\"是关键词——晒黑不是适应性特征，因为它不会遗传。"
      },
      {
        "type": "paragraph",
        "text": "旱生植物生活在缺水之地，它的每一个特征都是为了保住水分：厚厚的蜡质角质层；气孔少，且凹陷在小坑中以聚集潮湿空气；叶退化成刺，把表面积大幅削减；根系很深或很广；茎往往膨大以贮水。"
      },
      {
        "type": "paragraph",
        "text": "水生植物生活在水中，面临的问题正相反。它不需要支撑，因为水会托住它，所以加强组织很少。它需要空气，因此组织中有大的气腔用来漂浮和贮存氧气。而它的气孔长在叶的上表面——那是唯一与空气接触的一面。"
      },
      {
        "type": "heading",
        "text": "当选择者是人的时候"
      },
      {
        "type": "paragraph",
        "text": "选择育种是同样的算术，只是由人来做选择。选出具有目标特征的个体，让它们交配，再从后代中继续选择，如此重复许多世代。"
      },
      {
        "type": "paragraph",
        "text": "所有作物和家畜都是这样变成今天的样子的——籽粒更大的小麦、产奶更多的奶牛、由狼而来的狗。它比自然选择快得多，原因很简单：育种者能施加的选择压力，远强于野外的任何压力。把图上的压力调高，看所需世代数如何骤减。"
      },
      {
        "type": "paragraph",
        "text": "两者的区别只在于由谁来选择、为了什么而选择。自然选择偏爱一切有助于生物生存与繁殖的特征。人工选择偏爱人所想要的特征——而那对生物本身可能毫无用处。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "continuous variation（连续变异）：在两个极端之间形成完整连续范围的表现型。由多个基因共同决定，并受环境影响。",
          "discontinuous variation（不连续变异）：只有有限的几种截然不同的表现型，中间没有过渡。完全由基因决定。",
          "mutation（突变）：DNA 碱基序列的随机改变。产生真正全新等位基因的唯一途径。",
          "adaptive feature（适应性特征）：有助于生物在其环境中生存与繁殖的、可遗传的特征。",
          "xerophyte（旱生植物）：适应缺水环境的植物——角质层厚、气孔下陷、叶片退化。",
          "selective breeding（选择育种）：由人来选择哪些个体繁殖，并在许多世代中重复。与自然选择是同样的算术，只是压力更强。"
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
          "Describe continuous and discontinuous variation, and state what causes each.",
          "Describe mutation as a random change in the DNA base sequence, and the only source of new alleles. (Extended)",
          "Describe an adaptive feature, and explain the adaptations of xerophytes and hydrophytes. (Extended)",
          "Describe natural selection from variation, competition and inherited advantage.",
          "Describe antibiotic-resistant bacteria as an example of natural selection. (Extended)",
          "Describe selective breeding, and outline the differences between natural and artificial selection. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "The same thing, in a hospital"
      },
      {
        "type": "paragraph",
        "text": "Antibiotic resistance is natural selection you can watch happen in a human lifetime. In a large population of bacteria, mutation produces a few individuals resistant to a particular antibiotic — before the antibiotic is ever used."
      },
      {
        "type": "paragraph",
        "text": "Give the antibiotic and the non-resistant bacteria die. The resistant few survive, and with the competition removed they reproduce rapidly — bacteria divide every twenty minutes — and pass the resistance allele on."
      },
      {
        "type": "paragraph",
        "text": "Within a few days the population is mostly resistant. Not because any bacterium changed, and not because they got used to the drug — because the drug removed everything except the ones that already happened to survive it."
      },
      {
        "type": "heading",
        "text": "Built for where they live"
      },
      {
        "type": "paragraph",
        "text": "An adaptive feature is an inherited feature that helps an organism survive and reproduce in its environment. Inherited is the operative word — a suntan is not an adaptive feature, because it is not passed on."
      },
      {
        "type": "paragraph",
        "text": "A xerophyte lives where water is scarce, and every feature is about keeping it. A thick waxy cuticle. Few stomata, and sunken into pits where humid air collects. Leaves reduced to spines, cutting the surface area right down. Deep or very wide roots. And often a swollen stem storing water."
      },
      {
        "type": "paragraph",
        "text": "A hydrophyte lives in water and has the opposite problems. It needs no support, because water holds it up, so it has little strengthening tissue. It needs air, so it has large air spaces in the tissues to float and to store oxygen. And its stomata are on the upper surface of the leaf, the only side in contact with air."
      },
      {
        "type": "heading",
        "text": "When the selector is a person"
      },
      {
        "type": "paragraph",
        "text": "Selective breeding is the same arithmetic with a human doing the choosing. Select the individuals with the desired feature, breed them together, select again from the offspring, and repeat over many generations."
      },
      {
        "type": "paragraph",
        "text": "It is how every crop and every farm animal came to be what it is — wheat with larger grains, cows producing more milk, dogs from wolves. And it is far faster than natural selection, for a simple reason: a breeder can apply a selection pressure far stronger than anything the wild applies. Turn the pressure up on the graph and watch the generations needed collapse."
      },
      {
        "type": "paragraph",
        "text": "The difference between the two is only who does the selecting, and what for. Natural selection favours whatever helps the organism survive and reproduce. Artificial selection favours whatever the person wants — which may be no use to the organism at all."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "continuous variation (连续变异): A whole range of phenotypes between two extremes. Controlled by several genes and affected by the environment.",
          "discontinuous variation (不连续变异): A limited number of distinct phenotypes with nothing in between. Controlled by genes alone.",
          "mutation (突变): A random change in the base sequence of DNA. The only way a genuinely new allele can arise.",
          "adaptive feature (适应性特征): An inherited feature that helps an organism survive and reproduce in its environment.",
          "xerophyte (旱生植物): A plant adapted to live where water is scarce — thick cuticle, sunken stomata, reduced leaves.",
          "selective breeding (选择育种): Humans choosing which individuals reproduce, repeated over many generations. The same arithmetic as natural selection, with a stronger pressure."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-18-1-cp1",
      "syllabus": [
        "0610/18.3.1",
        "0610/18.3.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "A population of bacteria in a hospital becomes resistant to an antibiotic within a few weeks. Explain how this happens.",
      "markScheme": [
        {
          "text": "Random mutation had already produced a few bacteria in the population carrying an allele for resistance",
          "marks": 1
        },
        {
          "text": "When the antibiotic is used, the bacteria without the allele are killed and those with it survive",
          "marks": 1
        },
        {
          "text": "The survivors reproduce, and because bacteria divide rapidly the population is rebuilt from them",
          "marks": 1
        },
        {
          "text": "The resistance allele is passed on, so the proportion of resistant bacteria in the population increases",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "突变是先发生的，而且是偶然的。写细菌\"变得耐药了\"或\"习惯了抗生素\"讲的是拉马克，不得分。",
        "en": "The mutation comes first, and by chance. Writing that the bacteria \"became resistant\" or \"got used to the antibiotic\" describes Lamarck and scores nothing."
      }
    },
    {
      "id": "0610-18-1-cp2",
      "syllabus": [
        "0610/18.3.1"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "Describe the process of natural selection.",
      "markScheme": [
        {
          "text": "There is variation between the individuals in a population",
          "marks": 1
        },
        {
          "text": "More offspring are produced than can survive, so there is competition for resources",
          "marks": 1
        },
        {
          "text": "Individuals with features better suited to the environment are more likely to survive and reproduce",
          "marks": 1
        },
        {
          "text": "They pass the alleles for those features to their offspring, so the proportion of the population with them increases over generations",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "四个步骤，而分数最常丢在最后一步。变化发生在世代间的比例上，而不是任何个体身上。",
        "en": "Four steps, and the last one is where the marks are lost. The change is in the proportions across generations, not in any individual."
      }
    },
    {
      "id": "0610-18-1-cp3",
      "syllabus": [
        "0610/18.1.7",
        "0610/18.1.10"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A species faces a new disease but no individual in the population carries any allele giving resistance to it. Explain why natural selection cannot save this population, and state what would have to happen first.",
      "markScheme": [
        {
          "text": "Natural selection can only act on variation that already exists in the population",
          "marks": 1
        },
        {
          "text": "With no resistance allele present there is nothing for selection to favour, so however strong the selection pressure the population cannot become resistant",
          "marks": 1
        },
        {
          "text": "A mutation would first have to produce a resistance allele, and mutation is random — it does not occur because the allele is needed",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这道题能区分\"真懂\"与\"背诵\"。选择是一道筛子；突变才是一切新事物的唯一来源。",
        "en": "This is the question that separates understanding from recitation. Selection is a filter; mutation is the only source of anything new."
      }
    },
    {
      "id": "0610-18-1-cp4",
      "syllabus": [
        "0610/18.3.3",
        "0610/18.3.6"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "Describe how a farmer could use selective breeding to produce cattle that yield more milk, and state one difference between artificial and natural selection.",
      "markScheme": [
        {
          "text": "Select the cows with the highest milk yield from the herd",
          "marks": 1
        },
        {
          "text": "Breed them with a bull from a high-yielding family",
          "marks": 1
        },
        {
          "text": "Select the highest-yielding offspring and repeat over many generations",
          "marks": 1
        },
        {
          "text": "In artificial selection humans choose which individuals reproduce and choose features useful to people; in natural selection the environment does the selecting and the features favoured are those that aid survival and reproduction",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"重复许多世代\"本身就值一分——只做一轮育种几乎改变不了什么。",
        "en": "\"Repeat over many generations\" is a mark on its own — one round of breeding changes very little."
      }
    },
    {
      "id": "0610-18-1-cp5",
      "syllabus": [
        "0610/18.1.2",
        "0610/18.1.3",
        "0610/18.1.4"
      ],
      "tier": "core",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Compare continuous and discontinuous variation, giving one example of each.",
      "markScheme": [
        {
          "text": "Continuous variation gives a range of phenotypes between two extremes, such as height; discontinuous gives a limited number of distinct phenotypes, such as blood group",
          "marks": 1
        },
        {
          "text": "Continuous variation is controlled by several genes together; discontinuous variation is usually controlled by one gene",
          "marks": 1
        },
        {
          "text": "Continuous variation is also affected by the environment; discontinuous variation is determined by genes alone",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"受环境影响\"这一点最常被漏掉，而它正是同卵双胞胎身高并不相同的原因。",
        "en": "The environmental influence is the mark most often missed, and it is why identical twins are not identical heights."
      }
    },
    {
      "id": "0610-18-1-cp6",
      "syllabus": [
        "0610/18.2.3"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain three ways in which a xerophyte is adapted to reduce water loss.",
      "markScheme": [
        {
          "text": "A thick waxy cuticle reduces evaporation through the leaf surface",
          "marks": 1
        },
        {
          "text": "Stomata are few in number and sunken into pits, where humid air collects and reduces the concentration gradient for diffusion",
          "marks": 1
        },
        {
          "text": "Leaves are reduced to spines or needles, greatly reducing the surface area from which water can be lost",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每个特征都要给出原因。而\"气孔下陷\"这一分给的是滞留的潮湿空气减小了梯度——而不是笼统地说\"受到保护\"。",
        "en": "Every feature needs its reason. And the sunken stomata mark is for the trapped humid air reducing the gradient — not simply for being \"protected\"."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "startingFrequency",
        "label": {
          "zh": "起始时携带该等位基因的比例",
          "en": "Carrying the allele at the start"
        },
        "min": 0,
        "max": 100,
        "step": 1,
        "defaultValue": 2,
        "unit": "%"
      },
      {
        "key": "pressure",
        "label": {
          "zh": "它带来的生存优势",
          "en": "Survival advantage it gives"
        },
        "min": 0,
        "max": 100,
        "step": 5,
        "defaultValue": 30,
        "unit": "%"
      },
      {
        "key": "mutationRate",
        "label": {
          "zh": "突变率",
          "en": "Mutation rate"
        },
        "min": 0,
        "max": 20,
        "step": 1,
        "defaultValue": 0,
        "unit": "/1000"
      },
      {
        "key": "generations",
        "label": {
          "zh": "世代数",
          "en": "Generations"
        },
        "min": 1,
        "max": 40,
        "step": 1,
        "defaultValue": 25,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "18-1-variation-selection",
        "hint": {
          "en": "Set the starting frequency to zero with the pressure at maximum and watch nothing happen. Then turn the mutation rate up.",
          "zh": "把起始频率设为零、压力设为最大，看什么也不会发生。然后把突变率调高。"
        },
        "params": [
          {
            "key": "startingFrequency",
            "label": {
              "en": "Carrying the allele at the start",
              "zh": "起始时携带该等位基因的比例"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 1,
            "default": 2
          },
          {
            "key": "pressure",
            "label": {
              "en": "Survival advantage it gives",
              "zh": "它带来的生存优势"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 5,
            "default": 30
          },
          {
            "key": "mutationRate",
            "label": {
              "en": "Mutation rate",
              "zh": "突变率"
            },
            "unit": "/1000",
            "min": 0,
            "max": 20,
            "step": 1,
            "default": 0
          },
          {
            "key": "generations",
            "label": {
              "en": "Generations",
              "zh": "世代数"
            },
            "unit": "",
            "min": 1,
            "max": 40,
            "step": 1,
            "default": 25
          }
        ],
        "readouts": [
          {
            "key": "start",
            "label": {
              "en": "Frequency at the start",
              "zh": "起始频率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "final",
            "label": {
              "en": "Frequency at the end",
              "zh": "最终频率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "toHalf",
            "label": {
              "en": "Generations to reach half",
              "zh": "达到一半所需世代"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "toMost",
            "label": {
              "en": "Generations to reach 95%",
              "zh": "达到 95% 所需世代"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A rare, useful allele",
              "zh": "罕见但有利的等位基因"
            },
            "params": {
              "startingFrequency": 2,
              "pressure": 30,
              "mutationRate": 0,
              "generations": 25
            }
          },
          {
            "label": {
              "en": "A strong advantage",
              "zh": "强大的优势"
            },
            "params": {
              "startingFrequency": 2,
              "pressure": 90,
              "mutationRate": 0,
              "generations": 25
            }
          },
          {
            "label": {
              "en": "The allele is absent",
              "zh": "该等位基因并不存在"
            },
            "params": {
              "startingFrequency": 0,
              "pressure": 100,
              "mutationRate": 0,
              "generations": 25
            }
          },
          {
            "label": {
              "en": "Mutation supplies it",
              "zh": "由突变提供"
            },
            "params": {
              "startingFrequency": 0,
              "pressure": 100,
              "mutationRate": 8,
              "generations": 30
            }
          },
          {
            "label": {
              "en": "No selection at all",
              "zh": "完全没有选择"
            },
            "params": {
              "startingFrequency": 20,
              "pressure": 0,
              "mutationRate": 0,
              "generations": 25
            }
          },
          {
            "label": {
              "en": "A breeder choosing",
              "zh": "育种者进行选择"
            },
            "params": {
              "startingFrequency": 5,
              "pressure": 100,
              "mutationRate": 0,
              "generations": 15
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
        "zh": "罕见但有利的等位基因",
        "en": "A rare, useful allele"
      },
      "params": {
        "startingFrequency": 2,
        "pressure": 30,
        "mutationRate": 0,
        "generations": 25
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "强大的优势",
        "en": "A strong advantage"
      },
      "params": {
        "startingFrequency": 2,
        "pressure": 90,
        "mutationRate": 0,
        "generations": 25
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "该等位基因并不存在",
        "en": "The allele is absent"
      },
      "params": {
        "startingFrequency": 0,
        "pressure": 100,
        "mutationRate": 0,
        "generations": 25
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "由突变提供",
        "en": "Mutation supplies it"
      },
      "params": {
        "startingFrequency": 0,
        "pressure": 100,
        "mutationRate": 8,
        "generations": 30
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "完全没有选择",
        "en": "No selection at all"
      },
      "params": {
        "startingFrequency": 20,
        "pressure": 0,
        "mutationRate": 0,
        "generations": 25
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "育种者进行选择",
        "en": "A breeder choosing"
      },
      "params": {
        "startingFrequency": 5,
        "pressure": 100,
        "mutationRate": 0,
        "generations": 15
      }
    }
  ]
};
