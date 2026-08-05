// 移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：src/components/lesson-extras/VillusDetail.tsx
// import 路径由 scripts/port-mmx-extras.mjs 改写，勿手改 import 区块以外的差异
import { useState } from 'react'
import type { VillusDetailExtra } from './types'
import { T, useBilingualText } from '../../simulations/mmx/T'
import { VILLUS_DETAIL } from './lessonExtrasStrings'

/**
 * A cross-section of a single villus, with the named structures and where each
 * nutrient goes after absorption.
 *
 * v2: replaces the earlier hand-drawn SVG with the real G8 Science figure
 * (B5.09). The image is the centrepiece; the click-to-learn interaction is
 * via a row of label-buttons beneath the image, so the textbook illustration
 * stays clean and unaltered.
 */
export function VillusDetail({ extra }: { extra: VillusDetailExtra }) {
  const figureAlt = useBilingualText(VILLUS_DETAIL.figureAlt)
  const microvilliAlt = useBilingualText(VILLUS_DETAIL.microvilliAlt)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <figure className="m-0 overflow-hidden rounded-lg border border-line bg-canvas">
        <img
          src="/figures/g8/7-1-nutrition/figure-b5-09.png"
          alt={figureAlt}
          className="h-auto w-full"
          loading="lazy"
        />
        <figcaption className="border-t border-line bg-canvas px-3 py-1.5 text-[11px] text-muted">
          <T value={VILLUS_DETAIL.figureCaption} />
        </figcaption>
      </figure>

      <div className="grid gap-2 sm:grid-cols-2">
        {extra.parts.map((p) => {
          const active = p.id === selectedId
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedId((cur) => (cur === p.id ? null : p.id))}
              data-part={p.id}
              aria-pressed={active}
              className={
                'rounded-md border px-3 py-2 text-left text-sm transition-colors ' +
                (active
                  ? 'border-teal-600 bg-teal-50 text-ink'
                  : 'border-line bg-surface text-ink-soft hover:border-teal-500')
              }
            >
              <span className="block font-medium">
                <T value={p.name} />
              </span>
              {active && (
                <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
                  <T value={p.description} />
                </span>
              )}
            </button>
          )
        })}
      </div>

      <TransportTable transport={extra.transport} />

      {extra.parts.some((p) => p.id === 'microvilli') && (
        <figure className="m-0 overflow-hidden rounded-lg border border-line bg-canvas">
          <img
            src="/figures/g8/7-1-nutrition/figure-b5-10.png"
            alt={microvilliAlt}
            className="h-auto w-full"
            loading="lazy"
          />
          <figcaption className="border-t border-line bg-canvas px-3 py-1.5 text-[11px] text-muted">
            <T value={VILLUS_DETAIL.microvilliCaption} />
          </figcaption>
        </figure>
      )}
    </div>
  )
}

function TransportTable({ transport }: { transport: VillusDetailExtra['transport'] }) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
        <T value={VILLUS_DETAIL.transportTitle} />
      </h4>
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full text-sm">
          <tbody>
            {transport.map((t) => (
              <tr key={t.id} data-transport-id={t.id} className="border-t border-line first:border-t-0">
                <td className="bg-surface px-3 py-1.5 font-medium text-ink-soft">
                  <T value={t.name} />
                </td>
                <td className="bg-canvas px-3 py-1.5 text-ink-soft">
                  <T value={t.destination} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
