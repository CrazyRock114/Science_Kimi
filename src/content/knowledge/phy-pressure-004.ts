import { buoyancyKernel } from '../../simulations/kernels/buoyancy';
import type { KnowledgePoint } from '../types';

export const phyPressure004: KnowledgePoint = {
  id: 'phy-pressure-004',
  subject: 'physics',
  title: { zh: '物体浮沉条件及应用', en: 'Floating and Sinking: Conditions and Applications' },
  summary: {
    zh: '用浮力与重力（或物体密度与液体密度）的大小关系判断物体的上浮、悬浮、下沉与漂浮，并了解轮船、潜水艇、密度计等应用。',
    en: 'Use the balance of upthrust and weight (or object density versus liquid density) to predict rising, suspending, sinking and floating, and explore applications such as ships, submarines and hydrometers.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch4'],
    igcse: ['0625/1.8', '0625/1.4'],
  },
  keywords: {
    zh: ['浮沉条件', '漂浮', '悬浮', '沉底', '轮船', '潜水艇', '密度计'],
    en: ['floating and sinking', 'float', 'suspend', 'sink', 'ship', 'submarine', 'hydrometer'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '物体的浮沉条件' },
      {
        type: 'paragraph',
        text: '浸在液体中的物体同时受到竖直向下的重力 G 和竖直向上的浮力 F浮，它的浮沉由这两个力的大小关系决定。对于实心物体，也可以用物体密度 ρ物 与液体密度 ρ液 的关系来判断。',
      },
      {
        type: 'list',
        items: [
          '上浮：F浮 > G（ρ物 < ρ液），物体向上运动，最终漂浮在液面上。',
          '悬浮：F浮 = G（ρ物 = ρ液），物体可停留在液体中任何深度。',
          '下沉：F浮 < G（ρ物 > ρ液），物体向下运动，最终沉到容器底部。',
        ],
      },
      { type: 'formula', latex: '\\text{漂浮时：} F_{浮} = G，\\quad \\dfrac{V_{排}}{V_{物}} = \\dfrac{\\rho_{物}}{\\rho_{液}}', caption: '漂浮的物体只把一部分体积浸入液面下' },
      {
        type: 'paragraph',
        text: '漂浮是上浮的最终状态：物体露出液面后 V排 减小，浮力随之减小，直到浮力恰好等于重力时静止。冰山密度约为 917 kg/m³，所以漂浮的冰山约有 92% 的体积藏在水面之下。',
      },
      { type: 'heading', text: '浮沉条件的应用' },
      {
        type: 'list',
        items: [
          '轮船：用钢铁做成空心结构，增大排开水的体积以获得足够大的浮力；轮船从河里驶入海里时浮力不变（都等于自身重力），但因海水密度更大，排开水的体积变小，船身会上浮一些。',
          '潜水艇：自身外壳体积不变、浮力基本不变，靠向水舱充水或排水来改变自身重力，实现下潜和上浮；悬浮时浮力等于重力。',
          '密度计：漂浮在被测液体中，浮力总等于自身重力；液体密度越大，浸入的体积越小，刻度上小下大。',
          '盐水选种：饱满的种子密度大沉入盐水底部，干瘪的种子密度小漂浮在液面上。',
        ],
      },
      {
        type: 'paragraph',
        text: '气球和飞艇利用的是气体的浮力：充入密度小于空气的气体（如氢气、氦气），当浮力大于总重力时升空。',
      },
    ],
    en: [
      { type: 'heading', text: 'Conditions for floating and sinking' },
      {
        type: 'paragraph',
        text: 'An immersed object experiences weight W downwards and upthrust F_b upwards; which way it moves depends on the balance of the two. For a solid (uniform) object this can also be judged by comparing the object density with the liquid density.',
      },
      {
        type: 'list',
        items: [
          'Rises: F_b > W (ρ_object < ρ_liquid) — the object moves up and eventually floats at the surface.',
          'Suspends: F_b = W (ρ_object = ρ_liquid) — the object can remain at any depth.',
          'Sinks: F_b < W (ρ_object > ρ_liquid) — the object moves down and rests on the bottom.',
        ],
      },
      { type: 'formula', latex: '\\text{Floating: } F_b = W,\\quad \\dfrac{V_{disp}}{V} = \\dfrac{\\rho_{object}}{\\rho_{liquid}}', caption: 'A floating object keeps only part of its volume below the surface' },
      {
        type: 'paragraph',
        text: 'Floating is the end state of rising: once the object breaks the surface, V_disp shrinks and the upthrust falls until it just balances the weight. Ice has a density of about 917 kg/m³, so about 92% of a floating iceberg lies below the waterline.',
      },
      { type: 'heading', text: 'Applications' },
      {
        type: 'list',
        items: [
          'Ships: a hollow steel hull displaces a large volume of water, giving enough upthrust. Sailing from a river into the sea, the upthrust still equals the weight, but denser sea water means less volume is displaced, so the ship rides a little higher.',
          'Submarines: the hull volume (and hence the upthrust) stays essentially fixed; flooding or blowing the ballast tanks changes the weight to dive or surface. When suspended, upthrust equals weight.',
          'Hydrometers: they float, so the upthrust always equals their weight; the denser the liquid, the smaller the immersed volume — the scale reads higher at the bottom.',
          'Seed selection in salt water: plump (denser) seeds sink while shrivelled (less dense) ones float.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Balloons and airships use buoyancy in gases: filled with a gas less dense than air (hydrogen or helium), they rise when the upthrust exceeds the total weight.',
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
      id: 'wood-block',
      name: { zh: '木块（漂浮）', en: 'Wood block (floats)' },
      description: {
        zh: '木块密度 500 kg/m³ 小于水，上浮后漂浮，一半体积浸入水中。',
        en: 'Wood at 500 kg/m³ is less dense than water: it rises and floats half-submerged.',
      },
      params: { objectDensity: 500, liquidDensity: 1000, volume: 500 },
    },
    {
      id: 'iron-block',
      name: { zh: '铁块（沉底）', en: 'Iron block (sinks)' },
      description: {
        zh: '铁块密度 7800 kg/m³ 远大于水，下沉至底部，浮力仅为重力的约 1/8。',
        en: 'Iron at 7800 kg/m³ is far denser than water: it sinks to the bottom, with upthrust only about 1/8 of its weight.',
      },
      params: { objectDensity: 7800, liquidDensity: 1000, volume: 500 },
    },
    {
      id: 'submarine',
      name: { zh: '悬浮潜水艇', en: 'Suspended submarine' },
      description: {
        zh: '潜水艇密度等于水的密度（1000 kg/m³）时悬浮，浮力等于重力；充水增重则下潜，排水减重则上浮。',
        en: 'At 1000 kg/m³, equal to water, a submarine stays suspended with upthrust equal to weight; flooding the tanks makes it dive, blowing them makes it rise.',
      },
      params: { objectDensity: 1000, liquidDensity: 1000, volume: 500 },
    },
    {
      id: 'egg-in-brine',
      name: { zh: '盐水浮鸡蛋', en: 'Egg floating in salt water' },
      description: {
        zh: '鸡蛋密度约 1050 kg/m³，在清水中下沉；换成 1100 kg/m³ 的盐水后漂浮，约 95% 体积浸入。',
        en: 'An egg (about 1050 kg/m³) sinks in fresh water but floats in 1100 kg/m³ brine, about 95% submerged.',
      },
      params: { objectDensity: 1050, liquidDensity: 1100, volume: 500 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '把密度为 500 kg/m³ 的木块放入水中，静止后木块浸入水中的体积占总体积的（　）。',
        en: 'A wood block of density 500 kg/m³ is placed in water. At rest, the fraction of its volume below the surface is (　).',
      },
      options: {
        zh: ['全部', '1/2', '1/5', '仅底部一点点'],
        en: ['All of it', '1/2', '1/5', 'Only a tiny part at the bottom'],
      },
      answerIndex: 1,
      explanation: {
        zh: '漂浮时 V排/V物 = ρ物/ρ液 = 500/1000 = 1/2。A 是悬浮或沉底的情况；C 把密度比算反又取错；D 不符合密度比为 1/2 的事实。',
        en: 'Floating gives V_disp/V = ρ_object/ρ_liquid = 500/1000 = 1/2. A would hold for suspending or sinking; C inverts and misreads the density ratio; D contradicts a ratio of 1/2.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '潜水艇在水下航行时，实现下潜和上浮靠的是（　）。',
        en: 'A submarine underwater dives and surfaces by (　).',
      },
      options: {
        zh: ['改变自身重力（水舱充水或排水）', '改变外壳的体积', '改变海水的密度', '改变发动机的推力方向'],
        en: ['Changing its own weight (flooding or blowing ballast tanks)', 'Changing the volume of its hull', 'Changing the density of the sea water', 'Redirecting the engine thrust'],
      },
      answerIndex: 0,
      explanation: {
        zh: '潜水艇外壳体积不变，浮力基本不变；靠水舱充水增大重力而下潜、排水减小重力而上浮。B 外壳是刚性的；C 无法改变海水密度；D 推力不是浮沉的原理。',
        en: 'The hull volume, and hence the upthrust, is essentially fixed; flooding the tanks increases weight to dive and blowing them decreases weight to surface. B is impossible for a rigid hull; C cannot be changed; D is not the principle of diving.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '同一艘轮船从河里驶入海里（均漂浮），它受到的浮力和船身吃水深度的变化是（　）。',
        en: 'The same ship sails from a river into the sea, floating in both. How do the upthrust and the draught (depth of hull below waterline) change?',
      },
      options: {
        zh: ['浮力变大，吃水变深', '浮力不变，吃水变浅', '浮力变小，吃水变浅', '浮力不变，吃水不变'],
        en: ['Upthrust increases, draught increases', 'Upthrust unchanged, draught decreases', 'Upthrust decreases, draught decreases', 'Upthrust unchanged, draught unchanged'],
      },
      answerIndex: 1,
      explanation: {
        zh: '轮船始终漂浮，浮力总等于自身重力，故浮力不变；海水密度大于河水，由 F浮 = ρ液 g V排 知所需 V排 变小，吃水变浅，船身上浮一些。',
        en: 'The ship floats throughout, so the upthrust always equals its weight and stays unchanged; sea water is denser, so by F_b = ρgV_disp a smaller displaced volume suffices — the draught decreases and the ship rides higher.',
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
        zh: '木块（500 kg/m³）在水中漂浮：浮力等于重力 2.45 N，浸入分数 0.5',
        en: 'Wood (500 kg/m³) floats in water: upthrust equals weight at 2.45 N, submerged fraction 0.5',
      },
      kernel: 'buoyancy',
      input: { objectDensity: 500, liquidDensity: 1000, volume: 500 },
      expected: { weight: 2.45, buoyantForce: 2.45, submergedFraction: 0.5 },
    },
    {
      id: 'probe-iron-sink',
      description: {
        zh: '铁块（7800 kg/m³）沉底：全浸，浮力 4.9 N 远小于重力 38.22 N',
        en: 'Iron (7800 kg/m³) sinks: fully submerged, upthrust 4.9 N is far less than weight 38.22 N',
      },
      kernel: 'buoyancy',
      input: { objectDensity: 7800, liquidDensity: 1000, volume: 500 },
      expected: { weight: 38.22, buoyantForce: 4.9, submergedFraction: 1 },
    },
    {
      id: 'probe-egg-brine',
      description: {
        zh: '鸡蛋（1050 kg/m³）在盐水（1100 kg/m³）中漂浮：浮力等于重力 5.145 N，浸入分数 21/22',
        en: 'Egg (1050 kg/m³) floats in brine (1100 kg/m³): upthrust equals weight at 5.145 N, submerged fraction 21/22',
      },
      kernel: 'buoyancy',
      input: { objectDensity: 1050, liquidDensity: 1100, volume: 500 },
      expected: { weight: 5.145, buoyantForce: 5.145, submergedFraction: 0.9545454545454546 },
    },
  ],
};
