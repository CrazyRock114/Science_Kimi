import type { KnowledgePoint } from '../types';

export const chemBonding001: KnowledgePoint = {
  id: 'chem-bonding-001',
  subject: 'chemistry',
  title: { zh: '离子与离子化合物', en: 'Ions and Ionic Compounds' },
  summary: {
    zh: '原子通过得失电子形成带电荷的离子，带相反电荷的离子通过静电作用结合成离子化合物。理解离子的形成、离子符号的书写以及离子化合物的性质。',
    en: 'Atoms form charged ions by losing or gaining electrons, and oppositely charged ions are held together by electrostatic attraction in ionic compounds. Learn how ions form, how to write ion symbols, and the properties of ionic compounds.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch3', 'pep-che-s1/ch4'],
    igcse: ['0620/2'],
  },
  keywords: {
    zh: ['离子', '阳离子', '阴离子', '离子键', '离子化合物', '得失电子', '氯化钠'],
    en: ['ion', 'cation', 'anion', 'ionic bond', 'ionic compound', 'electron transfer', 'sodium chloride'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '原子怎样变成离子？' },
      {
        type: 'paragraph',
        text: '原子的核外电子（特别是最外层电子）可以发生转移。金属原子的最外层电子数一般少于 4，容易失去电子，形成带正电荷的阳离子；非金属原子的最外层电子数一般多于 4，容易得到电子，形成带负电荷的阴离子。离子符号在元素符号右上角标明电荷，数字在前、正负号在后，电荷数为 1 时省略数字，如 Na⁺、Mg²⁺、Cl⁻、O²⁻。',
      },
      { type: 'formula', latex: '\\mathrm{Na} \\rightarrow \\mathrm{Na}^+ + \\mathrm{e}^-', caption: '钠原子失去 1 个电子，形成带 1 个单位正电荷的钠离子' },
      { type: 'formula', latex: '\\mathrm{Cl} + \\mathrm{e}^- \\rightarrow \\mathrm{Cl}^-', caption: '氯原子得到 1 个电子，形成带 1 个单位负电荷的氯离子' },
      { type: 'heading', text: '离子键与离子化合物' },
      {
        type: 'paragraph',
        text: '带相反电荷的阳离子和阴离子之间存在强烈的静电作用，这种静电作用（包括吸引与排斥的平衡）叫做离子键。由离子键结合而成的化合物叫离子化合物。在离子化合物中，阳离子所带正电荷总数与阴离子所带负电荷总数相等，因此化合物整体呈电中性——这决定了离子个数比，如氯化镁中 Mg²⁺ 与 Cl⁻ 的个数比为 1 : 2。',
      },
      { type: 'formula', latex: '\\mathrm{Na}^+ + \\mathrm{Cl}^- \\rightarrow \\mathrm{NaCl}', caption: '钠离子与氯离子通过离子键形成氯化钠' },
      { type: 'heading', text: '离子化合物的性质' },
      {
        type: 'list',
        items: [
          '通常由金属元素与非金属元素组成，如 NaCl、MgO、CaCl₂、K₂S。',
          '熔点较高、硬度较大：把离子"拆开"需要克服较强的静电作用。',
          '固态时不导电：离子被固定在晶格中不能自由移动。',
          '熔融状态或溶于水后能导电：离子可以自由移动，定向移动形成电流。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'How do atoms become ions?' },
      {
        type: 'paragraph',
        text: 'Electrons — especially those in the outermost shell — can be transferred between atoms. Metal atoms, usually with fewer than 4 outer electrons, tend to lose electrons and become positively charged cations; non-metal atoms, usually with more than 4 outer electrons, tend to gain electrons and become negatively charged anions. The charge is written at the top right of the element symbol, number first then the sign, with the number 1 omitted: Na⁺, Mg²⁺, Cl⁻, O²⁻.',
      },
      { type: 'formula', latex: '\\mathrm{Na} \\rightarrow \\mathrm{Na}^+ + \\mathrm{e}^-', caption: 'A sodium atom loses one electron to form a sodium ion' },
      { type: 'formula', latex: '\\mathrm{Cl} + \\mathrm{e}^- \\rightarrow \\mathrm{Cl}^-', caption: 'A chlorine atom gains one electron to form a chloride ion' },
      { type: 'heading', text: 'Ionic bonds and ionic compounds' },
      {
        type: 'paragraph',
        text: 'Oppositely charged ions attract each other strongly; this electrostatic attraction is called an ionic bond, and compounds held together by ionic bonds are ionic compounds. In an ionic compound the total positive charge exactly balances the total negative charge, so the compound is neutral overall — this fixes the ratio of ions, for example Mg²⁺ and Cl⁻ combine in a 1 : 2 ratio in magnesium chloride.',
      },
      { type: 'formula', latex: '\\mathrm{Na}^+ + \\mathrm{Cl}^- \\rightarrow \\mathrm{NaCl}', caption: 'Sodium ions and chloride ions form sodium chloride through ionic bonding' },
      { type: 'heading', text: 'Properties of ionic compounds' },
      {
        type: 'list',
        items: [
          'Usually formed between metals and non-metals, e.g. NaCl, MgO, CaCl₂, K₂S.',
          'High melting points and hard: separating the ions takes a lot of energy.',
          'Do not conduct electricity when solid: the ions are locked in a lattice and cannot move.',
          'Conduct electricity when molten or dissolved in water: the ions are free to move and carry the current.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '钠原子（Na）变成钠离子（Na⁺）时，发生了什么变化？',
        en: 'What happens when a sodium atom (Na) becomes a sodium ion (Na⁺)?',
      },
      options: {
        zh: ['失去 1 个电子', '得到 1 个电子', '失去 1 个质子', '得到 1 个质子'],
        en: ['It loses 1 electron', 'It gains 1 electron', 'It loses 1 proton', 'It gains 1 proton'],
      },
      answerIndex: 0,
      explanation: {
        zh: '钠原子的最外层只有 1 个电子，容易失去。失去 1 个带负电的电子后，质子数比电子数多 1，所以带 1 个单位正电荷。化学变化中原子核（质子）不会改变。',
        en: 'A sodium atom has just one outer electron, which it loses easily. Losing one negatively charged electron leaves one more proton than electrons, giving a charge of 1+. The nucleus (protons) never changes in a chemical reaction.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于氯化钠的导电性，下列说法正确的是？',
        en: 'Which statement about the electrical conductivity of sodium chloride is correct?',
      },
      options: {
        zh: [
          '固态 NaCl 和 NaCl 溶液都能导电',
          '固态 NaCl 不能导电，熔融的 NaCl 能导电',
          '只有固态 NaCl 能导电',
          'NaCl 在任何状态下都不能导电',
        ],
        en: [
          'Both solid NaCl and NaCl solution conduct electricity',
          'Solid NaCl does not conduct, but molten NaCl does',
          'Only solid NaCl conducts electricity',
          'NaCl never conducts electricity in any state',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '固态 NaCl 中离子被固定在晶格里，不能自由移动，所以不导电；熔融（或溶于水）后离子可以自由移动，定向移动形成电流，所以能导电。',
        en: 'In solid NaCl the ions are locked in a lattice and cannot move, so it does not conduct. When molten (or dissolved), the ions move freely and can carry an electric current.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '镁离子（Mg²⁺）与氧离子（O²⁻）形成离子化合物时，二者的个数比是？',
        en: 'In what ratio do magnesium ions (Mg²⁺) and oxide ions (O²⁻) combine in an ionic compound?',
      },
      options: {
        zh: ['1 : 1', '1 : 2', '2 : 1', '2 : 3'],
        en: ['1 : 1', '1 : 2', '2 : 1', '2 : 3'],
      },
      answerIndex: 0,
      explanation: {
        zh: '离子化合物整体呈电中性：1 个 Mg²⁺ 带 2 个单位正电荷，1 个 O²⁻ 带 2 个单位负电荷，恰好抵消，所以个数比为 1 : 1，化学式为 MgO。',
        en: 'An ionic compound is neutral overall: one Mg²⁺ carries 2+ and one O²⁻ carries 2−, which exactly cancel, so the ratio is 1 : 1 and the formula is MgO.',
      },
    },
  ],
  related: ['igcse-0620-2-4-bonding', 'chem-atomic-003', 'chem-bonding-002', 'chem-bonding-003'],
};
