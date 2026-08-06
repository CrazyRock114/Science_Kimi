import type { KnowledgePoint } from '../types';

export const phyEnergy001: KnowledgePoint = {
  id: 'phy-energy-001',
  subject: 'physics',
  title: { zh: '能源与可持续发展', en: 'Energy Resources and Sustainable Development' },
  summary: {
    zh: '了解能源的分类（一次/二次能源、可再生/不可再生能源），认识核能与太阳能的利用方式，理解能量守恒与能量转移转化的方向性，树立可持续发展的能源观。',
    en: 'Classify energy resources (primary/secondary, renewable/non-renewable), learn how nuclear and solar energy are harnessed, understand energy conservation and the directionality of energy transfers, and build a view of sustainable development.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch10'],
    igcse: ['0625/1.7.3'],
  },
  keywords: {
    zh: ['一次能源', '二次能源', '可再生能源', '不可再生能源', '核能', '核裂变', '核聚变', '太阳能', '能量守恒', '可持续发展'],
    en: ['primary energy source', 'secondary energy source', 'renewable', 'non-renewable', 'nuclear energy', 'fission', 'fusion', 'solar energy', 'conservation of energy', 'sustainable development'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '能从不同角度对能源分类：一次能源与二次能源，可再生能源与不可再生能源。',
          '知道核能的两种获取途径——裂变与聚变，了解核电站的工作原理。',
          '了解太阳能的特点及直接利用的两种方式（光热转换、光电转换）。',
          '理解能量守恒定律，知道能量的转移和转化具有方向性，认识节约能源与可持续发展的必要性。',
        ],
      },
      { type: 'heading', text: '能源的分类' },
      {
        type: 'paragraph',
        text: '可以从自然界直接获取的能源叫一次能源，如化石能源（煤、石油、天然气）、风能、水能、太阳能、地热能、核能等；无法从自然界直接获取、必须通过消耗一次能源才能得到的能源叫二次能源，如电能、汽油、柴油等。在一次能源中，可以在自然界里源源不断地得到的叫可再生能源，如风能、水能、太阳能；一旦消耗就很难再生的叫不可再生能源，如化石能源和核能。化石能源是千百万年前埋在地下的动植物经过漫长地质年代形成的，是当今世界的主要能源。',
      },
      { type: 'heading', text: '核能' },
      {
        type: 'paragraph',
        text: '原子核分裂或聚合时，会释放出惊人的能量，这就是核能。获取核能有两条途径：重原子核分裂成较轻的核——裂变，以及轻原子核结合成较重的核——聚变。用中子轰击铀 235 原子核，铀核裂变时放出能量和中子，中子又轰击其他铀核，使裂变持续进行，这就是链式反应。核电站利用可控的链式反应发电，能量转化过程是：核能 → 内能 → 机械能 → 电能；原子弹是对不可控链式反应的应用。核聚变也叫热核反应，氢弹利用的就是聚变；太阳内部每时每刻都在发生聚变。核废料具有放射性，必须妥善处理。',
      },
      { type: 'heading', text: '太阳能' },
      {
        type: 'paragraph',
        text: '太阳是巨大的“核能火炉”，其能量来自内部的氢核聚变。太阳能取之不尽、清洁无污染。人类直接利用太阳能的方式主要有两种：一是用集热器等设备把水等物质加热（光热转换，太阳能 → 内能），如太阳能热水器；二是用太阳能电池把太阳能转化为电能（光电转换），广泛用于卫星、路灯、计算器等。除核能、地热能等少数能源外，地球上的风能、水能、化石能源等大都间接来自太阳能。',
      },
      { type: 'heading', text: '能量守恒与转移转化的方向性' },
      {
        type: 'paragraph',
        text: '能量守恒定律：能量既不会凭空消灭，也不会凭空产生，它只会从一种形式转化为其他形式，或者从一个物体转移到其他物体，而在转化和转移的过程中，能量的总量保持不变。但能量的转移和转化具有方向性：热量只能自发地从高温物体传向低温物体；汽车制动时动能转化为内能散失到空气中，这些内能无法再自动地收集起来驱动汽车。因此，可利用的能源是有限的，能量守恒并不意味着能源“用之不竭”，我们仍需节约能源。',
      },
      { type: 'heading', text: '能源与可持续发展' },
      {
        type: 'paragraph',
        text: '能源的利用要考虑可持续发展：既要满足当代人的需要，又不损害后代人满足其需要的能力。一方面要提高能源利用效率、节约能源；另一方面要大力发展太阳能、风能、水能等清洁的可再生能源，减少对化石能源的依赖，降低环境污染和温室气体排放。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'primary / secondary energy source（一次/二次能源）：可直接从自然界获取的能源 / 由一次能源加工转换得到的能源（如电能）。',
          'renewable / non-renewable（可再生/不可再生能源）：在自然界可不断得到补充的能源 / 消耗后短期内无法再生的能源。',
          'fission（核裂变）：重核分裂为较轻的核并释放能量，核电站利用可控裂变的链式反应。',
          'fusion（核聚变）：轻核结合为较重的核并释放能量，是太阳能量的来源。',
          'conservation of energy（能量守恒）：能量总量在转化与转移中保持不变，但过程具有方向性。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Classify energy resources: primary vs secondary sources, renewable vs non-renewable.',
          'Know the two ways of releasing nuclear energy — fission and fusion — and how a nuclear power station works.',
          'Describe solar energy and its two direct uses: heating (solar thermal) and electricity (photovoltaic).',
          'Understand the conservation of energy and the directionality of energy transfers, and the need to save energy for sustainable development.',
        ],
      },
      { type: 'heading', text: 'Classifying energy resources' },
      {
        type: 'paragraph',
        text: 'Sources obtained directly from nature are primary sources: fossil fuels (coal, oil, natural gas), wind, hydro, solar, geothermal and nuclear energy. Sources that must be produced from primary ones are secondary sources, such as electricity, petrol and diesel. Among the primary sources, those that nature replenishes continuously are renewable — wind, hydro and solar; those used up far faster than they form are non-renewable — fossil fuels and nuclear fuels. Fossil fuels formed from organisms buried millions of years ago and remain the world’s main energy source today.',
      },
      { type: 'heading', text: 'Nuclear energy' },
      {
        type: 'paragraph',
        text: 'Huge amounts of energy are released when atomic nuclei split or join — nuclear energy. There are two routes: fission, in which a heavy nucleus splits into lighter ones, and fusion, in which light nuclei join. When a neutron strikes a uranium-235 nucleus, the fission releases energy plus more neutrons, which split further nuclei — a chain reaction. A nuclear power station uses a controlled chain reaction to generate electricity: nuclear → internal → mechanical → electrical energy; an atomic bomb is an uncontrolled chain reaction. Fusion, also called a thermonuclear reaction, powers the hydrogen bomb and the Sun itself. Nuclear waste is radioactive and must be handled with great care.',
      },
      { type: 'heading', text: 'Solar energy' },
      {
        type: 'paragraph',
        text: 'The Sun is a giant nuclear furnace powered by the fusion of hydrogen nuclei; solar energy is inexhaustible and clean. There are two direct ways of using it: collectors that heat water or other substances (solar-to-thermal, as in solar water heaters), and solar cells that convert sunlight into electricity (photovoltaic), used in satellites, street lamps and calculators. Apart from nuclear and geothermal energy, most of the Earth’s resources — wind, hydro and even fossil fuels — come indirectly from the Sun.',
      },
      { type: 'heading', text: 'Conservation of energy and its directionality' },
      {
        type: 'paragraph',
        text: 'The law of conservation of energy: energy can neither be created nor destroyed; it is only transferred between objects or converted from one form to another, and the total amount stays constant. But transfers have a direction: heat flows by itself only from hotter to colder bodies; when a car brakes, its kinetic energy becomes internal energy dissipated to the air, and that energy cannot gather itself back to drive the car. Usable energy is therefore limited — conservation does not mean “inexhaustible”, and we must use energy sparingly.',
      },
      { type: 'heading', text: 'Energy and sustainable development' },
      {
        type: 'paragraph',
        text: 'Energy use must be sustainable: meeting the needs of the present without compromising the ability of future generations to meet theirs. That means improving efficiency and saving energy on one hand, and vigorously developing clean, renewable sources — solar, wind and hydro — on the other, reducing our dependence on fossil fuels and cutting pollution and greenhouse-gas emissions.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'primary / secondary energy source (一次/二次能源): Obtained directly from nature / converted from a primary source, such as electricity.',
          'renewable / non-renewable (可再生/不可再生能源): Naturally replenished / used up faster than it can form.',
          'fission (核裂变): A heavy nucleus splitting into lighter nuclei, releasing energy; controlled chain reactions drive nuclear power stations.',
          'fusion (核聚变): Light nuclei joining to form a heavier one, releasing energy; the source of the Sun’s power.',
          'conservation of energy (能量守恒): Total energy stays constant through transfers and conversions, but the processes have a direction.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列能源中，属于可再生能源的是（　）',
        en: 'Which of the following is a renewable energy source?',
      },
      options: {
        zh: ['太阳能', '煤', '石油', '核能'],
        en: ['solar energy', 'coal', 'petroleum (oil)', 'nuclear energy'],
      },
      answerIndex: 0,
      explanation: {
        zh: '太阳能可以在自然界源源不断地得到，属于可再生能源。煤、石油是化石能源，千百万年才能形成，用一点少一点；核燃料（铀等）储量有限，同样属于不可再生能源。',
        en: 'Solar energy is continuously replenished by nature, so it is renewable. Coal and oil are fossil fuels formed over millions of years; uranium and other nuclear fuels exist in limited reserves — all non-renewable.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于能源的分类，下列说法正确的是（　）',
        en: 'Which statement about the classification of energy sources is correct?',
      },
      options: {
        zh: [
          '电能是一次能源',
          '风能、水能、太阳能都是可再生能源',
          '天然气是可再生能源',
          '化石能源可以从自然界源源不断地得到',
        ],
        en: [
          'electrical energy is a primary energy source',
          'wind, hydro and solar energy are all renewable',
          'natural gas is a renewable source',
          'fossil fuels are continuously replenished by nature',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '电能必须通过消耗一次能源（如煤、水能）转化得到，是二次能源，A 错；风能、水能、太阳能都能不断从自然界获得，B 正确；天然气是化石能源，不可再生，C 错；化石能源形成极其缓慢，消耗后难以再生，D 错。',
        en: 'Electricity must be produced from a primary source (coal, hydro…), so it is secondary (A wrong). Wind, hydro and solar are all replenished continuously (B correct). Natural gas is a fossil fuel and non-renewable (C wrong); fossil fuels form far too slowly to be replenished (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '能量守恒定律告诉我们能量不会凭空消失，但我们仍要节约能源，这是因为（　）',
        en: 'Energy is never destroyed, says the conservation law — yet we must still save energy, because',
      },
      options: {
        zh: [
          '能量在使用过程中总量会减少',
          '能量的转移和转化具有方向性，散失到环境中的能量无法再自动聚集起来利用',
          '地球上的能源总量在不断增加',
          '节约能源可以制造新的能量',
        ],
        en: [
          'the total amount of energy decreases during use',
          'energy transfers have a direction — energy dissipated to the environment cannot gather itself back for reuse',
          'the total energy on Earth keeps increasing',
          'saving energy creates new energy',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '能量守恒，总量不会减少（A 错），也不会增加（C 错）；但能量转移转化有方向性，化石能源燃烧后，能量以内能形式散失到环境中，无法自动回收再用，可用能源越来越少，所以要节约。能量不能被创造，D 错。',
        en: 'The total stays constant — it neither decreases (A) nor increases (C). But transfers are directional: once fuel energy is dissipated as internal energy in the surroundings, it cannot reconcentrate itself for use, so usable resources dwindle. Energy cannot be created (D wrong).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-solar-vs-nuclear',
      syllabus: ['0625/1.7.3.2'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 2,
      stem: 'State one advantage and one disadvantage of generating electricity using nuclear fission compared with using solar cells.',
      markScheme: [
        {
          text: 'Advantage: reliable output day and night / large power output / no greenhouse gases emitted while generating',
          marks: 1,
          alternatives: ['Not dependent on weather or daylight'],
        },
        {
          text: 'Disadvantage: radioactive waste must be stored safely / risk of accidents / high decommissioning cost / non-renewable fuel',
          marks: 1,
          alternatives: ['Produces hazardous radioactive waste'],
        },
      ],
      examinerNote: {
        zh: '“优点”和“缺点”必须相对太阳能电池而言且各一点。“更便宜”这类笼统说法不给分；放射性废物、安全风险和造价才是可给分的具体要点。',
        en: 'Give exactly one advantage and one disadvantage, relative to solar cells. Vague claims like “cheaper” earn nothing; radioactive waste, accident risk and cost are the creditable specifics.',
      },
    },
  ],
  related: ['phy-heat-engine-002', 'igcse-0625-1-7-energy', 'igcse-0625-5-1-atom-nucleus'],
};
