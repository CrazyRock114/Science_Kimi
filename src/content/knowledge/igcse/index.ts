import type { KnowledgePoint } from '../../types';
import { igcse0625KnowledgePoints } from './0625';
import { igcse0620KnowledgePoints } from './0620';
import { igcse0610KnowledgePoints } from './0610';

/** IGCSE 转换课程（按学科聚合；新增学科时在此追加） */
export const igcseKnowledgePoints: KnowledgePoint[] = [
  ...igcse0625KnowledgePoints,
  ...igcse0620KnowledgePoints,
  ...igcse0610KnowledgePoints,
];
