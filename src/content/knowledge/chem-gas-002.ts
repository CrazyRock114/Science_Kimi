import type { KnowledgePoint } from '../types';

export const chemGas002: KnowledgePoint = {
  id: 'chem-gas-002',
  subject: 'chemistry',
  title: { zh: '二氧化碳的制取、性质与检验', en: 'Preparation, Properties and Test of Carbon Dioxide' },
  summary: {
    zh: '实验室用大理石（或石灰石）与稀盐酸反应制取二氧化碳。二氧化碳密度比空气大、不燃烧也不支持燃烧，能使澄清石灰水变浑浊，这一性质用于检验二氧化碳。',
    en: 'Carbon dioxide is prepared in the laboratory from marble (or limestone) and dilute hydrochloric acid. It is denser than air, neither burns nor supports combustion, and turns limewater milky — the standard test for carbon dioxide.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch6'],
    igcse: ['0620/12'],
  },
  keywords: {
    zh: ['二氧化碳', '大理石', '石灰石', '稀盐酸', '澄清石灰水', '向上排空气法', '干冰', '灭火'],
    en: ['carbon dioxide', 'marble', 'limestone', 'dilute hydrochloric acid', 'limewater', 'upward delivery', 'dry ice', 'fire extinguisher'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '二氧化碳的实验室制法' },
      {
        type: 'paragraph',
        text: '实验室常用大理石或石灰石（主要成分都是碳酸钙）与稀盐酸反应制取二氧化碳。反应在常温下就能进行，不需要加热，可用固液常温型发生装置。',
      },
      { type: 'formula', latex: '\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2\\uparrow', caption: '大理石与稀盐酸反应：固体表面产生大量气泡' },
      {
        type: 'list',
        items: [
          '不用稀硫酸：生成的硫酸钙微溶于水，覆盖在大理石表面，阻止反应继续进行。',
          '不用浓盐酸：浓盐酸有挥发性，会使制得的二氧化碳中混有氯化氢气体。',
          '不用碳酸钠粉末：反应速率太快，不利于气体的收集。',
          '收集方法：二氧化碳能溶于水且密度比空气大，只能用向上排空气法收集。',
          '验满方法：把燃着的木条放在集气瓶口，木条熄灭说明已集满。',
        ],
      },
      { type: 'heading', text: '二氧化碳的性质与检验' },
      {
        type: 'paragraph',
        text: '二氧化碳是无色、无味的气体，密度比空气大，能溶于水并与水反应生成碳酸（碳酸使紫色石蕊溶液变红）。二氧化碳不能燃烧，一般也不支持燃烧，因此可用来灭火；固态二氧化碳（干冰）升华时吸收大量的热，可用作制冷剂和人工降雨。',
      },
      { type: 'formula', latex: '\\mathrm{CO}_2 + \\mathrm{H}_2\\mathrm{O} \\rightleftharpoons \\mathrm{H}_2\\mathrm{CO}_3', caption: '二氧化碳与水反应生成碳酸' },
      { type: 'formula', latex: '\\mathrm{CO}_2 + \\mathrm{Ca}(\\mathrm{OH})_2 \\rightarrow \\mathrm{CaCO}_3\\downarrow + \\mathrm{H}_2\\mathrm{O}', caption: '二氧化碳使澄清石灰水变浑浊——检验二氧化碳的方法' },
      {
        type: 'paragraph',
        text: '检验二氧化碳要用澄清石灰水，而不能用燃着的木条：能使木条熄灭的气体不只是二氧化碳（如氮气），但使澄清石灰水变浑浊是二氧化碳的特征反应。',
      },
    ],
    en: [
      { type: 'heading', text: 'Laboratory preparation of carbon dioxide' },
      {
        type: 'paragraph',
        text: 'Carbon dioxide is usually prepared by reacting marble or limestone (both mainly calcium carbonate) with dilute hydrochloric acid. The reaction proceeds at room temperature without heating, so a simple solid–liquid gas generator is used.',
      },
      { type: 'formula', latex: '\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2\\uparrow', caption: 'Marble with dilute hydrochloric acid: vigorous effervescence on the solid surface' },
      {
        type: 'list',
        items: [
          'Dilute sulfuric acid is not used: the calcium sulfate formed is only sparingly soluble and coats the marble, stopping the reaction.',
          'Concentrated hydrochloric acid is not used: it is volatile and would contaminate the carbon dioxide with hydrogen chloride gas.',
          'Sodium carbonate powder is not used: the reaction would be too fast to collect the gas conveniently.',
          'Collection: carbon dioxide dissolves in water and is denser than air, so it is collected by upward delivery only.',
          'Testing for completeness: a burning splint held at the mouth of the jar goes out when the jar is full.',
        ],
      },
      { type: 'heading', text: 'Properties and test of carbon dioxide' },
      {
        type: 'paragraph',
        text: 'Carbon dioxide is a colourless, odourless gas, denser than air. It dissolves in water and reacts to form carbonic acid, which turns purple litmus red. It neither burns nor, in general, supports combustion, so it is used in fire extinguishers. Solid carbon dioxide (dry ice) absorbs large amounts of heat when it sublimes, making it useful as a refrigerant and for cloud seeding.',
      },
      { type: 'formula', latex: '\\mathrm{CO}_2 + \\mathrm{H}_2\\mathrm{O} \\rightleftharpoons \\mathrm{H}_2\\mathrm{CO}_3', caption: 'Carbon dioxide reacts with water to form carbonic acid' },
      { type: 'formula', latex: '\\mathrm{CO}_2 + \\mathrm{Ca}(\\mathrm{OH})_2 \\rightarrow \\mathrm{CaCO}_3\\downarrow + \\mathrm{H}_2\\mathrm{O}', caption: 'Carbon dioxide turns limewater milky — the test for carbon dioxide' },
      {
        type: 'paragraph',
        text: 'Limewater, not a burning splint, must be used to test for carbon dioxide: other gases such as nitrogen also extinguish a flame, but turning limewater milky is the characteristic reaction of carbon dioxide.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '实验室制取二氧化碳时，不用稀硫酸代替稀盐酸的原因是？',
        en: 'Why is dilute sulfuric acid NOT used instead of dilute hydrochloric acid to prepare carbon dioxide in the laboratory?',
      },
      options: {
        zh: [
          '稀硫酸不与碳酸钙反应',
          '生成的硫酸钙微溶于水，覆盖在固体表面阻止反应继续',
          '稀硫酸会把生成的二氧化碳溶解掉',
          '反应过于剧烈，难以控制',
        ],
        en: [
          'Dilute sulfuric acid does not react with calcium carbonate',
          'The calcium sulfate formed is sparingly soluble and coats the solid, stopping the reaction',
          'Dilute sulfuric acid dissolves the carbon dioxide produced',
          'The reaction is too violent to control',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '碳酸钙与稀硫酸一开始能反应，但生成的 CaSO₄ 微溶于水，会附着在大理石表面形成一层覆盖层，把大理石与酸隔开，反应逐渐停止，所以不适合用来持续制取二氧化碳。',
        en: 'Calcium carbonate does start to react with dilute sulfuric acid, but the CaSO₄ produced is only sparingly soluble. It deposits on the marble surface, sealing it off from the acid, so the reaction soon stops and cannot supply a steady stream of carbon dioxide.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '检验某瓶气体是否为二氧化碳，应选用的方法是？',
        en: 'To test whether a gas jar contains carbon dioxide, which method should be used?',
      },
      options: {
        zh: [
          '伸入燃着的木条，看是否熄灭',
          '伸入带火星的木条，看是否复燃',
          '倒入少量澄清石灰水振荡，看是否变浑浊',
          '闻气体的气味',
        ],
        en: [
          'Insert a burning splint and see if it goes out',
          'Insert a glowing splint and see if it relights',
          'Add a little limewater, shake, and see if it turns milky',
          'Smell the gas',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '能使燃着木条熄灭的气体有多种（如氮气），不能证明一定是二氧化碳；带火星木条用于检验氧气；二氧化碳无色无味，闻气味无法判断且不安全。使澄清石灰水变浑浊是二氧化碳的特征反应：CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O。',
        en: 'Several gases (e.g. nitrogen) extinguish a burning splint, so that test is not specific; a glowing splint tests for oxygen; carbon dioxide is colourless and odourless, so smelling tells nothing and is unsafe. Turning limewater milky is the characteristic reaction: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '把二氧化碳通入紫色石蕊溶液中，溶液变红；加热后又变回紫色。下列解释正确的是？',
        en: 'Carbon dioxide is bubbled into purple litmus solution, which turns red; on heating it turns purple again. Which explanation is correct?',
      },
      options: {
        zh: [
          '二氧化碳本身显酸性，使石蕊变红',
          '二氧化碳与水反应生成碳酸，碳酸使石蕊变红；碳酸受热分解，酸性消失',
          '二氧化碳受热分解，红色褪去',
          '石蕊遇任何气体都会变红',
        ],
        en: [
          'Carbon dioxide itself is acidic and turns litmus red',
          'Carbon dioxide reacts with water to form carbonic acid, which turns litmus red; the acid decomposes on heating, so the acidity disappears',
          'Carbon dioxide decomposes on heating, so the red colour fades',
          'Litmus turns red with any gas',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: 'CO₂ 本身不是酸，不能使干燥的石蕊变色。它与水反应生成碳酸（CO₂ + H₂O ⇌ H₂CO₃），碳酸显酸性使石蕊变红；碳酸不稳定，受热分解成 CO₂ 和水，酸性消失，溶液恢复紫色。这说明使石蕊变红的是碳酸而非二氧化碳。',
        en: 'CO₂ is not itself an acid — dry litmus is unaffected by it. It reacts with water to form carbonic acid (CO₂ + H₂O ⇌ H₂CO₃), which is acidic and turns litmus red. Carbonic acid is unstable and decomposes on heating into CO₂ and water, so the acidity disappears and the purple colour returns. This shows the acid, not CO₂ itself, changes the litmus.',
      },
    },
  ],
  related: ['igcse-0620-12-5-tests', 'chem-gas-001', 'chem-acidbase-003', 'chem-acidbase-004'],
};
