import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getKnowledgePoint } from '../content/knowledge';
import type { KnowledgePoint, Lang, Subject } from '../content/types';
import { KnowledgePointPage } from '../components/knowledge/KnowledgePointPage';
import { NotFoundPage } from './NotFoundPage';

const validSubjects: Subject[] = ['physics', 'chemistry', 'biology'];

/** 知识点路由：解析参数，异步加载正文（IGCSE 课程按课懒加载）后交给统一渲染引擎 */
export function KnowledgePointRoute() {
  const params = useParams<{ lang: string; subject: string; kpId: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';
  const subject = params.subject as Subject | undefined;
  const valid = !!subject && validSubjects.includes(subject) && !!params.kpId;

  // undefined = 加载中；null = 不存在或加载失败
  const [kp, setKp] = useState<KnowledgePoint | null>();

  useEffect(() => {
    if (!valid) return;
    let cancelled = false;
    setKp(undefined);
    getKnowledgePoint(subject!, params.kpId!)
      .then((loaded) => {
        if (!cancelled) setKp(loaded ?? null);
      })
      .catch(() => {
        if (!cancelled) setKp(null);
      });
    return () => {
      cancelled = true;
    };
  }, [valid, subject, params.kpId]);

  if (!valid) {
    return <NotFoundPage />;
  }
  if (kp === undefined) {
    return <div className="py-20 text-center text-sm text-slate-400">Loading…</div>;
  }
  if (!kp) {
    return <NotFoundPage />;
  }
  return <KnowledgePointPage key={kp.id} kp={kp} lang={lang} />;
}
