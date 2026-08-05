/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/3-3-em-spectrum
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/3-3-em-spectrum/narration';
import { equations } from '../../igcse-src/0625/3-3-em-spectrum/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/3-3-em-spectrum/kernel';

export const kp33EmSpectrum: KnowledgePoint = {
  "id": "igcse-0625-3-3-em-spectrum",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "电磁波谱",
    "en": "The electromagnetic spectrum"
  },
  "summary": {
    "zh": "七个波段，波长跨越十六个数量级——而一条水平线表明它们的速度完全相同。",
    "en": "Seven regions spanning sixteen powers of ten in wavelength — and one flat line showing they all travel at exactly the same speed."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/3.3.1",
      "0625/3.3.2",
      "0625/3.3.3",
      "0625/3.3.4",
      "0625/3.3.5",
      "0625/3.3.6",
      "0625/3.3.7",
      "0625/3.3.8",
      "0625/3.3.9",
      "0625/3.3.10"
    ]
  },
  "keywords": {
    "zh": [
      "电磁波谱",
      "电离辐射",
      "地球同步卫星",
      "模拟信号",
      "数字信号"
    ],
    "en": [
      "electromagnetic spectrum",
      "ionising radiation",
      "geostationary satellite",
      "analogue signal",
      "digital signal"
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
          "按频率与波长顺序知道电磁波谱的主要波段。",
          "知道所有电磁波在真空中速度相同。",
          "说明各波段的典型用途。",
          "说明过量照射各波段的危害。",
          "知道卫星通信主要使用微波。",
          "知道真空中电磁波速为 3.0 × 10⁸ m / s。（Extended）",
          "知道常见通信系统所用的电磁波及其原因。（Extended）",
          "知道数字信号与模拟信号的区别。（Extended）",
          "知道声音可以数字或模拟方式传输。（Extended）",
          "解释数字信号传输的优点。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "七个波段，波长跨越十六个数量级——而一条水平线表明它们的速度完全相同。"
      },
      {
        "type": "formula",
        "latex": "c = f\\lambda = 3.0 \\times 10^{8}\\ \\text{m/s}",
        "caption": "无论波长如何，所有电磁波在真空中都以此速度传播。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "electromagnetic spectrum（电磁波谱）：连续的电磁波家族，从波长最长的无线电波到最短的 γ 射线。",
          "ionising radiation（电离辐射）：能量足以从原子中打出电子的辐射——紫外线、X 射线和 γ 射线。可使细胞突变或死亡。",
          "geostationary satellite（地球同步卫星）：轨道周期与地球自转同步、始终位于地面同一点上方的卫星。用于卫星电视。",
          "analogue signal（模拟信号）：连续变化、可取任意值的信号。传输中混入的噪声无法去除。",
          "digital signal（数字信号）：只由 1 和 0 构成的信号。可被干净地再生，因而传得更远且不累积噪声。"
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
          "Know the main regions of the electromagnetic spectrum in order of frequency and wavelength.",
          "Know that all electromagnetic waves travel at the same speed in a vacuum.",
          "Describe typical uses of each region of the spectrum.",
          "Describe the harmful effects of excessive exposure to each region.",
          "Know that satellite communication mainly uses microwaves.",
          "Know that electromagnetic waves travel at 3.0 × 10⁸ m / s in a vacuum. (Extended)",
          "Know which radiations underpin common communication systems, and why. (Extended)",
          "Know the difference between digital and analogue signals. (Extended)",
          "Know that sound can be transmitted digitally or as an analogue signal. (Extended)",
          "Explain the benefits of digital signalling. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Seven regions spanning sixteen powers of ten in wavelength — and one flat line showing they all travel at exactly the same speed."
      },
      {
        "type": "formula",
        "latex": "c = f\\lambda = 3.0 \\times 10^{8}\\ \\text{m/s}",
        "caption": "Every electromagnetic wave travels at this speed in a vacuum, whatever its wavelength."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "electromagnetic spectrum (电磁波谱): The continuous family of electromagnetic waves, from radio waves at the longest wavelength to gamma rays at the shortest.",
          "ionising radiation (电离辐射): Radiation energetic enough to remove electrons from atoms — ultraviolet, X-rays and gamma rays. It can mutate or kill cells.",
          "geostationary satellite (地球同步卫星): A satellite orbiting so that it stays above the same point on the Earth’s surface. Used for satellite television.",
          "analogue signal (模拟信号): A signal that varies continuously, taking any value. Noise picked up along the way cannot be removed.",
          "digital signal (数字信号): A signal made only of ones and zeros. It can be regenerated cleanly, so it travels further without accumulating noise."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "3-3-cp1",
      "syllabus": [
        "0625/3.3.1"
      ],
      "tier": "core",
      "commandWord": "Identify",
      "marks": 1,
      "stem": "Identify the region of the electromagnetic spectrum that lies between infrared and ultraviolet.",
      "options": [
        "Visible light",
        "Microwaves",
        "X-rays",
        "Radio waves"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "Visible light",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "顺序要正反都记熟。红外线波长略长于红光，紫外线略短于紫光——名字本身就说明了。",
        "en": "Learn the order both ways round. Infrared is just longer in wavelength than red light; ultraviolet is just shorter than violet — the names say so."
      }
    },
    {
      "id": "3-3-cp2",
      "syllabus": [
        "0625/3.3.2",
        "0625/3.3.6"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A radio station broadcasts at a frequency of 1.0 × 10⁸ Hz. Taking the speed of electromagnetic waves as 3.0 × 10⁸ m / s, calculate the wavelength of the radio waves.",
      "markScheme": [
        {
          "text": "Uses c = fλ, rearranged to λ = c / f",
          "marks": 1
        },
        {
          "text": "Correct substitution: (3.0 × 10⁸) / (1.0 × 10⁸)",
          "marks": 1
        },
        {
          "text": "3.0 m",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "所有电磁波速度相同，不必按波段查表。注意频率可能以 MHz 给出——100 MHz 即 1.0 × 10⁸ Hz。",
        "en": "Every electromagnetic wave uses the same speed, so you never have to look one up per region. Watch for frequencies given in MHz — 100 MHz is 1.0 × 10⁸ Hz."
      }
    },
    {
      "id": "3-3-cp3",
      "syllabus": [
        "0625/3.3.4"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 2,
      "stem": "State one harmful effect on the body of excessive exposure to ultraviolet radiation, and one for microwaves.",
      "markScheme": [
        {
          "text": "Ultraviolet: damage to surface cells and eyes, leading to skin cancer",
          "marks": 1
        },
        {
          "text": "Microwaves: internal heating of body cells",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要把危害与波段正确对应。把\"致癌\"安在微波上不能得分——微波不是电离辐射。",
        "en": "Match the effect to the region. \"Causes cancer\" applied to microwaves would not be credited — microwaves are not ionising."
      }
    },
    {
      "id": "3-3-cp4",
      "syllabus": [
        "0625/3.3.10"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain two benefits of transmitting information as a digital signal rather than an analogue one.",
      "markScheme": [
        {
          "text": "A digital signal can carry a higher rate of data transmission",
          "marks": 1
        },
        {
          "text": "A digital signal can be regenerated accurately, because the receiver only needs to distinguish a 1 from a 0",
          "marks": 1
        },
        {
          "text": "so noise does not accumulate and the signal can travel a greater range",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "再生这一点必须给出理由。只写\"数字更清晰\"而不解释为何只有 1 和 0 能被干净还原，得不到分。",
        "en": "The regeneration argument needs its reason. Saying \"digital is clearer\" without explaining why only ones and zeros can be recovered cleanly does not earn the mark."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "quantity",
        "label": {
          "zh": "绘制",
          "en": "Plot"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "region",
        "label": {
          "zh": "波段",
          "en": "Region"
        },
        "min": 0,
        "max": 6,
        "step": 1,
        "defaultValue": 3,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "3-3-em-spectrum",
        "hint": {
          "en": "The f × λ line is flat across the whole spectrum — that is the point. Switch to frequency to see the same fact as a straight fall.",
          "zh": "f × λ 这条线在全谱上都是水平的——这正是要点。切换到频率，可从另一角度看到同一事实。"
        },
        "params": [
          {
            "key": "quantity",
            "label": {
              "en": "Plot",
              "zh": "绘制"
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
                  "en": "f × λ (speed)",
                  "zh": "f × λ（速度）"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "log frequency",
                  "zh": "对数频率"
                }
              }
            ]
          },
          {
            "key": "region",
            "label": {
              "en": "Region",
              "zh": "波段"
            },
            "unit": "",
            "min": 0,
            "max": 6,
            "step": 1,
            "default": 3,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Radio waves",
                  "zh": "Radio waves"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Microwaves",
                  "zh": "Microwaves"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Infrared",
                  "zh": "Infrared"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Visible light",
                  "zh": "Visible light"
                }
              },
              {
                "value": 4,
                "label": {
                  "en": "Ultraviolet",
                  "zh": "Ultraviolet"
                }
              },
              {
                "value": 5,
                "label": {
                  "en": "X-rays",
                  "zh": "X-rays"
                }
              },
              {
                "value": 6,
                "label": {
                  "en": "Gamma rays",
                  "zh": "Gamma rays"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "wavelength",
            "label": {
              "en": "Typical wavelength",
              "zh": "典型波长"
            },
            "unit": "m",
            "symbol": "λ",
            "sigFigs": 2
          },
          {
            "key": "frequency",
            "label": {
              "en": "Typical frequency",
              "zh": "典型频率"
            },
            "unit": "Hz",
            "symbol": "f",
            "sigFigs": 3
          },
          {
            "key": "speed",
            "label": {
              "en": "Speed f × λ",
              "zh": "速度 f × λ"
            },
            "unit": "m / s",
            "symbol": "c",
            "sigFigs": 3
          },
          {
            "key": "orderFromLongest",
            "label": {
              "en": "Position in spectrum",
              "zh": "在波谱中的位次"
            },
            "unit": "of 7",
            "sigFigs": 1
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Radio waves",
              "zh": "无线电波"
            },
            "params": {
              "region": 0,
              "quantity": 0
            }
          },
          {
            "label": {
              "en": "Microwaves",
              "zh": "微波"
            },
            "params": {
              "region": 1,
              "quantity": 0
            }
          },
          {
            "label": {
              "en": "Visible light",
              "zh": "可见光"
            },
            "params": {
              "region": 3,
              "quantity": 0
            }
          },
          {
            "label": {
              "en": "Gamma rays",
              "zh": "γ 射线"
            },
            "params": {
              "region": 6,
              "quantity": 0
            }
          },
          {
            "label": {
              "en": "See it as frequency",
              "zh": "以频率查看"
            },
            "params": {
              "region": 3,
              "quantity": 1
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
        "zh": "无线电波",
        "en": "Radio waves"
      },
      "params": {
        "region": 0,
        "quantity": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "微波",
        "en": "Microwaves"
      },
      "params": {
        "region": 1,
        "quantity": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "可见光",
        "en": "Visible light"
      },
      "params": {
        "region": 3,
        "quantity": 0
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "γ 射线",
        "en": "Gamma rays"
      },
      "params": {
        "region": 6,
        "quantity": 0
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "以频率查看",
        "en": "See it as frequency"
      },
      "params": {
        "region": 3,
        "quantity": 1
      }
    }
  ]
};
