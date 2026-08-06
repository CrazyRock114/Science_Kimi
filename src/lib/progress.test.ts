import { beforeEach, describe, expect, it } from 'vitest';
import {
  getKnowledgePointProgress,
  recordExamSelfAssessment,
  recordQuizScore,
  resetProgress,
} from './progress';

beforeEach(() => {
  resetProgress();
});

describe('recordExamSelfAssessment（真题结构化题自评）', () => {
  it('按题记录自评结果，再次自评覆盖', () => {
    recordExamSelfAssessment('kp-a', 'q1', true);
    expect(getKnowledgePointProgress('kp-a').examSelfAssessment).toEqual({ q1: true });

    recordExamSelfAssessment('kp-a', 'q1', false);
    recordExamSelfAssessment('kp-a', 'q2', true);
    expect(getKnowledgePointProgress('kp-a').examSelfAssessment).toEqual({ q1: false, q2: true });
  });

  it('与小测成绩并存：互不影响 completed 与 bestScore', () => {
    recordQuizScore('kp-b', 2, 3);
    recordExamSelfAssessment('kp-b', 'q1', true);
    let progress = getKnowledgePointProgress('kp-b');
    expect(progress.bestScore).toBe(2);
    expect(progress.total).toBe(3);
    expect(progress.completed).toBe(false);
    expect(progress.examSelfAssessment).toEqual({ q1: true });

    // 再记小测成绩，自评记录保留
    recordQuizScore('kp-b', 3, 3);
    progress = getKnowledgePointProgress('kp-b');
    expect(progress.completed).toBe(true);
    expect(progress.examSelfAssessment).toEqual({ q1: true });
  });

  it('自评不会把知识点标记为完成', () => {
    recordExamSelfAssessment('kp-c', 'q1', true);
    expect(getKnowledgePointProgress('kp-c').completed).toBeUndefined();
  });
});
