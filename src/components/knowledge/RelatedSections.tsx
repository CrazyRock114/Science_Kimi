import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { KnowledgePointMeta, Lang } from '../../content/types';
import type { LabExperiment } from '../../content/lab/types';

interface RelatedSectionsProps {
  lang: Lang;
  /** 相关知识点（链接到知识点页）；空数组/缺省不渲染该区块 */
  lessons?: KnowledgePointMeta[];
  /** lessons 区块标题（知识点页默认"相关课程"，实验台页传"相关知识点"） */
  lessonsHeading?: string;
  /** 相关实验（链接到实验台页）；空数组/缺省不渲染该区块 */
  experiments?: LabExperiment[];
}

/** 页底互链区块：相关课程 / 相关实验（两者都无数据时整体不渲染） */
export function RelatedSections({ lang, lessons = [], experiments = [], lessonsHeading }: RelatedSectionsProps) {
  const { t } = useTranslation();
  if (lessons.length === 0 && experiments.length === 0) return null;
  const linkClass = 'text-sm text-blue-600 underline-offset-2 transition hover:text-blue-800 hover:underline';
  return (
    <section className="mb-10" data-testid="related-sections">
      {lessons.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">
            {lessonsHeading ?? t('kp.relatedLessons')}
          </h2>
          <ul className="list-inside list-disc space-y-1.5">
            {lessons.map((meta) => (
              <li key={meta.id}>
                <Link to={`/${lang}/${meta.subject}/${meta.id}`} className={linkClass}>
                  {meta.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {experiments.length > 0 && (
        <div>
          <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">
            {t('kp.relatedExperiments')}
          </h2>
          <ul className="list-inside list-disc space-y-1.5">
            {experiments.map((exp) => (
              <li key={exp.slug}>
                <Link to={`/${lang}/chemistry/lab/${exp.slug}`} className={linkClass}>
                  {exp.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
