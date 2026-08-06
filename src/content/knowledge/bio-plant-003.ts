import type { KnowledgePoint } from '../types';

export const bioPlant003: KnowledgePoint = {
  id: 'bio-plant-003',
  subject: 'biology',
  title: { zh: '蒸腾作用与水分运输', en: 'Transpiration and Water Transport' },
  summary: {
    zh: '理解蒸腾作用的概念、气孔的开闭调节与蒸腾拉力，掌握水分在根、茎、叶中通过导管运输的途径及蒸腾作用的意义。',
    en: 'Understand transpiration, the role of stomata and the transpiration pull, and follow the pathway of water through xylem from root to leaf, together with the significance of transpiration.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j7a/ch3'],
    igcse: ['0610/8'],
  },
  keywords: {
    zh: ['蒸腾作用', '气孔', '保卫细胞', '导管', '蒸腾拉力', '水分运输', '木质部'],
    en: ['transpiration', 'stomata', 'guard cells', 'xylem', 'transpiration pull', 'water transport', 'cohesion'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '蒸腾作用的概念与主要部位' },
      {
        type: 'paragraph',
        text: '水分从活的植物体表面以水蒸气状态散失到大气中的过程，叫做蒸腾作用。叶片是蒸腾作用的主要器官，水分绝大部分通过叶片表皮上的气孔散失。',
      },
      { type: 'heading', text: '气孔的结构与开闭调节' },
      {
        type: 'paragraph',
        text: '气孔是由一对半月形的保卫细胞围成的空腔。保卫细胞吸水膨胀时，气孔张开；保卫细胞失水收缩时，气孔闭合。植物通过调节气孔的开闭，在吸收二氧化碳进行光合作用与减少水分散失之间取得平衡。气孔是植物蒸腾失水的“门户”，也是气体交换的“窗口”。',
      },
      { type: 'heading', text: '水分的吸收与运输途径' },
      {
        type: 'paragraph',
        text: '根尖的成熟区生有大量根毛，是吸收水分和无机盐的主要部位。水分被根毛吸收后，依次经过根、茎、叶中的导管向上运输到叶片。导管是由许多长形、管状的死细胞上下连接而成的，属于输导组织，位于木质部中。',
      },
      {
        type: 'formula',
        latex: '\\text{土壤} \\rightarrow \\text{根毛细胞} \\rightarrow \\text{根的导管} \\rightarrow \\text{茎的导管} \\rightarrow \\text{叶脉导管} \\rightarrow \\text{叶肉细胞} \\rightarrow \\text{气孔} \\rightarrow \\text{大气}',
        caption: '水分在植物体内运输和散失的途径',
      },
      {
        type: 'paragraph',
        text: '叶片中的水分不断从气孔散失，产生的“蒸腾拉力”是水分和无机盐向上运输的主要动力；水分子之间的内聚力使水柱在导管中连续不断，保证水分能从根部被“拉”到几十米高的树冠。',
      },
      { type: 'heading', text: '影响蒸腾作用的因素与意义' },
      {
        type: 'list',
        items: [
          '光照、温度升高，气孔张开、水分蒸发加快，蒸腾作用增强；空气湿度大、无风时蒸腾作用减弱。',
          '蒸腾作用促进根对水分的吸收以及水分和无机盐在体内的运输。',
          '蒸腾作用能降低叶片表面的温度，避免叶片被强光灼伤。',
          '蒸腾作用参与生物圈的水循环，能提高大气湿度、增加降水。',
        ],
      },
      {
        type: 'paragraph',
        text: '应用：移栽植物时常在阴天或傍晚进行，并剪去部分枝叶、带土移栽，以减弱蒸腾作用、保护根毛，提高成活率。',
      },
    ],
    en: [
      { type: 'heading', text: 'What is transpiration' },
      {
        type: 'paragraph',
        text: 'Transpiration is the loss of water vapour from the aerial parts of a plant, mainly through the stomata of the leaves. The leaf is the main organ of transpiration.',
      },
      { type: 'heading', text: 'Stomata and guard cells' },
      {
        type: 'paragraph',
        text: 'Each stoma is a pore flanked by a pair of kidney-shaped guard cells. When guard cells take in water and become turgid, the pore opens; when they lose water and go flaccid, the pore closes. By controlling stomatal opening, the plant balances carbon dioxide uptake for photosynthesis against water loss. Stomata are both the gateway of transpiration and the window for gas exchange.',
      },
      { type: 'heading', text: 'Water uptake and the transport pathway' },
      {
        type: 'paragraph',
        text: 'The root hair zone (zone of maturation) behind the root tip bears numerous root hairs and is the main site of water and mineral ion absorption. Water then travels upwards through xylem vessels in the root, stem and leaf. Xylem vessels are long tubes of dead, hollow cells joined end to end, forming a continuous column in the wood (xylem tissue).',
      },
      {
        type: 'formula',
        latex: '\\text{soil} \\rightarrow \\text{root hair} \\rightarrow \\text{root xylem} \\rightarrow \\text{stem xylem} \\rightarrow \\text{leaf veins} \\rightarrow \\text{mesophyll} \\rightarrow \\text{stomata} \\rightarrow \\text{air}',
        caption: 'Pathway of water movement through the plant',
      },
      {
        type: 'paragraph',
        text: 'As water evaporates from mesophyll walls and diffuses out through the stomata, it creates a transpiration pull — the main force drawing water and mineral ions upwards. Cohesion between water molecules keeps the water column unbroken, so water can be pulled to the top of a tree tens of metres tall.',
      },
      { type: 'heading', text: 'Factors affecting transpiration and its significance' },
      {
        type: 'list',
        items: [
          'Stronger light, higher temperature, lower humidity and wind all increase the rate of transpiration; humid, still air slows it down.',
          'Transpiration drives the uptake of water and the transport of water and mineral ions.',
          'Evaporation cools the leaf surface, protecting it from scorching in strong sunlight.',
          'Transpiration contributes to the water cycle, raising atmospheric humidity and rainfall.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Application: transplanting is best done on cloudy days or in the evening, with some leaves removed and soil kept around the roots, to reduce transpiration, protect root hairs and improve survival.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '植物体内水分向上运输到叶片的主要动力是（　）',
        en: 'The main force moving water up to the leaves is (　)',
      },
      options: {
        zh: ['光合作用', '呼吸作用', '蒸腾作用产生的拉力', '根压把水分直接压到叶尖'],
        en: ['photosynthesis', 'respiration', 'the pull generated by transpiration', 'root pressure pushing water to the leaf tips'],
      },
      answerIndex: 2,
      explanation: {
        zh: '叶片蒸腾失水产生的蒸腾拉力是水分沿导管上升的主要动力，配合水分子间的内聚力使水柱不断。A、B 与水分运输动力无关；根压存在但力量有限，不能把水分送到高大乔木的树冠，故 D 错。',
        en: 'The transpiration pull from evaporating leaves, aided by cohesion between water molecules, is the main force lifting the water column. A and B are unrelated to water transport; root pressure exists but is far too weak to raise water to a tall tree canopy (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '移栽树苗时剪去部分枝叶，这样做的目的是（　）',
        en: 'When transplanting a sapling, some branches and leaves are cut off in order to (　)',
      },
      options: {
        zh: [
          '减弱蒸腾作用，减少水分散失',
          '增强光合作用，制造更多有机物',
          '促进呼吸作用，提供更多能量',
          '美观整齐，便于运输',
        ],
        en: [
          'reduce transpiration and cut down water loss',
          'increase photosynthesis to make more food',
          'promote respiration to supply more energy',
          'make the tree tidy and easier to transport',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '移栽时根系（尤其根毛）受损，吸水能力下降；叶片是蒸腾作用的主要器官，剪去部分枝叶可减弱蒸腾作用，防止植物因失水过多而萎蔫死亡。B、C 与保活无直接关系；D 不是生物学目的。',
        en: 'Transplanting damages roots and root hairs, weakening water uptake; since leaves are the main organ of transpiration, removing some foliage reduces water loss and prevents wilting. B and C are not directly related to survival; D is not a biological reason.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于气孔开闭的叙述，正确的是（　）',
        en: 'Which statement about the opening and closing of stomata is correct?',
      },
      options: {
        zh: [
          '气孔由一对表皮细胞围成',
          '保卫细胞吸水膨胀时气孔张开',
          '气孔总是处于张开状态，与水分无关',
          '气孔闭合有利于增强蒸腾作用',
        ],
        en: [
          'Each stoma is surrounded by a pair of ordinary epidermal cells',
          'When guard cells take up water and swell, the stoma opens',
          'Stomata are always open regardless of water status',
          'Closing stomata increases transpiration',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '气孔由一对保卫细胞围成，故 A 错；保卫细胞吸水膨胀时气孔张开、失水时闭合，故 C 错；气孔闭合会减少水分散失、减弱蒸腾作用，故 D 错。',
        en: 'Stomata are bordered by guard cells, not ordinary epidermal cells (A wrong); turgid guard cells open the pore and flaccid ones close it, so C is wrong; closed stomata reduce water loss and slow transpiration (D wrong).',
      },
    },
  ],
  related: ['igcse-0610-8-1-transport-plants', 'igcse-0610-3-2-osmosis', 'bio-plant-001'],
};
