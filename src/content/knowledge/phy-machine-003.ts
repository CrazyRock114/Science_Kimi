import { projectileKernel } from '../../simulations/kernels/projectile';
import type { KnowledgePoint } from '../types';

export const phyMachine003: KnowledgePoint = {
  id: 'phy-machine-003',
  subject: 'physics',
  title: { zh: '动能、势能及其转化', en: 'Kinetic Energy, Potential Energy and Their Interconversion' },
  summary: {
    zh: '认识动能与重力势能的影响因素，通过抛体运动理解动能和势能的相互转化及机械能守恒的条件。',
    en: 'Learn what kinetic and gravitational potential energy depend on, and use projectile motion to understand the interconversion between them and the condition for conservation of mechanical energy.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j8b/ch5', 'pep-phy-s2/ch4'],
    igcse: ['0625/1.7'],
  },
  keywords: {
    zh: ['动能', '重力势能', '弹性势能', '机械能', '能量转化', '机械能守恒', '抛体运动'],
    en: ['kinetic energy', 'gravitational potential energy', 'elastic potential energy', 'mechanical energy', 'energy transfer', 'conservation of mechanical energy', 'projectile motion'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '动能与势能' },
      {
        type: 'paragraph',
        text: '物体由于运动而具有的能叫动能。动能的大小与质量和速度有关：质量相同的物体，速度越大动能越大；速度相同的物体，质量越大动能越大。物体由于被举高而具有的能叫重力势能，其大小与质量和高度有关。动能与势能统称为机械能。',
      },
      { type: 'formula', latex: 'E_k = \\tfrac{1}{2}mv^2', caption: '动能：质量 m、速度 v（速度加倍，动能变为四倍）' },
      { type: 'formula', latex: 'E_p = mgh', caption: '重力势能：质量 m、重力加速度 g、高度 h' },
      { type: 'heading', text: '动能与势能的相互转化' },
      {
        type: 'paragraph',
        text: '以竖直上抛为例：小球上升时速度减小、高度增大，动能不断转化为重力势能；到达最高点时速度为零，动能最小（为零），重力势能最大；下落时则相反，重力势能又转化为动能。整个过程能量的总量保持不变——只是形式在转化。',
      },
      {
        type: 'paragraph',
        text: '斜抛运动稍有不同：到达最高点时小球仍有水平方向的速度，所以动能不为零，只是最小；此时重力势能最大。只有重力做功（忽略空气阻力）时，动能与重力势能之和——机械能——保持不变，这叫机械能守恒。',
      },
      { type: 'formula', latex: 'E_k + E_p = \\text{常量}', caption: '只有重力做功时机械能守恒' },
      {
        type: 'list',
        items: [
          '滚摆、单摆：下降时势能转化为动能，上升时动能转化为势能。',
          '有摩擦或空气阻力时，一部分机械能转化为内能，机械能不守恒（总能量仍守恒）。',
          '拉弯的弓、压缩的弹簧具有弹性势能，释放后弹性势能可转化为动能。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Kinetic and potential energy' },
      {
        type: 'paragraph',
        text: 'The energy an object has due to its motion is kinetic energy; it depends on mass and speed — at the same mass, greater speed means greater kinetic energy, and at the same speed, greater mass means greater kinetic energy. The energy an object has due to its raised position is gravitational potential energy (GPE), which depends on mass and height. Kinetic and potential energies together are called mechanical energy.',
      },
      { type: 'formula', latex: 'E_k = \\tfrac{1}{2}mv^2', caption: 'Kinetic energy: mass m, speed v (double the speed, quadruple the KE)' },
      { type: 'formula', latex: 'E_p = mgh', caption: 'Gravitational potential energy: mass m, gravitational field strength g, height h' },
      { type: 'heading', text: 'Interconversion of KE and GPE' },
      {
        type: 'paragraph',
        text: 'Take vertical projection: as the ball rises, its speed falls and its height grows — kinetic energy is steadily converted into GPE. At the top the speed is zero, so KE is minimum (zero) and GPE is maximum. On the way down, GPE converts back into kinetic energy. The total amount of energy stays the same throughout — only its form changes.',
      },
      {
        type: 'paragraph',
        text: 'For an angled projectile it is slightly different: at the top of the path the ball still has its horizontal velocity, so the kinetic energy is not zero — only at its minimum — while the GPE is maximum. When only gravity does work (air resistance ignored), the sum of KE and GPE — the mechanical energy — stays constant. This is the conservation of mechanical energy.',
      },
      { type: 'formula', latex: 'E_k + E_p = \\text{constant}', caption: 'Mechanical energy is conserved when only gravity does work' },
      {
        type: 'list',
        items: [
          'A pendulum or rolling yo-yo: falling converts GPE into KE; rising converts KE back into GPE.',
          'With friction or air resistance, some mechanical energy becomes internal (thermal) energy; mechanical energy is not conserved (total energy still is).',
          'A drawn bow or compressed spring stores elastic potential energy, which can be released as kinetic energy.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'projectile-motion',
    params: [
      {
        key: 'v0',
        label: { zh: '初速度 v₀', en: 'Initial speed v₀' },
        min: 1,
        max: 50,
        step: 1,
        defaultValue: 20,
        unit: 'm/s',
      },
      {
        key: 'angle',
        label: { zh: '抛射角 θ', en: 'Launch angle θ' },
        min: 5,
        max: 90,
        step: 1,
        defaultValue: 45,
        unit: '°',
      },
      {
        key: 'g',
        label: { zh: '重力加速度 g', en: 'Gravitational acceleration g' },
        min: 1.6,
        max: 24.8,
        step: 0.1,
        defaultValue: 9.8,
        unit: 'm/s²',
      },
    ],
    liveFormulas: [
      {
        id: 'max-height',
        latex: 'H = \\frac{(v_0\\sin\\theta)^2}{2g}',
        substitute: (p) =>
          `H = \\frac{(${p.v0}\\sin ${p.angle}^\\circ)^2}{2 \\times ${p.g}} \\approx ${(
            (p.v0 * Math.sin((p.angle * Math.PI) / 180)) ** 2 / (2 * p.g)
          ).toFixed(2)}\\ \\text{m}`,
      },
      {
        id: 'flight-time',
        latex: 'T = \\frac{2v_0\\sin\\theta}{g}',
        substitute: (p) =>
          `T = \\frac{2 \\times ${p.v0}\\sin ${p.angle}^\\circ}{${p.g}} \\approx ${(
            (2 * p.v0 * Math.sin((p.angle * Math.PI) / 180)) / p.g
          ).toFixed(2)}\\ \\text{s}`,
      },
    ],
  },
  presets: [
    {
      id: 'vertical-throw',
      name: { zh: '竖直上抛', en: 'Vertical throw' },
      description: {
        zh: '抛射角 90°：最高点速度为零，动能全部转化为重力势能。',
        en: 'Launch angle 90°: at the top the speed is zero and all KE has become GPE.',
      },
      params: { v0: 20, angle: 90, g: 9.8 },
    },
    {
      id: 'angled-45',
      name: { zh: '斜抛 45°', en: 'Angled throw at 45°' },
      description: {
        zh: '斜抛时最高点仍有水平速度，动能最小但不为零。',
        en: 'At 45° the projectile keeps its horizontal speed at the top, so KE is minimum but not zero.',
      },
      params: { v0: 20, angle: 45, g: 9.8 },
    },
    {
      id: 'moon-throw',
      name: { zh: '月球上抛', en: 'Throwing on the Moon' },
      description: {
        zh: '同样初速度在月球（g = 1.6 m/s²）上飞得更高更久，势能转化更慢。',
        en: 'With the same initial speed on the Moon (g = 1.6 m/s²), the ball goes higher for longer — the energy conversion is slower.',
      },
      params: { v0: 20, angle: 45, g: 1.6 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '小球竖直向上抛出后（忽略空气阻力），上升过程中能量如何转化？',
        en: 'A ball is thrown vertically upward (air resistance ignored). How does the energy change while it rises?',
      },
      options: {
        zh: [
          '动能转化为重力势能',
          '重力势能转化为动能',
          '动能和重力势能都增大',
          '机械能不断减小',
        ],
        en: [
          'Kinetic energy converts into gravitational potential energy',
          'Gravitational potential energy converts into kinetic energy',
          'Both kinetic and potential energy increase',
          'The mechanical energy keeps decreasing',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '上升时速度减小（动能减小）、高度增大（势能增大），动能转化为重力势能；忽略阻力时机械能总量不变。势能转化为动能是下落过程；两者不可能同时增大；没有阻力机械能不减小。',
        en: 'Rising: speed falls (KE decreases) and height grows (GPE increases), so KE converts into GPE; with no resistance, mechanical energy stays constant. GPE→KE describes the fall; the two cannot both increase; without resistance mechanical energy does not decrease.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '质量不变的物体，速度变为原来的 2 倍，它的动能变为原来的多少倍？',
        en: 'If the speed of an object of constant mass doubles, its kinetic energy becomes how many times larger?',
      },
      options: {
        zh: ['2 倍', '4 倍', '8 倍', '不变'],
        en: ['2 times', '4 times', '8 times', 'Unchanged'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'E_k = ½mv²，动能与速度的平方成正比，速度加倍则动能变为 2² = 4 倍。误认为 2 倍是把它当成正比关系；8 倍混淆了立方；动能显然随速度变化，不可能不变。',
        en: 'E_k = ½mv² — kinetic energy is proportional to the square of speed, so doubling the speed gives 2² = 4 times the KE. “2 times” mistakes it for direct proportion; “8 times” confuses a cube; KE clearly changes with speed.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '斜向上抛出的小球到达轨迹最高点时（忽略空气阻力），下列说法正确的是？',
        en: 'A ball thrown at an angle reaches the top of its path (air resistance ignored). Which statement is correct?',
      },
      options: {
        zh: [
          '动能为零，重力势能最大',
          '动能最小但不为零，重力势能最大',
          '动能最大，重力势能最小',
          '机械能最大',
        ],
        en: [
          'The kinetic energy is zero and the GPE is maximum',
          'The kinetic energy is minimum but not zero, and the GPE is maximum',
          'The kinetic energy is maximum and the GPE is minimum',
          'The mechanical energy is maximum',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '最高点竖直分速度为零，但水平分速度不变，所以动能最小而不为零；此时高度最高，重力势能最大。“动能为零”只对竖直上抛成立；动能最大、势能最小在抛出点（最低点）；忽略阻力时机械能处处相等，不存在“最大”。',
        en: 'At the top the vertical component of velocity is zero but the horizontal component is unchanged, so KE is minimum but not zero; the height — and so the GPE — is maximum. “KE is zero” holds only for a vertical throw; maximum KE and minimum GPE occur at the launch point; with no resistance, mechanical energy is the same everywhere.',
      },
    },
  ],
  kernels: {
    projectile: projectileKernel,
  },
  expectedResults: [
    {
      id: 'probe-angled-45',
      description: {
        zh: '20 m/s、45° 斜抛：射程 ≈ 40.82 m，最大高度 ≈ 10.20 m，飞行时间 ≈ 2.89 s',
        en: '20 m/s at 45°: range ≈ 40.82 m, max height ≈ 10.20 m, flight time ≈ 2.89 s',
      },
      kernel: 'projectile',
      input: { v0: 20, angle: 45, g: 9.8 },
      expected: { range: 40.8163, maxHeight: 10.2041, flightTime: 2.8862 },
      tolerance: 1e-4,
    },
    {
      id: 'probe-vertical',
      description: {
        zh: '20 m/s 竖直上抛：射程为 0，最大高度 ≈ 20.41 m，飞行时间 ≈ 4.08 s',
        en: '20 m/s vertical throw: range 0, max height ≈ 20.41 m, flight time ≈ 4.08 s',
      },
      kernel: 'projectile',
      input: { v0: 20, angle: 90, g: 9.8 },
      expected: { range: 0, maxHeight: 20.4082, flightTime: 4.0816 },
      tolerance: 1e-4,
    },
    {
      id: 'probe-moon',
      description: {
        zh: '月球上 10 m/s、30° 斜抛：射程 ≈ 54.13 m，最大高度 = 7.8125 m，飞行时间 = 6.25 s',
        en: 'On the Moon, 10 m/s at 30°: range ≈ 54.13 m, max height = 7.8125 m, flight time = 6.25 s',
      },
      kernel: 'projectile',
      input: { v0: 10, angle: 30, g: 1.6 },
      expected: { range: 54.1266, maxHeight: 7.8125, flightTime: 6.25 },
      tolerance: 1e-4,
    },
  ],
};
