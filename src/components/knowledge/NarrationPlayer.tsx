import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang, NarrationScript } from '../../content/types';

interface NarrationPlayerProps {
  kpId: string;
  narration: NarrationScript;
  lang: Lang;
}

type PlayStatus = 'idle' | 'playing' | 'paused';

function narrationAudioUrl(kpId: string, lang: Lang, sectionId: string): string {
  return `${import.meta.env.BASE_URL}audio/narrations/${kpId}/${lang}/${sectionId}.mp3`;
}

/** 选择匹配语言的 speechSynthesis voice（找不到则由浏览器默认处理） */
function pickVoice(lang: Lang): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis?.getVoices() ?? [];
  const prefix = lang === 'zh' ? 'zh' : 'en';
  return voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
}

/**
 * TTS 讲解播放器：按当前语言逐段播放。
 * 优先播放预生成音频 /audio/narrations/{kpId}/{lang}/{sectionId}.mp3，
 * 缺失（HEAD 探测失败或播放出错）时回退 speechSynthesis。
 * prefers-reduced-motion 用户：不自动连播，仅手动逐段播放。
 */
export function NarrationPlayer({ kpId, narration, lang }: NarrationPlayerProps) {
  const { t } = useTranslation();
  const [current, setCurrent] = useState<number | null>(null);
  const [status, setStatus] = useState<PlayStatus>('idle');
  // 预生成音频可用性探测缓存（sectionId → 是否存在 mp3）
  const audioCache = useRef(new Map<string, boolean>());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // 播放令牌：防止 stop/切换后异步回调继续推进
  const tokenRef = useRef(0);
  const [reducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const sections = narration.sections;

  const stopPlayback = () => {
    tokenRef.current += 1;
    audioRef.current?.pause();
    audioRef.current = null;
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
    const utterance = new SpeechSynthesisUtterance(sections[index].text[lang]);
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
    // reduced-motion：不自动连播，播完一段即停
    if (reducedMotion || index + 1 >= sections.length) {
      setStatus('idle');
      setCurrent(null);
      return;
    }
    void playSection(index + 1);
  };

  const playSection = async (index: number) => {
    stopPlayback();
    const token = tokenRef.current;
    setCurrent(index);
    setStatus('playing');

    const section = sections[index];
    const url = narrationAudioUrl(kpId, lang, section.id);

    // 探测预生成音频是否存在（每段只探测一次）
    let hasAudio = audioCache.current.get(section.id);
    if (hasAudio === undefined) {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        hasAudio = res.ok;
      } catch {
        hasAudio = false;
      }
      audioCache.current.set(section.id, hasAudio);
    }
    if (tokenRef.current !== token) return; // 探测期间被停止/切换

    if (hasAudio) {
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => advance(index, token);
      audio.onerror = () => {
        // 播放出错同样回退 TTS
        audioCache.current.set(section.id, false);
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
              onClick={() => void playSection(0)}
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

      {/* 字幕段落：高亮当前段，点击跳转播放 */}
      <ol className="space-y-2">
        {sections.map((section, i) => {
          const active = current === i && status !== 'idle';
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => void playSection(i)}
                aria-current={active}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm leading-6 transition ${
                  active
                    ? 'border border-blue-300 bg-blue-50 text-blue-900'
                    : 'border border-transparent bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="mr-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-500">
                  {t(`narration.kind.${section.kind}`)}
                </span>
                {section.text[lang]}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
