/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/10-1-water
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/10-1-water/narration';
import { equations } from '../../igcse-src/0620/10-1-water/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/10-1-water/kernel';

export const kp101Water: KnowledgePoint = {
  "id": "igcse-0620-10-1-water",
  "subject": "chemistry",
  "tier": "core",
  "title": {
    "zh": "水与化肥",
    "en": "Water and fertilisers"
  },
  "summary": {
    "zh": "四个处理阶段除去四种杂质，还剩一种。正是这个\"漏网之鱼\"，让实验化学必须使用蒸馏水。",
    "en": "Four treatment stages, four contaminants removed — and one left over. What survives all of it is why practical chemistry uses distilled water."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/10.1.1",
      "0620/10.1.2",
      "0620/10.1.3",
      "0620/10.1.4",
      "0620/10.1.5",
      "0620/10.1.6",
      "0620/10.1.7",
      "0620/10.2.1",
      "0620/10.2.2"
    ]
  },
  "keywords": {
    "zh": [
      "蒸馏水",
      "沉降",
      "氯消毒",
      "NPK 复合肥",
      "无水的"
    ],
    "en": [
      "distilled water",
      "sedimentation",
      "chlorination",
      "NPK fertiliser",
      "anhydrous"
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
          "描述用无水氯化钴与无水硫酸铜检验水。",
          "说明如何用熔点和沸点检验水的纯度。",
          "解释实验化学中为何使用蒸馏水。",
          "说明天然水中可能含有溶解物质，并区分有益与有害的。",
          "描述生活用水的处理过程。",
          "说明铵盐和硝酸盐用作化肥，并说明 NPK 复合肥。"
        ]
      },
      {
        "type": "heading",
        "text": "实验室为什么用蒸馏水"
      },
      {
        "type": "paragraph",
        "text": "再往下滑一个阶段，越过那条线。蒸馏：把水煮沸、冷凝蒸汽，溶解的盐留在烧瓶里。现在什么都不剩了。"
      },
      {
        "type": "paragraph",
        "text": "公共供水系统不会这样做——对如此大的水量来说成本太高。所以自来水中总是含有溶解物质，而这些物质会参与你的反应，破坏实验结果。"
      },
      {
        "type": "paragraph",
        "text": "这就是\"实验化学为什么用蒸馏水\"的完整答案。不是因为自来水脏——而是因为它是一种溶液，而你需要的是溶剂。"
      },
      {
        "type": "heading",
        "text": "检验水，与检验纯水"
      },
      {
        "type": "paragraph",
        "text": "两个不同的问题、两种不同的检验方法，把它们混淆是丢分的可靠方式。要证明液体*含有*水：无水氯化钴由蓝变粉，或无水硫酸铜由白变蓝。"
      },
      {
        "type": "paragraph",
        "text": "但这些检验对茶水、海水或任何含水的东西都会呈阳性。它们只说明有水存在，对纯度只字未提。"
      },
      {
        "type": "paragraph",
        "text": "要判断纯度就要看熔点和沸点。纯水在常压下恰好 0 °C 熔化、100 °C 沸腾。任何溶解物都会降低熔点、升高沸点——而且混合物是在一个温度范围内熔化，而不是在一个点。"
      },
      {
        "type": "heading",
        "text": "什么会进入水体"
      },
      {
        "type": "paragraph",
        "text": "植物需要氮来合成蛋白质，却无法利用空气中的氮。所以要以铵盐和硝酸盐的形式供给，两者都可溶——这正是它们有用的原因，也正是它们成为问题的原因。"
      },
      {
        "type": "paragraph",
        "text": "NPK 复合肥同时提供三种元素：氮促进叶片生长，磷促进根系，钾促进开花结果。这三个字母就是三个元素符号。"
      },
      {
        "type": "paragraph",
        "text": "正因为它们可溶，雨水会把它们从农田冲进河流。而一旦进入河流，水处理的任何阶段都无法再把它们除去。"
      },
      {
        "type": "formula",
        "latex": "\\text{pure water: melts at } 0\\,\\degree\\text{C, boils at } 100\\,\\degree\\text{C}",
        "caption": "在常压下恰好如此。任何溶解物都会降低熔点、升高沸点，而混合物是在一个范围内熔化。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{CoCl_2} \\text{ (blue)} + \\text{water} \\rightarrow \\text{pink}",
        "caption": "用于检验水的存在。它对这水是否纯净只字未提。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{CuSO_4} \\text{ (white)} + \\text{water} \\rightarrow \\text{blue}",
        "caption": "同一类检验，换一种盐。无水硫酸铜重新水合时变为蓝色。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "distilled water（蒸馏水）：通过蒸馏冷凝除去溶解物质的水。实验化学使用它，因为自来水是溶液而不是溶剂。",
          "sedimentation（沉降）：让水静置，使较重的悬浮固体在重力作用下沉降。不加入任何物质。",
          "chlorination（氯消毒）：加入氯以杀灭细菌。这是使水可以饮用的阶段——但可饮用不等于纯净。",
          "NPK fertiliser（NPK 复合肥）：同时提供氮、磷、钾的化肥——分别作用于叶、根，以及花和果实。",
          "anhydrous（无水的）：已除去结晶水的。无水氯化钴是蓝色的，遇水变为粉红色。"
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
          "Describe chemical tests for water using anhydrous cobalt(II) chloride and copper(II) sulfate.",
          "Describe how to test the purity of water using melting and boiling points.",
          "Explain why distilled water is used in practical chemistry.",
          "State that natural water may contain dissolved substances, and which are beneficial or harmful.",
          "Describe the treatment of the domestic water supply.",
          "State that ammonium salts and nitrates are used as fertilisers, and describe NPK fertilisers."
        ]
      },
      {
        "type": "heading",
        "text": "Why the laboratory uses distilled water"
      },
      {
        "type": "paragraph",
        "text": "Slide one stage further, past the line. Distillation: boil the water, condense the steam, and the dissolved salts stay behind in the flask. Now nothing is left."
      },
      {
        "type": "paragraph",
        "text": "No public water supply does this — it is far too expensive for the volumes involved. So tap water always has dissolved substances in it, and those substances would take part in your reactions and ruin your results."
      },
      {
        "type": "paragraph",
        "text": "That is the whole answer to \"why is distilled water used in practical chemistry\". Not because tap water is dirty — because it is a solution, and you need a solvent."
      },
      {
        "type": "heading",
        "text": "Testing for water, and for pure water"
      },
      {
        "type": "paragraph",
        "text": "Two different questions with two different tests, and mixing them up is a reliable way to lose a mark. To show a liquid *contains* water: anhydrous cobalt chloride turns from blue to pink, or anhydrous copper sulfate from white to blue."
      },
      {
        "type": "paragraph",
        "text": "But those tests will go off for tea, or seawater, or anything watery. They say water is present. They say nothing about purity."
      },
      {
        "type": "paragraph",
        "text": "For purity you need the melting and boiling points. Pure water melts at exactly zero and boils at exactly one hundred degrees at normal pressure. Anything dissolved in it lowers the melting point and raises the boiling point — and a mixture melts over a range rather than at a point."
      },
      {
        "type": "heading",
        "text": "What ends up in the water"
      },
      {
        "type": "paragraph",
        "text": "Plants need nitrogen to make protein, and they cannot use the nitrogen in the air. So it is supplied as ammonium salts and nitrates, both of which are soluble — which is exactly what makes them useful and exactly what makes them a problem."
      },
      {
        "type": "paragraph",
        "text": "An NPK fertiliser supplies three elements at once: nitrogen for leaf growth, phosphorus for roots, potassium for flowers and fruit. The three letters are the three symbols."
      },
      {
        "type": "paragraph",
        "text": "Because they dissolve, rain washes them off the fields and into rivers. And once there, no stage of water treatment takes them out again."
      },
      {
        "type": "formula",
        "latex": "\\text{pure water: melts at } 0\\,\\degree\\text{C, boils at } 100\\,\\degree\\text{C}",
        "caption": "Exactly, at normal pressure. Anything dissolved lowers the melting point and raises the boiling point, and a mixture melts over a range."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{CoCl_2} \\text{ (blue)} + \\text{water} \\rightarrow \\text{pink}",
        "caption": "Tests that water is present. It says nothing about whether that water is pure."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{CuSO_4} \\text{ (white)} + \\text{water} \\rightarrow \\text{blue}",
        "caption": "The same test with a different salt. Anhydrous copper(II) sulfate turns blue as it becomes hydrated again."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "distilled water (蒸馏水): Water with the dissolved substances removed by boiling and condensing. Used in practical chemistry because tap water is a solution, not a solvent.",
          "sedimentation (沉降): Letting water stand still so that heavy suspended solids sink under gravity. Nothing is added.",
          "chlorination (氯消毒): Adding chlorine to kill bacteria. The stage that makes water fit to drink — which is not the same as pure.",
          "NPK fertiliser (NPK 复合肥): A fertiliser supplying nitrogen, phosphorus and potassium together — for leaves, roots, and flowers and fruit.",
          "anhydrous (无水的): With the water of crystallisation removed. Anhydrous cobalt(II) chloride is blue and turns pink when it meets water."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-10-1-cp1",
      "syllabus": [
        "0620/10.1.7"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "Describe the four stages used to treat water for a domestic supply, and state what each one removes.",
      "markScheme": [
        {
          "text": "Screening: metal grids remove large debris such as sticks and leaves",
          "marks": 1
        },
        {
          "text": "Sedimentation: heavy suspended solids settle out under gravity",
          "marks": 1
        },
        {
          "text": "Filtration: sand and gravel beds trap fine suspended solids",
          "marks": 1
        },
        {
          "text": "Chlorination: chlorine is added to kill bacteria",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每个阶段都要写出名称和作用。只写\"过滤\"不得分——要说明滤层除去了上一阶段无法除去的什么。",
        "en": "Each stage needs its job as well as its name. \"Filtration\" alone is not a mark — say what the filter takes out that the previous stage could not."
      }
    },
    {
      "id": "0620-10-1-cp2",
      "syllabus": [
        "0620/10.1.1",
        "0620/10.1.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "A student has a colourless liquid. Describe how to show that it contains water, and then how to show that it is pure water.",
      "markScheme": [
        {
          "text": "Add anhydrous copper(II) sulfate: it turns from white to blue (or cobalt(II) chloride blue to pink)",
          "marks": 1
        },
        {
          "text": "Measure the boiling point: pure water boils at exactly 100 °C at normal pressure",
          "marks": 1
        },
        {
          "text": "Or measure the melting point: pure water melts at exactly 0 °C",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两个问题，两种检验。颜色变化对茶水也有效；它只说明有水，不能说明样品纯净。两问都用它只能得一分。",
        "en": "Two questions, two tests. The colour change would work on tea; it shows water is present, not that the sample is pure. Offering it for both halves scores once."
      }
    },
    {
      "id": "0620-10-1-cp3",
      "syllabus": [
        "0620/10.1.3"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Explain why distilled water, rather than tap water, is used when making up solutions in practical chemistry.",
      "markScheme": [
        {
          "text": "Tap water contains dissolved substances that treatment does not remove",
          "marks": 1
        },
        {
          "text": "These could take part in the reaction or affect the result",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "问题不在于自来水脏——它已经过滤和消毒。问题在于你需要的是溶剂，而它是一种溶液。",
        "en": "The issue is not that tap water is dirty — it has been filtered and chlorinated. It is that it is a solution when what you need is a solvent."
      }
    },
    {
      "id": "0620-10-1-cp4",
      "syllabus": [
        "0620/10.1.4",
        "0620/10.1.5",
        "0620/10.1.6"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 3,
      "stem": "Natural water contains dissolved substances. State one that is beneficial and two that are potentially harmful, giving a reason in each case.",
      "markScheme": [
        {
          "text": "Beneficial: dissolved oxygen, needed by aquatic life; or metal compounds needed by the body",
          "marks": 1
        },
        {
          "text": "Harmful: metal compounds that are toxic",
          "marks": 1
        },
        {
          "text": "Harmful: nitrates washed off farmland from fertilisers",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "注意\"金属化合物\"两边都出现——有些是人体所需，有些有毒。只写类别不够，要说明你指的是哪种作用。",
        "en": "Note that \"metal compounds\" appears on both lists — some are needed and some are toxic. Naming the category is not enough; say which effect you mean."
      }
    },
    {
      "id": "0620-10-1-cp5",
      "syllabus": [
        "0620/10.2.1",
        "0620/10.2.2"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 3,
      "stem": "State the three elements supplied by an NPK fertiliser and what each is needed for, and name one type of compound used to supply nitrogen.",
      "markScheme": [
        {
          "text": "Nitrogen for leaf growth, phosphorus for roots, potassium for flowers and fruit",
          "marks": 1
        },
        {
          "text": "Ammonium salts or nitrates supply the nitrogen",
          "marks": 1
        },
        {
          "text": "Both are soluble, so plants can take them up through their roots",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "选择这类化合物的关键就是可溶性——植物无法吸收的肥料毫无用处。这也正是化肥会被冲入河流的原因。",
        "en": "Solubility is the point of the compound choice — a fertiliser a plant cannot absorb is useless. It is also why fertilisers wash into rivers."
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
          "zh": "已完成的处理阶段",
          "en": "Treatment stages carried out"
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
        "primitive": "ladder",
        "kernel": "10-1-water",
        "hint": {
          "en": "Advance the stages one at a time and watch the contaminant count fall. Note where it stops for a public supply.",
          "zh": "逐个推进处理阶段，看杂质计数下降。注意公共供水在哪一步就停止了。"
        },
        "params": [
          {
            "key": "stage",
            "label": {
              "en": "Treatment stages carried out",
              "zh": "已完成的处理阶段"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0
          }
        ],
        "readouts": [
          {
            "key": "contaminantsRemaining",
            "label": {
              "en": "Contaminants left",
              "zh": "剩余杂质数"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "contaminantsRemoved",
            "label": {
              "en": "Contaminants removed",
              "zh": "已除去的杂质数"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "fitToDrink",
            "label": {
              "en": "Fit to drink? (1 = yes)",
              "zh": "可否饮用？（1 = 是）"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "stagesDone",
            "label": {
              "en": "Stages carried out",
              "zh": "已完成阶段数"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Untreated river water",
              "zh": "未处理的河水"
            },
            "params": {
              "stage": 0
            }
          },
          {
            "label": {
              "en": "After filtration: looks clean",
              "zh": "过滤后：看起来干净"
            },
            "params": {
              "stage": 3
            }
          },
          {
            "label": {
              "en": "After chlorination: safe",
              "zh": "氯消毒后：安全"
            },
            "params": {
              "stage": 4
            }
          },
          {
            "label": {
              "en": "Distilled: actually pure",
              "zh": "蒸馏后：真正纯净"
            },
            "params": {
              "stage": 5
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
        "zh": "未处理的河水",
        "en": "Untreated river water"
      },
      "params": {
        "stage": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "过滤后：看起来干净",
        "en": "After filtration: looks clean"
      },
      "params": {
        "stage": 3
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "氯消毒后：安全",
        "en": "After chlorination: safe"
      },
      "params": {
        "stage": 4
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "蒸馏后：真正纯净",
        "en": "Distilled: actually pure"
      },
      "params": {
        "stage": 5
      }
    }
  ]
};
