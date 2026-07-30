import type { KnowledgePoint } from '../types';

export const chemStoich002: KnowledgePoint = {
  id: 'chem-stoich-002',
  subject: 'chemistry',
  title: { zh: '化学方程式的书写与配平', en: 'Writing and Balancing Chemical Equations' },
  summary: {
    zh: '化学方程式用化学式简洁地表示化学反应。学习书写的两个原则、"写—配—注—查"四个步骤，以及配平和"↑""↓"标注的规则。',
    en: 'A chemical equation uses formulae to describe a reaction concisely. Learn the two rules for writing equations, the four steps, and how to balance equations and use state symbols such as ↑ and ↓.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9a/ch5'],
    igcse: ['0620/3'],
  },
  keywords: {
    zh: ['化学方程式', '配平', '化学计量数', '反应条件', '气体符号', '沉淀符号'],
    en: ['chemical equation', 'balancing', 'coefficients', 'reaction conditions', 'word equation', 'state symbols'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '化学方程式及其意义' },
      {
        type: 'paragraph',
        text: '用化学式来表示化学反应的式子，叫做化学方程式。它包含两方面的信息：质的方面——反应物、生成物分别是什么，反应条件是什么；量的方面——各物质之间的粒子个数比和质量比。',
      },
      {
        type: 'formula',
        latex: '\\mathrm{C + O_2 \\xrightarrow{\\text{点燃}} CO_2}',
        caption: '质的方面：碳和氧气在点燃条件下反应生成二氧化碳；量的方面：每 12 份质量的碳与 32 份质量的氧气恰好完全反应，生成 44 份质量的二氧化碳',
      },
      { type: 'heading', text: '书写原则与步骤' },
      {
        type: 'list',
        items: [
          '原则一：以客观事实为基础，绝不能臆造事实上不存在的物质和反应，化学式必须写正确。',
          '原则二：遵守质量守恒定律，配平方程式，使等号两边每一种原子的数目相等。',
          '步骤"写—配—注—查"：正确写出反应物和生成物的化学式；配平；注明反应条件和生成物状态（"↑""↓"）；检查化学式、配平和条件是否无误，把短线改成等号。',
        ],
      },
      { type: 'heading', text: '配平的方法' },
      {
        type: 'paragraph',
        text: '配平时只能在化学式前面添加适当的化学计量数（系数），绝不能改动化学式中元素符号右下角的数字，否则就改变了物质本身。常用最小公倍数法：以磷在氧气中燃烧为例，先使两边氧原子数相等（O₂ 与 P₂O₅ 中氧原子数 2 和 5 的最小公倍数是 10），再配平磷原子。',
      },
      {
        type: 'formula',
        latex: '\\mathrm{4P + 5O_2 \\xrightarrow{\\text{点燃}} 2P_2O_5}',
        caption: '配平后：等号两边各有 4 个磷原子、10 个氧原子',
      },
      { type: 'heading', text: '"↑"与"↓"的标注规则' },
      {
        type: 'paragraph',
        text: '如果反应物中没有气体而生成物中有气体，在该气体物质的化学式右边注"↑"，如过氧化氢分解制氧气；如果反应在溶液中进行，生成物中有不溶性固体（沉淀），在其化学式右边注"↓"，如硫酸铜溶液与氢氧化钠溶液反应生成氢氧化铜。若反应物中已有气体，则生成的气体不再注"↑"。',
      },
    ],
    en: [
      { type: 'heading', text: 'Chemical equations and what they tell us' },
      {
        type: 'paragraph',
        text: 'A chemical equation uses chemical formulae to represent a reaction. It carries two kinds of information: qualitative — what the reactants and products are and under what conditions they react; and quantitative — the ratios of particles and of masses between the substances involved.',
      },
      {
        type: 'formula',
        latex: '\\mathrm{C + O_2 \\xrightarrow{\\text{ignite}} CO_2}',
        caption: 'Qualitative: carbon reacts with oxygen to form carbon dioxide. Quantitative: every 12 parts by mass of carbon reacts exactly with 32 parts of oxygen to give 44 parts of carbon dioxide.',
      },
      { type: 'heading', text: 'Rules and steps for writing equations' },
      {
        type: 'list',
        items: [
          'Rule 1: base the equation on facts — never invent substances or reactions that do not exist, and write every formula correctly.',
          'Rule 2: obey the law of conservation of mass — balance the equation so that the number of atoms of each element is the same on both sides.',
          'Four steps: write the correct formulae of reactants and products; balance the equation; add the reaction conditions and state symbols (↑, ↓); check everything and replace the dash with an equals sign.',
        ],
      },
      { type: 'heading', text: 'How to balance an equation' },
      {
        type: 'paragraph',
        text: 'To balance, you may only add coefficients in front of the formulae — never change the subscripts inside a formula, because that would change the substance itself. A common approach is the lowest common multiple method. For phosphorus burning in oxygen, first equalise the oxygen atoms (the LCM of 2 and 5 is 10), then balance the phosphorus atoms.',
      },
      {
        type: 'formula',
        latex: '\\mathrm{4P + 5O_2 \\xrightarrow{\\text{ignite}} 2P_2O_5}',
        caption: 'After balancing: 4 phosphorus atoms and 10 oxygen atoms on each side',
      },
      { type: 'heading', text: 'When to use ↑ and ↓' },
      {
        type: 'paragraph',
        text: 'If no gas appears among the reactants but a gas is produced, mark that gas with ↑ — for example the decomposition of hydrogen peroxide. If the reaction happens in solution and an insoluble solid (precipitate) forms, mark it with ↓ — for example copper(II) hydroxide from copper(II) sulfate and sodium hydroxide. If a gas is already a reactant, the gaseous product is not marked with ↑.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列化学方程式书写正确的是（ ）',
        en: 'Which of the following chemical equations is written correctly?',
      },
      options: {
        zh: [
          'Mg + O₂ —点燃→ MgO₂',
          '2Mg + O₂ —点燃→ 2MgO',
          'Mg + O₂ —点燃→ MgO',
          '2Mg + O₂ ═ 2MgO↑',
        ],
        en: [
          'Mg + O₂ —ignite→ MgO₂',
          '2Mg + O₂ —ignite→ 2MgO',
          'Mg + O₂ —ignite→ MgO',
          '2Mg + O₂ ═ 2MgO↑',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: 'A 把氧化镁的化学式错写成 MgO₂（应为 MgO），违背客观事实；C 没有配平，两边氧原子数不相等；D 缺少反应条件"点燃"，且反应物中有气体，生成的氧化镁又是固体，不应标"↑"。只有 B 既写对了化学式，又配平并注明了条件。',
        en: 'A uses the wrong formula for magnesium oxide (it should be MgO, not MgO₂), which violates the facts; C is unbalanced — the oxygen atoms do not match; D omits the condition "ignite" and wrongly adds ↑ even though a gas is among the reactants and the product is a solid. Only B has correct formulae, balancing and conditions.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '配平化学方程式 __Al + __O₂ —→ __Al₂O₃，各化学计量数依次为（ ）',
        en: 'Balance __Al + __O₂ —→ __Al₂O₃. The coefficients, in order, are (  )',
      },
      options: {
        zh: ['2、3、2', '4、3、2', '4、3、1', '2、1、1'],
        en: ['2, 3, 2', '4, 3, 2', '4, 3, 1', '2, 1, 1'],
      },
      answerIndex: 1,
      explanation: {
        zh: '用最小公倍数法：O₂ 与 Al₂O₃ 中氧原子数 2 和 3 的最小公倍数是 6，故 O₂ 前配 3、Al₂O₃ 前配 2；再配平铝原子，Al 前配 4。检验：两边均为 4 个 Al 原子、6 个 O 原子。注意配平的是系数，不能把 Al₂O₃ 改成 AlO 之类来"凑平"。',
        en: 'Use the LCM method: the LCM of the oxygen counts 2 (in O₂) and 3 (in Al₂O₃) is 6, so put 3 before O₂ and 2 before Al₂O₃; then balance aluminium with 4 before Al. Check: 4 Al and 6 O on both sides. Remember to change coefficients only — never rewrite Al₂O₃ as AlO just to make it balance.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '硫酸铜溶液与氢氧化钠溶液反应生成氢氧化铜沉淀和硫酸钠。书写该反应的化学方程式时，应在氢氧化铜的化学式后标注（ ）',
        en: 'Copper(II) sulfate solution reacts with sodium hydroxide solution to form a copper(II) hydroxide precipitate and sodium sulfate. When writing the equation, copper(II) hydroxide should be marked with (  )',
      },
      options: {
        zh: ['"↑"', '"↓"', '"↑"和"↓"都标', '什么都不标'],
        en: ['↑', '↓', 'both ↑ and ↓', 'nothing'],
      },
      answerIndex: 1,
      explanation: {
        zh: '反应在溶液中进行，生成的氢氧化铜是不溶于水的固体（蓝色沉淀），按规则应在其化学式后注"↓"。"↑"只用于反应物中没有气体而生成气体的情况，本反应没有气体生成，故不标。',
        en: 'The reaction takes place in solution and copper(II) hydroxide is an insoluble solid (a blue precipitate), so it is marked with ↓. The symbol ↑ is only used when a gas is produced and no gas is among the reactants — no gas forms here, so ↑ is not used.',
      },
    },
  ],
};
