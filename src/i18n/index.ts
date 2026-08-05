import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './zh';
import en from './en';

/**
 * 从 URL 首段解析初始语言（/zh/...、/en/...）。
 * 必须在 init 时就位：若首帧渲染后才在 useEffect 里 changeLanguage，
 * React 18 StrictMode（dev 双调用 mount effect）下重渲染的 commit 会丢失，
 * 导致 /en 直开时 chrome 文案停留在中文。
 */
function detectInitialLang(): 'zh' | 'en' {
  if (typeof window === 'undefined') return 'zh';
  return window.location.pathname.split('/')[1] === 'en' ? 'en' : 'zh';
}

i18n.use(initReactI18next).init({
  resources: { zh, en },
  lng: detectInitialLang(),
  fallbackLng: 'zh',
  interpolation: { escapeValue: false },
});

export default i18n;
