import { inclineKernel } from '../../simulations/kernels/incline';
import type { KnowledgePoint } from '../types';

export const phyForce004: KnowledgePoint = {
  id: 'phy-force-004',
  subject: 'physics',
  title: { zh: '摩擦力', en: 'Friction' },
  summary: {
    zh: '认识摩擦力产生的条件与方向，理解滑动摩擦 f = μN；在斜面上分解重力，探究倾角与摩擦因数如何决定物块是静止还是下滑。',
    en: 'Learn when friction arises and which way it acts, understand f = μN for sliding friction; resolve weight on an inclined plane and explore how angle and friction coefficient decide whether a block stays put or slides.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j8b/ch2', 'pep-phy-s1/ch3'],
    igcse: ['0625/1.5'],
  },
  keywords: {
    zh: ['摩擦力', '滑动摩擦', '静摩擦', '摩擦因数', '斜面', '力的分解', '支持力'],
    en: ['friction', 'sliding friction', 'static friction', 'friction coefficient', 'inclined plane', 'resolving forces', 'normal force'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说明摩擦力产生的条件与方向，区分静摩擦与滑动摩擦，并使用 f = μN。',
          '把斜面上的重力分解为沿斜面与垂直斜面的两个分力。',
          '用 tanθ 与 μ 的关系判断斜面上的物块是否下滑，并求下滑加速度。',
        ],
      },
      { type: 'heading', text: '摩擦力：阻碍相对运动的力' },
      {
        type: 'paragraph',
        text: '两个相互接触的物体，当它们发生相对运动（或有相对运动的趋势）时，在接触面上会产生阻碍相对运动的力，叫做摩擦力。摩擦力产生的条件：接触面粗糙、相互挤压、有相对运动或相对运动趋势。',
      },
      {
        type: 'list',
        items: [
          '摩擦力的方向总是与相对运动（或相对运动趋势）的方向相反。',
          '静摩擦力随外力增大而增大，但有一个最大值——最大静摩擦力。',
          '滑动摩擦力的大小与压力和接触面的粗糙程度有关：f = μN。',
        ],
      },
      { type: 'formula', latex: 'f = \\mu N', caption: '滑动摩擦力：μ 为摩擦因数，N 为接触面间的压力（支持力）' },
      { type: 'heading', text: '斜面上的重力分解' },
      {
        type: 'paragraph',
        text: '放在斜面上的物体，重力 mg 可以分解为两个分力：沿斜面向下的分力 mg·sinθ（使物体下滑）和垂直斜面的分力 mg·cosθ（大小等于支持力 N）。因此斜面上的最大摩擦力为 f = μmg·cosθ。',
      },
      { type: 'formula', latex: 'F_{\\parallel} = mg\\sin\\theta, \\quad N = mg\\cos\\theta', caption: '重力沿斜面与垂直斜面的分解' },
      {
        type: 'paragraph',
        text: '当沿斜面的分力超过最大摩擦力，即 mg·sinθ > μmg·cosθ（也就是 tanθ > μ）时，物体开始下滑，加速度 a = g(sinθ − μcosθ)；否则物体保持静止，静摩擦力恰好等于 mg·sinθ。有趣的是，是否下滑只取决于 θ 和 μ，与质量无关。',
      },
      { type: 'formula', latex: 'a = g(\\sin\\theta - \\mu\\cos\\theta)', caption: '物体沿斜面下滑时的加速度' },
      {
        type: 'list',
        items: [
          '有益的摩擦要增大：鞋底和轮胎刻花纹、冬天路面撒沙子。',
          '有害的摩擦要减小：加润滑油、用滚动代替滑动（轴承）、磁悬浮。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'friction（摩擦力）：在接触面上阻碍相对运动（或相对运动趋势）的力，方向与相对运动相反。',
          'static friction（静摩擦力）：物体尚未滑动时的摩擦力，随外力增大而增大，直到最大值。',
          'sliding friction（滑动摩擦力）：物体滑动时的摩擦力，大小 f = μN。',
          'coefficient of friction（摩擦因数）：描述接触面粗糙程度的比例常数 μ，无单位。',
          'normal force（支持力/法向力）：接触面垂直作用于物体的支持力 N；斜面上 N = mg·cosθ。',
          'resolving forces（力的分解）：把一个力拆成两个互相垂直的分力，如斜面上 mg·sinθ 与 mg·cosθ。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State when friction arises and which way it acts, distinguish static from sliding friction, and use f = μN.',
          'Resolve the weight on a slope into components along and perpendicular to the surface.',
          'Use the relation between tanθ and μ to decide whether a block slides, and find its acceleration.',
        ],
      },
      { type: 'heading', text: 'Friction: opposing relative motion' },
      {
        type: 'paragraph',
        text: 'When two surfaces in contact slide (or tend to slide) over each other, a force that opposes this relative motion acts at the contact surface — friction. Friction requires rough surfaces pressed together and actual or impending relative motion.',
      },
      {
        type: 'list',
        items: [
          'Friction always acts opposite to the relative motion (or the tendency to move).',
          'Static friction grows with the applied force up to a maximum value — the maximum static friction.',
          'Sliding friction depends on the normal force and the roughness of the surfaces: f = μN.',
        ],
      },
      { type: 'formula', latex: 'f = \\mu N', caption: 'Sliding friction: μ is the coefficient of friction, N the normal (contact) force' },
      { type: 'heading', text: 'Resolving weight on an inclined plane' },
      {
        type: 'paragraph',
        text: 'For a block on a slope, the weight mg can be resolved into a component mg·sinθ acting down the slope (which pulls the block downwards) and a component mg·cosθ perpendicular to the slope (equal in size to the normal force N). The maximum friction on the slope is therefore f = μmg·cosθ.',
      },
      { type: 'formula', latex: 'F_{\\parallel} = mg\\sin\\theta, \\quad N = mg\\cos\\theta', caption: 'Components of weight along and perpendicular to the slope' },
      {
        type: 'paragraph',
        text: 'The block slides only when the component down the slope exceeds the maximum friction, i.e. mg·sinθ > μmg·cosθ (equivalently tanθ > μ); its acceleration is then a = g(sinθ − μcosθ). Otherwise it stays at rest, with static friction exactly balancing mg·sinθ. Interestingly, whether it slides depends only on θ and μ — not on the mass.',
      },
      { type: 'formula', latex: 'a = g(\\sin\\theta - \\mu\\cos\\theta)', caption: 'Acceleration of a block sliding down the slope' },
      {
        type: 'list',
        items: [
          'Increasing useful friction: treaded soles and tyres, sanding icy roads.',
          'Reducing unwanted friction: lubricating oil, rolling instead of sliding (ball bearings), magnetic levitation.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'friction (摩擦力): The force at a contact surface that opposes relative motion (or the tendency to move), acting opposite to the motion.',
          'static friction (静摩擦力): The friction before sliding starts; it grows with the applied force up to a maximum value.',
          'sliding friction (滑动摩擦力): The friction once sliding begins, of size f = μN.',
          'coefficient of friction (摩擦因数): The dimensionless constant μ describing how rough the contact is.',
          'normal force (支持力): The contact force N acting perpendicular to the surface; on a slope N = mg·cosθ.',
          'resolving forces (力的分解): Splitting a force into two perpendicular components, e.g. mg·sinθ and mg·cosθ on a slope.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'inclined-plane',
    params: [
      {
        key: 'angle',
        label: { zh: '斜面倾角 θ', en: 'Slope angle θ' },
        min: 5,
        max: 60,
        step: 1,
        defaultValue: 30,
        unit: '°',
      },
      {
        key: 'mu',
        label: { zh: '摩擦因数 μ', en: 'Friction coefficient μ' },
        min: 0,
        max: 0.8,
        step: 0.01,
        defaultValue: 0.2,
      },
      {
        key: 'mass',
        label: { zh: '质量 m', en: 'Mass m' },
        min: 0.5,
        max: 10,
        step: 0.5,
        defaultValue: 2,
        unit: 'kg',
      },
    ],
    liveFormulas: [
      {
        id: 'weight-components',
        latex: 'F_{\\parallel} = mg\\sin\\theta',
        substitute: (p) => {
          const rad = (p.angle * Math.PI) / 180;
          const parallel = p.mass * 9.8 * Math.sin(rad);
          return `F_{\\parallel} = ${p.mass}\\times 9.8\\times\\sin ${p.angle}^\\circ = ${parallel.toFixed(2)}\\,\\text{N}`;
        },
      },
      {
        id: 'max-friction',
        latex: 'f = \\mu mg\\cos\\theta',
        substitute: (p) => {
          const rad = (p.angle * Math.PI) / 180;
          const friction = p.mu * p.mass * 9.8 * Math.cos(rad);
          return `f = ${p.mu}\\times ${p.mass}\\times 9.8\\times\\cos ${p.angle}^\\circ = ${friction.toFixed(2)}\\,\\text{N}`;
        },
      },
    ],
  },
  presets: [
    {
      id: 'gentle-slope',
      name: { zh: '木块静置缓坡', en: 'Block at rest on a gentle slope' },
      description: {
        zh: '10° 缓坡上 μ = 0.5，静摩擦力足够大，木块保持静止。',
        en: 'On a 10° slope with μ = 0.5, static friction is enough to hold the block at rest.',
      },
      params: { angle: 10, mu: 0.5, mass: 2 },
    },
    {
      id: 'steep-slide',
      name: { zh: '增大倾角开始下滑', en: 'Steeper angle, starts to slide' },
      description: {
        zh: '倾角增大到 45°、μ = 0.4 时 tanθ > μ，物块加速下滑。',
        en: 'At 45° with μ = 0.4, tanθ > μ, so the block accelerates down the slope.',
      },
      params: { angle: 45, mu: 0.4, mass: 3 },
    },
    {
      id: 'ice-slope',
      name: { zh: '冰面斜面', en: 'Icy slope' },
      description: {
        zh: '冰面 μ = 0.05，即使 30° 的斜面也几乎无阻下滑。',
        en: 'On ice (μ = 0.05) even a 30° slope gives nearly frictionless sliding.',
      },
      params: { angle: 30, mu: 0.05, mass: 2 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一个物块放在水平桌面上，用 5 N 的水平力推它没有推动。此时物块受到的摩擦力是多少？',
        en: 'A block rests on a horizontal table. A horizontal push of 5 N fails to move it. What is the friction force on the block?',
      },
      options: {
        zh: ['0 N', '小于 5 N', '等于 5 N', '大于 5 N'],
        en: ['0 N', 'Less than 5 N', 'Equal to 5 N', 'Greater than 5 N'],
      },
      answerIndex: 2,
      explanation: {
        zh: '物块静止，合力为零，静摩擦力与推力平衡，大小等于 5 N，方向与推力相反。静摩擦力不是固定值，而是随外力变化（不超过最大值）。',
        en: 'The block is at rest, so the resultant force is zero: static friction balances the push and equals 5 N in the opposite direction. Static friction is not fixed — it adjusts to match the applied force (up to its maximum).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '同一物块放在同一斜面上，倾角 θ 逐渐增大。关于斜面对物块的支持力 N 和最大摩擦力，正确的是哪个？',
        en: 'The same block rests on the same slope while the angle θ is gradually increased. What happens to the normal force N and the maximum friction?',
      },
      options: {
        zh: [
          'N 增大，最大摩擦力增大',
          'N 减小，最大摩擦力减小',
          'N 不变，最大摩擦力增大',
          'N 减小，最大摩擦力增大',
        ],
        en: [
          'N increases, maximum friction increases',
          'N decreases, maximum friction decreases',
          'N stays the same, maximum friction increases',
          'N decreases, maximum friction increases',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: 'N = mg·cosθ，θ 增大时 cosθ 减小，所以 N 减小；最大摩擦力 f = μN 也随之减小。这就是斜面越陡物块越容易下滑的原因之一。',
        en: 'N = mg·cosθ, and cosθ decreases as θ grows, so N decreases; the maximum friction f = μN decreases with it. This is one reason a block slides more easily on a steeper slope.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '物块沿斜面匀速下滑时，关于它所受的力，正确的是哪个？',
        en: 'A block slides down a slope at constant velocity. Which statement about the forces on it is correct?',
      },
      options: {
        zh: [
          '物块不受摩擦力',
          '摩擦力沿斜面向下',
          '沿斜面方向的合力为零',
          '重力沿斜面的分力大于摩擦力，物块加速',
        ],
        en: [
          'No friction acts on the block',
          'Friction acts down the slope',
          'The resultant force along the slope is zero',
          'The component of gravity down the slope exceeds friction, so the block accelerates',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '匀速下滑说明加速度为零，由牛顿第二定律沿斜面方向合力为零：摩擦力（沿斜面向上）恰好等于重力沿斜面的分力。没有摩擦不可能匀速；加速则与"匀速"矛盾。',
        en: 'Constant velocity means zero acceleration, so by Newton’s second law the resultant force along the slope is zero: friction (acting up the slope) exactly balances the component of gravity down the slope. Without friction it could not move at constant velocity; accelerating would contradict "constant velocity".',
      },
    },
  ],
  examPractice: [
    {
      id: 'force004-ep1',
      syllabus: ['0625/1.5.1.6', '0625/1.5.1.4'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 3,
      stem: 'A block is pushed across a rough horizontal table so that it moves at a constant velocity. Explain, in terms of the forces acting, why a steady pushing force is needed to keep it moving, and state one other effect friction has besides opposing motion.',
      markScheme: [
        { text: 'Friction acts on the block in the direction opposite to its motion', marks: 1 },
        {
          text: 'At constant velocity the resultant force is zero, so the pushing force must balance the friction',
          marks: 1,
        },
        { text: 'Friction also transfers energy by heating the surfaces', marks: 1 },
      ],
      examinerNote: {
        zh: '“保持运动需要力”听起来像亚里士多德，但这里的关键是摩擦力在不断消耗推力——合力为零才是匀速的条件。别忘了摩擦生热这一分。',
        en: '“A force is needed to keep it moving” sounds Aristotelian, but the point is that friction keeps eating the push — zero resultant is the condition for constant velocity. Do not forget the heating mark.',
      },
    },
    {
      id: 'force004-ep2',
      syllabus: ['0625/1.5.1.11', '0625/1.5.1.6'],
      tier: 'supplement',
      commandWord: 'Calculate',
      marks: 3,
      stem: 'A trolley of mass 5.0 kg is pulled along a rough horizontal bench by a horizontal force of 12 N and accelerates at 1.6 m/s². Calculate the frictional force acting on the trolley.',
      markScheme: [
        { text: 'Resultant force F = ma = 5.0 × 1.6 = 8.0 N', marks: 1 },
        { text: 'Friction = 12 − 8.0', marks: 1 },
        { text: '= 4.0 N, acting opposite to the motion', marks: 1 },
      ],
      examinerNote: {
        zh: '反推摩擦力的思路：先用 F = ma 求出合力，再用拉力减去合力。直接把 12 N 当摩擦力是最常见的错误。',
        en: 'The way back to friction: get the resultant from F = ma first, then subtract it from the pull. Taking 12 N itself as the friction is the most common error.',
      },
    },
    {
      id: 'force004-ep3',
      syllabus: ['0625/1.5.1.6'],
      tier: 'core',
      commandWord: 'State',
      marks: 2,
      stem: 'State one example where friction is useful, and one way of reducing friction where it is unwanted.',
      markScheme: [
        {
          text: 'Useful friction, e.g. grip between a shoe sole or tyre and the ground (made larger by a treaded surface)',
          marks: 1,
        },
        {
          text: 'Reducing unwanted friction, e.g. lubricating moving parts or using ball bearings to roll instead of slide',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '例子要具体：“增大摩擦”不给分，要说清是哪个接触面之间、用什么方法。',
        en: 'Be specific: "increase friction" earns nothing — name the surfaces in contact and the method used.',
      },
    },
  ],
  kernels: {
    incline: inclineKernel,
  },
  expectedResults: [
    {
      id: 'probe-default-30deg',
      description: {
        zh: '2 kg、30°、μ = 0.2：沿斜面分力 9.8 N > 最大摩擦 3.395 N，物块下滑，a ≈ 3.203 m/s²',
        en: '2 kg, 30°, μ = 0.2: component down the slope 9.8 N exceeds maximum friction 3.395 N, so the block slides with a ≈ 3.203 m/s²',
      },
      kernel: 'incline',
      input: { angle: 30, mu: 0.2, mass: 2 },
      expected: {
        parallel: 9.8,
        perpendicular: 16.974,
        friction: 3.3948,
        acceleration: 3.2026,
      },
      tolerance: 1e-3,
    },
    {
      id: 'probe-gentle-rest',
      description: {
        zh: '2 kg、10°、μ = 0.5：沿斜面分力 3.40 N < 最大摩擦 9.65 N，木块静止，a = 0',
        en: '2 kg, 10°, μ = 0.5: component down the slope 3.40 N is less than the maximum friction 9.65 N, so the block stays at rest with a = 0',
      },
      kernel: 'incline',
      input: { angle: 10, mu: 0.5, mass: 2 },
      expected: {
        parallel: 3.4035,
        perpendicular: 19.3022,
        friction: 9.6511,
        acceleration: 0,
      },
      tolerance: 1e-3,
    },
    {
      id: 'probe-ice-slope',
      description: {
        zh: '冰面 30°、μ = 0.05：最大摩擦仅 0.849 N，a ≈ 4.476 m/s²',
        en: 'Icy 30° slope, μ = 0.05: maximum friction only 0.849 N, so a ≈ 4.476 m/s²',
      },
      kernel: 'incline',
      input: { angle: 30, mu: 0.05, mass: 2 },
      expected: {
        parallel: 9.8,
        perpendicular: 16.974,
        friction: 0.8487,
        acceleration: 4.4756,
      },
      tolerance: 1e-3,
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '搓搓手会觉得热，鞋底刻花纹才不打滑，给门轴滴点油就不吱呀响——这些日常小事背后都是同一个角色：摩擦力。这节课我们就把它研究明白，顺便揭开“斜面上的木块到底滑不滑”的判定方法。',
          en: 'Rub your hands and they warm up; treaded soles keep you from slipping; a drop of oil silences a squeaky hinge. Behind all of these is the same character: friction. This lesson pins it down — and settles when a block on a slope will slide and when it will not.',
        },
      },
      {
        id: 'concept-friction',
        kind: 'concept',
        text: {
          zh: '摩擦力产生在相互接触、相互挤压且有相对运动或相对运动趋势的粗糙接触面上，方向总是与相对运动相反。静摩擦会随外力增大而增大，但有个最大值；一旦滑动，滑动摩擦力就等于 μ 乘以压力 N。μ 越大、压力越大，摩擦越强。',
          en: 'Friction appears where rough surfaces press together and slide — or try to slide — over each other, always acting opposite to the relative motion. Static friction grows with the applied force, up to a maximum; once sliding starts, the friction equals μ times the normal force N. Bigger μ, bigger normal force, stronger friction.',
        },
      },
      {
        id: 'concept-incline',
        kind: 'concept',
        text: {
          zh: '把木块放上斜面，重力要拆成两半：沿斜面向下的 mg 乘 sinθ，负责让木块下滑；垂直斜面的 mg 乘 cosθ，等于支持力 N。于是最大摩擦力是 μmg 乘 cosθ。判据很优雅：tanθ 大于 μ 就滑，否则就停——注意，这个结果和质量无关。',
          en: 'Put a block on a slope and the weight splits in two: mg sinθ down the slope, which tries to slide the block, and mg cosθ into the slope, which equals the normal force N. So the maximum friction is μmg cosθ. The criterion is elegant: the block slides when tanθ exceeds μ, and stays put otherwise — and notice, mass plays no part in the verdict.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '动手找一找临界角。先点“木块静置缓坡”，然后慢慢拖动倾角滑块，盯住实时公式里沿斜面分力和最大摩擦力的较量——哪个瞬间木块开始下滑？再点“冰面斜面”预设，看 μ 只有 0.05 时同样的角度滑得多快。最后验证一下那个神奇结论：把质量滑块拉来拉去，加速度变不变？',
          en: 'Hunt for the critical angle yourself. Start with "block at rest on a gentle slope", then drag the angle slider slowly while watching the tug-of-war in the live formulas between the downhill component and the maximum friction — at which angle does the block give way? Then tap the "icy slope" preset to see how fast the same angle slides when μ is only 0.05. Finally test that curious claim: drag the mass slider back and forth — does the acceleration change at all?',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '总结一下：摩擦力阻碍相对运动，滑动摩擦 f 等于 μN；斜面上把重力分解成 mg sinθ 和 mg cosθ，tanθ 大于 μ 就下滑，加速度是 g 乘（sinθ 减 μcosθ），与质量无关。有益摩擦要增大、有害摩擦要减小的例子，也顺手记两个。小测见。',
          en: 'To wrap up: friction opposes relative motion, and sliding friction is μN. On a slope, resolve the weight into mg sinθ and mg cosθ; the block slides when tanθ exceeds μ, accelerating at g times (sinθ minus μcosθ), regardless of mass. Keep a couple of examples of useful and unwanted friction in your pocket too. See you in the quiz.',
        },
      },
    ],
  },
  related: ['igcse-0625-1-5-forces', 'phy-force-003', 'phy-force-001'],
};
