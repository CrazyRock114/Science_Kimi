// 移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：src/components/lesson-extras/TeethAnatomy.tsx
// import 路径由 scripts/port-mmx-extras.mjs 改写，勿手改 import 区块以外的差异
import { useState } from 'react'
import type { TeethAnatomyExtra } from './types'
import { T, useBilingualText } from '../../simulations/mmx/T'
import { TEETH_ANATOMY } from './lessonExtrasStrings'

/**
 * Two-part dental view: a labelled tooth diagram and a row of the four tooth
 * types an adult has.
 *
 * v2: replaces the earlier hand-drawn tooth SVG with the real G8 Science
 * figure (B5.04, longitudinal section of an incisor). The textbook
 * illustration is the centrepiece; the click-to-learn interaction is via
 * a row of label-buttons beneath the image, so the diagram stays clean and
 * unaltered. The 4-tooth gallery below is the same data-driven row as
 * before, just visualised with simple emoji.
 */
export function TeethAnatomy({ extra }: { extra: TeethAnatomyExtra }) {
  const figureAlt = useBilingualText(TEETH_ANATOMY.figureAlt)
  const [selectedLayer, setSelectedLayer] = useState<string>(extra.layers[0]?.id ?? '')
  const [selectedKind, setSelectedKind] = useState<string>(extra.kinds[0]?.id ?? '')
  const kind = extra.kinds.find((k) => k.id === selectedKind)

  return (
    <div className="space-y-4">
      <figure className="m-0 overflow-hidden rounded-lg border border-line bg-canvas">
        <img
          src="/figures/g8/7-1-nutrition/figure-b5-04.png"
          alt={figureAlt}
          className="h-auto w-full"
          loading="lazy"
        />
        <figcaption className="border-t border-line bg-canvas px-3 py-1.5 text-[11px] text-muted">
          <T value={TEETH_ANATOMY.figureCaption} />
        </figcaption>
      </figure>

      <div>
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
          <T value={TEETH_ANATOMY.layerHint} />
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {extra.layers.map((l) => {
            const active = l.id === selectedLayer
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => setSelectedLayer(l.id)}
                aria-pressed={active}
                data-tooth-layer={l.id}
                className={
                  'rounded-md border px-3 py-2 text-left text-sm transition-colors ' +
                  (active
                    ? 'border-teal-600 bg-teal-50 text-ink'
                    : 'border-line bg-surface text-ink-soft hover:border-teal-500')
                }
              >
                <span className="block font-medium">
                  <T value={l.name} />
                </span>
                {active && (
                  <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
                    <T value={l.description} />
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
          <T value={TEETH_ANATOMY.kindsHeading} />
        </h4>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {extra.kinds.map((k) => {
            const active = k.id === selectedKind
            return (
              <button
                key={k.id}
                type="button"
                onClick={() => setSelectedKind(k.id)}
                aria-pressed={active}
                data-tooth-kind={k.id}
                className={
                  'rounded-md border p-3 text-left transition-colors ' +
                  (active
                    ? 'border-teal-600 bg-teal-50'
                    : 'border-line bg-surface hover:border-teal-500')
                }
              >
                <div className="text-xs text-muted">×{k.count}</div>
                <div className="text-sm font-semibold text-ink">
                  <T value={k.name} />
                </div>
                {active && (
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                    <T value={k.role} />
                  </p>
                )}
              </button>
            )
          })}
        </div>
        {kind && (
          <p className="mt-2 text-[11px] text-muted">
            <T value={TEETH_ANATOMY.countsNote} />
          </p>
        )}
      </div>
    </div>
  )
}
