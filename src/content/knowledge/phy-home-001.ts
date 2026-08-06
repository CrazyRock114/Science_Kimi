import type { KnowledgePoint } from '../types';

export const phyHome001: KnowledgePoint = {
  id: 'phy-home-001',
  subject: 'physics',
  title: { zh: '家庭电路', en: 'Household Circuits' },
  summary: {
    zh: '认识家庭电路的组成与连接方式，分清火线与零线，学会使用试电笔，理解保险丝、空气开关与漏电保护器的作用。',
    en: 'Learn the layout of a household circuit, tell the live wire from the neutral, use a test screwdriver, and understand fuses, circuit breakers and residual-current devices.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch7'],
    igcse: ['0625/4.4'],
  },
  keywords: {
    zh: ['家庭电路', '火线', '零线', '试电笔', '保险丝', '空气开关', '漏电保护器', '电能表'],
    en: ['household circuit', 'live wire', 'neutral wire', 'fuse', 'circuit breaker', 'test screwdriver', 'electricity meter'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出家庭电路的主要组成部分及其作用，知道各用电器之间是并联的。',
          '分清火线与零线，会用试电笔辨别火线。',
          '理解保险丝、空气开关和漏电保护器的保护作用，知道不能用铜丝代替保险丝。',
        ],
      },
      { type: 'heading', text: '家庭电路的组成' },
      {
        type: 'paragraph',
        text: '家庭电路由进户线、电能表、总开关、保险装置、用电器和插座等组成。电能表测量全家消耗的电能；总开关控制整个电路的通断，检修电路时先断开它。各用电器和插座都并联在电路中，这样每个用电器都能得到 220 V 的电压，并且互不影响、可以独立工作。',
      },
      { type: 'heading', text: '火线与零线' },
      {
        type: 'paragraph',
        text: '进户的两条输电线中，一条叫火线，一条叫零线。火线与零线之间的电压是 220 V；零线在入户之前已经与大地相连，它与大地之间的电压为 0，而火线与大地之间的电压为 220 V——这正是接触火线危险的原因。开关和保险装置都应接在火线上。',
      },
      { type: 'heading', text: '试电笔' },
      {
        type: 'paragraph',
        text: '试电笔是辨别火线和零线的工具。使用时，手指接触笔尾的金属体，用笔尖接触被测的导线：如果氖管发光，说明接触的是火线；不发光则是零线。千万不能用手接触笔尖的金属部分，否则会触电。氖管发光时虽有微弱电流通过人体，但因笔内串联了阻值很大的电阻，电流极小，不会造成伤害。',
      },
      { type: 'heading', text: '保险丝与空气开关' },
      {
        type: 'paragraph',
        text: '当电路中电流过大时（发生短路或用电器的总功率过大），导线会发热，可能引发火灾。保险丝用电阻较大、熔点较低的铅锑合金制成，串联在火线上：电流过大时它先发热熔断，自动切断电路，起到保护作用。保险丝绝不能用铜丝或铁丝代替——铜丝熔点高，电流过大时不会熔断，等于拆掉了保护。新建楼房常用空气开关代替保险丝，电流过大时自动“跳闸”，排除故障后合上即可。',
      },
      { type: 'formula', latex: 'Q = I^{2}Rt', caption: '电流的热效应：电流过大时产生的热量剧增，保险丝（或空气开关）因此动作' },
      { type: 'heading', text: '漏电保护器' },
      {
        type: 'paragraph',
        text: '漏电保护器安装在总开关之后。正常情况下，火线与零线中的电流大小相等；一旦有人触电或电器漏电，一部分电流经人体（或漏点）流入大地，两条线中的电流不再相等，漏电保护器便迅速切断电路，对人起保护作用。它与保险丝分工不同：保险丝防的是电流过大（过载与短路），漏电保护器防的是漏电与触电。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'live wire（火线）：与大地间电压为 220 V 的输电线，开关和保险装置接在它上面。',
          'neutral wire（零线）：入户前已接地的输电线，与大地间电压为 0。',
          'fuse（保险丝）：由电阻大、熔点低的合金制成，电流过大时熔断以切断电路。',
          'circuit breaker（空气开关/断路器）：电流过大时自动断开电路的开关，可重复使用。',
          'residual-current device（漏电保护器）：检测到漏电或触电时迅速切断电路的装置。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Name the main parts of a household circuit and their roles, and know that appliances are connected in parallel.',
          'Distinguish the live wire from the neutral wire and use a test screwdriver to identify the live wire.',
          'Understand how fuses, circuit breakers and residual-current devices protect the circuit, and why a fuse must never be replaced by copper wire.',
        ],
      },
      { type: 'heading', text: 'The layout of a household circuit' },
      {
        type: 'paragraph',
        text: 'A household circuit consists of the incoming supply cable, an electricity meter, a main switch, protective devices, and the appliances and sockets. The meter measures the energy used by the whole household; the main switch isolates the whole circuit and is opened before any repair. Appliances and sockets are all connected in parallel, so each receives the full supply voltage (220 V in China) and works independently of the others.',
      },
      { type: 'heading', text: 'Live and neutral' },
      {
        type: 'paragraph',
        text: 'Of the two incoming wires, one is the live wire and the other the neutral. The voltage between live and neutral is 220 V. The neutral is connected to earth before it enters the house, so it sits at about earth potential, while the live wire is at 220 V relative to earth — which is exactly why touching the live wire is dangerous. Switches and protective devices are always wired into the live side.',
      },
      { type: 'heading', text: 'The test screwdriver' },
      {
        type: 'paragraph',
        text: 'A test screwdriver (mains tester) tells live from neutral. Touch the metal cap at the end of the handle with a finger and put the tip on the wire being tested: the neon lamp glows for the live wire and stays dark for neutral. Never touch the metal tip — that would give you a shock. When the lamp glows a tiny current does pass through the body, but a very large resistor inside the tester keeps it far too small to do harm.',
      },
      { type: 'heading', text: 'Fuses and circuit breakers' },
      {
        type: 'paragraph',
        text: 'When the current grows too large — from a short circuit or from too many appliances at once — the wiring heats up and may catch fire. A fuse is a short piece of lead–antimony alloy with a large resistance and a low melting point, wired in series in the live wire: an excessive current melts it first and breaks the circuit. A fuse must never be replaced with copper wire — copper has a high melting point and would not melt, removing the protection entirely. Modern homes use circuit breakers instead, which trip automatically on excess current and can be reset once the fault is cleared.',
      },
      { type: 'formula', latex: 'Q = I^{2}Rt', caption: 'Heating effect of current: excess current releases far more heat, which is what operates the fuse or breaker' },
      { type: 'heading', text: 'The residual-current device (RCD)' },
      {
        type: 'paragraph',
        text: 'An RCD is fitted after the main switch. Normally the currents in the live and neutral wires are equal; if someone gets a shock or an appliance leaks current to earth, part of the current escapes and the two no longer match — the RCD then cuts the circuit within a fraction of a second. Its job differs from a fuse: a fuse guards against over-current (overload and short circuits), while the RCD guards against leakage and electric shock.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'live wire (火线): The supply wire at 220 V relative to earth; switches and protective devices are wired into it.',
          'neutral wire (零线): The supply wire earthed before entering the house, at about 0 V relative to earth.',
          'fuse (保险丝): A short wire of high-resistance, low-melting-point alloy that melts to break the circuit when the current is too large.',
          'circuit breaker (空气开关/断路器): A resettable switch that opens automatically when the current exceeds its rating.',
          'residual-current device (漏电保护器): A device that cuts the supply the moment it detects leakage current, protecting against shock.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '家庭电路中，各用电器（电灯、电视、冰箱等）之间的连接方式是（　）',
        en: 'In a household circuit, the appliances (lamps, TV, refrigerator …) are connected',
      },
      options: {
        zh: ['串联', '并联', '有的串联、有的并联', '无法确定'],
        en: ['in series', 'in parallel', 'some in series and some in parallel', 'it cannot be determined'],
      },
      answerIndex: 1,
      explanation: {
        zh: '并联使每个用电器两端都能得到 220 V 的额定电压，且各用电器互不影响、可以独立开关。若串联，各用电器分压不足 220 V，不能正常工作，而且一个断开其余全部断电——与实际使用情况不符。',
        en: 'In parallel each appliance receives the full 220 V and works independently. In series they would share the voltage and none would work properly, and switching one off would cut them all — clearly not how a home behaves.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于保险丝，下列说法正确的是（　）',
        en: 'Which statement about a fuse is correct?',
      },
      options: {
        zh: [
          '保险丝越粗，保护效果越好',
          '保险丝熔断后，可以用铜丝临时代替',
          '保险丝用电阻较大、熔点较低的材料制成，串联在电路中起保护作用',
          '保险丝熔断，一定是因为电路发生了短路',
        ],
        en: [
          'The thicker the fuse wire, the better it protects',
          'A blown fuse can be temporarily replaced by copper wire',
          'A fuse is made of high-resistance, low-melting-point material and is wired in series to protect the circuit',
          'A fuse blows only because of a short circuit',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '保险丝靠“电阻大、熔点低”在电流过大时先熔断，故 C 正确。过粗的保险丝该断不断，失去保护作用；铜丝熔点高不会熔断，同样危险，故 A、B 错。电流过大的原因有两个：短路或用电器总功率过大，故 D 错。',
        en: 'A fuse protects by melting first: high resistance and low melting point, so C is right. An over-thick fuse fails to melt when it should; copper would not melt at all — A and B are wrong. Excess current has two causes, short circuit or overload, so D is wrong.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '使用试电笔辨别火线和零线时，下列做法正确的是（　）',
        en: 'When using a test screwdriver to tell the live wire from neutral, the correct practice is',
      },
      options: {
        zh: [
          '手指接触笔尖的金属部分，笔尖接触导线',
          '手指接触笔尾金属体，笔尖接触导线，氖管发光的是火线',
          '手指不接触笔的任何金属部分，只用笔尖接触导线',
          '氖管发光，说明接触的是零线',
        ],
        en: [
          'touch the metal tip with a finger while the tip touches the wire',
          'touch the metal cap at the end of the handle while the tip touches the wire; if the neon glows, it is the live wire',
          'touch no metal part of the tester at all, only put the tip on the wire',
          'if the neon glows, the wire is the neutral',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '正确用法是手触笔尾金属体、笔尖接触导线：构成经人体的微弱回路，氖管发光即为火线。碰笔尖会直接触电；手不碰笔尾金属体则回路不通，氖管不发光，无法判断；氖管发光对应火线而非零线。',
        en: 'The correct grip is finger on the end cap and tip on the wire, completing a very weak circuit through the body — a glowing neon means the live wire. Touching the tip gives a direct shock; touching no metal leaves the circuit open so the lamp never glows; and a glowing neon indicates live, not neutral.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-fuse-rating-choice',
      syllabus: ['0625/4.4.3'],
      tier: 'core',
      commandWord: 'Determine',
      marks: 3,
      stem: 'A 1.2 kW hairdryer is used on a 230 V mains supply. Fuses are available rated at 1 A, 3 A, 5 A, 10 A and 13 A. Determine which fuse should be fitted, and justify your choice.',
      markScheme: [
        {
          text: 'I = P / V = 1200 / 230 = 5.2 A',
          marks: 1,
        },
        {
          text: 'The 10 A fuse should be fitted',
          marks: 1,
        },
        {
          text: 'because the rating must be above the working current or the fuse blows in normal use, but as close to it as possible so that it blows quickly if a fault occurs — 5 A is below 5.2 A and 13 A is unnecessarily high',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '理由的两个方面都要写。额定值低于工作电流的保险丝什么也保护不了，只会让电器无法工作。',
        en: 'Both halves of the justification are needed. A fuse rated below the working current does not protect anything, it simply stops the appliance working.',
      },
    },
    {
      id: 'ep-switch-live-wire',
      syllabus: ['0625/4.4.2'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 3,
      stem: 'Explain why a switch in a mains appliance must be connected in the live wire rather than in the neutral wire.',
      markScheme: [
        {
          text: 'The live wire is the one at a high potential relative to earth',
          marks: 1,
        },
        {
          text: 'A switch in the live wire disconnects the appliance from that high potential when it is off',
          marks: 1,
        },
        {
          text: 'A switch in the neutral would stop the current, but the appliance would remain connected to the live supply, so someone touching it could still receive a shock',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '两种接法都能切断电流。但只有一种能让电器安全地被打开，这个区别就是全部答案。',
        en: 'Both switch positions stop the current. Only one of them makes the appliance safe to open, and that difference is the whole answer.',
      },
    },
  ],
  related: ['phy-home-002', 'phy-power-001', 'igcse-0625-4-4-safety'],
};
