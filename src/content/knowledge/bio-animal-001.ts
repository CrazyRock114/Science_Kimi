import type { KnowledgePoint } from '../types';

export const bioAnimal001: KnowledgePoint = {
  id: 'bio-animal-001',
  subject: 'biology',
  title: { zh: '无脊椎动物的主要类群', en: 'Major Groups of Invertebrates' },
  summary: {
    zh: '按体内有无脊柱区分无脊椎动物与脊椎动物，掌握腔肠、扁形、线形、环节、软体和节肢动物的主要特征及代表动物。',
    en: 'Distinguish invertebrates from vertebrates by the presence of a backbone, and master the key features and representative animals of coelenterates (cnidarians), flatworms, nematodes, annelids, molluscs and arthropods.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j8a/ch1'],
    igcse: ['0610/1'],
  },
  keywords: {
    zh: ['无脊椎动物', '腔肠动物', '扁形动物', '线形动物', '环节动物', '软体动物', '节肢动物', '外骨骼', '体节', '外套膜'],
    en: ['invertebrate', 'cnidarian', 'flatworm', 'nematode', 'annelid', 'mollusc', 'arthropod', 'exoskeleton', 'segmentation', 'mantle'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出脊椎动物与无脊椎动物的区别：体内有无由脊椎骨组成的脊柱。',
          '概述腔肠动物、扁形动物、线形动物、环节动物、软体动物、节肢动物的主要特征，并各举出代表动物。',
          '说明各类群的结构特征与其生活方式的适应关系，体会动物进化由简单到复杂的大致趋势。',
        ],
      },
      { type: 'heading', text: '脊椎动物与无脊椎动物' },
      {
        type: 'paragraph',
        text: '根据动物体内有没有由脊椎骨组成的脊柱，可以把动物分为两大类：无脊椎动物和脊椎动物。无脊椎动物体内没有脊柱，约占已知动物种类总数的 95%，包括腔肠动物、扁形动物、线形动物、环节动物、软体动物和节肢动物等类群；鱼、两栖动物、爬行动物、鸟和哺乳动物体内都有脊柱，属于脊椎动物。',
      },
      { type: 'heading', text: '腔肠动物与扁形动物' },
      {
        type: 'list',
        items: [
          '腔肠动物：身体呈辐射对称，体表有刺细胞（腔肠动物特有的攻击和防御利器），有口无肛门，食物由口进入消化腔，残渣仍由口排出。代表：水螅、海蜇、海葵、珊瑚虫。',
          '扁形动物：身体呈两侧对称，背腹扁平，有口无肛门。大多数扁形动物寄生在人或动物体内，如血吸虫、绦虫；涡虫则自由生活在淡水中。两侧对称使身体有了前后、左右、背腹之分，运动更准确而有效。',
        ],
      },
      { type: 'heading', text: '线形动物与环节动物' },
      {
        type: 'list',
        items: [
          '线形动物：身体细长，呈圆柱形；体表有角质层，能抵抗消化液的侵蚀；有口有肛门。代表：蛔虫、蛲虫、钩虫。蛔虫寄生在人的小肠里，体表角质层发达是适应寄生生活的特征。',
          '环节动物：身体呈圆筒形，由许多彼此相似的体节组成；靠刚毛或疣足辅助运动。代表：蚯蚓、沙蚕、水蛭。体节的出现使躯体运动更加灵活。蚯蚓靠湿润的体壁呼吸，以刚毛配合肌肉蠕动。',
        ],
      },
      { type: 'heading', text: '软体动物' },
      {
        type: 'paragraph',
        text: '软体动物身体柔软，表面包裹着外套膜，大多具有由外套膜分泌物形成的贝壳；运动器官是足。代表：河蚌、扇贝、蜗牛、乌贼。乌贼的贝壳已退化成内壳（海螵蛸），蜗牛的足是腹足，河蚌的足是斧足。软体动物很多种类与人类关系密切：可食用、药用，但钉螺是日本血吸虫的中间寄主，能传播血吸虫病。',
      },
      { type: 'heading', text: '节肢动物：最大的动物类群' },
      {
        type: 'list',
        items: [
          '节肢动物是动物界中种类最多、数量最大、分布最广的类群，体表有坚韧的外骨骼；身体和附肢都分节。',
          '外骨骼能保护和防止体内水分的蒸发，但它不能随身体生长而生长，所以节肢动物生长发育过程中有蜕皮现象。',
          '昆虫是节肢动物中种类最多的一类：身体分为头、胸、腹三部分，有一对触角、三对足，一般有两对翅。代表：蝗虫、蜜蜂、蝴蝶、蚊、蝇。',
          '节肢动物还包括蛛形类（蜘蛛、蝎，四对足）、多足类（蜈蚣、马陆）和甲壳类（虾、蟹，多生活在水中，用鳃呼吸）等。',
        ],
      },
      { type: 'heading', text: '类群比较与进化趋势' },
      {
        type: 'paragraph',
        text: '从腔肠动物到节肢动物，身体结构大致呈现由简单到复杂的变化：体形由辐射对称发展为两侧对称；消化由有口无肛门发展为有口有肛门；身体由不分节到分节（环节动物首次出现体节，节肢动物身体分部、附肢分节，运动更灵活）。这些特征的比较说明各类群之间存在由低等到高等、由水生到陆生的大致进化顺序。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'invertebrate（无脊椎动物）：体内没有由脊椎骨组成脊柱的动物。',
          'radial symmetry（辐射对称）：经过身体纵轴有多个切面能把身体分成对称的两部分，如水螅。',
          'bilateral symmetry（两侧对称）：经过身体纵轴只有一个切面能把身体分成对称的两部分，如涡虫。',
          'segmentation（体节现象）：身体由许多彼此相似的体节组成，如蚯蚓。',
          'mantle（外套膜）：软体动物身体表面包裹肉质膜，其分泌物可形成贝壳。',
          'exoskeleton（外骨骼）：节肢动物体表坚韧的几丁质结构，起保护和防止水分蒸发的作用。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'State the difference between vertebrates and invertebrates: the presence or absence of a backbone made of vertebrae.',
          'Outline the main features of cnidarians, flatworms, nematodes, annelids, molluscs and arthropods, with a representative animal for each group.',
          'Relate the structural features of each group to its way of life, and appreciate the general trend from simple to complex body plans.',
        ],
      },
      { type: 'heading', text: 'Vertebrates and invertebrates' },
      {
        type: 'paragraph',
        text: 'Animals are divided into two large groups according to whether the body contains a backbone made of vertebrae. Invertebrates have no backbone and make up about 95% of all known animal species; they include cnidarians, flatworms, nematodes, annelids, molluscs and arthropods. Fish, amphibians, reptiles, birds and mammals all possess a backbone and are vertebrates.',
      },
      { type: 'heading', text: 'Cnidarians and flatworms' },
      {
        type: 'list',
        items: [
          'Cnidarians: the body shows radial symmetry, bears stinging cells (unique to this group, used in attack and defence), and has a mouth but no anus — food enters the gastrovascular cavity through the mouth and undigested remains leave the same way. Examples: Hydra, jellyfish, sea anemones, corals.',
          'Flatworms: the body shows bilateral symmetry and is dorsoventrally flattened, with a mouth but no anus. Most flatworms are parasites of humans or other animals, such as blood flukes and tapeworms; planarians live freely in fresh water. Bilateral symmetry gives the body distinct front–rear, left–right and dorsal–ventral axes, making movement more directed and effective.',
        ],
      },
      { type: 'heading', text: 'Nematodes and annelids' },
      {
        type: 'list',
        items: [
          'Nematodes (roundworms): the body is slender and cylindrical, covered by a cuticle that resists digestive fluids, and has both a mouth and an anus. Examples: Ascaris, pinworms, hookworms. The thick cuticle of Ascaris is an adaptation to parasitic life in the human small intestine.',
          'Annelids (segmented worms): the body is cylindrical and made of many similar segments; setae or parapodia assist movement. Examples: earthworms, ragworms, leeches. Segmentation makes body movement more flexible. Earthworms breathe through their moist body wall and crawl using setae working with muscles.',
        ],
      },
      { type: 'heading', text: 'Molluscs' },
      {
        type: 'paragraph',
        text: 'Molluscs have soft bodies wrapped in a mantle, and most possess a shell formed from secretions of the mantle; the organ of locomotion is a muscular foot. Examples: freshwater mussels, scallops, snails and cuttlefish. The cuttlefish shell is reduced to an internal shell, the snail has a flat ventral foot, and the mussel has an axe-shaped foot. Molluscs matter greatly to humans — many are edible or used in medicine — but the Oncomelania snail is the intermediate host of the blood fluke and spreads schistosomiasis.',
      },
      { type: 'heading', text: 'Arthropods: the largest animal group' },
      {
        type: 'list',
        items: [
          'Arthropods are the most species-rich, most numerous and most widely distributed animal group. The body surface bears a tough exoskeleton, and both the body and the appendages are jointed (segmented).',
          'The exoskeleton protects the animal and prevents water loss, but it cannot grow with the body, so arthropods moult (ecdysis) as they develop.',
          'Insects are the largest class of arthropods: the body is divided into head, thorax and abdomen, with one pair of antennae, three pairs of legs and usually two pairs of wings. Examples: locusts, bees, butterflies, mosquitoes, flies.',
          'Other arthropods include arachnids (spiders and scorpions, four pairs of legs), myriapods (centipedes and millipedes) and crustaceans (shrimps and crabs, mostly aquatic, breathing with gills).',
        ],
      },
      { type: 'heading', text: 'Comparing the groups: a trend in evolution' },
      {
        type: 'paragraph',
        text: 'From cnidarians to arthropods the body plan generally changes from simple to complex: symmetry shifts from radial to bilateral; digestion progresses from a gut with a mouth but no anus to a complete gut with both; the body goes from unsegmented to segmented (segments first appear in annelids, and arthropods gain body regions and jointed limbs for more agile movement). Comparing these features reveals a broad sequence from lower to higher forms and from aquatic to terrestrial life.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'invertebrate (无脊椎动物): An animal without a backbone made of vertebrae.',
          'radial symmetry (辐射对称): Many planes through the central axis divide the body into mirror halves, as in Hydra.',
          'bilateral symmetry (两侧对称): Only one plane through the central axis divides the body into mirror halves, as in planarians.',
          'segmentation (体节现象): The body consists of many similar repeated segments, as in earthworms.',
          'mantle (外套膜): A fleshy fold wrapping the body of a mollusc; its secretions can form a shell.',
          'exoskeleton (外骨骼): A tough chitinous covering of arthropods that protects the body and prevents water loss.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列关于腔肠动物特征的叙述，正确的是（　）',
        en: 'Which statement about the features of cnidarians is correct?',
      },
      options: {
        zh: [
          '身体呈两侧对称，有口有肛门',
          '身体呈辐射对称，体表有刺细胞，有口无肛门',
          '身体细长呈圆柱形，体表有角质层',
          '身体由许多彼此相似的体节组成',
        ],
        en: [
          'Bilaterally symmetrical body, with a mouth and an anus',
          'Radially symmetrical body, stinging cells on the surface, a mouth but no anus',
          'Slender cylindrical body covered by a cuticle',
          'Body made of many similar segments',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '腔肠动物身体辐射对称、有刺细胞、有口无肛门，如水螅、海蜇。A 中“有口有肛门”错误——那是线形动物以后类群的特征；C 是线形动物（蛔虫）的特征；D 是环节动物（蚯蚓）的特征。',
        en: 'Cnidarians are radially symmetrical, bear stinging cells and have a mouth but no anus, e.g. Hydra and jellyfish. A is wrong on "mouth and anus" — that belongs to groups from nematodes onwards; C describes nematodes (Ascaris); D describes annelids (earthworms).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '蝗虫在生长发育过程中有蜕皮现象，其原因是（　）',
        en: 'Locusts moult during growth and development because',
      },
      options: {
        zh: [
          '外骨骼受到损伤后需要更新',
          '外骨骼不能随身体的生长而生长，限制了身体的长大',
          '体内的水分需要排出',
          '体表的气门需要扩大',
        ],
        en: [
          'the exoskeleton must be renewed after being damaged',
          'the exoskeleton cannot grow with the body and limits further growth',
          'water inside the body needs to be expelled',
          'the spiracles on the body surface need to enlarge',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '蝗虫体表的外骨骼能保护身体并防止体内水分蒸发，但外骨骼一经形成便不能继续生长，所以蝗虫长大时必须蜕去旧的外骨骼。A 把蜕皮理解为“修复损伤”，错误；C、D 与蜕皮无关。',
        en: 'The locust exoskeleton protects the body and prevents water loss, but once formed it cannot grow, so the old exoskeleton must be shed as the locust gets bigger. A wrongly treats moulting as repairing damage; C and D are unrelated to moulting.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '蚯蚓和蛔虫都是细长的动物，但二者的本质区别是（　）',
        en: 'Earthworms and Ascaris are both slender animals, but the essential difference between them is that',
      },
      options: {
        zh: [
          '蚯蚓身体分节，蛔虫身体不分节',
          '蚯蚓体表有角质层，蛔虫没有',
          '蚯蚓有口无肛门，蛔虫有口有肛门',
          '蚯蚓寄生生活，蛔虫自由生活',
        ],
        en: [
          'the earthworm body is segmented while Ascaris is not',
          'the earthworm surface has a cuticle while Ascaris does not',
          'the earthworm has a mouth but no anus while Ascaris has both',
          'the earthworm is parasitic while Ascaris is free-living',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '蚯蚓是环节动物，身体由许多彼此相似的体节组成；蛔虫是线形动物，身体不分节。B 恰好说反——有角质层的是蛔虫；两者都有口有肛门，C 错；蛔虫寄生在人体小肠内，蚯蚓自由生活在土壤中，D 也说反了。',
        en: 'The earthworm is an annelid whose body consists of many similar segments; Ascaris is a nematode with an unsegmented body. B states it backwards — it is Ascaris that has a cuticle; both have a mouth and an anus (C wrong); Ascaris parasitises the human small intestine while earthworms live freely in soil (D backwards too).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-arthropod-key',
      syllabus: ['0610/1.3.2', '0610/1.3.3'],
      tier: 'core',
      commandWord: 'Identify',
      marks: 2,
      stem: 'An animal has a body divided into two parts, four pairs of legs, no wings and no antennae. Identify the group of arthropods it belongs to and give one feature that rules out insects.',
      markScheme: [
        {
          text: 'Arachnid',
          marks: 1,
        },
        {
          text: 'Four pairs of legs (insects have three), or two body parts (insects have three), or no antennae (insects have one pair)',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '第二个得分点在于“对比”，而不是重复。只写“它有四对足”并不能排除昆虫，除非同时指出昆虫有三对。',
        en: 'The second mark is for a contrast, not a repetition. Saying "it has four pairs of legs" alone does not rule insects out unless you also say insects have three.',
      },
    },
  ],
  related: ['bio-animal-002', 'bio-diversity-001', 'igcse-0610-1-1-classification'],
};
