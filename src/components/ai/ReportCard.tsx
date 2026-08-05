import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang } from '../../content/types';
import { knowledgePointMetas } from '../../content/knowledge';
import { getProgress } from '../../lib/progress';
import { generateReport, isAiConfigured, type ReportRecord } from '../../lib/ai';

/** 极简 Markdown 渲染：##/### 标题、- 列表、**加粗**、普通段落（不引第三方依赖） */
function renderInline(text: string): (string | JSX.Element)[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

function SimpleMarkdown({ markdown }: { markdown: string }) {
  const blocks: JSX.Element[] = [];
  let listItems: string[] = [];
  const flushList = (key: string) => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={key} className="list-inside list-disc space-y-1">
        {listItems.map((item, i) => (
          <li key={i}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };
  markdown.split('\n').forEach((rawLine, i) => {
    const line = rawLine.trim();
    if (/^#{1,3}\s/.test(line)) {
      flushList(`l${i}`);
      blocks.push(
        <h3 key={i} className="mt-3 text-sm font-semibold text-slate-900">
          {renderInline(line.replace(/^#{1,3}\s+/, ''))}
        </h3>,
      );
    } else if (/^[-*]\s+/.test(line)) {
      listItems.push(line.replace(/^[-*]\s+/, ''));
    } else if (line) {
      flushList(`l${i}`);
      blocks.push(
        <p key={i} className="leading-6">
          {renderInline(line)}
        </p>,
      );
    }
  });
  flushList('end');
  return <div className="space-y-1.5 text-sm text-slate-700">{blocks}</div>;
}

interface ReportCardProps {
  lang: Lang;
}

/**
 * 首页"我的学习报告"入口：
 * - 已配置 AI：读取 localStorage 进度 → 调 /api/report → Markdown 渲染。
 * - 未配置 AI：降级展示本地统计（完成数 / 平均得分率）。
 */
export function ReportCard({ lang }: ReportCardProps) {
  const { t } = useTranslation();
  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 学习记录：知识点标题（当前语言）+ 最好成绩 + 完成度
  const records = useMemo<ReportRecord[]>(() => {
    const progress = getProgress();
    return knowledgePointMetas
      .filter((kp) => progress[kp.id]?.bestScore !== undefined || progress[kp.id]?.completed)
      .map((kp) => ({
        title: kp.title[lang],
        bestScore: progress[kp.id].bestScore,
        total: progress[kp.id].total,
        completed: progress[kp.id].completed === true,
      }));
  }, [lang]);

  const stats = useMemo(() => {
    const completed = records.filter((r) => r.completed).length;
    const scored = records.filter((r) => r.bestScore !== undefined && r.total);
    const average =
      scored.length > 0
        ? Math.round(
            (scored.reduce((sum, r) => sum + (r.bestScore ?? 0) / (r.total ?? 1), 0) /
              scored.length) *
              100,
          )
        : 0;
    return { completed, attempted: records.length, average };
  }, [records]);

  const configured = isAiConfigured();

  const handleGenerate = () => {
    setLoading(true);
    setError('');
    setReport('');
    generateReport(lang, records)
      .then(setReport)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : String(err)))
      .finally(() => setLoading(false));
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-3 text-xl font-semibold text-slate-900">{t('ai.reportTitle')}</h2>

      {records.length === 0 ? (
        <p className="text-sm text-slate-400">{t('ai.reportEmpty')}</p>
      ) : configured ? (
        <>
          <p className="mb-3 text-sm text-slate-500">
            {t('ai.reportCompletedCount', { count: stats.completed })}
            {' · '}
            {t('ai.reportAverage', { percent: stats.average })}
          </p>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
          >
            {loading ? t('ai.reportGenerating') : t('ai.reportGenerate')}
          </button>
          {error && (
            <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
              {t('ai.errorPrefix')}
              {error}
            </p>
          )}
          {report && (
            <div className="mt-4 rounded-lg bg-slate-50 p-4">
              <SimpleMarkdown markdown={report} />
            </div>
          )}
        </>
      ) : (
        <div className="text-sm text-slate-600">
          <h3 className="mb-2 text-sm font-semibold text-slate-900">{t('ai.reportLocalTitle')}</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>{t('ai.reportCompletedCount', { count: stats.completed })}</li>
            <li>{t('ai.reportAttemptedCount', { count: stats.attempted })}</li>
            <li>{t('ai.reportAverage', { percent: stats.average })}</li>
          </ul>
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
            {t('ai.notConfigured')} — {t('ai.reportAiHint')}
          </p>
        </div>
      )}
    </section>
  );
}
