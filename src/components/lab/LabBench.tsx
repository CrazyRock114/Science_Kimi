// 2D 虚拟实验台（本项目原创实现，SVG）：左侧试剂架 → 中央烧杯 →
// 加入 ≥2 种试剂后调用 chem-engine 的 react()，按 ReactionResult 呈现
// 气泡上升 / 沉淀沉降 / 液体变色 / 热效应图标，并显示方程式与现象描述。
import { useState, type CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import type { LabExperiment } from '../../content/lab';
import type { Lang } from '../../content/types';
import { react, type ReactionResult } from '../../chem-engine/engine';
import {
  resolveSubstance,
  SOLUTION_COLORS,
  PRECIPITATE_COLORS,
} from '../../chem-engine/reagents';
import { TutorPanel } from '../ai/TutorPanel';

/** 无色液体的默认颜色（近似水的浅蓝） */
const WATER_COLOR = '#dbeafe';

/** 混合前液体颜色：取第一种有颜色记录的试剂，否则为水色 */
function mixtureColor(formulas: string[]): string {
  for (const f of formulas) {
    const c = SOLUTION_COLORS[f];
    if (c) return c;
  }
  return WATER_COLOR;
}

/** 反应后液体颜色：变色时优先取产物的颜色记录 */
function reactedColor(result: ReactionResult, fallback: string): string {
  for (const p of result.products) {
    const c = SOLUTION_COLORS[p.formula];
    if (c) return c;
  }
  return result.colorChange ? '#e2e8f0' : fallback;
}

/** 沉淀颜色：按产物化学式查表，默认白色 */
function precipitateColor(result: ReactionResult): string {
  for (const p of result.products) {
    const c = PRECIPITATE_COLORS[p.formula];
    if (c) return c;
  }
  return '#f1f5f9';
}

// 烧杯几何（viewBox 0 0 320 300）
const INNER = { x: 96, y: 36, width: 128, bottom: 262 };

interface LabBenchProps {
  experiment: LabExperiment;
  lang: Lang;
}

/** 2D 虚拟实验台主组件（懒加载） */
export default function LabBench({ experiment, lang }: LabBenchProps) {
  const { t } = useTranslation();
  // 已加入烧杯的试剂（reagents 数组下标，每种试剂只加一次）
  const [added, setAdded] = useState<number[]>([]);

  const substances = added.map((i) => resolveSubstance(experiment.reagents.zh[i]));
  const result = substances.length >= 2 ? react(substances) : null;

  const fill = Math.min(0.25 + 0.15 * added.length, 0.85);
  const liquidTop = INNER.bottom - fill * (INNER.bottom - INNER.y - 4);
  const baseColor = mixtureColor(substances.map((s) => s.formula));
  const liquidColor = result ? reactedColor(result, baseColor) : baseColor;
  const precipColor = result ? precipitateColor(result) : '#f1f5f9';
  // 关键：按当前混合组合重置动画
  const mixKey = added.join(',');

  const bubbleVars = {
    '--lab-rise': `${INNER.bottom - liquidTop - 10}px`,
  } as CSSProperties;
  const dropDistance = INNER.bottom - liquidTop - 14;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
      {/* 动画关键帧（仅本组件使用） */}
      <style>{`
        @keyframes lab-bubble-rise {
          from { transform: translateY(0); opacity: 0.9; }
          to { transform: translateY(calc(-1 * var(--lab-rise, 120px))); opacity: 0; }
        }
        @keyframes lab-precip-fall {
          from { transform: translateY(0); opacity: 0.95; }
          to { transform: translateY(var(--lab-drop, 100px)); opacity: 0.95; }
        }
        @keyframes lab-fade-in { from { opacity: 0; } to { opacity: 1; } }
        .lab-bubble { animation: lab-bubble-rise linear infinite; }
        .lab-precip { animation: lab-precip-fall ease-in forwards; }
        .lab-fade-in { animation: lab-fade-in 0.8s ease both; }
      `}</style>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* 左：试剂架 */}
        <div className="w-full shrink-0 lg:w-52">
          <h3 className="mb-1 text-sm font-semibold text-slate-900">{t('lab.reagents')}</h3>
          <p className="mb-3 text-xs leading-5 text-slate-500">{t('lab.addHint')}</p>
          <div className="flex flex-col gap-2">
            {experiment.reagents.zh.map((zhName, i) => {
              const isAdded = added.includes(i);
              const formula = resolveSubstance(zhName).formula;
              return (
                <button
                  key={zhName}
                  type="button"
                  disabled={isAdded}
                  onClick={() => setAdded((prev) => (prev.includes(i) ? prev : [...prev, i]))}
                  className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${
                    isAdded
                      ? 'cursor-default border-slate-200 bg-slate-100 text-slate-400'
                      : 'border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  <span>{experiment.reagents[lang][i]}</span>
                  <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
                    {isAdded ? '✓' : formula}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 中：烧杯 */}
        <div className="flex shrink-0 flex-col items-center">
          <svg
            viewBox="0 0 320 300"
            className="h-72 w-auto max-w-full"
            role="img"
            aria-label={experiment.title[lang]}
          >
            <defs>
              <clipPath id="lab-beaker-clip">
                <rect x={INNER.x} y={INNER.y} width={INNER.width} height={INNER.bottom - INNER.y} rx="10" />
              </clipPath>
            </defs>

            {/* 液体（空烧杯不渲染，与 emptyBeaker 文案一致） */}
            <g clipPath="url(#lab-beaker-clip)">
              {added.length > 0 && (
                <rect
                  x={INNER.x}
                  y={liquidTop}
                  width={INNER.width}
                  height={INNER.bottom - liquidTop}
                  fill={liquidColor}
                  opacity={0.85}
                  style={{ transition: 'fill 0.9s ease, y 0.5s ease, height 0.5s ease' }}
                />
              )}
              {/* 气泡（产气时） */}
              {result?.producesGas &&
                Array.from({ length: 9 }, (_, i) => (
                  <circle
                    key={`b-${mixKey}-${i}`}
                    className="lab-bubble"
                    cx={INNER.x + 14 + ((i * 29) % (INNER.width - 28))}
                    cy={INNER.bottom - 6 - (i % 3) * 4}
                    r={2.5 + (i % 3)}
                    fill="#ffffff"
                    opacity={0.9}
                    style={{
                      ...bubbleVars,
                      animationDuration: `${1.4 + (i % 5) * 0.3}s`,
                      animationDelay: `${i * 0.22}s`,
                    }}
                  />
                ))}
              {/* 沉淀颗粒（产沉淀时） */}
              {result?.producesPrecipitate &&
                Array.from({ length: 14 }, (_, i) => (
                  <circle
                    key={`p-${mixKey}-${i}`}
                    className="lab-precip"
                    cx={INNER.x + 10 + ((i * 19) % (INNER.width - 20))}
                    cy={liquidTop + 8 + (i % 4) * 6}
                    r={2 + (i % 2)}
                    fill={precipColor}
                    stroke="#64748b"
                    strokeWidth={0.4}
                    style={
                      {
                        '--lab-drop': `${dropDistance - (i % 4) * 6}px`,
                        animationDuration: `${1.1 + (i % 4) * 0.25}s`,
                        animationDelay: `${i * 0.12}s`,
                      } as CSSProperties
                    }
                  />
                ))}
              {/* 沉积层 */}
              {result?.producesPrecipitate && (
                <ellipse
                  key={`pile-${mixKey}`}
                  className="lab-fade-in"
                  cx={INNER.x + INNER.width / 2}
                  cy={INNER.bottom - 4}
                  rx={INNER.width / 2 - 8}
                  ry={7}
                  fill={precipColor}
                  stroke="#64748b"
                  strokeWidth={0.5}
                  style={{ animationDelay: '1.5s' }}
                />
              )}
            </g>

            {/* 烧杯壁 */}
            <path
              d={`M ${INNER.x - 6} 30 L ${INNER.x} 30 L ${INNER.x} ${INNER.bottom - 14} Q ${INNER.x} ${INNER.bottom + 6} ${INNER.x + 20} ${INNER.bottom + 6} L ${INNER.x + INNER.width - 20} ${INNER.bottom + 6} Q ${INNER.x + INNER.width} ${INNER.bottom + 6} ${INNER.x + INNER.width} ${INNER.bottom - 14} L ${INNER.x + INNER.width} 30 L ${INNER.x + INNER.width + 6} 30`}
              fill="none"
              stroke="#94a3b8"
              strokeWidth={3}
              strokeLinecap="round"
            />

            {/* 热效应温度计 */}
            {result && result.thermal !== 'none' && (
              <g key={`th-${mixKey}`} className="lab-fade-in">
                <rect x={268} y={150} width={10} height={70} rx={5} fill="#f8fafc" stroke="#94a3b8" strokeWidth={1.5} />
                <circle cx={273} cy={228} r={12} fill={result.thermal === 'exothermic' ? '#ef4444' : '#3b82f6'} />
                <rect
                  x={270.5}
                  y={result.thermal === 'exothermic' ? 158 : 190}
                  width={5}
                  height={result.thermal === 'exothermic' ? 64 : 32}
                  fill={result.thermal === 'exothermic' ? '#ef4444' : '#3b82f6'}
                />
                <text x={273} y={140} textAnchor="middle" fontSize={16} fill={result.thermal === 'exothermic' ? '#ef4444' : '#3b82f6'}>
                  {result.thermal === 'exothermic' ? '▲' : '▼'}
                </text>
              </g>
            )}
          </svg>
          {result && result.thermal !== 'none' && (
            <span
              className={`mt-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                result.thermal === 'exothermic' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
              }`}
            >
              {t(result.thermal === 'exothermic' ? 'lab.thermalExothermic' : 'lab.thermalEndothermic')}
            </span>
          )}
        </div>

        {/* 右：结果面板 */}
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-sm font-semibold text-slate-900">{t('lab.inBeaker')}</h3>
          {added.length === 0 ? (
            <p className="mb-4 text-sm text-slate-400">{t('lab.emptyBeaker')}</p>
          ) : (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {added.map((i) => (
                <span key={i} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700">
                  {experiment.reagents[lang][i]}
                </span>
              ))}
            </div>
          )}

          {result && (
            <div className="space-y-3" key={`panel-${mixKey}`}>
              {result.equation && (
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {t('lab.equation')}
                  </h4>
                  <p className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm text-slate-800">
                    {result.equation}
                  </p>
                </div>
              )}
              {result.description && (
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {t('lab.phenomena')}
                  </h4>
                  <p className="rounded-lg bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700">
                    {result.description}
                  </p>
                  {/* 引擎现象描述目前只有中文——只在英文界面提示 */}
                  {lang === 'en' && (
                    <p className="mt-1 text-xs italic text-slate-400">{t('lab.engineNote')}</p>
                  )}
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={() => setAdded([])}
            disabled={added.length === 0}
            className="mt-5 rounded-lg border border-slate-300 px-4 py-1.5 text-sm text-slate-600 transition hover:border-red-300 hover:text-red-600 disabled:cursor-default disabled:opacity-40"
          >
            {t('lab.reset')}
          </button>
        </div>
      </div>

      {/* AI 助教（上下文：实验标题/描述/目标 + 已加入试剂） */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        <TutorPanel
          context={{
            kpTitle: experiment.title[lang],
            kpSummary: experiment.description[lang],
            kpTheory: experiment.objectives[lang].map((o) => `- ${o}`).join('\n'),
            gradeTier: 'both',
            params:
              added.length > 0
                ? { addedReagents: added.map((i) => experiment.reagents[lang][i]).join(' + ') }
                : undefined,
          }}
          lang={lang}
        />
      </div>
    </div>
  );
}
