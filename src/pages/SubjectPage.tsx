import { Navigate, useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getKnowledgePointsBySubject } from '../content/knowledge';
import { allLabExperiments } from '../content/lab';
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

      {subject === 'chemistry' && (
        <Link
          to={`/${lang}/chemistry/lab`}
          className="mb-8 block rounded-lg border border-slate-200 border-l-4 border-l-chemistry bg-white p-5 transition hover:shadow-md"
        >
          <div className="mb-1 flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-slate-900">🧪 {t('lab.title')}</h2>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
              {t('lab.experimentCount', { count: allLabExperiments.length })}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-600">{t('lab.entryDesc')}</p>
        </Link>
      )}

      {subject === 'biology' && (
        <Link
          to={`/${lang}/biology/cells`}
          className="mb-8 block rounded-lg border border-slate-200 border-l-4 border-l-biology bg-white p-5 transition hover:shadow-md"
        >
          <div className="mb-1 flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-slate-900">🔬 {t('cells.title')}</h2>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
              {t('cells.badge')}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-600">{t('cells.entryDesc')}</p>
        </Link>
      )}

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
