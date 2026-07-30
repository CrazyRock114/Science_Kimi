import type { CellModel } from './types';

/**
 * 动物细胞：近似球形的细胞，细胞膜为半透明外壳。
 * 所有几何均为程序化图元参数，无任何外部模型文件。
 */
export const animalCell: CellModel = {
  id: 'animal',
  name: { zh: '动物细胞', en: 'Animal Cell' },
  description: {
    zh: '动物细胞没有细胞壁和叶绿体，呈近似球形，由细胞膜包裹。',
    en: 'Animal cells lack a cell wall and chloroplasts; they are roughly spherical, enclosed only by a cell membrane.',
  },
  boundary: 'sphere',
  organelles: [
    {
      id: 'cellMembrane',
      kind: 'cellMembrane',
      name: { zh: '细胞膜', en: 'Cell Membrane' },
      structure: {
        zh: '由磷脂双分子层构成基本骨架，蛋白质分子镶嵌或贯穿其中，具有一定的流动性。',
        en: 'A flexible bilayer of phospholipids with proteins embedded in or spanning it, giving the membrane fluidity.',
      },
      role: {
        zh: '将细胞与外界环境分隔开，控制物质进出细胞，并参与细胞间的信息交流。',
        en: 'Separates the cell from its surroundings, controls what enters and leaves, and takes part in cell signalling.',
      },
      funFact: {
        zh: '细胞膜只有约 7~8 纳米厚，比头发丝细上万倍。',
        en: 'The membrane is only about 7–8 nm thick — over ten thousand times thinner than a human hair.',
      },
      color: '#f9a8d4',
      position: [0, 0, 0],
      size: 3,
    },
    {
      id: 'nucleus',
      kind: 'nucleus',
      name: { zh: '细胞核', en: 'Nucleus' },
      structure: {
        zh: '由双层核膜包围，膜上有核孔；内部有核仁和由 DNA 与蛋白质组成的染色质。',
        en: 'Enclosed by a double nuclear envelope pierced by pores; inside are the nucleolus and chromatin made of DNA and proteins.',
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
      position: [0, 0.35, 0.4],
      size: 1.05,
    },
    {
      id: 'mitochondrion',
      kind: 'mitochondrion',
      name: { zh: '线粒体', en: 'Mitochondrion' },
      structure: {
        zh: '具有双层膜，内膜向内折叠形成嵴，大大增加了膜面积；内部充满基质。',
        en: 'Bounded by a double membrane; the inner membrane folds inward into cristae that greatly increase its area, surrounding a fluid matrix.',
      },
      role: {
        zh: '有氧呼吸的主要场所，分解有机物释放能量，被称为细胞的"动力车间"。',
        en: 'The main site of aerobic respiration, releasing energy from organic matter — often called the powerhouse of the cell.',
      },
      funFact: {
        zh: '线粒体含有自己的 DNA，科学家认为它可能源自被远古细胞吞入的细菌（内共生学说）。',
        en: 'Mitochondria have their own DNA — evidence they may descend from bacteria engulfed by an ancient cell (endosymbiotic theory).',
      },
      color: '#fb923c',
      position: [1.7, -0.9, 0.9],
      size: 0.42,
      rotation: [0, 0, 0.7],
      copies: [[-1.9, 0.2, -1.3]],
    },
    {
      id: 'ribosome',
      kind: 'ribosome',
      name: { zh: '核糖体', en: 'Ribosomes' },
      structure: {
        zh: '没有膜结构，由 RNA 和蛋白质构成的大小两个亚基组成，有的游离在细胞质中，有的附着在内质网上。',
        en: 'Not surrounded by a membrane; each is made of a large and a small subunit of RNA and protein, free in the cytoplasm or attached to the ER.',
      },
      role: {
        zh: '氨基酸脱水缩合形成蛋白质的场所，即蛋白质合成的"装配机器"。',
        en: 'The site where amino acids are joined into proteins — the cell’s protein-assembly machinery.',
      },
      funFact: {
        zh: '一个活跃的细胞里可以有数百万个核糖体。',
        en: 'An active cell can contain millions of ribosomes.',
      },
      color: '#facc15',
      position: [-1.5, 1.3, -0.7],
      size: 0.75,
    },
    {
      id: 'endoplasmicReticulum',
      kind: 'endoplasmicReticulum',
      name: { zh: '内质网', en: 'Endoplasmic Reticulum' },
      structure: {
        zh: '由单层膜连接而成的网状结构，与核膜相通；附着核糖体的为粗面内质网，无附着的为光面内质网。',
        en: 'A network of folded single membranes continuous with the nuclear envelope; rough ER is studded with ribosomes, smooth ER is not.',
      },
      role: {
        zh: '参与蛋白质的加工与运输，也是脂质合成的重要场所，是细胞内物质运输的通道。',
        en: 'Processes and transports proteins, synthesises lipids, and serves as the cell’s internal transport network.',
      },
      funFact: {
        zh: '内质网的膜面积可占到细胞总膜面积的一半以上。',
        en: 'The ER can account for more than half of a cell’s total membrane area.',
      },
      color: '#60a5fa',
      position: [-1.35, -0.55, 0.95],
      size: 0.85,
      rotation: [0.3, 0.5, 0],
    },
    {
      id: 'golgiApparatus',
      kind: 'golgiApparatus',
      name: { zh: '高尔基体', en: 'Golgi Apparatus' },
      structure: {
        zh: '由单层膜围成的一摞扁平囊泡叠成，周围常有许多小泡。',
        en: 'A stack of flattened single-membrane sacs (cisternae), usually surrounded by many small vesicles.',
      },
      role: {
        zh: '对来自内质网的蛋白质进行加工、分类和包装，再发送到细胞内外特定位置。',
        en: 'Modifies, sorts and packages proteins from the ER, then ships them to their destinations inside or outside the cell.',
      },
      funFact: {
        zh: '1898 年由意大利科学家卡米洛·高尔基首次在神经细胞中观察到。',
        en: 'First observed in nerve cells in 1898 by the Italian scientist Camillo Golgi.',
      },
      color: '#34d399',
      position: [1.3, 1.4, -0.9],
      size: 0.7,
      rotation: [0.4, -0.4, 0.2],
    },
  ],
};
