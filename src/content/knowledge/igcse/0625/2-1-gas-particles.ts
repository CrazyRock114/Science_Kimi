/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/2-1-gas-particles
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/2-1-gas-particles/narration';
import { equations } from '../../igcse-src/0625/2-1-gas-particles/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/2-1-gas-particles/kernel';

export const kp21GasParticles: KnowledgePoint = {
  "id": "igcse-0625-2-1-gas-particles",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "气体粒子与压强",
    "en": "Gas particles and pressure"
  },
  "summary": {
    "zh": "看压强如何从粒子碰撞中产生。加热气体、用活塞压缩，并看出 pV 为何保持不变。",
    "en": "Watch pressure emerge from particle collisions. Heat the gas, squeeze it with a piston, and see why pV stays constant."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/2.1.1.1",
      "0625/2.1.1.2",
      "0625/2.1.2.1",
      "0625/2.1.2.2",
      "0625/2.1.2.3",
      "0625/2.1.2.4",
      "0625/2.1.2.5",
      "0625/2.1.2.6",
      "0625/2.1.2.7",
      "0625/2.1.2.8",
      "0625/2.1.3.1",
      "0625/2.1.3.2",
      "0625/2.1.3.3"
    ]
  },
  "keywords": {
    "zh": [
      "绝对零度",
      "布朗运动",
      "分子动理论模型",
      "压强",
      "开尔文"
    ],
    "en": [
      "absolute zero",
      "Brownian motion",
      "kinetic particle model",
      "pressure",
      "kelvin"
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
          "掌握固体、液体与气体的区别性质，以及各种物态变化的名称。",
          "描述固、液、气三态中粒子的排列、间距与运动。",
          "把粒子运动与温度联系起来，包括 −273 °C 的绝对零度。",
          "用粒子与容器壁的碰撞解释气体压强。",
          "把布朗运动解释为分子与较大微粒之间的随机碰撞。",
          "说明恒容时压强随温度、恒温时压强随体积的变化。",
          "换算开尔文与摄氏度。",
          "对恒温下一定质量的气体使用 pV = 常数。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "同样的粒子，三种排布方式"
      },
      {
        "type": "paragraph",
        "text": "固体有固定的形状和固定的体积。其粒子紧密堆积成规则排列，被强作用力束缚，只能在固定位置附近振动——它们无法彼此越过，形状因此得以保持。"
      },
      {
        "type": "paragraph",
        "text": "液体体积固定，形状则随容器而定。粒子之间仍然靠得很近，但作用力较弱，可以相互滑过——因此它能流动，同时仍然很难被压缩。"
      },
      {
        "type": "paragraph",
        "text": "气体既没有固定形状也没有固定体积。粒子相距很远、彼此间几乎没有作用力，朝各个方向快速运动——因此气体会充满任何容器；而且与前两者不同，它能被大幅压缩，因为其中大部分是空隙。"
      },
      {
        "type": "paragraph",
        "text": "这些状态之间的变化各有名称，成对记忆最好。固体变液体是熔化，液体变固体是凝固——常称为结冰。液体变气体是沸腾或蒸发，气体变液体是凝结。而固体直接变成气体、完全跳过液态，则是升华。"
      },
      {
        "type": "paragraph",
        "text": "沸腾和蒸发不是一回事，这个区别值得弄清。沸腾发生在液体内部各处，且只在某一特定温度发生。蒸发只发生在表面，任何温度下都能进行，而逃逸的是速度最快的粒子——这就是剩下的液体会变凉的原因。"
      },
      {
        "type": "heading",
        "text": "加热让粒子更快"
      },
      {
        "type": "paragraph",
        "text": "现在我升高温度。粒子速度变快，撞击更猛、更频繁，压强表随之上升——而容器大小完全没变。"
      },
      {
        "type": "paragraph",
        "text": "反过来把它冷却下来，运动几乎停止。在零下二百七十三摄氏度——绝对零度——粒子的动能达到可能的最小值。这就是开尔文温标从这里起算的原因。"
      },
      {
        "type": "heading",
        "text": "看得见的证据"
      },
      {
        "type": "paragraph",
        "text": "没有人见过空气分子。这一切的证据是布朗运动：显微镜下的烟尘颗粒无规则地颤动，因为看不见的空气分子从各个方向不断撞击它们。"
      },
      {
        "type": "paragraph",
        "text": "考试中措辞要小心。烟尘颗粒是你观察到的微粒；空气分子是撞击它们的东西。把两者说反会失分。"
      },
      {
        "type": "formula",
        "latex": "T\\,(\\text{K}) = \\theta\\,(^\\circ\\text{C}) + 273",
        "caption": "摄氏温度加 273 得到开尔文温度。气体定律计算必须用开尔文。"
      },
      {
        "type": "formula",
        "latex": "pV = \\text{constant}",
        "caption": "对恒温下一定质量的气体，压强与体积的乘积不变。移动活塞，看它保持不变。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "absolute zero（绝对零度）：可能的最低温度，−273 °C 或 0 K，此时粒子动能最小。",
          "Brownian motion（布朗运动）：流体中微粒的无规则颤动，由周围小得多、快得多的分子碰撞引起。",
          "kinetic particle model（分子动理论模型）：把物质看作不断运动的微小粒子的模型，粒子速度随温度升高而增大。",
          "pressure（压强）：单位面积上的力。对气体而言，它来自粒子撞击器壁时传递的动量。",
          "kelvin（开尔文）：热力学温标。开尔文温度等于摄氏温度加 273。"
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
          "Know the distinguishing properties of solids, liquids and gases, and the terms for changes of state.",
          "Describe the arrangement, separation and motion of particles in solids, liquids and gases.",
          "Relate particle motion to temperature, including absolute zero at −273 °C.",
          "Explain gas pressure in terms of particles colliding with the container walls.",
          "Explain Brownian motion as random collisions between molecules and larger particles.",
          "Describe how gas pressure changes with temperature at constant volume, and with volume at constant temperature.",
          "Convert between kelvin and degrees Celsius.",
          "Use pV = constant for a fixed mass of gas at constant temperature. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Three ways to arrange the same particles"
      },
      {
        "type": "paragraph",
        "text": "A solid has a fixed shape and a fixed volume. Its particles are packed closely in a regular pattern, held by strong forces, and they can only vibrate about fixed positions — they cannot move past one another, which is why the shape holds."
      },
      {
        "type": "paragraph",
        "text": "A liquid keeps a fixed volume but takes the shape of its container. The particles are still close together, but the forces are weaker and they can slide past one another — so it flows, and it still cannot be squashed much."
      },
      {
        "type": "paragraph",
        "text": "A gas has neither a fixed shape nor a fixed volume. The particles are far apart with almost no forces between them, moving quickly in all directions — so a gas fills whatever it is put in, and unlike the other two it can be compressed a great deal, because most of it is empty space."
      },
      {
        "type": "paragraph",
        "text": "The changes between them have names, and the pairs are worth learning together. Solid to liquid is melting, liquid to solid is solidifying — often called freezing. Liquid to gas is boiling or evaporating, gas to liquid is condensing. And solid straight to gas, missing the liquid out entirely, is sublimation."
      },
      {
        "type": "paragraph",
        "text": "Boiling and evaporating are not the same thing, and the difference is worth having straight. Boiling happens throughout the liquid, at one particular temperature. Evaporation happens only at the surface, at any temperature, and it is the fastest particles that escape — which is why what is left behind is cooler."
      },
      {
        "type": "heading",
        "text": "Heating speeds them up"
      },
      {
        "type": "paragraph",
        "text": "Now I raise the temperature. The particles speed up, hit the walls harder and more often, and the pressure gauge climbs — with the container exactly the same size."
      },
      {
        "type": "paragraph",
        "text": "Cool it right down instead and the motion nearly stops. At minus two hundred and seventy-three degrees Celsius — absolute zero — the particles would have the least kinetic energy possible. That is why the kelvin scale starts there."
      },
      {
        "type": "heading",
        "text": "Evidence you can see"
      },
      {
        "type": "paragraph",
        "text": "Nobody has ever seen an air molecule. The evidence for all of this is Brownian motion: smoke particles under a microscope jitter about randomly, because invisible air molecules keep knocking into them from every side."
      },
      {
        "type": "paragraph",
        "text": "Be careful with the wording in exams. The smoke particles are the microscopic particles you observe; the air molecules are what hit them. Swapping those two loses marks."
      },
      {
        "type": "formula",
        "latex": "T\\,(\\text{K}) = \\theta\\,(^\\circ\\text{C}) + 273",
        "caption": "Convert Celsius to kelvin by adding 273. Gas law calculations always need kelvin."
      },
      {
        "type": "formula",
        "latex": "pV = \\text{constant}",
        "caption": "For a fixed mass of gas at constant temperature, pressure times volume does not change. Move the piston and watch it hold."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "absolute zero (绝对零度): The lowest possible temperature, −273 °C or 0 K, where particles have the least kinetic energy.",
          "Brownian motion (布朗运动): The random jittering of microscopic particles in a fluid, caused by collisions with the much smaller, faster molecules around them.",
          "kinetic particle model (分子动理论模型): The model that treats matter as tiny particles in constant motion, whose speed increases with temperature.",
          "pressure (压强): Force per unit area. For a gas it arises from the momentum transferred by particles striking the walls.",
          "kelvin (开尔文): The absolute temperature scale. T in kelvin equals θ in °C plus 273."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "2-1-gas-particles-cp1",
      "syllabus": [
        "0625/2.1.2.3"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A sealed container of gas is heated. The volume of the container does not change. Explain, in terms of particles, why the pressure of the gas increases.",
      "markScheme": [
        {
          "text": "The particles gain kinetic energy and move faster",
          "marks": 1,
          "alternatives": [
            "average speed increases"
          ]
        },
        {
          "text": "They collide with the walls more frequently",
          "marks": 1
        },
        {
          "text": "Each collision transfers more momentum, so the force on the walls is greater",
          "marks": 1,
          "alternatives": [
            "collisions are harder",
            "greater force per unit area"
          ]
        }
      ],
      "examinerNote": {
        "zh": "碰撞的频率和力度都要写到。写\"粒子膨胀\"或\"粒子变大\"是严重错误——粒子大小从不改变。",
        "en": "Both the rate and the force of collisions must appear. Writing \"the particles expand\" or \"the particles get bigger\" is a serious error — particle size never changes."
      }
    },
    {
      "id": "2-1-gas-particles-cp2",
      "syllabus": [
        "0625/2.1.3.2"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 1,
      "stem": "A gas is at a temperature of 27 °C. Calculate this temperature in kelvin.",
      "options": [
        "300 K",
        "27 K",
        "246 K",
        "273 K"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "300 K",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要加 273，不是减。气体定律计算必须用开尔文，很多同学误代摄氏度而失分。",
        "en": "Add 273, do not subtract it. Gas law calculations in kelvin are a common source of lost marks because candidates substitute Celsius values."
      }
    },
    {
      "id": "2-1-gas-particles-cp3",
      "syllabus": [
        "0625/2.1.3.3"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A fixed mass of gas has a volume of 250 cm³ at a pressure of 1.0 × 10⁵ Pa. The gas is compressed at constant temperature until its volume is 100 cm³. Calculate the new pressure.",
      "markScheme": [
        {
          "text": "Uses p₁V₁ = p₂V₂",
          "marks": 1
        },
        {
          "text": "Correct substitution: (1.0 × 10⁵ × 250) / 100",
          "marks": 1
        },
        {
          "text": "2.5 × 10⁵ Pa",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "体积可以都用 cm³，因为会约掉。注意方向：气体被压缩，压强必须升高——答案若小于 1.0 × 10⁵ Pa，一眼就知道错了。",
        "en": "Volumes may stay in cm³ because they cancel. Check the direction: the gas was compressed, so the pressure must go up — an answer below 1.0 × 10⁵ Pa is wrong on inspection."
      }
    },
    {
      "id": "2-1-gas-particles-cp4",
      "syllabus": [
        "0625/2.1.2.5"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Smoke particles in air are observed through a microscope. Describe what is seen, and account for it using the kinetic particle model.",
      "markScheme": [
        {
          "text": "The smoke particles move randomly / jerkily in all directions",
          "marks": 1,
          "alternatives": [
            "zig-zag motion",
            "Brownian motion"
          ]
        },
        {
          "text": "Air molecules collide with the smoke particles",
          "marks": 1
        },
        {
          "text": "The air molecules are much smaller and faster, and collisions are unequal on different sides",
          "marks": 1,
          "alternatives": [
            "uneven bombardment"
          ]
        }
      ],
      "examinerNote": {
        "zh": "要分清两类粒子：看到运动的是烟尘颗粒，撞击它们的是空气分子。说反了是常见且代价很大的错误。",
        "en": "Keep the two kinds of particle straight: the smoke particles are what you see moving, the air molecules are what hit them. Reversing them is a common and costly slip."
      }
    },
    {
      "id": "0625-2-1-cp5",
      "syllabus": [
        "0625/2.1.1.1"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain, in terms of the arrangement and movement of particles, why a gas can be compressed easily but a liquid cannot.",
      "markScheme": [
        {
          "text": "In a gas the particles are far apart, with large spaces between them",
          "marks": 1
        },
        {
          "text": "so squeezing the gas moves the particles closer together into that empty space",
          "marks": 1
        },
        {
          "text": "In a liquid the particles are already touching, so there is almost no space to reduce",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "压缩气体减小的是粒子之间的空隙，而不是粒子本身。粒子大小固定，无法被压扁。",
        "en": "Compressing a gas reduces the space between particles, not the particles themselves. A particle has a fixed size and cannot be squashed."
      }
    },
    {
      "id": "0625-2-1-cp6",
      "syllabus": [
        "0625/2.1.1.2"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 3,
      "stem": "Name the change of state in each case: (a) a solid becoming a liquid, (b) a gas becoming a liquid, (c) a solid becoming a gas without melting first.",
      "markScheme": [
        {
          "text": "(a) Melting",
          "marks": 1
        },
        {
          "text": "(b) Condensing / condensation",
          "marks": 1
        },
        {
          "text": "(c) Sublimation",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "成对记忆——熔化与凝固、沸腾与凝结——升华则是跳过中间一步的那一个。",
        "en": "Learn them in pairs — melting and solidifying, boiling and condensing — with sublimation as the one that skips a stage."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "temperature",
        "label": {
          "zh": "温度",
          "en": "Temperature"
        },
        "min": 30,
        "max": 900,
        "step": 10,
        "defaultValue": 300,
        "unit": "K"
      },
      {
        "key": "volume",
        "label": {
          "zh": "体积",
          "en": "Volume"
        },
        "min": 0.3,
        "max": 1,
        "step": 0.05,
        "defaultValue": 1,
        "unit": "(relative)"
      },
      {
        "key": "count",
        "label": {
          "zh": "粒子数",
          "en": "Number of particles"
        },
        "min": 5,
        "max": 60,
        "step": 5,
        "defaultValue": 40,
        "unit": ""
      },
      {
        "key": "t",
        "label": {
          "zh": "时间",
          "en": "Time"
        },
        "min": 0,
        "max": 120,
        "step": 0.01,
        "defaultValue": 0,
        "unit": "s"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "particles",
        "kernel": "2-1-gas-particles",
        "animate": {
          "param": "t",
          "speed": 1,
          "loop": 120
        },
        "hint": {
          "en": "Move the piston without changing the temperature — the particles are no faster, yet the pressure rises.",
          "zh": "在不改变温度的情况下移动活塞——粒子并没有变快，但压强升高了。"
        },
        "params": [
          {
            "key": "temperature",
            "label": {
              "en": "Temperature",
              "zh": "温度"
            },
            "unit": "K",
            "symbol": "T",
            "min": 30,
            "max": 900,
            "step": 10,
            "default": 300
          },
          {
            "key": "volume",
            "label": {
              "en": "Volume",
              "zh": "体积"
            },
            "unit": "(relative)",
            "symbol": "V",
            "min": 0.3,
            "max": 1,
            "step": 0.05,
            "default": 1
          },
          {
            "key": "count",
            "label": {
              "en": "Number of particles",
              "zh": "粒子数"
            },
            "unit": "",
            "symbol": "N",
            "min": 5,
            "max": 60,
            "step": 5,
            "default": 40
          },
          {
            "key": "t",
            "label": {
              "en": "Time",
              "zh": "时间"
            },
            "unit": "s",
            "min": 0,
            "max": 120,
            "step": 0.01,
            "default": 0,
            "hidden": true
          }
        ],
        "readouts": [
          {
            "key": "pressure",
            "label": {
              "en": "Pressure",
              "zh": "压强"
            },
            "unit": "(rel.)",
            "symbol": "p",
            "sigFigs": 3
          },
          {
            "key": "pV",
            "label": {
              "en": "p × V",
              "zh": "p × V"
            },
            "unit": "(rel.)",
            "sigFigs": 3
          },
          {
            "key": "meanSpeed",
            "label": {
              "en": "Mean speed",
              "zh": "平均速度"
            },
            "unit": "(rel.)",
            "sigFigs": 3
          },
          {
            "key": "collisionRate",
            "label": {
              "en": "Wall hits per particle",
              "zh": "每粒子撞壁频率"
            },
            "unit": "/ s",
            "sigFigs": 3
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Room temperature",
              "zh": "室温"
            },
            "params": {
              "temperature": 300,
              "volume": 1,
              "count": 40
            }
          },
          {
            "label": {
              "en": "Heat it up",
              "zh": "加热"
            },
            "params": {
              "temperature": 900,
              "volume": 1,
              "count": 40
            }
          },
          {
            "label": {
              "en": "Nearly absolute zero",
              "zh": "接近绝对零度"
            },
            "params": {
              "temperature": 30,
              "volume": 1,
              "count": 40
            }
          },
          {
            "label": {
              "en": "Compress it",
              "zh": "压缩"
            },
            "params": {
              "temperature": 300,
              "volume": 0.35,
              "count": 40
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
        "zh": "室温",
        "en": "Room temperature"
      },
      "params": {
        "temperature": 300,
        "volume": 1,
        "count": 40
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "加热",
        "en": "Heat it up"
      },
      "params": {
        "temperature": 900,
        "volume": 1,
        "count": 40
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "接近绝对零度",
        "en": "Nearly absolute zero"
      },
      "params": {
        "temperature": 30,
        "volume": 1,
        "count": 40
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "压缩",
        "en": "Compress it"
      },
      "params": {
        "temperature": 300,
        "volume": 0.35,
        "count": 40
      }
    }
  ]
};
