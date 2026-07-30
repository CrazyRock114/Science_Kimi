import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cellModels, cellModelList, type CellId } from '../content/cells';
import type { Lang } from '../content/types';
import { CellScene } from '../components/cells/CellScene';

/** 3D 细胞查看器：左侧切换与列表 / 中央 3D 舞台 / 右侧信息面板 */
export default function CellExplorerPage() {
  const { t } = useTranslation();
  const params = useParams<{ lang: string }>();
  const lang: Lang = params.lang === 'en' ? 'en' : 'zh';

  const [cellId, setCellId] = useState<CellId>('animal');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const model = cellModels[cellId];
  const selected = model.organelles.find((o) => o.id === selectedId) ?? null;

  const switchCell = (id: CellId) => {
    setCellId(id);
    setSelectedId(null);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">🔬 {t('cells.title')}</h1>
          <p className="mt-1 text-sm text-slate-600">{model.description[lang]}</p>
        </div>
        <Link to={`/${lang}/biology`} className="shrink-0 text-sm text-slate-500 transition hover:text-blue-600">
          ← {t('cells.backToBiology')}
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)_300px]">
        {/* 左栏：细胞类型切换 + 细胞器列表 */}
        <aside className="space-y-4">
          <div className="flex gap-2 lg:flex-col">
            {cellModelList.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => switchCell(m.id)}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition lg:flex-none ${
                  cellId === m.id
                    ? 'border-biology bg-biology-light text-biology'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                {m.id === 'animal' ? '🐾 ' : '🌿 '}
                {m.name[lang]}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-white">
            <p className="border-b border-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">
              {t('cells.organelleList')}
            </p>
            <ul className="max-h-64 overflow-y-auto p-1.5 lg:max-h-none">
              {model.organelles.map((o) => (
                <li key={o.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(o.id === selectedId ? null : o.id)}
                    className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition ${
                      o.id === selectedId ? 'bg-biology-light font-medium text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      aria-hidden
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: o.color }}
                    />
                    {o.name[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* 中栏：3D 舞台 */}
        <section className="relative min-h-[320px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 lg:min-h-[560px]">
          <CellScene key={model.id} model={model} selectedId={selectedId} onSelect={setSelectedId} />
          <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/80 px-3 py-1 text-xs text-slate-500 shadow-sm">
            {t('cells.controlsHint')}
          </p>
        </section>

        {/* 右栏：信息面板 */}
        <aside className="rounded-lg border border-slate-200 bg-white p-4">
          {selected ? (
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span aria-hidden className="h-3 w-3 rounded-full" style={{ backgroundColor: selected.color }} />
                <h2 className="text-lg font-semibold text-slate-900">{selected.name[lang]}</h2>
              </div>
              <section className="mb-3">
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {t('cells.structure')}
                </h3>
                <p className="text-sm leading-6 text-slate-700">{selected.structure[lang]}</p>
              </section>
              <section className="mb-3">
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {t('cells.function')}
                </h3>
                <p className="text-sm leading-6 text-slate-700">{selected.role[lang]}</p>
              </section>
              <section className="rounded-md bg-biology-light px-3 py-2">
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-biology">
                  💡 {t('cells.funFact')}
                </h3>
                <p className="text-sm leading-6 text-slate-700">{selected.funFact[lang]}</p>
              </section>
            </div>
          ) : (
            <p className="py-10 text-center text-sm leading-6 text-slate-400">{t('cells.selectHint')}</p>
          )}
        </aside>
      </div>
    </div>
  );
}
