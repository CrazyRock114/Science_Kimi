import type { KnowledgePoint } from '../types';

export const bioEco004: KnowledgePoint = {
  id: 'bio-eco-004',
  subject: 'biology',
  title: { zh: '自然选择与生物进化', en: 'Natural Selection and Evolution' },
  summary: {
    zh: '理解达尔文自然选择学说的要点，通过加拉帕戈斯达尔文雀和桦尺蛾工业黑化两个经典实例，分析变异、选择与适应的关系。',
    en: 'Understand the key points of Darwin’s theory of natural selection, and analyse the relationship between variation, selection and adaptation through two classic examples: Darwin’s finches in the Galápagos and industrial melanism in the peppered moth.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j8b/ch1', 'pep-bio-s2/ch6'],
    igcse: ['0610/18'],
  },
  keywords: {
    zh: ['自然选择', '变异', '适者生存', '进化', '达尔文雀', '工业黑化', '适应', '生存斗争'],
    en: ['natural selection', 'variation', 'survival of the fittest', 'evolution', "Darwin's finches", 'industrial melanism', 'adaptation', 'mutation'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '达尔文的自然选择学说' },
      {
        type: 'paragraph',
        text: '1859 年达尔文在《物种起源》中提出自然选择学说：生物都有过度繁殖的倾向，而资源有限，个体之间必然发生生存斗争；同种生物的个体之间存在可遗传的变异，具有有利变异的个体更容易在斗争中生存下来并留下后代，不利变异的个体则容易被淘汰。经过许多代的积累，有利变异逐代加强，生物就朝着适应环境的方向进化。',
      },
      {
        type: 'list',
        items: [
          '过度繁殖：生物产生的后代数量远超环境所能养活的能力，是自然选择的基础。',
          '生存斗争：个体与无机环境、与其他生物之间争夺食物和空间的斗争，是自然选择的动力。',
          '遗传和变异：变异是普遍存在的、不定向的，可遗传的变异为进化提供原材料。',
          '适者生存：适应环境的个体生存并繁殖，是自然选择的结果。',
        ],
      },
      { type: 'heading', text: '实例一：加拉帕戈斯群岛的达尔文雀' },
      {
        type: 'paragraph',
        text: '加拉帕戈斯群岛上生活着十多种地雀，它们由共同的祖先演化而来，但喙的形状和大小各不相同：以种子为食的喙粗短有力，以昆虫为食的喙细长，吸食花蜜的喙尖细。不同岛屿的食物条件不同，具有与食物相适应的喙形的个体更容易生存繁殖，久而久之，雀喙朝着各自适应的方向进化，形成了不同的物种。这说明自然选择使生物产生适应环境的多样性。',
      },
      { type: 'heading', text: '实例二：桦尺蛾的工业黑化' },
      {
        type: 'paragraph',
        text: '19 世纪英国工业化之前，桦尺蛾绝大多数是浅色型，停在浅色树干上不易被鸟类发现，黑色型极少。工业革命后，煤烟把树干熏黑，浅色蛾容易被鸟类捕食，黑色蛾反而有了保护色，数量迅速增多成为优势类型。环境没有改变变异的产生（黑色变异原本就存在），改变的是选择的方向——污染后的环境选择了黑色型。',
      },
      { type: 'heading', text: '变异与选择的关系' },
      {
        type: 'paragraph',
        text: '变异是不定向的，自然选择是定向的：生物先产生各种各样的变异，环境再从中“筛选”出适应的类型，而不是环境直接诱导出定向的有利变异。自然选择直接作用的是生物的表型，但被选择保留下来、能够传给后代的是控制表型的基因。适应是相对的：环境改变后，原来的有利变异可能变成不利变异。',
      },
    ],
    en: [
      { type: 'heading', text: "Darwin's theory of natural selection" },
      {
        type: 'paragraph',
        text: 'In On the Origin of Species (1859), Darwin proposed the theory of natural selection: organisms tend to produce far more offspring than the environment can support, so individuals must struggle for existence; within a species there is inherited variation, and individuals with advantageous variations are more likely to survive the struggle and leave offspring, while those with disadvantageous variations are more likely to be eliminated. Over many generations the advantageous variations accumulate, and the population evolves in a direction that suits its environment.',
      },
      {
        type: 'list',
        items: [
          'Overproduction: organisms produce more offspring than can survive — the basis of natural selection.',
          'Struggle for existence: competition for food and space with the environment and with other organisms — the driving force of selection.',
          'Variation and inheritance: variation is universal and undirected; inherited variation provides the raw material for evolution.',
          'Survival of the fittest: individuals best adapted to the environment survive and reproduce — the outcome of selection.',
        ],
      },
      { type: 'heading', text: "Example 1: Darwin's finches on the Galápagos Islands" },
      {
        type: 'paragraph',
        text: 'More than a dozen species of finch on the Galápagos Islands all evolved from a common ancestor, yet their beaks differ in shape and size: seed-eaters have short, powerful beaks, insect-eaters have slender beaks, and nectar-feeders have thin, pointed beaks. Because food differs from island to island, individuals whose beaks matched the local food survived and reproduced more successfully, so over time beaks evolved in different adaptive directions, forming distinct species. This shows how natural selection produces diversity adapted to the environment.',
      },
      { type: 'heading', text: 'Example 2: industrial melanism in the peppered moth' },
      {
        type: 'paragraph',
        text: 'Before industrialisation in 19th-century Britain, most peppered moths were the light form, well camouflaged on pale tree trunks, while the dark (melanic) form was rare. After the Industrial Revolution, soot blackened the tree trunks: light moths became easy prey for birds, while dark moths were camouflaged and rapidly became the common form. The environment did not create the variation — dark moths already existed; it changed the direction of selection, favouring the dark form in polluted areas.',
      },
      { type: 'heading', text: 'The relationship between variation and selection' },
      {
        type: 'paragraph',
        text: 'Variation is undirected, but natural selection is directional: organisms first produce all kinds of variation, and the environment then selects the types that fit it — the environment does not induce directed, advantageous mutations. Natural selection acts directly on the phenotype, but what is preserved and passed to offspring is the underlying genotype. Adaptation is relative: when the environment changes, a formerly advantageous variation may become disadvantageous.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '桦尺蛾工业黑化现象最能说明（　）',
        en: 'Industrial melanism in the peppered moth best illustrates that',
      },
      options: {
        zh: [
          '环境污染直接诱导蛾产生定向的黑色变异',
          '自然选择使适应环境的个体有更多的生存和繁殖机会',
          '黑色蛾通过捕食浅色蛾而增多',
          '生物的变异都是有利的',
        ],
        en: [
          'Pollution directly induced a directed dark mutation in the moths',
          'Natural selection gives individuals adapted to the environment more chances to survive and reproduce',
          'Dark moths increased by preying on light moths',
          'All variations in organisms are advantageous',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '黑色变异在污染前就已存在，环境只是改变了选择的方向，而不是定向诱导变异（排除 A）；两种色型不是捕食关系（排除 C）；变异大多是不定向的，有利或有害取决于环境（排除 D）。工业黑化正是自然选择保留适应类型的经典证据。',
        en: 'The dark variation existed before pollution; the environment only changed the direction of selection, it did not induce a directed mutation (A wrong). The two colour forms are not predator and prey (C wrong). Variation is mostly undirected — whether it is advantageous depends on the environment (D wrong). Industrial melanism is classic evidence of natural selection preserving adapted types.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '自然选择直接作用的对象是生物的（　）',
        en: 'Natural selection acts directly on an organism’s',
      },
      options: {
        zh: ['基因', '表型', 'DNA 分子', '配子'],
        en: ['genes', 'phenotype', 'DNA molecules', 'gametes'],
      },
      answerIndex: 1,
      explanation: {
        zh: '环境“看到”并筛选的是生物表现出来的性状——表型（如体色、喙形）；但能够遗传给后代的是控制表型的基因，所以种群中基因频率随之改变，生物发生进化。基因、DNA、配子都不是选择直接作用的对象（排除 A、C、D）。',
        en: 'The environment “sees” and selects the observable characteristics — the phenotype (such as body colour or beak shape). But what is inherited by offspring is the underlying genotype, so allele frequencies in the population change and evolution occurs. Genes, DNA and gametes are not what selection acts on directly (A, C and D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '加拉帕戈斯群岛上达尔文雀喙形的差异，其进化的原材料来自（　）',
        en: 'The raw material for the evolution of beak differences in Darwin’s finches came from',
      },
      options: {
        zh: ['环境对喙的直接改造', '可遗传的变异', '喙的用进废退', '不同食物的直接诱导'],
        en: ['direct modification of beaks by the environment', 'inherited variation', 'use and disuse of the beak', 'direct induction by different foods'],
      },
      answerIndex: 1,
      explanation: {
        zh: '进化的原材料是可遗传的变异：祖先种群中先存在喙形各异的可遗传变异，不同岛屿的食物条件再对它们进行定向选择。环境和食物不能直接改造或诱导喙形（排除 A、D）；“用进废退、获得性遗传”是拉马克的观点，已被否定（排除 C）。',
        en: 'The raw material of evolution is inherited variation: the ancestral population already contained heritable variations in beak shape, and the different food conditions on each island then selected among them directionally. Environment and food cannot directly modify or induce beak shape (A and D wrong); “use and disuse with inheritance of acquired characteristics” is Lamarck’s discredited idea (C wrong).',
      },
    },
  ],
};
