import { mendelKernel } from '../../simulations/kernels/mendel';
import type { KnowledgePoint } from '../types';

export const bioGenetics003: KnowledgePoint = {
  id: 'bio-genetics-003',
  subject: 'biology',
  title: { zh: '自由组合定律', en: 'Law of Independent Assortment' },
  summary: {
    zh: '研究两对相对性状的遗传：双杂合子（AaBb）自交后代出现 9:3:3:1 的表现型比例，理解非同源染色体上的非等位基因在形成配子时自由组合。',
    en: 'Study the inheritance of two pairs of contrasting characteristics: self-crossing a double heterozygote (AaBb) gives a 9:3:3:1 phenotypic ratio, showing that alleles of different genes assort independently when gametes form.',
  },
  gradeTier: 'senior',
  syllabus: {
    pep: ['pep-bio-s2/ch1'],
    igcse: ['0610/17'],
  },
  keywords: {
    zh: ['自由组合定律', '两对相对性状', '双因子杂交', '非等位基因', '配子', '表现型比例', '9:3:3:1', '重组'],
    en: ['law of independent assortment', 'dihybrid inheritance', 'dihybrid cross', 'alleles', 'gametes', 'phenotypic ratio', '9:3:3:1', 'recombination'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '描述孟德尔两对相对性状的杂交实验，说出 F₂ 的 9:3:3:1 表现型比例。',
          '解释 F₁ 产生四种等比例配子的原因，理解“每对基因分离、不同对基因自由组合”。',
          '用分支法（乘法原理）计算双因子杂交中各类后代的概率。',
          '理解 9:3:3:1 是两个 3:1 的乘积，且要求两对基因独立遗传。',
        ],
      },
      { type: 'heading', text: '两对相对性状的杂交实验' },
      {
        type: 'paragraph',
        text: '孟德尔用纯种黄色圆粒豌豆（YYRR）与纯种绿色皱粒豌豆（yyrr）杂交，F₁ 全部为黄色圆粒（YyRr）。F₁ 自交得到的 F₂ 中出现四种表现型：黄色圆粒、黄色皱粒、绿色圆粒、绿色皱粒，数量比接近 9:3:3:1，其中黄色皱粒和绿色圆粒是亲本没有的重组类型。',
      },
      { type: 'formula', latex: 'F_2:\\ \\text{黄圆} : \\text{黄皱} : \\text{绿圆} : \\text{绿皱} \\approx 9 : 3 : 3 : 1', caption: '两对相对性状杂交 F₂ 的表现型比例' },
      { type: 'heading', text: '对自由组合现象的解释' },
      {
        type: 'paragraph',
        text: 'F₁（YyRr）在形成配子时，每对遗传因子彼此分离，不同对的遗传因子自由组合，产生 YR、Yr、yR、yr 四种比例相等的配子。受精时雌雄配子随机结合，共有 16 种结合方式、9 种基因型、4 种表现型。其中双显性（Y_R_）占 9/16，单显性（Y_rr 和 yyR_）各占 3/16，双隐性（yyrr）占 1/16。',
      },
      { type: 'formula', latex: 'YyRr \\rightarrow \\tfrac{1}{4}YR + \\tfrac{1}{4}Yr + \\tfrac{1}{4}yR + \\tfrac{1}{4}yr', caption: 'F₁ 产生四种比例相等的配子' },
      { type: 'formula', latex: '\\tfrac{9}{16}Y\\_R\\_ : \\tfrac{3}{16}Y\\_rr : \\tfrac{3}{16}yyR\\_ : \\tfrac{1}{16}yyrr', caption: 'F₂ 表现型比例 9:3:3:1（“_”表示该位置显隐均可）' },
      { type: 'heading', text: '自由组合定律的实质' },
      {
        type: 'paragraph',
        text: '自由组合定律的内容：控制不同性状的遗传因子的分离和组合是互不干扰的；在形成配子时，决定同一性状的成对的遗传因子彼此分离，决定不同性状的遗传因子自由组合。其实质是：位于非同源染色体上的非等位基因的分离或组合互不干扰，在减数分裂形成配子时，同源染色体上的等位基因彼此分离的同时，非同源染色体上的非等位基因自由组合。',
      },
      {
        type: 'list',
        items: [
          '9:3:3:1 可以看作两个 3:1 的乘积：(3:1) × (3:1)，说明每对性状的遗传仍遵循分离定律。',
          '每一对相对性状的分离比仍是 3:1，如 F₂ 中黄色 : 绿色 = 3:1，圆粒 : 皱粒 = 3:1。',
          '9:3:3:1 是大量统计的理论比例，且要求两对基因位于非同源染色体上（或相距很远）。',
          '重组类型的出现增加了生物变异的多样性，为生物进化提供了原材料。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'independent assortment（自由组合）：形成配子时，不同对的遗传因子（基因）互不干扰地随机组合。',
          'dihybrid cross（双因子杂交）：同时研究两对相对性状的杂交，如 YyRr × YyRr。',
          'recombinant（重组类型）：后代中出现亲本所没有的性状组合，如黄色皱粒和绿色圆粒。',
          'gamete（配子）：参与受精的生殖细胞，双杂合子 YyRr 产生 YR、Yr、yR、yr 四种等比例配子。',
          'branch method（分支法）：对每对基因单独求概率，再用乘法原理合并的快捷算法。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Describe Mendel’s dihybrid cross and state the 9:3:3:1 phenotypic ratio in the F₂.',
          'Explain why the F₁ makes four equally frequent gamete types — each gene segregates while different genes assort independently.',
          'Use the branch method (multiplication rule) to calculate probabilities in dihybrid crosses.',
          'Understand that 9:3:3:1 is the product of two 3:1 ratios and requires the two genes to assort independently.',
        ],
      },
      { type: 'heading', text: 'Mendel’s dihybrid cross' },
      {
        type: 'paragraph',
        text: 'Mendel crossed pure-breeding yellow round peas (YYRR) with green wrinkled peas (yyrr). The F₁ were all yellow and round (YyRr). Self-pollinating the F₁ gave an F₂ with four phenotypes — yellow round, yellow wrinkled, green round and green wrinkled — in a ratio close to 9:3:3:1. Yellow wrinkled and green round are new combinations not seen in either parent.',
      },
      { type: 'formula', latex: 'F_2:\\ \\text{yellow round} : \\text{yellow wrinkled} : \\text{green round} : \\text{green wrinkled} \\approx 9 : 3 : 3 : 1', caption: 'Phenotypic ratio of the F₂ in a dihybrid cross' },
      { type: 'heading', text: 'Explaining independent assortment' },
      {
        type: 'paragraph',
        text: 'When the F₁ (YyRr) forms gametes, the two alleles of each gene segregate while the two genes assort independently, producing four types of gamete — YR, Yr, yR and yr — in equal proportions. Random fertilisation gives 16 combinations, 9 genotypes and 4 phenotypes: double dominant (Y_R_) makes up 9/16, each single-dominant class (Y_rr and yyR_) 3/16, and the double recessive (yyrr) 1/16.',
      },
      { type: 'formula', latex: 'YyRr \\rightarrow \\tfrac{1}{4}YR + \\tfrac{1}{4}Yr + \\tfrac{1}{4}yR + \\tfrac{1}{4}yr', caption: 'The F₁ makes four gamete types in equal proportions' },
      { type: 'formula', latex: '\\tfrac{9}{16}Y\\_R\\_ : \\tfrac{3}{16}Y\\_rr : \\tfrac{3}{16}yyR\\_ : \\tfrac{1}{16}yyrr', caption: 'F₂ phenotypic ratio 9:3:3:1 (“_” means either allele may be present)' },
      { type: 'heading', text: 'The law of independent assortment' },
      {
        type: 'paragraph',
        text: 'The law states that the segregation and assortment of alleles of different genes do not interfere with each other: when gametes form, the paired alleles of one gene segregate while alleles of different genes assort independently. Its cytological basis is that genes on non-homologous chromosomes behave independently during meiosis — as homologous chromosome pairs separate, the non-homologous chromosomes assort at random.',
      },
      {
        type: 'list',
        items: [
          'The 9:3:3:1 ratio is the product of two 3:1 ratios — (3:1) × (3:1) — so each gene still obeys the law of segregation.',
          'Each single characteristic still segregates 3:1 in the F₂, e.g. yellow : green = 3:1 and round : wrinkled = 3:1.',
          'The 9:3:3:1 ratio is a theoretical expectation over large samples, and it requires the two genes to lie on different chromosome pairs (or far apart).',
          'New combinations of alleles increase genetic variation, providing raw material for evolution.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'independent assortment（自由组合）: alleles of different genes are distributed to gametes independently of one another.',
          'dihybrid cross（双因子杂交）: a cross tracking two pairs of contrasting characteristics at once, e.g. YyRr × YyRr.',
          'recombinant（重组类型）: an offspring showing a combination of characteristics not seen in either parent.',
          'gamete（配子）: a sex cell; a double heterozygote YyRr makes four gamete types — YR, Yr, yR, yr — in equal proportions.',
          'branch method（分支法）: find each single-gene probability separately, then multiply, as a shortcut to the 16-cell square.',
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
        id: 'dihybrid-ratio',
        latex: '\\text{A\\_B\\_} : \\text{A\\_bb} : \\text{aaB\\_} : \\text{aabb} = 9 : 3 : 3 : 1',
        substitute: (p) =>
          `n = ${p.sampleSize}:\\ \\tfrac{9}{16} \\approx ${Math.round((p.sampleSize * 9) / 16)},\\ \\tfrac{3}{16} \\approx ${Math.round((p.sampleSize * 3) / 16)},\\ \\tfrac{1}{16} \\approx ${Math.round(p.sampleSize / 16)}`,
      },
    ],
  },
  presets: [
    {
      id: 'dihybrid-9331',
      name: { zh: '双因子自交 9:3:3:1', en: 'Dihybrid self-cross 9:3:3:1' },
      description: {
        zh: 'AaBb × AaBb 自交，取样 160 株，观察四种表现型接近 9:3:3:1。',
        en: 'AaBb × AaBb self-cross with 160 offspring; watch the four phenotypes approach 9:3:3:1.',
      },
      params: { crossType: 2, sampleSize: 160 },
    },
    {
      id: 'dihybrid-small-sample',
      name: { zh: '小样本的波动', en: 'Fluctuation in a small sample' },
      description: {
        zh: '双因子自交只取 10 株，理论比例在小样本下可能明显偏离。',
        en: 'Only 10 offspring from a dihybrid cross — small samples can deviate clearly from theory.',
      },
      params: { crossType: 2, sampleSize: 10 },
    },
    {
      id: 'dihybrid-large-sample',
      name: { zh: '大样本趋近理论比', en: 'Large sample converges to theory' },
      description: {
        zh: '双因子自交取样 1000 株，统计比例更接近 9:3:3:1。',
        en: 'A dihybrid cross sampled 1000 times — the ratios sit much closer to 9:3:3:1.',
      },
      params: { crossType: 2, sampleSize: 1000 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '基因型为 YyRr 的豌豆自交，后代中黄色皱粒（Y_rr）所占的比例是（　）',
        en: 'A pea plant with genotype YyRr is self-pollinated. What fraction of the offspring are yellow and wrinkled (Y_rr)?',
      },
      options: {
        zh: ['1/16', '3/16', '9/16', '1/4'],
        en: ['1/16', '3/16', '9/16', '1/4'],
      },
      answerIndex: 1,
      explanation: {
        zh: '黄色皱粒为一显一隐类型，占 3/16。也可用分支法：P(Y_) = 3/4，P(rr) = 1/4，相乘得 3/16。9/16 是双显性（黄圆）的比例，1/16 是双隐性（绿皱）的比例，1/4 是只考虑皱粒这一对性状的概率。',
        en: 'Yellow wrinkled is a single-dominant class, so it makes up 3/16. By the branch method: P(Y_) = 3/4 and P(rr) = 1/4, whose product is 3/16. 9/16 is the double-dominant class (yellow round), 1/16 the double recessive (green wrinkled), and 1/4 only considers the wrinkled gene alone.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '孟德尔两对相对性状的杂交实验中，F₂ 出现 9:3:3:1 的前提是（　）',
        en: 'In Mendel’s dihybrid experiment, a 9:3:3:1 ratio in the F₂ requires that',
      },
      options: {
        zh: [
          'F₁ 只产生一种配子',
          '两对基因位于同一对同源染色体上且完全连锁',
          'F₁ 产生四种比例相等的配子，且雌雄配子随机结合',
          '显性基因对隐性基因不起作用',
        ],
        en: [
          'The F₁ produces only one type of gamete',
          'The two genes lie on the same pair of homologous chromosomes and are completely linked',
          'The F₁ produces four gamete types in equal proportions and fertilisation is random',
          'The dominant allele has no effect on the recessive allele',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '9:3:3:1 来自 16 种等概率的雌雄配子结合，前提是 F₁ 产生四种等比例配子且随机受精，C 正确。只产生一种配子则后代无分离，A 错；两对基因完全连锁时 F₁ 只产生两种配子，不会出现 9:3:3:1，B 错；显性基因对隐性基因为完全显性正是前提之一，但 D 表述为“不起作用”含义错误（且不是比例出现的关键条件）。',
        en: 'The 9:3:3:1 ratio comes from 16 equally likely gamete combinations, which requires four equally frequent gamete types and random fertilisation — C is correct. One gamete type would give no segregation (A wrong); complete linkage gives only two gamete types and no 9:3:3:1 (B wrong); D misstates dominance and is not the condition behind the ratio.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: 'YyRr 自交后代中，基因型为 YyRr 的个体所占比例是（　）',
        en: 'In the self-cross of YyRr, what fraction of the offspring also have the genotype YyRr?',
      },
      options: {
        zh: ['1/16', '2/16', '4/16', '9/16'],
        en: ['1/16', '2/16', '4/16', '9/16'],
      },
      answerIndex: 2,
      explanation: {
        zh: '用分支法：P(Yy) = 1/2，P(Rr) = 1/2，两对基因独立分配，P(YyRr) = 1/2 × 1/2 = 1/4 = 4/16。4/16 也是 9 种基因型中比例最高的一种。',
        en: 'By the branch method: P(Yy) = 1/2 and P(Rr) = 1/2, and the two genes assort independently, so P(YyRr) = 1/2 × 1/2 = 1/4 = 4/16 — the most frequent of the 9 genotypes.',
      },
    },
  ],
  examPractice: [
    {
      id: 'gen003-ex1',
      syllabus: ['0610/17.4.11', '0610/17.4.12'],
      tier: 'core',
      commandWord: 'Calculate',
      marks: 3,
      stem: 'A heterozygous tall pea plant (Tt) is self-pollinated. Calculate the probability that one offspring plant is dwarf, and the probability that it is heterozygous. Show your working with a Punnett square or genetic diagram.',
      markScheme: [
        { text: 'Gametes T and t from each parent; square gives TT, Tt, Tt, tt', marks: 1 },
        { text: 'P(dwarf, tt) = 1/4', marks: 1 },
        { text: 'P(heterozygous, Tt) = 2/4 = 1/2', marks: 1 },
      ],
      examinerNote: {
        zh: '棋盘法数格子即可，但格子必须画全。常见错误是把“显性个体中杂合的比例 2/3”当成“后代中杂合的概率 1/2”——看清题目问的是哪个总体。',
        en: 'Counting cells in a Punnett square is enough, but the square must be complete. A common slip is giving 2/3 — the fraction of heterozygotes among dominant offspring — when the question asks about all offspring, where it is 1/2.',
      },
    },
    {
      id: 'gen003-ex2',
      syllabus: ['0610/17.4.11'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 2,
      stem: 'A student counts only 12 offspring from a cross that should give a 3 : 1 ratio, and finds 6 of each phenotype. Explain why this result does not disprove the predicted ratio.',
      markScheme: [
        { text: 'The 3 : 1 ratio is a statistical expectation that only holds for large samples', marks: 1 },
        { text: 'Each fertilisation is a random, independent event, so small samples commonly deviate from the theoretical ratio', marks: 1 },
      ],
      examinerNote: {
        zh: '关键词是“统计”和“随机”。只说“实验做错了”不得分——结果本身完全正常，孟德尔当年正是靠成千上万的样本才看清比例。',
        en: 'The keywords are “statistical” and “random”. Claiming the experiment went wrong earns nothing — the result is perfectly normal, and Mendel only saw the ratios clearly because he counted thousands.',
      },
    },
  ],
  kernels: {
    mendel: mendelKernel,
  },
  expectedResults: [
    {
      id: 'probe-dihybrid-160',
      description: {
        zh: '双因子自交（seed 7）：160 株中 AaBb 39 株最多，理论双显性比例 9/16',
        en: 'Dihybrid self-cross (seed 7): of 160 offspring, AaBb is most frequent at 39; theoretical A_B_ ratio 9/16',
      },
      kernel: 'mendel',
      input: { crossType: 2, sampleSize: 160, seed: 7 },
      expected: {
        n: 160,
        count_AaBb: 39,
        count_aabb: 17,
        ratio_A_B_: 0.5625,
        ratio_A_bb: 0.1875,
        ratio_aaB_: 0.1875,
        ratio_aabb: 0.0625,
      },
    },
    {
      id: 'probe-dihybrid-small',
      description: {
        zh: '小样本（seed 1）：仅 10 株，计数偏离理论比例，但理论比例不变',
        en: 'Small sample (seed 1): only 10 offspring, counts deviate but theoretical ratios are unchanged',
      },
      kernel: 'mendel',
      input: { crossType: 2, sampleSize: 10, seed: 1 },
      expected: {
        n: 10,
        count_AABB: 2,
        count_Aabb: 3,
        ratio_A_B_: 0.5625,
        ratio_aabb: 0.0625,
      },
    },
    {
      id: 'probe-dihybrid-large',
      description: {
        zh: '大样本（seed 42）：1000 株中 AaBb 258、aabb 59，比例趋近理论值',
        en: 'Large sample (seed 42): of 1000 offspring, AaBb 258 and aabb 59 — converging on theory',
      },
      kernel: 'mendel',
      input: { crossType: 2, sampleSize: 1000, seed: 42 },
      expected: {
        n: 1000,
        count_AaBb: 258,
        count_aabb: 59,
        ratio_A_B_: 0.5625,
        ratio_A_bb: 0.1875,
        ratio_aaB_: 0.1875,
        ratio_aabb: 0.0625,
      },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '搞清单对性状的遗传之后，孟德尔又追问了一步：如果同时看两对性状呢？比如豌豆的颜色和形状，黄色配圆粒、绿色配皱粒，它们会“打包”遗传，还是各走各的路？这节课我们就来揭晓答案。',
          en: 'After cracking single-gene inheritance, Mendel pushed further: what if you track two characteristics at once — say, pea colour and pea shape? Do yellow and round travel together as a package, or does each go its own way? This lesson reveals the answer.',
        },
      },
      {
        id: 'concept-experiment',
        kind: 'concept',
        text: {
          zh: '先看实验。纯种黄色圆粒和纯种绿色皱粒杂交，F₁ 全部是黄色圆粒——黄和圆都是显性。关键在 F₁ 自交后的 F₂：四种表现型都出现了，比例接近 9 比 3 比 3 比 1。注意，黄色皱粒和绿色圆粒是亲本身上根本没有的新组合，这说明两对性状并没有绑在一起。',
          en: 'Start with the experiment. Pure-breeding yellow round peas crossed with green wrinkled ones give an F₁ that is all yellow and round — both are dominant. The real story is the F₂ from self-pollinating the F₁: four phenotypes appear, in a ratio close to 9:3:3:1. Notice that yellow wrinkled and green round are brand-new combinations neither parent had — proof that the two traits are not glued together.',
        },
      },
      {
        id: 'concept-assortment',
        kind: 'concept',
        text: {
          zh: '怎么解释 9:3:3:1？F₁（YyRr）形成配子时，每一对基因各自分离，而两对基因之间自由组合，于是产生 YR、Yr、yR、yr 四种配子，各占四分之一。雌雄配子随机结合，共 16 种组合。这里有个特别好用的视角：单独看颜色，黄比绿是 3 比 1；单独看形状，圆比皱也是 3 比 1。两个 3 比 1 相乘，正好就是 9 比 3 比 3 比 1——这就是自由组合定律的实质。',
          en: 'How do we explain 9:3:3:1? When the F₁, YyRr, forms gametes, each gene segregates on its own while the two genes assort independently, producing four gamete types — YR, Yr, yR and yr — a quarter each. Random fertilisation gives 16 combinations. And here is a handy way to see it: colour alone still splits 3:1, yellow to green; shape alone still splits 3:1, round to wrinkled. Multiply the two 3:1 ratios together and you get exactly 9:3:3:1 — that is the heart of the law of independent assortment.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '轮到你了。打开下方仿真，把“杂交方式”滑块拨到 2，切换到双因子模式。先把取样数定在 10，多刷新几次，看看小样本的比例有多飘忽；再一路拉到 1000，观察四种表现型怎样稳稳地逼近 9:3:3:1。也可以直接点“双因子自交 9:3:3:1”预设，从 160 株的标准样本开始看起。',
          en: 'Now it’s your turn. In the simulation below, slide the cross type to 2 for dihybrid mode. Hold the sample size at 10 first and re-run a few times to see how wildly small samples wobble; then drag it up to 1000 and watch the four phenotypes settle down onto 9:3:3:1. Or just tap the “Dihybrid self-cross 9:3:3:1” preset to start from a standard 160-plant sample.',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '总结一下：两对基因独立遗传时，双杂合子产生四种等比例配子，自交后代呈现 9:3:3:1；每一对性状单独看仍服从分离定律的 3:1。记住两个前提——基因要独立分配，样本要足够大。下一课我们学习用棋盘法和分支法把这些概率算得又快又准。',
          en: 'To wrap up: when two genes are inherited independently, a double heterozygote makes four equally frequent gametes, and self-crossing gives the 9:3:3:1 ratio — while each trait on its own still obeys the 3:1 rule of segregation. Keep the two conditions in mind: the genes must assort independently, and the sample must be large. Next lesson we’ll use Punnett squares and the branch method to calculate these probabilities quickly and accurately.',
        },
      },
    ],
  },
  related: ['igcse-0610-17-1-inheritance', 'bio-genetics-002', 'bio-genetics-004'],
};

export default bioGenetics003;
