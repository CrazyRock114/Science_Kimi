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
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '理解化学方程式中各物质的质量比是固定的，能由一种物质的质量按比例求其他物质的质量。',
          '按"设、写、标、列、解、答"的步骤规范完成根据化学方程式的计算。',
          '说出物质的量、摩尔质量、阿伏加德罗常数的含义，并用 n = m / M 进行换算。',
          '知道化学计量数之比等于物质的量之比，能用摩尔简化计算。',
        ],
      },
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
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'stoichiometry（化学计量）：根据配平的化学方程式研究各物质之间定量关系的计算。',
          'amount of substance（物质的量）：联系宏观质量与微观粒子数目的物理量，符号 n，单位是摩尔。',
          'mole（摩尔）：物质的量的单位；1 mol 任何粒子集体约含 6.02×10²³ 个粒子。',
          'Avogadro constant（阿伏加德罗常数）：1 mol 粒子所含的粒子数，符号 Nᴀ，约为 6.02×10²³ mol⁻¹。',
          'molar mass（摩尔质量）：单位物质的量的物质所具有的质量，符号 M，单位 g/mol，数值上等于相对分子质量。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Explain why the mass ratios in a chemical equation are fixed, and find unknown masses by proportion.',
          'Carry out equation calculations in clear steps: define, write, mark, proportion, solve, answer.',
          'Define amount of substance, molar mass and the Avogadro constant, and convert using n = m / M.',
          'Use the fact that the coefficient ratio equals the mole ratio to simplify calculations.',
        ],
      },
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
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'stoichiometry（化学计量）: calculation of the quantitative relationships between substances using a balanced equation.',
          'amount of substance（物质的量）: the quantity linking mass to the number of particles; symbol n, unit the mole.',
          'mole（摩尔）: the unit of amount of substance; one mole contains about 6.02×10²³ particles.',
          'Avogadro constant（阿伏加德罗常数）: the number of particles in one mole, symbol Nᴀ, about 6.02×10²³ mol⁻¹.',
          'molar mass（摩尔质量）: the mass of one mole of a substance; symbol M, unit g/mol, numerically equal to the relative formula mass.',
        ],
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
  examPractice: [
    {
      id: 'chem-stoich-004-cp1',
      syllabus: ['0620/3.2.3'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 3,
      stem: 'Hydrogen burns in oxygen: 2H₂ + O₂ → 2H₂O. Calculate the mass of oxygen needed to burn 8 g of hydrogen completely, and the mass of water formed. (Ar: H = 1, O = 16.)',
      markScheme: [
        { text: 'Mass ratio H₂ : O₂ : H₂O = 4 : 32 : 36 (from Mr × coefficient)', marks: 1 },
        { text: 'Mass of oxygen = 8 × 32 / 4 = 64 g', marks: 1 },
        { text: 'Mass of water = 8 × 36 / 4 = 72 g (or 8 + 64 by conservation of mass)', marks: 1 },
      ],
      examinerNote: {
        zh: '质量比必须乘上化学计量数：是 4 : 32 : 36，不是 2 : 1 : 2。最后一问用质量守恒（8 + 64）检验答案是个好习惯。',
        en: 'The mass ratio uses Mr × coefficient: it is 4 : 32 : 36, not 2 : 1 : 2. Checking the last answer by conservation of mass (8 + 64) is a good habit.',
      },
    },
    {
      id: 'chem-stoich-004-cp2',
      syllabus: ['0620/3.3.3', '0620/3.3.5'],
      tier: 'supplement',
      commandWord: 'Calculate',
      marks: 4,
      stem: 'Calcium carbonate decomposes on heating: CaCO₃ → CaO + CO₂. Calculate the mass of calcium oxide produced when 50 g of calcium carbonate is fully decomposed. (Ar: C = 12, O = 16, Ca = 40.)',
      markScheme: [
        { text: 'Mr(CaCO₃) = 40 + 12 + 48 = 100', marks: 1 },
        { text: 'Moles of CaCO₃ = 50 / 100 = 0.50 mol', marks: 1 },
        { text: 'The equation is 1 : 1, so 0.50 mol of CaO is formed', marks: 1 },
        { text: 'Mr(CaO) = 56, so mass = 0.50 × 56 = 28 g', marks: 1 },
      ],
      examinerNote: {
        zh: '四步各一分：算式量、算物质的量、按比例换算、算质量。这样列式能让"按比例"这一步显现出来，而不是被默认跳过。',
        en: 'Four steps, one mark each: Mr in, moles in, ratio across, mass out. Setting the calculation out that way makes the ratio step visible instead of assumed.',
      },
    },
    {
      id: 'chem-stoich-004-cp3',
      syllabus: ['0620/3.3.4', '0620/3.3.5'],
      tier: 'supplement',
      commandWord: 'Calculate',
      marks: 3,
      stem: 'Zinc reacts with excess hydrochloric acid: Zn + 2HCl → ZnCl₂ + H₂. Calculate the volume of hydrogen, measured at r.t.p., produced when 6.5 g of zinc reacts completely. (Ar: Zn = 65; molar gas volume = 24 dm³ at r.t.p.)',
      markScheme: [
        { text: 'Moles of Zn = 6.5 / 65 = 0.10 mol', marks: 1 },
        { text: 'The ratio is 1 : 1, so 0.10 mol of H₂ is produced', marks: 1 },
        { text: 'Volume = 0.10 × 24 = 2.4 dm³', marks: 1 },
      ],
      examinerNote: {
        zh: '"盐酸过量"意味着锌是限量反应物，直接从锌的物质的量算起，无需核对盐酸。',
        en: '"Excess hydrochloric acid" tells you zinc is the limiting reactant, so work straight from the moles of zinc — there is no need to check the acid.',
      },
    },
  ],
  related: ['igcse-0620-3-3-moles', 'igcse-0620-3-1-formulae-equations', 'chem-stoich-001', 'chem-stoich-003'],
};
