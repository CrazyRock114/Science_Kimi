import type { KnowledgePoint } from '../types';

export const bioHealth003: KnowledgePoint = {
  id: 'bio-health-003',
  subject: 'biology',
  title: { zh: '用药、急救与健康的生活方式', en: 'Safe Medication, First Aid and a Healthy Lifestyle' },
  summary: {
    zh: '学会区分处方药与非处方药、按说明书安全用药，掌握拨打急救电话、心肺复苏和出血止血等急救常识，理解健康的含义并养成健康的生活方式。',
    en: 'Learn the difference between prescription and over-the-counter medicines and how to use them safely, master first-aid basics such as calling emergency services, CPR and stopping bleeding, and understand what health really means and how a healthy lifestyle supports it.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j8b/ch2'],
    igcse: ['0610/15.1'],
  },
  keywords: {
    zh: ['安全用药', '处方药', '非处方药', '急救', '心肺复苏', '止血', '健康的生活方式', '拒绝毒品'],
    en: ['safe use of medicines', 'prescription drug', 'over-the-counter drug', 'first aid', 'CPR', 'antibiotics', 'healthy lifestyle', 'drug abuse'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '区分处方药和非处方药，说出安全用药的基本要求。',
          '掌握常用急救方法：拨打 120、胸外心脏按压与人工呼吸、判断出血类型并止血。',
          '说出健康的定义，列举健康的生活方式，说明吸烟、酗酒和吸毒的危害。',
        ],
      },
      { type: 'heading', text: '安全用药' },
      {
        type: 'paragraph',
        text: '药物分为处方药和非处方药。处方药（Rx）必须凭执业医师或执业助理医师的处方才可以购买和使用；非处方药（OTC）不需要凭医师处方，消费者可以自行判断、购买和使用，适于自我诊断、自我治疗的小伤小病。"是药三分毒"，任何药物都有一定的副作用或毒性，不能滥用。',
      },
      {
        type: 'list',
        items: [
          '用药前仔细阅读药品说明书：成分、适应症（功能主治）、用法与用量、有效期、不良反应、禁忌和注意事项。',
          '按时按量服药：不能随意加大剂量，也不能症状一减轻就擅自停药。',
          '不滥用抗生素：抗生素只对细菌引起的疾病有效，对病毒引起的感冒无效；滥用还会筛选出耐药菌。',
          '注意有效期，过期药物不能服用；家庭小药箱要分类存放、定期检查。',
        ],
      },
      { type: 'heading', text: '急救常识' },
      {
        type: 'paragraph',
        text: '遇到有人突然晕倒、溺水、煤气中毒或严重外伤时，应立即拨打"120"急救电话，说清地点和伤情。在救护车到达前，可采取必要的急救措施。对心跳、呼吸骤停者进行心肺复苏（CPR）：先做胸外心脏按压，按压部位是胸骨下段，频率为每分钟 100～120 次；再进行人工呼吸——先使病人仰卧、开放气道、捏住鼻孔，口对口吹气。按压与吹气的比例是 30:2。',
      },
      {
        type: 'list',
        items: [
          '动脉出血：血液鲜红，从伤口喷出或随心跳一股股涌出，危险性大，应在近心端（靠近心脏的一端）压迫止血。',
          '静脉出血：血液暗红，缓慢而连续不断地流出，应在远心端压迫止血。',
          '毛细血管出血：血液从伤口慢慢渗出，一般能自行凝固，清洗伤口后贴创可贴即可。',
          '煤气中毒（一氧化碳中毒）：立即把病人移到通风处，解开衣领，保持呼吸道通畅。溺水者救上岸后，先清除口鼻中的异物，再进行人工呼吸。',
        ],
      },
      { type: 'heading', text: '什么是健康' },
      {
        type: 'paragraph',
        text: '健康是指一种身体上、心理上和社会适应方面的良好状态，而不仅仅是没有疾病或者不虚弱。身体健康、心理健康、良好的社会适应能力三者缺一不可。保持心情愉快是心理健康的核心，遇到挫折时可以转移注意力、合理宣泄或自我安慰。',
      },
      { type: 'heading', text: '健康的生活方式' },
      {
        type: 'list',
        items: [
          '合理营养，平衡膳食；坚持体育锻炼；按时作息，保证睡眠。',
          '不吸烟、不酗酒：烟草中的尼古丁、焦油等会损害呼吸系统和心血管系统；酒精会损害神经系统和肝脏。实验表明，酒精浓度升高会抑制水蚤的心率。',
          '拒绝毒品：毒品会严重损害神经系统，使人成瘾，危害身心健康和社会安定。',
          '合理安排上网、看电视时间，避免沉迷网络；保持心理平衡，乐于与人交往。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'prescription drug, Rx（处方药）：必须凭医师处方才能购买和使用的药物。',
          'over-the-counter drug, OTC（非处方药）：不需处方、可自行购买使用的药物。',
          'antibiotics（抗生素）：用于治疗细菌感染的药物，对病毒无效。',
          'first aid（急救）：在专业医护人员到达前对伤病者采取的紧急救护措施。',
          'CPR, cardiopulmonary resuscitation（心肺复苏）：胸外心脏按压与人工呼吸配合的急救技术。',
          'healthy lifestyle（健康的生活方式）：有利于身体、心理和社会适应的良好生活习惯。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Distinguish prescription drugs from over-the-counter drugs and state the basic rules for using medicines safely.',
          'Master common first aid: calling 120 (emergency services), chest compressions with rescue breathing, and identifying types of bleeding to stop them correctly.',
          'Define health, list the features of a healthy lifestyle, and explain the harm done by smoking, alcohol and drug abuse.',
        ],
      },
      { type: 'heading', text: 'Using medicines safely' },
      {
        type: 'paragraph',
        text: 'Medicines fall into two groups. Prescription drugs (Rx) can only be bought and used with a doctor’s prescription. Over-the-counter drugs (OTC) can be judged, bought and used by the consumer directly, for minor ailments that people can diagnose and treat themselves. "Every medicine is partly poison": all drugs have side effects or toxicity to some degree and must not be misused.',
      },
      {
        type: 'list',
        items: [
          'Read the label carefully before use: ingredients, indications, dosage and directions, expiry date, adverse reactions, contraindications and precautions.',
          'Take the right dose at the right times: never increase the dose at will, and do not stop a course early just because symptoms fade.',
          'Do not misuse antibiotics: they work only against bacterial diseases, not viral ones such as the common cold, and overuse selects for resistant bacteria.',
          'Check expiry dates — never take out-of-date medicine; keep the home medicine box sorted and reviewed regularly.',
        ],
      },
      { type: 'heading', text: 'First aid' },
      {
        type: 'paragraph',
        text: 'If someone suddenly collapses, is drowning, suffers gas poisoning or is seriously injured, call the emergency number 120 at once, stating the location and the injuries clearly. Before the ambulance arrives, take the necessary first-aid steps. For a person whose heartbeat and breathing have stopped, give CPR: first chest compressions on the lower part of the sternum at 100–120 compressions per minute, then rescue breaths — lay the person on their back, open the airway, pinch the nose and breathe mouth-to-mouth. The ratio of compressions to breaths is 30:2.',
      },
      {
        type: 'list',
        items: [
          'Arterial bleeding: bright red blood spurting or pulsing from the wound — the most dangerous kind; press on the side nearer the heart to stop it.',
          'Venous bleeding: dark red blood flowing slowly and continuously; press on the side farther from the heart.',
          'Capillary bleeding: blood oozing slowly from the wound, which usually clots by itself; clean the wound and cover it with a plaster.',
          'Carbon monoxide poisoning: move the person into fresh air at once, loosen the collar and keep the airway clear. For a drowning person, first clear foreign matter from the mouth and nose, then give rescue breaths.',
        ],
      },
      { type: 'heading', text: 'What is health?' },
      {
        type: 'paragraph',
        text: 'Health is a state of complete physical, mental and social well-being, not merely the absence of disease or infirmity. Physical health, mental health and good social adaptation are all needed. Staying in good spirits is the core of mental health; when facing setbacks, one can shift attention, vent feelings reasonably or comfort oneself.',
      },
      { type: 'heading', text: 'A healthy lifestyle' },
      {
        type: 'list',
        items: [
          'Eat a balanced diet, take regular exercise, keep regular hours and get enough sleep.',
          'Do not smoke or drink heavily: nicotine and tar in tobacco damage the respiratory and cardiovascular systems, and alcohol damages the nervous system and the liver. Experiments show that increasing alcohol concentration slows the heartbeat of water fleas.',
          'Refuse drugs: they severely damage the nervous system, cause addiction, and harm both personal health and social order.',
          'Plan screen time sensibly and avoid internet addiction; keep a balanced state of mind and enjoy socialising with others.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'prescription drug, Rx (处方药): a medicine that can only be obtained and used with a doctor’s prescription.',
          'over-the-counter drug, OTC (非处方药): a medicine that can be bought and used without a prescription.',
          'antibiotics (抗生素): drugs used against bacterial infections; they do not work on viruses.',
          'first aid (急救): emergency care given to a casualty before professional help arrives.',
          'CPR, cardiopulmonary resuscitation (心肺复苏): the first-aid technique combining chest compressions with rescue breaths.',
          'healthy lifestyle (健康的生活方式): habits that support physical, mental and social well-being.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '关于安全用药，下列做法正确的是（　）',
        en: 'Which of the following practices of using medicines is correct?',
      },
      options: {
        zh: [
          '非处方药没有毒副作用，可以随意服用',
          '感冒后自行加大抗生素剂量，好得更快',
          '用药前阅读说明书，按规定的用法用量服用',
          '处方药可以在药店随意购买',
        ],
        en: [
          'OTC drugs have no side effects and can be taken freely',
          'Take a larger dose of antibiotics for a cold so it clears up faster',
          'Read the label before use and follow the stated dosage and directions',
          'Prescription drugs can be bought freely in any pharmacy',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '安全用药的基本要求是按说明书的用法用量服用，C 正确。"是药三分毒"，非处方药也有不良反应，不能随意服用，A 错；感冒由病毒引起，抗生素对病毒无效，加大剂量既无用又促进细菌耐药，B 错；处方药必须凭医师处方购买，D 错。',
        en: 'Safe use means following the dosage and directions on the label, so C is correct. "Every medicine is partly poison" — OTC drugs also have adverse effects and must not be taken freely (A wrong). Colds are caused by viruses, on which antibiotics have no effect, and larger doses only encourage bacterial resistance (B wrong). Prescription drugs require a doctor’s prescription (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '某人前臂受伤，血液鲜红，从伤口随心跳一股股涌出。急救时应（　）',
        en: 'A person’s forearm is injured; bright red blood pulses out of the wound with each heartbeat. First aid should be',
      },
      options: {
        zh: [
          '在伤口远心端压迫止血',
          '在伤口近心端压迫止血',
          '贴上创可贴即可',
          '等血液自行凝固',
        ],
        en: [
          'press on the side of the wound farther from the heart',
          'press on the side of the wound nearer the heart',
          'just cover it with a plaster',
          'wait for the blood to clot by itself',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '血液鲜红、随心跳涌出，是动脉出血的特征。动脉把血液从心脏输送到全身，应在近心端压迫止血，B 正确。远心端止血针对的是暗红色、缓慢流出的静脉出血，A 错；创可贴和等其自行凝固只适用于毛细血管少量渗血，止不住动脉出血，C、D 错。',
        en: 'Bright red blood pulsing with the heartbeat is the sign of arterial bleeding. Arteries carry blood away from the heart, so pressure must be applied on the side nearer the heart (B correct). Pressing the far side suits dark red, slowly flowing venous bleeding (A wrong). A plaster or waiting for clotting only works for oozing capillary bleeding, not an artery (C and D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '按照世界卫生组织的观点，"健康"是指（　）',
        en: 'According to the World Health Organization, "health" means',
      },
      options: {
        zh: [
          '没有疾病、身体不虚弱',
          '身体强壮、从不生病',
          '心理上没有烦恼',
          '身体上、心理上和社会适应方面的良好状态',
        ],
        en: [
          'the absence of disease or infirmity',
          'a strong body that never falls ill',
          'a mind free of worries',
          'a state of physical, mental and social well-being',
        ],
      },
      answerIndex: 3,
      explanation: {
        zh: '健康是指一种身体上、心理上和社会适应方面的良好状态，而不仅仅是没有疾病或不虚弱，D 正确。A 只说出"没有疾病"，这正是健康定义要超越的旧观念；B 把健康窄化为身体强壮，忽略了心理和社会适应；C 只涉及心理一个方面，同样不完整。',
        en: 'Health is a state of physical, mental and social well-being, not merely the absence of disease, so D is correct. A states only "no disease" — the very idea the definition goes beyond. B narrows health to physical strength, ignoring mental and social aspects. C covers only the mental side and is likewise incomplete.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-antibiotics-cold',
      syllabus: ['0610/15.1.4'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 2,
      stem: 'A patient with a cold asks for antibiotics. Explain why they would not help.',
      markScheme: [
        {
          text: 'A cold is caused by a virus, not by bacteria',
          marks: 1,
        },
        {
          text: 'Antibiotics kill bacteria by attacking structures such as the cell wall, which a virus does not have — and a virus reproduces inside the body’s own cells',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '要说出病毒"缺什么"。写"抗生素对病毒无效"只是把题目重述一遍；得分点在于原因。',
        en: 'Say what a virus lacks. "Antibiotics do not work on viruses" restates the question; the mark is for the reason.',
      },
    },
    {
      id: 'ep-antibiotic-resistance',
      syllabus: ['0610/15.1.3', '0610/15.1.5'],
      tier: 'supplement',
      commandWord: 'Explain',
      marks: 4,
      stem: 'Explain how a population of bacteria becomes resistant to an antibiotic, and why antibiotics should only be used when they are essential.',
      markScheme: [
        {
          text: 'Random mutation produces a few bacteria in the population that are resistant to the antibiotic',
          marks: 1,
        },
        {
          text: 'When the antibiotic is used, the non-resistant bacteria are killed but the resistant ones survive',
          marks: 1,
        },
        {
          text: 'The survivors reproduce and pass on the resistance allele, so the proportion of resistant bacteria in the population increases',
          marks: 1,
        },
        {
          text: 'Every unnecessary use repeats this selection, so limiting use slows the increase in resistance',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '突变是先发生的、而且是偶然的——细菌不是因为接触了药物才变得耐药。写"它们逐渐适应了"讲的是拉马克，不是自然选择。',
        en: 'The mutation comes first and by chance — bacteria do not become resistant because they were exposed. Writing "they get used to it" describes Lamarck, not natural selection.',
      },
    },
  ],
  related: ['bio-health-001', 'bio-health-002', 'igcse-0610-10-1-disease-immunity', 'igcse-0610-7-1-nutrition'],
};
