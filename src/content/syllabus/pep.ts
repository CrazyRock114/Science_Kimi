/**
 * 人教版教材章节骨架数据（册 → 章）。
 * 覆盖：初中物理（八上/八下/九全）、初中化学（九上/九下）、
 * 高中物理必修 1–3、高中化学必修第一/二册、高中生物必修 1/2。
 * 引用格式："册id/章id"，如 "pep-phy-s1/ch2"。
 */

import type { Localized, Subject } from '../types';

export interface PepChapter {
  id: string;
  title: Localized<string>;
}

export interface PepBook {
  id: string;
  subject: Subject;
  gradeTier: 'middle' | 'senior';
  title: Localized<string>;
  chapters: PepChapter[];
}

function chapters(titles: Array<[string, string]>): PepChapter[] {
  return titles.map(([zh, en], i) => ({ id: `ch${i + 1}`, title: { zh, en } }));
}

export const pepBooks: PepBook[] = [
  {
    id: 'pep-phy-j8a',
    subject: 'physics',
    gradeTier: 'middle',
    title: { zh: '物理·八年级上册', en: 'Physics Grade 8, Vol. 1' },
    chapters: chapters([
      ['第一章 机械运动', 'Chapter 1 Mechanical Motion'],
      ['第二章 声现象', 'Chapter 2 Sound Phenomena'],
      ['第三章 物态变化', 'Chapter 3 Changes of State'],
      ['第四章 光现象', 'Chapter 4 Light Phenomena'],
      ['第五章 透镜及其应用', 'Chapter 5 Lenses and Their Applications'],
      ['第六章 质量与密度', 'Chapter 6 Mass and Density'],
    ]),
  },
  {
    id: 'pep-phy-j8b',
    subject: 'physics',
    gradeTier: 'middle',
    title: { zh: '物理·八年级下册', en: 'Physics Grade 8, Vol. 2' },
    chapters: chapters([
      ['第七章 力', 'Chapter 7 Force'],
      ['第八章 运动和力', 'Chapter 8 Motion and Force'],
      ['第九章 压强', 'Chapter 9 Pressure'],
      ['第十章 浮力', 'Chapter 10 Buoyancy'],
      ['第十一章 功和机械能', 'Chapter 11 Work and Mechanical Energy'],
      ['第十二章 简单机械', 'Chapter 12 Simple Machines'],
    ]),
  },
  {
    id: 'pep-phy-j9',
    subject: 'physics',
    gradeTier: 'middle',
    title: { zh: '物理·九年级全一册', en: 'Physics Grade 9 (Complete Volume)' },
    chapters: chapters([
      ['第十三章 内能', 'Chapter 13 Internal Energy'],
      ['第十四章 内能的利用', 'Chapter 14 Utilization of Internal Energy'],
      ['第十五章 电流和电路', 'Chapter 15 Current and Circuits'],
      ['第十六章 电压 电阻', 'Chapter 16 Voltage and Resistance'],
      ['第十七章 欧姆定律', "Chapter 17 Ohm's Law"],
      ['第十八章 电功率', 'Chapter 18 Electric Power'],
      ['第十九章 生活用电', 'Chapter 19 Household Electricity'],
      ['第二十章 电与磁', 'Chapter 20 Electricity and Magnetism'],
      ['第二十一章 信息的传递', 'Chapter 21 Transmission of Information'],
      ['第二十二章 能源与可持续发展', 'Chapter 22 Energy and Sustainable Development'],
    ]),
  },
  {
    id: 'pep-phy-s1',
    subject: 'physics',
    gradeTier: 'senior',
    title: { zh: '物理·必修第一册', en: 'Physics Compulsory 1' },
    chapters: chapters([
      ['第一章 运动的描述', 'Chapter 1 Description of Motion'],
      ['第二章 匀变速直线运动的研究', 'Chapter 2 Study of Uniformly Accelerated Linear Motion'],
      ['第三章 相互作用——力', 'Chapter 3 Interactions — Forces'],
      ['第四章 运动和力的关系', 'Chapter 4 Relationship Between Motion and Force'],
    ]),
  },
  {
    id: 'pep-phy-s2',
    subject: 'physics',
    gradeTier: 'senior',
    title: { zh: '物理·必修第二册', en: 'Physics Compulsory 2' },
    chapters: chapters([
      ['第五章 抛体运动', 'Chapter 5 Projectile Motion'],
      ['第六章 圆周运动', 'Chapter 6 Circular Motion'],
      ['第七章 万有引力与宇宙航行', 'Chapter 7 Gravitation and Space Travel'],
      ['第八章 机械能守恒定律', 'Chapter 8 Law of Conservation of Mechanical Energy'],
    ]),
  },
  {
    id: 'pep-phy-s3',
    subject: 'physics',
    gradeTier: 'senior',
    title: { zh: '物理·必修第三册', en: 'Physics Compulsory 3' },
    chapters: chapters([
      ['第九章 静电场及其应用', 'Chapter 9 Electrostatic Fields and Their Applications'],
      ['第十章 静电场中的能量', 'Chapter 10 Energy in Electrostatic Fields'],
      ['第十一章 电路及其应用', 'Chapter 11 Circuits and Their Applications'],
      ['第十二章 电能 能量守恒定律', 'Chapter 12 Electric Energy and the Law of Conservation of Energy'],
      ['第十三章 电磁感应与电磁波初步', 'Chapter 13 Introduction to Electromagnetic Induction and Electromagnetic Waves'],
    ]),
  },
  {
    id: 'pep-che-j9a',
    subject: 'chemistry',
    gradeTier: 'middle',
    title: { zh: '化学·九年级上册', en: 'Chemistry Grade 9, Vol. 1' },
    chapters: chapters([
      ['第一单元 走进化学世界', 'Unit 1 Entering the World of Chemistry'],
      ['第二单元 我们周围的空气', 'Unit 2 The Air Around Us'],
      ['第三单元 物质构成的奥秘', 'Unit 3 The Mysteries of Matter Composition'],
      ['第四单元 自然界的水', 'Unit 4 Water in Nature'],
      ['第五单元 化学方程式', 'Unit 5 Chemical Equations'],
      ['第六单元 碳和碳的氧化物', 'Unit 6 Carbon and Carbon Oxides'],
      ['第七单元 燃料及其利用', 'Unit 7 Fuels and Their Utilization'],
    ]),
  },
  {
    id: 'pep-che-j9b',
    subject: 'chemistry',
    gradeTier: 'middle',
    title: { zh: '化学·九年级下册', en: 'Chemistry Grade 9, Vol. 2' },
    chapters: chapters([
      ['第八单元 金属和金属材料', 'Unit 8 Metals and Metal Materials'],
      ['第九单元 溶液', 'Unit 9 Solutions'],
      ['第十单元 酸和碱', 'Unit 10 Acids and Bases'],
      ['第十一单元 盐 化肥', 'Unit 11 Salts and Fertilizers'],
      ['第十二单元 化学与生活', 'Unit 12 Chemistry and Daily Life'],
    ]),
  },
  {
    id: 'pep-che-s1',
    subject: 'chemistry',
    gradeTier: 'senior',
    title: { zh: '化学·必修第一册', en: 'Chemistry Compulsory 1' },
    chapters: chapters([
      ['第一章 物质及其变化', 'Chapter 1 Substances and Their Changes'],
      ['第二章 海水中的重要元素——钠和氯', 'Chapter 2 Important Elements in Seawater — Sodium and Chlorine'],
      ['第三章 铁 金属材料', 'Chapter 3 Iron and Metal Materials'],
      ['第四章 物质结构 元素周期律', 'Chapter 4 Structure of Matter and the Periodic Law'],
    ]),
  },
  {
    id: 'pep-che-s2',
    subject: 'chemistry',
    gradeTier: 'senior',
    title: { zh: '化学·必修第二册', en: 'Chemistry Compulsory 2' },
    chapters: chapters([
      ['第五章 化工生产中的重要非金属元素', 'Chapter 5 Important Non-metal Elements in Chemical Industry'],
      ['第六章 化学反应与能量', 'Chapter 6 Chemical Reactions and Energy'],
      ['第七章 有机化合物', 'Chapter 7 Organic Compounds'],
      ['第八章 化学与可持续发展', 'Chapter 8 Chemistry and Sustainable Development'],
    ]),
  },
  {
    id: 'pep-bio-s1',
    subject: 'biology',
    gradeTier: 'senior',
    title: { zh: '生物·必修1 分子与细胞', en: 'Biology Compulsory 1: Molecules and Cells' },
    chapters: chapters([
      ['第1章 走近细胞', 'Chapter 1 Approaching the Cell'],
      ['第2章 组成细胞的分子', 'Chapter 2 Molecules That Make Up Cells'],
      ['第3章 细胞的基本结构', 'Chapter 3 Basic Structure of the Cell'],
      ['第4章 细胞的物质输入和输出', 'Chapter 4 Material Input and Output of Cells'],
      ['第5章 细胞的能量供应和利用', 'Chapter 5 Energy Supply and Utilization in Cells'],
      ['第6章 细胞的生命历程', 'Chapter 6 The Life Course of Cells'],
    ]),
  },
  {
    id: 'pep-bio-s2',
    subject: 'biology',
    gradeTier: 'senior',
    title: { zh: '生物·必修2 遗传与进化', en: 'Biology Compulsory 2: Heredity and Evolution' },
    chapters: chapters([
      ['第1章 遗传因子的发现', 'Chapter 1 Discovery of Hereditary Factors'],
      ['第2章 基因和染色体的关系', 'Chapter 2 Relationship Between Genes and Chromosomes'],
      ['第3章 基因的本质', 'Chapter 3 The Nature of the Gene'],
      ['第4章 基因的表达', 'Chapter 4 Gene Expression'],
      ['第5章 基因突变及其他变异', 'Chapter 5 Gene Mutations and Other Variations'],
      ['第6章 生物的进化', 'Chapter 6 Biological Evolution'],
    ]),
  },
];

/** 按学科取教材册列表 */
export function getPepBooksBySubject(subject: Subject): PepBook[] {
  return pepBooks.filter((b) => b.subject === subject);
}

/** 按学段取教材册列表 */
export function getPepBooksByTier(tier: 'middle' | 'senior'): PepBook[] {
  return pepBooks.filter((b) => b.gradeTier === tier);
}

/** 按 id 取教材册 */
export function getPepBook(id: string): PepBook | undefined {
  return pepBooks.find((b) => b.id === id);
}

export interface PepRefResolution {
  book: PepBook;
  chapter: PepChapter;
}

/** 解析教材引用，如 "pep-phy-s1/ch2"；未找到返回 undefined */
export function resolvePepRef(ref: string): PepRefResolution | undefined {
  const [bookId, chapterId] = ref.split('/');
  if (!bookId || !chapterId) return undefined;
  const book = getPepBook(bookId);
  if (!book) return undefined;
  const chapter = book.chapters.find((c) => c.id === chapterId);
  if (!chapter) return undefined;
  return { book, chapter };
}
