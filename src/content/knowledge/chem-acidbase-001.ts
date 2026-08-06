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
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出中和反应的定义（酸 + 碱 → 盐 + 水），并写出其离子方程式。',
          '用指示剂（如酚酞）判断中和反应恰好完成的时刻。',
          '列举并解释中和反应在改良酸性土壤、治疗胃酸过多和处理工业废水中的应用。',
        ],
      },
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
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'neutralisation（中和反应）：酸与碱作用生成盐和水的反应，本质是 H⁺ 与 OH⁻ 结合生成水。',
          'salt（盐）：由金属离子（或铵根离子）与酸根离子构成的化合物，是中和反应的产物之一。',
          'ionic equation（离子方程式）：只写出实际参与反应的离子的方程式，旁观离子相互消去。',
          'indicator（指示剂）：随溶液酸碱性变化而改变颜色的物质，如酚酞，用于判断中和终点。',
          'antacid（抗酸药）：含难溶性碱（如 Mg(OH)₂）的药物，用于中和胃里过多的盐酸。',
          'slaked lime（熟石灰）：氢氧化钙 Ca(OH)₂，用于改良酸性土壤和处理酸性废水。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State the definition of neutralisation (acid + base → salt + water) and write its ionic equation.',
          'Use an indicator such as phenolphthalein to identify the exact end-point of a neutralisation.',
          'Describe and explain applications of neutralisation: treating acidic soil, curing acid indigestion and neutralising industrial waste water.',
        ],
      },
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
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'neutralisation (中和反应): The reaction between an acid and a base to form a salt and water — in essence H⁺ combining with OH⁻ to form water.',
          'salt (盐): A compound of metal ions (or ammonium ions) and acid anions; one of the products of neutralisation.',
          'ionic equation (离子方程式): An equation showing only the ions that actually react, with spectator ions cancelled out.',
          'indicator (指示剂): A substance that changes colour with the acidity of a solution, e.g. phenolphthalein, used to find the end-point of a neutralisation.',
          'antacid (抗酸药): A medicine containing an insoluble base such as Mg(OH)₂, used to neutralise excess stomach acid.',
          'slaked lime (熟石灰): Calcium hydroxide, Ca(OH)₂, used to treat acidic soil and acidic waste water.',
        ],
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
  examPractice: [
    {
      id: 'ab1-ep1',
      syllabus: ['0620/7.1.8'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'Which ionic equation shows the neutralisation of dilute hydrochloric acid by sodium hydroxide solution?',
      options: [
        'H⁺(aq) + OH⁻(aq) → H₂O(l)',
        'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)',
        'Na⁺(aq) + Cl⁻(aq) → NaCl(aq)',
        'H⁺(aq) + H₂O(l) → H₃O⁺(aq)',
      ],
      answerIndex: 0,
      markScheme: [
        { text: 'H⁺(aq) + OH⁻(aq) → H₂O(l)', marks: 1 },
      ],
      examinerNote: {
        zh: 'Na⁺ 与 Cl⁻ 是旁观离子，相互消去后所有强酸强碱中和共用同一个离子方程式。选 B 写的是完整方程式而非离子方程式，不得分。',
        en: 'Na⁺ and Cl⁻ are spectator ions; once they cancel, every strong-acid–strong-alkali neutralisation shares one ionic equation. Option B is the full equation, not the ionic one, so it scores nothing.',
      },
    },
    {
      id: 'ab1-ep2',
      syllabus: ['0620/7.1.8'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 3,
      stem: 'Antacid tablets used to treat acid indigestion contain magnesium hydroxide, Mg(OH)₂. Write the balanced chemical equation for its reaction with the hydrochloric acid in the stomach, and explain why an insoluble base such as Mg(OH)₂ is chosen rather than a soluble alkali such as NaOH.',
      markScheme: [
        { text: 'Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O, correctly balanced', marks: 1 },
        { text: 'The base neutralises the excess stomach acid / H⁺ + OH⁻ → H₂O, lowering the acid concentration', marks: 1 },
        { text: 'Mg(OH)₂ is insoluble, so the mixture is only weakly alkaline and cannot damage the stomach, whereas excess soluble NaOH would be dangerously corrosive', marks: 1 },
      ],
      examinerNote: {
        zh: '方程式配平本身就值一分：Mg(OH)₂ 需要两个 HCl。解释"为什么用难溶碱"时要落到"过量也温和"这一点上，只写"因为它能中和酸"拿不到第三分。',
        en: 'Balancing earns a mark in its own right: Mg(OH)₂ needs two HCl. For the explanation, the mark is for "safe even in excess" — writing only "it neutralises the acid" does not earn the third mark.',
      },
    },
    {
      id: 'ab1-ep3',
      syllabus: ['0620/7.1.8'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 3,
      stem: 'Sodium hydroxide solution containing a few drops of phenolphthalein is placed in a flask, and dilute hydrochloric acid is added slowly until the indicator just changes colour. Describe the colour change and explain what it shows about the reaction in the flask.',
      markScheme: [
        { text: 'The solution changes from pink to colourless', marks: 1 },
        { text: 'At this point all the hydroxide ions have just reacted — the solution is no longer alkaline', marks: 1 },
        { text: 'The acid and alkali have neutralised each other exactly (end-point): H⁺ + OH⁻ → H₂O', marks: 1 },
      ],
      examinerNote: {
        zh: '要区分两种表述："恰好完全反应"给分，"酸过量"不给分——酚酞在酸性和中性溶液中都是无色，所以颜色刚褪去代表终点而非过量。',
        en: 'Distinguish the two claims: "exactly reacted" earns the mark, "acid in excess" does not — phenolphthalein is colourless in both acidic and neutral solution, so the colour just disappearing marks the end-point, not an excess.',
      },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '胃胀反酸的时候，吃一片抗酸药很快就舒服了；农民往酸性土壤里撒熟石灰，庄稼就长得更好。这些生活里的妙招，背后其实都是同一个化学反应——中和反应。这一讲我们就把它彻底搞明白。',
          en: "An antacid tablet can settle an uncomfortable stomach in minutes, and farmers spread slaked lime on acidic soil to help their crops grow. Behind both of these everyday tricks lies the very same chemical reaction — neutralisation. In this session, we'll get to the bottom of it.",
        },
      },
      {
        id: 'concept-what',
        kind: 'concept',
        text: {
          zh: '所谓中和反应，就是酸和碱作用，生成盐和水的反应。最经典的例子是盐酸遇上氢氧化钠，生成氯化钠——也就是食盐——和水，还会放出热量。抓住"酸加碱，变盐加水"这句话，你就记住了中和反应的定义。',
          en: "A neutralisation reaction is what happens when an acid reacts with a base to produce a salt and water. The classic example is hydrochloric acid meeting sodium hydroxide, giving sodium chloride — that's common table salt — plus water, with heat released along the way. Hold on to the phrase 'acid plus base makes salt plus water', and you've got the definition.",
        },
      },
      {
        id: 'concept-essence',
        kind: 'concept',
        text: {
          zh: '再往深看一层：中和反应的本质，其实是酸里的氢离子和碱里的氢氧根离子结合，变成了水分子。所以不管什么强酸强碱，离子方程式都是同一个：氢离子加氢氧根离子生成水。不过这个反应常常悄无声息，得请酚酞这样的指示剂帮忙，红色刚好褪去的那一刻，就是酸碱恰好完全中和的时刻。',
          en: "Let's look one level deeper. The real heart of neutralisation is that hydrogen ions from the acid join up with hydroxide ions from the base to form water molecules. That's why every strong-acid-strong-alkali reaction shares the same ionic equation: H⁺ plus OH⁻ gives water. The reaction itself is often invisible, though, so we call in an indicator like phenolphthalein — the instant the pink colour just fades away marks the exact point of complete neutralisation.",
        },
      },
      {
        id: 'concept-applications',
        kind: 'concept',
        text: {
          zh: '中和反应的用武之地可多了：撒熟石灰改良酸性土壤，吃含氢氧化镁的药片对付胃酸过多，用石灰处理工厂的酸性废水，连蚊虫叮咬后涂点肥皂水止痒，用的也是它。但要记住，用量必须"适量"——碱加过头，土壤和废水就变成碱性了，反而添了新麻烦。',
          en: "Neutralisation has plenty of uses: spreading slaked lime to treat acidic soil, taking magnesium hydroxide tablets for excess stomach acid, liming acidic factory waste water — even dabbing soapy water on an insect sting works the same way. But remember, the dose matters: add too much alkali and the soil or waste water turns alkaline instead, which just creates a new problem.",
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '好，现在动动手也动动脑。先拿张纸，试着自己写出氢氧化镁和盐酸反应的化学方程式，记得配平。写完后翻到下面的小测，特别是酚酞变色的那道题，想一想"恰好变无色"到底意味着什么，然后选出你的答案，看看解析和你想的是不是一样。',
          en: "Alright, time to put this into practice. Grab a piece of paper and try writing the equation for magnesium hydroxide reacting with hydrochloric acid — don't forget to balance it. Then head down to the quiz, especially the question about phenolphthalein changing colour. Think carefully about what 'just turning colourless' really tells you, pick your answers, and check whether the explanations match your reasoning.",
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '总结一下今天的内容：中和反应就是酸加碱生成盐和水，本质是氢离子和氢氧根离子结合成水。它在改良土壤、治疗胃酸、处理废水等方面大显身手，但用量一定要控制得当。理解了它，你就掌握了酸碱世界里最实用的一招。',
          en: "Let's recap. Neutralisation is acid plus base giving salt and water, and at its core it's hydrogen ions pairing with hydroxide ions to make water. It earns its keep in treating soil, calming stomachs and cleaning up waste water — as long as the amount is carefully controlled. Understand this, and you've mastered one of the most practical moves in the world of acids and bases.",
        },
      },
    ],
  },
  related: ['igcse-0620-7-1-acids-bases', 'chem-ph-001', 'chem-acidbase-003', 'chem-acidbase-004'],
};
