import type { KnowledgePoint } from '../types';

export const bioEco003: KnowledgePoint = {
  id: 'bio-eco-003',
  subject: 'biology',
  title: { zh: '生态系统的物质循环与能量流动', en: 'Material Cycles and Energy Flow in Ecosystems' },
  summary: {
    zh: '理解能量沿食物链单向流动、逐级递减（传递效率约 10%–20%）的规律，以及物质（以碳为例）在生物群落与无机环境之间的循环。',
    en: 'Understand that energy flows one way along food chains and decreases at each trophic level (transfer efficiency about 10%–20%), while matter — carbon, for example — cycles between the biotic community and the abiotic environment.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch1'],
    igcse: ['0610/19'],
  },
  keywords: {
    zh: ['能量流动', '物质循环', '单向流动', '逐级递减', '碳循环', '能量传递效率', '能量金字塔', '营养级'],
    en: ['energy flow', 'nutrient cycle', 'carbon cycle', 'energy transfer efficiency', 'trophic level', 'pyramid of energy', 'photosynthesis', 'decomposer'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '能量流动的起点与途径' },
      {
        type: 'paragraph',
        text: '生态系统中能量的最终来源是太阳能。生产者通过光合作用把太阳能固定在制造的有机物中，这是输入生态系统的总能量。能量随后沿食物链（网）从一个营养级流向下一个营养级。',
      },
      { type: 'heading', text: '能量流动的特点：单向流动、逐级递减' },
      {
        type: 'paragraph',
        text: '每个营养级同化的能量都有三个去向：一部分通过呼吸作用以热能形式散失，一部分流向分解者，还有一部分暂时未被利用，只有约 10%–20% 的能量能够传递给下一个营养级。热能一旦散失就不能再被生产者利用，所以能量流动是单向的、不可逆转的，并且沿食物链逐级递减。',
      },
      { type: 'formula', latex: '\\eta = \\dfrac{E_{n+1}}{E_n} \\approx 10\\% \\sim 20\\%', caption: '相邻营养级之间的能量传递效率' },
      {
        type: 'list',
        items: [
          '食物链通常不超过 4–5 个营养级，因为越往后剩余能量越少，不足以维持更高营养级的种群。',
          '能量金字塔每个营养级的能量都低于下一级，形状永远是上窄下宽的正金字塔。',
          '正是由于能量逐级递减，“一山不容二虎”——顶级消费者需要极大的捕食范围。',
        ],
      },
      { type: 'heading', text: '物质循环：以碳循环为例' },
      {
        type: 'paragraph',
        text: '组成生物体的碳、氢、氧、氮、磷、硫等元素，都在生物群落与无机环境之间不断循环。以碳循环为例：大气中的二氧化碳通过绿色植物的光合作用进入生物群落，转化为有机物中的碳；生物通过呼吸作用、分解者通过分解作用又把碳以二氧化碳的形式归还大气；化石燃料的燃烧也向大气释放二氧化碳。',
      },
      {
        type: 'list',
        items: [
          '碳在生物群落与无机环境之间主要以二氧化碳（CO₂）的形式循环。',
          '碳在生物群落内部沿食物链以含碳有机物的形式传递。',
          '物质循环具有全球性，又叫生物地球化学循环；物质可以反复利用，而能量不能循环利用——这是能量流动与物质循环的本质区别。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Where energy flow starts and how it moves' },
      {
        type: 'paragraph',
        text: 'The ultimate source of energy for almost all ecosystems is sunlight. Producers fix light energy into organic compounds by photosynthesis — this is the total energy input of the ecosystem. Energy then passes along food chains and food webs from one trophic level to the next.',
      },
      { type: 'heading', text: 'Features of energy flow: one-way and decreasing' },
      {
        type: 'paragraph',
        text: 'The energy assimilated at each trophic level has three fates: part is lost as heat in respiration, part passes to decomposers, and part remains unused; only about 10%–20% is transferred to the next trophic level. Once heat is lost it cannot be reused by producers, so energy flow is one-way, non-cyclic, and decreases at every step along the food chain.',
      },
      { type: 'formula', latex: '\\eta = \\dfrac{E_{n+1}}{E_n} \\approx 10\\% \\sim 20\\%', caption: 'Energy transfer efficiency between successive trophic levels' },
      {
        type: 'list',
        items: [
          'Food chains rarely exceed 4–5 trophic levels, because too little energy remains to support a higher level.',
          'A pyramid of energy is always upright: each trophic level contains less energy than the one below it.',
          'Because energy decreases at each level, top consumers need a very large hunting range — “one mountain cannot shelter two tigers”.',
        ],
      },
      { type: 'heading', text: 'Material cycling: the carbon cycle as an example' },
      {
        type: 'paragraph',
        text: 'Elements such as carbon, hydrogen, oxygen, nitrogen, phosphorus and sulfur cycle continuously between the biotic community and the abiotic environment. In the carbon cycle, carbon dioxide from the atmosphere enters the biotic community through photosynthesis and becomes carbon in organic compounds; respiration by organisms and decomposition by decomposers return carbon to the atmosphere as carbon dioxide, and burning fossil fuels also releases carbon dioxide.',
      },
      {
        type: 'list',
        items: [
          'Between the biotic community and the atmosphere, carbon cycles mainly as carbon dioxide (CO₂).',
          'Within the community, carbon passes along food chains as carbon-containing organic compounds.',
          'Material cycles are global (biogeochemical cycles); matter can be reused again and again, but energy cannot be recycled — this is the essential difference between material cycling and energy flow.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '生态系统中能量流动的特点是（　）',
        en: 'What are the features of energy flow in an ecosystem?',
      },
      options: {
        zh: [
          '单向流动、逐级递减',
          '单向流动、逐级递增',
          '循环流动、逐级递减',
          '循环流动、总量不变',
        ],
        en: [
          'One-way flow, decreasing at each level',
          'One-way flow, increasing at each level',
          'Cyclic flow, decreasing at each level',
          'Cyclic flow with a constant total amount',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '各营养级通过呼吸作用把大量能量以热能形式散失，热能无法被生产者重新固定，所以能量只能沿食物链单向流动、不可逆转，且每经过一个营养级就减少一次（只剩约 10%–20%）。能量不能像物质那样循环利用，排除 C、D；传递中只减不增，排除 B。',
        en: 'At each trophic level much energy is lost as heat in respiration, and heat cannot be fixed again by producers, so energy flows one way along the food chain and decreases at every step (only about 10%–20% is passed on). Energy cannot be recycled like matter (C and D wrong); transfer only decreases, never increases (B wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '在食物链“草 → 兔 → 鹰”中，草通过光合作用固定的能量为 10000 kJ。若能量传递效率按 20% 计算，鹰最多能获得的能量约为（　）',
        en: 'In the food chain “grass → rabbit → eagle”, the grass fixes 10,000 kJ of energy by photosynthesis. If the energy transfer efficiency is 20%, the maximum energy the eagle can obtain is about',
      },
      options: {
        zh: ['2000 kJ', '400 kJ', '1000 kJ', '1600 kJ'],
        en: ['2000 kJ', '400 kJ', '1000 kJ', '1600 kJ'],
      },
      answerIndex: 1,
      explanation: {
        zh: '兔获得 10000 × 20% = 2000 kJ，鹰再获得 2000 × 20% = 400 kJ，即 10000 × 20% × 20% = 400 kJ。2000 kJ 只乘了一次传递效率（那是兔获得的能量，排除 A）；1000 kJ 错用了 10% 以外的口径；1600 kJ 没有对应的正确算式（排除 C、D）。',
        en: 'The rabbit obtains 10,000 × 20% = 2000 kJ, and the eagle then obtains 2000 × 20% = 400 kJ, i.e. 10,000 × 20% × 20% = 400 kJ. 2000 kJ applies the efficiency only once — that is the rabbit’s share (A wrong); 1000 kJ and 1600 kJ follow no valid calculation (C and D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '在碳循环中，大气中的碳元素进入生物群落的主要途径是（　）',
        en: 'In the carbon cycle, the main route by which carbon enters the biotic community from the atmosphere is',
      },
      options: {
        zh: ['呼吸作用', '光合作用', '分解者的分解作用', '化石燃料的燃烧'],
        en: ['respiration', 'photosynthesis', 'decomposition by decomposers', 'combustion of fossil fuels'],
      },
      answerIndex: 1,
      explanation: {
        zh: '生产者通过光合作用吸收大气中的 CO₂，把它固定到有机物中，这是碳进入生物群落的主要途径。呼吸作用、分解作用和燃烧都是把碳以 CO₂ 形式从生物群落（或燃料）释放回大气的过程，方向恰好相反（排除 A、C、D）。',
        en: 'Producers take in atmospheric CO₂ by photosynthesis and fix it into organic compounds — this is the main route for carbon to enter the biotic community. Respiration, decomposition and combustion all release carbon as CO₂ back into the atmosphere — the opposite direction (A, C and D wrong).',
      },
    },
  ],
  related: ['igcse-0610-19-1-ecosystems', 'bio-eco-001', 'bio-plant-004'],
};
