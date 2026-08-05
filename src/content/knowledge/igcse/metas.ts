import type { KnowledgePointMeta } from '../../types';
import { igcse0625Metas } from './0625/meta';
import { igcse0620Metas } from './0620/meta';
import { igcse0610Metas } from './0610/meta';

/**
 * IGCSE 转换课程轻量元数据（按学科聚合；新增学科时在此追加）。
 * 只含列表/搜索所需字段，课程正文经 knowledge/index.ts 的
 * getKnowledgePoint 按课动态 import，不进首屏 bundle。
 */
export const igcseMetas: KnowledgePointMeta[] = [
  ...igcse0625Metas,
  ...igcse0620Metas,
  ...igcse0610Metas,
];
