/**
 * 内容模型：所有面向学生的文本字段均为 { zh, en } 双语。
 * 知识点是声明式数据对象，由统一渲染引擎（components/knowledge）驱动。
 */

import type { MmxSimulation } from './sim-spec';
import type { LessonExtra } from './extras-types';

export type Lang = 'zh' | 'en';

export type Subject = 'physics' | 'chemistry' | 'biology';

export type GradeTier = 'middle' | 'senior' | 'both';

/** 双语文本/数据 */
export type Localized<T> = { zh: T; en: T };

/** 理论区内容块 */
export type TheoryBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'formula'; latex: string; caption?: string }
  | { type: 'list'; items: string[] };

/** 仿真参数定义（渲染为滑块） */
export interface SimulationParamDef {
  key: string;
  label: Localized<string>;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit?: string;
}

export type ParamValues = Record<string, number>;

/**
 * 实时公式：把当前参数值代入符号公式，返回代入后的 KaTeX 字符串。
 * 例如 v = u + at → "v = 0 + 2t"。
 */
export interface LiveFormula {
  id: string;
  /** 符号形式（KaTeX） */
  latex: string;
  /** 代入当前参数后的 KaTeX 字符串 */
  substitute: (params: ParamValues) => string;
}

/**
 * 读数代入公式（mmx 转换课程）：substitute 接收内核 readouts 而非参数。
 * 转换自 IGCSE_miniMax 课程的 equation.substitute，由仿真内核的读数驱动。
 */
export interface ReadoutLiveFormula {
  id: string;
  /** 符号形式（KaTeX） */
  latex: string;
  /** 代入当前内核读数后的 KaTeX 字符串 */
  substituteFromReadouts: (readouts: Record<string, number>) => string;
}

/** 仿真定义：参数 + 渲染器引用 */
export interface SimulationDef {
  /** 渲染器 id，指向 simulations/registry.ts 中注册的组件 */
  renderer: string;
  params: SimulationParamDef[];
  /** 实时公式：手写知识点用 LiveFormula（参数代入），mmx 转换课程用 ReadoutLiveFormula（读数代入） */
  liveFormulas?: Array<LiveFormula | ReadoutLiveFormula>;
  /**
   * miniMax 通用基元仿真（IGCSE_miniMax 转换课程）：完整 SimSpec + 内核函数引用。
   * 存在时由 simulations/mmx/MmxStage 整体接管仿真区（画布 + 参数面板 + 读数），
   * renderer 固定为 'mmx'。
   */
  mmx?: MmxSimulation;
}

/** IGCSE 课程层级：core = 仅 Core 内容，extended = Core + Supplement 内容 */
export type IgcseLessonTier = 'core' | 'extended';

/** 评分标准中的一个得分点（mark scheme 语言，英文原文） */
export interface ExamMarkPoint {
  /** 可给分的要点，英文（mark scheme 用语） */
  text: string;
  marks: number;
  /** 同等可接受的其他表述 */
  alternatives?: string[];
}

/**
 * IGCSE 考试真题演练题（由 IGCSE_miniMax 课程的 checkpoint 转换而来）。
 * 题干与选项为英文——by design 不译：IGCSE 以英文考试，学生必须练习读英文题。
 */
export interface ExamQuestion {
  id: string;
  /** 考纲 statement 引用（斜杠格式，如 "0625/1.2.6"） */
  syllabus: string[];
  /** core = Paper 1/3 考查，supplement = 仅 Paper 2/4 考查 */
  tier: 'core' | 'supplement';
  /** 考纲 command word，如 'Calculate'、'Explain' */
  commandWord: string;
  marks: number;
  /** 题干——仅英文，by design */
  stem: string;
  /** 选择题选项（Paper 1/2 为四选一 MCQ）；结构化题无此字段 */
  options?: string[];
  /** MCQ 正确答案下标 */
  answerIndex?: number;
  markScheme: ExamMarkPoint[];
  /** 考官点评：失分点分析（双语） */
  examinerNote?: Localized<string>;
}

/** 随堂小测题（可判分，双语题干/选项/解析） */
export interface QuizItem {
  id: string;
  question: Localized<string>;
  options: Localized<string[]>;
  answerIndex: number;
  explanation: Localized<string>;
}

/** 生活场景预设：一键应用一组参数值 */
export interface Preset {
  id: string;
  name: Localized<string>;
  description?: Localized<string>;
  params: ParamValues;
}

/** 仿真内核纯函数：命名输入 → 命名数值输出 */
export type KernelFn = (input: Record<string, number>) => Record<string, number>;

/**
 * 正确性探针：对内核纯函数的断言，供 Vitest 自动验证内容正确性。
 */
