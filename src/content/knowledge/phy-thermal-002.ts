import { gasKernel } from '../../simulations/kernels/gas';
import type { KnowledgePoint } from '../types';

export const phyThermal002: KnowledgePoint = {
  id: 'phy-thermal-002',
  subject: 'physics',
  title: { zh: '气体压强与玻意耳定律', en: 'Gas Pressure and Boyle’s Law' },
  summary: {
    zh: '从分子动理论理解气体压强的来源，探究一定质量的气体在温度不变时压强与体积的反比关系（玻意耳定律），以及温度对压强的影响。',
    en: 'Understand the origin of gas pressure through the kinetic particle model, explore how pressure varies inversely with volume at constant temperature (Boyle’s law), and see the effect of temperature on pressure.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j8b/ch3'],
    igcse: ['0625/1.8', '0625/2.1'],
  },
  keywords: {
    zh: ['气体压强', '玻意耳定律', '等温变化', '分子动理论', '热力学温度', '开尔文', '大气压'],
    en: ['gas pressure', "Boyle's law", 'isothermal change', 'kinetic particle model', 'absolute temperature', 'kelvin', 'atmospheric pressure'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '气体压强的微观解释' },
      {
        type: 'paragraph',
        text: '气体由大量做无规则运动的分子组成，分子不断撞击容器壁，对器壁产生持续的平均作用力，这就是气体压强的微观来源。压缩气体时，单位体积内分子数增多，撞击更频繁，压强增大；升高温度时分子运动更剧烈，每次撞击更猛烈，压强也会增大。',
      },
      { type: 'heading', text: '玻意耳定律（等温变化）' },
      {
        type: 'paragraph',
        text: '一定质量的某种气体，在温度不变时，压强 p 与体积 V 成反比。体积压缩到原来的一半，压强就增大为原来的两倍。例如用注射器封闭一段空气后缓慢推活塞，就能体会到压强随体积减小而增大。',
      },
      { type: 'formula', latex: 'p_1 V_1 = p_2 V_2 \\quad (\\text{温度不变})', caption: '玻意耳定律：pV 乘积保持不变' },
      { type: 'heading', text: '温度的影响：必须用热力学温度' },
      {
        type: 'paragraph',
        text: '体积不变时，气体的压强与热力学温度 T（单位开尔文，K）成正比，而不是与摄氏温度成正比。换算关系为 T = t + 273.15。因此 20 °C 加热到 100 °C 时，压强并不是变为 5 倍，而是按 373.15 K / 293.15 K ≈ 1.27 倍增大。',
      },
      { type: 'formula', latex: 'T = t + 273.15', caption: '热力学温度 T (K) 与摄氏温度 t (°C) 的换算' },
      { type: 'formula', latex: '\\dfrac{pV}{T} = \\text{常量}', caption: '一定质量气体的压强、体积与热力学温度的关系' },
      {
        type: 'list',
        items: [
          '等温压缩：V 减半 → p 加倍，pV 不变。',
          '等容升温：T 升高 → p 按 T 的比值增大。',
          '仿真中以 V₀、p₀ = 1 atm、T₀ = 293.15 K（20 °C）为基准状态，压强以 atm 显示。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Microscopic origin of gas pressure' },
      {
        type: 'paragraph',
        text: 'A gas consists of vast numbers of particles in constant random motion. Their continual collisions with the container walls exert a steady average force — this is the microscopic origin of gas pressure. Compressing the gas packs more particles into each unit volume, so collisions become more frequent and the pressure rises; heating makes the particles move faster and hit harder, which also raises the pressure.',
      },
      { type: 'heading', text: "Boyle's law (isothermal change)" },
      {
        type: 'paragraph',
        text: 'For a fixed mass of gas at constant temperature, the pressure p is inversely proportional to the volume V. Halving the volume doubles the pressure. You can feel this by trapping air in a syringe and slowly pushing the plunger in.',
      },
      { type: 'formula', latex: 'p_1 V_1 = p_2 V_2 \\quad (\\text{constant temperature})', caption: "Boyle's law: the product pV stays constant" },
      { type: 'heading', text: 'The role of temperature: use kelvin' },
      {
        type: 'paragraph',
        text: 'At constant volume, the pressure of a gas is proportional to its absolute temperature T in kelvin — not to the Celsius temperature. The conversion is T = t + 273.15. So heating a gas from 20 °C to 100 °C does not multiply the pressure by 5; it rises by the factor 373.15 K / 293.15 K ≈ 1.27.',
      },
      { type: 'formula', latex: 'T = t + 273.15', caption: 'Converting Celsius temperature t (°C) to absolute temperature T (K)' },
      { type: 'formula', latex: '\\dfrac{pV}{T} = \\text{constant}', caption: 'Relating pressure, volume and absolute temperature for a fixed mass of gas' },
      {
        type: 'list',
        items: [
          'Isothermal compression: halving V doubles p, keeping pV constant.',
          'Heating at constant volume: p rises in proportion to T.',
          'In the simulation the reference state is V₀ at p₀ = 1 atm and T₀ = 293.15 K (20 °C); pressure is shown in atm.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'gas-law',
    params: [
      {
        key: 'volume',
        label: { zh: '相对体积 V/V₀', en: 'Relative volume V/V₀' },
        min: 0.2,
        max: 1,
        step: 0.01,
        defaultValue: 1,
      },
      {
        key: 'temperature',
        label: { zh: '温度 t', en: 'Temperature t' },
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 20,
        unit: '°C',
      },
    ],
    liveFormulas: [
      {
        id: 'pressure',
        latex: 'p = p_0 \\cdot \\dfrac{T}{T_0} \\cdot \\dfrac{V_0}{V}',
        substitute: (p) =>
          `p = \\dfrac{273.15 + ${p.temperature}}{293.15 \\times ${p.volume}}\\ \\text{atm}`,
      },
      {
        id: 'pv',
        latex: 'pV = p_0 V_0 \\cdot \\dfrac{T}{T_0}',
        substitute: (p) =>
          `pV = \\dfrac{273.15 + ${p.temperature}}{293.15}\\ p_0 V_0`,
      },
    ],
  },
  presets: [
    {
      id: 'isothermal-compression',
      name: { zh: '等温压缩', en: 'Isothermal compression' },
      description: {
        zh: '温度保持 20 °C，体积压缩为一半，压强加倍为 2 atm。',
        en: 'At a constant 20 °C, halving the volume doubles the pressure to 2 atm.',
      },
      params: { volume: 0.5, temperature: 20 },
    },
    {
      id: 'constant-volume-heating',
      name: { zh: '等容升温', en: 'Heating at constant volume' },
      description: {
        zh: '体积不变，从 20 °C 加热到 100 °C，压强按热力学温度之比增大。',
        en: 'At constant volume, heating from 20 °C to 100 °C raises the pressure by the ratio of absolute temperatures.',
      },
      params: { volume: 1, temperature: 100 },
    },
    {
      id: 'compress-and-heat',
      name: { zh: '压缩一半并升温', en: 'Compress to half and heat' },
      description: {
        zh: '体积减半同时升温到 100 °C，压强约为原来的 2.55 倍。',
        en: 'Halving the volume and heating to 100 °C raises the pressure to about 2.55 times the original.',
      },
      params: { volume: 0.5, temperature: 100 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一定质量的气体在温度不变时，体积从 1 L 压缩到 0.5 L。若原来压强为 1 atm，压缩后的压强是：',
        en: 'A fixed mass of gas at constant temperature is compressed from 1 L to 0.5 L. If the initial pressure is 1 atm, the final pressure is:',
      },
      options: {
        zh: ['0.5 atm', '1 atm', '2 atm', '4 atm'],
        en: ['0.5 atm', '1 atm', '2 atm', '4 atm'],
      },
      answerIndex: 2,
      explanation: {
        zh: '由玻意耳定律 p₁V₁ = p₂V₂，p₂ = 1 × 1 / 0.5 = 2 atm。0.5 atm 是把反比错当正比；温度不变时压强不会不变；4 atm 是把压强误认为与体积平方成反比。',
        en: 'By Boyle’s law p₁V₁ = p₂V₂, so p₂ = 1 × 1 / 0.5 = 2 atm. 0.5 atm treats the inverse relation as direct; the pressure cannot stay unchanged when the gas is compressed; 4 atm wrongly assumes pressure varies with the inverse square of volume.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '密闭容器中的气体体积不变，温度从 20 °C 升高到 100 °C，压强约变为原来的多少倍？',
        en: 'A gas in a sealed container is heated from 20 °C to 100 °C at constant volume. By what factor does the pressure change?',
      },
      options: {
        zh: ['约 1.27 倍', '2 倍', '5 倍', '不变'],
        en: ['About 1.27', '2', '5', 'It stays the same'],
      },
      answerIndex: 0,
      explanation: {
        zh: '压强与热力学温度成正比：p₂/p₁ = T₂/T₁ = 373.15/293.15 ≈ 1.27。5 倍是误用摄氏温度之比 100/20；温度升高分子撞击更剧烈，压强不可能不变。',
        en: 'Pressure is proportional to absolute temperature: p₂/p₁ = T₂/T₁ = 373.15/293.15 ≈ 1.27. The factor 5 misuses the Celsius ratio 100/20; with faster particles the pressure cannot stay unchanged.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '用分子动理论解释：把气球内的空气压缩（温度不变），压强增大的原因是：',
        en: 'Using the kinetic particle model, why does the pressure of air in a balloon increase when it is compressed at constant temperature?',
      },
      options: {
        zh: [
          '分子体积变大，撞击更有力',
          '单位体积内分子数增多，撞击器壁更频繁',
          '分子运动速度显著增大',
          '分子之间产生相互吸引的力',
        ],
        en: [
          'The particles grow larger and hit harder',
          'There are more particles per unit volume, so they hit the walls more frequently',
          'The particles move significantly faster',
          'Attractive forces appear between the particles',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '温度不变意味着分子平均速率不变，每次撞击的力度基本不变；压缩使分子更密集，单位时间撞击器壁的次数增多，压强因而增大。分子本身的大小不变，温度不变时速率也不会显著增大，分子间引力不是压强增大的原因。',
        en: 'At constant temperature the mean speed of the particles is unchanged, so each collision is just as hard; compression packs the particles closer together, so they strike the walls more often per second and the pressure rises. Particle size is unchanged, speed does not increase at constant temperature, and intermolecular attraction is not the cause of the pressure rise.',
      },
    },
  ],
  kernels: {
    gas: gasKernel,
  },
  expectedResults: [
    {
      id: 'probe-isothermal-half',
      description: {
        zh: '等温（20 °C）体积减半：压强加倍为 2 atm，pV 保持为 1',
        en: 'Isothermal (20 °C) halving of volume: pressure doubles to 2 atm, pV stays at 1',
      },
      kernel: 'gas',
      input: { volume: 0.5, temperature: 20 },
      expected: { pressure: 2, pv: 1 },
    },
    {
      id: 'probe-constant-volume-heating',
      description: {
        zh: '等容从 20 °C 升温到 100 °C：压强 = 373.15/293.15 ≈ 1.2729 atm',
        en: 'Heating at constant volume from 20 °C to 100 °C: pressure = 373.15/293.15 ≈ 1.2729 atm',
      },
      kernel: 'gas',
      input: { volume: 1, temperature: 100 },
      expected: { pressure: 1.2728978338734436, pv: 1.2728978338734436 },
    },
    {
      id: 'probe-compress-and-heat',
      description: {
        zh: '体积减半并升温到 100 °C：压强 ≈ 2.5458 atm',
        en: 'Halving the volume and heating to 100 °C: pressure ≈ 2.5458 atm',
      },
      kernel: 'gas',
      input: { volume: 0.5, temperature: 100 },
      expected: { pressure: 2.545795667746887, pv: 1.2728978338734436 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '给自行车打气时，你把打气筒的出气口堵住再往下压，越压越费劲——筒里的空气在“反抗”。这股反抗的力就是气体压强。它从哪儿来？又遵循什么规律？这节课我们从分子的视角把压强看个明白。',
          en: 'Pump up a bicycle tyre with the outlet blocked and the plunger fights back harder and harder as you push — the trapped air is resisting. That resistance is gas pressure. Where does it come from, and what rules does it follow? In this lesson we look at pressure from the molecules’ point of view.',
        },
      },
      {
        id: 'concept-microscopic',
        kind: 'concept',
        text: {
          zh: '从微观看，气体是无数不停乱跑的分子，它们没完没了地撞在容器壁上，每撞一下就给器壁一个小小的推力，无数次撞击平均下来，就是我们测到的压强。所以有两条路能让压强变大：把气体压进更小的空间，分子更密、撞得更勤；或者升高温度，分子跑得更快、撞得更狠。',
          en: 'Microscopically, a gas is a swarm of molecules in constant random motion, hammering the container walls endlessly. Each collision gives the wall a tiny push, and the average of countless collisions is the pressure we measure. So there are two ways to raise it: squeeze the gas into a smaller volume so the molecules crowd together and collide more often, or heat it so the molecules move faster and hit harder.',
        },
      },
      {
        id: 'concept-boyle',
        kind: 'concept',
        text: {
          zh: '温度不变时，压强和体积的关系特别干净：体积减半，压强加倍——压强乘体积是个常数，这就是玻意耳定律，p₁V₁ 等于 p₂V₂。但要注意温度的那条路：压强跟热力学温度成正比，单位是开尔文，不是摄氏度。从 20 度加热到 100 度，压强可不是翻 5 倍，而是按 373 比 293 来算，只增大到约 1.27 倍。',
          en: 'At constant temperature, the pressure–volume relationship is beautifully simple: halve the volume and the pressure doubles — pressure times volume stays constant. That is Boyle’s law, p₁V₁ equals p₂V₂. But watch the temperature route: pressure is proportional to the absolute temperature in kelvin, not Celsius. Heating from 20 to 100 degrees does not multiply the pressure by five; it rises by the ratio 373 to 293, about 1.27 times.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '轮到你了。先把温度固定在 20 度，把体积滑块从 1 慢慢压到 0.5，盯着压强读数——它应该正好翻倍到 2 个大气压，而 pV 乘积纹丝不动。再把体积拉回 1，把温度升到 100 度，看压强只涨到约 1.27。最后试试“压缩一半并升温”预设：两个因素叠加，压强冲到约 2.55 倍，想想为什么是 2 乘 1.27。',
          en: 'Now it’s your turn. Hold the temperature at 20 degrees and drag the volume slider from 1 down to 0.5 — watch the pressure reading double to exactly 2 atmospheres while the pV product stays rock steady. Then return the volume to 1, raise the temperature to 100 degrees, and see the pressure climb only to about 1.27. Finally try the “Compress to half and heat” preset: both effects stack, pushing the pressure to about 2.55 times — can you see why that is 2 times 1.27?',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '回顾一下：气体压强来自分子对器壁的持续撞击；温度不变时 p 与 V 成反比，pV 是常数；体积不变时 p 与热力学温度 T 成正比，摄氏温度必须先加 273.15 换算成开尔文。掌握这两条，下面的计算题就难不倒你了。',
          en: 'Let’s recap: gas pressure comes from molecules bombarding the container walls; at constant temperature p and V are inversely proportional with pV constant; at constant volume p is proportional to the absolute temperature T, so Celsius readings must first be converted to kelvin by adding 273.15. With these two rules in hand, the calculations below should give you no trouble.',
        },
      },
    ],
  },
  related: ['phy-thermal-001', 'phy-pressure-001', 'igcse-0625-2-1-gas-particles', 'igcse-0625-2-2-thermal-properties'],
};
