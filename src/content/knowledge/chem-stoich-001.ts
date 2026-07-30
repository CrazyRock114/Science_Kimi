import type { KnowledgePoint } from '../types';

export const chemStoich001: KnowledgePoint = {
  id: 'chem-stoich-001',
  subject: 'chemistry',
  title: { zh: '质量守恒定律', en: 'The Law of Conservation of Mass' },
  summary: {
    zh: '参加化学反应的各物质的质量总和等于反应后生成的各物质的质量总和。从原子角度理解这一规律，并学会用它分析"看似不守恒"的现象。',
    en: 'The total mass of the reactants that take part in a chemical reaction equals the total mass of the products formed. Understand this law at the atomic level and use it to explain reactions that seem to "lose" or "gain" mass.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9a/ch5'],
    igcse: ['0620/3'],
  },
  keywords: {
    zh: ['质量守恒定律', '化学反应', '原子', '密闭容器', '反应物', '生成物'],
    en: ['conservation of mass', 'chemical reaction', 'atoms', 'closed system', 'reactants', 'products'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是质量守恒定律？' },
      {
        type: 'paragraph',
        text: '参加化学反应的各物质的质量总和，等于反应后生成的各物质的质量总和，这个规律叫做质量守恒定律。关键词是"参加"：只有实际参与反应的那部分反应物才计入，过量的、未反应的部分不算在内。',
      },
      {
        type: 'formula',
        latex: '\\sum m_{\\text{参加反应的反应物}} = \\sum m_{\\text{生成物}}',
        caption: '质量守恒定律的数学表达',
      },
      { type: 'heading', text: '为什么化学反应前后质量守恒？' },
      {
        type: 'paragraph',
        text: '化学反应的实质是原子的重新组合：分子分成原子，原子再重新结合成新的分子。在这一过程中，原子的种类没有改变，原子的数目没有增减，每个原子的质量也没有变化，所以反应前后各物质的质量总和必然相等。',
      },
      {
        type: 'list',
        items: [
          '微观上"三个不变"：原子的种类不变、原子的数目不变、原子的质量不变。',
          '由此推出宏观上：元素的种类不变，每种元素的质量也不变。',
          '会改变的：分子的种类一定改变（否则不是化学变化），分子的数目可能改变。',
        ],
      },
      { type: 'heading', text: '实验验证与常见误区' },
      {
        type: 'paragraph',
        text: '在密闭容器中做红磷燃烧实验，或把铁钉放入硫酸铜溶液中（Fe + CuSO₄ ═ FeSO₄ + Cu），反应前后天平保持平衡，直接验证了质量守恒。有些反应看似"不守恒"：镁条燃烧后固体质量增加，是因为有氧气参加反应；碳酸钠与盐酸在敞口容器中反应后质量减小，是因为生成的二氧化碳气体逸散到空气中。把参加或生成的气体都计入，质量依然守恒。',
      },
    ],
    en: [
      { type: 'heading', text: 'What is the law of conservation of mass?' },
      {
        type: 'paragraph',
        text: 'The total mass of the reactants that take part in a chemical reaction is equal to the total mass of the products formed. This is the law of conservation of mass. Note the key phrase "take part": only the reactants that actually react are counted — any excess that remains unreacted is not included.',
      },
      {
        type: 'formula',
        latex: '\\sum m_{\\text{reactants used}} = \\sum m_{\\text{products}}',
        caption: 'The law of conservation of mass in symbols',
      },
      { type: 'heading', text: 'Why is mass conserved?' },
      {
        type: 'paragraph',
        text: 'A chemical reaction is a rearrangement of atoms: molecules break apart into atoms, which then join together in new combinations to form new molecules. The types of atoms do not change, no atoms are created or destroyed, and the mass of each atom stays the same — so the total mass must stay the same.',
      },
      {
        type: 'list',
        items: [
          'At the atomic level, three things never change: the types of atoms, the number of atoms, and the mass of the atoms.',
          'It follows that the elements present and the mass of each element also stay the same.',
          'What can change: the types of molecules must change (otherwise no chemical reaction has occurred), and the number of molecules may change.',
        ],
      },
      { type: 'heading', text: 'Experimental evidence and common pitfalls' },
      {
        type: 'paragraph',
        text: 'Burning red phosphorus in a closed container, or placing an iron nail in copper(II) sulfate solution (Fe + CuSO₄ ═ FeSO₄ + Cu), keeps the balance unchanged — direct evidence for the law. Some reactions only appear to break it: magnesium gains mass when it burns because oxygen from the air joins in; sodium carbonate and hydrochloric acid seem to lose mass in an open container because the carbon dioxide escapes. Count all the gases involved, and mass is still conserved.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '镁条在空气中燃烧后，生成的氧化镁质量比镁条大。这一现象是否违背质量守恒定律？',
        en: 'When magnesium burns in air, the magnesium oxide formed has a greater mass than the magnesium. Does this violate the law of conservation of mass?',
      },
      options: {
        zh: [
          '违背，因为生成物质量不能大于反应物质量',
          '不违背，空气中的氧气参加了反应，参加反应的镁和氧气的质量总和等于生成的氧化镁的质量',
          '不违背，因为氧化镁吸收了空气中的水分而增重',
          '无法判断',
        ],
        en: [
          'Yes — the products can never have more mass than the reactants',
          'No — oxygen from the air also reacts, and the total mass of magnesium plus the oxygen that reacted equals the mass of magnesium oxide formed',
          'No — the magnesium oxide absorbed water vapour from the air',
          'It cannot be determined',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '质量守恒定律要求计入"参加反应的各物质"。镁燃烧是镁与氧气化合：参加反应的镁的质量 + 参加反应的氧气的质量 = 生成的氧化镁的质量，所以氧化镁比镁条重并不矛盾。',
        en: 'The law counts all substances that take part. Burning magnesium is a combination with oxygen: mass of magnesium reacted + mass of oxygen reacted = mass of magnesium oxide formed, so the solid gaining mass is exactly what the law predicts.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '从微观角度看，化学反应前后一定不变的是（ ）',
        en: 'At the atomic level, which of the following definitely stays the same before and after a chemical reaction?',
      },
      options: {
        zh: ['分子的种类', '原子的种类和数目', '分子的数目', '物质的种类'],
        en: ['The types of molecules', 'The types and numbers of atoms', 'The number of molecules', 'The types of substances'],
      },
      answerIndex: 1,
      explanation: {
        zh: '化学反应的实质是原子的重新组合，原子的种类和数目不变，这正是质量守恒的根本原因。分子的种类一定改变，分子的数目可能改变（如 2H₂ + O₂ ═ 2H₂O 中 3 个分子变成 2 个分子）。',
        en: 'A reaction is a rearrangement of atoms: the types and numbers of atoms never change — this is the root cause of conservation of mass. The types of molecules must change, and the number of molecules may change (e.g. in 2H₂ + O₂ ═ 2H₂O, three molecules become two).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '12 g 碳与 32 g 氧气恰好完全反应生成二氧化碳，生成二氧化碳的质量是（ ）',
        en: '12 g of carbon reacts completely with exactly 32 g of oxygen to form carbon dioxide. What mass of carbon dioxide is produced?',
      },
      options: {
        zh: ['20 g', '40 g', '44 g', '48 g'],
        en: ['20 g', '40 g', '44 g', '48 g'],
      },
      answerIndex: 2,
      explanation: {
        zh: '碳和氧气都恰好完全反应，没有剩余，根据质量守恒定律，生成二氧化碳的质量 = 12 g + 32 g = 44 g。',
        en: 'Both reactants are used up completely, so by conservation of mass the carbon dioxide formed has mass 12 g + 32 g = 44 g.',
      },
    },
  ],
};
