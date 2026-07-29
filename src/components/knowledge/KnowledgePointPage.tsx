import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { KnowledgePoint, Lang, ParamValues } from '../../content/types';
import { resolveIgcseRef } from '../../content/syllabus/igcse';
import { resolvePepRef } from '../../content/syllabus/pep';
import { getKnowledgePointProgress } from '../../lib/progress';
import { Formula } from '../Formula';
import { TheorySection } from './TheorySection';
import { ParamPanel } from './ParamPanel';
import { PresetBar } from './PresetBar';
import { SimulationCanvas } from './SimulationCanvas';
import { QuizSection } from './QuizSection';

interface KnowledgePointPageProps {
  kp: KnowledgePoint;
  lang: Lang;
}

function initialParams(kp: KnowledgePoint): ParamValues {
  const values: ParamValues = {};
  for (const def of kp.simulation?.params ?? []) {
    values[def.key] = def.defaultValue;
  }
  return values;
}

/** 知识点统一渲染引擎：理论 → 公式代入 → 参数 → 仿真 → 预设 → 小测 → 完成记录 */
export function KnowledgePointPage({ kp, lang }: KnowledgePointPageProps) {
  const { t } = useTranslation();
  const [params, setParams] = useState<ParamValues>(() => initialParams(kp));

  const syllabusTags = useMemo(() => {
    const tags: string[] = [];
    for (const ref of kp.syllabus.igcse ?? []) {
      const resolved = resolveIgcseRef(ref);
      if (resolved) {
        const name = resolved.subtopic?.name[lang] ?? resolved.topic.name[lang];
        tags.push(`IGCSE ${resolved.syllabus.syllabusCode} · ${ref.split('/')[1]} ${name}`);
      }
    }
    for (const ref of kp.syllabus.pep ?? []) {
      const resolved = resolvePepRef(ref);
      if (resolved) {
        tags.push(`${resolved.book.title[lang]} · ${resolved.chapter.title[lang]}`);
      }
    }
    return tags;
  }, [kp, lang]);

  const progress = getKnowledgePointProgress(kp.id);

  const handleParamChange = (key: string, value: number) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      {/* 标题 / 摘要 / 考纲标签 */}
      <header className="mb-8">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-600">
            {t(`gradeTier.${kp.gradeTier}`)}
          </span>
          {progress.completed && (
            <span className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-700">
              ✓ {t('progress.completed')}
            </span>
          )}
          {progress.bestScore !== undefined && progress.total !== undefined && (
            <span className="rounded-full bg-blue-50 px-3 py-0.5 text-xs text-blue-700">
              {t('progress.bestScore', { score: progress.bestScore, total: progress.total })}
            </span>
          )}
        </div>
        <h1 className="mb-3 text-3xl font-bold text-slate-900">{kp.title[lang]}</h1>
        <p className="mb-4 leading-7 text-slate-600">{kp.summary[lang]}</p>
        {syllabusTags.length > 0 && (
          <div className="flex flex-wrap gap-2" data-testid="syllabus-tags">
            {syllabusTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 理论区 */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">
          {t('kp.theory')}
        </h2>
        <TheorySection blocks={kp.theory[lang]} />
      </section>

      {kp.simulation && (
        <>
          {/* 公式代入 */}
          {kp.simulation.liveFormulas && kp.simulation.liveFormulas.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">
                {t('kp.formulas')}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {kp.simulation.liveFormulas.map((lf) => (
                  <div key={lf.id} className="rounded-lg bg-slate-50 px-4 py-2">
                    <Formula latex={lf.latex} block />
                    <div className="text-center text-sm text-slate-500">↓</div>
                    <Formula latex={lf.substitute(params)} block />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 参数面板 + 仿真画布 */}
          <section className="mb-6">
            <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">
              {t('kp.simulation')}
            </h2>
            <div className="grid gap-6 md:grid-cols-[280px_1fr]">
              <div className="rounded-lg bg-slate-50 p-4">
                <h3 className="mb-3 text-sm font-semibold text-slate-700">{t('kp.params')}</h3>
                <ParamPanel defs={kp.simulation.params} values={params} lang={lang} onChange={handleParamChange} />
              </div>
              <SimulationCanvas rendererId={kp.simulation.renderer} params={params} />
            </div>
          </section>

          {/* 生活预设 */}
          {kp.presets && kp.presets.length > 0 && (
            <section className="mb-10">
              <h3 className="mb-3 text-sm font-semibold text-slate-700">{t('kp.presets')}</h3>
              <PresetBar presets={kp.presets} lang={lang} onApply={(p) => setParams((prev) => ({ ...prev, ...p }))} />
            </section>
          )}
        </>
      )}

      {/* 小测 */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">
          {t('kp.quiz')}
        </h2>
        <QuizSection kpId={kp.id} items={kp.quiz} lang={lang} />
      </section>
    </article>
  );
}
