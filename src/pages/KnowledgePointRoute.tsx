import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getKnowledgePoint } from '../content/knowledge';
import type { KnowledgePoint, Lang, Subject } from '../content/types';
import { KnowledgePointPage } from '../components/knowledge/KnowledgePointPage';
import { NotFoundPage } from './NotFoundPage';

const validSubjects: Subject[] = ['physics', 'chemistry', 'biology'];

/** 知识点路由：解析参数，异步加载正文（IGCSE 课程按课懒加载）后交给统一渲染引擎 */
export function KnowledgePointRoute() {
  const { t } = useTranslation();
  const params = useParams<{ lang: string; subject: string; kpId: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';
  const subject = params.subject as Subject | undefined;
  const valid = !!subject && validSubjects.includes(subject) && !!params.kpId;

  // undefined = 加载中；null = 知识点不存在；加载失败单独走 loadFailed（网络错误可重试）
  const [kp, setKp] = useState<KnowledgePoint | null>();
  const [loadFailed, setLoadFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!valid) return;
    let cancelled = false;
    setKp(undefined);
    setLoadFailed(false);
    getKnowledgePoint(subject!, params.kpId!)
      .then((loaded) => {
        if (!cancelled) setKp(loaded ?? null);
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [valid, subject, params.kpId, attempt]);

  if (!valid) {
    return <NotFoundPage />;
  }
  if (loadFailed) {
    // 动态 import 网络失败 ≠ 知识点不存在：给重试入口而非 404
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="mb-2 text-lg font-semibold text-slate-900">{t('kpLoad.errorTitle')}</p>
        <p className="mb-6 text-sm text-slate-500">{t('kpLoad.errorMessage')}</p>
        <button
          type="button"
          onClick={() => setAttempt((n) => n + 1)}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          {t('kpLoad.retry')}
        </button>
      </div>
    );
  }
  if (kp === undefined) {
    return <div className="py-20 text-center text-sm text-slate-400">{t('kpLoad.loading')}</div>;
  }
  if (!kp) {
    return <NotFoundPage />;
  }
  return <KnowledgePointPage key={kp.id} kp={kp} lang={lang} />;
}
