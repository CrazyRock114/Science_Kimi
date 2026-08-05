/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/3-4-sound
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/3-4-sound/narration';
import { equations } from '../../igcse-src/0625/3-4-sound/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/3-4-sound/kernel';

export const kp34Sound: KnowledgePoint = {
  "id": "igcse-0625-3-4-sound",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "声",
    "en": "Sound"
  },
  "summary": {
    "zh": "看粒子挤成密部，切换介质时波长改变而频率不变——再把回声里那个 2 弄对。",
    "en": "Watch particles bunch into compressions, switch the medium and see the wavelength change while the frequency holds — then get the echo factor of two right."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/3.4.1",
      "0625/3.4.2",
      "0625/3.4.3",
      "0625/3.4.4",
      "0625/3.4.5",
      "0625/3.4.6",
      "0625/3.4.7",
      "0625/3.4.8",
      "0625/3.4.9",
      "0625/3.4.10",
      "0625/3.4.11",
      "0625/3.4.12"
    ]
  },
  "keywords": {
    "zh": [
      "密部",
      "疏部",
      "音调",
      "响度",
      "回声",
      "超声"
    ],
    "en": [
      "compression",
      "rarefaction",
      "pitch",
      "loudness",
      "echo",
      "ultrasound"
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
          "描述振动物体如何产生声音。",
          "描述声波的纵波性质。",
          "说出人耳听觉范围约 20 Hz 至 20 000 Hz。",
          "知道声传播需要介质，真空中不能传声。",
          "知道空气中声速约 330–350 m / s。",
          "描述测定空气中声速的方法。",
          "说明振幅与频率如何影响响度与音调。",
          "把回声描述为声的反射。",
          "把超声定义为高于 20 kHz 的声。",
          "描述密部与疏部。（Extended）",
          "知道声速固体最快、气体最慢。（Extended）",
          "说明超声的应用，含深度与距离计算。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "看粒子挤成密部，切换介质时波长改变而频率不变——再把回声里那个 2 弄对。"
      },
      {
        "type": "formula",
        "latex": "v = f\\lambda",
        "caption": "声源决定频率，介质决定声速，波长随之确定。"
      },
      {
        "type": "formula",
        "latex": "d = \\frac{v\\,t}{2}",
        "caption": "回声或声呐要把测得的时间除以二——声音走了两趟。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "compression（密部）：纵波中粒子比平常更靠近的区域。",
          "rarefaction（疏部）：纵波中粒子比平常更分散的区域。",
          "pitch（音调）：声音听起来的高低。由波的频率决定。",
          "loudness（响度）：声音的大小。由波的振幅决定，与频率无关。",
          "echo（回声）：声音经表面反射后再次被听到。声音走了两倍的距离。",
          "ultrasound（超声）：频率高于 20 kHz 的声，人耳听不到。用于声呐与医学扫描。"
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
          "Describe how vibrating sources produce sound.",
          "Describe the longitudinal nature of sound waves.",
          "State the audible range as roughly 20 Hz to 20 000 Hz.",
          "Know that sound needs a medium and cannot travel in a vacuum.",
          "Know that the speed of sound in air is about 330–350 m / s.",
          "Describe a method for determining the speed of sound in air.",
          "Describe how amplitude and frequency affect loudness and pitch.",
          "Describe an echo as reflected sound.",
          "Define ultrasound as sound above 20 kHz.",
          "Describe compression and rarefaction. (Extended)",
          "Know that sound travels fastest in solids and slowest in gases. (Extended)",
          "Describe uses of ultrasound, including depth and distance calculations. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Watch particles bunch into compressions, switch the medium and see the wavelength change while the frequency holds — then get the echo factor of two right."
      },
      {
        "type": "formula",
        "latex": "v = f\\lambda",
        "caption": "The source fixes the frequency; the medium fixes the speed; the wavelength follows."
      },
      {
        "type": "formula",
        "latex": "d = \\frac{v\\,t}{2}",
        "caption": "For an echo or a sonar ping, halve the measured time — the sound made the journey twice."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "compression (密部): A region of a longitudinal wave where the particles are pushed closer together than normal.",
          "rarefaction (疏部): A region of a longitudinal wave where the particles are spread further apart than normal.",
          "pitch (音调): How high or low a note sounds. Determined by the frequency of the wave.",
          "loudness (响度): How loud a sound is. Determined by the amplitude of the wave, not its frequency.",
          "echo (回声): Sound heard again after reflecting from a surface. The sound covers the distance twice.",
          "ultrasound (超声): Sound with a frequency above 20 kHz, too high for humans to hear. Used in sonar and medical scanning."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "3-4-cp1",
      "syllabus": [
        "0625/3.4.4"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "An electric bell is ringing inside a sealed glass jar. As the air is pumped out, the sound gets quieter and eventually cannot be heard at all. Explain why.",
      "markScheme": [
        {
          "text": "Sound is a wave that needs particles of a medium to travel through",
          "marks": 1
        },
        {
          "text": "As the air is removed there are fewer particles to pass the vibrations on, and in a vacuum there are none",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "铃仍在振动——关键是没有介质来传递振动。铃发出的光仍能到达你，所以你还能看见它在响。",
        "en": "The bell is still vibrating — the point is that there is nothing left to carry the vibration. Light from the bell still reaches you, which is why you can see it ringing."
      }
    },
    {
      "id": "3-4-cp2",
      "syllabus": [
        "0625/3.4.6",
        "0625/3.4.8"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A student stands 165 m from a large wall, claps once, and hears the echo 1.0 s later. Calculate the speed of sound in air.",
      "markScheme": [
        {
          "text": "Recognises the sound travels to the wall and back, a total of 330 m",
          "marks": 1
        },
        {
          "text": "Uses v = d / t",
          "marks": 1
        },
        {
          "text": "330 m / s",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "用 165 m 会得到 165 m/s，远低于空气中任何合理值。若答案不在 330–350 m/s 附近，多半是漏了返程。",
        "en": "Using 165 m gives 165 m / s, which is far below any sensible value for air. If your answer is not near 330–350 m / s, you have probably forgotten the return journey."
      }
    },
    {
      "id": "3-4-cp3",
      "syllabus": [
        "0625/3.4.7"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 2,
      "stem": "A note played on a guitar is made louder without changing the note. State which property of the sound wave changes, and which stays the same.",
      "markScheme": [
        {
          "text": "The amplitude increases",
          "marks": 1
        },
        {
          "text": "The frequency stays the same",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "响度与音调彼此独立。只改变振幅只会改变响度——音高不变。",
        "en": "Loudness and pitch are independent. Changing the amplitude alone changes only the loudness — the note is the same note."
      }
    },
    {
      "id": "3-4-cp4",
      "syllabus": [
        "0625/3.4.12"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A ship sends an ultrasound pulse towards the seabed. The pulse returns 0.16 s later. The speed of sound in seawater is 1500 m / s. Calculate the depth of the water.",
      "markScheme": [
        {
          "text": "Total distance travelled = 1500 × 0.16 = 240 m",
          "marks": 1
        },
        {
          "text": "Halves the distance because the pulse travelled down and back",
          "marks": 1
        },
        {
          "text": "Depth = 120 m",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "和回声是同一个 2。声呐、超声扫描和雷达都是这样——测出往返，再除以二。",
        "en": "Same factor of two as an echo. Sonar, ultrasound scans and radar all work this way — measure the round trip, then halve it."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "medium",
        "label": {
          "zh": "介质",
          "en": "Medium"
        },
        "min": 0,
        "max": 2,
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
        "min": 20,
        "max": 40000,
        "step": 20,
        "defaultValue": 440,
        "unit": "Hz"
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
        "unit": ""
      },
      {
        "key": "wallDistance",
        "label": {
          "zh": "到反射面的距离",
          "en": "Distance to wall"
        },
        "min": 10,
        "max": 500,
        "step": 10,
        "defaultValue": 100,
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
        "kernel": "3-4-sound",
        "animate": {
          "param": "t",
          "speed": 1,
          "loop": 60
        },
        "hint": {
          "en": "Switch from air to steel — the frequency stays put but the wavelength jumps, because the speed did.",
          "zh": "从空气切换到钢——频率不变，但波长骤变，因为声速变了。"
        },
        "params": [
          {
            "key": "medium",
            "label": {
              "en": "Medium",
              "zh": "介质"
            },
            "unit": "",
            "min": 0,
            "max": 2,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Air 340 m/s",
                  "zh": "空气 340 m/s"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Water 1500 m/s",
                  "zh": "水 1500 m/s"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Steel 5000 m/s",
                  "zh": "钢 5000 m/s"
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
            "min": 20,
            "max": 40000,
            "step": 20,
            "default": 440
          },
          {
            "key": "amplitude",
            "label": {
              "en": "Amplitude",
              "zh": "振幅"
            },
            "unit": "",
            "symbol": "A",
            "min": 0.1,
            "max": 1,
            "step": 0.05,
            "default": 0.6
          },
          {
            "key": "wallDistance",
            "label": {
              "en": "Distance to wall",
              "zh": "到反射面的距离"
            },
            "unit": "m",
            "min": 10,
            "max": 500,
            "step": 10,
            "default": 100
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
            "key": "speed",
            "label": {
              "en": "Speed of sound",
              "zh": "声速"
            },
            "unit": "m / s",
            "symbol": "v",
            "sigFigs": 3
          },
          {
            "key": "wavelength",
            "label": {
              "en": "Wavelength",
              "zh": "波长"
            },
            "unit": "m",
            "symbol": "λ",
            "sigFigs": 3
          },
          {
            "key": "echoTime",
            "label": {
              "en": "Echo returns after",
              "zh": "回声返回时间"
            },
            "unit": "s",
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
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Musical note in air",
              "zh": "空气中的乐音"
            },
            "params": {
              "frequency": 440,
              "medium": 0,
              "amplitude": 0.6,
              "wallDistance": 100
            }
          },
          {
            "label": {
              "en": "Same note in steel",
              "zh": "钢中的同一乐音"
            },
            "params": {
              "frequency": 440,
              "medium": 2,
              "amplitude": 0.6,
              "wallDistance": 100
            }
          },
          {
            "label": {
              "en": "Higher pitch, louder",
              "zh": "更高更响"
            },
            "params": {
              "frequency": 880,
              "medium": 0,
              "amplitude": 1,
              "wallDistance": 100
            }
          },
          {
            "label": {
              "en": "Ultrasound in water",
              "zh": "水中的超声"
            },
            "params": {
              "frequency": 40000,
              "medium": 1,
              "amplitude": 0.6,
              "wallDistance": 100
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
        "zh": "空气中的乐音",
        "en": "Musical note in air"
      },
      "params": {
        "frequency": 440,
        "medium": 0,
        "amplitude": 0.6,
        "wallDistance": 100
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "钢中的同一乐音",
        "en": "Same note in steel"
      },
      "params": {
        "frequency": 440,
        "medium": 2,
        "amplitude": 0.6,
        "wallDistance": 100
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "更高更响",
        "en": "Higher pitch, louder"
      },
      "params": {
        "frequency": 880,
        "medium": 0,
        "amplitude": 1,
        "wallDistance": 100
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "水中的超声",
        "en": "Ultrasound in water"
      },
      "params": {
        "frequency": 40000,
        "medium": 1,
        "amplitude": 0.6,
        "wallDistance": 100
      }
    }
  ]
};
