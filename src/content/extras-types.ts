// 移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：src/content/types.ts（Lesson extras 类型段落，Bilingual 改由 igcse-kernels types 引入）
// 由 scripts/port-mmx-extras.mjs 生成（从源 content/types.ts 抽取），勿手改
import type { Bilingual } from '../simulations/igcse-kernels/types';

export type { Bilingual };

// ---------------------------------------------------------------------------
// Lesson extras — visual / interactive learning modules
// ---------------------------------------------------------------------------

/**
 * A single visual or interactive module rendered as its own section in the lesson.
 *
 * The `type` is a discriminator the renderer uses to pick a component. Each variant
 * carries only the data that component needs; we do not try to homogenise them.
 */
export type LessonExtra =
  | DigestiveAnatomyExtra
  | TeethAnatomyExtra
  | VilliSurfaceAreaExtra
  | BileEmulsificationExtra
  | BalancedPlateExtra
  | DigestionFlowExtra
  | VillusDetailExtra
  | FoodEnergyExtra
  | DiseaseCardsExtra
  | EnergyNeedsExtra
  | HeartAnatomyExtra
  | BloodComponentsExtra
  | BloodVesselsCompareExtra
  | DoubleCirculationExtra
  | RespirationCompareExtra
  | AirwayPathwayExtra
  | GasExchangeFeaturesExtra
  | SmokingEffectsExtra

/** What to show in the side panel when an organ is selected. */
export interface AnatomyOrgan {
  /** Stable id, used as the React key and as the click target on the SVG. */
  id: string
  /** Display name. */
  name: Bilingual
  /** What happens here, in one or two short paragraphs. */
  description: Bilingual
  /** Key secretions or events, rendered as a small chip row under the description. */
  secretions?: Bilingual[]
  /**
   * Approximate stop number on the "follow the food" timeline (1-based). Used to
   * sequence organs mouth→anus in the animated trace. Organs without a stop number
   * (liver, gall bladder, pancreas — they contribute, not the food passes through) are
   * left out of the timeline.
   */
  stop?: number
  /**
   * Normalised 3D position for the hotspot, used when this organ is rendered
   * inside a 3D model (e.g. the heart in `HeartAnatomy`'s 3D tab). Each
   * coordinate is in [0, 1] relative to the loaded GLB's bounding box —
   * 0 is the minimum, 1 the maximum. Ignored by the 2D renderer; absent means
   * the 3D renderer skips the hotspot for this part.
   */
  position3d?: [number, number, number]
}

export interface DigestiveAnatomyExtra {
  type: 'digestive-anatomy'
  id: string
  title: Bilingual
  /** What the user is meant to notice, in one line. */
  hint: Bilingual
  /**
   * The organs shown in the body silhouette, in display order. Each becomes a clickable
   * hotspot; the matching side panel describes what happens there.
   */
  organs: AnatomyOrgan[]
  /**
   * Which organ to highlight on first render. Optional — if absent, no organ is
   * selected and the panel shows the intro hint instead.
   */
  initialOrgan?: string
}

/** A single tooth type — its count, shape and what it does. */
export interface ToothKind {
  id: string
  name: Bilingual
  /** How many of this kind an adult has. */
  count: number
  /** What it is for. */
  role: Bilingual
  /**
   * A short shape description used as a fallback in the gallery when no SVG path is
   * provided. The default is a generic "molar-like" silhouette.
   */
  shape?: Bilingual
}

export interface TeethAnatomyExtra {
  type: 'teeth-anatomy'
  id: string
  title: Bilingual
  hint: Bilingual
  /** Layers of a tooth, drawn outside-in. */
  layers: Array<{
    id: string
    name: Bilingual
    /** What this layer is made of / what it does. */
    description: Bilingual
  }>
  kinds: ToothKind[]
}

export interface VilliSurfaceAreaExtra {
  type: 'villi-surface-area'
  id: string
  title: Bilingual
  hint: Bilingual
  /** Inner radius of the small intestine in mm. Used as the basis for the area math. */
  radiusMm: number
  /** Length of the segment shown, in mm. */
  lengthMm: number
  /**
   * Recommended number of villi per cm² for the syllabus-friendly "×N" factor. The
   * kernel multiplies the unfolded area by this and rounds to a tidy number; the slider
   * just lets the student perturb it and see the result.
   */
  baselineVilliPerCm2: number
}

export interface BileEmulsificationExtra {
  type: 'bile-emulsification'
  id: string
  title: Bilingual
  hint: Bilingual
}

