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
    ],
    en: [
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
};

export default bioGenetics003;
