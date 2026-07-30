import type { KnowledgePoint } from '../types';

export const phyForce001: KnowledgePoint = {
  id: 'phy-force-001',
  subject: 'physics',
  title: { zh: '力的概念与重力', en: 'Forces and Gravity' },
  summary: {
    zh: '认识力是物体对物体的作用，会画力的示意图；理解重力的产生、方向与大小 G = mg，区分质量与重量。',
    en: 'Learn that a force is a push or a pull between objects, draw force diagrams, and understand the origin, direction and size of weight, W = mg, distinguishing mass from weight.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch1', 'pep-phy-s1/ch3'],
    igcse: ['0625/1.5', '0625/1.3'],
  },
  keywords: {
    zh: ['力', '力的作用效果', '力的示意图', '重力', '质量', '重量', '重心', 'g'],
    en: ['force', 'effects of forces', 'force diagram', 'gravity', 'weight', 'mass', 'centre of gravity', 'gravitational field strength'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是力' },
      {
        type: 'paragraph',
        text: '力是物体对物体的作用。力不能离开物体单独存在：有力必有施力物体和受力物体。力的作用是相互的——甲对乙施力的同时，乙也对甲施加大小相等、方向相反的力。',
      },
      {
        type: 'list',
        items: [
          '力可以改变物体的运动状态（由静到动、由动到静、改变快慢或方向）。',
          '力可以改变物体的形状（使物体发生形变）。',
          '力的单位是牛顿，符号 N。托起两个鸡蛋的力大约是 1 N。',
        ],
      },
      { type: 'heading', text: '力的三要素与示意图' },
      {
        type: 'paragraph',
        text: '力的大小、方向、作用点叫做力的三要素，它们都能影响力的作用效果。用一条带箭头的线段把三要素表示出来，就是力的示意图：线段起点（或终点）表示作用点，箭头方向表示力的方向，线段旁标注力的大小。',
      },
      { type: 'heading', text: '重力：由于地球吸引而产生的力' },
      {
        type: 'paragraph',
        text: '地面附近的一切物体都受到地球的吸引，由于地球的吸引而使物体受到的力叫做重力，符号 G。重力的方向总是竖直向下，重力在物体上的等效作用点叫做重心。',
      },
      { type: 'formula', latex: 'G = mg', caption: '重力大小：m 为质量（kg），g 约为 9.8 N/kg，粗略计算取 10 N/kg' },
      {
        type: 'list',
        items: [
          '质量 m 是物体所含物质的多少，单位 kg，不随地点改变。',
          '重量（重力）G 是力，单位 N，随地点改变：同一物体在月球上的重力约为地球上的 1/6，但质量不变。',
          '质量可以用天平测量，重量用弹簧测力计测量。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'What is a force?' },
      {
        type: 'paragraph',
        text: 'A force is a push or a pull that one object exerts on another. Forces never exist on their own: there is always an object applying the force and an object receiving it. Forces come in pairs — if A pushes B, then B pushes A back with an equal force in the opposite direction.',
      },
      {
        type: 'list',
        items: [
          'A force can change the motion of an object: start it, stop it, speed it up, slow it down or change its direction.',
          'A force can change the shape of an object (deformation).',
          'Force is measured in newtons (N). Lifting two eggs takes about 1 N.',
        ],
      },
      { type: 'heading', text: 'Force diagrams' },
      {
        type: 'paragraph',
        text: 'A force is described by its magnitude, direction and point of application. In a force diagram (free-body diagram) each force is drawn as an arrow: the length shows the magnitude, the arrowhead shows the direction, and the tail marks where the force acts.',
      },
      { type: 'heading', text: 'Weight: the force of gravity' },
      {
        type: 'paragraph',
        text: 'Every object near the Earth is attracted towards its centre. The gravitational force acting on an object is called its weight, W. Weight always acts vertically downwards, and for calculation it is taken to act at a single point, the centre of gravity.',
      },
      { type: 'formula', latex: 'W = mg', caption: 'Weight: m is mass (kg), g is the gravitational field strength, about 9.8 N/kg on Earth (often taken as 10 N/kg)' },
      {
        type: 'list',
        items: [
          'Mass m is the amount of matter in an object, measured in kg; it is the same everywhere.',
          'Weight W is a force, measured in N; it depends on g. On the Moon an object weighs about 1/6 of its weight on Earth, but its mass is unchanged.',
          'Mass is measured with a balance; weight is measured with a newton meter (spring balance).',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一个质量为 5 kg 的物体在地球表面受到的重力约为多少？（g 取 10 N/kg）',
        en: 'What is the approximate weight of a 5 kg object at the Earth’s surface? (Take g = 10 N/kg.)',
      },
      options: {
        zh: ['0.5 N', '5 N', '50 N', '500 N'],
        en: ['0.5 N', '5 N', '50 N', '500 N'],
      },
      answerIndex: 2,
      explanation: {
        zh: 'G = mg = 5 × 10 = 50 N。0.5 N 误把 m 除以 g；5 N 只取了质量数值；500 N 误用 g = 100 N/kg。',
        en: 'W = mg = 5 × 10 = 50 N. 0.5 N wrongly divides m by g; 5 N just copies the mass; 500 N wrongly uses g = 100 N/kg.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '把同一台天平（带砝码）和同一个物体带到月球上，下列说法正确的是哪个？',
        en: 'A balance (with standard masses) and an object are taken to the Moon. Which statement is correct?',
      },
      options: {
        zh: [
          '物体的质量和重力都变小',
          '物体的质量不变，重力变小',
          '物体的质量变小，重力不变',
          '物体的质量和重力都不变',
        ],
        en: [
          'Both its mass and its weight decrease',
          'Its mass stays the same but its weight decreases',
          'Its mass decreases but its weight stays the same',
          'Neither its mass nor its weight changes',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '质量是物体所含物质的多少，不随地点改变；重力 G = mg，月球上 g 约为地球的 1/6，所以重力变小。其余选项都混淆了质量与重力。',
        en: 'Mass is the amount of matter and does not change with location; weight W = mg, and g on the Moon is about 1/6 of that on Earth, so the weight decreases. The other options confuse mass with weight.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '划船时，桨向后推水，船却向前运动。这说明了什么？',
        en: 'When rowing, the oar pushes the water backwards, yet the boat moves forwards. What does this show?',
      },
      options: {
        zh: [
          '力可以离开物体单独存在',
          '物体间力的作用是相互的',
          '只有运动的物体才会受到力',
          '力只能改变物体的形状',
        ],
        en: [
          'A force can exist without objects',
          'Forces between objects are mutual (action and reaction)',
          'Only moving objects experience forces',
          'Forces can only change the shape of objects',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '桨对水施加向后的力，水同时对桨（和船）施加向前的反作用力，船因此前进——力的作用是相互的。力不能离开物体存在；静止物体也受力；力还能改变运动状态，故其余选项错误。',
        en: 'The oar pushes the water backwards and the water pushes the oar (and boat) forwards with an equal reaction force — forces are mutual. A force needs objects; stationary objects also experience forces; forces also change motion, so the other options are wrong.',
      },
    },
  ],
};
