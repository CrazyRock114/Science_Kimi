import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExamQuestion, Lang } from '../../content/types';

interface ExamPracticeSectionProps {
  items: ExamQuestion[];
  lang: Lang;
}

/** 考试真题演练：英文题干 + command word/分值徽章；MCQ 可自测判分，结构化题可展开评分标准 */
export function ExamPracticeSection({ items, lang }: ExamPracticeSectionProps) {
  return (
    <div className="space-y-6">
      {items.map((q, idx) => (
        <ExamQuestionCard key={q.id} question={q} index={idx} lang={lang} />
      ))}
    </div>
  );
}

function ExamQuestionCard({
  question: q,
  index,
  lang,
}: {
  question: ExamQuestion;
  index: number;
  lang: Lang;
}) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [checked, setChecked] = useState(false);
  const [showScheme, setShowScheme] = useState(false);

  const isMcq = q.options !== undefined;
  const revealed = checked || showScheme;

  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
          {q.commandWord}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
          {t('exam.marks', { count: q.marks })}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">
          {t(`exam.tier.${q.tier}`)}
        </span>
      </div>

      {/* 题干为英文（考试语言，by design 不译） */}
      <p className="mb-3 font-medium text-slate-900" lang="en">
        {index + 1}. {q.stem}
      </p>

      {isMcq && (
        <div className="space-y-2" lang="en">
          {q.options!.map((option, optIdx) => {
            const isChosen = selected === optIdx;
            const isAnswer = q.answerIndex === optIdx;
            let optionClass = 'border-slate-200 hover:border-blue-300 hover:bg-blue-50';
            if (checked && isAnswer) {
              optionClass = 'border-green-400 bg-green-50';
            } else if (checked && isChosen && !isAnswer) {
              optionClass = 'border-red-400 bg-red-50';
            } else if (isChosen) {
              optionClass = 'border-blue-400 bg-blue-50';
            }
            return (
              <label
                key={optIdx}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition ${optionClass}`}
              >
                <input
                  type="radio"
                  name={`exam-${q.id}`}
                  disabled={checked}
                  checked={isChosen}
                  onChange={() => setSelected(optIdx)}
                  className="accent-blue-600"
                />
                <span className="text-slate-700">{option}</span>
              </label>
            );
          })}
        </div>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-3">
        {isMcq && !checked && (
          <button
            type="button"
            disabled={selected === undefined}
            onClick={() => setChecked(true)}
            className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {t('exam.check')}
          </button>
        )}
        <button
          type="button"
          onClick={() => setShowScheme((v) => !v)}
          className="rounded-lg border border-slate-300 px-4 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50"
        >
          {showScheme ? t('exam.hideMarkScheme') : t('exam.showMarkScheme')}
        </button>
      </div>

      {checked && (
        <p
          className={`mt-3 text-sm font-medium ${
            selected === q.answerIndex ? 'text-green-700' : 'text-red-700'
          }`}
        >
          {selected === q.answerIndex ? t('quiz.correct') : t('quiz.wrong')}
        </p>
      )}

      {revealed && (
        <div className="mt-3 rounded-md bg-slate-50 px-3 py-2 text-sm">
          <p className="mb-1 font-medium text-slate-700">{t('exam.markScheme')}</p>
          <ul className="list-disc space-y-1 pl-5" lang="en">
            {q.markScheme.map((mp, i) => (
              <li key={i} className="text-slate-600">
                <span>{mp.text}</span>
                <span className="ml-1 text-slate-400">({t('exam.marks', { count: mp.marks })})</span>
                {mp.alternatives && mp.alternatives.length > 0 && (
                  <span className="ml-1 text-slate-400">
                    — {t('exam.alsoAccept')}: {mp.alternatives.join('; ')}
                  </span>
                )}
              </li>
            ))}
          </ul>
          {q.examinerNote && (
            <p className="mt-2 border-t border-slate-200 pt-2 text-slate-600">
              <span className="font-medium">{t('exam.examinerNote')}：</span>
              {q.examinerNote[lang]}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
