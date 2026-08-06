import type { KnowledgePoint } from '../types';

export const phyHeatEngine001: KnowledgePoint = {
  id: 'phy-heat-engine-001',
  subject: 'physics',
  title: { zh: '热机', en: 'Heat Engines' },
  summary: {
    zh: '了解热机把内能转化为机械能的原理，掌握四冲程汽油机的工作过程与各冲程的能量转化，对比柴油机的异同。',
    en: 'See how heat engines transfer internal energy into mechanical work, follow the four strokes of a petrol engine with their energy transfers, and compare with the diesel engine.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch2'],
    igcse: ['0625/1.7.1'],
  },
  keywords: {
    zh: ['热机', '内燃机', '四冲程', '汽油机', '柴油机', '做功冲程', '压缩冲程', '能量转化'],
    en: ['heat engine', 'internal combustion engine', 'four-stroke cycle', 'petrol engine', 'diesel engine', 'power stroke', 'compression stroke', 'energy transfer'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '知道热机是把内能转化为机械能的机器，了解蒸汽机、内燃机、汽轮机、喷气发动机等常见热机。',
          '说出四冲程汽油机吸气、压缩、做功、排气四个冲程的工作过程。',
          '分析各冲程中的能量转化：压缩冲程机械能转化为内能，做功冲程内能转化为机械能。',
          '知道一个工作循环中曲轴转两周、对外做功一次，对比汽油机与柴油机的异同。',
        ],
      },
      { type: 'heading', text: '热机：内能转化为机械能' },
      {
        type: 'paragraph',
        text: '把内能转化为机械能的机器叫热机。燃料在热机内部燃烧，把化学能转化为燃气的内能，高温高压的燃气推动活塞或叶轮做功，又把内能转化为机械能。常见的热机有蒸汽机、内燃机、汽轮机、喷气发动机等。燃料直接在发动机汽缸内燃烧的热机叫内燃机，汽车用的汽油机、柴油机都属于内燃机。',
      },
      { type: 'heading', text: '四冲程汽油机的工作过程' },
      {
        type: 'paragraph',
        text: '汽油机的一个工作循环由四个冲程组成，活塞在汽缸内往复运动两次，曲轴转动两周，对外做功一次。吸气冲程：进气门打开、排气门关闭，活塞下行，吸入汽油和空气的混合物。压缩冲程：两气门都关闭，活塞上行，压缩混合气体，气体温度升高，机械能转化为内能。做功冲程：压缩冲程末火花塞产生电火花，点燃混合气体，燃气猛烈燃烧，高温高压的燃气推动活塞下行做功，内能转化为机械能。排气冲程：进气门关闭、排气门打开，活塞上行，把废气排出汽缸。',
      },
      {
        type: 'list',
        items: [
          '四个冲程中只有做功冲程对外做功，其余三个冲程靠飞轮的惯性完成。',
          '压缩冲程：活塞对气体做功，机械能 → 内能，气体温度升高。',
          '做功冲程：燃气对活塞做功，内能 → 机械能，是汽车动力的来源。',
          '一个工作循环：4 个冲程，活塞往复 2 次，曲轴转 2 周，做功 1 次。',
        ],
      },
      { type: 'heading', text: '柴油机与汽油机的对比' },
      {
        type: 'paragraph',
        text: '柴油机构造上与汽油机的主要区别是汽缸顶部没有火花塞，而有喷油嘴。工作过程的差别是：吸气冲程柴油机只吸入空气；压缩冲程柴油机把空气压缩得更厉害，温度超过柴油的燃点；做功冲程喷油嘴喷出雾状柴油，遇到高温空气自燃（压燃式），不需要点火装置。柴油机效率较高，常用于载重汽车、拖拉机、轮船等，但比较笨重。',
      },
      { type: 'heading', text: '热机与社会' },
      {
        type: 'paragraph',
        text: '热机的广泛使用极大地推动了社会发展，但也带来环境污染（废气、噪声）和能源消耗问题。提高热机效率、开发新能源汽车是当今社会的重要课题。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'heat engine（热机）：把内能转化为机械能的机器，如内燃机、蒸汽机、汽轮机。',
          'internal combustion engine（内燃机）：燃料直接在汽缸内燃烧做功的热机。',
          'compression stroke（压缩冲程）：活塞压缩混合气体，机械能转化为内能的冲程。',
          'power stroke（做功冲程）：高温高压燃气推动活塞做功，内能转化为机械能的冲程。',
          'flywheel（飞轮）：利用惯性带动活塞完成吸气、压缩、排气冲程的部件。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Know that a heat engine transfers internal energy into mechanical work; recognise steam engines, internal combustion engines, turbines and jets.',
          'Describe the intake, compression, power and exhaust strokes of a four-stroke petrol engine.',
          'Analyse the energy transfers: mechanical to internal energy in compression, internal to mechanical in the power stroke.',
          'Know that one cycle turns the crankshaft twice with one power stroke, and compare petrol and diesel engines.',
        ],
      },
      { type: 'heading', text: 'Heat engines: internal energy to work' },
      {
        type: 'paragraph',
        text: 'A heat engine transfers internal energy into mechanical work. The fuel’s chemical energy becomes the internal energy of hot gas when it burns; the high-temperature, high-pressure gas then pushes a piston or turbine and does work. Steam engines, internal combustion engines, steam turbines and jet engines are all heat engines. In an internal combustion engine the fuel burns inside the cylinder itself — car petrol and diesel engines are of this type.',
      },
      { type: 'heading', text: 'The four strokes of a petrol engine' },
      {
        type: 'paragraph',
        text: 'One working cycle has four strokes: the piston moves up and down twice, the crankshaft turns twice, and work is delivered once. Intake: the inlet valve opens, the piston moves down, and a petrol–air mixture is drawn in. Compression: both valves close and the piston moves up, squeezing the mixture hotter — mechanical energy becomes internal energy. Power: at the end of compression the spark plug fires, the mixture burns violently, and the hot high-pressure gas drives the piston down — internal energy becomes mechanical energy. Exhaust: the outlet valve opens and the rising piston pushes out the waste gas.',
      },
      {
        type: 'list',
        items: [
          'Only the power stroke delivers work; the other three are completed by the inertia of the flywheel.',
          'Compression: the piston does work on the gas — mechanical to internal energy, temperature rises.',
          'Power: the gas does work on the piston — internal to mechanical energy, the source of the car’s drive.',
          'One cycle: 4 strokes, 2 piston round-trips, 2 crankshaft revolutions, 1 power stroke.',
        ],
      },
      { type: 'heading', text: 'Diesel versus petrol' },
      {
        type: 'paragraph',
        text: 'A diesel engine has a fuel injector instead of a spark plug. On intake it draws in air only; on compression it squeezes the air much harder, until its temperature exceeds diesel’s ignition point; then the injector sprays in atomised diesel which ignites by itself (compression ignition) — no spark is needed. Diesel engines are more efficient and power lorries, tractors and ships, but they are heavier.',
      },
      { type: 'heading', text: 'Engines and society' },
      {
        type: 'paragraph',
        text: 'Heat engines transformed transport and industry, but they also bring exhaust pollution, noise and heavy fuel consumption. Improving engine efficiency and developing new-energy vehicles are important goals today.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'heat engine (热机): A machine that transfers internal energy into mechanical work.',
          'internal combustion engine (内燃机): A heat engine in which the fuel burns inside the cylinder.',
          'compression stroke (压缩冲程): The stroke that squeezes the gas, transferring mechanical energy to internal energy.',
          'power stroke (做功冲程): The stroke in which hot gas drives the piston, transferring internal energy to mechanical energy.',
          'flywheel (飞轮): A heavy wheel whose inertia carries the piston through the non-power strokes.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '四冲程汽油机工作时，把内能转化为机械能的冲程是（　）',
        en: 'In a four-stroke petrol engine, internal energy is transferred into mechanical energy during the',
      },
      options: {
        zh: ['吸气冲程', '压缩冲程', '做功冲程', '排气冲程'],
        en: ['intake stroke', 'compression stroke', 'power stroke', 'exhaust stroke'],
      },
      answerIndex: 2,
      explanation: {
        zh: '做功冲程中，高温高压燃气推动活塞做功，内能转化为机械能，C 正确。压缩冲程恰好相反，是机械能转化为内能（B 错）；吸气、排气冲程只是气体的输送，没有这种能量转化（A、D 错）。',
        en: 'In the power stroke the hot high-pressure gas pushes the piston down — internal to mechanical energy (C). Compression is the exact reverse, mechanical to internal (B); intake and exhaust merely move gases in and out (A, D).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '四冲程汽油机的一个工作循环中，曲轴转动周数和对外做功次数分别是（　）',
        en: 'In one working cycle of a four-stroke petrol engine, the crankshaft revolutions and the number of power strokes are respectively',
      },
      options: {
        zh: ['2 周，1 次', '2 周，2 次', '4 周，1 次', '1 周，1 次'],
        en: ['2 revolutions, once', '2 revolutions, twice', '4 revolutions, once', '1 revolution, once'],
      },
      answerIndex: 0,
      explanation: {
        zh: '一个工作循环含四个冲程，活塞往复 2 次，曲轴转 2 周；只有做功冲程对外做功，故做功 1 次。记成“4 冲程、2 圈、1 次功”即可避免误选 B、C、D。',
        en: 'One cycle = four strokes; the piston goes up and down twice, turning the crankshaft twice; only the power stroke delivers work, so once. Remember “4 strokes, 2 turns, 1 power stroke” to avoid B, C and D.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于汽油机和柴油机的区别，下列说法正确的是（　）',
        en: 'Which statement correctly describes a difference between petrol and diesel engines?',
      },
      options: {
        zh: [
          '汽油机汽缸顶部有喷油嘴，柴油机有火花塞',
          '吸气冲程中，汽油机吸入空气，柴油机吸入柴油和空气的混合物',
          '柴油机用压燃方式点火，不需要火花塞',
          '汽油机的效率一般比柴油机高',
        ],
        en: [
          'a petrol engine has a fuel injector on top of the cylinder, a diesel has a spark plug',
          'during intake, a petrol engine draws in air while a diesel draws in a diesel–air mixture',
          'a diesel engine ignites the fuel by compression and needs no spark plug',
          'a petrol engine is generally more efficient than a diesel',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '柴油机汽缸顶部是喷油嘴，压缩冲程把空气压缩到高温后喷入柴油自燃，属压燃式，不需要火花塞，C 正确。A 把两者部件说反；吸气冲程汽油机吸入汽油与空气的混合物，柴油机只吸入空气，B 错；柴油机压缩程度大，效率一般比汽油机高，D 错。',
        en: 'A diesel has an injector, compresses air until hot, and the injected fuel self-ignites — compression ignition, no spark plug (C). A swaps the parts; on intake the petrol engine takes in a petrol–air mixture while the diesel takes air only (B wrong); diesels compress harder and are usually more efficient (D wrong).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-engine-energy-transfer',
      syllabus: ['0625/1.7.3.1'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 3,
      stem: 'Describe the main energy transfers that take place in a petrol (gasoline) car engine when the car accelerates.',
      markScheme: [
        {
          text: 'Chemical energy stored in the fuel is transferred to internal (thermal) energy of the hot gas by burning',
          marks: 1,
          alternatives: ['Chemical → internal/thermal energy of fuel/gas'],
        },
        {
          text: 'The hot high-pressure gas does work on the piston, transferring internal energy to kinetic (mechanical) energy of the car',
          marks: 1,
        },
        {
          text: 'Some energy is wasted as internal energy of the exhaust gases and surroundings (heating and sound)',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '能量链要写全：化学能→内能→机械能，并指出废气带走等损耗。只写“汽油燃烧产生动力”没有任何能量名称，不得分。',
        en: 'Give the full chain: chemical → internal → kinetic, plus the losses to exhaust and surroundings. “The petrol burns and drives the car” names no energy stores and earns nothing.',
      },
    },
  ],
  related: ['phy-heat-engine-002', 'phy-thermal-001', 'igcse-0625-1-7-energy'],
};
