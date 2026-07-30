import type { KnowledgePoint } from '../types';

export const phyPressure002: KnowledgePoint = {
  id: 'phy-pressure-002',
  subject: 'physics',
  title: { zh: '液体内部的压强', en: 'Pressure in Liquids' },
  summary: {
    zh: '探究液体内部压强的特点，掌握公式 p = ρgh：液体压强随深度和液体密度增大而增大，同一深度向各个方向的压强相等。',
    en: 'Investigate the characteristics of pressure inside a liquid and master p = ρgh: liquid pressure increases with depth and density, and at the same depth it acts equally in all directions.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch3'],
    igcse: ['0625/1.8'],
  },
  keywords: {
    zh: ['液体压强', '深度', '密度', '压强计', '连通器', '船闸'],
    en: ['liquid pressure', 'depth', 'density', 'manometer', 'communicating vessels', 'p = ρgh'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '液体内部压强的存在' },
      {
        type: 'paragraph',
        text: '液体受重力作用，又具有流动性，因此对容器底部、侧壁以及液体内部各处都有压强。用 U 形管压强计可以探测液体内部的压强：探头橡皮膜受到的压强越大，U 形管两侧液面的高度差越大。',
      },
      { type: 'heading', text: '液体内部压强的特点' },
      {
        type: 'list',
        items: [
          '液体内部向各个方向都有压强，在同一深度向各个方向的压强相等。',
          '同种液体中，深度越大，压强越大。',
          '深度相同时，液体的密度越大，压强越大。',
        ],
      },
      { type: 'formula', latex: 'p = \\rho g h', caption: 'ρ 为液体密度，h 为该点到自由液面的竖直深度，g 取 9.8 N/kg' },
      {
        type: 'paragraph',
        text: '公式中的 h 是所求点到液体自由表面的竖直距离，而不是到容器底部的距离。液体内部某点的压强只由液体密度和深度决定，与容器的形状、底面积以及液体的多少无关。',
      },
      { type: 'heading', text: '连通器' },
      {
        type: 'paragraph',
        text: '上端开口、下端连通的容器叫做连通器。连通器里装同种液体且液体不流动时，各容器中的液面总保持相平。茶壶、锅炉水位计、船闸都是连通器原理的应用。',
      },
      {
        type: 'paragraph',
        text: '拦河大坝之所以做成上窄下宽的形状，是因为水的压强随深度增加而增大，坝底受到的水压远大于坝顶，需要更厚的坝体来承受。',
      },
    ],
    en: [
      { type: 'heading', text: 'Pressure exists inside a liquid' },
      {
        type: 'paragraph',
        text: 'Because a liquid has weight and can flow, it exerts pressure on the bottom and walls of its container and on everything immersed in it. A U-tube manometer detects this pressure: the greater the pressure on the probe membrane, the greater the difference in liquid levels.',
      },
      { type: 'heading', text: 'Characteristics of pressure in a liquid' },
      {
        type: 'list',
        items: [
          'Pressure acts in all directions inside a liquid; at the same depth it is equal in all directions.',
          'In the same liquid, pressure increases with depth.',
          'At the same depth, the denser the liquid, the greater the pressure.',
        ],
      },
      { type: 'formula', latex: 'p = \\rho g h', caption: 'ρ is the liquid density, h is the vertical depth below the free surface, g = 9.8 N/kg' },
      {
        type: 'paragraph',
        text: 'Here h is the vertical distance from the point to the free surface, not to the container bottom. The pressure at a point depends only on the liquid density and depth — not on the shape of the container, its base area, or the amount of liquid.',
      },
      { type: 'heading', text: 'Communicating vessels' },
      {
        type: 'paragraph',
        text: 'Containers connected at the bottom and open at the top are called communicating vessels. Filled with the same liquid at rest, the free surfaces settle at the same level. Teapots, boiler water gauges and canal locks all use this principle.',
      },
      {
        type: 'paragraph',
        text: 'A dam is built thicker at the bottom than at the top because water pressure increases with depth: the base of the dam must withstand a much greater pressure than the top.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '水面下 0.2 m 深处，水产生的压强是多少？（ρ水 = 1.0 × 10³ kg/m³，g 取 9.8 N/kg）',
        en: 'What is the pressure due to the water at a depth of 0.2 m below the surface? (ρ = 1.0 × 10³ kg/m³, g = 9.8 N/kg)',
      },
      options: {
        zh: ['196 Pa', '1960 Pa', '19600 Pa', '2000 Pa'],
        en: ['196 Pa', '1960 Pa', '19600 Pa', '2000 Pa'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'p = ρgh = 1.0 × 10³ × 9.8 × 0.2 = 1960 Pa。A 是 g 取错数量级；C 把 0.2 m 当成 2 m；D 用 g = 10 又算错指数。',
        en: 'p = ρgh = 1.0 × 10³ × 9.8 × 0.2 = 1960 Pa. A misplaces the power of ten in g; C uses 2 m instead of 0.2 m; D mishandles g = 10 and the exponent.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于液体内部的压强，下列说法正确的是（　）。',
        en: 'Which statement about pressure inside a liquid is correct?',
      },
      options: {
        zh: [
          '同一深度，液体向各个方向的压强相等',
          '液体压强只与液体的多少有关，与深度无关',
          '同一液体中，深度越小压强越大',
          '深度相同时，液体密度越小压强越大',
        ],
        en: [
          'At the same depth, the pressure is equal in all directions',
          'Liquid pressure depends only on the amount of liquid, not on depth',
          'In the same liquid, shallower points have greater pressure',
          'At the same depth, a less dense liquid gives greater pressure',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '由 p = ρgh，同种液体同一深度压强相等且与方向无关。B 错在压强与液体多少无关；C 应为深度越大压强越大；D 应为密度越大压强越大。',
        en: 'From p = ρgh, at the same depth in the same liquid the pressure is equal in all directions. B is wrong because pressure is independent of the amount of liquid; C should read “greater depth, greater pressure”; D should read “greater density, greater pressure”.',
      },
    },
  ],
};
