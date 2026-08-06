import type { KnowledgePoint } from '../types';

export const chemAtomic004: KnowledgePoint = {
  id: 'chem-atomic-004',
  subject: 'chemistry',
  title: { zh: '元素周期表：结构与周期、族规律', en: 'The Periodic Table: Structure, Period and Group Trends' },
  summary: {
    zh: '元素周期表按原子序数递增排列，分为 7 个周期和 16 个族。理解周期表的单元格信息，掌握同一周期、同一族元素性质的递变规律及其与原子结构的关系。',
    en: 'The Periodic Table arranges elements in order of increasing atomic number in 7 periods and 16 groups. Learn to read each element cell, and see how trends across a period and down a group relate to atomic structure.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch3', 'pep-che-s1/ch4'],
    igcse: ['0620/8'],
  },
  keywords: {
    zh: ['元素周期表', '原子序数', '周期', '族', '电子层数', '最外层电子数', '元素周期律'],
    en: ['Periodic Table', 'atomic number', 'period', 'group', 'electron shells', 'outer-shell electrons', 'periodic law'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '元素周期表的结构' },
      {
        type: 'paragraph',
        text: '科学家按元素原子核电荷数递增的顺序给元素编号，这个编号叫做原子序数。元素周期表就是按原子序数递增的顺序排列而成的：共有 7 个横行，每个横行叫做一个周期；共有 18 个纵列，除第 8、9、10 三个纵列共同组成一个族（第Ⅷ族）外，其余每个纵列各为一个族，共 16 个族。',
      },
      { type: 'formula', latex: '\\text{原子序数} = \\text{核电荷数} = \\text{质子数} = \\text{核外电子数}', caption: '原子中原子序数与其他各数的关系' },
      {
        type: 'paragraph',
        text: '周期表中每一个单元格都包含一种元素的信息：左上角是原子序数，中间是元素符号和元素名称，下方是相对原子质量。例如钠的单元格显示原子序数 11、符号 Na、相对原子质量 22.99。',
      },
      { type: 'heading', text: '周期：从左到右的规律' },
      {
        type: 'paragraph',
        text: '同一周期的元素，原子的电子层数相同，且等于周期数（如第三周期元素的原子都有 3 个电子层）。从左到右，最外层电子数从 1 递增到 8（第一周期从 1 到 2），元素由金属元素逐渐过渡到非金属元素，最后以稀有气体元素结束。',
      },
      { type: 'heading', text: '族：从上到下的规律' },
      {
        type: 'paragraph',
        text: '同一族的元素，原子的最外层电子数相同，因此化学性质相似；从上到下电子层数依次增多。最外层电子数等于主族的族序数（如第ⅠA 族元素原子的最外层都有 1 个电子）。',
      },
      {
        type: 'list',
        items: [
          '第ⅠA 族（氢除外，又称碱金属）：最外层均有 1 个电子，都易失电子，化学性质活泼，且从上到下活泼性增强。',
          '第ⅦA 族（卤族元素）：最外层均有 7 个电子，都易得 1 个电子，化学性质活泼。',
          '0 族（稀有气体）：最外层已达 8 电子（氦为 2 电子）相对稳定结构，化学性质很稳定。',
        ],
      },
      {
        type: 'paragraph',
        text: '元素的性质随着原子序数的递增而呈周期性变化的规律，叫做元素周期律。元素周期表正是元素周期律的具体表现形式，也是我们学习和研究化学的重要工具。',
      },
    ],
    en: [
      { type: 'heading', text: 'The structure of the Periodic Table' },
      {
        type: 'paragraph',
        text: 'Elements are numbered in order of increasing nuclear charge; this number is the atomic (proton) number. The Periodic Table lists the elements in order of increasing atomic number: it has 7 horizontal rows called periods, and 18 vertical columns which form 16 groups — columns 8, 9 and 10 together make up a single group (Group VIII).',
      },
      { type: 'formula', latex: '\\text{atomic number} = \\text{protons} = \\text{electrons (in an atom)}', caption: 'How atomic number relates to the particles in an atom' },
      {
        type: 'paragraph',
        text: 'Each cell of the table gives information about one element: the atomic number at the top, the chemical symbol and name in the middle, and the relative atomic mass at the bottom. For example, the cell for sodium shows atomic number 11, symbol Na, and relative atomic mass 22.99.',
      },
      { type: 'heading', text: 'Periods: trends from left to right' },
      {
        type: 'paragraph',
        text: 'All elements in the same period have atoms with the same number of electron shells, equal to the period number (Period 3 elements all have 3 shells). From left to right the number of outer-shell electrons rises from 1 to 8 (from 1 to 2 in Period 1), and the elements change from metals through non-metals, ending with a noble gas.',
      },
      { type: 'heading', text: 'Groups: trends from top to bottom' },
      {
        type: 'paragraph',
        text: 'All elements in the same group have atoms with the same number of outer-shell electrons, so they show similar chemical properties; going down the group the number of electron shells increases. For the main groups, the group number equals the number of outer-shell electrons (Group I atoms each have 1 outer electron).',
      },
      {
        type: 'list',
        items: [
          'Group I (the alkali metals, excluding hydrogen): one outer electron each; they all lose this electron easily and are reactive, becoming more reactive down the group.',
          'Group VII (the halogens): seven outer electrons each; they all tend to gain one electron and are reactive non-metals.',
          'Group 0 (the noble gases): full outer shells — 8 electrons, or 2 for helium — so they are very unreactive.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The properties of the elements repeat in a regular pattern as the atomic number increases; this is the periodic law. The Periodic Table is the organised expression of that law and an essential tool for studying chemistry.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '同一周期的元素，其原子结构上相同的是什么？',
        en: 'What do the atoms of all elements in the same period have in common?',
      },
      options: {
        zh: ['电子层数', '最外层电子数', '中子数', '相对原子质量'],
        en: ['Number of electron shells', 'Number of outer-shell electrons', 'Number of neutrons', 'Relative atomic mass'],
      },
      answerIndex: 0,
      explanation: {
        zh: '同一周期元素原子的电子层数相同且等于周期数；从左到右最外层电子数递增。最外层电子数相同的是同一族的元素。',
        en: 'Atoms in the same period have the same number of electron shells, equal to the period number; the number of outer-shell electrons increases across the period. It is the elements of one group that share the same outer-shell electron count.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '钠（Na）和钾（K）的化学性质相似，根本原因是什么？',
        en: 'Sodium (Na) and potassium (K) have similar chemical properties. What is the underlying reason?',
      },
      options: {
        zh: ['它们的电子层数相同', '它们的最外层电子数相同', '它们的质子数相同', '它们的相对原子质量接近'],
        en: ['They have the same number of electron shells', 'They have the same number of outer-shell electrons', 'They have the same number of protons', 'Their relative atomic masses are similar'],
      },
      answerIndex: 1,
      explanation: {
        zh: '钠和钾都在第ⅠA 族，原子最外层都有 1 个电子，都容易失去这个电子，所以化学性质相似。元素的化学性质由最外层电子数决定。',
        en: 'Sodium and potassium are both in Group I: each atom has one outer-shell electron that is easily lost, so they behave similarly. Chemical properties are governed by the number of outer-shell electrons.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '某元素的原子序数为 17，该元素在元素周期表中的位置是哪里？',
        en: 'An element has atomic number 17. Where is it located in the Periodic Table?',
      },
      options: {
        zh: ['第二周期第ⅦA 族', '第三周期第ⅦA 族', '第三周期第ⅠA 族', '第二周期第ⅠA 族'],
        en: ['Period 2, Group VII', 'Period 3, Group VII', 'Period 3, Group I', 'Period 2, Group I'],
      },
      answerIndex: 1,
      explanation: {
        zh: '原子序数 17 的原子核外电子排布为 2、8、7：有 3 个电子层，位于第三周期；最外层 7 个电子，位于第ⅦA 族（氯元素）。',
        en: 'Atomic number 17 gives the electron arrangement 2, 8, 7: three shells means Period 3, and seven outer-shell electrons means Group VII (the element is chlorine).',
      },
    },
  ],
  related: ['igcse-0620-8-1-periodic-table', 'igcse-0620-8-2-groups', 'chem-atomic-003'],
};
