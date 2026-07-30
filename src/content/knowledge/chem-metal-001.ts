import type { KnowledgePoint } from '../types';

export const chemMetal001: KnowledgePoint = {
  id: 'chem-metal-001',
  subject: 'chemistry',
  title: { zh: '金属活动性顺序及其应用', en: 'The Reactivity Series of Metals and Its Applications' },
  summary: {
    zh: '金属活动性顺序排出常见金属失电子能力的强弱，可用来判断金属能否与酸、盐溶液发生置换反应，并解释金属的冶炼、防锈等实际问题。',
    en: 'The reactivity series ranks metals by how readily they lose electrons. It predicts whether a metal reacts with acids or salt solutions and explains practical issues such as metal extraction and rust protection.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9b/ch1'],
    igcse: ['0620/9'],
  },
  keywords: {
    zh: ['金属活动性顺序', '置换反应', '活泼金属', '氢前金属', '湿法炼铜', '金属腐蚀与防护'],
    en: ['reactivity series', 'displacement reaction', 'reactive metal', 'metals above hydrogen', 'metal extraction', 'rusting'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '金属活动性顺序' },
      {
        type: 'paragraph',
        text: '人们根据大量实验事实，把常见金属按活动性由强到弱排列成金属活动性顺序。位置越靠前，金属原子越容易失去电子，化学性质越活泼。',
      },
      {
        type: 'formula',
        latex: '\\mathrm{K\\ Ca\\ Na\\ Mg\\ Al\\ Zn\\ Fe\\ Sn\\ Pb\\ (H)\\ Cu\\ Hg\\ Ag\\ Pt\\ Au}',
        caption: '金属活动性由强逐渐减弱（H 为参照，不是金属）',
      },
      {
        type: 'list',
        items: [
          '在金属活动性顺序里，金属的位置越靠前，它的活动性就越强。',
          '位于氢前面的金属能置换出盐酸、稀硫酸中的氢，位于氢后面的金属则不能。',
          '位于前面的金属能把位于后面的金属从它们化合物的溶液里置换出来（K、Ca、Na 除外）。',
        ],
      },
      { type: 'heading', text: '金属活动性顺序的应用' },
      {
        type: 'paragraph',
        text: '利用金属活动性顺序可以预测反应能否发生。例如锌排在氢前，能与稀硫酸反应放出氢气；铜排在氢后，不与稀硫酸反应。排在后面的金属更稳定，这也是金、铂能以单质形式存在于自然界的原因。',
      },
      {
        type: 'list',
        items: [
          '判断金属与酸能否反应制取氢气，以及反应的剧烈程度（如镁比锌反应更剧烈）。',
          '判断金属与盐溶液之间能否发生置换反应，如铁能置换出硫酸铜溶液中的铜。',
          '解释金属的冶炼方法：越活泼的金属越难从其化合物中还原出来，需要更强的冶炼手段。',
          '指导金属防锈：用比铁活泼的金属（如锌）保护铁制品，锌先被腐蚀而铁得到保护。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'The reactivity series' },
      {
        type: 'paragraph',
        text: 'From a large body of experimental evidence, the common metals can be arranged in order of decreasing reactivity. The higher a metal is in the series, the more readily its atoms lose electrons and the more reactive it is.',
      },
      {
        type: 'formula',
        latex: '\\mathrm{K\\ Ca\\ Na\\ Mg\\ Al\\ Zn\\ Fe\\ Sn\\ Pb\\ (H)\\ Cu\\ Hg\\ Ag\\ Pt\\ Au}',
        caption: 'Reactivity decreases from left to right (H is a reference, not a metal)',
      },
      {
        type: 'list',
        items: [
          'The higher a metal is in the series, the more reactive it is.',
          'Metals above hydrogen displace hydrogen from dilute hydrochloric or sulfuric acid; metals below hydrogen do not.',
          'A more reactive metal displaces a less reactive metal from a solution of its salt (K, Ca and Na are exceptions).',
        ],
      },
      { type: 'heading', text: 'Using the reactivity series' },
      {
        type: 'paragraph',
        text: 'The series predicts whether a reaction will happen. Zinc is above hydrogen, so it reacts with dilute sulfuric acid to give off hydrogen; copper is below hydrogen and does not react. Metals near the bottom are so unreactive that gold and platinum occur naturally as the free elements.',
      },
      {
        type: 'list',
        items: [
          'Predicting whether a metal reacts with an acid to produce hydrogen, and how vigorously (magnesium reacts faster than zinc).',
          'Predicting displacement reactions between a metal and a salt solution, e.g. iron displaces copper from copper(II) sulfate solution.',
          'Explaining extraction methods: the more reactive the metal, the harder it is to reduce from its compounds, so more powerful extraction is needed.',
          'Guiding rust protection: a more reactive metal such as zinc corrodes first, protecting the iron it is attached to.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列金属中，不能与稀盐酸反应放出氢气的是？',
        en: 'Which of the following metals does NOT react with dilute hydrochloric acid to release hydrogen?',
      },
      options: {
        zh: ['镁', '锌', '铁', '铜'],
        en: ['Magnesium', 'Zinc', 'Iron', 'Copper'],
      },
      answerIndex: 3,
      explanation: {
        zh: '铜位于氢之后，活动性比氢弱，不能置换出盐酸中的氢；镁、锌、铁都排在氢前，能与稀盐酸反应放出氢气。',
        en: 'Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from the acid. Magnesium, zinc and iron are all above hydrogen and react to release hydrogen gas.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '把铁钉放入硫酸铜溶液中，一段时间后铁钉表面有红色物质析出。该实验说明？',
        en: 'An iron nail is placed in copper(II) sulfate solution. After a while a red solid deposits on the nail. What does this show?',
      },
      options: {
        zh: [
          '铜的活动性比铁强',
          '铁的活动性比铜强',
          '铁与硫酸铜发生了化合反应',
          '铜被氧化成了铜离子',
        ],
        en: [
          'Copper is more reactive than iron',
          'Iron is more reactive than copper',
          'Iron and copper(II) sulfate underwent a combination reaction',
          'Copper was oxidised to copper ions',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '铁能把铜从硫酸铜溶液中置换出来（红色物质是铜），说明铁的活动性比铜强，这是置换反应。反应中铁失去电子被氧化，铜离子得到电子被还原成铜单质。',
        en: 'Iron displaces copper from the solution (the red solid is copper metal), so iron must be more reactive than copper; this is a displacement reaction. Iron atoms lose electrons and are oxidised, while copper ions gain electrons and are reduced to copper metal.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '海轮外壳上常镶嵌锌块以防止钢铁船体腐蚀，其原理是？',
        en: 'Blocks of zinc are attached to the steel hulls of ships to prevent corrosion. This works because?',
      },
      options: {
        zh: [
          '锌不与海水接触',
          '锌比铁活泼，锌先被腐蚀从而保护铁',
          '锌在铁表面形成致密保护膜',
          '锌能将海水中的盐分沉淀除去',
        ],
        en: [
          'Zinc does not come into contact with seawater',
          'Zinc is more reactive than iron, so it corrodes first and protects the iron',
          'Zinc forms a dense protective film on the iron surface',
          'Zinc precipitates the salt out of the seawater',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '锌在金属活动性顺序中位于铁之前，比铁更容易失去电子被腐蚀。锌块作为"牺牲阳极"先被消耗，钢铁船体因而得到保护，这是金属活动性顺序在防腐中的应用。',
        en: 'Zinc is above iron in the reactivity series and loses electrons more easily. The zinc blocks act as sacrificial anodes that corrode first, so the steel hull is protected — a practical application of the reactivity series.',
      },
    },
  ],
};
