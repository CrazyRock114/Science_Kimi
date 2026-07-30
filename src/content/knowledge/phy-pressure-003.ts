import { buoyancyKernel } from '../../simulations/kernels/buoyancy';
import type { KnowledgePoint } from '../types';

export const phyPressure003: KnowledgePoint = {
  id: 'phy-pressure-003',
  subject: 'physics',
  title: { zh: '阿基米德原理', en: "Archimedes' Principle" },
  summary: {
    zh: '认识浮力，理解阿基米德原理：浸在液体中的物体受到向上的浮力，浮力的大小等于它排开的液体所受的重力。',
    en: "Meet buoyancy and understand Archimedes' principle: an object immersed in a fluid experiences an upthrust equal to the weight of the fluid it displaces.",
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch4'],
    igcse: ['0625/1.8'],
  },
  keywords: {
    zh: ['浮力', '阿基米德原理', '排开液体', '浮力大小', '称重法'],
    en: ['buoyancy', 'upthrust', "Archimedes' principle", 'displaced fluid', 'weight of displaced fluid'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '浮力的存在' },
      {
        type: 'paragraph',
        text: '浸在液体或气体中的物体受到竖直向上的托力，这个力叫做浮力。浮力产生的原因是液体内部压强随深度增加：物体下表面所处的深度比上表面大，下表面受到的向上压力大于上表面受到的向下压力，这个压力差就是浮力。',
      },
      {
        type: 'paragraph',
        text: '用弹簧测力计可以测浮力：在空气中测得物体重力 G，再把物体浸入液体中读出测力计示数 F，则 F浮 = G − F（称重法）。',
      },
      { type: 'heading', text: '阿基米德原理' },
      {
        type: 'paragraph',
        text: '浸在液体中的物体受到向上的浮力，浮力的大小等于它排开的液体所受的重力。这就是阿基米德原理，它同样适用于气体。',
      },
      { type: 'formula', latex: 'F_{浮} = G_{排} = \\rho_{液}\\, g\\, V_{排}', caption: 'V排 是物体排开液体的体积，ρ液 是液体密度' },
      {
        type: 'list',
        items: [
          '浮力大小只与液体密度 ρ液 和排开液体的体积 V排 有关，与物体自身的密度、形状无关。',
          '物体全部浸没后，V排 = V物 不再变化，继续下沉时浮力保持不变（与深度无关）。',
          '物体部分浸入时，V排 等于浸入部分的体积，小于物体的总体积。',
        ],
      },
      {
        type: 'paragraph',
        text: '巨大的轮船能浮在水面上，是因为它做成空心后总体积很大，能排开非常多的水，从而获得很大的浮力。',
      },
    ],
    en: [
      { type: 'heading', text: 'The existence of buoyancy' },
      {
        type: 'paragraph',
        text: 'An object immersed in a liquid or gas experiences an upward force called buoyancy (upthrust). It arises because liquid pressure increases with depth: the upward force on the bottom surface exceeds the downward force on the top surface, and this force difference is the upthrust.',
      },
      {
        type: 'paragraph',
        text: 'A spring balance can measure buoyancy: weigh the object in air (W), then read the balance with the object immersed (F). The upthrust is W − F.',
      },
      { type: 'heading', text: "Archimedes' principle" },
      {
        type: 'paragraph',
        text: "An object immersed in a fluid experiences an upthrust equal to the weight of the fluid it displaces. This is Archimedes' principle, and it applies to gases as well as liquids.",
      },
      { type: 'formula', latex: 'F_b = W_{disp} = \\rho_{fluid}\\, g\\, V_{disp}', caption: 'V_disp is the volume of fluid displaced, ρ_fluid the fluid density' },
      {
        type: 'list',
        items: [
          "The upthrust depends only on the fluid density and the volume displaced — not on the object's own density or shape.",
          'Once fully submerged, V_disp equals the object volume and no longer changes, so the upthrust stays constant as the object sinks deeper.',
          'For a partly immersed object, V_disp is only the immersed volume, which is less than the total volume.',
        ],
      },
      {
        type: 'paragraph',
        text: 'A huge steel ship floats because its hollow hull encloses a very large volume, so it can displace an enormous amount of water and gain a correspondingly large upthrust.',
      },
    ],
  },
  simulation: {
    renderer: 'buoyancy',
    params: [
      {
        key: 'objectDensity',
        label: { zh: '物体密度 ρ物', en: 'Object density ρ' },
        min: 100,
        max: 8000,
        step: 50,
        defaultValue: 500,
        unit: 'kg/m³',
      },
      {
        key: 'liquidDensity',
        label: { zh: '液体密度 ρ液', en: 'Liquid density ρ' },
        min: 700,
        max: 1400,
        step: 10,
        defaultValue: 1000,
        unit: 'kg/m³',
      },
      {
        key: 'volume',
        label: { zh: '物体体积 V', en: 'Object volume V' },
        min: 50,
        max: 2000,
        step: 50,
        defaultValue: 500,
        unit: 'cm³',
      },
    ],
    liveFormulas: [
      {
        id: 'weight',
        latex: 'G = \\rho_{物}\\, V\\, g',
        substitute: (p) => `G = ${p.objectDensity}\\times(${p.volume}\\times10^{-6})\\times 9.8\\ \\text{N}`,
      },
      {
        id: 'buoyancy-full',
        latex: 'F_{浮} = \\rho_{液}\\, g\\, V_{排}',
        substitute: (p) =>
          `F_{浮} = ${p.liquidDensity}\\times 9.8\\times(${p.volume}\\times10^{-6})\\ \\text{N}\\ (\\text{全浸})`,
      },
    ],
  },
  presets: [
    {
      id: 'wood-in-water',
      name: { zh: '木块在水中', en: 'Wood block in water' },
      description: {
        zh: '木块密度 500 kg/m³，小于水的密度，静止时漂浮，一半体积浸入水中。',
        en: 'Wood at 500 kg/m³ is less dense than water, so it floats with half its volume submerged.',
      },
      params: { objectDensity: 500, liquidDensity: 1000, volume: 500 },
    },
    {
      id: 'iron-in-water',
      name: { zh: '铁块在水中', en: 'Iron block in water' },
      description: {
        zh: '铁块密度 7800 kg/m³，远大于水的密度，全浸后沉底，浮力远小于重力。',
        en: 'Iron at 7800 kg/m³ is far denser than water; it sinks fully submerged, with upthrust much smaller than its weight.',
      },
      params: { objectDensity: 7800, liquidDensity: 1000, volume: 500 },
    },
    {
      id: 'suspended',
      name: { zh: '悬浮物体', en: 'Neutrally buoyant object' },
      description: {
        zh: '物体密度与液体密度相等（均为 1000 kg/m³），悬浮在液体中，浮力等于重力。',
        en: 'Object and liquid densities are equal (1000 kg/m³); it stays suspended with upthrust equal to weight.',
      },
      params: { objectDensity: 1000, liquidDensity: 1000, volume: 500 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一个体积为 500 cm³ 的铁块完全浸没在水中，它受到的浮力是多少？（ρ水 = 1.0 × 10³ kg/m³，g 取 9.8 N/kg）',
        en: 'An iron block of volume 500 cm³ is fully submerged in water. What is the upthrust on it? (ρ = 1.0 × 10³ kg/m³, g = 9.8 N/kg)',
      },
      options: {
        zh: ['2.45 N', '4.9 N', '9.8 N', '38.22 N'],
        en: ['2.45 N', '4.9 N', '9.8 N', '38.22 N'],
      },
      answerIndex: 1,
      explanation: {
        zh: '全浸时 V排 = 500 cm³ = 5 × 10⁻⁴ m³，F浮 = ρ液 g V排 = 1000 × 9.8 × 5 × 10⁻⁴ = 4.9 N。A 是体积只用了一半；C 错把体积当 10⁻³ m³；D 是铁块的重力而非浮力。',
        en: 'Fully submerged, V_disp = 500 cm³ = 5 × 10⁻⁴ m³, so F_b = ρgV = 1000 × 9.8 × 5 × 10⁻⁴ = 4.9 N. A uses half the volume; C misreads the volume as 10⁻³ m³; D is the weight of the iron, not the upthrust.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '一个物体完全浸没在水中后，再被压到更深的位置（仍完全浸没），它受到的浮力（　）。',
        en: 'After an object is fully submerged in water, it is pushed deeper (still fully submerged). The upthrust on it (　).',
      },
      options: {
        zh: ['变大', '变小', '不变', '先变大后变小'],
        en: ['increases', 'decreases', 'stays the same', 'first increases then decreases'],
      },
      answerIndex: 2,
      explanation: {
        zh: '完全浸没后 V排 = V物 不变，液体密度也不变，由 F浮 = ρ液 g V排 知浮力与深度无关，保持不变。',
        en: 'Once fully submerged, V_disp equals the object volume and the liquid density is unchanged, so by F_b = ρgV_disp the upthrust is independent of depth.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '把同一个铝块分别浸没在水和盐水中（均完全浸没），受到的浮力（　）。',
        en: 'The same aluminium block is fully submerged first in water and then in salt water. The upthrust is (　).',
      },
      options: {
        zh: ['在水中较大', '在盐水中较大', '一样大', '无法比较'],
        en: ['greater in water', 'greater in salt water', 'the same in both', 'impossible to compare'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'V排 相同（都等于铝块体积），盐水密度大于水的密度，由 F浮 = ρ液 g V排 知在盐水中浮力较大。',
        en: 'V_disp is the same (the block volume) in both, but salt water is denser, so by F_b = ρgV_disp the upthrust is greater in salt water.',
      },
    },
  ],
  kernels: {
    buoyancy: buoyancyKernel,
  },
  expectedResults: [
    {
      id: 'probe-wood-float',
      description: {
        zh: '木块（500 kg/m³）在水中漂浮：浮力等于重力 2.45 N，浸入体积分数 0.5',
        en: 'Wood (500 kg/m³) floats in water: upthrust equals weight at 2.45 N, submerged fraction 0.5',
      },
      kernel: 'buoyancy',
      input: { objectDensity: 500, liquidDensity: 1000, volume: 500 },
      expected: { weight: 2.45, buoyantForce: 2.45, submergedFraction: 0.5 },
    },
    {
      id: 'probe-stone-sink',
      description: {
        zh: '石块（2000 kg/m³）沉底：全浸，浮力 2.45 N 小于重力 4.9 N',
        en: 'Stone (2000 kg/m³) sinks: fully submerged, upthrust 2.45 N is less than weight 4.9 N',
      },
      kernel: 'buoyancy',
      input: { objectDensity: 2000, liquidDensity: 1000, volume: 250 },
      expected: { weight: 4.9, buoyantForce: 2.45, submergedFraction: 1 },
    },
    {
      id: 'probe-suspend',
      description: {
        zh: '密度相等（1000 kg/m³）时悬浮：浮力等于重力 9.8 N',
        en: 'Equal densities (1000 kg/m³) give neutral buoyancy: upthrust equals weight at 9.8 N',
      },
      kernel: 'buoyancy',
      input: { objectDensity: 1000, liquidDensity: 1000, volume: 1000 },
      expected: { weight: 9.8, buoyantForce: 9.8, submergedFraction: 1 },
    },
  ],
};
