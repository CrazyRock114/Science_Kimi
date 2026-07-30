import { inclineKernel } from '../../simulations/kernels/incline';
import type { KnowledgePoint } from '../types';

export const phyMachine004: KnowledgePoint = {
  id: 'phy-machine-004',
  subject: 'physics',
  title: { zh: '斜面与机械效率', en: 'The Inclined Plane and Mechanical Efficiency' },
  summary: {
    zh: '斜面是省力的简单机械。通过有用功、额外功和总功理解机械效率，探究斜面的倾角和粗糙程度对机械效率的影响。',
    en: 'The inclined plane is a force-saving simple machine. Understand mechanical efficiency through useful, extra and total work, and investigate how the angle and roughness of an incline affect its efficiency.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch6'],
    igcse: ['0625/1.7'],
  },
  keywords: {
    zh: ['斜面', '机械效率', '有用功', '额外功', '总功', '摩擦力', '省力机械'],
    en: ['inclined plane', 'mechanical efficiency', 'useful work', 'extra work', 'total work', 'friction', 'force-saving machine'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '斜面：省力的简单机械' },
      {
        type: 'paragraph',
        text: '把物体沿斜面匀速拉上高度 h，比直接竖直提升省力：重力沿斜面的分力只有 mg·sinθ，小于 mg。但省力不省功——沿斜面移动的距离 L 大于 h（L = h/sinθ）。理想光滑斜面上 F·L = mg·h，使用任何机械都不能省功。',
      },
      { type: 'formula', latex: 'F = mg\\sin\\theta \\quad (\\text{光滑斜面})', caption: '光滑斜面上匀速上拉所需的力' },
      { type: 'heading', text: '有用功、额外功与总功' },
      {
        type: 'paragraph',
        text: '用斜面提升物体时，对物体做的功（使物体升高）是有用功 W有 = mgh；克服斜面摩擦力做的功是额外功 W额 = f·L（f = μmg·cosθ）；拉力做的功是总功 W总 = F·L。总功等于有用功与额外功之和：W总 = W有 + W额。',
      },
      { type: 'formula', latex: '\\eta = \\frac{W_{\\text{有}}}{W_{\\text{总}}} \\times 100\\%', caption: '机械效率：有用功占总功的比例，总是小于 100%' },
      { type: 'formula', latex: '\\eta = \\frac{\\sin\\theta}{\\sin\\theta + \\mu\\cos\\theta}', caption: '沿粗糙斜面匀速上拉时的机械效率' },
      { type: 'heading', text: '影响斜面机械效率的因素' },
      {
        type: 'list',
        items: [
          '斜面越光滑（μ 越小），额外功越少，机械效率越高；μ = 0 时 η = 100%。',
          '提升同一高度时，斜面越陡（θ 越大），机械效率越高，但需要的拉力也越大。',
          '沿斜面向下的分力 mg·sinθ 大于最大摩擦力 μmg·cosθ 时，物块会自行下滑（tanθ > μ）。',
          '机械效率小于 100% 的根本原因：总有一部分功要用于克服摩擦等阻力。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'The inclined plane: a force-saving machine' },
      {
        type: 'paragraph',
        text: 'Pulling an object steadily up an incline to a height h takes less force than lifting it vertically: the component of weight along the slope is only mg·sinθ, less than mg. But saving force does not save work — the distance along the slope L is longer than h (L = h/sinθ). On an ideal frictionless incline F·L = mg·h: no machine can save work.',
      },
      { type: 'formula', latex: 'F = mg\\sin\\theta \\quad (\\text{frictionless})', caption: 'Force needed to pull steadily up a frictionless incline' },
      { type: 'heading', text: 'Useful work, extra work and total work' },
      {
        type: 'paragraph',
        text: 'When raising an object with an incline, the work that raises the object is the useful work W_useful = mgh; the work done against friction is the extra work W_extra = f·L (f = μmg·cosθ); the work done by the pulling force is the total work W_total = F·L. The total work equals the useful work plus the extra work: W_total = W_useful + W_extra.',
      },
      { type: 'formula', latex: '\\eta = \\frac{W_{\\text{useful}}}{W_{\\text{total}}} \\times 100\\%', caption: 'Mechanical efficiency: the share of useful work in the total work — always below 100%' },
      { type: 'formula', latex: '\\eta = \\frac{\\sin\\theta}{\\sin\\theta + \\mu\\cos\\theta}', caption: 'Efficiency when pulling steadily up a rough incline' },
      { type: 'heading', text: 'What affects the efficiency of an incline' },
      {
        type: 'list',
        items: [
          'A smoother incline (smaller μ) means less extra work and higher efficiency; with μ = 0, η = 100%.',
          'For the same height, a steeper incline (larger θ) is more efficient, though it needs a larger pulling force.',
          'If the component mg·sinθ exceeds the maximum friction μmg·cosθ, the block slides down by itself (tanθ > μ).',
          'Efficiency is always below 100% because some work is inevitably spent against friction and other resistances.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'inclined-plane',
    params: [
      {
        key: 'angle',
        label: { zh: '斜面倾角 θ', en: 'Incline angle θ' },
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
        label: { zh: '物块质量 m', en: 'Block mass m' },
        min: 1,
        max: 10,
        step: 0.5,
        defaultValue: 2,
        unit: 'kg',
      },
    ],
    liveFormulas: [
      {
        id: 'parallel-component',
        latex: 'F_{\\parallel} = mg\\sin\\theta',
        substitute: (p) =>
          `F_{\\parallel} = ${p.mass} \\times 9.8 \\times \\sin ${p.angle}^\\circ \\approx ${(
            p.mass * 9.8 * Math.sin((p.angle * Math.PI) / 180)
          ).toFixed(2)}\\ \\text{N}`,
      },
      {
        id: 'efficiency',
        latex: '\\eta = \\frac{\\sin\\theta}{\\sin\\theta + \\mu\\cos\\theta}',
        substitute: (p) => {
          const rad = (p.angle * Math.PI) / 180;
          const eta = Math.sin(rad) / (Math.sin(rad) + p.mu * Math.cos(rad));
          return `\\eta = \\frac{\\sin ${p.angle}^\\circ}{\\sin ${p.angle}^\\circ + ${p.mu}\\cos ${p.angle}^\\circ} \\approx ${(
            eta * 100
          ).toFixed(1)}\\%`;
        },
      },
    ],
  },
  presets: [
    {
      id: 'frictionless',
      name: { zh: '光滑斜面', en: 'Frictionless incline' },
      description: {
        zh: 'μ = 0：没有额外功，机械效率 100%，物块自由下滑。',
        en: 'μ = 0: no extra work, 100% efficiency, and the block slides freely.',
      },
      params: { angle: 30, mu: 0, mass: 2 },
    },
    {
      id: 'rough-rest',
      name: { zh: '粗糙斜面：静止', en: 'Rough incline: at rest' },
      description: {
        zh: 'θ = 15°、μ = 0.5：tanθ < μ，摩擦力足以使物块保持静止。',
        en: 'θ = 15°, μ = 0.5: tanθ < μ, so friction holds the block at rest.',
      },
      params: { angle: 15, mu: 0.5, mass: 2 },
    },
    {
      id: 'rough-slide',
      name: { zh: '粗糙斜面：下滑', en: 'Rough incline: sliding' },
      description: {
        zh: 'θ = 45°、μ = 0.3：tanθ > μ，物块加速下滑，效率约 70%。',
        en: 'θ = 45°, μ = 0.3: tanθ > μ, the block accelerates down; efficiency ≈ 70%.',
      },
      params: { angle: 45, mu: 0.3, mass: 2 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '用斜面把重物提升到 1 m 高处，拉力做的总功为 500 J，其中克服摩擦做的额外功为 100 J。该斜面的机械效率是多少？',
        en: 'An incline is used to raise a load by 1 m. The total work done by the pulling force is 500 J, of which 100 J is extra work against friction. What is the efficiency of the incline?',
      },
      options: {
        zh: ['20%', '80%', '100%', '125%'],
        en: ['20%', '80%', '100%', '125%'],
      },
      answerIndex: 1,
      explanation: {
        zh: '有用功 W有 = W总 − W额 = 500 − 100 = 400 J，η = 400/500 = 80%。20% 是误用额外功除以总功；有摩擦时效率不可能达 100%；机械效率永远小于 100%，125% 不可能。',
        en: 'Useful work = W_total − W_extra = 500 − 100 = 400 J, so η = 400/500 = 80%. 20% wrongly uses extra work over total work; with friction 100% is impossible; efficiency never exceeds 100%, so 125% is impossible.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '用斜面把同一物体提升到同一高度，下列哪种做法能提高斜面的机械效率？',
        en: 'When using an incline to raise the same object to the same height, which change increases the efficiency?',
      },
      options: {
        zh: [
          '增大斜面的粗糙程度',
          '减小斜面的倾角',
          '使斜面更光滑',
          '增大拉物体的速度',
        ],
        en: [
          'Make the surface rougher',
          'Make the incline less steep',
          'Make the surface smoother',
          'Pull the object faster',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '有用功 mgh 固定，减小摩擦因数 μ 可减少额外功 f·L，从而提高效率。更粗糙：额外功更多、效率更低；减小倾角：由 η = sinθ/(sinθ+μcosθ)，θ 变小效率降低；加快拉动速度只改变功率，不改变有用功与总功的比值。',
        en: 'The useful work mgh is fixed; reducing μ cuts the extra work f·L and raises efficiency. Rougher surface: more extra work, lower efficiency. A smaller angle lowers η = sinθ/(sinθ+μcosθ). Pulling faster only changes power, not the ratio of useful to total work.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于使用斜面提升物体，下列说法正确的是？',
        en: 'Which statement about using an incline to raise an object is correct?',
      },
      options: {
        zh: [
          '斜面既能省力又能省功',
          '斜面越平缓越省力，但机械效率可能更低',
          '机械效率可以大于 100%',
          '光滑斜面上不需要任何力就能匀速拉上物体',
        ],
        en: [
          'An incline saves both force and work',
          'A gentler incline saves more force, but its efficiency may be lower',
          'Mechanical efficiency can exceed 100%',
          'On a frictionless incline no force is needed to pull the object up steadily',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '斜面越平缓（θ 越小），拉力 mg(sinθ+μcosθ) 越小越省力，但 η = sinθ/(sinθ+μcosθ) 也越低。任何机械都不能省功；效率永远小于 100%；即使光滑斜面，匀速上拉也需克服沿斜面的分力 mg·sinθ。',
        en: 'A gentler incline (smaller θ) needs a smaller force mg(sinθ+μcosθ), but η = sinθ/(sinθ+μcosθ) is also lower. No machine can save work; efficiency never exceeds 100%; even on a frictionless incline, steady pulling must balance the component mg·sinθ.',
      },
    },
  ],
  kernels: {
    incline: inclineKernel,
  },
  expectedResults: [
    {
      id: 'probe-slide-30',
      description: {
        zh: 'θ = 30°、μ = 0.2、m = 2 kg：下滑，a ≈ 3.20 m/s²',
        en: 'θ = 30°, μ = 0.2, m = 2 kg: slides with a ≈ 3.20 m/s²',
      },
      kernel: 'incline',
      input: { angle: 30, mu: 0.2, mass: 2 },
      expected: {
        parallel: 9.8,
        perpendicular: 16.9741,
        friction: 3.3948,
        acceleration: 3.2026,
      },
      tolerance: 1e-4,
    },
    {
      id: 'probe-rest-10',
      description: {
        zh: 'θ = 10°、μ = 0.5、m = 2 kg：tanθ < μ，物块静止，a = 0',
        en: 'θ = 10°, μ = 0.5, m = 2 kg: tanθ < μ, the block stays at rest, a = 0',
      },
      kernel: 'incline',
      input: { angle: 10, mu: 0.5, mass: 2 },
      expected: {
        parallel: 3.4035,
        perpendicular: 19.3022,
        friction: 9.6511,
        acceleration: 0,
      },
      tolerance: 1e-4,
    },
    {
      id: 'probe-slide-45',
      description: {
        zh: 'θ = 45°、μ = 0.3、m = 4 kg：下滑，a ≈ 4.85 m/s²',
        en: 'θ = 45°, μ = 0.3, m = 4 kg: slides with a ≈ 4.85 m/s²',
      },
      kernel: 'incline',
      input: { angle: 45, mu: 0.3, mass: 4 },
      expected: {
        parallel: 27.7186,
        perpendicular: 27.7186,
        friction: 8.3156,
        acceleration: 4.8508,
      },
      tolerance: 1e-4,
    },
  ],
};
