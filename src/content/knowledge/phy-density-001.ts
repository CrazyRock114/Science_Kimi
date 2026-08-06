import type { KnowledgePoint } from '../types';

export const phyDensity001: KnowledgePoint = {
  id: 'phy-density-001',
  subject: 'physics',
  title: { zh: '质量及其测量', en: 'Mass and Its Measurement' },
  summary: {
    zh: '理解质量是物体所含物质的多少、是物体本身的一种属性，认识质量的单位，并学会正确使用托盘天平测量物体的质量。',
    en: 'Understand mass as the quantity of matter in an object and as a property of the object itself, know the units of mass, and learn to use a beam balance correctly to measure mass.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8a/ch6'],
    igcse: ['0625/1.3', '0625/1.1'],
  },
  keywords: {
    zh: ['质量', '托盘天平', '平衡螺母', '游码', '砝码', '千克', '物质的多少', '属性'],
    en: ['mass', 'beam balance', 'balance nuts', 'rider', 'weights', 'kilogram', 'quantity of matter', 'property'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出质量是物体所含物质的多少，知道质量是物体本身的一种属性，不随形状、状态、位置和温度的改变而改变。',
          '记住质量的国际单位是千克（kg），会进行 t、kg、g、mg 之间的单位换算。',
          '会正确调节和使用托盘天平：放平、归零、调平衡、左物右码、正确读数。',
        ],
      },
      { type: 'heading', text: '质量的概念' },
      {
        type: 'paragraph',
        text: '一切物体都是由物质组成的。物体所含物质的多少叫做质量，用符号 m 表示。一把铁锤比一枚铁钉含的铁多，铁锤的质量就大。质量是物体本身的一种属性：把橡皮泥捏成任何形状、把冰熔化成水、把货物从地球运到空间站，物体所含物质的多少都没有改变，质量也就不变。',
      },
      { type: 'heading', text: '质量的单位' },
      {
        type: 'list',
        items: [
          '国际单位：千克（kg）。一枚一元硬币约 6 g，一个鸡蛋约 50 g，一名中学生约 50 kg。',
          '常用单位：吨（t）、克（g）、毫克（mg）。',
          '换算关系：1 t = 1000 kg，1 kg = 1000 g，1 g = 1000 mg。',
        ],
      },
      { type: 'heading', text: '托盘天平的使用' },
      {
        type: 'list',
        items: [
          '放：把天平放在水平台上。',
          '拨：用镊子把游码拨到标尺左端的零刻度线处。',
          '调：调节横梁两端的平衡螺母，使指针指在分度盘中央（指针偏左，平衡螺母向右调；偏右则向左调）。',
          '称：物体放左盘，用镊子按从大到小的顺序向右盘加减砝码，并移动游码，直到横梁恢复平衡。注意：称量过程中绝对不能再调平衡螺母。',
          '读：物体的质量 = 右盘中砝码的总质量 + 游码在标尺上所对的刻度值（读游码左侧所对的刻度）。',
          '收：称量完毕，用镊子把砝码放回砝码盒，游码归零。',
        ],
      },
      {
        type: 'paragraph',
        text: '使用注意：被测物体的质量不能超过天平的称量（量程）；砝码必须用镊子夹取，不能用手直接拿；潮湿的物体和化学药品不能直接放在托盘上，应放在玻璃器皿中称量。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'mass（质量）：物体所含物质的多少，符号 m，国际单位千克（kg）。',
          'beam balance（托盘天平）：实验室测量质量的工具，利用横梁平衡比较物体与砝码的质量。',
          'balance nuts（平衡螺母）：称量前用来调节横梁平衡的螺母，称量过程中不可再动。',
          'rider（游码）：标尺上可移动的小砝码，向右移动相当于向右盘添加小砝码。',
          'property（属性）：物体本身固有的特征；质量不随形状、状态、位置、温度改变，所以质量是物体的属性。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State that mass is the quantity of matter in an object and a property of the object itself, unchanged by shape, state, position or temperature.',
          'Know that the SI unit of mass is the kilogram (kg), and convert between t, kg, g and mg.',
          'Adjust and use a beam balance correctly: level it, zero the rider, balance the beam, object on the left pan, and read the result correctly.',
        ],
      },
      { type: 'heading', text: 'What is mass?' },
      {
        type: 'paragraph',
        text: 'Every object is made of matter. Mass is the quantity of matter in an object, symbol m. A hammer contains more iron than a nail, so it has a larger mass. Mass is a property of the object itself: reshaping a piece of clay, melting ice into water, or carrying cargo from the Earth to a space station changes neither the amount of matter nor the mass.',
      },
      { type: 'heading', text: 'Units of mass' },
      {
        type: 'list',
        items: [
          'SI unit: the kilogram (kg). A coin is about 6 g, an egg about 50 g, a middle-school student about 50 kg.',
          'Common units: tonne (t), gram (g), milligram (mg).',
          'Conversions: 1 t = 1000 kg, 1 kg = 1000 g, 1 g = 1000 mg.',
        ],
      },
      { type: 'heading', text: 'Using a beam balance' },
      {
        type: 'list',
        items: [
          'Place the balance on a level surface.',
          'Slide the rider to the zero mark at the left end of the scale, using tweezers.',
          'Turn the balance nuts until the pointer rests at the centre of the scale (pointer to the left — move the nut to the right, and vice versa).',
          'Put the object on the left pan; add weights to the right pan with tweezers, largest first, then move the rider until the beam balances again. Never touch the balance nuts during a measurement.',
          'Read: mass of object = total mass of the weights + the rider reading (read at the left edge of the rider).',
          'Afterwards, return the weights to their box with tweezers and move the rider back to zero.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Precautions: the object must not exceed the capacity of the balance; always handle weights with tweezers, never with bare hands; damp objects and chemicals must be weighed in a glass container, not directly on the pan.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'mass (质量): The quantity of matter in an object, symbol m, SI unit the kilogram (kg).',
          'beam balance (托盘天平): The laboratory instrument for measuring mass by balancing the object against known weights.',
          'balance nuts (平衡螺母): Nuts used to level the beam before measuring; they must not be moved during a measurement.',
          'rider (游码): A small sliding weight on the scale; moving it right is equivalent to adding small weights to the right pan.',
          'property (属性): A characteristic belonging to the object itself; mass is a property because it does not change with shape, state, position or temperature.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列情况中，物体的质量会发生改变的是（　）',
        en: 'In which of the following situations does the mass of an object change?',
      },
      options: {
        zh: [
          '把橡皮泥捏成小动物',
          '冰块熔化成水',
          '把货物从地球运送到空间站',
          '用锉刀把铜块锉去一部分',
        ],
        en: [
          'Reshaping modelling clay into an animal',
          'Ice melting into water',
          'Carrying cargo from the Earth to a space station',
          'Filing part of a copper block away',
        ],
      },
      answerIndex: 3,
      explanation: {
        zh: '质量是物体所含物质的多少。捏形状、熔化、改变位置都不改变物质的多少，故 A、B、C 质量不变；锉去一部分后铜减少了，质量变小，故选 D。',
        en: 'Mass is the quantity of matter. Reshaping, melting and moving do not change the amount of matter, so A, B and C keep the same mass; filing removes some copper, reducing the mass — hence D.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '用托盘天平测质量，称量前调节横梁平衡时，发现指针静止在分度盘中央刻度线的左侧，此时应（　）',
        en: 'Before weighing with a beam balance, the pointer rests to the left of the centre mark. What should be done?',
      },
      options: {
        zh: [
          '把横梁右端的平衡螺母向右调',
          '把横梁右端的平衡螺母向左调',
          '向右盘加砝码',
          '向右移动游码',
        ],
        en: [
          'Turn the balance nut at the right end of the beam to the right',
          'Turn the balance nut at the right end of the beam to the left',
          'Add weights to the right pan',
          'Move the rider to the right',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '指针偏左说明横梁左端下沉，应把平衡螺母向右调（"左偏右调"）。称量前的调平只能用平衡螺母：加砝码、移游码是称量时的操作，用它们调平会使测量结果错误。',
        en: 'A pointer leaning left means the left side of the beam is lower, so the balance nut must be turned to the right ("left lean, right turn"). Levelling before weighing may only use the balance nuts; adding weights or moving the rider are measuring operations and would falsify the result.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '用调好的天平测某物体质量，右盘中的砝码为 50 g、20 g 各一个，游码在标尺上对应的刻度值为 3.2 g，则该物体的质量为（　）',
        en: 'An object is weighed on a balanced beam balance. The right pan holds one 50 g and one 20 g weight, and the rider reads 3.2 g. The mass of the object is',
      },
      options: {
        zh: ['70 g', '73.2 g', '76.8 g', '53.2 g'],
        en: ['70 g', '73.2 g', '76.8 g', '53.2 g'],
      },
      answerIndex: 1,
      explanation: {
        zh: '物体质量 = 砝码总质量 + 游码示数 = 50 g + 20 g + 3.2 g = 73.2 g。70 g 漏加了游码；76.8 g 是把游码按右端读数或误减误加；53.2 g 是错把 20 g 砝码忽略不计。',
        en: 'Mass = weights + rider = 50 g + 20 g + 3.2 g = 73.2 g. 70 g forgets the rider; 76.8 g misreads or mis-subtracts the rider; 53.2 g ignores the 20 g weight.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-balance-measures-mass',
      syllabus: ['0625/1.3.4'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'Which quantity is measured by comparing an object with known weights on a beam balance?',
      options: ['Weight', 'Mass', 'Density', 'Force'],
      answerIndex: 1,
      markScheme: [
        {
          text: 'Mass',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '天平比较的是质量：无论重力大小如何，同一物体与同样的砝码总保持平衡。重量是力，要用弹簧测力计测量，单位是牛顿而不是千克。',
        en: 'A balance compares masses: the same object balances the same weights whatever the gravitational field. Weight is a force, measured with a spring balance in newtons, not kilograms.',
      },
    },
    {
      id: 'ep-mass-vs-weight',
      syllabus: ['0625/1.3.1', '0625/1.3.2'],
      tier: 'core',
      commandWord: 'State',
      marks: 2,
      stem: 'State two ways in which mass differs from weight.',
      markScheme: [
        {
          text: 'Mass is the quantity of matter in an object / mass is a scalar measured in kg',
          marks: 1,
          alternatives: ['Mass stays the same wherever the object is'],
        },
        {
          text: 'Weight is a (gravitational) force acting on the mass, measured in newtons',
          marks: 1,
          alternatives: ['Weight changes with the gravitational field strength, e.g. it is smaller on the Moon'],
        },
      ],
      examinerNote: {
        zh: '标准对比两条线：质量是物质的多少（标量、单位 kg、不随地点改变）；重量是引力（矢量、单位 N、随引力场改变）。只写"单位不同"一条最多得 1 分。',
        en: 'The standard contrast has two lines: mass is the quantity of matter (scalar, in kg, the same everywhere); weight is a gravitational force (vector, in N, varying with the field). Quoting only the different units earns at most one mark.',
      },
    },
  ],
  related: ['phy-density-002', 'phy-force-001', 'igcse-0625-1-3-mass-density'],
};
