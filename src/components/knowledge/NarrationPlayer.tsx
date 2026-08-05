import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang, NarrationAction, NarrationScript } from '../../content/types';
import { buildNarrationQueue } from '../../lib/narration';
import { Formula } from '../Formula';

interface NarrationPlayerProps {
  kpId: string;
  narration: NarrationScript;
  lang: Lang;
  /** 行剧本的仿真动作（setParams/play/pause/reset/highlight）开始播放时上报 */
  onAction?: (action: NarrationAction) => void;
}

type PlayStatus = 'idle' | 'playing' | 'paused';

function narrationAudioUrl(kpId: string, lang: Lang, unitId: string): string {
  return `${import.meta.env.BASE_URL}audio/narrations/${kpId}/${lang}/${unitId}.mp3`;
}

/** 选择匹配语言的 speechSynthesis voice（找不到则由浏览器默认处理） */
function pickVoice(lang: Lang): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis?.getVoices() ?? [];
  const prefix = lang === 'zh' ? 'zh' : 'en';
  return voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
}

/**
 * TTS 讲解播放器：按当前语言逐项播放。
 * 播放队列由 buildNarrationQueue 摊平：段落含行剧本（IGCSE 转换课程）时按行播放
 * （音频以行 id 寻址、行级高亮、随行展示 latex 公式、行后 pause 停顿、开始播放时
 * 经 onAction 上报仿真动作）；否则按段播放（手写知识点，行为不变）。
 * 优先播放预生成音频 /audio/narrations/{kpId}/{lang}/{unitId}.mp3，
 * 缺失（HEAD 探测失败或播放出错）时回退 speechSynthesis。
 * prefers-reduced-motion 用户：不自动连播，仅手动逐项播放。
 */
export function NarrationPlayer({ kpId, narration, lang, onAction }: NarrationPlayerProps) {
  const { t } = useTranslation();
  const [current, setCurrent] = useState<number | null>(null);
  const [status, setStatus] = useState<PlayStatus>('idle');
  // 预生成音频可用性探测缓存（unitId → 是否存在 mp3）
  const audioCache = useRef(new Map<string, boolean>());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // 行后停顿计时器（stop/切换时随令牌失效）
  const pauseTimerRef = useRef<number | null>(null);
  // 播放令牌：防止 stop/切换后异步回调继续推进
  const tokenRef = useRef(0);
  // 动作回调经 ref 取用，避免播放链闭包捕获过期 prop
  const onActionRef = useRef(onAction);
  useEffect(() => {
    onActionRef.current = onAction;
  }, [onAction]);
  const [reducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const queue = useMemo(() => buildNarrationQueue(narration), [narration]);

  const stopPlayback = () => {
    tokenRef.current += 1;
    audioRef.current?.pause();
    audioRef.current = null;
    if (pauseTimerRef.current !== null) {
      window.clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    window.speechSynthesis?.cancel();
    setStatus('idle');
    setCurrent(null);
  };

  // 卸载时停止一切播放
  useEffect(() => stopPlayback, []);

  const speakFallback = (index: number, token: number) => {
    if (!('speechSynthesis' in window)) {
      setStatus('idle');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(queue[index].text[lang]);
    utterance.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
    const voice = pickVoice(lang);
    if (voice) utterance.voice = voice;
    utterance.onend = () => advance(index, token);
    utterance.onerror = () => {
      if (tokenRef.current === token) setStatus('idle');
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const advance = (index: number, token: number) => {
    if (tokenRef.current !== token) return;
    const proceed = () => {
      if (tokenRef.current !== token) return;
      // reduced-motion：不自动连播，播完一项即停
      if (reducedMotion || index + 1 >= queue.length) {
        setStatus('idle');
        setCurrent(null);
        return;
      }
      void playUnit(index + 1);
    };
    // 行剧本的 pause：播完该行人声后停顿指定秒数再推进
    const pause = queue[index].pause;
    if (!reducedMotion && pause && pause > 0 && index + 1 < queue.length) {
      pauseTimerRef.current = window.setTimeout(proceed, pause * 1000);
    } else {
      proceed();
    }
  };

  const playUnit = async (index: number) => {
    stopPlayback();
    const token = tokenRef.current;
    setCurrent(index);
    setStatus('playing');

    const unit = queue[index];
    // 行剧本的仿真动作：讲解与画面同步（如"看它减速"时滑块真的动）
    if (unit.action) onActionRef.current?.(unit.action);
    const url = narrationAudioUrl(kpId, lang, unit.id);

    // 探测预生成音频是否存在（每项只探测一次）
    let hasAudio = audioCache.current.get(unit.id);
    if (hasAudio === undefined) {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        hasAudio = res.ok;
      } catch {
        hasAudio = false;
      }
      audioCache.current.set(unit.id, hasAudio);
    }
    if (tokenRef.current !== token) return; // 探测期间被停止/切换

    if (hasAudio) {
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => advance(index, token);
      audio.onerror = () => {
        // 播放出错同样回退 TTS
        audioCache.current.set(unit.id, false);
        if (tokenRef.current === token) speakFallback(index, token);
      };
      audio.play().catch(() => {
        if (tokenRef.current === token) speakFallback(index, token);
      });
    } else {
      speakFallback(index, token);
    }
  };

  const pause = () => {
    if (pauseTimerRef.current !== null) {
      window.clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    if (audioRef.current) audioRef.current.pause();
    else window.speechSynthesis?.pause();
    setStatus('paused');
  };

  const resume = () => {
    if (audioRef.current) void audioRef.current.play().catch(() => undefined);
    else window.speechSynthesis?.resume();
    setStatus('playing');
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      {/* 控制条 */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-900" aria-hidden>
          🔊
        </span>
        <h2 className="text-sm font-semibold text-slate-900">{t('narration.title')}</h2>
        <div className="ml-auto flex gap-2">
          {status === 'playing' ? (
            <button
              type="button"
              onClick={pause}
              className="rounded-lg border border-slate-300 px-3 py-1 text-xs text-slate-600 transition hover:border-blue-400 hover:text-blue-600"
            >
              {t('narration.pause')}
            </button>
          ) : status === 'paused' ? (
            <button
              type="button"
              onClick={resume}
              className="rounded-lg border border-slate-300 px-3 py-1 text-xs text-slate-600 transition hover:border-blue-400 hover:text-blue-600"
            >
              {t('narration.resume')}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => void playUnit(0)}
              className="rounded-lg bg-blue-600 px-3 py-1 text-xs text-white transition hover:bg-blue-700"
            >
              {t('narration.play')}
            </button>
          )}
          {status !== 'idle' && (
            <button
              type="button"
              onClick={stopPlayback}
              className="rounded-lg border border-slate-300 px-3 py-1 text-xs text-slate-600 transition hover:border-red-300 hover:text-red-600"
            >
              {t('narration.stop')}
            </button>
          )}
        </div>
      </div>

      {/* 字幕：高亮当前项，点击跳转播放；行剧本随行展示 latex 公式 */}
      <ol className="space-y-2">
        {queue.map((unit, i) => {
          const active = current === i && status !== 'idle';
          return (
            <li key={unit.id}>
              <button
                type="button"
                onClick={() => void playUnit(i)}
                aria-current={active}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm leading-6 transition ${
                  active
                    ? 'border border-blue-300 bg-blue-50 text-blue-900'
                    : 'border border-transparent bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="mr-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-500">
                  {t(`narration.kind.${unit.kind}`)}
                </span>
                {unit.text[lang]}
                {unit.latex && (
                  <span className="mt-1 block rounded bg-white/70 px-2 py-1">
                    <Formula latex={unit.latex} />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
