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
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出加速度与合力成正比、与质量成反比，并使用 F = ma 进行计算。',
          '知道公式中的 F 是合力，会在有摩擦力时先求合力再求加速度。',
          '用控制变量法描述探究加速度与力、质量关系的实验思路。',
        ],
      },
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
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'Newton’s second law（牛顿第二定律）：物体的加速度与所受合力成正比、与质量成反比，方向与合力相同，F = ma。',
          'resultant force（合力）：与物体所受各力共同作用效果相同的那个单一的力，F = ma 中的 F 就是它。',
          'acceleration（加速度）：速度变化的快慢，单位 m/s²，方向与合力一致。',
          'friction（摩擦力）：阻碍相对运动的力；水平面上滑动时大小为 μmg。',
          'control variables（控制变量法）：每次只改变一个量、保持其余量不变的实验方法。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State that acceleration is proportional to the resultant force and inversely proportional to mass, and calculate with F = ma.',
          'Know that F in the formula is the resultant force, and find the resultant first when friction acts.',
          'Describe, using control variables, how the dependence of acceleration on force and mass is investigated.',
        ],
      },
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
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'Newton’s second law (牛顿第二定律): Acceleration is proportional to the resultant force and inversely proportional to mass, in the direction of the force: F = ma.',
          'resultant force (合力): The single force with the same effect as all the forces acting together — the F in F = ma.',
          'acceleration (加速度): The rate of change of velocity, in m/s², in the same direction as the resultant force.',
          'friction (摩擦力): The force opposing relative motion; on a horizontal surface its sliding size is μmg.',
          'control variables (控制变量法): An experimental method that changes one quantity at a time while keeping the rest fixed.',
        ],
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
  examPractice: [
    {
      id: 'force003-ep1',
      syllabus: ['0625/1.5.1.11', '0625/1.5.1.3'],
      tier: 'supplement',
      commandWord: 'Calculate',
      marks: 3,
      stem: 'A car of mass 1500 kg has a forward driving force of 5400 N. The total resistive force is 2400 N. Calculate the acceleration of the car.',
      markScheme: [
        { text: 'Resultant force = 5400 − 2400 = 3000 N', marks: 1 },
        { text: 'a = F / m = 3000 / 1500', marks: 1 },
        { text: '= 2.0 m/s², in the direction of motion', marks: 1 },
      ],
      examinerNote: {
        zh: 'F = ma 中的 F 是合力，不是牵引力。直接用 5400 N 算出 3.6 m/s²，后面的分数全部丢失。',
        en: 'F in F = ma is the resultant, not the driving force. Using 5400 N straight off gives 3.6 m/s² and loses every later mark.',
      },
    },
    {
      id: 'force003-ep2',
      syllabus: ['0625/1.5.1.11', '0625/1.5.1.6'],
      tier: 'supplement',
      commandWord: 'Calculate',
      marks: 3,
      stem: 'A crate of mass 25 kg rests on a rough horizontal floor. A horizontal force of 120 N is applied, and the frictional force opposing the motion is 70 N. Calculate the acceleration of the crate.',
      markScheme: [
        { text: 'Resultant force = 120 − 70 = 50 N', marks: 1 },
        { text: 'a = F / m = 50 / 25', marks: 1 },
        { text: '= 2.0 m/s²', marks: 1 },
      ],
      examinerNote: {
        zh: '先求合力再用 F = ma。把 120 N 直接除以质量是典型错误——摩擦力必须先从拉力中减掉。',
        en: 'Find the resultant before applying F = ma. Dividing 120 N by the mass straight away is the classic error — the friction must be subtracted first.',
      },
    },
    {
      id: 'force003-ep3',
      syllabus: ['0625/1.5.1.5'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'A non-zero resultant force acts on a moving object. What does the force change?',
      options: [
        'Only the mass of the object',
        'The speed or the direction of motion of the object',
        'Only the weight of the object',
        'Nothing, because the object is already moving',
      ],
      answerIndex: 1,
      markScheme: [
        {
          text: 'A resultant force changes the object’s velocity — its speed, its direction of motion, or both',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '合力改变的是运动状态（速度的大小或方向），不是质量或重量。“已经在动就不需要力”正是亚里士多德式的错误。',
        en: 'A resultant force changes the state of motion — the speed or the direction — not the mass or weight. "Already moving, so no force needed" is the Aristotelian mistake.',
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
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '推空购物车，一使劲就窜出去；推满载的购物车，同样的力气却只挪得慢悠悠。力和运动之间到底隔着什么规律？这节课的主角是牛顿第二定律：F 等于 ma。',
          en: 'Push an empty shopping cart and it shoots off; push a fully loaded one with the same effort and it crawls. What rule sits between force and motion? The star of this lesson is Newton\'s second law: F equals m a.',
        },
      },
      {
        id: 'concept-law',
        kind: 'concept',
        text: {
          zh: '实验用控制变量法告诉我们两件事：质量一定时，加速度和合力成正比；合力一定时，加速度和质量成反比。合起来就是 F 合等于 m 乘 a——加速度的方向永远和合力一致。满载的车难推，不是错觉，是 m 在作怪。',
          en: 'Control-variable experiments tell us two things: with the mass fixed, acceleration is proportional to the resultant force; with the force fixed, acceleration is inversely proportional to the mass. Together that is resultant F equals m times a — and the acceleration always points the way the resultant force does. A loaded cart really is harder to push; that is the m talking.',
        },
      },
      {
        id: 'concept-friction',
        kind: 'concept',
        text: {
          zh: '小心一个常见的坑：公式里的 F 是合力，不是你手上的拉力。在粗糙水平面上，摩擦力 μmg 一直顶着来。拉力不超过最大摩擦力，物体纹丝不动；一旦超过，真正产生加速度的是拉力减去摩擦力的那部分。',
          en: 'Watch a classic trap: the F in the formula is the resultant force, not the force in your hands. On a rough surface, friction μmg pushes back the whole time. If your pull does not exceed the maximum friction, nothing moves; once it does, only the part of the pull left over after friction does the accelerating.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '来验证一下。先点“空购物车轻推”，再看“满载购物车”——同样的推力，加速度差多少？然后把摩擦因数滑块拖到接近零，切换到“冰面上”预设，看同样的 10 牛顿能推出多大的加速度。最后反向操作：固定拉力，一点点加大质量，盯着实时公式里合力与加速度的变化。',
          en: 'Check it yourself. Tap "gentle push on an empty cart", then "fully loaded cart" — same push, how different are the accelerations? Then drag the friction-coefficient slider almost to zero, switch to the "on ice" preset, and see what the same 10 newtons can do. Finally reverse the experiment: fix the force, raise the mass step by step, and watch the resultant force and acceleration in the live formulas.',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '总结一下：牛顿第二定律 F 等于 ma，F 是合力；加速度与合力成正比、与质量成反比、方向与合力一致；粗糙面上先减掉摩擦力 μmg 再算合力。知道受力能预测运动，知道运动能反推受力——这就是它的全部威力。去做小测吧。',
          en: 'To sum up: Newton\'s second law, F equals m a, where F is the resultant force; acceleration is proportional to the resultant, inversely proportional to the mass, and points along the force. On a rough surface, subtract the friction μmg first. Given the forces you can predict the motion; given the motion you can work back to the forces — that is its full power. Off to the quiz.',
        },
      },
    ],
  },
  related: ['igcse-0625-1-5-forces', 'phy-force-002', 'phy-force-004'],
};
