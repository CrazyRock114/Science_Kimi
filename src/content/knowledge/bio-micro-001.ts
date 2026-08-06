import type { KnowledgePoint } from '../types';

export const bioMicro001: KnowledgePoint = {
  id: 'bio-micro-001',
  subject: 'biology',
  title: { zh: '细菌与真菌', en: 'Bacteria and Fungi' },
  summary: {
    zh: '认识细菌和真菌的形态结构、生殖方式及其区别，理解它们作为分解者参与物质循环以及与人类生活的密切关系。',
    en: 'Learn the shapes, structures and reproduction of bacteria and fungi and the differences between them, and understand their role as decomposers in nutrient cycling and their close relationship with human life.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j8a/ch1'],
    igcse: ['0610/1', '0610/2'],
  },
  keywords: {
    zh: ['细菌', '真菌', '原核生物', '真核生物', '分裂生殖', '孢子', '芽孢', '分解者', '菌落'],
    en: ['bacteria', 'fungi', 'prokaryote', 'eukaryote', 'binary fission', 'spore', 'endospore', 'decomposer', 'colony'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '描述细菌、真菌的形态和结构特点，说出二者最主要的区别：有无成形的细胞核。',
          '说出细菌分裂生殖、真菌孢子生殖的方式，理解芽孢是细菌的休眠体而非生殖细胞。',
          '举例说明细菌和真菌作为分解者参与物质循环，以及它们与人类生活的关系。',
        ],
      },
      { type: 'heading', text: '细菌的形态与结构' },
      {
        type: 'paragraph',
        text: '细菌个体十分微小，都是单细胞生物，要用高倍显微镜或电子显微镜才能观察到。根据外部形态的不同，细菌大致可以分为球菌、杆菌和螺旋菌三类。细菌具有细胞壁、细胞膜、细胞质等基本结构，但没有成形的细胞核，只有 DNA 集中的区域，这样的生物称为原核生物。有些细菌还有特殊结构：荚膜起保护作用，鞭毛有助于运动。细菌细胞内没有叶绿体，大多数细菌只能利用现成的有机物生活，是生态系统中的分解者。',
      },
      { type: 'heading', text: '细菌的生殖与芽孢' },
      {
        type: 'paragraph',
        text: '细菌是靠分裂进行生殖的：一个细菌分裂为两个，在环境适宜时不到半小时就能分裂一次，繁殖速度非常快。若开始时细菌数为 N₀，分裂 n 次后的细菌数目为：',
      },
      { type: 'formula', latex: 'N = N_0 \\times 2^n', caption: '细菌分裂 n 次后的数目（假设全部分裂且全部存活）' },
      {
        type: 'paragraph',
        text: '有些细菌在生长发育后期，个体缩小、细胞壁增厚，形成芽孢。芽孢是细菌的休眠体，对干旱、严寒、高温等不良环境有较强的抵抗能力；环境适宜时，芽孢又能萌发成一个细菌。芽孢不是生殖细胞——一个芽孢萌发后只形成一个细菌，数目并没有增多。手术器械、罐装食品的严格灭菌，就是要杀死可能存在的芽孢。',
      },
      { type: 'heading', text: '真菌的形态与结构' },
      {
        type: 'list',
        items: [
          '真菌有单细胞的（如酵母菌），也有多细胞的（如霉菌和蘑菇）。酵母菌细胞有细胞壁、细胞膜、细胞质、细胞核和液泡。',
          '青霉、曲霉等霉菌和蘑菇的菌体由许多细胞连接起来的菌丝构成；蘑菇地上部分的菌丝形成子实体。',
          '真菌细胞里都有成形的细胞核，属于真核生物；细胞内没有叶绿体，只能利用现成的有机物生活，营养方式为异养（腐生或寄生）。',
        ],
      },
      { type: 'heading', text: '真菌的生殖' },
      {
        type: 'paragraph',
        text: '真菌主要通过产生大量的孢子来繁殖后代。青霉直立菌丝的顶端生有青绿色的孢子，呈扫帚状排列；孢子轻小，可以飘散到各处，在适宜的环境条件下发育成新个体。蘑菇也是靠孢子繁殖的。酵母菌在环境适宜时还能进行出芽生殖：细胞上长出芽体，芽体长大后脱离母体，成为新个体。',
      },
      { type: 'heading', text: '细菌和真菌在自然界中的作用' },
      {
        type: 'list',
        items: [
          '作为分解者参与物质循环：腐生的细菌和真菌把动植物遗体、遗物中的有机物分解成二氧化碳、水和无机盐，这些物质又能被植物吸收利用，进而制造有机物。',
          '引起动植物和人患病：如链球菌使人患扁桃体炎、猩红热；一些真菌寄生在人体表面引起手癣、足癣；棉花枯萎病、小麦叶锈病等植物疾病也由真菌引起。',
          '与动植物共生：地衣是真菌与藻类共生形成的，藻类通过光合作用为真菌提供有机物，真菌为藻类提供水和无机盐；豆科植物的根瘤中，根瘤菌能将空气中的氮转化为植物能吸收的含氮物质。',
        ],
      },
      { type: 'heading', text: '细菌与真菌的比较' },
      {
        type: 'list',
        items: [
          '细胞核：细菌没有成形的细胞核（原核生物）；真菌有成形的细胞核（真核生物）。',
          '个体：细菌都是单细胞；真菌有单细胞也有多细胞。',
          '生殖：细菌进行分裂生殖；真菌主要进行孢子生殖，酵母菌还能出芽生殖。',
          '营养：两者细胞内都没有叶绿体，大多数都利用现成的有机物（异养）。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'prokaryote（原核生物）：细胞内没有成形细胞核的生物，如细菌。',
          'eukaryote（真核生物）：细胞内有成形细胞核的生物，如真菌、动植物。',
          'binary fission（分裂生殖）：一个细菌细胞分裂形成两个子细胞的生殖方式。',
          'endospore（芽孢）：某些细菌在不良环境下形成的休眠体，不是生殖细胞。',
          'spore（孢子）：真菌等产生的生殖细胞，在适宜条件下能发育成新个体。',
          'decomposer（分解者）：把动植物遗体中的有机物分解为无机物的生物，主要是腐生细菌和真菌。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Describe the shapes and structures of bacteria and fungi, and state the key difference: whether the cell has a true nucleus.',
          'State that bacteria reproduce by binary fission and fungi by spores, and understand that an endospore is a dormant stage, not a reproductive cell.',
          'Give examples showing how bacteria and fungi act as decomposers in nutrient cycling, and how they relate to human life.',
        ],
      },
      { type: 'heading', text: 'Shapes and structure of bacteria' },
      {
        type: 'paragraph',
        text: 'Bacteria are extremely small single-celled organisms, visible only under high-power or electron microscopes. By external shape they fall into three broad types: cocci (spherical), bacilli (rod-shaped) and spirilla (spiral). A bacterium has a cell wall, a cell membrane and cytoplasm, but no true nucleus — only a region where the DNA is concentrated — which makes bacteria prokaryotes. Some have special structures: a protective capsule, or flagella that help movement. Bacterial cells contain no chloroplasts, so most bacteria must live on ready-made organic matter and serve as decomposers in ecosystems.',
      },
      { type: 'heading', text: 'Bacterial reproduction and endospores' },
      {
        type: 'paragraph',
        text: 'Bacteria reproduce by fission: one cell splits into two, and under favourable conditions this can happen in less than half an hour, so numbers grow extremely fast. Starting from N₀ cells, the number after n rounds of division is:',
      },
      { type: 'formula', latex: 'N = N_0 \\times 2^n', caption: 'Number of bacteria after n divisions (assuming all divide and all survive)' },
      {
        type: 'paragraph',
        text: 'Late in development some bacteria shrink and thicken their cell walls to form endospores. An endospore is a dormant stage that strongly resists drought, cold and heat; when conditions improve it germinates into one bacterium. An endospore is not a reproductive cell — one endospore germinates into only one bacterium, so numbers do not increase. The strict sterilisation of surgical instruments and canned food is aimed precisely at killing any endospores present.',
      },
      { type: 'heading', text: 'Shapes and structure of fungi' },
      {
        type: 'list',
        items: [
          'Fungi include single-celled forms (such as yeast) and multicellular forms (such as moulds and mushrooms). A yeast cell has a cell wall, cell membrane, cytoplasm, a nucleus and a vacuole.',
          'The bodies of moulds such as Penicillium and Aspergillus, and of mushrooms, are made of hyphae — filaments of connected cells; in mushrooms the aerial hyphae form the fruiting body.',
          'Fungal cells all have a true nucleus, so fungi are eukaryotes; they contain no chloroplasts and must live on ready-made organic matter — heterotrophic nutrition (saprophytic or parasitic).',
        ],
      },
      { type: 'heading', text: 'Reproduction of fungi' },
      {
        type: 'paragraph',
        text: 'Fungi reproduce mainly by producing large numbers of spores. The tips of the aerial hyphae of Penicillium bear green spores arranged like a broom; the tiny, light spores drift everywhere and develop into new individuals under suitable conditions. Mushrooms also reproduce by spores. Under favourable conditions yeast can additionally reproduce by budding: a bud grows out of the cell, enlarges and finally detaches as a new individual.',
      },
      { type: 'heading', text: 'Bacteria and fungi in nature' },
      {
        type: 'list',
        items: [
          'Decomposers in nutrient cycling: saprophytic bacteria and fungi break down the organic matter of dead organisms and wastes into carbon dioxide, water and inorganic salts, which plants absorb and use to make new organic matter.',
          'Causing disease in animals, plants and humans: Streptococcus causes tonsillitis and scarlet fever; some fungi parasitise human skin causing ringworm of the hands and feet; plant diseases such as cotton wilt and wheat leaf rust are also caused by fungi.',
          'Living in symbiosis: a lichen is a partnership of a fungus and an alga — the alga supplies organic matter by photosynthesis while the fungus provides water and mineral salts; in the root nodules of legumes, Rhizobium converts atmospheric nitrogen into nitrogen compounds the plant can absorb.',
        ],
      },
      { type: 'heading', text: 'Bacteria versus fungi' },
      {
        type: 'list',
        items: [
          'Nucleus: bacteria have no true nucleus (prokaryotes); fungi have a true nucleus (eukaryotes).',
          'Organisation: all bacteria are single-celled; fungi may be single-celled or multicellular.',
          'Reproduction: bacteria divide by fission; fungi reproduce mainly by spores, and yeast can also bud.',
          'Nutrition: neither has chloroplasts, and most live on ready-made organic matter (heterotrophic).',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'prokaryote (原核生物): An organism whose cells have no true nucleus, such as bacteria.',
          'eukaryote (真核生物): An organism whose cells have a true nucleus, such as fungi, plants and animals.',
          'binary fission (分裂生殖): Asexual reproduction in which one bacterial cell splits into two daughter cells.',
          'endospore (芽孢): A dormant, resistant stage formed by some bacteria in adverse conditions — not a reproductive cell.',
          'spore (孢子): A reproductive cell produced by fungi that can develop into a new individual under suitable conditions.',
          'decomposer (分解者): An organism, mainly saprophytic bacteria and fungi, that breaks down organic matter in dead bodies into inorganic substances.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '细菌细胞与真菌细胞在结构上最主要的区别是（　）',
        en: 'The most important structural difference between a bacterial cell and a fungal cell is that',
      },
      options: {
        zh: [
          '细菌细胞没有细胞壁',
          '细菌细胞没有成形的细胞核',
          '细菌细胞没有细胞膜',
          '细菌细胞是多细胞的',
        ],
        en: [
          'the bacterial cell has no cell wall',
          'the bacterial cell has no true nucleus',
          'the bacterial cell has no cell membrane',
          'bacteria are multicellular',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '细菌只有 DNA 集中的区域，没有成形的细胞核，属于原核生物；真菌有成形的细胞核，属于真核生物，这是二者最主要的区别。细菌也有细胞壁和细胞膜，A、C 错误；细菌都是单细胞生物，D 错误。',
        en: 'A bacterium only has a region of concentrated DNA and no true nucleus — it is a prokaryote — while a fungus has a true nucleus and is a eukaryote; this is the key difference. Bacteria do have cell walls and membranes (A and C wrong); all bacteria are single-celled (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列关于芽孢的叙述，正确的是（　）',
        en: 'Which statement about bacterial endospores is correct?',
      },
      options: {
        zh: [
          '芽孢是细菌的生殖细胞，能萌发成多个细菌',
          '芽孢是细菌的休眠体，对不良环境有较强的抵抗能力',
          '所有细菌都能形成芽孢',
          '芽孢在适宜环境中进行分裂生殖',
        ],
        en: [
          'An endospore is a reproductive cell that germinates into many bacteria',
          'An endospore is a dormant stage of a bacterium with strong resistance to adverse conditions',
          'All bacteria can form endospores',
          'Endospores reproduce by fission in favourable conditions',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '芽孢是有些细菌在生长发育后期形成的休眠体，对干旱、高温等不良环境抵抗能力强，环境适宜时萌发成一个细菌。芽孢不是生殖细胞，一个芽孢萌发只形成一个细菌，数目不增多，A 错误；只有部分细菌能形成芽孢，C 错误；芽孢本身不进行生殖，D 错误。',
        en: 'An endospore is a dormant stage formed late in development by some bacteria; it strongly resists drought and heat and germinates into one bacterium when conditions improve. It is not a reproductive cell — one endospore gives only one bacterium, so numbers do not increase (A wrong); only some bacteria form endospores (C wrong); the endospore itself does not reproduce (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '在生态系统的物质循环中，腐生细菌和真菌能把动植物遗体分解成（　）',
        en: 'In the nutrient cycling of an ecosystem, saprophytic bacteria and fungi break down dead organisms into',
      },
      options: {
        zh: [
          '二氧化碳、水和无机盐',
          '氧气和有机物',
          '二氧化碳和有机物',
          '水和葡萄糖',
        ],
        en: [
          'carbon dioxide, water and inorganic salts',
          'oxygen and organic matter',
          'carbon dioxide and organic matter',
          'water and glucose',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '腐生细菌和真菌作为分解者，把遗体中的有机物分解为二氧化碳、水和无机盐，归还到环境中供植物重新利用，从而实现物质循环。B、C、D 中都含有有机物或氧气，不符合“分解为无机物”的实质。',
        en: 'As decomposers, saprophytic bacteria and fungi break the organic matter of dead bodies down into carbon dioxide, water and inorganic salts, returning them to the environment for plants to reuse — this closes the nutrient cycle. B, C and D each contain organic matter or oxygen, contradicting the essence of "breaking down into inorganic substances".',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-kingdom-identification',
      syllabus: ['0610/1.3.4'],
      tier: 'supplement',
      commandWord: 'Suggest',
      marks: 3,
      stem: 'A single-celled organism found in pond water photosynthesises and has a cell wall. Suggest what further observations would let you decide whether it belongs to the Prokaryote, Protoctist or Plant kingdom.',
      markScheme: [
        {
          text: 'Look for a nucleus — if there is none it is a prokaryote, whatever else it does',
          marks: 1,
        },
        {
          text: 'If a nucleus is present, the organism is single-celled so it is a protoctist rather than a plant',
          marks: 1,
        },
        {
          text: 'Check whether the cell wall is made of cellulose, and whether the chloroplasts are of the kind found in plant cells',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '光合作用是干扰项——蓝细菌能光合作用，却是原核生物。有无细胞核，永远是“五界”类问题要问的第一个问题。',
        en: 'Photosynthesis is a red herring — cyanobacteria photosynthesise and are prokaryotes. Presence or absence of a nucleus is the first question in every kingdom problem.',
      },
    },
  ],
  related: ['bio-micro-002', 'bio-cell-001', 'igcse-0610-1-1-classification'],
};
