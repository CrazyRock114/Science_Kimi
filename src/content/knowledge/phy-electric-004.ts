import { circuitsKernel } from '../../simulations/kernels/circuits';
import type { KnowledgePoint } from '../types';

export const phyElectric004: KnowledgePoint = {
  id: 'phy-electric-004',
  subject: 'physics',
  title: { zh: '并联电路', en: 'Parallel Circuits' },
  summary: {
    zh: '认识并联电路的连接特点，掌握并联电路中电压、电流的规律和等效电阻，理解并联分流。',
    en: 'Learn the connection features of parallel circuits, the rules for voltage, current and equivalent resistance, and how current divides in parallel.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j9/ch3', 'pep-phy-j9/ch5', 'pep-phy-s3/ch3'],
    igcse: ['0625/4.3'],
  },
  keywords: {
    zh: ['并联电路', '并联分流', '等效电阻', '支路', '干路', '总电流', '家庭电路'],
    en: ['parallel circuit', 'current division', 'equivalent resistance', 'branch', 'main circuit', 'total current', 'mains wiring'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '并联电路的连接特点' },
      {
        type: 'paragraph',
        text: '把电路元件并列地接在电路的两个点之间组成的电路叫并联电路。电流有两条（或多条）路径：电源到分支点之间的部分是干路，分支点之后的各条路径是支路。各支路用电器独立工作、互不影响——一条支路断开，其他支路仍有电流。干路开关控制整个电路，支路开关只控制所在支路。',
      },
      { type: 'formula', latex: 'U = U_1 = U_2', caption: '并联电路中各支路两端的电压相等，都等于电源电压' },
      { type: 'formula', latex: 'I = I_1 + I_2', caption: '并联电路干路电流等于各支路电流之和' },
      { type: 'formula', latex: '\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}', caption: '并联电路等效电阻的倒数等于各支路电阻倒数之和' },
      { type: 'heading', text: '并联分流规律' },
      {
        type: 'paragraph',
        text: '并联电路中各支路电压相等，由 I = U/R 可知，各支路电流与其电阻成反比：I₁ : I₂ = R₂ : R₁。电阻越小，分得的电流越多，这就是并联分流。并联的总电阻比任何一条支路的电阻都小，相当于增大了导体的横截面积；两个电阻并联时 R = R₁R₂/(R₁+R₂)。',
      },
      {
        type: 'list',
        items: [
          '家庭电路中各用电器都是并联的：各自获得 220 V 额定电压，且独立工作互不影响。',
          '两个相同电阻 R 并联，总电阻为 R/2，各支路电流相等。',
          '并联的支路越多，总电阻越小，干路电流越大，要注意导线过载。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'How parallel circuits are connected' },
      {
        type: 'paragraph',
        text: 'In a parallel circuit the components are connected side by side between the same two points, so there are two or more paths for the current. The part from the source to the junction is the main circuit; each path after the junction is a branch. Each branch works independently — if one branch is broken, current still flows in the others. A switch in the main circuit controls everything; a switch in a branch controls only that branch.',
      },
      { type: 'formula', latex: 'V = V_1 = V_2', caption: 'The voltage across each branch is the same and equals the supply voltage' },
      { type: 'formula', latex: 'I = I_1 + I_2', caption: 'The total current equals the sum of the branch currents' },
      { type: 'formula', latex: '\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}', caption: 'The reciprocal of the equivalent resistance equals the sum of the reciprocals' },
      { type: 'heading', text: 'Current division in parallel' },
      {
        type: 'paragraph',
        text: 'Since every branch has the same voltage, I = V/R shows that branch currents are inversely proportional to their resistances: I₁ : I₂ = R₂ : R₁. The smaller resistor carries the larger share of current — this is current division. The equivalent resistance is smaller than any branch resistance, like increasing the conductor’s cross-section; for two resistors, R = R₁R₂/(R₁+R₂).',
      },
      {
        type: 'list',
        items: [
          'Household appliances are wired in parallel: each receives the full 220 V and works independently.',
          'Two equal resistors R in parallel give R/2, with equal currents in the branches.',
          'The more branches added, the smaller the total resistance and the larger the main current — beware of overloading wires.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'series-parallel',
    params: [
      {
        key: 'voltage',
        label: { zh: '电源电压 U', en: 'Supply voltage U' },
        min: 1,
        max: 24,
        step: 0.5,
        defaultValue: 6,
        unit: 'V',
      },
      {
        key: 'r1',
        label: { zh: '电阻 R₁', en: 'Resistance R₁' },
        min: 1,
        max: 50,
        step: 1,
        defaultValue: 10,
        unit: 'Ω',
      },
      {
        key: 'r2',
        label: { zh: '电阻 R₂', en: 'Resistance R₂' },
        min: 1,
        max: 50,
        step: 1,
        defaultValue: 20,
        unit: 'Ω',
      },
      {
        key: 'circuitType',
        label: { zh: '电路类型（0=串联 1=并联）', en: 'Circuit type (0 = series, 1 = parallel)' },
        min: 0,
        max: 1,
        step: 1,
        defaultValue: 0,
      },
    ],
    liveFormulas: [
      {
        id: 'parallel-resistance',
        latex: 'R = \\dfrac{R_1 R_2}{R_1 + R_2}',
        substitute: (p) =>
          `R = \\dfrac{${p.r1}\\times ${p.r2}}{${p.r1}+${p.r2}} = ${((p.r1 * p.r2) / (p.r1 + p.r2)).toFixed(2)}\\,\\Omega`,
      },
      {
        id: 'parallel-currents',
        latex: 'I_1 = \\dfrac{U}{R_1},\\quad I_2 = \\dfrac{U}{R_2}',
        substitute: (p) =>
          `I_1 = \\dfrac{${p.voltage}}{${p.r1}} = ${(p.voltage / p.r1).toFixed(2)}\\,\\mathrm{A},\\quad I_2 = \\dfrac{${p.voltage}}{${p.r2}} = ${(p.voltage / p.r2).toFixed(2)}\\,\\mathrm{A}`,
      },
    ],
  },
  presets: [
    {
      id: 'parallel-lab',
      name: { zh: '实验并联电路', en: 'Lab parallel circuit' },
      description: {
        zh: '6 V 电源，10 Ω 与 20 Ω 并联，观察分流与电阻成反比。',
        en: 'A 6 V supply with 10 Ω and 20 Ω in parallel — see current divide in inverse proportion to resistance.',
      },
      params: { voltage: 6, r1: 10, r2: 20, circuitType: 1 },
    },
    {
      id: 'parallel-equal',
      name: { zh: '等阻并联分流', en: 'Equal resistors in parallel' },
      description: {
        zh: '12 V 电源，两个 12 Ω 电阻并联，各支路电流相等，总电阻减半。',
        en: 'A 12 V supply with two 12 Ω resistors in parallel — equal branch currents, halved total resistance.',
      },
      params: { voltage: 12, r1: 12, r2: 12, circuitType: 1 },
    },
    {
      id: 'parallel-high-current',
      name: { zh: '多支路大电流', en: 'High-current branches' },
      description: {
        zh: '24 V 电源，4 Ω 与 8 Ω 并联，干路电流达 9 A——体会并联过载的风险。',
        en: 'A 24 V supply with 4 Ω and 8 Ω in parallel — the main current reaches 9 A; feel the overload risk of parallel circuits.',
      },
      params: { voltage: 24, r1: 4, r2: 8, circuitType: 1 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '10 Ω 和 20 Ω 的两个电阻并联接在 6 V 电源两端，干路电流是（　）',
        en: 'A 10 Ω and a 20 Ω resistor are connected in parallel across a 6 V supply. What is the total current?',
      },
      options: {
        zh: ['0.2 A', '0.6 A', '0.9 A', '1.2 A'],
        en: ['0.2 A', '0.6 A', '0.9 A', '1.2 A'],
      },
      answerIndex: 2,
      explanation: {
        zh: '各支路电压都等于 6 V：I₁ = 6 ÷ 10 = 0.6 A，I₂ = 6 ÷ 20 = 0.3 A，干路电流 I = 0.6 + 0.3 = 0.9 A。0.2 A 是误用串联算法 6 ÷ 30；0.6 A 只算了一条支路。',
        en: 'Each branch has the full 6 V: I₁ = 6 ÷ 10 = 0.6 A, I₂ = 6 ÷ 20 = 0.3 A, so the total current is 0.6 + 0.3 = 0.9 A. 0.2 A wrongly uses the series formula 6 ÷ 30; 0.6 A counts only one branch.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '10 Ω 和 20 Ω 的两个电阻并联，其等效电阻（　）',
        en: 'A 10 Ω and a 20 Ω resistor in parallel have an equivalent resistance of',
      },
      options: {
        zh: ['30 Ω', '15 Ω', '约 6.7 Ω', '7.5 Ω'],
        en: ['30 Ω', '15 Ω', 'about 6.7 Ω', '7.5 Ω'],
      },
      answerIndex: 2,
      explanation: {
        zh: '由 R = R₁R₂/(R₁+R₂) = 10 × 20 ÷ 30 ≈ 6.7 Ω，小于任一支路电阻。30 Ω 是误用串联求和；15 Ω 是误取平均值；7.5 Ω 无依据。',
        en: 'Using R = R₁R₂/(R₁+R₂) = 10 × 20 ÷ 30 ≈ 6.7 Ω, smaller than either branch. 30 Ω wrongly adds them as in series; 15 Ω wrongly takes the average; 7.5 Ω has no basis.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '家庭电路中的电灯、电视机、电冰箱都是并联的，主要原因是（　）',
        en: 'Lamps, TVs and refrigerators in household circuits are all connected in parallel mainly because',
      },
      options: {
        zh: [
          '并联可以节省电能',
          '并联时各用电器都能获得 220 V 电压，且独立工作互不影响',
          '并联时电路中的总电阻更大，更安全',
          '并联时通过各用电器的电流都相等',
        ],
        en: [
          'parallel connection saves energy',
          'in parallel each appliance gets the full 220 V and works independently without affecting the others',
          'in parallel the total resistance is larger, which is safer',
          'in parallel the current through every appliance is equal',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '并联电路各支路电压相等，都等于电源电压 220 V，正是用电器的额定电压；且各支路独立工作，关掉电视不影响电灯。并联支路越多总电阻越小，故 C 错；各支路电流与电阻成反比，不一定相等，故 D 错；并联本身并不省电，故 A 错。',
        en: 'In parallel every branch has the same voltage — the full 220 V mains, which is the appliances’ rated voltage — and each branch works independently: switching off the TV does not affect the lamp. More branches means smaller total resistance (C wrong); branch currents are inversely proportional to resistance, not necessarily equal (D wrong); parallel wiring itself saves no energy (A wrong).',
      },
    },
  ],
  kernels: {
    circuits: circuitsKernel,
  },
  expectedResults: [
    {
      id: 'probe-parallel-divide',
      description: {
        zh: '并联分流：6 V，10 Ω ∥ 20 Ω，R ≈ 6.67 Ω，I₁ = 0.6 A，I₂ = 0.3 A，I = 0.9 A',
        en: 'Current division: 6 V across 10 Ω ∥ 20 Ω: R ≈ 6.67 Ω, I₁ = 0.6 A, I₂ = 0.3 A, I = 0.9 A',
      },
      kernel: 'circuits',
      input: { voltage: 6, r1: 10, r2: 20, circuitType: 1 },
      expected: { rEq: 6.666666666666667, i1: 0.6, i2: 0.3, iTotal: 0.9, v1: 6, v2: 6 },
    },
    {
      id: 'probe-parallel-split',
      description: {
        zh: '并联分流：12 V，6 Ω ∥ 12 Ω，R = 4 Ω，I₁ = 2 A，I₂ = 1 A，P = 36 W',
        en: 'Current division: 12 V across 6 Ω ∥ 12 Ω: R = 4 Ω, I₁ = 2 A, I₂ = 1 A, P = 36 W',
      },
      kernel: 'circuits',
      input: { voltage: 12, r1: 6, r2: 12, circuitType: 1 },
      expected: { rEq: 4, i1: 2, i2: 1, iTotal: 3, p: 36 },
    },
    {
      id: 'probe-parallel-equal',
      description: {
        zh: '等阻并联：24 V，8 Ω ∥ 8 Ω，R = 4 Ω，I₁ = I₂ = 3 A，I = 6 A，P = 144 W',
        en: 'Equal branches: 24 V across 8 Ω ∥ 8 Ω: R = 4 Ω, I₁ = I₂ = 3 A, I = 6 A, P = 144 W',
      },
      kernel: 'circuits',
      input: { voltage: 24, r1: 8, r2: 8, circuitType: 1 },
      expected: { rEq: 4, i1: 3, i2: 3, iTotal: 6, p: 144 },
    },
  ],
};
