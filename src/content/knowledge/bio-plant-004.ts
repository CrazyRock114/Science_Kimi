import type { KnowledgePoint } from '../types';

export const bioPlant004: KnowledgePoint = {
  id: 'bio-plant-004',
  subject: 'biology',
  title: { zh: '绿色植物与碳—氧平衡', en: 'Green Plants and the Carbon–Oxygen Balance' },
  summary: {
    zh: '理解绿色植物通过光合作用吸收二氧化碳、释放氧气，维持生物圈中碳—氧相对平衡的生态意义，认识保护植被的重要性。',
    en: 'Understand how green plants absorb carbon dioxide and release oxygen through photosynthesis, maintaining the carbon–oxygen balance of the biosphere, and appreciate the importance of protecting vegetation.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j7a/ch3'],
    igcse: ['0610/6', '0610/19'],
  },
  keywords: {
    zh: ['碳—氧平衡', '光合作用', '二氧化碳', '氧气', '温室效应', '植树造林', '碳循环'],
    en: ['carbon–oxygen balance', 'photosynthesis', 'carbon dioxide', 'oxygen', 'greenhouse effect', 'carbon cycle', 'afforestation'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '生物圈中的碳—氧平衡' },
      {
        type: 'paragraph',
        text: '生物圈中的各种生物通过呼吸作用消耗氧气、释放二氧化碳，人类的生产和生活（燃烧煤、石油等燃料）也消耗氧气、排出二氧化碳。绿色植物则通过光合作用不断吸收大气中的二氧化碳，释放氧气，使大气中氧气和二氧化碳的含量保持相对稳定，这就是碳—氧平衡。',
      },
      {
        type: 'formula',
        latex: '6\\mathrm{CO_2} + 6\\mathrm{H_2O} \\xrightarrow[\\text{叶绿体}]{\\text{光能}} \\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2}',
        caption: '光合作用：吸收二氧化碳，释放氧气',
      },
      { type: 'heading', text: '光合作用在维持平衡中的作用' },
      {
        type: 'list',
        items: [
          '吸收二氧化碳：绿色植物是生物圈中二氧化碳的主要“消费者”，把大气中的碳固定在有机物中。',
          '释放氧气：地球上绝大多数氧气来自绿色植物（包括海洋中的藻类）的光合作用，供生物呼吸和燃料燃烧利用。',
          '制造有机物：为生物圈中的其他生物提供食物和能量来源，是生态系统的生产者。',
        ],
      },
      { type: 'heading', text: '碳—氧平衡被打破：温室效应' },
      {
        type: 'paragraph',
        text: '化石燃料的大量燃烧使二氧化碳排放量急剧增加，森林的乱砍滥伐又使吸收二氧化碳的绿色植物减少，大气中二氧化碳浓度不断上升，导致全球气候变暖，这就是温室效应加剧。它会引发冰川融化、海平面上升、极端天气增多等一系列环境问题。',
      },
      { type: 'heading', text: '维持碳—氧平衡，从我做起' },
      {
        type: 'list',
        items: [
          '保护现有森林和草原植被，大力植树造林，增加绿色植物的覆盖面积。',
          '节约能源，减少化石燃料的燃烧，开发太阳能、风能等清洁能源，降低二氧化碳排放。',
          '低碳生活：绿色出行、节约用电用纸，从身边小事做起。',
        ],
      },
      {
        type: 'paragraph',
        text: '绿色植物通过光合作用把二氧化碳和水转化为有机物并释放氧气，在物质上联系着生物圈的碳循环，在能量上固定太阳能——它是生物圈存在和发展的基石。',
      },
    ],
    en: [
      { type: 'heading', text: 'The carbon–oxygen balance of the biosphere' },
      {
        type: 'paragraph',
        text: 'Organisms throughout the biosphere take in oxygen and release carbon dioxide during respiration, and human activities such as burning coal and oil do the same. Green plants, through photosynthesis, continually absorb carbon dioxide from the atmosphere and release oxygen, keeping the atmospheric levels of the two gases relatively stable — this is the carbon–oxygen balance.',
      },
      {
        type: 'formula',
        latex: '6\\mathrm{CO_2} + 6\\mathrm{H_2O} \\xrightarrow[\\text{chloroplast}]{\\text{light energy}} \\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2}',
        caption: 'Photosynthesis: carbon dioxide in, oxygen out',
      },
      { type: 'heading', text: 'The role of photosynthesis in the balance' },
      {
        type: 'list',
        items: [
          'Absorbing carbon dioxide: green plants are the main “consumers” of atmospheric CO₂, fixing its carbon into organic molecules.',
          'Releasing oxygen: nearly all oxygen on Earth comes from photosynthesis by green plants, including algae in the oceans, supplying respiration and combustion.',
          'Producing food: plants provide organic matter and energy for almost all other organisms — they are the producers of ecosystems.',
        ],
      },
      { type: 'heading', text: 'Upsetting the balance: the enhanced greenhouse effect' },
      {
        type: 'paragraph',
        text: 'Heavy burning of fossil fuels releases large quantities of carbon dioxide, while deforestation removes the plants that absorb it. Rising atmospheric CO₂ intensifies the greenhouse effect and warms the global climate, leading to melting glaciers, rising sea levels and more extreme weather.',
      },
      { type: 'heading', text: 'Maintaining the balance: what we can do' },
      {
        type: 'list',
        items: [
          'Protect existing forests and grasslands and plant more trees to expand vegetation cover.',
          'Save energy, burn less fossil fuel and develop clean energy such as solar and wind power to cut CO₂ emissions.',
          'Live a low-carbon life: greener transport, saving electricity and paper, starting with small daily actions.',
        ],
      },
      {
        type: 'paragraph',
        text: 'By converting carbon dioxide and water into organic matter and releasing oxygen, photosynthesis links the carbon cycle of the biosphere materially and fixes solar energy — green plants are the foundation of the biosphere.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '生物圈中氧气含量保持相对稳定，主要依赖于（　）',
        en: 'The relatively stable oxygen content of the biosphere depends mainly on (　)',
      },
      options: {
        zh: [
          '绿色植物的呼吸作用',
          '绿色植物的光合作用',
          '动物的呼吸作用',
          '自然界中水分子的分解',
        ],
        en: [
          'respiration of green plants',
          'photosynthesis of green plants',
          'respiration of animals',
          'the natural splitting of water molecules in the environment',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '绿色植物通过光合作用不断吸收二氧化碳、释放氧气，补充被呼吸作用和燃烧消耗的氧气，维持碳—氧平衡。A、C 都消耗氧气，与题意相反；大气中水的自然分解极微，不是氧气的主要来源，故 D 错。',
        en: 'Photosynthesis continually absorbs CO₂ and releases O₂, replacing the oxygen consumed by respiration and combustion. A and C both consume oxygen — the opposite effect; natural water splitting in the atmosphere is negligible and not the source of our oxygen (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '大气中二氧化碳浓度不断升高、温室效应加剧的主要原因有（　）①化石燃料的大量燃烧　②森林遭到乱砍滥伐　③绿色植物的光合作用增强　④动植物的呼吸作用',
        en: 'The main reasons for rising atmospheric CO₂ and the intensifying greenhouse effect are (　) ① heavy burning of fossil fuels ② deforestation ③ enhanced photosynthesis of green plants ④ respiration of animals and plants',
      },
      options: {
        zh: ['①②', '①③', '②④', '③④'],
        en: ['①②', '①③', '②④', '③④'],
      },
      answerIndex: 0,
      explanation: {
        zh: '化石燃料燃烧大量排放 CO₂（①），乱砍滥伐使吸收 CO₂ 的植物减少（②），二者共同使大气 CO₂ 升高。光合作用增强会吸收更多 CO₂，恰恰有助于缓解（③错）；动植物呼吸是碳循环的正常环节，不是 CO₂ 异常升高的主因（④错）。',
        en: 'Fossil fuel burning releases large amounts of CO₂ (①), while deforestation removes the plants that absorb it (②) — together they raise atmospheric CO₂. Stronger photosynthesis would absorb more CO₂ and ease the problem (③ wrong); respiration is a normal part of the carbon cycle, not the cause of the abnormal rise (④ wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列做法中，有利于维持生物圈碳—氧平衡的是（　）',
        en: 'Which practice helps maintain the carbon–oxygen balance of the biosphere?',
      },
      options: {
        zh: [
          '大力植树造林，保护植被',
          '过度放牧，开垦草原',
          '大量使用一次性木筷',
          '多开私家车，少用公共交通',
        ],
        en: [
          'Planting trees on a large scale and protecting vegetation',
          'Overgrazing and reclaiming grassland',
          'Using large numbers of disposable wooden chopsticks',
          'Driving private cars more and using public transport less',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '植树造林能扩大绿色植物的覆盖面积，增强对 CO₂ 的吸收和 O₂ 的释放。B、C 都会破坏植被、减少植物总量；D 增加化石燃料消耗、增大 CO₂ 排放，均不利于碳—氧平衡。',
        en: 'Afforestation expands vegetation cover, increasing CO₂ uptake and O₂ release. B and C destroy vegetation and reduce plant mass; D burns more fossil fuel and emits more CO₂ — all of which harm the balance.',
      },
    },
  ],
};
