import { projectileKernel } from '../../simulations/kernels/projectile';
import type { KnowledgePoint } from '../types';

export const phyKinematicsProjectile: KnowledgePoint = {
  id: 'phy-kinematics-projectile',
  subject: 'physics',
  title: { zh: '抛体运动', en: 'Projectile Motion' },
  summary: {
    zh: '抛体运动可分解为水平方向的匀速直线运动和竖直方向的自由落体。用篮球、烟花和平抛三个场景探究射程、最大高度与飞行时间。',
    en: 'Projectile motion splits into uniform horizontal motion and free fall vertically. Explore range, maximum height and flight time with a basketball, a firework and a near-horizontal throw.',
  },
  gradeTier: 'senior',
  syllabus: {
    pep: ['pep-phy-s2/ch1'],
    igcse: ['0625/1.2'],
  },
  keywords: {
    zh: ['抛体运动', '平抛运动', '斜抛运动', '射程', '最大高度', '运动的合成与分解', '飞行时间'],
    en: ['projectile motion', 'horizontal projection', 'range', 'maximum height', 'time of flight', 'components of motion'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '抛体运动：两个独立分运动的合成' },
      {
        type: 'paragraph',
        text: '以初速度 v₀、与水平方向成 θ 角抛出、且只受重力（忽略空气阻力）的物体做抛体运动。把 v₀ 分解为水平分量 v₀cosθ 和竖直分量 v₀sinθ 后，两个方向的运动互相独立：水平方向不受力，做匀速直线运动；竖直方向只受重力，做加速度为 g 的匀变速运动。轨迹是一条抛物线。',
      },
      { type: 'formula', latex: 'v_x = v_0\\cos\\theta, \\qquad v_y = v_0\\sin\\theta - gt', caption: 't 时刻的两个速度分量：vₓ 恒定，v_y 均匀变化' },
      { type: 'formula', latex: 'x = v_0\\cos\\theta\\cdot t, \\qquad y = v_0\\sin\\theta\\cdot t - \\tfrac{1}{2}gt^2', caption: 't 时刻的位置（出射点为原点）' },
      { type: 'heading', text: '射程、最大高度与飞行时间' },
      {
        type: 'paragraph',
        text: '落点与出射点同高时，由竖直方向运动可求出总飞行时间，再代入水平方向即得射程；竖直分速度减为零时到达最高点。',
      },
      { type: 'formula', latex: 'T = \\frac{2v_0\\sin\\theta}{g}', caption: '飞行时间：只由竖直分运动决定' },
      { type: 'formula', latex: 'H = \\frac{(v_0\\sin\\theta)^2}{2g}', caption: '最大高度' },
      { type: 'formula', latex: 'R = \\frac{v_0^2\\sin 2\\theta}{g}', caption: '射程：θ = 45° 时最大' },
      { type: 'heading', text: '平抛运动：θ = 0° 的特例' },
      {
        type: 'paragraph',
        text: '水平抛出的物体（平抛）没有竖直初速度，竖直方向就是自由落体，下落时间只由高度决定；水平方向保持抛出时的速度。仿真中把抛射角调到接近 0° 即可近似观察平抛。需要注意的是，无论水平抛出得多快，它与同时由静止释放的物体总是同时落地。',
      },
      {
        type: 'list',
        items: [
          '飞行时间只取决于竖直分运动：θ 越大飞得越久，与水平速度无关。',
          '最高点处竖直分速度为零，但水平分速度不变，合速度不为零（除非 θ = 90°）。',
          '落点同高时，互余的两个抛射角（如 30° 与 60°）射程相同。',
          '真空中抛体轨迹是对称的抛物线；有空气阻力时射程和最大高度都会减小。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Projectile motion: two independent components' },
      {
        type: 'paragraph',
        text: 'An object launched with speed v₀ at angle θ to the horizontal, acted on by gravity alone (air resistance ignored), is a projectile. Resolving v₀ into v₀cosθ horizontally and v₀sinθ vertically gives two independent motions: uniform motion horizontally (no force), and uniformly accelerated motion vertically under gravity. The trajectory is a parabola.',
      },
      { type: 'formula', latex: 'v_x = v_0\\cos\\theta, \\qquad v_y = v_0\\sin\\theta - gt', caption: 'Velocity components at time t: vₓ constant, v_y changing uniformly' },
      { type: 'formula', latex: 'x = v_0\\cos\\theta\\cdot t, \\qquad y = v_0\\sin\\theta\\cdot t - \\tfrac{1}{2}gt^2', caption: 'Position at time t (launch point as origin)' },
      { type: 'heading', text: 'Range, maximum height and time of flight' },
      {
        type: 'paragraph',
        text: 'When the projectile lands at the launch height, the vertical motion gives the total flight time, which multiplied by the horizontal speed gives the range; the maximum height is reached when the vertical component of velocity falls to zero.',
      },
      { type: 'formula', latex: 'T = \\frac{2v_0\\sin\\theta}{g}', caption: 'Time of flight: set by the vertical motion alone' },
      { type: 'formula', latex: 'H = \\frac{(v_0\\sin\\theta)^2}{2g}', caption: 'Maximum height' },
      { type: 'formula', latex: 'R = \\frac{v_0^2\\sin 2\\theta}{g}', caption: 'Range: greatest at θ = 45°' },
      { type: 'heading', text: 'Horizontal projection: the special case θ = 0°' },
      {
        type: 'paragraph',
        text: 'A horizontally launched object has no initial vertical velocity, so vertically it simply undergoes free fall and the fall time depends only on the height; horizontally it keeps its launch speed. Set the launch angle near 0° in the simulation to approximate this. However fast it is thrown horizontally, it lands at the same instant as an object dropped from rest at the same moment.',
      },
      {
        type: 'list',
        items: [
          'The time of flight depends only on the vertical motion: larger θ means longer flight, regardless of the horizontal speed.',
          'At the highest point the vertical component is zero, but the horizontal component is unchanged, so the resultant velocity is not zero (unless θ = 90°).',
          'For landings at launch height, complementary angles (e.g. 30° and 60°) give the same range.',
          'In a vacuum the trajectory is a symmetric parabola; air resistance reduces both range and maximum height.',
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
        step: 0.5,
        defaultValue: 20,
        unit: 'm/s',
      },
      {
        key: 'angle',
        label: { zh: '抛射角 θ', en: 'Launch angle θ' },
        min: 0,
        max: 90,
        step: 1,
        defaultValue: 45,
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
        id: 'range',
        latex: 'R = \\frac{v_0^2\\sin 2\\theta}{g}',
        substitute: (p) => `R = \\frac{${p.v0}^2\\sin(2\\times ${p.angle}^\\circ)}{${p.g}}`,
      },
      {
        id: 'max-height',
        latex: 'H = \\frac{(v_0\\sin\\theta)^2}{2g}',
        substitute: (p) => `H = \\frac{(${p.v0}\\sin ${p.angle}^\\circ)^2}{2\\times ${p.g}}`,
      },
    ],
  },
  presets: [
    {
      id: 'basketball-shot',
      name: { zh: '篮球投篮（v₀ = 8 m/s，θ = 55°）', en: 'Basketball shot (v₀ = 8 m/s, θ = 55°)' },
      description: {
        zh: '一次高弧线的投篮：约 1.34 s 入筐，最高点约 2.19 m。',
        en: 'A high-arcing shot: about 1.34 s of flight, peaking at about 2.19 m.',
      },
      params: { v0: 8, angle: 55, g: 9.8 },
    },
    {
      id: 'firework-shell',
      name: { zh: '烟花升空（v₀ = 40 m/s，θ = 75°）', en: 'Firework shell (v₀ = 40 m/s, θ = 75°)' },
      description: {
        zh: '烟花弹以陡坡角升空：飞约 7.89 s，最高点约 76 m。',
        en: 'A steep firework launch: about 7.89 s of flight, peaking at about 76 m.',
      },
      params: { v0: 40, angle: 75, g: 9.8 },
    },
    {
      id: 'near-horizontal',
      name: { zh: '平抛近似（v₀ = 15 m/s，θ = 5°）', en: 'Near-horizontal throw (v₀ = 15 m/s, θ = 5°)' },
      description: {
        zh: '接近水平的抛出：仅飞约 0.27 s、最高约 0.09 m，竖直方向近似自由落体。',
        en: 'A nearly horizontal throw: only about 0.27 s of flight and a 0.09 m peak, with near free fall vertically.',
      },
      params: { v0: 15, angle: 5, g: 9.8 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '忽略空气阻力，斜抛的篮球到达最高点时，下列说法正确的是哪一项？',
        en: 'Ignoring air resistance, when a thrown basketball reaches its highest point, which statement is correct?',
      },
      options: {
        zh: [
          '合速度为零，加速度为零',
          '竖直分速度为零，水平分速度不变，加速度仍为 g',
          '水平分速度为零，竖直分速度最大',
          '速度最大，加速度为零',
        ],
        en: [
          'Both the resultant velocity and acceleration are zero',
          'The vertical component is zero, the horizontal component is unchanged, and the acceleration is still g',
          'The horizontal component is zero and the vertical component is greatest',
          'The velocity is greatest and the acceleration is zero',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '最高点处竖直分速度减为零，但水平方向不受力，vₓ 保持不变，所以合速度不为零；重力始终作用，加速度一直是 g。',
        en: 'At the peak the vertical component has fallen to zero, but with no horizontal force vₓ stays constant, so the resultant velocity is not zero; gravity acts throughout, so the acceleration remains g.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '以相同速率 v₀、落点与出射点同高地斜抛物体，下列哪个抛射角射程最远？',
        en: 'A projectile is launched at the same speed v₀ and lands at the launch height. Which launch angle gives the greatest range?',
      },
      options: {
        zh: ['30°', '45°', '60°', '75°'],
        en: ['30°', '45°', '60°', '75°'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'R = v₀²sin2θ/g，sin2θ 在 2θ = 90° 即 θ = 45° 时取最大值 1，射程最远。互余角（30° 与 60°）射程相同，但都小于 45° 时的射程。',
        en: 'R = v₀²sin2θ/g is greatest when sin2θ = 1, i.e. θ = 45°. Complementary angles (30° and 60°) give equal ranges, both shorter than at 45°.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '从同一高度同时水平抛出小球甲、由静止释放小球乙，忽略空气阻力，哪个先落地？',
        en: 'Ball A is projected horizontally and ball B is released from rest, both from the same height at the same instant. Ignoring air resistance, which lands first?',
      },
      options: {
        zh: ['甲先落地', '乙先落地', '同时落地', '水平抛出得越快落地越晚'],
        en: ['Ball A', 'Ball B', 'They land together', 'The faster A is thrown, the later it lands'],
      },
      answerIndex: 2,
      explanation: {
        zh: '两球竖直方向的运动完全相同（都是自由落体），下落时间只由高度决定，与水平速度无关，所以同时落地。',
        en: 'Both balls have identical vertical motion (free fall); the fall time depends only on the height, not on any horizontal speed, so they land together.',
      },
    },
  ],
  kernels: {
    projectile: projectileKernel,
  },
  expectedResults: [
    {
      id: 'probe-basketball',
      description: {
        zh: '篮球投篮 v₀ = 8 m/s、θ = 55°：射程约 6.14 m，最高约 2.19 m，飞行约 1.34 s',
        en: 'Basketball shot v₀ = 8 m/s, θ = 55°: range ≈ 6.14 m, peak ≈ 2.19 m, flight ≈ 1.34 s',
      },
      kernel: 'projectile',
      input: { v0: 8, angle: 55, g: 9.8 },
      expected: { range: 6.1367681357, maxHeight: 2.1910532952, flightTime: 1.3373910927 },
    },
    {
      id: 'probe-firework',
      description: {
        zh: '烟花 v₀ = 40 m/s、θ = 75°：射程约 81.6 m，最高约 76.2 m，飞行约 7.89 s',
        en: 'Firework v₀ = 40 m/s, θ = 75°: range ≈ 81.6 m, peak ≈ 76.2 m, flight ≈ 7.89 s',
      },
      kernel: 'projectile',
      input: { v0: 40, angle: 75, g: 9.8 },
      expected: { range: 81.6326530612, maxHeight: 76.1643021953, flightTime: 7.8851087860 },
    },
    {
      id: 'probe-near-horizontal',
      description: {
        zh: '平抛近似 v₀ = 15 m/s、θ = 5°：射程约 3.99 m，最高约 0.087 m，飞行约 0.267 s',
        en: 'Near-horizontal throw v₀ = 15 m/s, θ = 5°: range ≈ 3.99 m, peak ≈ 0.087 m, flight ≈ 0.267 s',
      },
      kernel: 'projectile',
      input: { v0: 15, angle: 5, g: 9.8 },
      expected: { range: 3.9868204056, maxHeight: 0.0872003973, flightTime: 0.2668032941 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '篮球划过一道弧线空心入网，烟花冲上夜空再炸开——这些看似不同的运动，其实是同一道题。它们都叫抛体运动，而破解它的钥匙只有四个字：化曲为直。',
          en: 'A basketball arcs cleanly into the hoop; a firework streaks up and bursts overhead. Different as they look, they\'re the same physics problem — projectile motion. And the key to cracking it is a single idea: split the curve into straight lines.',
        },
      },
      {
        id: 'concept-components',
        kind: 'concept',
        text: {
          zh: '抛出去的物体只受重力。我们把初速度拆成水平分量和竖直分量，奇迹就发生了：水平方向不受力，就一直匀速走；竖直方向只受重力，做加速度为 g 的匀变速运动。两个方向各走各的，互不干扰，合起来的轨迹就是一条抛物线。',
          en: 'Once launched, the object feels gravity alone. Split the launch velocity into a horizontal part and a vertical part, and the problem falls apart — in a good way. Horizontally there\'s no force, so it cruises at constant speed; vertically it accelerates at g, just like free fall. Each direction minds its own business, and together they trace a parabola.',
        },
      },
      {
        id: 'concept-quantities',
        kind: 'concept',
        text: {
          zh: '有了分解，三个量都好算：飞行时间只看竖直分运动，角度越大飞得越久；最高点出现在竖直分速度减到零的瞬间；射程等于水平速度乘以飞行时间，初速率一定时，45 度抛得最远。还有个巧事：30 度和 60 度这对互余的角度，射程一模一样。',
          en: 'With the motion split, three quantities come easily. Flight time depends only on the vertical part — the steeper the angle, the longer it stays up. The peak is the instant the vertical speed hits zero. Range is horizontal speed times flight time, and for a given launch speed, 45 degrees throws farthest. A nice bonus: complementary angles like 30 and 60 degrees give exactly the same range.',
        },
      },
      {
        id: 'concept-horizontal',
        kind: 'concept',
        text: {
          zh: '把抛射角收到零，就是平抛运动。它在竖直方向没有初速度，就是纯粹的自由落体，下落时间只由高度决定。所以有个反直觉的结论：不管你水平扔得多快，它和同时松手落下的球，永远同时落地。',
          en: 'Shrink the launch angle to zero and you get horizontal projection. Vertically it starts from rest — pure free fall — so the fall time depends only on the height. That leads to a counter-intuitive fact: however fast you throw a ball horizontally, it hits the ground at the very same instant as one simply dropped at the same moment.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '来亲手验证一下。先点“篮球投篮”预设，看看 1.3 秒多的飞行时间是怎么来的。然后把抛射角滑块从 30 度拖到 60 度，对比射程是不是真的相同。再把角度调到接近 0 度，体验一把平抛。最后试试调小重力加速度 g——把这记投篮搬到月球上，球会飞出多远？',
          en: 'Time to check it yourself. Start with the "basketball shot" preset and see where its 1.3-second flight comes from. Then drag the angle slider from 30 to 60 degrees and compare the ranges — are they really equal? Push the angle near zero to feel a horizontal throw. And for fun, shrink g: how far does that basketball shot travel on the Moon?',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '一句话总结：抛体运动就是水平方向的匀速直线运动，叠加竖直方向的自由落体。记住最高点速度不为零、加速度永远是 g，再记住 45 度射程最大，这一节你就拿稳了。接下来去小测里检验一下吧。',
          en: 'In one line: projectile motion is uniform horizontal motion stacked on top of vertical free fall. Keep in mind that at the peak the speed isn\'t zero, the acceleration is always g, and 45 degrees gives the longest range — then this topic is yours. Head to the quiz and put it to the test.',
        },
      },
    ],
  },
  related: ['igcse-0625-1-2-motion', 'phy-kinematics-freefall', 'phy-motion-001'],
};
