import type { KnowledgePoint } from '../types';

export const phyThermal001: KnowledgePoint = {
  id: 'phy-thermal-001',
  subject: 'physics',
  title: { zh: '温度、热量与比热容', en: 'Temperature, Heat and Specific Heat Capacity' },
  summary: {
    zh: '区分温度与热量两个易混概念，理解比热容的物理意义，并用 Q = cmΔt 计算物体吸收或放出的热量。',
    en: 'Distinguish between temperature and heat, understand the meaning of specific heat capacity, and use Q = cmΔT to calculate thermal energy transferred.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch1'],
    igcse: ['0625/2.2'],
  },
  keywords: {
    zh: ['温度', '热量', '内能', '比热容', '热平衡', '焦耳', '吸热', '放热'],
    en: ['temperature', 'heat', 'internal energy', 'specific heat capacity', 'thermal equilibrium', 'joule', 'thermal energy transfer'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '温度与热量不是一回事' },
      {
        type: 'paragraph',
        text: '温度表示物体的冷热程度，反映物体内部分子无规则运动的剧烈程度，单位是摄氏度（°C）或开尔文（K）。热量是热传递过程中转移能量的多少，单位是焦耳（J）。热量是一个"过程量"——只能说物体"吸收"或"放出"多少热量，不能说物体"含有"热量。',
      },
      { type: 'heading', text: '内能与热传递' },
      {
        type: 'paragraph',
        text: '物体内部所有分子做无规则运动的动能和分子势能的总和叫做内能。发生热传递的条件是存在温度差：热量总是自发地从高温物体传向低温物体，直到两者温度相同，达到热平衡。',
      },
      { type: 'heading', text: '比热容' },
      {
        type: 'paragraph',
        text: '一定质量的某种物质，温度升高时吸收的热量与它的质量和升高温度的乘积之比，叫做这种物质的比热容 c，单位是 J/(kg·°C)。比热容是物质的一种特性：水的比热容很大，为 4.2 × 10³ J/(kg·°C)，所以水常用作冷却剂或暖气介质；砂石比热容小，昼夜温差大。',
      },
      { type: 'formula', latex: 'Q = cm\\Delta T', caption: '吸放热公式：Q 热量 (J)，c 比热容 J/(kg·°C)，m 质量 (kg)，ΔT 温度变化 (°C)' },
      { type: 'formula', latex: 'c_{\\text{水}} = 4.2 \\times 10^{3}\\ \\text{J/(kg\\cdot°C)}', caption: '水的比热容：1 kg 水升高 1 °C 吸收 4200 J' },
      {
        type: 'list',
        items: [
          '质量相同的不同物质升高相同温度，比热容大的吸收热量多。',
          '沿海地区昼夜温差比内陆小，就是因为海水的比热容比砂石大。',
          '计算时注意单位统一：质量用 kg，温度变化用 °C（温差与 K 的数值相同）。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Temperature is not heat' },
      {
        type: 'paragraph',
        text: 'Temperature measures how hot or cold an object is, reflecting how vigorously its particles move; it is measured in degrees Celsius (°C) or kelvin (K). Heat is the energy transferred during heating, measured in joules (J). Heat describes a process — an object can gain or lose thermal energy, but it does not "contain" heat.',
      },
      { type: 'heading', text: 'Internal energy and thermal transfer' },
      {
        type: 'paragraph',
        text: 'The total kinetic and potential energy of all the particles in an object is its internal energy. Thermal energy is transferred whenever there is a temperature difference: it flows spontaneously from the hotter body to the colder one until both reach the same temperature — thermal equilibrium.',
      },
      { type: 'heading', text: 'Specific heat capacity' },
      {
        type: 'paragraph',
        text: 'The specific heat capacity c of a substance is the energy needed to raise the temperature of 1 kg of it by 1 °C, with units J/(kg·°C). It is a property of the material: water has an unusually large value of 4.2 × 10³ J/(kg·°C), which is why water is used as a coolant and in heating systems, while sand and stone, with small specific heat capacities, heat up and cool down quickly.',
      },
      { type: 'formula', latex: 'Q = cm\\Delta T', caption: 'Thermal energy transferred: Q in J, c in J/(kg·°C), m in kg, ΔT the temperature change in °C' },
      { type: 'formula', latex: 'c_{\\text{water}} = 4.2 \\times 10^{3}\\ \\text{J/(kg\\cdot°C)}', caption: 'Specific heat capacity of water: 4200 J raises 1 kg of water by 1 °C' },
      {
        type: 'list',
        items: [
          'For equal masses heated through the same temperature rise, the substance with the larger specific heat capacity absorbs more energy.',
          'Coastal regions have smaller day–night temperature swings than inland areas because water has a much larger specific heat capacity than sand and rock.',
          'Keep units consistent: mass in kg, temperature change in °C (a temperature difference has the same numerical value in K).',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '把 2 kg 的水从 20 °C 加热到 70 °C，水吸收的热量是多少？（c_水 = 4.2 × 10³ J/(kg·°C)）',
        en: 'How much thermal energy is needed to heat 2 kg of water from 20 °C to 70 °C? (c = 4.2 × 10³ J/(kg·°C))',
      },
      options: {
        zh: ['4.2 × 10⁵ J', '5.88 × 10⁵ J', '8.4 × 10³ J', '1.68 × 10⁵ J'],
        en: ['4.2 × 10⁵ J', '5.88 × 10⁵ J', '8.4 × 10³ J', '1.68 × 10⁵ J'],
      },
      answerIndex: 0,
      explanation: {
        zh: 'Q = cmΔT = 4.2 × 10³ × 2 × (70 − 20) = 4.2 × 10⁵ J。注意 ΔT = 50 °C 而非 70 °C（错选 5.88 × 10⁵ J 就是用了 70）；8.4 × 10³ J 忘了乘质量与温差。',
        en: 'Q = cmΔT = 4.2 × 10³ × 2 × (70 − 20) = 4.2 × 10⁵ J. Note ΔT = 50 °C, not 70 °C (using 70 gives the wrong 5.88 × 10⁵ J); 8.4 × 10³ J forgets the mass and temperature change.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于温度、热量和内能，下列说法正确的是：',
        en: 'Which statement about temperature, heat and internal energy is correct?',
      },
      options: {
        zh: [
          '温度高的物体含有的热量多',
          '物体吸收热量，内能增加，但温度不一定升高',
          '热量总是从内能多的物体传向内能少的物体',
          '0 °C 的冰块没有内能',
        ],
        en: [
          'A hotter object contains more heat',
          'When an object absorbs heat its internal energy increases, but its temperature does not necessarily rise',
          'Heat always flows from the object with more internal energy to the one with less',
          'Ice at 0 °C has no internal energy',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '吸热时内能一定增加，但温度可能不变，例如晶体熔化时吸热而温度保持在熔点，故 B 正确。热量是过程量，不能说"含有"热量（A 错）；热量自发地从温度高的物体传向温度低的物体，温度高不一定内能多（C 错）；一切物体在任何温度下都有内能（D 错）。',
        en: 'Absorbing heat always increases internal energy, but the temperature may stay constant — for example a crystalline solid absorbs heat at its melting point without warming, so B is correct. Heat is a process quantity and cannot be "contained" (A is wrong); heat flows from higher to lower temperature, and a hotter object does not necessarily have more internal energy (C is wrong); every object has internal energy at any temperature (D is wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '质量相同的水和砂石吸收相同的热量后，砂石温度升高得更多，原因是：',
        en: 'Equal masses of water and sand absorb the same amount of thermal energy, yet the sand warms up more. Why?',
      },
      options: {
        zh: [
          '砂石的密度比水大',
          '砂石的比热容比水小',
          '水比砂石更容易散热',
          '砂石的导热性比水好',
        ],
        en: [
          'Sand has a greater density than water',
          'Sand has a smaller specific heat capacity than water',
          'Water loses heat more easily than sand',
          'Sand conducts heat better than water',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '由 ΔT = Q/(cm)，Q、m 相同时，c 越小 ΔT 越大。砂石的比热容比水小得多，所以升温更多。这与密度、散热快慢和导热性无关。',
        en: 'From ΔT = Q/(cm), with Q and m equal, a smaller c gives a larger ΔT. Sand has a much smaller specific heat capacity than water, so it warms up more. Density, cooling rate and conductivity are irrelevant here.',
      },
    },
  ],
  related: ['phy-thermal-002', 'igcse-0625-2-2-thermal-properties', 'igcse-0625-2-3-heat-transfer'],
};
