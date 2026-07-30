import type { KnowledgePoint } from '../types';

export const chemBonding003: KnowledgePoint = {
  id: 'chem-bonding-003',
  subject: 'chemistry',
  title: { zh: '化学式与化合价', en: 'Chemical Formulae and Valency' },
  summary: {
    zh: '化学式用元素符号和数字表示物质的组成，化合价反映元素原子相互化合的数目关系。掌握根据化合价书写化学式、由化学式求化合价的方法。',
    en: 'A chemical formula uses element symbols and numbers to show the composition of a substance, while valency describes the combining power of atoms. Learn to write formulae from valencies and to work out valencies from formulae.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9a/ch4'],
    igcse: ['0620/2', '0620/3'],
  },
  keywords: {
    zh: ['化学式', '化合价', '正价', '负价', '代数和为零', '化学式的意义'],
    en: ['chemical formula', 'valency', 'oxidation number', 'formula writing', 'combining power'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '化学式：物质组成的简洁表达' },
      {
        type: 'paragraph',
        text: '用元素符号和数字的组合表示物质组成的式子叫化学式。以 H₂O 为例：宏观上表示水这种物质，表示水由氢元素和氧元素组成；微观上表示 1 个水分子，表示 1 个水分子由 2 个氢原子和 1 个氧原子构成。注意：化学式中的数字表示原子个数比，不能说"水中含有氢分子"。',
      },
      { type: 'heading', text: '化合价：原子化合的数目关系' },
      {
        type: 'paragraph',
        text: '化合价是元素的原子相互化合时表现出来的一种性质，反映原子间化合的数目关系，有正价和负价。常见化合价要熟记：H 通常 +1，O 通常 -2，Na、K 为 +1，Mg、Ca、Zn 为 +2，Al 为 +3，Cl 与金属化合时为 -1。单质中元素的化合价为 0；有些元素有可变化合价，如 Fe 有 +2 和 +3。',
      },
      {
        type: 'formula',
        latex: '(+1) \\times 2 + (-2) \\times 1 = 0',
        caption: '化合物里正负化合价的代数和为零——以 H₂O 为例',
      },
      { type: 'heading', text: '根据化合价写化学式' },
      {
        type: 'list',
        items: [
          '第一步：正价元素写在左边，负价元素写在右边，并标出化合价。',
          '第二步：求两种元素化合价绝对值的最小公倍数。',
          '第三步：用最小公倍数分别除以各元素化合价的绝对值，得到原子个数。',
          '第四步：把原子个数写在元素符号右下角，检查正负化合价代数和是否为零。',
        ],
      },
      {
        type: 'formula',
        latex: '\\mathrm{Al}^{+3}\\ \\mathrm{O}^{-2} \\;\\longrightarrow\\; \\mathrm{Al}_2\\mathrm{O}_3',
        caption: 'Al 为 +3、O 为 -2，最小公倍数为 6：Al 原子 6÷3 = 2 个，O 原子 6÷2 = 3 个',
      },
      { type: 'heading', text: '由化学式求化合价' },
      {
        type: 'paragraph',
        text: '利用"化合物中正负化合价代数和为零"这一原则，还可以反推未知元素的化合价。例如求 KMnO₄ 中 Mn 的化合价：设 Mn 为 x，则 (+1) + x + (−2)×4 = 0，解得 x = +7。',
      },
    ],
    en: [
      { type: 'heading', text: 'Formulae: a compact way to show composition' },
      {
        type: 'paragraph',
        text: 'A chemical formula uses element symbols and numbers to show what a substance is made of. Take H₂O: on the large scale it stands for water and shows that water contains hydrogen and oxygen; on the particle scale it stands for one water molecule made of 2 hydrogen atoms and 1 oxygen atom. The numbers give the ratio of atoms — water does not contain hydrogen molecules.',
      },
      { type: 'heading', text: 'Valency: the combining power of atoms' },
      {
        type: 'paragraph',
        text: 'Valency describes how many bonds an atom forms when it combines, and it can be positive or negative. Common values worth memorising: H is usually +1, O usually −2, Na and K are +1, Mg, Ca and Zn are +2, Al is +3, and Cl is −1 when combined with metals. An element in its uncombined form has a valency of 0, and some elements vary — iron can be +2 or +3.',
      },
      {
        type: 'formula',
        latex: '(+1) \\times 2 + (-2) \\times 1 = 0',
        caption: 'In any compound the positive and negative valencies balance to zero — H₂O as an example',
      },
      { type: 'heading', text: 'Writing a formula from valencies' },
      {
        type: 'list',
        items: [
          'Step 1: write the positive element first, the negative element second, and mark their valencies.',
          'Step 2: find the lowest common multiple of the two valency magnitudes.',
          'Step 3: divide the LCM by each valency magnitude to get the number of atoms.',
          'Step 4: write the numbers as subscripts and check that the valencies balance to zero.',
        ],
      },
      {
        type: 'formula',
        latex: '\\mathrm{Al}^{+3}\\ \\mathrm{O}^{-2} \\;\\longrightarrow\\; \\mathrm{Al}_2\\mathrm{O}_3',
        caption: 'Al is +3 and O is −2; the LCM is 6, giving 6÷3 = 2 Al atoms and 6÷2 = 3 O atoms',
      },
      { type: 'heading', text: 'Working out a valency from a formula' },
      {
        type: 'paragraph',
        text: 'The rule that valencies in a compound add up to zero also works in reverse. To find the valency of Mn in KMnO₄, call it x: (+1) + x + (−2)×4 = 0, which gives x = +7.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '已知铝元素显 +3 价，氧元素显 -2 价，氧化铝的化学式是？',
        en: 'Aluminium has a valency of +3 and oxygen −2. What is the formula of aluminium oxide?',
      },
      options: {
        zh: ['AlO', 'Al₂O₃', 'Al₃O₂', 'AlO₂'],
        en: ['AlO', 'Al₂O₃', 'Al₃O₂', 'AlO₂'],
      },
      answerIndex: 1,
      explanation: {
        zh: '化合价绝对值的最小公倍数为 6，Al 原子 6÷3 = 2 个，O 原子 6÷2 = 3 个，所以化学式为 Al₂O₃。检验：(+3)×2 + (−2)×3 = 0，代数和为零，正确。',
        en: 'The LCM of 3 and 2 is 6, giving 6÷3 = 2 aluminium atoms and 6÷2 = 3 oxygen atoms, hence Al₂O₃. Check: (+3)×2 + (−2)×3 = 0 — the valencies balance.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '高锰酸钾（KMnO₄）中，锰元素的化合价是？',
        en: 'What is the valency of manganese in potassium manganate(VII), KMnO₄?',
      },
      options: {
        zh: ['+2', '+4', '+6', '+7'],
        en: ['+2', '+4', '+6', '+7'],
      },
      answerIndex: 3,
      explanation: {
        zh: '设 Mn 的化合价为 x。K 为 +1，O 为 -2，根据化合物中正负化合价代数和为零：(+1) + x + (−2)×4 = 0，解得 x = +7。',
        en: 'Let the valency of Mn be x. With K at +1 and O at −2, the sum of valencies must be zero: (+1) + x + (−2)×4 = 0, so x = +7.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于化学式 CO₂ 的意义，下列说法错误的是？',
        en: 'Which statement about the meaning of the formula CO₂ is incorrect?',
      },
      options: {
        zh: [
          '表示二氧化碳这种物质',
          '表示二氧化碳由碳元素和氧元素组成',
          '表示 1 个二氧化碳分子由 1 个碳原子和 2 个氧原子构成',
          '表示二氧化碳由 1 个碳原子和 1 个氧分子构成',
        ],
        en: [
          'It stands for the substance carbon dioxide',
          'It shows carbon dioxide is made of the elements carbon and oxygen',
          'It shows one CO₂ molecule contains 1 carbon atom and 2 oxygen atoms',
          'It shows carbon dioxide is made of 1 carbon atom and 1 oxygen molecule',
        ],
      },
      answerIndex: 3,
      explanation: {
        zh: 'CO₂ 中"2"表示 1 个二氧化碳分子含 2 个氧原子，氧原子与碳原子直接结合在分子中，二氧化碳里并不存在氧分子（O₂）。化学式中的数字只表示原子个数比。',
        en: 'The "2" in CO₂ means each molecule contains 2 oxygen atoms bonded to the carbon atom; there is no O₂ molecule inside carbon dioxide. Subscripts only give the ratio of atoms.',
      },
    },
  ],
};
