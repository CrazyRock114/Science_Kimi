import { leverKernel } from '../../simulations/kernels/lever';
import type { KnowledgePoint } from '../types';

export const phyMachine001: KnowledgePoint = {
  id: 'phy-machine-001',
  subject: 'physics',
  title: { zh: '杠杆的平衡条件', en: 'The Balance Condition of a Lever' },
  summary: {
    zh: '认识杠杆的五要素，通过实验探究杠杆的平衡条件 F₁l₁ = F₂l₂，并用来分析省力、费力和等臂杠杆。',
    en: 'Learn the five elements of a lever, investigate the balance (moment) condition F₁l₁ = F₂l₂, and use it to analyse force-saving, force-multiplying and equal-arm levers.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch6'],
    igcse: ['0625/1.5'],
  },
  keywords: {
    zh: ['杠杆', '支点', '动力臂', '阻力臂', '力矩', '杠杆平衡条件', '省力杠杆', '费力杠杆'],
    en: ['lever', 'pivot', 'fulcrum', 'moment', 'turning effect', 'principle of moments', 'effort arm', 'load arm'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '杠杆与它的五要素' },
      {
        type: 'paragraph',
        text: '一根硬棒在力的作用下能绕固定点转动，这根硬棒就是杠杆。杠杆的五要素：支点 O（杠杆绕其转动的固定点）、动力 F₁（使杠杆转动的力）、阻力 F₂（阻碍杠杆转动的力）、动力臂 l₁（支点到动力作用线的垂直距离）、阻力臂 l₂（支点到阻力作用线的垂直距离）。注意：力臂是“点到线的距离”，不一定沿杠杆本身。',
      },
      { type: 'heading', text: '杠杆的平衡条件' },
      {
        type: 'paragraph',
        text: '杠杆在动力和阻力作用下保持静止或匀速转动时，杠杆处于平衡状态。实验表明：杠杆平衡时，动力与动力臂的乘积等于阻力与阻力臂的乘积，即两边的力矩（力 × 力臂）相等。',
      },
      { type: 'formula', latex: 'F_1 l_1 = F_2 l_2', caption: '杠杆的平衡条件（力矩相等）' },
      { type: 'formula', latex: '\\frac{F_1}{F_2} = \\frac{l_2}{l_1}', caption: '变形：力与力臂成反比' },
      {
        type: 'paragraph',
        text: '由平衡条件可知：动力臂是阻力臂的几倍，动力就是阻力的几分之一。想省力，就要让动力臂大于阻力臂——但省力的同时，动力作用点移动的距离会变大，即“省力费距离”。',
      },
      { type: 'heading', text: '三类杠杆' },
      {
        type: 'list',
        items: [
          '省力杠杆：l₁ > l₂，F₁ < F₂，省力但费距离，如撬棍、羊角锤、开瓶器、手推车。',
          '费力杠杆：l₁ < l₂，F₁ > F₂，费力但省距离，如镊子、钓鱼竿、人的前臂。',
          '等臂杠杆：l₁ = l₂，F₁ = F₂，不省力也不费力，如天平、跷跷板（对称时）。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'The lever and its five elements' },
      {
        type: 'paragraph',
        text: 'A rigid bar that can rotate about a fixed point under forces is a lever. Its five elements are: the pivot O, the effort F₁ (the force that turns the lever), the load F₂ (the resisting force), the effort arm l₁ (the perpendicular distance from the pivot to the line of action of the effort) and the load arm l₂. Note: an arm is a point-to-line distance and does not have to lie along the bar itself.',
      },
      { type: 'heading', text: 'The balance condition' },
      {
        type: 'paragraph',
        text: 'A lever is in equilibrium when it stays at rest or rotates uniformly. Experiments show that at balance the product of effort and effort arm equals the product of load and load arm — the moments (force × perpendicular distance) on the two sides are equal. This is the principle of moments.',
      },
      { type: 'formula', latex: 'F_1 l_1 = F_2 l_2', caption: 'Balance condition (moments are equal)' },
      { type: 'formula', latex: '\\frac{F_1}{F_2} = \\frac{l_2}{l_1}', caption: 'Rearranged: force is inversely proportional to arm' },
      {
        type: 'paragraph',
        text: 'If the effort arm is n times the load arm, the effort needed is only 1/n of the load. A longer effort arm saves force, but the effort point must move through a longer distance — “saving force costs distance”.',
      },
      { type: 'heading', text: 'Three classes of levers' },
      {
        type: 'list',
        items: [
          'Force-saving lever: l₁ > l₂, F₁ < F₂ — saves force over a longer distance, e.g. crowbar, claw hammer, bottle opener.',
          'Distance-saving lever: l₁ < l₂, F₁ > F₂ — costs force but moves the load further/faster, e.g. tweezers, fishing rod, human forearm.',
          'Equal-arm lever: l₁ = l₂, F₁ = F₂ — no force advantage, e.g. a balance scale, a centred seesaw.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'lever-balance',
    params: [
      {
        key: 'f1',
        label: { zh: '左侧力 F₁', en: 'Left force F₁' },
        min: 1,
        max: 20,
        step: 0.5,
        defaultValue: 6,
        unit: 'N',
      },
      {
        key: 'd1',
        label: { zh: '左侧力臂 d₁', en: 'Left arm d₁' },
        min: 1,
        max: 10,
        step: 0.5,
        defaultValue: 4,
        unit: '格',
      },
      {
        key: 'f2',
        label: { zh: '右侧力 F₂', en: 'Right force F₂' },
        min: 1,
        max: 20,
        step: 0.5,
        defaultValue: 4,
        unit: 'N',
      },
      {
        key: 'd2',
        label: { zh: '右侧力臂 d₂', en: 'Right arm d₂' },
        min: 1,
        max: 10,
        step: 0.5,
        defaultValue: 6,
        unit: '格',
      },
    ],
    liveFormulas: [
      {
        id: 'torque-left',
        latex: '\\tau_1 = F_1 d_1',
        substitute: (p) => `\\tau_1 = ${p.f1} \\times ${p.d1} = ${p.f1 * p.d1}`,
      },
      {
        id: 'torque-right',
        latex: '\\tau_2 = F_2 d_2',
        substitute: (p) => `\\tau_2 = ${p.f2} \\times ${p.d2} = ${p.f2 * p.d2}`,
      },
    ],
  },
  presets: [
    {
      id: 'default-balance',
      name: { zh: '默认平衡', en: 'Default balance' },
      description: {
        zh: 'F₁d₁ = F₂d₂ = 24，杠杆水平平衡。',
        en: 'F₁d₁ = F₂d₂ = 24, the lever balances horizontally.',
      },
      params: { f1: 6, d1: 4, f2: 4, d2: 6 },
    },
    {
      id: 'seesaw',
      name: { zh: '跷跷板：小孩与大人', en: 'Seesaw: child and adult' },
      description: {
        zh: '大人重、坐得离支点近，小孩轻、坐得远，两边力矩恰好相等。',
        en: 'The heavier adult sits closer to the pivot and the lighter child farther away; the moments are equal.',
      },
      params: { f1: 10, d1: 2, f2: 4, d2: 5 },
    },
    {
      id: 'crowbar',
      name: { zh: '撬棍省力', en: 'Crowbar saves force' },
      description: {
        zh: '动力臂是阻力臂的 8 倍，2 N 的动力就能撬动 16 N 的重物。',
        en: 'The effort arm is 8 times the load arm, so a 2 N effort lifts a 16 N load.',
      },
      params: { f1: 2, d1: 8, f2: 16, d2: 1 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一根杠杆处于平衡状态，动力 F₁ = 4 N，动力臂 l₁ = 0.3 m，阻力臂 l₂ = 0.2 m。阻力 F₂ 是多少？',
        en: 'A lever is balanced. The effort F₁ = 4 N acts at an arm of l₁ = 0.3 m, and the load arm is l₂ = 0.2 m. What is the load F₂?',
      },
      options: {
        zh: ['2.7 N', '6 N', '8 N', '24 N'],
        en: ['2.7 N', '6 N', '8 N', '24 N'],
      },
      answerIndex: 1,
      explanation: {
        zh: '由平衡条件 F₁l₁ = F₂l₂，F₂ = F₁l₁/l₂ = 4 × 0.3 / 0.2 = 6 N。2.7 N 是把 l₂/l₁ 的比例弄反；8 N 错误地把力臂相加；24 N 是误把两力矩相乘而不是相等。',
        en: 'From F₁l₁ = F₂l₂: F₂ = F₁l₁/l₂ = 4 × 0.3 / 0.2 = 6 N. 2.7 N inverts the arm ratio; 8 N wrongly adds the arms; 24 N multiplies the moments instead of equating them.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '跷跷板上，体重 400 N 的大人坐在距支点 1 m 处。体重 200 N 的小孩应坐在另一侧距支点多远处才能平衡？',
        en: 'On a seesaw, an adult weighing 400 N sits 1 m from the pivot. Where should a child weighing 200 N sit on the other side to balance it?',
      },
      options: {
        zh: ['0.5 m', '1 m', '2 m', '4 m'],
        en: ['0.5 m', '1 m', '2 m', '4 m'],
      },
      answerIndex: 2,
      explanation: {
        zh: '由 F₁l₁ = F₂l₂：l₂ = 400 × 1 / 200 = 2 m。小孩体重是大人的一半，力臂就要是大人的两倍。0.5 m 把比例弄反；1 m 两边力矩不等；4 m 力矩又过大。',
        en: 'From F₁l₁ = F₂l₂: l₂ = 400 × 1 / 200 = 2 m. The child is half the weight, so needs twice the arm. 0.5 m inverts the ratio; 1 m gives unequal moments; 4 m overcompensates.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列工具中，使用时属于省力杠杆的是哪一个？',
        en: 'Which of the following tools works as a force-saving lever?',
      },
      options: {
        zh: ['用镊子夹取砝码', '用钓鱼竿钓鱼', '用撬棍撬起石头', '用天平称量质量'],
        en: ['Tweezers picking up a weight', 'A fishing rod lifting a fish', 'A crowbar prying up a stone', 'A balance scale measuring mass'],
      },
      answerIndex: 2,
      explanation: {
        zh: '撬棍的动力臂大于阻力臂，是省力杠杆。镊子和钓鱼竿的动力臂小于阻力臂，是费力杠杆（省距离）；天平两臂相等，是等臂杠杆，不省力也不费力。',
        en: 'A crowbar has a longer effort arm than load arm, so it saves force. Tweezers and fishing rods have a shorter effort arm (distance-saving levers); a balance scale has equal arms and gives no force advantage.',
      },
    },
  ],
  kernels: {
    lever: leverKernel,
  },
  expectedResults: [
    {
      id: 'probe-default-balance',
      description: {
        zh: '默认平衡：6 N × 4 格 = 4 N × 6 格 = 24，净力矩为 0',
        en: 'Default balance: 6 N × 4 = 4 N × 6 = 24, net torque is 0',
      },
      kernel: 'lever',
      input: { f1: 6, d1: 4, f2: 4, d2: 6 },
      expected: { torqueLeft: 24, torqueRight: 24, netTorque: 0 },
    },
    {
      id: 'probe-seesaw',
      description: {
        zh: '跷跷板：大人 10 N × 2 格与小孩 4 N × 5 格力矩相等',
        en: 'Seesaw: adult 10 N × 2 balances child 4 N × 5',
      },
      kernel: 'lever',
      input: { f1: 10, d1: 2, f2: 4, d2: 5 },
      expected: { torqueLeft: 20, torqueRight: 20, netTorque: 0 },
    },
    {
      id: 'probe-crowbar',
      description: {
        zh: '撬棍省力：2 N × 8 格 = 16 N × 1 格，小力撬动重物',
        en: 'Crowbar: 2 N × 8 = 16 N × 1, a small effort lifts a heavy load',
      },
      kernel: 'lever',
      input: { f1: 2, d1: 8, f2: 16, d2: 1 },
      expected: { torqueLeft: 16, torqueRight: 16, netTorque: 0 },
    },
  ],
};
