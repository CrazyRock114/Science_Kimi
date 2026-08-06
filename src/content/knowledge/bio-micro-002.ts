import type { KnowledgePoint } from '../types';

export const bioMicro002: KnowledgePoint = {
  id: 'bio-micro-002',
  subject: 'biology',
  title: { zh: '病毒与微生物的利用', en: 'Viruses and the Use of Microorganisms' },
  summary: {
    zh: '认识病毒的结构特点与繁殖方式，了解人类对细菌、真菌的利用——发酵食品、食品保存、医药与环境保护。',
    en: 'Learn the structure and replication of viruses, and how humans make use of bacteria and fungi — fermented foods, food preservation, medicine and environmental protection.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j8a/ch1'],
    igcse: ['0610/1', '0610/21'],
  },
  keywords: {
    zh: ['病毒', '蛋白质外壳', '遗传物质', '寄生', '噬菌体', '发酵', '酵母菌', '乳酸菌', '抗生素', '食品保存'],
    en: ['virus', 'protein coat', 'genetic material', 'parasitism', 'bacteriophage', 'fermentation', 'yeast', 'lactic acid bacteria', 'antibiotic', 'food preservation'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '描述病毒的结构特点：没有细胞结构，由蛋白质外壳和内部的遗传物质组成；说出病毒的种类和繁殖方式。',
          '举例说明病毒与人类生活的关系，辩证看待病毒的“害”与“利”。',
          '举例说出细菌、真菌在食品制作、食品保存、医药和环境保护等方面的应用，解释发酵和防腐的原理。',
        ],
      },
      { type: 'heading', text: '病毒的发现与大小' },
      {
        type: 'paragraph',
        text: '19 世纪末，科学家伊万诺夫斯基在研究烟草花叶病时发现，致病因子比细菌还小，能通过细菌过滤器，当时称之为“滤过性病毒”。病毒的个体非常微小，比细菌小得多，只能用纳米（百万分之一毫米）来计量，需要借助电子显微镜才能观察到。',
      },
      { type: 'heading', text: '病毒的结构与种类' },
      {
        type: 'list',
        items: [
          '病毒没有细胞结构，由蛋白质外壳和内部的遗传物质（核酸）组成，是结构最简单的生物类群。',
          '病毒不能独立生活，必须寄生在其他生物的活细胞内才能进行生命活动；离开活细胞，通常会变成病毒颗粒（结晶体），不具有生命活动的特征，一旦侵入活细胞又能恢复生命活动。',
          '根据寄生的细胞不同，病毒分为三类：专门寄生在人和动物细胞里的动物病毒（如流感病毒、艾滋病病毒）；专门寄生在植物细胞里的植物病毒（如烟草花叶病毒）；专门寄生在细菌细胞里的细菌病毒，也叫噬菌体。',
        ],
      },
      { type: 'heading', text: '病毒的繁殖及其与人类的关系' },
      {
        type: 'paragraph',
        text: '病毒只能寄生在活细胞里，靠自己的遗传物质中的遗传信息，利用寄主细胞内的物质，制造出新的病毒，这种繁殖方式叫自我复制。新生成的病毒又可以感染其他活细胞。病毒与人类关系密切：一方面，许多疾病由病毒引起，如流行性感冒、肝炎、手足口病、艾滋病等，严重威胁人体健康；另一方面，人类也利用病毒造福自身——用减毒或灭活的病毒制成疫苗预防疾病，用噬菌体治疗某些细菌性疾病，利用病毒携带动植物基因进行基因工程研究。',
      },
      { type: 'heading', text: '发酵：微生物与食品制作' },
      {
        type: 'paragraph',
        text: '人类对细菌和真菌的利用，最常见的是发酵技术——利用微生物在适宜的条件下把有机物转化成人类所需的产品。酵母菌在有氧时大量繁殖，在无氧时进行酒精发酵，把葡萄糖分解为酒精和二氧化碳：',
      },
      { type: 'formula', latex: '\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{酵母菌}} 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2} + \\text{少量能量}', caption: '酒精发酵：葡萄糖在酵母菌作用下分解为酒精和二氧化碳' },
      {
        type: 'list',
        items: [
          '做馒头、面包时，酵母菌产生的二氧化碳使面团中形成许多小孔，馒头膨大松软；酿酒则利用产生的酒精。',
          '乳酸菌在无氧条件下把葡萄糖转化为乳酸，可用于制作酸奶、泡菜；制醋利用醋酸菌；制酱、腐乳则利用多种霉菌。',
          '发酵制作食品要提供适宜的温度，并防止杂菌污染。',
        ],
      },
      { type: 'heading', text: '食品保存：防腐的原理' },
      {
        type: 'paragraph',
        text: '食品腐败主要是由细菌和真菌引起的，这些微生物从食品中获得有机物，并在其中生长繁殖，导致食品腐烂。防腐的原理就是把食品内的细菌和真菌杀死或抑制它们的生长和繁殖。常用的保存方法有：巴氏消毒法和高温灭菌（杀死微生物）、低温冷藏冷冻（抑制生长繁殖）、脱水和晒制烟熏（减少水分）、腌制和糖渍（高浓度溶液使微生物失水）、真空包装（隔绝空气）、添加防腐剂等。',
      },
      { type: 'heading', text: '微生物在医药与环境保护中的利用' },
      {
        type: 'list',
        items: [
          '抗生素：有些真菌能产生杀死或抑制某些致病细菌的物质，称为抗生素，如青霉产生的青霉素。抗生素只能治疗细菌性疾病，对病毒引起的疾病无效；滥用抗生素会使细菌产生耐药性，必须遵医嘱使用。',
          '生产药品：把控制合成胰岛素的基因转入大肠杆菌内，利用大肠杆菌繁殖快的特点大量生产胰岛素。',
          '环境保护：一些杆菌和甲烷菌在无氧条件下分解有机物产生甲烷（沼气），可用于照明、取暖、发电；细菌还能分解污水中的有机物，使污水得到净化。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'virus（病毒）：没有细胞结构，由蛋白质外壳和内部遗传物质组成，必须寄生在活细胞内的生物。',
          'bacteriophage（噬菌体）：专门寄生在细菌细胞内的病毒。',
          'fermentation（发酵）：利用微生物把有机物转化为人类所需产品的过程，如酒精发酵、乳酸发酵。',
          'antibiotic（抗生素）：由某些真菌或细菌产生、能杀死或抑制致病细菌的物质，如青霉素。',
          'vaccine（疫苗）：用减毒或灭活的病原体制成的生物制品，能刺激人体产生免疫力。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Describe the structure of viruses — no cellular structure, just a protein coat enclosing genetic material — and state their types and mode of reproduction.',
          'Give examples of how viruses relate to human life, weighing their harm against their uses.',
          'Describe how bacteria and fungi are used in food production, food preservation, medicine and environmental protection, and explain the principles of fermentation and preservation.',
        ],
      },
      { type: 'heading', text: 'Discovery and size of viruses' },
      {
        type: 'paragraph',
        text: 'At the end of the 19th century, while studying tobacco mosaic disease, the scientist Ivanovsky found that the causal agent was smaller than bacteria and could pass through a bacteria-proof filter; it was called a "filterable virus". Viruses are extremely small — far smaller than bacteria — measured in nanometres (millionths of a millimetre) and visible only under an electron microscope.',
      },
      { type: 'heading', text: 'Structure and types of viruses' },
      {
        type: 'list',
        items: [
          'A virus has no cellular structure; it consists of a protein coat enclosing genetic material (nucleic acid) — the structurally simplest kind of biological agent.',
          'Viruses cannot live independently: they must parasitise the living cells of other organisms. Outside a living cell a virus usually becomes an inert particle (crystal) showing no signs of life, but it resumes activity once it enters a host cell.',
          'By the cells they infect, viruses fall into three groups: animal viruses infecting human and animal cells (influenza virus, HIV); plant viruses infecting plant cells (tobacco mosaic virus); and bacterial viruses, called bacteriophages, that infect bacteria.',
        ],
      },
      { type: 'heading', text: 'How viruses reproduce and relate to us' },
      {
        type: 'paragraph',
        text: 'A virus can only live inside a living cell. Following the genetic information in its own genetic material, it uses the substances inside the host cell to make new viruses — a process called self-replication — and the new viruses infect other cells. Viruses are closely bound up with human life. On the one hand, many diseases are caused by viruses, such as influenza, hepatitis, hand-foot-and-mouth disease and AIDS, seriously threatening human health. On the other hand, humans use viruses for good: weakened or inactivated viruses are made into vaccines to prevent disease, bacteriophages are used to treat certain bacterial diseases, and viruses are used to carry genes in genetic engineering.',
      },
      { type: 'heading', text: 'Fermentation: microbes in food production' },
      {
        type: 'paragraph',
        text: 'The most common human use of bacteria and fungi is fermentation — using microorganisms under suitable conditions to convert organic matter into products people need. Yeast multiplies rapidly in the presence of oxygen, and carries out alcoholic fermentation without it, breaking glucose down into ethanol and carbon dioxide:',
      },
      { type: 'formula', latex: '\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{yeast}} 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2} + \\text{a little energy}', caption: 'Alcoholic fermentation: glucose is broken down by yeast into ethanol and carbon dioxide' },
      {
        type: 'list',
        items: [
          'In making steamed bread and leavened bread, the carbon dioxide produced by yeast forms many small holes in the dough, making it rise and turn soft; brewing makes use of the ethanol instead.',
          'Lactic acid bacteria convert glucose into lactic acid without oxygen, used to make yoghurt and pickled vegetables; vinegar making uses acetic acid bacteria; soy pastes and fermented bean curd use various moulds.',
          'Fermentation requires a suitable temperature and protection from contamination by unwanted microbes.',
        ],
      },
      { type: 'heading', text: 'Food preservation: the principle of preventing decay' },
      {
        type: 'paragraph',
        text: 'Food spoilage is caused mainly by bacteria and fungi, which obtain organic matter from the food and grow and multiply in it. Preservation works by either killing the bacteria and fungi in the food or inhibiting their growth and reproduction. Common methods include pasteurisation and high-temperature sterilisation (killing microbes), refrigeration and freezing (slowing growth), dehydration, drying and smoking (removing water), salting and sugaring (concentrated solutions draw water out of microbes), vacuum packing (excluding air), and adding preservatives.',
      },
      { type: 'heading', text: 'Microbes in medicine and environmental protection' },
      {
        type: 'list',
        items: [
          'Antibiotics: some fungi produce substances that kill or inhibit certain disease-causing bacteria, called antibiotics — for example penicillin from Penicillium. Antibiotics work only against bacterial diseases, not viral ones; their misuse leads to bacterial resistance, so they must be taken as prescribed.',
          'Producing medicines: the gene controlling insulin synthesis is transferred into Escherichia coli, whose rapid reproduction is then used to mass-produce insulin.',
          'Environmental protection: some bacilli and methanogens break down organic matter without oxygen to release methane (biogas), usable for lighting, heating and power generation; bacteria also decompose organic matter in sewage, purifying waste water.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'virus (病毒): A biological agent with no cellular structure, made of a protein coat and genetic material, that must parasitise living cells.',
          'bacteriophage (噬菌体): A virus that specifically infects bacterial cells.',
          'fermentation (发酵): The use of microorganisms to convert organic matter into useful products, such as alcoholic and lactic fermentation.',
          'antibiotic (抗生素): A substance produced by certain fungi or bacteria that kills or inhibits pathogenic bacteria, such as penicillin.',
          'vaccine (疫苗): A preparation of weakened or inactivated pathogens that stimulates the body to develop immunity.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列关于病毒的叙述，正确的是（　）',
        en: 'Which statement about viruses is correct?',
      },
      options: {
        zh: [
          '病毒是单细胞生物，能独立生活',
          '病毒没有细胞结构，必须寄生在活细胞内',
          '病毒通过分裂方式繁殖后代',
          '病毒对抗生素敏感，可用抗生素治疗病毒性疾病',
        ],
        en: [
          'A virus is a single-celled organism that can live independently',
          'A virus has no cellular structure and must parasitise living cells',
          'Viruses reproduce by binary fission',
          'Viruses are sensitive to antibiotics, which can treat viral diseases',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '病毒没有细胞结构，只由蛋白质外壳和内部的遗传物质组成，不能独立生活，必须寄生在活细胞内，A 错误、B 正确。病毒靠自我复制繁殖，分裂生殖是细菌的方式，C 错误；抗生素只对细菌起作用，对病毒无效，D 错误。',
        en: 'A virus has no cellular structure — only a protein coat enclosing genetic material — and cannot live independently, so it must parasitise living cells (A wrong, B correct). Viruses reproduce by self-replication; fission is the bacterial method (C wrong). Antibiotics act only on bacteria, never on viruses (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '制作馒头时，面团会膨大松软，其原因是（　）',
        en: 'When making steamed bread, the dough rises and turns soft because',
      },
      options: {
        zh: [
          '乳酸菌把葡萄糖分解成乳酸',
          '酵母菌呼吸作用产生的二氧化碳在面团中形成许多小孔',
          '酵母菌把面粉中的淀粉直接分解成酒精',
          '醋酸菌发酵产生了醋酸',
        ],
        en: [
          'lactic acid bacteria break glucose down into lactic acid',
          'carbon dioxide released by yeast respiration forms many small holes in the dough',
          'yeast breaks the starch in flour directly down into ethanol',
          'acetic acid bacteria ferment to produce acetic acid',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '制作馒头利用的是酵母菌，它分解葡萄糖产生的二氧化碳气体在面团中形成许多小孔，使馒头膨大松软。乳酸菌用于制作酸奶和泡菜（A 错）；酒精不是做馒头的目的，且酵母菌分解的是葡萄糖而非直接分解淀粉（C 错）；醋酸菌用于制醋（D 错）。',
        en: 'Steamed bread uses yeast: the carbon dioxide it releases when breaking down glucose forms many small holes in the dough, making it rise and soften. Lactic acid bacteria are used for yoghurt and pickles (A wrong); ethanol is not the goal in bread-making, and yeast acts on glucose rather than directly on starch (C wrong); acetic acid bacteria are for vinegar (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '把食品放在冰箱中冷藏可以保存较长时间，其主要原因是（　）',
        en: 'Food keeps much longer in a refrigerator mainly because',
      },
      options: {
        zh: [
          '低温杀死了食品中所有的细菌和真菌',
          '低温抑制了细菌和真菌的生长和繁殖',
          '冰箱中缺少空气，微生物无法生存',
          '低温使食品中的水分全部结冰，微生物获得不到营养',
        ],
        en: [
          'the low temperature kills all bacteria and fungi in the food',
          'the low temperature inhibits the growth and reproduction of bacteria and fungi',
          'there is no air in the refrigerator, so microbes cannot survive',
          'all the water in the food freezes, so microbes get no nutrients',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '防腐的原理是杀死微生物或抑制其生长繁殖。冰箱的低温只是减慢了细菌和真菌的生长繁殖速度，并不能把它们全部杀死，取出回温后微生物仍可繁殖，A 错误、B 正确。冰箱内并非无氧环境，C 错误；冷藏温度下食品中的水分并未全部结冰，D 错误。',
        en: 'Preservation works by killing microbes or inhibiting their growth. Refrigeration merely slows the growth and reproduction of bacteria and fungi — it does not kill them all, and they multiply again once the food warms up (A wrong, B correct). A refrigerator is not air-free (C wrong); at refrigeration temperatures the water in food does not all freeze (D wrong).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-yeast-uses',
      syllabus: ['0610/21.2.1', '0610/21.2.2'],
      tier: 'core',
      commandWord: 'Compare',
      marks: 3,
      stem: 'Yeast is used in both brewing and bread-making. Compare how the same reaction is used differently in each.',
      markScheme: [
        {
          text: 'In both, yeast respires anaerobically, converting glucose into ethanol and carbon dioxide',
          marks: 1,
        },
        {
          text: 'In brewing the ethanol is the useful product and the carbon dioxide is usually allowed to escape',
          marks: 1,
        },
        {
          text: 'In bread-making the carbon dioxide is the useful product — it is trapped in the dough and makes it rise — while the ethanol evaporates during baking',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '同一个反应、两种用途：关键要答出“哪个产物被利用、哪个被放弃”，只说“都产生酒精和二氧化碳”只得第一分。',
        en: 'One reaction, two uses: the key is stating which product is used and which is discarded — saying only "both produce ethanol and carbon dioxide" earns just the first mark.',
      },
    },
  ],
  related: ['bio-micro-001', 'igcse-0610-21-1-biotechnology', 'igcse-0610-10-1-disease-immunity'],
};
