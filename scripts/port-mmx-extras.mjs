/**
 * 一次性移植脚本：IGCSE_miniMax 课程 extras 交互模块 → src/components/lesson-extras/。
 *
 * 用法：node scripts/port-mmx-extras.mjs
 *
 * 复制 .reference/IGCSE_miniMax（只读，作者 CrazyRock114，non-commercial）的
 * src/components/lesson-extras/**.tsx（解剖探索器 / 流程图 / 对比卡片等 20 个
 * 数据驱动模块 + LessonExtras 分发器）与 src/lib/lessonExtrasStrings.ts，
 * 并从源 src/content/types.ts 抽取 LessonExtra 联合类型段落生成
 * src/content/extras-types.ts（content 层单一来源；components/lesson-extras/types.ts
 * 仅保留 re-export 垫片，组件的 `./types` import 不变）。
 *
 * @/ import 改写（与 port-mmx-primitives.mjs 同款模式）：
 *   @/content/types           → ./types（本目录由源类型段落抽取的 LessonExtra 类型）
 *   @/components/i18n/T       → ../../simulations/mmx/T（按本站 i18n 当前语言简化的双语组件）
 *   @/lib/lessonExtrasStrings → ./lessonExtrasStrings
 *
 * Anatomy3D（three.js 3D 心脏标签页）保持源项目的 lazy import，仅在学生
 * 切换到 3D 标签时加载 three。
 *
 * 补丁机制（PATCH 步骤）：源组件遗留了一批面向用户的硬编码英文 UI 文案
 * （标题、alt、aria-label、figcaption、SVG 标签等），zh 语言下也显示英文。
 * 复制完成后，脚本按下面的 PATCHES 数组对每个生成文件做精确字符串替换：
 *   - 文案抽取：新增的 Bilingual 条目注入 lessonExtrasStrings.ts（同为生成物），
 *     组件改为 <T value={...} /> / useBilingualText / useMmxLang 渲染；
 *   - 每个补丁 { file, note, from, to }，from 必须在生成文件中恰好出现一次，
 *     否则 throw——源文件变动导致补丁失效会在重跑时立刻暴露，而不是悄悄跳过。
 * 因此生成文件头注释仍成立：差异（import 改写 + 本补丁）全部由本脚本产生。
 */
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const REF_EXTRAS = resolve(import.meta.dirname, '../.reference/IGCSE_miniMax/src/components/lesson-extras');
const REF_LIB = resolve(import.meta.dirname, '../.reference/IGCSE_miniMax/src/lib');
const REF_TYPES = resolve(import.meta.dirname, '../.reference/IGCSE_miniMax/src/content/types.ts');
const DEST = resolve(import.meta.dirname, '../src/components/lesson-extras');

const HEADER = (rel) =>
  `// 移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：${rel}\n` +
  `// import 路径由 scripts/port-mmx-extras.mjs 改写，勿手改 import 区块以外的差异\n`;

/** 改写 @/ import：全部目标都在本目录或 simulations/mmx 下。 */
function rewriteImports(text, destAbs) {
  const at = (targetNoExt) => {
    let rel = relative(dirname(destAbs), join(DEST, targetNoExt)).split(sep).join('/');
    if (!rel.startsWith('.')) rel = './' + rel;
    return rel;
  };
  return text.replace(/from '(@\/[^']+)'/g, (_m, spec) => {
    if (spec === '@/content/types') return `from '${at('types')}'`;
    if (spec === '@/components/i18n/T') {
      let rel = relative(dirname(destAbs), resolve(import.meta.dirname, '../src/simulations/mmx/T')).split(sep).join('/');
      if (!rel.startsWith('.')) rel = './' + rel;
      return `from '${rel}'`;
    }
    if (spec === '@/lib/lessonExtrasStrings') return `from '${at('lessonExtrasStrings')}'`;
    throw new Error(`未处理的 import: ${spec}`);
  });
}

function port(srcAbs, destAbs, refRel) {
  const text = readFileSync(srcAbs, 'utf8');
  mkdirSync(dirname(destAbs), { recursive: true });
  writeFileSync(destAbs, HEADER(refRel) + rewriteImports(text, destAbs));
  console.log('[port]', refRel, '→', relative(DEST, destAbs));
}

// ---------------------------------------------------------------------------
// PATCH 步骤：zh 本地化补丁（from 必须在生成文件中恰好出现一次，否则 throw）
// ---------------------------------------------------------------------------

