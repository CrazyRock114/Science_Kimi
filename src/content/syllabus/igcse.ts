/**
 * Cambridge IGCSE 考纲结构数据（2026–2028 周期）。
 *
 * topic/subtopic 结构与名称以 IGCSE_miniMax（作者 CrazyRock114，NOTICE 声明
 * non-commercial 用途）的考纲数据为准；考纲原文有版权，名称均为自有表述/惯用译名。
 * statement 明细见同目录 igcse-statements.ts。
 *
 * 引用格式："0625/1.2"（考纲编号/topic 编号），支持一级（"0620/7"）、
 * 二级（"0625/1.2"）与三级 statement（"0625/1.2.6"）。
 */

import type { Localized, Subject } from '../types';
import { igcseStatementById, type IgcseStatement } from './igcse-statements';

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
      code: "1",
      name: { zh: "运动、力与能量", en: "Motion, forces and energy" },
      subtopics: [
        { code: "1.1", name: { zh: "物理量与测量方法", en: "Physical quantities and measurement techniques" } },
        { code: "1.2", name: { zh: "运动", en: "Motion" } },
        { code: "1.3", name: { zh: "质量与重力", en: "Mass and weight" } },
        { code: "1.4", name: { zh: "密度", en: "Density" } },
        { code: "1.5.1", name: { zh: "力的作用效果", en: "Effects of forces" } },
        { code: "1.5.2", name: { zh: "力的转动效果", en: "Turning effect of forces" } },
        { code: "1.5.3", name: { zh: "重心", en: "Centre of gravity" } },
        { code: "1.6", name: { zh: "动量", en: "Momentum" } },
        { code: "1.7.1", name: { zh: "能量", en: "Energy" } },
        { code: "1.7.2", name: { zh: "功", en: "Work" } },
        { code: "1.7.3", name: { zh: "能源", en: "Energy resources" } },
        { code: "1.7.4", name: { zh: "功率", en: "Power" } },
        { code: "1.8", name: { zh: "压强", en: "Pressure" } },
      ],
    },
    {
      code: "2",
      name: { zh: "热学", en: "Thermal physics" },
      subtopics: [
        { code: "2.1.1", name: { zh: "物质的状态", en: "States of matter" } },
        { code: "2.1.2", name: { zh: "粒子模型", en: "Particle model" } },
        { code: "2.1.3", name: { zh: "气体与热力学温标", en: "Gases and the absolute scale of temperature" } },
        { code: "2.2.1", name: { zh: "固体、液体和气体的热膨胀", en: "Thermal expansion of solids, liquids and gases" } },
        { code: "2.2.2", name: { zh: "比热容", en: "Specific heat capacity" } },
        { code: "2.2.3", name: { zh: "熔化、沸腾与蒸发", en: "Melting, boiling and evaporation" } },
        { code: "2.3.1", name: { zh: "热传导", en: "Conduction" } },
        { code: "2.3.2", name: { zh: "对流", en: "Convection" } },
        { code: "2.3.3", name: { zh: "热辐射", en: "Radiation" } },
        { code: "2.3.4", name: { zh: "热传递的后果", en: "Consequences of thermal energy transfer" } },
      ],
    },
    {
      code: "3",
      name: { zh: "波", en: "Waves" },
      subtopics: [
        { code: "3.1", name: { zh: "波的一般性质", en: "General properties of waves" } },
        { code: "3.2.1", name: { zh: "光的反射", en: "Reflection of light" } },
        { code: "3.2.2", name: { zh: "光的折射", en: "Refraction of light" } },
        { code: "3.2.3", name: { zh: "薄透镜", en: "Thin lenses" } },
        { code: "3.2.4", name: { zh: "光的色散", en: "Dispersion of light" } },
        { code: "3.3", name: { zh: "电磁波谱", en: "Electromagnetic spectrum" } },
        { code: "3.4", name: { zh: "声", en: "Sound" } },
      ],
    },
    {
      code: "4",
      name: { zh: "电与磁", en: "Electricity and magnetism" },
      subtopics: [
        { code: "4.1", name: { zh: "磁现象", en: "Simple phenomena of magnetism" } },
        { code: "4.2.1", name: { zh: "电荷", en: "Electric charge" } },
        { code: "4.2.2", name: { zh: "电流", en: "Electric current" } },
        { code: "4.2.3", name: { zh: "电动势与电势差", en: "Electromotive force and potential difference" } },
        { code: "4.2.4", name: { zh: "电阻", en: "Resistance" } },
        { code: "4.2.5", name: { zh: "电能与电功率", en: "Electrical energy and electrical power" } },
        { code: "4.3.1", name: { zh: "电路图与元件", en: "Circuit diagrams and circuit components" } },
        { code: "4.3.2", name: { zh: "串联与并联电路", en: "Series and parallel circuits" } },
        { code: "4.3.3", name: { zh: "元件的作用与应用", en: "Action and use of circuit components" } },
        { code: "4.4", name: { zh: "用电安全", en: "Electrical safety" } },
        { code: "4.5.1", name: { zh: "电磁感应", en: "Electromagnetic induction" } },
        { code: "4.5.2", name: { zh: "交流发电机", en: "The a.c. generator" } },
        { code: "4.5.3", name: { zh: "电流的磁效应", en: "Magnetic effect of a current" } },
        { code: "4.5.4", name: { zh: "通电导体受到的力", en: "Force on a current-carrying conductor" } },
        { code: "4.5.5", name: { zh: "直流电动机", en: "The d.c. motor" } },
        { code: "4.5.6", name: { zh: "变压器", en: "The transformer" } },
      ],
    },
    {
      code: "5",
      name: { zh: "核物理", en: "Nuclear physics" },
      subtopics: [
        { code: "5.1.1", name: { zh: "原子", en: "The atom" } },
        { code: "5.1.2", name: { zh: "原子核", en: "The nucleus" } },
        { code: "5.2.1", name: { zh: "放射性的探测", en: "Detection of radioactivity" } },
        { code: "5.2.2", name: { zh: "三种核辐射", en: "The three types of nuclear emission" } },
        { code: "5.2.3", name: { zh: "放射性衰变", en: "Radioactive decay" } },
        { code: "5.2.4", name: { zh: "半衰期", en: "Half-life" } },
        { code: "5.2.5", name: { zh: "安全防护", en: "Safety precautions" } },
      ],
    },
    {
      code: "6",
      name: { zh: "空间物理", en: "Space physics" },
      subtopics: [
        { code: "6.1.1", name: { zh: "地球", en: "The Earth" } },
        { code: "6.1.2", name: { zh: "太阳系", en: "The Solar System" } },
        { code: "6.2.1", name: { zh: "作为恒星的太阳", en: "The Sun as a star" } },
        { code: "6.2.2", name: { zh: "恒星", en: "Stars" } },
        { code: "6.2.3", name: { zh: "宇宙", en: "The Universe" } },
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
      code: "1",
      name: { zh: "物质的状态", en: "States of matter" },
      subtopics: [
        { code: "1.1", name: { zh: "固体、液体和气体", en: "Solids, liquids and gases" } },
        { code: "1.2", name: { zh: "扩散", en: "Diffusion" } },
      ],
    },
    {
      code: "2",
      name: { zh: "原子、元素与化合物", en: "Atoms, elements and compounds" },
      subtopics: [
        { code: "2.1", name: { zh: "元素、化合物与混合物", en: "Elements, compounds and mixtures" } },
        { code: "2.2", name: { zh: "原子结构与元素周期表", en: "Atomic structure and the Periodic Table" } },
        { code: "2.3", name: { zh: "同位素", en: "Isotopes" } },
        { code: "2.4", name: { zh: "离子与离子键", en: "Ions and ionic bonds" } },
        { code: "2.5", name: { zh: "简单分子与共价键", en: "Simple molecules and covalent bonds" } },
        { code: "2.6", name: { zh: "巨型共价结构", en: "Giant covalent structures" } },
        { code: "2.7", name: { zh: "金属键", en: "Metallic bonding" } },
      ],
    },
    {
      code: "3",
      name: { zh: "化学计量", en: "Stoichiometry" },
      subtopics: [
        { code: "3.1", name: { zh: "化学式", en: "Formulae" } },
        { code: "3.2", name: { zh: "原子与分子的相对质量", en: "Relative masses of atoms and molecules" } },
        { code: "3.3", name: { zh: "摩尔与阿伏加德罗常数", en: "The mole and the Avogadro constant" } },
      ],
    },
    {
      code: "4",
      name: { zh: "电化学", en: "Electrochemistry" },
      subtopics: [
        { code: "4.1", name: { zh: "电解", en: "Electrolysis" } },
        { code: "4.2", name: { zh: "氢氧燃料电池", en: "Hydrogen–oxygen fuel cells" } },
      ],
    },
    {
      code: "5",
      name: { zh: "化学能量学", en: "Chemical energetics" },
      subtopics: [
        { code: "5.1", name: { zh: "放热与吸热反应", en: "Exothermic and endothermic reactions" } },
      ],
    },
    {
      code: "6",
      name: { zh: "化学反应", en: "Chemical reactions" },
      subtopics: [
        { code: "6.1", name: { zh: "物理变化与化学变化", en: "Physical and chemical changes" } },
        { code: "6.2", name: { zh: "反应速率", en: "Rate of reaction" } },
        { code: "6.3", name: { zh: "可逆反应与平衡", en: "Reversible reactions and equilibrium" } },
        { code: "6.4", name: { zh: "氧化还原", en: "Redox" } },
      ],
    },
    {
      code: "7",
      name: { zh: "酸、碱与盐", en: "Acids, bases and salts" },
      subtopics: [
        { code: "7.1", name: { zh: "酸碱的特征性质", en: "The characteristic properties of acids and bases" } },
        { code: "7.2", name: { zh: "氧化物", en: "Oxides" } },
        { code: "7.3", name: { zh: "盐的制备", en: "Preparation of salts" } },
      ],
    },
    {
      code: "8",
      name: { zh: "元素周期表", en: "The Periodic Table" },
      subtopics: [
        { code: "8.1", name: { zh: "元素的排列", en: "Arrangement of elements" } },
        { code: "8.2", name: { zh: "第 I 主族性质", en: "Group I properties" } },
        { code: "8.3", name: { zh: "第 VII 主族性质", en: "Group VII properties" } },
        { code: "8.4", name: { zh: "过渡元素", en: "Transition elements" } },
        { code: "8.5", name: { zh: "稀有气体", en: "Noble gases" } },
      ],
    },
    {
      code: "9",
      name: { zh: "金属", en: "Metals" },
      subtopics: [
        { code: "9.1", name: { zh: "金属的性质", en: "Properties of metals" } },
        { code: "9.2", name: { zh: "金属的用途", en: "Uses of metals" } },
        { code: "9.3", name: { zh: "合金及其性质", en: "Alloys and their properties" } },
        { code: "9.4", name: { zh: "金属活动性顺序", en: "Reactivity series" } },
        { code: "9.5", name: { zh: "金属的腐蚀", en: "Corrosion of metals" } },
        { code: "9.6", name: { zh: "金属的冶炼", en: "Extraction of metals" } },
      ],
    },
    {
      code: "10",
      name: { zh: "环境化学", en: "Chemistry of the environment" },
      subtopics: [
        { code: "10.1", name: { zh: "水", en: "Water" } },
        { code: "10.2", name: { zh: "化肥", en: "Fertilisers" } },
        { code: "10.3", name: { zh: "空气质量与气候", en: "Air quality and climate" } },
      ],
    },
    {
      code: "11",
      name: { zh: "有机化学", en: "Organic chemistry" },
      subtopics: [
        { code: "11.1", name: { zh: "化学式、官能团与术语", en: "Formulae, functional groups and terminology" } },
        { code: "11.2", name: { zh: "有机物命名", en: "Naming organic compounds" } },
        { code: "11.3", name: { zh: "燃料", en: "Fuels" } },
        { code: "11.4", name: { zh: "烷烃", en: "Alkanes" } },
        { code: "11.5", name: { zh: "烯烃", en: "Alkenes" } },
        { code: "11.6", name: { zh: "醇", en: "Alcohols" } },
        { code: "11.7", name: { zh: "羧酸", en: "Carboxylic acids" } },
        { code: "11.8", name: { zh: "聚合物", en: "Polymers" } },
      ],
    },
    {
      code: "12",
      name: { zh: "实验技术与化学分析", en: "Experimental techniques and chemical analysis" },
      subtopics: [
        { code: "12.1", name: { zh: "实验设计", en: "Experimental design" } },
        { code: "12.2", name: { zh: "酸碱滴定", en: "Acid–base titrations" } },
        { code: "12.3", name: { zh: "色谱法", en: "Chromatography" } },
        { code: "12.4", name: { zh: "分离与提纯", en: "Separation and purification" } },
        { code: "12.5", name: { zh: "离子与气体的检验", en: "Identification of ions and gases" } },
      ],
    },
  ],
};

