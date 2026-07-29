import type { KnowledgePoint, Subject } from '../types';
import { phyMotion001 } from './phy-motion-001';
import { chemPh001 } from './chem-ph-001';

/** 全部知识点（按加入顺序） */
export const knowledgePoints: KnowledgePoint[] = [phyMotion001, chemPh001];

export function getKnowledgePointsBySubject(subject: Subject): KnowledgePoint[] {
  return knowledgePoints.filter((kp) => kp.subject === subject);
}

export function getKnowledgePoint(subject: Subject, id: string): KnowledgePoint | undefined {
  return knowledgePoints.find((kp) => kp.subject === subject && kp.id === id);
}
