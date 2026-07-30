import { mendelKernel } from '../../simulations/kernels/mendel';
import type { KnowledgePoint } from '../types';

export const bioGenetics002: KnowledgePoint = {
  id: 'bio-genetics-002',
  subject: 'biology',
  title: { zh: '孟德尔分离定律', en: "Mendel's Law of Segregation" },
  summary: {
    zh: '通过豌豆杂交实验认识一对相对性状的遗传规律：杂合子自交后代表现 3:1 的性状分离比，测交后代为 1:1，并通过抽样模拟体会理论与统计的关系。',
    en: 'Explore the inheritance of a single pair of contrasting characteristics through Mendel’s pea experiments: a self-cross of heterozygotes gives a 3:1 phenotypic ratio and a test cross gives 1:1, with sampling simulations linking theory to statistics.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j8b/ch1', 'pep-bio-s2/ch1'],
    igcse: ['0610/17'],
  },
  keywords: {
    zh: ['分离定律', '相对性状', '显性性状', '隐性性状', '纯合子', '杂合子', '自交', '测交', '性状分离'],
    en: ['law of segregation', 'monohybrid inheritance', 'dominant allele', 'recessive allele', 'homozygous', 'heterozygous', 'genotype', 'phenotype', 'test cross'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '一对相对性状的杂交实验' },
      {
        type: 'paragraph',
        text: '孟德尔用纯种高茎豌豆与纯种矮茎豌豆杂交，子一代（F₁）全部表现为高茎；让 F₁ 自交，子二代（F₂）中高茎与矮茎的数量比接近 3:1。像高茎和矮茎这样，同种生物同一性状的不同表现类型，叫作相对性状。在 F₁ 中表现出来的性状叫显性性状，未表现出来的叫隐性性状。',
      },
      { type: 'formula', latex: 'P:\\ \\text{高茎} \\times \\text{矮茎} \\rightarrow F_1:\\ \\text{全部高茎} \\rightarrow F_2:\\ \\text{高茎} : \\text{矮茎} \\approx 3 : 1', caption: '孟德尔一对相对性状的杂交实验' },
      { type: 'heading', text: '对分离现象的解释' },
      {
        type: 'paragraph',
        text: '孟德尔认为：生物的性状由遗传因子（现称基因）控制；遗传因子在体细胞中成对存在；形成配子时，成对的遗传因子彼此分离，分别进入不同的配子；受精时雌雄配子随机结合。用 A 表示显性基因、a 表示隐性基因，F₁（Aa）产生 A、a 两种比例相等的配子，自交后代的基因型为 1/4 AA、1/2 Aa、1/4 aa，表现型之比为 3:1。',
      },
      { type: 'formula', latex: 'Aa \\times Aa \\rightarrow \\tfrac{1}{4}AA : \\tfrac{1}{2}Aa : \\tfrac{1}{4}aa', caption: '基因型比例 1:2:1，显性 : 隐性 = 3:1' },
      { type: 'heading', text: '测交验证与分离定律' },
      {
        type: 'paragraph',
        text: '让 F₁ 与隐性纯合子（aa）杂交，称为测交。F₁ 产生 A、a 两种配子，隐性纯合子只产生 a 配子，后代基因型为 Aa 和 aa，比例 1:1，表现型也是 1:1。实验结果与预期相符，证明了解释的正确性。分离定律的内容：在生物的体细胞中，控制同一性状的遗传因子成对存在，不相融合；在形成配子时，成对的遗传因子发生分离，分离后的遗传因子分别进入不同的配子中，随配子遗传给后代。',
      },
      { type: 'formula', latex: 'Aa \\times aa \\rightarrow \\tfrac{1}{2}Aa : \\tfrac{1}{2}aa', caption: '测交：后代显性 : 隐性 = 1:1' },
      {
        type: 'list',
        items: [
          '纯合子（如 AA、aa）自交后代不发生性状分离；杂合子（Aa）自交后代发生性状分离。',
          '3:1 和 1:1 是大量统计的结果，后代个体数太少时实际比例可能明显偏离理论比例。',
          '判断显隐性的常用方法：具有一对相对性状的纯合亲本杂交，F₁ 表现出来的性状为显性性状。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Mendel’s monohybrid cross' },
      {
        type: 'paragraph',
        text: 'Mendel crossed pure-breeding tall pea plants with pure-breeding dwarf plants. The first filial generation (F₁) were all tall; when the F₁ plants were self-pollinated, the F₂ generation showed tall and dwarf plants in a ratio close to 3:1. Two contrasting forms of the same characteristic, such as tall and dwarf stems, are called contrasting characteristics. The form appearing in F₁ is dominant; the hidden form is recessive.',
      },
      { type: 'formula', latex: 'P:\\ \\text{tall} \\times \\text{dwarf} \\rightarrow F_1:\\ \\text{all tall} \\rightarrow F_2:\\ \\text{tall} : \\text{dwarf} \\approx 3 : 1', caption: 'Mendel’s monohybrid experiment' },
      { type: 'heading', text: 'Explaining the 3:1 ratio' },
      {
        type: 'paragraph',
        text: 'Mendel proposed that characteristics are controlled by hereditary factors (now called genes or alleles); alleles exist in pairs in body cells; the two alleles separate when gametes are formed, so each gamete carries only one allele; fertilisation is random. Writing A for the dominant allele and a for the recessive allele, an F₁ plant (Aa) makes equal numbers of A and a gametes, giving offspring genotypes of 1/4 AA, 1/2 Aa and 1/4 aa — a phenotypic ratio of 3 dominant : 1 recessive.',
      },
      { type: 'formula', latex: 'Aa \\times Aa \\rightarrow \\tfrac{1}{4}AA : \\tfrac{1}{2}Aa : \\tfrac{1}{4}aa', caption: 'Genotypic ratio 1:2:1; phenotypic ratio 3 dominant : 1 recessive' },
      { type: 'heading', text: 'The test cross and the law of segregation' },
      {
        type: 'paragraph',
        text: 'Crossing the F₁ plant with a homozygous recessive plant (aa) is called a test cross. The F₁ produces A and a gametes while aa produces only a gametes, so the offspring are 1/2 Aa and 1/2 aa — a 1:1 ratio of both genotypes and phenotypes. The results matched the prediction and confirmed the explanation. The law of segregation states that the two alleles of a gene exist as a pair in body cells and separate (segregate) during gamete formation, so each gamete carries only one allele of each gene.',
      },
      { type: 'formula', latex: 'Aa \\times aa \\rightarrow \\tfrac{1}{2}Aa : \\tfrac{1}{2}aa', caption: 'Test cross: 1 dominant : 1 recessive in the offspring' },
      {
        type: 'list',
        items: [
          'Homozygous individuals (AA or aa) breed true; self-crossing a heterozygote (Aa) produces a mixture of phenotypes.',
          'The 3:1 and 1:1 ratios are statistical expectations over large samples; with few offspring the observed ratio may deviate noticeably.',
          'To find which form is dominant, cross pure-breeding parents with contrasting characteristics — the form shown by all the F₁ is dominant.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'mendel-genetics',
    params: [
      {
        key: 'crossType',
        label: { zh: '杂交方式（0 自交 / 1 测交 / 2 双因子）', en: 'Cross type (0 self / 1 test / 2 dihybrid)' },
        min: 0,
        max: 2,
        step: 1,
        defaultValue: 0,
      },
      {
        key: 'sampleSize',
        label: { zh: '取样个体数 n', en: 'Sample size n' },
        min: 10,
        max: 1000,
        step: 10,
        defaultValue: 100,
        unit: '株',
      },
    ],
    liveFormulas: [
      {
        id: 'phenotype-ratio',
        latex: 'Aa \\times Aa \\rightarrow \\text{显性} : \\text{隐性} = 3 : 1',
        substitute: (p) => {
          if (p.crossType === 1) return 'Aa \\times aa \\rightarrow \\text{显性} : \\text{隐性} = 1 : 1';
          if (p.crossType === 2) return 'AaBb \\times AaBb \\rightarrow 9 : 3 : 3 : 1';
          return 'Aa \\times Aa \\rightarrow \\text{显性} : \\text{隐性} = 3 : 1';
        },
      },
    ],
  },
  presets: [
    {
      id: 'self-cross-3-1',
      name: { zh: '杂合子自交 3:1', en: 'Self-cross of heterozygotes 3:1' },
      description: {
        zh: 'Aa × Aa 自交，取样 100 株，观察显性 : 隐性接近 3:1。',
        en: 'Aa × Aa self-cross with 100 offspring; watch the dominant : recessive ratio approach 3:1.',
      },
      params: { crossType: 0, sampleSize: 100 },
    },
    {
      id: 'test-cross-1-1',
      name: { zh: '测交 1:1', en: 'Test cross 1:1' },
      description: {
        zh: 'Aa × aa 测交，取样 100 株，后代显性与隐性各占一半。',
        en: 'Aa × aa test cross with 100 offspring; dominant and recessive each make up half.',
      },
      params: { crossType: 1, sampleSize: 100 },
    },
    {
      id: 'large-sample',
      name: { zh: '大样本趋近理论比', en: 'Large sample converges to theory' },
      description: {
        zh: '自交取样 1000 株，样本越大，统计比例越接近 3:1。',
        en: 'A self-cross sampled 1000 times — the larger the sample, the closer the ratio gets to 3:1.',
      },
      params: { crossType: 0, sampleSize: 1000 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '纯种高茎豌豆（DD）与纯种矮茎豌豆（dd）杂交，F₁ 自交得到 F₂，F₂ 的表现型及比例是（　）',
        en: 'Pure-breeding tall pea plants (DD) are crossed with pure-breeding dwarf plants (dd), and the F₁ are self-pollinated. What are the phenotypes and ratio in the F₂?',
      },
      options: {
        zh: [
          '全部高茎',
          '高茎 : 矮茎 = 1 : 1',
          '高茎 : 矮茎 = 3 : 1',
          '高茎 : 矮茎 = 1 : 2 : 1',
        ],
        en: [
          'All tall',
          'Tall : dwarf = 1 : 1',
          'Tall : dwarf = 3 : 1',
          'Tall : dwarf = 1 : 2 : 1',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: 'F₁ 基因型为 Dd，自交后代基因型为 1/4 DD、1/2 Dd、1/4 dd；DD 和 Dd 都表现为高茎，故高茎 : 矮茎 = 3:1。“全部高茎”是 F₁ 的结果；1:1 是测交的结果；1:2:1 是基因型比例而不是表现型比例。',
        en: 'The F₁ are Dd; self-crossing gives 1/4 DD, 1/2 Dd and 1/4 dd. Both DD and Dd are tall, so tall : dwarf = 3:1. “All tall” describes the F₁; 1:1 is the test-cross ratio; 1:2:1 is the genotypic ratio, not the phenotypic ratio.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列关于测交的说法，正确的是（　）',
        en: 'Which statement about a test cross is correct?',
      },
      options: {
        zh: [
          '测交是让待测个体与显性纯合子杂交',
          '测交后代的表现型比例可以反映待测个体产生配子的种类和比例',
          'Aa 测交后代的表现型比例为 3:1',
          '测交只能用于动物，不能用于植物',
        ],
        en: [
          'A test cross crosses the individual being tested with a homozygous dominant individual',
          'The phenotypic ratio of test-cross offspring reveals the types and proportions of gametes the tested individual produces',
          'A test cross of Aa gives a 3:1 phenotypic ratio',
          'Test crosses work for animals but not for plants',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '测交是让待测个体与隐性纯合子（aa）杂交，由于隐性纯合子只产生一种隐性配子，后代表现型比例直接反映待测个体配子的种类和比例，B 正确，A 错。Aa 测交后代为 1:1，C 错；测交对动植物都适用，D 错。',
        en: 'A test cross uses a homozygous recessive partner (aa), which makes only recessive gametes, so the offspring phenotypes directly reveal the gametes made by the tested individual — B is correct and A is wrong. Aa × aa gives 1:1, not 3:1 (C wrong); test crosses apply to both plants and animals (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '一对杂合子（Aa）自交，后代只统计了 4 株，结果全部是显性性状。最合理的解释是（　）',
        en: 'Two heterozygotes (Aa) are self-crossed, but only 4 offspring are counted — and all show the dominant characteristic. The most reasonable explanation is',
      },
      options: {
        zh: [
          '分离定律不适用于这个杂交',
          '样本太小，实际比例偏离理论比例是正常现象',
          '隐性基因发生了突变',
          '后代中不会再出现隐性个体',
        ],
        en: [
          'The law of segregation does not apply to this cross',
          'The sample is too small, so deviation from the theoretical ratio is normal',
          'The recessive allele has mutated',
          'No recessive offspring can ever appear again',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '3:1 是大量统计的理论比例。每个后代是隐性的概率为 1/4，4 株全为显性的概率为 (3/4)⁴ ≈ 0.32，完全可能发生，属于正常的统计波动，A、C、D 都没有依据。',
        en: '3:1 is a statistical expectation over large samples. Each offspring has a 1/4 chance of being recessive, and the chance of 4 dominant offspring in a row is (3/4)⁴ ≈ 0.32 — entirely possible. Options A, C and D have no basis.',
      },
    },
  ],
  kernels: {
    mendel: mendelKernel,
  },
  expectedResults: [
    {
      id: 'probe-self-cross',
      description: {
        zh: '自交（seed 42）：100 株中 AA 26、Aa 52、aa 22，理论显性比例 0.75',
        en: 'Self-cross (seed 42): of 100 offspring, AA 26, Aa 52, aa 22; theoretical dominant ratio 0.75',
      },
      kernel: 'mendel',
      input: { crossType: 0, sampleSize: 100, seed: 42 },
      expected: {
        n: 100,
        count_AA: 26,
        count_Aa: 52,
        count_aa: 22,
        ratio_dominant: 0.75,
        ratio_recessive: 0.25,
      },
    },
    {
      id: 'probe-test-cross',
      description: {
        zh: '测交（seed 42）：100 株中 Aa 50、aa 50，理论比例各 0.5',
        en: 'Test cross (seed 42): of 100 offspring, Aa 50 and aa 50; theoretical ratio 0.5 each',
      },
      kernel: 'mendel',
      input: { crossType: 1, sampleSize: 100, seed: 42 },
      expected: {
        n: 100,
        count_Aa: 50,
        count_aa: 50,
        ratio_dominant: 0.5,
        ratio_recessive: 0.5,
      },
    },
    {
      id: 'probe-large-sample',
      description: {
        zh: '自交大样本（seed 42）：1000 株中 AA 251、Aa 489、aa 260，比例趋近 1:2:1',
        en: 'Large self-cross sample (seed 42): of 1000 offspring, AA 251, Aa 489, aa 260 — converging on 1:2:1',
      },
      kernel: 'mendel',
      input: { crossType: 0, sampleSize: 1000, seed: 42 },
      expected: {
        n: 1000,
        count_AA: 251,
        count_Aa: 489,
        count_aa: 260,
        ratio_dominant: 0.75,
        ratio_recessive: 0.25,
      },
    },
  ],
};

export default bioGenetics002;
