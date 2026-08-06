/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/19-1-ecosystems
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/19-1-ecosystems/narration';
import { equations } from '../../igcse-src/0610/19-1-ecosystems/equations';
import kernel from '../../../../simulations/igcse-kernels/0610/19-1-ecosystems/kernel';

export const kp191Ecosystems: KnowledgePoint = {
  "id": "igcse-0610-19-1-ecosystems",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "生物与环境",
    "en": "Organisms and their environment"
  },
  "summary": {
    "zh": "一棵橡树养活着五十万只昆虫，因此按数量画出的金字塔是立在尖端上的。改为称重，它立刻就正了过来。",
    "en": "One oak tree supports half a million insects, so counting them gives a pyramid standing on its point. Weigh them instead and it turns the right way up."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/19.1.1",
      "0610/19.1.2",
      "0610/19.2.1",
      "0610/19.2.2",
      "0610/19.2.3",
      "0610/19.2.4",
      "0610/19.2.5",
      "0610/19.2.6",
      "0610/19.2.7",
      "0610/19.2.8",
      "0610/19.2.9",
      "0610/19.2.10",
      "0610/19.2.11",
      "0610/19.2.12",
      "0610/19.2.13",
      "0610/19.2.14",
      "0610/19.2.15",
      "0610/19.2.16",
      "0610/19.2.17",
      "0610/19.2.18",
      "0610/19.2.19",
      "0610/19.3.1",
      "0610/19.3.2",
      "0610/19.3.3",
      "0610/19.4.1",
      "0610/19.4.2",
      "0610/19.4.3",
      "0610/19.4.4",
      "0610/19.4.5",
      "0610/19.4.6",
      "0610/19.4.7"
    ]
  },
  "keywords": {
    "zh": [
      "营养级",
      "生产者",
      "分解者",
      "生物量",
      "环境容纳量",
      "生态系统"
    ],
    "en": [
      "trophic level",
      "producer",
      "decomposer",
      "biomass",
      "carrying capacity",
      "ecosystem"
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
          "说明太阳是生物系统的主要能量来源，并描述能量如何在生物之间流动。",
          "构建并解读食物链与食物网，并用它们说明过度捕捞与引入物种的影响。",
          "给生产者、消费者、植食动物、肉食动物、分解者与营养级下定义。",
          "绘制并解读数量金字塔与生物量金字塔，并讨论各自的优点。",
          "绘制并解读能量金字塔，并解释为何它更受青睐。（Extended）",
          "解释营养级间能量传递为何低效、食物链为何短，以及为何食用作物比食用牲畜更节能。（Extended）",
          "描述碳循环，以及包含微生物作用的氮循环。（Extended）",
          "给种群、群落与生态系统下定义，并识别与解释 S 形增长曲线的各阶段。"
        ]
      },
      {
        "type": "heading",
        "text": "能量流动，物质循环"
      },
      {
        "type": "paragraph",
        "text": "注意能量与物质的区别。能量以阳光进入，以热散失——它单向流动，太阳必须持续供应。而原子不会离开。你体内的碳曾经在空气中，将来还会回到空气中。"
      },
      {
        "type": "paragraph",
        "text": "碳循环：光合作用把二氧化碳从空气中取出，固定成糖类。植物、动物与分解者的呼吸作用把它送回去。木材和化石燃料的燃烧则以快得多的速度把它送回去。分解作用把一切死亡生物中的碳归还回去。"
      },
      {
        "type": "paragraph",
        "text": "氮循环几乎每一步都需要微生物，这正是要记的部分。固氮细菌把氮气转化为植物可利用的化合物。分解者把死亡有机物中的蛋白质分解为铵。硝化细菌把铵氧化为亚硝酸盐、再氧化为硝酸盐，而硝酸盐正是根所吸收的形式。反硝化细菌则把这一切逆转，把氮气还给空气。"
      },
      {
        "type": "paragraph",
        "text": "氮气占空气的五分之四，却几乎没有生物能利用它——三键太强了。你体内每一种蛋白质中的氮，几乎全都是因为某种细菌先打断了那个键才得以进入的。"
      },
      {
        "type": "heading",
        "text": "种群为什么会停止增长"
      },
      {
        "type": "paragraph",
        "text": "种群是在同一时间生活在同一区域的同一物种。所有种群合起来是群落，群落再加上它的物理环境就是生态系统。"
      },
      {
        "type": "paragraph",
        "text": "把少量生物放进食物充足的新生境中，种群的增长会呈现出一种到处都能认出的形状。先是延滞期：数量几乎不动，生物在适应、成熟并开始繁殖。此时个体太少，还形不成气候。"
      },
      {
        "type": "paragraph",
        "text": "接着是指数期，而它之所以呈指数增长，原因值得说清楚：每一个个体都能繁殖，因此数量越多，新增得越快。此时食物充足、废物尚未积累、捕食者还没找上门。没有什么在拖住它。"
      },
      {
        "type": "paragraph",
        "text": "这不可能持续。食物短缺、空间用尽、废物积累、疾病在密集中更易传播、捕食者也来了。出生与死亡趋于平衡，曲线变平进入稳定期——种群达到了该生境的环境容纳量。"
      },
      {
        "type": "paragraph",
        "text": "而在封闭容器中还有 S 形曲线并不总会显示的第四个阶段：衰亡期——食物耗尽、废物有毒，死亡超过出生。野外种群通常不会走到这一步，因为稳定期是一种平衡，而不是它撞上去的天花板。"
      },
      {
        "type": "formula",
        "latex": "E_{n} = E_{1} \\times t^{\\,n-1}",
        "caption": "第 n 营养级的能量，其中 t 是每一步传递的比例。由于 t 约为十分之一，下降不是匀速的——而是每升高一级就减少到十分之一。"
      },
      {
        "type": "formula",
        "latex": "\\text{people fed} \\;\\propto\\; \\dfrac{1}{t}",
        "caption": "把作物喂给动物，你只能取回其能量的 t 倍。直接食用作物，同样的土地能养活 1/t 倍的人。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "trophic level（营养级）：生物在食物链中所处的位置——生产者、初级消费者、次级消费者，依此类推。",
          "producer（生产者）：能自己制造有机养料的生物，通常通过光合作用。它永远是第一营养级。",
          "decomposer（分解者）：以死亡或废弃有机物为食的生物，把其中的养分归还给环境。",
          "biomass（生物量）：生物体的干重。它优于计数，因为它不会把橡树和蚜虫等量齐观。",
          "carrying capacity（环境容纳量）：一个生境能长期维持的种群数量。增长曲线的稳定期正处于这一水平。",
          "ecosystem（生态系统）：由各种群构成的群落，连同它们所处的物理环境。"
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
          "State that the Sun is the principal source of energy for biological systems, and describe how energy flows through organisms.",
          "Construct and interpret food chains and food webs, and use them to describe the impact of overharvesting and introduced species.",
          "Define producer, consumer, herbivore, carnivore, decomposer and trophic level.",
          "Draw and interpret pyramids of numbers and of biomass, and discuss the advantages of each.",
          "Draw and interpret pyramids of energy, and explain why they are preferred. (Extended)",
          "Explain why energy transfer between trophic levels is inefficient, why food chains are short, and why eating crops is more efficient than eating livestock. (Extended)",
          "Describe the carbon cycle, and the nitrogen cycle including the roles of microorganisms. (Extended)",
          "Define population, community and ecosystem, and identify and explain the phases of a sigmoid growth curve."
        ]
      },
      {
        "type": "heading",
        "text": "Energy flows, matter goes round"
      },
      {
        "type": "paragraph",
        "text": "Notice the difference between energy and matter. Energy enters as sunlight and leaves as heat — it flows one way, and the Sun has to keep supplying it. Atoms do not leave. The carbon in you was in the air, and will be again."
      },
      {
        "type": "paragraph",
        "text": "The carbon cycle: photosynthesis takes carbon dioxide out of the air and fixes it into carbohydrates. Respiration in plants, animals and decomposers puts it back. Combustion of wood and fossil fuels puts it back much faster. Decomposition returns the carbon in anything that dies."
      },
      {
        "type": "paragraph",
        "text": "The nitrogen cycle needs microorganisms at nearly every step, which is the part to learn. Nitrogen-fixing bacteria turn nitrogen gas into compounds plants can use. Decomposers break proteins in dead matter down to ammonium. Nitrifying bacteria oxidise ammonium to nitrite and then to nitrate, which is the form roots absorb. Denitrifying bacteria undo it all and return nitrogen gas to the air."
      },
      {
        "type": "paragraph",
        "text": "Nitrogen gas is four fifths of the air and almost no organism can touch it — the triple bond is too strong. Nearly all the nitrogen in every protein in your body got there because a bacterium broke that bond first."
      },
      {
        "type": "heading",
        "text": "Why a population stops growing"
      },
      {
        "type": "paragraph",
        "text": "A population is one species living in the same area at the same time. All the populations together are a community, and the community plus its physical environment is an ecosystem."
      },
      {
        "type": "paragraph",
        "text": "Put a few organisms into a new habitat with plenty of food and the population grows in a shape you can recognise anywhere. First a lag phase: numbers barely move while the organisms settle, mature and begin to reproduce. There are too few of them to make much difference yet."
      },
      {
        "type": "paragraph",
        "text": "Then the exponential phase, and it is exponential for a reason worth stating: every individual can reproduce, so the more there are the faster more appear. Food is plentiful, waste has not built up, predators have not found them. Nothing is holding it back."
      },
      {
        "type": "paragraph",
        "text": "It cannot last. Food runs short, space runs out, waste accumulates, disease spreads more easily in a crowd and predators arrive. Births and deaths come into balance and the curve flattens into the stationary phase — the population is at the carrying capacity of the habitat."
      },
      {
        "type": "paragraph",
        "text": "And in a closed container there is a fourth phase the sigmoid curve does not always show: the death phase, where the food is gone and the waste is toxic, and deaths outnumber births. A wild population does not usually get there, because the stationary phase is a balance rather than a ceiling it crashes into."
      },
      {
        "type": "formula",
        "latex": "E_{n} = E_{1} \\times t^{\\,n-1}",
        "caption": "Energy at the nth trophic level, where t is the fraction passed on at each step. Because t is about a tenth, the fall is not steady — it is a factor of ten every level."
      },
      {
        "type": "formula",
        "latex": "\\text{people fed} \\;\\propto\\; \\dfrac{1}{t}",
        "caption": "Feed a crop to an animal and you get back only the fraction t of its energy. Eating the crop directly feeds 1/t times as many people from the same land."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "trophic level (营养级): An organism’s position in a food chain — producer, primary consumer, secondary consumer, and so on.",
          "producer (生产者): An organism that makes its own organic nutrients, usually by photosynthesis. Always the first trophic level.",
          "decomposer (分解者): An organism that feeds on dead or waste organic matter, returning its nutrients to the environment.",
          "biomass (生物量): The dry mass of living material. Better than a count because it does not treat an oak tree and a greenfly as equals.",
          "carrying capacity (环境容纳量): The population a habitat can support indefinitely. The stationary phase of a growth curve sits at it.",
          "ecosystem (生态系统): A community of populations together with the physical environment they live in."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-19-1-cp1",
      "syllabus": [
        "0610/19.2.17"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Only about 10% of the energy in one trophic level is transferred to the next. Explain what happens to the rest.",
      "markScheme": [
        {
          "text": "Much of it is released by respiration and lost to the surroundings as heat",
          "marks": 1
        },
        {
          "text": "Some is lost in excretion as urea, and in egestion as undigested faeces",
          "marks": 1
        },
        {
          "text": "Not all of the organism is eaten — roots, bones and other parts are left",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "能量不会被\"用光\"或\"消灭\"——要说清它去了哪里。呼吸作用产生的热量占最大份额，也是最常被漏掉的一项。",
        "en": "Energy is not \"used up\" or \"destroyed\" — say where it went. Heat from respiration is the largest share and the one most often left out."
      }
    },
    {
      "id": "0610-19-1-cp2",
      "syllabus": [
        "0610/19.2.12"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A pyramid of numbers for the food chain oak tree → insects → small birds → hawks is not pyramid-shaped. Explain why, and explain why a pyramid of biomass for the same food chain is a better diagram.",
      "markScheme": [
        {
          "text": "There is only one oak tree but very many insects, so the second level is wider than the first",
          "marks": 1
        },
        {
          "text": "A pyramid of numbers counts every organism as one, regardless of its size",
          "marks": 1
        },
        {
          "text": "A pyramid of biomass measures the mass of living material instead, so the single large tree outweighs all the insects and the diagram is the right way up",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "问题出在\"计数\"这件事上，而不在橡树林。写\"昆虫比树多\"只是描述图形；得分点在于说明计数为何具有误导性。",
        "en": "The fault is in the counting, not in the woodland. Saying \"there are more insects than trees\" describes the diagram; the mark is for saying why counting misleads."
      }
    },
    {
      "id": "0610-19-1-cp3",
      "syllabus": [
        "0610/19.2.18"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Food chains rarely have more than four or five trophic levels. Explain why, using figures.",
      "markScheme": [
        {
          "text": "Only about 10% of the energy passes from one level to the next",
          "marks": 1
        },
        {
          "text": "So a fifth trophic level receives about 0.01% of the energy the producers captured",
          "marks": 1
        },
        {
          "text": "There would not be enough energy to support a viable population at that level",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"用数字说明\"是一项要求。把 10% 逐级乘下去并给出结果；不含任何数字的答案在这里拿不到满分。",
        "en": "\"Using figures\" is an instruction. Multiply the 10% out and quote the result; an answer with no numbers in it cannot get full marks here."
      }
    },
    {
      "id": "0610-19-1-cp4",
      "syllabus": [
        "0610/19.2.19"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 3,
      "stem": "A country with limited farmland wants to feed more people from the same area. Suggest why growing crops for people to eat directly is more efficient than using the land to raise cattle for meat.",
      "markScheme": [
        {
          "text": "Eating the crop directly makes people the primary consumers, so there is one trophic level instead of two",
          "marks": 1
        },
        {
          "text": "About 90% of the energy is lost at each transfer, mostly as heat from respiration by the cattle",
          "marks": 1
        },
        {
          "text": "So roughly ten times as much energy from the same area reaches people, feeding about ten times as many",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这是把 10% 规律用在一个现实决策上。写\"养牛成本高\"或\"牛需要水\"都没有抓住要点——论证的核心是营养级。",
        "en": "This is the 10% rule applied to a real decision. Answers about cattle being expensive or needing water miss the point — the argument is about trophic levels."
      }
    },
    {
      "id": "0610-19-1-cp5",
      "syllabus": [
        "0610/19.4.5",
        "0610/19.4.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Bacteria are grown in a closed flask of nutrient broth. Their population follows a sigmoid curve. Explain what causes the lag phase, the exponential phase and the stationary phase.",
      "markScheme": [
        {
          "text": "Lag phase: few organisms are present and they are adjusting to the conditions and synthesising enzymes before they begin to divide",
          "marks": 1
        },
        {
          "text": "Exponential phase: nutrients are plentiful and there is little competition or waste, and every organism can reproduce, so numbers double repeatedly",
          "marks": 1
        },
        {
          "text": "Stationary phase: nutrients run short and toxic waste accumulates",
          "marks": 1
        },
        {
          "text": "so the birth rate falls until it equals the death rate and the population stops increasing",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "稳定期是出生与死亡之间的平衡，而不是繁殖停止。写\"它们停止繁殖\"会丢掉最后一分。",
        "en": "The stationary phase is a balance of births and deaths, not a stop in reproduction. Writing \"they stop reproducing\" loses the last mark."
      }
    },
    {
      "id": "0610-19-1-cp6",
      "syllabus": [
        "0610/19.3.3"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "Describe the roles of four types of microorganism in the nitrogen cycle.",
      "markScheme": [
        {
          "text": "Nitrogen-fixing bacteria convert nitrogen gas into nitrogen compounds plants can use",
          "marks": 1
        },
        {
          "text": "Decomposers break down proteins in dead organisms and waste, releasing ammonium compounds",
          "marks": 1
        },
        {
          "text": "Nitrifying bacteria oxidise ammonium to nitrite and then to nitrate, the form roots absorb",
          "marks": 1
        },
        {
          "text": "Denitrifying bacteria convert nitrate back to nitrogen gas",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "四类微生物，四种不同的作用。最常见的错误是把硝化与反硝化搞反——硝化生成硝酸盐，反硝化则把它带走。",
        "en": "Four groups, four different jobs. The commonest error is to swap nitrifying and denitrifying — nitrifying builds nitrate up, denitrifying takes it away."
      }
    },
    {
      "id": "0610-19-1-cp7",
      "syllabus": [
        "0610/19.2.10"
      ],
      "tier": "core",
      "commandWord": "Predict",
      "marks": 3,
      "stem": "In a food web, seals eat cod, and cod eat herring. Predict the effect on the numbers of seals and of herring if cod are overharvested by fishing, and explain your answer.",
      "markScheme": [
        {
          "text": "The number of seals would fall",
          "marks": 1
        },
        {
          "text": "because cod are a food source for them, so less food is available",
          "marks": 1
        },
        {
          "text": "The number of herring would rise, because fewer cod are eating them",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要向两个方向推：谁吃它，以及它吃谁。只回答海豹的部分，就漏掉了食物网的另一半。",
        "en": "Work outwards in both directions: what eats it, and what it eats. Answering only about the seals leaves half the food web untouched."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "ecosystem",
        "label": {
          "zh": "食物链",
          "en": "Food chain"
        },
        "min": 1,
        "max": 2,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "kind",
        "label": {
          "zh": "衡量方式",
          "en": "Measured as"
        },
        "min": 1,
        "max": 3,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "transfer",
        "label": {
          "zh": "传给下一营养级的能量",
          "en": "Energy passed to the next level"
        },
        "min": 1,
        "max": 30,
        "step": 1,
        "defaultValue": 10,
        "unit": "%"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "pyramid",
        "kernel": "19-1-ecosystems",
        "hint": {
          "en": "Draw the woodland as numbers, then as biomass. The ecosystem has not changed — only what you measured.",
          "zh": "先按数量画出橡树林，再按生物量画一次。生态系统没有变，变的只是你测量的东西。"
        },
        "params": [
          {
            "key": "ecosystem",
            "label": {
              "en": "Food chain",
              "zh": "食物链"
            },
            "unit": "",
            "min": 1,
            "max": 2,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 1,
                "label": {
                  "en": "Grassland",
                  "zh": "草地"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Oak woodland",
                  "zh": "橡树林"
                }
              }
            ]
          },
          {
            "key": "kind",
            "label": {
              "en": "Measured as",
              "zh": "衡量方式"
            },
            "unit": "",
            "min": 1,
            "max": 3,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 1,
                "label": {
                  "en": "Numbers",
                  "zh": "数量"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Biomass",
                  "zh": "生物量"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Energy",
                  "zh": "能量"
                }
              }
            ]
          },
          {
            "key": "transfer",
            "label": {
              "en": "Energy passed to the next level",
              "zh": "传给下一营养级的能量"
            },
            "unit": "%",
            "min": 1,
            "max": 30,
            "step": 1,
            "default": 10
          }
        ],
        "readouts": [
          {
            "key": "top",
            "label": {
              "en": "Energy at the top level",
              "zh": "顶级营养级的能量"
            },
            "unit": "kJ/m²/yr",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "efficiency",
            "label": {
              "en": "Fraction of the producers’ energy",
              "zh": "占生产者能量的比例"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "fifth",
            "label": {
              "en": "Left for a fifth level",
              "zh": "留给第五营养级的能量"
            },
            "unit": "kJ/m²/yr",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "cropAdvantage",
            "label": {
              "en": "Crops feed this many times more",
              "zh": "直接吃作物可多养活的倍数"
            },
            "unit": "×",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Grassland, counted",
              "zh": "草地，按数量"
            },
            "params": {
              "ecosystem": 1,
              "kind": 1,
              "transfer": 10
            }
          },
          {
            "label": {
              "en": "Woodland, counted: inverted",
              "zh": "橡树林，按数量：倒置"
            },
            "params": {
              "ecosystem": 2,
              "kind": 1,
              "transfer": 10
            }
          },
          {
            "label": {
              "en": "The same woodland, weighed",
              "zh": "同一片林，按重量"
            },
            "params": {
              "ecosystem": 2,
              "kind": 2,
              "transfer": 10
            }
          },
          {
            "label": {
              "en": "Woodland energy",
              "zh": "橡树林的能量"
            },
            "params": {
              "ecosystem": 2,
              "kind": 3,
              "transfer": 10
            }
          },
          {
            "label": {
              "en": "A wasteful chain (5%)",
              "zh": "低效的食物链（5%）"
            },
            "params": {
              "ecosystem": 2,
              "kind": 3,
              "transfer": 5
            }
          },
          {
            "label": {
              "en": "An efficient one (25%)",
              "zh": "高效的食物链（25%）"
            },
            "params": {
              "ecosystem": 2,
              "kind": 3,
              "transfer": 25
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
        "zh": "草地，按数量",
        "en": "Grassland, counted"
      },
      "params": {
        "ecosystem": 1,
        "kind": 1,
        "transfer": 10
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "橡树林，按数量：倒置",
        "en": "Woodland, counted: inverted"
      },
      "params": {
        "ecosystem": 2,
        "kind": 1,
        "transfer": 10
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "同一片林，按重量",
        "en": "The same woodland, weighed"
      },
      "params": {
        "ecosystem": 2,
        "kind": 2,
        "transfer": 10
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "橡树林的能量",
        "en": "Woodland energy"
      },
      "params": {
        "ecosystem": 2,
        "kind": 3,
        "transfer": 10
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "低效的食物链（5%）",
        "en": "A wasteful chain (5%)"
      },
      "params": {
        "ecosystem": 2,
        "kind": 3,
        "transfer": 5
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "高效的食物链（25%）",
        "en": "An efficient one (25%)"
      },
      "params": {
        "ecosystem": 2,
        "kind": 3,
        "transfer": 25
      }
    }
  ]
};
