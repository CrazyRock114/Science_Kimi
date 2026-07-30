import type { KnowledgePoint } from '../types';

export const bioHuman003: KnowledgePoint = {
  id: 'bio-human-003',
  subject: 'biology',
  title: { zh: '人体的呼吸与气体交换', en: 'Breathing and Gas Exchange in Humans' },
  summary: {
    zh: '理解呼吸道对空气的处理、呼吸运动如何实现肺通气，以及肺泡与血液、血液与组织细胞之间的气体交换原理。',
    en: 'Understand how the airways condition inspired air, how breathing movements ventilate the lungs, and how gases are exchanged by diffusion in the alveoli and the tissues.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7b/ch1'],
    igcse: ['0610/11', '0610/12'],
  },
  keywords: {
    zh: ['呼吸道', '肺', '肺泡', '呼吸运动', '膈肌', '肋间肌', '气体交换', '扩散作用', '有氧呼吸'],
    en: ['airway', 'trachea', 'bronchus', 'alveolus', 'breathing', 'ventilation', 'diaphragm', 'intercostal muscles', 'gas exchange', 'diffusion', 'aerobic respiration', 'inspired air', 'expired air'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '呼吸系统与呼吸道的作用' },
      {
        type: 'paragraph',
        text: '呼吸系统由呼吸道和肺组成。呼吸道包括鼻、咽、喉、气管、支气管，是气体进出肺的通道，能对吸入的空气进行温暖、湿润和清洁处理：鼻毛和黏膜阻挡灰尘，气管、支气管内表面的纤毛摆动，把黏液粘住的尘粒、细菌等推向咽部咳出（痰）。肺是气体交换的主要场所。',
      },
      { type: 'heading', text: '呼吸运动：肺通气是怎样实现的' },
      {
        type: 'paragraph',
        text: '肺与外界的气体交换（肺通气）是通过呼吸运动实现的。吸气时，肋间肌收缩使肋骨上提、胸廓前后径和左右径增大，膈肌收缩、膈顶部下降，使胸廓上下径增大——胸廓容积扩大，肺随之扩张，肺内气压低于外界大气压，外界气体入肺。呼气时，肋间肌和膈肌舒张，胸廓容积缩小，肺回缩，肺内气压高于外界大气压，气体出肺。注意：是胸廓扩大引起吸气，而不是吸气使胸廓扩大。',
      },
      { type: 'heading', text: '肺泡适于气体交换的特点' },
      {
        type: 'list',
        items: [
          '肺泡数量多，总表面积大，增大了气体交换的面积。',
          '肺泡壁很薄，只由一层上皮细胞构成，气体容易通过。',
          '肺泡外面包绕着丰富的毛细血管，毛细血管壁也只由一层上皮细胞构成。',
          '肺泡内表面湿润，氧气先溶解在表面的液体薄层中再进行交换。',
        ],
      },
      { type: 'heading', text: '气体交换的原理：扩散作用' },
      {
        type: 'paragraph',
        text: '气体总是从浓度高的地方向浓度低的地方扩散，直到平衡为止。在肺部，肺泡内氧气浓度高于血液，氧气扩散进入血液并与血红蛋白结合；血液中二氧化碳浓度高于肺泡，二氧化碳扩散进入肺泡。结果，流经肺部的静脉血变成了动脉血。在组织处则相反：氧气从血液扩散进入组织细胞，二氧化碳从细胞扩散进入血液，动脉血变成静脉血。',
      },
      { type: 'formula', latex: '\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2} \\rightarrow 6\\mathrm{CO_2} + 6\\mathrm{H_2O}', caption: '细胞通过有氧呼吸利用氧气分解葡萄糖，释放能量，产生二氧化碳' },
      { type: 'heading', text: '吸入气与呼出气的比较' },
      {
        type: 'paragraph',
        text: '与吸入的空气相比，呼出的气体中氧气含量减少（约由 21% 降至 16%），二氧化碳含量增多（约由 0.04% 增至 4%），水蒸气增多，温度升高。可用澄清石灰水检验二氧化碳（变浑浊），用带火星的木条或燃烧的蜡烛比较氧气含量。呼出气体中仍然含有较多氧气，说明人体并没有把吸入的氧气全部利用。',
      },
    ],
    en: [
      { type: 'heading', text: 'The gas exchange system and the airways' },
      {
        type: 'paragraph',
        text: 'The gas exchange system consists of the airways — nose, trachea, bronchi and bronchioles — and the lungs. The airways warm, moisten and clean inspired air: mucus secreted by goblet cells traps dust, bacteria and viruses, and cilia on the epithelial cells waft the mucus up towards the throat. The trachea and bronchi are held open by C-shaped rings of cartilage. The lungs are where gas exchange takes place.',
      },
      { type: 'heading', text: 'Breathing movements: how the lungs are ventilated' },
      {
        type: 'paragraph',
        text: 'Ventilation is driven by the intercostal muscles and the diaphragm. During inspiration, the external intercostal muscles contract to raise the ribs, and the diaphragm contracts and flattens; the volume of the thorax increases, pressure inside falls below atmospheric pressure and air flows in. During expiration these muscles relax, the ribs fall and the diaphragm domes up; thoracic volume decreases, pressure rises above atmospheric and air flows out. Note the causality: the chest expands first and this draws air in — taking a breath does not itself expand the chest.',
      },
      { type: 'heading', text: 'How alveoli are adapted for gas exchange' },
      {
        type: 'list',
        items: [
          'Huge numbers of alveoli give a very large surface area.',
          'The alveolus wall is only one cell thick, giving a short diffusion distance.',
          'Each alveolus is wrapped in a dense capillary network whose walls are also one cell thick.',
          'The moist inner surface dissolves oxygen before it diffuses into the blood.',
          'Ventilation and blood flow maintain steep concentration gradients.',
        ],
      },
      { type: 'heading', text: 'The principle of exchange: diffusion' },
      {
        type: 'paragraph',
        text: 'Gases diffuse down their concentration gradients, from a region of higher concentration to one of lower concentration. In the lungs, oxygen diffuses from the alveoli into the blood and binds to haemoglobin in red blood cells, while carbon dioxide diffuses from the blood into the alveoli — deoxygenated blood becomes oxygenated. In the tissues the reverse happens: oxygen diffuses from the blood into respiring cells, and carbon dioxide produced by aerobic respiration diffuses into the blood.',
      },
      { type: 'formula', latex: '\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2} \\rightarrow 6\\mathrm{CO_2} + 6\\mathrm{H_2O}', caption: 'Aerobic respiration: cells use oxygen to break down glucose, releasing energy and producing carbon dioxide' },
      { type: 'heading', text: 'Comparing inspired and expired air' },
      {
        type: 'paragraph',
        text: 'Compared with inspired air, expired air contains less oxygen (about 21% down to 16%), more carbon dioxide (about 0.04% up to 4%), more water vapour, and is warmer. Limewater turns milky in the presence of carbon dioxide, and a burning splint can compare oxygen levels. Expired air still contains plenty of oxygen — the body does not use all the oxygen it breathes in, which is why rescue breathing works.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '人体吸气时，膈肌和胸廓的变化是（　）',
        en: 'When a person breathes in (inspiration), what happens to the diaphragm and the thorax?',
      },
      options: {
        zh: [
          '膈肌收缩，膈顶部下降，胸廓容积扩大',
          '膈肌舒张，膈顶部上升，胸廓容积扩大',
          '膈肌收缩，膈顶部上升，胸廓容积缩小',
          '膈肌舒张，膈顶部下降，胸廓容积缩小',
        ],
        en: [
          'The diaphragm contracts and flattens, and the volume of the thorax increases',
          'The diaphragm relaxes and domes up, and the volume of the thorax increases',
          'The diaphragm contracts and domes up, and the volume of the thorax decreases',
          'The diaphragm relaxes and flattens, and the volume of the thorax decreases',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '吸气时肋间肌和膈肌都收缩，膈顶部下降使胸廓上下径增大，胸廓容积扩大，肺内气压降低，气体入肺。膈肌舒张、膈顶部上升是呼气时的状态，故 B、D 错；膈肌收缩时膈顶部是下降而不是上升，故 C 错。',
        en: 'During inspiration the external intercostal muscles and the diaphragm contract; the diaphragm flattens (moves down), thoracic volume increases, pressure falls and air enters. A relaxed, domed diaphragm belongs to expiration (B, D wrong); a contracting diaphragm moves down, not up (C wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '肺泡与血液之间进行气体交换的原理是（　）',
        en: 'The principle by which gases are exchanged between the alveoli and the blood is',
      },
      options: {
        zh: ['气体的扩散作用', '呼吸肌的收缩和舒张', '血液的运输作用', '肺泡的收缩和舒张'],
        en: ['diffusion of gases', 'contraction and relaxation of the breathing muscles', 'transport by the blood', 'contraction and relaxation of the alveoli'],
      },
      answerIndex: 0,
      explanation: {
        zh: '肺泡与血液间的气体交换靠扩散：氧气从浓度高的肺泡扩散到浓度低的血液，二氧化碳则相反。呼吸肌的运动实现的是肺通气（气体进出肺），不是肺泡处的气体交换，故 B 错；血液运输发生在交换之后，故 C 错；肺泡本身不会收缩舒张，故 D 错。',
        en: 'Exchange across the alveolus is by diffusion: oxygen moves from the higher concentration in the alveolus to the lower concentration in the blood, and carbon dioxide the other way. Breathing muscles drive ventilation — moving air in and out — not the exchange itself (B wrong); blood transport happens after exchange (C wrong); alveoli do not contract (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '与吸入的空气相比，人体呼出的气体中（　）',
        en: 'Compared with inspired air, the air a person breathes out contains',
      },
      options: {
        zh: [
          '氧气减少，二氧化碳增多，但仍含有较多的氧气',
          '氧气全部消耗完，二氧化碳大量增多',
          '氧气增多，二氧化碳减少',
          '氧气和二氧化碳含量都没有明显变化',
        ],
        en: [
          'less oxygen and more carbon dioxide, but still a good deal of oxygen',
          'no oxygen at all, and a large increase in carbon dioxide',
          'more oxygen and less carbon dioxide',
          'no significant change in oxygen or carbon dioxide',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '呼出气中氧气约由 21% 降至 16%，二氧化碳约由 0.04% 增至 4%，氧气并未耗尽（这也是人工呼吸有效的原理），故 B 错；气体交换必然使氧气减少、二氧化碳增多，故 C、D 错。',
        en: 'In expired air oxygen falls from about 21% to 16% while carbon dioxide rises from about 0.04% to 4%. Oxygen is far from exhausted — which is why rescue breathing works (B wrong). Gas exchange must lower oxygen and raise carbon dioxide, so C and D are wrong.',
      },
    },
  ],
};