/** @type {Array<{ file: string, note: string, from: string, to: string }>} */
const PATCHES = [
  // ------------------------------------------------------------------
  // lessonExtrasStrings.ts：注入新增 Bilingual 文案条目
  // ------------------------------------------------------------------
  {
    file: 'lessonExtrasStrings.ts',
    note: 'TEETH_ANATOMY += kindsHeading / countsNote / figureAlt / figureCaption',
    from: `  nerveLabel: { en: 'nerve & blood vessels', zh: '神经与血管' } satisfies Bilingual,
} as const`,
    to: `  nerveLabel: { en: 'nerve & blood vessels', zh: '神经与血管' } satisfies Bilingual,
  kindsHeading: { en: 'The four types of teeth in an adult', zh: '成人的四类牙齿' } satisfies Bilingual,
  countsNote: {
    en: 'Counts: 8 incisors + 4 canines + 8 premolars + 12 molars = 32 teeth in an adult.',
    zh: '数量：8 颗切牙 + 4 颗尖牙 + 8 颗前磨牙 + 12 颗磨牙 = 成人共 32 颗牙。',
  } satisfies Bilingual,
  figureAlt: { en: 'Longitudinal section of an incisor tooth', zh: '切牙纵切面' } satisfies Bilingual,
  figureCaption: {
    en: 'G8 Science · p.13, Figure B5.04 · labelled longitudinal section of an incisor',
    zh: 'G8 科学 · 第 13 页，图 B5.04 · 带标注的切牙纵切面',
  } satisfies Bilingual,
} as const`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'VILLI_SURFACE_AREA += fingersInView',
    from: `  bareCaption: { en: 'Surface area = circumference × length', zh: '表面积 = 周长 × 长度' } satisfies Bilingual,
} as const`,
    to: `  bareCaption: { en: 'Surface area = circumference × length', zh: '表面积 = 周长 × 长度' } satisfies Bilingual,
  fingersInView: { en: 'fingers in this view', zh: '根绒毛（本视图）' } satisfies Bilingual,
} as const`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'BILE_EMULSIFICATION += oneDrop / manyDrops',
    from: `  off: {
    en: 'Click "Add bile" to see what emulsification looks like.',
    zh: '点"+ 加入胆汁"看看乳化的样子。',
  } satisfies Bilingual,
} as const`,
    to: `  off: {
    en: 'Click "Add bile" to see what emulsification looks like.',
    zh: '点"+ 加入胆汁"看看乳化的样子。',
  } satisfies Bilingual,
  oneDrop: { en: '1 drop', zh: '1 滴' } satisfies Bilingual,
  manyDrops: { en: 'many drops', zh: '许多小滴' } satisfies Bilingual,
} as const`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'BALANCED_PLATE += plateAriaLabel',
    from: `  reset: { en: 'Clear plate', zh: '清空餐盘' } satisfies Bilingual,
  groupLabel: {`,
    to: `  reset: { en: 'Clear plate', zh: '清空餐盘' } satisfies Bilingual,
  plateAriaLabel: { en: 'A plate divided into six sectors', zh: '一个分成六个扇区的餐盘' } satisfies Bilingual,
  groupLabel: {`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'DIGESTION_FLOW += sixTermsHeading / figureAlt / figureCaption',
    from: `export const DIGESTION_FLOW = {
  reveal: { en: 'Show definition', zh: '查看释义' } satisfies Bilingual,
  collapse: { en: 'Hide', zh: '收起' } satisfies Bilingual,
} as const`,
    to: `export const DIGESTION_FLOW = {
  reveal: { en: 'Show definition', zh: '查看释义' } satisfies Bilingual,
  collapse: { en: 'Hide', zh: '收起' } satisfies Bilingual,
  sixTermsHeading: { en: 'The six terms the syllabus uses', zh: '考纲要求的六个术语' } satisfies Bilingual,
  figureAlt: {
    en: "How an animal deals with food — a mammal's four-stage food journey",
    zh: '动物如何处理食物——哺乳动物的四阶段食物之旅',
  } satisfies Bilingual,
  figureCaption: {
    en: 'G8 Science · p.11, Figure B5.02 · ingestion → digestion → absorption → egestion',
    zh: 'G8 科学 · 第 11 页，图 B5.02 · 摄食 → 消化 → 吸收 → 排遗',
  } satisfies Bilingual,
} as const`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'DIGESTIVE_ANATOMY += figureAlt / figureCaption',
    from: `  modeFollow: { en: 'Follow the food', zh: '跟着食物走一遍' } satisfies Bilingual,`,
    to: `  modeFollow: { en: 'Follow the food', zh: '跟着食物走一遍' } satisfies Bilingual,
  figureAlt: { en: 'The human digestive system', zh: '人体消化系统' } satisfies Bilingual,
  figureCaption: {
    en: 'G8 Science · p.14, Figure B5.08 · click an organ to read about it',
    zh: 'G8 科学 · 第 14 页，图 B5.08 · 点击器官查看讲解',
  } satisfies Bilingual,`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'HEART_ANATOMY += figureAlt / figureCaption / loading3d',
    from: `  modeFollow: { en: 'Follow the blood', zh: '跟着血液走一遍' } satisfies Bilingual,`,
    to: `  modeFollow: { en: 'Follow the blood', zh: '跟着血液走一遍' } satisfies Bilingual,
  figureAlt: { en: 'Vertical section through a human heart', zh: '人心脏纵切面' } satisfies Bilingual,
  figureCaption: {
    en: 'G8 Science · p.23, Figure B7.03 · click a part to read about it',
    zh: 'G8 科学 · 第 23 页，图 B7.03 · 点击结构查看讲解',
  } satisfies Bilingual,
  loading3d: { en: 'Loading 3D viewer…', zh: '正在加载 3D 查看器…' } satisfies Bilingual,`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'AIRWAY_PATHWAY += figureAlt / figureCaption',
    from: `  modeFollow: { en: 'Follow the air', zh: '跟着空气走一遍' } satisfies Bilingual,`,
    to: `  modeFollow: { en: 'Follow the air', zh: '跟着空气走一遍' } satisfies Bilingual,
  figureAlt: {
    en: 'Front view of the human thorax showing the gas-exchange system',
    zh: '人体胸腔正面图（气体交换系统）',
  } satisfies Bilingual,
  figureCaption: {
    en: 'G8 Science · p.36, Figure B8.01 · click a part to read about it',
    zh: 'G8 科学 · 第 36 页，图 B8.01 · 点击结构查看讲解',
  } satisfies Bilingual,`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'DOUBLE_CIRCULATION += figureAlt',
    from: `  connector: {
    en: 'the heart pumps again',`,
    to: `  figureAlt: { en: 'The double circulation of a human', zh: '人体双循环示意图' } satisfies Bilingual,
  connector: {
    en: 'the heart pumps again',`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: 'VILLUS_DETAIL += figureAlt / figureCaption / microvilliAlt / microvilliCaption',
    from: `  wallLabel: { en: 'gut wall (one cell thick)', zh: '肠壁（单层细胞）' } satisfies Bilingual,
} as const`,
    to: `  wallLabel: { en: 'gut wall (one cell thick)', zh: '肠壁（单层细胞）' } satisfies Bilingual,
  figureAlt: { en: 'Longitudinal section through a villus', zh: '小肠绒毛纵切面' } satisfies Bilingual,
  figureCaption: {
    en: 'G8 Science · p.16, Figure B5.09 · labelled cross-section of a single villus',
    zh: 'G8 科学 · 第 16 页，图 B5.09 · 带标注的单根绒毛横切面',
  } satisfies Bilingual,
  microvilliAlt: {
    en: 'Detail of the surface of a villus — microvilli on each epithelial cell',
    zh: '绒毛表面细节——每个上皮细胞上的微绒毛',
  } satisfies Bilingual,
  microvilliCaption: {
    en: 'G8 Science · p.17, Figure B5.10 · microvilli on the surface of a single epithelial cell',
    zh: 'G8 科学 · 第 17 页，图 B5.10 · 单个上皮细胞表面的微绒毛',
  } satisfies Bilingual,
} as const`,
  },
  {
    file: 'lessonExtrasStrings.ts',
    note: '追加 ENERGY_NEEDS / BLOOD_COMPONENTS / DISEASE_CARDS 新条目组',
    from: `export const ANATOMY_3D = {
  dragHint: {
    en: 'Drag to rotate · scroll to zoom · click a pin to read',
    zh: '拖动旋转·滚轮缩放·点击标记查看',
  } satisfies Bilingual,
} as const`,
    to: `export const ANATOMY_3D = {
  dragHint: {
    en: 'Drag to rotate · scroll to zoom · click a pin to read',
    zh: '拖动旋转·滚轮缩放·点击标记查看',
  } satisfies Bilingual,
} as const

// ---------------------------------------------------------------------------
// 补丁新增（scripts/port-mmx-extras.mjs PATCH 步骤）：源组件中硬编码的英文
// UI 文案抽到此处，以便两个语言都经 <T> 渲染。
// ---------------------------------------------------------------------------

export const ENERGY_NEEDS = {
  colWho: { en: 'Who', zh: '人群' } satisfies Bilingual,
  colActivity: { en: 'Activity', zh: '活动' } satisfies Bilingual,
  colEnergy: { en: 'kJ / day', zh: 'kJ / 天' } satisfies Bilingual,
  colRelative: { en: 'Relative', zh: '相对量' } satisfies Bilingual,
} as const

export const BLOOD_COMPONENTS = {
  functionLabel: { en: 'Function', zh: '功能' } satisfies Bilingual,
  appearanceLabel: { en: 'Appearance / location', zh: '外观 / 位置' } satisfies Bilingual,
} as const

export const DISEASE_CARDS = {
  mechanismLabel: { en: 'How / why', zh: '原因 / 机理' } satisfies Bilingual,
  clinicalLabel: { en: 'What it looks like', zh: '临床表现' } satisfies Bilingual,
} as const`,
  },

  // ------------------------------------------------------------------
  // BalancedPlate.tsx：食物组 id → 中文组名；SVG aria-label 双语
  // ------------------------------------------------------------------
  {
    file: 'BalancedPlate.tsx',
    note: 'import += useBilingualText',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText } from '../../simulations/mmx/T'`,
  },
  {
    file: 'BalancedPlate.tsx',
    note: 'PlateDiagram 读取双语 aria-label',
    from: `function PlateDiagram({ counts }: { counts: Record<string, number> }) {`,
    to: `function PlateDiagram({ counts }: { counts: Record<string, number> }) {
  const plateAriaLabel = useBilingualText(BALANCED_PLATE.plateAriaLabel)`,
  },
  {
    file: 'BalancedPlate.tsx',
    note: 'aria-label 双语化',
    from: `aria-label="A plate divided into six sectors"`,
    to: `aria-label={plateAriaLabel}`,
  },
  {
    file: 'BalancedPlate.tsx',
    note: '清单渲染组名（groupLabel）而非组 id',
    from: `                <span className="capitalize">
                  {g} <span className="text-muted">{got} / {target}</span>
                </span>`,
    to: `                <span>
                  <T value={BALANCED_PLATE.groupLabel[g]} /> <span className="text-muted">{got} / {target}</span>
                </span>`,
  },

  // ------------------------------------------------------------------
  // TeethAnatomy.tsx：标题 / 计数说明 / figcaption / img alt 双语
  // ------------------------------------------------------------------
  {
    file: 'TeethAnatomy.tsx',
    note: 'import += useBilingualText 与 TEETH_ANATOMY 字符串',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText } from '../../simulations/mmx/T'
import { TEETH_ANATOMY } from './lessonExtrasStrings'`,
  },
  {
    file: 'TeethAnatomy.tsx',
    note: '读取双语 figureAlt',
    from: `export function TeethAnatomy({ extra }: { extra: TeethAnatomyExtra }) {
  const [selectedLayer, setSelectedLayer] = useState<string>(extra.layers[0]?.id ?? '')`,
    to: `export function TeethAnatomy({ extra }: { extra: TeethAnatomyExtra }) {
  const figureAlt = useBilingualText(TEETH_ANATOMY.figureAlt)
  const [selectedLayer, setSelectedLayer] = useState<string>(extra.layers[0]?.id ?? '')`,
  },
  {
    file: 'TeethAnatomy.tsx',
    note: 'img alt 双语化',
    from: `alt="Longitudinal section of an incisor tooth"`,
    to: `alt={figureAlt}`,
  },
  {
    file: 'TeethAnatomy.tsx',
    note: 'figcaption 双语化',
    from: `          G8 Science · p.13, Figure B5.04 · labelled longitudinal section of an incisor`,
    to: `          <T value={TEETH_ANATOMY.figureCaption} />`,
  },
  {
    file: 'TeethAnatomy.tsx',
    note: '分层标题双语化（复用 layerHint）',
    from: `          Click a layer to read what it does`,
    to: `          <T value={TEETH_ANATOMY.layerHint} />`,
  },
  {
    file: 'TeethAnatomy.tsx',
    note: '四类牙齿标题双语化',
    from: `          The four types of teeth in an adult`,
    to: `          <T value={TEETH_ANATOMY.kindsHeading} />`,
  },
  {
    file: 'TeethAnatomy.tsx',
    note: '牙齿计数说明双语化',
    from: `            Counts: 8 incisors + 4 canines + 8 premolars + 12 molars = 32 teeth in an adult.`,
    to: `            <T value={TEETH_ANATOMY.countsNote} />`,
  },

  // ------------------------------------------------------------------
  // VilliSurfaceArea.tsx："N fingers in this view" 双语
  // ------------------------------------------------------------------
  {
    file: 'VilliSurfaceArea.tsx',
    note: '绒毛数量 caption 双语化',
    from: `        caption={\`\${fingerCount} fingers in this view — ×\${density.toFixed(1)}\`}`,
    to: `        caption={
          <span>
            {fingerCount} <T value={VILLI_SURFACE_AREA.fingersInView} /> — ×{density.toFixed(1)}
          </span>
        }`,
  },

  // ------------------------------------------------------------------
  // BileEmulsification.tsx："1 drop / many drops" 双语
  // ------------------------------------------------------------------
  {
    file: 'BileEmulsification.tsx',
    note: '液滴计数双语化',
    from: `          {withFat ? '1 drop' : added ? 'many drops' : '—'}`,
    to: `          {withFat ? <T value={BILE_EMULSIFICATION.oneDrop} /> : added ? <T value={BILE_EMULSIFICATION.manyDrops} /> : '—'}`,
  },

  // ------------------------------------------------------------------
  // DigestionFlow.tsx：术语标题 / figcaption / img alt 双语
  // ------------------------------------------------------------------
  {
    file: 'DigestionFlow.tsx',
    note: 'import += useBilingualText',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText } from '../../simulations/mmx/T'`,
  },
  {
    file: 'DigestionFlow.tsx',
    note: '读取双语 figureAlt',
    from: `export function DigestionFlow({ extra }: { extra: DigestionFlowExtra }) {
  const [openId, setOpenId] = useState<string | null>(null)`,
    to: `export function DigestionFlow({ extra }: { extra: DigestionFlowExtra }) {
  const figureAlt = useBilingualText(DIGESTION_FLOW.figureAlt)
  const [openId, setOpenId] = useState<string | null>(null)`,
  },
  {
    file: 'DigestionFlow.tsx',
    note: 'img alt 双语化',
    from: `alt="How an animal deals with food — a mammal's four-stage food journey"`,
    to: `alt={figureAlt}`,
  },
  {
    file: 'DigestionFlow.tsx',
    note: 'figcaption 双语化',
    from: `          G8 Science · p.11, Figure B5.02 · ingestion → digestion → absorption → egestion`,
    to: `          <T value={DIGESTION_FLOW.figureCaption} />`,
  },
  {
    file: 'DigestionFlow.tsx',
    note: '六个术语标题双语化',
    from: `          The six terms the syllabus uses`,
    to: `          <T value={DIGESTION_FLOW.sixTermsHeading} />`,
  },

  // ------------------------------------------------------------------
  // DigestiveAnatomy.tsx：alt / figcaption / 热点 tooltip 双语
  // ------------------------------------------------------------------
  {
    file: 'DigestiveAnatomy.tsx',
    note: 'import += useBilingualText / useMmxLang',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText, useMmxLang } from '../../simulations/mmx/T'`,
  },
  {
    file: 'DigestiveAnatomy.tsx',
    note: 'FigureWithHotspots 读取语言与双语 figureAlt',
    from: `  const followTarget = orderedForFollow[Math.min(followStep, Math.max(0, orderedForFollow.length - 1))]
  const followHotspot = followTarget ? HOTSPOTS[followTarget.id] : null`,
    to: `  const lang = useMmxLang()
  const figureAlt = useBilingualText(DIGESTIVE_ANATOMY.figureAlt)
  const followTarget = orderedForFollow[Math.min(followStep, Math.max(0, orderedForFollow.length - 1))]
  const followHotspot = followTarget ? HOTSPOTS[followTarget.id] : null`,
  },
  {
    file: 'DigestiveAnatomy.tsx',
    note: 'img alt 双语化',
    from: `alt="The human digestive system"`,
    to: `alt={figureAlt}`,
  },
  {
    file: 'DigestiveAnatomy.tsx',
    note: 'figcaption 双语化',
    from: `        G8 Science · p.14, Figure B5.08 · click an organ to read about it`,
    to: `        <T value={DIGESTIVE_ANATOMY.figureCaption} />`,
  },
  {
    file: 'DigestiveAnatomy.tsx',
    note: '热点 tooltip 标签按当前语言显示',
    from: `              label={o.name.en}`,
    to: `              label={lang === 'zh' ? (o.name.zh ?? o.name.en) : o.name.en}`,
  },

  // ------------------------------------------------------------------
  // HeartAnatomy.tsx：alt / figcaption / 热点 tooltip / 3D 加载文案双语
  // ------------------------------------------------------------------
  {
    file: 'HeartAnatomy.tsx',
    note: 'import += useBilingualText / useMmxLang',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText, useMmxLang } from '../../simulations/mmx/T'`,
  },
  {
    file: 'HeartAnatomy.tsx',
    note: '3D 加载文案双语化',
    from: `      Loading 3D viewer…`,
    to: `      <T value={HEART_ANATOMY.loading3d} />`,
  },
  {
    file: 'HeartAnatomy.tsx',
    note: 'FigureWithHotspots 读取语言与双语 figureAlt',
    from: `  const followTarget = orderedForFollow[Math.min(followStep, Math.max(0, orderedForFollow.length - 1))]
  const followHotspot = followTarget ? HOTSPOTS[followTarget.id] : null`,
    to: `  const lang = useMmxLang()
  const figureAlt = useBilingualText(HEART_ANATOMY.figureAlt)
  const followTarget = orderedForFollow[Math.min(followStep, Math.max(0, orderedForFollow.length - 1))]
  const followHotspot = followTarget ? HOTSPOTS[followTarget.id] : null`,
  },
  {
    file: 'HeartAnatomy.tsx',
    note: 'img alt 双语化',
    from: `alt="Vertical section through a human heart"`,
    to: `alt={figureAlt}`,
  },
  {
    file: 'HeartAnatomy.tsx',
    note: 'figcaption 双语化',
    from: `        G8 Science · p.23, Figure B7.03 · click a part to read about it`,
    to: `        <T value={HEART_ANATOMY.figureCaption} />`,
  },
  {
    file: 'HeartAnatomy.tsx',
    note: '热点 tooltip 标签按当前语言显示',
    from: `              label={p.name.en}`,
    to: `              label={lang === 'zh' ? (p.name.zh ?? p.name.en) : p.name.en}`,
  },

  // ------------------------------------------------------------------
  // AirwayPathway.tsx：alt / figcaption / 热点 tooltip 双语
  // ------------------------------------------------------------------
  {
    file: 'AirwayPathway.tsx',
    note: 'import += useBilingualText / useMmxLang',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText, useMmxLang } from '../../simulations/mmx/T'`,
  },
  {
    file: 'AirwayPathway.tsx',
    note: 'FigureWithHotspots 读取语言与双语 figureAlt',
    from: `  const followTarget = orderedForFollow[Math.min(followStep, Math.max(0, orderedForFollow.length - 1))]
  const followHotspot = followTarget ? HOTSPOTS[followTarget.id] : null`,
    to: `  const lang = useMmxLang()
  const figureAlt = useBilingualText(AIRWAY_PATHWAY.figureAlt)
  const followTarget = orderedForFollow[Math.min(followStep, Math.max(0, orderedForFollow.length - 1))]
  const followHotspot = followTarget ? HOTSPOTS[followTarget.id] : null`,
  },
  {
    file: 'AirwayPathway.tsx',
    note: 'img alt 双语化',
    from: `alt="Front view of the human thorax showing the gas-exchange system"`,
    to: `alt={figureAlt}`,
  },
  {
    file: 'AirwayPathway.tsx',
    note: 'figcaption 双语化',
    from: `        G8 Science · p.36, Figure B8.01 · click a part to read about it`,
    to: `        <T value={AIRWAY_PATHWAY.figureCaption} />`,
  },
  {
    file: 'AirwayPathway.tsx',
    note: '热点 tooltip 标签按当前语言显示',
    from: `              label={p.name.en}`,
    to: `              label={lang === 'zh' ? (p.name.zh ?? p.name.en) : p.name.en}`,
  },

  // ------------------------------------------------------------------
  // Anatomy3D.tsx：3D 热点 aria-label 按当前语言显示
  // ------------------------------------------------------------------
  {
    file: 'Anatomy3D.tsx',
    note: 'import += useMmxLang',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useMmxLang } from '../../simulations/mmx/T'`,
  },
  {
    file: 'Anatomy3D.tsx',
    note: 'ModelWithHotspots 读取当前语言',
    from: `  const gltf = useGLTF(modelUrl)`,
    to: `  const lang = useMmxLang()
  const gltf = useGLTF(modelUrl)`,
  },
  {
    file: 'Anatomy3D.tsx',
    note: '热点 aria-label 按当前语言显示',
    from: `              aria-label={p.name.en}`,
    to: `              aria-label={lang === 'zh' ? (p.name.zh ?? p.name.en) : p.name.en}`,
  },

  // ------------------------------------------------------------------
  // EnergyNeeds.tsx：表头双语
  // ------------------------------------------------------------------
  {
    file: 'EnergyNeeds.tsx',
    note: 'import += ENERGY_NEEDS 字符串',
    from: `import type { EnergyNeedsExtra } from './types'`,
    to: `import type { EnergyNeedsExtra } from './types'
import { ENERGY_NEEDS } from './lessonExtrasStrings'`,
  },
  {
    file: 'EnergyNeeds.tsx',
    note: '表头双语化',
    from: `              <th className="px-3 py-2 text-left">Who</th>
              <th className="px-3 py-2 text-left">Activity</th>
              <th className="px-3 py-2 text-right">kJ / day</th>
              <th className="px-3 py-2 text-left">Relative</th>`,
    to: `              <th className="px-3 py-2 text-left"><T value={ENERGY_NEEDS.colWho} /></th>
              <th className="px-3 py-2 text-left"><T value={ENERGY_NEEDS.colActivity} /></th>
              <th className="px-3 py-2 text-right"><T value={ENERGY_NEEDS.colEnergy} /></th>
              <th className="px-3 py-2 text-left"><T value={ENERGY_NEEDS.colRelative} /></th>`,
  },

  // ------------------------------------------------------------------
  // BloodComponents.tsx：小标题双语 / img alt 按当前语言
  // ------------------------------------------------------------------
  {
    file: 'BloodComponents.tsx',
    note: 'import += useMmxLang 与 BLOOD_COMPONENTS 字符串',
    from: `import { T } from '../../simulations/mmx/T'
import type { BloodComponentsExtra } from './types'`,
    to: `import { T, useMmxLang } from '../../simulations/mmx/T'
import type { BloodComponentsExtra } from './types'
import { BLOOD_COMPONENTS } from './lessonExtrasStrings'`,
  },
  {
    file: 'BloodComponents.tsx',
    note: '读取当前语言',
    from: `export function BloodComponents({ extra }: { extra: BloodComponentsExtra }) {
  return (`,
    to: `export function BloodComponents({ extra }: { extra: BloodComponentsExtra }) {
  const lang = useMmxLang()
  return (`,
  },
  {
    file: 'BloodComponents.tsx',
    note: 'img alt 按当前语言显示',
    from: `              alt={c.term.en}`,
    to: `              alt={lang === 'zh' ? (c.term.zh ?? c.term.en) : c.term.en}`,
  },
  {
    file: 'BloodComponents.tsx',
    note: 'Function 小标题双语化',
    from: `                  Function`,
    to: `                  <T value={BLOOD_COMPONENTS.functionLabel} />`,
  },
  {
    file: 'BloodComponents.tsx',
    note: 'Appearance / location 小标题双语化',
    from: `                  Appearance / location`,
    to: `                  <T value={BLOOD_COMPONENTS.appearanceLabel} />`,
  },

  // ------------------------------------------------------------------
  // DiseaseCards.tsx：小标题双语 / img alt 按当前语言
  // ------------------------------------------------------------------
  {
    file: 'DiseaseCards.tsx',
    note: 'import += useMmxLang 与 DISEASE_CARDS 字符串',
    from: `import { T } from '../../simulations/mmx/T'
import type { DiseaseCardsExtra } from './types'`,
    to: `import { T, useMmxLang } from '../../simulations/mmx/T'
import type { DiseaseCardsExtra } from './types'
import { DISEASE_CARDS } from './lessonExtrasStrings'`,
  },
  {
    file: 'DiseaseCards.tsx',
    note: '读取当前语言',
    from: `export function DiseaseCards({ extra }: { extra: DiseaseCardsExtra }) {
  return (`,
    to: `export function DiseaseCards({ extra }: { extra: DiseaseCardsExtra }) {
  const lang = useMmxLang()
  return (`,
  },
  {
    file: 'DiseaseCards.tsx',
    note: 'img alt 按当前语言显示',
    from: `              alt={c.term.en}`,
    to: `              alt={lang === 'zh' ? (c.term.zh ?? c.term.en) : c.term.en}`,
  },
  {
    file: 'DiseaseCards.tsx',
    note: 'How / why 小标题双语化',
    from: `                  How / why`,
    to: `                  <T value={DISEASE_CARDS.mechanismLabel} />`,
  },
  {
    file: 'DiseaseCards.tsx',
    note: 'What it looks like 小标题双语化',
    from: `                  What it looks like`,
    to: `                  <T value={DISEASE_CARDS.clinicalLabel} />`,
  },

  // ------------------------------------------------------------------
  // BloodVesselsCompare.tsx：血管横切面 alt 双语
  // ------------------------------------------------------------------
  {
    file: 'BloodVesselsCompare.tsx',
    note: 'import += useMmxLang',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useMmxLang } from '../../simulations/mmx/T'`,
  },
  {
    file: 'BloodVesselsCompare.tsx',
    note: 'VesselCard 解析当前语言的血管名',
    from: `function VesselCard({ vessel }: { vessel: BloodVesselsCompareExtra['vessels'][number] }) {
  return (`,
    to: `function VesselCard({ vessel }: { vessel: BloodVesselsCompareExtra['vessels'][number] }) {
  const lang = useMmxLang()
  const name = typeof vessel.name === 'string' ? vessel.name : lang === 'zh' ? (vessel.name.zh ?? vessel.name.en) : vessel.name.en
  return (`,
  },
  {
    file: 'BloodVesselsCompare.tsx',
    note: 'img alt 双语化',
    from: `          alt={\`Cross-section of a \${typeof vessel.name === 'string' ? vessel.name : vessel.name.en}\`}`,
    to: `          alt={lang === 'zh' ? \`\${name}的横切面\` : \`Cross-section of a \${name}\`}`,
  },

  // ------------------------------------------------------------------
  // GasExchangeFeatures.tsx：img alt 按当前语言
  // ------------------------------------------------------------------
  {
    file: 'GasExchangeFeatures.tsx',
    note: 'import += useMmxLang',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useMmxLang } from '../../simulations/mmx/T'`,
  },
  {
    file: 'GasExchangeFeatures.tsx',
    note: '读取当前语言',
    from: `export function GasExchangeFeatures({ extra }: { extra: GasExchangeFeaturesExtra }) {
  return (`,
    to: `export function GasExchangeFeatures({ extra }: { extra: GasExchangeFeaturesExtra }) {
  const lang = useMmxLang()
  return (`,
  },
  {
    file: 'GasExchangeFeatures.tsx',
    note: 'img alt 按当前语言显示',
    from: `              alt={f.term.en}`,
    to: `              alt={lang === 'zh' ? (f.term.zh ?? f.term.en) : f.term.en}`,
  },

  // ------------------------------------------------------------------
  // SmokingEffects.tsx：hero alt / 卡片 alt 双语
  // ------------------------------------------------------------------
  {
    file: 'SmokingEffects.tsx',
    note: 'import += useBilingualText / useMmxLang',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText, useMmxLang } from '../../simulations/mmx/T'`,
  },
  {
    file: 'SmokingEffects.tsx',
    note: '读取双语 heroAlt',
    from: `export function SmokingEffects({ extra }: { extra: SmokingEffectsExtra }) {
  return (`,
    to: `export function SmokingEffects({ extra }: { extra: SmokingEffectsExtra }) {
  const heroAlt = useBilingualText(SMOKING_EFFECTS.heroAlt)
  return (`,
  },
  {
    file: 'SmokingEffects.tsx',
    note: 'hero img alt 双语化',
    from: `            alt={SMOKING_EFFECTS.heroAlt.en}`,
    to: `            alt={heroAlt}`,
  },
  {
    file: 'SmokingEffects.tsx',
    note: 'EffectCard 读取当前语言',
    from: `function EffectCard({ entry }: { entry: SmokingEffectEntry }) {
  return (`,
    to: `function EffectCard({ entry }: { entry: SmokingEffectEntry }) {
  const lang = useMmxLang()
  return (`,
  },
  {
    file: 'SmokingEffects.tsx',
    note: '卡片 img alt 按当前语言显示',
    from: `          alt={entry.term.en}`,
    to: `          alt={lang === 'zh' ? (entry.term.zh ?? entry.term.en) : entry.term.en}`,
  },

  // ------------------------------------------------------------------
  // DoubleCirculation.tsx：img alt 双语 / 循环行标签经 <T>
  // ------------------------------------------------------------------
  {
    file: 'DoubleCirculation.tsx',
    note: 'import += useBilingualText',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText } from '../../simulations/mmx/T'`,
  },
  {
    file: 'DoubleCirculation.tsx',
    note: '读取双语 figureAlt',
    from: `export function DoubleCirculation({ extra }: { extra: DoubleCirculationExtra }) {
  const [openId, setOpenId] = useState<string | null>(null)`,
    to: `export function DoubleCirculation({ extra }: { extra: DoubleCirculationExtra }) {
  const figureAlt = useBilingualText(DOUBLE_CIRCULATION.figureAlt)
  const [openId, setOpenId] = useState<string | null>(null)`,
  },
  {
    file: 'DoubleCirculation.tsx',
    note: 'img alt 双语化',
    from: `alt="The double circulation of a human"`,
    to: `alt={figureAlt}`,
  },
  {
    file: 'DoubleCirculation.tsx',
    note: '循环行标签按当前语言显示（不再恒显英文+中文）',
    from: `        <span className="text-[10px] font-semibold uppercase tracking-wide text-ink">
          {rowLabel.en}
        </span>
        {rowLabel.zh && <span className="text-[10px] text-muted">{rowLabel.zh}</span>}`,
    to: `        <span className="text-[10px] font-semibold uppercase tracking-wide text-ink">
          <T value={rowLabel} />
        </span>`,
  },

  // ------------------------------------------------------------------
  // VillusDetail.tsx：alt / figcaption / 营养去向标题双语
  // ------------------------------------------------------------------
  {
    file: 'VillusDetail.tsx',
    note: 'import += useBilingualText 与 VILLUS_DETAIL 字符串',
    from: `import { T } from '../../simulations/mmx/T'`,
    to: `import { T, useBilingualText } from '../../simulations/mmx/T'
import { VILLUS_DETAIL } from './lessonExtrasStrings'`,
  },
  {
    file: 'VillusDetail.tsx',
    note: '读取双语 figureAlt / microvilliAlt',
    from: `export function VillusDetail({ extra }: { extra: VillusDetailExtra }) {
  const [selectedId, setSelectedId] = useState<string | null>(null)`,
    to: `export function VillusDetail({ extra }: { extra: VillusDetailExtra }) {
  const figureAlt = useBilingualText(VILLUS_DETAIL.figureAlt)
  const microvilliAlt = useBilingualText(VILLUS_DETAIL.microvilliAlt)
  const [selectedId, setSelectedId] = useState<string | null>(null)`,
  },
  {
    file: 'VillusDetail.tsx',
    note: '绒毛图 alt 双语化',
    from: `alt="Longitudinal section through a villus"`,
    to: `alt={figureAlt}`,
  },
  {
    file: 'VillusDetail.tsx',
    note: '绒毛图 figcaption 双语化',
    from: `          G8 Science · p.16, Figure B5.09 · labelled cross-section of a single villus`,
    to: `          <T value={VILLUS_DETAIL.figureCaption} />`,
  },
  {
    file: 'VillusDetail.tsx',
    note: '微绒毛图 alt 双语化',
    from: `alt="Detail of the surface of a villus — microvilli on each epithelial cell"`,
    to: `alt={microvilliAlt}`,
  },
  {
    file: 'VillusDetail.tsx',
    note: '微绒毛图 figcaption 双语化',
    from: `            G8 Science · p.17, Figure B5.10 · microvilli on the surface of a single epithelial cell`,
    to: `            <T value={VILLUS_DETAIL.microvilliCaption} />`,
  },
  {
    file: 'VillusDetail.tsx',
    note: '营养去向标题双语化（复用 transportTitle）',
    from: `        Where each nutrient goes`,
    to: `        <T value={VILLUS_DETAIL.transportTitle} />`,
  },
];

/** 应用全部补丁；任何 from 不是恰好出现一次立即 throw。 */
function applyPatches() {
  for (const p of PATCHES) {
    const abs = join(DEST, p.file);
    const text = readFileSync(abs, 'utf8');
    const count = text.split(p.from).length - 1;
    if (count !== 1) {
      throw new Error(
        `[patch] ${p.file}：补丁失效（${p.note}）——from 片段出现 ${count} 次（期望 1 次）。` +
          `源文件可能已变动，请同步更新 scripts/port-mmx-extras.mjs 的 PATCHES。`,
      );
    }
    writeFileSync(abs, text.replace(p.from, p.to));
    console.log('[patch]', p.file, '—', p.note);
  }
}

rmSync(DEST, { recursive: true, force: true });
mkdirSync(DEST, { recursive: true });

// 全部 extras 组件（含 LessonExtras 分发器与 lazy 的 Anatomy3D）
for (const file of readdirSync(REF_EXTRAS)) {
  if (!file.endsWith('.tsx')) continue;
  port(join(REF_EXTRAS, file), join(DEST, file), `src/components/lesson-extras/${file}`);
}

// UI 字符串（按钮 / 空状态文案，Bilingual 数据）
port(
  join(REF_LIB, 'lessonExtrasStrings.ts'),
  join(DEST, 'lessonExtrasStrings.ts'),
  'src/lib/lessonExtrasStrings.ts',
);

// LessonExtra 联合类型段落：从源 content/types.ts 的 "Lesson extras" 节抽取。
// 该节只引用 Bilingual（与本节内部类型），Bilingual 改由 igcse-kernels types 引入。
// 类型落在 content 层（src/content/extras-types.ts）：content/types.ts 直接引用，
// 消除 content→components 反向依赖；DEST/types.ts 仅写 re-export 垫片。
const typesText = readFileSync(REF_TYPES, 'utf8');
const marker = '// Lesson extras — visual / interactive learning modules';
const markerIdx = typesText.indexOf(marker);
if (markerIdx === -1) throw new Error('未找到 Lesson extras 类型段落标记');
// 回退到标记前的分隔注释行（// ----...）
const sepIdx = typesText.lastIndexOf('// ----', markerIdx);
const section = typesText.slice(sepIdx).trimEnd() + '\n';
if (/^import /m.test(section)) throw new Error('类型段落意外包含 import');
writeFileSync(
  resolve(import.meta.dirname, '../src/content/extras-types.ts'),
  '// 移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：src/content/types.ts（Lesson extras 类型段落，Bilingual 改由 igcse-kernels types 引入）\n' +
    '// 由 scripts/port-mmx-extras.mjs 生成（从源 content/types.ts 抽取），勿手改\n' +
    `import type { Bilingual } from '../simulations/igcse-kernels/types';\n\n` +
    `export type { Bilingual };\n\n` +
    section,
);
console.log('[port] LessonExtra 类型段落 → ../content/extras-types.ts');
writeFileSync(
  join(DEST, 'types.ts'),
  '// LessonExtra 类型已移至 content 层（src/content/extras-types.ts，由\n' +
    '// scripts/port-mmx-extras.mjs 生成）——content/types.ts 直接引用 content 层定义，\n' +
    '// 消除 content→components 的反向依赖。本文件仅为 re-export 垫片，\n' +
    '// 保持 extras 组件的 `./types` import 不变。\n' +
    `export * from '../../content/extras-types';\n`,
);
console.log('[port] types.ts re-export 垫片');

// PATCH 步骤：zh 本地化补丁（见文件头说明与 PATCHES 定义）
applyPatches();

console.log('完成。');
