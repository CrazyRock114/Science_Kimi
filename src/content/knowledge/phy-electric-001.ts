import type { KnowledgePoint } from '../types';

export const phyElectric001: KnowledgePoint = {
  id: 'phy-electric-001',
  subject: 'physics',
  title: { zh: '电路、电流与电压', en: 'Circuits, Current and Voltage' },
  summary: {
    zh: '认识电路的组成与三种状态，理解电流的形成、方向和大小，以及电压的作用与测量。',
    en: 'Learn the components and states of an electric circuit, and understand how current and voltage are defined, directed and measured.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j9/ch3', 'pep-phy-j9/ch4', 'pep-phy-s3/ch3'],
    igcse: ['0625/4.2', '0625/4.3'],
  },
  keywords: {
    zh: ['电路', '电流', '电压', '电源', '通路', '断路', '短路', '安培', '伏特', '电流表', '电压表'],
    en: ['circuit', 'current', 'voltage', 'cell', 'battery', 'short circuit', 'ampere', 'volt', 'ammeter', 'voltmeter'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '电路的组成与三种状态' },
      {
        type: 'paragraph',
        text: '用导线把电源、用电器、开关连接起来组成的电流路径叫做电路。电源提供电能，用电器消耗电能，开关控制电路的通断。电路有通路、断路（开路）、短路三种状态：处处连通的电路是通路；某处断开的电路是断路，电路中没有电流；不经过用电器而直接把电源两极相连是短路，短路时电流很大，会烧坏电源，是绝对不允许的。',
      },
      { type: 'heading', text: '电流及其方向' },
      {
        type: 'paragraph',
        text: '电荷的定向移动形成电流。物理学中规定：正电荷定向移动的方向为电流的方向。在金属导体中，实际定向移动的是带负电的自由电子，电子定向移动的方向与规定的电流方向相反。在电源外部，电流从电源正极流向负极。',
      },
      { type: 'formula', latex: 'I = \\dfrac{Q}{t}', caption: '电流等于单位时间内通过导体横截面的电荷量，单位安培（A）' },
      { type: 'heading', text: '电压：形成电流的原因' },
      {
        type: 'paragraph',
        text: '电压是使电路中的自由电荷定向移动形成电流的原因，电源是提供电压的装置。电压用符号 U 表示，单位是伏特（V）。常见电压值：一节干电池 1.5 V，我国家庭电路 220 V，对人体安全的电压不高于 36 V。电路中有电流必须同时满足两个条件：电路两端有电压，且电路是通路。',
      },
      {
        type: 'list',
        items: [
          '电流表测量电流，必须串联在被测电路中，让电流从正接线柱流入。',
          '电压表测量电压，必须并联在被测用电器（或电源）两端。',
          '连接电路时开关应断开，绝不允许用导线直接把电源两极连接起来。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Circuit components and circuit states' },
      {
        type: 'paragraph',
        text: 'An electric circuit is a complete path for current, made by connecting a cell or battery (power source), components such as lamps, a switch, and connecting wires. A complete circuit allows current to flow; an open (broken) circuit has a gap so no current flows; a short circuit connects the two terminals of the source directly without a component, producing a dangerously large current that can damage the source — it must always be avoided.',
      },
      { type: 'heading', text: 'Electric current and its direction' },
      {
        type: 'paragraph',
        text: 'An electric current is a flow of electric charge. By convention, the direction of current is the direction in which positive charges would move. In a metal wire the moving charges are actually electrons (negative), so the electrons drift in the opposite direction to the conventional current. Outside the source, conventional current flows from the positive terminal to the negative terminal.',
      },
      { type: 'formula', latex: 'I = \\dfrac{Q}{t}', caption: 'Current is the charge passing a point per unit time, measured in amperes (A)' },
      { type: 'heading', text: 'Voltage: what drives the current' },
      {
        type: 'paragraph',
        text: 'Voltage (potential difference) is what makes charge move around a circuit; the cell or battery provides the voltage. Voltage has symbol U (or V) and is measured in volts (V). Typical values: 1.5 V for a dry cell, 220 V for mains supply in China. For a current to flow there must be both a voltage across the circuit and a complete conducting path.',
      },
      {
        type: 'list',
        items: [
          'An ammeter measures current and must be connected in series in the circuit.',
          'A voltmeter measures voltage and must be connected in parallel across the component.',
          'Keep the switch open while connecting a circuit, and never connect the two terminals of a source directly with a wire.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '关于电流的方向，下列说法正确的是（　）',
        en: 'Which statement about the direction of electric current is correct?',
      },
      options: {
        zh: [
          '金属导体中自由电子定向移动的方向就是电流方向',
          '正电荷定向移动的方向规定为电流方向',
          '在电源外部，电流从电源负极流向正极',
          '只有正电荷定向移动才能形成电流',
        ],
        en: [
          'The direction of electron flow in a metal is defined as the current direction',
          'The direction of current is defined as the direction of positive charge movement',
          'Outside the source, current flows from the negative to the positive terminal',
          'Only moving positive charges can form a current',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '物理学规定正电荷定向移动的方向为电流方向。金属中实际是自由电子（负电荷）定向移动，其方向与电流方向相反，故 A 错；电源外部电流从正极流向负极，故 C 错；正、负电荷的定向移动都能形成电流，故 D 错。',
        en: 'By convention, current direction is that of positive charge movement. In metals the moving electrons are negative and flow opposite to the conventional current (A is wrong); outside the source current flows from + to − (C is wrong); moving charges of either sign constitute a current (D is wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '某用电器工作 10 s，通过它的电荷量为 5 C，则通过它的电流是（　）',
        en: 'A charge of 5 C passes through an appliance in 10 s. What is the current?',
      },
      options: {
        zh: ['0.5 A', '2 A', '5 A', '50 A'],
        en: ['0.5 A', '2 A', '5 A', '50 A'],
      },
      answerIndex: 0,
      explanation: {
        zh: '由 I = Q/t = 5 C ÷ 10 s = 0.5 A。',
        en: 'Using I = Q/t = 5 C ÷ 10 s = 0.5 A.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '电路中有持续电流的条件是（　）',
        en: 'What conditions are required for a continuous current in a circuit?',
      },
      options: {
        zh: [
          '电路中有用电器',
          '电路两端有电压，且电路是通路',
          '只要有电源就行',
          '只要电路连通就行',
        ],
        en: [
          'The circuit contains an appliance',
          'There is a voltage across the circuit and the circuit is complete',
          'A power source alone is enough',
          'A connected loop alone is enough',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '电压是形成电流的原因，通路是电流流通的前提，两者缺一不可。只有电源而电路断开（如开关断开）时没有电流；只有通路而没有电压（如没有电源）也不会有电流。',
        en: 'Voltage drives the charge and a complete path lets it flow — both are needed. A source with an open switch gives no current; a complete loop with no source has nothing to drive the charge.',
      },
    },
  ],
};
