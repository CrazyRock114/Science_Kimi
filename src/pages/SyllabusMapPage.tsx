import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { knowledgePointMetas } from '../content/knowledge';
import { getIgcseSyllabus, type IgcseSubtopic } from '../content/syllabus/igcse';
import { igcseStatements, type IgcseStatement } from '../content/syllabus/igcse-statements';
import {
  buildIgcseCoverageMap,
  getStatementStatus,
  summarizeCoverage,
  type StatementCoverageStatus,
} from '../content/syllabus/igcse-coverage';
import type { Lang } from '../content/types';

// knowledgePointMetas 是构建期常量，覆盖映射全量计算一次即可（944 条 statement，毫秒级）
const coverageMap = buildIgcseCoverageMap(knowledgePointMetas);

interface SubtopicNode {
  subtopic: IgcseSubtopic;
  statements: IgcseStatement[];
}

function statusIcon(status: StatementCoverageStatus): { glyph: string; className: string } {
  switch (status) {
    case 'taught':
      return { glyph: '●', className: 'text-emerald-500' };
    case 'related':
      return { glyph: '◐', className: 'text-amber-500/70' };
    default:
      return { glyph: '○', className: 'text-slate-300' };
  }
}

function CoverageBar({
  label,
  covered,
  total,
  taught,
  barClass,
}: {
  label: string;
  covered: number;
  total: number;
  taught: number;
  barClass: string;
}) {
  const { t } = useTranslation();
  const pct = total === 0 ? 0 : Math.round((covered / total) * 100);
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-2 text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="text-slate-500">
          <span className="font-semibold text-slate-800">{pct}%</span>{' '}
          {t('syllabus.coveredOf', { covered, total })}
        </span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className={`h-full rounded-full ${barClass}`} style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-1 text-xs text-slate-400">{t('syllabus.taughtOf', { count: taught })}</p>
    </div>
  );
}