export interface BalancedPlateExtra {
  type: 'balanced-plate'
  id: string
  title: Bilingual
  hint: Bilingual
  /**
   * Foods the student can put on their plate. Categorised so the renderer can colour
   * them and the scoring can check coverage.
   */
  foods: Array<{
    id: string
    name: Bilingual
    /** Group on the plate — drives the section colour and the scoring. */
    group: 'carb' | 'protein' | 'veg' | 'fruit' | 'dairy' | 'fat'
    /** Hand-drawn emoji or glyph used as a quick visual on the food card. */
    glyph: string
  }>
  /**
   * Minimum recommended servings per group. The check lights up green when each
   * group has at least this many. Designed to be generous — half a plate of veg
   * is the lesson, not a precise calorie count.
   */
  targets: Record<'carb' | 'protein' | 'veg' | 'fruit' | 'dairy' | 'fat', number>
}

/**
 * The chain of events from a sandwich in the mouth to a faeces at the anus, plus the
 * six formal terms the syllabus uses for each step.
 *
 * Drawn as a horizontal flowchart with the terms as labelled boxes, the definitions
 * as togglable cards beneath. Same pattern as the other "data, then reveal"
 * interactive modules.
 */
export interface DigestionFlowExtra {
  type: 'digestion-flow'
  id: string
  title: Bilingual
  hint: Bilingual
  /** Ordered pipeline of stages the food actually passes through. */
  stages: Array<{
    id: string
    label: Bilingual
    /** One-line summary shown on the flow box. */
    summary: Bilingual
  }>
  /** Definitions the lesson author wants the student to remember. */
  definitions: Array<{
    id: string
    term: Bilingual
    definition: Bilingual
  }>
}

/**
 * A labelled cross-section of a single villus. More detail than `VilliSurfaceArea`
 * (which is a numeric "how big is the multiplier" exercise): this one shows the
 * named structures — epithelium, capillary network, lacteal, microvilli — and the
 * direction each type of nutrient takes across the wall.
 */
export interface VillusDetailExtra {
  type: 'villus-detail'
  id: string
  title: Bilingual
  hint: Bilingual
  /** Layers, outside-in. Click to highlight. */
  parts: Array<{
    id: string
    name: Bilingual
    description: Bilingual
    /** Which side of the wall this structure is on, used to position the label. */
    side: 'outside' | 'inside' | 'core' | 'surface'
  }>
  /** Nutrients crossing the wall, with where they go. */
  transport: Array<{
    id: string
    name: Bilingual
    destination: Bilingual
  }>
}

/**
 * Energy content of foods, kJ per 100 g. The point is *comparison*: the same
 * mass of fat carries more than twice the energy of the same mass of carbohydrate
 * or protein, which is the explanation for the obesity / fried-food line in
 * Chapter 1.1.
 */
export interface FoodEnergyExtra {
  type: 'food-energy'
  id: string
  title: Bilingual
  hint: Bilingual
  foods: Array<{
    id: string
    name: Bilingual
    /** kJ per 100 g. */
    energy: number
    /** Coarse grouping, drives the row colour. */
    group: 'carb' | 'protein' | 'fat' | 'fruit-veg' | 'dairy' | 'mixed'
  }>
}

/**
 * A grid of disease/condition cards: real clinical photographs, the mechanism
 * (how/why it happens), the clinical picture (symptoms), and the term in EN+ZH.
 *
 * Modeled on the G8 Science chapter-1.5 lifestyle-diseases block: rickets,
 * scurvy, kwashiorkor, marasmus, coronary heart disease, obesity. The pictures
 * are real medical/photojournalism images, not stylised illustrations — a
 * six-year-old's photo of a kwashiorkor belly tells a student more than any
 * drawn diagram.
 */
export interface DiseaseCardEntry {
  id: string
  /** Term English (matches a glossary entry). */
  term: Bilingual
  /** Why it happens — the mechanism. */
  mechanism: Bilingual
  /** What it looks like — symptoms, signs, clinical picture. */
  clinical: Bilingual
  /** Path under /public — the lesson's own images live under /figures/<source>/<lesson>/. */
  image: string
  /** Source attribution. */
  imageSource: Bilingual
  /** Optional callout colour, drives the card border. */
  severity?: 'deficiency' | 'lifestyle' | 'severe'
}

