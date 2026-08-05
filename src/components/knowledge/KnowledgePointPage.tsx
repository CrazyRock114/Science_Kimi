import { useMemo, useRef, useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import type { KnowledgePoint, Lang, NarrationAction, ParamValues } from '../../content/types';
import { resolveIgcseRef } from '../../content/syllabus/igcse';
import { resolvePepRef } from '../../content/syllabus/pep';
import { getKnowledgePointProgress } from '../../lib/progress';
import { dispatchNarrationAction } from '../../lib/narration';
import { Formula } from '../Formula';
import { TheorySection } from './TheorySection';
import { ParamPanel } from './ParamPanel';
import { PresetBar } from './PresetBar';
import { SimulationCanvas } from './SimulationCanvas';
import { QuizSection } from './QuizSection';
import { ExamPracticeSection } from './ExamPracticeSection';
import { NarrationPlayer } from './NarrationPlayer';
import { TutorPanel } from '../ai/TutorPanel';
import { theoryBlocksToText } from '../../lib/ai';
import type { MmxClockCommand } from '../../simulations/mmx/MmxStage';

// miniMax 基元舞台：仅转换课程（simulation.mmx）渲染时按需加载，单独分包
const MmxStage = lazy(() => import('../../simulations/mmx/MmxStage'));
// extras 交互模块（解剖探索器 / 流程图等）：仅含 extras 的转换课程用到，按需加载
const LessonExtras = lazy(() =>
  import('../lesson-extras/LessonExtras').then((m) => ({ default: m.LessonExtras })),
);

interface KnowledgePointPageProps {
  kp: KnowledgePoint;
  lang: Lang;
}

function initialParams(kp: KnowledgePoint): ParamValues {
  // mmx 仿真以完整 SimSpec 的参数表为准（含离散选项与画布拖拽/时钟驱动的隐藏参数）
  const mmxParams = kp.simulation?.mmx?.spec.params;
  if (mmxParams) {
    return Object.fromEntries(mmxParams.map((p) => [p.key, p.default]));
  }
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
  // mmx 动画时钟的外部控制指令（讲解 action 的 play/pause 驱动）
  const [clockCommand, setClockCommand] = useState<MmxClockCommand | undefined>(undefined);
  const clockNonceRef = useRef(0);
  const highlightTimerRef = useRef<number | null>(null);

  // mmx 模式下内核读数：喂给 ReadoutLiveFormula 的 substitute（公式实时数值代入）
  const mmx = kp.simulation?.mmx;
  const mmxReadouts = useMemo(
    () => (mmx ? mmx.kernel(params).readouts : undefined),
    [mmx, params],
  );

  // 讲解动作 → 仿真：setParams/reset 改参数 state；play/pause 控制 mmx 动画时钟
  // （原生仿真无受控时钟，忽略并记录）；highlight 按选择器短暂高亮页面元素。
  const handleNarrationAction = (action: NarrationAction) => {
    dispatchNarrationAction(action, {
      setParams: (patch) => setParams((prev) => ({ ...prev, ...patch })),
      resetParams: () => setParams(initialParams(kp)),
      play: () => {
        if (!kp.simulation?.mmx) {
          console.info(`[narration] play 已忽略：${kp.id} 为原生仿真，无受控时钟`);
          return;
        }
        clockNonceRef.current += 1;
        setClockCommand({ type: 'play', nonce: clockNonceRef.current });
      },
      pause: () => {
        if (!kp.simulation?.mmx) {
          console.info(`[narration] pause 已忽略：${kp.id} 为原生仿真，无受控时钟`);
          return;
        }
        clockNonceRef.current += 1;
        setClockCommand({ type: 'pause', nonce: clockNonceRef.current });
      },
      highlight: (target) => {
        const els = document.querySelectorAll(target);
        els.forEach((el) => el.classList.add('narration-highlight'));
        if (highlightTimerRef.current !== null) window.clearTimeout(highlightTimerRef.current);
        highlightTimerRef.current = window.setTimeout(() => {
          els.forEach((el) => el.classList.remove('narration-highlight'));
          highlightTimerRef.current = null;
        }, 1600);
      },
    });
  };

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
          {kp.tier && (
            <span className="rounded-full bg-indigo-50 px-3 py-0.5 text-xs font-medium text-indigo-700">
              IGCSE · {t(`exam.lessonTier.${kp.tier}`)}
            </span>
          )}
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

      {/* TTS 讲解播放器（仅有剧本数据时显示）；行剧本的 action 驱动仿真 */}
      {kp.narration && (
        <section className="mb-10">
          <NarrationPlayer kpId={kp.id} narration={kp.narration} lang={lang} onAction={handleNarrationAction} />
        </section>
      )}

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
                    {/* 手写知识点按参数代入；mmx 转换课程按内核读数代入 */}
                    <Formula
                      latex={
                        'substitute' in lf
                          ? lf.substitute(params)
                          : lf.substituteFromReadouts(mmxReadouts ?? {})
                      }
                      block
                    />
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
            {kp.simulation.mmx ? (
              // miniMax 基元仿真：MmxStage 整体接管（基元画布 + 参数面板 + 读数 +
              // 动画时钟），预设按钮仍由下方 PresetBar 渲染，参数 state 共用
              <Suspense
                fallback={
                  <div className="flex h-72 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-400">
                    Loading…
                  </div>
                }
              >
                <MmxStage
                  params={params}
                  mmx={kp.simulation.mmx}
                  onParamChange={handleParamChange}
                  clockCommand={clockCommand}
                />
              </Suspense>
            ) : (
              <div className="grid gap-6 md:grid-cols-[280px_1fr]">
                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-sm font-semibold text-slate-700">{t('kp.params')}</h3>
                  <ParamPanel defs={kp.simulation.params} values={params} lang={lang} onChange={handleParamChange} />
                </div>
                <SimulationCanvas rendererId={kp.simulation.renderer} params={params} />
              </div>
            )}
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

      {/* extras 交互模块（转换自 IGCSE_miniMax 的解剖/流程图等，源项目在仿真之后渲染） */}
      {kp.extras && kp.extras.length > 0 && (
        <section className="mb-10">
          <Suspense
            fallback={
              <div className="flex h-40 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-400">
                Loading…
              </div>
            }
          >
            <LessonExtras extras={kp.extras} />
          </Suspense>
        </section>
      )}

      {/* 小测（转换的 IGCSE 课程以真题演练代替，无小测时不渲染） */}
      {kp.quiz.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">
            {t('kp.quiz')}
          </h2>
          <QuizSection kpId={kp.id} items={kp.quiz} lang={lang} />
        </section>
      )}

      {/* 考试真题演练（英文题干 + mark scheme） */}
      {kp.examPractice && kp.examPractice.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">
            {t('kp.examPractice')}
          </h2>
          <ExamPracticeSection items={kp.examPractice} lang={lang} />
        </section>
      )}

      {/* AI 助教（可折叠；携带当前仿真参数作为上下文） */}
      <section className="mb-10">
        <TutorPanel
          context={{
            kpTitle: kp.title[lang],
            kpSummary: kp.summary[lang],
            kpTheory: theoryBlocksToText(kp.theory[lang]),
            gradeTier: kp.gradeTier,
            params,
          }}
          lang={lang}
        />
      </section>
    </article>
  );
}
