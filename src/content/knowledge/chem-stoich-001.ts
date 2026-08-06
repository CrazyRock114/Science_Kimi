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
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出质量守恒定律的内容，理解"参加反应"这一关键词的含义。',
          '从原子的种类、数目、质量不变，解释化学反应前后质量守恒的原因。',
          '用质量守恒定律解释反应中"质量增加或减少"的实验现象。',
          '根据质量守恒定律计算反应中未知物质的质量。',
        ],
      },
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
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'law of conservation of mass（质量守恒定律）：参加化学反应的各物质的质量总和，等于反应后生成的各物质的质量总和。',
          'reactant（反应物）：在反应中被消耗的物质，写在方程式等号左边。',
          'product（生成物）：在反应中生成的物质，写在方程式等号右边。',
          'closed system（密闭体系）：与外界没有物质交换的反应体系，验证质量守恒时气体无法逸出。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State the law of conservation of mass and explain what the words "take part in" mean.',
          'Explain why mass is conserved, in terms of the types, numbers and masses of atoms staying the same.',
          'Use the law to explain why a reaction can appear to gain or lose mass.',
          'Calculate unknown reacting masses using the law of conservation of mass.',
        ],
      },
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
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'law of conservation of mass（质量守恒定律）: the total mass of the reactants that take part in a reaction equals the total mass of the products formed.',
          'reactant（反应物）: a substance used up in a reaction, written on the left of the equation.',
          'product（生成物）: a substance formed in a reaction, written on the right of the equation.',
          'closed system（密闭体系）: a reaction system that exchanges no matter with its surroundings, so gases cannot escape.',
        ],
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
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '先考你一个问题：镁条在空气里烧完，剩下的白色粉末居然比原来的镁条还重——东西烧掉了，质量不减反增，这不是怪事吗？其实一点都不怪，这背后正是化学里最基本的一条铁律：质量守恒定律。',
          en: "Let me start with a puzzle. When you burn a strip of magnesium in air, the white powder left behind actually weighs more than the magnesium you started with. Stuff burns away, yet the mass goes up — sounds like magic, right? It's not magic at all. It's one of the most fundamental rules in chemistry: the law of conservation of mass.",
        },
      },
      {
        id: 'concept-law',
        kind: 'concept',
        text: {
          zh: '这条定律说：参加化学反应的各物质的质量总和，等于反应后生成的各物质的质量总和。注意"参加"这两个字特别关键——只有真正参与反应的那部分才算数，过量没反应的部分可不能混进来。',
          en: "Here's what the law says: the total mass of all the reactants that take part in a chemical reaction equals the total mass of all the products formed. Pay close attention to the words 'take part' — only the portion that actually reacts counts. Any leftover excess that didn't react must not be lumped in.",
        },
      },
      {
        id: 'concept-atoms',
        kind: 'concept',
        text: {
          zh: '为什么质量一定守恒呢？到原子层面看一眼就明白了。化学反应不过是原子重新排队：分子拆开，原子再组合成新分子。整个过程中，原子的种类没变，数目没多没少，每个原子的质量也没变。既然原子这笔账分毫不差，总质量自然不会变。会变的是分子的种类，分子的数目也可能变，但那不影响总账。',
          en: "So why must mass be conserved? Zoom in to the atomic level and it becomes obvious. A chemical reaction is just atoms rearranging: molecules split apart, and the atoms regroup into new molecules. Throughout the whole process, the types of atoms stay the same, no atoms appear or disappear, and each atom keeps its own mass. With the atomic books balancing perfectly, the total mass can't budge. What does change is the types of molecules — and possibly their number — but that doesn't affect the grand total.",
        },
      },
      {
        id: 'concept-pitfalls',
        kind: 'concept',
        text: {
          zh: '那开头的怪事怎么解释？很简单：镁燃烧时有氧气悄悄参加了反应，多出来的质量正是氧的。反过来，碳酸钠和盐酸在敞口杯子里反应，称起来变轻了，是因为生成的二氧化碳跑掉了。所以做验证实验要用密闭容器，比如红磷在密闭瓶里燃烧，天平就纹丝不动。把气体都算上，质量从来都守恒。',
          en: "So how do we explain the opening puzzle? Easy: when magnesium burns, oxygen from the air quietly joins the reaction, and the extra mass is exactly the oxygen's. Conversely, when sodium carbonate reacts with hydrochloric acid in an open beaker, the scale reads less because the carbon dioxide escapes. That's why verification experiments use closed containers — red phosphorus burning in a sealed flask keeps the balance perfectly still. Count every gas involved, and mass is always conserved.",
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '来，亲手算一笔账。12 克碳和 32 克氧气恰好完全反应生成二氧化碳，生成的二氧化碳是多少克？别急着看答案，先自己加一加。算好之后翻到下面的小测，把三道题都做了，尤其想想镁条燃烧那道题该怎么解释，再对照解析检查你的思路。',
          en: "Now let's do the bookkeeping yourself. Twelve grams of carbon react completely with exactly 32 grams of oxygen to form carbon dioxide — how many grams of carbon dioxide do you get? Don't peek at the answer; add it up yourself first. Then scroll down to the quiz and try all three questions. Think especially hard about how to explain the burning magnesium one, and check your reasoning against the explanations.",
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '总结一下：质量守恒定律说的是，参加反应的物质总质量等于生成物的总质量。它的微观根源是原子种类、数目和质量都不变。遇到看似"不守恒"的现象，多半是气体参与了或跑掉了，把气体算进账，定律永远成立。',
          en: "To sum up: the law of conservation of mass says the total mass of the reactants that take part equals the total mass of the products. Its microscopic root is that the types, numbers and masses of atoms never change. Whenever a reaction seems to break the law, a gas has usually joined in or slipped away — count the gases, and the law always holds.",
        },
      },
    ],
  },
  examPractice: [
    {
      id: 'chem-stoich-001-cp1',
      syllabus: ['0620/3.2.3'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 2,
      stem: '6.4 g of copper is heated strongly in a stream of oxygen until it is completely converted into copper(II) oxide. The mass of the solid product is 8.0 g. Calculate the mass of oxygen that reacted with the copper.',
      markScheme: [
        { text: 'Mass of oxygen = 8.0 − 6.4 (mass gained by the solid)', marks: 1 },
        { text: '= 1.6 g', marks: 1 },
      ],
      examinerNote: {
        zh: '固体增加的质量就是参加反应的氧气的质量——这是质量守恒定律的直接应用。不要把生成物的 8.0 g 当成氧气的质量。',
        en: 'The mass gained by the solid is exactly the mass of oxygen that reacted — a direct use of conservation of mass. Do not treat the 8.0 g of product as the mass of oxygen.',
      },
    },
    {
      id: 'chem-stoich-001-cp2',
      syllabus: ['0620/3.1.4'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 3,
      stem: 'A student burns a strip of magnesium in an open crucible. The white solid produced has a greater mass than the original magnesium strip. Explain, in terms of atoms and the law of conservation of mass, why the mass increases and why this does not break the law.',
      markScheme: [
        { text: 'Oxygen from the air also takes part in the reaction / combines with the magnesium', marks: 1 },
        { text: 'Mass of magnesium oxide = mass of magnesium + mass of oxygen that reacted', marks: 1 },
        { text: 'In a reaction atoms are only rearranged — no atoms are created or destroyed — so the total mass stays the same', marks: 1 },
      ],
      examinerNote: {
        zh: '只说"氧气参加了反应"只能拿第一分；必须把"增加的质量等于参加反应的氧气的质量"和"原子只是重新排列、不生不灭"两点都答全。',
        en: 'Saying only "oxygen joins in" earns just the first mark; full credit needs both the mass balance (the gain equals the oxygen that reacted) and the atomic explanation (atoms are rearranged, never created or destroyed).',
      },
    },
    {
      id: 'chem-stoich-001-cp3',
      syllabus: ['0620/3.2.3'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'When 10.0 g of calcium carbonate is heated until it fully decomposes, CaCO₃ → CaO + CO₂, 4.4 g of carbon dioxide gas escapes. Calculate the mass of calcium oxide left behind.',
      markScheme: [
        { text: 'By conservation of mass: mass of CaO = 10.0 − 4.4', marks: 1 },
        { text: '= 5.6 g', marks: 1 },
      ],
      examinerNote: {
        zh: '生成的二氧化碳逸出，所以剩余的固体变轻——这并不是"质量消失了"。把逸出的气体计入，总质量依然守恒。',
        en: 'The escaping carbon dioxide makes the remaining solid lighter — the mass has not vanished. Count the gas that left and the total mass is still conserved.',
      },
    },
  ],
  related: ['igcse-0620-3-1-formulae-equations', 'chem-stoich-002', 'chem-stoich-004'],
};
