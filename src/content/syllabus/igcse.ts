/**
 * Cambridge IGCSE 考纲 topic 结构数据（2026–2028）。
 * 只收录确知真实的结构：考纲原文有版权，名称均为自有表述/惯用译名。
 * 引用格式："0625/1.2"（考纲编号/topic 编号），支持一级（"0620/7"）与二级（"0625/1.2"）。
 */

import type { Localized, Subject } from '../types';

export interface IgcseSubtopic {
  code: string;
  name: Localized<string>;
}

export interface IgcseTopic {
  code: string;
  name: Localized<string>;
  subtopics: IgcseSubtopic[];
}

export interface IgcseSyllabus {
  syllabusCode: '0625' | '0620' | '0610';
  subject: Subject;
  title: Localized<string>;
  topics: IgcseTopic[];
}

const physics0625: IgcseSyllabus = {
  syllabusCode: '0625',
  subject: 'physics',
  title: { zh: 'IGCSE 物理 (0625)', en: 'IGCSE Physics (0625)' },
  topics: [
    {
      code: '1',
      name: { zh: '运动、力与能量', en: 'Motion, forces and energy' },
      subtopics: [
        { code: '1.1', name: { zh: '物理量与测量', en: 'Physical quantities and measurement' } },
        { code: '1.2', name: { zh: '运动', en: 'Motion' } },
        { code: '1.3', name: { zh: '质量与重量', en: 'Mass and weight' } },
        { code: '1.4', name: { zh: '密度', en: 'Density' } },
        { code: '1.5', name: { zh: '力', en: 'Forces' } },
        { code: '1.6', name: { zh: '动量', en: 'Momentum' } },
        { code: '1.7', name: { zh: '能量、功与功率', en: 'Energy, work and power' } },
        { code: '1.8', name: { zh: '压强', en: 'Pressure' } },
      ],
    },
    {
      code: '2',
      name: { zh: '热物理', en: 'Thermal physics' },
      subtopics: [
        { code: '2.1', name: { zh: '物质的动理学粒子模型', en: 'Kinetic particle model of matter' } },
        { code: '2.2', name: { zh: '热性质与温度', en: 'Thermal properties and temperature' } },
        { code: '2.3', name: { zh: '热传递', en: 'Transfer of thermal energy' } },
      ],
    },
    {
      code: '3',
      name: { zh: '波', en: 'Waves' },
      subtopics: [
        { code: '3.1', name: { zh: '波的一般性质', en: 'General properties of waves' } },
        { code: '3.2', name: { zh: '光', en: 'Light' } },
        { code: '3.3', name: { zh: '电磁波谱', en: 'Electromagnetic spectrum' } },
        { code: '3.4', name: { zh: '声', en: 'Sound' } },
      ],
    },
    {
      code: '4',
      name: { zh: '电与磁', en: 'Electricity and magnetism' },
      subtopics: [
        { code: '4.1', name: { zh: '磁现象', en: 'Simple phenomena of magnetism' } },
        { code: '4.2', name: { zh: '电学量', en: 'Electrical quantities' } },
        { code: '4.3', name: { zh: '电路', en: 'Electric circuits' } },
        { code: '4.4', name: { zh: '用电安全', en: 'Electrical safety' } },
        { code: '4.5', name: { zh: '电磁效应', en: 'Electromagnetic effects' } },
      ],
    },
    {
      code: '5',
      name: { zh: '原子核物理', en: 'Nuclear physics' },
      subtopics: [
        { code: '5.1', name: { zh: '原子的核式模型', en: 'The nuclear model of the atom' } },
        { code: '5.2', name: { zh: '放射性', en: 'Radioactivity' } },
      ],
    },
    {
      code: '6',
      name: { zh: '空间物理', en: 'Space physics' },
      subtopics: [
        { code: '6.1', name: { zh: '地球与太阳系', en: 'Earth and the Solar System' } },
        { code: '6.2', name: { zh: '恒星与宇宙', en: 'Stars and the Universe' } },
      ],
    },
  ],
};

const chemistry0620: IgcseSyllabus = {
  syllabusCode: '0620',
  subject: 'chemistry',
  title: { zh: 'IGCSE 化学 (0620)', en: 'IGCSE Chemistry (0620)' },
  topics: [
    {
      code: '1',
      name: { zh: '物质的状态', en: 'States of matter' },
      subtopics: [],
    },
    {
      code: '2',
      name: { zh: '原子、元素与化合物', en: 'Atoms, elements and compounds' },
      subtopics: [],
    },
    {
      code: '3',
      name: { zh: '化学计量', en: 'Stoichiometry' },
      subtopics: [],
    },
    {
      code: '4',
      name: { zh: '电化学', en: 'Electrochemistry' },
      subtopics: [],
    },
    {
      code: '5',
      name: { zh: '化学能量学', en: 'Chemical energetics' },
      subtopics: [],
    },
    {
      code: '6',
      name: { zh: '化学反应', en: 'Chemical reactions' },
      subtopics: [],
    },
    {
      code: '7',
      name: { zh: '酸、碱与盐', en: 'Acids, bases and salts' },
      subtopics: [
        { code: '7.1', name: { zh: '酸和碱的特征性质', en: 'The characteristic properties of acids and bases' } },
        { code: '7.3', name: { zh: '盐的制备', en: 'Preparation of salts' } },
      ],
    },
    {
      code: '8',
      name: { zh: '元素周期表', en: 'The Periodic Table' },
      subtopics: [],
    },
    {
      code: '9',
      name: { zh: '金属', en: 'Metals' },
      subtopics: [],
    },
    {
      code: '10',
      name: { zh: '环境化学', en: 'Chemistry of the environment' },
      subtopics: [],
    },
    {
      code: '11',
      name: { zh: '有机化学', en: 'Organic chemistry' },
      subtopics: [],
    },
    {
      code: '12',
      name: { zh: '实验技术与化学分析', en: 'Experimental techniques and chemical analysis' },
      subtopics: [],
    },
  ],
};

