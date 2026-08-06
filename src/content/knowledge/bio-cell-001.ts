import type { KnowledgePoint } from '../types';

export const bioCell001: KnowledgePoint = {
  id: 'bio-cell-001',
  subject: 'biology',
  title: { zh: '动植物细胞的基本结构', en: 'Basic Structure of Plant and Animal Cells' },
  summary: {
    zh: '认识细胞膜、细胞质、细胞核、线粒体等共有结构，以及细胞壁、叶绿体、液泡等植物细胞特有的结构，比较动植物细胞的异同。',
    en: 'Learn the structures shared by plant and animal cells — cell membrane, cytoplasm, nucleus and mitochondria — and those unique to plant cells: cell wall, chloroplasts and a large vacuole.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch2', 'pep-bio-s1/ch3'],
    igcse: ['0610/2'],
  },
  keywords: {
    zh: ['细胞壁', '细胞膜', '细胞质', '细胞核', '线粒体', '叶绿体', '液泡', '动植物细胞比较'],
    en: ['cell wall', 'cell membrane', 'cytoplasm', 'nucleus', 'mitochondrion', 'chloroplast', 'vacuole', 'plant and animal cells'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '细胞是生物体结构和功能的基本单位' },
      {
        type: 'paragraph',
        text: '除病毒外，生物体都是由细胞构成的。显微镜下观察洋葱鳞片叶内表皮细胞和人的口腔上皮细胞，可以看到动植物细胞既有相同的基本结构，也有明显的差异。显微镜的总放大倍数等于目镜与物镜放大倍数的乘积。',
      },
      {
        type: 'formula',
        latex: '\\text{总放大倍数} = \\text{目镜放大倍数} \\times \\text{物镜放大倍数}',
        caption: '显微镜放大倍数的计算',
      },
      { type: 'heading', text: '动植物细胞共有的基本结构' },
      {
        type: 'list',
        items: [
          '细胞膜：一层极薄的膜，紧贴细胞壁内侧（植物细胞），起保护作用，并控制物质进出细胞。',
          '细胞质：细胞膜以内、细胞核以外的部分，是细胞进行生命活动的主要场所。',
          '细胞核：近似球形，内含遗传物质（DNA），是细胞的控制中心，控制生物的发育和遗传。',
          '线粒体：进行呼吸作用的主要场所，把有机物中的化学能释放出来，供细胞生命活动利用，被称为细胞的“动力车间”。',
        ],
      },
      { type: 'heading', text: '植物细胞特有的结构' },
      {
        type: 'list',
        items: [
          '细胞壁：位于细胞最外层，主要由纤维素构成，起保护和支持细胞的作用，使植物细胞保持一定的形状。',
          '叶绿体：存在于植物绿色部分的细胞中，是进行光合作用的场所，把光能转变成化学能储存在有机物中。',
          '液泡：成熟的植物细胞有一个中央大液泡，液泡内的液体叫细胞液，溶解着糖类、无机盐、色素等多种物质。',
        ],
      },
      {
        type: 'paragraph',
        text: '比较动植物细胞：相同点是都有细胞膜、细胞质、细胞核和线粒体；不同点是植物细胞有细胞壁、叶绿体和液泡，动物细胞没有。要注意：并非所有植物细胞都有叶绿体，如根尖细胞、洋葱鳞片叶内表皮细胞就不含叶绿体；也不是所有植物细胞都有中央大液泡，幼嫩细胞的液泡小而且多。',
      },
      {
        type: 'list',
        items: [
          '叶绿体和线粒体都是细胞中的能量转换器：叶绿体把光能转变为化学能，线粒体把有机物中的化学能释放出来。',
          '动物细胞没有细胞壁，放在清水中会因吸水而涨破；植物细胞有细胞壁保护，吸水后不会涨破。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'The cell is the basic unit of structure and function' },
      {
        type: 'paragraph',
        text: 'All living organisms except viruses are made of cells. Viewing onion epidermal cells and human cheek cells under a microscope shows that plant and animal cells share basic structures but also differ clearly. The total magnification of a microscope is the product of the eyepiece and objective lens magnifications.',
      },
      {
        type: 'formula',
        latex: '\\text{total magnification} = \\text{eyepiece} \\times \\text{objective}',
        caption: 'Calculating microscope magnification',
      },
      { type: 'heading', text: 'Structures shared by plant and animal cells' },
      {
        type: 'list',
        items: [
          'Cell membrane: a thin partially permeable layer that controls the movement of substances into and out of the cell.',
          'Cytoplasm: the jelly-like region inside the membrane where most chemical reactions of the cell take place.',
          'Nucleus: contains the genetic material (DNA) and controls the activities of the cell.',
          'Mitochondria: the sites of aerobic respiration, releasing energy from organic molecules to power the cell — the “powerhouses” of the cell.',
        ],
      },
      { type: 'heading', text: 'Structures found only in plant cells' },
      {
        type: 'list',
        items: [
          'Cell wall: a tough layer made of cellulose outside the membrane; it supports and protects the cell and gives it a fixed shape.',
          'Chloroplasts: found in the green parts of plants; they contain chlorophyll and are the site of photosynthesis, converting light energy into chemical energy.',
          'Vacuole: a mature plant cell has a large central vacuole filled with cell sap — a solution of sugars, salts and pigments.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Comparing the two cell types: both have a cell membrane, cytoplasm, a nucleus and mitochondria; only plant cells have a cellulose cell wall, chloroplasts and a large permanent vacuole. Note that not every plant cell contains chloroplasts — root cells and onion epidermal cells do not — and young plant cells have only small, scattered vacuoles.',
      },
      {
        type: 'list',
        items: [
          'Chloroplasts and mitochondria are both energy converters: chloroplasts store light energy as chemical energy, while mitochondria release it through aerobic respiration.',
          'Without a cell wall, an animal cell placed in pure water takes in water and may burst; a plant cell is protected by its wall and becomes firm (turgid) instead.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列结构中，动植物细胞都具有的是（　）',
        en: 'Which structure is found in BOTH plant and animal cells?',
      },
      options: {
        zh: ['细胞壁', '叶绿体', '线粒体', '中央大液泡'],
        en: ['Cell wall', 'Chloroplast', 'Mitochondrion', 'Large central vacuole'],
      },
      answerIndex: 2,
      explanation: {
        zh: '线粒体是呼吸作用的主要场所，动植物细胞都有。细胞壁、叶绿体、中央大液泡是植物细胞特有的结构，动物细胞没有，故 A、B、D 错。',
        en: 'Mitochondria carry out aerobic respiration in both cell types. The cell wall, chloroplasts and a large central vacuole are only found in plant cells, so A, B and D are wrong.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '用显微镜观察洋葱鳞片叶内表皮细胞和人的口腔上皮细胞，下列说法正确的是（　）',
        en: 'When observing onion epidermal cells and human cheek cells under a microscope, which statement is correct?',
      },
      options: {
        zh: [
          '洋葱内表皮细胞有叶绿体，能进行光合作用',
          '人的口腔上皮细胞有细胞壁，形状规则',
          '两种细胞都有细胞膜、细胞质、细胞核',
          '两种细胞都有中央大液泡',
        ],
        en: [
          'Onion epidermal cells contain chloroplasts and can photosynthesise',
          'Human cheek cells have a cell wall and a regular shape',
          'Both cell types have a cell membrane, cytoplasm and a nucleus',
          'Both cell types have a large central vacuole',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '动植物细胞都有细胞膜、细胞质、细胞核和线粒体。洋葱内表皮细胞不见光，不含叶绿体，A 错；口腔上皮细胞是动物细胞，没有细胞壁，B 错；动物细胞没有中央大液泡，D 错。',
        en: 'Both cell types share a cell membrane, cytoplasm, nucleus and mitochondria. Onion epidermal cells are not exposed to light and have no chloroplasts (A wrong); cheek cells are animal cells with no cell wall (B wrong); animal cells have no large central vacuole (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '把人的口腔上皮细胞放在清水中会涨破，而洋葱表皮细胞放在清水中却不会，原因是洋葱表皮细胞具有（　）',
        en: 'Human cheek cells placed in pure water burst, but onion epidermal cells do not, because onion cells have',
      },
      options: {
        zh: ['细胞膜', '细胞壁', '细胞核', '线粒体'],
        en: ['a cell membrane', 'a cell wall', 'a nucleus', 'mitochondria'],
      },
      answerIndex: 1,
      explanation: {
        zh: '细胞壁位于植物细胞最外层，具有保护和支持作用，能限制细胞过度吸水膨胀，所以植物细胞吸水后不会涨破。动物细胞没有细胞壁，吸水过多就会涨破。',
        en: 'The cellulose cell wall supports and protects the plant cell, resisting the pressure of incoming water, so the cell becomes turgid but does not burst. Animal cells lack a cell wall and burst when they take in too much water.',
      },
    },
  ],
  related: ['bio-cell-002', 'bio-plant-001', 'igcse-0610-2-1-cells'],
};
