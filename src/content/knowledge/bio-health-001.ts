import type { KnowledgePoint } from '../types';

export const bioHealth001: KnowledgePoint = {
  id: 'bio-health-001',
  subject: 'biology',
  title: { zh: '传染病及其预防', en: 'Infectious Diseases and Their Prevention' },
  summary: {
    zh: '认识由病原体引起的传染病及其传染性、流行性的特点，掌握传染病流行的三个基本环节，学会从控制传染源、切断传播途径、保护易感人群三方面预防传染病。',
    en: 'Learn what infectious (transmissible) diseases are and how pathogens cause them, understand the three links needed for a disease to spread, and see how breaking each link — source, transmission route, susceptible host — prevents epidemics.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j8b/ch2'],
    igcse: ['0610/10.1'],
  },
  keywords: {
    zh: ['传染病', '病原体', '传染源', '传播途径', '易感人群', '控制传染源', '切断传播途径', '保护易感人群'],
    en: ['infectious disease', 'pathogen', 'source of infection', 'transmission route', 'susceptible host', 'vector', 'hygiene', 'epidemic'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出传染病的概念和特点，举例说明细菌、病毒、寄生虫等病原体。',
          '说明传染病流行必须同时具备传染源、传播途径、易感人群三个基本环节。',
          '举例说明预防传染病的三类措施：控制传染源、切断传播途径、保护易感人群。',
        ],
      },
      { type: 'heading', text: '什么是传染病' },
      {
        type: 'paragraph',
        text: '传染病是由病原体引起的、能在人与人之间或人与动物之间传播的疾病。病原体是能引起疾病的生物或微生物，主要包括细菌、病毒和寄生虫等。传染病具有传染性和流行性的特点：它可以从一个人传给另一个人，在一定条件下还可能在人群中大面积流行。近视、贫血、龋齿等不是由病原体引起的，不属于传染病。',
      },
      {
        type: 'list',
        items: [
          '细菌性传染病的病原体：结核杆菌（肺结核）、痢疾杆菌（细菌性痢疾）、霍乱弧菌（霍乱）。',
          '病毒性传染病的病原体：流感病毒（流行性感冒）、艾滋病病毒 HIV（艾滋病）、新型冠状病毒（新冠肺炎）。',
          '寄生虫性传染病的病原体：蛔虫（蛔虫病）、疟原虫（疟疾）、血吸虫（血吸虫病）。',
        ],
      },
      { type: 'heading', text: '传染病流行的三个基本环节' },
      {
        type: 'paragraph',
        text: '传染病能够在人群中流行，必须同时具备传染源、传播途径和易感人群三个基本环节，缺少其中任何一个环节，传染病就流行不起来。',
      },
      {
        type: 'list',
        items: [
          '传染源：能够散播病原体的人或动物，如流感患者、携带狂犬病毒的狗。注意：传染源是"人或动物"，不是病原体本身。',
          '传播途径：病原体离开传染源到达人或动物所经过的途径，主要有空气（飞沫）传播、饮食（水）传播、接触传播和生物媒介传播（如按蚊传播疟疾）。',
          '易感人群：对某种传染病缺乏免疫力而容易感染该病的人群，如未接种麻疹疫苗的儿童是麻疹的易感人群。',
        ],
      },
      { type: 'heading', text: '预防传染病的一般措施' },
      {
        type: 'paragraph',
        text: '预防传染病的措施总是针对流行的三个环节来设计的。判断某项措施属于哪一类，关键看它针对的是哪个环节：针对传染源的是控制传染源，针对"路途"的是切断传播途径，针对健康人的是保护易感人群。',
      },
      {
        type: 'list',
        items: [
          '控制传染源：早发现、早诊断、早报告、早隔离、早治疗病人；焚烧或深埋患传染病死亡的动物。',
          '切断传播途径：搞好个人和环境卫生，勤洗手、戴口罩、对餐具和用具消毒；消灭蚊、蝇等传播疾病的媒介生物。',
          '保护易感人群：接种疫苗使人体产生免疫力；加强体育锻炼，增强体质。',
        ],
      },
      { type: 'heading', text: '常见传染病及其传播途径' },
      {
        type: 'list',
        items: [
          '流行性感冒：由流感病毒引起，主要通过飞沫和空气传播，冬春季高发。',
          '细菌性痢疾、甲型肝炎：主要通过被污染的饮食和水传播，注意饮食卫生是关键。',
          '疟疾：由疟原虫引起，通过按蚊叮咬传播，属于生物媒介传播。',
          '艾滋病：由 HIV 引起，主要通过血液、性接触和母婴传播，一般的日常接触不会传播。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'infectious / transmissible disease（传染病）：由病原体引起、能够在宿主之间传播的疾病。',
          'pathogen（病原体）：能引起疾病的生物，如细菌、病毒、寄生虫。',
          'source of infection（传染源）：能够散播病原体的人或动物。',
          'transmission route（传播途径）：病原体从传染源到达易感者所经过的途径。',
          'vector（媒介生物）：把病原体从一个宿主带到另一个宿主的动物，如按蚊。',
          'susceptible host（易感人群）：对某种传染病缺乏免疫力、容易被感染的人。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Define an infectious disease and give examples of pathogens: bacteria, viruses and parasites.',
          'Explain that an epidemic needs three links: a source of infection, a transmission route and susceptible hosts.',
          'Give examples of the three kinds of prevention: controlling the source, breaking the transmission route, and protecting susceptible people.',
        ],
      },
      { type: 'heading', text: 'What is an infectious disease?' },
      {
        type: 'paragraph',
        text: 'An infectious (transmissible) disease is caused by a pathogen and can pass from one person to another, or between animals and people. Pathogens are organisms that cause disease — mainly bacteria, viruses and parasites. Infectious diseases are contagious and can spread through a population as an epidemic. Short-sightedness, anaemia and tooth decay are not caused by pathogens, so they are not infectious diseases.',
      },
      {
        type: 'list',
        items: [
          'Bacterial pathogens: Mycobacterium tuberculosis (tuberculosis), Shigella (dysentery), Vibrio cholerae (cholera).',
          'Viral pathogens: influenza virus (flu), HIV (AIDS), SARS-CoV-2 (COVID-19).',
          'Parasites: roundworms (ascariasis), Plasmodium (malaria), blood flukes (schistosomiasis).',
        ],
      },
      { type: 'heading', text: 'The three links of an epidemic' },
      {
        type: 'paragraph',
        text: 'A disease can only spread through a population when three links are all present: a source of infection, a transmission route and susceptible hosts. Remove any one link and the disease cannot keep spreading.',
      },
      {
        type: 'list',
        items: [
          'Source of infection: a person or animal that can release the pathogen, such as a flu patient or a dog carrying the rabies virus. Note that the source is the person or animal, not the pathogen itself.',
          'Transmission route: how the pathogen travels from the source to a new host — mainly droplets in the air, contaminated food or water, direct contact, or vectors such as the Anopheles mosquito that carries malaria.',
          'Susceptible hosts: people who lack immunity to the disease and can easily catch it, such as children not vaccinated against measles.',
        ],
      },
      { type: 'heading', text: 'General measures for prevention' },
      {
        type: 'paragraph',
        text: 'Every prevention measure targets one of the three links. To classify a measure, ask which link it acts on: measures acting on the patient or infected animal control the source; those acting "on the way" break the transmission route; those acting on healthy people protect the susceptible.',
      },
      {
        type: 'list',
        items: [
          'Control the source: early detection, diagnosis, reporting, isolation and treatment of patients; burning or deep-burying animals that died of infectious disease.',
          'Break the transmission route: personal and environmental hygiene — washing hands, wearing masks, disinfecting tableware; killing vector insects such as mosquitoes and flies.',
          'Protect the susceptible: vaccination to build immunity, and regular exercise to strengthen the body.',
        ],
      },
      { type: 'heading', text: 'Common infectious diseases and how they spread' },
      {
        type: 'list',
        items: [
          'Influenza: caused by the influenza virus, spread mainly by droplets in the air, most common in winter and spring.',
          'Bacillary dysentery and hepatitis A: spread through contaminated food and water, so food hygiene is the key defence.',
          'Malaria: caused by Plasmodium, transmitted by the bite of Anopheles mosquitoes — a vector-borne disease.',
          'AIDS: caused by HIV, transmitted through blood, sexual contact and from mother to child; ordinary daily contact does not spread it.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'infectious / transmissible disease (传染病): a disease caused by a pathogen that can be passed between hosts.',
          'pathogen (病原体): an organism that causes disease, such as a bacterium, virus or parasite.',
          'source of infection (传染源): a person or animal that releases the pathogen.',
          'transmission route (传播途径): the path by which a pathogen reaches a new host.',
          'vector (媒介生物): an animal that carries a pathogen from one host to another, e.g. the Anopheles mosquito.',
          'susceptible host (易感人群): a person who lacks immunity and can easily catch the disease.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列各项中，属于病原体的是（　）',
        en: 'Which of the following is a pathogen?',
      },
      options: {
        zh: ['结核杆菌', '艾滋病患者', '携带疟原虫的按蚊', '未接种疫苗的儿童'],
        en: ['Mycobacterium tuberculosis', 'A person with AIDS', 'A mosquito carrying Plasmodium', 'An unvaccinated child'],
      },
      answerIndex: 0,
      explanation: {
        zh: '病原体是能引起疾病的生物，结核杆菌是引起肺结核的细菌，属于病原体。艾滋病患者能散播病原体，是传染源；按蚊把疟原虫带给新宿主，属于传播途径（生物媒介）；未接种疫苗的儿童缺乏免疫力，属于易感人群。',
        en: 'A pathogen is an organism that causes disease, and M. tuberculosis is the bacterium that causes tuberculosis. The AIDS patient releases pathogens, so is a source of infection; the mosquito carries Plasmodium to a new host, so belongs to the transmission route (a vector); the unvaccinated child lacks immunity, so is a susceptible host.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '流感流行期间，健康人外出时佩戴口罩。这一措施属于（　）',
        en: 'During a flu epidemic, healthy people wear masks when going out. This measure is an example of',
      },
      options: {
        zh: ['控制传染源', '切断传播途径', '保护易感人群', '杀死病原体'],
        en: ['controlling the source of infection', 'breaking the transmission route', 'protecting susceptible people', 'killing the pathogen'],
      },
      answerIndex: 1,
      explanation: {
        zh: '流感通过飞沫和空气传播，口罩挡在病原体传播的"路途"上，属于切断传播途径。控制传染源针对的是病人或病畜，如隔离治疗流感患者；保护易感人群的典型措施是接种疫苗、锻炼身体；"杀死病原体"不是预防分类中的环节名称。',
        en: 'Flu spreads by droplets in the air, and a mask blocks the path "on the way", so it breaks the transmission route. Controlling the source targets patients or infected animals, such as isolating flu patients; protecting susceptible people typically means vaccination and exercise; "killing the pathogen" is not one of the three named categories.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '疟疾是由疟原虫引起的传染病，通过按蚊叮咬传播。下列说法正确的是（　）',
        en: 'Malaria is an infectious disease caused by Plasmodium and transmitted by the bites of Anopheles mosquitoes. Which statement is correct?',
      },
      options: {
        zh: [
          '疟原虫是传染源',
          '按蚊是疟疾流行的传染源',
          '消灭按蚊属于切断传播途径',
          '疟疾主要通过饮食传播',
        ],
        en: [
          'Plasmodium is the source of infection',
          'The mosquito is the source of infection',
          'Killing mosquitoes breaks the transmission route',
          'Malaria spreads mainly through food and water',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '疟原虫是病原体而不是传染源，传染源是能散播病原体的人或动物；按蚊是把疟原虫带给人的生物媒介，属于传播途径，所以灭蚊是切断传播途径；疟疾经蚊虫叮咬传播，不经饮食传播，经饮食传播的是痢疾、甲肝等。',
        en: 'Plasmodium is the pathogen, not the source — the source is the person or animal releasing it. The mosquito is a vector, part of the transmission route, so killing mosquitoes breaks that route. Malaria is spread by mosquito bites, not by food and water; dysentery and hepatitis A are the food-and-water examples.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-hygiene-barriers',
      syllabus: ['0610/10.1.4', '0610/10.1.5'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 3,
      stem: 'Describe two ways in which the human body prevents pathogens from entering, and state one way in which good hygiene reduces the spread of disease.',
      markScheme: [
        {
          text: 'Skin acts as a barrier; or hairs and mucus in the nose trap particles; or cilia sweep mucus out of the airways',
          marks: 1,
        },
        {
          text: 'Stomach acid kills pathogens in food; or blood clots seal wounds against entry',
          marks: 1,
        },
        {
          text: 'Washing hands, treating sewage, providing clean drinking water or covering food breaks the transmission route',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '屏障和拦截机制不是免疫反应——抗体是在病原体已经进入之后才登场的。第三条卫生措施要点明它"切断传播途径"。',
        en: 'Barriers and traps are not the immune response — antibodies come after a pathogen has already got in. For the hygiene point, say that it breaks the transmission route.',
      },
    },
  ],
  related: ['bio-health-002', 'bio-health-003', 'igcse-0610-10-1-disease-immunity'],
};
