import { current, power } from '../../simulations/kernels/circuits';
import type { KernelFn, KnowledgePoint } from '../types';

/** 电功率探针内核：输入 voltage/resistance，输出电流与电功率 */
const powerKernel: KernelFn = (input) => {
  const { voltage, resistance } = input;
  return {
    current: current(voltage, resistance),
    power: power(voltage, resistance),
  };
};

export const phyPower001: KnowledgePoint = {
  id: 'phy-power-001',
  subject: 'physics',
  title: { zh: '电功与电功率', en: 'Electrical Work and Power' },
  summary: {
    zh: '理解电功 W = UIt 与电功率 P = UI 的意义和单位，认识千瓦时（度），并学会用电功率公式进行计算。',
    en: 'Understand electrical work W = VIt and electrical power P = IV with their units, meet the kilowatt-hour, and use the power equations in calculations.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch6'],
    igcse: ['0625/4.2.5', '0625/1.7.4'],
  },
  keywords: {
    zh: ['电功', '电功率', '焦耳', '瓦特', '千瓦时', '度', 'P=UI', 'W=Pt'],
    en: ['electrical work', 'electrical power', 'joule', 'watt', 'kilowatt-hour', 'P = IV', 'E = Pt'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '知道电功是电能转化为其他形式能的量度，会用 W = UIt 计算电功。',
          '理解电功率表示电流做功的快慢，会用 P = W/t 和 P = UI 及其变形式 P = U²/R、P = I²R 进行计算。',
          '说出电功的单位焦耳（J）与千瓦时（kW·h，俗称“度”）的换算关系，并能进行简单的电费估算。',
        ],
      },
      { type: 'heading', text: '电功：电流做了多少功' },
      {
        type: 'paragraph',
        text: '电流通过用电器时，电能转化为其他形式的能——灯泡发光发热、电动机转动、电热器升温。电流做了多少功，就有多少电能发生了转化。研究表明，电功的大小跟电压、电流和通电时间成正比。',
      },
      { type: 'formula', latex: 'W = UIt', caption: '电功：W 为电功（J），U 为电压（V），I 为电流（A），t 为通电时间（s）' },
      { type: 'heading', text: '电功率：电流做功有多快' },
      {
        type: 'paragraph',
        text: '不同的用电器，在相同时间内消耗的电能往往不同。电功率表示电流做功的快慢，等于电功与时间之比。电功率越大，用电器在相同时间内消耗的电能越多。把 W = UIt 代入 P = W/t，就得到最常用的计算式 P = UI。',
      },
      {
        type: 'formula',
        latex: 'P = \\dfrac{W}{t} = UI',
        caption: '电功率：P 为功率（W），1 W = 1 J/s = 1 V·A',
      },
      {
        type: 'paragraph',
        text: '结合欧姆定律 I = U/R，还可以得到两个变形式：P = U²/R 和 P = I²R。前者在电压相同时（如并联、家庭电路）比较功率很方便；后者在电流相同时（如串联）很方便。注意：这两个变形式只对纯电阻用电器成立。',
      },
      { type: 'heading', text: '千瓦时：一度电是多少' },
      {
        type: 'paragraph',
        text: '焦耳作为家庭用电的计量单位太小，实际使用千瓦时（kW·h），俗称“度”。1 千瓦的用电器工作 1 小时消耗的电能就是 1 千瓦时。电能表的读数单位就是千瓦时，电费按消耗的千瓦时数计算。',
      },
      {
        type: 'formula',
        latex: '1\\ \\mathrm{kW\\cdot h} = 1000\\ \\mathrm{W} \\times 3600\\ \\mathrm{s} = 3.6 \\times 10^{6}\\ \\mathrm{J}',
        caption: '1 度电 = 1 kW·h = 3.6×10⁶ J',
      },
      {
        type: 'list',
        items: [
          '已知 U、I 求 P：P = UI，如 220 V、0.5 A 的用电器功率为 110 W。',
          '已知 P、t 求 W：W = Pt，如 1000 W 的电热器工作 1 h 耗电 1 kW·h。',
          '电压相同的用电器比较功率：用 P = U²/R，电阻越小功率越大。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'electrical work（电功）：电流通过用电器所做的功，W = UIt，单位焦耳（J）。',
          'electrical power（电功率）：电流做功的快慢，P = W/t = UI，单位瓦特（W）。',
          'kilowatt-hour（千瓦时）：电能的常用单位，1 kW·h = 3.6×10⁶ J，俗称“度”。',
          'watt（瓦特）：功率单位，1 W = 1 J/s；常用倍数单位千瓦（kW），1 kW = 10³ W。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Know that electrical work measures the energy transferred by a circuit, and calculate it with W = VIt.',
          'Understand that power is the rate of doing work, and calculate with P = W/t and P = IV, plus the rearrangements P = V²/R and P = I²R.',
          'State the units joule (J) and kilowatt-hour (kW h), convert between them, and estimate the cost of running an appliance.',
        ],
      },
      { type: 'heading', text: 'Electrical work: how much energy is transferred' },
      {
        type: 'paragraph',
        text: 'When a current passes through an appliance, electrical energy is transferred to other forms — light and heat in a lamp, motion in a motor, heating in an element. The work done by the current equals the energy transferred. The work is proportional to the voltage, the current and the time for which it flows.',
      },
      { type: 'formula', latex: 'W = VIt', caption: 'Electrical work: W in joules (J), V in volts (V), I in amperes (A), t in seconds (s)' },
      { type: 'heading', text: 'Electrical power: how fast the work is done' },
      {
        type: 'paragraph',
        text: 'Different appliances transfer energy at different rates. Power is the rate of doing work — the work divided by the time. A more powerful appliance transfers more energy each second. Substituting W = VIt into P = W/t gives the most-used form, P = IV.',
      },
      {
        type: 'formula',
        latex: 'P = \\dfrac{W}{t} = IV',
        caption: 'Electrical power: P in watts (W), with 1 W = 1 J/s = 1 V·A',
      },
      {
        type: 'paragraph',
        text: 'Combined with Ohm’s law I = V/R, two rearrangements follow: P = V²/R and P = I²R. The first is convenient when components share the same voltage (in parallel, or on the mains); the second when they share the same current (in series). Both apply only to ohmic, resistive components.',
      },
      { type: 'heading', text: 'The kilowatt-hour' },
      {
        type: 'paragraph',
        text: 'A joule is far too small for metering household electricity, so the kilowatt-hour (kW h) is used instead: the energy transferred by a 1 kW appliance running for 1 hour. Electricity meters read in kilowatt-hours, and bills are charged per kW h used.',
      },
      {
        type: 'formula',
        latex: '1\\ \\mathrm{kW\\,h} = 1000\\ \\mathrm{W} \\times 3600\\ \\mathrm{s} = 3.6 \\times 10^{6}\\ \\mathrm{J}',
        caption: 'One kilowatt-hour equals 3.6 million joules',
      },
      {
        type: 'list',
        items: [
          'Power from V and I: P = IV — a 230 V appliance drawing 0.5 A runs at 115 W.',
          'Energy from P and t: E = Pt — a 1 kW heater on for 1 h uses 1 kW h.',
          'Comparing appliances at the same voltage: use P = V²/R — the lower the resistance, the higher the power.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'electrical work (电功): The work done by a current through an appliance, W = VIt, measured in joules (J).',
          'electrical power (电功率): The rate of doing electrical work, P = W/t = IV, measured in watts (W).',
          'kilowatt-hour (千瓦时): The everyday unit of electrical energy, 1 kW h = 3.6 × 10⁶ J.',
          'watt (瓦特): The unit of power, 1 W = 1 J/s; the kilowatt (kW) is 10³ W.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'ohm-circuit',
    params: [
      {
        key: 'voltage',
        label: { zh: '电压 U', en: 'Voltage U' },
        min: 1,
        max: 24,
        step: 0.5,
        defaultValue: 6,
        unit: 'V',
      },
      {
        key: 'resistance',
        label: { zh: '电阻 R', en: 'Resistance R' },
        min: 1,
        max: 100,
        step: 1,
        defaultValue: 10,
        unit: 'Ω',
      },
    ],
    liveFormulas: [
      {
        id: 'power-ui',
        latex: 'P = UI',
        substitute: (p) =>
          `P = UI = ${p.voltage} \\times ${(p.voltage / p.resistance).toFixed(2)} = ${((p.voltage * p.voltage) / p.resistance).toFixed(2)}\\,\\mathrm{W}`,
      },
      {
        id: 'work-pt',
        latex: 'W = Pt',
        substitute: (p) =>
          `W = Pt = ${((p.voltage * p.voltage) / p.resistance).toFixed(2)}\\,t\\ \\mathrm{(J,\\ t\\ 以秒计)}`,
      },
    ],
  },
  presets: [
    {
      id: 'small-bulb',
      name: { zh: '小灯泡', en: 'Small lamp' },
      description: {
        zh: '6 V 电源点亮灯丝电阻约 12 Ω 的小灯泡，功率 3 W。',
        en: 'A 6 V supply lights a small lamp of about 12 Ω filament resistance — 3 W of power.',
      },
      params: { voltage: 6, resistance: 12 },
    },
    {
      id: 'electric-heater',
      name: { zh: '电热器', en: 'Electric heater' },
      description: {
        zh: '24 V 电源接 48 Ω 电热丝，功率 12 W——对比同电压下电阻越小功率越大。',
        en: 'A 24 V supply across a 48 Ω heating element gives 12 W — at a fixed voltage, lower resistance means higher power.',
      },
      params: { voltage: 24, resistance: 48 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一台电风扇接在 220 V 的家庭电路中，通过它的电流为 0.5 A，它的电功率是（　）',
        en: 'An electric fan on a 220 V mains supply draws 0.5 A. What is its power?',
      },
      options: {
        zh: ['110 W', '220 W', '440 W', '0.5 W'],
        en: ['110 W', '220 W', '440 W', '0.5 W'],
      },
      answerIndex: 0,
      explanation: {
        zh: 'P = UI = 220 V × 0.5 A = 110 W。440 W 是误用 U/I（那是电阻值 440 Ω）；220 W 只抄了电压数值；0.5 W 只抄了电流数值。',
        en: 'P = IV = 220 V × 0.5 A = 110 W. 440 W misuses V/I (that is the resistance, 440 Ω); 220 W just copies the voltage; 0.5 W copies the current.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '一台 1000 W 的电热水器正常工作 1 h，消耗的电能是（　）',
        en: 'A 1000 W water heater runs normally for 1 h. How much energy does it use?',
      },
      options: {
        zh: ['1 kW·h（3.6×10⁶ J）', '1000 J', '3.6×10³ J', '60 kW·h'],
        en: ['1 kW h (3.6 × 10⁶ J)', '1000 J', '3.6 × 10³ J', '60 kW h'],
      },
      answerIndex: 0,
      explanation: {
        zh: 'W = Pt = 1 kW × 1 h = 1 kW·h = 1000 W × 3600 s = 3.6×10⁶ J。1000 J 忘了乘时间；3.6×10³ J 把 1 h 当成 3.6 s；60 kW·h 是把 1 h 错当成 60 h。',
        en: 'E = Pt = 1 kW × 1 h = 1 kW h = 1000 W × 3600 s = 3.6 × 10⁶ J. 1000 J forgets the time; 3.6 × 10³ J treats 1 h as 3.6 s; 60 kW h mistakes 1 h for 60 h.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '一个定值电阻接在电源两端，若它两端的电压增大为原来的 2 倍（电阻不变），则它的电功率变为原来的（　）',
        en: 'The voltage across a fixed resistor is doubled (resistance unchanged). Its power becomes',
      },
      options: {
        zh: ['原来的 2 倍', '原来的 4 倍', '原来的 1/2', '不变'],
        en: ['twice as much', 'four times as much', 'half as much', 'unchanged'],
      },
      answerIndex: 1,
      explanation: {
        zh: '电阻不变时用 P = U²/R：电压加倍，功率变为 4 倍。误选“2 倍”是把 P 当成与 U 成正比（那是 P = UI 中 I 不变的假象，实际 I 也加倍）；“不变”忽略了电压的作用。',
        en: 'With R fixed, use P = V²/R: doubling V quadruples P. “Twice” wrongly treats P as proportional to V alone — but I doubles too, which is exactly why P = IV gives the same factor of 4.',
      },
    },
  ],
  kernels: {
    power: powerKernel,
  },
  expectedResults: [
    {
      id: 'probe-small-bulb',
      description: {
        zh: '小灯泡：6 V、12 Ω，I = 0.5 A，P = 3 W',
        en: 'Small lamp: 6 V across 12 Ω gives I = 0.5 A, P = 3 W',
      },
      kernel: 'power',
      input: { voltage: 6, resistance: 12 },
      expected: { current: 0.5, power: 3 },
    },
    {
      id: 'probe-electric-heater',
      description: {
        zh: '电热器：24 V、48 Ω，I = 0.5 A，P = 12 W',
        en: 'Heater: 24 V across 48 Ω gives I = 0.5 A, P = 12 W',
      },
      kernel: 'power',
      input: { voltage: 24, resistance: 48 },
      expected: { current: 0.5, power: 12 },
    },
    {
      id: 'probe-default',
      description: {
        zh: '默认参数：6 V、10 Ω，I = 0.6 A，P = 3.6 W',
        en: 'Default: 6 V across 10 Ω gives I = 0.6 A, P = 3.6 W',
      },
      kernel: 'power',
      input: { voltage: 6, resistance: 10 },
      expected: { current: 0.6, power: 3.6 },
    },
  ],
  examPractice: [
    {
      id: 'ep-power-calculation',
      syllabus: ['0625/4.2.5.2'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'A hairdryer is connected to a 230 V supply and draws a current of 4.5 A. Calculate its power.',
      markScheme: [
        {
          text: 'P = IV = 4.5 × 230',
          marks: 1,
        },
        {
          text: '= 1035 W (about 1.0 kW)',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '快速核对：市电电器的功率从几瓦到约 3 千瓦。算出 51 瓦或 100 千瓦，应该立刻看着不对。',
        en: 'A quick sanity check: mains appliances run from a few watts to about three kilowatts. An answer of 51 W or 100 kW should look wrong at once.',
      },
    },
    {
      id: 'ep-kwh-cost',
      syllabus: ['0625/4.2.5.4'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 4,
      stem: 'An electric heater is rated at 2.0 kW. It is used for 3.0 hours. Electricity costs 28 pence per kilowatt-hour. Calculate the energy transferred in kilowatt-hours and the cost of using it.',
      markScheme: [
        {
          text: 'Energy = power × time = 2.0 × 3.0',
          marks: 1,
        },
        {
          text: '= 6.0 kW h',
          marks: 1,
        },
        {
          text: 'Cost = 6.0 × 28',
          marks: 1,
        },
        {
          text: '= 168 pence (£1.68)',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '全程用千瓦和小时计算——换算成瓦和秒会得到 2160 万焦耳，虽然正确，但对算费用毫无用处。',
        en: 'Work in kilowatts and hours throughout — converting to watts and seconds gives 21.6 million joules, which is correct but useless for the cost.',
      },
    },
  ],
  related: ['phy-electric-002', 'phy-power-002', 'igcse-0625-4-2-current-power', 'igcse-0625-4-2-4-resistance'],
};
