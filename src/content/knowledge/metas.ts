// 由 scripts/extract-handwritten-metas.ts 生成，请勿手改。
// 改动手写知识点后重跑 npm run extract:metas（content-integrity 测试会校验一致性）。
import type { KnowledgePointMeta } from '../types';

/** 手写知识点轻量元数据（70 个；正文经 getKnowledgePoint 按课懒加载） */
export const handwrittenMetas: KnowledgePointMeta[] = [
  {
    "id": "bio-cell-001",
    "subject": "biology",
    "title": {
      "zh": "动植物细胞的基本结构",
      "en": "Basic Structure of Plant and Animal Cells"
    },
    "summary": {
      "zh": "认识细胞膜、细胞质、细胞核、线粒体等共有结构，以及细胞壁、叶绿体、液泡等植物细胞特有的结构，比较动植物细胞的异同。",
      "en": "Learn the structures shared by plant and animal cells — cell membrane, cytoplasm, nucleus and mitochondria — and those unique to plant cells: cell wall, chloroplasts and a large vacuole."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch2",
        "pep-bio-s1/ch3"
      ],
      "igcse": [
        "0610/2"
      ]
    },
    "keywords": {
      "zh": [
        "细胞壁",
        "细胞膜",
        "细胞质",
        "细胞核",
        "线粒体",
        "叶绿体",
        "液泡",
        "动植物细胞比较"
      ],
      "en": [
        "cell wall",
        "cell membrane",
        "cytoplasm",
        "nucleus",
        "mitochondrion",
        "chloroplast",
        "vacuole",
        "plant and animal cells"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-cell-002",
    "subject": "biology",
    "title": {
      "zh": "细胞膜与物质进出：扩散作用",
      "en": "Cell Membrane and Movement of Substances: Diffusion"
    },
    "summary": {
      "zh": "理解细胞膜控制物质进出的功能，认识扩散是物质从高浓度区域向低浓度区域的自发移动，并探究温度对扩散速率的影响。",
      "en": "Understand how the cell membrane controls movement into and out of cells, learn that diffusion is the net movement of particles from a region of higher concentration to lower concentration, and investigate how temperature affects the rate of diffusion."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch2",
        "pep-bio-s1/ch4"
      ],
      "igcse": [
        "0610/3"
      ]
    },
    "keywords": {
      "zh": [
        "扩散",
        "细胞膜",
        "选择透过性",
        "浓度梯度",
        "被动运输",
        "温度"
      ],
      "en": [
        "diffusion",
        "cell membrane",
        "partially permeable",
        "concentration gradient",
        "passive transport",
        "temperature"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "bio-cell-003",
    "subject": "biology",
    "title": {
      "zh": "渗透作用与植物细胞的吸水和失水",
      "en": "Osmosis and Water Uptake and Loss in Plant Cells"
    },
    "summary": {
      "zh": "理解渗透是水分子通过半透膜从低浓度溶液向高浓度溶液的扩散，探究外界溶液浓度如何决定植物细胞吸水、失水乃至发生质壁分离。",
      "en": "Understand osmosis as the diffusion of water across a partially permeable membrane from a dilute to a concentrated solution, and investigate how the external concentration determines whether a plant cell gains water, loses water, or undergoes plasmolysis."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch3",
        "pep-bio-s1/ch4"
      ],
      "igcse": [
        "0610/3"
      ]
    },
    "keywords": {
      "zh": [
        "渗透作用",
        "半透膜",
        "水势",
        "细胞液浓度",
        "质壁分离",
        "吸水",
        "失水"
      ],
      "en": [
        "osmosis",
        "partially permeable membrane",
        "water potential",
        "cell sap concentration",
        "plasmolysis",
        "turgid",
        "flaccid"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "bio-cell-004",
    "subject": "biology",
    "title": {
      "zh": "细胞分裂与细胞生长",
      "en": "Cell Division and Cell Growth"
    },
    "summary": {
      "zh": "理解细胞通过分裂增加数目、通过生长增大体积，认识细胞分裂时染色体先复制后平均分配的规律，以及细胞不能无限长大的原因。",
      "en": "Understand how organisms grow through cell division (increasing cell number) and cell growth (increasing cell size), learn how chromosomes are duplicated and shared equally during division, and why cells cannot grow indefinitely."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch2",
        "pep-bio-s1/ch6"
      ],
      "igcse": [
        "0610/2"
      ]
    },
    "keywords": {
      "zh": [
        "细胞分裂",
        "细胞生长",
        "染色体",
        "有丝分裂",
        "细胞分化",
        "表面积与体积比"
      ],
      "en": [
        "cell division",
        "cell growth",
        "chromosomes",
        "mitosis",
        "cell differentiation",
        "surface area to volume ratio"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-eco-001",
    "subject": "biology",
    "title": {
      "zh": "生态系统的组成与食物链、食物网",
      "en": "Components of Ecosystems, Food Chains and Food Webs"
    },
    "summary": {
      "zh": "认识生态系统的生物部分与非生物部分，理解生产者、消费者、分解者的作用，学会正确书写食物链并分析食物网。",
      "en": "Identify the biotic and abiotic components of an ecosystem, understand the roles of producers, consumers and decomposers, and learn to write food chains and analyse food webs."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch1"
      ],
      "igcse": [
        "0610/19"
      ]
    },
    "keywords": {
      "zh": [
        "生态系统",
        "生产者",
        "消费者",
        "分解者",
        "食物链",
        "食物网",
        "生物圈",
        "非生物部分"
      ],
      "en": [
        "ecosystem",
        "producer",
        "consumer",
        "decomposer",
        "food chain",
        "food web",
        "trophic level",
        "biosphere"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-eco-002",
    "subject": "biology",
    "title": {
      "zh": "种群数量的增长：J 型曲线与 S 型曲线",
      "en": "Population Growth: J-shaped and S-shaped Curves"
    },
    "summary": {
      "zh": "比较理想条件下的 J 型（指数）增长和资源有限条件下的 S 型（逻辑斯谛）增长，理解内禀增长率 r 与环境容纳量 K 的含义。",
      "en": "Compare exponential (J-shaped) growth under ideal conditions with logistic (S-shaped) growth under limited resources, and understand the intrinsic growth rate r and the carrying capacity K."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch1"
      ],
      "igcse": [
        "0610/19"
      ]
    },
    "keywords": {
      "zh": [
        "种群",
        "J 型曲线",
        "S 型曲线",
        "指数增长",
        "逻辑斯谛增长",
        "环境容纳量",
        "内禀增长率",
        "倍增时间"
      ],
      "en": [
        "population",
        "exponential growth",
        "logistic growth",
        "carrying capacity",
        "intrinsic growth rate",
        "limiting factor",
        "J-shaped curve",
        "sigmoid curve"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "bio-eco-003",
    "subject": "biology",
    "title": {
      "zh": "生态系统的物质循环与能量流动",
      "en": "Material Cycles and Energy Flow in Ecosystems"
    },
    "summary": {
      "zh": "理解能量沿食物链单向流动、逐级递减（传递效率约 10%–20%）的规律，以及物质（以碳为例）在生物群落与无机环境之间的循环。",
      "en": "Understand that energy flows one way along food chains and decreases at each trophic level (transfer efficiency about 10%–20%), while matter — carbon, for example — cycles between the biotic community and the abiotic environment."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch1"
      ],
      "igcse": [
        "0610/19"
      ]
    },
    "keywords": {
      "zh": [
        "能量流动",
        "物质循环",
        "单向流动",
        "逐级递减",
        "碳循环",
        "能量传递效率",
        "能量金字塔",
        "营养级"
      ],
      "en": [
        "energy flow",
        "nutrient cycle",
        "carbon cycle",
        "energy transfer efficiency",
        "trophic level",
        "pyramid of energy",
        "photosynthesis",
        "decomposer"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-eco-004",
    "subject": "biology",
    "title": {
      "zh": "自然选择与生物进化",
      "en": "Natural Selection and Evolution"
    },
    "summary": {
      "zh": "理解达尔文自然选择学说的要点，通过加拉帕戈斯达尔文雀和桦尺蛾工业黑化两个经典实例，分析变异、选择与适应的关系。",
      "en": "Understand the key points of Darwin’s theory of natural selection, and analyse the relationship between variation, selection and adaptation through two classic examples: Darwin’s finches in the Galápagos and industrial melanism in the peppered moth."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j8b/ch1",
        "pep-bio-s2/ch6"
      ],
      "igcse": [
        "0610/18"
      ]
    },
    "keywords": {
      "zh": [
        "自然选择",
        "变异",
        "适者生存",
        "进化",
        "达尔文雀",
        "工业黑化",
        "适应",
        "生存斗争"
      ],
      "en": [
        "natural selection",
        "variation",
        "survival of the fittest",
        "evolution",
        "Darwin's finches",
        "industrial melanism",
        "adaptation",
        "mutation"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-genetics-001",
    "subject": "biology",
    "title": {
      "zh": "DNA、基因与染色体",
      "en": "DNA, Genes and Chromosomes"
    },
    "summary": {
      "zh": "理清染色体、DNA 与基因之间的层次关系：染色体由 DNA 和蛋白质组成，基因是有遗传效应的 DNA 片段，理解遗传信息如何存储与传递。",
      "en": "Clarify the hierarchy between chromosomes, DNA and genes: chromosomes are made of DNA and protein, a gene is a section of DNA that codes for a protein, and see how genetic information is stored and passed on."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j8b/ch1",
        "pep-bio-s2/ch2",
        "pep-bio-s2/ch3"
      ],
      "igcse": [
        "0610/17"
      ]
    },
    "keywords": {
      "zh": [
        "染色体",
        "DNA",
        "基因",
        "细胞核",
        "遗传物质",
        "双螺旋",
        "脱氧核糖核酸",
        "蛋白质"
      ],
      "en": [
        "chromosome",
        "DNA",
        "gene",
        "nucleus",
        "genetic material",
        "double helix",
        "allele",
        "protein"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-genetics-002",
    "subject": "biology",
    "title": {
      "zh": "孟德尔分离定律",
      "en": "Mendel's Law of Segregation"
    },
    "summary": {
      "zh": "通过豌豆杂交实验认识一对相对性状的遗传规律：杂合子自交后代表现 3:1 的性状分离比，测交后代为 1:1，并通过抽样模拟体会理论与统计的关系。",
      "en": "Explore the inheritance of a single pair of contrasting characteristics through Mendel’s pea experiments: a self-cross of heterozygotes gives a 3:1 phenotypic ratio and a test cross gives 1:1, with sampling simulations linking theory to statistics."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j8b/ch1",
        "pep-bio-s2/ch1"
      ],
      "igcse": [
        "0610/17"
      ]
    },
    "keywords": {
      "zh": [
        "分离定律",
        "相对性状",
        "显性性状",
        "隐性性状",
        "纯合子",
        "杂合子",
        "自交",
        "测交",
        "性状分离"
      ],
      "en": [
        "law of segregation",
        "monohybrid inheritance",
        "dominant allele",
        "recessive allele",
        "homozygous",
        "heterozygous",
        "genotype",
        "phenotype",
        "test cross"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "bio-genetics-003",
    "subject": "biology",
    "title": {
      "zh": "自由组合定律",
      "en": "Law of Independent Assortment"
    },
    "summary": {
      "zh": "研究两对相对性状的遗传：双杂合子（AaBb）自交后代出现 9:3:3:1 的表现型比例，理解非同源染色体上的非等位基因在形成配子时自由组合。",
      "en": "Study the inheritance of two pairs of contrasting characteristics: self-crossing a double heterozygote (AaBb) gives a 9:3:3:1 phenotypic ratio, showing that alleles of different genes assort independently when gametes form."
    },
    "gradeTier": "senior",
    "syllabus": {
      "pep": [
        "pep-bio-s2/ch1"
      ],
      "igcse": [
        "0610/17"
      ]
    },
    "keywords": {
      "zh": [
        "自由组合定律",
        "两对相对性状",
        "双因子杂交",
        "非等位基因",
        "配子",
        "表现型比例",
        "9:3:3:1",
        "重组"
      ],
      "en": [
        "law of independent assortment",
        "dihybrid inheritance",
        "dihybrid cross",
        "alleles",
        "gametes",
        "phenotypic ratio",
        "9:3:3:1",
        "recombination"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "bio-genetics-004",
    "subject": "biology",
    "title": {
      "zh": "遗传图解与概率计算",
      "en": "Genetic Diagrams and Probability Calculations"
    },
    "summary": {
      "zh": "学会用规范的遗传图解、棋盘法和分支法预测杂交后代的基因型与表现型，计算各种类型出现的概率。",
      "en": "Learn to use genetic diagrams, Punnett squares and the branch (forked-line) method to predict offspring genotypes and phenotypes, and to calculate the probability of each outcome."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j8b/ch1",
        "pep-bio-s2/ch1"
      ],
      "igcse": [
        "0610/17"
      ]
    },
    "keywords": {
      "zh": [
        "遗传图解",
        "棋盘法",
        "分支法",
        "概率",
        "配子",
        "基因型",
        "表现型",
        "乘法原理"
      ],
      "en": [
        "genetic diagram",
        "Punnett square",
        "branch method",
        "probability",
        "gametes",
        "genotype",
        "phenotype",
        "multiplication rule"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-human-001",
    "subject": "biology",
    "title": {
      "zh": "消化与吸收：酶的作用",
      "en": "Digestion and Absorption: The Role of Enzymes"
    },
    "summary": {
      "zh": "探究唾液淀粉酶、胃蛋白酶等消化酶如何催化食物分解，理解温度与 pH 对酶活性的影响以及高温变性的不可逆性。",
      "en": "Explore how digestive enzymes such as amylase and pepsin catalyse the breakdown of food, and understand how temperature and pH affect enzyme activity, including irreversible denaturation at high temperatures."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7b/ch1",
        "pep-bio-s1/ch5"
      ],
      "igcse": [
        "0610/5",
        "0610/7"
      ]
    },
    "keywords": {
      "zh": [
        "消化",
        "吸收",
        "消化酶",
        "唾液淀粉酶",
        "胃蛋白酶",
        "最适温度",
        "最适 pH",
        "变性失活",
        "小肠",
        "生物催化剂"
      ],
      "en": [
        "digestion",
        "absorption",
        "digestive enzyme",
        "amylase",
        "pepsin",
        "protease",
        "optimum temperature",
        "optimum pH",
        "denaturation",
        "active site",
        "biological catalyst",
        "small intestine",
        "villi"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "bio-human-002",
    "subject": "biology",
    "title": {
      "zh": "血液循环与心脏",
      "en": "Blood Circulation and the Heart"
    },
    "summary": {
      "zh": "认识心脏四腔与瓣膜的结构、体循环和肺循环两条途径，理解血液成分与三种血管的特点，明白心脏作为循环“泵”的工作原理。",
      "en": "Learn the four chambers and valves of the heart, the double circulation through the body and lungs, the components of blood and the three types of blood vessel, and how the heart works as a pump."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7b/ch1"
      ],
      "igcse": [
        "0610/9"
      ]
    },
    "keywords": {
      "zh": [
        "心脏",
        "心房",
        "心室",
        "瓣膜",
        "体循环",
        "肺循环",
        "动脉",
        "静脉",
        "毛细血管",
        "血液",
        "血浆",
        "红细胞"
      ],
      "en": [
        "heart",
        "atrium",
        "ventricle",
        "valve",
        "double circulation",
        "systemic circulation",
        "pulmonary circulation",
        "artery",
        "vein",
        "capillary",
        "plasma",
        "red blood cell",
        "coronary artery"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-human-003",
    "subject": "biology",
    "title": {
      "zh": "人体的呼吸与气体交换",
      "en": "Breathing and Gas Exchange in Humans"
    },
    "summary": {
      "zh": "理解呼吸道对空气的处理、呼吸运动如何实现肺通气，以及肺泡与血液、血液与组织细胞之间的气体交换原理。",
      "en": "Understand how the airways condition inspired air, how breathing movements ventilate the lungs, and how gases are exchanged by diffusion in the alveoli and the tissues."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7b/ch1"
      ],
      "igcse": [
        "0610/11",
        "0610/12"
      ]
    },
    "keywords": {
      "zh": [
        "呼吸道",
        "肺",
        "肺泡",
        "呼吸运动",
        "膈肌",
        "肋间肌",
        "气体交换",
        "扩散作用",
        "有氧呼吸"
      ],
      "en": [
        "airway",
        "trachea",
        "bronchus",
        "alveolus",
        "breathing",
        "ventilation",
        "diaphragm",
        "intercostal muscles",
        "gas exchange",
        "diffusion",
        "aerobic respiration",
        "inspired air",
        "expired air"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-human-004",
    "subject": "biology",
    "title": {
      "zh": "神经调节：反射与反射弧",
      "en": "Nervous Control: Reflexes and the Reflex Arc"
    },
    "summary": {
      "zh": "认识神经元的结构与功能，理解神经调节的基本方式——反射，掌握反射弧的五个环节以及非条件反射与条件反射的区别。",
      "en": "Learn the structure of neurones, understand the reflex as the basic unit of nervous control, and master the five components of the reflex arc and the difference between simple and conditioned reflexes."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7b/ch1"
      ],
      "igcse": [
        "0610/14"
      ]
    },
    "keywords": {
      "zh": [
        "神经元",
        "反射",
        "反射弧",
        "感受器",
        "传入神经",
        "神经中枢",
        "传出神经",
        "效应器",
        "非条件反射",
        "条件反射"
      ],
      "en": [
        "neurone",
        "reflex",
        "reflex arc",
        "receptor",
        "sensory neurone",
        "relay neurone",
        "motor neurone",
        "effector",
        "synapse",
        "central nervous system",
        "simple reflex",
        "conditioned reflex"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-plant-001",
    "subject": "biology",
    "title": {
      "zh": "光合作用及其影响因素",
      "en": "Photosynthesis and Its Limiting Factors"
    },
    "summary": {
      "zh": "理解光合作用的原料、条件、场所和产物，探究光照强度、二氧化碳浓度和温度如何影响光合作用速率。",
      "en": "Understand the raw materials, conditions, site and products of photosynthesis, and investigate how light intensity, carbon dioxide concentration and temperature affect its rate."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch3",
        "pep-bio-s1/ch5"
      ],
      "igcse": [
        "0610/6"
      ]
    },
    "keywords": {
      "zh": [
        "光合作用",
        "叶绿体",
        "叶绿素",
        "光照强度",
        "二氧化碳浓度",
        "温度",
        "限制因素",
        "光饱和点"
      ],
      "en": [
        "photosynthesis",
        "chloroplast",
        "chlorophyll",
        "light intensity",
        "carbon dioxide concentration",
        "temperature",
        "limiting factor",
        "light saturation"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "bio-plant-002",
    "subject": "biology",
    "title": {
      "zh": "呼吸作用",
      "en": "Respiration"
    },
    "summary": {
      "zh": "理解呼吸作用的概念、反应式与场所，知道呼吸作用释放能量供生命活动利用，并能比较呼吸作用与光合作用的区别与联系。",
      "en": "Understand the concept, equation and site of respiration, know that it releases energy for life processes, and compare respiration with photosynthesis."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch3",
        "pep-bio-s1/ch5"
      ],
      "igcse": [
        "0610/12"
      ]
    },
    "keywords": {
      "zh": [
        "呼吸作用",
        "线粒体",
        "有氧呼吸",
        "无氧呼吸",
        "释放能量",
        "有机物分解"
      ],
      "en": [
        "respiration",
        "aerobic respiration",
        "anaerobic respiration",
        "mitochondrion",
        "energy release",
        "glucose breakdown"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-plant-003",
    "subject": "biology",
    "title": {
      "zh": "蒸腾作用与水分运输",
      "en": "Transpiration and Water Transport"
    },
    "summary": {
      "zh": "理解蒸腾作用的概念、气孔的开闭调节与蒸腾拉力，掌握水分在根、茎、叶中通过导管运输的途径及蒸腾作用的意义。",
      "en": "Understand transpiration, the role of stomata and the transpiration pull, and follow the pathway of water through xylem from root to leaf, together with the significance of transpiration."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch3"
      ],
      "igcse": [
        "0610/8"
      ]
    },
    "keywords": {
      "zh": [
        "蒸腾作用",
        "气孔",
        "保卫细胞",
        "导管",
        "蒸腾拉力",
        "水分运输",
        "木质部"
      ],
      "en": [
        "transpiration",
        "stomata",
        "guard cells",
        "xylem",
        "transpiration pull",
        "water transport",
        "cohesion"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "bio-plant-004",
    "subject": "biology",
    "title": {
      "zh": "绿色植物与碳—氧平衡",
      "en": "Green Plants and the Carbon–Oxygen Balance"
    },
    "summary": {
      "zh": "理解绿色植物通过光合作用吸收二氧化碳、释放氧气，维持生物圈中碳—氧相对平衡的生态意义，认识保护植被的重要性。",
      "en": "Understand how green plants absorb carbon dioxide and release oxygen through photosynthesis, maintaining the carbon–oxygen balance of the biosphere, and appreciate the importance of protecting vegetation."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-bio-j7a/ch3"
      ],
      "igcse": [
        "0610/6",
        "0610/19"
      ]
    },
    "keywords": {
      "zh": [
        "碳—氧平衡",
        "光合作用",
        "二氧化碳",
        "氧气",
        "温室效应",
        "植树造林",
        "碳循环"
      ],
      "en": [
        "carbon–oxygen balance",
        "photosynthesis",
        "carbon dioxide",
        "oxygen",
        "greenhouse effect",
        "carbon cycle",
        "afforestation"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-acidbase-001",
    "subject": "chemistry",
    "title": {
      "zh": "中和反应及其应用",
      "en": "Neutralisation and Its Applications"
    },
    "summary": {
      "zh": "酸与碱作用生成盐和水的反应叫做中和反应，其本质是氢离子与氢氧根离子结合生成水。中和反应在生产生活中有广泛应用。",
      "en": "Neutralisation is the reaction between an acid and a base to form a salt and water. Its essence is hydrogen ions combining with hydroxide ions to form water, and it has many applications in daily life and industry."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9b/ch3"
      ],
      "igcse": [
        "0620/7.1"
      ]
    },
    "keywords": {
      "zh": [
        "中和反应",
        "盐",
        "水",
        "氢离子",
        "氢氧根离子",
        "熟石灰",
        "胃酸"
      ],
      "en": [
        "neutralisation",
        "salt",
        "water",
        "hydrogen ion",
        "hydroxide ion",
        "slaked lime",
        "antacid"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "chem-acidbase-002",
    "subject": "chemistry",
    "title": {
      "zh": "常见的酸：盐酸和硫酸",
      "en": "Common Acids: Hydrochloric and Sulfuric Acid"
    },
    "summary": {
      "zh": "盐酸和硫酸是实验室和工业上最常见的两种酸。掌握它们的物理性质、酸的化学通性以及浓硫酸的安全稀释方法。",
      "en": "Hydrochloric acid and sulfuric acid are the two most common acids in the laboratory and industry. Learn their physical properties, the general chemical reactions of dilute acids, and how to dilute concentrated sulfuric acid safely."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9b/ch3"
      ],
      "igcse": [
        "0620/7.1"
      ]
    },
    "keywords": {
      "zh": [
        "盐酸",
        "硫酸",
        "浓硫酸",
        "酸的通性",
        "金属活动性",
        "除铁锈",
        "稀释"
      ],
      "en": [
        "hydrochloric acid",
        "sulfuric acid",
        "concentrated acid",
        "reactions of acids",
        "rust removal",
        "dilution"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-acidbase-003",
    "subject": "chemistry",
    "title": {
      "zh": "常见的碱：氢氧化钠和氢氧化钙",
      "en": "Common Bases: Sodium Hydroxide and Calcium Hydroxide"
    },
    "summary": {
      "zh": "氢氧化钠和氢氧化钙是最常见的两种碱。了解它们的俗称、物理性质、碱的化学通性，以及在生活和生产中的重要用途。",
      "en": "Sodium hydroxide and calcium hydroxide are the two most common bases. Learn their common names, physical properties, the general chemical reactions of alkalis, and their important uses in daily life and industry."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9b/ch3"
      ],
      "igcse": [
        "0620/7.1"
      ]
    },
    "keywords": {
      "zh": [
        "氢氧化钠",
        "氢氧化钙",
        "烧碱",
        "熟石灰",
        "碱的通性",
        "石灰水",
        "潮解",
        "二氧化碳检验"
      ],
      "en": [
        "sodium hydroxide",
        "calcium hydroxide",
        "slaked lime",
        "limewater",
        "reactions of alkalis",
        "test for carbon dioxide"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-acidbase-004",
    "subject": "chemistry",
    "title": {
      "zh": "盐的制备与复分解反应的条件",
      "en": "Preparation of Salts and Conditions for Double Displacement"
    },
    "summary": {
      "zh": "盐可以通过酸碱中和、金属与酸等多种途径制备。酸、碱、盐之间的反应大多属于复分解反应，只有当生成物中有沉淀、气体或水时反应才能发生。",
      "en": "Salts can be prepared by neutralisation, by reacting acids with metals, metal oxides or carbonates, and by precipitation. Reactions between acids, bases and salts are mostly double displacement reactions, which only take place when a precipitate, a gas or water is formed."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9b/ch4"
      ],
      "igcse": [
        "0620/7.3"
      ]
    },
    "keywords": {
      "zh": [
        "盐",
        "复分解反应",
        "沉淀",
        "溶解性",
        "盐的制备",
        "碳酸盐",
        "离子检验"
      ],
      "en": [
        "salt",
        "double displacement",
        "precipitate",
        "solubility",
        "preparation of salts",
        "carbonate",
        "ionic tests"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-atomic-001",
    "subject": "chemistry",
    "title": {
      "zh": "原子结构：质子、中子、电子与相对原子质量",
      "en": "Atomic Structure: Protons, Neutrons, Electrons and Relative Atomic Mass"
    },
    "summary": {
      "zh": "原子由原子核与核外电子构成，原子核由质子和中子构成。认识三种粒子的电性与质量关系，理解核电荷数、质子数、核外电子数的关系以及相对原子质量的含义。",
      "en": "An atom consists of a nucleus and electrons; the nucleus contains protons and neutrons. Learn the charges and masses of the three particles, the relationship between nuclear charge, proton number and electron number, and what relative atomic mass means."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch3"
      ],
      "igcse": [
        "0620/2"
      ]
    },
    "keywords": {
      "zh": [
        "原子",
        "原子核",
        "质子",
        "中子",
        "电子",
        "核电荷数",
        "相对原子质量"
      ],
      "en": [
        "atom",
        "nucleus",
        "proton",
        "neutron",
        "electron",
        "nuclear charge",
        "relative atomic mass"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-atomic-002",
    "subject": "chemistry",
    "title": {
      "zh": "元素与元素符号",
      "en": "Elements and Chemical Symbols"
    },
    "summary": {
      "zh": "元素是具有相同核电荷数（质子数）的一类原子的总称。理解元素与原子概念的区别，掌握元素符号的书写规则及其表示的意义。",
      "en": "An element is a class of atoms with the same proton number. Understand the difference between “element” and “atom”, and master how chemical symbols are written and what they represent."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch3"
      ],
      "igcse": [
        "0620/2"
      ]
    },
    "keywords": {
      "zh": [
        "元素",
        "元素符号",
        "质子数",
        "金属元素",
        "非金属元素",
        "地壳含量"
      ],
      "en": [
        "element",
        "chemical symbol",
        "proton number",
        "metal",
        "non-metal",
        "abundance in the crust"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-atomic-003",
    "subject": "chemistry",
    "title": {
      "zh": "核外电子排布与原子结构示意图",
      "en": "Electron Arrangement and Atomic Structure Diagrams"
    },
    "summary": {
      "zh": "核外电子按能量高低分层排布。学会读写 1～20 号元素的原子结构示意图，理解最外层电子数如何决定元素的化学性质。",
      "en": "Electrons occupy shells of different energies around the nucleus. Learn to draw and read atomic structure (electronic configuration) diagrams for elements 1–20, and see how the outer-shell electrons determine chemical behaviour."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch3",
        "pep-che-s1/ch4"
      ],
      "igcse": [
        "0620/2"
      ]
    },
    "keywords": {
      "zh": [
        "核外电子排布",
        "电子层",
        "原子结构示意图",
        "最外层电子",
        "相对稳定结构",
        "化学性质"
      ],
      "en": [
        "electron arrangement",
        "electron shell",
        "atomic structure diagram",
        "outer-shell electrons",
        "stable configuration",
        "chemical properties"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-atomic-004",
    "subject": "chemistry",
    "title": {
      "zh": "元素周期表：结构与周期、族规律",
      "en": "The Periodic Table: Structure, Period and Group Trends"
    },
    "summary": {
      "zh": "元素周期表按原子序数递增排列，分为 7 个周期和 16 个族。理解周期表的单元格信息，掌握同一周期、同一族元素性质的递变规律及其与原子结构的关系。",
      "en": "The Periodic Table arranges elements in order of increasing atomic number in 7 periods and 16 groups. Learn to read each element cell, and see how trends across a period and down a group relate to atomic structure."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch3",
        "pep-che-s1/ch4"
      ],
      "igcse": [
        "0620/8"
      ]
    },
    "keywords": {
      "zh": [
        "元素周期表",
        "原子序数",
        "周期",
        "族",
        "电子层数",
        "最外层电子数",
        "元素周期律"
      ],
      "en": [
        "Periodic Table",
        "atomic number",
        "period",
        "group",
        "electron shells",
        "outer-shell electrons",
        "periodic law"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-bonding-001",
    "subject": "chemistry",
    "title": {
      "zh": "离子与离子化合物",
      "en": "Ions and Ionic Compounds"
    },
    "summary": {
      "zh": "原子通过得失电子形成带电荷的离子，带相反电荷的离子通过静电作用结合成离子化合物。理解离子的形成、离子符号的书写以及离子化合物的性质。",
      "en": "Atoms form charged ions by losing or gaining electrons, and oppositely charged ions are held together by electrostatic attraction in ionic compounds. Learn how ions form, how to write ion symbols, and the properties of ionic compounds."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch3",
        "pep-che-s1/ch4"
      ],
      "igcse": [
        "0620/2"
      ]
    },
    "keywords": {
      "zh": [
        "离子",
        "阳离子",
        "阴离子",
        "离子键",
        "离子化合物",
        "得失电子",
        "氯化钠"
      ],
      "en": [
        "ion",
        "cation",
        "anion",
        "ionic bond",
        "ionic compound",
        "electron transfer",
        "sodium chloride"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-bonding-002",
    "subject": "chemistry",
    "title": {
      "zh": "共价键与共价分子",
      "en": "Covalent Bonds and Covalent Molecules"
    },
    "summary": {
      "zh": "非金属原子之间通过共用电子对形成共价键，结合成共价分子。理解共价键的形成原理、常见共价分子的构成，以及共价型物质的性质特点。",
      "en": "Non-metal atoms share pairs of electrons to form covalent bonds and covalent molecules. Learn how covalent bonds form, the make-up of common covalent molecules, and the properties of covalent substances."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch3",
        "pep-che-s1/ch4"
      ],
      "igcse": [
        "0620/2"
      ]
    },
    "keywords": {
      "zh": [
        "共价键",
        "共用电子对",
        "共价分子",
        "共价化合物",
        "分子",
        "非金属"
      ],
      "en": [
        "covalent bond",
        "shared electron pair",
        "covalent molecule",
        "covalent compound",
        "molecule",
        "non-metal"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-bonding-003",
    "subject": "chemistry",
    "title": {
      "zh": "化学式与化合价",
      "en": "Chemical Formulae and Valency"
    },
    "summary": {
      "zh": "化学式用元素符号和数字表示物质的组成，化合价反映元素原子相互化合的数目关系。掌握根据化合价书写化学式、由化学式求化合价的方法。",
      "en": "A chemical formula uses element symbols and numbers to show the composition of a substance, while valency describes the combining power of atoms. Learn to write formulae from valencies and to work out valencies from formulae."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch4"
      ],
      "igcse": [
        "0620/2",
        "0620/3"
      ]
    },
    "keywords": {
      "zh": [
        "化学式",
        "化合价",
        "正价",
        "负价",
        "代数和为零",
        "化学式的意义"
      ],
      "en": [
        "chemical formula",
        "valency",
        "oxidation number",
        "formula writing",
        "combining power"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-bonding-004",
    "subject": "chemistry",
    "title": {
      "zh": "物质的分类：纯净物、混合物、单质、化合物与氧化物",
      "en": "Classifying Matter: Pure Substances, Mixtures, Elements, Compounds and Oxides"
    },
    "summary": {
      "zh": "物质按组成是否单一分为混合物与纯净物；纯净物再按元素组成分为单质与化合物，化合物中有一类重要的氧化物。学会用分类的眼光看待身边常见的物质。",
      "en": "Matter is divided into mixtures and pure substances by composition; pure substances are further divided into elements and compounds, with oxides as an important class of compound. Learn to classify everyday substances."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch2",
        "pep-che-j9a/ch4",
        "pep-che-s1/ch1"
      ],
      "igcse": [
        "0620/2"
      ]
    },
    "keywords": {
      "zh": [
        "混合物",
        "纯净物",
        "单质",
        "化合物",
        "氧化物",
        "物质分类"
      ],
      "en": [
        "mixture",
        "pure substance",
        "element",
        "compound",
        "oxide",
        "classification of matter"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-energetics-001",
    "subject": "chemistry",
    "title": {
      "zh": "吸热反应与放热反应",
      "en": "Endothermic and Exothermic Reactions"
    },
    "summary": {
      "zh": "化学反应总是伴随着能量变化，通常表现为热量的吸收或放出。认识放热反应与吸热反应，并从化学键的角度理解能量变化的来源。",
      "en": "Chemical reactions are always accompanied by energy changes, usually as heat released or absorbed. Learn exothermic and endothermic reactions, and understand the energy change in terms of bond breaking and bond making."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch7",
        "pep-che-s2/ch2"
      ],
      "igcse": [
        "0620/5"
      ]
    },
    "keywords": {
      "zh": [
        "放热反应",
        "吸热反应",
        "能量变化",
        "反应热",
        "焓变",
        "化学键",
        "燃烧",
        "中和反应"
      ],
      "en": [
        "exothermic reaction",
        "endothermic reaction",
        "energy change",
        "enthalpy change",
        "bond energy",
        "combustion",
        "neutralisation"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-energetics-002",
    "subject": "chemistry",
    "title": {
      "zh": "化学反应速率及其影响因素",
      "en": "Rate of Reaction and Its Influencing Factors"
    },
    "summary": {
      "zh": "化学反应有快有慢。认识反应速率的表示方法，探究浓度、温度、催化剂、固体表面积等因素如何影响反应速率，并用碰撞理论作出初步解释。",
      "en": "Chemical reactions proceed at different speeds. Learn how the rate of reaction is measured, investigate how concentration, temperature, catalysts and surface area affect it, and explain the effects using collision theory."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch2",
        "pep-che-s2/ch2"
      ],
      "igcse": [
        "0620/6"
      ]
    },
    "keywords": {
      "zh": [
        "反应速率",
        "浓度",
        "温度",
        "催化剂",
        "表面积",
        "碰撞理论",
        "有效碰撞"
      ],
      "en": [
        "rate of reaction",
        "concentration",
        "temperature",
        "catalyst",
        "surface area",
        "collision theory",
        "effective collision"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-energetics-003",
    "subject": "chemistry",
    "title": {
      "zh": "可逆反应与化学平衡入门",
      "en": "Reversible Reactions and an Introduction to Chemical Equilibrium"
    },
    "summary": {
      "zh": "有些反应在同一条件下既能向正反应方向进行，又能向逆反应方向进行。认识可逆反应的特点，理解化学平衡是一种动态平衡：正、逆反应速率相等，各组分的浓度保持不变。",
      "en": "Some reactions can proceed in both the forward and reverse directions under the same conditions. Meet reversible reactions and understand chemical equilibrium as a dynamic state: the forward and reverse rates are equal and the concentrations stay constant."
    },
    "gradeTier": "senior",
    "syllabus": {
      "pep": [
        "pep-che-s2/ch2"
      ],
      "igcse": [
        "0620/6"
      ]
    },
    "keywords": {
      "zh": [
        "可逆反应",
        "化学平衡",
        "动态平衡",
        "正反应速率",
        "逆反应速率",
        "平衡状态"
      ],
      "en": [
        "reversible reaction",
        "chemical equilibrium",
        "dynamic equilibrium",
        "forward reaction",
        "reverse reaction",
        "equilibrium position"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-energetics-004",
    "subject": "chemistry",
    "title": {
      "zh": "燃料的燃烧与能源",
      "en": "Fuel Combustion and Energy"
    },
    "summary": {
      "zh": "燃烧是最常见的放热反应。掌握燃烧的三个条件和灭火的原理，区分完全燃烧与不完全燃烧，了解化石燃料的利用与新能源的开发。",
      "en": "Combustion is the most familiar exothermic reaction. Learn the three conditions needed for burning and the principles of fire extinguishing, distinguish complete from incomplete combustion, and survey fossil fuels and new energy sources."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch7"
      ],
      "igcse": [
        "0620/5",
        "0620/10"
      ]
    },
    "keywords": {
      "zh": [
        "燃烧",
        "着火点",
        "灭火",
        "完全燃烧",
        "不完全燃烧",
        "一氧化碳",
        "化石燃料",
        "氢能"
      ],
      "en": [
        "combustion",
        "ignition temperature",
        "fire extinguishing",
        "complete combustion",
        "incomplete combustion",
        "carbon monoxide",
        "fossil fuels",
        "hydrogen energy"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-gas-001",
    "subject": "chemistry",
    "title": {
      "zh": "氧气的制取与性质",
      "en": "Preparation and Properties of Oxygen"
    },
    "summary": {
      "zh": "实验室可用加热高锰酸钾或分解过氧化氢制取氧气。氧气不易溶于水、密度比空气略大，能支持燃烧，可用带火星的木条检验。",
      "en": "Oxygen is prepared in the laboratory by heating potassium permanganate or decomposing hydrogen peroxide. It is slightly soluble in water, slightly denser than air, supports combustion, and is tested for with a glowing splint."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch2"
      ],
      "igcse": [
        "0620/12"
      ]
    },
    "keywords": {
      "zh": [
        "氧气",
        "高锰酸钾",
        "过氧化氢",
        "催化剂",
        "二氧化锰",
        "排水法",
        "带火星木条",
        "助燃"
      ],
      "en": [
        "oxygen",
        "potassium permanganate",
        "hydrogen peroxide",
        "catalyst",
        "manganese(IV) oxide",
        "glowing splint",
        "supports combustion"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-gas-002",
    "subject": "chemistry",
    "title": {
      "zh": "二氧化碳的制取、性质与检验",
      "en": "Preparation, Properties and Test of Carbon Dioxide"
    },
    "summary": {
      "zh": "实验室用大理石（或石灰石）与稀盐酸反应制取二氧化碳。二氧化碳密度比空气大、不燃烧也不支持燃烧，能使澄清石灰水变浑浊，这一性质用于检验二氧化碳。",
      "en": "Carbon dioxide is prepared in the laboratory from marble (or limestone) and dilute hydrochloric acid. It is denser than air, neither burns nor supports combustion, and turns limewater milky — the standard test for carbon dioxide."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch6"
      ],
      "igcse": [
        "0620/12"
      ]
    },
    "keywords": {
      "zh": [
        "二氧化碳",
        "大理石",
        "石灰石",
        "稀盐酸",
        "澄清石灰水",
        "向上排空气法",
        "干冰",
        "灭火"
      ],
      "en": [
        "carbon dioxide",
        "marble",
        "limestone",
        "dilute hydrochloric acid",
        "limewater",
        "upward delivery",
        "dry ice",
        "fire extinguisher"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-metal-001",
    "subject": "chemistry",
    "title": {
      "zh": "金属活动性顺序及其应用",
      "en": "The Reactivity Series of Metals and Its Applications"
    },
    "summary": {
      "zh": "金属活动性顺序排出常见金属失电子能力的强弱，可用来判断金属能否与酸、盐溶液发生置换反应，并解释金属的冶炼、防锈等实际问题。",
      "en": "The reactivity series ranks metals by how readily they lose electrons. It predicts whether a metal reacts with acids or salt solutions and explains practical issues such as metal extraction and rust protection."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9b/ch1"
      ],
      "igcse": [
        "0620/9"
      ]
    },
    "keywords": {
      "zh": [
        "金属活动性顺序",
        "置换反应",
        "活泼金属",
        "氢前金属",
        "湿法炼铜",
        "金属腐蚀与防护"
      ],
      "en": [
        "reactivity series",
        "displacement reaction",
        "reactive metal",
        "metals above hydrogen",
        "metal extraction",
        "rusting"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-metal-002",
    "subject": "chemistry",
    "title": {
      "zh": "金属与酸、盐溶液的置换反应",
      "en": "Displacement Reactions of Metals with Acids and Salt Solutions"
    },
    "summary": {
      "zh": "活泼金属与酸反应生成盐和氢气，与盐溶液反应置换出另一种金属。这类置换反应的本质是金属原子失去电子的氧化还原过程。",
      "en": "Reactive metals react with acids to form a salt and hydrogen, and with salt solutions to displace another metal. These displacement reactions are redox processes in which metal atoms lose electrons."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9b/ch1"
      ],
      "igcse": [
        "0620/9"
      ]
    },
    "keywords": {
      "zh": [
        "置换反应",
        "金属与酸反应",
        "金属与盐溶液反应",
        "氢气",
        "氧化还原",
        "铁钉与硫酸铜"
      ],
      "en": [
        "displacement reaction",
        "metal and acid",
        "metal and salt solution",
        "hydrogen",
        "redox",
        "single replacement"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-ph-001",
    "subject": "chemistry",
    "title": {
      "zh": "酸碱与 pH",
      "en": "Acids, Bases and pH"
    },
    "summary": {
      "zh": "pH 是衡量溶液酸碱性强弱的标度。拖动滑块改变 pH，观察通用指示剂的颜色变化与氢离子浓度的数量级变化。",
      "en": "pH measures how acidic or alkaline a solution is. Drag the slider to change the pH and observe the universal indicator colour and the hydrogen ion concentration."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9b/ch3"
      ],
      "igcse": [
        "0620/7.1"
      ]
    },
    "keywords": {
      "zh": [
        "pH",
        "酸",
        "碱",
        "指示剂",
        "氢离子浓度",
        "中性",
        "酸碱度"
      ],
      "en": [
        "pH",
        "acid",
        "base",
        "alkali",
        "indicator",
        "hydrogen ion concentration",
        "neutral"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "chem-stoich-001",
    "subject": "chemistry",
    "title": {
      "zh": "质量守恒定律",
      "en": "The Law of Conservation of Mass"
    },
    "summary": {
      "zh": "参加化学反应的各物质的质量总和等于反应后生成的各物质的质量总和。从原子角度理解这一规律，并学会用它分析\"看似不守恒\"的现象。",
      "en": "The total mass of the reactants that take part in a chemical reaction equals the total mass of the products formed. Understand this law at the atomic level and use it to explain reactions that seem to \"lose\" or \"gain\" mass."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch5"
      ],
      "igcse": [
        "0620/3"
      ]
    },
    "keywords": {
      "zh": [
        "质量守恒定律",
        "化学反应",
        "原子",
        "密闭容器",
        "反应物",
        "生成物"
      ],
      "en": [
        "conservation of mass",
        "chemical reaction",
        "atoms",
        "closed system",
        "reactants",
        "products"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "chem-stoich-002",
    "subject": "chemistry",
    "title": {
      "zh": "化学方程式的书写与配平",
      "en": "Writing and Balancing Chemical Equations"
    },
    "summary": {
      "zh": "化学方程式用化学式简洁地表示化学反应。学习书写的两个原则、\"写—配—注—查\"四个步骤，以及配平和\"↑\"\"↓\"标注的规则。",
      "en": "A chemical equation uses formulae to describe a reaction concisely. Learn the two rules for writing equations, the four steps, and how to balance equations and use state symbols such as ↑ and ↓."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch5"
      ],
      "igcse": [
        "0620/3"
      ]
    },
    "keywords": {
      "zh": [
        "化学方程式",
        "配平",
        "化学计量数",
        "反应条件",
        "气体符号",
        "沉淀符号"
      ],
      "en": [
        "chemical equation",
        "balancing",
        "coefficients",
        "reaction conditions",
        "word equation",
        "state symbols"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-stoich-003",
    "subject": "chemistry",
    "title": {
      "zh": "相对分子质量与化学式计算",
      "en": "Relative Formula Mass and Formula Calculations"
    },
    "summary": {
      "zh": "从相对原子质量出发，学会计算相对分子质量、化合物中各元素的质量比和某元素的质量分数，把化学式变成可以定量计算的工具。",
      "en": "Starting from relative atomic mass, learn to calculate relative formula mass, the ratio of masses of elements in a compound, and the percentage by mass of an element — turning a chemical formula into a tool for quantitative calculation."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch4"
      ],
      "igcse": [
        "0620/3"
      ]
    },
    "keywords": {
      "zh": [
        "相对原子质量",
        "相对分子质量",
        "化学式",
        "元素质量比",
        "元素质量分数"
      ],
      "en": [
        "relative atomic mass",
        "relative formula mass",
        "chemical formula",
        "mass ratio of elements",
        "percentage by mass"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "chem-stoich-004",
    "subject": "chemistry",
    "title": {
      "zh": "根据化学方程式的计算与摩尔入门",
      "en": "Calculations from Chemical Equations and Introducing the Mole"
    },
    "summary": {
      "zh": "利用化学方程式中固定的质量比，由一种物质的质量求其他物质的质量；再认识物质的量、摩尔质量，理解化学计量数之比就是物质的量之比。",
      "en": "Use the fixed mass ratios in a balanced equation to find unknown masses, then meet the mole and molar mass, and see that the coefficients in an equation are also ratios of amounts in moles."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-che-j9a/ch5",
        "pep-che-s1/ch2"
      ],
      "igcse": [
        "0620/3"
      ]
    },
    "keywords": {
      "zh": [
        "化学方程式的计算",
        "质量比",
        "物质的量",
        "摩尔",
        "摩尔质量",
        "阿伏加德罗常数"
      ],
      "en": [
        "stoichiometric calculation",
        "mass ratio",
        "amount of substance",
        "mole",
        "molar mass",
        "Avogadro constant"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-electric-001",
    "subject": "physics",
    "title": {
      "zh": "电路、电流与电压",
      "en": "Circuits, Current and Voltage"
    },
    "summary": {
      "zh": "认识电路的组成与三种状态，理解电流的形成、方向和大小，以及电压的作用与测量。",
      "en": "Learn the components and states of an electric circuit, and understand how current and voltage are defined, directed and measured."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j9/ch3",
        "pep-phy-j9/ch4",
        "pep-phy-s3/ch3"
      ],
      "igcse": [
        "0625/4.2",
        "0625/4.3"
      ]
    },
    "keywords": {
      "zh": [
        "电路",
        "电流",
        "电压",
        "电源",
        "通路",
        "断路",
        "短路",
        "安培",
        "伏特",
        "电流表",
        "电压表"
      ],
      "en": [
        "circuit",
        "current",
        "voltage",
        "cell",
        "battery",
        "short circuit",
        "ampere",
        "volt",
        "ammeter",
        "voltmeter"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-electric-002",
    "subject": "physics",
    "title": {
      "zh": "欧姆定律",
      "en": "Ohm's Law"
    },
    "summary": {
      "zh": "通过实验探究电流与电压、电阻的关系，理解欧姆定律 I = U/R，并学会用它进行简单计算。",
      "en": "Investigate how current depends on voltage and resistance, understand Ohm’s law I = V/R, and use it in simple calculations."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j9/ch5",
        "pep-phy-s3/ch3"
      ],
      "igcse": [
        "0625/4.2"
      ]
    },
    "keywords": {
      "zh": [
        "欧姆定律",
        "电流",
        "电压",
        "电阻",
        "控制变量法",
        "安培",
        "伏特",
        "欧姆"
      ],
      "en": [
        "Ohm's law",
        "current",
        "voltage",
        "resistance",
        "ohm",
        "ampere",
        "volt",
        "I–V characteristic"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-electric-003",
    "subject": "physics",
    "title": {
      "zh": "串联电路",
      "en": "Series Circuits"
    },
    "summary": {
      "zh": "认识串联电路的连接特点，掌握串联电路中电流、电压的规律和等效电阻，理解串联分压。",
      "en": "Learn the connection features of series circuits, the rules for current, voltage and equivalent resistance, and how voltage divides in series."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j9/ch3",
        "pep-phy-j9/ch5",
        "pep-phy-s3/ch3"
      ],
      "igcse": [
        "0625/4.3"
      ]
    },
    "keywords": {
      "zh": [
        "串联电路",
        "串联分压",
        "等效电阻",
        "电流处处相等",
        "总电压",
        "分压"
      ],
      "en": [
        "series circuit",
        "potential divider",
        "equivalent resistance",
        "same current",
        "total voltage",
        "voltage division"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-electric-004",
    "subject": "physics",
    "title": {
      "zh": "并联电路",
      "en": "Parallel Circuits"
    },
    "summary": {
      "zh": "认识并联电路的连接特点，掌握并联电路中电压、电流的规律和等效电阻，理解并联分流。",
      "en": "Learn the connection features of parallel circuits, the rules for voltage, current and equivalent resistance, and how current divides in parallel."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j9/ch3",
        "pep-phy-j9/ch5",
        "pep-phy-s3/ch3"
      ],
      "igcse": [
        "0625/4.3"
      ]
    },
    "keywords": {
      "zh": [
        "并联电路",
        "并联分流",
        "等效电阻",
        "支路",
        "干路",
        "总电流",
        "家庭电路"
      ],
      "en": [
        "parallel circuit",
        "current division",
        "equivalent resistance",
        "branch",
        "main circuit",
        "total current",
        "mains wiring"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-force-001",
    "subject": "physics",
    "title": {
      "zh": "力的概念与重力",
      "en": "Forces and Gravity"
    },
    "summary": {
      "zh": "认识力是物体对物体的作用，会画力的示意图；理解重力的产生、方向与大小 G = mg，区分质量与重量。",
      "en": "Learn that a force is a push or a pull between objects, draw force diagrams, and understand the origin, direction and size of weight, W = mg, distinguishing mass from weight."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch1",
        "pep-phy-s1/ch3"
      ],
      "igcse": [
        "0625/1.5",
        "0625/1.3"
      ]
    },
    "keywords": {
      "zh": [
        "力",
        "力的作用效果",
        "力的示意图",
        "重力",
        "质量",
        "重量",
        "重心",
        "g"
      ],
      "en": [
        "force",
        "effects of forces",
        "force diagram",
        "gravity",
        "weight",
        "mass",
        "centre of gravity",
        "gravitational field strength"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-force-002",
    "subject": "physics",
    "title": {
      "zh": "牛顿第一定律与惯性",
      "en": "Newton's First Law and Inertia"
    },
    "summary": {
      "zh": "理解牛顿第一定律：物体在不受力（或受平衡力）时保持静止或匀速直线运动；认识惯性及其在生活中的应用与防范。",
      "en": "Understand Newton's first law: an object remains at rest or in uniform straight-line motion unless acted on by a resultant force; learn what inertia is and how it matters in daily life."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch2",
        "pep-phy-s1/ch4"
      ],
      "igcse": [
        "0625/1.5"
      ]
    },
    "keywords": {
      "zh": [
        "牛顿第一定律",
        "惯性",
        "平衡力",
        "匀速直线运动",
        "阻力",
        "伽利略"
      ],
      "en": [
        "Newton's first law",
        "inertia",
        "balanced forces",
        "uniform motion",
        "resultant force",
        "Galileo"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": true,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-force-003",
    "subject": "physics",
    "title": {
      "zh": "牛顿第二定律",
      "en": "Newton's Second Law"
    },
    "summary": {
      "zh": "探究加速度与力、质量的关系，掌握 F = ma：合力决定加速度；在水平面上体会拉力、摩擦与合力的关系。",
      "en": "Investigate how acceleration depends on force and mass, master F = ma: the resultant force determines acceleration; explore applied force, friction and resultant force on a horizontal surface."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-s1/ch4",
        "pep-phy-j8b/ch2"
      ],
      "igcse": [
        "0625/1.5"
      ]
    },
    "keywords": {
      "zh": [
        "牛顿第二定律",
        "加速度",
        "合力",
        "质量",
        "摩擦力",
        "控制变量法"
      ],
      "en": [
        "Newton's second law",
        "acceleration",
        "resultant force",
        "mass",
        "friction",
        "control variables"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-force-004",
    "subject": "physics",
    "title": {
      "zh": "摩擦力",
      "en": "Friction"
    },
    "summary": {
      "zh": "认识摩擦力产生的条件与方向，理解滑动摩擦 f = μN；在斜面上分解重力，探究倾角与摩擦因数如何决定物块是静止还是下滑。",
      "en": "Learn when friction arises and which way it acts, understand f = μN for sliding friction; resolve weight on an inclined plane and explore how angle and friction coefficient decide whether a block stays put or slides."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch2",
        "pep-phy-s1/ch3"
      ],
      "igcse": [
        "0625/1.5"
      ]
    },
    "keywords": {
      "zh": [
        "摩擦力",
        "滑动摩擦",
        "静摩擦",
        "摩擦因数",
        "斜面",
        "力的分解",
        "支持力"
      ],
      "en": [
        "friction",
        "sliding friction",
        "static friction",
        "friction coefficient",
        "inclined plane",
        "resolving forces",
        "normal force"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": true,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-kinematics-freefall",
    "subject": "physics",
    "title": {
      "zh": "自由落体运动",
      "en": "Free Fall"
    },
    "summary": {
      "zh": "只在重力作用下从静止开始的运动是自由落体：加速度恒为 g，与物体质量无关。对比地球与月球上的竖直上抛，感受 g 的影响。",
      "en": "Free fall is motion under gravity alone, with constant acceleration g independent of mass. Compare vertical throws on Earth and the Moon to see the effect of g."
    },
    "gradeTier": "senior",
    "syllabus": {
      "pep": [
        "pep-phy-s1/ch2",
        "pep-phy-j8b/ch1"
      ],
      "igcse": [
        "0625/1.2"
      ]
    },
    "keywords": {
      "zh": [
        "自由落体",
        "重力加速度",
        "g",
        "竖直上抛",
        "匀变速直线运动",
        "真空"
      ],
      "en": [
        "free fall",
        "acceleration of free fall",
        "g",
        "vertical throw",
        "uniform acceleration",
        "vacuum"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-kinematics-projectile",
    "subject": "physics",
    "title": {
      "zh": "抛体运动",
      "en": "Projectile Motion"
    },
    "summary": {
      "zh": "抛体运动可分解为水平方向的匀速直线运动和竖直方向的自由落体。用篮球、烟花和平抛三个场景探究射程、最大高度与飞行时间。",
      "en": "Projectile motion splits into uniform horizontal motion and free fall vertically. Explore range, maximum height and flight time with a basketball, a firework and a near-horizontal throw."
    },
    "gradeTier": "senior",
    "syllabus": {
      "pep": [
        "pep-phy-s2/ch1"
      ],
      "igcse": [
        "0625/1.2"
      ]
    },
    "keywords": {
      "zh": [
        "抛体运动",
        "平抛运动",
        "斜抛运动",
        "射程",
        "最大高度",
        "运动的合成与分解",
        "飞行时间"
      ],
      "en": [
        "projectile motion",
        "horizontal projection",
        "range",
        "maximum height",
        "time of flight",
        "components of motion"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-kinematics-reference-frame",
    "subject": "physics",
    "title": {
      "zh": "运动的描述：参照物与相对运动",
      "en": "Describing Motion: Reference Frames and Relative Motion"
    },
    "summary": {
      "zh": "判断物体是运动还是静止，必须先选定参照物。选择不同的参照物，对同一物体运动状态的描述可能不同——运动和静止是相对的。",
      "en": "To say whether an object is moving or at rest, a reference frame must be chosen first. Different reference frames can give different descriptions of the same motion — motion and rest are relative."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j8a/ch1",
        "pep-phy-s1/ch1"
      ],
      "igcse": [
        "0625/1.2"
      ]
    },
    "keywords": {
      "zh": [
        "参照物",
        "参考系",
        "机械运动",
        "相对静止",
        "相对运动",
        "运动的相对性"
      ],
      "en": [
        "reference frame",
        "reference object",
        "relative motion",
        "relative rest",
        "relativity of motion"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-kinematics-velocity",
    "subject": "physics",
    "title": {
      "zh": "速度与平均速度",
      "en": "Speed, Velocity and Average Velocity"
    },
    "summary": {
      "zh": "区分瞬时速度与平均速度，用 v = s/t 和 v-t 图像定量描述物体运动的快慢。",
      "en": "Distinguish instantaneous and average velocity, and describe how fast objects move using v = s/t and velocity–time graphs."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j8a/ch1",
        "pep-phy-s1/ch1"
      ],
      "igcse": [
        "0625/1.2"
      ]
    },
    "keywords": {
      "zh": [
        "速度",
        "平均速度",
        "瞬时速度",
        "速率",
        "位移",
        "v-t 图像",
        "机械运动"
      ],
      "en": [
        "speed",
        "velocity",
        "average speed",
        "instantaneous velocity",
        "displacement",
        "v-t graph"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-machine-001",
    "subject": "physics",
    "title": {
      "zh": "杠杆的平衡条件",
      "en": "The Balance Condition of a Lever"
    },
    "summary": {
      "zh": "认识杠杆的五要素，通过实验探究杠杆的平衡条件 F₁l₁ = F₂l₂，并用来分析省力、费力和等臂杠杆。",
      "en": "Learn the five elements of a lever, investigate the balance (moment) condition F₁l₁ = F₂l₂, and use it to analyse force-saving, force-multiplying and equal-arm levers."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch6"
      ],
      "igcse": [
        "0625/1.5"
      ]
    },
    "keywords": {
      "zh": [
        "杠杆",
        "支点",
        "动力臂",
        "阻力臂",
        "力矩",
        "杠杆平衡条件",
        "省力杠杆",
        "费力杠杆"
      ],
      "en": [
        "lever",
        "pivot",
        "fulcrum",
        "moment",
        "turning effect",
        "principle of moments",
        "effort arm",
        "load arm"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-machine-002",
    "subject": "physics",
    "title": {
      "zh": "功与功率",
      "en": "Work and Power"
    },
    "summary": {
      "zh": "理解做功的两个必要因素，掌握 W = Fs 和 P = W/t 的计算，分清“有力不一定做功”的常见误区。",
      "en": "Understand the two necessary conditions for doing work, master the calculations W = Fs and P = W/t, and avoid the common pitfall that a force does not always do work."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch5"
      ],
      "igcse": [
        "0625/1.7"
      ]
    },
    "keywords": {
      "zh": [
        "功",
        "功率",
        "焦耳",
        "瓦特",
        "做功",
        "W=Fs",
        "P=W/t"
      ],
      "en": [
        "work",
        "power",
        "joule",
        "watt",
        "work done",
        "W=Fs",
        "P=W/t"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-machine-003",
    "subject": "physics",
    "title": {
      "zh": "动能、势能及其转化",
      "en": "Kinetic Energy, Potential Energy and Their Interconversion"
    },
    "summary": {
      "zh": "认识动能与重力势能的影响因素，通过抛体运动理解动能和势能的相互转化及机械能守恒的条件。",
      "en": "Learn what kinetic and gravitational potential energy depend on, and use projectile motion to understand the interconversion between them and the condition for conservation of mechanical energy."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch5",
        "pep-phy-s2/ch4"
      ],
      "igcse": [
        "0625/1.7"
      ]
    },
    "keywords": {
      "zh": [
        "动能",
        "重力势能",
        "弹性势能",
        "机械能",
        "能量转化",
        "机械能守恒",
        "抛体运动"
      ],
      "en": [
        "kinetic energy",
        "gravitational potential energy",
        "elastic potential energy",
        "mechanical energy",
        "energy transfer",
        "conservation of mechanical energy",
        "projectile motion"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-machine-004",
    "subject": "physics",
    "title": {
      "zh": "斜面与机械效率",
      "en": "The Inclined Plane and Mechanical Efficiency"
    },
    "summary": {
      "zh": "斜面是省力的简单机械。通过有用功、额外功和总功理解机械效率，探究斜面的倾角和粗糙程度对机械效率的影响。",
      "en": "The inclined plane is a force-saving simple machine. Understand mechanical efficiency through useful, extra and total work, and investigate how the angle and roughness of an incline affect its efficiency."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch6"
      ],
      "igcse": [
        "0625/1.7"
      ]
    },
    "keywords": {
      "zh": [
        "斜面",
        "机械效率",
        "有用功",
        "额外功",
        "总功",
        "摩擦力",
        "省力机械"
      ],
      "en": [
        "inclined plane",
        "mechanical efficiency",
        "useful work",
        "extra work",
        "total work",
        "friction",
        "force-saving machine"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-motion-001",
    "subject": "physics",
    "title": {
      "zh": "匀速与匀变速直线运动",
      "en": "Uniform and Uniformly Accelerated Linear Motion"
    },
    "summary": {
      "zh": "用 s-t 与 v-t 图像理解匀速和匀变速直线运动，探究初速度、加速度如何决定物体的运动。",
      "en": "Understand uniform and uniformly accelerated motion through s–t and v–t graphs, and explore how initial velocity and acceleration determine motion."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j8a/ch1",
        "pep-phy-s1/ch2"
      ],
      "igcse": [
        "0625/1.2"
      ]
    },
    "keywords": {
      "zh": [
        "匀变速",
        "匀速",
        "速度",
        "加速度",
        "位移",
        "v-t 图像",
        "s-t 图像",
        "运动学"
      ],
      "en": [
        "velocity",
        "acceleration",
        "displacement",
        "kinematics",
        "v-t graph",
        "s-t graph",
        "uniform motion"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-optics-001",
    "subject": "physics",
    "title": {
      "zh": "光的折射",
      "en": "Refraction of Light"
    },
    "summary": {
      "zh": "探究光从一种介质斜射入另一种介质时传播方向的改变，用斯涅尔定律定量计算折射角，并理解全反射的条件。",
      "en": "Explore how light changes direction when passing between media, calculate the angle of refraction with Snell’s law, and understand the conditions for total internal reflection."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8a/ch4"
      ],
      "igcse": [
        "0625/3.2"
      ]
    },
    "keywords": {
      "zh": [
        "折射",
        "折射角",
        "入射角",
        "法线",
        "折射率",
        "斯涅尔定律",
        "临界角",
        "全反射"
      ],
      "en": [
        "refraction",
        "angle of refraction",
        "angle of incidence",
        "normal",
        "refractive index",
        "Snell's law",
        "critical angle",
        "total internal reflection"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-optics-002",
    "subject": "physics",
    "title": {
      "zh": "凸透镜成像",
      "en": "Image Formation by a Convex Lens"
    },
    "summary": {
      "zh": "用薄透镜公式探究物距如何决定凸透镜所成像的位置、大小与虚实，理解照相机、投影仪和放大镜的原理。",
      "en": "Use the thin lens equation to explore how object distance determines the position, size and nature of the image formed by a convex lens, and understand cameras, projectors and magnifying glasses."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8a/ch5"
      ],
      "igcse": [
        "0625/3.2"
      ]
    },
    "keywords": {
      "zh": [
        "凸透镜",
        "焦距",
        "物距",
        "像距",
        "实像",
        "虚像",
        "放大率",
        "照相机",
        "投影仪",
        "放大镜"
      ],
      "en": [
        "convex lens",
        "focal length",
        "object distance",
        "image distance",
        "real image",
        "virtual image",
        "magnification",
        "camera",
        "projector",
        "magnifying glass"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-pressure-001",
    "subject": "physics",
    "title": {
      "zh": "压强",
      "en": "Pressure"
    },
    "summary": {
      "zh": "理解压力的作用效果与压力大小、受力面积的关系，掌握压强的定义式 p = F/S 及增大、减小压强的方法。",
      "en": "Understand how the effect of a force depends on its magnitude and the contact area, and master the defining equation p = F/A together with ways to increase or decrease pressure."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch3"
      ],
      "igcse": [
        "0625/1.8"
      ]
    },
    "keywords": {
      "zh": [
        "压强",
        "压力",
        "受力面积",
        "帕斯卡",
        "增大压强",
        "减小压强"
      ],
      "en": [
        "pressure",
        "force",
        "contact area",
        "pascal",
        "p = F/A"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-pressure-002",
    "subject": "physics",
    "title": {
      "zh": "液体内部的压强",
      "en": "Pressure in Liquids"
    },
    "summary": {
      "zh": "探究液体内部压强的特点，掌握公式 p = ρgh：液体压强随深度和液体密度增大而增大，同一深度向各个方向的压强相等。",
      "en": "Investigate the characteristics of pressure inside a liquid and master p = ρgh: liquid pressure increases with depth and density, and at the same depth it acts equally in all directions."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch3"
      ],
      "igcse": [
        "0625/1.8"
      ]
    },
    "keywords": {
      "zh": [
        "液体压强",
        "深度",
        "密度",
        "压强计",
        "连通器",
        "船闸"
      ],
      "en": [
        "liquid pressure",
        "depth",
        "density",
        "manometer",
        "communicating vessels",
        "p = ρgh"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-pressure-003",
    "subject": "physics",
    "title": {
      "zh": "阿基米德原理",
      "en": "Archimedes' Principle"
    },
    "summary": {
      "zh": "认识浮力，理解阿基米德原理：浸在液体中的物体受到向上的浮力，浮力的大小等于它排开的液体所受的重力。",
      "en": "Meet buoyancy and understand Archimedes' principle: an object immersed in a fluid experiences an upthrust equal to the weight of the fluid it displaces."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch4"
      ],
      "igcse": [
        "0625/1.8"
      ]
    },
    "keywords": {
      "zh": [
        "浮力",
        "阿基米德原理",
        "排开液体",
        "浮力大小",
        "称重法"
      ],
      "en": [
        "buoyancy",
        "upthrust",
        "Archimedes' principle",
        "displaced fluid",
        "weight of displaced fluid"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-pressure-004",
    "subject": "physics",
    "title": {
      "zh": "物体浮沉条件及应用",
      "en": "Floating and Sinking: Conditions and Applications"
    },
    "summary": {
      "zh": "用浮力与重力（或物体密度与液体密度）的大小关系判断物体的上浮、悬浮、下沉与漂浮，并了解轮船、潜水艇、密度计等应用。",
      "en": "Use the balance of upthrust and weight (or object density versus liquid density) to predict rising, suspending, sinking and floating, and explore applications such as ships, submarines and hydrometers."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch4"
      ],
      "igcse": [
        "0625/1.8",
        "0625/1.4"
      ]
    },
    "keywords": {
      "zh": [
        "浮沉条件",
        "漂浮",
        "悬浮",
        "沉底",
        "轮船",
        "潜水艇",
        "密度计"
      ],
      "en": [
        "floating and sinking",
        "float",
        "suspend",
        "sink",
        "ship",
        "submarine",
        "hydrometer"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  },
  {
    "id": "phy-thermal-001",
    "subject": "physics",
    "title": {
      "zh": "温度、热量与比热容",
      "en": "Temperature, Heat and Specific Heat Capacity"
    },
    "summary": {
      "zh": "区分温度与热量两个易混概念，理解比热容的物理意义，并用 Q = cmΔt 计算物体吸收或放出的热量。",
      "en": "Distinguish between temperature and heat, understand the meaning of specific heat capacity, and use Q = cmΔT to calculate thermal energy transferred."
    },
    "gradeTier": "middle",
    "syllabus": {
      "pep": [
        "pep-phy-j9/ch1"
      ],
      "igcse": [
        "0625/2.2"
      ]
    },
    "keywords": {
      "zh": [
        "温度",
        "热量",
        "内能",
        "比热容",
        "热平衡",
        "焦耳",
        "吸热",
        "放热"
      ],
      "en": [
        "temperature",
        "heat",
        "internal energy",
        "specific heat capacity",
        "thermal equilibrium",
        "joule",
        "thermal energy transfer"
      ]
    },
    "hasSimulation": false,
    "hasExamPractice": false,
    "hasNarration": false,
    "hasExtras": false
  },
  {
    "id": "phy-thermal-002",
    "subject": "physics",
    "title": {
      "zh": "气体压强与玻意耳定律",
      "en": "Gas Pressure and Boyle’s Law"
    },
    "summary": {
      "zh": "从分子动理论理解气体压强的来源，探究一定质量的气体在温度不变时压强与体积的反比关系（玻意耳定律），以及温度对压强的影响。",
      "en": "Understand the origin of gas pressure through the kinetic particle model, explore how pressure varies inversely with volume at constant temperature (Boyle’s law), and see the effect of temperature on pressure."
    },
    "gradeTier": "both",
    "syllabus": {
      "pep": [
        "pep-phy-j8b/ch3"
      ],
      "igcse": [
        "0625/1.8",
        "0625/2.1"
      ]
    },
    "keywords": {
      "zh": [
        "气体压强",
        "玻意耳定律",
        "等温变化",
        "分子动理论",
        "热力学温度",
        "开尔文",
        "大气压"
      ],
      "en": [
        "gas pressure",
        "Boyle's law",
        "isothermal change",
        "kinetic particle model",
        "absolute temperature",
        "kelvin",
        "atmospheric pressure"
      ]
    },
    "hasSimulation": true,
    "hasExamPractice": false,
    "hasNarration": true,
    "hasExtras": false
  }
];
