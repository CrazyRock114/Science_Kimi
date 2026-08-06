import type { KnowledgePoint } from '../types';

export const bioAnimal002: KnowledgePoint = {
  id: 'bio-animal-002',
  subject: 'biology',
  title: { zh: '脊椎动物与动物的运动', en: 'Vertebrates and Animal Movement' },
  summary: {
    zh: '比较鱼、两栖动物、爬行动物、鸟和哺乳动物的主要特征，理解运动系统由骨、关节和肌肉组成，骨、关节、肌肉协调配合完成运动。',
    en: 'Compare the main features of fish, amphibians, reptiles, birds and mammals, and understand how bones, joints and muscles form the locomotor system and work together to produce movement.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j8a/ch1'],
    igcse: ['0610/1', '0610/14'],
  },
  keywords: {
    zh: ['脊椎动物', '鱼', '两栖动物', '爬行动物', '鸟', '哺乳动物', '骨', '关节', '骨骼肌', '肱二头肌'],
    en: ['vertebrate', 'fish', 'amphibian', 'reptile', 'bird', 'mammal', 'bone', 'joint', 'skeletal muscle', 'biceps'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '概述鱼、两栖动物、爬行动物、鸟和哺乳动物的主要特征，说出它们适应环境的方式。',
          '说明恒温动物与变温动物的区别，理解胎生、哺乳对提高后代成活率的意义。',
          '描述运动系统的组成，解释骨、关节、骨骼肌协调配合完成运动的原理。',
        ],
      },
      { type: 'heading', text: '鱼：适应水中生活' },
      {
        type: 'list',
        items: [
          '生活在水中；体表常有鳞片覆盖；用鳃呼吸，鳃丝中密布毛细血管，利于气体交换。',
          '通过尾部和躯干部的摆动以及鳍的协调作用游泳；身体大多呈流线型，可减少游泳时水的阻力。',
          '鱼属于变温动物：体温随环境温度的变化而改变。',
        ],
      },
      { type: 'heading', text: '两栖动物与爬行动物' },
      {
        type: 'list',
        items: [
          '两栖动物：幼体生活在水中，用鳃呼吸；成体大多生活在陆地上，也可在水中游泳，用肺呼吸，皮肤可辅助呼吸。代表：青蛙、蟾蜍、大鲵（娃娃鱼）。生殖和幼体发育离不开水，是从水生向陆生过渡的类群。',
          '爬行动物：体表覆盖角质的鳞片或甲，用肺呼吸；在陆地上产卵，卵表面有坚韧的卵壳。代表：蜥蜴、龟、鳖、蛇、鳄。生殖和发育摆脱了对水环境的依赖，是真正适应陆地生活的脊椎动物。',
          '两栖动物和爬行动物都是变温动物。',
        ],
      },
      { type: 'heading', text: '鸟：适应飞行生活' },
      {
        type: 'list',
        items: [
          '体表覆羽，前肢变成翼，有喙无齿；骨轻、薄、坚固，有些骨内部中空，可减轻体重。',
          '用肺呼吸，有气囊辅助呼吸——每呼吸一次，肺内进行两次气体交换，称为双重呼吸，能为飞行提供充足的氧气。',
          '胸肌发达，附着在龙骨突上，牵动两翼完成飞行动作；食量大、消化快，直肠短，粪便随时排出以减轻体重。',
          '鸟的体温高而恒定，属于恒温动物；体温恒定增强了动物对环境的适应能力。',
        ],
      },
      { type: 'heading', text: '哺乳动物' },
      {
        type: 'paragraph',
        text: '哺乳动物体表被毛，有保温作用；体温恒定，是恒温动物；生殖方式为胎生，胚胎在母体子宫内发育，母体用乳汁哺育幼崽——胎生、哺乳大大提高了后代的成活率。牙齿有门齿、犬齿和臼齿的分化：门齿切断食物，犬齿撕裂食物，臼齿磨碎食物；肉食动物犬齿发达，草食动物门齿和臼齿发达，牙齿分化提高了摄食和消化能力。代表：家兔、狼、鲸、蝙蝠。鲸生活在水中、蝙蝠会飞，但都具有胎生、哺乳的特征，所以都是哺乳动物。',
      },
      { type: 'heading', text: '运动系统的组成' },
      {
        type: 'list',
        items: [
          '哺乳动物的运动系统主要由骨、关节和肌肉（骨骼肌）组成；骨与骨之间通过关节等方式相连形成骨骼。',
          '骨：在运动中起杠杆的作用。',
          '关节：骨连结的主要形式，在运动中起支点的作用。关节一般由关节面（关节头和关节窝）、关节囊和关节腔组成。关节软骨和关节腔内的滑液能减少摩擦，使关节灵活；关节囊及其内外的韧带使关节牢固。',
          '骨骼肌：由肌腹和两端较细的肌腱组成，肌腱绕过关节连在不同的骨上。骨骼肌有受刺激而收缩的特性，为运动提供动力。',
        ],
      },
      { type: 'heading', text: '骨、关节、肌肉协调配合完成运动' },
      {
        type: 'paragraph',
        text: '骨骼肌受神经传来的刺激收缩时，就会牵动骨绕关节活动，于是躯体的相应部位就产生了运动。骨骼肌只能收缩牵拉骨，而不能将骨推开，因此与骨连接的肌肉至少是由两组肌肉相互配合活动的：屈肘时，肱二头肌收缩、肱三头肌舒张；伸肘时，肱三头肌收缩、肱二头肌舒张。运动并不是仅靠运动系统来完成的，还需要神经系统的调节，以及消化、呼吸、循环等系统配合提供能量；运动所需的能量来自肌细胞中线粒体的呼吸作用。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'vertebrate（脊椎动物）：体内有由脊椎骨组成脊柱的动物，包括鱼、两栖动物、爬行动物、鸟和哺乳动物。',
          'double respiration（双重呼吸）：鸟每呼吸一次，肺内进行两次气体交换的呼吸方式，气囊起辅助作用。',
          'viviparity（胎生）：胚胎在母体子宫内发育成熟后产出体外的生殖方式。',
          'joint（关节）：骨与骨之间能够活动的连结，由关节面、关节囊和关节腔组成。',
          'skeletal muscle（骨骼肌）：附着在骨骼上的肌肉，由肌腹和肌腱组成，受刺激能收缩。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Outline the main features of fish, amphibians, reptiles, birds and mammals, and describe how each group is adapted to its environment.',
          'Distinguish endothermic from ectothermic animals, and explain how giving birth to live young and suckling raise offspring survival.',
          'Describe the composition of the locomotor system and explain how bones, joints and skeletal muscles coordinate to produce movement.',
        ],
      },
      { type: 'heading', text: 'Fish: adapted to aquatic life' },
      {
        type: 'list',
        items: [
          'Live in water; the body surface is usually covered with scales; they breathe with gills whose filaments are richly supplied with capillaries for gas exchange.',
          'They swim by undulating the trunk and tail together with the coordinated action of the fins; the streamlined body reduces water resistance.',
          'Fish are ectothermic: their body temperature varies with the environment.',
        ],
      },
      { type: 'heading', text: 'Amphibians and reptiles' },
      {
        type: 'list',
        items: [
          'Amphibians: the larvae live in water and breathe with gills; adults mostly live on land, can also swim in water, and breathe with lungs supplemented by the skin. Examples: frogs, toads, giant salamanders. Reproduction and larval development still depend on water, so amphibians are a transitional group between aquatic and terrestrial life.',
          'Reptiles: the body surface is covered with keratinised scales or plates; they breathe with lungs and lay eggs on land, the eggs protected by a tough shell. Examples: lizards, turtles, snakes, crocodiles. Reproduction and development are free of the water environment, making reptiles the first truly terrestrial vertebrates.',
          'Both amphibians and reptiles are ectothermic.',
        ],
      },
      { type: 'heading', text: 'Birds: adapted to flight' },
      {
        type: 'list',
        items: [
          'The body is covered with feathers and the forelimbs are modified into wings; there is a beak without teeth; bones are light, thin and strong, some hollow inside to reduce weight.',
          'They breathe with lungs assisted by air sacs — each breath brings two gas exchanges in the lungs, called double respiration, supplying abundant oxygen for flight.',
          'The powerful breast muscles attach to a keeled sternum and drive the wings; birds eat large amounts, digest quickly, and have a short rectum so waste is voided at once to save weight.',
          'Birds have a high, constant body temperature — they are endothermic, which strengthens their ability to adapt to the environment.',
        ],
      },
      { type: 'heading', text: 'Mammals' },
      {
        type: 'paragraph',
        text: 'Mammals have a hairy body covering that conserves heat; their body temperature is constant, so they are endothermic. They are viviparous — the embryo develops in the mother’s uterus and the young are suckled on milk — and viviparity together with suckling greatly raises offspring survival. The teeth are differentiated into incisors for cutting, canines for tearing and molars for grinding: carnivores have well-developed canines, herbivores well-developed incisors and molars, and this differentiation improves feeding and digestion. Examples: rabbits, wolves, whales and bats. Whales live in water and bats fly, yet both give birth to live young and suckle them, so both are mammals.',
      },
      { type: 'heading', text: 'The locomotor system' },
      {
        type: 'list',
        items: [
          'The locomotor system of mammals consists mainly of bones, joints and (skeletal) muscles; bones are joined by joints and other connections to form the skeleton.',
          'Bones act as levers during movement.',
          'Joints are the main form of connection between bones and act as fulcra. A joint typically consists of articular surfaces (the head and the socket), a joint capsule and a joint cavity. Articular cartilage and the synovial fluid in the cavity reduce friction for flexibility, while the capsule and its ligaments hold the joint firmly together.',
          'A skeletal muscle consists of a belly and slender tendons at both ends; the tendons pass over a joint and attach to different bones. Skeletal muscle contracts when stimulated, providing the power for movement.',
        ],
      },
      { type: 'heading', text: 'How bones, joints and muscles cooperate' },
      {
        type: 'paragraph',
        text: 'When a skeletal muscle receives a stimulus transmitted by a nerve, it contracts and pulls the bone around the joint, moving that part of the body. A muscle can only pull a bone, never push it, so at least two groups of muscles must cooperate: when the elbow flexes, the biceps contracts while the triceps relaxes; when the elbow extends, the triceps contracts while the biceps relaxes. Movement is not accomplished by the locomotor system alone — it also needs regulation by the nervous system and energy supplied with the help of the digestive, respiratory and circulatory systems; the energy comes from respiration in the mitochondria of muscle cells.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'vertebrate (脊椎动物): An animal with a backbone of vertebrae — fish, amphibians, reptiles, birds and mammals.',
          'double respiration (双重呼吸): The avian breathing pattern in which each breath brings two gas exchanges in the lungs, assisted by air sacs.',
          'viviparity (胎生): A reproductive mode in which the embryo develops inside the mother’s uterus and is born live.',
          'joint (关节): A movable connection between bones, consisting of articular surfaces, a joint capsule and a joint cavity.',
          'skeletal muscle (骨骼肌): Muscle attached to bones, made of a belly and tendons, which contracts when stimulated.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列特征中，与鸟的飞行生活相适应的是（　）',
        en: 'Which feature adapts a bird to flying?',
      },
      options: {
        zh: [
          '体表被毛，起保温作用',
          '有气囊辅助肺进行双重呼吸',
          '在陆地上产卵，卵表面有坚韧的卵壳',
          '幼体用鳃呼吸，成体用肺呼吸',
        ],
        en: [
          'A hairy body surface that conserves heat',
          'Air sacs that assist the lungs in double respiration',
          'Laying eggs on land with tough shells',
          'Larvae breathing with gills and adults with lungs',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '双重呼吸使鸟在飞行时能获得充足的氧气，是鸟适应飞行的特征。A 体表被毛是哺乳动物的特征；C 陆地产卵、卵有卵壳是爬行动物等适应陆地生活的特征；D 描述的是两栖动物。',
        en: 'Double respiration supplies abundant oxygen during flight and is an avian adaptation. A (hairy surface) is a mammalian feature; C (shelled eggs on land) suits reptiles to terrestrial life; D describes amphibians.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列关于哺乳动物的叙述，正确的是（　）',
        en: 'Which statement about mammals is correct?',
      },
      options: {
        zh: [
          '所有哺乳动物都生活在陆地上',
          '胎生、哺乳提高了后代的成活率',
          '哺乳动物用鳃呼吸',
          '哺乳动物都是变温动物',
        ],
        en: [
          'All mammals live on land',
          'Viviparity and suckling raise the survival rate of offspring',
          'Mammals breathe with gills',
          'Mammals are all ectothermic',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '胎生使胚胎在母体内得到保护和营养，哺乳为幼崽提供营养，二者提高了后代的成活率。A 错误——鲸生活在水中，却胎生、哺乳，属于哺乳动物；哺乳动物用肺呼吸，C 错误；哺乳动物体温恒定，是恒温动物，D 错误。',
        en: 'Viviparity protects and nourishes the embryo inside the mother, and suckling feeds the young — together they raise offspring survival. A is wrong: whales live in water yet give birth and suckle, so they are mammals; mammals breathe with lungs (C wrong); mammals have constant body temperature and are endothermic (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '屈肘时，上臂主要肌肉的状态是（　）',
        en: 'When the elbow is flexed, the states of the main upper-arm muscles are',
      },
      options: {
        zh: [
          '肱二头肌收缩，肱三头肌舒张',
          '肱二头肌舒张，肱三头肌收缩',
          '肱二头肌和肱三头肌同时收缩',
          '肱二头肌和肱三头肌同时舒张',
        ],
        en: [
          'the biceps contracts and the triceps relaxes',
          'the biceps relaxes and the triceps contracts',
          'biceps and triceps contract at the same time',
          'biceps and triceps relax at the same time',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '骨骼肌只能收缩牵拉骨而不能推开骨，所以一个动作至少由两组肌肉配合完成。屈肘时肱二头肌收缩、肱三头肌舒张；伸肘时正好相反（B 是伸肘状态）；两肌同时收缩肘关节不能活动，同时舒张则手臂自然下垂，C、D 都不是屈肘。',
        en: 'A skeletal muscle can only pull a bone, never push it, so any movement needs at least two muscle groups working together. In flexion the biceps contracts and the triceps relaxes; extension is the reverse (B describes extension); if both contract the elbow cannot move, and if both relax the arm hangs loosely — neither C nor D is flexion.',
      },
    },
  ],
  related: ['bio-animal-001', 'igcse-0610-1-1-classification', 'igcse-0610-14-1-nervous-system'],
};
