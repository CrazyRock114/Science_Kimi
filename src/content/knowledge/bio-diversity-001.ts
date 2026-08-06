import type { KnowledgePoint } from '../types';

export const bioDiversity001: KnowledgePoint = {
  id: 'bio-diversity-001',
  subject: 'biology',
  title: { zh: '生物的多样性及其保护', en: 'Biodiversity and Its Conservation' },
  summary: {
    zh: '了解生物分类的单位和意义，理解生物多样性三个层次的内涵，分析生物多样性面临的威胁及原因，掌握就地保护和迁地保护等措施。',
    en: 'Learn the ranks and purpose of biological classification, understand the three levels of biodiversity, analyse the threats to biodiversity and their causes, and master conservation measures such as in-situ and ex-situ protection.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j8a/ch2'],
    igcse: ['0610/1', '0610/20'],
  },
  keywords: {
    zh: ['生物分类', '界门纲目科属种', '物种', '生物多样性', '基因的多样性', '就地保护', '迁地保护', '自然保护区'],
    en: ['classification', 'taxonomic ranks', 'species', 'biodiversity', 'genetic diversity', 'in-situ conservation', 'ex-situ conservation', 'nature reserve'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出生物分类的依据和七个分类等级，理解“种”是最基本的分类单位。',
          '阐明生物多样性包括生物种类的多样性、基因的多样性和生态系统的多样性三个层次。',
          '举例说明生物多样性面临的威胁及其原因，说出保护生物多样性的主要措施。',
        ],
      },
      { type: 'heading', text: '生物分类的依据与意义' },
      {
        type: 'paragraph',
        text: '生物分类是研究生物的一种基本方法。生物分类主要是根据生物的相似程度（包括形态结构和生理功能等），把生物划分为不同的等级，并对每一类群的形态结构和生理功能等特征进行科学的描述，以弄清不同类群之间的亲缘关系和进化关系。例如，植物分类主要依据形态结构，动物分类除了要比较形态结构，往往还要比较动物的生理功能。',
      },
      { type: 'heading', text: '从种到界：分类的七个等级' },
      {
        type: 'paragraph',
        text: '生物分类从大到小的等级依次是：界、门、纲、目、科、属、种。“种”是最基本的分类单位，同种生物的亲缘关系是最密切的。分类单位越大，包含的生物种类越多，生物之间的共同特征越少，亲缘关系越远；分类单位越小，包含的生物种类越少，共同特征越多，亲缘关系越近。例如狼和狐同科不同属，狼和犬同属，可见狼与犬的亲缘关系比狼与狐更近。瑞典植物学家林奈提出的双名法规定：每种生物的学名由属名和种加词两部分组成。',
      },
      { type: 'heading', text: '生物多样性的三个层次' },
      {
        type: 'list',
        items: [
          '生物种类的多样性：指一定区域内生物种类的丰富程度。我国是生物种类最丰富的国家之一，苔藓、蕨类和种子植物的种数居世界第三位，还是裸子植物最丰富的国家，被称为“裸子植物的故乡”。',
          '基因的多样性：生物的各种特征是由基因控制的，每种生物都是一个丰富的基因库。基因的多样性是生物种类多样性的实质，它为动植物的遗传育种提供了宝贵的遗传资源，如袁隆平利用野生水稻与普通水稻杂交培育出高产杂交水稻。',
          '生态系统的多样性：生物种类的多样性和复杂的生活环境共同构成了生态系统的多样性，如森林、草原、荒漠、湿地、海洋等生态系统。某种生物的数量减少或灭绝，必然会影响它所在的生态系统；生态系统发生剧烈变化时，也会加速生物种类多样性和基因多样性的丧失。',
        ],
      },
      { type: 'heading', text: '生物多样性面临的威胁及原因' },
      {
        type: 'paragraph',
        text: '我国特有的珍稀动植物有大熊猫、金丝猴、朱鹮、扬子鳄、银杉、珙桐等，但其中不少已处于濒危状态。生物多样性面临威胁的原因主要有：生存环境的改变和破坏（乱砍滥伐、乱捕滥杀导致栖息地丧失，是生物多样性面临威胁的主要原因）；掠夺式的开发利用；环境污染；外来物种入侵——如水葫芦（凤眼莲）引入我国后疯长，挤占本地生物的生存空间。威胁生物生存的因素大多是人类活动造成的。',
      },
      { type: 'heading', text: '保护生物多样性的措施' },
      {
        type: 'list',
        items: [
          '就地保护：把包含保护对象在内的一定面积的陆地或水体划分出来进行保护和管理，主要形式是建立自然保护区。就地保护是保护生物多样性最为有效的措施。自然保护区是“天然基因库”“天然实验室”和“活的自然博物馆”。',
          '迁地保护：把某些濒危物种迁出原地，移入动物园、植物园、水族馆和濒危动物繁育中心，进行特殊的保护和管理，是对就地保护的补充。',
          '建立濒危物种的种质库（植物的种子库、动物的精子库等），以保护珍贵的遗传资源。',
          '加强教育和法制管理：我国相继颁布了《中华人民共和国森林法》《中华人民共和国野生动物保护法》和《中国自然保护纲要》等法律和文件。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'species（物种/种）：生物分类最基本的单位，同种生物之间亲缘关系最密切，能够交配并产生可育后代。',
          'binomial nomenclature（双名法）：林奈提出的命名法，学名由属名和种加词组成。',
          'biodiversity（生物多样性）：包括生物种类的多样性、基因的多样性和生态系统的多样性。',
          'genetic diversity（基因的多样性）：同一物种内或物种间基因组成的丰富程度，是生物种类多样性的实质。',
          'in-situ conservation（就地保护）：在生物原来的生活环境中进行保护，如建立自然保护区，是最有效的保护措施。',
          'ex-situ conservation（迁地保护）：把濒危物种迁出原地，移入动物园、植物园等机构进行保护。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State the basis of biological classification and its seven ranks, and understand that the species is the basic unit of classification.',
          'Explain that biodiversity includes three levels: diversity of species, of genes and of ecosystems.',
          'Give examples of the threats to biodiversity and their causes, and state the main conservation measures.',
        ],
      },
      { type: 'heading', text: 'The basis and purpose of classification' },
      {
        type: 'paragraph',
        text: 'Classification is a basic method for studying living things. Organisms are placed into ranks mainly according to their similarities — including morphology, structure and physiological functions — and the features of each group are described scientifically, so as to clarify the relationships of descent and evolution between groups. Plants are classified mainly by morphology and structure; animals are compared by morphology and often by physiological functions as well.',
      },
      { type: 'heading', text: 'From species to kingdom: the seven ranks' },
      {
        type: 'paragraph',
        text: 'The ranks of classification, from the largest to the smallest, are: kingdom, phylum, class, order, family, genus and species. The species is the basic unit of classification, and organisms of the same species are most closely related. The larger the rank, the more kinds of organisms it contains, the fewer features they share, and the more distant their relationship; the smaller the rank, the fewer kinds it contains, the more features they share, and the closer the relationship. Wolves and foxes belong to the same family but different genera, while wolves and dogs belong to the same genus — so the wolf is more closely related to the dog than to the fox. The binomial nomenclature proposed by the Swedish botanist Linnaeus states that the scientific name of each species consists of the genus name plus the specific epithet.',
      },
      { type: 'heading', text: 'The three levels of biodiversity' },
      {
        type: 'list',
        items: [
          'Species diversity: the richness of species in a given area. China is among the richest countries in species — its numbers of mosses, ferns and seed plants rank third in the world — and it is the richest in gymnosperms, known as the "home of gymnosperms".',
          'Genetic diversity: the traits of an organism are controlled by genes, and each species is a rich gene pool. Genetic diversity is the essence of species diversity and provides invaluable resources for breeding — for example, Yuan Longping crossed wild rice with cultivated rice to breed high-yield hybrid rice.',
          'Ecosystem diversity: species diversity together with varied living environments forms ecosystem diversity — forests, grasslands, deserts, wetlands and oceans. A decline or extinction of a species inevitably affects its ecosystem; drastic changes in an ecosystem in turn accelerate the loss of species and genetic diversity.',
        ],
      },
      { type: 'heading', text: 'Threats to biodiversity and their causes' },
      {
        type: 'paragraph',
        text: 'Rare species unique to China include the giant panda, golden snub-nosed monkey, crested ibis, Chinese alligator, Cathaya (silver fir) and the dove tree — many of them already endangered. The main threats to biodiversity are: change and destruction of habitats (deforestation and over-hunting — the primary cause of the threat); predatory exploitation; pollution; and invasive alien species — for example water hyacinth, once introduced into China, grew out of control and crowded out native organisms. Most of the factors threatening species result from human activities.',
      },
      { type: 'heading', text: 'Conservation measures' },
      {
        type: 'list',
        items: [
          'In-situ conservation: delineating an area of land or water containing the protected species for protection and management, mainly by establishing nature reserves. In-situ conservation is the most effective measure for protecting biodiversity; a nature reserve is a "natural gene bank", a "natural laboratory" and a "living natural museum".',
          'Ex-situ conservation: moving endangered species out of their original habitats into zoos, botanical gardens, aquariums and breeding centres for endangered animals — a supplement to in-situ conservation.',
          'Establishing germplasm banks for endangered species (seed banks for plants, sperm banks for animals) to preserve precious genetic resources.',
          'Strengthening education and legal management: China has enacted the Forest Law of the PRC, the Law of the PRC on the Protection of Wildlife, the China Nature Conservation Programme and other laws and documents.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'species (物种/种): The basic unit of classification; members of a species are most closely related and can interbreed to produce fertile offspring.',
          'binomial nomenclature (双名法): The naming system of Linnaeus, in which a scientific name consists of the genus name and the specific epithet.',
          'biodiversity (生物多样性): The diversity of species, of genes and of ecosystems.',
          'genetic diversity (基因的多样性): The richness of genetic makeup within and between species — the essence of species diversity.',
          'in-situ conservation (就地保护): Protecting organisms in their original habitats, e.g. by establishing nature reserves — the most effective measure.',
          'ex-situ conservation (迁地保护): Protecting endangered species outside their original habitats, e.g. in zoos and botanical gardens.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列关于生物分类单位和等级的叙述，正确的是（　）',
        en: 'Which statement about the units and ranks of biological classification is correct?',
      },
      options: {
        zh: [
          '“科”是最基本的分类单位',
          '分类单位越大，生物之间的共同特征越多',
          '“种”是最基本的分类单位，同种生物亲缘关系最密切',
          '分类单位越小，包含的生物种类越多',
        ],
        en: [
          'The family is the basic unit of classification',
          'The larger the rank, the more features the organisms share',
          'The species is the basic unit of classification, and organisms of the same species are most closely related',
          'The smaller the rank, the more kinds of organisms it contains',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '生物分类的等级从大到小依次是界、门、纲、目、科、属、种，种是最基本的分类单位，同种生物亲缘关系最密切。分类单位越大，包含的生物种类越多、共同特征越少；分类单位越小，种类越少、共同特征越多——A、B、D 均说反了或说错了。',
        en: 'The ranks run kingdom, phylum, class, order, family, genus, species from largest to smallest; the species is the basic unit, and organisms of one species are most closely related. The larger the rank, the more kinds it contains and the fewer features they share; the smaller the rank, the fewer kinds and the more shared features — A, B and D each state this backwards or incorrectly.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '袁隆平利用野生水稻与普通栽培水稻杂交，培育出高产杂交水稻新品种。这主要是利用了（　）',
        en: 'Yuan Longping crossed wild rice with cultivated rice to breed a high-yield hybrid. This mainly made use of',
      },
      options: {
        zh: [
          '生态系统的多样性',
          '生物种类的多样性',
          '基因的多样性',
          '生物数量的多样性',
        ],
        en: [
          'ecosystem diversity',
          'species diversity',
          'genetic diversity',
          'diversity in organism numbers',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '每种生物都是一个丰富的基因库，杂交育种正是把野生水稻中的优良基因转移到栽培水稻中，利用的是基因的多样性。A、B 与育种无直接关系；“生物数量的多样性”不是生物多样性的内涵，D 错误。',
        en: 'Each species is a rich gene pool, and cross-breeding transfers desirable genes from wild rice into cultivated rice — an application of genetic diversity. A and B are not directly related to breeding; "diversity in numbers" is not a level of biodiversity (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '保护生物多样性最为有效的措施是（　）',
        en: 'The most effective measure for protecting biodiversity is',
      },
      options: {
        zh: [
          '建立自然保护区，进行就地保护',
          '把濒危动物移入动物园，进行迁地保护',
          '大量引进外来物种，丰富本地生物种类',
          '颁布法律保护濒危物种',
        ],
        en: [
          'establishing nature reserves for in-situ conservation',
          'moving endangered animals into zoos for ex-situ conservation',
          'introducing many alien species to enrich local organisms',
          'enacting laws to protect endangered species',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '就地保护能同时保护物种及其赖以生存的生态环境，是保护生物多样性最为有效的措施，建立自然保护区是其主要形式。迁地保护只是就地保护的补充（B）；盲目引进外来物种可能因缺少天敌而威胁本地生物（C）；法律保护是重要保障但不是“最为有效”的保护措施本身（D）。',
        en: 'In-situ conservation protects species together with the habitats they depend on, making it the most effective measure, with nature reserves as its main form. Ex-situ conservation is only a supplement to it (B); introducing alien species blindly may threaten native organisms for lack of natural enemies (C); legal protection is an important guarantee but is not itself the most effective conservation measure (D).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-species-definition',
      syllabus: ['0610/1.2.2'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 2,
      stem: 'A horse and a donkey can breed together to produce a mule. Explain why horses and donkeys are still classified as two different species.',
      markScheme: [
        {
          text: 'A species is defined as organisms that can reproduce to give fertile offspring',
          marks: 1,
        },
        {
          text: 'A mule is infertile / cannot itself reproduce, so the definition is not met',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '整道题的关键在“可育”二字。写“它们能交配，所以是同一物种”得零分；写“它们长得不一样”同样不得分——外表不是定义。',
        en: 'The whole answer turns on the word "fertile". Writing "they can breed, so they are one species" gets nothing, and neither does "they look different" — appearance is not the definition.',
      },
    },
    {
      id: 'ep-fish-stock-conservation',
      syllabus: ['0610/20.4.6'],
      tier: 'supplement',
      commandWord: 'Describe',
      marks: 3,
      stem: 'Describe three measures that could be used to conserve a fish stock, and explain how each one works.',
      markScheme: [
        {
          text: 'Quotas limit the mass of fish that may be caught, so fewer are removed than are replaced by breeding',
          marks: 1,
        },
        {
          text: 'A minimum mesh size lets young fish escape the nets so they survive to breed at least once',
          marks: 1,
        },
        {
          text: 'Closed seasons or protected areas allow fish to breed undisturbed, or one from: fish farming reduces pressure on wild stocks',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '每项措施都要说清其机理。“少捕鱼”是这三项共同的目的，并不能把它们区分开。',
        en: 'Every measure needs its mechanism. "Catch fewer fish" is the aim of all three and does not distinguish them.',
      },
    },
  ],
  related: ['bio-animal-001', 'bio-eco-001', 'igcse-0610-1-1-classification', 'igcse-0610-20-1-human-influences'],
};
