import { current, power } from '../../simulations/kernels/circuits';
import type { KernelFn, KnowledgePoint } from '../types';

/** 欧姆定律探针内核：输入 voltage/resistance，输出电流与电功率 */
const ohmKernel: KernelFn = (input) => {
  const { voltage, resistance } = input;
  return {
    current: current(voltage, resistance),
    power: power(voltage, resistance),
  };
};

export const phyElectric002: KnowledgePoint = {
  id: 'phy-electric-002',
  subject: 'physics',
  title: { zh: '欧姆定律', en: "Ohm's Law" },
  summary: {
    zh: '通过实验探究电流与电压、电阻的关系，理解欧姆定律 I = U/R，并学会用它进行简单计算。',
    en: 'Investigate how current depends on voltage and resistance, understand Ohm’s law I = V/R, and use it in simple calculations.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j9/ch5', 'pep-phy-s3/ch3'],
    igcse: ['0625/4.2'],
  },
  keywords: {
    zh: ['欧姆定律', '电流', '电压', '电阻', '控制变量法', '安培', '伏特', '欧姆'],
    en: ["Ohm's law", 'current', 'voltage', 'resistance', 'ohm', 'ampere', 'volt', 'I–V characteristic'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '描述用控制变量法探究电流与电压、电阻关系的实验，并用 I = U / R 及其变形式进行计算。',
          '说明电阻是导体本身的性质，区分电阻的量度式 R = U / I 与它的决定因素。',
          '识别线性元件与非线性元件（灯丝、二极管）的 I–U 图像，并定性解释灯丝电阻随温度的变化。',
        ],
      },
      { type: 'heading', text: '探究：电流与电压、电阻的关系' },
      {
        type: 'paragraph',
        text: '实验采用控制变量法：保持电阻不变，改变导体两端的电压，发现电流与电压成正比；保持电压不变，换用不同阻值的电阻，发现电流与电阻成反比。滑动变阻器在实验中起到改变电压和保护电路的作用。',
      },
      { type: 'formula', latex: 'I = \\dfrac{U}{R}', caption: '欧姆定律：I 为电流（A），U 为电压（V），R 为电阻（Ω）' },
      {
        type: 'paragraph',
        text: '欧姆定律的内容：导体中的电流，跟导体两端的电压成正比，跟导体的电阻成反比。公式的变形式 U = IR 和 R = U/I 可用于计算电压或电阻。公式中三个物理量必须对应同一段导体、同一时刻。',
      },
      { type: 'heading', text: '对电阻的正确理解' },
      {
        type: 'paragraph',
        text: 'R = U/I 是电阻的量度式，而不是决定式。电阻是导体本身的一种性质，由导体的材料、长度、横截面积和温度决定，与它两端有没有电压、有没有电流通过无关。不能认为“电阻跟电压成正比、跟电流成反比”。',
      },
      { type: 'heading', text: '欧姆定律的适用范围' },
      {
        type: 'paragraph',
        text: '欧姆定律适用于金属导体和电解液等纯电阻导电的情况，此时 I-U 图像是过原点的直线，这样的元件称为线性元件。灯丝温度升高时电阻会变大，二极管等元件不遵循欧姆定律，它们的 I-U 图像不是直线。',
      },
      {
        type: 'list',
        items: [
          '已知 U、R 求 I：I = U/R，如 6 V 电压加在 10 Ω 电阻上，电流为 0.6 A。',
          '已知 I、R 求 U：U = IR，可计算用电器两端的电压。',
          '已知 U、I 求 R：R = U/I，即“伏安法”测电阻的原理。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          "Ohm's law（欧姆定律）：导体中的电流跟两端电压成正比、跟电阻成反比，I = U / R。",
          'resistance（电阻）：导体对电流阻碍作用的量度，R = U / I，单位欧姆（Ω）。',
          'ohmic conductor（线性元件）：I–U 图像是过原点直线的元件，如温度恒定的金属导体。',
          'rheostat（滑动变阻器）：通过改变接入电路的电阻来调节电流的可变电阻器。',
          'I–V characteristic（伏安特性曲线）：表示通过元件的电流随两端电压变化的图像。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Describe the control-variable experiments relating current to voltage and resistance, and calculate with I = V / R and its rearrangements.',
          'Explain that resistance is a property of the conductor itself, distinguishing the measuring equation R = V / I from the factors that determine resistance.',
          'Recognise the I–V graphs of ohmic and non-ohmic components (filament lamp, diode) and explain qualitatively how filament resistance changes with temperature.',
        ],
      },
      { type: 'heading', text: 'Investigating current, voltage and resistance' },
      {
        type: 'paragraph',
        text: 'Experiments use control variables: keeping the resistance fixed and varying the voltage shows that current is proportional to voltage; keeping the voltage fixed and swapping resistors shows that current is inversely proportional to resistance. A variable resistor (rheostat) is used to change the voltage and to protect the circuit.',
      },
      { type: 'formula', latex: 'I = \\dfrac{V}{R}', caption: "Ohm's law: I is current (A), V is voltage (V), R is resistance (Ω)" },
      {
        type: 'paragraph',
        text: "Ohm's law states that the current through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance. The rearrangements V = IR and R = V/I are used to find voltage or resistance. All three quantities must refer to the same component at the same instant.",
      },
      { type: 'heading', text: 'Understanding resistance correctly' },
      {
        type: 'paragraph',
        text: 'R = V/I is a way of measuring resistance, not what determines it. Resistance is a property of the conductor itself — it depends on the material, length, cross-sectional area and temperature, not on the voltage applied or the current flowing. It is wrong to say “resistance is proportional to voltage and inversely proportional to current”.',
      },
      { type: 'heading', text: 'Where Ohm’s law applies' },
      {
        type: 'paragraph',
        text: "Ohm's law applies to ohmic conductors such as metals at constant temperature, whose I–V graph is a straight line through the origin (linear components). The resistance of a lamp filament rises as it heats up, and components such as diodes do not obey Ohm's law — their I–V graphs are not straight lines.",
      },
      {
        type: 'list',
        items: [
          'Find current from V and R: I = V/R — e.g. 6 V across 10 Ω gives 0.6 A.',
          'Find voltage from I and R: V = IR, the voltage across a component.',
          'Find resistance from V and I: R = V/I, the principle of the voltmeter–ammeter method.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          "Ohm's law (欧姆定律): The current through a conductor is proportional to the voltage across it and inversely proportional to its resistance, I = V / R.",
          'resistance (电阻): A measure of how much a conductor opposes the current, R = V / I, measured in ohms (Ω).',
          'ohmic conductor (线性元件): A component whose I–V graph is a straight line through the origin, such as a metal at constant temperature.',
          'rheostat (滑动变阻器): A variable resistor used to adjust the current in a circuit.',
          'I–V characteristic (伏安特性曲线): A graph showing how the current through a component varies with the voltage across it.',
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
        id: 'ohm-law',
        latex: 'I = \\dfrac{U}{R}',
        substitute: (p) =>
          `I = \\dfrac{${p.voltage}}{${p.resistance}} = ${(p.voltage / p.resistance).toFixed(2)}\\,\\mathrm{A}`,
      },
      {
        id: 'electric-power',
        latex: 'P = \\dfrac{U^2}{R}',
        substitute: (p) =>
          `P = \\dfrac{${p.voltage}^2}{${p.resistance}} = ${((p.voltage * p.voltage) / p.resistance).toFixed(2)}\\,\\mathrm{W}`,
      },
    ],
  },
  presets: [
    {
      id: 'flashlight',
      name: { zh: '手电筒', en: 'Torch (flashlight)' },
      description: {
        zh: '两节干电池（3 V）点亮小灯泡，灯丝电阻约 10 Ω。',
        en: 'Two dry cells (3 V) light a small bulb with a filament resistance of about 10 Ω.',
      },
      params: { voltage: 3, resistance: 10 },
    },
    {
      id: 'lab-circuit',
      name: { zh: '实验电路', en: 'Lab circuit' },
      description: {
        zh: '学生电源 6 V 接 10 Ω 定值电阻，课堂探究的标准设置。',
        en: 'A 6 V student power supply across a 10 Ω fixed resistor, the standard classroom setup.',
      },
      params: { voltage: 6, resistance: 10 },
    },
    {
      id: 'high-voltage-danger',
      name: { zh: '高压危险', en: 'High-voltage danger' },
      description: {
        zh: '24 V 接 2 Ω 小电阻，电流高达 12 A——体会低电阻短路为何危险。',
        en: '24 V across only 2 Ω drives 12 A — see why low-resistance short circuits are dangerous.',
      },
      params: { voltage: 24, resistance: 2 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一个 10 Ω 的定值电阻接在 6 V 的电源两端，通过它的电流是（　）',
        en: 'A 10 Ω fixed resistor is connected across a 6 V supply. What current flows through it?',
      },
      options: {
        zh: ['0.6 A', '1.67 A', '6 A', '60 A'],
        en: ['0.6 A', '1.67 A', '6 A', '60 A'],
      },
      answerIndex: 0,
      explanation: {
        zh: '由欧姆定律 I = U/R = 6 V ÷ 10 Ω = 0.6 A。1.67 A 是把 R/U 算反了；6 A 和 60 A 是数值或单位的错误。',
        en: 'By Ohm’s law I = V/R = 6 V ÷ 10 Ω = 0.6 A. 1.67 A comes from dividing R by V; 6 A and 60 A are arithmetic or unit errors.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '由欧姆定律的变形式 R = U/I 可知，下列说法正确的是（　）',
        en: 'From the rearrangement R = V/I of Ohm’s law, which statement is correct?',
      },
      options: {
        zh: [
          '导体的电阻跟它两端的电压成正比',
          '导体的电阻跟通过它的电流成反比',
          '导体的电阻可以用它两端的电压与通过它的电流的比值来量度',
          '导体两端不加电压时，电阻为零',
        ],
        en: [
          'The resistance of a conductor is proportional to the voltage across it',
          'The resistance of a conductor is inversely proportional to the current through it',
          'Resistance can be measured as the ratio of the voltage across a conductor to the current through it',
          'With no voltage applied, the resistance of a conductor is zero',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: 'R = U/I 只是电阻的量度式。电阻是导体本身的性质，由材料、长度、横截面积和温度决定，与 U、I 无关，故 A、B 错；不加电压时电阻依然存在，故 D 错。',
        en: 'R = V/I only measures resistance. Resistance is a property of the conductor itself — set by material, length, cross-section and temperature — independent of V and I (A and B wrong); resistance still exists with no voltage applied (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '某定值电阻两端电压增大为原来的 2 倍，则通过它的电流（　）',
        en: 'If the voltage across a fixed resistor is doubled, the current through it becomes',
      },
      options: {
        zh: ['不变', '原来的 1/2', '原来的 2 倍', '原来的 4 倍'],
        en: ['unchanged', 'half as much', 'twice as much', 'four times as much'],
      },
      answerIndex: 2,
      explanation: {
        zh: '电阻不变时，由 I = U/R 知电流与电压成正比，电压加倍，电流也加倍。误认为“不变”是忽略了电压的作用；误认为“4 倍”是错用了平方关系（那是 P = U²/R 的电功率）。',
        en: 'With R fixed, I = V/R means current is proportional to voltage, so doubling V doubles I. “Unchanged” ignores the voltage change; “four times” misuses the square relation, which applies to power P = V²/R, not current.',
      },
    },
  ],
  kernels: {
    ohm: ohmKernel,
  },
  expectedResults: [
    {
      id: 'probe-flashlight',
      description: {
        zh: '手电筒：3 V、10 Ω，I = 0.3 A，P = 0.9 W',
        en: 'Torch: 3 V across 10 Ω gives I = 0.3 A, P = 0.9 W',
      },
      kernel: 'ohm',
      input: { voltage: 3, resistance: 10 },
      expected: { current: 0.3, power: 0.9 },
    },
    {
      id: 'probe-lab-circuit',
      description: {
        zh: '实验电路：6 V、10 Ω，I = 0.6 A，P = 3.6 W',
        en: 'Lab circuit: 6 V across 10 Ω gives I = 0.6 A, P = 3.6 W',
      },
      kernel: 'ohm',
      input: { voltage: 6, resistance: 10 },
      expected: { current: 0.6, power: 3.6 },
    },
    {
      id: 'probe-high-voltage',
      description: {
        zh: '高压低阻：24 V、2 Ω，I = 12 A，P = 288 W（短路危险）',
        en: 'High voltage, low resistance: 24 V across 2 Ω gives I = 12 A, P = 288 W (short-circuit danger)',
      },
      kernel: 'ohm',
      input: { voltage: 24, resistance: 2 },
      expected: { current: 12, power: 288 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '手电筒里那节小小的电池，是怎么决定灯泡有多亮的？答案藏在三个物理量的关系里：电压、电流和电阻。这节课我们用一个虚拟电路，把欧姆定律亲手“玩”出来。',
          en: 'How does a tiny battery in a torch decide how brightly the bulb glows? The answer lies in a relationship between three quantities: voltage, current and resistance. In this lesson we\'ll bring Ohm\'s law to life with a virtual circuit.',
        },
      },
      {
        id: 'concept-law',
        kind: 'concept',
        text: {
          zh: '实验告诉我们两件事：电阻不变时，电压越大，电流越大，而且是严格的正比；电压不变时，电阻越大，电流反而越小。把这两条合起来，就是欧姆定律：I 等于 U 除以 R。记住一个小细节：这三个量必须说的是同一段导体、同一个时刻。',
          en: 'Experiments tell us two things. Keep the resistance fixed, and the current grows in exact proportion to the voltage. Keep the voltage fixed, and a bigger resistance means a smaller current. Put those together and you get Ohm\'s law: I equals V over R. One detail worth remembering: all three quantities must describe the same conductor at the same moment.',
        },
      },
      {
        id: 'concept-resistance',
        kind: 'concept',
        text: {
          zh: '这里有个特别容易踩的坑：R 等于 U 除以 I，只是测量电阻的方法，不是电阻的“决定式”。电阻是导体自己的脾气——由材料、长度、粗细和温度决定。可不能说“电压大了电阻就变大”，那是把因果关系弄反了。',
          en: 'Here\'s a classic trap. R equals V over I is only a way to measure resistance, not a formula that creates it. Resistance is the conductor\'s own property, set by its material, length, thickness and temperature. So never say "more voltage means more resistance" — that gets cause and effect backwards.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '轮到你了。先把电阻固定在 10 欧，慢慢拖动电压滑块，看电流表的读数是不是跟着成倍变化。再反过来，固定电压 6 伏，把电阻调大，观察电流怎么往下掉。最后点一下“高压危险”预设：24 伏接 2 欧，12 安的电流会告诉你短路为什么可怕。',
          en: 'Now it\'s your turn. Fix the resistance at 10 ohms and drag the voltage slider — watch the current reading grow in step. Then hold the voltage at 6 volts and raise the resistance, and see the current fall away. Finally, tap the "high-voltage danger" preset: 24 volts across just 2 ohms drives 12 amps, which shows exactly why a short circuit is scary.',
        },
      },
      {
        id: 'concept-scope',
        kind: 'concept',
        text: {
          zh: '欧姆定律也不是万能的。对温度恒定的金属导体，电流-电压图像是一条过原点的直线，这样的元件叫线性元件。但灯丝一热，电阻就变大；二极管更是根本不听话。所以用公式之前，先想想你的元件是不是“守规矩”的那一类。',
          en: 'Ohm\'s law doesn\'t rule everything. For a metal conductor at constant temperature, the current–voltage graph is a straight line through the origin — a linear component. But a lamp filament\'s resistance climbs as it heats up, and a diode simply refuses to obey. So before you reach for the formula, ask whether your component actually plays by the rules.',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '来回顾一下：欧姆定律 I 等于 U 除以 R，把电压、电流、电阻串在了一起；它的两个变形式可以帮你算电压、测电阻。但电阻是导体本身的性质，跟加不加电压无关。接下来的小测里，看看你能不能避开那些常见的坑。',
          en: 'Let\'s wrap up. Ohm\'s law, I equals V over R, ties voltage, current and resistance together, and its two rearrangements let you find voltages and measure resistances. But resistance belongs to the conductor itself, with or without an applied voltage. Try the quiz next and see if you can dodge the classic traps.',
        },
      },
    ],
  },
  examPractice: [
    {
      id: 'ep-resistance-calculation',
      syllabus: ['0625/4.2.4.1'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'The p.d. across a resistor is 12 V and the current through it is 0.50 A. Calculate the resistance of the resistor.',
      markScheme: [
        {
          text: 'Uses R = V / I',
          marks: 1,
          alternatives: ['12 / 0.50'],
        },
        {
          text: '24 Ω',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '先把公式变形再代入：R = V / I。直接写 0.50 / 12 得到约 0.042 Ω，是把公式记倒了；考试时先写符号式再代数字，能有效避免这类错误。',
        en: 'Rearrange before substituting: R = V / I. Writing 0.50 / 12 gives about 0.042 Ω — the formula remembered upside down. Writing the symbolic form first, then the numbers, prevents exactly this slip.',
      },
    },
    {
      id: 'ep-ohm-law-rearranged',
      syllabus: ['0625/4.2.4.1'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 1,
      stem: 'The current through a 15 Ω resistor is 0.40 A. What is the p.d. across the resistor?',
      options: ['6.0 V', '37.5 V', '0.027 V', '15.4 V'],
      answerIndex: 0,
      markScheme: [
        {
          text: 'V = I R = 0.40 × 15 = 6.0 V',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '37.5 V 来自 R / I，0.027 V 来自 I / R——都是把变形式记错。15.4 V 是把电阻和电流相加，说明没有理解三个量的关系。',
        en: '37.5 V comes from R / I and 0.027 V from I / R — both are the rearrangement remembered wrongly. 15.4 V adds resistance and current, showing the relationship itself is not understood.',
      },
    },
    {
      id: 'ep-filament-iv-graph',
      syllabus: ['0625/4.2.4.4'],
      tier: 'supplement',
      commandWord: 'Explain',
      marks: 3,
      stem: 'The I–V graph for a filament lamp is a curve rather than a straight line. Explain why.',
      markScheme: [
        {
          text: 'As the p.d. increases, the current increases and the filament gets hotter',
          marks: 1,
        },
        {
          text: 'The resistance of the filament increases with temperature',
          marks: 1,
        },
        {
          text: 'So the current increases less than in proportion to the p.d., and the graph bends',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '因果链要完整：电压变大 → 电流变大 → 灯丝温度升高 → 电阻增大 → 图像弯曲。只写“电阻会变化”最多得一分；要解释的是“为什么会变”。',
        en: 'The chain must be complete: higher p.d. → more current → hotter filament → higher resistance → the curve. Saying only “the resistance changes” earns one mark at most; the question asks why it changes.',
      },
    },
  ],
  related: ['phy-electric-001', 'phy-electric-003', 'igcse-0625-4-2-4-resistance'],
};
