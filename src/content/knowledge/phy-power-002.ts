import type { KnowledgePoint } from '../types';

export const phyPower002: KnowledgePoint = {
  id: 'phy-power-002',
  subject: 'physics',
  title: { zh: '额定功率与实际功率', en: 'Rated Power and Actual Power' },
  summary: {
    zh: '理解额定电压与额定功率的含义，知道实际功率随实际电压变化，并掌握“测量小灯泡的电功率”实验的原理与操作。',
    en: 'Understand rated voltage and rated power, see how actual power varies with the actual voltage, and master the experiment to measure the power of a small lamp.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch6'],
    igcse: ['0625/4.2.5'],
  },
  keywords: {
    zh: ['额定电压', '额定功率', '实际功率', '灯泡亮度', '伏安法测功率', '铭牌'],
    en: ['rated voltage', 'rated power', 'actual power', 'lamp brightness', 'measuring power', 'rating plate'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出额定电压、额定功率的含义，能从用电器铭牌上读取并计算额定电流与电阻。',
          '理解实际功率随实际电压变化，知道灯泡的亮度由实际功率决定。',
          '描述“测量小灯泡的电功率”实验的原理、电路与滑动变阻器的作用，并说明为什么不能取多次功率的平均值。',
        ],
      },
      { type: 'heading', text: '额定电压与额定功率' },
      {
        type: 'paragraph',
        text: '用电器上标着的电压值，是它正常工作时的电压，叫额定电压；用电器在额定电压下工作时的功率，叫额定功率。例如灯泡上标着“220 V 40 W”，表示它在 220 V 电压下正常发光，此时功率为 40 W。由铭牌还可以算出额定电流 I = P/U 和正常工作时的电阻 R = U²/P。',
      },
      { type: 'formula', latex: 'I_{额} = \\dfrac{P_{额}}{U_{额}} \\qquad R = \\dfrac{U_{额}^{2}}{P_{额}}', caption: '由铭牌求额定电流与电阻（设电阻不变）' },
      { type: 'heading', text: '实际功率随电压变化' },
      {
        type: 'paragraph',
        text: '实际加在用电器两端的电压往往不等于额定电压，此时用电器的功率叫实际功率。若实际电压等于额定电压，实际功率等于额定功率，用电器正常工作；若实际电压偏高，实际功率偏大，用电器可能被烧坏；若实际电压偏低，实际功率偏小，灯泡发光偏暗。',
      },
      {
        type: 'paragraph',
        text: '在电阻近似不变时，由 P = U²/R 可知：实际功率与实际电压的平方成正比。电压变为原来的一半，功率约变为四分之一。灯泡的亮度取决于它的实际功率，而不是额定功率——额定功率大的灯泡，实际电压不足时照样昏暗。',
      },
      { type: 'heading', text: '实验：测量小灯泡的电功率' },
      {
        type: 'paragraph',
        text: '实验原理是 P = UI：用电压表测小灯泡两端的电压，用电流表测通过它的电流，两者相乘即得电功率。滑动变阻器与小灯泡串联，作用是保护电路，并改变灯泡两端的电压，以便分别测出低于、等于、略高于额定电压（一般不超过额定电压的 1.2 倍）三种情况下的实际功率。',
      },
      {
        type: 'paragraph',
        text: '注意：三次测得的功率分别对应三种不同的电压，物理意义不同，不能取平均值作为“小灯泡的功率”。这与伏安法测定值电阻时多次测量取平均值减小误差不同。实验还会发现：电压越高，灯泡越亮，灯丝电阻也因温度升高而变大。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'rated voltage（额定电压）：用电器正常工作时的电压。',
          'rated power（额定功率）：用电器在额定电压下工作时的功率，标注在铭牌上。',
          'actual power（实际功率）：用电器在实际电压下工作时的功率，随电压变化而变化。',
          'rating plate（铭牌）：用电器上标注额定电压、额定功率等参数的标牌。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State the meanings of rated voltage and rated power, read them from a rating plate, and calculate the rated current and resistance.',
          'Understand that actual power varies with the actual voltage, and that the brightness of a lamp depends on its actual power.',
          'Describe the experiment to measure the power of a small lamp — the principle, the circuit and the role of the rheostat — and explain why the measured powers must not be averaged.',
        ],
      },
      { type: 'heading', text: 'Rated voltage and rated power' },
      {
        type: 'paragraph',
        text: 'The voltage marked on an appliance is the voltage at which it works normally — its rated voltage. The power it then transfers is its rated power. A lamp marked “220 V 40 W” glows normally on 220 V, transferring 40 W. From the rating plate you can also find the rated current I = P/V and the working resistance R = V²/P.',
      },
      { type: 'formula', latex: 'I_{rated} = \\dfrac{P_{rated}}{V_{rated}} \\qquad R = \\dfrac{V_{rated}^{2}}{P_{rated}}', caption: 'Rated current and resistance from the rating plate (assuming constant resistance)' },
      { type: 'heading', text: 'Actual power varies with voltage' },
      {
        type: 'paragraph',
        text: 'The voltage actually across an appliance often differs from the rated value, and the power it then transfers is the actual power. At the rated voltage the appliance works normally; a higher voltage means a larger power and the appliance may burn out; a lower voltage means a smaller power and a lamp glows dimly.',
      },
      {
        type: 'paragraph',
        text: 'With resistance roughly constant, P = V²/R shows the actual power is proportional to the square of the actual voltage: halve the voltage and the power falls to about a quarter. Brightness depends on actual power, not rated power — a lamp with a high rated power still glows dimly when the supply voltage is too low.',
      },
      { type: 'heading', text: 'Experiment: measuring the power of a small lamp' },
      {
        type: 'paragraph',
        text: 'The principle is P = IV: measure the p.d. across the lamp with a voltmeter and the current through it with an ammeter, and multiply. A rheostat in series with the lamp protects the circuit and varies the p.d. across the lamp, so the actual power can be measured below, at, and slightly above the rated voltage (no more than about 1.2 times it).',
      },
      {
        type: 'paragraph',
        text: 'Note that the three measured powers correspond to three different voltages and have different meanings — they must not be averaged into a single “power of the lamp”. This differs from measuring a fixed resistance, where repeat readings are averaged to reduce error. The experiment also shows that a higher voltage makes the lamp brighter, while its filament resistance grows as it heats up.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'rated voltage (额定电压): The voltage at which an appliance is designed to work normally.',
          'rated power (额定功率): The power an appliance transfers at its rated voltage, marked on the rating plate.',
          'actual power (实际功率): The power an appliance transfers at the voltage actually applied, which varies with that voltage.',
          'rating plate (铭牌): The plate on an appliance giving its rated voltage, rated power and similar data.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '关于额定功率，下列说法正确的是（　）',
        en: 'Which statement about rated power is correct?',
      },
      options: {
        zh: [
          '额定功率随实际电压的增大而增大',
          '额定功率是用电器在额定电压下工作时的功率，对某一用电器是确定的',
          '额定功率越大的用电器，任何情况下发光（工作）越强',
          '用电器不工作时，额定功率为零',
        ],
        en: [
          'Rated power increases as the actual voltage increases',
          'Rated power is the power at the rated voltage, and is fixed for a given appliance',
          'An appliance with a larger rated power always works more strongly in any situation',
          'When the appliance is off, its rated power is zero',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '额定功率由用电器本身的设计决定，与是否通电、实际电压多大无关，故 A、D 错；C 错在混淆了额定功率与实际功率——亮度由实际功率决定，额定功率大的灯泡电压不足时反而可能更暗。',
        en: 'Rated power is set by the appliance’s design, independent of whether it is on or of the actual voltage, so A and D are wrong. C confuses rated with actual power: brightness depends on actual power, and a lamp with a high rating can be dimmer when under-volted.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '把标有“220 V 60 W”和“220 V 100 W”的两只灯泡串联后接在 220 V 的电源上（设灯丝电阻不变），下列判断正确的是（　）',
        en: 'Two lamps marked “220 V 60 W” and “220 V 100 W” are connected in series to a 220 V supply (assume constant filament resistance). Which statement is correct?',
      },
      options: {
        zh: [
          '“100 W”的灯泡更亮',
          '“60 W”的灯泡更亮',
          '两只灯泡一样亮',
          '两只灯泡都正常发光',
        ],
        en: [
          'The 100 W lamp is brighter',
          'The 60 W lamp is brighter',
          'Both lamps are equally bright',
          'Both lamps glow normally',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '由 R = U额²/P额 知“60 W”灯的电阻更大。串联时电流相同，由 P = I²R，电阻大的“60 W”灯实际功率更大、更亮。两灯串联分压，各自电压都不到 220 V，都不可能正常发光；认为“100 W 更亮”是把额定功率当成了实际功率。',
        en: 'From R = V²/P, the 60 W lamp has the larger resistance. In series the current is the same, so by P = I²R the 60 W lamp transfers more actual power and is brighter. Each lamp gets less than 220 V, so neither glows normally; picking the 100 W lamp mistakes rated power for actual power.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '一只标有“6 V 3 W”的小灯泡接在 3 V 的电源上（设灯丝电阻不变），它的实际功率约是（　）',
        en: 'A lamp marked “6 V 3 W” is connected to a 3 V supply (assume constant filament resistance). Its actual power is about',
      },
      options: {
        zh: ['3 W', '1.5 W', '0.75 W', '6 W'],
        en: ['3 W', '1.5 W', '0.75 W', '6 W'],
      },
      answerIndex: 2,
      explanation: {
        zh: '电阻不变时 P ∝ U²，电压减半，功率变为 (1/2)² × 3 W = 0.75 W。1.5 W 误以为功率与电压成正比；3 W 是把额定功率当成不变的；6 W 方向完全弄反。',
        en: 'With R constant, P ∝ V²: halving the voltage gives (1/2)² × 3 W = 0.75 W. 1.5 W wrongly takes power as proportional to voltage; 3 W treats rated power as fixed; 6 W has the change backwards.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-rated-lamp',
      syllabus: ['0625/4.2.5.2'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'A lamp is marked “12 V, 24 W”. Calculate (a) the current through the lamp when it is operated at its rated voltage, and (b) the resistance of the lamp at normal brightness.',
      markScheme: [
        {
          text: 'I = P / V = 24 / 12 = 2.0 A',
          marks: 1,
        },
        {
          text: 'R = V / I = 12 / 2.0 = 6.0 Ω (or R = V² / P)',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '从铭牌读出的两个量可以推出第三个：电流或电阻。注意 12 V、24 W 只在正常工作时同时成立，不要拿它们去算其他电压下的情况而不加说明。',
        en: 'Two quantities on the rating plate determine the third — current or resistance. Remember 12 V and 24 W only hold together at normal brightness; do not reuse them at other voltages without saying so.',
      },
    },
  ],
  related: ['phy-power-001', 'phy-electric-002', 'igcse-0625-4-2-current-power'],
};
