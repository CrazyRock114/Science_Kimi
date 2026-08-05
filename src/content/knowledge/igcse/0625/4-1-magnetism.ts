/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-1-magnetism
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/4-1-magnetism/narration';
import { equations } from '../../igcse-src/0625/4-1-magnetism/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/4-1-magnetism/kernel';

export const kp41Magnetism: KnowledgePoint = {
  "id": "igcse-0625-4-1-magnetism",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "磁场",
    "en": "Magnetic fields"
  },
  "summary": {
    "zh": "描绘磁体周围、磁极之间以及电流周围的真实磁感线。线的疏密代表强弱——因为这些线是由磁场本身算出来的。",
    "en": "Trace real field lines around magnets, between poles, and around a current. Line spacing shows strength, because the lines are computed from the field itself."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/4.1.1",
      "0625/4.1.2",
      "0625/4.1.3",
      "0625/4.1.4",
      "0625/4.1.5",
      "0625/4.1.6",
      "0625/4.1.7",
      "0625/4.1.8",
      "0625/4.1.9",
      "0625/4.1.10",
      "0625/4.1.11",
      "0625/4.5.3.1"
    ]
  },
  "keywords": {
    "zh": [
      "磁场",
      "磁感线",
      "磁化",
      "永磁体",
      "电磁铁",
      "中性点",
      "螺线管"
    ],
    "en": [
      "magnetic field",
      "field line",
      "induced magnetism",
      "permanent magnet",
      "electromagnet",
      "neutral point",
      "solenoid"
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
          "描述磁极之间以及磁体与磁性材料之间的作用力。",
          "描述磁化。",
          "说出软铁临时磁体与钢永磁体的区别。",
          "说出磁性与非磁性材料的区别。",
          "把磁场描述为磁极受力的区域。",
          "画出条形磁铁周围磁感线的形状与方向。",
          "说明磁场方向是北极受力的方向。",
          "描述用小磁针或铁屑描绘磁感线。",
          "说明永磁体与电磁铁的用途。",
          "知道磁感线疏密表示磁场相对强弱。（Extended）",
          "描述直导线与螺线管中电流产生的磁场分布。"
        ]
      },
      {
        "type": "paragraph",
        "text": "描绘磁体周围、磁极之间以及电流周围的真实磁感线。线的疏密代表强弱——因为这些线是由磁场本身算出来的。"
      },
      {
        "type": "formula",
        "latex": "\\text{field strength} \\propto \\text{line density}",
        "caption": "磁感线越密，磁场越强。这是关于画法的规则，不是用来代入的公式。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "magnetic field（磁场）：磁极在其中会受到力的区域。",
          "field line（磁感线）：表示北极受力方向的线。磁感线永不相交，其疏密表示磁场强弱。",
          "induced magnetism（磁化）：磁性材料置于磁场中而变成磁体。",
          "permanent magnet（永磁体）：由钢等硬磁材料制成。难以磁化，但能长期保持磁性。",
          "electromagnet（电磁铁）：通常带软铁芯的螺线管。磁性可以通断，强度也可调节。",
          "neutral point（中性点）：两个磁场恰好抵消、合磁场为零的点。",
          "solenoid（螺线管）：绕成螺旋的导线。通电时内部磁场近乎均匀，外部像条形磁铁。"
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
          "Describe the forces between poles, and between magnets and magnetic materials.",
          "Describe induced magnetism.",
          "State the differences between temporary (soft iron) and permanent (steel) magnets.",
          "State the difference between magnetic and non-magnetic materials.",
          "Describe a magnetic field as a region where a magnetic pole experiences a force.",
          "Draw the pattern and direction of field lines around a bar magnet.",
          "State that field direction is the direction of the force on a north pole.",
          "Describe plotting field lines with a compass or iron filings.",
          "Describe uses of permanent magnets and electromagnets.",
          "Know that field line spacing represents relative field strength. (Extended)",
          "Describe the field pattern due to a current in a straight wire and in a solenoid."
        ]
      },
      {
        "type": "paragraph",
        "text": "Trace real field lines around magnets, between poles, and around a current. Line spacing shows strength, because the lines are computed from the field itself."
      },
      {
        "type": "formula",
        "latex": "\\text{field strength} \\propto \\text{line density}",
        "caption": "The closer the field lines, the stronger the field. This is a rule about the drawing, not a formula to substitute into."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "magnetic field (磁场): A region in which a magnetic pole experiences a force.",
          "field line (磁感线): A line showing the direction a north pole would be pushed. Lines never cross, and their spacing shows the field strength.",
          "induced magnetism (磁化): A magnetic material becoming a magnet when placed in a magnetic field.",
          "permanent magnet (永磁体): Made of a hard magnetic material such as steel. Hard to magnetise, but keeps its magnetism.",
          "electromagnet (电磁铁): A solenoid, usually with a soft iron core. Its magnetism can be switched on and off and its strength varied.",
          "neutral point (中性点): A point where two fields cancel exactly, so the resultant field is zero.",
          "solenoid (螺线管): A coil of wire. Carrying a current it has a nearly uniform field inside and a bar-magnet field outside."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "4-1-cp1",
      "syllabus": [
        "0625/4.1.7"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 1,
      "stem": "State what the direction of a magnetic field at a point means.",
      "options": [
        "The direction of the force on a north pole placed at that point",
        "The direction of the force on a south pole placed at that point",
        "The direction from the south pole to the north pole inside the magnet",
        "The direction in which the field is strongest"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "The direction of the force on a north pole at that point",
          "marks": 1,
          "alternatives": [
            "the way a compass needle points"
          ]
        }
      ],
      "examinerNote": {
        "zh": "在磁体外部磁感线从 N 到 S；磁体内部方向相反，但 0625 只考外部磁场。",
        "en": "Outside a magnet the lines run from N to S. Inside the magnet they run the other way, but 0625 only asks about the external field."
      }
    },
    {
      "id": "4-1-cp2",
      "syllabus": [
        "0625/4.1.11"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "On a field diagram, the lines near the poles of a bar magnet are drawn much closer together than the lines further from the magnet. Explain what this shows.",
      "markScheme": [
        {
          "text": "The field is stronger where the lines are closer together",
          "marks": 1
        },
        {
          "text": "So the field is strongest near the poles and gets weaker with distance from the magnet",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "线的疏密是定量信息，不是随意画的。把条形磁铁周围的磁感线画成均匀间距会被判错。",
        "en": "Line spacing is quantitative information, not artistic licence. Evenly spaced lines around a bar magnet would be marked wrong."
      }
    },
    {
      "id": "4-1-cp3",
      "syllabus": [
        "0625/4.1.3"
      ],
      "tier": "core",
      "commandWord": "Compare",
      "marks": 2,
      "stem": "Compare the magnetic properties of soft iron with those of steel, and state which is used for the core of an electromagnet.",
      "markScheme": [
        {
          "text": "Soft iron is easy to magnetise and easily loses its magnetism, whereas steel is harder to magnetise but retains it",
          "marks": 1
        },
        {
          "text": "Soft iron is used for the core of an electromagnet",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "选软铁的原因是电磁铁必须在断电瞬间失去磁性——否则就无法\"关掉\"。",
        "en": "The reason soft iron is chosen is that the electromagnet must lose its magnetism the moment the current stops — otherwise it could not be switched off."
      }
    },
    {
      "id": "4-1-cp4",
      "syllabus": [
        "0625/4.5.3.1"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 2,
      "stem": "Describe the pattern of the magnetic field around a long straight wire carrying a current.",
      "markScheme": [
        {
          "text": "Concentric circles centred on the wire, in a plane at right angles to it",
          "marks": 1
        },
        {
          "text": "The circles are closer together near the wire, showing a stronger field there",
          "marks": 1,
          "alternatives": [
            "field decreases with distance from the wire"
          ]
        }
      ],
      "examinerNote": {
        "zh": "电流反向，磁场方向也反向。用右手螺旋定则判断方向：拇指指电流，四指弯曲方向即磁场方向。",
        "en": "Reversing the current reverses the field direction. The right-hand grip rule gives the direction: thumb along the current, fingers curl the way the field runs."
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
        "max": 4,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "lineCount",
        "label": {
          "zh": "磁感线数量",
          "en": "Number of field lines"
        },
        "min": 4,
        "max": 14,
        "step": 1,
        "defaultValue": 8,
        "unit": ""
      },
      {
        "key": "strength",
        "label": {
          "zh": "源强度",
          "en": "Source strength"
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
        "kernel": "4-1-magnetism",
        "hint": {
          "en": "Try two like poles — watch the lines refuse to cross, and find the neutral point between them.",
          "zh": "试试两个同名磁极——注意磁感线绝不相交，并找出它们之间的中性点。"
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
            "max": 4,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Bar magnet",
                  "zh": "条形磁铁"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "N facing N",
                  "zh": "N 对 N"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "N facing S",
                  "zh": "N 对 S"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Straight wire",
                  "zh": "直导线"
                }
              },
              {
                "value": 4,
                "label": {
                  "en": "Solenoid",
                  "zh": "螺线管"
                }
              }
            ]
          },
          {
            "key": "lineCount",
            "label": {
              "en": "Number of field lines",
              "zh": "磁感线数量"
            },
            "unit": "",
            "min": 4,
            "max": 14,
            "step": 1,
            "default": 8
          },
          {
            "key": "strength",
            "label": {
              "en": "Source strength",
              "zh": "源强度"
            },
            "unit": "× reference",
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
              "en": "Field near a pole",
              "zh": "靠近磁极处磁场"
            },
            "unit": "(rel.)",
            "sigFigs": 3
          },
          {
            "key": "strengthFar",
            "label": {
              "en": "Field far away",
              "zh": "远处磁场"
            },
            "unit": "(rel.)",
            "sigFigs": 3
          },
          {
            "key": "ratio",
            "label": {
              "en": "Near ÷ far",
              "zh": "近处 ÷ 远处"
            },
            "unit": "×",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Bar magnet",
              "zh": "条形磁铁"
            },
            "params": {
              "setup": 0,
              "lineCount": 8,
              "strength": 1
            }
          },
          {
            "label": {
              "en": "Like poles repel",
              "zh": "同极相斥"
            },
            "params": {
              "setup": 1,
              "lineCount": 8,
              "strength": 1
            }
          },
          {
            "label": {
              "en": "Unlike poles attract",
              "zh": "异极相吸"
            },
            "params": {
              "setup": 2,
              "lineCount": 8,
              "strength": 1
            }
          },
          {
            "label": {
              "en": "Current in a wire",
              "zh": "导线中的电流"
            },
            "params": {
              "setup": 3,
              "lineCount": 5,
              "strength": 1
            }
          },
          {
            "label": {
              "en": "Solenoid",
              "zh": "螺线管"
            },
            "params": {
              "setup": 4,
              "lineCount": 9,
              "strength": 1
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
        "zh": "条形磁铁",
        "en": "Bar magnet"
      },
      "params": {
        "setup": 0,
        "lineCount": 8,
        "strength": 1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "同极相斥",
        "en": "Like poles repel"
      },
      "params": {
        "setup": 1,
        "lineCount": 8,
        "strength": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "异极相吸",
        "en": "Unlike poles attract"
      },
      "params": {
        "setup": 2,
        "lineCount": 8,
        "strength": 1
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "导线中的电流",
        "en": "Current in a wire"
      },
      "params": {
        "setup": 3,
        "lineCount": 5,
        "strength": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "螺线管",
        "en": "Solenoid"
      },
      "params": {
        "setup": 4,
        "lineCount": 9,
        "strength": 1
      }
    }
  ]
};
