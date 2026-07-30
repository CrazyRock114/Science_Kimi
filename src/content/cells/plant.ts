import type { CellModel } from './types';

/**
 * 植物细胞：有细胞壁，近似长方体；成熟细胞中央有大液泡，
 * 细胞核等结构被挤到靠近细胞壁的一侧。
 */
export const plantCell: CellModel = {
  id: 'plant',
  name: { zh: '植物细胞', en: 'Plant Cell' },
  description: {
    zh: '植物细胞有细胞壁、叶绿体和大液泡，形状较规则，近似长方体。',
    en: 'Plant cells have a cell wall, chloroplasts and a large vacuole, giving them a regular, box-like shape.',
  },
  boundary: 'box',
  organelles: [
    {
      id: 'cellWall',
      kind: 'cellWall',
      name: { zh: '细胞壁', en: 'Cell Wall' },
      structure: {
        zh: '位于细胞膜外，主要由纤维素和果胶构成，质地较坚韧，具有全透性。',
        en: 'A tough, fully permeable layer outside the cell membrane, made mainly of cellulose and pectin.',
      },
      role: {
        zh: '支持和保护细胞，维持细胞的正常形态。',
        en: 'Supports and protects the cell and maintains its shape.',
      },
      funFact: {
        zh: '木材之所以坚硬，靠的正是无数细胞壁中的纤维素。',
        en: 'Wood is hard precisely because of the cellulose in countless cell walls.',
      },
      color: '#a8a29e',
      position: [0, 0, 0],
      size: 3.2,
    },
    {
      id: 'cellMembrane',
      kind: 'cellMembrane',
      name: { zh: '细胞膜', en: 'Cell Membrane' },
      structure: {
        zh: '紧贴细胞壁内侧，由磷脂双分子层和蛋白质构成，很薄，光学显微镜下不易看清。',
        en: 'Pressed against the inside of the cell wall; a thin bilayer of phospholipids and proteins, hard to see under a light microscope.',
      },
      role: {
        zh: '控制物质进出细胞，保持细胞内环境的相对稳定。',
        en: 'Controls what enters and leaves the cell, keeping the internal environment stable.',
      },
      funFact: {
        zh: '植物细胞失水时，细胞膜会连同细胞质一起与细胞壁分离，这就是"质壁分离"现象。',
        en: 'When a plant cell loses water, the membrane pulls away from the wall — a phenomenon called plasmolysis.',
      },
      color: '#f9a8d4',
      position: [0, 0, 0],
      size: 2.95,
    },
    {
      id: 'vacuole',
      kind: 'vacuole',
      name: { zh: '大液泡', en: 'Large Vacuole' },
      structure: {
        zh: '由单层膜（液泡膜）包围，内部充满细胞液，溶解着糖类、无机盐、色素等多种物质。',
        en: 'Enclosed by a single membrane (tonoplast) and filled with cell sap — water with dissolved sugars, salts and pigments.',
      },
      role: {
        zh: '储存水分和营养物质，维持细胞的膨压，使植物细胞保持坚挺。',
        en: 'Stores water and nutrients and maintains turgor pressure, keeping the plant cell firm.',
      },
      funFact: {
        zh: '成熟植物细胞的中央大液泡可占细胞体积的 90% 左右。',
        en: 'In a mature plant cell the central vacuole can take up about 90% of the cell volume.',
      },
      color: '#93c5fd',
      position: [-0.7, -0.1, 0],
      size: 1.75,
    },
    {
      id: 'nucleus',
      kind: 'nucleus',
      name: { zh: '细胞核', en: 'Nucleus' },
      structure: {
        zh: '由双层核膜包围，内部有核仁和染色质；因大液泡的挤压，常位于靠近细胞壁的一侧。',
        en: 'Enclosed by a double membrane with a nucleolus and chromatin inside; often pushed to one side by the large vacuole.',
      },
      role: {
        zh: '储存遗传信息，是细胞代谢和遗传的控制中心。',
        en: 'Stores genetic information and acts as the control centre for the cell’s metabolism and heredity.',
      },
      funFact: {
        zh: '一个细胞核里的 DNA 全部展开可长达约 2 米。',
        en: 'The DNA inside a single nucleus would stretch to about 2 metres if unwound.',
      },
      color: '#818cf8',
      position: [2.35, 1.05, 1.0],
      size: 0.72,
    },
    {
      id: 'chloroplast',
      kind: 'chloroplast',
      name: { zh: '叶绿体', en: 'Chloroplast' },
      structure: {
        zh: '具有双层膜，内部有许多圆饼状的类囊体堆叠成基粒，类囊体膜上分布着叶绿素等光合色素。',
        en: 'Bounded by a double membrane; inside, disc-shaped thylakoids stack into grana, whose membranes carry chlorophyll and other pigments.',
      },
      role: {
        zh: '光合作用的场所，利用光能把二氧化碳和水合成有机物，并将光能转化为化学能储存起来。',
        en: 'The site of photosynthesis — uses light energy to build organic matter from carbon dioxide and water, storing the energy chemically.',
      },
      funFact: {
        zh: '叶绿体和线粒体一样含有自己的 DNA，也被认为是内共生的产物。',
        en: 'Like mitochondria, chloroplasts carry their own DNA and are also thought to be products of endosymbiosis.',
      },
      color: '#22c55e',
      position: [0.7, -1.35, -1.25],
      size: 0.5,
      rotation: [0.5, 0.3, 0.4],
      copies: [
        [-2.2, -1.2, -1.1],
        [1.2, 1.5, 1.5],
      ],
    },
    {
      id: 'mitochondrion',
      kind: 'mitochondrion',
      name: { zh: '线粒体', en: 'Mitochondrion' },
      structure: {
        zh: '具有双层膜，内膜向内折叠形成嵴；植物细胞同样靠它进行有氧呼吸。',
        en: 'A double-membrane organelle whose inner membrane folds into cristae; plant cells also rely on it for aerobic respiration.',
      },
      role: {
        zh: '有氧呼吸的主要场所，为细胞生命活动提供能量。',
        en: 'The main site of aerobic respiration, supplying energy for the cell’s activities.',
      },
      funFact: {
        zh: '植物白天进行光合作用，但呼吸作用白天黑夜都在进行。',
        en: 'Plants photosynthesise in daylight, but respiration continues day and night.',
      },
      color: '#fb923c',
      position: [2.2, -1.15, 1.25],
      size: 0.34,
      rotation: [0.3, 0, 1.0],
      copies: [[-2.3, 1.2, 1.2]],
    },
    {
      id: 'ribosome',
      kind: 'ribosome',
      name: { zh: '核糖体', en: 'Ribosomes' },
      structure: {
        zh: '无膜结构，由 RNA 和蛋白质组成，游离在细胞质中或附着在内质网上。',
        en: 'Membrane-free particles of RNA and protein, free in the cytoplasm or attached to the ER.',
      },
      role: {
        zh: '蛋白质合成的场所。',
        en: 'The site of protein synthesis.',
      },
      funFact: {
        zh: '一个活跃的细胞里可以有数百万个核糖体。',
        en: 'An active cell can contain millions of ribosomes.',
      },
      color: '#facc15',
      position: [1.5, 1.5, -1.3],
      size: 0.55,
    },
    {
      id: 'endoplasmicReticulum',
      kind: 'endoplasmicReticulum',
      name: { zh: '内质网', en: 'Endoplasmic Reticulum' },
      structure: {
        zh: '单层膜折叠成的网状结构，与核膜相连，分为粗面和光面两种。',
        en: 'A folded single-membrane network continuous with the nuclear envelope, in rough and smooth forms.',
      },
      role: {
        zh: '加工和运输蛋白质、合成脂质，是细胞内的运输通道。',
        en: 'Processes and transports proteins and synthesises lipids — the cell’s transport network.',
      },
      funFact: {
        zh: '内质网的膜面积可占到细胞总膜面积的一半以上。',
        en: 'The ER can account for more than half of a cell’s total membrane area.',
      },
      color: '#60a5fa',
      position: [1.9, 0.2, -1.5],
      size: 0.6,
      rotation: [0.4, 0.3, 0],
    },
    {
      id: 'golgiApparatus',
      kind: 'golgiApparatus',
      name: { zh: '高尔基体', en: 'Golgi Apparatus' },
      structure: {
        zh: '由扁平囊泡堆叠而成，周围有小泡；在植物细胞中还参与细胞壁的形成。',
        en: 'A stack of flattened sacs with surrounding vesicles; in plant cells it also helps build the cell wall.',
      },
      role: {
        zh: '加工、分类和包装蛋白质；植物细胞分裂时参与新细胞壁的形成。',
        en: 'Modifies, sorts and packages proteins; in plants it also helps form new cell walls during cell division.',
      },
      funFact: {
        zh: '1898 年由意大利科学家卡米洛·高尔基首次观察到。',
        en: 'First observed in 1898 by the Italian scientist Camillo Golgi.',
      },
      color: '#34d399',
      position: [2.4, -0.35, -0.35],
      size: 0.55,
      rotation: [0.4, -0.3, 0.2],
    },
  ],
};
