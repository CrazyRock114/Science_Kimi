import type { KnowledgePoint } from '../types';

export const chemAtomic003: KnowledgePoint = {
  id: 'chem-atomic-003',
  subject: 'chemistry',
  title: { zh: '核外电子排布与原子结构示意图', en: 'Electron Arrangement and Atomic Structure Diagrams' },
  summary: {
    zh: '核外电子按能量高低分层排布。学会读写 1～20 号元素的原子结构示意图，理解最外层电子数如何决定元素的化学性质。',
    en: 'Electrons occupy shells of different energies around the nucleus. Learn to draw and read atomic structure (electronic configuration) diagrams for elements 1–20, and see how the outer-shell electrons determine chemical behaviour.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch3', 'pep-che-s1/ch4'],
    igcse: ['0620/2'],
  },
  keywords: {
    zh: ['核外电子排布', '电子层', '原子结构示意图', '最外层电子', '相对稳定结构', '化学性质'],
    en: ['electron arrangement', 'electron shell', 'atomic structure diagram', 'outer-shell electrons', 'stable configuration', 'chemical properties'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '核外电子的分层排布' },
      {
        type: 'paragraph',
        text: '在含有多个电子的原子里，电子的能量并不相同。能量低的电子通常在离核较近的区域运动，能量高的电子在离核较远的区域运动，这种现象叫做核外电子的分层排布。电子层从里向外依次为第一层、第二层……第七层（也可用 K、L、M、N、O、P、Q 表示）。',
      },
      {
        type: 'list',
        items: [
          '第一层最多容纳 2 个电子，第二层最多容纳 8 个电子。',
          '最外层电子数不超过 8 个（第一层作最外层时不超过 2 个）。',
          '电子总是尽先排布在能量最低的电子层里，排满一层后再排下一层。',
        ],
      },
      { type: 'heading', text: '原子结构示意图' },
      {
        type: 'paragraph',
        text: '原子结构示意图可以简明地表示核外电子的排布：圆圈表示原子核，圈内的“+”号和数字表示原子核带正电及核电荷数（质子数）；弧线表示电子层，弧线上的数字表示该电子层上的电子数。例如钠原子（Na，质子数 11）的排布为 2、8、1。',
      },
      {
        type: 'list',
        items: [
          '氧原子（O，质子数 8）：第一层 2 个、第二层 6 个，记为 2、6。',
          '镁原子（Mg，质子数 12）：2、8、2。',
          '氯原子（Cl，质子数 17）：2、8、7。',
          '氩原子（Ar，质子数 18）：2、8、8。',
        ],
      },
      { type: 'heading', text: '最外层电子数决定化学性质' },
      {
        type: 'paragraph',
        text: '元素的化学性质与其原子的最外层电子数关系密切。最外层有 8 个电子（氦为 2 个）的结构叫做相对稳定结构。',
      },
      {
        type: 'list',
        items: [
          '稀有气体元素（如氦、氖、氩）：原子的最外层已达相对稳定结构，化学性质稳定，不易与其他物质反应。',
          '金属元素（如钠、镁）：原子的最外层电子一般少于 4 个，在化学反应中易失去电子，达到相对稳定结构。',
          '非金属元素（如氧、氯）：原子的最外层电子一般多于 4 个，在化学反应中易得到电子，达到相对稳定结构。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Electrons are arranged in shells' },
      {
        type: 'paragraph',
        text: 'In atoms with many electrons, the electrons have different energies. Electrons with lower energy occupy regions closer to the nucleus, while higher-energy electrons are found further away — this is called the arrangement of electrons in shells (energy levels). The shells are numbered 1 to 7 outwards from the nucleus (also labelled K, L, M, N, O, P, Q).',
      },
      {
        type: 'list',
        items: [
          'The first shell holds a maximum of 2 electrons; the second shell holds a maximum of 8.',
          'The outermost shell never holds more than 8 electrons (or 2 if the first shell is the outer one).',
          'Electrons fill the lowest available energy level first before entering the next shell.',
        ],
      },
      { type: 'heading', text: 'Atomic structure diagrams' },
      {
        type: 'paragraph',
        text: 'An atomic structure diagram shows the electron arrangement simply: the circle stands for the nucleus, and the number inside it is the proton number (nuclear charge); each arc stands for one shell, and the number on the arc is the number of electrons in that shell. For example, sodium (Na, 11 protons) is written as 2, 8, 1.',
      },
      {
        type: 'list',
        items: [
          'Oxygen (O, 8 protons): 2, 6.',
          'Magnesium (Mg, 12 protons): 2, 8, 2.',
          'Chlorine (Cl, 17 protons): 2, 8, 7.',
          'Argon (Ar, 18 protons): 2, 8, 8.',
        ],
      },
      { type: 'heading', text: 'Outer-shell electrons control chemical behaviour' },
      {
        type: 'paragraph',
        text: 'The chemical properties of an element depend closely on the number of electrons in the outermost shell of its atoms. A full outer shell — 8 electrons, or 2 for helium — is a stable electronic configuration.',
      },
      {
        type: 'list',
        items: [
          'Noble gases (helium, neon, argon): their atoms already have stable configurations, so they are unreactive.',
          'Metals (e.g. sodium, magnesium): usually fewer than 4 outer-shell electrons, so their atoms tend to lose electrons to gain a stable configuration.',
          'Non-metals (e.g. oxygen, chlorine): usually more than 4 outer-shell electrons, so their atoms tend to gain electrons to complete the outer shell.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '某原子的核外电子排布为 2、8、7，该原子在化学反应中容易怎样变化？',
        en: 'An atom has the electron arrangement 2, 8, 7. What does it tend to do in a chemical reaction?',
      },
      options: {
        zh: ['失去 7 个电子', '失去 1 个电子', '得到 1 个电子', '既不易失也不易得电子'],
        en: ['Lose 7 electrons', 'Lose 1 electron', 'Gain 1 electron', 'Neither lose nor gain electrons'],
      },
      answerIndex: 2,
      explanation: {
        zh: '该原子最外层有 7 个电子，差 1 个即达到 8 电子相对稳定结构，因此容易得到 1 个电子。失去 7 个电子需要的能量太高，不会发生。',
        en: 'With 7 outer-shell electrons the atom needs just 1 more to reach a stable octet, so it tends to gain 1 electron. Losing 7 electrons would require far too much energy.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '铝原子的核电荷数为 13，下列核外电子排布正确的是哪一个？',
        en: 'The nuclear charge of an aluminium atom is 13. Which electron arrangement is correct?',
      },
      options: {
        zh: ['2、8、3', '2、8、4', '3、8、2', '2、9、2'],
        en: ['2, 8, 3', '2, 8, 4', '3, 8, 2', '2, 9, 2'],
      },
      answerIndex: 0,
      explanation: {
        zh: '原子中核外电子数等于核电荷数 13。第一层最多排 2 个、第二层最多排 8 个，剩余 3 个排在第三层，即 2、8、3。第二层不能排 9 个电子。',
        en: 'A neutral atom has 13 electrons. The first shell takes at most 2 and the second at most 8, leaving 3 in the third shell: 2, 8, 3. A second shell can never hold 9 electrons.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '元素的化学性质主要决定于原子的什么？',
        en: 'The chemical properties of an element depend mainly on what feature of its atoms?',
      },
      options: {
        zh: ['核内质子数', '核内中子数', '最外层电子数', '电子层数'],
        en: ['Number of protons', 'Number of neutrons', 'Number of outer-shell electrons', 'Number of electron shells'],
      },
      answerIndex: 2,
      explanation: {
        zh: '最外层电子数决定原子得失电子的难易，从而决定元素的化学性质。质子数决定元素的种类，不能直接说明化学性质。',
        en: 'The number of outer-shell electrons determines how easily an atom loses or gains electrons, and hence its chemical behaviour. The proton number defines the element but does not by itself explain reactivity.',
      },
    },
  ],
};
