import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { allLabExperiments } from '../content/lab';
import { ExperimentCategory } from '../chem-engine/experiment-types';
import type { LabExperiment } from '../content/lab';
import type { Lang } from '../content/types';

const difficultyStyle: Record<LabExperiment['difficulty'], string> = {
  EASY: 'bg-green-100 text-green-700',
  MEDIUM: 'bg-amber-100 text-amber-700',
  HARD: 'bg-red-100 text-red-700',
};

/** 虚拟实验室：实验列表页（按门类分组） */
export function LabListPage() {
  const { t } = useTranslation();
  const params = useParams<{ lang: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';

  const groups = Object.values(ExperimentCategory)
    .map((category) => ({
      category,
      items: allLabExperiments.filter((e) => e.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">{t('lab.title')}</h1>
      <p className="mb-1 text-slate-600">{t('lab.entryDesc')}</p>
      <p className="mb-8 text-sm text-slate-500">
        {t('lab.experimentCount', { count: allLabExperiments.length })}
      </p>

      {groups.map((g) => (
        <section key={g.category} className="mb-10">
          <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-800">
            {t(`lab.category.${g.category}`)}
            <span className="ml-2 text-sm font-normal text-slate-400">({g.items.length})</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((exp) => (
              <Link
                key={exp.slug}
                to={`/${lang}/chemistry/lab/${exp.slug}`}
                className="block rounded-lg border border-slate-200 border-l-4 border-l-chemistry bg-white p-4 transition hover:shadow-md"
              >
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{exp.title[lang]}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${difficultyStyle[exp.difficulty]}`}
                  >
                    {t(`lab.difficulty.${exp.difficulty}`)}
                  </span>
                </div>
                <p className="mb-2 line-clamp-2 text-sm leading-6 text-slate-600">
                  {exp.description[lang]}
                </p>
                <p className="text-xs text-slate-400">
                  {t('lab.minutes', { minutes: exp.estimatedMinutes })}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
