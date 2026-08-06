import type { KnowledgePoint } from '../types';

export const bioHuman002: KnowledgePoint = {
  id: 'bio-human-002',
  subject: 'biology',
  title: { zh: '血液循环与心脏', en: 'Blood Circulation and the Heart' },
  summary: {
    zh: '认识心脏四腔与瓣膜的结构、体循环和肺循环两条途径，理解血液成分与三种血管的特点，明白心脏作为循环“泵”的工作原理。',
    en: 'Learn the four chambers and valves of the heart, the double circulation through the body and lungs, the components of blood and the three types of blood vessel, and how the heart works as a pump.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7b/ch1'],
    igcse: ['0610/9'],
  },
  keywords: {
    zh: ['心脏', '心房', '心室', '瓣膜', '体循环', '肺循环', '动脉', '静脉', '毛细血管', '血液', '血浆', '红细胞'],
    en: ['heart', 'atrium', 'ventricle', 'valve', 'double circulation', 'systemic circulation', 'pulmonary circulation', 'artery', 'vein', 'capillary', 'plasma', 'red blood cell', 'coronary artery'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '心脏：血液循环的动力泵' },
      {
        type: 'paragraph',
        text: '心脏位于胸腔中部偏左，主要由心肌构成，分为左心房、左心室、右心房、右心室四个腔。左右两侧不相通；同侧的心房与心室之间有房室瓣，心室与动脉之间有动脉瓣。瓣膜只能朝一个方向开，保证血液按“心房 → 心室 → 动脉”的方向流动，防止倒流。心室壁比心房壁厚，左心室壁最厚，因为它要把血液泵往全身。',
      },
      { type: 'formula', latex: '\\text{心输出量} = \\text{每搏输出量} \\times \\text{心率}', caption: '心脏每分钟泵出的血量' },
      { type: 'heading', text: '两条循环途径：体循环与肺循环' },
      {
        type: 'paragraph',
        text: '人体的血液循环包括体循环和肺循环，两条途径同时进行，在心脏处连通，构成一个完整的循环。体循环：左心室 → 主动脉 → 全身各级动脉 → 组织处毛细血管 → 各级静脉 → 上、下腔静脉 → 右心房。在组织毛细血管处，血液把氧气和养料交给细胞，带走二氧化碳等废物，动脉血变成静脉血。肺循环：右心室 → 肺动脉 → 肺部毛细血管 → 肺静脉 → 左心房。在肺部毛细血管处，血液排出二氧化碳、获得氧气，静脉血变成动脉血。',
      },
      {
        type: 'list',
        items: [
          '体循环：左心室出发，回到右心房，动脉血变成静脉血。',
          '肺循环：右心室出发，回到左心房，静脉血变成动脉血。',
          '肺动脉里流的是静脉血，肺静脉里流的是动脉血——血管名称按血流方向命名，与含氧量无关。',
        ],
      },
      { type: 'heading', text: '三种血管的结构与功能' },
      {
        type: 'list',
        items: [
          '动脉：把血液从心脏送到全身，管壁厚、弹性大、血流快，大多分布在身体较深处。',
          '静脉：把血液送回心脏，管壁较薄、弹性小、管腔大，四肢静脉内有静脉瓣防止倒流。',
          '毛细血管：连接最小动脉与最小静脉，管壁只由一层上皮细胞构成，管径极小、红细胞单行通过，血流最慢，是物质交换的场所。',
        ],
      },
      { type: 'heading', text: '血液的成分' },
      {
        type: 'paragraph',
        text: '血液由血浆和血细胞组成。血浆的主要功能是运载血细胞、运输营养物质和代谢废物。血细胞包括：红细胞，富含血红蛋白，能运输氧气；白细胞，能吞噬病菌、防御疾病；血小板，参与止血和凝血。',
      },
      { type: 'heading', text: '心脏自身的供血' },
      {
        type: 'paragraph',
        text: '心肌所需的氧气和养料由冠状动脉供应，血液流经心肌间的毛细血管后由冠状静脉流回右心房。冠状动脉发生病变（如堵塞）会引起心肌缺血，严重时可导致心肌梗死。',
      },
    ],
    en: [
      { type: 'heading', text: 'The heart: the pump of the circulatory system' },
      {
        type: 'paragraph',
        text: 'The heart lies in the chest, slightly left of centre, and is made mostly of cardiac muscle. It has four chambers: left atrium, left ventricle, right atrium and right ventricle; the two sides are completely separated. Valves between atrium and ventricle (atrioventricular valves) and at the base of the arteries (semilunar valves) open in one direction only, ensuring one-way flow: atrium → ventricle → artery, preventing backflow. Ventricle walls are thicker than atrial walls, and the left ventricle is thickest because it must pump blood to the whole body.',
      },
      { type: 'formula', latex: '\\text{cardiac output} = \\text{stroke volume} \\times \\text{heart rate}', caption: 'Volume of blood pumped per minute' },
      { type: 'heading', text: 'Two circuits: the double circulation' },
      {
        type: 'paragraph',
        text: 'Humans have a double circulation in which blood passes through the heart twice for each complete circuit of the body. In the systemic circulation, the left ventricle pumps oxygenated blood through the aorta and arteries to the capillaries of the body tissues, where oxygen and nutrients are delivered and carbon dioxide is collected; deoxygenated blood returns through the vena cava to the right atrium. In the pulmonary circulation, the right ventricle pumps deoxygenated blood through the pulmonary artery to the lungs, where carbon dioxide is lost and oxygen gained; oxygenated blood returns through the pulmonary vein to the left atrium.',
      },
      {
        type: 'list',
        items: [
          'Systemic circulation: left ventricle → body → right atrium; oxygenated blood becomes deoxygenated.',
          'Pulmonary circulation: right ventricle → lungs → left atrium; deoxygenated blood becomes oxygenated.',
          'The pulmonary artery carries deoxygenated blood and the pulmonary vein carries oxygenated blood — vessels are named by the direction of flow, not by oxygen content.',
        ],
      },
      { type: 'heading', text: 'Three types of blood vessel' },
      {
        type: 'list',
        items: [
          'Arteries carry blood away from the heart: thick, elastic walls and a narrow lumen to withstand pulsatile high pressure.',
          'Veins carry blood back to the heart: thinner walls, a wide lumen, and valves to prevent backflow.',
          'Capillaries link arterioles to venules: walls only one cell thick, lumens just wide enough for red cells in single file — the site of exchange with tissues.',
        ],
      },
      { type: 'heading', text: 'Components of blood' },
      {
        type: 'paragraph',
        text: 'Blood consists of plasma and blood cells. Plasma transports blood cells, nutrients, hormones, carbon dioxide and urea. Red blood cells contain haemoglobin and transport oxygen; white blood cells defend the body against pathogens by phagocytosis and antibody production; platelets take part in clotting at wounds.',
      },
      { type: 'heading', text: 'The heart’s own blood supply' },
      {
        type: 'paragraph',
        text: 'The heart muscle itself is supplied with oxygen and nutrients by the coronary arteries, which branch from the base of the aorta. Blockage of a coronary artery starves part of the heart muscle of oxygen, causing a heart attack.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '心脏的瓣膜能够保证血液按一定方向流动，下列血流方向正确的是（　）',
        en: 'The valves of the heart ensure one-way blood flow. Which sequence is correct?',
      },
      options: {
        zh: [
          '心房 → 心室 → 动脉',
          '心室 → 心房 → 动脉',
          '心房 → 动脉 → 心室',
          '心室 → 动脉 → 心房',
        ],
        en: [
          'atrium → ventricle → artery',
          'ventricle → atrium → artery',
          'atrium → artery → ventricle',
          'ventricle → artery → atrium',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '房室瓣位于心房与心室之间，动脉瓣位于心室与动脉之间，瓣膜只能单方向开放，血液只能由心房流向心室、再由心室流向动脉，不能倒流，故 B、C、D 均违背瓣膜的定向作用。',
        en: 'Atrioventricular valves lie between atrium and ventricle, and semilunar valves between ventricle and artery; they open one way only, so blood flows atrium → ventricle → artery and cannot flow backwards — B, C and D all violate this one-way action.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于体循环和肺循环，下列说法正确的是（　）',
        en: 'Which statement about the systemic and pulmonary circulations is correct?',
      },
      options: {
        zh: [
          '体循环从左心室出发回到右心房，血液由动脉血变成静脉血',
          '肺循环从左心室出发，把静脉血送到肺部',
          '肺动脉里流动脉血，肺静脉里流静脉血',
          '体循环和肺循环先后进行，先体循环后肺循环',
        ],
        en: [
          'The systemic circulation leaves the left ventricle and returns to the right atrium, with blood changing from oxygenated to deoxygenated',
          'The pulmonary circulation starts from the left ventricle and sends deoxygenated blood to the lungs',
          'The pulmonary artery carries oxygenated blood and the pulmonary vein carries deoxygenated blood',
          'The two circuits run one after another — first systemic, then pulmonary',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '肺循环从右心室出发，故 B 错；肺动脉流的是静脉血、肺静脉流的是动脉血，血管按血流方向命名而非含氧量，故 C 错；两条循环同时进行，在心脏处汇合，故 D 错。',
        en: 'The pulmonary circulation starts from the right ventricle (B wrong). The pulmonary artery carries deoxygenated blood and the pulmonary vein oxygenated blood — vessels are named by direction of flow, not oxygen content (C wrong). The two circuits operate simultaneously, meeting at the heart (D wrong).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '毛细血管是血液与组织细胞进行物质交换的场所，下列特点中与该功能无关的是（　）',
        en: 'Capillaries are the site of exchange between blood and tissues. Which feature is NOT related to this exchange function?',
      },
      options: {
        zh: ['管壁只由一层上皮细胞构成', '管径极小，红细胞单行通过', '血流速度最慢', '管内都有防止血液倒流的瓣膜'],
        en: ['walls only one cell thick', 'lumen so narrow that red cells pass in single file', 'the slowest blood flow of all vessels', 'valves throughout the vessel to prevent backflow'],
      },
      answerIndex: 3,
      explanation: {
        zh: '管壁薄、管径小、血流慢都有利于物质充分交换；毛细血管内没有瓣膜，瓣膜存在于静脉和心脏中，故选 D。A、B、C 都是适于物质交换的结构与功能特点。',
        en: 'Thin walls, a narrow lumen and slow flow all maximise exchange time and diffusion; capillaries have no valves — valves are found in veins and the heart — so D is correct. A, B and C are all adaptations for exchange.',
      },
    },
  ],
  related: ['igcse-0610-9-1-transport-animals', 'bio-human-003', 'igcse-0610-11-1-gas-exchange'],
};
