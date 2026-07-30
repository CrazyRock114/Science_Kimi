import { projectileKernel } from '../../simulations/kernels/projectile';
import type { KnowledgePoint } from '../types';

export const phyKinematicsFreefall: KnowledgePoint = {
  id: 'phy-kinematics-freefall',
  subject: 'physics',
  title: { zh: '自由落体运动', en: 'Free Fall' },
  summary: {
    zh: '只在重力作用下从静止开始的运动是自由落体：加速度恒为 g，与物体质量无关。对比地球与月球上的竖直上抛，感受 g 的影响。',
    en: 'Free fall is motion under gravity alone, with constant acceleration g independent of mass. Compare vertical throws on Earth and the Moon to see the effect of g.',
  },
  gradeTier: 'senior',
  syllabus: {
    pep: ['pep-phy-s1/ch2', 'pep-phy-j8b/ch1'],
    igcse: ['0625/1.2'],
  },
  keywords: {
    zh: ['自由落体', '重力加速度', 'g', '竖直上抛', '匀变速直线运动', '真空'],
    en: ['free fall', 'acceleration of free fall', 'g', 'vertical throw', 'uniform acceleration', 'vacuum'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是自由落体' },
      {
        type: 'paragraph',
        text: '物体只在重力作用下、从静止开始下落的运动叫做自由落体运动。在有空气的环境中，羽毛比铁球落得慢是空气阻力造成的；在真空（或空气阻力可忽略）中，一切物体下落的快慢完全相同——与质量、形状无关。',
      },
      {
        type: 'list',
        items: [
          '自由落体是初速度为零、加速度恒为 g 的匀加速直线运动。',
          '在地面附近 g ≈ 9.8 m/s²，粗略计算时常取 10 m/s²，方向竖直向下。',
          'g 随星球不同而不同：月球表面约为 1.6 m/s²，约为地面的 1/6。',
        ],
      },
      { type: 'heading', text: '自由落体的规律' },
      {
        type: 'paragraph',
        text: '把匀变速直线运动的公式代入 u = 0、a = g，就得到自由落体的速度与下落高度：',
      },
      { type: 'formula', latex: 'v = gt', caption: '下落 t 秒后的速度' },
      { type: 'formula', latex: 'h = \\tfrac{1}{2}gt^2', caption: '下落 t 秒的高度（位移）' },
      { type: 'heading', text: '竖直上抛：向上的“自由落体”' },
      {
        type: 'paragraph',
        text: '以初速度 v₀ 竖直上抛的物体，上升时匀减速到最高点（瞬时速度为零，但加速度仍为 g，方向向下），随后自由下落回到原点。整个过程加速度始终为 g，可用同一组公式描述（把抛射角取 90° 即可在仿真中观察）。',
      },
      { type: 'formula', latex: 'h_{\\max} = \\frac{v_0^2}{2g}, \\qquad T = \\frac{2v_0}{g}', caption: '竖直上抛的最大高度与总飞行时间（回到出发点）' },
      {
        type: 'paragraph',
        text: 'g 越小，上升得越高、飞行时间越长。同样的 10 m/s 竖直上抛，地球上约 2.0 s 落回、最高约 5.1 m；月球上要 12.5 s 才落回、最高可达 31.25 m。',
      },
    ],
    en: [
      { type: 'heading', text: 'What is free fall?' },
      {
        type: 'paragraph',
        text: 'Free fall is the motion of an object falling from rest under gravity alone. In air, a feather falls more slowly than a steel ball because of air resistance; in a vacuum (or when air resistance is negligible) all objects fall at exactly the same rate — independent of mass and shape.',
      },
      {
        type: 'list',
        items: [
          'Free fall is uniformly accelerated motion with zero initial velocity and constant acceleration g.',
          'Near the Earth’s surface g ≈ 9.8 m/s² (often taken as 10 m/s² in rough calculations), directed vertically downwards.',
          'g differs between planets and moons: on the Moon it is only about 1.6 m/s², roughly 1/6 of the value on Earth.',
        ],
      },
      { type: 'heading', text: 'The equations of free fall' },
      {
        type: 'paragraph',
        text: 'Substituting u = 0 and a = g into the equations of uniformly accelerated motion gives the velocity and height fallen:',
      },
      { type: 'formula', latex: 'v = gt', caption: 'Velocity after falling for time t' },
      { type: 'formula', latex: 'h = \\tfrac{1}{2}gt^2', caption: 'Height fallen (displacement) in time t' },
      { type: 'heading', text: 'Vertical throw: free fall going upwards' },
      {
        type: 'paragraph',
        text: 'An object thrown vertically upwards with speed v₀ decelerates uniformly until its highest point (where the instantaneous velocity is zero, but the acceleration is still g downwards), then falls freely back. The acceleration is g throughout, so one set of equations describes the whole flight (set the launch angle to 90° in the simulation to see this).',
      },
      { type: 'formula', latex: 'h_{\\max} = \\frac{v_0^2}{2g}, \\qquad T = \\frac{2v_0}{g}', caption: 'Maximum height and total flight time of a vertical throw (returning to the start)' },
      {
        type: 'paragraph',
        text: 'The smaller g is, the higher and longer the flight. The same 10 m/s vertical throw returns in about 2.0 s and peaks at about 5.1 m on Earth, but takes 12.5 s and reaches 31.25 m on the Moon.',
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
        step: 0.5,
        defaultValue: 10,
        unit: 'm/s',
      },
      {
        key: 'angle',
        label: { zh: '抛射角 θ', en: 'Launch angle θ' },
        min: 0,
        max: 90,
        step: 1,
        defaultValue: 90,
        unit: '°',
      },
      {
        key: 'g',
        label: { zh: '重力加速度 g', en: 'Gravitational acceleration g' },
        min: 1,
        max: 25,
        step: 0.1,
        defaultValue: 9.8,
        unit: 'm/s²',
      },
    ],
    liveFormulas: [
      {
        id: 'max-height',
        latex: 'h_{\\max} = \\frac{(v_0\\sin\\theta)^2}{2g}',
        substitute: (p) => `h_{\\max} = \\frac{(${p.v0}\\sin ${p.angle}^\\circ)^2}{2\\times ${p.g}}`,
      },
      {
        id: 'flight-time',
        latex: 'T = \\frac{2v_0\\sin\\theta}{g}',
        substitute: (p) => `T = \\frac{2\\times ${p.v0}\\sin ${p.angle}^\\circ}{${p.g}}`,
      },
    ],
  },
  presets: [
    {
      id: 'earth-throw',
      name: { zh: '地面竖直上抛（g = 9.8）', en: 'Vertical throw on Earth (g = 9.8)' },
      description: {
        zh: '在地面以 10 m/s 竖直上抛，约 2.0 s 落回，最高约 5.1 m。',
        en: 'A 10 m/s vertical throw on Earth returns in about 2.0 s and peaks at about 5.1 m.',
      },
      params: { v0: 10, angle: 90, g: 9.8 },
    },
    {
      id: 'moon-throw',
      name: { zh: '月球竖直上抛（g = 1.6）', en: 'Vertical throw on the Moon (g = 1.6)' },
      description: {
        zh: '同样的 10 m/s 竖直上抛搬到月球，要 12.5 s 才落回，最高达 31.25 m。',
        en: 'The same 10 m/s throw on the Moon takes 12.5 s to return and reaches 31.25 m.',
      },
      params: { v0: 10, angle: 90, g: 1.6 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '在真空中，一片羽毛和一个铁球从同一高度同时由静止释放，哪个先落地？',
        en: 'In a vacuum, a feather and a steel ball are released from rest at the same height. Which lands first?',
      },
      options: {
        zh: ['铁球先落地', '羽毛先落地', '同时落地', '无法确定，要看它们的质量'],
        en: ['The steel ball', 'The feather', 'They land at the same time', 'It depends on their masses'],
      },
      answerIndex: 2,
      explanation: {
        zh: '真空中没有空气阻力，一切物体自由下落的加速度都是 g，与质量无关，所以同时落地。铁球先落地只在有空气阻力时成立。',
        en: 'Without air resistance every object in free fall has the same acceleration g, independent of mass, so they land together. The steel ball landing first only happens when air resistance acts.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '一物体从静止开始做自由落体运动，取 g = 9.8 m/s²，下落 3 s 末的速度约是多少？',
        en: 'An object falls freely from rest. Taking g = 9.8 m/s², what is its approximate velocity after 3 s?',
      },
      options: {
        zh: ['9.8 m/s', '19.6 m/s', '29.4 m/s', '44.1 m/s'],
        en: ['9.8 m/s', '19.6 m/s', '29.4 m/s', '44.1 m/s'],
      },
      answerIndex: 2,
      explanation: {
        zh: 'v = gt = 9.8 × 3 = 29.4 m/s。9.8 m/s 是 1 s 末的速度；44.1 m 是 3 s 内下落的高度（½gt²），不是速度。',
        en: 'v = gt = 9.8 × 3 = 29.4 m/s. 9.8 m/s is the velocity after 1 s; 44.1 m is the height fallen in 3 s (½gt²), not a velocity.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '竖直上抛的物体到达最高点时，下列说法正确的是哪一项？',
        en: 'When a vertically thrown object reaches its highest point, which statement is correct?',
      },
      options: {
        zh: [
          '速度和加速度都为零',
          '速度为零，加速度仍为 g，方向竖直向下',
          '速度为零，加速度方向变为竖直向上',
          '速度和加速度都不为零',
        ],
        en: [
          'Both velocity and acceleration are zero',
          'Velocity is zero, but acceleration is still g directed downwards',
          'Velocity is zero and the acceleration points upwards',
          'Neither velocity nor acceleration is zero',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '最高点处瞬时速度为零，但重力始终存在，加速度始终是 g、方向竖直向下——若加速度也为零，物体就不会再落回来了。',
        en: 'At the highest point the instantaneous velocity is zero, but gravity still acts, so the acceleration remains g downwards — if it were zero, the object would never fall back.',
      },
    },
  ],
  kernels: {
    projectile: projectileKernel,
  },
  expectedResults: [
    {
      id: 'probe-earth-vertical-throw',
      description: {
        zh: '地面 10 m/s 竖直上抛（θ = 90°，g = 9.8）：最高约 5.10 m，约 2.04 s 落回',
        en: '10 m/s vertical throw on Earth (θ = 90°, g = 9.8): peak ≈ 5.10 m, returns in ≈ 2.04 s',
      },
      kernel: 'projectile',
      input: { v0: 10, angle: 90, g: 9.8 },
      expected: { maxHeight: 5.1020408163, flightTime: 2.0408163265 },
    },
    {
      id: 'probe-moon-vertical-throw',
      description: {
        zh: '月球 10 m/s 竖直上抛（θ = 90°，g = 1.6）：最高 31.25 m，12.5 s 落回',
        en: '10 m/s vertical throw on the Moon (θ = 90°, g = 1.6): peak 31.25 m, returns in 12.5 s',
      },
      kernel: 'projectile',
      input: { v0: 10, angle: 90, g: 1.6 },
      expected: { maxHeight: 31.25, flightTime: 12.5 },
    },
    {
      id: 'probe-half-speed-throw',
      description: {
        zh: '地面 5 m/s 竖直上抛（θ = 90°，g = 9.8）：最高约 1.28 m，约 1.02 s 落回；初速度减半则高度变为 1/4',
        en: '5 m/s vertical throw on Earth (θ = 90°, g = 9.8): peak ≈ 1.28 m, returns in ≈ 1.02 s; halving v₀ quarters the height',
      },
      kernel: 'projectile',
      input: { v0: 5, angle: 90, g: 9.8 },
      expected: { maxHeight: 1.2755102041, flightTime: 1.0204081633 },
    },
  ],
};
