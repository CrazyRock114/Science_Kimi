/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-5-motor
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/4-5-motor/narration';
import { equations } from '../../igcse-src/0625/4-5-motor/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/4-5-motor/kernel';

export const kp45Motor: KnowledgePoint = {
  "id": "igcse-0625-4-5-motor",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "电流的磁效应与直流电动机",
    "en": "The magnetic effect of a current and the d.c. motor"
  },
  "summary": {
    "zh": "没有换向器，电动机线圈前半圈被向前推，后半圈就被往回推。并排的两条曲线让换向器的真正作用一目了然。",
    "en": "Without a commutator a motor coil is pushed forwards for half a turn and backwards for the next. Two curves side by side show what the split ring is actually for."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/4.5.3.2",
      "0625/4.5.3.3",
      "0625/4.5.3.4",
      "0625/4.5.3.5",
      "0625/4.5.4.1",
      "0625/4.5.4.2",
      "0625/4.5.4.3",
      "0625/4.5.5.1",
      "0625/4.5.5.2"
    ]
  },
  "keywords": {
    "zh": [
      "螺线管",
      "继电器",
      "左手定则",
      "换向器"
    ],
    "en": [
      "solenoid",
      "relay",
      "Fleming's left-hand rule",
      "split-ring commutator"
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
          "描述确定直导线与螺线管周围磁场分布的实验。",
          "说明电流的磁效应在继电器与扬声器中的应用。",
          "说明直导线与螺线管周围磁场强弱的变化，以及改变电流对磁场的影响。（Extended）",
          "描述显示通电导体受力的实验，包括反转电流与磁场的效果。",
          "使用力、磁场与电流的相对方向，并将其应用于带电粒子束。（Extended）",
          "知道磁场中通电线圈会转动，以及哪些因素能增强转动效果。",
          "描述直流电动机的工作原理，包括换向器与电刷。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "由此造出的两样东西"
      },
      {
        "type": "paragraph",
        "text": "继电器是由电磁铁带动的开关。线圈中的小电流使软铁芯磁化，铁芯吸引衔铁，衔铁闭合另一对触点。于是一个安全的小电流控制了一个危险的大电流——汽车起动机要取用几百安培，你不会希望这样的电流通过手里的点火开关。"
      },
      {
        "type": "paragraph",
        "text": "扬声器把变化的电流变成声音。线圈置于永磁体的磁隙中，并与纸盆相连。放大器送来的电流不断变化，线圈受到的力随之变化，纸盆被来回推动——推动空气，产生频率相同的声波。"
      },
      {
        "type": "paragraph",
        "text": "注意扬声器依赖于什么。如果电流反向，力也必须反向，否则纸盆只能朝一个方向被推，根本不会发出声音。磁场中电流所受的这个力，正是接下来要弄清的。"
      },
      {
        "type": "heading",
        "text": "两个磁场，相互推挤"
      },
      {
        "type": "paragraph",
        "text": "把一根硬导线松松地架在磁铁两极之间的两条导轨上，接通电源。导线会向侧面跳出。把电流反向，它向相反方向跳。把磁铁掉转使磁场反向，它又向另一方向跳。两者同时反向，它就回到最初的方向。"
      },
      {
        "type": "paragraph",
        "text": "之所以有力，是因为导线本身有环形磁场，而它又处在磁铁的磁场之中。在导线的一侧两个磁场方向相同而叠加；另一侧方向相反而抵消。结果是一侧磁场强、另一侧弱，导线被从强的一侧推向弱的一侧。这常被画成\"弹弓磁场\"，这个比喻是恰当的。"
      },
      {
        "type": "paragraph",
        "text": "力、磁场与电流三者互相垂直，左手定则能理清它们的对应关系。食指：磁场，由 N 指向 S。中指：常规电流。拇指：力，也就是运动方向。把三指像盒子的一角那样互相垂直地伸开。"
      },
      {
        "type": "paragraph",
        "text": "同一定则也适用于真空中的带电粒子束，因为运动的电荷就是电流。但要注意符号。向右运动的电子束，其常规电流方向向左，所以中指要指向与束流相反的方向。弄错这一点，偏转方向就会完全相反——这是本主题最常见的失误。"
      },
      {
        "type": "formula",
        "latex": "\\text{turning effect} \\propto N B I",
        "caption": "IGCSE 阶段不需要代入计算，但题目要你改变的正是这三样。更多匝数、更强磁场或更大电流，都会让线圈转得更有力。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "solenoid（螺线管）：绕成长筒的线圈。内部沿轴向的磁场很强且几乎均匀；外部磁场则与条形磁铁的相似。",
          "relay（继电器）：由电磁铁带动的开关，使很小的安全电流能够接通大得多的电流。",
          "Fleming's left-hand rule（左手定则）：食指指磁场（由 N 到 S），中指指常规电流，拇指指力。三者互相垂直。",
          "split-ring commutator（换向器）：切成两个半环的环，分别接电动机线圈的两端。它每半圈使线圈中的电流反向一次，从而使转动效果不会反向。"
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
          "Describe experiments that identify the field patterns around a straight wire and a solenoid.",
          "Describe how the magnetic effect of a current is used in a relay and in a loudspeaker.",
          "State how the field strength varies around a straight wire and a solenoid, and what changing the current does to it. (Extended)",
          "Describe an experiment showing the force on a current-carrying conductor, including the effect of reversing the current and the field.",
          "Use the relative directions of force, magnetic field and current, and apply them to beams of charged particles. (Extended)",
          "Know that a current-carrying coil in a field turns, and what increases the turning effect.",
          "Describe how a d.c. motor works, including the split-ring commutator and brushes. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Two things built on that"
      },
      {
        "type": "paragraph",
        "text": "A relay is a switch worked by an electromagnet. A small current through the coil magnetises a soft iron core, which attracts an iron armature, and the armature closes a second pair of contacts. So a small, safe current switches a large, dangerous one — a car starter motor draws hundreds of amps, and you would not want that running through the ignition switch in your hand."
      },
      {
        "type": "paragraph",
        "text": "A loudspeaker turns a varying current into sound. A coil sits in the gap of a permanent magnet and is attached to a paper cone. The current from the amplifier varies, the force on the coil varies with it, and the cone is pushed in and out — pushing the air and making a sound wave of the same frequency."
      },
      {
        "type": "paragraph",
        "text": "Notice what the loudspeaker depends on. If the current reverses, the force must reverse too, or the cone could only ever be pushed one way and there would be no sound at all. That force on a current in a field is the next thing to pin down."
      },
      {
        "type": "heading",
        "text": "Two fields, pushing"
      },
      {
        "type": "paragraph",
        "text": "Lay a stiff wire loosely across two rails between the poles of a magnet, and switch on. The wire jumps out sideways. Reverse the current and it jumps the other way. Turn the magnet round so the field is reversed and it jumps the other way again. Reverse both, and it goes back to the first direction."
      },
      {
        "type": "paragraph",
        "text": "The force is there because the wire has its own circular field, and it is sitting in the magnet's field. On one side of the wire the two fields point the same way and add; on the other they oppose and cancel. The result is a stronger field on one side than the other, and the wire is pushed from the strong side to the weak. It is often drawn as a catapult field, and that is a fair picture of it."
      },
      {
        "type": "paragraph",
        "text": "Force, field and current are mutually at right angles, and Fleming's left-hand rule sorts out which is which. First finger: field, north to south. Second finger: conventional current. Thumb: the force, and therefore the motion. Hold them at right angles like the corner of a box."
      },
      {
        "type": "paragraph",
        "text": "The same rule works on a beam of charged particles in a vacuum, because a moving charge is a current. But watch the sign. A beam of electrons travelling to the right is a conventional current to the left, so your second finger points against the beam. Get that wrong and you will deflect the beam exactly the wrong way — it is the single most common slip on this topic."
      },
      {
        "type": "formula",
        "latex": "\\text{turning effect} \\propto N B I",
        "caption": "Not a formula to substitute into at IGCSE, but the three things a question will ask you to change. More turns, a stronger field or a bigger current all make the coil turn harder."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "solenoid (螺线管): A long coil of wire. The field inside is strong and nearly uniform along the axis; outside it looks like the field of a bar magnet.",
          "relay (继电器): A switch worked by an electromagnet, so that a small safe current can switch on a much larger one.",
          "Fleming's left-hand rule (左手定则): First finger field (N to S), second finger conventional current, thumb force. The three are mutually at right angles.",
          "split-ring commutator (换向器): A ring cut into two halves, one on each end of the motor coil. It reverses the current through the coil every half turn, so the turning effect never reverses."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0625-4-5-5-cp1",
      "syllabus": [
        "0625/4.5.3.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "A vertical wire passes through a horizontal sheet of card. Describe how a student could use this apparatus to find both the shape and the direction of the magnetic field around the wire.",
      "markScheme": [
        {
          "text": "Pass a large current through the wire",
          "marks": 1
        },
        {
          "text": "Sprinkle iron filings on the card and tap it gently; the filings settle into concentric circles centred on the wire, showing the shape of the field",
          "marks": 1
        },
        {
          "text": "Place a plotting compass on the card at several points around the wire",
          "marks": 1
        },
        {
          "text": "Record the direction the needle points at each position; this gives the direction of the field, which reverses if the current is reversed",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "铁屑只能显示形状，不能显示方向——它们没有 N 极。若题目还问方向，答案中就必须出现小磁针。",
        "en": "Iron filings give the shape but never the direction — they have no north end. If the question asks for direction as well, a compass has to appear somewhere in the answer."
      }
    },
    {
      "id": "0625-4-5-5-cp2",
      "syllabus": [
        "0625/4.5.3.3"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "The starter motor of a car draws a current of about 200 A. It is switched on by a relay rather than directly by the ignition switch. Explain how the relay works and why one is used.",
      "markScheme": [
        {
          "text": "A small current through the relay coil magnetises a soft iron core, which attracts an iron armature",
          "marks": 1
        },
        {
          "text": "The armature closes a second pair of contacts, completing the high-current circuit to the starter motor",
          "marks": 1
        },
        {
          "text": "This means only a small, safe current has to pass through the ignition switch and the wiring in the cabin; a 200 A current there would need very thick cable and would be dangerous",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这里涉及两个电路，答案必须把它们区分开：一个是起控制作用的小电流回路，一个是真正做功的大电流回路。",
        "en": "Two circuits are involved and the answer has to keep them apart: a small one that does the controlling, and a large one that does the work."
      }
    },
    {
      "id": "0625-4-5-5-cp3",
      "syllabus": [
        "0625/4.5.3.4",
        "0625/4.5.3.5"
      ],
      "tier": "supplement",
      "commandWord": "State",
      "marks": 3,
      "stem": "State how the strength of the magnetic field around a long straight current-carrying wire varies with distance from the wire, and state the effect on the field pattern of (i) doubling the current and (ii) reversing the current.",
      "markScheme": [
        {
          "text": "The field is strongest close to the wire and becomes weaker with distance from it",
          "marks": 1
        },
        {
          "text": "Doubling the current makes the field stronger everywhere / doubles the field strength at any point",
          "marks": 1
        },
        {
          "text": "Reversing the current leaves the shape of the pattern unchanged but reverses the direction of the field everywhere",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "电流反向不会改变图样的形状。同心圆还是同心圆，只是上面的箭头掉转方向。",
        "en": "Reversing the current does not change the shape of the pattern. The circles stay circles; only the arrows on them turn round."
      }
    },
    {
      "id": "0625-4-5-5-cp4",
      "syllabus": [
        "0625/4.5.4.1"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe an experiment that shows there is a force on a current-carrying conductor in a magnetic field, and describe what is observed when the current is reversed and when the magnetic field is reversed.",
      "markScheme": [
        {
          "text": "Rest a stiff wire loosely across two horizontal rails between the poles of a magnet, connected to a power supply, so that the wire is free to move",
          "marks": 1
        },
        {
          "text": "When the current is switched on, the wire moves sideways, at right angles to both the current and the field",
          "marks": 1
        },
        {
          "text": "Reversing the current reverses the direction of the movement, and reversing the field also reverses it; reversing both together gives the original direction again",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "导线必须能自由移动，最后一分需要写出两种反向情况。两者同时反向会使运动方向回到最初，值得写上。",
        "en": "The wire must be free to move, and the last mark needs both reversals. Reversing both at once returns the motion to its original direction, which is worth stating."
      }
    },
    {
      "id": "0625-4-5-5-cp5",
      "syllabus": [
        "0625/4.5.4.3"
      ],
      "tier": "supplement",
      "commandWord": "Determine",
      "marks": 3,
      "stem": "A narrow beam of electrons travels horizontally from left to right across a page. A magnetic field is directed into the page. Determine the direction in which the beam is deflected, and explain how you obtained your answer.",
      "markScheme": [
        {
          "text": "The electrons are negative, so the conventional current is from right to left — opposite to the direction the beam is travelling",
          "marks": 1
        },
        {
          "text": "Applying Fleming's left-hand rule with the first finger into the page and the second finger pointing from right to left",
          "marks": 1
        },
        {
          "text": "gives a force, and therefore a deflection, downwards",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "整道题的关键在于符号。若把中指顺着束流方向而不是逆着它，后面每一步都对，答案却正好颠倒。",
        "en": "The whole question turns on the sign. Point your second finger along the beam instead of against it and every subsequent step is right while the answer is upside down."
      }
    },
    {
      "id": "0625-4-5-5-cp6",
      "syllabus": [
        "0625/4.5.5.1",
        "0625/4.5.5.2"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "A simple d.c. motor consists of a coil in a magnetic field connected to a supply through a split-ring commutator and two brushes. Explain why the coil turns, and explain why it would fail to rotate continuously if the split ring were replaced by two slip rings.",
      "markScheme": [
        {
          "text": "The current runs in opposite directions along the two sides of the coil, so the forces on them are in opposite directions — one up, one down",
          "marks": 1
        },
        {
          "text": "These two opposite forces on either side of the axis produce a turning effect, so the coil rotates",
          "marks": 1
        },
        {
          "text": "After half a turn the two sides have swapped over, so with slip rings the forces would now turn the coil the opposite way and it would rock back and forth instead of rotating",
          "marks": 1
        },
        {
          "text": "The split ring reverses the current through the coil every half turn, at the moment when the plane of the coil is at right angles to the field and the turning effect is momentarily zero, so the turning effect is always in the same sense",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "只写换向器\"使电流反向\"是不够的。得分点在于说明没有它会出什么问题：两条边互换了位置，所以电流也必须跟着换。",
        "en": "It is not enough to say the commutator \"reverses the current\". The mark is for saying what would go wrong without it: the sides swap over, so the current has to swap over too."
      }
    },
    {
      "id": "0625-4-5-5-cp7",
      "syllabus": [
        "0625/4.5.4.2"
      ],
      "tier": "supplement",
      "commandWord": "State",
      "marks": 2,
      "stem": "A horizontal wire carries a conventional current towards the north. It lies in a magnetic field directed vertically downwards. State the direction of the force on the wire and state the rule you used.",
      "markScheme": [
        {
          "text": "The force is horizontal and directed towards the west",
          "marks": 1
        },
        {
          "text": "Fleming's left-hand rule: first finger along the field (downwards), second finger along the conventional current (north), thumb gives the force",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "电动机效应用左手，电磁感应用右手。用错手会得到完全相反的答案，而推理过程看上去毫无破绽。",
        "en": "Left hand for the motor effect, right hand for induction. Using the wrong hand gives an answer that is exactly reversed and looks perfectly reasoned."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "current",
        "label": {
          "zh": "线圈中的电流",
          "en": "Current in the coil"
        },
        "min": 0,
        "max": 10,
        "step": 0.5,
        "defaultValue": 2,
        "unit": "A"
      },
      {
        "key": "fieldStrength",
        "label": {
          "zh": "磁场强度",
          "en": "Strength of the field"
        },
        "min": 0,
        "max": 3,
        "step": 0.1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "turns",
        "label": {
          "zh": "线圈匝数",
          "en": "Turns on the coil"
        },
        "min": 1,
        "max": 100,
        "step": 1,
        "defaultValue": 20,
        "unit": ""
      },
      {
        "key": "angle",
        "label": {
          "zh": "已转过的角度",
          "en": "Angle turned"
        },
        "min": 0,
        "max": 360,
        "step": 5,
        "defaultValue": 90,
        "unit": "°"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "4-5-motor",
        "hint": {
          "en": "Compare the two curves over a full turn. The lower one goes negative — that is a motor with no commutator, being pushed back the way it came.",
          "zh": "在整整一圈上比较两条曲线。下面那条会变成负值——那是没有换向器的电动机，正被推回原路。"
        },
        "params": [
          {
            "key": "current",
            "label": {
              "en": "Current in the coil",
              "zh": "线圈中的电流"
            },
            "unit": "A",
            "min": 0,
            "max": 10,
            "step": 0.5,
            "default": 2
          },
          {
            "key": "fieldStrength",
            "label": {
              "en": "Strength of the field",
              "zh": "磁场强度"
            },
            "unit": "",
            "min": 0,
            "max": 3,
            "step": 0.1,
            "default": 1
          },
          {
            "key": "turns",
            "label": {
              "en": "Turns on the coil",
              "zh": "线圈匝数"
            },
            "unit": "",
            "min": 1,
            "max": 100,
            "step": 1,
            "default": 20
          },
          {
            "key": "angle",
            "label": {
              "en": "Angle turned",
              "zh": "已转过的角度"
            },
            "unit": "°",
            "min": 0,
            "max": 360,
            "step": 5,
            "default": 90
          }
        ],
        "readouts": [
          {
            "key": "forceOnSide",
            "label": {
              "en": "Force on each side",
              "zh": "每条边所受的力"
            },
            "unit": "N",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "turningNow",
            "label": {
              "en": "Turning effect now",
              "zh": "当前的转动效果"
            },
            "unit": "N cm",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "turningNoCommutator",
            "label": {
              "en": "Turning effect with no commutator",
              "zh": "无换向器时的转动效果"
            },
            "unit": "N cm",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "peakTurning",
            "label": {
              "en": "Greatest turning effect",
              "zh": "最大转动效果"
            },
            "unit": "N cm",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Coil edge-on — greatest turning effect",
              "zh": "线圈侧对磁场——转动效果最大"
            },
            "params": {
              "current": 2,
              "fieldStrength": 1,
              "turns": 20,
              "angle": 90
            }
          },
          {
            "label": {
              "en": "The dead point, where the ring changes over",
              "zh": "死点，换向器在此换接"
            },
            "params": {
              "current": 2,
              "fieldStrength": 1,
              "turns": 20,
              "angle": 0
            }
          },
          {
            "label": {
              "en": "Second half turn — pushed backwards without a ring",
              "zh": "后半圈——无换向器时被往回推"
            },
            "params": {
              "current": 2,
              "fieldStrength": 1,
              "turns": 20,
              "angle": 225
            }
          },
          {
            "label": {
              "en": "A more powerful motor",
              "zh": "更有力的电动机"
            },
            "params": {
              "current": 6,
              "fieldStrength": 2,
              "turns": 60,
              "angle": 90
            }
          },
          {
            "label": {
              "en": "No current at all",
              "zh": "完全没有电流"
            },
            "params": {
              "current": 0,
              "fieldStrength": 3,
              "turns": 100,
              "angle": 90
            }
          },
          {
            "label": {
              "en": "No field at all",
              "zh": "完全没有磁场"
            },
            "params": {
              "current": 10,
              "fieldStrength": 0,
              "turns": 100,
              "angle": 90
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
        "zh": "线圈侧对磁场——转动效果最大",
        "en": "Coil edge-on — greatest turning effect"
      },
      "params": {
        "current": 2,
        "fieldStrength": 1,
        "turns": 20,
        "angle": 90
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "死点，换向器在此换接",
        "en": "The dead point, where the ring changes over"
      },
      "params": {
        "current": 2,
        "fieldStrength": 1,
        "turns": 20,
        "angle": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "后半圈——无换向器时被往回推",
        "en": "Second half turn — pushed backwards without a ring"
      },
      "params": {
        "current": 2,
        "fieldStrength": 1,
        "turns": 20,
        "angle": 225
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "更有力的电动机",
        "en": "A more powerful motor"
      },
      "params": {
        "current": 6,
        "fieldStrength": 2,
        "turns": 60,
        "angle": 90
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "完全没有电流",
        "en": "No current at all"
      },
      "params": {
        "current": 0,
        "fieldStrength": 3,
        "turns": 100,
        "angle": 90
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "完全没有磁场",
        "en": "No field at all"
      },
      "params": {
        "current": 10,
        "fieldStrength": 0,
        "turns": 100,
        "angle": 90
      }
    }
  ]
};
