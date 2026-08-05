/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/4-5-induction
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/4-5-induction/narration';
import { equations } from '../../igcse-src/0625/4-5-induction/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/4-5-induction/kernel';

export const kp45Induction: KnowledgePoint = {
  "id": "igcse-0625-4-5-induction",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "电磁感应与交流发电机",
    "en": "Electromagnetic induction and the a.c. generator"
  },
  "summary": {
    "zh": "静止在线圈里的磁铁不产生任何感应。产生感应的是\"变化\"——这也解释了为何在穿过线圈的磁感线最多的那一瞬间，发电机反而不产生电动势。",
    "en": "A magnet held still inside a coil induces nothing at all. It is the change that induces — which is also why a generator produces no e.m.f. at the very instant the most field lines pass through its coil."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/4.5.1.1",
      "0625/4.5.1.2",
      "0625/4.5.1.3",
      "0625/4.5.1.4",
      "0625/4.5.1.5",
      "0625/4.5.2.1",
      "0625/4.5.2.2"
    ]
  },
  "keywords": {
    "zh": [
      "电磁感应",
      "切割磁感线",
      "滑环",
      "阻碍变化"
    ],
    "en": [
      "electromagnetic induction",
      "cutting field lines",
      "slip rings",
      "opposing the change"
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
          "知道当导体与磁场发生相对运动，或穿过线圈的磁场变化时，会产生感应电动势。",
          "描述一个演示电磁感应的实验。",
          "说出影响感应电动势大小的因素。",
          "知道感应电动势总是阻碍引起它的变化，以及能量守恒为何要求如此。（Extended）",
          "说明并使用力、磁场与感应电流的相对方向。（Extended）",
          "描述简单交流发电机，包括滑环与电刷。（Extended）",
          "画出并解读电动势–时间图像，并将其形状与线圈的位置对应起来。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "静止在线圈里的磁铁不产生任何感应。产生感应的是\"变化\"——这也解释了为何在穿过线圈的磁感线最多的那一瞬间，发电机反而不产生电动势。"
      },
      {
        "type": "formula",
        "latex": "e.m.f. \\propto \\text{rate of cutting field lines}",
        "caption": "IGCSE 阶段不需要代入计算，但这句话是本主题所有题目的依据。切割更快、磁场更强或匝数更多都会增大电动势；没有运动则完全没有。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "electromagnetic induction（电磁感应）：导体相对磁场运动，或穿过它的磁场发生变化时，在导体两端产生电动势的现象。没有变化，就没有电动势。",
          "cutting field lines（切割磁感线）：横切磁感线而不是沿着它们运动。切割磁感线的快慢决定感应电动势的大小。",
          "slip rings（滑环）：两个环，分别接在发电机线圈的两端，各有电刷压在上面。每一端始终连在自己的环上，因此线圈翻转时输出随之反向——从而得到交流电。",
          "opposing the change（阻碍变化）：感应电流的流向总是阻碍产生它的那个变化。若不是这样，运动就会自我加剧，能量将凭空产生。"
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
          "Know that an e.m.f. is induced when a conductor and a magnetic field move relative to one another, or when the field through a coil changes.",
          "Describe an experiment that demonstrates electromagnetic induction.",
          "State the factors that affect the size of an induced e.m.f.",
          "Know that an induced e.m.f. always opposes the change causing it, and why energy demands that. (Extended)",
          "State and use the relative directions of force, field and induced current. (Extended)",
          "Describe a simple a.c. generator, including slip rings and brushes. (Extended)",
          "Sketch and interpret an e.m.f.–time graph and relate its shape to the position of the coil. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "A magnet held still inside a coil induces nothing at all. It is the change that induces — which is also why a generator produces no e.m.f. at the very instant the most field lines pass through its coil."
      },
      {
        "type": "formula",
        "latex": "e.m.f. \\propto \\text{rate of cutting field lines}",
        "caption": "Not a formula to substitute into at IGCSE, but the sentence behind every question on this topic. Faster cutting, stronger field or more turns all raise the e.m.f.; no movement gives none."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "electromagnetic induction (电磁感应): The production of an e.m.f. across a conductor when it moves relative to a magnetic field, or when the field through it changes. No change, no e.m.f.",
          "cutting field lines (切割磁感线): Moving across magnetic field lines rather than along them. The rate at which lines are cut sets the size of the induced e.m.f.",
          "slip rings (滑环): Two rings, one on each end of the generator coil, with brushes pressing on them. Each end stays connected to its own ring, so the output reverses as the coil turns over — giving a.c.",
          "opposing the change (阻碍变化): An induced current always flows so as to oppose whatever produced it. If it did not, movement would build on itself and energy would come from nowhere."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0625-4-5-1-cp1",
      "syllabus": [
        "0625/4.5.1.1",
        "0625/4.5.1.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "A student has a bar magnet, a coil of wire and a sensitive centre-zero meter. Describe an experiment the student could carry out to demonstrate electromagnetic induction, and state what would be observed.",
      "markScheme": [
        {
          "text": "Connect the coil to the meter to form a complete circuit",
          "marks": 1
        },
        {
          "text": "Move the magnet into the coil and observe the meter needle deflect to one side",
          "marks": 1
        },
        {
          "text": "Hold the magnet stationary inside the coil and observe that the needle returns to zero",
          "marks": 1
        },
        {
          "text": "Withdraw the magnet and observe the needle deflect in the opposite direction",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"静止不动\"那一步是有分的，也是最常被漏掉的。正是这一观察说明了单有磁场并不足够。",
        "en": "The stationary step earns a mark and is the one most often left out. It is the observation that shows the field alone is not enough."
      }
    },
    {
      "id": "0625-4-5-1-cp2",
      "syllabus": [
        "0625/4.5.1.3"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 3,
      "stem": "State three changes a student could make to increase the size of the e.m.f. induced in a coil by a moving magnet.",
      "markScheme": [
        {
          "text": "Use a stronger magnet / increase the strength of the magnetic field",
          "marks": 1
        },
        {
          "text": "Increase the number of turns on the coil",
          "marks": 1
        },
        {
          "text": "Move the magnet faster / increase the speed of the relative motion",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要写三个不同的因素。\"移动得更快更远\"只算一个因素，不是两个——距离并不在其中。",
        "en": "Three separate factors are wanted. \"Move it faster and further\" is one factor, not two — distance does not appear."
      }
    },
    {
      "id": "0625-4-5-1-cp3",
      "syllabus": [
        "0625/4.5.1.4"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "The north pole of a magnet is pushed towards one end of a coil. The induced current makes that end of the coil become a north pole, so the magnet is pushed away. Explain why the induced current must flow in this direction rather than the opposite one.",
      "markScheme": [
        {
          "text": "An induced e.m.f. always opposes the change that is producing it",
          "marks": 1
        },
        {
          "text": "Work therefore has to be done against the repulsion to keep pushing the magnet in, and it is this work that is transferred to electrical energy",
          "marks": 1
        },
        {
          "text": "If the coil attracted the magnet instead, the magnet would accelerate by itself and generate ever more current, so energy would be created from nothing — which is impossible",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "得分点在于能量论证，而不是背出规律。只写\"因为楞次定律\"等于把问题重述了一遍。",
        "en": "The mark is for the energy argument, not for quoting the rule. Saying \"because of Lenz's law\" restates the question."
      }
    },
    {
      "id": "0625-4-5-1-cp4",
      "syllabus": [
        "0625/4.5.2.1"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe the structure of a simple a.c. generator and explain the purpose of the slip rings and brushes.",
      "markScheme": [
        {
          "text": "A coil of wire is rotated in a magnetic field, usually between the poles of a permanent magnet",
          "marks": 1
        },
        {
          "text": "Each end of the coil is connected to its own slip ring, and a carbon brush presses against each ring",
          "marks": 1
        },
        {
          "text": "The brushes allow the current to be taken from a coil that is rotating, and because each end stays connected to the same ring throughout, the output reverses each half turn — giving alternating current",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "不要把滑环与换向器混淆。换向器每半圈把连接互换一次，这正是直流电动机工作的原理；滑环从不互换，这正是发电机输出交流的原因。",
        "en": "Do not confuse slip rings with a split-ring commutator. The commutator swaps the connections over each half turn, which is what makes a d.c. motor work; slip rings never swap, which is what makes a generator a.c."
      }
    },
    {
      "id": "0625-4-5-1-cp5",
      "syllabus": [
        "0625/4.5.2.2"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "The e.m.f. produced by an a.c. generator is zero at the instant when the plane of the coil is at right angles to the magnetic field, even though this is the position in which the greatest number of field lines pass through the coil. Explain why the e.m.f. is zero at this instant, and state the position in which it is a maximum.",
      "markScheme": [
        {
          "text": "The induced e.m.f. depends on the rate at which the coil cuts magnetic field lines, not on the number of lines passing through it",
          "marks": 1
        },
        {
          "text": "When the plane of the coil is at right angles to the field, its sides are momentarily moving along the field lines rather than across them, so no lines are cut and the e.m.f. is zero",
          "marks": 1
        },
        {
          "text": "The e.m.f. is a maximum a quarter of a turn later, when the plane of the coil is parallel to the field and its sides are moving directly across the field lines, cutting them at the greatest rate",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "错误答案大多从\"有多少磁感线穿过线圈\"来论证，而那样得到的结论恰好相反。真正起作用的是切割的快慢，两者的最大值相差四分之一圈。",
        "en": "Most wrong answers argue from how many field lines pass through the coil, which gives exactly the opposite answer. It is the rate of cutting that matters, and the two are greatest a quarter of a turn apart."
      }
    },
    {
      "id": "0625-4-5-1-cp6",
      "syllabus": [
        "0625/4.5.1.5"
      ],
      "tier": "supplement",
      "commandWord": "Determine",
      "marks": 2,
      "stem": "A straight wire is moved vertically downwards between the poles of a magnet, where the magnetic field points horizontally from north to south. Determine the direction of the induced current in the wire, and state what would happen to it if the wire were moved upwards instead.",
      "markScheme": [
        {
          "text": "The induced current flows along the wire, at right angles to both the field and the direction of motion — obtained by applying the right-hand rule with the first finger along the field, the thumb along the motion and the second finger giving the current",
          "marks": 1
        },
        {
          "text": "Reversing the motion reverses the direction of the induced current",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "磁场、运动与电流三者互相垂直。反转运动或反转磁场都会使电流反向；两者同时反转则电流不变。",
        "en": "Field, motion and current are mutually at right angles. Reversing either the motion or the field reverses the current; reversing both leaves it unchanged."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "turns",
        "label": {
          "zh": "线圈匝数",
          "en": "Turns on the coil"
        },
        "min": 1,
        "max": 200,
        "step": 1,
        "defaultValue": 50,
        "unit": ""
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
        "key": "frequency",
        "label": {
          "zh": "每秒转数",
          "en": "Rotations per second"
        },
        "min": 0,
        "max": 5,
        "step": 0.5,
        "defaultValue": 1,
        "unit": "Hz"
      },
      {
        "key": "angle",
        "label": {
          "zh": "线圈转角",
          "en": "Angle of the coil"
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
        "kernel": "4-5-induction",
        "hint": {
          "en": "Watch the two readouts together as you turn the coil. The e.m.f. is zero exactly when the field through the coil is greatest.",
          "zh": "转动线圈时同时留意两个读数。恰恰在穿过线圈的磁场最强时，电动势为零。"
        },
        "params": [
          {
            "key": "turns",
            "label": {
              "en": "Turns on the coil",
              "zh": "线圈匝数"
            },
            "unit": "",
            "min": 1,
            "max": 200,
            "step": 1,
            "default": 50
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
            "key": "frequency",
            "label": {
              "en": "Rotations per second",
              "zh": "每秒转数"
            },
            "unit": "Hz",
            "min": 0,
            "max": 5,
            "step": 0.5,
            "default": 1
          },
          {
            "key": "angle",
            "label": {
              "en": "Angle of the coil",
              "zh": "线圈转角"
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
            "key": "emfNow",
            "label": {
              "en": "E.m.f. at this angle",
              "zh": "此角度下的电动势"
            },
            "unit": "V",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "peak",
            "label": {
              "en": "Peak e.m.f.",
              "zh": "峰值电动势"
            },
            "unit": "V",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "fieldThroughCoil",
            "label": {
              "en": "Field passing through the coil",
              "zh": "穿过线圈的磁场"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "turns",
            "label": {
              "en": "Turns",
              "zh": "匝数"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Coil edge-on — no field through it, peak e.m.f.",
              "zh": "线圈侧对磁场——无磁场穿过，电动势最大"
            },
            "params": {
              "turns": 50,
              "fieldStrength": 1,
              "frequency": 1,
              "angle": 90
            }
          },
          {
            "label": {
              "en": "Coil face-on — most field through it, zero e.m.f.",
              "zh": "线圈正对磁场——穿过最多，电动势为零"
            },
            "params": {
              "turns": 50,
              "fieldStrength": 1,
              "frequency": 1,
              "angle": 0
            }
          },
          {
            "label": {
              "en": "Half a turn later — reversed",
              "zh": "再转半圈——方向反转"
            },
            "params": {
              "turns": 50,
              "fieldStrength": 1,
              "frequency": 1,
              "angle": 270
            }
          },
          {
            "label": {
              "en": "Strong field, many turns, not turning",
              "zh": "强磁场、多匝数、不转动"
            },
            "params": {
              "turns": 200,
              "fieldStrength": 3,
              "frequency": 0,
              "angle": 90
            }
          },
          {
            "label": {
              "en": "Turning fast",
              "zh": "快速转动"
            },
            "params": {
              "turns": 50,
              "fieldStrength": 1,
              "frequency": 4,
              "angle": 90
            }
          },
          {
            "label": {
              "en": "More turns on the coil",
              "zh": "增加线圈匝数"
            },
            "params": {
              "turns": 150,
              "fieldStrength": 1,
              "frequency": 1,
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
        "zh": "线圈侧对磁场——无磁场穿过，电动势最大",
        "en": "Coil edge-on — no field through it, peak e.m.f."
      },
      "params": {
        "turns": 50,
        "fieldStrength": 1,
        "frequency": 1,
        "angle": 90
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "线圈正对磁场——穿过最多，电动势为零",
        "en": "Coil face-on — most field through it, zero e.m.f."
      },
      "params": {
        "turns": 50,
        "fieldStrength": 1,
        "frequency": 1,
        "angle": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "再转半圈——方向反转",
        "en": "Half a turn later — reversed"
      },
      "params": {
        "turns": 50,
        "fieldStrength": 1,
        "frequency": 1,
        "angle": 270
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "强磁场、多匝数、不转动",
        "en": "Strong field, many turns, not turning"
      },
      "params": {
        "turns": 200,
        "fieldStrength": 3,
        "frequency": 0,
        "angle": 90
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "快速转动",
        "en": "Turning fast"
      },
      "params": {
        "turns": 50,
        "fieldStrength": 1,
        "frequency": 4,
        "angle": 90
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "增加线圈匝数",
        "en": "More turns on the coil"
      },
      "params": {
        "turns": 150,
        "fieldStrength": 1,
        "frequency": 1,
        "angle": 90
      }
    }
  ]
};
