import { refractionKernel } from '../../simulations/kernels/refraction';
import type { KnowledgePoint } from '../types';

export const phyOptics001: KnowledgePoint = {
  id: 'phy-optics-001',
  subject: 'physics',
  title: { zh: '光的折射', en: 'Refraction of Light' },
  summary: {
    zh: '探究光从一种介质斜射入另一种介质时传播方向的改变，用斯涅尔定律定量计算折射角，并理解全反射的条件。',
    en: 'Explore how light changes direction when passing between media, calculate the angle of refraction with Snell’s law, and understand the conditions for total internal reflection.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8a/ch4'],
    igcse: ['0625/3.2'],
  },
  keywords: {
    zh: ['折射', '折射角', '入射角', '法线', '折射率', '斯涅尔定律', '临界角', '全反射'],
    en: ['refraction', 'angle of refraction', 'angle of incidence', 'normal', 'refractive index', "Snell's law", 'critical angle', 'total internal reflection'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是光的折射' },
      {
        type: 'paragraph',
        text: '光从一种介质斜射入另一种介质时，传播方向在界面上发生偏折，这种现象叫做光的折射。折射的原因是光在不同介质中的传播速度不同。注意：所有角度都相对于法线（与界面垂直的虚线）来测量。',
      },
      { type: 'heading', text: '折射定律与折射率' },
      {
        type: 'paragraph',
        text: '介质的折射率 n 描述光在其中减慢的程度：真空（空气近似）n = 1，水 n ≈ 1.33，普通玻璃 n ≈ 1.5。光从光疏介质（n 小）进入光密介质（n 大）时折向法线，折射角小于入射角；反之则远离法线。',
      },
      { type: 'formula', latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', caption: '斯涅尔定律：θ₁ 为入射角，θ₂ 为折射角' },
      { type: 'formula', latex: '\\theta_2 = \\arcsin\\!\\left(\\dfrac{n_1 \\sin\\theta_1}{n_2}\\right)', caption: '由入射角求折射角' },
      { type: 'heading', text: '临界角与全反射' },
      {
        type: 'paragraph',
        text: '当光从光密介质射向光疏介质（n₁ > n₂）且入射角不断增大时，折射角会先于入射角达到 90°。使折射角恰为 90° 的入射角称为临界角。入射角超过临界角时，光不再折射，全部反射回原介质，这就是全反射。',
      },
      { type: 'formula', latex: '\\sin\\theta_c = \\dfrac{n_2}{n_1}\\quad (n_1 > n_2)', caption: '临界角公式，仅当 n₁ > n₂ 时存在' },
      {
        type: 'list',
        items: [
          '垂直入射（θ₁ = 0°）时不发生偏折，光沿原方向传播。',
          '全反射的两个条件：① 从光密介质射向光疏介质；② 入射角大于临界角。',
          '应用实例：光纤通信、自行车的角反射器、水中的气泡看起来特别亮。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'What is refraction?' },
      {
        type: 'paragraph',
        text: 'When light passes obliquely from one medium into another, its direction bends at the boundary. This is refraction, caused by the change in the speed of light between media. All angles are measured from the normal, an imaginary line perpendicular to the boundary.',
      },
      { type: 'heading', text: "Snell's law and refractive index" },
      {
        type: 'paragraph',
        text: 'The refractive index n describes how much a medium slows light down: n = 1 for a vacuum (approximately air), n ≈ 1.33 for water and n ≈ 1.5 for ordinary glass. Light entering a more optically dense medium bends towards the normal (θ₂ < θ₁); entering a less dense medium it bends away from the normal.',
      },
      { type: 'formula', latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', caption: "Snell's law: θ₁ is the angle of incidence, θ₂ the angle of refraction" },
      { type: 'formula', latex: '\\theta_2 = \\arcsin\\!\\left(\\dfrac{n_1 \\sin\\theta_1}{n_2}\\right)', caption: 'Solving for the angle of refraction' },
      { type: 'heading', text: 'Critical angle and total internal reflection' },
      {
        type: 'paragraph',
        text: 'When light travels from a denser to a less dense medium (n₁ > n₂), increasing the angle of incidence makes the angle of refraction reach 90° first. The angle of incidence at which this happens is the critical angle. Beyond it, no refraction occurs: all the light is reflected back into the denser medium — total internal reflection.',
      },
      { type: 'formula', latex: '\\sin\\theta_c = \\dfrac{n_2}{n_1}\\quad (n_1 > n_2)', caption: 'Critical angle formula; it exists only when n₁ > n₂' },
      {
        type: 'list',
        items: [
          'At normal incidence (θ₁ = 0°) the ray is not bent and continues straight on.',
          'Two conditions for total internal reflection: ① light travels from a denser to a less dense medium; ② the angle of incidence exceeds the critical angle.',
          'Applications: optical fibres, bicycle reflectors, and the silvery shine of air bubbles in water.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'refraction',
    params: [
      {
        key: 'n1',
        label: { zh: '入射侧折射率 n₁', en: 'Refractive index n₁ (incident side)' },
        min: 1,
        max: 2.5,
        step: 0.01,
        defaultValue: 1,
      },
      {
        key: 'n2',
        label: { zh: '折射侧折射率 n₂', en: 'Refractive index n₂ (refracting side)' },
        min: 1,
        max: 2.5,
        step: 0.01,
        defaultValue: 1.5,
      },
      {
        key: 'incidentAngle',
        label: { zh: '入射角 θ₁', en: 'Angle of incidence θ₁' },
        min: 0,
        max: 89,
        step: 1,
        defaultValue: 40,
        unit: '°',
      },
    ],
    liveFormulas: [
      {
        id: 'snell',
        latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2',
        substitute: (p) =>
          `\\sin\\theta_2 = \\dfrac{${p.n1}\\sin ${p.incidentAngle}^\\circ}{${p.n2}}`,
      },
      {
        id: 'critical',
        latex: '\\sin\\theta_c = \\dfrac{n_2}{n_1}',
        substitute: (p) => `\\sin\\theta_c = \\dfrac{${p.n2}}{${p.n1}}`,
      },
    ],
  },
  presets: [
    {
      id: 'air-to-water',
      name: { zh: '空气 → 水', en: 'Air → water' },
      description: {
        zh: '光从空气斜射入水中，折向法线。',
        en: 'Light passes from air into water, bending towards the normal.',
      },
      params: { n1: 1, n2: 1.33, incidentAngle: 40 },
    },
    {
      id: 'air-to-glass',
      name: { zh: '空气 → 玻璃', en: 'Air → glass' },
      description: {
        zh: '光从空气斜射入玻璃，偏折更明显。',
        en: 'Light passes from air into glass, bending more strongly.',
      },
      params: { n1: 1, n2: 1.5, incidentAngle: 40 },
    },
    {
      id: 'water-to-air-tir',
      name: { zh: '水 → 空气（全反射）', en: 'Water → air (total internal reflection)' },
      description: {
        zh: '入射角 50° 超过临界角约 48.8°，发生全反射。',
        en: 'At 50° the angle of incidence exceeds the critical angle of about 48.8°, so total internal reflection occurs.',
      },
      params: { n1: 1.33, n2: 1, incidentAngle: 50 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '光以 40° 的入射角从空气（n = 1）射入水中（n ≈ 1.33），折射角约为多少？',
        en: 'Light strikes water (n ≈ 1.33) from air (n = 1) at an angle of incidence of 40°. What is the approximate angle of refraction?',
      },
      options: {
        zh: ['约 19°', '约 29°', '约 40°', '约 54°'],
        en: ['About 19°', 'About 29°', 'About 40°', 'About 54°'],
      },
      answerIndex: 1,
      explanation: {
        zh: '由斯涅尔定律 sinθ₂ = (1 × sin40°) / 1.33 ≈ 0.483，θ₂ ≈ 29°。19° 对应的是空气→玻璃（n = 1.5）；光从空气进入水必须折向法线，故 40° 和 54° 不可能。',
        en: 'By Snell’s law sin θ₂ = (1 × sin 40°) / 1.33 ≈ 0.483, so θ₂ ≈ 29°. 19° corresponds to air → glass (n = 1.5); entering water from air the ray must bend towards the normal, so 40° and 54° are impossible.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '光从水中射向空气，临界角约为 48.8°。下列哪种情况会发生全反射？',
        en: 'The critical angle for light passing from water into air is about 48.8°. In which case does total internal reflection occur?',
      },
      options: {
        zh: [
          '水中光线以 30° 入射角射向水面',
          '水中光线以 60° 入射角射向水面',
          '空气中的光线以 60° 入射角射向水面',
          '水中光线垂直射向水面',
        ],
        en: [
          'A ray in water hitting the surface at 30°',
          'A ray in water hitting the surface at 60°',
          'A ray in air hitting the water surface at 60°',
          'A ray in water hitting the surface at normal incidence',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '全反射要求光从光密介质射向光疏介质且入射角大于临界角。60° > 48.8° 满足条件；30° 小于临界角只会折射；从空气射入水方向相反，不可能全反射；垂直入射不偏折也不全反射。',
        en: 'Total internal reflection requires light going from a denser to a less dense medium at an angle greater than the critical angle. 60° > 48.8° qualifies; 30° is below the critical angle and only refracts; travelling from air into water is the wrong direction; normal incidence neither bends nor totally reflects.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '池底的一盏灯在水中看起来比实际位置浅，这是因为：',
        en: 'A lamp at the bottom of a pool appears shallower than it really is. This is because:',
      },
      options: {
        zh: [
          '光在水面发生反射',
          '光从水中射入空气时远离法线偏折',
          '光在水中传播速度比空气中快',
          '水吸收了部分光使像变暗',
        ],
        en: [
          'Light is reflected at the water surface',
          'Light bends away from the normal as it leaves the water for air',
          'Light travels faster in water than in air',
          'Water absorbs some light, dimming the image',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '光从水中进入空气时折射角大于入射角（远离法线），人眼沿折射光线的反向延长线判断位置，因此看到的虚像比实际位置浅。反射产生的是倒影；光在水中速度更慢而非更快；吸收影响的是亮度不是位置。',
        en: 'Light leaving water for air refracts away from the normal, and the eye traces the refracted rays straight back, so the virtual image appears shallower. Reflection produces a mirror image; light is slower, not faster, in water; absorption affects brightness, not apparent position.',
      },
    },
  ],
  kernels: {
    refraction: refractionKernel,
  },
  expectedResults: [
    {
      id: 'probe-air-water-40',
      description: {
        zh: '空气→水（n₂ = 1.33），入射角 40°：折射角约 28.90°，不发生全反射',
        en: 'Air → water (n₂ = 1.33) at 40°: refraction angle ≈ 28.90°, no total internal reflection',
      },
      kernel: 'refraction',
      input: { n1: 1, n2: 1.33, incidentAngle: 40 },
      expected: { refractedAngle: 28.90108453970811, tir: 0 },
    },
    {
      id: 'probe-air-glass-30',
      description: {
        zh: '空气→玻璃（n₂ = 1.5），入射角 30°：折射角约 19.47°',
        en: 'Air → glass (n₂ = 1.5) at 30°: refraction angle ≈ 19.47°',
      },
      kernel: 'refraction',
      input: { n1: 1, n2: 1.5, incidentAngle: 30 },
      expected: { refractedAngle: 19.47122063449069, tir: 0 },
    },
    {
      id: 'probe-water-air-tir',
      description: {
        zh: '水→空气，入射角 50° > 临界角约 48.75°：发生全反射',
        en: 'Water → air at 50° > critical angle ≈ 48.75°: total internal reflection',
      },
      kernel: 'refraction',
      input: { n1: 1.33, n2: 1, incidentAngle: 50 },
      expected: { criticalAngle: 48.753466631327235, tir: 1 },
    },
  ],
};
