// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
import type { KnowledgePointMeta } from '../../../types';

/** IGCSE 0625 转换课程轻量元数据（28 课；正文经 getKnowledgePoint 按课懒加载） */
export const igcse0625Metas: KnowledgePointMeta[] = [
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-1-2-motion",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "运动图像",
      "en": "Motion graphs"
    },
    "summary": {
      "zh": "从位移–时间图和速度–时间图中读出速度与加速度，并由图像下的面积求路程。",
      "en": "Read speed and acceleration off distance–time and speed–time graphs, and get distance back from the area underneath."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/1.2.1",
        "0625/1.2.2",
        "0625/1.2.3",
        "0625/1.2.4",
        "0625/1.2.5",
        "0625/1.2.6",
        "0625/1.2.7",
        "0625/1.2.8",
        "0625/1.2.9",
        "0625/1.2.11",
        "0625/1.2.12"
      ]
    },
    "keywords": {
      "zh": [
        "速率",
        "速度",
        "斜率",
        "加速度",
        "减速"
      ],
      "en": [
        "speed",
        "velocity",
        "gradient",
        "acceleration",
        "deceleration"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-1-3-mass-density",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "质量、重力与密度",
      "en": "Mass, weight and density"
    },
    "summary": {
      "zh": "把物体带到月球，一条线降到六分之一，另一条纹丝不动。嘴上说\"质量不变\"很容易；把它放在一条确实在变的线旁边看，就不一样了。",
      "en": "Take the object to the Moon and one line drops to a sixth while the other does not move at all. Saying \"mass does not change\" is easy; seeing it beside a line that does is not."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/1.3.1",
        "0625/1.3.2",
        "0625/1.3.3",
        "0625/1.3.4",
        "0625/1.3.5",
        "0625/1.4.1",
        "0625/1.4.2",
        "0625/1.4.3",
        "0625/1.4.4"
      ]
    },
    "keywords": {
      "zh": [
        "质量",
        "重力",
        "重力场强度",
        "密度"
      ],
      "en": [
        "mass",
        "weight",
        "gravitational field strength",
        "density"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-1-5-2-moments",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "力矩与平衡",
      "en": "Moments and balance"
    },
    "summary": {
      "zh": "在杠杆上移动重物，看它如何倾斜。转动效果取决于到支点的距离，而不只是力的大小。",
      "en": "Move masses along a beam and watch it tip. Turning effect depends on distance from the pivot, not just on force."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/1.5.2.1",
        "0625/1.5.2.2",
        "0625/1.5.2.3",
        "0625/1.5.2.4",
        "0625/1.5.2.5",
        "0625/1.5.2.6"
      ]
    },
    "keywords": {
      "zh": [
        "力矩",
        "支点",
        "垂直距离",
        "力矩平衡原理",
        "平衡"
      ],
      "en": [
        "moment",
        "pivot",
        "perpendicular distance",
        "principle of moments",
        "equilibrium"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-1-5-forces",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "力",
      "en": "Forces"
    },
    "summary": {
      "zh": "这个模拟从未被告知\"终极速度\"。它只是 F = ma 加上一个随速度增大的力，速率变平是算出来的结果。",
      "en": "Nothing in this simulation was ever told about terminal velocity. It is F = ma with a force that grows as you go, and the levelling off falls out of the arithmetic."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/1.2.10",
        "0625/1.2.13",
        "0625/1.5.1.1",
        "0625/1.5.1.2",
        "0625/1.5.1.3",
        "0625/1.5.1.4",
        "0625/1.5.1.5",
        "0625/1.5.1.6",
        "0625/1.5.1.7",
        "0625/1.5.1.8",
        "0625/1.5.1.9",
        "0625/1.5.1.10",
        "0625/1.5.1.11",
        "0625/1.5.1.12",
        "0625/1.5.3.1",
        "0625/1.5.3.2",
        "0625/1.5.3.3"
      ]
    },
    "keywords": {
      "zh": [
        "合力",
        "弹簧常数",
        "比例极限",
        "终极速度",
        "重心"
      ],
      "en": [
        "resultant force",
        "spring constant",
        "limit of proportionality",
        "terminal velocity",
        "centre of gravity"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-1-6-momentum-pressure",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "动量与压强",
      "en": "Momentum and pressure"
    },
    "summary": {
      "zh": "溃缩区并不吸收动量——它办不到，动量是固定的。它拉长了失去动量的时间，力便按比例下降。",
      "en": "A crumple zone does not absorb the momentum — it cannot, that is fixed. It extends the time over which the momentum is lost, and the force falls in proportion."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/1.6.1",
        "0625/1.6.2",
        "0625/1.6.3",
        "0625/1.6.4",
        "0625/1.8.1",
        "0625/1.8.2",
        "0625/1.8.3",
        "0625/1.8.4"
      ]
    },
    "keywords": {
      "zh": [
        "动量",
        "冲量",
        "动量守恒",
        "压强"
      ],
      "en": [
        "momentum",
        "impulse",
        "conservation of momentum",
        "pressure"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-1-7-energy",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "能量、功与功率",
      "en": "Energy, work and power"
    },
    "summary": {
      "zh": "让物体下落，看势能变成动能而总能量保持水平。加上空气阻力，水平线开始倾斜——那个缺口就是损耗的能量。",
      "en": "Drop an object and watch potential turn into kinetic while the total stays flat. Add air resistance and the flat line tilts — that gap is the wasted energy."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/1.7.1.1",
        "0625/1.7.1.2",
        "0625/1.7.1.3",
        "0625/1.7.1.4",
        "0625/1.7.1.5",
        "0625/1.7.1.6",
        "0625/1.7.2.1",
        "0625/1.7.2.2",
        "0625/1.7.3.1",
        "0625/1.7.3.2",
        "0625/1.7.3.3",
        "0625/1.7.3.4",
        "0625/1.7.3.5",
        "0625/1.7.3.6",
        "0625/1.7.3.7",
        "0625/1.7.4.1"
      ]
    },
    "keywords": {
      "zh": [
        "动能",
        "重力势能",
        "能量守恒",
        "功",
        "功率",
        "效率",
        "桑基图"
      ],
      "en": [
        "kinetic energy",
        "gravitational potential energy",
        "conservation of energy",
        "work done",
        "power",
        "efficiency",
        "Sankey diagram"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-2-2-thermal-properties",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "加热、熔化与沸腾",
      "en": "Heating, melting and boiling"
    },
    "summary": {
      "zh": "持续加热冰块并记录温度。会出现两段水平平台——能量在输入，温度却不变。",
      "en": "Heat ice steadily and plot the temperature. Two flat plateaus appear where energy goes in but the temperature will not move."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/2.2.1.1",
        "0625/2.2.1.2",
        "0625/2.2.1.3",
        "0625/2.2.2.1",
        "0625/2.2.2.2",
        "0625/2.2.2.3",
        "0625/2.2.2.4",
        "0625/2.2.3.1",
        "0625/2.2.3.2",
        "0625/2.2.3.3",
        "0625/2.2.3.4",
        "0625/2.2.3.5",
        "0625/2.2.3.6",
        "0625/2.2.3.7",
        "0625/2.2.3.8"
      ]
    },
    "keywords": {
      "zh": [
        "比热容",
        "内能",
        "熔化",
        "沸腾",
        "蒸发",
        "热膨胀"
      ],
      "en": [
        "specific heat capacity",
        "internal energy",
        "melting",
        "boiling",
        "evaporation",
        "thermal expansion"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-2-3-heat-transfer",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "传导、对流与辐射",
      "en": "Conduction, convection and radiation"
    },
    "summary": {
      "zh": "冷却一个热物体，在同一坐标上比较不同表面。光亮银色明显比粗糙黑色保持更高温度。",
      "en": "Cool a hot object and compare surfaces on the same axes. A shiny silver surface stays measurably hotter than a dull black one."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/2.3.1.1",
        "0625/2.3.1.2",
        "0625/2.3.1.3",
        "0625/2.3.1.4",
        "0625/2.3.2.1",
        "0625/2.3.2.2",
        "0625/2.3.3.1",
        "0625/2.3.3.2",
        "0625/2.3.3.3",
        "0625/2.3.3.4",
        "0625/2.3.3.5",
        "0625/2.3.3.6",
        "0625/2.3.3.7",
        "0625/2.3.3.8",
        "0625/2.3.3.9",
        "0625/2.3.4.1",
        "0625/2.3.4.2"
      ]
    },
    "keywords": {
      "zh": [
        "热传导",
        "对流",
        "热辐射",
        "发射体",
        "吸收体",
        "绝热体"
      ],
      "en": [
        "conduction",
        "convection",
        "thermal radiation",
        "emitter",
        "absorber",
        "insulator"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-3-2-2-refraction",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "折射与全反射",
      "en": "Refraction and total internal reflection"
    },
    "summary": {
      "zh": "拖动光线穿过界面，观察光如何偏折、找出临界角，并看到折射彻底停止的瞬间。",
      "en": "Drag a ray across a boundary to see how light bends, find the critical angle, and watch refraction stop altogether."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/3.2.2.1",
        "0625/3.2.2.2",
        "0625/3.2.2.3",
        "0625/3.2.2.4",
        "0625/3.2.2.5",
        "0625/3.2.2.6",
        "0625/3.2.2.7",
        "0625/3.2.2.8",
        "0625/3.2.2.9"
      ]
    },
    "keywords": {
      "zh": [
        "法线",
        "入射角",
        "折射角",
        "折射率",
        "临界角",
        "全反射"
      ],
      "en": [
        "normal",
        "angle of incidence",
        "angle of refraction",
        "refractive index",
        "critical angle",
        "total internal reflection"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-3-2-lenses",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "反射、透镜与色散",
      "en": "Reflection, lenses and dispersion"
    },
    "summary": {
      "zh": "把物体移过焦点，像就从实像倒立翻转为虚像正立。四项描述全都由这一个距离决定。",
      "en": "Walk the object across the principal focus and the image flips from real and inverted to virtual and upright. All four descriptions follow from that one distance."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/3.2.1.1",
        "0625/3.2.1.2",
        "0625/3.2.1.3",
        "0625/3.2.1.4",
        "0625/3.2.3.1",
        "0625/3.2.3.2",
        "0625/3.2.3.3",
        "0625/3.2.3.4",
        "0625/3.2.3.5",
        "0625/3.2.3.6",
        "0625/3.2.3.7",
        "0625/3.2.3.8",
        "0625/3.2.4.1",
        "0625/3.2.4.2",
        "0625/3.2.4.3"
      ]
    },
    "keywords": {
      "zh": [
        "法线",
        "焦点",
        "实像",
        "虚像",
        "色散",
        "单色的"
      ],
      "en": [
        "normal",
        "principal focus",
        "real image",
        "virtual image",
        "dispersion",
        "monochromatic"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-4-1-magnetism",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "磁场",
      "en": "Magnetic fields"
    },
    "summary": {
      "zh": "描绘磁体周围、磁极之间以及电流周围的真实磁感线。线的疏密代表强弱——因为这些线是由磁场本身算出来的。",
      "en": "Trace real field lines around magnets, between poles, and around a current. Line spacing shows strength, because the lines are computed from the field itself."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/4.1.1",
        "0625/4.1.2",
        "0625/4.1.3",
        "0625/4.1.4",
        "0625/4.1.5",
        "0625/4.1.6",
        "0625/4.1.7",
        "0625/4.1.8",
        "0625/4.1.9",
        "0625/4.1.10",
        "0625/4.1.11",
        "0625/4.5.3.1"
      ]
    },
    "keywords": {
      "zh": [
        "磁场",
        "磁感线",
        "磁化",
        "永磁体",
        "电磁铁",
        "中性点",
        "螺线管"
      ],
      "en": [
        "magnetic field",
        "field line",
        "induced magnetism",
        "permanent magnet",
        "electromagnet",
        "neutral point",
        "solenoid"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-4-2-1-electric-charge",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "电荷与电场",
      "en": "Electric charge and electric fields"
    },
    "summary": {
      "zh": "起电就是电子转移，仅此而已。再描绘点电荷、带电球以及平行板之间匀强电场的分布。",
      "en": "Charging is electron transfer, nothing else. Then trace the field around a charge, a sphere, and the uniform field between parallel plates."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/4.2.1.1",
        "0625/4.2.1.2",
        "0625/4.2.1.3",
        "0625/4.2.1.4",
        "0625/4.2.1.5",
        "0625/4.2.1.6",
        "0625/4.2.1.7",
        "0625/4.2.1.8",
        "0625/4.2.1.9",
        "0625/4.2.1.10"
      ]
    },
    "keywords": {
      "zh": [
        "静电荷",
        "电场",
        "匀强电场",
        "库仑",
        "导体",
        "绝缘体"
      ],
      "en": [
        "electrostatic charge",
        "electric field",
        "uniform field",
        "coulomb",
        "conductor",
        "insulator"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-4-2-4-resistance",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "电阻与伏安特性",
      "en": "Resistance and I–V characteristics"
    },
    "summary": {
      "zh": "在同一坐标上切换定值电阻、灯丝灯泡与二极管，并改变导线形状，看电阻如何随之变化。",
      "en": "Flip between a resistor, a filament lamp and a diode on the same axes, and stretch a wire to see resistance change with its shape."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/4.2.4.1",
        "0625/4.2.4.2",
        "0625/4.2.4.3",
        "0625/4.2.4.4",
        "0625/4.2.4.5"
      ]
    },
    "keywords": {
      "zh": [
        "电阻",
        "欧姆导体",
        "灯丝灯泡",
        "二极管",
        "横截面积"
      ],
      "en": [
        "resistance",
        "ohmic conductor",
        "filament lamp",
        "diode",
        "cross-sectional area"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-4-2-current-power",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "电流、电压与电功率",
      "en": "Current, voltage and electrical power"
    },
    "summary": {
      "zh": "千瓦时的名称里带着功率单位，它却不是功率。它是\"1 千瓦持续 1 小时\"——速率乘以时间，得到的是总量。",
      "en": "A kilowatt-hour has a power unit in its name and is not a power. It is a kilowatt for an hour — a rate times a time, which is an amount."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/4.2.2.1",
        "0625/4.2.2.3",
        "0625/4.2.2.4",
        "0625/4.2.2.5",
        "0625/4.2.2.6",
        "0625/4.2.3.1",
        "0625/4.2.3.2",
        "0625/4.2.3.3",
        "0625/4.2.3.4",
        "0625/4.2.3.6",
        "0625/4.2.3.7",
        "0625/4.2.5.1",
        "0625/4.2.5.2",
        "0625/4.2.5.3",
        "0625/4.2.5.4"
      ]
    },
    "keywords": {
      "zh": [
        "电流",
        "电动势",
        "电势差",
        "千瓦时",
        "常规电流"
      ],
      "en": [
        "current",
        "electromotive force",
        "potential difference",
        "kilowatt-hour",
        "conventional current"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-4-3-2-series-parallel",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "串联与并联电路",
      "en": "Series and parallel circuits"
    },
    "summary": {
      "zh": "在串联与并联之间切换，观察电荷流动的变化。电流规律、电压规律与总电阻，都在同一张电路图上。",
      "en": "Switch a circuit between series and parallel and watch the charge flow change. Current rules, p.d. rules and combined resistance, all on one diagram."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/4.3.2.1",
        "0625/4.3.2.2",
        "0625/4.3.2.3",
        "0625/4.3.2.4",
        "0625/4.3.2.5",
        "0625/4.3.2.6",
        "0625/4.3.2.7",
        "0625/4.3.2.8",
        "0625/4.3.2.9",
        "0625/4.3.2.10",
        "0625/4.2.2.2",
        "0625/4.2.3.5"
      ]
    },
    "keywords": {
      "zh": [
        "串联",
        "并联",
        "节点",
        "电势差",
        "电流表",
        "电压表"
      ],
      "en": [
        "series",
        "parallel",
        "junction",
        "potential difference",
        "ammeter",
        "voltmeter"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-4-4-safety",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "电路元件与用电安全",
      "en": "Circuit components and electrical safety"
    },
    "summary": {
      "zh": "额定值低于工作电流的保险丝什么也保护不了——它只会让电器无法工作。额定值远高于工作电流，它则会在电缆过热时无动于衷。",
      "en": "A fuse rated below the working current protects nothing — it just stops the appliance working. Rated far above it, it sits there while the cable overheats."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/4.3.1.1",
        "0625/4.3.1.2",
        "0625/4.3.3.1",
        "0625/4.3.3.2",
        "0625/4.3.3.3",
        "0625/4.4.1",
        "0625/4.4.2",
        "0625/4.4.3",
        "0625/4.4.4",
        "0625/4.4.5"
      ]
    },
    "keywords": {
      "zh": [
        "分压器",
        "火线",
        "保险丝",
        "双重绝缘"
      ],
      "en": [
        "potential divider",
        "live wire",
        "fuse",
        "double insulation"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-5-1-atom-nucleus",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "原子与原子核",
      "en": "The atom and the nucleus"
    },
    "summary": {
      "zh": "质子决定它是什么，中子决定它是哪种同位素，电子决定它的电荷。三个看似可以互换、实则完全不同的滑块。",
      "en": "Protons decide what it is, neutrons decide which isotope of it, electrons decide its charge. Three sliders that look interchangeable and are not."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/5.1.1.1",
        "0625/5.1.1.2",
        "0625/5.1.1.3",
        "0625/5.1.2.1",
        "0625/5.1.2.2",
        "0625/5.1.2.3",
        "0625/5.1.2.4",
        "0625/5.1.2.5",
        "0625/5.1.2.6",
        "0625/5.1.2.7",
        "0625/5.1.2.8"
      ]
    },
    "keywords": {
      "zh": [
        "核子",
        "质子数",
        "同位素",
        "核裂变",
        "核聚变"
      ],
      "en": [
        "nucleon",
        "proton number",
        "isotope",
        "nuclear fission",
        "nuclear fusion"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
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
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-6-1-solar-system",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "地球与太阳系",
      "en": "The Earth and the Solar System"
    },
    "summary": {
      "zh": "用真实行星数据作图，看轨道速度随距离下降——再切换到表面重力，看趋势消失。",
      "en": "Plot real planetary data and watch orbital speed fall with distance — then switch to surface gravity and watch the trend disappear."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/6.1.1.1",
        "0625/6.1.1.2",
        "0625/6.1.1.3",
        "0625/6.1.1.4",
        "0625/6.1.2.1",
        "0625/6.1.2.2",
        "0625/6.1.2.3",
        "0625/6.1.2.4",
        "0625/6.1.2.5",
        "0625/6.1.2.6",
        "0625/6.1.2.7",
        "0625/6.1.2.8",
        "0625/6.1.2.9",
        "0625/6.1.2.10"
      ]
    },
    "keywords": {
      "zh": [
        "轨道",
        "公转周期",
        "重力场强度",
        "吸积",
        "矮行星"
      ],
      "en": [
        "orbit",
        "orbital period",
        "gravitational field strength",
        "accretion",
        "minor planet"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "igcse-0625-6-2-universe",
    "subject": "physics",
    "tier": "extended",
    "title": {
      "zh": "恒星与膨胀的宇宙",
      "en": "Stars and the expanding Universe"
    },
    "summary": {
      "zh": "作出退行速度–距离图，测出斜率，再取倒数估算宇宙的年龄。",
      "en": "Plot recession speed against distance, measure the gradient, and turn it upside down to estimate the age of the Universe."
    },
    "gradeTier": "both",
    "syllabus": {
      "igcse": [
        "0625/6.2.1.1",
        "0625/6.2.1.2",
        "0625/6.2.2.1",
        "0625/6.2.2.2",
        "0625/6.2.2.3",
        "0625/6.2.3.1",
        "0625/6.2.3.2",
        "0625/6.2.3.3",
        "0625/6.2.3.4",
        "0625/6.2.3.5",
        "0625/6.2.3.6",
        "0625/6.2.3.7",
        "0625/6.2.3.8",
        "0625/6.2.3.9",
        "0625/6.2.3.10",
        "0625/6.2.3.11"
      ]
    },
    "keywords": {
      "zh": [
        "红移",
        "光年",
        "哈勃常数",
        "宇宙微波背景辐射",
        "超新星",
        "核聚变"
      ],
      "en": [
        "redshift",
        "light-year",
        "Hubble constant",
        "cosmic microwave background",
        "supernova",
        "nuclear fusion"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  }
];
