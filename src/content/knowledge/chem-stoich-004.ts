import type { KnowledgePoint } from '../types';

export const chemStoich004: KnowledgePoint = {
  id: 'chem-stoich-004',
  subject: 'chemistry',
  title: { zh: '根据化学方程式的计算与摩尔入门', en: 'Calculations from Chemical Equations and Introducing the Mole' },
  summary: {
    zh: '利用化学方程式中固定的质量比，由一种物质的质量求其他物质的质量；再认识物质的量、摩尔质量，理解化学计量数之比就是物质的量之比。',
    en: 'Use the fixed mass ratios in a balanced equation to find unknown masses, then meet the mole and molar mass, and see that the coefficients in an equation are also ratios of amounts in moles.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch5', 'pep-che-s1/ch2'],
    igcse: ['0620/3'],
  },
  keywords: {
    zh: ['化学方程式的计算', '质量比', '物质的量', '摩尔', '摩尔质量', '阿伏加德罗常数'],
    en: ['stoichiometric calculation', 'mass ratio', 'amount of substance', 'mole', 'molar mass', 'Avogadro constant'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '计算的依据：方程式中的质量比' },
      {
        type: 'paragraph',
        text: '化学方程式中各物质之间的质量比是固定不变的，等于（相对分子质量 × 化学计量数）之比。因此只要知道一种反应物或生成物的实际质量，就能按比例求出其他物质的质量——这就是根据化学方程式计算的基本依据，也是化工生产中计算原料用量的基础。',
      },
      { type: 'heading', text: '计算的一般步骤' },
      {
        type: 'list',
        items: [
          '设：设出未知量（不带单位）。',
          '写：正确写出并配平化学方程式。',
          '标：在相关物质下方标出"相对分子质量 × 化学计量数"，以及已知量和未知量。',
          '列：列出比例式（上下单位要一致）。',
          '解、答：求解并简明写出答案。',
        ],
      },
      {
        type: 'formula',
        latex: '\\mathrm{2H_2 + O_2 \\xrightarrow{\\text{点燃}} 2H_2O}',
        caption: '质量比为 4∶32∶36。4 g 氢气完全燃烧，消耗 32 g 氧气，生成 36 g 水',
      },
      { type: 'heading', text: '物质的量：连接宏观与微观的桥梁' },
      {
        type: 'paragraph',
        text: '物质由肉眼看不见的粒子构成。把宏观的质量与微观的粒子数目联系起来的物理量叫做物质的量，符号为 n，单位是摩尔（mol）。1 mol 任何粒子集体所含的粒子数约为 6.02×10²³，这个数值叫做阿伏加德罗常数（Nᴀ）。单位物质的量的物质所具有的质量叫做摩尔质量（M），单位为 g/mol，其数值等于该物质的相对分子质量（或相对原子质量），如水的摩尔质量为 18 g/mol。',
      },
      {
        type: 'paragraph',
        text: '化学方程式中的化学计量数之比，既表示粒子个数之比，也等于各物质的物质的量之比。例如 2H₂ + O₂ ═ 2H₂O 表示每 2 mol 氢气与 1 mol 氧气恰好完全反应，生成 2 mol 水。用"物质的量"来列比例，往往比用质量更直接。',
      },
      {
        type: 'formula',
        latex: 'n = \\frac{m}{M}',
        caption: '物质的量（mol）= 质量（g）÷ 摩尔质量（g/mol）。如 36 g 水的物质的量为 36 ÷ 18 = 2 mol',
      },
    ],
    en: [
      { type: 'heading', text: 'The basis: fixed mass ratios in an equation' },
      {
        type: 'paragraph',
        text: 'In a balanced equation the mass ratios between the substances are fixed, equal to the ratios of (relative formula mass × coefficient). So if the actual mass of one reactant or product is known, the masses of all the others can be found by proportion. This is the basis of stoichiometric calculation — and of working out raw material quantities in the chemical industry.',
      },
      { type: 'heading', text: 'The general steps' },
      {
        type: 'list',
        items: [
          'Define the unknown quantity (without units in the symbol).',
          'Write and balance the chemical equation correctly.',
          'Under each relevant substance, write (relative formula mass × coefficient), plus the known and unknown quantities.',
          'Set up the proportion, keeping units consistent.',
          'Solve it and state the answer clearly.',
        ],
      },
      {
        type: 'formula',
        latex: '\\mathrm{2H_2 + O_2 \\xrightarrow{\\text{ignite}} 2H_2O}',
        caption: 'The mass ratio is 4 : 32 : 36. Burning 4 g of hydrogen completely uses 32 g of oxygen and produces 36 g of water.',
      },
      { type: 'heading', text: 'The mole: a bridge between the visible and the invisible' },
      {
        type: 'paragraph',
        text: 'Matter is made of particles too small to see. The physical quantity that links mass to the number of particles is called the amount of substance, symbol n, measured in moles (mol). One mole of any particles contains about 6.02×10²³ particles — the Avogadro constant (Nᴀ). The mass of one mole of a substance is its molar mass (M), in g/mol; its value equals the relative formula (or atomic) mass — for water, M = 18 g/mol.',
      },
      {
        type: 'paragraph',
        text: 'The coefficients in an equation give the ratio of particle numbers, and equally the ratio of amounts in moles. So 2H₂ + O₂ ═ 2H₂O means 2 mol of hydrogen reacts exactly with 1 mol of oxygen to give 2 mol of water. Setting up the proportion in moles is often more direct than using masses.',
      },
      {
        type: 'formula',
        latex: 'n = \\frac{m}{M}',
        caption: 'Amount (mol) = mass (g) ÷ molar mass (g/mol). For example, 36 g of water is 36 ÷ 18 = 2 mol.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '4 g 氢气在氧气中完全燃烧，生成水的质量是（相对原子质量 H = 1，O = 16）（ ）',
        en: '4 g of hydrogen burns completely in oxygen. The mass of water formed is (Aᵣ: H = 1, O = 16) (  )',
      },
      options: {
        zh: ['18 g', '32 g', '36 g', '72 g'],
        en: ['18 g', '32 g', '36 g', '72 g'],
      },
      answerIndex: 2,
      explanation: {
        zh: '由 2H₂ + O₂ ═ 2H₂O，氢气与水的质量比为 (2×2)∶(2×18) = 4∶36。设生成水 x，则 4∶36 = 4 g∶x，解得 x = 36 g。用质量守恒检验：4 g 氢气消耗 32 g 氧气，生成物共 36 g，合理。',
        en: 'From 2H₂ + O₂ ═ 2H₂O, the mass ratio of hydrogen to water is (2×2) : (2×18) = 4 : 36. If x is the mass of water, 4 : 36 = 4 g : x, giving x = 36 g. Check by conservation of mass: 4 g of hydrogen uses 32 g of oxygen, and 4 + 32 = 36 g. Correct.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '化学方程式 2H₂ + O₂ ═ 2H₂O 中的"2∶1∶2"表示各物质的（ ）',
        en: 'In the equation 2H₂ + O₂ ═ 2H₂O, the ratio "2 : 1 : 2" represents the ratio of (  )',
      },
      options: {
        zh: [
          '质量之比',
          '分子个数之比（也等于物质的量之比）',
          '相对分子质量之比',
          '任何状态下各物质的体积之比',
        ],
        en: [
          'masses',
          'numbers of molecules (equally, amounts in moles)',
          'relative molecular masses',
          'volumes in any state',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '化学计量数之比表示粒子个数之比，也等于物质的量之比。质量比是 4∶32∶36，不等于 2∶1∶2；体积比只有在同温同压下的气体之间才等于化学计量数之比，不能推广到任何状态。',
        en: 'The coefficients give the ratio of particle numbers, which equals the ratio of amounts in moles. The mass ratio is 4 : 32 : 36, not 2 : 1 : 2; and the volume ratio equals the coefficient ratio only for gases at the same temperature and pressure — not for substances in any state.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '0.5 mol 碳酸钙（CaCO₃）的质量是多少？（相对原子质量 Ca = 40，C = 12，O = 16）（ ）',
        en: 'What is the mass of 0.5 mol of calcium carbonate (CaCO₃)? (Aᵣ: Ca = 40, C = 12, O = 16) (  )',
      },
      options: {
        zh: ['5 g', '50 g', '100 g', '200 g'],
        en: ['5 g', '50 g', '100 g', '200 g'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'CaCO₃ 的相对分子质量为 40 + 12 + 16×3 = 100，故摩尔质量 M = 100 g/mol。由 n = m/M 得 m = n×M = 0.5 mol × 100 g/mol = 50 g。',
        en: 'Mᵣ(CaCO₃) = 40 + 12 + 16×3 = 100, so the molar mass is M = 100 g/mol. From n = m/M, m = n×M = 0.5 mol × 100 g/mol = 50 g.',
      },
    },
  ],
};
