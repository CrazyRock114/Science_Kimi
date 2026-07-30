import type { KnowledgePoint } from '../types';

export const chemStoich003: KnowledgePoint = {
  id: 'chem-stoich-003',
  subject: 'chemistry',
  title: { zh: '相对分子质量与化学式计算', en: 'Relative Formula Mass and Formula Calculations' },
  summary: {
    zh: '从相对原子质量出发，学会计算相对分子质量、化合物中各元素的质量比和某元素的质量分数，把化学式变成可以定量计算的工具。',
    en: 'Starting from relative atomic mass, learn to calculate relative formula mass, the ratio of masses of elements in a compound, and the percentage by mass of an element — turning a chemical formula into a tool for quantitative calculation.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9a/ch4'],
    igcse: ['0620/3'],
  },
  keywords: {
    zh: ['相对原子质量', '相对分子质量', '化学式', '元素质量比', '元素质量分数'],
    en: ['relative atomic mass', 'relative formula mass', 'chemical formula', 'mass ratio of elements', 'percentage by mass'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '相对原子质量' },
      {
        type: 'paragraph',
        text: '原子的实际质量非常小，书写和使用都不方便。国际上以一种碳原子（碳-12）质量的 1/12 作为标准，其他原子的质量与它相比较所得的数值，就是这种原子的相对原子质量（符号 Aᵣ）。相对原子质量是一个比值，单位为"1"，一般省略不写。常见数值：H = 1，C = 12，N = 14，O = 16，Ca = 40，Cu = 64。',
      },
      { type: 'heading', text: '相对分子质量' },
      {
        type: 'paragraph',
        text: '化学式中各原子的相对原子质量的总和，就是相对分子质量（符号 Mᵣ）。计算时先数清每种原子的个数，再分别乘以相对原子质量后相加。含原子团的化学式可把原子团当作整体计算，如 CuSO₄·5H₂O 之类的结晶水合物也要把结晶水计入。',
      },
      {
        type: 'formula',
        latex: 'M_r(\\mathrm{H_2O}) = 1\\times 2 + 16 = 18',
        caption: '再如：Mᵣ(CO₂) = 12 + 16×2 = 44，Mᵣ(CaCO₃) = 40 + 12 + 16×3 = 100',
      },
      { type: 'heading', text: '根据化学式的两类常见计算' },
      {
        type: 'formula',
        latex: 'w(\\mathrm{N}) = \\frac{14\\times 2}{80}\\times 100\\% = 35\\%',
        caption: '硝酸铵 NH₄NO₃ 中氮元素的质量分数（Mᵣ = 80）',
      },
      {
        type: 'list',
        items: [
          '各元素的质量比 = （各元素的相对原子质量 × 原子个数）之比。如 H₂O 中 m(H)∶m(O) = (1×2)∶16 = 1∶8。注意质量比不等于原子个数比。',
          '某元素的质量分数 =（该元素的相对原子质量 × 原子个数）÷ 相对分子质量 × 100%。',
          '求一定质量化合物中某元素的质量：某元素质量 = 化合物质量 × 该元素的质量分数。如 100 g 硝酸铵中含氮元素 100 g × 35% = 35 g。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Relative atomic mass' },
      {
        type: 'paragraph',
        text: 'The actual mass of an atom is far too small to work with conveniently. Internationally, one twelfth of the mass of a carbon-12 atom is taken as the standard; the mass of any other atom compared with this standard gives its relative atomic mass (symbol Aᵣ). It is a ratio with no units. Common values: H = 1, C = 12, N = 14, O = 16, Ca = 40, Cu = 64.',
      },
      { type: 'heading', text: 'Relative formula mass' },
      {
        type: 'paragraph',
        text: 'The relative formula mass (symbol Mᵣ; called relative molecular mass for simple molecules) is the sum of the relative atomic masses of all the atoms in the formula. Count the atoms of each element first, then multiply by the Aᵣ values and add. Treat groups of atoms such as SO₄ as a unit if you like, and remember to include the water of crystallisation in hydrated salts such as CuSO₄·5H₂O.',
      },
      {
        type: 'formula',
        latex: 'M_r(\\mathrm{H_2O}) = 1\\times 2 + 16 = 18',
        caption: 'Also: Mᵣ(CO₂) = 12 + 16×2 = 44, and Mᵣ(CaCO₃) = 40 + 12 + 16×3 = 100',
      },
      { type: 'heading', text: 'Two common formula calculations' },
      {
        type: 'formula',
        latex: '\\text{\\%N} = \\frac{14\\times 2}{80}\\times 100\\% = 35\\%',
        caption: 'Percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃ (Mᵣ = 80)',
      },
      {
        type: 'list',
        items: [
          'Ratio of masses of elements = ratio of (Aᵣ × number of atoms) for each element. In H₂O, m(H) : m(O) = (1×2) : 16 = 1 : 8. Note this is not the same as the ratio of numbers of atoms.',
          'Percentage by mass of an element = (Aᵣ × number of atoms) ÷ Mᵣ × 100%.',
          'Mass of an element in a given sample = mass of compound × percentage by mass of that element. For example, 100 g of ammonium nitrate contains 100 g × 35% = 35 g of nitrogen.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '已知相对原子质量 C = 12，O = 16，则 CO₂ 的相对分子质量是（ ）',
        en: 'Given Aᵣ(C) = 12 and Aᵣ(O) = 16, the relative formula mass of CO₂ is (  )',
      },
      options: {
        zh: ['28', '32', '44', '48'],
        en: ['28', '32', '44', '48'],
      },
      answerIndex: 2,
      explanation: {
        zh: 'Mᵣ(CO₂) = 12 + 16×2 = 44。注意氧原子有 2 个，要用 16×2 而不是 16²，下角标表示原子个数，不是乘方。',
        en: 'Mᵣ(CO₂) = 12 + 16×2 = 44. There are two oxygen atoms, so use 16×2, not 16² — the subscript counts atoms, it is not an exponent.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '水中氢元素与氧元素的质量比是（相对原子质量 H = 1，O = 16）（ ）',
        en: 'In water, the ratio of the mass of hydrogen to the mass of oxygen is (Aᵣ: H = 1, O = 16) (  )',
      },
      options: {
        zh: ['2∶1', '1∶8', '1∶16', '8∶1'],
        en: ['2 : 1', '1 : 8', '1 : 16', '8 : 1'],
      },
      answerIndex: 1,
      explanation: {
        zh: '质量比 =（相对原子质量 × 原子个数）之比：m(H)∶m(O) = (1×2)∶16 = 2∶16 = 1∶8。2∶1 是氢、氧的原子个数比，不是质量比，这是最常见的错误。',
        en: 'Mass ratio = ratio of (Aᵣ × number of atoms): m(H) : m(O) = (1×2) : 16 = 2 : 16 = 1 : 8. The ratio 2 : 1 is the ratio of numbers of atoms, not masses — the most common mistake here.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '硝酸铵（NH₄NO₃）是一种常用氮肥，其中氮元素的质量分数是（相对原子质量 H = 1，N = 14，O = 16）（ ）',
        en: 'Ammonium nitrate (NH₄NO₃) is a common nitrogen fertiliser. The percentage by mass of nitrogen in it is (Aᵣ: H = 1, N = 14, O = 16) (  )',
      },
      options: {
        zh: ['17.5%', '21.2%', '35%', '46.7%'],
        en: ['17.5%', '21.2%', '35%', '46.7%'],
      },
      answerIndex: 2,
      explanation: {
        zh: 'Mᵣ(NH₄NO₃) = 14 + 1×4 + 14 + 16×3 = 80。NH₄NO₃ 中含 2 个氮原子，氮元素质量分数 = (14×2)÷80×100% = 35%。容易漏数铵根或硝酸根中的一个氮原子。',
        en: 'Mᵣ(NH₄NO₃) = 14 + 1×4 + 14 + 16×3 = 80. There are two nitrogen atoms in NH₄NO₃, so %N = (14×2) ÷ 80 × 100% = 35%. A common slip is to miss one of the two nitrogen atoms — one in NH₄⁺ and one in NO₃⁻.',
      },
    },
  ],
};
