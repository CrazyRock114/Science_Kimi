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
};
