import { enzymeKernel } from '../../simulations/kernels/enzyme';
import type { KnowledgePoint } from '../types';

export const bioHuman001: KnowledgePoint = {
  id: 'bio-human-001',
  subject: 'biology',
  title: { zh: '消化与吸收：酶的作用', en: 'Digestion and Absorption: The Role of Enzymes' },
  summary: {
    zh: '探究唾液淀粉酶、胃蛋白酶等消化酶如何催化食物分解，理解温度与 pH 对酶活性的影响以及高温变性的不可逆性。',
    en: 'Explore how digestive enzymes such as amylase and pepsin catalyse the breakdown of food, and understand how temperature and pH affect enzyme activity, including irreversible denaturation at high temperatures.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7b/ch1', 'pep-bio-s1/ch5'],
    igcse: ['0610/5', '0610/7'],
  },
  keywords: {
    zh: ['消化', '吸收', '消化酶', '唾液淀粉酶', '胃蛋白酶', '最适温度', '最适 pH', '变性失活', '小肠', '生物催化剂'],
    en: ['digestion', 'absorption', 'digestive enzyme', 'amylase', 'pepsin', 'protease', 'optimum temperature', 'optimum pH', 'denaturation', 'active site', 'biological catalyst', 'small intestine', 'villi'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '消化与吸收：食物如何被人体利用' },
      {
        type: 'paragraph',
        text: '食物在消化道内被分解成可以被吸收的小分子物质的过程叫做消化。消化包括物理性消化（咀嚼、胃肠蠕动、胆汁乳化等）和化学性消化（消化酶催化的分解反应）。分解产生的小分子营养物质（葡萄糖、氨基酸、甘油和脂肪酸等）通过消化道壁进入循环系统的过程叫做吸收，小肠是消化和吸收的主要场所，其内表面的环形皱襞和小肠绒毛极大地增加了吸收面积。',
      },
      { type: 'heading', text: '酶是生物催化剂' },
      {
        type: 'paragraph',
        text: '酶是活细胞产生的具有催化作用的有机物，绝大多数是蛋白质。酶通过降低化学反应所需的活化能来加快反应速率，本身在反应前后不发生变化。酶具有高效性（催化效率远高于无机催化剂）和专一性（一种酶只能催化一种或一类化学反应，可用“锁钥模型”解释：底物必须与酶的活性部位互补结合）。',
      },
      {
        type: 'formula',
        latex: '\\text{淀粉} \\xrightarrow{\\text{唾液淀粉酶}} \\text{麦芽糖} \\xrightarrow{\\text{肠、胰麦芽糖酶}} \\text{葡萄糖}',
        caption: '淀粉的化学性消化过程',
      },
      { type: 'heading', text: '温度和 pH 影响酶的活性' },
      {
        type: 'paragraph',
        text: '酶的活性受温度和 pH 影响。在最适温度（人体内约 37 ℃）时酶活性最高；低温只是抑制酶的活性，温度回升后活性可以恢复；高温则会破坏酶的空间结构，使酶永久变性失活，这种失活是不可逆的。不同酶的最适 pH 不同：唾液淀粉酶的最适 pH 约为 7（接近中性），胃蛋白酶的最适 pH 约为 2（强酸性）。pH 过酸或过碱同样会破坏酶的空间结构。',
      },
      {
        type: 'formula',
        latex: 'v = f(T) \\times g(\\mathrm{pH})',
        caption: '仿真模型：相对催化速率 = 温度因子 × pH 因子，两因子均为以最适值为中心的钟形曲线',
      },
      { type: 'heading', text: '主要消化腺与消化液' },
      {
        type: 'list',
        items: [
          '唾液腺分泌唾液，含唾液淀粉酶，在口腔内将淀粉初步分解为麦芽糖。',
          '胃腺分泌胃液，含胃蛋白酶和盐酸，盐酸提供酸性环境并激活胃蛋白酶，初步分解蛋白质。',
          '肝脏分泌胆汁，胆汁不含消化酶，但能把脂肪乳化成微小颗粒，增大与脂肪酶的接触面积（属于物理性消化）。',
          '胰腺分泌胰液、肠腺分泌肠液，含消化糖类、蛋白质和脂肪的多种酶，在小肠内完成主要消化。',
        ],
      },
      { type: 'heading', text: '探究实验与对照思想' },
      {
        type: 'paragraph',
        text: '探究“馒头在口腔中的变化”等实验时，要设置对照并控制单一变量：用 37 ℃ 水浴模拟口腔温度，用碘液检验淀粉是否被分解（淀粉遇碘变蓝）。改变温度或酸碱条件的一组若不变蓝褪色变慢甚至不褪色，说明酶的活性受到了影响。',
      },
    ],
    en: [
      { type: 'heading', text: 'Digestion and absorption: how the body uses food' },
      {
        type: 'paragraph',
        text: 'Digestion is the breakdown of large, insoluble food molecules into small, water-soluble molecules that can be absorbed. It includes mechanical digestion (chewing, churning, emulsification of fats by bile) and chemical digestion (enzyme-catalysed breakdown). The small products — glucose, amino acids, glycerol and fatty acids — are absorbed across the wall of the small intestine into the blood. The inner surface of the small intestine is folded and covered with villi, giving a very large surface area for absorption.',
      },
      { type: 'heading', text: 'Enzymes are biological catalysts' },
      {
        type: 'paragraph',
        text: 'Enzymes are proteins that function as biological catalysts: they speed up chemical reactions by lowering the activation energy and are unchanged by the reaction. Each enzyme is specific to one substrate, explained by the “lock and key” model — the substrate fits the enzyme’s active site, whose shape is determined by the protein’s three-dimensional structure.',
      },
      {
        type: 'formula',
        latex: '\\text{starch} \\xrightarrow{\\text{amylase}} \\text{maltose} \\xrightarrow{\\text{maltase}} \\text{glucose}',
        caption: 'Chemical digestion of starch',
      },
      { type: 'heading', text: 'Temperature and pH affect enzyme activity' },
      {
        type: 'paragraph',
        text: 'Enzyme activity rises with temperature up to an optimum (about 37 °C in humans). Low temperatures only slow the reaction — activity returns on warming. Above the optimum, however, high temperature breaks the bonds holding the enzyme’s shape, the active site is destroyed and the enzyme is denatured — this is permanent and irreversible. Each enzyme also has an optimum pH: salivary amylase works best at about pH 7 (near neutral), while pepsin in the stomach works best at about pH 2 (strongly acidic). Extremes of pH also denature enzymes.',
      },
      {
        type: 'formula',
        latex: 'v = f(T) \\times g(\\mathrm{pH})',
        caption: 'Simulation model: relative rate = temperature factor × pH factor, both bell-shaped curves centred on the optimum',
      },
      { type: 'heading', text: 'Digestive glands and their secretions' },
      {
        type: 'list',
        items: [
          'Salivary glands secrete saliva containing amylase, which begins starch digestion in the mouth.',
          'The stomach wall secretes gastric juice containing the protease pepsin and hydrochloric acid; the acid provides the optimum pH and kills bacteria.',
          'The liver makes bile, which contains no enzymes but emulsifies fats into small droplets, increasing their surface area for lipase action (mechanical digestion).',
          'The pancreas and the small intestine wall secrete juices containing amylase, protease and lipase, completing digestion in the small intestine.',
        ],
      },
      { type: 'heading', text: 'Investigating enzymes: controls and variables' },
      {
        type: 'paragraph',
        text: 'In enzyme experiments, only one variable is changed at a time and a control is included. A water bath at 37 °C models body temperature, and iodine solution tests for starch (blue-black if starch remains). If a tube kept too hot, too cold, or at the wrong pH still turns blue-black, the enzyme’s activity has been reduced or destroyed.',
      },
    ],
  },
  simulation: {
    renderer: 'enzyme-activity',
    params: [
      {
        key: 'temperature',
        label: { zh: '温度 T', en: 'Temperature T' },
        min: 0,
        max: 80,
        step: 1,
        defaultValue: 37,
        unit: '°C',
      },
      {
        key: 'ph',
        label: { zh: '酸碱度 pH', en: 'pH' },
        min: 0,
        max: 14,
        step: 0.5,
        defaultValue: 7,
      },
      {
        key: 'enzymeType',
        label: { zh: '酶种类（0=唾液淀粉酶，1=胃蛋白酶）', en: 'Enzyme (0 = salivary amylase, 1 = pepsin)' },
        min: 0,
        max: 1,
        step: 1,
        defaultValue: 0,
      },
    ],
    liveFormulas: [
      {
        id: 'relative-rate',
        latex: 'v = f(T) \\times g(\\mathrm{pH})',
        substitute: (p) => `v = f(${p.temperature}) \\times g(${p.ph})`,
      },
    ],
  },
  presets: [
    {
      id: 'mouth',
      name: { zh: '口腔环境', en: 'Mouth conditions' },
      description: {
        zh: '37 ℃、pH 7，唾液淀粉酶活性最高，淀粉开始被分解。',
        en: '37 °C, pH 7: salivary amylase at peak activity, starch digestion begins.',
      },
      params: { temperature: 37, ph: 7, enzymeType: 0 },
    },
    {
      id: 'stomach',
      name: { zh: '胃环境', en: 'Stomach conditions' },
      description: {
        zh: '37 ℃、pH 2，胃蛋白酶在强酸环境中活性最高，蛋白质开始被分解。',
        en: '37 °C, pH 2: pepsin at peak activity in strongly acidic conditions, protein digestion begins.',
      },
      params: { temperature: 37, ph: 2, enzymeType: 1 },
    },
    {
      id: 'denature',
      name: { zh: '高温失活', en: 'High-temperature denaturation' },
      description: {
        zh: '70 ℃ 时酶的空间结构被破坏，永久变性失活，冷却后不能恢复。',
        en: 'At 70 °C the enzyme’s shape is destroyed — permanently denatured, and cooling will not restore it.',
      },
      params: { temperature: 70, ph: 7, enzymeType: 0 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '把唾液淀粉酶加入 pH 约为 2 的胃液环境中，其催化淀粉分解的能力会（　）',
        en: 'If salivary amylase is placed in gastric juice at about pH 2, its ability to catalyse the breakdown of starch will',
      },
      options: {
        zh: ['显著增强', '基本不变', '大大降低，几乎丧失活性', '先增强后减弱'],
        en: ['increase greatly', 'stay essentially unchanged', 'drop sharply, losing nearly all activity', 'first rise, then fall'],
      },
      answerIndex: 2,
      explanation: {
        zh: '唾液淀粉酶的最适 pH 约为 7，在 pH 2 的强酸环境中其空间结构被破坏，活性大大降低。选 A、B 是忽视了 pH 对酶活性的影响；选 D 没有依据，过酸条件不会让活性先增强。',
        en: 'Salivary amylase has an optimum pH of about 7; in strongly acidic juice at pH 2 its shape is damaged and activity falls almost to zero. A and B ignore the effect of pH; D has no basis — extreme acid never boosts activity first.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于高温使酶失活，下列说法正确的是（　）',
        en: 'Which statement about the loss of enzyme activity at high temperature is correct?',
      },
      options: {
        zh: [
          '高温使酶的空间结构被破坏，变性后不能恢复，与低温抑制有本质区别',
          '高温只是暂时抑制酶的活性，降温后活性可完全恢复',
          '高温使酶分解成了氨基酸，所以不能再催化反应',
          '高温改变了反应的平衡点，使反应不能进行',
        ],
        en: [
          'High temperature destroys the enzyme’s shape; denaturation is irreversible, fundamentally different from low-temperature inhibition',
          'High temperature only inhibits the enzyme temporarily; activity fully returns on cooling',
          'High temperature digests the enzyme into amino acids, so it can no longer catalyse',
          'High temperature shifts the reaction equilibrium, stopping the reaction',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '高温破坏维持酶空间结构的化学键，活性部位变形，变性是不可逆的；而低温只是降低分子运动速率，升温后活性可恢复，故 B 错。高温下酶并未被“消化”成氨基酸，故 C 错；酶是催化剂，不改变化学平衡，故 D 错。',
        en: 'High temperature breaks the bonds maintaining the enzyme’s shape and destroys the active site — irreversible. Low temperature only slows molecular motion and activity returns on warming (B wrong). The enzyme is not digested into amino acids (C wrong), and catalysts do not change the position of equilibrium (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '胆汁对脂肪的消化作用属于物理性消化，其原因是（　）',
        en: 'The action of bile on fats is classed as mechanical (physical) digestion because',
      },
      options: {
        zh: [
          '胆汁不含消化酶，只是把脂肪乳化成微小颗粒，增大与脂肪酶接触的表面积',
          '胆汁含有脂肪酶，能直接把脂肪分解为甘油和脂肪酸',
          '胆汁是碱性的，能中和胃酸，所以不属于化学消化',
          '胆汁在肝脏中分泌，不在消化道内起作用',
        ],
        en: [
          'bile contains no enzymes; it only emulsifies fats into small droplets, increasing the surface area for lipase',
          'bile contains lipase, which directly breaks fat into glycerol and fatty acids',
          'bile is alkaline and neutralises stomach acid, so it is not chemical digestion',
          'bile is made in the liver and does not act inside the gut',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '胆汁中不含任何消化酶，其乳化作用只是把大的脂肪滴分散成微小颗粒，属于物理性消化；真正把脂肪分解为甘油和脂肪酸的是胰液和肠液中的脂肪酶，故 B 错。中和胃酸与消化分类无关，故 C 错；胆汁经胆管进入小肠发挥作用，故 D 错。',
        en: 'Bile contains no enzymes; emulsification merely disperses large fat globules into tiny droplets — mechanical digestion. Fat is chemically broken down by lipase from the pancreas and intestinal wall (B wrong). Neutralising acid is irrelevant to the classification (C wrong), and bile flows down the bile duct into the small intestine where it acts (D wrong).',
      },
    },
  ],
  kernels: {
    enzyme: enzymeKernel,
  },
  expectedResults: [
    {
      id: 'probe-mouth-optimum',
      description: {
        zh: '口腔环境：37 ℃、pH 7、唾液淀粉酶，相对速率 = 1（最适条件），未变性',
        en: 'Mouth conditions: 37 °C, pH 7, salivary amylase — relative rate = 1 (optimum), not denatured',
      },
      kernel: 'enzyme',
      input: { temperature: 37, ph: 7, enzymeType: 0 },
      expected: { rate: 1, tempFactor: 1, phFactor: 1, denatured: 0 },
    },
    {
      id: 'probe-stomach-optimum',
      description: {
        zh: '胃环境：37 ℃、pH 2、胃蛋白酶，相对速率 = 1（最适条件），未变性',
        en: 'Stomach conditions: 37 °C, pH 2, pepsin — relative rate = 1 (optimum), not denatured',
      },
      kernel: 'enzyme',
      input: { temperature: 37, ph: 2, enzymeType: 1 },
      expected: { rate: 1, tempFactor: 1, phFactor: 1, denatured: 0 },
    },
    {
      id: 'probe-denature-70',
      description: {
        zh: '高温失活：70 ℃ 时 denatured = 1，唾液淀粉酶相对速率仅约 0.0228',
        en: 'Denaturation: at 70 °C denatured = 1 and salivary amylase relative rate is only about 0.0228',
      },
      kernel: 'enzyme',
      input: { temperature: 70, ph: 7, enzymeType: 0 },
      expected: { rate: 0.022794180883612347, tempFactor: 0.022794180883612347, phFactor: 1, denatured: 1 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '馒头本身并不甜，可细细嚼一会儿，甜味就出来了。是谁在你嘴里偷偷把淀粉变成了糖？答案是一种叫做“酶”的生物催化剂。这节课我们就来看看，消化酶是怎么分解食物的，以及它们有多“挑环境”。',
          en: 'A plain steamed bun isn’t sweet — yet chew it for a while and a sweet taste appears. Who quietly turned the starch into sugar inside your mouth? The answer is a biological catalyst called an enzyme. In this lesson we’ll see how digestive enzymes break food down, and just how fussy they are about their surroundings.',
        },
      },
      {
        id: 'concept-enzyme',
        kind: 'concept',
        text: {
          zh: '酶是活细胞产生的催化剂，绝大多数是蛋白质。它的本领是降低反应所需的活化能，让分解反应飞快进行，自己却毫发无损。而且酶非常专一：淀粉酶只管淀粉，蛋白酶只管蛋白质。可以用“锁和钥匙”来理解——底物必须正好嵌入酶的活性部位，形状不合，一切免谈。',
          en: 'Enzymes are catalysts made by living cells, and almost all of them are proteins. Their trick is lowering the activation energy so that breakdown reactions run at full speed, while the enzyme itself comes out unchanged. Enzymes are also highly specific: amylase handles starch, protease handles protein. Think lock and key — the substrate must fit the enzyme’s active site exactly, or nothing happens.',
        },
      },
      {
        id: 'concept-conditions',
        kind: 'concept',
        text: {
          zh: '酶干活很挑条件。温度方面，人体内大约 37 度是黄金温度；放冰箱里它只是“犯懒”，回暖还能恢复，可一旦温度太高，酶的空间结构被彻底破坏，就永久变性失活了，再也救不回来。酸碱度也一样挑剔：唾液淀粉酶喜欢接近中性的 pH 7，胃蛋白酶却在 pH 2 的强酸里如鱼得水——所以唾液淀粉酶进了胃，基本就罢工了。',
          en: 'Enzymes are picky about conditions. For temperature, about 37 degrees is the sweet spot in the human body. Chilling only makes the enzyme sluggish — it recovers on warming — but too much heat wrecks its shape for good: the enzyme is denatured, permanently. pH matters just as much: salivary amylase loves a near-neutral pH 7, while pepsin thrives in the strongly acidic pH 2 of the stomach — which is why salivary amylase all but stops working once it reaches the stomach.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '轮到你了。先在仿真里选唾液淀粉酶，固定 pH 7，把温度从 0 慢慢拉到 80：看速率先升后降，37 度登顶，70 度附近几乎归零——那就是变性。再把酶切成胃蛋白酶，把 pH 拖到 2，看看它的最适环境有多酸。想省事就直接点三个预设：“口腔环境”“胃环境”和“高温失活”，对比三种处境下酶的活性差别。',
          en: 'Now it’s your turn. In the simulation, select salivary amylase, hold pH at 7 and drag the temperature from 0 up to 80: watch the rate rise, peak at 37 degrees, then crash to almost nothing near 70 — that’s denaturation. Then switch to pepsin and slide the pH down to 2 to see just how acidic its happy place is. If you’d rather skip the sliders, tap the three presets — “Mouth conditions”, “Stomach conditions” and “High-temperature denaturation” — and compare how active the enzyme is in each situation.',
        },
      },
      {
        id: 'concept-digestion',
        kind: 'concept',
        text: {
          zh: '放大到整条消化道：唾液淀粉酶在口腔里把淀粉初步分解成麦芽糖；胃里的盐酸配上胃蛋白酶，开始拆解蛋白质；胆汁虽然不含酶，却能把脂肪乳化成小颗粒，帮脂肪酶开路——这属于物理性消化；最后胰液和肠液里的各种酶在小肠完成主力消化，小分子营养穿过小肠绒毛进入血液。',
          en: 'Zoom out to the whole digestive tract: salivary amylase starts starch digestion in the mouth, turning it into maltose; in the stomach, hydrochloric acid teams up with pepsin to attack proteins; bile contains no enzymes but emulsifies fats into tiny droplets, clearing the way for lipase — that’s mechanical digestion; finally, enzymes from the pancreas and intestinal wall finish the job in the small intestine, where the small products are absorbed through the villi into the blood.',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '总结一下：酶是高效的生物催化剂，专一、怕热、挑酸碱；低温只是抑制，高温和过酸过碱会让它永久变性。口腔、胃、小肠各司其职，胆汁负责乳化助攻。记住“最适温度”和“最适 pH”这两条曲线，消化与吸收的考题就难不倒你了。接下来试试小测吧！',
          en: 'To sum up: enzymes are efficient biological catalysts — specific, heat-sensitive and pH-picky. Low temperature only slows them down, but high temperature and extreme pH denature them for good. Mouth, stomach and small intestine each play their part, with bile helping by emulsifying fats. Keep the two curves — optimum temperature and optimum pH — in mind, and digestion questions will hold no fear for you. Now try the quiz!',
        },
      },
    ],
  },
  related: ['igcse-0610-5-1-enzymes', 'igcse-0610-7-1-nutrition', 'bio-human-002'],
};
