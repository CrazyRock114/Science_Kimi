import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { KnowledgePoint, Lang } from '../content/types';
import { isCompleted } from '../lib/progress';

const subjectColor: Record<KnowledgePoint['subject'], string> = {
  physics: 'border-l-physics',
  chemistry: 'border-l-chemistry',
  biology: 'border-l-biology',
};

interface KnowledgePointCardProps {
  kp: KnowledgePoint;
  lang: Lang;
}

/** 知识点卡片：双语标题、摘要、考纲标签、完成状态 */
export function KnowledgePointCard({ kp, lang }: KnowledgePointCardProps) {
  const { t } = useTranslation();
  const completed = isCompleted(kp.id);
  return (
    <Link
      to={`/${lang}/${kp.subject}/${kp.id}`}
      className={`block rounded-lg border border-slate-200 border-l-4 bg-white p-4 transition hover:shadow-md ${subjectColor[kp.subject]}`}
    >
      <div className="mb-1 flex items-center justify-between gap-2">
        <h3 className="font-semibold text-slate-900">{kp.title[lang]}</h3>
        {completed && (
          <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
            ✓ {t('progress.completed')}
          </span>
        )}
      </div>
      <p className="mb-2 line-clamp-2 text-sm leading-6 text-slate-600">{kp.summary[lang]}</p>
      <div className="flex flex-wrap gap-1.5">
        {(kp.syllabus.igcse ?? []).map((ref) => (
          <span key={ref} className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
            IGCSE {ref}
          </span>
        ))}
        {(kp.syllabus.pep ?? []).map((ref) => (
          <span key={ref} className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
            {ref.split('/')[0]}
          </span>
        ))}
      </div>
    </Link>
  );
}
