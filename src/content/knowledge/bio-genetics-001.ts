import type { KnowledgePoint } from '../types';

export const bioGenetics001: KnowledgePoint = {
  id: 'bio-genetics-001',
  subject: 'biology',
  title: { zh: 'DNA、基因与染色体', en: 'DNA, Genes and Chromosomes' },
  summary: {
    zh: '理清染色体、DNA 与基因之间的层次关系：染色体由 DNA 和蛋白质组成，基因是有遗传效应的 DNA 片段，理解遗传信息如何存储与传递。',
    en: 'Clarify the hierarchy between chromosomes, DNA and genes: chromosomes are made of DNA and protein, a gene is a section of DNA that codes for a protein, and see how genetic information is stored and passed on.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j8b/ch1', 'pep-bio-s2/ch2', 'pep-bio-s2/ch3'],
    igcse: ['0610/17'],
  },
  keywords: {
    zh: ['染色体', 'DNA', '基因', '细胞核', '遗传物质', '双螺旋', '脱氧核糖核酸', '蛋白质'],
    en: ['chromosome', 'DNA', 'gene', 'nucleus', 'genetic material', 'double helix', 'allele', 'protein'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '染色体：遗传物质的载体' },
      {
        type: 'paragraph',
        text: '染色体存在于细胞核中，由 DNA 和蛋白质组成，在细胞分裂时能被碱性染料染成深色，因此得名。每一种生物的体细胞内，染色体的形态和数目都是一定的。人的体细胞中有 23 对（46 条）染色体，生殖细胞（精子和卵细胞）中只有体细胞的一半，即 23 条。',
      },
      { type: 'formula', latex: '\\text{体细胞：} 2n = 46 \\qquad \\text{生殖细胞：} n = 23', caption: '人的体细胞为二倍体（2n），生殖细胞为单倍体（n）' },
      { type: 'heading', text: 'DNA：主要的遗传物质' },
      {
        type: 'paragraph',
        text: 'DNA 是脱氧核糖核酸的简称，是主要的遗传物质。DNA 分子呈双螺旋结构，像一架旋转的梯子：外侧由脱氧核糖和磷酸交替连接构成骨架，内侧是碱基两两配对形成的“横档”，碱基配对遵循 A 与 T 配对、G 与 C 配对的规律。DNA 分子很长，可以分成许多个片段。',
      },
      { type: 'formula', latex: '\\text{A = T} \\qquad \\text{G} \\equiv \\text{C}', caption: 'DNA 双链中的碱基互补配对：腺嘌呤—胸腺嘧啶，鸟嘌呤—胞嘧啶' },
      { type: 'heading', text: '基因：有遗传效应的 DNA 片段' },
      {
        type: 'paragraph',
        text: '基因是有遗传效应的 DNA 片段，它控制生物的性状，如豌豆的圆粒与皱粒、人的单眼皮与双眼皮。不同的基因含有不同的遗传信息。概括三者的关系：染色体由 DNA 和蛋白质组成，基因是 DNA 上的小片段，一条染色体上有一个 DNA 分子，一个 DNA 分子上有许多个基因。',
      },
      {
        type: 'list',
        items: [
          '层次关系：细胞核 → 染色体 → DNA → 基因，基因是控制性状的基本遗传单位。',
          '一条染色体通常含有一个 DNA 分子，一个 DNA 分子上含有许多个基因。',
          '染色体在体细胞中成对存在，基因在体细胞中也成对存在，分别位于成对的染色体上。',
          '形成生殖细胞时，成对的染色体彼此分离，染色体数目减半，受精后恢复成对。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Chromosomes: carriers of genetic material' },
      {
        type: 'paragraph',
        text: 'Chromosomes are found in the nucleus and are made of DNA and protein. They take up dark stains during cell division, hence their name. Each species has a fixed number of chromosomes in its body cells. Human body cells contain 23 pairs (46 chromosomes), while the gametes (sperm and egg cells) contain only half that number — 23 chromosomes.',
      },
      { type: 'formula', latex: '\\text{body cells: } 2n = 46 \\qquad \\text{gametes: } n = 23', caption: 'Human body cells are diploid (2n); gametes are haploid (n)' },
      { type: 'heading', text: 'DNA: the molecule of inheritance' },
      {
        type: 'paragraph',
        text: 'DNA (deoxyribonucleic acid) is the genetic material. A DNA molecule is a double helix, like a twisted ladder: the sides are sugar–phosphate backbones and the rungs are pairs of bases, with A always paired with T and G with C. A DNA molecule is very long and is divided into many sections.',
      },
      { type: 'formula', latex: '\\text{A = T} \\qquad \\text{G} \\equiv \\text{C}', caption: 'Complementary base pairing: adenine–thymine, guanine–cytosine' },
      { type: 'heading', text: 'Genes: sections of DNA that code for proteins' },
      {
        type: 'paragraph',
        text: 'A gene is a section of DNA that codes for a particular protein, and in doing so controls a characteristic — such as round versus wrinkled peas, or a single versus double eyelid in humans. Putting the three levels together: a chromosome is made of DNA and protein; a gene is a short section of DNA; each chromosome carries one long DNA molecule containing many genes.',
      },
      {
        type: 'list',
        items: [
          'Hierarchy: nucleus → chromosomes → DNA → genes; a gene is the basic unit of inheritance.',
          'Each chromosome contains one DNA molecule; each DNA molecule carries many genes.',
          'Chromosomes exist in pairs in body cells, and so do the genes located on them.',
          'When gametes form, the chromosome pairs separate so the number is halved; fertilisation restores the paired state.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '染色体、DNA 和基因三者的关系，下列表述正确的是（　）',
        en: 'Which statement correctly describes the relationship between chromosomes, DNA and genes?',
      },
      options: {
        zh: [
          '基因是染色体上控制性状的蛋白质',
          '染色体由 DNA 和蛋白质组成，基因是有遗传效应的 DNA 片段',
          '一条染色体上有许多个 DNA 分子，一个 DNA 分子上只有一个基因',
          'DNA 是染色体的片段，基因是蛋白质的一部分',
        ],
        en: [
          'A gene is a protein on a chromosome that controls a characteristic',
          'A chromosome is made of DNA and protein, and a gene is a section of DNA with a hereditary effect',
          'One chromosome carries many DNA molecules, and each DNA molecule has only one gene',
          'DNA is a section of a chromosome, and a gene is part of a protein',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '染色体由 DNA 和蛋白质组成，基因是有遗传效应的 DNA 片段，B 正确。基因是 DNA 片段而不是蛋白质，A、D 错；一条染色体上通常只有一个 DNA 分子，而一个 DNA 分子上有许多个基因，C 错。',
        en: 'A chromosome is made of DNA and protein, and a gene is a section of DNA — B is correct. A gene is a DNA section, not a protein, so A and D are wrong; one chromosome usually carries one DNA molecule with many genes on it, so C is wrong.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '人的体细胞中有 46 条染色体，那么人的精子和卵细胞中染色体的数目分别是（　）',
        en: 'Human body cells contain 46 chromosomes. How many chromosomes are there in a human sperm cell and an egg cell respectively?',
      },
      options: {
        zh: ['46 条和 46 条', '23 条和 23 条', '23 对和 23 对', '46 条和 23 条'],
        en: ['46 and 46', '23 and 23', '23 pairs and 23 pairs', '46 and 23'],
      },
      answerIndex: 1,
      explanation: {
        zh: '形成生殖细胞时，成对的染色体彼此分离，数目减半，因此精子和卵细胞中都只有 23 条染色体；受精后受精卵恢复为 46 条。选 46 条的是没有考虑数目减半；写“23 对”是错的，生殖细胞中染色体不成对。',
        en: 'When gametes form, the paired chromosomes separate and the number is halved, so both sperm and egg contain 23 chromosomes; fertilisation restores 46. Choosing 46 ignores the halving; “23 pairs” is wrong because chromosomes in gametes are unpaired.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: 'DNA 分子的双螺旋结构中，碱基配对规律是（　）',
        en: 'In the double helix of a DNA molecule, the rule of base pairing is',
      },
      options: {
        zh: [
          'A 与 G 配对，T 与 C 配对',
          'A 与 T 配对，G 与 C 配对',
          'A 与 C 配对，G 与 T 配对',
          '任意两种碱基都可以配对',
        ],
        en: [
          'A pairs with G, T pairs with C',
          'A pairs with T, G pairs with C',
          'A pairs with C, G pairs with T',
          'Any two bases can pair together',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: 'DNA 双链中腺嘌呤（A）与胸腺嘧啶（T）配对，鸟嘌呤（G）与胞嘧啶（C）配对，这保证了遗传信息能准确复制。其他选项的配对方式都不符合碱基互补配对原则。',
        en: 'In the two DNA strands, adenine (A) pairs with thymine (T) and guanine (G) pairs with cytosine (C); this complementary pairing allows genetic information to be copied accurately. The other options break the base-pairing rule.',
      },
    },
  ],
};

export default bioGenetics001;