export interface Probe {
  id: string;
  description: Localized<string>;
  /** 内核函数名（在知识点的 kernels 表中查找） */
  kernel: string;
  input: Record<string, number>;
  /** 预期输出：输出名 → 预期数值 */
  expected: Record<string, number>;
  /** 相对容差，默认 1e-6 */
  tolerance?: number;
}

/** 讲解剧本段落类型：引入 / 概念讲解 / 互动引导 / 总结 */
export type NarrationSectionKind = 'intro' | 'concept' | 'interaction' | 'summary';

/**
 * 讲解动作：讲解行驱动仿真，使讲解与画面同步（移植自 IGCSE_miniMax）。
 * setParams 合并写入仿真参数；reset 恢复默认参数；play/pause 控制 mmx 动画时钟；
 * highlight 按 CSS 选择器短暂高亮页面元素。
 */
export interface NarrationAction {
  type: 'setParams' | 'play' | 'pause' | 'reset' | 'highlight';
  params?: Record<string, number>;
  /** 要高亮元素的 CSS 选择器 */
  target?: string;
}

/** 讲解剧本的一行（IGCSE 转换课程）：台词 + 随行公式 + 仿真动作 + 行后停顿 */
export interface NarrationLine {
  id: string;
  /** 朗读台词（双语） */
  text: Localized<string>;
  /** 该行播放时展示的关联公式（KaTeX） */
  latex?: string;
  /** 该行开始播放时应用到仿真的动作 */
  action?: NarrationAction;
  /** 该行播完后停顿的秒数 */
  pause?: number;
}

/** 讲解剧本的一个段落（台词双语） */
export interface NarrationSection {
  id: string;
  kind: NarrationSectionKind;
  /** 朗读台词（双语）；有 lines 时为段落标题 */
  text: Localized<string>;
  /**
   * 行级剧本（IGCSE 转换课程）：存在时播放器按行播放，
   * 音频路径以行 id 寻址，并处理随行 latex / action / pause。
   */
  lines?: NarrationLine[];
}

/** TTS 讲解剧本：音频由 tools/generate-narration-audio.md 描述的流程预生成 */
export interface NarrationScript {
  sections: NarrationSection[];
}

/**
 * 知识点轻量元数据：首页/学科列表页渲染与搜索筛选所需的字段，
 * 不含 theory/quiz/examPractice/simulation/内核函数等重内容。
 * IGCSE 转换课程的 meta 由 scripts/convert-igcse-lessons.ts 生成（igcse/<subject>/meta.ts），
 * 正文经 getKnowledgePoint 按课懒加载；手写知识点的 meta 在 knowledge/index.ts 静态提取。
 */
export interface KnowledgePointMeta {
  id: string;
  subject: Subject;
  title: Localized<string>;
  summary: Localized<string>;
  gradeTier: GradeTier;
  syllabus: KnowledgePoint['syllabus'];
  keywords: Localized<string[]>;
  /** IGCSE 课程层级（转换课程填写） */
  tier?: IgcseLessonTier;
  hasSimulation: boolean;
  hasExamPractice: boolean;
  hasNarration: boolean;
  hasExtras: boolean;
}

/** 知识点 */
export interface KnowledgePoint {
  id: string;
  subject: Subject;
  title: Localized<string>;
  summary: Localized<string>;
  gradeTier: GradeTier;
  syllabus: {
    /** 人教版章节引用，如 "pep-phy-s1/ch2"（册 id/章 id） */
    pep?: string[];
    /** IGCSE topic 引用，如 "0625/1.2"（考纲编号/topic 编号，可用二级编号） */
    igcse?: string[];
  };
  keywords: Localized<string[]>;
  theory: Localized<TheoryBlock[]>;
  simulation?: SimulationDef;
  presets?: Preset[];
  quiz: QuizItem[];
  /** IGCSE 课程层级（转换自 IGCSE_miniMax 课程时填写） */
  tier?: IgcseLessonTier;
  /** 考试真题演练（英文题干 + mark scheme；转换课程以此代替小测，quiz 可为空） */
  examPractice?: ExamQuestion[];
  /** 仿真/计算内核纯函数表（探针测试与仿真共用） */
  kernels?: Record<string, KernelFn>;
  expectedResults?: Probe[];
  /** TTS 讲解剧本（可选；缺省时知识点页不显示讲解播放器） */
  narration?: NarrationScript;
  /**
   * 数据驱动的交互学习模块（解剖探索器 / 流程图 / 对比卡片等，移植自
   * IGCSE_miniMax lesson-extras），渲染在仿真区之后；纯 JSON 数据。
   */
  extras?: LessonExtra[];
  /** 相关知识点 id 列表（页底"相关课程"互链；id 须能解析到现有知识点） */
  related?: string[];
}
