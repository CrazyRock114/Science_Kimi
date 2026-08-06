import type { KnowledgePoint } from '../types';

export const chemGas001: KnowledgePoint = {
  id: 'chem-gas-001',
  subject: 'chemistry',
  title: { zh: '氧气的制取与性质', en: 'Preparation and Properties of Oxygen' },
  summary: {
    zh: '实验室可用加热高锰酸钾或分解过氧化氢制取氧气。氧气不易溶于水、密度比空气略大，能支持燃烧，可用带火星的木条检验。',
    en: 'Oxygen is prepared in the laboratory by heating potassium permanganate or decomposing hydrogen peroxide. It is slightly soluble in water, slightly denser than air, supports combustion, and is tested for with a glowing splint.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch2'],
    igcse: ['0620/12'],
  },
  keywords: {
    zh: ['氧气', '高锰酸钾', '过氧化氢', '催化剂', '二氧化锰', '排水法', '带火星木条', '助燃'],
    en: ['oxygen', 'potassium permanganate', 'hydrogen peroxide', 'catalyst', 'manganese(IV) oxide', 'glowing splint', 'supports combustion'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '氧气的实验室制法' },
      {
        type: 'paragraph',
        text: '实验室制取氧气常用三种方法：加热高锰酸钾、加热氯酸钾与二氧化锰的混合物、在二氧化锰催化下分解过氧化氢溶液。二氧化锰在这两个反应中是催化剂——能改变化学反应速率，而本身的质量和化学性质在反应前后都没有改变。',
      },
      { type: 'formula', latex: '2\\mathrm{KMnO}_4 \\xrightarrow{\\Delta} \\mathrm{K}_2\\mathrm{MnO}_4 + \\mathrm{MnO}_2 + \\mathrm{O}_2\\uparrow', caption: '加热高锰酸钾：试管口要塞一团棉花，防止粉末进入导管' },
      { type: 'formula', latex: '2\\mathrm{H}_2\\mathrm{O}_2 \\xrightarrow{\\mathrm{MnO}_2} 2\\mathrm{H}_2\\mathrm{O} + \\mathrm{O}_2\\uparrow', caption: '过氧化氢在二氧化锰催化下分解，不需加热，操作简便' },
      { type: 'formula', latex: '2\\mathrm{KClO}_3 \\xrightarrow[\\Delta]{\\mathrm{MnO}_2} 2\\mathrm{KCl} + 3\\mathrm{O}_2\\uparrow', caption: '加热氯酸钾，二氧化锰作催化剂' },
      {
        type: 'list',
        items: [
          '收集方法：氧气不易溶于水，可用排水法收集（气体较纯净）；密度比空气略大，也可用向上排空气法收集。',
          '检验方法：把带火星的木条伸入集气瓶中，木条复燃，证明是氧气。',
          '验满方法（向上排空气法）：把带火星的木条放在集气瓶口，木条复燃说明已集满。',
          '注意事项：用排水法收集完毕，应先把导管移出水面再熄灭酒精灯，防止水倒吸使试管炸裂。',
        ],
      },
      { type: 'heading', text: '氧气的性质' },
      {
        type: 'paragraph',
        text: '氧气是一种无色、无味的气体，不易溶于水，标准状况下密度比空气略大。氧气的化学性质比较活泼，能支持燃烧（助燃性），但本身不能燃烧。许多物质能在氧气中剧烈燃烧并放出大量的热。',
      },
      { type: 'formula', latex: '\\mathrm{C} + \\mathrm{O}_2 \\xrightarrow{\\text{点燃}} \\mathrm{CO}_2', caption: '木炭在氧气中发出白光，生成能使澄清石灰水变浑浊的气体' },
      { type: 'formula', latex: '3\\mathrm{Fe} + 2\\mathrm{O}_2 \\xrightarrow{\\text{点燃}} \\mathrm{Fe}_3\\mathrm{O}_4', caption: '铁丝在氧气中剧烈燃烧，火星四射，生成黑色固体四氧化三铁' },
      { type: 'formula', latex: '\\mathrm{S} + \\mathrm{O}_2 \\xrightarrow{\\text{点燃}} \\mathrm{SO}_2', caption: '硫在氧气中发出明亮的蓝紫色火焰，生成有刺激性气味的气体' },
    ],
    en: [
      { type: 'heading', text: 'Laboratory preparation of oxygen' },
      {
        type: 'paragraph',
        text: 'Oxygen is commonly prepared by heating potassium permanganate, heating potassium chlorate mixed with manganese(IV) oxide, or decomposing hydrogen peroxide solution over manganese(IV) oxide. Manganese(IV) oxide acts as a catalyst — it changes the reaction rate while its own mass and chemical properties remain unchanged at the end of the reaction.',
      },
      { type: 'formula', latex: '2\\mathrm{KMnO}_4 \\xrightarrow{\\Delta} \\mathrm{K}_2\\mathrm{MnO}_4 + \\mathrm{MnO}_2 + \\mathrm{O}_2\\uparrow', caption: 'Heating potassium permanganate: plug the mouth of the test tube with cotton wool to keep powder out of the delivery tube' },
      { type: 'formula', latex: '2\\mathrm{H}_2\\mathrm{O}_2 \\xrightarrow{\\mathrm{MnO}_2} 2\\mathrm{H}_2\\mathrm{O} + \\mathrm{O}_2\\uparrow', caption: 'Hydrogen peroxide decomposes over the catalyst — no heating needed, simple to operate' },
      { type: 'formula', latex: '2\\mathrm{KClO}_3 \\xrightarrow[\\Delta]{\\mathrm{MnO}_2} 2\\mathrm{KCl} + 3\\mathrm{O}_2\\uparrow', caption: 'Heating potassium chlorate with manganese(IV) oxide as catalyst' },
      {
        type: 'list',
        items: [
          'Collection: oxygen is only slightly soluble in water, so it can be collected over water (giving purer gas); being slightly denser than air, it can also be collected by upward delivery.',
          'Test: insert a glowing splint into the gas jar — it relights, proving the gas is oxygen.',
          'Testing for completeness (upward delivery): a glowing splint held at the mouth of the jar relights when the jar is full.',
          'Safety: when collecting over water, remove the delivery tube from the water before extinguishing the flame, so that water is not sucked back into the hot test tube.',
        ],
      },
      { type: 'heading', text: 'Properties of oxygen' },
      {
        type: 'paragraph',
        text: 'Oxygen is a colourless, odourless gas, only slightly soluble in water and slightly denser than air. It is chemically fairly reactive: it supports combustion, though it does not burn itself. Many substances burn vigorously in oxygen and release large amounts of heat.',
      },
      { type: 'formula', latex: '\\mathrm{C} + \\mathrm{O}_2 \\xrightarrow{\\text{ignite}} \\mathrm{CO}_2', caption: 'Charcoal glows white-hot in oxygen, forming a gas that turns limewater milky' },
      { type: 'formula', latex: '3\\mathrm{Fe} + 2\\mathrm{O}_2 \\xrightarrow{\\text{ignite}} \\mathrm{Fe}_3\\mathrm{O}_4', caption: 'Iron wire burns fiercely with a shower of sparks, forming the black solid iron(II,III) oxide' },
      { type: 'formula', latex: '\\mathrm{S} + \\mathrm{O}_2 \\xrightarrow{\\text{ignite}} \\mathrm{SO}_2', caption: 'Sulfur burns with a bright blue-violet flame, forming a pungent gas' },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '实验室用加热高锰酸钾制取并用排水法收集氧气，实验结束时应先进行的操作是？',
        en: 'Oxygen is prepared by heating potassium permanganate and collected over water. At the end of the experiment, what should be done FIRST?',
      },
      options: {
        zh: [
          '熄灭酒精灯',
          '把导管移出水面',
          '拆除装置',
          '倒出试管中的固体',
        ],
        en: [
          'Extinguish the Bunsen/alcohol burner',
          'Remove the delivery tube from the water',
          'Take the apparatus apart',
          'Tip the solid out of the test tube',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '如果先熄灭酒精灯，试管内温度降低、气压减小，水槽中的水会沿导管倒吸入热的试管，使试管炸裂。因此必须先把导管移出水面，再熄灭酒精灯。',
        en: 'If the flame is removed first, the gas in the test tube cools and contracts, so water is sucked back up the delivery tube into the hot test tube and may crack it. The delivery tube must be lifted out of the water before the flame is extinguished.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '在过氧化氢分解制氧气的反应中，二氧化锰的作用是？',
        en: 'In the decomposition of hydrogen peroxide to produce oxygen, what is the role of manganese(IV) oxide?',
      },
      options: {
        zh: [
          '反应物，被消耗掉',
          '生成物之一',
          '催化剂，加快反应速率且本身不被消耗',
          '增加生成氧气的总量',
        ],
        en: [
          'A reactant that gets used up',
          'One of the products',
          'A catalyst that speeds up the reaction without being consumed',
          'It increases the total amount of oxygen produced',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '二氧化锰是催化剂：它加快过氧化氢的分解速率，反应前后本身的质量和化学性质都不变。催化剂只能改变反应速率，不能改变生成物的质量——不加催化剂，等量的过氧化氢最终产生的氧气一样多，只是更慢。',
        en: 'Manganese(IV) oxide is a catalyst: it speeds up the decomposition while its own mass and chemical properties are unchanged afterwards. A catalyst changes only the rate, not the yield — the same amount of hydrogen peroxide eventually produces the same amount of oxygen with or without it, just more slowly.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列关于氧气性质的说法中，正确的是？',
        en: 'Which statement about the properties of oxygen is correct?',
      },
      options: {
        zh: [
          '氧气能燃烧，可作燃料',
          '氧气易溶于水，所以鱼能在水中生存',
          '氧气能支持燃烧，可用带火星的木条检验',
          '氧气密度比空气小，可用向下排空气法收集',
        ],
        en: [
          'Oxygen burns, so it can be used as a fuel',
          'Oxygen dissolves easily in water, which is why fish can live in it',
          'Oxygen supports combustion and is tested for with a glowing splint',
          'Oxygen is less dense than air, so it is collected by downward delivery',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '氧气有助燃性但没有可燃性，不能作燃料，A 错；氧气不易溶于水，水中溶解的少量氧已足够鱼类呼吸，B 错；氧气密度比空气略大，应用向上排空气法收集，D 错。氧气能使带火星的木条复燃，这是检验氧气的方法，C 正确。',
        en: 'Oxygen supports combustion but is not itself flammable, so it cannot be a fuel (A is wrong). It is only slightly soluble — the small dissolved amount is enough for fish (B is wrong). It is slightly denser than air, so it is collected by upward delivery (D is wrong). A glowing splint relights in oxygen, which is the standard test — C is correct.',
      },
    },
  ],
  related: ['igcse-0620-12-5-tests', 'chem-gas-002', 'chem-energetics-002', 'chem-energetics-004'],
};
