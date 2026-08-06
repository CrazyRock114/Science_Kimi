import type { KnowledgePoint } from '../types';

export const phyDensity002: KnowledgePoint = {
  id: 'phy-density-002',
  subject: 'physics',
  title: { zh: '密度及其测量', en: 'Density and Its Measurement' },
  summary: {
    zh: '理解密度是物质的一种特性，掌握定义式 ρ = m/V 与单位换算，会用天平和量筒测量固体、液体的密度，并了解密度与温度的关系。',
    en: 'Understand density as a characteristic property of a material, master the defining equation ρ = m/V and unit conversions, measure the density of solids and liquids with a balance and measuring cylinder, and learn how density varies with temperature.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8a/ch6'],
    igcse: ['0625/1.4'],
  },
  keywords: {
    zh: ['密度', '密度公式', '千克每立方米', '克每立方厘米', '量筒', '排水法', '物质的特性', '热胀冷缩'],
    en: ['density', 'density equation', 'kilogram per cubic metre', 'gram per cubic centimetre', 'measuring cylinder', 'displacement method', 'characteristic property', 'thermal expansion'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '通过探究同种物质的质量与体积的关系，理解密度的概念，知道密度是物质的一种特性。',
          '记住密度公式 ρ = m/V 及单位 kg/m³、g/cm³，会换算（1 g/cm³ = 1×10³ kg/m³）并能查密度表。',
          '会用天平和量筒测量规则固体、不规则固体和液体的密度，知道减小误差的方法。',
          '能定性说明温度对密度的影响，知道水在 4 ℃ 时密度最大的反常膨胀现象。',
        ],
      },
      { type: 'heading', text: '密度的概念与公式' },
      {
        type: 'paragraph',
        text: '实验表明：同种物质的质量与体积成正比，质量与体积的比值是一定的；不同物质，这个比值一般不同。某种物质组成的物体的质量与它的体积之比叫做这种物质的密度，用符号 ρ 表示。密度是物质的一种特性，它的大小与物体的质量多少、体积大小无关，只取决于物质的种类（以及状态和温度）。',
      },
      { type: 'formula', latex: '\\rho = \\dfrac{m}{V}', caption: 'ρ 为密度，m 为质量，V 为体积；变形式 m = ρV、V = m/ρ' },
      { type: 'heading', text: '密度的单位与密度表' },
      {
        type: 'list',
        items: [
          '国际单位：千克每立方米（kg/m³）；常用单位：克每立方厘米（g/cm³）。',
          '换算：1 g/cm³ = 1×10³ kg/m³。',
          '水的密度 ρ水 = 1.0×10³ kg/m³ = 1.0 g/cm³，表示 1 m³ 水的质量是 1.0×10³ kg。',
          '查密度表可知：一般 ρ固 > ρ液 > ρ气；不同物质密度一般不同，可用来鉴别物质（如 ρ铝 = 2.7×10³ kg/m³，ρ铁 = 7.9×10³ kg/m³）。',
        ],
      },
      { type: 'heading', text: '测量固体和液体的密度' },
      {
        type: 'list',
        items: [
          '原理：ρ = m/V。质量用天平测量，体积用量筒测量。',
          '不规则固体（如小石块）：先用天平测质量 m；量筒中倒适量水记体积 V₁，用细线系住石块浸没后记 V₂，则 V = V₂ − V₁，ρ = m/(V₂ − V₁)（排水法）。',
          '液体（如盐水）：先测烧杯和液体的总质量 m₁，把部分液体倒入量筒读出体积 V，再测烧杯和剩余液体的质量 m₂，则 ρ = (m₁ − m₂)/V。这种"差值法"避免了液体倒不干净带来的误差。',
        ],
      },
      { type: 'heading', text: '密度与温度' },
      {
        type: 'paragraph',
        text: '一般物体受热膨胀、遇冷收缩：质量不变而体积变大时，由 ρ = m/V 可知密度变小。空气受热密度变小而上升，冷空气流过来补充，就形成了风；暖气片装在房间低处，也是利用热空气密度小向上流动形成对流。水有反常膨胀：在 4 ℃ 时密度最大，结冰后体积膨胀、密度变小（约 0.9×10³ kg/m³），所以冰能浮在水面上，冬天河水从表面开始结冰，水下的生物得以过冬。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'density（密度）：物体的质量与体积之比，ρ = m/V，单位 kg/m³ 或 g/cm³。',
          'characteristic property（特性）：只由物质种类决定、与物体大小无关的性质，密度可用于鉴别物质。',
          'measuring cylinder（量筒）：测量液体体积的量具，读数时视线与凹液面底部相平。',
          'displacement method（排水法）：用量筒中水面上升的体积测不规则固体体积的方法。',
          'anomalous expansion of water（水的反常膨胀）：水在 0–4 ℃ 之间热缩冷胀，4 ℃ 时密度最大。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Investigate how mass varies with volume for one material and understand density as a characteristic property of the material.',
          'Use ρ = m/V with the units kg/m³ and g/cm³, convert between them (1 g/cm³ = 1×10³ kg/m³) and read a density table.',
          'Measure the density of regular and irregular solids and of liquids using a balance and a measuring cylinder, choosing procedures that reduce error.',
          'Describe qualitatively how temperature affects density, including the anomalous behaviour of water, whose density is greatest at 4 °C.',
        ],
      },
      { type: 'heading', text: 'Defining density' },
      {
        type: 'paragraph',
        text: 'Experiments show that for a given material, mass is proportional to volume — the ratio mass/volume is constant — while different materials generally have different ratios. The density ρ of a substance is the ratio of the mass of an object made of it to its volume. Density is a characteristic property: it does not depend on how large the object is, only on the substance (and its state and temperature).',
      },
      { type: 'formula', latex: '\\rho = \\dfrac{m}{V}', caption: 'ρ is density, m is mass, V is volume; rearrangements m = ρV and V = m/ρ' },
      { type: 'heading', text: 'Units and the density table' },
      {
        type: 'list',
        items: [
          'SI unit: kilogram per cubic metre (kg/m³); common unit: gram per cubic centimetre (g/cm³).',
          'Conversion: 1 g/cm³ = 1×10³ kg/m³.',
          'Density of water: 1.0×10³ kg/m³ = 1.0 g/cm³ — one cubic metre of water has a mass of 1000 kg.',
          'Density tables show that in general ρ(solid) > ρ(liquid) > ρ(gas). Different substances usually have different densities, so density helps identify materials (e.g. aluminium 2.7×10³ kg/m³, iron 7.9×10³ kg/m³).',
        ],
      },
      { type: 'heading', text: 'Measuring the density of solids and liquids' },
      {
        type: 'list',
        items: [
          'Principle: ρ = m/V. Mass is measured with a balance, volume with a measuring cylinder.',
          'Irregular solid (e.g. a stone): measure the mass m; pour water into the cylinder and read V₁, submerge the stone on a thread and read V₂; then V = V₂ − V₁ and ρ = m/(V₂ − V₁) (displacement method).',
          'Liquid (e.g. brine): measure the mass of beaker + liquid m₁, pour some liquid into the cylinder and read its volume V, then measure beaker + remaining liquid m₂; ρ = (m₁ − m₂)/V. This "difference method" avoids the error from liquid clinging to the beaker.',
        ],
      },
      { type: 'heading', text: 'Density and temperature' },
      {
        type: 'paragraph',
        text: 'Most substances expand when heated and contract when cooled: with mass fixed and volume increased, ρ = m/V shows the density falls. Warm air, being less dense, rises and cooler air flows in to replace it — this is how winds form, and why radiators are placed low in a room to drive convection. Water behaves anomalously: its density is greatest at 4 °C, and on freezing it expands, so ice (about 0.9×10³ kg/m³) floats. Lakes freeze from the surface downwards, letting aquatic life survive the winter.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'density (密度): The ratio of mass to volume, ρ = m/V, in kg/m³ or g/cm³.',
          'characteristic property (特性): A property fixed by the substance alone, independent of the size of the sample; density can identify a material.',
          'measuring cylinder (量筒): Glassware for measuring liquid volumes; read at the bottom of the meniscus at eye level.',
          'displacement method (排水法): Finding the volume of an irregular solid from the rise of the water level in a measuring cylinder.',
          'anomalous expansion of water (水的反常膨胀): Water contracts on heating between 0 °C and 4 °C, reaching its maximum density at 4 °C.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '测得一个铝块的质量为 54 g，体积为 20 cm³，则铝的密度为（　）',
        en: 'An aluminium block has a mass of 54 g and a volume of 20 cm³. The density of aluminium is',
      },
      options: {
        zh: ['0.37 g/cm³', '2.7 g/cm³', '2.7×10³ g/m³', '7.9 g/cm³'],
        en: ['0.37 g/cm³', '2.7 g/cm³', '2.7×10³ g/m³', '7.9 g/cm³'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'ρ = m/V = 54 g ÷ 20 cm³ = 2.7 g/cm³ = 2.7×10³ kg/m³。0.37 g/cm³ 是把 V/m 算反了；C 选项数值对但单位写法错误（应为 kg/m³）；7.9 g/cm³ 是铁的密度。',
        en: 'ρ = m/V = 54 g ÷ 20 cm³ = 2.7 g/cm³ = 2.7×10³ kg/m³. 0.37 g/cm³ inverts the ratio (V/m); option C has the right digits but the wrong unit (it should be kg/m³); 7.9 g/cm³ is the density of iron.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于密度公式 ρ = m/V，下列说法正确的是（　）',
        en: 'About the equation ρ = m/V, which statement is correct?',
      },
      options: {
        zh: [
          '物质的密度跟它的质量成正比',
          '物质的密度跟它的体积成反比',
          '同种物质的质量与体积的比值是一定的，密度与 m、V 无关',
          '体积相同的两种物质，密度一定相同',
        ],
        en: [
          'The density of a substance is proportional to its mass',
          'The density of a substance is inversely proportional to its volume',
          'For a given substance the ratio of mass to volume is constant; density is independent of m and V',
          'Two substances with the same volume must have the same density',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: 'ρ = m/V 是密度的定义式和量度式。密度是物质的特性，由物质种类决定：同种物质 m 增大几倍，V 也增大几倍，比值不变，故 A、B 错；体积相同而物质不同，质量一般不同，密度一般也不同，故 D 错。',
        en: 'ρ = m/V defines and measures density. Density is a property of the substance: doubling the mass of the same material doubles the volume, leaving the ratio unchanged — so A and B are wrong; equal volumes of different substances generally have different masses and densities, so D is wrong.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '寒冷的冬天，室外的自来水管容易被冻裂，其主要原因是（　）',
        en: 'In cold winters, outdoor water pipes often burst when the water freezes. The main reason is',
      },
      options: {
        zh: [
          '水结冰后质量变大，把管子压破了',
          '水结冰后密度变小、体积膨胀，把管子胀裂了',
          '水结冰后密度变大，把管子挤破了',
          '低温使水管本身收缩而断裂',
        ],
        en: [
          'Ice has a larger mass than the water, crushing the pipe',
          'Ice is less dense than water, so the water expands on freezing and bursts the pipe',
          'Ice is denser than water, squeezing the pipe apart',
          'The cold makes the pipe itself contract and snap',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '水结成冰时质量不变（A 错），但冰的密度（约 0.9×10³ kg/m³）比水小，由 V = m/ρ 可知体积变大，于是把水管胀裂。冰密度比水小而非大，C 错；管子收缩不是冻裂的主因，D 错。',
        en: 'The mass of water is unchanged on freezing (A wrong), but ice (about 0.9×10³ kg/m³) is less dense than water, so V = m/ρ shows the volume increases and bursts the pipe. Ice is less dense, not denser (C wrong); contraction of the pipe itself is not the main cause (D wrong).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-density-calculation',
      syllabus: ['0625/1.4.1'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'A metal block has a mass of 390 g and a volume of 50 cm³. Calculate the density of the metal, giving your answer in g/cm³.',
      markScheme: [
        {
          text: 'Uses ρ = m / V',
          marks: 1,
          alternatives: ['390 / 50'],
        },
        {
          text: '7.8 g/cm³',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '先写公式再代入：ρ = m/V。50/390 ≈ 0.13 g/cm³ 是把公式记倒了；题目要求 g/cm³，不要多此一举换算成 kg/m³ 而算错位数。',
        en: 'Write the equation before substituting: ρ = m/V. 50/390 ≈ 0.13 g/cm³ is the formula remembered upside down. The question asks for g/cm³ — do not convert to kg/m³ and slip on the powers of ten.',
      },
    },
    {
      id: 'ep-displacement-density',
      syllabus: ['0625/1.4.2'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 1,
      stem: 'A stone of mass 50 g is lowered into a measuring cylinder containing water. The water level rises from 60 cm³ to 85 cm³. What is the density of the stone?',
      options: ['0.5 g/cm³', '2.0 g/cm³', '2.5 g/cm³', '50 g/cm³'],
      answerIndex: 1,
      markScheme: [
        {
          text: 'V = 85 − 60 = 25 cm³ and ρ = 50 / 25 = 2.0 g/cm³',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '排水法的关键是体积要用两次读数之差 25 cm³。直接用 85 cm³ 得 0.59、用 60 cm³ 得 0.83 都是没做差；0.5 g/cm³ 来自 25/50 的倒算。',
        en: 'The key step of the displacement method is the difference of the two readings, 25 cm³. Using 85 cm³ or 60 cm³ directly misses the subtraction; 0.5 g/cm³ comes from computing 25/50 backwards.',
      },
    },
  ],
  related: ['phy-density-001', 'phy-pressure-001', 'igcse-0625-1-3-mass-density'],
};
