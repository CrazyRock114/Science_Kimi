import type { KnowledgePoint } from '../types';

export const phyForce002: KnowledgePoint = {
  id: 'phy-force-002',
  subject: 'physics',
  title: { zh: '牛顿第一定律与惯性', en: "Newton's First Law and Inertia" },
  summary: {
    zh: '理解牛顿第一定律：物体在不受力（或受平衡力）时保持静止或匀速直线运动；认识惯性及其在生活中的应用与防范。',
    en: "Understand Newton's first law: an object remains at rest or in uniform straight-line motion unless acted on by a resultant force; learn what inertia is and how it matters in daily life.",
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch2', 'pep-phy-s1/ch4'],
    igcse: ['0625/1.5'],
  },
  keywords: {
    zh: ['牛顿第一定律', '惯性', '平衡力', '匀速直线运动', '阻力', '伽利略'],
    en: ["Newton's first law", 'inertia', 'balanced forces', 'uniform motion', 'resultant force', 'Galileo'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '从亚里士多德到伽利略' },
      {
        type: 'paragraph',
        text: '亚里士多德认为"力是维持运动的原因"，推一下物体它才动。伽利略通过斜面实验推理：如果水平面绝对光滑，运动的小球将永远运动下去——运动不需要力来维持，力是改变运动状态的原因。',
      },
      { type: 'heading', text: '牛顿第一定律' },
      {
        type: 'paragraph',
        text: '一切物体在没有受到力的作用时，总保持静止状态或匀速直线运动状态。这就是牛顿第一定律，也叫惯性定律。它是从大量实验事实中推理概括出来的，不能用实验直接验证。',
      },
      {
        type: 'list',
        items: [
          '物体不受力时：原来静止的保持静止，原来运动的保持匀速直线运动。',
          '力不是维持运动的原因，而是改变物体运动状态的原因。',
          '物体受平衡力（合力为零）时，效果与不受力相同，同样保持静止或匀速直线运动。',
        ],
      },
      { type: 'heading', text: '惯性' },
      {
        type: 'paragraph',
        text: '一切物体都有保持原来运动状态不变的性质，这种性质叫做惯性。惯性是物体的固有属性，只与物体的质量有关：质量越大，惯性越大，运动状态越难改变。',
      },
      {
        type: 'list',
        items: [
          '利用惯性：跳远助跑、拍打衣服除尘、锤头松了把锤柄往地上撞紧。',
          '防范惯性危害：乘车系安全带、汽车保持安全车距、禁止超速超载。',
          '惯性不是力，不能说"受到惯性"或"惯性力"，只能说"由于惯性"。',
        ],
      },
      { type: 'formula', latex: '\\sum F = 0 \\implies v = \\text{常量}', caption: '合力为零时速度保持不变（静止是 v = 0 的特例）' },
    ],
    en: [
      { type: 'heading', text: 'From Aristotle to Galileo' },
      {
        type: 'paragraph',
        text: 'Aristotle claimed a force is needed to keep an object moving. Galileo reasoned from his inclined-plane experiments that on a perfectly frictionless surface a moving ball would continue forever — motion does not need a force to maintain it; a force is needed to change motion.',
      },
      { type: 'heading', text: "Newton's first law" },
      {
        type: 'paragraph',
        text: "An object remains at rest, or continues to move in a straight line at constant speed, unless acted on by a resultant (unbalanced) force. This is Newton's first law, also called the law of inertia. It is a generalisation from experiment and cannot be proved directly.",
      },
      {
        type: 'list',
        items: [
          'With no resultant force: an object at rest stays at rest; a moving object keeps moving at constant velocity.',
          'A force is not needed to keep something moving; a force is what changes its motion.',
          'Balanced forces (zero resultant force) have the same effect as no force at all.',
        ],
      },
      { type: 'heading', text: 'Inertia' },
      {
        type: 'paragraph',
        text: 'Inertia is the tendency of an object to resist any change in its state of motion. It is a property of matter and depends only on mass: the larger the mass, the greater the inertia and the harder it is to change the motion.',
      },
      {
        type: 'list',
        items: [
          'Using inertia: a run-up before a long jump; beating dust out of a carpet.',
          'Guarding against inertia: seat belts, safe following distances, speed and load limits for vehicles.',
          'Inertia is not a force — we say "because of inertia", never "acted on by inertia".',
        ],
      },
      { type: 'formula', latex: '\\sum F = 0 \\implies v = \\text{constant}', caption: 'With zero resultant force the velocity stays constant (rest is the special case v = 0)' },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '正在水平面上运动的小车，如果突然不受任何力的作用，它将怎样运动？',
        en: 'A trolley is moving on a horizontal surface. If all forces on it suddenly vanish, what will it do?',
      },
      options: {
        zh: ['立即停下来', '慢慢停下来', '保持匀速直线运动', '速度越来越快'],
        en: [
          'Stop immediately',
          'Slow down gradually and stop',
          'Keep moving at constant velocity',
          'Speed up continuously',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '由牛顿第一定律，物体不受力时保持原来的运动状态：原来运动的保持匀速直线运动。停下需要力（如摩擦力），加速更需要合力，故其余选项错误。',
        en: "By Newton's first law, with no resultant force the trolley keeps its state of motion: uniform motion in a straight line. Stopping would require a force (such as friction), and speeding up would need a resultant force, so the other options are wrong.",
      },
    },
    {
      id: 'q2',
      question: {
        zh: '汽车突然刹车时，乘客的身体会向前倾。这是因为什么？',
        en: 'When a car brakes suddenly, the passengers lurch forwards. Why?',
      },
      options: {
        zh: [
          '乘客受到向前的推力',
          '乘客由于惯性保持原来的运动状态',
          '汽车对乘客的支持力消失',
          '乘客受到向前的惯性力',
        ],
        en: [
          'The passengers are pushed forwards',
          'Inertia keeps the passengers in their original state of motion',
          'The support force on the passengers disappears',
          'A forward "inertia force" acts on the passengers',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '刹车时车减速，但乘客由于惯性仍保持原来的速度向前运动，所以前倾。惯性不是力，不存在"惯性力"，也没有人向前推乘客，故其余选项错误。',
        en: 'When the car slows down, the passengers tend to keep their original velocity because of inertia, so they lurch forwards. Inertia is not a force and nobody pushes them, so the other options are wrong.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于惯性，下列说法正确的是哪个？',
        en: 'Which statement about inertia is correct?',
      },
      options: {
        zh: [
          '只有运动的物体才有惯性',
          '速度越大，惯性越大',
          '质量越大，惯性越大',
          '在太空失重环境中的物体没有惯性',
        ],
        en: [
          'Only moving objects have inertia',
          'The greater the speed, the greater the inertia',
          'The greater the mass, the greater the inertia',
          'Objects in weightless space have no inertia',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '惯性是一切物体的固有属性，大小只由质量决定，与是否运动、速度大小、是否失重无关。故其余选项均错误。',
        en: 'Inertia is a property of all matter and depends only on mass — not on whether the object moves, how fast it moves, or whether it is weightless. The other options are all wrong.',
      },
    },
  ],
};
