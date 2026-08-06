import type { KnowledgePoint } from '../types';

export const phyMachine002: KnowledgePoint = {
  id: 'phy-machine-002',
  subject: 'physics',
  title: { zh: '功与功率', en: 'Work and Power' },
  summary: {
    zh: '理解做功的两个必要因素，掌握 W = Fs 和 P = W/t 的计算，分清“有力不一定做功”的常见误区。',
    en: 'Understand the two necessary conditions for doing work, master the calculations W = Fs and P = W/t, and avoid the common pitfall that a force does not always do work.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch5'],
    igcse: ['0625/1.7'],
  },
  keywords: {
    zh: ['功', '功率', '焦耳', '瓦特', '做功', 'W=Fs', 'P=W/t'],
    en: ['work', 'power', 'joule', 'watt', 'work done', 'W=Fs', 'P=W/t'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '力学中的功' },
      {
        type: 'paragraph',
        text: '一个力作用在物体上，物体在这个力的方向上移动了一段距离，就说这个力对物体做了功。做功的两个必要因素：一是作用在物体上的力，二是物体在力的方向上通过的距离，二者缺一不可。',
      },
      {
        type: 'list',
        items: [
          '有力但物体不动（s = 0）：不做功，如推墙而墙不动。',
          '物体移动但移动方向与力垂直：该力不做功，如提着水桶水平前进时，向上的提力不做功。',
          '物体由于惯性运动、不受力：没有力做功，如冰面上滑行的冰壶（忽略摩擦）。',
        ],
      },
      { type: 'formula', latex: 'W = Fs', caption: '功 = 力 × 沿力方向移动的距离；单位：焦耳（J），1 J = 1 N·m' },
      { type: 'heading', text: '功率：表示做功的快慢' },
      {
        type: 'paragraph',
        text: '做相同的功，用时越短做功越快。功率等于功与完成这些功所用时间之比，是表示做功快慢的物理量。功率大只说明做功快，不一定做功多。',
      },
      { type: 'formula', latex: 'P = \\frac{W}{t}', caption: '功率 = 功 ÷ 时间；单位：瓦特（W），1 W = 1 J/s' },
      {
        type: 'list',
        items: [
          '常用单位还有千瓦（kW）：1 kW = 1000 W。',
          '由 W = Pt 可知：相同时间内，功率大的机器做功多；做相同的功，功率大的用时少。',
          '计算时要统一单位：功用 J、时间用 s、功率用 W。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Work in mechanics' },
      {
        type: 'paragraph',
        text: 'Work is done when a force acts on an object and the object moves in the direction of the force. Both conditions are required: a force acting on the object, and a distance moved along the force’s direction. Without either, no work is done.',
      },
      {
        type: 'list',
        items: [
          'Force but no motion (s = 0): no work — e.g. pushing a wall that does not move.',
          'Motion perpendicular to the force: that force does no work — e.g. the upward pull on a bucket carried horizontally.',
          'Motion by inertia with no applied force: no work is done — e.g. a curling stone gliding on (frictionless) ice.',
        ],
      },
      { type: 'formula', latex: 'W = Fs', caption: 'Work = force × distance moved along the force; unit: joule (J), 1 J = 1 N·m' },
      { type: 'heading', text: 'Power: how fast work is done' },
      {
        type: 'paragraph',
        text: 'For the same amount of work, the shorter the time, the faster the work is done. Power is the work done divided by the time taken; it measures the rate of doing work. A high power means working fast, not necessarily doing more work.',
      },
      { type: 'formula', latex: 'P = \\frac{W}{t}', caption: 'Power = work ÷ time; unit: watt (W), 1 W = 1 J/s' },
      {
        type: 'list',
        items: [
          'A common larger unit is the kilowatt (kW): 1 kW = 1000 W.',
          'From W = Pt: in the same time a more powerful machine does more work; for the same work it takes less time.',
          'Keep units consistent: work in J, time in s, power in W.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列情景中，人对物体做功的是哪一个？',
        en: 'In which situation does a person do work on the object?',
      },
      options: {
        zh: [
          '用力推汽车，汽车没有动',
          '提着水桶在水平路面匀速前进',
          '把箱子从地面竖直举高',
          '举着杠铃静止站立',
        ],
        en: [
          'Pushing a car that does not move',
          'Carrying a bucket horizontally at constant speed',
          'Lifting a box vertically from the ground',
          'Holding a barbell motionless overhead',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '举箱子时，向上的举力与移动方向一致，有力有距离，做功。推车未动：s = 0，不做功；提桶水平走：提力竖直向上而位移水平，力的方向上没有距离，提力不做功；举杠铃静止：没有距离，不做功。',
        en: 'Lifting the box: the upward force and the motion are in the same direction, so work is done. Pushing a stationary car: s = 0, no work. Carrying a bucket horizontally: the lifting force is vertical while the displacement is horizontal, so the lifting force does no work. Holding the barbell still: no distance, no work.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '用 50 N 的水平拉力，使小车沿水平方向前进了 10 m。拉力做的功是多少？',
        en: 'A horizontal pulling force of 50 N moves a cart 10 m horizontally. How much work does the force do?',
      },
      options: {
        zh: ['5 J', '60 J', '500 J', '5000 J'],
        en: ['5 J', '60 J', '500 J', '5000 J'],
      },
      answerIndex: 2,
      explanation: {
        zh: 'W = Fs = 50 × 10 = 500 J。5 J 是误用 F÷s；60 J 是误把 F 与 s 相加；5000 J 多乘了 10 倍。',
        en: 'W = Fs = 50 × 10 = 500 J. 5 J wrongly divides F by s; 60 J wrongly adds F and s; 5000 J is ten times too large.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '一台起重机在 5 s 内对货物做了 1000 J 的功，它的功率是多少？',
        en: 'A crane does 1000 J of work on a load in 5 s. What is its power?',
      },
      options: {
        zh: ['200 W', '995 W', '1005 W', '5000 W'],
        en: ['200 W', '995 W', '1005 W', '5000 W'],
      },
      answerIndex: 0,
      explanation: {
        zh: 'P = W/t = 1000 / 5 = 200 W。5000 W 是误用 W × t；995 W 和 1005 W 是误用加减法。功率表示做功快慢，与功的单位换算无关。',
        en: 'P = W/t = 1000 / 5 = 200 W. 5000 W wrongly multiplies W by t; 995 W and 1005 W wrongly add or subtract. Power is the rate of doing work.',
      },
    },
  ],
  related: ['phy-machine-003', 'phy-machine-004', 'igcse-0625-1-7-energy'],
};
