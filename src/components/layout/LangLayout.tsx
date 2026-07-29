import { useEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher';
import type { Lang } from '../../content/types';

/** 语言布局：校验 lang 参数，联动 i18n，提供顶部导航 */
export function LangLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { t, i18n } = useTranslation();

  const validLang: Lang | undefined = lang === 'zh' || lang === 'en' ? lang : undefined;

  useEffect(() => {
    if (validLang && i18n.language !== validLang) {
      void i18n.changeLanguage(validLang);
    }
    if (validLang) {
      document.documentElement.lang = validLang === 'zh' ? 'zh-CN' : 'en';
    }
  }, [validLang, i18n]);

  if (!validLang) {
    return <Navigate to="/zh" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50/60">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to={`/${validLang}`} className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span aria-hidden>⚗️</span>
            {t('site.name')}
          </Link>
          <nav className="flex items-center gap-4">
            <Link to={`/${validLang}`} className="text-sm text-slate-600 transition hover:text-blue-600">
              {t('nav.home')}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        {t('site.name')} · {t('site.tagline')}
      </footer>
    </div>
  );
}
