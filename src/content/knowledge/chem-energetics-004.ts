import type { KnowledgePoint } from '../types';

export const chemEnergetics004: KnowledgePoint = {
  id: 'chem-energetics-004',
  subject: 'chemistry',
  title: { zh: '燃料的燃烧与能源', en: 'Fuel Combustion and Energy' },
  summary: {
    zh: '燃烧是最常见的放热反应。掌握燃烧的三个条件和灭火的原理，区分完全燃烧与不完全燃烧，了解化石燃料的利用与新能源的开发。',
    en: 'Combustion is the most familiar exothermic reaction. Learn the three conditions needed for burning and the principles of fire extinguishing, distinguish complete from incomplete combustion, and survey fossil fuels and new energy sources.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9a/ch7'],
    igcse: ['0620/5', '0620/10'],
  },
  keywords: {
    zh: ['燃烧', '着火点', '灭火', '完全燃烧', '不完全燃烧', '一氧化碳', '化石燃料', '氢能'],
    en: ['combustion', 'ignition temperature', 'fire extinguishing', 'complete combustion', 'incomplete combustion', 'carbon monoxide', 'fossil fuels', 'hydrogen energy'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '燃烧的条件' },
      {
        type: 'paragraph',
        text: '燃烧是可燃物与氧气发生的一种发光、发热的剧烈的氧化反应。燃烧需要同时满足三个条件，缺一不可。着火点是可燃物燃烧所需的最低温度，它是物质的固有属性，一般不能改变——"降低着火点"的说法是错误的，灭火时降低的是温度。',
      },
      {
        type: 'list',
        items: [
          '可燃物：如木材、煤、天然气、酒精等。',
          '与氧气（或空气）接触：氧气是常见的助燃物。',
          '温度达到可燃物的着火点。',
          '灭火原理与燃烧条件一一对应：清除或隔离可燃物；隔绝氧气；使温度降到着火点以下。破坏任一条件即可灭火。',
        ],
      },
      { type: 'heading', text: '完全燃烧与不完全燃烧' },
      {
        type: 'paragraph',
        text: '氧气充足时，含碳燃料完全燃烧生成二氧化碳，放出的热量多；氧气不足时发生不完全燃烧，生成一氧化碳、炭黑等，放出的热量少。一氧化碳无色无味、有剧毒，能与人体血液中的血红蛋白结合，使人缺氧中毒——这是煤气中毒和使用燃气热水器时必须通风的原因。',
      },
      {
        type: 'formula',
        latex: '\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\xrightarrow{\\text{点燃}} \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}',
        caption: '天然气（主要成分甲烷）完全燃烧',
      },
      {
        type: 'formula',
        latex: '2\\mathrm{CH}_4 + 3\\mathrm{O}_2 \\xrightarrow{\\text{点燃}} 2\\mathrm{CO} + 4\\mathrm{H}_2\\mathrm{O}',
        caption: '氧气不足时甲烷不完全燃烧，生成有毒的一氧化碳',
      },
      { type: 'heading', text: '化石燃料与新能源' },
      {
        type: 'paragraph',
        text: '煤、石油、天然气是三大化石燃料，它们都是混合物，属于不可再生能源。化石燃料燃烧不仅放出能量，还会产生二氧化硫、氮氧化物、粉尘等污染物。使燃料充分燃烧通常有两条途径：一是燃烧时提供足够的空气（氧气），二是增大燃料与空气的接触面积（如把煤制成蜂窝煤、把燃料雾化喷入）。',
      },
      {
        type: 'paragraph',
        text: '为节约资源、减少污染，人们正在开发新能源。氢气被认为是理想的清洁燃料：热值高，燃烧产物只有水，不污染环境；但目前大规模制取和安全储运的成本较高。太阳能、风能、地热能、生物质能等也是重要的新能源。',
      },
      {
        type: 'formula',
        latex: '2\\mathrm{H}_2 + \\mathrm{O}_2 \\xrightarrow{\\text{点燃}} 2\\mathrm{H}_2\\mathrm{O}',
        caption: '氢气燃烧：产物只有水，是清洁燃料',
      },
    ],
    en: [
      { type: 'heading', text: 'Conditions for combustion' },
      {
        type: 'paragraph',
        text: 'Burning is a vigorous oxidation reaction between a fuel and oxygen that gives out light and heat. Three conditions must all be met at the same time — remove any one of them and the fire goes out. The ignition temperature is the lowest temperature at which a fuel catches fire; it is a fixed property of the substance, so "lowering the ignition point" is a misconception — what fire-fighting lowers is the temperature.',
      },
      {
        type: 'list',
        items: [
          'A fuel (combustible material): wood, coal, natural gas, alcohol, etc.',
          'Contact with oxygen (or air): oxygen is the common supporter of combustion.',
          'Temperature reaching the ignition point of the fuel.',
          'Fire extinguishing mirrors these conditions: remove or isolate the fuel; cut off the oxygen; cool the fuel below its ignition temperature.',
        ],
      },
      { type: 'heading', text: 'Complete and incomplete combustion' },
      {
        type: 'paragraph',
        text: 'With a plentiful supply of oxygen, a carbon-containing fuel undergoes complete combustion to carbon dioxide, releasing the maximum heat. When oxygen is limited, incomplete combustion produces carbon monoxide and soot (carbon particles), releasing less heat. Carbon monoxide is colourless, odourless and highly toxic: it binds to haemoglobin in the blood and starves the body of oxygen — which is why gas water heaters must always be well ventilated.',
      },
      {
        type: 'formula',
        latex: '\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}',
        caption: 'Complete combustion of methane, the main component of natural gas',
      },
      {
        type: 'formula',
        latex: '2\\mathrm{CH}_4 + 3\\mathrm{O}_2 \\rightarrow 2\\mathrm{CO} + 4\\mathrm{H}_2\\mathrm{O}',
        caption: 'Incomplete combustion of methane in limited oxygen, forming toxic carbon monoxide',
      },
      { type: 'heading', text: 'Fossil fuels and new energy sources' },
      {
        type: 'paragraph',
        text: 'Coal, petroleum and natural gas are the three fossil fuels. They are all mixtures and non-renewable energy sources. Besides releasing energy, burning them also produces pollutants such as sulfur dioxide, nitrogen oxides and particulates. To burn a fuel more completely: supply enough air (oxygen), and increase the contact area between fuel and air — for example by making honeycomb briquettes or spraying fuel in as a fine mist.',
      },
      {
        type: 'paragraph',
        text: 'To conserve resources and cut pollution, new energy sources are being developed. Hydrogen is regarded as an ideal clean fuel: it has a high energy value and its only product is water. However, producing it on a large scale and storing and transporting it safely remain costly. Solar, wind, geothermal and biomass energy are other important alternatives.',
      },
      {
        type: 'formula',
        latex: '2\\mathrm{H}_2 + \\mathrm{O}_2 \\rightarrow 2\\mathrm{H}_2\\mathrm{O}',
        caption: 'Burning hydrogen: the only product is water — a clean fuel',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '炒菜时油锅起火，用锅盖盖灭。这种灭火方法依据的原理是？',
        en: 'A wok of oil catches fire while cooking, and the fire is put out by covering it with a lid. What principle does this method rely on?',
      },
      options: {
        zh: [
          '清除可燃物',
          '隔绝氧气（空气）',
          '降低了油的着火点',
          '使油变成了不可燃物',
        ],
        en: [
          'Removing the fuel',
          'Cutting off the oxygen (air)',
          'Lowering the ignition point of the oil',
          'Turning the oil into a non-combustible substance',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '盖上锅盖后，锅内的氧气被隔绝，燃烧因缺少助燃物而停止。注意：着火点是物质的固有属性，不能被"降低"；油本身仍是可燃物，只是失去了燃烧所需的氧气。',
        en: 'The lid seals off the oxygen inside the wok, so burning stops for lack of the supporter of combustion. Note that the ignition point is a fixed property and cannot be "lowered"; the oil is still combustible — it has simply lost access to oxygen.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列关于燃烧的说法中，正确的是？',
        en: 'Which statement about combustion is correct?',
      },
      options: {
        zh: [
          '只要有可燃物和氧气，燃烧就一定能发生',
          '温度达到着火点且与氧气接触，可燃物才能燃烧',
          '用水灭火是因为水降低了可燃物的着火点',
          '可燃物在氧气不足时燃烧更充分',
        ],
        en: [
          'As long as there is a fuel and oxygen, burning will definitely occur',
          'A fuel burns only when its temperature reaches the ignition point and it is in contact with oxygen',
          'Water puts out fires because it lowers the ignition point of the fuel',
          'Fuels burn more completely when oxygen is insufficient',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '燃烧需要三个条件同时满足：可燃物、氧气、温度达到着火点，缺一个都不能燃烧。水灭火的原理主要是吸热降温（并隔绝空气），着火点本身不会改变；氧气充足才能使燃烧更完全。',
        en: 'Combustion needs all three conditions at once: a fuel, oxygen, and a temperature at or above the ignition point. Water extinguishes fire mainly by absorbing heat to cool the fuel (and blocking air) — the ignition point itself does not change; a plentiful oxygen supply is what makes combustion complete.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '冬天在密闭房间内用煤炉取暖容易发生煤气中毒。其主要原因和预防措施分别是？',
        en: 'Heating a closed room with a coal stove in winter can easily cause "coal gas" poisoning. What are the main cause and the correct preventive measure?',
      },
      options: {
        zh: [
          '二氧化碳过多使人窒息，应洒石灰水吸收',
          '煤不完全燃烧产生一氧化碳，应保持通风使氧气充足',
          '煤燃烧放出二氧化硫，应佩戴防毒面具',
          '炉温过高导致缺氧，应降低炉温',
        ],
        en: [
          'Excess carbon dioxide suffocates people; spray limewater to absorb it',
          'Incomplete combustion of coal produces carbon monoxide; keep the room ventilated so oxygen is sufficient',
          'Burning coal releases sulfur dioxide; wear a gas mask',
          'The stove is too hot and consumes the oxygen; lower the stove temperature',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '煤在氧气不足时不完全燃烧生成一氧化碳。CO 无色无味、有剧毒，能与血红蛋白结合使人缺氧。保持室内通风可以提供充足的氧气，使煤尽量完全燃烧，并将产生的有害气体排出。',
        en: 'With insufficient oxygen, coal undergoes incomplete combustion and forms carbon monoxide — colourless, odourless and highly toxic, binding to haemoglobin and starving the body of oxygen. Ventilating the room supplies enough oxygen for complete combustion and carries harmful gases away.',
      },
    },
  ],
  related: ['igcse-0620-11-3-fuels', 'igcse-0620-5-1-energetics', 'chem-energetics-001', 'chem-gas-001'],
};
