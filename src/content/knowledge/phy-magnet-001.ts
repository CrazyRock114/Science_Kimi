import type { KnowledgePoint } from '../types';

export const phyMagnet001: KnowledgePoint = {
  id: 'phy-magnet-001',
  subject: 'physics',
  title: { zh: '磁现象与磁场', en: 'Magnetic Phenomena and Magnetic Fields' },
  summary: {
    zh: '认识磁体、磁极与磁极间的相互作用，理解磁场的存在，学会用磁感线描述磁场，并了解地磁场与指南针的原理。',
    en: 'Meet magnets and their poles, understand the magnetic field as the region where poles feel forces, describe fields with field lines, and learn about the Earth’s magnetism and the compass.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch8'],
    igcse: ['0625/4.1'],
  },
  keywords: {
    zh: ['磁体', '磁极', '磁场', '磁感线', '地磁场', '磁偏角', '指南针', '磁化'],
    en: ['magnet', 'magnetic pole', 'magnetic field', 'field line', 'Earth’s magnetism', 'compass', 'magnetisation', 'magnetic declination'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出磁体、磁极的概念，知道同名磁极相互排斥、异名磁极相互吸引，了解磁化现象。',
          '理解磁场是磁体周围客观存在的物质，知道磁场方向的规定（小磁针静止时 N 极所指方向）。',
          '会用磁感线描述磁场：磁体外部磁感线从 N 极出发回到 S 极，磁感线疏密反映磁场强弱。',
          '知道地球周围存在地磁场，地磁两极与地理两极不重合，了解磁偏角与指南针的原理。',
        ],
      },
      { type: 'heading', text: '磁体与磁极' },
      {
        type: 'paragraph',
        text: '能够吸引铁、钴、镍等物质的物体叫磁体。磁体上磁性最强的部分叫磁极：自由转动的磁体静止时，指北的磁极叫北极（N 极），指南的磁极叫南极（S 极）。每个磁体都有两个磁极，磁极总是成对出现，不存在单独的磁极。磁极间的相互作用规律是：同名磁极相互排斥，异名磁极相互吸引。使原来没有磁性的物体获得磁性的过程叫磁化；铁被磁化后磁性容易消失（软磁材料），钢被磁化后磁性能长期保持（硬磁材料，用于制作永磁体）。',
      },
      { type: 'heading', text: '磁场' },
      {
        type: 'paragraph',
        text: '磁体周围存在着一种看不见、摸不着的物质——磁场。磁体间的相互作用就是通过磁场发生的。磁场的基本性质是对放入其中的磁体产生力的作用。磁场有方向：物理学中规定，小磁针静止时北极所指的方向为该点磁场的方向。用磁针或铁屑可以显示磁场的分布。',
      },
      { type: 'heading', text: '磁感线' },
      {
        type: 'paragraph',
        text: '为了形象、方便地描述磁场，人们引入磁感线：在磁场中画一些有方向的曲线，曲线上任意一点的切线方向跟该点的磁场方向一致。磁感线是描述磁场的模型，并不是真实存在的线。磁体周围的磁感线都是从磁体的 N 极出发，回到 S 极；磁体内部则由 S 极指向 N 极，形成闭合曲线。任意两条磁感线都不会相交；磁感线越密的地方磁场越强。',
      },
      {
        type: 'list',
        items: [
          '条形磁体：磁感线在磁体外部从 N 极指向 S 极，两极附近磁感线最密、磁场最强。',
          '蹄形磁体：两极之间的磁场近似均匀，磁感线近似平行。',
          '同名磁极之间：磁感线相互排斥，中间区域磁场较弱；异名磁极之间：磁感线从一极连向另一极。',
        ],
      },
      { type: 'heading', text: '地磁场' },
      {
        type: 'paragraph',
        text: '地球本身相当于一个大磁体，它周围存在的磁场叫地磁场。地磁的北极在地理南极附近，地磁的南极在地理北极附近，地磁两极与地理两极并不重合。水平放置的小磁针静止时指向南北方向，就是因为受到地磁场的作用——指南针正是利用这一原理制成的。小磁针的指向与地理南北方向之间的夹角叫磁偏角，我国宋代学者沈括是世界上最早准确记述磁偏角的人。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'magnetic pole（磁极）：磁体上磁性最强的部分，分为北极（N）与南极（S），成对存在。',
          'magnetic field（磁场）：磁体或电流周围对磁极产生力的作用的区域，磁场方向为 N 极受力方向。',
          'field line（磁感线）：描述磁场分布与方向的假想曲线，磁体外部由 N 极指向 S 极，疏密表示强弱。',
          'magnetisation（磁化）：使原来无磁性的物体获得磁性的过程。',
          'magnetic declination（磁偏角）：地磁南北方向与地理南北方向之间的夹角。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Describe magnets and poles: like poles repel, unlike poles attract; understand induced magnetism (magnetisation).',
          'Understand the magnetic field as a real region around a magnet, with direction defined as the force on a north pole.',
          'Use field lines to describe a field: outside a magnet they run from N to S, and their spacing shows field strength.',
          'Know that the Earth has a magnetic field whose poles do not coincide with the geographic poles, and how a compass works.',
        ],
      },
      { type: 'heading', text: 'Magnets and poles' },
      {
        type: 'paragraph',
        text: 'A magnet attracts magnetic materials such as iron, cobalt and nickel. Its magnetism is strongest at the two poles: a freely suspended magnet settles with one end pointing north (the N pole) and the other south (the S pole). Poles always come in pairs — a single isolated pole does not exist. Like poles repel and unlike poles attract. Magnetisation is the process of making an unmagnetised object magnetic; soft iron loses its magnetism easily (a temporary magnet), while steel keeps it (a permanent magnet).',
      },
      { type: 'heading', text: 'The magnetic field' },
      {
        type: 'paragraph',
        text: 'The space around a magnet contains an invisible magnetic field — the medium through which magnetic forces act. A field exerts a force on any pole placed in it. Its direction at a point is defined as the direction of the force on a north pole there, which is the way the N pole of a small compass points when it settles. Compasses and iron filings can both reveal the field pattern.',
      },
      { type: 'heading', text: 'Field lines' },
      {
        type: 'paragraph',
        text: 'Field lines are a model for picturing a magnetic field: directed curves whose tangent at any point gives the field direction there. They are a description, not physical threads. Outside a magnet the lines leave the N pole and enter the S pole; inside the magnet they run from S to N, forming closed loops. Field lines never cross, and the closer together they are, the stronger the field.',
      },
      {
        type: 'list',
        items: [
          'Bar magnet: outside, lines run from N to S and are most crowded near the poles, where the field is strongest.',
          'Horseshoe magnet: between its poles the field is nearly uniform, with nearly parallel lines.',
          'Between two like poles the lines bend apart and the field midway is weak; between unlike poles the lines run straight across.',
        ],
      },
      { type: 'heading', text: 'The Earth’s magnetism' },
      {
        type: 'paragraph',
        text: 'The Earth behaves like a giant magnet with its own magnetic field. The magnetic north pole lies near the geographic south pole and the magnetic south pole near the geographic north pole — the two sets of poles do not coincide. A compass needle settles along the field, which is why it points roughly north–south. The angle between magnetic and geographic north is the magnetic declination, first recorded accurately by the Chinese scholar Shen Kuo in the Song dynasty.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'magnetic pole (磁极): The region of a magnet where its magnetism is strongest; poles come in N–S pairs.',
          'magnetic field (磁场): A region in which a magnetic pole experiences a force; its direction is the force on an N pole.',
          'field line (磁感线): An imaginary directed curve describing a field; outside a magnet it runs from N to S, and spacing shows strength.',
          'magnetisation (磁化): The process of giving an unmagnetised object magnetic properties.',
          'magnetic declination (磁偏角): The angle between magnetic north and geographic north.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '把两根条形磁体靠近，下列说法正确的是（　）',
        en: 'Two bar magnets are brought close together. Which statement is correct?',
      },
      options: {
        zh: [
          'N 极与 N 极相互吸引',
          'N 极与 S 极相互排斥',
          '同名磁极相互排斥，异名磁极相互吸引',
          '只有铁做的磁体之间才有力的作用',
        ],
        en: [
          'An N pole and an N pole attract each other',
          'An N pole and an S pole repel each other',
          'Like poles repel and unlike poles attract',
          'Only magnets made of iron exert forces on each other',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '磁极间的相互作用规律是：同名磁极相互排斥，异名磁极相互吸引，故 A、B 说反了；磁力通过磁场发生，与磁体材料无关，任何磁体之间都有作用，故 D 错。',
        en: 'The rule is: like poles repel, unlike poles attract — A and B state it backwards. The force acts through the magnetic field whatever the magnet is made of, so D is wrong.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于磁场和磁感线，下列说法正确的是（　）',
        en: 'Which statement about magnetic fields and field lines is correct?',
      },
      options: {
        zh: [
          '磁感线是磁场中真实存在的曲线',
          '磁体周围的磁感线从 S 极出发，回到 N 极',
          '磁场中某点的磁场方向，就是放在该点的小磁针静止时 N 极所指的方向',
          '两条磁感线在磁场较强的地方可以相交',
        ],
        en: [
          'Field lines are real curves existing in the field',
          'Outside a magnet, field lines run from the S pole to the N pole',
          'The field direction at a point is the direction in which the N pole of a compass needle placed there points when it settles',
          'Two field lines may cross where the field is strong',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '磁感线是为描述磁场而引入的假想曲线，并非真实存在，A 错；磁体外部磁感线从 N 极出发回到 S 极，B 错；若磁感线相交，交点处磁场将有两个方向，矛盾，故任何两条磁感线都不相交，D 错。',
        en: 'Field lines are a model, not real threads (A wrong). Outside a magnet they run from N to S (B wrong). Crossing lines would give the field two directions at one point, which is impossible — lines never cross (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '指南针静止时能够指示南北方向，是因为（　）',
        en: 'A compass needle settles in the north–south direction because',
      },
      options: {
        zh: [
          '指南针受到地球引力的作用',
          '地球周围存在磁场，指南针受到地磁场的作用',
          '指南针的 N 极受到北极星的吸引',
          '地磁两极与地理两极恰好重合',
        ],
        en: [
          'the needle is pulled by the Earth’s gravity',
          'the Earth has a magnetic field which exerts a force on the needle',
          'the N pole of the needle is attracted by the Pole Star',
          'the Earth’s magnetic poles coincide exactly with its geographic poles',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '地球相当于一个大磁体，指南针（小磁针）在地磁场中受力而指向南北方向，B 正确。引力竖直向下，不会使磁针水平转向，A 错；指南与北极星无关，C 错；地磁两极与地理两极并不重合，两者间的夹角叫磁偏角，D 错。',
        en: 'The Earth acts like a large magnet and the needle settles along its field (B). Gravity acts vertically downwards and cannot turn the needle horizontally (A); the Pole Star exerts no magnetic pull (C); the magnetic and geographic poles do not coincide — the angle between them is the declination (D).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-pole-forces',
      syllabus: ['0625/4.1.1'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'The N pole of a bar magnet is brought close to the N pole of another bar magnet. State whether the magnets attract or repel each other.',
      options: ['They attract', 'They repel', 'There is no force', 'It depends on the strength of the magnets'],
      answerIndex: 1,
      markScheme: [
        {
          text: 'Repel — like poles repel',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '“同名相斥、异名相吸”是最基本的规律。选 attract 是把两条规律记混；磁力与磁体强弱只影响力的大小，不影响力的方向性质。',
        en: '“Like poles repel, unlike poles attract” is the basic rule. Choosing attract mixes the two rules up; magnet strength changes the size of the force, never its sense.',
      },
    },
    {
      id: 'ep-bar-magnet-field',
      syllabus: ['0625/4.1.6'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 2,
      stem: 'Describe the pattern and direction of the magnetic field lines in the region around a bar magnet.',
      markScheme: [
        {
          text: 'Lines form loops that leave the N pole and enter the S pole outside the magnet',
          marks: 1,
          alternatives: ['Field lines run from north pole to south pole outside the magnet'],
        },
        {
          text: 'Lines are closest together at the poles, where the field is strongest',
          marks: 1,
          alternatives: ['Direction of a line is the direction a compass N pole points'],
        },
      ],
      examinerNote: {
        zh: '两个得分点：形状（N 极出发、S 极进入的闭合曲线）和强弱信息（两极处线最密）。只写“从 N 到 S”漏掉疏密特征，通常只得一分。',
        en: 'Two marking points: the pattern (loops leaving N and entering S) and the strength information (lines closest at the poles). Writing only “from N to S” without the spacing feature usually scores just one mark.',
      },
    },
  ],
  related: ['phy-magnet-002', 'phy-magnet-003', 'igcse-0625-4-1-magnetism'],
};