const biology0610: IgcseSyllabus = {
  syllabusCode: '0610',
  subject: 'biology',
  title: { zh: 'IGCSE 生物 (0610)', en: 'IGCSE Biology (0610)' },
  topics: [
    { code: '1', name: { zh: '生物的特征与分类', en: 'Characteristics and classification of living organisms' }, subtopics: [] },
    { code: '2', name: { zh: '生物体的组织', en: 'Organisation of the organism' }, subtopics: [] },
    { code: '3', name: { zh: '物质进出细胞', en: 'Movement into and out of cells' }, subtopics: [] },
    { code: '4', name: { zh: '生物分子', en: 'Biological molecules' }, subtopics: [] },
    { code: '5', name: { zh: '酶', en: 'Enzymes' }, subtopics: [] },
    { code: '6', name: { zh: '植物的营养', en: 'Plant nutrition' }, subtopics: [] },
    { code: '7', name: { zh: '人的营养', en: 'Human nutrition' }, subtopics: [] },
    { code: '8', name: { zh: '植物体内的运输', en: 'Transport in plants' }, subtopics: [] },
    { code: '9', name: { zh: '动物体内的运输', en: 'Transport in animals' }, subtopics: [] },
    { code: '10', name: { zh: '疾病与免疫', en: 'Diseases and immunity' }, subtopics: [] },
    { code: '11', name: { zh: '人体的气体交换', en: 'Gas exchange in humans' }, subtopics: [] },
    { code: '12', name: { zh: '呼吸作用', en: 'Respiration' }, subtopics: [] },
    { code: '13', name: { zh: '人体的排泄', en: 'Excretion in humans' }, subtopics: [] },
    { code: '14', name: { zh: '协调与反应', en: 'Coordination and response' }, subtopics: [] },
    { code: '15', name: { zh: '药物', en: 'Drugs' }, subtopics: [] },
    { code: '16', name: { zh: '生殖', en: 'Reproduction' }, subtopics: [] },
    { code: '17', name: { zh: '遗传', en: 'Inheritance' }, subtopics: [] },
    { code: '18', name: { zh: '变异与选择', en: 'Variation and selection' }, subtopics: [] },
    { code: '19', name: { zh: '生物与其环境', en: 'Organisms and their environment' }, subtopics: [] },
    { code: '20', name: { zh: '人类对生态系统的影响', en: 'Human influences on ecosystems' }, subtopics: [] },
    { code: '21', name: { zh: '生物技术与基因改造', en: 'Biotechnology and genetic modification' }, subtopics: [] },
  ],
};

export const igcseSyllabuses: IgcseSyllabus[] = [physics0625, chemistry0620, biology0610];

/** 按学科取考纲 */
export function getIgcseSyllabusBySubject(subject: Subject): IgcseSyllabus | undefined {
  return igcseSyllabuses.find((s) => s.subject === subject);
}

/** 按考纲编号取考纲 */
export function getIgcseSyllabus(code: string): IgcseSyllabus | undefined {
  return igcseSyllabuses.find((s) => s.syllabusCode === code);
}

export interface IgcseRefResolution {
  syllabus: IgcseSyllabus;
  topic: IgcseTopic;
  subtopic?: IgcseSubtopic;
}

/**
 * 解析考纲引用，如 "0625/1.2"、"0620/7"。
 * 未找到时返回 undefined。
 */
export function resolveIgcseRef(ref: string): IgcseRefResolution | undefined {
  const [syllabusCode, topicCode] = ref.split('/');
  if (!syllabusCode || !topicCode) return undefined;
  const syllabus = getIgcseSyllabus(syllabusCode);
  if (!syllabus) return undefined;
  const topicNumber = topicCode.split('.')[0];
  const topic = syllabus.topics.find((t) => t.code === topicNumber);
  if (!topic) return undefined;
  const subtopic = topicCode.includes('.')
    ? topic.subtopics.find((st) => st.code === topicCode)
    : undefined;
  if (topicCode.includes('.') && !subtopic) return undefined;
  return { syllabus, topic, subtopic };
}
