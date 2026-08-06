import type { KnowledgePoint } from '../types';

export const chemAtomic001: KnowledgePoint = {
  id: 'chem-atomic-001',
  subject: 'chemistry',
  title: { zh: '原子结构：质子、中子、电子与相对原子质量', en: 'Atomic Structure: Protons, Neutrons, Electrons and Relative Atomic Mass' },
  summary: {
    zh: '原子由原子核与核外电子构成，原子核由质子和中子构成。认识三种粒子的电性与质量关系，理解核电荷数、质子数、核外电子数的关系以及相对原子质量的含义。',
    en: 'An atom consists of a nucleus and electrons; the nucleus contains protons and neutrons. Learn the charges and masses of the three particles, the relationship between nuclear charge, proton number and electron number, and what relative atomic mass means.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch3'],
    igcse: ['0620/2'],
  },
  keywords: {
    zh: ['原子', '原子核', '质子', '中子', '电子', '核电荷数', '相对原子质量'],
    en: ['atom', 'nucleus', 'proton', 'neutron', 'electron', 'nuclear charge', 'relative atomic mass'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '原子由什么构成？' },
      {
        type: 'paragraph',
        text: '原子是化学变化中的最小粒子。原子由居于中心、带正电的原子核和核外带负电的电子构成；原子核由质子和中子构成（普通氢原子的原子核内只有 1 个质子，没有中子）。原子核的体积很小，原子里有很大的空间，电子在核外作高速运动。',
      },
      {
        type: 'list',
        items: [
          '质子：每个质子带 1 个单位正电荷，相对质量约为 1。',
          '中子：不带电，相对质量约为 1。',
          '电子：每个电子带 1 个单位负电荷，质量很小，约为质子质量的 1/1836，可忽略不计。',
        ],
      },
      { type: 'heading', text: '核电荷数、质子数与核外电子数' },
      {
        type: 'paragraph',
        text: '原子核所带的正电荷数称为核电荷数。由于原子核内质子所带正电荷与核外电子所带负电荷数量相等、电性相反，整个原子不显电性。',
      },
      { type: 'formula', latex: '\\text{核电荷数} = \\text{质子数} = \\text{核外电子数}', caption: '原子不显电性的原因' },
      { type: 'heading', text: '相对原子质量' },
      {
        type: 'paragraph',
        text: '原子的实际质量很小，书写和使用都不方便。国际上以一种碳原子（碳 12，核内有 6 个质子和 6 个中子）质量的 1/12 作为标准，其他原子的质量与它相比较所得的比值，叫做这种原子的相对原子质量，符号为 Ar，单位为 1（一般省略不写）。',
      },
      { type: 'formula', latex: 'A_r = \\dfrac{m(\\text{某原子})}{\\dfrac{1}{12}\\, m(^{12}\\mathrm{C})}', caption: '相对原子质量的定义' },
      {
        type: 'paragraph',
        text: '由于电子质量可以忽略，原子的质量主要集中在原子核上，因此相对原子质量的近似值为：',
      },
      { type: 'formula', latex: 'A_r \\approx \\text{质子数} + \\text{中子数}', caption: '相对原子质量≈质子数+中子数（取整数）' },
    ],
    en: [
      { type: 'heading', text: 'What is an atom made of?' },
      {
        type: 'paragraph',
        text: 'Atoms are the smallest particles that take part in chemical reactions. An atom has a tiny, positively charged nucleus at its centre, surrounded by negatively charged electrons. The nucleus is made of protons and neutrons (an ordinary hydrogen nucleus contains only one proton and no neutrons). Most of the atom is empty space, with electrons moving rapidly around the nucleus.',
      },
      {
        type: 'list',
        items: [
          'Proton: relative charge +1, relative mass about 1.',
          'Neutron: no charge, relative mass about 1.',
          'Electron: relative charge −1, mass about 1/1836 of a proton — negligible.',
        ],
      },
      { type: 'heading', text: 'Proton number and electron number' },
      {
        type: 'paragraph',
        text: 'The proton (atomic) number is the number of protons in the nucleus. In a neutral atom the number of electrons equals the number of protons, so the positive and negative charges balance and the atom has no overall charge.',
      },
      { type: 'formula', latex: '\\text{electrons} = \\text{protons} \\;(\\text{in a neutral atom})', caption: 'Why an atom is electrically neutral' },
      { type: 'heading', text: 'Relative atomic mass' },
      {
        type: 'paragraph',
        text: 'Actual atomic masses are extremely small, so chemists compare them with a standard. The relative atomic mass, Ar, of an element is the average mass of its atoms compared with 1/12 of the mass of one carbon-12 atom. It is a ratio and has no units.',
      },
      { type: 'formula', latex: 'A_r = \\dfrac{m(\\text{one atom})}{\\dfrac{1}{12}\\, m(^{12}\\mathrm{C})}', caption: 'Definition of relative atomic mass' },
      {
        type: 'paragraph',
        text: 'Since the mass of the electrons is negligible, nearly all the mass of an atom is concentrated in the nucleus, so for a single atom:',
      },
      { type: 'formula', latex: 'A_r \\approx \\text{protons} + \\text{neutrons}', caption: 'Mass number = proton number + neutron number' },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '某原子的原子核内有 11 个质子，则该原子的核外电子数为多少？',
        en: 'The nucleus of an atom contains 11 protons. How many electrons does this atom have?',
      },
      options: {
        zh: ['11', '12', '22', '无法确定'],
        en: ['11', '12', '22', 'Cannot be determined'],
      },
      answerIndex: 0,
      explanation: {
        zh: '原子不显电性，核内质子数等于核外电子数。质子数为 11，核外电子数也是 11。',
        en: 'An atom is electrically neutral, so the number of electrons equals the number of protons. With 11 protons, there are also 11 electrons.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '已知某原子的核内有 6 个质子和 6 个中子，该原子的相对原子质量约为多少？',
        en: 'An atom has 6 protons and 6 neutrons in its nucleus. What is its approximate relative atomic mass?',
      },
      options: {
        zh: ['6', '12', '18', '24'],
        en: ['6', '12', '18', '24'],
      },
      answerIndex: 1,
      explanation: {
        zh: '电子质量可忽略，相对原子质量 ≈ 质子数 + 中子数 = 6 + 6 = 12。',
        en: 'Electron mass is negligible, so Ar ≈ protons + neutrons = 6 + 6 = 12.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列关于原子结构的说法中，错误的是哪一个？',
        en: 'Which statement about atomic structure is incorrect?',
      },
      options: {
        zh: [
          '原子由原子核和核外电子构成',
          '所有原子的原子核都由质子和中子构成',
          '原子中质子数等于核外电子数',
          '原子的质量主要集中在原子核上',
        ],
        en: [
          'An atom consists of a nucleus and electrons',
          'The nucleus of every atom contains both protons and neutrons',
          'The number of protons equals the number of electrons in an atom',
          'Most of the mass of an atom is concentrated in the nucleus',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '普通氢原子的原子核内只有 1 个质子，没有中子，因此“所有原子核都由质子和中子构成”的说法错误。',
        en: 'An ordinary hydrogen nucleus contains only one proton and no neutrons, so it is wrong to say that every nucleus contains both protons and neutrons.',
      },
    },
  ],
  related: ['igcse-0620-2-2-atomic-structure', 'chem-atomic-002', 'chem-atomic-003', 'chem-bonding-001'],
};
