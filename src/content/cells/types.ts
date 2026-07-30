import type { Localized } from '../types';

/**
 * 3D 细胞查看器的内容模型（纯数据，渲染层只读）。
 * 新增细胞器 / 细胞类型只需在数据文件中追加条目。
 */

export type CellId = 'animal' | 'plant';

/** 细胞器的几何种类，components/cells/OrganelleMesh 按 kind 选择程序化建模方式 */
export type OrganelleKind =
  | 'cellMembrane'
  | 'cellWall'
  | 'nucleus'
  | 'mitochondrion'
  | 'ribosome'
  | 'endoplasmicReticulum'
  | 'golgiApparatus'
  | 'chloroplast'
  | 'vacuole';

export type Vec3 = [number, number, number];

export interface Organelle {
  /** 在所属细胞内唯一 */
  id: string;
  kind: OrganelleKind;
  name: Localized<string>;
  /** 结构描述 */
  structure: Localized<string>;
  /** 功能描述 */
  role: Localized<string>;
  funFact: Localized<string>;
  /** 主色（hex） */
  color: string;
  /** 在细胞内的位置（细胞中心为原点） */
  position: Vec3;
  /** 主尺寸参数，含义由各 kind 的渲染器解释（通常是半径或半长） */
  size: number;
  rotation?: Vec3;
  /** 额外副本的绝对位置（同一细胞器出现多份时使用，如线粒体、叶绿体） */
  copies?: Vec3[];
}

export interface CellModel {
  id: CellId;
  name: Localized<string>;
  description: Localized<string>;
  /** 细胞外形：动物细胞为球体，植物细胞为长方体（决定膜/壁的建模方式） */
  boundary: 'sphere' | 'box';
  organelles: Organelle[];
}
