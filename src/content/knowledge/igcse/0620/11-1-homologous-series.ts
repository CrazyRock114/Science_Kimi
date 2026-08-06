/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/11-1-homologous-series
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/11-1-homologous-series/narration';
import { equations } from '../../igcse-src/0620/11-1-homologous-series/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/11-1-homologous-series/kernel';

export const kp111HomologousSeries: KnowledgePoint = {
  "id": "igcse-0620-11-1-homologous-series",
  "subject": "chemistry",
  "tier": "core",
  "title": {
    "zh": "同系物与官能团",
    "en": "Homologous series and functional groups"
  },
  "summary": {
    "zh": "数百万种有机物，只问两个问题：碳链有多长，末端接了什么？",
    "en": "Millions of organic compounds, two questions. How long is the carbon chain, and what is on the end of it?"
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/11.1.1",
      "0620/11.1.2",
      "0620/11.1.3",
      "0620/11.1.4",
      "0620/11.1.5",
      "0620/11.1.6",
      "0620/11.2.1",
      "0620/11.2.2"
    ]
  },
  "keywords": {
    "zh": [
      "结构式",
      "通式",
      "官能团",
      "同系物",
      "饱和"
    ],
    "en": [
      "displayed formula",
      "general formula",
      "functional group",
      "homologous series",
      "saturated"
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
          "画出并解读分子的结构式。",
          "写出并解读同系物的通式。",
          "把官能团理解为决定化学性质的原子团。",
          "定义同系物并说出其特征。",
          "由官能团判断化合物属于哪一类。",
          "命名并画出前四种烷烃、烯烃、醇以及乙酸。"
        ]
      },
      {
        "type": "heading",
        "text": "改变链的末端"
      },
      {
        "type": "paragraph",
        "text": "现在把碳链固定在两个碳，改变末端。这是乙烯：两个碳共用两对电子而不是一对，所以有一个双键，氢也少了两个。通式变成 CₙH₂ₙ。"
      },
      {
        "type": "paragraph",
        "text": "乙醇。一个 –OH 取代了一个氢，名字以 \"-ol\" 结尾。同样是两个碳，但看沸点：乙烷 −89，乙醇 78。官能团改变了一切。"
      },
      {
        "type": "paragraph",
        "text": "乙酸——食醋中的酸。一个 –COOH 官能团：一个氧与碳双键相连，另一个在 O–H 中。正是这个基团让它成为酸，也让沸点又高了一截。"
      },
      {
        "type": "paragraph",
        "text": "青色的键就是官能团：决定化学性质的那部分原子。灰色的部分只是碳链。官能团相同的两种化合物，不管链多长，反应方式都相同。"
      },
      {
        "type": "heading",
        "text": "读懂名字"
      },
      {
        "type": "paragraph",
        "text": "有机物的名字分两半。词干表示碳数——meth- 一、eth- 二、prop- 三、but- 四。词尾表示类别：-ane、-ene、-ol、-oic acid。"
      },
      {
        "type": "paragraph",
        "text": "所以 propan-1-ol 一定是三个碳带一个 –OH，即使没见过也能画出来。中间的数字告诉你官能团在第几个碳上。"
      },
      {
        "type": "formula",
        "latex": "M_r = \\sum (\\text{atoms} \\times A_r)",
        "caption": "相对分子质量是分子式中所有原子的加和。C 为 12，H 为 1，O 为 16。"
      },
      {
        "type": "formula",
        "latex": "\\Delta M_r = 14 \\text{ per } \\mathrm{CH_2}",
        "caption": "同系物每上升一级就增加一个 CH₂——碳 12 加上两个氢 2。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "displayed formula（结构式）：画出分子中每个原子与每根键的图示。碳原子必须画满四根键。",
          "general formula（通式）：用 n 表示碳原子数、涵盖整个系列所有成员的化学式——烷烃是 CₙH₂ₙ₊₂。",
          "functional group（官能团）：决定化合物化学性质的原子或原子团。链的长短影响很小，官能团才是关键。",
          "homologous series（同系物）：官能团与通式相同、相邻成员相差一个 CH₂ 的一族化合物。",
          "saturated（饱和）：只含碳碳单键。烷烃是饱和的；含 C=C 的烯烃则不是。"
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
          "Draw and interpret displayed formulae of molecules.",
          "Write and interpret the general formula of a homologous series.",
          "Identify a functional group as the atoms that determine chemical properties.",
          "Define a homologous series and state its characteristics.",
          "State the type of compound present from its functional group.",
          "Name and draw the first four alkanes, alkenes and alcohols, and ethanoic acid."
        ]
      },
      {
        "type": "heading",
        "text": "Change the end of the chain"
      },
      {
        "type": "paragraph",
        "text": "Now hold the chain at two carbons and change what is on the end. This is ethene: the two carbons share two pairs of electrons instead of one, so there is a double bond and two fewer hydrogens. The general formula drops to CₙH₂ₙ."
      },
      {
        "type": "paragraph",
        "text": "Ethanol. An –OH group in place of one hydrogen, and the name ends in \"-ol\". Same two carbons, but look at the boiling point: minus eighty-nine for ethane, seventy-eight for ethanol. The group changed everything."
      },
      {
        "type": "paragraph",
        "text": "Ethanoic acid — the acid in vinegar. A –COOH group: one oxygen double-bonded to the carbon, one in an O–H. That group is what makes it an acid, and it is the reason the boiling point is higher again."
      },
      {
        "type": "paragraph",
        "text": "The teal bonds are the functional group: the atoms that decide the chemical properties. Everything in grey is just chain. Two compounds with the same functional group react in the same way, however long their chains."
      },
      {
        "type": "heading",
        "text": "Reading the name"
      },
      {
        "type": "paragraph",
        "text": "Organic names are built in two halves. The stem counts the carbons — meth- one, eth- two, prop- three, but- four. The ending gives the family: -ane, -ene, -ol, -oic acid."
      },
      {
        "type": "paragraph",
        "text": "So propan-1-ol has to be three carbons with an –OH, and you can draw it without ever having seen it. The number tells you which carbon the group is on."
      },
      {
        "type": "formula",
        "latex": "M_r = \\sum (\\text{atoms} \\times A_r)",
        "caption": "Relative molecular mass is the sum over every atom in the formula. C is 12, H is 1, O is 16."
      },
      {
        "type": "formula",
        "latex": "\\Delta M_r = 14 \\text{ per } \\mathrm{CH_2}",
        "caption": "Each step up a homologous series adds one CH₂ — 12 for the carbon plus 2 for the hydrogens."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "displayed formula (结构式): A drawing showing every atom and every bond in a molecule. A carbon must have four bonds on it.",
          "general formula (通式): One formula covering every member of a series, written with n for the number of carbon atoms — alkanes are CₙH₂ₙ₊₂.",
          "functional group (官能团): The atom or group of atoms that determines the chemical properties of a compound. The chain length barely matters; the group is everything.",
          "homologous series (同系物): A family of compounds with the same functional group and general formula, whose consecutive members differ by CH₂.",
          "saturated (饱和): Containing only single carbon–carbon bonds. Alkanes are saturated; alkenes, with a C=C, are not."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-11-1-cp1",
      "syllabus": [
        "0620/11.1.2"
      ],
      "tier": "core",
      "commandWord": "Deduce",
      "marks": 1,
      "stem": "An alkane has 6 carbon atoms. Deduce its molecular formula.",
      "options": [
        "C₆H₁₄",
        "C₆H₁₂",
        "C₆H₆",
        "C₆H₁₆"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "C₆H₁₄",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "用通式 CₙH₂ₙ₊₂，不要去想分子长什么样：2 × 6 + 2 = 14。C₆H₁₂ 是对应的烯烃，正是设下的陷阱。",
        "en": "Use the general formula CₙH₂ₙ₊₂ rather than trying to picture the molecule: 2 × 6 + 2 = 14. C₆H₁₂ is the alkene, which is the trap."
      }
    },
    {
      "id": "0620-11-1-cp2",
      "syllabus": [
        "0620/11.1.4",
        "0620/11.1.5"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe three characteristics of a homologous series.",
      "markScheme": [
        {
          "text": "All members have the same general formula",
          "marks": 1
        },
        {
          "text": "Consecutive members differ by CH₂",
          "marks": 1,
          "alternatives": [
            "Consecutive members differ by 14 in relative molecular mass"
          ]
        },
        {
          "text": "They have similar chemical properties, because they share a functional group",
          "marks": 1,
          "alternatives": [
            "They show a gradual change in physical properties down the series"
          ]
        }
      ],
      "examinerNote": {
        "zh": "这四个特征值得当作清单背下来；三分就写三条。只写\"它们相似\"得不到分——要说明*化学*性质相似、*物理*性质渐变。",
        "en": "Four characteristics are worth learning as a list; three marks means three of them. \"They are similar\" scores nothing — say *chemical* properties are similar and *physical* properties change gradually."
      }
    },
    {
      "id": "0620-11-1-cp3",
      "syllabus": [
        "0620/11.1.3",
        "0620/11.1.6"
      ],
      "tier": "core",
      "commandWord": "Identify",
      "marks": 2,
      "stem": "A compound has the structure CH₃CH₂COOH. Identify the functional group and state the type of compound.",
      "markScheme": [
        {
          "text": "–COOH (carboxyl group)",
          "marks": 1
        },
        {
          "text": "Carboxylic acid",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要写官能团，不是整个分子。写 \"COOH\" 就够了；写 \"CH₃CH₂COOH\" 答的是别的问题，得不到分。",
        "en": "Give the group, not the whole molecule. Writing \"COOH\" is enough; writing \"CH₃CH₂COOH\" answers a question that was not asked and scores nothing."
      }
    },
    {
      "id": "0620-11-1-cp4",
      "syllabus": [
        "0620/11.2.1",
        "0620/11.1.1"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 2,
      "stem": "Ethene and ethane both contain two carbon atoms. State one difference in their displayed formulae and one difference in their molecular formulae.",
      "markScheme": [
        {
          "text": "Ethene has a double bond between the two carbon atoms; ethane has a single bond",
          "marks": 1
        },
        {
          "text": "Ethene is C₂H₄ and ethane is C₂H₆, so ethene has two fewer hydrogen atoms",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这两个差别是相连的：双键占用了碳四根键中的两根，所以能接氢的位置少了两个。写出这层联系说明你是理解而非死记。",
        "en": "The two differences are linked: the double bond uses up two of carbon’s four bonds, so there are two fewer places for hydrogen. Saying so shows you understand rather than remember."
      }
    },
    {
      "id": "0620-11-1-cp5",
      "syllabus": [
        "0620/11.1.5"
      ],
      "tier": "core",
      "commandWord": "Predict",
      "marks": 2,
      "stem": "The boiling points of methane, ethane and propane are −162 °C, −89 °C and −42 °C. Predict the boiling point of butane and justify your answer.",
      "markScheme": [
        {
          "text": "A value between −20 °C and +10 °C",
          "marks": 1
        },
        {
          "text": "Boiling point increases down the series, and the increases are getting smaller (73 then 47)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "丁烷沸点约为 0 °C。\"Predict\" 类题要求给出数值并用数据说明理由——只写数字，再准也最多一分。",
        "en": "Butane boils at about 0 °C. A \"predict\" question wants a number and a reason from the data — a bare number, however close, is one mark at most."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "carbons",
        "label": {
          "zh": "碳原子数",
          "en": "Carbon atoms"
        },
        "min": 1,
        "max": 4,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "family",
        "label": {
          "zh": "同系物类别",
          "en": "Homologous series"
        },
        "min": 0,
        "max": 3,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "molecule",
        "kernel": "11-1-homologous-series",
        "hint": {
          "en": "Move the carbon slider to walk up a series; switch family to change only the group on the end. Teal bonds are the functional group.",
          "zh": "拖动碳数滑块可沿同系物向上走；切换类别只改变末端的基团。青色的键就是官能团。"
        },
        "params": [
          {
            "key": "carbons",
            "label": {
              "en": "Carbon atoms",
              "zh": "碳原子数"
            },
            "unit": "",
            "symbol": "n",
            "min": 1,
            "max": 4,
            "step": 1,
            "default": 1
          },
          {
            "key": "family",
            "label": {
              "en": "Homologous series",
              "zh": "同系物类别"
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
                  "en": "Alkane",
                  "zh": "烷烃"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Alkene",
                  "zh": "烯烃"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Alcohol",
                  "zh": "醇"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Carboxylic acid",
                  "zh": "羧酸"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "carbons",
            "label": {
              "en": "Carbon atoms",
              "zh": "碳原子数"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "hydrogens",
            "label": {
              "en": "Hydrogen atoms",
              "zh": "氢原子数"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "relativeMolecularMass",
            "label": {
              "en": "Relative molecular mass",
              "zh": "相对分子质量"
            },
            "unit": "",
            "symbol": "M_r",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "boilingPoint",
            "label": {
              "en": "Boiling point",
              "zh": "沸点"
            },
            "unit": "°C",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Methane",
              "zh": "甲烷"
            },
            "params": {
              "carbons": 1,
              "family": 0
            }
          },
          {
            "label": {
              "en": "Ethene",
              "zh": "乙烯"
            },
            "params": {
              "carbons": 2,
              "family": 1
            }
          },
          {
            "label": {
              "en": "Ethanol",
              "zh": "乙醇"
            },
            "params": {
              "carbons": 2,
              "family": 2
            }
          },
          {
            "label": {
              "en": "Ethanoic acid",
              "zh": "乙酸"
            },
            "params": {
              "carbons": 2,
              "family": 3
            }
          },
          {
            "label": {
              "en": "Butane",
              "zh": "丁烷"
            },
            "params": {
              "carbons": 4,
              "family": 0
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
        "zh": "甲烷",
        "en": "Methane"
      },
      "params": {
        "carbons": 1,
        "family": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "乙烯",
        "en": "Ethene"
      },
      "params": {
        "carbons": 2,
        "family": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "乙醇",
        "en": "Ethanol"
      },
      "params": {
        "carbons": 2,
        "family": 2
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "乙酸",
        "en": "Ethanoic acid"
      },
      "params": {
        "carbons": 2,
        "family": 3
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "丁烷",
        "en": "Butane"
      },
      "params": {
        "carbons": 4,
        "family": 0
      }
    }
  ]
};
