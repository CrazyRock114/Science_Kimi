import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang, QuizItem } from '../../content/types';
import { recordQuizScore } from '../../lib/progress';

interface QuizSectionProps {
  kpId: string;
  items: QuizItem[];
  lang: Lang;
}

/** 随堂小测：可判分，显示对错与解析，记录最好成绩 */
export function QuizSection({ kpId, items, lang }: QuizSectionProps) {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [warned, setWarned] = useState(false);

  const allAnswered = items.every((item) => answers[item.id] !== undefined);
  const score = items.filter((item) => answers[item.id] === item.answerIndex).length;

  const handleSubmit = () => {
    if (!allAnswered) {
      setWarned(true);
      return;
    }
    setWarned(false);
    setSubmitted(true);
    recordQuizScore(kpId, score, items.length);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setWarned(false);
  };

  return (
    <div className="space-y-6">
      {items.map((item, idx) => {
        const chosen = answers[item.id];
        return (
          <div key={item.id} className="rounded-lg border border-slate-200 p-4">
            <p className="mb-3 font-medium text-slate-900">
              {idx + 1}. {item.question[lang]}
            </p>
            <div className="space-y-2">
              {item.options[lang].map((option, optIdx) => {
                const isChosen = chosen === optIdx;
                const isAnswer = item.answerIndex === optIdx;
                let optionClass = 'border-slate-200 hover:border-blue-300 hover:bg-blue-50';
                if (submitted && isAnswer) {
                  optionClass = 'border-green-400 bg-green-50';
                } else if (submitted && isChosen && !isAnswer) {
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
                      name={`quiz-${item.id}`}
                      disabled={submitted}
                      checked={isChosen}
                      onChange={() => setAnswers((prev) => ({ ...prev, [item.id]: optIdx }))}
                      className="accent-blue-600"
                    />
                    <span className="text-slate-700">{option}</span>
                  </label>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-3 rounded-md bg-slate-50 px-3 py-2 text-sm">
                <p className={chosen === item.answerIndex ? 'font-medium text-green-700' : 'font-medium text-red-700'}>
                  {chosen === item.answerIndex ? t('quiz.correct') : t('quiz.wrong')}
                </p>
                <p className="mt-1 text-slate-600">
                  <span className="font-medium">{t('quiz.explanation')}：</span>
                  {item.explanation[lang]}
                </p>
              </div>
            )}
          </div>
        );
      })}

      {warned && !submitted && <p className="text-sm text-amber-600">{t('quiz.unanswered')}</p>}

      <div className="flex items-center gap-4">
        {!submitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            {t('quiz.submit')}
          </button>
        ) : (
          <>
            <p className="font-medium text-slate-900">{t('quiz.score', { score, total: items.length })}</p>
            <button
              type="button"
              onClick={handleRetry}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
            >
              {t('quiz.retry')}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
