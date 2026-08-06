import { kinematicsKernel } from '../../simulations/kernels/kinematics';
import type { KnowledgePoint } from '../types';

export const phyMotion001: KnowledgePoint = {
  id: 'phy-motion-001',
  subject: 'physics',
  title: { zh: '匀速与匀变速直线运动', en: 'Uniform and Uniformly Accelerated Linear Motion' },
  summary: {
    zh: '用 s-t 与 v-t 图像理解匀速和匀变速直线运动，探究初速度、加速度如何决定物体的运动。',
    en: 'Understand uniform and uniformly accelerated motion through s–t and v–t graphs, and explore how initial velocity and acceleration determine motion.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j8a/ch1', 'pep-phy-s1/ch2'],
    igcse: ['0625/1.2'],
  },
  keywords: {
    zh: ['匀变速', '匀速', '速度', '加速度', '位移', 'v-t 图像', 's-t 图像', '运动学'],
    en: ['velocity', 'acceleration', 'displacement', 'kinematics', 'v-t graph', 's-t graph', 'uniform motion'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '速度不变的直线运动：匀速直线运动' },
      {
        type: 'paragraph',
        text: '物体沿直线运动且速度保持不变时，称为匀速直线运动。此时位移与时间成正比，s-t 图像是一条过原点的倾斜直线，斜率等于速度。',
      },
      { type: 'formula', latex: 's = vt', caption: '匀速直线运动的位移公式' },
      { type: 'heading', text: '速度均匀变化的直线运动：匀变速直线运动' },
      {
        type: 'paragraph',
        text: '加速度 a 保持不变的直线运动称为匀变速直线运动。加速度描述速度变化的快慢：a > 0 时物体加速，a < 0 时物体减速（若初速度为正）。',
      },
      { type: 'formula', latex: 'v = u + at', caption: '末速度：u 为初速度，a 为加速度，t 为时间' },
      { type: 'formula', latex: 's = ut + \\tfrac{1}{2}at^2', caption: '位移公式' },
      {
        type: 'list',
        items: [
          'v-t 图像的斜率表示加速度；v-t 图像是水平线时加速度为零（匀速）。',
          'v-t 图像与时间轴围成的面积表示位移。',
          's-t 图像的斜率表示速度；匀变速运动的 s-t 图像是一条抛物线。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Motion at constant velocity: uniform linear motion' },
      {
        type: 'paragraph',
        text: 'When an object moves along a straight line at a constant velocity, it is in uniform linear motion. Displacement is proportional to time, so the s–t graph is a straight line through the origin whose gradient equals the velocity.',
      },
      { type: 'formula', latex: 's = vt', caption: 'Displacement in uniform linear motion' },
      { type: 'heading', text: 'Motion with uniformly changing velocity' },
      {
        type: 'paragraph',
        text: 'Linear motion with constant acceleration a is called uniformly accelerated motion. Acceleration describes how quickly velocity changes: with a > 0 the object speeds up, and with a < 0 it slows down (if the initial velocity is positive).',
      },
      { type: 'formula', latex: 'v = u + at', caption: 'Final velocity: u is initial velocity, a is acceleration, t is time' },
      { type: 'formula', latex: 's = ut + \\tfrac{1}{2}at^2', caption: 'Displacement equation' },
      {
        type: 'list',
        items: [
          'The gradient of a v–t graph gives the acceleration; a horizontal v–t line means zero acceleration (uniform motion).',
          'The area under a v–t graph gives the displacement.',
          'The gradient of an s–t graph gives the velocity; for accelerated motion the s–t graph is a parabola.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'motion-graphs',
    params: [
      {
        key: 'u',
        label: { zh: '初速度 u', en: 'Initial velocity u' },
        min: 0,
        max: 30,
        step: 0.5,
        defaultValue: 5,
        unit: 'm/s',
      },
      {
        key: 'a',
        label: { zh: '加速度 a', en: 'Acceleration a' },
        min: -5,
        max: 5,
        step: 0.1,
        defaultValue: 2,
        unit: 'm/s²',
      },
    ],
    liveFormulas: [
      {
        id: 'velocity',
        latex: 'v = u + at',
        substitute: (p) => `v = ${p.u} + (${p.a})\\,t`,
      },
      {
        id: 'displacement',
        latex: 's = ut + \\tfrac{1}{2}at^2',
        substitute: (p) => `s = ${p.u}\\,t + \\tfrac{1}{2}\\times(${p.a})\\,t^2`,
      },
    ],
  },
  presets: [
    {
      id: 'car-start',
      name: { zh: '汽车起步', en: 'Car pulling away' },
      description: {
        zh: '汽车从静止开始以 2.5 m/s² 加速。',
        en: 'A car accelerates from rest at 2.5 m/s².',
      },
      params: { u: 0, a: 2.5 },
    },
    {
      id: 'cruise',
      name: { zh: '高速巡航', en: 'Cruising at constant speed' },
      description: {
        zh: '汽车以 20 m/s 匀速行驶，加速度为零。',
        en: 'A car cruises at a constant 20 m/s with zero acceleration.',
      },
      params: { u: 20, a: 0 },
    },
    {
      id: 'braking',
      name: { zh: '紧急刹车', en: 'Emergency braking' },
      description: {
        zh: '汽车以 25 m/s 行驶，以 -5 m/s² 减速，5 s 后停下。',
        en: 'A car travelling at 25 m/s decelerates at −5 m/s² and stops after 5 s.',
      },
      params: { u: 25, a: -5 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一辆汽车以 10 m/s 的初速度、2 m/s² 的加速度做匀加速直线运动，3 s 末的速度是多少？',
        en: 'A car moves with an initial velocity of 10 m/s and a constant acceleration of 2 m/s². What is its velocity after 3 s?',
      },
      options: {
        zh: ['12 m/s', '16 m/s', '26 m/s', '36 m/s'],
        en: ['12 m/s', '16 m/s', '26 m/s', '36 m/s'],
      },
      answerIndex: 1,
      explanation: {
        zh: '由 v = u + at = 10 + 2 × 3 = 16 m/s。',
        en: 'Using v = u + at = 10 + 2 × 3 = 16 m/s.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '一个物体从静止开始以 4 m/s² 的加速度做匀加速直线运动，前 2 s 内的位移是多少？',
        en: 'An object starts from rest and accelerates uniformly at 4 m/s². What is its displacement in the first 2 s?',
      },
      options: {
        zh: ['4 m', '8 m', '12 m', '16 m'],
        en: ['4 m', '8 m', '12 m', '16 m'],
      },
      answerIndex: 1,
      explanation: {
        zh: '由 s = ut + ½at²，u = 0，得 s = ½ × 4 × 2² = 8 m。',
        en: 'Using s = ut + ½at² with u = 0: s = ½ × 4 × 2² = 8 m.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '在 v-t 图像中，图线与时间轴围成的面积表示什么？',
        en: 'In a velocity–time graph, what does the area between the graph line and the time axis represent?',
      },
      options: {
        zh: ['位移', '速度', '加速度', '速度变化的快慢'],
        en: ['Displacement', 'Velocity', 'Acceleration', 'Rate of change of velocity'],
      },
      answerIndex: 0,
      explanation: {
        zh: '面积 = 速度 × 时间，对应位移。B 速度由图线的纵坐标直接读出；C 加速度看的是图线的斜率，而不是面积；D 与加速度同义，同样由斜率给出。',
        en: 'Area = velocity × time, which gives displacement. B is read directly from the vertical coordinate of the line; C acceleration comes from the gradient of the line, not the area; D means the same as acceleration and is likewise given by the gradient.',
      },
    },
  ],
  kernels: {
    kinematics: kinematicsKernel,
  },
  expectedResults: [
    {
      id: 'probe-rest-accel',
      description: {
        zh: '从静止以 2 m/s² 加速 3 s：v = 6 m/s，s = 9 m',
        en: 'Accelerating from rest at 2 m/s² for 3 s: v = 6 m/s, s = 9 m',
      },
      kernel: 'kinematics',
      input: { u: 0, a: 2, t: 3 },
      expected: { v: 6, s: 9 },
    },
    {
      id: 'probe-braking-stop',
      description: {
        zh: '25 m/s 以 -5 m/s² 刹车，5 s 后停下：v = 0，s = 62.5 m',
        en: 'Braking from 25 m/s at −5 m/s² stops after 5 s: v = 0, s = 62.5 m',
      },
      kernel: 'kinematics',
      input: { u: 25, a: -5, t: 5 },
      expected: { v: 0, s: 62.5 },
    },
    {
      id: 'probe-uniform',
      description: {
        zh: '匀速运动（a = 0）：位移与时间成正比',
        en: 'Uniform motion (a = 0): displacement is proportional to time',
      },
      kernel: 'kinematics',
      input: { u: 12, a: 0, t: 4 },
      expected: { v: 12, s: 48 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '汽车起步、高速巡航、紧急刹车——同样是四个轮子在路上跑，运动的样子却完全不同。怎么用图像把它们一眼区分开？这节课我们就靠两张图：位移-时间图和速度-时间图。',
          en: 'A car pulling away, cruising on the motorway, braking hard — same four wheels, completely different kinds of motion. How do you tell them apart at a glance? With two graphs: displacement–time and velocity–time.',
        },
      },
      {
        id: 'concept-uniform',
        kind: 'concept',
        text: {
          zh: '先说最简单的：速度不变，叫匀速直线运动。位移和时间成正比，s-t 图像是一条过原点的倾斜直线，斜率就是速度。对应的 v-t 图像更简单——一条水平线。记住：v-t 图像水平，不表示物体不动，而表示它动得很稳。',
          en: 'Start with the simplest case: constant velocity — uniform motion. Displacement is proportional to time, so the s–t graph is a straight line through the origin whose gradient is the velocity. The v–t graph is even simpler: a flat horizontal line. Remember, horizontal on a v–t graph does not mean "not moving" — it means moving steadily.',
        },
      },
      {
        id: 'concept-accelerated',
        kind: 'concept',
        text: {
          zh: '再看匀变速运动：加速度保持不变。末速度等于初速度加 at，位移等于 ut 加二分之一 at 平方。在 v-t 图像上，斜率就是加速度——上坡加速，下坡减速；图线和时间轴围成的面积，就是这段时间走过的位移。',
          en: 'Now uniformly accelerated motion: the acceleration stays constant. The final velocity is u plus at; the displacement is ut plus a half a t squared. On the v–t graph the gradient is the acceleration — uphill means speeding up, downhill means slowing down — and the area between the line and the time axis is the displacement covered.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '动手时间。依次点三个预设：“汽车起步”“高速巡航”“紧急刹车”，对比三张 v-t 图像的斜率和形状。然后把加速度滑块拖到 0，看 v-t 图线怎么变成水平线。最后试试负的加速度——v-t 图线往下走的同时，s-t 图线会从往上翘变成往下弯，你能看出为什么吗？',
          en: 'Your turn. Tap the three presets in turn — "car pulling away", "cruising", "emergency braking" — and compare the gradient and shape of each v–t graph. Then drag the acceleration slider to zero and watch the v–t line flatten out. Finally try a negative acceleration: as the v–t line slopes down, the s–t curve bends over instead of curving up. Can you see why?',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '总结一下：匀速运动，s-t 是直线、v-t 是水平线；匀变速运动，v-t 的斜率是加速度，面积是位移。两个公式记牢：v 等于 u 加 at，s 等于 ut 加二分之一 at 平方。会读图、会用公式，这一节就齐了——去做小测吧。',
          en: 'To wrap up: in uniform motion the s–t graph is a straight line and the v–t graph is flat; in uniformly accelerated motion the v–t gradient is the acceleration and the area is the displacement. Keep the two equations: v equals u plus at, and s equals ut plus a half a t squared. Read the graphs, use the formulas — and the quiz is yours.',
        },
      },
    ],
  },
  related: ['igcse-0625-1-2-motion', 'phy-kinematics-velocity', 'phy-kinematics-freefall'],
};
