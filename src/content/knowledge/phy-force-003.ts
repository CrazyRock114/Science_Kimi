import { newtonKernel } from '../../simulations/kernels/newton';
import type { KnowledgePoint } from '../types';

export const phyForce003: KnowledgePoint = {
  id: 'phy-force-003',
  subject: 'physics',
  title: { zh: '牛顿第二定律', en: "Newton's Second Law" },
  summary: {
    zh: '探究加速度与力、质量的关系，掌握 F = ma：合力决定加速度；在水平面上体会拉力、摩擦与合力的关系。',
    en: 'Investigate how acceleration depends on force and mass, master F = ma: the resultant force determines acceleration; explore applied force, friction and resultant force on a horizontal surface.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-s1/ch4', 'pep-phy-j8b/ch2'],
    igcse: ['0625/1.5'],
  },
  keywords: {
    zh: ['牛顿第二定律', '加速度', '合力', '质量', '摩擦力', '控制变量法'],
    en: ["Newton's second law", 'acceleration', 'resultant force', 'mass', 'friction', 'control variables'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '加速度与力、质量的关系' },
      {
        type: 'paragraph',
        text: '用控制变量法做实验可以发现：质量一定时，物体的加速度与所受合力成正比；合力一定时，加速度与质量成反比。这就是牛顿第二定律。',
      },
      { type: 'formula', latex: 'F_{\\text{合}} = ma', caption: '合力 F（N）＝ 质量 m（kg）× 加速度 a（m/s²）' },
      {
        type: 'paragraph',
        text: '加速度的方向与合力方向一致。注意公式中的 F 是物体所受一切力的合力，而不只是某一个拉力。',
      },
      { type: 'heading', text: '水平面上的合力：拉力与摩擦' },
      {
        type: 'paragraph',
        text: '在粗糙水平面上拉动物块时，摩擦力阻碍运动。若拉力 F 不大于最大摩擦力 f = μmg，物块保持静止（合力为零）；只有拉力超过最大摩擦力，物块才开始加速，此时合力为 F − μmg。',
      },
      { type: 'formula', latex: 'a = \\dfrac{F - \\mu mg}{m}', caption: '水平面上由静止开始加速时（要求 F > μmg）' },
      {
        type: 'list',
        items: [
          '同样的拉力，质量越大加速度越小——这就是"满载的车难推动"的原因。',
          '摩擦因数 μ 越小（如冰面），摩擦力越小，同样的拉力下加速度越大。',
          '1 N 的定义：使 1 kg 的物体产生 1 m/s² 加速度的力。',
        ],
      },
      { type: 'heading', text: '牛顿第二定律的应用' },
      {
        type: 'paragraph',
        text: '已知受力可以求加速度，进而预测运动（与运动学公式结合）；已知运动也可以反推受力，如由刹车距离估算制动力。分析步骤：确定研究对象 → 受力分析求合力 → 用 F = ma 求加速度。',
      },
    ],
    en: [
      { type: 'heading', text: 'How acceleration depends on force and mass' },
      {
        type: 'paragraph',
        text: 'Experiments using control variables show that for a fixed mass, acceleration is proportional to the resultant force; and for a fixed force, acceleration is inversely proportional to the mass. This is Newton’s second law.',
      },
      { type: 'formula', latex: 'F = ma', caption: 'Resultant force F (N) = mass m (kg) × acceleration a (m/s²)' },
      {
        type: 'paragraph',
        text: 'The acceleration is in the same direction as the resultant force. Note that F here is the resultant of all forces on the object, not just one applied force.',
      },
      { type: 'heading', text: 'Resultant force on a horizontal surface' },
      {
        type: 'paragraph',
        text: 'When pulling a block along a rough horizontal surface, friction opposes the motion. If the applied force F does not exceed the maximum friction f = μmg, the block stays at rest (zero resultant force); only when F exceeds μmg does the block accelerate, with resultant force F − μmg.',
      },
      { type: 'formula', latex: 'a = \\dfrac{F - \\mu mg}{m}', caption: 'Accelerating from rest on a horizontal surface (requires F > μmg)' },
      {
        type: 'list',
        items: [
          'For the same force, a larger mass gives a smaller acceleration — that is why a fully loaded cart is hard to push.',
          'The smaller the friction coefficient μ (e.g. ice), the smaller the friction and the larger the acceleration for the same force.',
          'Definition of 1 N: the force that gives a 1 kg mass an acceleration of 1 m/s².',
        ],
      },
      { type: 'heading', text: 'Using the second law' },
      {
        type: 'paragraph',
        text: 'Knowing the forces, we can find the acceleration and predict the motion (combined with kinematic equations); knowing the motion, we can deduce the forces, e.g. estimating braking force from a stopping distance. The steps: choose the object → analyse forces to get the resultant → apply F = ma.',
      },
    ],
  },
  simulation: {
    renderer: 'newton-second-law',
    params: [
      {
        key: 'mass',
        label: { zh: '质量 m', en: 'Mass m' },
        min: 0.5,
        max: 20,
        step: 0.5,
        defaultValue: 2,
        unit: 'kg',
      },
      {
        key: 'force',
        label: { zh: '拉力 F', en: 'Applied force F' },
        min: 0,
        max: 50,
        step: 1,
        defaultValue: 10,
        unit: 'N',
      },
      {
        key: 'mu',
        label: { zh: '摩擦因数 μ', en: 'Friction coefficient μ' },
        min: 0,
        max: 0.5,
        step: 0.01,
        defaultValue: 0.1,
      },
    ],
    liveFormulas: [
      {
        id: 'net-force',
        latex: 'F_{\\text{合}} = F - \\mu mg',
        substitute: (p) => {
          const friction = p.mu * p.mass * 9.8;
          const net = Math.max(0, p.force - friction);
          return `F_{\\text{合}} = ${p.force} - ${friction.toFixed(2)} = ${net.toFixed(2)}\\,\\text{N}`;
        },
      },
      {
        id: 'acceleration',
        latex: 'a = \\dfrac{F_{\\text{合}}}{m}',
        substitute: (p) => {
          const friction = p.mu * p.mass * 9.8;
          const net = Math.max(0, p.force - friction);
          const a = net / p.mass;
          return `a = \\dfrac{${net.toFixed(2)}}{${p.mass}} = ${a.toFixed(2)}\\,\\text{m/s}^2`;
        },
      },
    ],
  },
  presets: [
    {
      id: 'empty-cart',
      name: { zh: '空购物车轻推', en: 'Gentle push on an empty cart' },
      description: {
        zh: '1 kg 的空车用 2 N 轻推，轻松加速。',
        en: 'A 1 kg empty cart pushed gently with 2 N accelerates easily.',
      },
      params: { mass: 1, force: 2, mu: 0.1 },
    },
    {
      id: 'loaded-cart',
      name: { zh: '满载购物车', en: 'Fully loaded cart' },
      description: {
        zh: '20 kg 满载的车用 25 N 推，加速度明显变小。',
        en: 'A 20 kg loaded cart pushed with 25 N accelerates much less.',
      },
      params: { mass: 20, force: 25, mu: 0.1 },
    },
    {
      id: 'ice',
      name: { zh: '冰面上', en: 'On ice' },
      description: {
        zh: '冰面 μ = 0.02，摩擦几乎可以忽略，10 N 就能让 5 kg 物块明显加速。',
        en: 'On ice (μ = 0.02) friction is nearly negligible; 10 N clearly accelerates a 5 kg block.',
      },
      params: { mass: 5, force: 10, mu: 0.02 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一个 2 kg 的物体受到 10 N 的合力，它的加速度是多少？',
        en: 'A 2 kg object experiences a resultant force of 10 N. What is its acceleration?',
      },
      options: {
        zh: ['0.2 m/s²', '5 m/s²', '8 m/s²', '20 m/s²'],
        en: ['0.2 m/s²', '5 m/s²', '8 m/s²', '20 m/s²'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'a = F/m = 10/2 = 5 m/s²。0.2 m/s² 误算成 m/F；8 m/s² 误算成 F − m；20 m/s² 误算成 F × m。',
        en: 'a = F/m = 10/2 = 5 m/s². 0.2 m/s² wrongly computes m/F; 8 m/s² wrongly computes F − m; 20 m/s² wrongly computes F × m.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '在水平面上用 6 N 的水平拉力拉一个 2 kg 的物块，摩擦因数 μ = 0.2（g 取 10 N/kg）。物块的加速度是多少？',
        en: 'A 2 kg block on a horizontal surface is pulled with a horizontal force of 6 N; the friction coefficient is μ = 0.2 (g = 10 N/kg). What is its acceleration?',
      },
      options: {
        zh: ['1 m/s²', '2 m/s²', '3 m/s²', '物块保持静止'],
        en: ['1 m/s²', '2 m/s²', '3 m/s²', 'The block stays at rest'],
      },
      answerIndex: 0,
      explanation: {
        zh: '最大摩擦力 f = μmg = 0.2 × 2 × 10 = 4 N < 6 N，物块滑动；合力 F合 = 6 − 4 = 2 N，a = 2/2 = 1 m/s²。直接用 6/2 = 3 m/s² 忽略了摩擦；4/2 = 2 m/s² 误用摩擦力算加速度。',
        en: 'Maximum friction f = μmg = 0.2 × 2 × 10 = 4 N < 6 N, so the block slides; the resultant force is 6 − 4 = 2 N, giving a = 2/2 = 1 m/s². Using 6/2 = 3 m/s² ignores friction; 4/2 = 2 m/s² wrongly uses friction as the driving force.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '用同样大小的力分别推空购物车和满载购物车，关于它们的加速度，正确的是哪个？',
        en: 'The same force is used to push an empty shopping cart and a fully loaded one. Which statement about their accelerations is correct?',
      },
      options: {
        zh: [
          '两车加速度相同，因为力相同',
          '空车加速度更大，因为其质量更小',
          '满载车加速度更大，因为其惯性更大',
          '无法比较，因为不知道速度',
        ],
        en: [
          'Same acceleration, because the force is the same',
          'The empty cart accelerates more because its mass is smaller',
          'The loaded cart accelerates more because its inertia is larger',
          'Cannot compare without knowing the velocities',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '由 a = F/m，力相同时质量越小加速度越大，空车质量小所以加速度大。惯性大意味着运动状态更难改变，即加速度更小而非更大；比较加速度不需要知道速度。',
        en: 'From a = F/m, with the same force the smaller mass has the larger acceleration, so the empty cart wins. Greater inertia means motion is harder to change — smaller, not larger, acceleration; velocities are not needed for the comparison.',
      },
    },
  ],
  kernels: {
    newton: newtonKernel,
  },
  expectedResults: [
    {
      id: 'probe-default-slide',
      description: {
        zh: '2 kg 物块受 10 N 拉力、μ = 0.1：摩擦 1.96 N，合力 8.04 N，a = 4.02 m/s²',
        en: '2 kg block, 10 N applied force, μ = 0.1: friction 1.96 N, resultant 8.04 N, a = 4.02 m/s²',
      },
      kernel: 'newton',
      input: { force: 10, mass: 2, mu: 0.1 },
      expected: { friction: 1.96, netForce: 8.04, acceleration: 4.02 },
    },
    {
      id: 'probe-too-heavy',
      description: {
        zh: '20 kg 满载车受 5 N 推力、μ = 0.1：推力不超过最大摩擦 19.6 N，合力与加速度均为 0',
        en: '20 kg loaded cart pushed with 5 N, μ = 0.1: the force does not exceed the maximum friction of 19.6 N, so resultant force and acceleration are both 0',
      },
      kernel: 'newton',
      input: { force: 5, mass: 20, mu: 0.1 },
      expected: { friction: 19.6, netForce: 0, acceleration: 0 },
    },
    {
      id: 'probe-on-ice',
      description: {
        zh: '冰面 μ = 0.02：5 kg 物块受 10 N 拉力，a = 1.804 m/s²',
        en: 'On ice (μ = 0.02): a 5 kg block pulled with 10 N accelerates at 1.804 m/s²',
      },
      kernel: 'newton',
      input: { force: 10, mass: 5, mu: 0.02 },
      expected: { friction: 0.98, netForce: 9.02, acceleration: 1.804 },
      tolerance: 1e-9,
    },
  ],
};
