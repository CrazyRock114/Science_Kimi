/**
 * miniMax 通用仿真基元的规格类型（SimSpec / MmxSimulation 等）。
 *
 * 这些规格类型在源项目（IGCSE_miniMax，作者 CrazyRock114，non-commercial）中本就
 * 定义在 src/content/types.ts；本站最初移植时放在 simulations/mmx/types.ts，导致
 * content 层（content/types.ts 的 SimulationDef.mmx）反向依赖 simulations 的 UI 层。
 * 现移回 content 层：simulations/mmx/types.ts 仅做 re-export，既有 import 不变。
 *
 * 参数/结果类型（ParamSpec、ParamOption、Bilingual、SimResult……）的单一定义在
 * simulations/igcse-kernels/types.ts（内核 shim，与源项目保持一致，勿手改），
 * 此处 import 复用，保证两处不漂移。
 */

import type { Bilingual, ParamSpec, SimResult } from '../simulations/igcse-kernels/types';

/**
 * 全部通用仿真基元 id。scene3d/apparatus/graphpaper 源项目尚未实现
 * （走 SimStage fallback），故不在 IMPLEMENTED_PRIMITIVES 中。
 */
export const SIM_PRIMITIVES = [
  'plot2d',
  'atom',
  'molecule',
  'balance',
  'bonding',
  'chromatogram',
  'giant',
  'ladder',
  'lattice',
  'periodictable',
  'sort',
  'match',
  'punnett',
  'pyramid',
  'beam',
  'vectors',
  'particles',
  'waves',
  'raytrace',
  'circuit',
  'field2d',
  'scene3d',
  'apparatus',
  'graphpaper',
] as const;

/** 通用仿真基元（由 SIM_PRIMITIVES 派生，勿另行维护联合类型）。 */
export type SimPrimitive = (typeof SIM_PRIMITIVES)[number];

/**
 * 已实现渲染分支的基元：与 simulations/mmx/SimStage.tsx 的 switch 分支一一对应
 * （switch 无法从常量派生，新增基元时两处同步；测试用本清单校验课程数据）。
 */
export const IMPLEMENTED_PRIMITIVES = [
  'plot2d',
  'atom',
  'molecule',
  'balance',
  'bonding',
  'chromatogram',
  'giant',
  'ladder',
  'lattice',
  'periodictable',
  'sort',
  'match',
  'punnett',
  'pyramid',
  'beam',
  'vectors',
  'particles',
  'waves',
  'raytrace',
  'circuit',
  'field2d',
] as const satisfies readonly SimPrimitive[];

export interface ReadoutSpec {
  key: string;
  label: Bilingual;
  unit: string;
  /** 显示用有效数字位数（IGCSE 考查有效数字） */
  sigFigs: number;
  symbol?: string;
  /** 原样打印而非补齐有效数字——用于精确计数类量 */
  exact?: boolean;
}

/** 由动画时钟驱动一个参数；内核仍是纯函数，渲染器每帧推进该参数。 */
export interface AnimateSpec {
  /** 要推进的参数（必须存在于 params） */
  param: string;
  /** 该参数每真实秒推进的单位数 */
  speed: number;
  /** 到达此值后回绕到 min，形成无缝循环 */
  loop: number;
}

/** 一键场景预设。 */
export interface SimPreset {
  label: Bilingual;
  params: Record<string, number>;
}

export interface SimSpec {
  primitive: SimPrimitive;
  /** 内核模块 id（源项目经 registry 解析；本站 mmx 模式下 kernel 函数直接挂在 MmxSimulation 上） */
  kernel: string;
  params: ParamSpec[];
  readouts: ReadoutSpec[];
  animate?: AnimateSpec;
  /** 可在画布上拖拽设置的参数 */
  draggable?: string[];
  presets?: SimPreset[];
  /** 一句话告诉学生可以对画布做什么 */
  hint?: Bilingual;
  /** 基元内部的模式变体（如 field2d 的 'magnetic' | 'electric'） */
  variant?: string;
}

/**
 * 挂在 SimulationDef.mmx 上的完整 miniMax 仿真定义：
 * 原始 SimSpec 数据 + 内核函数引用（转换课程的数据文件直接 import 自己的内核）。
 */
export interface MmxSimulation {
  spec: SimSpec;
  /**
   * 内核纯函数。用方法签名而非函数类型属性：strictFunctionTypes 下方法参数双变，
   * 各课内核的 SimKernel<具体 Params> 可直接赋值，无需逐课断言。
   */
  kernel(params: Record<string, number>): SimResult;
}
