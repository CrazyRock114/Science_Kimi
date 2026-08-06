/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/10-1-disease-immunity
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/10-1-disease-immunity/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/10-1-disease-immunity/kernel';

export const kp101DiseaseImmunity: KnowledgePoint = {
  "id": "igcse-0610-10-1-disease-immunity",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "疾病、免疫与药物",
    "en": "Disease, immunity and drugs"
  },
  "summary": {
    "zh": "免疫并不意味着你不会被感染，而是记忆细胞已经就位，你在察觉之前就把它解决了。",
    "en": "Being immune does not mean you cannot be infected. It means the memory cells are already there, so you deal with it before you notice."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/10.1.1",
      "0610/10.1.2",
      "0610/10.1.3",
      "0610/10.1.4",
      "0610/10.1.5",
      "0610/10.1.6",
      "0610/10.1.7",
      "0610/10.1.8",
      "0610/10.1.9",
      "0610/10.1.10",
      "0610/10.1.11",
      "0610/10.1.12",
      "0610/10.1.13",
      "0610/10.1.14",
      "0610/10.1.15",
      "0610/10.1.16",
      "0610/10.1.17",
      "0610/15.1.1",
      "0610/15.1.2",
      "0610/15.1.3",
      "0610/15.1.4",
      "0610/15.1.5"
    ]
  },
  "keywords": {
    "zh": [
      "病原体",
      "抗原",
      "抗体",
      "记忆细胞",
      "被动免疫",
      "抗生素"
    ],
    "en": [
      "pathogen",
      "antigen",
      "antibody",
      "memory cell",
      "passive immunity",
      "antibiotic"
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
          "描述病原体与传染病，并说出传播途径。",
          "描述身体的防御，并解释卫生与废物处理如何控制疾病传播。",
          "描述主动免疫、抗原、抗体及其互补的形状。（Extended）",
          "概述接种疫苗，并解释其在控制疾病传播中的作用。（Extended）",
          "解释被动免疫、它在母乳喂养中的重要性，以及为何不产生记忆细胞。（Extended）",
          "描述霍乱，并解释其毒素如何引起腹泻与脱水。（Extended）",
          "描述抗生素的用途、它们为何对病毒无效，以及耐药性如何产生。"
        ]
      },
      {
        "type": "heading",
        "text": "毒素究竟做了什么"
      },
      {
        "type": "paragraph",
        "text": "霍乱是一种细菌性疾病，经被感染者粪便污染的水传播。与其说它是医学问题，不如说它是卫生设施的问题。"
      },
      {
        "type": "paragraph",
        "text": "这种细菌产生一种毒素，使小肠上皮细胞把氯离子分泌到肠腔中。这使肠内容物的水势低于细胞的水势——于是水通过渗透随之而去，从身体流入肠道。"
      },
      {
        "type": "paragraph",
        "text": "这就是腹泻的由来，也是霍乱致死如此之快的原因：致命的不是细菌本身，而是水和离子的流失。这同样解释了为何治疗如此简单——口服补液盐，含适当盐分和一些葡萄糖的水，把流失的补回去。"
      },
      {
        "type": "heading",
        "text": "抗生素，以及它们为何会失效"
      },
      {
        "type": "paragraph",
        "text": "药物是进入体内、改变或影响体内化学反应的任何物质。抗生素是其中能杀死细菌的一类——它们攻击细菌有而你的细胞没有的结构，例如细胞壁。"
      },
      {
        "type": "paragraph",
        "text": "这正是抗生素对病毒毫无作用的原因。病毒没有细胞壁、没有自己的核糖体、没有可被毒害的代谢——它只是蛋白质外壳里的遗传物质，在你的细胞内复制。那里没有任何东西供抗生素攻击。"
      },
      {
        "type": "paragraph",
        "text": "抗生素耐药性就是自然选择，只不过发生在医院而不是森林里。在任何庞大的细菌种群中，总有少数携带能使其在药物下存活的突变。用了抗生素，没有该突变的死去，而这少数存活并繁殖。"
      },
      {
        "type": "paragraph",
        "text": "于是整个种群变得耐药——不是因为个别细菌发生了改变，而是因为只剩下耐药的那些还能繁殖。每一次不必要的抗生素疗程都会把这个选择过程再跑一遍，这就是为什么只有真正需要时才开抗生素。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "pathogen（病原体）：引起疾病的生物。",
          "antigen（抗原）：病原体表面具有特定形状的分子。每种病原体都有自己的抗原。",
          "antibody（抗体）：由淋巴细胞产生的蛋白质，其形状与某一特定抗原互补。",
          "memory cell（记忆细胞）：感染或接种后留存下来的长寿淋巴细胞。第二次反应之所以快得多，原因就在于它。",
          "passive immunity（被动免疫）：由别处产生的抗体提供的短期保护。立即起效，但不产生记忆细胞，因而不持久。",
          "antibiotic（抗生素）：通过攻击细菌有而人体细胞没有的结构来杀灭细菌的药物。对病毒无效。"
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
          "Describe pathogens and transmissible diseases, and state the routes of transmission.",
          "Describe the body’s defences, and explain how hygiene and waste disposal control the spread of disease.",
          "Describe active immunity, antigens, antibodies and their complementary shapes. (Extended)",
          "Outline vaccination and explain its role in controlling the spread of disease. (Extended)",
          "Explain passive immunity, its importance in breast-feeding, and why no memory cells are made. (Extended)",
          "Describe cholera and explain how its toxin causes diarrhoea and dehydration. (Extended)",
          "Describe the use of antibiotics, why they do not affect viruses, and how resistance arises."
        ]
      },
      {
        "type": "heading",
        "text": "What a toxin actually does"
      },
      {
        "type": "paragraph",
        "text": "Cholera is a bacterial disease, transmitted in water contaminated with faeces from an infected person. It is a disease of sanitation more than of medicine."
      },
      {
        "type": "paragraph",
        "text": "The bacterium produces a toxin that makes the cells lining the small intestine secrete chloride ions into the gut. That lowers the water potential of the gut contents below that of the cells — so water follows by osmosis, out of the body and into the intestine."
      },
      {
        "type": "paragraph",
        "text": "That is the diarrhoea, and it is why cholera kills so quickly: not the bacterium itself but the loss of water and ions. Which is also why the treatment is so simple — rehydration solution, water with the right salts and some glucose, replacing what is being lost."
      },
      {
        "type": "heading",
        "text": "Antibiotics, and why they stop working"
      },
      {
        "type": "paragraph",
        "text": "A drug is any substance taken into the body that modifies or affects chemical reactions in it. Antibiotics are the ones that kill bacteria — by attacking structures a bacterium has and your cells do not, such as its cell wall."
      },
      {
        "type": "paragraph",
        "text": "Which is exactly why antibiotics do nothing to a virus. A virus has no cell wall, no ribosomes of its own, no metabolism to poison — it is genetic material in a protein coat, reproducing inside your cells. There is nothing there for an antibiotic to attack."
      },
      {
        "type": "paragraph",
        "text": "Antibiotic resistance is natural selection, running in a hospital instead of a forest. In any large population of bacteria a few carry a mutation that lets them survive the drug. Give the antibiotic, and the ones without it die while those few survive and reproduce."
      },
      {
        "type": "paragraph",
        "text": "So the population becomes resistant — not because individual bacteria changed, but because the resistant ones were the only ones left to breed. Every unnecessary course of antibiotics runs that selection once more, which is why they are prescribed only when they are really needed."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "pathogen (病原体): An organism that causes disease.",
          "antigen (抗原): A molecule on the surface of a pathogen with a particular shape. Each pathogen has its own.",
          "antibody (抗体): A protein made by lymphocytes, with a shape complementary to one specific antigen.",
          "memory cell (记忆细胞): A long-lived lymphocyte left after an infection or vaccination. It is why the second response is so much faster.",
          "passive immunity (被动免疫): Short-term protection by antibodies made elsewhere. Immediate, but no memory cells and so no lasting protection.",
          "antibiotic (抗生素): A drug that kills bacteria by attacking structures they have and human cells do not. It has no effect on viruses."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-10-1-cp1",
      "syllabus": [
        "0610/10.1.10",
        "0610/10.1.11"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "A graph shows antibody concentration after a first exposure to a pathogen and after a second exposure to the same pathogen. Describe the differences between the two responses and explain what causes them.",
      "markScheme": [
        {
          "text": "The second response begins sooner — antibodies appear after a much shorter delay",
          "marks": 1
        },
        {
          "text": "It reaches a much higher concentration of antibodies",
          "marks": 1
        },
        {
          "text": "and the antibodies remain at a raised level for longer",
          "marks": 1
        },
        {
          "text": "because memory cells produced during the first response are already present, already specific to that antigen, and can divide and produce antibodies immediately",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "三点差异加一个原因。学生常常只写\"更强\"就停下了——\"更快\"和\"更持久\"是各自独立的得分点。",
        "en": "Three differences and one cause. Students routinely give \"it is bigger\" and stop — faster and longer are separate marks."
      }
    },
    {
      "id": "0610-10-1-cp2",
      "syllabus": [
        "0610/10.1.11",
        "0610/10.1.12"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain how vaccination protects a person against a disease, and how vaccinating most of a population protects those who have not been vaccinated.",
      "markScheme": [
        {
          "text": "The vaccine contains a weakened or dead pathogen, or its antigens, which cannot cause the disease",
          "marks": 1
        },
        {
          "text": "Lymphocytes recognise the antigens and produce antibodies, exactly as in a real infection",
          "marks": 1
        },
        {
          "text": "Memory cells remain, so a later infection by the real pathogen produces a rapid secondary response before symptoms develop",
          "marks": 1
        },
        {
          "text": "If most of the population is immune the pathogen cannot pass easily from host to host, so it does not spread to the unvaccinated",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "最后一分讲的是\"传播\"，不是个体。另外，疫苗并不是\"给你抗体\"——它是让你自己产生抗体。",
        "en": "The last mark is about transmission, not about the individual. And a vaccine does not \"give you antibodies\" — it makes you produce your own."
      }
    },
    {
      "id": "0610-10-1-cp3",
      "syllabus": [
        "0610/10.1.13",
        "0610/10.1.14",
        "0610/10.1.15"
      ],
      "tier": "supplement",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Compare active and passive immunity, and state one situation in which passive immunity is important.",
      "markScheme": [
        {
          "text": "In active immunity the body produces its own antibodies; in passive immunity antibodies are received from elsewhere",
          "marks": 1
        },
        {
          "text": "Active immunity is slow to develop but long-lasting because memory cells are made; passive immunity is immediate but short-lived because no memory cells are made",
          "marks": 1
        },
        {
          "text": "A newborn receives antibodies across the placenta and in breast milk, protecting it while its own immune system develops",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "记忆细胞正是持续时间不同的原因——要写出这一点，而不只是说\"一个更持久\"。",
        "en": "The memory cells are the reason for the difference in duration — say so rather than just stating that one lasts longer."
      }
    },
    {
      "id": "0610-10-1-cp4",
      "syllabus": [
        "0610/10.1.17"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain how the cholera bacterium causes severe diarrhoea and dehydration.",
      "markScheme": [
        {
          "text": "The bacterium produces a toxin",
          "marks": 1
        },
        {
          "text": "which causes the cells lining the small intestine to secrete chloride ions into the gut",
          "marks": 1
        },
        {
          "text": "This lowers the water potential of the gut contents below that of the cells",
          "marks": 1
        },
        {
          "text": "so water moves out of the cells and into the intestine by osmosis, producing watery diarrhoea and dehydrating the body",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这实际上是一道伪装成疾病题的渗透题，而\"水势\"这一分最常被漏掉。细菌从未离开肠道——造成损害的是毒素。",
        "en": "This is an osmosis question in disguise, and the water potential mark is the one most often missed. The bacterium never leaves the gut — it is the toxin that does the damage."
      }
    },
    {
      "id": "0610-10-1-cp5",
      "syllabus": [
        "0610/15.1.3",
        "0610/15.1.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain how a population of bacteria becomes resistant to an antibiotic, and why antibiotics should only be used when they are essential.",
      "markScheme": [
        {
          "text": "Random mutation produces a few bacteria in the population that are resistant to the antibiotic",
          "marks": 1
        },
        {
          "text": "When the antibiotic is used, the non-resistant bacteria are killed but the resistant ones survive",
          "marks": 1
        },
        {
          "text": "The survivors reproduce and pass on the resistance allele, so the proportion of resistant bacteria in the population increases",
          "marks": 1
        },
        {
          "text": "Every unnecessary use repeats this selection, so limiting use slows the increase in resistance",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "突变是先发生的、而且是偶然的——细菌不是因为接触了药物才变得耐药。写\"它们逐渐适应了\"讲的是拉马克，不是自然选择。",
        "en": "The mutation comes first and by chance — bacteria do not become resistant because they were exposed. Writing \"they get used to it\" describes Lamarck, not natural selection."
      }
    },
    {
      "id": "0610-10-1-cp6",
      "syllabus": [
        "0610/15.1.4"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A patient with a cold asks for antibiotics. Explain why they would not help.",
      "markScheme": [
        {
          "text": "A cold is caused by a virus, not by bacteria",
          "marks": 1
        },
        {
          "text": "Antibiotics kill bacteria by attacking structures such as the cell wall, which a virus does not have — and a virus reproduces inside the body’s own cells",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要说出病毒\"缺什么\"。写\"抗生素对病毒无效\"只是把题目重述一遍；得分点在于原因。",
        "en": "Say what a virus lacks. \"Antibiotics do not work on viruses\" restates the question; the mark is for the reason."
      }
    },
    {
      "id": "0610-10-1-cp7",
      "syllabus": [
        "0610/10.1.4",
        "0610/10.1.5"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe two ways in which the human body prevents pathogens from entering, and state one way in which good hygiene reduces the spread of disease.",
      "markScheme": [
        {
          "text": "Skin acts as a barrier; or hairs and mucus in the nose trap particles; or cilia sweep mucus out of the airways",
          "marks": 1
        },
        {
          "text": "Stomach acid kills pathogens in food; or blood clots seal wounds against entry",
          "marks": 1
        },
        {
          "text": "Washing hands, treating sewage, providing clean drinking water or covering food breaks the transmission route",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这些是屏障和拦截机制，不是免疫反应。抗体是在病原体已经进入之后才登场的。",
        "en": "These are barriers and traps, not the immune response. Antibodies come after a pathogen has already got in."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "secondExposure",
        "label": {
          "zh": "第二次接触的日期",
          "en": "Day of the second exposure"
        },
        "min": 10,
        "max": 120,
        "step": 5,
        "defaultValue": 60,
        "unit": ""
      },
      {
        "key": "vaccinated",
        "label": {
          "zh": "第一次接触的形式",
          "en": "First exposure was"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "passive",
        "label": {
          "zh": "抗体的来源",
          "en": "Antibodies were"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "10-1-disease-immunity",
        "hint": {
          "en": "Compare the two antibody peaks, then switch on passive immunity and watch the second one collapse.",
          "zh": "先比较两个抗体峰，然后打开\"被动免疫\"，看第二个峰如何塌掉。"
        },
        "params": [
          {
            "key": "secondExposure",
            "label": {
              "en": "Day of the second exposure",
              "zh": "第二次接触的日期"
            },
            "unit": "",
            "min": 10,
            "max": 120,
            "step": 5,
            "default": 60
          },
          {
            "key": "vaccinated",
            "label": {
              "en": "First exposure was",
              "zh": "第一次接触的形式"
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
                  "en": "A live infection",
                  "zh": "真实感染"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "A vaccination",
                  "zh": "接种疫苗"
                }
              }
            ]
          },
          {
            "key": "passive",
            "label": {
              "en": "Antibodies were",
              "zh": "抗体的来源"
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
                  "en": "Made by the body",
                  "zh": "由自身产生"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Given directly",
                  "zh": "直接给予"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "firstLag",
            "label": {
              "en": "Days before the first antibodies",
              "zh": "首次出现抗体前的天数"
            },
            "unit": "days",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "secondLag",
            "label": {
              "en": "Days before the second",
              "zh": "第二次出现抗体前的天数"
            },
            "unit": "days",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "firstPeak",
            "label": {
              "en": "First antibody peak",
              "zh": "第一次抗体峰值"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "secondPeak",
            "label": {
              "en": "Second antibody peak",
              "zh": "第二次抗体峰值"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "illness",
            "label": {
              "en": "Worst the illness got",
              "zh": "病情最重时"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Infected twice",
              "zh": "两次感染"
            },
            "params": {
              "secondExposure": 60,
              "vaccinated": 0,
              "passive": 0
            }
          },
          {
            "label": {
              "en": "Vaccinated, then exposed",
              "zh": "先接种，后接触"
            },
            "params": {
              "secondExposure": 60,
              "vaccinated": 1,
              "passive": 0
            }
          },
          {
            "label": {
              "en": "Exposed years later",
              "zh": "很久以后才接触"
            },
            "params": {
              "secondExposure": 115,
              "vaccinated": 1,
              "passive": 0
            }
          },
          {
            "label": {
              "en": "Passive: no memory cells",
              "zh": "被动免疫：没有记忆细胞"
            },
            "params": {
              "secondExposure": 60,
              "vaccinated": 0,
              "passive": 1
            }
          },
          {
            "label": {
              "en": "A quick second exposure",
              "zh": "很快的第二次接触"
            },
            "params": {
              "secondExposure": 25,
              "vaccinated": 0,
              "passive": 0
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
        "zh": "两次感染",
        "en": "Infected twice"
      },
      "params": {
        "secondExposure": 60,
        "vaccinated": 0,
        "passive": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "先接种，后接触",
        "en": "Vaccinated, then exposed"
      },
      "params": {
        "secondExposure": 60,
        "vaccinated": 1,
        "passive": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "很久以后才接触",
        "en": "Exposed years later"
      },
      "params": {
        "secondExposure": 115,
        "vaccinated": 1,
        "passive": 0
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "被动免疫：没有记忆细胞",
        "en": "Passive: no memory cells"
      },
      "params": {
        "secondExposure": 60,
        "vaccinated": 0,
        "passive": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "很快的第二次接触",
        "en": "A quick second exposure"
      },
      "params": {
        "secondExposure": 25,
        "vaccinated": 0,
        "passive": 0
      }
    }
  ]
};
