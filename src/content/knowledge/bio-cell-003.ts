import { osmosisKernel } from '../../simulations/kernels/osmosis';
import type { KnowledgePoint } from '../types';

export const bioCell003: KnowledgePoint = {
  id: 'bio-cell-003',
  subject: 'biology',
  title: { zh: '渗透作用与植物细胞的吸水和失水', en: 'Osmosis and Water Uptake and Loss in Plant Cells' },
  summary: {
    zh: '理解渗透是水分子通过半透膜从低浓度溶液向高浓度溶液的扩散，探究外界溶液浓度如何决定植物细胞吸水、失水乃至发生质壁分离。',
    en: 'Understand osmosis as the diffusion of water across a partially permeable membrane from a dilute to a concentrated solution, and investigate how the external concentration determines whether a plant cell gains water, loses water, or undergoes plasmolysis.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch3', 'pep-bio-s1/ch4'],
    igcse: ['0610/3'],
  },
  keywords: {
    zh: ['渗透作用', '半透膜', '水势', '细胞液浓度', '质壁分离', '吸水', '失水'],
    en: ['osmosis', 'partially permeable membrane', 'water potential', 'cell sap concentration', 'plasmolysis', 'turgid', 'flaccid'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是渗透作用' },
      {
        type: 'paragraph',
        text: '渗透是指水分子（或其他溶剂分子）通过半透膜，从低浓度溶液（水势高）一侧向高浓度溶液（水势低）一侧的扩散。发生渗透需要两个条件：一是有一层半透膜，二是膜两侧存在浓度差。细胞膜就是一层选择透过性膜，液泡膜和细胞膜以及两层膜之间的细胞质合称原生质层，相当于一层半透膜。',
      },
      {
        type: 'formula',
        latex: 'c_{\\mathrm{out}} < c_{\\mathrm{in}} \\Rightarrow \\text{water in}, \\quad c_{\\mathrm{out}} > c_{\\mathrm{in}} \\Rightarrow \\text{water out}',
        caption: '水分进出方向由外界溶液与细胞液的浓度差决定：外浓内稀吸水，外稀内浓失水',
      },
      { type: 'heading', text: '植物细胞的吸水与失水' },
      {
        type: 'list',
        items: [
          '外界溶液浓度 < 细胞液浓度：细胞吸水。植物细胞有细胞壁保护，吸水后膨胀变硬（挺立），但不会涨破。',
          '外界溶液浓度 = 细胞液浓度：水分进出达到动态平衡，细胞形态基本不变。',
          '外界溶液浓度 > 细胞液浓度：细胞失水，液泡缩小，原生质层与细胞壁逐渐分离，这就是质壁分离。',
        ],
      },
      {
        type: 'paragraph',
        text: '质壁分离只发生在成熟的植物活细胞中：它需要中央大液泡和弹性较小的细胞壁。把发生质壁分离的细胞重新放入清水中，细胞重新吸水，原生质层恢复原状，称为质壁分离复原——这可以证明细胞是活的。',
      },
      { type: 'heading', text: '水分移动的方向：从水势高到水势低' },
      {
        type: 'paragraph',
        text: '溶液越浓，水势越低；纯水的水势最高。水分子总是顺着水势梯度，从水势高（稀溶液）的地方向水势低（浓溶液）的地方净移动。这与“水向浓度高处渗”是同一事实的两种表述，不要混淆“溶质浓度”和“水势”的高低方向。',
      },
      { type: 'heading', text: '生活中的渗透现象' },
      {
        type: 'list',
        items: [
          '一次施肥过多会使土壤溶液浓度过高，根毛细胞不但不能吸水反而失水，造成“烧苗”。',
          '用糖拌西红柿、用盐腌黄瓜，细胞失水，盘中出现汁液——这是渗透失水的结果。',
          '萎蔫的蔬菜泡在清水中会重新变得硬挺，因为细胞吸水膨胀。',
          '输液用的 0.9% 生理盐水与人体细胞液浓度相近（等渗），可避免血细胞吸水涨破或失水皱缩。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'What is osmosis?' },
      {
        type: 'paragraph',
        text: 'Osmosis is the diffusion of water molecules from a region of higher water potential (a dilute solution) to a region of lower water potential (a concentrated solution) across a partially permeable membrane. It needs two conditions: a partially permeable membrane and a concentration difference across it. In a plant cell, the cell surface membrane, the vacuole membrane (tonoplast) and the cytoplasm between them together act as the partially permeable layer.',
      },
      {
        type: 'formula',
        latex: 'c_{\\mathrm{out}} < c_{\\mathrm{in}} \\Rightarrow \\text{water in}, \\quad c_{\\mathrm{out}} > c_{\\mathrm{in}} \\Rightarrow \\text{water out}',
        caption: 'The direction of water movement is set by the concentration gradient',
      },
      { type: 'heading', text: 'Water uptake and loss in plant cells' },
      {
        type: 'list',
        items: [
          'External solution more dilute than the cell sap: water enters. The cell wall resists the pressure, so the cell becomes firm (turgid) but does not burst.',
          'External concentration equal to the cell sap: water moves in and out at equal rates — dynamic equilibrium, no change in appearance.',
          'External solution more concentrated than the cell sap: water leaves, the vacuole shrinks and the cytoplasm pulls away from the cell wall — this is plasmolysis.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Plasmolysis only occurs in mature living plant cells, which have a large central vacuole and a relatively inelastic wall. A plasmolysed cell placed back into pure water takes up water and recovers — deplasmolysis — which is evidence that the cell is still alive.',
      },
      { type: 'heading', text: 'Water moves from high to low water potential' },
      {
        type: 'paragraph',
        text: 'The more concentrated a solution, the lower its water potential; pure water has the highest potential. Water always moves down the water potential gradient, from the dilute side to the concentrated side. Saying “water moves towards the more concentrated solution” describes the same fact — be careful not to confuse solute concentration with water potential.',
      },
      { type: 'heading', text: 'Osmosis in everyday life' },
      {
        type: 'list',
        items: [
          'Over-fertilising makes the soil solution too concentrated, so root hair cells lose water instead of absorbing it — the plant wilts (“fertiliser burn”).',
          'Sprinkling sugar on tomatoes or salt on cucumber draws water out of the cells by osmosis, and juice collects in the dish.',
          'Wilted vegetables placed in pure water firm up again as their cells take in water and become turgid.',
          'The 0.9% saline used for intravenous drips is isotonic with human cells, preventing blood cells from bursting or shrinking.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'osmosis',
    params: [
      {
        key: 'internalConc',
        label: { zh: '细胞液浓度', en: 'Cell sap concentration' },
        min: 0.1,
        max: 1,
        step: 0.01,
        defaultValue: 0.5,
        unit: 'mol/L',
      },
      {
        key: 'externalConc',
        label: { zh: '外界溶液浓度', en: 'External solution concentration' },
        min: 0,
        max: 1,
        step: 0.01,
        defaultValue: 0.3,
        unit: 'mol/L',
      },
    ],
    liveFormulas: [
      {
        id: 'conc-gradient',
        latex: '\\Delta c = c_{\\text{外}} - c_{\\text{内}}',
        substitute: (p) =>
          `\\Delta c = ${p.externalConc} - ${p.internalConc} = ${(p.externalConc - p.internalConc).toFixed(2)}\\,\\mathrm{mol/L}`,
      },
    ],
  },
  presets: [
    {
      id: 'pure-water',
      name: { zh: '清水', en: 'Pure water' },
      description: {
        zh: '外界浓度远低于细胞液，细胞吸水膨胀、变得硬挺。',
        en: 'The external solution is far more dilute than the cell sap, so the cell takes in water and becomes turgid.',
      },
      params: { internalConc: 0.5, externalConc: 0.05 },
    },
    {
      id: 'isotonic',
      name: { zh: '等渗溶液', en: 'Isotonic solution' },
      description: {
        zh: '外界浓度与细胞液相等，水分进出平衡，细胞形态不变。',
        en: 'The external concentration equals the cell sap — water moves in and out at equal rates, no change.',
      },
      params: { internalConc: 0.5, externalConc: 0.5 },
    },
    {
      id: 'concentrated-salt',
      name: { zh: '浓盐水', en: 'Concentrated salt solution' },
      description: {
        zh: '外界浓度远高于细胞液，细胞失水，发生质壁分离。',
        en: 'The external solution is far more concentrated, so the cell loses water and undergoes plasmolysis.',
      },
      params: { internalConc: 0.5, externalConc: 0.9 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '将成熟的植物细胞放入 0.9 mol/L 的浓盐水中（细胞液浓度约 0.5 mol/L），一段时间后细胞会（　）',
        en: 'A mature plant cell (cell sap about 0.5 mol/L) is placed in 0.9 mol/L salt solution. After some time the cell will',
      },
      options: {
        zh: [
          '吸水膨胀，液泡变大',
          '失水，发生质壁分离',
          '水分进出平衡，形态不变',
          '吸水涨破',
        ],
        en: [
          'take in water and the vacuole swells',
          'lose water and undergo plasmolysis',
          'stay unchanged as water exchange balances',
          'take in water and burst',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '外界溶液浓度（0.9 mol/L）大于细胞液浓度（0.5 mol/L），细胞失水，液泡缩小，原生质层与细胞壁分离，即质壁分离。A、C 方向判断错误；植物细胞有细胞壁，即使吸水也不会涨破，D 错。',
        en: 'The external solution (0.9 mol/L) is more concentrated than the cell sap (0.5 mol/L), so water leaves the cell, the vacuole shrinks and the cytoplasm pulls away from the wall — plasmolysis. A and C misjudge the direction; a plant cell never bursts because of its cell wall (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '一次施肥过多会造成农作物萎蔫（“烧苗”），其原因是（　）',
        en: 'Applying too much fertiliser at once makes crops wilt (“fertiliser burn”) because',
      },
      options: {
        zh: [
          '肥料直接杀死了根毛细胞',
          '土壤溶液浓度过高，根毛细胞失水',
          '根毛细胞吸水过多而涨破',
          '肥料堵塞了土壤孔隙，根无法呼吸',
        ],
        en: [
          'the fertiliser directly kills the root hair cells',
          'the soil solution becomes too concentrated, so root hair cells lose water',
          'root hair cells take in too much water and burst',
          'the fertiliser blocks air spaces so roots cannot respire',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '施肥过多使土壤溶液浓度大于根毛细胞液浓度，水分从细胞流向土壤，根不但吸不到水反而失水，植株萎蔫。A、D 不是渗透原因；植物细胞有细胞壁不会涨破，且实际情况是失水而非吸水，C 错。',
        en: 'Excess fertiliser makes the soil solution more concentrated than the cell sap of root hairs, so water flows out of the cells into the soil and the plant wilts. A and D are not osmotic explanations; plant cells cannot burst (they have walls), and the actual flow is water out, not in (C wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于渗透作用中水分子的移动，下列说法正确的是（　）',
        en: 'Which statement about water movement in osmosis is correct?',
      },
      options: {
        zh: [
          '水分子只从低浓度溶液一侧向高浓度溶液一侧移动',
          '水分子从高浓度溶液一侧向低浓度溶液一侧净移动',
          '水分子从水势高的一侧向水势低的一侧净移动',
          '达到平衡后水分子停止通过半透膜',
        ],
        en: [
          'Water molecules only move from the dilute side to the concentrated side',
          'The net movement of water is from the concentrated side to the dilute side',
          'The net movement of water is from higher water potential to lower water potential',
          'Water molecules stop crossing the membrane once equilibrium is reached',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '水分子的净移动方向是从水势高（稀溶液）向水势低（浓溶液）。A 错在“只”——水分子其实双向运动，只是从稀到浓的更多，讲的是净移动；B 方向说反了；平衡时水分子仍双向通过膜，速率相等，D 错。',
        en: 'Net water movement is from higher water potential (dilute) to lower water potential (concentrated). A is wrong about “only” — molecules move both ways, just faster from the dilute side; B reverses the direction; at equilibrium molecules still cross the membrane at equal rates (D wrong).',
      },
    },
  ],
  kernels: {
    osmosis: osmosisKernel,
  },
  expectedResults: [
    {
      id: 'probe-pure-water',
      description: {
        zh: '清水（外 0.05 < 内 0.5）：水流入细胞，flow = 1，无质壁分离',
        en: 'Pure water (0.05 < 0.5): water flows in, flow = 1, no plasmolysis',
      },
      kernel: 'osmosis',
      input: { internalConc: 0.5, externalConc: 0.05 },
      expected: { flow: 1, plasmolysis: 0, concGradient: -0.45 },
    },
    {
      id: 'probe-isotonic',
      description: {
        zh: '等渗（外 = 内 = 0.5）：水分进出平衡，flow = 0',
        en: 'Isotonic (0.5 = 0.5): no net water movement, flow = 0',
      },
      kernel: 'osmosis',
      input: { internalConc: 0.5, externalConc: 0.5 },
      expected: { flow: 0, plasmolysis: 0, concGradient: 0 },
    },
    {
      id: 'probe-plasmolysis',
      description: {
        zh: '浓盐水（外 0.9 > 内 0.5）：水流出，flow = -1，质壁分离程度 0.8',
        en: 'Concentrated salt (0.9 > 0.5): water flows out, flow = −1, plasmolysis degree 0.8',
      },
      kernel: 'osmosis',
      input: { internalConc: 0.5, externalConc: 0.9 },
      expected: { flow: -1, plasmolysis: 0.8, concGradient: 0.4 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '凉拌黄瓜撒上盐，过一会儿盘子里就汪出一层汁；蔫掉的青菜泡进清水，又能支棱起来。这一出一进的都是水，幕后导演就是渗透作用。这节课我们搞清楚：水到底听谁的指挥，往哪个方向走。',
          en: 'Salt a plate of sliced cucumber and a pool of juice appears; soak a wilted vegetable in fresh water and it firms up again. Water moving out, water moving in — both are directed by osmosis. In this lesson we work out exactly who gives water its marching orders.',
        },
      },
      {
        id: 'concept-osmosis',
        kind: 'concept',
        text: {
          zh: '渗透是扩散的特例：水分子通过半透膜，从稀溶液一侧向浓溶液一侧净移动——用更专业的说法，是从水势高的一侧向水势低的一侧。注意这个方向总让初学者犯晕：水往“浓”处走，因为浓溶液里水分子相对更少。发生渗透只需两个条件：一层半透膜，加上膜两侧的浓度差。植物细胞的原生质层就扮演着这层膜的角色。',
          en: 'Osmosis is a special case of diffusion: water molecules make a net movement across a partially permeable membrane from the dilute side to the concentrated side — in more precise language, from higher water potential to lower. That direction confuses everyone at first: water moves towards the concentrated solution because that is where water molecules are relatively scarcer. Osmosis needs just two things: a partially permeable membrane and a concentration difference across it. In a plant cell, that membrane role is played by the cell surface membrane, the tonoplast and the cytoplasm between them.',
        },
      },
      {
        id: 'concept-plasmolysis',
        kind: 'concept',
        text: {
          zh: '外界浓度决定细胞的命运。外界比细胞液稀，细胞吸水，液泡胀大，细胞壁顶住压力，细胞变得硬挺；两边一样浓，水分进出平衡，什么变化也看不到；外界比细胞液浓，麻烦来了——细胞失水，液泡收缩，原生质层和细胞壁逐渐分家，这就是质壁分离。好在把细胞放回清水，它还能吸水复原，这也是检验细胞死活的办法。',
          en: 'The external concentration decides the cell’s fate. If the surroundings are more dilute than the cell sap, water enters, the vacuole swells and the wall resists the pressure, leaving the cell firm and turgid. If the concentrations match, water flows balance and nothing visibly changes. But if the surroundings are more concentrated, trouble: the cell loses water, the vacuole shrinks and the cell contents pull away from the wall — plasmolysis. Return the cell to pure water and it recovers, which doubles as a test of whether the cell is still alive.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '轮到你了。仿真里细胞液浓度默认 0.5。先把外界浓度滑块拖到 0.05 附近，看细胞吸水膨胀；再拖到 0.5 的等渗点，观察水分进出刚好打平；最后狠心拖到 0.9，看液泡缩小、原生质层从细胞壁上剥离的过程。“清水”“等渗溶液”“浓盐水”三个预设正好对应这三种命运，点一遍对比最直观。',
          en: 'Now it’s your turn. The cell sap starts at 0.5 in the simulation. Drag the external concentration down to about 0.05 and watch the cell swell as water rushes in; move it to the isotonic point at 0.5 and see the flows exactly balance; then push it up to 0.9 and watch the vacuole shrink as the cell contents peel away from the wall. The “Pure water”, “Isotonic solution” and “Concentrated salt solution” presets line up these three fates — click through them for the clearest comparison.',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '回顾一下：渗透是水跨半透膜、从水势高处向水势低处的净移动；外稀吸水、等渗平衡、外浓失水，失水过度就质壁分离。烧苗、腌菜出水、输液用 0.9% 生理盐水，都是同一个原理。做完小测，你可以接着去看细胞怎样靠分裂增殖。',
          en: 'Let’s recap: osmosis is the net movement of water across a partially permeable membrane, from high water potential to low; dilute surroundings bring water in, isotonic ones balance the flow, concentrated ones pull water out — and too much loss means plasmolysis. Fertiliser burn, salted vegetables weeping juice, and the 0.9% saline in IV drips all follow the same principle. After the quiz, move on to how cells multiply by division.',
        },
      },
    ],
  },
  related: ['bio-cell-002', 'bio-plant-003', 'igcse-0610-3-2-osmosis', 'igcse-0610-3-1-transport'],
};
