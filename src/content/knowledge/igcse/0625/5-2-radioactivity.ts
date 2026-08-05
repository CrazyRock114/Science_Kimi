/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/5-2-radioactivity
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/5-2-radioactivity/narration';
import { equations } from '../../igcse-src/0625/5-2-radioactivity/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/5-2-radioactivity/kernel';

export const kp52Radioactivity: KnowledgePoint = {
  "id": "igcse-0625-5-2-radioactivity",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "放射性与半衰期",
    "en": "Radioactivity and half-life"
  },
  "summary": {
    "zh": "从衰变曲线读出半衰期——前提是先减去本底，而这一步最容易被忽略。",
    "en": "Read a half-life off a decay curve — after subtracting the background, which is the step that catches people out."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/5.2.1.1",
      "0625/5.2.1.2",
      "0625/5.2.1.3",
      "0625/5.2.1.4",
      "0625/5.2.1.5",
      "0625/5.2.2.1",
      "0625/5.2.2.2",
      "0625/5.2.2.3",
      "0625/5.2.2.4",
      "0625/5.2.3.1",
      "0625/5.2.3.2",
      "0625/5.2.3.3",
      "0625/5.2.3.4",
      "0625/5.2.3.5",
      "0625/5.2.4.1",
      "0625/5.2.4.2",
      "0625/5.2.4.3",
      "0625/5.2.5.1",
      "0625/5.2.5.2",
      "0625/5.2.5.3"
    ]
  },
  "keywords": {
    "zh": [
      "本底辐射",
      "计数率",
      "半衰期",
      "α 粒子",
      "β 粒子",
      "γ 射线",
      "同位素"
    ],
    "en": [
      "background radiation",
      "count rate",
      "half-life",
      "alpha particle",
      "beta particle",
      "gamma radiation",
      "isotope"
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
          "知道什么是本底辐射及其来源。",
          "使用以每秒或每分钟计的计数率。",
          "用本底测量求校正后的计数率。（Extended）",
          "按性质、电离能力与穿透能力识别 α、β、γ。",
          "描述三种辐射在电场与磁场中的偏转。（Extended）",
          "知道衰变是自发随机的，且 α、β 衰变会改变元素种类。",
          "用核素符号写衰变方程。（Extended）",
          "定义半衰期并用于计算，包括从衰变曲线求解。",
          "解释辐射类型与半衰期如何决定同位素的用途。（Extended）",
          "说出电离辐射对生物的影响并描述安全操作。"
        ]
      },
      {
        "type": "paragraph",
        "text": "从衰变曲线读出半衰期——前提是先减去本底，而这一步最容易被忽略。"
      },
      {
        "type": "formula",
        "latex": "A = A_0 \\left(\\tfrac{1}{2}\\right)^{t / t_{1/2}}",
        "caption": "校正后的计数率每过一个半衰期减半，无论从哪里开始都一样。"
      },
      {
        "type": "formula",
        "latex": "^{238}_{92}\\mathrm{U} \\rightarrow\\ ^{234}_{90}\\mathrm{Th} + ^{4}_{2}\\alpha",
        "caption": "α 衰变：核子数减 4，质子数减 2。上下两行都必须配平。"
      },
      {
        "type": "formula",
        "latex": "^{14}_{6}\\mathrm{C} \\rightarrow\\ ^{14}_{7}\\mathrm{N} + ^{\\ \\ 0}_{-1}\\beta",
        "caption": "β 衰变：中子变质子，质子数加 1，核子数不变。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "background radiation（本底辐射）：环境中始终存在的电离辐射——来自氡、岩石、食物与宇宙射线。任何衰变计算前都必须减去它。",
          "count rate（计数率）：探测器每秒或每分钟记录到的衰变次数。",
          "half-life（半衰期）：样品中一半原子核发生衰变所需的时间——等价于校正后计数率减半所需的时间。",
          "alpha particle（α 粒子）：氦核：2 个质子和 2 个中子，电荷 +2。电离最强、穿透最弱，一张纸即可挡住。",
          "beta particle（β 粒子）：中子变质子时射出的高速电子。电荷 −1，几毫米铝可挡住。",
          "gamma radiation（γ 射线）：高能电磁波。不带电、无质量，电离最弱但穿透最强，需要厚铅板。",
          "isotope（同位素）：同种元素但中子数不同的原子。有些不稳定，因而具有放射性。"
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
          "Know what background radiation is and where it comes from.",
          "Use count rate measured in counts per second or per minute.",
          "Use background measurements to find a corrected count rate. (Extended)",
          "Identify alpha, beta and gamma by nature, ionising effect and penetrating power.",
          "Describe how the three emissions deflect in electric and magnetic fields. (Extended)",
          "Know that decay is spontaneous and random, and changes the element in alpha or beta decay.",
          "Use decay equations in nuclide notation. (Extended)",
          "Define half-life and use it in calculations, including from decay curves.",
          "Explain how emission type and half-life determine an isotope’s use. (Extended)",
          "State the effects of ionising radiation on living things and describe safe handling."
        ]
      },
      {
        "type": "paragraph",
        "text": "Read a half-life off a decay curve — after subtracting the background, which is the step that catches people out."
      },
      {
        "type": "formula",
        "latex": "A = A_0 \\left(\\tfrac{1}{2}\\right)^{t / t_{1/2}}",
        "caption": "The corrected count rate halves once per half-life, however far along you start."
      },
      {
        "type": "formula",
        "latex": "^{238}_{92}\\mathrm{U} \\rightarrow\\ ^{234}_{90}\\mathrm{Th} + ^{4}_{2}\\alpha",
        "caption": "Alpha decay: nucleon number falls by 4, proton number by 2. Both columns must balance."
      },
      {
        "type": "formula",
        "latex": "^{14}_{6}\\mathrm{C} \\rightarrow\\ ^{14}_{7}\\mathrm{N} + ^{\\ \\ 0}_{-1}\\beta",
        "caption": "Beta decay: a neutron becomes a proton, so the proton number rises by 1 and the nucleon number is unchanged."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "background radiation (本底辐射): Ionising radiation always present in the environment — from radon, rocks, food and cosmic rays. It must be subtracted before any decay calculation.",
          "count rate (计数率): The number of decays a detector registers each second or minute.",
          "half-life (半衰期): The time taken for half the nuclei of an isotope in a sample to decay — equivalently, for the corrected count rate to halve.",
          "alpha particle (α 粒子): A helium nucleus: 2 protons and 2 neutrons, charge +2. Most ionising, least penetrating — stopped by paper.",
          "beta particle (β 粒子): A fast electron emitted when a neutron becomes a proton. Charge −1, stopped by a few mm of aluminium.",
          "gamma radiation (γ 射线): A high-energy electromagnetic wave. No charge, no mass, least ionising but most penetrating — needs thick lead.",
          "isotope (同位素): Atoms of the same element with different numbers of neutrons. Some are unstable and therefore radioactive."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "5-2-cp1",
      "syllabus": [
        "0625/5.2.4.1"
      ],
      "tier": "core",
      "commandWord": "Determine",
      "marks": 3,
      "stem": "A sample has a corrected count rate of 640 counts / s. After 12 hours the corrected count rate is 40 counts / s. Determine the half-life of the sample.",
      "markScheme": [
        {
          "text": "Recognises that the rate has halved four times (640 → 320 → 160 → 80 → 40)",
          "marks": 1
        },
        {
          "text": "Uses 12 hours ÷ 4 half-lives",
          "marks": 1
        },
        {
          "text": "3 hours",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "数减半的次数，不必套公式。640 到 40 是 16 倍，即 2⁴，所以经过了四个半衰期。",
        "en": "Count the halvings rather than reaching for a formula. 640 to 40 is a factor of 16, which is 2⁴, so four half-lives have passed."
      }
    },
    {
      "id": "5-2-cp2",
      "syllabus": [
        "0625/5.2.1.5"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 2,
      "stem": "A detector records 210 counts / s with a source in place. With the source removed it records 30 counts / s. Calculate the corrected count rate due to the source.",
      "markScheme": [
        {
          "text": "Subtracts the background from the measured rate",
          "marks": 1,
          "alternatives": [
            "210 − 30"
          ]
        },
        {
          "text": "180 counts / s",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "移走放射源后的读数就是本底。忘记减去它是半衰期题中最常见的错误。",
        "en": "The reading with the source removed *is* the background. Forgetting to subtract it is the single most common error in half-life questions."
      }
    },
    {
      "id": "5-2-cp3",
      "syllabus": [
        "0625/5.2.2.2"
      ],
      "tier": "core",
      "commandWord": "Identify",
      "marks": 1,
      "stem": "A radioactive emission passes through a sheet of paper but is stopped by 3 mm of aluminium. Identify the emission.",
      "options": [
        "Beta",
        "Alpha",
        "Gamma",
        "X-rays"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "Beta",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "α 会被纸挡住，γ 会穿过铝板。只有 β 同时符合这两个观察结果。",
        "en": "Alpha would have been stopped by the paper; gamma would have passed through the aluminium. Only beta fits both observations."
      }
    },
    {
      "id": "5-2-cp4",
      "syllabus": [
        "0625/5.2.3.5"
      ],
      "tier": "supplement",
      "commandWord": "Deduce",
      "marks": 2,
      "stem": "A nucleus of ²²⁶₈₈Ra decays by emitting an alpha particle. Deduce the nucleon number and proton number of the nucleus produced.",
      "markScheme": [
        {
          "text": "Nucleon number 222",
          "marks": 1
        },
        {
          "text": "Proton number 86",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "α 粒子是 ⁴₂He，所以上标减 4、下标减 2。箭头两边上下两行都要配平。",
        "en": "An alpha particle is ⁴₂He, so subtract 4 from the top and 2 from the bottom. Both columns must balance across the arrow."
      }
    },
    {
      "id": "5-2-cp5",
      "syllabus": [
        "0625/5.2.5.3"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 3,
      "stem": "A school keeps radioactive sources in a locked lead-lined box and uses long-handled tongs to move them. Suggest how these practices reduce the dose received by a teacher.",
      "markScheme": [
        {
          "text": "The lead lining absorbs the radiation, shielding the surroundings",
          "marks": 1
        },
        {
          "text": "The tongs increase the distance between the source and the body, and intensity falls with distance",
          "marks": 1
        },
        {
          "text": "Handling quickly reduces the exposure time, and dose depends on time",
          "marks": 1,
          "alternatives": [
            "sources are returned to storage promptly"
          ]
        }
      ],
      "examinerNote": {
        "zh": "时间、距离、屏蔽——既要说出措施，也要说明其作用。Suggest 题只写措施名称不够。",
        "en": "Time, distance and shielding — name the precaution and say what it does. Naming it alone is not enough for a Suggest question."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "halfLife",
        "label": {
          "zh": "半衰期",
          "en": "Half-life"
        },
        "min": 0.5,
        "max": 12,
        "step": 0.5,
        "defaultValue": 3,
        "unit": "h"
      },
      {
        "key": "initialRate",
        "label": {
          "zh": "初始计数率",
          "en": "Initial count rate"
        },
        "min": 100,
        "max": 1000,
        "step": 50,
        "defaultValue": 800,
        "unit": "counts / s"
      },
      {
        "key": "background",
        "label": {
          "zh": "本底计数率",
          "en": "Background rate"
        },
        "min": 0,
        "max": 200,
        "step": 10,
        "defaultValue": 20,
        "unit": "counts / s"
      },
      {
        "key": "duration",
        "label": {
          "zh": "绘图时长",
          "en": "Time plotted"
        },
        "min": 2,
        "max": 24,
        "step": 1,
        "defaultValue": 12,
        "unit": "h"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "5-2-radioactivity",
        "hint": {
          "en": "Raise the background and watch the measured curve stop falling to zero — that is why you must correct it first.",
          "zh": "调高本底，看测得曲线不再降到零——这就是必须先做校正的原因。"
        },
        "params": [
          {
            "key": "halfLife",
            "label": {
              "en": "Half-life",
              "zh": "半衰期"
            },
            "unit": "h",
            "symbol": "t_{1/2}",
            "min": 0.5,
            "max": 12,
            "step": 0.5,
            "default": 3
          },
          {
            "key": "initialRate",
            "label": {
              "en": "Initial count rate",
              "zh": "初始计数率"
            },
            "unit": "counts / s",
            "symbol": "A_0",
            "min": 100,
            "max": 1000,
            "step": 50,
            "default": 800
          },
          {
            "key": "background",
            "label": {
              "en": "Background rate",
              "zh": "本底计数率"
            },
            "unit": "counts / s",
            "min": 0,
            "max": 200,
            "step": 10,
            "default": 20
          },
          {
            "key": "duration",
            "label": {
              "en": "Time plotted",
              "zh": "绘图时长"
            },
            "unit": "h",
            "min": 2,
            "max": 24,
            "step": 1,
            "default": 12
          }
        ],
        "readouts": [
          {
            "key": "measuredHalfLife",
            "label": {
              "en": "Half-life from the curve",
              "zh": "由曲线求得的半衰期"
            },
            "unit": "h",
            "sigFigs": 3
          },
          {
            "key": "halfLivesElapsed",
            "label": {
              "en": "Half-lives elapsed",
              "zh": "经过的半衰期数"
            },
            "unit": "",
            "sigFigs": 2
          },
          {
            "key": "rateAtEnd",
            "label": {
              "en": "Corrected rate at end",
              "zh": "末端校正计数率"
            },
            "unit": "counts / s",
            "sigFigs": 3
          },
          {
            "key": "measuredAtEnd",
            "label": {
              "en": "Measured rate at end",
              "zh": "末端测得计数率"
            },
            "unit": "counts / s",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Four half-lives",
              "zh": "四个半衰期"
            },
            "params": {
              "halfLife": 3,
              "initialRate": 800,
              "background": 20,
              "duration": 12
            }
          },
          {
            "label": {
              "en": "Heavy background",
              "zh": "强本底"
            },
            "params": {
              "halfLife": 3,
              "initialRate": 800,
              "background": 160,
              "duration": 12
            }
          },
          {
            "label": {
              "en": "Long half-life",
              "zh": "长半衰期"
            },
            "params": {
              "halfLife": 12,
              "initialRate": 800,
              "background": 20,
              "duration": 24
            }
          },
          {
            "label": {
              "en": "Short half-life",
              "zh": "短半衰期"
            },
            "params": {
              "halfLife": 0.5,
              "initialRate": 800,
              "background": 20,
              "duration": 6
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
        "zh": "四个半衰期",
        "en": "Four half-lives"
      },
      "params": {
        "halfLife": 3,
        "initialRate": 800,
        "background": 20,
        "duration": 12
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "强本底",
        "en": "Heavy background"
      },
      "params": {
        "halfLife": 3,
        "initialRate": 800,
        "background": 160,
        "duration": 12
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "长半衰期",
        "en": "Long half-life"
      },
      "params": {
        "halfLife": 12,
        "initialRate": 800,
        "background": 20,
        "duration": 24
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "短半衰期",
        "en": "Short half-life"
      },
      "params": {
        "halfLife": 0.5,
        "initialRate": 800,
        "background": 20,
        "duration": 6
      }
    }
  ]
};
