/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-1-measurement
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/1-1-measurement/narration';
import { equations } from '../../igcse-src/0625/1-1-measurement/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/1-1-measurement/kernel';

export const kp11Measurement: KnowledgePoint = {
  "id": "igcse-0625-1-1-measurement",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "测量、标量与矢量",
    "en": "Measurement, scalars and vectors"
  },
  "summary": {
    "zh": "向东 6 加向北 8 等于 10，而不是 14。虚线矩形正是直角的来源——也是勾股定理之所以适用的原因。",
    "en": "Six east plus eight north is ten, not fourteen. The dashed rectangle is where the right angle comes from — and why Pythagoras applies at all."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/1.1.1",
      "0625/1.1.2",
      "0625/1.1.3",
      "0625/1.1.4",
      "0625/1.1.5",
      "0625/1.1.6",
      "0625/1.1.7"
    ]
  },
  "keywords": {
    "zh": [
      "标量",
      "矢量",
      "合矢量",
      "视差误差"
    ],
    "en": [
      "scalar",
      "vector",
      "resultant",
      "parallax error"
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
          "用直尺与量筒测量长度和体积，用钟表与计时器测量时间间隔。",
          "通过测量多个来求得微小距离或极短时间的平均值。",
          "区分标量与矢量，并识别各物理量属于哪一类。（Extended）",
          "用计算或按比例作图求两个垂直矢量的合矢量。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "两类物理量"
      },
      {
        "type": "paragraph",
        "text": "标量只有大小：多少，没有别的。矢量既有大小又有方向，而方向是这个量本身的一部分，不是关于它的附加信息。"
      },
      {
        "type": "paragraph",
        "text": "标量：距离、速率、时间、质量、能量、温度。矢量：位移、速度、加速度、力、重力、动量，以及重力场、电场或磁场的强度。"
      },
      {
        "type": "paragraph",
        "text": "要记的是这些成对的量：距离与位移、速率与速度。绕跑道走一圈，你的距离是四百米，位移是零。你的平均速率有每秒几米，平均速度却完全为零。"
      },
      {
        "type": "formula",
        "latex": "R = \\sqrt{a^{2} + b^{2}}",
        "caption": "两个垂直矢量的合矢量的大小——它们所构成矩形的对角线。绝不是简单的 a + b。"
      },
      {
        "type": "formula",
        "latex": "\\tan\\theta = \\dfrac{b}{a}",
        "caption": "方向，从第一个矢量量起。矢量的答案若没有方向，只答了一半。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "scalar（标量）：只有大小的物理量——距离、速率、质量、时间、能量。",
          "vector（矢量）：既有大小又有方向的物理量——位移、速度、加速度、力、动量。",
          "resultant（合矢量）：与两个或多个矢量共同作用效果相同的单一矢量。对垂直矢量而言，它是矩形的对角线。",
          "parallax error（视差误差）：不平视而是斜着读刻度所造成的误差。它是系统误差，因此重复测量并不能消除它。"
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
          "Measure length and volume with rulers and measuring cylinders, and time intervals with clocks and timers.",
          "Find an average for a small distance or a short time by measuring multiples.",
          "Distinguish scalars from vectors, and identify which quantities are which. (Extended)",
          "Find the resultant of two perpendicular vectors by calculation or by scale drawing. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Two kinds of quantity"
      },
      {
        "type": "paragraph",
        "text": "A scalar has magnitude only: how much, and nothing else. A vector has magnitude and direction, and the direction is part of the quantity rather than extra information about it."
      },
      {
        "type": "paragraph",
        "text": "Scalars: distance, speed, time, mass, energy, temperature. Vectors: displacement, velocity, acceleration, force, weight, momentum, and the strength of a gravitational, electric or magnetic field."
      },
      {
        "type": "paragraph",
        "text": "The pairs are the ones to learn: distance and displacement, speed and velocity. Walk once round a running track and your distance is four hundred metres and your displacement is zero. Your average speed was several metres per second and your average velocity was nothing at all."
      },
      {
        "type": "formula",
        "latex": "R = \\sqrt{a^{2} + b^{2}}",
        "caption": "The magnitude of the resultant of two perpendicular vectors — the diagonal of the rectangle they form. Never simply a + b."
      },
      {
        "type": "formula",
        "latex": "\\tan\\theta = \\dfrac{b}{a}",
        "caption": "The direction, measured from the first vector. A vector answer without a direction is only half an answer."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "scalar (标量): A quantity with magnitude only — distance, speed, mass, time, energy.",
          "vector (矢量): A quantity with magnitude and direction — displacement, velocity, acceleration, force, momentum.",
          "resultant (合矢量): The single vector that has the same effect as two or more acting together. For perpendicular vectors it is the diagonal of the rectangle.",
          "parallax error (视差误差): Reading a scale from an angle rather than at eye level. It is systematic, so repeating the measurement does not remove it."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0625-1-1-cp1",
      "syllabus": [
        "0625/1.1.7"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A boat is rowed east at 3.0 m/s across a river that flows north at 4.0 m/s. Calculate the magnitude and direction of the resultant velocity.",
      "markScheme": [
        {
          "text": "Recognises the two velocities are perpendicular and uses R² = 3.0² + 4.0²",
          "marks": 1
        },
        {
          "text": "Magnitude = 5.0 m/s",
          "marks": 1
        },
        {
          "text": "Direction: tan θ = 4.0 / 3.0, so θ = 53° north of east (or equivalent)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "方向本身就是一个得分点。速度是矢量，因此只写\"5.0 m/s\"是不完整的答案，无论算式多正确。",
        "en": "The direction is a mark in its own right. A velocity is a vector, so \"5.0 m/s\" alone is an incomplete answer however correct the arithmetic."
      }
    },
    {
      "id": "0625-1-1-cp2",
      "syllabus": [
        "0625/1.1.3"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe how you would measure the thickness of one sheet of paper accurately, using only a ruler.",
      "markScheme": [
        {
          "text": "Stack a large, counted number of identical sheets — say 100",
          "marks": 1
        },
        {
          "text": "Measure the total thickness of the stack with the ruler",
          "marks": 1
        },
        {
          "text": "Divide the total thickness by the number of sheets",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "有余地的话要说明原理：整摞纸与一张纸的读数不确定度相同，因此除以 100 也把不确定度除以了 100。",
        "en": "Say why it works if you have room: the reading uncertainty is the same for the stack as for one sheet, so dividing by 100 divides the uncertainty by 100 too."
      }
    },
    {
      "id": "0625-1-1-cp3",
      "syllabus": [
        "0625/1.1.4",
        "0625/1.1.5",
        "0625/1.1.6"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A runner completes exactly one lap of a 400 m circular track in 80 s. Explain why their average speed is not zero but their average velocity is.",
      "markScheme": [
        {
          "text": "Speed is a scalar, calculated from the distance travelled: 400 / 80 = 5.0 m/s",
          "marks": 1
        },
        {
          "text": "Velocity is a vector, calculated from the displacement — the straight-line distance from start to finish",
          "marks": 1
        },
        {
          "text": "The runner finishes where they started, so the displacement is zero and the average velocity is zero",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这是检验标量与矢量之分是否真正掌握的最干净的一题。距离与位移是不同的物理量，不是同一件事的两种说法。",
        "en": "This is the cleanest test of whether the scalar–vector distinction has landed. Distance and displacement are different quantities, not two words for the same thing."
      }
    },
    {
      "id": "0625-1-1-cp4",
      "syllabus": [
        "0625/1.1.7"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 2,
      "stem": "A student finds the resultant of two perpendicular forces by scale drawing and gets an answer 0.4 N different from the calculated value. Suggest how they could reduce this difference.",
      "markScheme": [
        {
          "text": "Use a larger scale, so that each newton is represented by a greater length on the paper",
          "marks": 1
        },
        {
          "text": "A ruler still reads to the nearest millimetre, so a larger scale makes that millimetre correspond to a smaller force — and use a sharp pencil and measure carefully",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "比例作图的精度由比例尺决定，而这是学生可以控制的。只写\"更仔细一些\"算不上方法。",
        "en": "The precision of a scale drawing is set by the scale, and it is under the student’s control. \"Be more careful\" alone is not a method."
      }
    },
    {
      "id": "0625-1-1-cp5",
      "syllabus": [
        "0625/1.1.1",
        "0625/1.1.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe how to measure the volume of a small irregularly shaped stone, and state one precaution needed for an accurate reading.",
      "markScheme": [
        {
          "text": "Part-fill a measuring cylinder with water and record the initial volume",
          "marks": 1
        },
        {
          "text": "Lower the stone in until it is fully submerged and record the new volume; the volume of the stone is the difference",
          "marks": 1
        },
        {
          "text": "Read the bottom of the meniscus at eye level, to avoid a parallax error",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "石块必须完全浸没，读数必须平视。两者都是得分点，也正是 Paper 6 所看重的那类细节。",
        "en": "The stone must be fully submerged, and the reading must be at eye level. Both are marks, and both are the sort of detail Paper 6 is built on."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "a",
        "label": {
          "zh": "第一个矢量（向东）",
          "en": "First vector, east"
        },
        "min": 0,
        "max": 20,
        "step": 0.1,
        "defaultValue": 6,
        "unit": ""
      },
      {
        "key": "b",
        "label": {
          "zh": "第二个矢量（向北）",
          "en": "Second vector, north"
        },
        "min": 0,
        "max": 20,
        "step": 0.1,
        "defaultValue": 8,
        "unit": ""
      },
      {
        "key": "scale",
        "label": {
          "zh": "作图所用的比例尺",
          "en": "Scale used for the drawing"
        },
        "min": 1,
        "max": 20,
        "step": 1,
        "defaultValue": 10,
        "unit": "mm per unit"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "vectors",
        "kernel": "1-1-measurement",
        "hint": {
          "en": "Compare the calculated resultant with what a scale drawing would give, then make the scale bigger.",
          "zh": "把计算所得的合矢量与按比例作图所得的结果作比较，然后把比例尺调大。"
        },
        "params": [
          {
            "key": "a",
            "label": {
              "en": "First vector, east",
              "zh": "第一个矢量（向东）"
            },
            "unit": "",
            "min": 0,
            "max": 20,
            "step": 0.1,
            "default": 6
          },
          {
            "key": "b",
            "label": {
              "en": "Second vector, north",
              "zh": "第二个矢量（向北）"
            },
            "unit": "",
            "min": 0,
            "max": 20,
            "step": 0.1,
            "default": 8
          },
          {
            "key": "scale",
            "label": {
              "en": "Scale used for the drawing",
              "zh": "作图所用的比例尺"
            },
            "unit": "mm per unit",
            "min": 1,
            "max": 20,
            "step": 1,
            "default": 10
          }
        ],
        "readouts": [
          {
            "key": "resultant",
            "label": {
              "en": "Resultant, calculated",
              "zh": "合矢量（计算）"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "angle",
            "label": {
              "en": "Angle from the first vector",
              "zh": "与第一个矢量的夹角"
            },
            "unit": "°",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "drawn",
            "label": {
              "en": "Resultant, from the drawing",
              "zh": "合矢量（作图）"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "difference",
            "label": {
              "en": "Difference between the two",
              "zh": "两者之差"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A 3-4-5 triangle",
              "zh": "3-4-5 直角三角形"
            },
            "params": {
              "a": 3,
              "b": 4,
              "scale": 20
            }
          },
          {
            "label": {
              "en": "Six east, eight north",
              "zh": "东 6，北 8"
            },
            "params": {
              "a": 6,
              "b": 8,
              "scale": 10
            }
          },
          {
            "label": {
              "en": "Equal, so 45°",
              "zh": "两者相等，故为 45°"
            },
            "params": {
              "a": 7,
              "b": 7,
              "scale": 10
            }
          },
          {
            "label": {
              "en": "A coarse scale drawing",
              "zh": "粗糙的比例作图"
            },
            "params": {
              "a": 3.7,
              "b": 5.3,
              "scale": 2
            }
          },
          {
            "label": {
              "en": "The same, drawn larger",
              "zh": "同一题，画得更大"
            },
            "params": {
              "a": 3.7,
              "b": 5.3,
              "scale": 20
            }
          },
          {
            "label": {
              "en": "One vector is zero",
              "zh": "其中一个矢量为零"
            },
            "params": {
              "a": 0,
              "b": 9,
              "scale": 10
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
        "zh": "3-4-5 直角三角形",
        "en": "A 3-4-5 triangle"
      },
      "params": {
        "a": 3,
        "b": 4,
        "scale": 20
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "东 6，北 8",
        "en": "Six east, eight north"
      },
      "params": {
        "a": 6,
        "b": 8,
        "scale": 10
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "两者相等，故为 45°",
        "en": "Equal, so 45°"
      },
      "params": {
        "a": 7,
        "b": 7,
        "scale": 10
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "粗糙的比例作图",
        "en": "A coarse scale drawing"
      },
      "params": {
        "a": 3.7,
        "b": 5.3,
        "scale": 2
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "同一题，画得更大",
        "en": "The same, drawn larger"
      },
      "params": {
        "a": 3.7,
        "b": 5.3,
        "scale": 20
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "其中一个矢量为零",
        "en": "One vector is zero"
      },
      "params": {
        "a": 0,
        "b": 9,
        "scale": 10
      }
    }
  ]
};
