/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/3-1-waves
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/3-1-waves/narration';
import { equations } from '../../igcse-src/0625/3-1-waves/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/3-1-waves/kernel';

export const kp31Waves: KnowledgePoint = {
  "id": "igcse-0625-3-1-waves",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "波动与波速公式",
    "en": "Wave motion and the wave equation"
  },
  "summary": {
    "zh": "看波如何传递能量而不传递物质，区分横波与纵波，并在频率与波长互换时验证 v = fλ。",
    "en": "See a wave carry energy without carrying matter, tell transverse from longitudinal, and watch v = fλ hold as you trade frequency against wavelength."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/3.1.1",
      "0625/3.1.2",
      "0625/3.1.3",
      "0625/3.1.4",
      "0625/3.1.5",
      "0625/3.1.6",
      "0625/3.1.7",
      "0625/3.1.8",
      "0625/3.1.9",
      "0625/3.1.10"
    ]
  },
  "keywords": {
    "zh": [
      "波长",
      "频率",
      "振幅",
      "波前",
      "横波",
      "纵波"
    ],
    "en": [
      "wavelength",
      "frequency",
      "amplitude",
      "wavefront",
      "transverse wave",
      "longitudinal wave"
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
          "描述波的反射、折射与衍射，以及它们在波盘中的演示。",
          "描述波长与缝宽如何影响通过缝隙和绕过边缘的衍射。（Extended）",
          "说明波传递能量而不传递物质。",
          "用绳、弹簧与水波描述波动。",
          "使用波前、波长、频率、波峰、波谷、振幅与波速等术语。",
          "记住并使用波速公式 v = fλ。",
          "知道横波的振动方向与传播方向垂直。",
          "知道纵波的振动方向与传播方向平行。"
        ]
      },
      {
        "type": "heading",
        "text": "横波还是纵波"
      },
      {
        "type": "paragraph",
        "text": "横波中粒子的振动方向与波的传播方向垂直。光、水波和地震 S 波都是这样。"
      },
      {
        "type": "paragraph",
        "text": "现在切换到纵波。粒子改为沿传播方向振动，挤在一起形成密部，散开形成疏部。声波和地震 P 波就是这样。"
      },
      {
        "type": "paragraph",
        "text": "注意下方的图像看起来完全一样。这一点最容易骗人：位移图像永远不能告诉你这是哪种波，只有题目文字才能。"
      },
      {
        "type": "heading",
        "text": "波速公式"
      },
      {
        "type": "paragraph",
        "text": "波速等于频率乘波长。看我把频率加倍时的波速读数——波明显跑得更快了。"
      },
      {
        "type": "formula",
        "latex": "v = f\\lambda"
      },
      {
        "type": "paragraph",
        "text": "现在我把波长也减半。频率加倍、波长减半——波速又回到了原值。在给定介质中波速是固定的，所以频率与波长总是此消彼长。"
      },
      {
        "type": "heading",
        "text": "波在边界处会做的三件事"
      },
      {
        "type": "paragraph",
        "text": "波盘是观察这一切的标准方法。振动棒在浅水中产生平直的波前，上方的灯把它们的影子投在桌面上，你还可以在水中放置障碍物。"
      },
      {
        "type": "paragraph",
        "text": "放入一块平直挡板，波会发生反射：反射角等于入射角，而波长、频率和波速都不变。反射只改变方向。"
      },
      {
        "type": "paragraph",
        "text": "在池底放一块平板玻璃形成浅水区，波会发生折射。浅水中波速变慢，因此波长变短——若波以某个角度到达边界，方向也会改变。但频率不变，因为波源的振动频率没有变。"
      },
      {
        "type": "paragraph",
        "text": "这一点值得说两遍，因为它是本章最常见的错误。折射改变波速和波长，但绝不改变频率。频率由产生波的源决定，边界对此无能为力。"
      },
      {
        "type": "paragraph",
        "text": "再放一块带缝的挡板，波通过后会散开。这就是衍射；与前两者不同，波本身完全没有变化——波速、波长、频率都不变。变的只是波前的形状。"
      },
      {
        "type": "paragraph",
        "text": "散开的程度取决于缝宽与波长的比较。缝很宽时几乎不弯折：大部分波直行通过，只有边缘略微卷曲。把缝收窄到接近波长，散开就明显增强；当缝宽与波长相当时，波几乎以半圆形的弧面射出。"
      },
      {
        "type": "paragraph",
        "text": "在单个障碍物的边缘也是同样的道理：波会绕到它后面，波长越长绕得越多。这就是为什么你能听见拐角处的人说话却看不见他——声波波长约一米，能绕过墙壁衍射，而光的波长不足一微米，做不到。"
      },
      {
        "type": "formula",
        "latex": "v = f\\lambda",
        "caption": "波速等于频率乘波长。在给定介质中波速固定，因此频率与波长此消彼长。"
      },
      {
        "type": "formula",
        "latex": "T = \\frac{1}{f}",
        "caption": "周期是完成一次全振动所需的时间——频率的倒数。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "wavelength（波长）：波形重复一次的距离——波峰到波峰，或密部到密部。符号 λ。",
          "frequency（频率）：每秒通过某点的完整波的个数，单位赫兹。",
          "amplitude（振幅）：粒子离开平衡位置的最大位移——从中线到波峰，不是波峰到波谷的全高。",
          "wavefront（波前）：连接波上同一时刻状态相同各点的线。",
          "transverse wave（横波）：粒子振动方向与传播方向垂直的波。光和水波是横波。",
          "longitudinal wave（纵波）：粒子沿传播方向振动的波，形成密部与疏部。声波是纵波。"
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
          "Describe reflection, refraction and diffraction of waves, and their ripple tank demonstrations.",
          "Describe how wavelength and gap size affect diffraction through a gap and at an edge. (Extended)",
          "State that waves transfer energy without transferring matter.",
          "Describe wave motion using ropes, springs and water waves.",
          "Use the terms wavefront, wavelength, frequency, crest, trough, amplitude and wave speed.",
          "Recall and use the wave equation v = fλ.",
          "Know that a transverse wave vibrates at right angles to its direction of travel.",
          "Know that a longitudinal wave vibrates parallel to its direction of travel."
        ]
      },
      {
        "type": "heading",
        "text": "Transverse or longitudinal"
      },
      {
        "type": "paragraph",
        "text": "In a transverse wave the particles vibrate at right angles to the direction the wave travels. Light, water waves and seismic S-waves all behave this way."
      },
      {
        "type": "paragraph",
        "text": "Now switch to longitudinal. The particles vibrate along the direction of travel instead, bunching into compressions and spreading into rarefactions. Sound and seismic P-waves do this."
      },
      {
        "type": "paragraph",
        "text": "Notice the graph underneath looks identical. That catches people out: a displacement graph never tells you which type of wave it is. Only the question text does."
      },
      {
        "type": "heading",
        "text": "The wave equation"
      },
      {
        "type": "paragraph",
        "text": "Wave speed is frequency times wavelength. Watch the speed readout as I double the frequency — the wave visibly moves faster."
      },
      {
        "type": "formula",
        "latex": "v = f\\lambda"
      },
      {
        "type": "paragraph",
        "text": "Now I halve the wavelength as well. Frequency doubled, wavelength halved — and the speed is back where it started. In a given medium the speed is fixed, so f and lambda always trade off against each other."
      },
      {
        "type": "heading",
        "text": "Three things a wave does at a boundary"
      },
      {
        "type": "paragraph",
        "text": "A ripple tank is the standard way to see all of this. A vibrating bar makes straight wavefronts on shallow water, a lamp above casts their shadow on the bench, and you can put obstacles in the way."
      },
      {
        "type": "paragraph",
        "text": "Put a straight barrier in and the waves reflect: the angle of reflection equals the angle of incidence, and the wavelength, frequency and speed are all unchanged. Reflection changes only the direction."
      },
      {
        "type": "paragraph",
        "text": "Put a flat sheet of glass on the bottom to make a shallow region and the waves refract. In shallower water they travel more slowly, so the wavelength shortens — and if they meet the boundary at an angle they change direction. But the frequency does not change, because the source is still vibrating at the same rate."
      },
      {
        "type": "paragraph",
        "text": "That is worth saying twice, because it is the most common error in the topic. Refraction changes speed and wavelength. It never changes frequency. The frequency is set by whatever is making the wave, and the boundary has no say in it."
      },
      {
        "type": "paragraph",
        "text": "And put a barrier with a gap in it, and the waves spread out after passing through. That is diffraction, and unlike the other two nothing about the wave changes at all — not the speed, not the wavelength, not the frequency. Only the shape of the wavefronts."
      },
      {
        "type": "paragraph",
        "text": "How much they spread depends on the gap compared with the wavelength. A wide gap barely bends them: most of the wave carries straight on and only the edges curl. Narrow the gap towards the wavelength and the spreading grows, until at a gap about equal to the wavelength the waves emerge as almost semicircular arcs."
      },
      {
        "type": "paragraph",
        "text": "At the edge of a single obstacle it is the same story: waves bend round it, and the longer the wavelength the more they bend. Which is why you can hear someone round a corner but not see them — sound has a wavelength of about a metre and diffracts round the wall, while light at a fraction of a micrometre does not."
      },
      {
        "type": "formula",
        "latex": "v = f\\lambda",
        "caption": "Wave speed equals frequency times wavelength. In a given medium the speed is fixed, so f and λ trade off."
      },
      {
        "type": "formula",
        "latex": "T = \\frac{1}{f}",
        "caption": "The period is the time for one complete wave — the reciprocal of the frequency."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "wavelength (波长): The distance over which the wave pattern repeats — crest to crest, or compression to compression. Symbol λ.",
          "frequency (频率): The number of complete waves passing a point each second, measured in hertz.",
          "amplitude (振幅): The maximum displacement of a particle from its rest position — the middle to a crest, not the full crest-to-trough height.",
          "wavefront (波前): A line joining points on a wave that are all doing the same thing at the same moment.",
          "transverse wave (横波): A wave whose particles vibrate at right angles to the direction of travel. Light and water waves are transverse.",
          "longitudinal wave (纵波): A wave whose particles vibrate along the direction of travel, forming compressions and rarefactions. Sound is longitudinal."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "3-1-waves-cp1",
      "syllabus": [
        "0625/3.1.1"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 1,
      "stem": "State what is transferred by a wave as it travels through a medium.",
      "options": [
        "Energy",
        "Matter",
        "Both energy and matter",
        "Neither energy nor matter"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "Energy",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "波只传递能量。介质粒子在固定位置附近振动，并不随波迁移。",
        "en": "Waves transfer energy only. The particles of the medium vibrate about fixed positions and do not travel with the wave."
      }
    },
    {
      "id": "3-1-waves-cp2",
      "syllabus": [
        "0625/3.1.4"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A water wave has a frequency of 2.5 Hz and a wavelength of 0.80 m. Calculate the speed of the wave.",
      "markScheme": [
        {
          "text": "Uses v = fλ",
          "marks": 1
        },
        {
          "text": "Correct substitution: 2.5 × 0.80",
          "marks": 1
        },
        {
          "text": "2.0 m / s",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "注意题目中频率可能用 kHz 或 MHz、波长可能用 cm 或 nm——先换成赫兹和米可避免本主题最常见的错误。",
        "en": "Watch for frequencies given in kHz or MHz and wavelengths in cm or nm — converting to hertz and metres first prevents the most common error in this topic."
      }
    },
    {
      "id": "3-1-waves-cp3",
      "syllabus": [
        "0625/3.1.5",
        "0625/3.1.6"
      ],
      "tier": "core",
      "commandWord": "Compare",
      "marks": 2,
      "stem": "Compare the direction of vibration of the particles in a transverse wave with that in a longitudinal wave.",
      "markScheme": [
        {
          "text": "In a transverse wave the particles vibrate at right angles to the direction of travel",
          "marks": 1,
          "alternatives": [
            "perpendicular to the direction of propagation"
          ]
        },
        {
          "text": "whereas in a longitudinal wave they vibrate parallel to (along) the direction of travel",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "命令词是 Compare，两部分必须对照着写在一起——只写\"垂直\"并没有回答所问的问题。",
        "en": "The command word is Compare, so both halves must be linked in one contrast — \"at right angles\" on its own does not answer the question asked."
      }
    },
    {
      "id": "3-1-waves-cp4",
      "syllabus": [
        "0625/3.1.3"
      ],
      "tier": "core",
      "commandWord": "Determine",
      "marks": 2,
      "stem": "A displacement–distance graph shows a wave with crests 1.2 m apart. The vertical distance from a crest to a trough is 8.0 cm. Determine the wavelength and the amplitude of the wave.",
      "markScheme": [
        {
          "text": "Wavelength = 1.2 m",
          "marks": 1
        },
        {
          "text": "Amplitude = 4.0 cm (half the crest-to-trough distance)",
          "marks": 1,
          "alternatives": [
            "0.040 m"
          ]
        }
      ],
      "examinerNote": {
        "zh": "振幅从平衡位置量到波峰，因此是波峰到波谷高度的一半。写 8.0 cm 是这里的典型错误。",
        "en": "Amplitude is measured from the rest position to a crest, so it is half the crest-to-trough height. Quoting 8.0 cm is the classic mistake here."
      }
    },
    {
      "id": "0625-3-1-cp5",
      "syllabus": [
        "0625/3.1.7"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 3,
      "stem": "A water wave passes from deep water into shallow water. State what happens to its speed, its wavelength and its frequency.",
      "markScheme": [
        {
          "text": "The speed decreases",
          "marks": 1
        },
        {
          "text": "The wavelength decreases",
          "marks": 1
        },
        {
          "text": "The frequency stays the same",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "频率由产生波的源决定，边界对此无能为力。写\"频率降低\"是整章中最常见的错误。",
        "en": "The frequency is fixed by whatever is producing the wave, and a boundary has no say in it. Saying the frequency drops is the commonest error in the whole topic."
      }
    },
    {
      "id": "0625-3-1-cp6",
      "syllabus": [
        "0625/3.1.9",
        "0625/3.1.10"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "You can hear a person talking round the corner of a building, but you cannot see them. Explain why, in terms of diffraction.",
      "markScheme": [
        {
          "text": "Waves diffract — spread out — when they pass an edge or a gap, and the amount of spreading depends on the wavelength compared with the size of the obstacle or gap",
          "marks": 1
        },
        {
          "text": "Sound has a wavelength of roughly a metre, comparable to the size of the corner, so it diffracts strongly and reaches you",
          "marks": 1
        },
        {
          "text": "Light has a wavelength of well under a micrometre, far smaller than the corner, so it diffracts far too little to reach you",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "比较的是波长与缝隙或障碍物的尺度，而不是波长本身的大小。光确实会衍射——只是在建筑物的尺度上远远不够。",
        "en": "The comparison is between the wavelength and the gap or obstacle, not the wavelength on its own. Light does diffract — just not on the scale of a building."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "longitudinal",
        "label": {
          "zh": "波的类型",
          "en": "Wave type"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "frequency",
        "label": {
          "zh": "频率",
          "en": "Frequency"
        },
        "min": 0.2,
        "max": 4,
        "step": 0.1,
        "defaultValue": 1,
        "unit": "Hz"
      },
      {
        "key": "wavelength",
        "label": {
          "zh": "波长",
          "en": "Wavelength"
        },
        "min": 0.4,
        "max": 2,
        "step": 0.1,
        "defaultValue": 1,
        "unit": "m"
      },
      {
        "key": "amplitude",
        "label": {
          "zh": "振幅",
          "en": "Amplitude"
        },
        "min": 0.1,
        "max": 1,
        "step": 0.05,
        "defaultValue": 0.6,
        "unit": "m"
      },
      {
        "key": "t",
        "label": {
          "zh": "时间",
          "en": "Time"
        },
        "min": 0,
        "max": 60,
        "step": 0.01,
        "defaultValue": 0,
        "unit": "s"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "waves",
        "kernel": "3-1-waves",
        "animate": {
          "param": "t",
          "speed": 1,
          "loop": 60
        },
        "hint": {
          "en": "Double the frequency and halve the wavelength — the speed comes back to where it started.",
          "zh": "把频率加倍、波长减半——波速会回到原来的值。"
        },
        "params": [
          {
            "key": "longitudinal",
            "label": {
              "en": "Wave type",
              "zh": "波的类型"
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
                  "en": "Transverse",
                  "zh": "横波"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Longitudinal",
                  "zh": "纵波"
                }
              }
            ]
          },
          {
            "key": "frequency",
            "label": {
              "en": "Frequency",
              "zh": "频率"
            },
            "unit": "Hz",
            "symbol": "f",
            "min": 0.2,
            "max": 4,
            "step": 0.1,
            "default": 1
          },
          {
            "key": "wavelength",
            "label": {
              "en": "Wavelength",
              "zh": "波长"
            },
            "unit": "m",
            "symbol": "λ",
            "min": 0.4,
            "max": 2,
            "step": 0.1,
            "default": 1
          },
          {
            "key": "amplitude",
            "label": {
              "en": "Amplitude",
              "zh": "振幅"
            },
            "unit": "m",
            "symbol": "A",
            "min": 0.1,
            "max": 1,
            "step": 0.05,
            "default": 0.6
          },
          {
            "key": "t",
            "label": {
              "en": "Time",
              "zh": "时间"
            },
            "unit": "s",
            "min": 0,
            "max": 60,
            "step": 0.01,
            "default": 0,
            "hidden": true
          }
        ],
        "readouts": [
          {
            "key": "waveSpeed",
            "label": {
              "en": "Wave speed",
              "zh": "波速"
            },
            "unit": "m / s",
            "symbol": "v",
            "sigFigs": 3
          },
          {
            "key": "period",
            "label": {
              "en": "Period",
              "zh": "周期"
            },
            "unit": "s",
            "symbol": "T",
            "sigFigs": 3
          },
          {
            "key": "wavesVisible",
            "label": {
              "en": "Waves in view",
              "zh": "视野内波数"
            },
            "unit": "",
            "sigFigs": 2
          },
          {
            "key": "amplitude",
            "label": {
              "en": "Amplitude",
              "zh": "振幅"
            },
            "unit": "m",
            "symbol": "A",
            "sigFigs": 2
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Transverse",
              "zh": "横波"
            },
            "params": {
              "frequency": 1,
              "wavelength": 1,
              "amplitude": 0.6,
              "longitudinal": 0
            }
          },
          {
            "label": {
              "en": "Longitudinal",
              "zh": "纵波"
            },
            "params": {
              "frequency": 1,
              "wavelength": 1,
              "amplitude": 0.6,
              "longitudinal": 1
            }
          },
          {
            "label": {
              "en": "Same speed, double f",
              "zh": "波速不变，频率加倍"
            },
            "params": {
              "frequency": 2,
              "wavelength": 0.5,
              "amplitude": 0.6,
              "longitudinal": 0
            }
          },
          {
            "label": {
              "en": "Bigger amplitude only",
              "zh": "只增大振幅"
            },
            "params": {
              "frequency": 1,
              "wavelength": 1,
              "amplitude": 1,
              "longitudinal": 0
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
        "zh": "横波",
        "en": "Transverse"
      },
      "params": {
        "frequency": 1,
        "wavelength": 1,
        "amplitude": 0.6,
        "longitudinal": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "纵波",
        "en": "Longitudinal"
      },
      "params": {
        "frequency": 1,
        "wavelength": 1,
        "amplitude": 0.6,
        "longitudinal": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "波速不变，频率加倍",
        "en": "Same speed, double f"
      },
      "params": {
        "frequency": 2,
        "wavelength": 0.5,
        "amplitude": 0.6,
        "longitudinal": 0
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "只增大振幅",
        "en": "Bigger amplitude only"
      },
      "params": {
        "frequency": 1,
        "wavelength": 1,
        "amplitude": 1,
        "longitudinal": 0
      }
    }
  ]
};
