import type { KnowledgePoint } from '../types';

export const chemSolution002: KnowledgePoint = {
  id: 'chem-solution-002',
  subject: 'chemistry',
  title: { zh: '溶质的质量分数与溶液配制', en: 'Mass Percentage of Solute and Preparing Solutions' },
  summary: {
    zh: '掌握溶质质量分数的计算公式与溶液稀释规律，学会按"计算—称量—量取—溶解"的步骤配制一定溶质质量分数的溶液，并能分析操作误差对结果的影响。',
    en: 'Master the mass-percentage formula and the dilution rule, prepare a solution of a given mass percentage by the calculate–weigh–measure–dissolve sequence, and analyse how operational errors affect the result.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9b/ch2'],
    igcse: ['0620/3.3', '0620/12.1'],
  },
  keywords: {
    zh: ['溶质的质量分数', '溶液配制', '稀释', '托盘天平', '量筒', '误差分析'],
    en: ['mass percentage', 'concentration', 'dilution', 'preparing solutions', 'balance', 'measuring cylinder', 'error analysis'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '理解溶质的质量分数的含义，能进行溶质、溶剂、溶液质量之间的换算。',
          '会用"稀释前后溶质质量不变"进行溶液稀释的计算。',
          '说出配制一定溶质质量分数溶液的步骤和所需仪器。',
          '能分析称量、量取等操作不当对所配溶液溶质质量分数的影响。',
        ],
      },
      { type: 'heading', text: '溶质的质量分数' },
      {
        type: 'paragraph',
        text: '溶质的质量分数是溶质质量与溶液质量之比，常用百分数表示，它是表示溶液浓度的一种方法。注意分母是"溶液"的质量，而不是溶剂的质量：溶液质量 = 溶质质量 + 溶剂质量。',
      },
      { type: 'formula', latex: 'w = \\dfrac{m_{\\text{溶质}}}{m_{\\text{溶液}}} \\times 100\\% = \\dfrac{m_{\\text{溶质}}}{m_{\\text{溶质}} + m_{\\text{溶剂}}} \\times 100\\%', caption: '溶质的质量分数（w 为百分数）' },
      {
        type: 'list',
        items: [
          '已知溶液质量和溶质质量分数，可求溶质质量：m(溶质) = m(溶液) × w。',
          '生理盐水是溶质质量分数为 0.9% 的氯化钠溶液；农业上常用 16% 的氯化钠溶液选种。',
          '对饱和溶液，某温度下 w = 溶解度 /(100 g + 溶解度) × 100%。',
        ],
      },
      { type: 'heading', text: '溶液的稀释' },
      {
        type: 'paragraph',
        text: '稀释是向溶液中加入溶剂，溶质的质量在稀释前后保持不变。这是稀释计算的核心依据：浓溶液中溶质的质量等于稀溶液中溶质的质量。加水的质量等于稀溶液质量减去浓溶液质量。',
      },
      { type: 'formula', latex: 'm_{\\text{浓}} \\times w_{\\text{浓}} = m_{\\text{稀}} \\times w_{\\text{稀}}', caption: '稀释前后溶质质量不变' },
      { type: 'heading', text: '配制一定溶质质量分数的溶液' },
      {
        type: 'paragraph',
        text: '以配制 50 g 溶质质量分数为 6% 的氯化钠溶液为例：需要氯化钠 3 g、水 47 g（即 47 mL）。整个实验可概括为四个步骤，每步都有规范的操作要求。',
      },
      {
        type: 'list',
        items: [
          '计算：算出所需溶质和溶剂的质量（水的体积 = 质量 ÷ 密度，水的密度取 1 g/cm³）。',
          '称量：用托盘天平称取固体溶质（左物右码，两盘各垫同样的纸）。',
          '量取：用量筒量取水，读数时视线与量筒内液体凹液面的最低处保持水平。',
          '溶解：在烧杯中用玻璃棒搅拌，加速溶解；玻璃棒的作用只是搅拌，不能改变溶解度。',
          '装瓶：把配好的溶液装入试剂瓶，贴上标签（注明名称和溶质质量分数）。',
        ],
      },
      { type: 'heading', text: '误差分析' },
      {
        type: 'paragraph',
        text: '分析误差的钥匙是公式：w 由溶质质量和溶液质量决定。溶质偏多或溶剂偏少，w 偏大；溶质偏少或溶剂偏多，w 偏小。把每种错误操作先翻译成"溶质变了多少、溶剂变了多少"，结论就一目了然。',
      },
      {
        type: 'list',
        items: [
          '称量时药品与砝码放反（且使用了游码）：实际称得的溶质偏少 → w 偏小。',
          '量取水时仰视读数：实际量取的水偏多 → w 偏小；俯视读数则水偏少 → w 偏大。',
          '烧杯内壁有水珠（不干燥）：溶剂偏多 → w 偏小。',
          '转移溶液时有少量洒落：溶液已配匀，洒出的部分浓度相同 → w 不变（只是量变少）。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'mass percentage of solute（溶质的质量分数）：溶质质量与溶液质量之比，w = m(溶质)/m(溶液) × 100%。',
          'dilution（稀释）：向溶液中加入溶剂使浓度变小的过程，稀释前后溶质质量不变。',
          'balance（托盘天平）：称量固体药品质量的仪器，精确到 0.1 g，左物右码。',
          'measuring cylinder（量筒）：量取液体体积的仪器，读数时视线与凹液面最低处相平。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Understand the mass percentage of a solute and convert between masses of solute, solvent and solution.',
          'Use the rule "the mass of solute stays the same on dilution" in dilution calculations.',
          'State the steps and apparatus needed to prepare a solution of a given mass percentage.',
          'Analyse how mistakes in weighing and measuring affect the final mass percentage.',
        ],
      },
      { type: 'heading', text: 'Mass percentage of solute' },
      {
        type: 'paragraph',
        text: 'The mass percentage of a solute is the ratio of the mass of solute to the mass of the solution, usually expressed as a percentage. It is one way of stating concentration. Note that the denominator is the mass of the whole solution, not of the solvent: mass of solution = mass of solute + mass of solvent.',
      },
      { type: 'formula', latex: 'w = \\dfrac{m_{\\text{solute}}}{m_{\\text{solution}}} \\times 100\\%', caption: 'Mass percentage of solute (w as a percentage)' },
      {
        type: 'list',
        items: [
          'From the mass of solution and its percentage, find the solute mass: m(solute) = m(solution) × w.',
          'Physiological saline is a 0.9% sodium chloride solution; farmers use 16% sodium chloride solution to select seeds.',
          'For a saturated solution at a given temperature, w = solubility / (100 g + solubility) × 100%.',
        ],
      },
      { type: 'heading', text: 'Diluting a solution' },
      {
        type: 'paragraph',
        text: 'Dilution means adding more solvent to a solution; the mass of solute is unchanged before and after dilution. This is the key to every dilution calculation: the mass of solute in the concentrated solution equals that in the dilute one. The mass of water added is the dilute solution mass minus the concentrated solution mass.',
      },
      { type: 'formula', latex: 'm_{\\text{conc}} \\times w_{\\text{conc}} = m_{\\text{dil}} \\times w_{\\text{dil}}', caption: 'Conservation of solute mass on dilution' },
      { type: 'heading', text: 'Preparing a solution of given mass percentage' },
      {
        type: 'paragraph',
        text: 'Take preparing 50 g of a 6% sodium chloride solution as an example: you need 3 g of sodium chloride and 47 g of water (47 mL). The whole experiment has four steps, each with its own standard technique.',
      },
      {
        type: 'list',
        items: [
          'Calculate: work out the masses of solute and solvent (volume of water = mass ÷ density; the density of water is 1 g/cm³).',
          'Weigh: weigh the solid solute on a balance (substance on the left pan, weights on the right, same paper on both pans).',
          'Measure: measure the water with a measuring cylinder, reading with your eye level with the bottom of the meniscus.',
          'Dissolve: stir with a glass rod in a beaker to speed up dissolving; the rod only stirs — it cannot change solubility.',
          'Bottle: transfer the solution to a reagent bottle and label it with the name and mass percentage.',
        ],
      },
      { type: 'heading', text: 'Error analysis' },
      {
        type: 'paragraph',
        text: 'The key to error analysis is the formula: w depends on the mass of solute and the mass of solution. More solute or less solvent makes w too large; less solute or more solvent makes w too small. Translate each faulty operation into "how the solute and solvent changed" and the conclusion follows.',
      },
      {
        type: 'list',
        items: [
          'Substance and weights swapped (with the sliding weight used): less solute is actually weighed → w too small.',
          'Reading the measuring cylinder from below (looking up): too much water is measured → w too small; reading from above gives too little water → w too large.',
          'A wet beaker (not dried): extra water means more solvent → w too small.',
          'Spilling a little when bottling: the solution is already uniform, so what spills has the same concentration → w unchanged (only less solution).',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'mass percentage of solute (溶质的质量分数): The ratio of solute mass to solution mass, w = m(solute)/m(solution) × 100%.',
          'dilution (稀释): Adding solvent to make a solution less concentrated; the mass of solute stays the same.',
          'balance (托盘天平): Instrument for weighing solids, reading to 0.1 g, substance on the left and weights on the right.',
          'measuring cylinder (量筒): Instrument for measuring liquid volumes, read at the bottom of the meniscus.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '把 10 g 氯化钠完全溶解在 90 g 水中，所得溶液的溶质质量分数是（　）',
        en: '10 g of sodium chloride is dissolved completely in 90 g of water. What is the mass percentage of solute in the solution?',
      },
      options: {
        zh: ['9%', '10%', '11.1%', '90%'],
        en: ['9%', '10%', '11.1%', '90%'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'w = m(溶质)/m(溶液) × 100% = 10 g ÷ (10 g + 90 g) × 100% = 10%。选 11.1% 是错把分母当成了溶剂的质量（10/90）；公式的分母永远是"溶液"的质量。',
        en: 'w = m(solute)/m(solution) × 100% = 10 g ÷ (10 g + 90 g) × 100% = 10%. Choosing 11.1% uses the solvent mass (10/90) as the denominator by mistake; the denominator is always the mass of the whole solution.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '要把 50 g 溶质质量分数为 20% 的氯化钠溶液稀释成 10% 的溶液，需要加水的质量是（　）',
        en: 'To dilute 50 g of a 20% sodium chloride solution to 10%, what mass of water must be added?',
      },
      options: {
        zh: ['25 g', '50 g', '100 g', '200 g'],
        en: ['25 g', '50 g', '100 g', '200 g'],
      },
      answerIndex: 1,
      explanation: {
        zh: '稀释前后溶质质量不变：50 g × 20% = 10 g，配成 10% 的溶液总质量 = 10 g ÷ 10% = 100 g，需加水 100 g − 50 g = 50 g。选 100 g 是忘了减去原来浓溶液的质量；选 25 g 是误用了 20%÷10% 的倍数关系直接乘原溶液质量后再处理。',
        en: 'The solute mass is unchanged: 50 g × 20% = 10 g. A 10% solution containing 10 g of solute has a total mass of 10 g ÷ 10% = 100 g, so add 100 g − 50 g = 50 g of water. Choosing 100 g forgets to subtract the original solution; 25 g comes from misusing the 20% ÷ 10% ratio.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '用固体氯化钠配制一定溶质质量分数的溶液时，下列操作中会使所配溶液的溶质质量分数偏小的是（　）',
        en: 'When preparing a sodium chloride solution of a given mass percentage from solid salt, which operation makes the mass percentage too small?',
      },
      options: {
        zh: [
          '量取水时俯视量筒读数',
          '称量好的氯化钠向烧杯转移时少量撒落',
          '配好的溶液装入试剂瓶时洒出少量',
          '溶解时用玻璃棒搅拌',
        ],
        en: [
          'Reading the measuring cylinder from above when measuring the water',
          'Spilling a little of the weighed salt while transferring it to the beaker',
          'Spilling a little of the finished solution while bottling it',
          'Stirring with a glass rod while dissolving',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '溶质撒落使实际溶解的溶质偏少，w 偏小，B 正确。俯视读数量取的水偏少，w 偏大；装瓶时洒落的是已配匀的溶液，浓度不变；玻璃棒搅拌只是加速溶解，不影响溶质质量分数。',
        en: 'Spilled salt means less solute actually dissolves, so w is too small — B is correct. Reading from above measures too little water, making w too large; spilling the finished uniform solution does not change its concentration; stirring only speeds up dissolving and does not affect the percentage.',
      },
    },
  ],
  examPractice: [
    {
      id: 'chem-solution-002-cp1',
      syllabus: ['0620/3.3.1'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'A student dissolves 4.0 g of sodium hydroxide in distilled water and makes the solution up to 250 cm³. Calculate the concentration of the solution in g / dm³.',
      markScheme: [
        { text: '250 cm³ = 0.250 dm³ and uses concentration = mass / volume', marks: 1, alternatives: ['4.0 / 0.250'] },
        { text: '16 g / dm³', marks: 1 },
      ],
      examinerNote: {
        zh: '最常见的错误是直接用 4.0 ÷ 250 得到 0.016 g/cm³ 却没有换算单位。先把 cm³ 换算成 dm³（除以 1000），再代入公式，单位才不会错。',
        en: 'The classic mistake is computing 4.0 ÷ 250 and quoting 0.016 without converting units. Convert cm³ to dm³ first (divide by 1000), then apply the formula, and the units take care of themselves.',
      },
    },
  ],
  related: ['chem-solution-001', 'chem-stoich-004', 'igcse-0620-3-3-moles'],
};
