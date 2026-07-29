import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const homePath = lang === 'en' ? '/en' : '/zh';
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="mb-3 text-3xl font-bold text-slate-900">{t('notFound.title')}</h1>
      <p className="mb-6 text-slate-600">{t('notFound.message')}</p>
      <Link
        to={homePath}
        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        {t('notFound.backHome')}
      </Link>
    </div>
  );
}
