import type { KnowledgePoint } from '../types';

export const chemMetal002: KnowledgePoint = {
  id: 'chem-metal-002',
  subject: 'chemistry',
  title: { zh: '金属与酸、盐溶液的置换反应', en: 'Displacement Reactions of Metals with Acids and Salt Solutions' },
  summary: {
    zh: '活泼金属与酸反应生成盐和氢气，与盐溶液反应置换出另一种金属。这类置换反应的本质是金属原子失去电子的氧化还原过程。',
    en: 'Reactive metals react with acids to form a salt and hydrogen, and with salt solutions to displace another metal. These displacement reactions are redox processes in which metal atoms lose electrons.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9b/ch1'],
    igcse: ['0620/9'],
  },
  keywords: {
    zh: ['置换反应', '金属与酸反应', '金属与盐溶液反应', '氢气', '氧化还原', '铁钉与硫酸铜'],
    en: ['displacement reaction', 'metal and acid', 'metal and salt solution', 'hydrogen', 'redox', 'single replacement'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '金属与酸的反应' },
      {
        type: 'paragraph',
        text: '位于氢前面的金属能与盐酸、稀硫酸发生置换反应，生成盐和氢气。金属越活泼，反应越剧烈。实验室常用锌与稀硫酸反应制取氢气，因为反应速率适中、便于控制。',
      },
      { type: 'formula', latex: '\\mathrm{Zn} + \\mathrm{H}_2\\mathrm{SO}_4 \\rightarrow \\mathrm{ZnSO}_4 + \\mathrm{H}_2\\uparrow', caption: '锌与稀硫酸反应（实验室制氢气）' },
      { type: 'formula', latex: '\\mathrm{Fe} + 2\\mathrm{HCl} \\rightarrow \\mathrm{FeCl}_2 + \\mathrm{H}_2\\uparrow', caption: '铁与盐酸反应生成氯化亚铁（铁显 +2 价）' },
      {
        type: 'paragraph',
        text: '注意：钾、钙、钠太活泼，会与酸溶液中的水剧烈反应，不能用于制取氢气；铜、银等氢后金属不与稀盐酸、稀硫酸反应。铁与酸或盐溶液发生置换反应时生成的是 +2 价的亚铁盐。',
      },
      { type: 'heading', text: '金属与盐溶液的反应' },
      {
        type: 'paragraph',
        text: '在金属活动性顺序里，位于前面的金属能把位于后面的金属从它们化合物的溶液里置换出来。我国古代"湿法炼铜"就利用了这一原理，西汉时期已有"曾青得铁则化为铜"的记载。',
      },
      { type: 'formula', latex: '\\mathrm{Fe} + \\mathrm{CuSO}_4 \\rightarrow \\mathrm{FeSO}_4 + \\mathrm{Cu}', caption: '湿法炼铜：铁表面析出红色铜，溶液由蓝色逐渐变为浅绿色' },
      { type: 'formula', latex: '\\mathrm{Cu} + 2\\mathrm{AgNO}_3 \\rightarrow \\mathrm{Cu}(\\mathrm{NO}_3)_2 + 2\\mathrm{Ag}', caption: '铜置换出银：铜表面析出银白色银，溶液逐渐变为蓝色' },
      { type: 'heading', text: '置换反应与氧化还原' },
      {
        type: 'paragraph',
        text: '置换反应是一种单质与一种化合物反应生成另一种单质和另一种化合物的反应。从本质上看，这类反应中金属原子失去电子（被氧化），氢离子或另一种金属离子得到电子（被还原），因此置换反应都属于氧化还原反应。',
      },
      {
        type: 'list',
        items: [
          '判断依据：反应物和生成物中都是一种单质和一种化合物。',
          '金属与酸反应：金属被氧化为金属离子，H⁺ 被还原为 H₂。',
          '金属与盐溶液反应：活泼金属被氧化，不活泼金属的离子被还原为金属单质。',
          '反应前后一定有元素化合价的变化，这是氧化还原反应的特征。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Metals reacting with acids' },
      {
        type: 'paragraph',
        text: 'Metals above hydrogen react with dilute hydrochloric or sulfuric acid in a displacement reaction, producing a salt and hydrogen gas. The more reactive the metal, the more vigorous the reaction. Zinc with dilute sulfuric acid is used in the laboratory to prepare hydrogen because the rate is moderate and easy to control.',
      },
      { type: 'formula', latex: '\\mathrm{Zn} + \\mathrm{H}_2\\mathrm{SO}_4 \\rightarrow \\mathrm{ZnSO}_4 + \\mathrm{H}_2\\uparrow', caption: 'Zinc with dilute sulfuric acid (laboratory preparation of hydrogen)' },
      { type: 'formula', latex: '\\mathrm{Fe} + 2\\mathrm{HCl} \\rightarrow \\mathrm{FeCl}_2 + \\mathrm{H}_2\\uparrow', caption: 'Iron with hydrochloric acid gives iron(II) chloride (iron is +2 here)' },
      {
        type: 'paragraph',
        text: 'Note: potassium, calcium and sodium are too reactive — they react violently with the water in the acid, so they cannot be used to prepare hydrogen. Copper and silver, being below hydrogen, do not react with dilute acids. When iron displaces hydrogen or another metal, it always forms iron(II) (+2) compounds.',
      },
      { type: 'heading', text: 'Metals reacting with salt solutions' },
      {
        type: 'paragraph',
        text: 'A metal higher in the reactivity series displaces a metal below it from a solution of its compound. The ancient Chinese method of extracting copper by soaking iron in copper-bearing spring water was an early application of this principle.',
      },
      { type: 'formula', latex: '\\mathrm{Fe} + \\mathrm{CuSO}_4 \\rightarrow \\mathrm{FeSO}_4 + \\mathrm{Cu}', caption: 'Red copper deposits on the iron; the blue solution gradually turns pale green' },
      { type: 'formula', latex: '\\mathrm{Cu} + 2\\mathrm{AgNO}_3 \\rightarrow \\mathrm{Cu}(\\mathrm{NO}_3)_2 + 2\\mathrm{Ag}', caption: 'Silvery silver deposits on the copper; the solution gradually turns blue' },
      { type: 'heading', text: 'Displacement and redox' },
      {
        type: 'paragraph',
        text: 'A displacement reaction is one in which an element reacts with a compound to form a different element and a different compound. In essence, metal atoms lose electrons (they are oxidised) while hydrogen ions or ions of the other metal gain electrons (they are reduced), so every displacement reaction is also a redox reaction.',
      },
      {
        type: 'list',
        items: [
          'Recognition: both the reactants and the products consist of one element and one compound.',
          'Metal with acid: the metal is oxidised to its ions while H⁺ is reduced to H₂.',
          'Metal with salt solution: the more reactive metal is oxidised; ions of the less reactive metal are reduced to the metal.',
          'Oxidation numbers must change during the reaction — the signature of a redox process.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列化学方程式书写正确的是？',
        en: 'Which of the following chemical equations is written correctly?',
      },
      options: {
        zh: [
          '2Fe + 6HCl → 2FeCl₃ + 3H₂↑',
          'Cu + H₂SO₄ → CuSO₄ + H₂↑',
          'Fe + CuSO₄ → FeSO₄ + Cu',
          '2Na + CuSO₄ → Na₂SO₄ + Cu',
        ],
        en: [
          '2Fe + 6HCl → 2FeCl₃ + 3H₂↑',
          'Cu + H₂SO₄ → CuSO₄ + H₂↑',
          'Fe + CuSO₄ → FeSO₄ + Cu',
          '2Na + CuSO₄ → Na₂SO₄ + Cu',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '铁与酸或盐溶液发生置换反应时生成 +2 价的亚铁盐（FeCl₂、FeSO₄），不是 FeCl₃，故 A 错；铜在氢后，不与稀硫酸反应，故 B 错；钠太活泼，会先与溶液中的水反应，不能置换出铜，故 D 错。只有 C 正确。',
        en: 'Iron forms iron(II) (+2) compounds in displacement reactions, not FeCl₃, so A is wrong. Copper is below hydrogen and does not react with dilute sulfuric acid, so B is wrong. Sodium is too reactive — it reacts with the water in the solution instead of displacing copper, so D is wrong. Only C is correct.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '把洁净的铁钉放入硫酸铜溶液中，下列现象描述错误的是？',
        en: 'A clean iron nail is placed in copper(II) sulfate solution. Which observation is INCORRECT?',
      },
      options: {
        zh: [
          '铁钉表面有红色物质析出',
          '溶液由蓝色逐渐变为浅绿色',
          '有气泡产生',
          '铁钉质量逐渐增加',
        ],
        en: [
          'A red solid deposits on the nail',
          'The blue solution gradually turns pale green',
          'Bubbles of gas are produced',
          'The mass of the nail gradually increases',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '反应 Fe + CuSO₄ → FeSO₄ + Cu 不产生气体，故 C 错误。析出的铜是红色固体，生成的 FeSO₄ 溶液呈浅绿色；每 56 份质量的铁置换出 64 份质量的铜，析出的铜附在铁钉上，铁钉质量增加。',
        en: 'The reaction Fe + CuSO₄ → FeSO₄ + Cu produces no gas, so C is incorrect. The deposited copper is red, and the iron(II) sulfate solution formed is pale green. Each 56 mass units of iron displace 64 mass units of copper, which stays on the nail, so the nail gains mass.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '在反应 Zn + CuSO₄ → ZnSO₄ + Cu 中，被氧化的物质是？',
        en: 'In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, which substance is oxidised?',
      },
      options: {
        zh: ['Zn', 'CuSO₄', 'Cu', 'ZnSO₄'],
        en: ['Zn', 'CuSO₄', 'Cu', 'ZnSO₄'],
      },
      answerIndex: 0,
      explanation: {
        zh: '锌原子失去电子变成 Zn²⁺，化合价从 0 升高到 +2，被氧化；Cu²⁺ 得到电子变成铜单质，化合价降低，被还原。失去电子（化合价升高）的物质被氧化。',
        en: 'Zinc atoms lose electrons to become Zn²⁺, and the oxidation number rises from 0 to +2, so zinc is oxidised. Cu²⁺ gains electrons and is reduced to copper metal. The species that loses electrons (oxidation number increases) is the one oxidised.',
      },
    },
  ],
  related: ['igcse-0620-9-4-reactivity-series', 'igcse-0620-6-4-redox', 'chem-metal-001', 'chem-acidbase-002'],
};
