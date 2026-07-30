import { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLabExperiment } from '../content/lab';
import type { Lang } from '../content/types';
import { NotFoundPage } from './NotFoundPage';

// 实验台主组件懒加载（SVG 渲染与引擎调用较重，按需分包）
const LabBench = lazy(() => import('../components/lab/LabBench'));

/** 虚拟实验室：单个实验的实验台页 */
export function LabBenchPage() {
  const { t } = useTranslation();
  const params = useParams<{ lang: string; slug: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';
  const experiment = params.slug ? getLabExperiment(params.slug) : undefined;

  if (!experiment) {
    return <NotFoundPage />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link
        to={`/${lang}/chemistry/lab`}
        className="mb-4 inline-block text-sm text-slate-500 transition hover:text-blue-600"
      >
        ← {t('lab.backToList')}
      </Link>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h1 className="text-3xl font-bold text-slate-900">{experiment.title[lang]}</h1>
        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
          {t(`lab.category.${experiment.category}`)}
        </span>
        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
          {t(`lab.difficulty.${experiment.difficulty}`)}
        </span>
        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
          {t('lab.minutes', { minutes: experiment.estimatedMinutes })}
        </span>
      </div>
      <p className="mb-6 max-w-3xl leading-7 text-slate-600">{experiment.description[lang]}</p>

      <Suspense
        fallback={
          <div className="rounded-xl border border-slate-200 bg-white py-24 text-center text-sm text-slate-400">
            Loading…
          </div>
        }
      >
        <LabBench experiment={experiment} lang={lang} />
      </Suspense>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <section>
          <h2 className="mb-2 text-sm font-semibold text-slate-900">{t('lab.objectives')}</h2>
          <ul className="list-inside list-disc space-y-1 text-sm leading-6 text-slate-600">
            {experiment.objectives[lang].map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-2 text-sm font-semibold text-slate-900">{t('lab.apparatus')}</h2>
          <div className="flex flex-wrap gap-1.5">
            {experiment.apparatus[lang].map((a) => (
              <span key={a} className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                {a}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
