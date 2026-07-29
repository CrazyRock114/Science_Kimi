import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { knowledgePoints } from '../content/knowledge';
import { igcseSyllabuses } from '../content/syllabus/igcse';
import { pepBooks } from '../content/syllabus/pep';
import type { KnowledgePoint, Lang, Subject } from '../content/types';
import { KnowledgePointCard } from '../components/KnowledgePointCard';

type GradeTab = 'all' | 'middle' | 'senior';

const subjectOrder: Subject[] = ['physics', 'chemistry', 'biology'];
const subjectTheme: Record<Subject, { card: string; icon: string }> = {
  physics: { card: 'bg-physics-light text-physics', icon: '🚀' },
  chemistry: { card: 'bg-chemistry-light text-chemistry', icon: '🧪' },
  biology: { card: 'bg-biology-light text-biology', icon: '🧬' },
};

function matchesGradeTab(kp: KnowledgePoint, tab: GradeTab): boolean {
  if (tab === 'all') return true;
  return kp.gradeTier === tab || kp.gradeTier === 'both';
}

function matchesSearch(kp: KnowledgePoint, lang: Lang, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [kp.title[lang], kp.summary[lang], ...kp.keywords[lang]]
    .join(' ')
    .toLowerCase();
  return haystack.includes(q);
}

function matchesIgcse(kp: KnowledgePoint, ref: string): boolean {
  if (!ref) return true;
  return (kp.syllabus.igcse ?? []).some((r) => r === ref || r.startsWith(`${ref}.`));
}

function matchesPep(kp: KnowledgePoint, bookId: string): boolean {
  if (!bookId) return true;
  return (kp.syllabus.pep ?? []).some((r) => r.startsWith(`${bookId}/`));
}

/** 门户首页：学科卡片 + 学段 Tab + 关键词搜索 + 考纲/教材筛选 */
export function HomePage() {
  const { t } = useTranslation();
  const params = useParams<{ lang: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';

  const [gradeTab, setGradeTab] = useState<GradeTab>('all');
  const [query, setQuery] = useState('');
  const [igcseRef, setIgcseRef] = useState('');
  const [pepBookId, setPepBookId] = useState('');

  const filtered = useMemo(
    () =>
      knowledgePoints.filter(
        (kp) =>
          matchesGradeTab(kp, gradeTab) &&
          matchesSearch(kp, lang, query) &&
          matchesIgcse(kp, igcseRef) &&
          matchesPep(kp, pepBookId),
      ),
    [gradeTab, query, igcseRef, pepBookId, lang],
  );

  const gradeTabs: GradeTab[] = ['all', 'middle', 'senior'];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* 站点简介 */}
      <section className="mb-10 text-center">
        <h1 className="mb-3 text-4xl font-bold text-slate-900">{t('site.name')}</h1>
        <p className="mb-2 text-lg text-slate-600">{t('site.tagline')}</p>
        <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500">{t('site.intro')}</p>
      </section>

      {/* 学科卡片 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">{t('home.subjectsTitle')}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {subjectOrder.map((subject) => {
            const theme = subjectTheme[subject];
            const count = knowledgePoints.filter((kp) => kp.subject === subject).length;
            return (
              <Link
                key={subject}
                to={`/${lang}/${subject}`}
                className={`rounded-xl p-5 transition hover:shadow-md ${theme.card}`}
              >
                <div className="mb-2 text-3xl" aria-hidden>
                  {theme.icon}
                </div>
                <h3 className="mb-1 text-lg font-bold">{t(`subjects.${subject}.name`)}</h3>
                <p className="mb-2 text-sm opacity-80">{t(`subjects.${subject}.desc`)}</p>
                <p className="text-xs opacity-60">{t('home.resultCount', { count })}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 筛选区 */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">{t('home.knowledgePointsTitle')}</h2>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {/* 学段 Tab */}
          <div className="flex rounded-lg border border-slate-200 bg-white p-0.5" role="tablist">
            {gradeTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={gradeTab === tab}
                onClick={() => setGradeTab(tab)}
                className={`rounded-md px-4 py-1.5 text-sm transition ${
                  gradeTab === tab ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {t(`gradeTier.${tab}`)}
              </button>
            ))}
          </div>
          {/* 搜索 */}
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('home.searchPlaceholder')}
            className="min-w-56 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
          {/* IGCSE 考纲筛选 */}
          <select
            value={igcseRef}
            onChange={(e) => setIgcseRef(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            aria-label={t('home.filterIgcse')}
          >
            <option value="">{t('home.filterIgcse')}：{t('home.filterAll')}</option>
            {igcseSyllabuses.map((syllabus) =>
              syllabus.topics.flatMap((topic) => [
                <option key={`${syllabus.syllabusCode}/${topic.code}`} value={`${syllabus.syllabusCode}/${topic.code}`}>
                  {syllabus.syllabusCode} {topic.code} {topic.name[lang]}
                </option>,
                ...topic.subtopics.map((st) => (
                  <option key={`${syllabus.syllabusCode}/${st.code}`} value={`${syllabus.syllabusCode}/${st.code}`}>
                    {syllabus.syllabusCode} {st.code} {st.name[lang]}
                  </option>
                )),
              ]),
            )}
          </select>
          {/* 人教版教材筛选 */}
          <select
            value={pepBookId}
            onChange={(e) => setPepBookId(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            aria-label={t('home.filterPep')}
          >
            <option value="">{t('home.filterPep')}：{t('home.filterAll')}</option>
            {pepBooks.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title[lang]}
              </option>
            ))}
          </select>
        </div>

        <p className="mb-3 text-sm text-slate-500">{t('home.resultCount', { count: filtered.length })}</p>
        {filtered.length === 0 ? (
          <p className="rounded-lg border border-dashed border-slate-300 py-10 text-center text-sm text-slate-400">
            {t('home.empty')}
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((kp) => (
              <KnowledgePointCard key={kp.id} kp={kp} lang={lang} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
