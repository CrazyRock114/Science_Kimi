import type { KnowledgePoint } from '../types';

export const bioCell004: KnowledgePoint = {
  id: 'bio-cell-004',
  subject: 'biology',
  title: { zh: '细胞分裂与细胞生长', en: 'Cell Division and Cell Growth' },
  summary: {
    zh: '理解细胞通过分裂增加数目、通过生长增大体积，认识细胞分裂时染色体先复制后平均分配的规律，以及细胞不能无限长大的原因。',
    en: 'Understand how organisms grow through cell division (increasing cell number) and cell growth (increasing cell size), learn how chromosomes are duplicated and shared equally during division, and why cells cannot grow indefinitely.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch2', 'pep-bio-s1/ch6'],
    igcse: ['0610/2'],
  },
  keywords: {
    zh: ['细胞分裂', '细胞生长', '染色体', '有丝分裂', '细胞分化', '表面积与体积比'],
    en: ['cell division', 'cell growth', 'chromosomes', 'mitosis', 'cell differentiation', 'surface area to volume ratio'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '生物体由小长大：细胞生长与细胞分裂' },
      {
        type: 'paragraph',
        text: '生物体由小长大，与细胞的生长、分裂和分化分不开。细胞生长是指新产生的细胞不断从周围环境中吸收营养物质，转变成自身组成物质，体积由小变大。细胞分裂是指一个细胞分成两个细胞，使细胞数目增多。',
      },
      {
        type: 'formula',
        latex: 'N = 2^n',
        caption: '一个细胞经过 n 次分裂后形成 2ⁿ 个细胞',
      },
      { type: 'heading', text: '细胞为什么不能无限长大' },
      {
        type: 'paragraph',
        text: '细胞长大时，体积的增长比表面积的增长快得多。以立方体细胞为例，边长为 a 时表面积与体积之比为 6/a：a 越大，比值越小。细胞需要通过细胞膜从外界吸收营养、排出废物，表面积相对越小，物质运输就越供不应求，所以细胞长到一定大小就要分裂。',
      },
      {
        type: 'formula',
        latex: '\\dfrac{S}{V} = \\dfrac{6a^2}{a^3} = \\dfrac{6}{a}',
        caption: '立方体细胞的表面积与体积之比随边长 a 增大而减小',
      },
      { type: 'heading', text: '细胞分裂的过程与染色体的变化' },
      {
        type: 'paragraph',
        text: '细胞分裂时，细胞核先由一个分成两个，随后细胞质分成两份，每份各含一个细胞核。动物细胞的细胞膜从中部向内凹陷，缢裂为两个细胞；植物细胞则在原来细胞的中央形成新的细胞膜和新的细胞壁。',
      },
      {
        type: 'paragraph',
        text: '细胞核中有染色体，染色体由 DNA 和蛋白质组成，DNA 是遗传物质。细胞分裂时，染色体先复制加倍，再平均分配到两个新细胞中，因此两个新细胞以及新细胞与原细胞所含的遗传物质是完全一样的。有丝分裂保证了遗传信息在亲子代细胞之间的稳定传递。',
      },
      { type: 'heading', text: '细胞分化形成组织' },
      {
        type: 'list',
        items: [
          '分裂产生的新细胞在形态、结构和生理功能上发生差异性变化，这个过程叫细胞分化。',
          '细胞分化的结果是形成不同的组织，如植物的保护组织、输导组织，动物的上皮组织、肌肉组织等。',
          '细胞分裂增加细胞数目，细胞生长增大细胞体积，细胞分化形成不同类型的细胞——三者共同促成生物体的生长发育。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'How organisms grow: cell growth and cell division' },
      {
        type: 'paragraph',
        text: 'An organism grows through cell growth, cell division and cell differentiation. In cell growth, new cells absorb nutrients and convert them into their own material, increasing in size. In cell division, one cell divides into two, increasing the number of cells.',
      },
      {
        type: 'formula',
        latex: 'N = 2^n',
        caption: 'One cell gives rise to 2ⁿ cells after n rounds of division',
      },
      { type: 'heading', text: 'Why cells cannot grow indefinitely' },
      {
        type: 'paragraph',
        text: 'As a cell grows, its volume increases much faster than its surface area. For a cube-shaped cell of side a, the surface area to volume ratio is 6/a: the larger a becomes, the smaller the ratio. Since all nutrients and wastes must cross the cell membrane, a large cell cannot exchange materials fast enough to support its volume — so cells divide once they reach a certain size.',
      },
      {
        type: 'formula',
        latex: '\\dfrac{S}{V} = \\dfrac{6a^2}{a^3} = \\dfrac{6}{a}',
        caption: 'The surface area to volume ratio of a cubic cell decreases as side a increases',
      },
      { type: 'heading', text: 'Cell division and the behaviour of chromosomes' },
      {
        type: 'paragraph',
        text: 'During cell division the nucleus divides first, then the cytoplasm splits into two parts, each containing a nucleus. In animal cells the membrane pinches inwards until the cell separates; in plant cells a new cell membrane and a new cell wall form across the middle of the parent cell.',
      },
      {
        type: 'paragraph',
        text: 'The nucleus contains chromosomes, made of DNA and protein, and DNA carries the genetic information. Before division the chromosomes are duplicated, then shared equally between the two new cells, so the daughter cells — and the parent cell — all contain exactly the same genetic material. Mitosis thus ensures the stable transmission of genetic information from one cell generation to the next.',
      },
      { type: 'heading', text: 'Cell differentiation forms tissues' },
      {
        type: 'list',
        items: [
          'New cells from division develop differences in shape, structure and function — this is cell differentiation.',
          'Differentiation produces tissues, such as protective and transport tissues in plants, and epithelial and muscle tissues in animals.',
          'Division increases cell number, growth increases cell size, and differentiation produces specialised cell types — together they drive the growth and development of the organism.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一个细胞经过 3 次连续分裂后，形成的细胞数目是（　）',
        en: 'After 3 successive rounds of division, one cell produces how many cells?',
      },
      options: {
        zh: ['3 个', '6 个', '8 个', '9 个'],
        en: ['3', '6', '8', '9'],
      },
      answerIndex: 2,
      explanation: {
        zh: '细胞分裂是 1 个变 2 个、2 个变 4 个的指数增长，n 次分裂后为 2ⁿ 个，3 次分裂为 2³ = 8 个。选 6 个是错把分裂当成每次加 2；选 9 个是错用了 3²。',
        en: 'Each division doubles the cell number, so after n divisions there are 2ⁿ cells: 2³ = 8 after 3 divisions. Choosing 6 treats it as “add 2 each time”; choosing 9 misuses 3².',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '细胞分裂过程中，染色体的变化是（　）',
        en: 'During cell division, the chromosomes',
      },
      options: {
        zh: [
          '不复制，直接随机分配到两个新细胞中',
          '先复制加倍，再平均分配到两个新细胞中',
          '先复制加倍，全部进入其中一个新细胞',
          '在分裂过程中逐渐消失',
        ],
        en: [
          'are shared randomly between the two new cells without being copied',
          'are first duplicated, then shared equally between the two new cells',
          'are duplicated but all pass into just one of the new cells',
          'gradually disappear during division',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '染色体先复制加倍，再平均分配，使两个新细胞及新细胞与原细胞的遗传物质完全相同，保证遗传的稳定性。A、C 都会导致新细胞遗传物质不完整，D 与事实不符。',
        en: 'Chromosomes are duplicated and then shared equally, so both daughter cells receive genetic material identical to the parent cell — this keeps inheritance stable. A and C would give daughter cells an incomplete set; D is simply untrue.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '细胞不能无限长大的主要原因是（　）',
        en: 'The main reason cells cannot grow indefinitely is that',
      },
      options: {
        zh: [
          '细胞核太小，装不下更多的遗传物质',
          '细胞长大后体积增长比表面积快，物质运输效率下降',
          '细胞长大后会被其他细胞挤破',
          '细胞分裂的次数有严格限制',
        ],
        en: [
          'the nucleus is too small to hold more genetic material',
          'as a cell grows, volume increases faster than surface area, so transport across the membrane becomes inefficient',
          'larger cells get crushed by neighbouring cells',
          'the number of divisions a cell can undergo is strictly limited',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '细胞越大，表面积与体积的比值越小，单位体积对应的膜面积不足以完成物质交换，所以细胞长到一定大小就分裂。A 不是主要限制因素；C 没有依据；D 说的是分裂次数的限制（如细胞衰老），与“不能无限长大”的原因无关。',
        en: 'The larger the cell, the smaller its surface area to volume ratio, and the membrane cannot supply the volume fast enough — so cells divide instead of growing forever. A is not the main limiting factor; C has no basis; D concerns limits on the number of divisions (cell ageing), not the reason size is limited.',
      },
    },
  ],
};