const biology0610: IgcseSyllabus = {
  syllabusCode: '0610',
  subject: 'biology',
  title: { zh: 'IGCSE 生物 (0610)', en: 'IGCSE Biology (0610)' },
  topics: [
    {
      code: "1",
      name: { zh: "生物的特征与分类", en: "Characteristics and classification of living organisms" },
      subtopics: [
        { code: "1.1", name: { zh: "生物的特征", en: "Characteristics of living organisms" } },
        { code: "1.2", name: { zh: "分类系统的概念与用途", en: "Concept and uses of classification systems" } },
        { code: "1.3", name: { zh: "生物的特征分类", en: "Features of organisms" } },
      ],
    },
    {
      code: "2",
      name: { zh: "生物体的组成层次", en: "Organisation of the organism" },
      subtopics: [
        { code: "2.1", name: { zh: "细胞结构", en: "Cell structure" } },
        { code: "2.2", name: { zh: "标本的大小", en: "Size of specimens" } },
      ],
    },
    {
      code: "3",
      name: { zh: "物质进出细胞", en: "Movement into and out of cells" },
      subtopics: [
        { code: "3.1", name: { zh: "扩散", en: "Diffusion" } },
        { code: "3.2", name: { zh: "渗透", en: "Osmosis" } },
        { code: "3.3", name: { zh: "主动运输", en: "Active transport" } },
      ],
    },
    {
      code: "4",
      name: { zh: "生物大分子", en: "Biological molecules" },
      subtopics: [
        { code: "4.1", name: { zh: "生物大分子", en: "Biological molecules" } },
      ],
    },
    {
      code: "5",
      name: { zh: "酶", en: "Enzymes" },
      subtopics: [
        { code: "5.1", name: { zh: "酶", en: "Enzymes" } },
      ],
    },
    {
      code: "6",
      name: { zh: "植物的营养", en: "Plant nutrition" },
      subtopics: [
        { code: "6.1", name: { zh: "光合作用", en: "Photosynthesis" } },
        { code: "6.2", name: { zh: "叶的结构", en: "Leaf structure" } },
      ],
    },
    {
      code: "7",
      name: { zh: "人体的营养", en: "Human nutrition" },
      subtopics: [
        { code: "7.1", name: { zh: "膳食", en: "Diet" } },
        { code: "7.2", name: { zh: "消化系统", en: "Digestive system" } },
        { code: "7.3", name: { zh: "物理性消化", en: "Physical digestion" } },
        { code: "7.4", name: { zh: "化学性消化", en: "Chemical digestion" } },
        { code: "7.5", name: { zh: "吸收", en: "Absorption" } },
      ],
    },
    {
      code: "8",
      name: { zh: "植物体内的运输", en: "Transport in plants" },
      subtopics: [
        { code: "8.1", name: { zh: "木质部与韧皮部", en: "Xylem and phloem" } },
        { code: "8.2", name: { zh: "水分的吸收", en: "Water uptake" } },
        { code: "8.3", name: { zh: "蒸腾作用", en: "Transpiration" } },
        { code: "8.4", name: { zh: "有机物的运输", en: "Translocation" } },
      ],
    },
    {
      code: "9",
      name: { zh: "动物体内的运输", en: "Transport in animals" },
      subtopics: [
        { code: "9.1", name: { zh: "循环系统", en: "Circulatory systems" } },
        { code: "9.2", name: { zh: "心脏", en: "Heart" } },
        { code: "9.3", name: { zh: "血管", en: "Blood vessels" } },
        { code: "9.4", name: { zh: "血液", en: "Blood" } },
      ],
    },
    {
      code: "10",
      name: { zh: "疾病与免疫", en: "Diseases and immunity" },
      subtopics: [
        { code: "10.1", name: { zh: "疾病与免疫", en: "Diseases and immunity" } },
      ],
    },
    {
      code: "11",
      name: { zh: "人体的气体交换", en: "Gas exchange in humans" },
      subtopics: [
        { code: "11.1", name: { zh: "人体的气体交换", en: "Gas exchange in humans" } },
      ],
    },
    {
      code: "12",
      name: { zh: "呼吸作用", en: "Respiration" },
      subtopics: [
        { code: "12.1", name: { zh: "呼吸作用", en: "Respiration" } },
        { code: "12.2", name: { zh: "有氧呼吸", en: "Aerobic respiration" } },
        { code: "12.3", name: { zh: "无氧呼吸", en: "Anaerobic respiration" } },
      ],
    },
    {
      code: "13",
      name: { zh: "人体的排泄", en: "Excretion in humans" },
      subtopics: [
        { code: "13.1", name: { zh: "人体的排泄", en: "Excretion in humans" } },
      ],
    },
    {
      code: "14",
      name: { zh: "协调与反应", en: "Coordination and response" },
      subtopics: [
        { code: "14.1", name: { zh: "协调与反应", en: "Coordination and response" } },
        { code: "14.2", name: { zh: "感觉器官", en: "Sense organs" } },
        { code: "14.3", name: { zh: "激素", en: "Hormones" } },
        { code: "14.4", name: { zh: "稳态", en: "Homeostasis" } },
        { code: "14.5", name: { zh: "向性反应", en: "Tropic responses" } },
      ],
    },
    {
      code: "15",
      name: { zh: "药物", en: "Drugs" },
      subtopics: [
        { code: "15.1", name: { zh: "药物", en: "Drugs" } },
      ],
    },
    {
      code: "16",
      name: { zh: "生殖", en: "Reproduction" },
      subtopics: [
        { code: "16.1", name: { zh: "无性生殖", en: "Asexual reproduction" } },
        { code: "16.2", name: { zh: "有性生殖", en: "Sexual reproduction" } },
        { code: "16.3", name: { zh: "植物的有性生殖", en: "Sexual reproduction in plants" } },
        { code: "16.4", name: { zh: "人的有性生殖", en: "Sexual reproduction in humans" } },
        { code: "16.5", name: { zh: "人的性激素", en: "Sex hormones in humans" } },
        { code: "16.6", name: { zh: "性传播感染", en: "Sexually transmitted infections" } },
      ],
    },
    {
      code: "17",
      name: { zh: "遗传", en: "Inheritance" },
      subtopics: [
        { code: "17.1", name: { zh: "染色体、基因与蛋白质", en: "Chromosomes, genes and proteins" } },
        { code: "17.2", name: { zh: "有丝分裂", en: "Mitosis" } },
        { code: "17.3", name: { zh: "减数分裂", en: "Meiosis" } },
        { code: "17.4", name: { zh: "单基因遗传", en: "Monohybrid inheritance" } },
      ],
    },
    {
      code: "18",
      name: { zh: "变异与选择", en: "Variation and selection" },
      subtopics: [
        { code: "18.1", name: { zh: "变异", en: "Variation" } },
        { code: "18.2", name: { zh: "适应性特征", en: "Adaptive features" } },
        { code: "18.3", name: { zh: "选择", en: "Selection" } },
      ],
    },
    {
      code: "19",
      name: { zh: "生物与环境", en: "Organisms and their environment" },
      subtopics: [
        { code: "19.1", name: { zh: "能量流动", en: "Energy flow" } },
        { code: "19.2", name: { zh: "食物链与食物网", en: "Food chains and food webs" } },
        { code: "19.3", name: { zh: "物质循环", en: "Nutrient cycles" } },
        { code: "19.4", name: { zh: "种群", en: "Populations" } },
      ],
    },
    {
      code: "20",
      name: { zh: "人类对生态系统的影响", en: "Human influences on ecosystems" },
      subtopics: [
        { code: "20.1", name: { zh: "粮食供应", en: "Food supply" } },
        { code: "20.2", name: { zh: "栖息地破坏", en: "Habitat destruction" } },
        { code: "20.3", name: { zh: "污染", en: "Pollution" } },
        { code: "20.4", name: { zh: "保护", en: "Conservation" } },
      ],
    },
    {
      code: "21",
      name: { zh: "生物技术与基因改造", en: "Biotechnology and genetic modification" },
      subtopics: [
        { code: "21.1", name: { zh: "生物技术与基因改造", en: "Biotechnology and genetic modification" } },
        { code: "21.2", name: { zh: "生物技术", en: "Biotechnology" } },
        { code: "21.3", name: { zh: "基因改造", en: "Genetic modification" } },
      ],
    },
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
  /** 三级引用（如 "0625/1.2.6"）解析出的 statement */
  statement?: IgcseStatement;
}

/**
 * 解析考纲引用，如 "0620/7"（topic）、"0625/1.2"（subtopic）、"0625/1.2.6"（statement）。
 *
 * 兼容：旧骨架中被拆分的 subtopic 引用（如 "0625/1.5"，现分为 1.5.1/1.5.2/1.5.3）
 * 按 topic 级解析（subtopic 为 undefined），保证既有知识点引用不失效。
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
  if (!topicCode.includes('.')) return { syllabus, topic };
  // 二级：subtopic 精确匹配
  const subtopic = topic.subtopics.find((st) => st.code === topicCode);
  if (subtopic) return { syllabus, topic, subtopic };
  // 三级：statement = subtopic 编号 + 序号
  const subtopicCode = topicCode.split('.').slice(0, -1).join('.');
  const parent = topic.subtopics.find((st) => st.code === subtopicCode);
  const statement = igcseStatementById.get(ref);
  if (parent && statement) return { syllabus, topic, subtopic: parent, statement };
  // 兼容映射：旧骨架的合并 subtopic（现被拆分），退化为 topic 级解析
  if (topic.subtopics.some((st) => st.code.startsWith(topicCode + '.'))) {
    return { syllabus, topic };
  }
  return undefined;
}

/** 解析三级 statement 引用（如 "0625/1.2.6"），非 statement 引用返回 undefined */
export function resolveIgcseStatement(ref: string): IgcseStatement | undefined {
  return resolveIgcseRef(ref)?.statement;
}
