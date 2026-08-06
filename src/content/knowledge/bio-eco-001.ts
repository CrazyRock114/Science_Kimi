import type { KnowledgePoint } from '../types';

export const bioEco001: KnowledgePoint = {
  id: 'bio-eco-001',
  subject: 'biology',
  title: { zh: '生态系统的组成与食物链、食物网', en: 'Components of Ecosystems, Food Chains and Food Webs' },
  summary: {
    zh: '认识生态系统的生物部分与非生物部分，理解生产者、消费者、分解者的作用，学会正确书写食物链并分析食物网。',
    en: 'Identify the biotic and abiotic components of an ecosystem, understand the roles of producers, consumers and decomposers, and learn to write food chains and analyse food webs.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch1'],
    igcse: ['0610/19'],
  },
  keywords: {
    zh: ['生态系统', '生产者', '消费者', '分解者', '食物链', '食物网', '生物圈', '非生物部分'],
    en: ['ecosystem', 'producer', 'consumer', 'decomposer', 'food chain', 'food web', 'trophic level', 'biosphere'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是生态系统' },
      {
        type: 'paragraph',
        text: '在一定的空间范围内，生物与环境所形成的统一整体叫做生态系统。一片森林、一个池塘、一块农田都可以看作一个生态系统；生物圈是地球上最大的生态系统，它包括地球上所有的生物及其生存环境。',
      },
      { type: 'heading', text: '生态系统的组成' },
      {
        type: 'paragraph',
        text: '生态系统包括生物部分和非生物部分。非生物部分指阳光、空气、水、温度等；生物部分按功能分为三类：生产者、消费者和分解者。',
      },
      {
        type: 'list',
        items: [
          '生产者：主要是绿色植物，能通过光合作用制造有机物，为自身和其他生物提供物质和能量。',
          '消费者：主要是各种动物，直接或间接以植物为食。',
          '分解者：主要是细菌和真菌，把动植物遗体、遗物中的有机物分解成无机物，归还环境，供生产者重新利用。',
        ],
      },
      { type: 'heading', text: '食物链：吃与被吃的关系' },
      {
        type: 'paragraph',
        text: '在生态系统中，不同生物之间由于吃与被吃的关系而形成的链状结构叫做食物链。食物链的起始环节是生产者，箭头指向捕食者，表示物质和能量流动的方向，如：草 → 兔 → 鹰。',
      },
      {
        type: 'list',
        items: [
          '食物链从生产者（绿色植物）开始，到最高级消费者结束。',
          '食物链中不写分解者，也不写阳光等非生物部分。',
          '箭头方向指向捕食者，即“被吃 → 吃”，不能写反。',
          '沿食物链，生物所处的环节称为营养级：生产者是第一营养级。',
        ],
      },
      { type: 'heading', text: '食物网与生态系统的稳定性' },
      {
        type: 'paragraph',
        text: '一个生态系统中，许多条食物链彼此交错连接，形成食物网。生态系统中的物质和能量就是沿着食物链和食物网流动的。当人类排放的有毒物质（如 DDT、重金属）进入生态系统后，会沿食物链不断积累，营养级越高的生物体内有毒物质越多，这叫做生物富集。生态系统具有一定的自动调节能力，但这种能力是有一定限度的，外界干扰超过这个限度，生态系统就会遭到破坏。',
      },
    ],
    en: [
      { type: 'heading', text: 'What is an ecosystem?' },
      {
        type: 'paragraph',
        text: 'An ecosystem is a unit formed by living organisms and their environment interacting together in a given area. A forest, a pond or a farmland can each be regarded as an ecosystem; the biosphere — all living organisms on Earth together with their environment — is the largest ecosystem of all.',
      },
      { type: 'heading', text: 'Components of an ecosystem' },
      {
        type: 'paragraph',
        text: 'An ecosystem consists of biotic (living) and abiotic (non-living) components. The abiotic components include sunlight, air, water and temperature; the biotic components fall into three functional groups: producers, consumers and decomposers.',
      },
      {
        type: 'list',
        items: [
          'Producers: mainly green plants, which make organic compounds by photosynthesis, supplying matter and energy for themselves and other organisms.',
          'Consumers: mainly animals, which feed directly or indirectly on plants.',
          'Decomposers: mainly bacteria and fungi, which break down organic matter in dead organisms and wastes into inorganic substances, returning them to the environment for producers to reuse.',
        ],
      },
      { type: 'heading', text: 'Food chains: feeding relationships' },
      {
        type: 'paragraph',
        text: 'A food chain shows the feeding relationships between organisms — who is eaten by whom. A food chain always starts with a producer, and the arrows point towards the consumer, showing the direction of energy and matter transfer, e.g. grass → rabbit → eagle.',
      },
      {
        type: 'list',
        items: [
          'A food chain begins with a producer (a green plant) and ends with the top consumer.',
          'Decomposers and abiotic factors such as sunlight are not written in a food chain.',
          'The arrow points from the organism being eaten to the eater — never the other way round.',
          'Each stage in a food chain is a trophic level; producers form the first trophic level.',
        ],
      },
      { type: 'heading', text: 'Food webs and ecosystem stability' },
      {
        type: 'paragraph',
        text: 'In an ecosystem many interconnected food chains form a food web, along which energy and matter flow. Toxic substances released by humans (such as DDT and heavy metals) accumulate along food chains — organisms at higher trophic levels contain higher concentrations, a process called bioaccumulation. An ecosystem has some ability to regulate itself, but this ability is limited: disturbance beyond that limit damages the ecosystem.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列各项中，可以看作一个生态系统的是（　）',
        en: 'Which of the following can be regarded as an ecosystem?',
      },
      options: {
        zh: ['一片森林中所有的鸟', '一片草原（包括其中的生物和阳光、土壤等环境）', '一个池塘中所有的鱼', '地球上所有的生产者'],
        en: ['All the birds in a forest', 'A grassland including its organisms together with sunlight, soil and other environmental factors', 'All the fish in a pond', 'All the producers on Earth'],
      },
      answerIndex: 1,
      explanation: {
        zh: '生态系统 = 生物 + 环境，二者缺一不可。只有鸟、只有鱼或只有生产者都缺少了其他生物成分和非生物环境，都不能构成完整的生态系统；一片草原同时包含生物部分和非生物部分，符合生态系统的概念。',
        en: 'An ecosystem = organisms + environment; neither can be missing. Only birds, only fish or only producers all lack other biotic components and the abiotic environment, so none is a complete ecosystem; a grassland contains both biotic and abiotic parts, fitting the definition.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列食物链书写正确的是（　）',
        en: 'Which food chain is written correctly?',
      },
      options: {
        zh: ['阳光 → 草 → 兔 → 鹰', '草 → 兔 → 鹰', '鹰 → 兔 → 草', '草 → 细菌 → 兔'],
        en: ['sunlight → grass → rabbit → eagle', 'grass → rabbit → eagle', 'eagle → rabbit → grass', 'grass → bacteria → rabbit'],
      },
      answerIndex: 1,
      explanation: {
        zh: '食物链从生产者开始，箭头指向捕食者。阳光是非生物部分，不能写入食物链，排除 A；C 中箭头方向写反了（应是草被兔吃、兔被鹰吃）；细菌是分解者，不参与捕食食物链，排除 D。',
        en: 'A food chain starts with a producer and arrows point to the consumer. Sunlight is abiotic and never appears in a food chain (A wrong); in C the arrows are reversed (grass is eaten by the rabbit, the rabbit by the eagle); bacteria are decomposers and are not part of a grazing food chain (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '在一个生态系统中，从物质循环角度看必不可少的生物成分是（　）',
        en: 'From the point of view of material cycling, which biotic components are essential in an ecosystem?',
      },
      options: {
        zh: ['生产者和消费者', '生产者和分解者', '消费者和分解者', '只有生产者'],
        en: ['producers and consumers', 'producers and decomposers', 'consumers and decomposers', 'producers only'],
      },
      answerIndex: 1,
      explanation: {
        zh: '生产者把无机物制造成有机物，分解者把有机物分解回无机物归还环境，二者构成物质循环的闭环，缺一不可。没有分解者，遗体堆积、无机物无法归还（排除 A、D）；消费者只是加快物质循环，理论上不是必需成分（排除 C）。',
        en: 'Producers convert inorganic substances into organic matter, and decomposers break organic matter back down into inorganic substances, closing the material cycle — both are indispensable. Without decomposers, dead matter would pile up and inorganic nutrients could not be returned (A and D wrong); consumers only speed up the cycle and are theoretically not essential (C wrong).',
      },
    },
  ],
  related: ['igcse-0610-19-1-ecosystems', 'bio-eco-002', 'bio-eco-003'],
};
