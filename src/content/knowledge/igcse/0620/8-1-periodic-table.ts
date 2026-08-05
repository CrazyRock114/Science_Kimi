/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/8-1-periodic-table
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/8-1-periodic-table/narration';
import { equations } from '../../igcse-src/0620/8-1-periodic-table/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/8-1-periodic-table/kernel';

export const kp81PeriodicTable: KnowledgePoint = {
  "id": "igcse-0620-8-1-periodic-table",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "元素周期表",
    "en": "The Periodic Table"
  },
  "summary": {
    "zh": "它不是用来查阅的表格，而是一幅电子排布图。周期数是电子层数，族数是最外层电子数。",
    "en": "Not a chart to look things up in — a picture of how electrons are arranged. Period is the number of shells, group is the number of outer electrons."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/8.1.1",
      "0620/8.1.2",
      "0620/8.1.3",
      "0620/8.1.4",
      "0620/8.1.5",
      "0620/8.1.6",
      "0620/8.4.1",
      "0620/8.4.2",
      "0620/8.5.1",
      "0620/8.5.2"
    ]
  },
  "keywords": {
    "zh": [
      "族",
      "周期",
      "过渡元素",
      "稀有气体",
      "单原子"
    ],
    "en": [
      "group",
      "period",
      "transition element",
      "noble gas",
      "monatomic"
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
          "把周期表描述为按质子数排列的元素表。",
          "描述同周期从金属性到非金属性的变化。",
          "把族数与所形成离子的电荷联系起来。",
          "用最外层电子解释同族元素性质的相似性。",
          "解释在周期表中的位置与电子排布的关系。",
          "描述过渡元素及其与第 I 主族金属的区别。",
          "解释稀有气体为何不活泼且以单原子形式存在。"
        ]
      },
      {
        "type": "paragraph",
        "text": "它不是用来查阅的表格，而是一幅电子排布图。周期数是电子层数，族数是最外层电子数。"
      },
      {
        "type": "formula",
        "latex": "\\text{period} = \\text{number of occupied shells}",
        "caption": "每当一层填满，就开始新的一行。这就是各行位置的唯一原因。"
      },
      {
        "type": "formula",
        "latex": "\\text{group} = \\text{number of outer-shell electrons}",
        "caption": "对主族成立。氦是例外：它的电子层填满两个就满了，所以它位于第 VIII 主族。"
      },
      {
        "type": "formula",
        "latex": "\\text{ionic charge} = \\text{group} \\text{ or } \\text{group} - 8",
        "caption": "第 I 至 III 主族失去电子，第 V 至 VII 主族得到电子。总是移动较少的那一边。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "group（族）：周期表中的一列。同族元素最外层电子数相同，因此性质相似。",
          "period（周期）：周期表中的一行。同周期元素的已占据电子层数相同。",
          "transition element（过渡元素）：中间区块的金属：密度大、硬度高，形成有色化合物，具有可变氧化数，可作催化剂。",
          "noble gas（稀有气体）：第 VIII 主族元素，最外层已填满。不活泼，且为单原子——以单个原子而非分子形式存在。",
          "monatomic（单原子）：以单个、独立的原子存在。稀有气体连与自身成键的理由都没有。"
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
          "Describe the Periodic Table as an arrangement of elements in order of proton number.",
          "Describe the change from metallic to non-metallic character across a period.",
          "Relate group number to the charge on the ions formed.",
          "Explain similarities within a group in terms of outer-shell electrons.",
          "Explain how position in the Periodic Table relates to electronic configuration.",
          "Describe the transition elements and what makes them different from Group I metals.",
          "Explain why the noble gases are unreactive and monatomic."
        ]
      },
      {
        "type": "paragraph",
        "text": "Not a chart to look things up in — a picture of how electrons are arranged. Period is the number of shells, group is the number of outer electrons."
      },
      {
        "type": "formula",
        "latex": "\\text{period} = \\text{number of occupied shells}",
        "caption": "A new row starts whenever a shell fills. That is the only reason the rows are where they are."
      },
      {
        "type": "formula",
        "latex": "\\text{group} = \\text{number of outer-shell electrons}",
        "caption": "True for the main groups. Helium is the exception: its shell is full at two, which is why it sits in Group VIII."
      },
      {
        "type": "formula",
        "latex": "\\text{ionic charge} = \\text{group} \\text{ or } \\text{group} - 8",
        "caption": "Groups I to III lose electrons; groups V to VII gain them. Whichever is fewer moves."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "group (族): A column of the table. Its members have the same number of outer-shell electrons, which is why they react alike.",
          "period (周期): A row of the table. Its members have the same number of occupied electron shells.",
          "transition element (过渡元素): A metal from the middle block: dense and hard, forms coloured compounds, has variable oxidation numbers, and acts as a catalyst.",
          "noble gas (稀有气体): A Group VIII element with a full outer shell. Unreactive, and monatomic — it exists as single atoms rather than molecules.",
          "monatomic (单原子): Existing as single, separate atoms. A noble gas has no reason to bond even to itself."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-8-1-cp1",
      "syllabus": [
        "0620/8.1.5"
      ],
      "tier": "core",
      "commandWord": "Deduce",
      "marks": 2,
      "stem": "An element has the electronic configuration 2,8,6. Deduce its group and period, and name the element.",
      "markScheme": [
        {
          "text": "Group VI, Period 3",
          "marks": 1
        },
        {
          "text": "Sulfur",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "数一共几个数字得到周期，看最后一个数字得到族。三个数字表示三层；最后是 6，所以是第 VI 主族。再算 2 + 8 + 6 = 16，即 16 号元素。",
        "en": "Count the numbers for the period and read the last one for the group. Three numbers means three shells; the last is 6, so Group VI. Then count 2 + 8 + 6 = 16 protons."
      }
    },
    {
      "id": "0620-8-1-cp2",
      "syllabus": [
        "0620/8.1.4"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Lithium, sodium and potassium have very similar chemical reactions. Explain why.",
      "markScheme": [
        {
          "text": "They are all in Group I, so each has one electron in its outer shell",
          "marks": 1
        },
        {
          "text": "Chemical properties are determined by the number of outer-shell electrons",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "写\"它们在同一族\"只是把问题重复了一遍。得分点在于说明同族*为什么*重要——最外层电子数相同，而这决定了化学性质。",
        "en": "\"They are in the same group\" repeats the question back. The mark is for saying *why* being in the same group matters — same outer-shell count, and that is what decides chemistry."
      }
    },
    {
      "id": "0620-8-1-cp3",
      "syllabus": [
        "0620/8.1.3"
      ],
      "tier": "core",
      "commandWord": "Predict",
      "marks": 1,
      "stem": "Strontium is in Group II. Predict the charge on a strontium ion.",
      "options": [
        "2+",
        "2−",
        "6−",
        "2"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "2+",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "第 II 主族意味着最外层有两个电子。失去两个比得到六个容易得多，所以形成 2+ 离子。金属总是形成正离子。",
        "en": "Group II means two outer electrons. Losing two is far easier than gaining six, so it forms a 2+ ion. Metals always form positive ions."
      }
    },
    {
      "id": "0620-8-1-cp4",
      "syllabus": [
        "0620/8.4.1",
        "0620/8.4.2"
      ],
      "tier": "supplement",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Compare the properties of iron, a transition element, with those of potassium, a Group I metal. Give three differences.",
      "markScheme": [
        {
          "text": "Iron is harder and denser, and has a higher melting point, than potassium",
          "marks": 1
        },
        {
          "text": "Iron forms coloured compounds; potassium compounds are white",
          "marks": 1
        },
        {
          "text": "Iron has variable oxidation numbers and acts as a catalyst; potassium is always 1+ and does not",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每一点都要写出两种金属。只写\"铁形成有色化合物\"只是半个比较——补上钾的情况才能拿稳这一分。",
        "en": "Each point needs both metals. \"Iron forms coloured compounds\" is half a comparison — add what potassium does instead and the mark is secure."
      }
    },
    {
      "id": "0620-8-1-cp5",
      "syllabus": [
        "0620/8.5.1",
        "0620/8.5.2"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Argon is used to fill the space inside a light bulb. Explain, in terms of electronic structure, why it is suitable.",
      "markScheme": [
        {
          "text": "Argon has a full outer shell of electrons",
          "marks": 1
        },
        {
          "text": "so it does not need to lose, gain or share electrons and is unreactive — it will not react with the hot filament",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "写\"它是稀有气体\"或\"它不活泼\"只是复述现象。题目说了 \"in terms of electronic structure\"，所以答案里必须出现\"最外层已填满\"。",
        "en": "\"It is a noble gas\" or \"it is unreactive\" restates the observation. The question says \"in terms of electronic structure\", so the full outer shell has to appear in the answer."
      }
    },
    {
      "id": "0620-8-1-cp6",
      "syllabus": [
        "0620/8.1.2",
        "0620/8.1.6"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 2,
      "stem": "Describe how the character of the elements changes across Period 3, from sodium to argon.",
      "markScheme": [
        {
          "text": "The elements change from metallic on the left to non-metallic on the right",
          "marks": 1
        },
        {
          "text": "The change is gradual, with silicon on the borderline having properties of both",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要写明这是渐变。把它描述成金属与非金属之间的一条明确分界线，正是第二个得分点要检验的错误。",
        "en": "Say the change is gradual. Describing it as a sharp line between metals and non-metals is what the second mark is testing against."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "protonNumber",
        "label": {
          "zh": "质子数",
          "en": "Proton number"
        },
        "min": 1,
        "max": 36,
        "step": 1,
        "defaultValue": 11,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "periodictable",
        "kernel": "8-1-periodic-table",
        "hint": {
          "en": "Slide the proton number and watch the highlight walk across a period, then drop to the start of the next as a shell fills.",
          "zh": "拖动质子数，看高亮沿周期横向移动，然后在一层填满时落到下一行的开头。"
        },
        "params": [
          {
            "key": "protonNumber",
            "label": {
              "en": "Proton number",
              "zh": "质子数"
            },
            "unit": "",
            "symbol": "Z",
            "min": 1,
            "max": 36,
            "step": 1,
            "default": 11
          }
        ],
        "readouts": [
          {
            "key": "protonNumber",
            "label": {
              "en": "Proton number",
              "zh": "质子数"
            },
            "unit": "",
            "symbol": "Z",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "group",
            "label": {
              "en": "Group (0 = transition)",
              "zh": "族（0 = 过渡元素）"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "period",
            "label": {
              "en": "Period",
              "zh": "周期"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "ionCharge",
            "label": {
              "en": "Charge on its ion",
              "zh": "离子电荷"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Sodium: Group I",
              "zh": "钠：第 I 主族"
            },
            "params": {
              "protonNumber": 11
            }
          },
          {
            "label": {
              "en": "Chlorine: Group VII",
              "zh": "氯：第 VII 主族"
            },
            "params": {
              "protonNumber": 17
            }
          },
          {
            "label": {
              "en": "Argon: full shell",
              "zh": "氩：满壳层"
            },
            "params": {
              "protonNumber": 18
            }
          },
          {
            "label": {
              "en": "Silicon: the borderline",
              "zh": "硅：分界处"
            },
            "params": {
              "protonNumber": 14
            }
          },
          {
            "label": {
              "en": "Iron: transition block",
              "zh": "铁：过渡元素区"
            },
            "params": {
              "protonNumber": 26
            }
          },
          {
            "label": {
              "en": "Potassium: a new shell",
              "zh": "钾：新的一层"
            },
            "params": {
              "protonNumber": 19
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
        "zh": "钠：第 I 主族",
        "en": "Sodium: Group I"
      },
      "params": {
        "protonNumber": 11
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "氯：第 VII 主族",
        "en": "Chlorine: Group VII"
      },
      "params": {
        "protonNumber": 17
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "氩：满壳层",
        "en": "Argon: full shell"
      },
      "params": {
        "protonNumber": 18
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "硅：分界处",
        "en": "Silicon: the borderline"
      },
      "params": {
        "protonNumber": 14
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "铁：过渡元素区",
        "en": "Iron: transition block"
      },
      "params": {
        "protonNumber": 26
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "钾：新的一层",
        "en": "Potassium: a new shell"
      },
      "params": {
        "protonNumber": 19
      }
    }
  ]
};
