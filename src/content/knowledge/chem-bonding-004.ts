import type { KnowledgePoint } from '../types';

export const chemBonding004: KnowledgePoint = {
  id: 'chem-bonding-004',
  subject: 'chemistry',
  title: { zh: '物质的分类：纯净物、混合物、单质、化合物与氧化物', en: 'Classifying Matter: Pure Substances, Mixtures, Elements, Compounds and Oxides' },
  summary: {
    zh: '物质按组成是否单一分为混合物与纯净物；纯净物再按元素组成分为单质与化合物，化合物中有一类重要的氧化物。学会用分类的眼光看待身边常见的物质。',
    en: 'Matter is divided into mixtures and pure substances by composition; pure substances are further divided into elements and compounds, with oxides as an important class of compound. Learn to classify everyday substances.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch2', 'pep-che-j9a/ch4', 'pep-che-s1/ch1'],
    igcse: ['0620/2'],
  },
  keywords: {
    zh: ['混合物', '纯净物', '单质', '化合物', '氧化物', '物质分类'],
    en: ['mixture', 'pure substance', 'element', 'compound', 'oxide', 'classification of matter'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '混合物与纯净物' },
      {
        type: 'paragraph',
        text: '由两种或两种以上的物质混合而成的物质叫混合物，如空气（含氮气、氧气等）、海水、矿泉水，各成分保持各自的性质，没有固定的组成。只由一种物质组成的叫纯净物，如氧气、蒸馏水，有固定的组成和性质。"洁净""干净"不等于纯净——洁净的空气仍是混合物。',
      },
      { type: 'heading', text: '单质与化合物' },
      {
        type: 'paragraph',
        text: '纯净物可以按组成元素的种类再分类：由同种元素组成的纯净物叫单质，如氧气（O₂）、铁（Fe）、金刚石（C）；由不同种元素组成的纯净物叫化合物，如水（H₂O）、二氧化碳（CO₂）、高锰酸钾（KMnO₄）。单质和化合物的前提是"纯净物"，混合物谈不上单质或化合物。',
      },
      { type: 'heading', text: '氧化物' },
      {
        type: 'paragraph',
        text: '由两种元素组成，且其中一种元素是氧元素的化合物叫氧化物，如 CO₂、H₂O、Fe₃O₄、CuO。注意：含有氧元素的化合物不一定是氧化物——KMnO₄ 虽然含氧，但由三种元素组成，不属于氧化物。',
      },
      { type: 'heading', text: '分类关系一览' },
      {
        type: 'list',
        items: [
          '物质先分为混合物和纯净物：看是否只含一种物质。',
          '纯净物再分为单质和化合物：看是否只含一种元素。',
          '化合物中，含氧且只含两种元素的属于氧化物。',
          '举例：空气是混合物；液氧是单质；蒸馏水是化合物，也是氧化物；冰水混合物只含 H₂O 一种物质，是纯净物。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Mixtures and pure substances' },
      {
        type: 'paragraph',
        text: 'A mixture contains two or more substances that are not chemically combined, such as air (nitrogen, oxygen and more), seawater and mineral water; each component keeps its own properties and the composition is not fixed. A pure substance contains only one substance, such as oxygen or distilled water, with a fixed composition and properties. "Clean" does not mean pure — clean air is still a mixture.',
      },
      { type: 'heading', text: 'Elements and compounds' },
      {
        type: 'paragraph',
        text: 'Pure substances can be classified further by the elements they contain. An element (simple substance) is a pure substance made of only one kind of atom, such as oxygen (O₂), iron (Fe) and diamond (C); a compound is a pure substance made of two or more elements chemically combined, such as water (H₂O), carbon dioxide (CO₂) and potassium manganate(VII) (KMnO₄). Both terms apply only to pure substances — a mixture is neither an element nor a compound.',
      },
      { type: 'heading', text: 'Oxides' },
      {
        type: 'paragraph',
        text: 'An oxide is a compound of exactly two elements, one of which is oxygen — for example CO₂, H₂O, Fe₃O₄ and CuO. Beware: containing oxygen is not enough. KMnO₄ contains oxygen but has three elements, so it is not an oxide.',
      },
      { type: 'heading', text: 'The classification tree at a glance' },
      {
        type: 'list',
        items: [
          'Matter first splits into mixtures and pure substances: is only one substance present?',
          'Pure substances split into elements and compounds: is only one element present?',
          'Among compounds, those with oxygen plus exactly one other element are oxides.',
          'Examples: air is a mixture; liquid oxygen is an element; distilled water is a compound and also an oxide; an ice–water mixture contains only H₂O, so it is a pure substance.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '把冰和水混合在一起得到的"冰水混合物"属于？',
        en: 'Ice and water are mixed together. This "ice–water mixture" is classified as?',
      },
      options: {
        zh: ['混合物', '纯净物', '单质', '无法确定'],
        en: ['A mixture', 'A pure substance', 'An element', 'Cannot be determined'],
      },
      answerIndex: 1,
      explanation: {
        zh: '冰和水只是状态不同，都是 H₂O 这一种物质，所以冰水混合物中只含一种物质，属于纯净物（进一步说是化合物、氧化物）。判断混合物要看物质种类，而不是看"混合"二字。',
        en: 'Ice and water are the same substance, H₂O, in different states, so the mixture contains only one substance — it is a pure substance (indeed a compound and an oxide). Judge by the number of substances present, not by the word "mixture".',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列物质中，属于氧化物的是？',
        en: 'Which of the following is an oxide?',
      },
      options: {
        zh: ['CO₂', 'O₂', 'KMnO₄', '洁净的空气'],
        en: ['CO₂', 'O₂', 'KMnO₄', 'Clean air'],
      },
      answerIndex: 0,
      explanation: {
        zh: '氧化物必须满足三个条件：纯净物中的化合物、只含两种元素、其中一种是氧。CO₂ 符合；O₂ 是单质；KMnO₄ 含三种元素；空气是混合物，根本不在"化合物"范围内。',
        en: 'An oxide must be a compound of exactly two elements, one being oxygen. CO₂ qualifies; O₂ is an element; KMnO₄ has three elements; air is a mixture, so it cannot be a compound at all.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列各组物质，前者是混合物、后者是单质的是？',
        en: 'Which pair has a mixture first and an element second?',
      },
      options: {
        zh: ['海水、液氧', '蒸馏水、二氧化碳', '空气、氯化钠', '氧气、铁'],
        en: ['Seawater, liquid oxygen', 'Distilled water, carbon dioxide', 'Air, sodium chloride', 'Oxygen, iron'],
      },
      answerIndex: 0,
      explanation: {
        zh: '海水含有水、氯化钠等多种物质，是混合物；液氧只由氧元素组成的纯净物，是单质。蒸馏水、二氧化碳、氯化钠都是化合物，氧气和铁虽然都是单质，但前者不是混合物。',
        en: 'Seawater contains water, sodium chloride and more, so it is a mixture; liquid oxygen is a pure substance of one element, so it is an element. Distilled water, CO₂ and NaCl are compounds; oxygen and iron are both elements, but neither is a mixture.',
      },
    },
  ],
};
