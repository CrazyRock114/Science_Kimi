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
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出相对原子质量与相对分子质量的定义，知道它们都是比值、没有单位。',
          '根据化学式计算相对分子质量（含结晶水合物）。',
          '计算化合物中各元素的质量比和某元素的质量分数。',
          '求一定质量的化合物中某元素的质量。',
        ],
      },
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
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'relative atomic mass, Ar（相对原子质量）：以碳-12 原子质量的 1/12 为标准，某元素原子的平均质量与它相比所得的比值，没有单位。',
          'relative formula mass, Mr（相对分子质量/式量）：化学式中各原子的相对原子质量之和。',
          'percentage by mass（质量分数）：某元素的质量占化合物总质量的百分比。',
          'water of crystallisation（结晶水）：结晶水合物中按固定比例含有的水分子，计算式量时必须计入。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Define relative atomic mass and relative formula mass, knowing both are ratios with no units.',
          'Calculate relative formula mass from a chemical formula, including hydrated salts.',
          'Calculate the mass ratio of elements and the percentage by mass of an element in a compound.',
          'Find the mass of an element in a given mass of compound.',
        ],
      },
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
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'relative atomic mass, Ar（相对原子质量）: the average mass of the atoms of an element compared with 1/12 of the mass of a carbon-12 atom; a ratio with no units.',
          'relative formula mass, Mr（相对分子质量/式量）: the sum of the relative atomic masses of all the atoms in a formula.',
          'percentage by mass（质量分数）: the mass of an element as a percentage of the total mass of the compound.',
          'water of crystallisation（结晶水）: water molecules present in fixed proportion in a hydrated salt; they must be included when working out Mr.',
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
  examPractice: [
    {
      id: 'chem-stoich-003-cp1',
      syllabus: ['0620/3.2.2'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'Calculate the relative formula mass of magnesium hydroxide, Mg(OH)₂. (Ar: H = 1, O = 16, Mg = 24.)',
      markScheme: [
        { text: '2 × (16 + 1) = 34', marks: 1 },
        { text: 'Mr = 24 + 34 = 58', marks: 1 },
      ],
      examinerNote: {
        zh: '括号外的 2 要乘括号内的全部内容，包括氢。若答案是 50，说明只把 2 乘到了氧上。',
        en: 'The bracket multiplies everything inside it, hydrogen included. An answer of 50 means the 2 was applied only to the oxygen.',
      },
    },
    {
      id: 'chem-stoich-003-cp2',
      syllabus: ['0620/3.2.1'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 2,
      stem: 'The relative atomic mass of boron is 10.8, but no single boron atom has a mass of 10.8. Explain why.',
      markScheme: [
        { text: 'Boron exists as isotopes (boron-10 and boron-11) which have different masses', marks: 1 },
        { text: 'The relative atomic mass is a weighted average over the isotopes, so it lies between 10 and 11', marks: 1 },
      ],
      examinerNote: {
        zh: '这个平均值必须是加权的。10 与 11 的简单平均是 10.5，而答案更接近 11，说明硼-11 的丰度更高。',
        en: 'The average has to be weighted. A plain average of 10 and 11 would give 10.5, and the fact that the answer is nearer 11 tells you boron-11 is the more abundant isotope.',
      },
    },
    {
      id: 'chem-stoich-003-cp3',
      syllabus: ['0620/3.2.2'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 3,
      stem: 'Calculate the percentage by mass of water in hydrated copper(II) sulfate, CuSO₄·5H₂O. (Ar: H = 1, O = 16, S = 32, Cu = 64.)',
      markScheme: [
        { text: 'Mr(CuSO₄·5H₂O) = 64 + 32 + 4 × 16 + 5 × 18 = 250', marks: 1 },
        { text: 'Mass of water in the formula = 5 × 18 = 90', marks: 1 },
        { text: 'Percentage = 90 / 250 × 100% = 36%', marks: 1 },
      ],
      examinerNote: {
        zh: '结晶水必须计入式量，漏掉 5H₂O 的 90 是最常见的错误。注意题目问的是水的质量分数，不是硫酸铜的。',
        en: 'The water of crystallisation must be included in Mr — forgetting the 90 from 5H₂O is the commonest error. Note the question asks for the percentage of water, not of copper(II) sulfate.',
      },
    },
  ],
  related: ['igcse-0620-3-3-moles', 'chem-bonding-003', 'chem-stoich-004', 'chem-atomic-001'],
};
