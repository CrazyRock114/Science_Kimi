/**
 * mmx 仿真层的类型入口（re-export 汇聚，无本地定义）。
 *
 * - 结果/数据类型（SimResult、SimBody、SimSeries、ParamSpec、Bilingual……）：
 *   唯一定义在 igcse-kernels 内核 shim（与源项目保持一致，勿手改）；
 * - 规格类型（SimSpec、SimPrimitive、ReadoutSpec、MmxSimulation……）：
 *   移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）src/content/types.ts
 *   的仿真规格部分，定义在 content/sim-spec.ts（规格本质是内容数据，放 content 层
 *   消除 content→simulations 的反向依赖）。
 *
 * 既有 `from './types'` / `from '../simulations/mmx/types'` 的 import 全部继续有效。
 */

export * from '../igcse-kernels/types';
export * from '../../content/sim-spec';
