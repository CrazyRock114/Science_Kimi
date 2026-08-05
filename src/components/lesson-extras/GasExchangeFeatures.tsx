// 移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：src/components/lesson-extras/GasExchangeFeatures.tsx
// import 路径由 scripts/port-mmx-extras.mjs 改写，勿手改 import 区块以外的差异
import { T, useMmxLang } from '../../simulations/mmx/T'
import type { GasExchangeFeaturesExtra } from './types'
import { GAS_EXCHANGE_FEATURES } from './lessonExtrasStrings'

/**
 * The four features that make the alveolus an efficient gas-exchange
 * surface, one card each.
 *
 * Modelled on `BloodComponents` (the per-card visual is the same: image
 * at the top, term, function, "what it looks like" — though for these
 * "features" rather than "components", the second paragraph is "why
 * this matters" rather than "appearance").
 */
export function GasExchangeFeatures({ extra }: { extra: GasExchangeFeaturesExtra }) {
  const lang = useMmxLang()
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {extra.features.map((f) => (
        <article
          key={f.id}
          data-feature-id={f.id}
          className="overflow-hidden rounded-lg border border-line bg-surface"
        >
          <figure className="m-0">
            <img
              src={f.image}
              alt={lang === 'zh' ? (f.term.zh ?? f.term.en) : f.term.en}
              className="h-44 w-full bg-canvas object-contain"
              loading="lazy"
            />
            <figcaption className="border-b border-line bg-canvas px-3 py-1 text-[10px] text-muted">
              <T value={f.imageSource} />
            </figcaption>
          </figure>

          <div className="p-3">
            <h3 className="text-base font-semibold text-ink">
              <T value={f.term} />
            </h3>

            <div className="mt-2 space-y-2">
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                  <T value={GAS_EXCHANGE_FEATURES.featureLabel} />
                </h4>
                <p className="text-sm leading-relaxed text-ink-soft">
                  <T value={f.mechanism} />
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                  <T value={GAS_EXCHANGE_FEATURES.whyLabel} />
                </h4>
                <p className="text-sm leading-relaxed text-ink-soft">
                  <T value={f.clinical} />
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
