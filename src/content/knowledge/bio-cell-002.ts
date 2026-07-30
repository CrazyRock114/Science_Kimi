import { diffusionKernel } from '../../simulations/kernels/diffusion';
import type { KnowledgePoint } from '../types';

export const bioCell002: KnowledgePoint = {
  id: 'bio-cell-002',
  subject: 'biology',
  title: { zh: '细胞膜与物质进出：扩散作用', en: 'Cell Membrane and Movement of Substances: Diffusion' },
  summary: {
    zh: '理解细胞膜控制物质进出的功能，认识扩散是物质从高浓度区域向低浓度区域的自发移动，并探究温度对扩散速率的影响。',
    en: 'Understand how the cell membrane controls movement into and out of cells, learn that diffusion is the net movement of particles from a region of higher concentration to lower concentration, and investigate how temperature affects the rate of diffusion.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch2', 'pep-bio-s1/ch4'],
    igcse: ['0610/3'],
  },
  keywords: {
    zh: ['扩散', '细胞膜', '选择透过性', '浓度梯度', '被动运输', '温度'],
    en: ['diffusion', 'cell membrane', 'partially permeable', 'concentration gradient', 'passive transport', 'temperature'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '细胞膜控制物质的进出' },
      {
        type: 'paragraph',
        text: '细胞膜是一层选择透过性膜：它能让细胞生活需要的物质（如水、氧气、葡萄糖）进入细胞，把细胞产生的废物（如二氧化碳、尿素）排出细胞，同时阻挡不需要的物质随意进出。细胞膜把细胞内部与外部环境分隔开，使细胞拥有一个相对稳定的内部环境。',
      },
      { type: 'heading', text: '什么是扩散' },
      {
        type: 'paragraph',
        text: '扩散是指溶质分子（或气体分子）从高浓度区域向低浓度区域的净移动，直到各处浓度相等、达到动态平衡为止。扩散不需要细胞提供能量，属于被动运输，其动力来自分子本身的随机热运动。',
      },
      {
        type: 'formula',
        latex: 'L(t) = \\dfrac{n_0}{2}\\left(1 + e^{-t/\\tau}\\right)',
        caption: '双室扩散模型：左侧粒子数随时间指数趋近于平衡值 n₀/2',
      },
      {
        type: 'paragraph',
        text: '达到动态平衡时，两侧浓度相等，粒子仍在不停地往返运动，只是两个方向上通过的粒子数相等，宏观上看不到净变化。上面的仿真中，左右两室体积相等，平衡时每侧粒子数各为初始值的一半。',
      },
      { type: 'heading', text: '影响扩散速率的因素' },
      {
        type: 'list',
        items: [
          '浓度差：浓度差（浓度梯度）越大，扩散越快。',
          '温度：温度越高，分子热运动越剧烈，扩散越快。把红墨水分别滴入冷水和热水中，热水里扩散明显更快。',
          '扩散距离：距离越短扩散越快，所以细胞都很小，物质容易快速到达各处。',
        ],
      },
      {
        type: 'paragraph',
        text: '扩散在生命活动中无处不在：肺泡中的氧气扩散进入血液，组织细胞产生的二氧化碳扩散出去；植物叶片气孔处的气体交换也靠扩散进行。氧气、二氧化碳等小分子可以直接穿过细胞膜扩散进出细胞。',
      },
      {
        type: 'list',
        items: [
          '扩散方向只取决于浓度差，总是“高浓度 → 低浓度”，直到平衡。',
          '扩散不消耗能量，与主动运输（逆浓度梯度、消耗能量）不同。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'The cell membrane controls movement of substances' },
      {
        type: 'paragraph',
        text: 'The cell membrane is partially permeable: it lets in substances the cell needs (water, oxygen, glucose), lets out waste products (carbon dioxide, urea), and keeps unwanted substances from passing freely. It separates the cell contents from the surroundings, keeping the internal environment relatively stable.',
      },
      { type: 'heading', text: 'What is diffusion?' },
      {
        type: 'paragraph',
        text: 'Diffusion is the net movement of particles from a region of their higher concentration to a region of their lower concentration, down a concentration gradient, until the concentration is equal everywhere — a dynamic equilibrium. Diffusion requires no energy from the cell; it is a form of passive transport powered by the random kinetic energy of the particles themselves.',
      },
      {
        type: 'formula',
        latex: 'L(t) = \\dfrac{n_0}{2}\\left(1 + e^{-t/\\tau}\\right)',
        caption: 'Two-chamber diffusion model: the left-side particle count approaches the equilibrium n₀/2 exponentially',
      },
      {
        type: 'paragraph',
        text: 'At dynamic equilibrium the concentrations are equal; particles still move randomly in both directions, but equal numbers cross each way so there is no net change. In the simulation both chambers have equal volumes, so each side ends up with half of the initial particles.',
      },
      { type: 'heading', text: 'Factors affecting the rate of diffusion' },
      {
        type: 'list',
        items: [
          'Concentration gradient: the steeper the gradient, the faster the diffusion.',
          'Temperature: higher temperature gives particles more kinetic energy, so diffusion is faster — ink spreads visibly faster in warm water than in ice-cold water.',
          'Diffusion distance: shorter distances mean faster diffusion, which is why cells are small.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Diffusion is everywhere in living organisms: oxygen diffuses from the alveoli into the blood while carbon dioxide diffuses out; gas exchange at leaf stomata also relies on diffusion. Small molecules such as oxygen and carbon dioxide diffuse directly across the cell membrane.',
      },
      {
        type: 'list',
        items: [
          'The direction of diffusion depends only on the concentration gradient — always from higher to lower concentration until equilibrium.',
          'Diffusion uses no energy, unlike active transport, which moves substances against the gradient and requires energy.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'diffusion',
    params: [
      {
        key: 'temperature',
        label: { zh: '温度', en: 'Temperature' },
        min: 0,
        max: 60,
        step: 1,
        defaultValue: 20,
        unit: '°C',
      },
      {
        key: 'initialCount',
        label: { zh: '初始粒子数', en: 'Initial particle count' },
        min: 20,
        max: 200,
        step: 10,
        defaultValue: 100,
        unit: '个',
      },
    ],
    liveFormulas: [
      {
        id: 'equilibrium',
        latex: 'N_{eq} = \\dfrac{n_0}{2}',
        substitute: (p) => `N_{eq} = \\dfrac{${p.initialCount}}{2} = ${p.initialCount / 2}`,
      },
    ],
  },
  presets: [
    {
      id: 'ice-water',
      name: { zh: '冰水', en: 'Ice water' },
      description: {
        zh: '0 °C 时分子热运动最慢，扩散速率最低。',
        en: 'At 0 °C particles move slowest, so diffusion is at its slowest.',
      },
      params: { temperature: 0, initialCount: 100 },
    },
    {
      id: 'room-temperature',
      name: { zh: '室温', en: 'Room temperature' },
      description: {
        zh: '20 °C 室温下，粒子以正常速率扩散直至平衡。',
        en: 'At 20 °C, particles diffuse at a moderate rate until equilibrium.',
      },
      params: { temperature: 20, initialCount: 100 },
    },
    {
      id: 'warm-water',
      name: { zh: '温水', en: 'Warm water' },
      description: {
        zh: '40 °C 时分子热运动加快，扩散明显变快。',
        en: 'At 40 °C particles have more kinetic energy and diffuse noticeably faster.',
      },
      params: { temperature: 40, initialCount: 100 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '关于扩散，下列说法正确的是（　）',
        en: 'Which statement about diffusion is correct?',
      },
      options: {
        zh: [
          '扩散是物质从低浓度区域向高浓度区域的移动',
          '扩散需要细胞消耗能量',
          '扩散是物质从高浓度区域向低浓度区域的净移动',
          '达到平衡后粒子就停止运动了',
        ],
        en: [
          'Diffusion moves substances from low to high concentration',
          'Diffusion requires energy from the cell',
          'Diffusion is the net movement of particles from higher to lower concentration',
          'Particles stop moving once equilibrium is reached',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '扩散的方向总是从高浓度到低浓度，A 错；扩散靠分子自身的热运动，不消耗能量，B 错；平衡时粒子仍不停地双向运动，只是净移动为零，D 错。',
        en: 'Diffusion always runs down the gradient, from higher to lower concentration (A wrong); it is driven by the particles’ own kinetic energy and uses no cellular energy (B wrong); at equilibrium particles keep moving both ways with zero net movement (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '把一滴红墨水分别滴入 0 °C 的冰水和 40 °C 的温水中，观察到的现象及原因是（　）',
        en: 'A drop of red ink is added to ice water at 0 °C and warm water at 40 °C. What is observed, and why?',
      },
      options: {
        zh: [
          '冰水中扩散更快，因为低温使分子更活跃',
          '温水中扩散更快，因为温度高分子热运动更剧烈',
          '两杯水中扩散一样快，扩散与温度无关',
          '温水中不扩散，因为高温使分子停止运动',
        ],
        en: [
          'Faster in ice water, because low temperature activates the molecules',
          'Faster in warm water, because higher temperature means more vigorous particle motion',
          'Equally fast in both, since diffusion does not depend on temperature',
          'No diffusion in warm water, because heat stops the molecules',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '温度越高，分子的无规则热运动越剧烈，扩散速率越快，所以温水中红墨水扩散更快。A、D 对分子运动与温度的关系理解错误，C 忽略了温度这一影响因素。',
        en: 'Higher temperature gives particles more kinetic energy, so diffusion is faster — the ink spreads faster in warm water. A and D get the temperature–motion relationship backwards, and C ignores the effect of temperature.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '肺泡中的氧气能进入血液，而血液中的二氧化碳能进入肺泡，这两种气体交换的原理是（　）',
        en: 'Oxygen moves from the alveoli into the blood while carbon dioxide moves the opposite way. The principle behind both exchanges is',
      },
      options: {
        zh: ['扩散', '主动运输', '渗透', '蒸腾作用'],
        en: ['diffusion', 'active transport', 'osmosis', 'transpiration'],
      },
      answerIndex: 0,
      explanation: {
        zh: '氧气在肺泡中浓度高于血液，二氧化碳在血液中浓度高于肺泡，两种气体各自顺浓度梯度扩散。它们的方向不同，是因为各自的浓度梯度方向不同，并不矛盾。主动运输需耗能且逆浓度梯度；渗透专指水分子的扩散；蒸腾作用是植物散失水分的过程。',
        en: 'Oxygen is more concentrated in the alveoli, carbon dioxide more concentrated in the blood, so each gas diffuses down its own concentration gradient. The opposite directions are not contradictory — each gas follows its own gradient. Active transport uses energy against the gradient; osmosis refers only to water; transpiration is water loss from plants.',
      },
    },
  ],
  kernels: {
    diffusion: diffusionKernel,
  },
  expectedResults: [
    {
      id: 'probe-initial',
      description: {
        zh: '初始时刻 t = 0：100 个粒子全在左侧，右侧为 0，平衡值 50',
        en: 'At t = 0: all 100 particles on the left, 0 on the right, equilibrium 50',
      },
      kernel: 'diffusion',
      input: { t: 0, n0: 100 },
      expected: { left: 100, right: 0, equilibrium: 50 },
    },
    {
      id: 'probe-one-tau',
      description: {
        zh: 't = 2（一个时间常数 τ）：左侧约 68.39，右侧约 31.61',
        en: 'At t = 2 (one time constant τ): left ≈ 68.39, right ≈ 31.61',
      },
      kernel: 'diffusion',
      input: { t: 2, n0: 100 },
      expected: { left: 68.39397205857212, right: 31.606027941427882, equilibrium: 50 },
    },
    {
      id: 'probe-near-equilibrium',
      description: {
        zh: 'n₀ = 200、t = 6（3 个时间常数）：两侧接近平衡值 100',
        en: 'n₀ = 200, t = 6 (three time constants): both sides approach the equilibrium 100',
      },
      kernel: 'diffusion',
      input: { t: 6, n0: 200 },
      expected: { left: 104.9787068367864, right: 95.0212931632136, equilibrium: 100 },
    },
  ],
};
