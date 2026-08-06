import type { KnowledgePoint } from '../types';

export const chemAcidbase004: KnowledgePoint = {
  id: 'chem-acidbase-004',
  subject: 'chemistry',
  title: { zh: '盐的制备与复分解反应的条件', en: 'Preparation of Salts and Conditions for Double Displacement' },
  summary: {
    zh: '盐可以通过酸碱中和、金属与酸等多种途径制备。酸、碱、盐之间的反应大多属于复分解反应，只有当生成物中有沉淀、气体或水时反应才能发生。',
    en: 'Salts can be prepared by neutralisation, by reacting acids with metals, metal oxides or carbonates, and by precipitation. Reactions between acids, bases and salts are mostly double displacement reactions, which only take place when a precipitate, a gas or water is formed.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9b/ch4'],
    igcse: ['0620/7.3'],
  },
  keywords: {
    zh: ['盐', '复分解反应', '沉淀', '溶解性', '盐的制备', '碳酸盐', '离子检验'],
    en: ['salt', 'double displacement', 'precipitate', 'solubility', 'preparation of salts', 'carbonate', 'ionic tests'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出盐的定义，列举制备可溶性盐与不溶性盐的常见途径。',
          '说明复分解反应的定义，并用"生成沉淀、气体或水"判断反应能否发生。',
          '运用溶解性规律分析酸、碱、盐之间的反应，并描述碳酸根离子的检验方法。',
        ],
      },
      { type: 'heading', text: '什么是盐？' },
      {
        type: 'paragraph',
        text: '由金属离子（或铵根离子 NH₄⁺）和酸根离子构成的化合物叫做盐，如氯化钠（NaCl）、碳酸钠（Na₂CO₃）、硫酸铜（CuSO₄）、碳酸钙（CaCO₃）等。生活中食盐只是盐的一种，化学上的"盐"是一大类物质。',
      },
      { type: 'heading', text: '制备盐的常见途径' },
      {
        type: 'list',
        items: [
          '酸 + 碱（中和反应）：HCl + NaOH → NaCl + H₂O，适合制备可溶性盐，可用滴定法控制恰好完全反应。',
          '酸 + 金属氧化物：CuO + H₂SO₄ → CuSO₄ + H₂O，常将过量的黑色氧化铜粉末加入稀硫酸中，充分反应后过滤除去剩余的氧化铜。',
          '酸 + 活泼金属：Zn + H₂SO₄ → ZnSO₄ + H₂↑。',
          '酸 + 碳酸盐：CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑，实验室制取二氧化碳的原理。',
          '盐溶液 + 盐溶液（沉淀法）：Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl，适合制备不溶性盐，过滤、洗涤、干燥即得纯净的沉淀。',
        ],
      },
      { type: 'heading', text: '复分解反应及其发生的条件' },
      {
        type: 'paragraph',
        text: '由两种化合物互相交换成分，生成另外两种化合物的反应，叫做复分解反应，可表示为 AB + CD → AD + CB。反应前后各元素的化合价不变。酸、碱、盐之间的反应大多属于复分解反应。',
      },
      {
        type: 'paragraph',
        text: '复分解反应并不是任意两种化合物混合就能发生：只有当生成物中有沉淀析出、有气体放出或有水生成时，反应才能发生。判断时要参考酸、碱、盐的溶解性表。',
      },
      { type: 'formula', latex: '\\mathrm{Na_2CO_3} + 2\\mathrm{HCl} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{H_2O} + \\mathrm{CO_2}\\uparrow', caption: '有气体生成，反应能发生' },
      { type: 'formula', latex: '\\mathrm{CuSO_4} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{Cu(OH)_2}\\downarrow + \\mathrm{Na_2SO_4}', caption: '有沉淀生成，反应能发生' },
      { type: 'formula', latex: '\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}', caption: '有水生成，反应能发生' },
      {
        type: 'list',
        items: [
          '常见的不溶性盐：碳酸钙（CaCO₃）、碳酸钡（BaCO₃）、硫酸钡（BaSO₄，不溶于稀硝酸）、氯化银（AgCl，不溶于稀硝酸）。',
          '常见的不溶性碱：氢氧化铜［Cu(OH)₂，蓝色］、氢氧化铁［Fe(OH)₃，红褐色］、氢氧化镁［Mg(OH)₂，白色］。',
          '钾盐、钠盐、铵盐和硝酸盐都可溶于水。',
          '盐与碱、盐与盐反应时，反应物一般都要可溶于水；而碳酸盐等不溶性盐仍可与酸反应。',
        ],
      },
      { type: 'heading', text: '碳酸盐的检验' },
      {
        type: 'paragraph',
        text: '向样品中加入稀盐酸，若有气泡产生，将生成的气体通入澄清石灰水，石灰水变浑浊，则证明样品中含有碳酸根离子（CO₃²⁻）。这是利用"碳酸盐 + 酸 → 盐 + 水 + 二氧化碳"的复分解反应。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'salt（盐）：由金属离子（或铵根离子 NH₄⁺）与酸根离子构成的化合物，是一大类物质而非仅指食盐。',
          'double displacement（复分解反应）：两种化合物互相交换成分生成另外两种化合物的反应，AB + CD → AD + CB，反应前后化合价不变。',
          'precipitation（沉淀法）：利用生成难溶盐的反应制备不溶性盐的方法，沉淀经过滤、洗涤、干燥得到纯净物。',
          'solubility rules（溶解性规律）：判断盐与碱是否可溶的经验规律，如钾钠铵盐与硝酸盐全溶、AgCl 与 BaSO₄ 不溶于稀硝酸。',
          'carbonate test（碳酸盐检验）：加稀盐酸产生气泡，气体使澄清石灰水变浑浊，证明含 CO₃²⁻。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State what a salt is and list the common routes for preparing soluble and insoluble salts.',
          'Define double displacement and use "a precipitate, a gas or water is formed" to decide whether a reaction takes place.',
          'Apply the solubility rules to reactions between acids, bases and salts, and describe the test for carbonate ions.',
        ],
      },
      { type: 'heading', text: 'What is a salt?' },
      {
        type: 'paragraph',
        text: 'A salt is a compound made up of metal ions (or ammonium ions, NH₄⁺) and acid anions, such as sodium chloride (NaCl), sodium carbonate (Na₂CO₃), copper(II) sulfate (CuSO₄) and calcium carbonate (CaCO₃). Table salt is only one example — in chemistry "salt" refers to a whole class of compounds.',
      },
      { type: 'heading', text: 'Common ways of preparing salts' },
      {
        type: 'list',
        items: [
          'Acid + alkali (neutralisation): HCl + NaOH → NaCl + H₂O. Suitable for soluble salts; titration is used to add exactly the right amount of acid.',
          'Acid + metal oxide: CuO + H₂SO₄ → CuSO₄ + H₂O. Excess black copper(II) oxide is added to warm dilute sulfuric acid, and the unreacted oxide is removed by filtration.',
          'Acid + reactive metal: Zn + H₂SO₄ → ZnSO₄ + H₂↑.',
          'Acid + carbonate: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ — the laboratory preparation of carbon dioxide.',
          'Salt solution + salt solution (precipitation): Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl. Used for insoluble salts, which are filtered off, washed and dried.',
        ],
      },
      { type: 'heading', text: 'Double displacement and when it happens' },
      {
        type: 'paragraph',
        text: 'A reaction in which two compounds exchange their components to form two new compounds is called a double displacement reaction: AB + CD → AD + CB. The oxidation states of the elements do not change. Most reactions between acids, bases and salts are of this type.',
      },
      {
        type: 'paragraph',
        text: 'Double displacement does not happen between just any pair of compounds: it only takes place if a precipitate, a gas or water is formed. A solubility table is needed to make this judgement.',
      },
      { type: 'formula', latex: '\\mathrm{Na_2CO_3} + 2\\mathrm{HCl} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{H_2O} + \\mathrm{CO_2}\\uparrow', caption: 'A gas is formed, so the reaction takes place' },
      { type: 'formula', latex: '\\mathrm{CuSO_4} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{Cu(OH)_2}\\downarrow + \\mathrm{Na_2SO_4}', caption: 'A precipitate is formed, so the reaction takes place' },
      { type: 'formula', latex: '\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}', caption: 'Water is formed, so the reaction takes place' },
      {
        type: 'list',
        items: [
          'Common insoluble salts: calcium carbonate (CaCO₃), barium carbonate (BaCO₃), barium sulfate (BaSO₄, insoluble in dilute nitric acid), silver chloride (AgCl, insoluble in dilute nitric acid).',
          'Common insoluble bases: copper(II) hydroxide (Cu(OH)₂, pale blue), iron(III) hydroxide (Fe(OH)₃, red-brown), magnesium hydroxide (Mg(OH)₂, white).',
          'All potassium, sodium, ammonium and nitrate salts are soluble in water.',
          'For salt–base and salt–salt reactions both reactants generally need to be soluble, but an insoluble salt such as a carbonate still reacts with an acid.',
        ],
      },
      { type: 'heading', text: 'Test for carbonates' },
      {
        type: 'paragraph',
        text: 'Add dilute hydrochloric acid to the sample. If bubbles of gas are produced, pass the gas into limewater; if the limewater turns milky, the sample contains carbonate ions (CO₃²⁻). This uses the double displacement reaction "carbonate + acid → salt + water + carbon dioxide".',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'salt (盐): A compound of metal ions (or ammonium ions, NH₄⁺) and acid anions — a whole class of substances, not just table salt.',
          'double displacement (复分解反应): A reaction in which two compounds exchange components to form two new compounds, AB + CD → AD + CB, with no change in oxidation states.',
          'precipitation (沉淀法): Preparing an insoluble salt by forming it as a precipitate, then filtering, washing and drying to obtain the pure solid.',
          'solubility rules (溶解性规律): Empirical rules for whether salts and bases dissolve — all potassium, sodium, ammonium and nitrate salts are soluble; AgCl and BaSO₄ are insoluble in dilute nitric acid.',
          'carbonate test (碳酸盐检验): Add dilute hydrochloric acid; bubbles that turn limewater milky prove the presence of CO₃²⁻.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列各组物质在溶液中混合，能发生复分解反应的是？',
        en: 'Which pair of substances undergoes a double displacement reaction when mixed in solution?',
      },
      options: {
        zh: [
          '碳酸钠溶液与氯化钙溶液',
          '氯化钠溶液与硝酸钾溶液',
          '硫酸钠溶液与氯化钾溶液',
          '硝酸钠溶液与氯化钾溶液',
        ],
        en: [
          'Sodium carbonate solution and calcium chloride solution',
          'Sodium chloride solution and potassium nitrate solution',
          'Sodium sulfate solution and potassium chloride solution',
          'Sodium nitrate solution and potassium chloride solution',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '复分解反应发生的条件是生成沉淀、气体或水。Na₂CO₃ + CaCl₂ → CaCO₃↓ + 2NaCl，生成碳酸钙白色沉淀，反应能发生。其余三组交换成分后得到的盐（钾盐、钠盐、硝酸盐、氯化物）全部可溶，没有沉淀、气体或水生成，反应不能发生。',
        en: 'Double displacement requires a precipitate, a gas or water to form. Na₂CO₃ + CaCl₂ → CaCO₃↓ + 2NaCl gives a white calcium carbonate precipitate, so the reaction takes place. In the other three pairs, exchanging ions only produces soluble salts (all potassium, sodium and nitrate salts are soluble), so nothing drives the reaction and no reaction occurs.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '要制备纯净的硫酸钡（BaSO₄，不溶于水），最适合的方法是？',
        en: 'What is the most suitable method for preparing pure barium sulfate (BaSO₄), which is insoluble in water?',
      },
      options: {
        zh: [
          '将硫酸钠溶液与氯化钡溶液混合，过滤、洗涤、干燥',
          '将钡放入稀硫酸中反应',
          '将碳酸钡与稀硫酸混合后蒸发结晶',
          '将氢氧化钡溶液与稀硫酸用滴定法混合后蒸发结晶',
        ],
        en: [
          'Mix sodium sulfate solution with barium chloride solution, then filter, wash and dry',
          'React barium metal with dilute sulfuric acid',
          'Mix barium carbonate with dilute sulfuric acid and evaporate to crystallise',
          'Titrate barium hydroxide solution with dilute sulfuric acid, then evaporate to crystallise',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: 'BaSO₄ 是不溶性盐，适合用沉淀法：Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl，生成的沉淀经过滤、洗涤除去可溶性杂质（NaCl 等）、干燥后即可得到纯净的 BaSO₄。钡是极活泼金属，遇水剧烈反应，不能用金属与酸的方法；BaSO₄ 不溶于水，无法通过蒸发结晶获得。',
        en: 'BaSO₄ is insoluble, so precipitation is the right route: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl. The precipitate is filtered, washed to remove soluble impurities such as NaCl, and dried to give pure BaSO₄. Barium is far too reactive with water to use the metal-plus-acid method, and an insoluble salt cannot be obtained by evaporation and crystallisation.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '某白色固体样品中加入稀盐酸后产生气泡，生成的气体使澄清石灰水变浑浊。该样品可能含有？',
        en: 'When dilute hydrochloric acid is added to a white solid sample, bubbles form and the gas produced turns limewater milky. What might the sample contain?',
      },
      options: {
        zh: [
          '碳酸根离子（CO₃²⁻）',
          '硫酸根离子（SO₄²⁻）',
          '氯离子（Cl⁻）',
          '氢氧根离子（OH⁻）',
        ],
        en: [
          'Carbonate ions (CO₃²⁻)',
          'Sulfate ions (SO₄²⁻)',
          'Chloride ions (Cl⁻)',
          'Hydroxide ions (OH⁻)',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '使澄清石灰水变浑浊的气体是 CO₂，而能与稀盐酸反应放出 CO₂ 的是碳酸盐：CO₃²⁻ + 2H⁺ → H₂O + CO₂↑。硫酸盐、氯化物、氢氧化物与盐酸反应都不会产生气体，这是检验碳酸根离子的标准方法。',
        en: 'The gas that turns limewater milky is CO₂, and carbonates are the compounds that release CO₂ with dilute hydrochloric acid: CO₃²⁻ + 2H⁺ → H₂O + CO₂↑. Sulfates, chlorides and hydroxides do not produce a gas with hydrochloric acid. This is the standard test for carbonate ions.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ab4-ep1',
      syllabus: ['0620/7.3.2'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'Which of these salts is insoluble in water?',
      options: [
        'Calcium carbonate',
        'Sodium sulfate',
        'Potassium chloride',
        'Copper(II) nitrate',
      ],
      answerIndex: 0,
      markScheme: [
        { text: 'Calcium carbonate', marks: 1 },
      ],
      examinerNote: {
        zh: '钾盐、钠盐与硝酸盐永远可溶，可直接排除三个选项；碳酸盐中只有钾、钠、铵盐可溶。',
        en: 'Potassium, sodium and nitrate salts are always soluble, which eliminates three options at once; among carbonates only the potassium, sodium and ammonium salts dissolve.',
      },
    },
    {
      id: 'ab4-ep2',
      syllabus: ['0620/7.3.1'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 4,
      stem: 'Describe how you would prepare pure, dry crystals of copper(II) sulfate, starting from copper(II) oxide and dilute sulfuric acid.',
      markScheme: [
        { text: 'Add copper(II) oxide to warm dilute sulfuric acid until it is in excess / no more dissolves', marks: 1 },
        { text: 'Filter off the unreacted copper(II) oxide', marks: 1 },
        { text: 'Heat the filtrate to evaporate water until the solution is saturated (point of crystallisation)', marks: 1 },
        { text: 'Leave to cool so crystals form, then dry them (between filter papers)', marks: 1 },
      ],
      examinerNote: {
        zh: '"蒸干"是高频失分答案：把水完全煮干会失去结晶水，得到粉末而不是晶体。氧化物必须过量，才能保证硫酸全部反应完。',
        en: '"Evaporate to dryness" is the classic mark-loser: boiling off all the water drives off the water of crystallisation and leaves a powder, not crystals. The oxide must be in excess so that all the acid reacts.',
      },
    },
    {
      id: 'ab4-ep3',
      syllabus: ['0620/7.3.4'],
      tier: 'supplement',
      commandWord: 'Describe',
      marks: 3,
      stem: 'Barium sulfate is insoluble in water. Describe how a pure, dry sample of barium sulfate could be prepared from aqueous sodium sulfate and aqueous barium chloride.',
      markScheme: [
        { text: 'Mix the two solutions; barium sulfate precipitates: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl', marks: 1 },
        { text: 'Filter to collect the precipitate', marks: 1 },
        { text: 'Wash the precipitate with distilled water and dry it', marks: 1 },
      ],
      examinerNote: {
        zh: '"洗涤"是最常被漏掉的得分点——不洗的话，可溶的 NaCl 会留在沉淀表面，样品就不纯了。题目里出现 pure、dry 两个词，过滤之后必须还有两步。',
        en: 'Washing is the most commonly omitted mark — without it, soluble NaCl dries onto the precipitate and the sample is not pure. When the question says pure and dry, filtration must be followed by two more steps.',
      },
    },
  ],
  related: ['igcse-0620-7-3-salts', 'igcse-0620-12-5-tests', 'chem-acidbase-001', 'chem-acidbase-003'],
};
