import type { KnowledgePoint } from '../types';

export const phyHeatEngine002: KnowledgePoint = {
  id: 'phy-heat-engine-002',
  subject: 'physics',
  title: { zh: '热机效率', en: 'Efficiency of Heat Engines' },
  summary: {
    zh: '理解燃料热值的含义并用 Q = mq 计算燃料完全燃烧放出的热量，认识热机中能量的流向，会用 η = W/Q放 计算热机效率并了解提高热机效率的途径。',
    en: 'Understand the energy value of a fuel and calculate heat released with Q = mq, trace where the energy goes in a heat engine, calculate efficiency with η = W/Q and learn how engine efficiency can be improved.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch2'],
    igcse: ['0625/1.7.3'],
  },
  keywords: {
    zh: ['热值', '完全燃烧', '热机效率', '能量流向', '有用功', '废气', '焦每千克'],
    en: ['energy value of fuel', 'complete combustion', 'engine efficiency', 'energy flow', 'useful work', 'exhaust losses', 'joules per kilogram'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '理解热值的概念，知道热值是燃料的一种特性，会用 Q放 = mq 计算燃料完全燃烧放出的热量。',
          '了解热机工作时能量的流向：废气带走、散热损失、克服摩擦做功等。',
          '理解热机效率的定义，会用 η = W有用 / Q放 进行计算。',
          '了解提高热机效率的途径及其节能、环保意义。',
        ],
      },
      { type: 'heading', text: '燃料的热值' },
      {
        type: 'paragraph',
        text: '不同燃料燃烧放热的本领不同。某种燃料完全燃烧放出的热量与其质量之比，叫这种燃料的热值，用字母 q 表示。热值是燃料本身的一种特性，只与燃料的种类有关，与燃料的质量、是否完全燃烧等无关。热值的单位是焦每千克（J/kg）；气体燃料常用焦每立方米（J/m³）。例如汽油的热值约 4.6×10⁷ J/kg，表示 1 kg 汽油完全燃烧放出约 4.6×10⁷ J 的热量。',
      },
      { type: 'formula', latex: 'q = \\dfrac{Q}{m}', caption: '热值的定义：q 为热值（J/kg），Q 为完全燃烧放出的热量（J），m 为燃料质量（kg）' },
      {
        type: 'formula',
        latex: 'Q_{放} = mq',
        caption: '燃料完全燃烧放出的热量：如 0.5 kg 汽油完全燃烧，Q放 = 0.5 kg × 4.6×10⁷ J/kg = 2.3×10⁷ J',
      },
      { type: 'heading', text: '热机中能量的流向' },
      {
        type: 'paragraph',
        text: '燃料完全燃烧放出的能量，只有一部分转化为有用的机械能：废气要带走相当一部分能量；汽缸等部件散热损失一部分；克服机械摩擦做功再消耗一部分。所以热机工作时，用来做有用功的能量总是小于燃料完全燃烧放出的总能量。',
      },
      { type: 'heading', text: '热机的效率' },
      {
        type: 'paragraph',
        text: '用来做有用功的那部分能量，与燃料完全燃烧放出的能量之比，叫热机的效率。热机效率总小于 1（即小于 100%）。蒸汽机的效率只有 6%～15%，汽油机约 20%～30%，柴油机约 30%～45%，是热机中效率较高的。',
      },
      { type: 'formula', latex: '\\eta = \\dfrac{W}{Q_{放}} \\times 100\\%', caption: '热机效率：W 为有用功（J），Q放 为燃料完全燃烧放出的热量（J）' },
      {
        type: 'list',
        items: [
          '提高热机效率的途径：使燃料充分燃烧；减少废气带走的热量（利用废气能量）；减小摩擦；保持良好的润滑与保养。',
          '提高热机效率可以节约燃料、减少排放，是节能减排的重要措施。',
          '注意：热机效率与功率是两个不同的概念，功率大的热机效率不一定高。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'energy value of fuel（热值）：燃料完全燃烧放出的热量与质量之比，q = Q/m，单位 J/kg。',
          'complete combustion（完全燃烧）：燃料中的可燃成分全部烧尽、放热达到最大的燃烧。',
          'efficiency（效率）：有用能量（或功率）与输入总能量（或功率）之比，常用百分数表示。',
          'useful work（有用功）：热机对外输出的、实现预期目的的机械功。',
          'exhaust loss（废气损失）：随废气排出而散失到环境中的那部分能量。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Understand the energy value of a fuel as a property of the fuel, and calculate heat released with Q = mq.',
          'Trace the energy flow in a heat engine: exhaust losses, heat losses to the surroundings, friction.',
          'Understand engine efficiency and calculate with η = W_useful / Q_released.',
          'Describe ways of improving engine efficiency and their significance for saving energy and cutting emissions.',
        ],
      },
      { type: 'heading', text: 'The energy value of a fuel' },
      {
        type: 'paragraph',
        text: 'Different fuels release different amounts of energy when they burn. The energy value q of a fuel is the heat released per kilogram when it burns completely. It is a property of the fuel itself — it depends only on the type of fuel, not on the mass burned or on whether the burning was actually complete. Its unit is the joule per kilogram (J/kg); for gaseous fuels the joule per cubic metre (J/m³) is used. Petrol, for example, has an energy value of about 4.6×10⁷ J/kg: burning 1 kg completely releases about 4.6×10⁷ J.',
      },
      { type: 'formula', latex: 'q = \\dfrac{Q}{m}', caption: 'Definition of energy value: q in J/kg, Q the heat released on complete combustion (J), m the mass of fuel (kg)' },
      {
        type: 'formula',
        latex: 'Q = mq',
        caption: 'Heat released by complete combustion: 0.5 kg of petrol gives Q = 0.5 kg × 4.6×10⁷ J/kg = 2.3×10⁷ J',
      },
      { type: 'heading', text: 'Where the energy goes in an engine' },
      {
        type: 'paragraph',
        text: 'Only part of the energy released by the fuel becomes useful mechanical work. The hot exhaust carries a large share away; the cylinder and other parts lose heat to the surroundings; and overcoming friction consumes more. The useful output of a heat engine is therefore always less than the total energy released by the fuel.',
      },
      { type: 'heading', text: 'Efficiency of a heat engine' },
      {
        type: 'paragraph',
        text: 'The efficiency of a heat engine is the ratio of the useful work output to the total energy released by complete combustion of the fuel. It is always less than 1 (below 100%). Steam engines manage only about 6–15%, petrol engines about 20–30%, and diesel engines about 30–45% — among the most efficient heat engines.',
      },
      { type: 'formula', latex: '\\eta = \\dfrac{W}{Q} \\times 100\\%', caption: 'Engine efficiency: W is the useful work (J), Q the heat released by the fuel (J)' },
      {
        type: 'list',
        items: [
          'Raising efficiency: burn the fuel as completely as possible; recover energy from the exhaust; reduce friction; keep the engine well lubricated and maintained.',
          'Higher efficiency means less fuel burnt and fewer emissions — a key measure for saving energy and protecting the environment.',
          'Efficiency and power are different concepts: a powerful engine is not necessarily an efficient one.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'energy value of fuel (热值): Heat released per unit mass on complete combustion, q = Q/m, in J/kg.',
          'complete combustion (完全燃烧): Burning in which all combustible material is fully oxidised, releasing the maximum heat.',
          'efficiency (效率): The ratio of useful energy (or power) output to total input, often as a percentage.',
          'useful work (有用功): The mechanical work an engine delivers for its intended purpose.',
          'exhaust loss (废气损失): The energy carried away to the surroundings by the exhaust gases.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '关于燃料的热值，下列说法正确的是（　）',
        en: 'Which statement about the energy value of a fuel is correct?',
      },
      options: {
        zh: [
          '燃料的质量越大，热值越大',
          '燃料不完全燃烧时热值会变小',
          '热值是燃料的一种特性，只与燃料的种类有关',
          '燃料燃烧放出的热量越多，热值越大',
        ],
        en: [
          'the larger the mass of fuel, the greater its energy value',
          'the energy value decreases when the fuel burns incompletely',
          'the energy value is a property of the fuel and depends only on the type of fuel',
          'the more heat a fuel releases when burning, the greater its energy value',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '热值是燃料本身的特性，只取决于燃料种类，与质量多少、燃烧是否充分、实际放出多少热量都无关。A、B、D 都把热值当成了随燃烧情况变化的量。',
        en: 'The energy value is a property of the fuel itself, fixed by its type — independent of the mass, of how completely it happens to burn, and of the heat actually released. A, B and D all treat it as something that varies with the burning conditions.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '0.5 kg 的汽油完全燃烧，放出的热量约为（汽油的热值取 4.6×10⁷ J/kg）（　）',
        en: 'Approximately how much heat is released when 0.5 kg of petrol burns completely? (Energy value of petrol = 4.6×10⁷ J/kg.)',
      },
      options: {
        zh: ['2.3×10⁷ J', '9.2×10⁷ J', '4.6×10⁷ J', '1.15×10⁷ J'],
        en: ['2.3×10⁷ J', '9.2×10⁷ J', '4.6×10⁷ J', '1.15×10⁷ J'],
      },
      answerIndex: 0,
      explanation: {
        zh: '由 Q放 = mq = 0.5 kg × 4.6×10⁷ J/kg = 2.3×10⁷ J。B 是把质量乘成 2 kg；C 是 1 kg 汽油的放热量，忘了乘 0.5；D 误把 4.6×10⁷ 除以 4。',
        en: 'Q = mq = 0.5 kg × 4.6×10⁷ J/kg = 2.3×10⁷ J. B corresponds to 2 kg of fuel; C forgets the factor of 0.5 (that is the value for 1 kg); D divides by the wrong factor.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '某汽油机工作时，燃料完全燃烧放出 4×10⁷ J 的能量，其中对外做有用功 1×10⁷ J，则该汽油机的效率为（　）',
        en: 'In one cycle a petrol engine’s fuel releases 4×10⁷ J by complete combustion, of which 1×10⁷ J becomes useful work. The efficiency is',
      },
      options: {
        zh: ['25%', '40%', '400%', '10%'],
        en: ['25%', '40%', '400%', '10%'],
      },
      answerIndex: 0,
      explanation: {
        zh: 'η = W有用 / Q放 = (1×10⁷ J) / (4×10⁷ J) × 100% = 25%。B 算成了 Q/W（把分子分母颠倒后再乘 10%）；效率不可能超过 100%，C 违反能量守恒；D 多数了一个量级错误。',
        en: 'η = W/Q = (1×10⁷ J) / (4×10⁷ J) × 100% = 25%. B inverts the ratio; C exceeds 100%, which would violate energy conservation; D is off by a factor of ten.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-efficiency-calculation',
      syllabus: ['0625/1.7.3.7'],
      tier: 'supplement',
      commandWord: 'Calculate',
      marks: 3,
      stem: 'A power station burns fuel that releases 5.0×10⁹ J of energy and generates 2.0×10⁹ J of electrical energy. Calculate the efficiency of the power station.',
      markScheme: [
        {
          text: 'Uses efficiency = useful energy output / total energy input',
          marks: 1,
          alternatives: ['η = W / Q', '2.0×10⁹ / 5.0×10⁹'],
        },
        {
          text: '0.40',
          marks: 1,
        },
        {
          text: '= 40%',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '先写公式再代入。0.40 与 40% 是同一结果的两种表示，题目若要求百分数须写到 40%；写成 2.5（Q/W）是把比值颠倒了。',
        en: 'Quote the defining equation before substituting. 0.40 and 40% are the same result; if a percentage is requested, state 40%. Writing 2.5 (Q/W) inverts the ratio.',
      },
    },
  ],
  related: ['phy-heat-engine-001', 'phy-energy-001', 'igcse-0625-1-7-energy'],
};
