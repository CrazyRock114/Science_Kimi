import type { KnowledgePoint } from '../types';

export const chemAtomic002: KnowledgePoint = {
  id: 'chem-atomic-002',
  subject: 'chemistry',
  title: { zh: '元素与元素符号', en: 'Elements and Chemical Symbols' },
  summary: {
    zh: '元素是具有相同核电荷数（质子数）的一类原子的总称。理解元素与原子概念的区别，掌握元素符号的书写规则及其表示的意义。',
    en: 'An element is a class of atoms with the same proton number. Understand the difference between “element” and “atom”, and master how chemical symbols are written and what they represent.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch3'],
    igcse: ['0620/2'],
  },
  keywords: {
    zh: ['元素', '元素符号', '质子数', '金属元素', '非金属元素', '地壳含量'],
    en: ['element', 'chemical symbol', 'proton number', 'metal', 'non-metal', 'abundance in the crust'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是元素？' },
      {
        type: 'paragraph',
        text: '元素是具有相同核电荷数（即核内质子数）的一类原子的总称。质子数决定元素的种类：质子数相同的原子属于同一种元素，质子数不同的原子属于不同种元素。例如，所有质子数为 8 的原子都是氧元素，质子数为 1 的原子都是氢元素。',
      },
      {
        type: 'paragraph',
        text: '元素是宏观概念，只讲种类、不讲个数；原子是微观粒子，既讲种类、也讲个数。描述物质组成时用元素（如“水由氢元素和氧元素组成”），描述分子构成时用原子（如“一个水分子由两个氢原子和一个氧原子构成”）。',
      },
      {
        type: 'list',
        items: [
          '地壳中含量居前四位的元素依次是：氧、硅、铝、铁。',
          '元素分为金属元素（如铁、铜、钠）和非金属元素（如氧、碳、硫，包括稀有气体元素氦、氖、氩等）。',
          '生物细胞中含量最多的元素是氧，其次是碳、氢、氮。',
        ],
      },
      { type: 'heading', text: '元素符号' },
      {
        type: 'paragraph',
        text: '为了书写和交流方便，国际上统一采用元素拉丁文名称的第一个大写字母来表示元素；当几种元素的第一个字母相同时，就附加一个小写字母加以区别。如 C 表示碳、Ca 表示钙、Cu 表示铜、Cl 表示氯。书写时必须“一大二小”：第一个字母大写，第二个字母小写。',
      },
      {
        type: 'paragraph',
        text: '元素符号表示的意义：一是表示一种元素，二是表示这种元素的一个原子。例如 H 既表示氢元素，也表示一个氢原子。对于由原子直接构成的物质（金属、稀有气体和部分固态非金属，如 Fe、He、C），元素符号还能表示这种物质。',
      },
      {
        type: 'list',
        items: [
          '元素符号前面加上数字后，只具有微观意义，表示原子的个数，如 2H 表示两个氢原子。',
          '常见元素符号：氢 H、氧 O、碳 C、氮 N、钠 Na、镁 Mg、铝 Al、硫 S、氯 Cl、钾 K、钙 Ca、铁 Fe、铜 Cu、锌 Zn、银 Ag。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'What is an element?' },
      {
        type: 'paragraph',
        text: 'An element is a substance that cannot be broken down into simpler substances by chemical means; it consists of atoms that all have the same proton (atomic) number. The proton number decides which element an atom belongs to: atoms with 8 protons are all oxygen, atoms with 1 proton are all hydrogen.',
      },
      {
        type: 'paragraph',
        text: '“Element” refers to a type of atom, so we talk about kinds of elements, never about counting individual elements. When describing what a substance is made of we use elements (water contains the elements hydrogen and oxygen); when describing the make-up of one particle we count atoms (one water molecule contains two hydrogen atoms and one oxygen atom).',
      },
      {
        type: 'list',
        items: [
          'The four most abundant elements in the Earth’s crust are oxygen, silicon, aluminium and iron.',
          'Elements are classified as metals (e.g. iron, copper, sodium) and non-metals (e.g. oxygen, carbon, sulfur, and the noble gases helium, neon, argon).',
          'Oxygen is the most abundant element in living cells, followed by carbon, hydrogen and nitrogen.',
        ],
      },
      { type: 'heading', text: 'Chemical symbols' },
      {
        type: 'paragraph',
        text: 'Each element is represented by a symbol taken from its name: a single capital letter, or a capital letter followed by one small letter when the first letters coincide — C for carbon, Ca for calcium, Cu for copper, Cl for chlorine. Always write the first letter as a capital and the second as lower case.',
      },
      {
        type: 'paragraph',
        text: 'A symbol has two meanings: it stands for the element, and it stands for one atom of that element. For example, H means the element hydrogen and also one hydrogen atom. For substances made of separate atoms (metals, noble gases and some solid non-metals such as Fe, He, C), the symbol also represents the substance itself.',
      },
      {
        type: 'list',
        items: [
          'A number placed in front of a symbol counts atoms only: 2H means two hydrogen atoms.',
          'Common symbols: hydrogen H, oxygen O, carbon C, nitrogen N, sodium Na, magnesium Mg, aluminium Al, sulfur S, chlorine Cl, potassium K, calcium Ca, iron Fe, copper Cu, zinc Zn, silver Ag.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '决定元素种类的是原子的什么？',
        en: 'What determines which element an atom belongs to?',
      },
      options: {
        zh: ['质子数（核电荷数）', '中子数', '核外电子数', '相对原子质量'],
        en: ['Proton (atomic) number', 'Neutron number', 'Number of electrons', 'Relative atomic mass'],
      },
      answerIndex: 0,
      explanation: {
        zh: '元素是具有相同核电荷数（质子数）的一类原子的总称，质子数相同的原子属于同种元素。中子数不同的原子（同位素）仍属同种元素。',
        en: 'An element is defined by its proton number: all atoms with the same number of protons belong to the same element. Atoms with different numbers of neutrons (isotopes) are still the same element.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列关于水的说法中，正确的是哪一个？',
        en: 'Which statement about water is correct?',
      },
      options: {
        zh: [
          '水由氢元素和氧元素组成',
          '水由两个氢元素和一个氧元素组成',
          '水由氢气和氧气组成',
          '一个水分子由两个氢元素和一个氧元素构成',
        ],
        en: [
          'Water is made of the elements hydrogen and oxygen',
          'Water is made of two hydrogen elements and one oxygen element',
          'Water is made of hydrogen gas and oxygen gas',
          'One water molecule is made of two hydrogen elements and one oxygen element',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '元素是宏观概念，只讲种类不讲个数，不能说“两个氢元素”；描述分子构成要用原子：一个水分子由两个氢原子和一个氧原子构成。',
        en: '“Element” describes a kind of atom and is never counted, so “two hydrogen elements” is wrong. Counting applies to atoms: one water molecule contains two hydrogen atoms and one oxygen atom.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列元素符号书写正确的是哪一个？',
        en: 'Which chemical symbol is written correctly?',
      },
      options: {
        zh: ['钙 CA', '铜 cu', '氯 Cl', '镁 mG'],
        en: ['Calcium CA', 'Copper cu', 'Chlorine Cl', 'Magnesium mG'],
      },
      answerIndex: 2,
      explanation: {
        zh: '元素符号由两个字母组成时，第一个字母必须大写、第二个字母必须小写（“一大二小”）。CA、cu、mG 均书写错误。',
        en: 'For two-letter symbols the first letter must be a capital and the second lower case. CA, cu and mG are all written incorrectly.',
      },
    },
  ],
};
