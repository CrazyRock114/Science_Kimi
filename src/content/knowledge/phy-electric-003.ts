import { circuitsKernel } from '../../simulations/kernels/circuits';
import type { KnowledgePoint } from '../types';

export const phyElectric003: KnowledgePoint = {
  id: 'phy-electric-003',
  subject: 'physics',
  title: { zh: '串联电路', en: 'Series Circuits' },
  summary: {
    zh: '认识串联电路的连接特点，掌握串联电路中电流、电压的规律和等效电阻，理解串联分压。',
    en: 'Learn the connection features of series circuits, the rules for current, voltage and equivalent resistance, and how voltage divides in series.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j9/ch3', 'pep-phy-j9/ch5', 'pep-phy-s3/ch3'],
    igcse: ['0625/4.3'],
  },
  keywords: {
    zh: ['串联电路', '串联分压', '等效电阻', '电流处处相等', '总电压', '分压'],
    en: ['series circuit', 'potential divider', 'equivalent resistance', 'same current', 'total voltage', 'voltage division'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '串联电路的连接特点' },
      {
        type: 'paragraph',
        text: '把电路元件逐个顺次连接起来组成的电路叫串联电路。串联电路中电流只有一条路径：任何一处断开，整个电路都没有电流，所有用电器都不能工作；一个开关接在任何位置都能控制整个电路。各用电器互相影响，一个用电器损坏（断路），其余用电器也不能工作。',
      },
      { type: 'formula', latex: 'I = I_1 = I_2', caption: '串联电路中各处电流相等' },
      { type: 'formula', latex: 'U = U_1 + U_2', caption: '串联电路的总电压等于各部分电压之和' },
      { type: 'formula', latex: 'R = R_1 + R_2', caption: '串联电路的等效（总）电阻等于各电阻之和' },
      { type: 'heading', text: '串联分压规律' },
      {
        type: 'paragraph',
        text: '串联电路中电流处处相等，由 U = IR 可知，各电阻两端的电压与其阻值成正比：U₁ : U₂ = R₁ : R₂。电阻越大，分得的电压越多，这就是串联分压。利用这一规律可以制作分压器，也可以给电流表串联大电阻改装成电压表。',
      },
      {
        type: 'list',
        items: [
          '总电阻比任何一个分电阻都大，相当于增加了导体的长度。',
          '两个相同电阻 R 串联，总电阻为 2R，每个电阻各分得一半电压。',
          '应用：节日小彩灯串联；滑动变阻器与用电器串联可调节电流。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'How series circuits are connected' },
      {
        type: 'paragraph',
        text: 'In a series circuit the components are connected one after another, so there is only one path for the current. A break anywhere stops the current everywhere — all components go off together. A single switch anywhere in the loop controls the whole circuit, and a failed (open) component disables all the others.',
      },
      { type: 'formula', latex: 'I = I_1 = I_2', caption: 'The current is the same at every point in a series circuit' },
      { type: 'formula', latex: 'V = V_1 + V_2', caption: 'The total voltage equals the sum of the voltages across each component' },
      { type: 'formula', latex: 'R = R_1 + R_2', caption: 'The equivalent (total) resistance is the sum of the individual resistances' },
      { type: 'heading', text: 'Voltage division in series' },
      {
        type: 'paragraph',
        text: 'Because the same current flows through every resistor, V = IR shows that the voltage across each resistor is proportional to its resistance: V₁ : V₂ = R₁ : R₂. The larger resistor takes the larger share of the voltage — this is voltage division, used in potential dividers and in converting a meter into a voltmeter by adding a large series resistor.',
      },
      {
        type: 'list',
        items: [
          'The total resistance is larger than any single resistor, like making the conductor longer.',
          'Two equal resistors R in series give 2R, and each takes exactly half the total voltage.',
          'Applications: strings of decorative lights in series; a rheostat in series to adjust the current.',
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
        id: 'series-resistance',
        latex: 'R = R_1 + R_2',
        substitute: (p) => `R = ${p.r1} + ${p.r2} = ${p.r1 + p.r2}\\,\\Omega`,
      },
      {
        id: 'series-current',
        latex: 'I = \\dfrac{U}{R_1 + R_2}',
        substitute: (p) =>
          `I = \\dfrac{${p.voltage}}{${p.r1}+${p.r2}} = ${(p.voltage / (p.r1 + p.r2)).toFixed(2)}\\,\\mathrm{A}`,
      },
    ],
  },
  presets: [
    {
      id: 'series-lab',
      name: { zh: '实验串联电路', en: 'Lab series circuit' },
      description: {
        zh: '6 V 电源，10 Ω 与 20 Ω 串联，观察分压与电阻成正比。',
        en: 'A 6 V supply with 10 Ω and 20 Ω in series — see voltage divide in proportion to resistance.',
      },
      params: { voltage: 6, r1: 10, r2: 20, circuitType: 0 },
    },
    {
      id: 'series-equal',
      name: { zh: '等阻串联分压', en: 'Equal resistors in series' },
      description: {
        zh: '12 V 电源，两个 25 Ω 电阻串联，各分得一半电压。',
        en: 'A 12 V supply with two 25 Ω resistors in series, each taking half the voltage.',
      },
      params: { voltage: 12, r1: 25, r2: 25, circuitType: 0 },
    },
    {
      id: 'series-limit',
      name: { zh: '串联限流', en: 'Series current limiting' },
      description: {
        zh: '24 V 电源，40 Ω 与 8 Ω 串联，大电阻限制电流并分得大部分电压。',
        en: 'A 24 V supply with 40 Ω and 8 Ω in series — the large resistor limits current and takes most of the voltage.',
      },
      params: { voltage: 24, r1: 40, r2: 8, circuitType: 0 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '10 Ω 和 20 Ω 的两个电阻串联接在 6 V 电源两端，电路中的电流和 20 Ω 电阻两端的电压分别是（　）',
        en: 'A 10 Ω and a 20 Ω resistor are connected in series across a 6 V supply. What are the circuit current and the voltage across the 20 Ω resistor?',
      },
      options: {
        zh: ['0.2 A，2 V', '0.2 A，4 V', '0.3 A，4 V', '0.6 A，6 V'],
        en: ['0.2 A, 2 V', '0.2 A, 4 V', '0.3 A, 4 V', '0.6 A, 6 V'],
      },
      answerIndex: 1,
      explanation: {
        zh: '总电阻 R = 10 + 20 = 30 Ω，电流 I = U/R = 6 ÷ 30 = 0.2 A；20 Ω 电阻两端电压 U₂ = IR₂ = 0.2 × 20 = 4 V。选 2 V 是把分压算到了 10 Ω 电阻上；0.3 A 是只用了 20 Ω 作总电阻。',
        en: 'Total resistance R = 10 + 20 = 30 Ω, so I = V/R = 6 ÷ 30 = 0.2 A; the voltage across the 20 Ω resistor is V₂ = IR₂ = 0.2 × 20 = 4 V. Choosing 2 V assigns the share to the 10 Ω resistor; 0.3 A uses only 20 Ω as the total.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '两个电阻串联，R₁ = 2R₂，则它们两端的电压关系是（　）',
        en: 'Two resistors in series satisfy R₁ = 2R₂. What is the relation between the voltages across them?',
      },
      options: {
        zh: ['U₁ = U₂', 'U₁ = 2U₂', 'U₂ = 2U₁', 'U₁ = 4U₂'],
        en: ['V₁ = V₂', 'V₁ = 2V₂', 'V₂ = 2V₁', 'V₁ = 4V₂'],
      },
      answerIndex: 1,
      explanation: {
        zh: '串联电路电流相等，由 U = IR 得电压与电阻成正比，故 U₁ : U₂ = R₁ : R₂ = 2 : 1，即 U₁ = 2U₂。认为电压相等是混淆了并联电路的电压规律。',
        en: 'In series the current is the same, so by V = IR the voltage is proportional to resistance: V₁ : V₂ = R₁ : R₂ = 2 : 1, i.e. V₁ = 2V₂. Equal voltages would be the rule for parallel circuits, not series.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '两个小灯泡串联接在电源上，其中一只灯丝烧断后，另一只灯泡（　）',
        en: 'Two bulbs are connected in series to a supply. If the filament of one bulb burns out, the other bulb',
      },
      options: {
        zh: ['变得更亮', '亮度不变', '也熄灭', '变得更暗但仍发光'],
        en: ['becomes brighter', 'keeps the same brightness', 'also goes out', 'dims but still glows'],
      },
      answerIndex: 2,
      explanation: {
        zh: '串联电路电流只有一条路径，一处断开整个电路断路，没有电流通过，另一只灯泡也熄灭。“变亮”或“变暗但仍发光”是误认为电流仍能绕路通过，那是并联电路才可能发生的情况。',
        en: 'A series circuit has only one current path; a break anywhere makes the whole circuit open, so no current flows and the other bulb also goes out. “Brighter” or “dimmer but glowing” wrongly assumes current can detour — that is only possible in parallel.',
      },
    },
  ],
  kernels: {
    circuits: circuitsKernel,
  },
  expectedResults: [
    {
      id: 'probe-series-divide',
      description: {
        zh: '串联分压：6 V，10 Ω + 20 Ω，R = 30 Ω，I = 0.2 A，U₁ = 2 V，U₂ = 4 V',
        en: 'Series division: 6 V across 10 Ω + 20 Ω: R = 30 Ω, I = 0.2 A, V₁ = 2 V, V₂ = 4 V',
      },
      kernel: 'circuits',
      input: { voltage: 6, r1: 10, r2: 20, circuitType: 0 },
      expected: { rEq: 30, i1: 0.2, i2: 0.2, iTotal: 0.2, v1: 2, v2: 4 },
    },
    {
      id: 'probe-series-equal',
      description: {
        zh: '等阻串联：12 V，30 Ω + 30 Ω，各分压 6 V，I = 0.2 A',
        en: 'Equal resistors: 12 V across 30 Ω + 30 Ω: each takes 6 V, I = 0.2 A',
      },
      kernel: 'circuits',
      input: { voltage: 12, r1: 30, r2: 30, circuitType: 0 },
      expected: { rEq: 60, iTotal: 0.2, v1: 6, v2: 6 },
    },
    {
      id: 'probe-series-limit',
      description: {
        zh: '串联限流：24 V，4 Ω + 8 Ω，R = 12 Ω，I = 2 A，U₁ = 8 V，U₂ = 16 V，P = 48 W',
        en: 'Current limiting: 24 V across 4 Ω + 8 Ω: R = 12 Ω, I = 2 A, V₁ = 8 V, V₂ = 16 V, P = 48 W',
      },
      kernel: 'circuits',
      input: { voltage: 24, r1: 4, r2: 8, circuitType: 0 },
      expected: { rEq: 12, iTotal: 2, v1: 8, v2: 16, p: 48 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '节日里挂一串小彩灯，只要有一颗烧断，整串全灭。为什么它们这么“同生共死”？因为它们串联在一起——电流只有一条路可走。这节课我们就把串联电路的规律摸透。',
          en: 'Hang up a string of decorative lights, and if a single bulb burns out, the whole string goes dark. Why do they live and die together? Because they\'re wired in series — the current has only one path. In this lesson we\'ll pin down the rules of series circuits.',
        },
      },
      {
        id: 'concept-connection',
        kind: 'concept',
        text: {
          zh: '把元件一个接一个顺次连接起来，就是串联。整条电路电流只有一条路径：任何一处断开，处处都没有电流。所以一个开关不管接在哪个位置，都能控制整个电路；一个用电器损坏，其他用电器全部停工。',
          en: 'Connect components one after another in a single loop, and that\'s a series circuit. The current has exactly one path: break it anywhere and the current stops everywhere. So a single switch, wherever you put it, controls the whole circuit — and one failed component shuts down all the rest.',
        },
      },
      {
        id: 'concept-rules',
        kind: 'concept',
        text: {
          zh: '串联有三条铁律：电流处处相等；总电压等于各部分电压之和；总电阻等于各电阻之和。把欧姆定律一代入，就得到一个特别有用的推论：电流相同，电压按电阻大小分配——电阻越大，分走的电压越多。这就是串联分压。',
          en: 'Series circuits obey three iron rules: the current is the same everywhere; the total voltage equals the sum of the parts; and the total resistance equals the sum of the resistors. Substitute Ohm\'s law and you get a very handy corollary: with the same current, voltage is shared in proportion to resistance — the bigger the resistor, the bigger its share. That\'s voltage division.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '打开仿真，先确认电路类型拨在串联（0）。默认 6 V 电源接 10 Ω 和 20 Ω：总电阻 30 Ω，电流 0.2 A，10 Ω 分走 2 V，20 Ω 分走 4 V——电压之比正好等于电阻之比 1:2。点“等阻串联分压”预设：两个 25 Ω 各分一半电压。再看“串联限流”：40 Ω 的大电阻拿走大部分电压，也把电流压了下去。最后你自己拖一拖 R₂ 的滑块，盯着两个电压读数，看分压怎么跟着电阻变。',
          en: 'Open the simulation and make sure the circuit type is set to series (0). By default a 6 V supply feeds 10 Ω and 20 Ω: total resistance 30 Ω, current 0.2 A, and the voltages are 2 V and 4 V — exactly the 1:2 ratio of the resistances. Tap the "equal resistors in series" preset: two 25 Ω resistors each take half the voltage. Then look at "series current limiting": the big 40 Ω resistor grabs most of the voltage and chokes the current down. Finally drag the R₂ slider yourself and watch the two voltage readings follow the resistance.',
        },
      },
      {
        id: 'concept-applications',
        kind: 'concept',
        text: {
          zh: '串联分压的用处很大：滑动变阻器和用电器串联，就能调节电路中的电流；给灵敏电流表串联一个大电阻，它就摇身一变成了电压表。但也要记住串联的软肋——一处断开，全路瘫痪。',
          en: 'Voltage division earns its keep: a rheostat in series with a component adjusts the current; add a large resistor in series with a sensitive meter and it transforms into a voltmeter. But keep the weakness of series in mind too — one break, and the whole circuit is down.',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '回顾一下：串联一条路径，电流处处相等，电压按电阻分配，电阻越串越大。下一课我们会看到并联——那里完全是另一番景象。先去小测里练练手吧。',
          en: 'To recap: one path in series, the same current everywhere, voltage shared in proportion to resistance, and resistances that add up. Next lesson brings parallel circuits — a completely different landscape. Warm up with the quiz first.',
        },
      },
    ],
  },
  related: ['phy-electric-004', 'phy-electric-002', 'igcse-0625-4-3-2-series-parallel'],
};