export interface DiseaseCardsExtra {
  type: 'disease-cards'
  id: string
  title: Bilingual
  hint: Bilingual
  cards: DiseaseCardEntry[]
}

/**
 * The energy-needs table (Figure B5.01 style). Three columns: demographic,
 * daily energy, the actual number. The point: energy needs depend on age, sex
 * and activity — there is no single "daily requirement" for a person.
 */
export interface EnergyNeedsRow {
  demographic: Bilingual
  activity: Bilingual
  energyKj: number
}

export interface EnergyNeedsExtra {
  type: 'energy-needs'
  id: string
  title: Bilingual
  hint: Bilingual
  rows: EnergyNeedsRow[]
  /**
   * Source for the energy figures — e.g. 'G8 Science Figure B5.01'.
   * The numbers are a re-presentation; the unit is kJ per day.
   */
  source: Bilingual
}

// ---------------------------------------------------------------------------
// 9-1 Transport in animals — Chapter 2 (B7) extras
// ---------------------------------------------------------------------------

/**
 * The mammalian heart, in one picture. Same shape as `DigestiveAnatomy`:
 * a base image with SVG hotspots, side panel that follows selection, optional
 * "follow the blood" mode that animates a dot through the chambers in
 * circulation order.
 *
 * The blood colours are the convention: red = oxygenated (left side of
 * heart and arteries leaving it), blue = deoxygenated (right side and
 * pulmonary artery). Veins carry the opposite colour of the artery that
 * parallels them — that is the whole point of the figure.
 */
export interface HeartAnatomyExtra {
  type: 'heart-anatomy'
  id: string
  title: Bilingual
  hint: Bilingual
  /**
   * Heart parts shown on the figure, in display order. Each becomes a
   * clickable hotspot; the matching side panel describes it.
   *
   * `stop` is used by the "follow the blood" mode to sequence parts along
   * the pulmonary + systemic loops. `position3d` is the 3D tab's hotspot
   * anchor (see `AnatomyOrgan`).
   */
  parts: AnatomyOrgan[]
  /**
   * Which part to highlight on first render. Optional.
   */
  initialPart?: string
  /**
   * Optional path under /public to a `.glb` 3D model. When set, the
   * `HeartAnatomy` viewer adds a "3D" tab alongside the 2D figure so the
   * student can rotate the heart and click the same hotspots in 3D.
   */
  model3d?: string
}

/**
 * A grid of the four blood components: plasma, red cells, white cells
 * (lymphocytes + phagocytes), platelets. Each card has a real figure from
 * the G8 PDF and a one-paragraph function.
 *
 * Same shape as `DiseaseCards` (cards with image + mechanism + clinical)
 * but applied to components rather than conditions, so we re-use that
 * `DiseaseCardEntry` shape under a different extra type id.
 */
export interface BloodComponentsExtra {
  type: 'blood-components'
  id: string
  title: Bilingual
  hint: Bilingual
  cards: DiseaseCardEntry[]
}

/**
 * A three-way compare of artery, capillary and vein. Same pattern as the
 * `VilliSurfaceArea` "before / after" idea but with three columns. The
 * figure shows the cross-section of each, the table shows wall / lumen /
 * valves / direction / pressure, and the third column is a one-line
 * function.
 *
 * Card carries the same `Bilingual` shape as other enrichments, so the
 * data is fully in lesson.ts.
 */
export interface BloodVesselSpec {
  id: string
  name: Bilingual
  /** Wall thickness note, e.g. 'thick, with muscle and elastic fibres' */
  wall: Bilingual
  /** Lumen diameter note, e.g. 'narrow' */
  lumen: Bilingual
  /** Whether valves are present (only in veins) */
  hasValves: boolean
  /** Direction of blood flow relative to the heart */
  direction: Bilingual
  /** Blood pressure at typical points */
  pressure: Bilingual
  /** Function — what role does this vessel type play */
  function: Bilingual
  /** Image path under /public */
  image: string
  imageSource: Bilingual
}

export interface BloodVesselsCompareExtra {
  type: 'blood-vessels-compare'
  id: string
  title: Bilingual
  hint: Bilingual
  vessels: BloodVesselSpec[]
}

/**
 * The double circulation as a flowchart, modelled on `DigestionFlow`.
 * Each "station" on the loop is a place blood passes through, and the
 * side panel describes what happens there. "Follow the blood" mode
 * highlights each station in turn.
 */
