import type { KnowledgePoint } from '../types';

export const chemAcidbase001: KnowledgePoint = {
  id: 'chem-acidbase-001',
  subject: 'chemistry',
  title: { zh: '中和反应及其应用', en: 'Neutralisation and Its Applications' },
  summary: {
    zh: '酸与碱作用生成盐和水的反应叫做中和反应，其本质是氢离子与氢氧根离子结合生成水。中和反应在生产生活中有广泛应用。',
    en: 'Neutralisation is the reaction between an acid and a base to form a salt and water. Its essence is hydrogen ions combining with hydroxide ions to form water, and it has many applications in daily life and industry.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9b/ch3'],
    igcse: ['0620/7.1'],
  },
  keywords: {
    zh: ['中和反应', '盐', '水', '氢离子', '氢氧根离子', '熟石灰', '胃酸'],
    en: ['neutralisation', 'salt', 'water', 'hydrogen ion', 'hydroxide ion', 'slaked lime', 'antacid'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是中和反应？' },
      {
        type: 'paragraph',
        text: '酸与碱作用生成盐和水的反应，叫做中和反应。例如盐酸与氢氧化钠溶液混合时，生成氯化钠和水，反应放出热量。',
      },
      { type: 'formula', latex: '\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}', caption: '盐酸与氢氧化钠的中和反应' },
      {
        type: 'paragraph',
        text: '中和反应的本质是酸溶液中的氢离子（H⁺）与碱溶液中的氢氧根离子（OH⁻）结合生成水分子。因此，任何强酸与强碱的中和反应都可以用同一个离子方程式表示。',
      },
      { type: 'formula', latex: '\\mathrm{H^+} + \\mathrm{OH^-} \\rightarrow \\mathrm{H_2O}', caption: '中和反应的离子方程式' },
      {
        type: 'paragraph',
        text: '中和反应往往没有明显的现象，可以借助酸碱指示剂（如酚酞）判断反应是否恰好完成：向滴有酚酞的氢氧化钠溶液中逐滴加入稀盐酸，溶液由红色恰好变为无色时，说明酸碱恰好完全中和。',
      },
      { type: 'heading', text: '中和反应的应用' },
      {
        type: 'list',
        items: [
          '改良酸性土壤：向酸性土壤中撒入适量熟石灰［Ca(OH)₂］，中和土壤中的酸性物质。',
          '治疗胃酸过多：服用含氢氧化镁［Mg(OH)₂］或氢氧化铝［Al(OH)₃］的抗酸药，中和胃里过多的盐酸。',
          '处理工业废水：用熟石灰中和硫酸厂排放的酸性废水，达标后再排放。',
          '减轻蚊虫叮咬：蚊虫分泌的蚁酸呈酸性，涂抹肥皂水等弱碱性物质可中和止痒。',
        ],
      },
      { type: 'formula', latex: '\\mathrm{Ca(OH)_2} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{CaSO_4} + 2\\mathrm{H_2O}', caption: '用熟石灰中和酸性土壤（或酸性废水）中的硫酸' },
      {
        type: 'paragraph',
        text: '使用中和反应时要注意"适量"：碱过量会使土壤或废水变为碱性，反而造成新的问题，因此实际应用中常常需要借助 pH 试纸或指示剂控制用量。',
      },
    ],
    en: [
      { type: 'heading', text: 'What is neutralisation?' },
      {
        type: 'paragraph',
        text: 'Neutralisation is the reaction between an acid and a base to produce a salt and water. For example, when dilute hydrochloric acid is mixed with sodium hydroxide solution, sodium chloride and water are formed, and heat is given out.',
      },
      { type: 'formula', latex: '\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}', caption: 'Neutralisation of hydrochloric acid by sodium hydroxide' },
      {
        type: 'paragraph',
        text: 'The essence of neutralisation is that hydrogen ions (H⁺) from the acid combine with hydroxide ions (OH⁻) from the alkali to form water molecules. Every neutralisation between a strong acid and a strong alkali can therefore be written as the same ionic equation.',
      },
      { type: 'formula', latex: '\\mathrm{H^+} + \\mathrm{OH^-} \\rightarrow \\mathrm{H_2O}', caption: 'Ionic equation for neutralisation' },
      {
        type: 'paragraph',
        text: 'Neutralisation often shows no visible change, so an indicator such as phenolphthalein can be used to tell when the reaction is exactly complete: as dilute hydrochloric acid is added drop by drop to sodium hydroxide solution containing phenolphthalein, the colour changes from pink to colourless at the exact point of neutralisation.',
      },
      { type: 'heading', text: 'Applications of neutralisation' },
      {
        type: 'list',
        items: [
          'Treating acidic soil: slaked lime (calcium hydroxide) is spread on acidic soil to neutralise the excess acid.',
          'Curing acid indigestion: antacid tablets containing magnesium hydroxide or aluminium hydroxide neutralise excess hydrochloric acid in the stomach.',
          'Treating industrial waste: acidic waste water from factories is neutralised with lime before it is released.',
          'Relieving insect stings: the methanoic acid injected by insects is acidic, so a weak alkali such as soap solution can be applied to neutralise it.',
        ],
      },
      { type: 'formula', latex: '\\mathrm{Ca(OH)_2} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{CaSO_4} + 2\\mathrm{H_2O}', caption: 'Slaked lime neutralising sulfuric acid in soil or waste water' },
      {
        type: 'paragraph',
        text: 'The amount added matters: too much alkali would make the soil or waste water alkaline instead, creating a new problem. In practice, pH paper or an indicator is used to control how much is added.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列反应中，属于中和反应的是哪一个？',
        en: 'Which of the following reactions is a neutralisation reaction?',
      },
      options: {
        zh: [
          '盐酸与氢氧化钾反应生成氯化钾和水',
          '二氧化碳与氢氧化钙反应生成碳酸钙和水',
          '锌与稀硫酸反应生成硫酸锌和氢气',
          '氧化铁与盐酸反应生成氯化铁和水',
        ],
        en: [
          'Hydrochloric acid reacts with potassium hydroxide to give potassium chloride and water',
          'Carbon dioxide reacts with calcium hydroxide to give calcium carbonate and water',
          'Zinc reacts with dilute sulfuric acid to give zinc sulfate and hydrogen',
          'Iron(III) oxide reacts with hydrochloric acid to give iron(III) chloride and water',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '中和反应特指"酸 + 碱 → 盐 + 水"。B 的反应物是非金属氧化物与碱，C 是金属与酸，D 是金属氧化物与酸，反应物都不是"酸 + 碱"的组合，所以不属于中和反应。',
        en: 'Neutralisation is specifically "acid + base → salt + water". In B the reactants are a non-metal oxide and a base, in C a metal and an acid, and in D a metal oxide and an acid — none of them is an acid-plus-base combination, so they are not neutralisation reactions.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '胃酸过多的病人可服用含氢氧化镁的药片。该药物起作用的原理是？',
        en: 'A patient with excess stomach acid can take tablets containing magnesium hydroxide. What is the principle behind this treatment?',
      },
      options: {
        zh: [
          '氢氧化镁与胃酸中的盐酸发生中和反应',
          '氢氧化镁吸附胃酸使其失效',
          '氢氧化镁分解产生氧气稀释胃酸',
          '氢氧化镁在胃壁上形成保护膜隔绝胃酸',
        ],
        en: [
          'Magnesium hydroxide neutralises the hydrochloric acid in the stomach',
          'Magnesium hydroxide adsorbs the stomach acid and deactivates it',
          'Magnesium hydroxide decomposes to release oxygen which dilutes the acid',
          'Magnesium hydroxide forms a protective film on the stomach wall',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '胃酸的主要成分是盐酸，氢氧化镁是难溶于水的碱，能与盐酸发生中和反应：Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O，从而降低胃酸浓度。它难溶于水，碱性温和，不会伤害胃壁，适合用作抗酸药。',
        en: 'Stomach acid is mainly hydrochloric acid. Magnesium hydroxide is an insoluble base that neutralises it: Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O, reducing the acid concentration. Because it is insoluble, it is a mild alkali that does not harm the stomach wall, making it suitable as an antacid.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '向滴有无色酚酞的氢氧化钠溶液中逐滴加入稀盐酸，当溶液恰好由红色变为无色时，下列说法正确的是？',
        en: 'Dilute hydrochloric acid is added drop by drop to sodium hydroxide solution containing phenolphthalein. When the solution just turns from pink to colourless, which statement is correct?',
      },
      options: {
        zh: [
          '氢氧化钠与盐酸恰好完全反应',
          '盐酸一定过量很多',
          '溶液呈碱性',
          '溶液中只含有氯化钠一种溶质',
        ],
        en: [
          'The sodium hydroxide and hydrochloric acid have reacted exactly completely',
          'The hydrochloric acid must be in large excess',
          'The solution is alkaline',
          'Sodium chloride is the only solute in the solution',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '酚酞在碱性和中性溶液中分别呈红色和无色。溶液恰好变为无色，说明 OH⁻ 恰好被 H⁺ 消耗完，即酸碱恰好完全中和（实际操作中一滴之差即引起颜色突变，可认为恰好完全反应）。酚酞本身也是溶质，所以 D 的说法不严谨。',
        en: 'Phenolphthalein is pink in alkaline solution and colourless in neutral or acidic solution. The moment the pink colour just disappears, the OH⁻ ions have been exactly used up by the H⁺ ions — the acid and alkali have neutralised each other completely (in practice one drop causes the colour change, so it is taken as the exact end-point). Phenolphthalein itself is also a solute, so D is not strictly correct.',
      },
    },
  ],
};
