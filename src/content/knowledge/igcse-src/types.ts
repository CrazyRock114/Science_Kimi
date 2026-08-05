/**
 * IGCSE_miniMax 源课程动态内容的类型 shim。
 *
 * igcse-src/<subject>/<slug>/ 下的 narration.ts 原样复制自 IGCSE_miniMax
 * （作者 CrazyRock114，non-commercial），equations.ts 由转换器从源 lesson.ts
 * 的 equations 提取（含 substitute 函数源码）；它们引用的 `@/content/types`
 * 讲解/公式类型在此重定义，import 路径由 scripts/convert-igcse-lessons.ts 改写。
 * 类型定义与源项目保持一致，勿手改。
 */

export interface Bilingual {
  en: string;
  zh?: string;
}

export type NarrationSectionType =
  | 'intro'
  | 'concept'
  | 'equation'
  | 'animation'
  | 'interaction'
  | 'worked-example'
  | 'application'
  | 'summary';

/** 讲解行可驱动仿真，使讲解与画面同步。 */
export interface NarrationAction {
  type: 'setParams' | 'play' | 'pause' | 'reset' | 'highlight';
  params?: Record<string, number>;
  /** 要高亮元素的 CSS 选择器 */
  target?: string;
}

export interface NarrationLine {
  id: string;
  text: Bilingual;
  /** 该行播放时展示的关联公式 */
  latex?: string;
  action?: NarrationAction;
  /** 该行播完后停顿的秒数 */
  pause?: number;
}

export interface NarrationSection {
  id: string;
  type: NarrationSectionType;
  title: Bilingual;
  lines: NarrationLine[];
}

export interface NarrationScript {
  /** 与课程 slug 一致 */
  id: string;
  sections: NarrationSection[];
}

export interface EquationBlock {
  /** KaTeX 源码，如 'v = \\frac{s}{t}' */
  latex: string;
  /** 公式含义（文字说明） */
  meaning: Bilingual;
  /** 实时代入：接收内核 readouts，把当前数值填进公式 */
  substitute?: (readouts: Record<string, number>) => string;
}
