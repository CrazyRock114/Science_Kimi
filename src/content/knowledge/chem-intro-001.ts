import type { KnowledgePoint } from '../types';

export const chemIntro001: KnowledgePoint = {
  id: 'chem-intro-001',
  subject: 'chemistry',
  title: { zh: '走进化学世界', en: 'Entering the World of Chemistry' },
  summary: {
    zh: '认识化学研究的对象，抓住"是否生成新物质"区分物理变化与化学变化、物理性质与化学性质，并掌握药品取用、加热、称量等实验基本操作。',
    en: 'Learn what chemistry studies, tell physical from chemical changes and physical from chemical properties by whether a new substance forms, and master basic lab skills: handling chemicals, heating and weighing.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9a/ch1'],
    igcse: ['0620/6.1', '0620/12.1'],
  },
  keywords: {
    zh: ['物理变化', '化学变化', '物理性质', '化学性质', '实验基本操作', '酒精灯', '托盘天平'],
    en: ['physical change', 'chemical change', 'physical property', 'chemical property', 'laboratory techniques', 'Bunsen burner', 'balance'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出化学研究的内容，体会化学与生活、生产的联系。',
          '根据"是否有新物质生成"区分物理变化和化学变化。',
          '区分物理性质和化学性质，并能从描述中判断属于哪一类。',
          '掌握药品取用、加热、托盘天平与量筒使用等实验基本操作及安全规范。',
        ],
      },
      { type: 'heading', text: '化学研究什么' },
      {
        type: 'paragraph',
        text: '化学是在分子、原子层次上研究物质的组成、结构、性质以及变化规律的自然科学。从粮食增产、新药合成到新材料与环境保护，化学就在我们身边。学习化学首先要学会观察实验：变化前、变化中、变化后分别有什么现象。',
      },
      { type: 'heading', text: '物理变化与化学变化' },
      {
        type: 'paragraph',
        text: '没有生成其他物质的变化叫做物理变化，如水结冰、汽油挥发、玻璃破碎——只是状态或形状改变，物质本身没变。生成其他物质的变化叫做化学变化（又叫化学反应），如木材燃烧、铁生锈、食物腐败。二者的本质区别只有一个：有没有新物质生成。',
      },
      {
        type: 'list',
        items: [
          '化学变化常伴随发光、放热、变色、放出气体、生成沉淀等现象，可帮助判断，但有这些现象不一定是化学变化（灯泡发光放热是物理变化）。',
          '化学变化中一定同时发生物理变化：蜡烛燃烧时，蜡先熔化（物理变化），再燃烧生成二氧化碳和水（化学变化）。',
          '爆炸不一定是化学变化：气球爆炸、锅炉爆炸是物理变化，火药爆炸是化学变化。',
        ],
      },
      { type: 'heading', text: '物理性质与化学性质' },
      {
        type: 'paragraph',
        text: '物质不需要发生化学变化就表现出来的性质叫做物理性质，如颜色、状态、气味、硬度、熔点、沸点、密度、溶解性、导电性。物质在化学变化中表现出来的性质叫做化学性质，如可燃性、助燃性、稳定性、毒性、酸碱性。描述"性质"时常有"能、会、可以、易"等字眼（"酒精能燃烧"），描述"变化"则是一个正在进行或已经完成的过程（"酒精燃烧"）。性质决定用途，用途反映性质。',
      },
      { type: 'heading', text: '实验基本操作与常用仪器' },
      {
        type: 'paragraph',
        text: '规范操作是实验安全和成功的保障。取用药品遵守"三不"原则：不能用手接触药品、不要把鼻孔凑到容器口闻气味、不得尝任何药品的味道；用剩的药品不能放回原瓶，要放入指定容器。',
      },
      {
        type: 'list',
        items: [
          '固体药品：块状用镊子夹取，试管"一横、二放、三慢竖"；粉末用药匙或纸槽，试管"一斜、二送、三直立"。',
          '液体药品：倾倒时瓶塞倒放、标签向着手心、瓶口紧挨试管口；用胶头滴管滴加时滴管竖直悬空，不伸入试管。',
          '加热：用酒精灯外焰加热；试管内液体不超过容积的 1/3，试管口不要对着自己或他人；熄灭时用灯帽盖灭，不能用嘴吹。',
          '称量与量取：托盘天平左物右码，精确到 0.1 g；量筒读数时视线与凹液面最低处保持水平，仰视读数偏小、俯视读数偏大。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'physical change（物理变化）：没有生成新物质的变化，如熔化、蒸发、形状改变。',
          'chemical change（化学变化）：生成新物质的变化，如燃烧、生锈、腐败。',
          'physical property（物理性质）：不发生化学变化就能表现出的性质，如熔点、密度、导电性。',
          'chemical property（化学性质）：在化学变化中表现出的性质，如可燃性、稳定性。',
          'meniscus（凹液面）：量筒内液体的弧形液面，读数时以其最低处为准。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State what chemistry studies and appreciate its links to daily life and industry.',
          'Distinguish physical and chemical changes by whether a new substance is formed.',
          'Distinguish physical and chemical properties and classify given descriptions.',
          'Perform basic laboratory techniques — handling chemicals, heating, weighing and measuring volumes — safely and correctly.',
        ],
      },
      { type: 'heading', text: 'What chemistry studies' },
      {
        type: 'paragraph',
        text: 'Chemistry is the science that studies the composition, structure, properties and changes of matter at the level of molecules and atoms. From food production and new medicines to advanced materials and protecting the environment, chemistry is all around us. Learning chemistry begins with observing experiments: what happens before, during and after a change.',
      },
      { type: 'heading', text: 'Physical and chemical changes' },
      {
        type: 'paragraph',
        text: 'A change in which no new substance forms is a physical change, such as water freezing, petrol evaporating or glass breaking — only the state or shape alters. A change in which a new substance forms is a chemical change (a chemical reaction), such as wood burning, iron rusting or food decaying. The essential difference is just one question: is a new substance formed?',
      },
      {
        type: 'list',
        items: [
          'Chemical changes are often accompanied by light, heat, colour change, gas bubbles or a precipitate — these help us judge, but they are not decisive (a glowing lamp gives out light and heat, yet that is a physical change).',
          'A chemical change always involves physical change too: a burning candle first melts (physical) and then burns to carbon dioxide and water (chemical).',
          'Not every explosion is a chemical change: a bursting balloon or boiler is physical, while gunpowder exploding is chemical.',
        ],
      },
      { type: 'heading', text: 'Physical and chemical properties' },
      {
        type: 'paragraph',
        text: 'Properties shown without any chemical change are physical properties: colour, state, smell, hardness, melting point, boiling point, density, solubility, conductivity. Properties shown during a chemical change are chemical properties: flammability, supporting combustion, stability, toxicity, acidity or alkalinity. Descriptions of properties often contain words like "can" or "tends to" ("ethanol can burn"), while a change is a process happening or completed ("ethanol is burning"). Properties determine uses, and uses reflect properties.',
      },
      { type: 'heading', text: 'Basic laboratory techniques and apparatus' },
      {
        type: 'paragraph',
        text: 'Correct technique keeps experiments safe and successful. Follow the "three don’ts": never touch chemicals with your hands, never put your nose directly over a container to smell it (waft instead), and never taste any chemical. Leftover chemicals must not go back into the original bottle — put them in the designated container.',
      },
      {
        type: 'list',
        items: [
          'Solids: pick up lumps with tweezers — lay the tube horizontal, place the solid at its mouth, then stand it up slowly; deliver powders with a spatula or paper channel into a tilted tube.',
          'Liquids: when pouring, lay the stopper upside down, keep the label facing your palm, and touch the bottle mouth to the test tube; hold a dropper vertically above the tube, never inside it.',
          'Heating: use the outer (hottest) part of the flame; fill a test tube no more than one third with liquid and never point its mouth at anyone; put out the flame with the cap, never by blowing.',
          'Weighing and measuring: on a balance, substance on the left pan and weights on the right, reading to 0.1 g; read a measuring cylinder at eye level with the bottom of the meniscus — reading from below gives too small a value, from above too large.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'physical change (物理变化): A change in which no new substance forms, such as melting, evaporation or a change of shape.',
          'chemical change (化学变化): A change in which a new substance forms, such as burning, rusting or decay.',
          'physical property (物理性质): A property shown without chemical change, such as melting point, density or conductivity.',
          'chemical property (化学性质): A property shown during a chemical change, such as flammability or stability.',
          'meniscus (凹液面): The curved surface of a liquid in a cylinder, read at its lowest point.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列变化中，属于化学变化的是（　）',
        en: 'Which of the following is a chemical change?',
      },
      options: {
        zh: ['冰雪融化', '酒精挥发', '食物腐败', '铁丝弯曲'],
        en: ['ice and snow melting', 'alcohol evaporating', 'food decaying', 'an iron wire being bent'],
      },
      answerIndex: 2,
      explanation: {
        zh: '食物腐败生成了对人体有害的新物质，属于化学变化。冰雪融化、酒精挥发只是状态改变，铁丝弯曲只是形状改变，都没有新物质生成，属于物理变化。判断标准只有一个：是否有新物质生成。',
        en: 'Decaying food produces new, harmful substances, so it is a chemical change. Melting ice and evaporating alcohol are only changes of state, and bending wire only changes shape — no new substance forms, so they are physical changes. The only test is whether a new substance forms.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列物质的用途中，主要利用其化学性质的是（　）',
        en: 'Which use of a substance mainly relies on a chemical property?',
      },
      options: {
        zh: [
          '用铜丝作导线',
          '用干冰进行人工降雨',
          '用天然气作燃料',
          '用金刚石裁玻璃',
        ],
        en: [
          'copper wire used as an electrical conductor',
          'dry ice used for artificial rain',
          'natural gas used as a fuel',
          'diamond used to cut glass',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '天然气作燃料利用的是甲烷的可燃性，燃烧是化学变化，属于化学性质，C 正确。铜作导线利用导电性、干冰降雨利用升华吸热、金刚石裁玻璃利用硬度大，这些都不需要发生化学变化就能表现出来，属于物理性质。',
        en: 'Burning natural gas relies on the flammability of methane, and burning is a chemical change, so this is a chemical property — C is correct. Copper wiring uses conductivity, dry ice uses sublimation (absorbing heat), and diamond cutting uses hardness; all of these show themselves without a chemical change, so they are physical properties.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列实验操作中，正确的是（　）',
        en: 'Which laboratory operation is correct?',
      },
      options: {
        zh: [
          '给试管里的液体加热时，液体体积不超过试管容积的 1/3',
          '用燃着的酒精灯去引燃另一只酒精灯',
          '把鼻孔凑到容器口闻气体的气味',
          '实验后用剩的药品放回原试剂瓶',
        ],
        en: [
          'When heating liquid in a test tube, the liquid fills no more than one third of the tube',
          'Lighting one burner from another burning burner',
          'Putting your nose directly over a container to smell a gas',
          'Returning leftover chemicals to the original reagent bottle',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '加热时液体不超过试管容积的 1/3，可防止沸腾溅出伤人，A 正确。用燃着的酒精灯引燃另一只容易使酒精洒出失火，应用火柴点燃；闻气味应用手在瓶口轻轻扇动，使少量气体飘进鼻孔；用剩的药品放回原瓶会污染试剂，应放入指定容器。',
        en: 'Keeping liquid below one third of the tube prevents it boiling over onto people — A is correct. Lighting a burner from another can spill alcohol and start a fire; use a match. To smell a gas, waft it gently with your hand. Returning leftovers to the reagent bottle contaminates the stock; use the designated container.',
      },
    },
  ],
  examPractice: [
    {
      id: 'chem-intro-001-cp1',
      syllabus: ['0620/6.1.1'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'Which change is a chemical change?',
      options: [
        'Melting candle wax',
        'Dissolving salt in water',
        'Rusting of an iron nail',
        'Boiling water',
      ],
      answerIndex: 2,
      markScheme: [
        { text: 'Rusting of an iron nail', marks: 1 },
      ],
      examinerNote: {
        zh: '判断的唯一依据是"是否生成新物质"。熔化、溶解、沸腾都没有新物质生成；铁生锈生成了新物质氧化铁，是化学变化。',
        en: 'The only test is whether a new substance forms. Melting, dissolving and boiling produce nothing new; rusting produces a new substance, iron oxide, so it is a chemical change.',
      },
    },
  ],
  related: ['chem-bonding-004', 'chem-stoich-001', 'igcse-0620-1-1-states-of-matter'],
};
