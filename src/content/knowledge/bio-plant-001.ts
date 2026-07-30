import { photosynthesisKernel } from '../../simulations/kernels/photosynthesis';
import type { KnowledgePoint } from '../types';

export const bioPlant001: KnowledgePoint = {
  id: 'bio-plant-001',
  subject: 'biology',
  title: { zh: '光合作用及其影响因素', en: 'Photosynthesis and Its Limiting Factors' },
  summary: {
    zh: '理解光合作用的原料、条件、场所和产物，探究光照强度、二氧化碳浓度和温度如何影响光合作用速率。',
    en: 'Understand the raw materials, conditions, site and products of photosynthesis, and investigate how light intensity, carbon dioxide concentration and temperature affect its rate.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch3', 'pep-bio-s1/ch5'],
    igcse: ['0610/6'],
  },
  keywords: {
    zh: ['光合作用', '叶绿体', '叶绿素', '光照强度', '二氧化碳浓度', '温度', '限制因素', '光饱和点'],
    en: ['photosynthesis', 'chloroplast', 'chlorophyll', 'light intensity', 'carbon dioxide concentration', 'temperature', 'limiting factor', 'light saturation'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '光合作用的概念与表达式' },
      {
        type: 'paragraph',
        text: '绿色植物通过叶绿体，利用光能，把二氧化碳和水转化成储存着能量的有机物（如淀粉），并且释放出氧气的过程，叫做光合作用。叶绿体是光合作用的场所，叶绿素是吸收光能的色素，光是光合作用的条件。',
      },
      {
        type: 'formula',
        latex: '6\\mathrm{CO_2} + 6\\mathrm{H_2O} \\xrightarrow[\\text{叶绿体}]{\\text{光能}} \\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2}',
        caption: '光合作用的总反应式',
      },
      {
        type: 'paragraph',
        text: '验证光合作用的主要实验：绿叶在光下制造淀粉（碘液变蓝，说明产物是淀粉、光是必要条件）；金鱼藻在光下释放气泡，气体能使带火星的卫生香复燃，证明产物是氧气。',
      },
      { type: 'heading', text: '影响光合作用速率的因素' },
      {
        type: 'paragraph',
        text: '光照强度、二氧化碳浓度和温度是影响光合作用速率的三大因素。在一定范围内，光合速率随光照强度、二氧化碳浓度的增大而增大；达到一定程度后，即使该因素继续增强，光合速率也不再增大，即达到饱和。',
      },
      {
        type: 'formula',
        latex: 'P = \\min\\!\\left(\\dfrac{L}{L + K_L},\\ \\dfrac{C}{C + K_C}\\right) f(T)',
        caption: '限制因子模型：L 为光照强度，C 为 CO₂ 浓度，f(T) 为温度系数',
      },
      {
        type: 'list',
        items: [
          '光照强度：在一定范围内光合速率随光照增强而增大；达到光饱和点后，限制因素转为二氧化碳浓度或温度。',
          '二氧化碳浓度：二氧化碳是光合作用的原料，适当增加 CO₂ 浓度（如温室“气肥”）可提高光合速率。',
          '温度：温度通过影响酶的活性起作用，在适宜温度（约 25–30 °C）时光合速率最高；温度过高，酶活性下降，光合速率明显降低。',
          '限制因素原理：某一时刻光合速率由最短缺的那个因素决定，只有改善该因素才能提高产量。',
        ],
      },
      { type: 'heading', text: '光合作用原理在农业生产上的应用' },
      {
        type: 'paragraph',
        text: '合理密植、间作套种能充分利用光能；温室大棚中增施二氧化碳（气肥）、延长光照时间、控制昼夜温差，都能提高光合产量、增加有机物积累。',
      },
    ],
    en: [
      { type: 'heading', text: 'The process of photosynthesis' },
      {
        type: 'paragraph',
        text: 'Photosynthesis is the process by which green plants use light energy to convert carbon dioxide and water into glucose and oxygen inside chloroplasts. Chloroplasts are the site of photosynthesis, chlorophyll is the pigment that absorbs light, and light provides the energy needed.',
      },
      {
        type: 'formula',
        latex: '6\\mathrm{CO_2} + 6\\mathrm{H_2O} \\xrightarrow[\\text{chloroplast}]{\\text{light energy}} \\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2}',
        caption: 'Word-balanced equation for photosynthesis',
      },
      {
        type: 'paragraph',
        text: 'Key evidence experiments: a destarched leaf exposed to light tests positive for starch with iodine solution (turning blue-black), showing starch is a product and light is necessary; pondweed in light releases bubbles of a gas that relights a glowing splint, proving oxygen is produced.',
      },
      { type: 'heading', text: 'Factors affecting the rate of photosynthesis' },
      {
        type: 'paragraph',
        text: 'Light intensity, carbon dioxide concentration and temperature are the three main factors. Within limits, the rate rises as light intensity or carbon dioxide concentration increases; beyond a certain point the rate levels off — the factor is no longer limiting and saturation is reached.',
      },
      {
        type: 'formula',
        latex: 'P = \\min\\!\\left(\\dfrac{L}{L + K_L},\\ \\dfrac{C}{C + K_C}\\right) f(T)',
        caption: 'Limiting-factor model: L is light intensity, C is CO₂ level, f(T) is the temperature factor',
      },
      {
        type: 'list',
        items: [
          'Light intensity: the rate increases with light up to the light saturation point, after which CO₂ or temperature becomes limiting.',
          'Carbon dioxide concentration: CO₂ is a raw material; enriching greenhouse air with CO₂ raises the rate of photosynthesis.',
          'Temperature: it acts through enzyme activity — the rate peaks at the optimum (about 25–30 °C) and falls sharply at high temperatures as enzymes denature.',
          'Limiting factor principle: at any moment the rate is set by the factor in shortest supply; only improving that factor raises the rate.',
        ],
      },
      { type: 'heading', text: 'Applications in agriculture' },
      {
        type: 'paragraph',
        text: 'Optimal planting density and intercropping make full use of light; in greenhouses, adding CO₂, extending the photoperiod and controlling the day–night temperature difference all increase photosynthetic yield and organic matter accumulation.',
      },
    ],
  },
  simulation: {
    renderer: 'photosynthesis-rate',
    params: [
      {
        key: 'lightIntensity',
        label: { zh: '光照强度', en: 'Light intensity' },
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 50,
        unit: '%',
      },
      {
        key: 'co2Level',
        label: { zh: '二氧化碳浓度', en: 'CO₂ concentration' },
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 50,
      },
      {
        key: 'temperature',
        label: { zh: '温度', en: 'Temperature' },
        min: 0,
        max: 45,
        step: 1,
        defaultValue: 25,
        unit: '°C',
      },
    ],
    liveFormulas: [
      {
        id: 'limiting-factor-model',
        latex: 'P = \\min\\!\\left(\\dfrac{L}{L + 20},\\ \\dfrac{C}{C + 20}\\right) f(T)',
        substitute: (p) =>
          `P = \\min\\!\\left(\\dfrac{${p.lightIntensity}}{${p.lightIntensity} + 20},\\ \\dfrac{${p.co2Level}}{${p.co2Level} + 20}\\right) f(${p.temperature})`,
      },
    ],
  },
  presets: [
    {
      id: 'cloudy-weak-light',
      name: { zh: '阴天弱光', en: 'Overcast, dim light' },
      description: {
        zh: '光照强度只有 15%，光照成为限制因素，光合速率明显偏低。',
        en: 'Light intensity is only 15%, so light becomes the limiting factor and the rate drops noticeably.',
      },
      params: { lightIntensity: 15, co2Level: 50, temperature: 25 },
    },
    {
      id: 'suitable-conditions',
      name: { zh: '适宜条件', en: 'Suitable conditions' },
      description: {
        zh: '光照、二氧化碳充足，温度 25 °C 接近最适温度，光合速率接近最大。',
        en: 'Abundant light and CO₂ with a near-optimum 25 °C give a near-maximal rate.',
      },
      params: { lightIntensity: 70, co2Level: 70, temperature: 25 },
    },
    {
      id: 'heat-stress',
      name: { zh: '高温胁迫', en: 'High-temperature stress' },
      description: {
        zh: '温度升至 42 °C，酶活性下降，即使光照和 CO₂ 充足，光合速率仍大幅下降。',
        en: 'At 42 °C enzyme activity falls; even with ample light and CO₂ the rate drops sharply.',
      },
      params: { lightIntensity: 50, co2Level: 50, temperature: 42 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '在适宜温度下，大棚蔬菜种植中增施二氧化碳能够提高产量，其原因是（　）',
        en: 'At a suitable temperature, adding carbon dioxide in a greenhouse increases vegetable yield because (　)',
      },
      options: {
        zh: [
          '二氧化碳是光合作用的原料，增加其浓度可提高光合速率',
          '二氧化碳能促进植物的呼吸作用',
          '二氧化碳能杀死害虫，减少虫害',
          '二氧化碳能提高大棚内的温度',
        ],
        en: [
          'carbon dioxide is a raw material of photosynthesis, so raising its concentration increases the rate',
          'carbon dioxide promotes respiration in plants',
          'carbon dioxide kills pests and reduces insect damage',
          'carbon dioxide raises the temperature inside the greenhouse',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: 'CO₂ 是光合作用的原料，在光照、温度适宜时，CO₂ 浓度往往是限制因素，增施 CO₂ 可提高光合速率从而增产。B 错：呼吸作用消耗有机物，增强呼吸反而减产；C、D 与增产的生理机制无关。',
        en: 'CO₂ is a raw material; with light and temperature adequate it is often the limiting factor, so adding CO₂ raises the photosynthetic rate and yield. B is wrong: respiration consumes organic matter, so more respiration reduces yield; C and D are not the physiological mechanism.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '在一定范围内提高光照强度，光合速率随之增大；光照继续增强时速率不再增大。此时限制光合速率的因素最可能是（　）',
        en: 'Within a range, raising light intensity raises the rate of photosynthesis; beyond that the rate levels off. The factor most likely limiting the rate now is (　)',
      },
      options: {
        zh: ['光照强度', '二氧化碳浓度或温度', '水分含量', '氧气的浓度'],
        en: ['light intensity', 'carbon dioxide concentration or temperature', 'water content', 'oxygen concentration'],
      },
      answerIndex: 1,
      explanation: {
        zh: '速率不再随光照增强而增大，说明光照已经饱和，不再是限制因素，故 A 错；此时限制因素转为 CO₂ 浓度或温度。氧气是光合作用的产物而非原料，故 D 错；一般田间条件下水分不是此时最直接的限制因素。',
        en: 'Since the rate no longer responds to light, light is saturated and no longer limiting, so A is wrong; the limiting factor has shifted to CO₂ concentration or temperature. Oxygen is a product, not a raw material (D wrong); water is not the immediate limiting factor here.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列关于光合作用场所和条件的叙述，正确的是（　）',
        en: 'Which statement about the site and conditions of photosynthesis is correct?',
      },
      options: {
        zh: [
          '所有植物细胞都能进行光合作用',
          '光合作用的场所是线粒体',
          '叶绿素能够吸收光能，光合作用必须在光下才能进行',
          '没有二氧化碳时植物仍能通过光合作用制造有机物',
        ],
        en: [
          'All plant cells can carry out photosynthesis',
          'The site of photosynthesis is the mitochondrion',
          'Chlorophyll absorbs light energy, and photosynthesis can only proceed in the light',
          'Plants can still make organic matter by photosynthesis without carbon dioxide',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '只有含叶绿体的绿色部分细胞才能进行光合作用，根细胞等不能，故 A 错；光合作用的场所是叶绿体，线粒体是呼吸作用的主要场所，故 B 错；二氧化碳是原料，缺少时不能制造有机物，故 D 错。',
        en: 'Only cells containing chloroplasts (green parts) photosynthesise — root cells cannot, so A is wrong; the site is the chloroplast, while mitochondria are the main site of respiration (B wrong); CO₂ is a raw material, without which no organic matter is made (D wrong).',
      },
    },
  ],
  kernels: {
    photosynthesis: photosynthesisKernel,
  },
  expectedResults: [
    {
      id: 'probe-cloudy-weak-light',
      description: {
        zh: '阴天弱光：光照 15%、CO₂ 50、25 °C，光照为限制因素（limiting = 0），rate ≈ 0.4081',
        en: 'Overcast dim light: 15% light, CO₂ 50, 25 °C — light is limiting (limiting = 0), rate ≈ 0.4081',
      },
      kernel: 'photosynthesis',
      input: { lightIntensity: 15, co2Level: 50, temperature: 25 },
      expected: {
        rate: 0.408147771383647,
        limiting: 0,
        tempFactor: 0.9523447998951764,
        lightSat: 0.42857142857142855,
        co2Sat: 0.7142857142857143,
      },
    },
    {
      id: 'probe-suitable-conditions',
      description: {
        zh: '适宜条件：光照 70%、CO₂ 70、25 °C，光照与 CO₂ 共同限制（limiting = 2），rate ≈ 0.7407',
        en: 'Suitable conditions: 70% light, CO₂ 70, 25 °C — co-limited (limiting = 2), rate ≈ 0.7407',
      },
      kernel: 'photosynthesis',
      input: { lightIntensity: 70, co2Level: 70, temperature: 25 },
      expected: {
        rate: 0.7407126221406928,
        limiting: 2,
        tempFactor: 0.9523447998951764,
        lightSat: 0.7777777777777778,
        co2Sat: 0.7777777777777778,
      },
    },
    {
      id: 'probe-heat-stress',
      description: {
        zh: '高温胁迫：光照 50%、CO₂ 50、42 °C，温度系数降至约 0.1935，rate ≈ 0.1382',
        en: 'Heat stress: 50% light, CO₂ 50, 42 °C — temperature factor falls to ≈ 0.1935, rate ≈ 0.1382',
      },
      kernel: 'photosynthesis',
      input: { lightIntensity: 50, co2Level: 50, temperature: 42 },
      expected: {
        rate: 0.1382004154336048,
        limiting: 2,
        tempFactor: 0.19348058160704673,
        lightSat: 0.7142857142857143,
        co2Sat: 0.7142857142857143,
      },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '一棵小树苗长成参天大树，多出来的几百公斤是从哪来的？不是土里“吃”出来的，主要是叶子从空气里“抓”来的。这一节我们就聊聊这个神奇的过程——光合作用，以及什么条件能让它跑得更快。',
          en: 'A tiny sapling grows into a massive tree — where did all those extra kilograms come from? Not from the soil, mostly; the leaves pulled it out of thin air. In this lesson we’ll look at that remarkable process, photosynthesis, and what conditions make it run faster.',
        },
      },
      {
        id: 'concept-equation',
        kind: 'concept',
        text: {
          zh: '先把光合作用的“配方”记住：二氧化碳加水，在光照下、叶绿体里，变成葡萄糖和氧气。叶绿体是车间，叶绿素是吸收光能的“天线”，光是动力来源。两个经典实验可以作证：绿叶照光后用碘液一测变蓝，说明造出了淀粉；金鱼藻在光下冒的气泡能让带火星的卫生香复燃，那就是氧气。',
          en: 'First, memorise the recipe: carbon dioxide plus water, with light energy inside the chloroplast, becomes glucose and oxygen. The chloroplast is the workshop, chlorophyll is the antenna that captures light, and light is the power source. Two classic experiments back this up: a leaf that has been in the light turns blue-black with iodine, showing starch was made; and the bubbles streaming off pondweed in the light relight a glowing splint — that’s oxygen.',
        },
      },
      {
        id: 'concept-limiting-factors',
        kind: 'concept',
        text: {
          zh: '那光合速率由谁说了算？主要看三个因素：光照强度、二氧化碳浓度和温度。光照和 CO₂ 是“越多越快”，但都有天花板，加到一定程度就饱和了；温度则是通过影响酶的活性起作用，大约 25 到 30 度最合适，太高了酶失活，速率直接跳水。记住一个原则：某一时刻的速率由最短缺的那个因素决定，这就叫限制因素原理。',
          en: 'So what controls the rate? Three main factors: light intensity, carbon dioxide concentration, and temperature. More light or more CO₂ means a faster rate, but both have a ceiling — beyond a point the rate saturates and levels off. Temperature works through enzyme activity: the sweet spot is around 25 to 30 degrees, and if it gets too hot the enzymes denature and the rate falls off a cliff. Keep one principle in mind: at any moment the rate is set by whichever factor is in shortest supply — that’s the law of limiting factors.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '来动手验证一下吧！在下面的仿真里，固定其他条件，慢慢拉高光照强度，看曲线怎么先升后平——平了说明光照饱和，该轮到 CO₂ 当家了。再把温度拉到 40 度以上，看看酶失活后速率掉得多狠。想省事就直接试三个预设：“阴天弱光”“适宜条件”和“高温胁迫”，对比一下速率差多少。',
          en: 'Time to test it yourself! In the simulation below, hold everything else steady and slowly raise the light intensity — watch the curve climb and then flatten out. Flat means light is saturated and CO₂ is now calling the shots. Then push the temperature above 40 degrees and see how hard the rate crashes when the enzymes give up. If you’d rather skip the sliders, just run the three presets — “Overcast, dim light”, “Suitable conditions” and “High-temperature stress” — and compare how much the rate changes.',
        },
      },
      {
        id: 'concept-applications',
        kind: 'concept',
        text: {
          zh: '这套原理在农业上可是真金白银：合理密植、间作套种，是为了让每片叶子都不浪费阳光；温室大棚里增施二氧化碳当“气肥”，就是盯着限制因素下手的；控制昼夜温差，白天高光合、晚上低呼吸，有机物就攒下来了。你看，每一条措施背后都是刚才讲的原理。',
          en: 'Farmers turn this science into real money. Planting at the right density and intercropping make sure no leaf wastes its sunlight; pumping extra CO₂ into a greenhouse as an “aerial fertiliser” is a direct attack on the limiting factor; and managing the day–night temperature gap — strong photosynthesis by day, low respiration at night — banks more organic matter. Every one of these tricks is just the principles we’ve covered, put to work.',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '收个尾：光合作用是植物利用光能，把二氧化碳和水在叶绿体里合成有机物、释放氧气的过程。光照、CO₂、温度三大因素各有影响规律，而速率永远被最短缺的那个因素卡住。抓住“限制因素”这个关键词，无论是分析曲线还是解答农业应用题，都不会跑偏。',
          en: 'Let’s wrap up: photosynthesis is how plants use light energy to turn carbon dioxide and water into organic matter inside chloroplasts, releasing oxygen along the way. Light, CO₂ and temperature each shape the rate in their own way, and the rate is always throttled by whichever factor is scarcest. Hold on to that “limiting factor” idea, and you’ll handle both the graphs and the agriculture questions with confidence.',
        },
      },
    ],
  },
};
