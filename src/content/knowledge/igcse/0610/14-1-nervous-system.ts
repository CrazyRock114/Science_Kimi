/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/14-1-nervous-system
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/14-1-nervous-system/narration';
import { equations } from '../../igcse-src/0610/14-1-nervous-system/equations';
import kernel from '../../../../simulations/igcse-kernels/0610/14-1-nervous-system/kernel';

export const kp141NervousSystem: KnowledgePoint = {
  "id": "igcse-0610-14-1-nervous-system",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "神经系统与眼",
    "en": "The nervous system and the eye"
  },
  "summary": {
    "zh": "在你意识到烫之前，手已经离开了热盘，因为脉冲根本没有传到大脑。反射之所以快，恰恰就是它之所以\"笨\"的原因。",
    "en": "Your hand is off the hotplate before you know it was hot, because the impulse never went to the brain. A reflex is fast for exactly the reason it is stupid."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/14.1.1",
      "0610/14.1.2",
      "0610/14.1.3",
      "0610/14.1.4",
      "0610/14.1.5",
      "0610/14.1.6",
      "0610/14.1.7",
      "0610/14.1.8",
      "0610/14.1.9",
      "0610/14.1.10",
      "0610/14.2.1",
      "0610/14.2.2",
      "0610/14.2.3",
      "0610/14.2.4",
      "0610/14.2.5",
      "0610/14.2.6",
      "0610/14.2.7",
      "0610/14.2.8",
      "0610/14.2.9"
    ]
  },
  "keywords": {
    "zh": [
      "反射",
      "突触",
      "神经递质",
      "（视觉）调节",
      "中央凹",
      "拮抗肌"
    ],
    "en": [
      "reflex action",
      "synapse",
      "neurotransmitter",
      "accommodation",
      "fovea",
      "antagonistic muscles"
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
          "把哺乳动物神经系统描述为中枢神经系统与外周神经，并说明其在协调中的作用。",
          "识别感觉、中间与运动神经元，并描述简单的反射弧。",
          "描述突触的结构及其处发生的过程，并解释脉冲为何只能单向传导。（Extended）",
          "识别眼的结构并描述各部分的功能。",
          "解释瞳孔反射，包括环行肌与辐射肌的拮抗作用。（Extended）",
          "解释看近物与远物时的调节。（Extended）",
          "描述视杆细胞与视锥细胞的分布与功能，并识别中央凹。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "在你意识到烫之前，手已经离开了热盘，因为脉冲根本没有传到大脑。反射之所以快，恰恰就是它之所以\"笨\"的原因。"
      },
      {
        "type": "formula",
        "latex": "P = \\dfrac{1}{v} + \\dfrac{1}{u}",
        "caption": "晶状体所需的屈光力，其中 v 是到视网膜的距离、u 是到物体的距离，单位均为米。眼睛无法改变 v，因此 u 的每一次变化都必须由晶状体来应对。"
      },
      {
        "type": "formula",
        "latex": "I_{\\text{retina}} \\;\\propto\\; I \\times \\pi r^{2}",
        "caption": "到达视网膜的光取决于瞳孔的面积而非宽度。直径减半，光量降为四分之一——这也正是该反射最多只能改变 16 倍的原因。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "reflex action（反射）：一种自动、迅速、无需有意识决定的反应。它之所以快，是因为脉冲在脊髓折返，而不去大脑。",
          "synapse（突触）：两个神经元之间的连接处。脉冲无法以电的形式跨过缝隙，因此由神经递质以化学方式把它传过去。",
          "neurotransmitter（神经递质）：由突触一侧的小泡释放的化学物质。它扩散过去，与另一侧的受体结合，引发新的脉冲。",
          "accommodation（（视觉）调节）：改变晶状体的形状，以看清不同距离的物体。之所以必要，是因为视网膜无法移动。",
          "fovea（中央凹）：视网膜上正对瞳孔的部位，密布视锥细胞而几乎没有视杆细胞。它提供最清晰、色彩最丰富的视觉。",
          "antagonistic muscles（拮抗肌）：一对方向相反的肌肉，一块收缩时另一块必须舒张。虹膜的环行肌与辐射肌就是这样一对。"
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
          "Describe the mammalian nervous system as the central nervous system and peripheral nerves, and its role in coordination.",
          "Identify sensory, relay and motor neurones, and describe a simple reflex arc.",
          "Describe the structure of a synapse and the events at it, and explain why impulses travel one way only. (Extended)",
          "Identify the structures of the eye and describe the function of each.",
          "Explain the pupil reflex, including the antagonistic circular and radial muscles. (Extended)",
          "Explain accommodation for near and distant objects. (Extended)",
          "Describe the distribution and functions of rods and cones, and identify the fovea. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Your hand is off the hotplate before you know it was hot, because the impulse never went to the brain. A reflex is fast for exactly the reason it is stupid."
      },
      {
        "type": "formula",
        "latex": "P = \\dfrac{1}{v} + \\dfrac{1}{u}",
        "caption": "The power the lens must have, with v the distance to the retina and u the distance to the object, both in metres. The eye cannot change v, so every change in u must be met by the lens."
      },
      {
        "type": "formula",
        "latex": "I_{\\text{retina}} \\;\\propto\\; I \\times \\pi r^{2}",
        "caption": "Light reaching the retina depends on the area of the pupil, not its width. Halving the diameter quarters the light — which is also why the reflex can only ever change it sixteenfold."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "reflex action (反射): An automatic, rapid response that is not consciously decided on. Fast because the impulse turns round at the spinal cord instead of going to the brain.",
          "synapse (突触): The junction between two neurones. The impulse cannot cross the gap electrically, so a neurotransmitter carries it across chemically.",
          "neurotransmitter (神经递质): The chemical released from vesicles on one side of a synapse. It diffuses across, binds to receptors on the other side, and starts a new impulse.",
          "accommodation (（视觉）调节): Changing the shape of the lens to focus on objects at different distances. Necessary because the retina cannot move.",
          "fovea (中央凹): The part of the retina directly opposite the pupil, packed with cones and almost free of rods. It gives the sharpest, most colourful vision.",
          "antagonistic muscles (拮抗肌): A pair that pull in opposite directions, so one must relax as the other contracts. The circular and radial muscles of the iris are a pair."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-14-1-cp1",
      "syllabus": [
        "0610/14.1.5",
        "0610/14.1.6"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "A person touches a hot object and immediately pulls their hand away. Describe the pathway taken by the impulses, naming the structures involved in order.",
      "markScheme": [
        {
          "text": "A receptor in the skin detects the stimulus (the heat)",
          "marks": 1
        },
        {
          "text": "A sensory neurone carries impulses to the spinal cord",
          "marks": 1
        },
        {
          "text": "A relay neurone in the spinal cord passes them to a motor neurone",
          "marks": 1
        },
        {
          "text": "The motor neurone carries impulses to the effector — a muscle in the arm — which contracts and moves the hand away",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "顺序本身就是答案。也不要让它经过大脑：脉冲在脊髓折返，这正是为什么反应比疼痛的感觉更快。",
        "en": "The order is the answer. And do not route it through the brain: the impulse turns round at the spinal cord, which is why the response beats the sensation of pain."
      }
    },
    {
      "id": "0610-14-1-cp2",
      "syllabus": [
        "0610/14.1.8",
        "0610/14.1.9",
        "0610/14.1.10"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain how an impulse crosses a synapse, and why it can only travel in one direction across it.",
      "markScheme": [
        {
          "text": "The impulse causes vesicles in the first neurone to release a neurotransmitter into the gap",
          "marks": 1
        },
        {
          "text": "The neurotransmitter diffuses across the synaptic gap",
          "marks": 1
        },
        {
          "text": "It binds to receptor proteins on the second neurone and triggers a new impulse in it",
          "marks": 1
        },
        {
          "text": "The vesicles are only in the first neurone and the receptors only on the second, so transmission is possible in one direction only",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"单向\"这一分取决于同时说出两处不对称——小泡在一侧、受体在另一侧。写\"因为神经元就是朝那个方向的\"不算解释。",
        "en": "The one-way mark depends on naming both asymmetries — vesicles on one side, receptors on the other. \"Because that is the way the neurone points\" is not an explanation."
      }
    },
    {
      "id": "0610-14-1-cp3",
      "syllabus": [
        "0610/14.2.4",
        "0610/14.2.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain what happens to the iris and the pupil when a person walks from a dim room into bright sunlight, and why this response is useful.",
      "markScheme": [
        {
          "text": "The circular muscles of the iris contract and the radial muscles relax",
          "marks": 1
        },
        {
          "text": "The pupil constricts, so less light enters the eye",
          "marks": 1
        },
        {
          "text": "This protects the retina from being damaged by very bright light",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两组肌肉要写在同一句里——它们是拮抗的，只说一组只答了一半。另外，瞳孔是一个孔：它本身不会收缩。",
        "en": "Both muscle sets, in the same sentence — they are antagonistic, so naming one without the other is half an answer. And the pupil is a hole: it cannot itself contract."
      }
    },
    {
      "id": "0610-14-1-cp4",
      "syllabus": [
        "0610/14.2.6"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "Describe what happens in the eye when a person looks up from a book to a distant object.",
      "markScheme": [
        {
          "text": "The ciliary muscles relax",
          "marks": 1
        },
        {
          "text": "The suspensory ligaments are pulled tight",
          "marks": 1
        },
        {
          "text": "The lens is pulled thinner, so its power decreases and its focal length increases",
          "marks": 1
        },
        {
          "text": "Light from the distant object is brought to a focus on the retina rather than in front of it",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这是最常被写反的一句。睫状肌是一个环：收缩会使其直径变小，从而使悬韧带*松弛*；舒张则让环变宽，把韧带拉紧。",
        "en": "This is the sentence most often reversed. The ciliary muscle is a ring: contracting it makes its diameter smaller and *slackens* the ligaments. Relaxing it lets the ring widen and pulls them tight."
      }
    },
    {
      "id": "0610-14-1-cp5",
      "syllabus": [
        "0610/14.2.7",
        "0610/14.2.8",
        "0610/14.2.9"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 3,
      "stem": "An astronomer looking at a very faint star finds that it disappears when they look directly at it, but is visible when they look slightly to one side. Suggest an explanation.",
      "markScheme": [
        {
          "text": "Looking directly at the star focuses its image on the fovea",
          "marks": 1
        },
        {
          "text": "The fovea contains almost only cones, and cones need bright light to respond",
          "marks": 1
        },
        {
          "text": "Looking to one side focuses the image on a part of the retina rich in rods, which do respond in dim light",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "把三个事实组织成一条论证：像落在哪里、那里有什么细胞、这类细胞能做什么。只罗列视杆与视锥的区别而不加以应用，最多得一分。",
        "en": "Three facts assembled into an argument: where the image lands, what is there, and what that cell type can do. Listing the differences between rods and cones without applying them scores one at most."
      }
    },
    {
      "id": "0610-14-1-cp6",
      "syllabus": [
        "0610/14.1.4"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 2,
      "stem": "State the function of a sensory neurone and the function of a motor neurone.",
      "markScheme": [
        {
          "text": "A sensory neurone carries impulses from a receptor to the central nervous system",
          "marks": 1
        },
        {
          "text": "A motor neurone carries impulses from the central nervous system to an effector (a muscle or a gland)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要写出方向和两端。写\"它感受事物\"描述的是感受器而不是神经元，不得分。",
        "en": "Give the direction and both ends. \"It senses things\" describes the receptor, not the neurone, and earns nothing."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "light",
        "label": {
          "zh": "光照强度",
          "en": "Light intensity"
        },
        "min": 0,
        "max": 100,
        "step": 0.5,
        "defaultValue": 50,
        "unit": "%"
      },
      {
        "key": "distance",
        "label": {
          "zh": "到物体的距离",
          "en": "Distance to the object"
        },
        "min": 5,
        "max": 300,
        "step": 5,
        "defaultValue": 100,
        "unit": "cm"
      },
      {
        "key": "reflex",
        "label": {
          "zh": "虹膜肌肉的功能",
          "en": "Iris muscles working"
        },
        "min": 0,
        "max": 100,
        "step": 5,
        "defaultValue": 100,
        "unit": "%"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "14-1-nervous-system",
        "hint": {
          "en": "Take the light from almost nothing to full daylight and watch both readings — the pupil, and what actually reaches the retina. Then set the reflex to zero.",
          "zh": "把光照从几乎为零调到全日照，同时观察两个读数——瞳孔直径，以及真正到达视网膜的光。然后把反射设为零。"
        },
        "params": [
          {
            "key": "light",
            "label": {
              "en": "Light intensity",
              "zh": "光照强度"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 0.5,
            "default": 50
          },
          {
            "key": "distance",
            "label": {
              "en": "Distance to the object",
              "zh": "到物体的距离"
            },
            "unit": "cm",
            "min": 5,
            "max": 300,
            "step": 5,
            "default": 100
          },
          {
            "key": "reflex",
            "label": {
              "en": "Iris muscles working",
              "zh": "虹膜肌肉的功能"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 5,
            "default": 100
          }
        ],
        "readouts": [
          {
            "key": "pupil",
            "label": {
              "en": "Pupil diameter",
              "zh": "瞳孔直径"
            },
            "unit": "mm",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "retina",
            "label": {
              "en": "Light reaching the retina",
              "zh": "到达视网膜的光"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "power",
            "label": {
              "en": "Lens power needed",
              "zh": "所需晶状体屈光力"
            },
            "unit": "D",
            "sigFigs": 4,
            "exact": true
          },
          {
            "key": "spare",
            "label": {
              "en": "Spare accommodation",
              "zh": "剩余调节力"
            },
            "unit": "D",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A dim room",
              "zh": "昏暗的房间"
            },
            "params": {
              "light": 0.5,
              "distance": 100,
              "reflex": 100
            }
          },
          {
            "label": {
              "en": "Full daylight",
              "zh": "全日照"
            },
            "params": {
              "light": 100,
              "distance": 100,
              "reflex": 100
            }
          },
          {
            "label": {
              "en": "Reading, close up",
              "zh": "近距离阅读"
            },
            "params": {
              "light": 60,
              "distance": 25,
              "reflex": 100
            }
          },
          {
            "label": {
              "en": "Looking into the distance",
              "zh": "眺望远方"
            },
            "params": {
              "light": 60,
              "distance": 300,
              "reflex": 100
            }
          },
          {
            "label": {
              "en": "Too close to focus",
              "zh": "太近，无法聚焦"
            },
            "params": {
              "light": 60,
              "distance": 10,
              "reflex": 100
            }
          },
          {
            "label": {
              "en": "A pupil that will not respond",
              "zh": "没有反应的瞳孔"
            },
            "params": {
              "light": 100,
              "distance": 100,
              "reflex": 0
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
        "zh": "昏暗的房间",
        "en": "A dim room"
      },
      "params": {
        "light": 0.5,
        "distance": 100,
        "reflex": 100
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "全日照",
        "en": "Full daylight"
      },
      "params": {
        "light": 100,
        "distance": 100,
        "reflex": 100
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "近距离阅读",
        "en": "Reading, close up"
      },
      "params": {
        "light": 60,
        "distance": 25,
        "reflex": 100
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "眺望远方",
        "en": "Looking into the distance"
      },
      "params": {
        "light": 60,
        "distance": 300,
        "reflex": 100
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "太近，无法聚焦",
        "en": "Too close to focus"
      },
      "params": {
        "light": 60,
        "distance": 10,
        "reflex": 100
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "没有反应的瞳孔",
        "en": "A pupil that will not respond"
      },
      "params": {
        "light": 100,
        "distance": 100,
        "reflex": 0
      }
    }
  ]
};
