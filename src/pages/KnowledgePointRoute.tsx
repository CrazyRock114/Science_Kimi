import { useParams } from 'react-router-dom';
import { getKnowledgePoint } from '../content/knowledge';
import type { Lang, Subject } from '../content/types';
import { KnowledgePointPage } from '../components/knowledge/KnowledgePointPage';
import { NotFoundPage } from './NotFoundPage';

const validSubjects: Subject[] = ['physics', 'chemistry', 'biology'];

/** 知识点路由：解析参数并交给统一渲染引擎 */
export function KnowledgePointRoute() {
  const params = useParams<{ lang: string; subject: string; kpId: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';
  const subject = params.subject as Subject | undefined;

  if (!subject || !validSubjects.includes(subject) || !params.kpId) {
    return <NotFoundPage />;
  }
  const kp = getKnowledgePoint(subject, params.kpId);
  if (!kp) {
    return <NotFoundPage />;
  }
  return <KnowledgePointPage key={kp.id} kp={kp} lang={lang} />;
}
