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
    ],
    en: [
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
};
