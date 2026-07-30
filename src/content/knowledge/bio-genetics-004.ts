import type { KnowledgePoint } from '../types';

export const bioGenetics004: KnowledgePoint = {
  id: 'bio-genetics-004',
  subject: 'biology',
  title: { zh: '遗传图解与概率计算', en: 'Genetic Diagrams and Probability Calculations' },
  summary: {
    zh: '学会用规范的遗传图解、棋盘法和分支法预测杂交后代的基因型与表现型，计算各种类型出现的概率。',
    en: 'Learn to use genetic diagrams, Punnett squares and the branch (forked-line) method to predict offspring genotypes and phenotypes, and to calculate the probability of each outcome.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j8b/ch1', 'pep-bio-s2/ch1'],
    igcse: ['0610/17'],
  },
  keywords: {
    zh: ['遗传图解', '棋盘法', '分支法', '概率', '配子', '基因型', '表现型', '乘法原理'],
    en: ['genetic diagram', 'Punnett square', 'branch method', 'probability', 'gametes', 'genotype', 'phenotype', 'multiplication rule'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '规范的遗传图解' },
      {
        type: 'paragraph',
        text: '遗传图解要按规范书写：亲本（P）写明表现型和基因型，中间用“×”连接；箭头向下依次写出配子、子代（F）的基因型和表现型及比例。例如高茎（Aa）与矮茎（aa）杂交：P 高茎 Aa × 矮茎 aa → 配子 A、a 和 a → F₁ 基因型 1/2 Aa、1/2 aa，表现型高茎 : 矮茎 = 1:1。写遗传图解时配子的种类必须写全，比例必须对应。',
      },
      { type: 'heading', text: '棋盘法（庞尼特方格）' },
      {
        type: 'paragraph',
        text: '棋盘法把一方亲本产生的配子写在方格顶端，另一方亲本的配子写在左侧，每个格子内填入两种配子结合形成的基因型。Aa × Aa 的棋盘有 4 个格子：1 个 AA、2 个 Aa、1 个 aa；AaBb × AaBb 的棋盘有 16 个格子。格子总数等于雌雄配子种类数的乘积，每个格子的概率相等。',
      },
      { type: 'formula', latex: 'P(\\text{某基因型}) = \\dfrac{\\text{该基因型的格子数}}{\\text{格子总数}}', caption: '棋盘法：每个格子概率相等，数格子即可求概率' },
      { type: 'heading', text: '分支法：把多对基因拆开算' },
      {
        type: 'paragraph',
        text: '涉及两对或更多对独立遗传的基因时，分支法比 16 格棋盘更快捷：先对每一对基因单独应用分离定律求概率，再利用乘法原理把各对基因的概率相乘。例如 AaBb × AaBb 中，A 这一对：Aa × Aa 后代 A_ 占 3/4、aa 占 1/4；B 这一对同理。两对基因独立分配，故组合概率等于各自概率的乘积。',
      },
      { type: 'formula', latex: 'P(A\\_B\\_) = P(A\\_) \\times P(B\\_) = \\tfrac{3}{4} \\times \\tfrac{3}{4} = \\tfrac{9}{16}', caption: '分支法求双显性后代的概率' },
      { type: 'formula', latex: 'P(\\text{AaBb}) = P(\\text{Aa}) \\times P(\\text{Bb}) = \\tfrac{1}{2} \\times \\tfrac{1}{2} = \\tfrac{1}{4}', caption: '分支法求特定基因型的概率' },
      {
        type: 'list',
        items: [
          '乘法原理：两对（或两对以上）独立遗传的基因同时出现某种组合的概率，等于各对基因相应概率的乘积。',
          '加法原理：同一结果有多种基因型途径时，把各途径的概率相加，如“显性性状”概率 = P(AA) + P(Aa)。',
          '概率是对单个后代而言的，与已经出生的兄弟姐妹的表现型无关。',
          '理论概率只有在后代数量足够多时，才与实际统计比例接近。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Drawing a proper genetic diagram' },
      {
        type: 'paragraph',
        text: 'A genetic diagram follows a standard layout: write the phenotypes and genotypes of the parents (P) joined by “×”; below the arrows, list the gametes, then the offspring (F) genotypes, phenotypes and their ratio. For a tall (Aa) × dwarf (aa) cross: P tall Aa × dwarf aa → gametes A, a and a → F₁ genotypes 1/2 Aa and 1/2 aa, phenotypes tall : dwarf = 1:1. All possible gametes must be shown, and every ratio must match the genotypes.',
      },
      { type: 'heading', text: 'The Punnett square' },
      {
        type: 'paragraph',
        text: 'A Punnett square writes the gametes of one parent along the top and those of the other parent down the side; each cell is filled with the genotype formed by combining the two gametes. Aa × Aa gives a 4-cell square — one AA, two Aa and one aa — while AaBb × AaBb needs 16 cells. The number of cells equals the product of the numbers of gamete types, and every cell is equally likely.',
      },
      { type: 'formula', latex: 'P(\\text{a genotype}) = \\dfrac{\\text{cells with that genotype}}{\\text{total cells}}', caption: 'Punnett square: all cells are equally likely, so count cells to get probabilities' },
      { type: 'heading', text: 'The branch (forked-line) method' },
      {
        type: 'paragraph',
        text: 'With two or more independently assorting genes, the branch method is faster than a 16-cell square: apply the law of segregation to each gene separately, then multiply the probabilities using the multiplication rule. In AaBb × AaBb, gene A alone gives A_ with probability 3/4 and aa with 1/4, and gene B behaves the same way. Because the two genes assort independently, combined probabilities are products of the single-gene probabilities.',
      },
      { type: 'formula', latex: 'P(A\\_B\\_) = P(A\\_) \\times P(B\\_) = \\tfrac{3}{4} \\times \\tfrac{3}{4} = \\tfrac{9}{16}', caption: 'Branch method: probability of a double-dominant offspring' },
      { type: 'formula', latex: 'P(\\text{AaBb}) = P(\\text{Aa}) \\times P(\\text{Bb}) = \\tfrac{1}{2} \\times \\tfrac{1}{2} = \\tfrac{1}{4}', caption: 'Branch method: probability of a particular genotype' },
      {
        type: 'list',
        items: [
          'Multiplication rule: the probability of a combination across independently assorting genes equals the product of the separate probabilities.',
          'Addition rule: when several genotypes give the same phenotype, add their probabilities, e.g. P(dominant) = P(AA) + P(Aa).',
          'A probability applies to each individual offspring; it does not depend on the phenotypes of brothers or sisters already born.',
          'Theoretical ratios only match observed ratios when the number of offspring is large.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: 'AaBb × AaBb 杂交，后代中表现型为双隐性（aabb）的概率是（　）',
        en: 'In the cross AaBb × AaBb, what is the probability that an offspring shows both recessive characteristics (aabb)?',
      },
      options: {
        zh: ['1/4', '1/8', '1/16', '9/16'],
        en: ['1/4', '1/8', '1/16', '9/16'],
      },
      answerIndex: 2,
      explanation: {
        zh: '分支法：P(aa) = 1/4，P(bb) = 1/4，两对基因独立分配，P(aabb) = 1/4 × 1/4 = 1/16。1/4 是只看一对基因的概率，9/16 是双显性的概率，1/8 没有对应的计算依据。',
        en: 'By the branch method: P(aa) = 1/4 and P(bb) = 1/4, and the genes assort independently, so P(aabb) = 1/4 × 1/4 = 1/16. 1/4 only considers one gene; 9/16 is the double-dominant probability; 1/8 has no valid derivation here.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '一对夫妇均为杂合子（Aa），他们已生了两个患隐性遗传病（aa）的孩子，第三个孩子患病的概率是（　）',
        en: 'Both parents are heterozygous (Aa) and their first two children are affected by the recessive condition (aa). What is the probability that their third child is also affected?',
      },
      options: {
        zh: ['0', '1/4', '1/16', '3/4'],
        en: ['0', '1/4', '1/16', '3/4'],
      },
      answerIndex: 1,
      explanation: {
        zh: 'Aa × Aa 的每个后代患病（aa）的概率都是 1/4，各次生育相互独立，前两个孩子的表现型不影响第三个孩子，故仍为 1/4。1/16 是把“三个孩子中特定情况”与“第三个孩子”混淆；0 和 3/4 都误解了概率的独立性。',
        en: 'For Aa × Aa, every child independently has a 1/4 chance of being aa; the phenotypes of the first two children do not affect the third, so the probability stays 1/4. 1/16 confuses a specific sequence of children with one child; 0 and 3/4 both misunderstand independence.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '用棋盘法分析 Aa × Aa 杂交，后代中杂合子（Aa）出现的概率是（　）',
        en: 'Using a Punnett square for the cross Aa × Aa, what is the probability of a heterozygous (Aa) offspring?',
      },
      options: {
        zh: ['1/4', '1/3', '1/2', '3/4'],
        en: ['1/4', '1/3', '1/2', '3/4'],
      },
      answerIndex: 2,
      explanation: {
        zh: '棋盘的 4 个格子为 AA、Aa、Aa、aa，其中 Aa 占 2 格，故概率为 2/4 = 1/2。1/4 是 AA（或 aa）的概率，3/4 是显性表现型的概率，1/3 是把显性个体中 Aa 的比例（2/3）错算的结果。',
        en: 'The four cells are AA, Aa, Aa and aa; two of them are Aa, so the probability is 2/4 = 1/2. 1/4 is the probability of AA (or aa), 3/4 is the dominant phenotype, and 1/3 is a miscalculation of the fraction of Aa among dominant offspring (which is 2/3).',
      },
    },
  ],
};

export default bioGenetics004;
