/**
 * 学习进度记录：localStorage 存储小测最好成绩与知识点完成标记。
 * 无账号体系，数据仅保存在本机浏览器。
 */

const STORAGE_KEY = 'bsl:progress:v1';

export interface KnowledgePointProgress {
  bestScore?: number;
  total?: number;
  completed?: boolean;
  /** 真题结构化题自评结果（题 id → 是否答对）；与小测成绩并存，互不影响 */
  examSelfAssessment?: Record<string, boolean>;
  updatedAt?: string;
}

export type ProgressMap = Record<string, KnowledgePointProgress>;

function safeStorage(): Storage | undefined {
  try {
    if (typeof localStorage !== 'undefined') return localStorage;
  } catch {
    // 隐私模式等场景下 localStorage 不可用
  }
  return undefined;
}

export function getProgress(): ProgressMap {
  const storage = safeStorage();
  if (!storage) return {};
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as ProgressMap;
    }
    return {};
  } catch {
    return {};
  }
}

function saveProgress(map: ProgressMap): void {
  const storage = safeStorage();
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // 写入失败（容量/隐私模式）时静默降级
  }
}

export function getKnowledgePointProgress(kpId: string): KnowledgePointProgress {
  return getProgress()[kpId] ?? {};
}

export function isCompleted(kpId: string): boolean {
  return getKnowledgePointProgress(kpId).completed === true;
}

/**
 * 记录一次小测成绩：保留历史最好成绩；全部答对时标记知识点完成。
 */
export function recordQuizScore(kpId: string, score: number, total: number): void {
  const map = getProgress();
  const prev = map[kpId] ?? {};
  const bestScore = Math.max(prev.bestScore ?? 0, score);
  map[kpId] = {
    ...prev,
    bestScore,
    total,
    completed: prev.completed === true || (total > 0 && bestScore >= total),
    updatedAt: new Date().toISOString(),
  };
  saveProgress(map);
}

/**
 * 记录一道真题结构化题的自评结果（对照 mark scheme 自判对错）。
 * 按题覆盖最新自评；不影响小测成绩与完成标记。
 */
export function recordExamSelfAssessment(kpId: string, questionId: string, correct: boolean): void {
  const map = getProgress();
  const prev = map[kpId] ?? {};
  map[kpId] = {
    ...prev,
    examSelfAssessment: { ...prev.examSelfAssessment, [questionId]: correct },
    updatedAt: new Date().toISOString(),
  };
  saveProgress(map);
}

export function resetProgress(): void {
  const storage = safeStorage();
  if (!storage) return;
  try {
    storage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
