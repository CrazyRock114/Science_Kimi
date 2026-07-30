/**
 * 内容模型：所有面向学生的文本字段均为 { zh, en } 双语。
 * 知识点是声明式数据对象，由统一渲染引擎（components/knowledge）驱动。
 */

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

/** 仿真定义：参数 + 渲染器引用 */
export interface SimulationDef {
  /** 渲染器 id，指向 simulations/registry.ts 中注册的组件 */
  renderer: string;
  params: SimulationParamDef[];
  liveFormulas?: LiveFormula[];
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

/** 讲解剧本的一个段落（台词双语） */
export interface NarrationSection {
  id: string;
  kind: NarrationSectionKind;
  /** 朗读台词（双语） */
  text: Localized<string>;
}

/** TTS 讲解剧本：音频由 tools/generate-narration-audio.md 描述的流程预生成 */
export interface NarrationScript {
  sections: NarrationSection[];
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
  /** 仿真/计算内核纯函数表（探针测试与仿真共用） */
  kernels?: Record<string, KernelFn>;
  expectedResults?: Probe[];
  /** TTS 讲解剧本（可选；缺省时知识点页不显示讲解播放器） */
  narration?: NarrationScript;
}
