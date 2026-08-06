import type { KnowledgePoint } from '../types';

export const chemEnergetics002: KnowledgePoint = {
  id: 'chem-energetics-002',
  subject: 'chemistry',
  title: { zh: '化学反应速率及其影响因素', en: 'Rate of Reaction and Its Influencing Factors' },
  summary: {
    zh: '化学反应有快有慢。认识反应速率的表示方法，探究浓度、温度、催化剂、固体表面积等因素如何影响反应速率，并用碰撞理论作出初步解释。',
    en: 'Chemical reactions proceed at different speeds. Learn how the rate of reaction is measured, investigate how concentration, temperature, catalysts and surface area affect it, and explain the effects using collision theory.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch2', 'pep-che-s2/ch2'],
    igcse: ['0620/6'],
  },
  keywords: {
    zh: ['反应速率', '浓度', '温度', '催化剂', '表面积', '碰撞理论', '有效碰撞'],
    en: ['rate of reaction', 'concentration', 'temperature', 'catalyst', 'surface area', 'collision theory', 'effective collision'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是化学反应速率' },
      {
        type: 'paragraph',
        text: '不同的化学反应进行得快慢不同：爆炸瞬间完成，而铁生锈需要很长时间。初中阶段可以通过气泡产生的快慢、沉淀出现的快慢等现象定性地比较反应快慢；高中阶段则用单位时间内反应物浓度的减小或生成物浓度的增大来定量表示反应速率。',
      },
      {
        type: 'formula',
        latex: 'v = \\frac{\\Delta c}{\\Delta t}',
        caption: '反应速率：Δc 为浓度的变化量，Δt 为时间间隔，常用单位 mol/(L·s)',
      },
      { type: 'heading', text: '影响反应速率的因素' },
      {
        type: 'list',
        items: [
          '浓度：其他条件相同时，增大反应物浓度，反应速率加快。如硫在纯氧中比在空气中燃烧更剧烈。',
          '温度：升高温度，反应速率加快。一般来说，温度每升高 10 ℃，反应速率增大到原来的 2～4 倍。食品冷藏就是利用低温减慢变质反应。',
          '催化剂：能改变化学反应速率，而本身的质量和化学性质在反应前后不变。如二氧化锰能加快过氧化氢分解制取氧气。',
          '固体的表面积：固体反应物颗粒越小、表面积越大，反应越快。如粉末状碳酸钙比块状碳酸钙与盐酸反应更快；煤粉比煤块燃烧更剧烈。',
        ],
      },
      { type: 'heading', text: '用碰撞理论初步解释' },
      {
        type: 'paragraph',
        text: '反应物粒子之间必须相互碰撞，并且碰撞时具有足够的能量，才可能发生反应，这种碰撞称为有效碰撞。增大浓度，单位体积内粒子数增多，碰撞机会增大；升高温度，粒子运动加快、能量升高，有效碰撞显著增多；加入催化剂能降低反应所需的能量门槛（活化能），使更多碰撞成为有效碰撞。',
      },
      {
        type: 'paragraph',
        text: '注意：催化剂只能改变化学反应速率，不能改变生成物的质量，也不能使本来不能发生的反应发生。没有二氧化锰，过氧化氢仍会分解，只是速率很慢。',
      },
    ],
    en: [
      { type: 'heading', text: 'What is the rate of reaction?' },
      {
        type: 'paragraph',
        text: 'Different reactions proceed at very different speeds: an explosion is over in an instant, while iron rusting takes years. At a basic level you can compare rates qualitatively — how quickly bubbles form or a precipitate appears. Quantitatively, the rate is measured as the change in concentration of a reactant or product per unit time.',
      },
      {
        type: 'formula',
        latex: '\\text{rate} = \\frac{\\Delta c}{\\Delta t}',
        caption: 'Rate of reaction: Δc is the change in concentration over time interval Δt; a common unit is mol/(dm³·s)',
      },
      { type: 'heading', text: 'Factors affecting the rate of reaction' },
      {
        type: 'list',
        items: [
          'Concentration: with other conditions unchanged, a higher concentration of reactants gives a faster reaction. Sulfur burns far more vigorously in pure oxygen than in air.',
          'Temperature: raising the temperature speeds up a reaction. As a rough rule, the rate doubles to quadruples for every 10 °C rise. Refrigerating food uses low temperature to slow down decay reactions.',
          'Catalyst: a substance that changes the rate of a reaction while its own mass and chemical properties remain unchanged at the end. Manganese(IV) oxide speeds up the decomposition of hydrogen peroxide.',
          'Surface area: the smaller the particles of a solid reactant, the larger its surface area and the faster the reaction. Powdered calcium carbonate reacts with hydrochloric acid faster than lumps; coal dust burns more fiercely than lumps of coal.',
        ],
      },
      { type: 'heading', text: 'Explaining with collision theory' },
      {
        type: 'paragraph',
        text: 'Reactant particles must collide with enough energy for a reaction to occur — such collisions are called effective (successful) collisions. A higher concentration means more particles per unit volume and more frequent collisions. A higher temperature makes particles move faster and collide with more energy, greatly increasing the number of successful collisions. A catalyst lowers the energy barrier (activation energy) so that more collisions become successful.',
      },
      {
        type: 'paragraph',
        text: 'Note: a catalyst only changes the rate — it does not change the amount of product, and it cannot make an impossible reaction happen. Without manganese(IV) oxide, hydrogen peroxide still decomposes, only much more slowly.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '把等质量的粉末状碳酸钙和块状碳酸钙分别加入足量、等浓度的稀盐酸中，下列说法正确的是？',
        en: 'Equal masses of powdered and lump calcium carbonate are added separately to excess dilute hydrochloric acid of the same concentration. Which statement is correct?',
      },
      options: {
        zh: [
          '块状碳酸钙先反应完，因为块状的更纯',
          '粉末状碳酸钙先反应完，因为粉末与酸的接触面积更大',
          '两者同时反应完，因为质量相等',
          '粉末状碳酸钙产生的二氧化碳更多',
        ],
        en: [
          'The lumps finish first because they are purer',
          'The powder finishes first because it has a larger surface area in contact with the acid',
          'Both finish at the same time because the masses are equal',
          'The powder produces more carbon dioxide',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '固体颗粒越小，与反应物接触的表面积越大，碰撞机会越多，反应越快，所以粉末先反应完。但两者质量相等、盐酸足量，最终生成的二氧化碳一样多——表面积只改变速率，不改变产量。',
        en: 'Smaller particles have a larger surface area exposed to the acid, so collisions are more frequent and the powder reacts faster. But with equal masses and excess acid, both produce the same amount of carbon dioxide — surface area changes the rate, not the yield.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列关于催化剂的说法中，正确的是？',
        en: 'Which statement about catalysts is correct?',
      },
      options: {
        zh: [
          '催化剂一定能加快化学反应速率',
          '催化剂能增加生成物的质量',
          '没有催化剂，反应就不能发生',
          '催化剂能改变化学反应速率，反应前后本身的质量和化学性质不变',
        ],
        en: [
          'A catalyst always speeds up a chemical reaction',
          'A catalyst increases the mass of the products',
          'Without a catalyst the reaction cannot happen at all',
          'A catalyst changes the rate of a reaction, while its own mass and chemical properties stay unchanged',
        ],
      },
      answerIndex: 3,
      explanation: {
        zh: '催化剂是"改变"反应速率，既可能加快也可能减慢（中学常见的多为加快）；它不改变生成物的量，没有它反应也能发生，只是速率不同。反应前后催化剂的质量和化学性质不变。',
        en: 'A catalyst changes the rate — usually speeding it up, sometimes slowing it down. It does not change the amount of product, and the reaction still occurs without it, just at a different rate. Its mass and chemical properties are unchanged at the end.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '夏季把食物放进冰箱冷藏可以延缓变质。这样做的主要原因是什么？',
        en: 'In summer, keeping food in a refrigerator slows down its spoilage. What is the main reason?',
      },
      options: {
        zh: [
          '冰箱里缺少氧气，食物无法发生反应',
          '低温使食物腐败变质的化学反应速率减慢',
          '低温杀死了食物中的所有微生物',
          '低温改变了食物的组成',
        ],
        en: [
          'The fridge lacks oxygen, so the food cannot react',
          'The low temperature slows down the chemical reactions that spoil the food',
          'The low temperature kills all the microorganisms in the food',
          'The low temperature changes the composition of the food',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '升高温度会加快反应速率，降低温度则减慢反应速率。冷藏通过低温使食物氧化、腐败等化学反应变慢，从而延长保存时间。冰箱内并非没有氧气，低温也不能杀死所有微生物。',
        en: 'Raising the temperature speeds up reactions, while lowering it slows them down. Refrigeration uses low temperature to slow the oxidation and decay reactions, so food keeps longer. The fridge still contains oxygen, and low temperature does not kill all microorganisms.',
      },
    },
  ],
  related: ['igcse-0620-6-2-rate-of-reaction', 'chem-energetics-001', 'chem-energetics-003', 'chem-gas-001'],
};
