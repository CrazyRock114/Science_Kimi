import type { KnowledgePoint } from '../types';

export const bioPlant002: KnowledgePoint = {
  id: 'bio-plant-002',
  subject: 'biology',
  title: { zh: '呼吸作用', en: 'Respiration' },
  summary: {
    zh: '理解呼吸作用的概念、反应式与场所，知道呼吸作用释放能量供生命活动利用，并能比较呼吸作用与光合作用的区别与联系。',
    en: 'Understand the concept, equation and site of respiration, know that it releases energy for life processes, and compare respiration with photosynthesis.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7a/ch3', 'pep-bio-s1/ch5'],
    igcse: ['0610/12'],
  },
  keywords: {
    zh: ['呼吸作用', '线粒体', '有氧呼吸', '无氧呼吸', '释放能量', '有机物分解'],
    en: ['respiration', 'aerobic respiration', 'anaerobic respiration', 'mitochondrion', 'energy release', 'glucose breakdown'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '呼吸作用的概念与表达式' },
      {
        type: 'paragraph',
        text: '细胞利用氧，将有机物分解成二氧化碳和水，并且将储存在有机物中的能量释放出来，供生命活动的需要，这个过程叫做呼吸作用。呼吸作用主要在线粒体内进行，所有活细胞时刻都在进行呼吸作用。',
      },
      {
        type: 'formula',
        latex: '\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2} \\longrightarrow 6\\mathrm{CO_2} + 6\\mathrm{H_2O} + \\text{能量}',
        caption: '有氧呼吸的总反应式',
      },
      {
        type: 'paragraph',
        text: '缺氧时，部分细胞可进行无氧呼吸：植物细胞和酵母菌把葡萄糖分解为酒精和二氧化碳并释放少量能量；动物和人的肌细胞则把葡萄糖分解为乳酸并释放少量能量。无氧呼吸释放的能量远少于有氧呼吸。',
      },
      {
        type: 'formula',
        latex: '\\mathrm{C_6H_{12}O_6} \\longrightarrow 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2} + \\text{少量能量}',
        caption: '植物细胞和酵母菌的无氧呼吸',
      },
      { type: 'heading', text: '验证呼吸作用的实验' },
      {
        type: 'list',
        items: [
          '萌发的种子使澄清石灰水变浑浊，说明呼吸作用释放二氧化碳。',
          '萌发的种子使燃烧的蜡烛熄灭（瓶内氧气减少），说明呼吸作用消耗氧气。',
          '萌发种子的保温瓶温度升高，说明呼吸作用释放能量。',
        ],
      },
      { type: 'heading', text: '呼吸作用与光合作用的区别与联系' },
      {
        type: 'list',
        items: [
          '场所：光合作用在叶绿体中进行，呼吸作用主要在线粒体中进行。',
          '条件：光合作用必须在光下才能进行；呼吸作用有光无光都能进行，时刻不停。',
          '物质变化：光合作用合成有机物、储存能量；呼吸作用分解有机物、释放能量，二者正好相反又相互依存。',
          '气体交换：光合作用吸收二氧化碳、释放氧气；呼吸作用吸收氧气、释放二氧化碳。',
          '应用：储藏粮食、果蔬时要降低呼吸作用（低温、低氧、干燥），栽培时要增强光合作用。',
        ],
      },
      {
        type: 'paragraph',
        text: '注意：白天植物同时进行光合作用和呼吸作用，且光合速率通常大于呼吸速率，所以表现为吸收二氧化碳、释放氧气；夜晚只进行呼吸作用。',
      },
    ],
    en: [
      { type: 'heading', text: 'The process of respiration' },
      {
        type: 'paragraph',
        text: 'Respiration is the process in living cells by which glucose is broken down to release the energy stored in it for life processes. In aerobic respiration oxygen is used and carbon dioxide and water are produced. It takes place mainly in the mitochondria, and all living cells respire continuously.',
      },
      {
        type: 'formula',
        latex: '\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2} \\longrightarrow 6\\mathrm{CO_2} + 6\\mathrm{H_2O} + \\text{energy}',
        caption: 'Balanced equation for aerobic respiration',
      },
      {
        type: 'paragraph',
        text: 'When oxygen is scarce, some cells respire anaerobically: plant cells and yeast break glucose down into ethanol and carbon dioxide, while animal muscle cells form lactic acid. Anaerobic respiration releases far less energy per glucose molecule than aerobic respiration.',
      },
      {
        type: 'formula',
        latex: '\\mathrm{C_6H_{12}O_6} \\longrightarrow 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2} + \\text{a little energy}',
        caption: 'Anaerobic respiration in plant cells and yeast',
      },
      { type: 'heading', text: 'Experiments demonstrating respiration' },
      {
        type: 'list',
        items: [
          'Germinating seeds turn limewater milky — respiration releases carbon dioxide.',
          'A burning candle goes out in air exhaled by germinating seeds — respiration takes in oxygen.',
          'A vacuum flask of germinating seeds warms up — respiration releases energy.',
        ],
      },
      { type: 'heading', text: 'Respiration compared with photosynthesis' },
      {
        type: 'list',
        items: [
          'Site: photosynthesis occurs in chloroplasts; respiration mainly in mitochondria.',
          'Conditions: photosynthesis needs light; respiration happens all the time, in light and in darkness.',
          'Matter and energy: photosynthesis builds glucose and stores energy; respiration breaks glucose down and releases energy — opposite yet interdependent processes.',
          'Gases: photosynthesis takes in CO₂ and releases O₂; respiration takes in O₂ and releases CO₂.',
          'Applications: storage of grain and fruit aims to slow respiration (cool, low-oxygen, dry conditions), while crop growing aims to maximise photosynthesis.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Note: by day a plant photosynthesises and respires at the same time, and photosynthesis is usually faster, so the net exchange is CO₂ in and O₂ out; at night only respiration occurs.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列关于呼吸作用的叙述，正确的是（　）',
        en: 'Which statement about respiration is correct?',
      },
      options: {
        zh: [
          '只有动物才进行呼吸作用，植物不进行呼吸作用',
          '呼吸作用只在夜晚进行',
          '所有活细胞都能进行呼吸作用，其主要场所是线粒体',
          '呼吸作用合成有机物并储存能量',
        ],
        en: [
          'Only animals respire; plants do not',
          'Respiration only takes place at night',
          'All living cells respire, mainly in the mitochondria',
          'Respiration builds organic molecules and stores energy',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '植物的所有活细胞时刻都进行呼吸作用，故 A、B 错；呼吸作用是分解有机物、释放能量的过程，合成有机物、储存能量的是光合作用，故 D 错。',
        en: 'All living plant cells respire continuously, day and night, so A and B are wrong; respiration breaks down organic matter to release energy — building molecules and storing energy is photosynthesis, so D is wrong.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '储藏水果和蔬菜时，常采用低温或降低氧气浓度的方法，其目的是（　）',
        en: 'Fruit and vegetables are often stored at low temperature or reduced oxygen concentration in order to (　)',
      },
      options: {
        zh: [
          '促进光合作用，增加有机物',
          '降低呼吸作用，减少有机物的消耗',
          '促进呼吸作用，加快成熟',
          '抑制蒸腾作用，保持水分',
        ],
        en: [
          'promote photosynthesis to gain organic matter',
          'reduce respiration and slow the breakdown of organic matter',
          'promote respiration to speed up ripening',
          'inhibit transpiration to keep water in',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '采摘后的果蔬不能进行光合作用制造有机物，但仍进行呼吸作用消耗有机物。低温、低氧能抑制呼吸作用，减少有机物消耗，延长保鲜期。A 错：储藏的果蔬不见光、光合意义不大；C 与保鲜目的相反；D 不是该方法的主要目的。',
        en: 'Harvested produce cannot photosynthesise but still respires, consuming its organic matter. Low temperature and low oxygen slow respiration and extend storage life. A is wrong — stored produce is kept in the dark; C is the opposite of the goal; D is not the main purpose of this method.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于光合作用与呼吸作用的关系，下列说法错误的是（　）',
        en: 'Which statement about the relationship between photosynthesis and respiration is WRONG?',
      },
      options: {
        zh: [
          '光合作用合成的有机物是呼吸作用的物质基础',
          '呼吸作用释放的能量可用于光合作用产物的运输等生命活动',
          '白天植物只进行光合作用，夜晚只进行呼吸作用',
          '二者相互对立又相互依存',
        ],
        en: [
          'The organic matter made by photosynthesis is the material basis for respiration',
          'Energy released by respiration can power life processes such as transporting photosynthetic products',
          'By day plants only photosynthesise, and at night they only respire',
          'The two processes are opposing yet interdependent',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '白天植物同时进行光合作用和呼吸作用，只是光合速率通常大于呼吸速率，故 C 说法错误。A、B、D 正确描述了二者在物质、能量上的相互依存关系。',
        en: 'By day plants photosynthesise and respire simultaneously — photosynthesis is just usually faster — so C is the wrong statement. A, B and D correctly describe the interdependence of matter and energy between the two processes.',
      },
    },
  ],
};
