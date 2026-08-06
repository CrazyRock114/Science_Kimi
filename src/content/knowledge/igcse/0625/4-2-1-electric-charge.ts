/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-2-1-electric-charge
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/4-2-1-electric-charge/narration';
import { equations } from '../../igcse-src/0625/4-2-1-electric-charge/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/4-2-1-electric-charge/kernel';

export const kp421ElectricCharge: KnowledgePoint = {
  "id": "igcse-0625-4-2-1-electric-charge",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "电荷与电场",
    "en": "Electric charge and electric fields"
  },
  "summary": {
    "zh": "起电就是电子转移，仅此而已。再描绘点电荷、带电球以及平行板之间匀强电场的分布。",
    "en": "Charging is electron transfer, nothing else. Then trace the field around a charge, a sphere, and the uniform field between parallel plates."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/4.2.1.1",
      "0625/4.2.1.2",
      "0625/4.2.1.3",
      "0625/4.2.1.4",
      "0625/4.2.1.5",
      "0625/4.2.1.6",
      "0625/4.2.1.7",
      "0625/4.2.1.8",
      "0625/4.2.1.9",
      "0625/4.2.1.10"
    ]
  },
  "keywords": {
    "zh": [
      "静电荷",
      "电场",
      "匀强电场",
      "库仑",
      "导体",
      "绝缘体"
    ],
    "en": [
      "electrostatic charge",
      "electric field",
      "uniform field",
      "coulomb",
      "conductor",
      "insulator"
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
          "说明电荷有正负两种。",
          "说明同种电荷相斥、异种相吸。",
          "描述产生与检验静电荷的实验。",
          "把摩擦起电解释为只转移电子。",
          "描述区分导体与绝缘体的实验。",
          "用简单电子模型解释导体与绝缘体。",
          "说明电荷单位是库仑。（Extended）",
          "把电场描述为电荷受力的区域。（Extended）",
          "说明电场方向是正电荷受力的方向。（Extended）",
          "描述点电荷、带电球以及平行板之间的电场分布。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "场是受力的区域"
      },
      {
        "type": "paragraph",
        "text": "电场是电荷会受力的区域。我们用电场线表示它，方向定义为正电荷所受的力——所以电场线从正电荷指出、指向负电荷。"
      },
      {
        "type": "paragraph",
        "text": "注意电场线离电荷越远越分散。这种分散表示场在减弱——和磁感线的约定完全一样。"
      },
      {
        "type": "heading",
        "text": "平行板产生匀强电场"
      },
      {
        "type": "paragraph",
        "text": "这是最重要的装置。两块平行板，一正一负。它们之间的电场线是直的、平行的、间距均匀的。"
      },
      {
        "type": "paragraph",
        "text": "间距均匀意味着两板之间各处场强相同。这就是匀强电场，读数也证实了这一点——中心与偏侧的场强一致。"
      },
      {
        "type": "paragraph",
        "text": "不过看最边缘，电场线向外鼓出。这是边缘效应，也是考纲说明不考端部效应的原因——匀强的结论只在内部成立。"
      },
      {
        "type": "formula",
        "latex": "\\text{field direction} = \\text{force on a } +\\text{ charge}",
        "caption": "电场线从正电荷指出、指向负电荷。这是定义，不是公式。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "electrostatic charge（静电荷）：停留在绝缘体上而不流走的电荷，由电子转移产生。",
          "electric field（电场）：电荷在其中受到力的区域。",
          "uniform field（匀强电场）：各处强度与方向都相同的电场，画成直的、平行的、等间距的线。存在于平行板之间。",
          "coulomb（库仑）：电荷的单位，符号 C。",
          "conductor（导体）：内部有可自由移动电子的材料，电荷能在其中流动。",
          "insulator（绝缘体）：没有自由电子的材料，电荷停留在原处。"
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
          "State that there are positive and negative charges.",
          "State that like charges repel and unlike charges attract.",
          "Describe experiments producing and detecting electrostatic charge.",
          "Explain charging by friction as a transfer of electrons only.",
          "Describe an experiment distinguishing conductors from insulators.",
          "Use a simple electron model to explain conductors and insulators.",
          "State that charge is measured in coulombs. (Extended)",
          "Describe an electric field as a region where a charge experiences a force. (Extended)",
          "State that field direction is the force on a positive charge. (Extended)",
          "Describe the field patterns around a point charge, a charged sphere and between parallel plates. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "A field is a region of force"
      },
      {
        "type": "paragraph",
        "text": "An electric field is a region where a charge feels a force. We draw it with field lines, and the direction is defined as the force on a *positive* charge — so the lines point away from positive and towards negative."
      },
      {
        "type": "paragraph",
        "text": "Look how the lines spread apart as they get further from the charge. That spreading is the field getting weaker — exactly the same convention as magnetic field lines."
      },
      {
        "type": "heading",
        "text": "Parallel plates make it uniform"
      },
      {
        "type": "paragraph",
        "text": "Here is the arrangement that matters most. Two parallel plates, one positive and one negative. Between them the lines are straight, parallel and evenly spaced."
      },
      {
        "type": "paragraph",
        "text": "Evenly spaced means the field has the same strength everywhere between them. That is a uniform field, and the readings confirm it — the strength at the centre and off to one side agree."
      },
      {
        "type": "paragraph",
        "text": "Look at the very edges, though, where the lines bulge outwards. That is fringing, and it is why the syllabus says end effects will not be examined — the uniform result only holds well inside."
      },
      {
        "type": "formula",
        "latex": "\\text{field direction} = \\text{force on a } +\\text{ charge}",
        "caption": "Field lines point away from positive charge and towards negative charge. This is a definition, not a formula."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "electrostatic charge (静电荷): Charge that stays on an insulator rather than flowing away. Produced by transferring electrons.",
          "electric field (电场): A region in which an electric charge experiences a force.",
          "uniform field (匀强电场): A field of the same strength and direction everywhere — drawn as straight, parallel, evenly spaced lines. Found between parallel plates.",
          "coulomb (库仑): The unit of electric charge, symbol C.",
          "conductor (导体): A material with free electrons that can move through it, so charge flows.",
          "insulator (绝缘体): A material with no free electrons, so charge stays where it is put."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "4-2-1-cp1",
      "syllabus": [
        "0625/4.2.1.4"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A polythene rod becomes negatively charged when it is rubbed with a dry cloth. Explain how this happens.",
      "markScheme": [
        {
          "text": "Electrons are transferred from the cloth to the rod",
          "marks": 1
        },
        {
          "text": "The rod gains electrons, so it becomes negatively charged",
          "marks": 1
        },
        {
          "text": "The cloth loses electrons, so it is left positively charged",
          "marks": 1,
          "alternatives": [
            "equal and opposite charge on the cloth"
          ]
        }
      ],
      "examinerNote": {
        "zh": "只有电子会移动。写\"正电荷转移到布上\"是错的——质子被束缚在原子核中，摩擦不会使其转移。",
        "en": "Only electrons move. Writing that \"positive charge moves to the cloth\" is wrong — protons are bound in nuclei and never transfer by rubbing."
      }
    },
    {
      "id": "4-2-1-cp2",
      "syllabus": [
        "0625/4.2.1.9"
      ],
      "tier": "supplement",
      "commandWord": "State",
      "marks": 1,
      "stem": "State the direction of the electric field at a point.",
      "options": [
        "The direction of the force on a positive charge placed at that point",
        "The direction of the force on a negative charge placed at that point",
        "The direction from negative to positive",
        "The direction in which the field is strongest"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "The direction of the force on a positive charge at that point",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "约定用正试探电荷，所以电场线从正电荷发出、进入负电荷。负电荷受力方向相反。",
        "en": "The convention uses a positive test charge, so lines leave positive charges and enter negative ones. A negative charge feels a force the opposite way."
      }
    },
    {
      "id": "4-2-1-cp3",
      "syllabus": [
        "0625/4.2.1.10"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe the electric field between two oppositely charged parallel plates. Ignore end effects.",
      "markScheme": [
        {
          "text": "The field lines are straight and parallel",
          "marks": 1
        },
        {
          "text": "They are evenly spaced, showing a uniform field of constant strength",
          "marks": 1
        },
        {
          "text": "They run from the positive plate to the negative plate",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "三个特征都要写：直、等间距、有方向。只写\"匀强\"没有描述出图形。",
        "en": "All three features are needed: straight, evenly spaced, and directed. \"Uniform\" on its own does not describe the pattern."
      }
    },
    {
      "id": "4-2-1-cp4",
      "syllabus": [
        "0625/4.2.1.6"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Explain, in terms of electrons, why copper is a good electrical conductor but polythene is not.",
      "markScheme": [
        {
          "text": "Copper has free (delocalised) electrons that can move through it",
          "marks": 1
        },
        {
          "text": "Polythene has no free electrons, so charge cannot flow through it",
          "marks": 1,
          "alternatives": [
            "its electrons are bound to atoms"
          ]
        }
      ],
      "examinerNote": {
        "zh": "关键在\"自由\"二字。两种材料都含有电子，区别在于电子能否移动。",
        "en": "The word \"free\" is doing the work. Both materials contain electrons — the difference is whether those electrons can move."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "setup",
        "label": {
          "zh": "装置",
          "en": "Arrangement"
        },
        "min": 0,
        "max": 3,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "lineCount",
        "label": {
          "zh": "电场线数量",
          "en": "Number of field lines"
        },
        "min": 4,
        "max": 16,
        "step": 1,
        "defaultValue": 10,
        "unit": ""
      },
      {
        "key": "charge",
        "label": {
          "zh": "电荷量",
          "en": "Charge"
        },
        "min": 0.5,
        "max": 2,
        "step": 0.1,
        "defaultValue": 1,
        "unit": "× reference"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "field2d",
        "variant": "electric",
        "kernel": "4-2-1-electric-charge",
        "hint": {
          "en": "Try parallel plates — the lines go straight and evenly spaced, except at the edges.",
          "zh": "试试平行板——除边缘外，电场线笔直且等间距。"
        },
        "params": [
          {
            "key": "setup",
            "label": {
              "en": "Arrangement",
              "zh": "装置"
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
                  "en": "Point charge",
                  "zh": "点电荷"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Charged sphere",
                  "zh": "带电球"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Unlike pair",
                  "zh": "异种电荷"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Parallel plates",
                  "zh": "平行板"
                }
              }
            ]
          },
          {
            "key": "lineCount",
            "label": {
              "en": "Number of field lines",
              "zh": "电场线数量"
            },
            "unit": "",
            "min": 4,
            "max": 16,
            "step": 1,
            "default": 10
          },
          {
            "key": "charge",
            "label": {
              "en": "Charge",
              "zh": "电荷量"
            },
            "unit": "× reference",
            "symbol": "Q",
            "min": 0.5,
            "max": 2,
            "step": 0.1,
            "default": 1
          }
        ],
        "readouts": [
          {
            "key": "strengthNear",
            "label": {
              "en": "Field at the centre",
              "zh": "中心处场强"
            },
            "unit": "(rel.)",
            "sigFigs": 3
          },
          {
            "key": "strengthFar",
            "label": {
              "en": "Field further out",
              "zh": "外侧场强"
            },
            "unit": "(rel.)",
            "sigFigs": 3
          },
          {
            "key": "ratio",
            "label": {
              "en": "Centre ÷ outer",
              "zh": "中心 ÷ 外侧"
            },
            "unit": "×",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Point charge",
              "zh": "点电荷"
            },
            "params": {
              "setup": 0,
              "lineCount": 10,
              "charge": 1
            }
          },
          {
            "label": {
              "en": "Charged sphere",
              "zh": "带电球"
            },
            "params": {
              "setup": 1,
              "lineCount": 10,
              "charge": 1
            }
          },
          {
            "label": {
              "en": "Unlike charges",
              "zh": "异种电荷"
            },
            "params": {
              "setup": 2,
              "lineCount": 10,
              "charge": 1
            }
          },
          {
            "label": {
              "en": "Parallel plates",
              "zh": "平行板"
            },
            "params": {
              "setup": 3,
              "lineCount": 10,
              "charge": 1
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
        "zh": "点电荷",
        "en": "Point charge"
      },
      "params": {
        "setup": 0,
        "lineCount": 10,
        "charge": 1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "带电球",
        "en": "Charged sphere"
      },
      "params": {
        "setup": 1,
        "lineCount": 10,
        "charge": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "异种电荷",
        "en": "Unlike charges"
      },
      "params": {
        "setup": 2,
        "lineCount": 10,
        "charge": 1
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "平行板",
        "en": "Parallel plates"
      },
      "params": {
        "setup": 3,
        "lineCount": 10,
        "charge": 1
      }
    }
  ]
};