function StatementRow({
  code,
  statement,
  lang,
  expanded,
  onToggle,
}: {
  code: string;
  statement: IgcseStatement;
  lang: Lang;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { t } = useTranslation();
  const entry = coverageMap.get(statement.id);
  const status = getStatementStatus(coverageMap, statement.id);
  const icon = statusIcon(status);
  const statusLabel = t(
    status === 'taught'
      ? 'syllabus.legendTaught'
      : status === 'related'
        ? 'syllabus.legendRelated'
        : 'syllabus.legendNone',
  );
  const shortId = statement.id.slice(code.length + 1);
  const taught = status === 'taught';

  return (
    <li className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={taught ? onToggle : undefined}
        disabled={!taught}
        aria-expanded={taught ? expanded : undefined}
        className={`flex w-full items-start gap-2 px-3 py-2 text-left text-sm ${
          taught ? 'transition hover:bg-slate-50' : 'cursor-default'
        }`}
      >
        <span aria-hidden className={`mt-0.5 w-4 shrink-0 text-center ${icon.className}`}>
          {icon.glyph}
        </span>
        <span className="sr-only">{statusLabel}</span>
        <span className="w-16 shrink-0 font-mono text-xs leading-5 text-slate-400">{shortId}</span>
        <span
          className={`mt-0.5 shrink-0 rounded px-1.5 text-xs font-semibold leading-5 ${
            statement.tier === 'core'
              ? 'bg-slate-100 text-slate-600'
              : 'bg-violet-100 text-violet-700'
          }`}
        >
          {statement.tier === 'core' ? 'C' : 'S'}
        </span>
        <span className="flex-1 leading-5 text-slate-700">{statement.label[lang]}</span>
        {taught && (
          <span aria-hidden className="shrink-0 text-xs text-slate-300">
            {expanded ? '▾' : '▸'}
          </span>
        )}
      </button>
      {taught && expanded && entry && (
        <div className="border-t border-dashed border-slate-100 bg-slate-50/60 px-3 py-2 pl-10">
          <p className="mb-1 text-xs font-medium text-slate-500">{t('syllabus.taughtBy')}</p>
          <ul className="space-y-1">
            {entry.taughtBy.map((meta) => (
              <li key={meta.id}>
                <Link
                  to={`/${lang}/${meta.subject}/${meta.id}`}
                  className="text-sm text-blue-600 underline-offset-2 transition hover:text-blue-800 hover:underline"
                >
                  {meta.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

/** IGCSE 考纲地图页：topic → subtopic → statement 逐级展开，带覆盖率总览 */
export default function SyllabusMapPage() {
  const { t } = useTranslation();
  const params = useParams<{ lang: string; code: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';
  const syllabus = getIgcseSyllabus(params.code ?? '');

  // topic → subtopic → statements 分组（statement id = "code/subtopic编号.n"）
  const topicNodes = useMemo(() => {
    if (!syllabus) return [];
    const bySubtopic = new Map<string, IgcseStatement[]>();
    for (const s of igcseStatements) {
      if (!s.id.startsWith(`${syllabus.syllabusCode}/`)) continue;
      const subtopicCode = s.id.slice(syllabus.syllabusCode.length + 1).split('.').slice(0, -1).join('.');
      const list = bySubtopic.get(subtopicCode);
      if (list) list.push(s);
      else bySubtopic.set(subtopicCode, [s]);
    }
    return syllabus.topics.map((topic) => ({
      topic,
      subtopics: topic.subtopics.map(
        (subtopic): SubtopicNode => ({
          subtopic,
          statements: bySubtopic.get(subtopic.code) ?? [],
        }),
      ),
    }));
  }, [syllabus]);

  const [openTopics, setOpenTopics] = useState<ReadonlySet<string>>(new Set());
  const [expandedStatement, setExpandedStatement] = useState<string | null>(null);

  if (!syllabus) {
    return <Navigate to={`/${lang}`} replace />;
  }

  const statements = igcseStatements.filter((s) =>
    s.id.startsWith(`${syllabus.syllabusCode}/`),
  );
  const summary = summarizeCoverage(statements, coverageMap);
  const allOpen = openTopics.size === topicNodes.length;

  const toggleTopic = (topicCode: string) => {
    setOpenTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicCode)) next.delete(topicCode);
      else next.add(topicCode);
      return next;
    });
  };

  const countCovered = (list: IgcseStatement[]) =>
    list.filter((s) => getStatementStatus(coverageMap, s.id) !== 'none').length;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="mb-2 text-sm">
        <Link to={`/${lang}/${syllabus.subject}`} className="text-blue-600 hover:underline">
          ← {t('syllabus.backToSubject')}: {t(`subjects.${syllabus.subject}.name`)}
        </Link>
      </p>
      <h1 className="mb-1 text-3xl font-bold text-slate-900">{syllabus.title[lang]}</h1>
      <p className="mb-6 text-sm text-slate-500">
        {t('syllabus.statementCount', { count: statements.length })}
      </p>

      {/* 覆盖率总览 */}
      <section className="mb-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">{t('syllabus.coverageTitle')}</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          <CoverageBar
            label={t('syllabus.overall')}
            covered={summary.all.covered}
            total={summary.all.total}
            taught={summary.all.taught}
            barClass="bg-blue-600"
          />
          <CoverageBar
            label={t('exam.tier.core')}
            covered={summary.core.covered}
            total={summary.core.total}
            taught={summary.core.taught}
            barClass="bg-emerald-500"
          />
          <CoverageBar
            label={t('exam.tier.supplement')}
            covered={summary.supplement.covered}
            total={summary.supplement.total}
            taught={summary.supplement.taught}
            barClass="bg-violet-500"
          />
        </div>
        {/* 图例 */}
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-slate-100 pt-3 text-xs text-slate-500">
          {(['taught', 'related', 'none'] as const).map((status) => {
            const icon = statusIcon(status);
            return (
              <li key={status} className="flex items-center gap-1.5">
                <span aria-hidden className={icon.className}>
                  {icon.glyph}
                </span>
                {t(
                  status === 'taught'
                    ? 'syllabus.legendTaught'
                    : status === 'related'
                      ? 'syllabus.legendRelated'
                      : 'syllabus.legendNone',
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* 展开 / 收起全部 */}
      <div className="mb-3 flex justify-end">
        <button
          type="button"
          onClick={() =>
            setOpenTopics(allOpen ? new Set() : new Set(topicNodes.map((n) => n.topic.code)))
          }
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-50"
        >
          {allOpen ? t('syllabus.collapseAll') : t('syllabus.expandAll')}
        </button>
      </div>

      {/* topic 分组（默认收起，展开后才渲染 statement 列表以控制首屏体量） */}
      <div className="space-y-3">
        {topicNodes.map(({ topic, subtopics }) => {
          const topicStatements = subtopics.flatMap((st) => st.statements);
          const open = openTopics.has(topic.code);
          return (
            <section key={topic.code} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => toggleTopic(topic.code)}
                aria-expanded={open}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-slate-50"
              >
                <span aria-hidden className="text-slate-400">
                  {open ? '▾' : '▸'}
                </span>
                <span className="shrink-0 font-mono text-sm text-slate-400">{topic.code}</span>
                <span className="flex-1 font-semibold text-slate-800">{topic.name[lang]}</span>
                <span className="shrink-0 text-xs text-slate-400">
                  {t('syllabus.subtopicCovered', {
                    covered: countCovered(topicStatements),
                    total: topicStatements.length,
                  })}
                </span>
              </button>
              {open && (
                <div className="border-t border-slate-100">
                  {subtopics.map(({ subtopic, statements: subStatements }) => (
                    <div key={subtopic.code} className="border-b border-slate-100 last:border-b-0">
                      <header className="flex items-baseline gap-2 bg-slate-50/70 px-4 py-2">
                        <span className="shrink-0 font-mono text-xs text-slate-400">
                          {subtopic.code}
                        </span>
                        <h3 className="flex-1 text-sm font-medium text-slate-700">
                          {subtopic.name[lang]}
                        </h3>
                        <span className="shrink-0 text-xs text-slate-400">
                          {t('syllabus.subtopicCovered', {
                            covered: countCovered(subStatements),
                            total: subStatements.length,
                          })}
                        </span>
                      </header>
                      <ul>
                        {subStatements.map((s) => (
                          <StatementRow
                            key={s.id}
                            code={syllabus.syllabusCode}
                            statement={s}
                            lang={lang}
                            expanded={expandedStatement === s.id}
                            onToggle={() =>
                              setExpandedStatement((prev) => (prev === s.id ? null : s.id))
                            }
                          />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
