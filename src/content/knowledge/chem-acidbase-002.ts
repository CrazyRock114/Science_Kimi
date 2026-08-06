import type { KnowledgePoint } from '../types';

export const chemAcidbase002: KnowledgePoint = {
  id: 'chem-acidbase-002',
  subject: 'chemistry',
  title: { zh: '常见的酸：盐酸和硫酸', en: 'Common Acids: Hydrochloric and Sulfuric Acid' },
  summary: {
    zh: '盐酸和硫酸是实验室和工业上最常见的两种酸。掌握它们的物理性质、酸的化学通性以及浓硫酸的安全稀释方法。',
    en: 'Hydrochloric acid and sulfuric acid are the two most common acids in the laboratory and industry. Learn their physical properties, the general chemical reactions of dilute acids, and how to dilute concentrated sulfuric acid safely.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9b/ch3'],
    igcse: ['0620/7.1'],
  },
  keywords: {
    zh: ['盐酸', '硫酸', '浓硫酸', '酸的通性', '金属活动性', '除铁锈', '稀释'],
    en: ['hydrochloric acid', 'sulfuric acid', 'concentrated acid', 'reactions of acids', 'rust removal', 'dilution'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '描述盐酸与浓硫酸的物理性质，说明稀释浓硫酸的正确操作及其原因。',
          '列举稀酸的化学通性，并写出代表性的化学方程式。',
          '描述氯离子与硫酸根离子的检验方法及现象。',
        ],
      },
      { type: 'heading', text: '盐酸与硫酸的物理性质' },
      {
        type: 'list',
        items: [
          '盐酸（HCl 气体的水溶液）：无色、有刺激性气味的液体，浓盐酸易挥发，打开瓶盖会在瓶口形成白雾（挥发出的氯化氢气体与空气中的水蒸气结合成盐酸小液滴）。',
          '浓硫酸（H₂SO₄）：无色、黏稠的油状液体，难挥发，有强吸水性，常用作某些气体的干燥剂。',
        ],
      },
      {
        type: 'paragraph',
        text: '稀释浓硫酸时，一定要把浓硫酸沿器壁慢慢注入水中，并用玻璃棒不断搅拌，使热量及时散失。切不可把水倒进浓硫酸里——水的密度小，浮在浓硫酸上面，溶解时放出的大量热会使水立刻沸腾，造成酸液飞溅。',
      },
      { type: 'heading', text: '酸的化学通性（以稀盐酸、稀硫酸为例）' },
      {
        type: 'paragraph',
        text: '酸溶液中都含有氢离子（H⁺），所以酸有相似的化学性质。',
      },
      {
        type: 'list',
        items: [
          '与指示剂作用：使紫色石蕊溶液变红，使无色酚酞不变色。',
          '与活泼金属反应生成盐和氢气（金属需排在氢之前），如 Zn + H₂SO₄ → ZnSO₄ + H₂↑，实验室常用此法制取氢气。',
          '与金属氧化物反应生成盐和水，如用稀盐酸或稀硫酸除去铁锈：Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O。',
          '与碱发生中和反应生成盐和水，如 H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O。',
          '与某些盐反应生成新酸和新盐，如 Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑。',
        ],
      },
      { type: 'formula', latex: '\\mathrm{Fe_2O_3} + 6\\mathrm{HCl} \\rightarrow 2\\mathrm{FeCl_3} + 3\\mathrm{H_2O}', caption: '盐酸除铁锈（铁锈主要成分是 Fe₂O₃）' },
      { type: 'heading', text: '两种酸的个性：特性反应' },
      {
        type: 'paragraph',
        text: '酸溶液中的酸根离子不同，使不同的酸又有各自的"个性"，可用来检验它们：盐酸（及可溶性氯化物）与硝酸银溶液反应生成不溶于稀硝酸的白色氯化银沉淀；硫酸（及可溶性硫酸盐）与氯化钡溶液反应生成不溶于稀硝酸的白色硫酸钡沉淀。',
      },
      { type: 'formula', latex: '\\mathrm{HCl} + \\mathrm{AgNO_3} \\rightarrow \\mathrm{AgCl}\\downarrow + \\mathrm{HNO_3}', caption: '检验氯离子：生成白色 AgCl 沉淀' },
      { type: 'formula', latex: '\\mathrm{H_2SO_4} + \\mathrm{BaCl_2} \\rightarrow \\mathrm{BaSO_4}\\downarrow + 2\\mathrm{HCl}', caption: '检验硫酸根离子：生成白色 BaSO₄ 沉淀' },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'volatile（挥发性）：液体容易变为气体的性质；浓盐酸挥发出的 HCl 气体在瓶口形成白雾。',
          'hygroscopic（吸水性）：能吸收空气中的水分的性质，浓硫酸因此可用作气体干燥剂。',
          'dilution（稀释）：把浓酸沿器壁慢慢加入水中并不断搅拌的操作，口诀"酸入水"，防止暴沸飞溅。',
          'precipitate（沉淀）：溶液反应中生成的难溶固体，如白色的 AgCl 和 BaSO₄。',
          'general properties of acids（酸的通性）：由 H⁺ 决定的相似化学性质，包括与指示剂、活泼金属、金属氧化物、碱和某些盐的反应。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Describe the physical properties of hydrochloric acid and concentrated sulfuric acid, and explain the safe way to dilute the concentrated acid.',
          'List the general chemical reactions of dilute acids and write representative equations.',
          'Describe the tests for chloride and sulfate ions, with their results.',
        ],
      },
      { type: 'heading', text: 'Physical properties of the two acids' },
      {
        type: 'list',
        items: [
          'Hydrochloric acid (a solution of HCl gas in water): a colourless liquid with a pungent smell. Concentrated hydrochloric acid is volatile and gives off misty fumes at the bottle mouth — hydrogen chloride gas combining with water vapour in the air.',
          'Concentrated sulfuric acid (H₂SO₄): a colourless, viscous, oily liquid that is not volatile. It is strongly hygroscopic and is often used to dry certain gases.',
        ],
      },
      {
        type: 'paragraph',
        text: 'To dilute concentrated sulfuric acid, always add the acid slowly to water, pouring it down the side of the container while stirring constantly so the heat released can spread out. Never add water to the concentrated acid — water is less dense and floats on top, and the large amount of heat released can make it boil violently and spit acid out of the container.',
      },
      { type: 'heading', text: 'General reactions of dilute acids' },
      {
        type: 'paragraph',
        text: 'All acid solutions contain hydrogen ions (H⁺), which is why dilute acids show similar chemical behaviour.',
      },
      {
        type: 'list',
        items: [
          'Effect on indicators: they turn blue litmus red; phenolphthalein stays colourless.',
          'With reactive metals (above hydrogen in the reactivity series) they form a salt and hydrogen, e.g. Zn + H₂SO₄ → ZnSO₄ + H₂↑ — the usual laboratory preparation of hydrogen.',
          'With metal oxides they form a salt and water, e.g. removing rust with dilute hydrochloric acid: Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O.',
          'With bases they are neutralised to form a salt and water, e.g. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.',
          'With certain salts they form a new acid and a new salt, e.g. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑.',
        ],
      },
      { type: 'formula', latex: '\\mathrm{Fe_2O_3} + 6\\mathrm{HCl} \\rightarrow 2\\mathrm{FeCl_3} + 3\\mathrm{H_2O}', caption: 'Removing rust (mainly Fe₂O₃) with hydrochloric acid' },
      { type: 'heading', text: 'Reactions that distinguish the two acids' },
      {
        type: 'paragraph',
        text: 'Because the acid anions differ, each acid also has its own characteristic reactions, which can be used as tests. Hydrochloric acid (and soluble chlorides) reacts with silver nitrate solution to give a white precipitate of silver chloride, insoluble in dilute nitric acid. Sulfuric acid (and soluble sulfates) reacts with barium chloride solution to give a white precipitate of barium sulfate, also insoluble in dilute nitric acid.',
      },
      { type: 'formula', latex: '\\mathrm{HCl} + \\mathrm{AgNO_3} \\rightarrow \\mathrm{AgCl}\\downarrow + \\mathrm{HNO_3}', caption: 'Test for chloride ions: white AgCl precipitate' },
      { type: 'formula', latex: '\\mathrm{H_2SO_4} + \\mathrm{BaCl_2} \\rightarrow \\mathrm{BaSO_4}\\downarrow + 2\\mathrm{HCl}', caption: 'Test for sulfate ions: white BaSO₄ precipitate' },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'volatile (挥发性): Readily turning into a gas; the HCl gas given off by concentrated hydrochloric acid forms a white mist at the bottle mouth.',
          'hygroscopic (吸水性): Able to absorb moisture from the air, which is why concentrated sulfuric acid is used as a drying agent for gases.',
          'dilution (稀释): Always adding the concentrated acid slowly to water with stirring — "acid into water" — to prevent violent boiling and spitting.',
          'precipitate (沉淀): An insoluble solid formed in a solution reaction, such as white AgCl and BaSO₄.',
          'general properties of acids (酸的通性): The similar chemical behaviour caused by H⁺ — reactions with indicators, reactive metals, metal oxides, bases and certain salts.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '打开浓盐酸的瓶盖，瓶口会出现白雾。白雾的主要成分是什么？',
        en: 'When the bottle of concentrated hydrochloric acid is opened, a white mist appears at the mouth. What is the mist mainly made of?',
      },
      options: {
        zh: [
          '氯化氢气体与空气中水蒸气结合形成的盐酸小液滴',
          '氯化氢气体本身',
          '水蒸气凝结成的小水滴',
          '盐酸分解产生的氯气',
        ],
        en: [
          'Tiny droplets of hydrochloric acid formed when HCl gas meets water vapour in the air',
          'Hydrogen chloride gas itself',
          'Small water droplets condensed from water vapour',
          'Chlorine gas from the decomposition of the acid',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '浓盐酸易挥发，挥发出的氯化氢气体（无色，肉眼看不见）与空气中的水蒸气结合，形成盐酸的小液滴悬浮在空气中，这就是看到的"白雾"。雾是小液滴，不是气体本身。',
        en: 'Concentrated hydrochloric acid is volatile. The hydrogen chloride gas given off is colourless and invisible; it combines with water vapour in the air to form tiny droplets of hydrochloric acid, which appear as the white mist. A mist consists of liquid droplets, not the gas itself.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '稀释浓硫酸时，正确的操作是？',
        en: 'What is the correct way to dilute concentrated sulfuric acid?',
      },
      options: {
        zh: [
          '将浓硫酸沿器壁慢慢注入水中，并不断搅拌',
          '将水快速倒入浓硫酸中',
          '将水沿器壁慢慢注入浓硫酸中，并不断搅拌',
          '将浓硫酸和水同时倒入另一个容器中',
        ],
        en: [
          'Add the acid slowly down the side of the container into water, stirring constantly',
          'Pour water quickly into the concentrated acid',
          'Add water slowly down the side of the container into the concentrated acid, stirring constantly',
          'Pour the acid and the water into a third container at the same time',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '浓硫酸溶于水放出大量的热，且浓硫酸密度比水大。把浓硫酸慢慢注入水中并搅拌，热量能及时散失；若把水加入浓硫酸，水浮在酸的表面，剧烈放热使水沸腾，导致酸液飞溅伤人。口诀：酸入水，沿器壁，慢慢倒，不断搅。',
        en: 'Concentrated sulfuric acid releases a great deal of heat when mixed with water, and it is denser than water. Adding the acid slowly to water with stirring lets the heat dissipate safely. If water is added to the acid instead, it floats on the surface and the intense heat can make it boil, spitting corrosive acid out of the container. Remember: always add acid to water.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '用稀盐酸除去铁制品表面的铁锈（主要成分 Fe₂O₃）时，不能将铁制品长时间浸泡在盐酸中，原因是？',
        en: 'When dilute hydrochloric acid is used to remove rust (mainly Fe₂O₃) from an iron object, the object should not be left in the acid for too long. Why?',
      },
      options: {
        zh: [
          '铁锈除尽后，铁会继续与盐酸反应而被腐蚀',
          '盐酸长时间放置会失效',
          '生成的氯化铁会重新变成铁锈',
          '铁会与氯化铁反应生成铁锈',
        ],
        en: [
          'Once the rust is gone, the iron itself keeps reacting with the acid and is corroded',
          'The acid loses its effectiveness if left for a long time',
          'The iron(III) chloride formed turns back into rust',
          'Iron reacts with iron(III) chloride to form rust',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '盐酸先与铁锈反应：Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O。铁锈除尽后，露出的铁是活泼金属（排在氢前），会继续与盐酸反应：Fe + 2HCl → FeCl₂ + H₂↑，使铁制品被腐蚀，所以酸洗时间不能过长。',
        en: 'The acid first reacts with the rust: Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O. Once the rust is removed, the exposed iron — a metal above hydrogen in the reactivity series — continues to react: Fe + 2HCl → FeCl₂ + H₂↑, corroding the object. That is why the acid treatment must not last too long.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ab2-ep1',
      syllabus: ['0620/7.1.1'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 3,
      stem: 'Describe what you would observe, and name the products, when dilute sulfuric acid is added to solid magnesium carbonate.',
      markScheme: [
        { text: 'Effervescence / bubbles of gas, and the solid gradually dissolves', marks: 1 },
        { text: 'The gas given off is carbon dioxide', marks: 1 },
        { text: 'The products are magnesium sulfate, water and carbon dioxide', marks: 1 },
      ],
      examinerNote: {
        zh: '酸 + 碳酸盐 → 盐 + 水 + 二氧化碳；盐的名称由所用的酸决定——硫酸生成硫酸盐。只写"有气泡"而不指出气体是 CO₂，第二分拿不到。',
        en: 'Acid + carbonate → salt + water + carbon dioxide, with the salt named after the acid — sulfuric gives a sulfate. Writing just "bubbles" without identifying the gas as CO₂ misses the second mark.',
      },
    },
    {
      id: 'ab2-ep2',
      syllabus: ['0620/12.5.1'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 2,
      stem: 'A solution is thought to contain sulfate ions. Describe a test you would carry out to confirm this, and state the result you would expect.',
      markScheme: [
        { text: 'Acidify with dilute nitric acid, then add aqueous barium nitrate (or barium chloride)', marks: 1 },
        { text: 'A white precipitate (of barium sulfate) forms', marks: 1 },
      ],
      examinerNote: {
        zh: '先加稀硝酸是为了排除碳酸根的干扰——碳酸钡也是白色沉淀。漏掉"酸化"这一步，白色沉淀就什么也证明不了。',
        en: 'The dilute nitric acid comes first to rule out carbonate ions — barium carbonate is a white precipitate too. Without the acidifying step, a white precipitate proves nothing.',
      },
    },
    {
      id: 'ab2-ep3',
      syllabus: ['0620/7.1.1'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 2,
      stem: 'Dilute hydrochloric acid can be used to remove rust, which is mainly iron(III) oxide, from an iron object. Explain why the object must not be left in the acid for too long.',
      markScheme: [
        { text: 'The acid first reacts with the rust: acid + metal oxide → salt + water (Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O)', marks: 1 },
        { text: 'Once the rust has gone, the exposed iron is above hydrogen in the reactivity series and reacts with the acid (Fe + 2HCl → FeCl₂ + H₂), corroding the object', marks: 1 },
      ],
      examinerNote: {
        zh: '得分关键是写出"两个"反应：除锈是金属氧化物与酸，腐蚀是金属与酸。只说"酸会腐蚀铁"没有指出铁排在氢前这一依据，解释不完整。',
        en: 'The key is naming both reactions: rust removal is metal oxide + acid, corrosion is metal + acid. Just saying "the acid corrodes iron" without invoking iron being above hydrogen is an incomplete explanation.',
      },
    },
  ],
  related: ['igcse-0620-7-1-acids-bases', 'igcse-0620-12-5-tests', 'chem-acidbase-001', 'chem-acidbase-003'],
};
