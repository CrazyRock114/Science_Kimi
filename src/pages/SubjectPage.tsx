import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getKnowledgePointsBySubject } from '../content/knowledge';
import type { Lang, Subject } from '../content/types';
import { KnowledgePointCard } from '../components/KnowledgePointCard';

const validSubjects: Subject[] = ['physics', 'chemistry', 'biology'];

/** 学科列表页 */
export function SubjectPage() {
  const { t } = useTranslation();
  const params = useParams<{ lang: string; subject: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';
  const subject = params.subject as Subject | undefined;

  if (!subject || !validSubjects.includes(subject)) {
    return <Navigate to={`/${lang}`} replace />;
  }

  const points = getKnowledgePointsBySubject(subject);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">{t(`subjects.${subject}.name`)}</h1>
      <p className="mb-6 text-slate-600">{t(`subjects.${subject}.desc`)}</p>
      <p className="mb-3 text-sm text-slate-500">{t('home.resultCount', { count: points.length })}</p>
      {points.length === 0 ? (
        <p className="rounded-lg border border-dashed border-slate-300 py-10 text-center text-sm text-slate-400">
          {t('home.empty')}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((kp) => (
            <KnowledgePointCard key={kp.id} kp={kp} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}
