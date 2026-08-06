import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExamQuestion, Lang } from '../../content/types';
import { getKnowledgePointProgress, recordExamSelfAssessment } from '../../lib/progress';

interface ExamPracticeSectionProps {
  items: ExamQuestion[];
  lang: Lang;
  /** 知识点 id：用于把结构化题自评结果计入学习进度；缺省时自评不落盘 */
  kpId?: string;
}

/** 考试真题演练：英文题干 + command word/分值徽章；MCQ 可自测判分，结构化题可展开评分标准并自评 */
export function ExamPracticeSection({ items, lang, kpId }: ExamPracticeSectionProps) {
  return (
    <div className="space-y-6">
      {items.map((q, idx) => (
        <ExamQuestionCard key={q.id} question={q} index={idx} lang={lang} kpId={kpId} />
      ))}
    </div>
  );
}

function ExamQuestionCard({
  question: q,
  index,
  lang,
  kpId,
}: {
  question: ExamQuestion;
  index: number;
  lang: Lang;
  kpId?: string;
}) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [checked, setChecked] = useState(false);
  const [showScheme, setShowScheme] = useState(false);
  // 结构化题自评（对照 mark scheme 自判对错）；初始值从进度记录恢复
  const [selfAssessment, setSelfAssessment] = useState<boolean | undefined>(() =>
    kpId ? getKnowledgePointProgress(kpId).examSelfAssessment?.[q.id] : undefined,
  );

  const isMcq = q.options !== undefined;
  const revealed = checked || showScheme;

  const handleSelfAssess = (correct: boolean) => {
    setSelfAssessment(correct);
    if (kpId) recordExamSelfAssessment(kpId, q.id, correct);
  };

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

      {/* 结构化题：展开评分标准后提供自评（结果计入学习进度） */}
      {!isMcq && showScheme && (
        <div className="mt-3 flex flex-wrap items-center gap-2" data-testid="exam-self-assess">
          <span className="text-sm text-slate-600">{t('exam.selfAssessPrompt')}</span>
          <button
            type="button"
            onClick={() => handleSelfAssess(true)}
            aria-pressed={selfAssessment === true}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${
              selfAssessment === true
                ? 'bg-green-600 text-white'
                : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t('exam.selfCorrect')}
          </button>
          <button
            type="button"
            onClick={() => handleSelfAssess(false)}
            aria-pressed={selfAssessment === false}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${
              selfAssessment === false
                ? 'bg-red-600 text-white'
                : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t('exam.selfWrong')}
          </button>
        </div>
      )}

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
