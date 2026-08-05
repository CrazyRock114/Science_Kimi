/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/2-4-bonding
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/2-4-bonding/narration';
import { equations } from '../../igcse-src/0620/2-4-bonding/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/2-4-bonding/kernel';

export const kp24Bonding: KnowledgePoint = {
  "id": "igcse-0620-2-4-bonding",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "离子键与共价键",
    "en": "Ionic and covalent bonding"
  },
  "summary": {
    "zh": "每个原子都想填满最外层，而办法只有两种：把电子交出去，或者共用。",
    "en": "Every atom wants a full outer shell, and there are only two ways to get one: hand electrons over, or share them."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/2.4.1",
      "0620/2.4.2",
      "0620/2.4.3",
      "0620/2.4.4",
      "0620/2.4.5",
      "0620/2.4.6",
      "0620/2.4.7",
      "0620/2.5.1",
      "0620/2.5.2",
      "0620/2.5.3",
      "0620/2.5.4",
      "0620/2.5.5"
    ]
  },
  "keywords": {
    "zh": [
      "离子键",
      "共价键",
      "阳离子",
      "阴离子",
      "孤对电子",
      "巨型晶格"
    ],
    "en": [
      "ionic bond",
      "covalent bond",
      "cation",
      "anion",
      "lone pair",
      "giant lattice"
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
          "描述通过失去和得到电子形成阳离子与阴离子。",
          "说明离子键是异号离子间的强静电引力。",
          "描述第 I 族与第 VII 族元素之间、以及金属与非金属之间离子键的形成。",
          "描述离子化合物的巨型晶格结构与性质。",
          "说明共价键是一对共用电子。",
          "画出简单分子的电子式，包括含双键和三键的分子。",
          "用结构与成键解释离子化合物和简单分子化合物的性质。"
        ]
      },
      {
        "type": "paragraph",
        "text": "每个原子都想填满最外层，而办法只有两种：把电子交出去，或者共用。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{Na} \\rightarrow \\mathrm{Na^+} + e^-",
        "caption": "金属失去最外层电子。原子核毫无变化，所以它仍是钠，只是带了电。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{Cl} + e^- \\rightarrow \\mathrm{Cl^-}",
        "caption": "非金属得到电子以填满最外层。七加一等于八。"
      },
      {
        "type": "formula",
        "latex": "\\text{outer electrons} = \\text{own} + 2 \\times \\text{shared pairs}",
        "caption": "在共价键中，两个原子都把共用的两个电子算作自己的。正是这种\"重复计数\"使共用成为可能。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "ionic bond（离子键）：异号离子之间的强静电引力。它不是图上的一根线，而是电荷之间的吸引。",
          "covalent bond（共价键）：两个原子之间共用的一对电子。两个原子都把这两个电子算作自己的，因此都达到满壳层。",
          "cation（阳离子）：原子失去电子形成的正离子。金属形成阳离子。",
          "anion（阴离子）：原子得到电子形成的负离子。非金属形成阴离子。",
          "lone pair（孤对电子）：未参与成键的一对最外层电子。在电子式中仍然必须画出。",
          "giant lattice（巨型晶格）：数以亿计的正、负离子交替排列形成的规则三维结构。"
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
          "Describe the formation of cations and anions by the loss and gain of electrons.",
          "State that an ionic bond is a strong electrostatic attraction between oppositely charged ions.",
          "Describe ionic bond formation between Group I and Group VII elements, and between metals and non-metals generally.",
          "Describe the giant lattice structure and properties of ionic compounds.",
          "State that a covalent bond is a shared pair of electrons.",
          "Draw dot-and-cross diagrams for simple molecules, including those with double and triple bonds.",
          "Explain the properties of ionic and simple molecular compounds in terms of structure and bonding."
        ]
      },
      {
        "type": "paragraph",
        "text": "Every atom wants a full outer shell, and there are only two ways to get one: hand electrons over, or share them."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{Na} \\rightarrow \\mathrm{Na^+} + e^-",
        "caption": "A metal loses its outer electrons. The nucleus is untouched, so it is still sodium — just charged."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{Cl} + e^- \\rightarrow \\mathrm{Cl^-}",
        "caption": "A non-metal gains electrons to complete its outer shell. Seven plus one is eight."
      },
      {
        "type": "formula",
        "latex": "\\text{outer electrons} = \\text{own} + 2 \\times \\text{shared pairs}",
        "caption": "In a covalent bond both atoms count both shared electrons. That double-counting is what lets sharing work at all."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "ionic bond (离子键): The strong electrostatic attraction between oppositely charged ions. Not a line on a diagram — a pull between charges.",
          "covalent bond (共价键): A shared pair of electrons between two atoms. Both atoms count both electrons, so both reach a full outer shell.",
          "cation (阳离子): A positive ion, formed when an atom loses electrons. Metals form cations.",
          "anion (阴离子): A negative ion, formed when an atom gains electrons. Non-metals form anions.",
          "lone pair (孤对电子): A pair of outer electrons not involved in bonding. It must still be drawn in a dot-and-cross diagram.",
          "giant lattice (巨型晶格): A regular three-dimensional arrangement of billions of alternating positive and negative ions."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-2-4-cp1",
      "syllabus": [
        "0620/2.4.2"
      ],
      "tier": "core",
      "commandWord": "Define",
      "marks": 2,
      "stem": "Define the term ionic bond.",
      "markScheme": [
        {
          "text": "A strong electrostatic attraction",
          "marks": 1
        },
        {
          "text": "between oppositely charged ions",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "只写\"离子之间的吸引\"最多得一分——必须是*异号*离子，而且吸引是*静电*性的。这两个词都不可少。",
        "en": "\"Attraction between ions\" is one mark at most — it has to be *oppositely charged* ions, and the attraction is *electrostatic*. Both words are doing work."
      }
    },
    {
      "id": "0620-2-4-cp2",
      "syllabus": [
        "0620/2.4.1",
        "0620/2.4.6"
      ],
      "tier": "supplement",
      "commandWord": "Deduce",
      "marks": 1,
      "stem": "Calcium is in Group II and fluorine in Group VII. Deduce the formula of calcium fluoride.",
      "options": [
        "CaF₂",
        "CaF",
        "Ca₂F",
        "Ca₂F₇"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "CaF₂",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "钙失去 2 个电子，每个氟得到 1 个，所以需要两个氟才能接收。电荷必须平衡：一个 2+ 需要两个 1−。",
        "en": "Calcium loses 2 electrons and each fluorine gains 1, so it takes two fluorines to take both. The charges must balance: one 2+ needs two 1−."
      }
    },
    {
      "id": "0620-2-4-cp3",
      "syllabus": [
        "0620/2.4.4",
        "0620/2.4.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Sodium chloride has a high melting point and conducts electricity when molten but not when solid. Explain both observations.",
      "markScheme": [
        {
          "text": "It has a giant lattice of ions held by strong electrostatic attractions",
          "marks": 1
        },
        {
          "text": "A large amount of energy is needed to overcome all of these attractions, so the melting point is high",
          "marks": 1
        },
        {
          "text": "When molten the ions are free to move and carry charge; in the solid they are held in fixed positions",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "导电这一分需要对比，不能只说一半。要写熔融时离子*可以自由移动*、固态时离子*被固定*——只写\"离子会移动\"无法解释固体为什么不导电。",
        "en": "The conduction mark needs the contrast, not just half of it. Say the ions are *free to move* when molten and *fixed* when solid — \"the ions move\" alone does not explain why the solid fails to conduct."
      }
    },
    {
      "id": "0620-2-4-cp4",
      "syllabus": [
        "0620/2.5.1",
        "0620/2.5.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe the bonding in a molecule of ammonia, NH₃, and state how many outer electrons the nitrogen atom has in the molecule.",
      "markScheme": [
        {
          "text": "Three covalent bonds, each a shared pair of electrons between nitrogen and a hydrogen",
          "marks": 1
        },
        {
          "text": "Nitrogen also has one lone pair that is not shared",
          "marks": 1
        },
        {
          "text": "Eight outer electrons: two lone plus three shared pairs counted in full",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "共用电子对两个原子都要完整计数。氮的八个 = 2 个孤对电子 + 三对共用电子的 6 个——不是 2 + 3。",
        "en": "Count shared electrons in full for both atoms. Nitrogen’s eight is 2 lone + 6 from three shared pairs — not 2 + 3."
      }
    },
    {
      "id": "0620-2-4-cp5",
      "syllabus": [
        "0620/2.5.3",
        "0620/2.5.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Water boils at 100 °C, but sodium chloride melts at 801 °C. Both contain strong bonds. Explain the difference.",
      "markScheme": [
        {
          "text": "Water is a simple molecular substance with weak forces between its molecules",
          "marks": 1
        },
        {
          "text": "Boiling only has to overcome those intermolecular forces, not the covalent bonds within the molecules",
          "marks": 1
        },
        {
          "text": "Sodium chloride is a giant lattice, so melting must overcome strong ionic attractions throughout the structure",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "整道题的关键是区分分子*之间*的作用力与分子*内部*的键。写\"水的键很弱\"是错的，得不到分——它的 O–H 键很强。",
        "en": "The whole answer turns on separating forces *between* molecules from bonds *within* them. Saying \"water has weak bonds\" is wrong and scores nothing — its O–H bonds are strong."
      }
    },
    {
      "id": "0620-2-4-cp6",
      "syllabus": [
        "0620/2.5.4"
      ],
      "tier": "supplement",
      "commandWord": "State",
      "marks": 2,
      "stem": "A nitrogen molecule, N₂, contains a triple bond. State how many electrons are shared between the two atoms, and how many lone pairs each nitrogen atom has.",
      "markScheme": [
        {
          "text": "Six electrons shared (three shared pairs)",
          "marks": 1
        },
        {
          "text": "One lone pair on each nitrogen atom",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "氮最外层有五个电子：三个用于成键，剩下两个构成孤对。忘记画这对孤对电子是最常见的丢分方式。",
        "en": "Nitrogen has five outer electrons: three go into the bond and two are left as a lone pair. Forgetting to draw that lone pair is the usual way to lose the mark."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "bonded",
        "label": {
          "zh": "阶段",
          "en": "Stage"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "species",
        "label": {
          "zh": "化合物",
          "en": "Compound"
        },
        "min": 0,
        "max": 10,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "bonding",
        "kernel": "2-4-bonding",
        "hint": {
          "en": "Pick a compound, then switch from atoms to bonded. Crosses belong to one atom and dots to the other — watch where the crosses end up.",
          "zh": "先选一种化合物，再从\"原子\"切到\"成键\"。叉属于一个原子、点属于另一个——注意叉最后去了哪里。"
        },
        "params": [
          {
            "key": "bonded",
            "label": {
              "en": "Stage",
              "zh": "阶段"
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
                  "en": "Separate atoms",
                  "zh": "独立原子"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Bonded",
                  "zh": "已成键"
                }
              }
            ]
          },
          {
            "key": "species",
            "label": {
              "en": "Compound",
              "zh": "化合物"
            },
            "unit": "",
            "min": 0,
            "max": 10,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "NaCl",
                  "zh": "NaCl"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "MgO",
                  "zh": "MgO"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "MgCl₂",
                  "zh": "MgCl₂"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "H₂",
                  "zh": "H₂"
                }
              },
              {
                "value": 4,
                "label": {
                  "en": "HCl",
                  "zh": "HCl"
                }
              },
              {
                "value": 5,
                "label": {
                  "en": "H₂O",
                  "zh": "H₂O"
                }
              },
              {
                "value": 6,
                "label": {
                  "en": "NH₃",
                  "zh": "NH₃"
                }
              },
              {
                "value": 7,
                "label": {
                  "en": "CH₄",
                  "zh": "CH₄"
                }
              },
              {
                "value": 8,
                "label": {
                  "en": "O₂",
                  "zh": "O₂"
                }
              },
              {
                "value": 9,
                "label": {
                  "en": "CO₂",
                  "zh": "CO₂"
                }
              },
              {
                "value": 10,
                "label": {
                  "en": "N₂",
                  "zh": "N₂"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "electronsTransferred",
            "label": {
              "en": "Electrons transferred",
              "zh": "转移的电子数"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "sharedPairs",
            "label": {
              "en": "Shared pairs",
              "zh": "共用电子对数"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "outerElectronsWhenBonded",
            "label": {
              "en": "Outer shell when bonded",
              "zh": "成键后最外层电子数"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "atoms",
            "label": {
              "en": "Atoms",
              "zh": "原子数"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Na + Cl atoms",
              "zh": "Na + Cl 原子"
            },
            "params": {
              "species": 0,
              "bonded": 0
            }
          },
          {
            "label": {
              "en": "→ Na⁺ and Cl⁻",
              "zh": "→ Na⁺ 和 Cl⁻"
            },
            "params": {
              "species": 0,
              "bonded": 1
            }
          },
          {
            "label": {
              "en": "MgCl₂: two chlorines",
              "zh": "MgCl₂：两个氯"
            },
            "params": {
              "species": 2,
              "bonded": 1
            }
          },
          {
            "label": {
              "en": "Water",
              "zh": "水"
            },
            "params": {
              "species": 5,
              "bonded": 1
            }
          },
          {
            "label": {
              "en": "Methane",
              "zh": "甲烷"
            },
            "params": {
              "species": 7,
              "bonded": 1
            }
          },
          {
            "label": {
              "en": "N₂: a triple bond",
              "zh": "N₂：三键"
            },
            "params": {
              "species": 10,
              "bonded": 1
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
        "zh": "Na + Cl 原子",
        "en": "Na + Cl atoms"
      },
      "params": {
        "species": 0,
        "bonded": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "→ Na⁺ 和 Cl⁻",
        "en": "→ Na⁺ and Cl⁻"
      },
      "params": {
        "species": 0,
        "bonded": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "MgCl₂：两个氯",
        "en": "MgCl₂: two chlorines"
      },
      "params": {
        "species": 2,
        "bonded": 1
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "水",
        "en": "Water"
      },
      "params": {
        "species": 5,
        "bonded": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "甲烷",
        "en": "Methane"
      },
      "params": {
        "species": 7,
        "bonded": 1
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "N₂：三键",
        "en": "N₂: a triple bond"
      },
      "params": {
        "species": 10,
        "bonded": 1
      }
    }
  ]
};
