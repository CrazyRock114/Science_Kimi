/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/1-1-classification
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/1-1-classification/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/1-1-classification/kernel';

export const kp11Classification: KnowledgePoint = {
  "id": "igcse-0610-1-1-classification",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "生物的特征与分类",
    "en": "Characteristics and classification"
  },
  "summary": {
    "zh": "蝙蝠会飞、企鹅会游，但这都说明不了它们究竟是什么。分类依据的是特征，而特征本身是关于亲缘关系的主张。",
    "en": "A bat flies and a penguin swims, and neither fact tells you what either one is. Classification runs on features, and the features are a claim about ancestry."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/1.1.1",
      "0610/1.2.1",
      "0610/1.2.2",
      "0610/1.2.3",
      "0610/1.2.4",
      "0610/1.2.5",
      "0610/1.2.6",
      "0610/1.2.7",
      "0610/1.3.1",
      "0610/1.3.2",
      "0610/1.3.3",
      "0610/1.3.4",
      "0610/1.3.5",
      "0610/1.3.6",
      "0610/1.3.7"
    ]
  },
  "keywords": {
    "zh": [
      "物种",
      "双名法",
      "二歧检索表",
      "原核生物",
      "子叶",
      "病毒"
    ],
    "en": [
      "species",
      "binomial system",
      "dichotomous key",
      "prokaryote",
      "cotyledon",
      "virus"
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
          "描述所有生物共有的七个特征。",
          "把物种定义为能繁殖产生可育后代的生物。",
          "描述物种命名的双名法。",
          "根据可观察的特征构建并使用二歧检索表。",
          "说出用于把生物划入动物界与植物界、以及在动物界内分组所依据的特征。",
          "解释分类的目标是反映进化关系，以及如何用 DNA 碱基序列作为证据。（Extended）",
          "说出把生物划入五界以及给植物分组所依据的特征。（Extended）",
          "说出病毒的特征。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "蝙蝠会飞、企鹅会游，但这都说明不了它们究竟是什么。分类依据的是特征，而特征本身是关于亲缘关系的主张。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "species（物种）：能繁殖并产生可育后代的一群生物。马和驴生出的骡子不育——所以它们仍是两个物种。",
          "binomial system（双名法）：国际通用的两部分命名系统：属名首字母大写，其后是全小写的种加词，两者均用斜体。",
          "dichotomous key（二歧检索表）：用于鉴定生物的一串成对陈述。每一步恰好提供两个选项，每个选项通向下一对陈述或一个名称。",
          "prokaryote（原核生物）：细胞没有细胞核的生物，其 DNA 以环状游离于细胞质中。细菌属于原核生物。",
          "cotyledon（子叶）：种子内为幼苗贮存养料的叶。一片为单子叶植物，两片为双子叶植物。",
          "virus（病毒）：蛋白质外壳内包裹的遗传物质，除此之外别无他物。它不是细胞，也不属于五界中的任何一界。"
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
          "Describe the seven characteristics shared by all living organisms.",
          "Define a species as organisms that can reproduce to give fertile offspring.",
          "Describe the binomial system for naming species.",
          "Construct and use a dichotomous key from observable features.",
          "State the features used to place organisms in the animal and plant kingdoms, and to group them within the animal kingdom.",
          "Explain that classification aims to reflect evolutionary relationships, and that DNA base sequences are used as evidence. (Extended)",
          "State the features used to place organisms in the five kingdoms and to group plants. (Extended)",
          "State the features of viruses. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "A bat flies and a penguin swims, and neither fact tells you what either one is. Classification runs on features, and the features are a claim about ancestry."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "species (物种): A group of organisms that can reproduce to produce fertile offspring. A horse and a donkey give a mule, which is infertile — so they remain two species.",
          "binomial system (双名法): The international two-part naming system: genus with a capital letter, then species in lower case, both in italics.",
          "dichotomous key (二歧检索表): A chain of paired statements for identifying an organism. Each step offers exactly two options, and each option leads to another pair or to a name.",
          "prokaryote (原核生物): An organism whose cells have no nucleus; the DNA lies free in the cytoplasm as a loop. Bacteria are prokaryotes.",
          "cotyledon (子叶): The leaf inside a seed that stores food for the young plant. One means a monocotyledon, two a dicotyledon.",
          "virus (病毒): Genetic material inside a protein coat, and nothing else. Not a cell, and in none of the five kingdoms."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-1-1-cp1",
      "syllabus": [
        "0610/1.2.2"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "A horse and a donkey can breed together to produce a mule. Explain why horses and donkeys are still classified as two different species.",
      "markScheme": [
        {
          "text": "A species is defined as organisms that can reproduce to give fertile offspring",
          "marks": 1
        },
        {
          "text": "A mule is infertile / cannot itself reproduce, so the definition is not met",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "整道题的关键在\"可育\"二字。写\"它们能交配，所以是同一物种\"得零分；写\"它们长得不一样\"同样不得分——外表不是定义。",
        "en": "The whole answer turns on the word \"fertile\". Writing \"they can breed, so they are one species\" gets nothing, and neither does \"they look different\" — appearance is not the definition."
      }
    },
    {
      "id": "0610-1-1-cp2",
      "syllabus": [
        "0610/1.3.4"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 3,
      "stem": "A single-celled organism found in pond water photosynthesises and has a cell wall. Suggest what further observations would let you decide whether it belongs to the Prokaryote, Protoctist or Plant kingdom.",
      "markScheme": [
        {
          "text": "Look for a nucleus — if there is none it is a prokaryote, whatever else it does",
          "marks": 1
        },
        {
          "text": "If a nucleus is present, the organism is single-celled so it is a protoctist rather than a plant",
          "marks": 1
        },
        {
          "text": "Check whether the cell wall is made of cellulose, and whether the chloroplasts are of the kind found in plant cells",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "光合作用是干扰项——蓝细菌能光合作用，却是原核生物。有无细胞核，永远是\"五界\"类问题要问的第一个问题。",
        "en": "Photosynthesis is a red herring — cyanobacteria photosynthesise and are prokaryotes. Presence or absence of a nucleus is the first question in every kingdom problem."
      }
    },
    {
      "id": "0610-1-1-cp3",
      "syllabus": [
        "0610/1.3.2",
        "0610/1.3.3"
      ],
      "tier": "core",
      "commandWord": "Identify",
      "marks": 2,
      "stem": "An animal has a body divided into two parts, four pairs of legs, no wings and no antennae. Identify the group of arthropods it belongs to and give one feature that rules out insects.",
      "markScheme": [
        {
          "text": "Arachnid",
          "marks": 1
        },
        {
          "text": "Four pairs of legs (insects have three), or two body parts (insects have three), or no antennae (insects have one pair)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "第二个得分点在于\"对比\"，而不是重复。只写\"它有四对足\"并不能排除昆虫，除非同时指出昆虫有三对。",
        "en": "The second mark is for a contrast, not a repetition. Saying \"it has four pairs of legs\" alone does not rule insects out unless you also say insects have three."
      }
    },
    {
      "id": "0610-1-1-cp4",
      "syllabus": [
        "0610/1.2.4"
      ],
      "tier": "core",
      "commandWord": "Suggest",
      "marks": 2,
      "stem": "A student writes one step of a dichotomous key for pond animals as: \"1a — the animal is large; 1b — the animal is brown.\" Suggest two reasons why this step will not work.",
      "markScheme": [
        {
          "text": "The two options are not alternatives — an animal could be both large and brown, or neither, so it cannot be followed",
          "marks": 1
        },
        {
          "text": "Size and colour are unreliable features: a young animal is small, and colour varies within a species",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这里有两个不同的错误，各一分。多数学生只看出\"大小和颜色不可靠\"，却漏掉结构性的错误——一步中的两个选项必须互为对立。",
        "en": "Two separate faults, one mark each. Most students spot the size-and-colour problem and miss the structural one — the two halves of a step must be opposites."
      }
    },
    {
      "id": "0610-1-1-cp5",
      "syllabus": [
        "0610/1.2.6",
        "0610/1.2.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Species P and Q share 96% of their DNA base sequence. Species P and R share 71%. Explain what this tells you about how the three species are related.",
      "markScheme": [
        {
          "text": "P and Q are more closely related to each other than P is to R",
          "marks": 1
        },
        {
          "text": "P and Q shared a common ancestor more recently",
          "marks": 1
        },
        {
          "text": "Because less time has passed since that ancestor, fewer changes (mutations) have accumulated in the base sequences, so they remain more similar",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "第三个得分点是机理，也是最常被漏掉的一点。\"DNA 越相似亲缘越近\"只是复述数据；得分点在于说明时间与相似度之间为何相关。",
        "en": "The third mark is the mechanism, and it is the one most often left out. \"More similar DNA means more closely related\" restates the data; the marks are for saying why time and similarity are linked."
      }
    },
    {
      "id": "0610-1-1-cp6",
      "syllabus": [
        "0610/1.1.1"
      ],
      "tier": "core",
      "commandWord": "Define",
      "marks": 2,
      "stem": "Excretion and egestion are two of the processes carried out by a mammal. Define excretion and state how it differs from egestion.",
      "markScheme": [
        {
          "text": "Excretion is the removal of the waste products of metabolism, toxic materials and substances in excess of requirements",
          "marks": 1
        },
        {
          "text": "Egestion removes undigested food that was never absorbed into the body, so it was never a product of the organism’s own reactions",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "粪便是排遗的，不是排泄的——那些物质从未进入身体的细胞。尿液和呼出的二氧化碳才是排泄物，因为它们由身体自己产生。",
        "en": "Faeces are egested, not excreted — the material never entered the body’s cells. Urine and exhaled carbon dioxide are excreted, because the body made them."
      }
    },
    {
      "id": "0610-1-1-cp7",
      "syllabus": [
        "0610/1.3.7"
      ],
      "tier": "supplement",
      "commandWord": "State",
      "marks": 2,
      "stem": "Viruses are not placed in any of the five kingdoms. State the two structural features of a virus, and give one reason why it is not classified as a prokaryote.",
      "markScheme": [
        {
          "text": "A protein coat surrounding genetic material",
          "marks": 1
        },
        {
          "text": "A virus is not a cell — it has no cytoplasm or cell membrane — whereas a prokaryote is a complete cell",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"它更小\"不算理由。区别在于细胞结构：细菌是一个恰好没有细胞核的细胞；病毒则根本不是细胞。",
        "en": "\"It is smaller\" is not a reason. The distinction is cellular structure: a bacterium is a cell that happens to lack a nucleus; a virus is not a cell at all."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "stage",
        "label": {
          "zh": "练习",
          "en": "Exercise"
        },
        "min": 1,
        "max": 4,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "place-k-mushroom",
        "label": {
          "zh": "蘑菇",
          "en": "Mushroom"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-cyano",
        "label": {
          "zh": "蓝细菌",
          "en": "Cyanobacterium"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-oak",
        "label": {
          "zh": "橡树",
          "en": "Oak tree"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-earthworm",
        "label": {
          "zh": "蚯蚓",
          "en": "Earthworm"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-yeast",
        "label": {
          "zh": "酵母菌",
          "en": "Yeast"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-amoeba",
        "label": {
          "zh": "变形虫",
          "en": "Amoeba"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-housefly",
        "label": {
          "zh": "家蝇",
          "en": "Housefly"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-ecoli",
        "label": {
          "zh": "大肠杆菌",
          "en": "Escherichia coli"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-moss",
        "label": {
          "zh": "苔藓",
          "en": "Moss"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-k-plasmodium",
        "label": {
          "zh": "疟原虫",
          "en": "Plasmodium"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-v-shark",
        "label": {
          "zh": "鲨鱼",
          "en": "Shark"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-v-crocodile",
        "label": {
          "zh": "鳄鱼",
          "en": "Crocodile"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-v-bat",
        "label": {
          "zh": "蝙蝠",
          "en": "Bat"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-v-penguin",
        "label": {
          "zh": "企鹅",
          "en": "Penguin"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-v-newt",
        "label": {
          "zh": "蝾螈",
          "en": "Newt"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-v-tortoise",
        "label": {
          "zh": "陆龟",
          "en": "Tortoise"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-v-dolphin",
        "label": {
          "zh": "海豚",
          "en": "Dolphin"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-v-frog",
        "label": {
          "zh": "青蛙",
          "en": "Frog"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-a-woodlouse",
        "label": {
          "zh": "鼠妇",
          "en": "Woodlouse"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-a-butterfly",
        "label": {
          "zh": "蝴蝶",
          "en": "Butterfly"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-a-millipede",
        "label": {
          "zh": "马陆",
          "en": "Millipede"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-a-scorpion",
        "label": {
          "zh": "蝎子",
          "en": "Scorpion"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-a-crab",
        "label": {
          "zh": "螃蟹",
          "en": "Crab"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-a-ant",
        "label": {
          "zh": "蚂蚁",
          "en": "Ant"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-a-centipede",
        "label": {
          "zh": "蜈蚣",
          "en": "Centipede"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-a-spider",
        "label": {
          "zh": "蜘蛛",
          "en": "Spider"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-p-maize",
        "label": {
          "zh": "玉米",
          "en": "Maize"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-p-sunflower",
        "label": {
          "zh": "向日葵",
          "en": "Sunflower"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-p-bracken",
        "label": {
          "zh": "欧洲蕨",
          "en": "Bracken"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-p-bean",
        "label": {
          "zh": "菜豆",
          "en": "Bean plant"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-p-treefern",
        "label": {
          "zh": "树蕨",
          "en": "Tree fern"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-p-wheat",
        "label": {
          "zh": "小麦",
          "en": "Wheat"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "sort",
        "kernel": "1-1-classification",
        "hint": {
          "en": "Read the features on each group first, then place the organisms. A wrong placement stays put and is marked — click it to take it back.",
          "zh": "先读每个类群上的特征，再放置生物。放错的会留在原处并被标出——点击它即可取回。"
        },
        "params": [
          {
            "key": "stage",
            "label": {
              "en": "Exercise",
              "zh": "练习"
            },
            "unit": "",
            "min": 1,
            "max": 4,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 1,
                "label": {
                  "en": "Five kingdoms",
                  "zh": "五界"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Vertebrates",
                  "zh": "脊椎动物"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Arthropods",
                  "zh": "节肢动物"
                }
              },
              {
                "value": 4,
                "label": {
                  "en": "Plants",
                  "zh": "植物"
                }
              }
            ]
          },
          {
            "key": "place-k-mushroom",
            "label": {
              "en": "Mushroom",
              "zh": "蘑菇"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-cyano",
            "label": {
              "en": "Cyanobacterium",
              "zh": "蓝细菌"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-oak",
            "label": {
              "en": "Oak tree",
              "zh": "橡树"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-earthworm",
            "label": {
              "en": "Earthworm",
              "zh": "蚯蚓"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-yeast",
            "label": {
              "en": "Yeast",
              "zh": "酵母菌"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-amoeba",
            "label": {
              "en": "Amoeba",
              "zh": "变形虫"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-housefly",
            "label": {
              "en": "Housefly",
              "zh": "家蝇"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-ecoli",
            "label": {
              "en": "Escherichia coli",
              "zh": "大肠杆菌"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-moss",
            "label": {
              "en": "Moss",
              "zh": "苔藓"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-k-plasmodium",
            "label": {
              "en": "Plasmodium",
              "zh": "疟原虫"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-v-shark",
            "label": {
              "en": "Shark",
              "zh": "鲨鱼"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-v-crocodile",
            "label": {
              "en": "Crocodile",
              "zh": "鳄鱼"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-v-bat",
            "label": {
              "en": "Bat",
              "zh": "蝙蝠"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-v-penguin",
            "label": {
              "en": "Penguin",
              "zh": "企鹅"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-v-newt",
            "label": {
              "en": "Newt",
              "zh": "蝾螈"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-v-tortoise",
            "label": {
              "en": "Tortoise",
              "zh": "陆龟"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-v-dolphin",
            "label": {
              "en": "Dolphin",
              "zh": "海豚"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-v-frog",
            "label": {
              "en": "Frog",
              "zh": "青蛙"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-a-woodlouse",
            "label": {
              "en": "Woodlouse",
              "zh": "鼠妇"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-a-butterfly",
            "label": {
              "en": "Butterfly",
              "zh": "蝴蝶"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-a-millipede",
            "label": {
              "en": "Millipede",
              "zh": "马陆"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-a-scorpion",
            "label": {
              "en": "Scorpion",
              "zh": "蝎子"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-a-crab",
            "label": {
              "en": "Crab",
              "zh": "螃蟹"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-a-ant",
            "label": {
              "en": "Ant",
              "zh": "蚂蚁"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-a-centipede",
            "label": {
              "en": "Centipede",
              "zh": "蜈蚣"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-a-spider",
            "label": {
              "en": "Spider",
              "zh": "蜘蛛"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-p-maize",
            "label": {
              "en": "Maize",
              "zh": "玉米"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-p-sunflower",
            "label": {
              "en": "Sunflower",
              "zh": "向日葵"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-p-bracken",
            "label": {
              "en": "Bracken",
              "zh": "欧洲蕨"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-p-bean",
            "label": {
              "en": "Bean plant",
              "zh": "菜豆"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-p-treefern",
            "label": {
              "en": "Tree fern",
              "zh": "树蕨"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-p-wheat",
            "label": {
              "en": "Wheat",
              "zh": "小麦"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          }
        ],
        "readouts": [
          {
            "key": "correct",
            "label": {
              "en": "Correct",
              "zh": "正确"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "placed",
            "label": {
              "en": "Placed",
              "zh": "已放置"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "total",
            "label": {
              "en": "Organisms",
              "zh": "生物总数"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          }
        ]
      },
      "kernel": kernel
    }
  }
};
