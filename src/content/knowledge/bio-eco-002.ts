import { populationKernel } from '../../simulations/kernels/population';
import type { KnowledgePoint } from '../types';

export const bioEco002: KnowledgePoint = {
  id: 'bio-eco-002',
  subject: 'biology',
  title: { zh: '种群数量的增长：J 型曲线与 S 型曲线', en: 'Population Growth: J-shaped and S-shaped Curves' },
  summary: {
    zh: '比较理想条件下的 J 型（指数）增长和资源有限条件下的 S 型（逻辑斯谛）增长，理解内禀增长率 r 与环境容纳量 K 的含义。',
    en: 'Compare exponential (J-shaped) growth under ideal conditions with logistic (S-shaped) growth under limited resources, and understand the intrinsic growth rate r and the carrying capacity K.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch1'],
    igcse: ['0610/19'],
  },
  keywords: {
    zh: ['种群', 'J 型曲线', 'S 型曲线', '指数增长', '逻辑斯谛增长', '环境容纳量', '内禀增长率', '倍增时间'],
    en: ['population', 'exponential growth', 'logistic growth', 'carrying capacity', 'intrinsic growth rate', 'limiting factor', 'J-shaped curve', 'sigmoid curve'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '种群：同种生物个体的总和' },
      {
        type: 'paragraph',
        text: '种群是在一定的空间范围内，同种生物所有个体形成的集合。种群的数量会随时间变化：食物和空间充裕、气候适宜、没有敌害时数量上升；资源紧张、天敌增多时数量下降或趋于稳定。用数学模型描述种群数量随时间的变化，是生态学研究的基本方法。',
      },
      { type: 'heading', text: '理想条件下的增长：J 型曲线（指数增长）' },
      {
        type: 'paragraph',
        text: '在食物和空间条件充裕、气候适宜、没有天敌和其他竞争物种的理想条件下，种群数量每年（每代）以一定的倍数增长，增长不受资源限制，N-t 曲线呈“J”形，称为指数增长。例如实验室培养初期接种的细菌、迁入新环境且缺乏天敌的外来物种。',
      },
      { type: 'formula', latex: 'N_t = N_0\\,e^{rt}', caption: '指数增长：N₀ 为初始数量，r 为内禀增长率，t 为时间' },
      { type: 'heading', text: '资源有限时的增长：S 型曲线（逻辑斯谛增长）' },
      {
        type: 'paragraph',
        text: '自然界的资源和空间总是有限的：随着种群密度增大，食物短缺、空间拥挤、天敌增多、疾病传播，种内斗争加剧，出生率降低、死亡率升高，增长逐渐减慢。当出生率与死亡率相等时，种群数量稳定在环境容纳量 K 附近，N-t 曲线呈“S”形。K 值是在环境条件不受破坏的情况下，一定空间中所能维持的种群最大数量；环境改善 K 增大，环境恶化 K 减小。',
      },
      { type: 'formula', latex: 'N_t = \\dfrac{K}{1 + \\left(\\dfrac{K - N_0}{N_0}\\right)e^{-rt}}', caption: '逻辑斯谛增长：K 为环境容纳量' },
      {
        type: 'list',
        items: [
          'J 型曲线没有上限，只是理想化模型；自然界中任何种群的增长最终都受资源限制。',
          'S 型曲线在 N = K/2 时增长速率最大，渔业捕捞后保持种群在 K/2 附近可获得最大持续产量。',
          'r 越大增长越快，种群数量翻一倍所需的时间（倍增时间）为 t_d = ln2 / r。',
          '种群数量在 K 值附近波动，是负反馈调节的结果，不是恒定不动。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Population: all individuals of one species' },
      {
        type: 'paragraph',
        text: 'A population is a group of organisms of the same species living in the same area at the same time. Population size changes over time: it rises when food and space are abundant, the climate is favourable and predators are absent; it falls or levels off when resources run short or predators increase. Describing these changes with mathematical models is a basic method in ecology.',
      },
      { type: 'heading', text: 'Growth under ideal conditions: the J curve (exponential growth)' },
      {
        type: 'paragraph',
        text: 'Under ideal conditions — unlimited food and space, a favourable climate, no predators or competitors — a population multiplies by a constant factor each generation, with no resource limitation. The N–t curve is J-shaped, called exponential growth. Examples include bacteria freshly inoculated into culture medium and introduced species colonising a new habitat without natural enemies.',
      },
      { type: 'formula', latex: 'N_t = N_0\\,e^{rt}', caption: 'Exponential growth: N₀ is the initial size, r the intrinsic growth rate, t the time' },
      { type: 'heading', text: 'Growth with limited resources: the S curve (logistic growth)' },
      {
        type: 'paragraph',
        text: 'In nature, resources and space are always limited. As population density rises, food shortage, crowding, more predators and spreading disease reduce the birth rate and raise the death rate, so growth slows down. When the birth rate equals the death rate, the population stabilises around the carrying capacity K — the maximum population size that an environment can sustain indefinitely — and the N–t curve is S-shaped (sigmoid). Improving the environment raises K; degrading it lowers K.',
      },
      { type: 'formula', latex: 'N_t = \\dfrac{K}{1 + \\left(\\dfrac{K - N_0}{N_0}\\right)e^{-rt}}', caption: 'Logistic growth: K is the carrying capacity' },
      {
        type: 'list',
        items: [
          'The J curve has no upper limit and is only an idealised model; every real population is eventually limited by resources (limiting factors).',
          'On the S curve the growth rate is greatest at N = K/2; keeping a fish stock near K/2 gives the maximum sustainable yield.',
          'The larger r, the faster the growth; the doubling time is t_d = ln 2 / r.',
          'A population fluctuates around K as a result of negative feedback — it is not perfectly constant.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'population-growth',
    params: [
      {
        key: 'model',
        label: { zh: '增长模型（0 = J 型，1 = S 型）', en: 'Growth model (0 = J curve, 1 = S curve)' },
        min: 0,
        max: 1,
        step: 1,
        defaultValue: 1,
      },
      {
        key: 'r',
        label: { zh: '内禀增长率 r', en: 'Intrinsic growth rate r' },
        min: 0.05,
        max: 1,
        step: 0.05,
        defaultValue: 0.3,
      },
      {
        key: 'k',
        label: { zh: '环境容纳量 K', en: 'Carrying capacity K' },
        min: 100,
        max: 1000,
        step: 50,
        defaultValue: 500,
      },
      {
        key: 'n0',
        label: { zh: '初始种群数量 N₀', en: 'Initial population size N₀' },
        min: 5,
        max: 100,
        step: 5,
        defaultValue: 10,
      },
    ],
    liveFormulas: [
      {
        id: 'exponential',
        latex: 'N_t = N_0\\,e^{rt}',
        substitute: (p) => `N_t = ${p.n0}\\,e^{${p.r}\\,t}`,
      },
      {
        id: 'logistic',
        latex: 'N_t = \\dfrac{K}{1 + \\left(\\dfrac{K - N_0}{N_0}\\right)e^{-rt}}',
        substitute: (p) =>
          `N_t = \\dfrac{${p.k}}{1 + \\dfrac{${p.k} - ${p.n0}}{${p.n0}}\\,e^{-${p.r}\\,t}}`,
      },
    ],
  },
  presets: [
    {
      id: 'ideal-j-curve',
      name: { zh: '理想条件 J 型', en: 'Ideal conditions (J curve)' },
      description: {
        zh: '食物空间充裕、无天敌，种群以 r = 0.5 指数增长，数量没有上限。',
        en: 'Abundant food and space, no predators: the population grows exponentially at r = 0.5 with no upper limit.',
      },
      params: { model: 0, r: 0.5, k: 500, n0: 10 },
    },
    {
      id: 'limited-s-curve',
      name: { zh: '有限资源 S 型', en: 'Limited resources (S curve)' },
      description: {
        zh: '资源有限，种群数量增长逐渐减慢，最终稳定在 K = 500 附近。',
        en: 'With limited resources, growth slows down and the population stabilises around K = 500.',
      },
      params: { model: 1, r: 0.3, k: 500, n0: 10 },
    },
    {
      id: 'high-growth-rate',
      name: { zh: '高增长率', en: 'High growth rate' },
      description: {
        zh: 'r = 0.8 时种群增长极快，S 型曲线迅速逼近环境容纳量。',
        en: 'At r = 0.8 the population grows very fast and the S curve approaches the carrying capacity quickly.',
      },
      params: { model: 1, r: 0.8, k: 500, n0: 10 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '在 S 型增长曲线中，种群增长速率最大时，种群数量约为（　）',
        en: 'On an S-shaped (logistic) growth curve, the population growth rate is greatest when the population size is about',
      },
      options: {
        zh: ['K', 'K/2', 'N₀', '2K'],
        en: ['K', 'K/2', 'N₀', '2K'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'S 型曲线在 N = K/2 处斜率（增长速率）最大，此时资源尚充足而个体数量已较多。N = K 时出生率等于死亡率，增长速率为零（排除 A）；N₀ 时基数太小（排除 C）；种群数量不会超过 K，更不可能达 2K（排除 D）。',
        en: 'The S curve has its steepest gradient (maximum growth rate) at N = K/2, where resources are still plentiful and the population is already large. At N = K the birth rate equals the death rate, so the growth rate is zero (A wrong); at N₀ the population base is too small (C wrong); the population cannot exceed K, let alone reach 2K (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列哪组条件最可能使种群数量呈 J 型（指数）增长？（　）',
        en: 'Under which set of conditions is a population most likely to show J-shaped (exponential) growth?',
      },
      options: {
        zh: [
          '食物和空间充裕、气候适宜、没有天敌',
          '食物有限、天敌数量多',
          '种群密度很大、种内斗争激烈',
          '环境容纳量很小的稳定环境',
        ],
        en: [
          'Abundant food and space, favourable climate, no predators',
          'Limited food and many predators',
          'Very high population density with intense intraspecific competition',
          'A stable environment with a very small carrying capacity',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: 'J 型增长只发生在资源不受限制的理想条件下。食物有限、天敌多、种内斗争激烈都会使增长减慢而呈 S 型（排除 B、C）；环境容纳量小意味着增长很快受到限制，同样呈 S 型（排除 D）。',
        en: 'Exponential growth only occurs under ideal conditions with unlimited resources. Limited food, many predators and intense competition all slow growth down into an S curve (B and C wrong); a small carrying capacity means growth is soon limited, again giving an S curve (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于环境容纳量（K 值），下列说法正确的是（　）',
        en: 'Which statement about the carrying capacity (K) is correct?',
      },
      options: {
        zh: [
          'K 值是一个固定不变的常数，与环境无关',
          'K 值是环境条件不受破坏时，一定空间中所能维持的种群最大数量',
          '种群数量一旦达到 K 值就恒定不变',
          'K 值只取决于种群的初始数量 N₀',
        ],
        en: [
          'K is a fixed constant independent of the environment',
          'K is the maximum population size that a given environment can sustain while its conditions remain undamaged',
          'Once the population reaches K it stays perfectly constant',
          'K depends only on the initial population size N₀',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: 'K 值由环境资源决定：环境改善 K 增大，环境恶化 K 减小，并非固定常数（排除 A、D）；种群数量达到 K 后仍在其附近上下波动，而不是绝对不变（排除 C）。',
        en: 'K is set by environmental resources: it rises when the environment improves and falls when it degrades, so it is not a fixed constant (A and D wrong); after reaching K the population still fluctuates around it rather than staying perfectly constant (C wrong).',
      },
    },
  ],
  kernels: {
    population: populationKernel,
  },
  expectedResults: [
    {
      id: 'probe-exponential-j',
      description: {
        zh: 'J 型：N₀ = 10、r = 0.5，t = 5 时 N = 10·e^2.5 ≈ 121.82，倍增时间 ln2/0.5 ≈ 1.386',
        en: 'J curve: N₀ = 10, r = 0.5, at t = 5, N = 10·e^2.5 ≈ 121.82; doubling time ln 2/0.5 ≈ 1.386',
      },
      kernel: 'population',
      input: { t: 5, model: 0, r: 0.5, k: 500, n0: 10 },
      expected: { N: 121.82493960703474, doublingTime: 1.3862943611198906 },
    },
    {
      id: 'probe-logistic-mid',
      description: {
        zh: 'S 型：N₀ = 10、K = 500、r = 0.3，t = 10 时 N = 500/(1+49e^−3) ≈ 145.37',
        en: 'S curve: N₀ = 10, K = 500, r = 0.3, at t = 10, N = 500/(1+49e^−3) ≈ 145.37',
      },
      kernel: 'population',
      input: { t: 10, model: 1, r: 0.3, k: 500, n0: 10 },
      expected: { N: 145.3671623448454, doublingTime: 2.3104906018664844 },
    },
    {
      id: 'probe-logistic-saturated',
      description: {
        zh: 'S 型长期：t = 100 时种群数量稳定在 K = 500 附近',
        en: 'S curve in the long run: at t = 100 the population settles near K = 500',
      },
      kernel: 'population',
      input: { t: 100, model: 1, r: 0.3, k: 500, n0: 10 },
      expected: { N: 500, doublingTime: 2.3104906018664844 },
      tolerance: 1e-5,
    },
  ],
};
