/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-5-transformer
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/4-5-transformer/narration';
import { equations } from '../../igcse-src/0625/4-5-transformer/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/4-5-transformer/kernel';

export const kp45Transformer: KnowledgePoint = {
  "id": "igcse-0625-4-5-transformer",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "变压器与高压输电",
    "en": "Transformers and high-voltage transmission"
  },
  "summary": {
    "zh": "把输电电压加倍，电缆中的损耗不是减半，而是降到四分之一。电流曲线与损耗曲线的形状明显不同，这个差别正是电网存在的全部理由。",
    "en": "Doubling the transmission voltage does not halve the loss in the cable — it cuts it to a quarter. The current curve and the loss curve have visibly different shapes, and that difference is the whole reason the grid exists."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/4.5.6.1",
      "0625/4.5.6.2",
      "0625/4.5.6.3",
      "0625/4.5.6.4",
      "0625/4.5.6.5",
      "0625/4.5.6.6",
      "0625/4.5.6.7",
      "0625/4.5.6.8"
    ]
  },
  "keywords": {
    "zh": [
      "原线圈",
      "升压变压器",
      "软铁芯",
      "输电损耗"
    ],
    "en": [
      "primary coil",
      "step-up transformer",
      "soft iron core",
      "transmission loss"
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
          "描述带软铁芯的简单变压器的构造。",
          "正确使用原线圈、副线圈、升压与降压等术语。",
          "使用 Vp/Vs = Np/Ns。",
          "说明变压器在高压输电中的应用，并说出高压输电的优点。",
          "解释铁芯变压器的工作原理，以及它为何不能用于直流。（Extended）",
          "对效率为 100% 的变压器使用 IpVp = IsVs。（Extended）",
          "用 P = I²R 解释为何高压输电时电缆损耗更低。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "把输电电压加倍，电缆中的损耗不是减半，而是降到四分之一。电流曲线与损耗曲线的形状明显不同，这个差别正是电网存在的全部理由。"
      },
      {
        "type": "formula",
        "latex": "\\dfrac{V_p}{V_s} = \\dfrac{N_p}{N_s}",
        "caption": "电压之比等于匝数之比。副线圈匝数多则升压，匝数少则降压。"
      },
      {
        "type": "formula",
        "latex": "I_p V_p = I_s V_s",
        "caption": "理想变压器输入功率等于输出功率。电压升高 16 倍，电流就变为十六分之一——变压器只是在两者之间交换，绝不会同时增大两者。"
      },
      {
        "type": "formula",
        "latex": "P = I^2 R",
        "caption": "电缆发热浪费的功率。关键在于平方：输电电压加倍使电流减半，损耗因此降到四分之一。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "primary coil（原线圈）：接交流电源的线圈。它的变化电流在铁芯中产生变化的磁场。",
          "step-up transformer（升压变压器）：副线圈匝数多于原线圈，输出电压更高——而由于功率守恒，输出电流相应更小。",
          "soft iron core（软铁芯）：把磁场从一个线圈导引到另一个线圈。之所以用软铁，是因为它易磁化也易退磁，能跟上每秒反向 50 次的磁场。",
          "transmission loss（输电损耗）：电缆发热浪费的功率，等于 I²R。因为它取决于电流的平方，用高压输送电力能使其大幅下降。"
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
          "Describe the construction of a simple transformer with a soft iron core.",
          "Use the terms primary, secondary, step-up and step-down correctly.",
          "Use Vp / Vs = Np / Ns.",
          "Describe how transformers are used in the high-voltage transmission of electricity, and state the advantages.",
          "Explain how an iron-cored transformer works, and why it will not work on d.c. (Extended)",
          "Use IpVp = IsVs for a 100% efficient transformer. (Extended)",
          "Use P = I²R to explain why power losses in transmission cables are lower at high voltage. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Doubling the transmission voltage does not halve the loss in the cable — it cuts it to a quarter. The current curve and the loss curve have visibly different shapes, and that difference is the whole reason the grid exists."
      },
      {
        "type": "formula",
        "latex": "\\dfrac{V_p}{V_s} = \\dfrac{N_p}{N_s}",
        "caption": "Voltage in the same ratio as turns. More turns on the secondary steps the voltage up; fewer steps it down."
      },
      {
        "type": "formula",
        "latex": "I_p V_p = I_s V_s",
        "caption": "Power in equals power out for a perfect transformer. Step the voltage up by sixteen and the current is divided by sixteen — a transformer trades one against the other and never increases both."
      },
      {
        "type": "formula",
        "latex": "P = I^2 R",
        "caption": "Power wasted heating the cable. It is the square that matters: doubling the transmission voltage halves the current and so cuts the loss to a quarter."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "primary coil (原线圈): The coil connected to the a.c. supply. Its changing current is what makes the changing field in the core.",
          "step-up transformer (升压变压器): More turns on the secondary than the primary, so the output voltage is higher — and, since power is conserved, the output current is correspondingly smaller.",
          "soft iron core (软铁芯): Carries the magnetic field from one coil to the other. Soft iron is used because it magnetises and demagnetises easily, so it can follow a field reversing 50 times a second.",
          "transmission loss (输电损耗): Power wasted heating the cable, equal to I²R. Because it depends on the square of the current, sending power at a high voltage reduces it dramatically."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0625-4-5-6-cp1",
      "syllabus": [
        "0625/4.5.6.3"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A transformer has 1200 turns on its primary coil and 80 turns on its secondary coil. The primary is connected to a 240 V a.c. supply. Calculate the secondary voltage, and state whether this is a step-up or a step-down transformer.",
      "markScheme": [
        {
          "text": "Vs = Vp × Ns / Np = 240 × 80 / 1200",
          "marks": 1
        },
        {
          "text": "Vs = 16 V",
          "marks": 1
        },
        {
          "text": "Step-down, because the secondary has fewer turns than the primary",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "写下答案前先与匝数核对一下。匝数更少就必须得到更小的电压；如果算出来更大，说明比例用反了。",
        "en": "Check the answer against the turns before writing it down. Fewer turns must give a smaller voltage; if your answer is bigger, the ratio went in upside down."
      }
    },
    {
      "id": "0625-4-5-6-cp2",
      "syllabus": [
        "0625/4.5.6.6"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain how an iron-cored transformer produces a voltage across its secondary coil, and explain why it produces no steady output when the primary is connected to a battery instead of an a.c. supply.",
      "markScheme": [
        {
          "text": "The alternating current in the primary produces a magnetic field that is continually changing in size and direction",
          "marks": 1
        },
        {
          "text": "The soft iron core carries this changing magnetic field to the secondary coil",
          "marks": 1
        },
        {
          "text": "The changing field through the secondary induces an alternating e.m.f. across it, at the same frequency",
          "marks": 1
        },
        {
          "text": "A battery gives a steady current, so the field in the core is constant and not changing; no e.m.f. is induced, apart from a brief pulse at the moment of switching on or off",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "答案中必须出现\"变化\"二字，而且要修饰磁场。\"原线圈中的电流在副线圈感应出电压\"这句话对直流同样成立，因此得不到分。",
        "en": "The word \"changing\" has to appear, and it has to be attached to the field. \"The current in the primary induces a voltage in the secondary\" describes d.c. just as well as a.c., so it earns nothing."
      }
    },
    {
      "id": "0625-4-5-6-cp3",
      "syllabus": [
        "0625/4.5.6.7"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A 100% efficient transformer steps 240 V down to 12 V. The current in the secondary coil is 2.0 A. Calculate the current in the primary coil.",
      "markScheme": [
        {
          "text": "IpVp = IsVs, so Ip × 240 = 2.0 × 12",
          "marks": 1
        },
        {
          "text": "Ip = 24 / 240",
          "marks": 1
        },
        {
          "text": "Ip = 0.10 A",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这里原线圈电流必须小于副线圈电流，因为原线圈处在较高电压一侧。若算得 40 A，说明公式用反了。",
        "en": "The primary current must come out smaller than the secondary current here, because the primary is at the higher voltage. An answer of 40 A means the equation was used upside down."
      }
    },
    {
      "id": "0625-4-5-6-cp4",
      "syllabus": [
        "0625/4.5.6.8"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "A power station transmits 50 MW along a cable of resistance 8.0 Ω. Explain, using P = I²R, why the electricity is transmitted at 400 kV rather than at 100 kV, and calculate the power lost in the cable at each voltage.",
      "markScheme": [
        {
          "text": "At 400 kV: I = P / V = 50 × 10⁶ / 400 × 10³ = 125 A, so power lost = 125² × 8.0 = 0.125 MW",
          "marks": 1
        },
        {
          "text": "At 100 kV: I = 50 × 10⁶ / 100 × 10³ = 500 A, so power lost = 500² × 8.0 = 2.0 MW",
          "marks": 1
        },
        {
          "text": "A higher transmission voltage means a smaller current is needed to deliver the same power",
          "marks": 1
        },
        {
          "text": "and because the power lost depends on the square of the current, four times the voltage gives a quarter of the current and one sixteenth of the loss",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "最后一分给的是\"平方\"这一点。\"电流小损耗就小\"几乎对任何电路都成立，并没有回答为什么值得为此建设全国电网。",
        "en": "The last mark is for the squaring. \"A smaller current means less power is lost\" is true of almost any circuit and does not answer why the effect is worth building a national grid for."
      }
    },
    {
      "id": "0625-4-5-6-cp5",
      "syllabus": [
        "0625/4.5.6.4",
        "0625/4.5.6.5"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe how transformers are used between a power station and a house, and state two advantages of transmitting electricity at a high voltage.",
      "markScheme": [
        {
          "text": "A step-up transformer at the power station raises the voltage for transmission, and step-down transformers lower it again in stages for towns and finally for houses",
          "marks": 1
        },
        {
          "text": "Less energy is wasted heating the cables, because the current is smaller",
          "marks": 1
        },
        {
          "text": "Thinner and cheaper cable can be used, needing fewer or lighter pylons to support it",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两个优点要写两个不同的优点。\"损耗更少\"和\"效率更高\"是同一个优点说了两遍。",
        "en": "Two advantages means two different ones. \"Less energy is lost\" and \"it is more efficient\" are the same advantage said twice."
      }
    },
    {
      "id": "0625-4-5-6-cp6",
      "syllabus": [
        "0625/4.5.6.1",
        "0625/4.5.6.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe the construction of a simple transformer, and state why the core is made of soft iron rather than steel.",
      "markScheme": [
        {
          "text": "Two coils of insulated wire, the primary and the secondary, wound on the same core and not electrically connected to each other",
          "marks": 1
        },
        {
          "text": "The core is a complete loop of iron, which carries the magnetic field from one coil to the other",
          "marks": 1
        },
        {
          "text": "Soft iron magnetises and demagnetises easily, so it can follow the rapidly changing field; steel would retain its magnetism and waste energy",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两个线圈是绝缘且彼此分离的。若图中画出从原线圈连到副线圈的导线就会丢分，因为要点恰恰是两者之间没有导电连接。",
        "en": "The coils are insulated and separate. A diagram showing a wire running from the primary to the secondary loses the mark, because the whole point is that nothing conducts between them."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "primaryVoltage",
        "label": {
          "zh": "原线圈输入电压",
          "en": "Voltage into the primary"
        },
        "min": 100,
        "max": 25000,
        "step": 100,
        "defaultValue": 25000,
        "unit": "V"
      },
      {
        "key": "primaryTurns",
        "label": {
          "zh": "原线圈匝数",
          "en": "Turns on the primary"
        },
        "min": 1,
        "max": 500,
        "step": 1,
        "defaultValue": 100,
        "unit": ""
      },
      {
        "key": "secondaryTurns",
        "label": {
          "zh": "副线圈匝数",
          "en": "Turns on the secondary"
        },
        "min": 1,
        "max": 5000,
        "step": 10,
        "defaultValue": 1600,
        "unit": ""
      },
      {
        "key": "powerTransmitted",
        "label": {
          "zh": "沿线路输送的功率",
          "en": "Power sent down the line"
        },
        "min": 1,
        "max": 200,
        "step": 1,
        "defaultValue": 100,
        "unit": "MW"
      },
      {
        "key": "cableResistance",
        "label": {
          "zh": "电缆的电阻",
          "en": "Resistance of the cable"
        },
        "min": 1,
        "max": 50,
        "step": 1,
        "defaultValue": 10,
        "unit": "Ω"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "4-5-transformer",
        "hint": {
          "en": "Compare the shapes of the two graphs. The current falls as 1/V; the loss falls as 1/V², which is why it drops off a cliff.",
          "zh": "比较两幅图的形状。电流按 1/V 下降；损耗按 1/V² 下降，所以它会陡然坠落。"
        },
        "params": [
          {
            "key": "primaryVoltage",
            "label": {
              "en": "Voltage into the primary",
              "zh": "原线圈输入电压"
            },
            "unit": "V",
            "min": 100,
            "max": 25000,
            "step": 100,
            "default": 25000
          },
          {
            "key": "primaryTurns",
            "label": {
              "en": "Turns on the primary",
              "zh": "原线圈匝数"
            },
            "unit": "",
            "min": 1,
            "max": 500,
            "step": 1,
            "default": 100
          },
          {
            "key": "secondaryTurns",
            "label": {
              "en": "Turns on the secondary",
              "zh": "副线圈匝数"
            },
            "unit": "",
            "min": 1,
            "max": 5000,
            "step": 10,
            "default": 1600
          },
          {
            "key": "powerTransmitted",
            "label": {
              "en": "Power sent down the line",
              "zh": "沿线路输送的功率"
            },
            "unit": "MW",
            "min": 1,
            "max": 200,
            "step": 1,
            "default": 100
          },
          {
            "key": "cableResistance",
            "label": {
              "en": "Resistance of the cable",
              "zh": "电缆的电阻"
            },
            "unit": "Ω",
            "min": 1,
            "max": 50,
            "step": 1,
            "default": 10
          }
        ],
        "readouts": [
          {
            "key": "secondaryVoltage",
            "label": {
              "en": "Voltage out of the secondary",
              "zh": "副线圈输出电压"
            },
            "unit": "kV",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "lineCurrent",
            "label": {
              "en": "Current in the cable",
              "zh": "电缆中的电流"
            },
            "unit": "A",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "powerLost",
            "label": {
              "en": "Power lost as heat",
              "zh": "作为热损失的功率"
            },
            "unit": "MW",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "percentLost",
            "label": {
              "en": "Fraction of the power lost",
              "zh": "损失功率的占比"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A grid: 25 kV stepped up to 400 kV",
              "zh": "电网：25 kV 升压到 400 kV"
            },
            "params": {
              "primaryVoltage": 25000,
              "primaryTurns": 100,
              "secondaryTurns": 1600,
              "powerTransmitted": 100,
              "cableResistance": 10
            }
          },
          {
            "label": {
              "en": "No step-up at all",
              "zh": "完全不升压"
            },
            "params": {
              "primaryVoltage": 25000,
              "primaryTurns": 100,
              "secondaryTurns": 100,
              "powerTransmitted": 100,
              "cableResistance": 10
            }
          },
          {
            "label": {
              "en": "Stepped up only to 100 kV",
              "zh": "只升压到 100 kV"
            },
            "params": {
              "primaryVoltage": 25000,
              "primaryTurns": 100,
              "secondaryTurns": 400,
              "powerTransmitted": 100,
              "cableResistance": 10
            }
          },
          {
            "label": {
              "en": "A step-down transformer",
              "zh": "降压变压器"
            },
            "params": {
              "primaryVoltage": 25000,
              "primaryTurns": 400,
              "secondaryTurns": 100,
              "powerTransmitted": 100,
              "cableResistance": 10
            }
          },
          {
            "label": {
              "en": "A longer, thinner cable",
              "zh": "更长更细的电缆"
            },
            "params": {
              "primaryVoltage": 25000,
              "primaryTurns": 100,
              "secondaryTurns": 1600,
              "powerTransmitted": 100,
              "cableResistance": 40
            }
          },
          {
            "label": {
              "en": "Twice the power down the same line",
              "zh": "同一线路输送双倍功率"
            },
            "params": {
              "primaryVoltage": 25000,
              "primaryTurns": 100,
              "secondaryTurns": 1600,
              "powerTransmitted": 200,
              "cableResistance": 10
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
        "zh": "电网：25 kV 升压到 400 kV",
        "en": "A grid: 25 kV stepped up to 400 kV"
      },
      "params": {
        "primaryVoltage": 25000,
        "primaryTurns": 100,
        "secondaryTurns": 1600,
        "powerTransmitted": 100,
        "cableResistance": 10
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "完全不升压",
        "en": "No step-up at all"
      },
      "params": {
        "primaryVoltage": 25000,
        "primaryTurns": 100,
        "secondaryTurns": 100,
        "powerTransmitted": 100,
        "cableResistance": 10
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "只升压到 100 kV",
        "en": "Stepped up only to 100 kV"
      },
      "params": {
        "primaryVoltage": 25000,
        "primaryTurns": 100,
        "secondaryTurns": 400,
        "powerTransmitted": 100,
        "cableResistance": 10
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "降压变压器",
        "en": "A step-down transformer"
      },
      "params": {
        "primaryVoltage": 25000,
        "primaryTurns": 400,
        "secondaryTurns": 100,
        "powerTransmitted": 100,
        "cableResistance": 10
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "更长更细的电缆",
        "en": "A longer, thinner cable"
      },
      "params": {
        "primaryVoltage": 25000,
        "primaryTurns": 100,
        "secondaryTurns": 1600,
        "powerTransmitted": 100,
        "cableResistance": 40
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "同一线路输送双倍功率",
        "en": "Twice the power down the same line"
      },
      "params": {
        "primaryVoltage": 25000,
        "primaryTurns": 100,
        "secondaryTurns": 1600,
        "powerTransmitted": 200,
        "cableResistance": 10
      }
    }
  ]
};
