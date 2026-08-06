import type { KnowledgePoint } from '../types';

export const chemAcidbase003: KnowledgePoint = {
  id: 'chem-acidbase-003',
  subject: 'chemistry',
  title: { zh: '常见的碱：氢氧化钠和氢氧化钙', en: 'Common Bases: Sodium Hydroxide and Calcium Hydroxide' },
  summary: {
    zh: '氢氧化钠和氢氧化钙是最常见的两种碱。了解它们的俗称、物理性质、碱的化学通性，以及在生活和生产中的重要用途。',
    en: 'Sodium hydroxide and calcium hydroxide are the two most common bases. Learn their common names, physical properties, the general chemical reactions of alkalis, and their important uses in daily life and industry.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9b/ch3'],
    igcse: ['0620/7.1'],
  },
  keywords: {
    zh: ['氢氧化钠', '氢氧化钙', '烧碱', '熟石灰', '碱的通性', '石灰水', '潮解', '二氧化碳检验'],
    en: ['sodium hydroxide', 'calcium hydroxide', 'slaked lime', 'limewater', 'reactions of alkalis', 'test for carbon dioxide'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出氢氧化钠与氢氧化钙的俗称、物理性质及保存与使用注意事项。',
          '列举碱的化学通性，并写出代表性的化学方程式。',
          '说明检验二氧化碳用澄清石灰水、而吸收较多二氧化碳用氢氧化钠溶液的原因。',
        ],
      },
      { type: 'heading', text: '氢氧化钠（NaOH）' },
      {
        type: 'list',
        items: [
          '俗称火碱、烧碱、苛性钠，是白色固体，有强烈的腐蚀性。',
          '易溶于水，溶解时放出大量的热。',
          '暴露在空气中容易吸收水分而逐渐溶解，这种现象叫做潮解，因此固体氢氧化钠可用作某些气体（如 H₂、O₂、NH₃）的干燥剂，但不能干燥 CO₂、SO₂ 等酸性气体。',
          '必须密封保存：它还能吸收空气中的 CO₂ 而变质，生成碳酸钠。',
        ],
      },
      {
        type: 'paragraph',
        text: '如果不慎将氢氧化钠沾到皮肤上，要立即用大量的水冲洗，再涂上硼酸溶液。',
      },
      { type: 'heading', text: '氢氧化钙［Ca(OH)₂］' },
      {
        type: 'paragraph',
        text: '氢氧化钙俗称熟石灰或消石灰，是白色粉末状固体，微溶于水，其水溶液俗称石灰水。它由生石灰（CaO）与水反应制得，该反应放出大量的热。',
      },
      { type: 'formula', latex: '\\mathrm{CaO} + \\mathrm{H_2O} \\rightarrow \\mathrm{Ca(OH)_2}', caption: '生石灰与水反应制取熟石灰（放热）' },
      {
        type: 'list',
        items: [
          '建筑业：用石灰浆（氢氧化钙与沙、水混合）砌砖、抹墙。',
          '农业：改良酸性土壤，配制农药波尔多液（与硫酸铜溶液混合）。',
          '工业：处理酸性废水，制取漂白粉等。',
        ],
      },
      { type: 'heading', text: '碱的化学通性' },
      {
        type: 'paragraph',
        text: '碱溶液中都含有氢氧根离子（OH⁻），所以碱有相似的化学性质。',
      },
      {
        type: 'list',
        items: [
          '与指示剂作用：使紫色石蕊溶液变蓝，使无色酚酞溶液变红。',
          '与非金属氧化物反应生成盐和水，如石灰水吸收二氧化碳：Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O，此反应常用于检验 CO₂。',
          '与酸发生中和反应生成盐和水，如 Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O。',
          '与某些盐溶液反应生成新碱和新盐，如 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄（生成蓝色絮状沉淀）。',
        ],
      },
      { type: 'formula', latex: '\\mathrm{Ca(OH)_2} + \\mathrm{CO_2} \\rightarrow \\mathrm{CaCO_3}\\downarrow + \\mathrm{H_2O}', caption: '二氧化碳使澄清石灰水变浑浊——检验 CO₂' },
      { type: 'formula', latex: '2\\mathrm{NaOH} + \\mathrm{CO_2} \\rightarrow \\mathrm{Na_2CO_3} + \\mathrm{H_2O}', caption: '氢氧化钠在空气中变质的原因' },
      {
        type: 'paragraph',
        text: '注意比较：氢氧化钠与二氧化碳反应没有明显现象，而氢氧化钙与二氧化碳反应生成白色沉淀，所以检验 CO₂ 用澄清石灰水，吸收（除去）较多 CO₂ 则用溶解度大的氢氧化钠溶液。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'alkali（可溶性碱）：能溶于水的碱，其水溶液中含有氢氧根离子 OH⁻，如 NaOH、Ca(OH)₂ 溶液。',
          'deliquescence（潮解）：固体吸收空气中的水分而逐渐溶解的现象，如固体氢氧化钠暴露在空气中。',
          'limewater（石灰水）：氢氧化钙的水溶液，遇二氧化碳变浑浊，是检验 CO₂ 的试剂。',
          'caustic（腐蚀性）：能腐蚀皮肤和有机物的性质；NaOH 俗称烧碱、火碱、苛性钠，使用时须防沾到皮肤。',
          'slaked lime（熟石灰）：氢氧化钙 Ca(OH)₂ 的俗称，由生石灰与水反应制得，反应放热。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State the common names and physical properties of sodium hydroxide and calcium hydroxide, and the precautions for storing and handling them.',
          'List the general chemical reactions of alkalis and write representative equations.',
          'Explain why limewater is used to test for carbon dioxide while sodium hydroxide solution is used to absorb larger amounts of it.',
        ],
      },
      { type: 'heading', text: 'Sodium hydroxide (NaOH)' },
      {
        type: 'list',
        items: [
          'Commonly known as caustic soda, it is a white solid that is highly corrosive.',
          'It dissolves readily in water, releasing a large amount of heat.',
          'Left in the air, the solid absorbs moisture and gradually dissolves in it (it is deliquescent), so solid sodium hydroxide can dry gases such as H₂, O₂ and NH₃ — but not acidic gases like CO₂ or SO₂.',
          'It must be kept in a sealed container, because it also absorbs CO₂ from the air and slowly turns into sodium carbonate.',
        ],
      },
      {
        type: 'paragraph',
        text: 'If sodium hydroxide gets onto the skin, rinse immediately with plenty of water and then apply boric acid solution.',
      },
      { type: 'heading', text: 'Calcium hydroxide, Ca(OH)₂' },
      {
        type: 'paragraph',
        text: 'Calcium hydroxide is commonly called slaked lime. It is a white powder, only slightly soluble in water; its solution is known as limewater. It is made by adding water to quicklime (CaO), a reaction that releases a large amount of heat.',
      },
      { type: 'formula', latex: '\\mathrm{CaO} + \\mathrm{H_2O} \\rightarrow \\mathrm{Ca(OH)_2}', caption: 'Slaking quicklime to make slaked lime (exothermic)' },
      {
        type: 'list',
        items: [
          'Construction: mortar made from slaked lime, sand and water is used for bricklaying and plastering.',
          'Agriculture: it is spread on acidic soil and mixed with copper(II) sulfate solution to make the fungicide Bordeaux mixture.',
          'Industry: it neutralises acidic waste water and is used to make bleaching powder.',
        ],
      },
      { type: 'heading', text: 'General reactions of alkalis' },
      {
        type: 'paragraph',
        text: 'All alkali solutions contain hydroxide ions (OH⁻), which is why soluble bases show similar chemical behaviour.',
      },
      {
        type: 'list',
        items: [
          'Effect on indicators: they turn red litmus blue and phenolphthalein pink.',
          'With non-metal oxides they form a salt and water, e.g. limewater absorbs carbon dioxide: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O — the standard test for CO₂.',
          'With acids they are neutralised to form a salt and water, e.g. Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O.',
          'With certain salt solutions they form a new base and a new salt, e.g. 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄ (a pale blue precipitate).',
        ],
      },
      { type: 'formula', latex: '\\mathrm{Ca(OH)_2} + \\mathrm{CO_2} \\rightarrow \\mathrm{CaCO_3}\\downarrow + \\mathrm{H_2O}', caption: 'Limewater turns milky with CO₂ — the test for carbon dioxide' },
      { type: 'formula', latex: '2\\mathrm{NaOH} + \\mathrm{CO_2} \\rightarrow \\mathrm{Na_2CO_3} + \\mathrm{H_2O}', caption: 'Why sodium hydroxide deteriorates in air' },
      {
        type: 'paragraph',
        text: 'Compare the two: sodium hydroxide reacts with carbon dioxide with no visible change, while calcium hydroxide gives a white precipitate. So limewater is used to test for CO₂, whereas the much more soluble sodium hydroxide solution is used when a larger amount of CO₂ needs to be absorbed.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'alkali (可溶性碱): A base that dissolves in water, giving a solution containing hydroxide ions OH⁻, such as NaOH or Ca(OH)₂ solution.',
          'deliquescence (潮解): The process by which a solid absorbs moisture from the air and gradually dissolves in it, as solid sodium hydroxide does.',
          'limewater (石灰水): An aqueous solution of calcium hydroxide; it turns milky with carbon dioxide and is the reagent for the CO₂ test.',
          'caustic (腐蚀性): Able to corrode skin and organic matter; NaOH is called caustic soda and must never touch the skin.',
          'slaked lime (熟石灰): The common name for calcium hydroxide, Ca(OH)₂, made by adding water to quicklime in an exothermic reaction.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '固体氢氧化钠必须密封保存，主要原因是什么？',
        en: 'Why must solid sodium hydroxide be kept in a sealed container?',
      },
      options: {
        zh: [
          '易吸收空气中的水分潮解，并与二氧化碳反应变质',
          '易挥发而损失',
          '见光易分解',
          '易与空气中的氧气反应',
        ],
        en: [
          'It absorbs moisture and deliquesces, and also reacts with carbon dioxide in the air',
          'It is volatile and would be lost',
          'It decomposes in light',
          'It reacts with oxygen in the air',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '氢氧化钠固体在空气中会吸收水分而潮解，同时吸收 CO₂ 发生反应 2NaOH + CO₂ → Na₂CO₃ + H₂O 而变质。氢氧化钠不挥发、不见光分解、也不与氧气反应，所以密封保存是为了隔绝水分和二氧化碳。',
        en: 'Solid sodium hydroxide absorbs moisture from the air (deliquescence) and also reacts with carbon dioxide: 2NaOH + CO₂ → Na₂CO₃ + H₂O, so it deteriorates. It is not volatile, does not decompose in light, and does not react with oxygen — sealing keeps out water vapour and carbon dioxide.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '检验一瓶无色气体是二氧化碳，最合适的试剂和现象是？',
        en: 'To test whether a colourless gas is carbon dioxide, the most suitable reagent and observation are?',
      },
      options: {
        zh: [
          '通入澄清石灰水，石灰水变浑浊',
          '通入氢氧化钠溶液，溶液温度升高',
          '用燃着的木条伸入，木条熄灭',
          '通入紫色石蕊溶液，溶液变红',
        ],
        en: [
          'Bubble it into limewater, which turns milky',
          'Bubble it into sodium hydroxide solution, which warms up',
          'Insert a burning splint, which is extinguished',
          'Bubble it into purple litmus solution, which turns red',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: 'CO₂ 与 Ca(OH)₂ 反应生成白色 CaCO₃ 沉淀，使澄清石灰水变浑浊，现象明显且有特征性，是检验 CO₂ 的标准方法。燃着的木条熄灭不能证明是 CO₂（氮气等也能使其熄灭）；CO₂ 与 NaOH 反应无明显现象；使石蕊变红的酸性气体也不止 CO₂ 一种。',
        en: 'CO₂ reacts with Ca(OH)₂ to form a white CaCO₃ precipitate, turning limewater milky — a clear, characteristic change and the standard test for CO₂. A burning splint going out does not prove the gas is CO₂ (nitrogen does the same); the reaction with NaOH shows no visible change; and other acidic gases also turn litmus red.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列关于氢氧化钠和氢氧化钙的说法中，正确的是？',
        en: 'Which statement about sodium hydroxide and calcium hydroxide is correct?',
      },
      options: {
        zh: [
          '氢氧化钠易溶于水，氢氧化钙微溶于水',
          '氢氧化钙可用来干燥二氧化碳气体',
          '氢氧化钠溶液与硫酸铜溶液混合无明显现象',
          '氢氧化钙俗称烧碱',
        ],
        en: [
          'Sodium hydroxide is very soluble in water, while calcium hydroxide is only slightly soluble',
          'Calcium hydroxide can be used to dry carbon dioxide gas',
          'Mixing sodium hydroxide solution with copper(II) sulfate solution shows no visible change',
          'Calcium hydroxide is commonly known as caustic soda',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '氢氧化钠易溶于水且溶解放热，氢氧化钙微溶于水（石灰水浓度通常很小），A 正确。氢氧化钙会与 CO₂ 反应，不能干燥 CO₂；NaOH 与 CuSO₄ 反应生成蓝色 Cu(OH)₂ 沉淀，现象明显；烧碱是氢氧化钠的俗称，氢氧化钙俗称熟石灰。',
        en: 'Sodium hydroxide is very soluble (dissolving exothermically), while calcium hydroxide is only slightly soluble, so limewater is always dilute — A is correct. Calcium hydroxide reacts with CO₂ and cannot dry it; NaOH and CuSO₄ give a clearly visible pale blue Cu(OH)₂ precipitate; and "caustic soda" is sodium hydroxide — calcium hydroxide is slaked lime.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ab3-ep1',
      syllabus: ['0620/12.5.3'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 2,
      stem: 'Describe the test for carbon dioxide and the result you would observe. Explain why holding a burning splint in the gas is not a reliable test.',
      markScheme: [
        { text: 'Bubble the gas through limewater; it turns milky (a white precipitate of CaCO₃ forms)', marks: 1 },
        { text: 'Other gases such as nitrogen also extinguish a burning splint, so a flame going out does not prove the gas is CO₂', marks: 1 },
      ],
      examinerNote: {
        zh: '检验题要写"试剂 + 现象"两件套：只写"石灰水"或只写"变浑浊"都拿不到第一分。"木条熄灭"类现象不具特征性，是常见失分点。',
        en: 'A test answer needs both reagent and result: "limewater" alone or "goes milky" alone does not earn the first mark. A splint going out is not a characteristic result and is a common way to lose the second.',
      },
    },
    {
      id: 'ab3-ep2',
      syllabus: ['0620/7.1.4'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 3,
      stem: 'Aqueous sodium hydroxide is added to copper(II) sulfate solution. Describe what is observed and write the balanced chemical equation for the reaction.',
      markScheme: [
        { text: 'A (pale) blue precipitate forms', marks: 1 },
        { text: 'The precipitate is copper(II) hydroxide, Cu(OH)₂', marks: 1 },
        { text: '2NaOH + CuSO₄ → Cu(OH)₂ + Na₂SO₄, correctly balanced', marks: 1 },
      ],
      examinerNote: {
        zh: '"蓝色溶液"不算现象描述——必须写出生成了蓝色沉淀。方程式中 Cu(OH)₂ 前的系数 2 常被漏掉。',
        en: '"The solution is blue" is not an observation of the reaction — you must state that a blue precipitate forms. The coefficient 2 in front of NaOH is the most commonly missed part of the equation.',
      },
    },
    {
      id: 'ab3-ep3',
      syllabus: ['0620/7.1.3'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 2,
      stem: 'Limewater is used to test for carbon dioxide, but sodium hydroxide solution is preferred when a large amount of carbon dioxide must be absorbed. Explain this difference.',
      markScheme: [
        { text: 'Calcium hydroxide gives a visible white precipitate with CO₂, so a positive result is easy to see (the NaOH reaction has no visible change)', marks: 1 },
        { text: 'Sodium hydroxide is much more soluble than calcium hydroxide, so a given volume of its solution can absorb far more CO₂', marks: 1 },
      ],
      examinerNote: {
        zh: '两条理由分别落在"现象"和"溶解度"上，缺一不可。把两者混写成"NaOH 反应更明显"是典型的方向性错误。',
        en: 'The two reasons rest on visibility and solubility respectively, and both are needed. Claiming NaOH "reacts more obviously" is the classic wrong-way-round error.',
      },
    },
  ],
  related: ['igcse-0620-7-1-acids-bases', 'igcse-0620-12-5-tests', 'chem-acidbase-001', 'chem-acidbase-002'],
};
