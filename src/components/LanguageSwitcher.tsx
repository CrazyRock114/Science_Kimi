import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Lang } from '../content/types';

/** 语言切换：保持当前路径，仅替换 lang 段 */
export function LanguageSwitcher() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const current: Lang = lang === 'en' ? 'en' : 'zh';
  const target: Lang = current === 'zh' ? 'en' : 'zh';
  const targetPath = location.pathname.replace(/^\/(zh|en)(\/|$)/, `/${target}$2`);

  return (
    <Link
      to={{ pathname: targetPath, search: location.search }}
      className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
    >
      {t('lang.switch')}
    </Link>
  );
}
