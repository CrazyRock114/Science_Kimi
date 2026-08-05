/**
 * IGCSE_miniMax 仿真内核的类型 shim。
 *
 * 内核（kernel.ts）与内核测试原样复制自 IGCSE_miniMax（作者 CrazyRock114，
 * NOTICE 声明 non-commercial 用途）；它们引用的 `@/content/types` 仿真类型
 * 在此重导出，import 路径由 scripts/convert-igcse-lessons.ts 改写。
 * 类型定义与源项目保持一致，勿手改。
 */

export interface Bilingual {
  en: string;
  zh?: string;
}

/** 离散参数的一个可选值，如选择介质或波型。 */
export interface ParamOption {
  value: number;
  label: Bilingual;
}

export interface ParamSpec {
  key: string;
  label: Bilingual;
  /** 渲染在数值旁的单位字符串，如 'm / s' */
  unit: string;
  min: number;
  max: number;
  step: number;
  default: number;
  /** 以 KaTeX 渲染的符号，如 'v_0' */
  symbol?: string;
  /** 存在时参数渲染为一行按钮而非滑块（用于真正离散的取值） */
  options?: ParamOption[];
  /** 在控制面板中隐藏（画布拖拽或动画时钟驱动的参数） */
  hidden?: boolean;
}

/** 纯函数内核：参数进，派生曲线与读数出。无副作用、无 DOM、无 React。 */
export type SimKernel<P = Record<string, number>, R = SimResult> = (params: P) => R;

export interface SimGuide {
  axis: 'x' | 'y';
  value: number;
  label?: string;
}

export interface SimSeries {
  key: string;
  label: Bilingual;
  unit: { x: string; y: string };
  points: Array<[number, number]>;
  guides?: SimGuide[];
  yBounds?: { min: number; max: number };
  xBounds?: { min: number; max: number };
}

export interface SimBody {
  x: number;
  y: number;
  r?: number;
  kind?: string;
  label?: string;
}

export interface SimLink {
  a: number;
  b: number;
  order?: number;
  kind?: string;
}

export interface SimAssignment {
  items: Array<{
    id: string;
    label: Bilingual;
    target: string;
    placed?: string;
  }>;
  targets: Array<{ id: string; label: Bilingual; hint?: Bilingual }>;
}

export interface SimGrid {
  columns: string[];
  columnsLabel: Bilingual;
  rows: string[];
  rowsLabel: Bilingual;
  cells: string[][];
  groups: Array<{ id: string; label: Bilingual }>;
  groupOf: Record<string, string>;
}

export interface SimPyramid {
  levels: Array<{ label: Bilingual; value: number; detail?: Bilingual }>;
  unit: string;
}

export interface SimEquation {
  left: Array<{ coefficient: number; formula: string; state: string }>;
  right: Array<{ coefficient: number; formula: string; state: string }>;
  tally: Array<{ element: string; left: number; right: number }>;
}

export interface SimChromatogram {
  solventDistance: number;
  lanes: Array<{
    label: Bilingual;
    spots: Array<{ label: string; distance: number; rf: number; highlighted?: boolean }>;
  }>;
}

export interface SimResult {
  series: SimSeries[];
  assignment?: SimAssignment;
  grid?: SimGrid;
  pyramid?: SimPyramid;
  equation?: SimEquation;
  chromatogram?: SimChromatogram;
  readouts: Record<string, number>;
  markers?: Array<{ x: number; y: number; label: Bilingual }>;
  bodies?: SimBody[];
  links?: SimLink[];
  bounds?: { xMin: number; xMax: number; yMin: number; yMax: number };
}