export interface DoubleCirculationExtra {
  type: 'double-circulation'
  id: string
  title: Bilingual
  hint: Bilingual
  /** Ordered stations of the pulmonary + systemic loop, in flow order. */
  stations: Array<{
    id: string
    label: Bilingual
    /** One-line summary shown on the flow box. */
    summary: Bilingual
    /** `oxygenated` (red) or `deoxygenated` (blue) — drives box colour. */
    bloodState: 'oxygenated' | 'deoxygenated' | 'mixed'
    /** Loop this station belongs to: 'pulmonary' (heart ↔ lungs) or 'systemic' (heart ↔ body). */
    loop: 'pulmonary' | 'systemic'
  }>
  /** Definitions for the formal terms the syllabus uses (e.g. 'double circulation'). */
  definitions: Array<{
    id: string
    term: Bilingual
    definition: Bilingual
  }>
  /** Image path for the static figure shown above the flowchart. */
  image: string
  imageSource: Bilingual
}

// ---------------------------------------------------------------------------
// 11-1 Gas exchange and respiration — Chapter 3 (B8) extras
// ---------------------------------------------------------------------------

/**
 * A side-by-side comparison of aerobic and anaerobic respiration.
 *
 * Same shape as `BloodVesselsCompare`: a column per option, with rows for
 * each comparison axis. Plus the word equations below the table so the
 * student sees the chemistry, not just the words.
 */
export interface RespirationCompareExtra {
  type: 'respiration-compare'
  id: string
  title: Bilingual
  hint: Bilingual
  /** Rows of the comparison. Each row's `kind` decides how the value renders. */
  rows: Array<{
    id: string
    label: Bilingual
    aerobic: Bilingual
    anaerobic: Bilingual
  }>
  /** Word equations, one per kind. */
  equations: Array<{
    id: string
    /** 'aerobic' / 'anaerobic-muscle' / 'anaerobic-yeast' */
    kind: 'aerobic' | 'anaerobic-muscle' | 'anaerobic-yeast'
    latex: string
    meaning: Bilingual
  }>
  /** Source attribution (e.g. 'G8 Science p.36, Section B8.01'). */
  source: Bilingual
}

/**
 * The airways of the human gas-exchange system, with clickable hotspots
 * over the G8 Figure B8.01. Each labelled part (larynx, trachea, bronchus,
 * bronchiole, alveoli, diaphragm, ribs, pleural membranes) becomes a
 * clickable region with a side panel explaining its job.
 *
 * Same shape as `HeartAnatomy` / `DigestiveAnatomy`.
 */
export interface AirwayPathwayExtra {
  type: 'airway-pathway'
  id: string
  title: Bilingual
  hint: Bilingual
  parts: AnatomyOrgan[]
  initialPart?: string
}

/**
 * The four features that make the alveolus a good gas-exchange surface,
 * one card per feature. Modelled on `DiseaseCards` but applied to a
 * "good design" story rather than a "bad disease" story.
 */
export interface GasExchangeFeatureEntry {
  id: string
  term: Bilingual
  /** The feature itself (e.g. 'thin wall — one cell thick'). */
  mechanism: Bilingual
  /** Why it matters for gas exchange. */
  clinical: Bilingual
  image: string
  imageSource: Bilingual
}

export interface GasExchangeFeaturesExtra {
  type: 'gas-exchange-features'
  id: string
  title: Bilingual
  hint: Bilingual
  features: GasExchangeFeatureEntry[]
}

/**
 * The harm smoking does, in two halves: the substances in the smoke
 * (nicotine, tar, CO, particulates) as labelled arrows over the G8
 * Figure B8.07, and the resulting diseases (chronic bronchitis, lung
 * cancer, emphysema, CHD) with real figures from the G8 PDF.
 */
export interface SmokingEffectEntry {
  id: string
  term: Bilingual
  /** What the substance does / what the disease is. */
  mechanism: Bilingual
  /** Symptoms or clinical picture. */
  clinical: Bilingual
  image: string
  imageSource: Bilingual
}

export interface SmokingEffectsExtra {
  type: 'smoking-effects'
  id: string
  title: Bilingual
  hint: Bilingual
  /** Substance cards (nicotine, tar, CO, particulates). */
  substances: SmokingEffectEntry[]
  /** Disease cards (lung cancer, emphysema, chronic bronchitis, CHD). */
  diseases: SmokingEffectEntry[]
  /** Optional hero figure — usually the "what's in cigarette smoke" diagram. */
  heroImage?: string
  heroImageSource?: Bilingual
}
