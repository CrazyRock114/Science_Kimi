import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang } from '../../content/types';
import { isAiConfigured, tutorChat, type TutorHistoryItem } from '../../lib/ai';

export interface TutorContext {
  kpTitle: string;
  kpSummary: string;
  kpTheory: string;
  gradeTier: string;
  /** 当前仿真参数 / 实验状态（如已加入试剂） */
  params?: Record<string, number | string>;
}

interface TutorPanelProps {
  context: TutorContext;
  lang: Lang;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * AI 助教聊天面板（可折叠）：
 * 预置引导问题 + 消息列表（流式渲染）+ 输入框。
 * 未配置 VITE_AI_API_URL 时显示配置指引，不发起任何请求。
 */
export function TutorPanel({ context, lang }: TutorPanelProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState('');
  const abortRef = useRef<AbortController | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // 卸载时中断进行中的流式请求
  useEffect(() => () => abortRef.current?.abort(), []);

  // 新 token 到达时滚动到底部
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'nearest' });
  }, [messages]);

  const configured = isAiConfigured();
  const suggested = [
    t('ai.suggestedWhy'),
    t('ai.suggestedPractice'),
    t('ai.suggestedSummary'),
  ];

  const ask = (question: string) => {
    const q = question.trim();
    if (!q || streaming || !configured) return;
    setError('');
    setInput('');

    const history: TutorHistoryItem[] = messages.slice(-10);
    setMessages((prev) => [...prev, { role: 'user', content: q }, { role: 'assistant', content: '' }]);
    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    tutorChat(
      {
        kpTitle: context.kpTitle,
        kpSummary: context.kpSummary,
        kpTheory: context.kpTheory,
        language: lang,
        gradeTier: context.gradeTier,
        params: context.params,
        history,
        question: q,
      },
      (token) => {
        setMessages((prev) => {
          const next = [...prev];
          const last = next[next.length - 1];
          if (last?.role === 'assistant') {
            next[next.length - 1] = { ...last, content: last.content + token };
          }
          return next;
        });
      },
      controller.signal,
    )
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : String(err));
        // 去掉占位用的空助手消息
        setMessages((prev) =>
          prev[prev.length - 1]?.role === 'assistant' && prev[prev.length - 1]?.content === ''
            ? prev.slice(0, -1)
            : prev,
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) setStreaming(false);
      });
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <span aria-hidden>🤖</span>
          {t('ai.tutorTitle')}
        </span>
        <span className="text-xs text-slate-400">{open ? t('ai.collapse') : t('ai.expand')} ▾</span>
      </button>

      {open && (
        <div className="border-t border-slate-100 px-4 py-3">
          {!configured ? (
            <div className="rounded-lg bg-amber-50 px-3 py-2 text-sm leading-6 text-amber-800">
              <p className="font-medium">{t('ai.notConfigured')}</p>
              <p className="mt-1 text-xs">{t('ai.notConfiguredHint')}</p>
            </div>
          ) : (
            <>
              {/* 预置引导问题 */}
              {messages.length === 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {suggested.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => ask(q)}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700 transition hover:bg-blue-100"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* 消息列表 */}
              {messages.length > 0 && (
                <div className="mb-3 max-h-80 space-y-2 overflow-y-auto pr-1">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`rounded-lg px-3 py-2 text-sm leading-6 whitespace-pre-wrap ${
                        m.role === 'user'
                          ? 'ml-8 bg-blue-600 text-white'
                          : 'mr-8 bg-slate-100 text-slate-800'
                      }`}
                    >
                      {m.content ||
                        (m.role === 'assistant' && streaming && i === messages.length - 1
                          ? t('ai.thinking')
                          : '')}
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>
              )}

              {error && (
                <p className="mb-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
                  {t('ai.errorPrefix')}
                  {error}
                </p>
              )}

              {/* 输入框 */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  ask(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('ai.inputPlaceholder')}
                  disabled={streaming}
                  className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 disabled:bg-slate-50"
                />
                <button
                  type="submit"
                  disabled={streaming || !input.trim()}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
                >
                  {t('ai.send')}
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
