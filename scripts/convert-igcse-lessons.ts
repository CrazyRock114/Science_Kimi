/**
 * IGCSE_miniMax 课程 → 本项目知识点模型的转换器。
 *
 * 用法：node scripts/convert-igcse-lessons.ts <subject>   例：0625
 *
 * 读取 .reference/IGCSE_miniMax（只读）src/content/lessons/<subject>/<slug>/
 * 下的 lesson.ts + narration.ts，生成：
 *   - src/content/knowledge/igcse/<subject>/<slug>.ts   知识点（头部注明勿手改）
 *   - src/content/knowledge/igcse/<subject>/meta.ts     轻量元数据（列表/搜索用，正文按需加载）
 *   - src/content/knowledge/igcse/<subject>/index.ts    学科聚合
 *   - src/simulations/igcse-kernels/<subject>/<slug>/{kernel.ts,kernel.test.ts}
 *     内核与内核测试原样复制（@/ import 改写为本项目 shim），共享依赖
 *     （@/lib/*、跨课 kernel）复制到 igcse-kernels/ 下对应位置。
 *   - src/content/knowledge/igcse-src/<subject>/<slug>/narration.ts
 *     讲解剧本原样复制（同内核复制模式），保留行级 action/latex/pause。
 *   - src/content/knowledge/igcse-src/<subject>/<slug>/equations.ts
 *     含 substitute 的 equations 以代码形式提取（substitute 函数源码保留，
 *     formatSigFigs 等依赖指向 igcse-kernels 下已复制的共享 lib）。
 *
 * 生成的课程文件 import 上述代码并适配：narration 经 adaptIgcseNarration 保留
 * 行级 lines/action/latex/pause；equations 的 substitute 经 igcseLiveFormulas
 * 接入 simulation.liveFormulas（ReadoutLiveFormula，以内核 readouts 代入）。
 * narration 的 concept/equation/worked-example/application 类 section 同时回写为
 * theory 教学正文（section title 作 heading、行文本作 paragraph、行内 latex 作
 * formula；intro/summary/interaction 类不回写，summary 原文也不再重复进 theory）。
 * simulation 完整转换为 simulation.mmx（SimSpec 内嵌 + 内核函数引用），
 * 由 simulations/mmx/MmxStage 渲染。
 *
 * 与 server/ 一致，直接用 node 运行 TS（需 Node >= 22.18 的类型剥离）。
 */
import * as esbuild from 'esbuild';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { igcseStatements } from '../src/content/syllabus/igcse-statements.ts';

const SUBJECT_MAP: Record<string, string> = {
  '0625': 'physics',
  '0620': 'chemistry',
  '0610': 'biology',
};

const REF_ROOT = resolve(import.meta.dirname, '../.reference/IGCSE_miniMax/src');
const KP_ROOT = resolve(import.meta.dirname, '../src/content/knowledge/igcse');
const KERNEL_ROOT = resolve(import.meta.dirname, '../src/simulations/igcse-kernels');
const SRC_ROOT = resolve(import.meta.dirname, '../src/content/knowledge/igcse-src');
const BUNDLE_CACHE = resolve(import.meta.dirname, '../node_modules/.cache/convert-igcse');

const statementIds = new Set(igcseStatements.map((s) => s.id));

/** JSON 序列化后替换为内核 import 标识符的占位符（函数无法 JSON 化） */
const KERNEL_REF_PLACEHOLDER = '__MMX_KERNEL_REF__';
/** JSON 序列化后替换为适配后讲解剧本表达式的占位符 */
const NARRATION_PLACEHOLDER = '__IGCSE_NARRATION__';
/** JSON 序列化后替换为 liveFormulas 表达式的占位符 */
const FORMULAS_PLACEHOLDER = '__IGCSE_LIVE_FORMULAS__';

// ---------------------------------------------------------------------------
// 类型（与 IGCSE_miniMax 的内容模型对应，仅转换所需字段）
// ---------------------------------------------------------------------------
interface Bilingual {
  en: string;
  zh?: string;
}
interface RefParamSpec {
  key: string;
  label: Bilingual;
  unit: string;
  min: number;
  max: number;
  step: number;
  default: number;
  symbol?: string;
  options?: Array<{ value: number; label: Bilingual }>;
  hidden?: boolean;
}
interface RefSimSpec {
  primitive: string;
  kernel: string;
  params: RefParamSpec[];
  readouts: Array<{
    key: string;
    label: Bilingual;
    unit: string;
    sigFigs: number;
    symbol?: string;
    exact?: boolean;
  }>;
  animate?: { param: string; speed: number; loop: number };
  draggable?: string[];
  presets?: Array<{ label: Bilingual; params: Record<string, number> }>;
  hint?: Bilingual;
  variant?: string;
}
interface RefLesson {
  slug: string;
  subject: string;
  syllabus: string[];
  tier: 'core' | 'extended';
  title: Bilingual;
  summary: Bilingual;
  objectives: Bilingual[];
  glossary: Array<{ en: string; zh: string; definition: Bilingual }>;
  equations: Array<{ latex: string; meaning: Bilingual; substitute?: unknown }>;
  sim?: RefSimSpec;
  narration: {
    id: string;
    sections: Array<{
      id: string;
      type: string;
      title: Bilingual;
      lines: Array<{ id: string; text: Bilingual; latex?: string; action?: unknown; pause?: number }>;
    }>;
  };
  checkpoints: Array<{
    id: string;
    syllabus: string[];
    tier: string;
    commandWord: string;
    marks: number;
    stem: string;
    options?: string[];
    answerIndex?: number;
    markScheme: Array<{ text: string; marks: number; alternatives?: string[] }>;
    examinerNote?: Bilingual;
  }>;
  extras?: Array<{ type: string }>;
}

interface Counters {
  substitutesRestored: number;
  substitutesUnattached: number;
  narrationActionsRestored: number;
  narrationLatexRestored: number;
  narrationPausesRestored: number;
  zhFallbacks: number;
  markSumMismatches: string[];
  unresolvedRefs: string[];
  extrasByType: Record<string, number>;
  kernelsCopied: number;
  kernelTestsCopied: number;
  simsConverted: number;
  narrationsCopied: number;
  equationsEmitted: number;
  theorySectionsWritten: number;
}

// ---------------------------------------------------------------------------
// 小工具
// ---------------------------------------------------------------------------

/** '0625.1.2.6' → '0625/1.2.6'（点格式 statement id → 本项目斜杠引用） */
function dotToSlash(id: string): string {
  return id.replace(/^(\d+)\./, '$1/');
}

/** slug → 合法导出名，如 '1-2-motion' → 'kp12Motion' */
function exportName(slug: string): string {
  const pascal = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  return `kp${pascal}`;
}

/** zh 缺失时回退 en 并计数 */
function zh(text: Bilingual, counters: Counters, what: string): string {
  if (text.zh && text.zh.trim() !== '') return text.zh;
  counters.zhFallbacks++;
  log(`  [warn] ${what} 缺少中文，已用英文填充`);
  return text.en;
}

function relImport(fromFile: string, toFileNoExt: string): string {
  let rel = relative(dirname(fromFile), toFileNoExt).split(sep).join('/');
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel;
}

const logs: string[] = [];
function log(msg: string) {
  logs.push(msg);
  console.log(msg);
}

// ---------------------------------------------------------------------------
// 内核复制（含共享依赖的递归复制与 import 改写）
// ---------------------------------------------------------------------------
const copiedSources = new Set<string>();

function copyWithImportRewrite(srcAbs: string, destAbs: string, counters: Counters) {
  if (copiedSources.has(srcAbs)) return;
  copiedSources.add(srcAbs);

  let text = readFileSync(srcAbs, 'utf8');
  mkdirSync(dirname(destAbs), { recursive: true });

  // 收集需要递归复制的 @/ 依赖，并改写 import 路径
  text = text.replace(/from '(@\/[^']+)'/g, (_m, spec: string) => {
    if (spec === '@/content/types') {
      return `from '${relImport(destAbs, join(KERNEL_ROOT, 'types'))}'`;
    }
    // 共享 lib：@/lib/units → igcse-kernels/lib/units.ts
    const libMatch = spec.match(/^@\/lib\/(.+)$/);
    if (libMatch) {
      const depSrc = join(REF_ROOT, 'lib', libMatch[1] + '.ts');
      const depDest = join(KERNEL_ROOT, 'lib', libMatch[1] + '.ts');
      copyWithImportRewrite(depSrc, depDest, counters);
      return `from '${relImport(destAbs, depDest.replace(/\.ts$/, ''))}'`;
    }
    // 跨课内核：@/content/lessons/0620/2-2-atomic-structure/kernel
    const lessonMatch = spec.match(/^@\/content\/lessons\/(.+)$/);
    if (lessonMatch) {
      const depSrc = join(REF_ROOT, 'content', 'lessons', lessonMatch[1] + '.ts');
      const depDest = join(KERNEL_ROOT, lessonMatch[1] + '.ts');
      copyWithImportRewrite(depSrc, depDest, counters);
      return `from '${relImport(destAbs, depDest.replace(/\.ts$/, ''))}'`;
    }
    throw new Error(`未处理的 @/ import: ${spec}（${srcAbs}）`);
  });

  const header = `// 原样复制自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：\n// ${relative(REF_ROOT, srcAbs).split(sep).join('/')}（import 路径由 convert-igcse-lessons.ts 改写）\n`;
  writeFileSync(destAbs, header + text);
}

function copyKernels(subject: string, slug: string, counters: Counters) {
  const srcDir = join(REF_ROOT, 'content', 'lessons', subject, slug);
  const destDir = join(KERNEL_ROOT, subject, slug);
  const kernelSrc = join(srcDir, 'kernel.ts');
  if (!existsSync(kernelSrc)) {
    log(`  [warn] ${slug} 无 kernel.ts，跳过内核复制`);
    return;
  }
  copyWithImportRewrite(kernelSrc, join(destDir, 'kernel.ts'), counters);
  counters.kernelsCopied++;
  const testSrc = join(srcDir, 'kernel.test.ts');
  if (existsSync(testSrc)) {
    copyWithImportRewrite(testSrc, join(destDir, 'kernel.test.ts'), counters);
    counters.kernelTestsCopied++;
  }
}

// ---------------------------------------------------------------------------
// 动态内容复制：narration.ts 原样复制 + equations 以代码形式提取
// ---------------------------------------------------------------------------

/**
 * 讲解剧本原样复制（同内核复制模式）：narration.ts 只引用 @/content/types 的
 * 类型，改写为 igcse-src 的 shim（types.ts）。行级 action/latex/pause 随之保留。
 */
function copyNarration(subject: string, slug: string, counters: Counters) {
  const srcAbs = join(REF_ROOT, 'content', 'lessons', subject, slug, 'narration.ts');
  if (!existsSync(srcAbs)) {
    log(`  [warn] ${slug} 无 narration.ts，跳过讲解复制`);
    return false;
  }
  const destAbs = join(SRC_ROOT, subject, slug, 'narration.ts');
  mkdirSync(dirname(destAbs), { recursive: true });
  const text = readFileSync(srcAbs, 'utf8')
    .replace(
      /from '@\/content\/types'/g,
      `from '${relImport(destAbs, join(SRC_ROOT, 'types'))}'`,
    )
    // 源项目个别剧本头注释中的音频路径已过期：本项目实际布局（见 NarrationPlayer）
    // 为 public/audio/narrations/{kpId}/{lang}/{lineId}.mp3，kpId 形如 igcse-0625-1-2-motion。
    .replace(
      /public\/audio\/\{en,zh\}\/[\w-]+\/<lineId>\.mp3/g,
      `public/audio/narrations/igcse-${subject}-${slug}/{en,zh}/<lineId>.mp3`,
    );
  if (/'@\//.test(text)) {
    throw new Error(`${slug}/narration.ts 含未处理的 @/ import`);
  }
  const header = `// 原样复制自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：\n// content/lessons/${subject}/${slug}/narration.ts（import 路径由 convert-igcse-lessons.ts 改写）\n`;
  writeFileSync(destAbs, header + text);
  counters.narrationsCopied++;
  return true;
}

/**
 * 含 substitute 的 equations 以代码形式提取为 igcse-src/<subject>/<slug>/equations.ts：
 * latex/meaning 直出 JSON，substitute 以函数源码保留（源课程中 substitute 只引用
 * formatSigFigs，指向 igcse-kernels 下已复制的共享 lib/units）。
 * 仅在课程有 sim（能提供内核 readouts）且存在 substitute 时生成。
 */
function emitEquations(lesson: RefLesson, subject: string, counters: Counters): boolean {
  const subs = lesson.equations.filter((eq) => typeof eq.substitute === 'function');
  counters.substitutesRestored += subs.length;
  if (subs.length === 0) return false;
  if (!lesson.sim) {
    counters.substitutesUnattached += subs.length;
    log(`  [warn] ${lesson.slug} 有 ${subs.length} 个 equation.substitute 但无 sim，无法接入 liveFormulas`);
    return false;
  }
  const destAbs = join(SRC_ROOT, subject, lesson.slug, 'equations.ts');
  mkdirSync(dirname(destAbs), { recursive: true });

  const fnSources = subs.map((eq) => (eq.substitute as () => string).toString());
  let formatImport = '';
  if (fnSources.some((src) => src.includes('formatSigFigs'))) {
    // 确保共享 lib/units 已复制（内核未引用时此处兜底）
    const libDest = join(KERNEL_ROOT, 'lib', 'units.ts');
    copyWithImportRewrite(join(REF_ROOT, 'lib', 'units.ts'), libDest, counters);
    formatImport = `import { formatSigFigs } from '${relImport(destAbs, libDest.replace(/\.ts$/, ''))}';\n`;
  }
  // 注意：不静态扫描 substitute 的自由标识符——生成的 equations.ts 交给 tsc
  // 检查（未定义标识符直接编译失败），另有单测逐课调用 substitute 验证可执行。

  const blocks = lesson.equations.map(
    (eq) =>
      `  {\n    latex: ${JSON.stringify(eq.latex)},\n    meaning: ${JSON.stringify(eq.meaning)},${
        typeof eq.substitute === 'function'
          ? `\n    substitute: ${(eq.substitute as () => string).toString()},`
          : ''
      }\n  },`,
  );
  const source = `// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/${subject}/${lesson.slug}/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '${relImport(destAbs, join(SRC_ROOT, 'types'))}';
${formatImport}
export const equations: EquationBlock[] = [
${blocks.join('\n')}
];
`;
  writeFileSync(destAbs, source);
  counters.equationsEmitted++;
  return true;
}

// ---------------------------------------------------------------------------
// lesson.ts 动态加载（esbuild 打包以解析 @/ 别名）
// ---------------------------------------------------------------------------
async function loadLesson(subject: string, slug: string): Promise<RefLesson> {
  mkdirSync(BUNDLE_CACHE, { recursive: true });
  const outfile = join(BUNDLE_CACHE, `${subject}-${slug}.mjs`);
  await esbuild.build({
    entryPoints: [join(REF_ROOT, 'content', 'lessons', subject, slug, 'lesson.ts')],
    outfile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent',
    plugins: [
      {
        name: 'at-alias',
        setup(build) {
          build.onResolve({ filter: /^@\// }, (args) => {
            const bare = join(REF_ROOT, args.path.slice(2));
            return { path: existsSync(bare) ? bare : bare + '.ts' };
          });
        },
      },
    ],
  });
  const mod = await import(pathToFileURL(outfile).href);
  return mod.default as RefLesson;
}

// ---------------------------------------------------------------------------
// 单课转换
// ---------------------------------------------------------------------------
interface ConvertedLesson {
  /** <slug>.ts 源文本 */
  source: string;
  /** 轻量元数据（汇入 <subject>/meta.ts） */
  meta: Record<string, unknown>;
}

function convertLesson(
  lesson: RefLesson,
  subject: string,
  counters: Counters,
  hasEquations: boolean,
): ConvertedLesson {
  const subjectName = SUBJECT_MAP[subject];
  if (!subjectName) throw new Error(`未知学科代码: ${subject}`);

  // 考纲引用：点格式 → 斜杠格式，并校验可解析
  const syllabusRefs = lesson.syllabus.map(dotToSlash);
  for (const ref of syllabusRefs) {
    if (!statementIds.has(ref)) counters.unresolvedRefs.push(`${lesson.slug}: ${ref}`);
  }

  // theory：objectives 列表 → narration 教学正文（concept/equation/worked-example/
  // application 类 section 回写：title 作 heading，每行文本作 paragraph，行内 latex
  // 作 formula 紧随其后；intro/summary/interaction 不回写，避免与 summary 字段重复、
  // 或把"拖动滑块看看"这类旁白指令写进正文）→ equations 公式块 → glossary 列表。
  // summary 原文不再放入 theory 首段（summary 字段已有，逐字重复）。
  const THEORY_SECTION_TYPES = new Set(['concept', 'equation', 'worked-example', 'application']);
  const theoryZh: unknown[] = [];
  const theoryEn: unknown[] = [];
  if (lesson.objectives.length > 0) {
    theoryZh.push({ type: 'heading', text: '学习目标' });
    theoryEn.push({ type: 'heading', text: 'Learning objectives' });
    theoryZh.push({
      type: 'list',
      items: lesson.objectives.map((o) => zh(o, counters, `${lesson.slug} objective`)),
    });
    theoryEn.push({ type: 'list', items: lesson.objectives.map((o) => o.en) });
  }
  for (const section of lesson.narration.sections) {
    if (!THEORY_SECTION_TYPES.has(section.type)) continue;
    theoryZh.push({ type: 'heading', text: zh(section.title, counters, `${lesson.slug} section ${section.id} title`) });
    theoryEn.push({ type: 'heading', text: section.title.en });
    for (const line of section.lines) {
      theoryZh.push({ type: 'paragraph', text: zh(line.text, counters, `${lesson.slug} line ${line.id}`) });
      theoryEn.push({ type: 'paragraph', text: line.text.en });
      if (line.latex) {
        theoryZh.push({ type: 'formula', latex: line.latex });
        theoryEn.push({ type: 'formula', latex: line.latex });
      }
    }
    counters.theorySectionsWritten++;
  }
  for (const eq of lesson.equations) {
    theoryZh.push({ type: 'formula', latex: eq.latex, caption: zh(eq.meaning, counters, `${lesson.slug} equation meaning`) });
    theoryEn.push({ type: 'formula', latex: eq.latex, caption: eq.meaning.en });
  }
  if (lesson.glossary.length > 0) {
    theoryZh.push({ type: 'heading', text: '术语表' });
    theoryEn.push({ type: 'heading', text: 'Glossary' });
    theoryZh.push({
      type: 'list',
      items: lesson.glossary.map(
        (t) => `${t.en}（${t.zh}）：${zh(t.definition, counters, `${lesson.slug} glossary ${t.en}`)}`,
      ),
    });
    theoryEn.push({
      type: 'list',
      items: lesson.glossary.map((t) => `${t.en} (${t.zh}): ${t.definition.en}`),
    });
  }

  // narration：剧本原样复制到 igcse-src（见 copyNarration），生成的课程文件经
  // adaptIgcseNarration 适配并保留行级 action/latex/pause；此处只统计恢复量与中文回退。
  for (const section of lesson.narration.sections) {
    if (!section.title.zh || section.title.zh.trim() === '') counters.zhFallbacks++;
    for (const line of section.lines) {
      if (!line.text.zh || line.text.zh.trim() === '') counters.zhFallbacks++;
      if (line.action) counters.narrationActionsRestored++;
      if (line.latex) counters.narrationLatexRestored++;
      if (line.pause) counters.narrationPausesRestored++;
    }
  }

  // checkpoints → examPractice
  const examPractice = lesson.checkpoints.map((q) => {
    const sum = q.markScheme.reduce((s, mp) => s + mp.marks, 0);
    if (sum !== q.marks) counters.markSumMismatches.push(`${q.id}: marks=${q.marks} sum=${sum}`);
    if (q.tier !== 'core' && q.tier !== 'extended') {
      log(`  [warn] ${q.id} 未知 tier: ${q.tier}，按 core 处理`);
    }
    return {
      id: q.id,
      syllabus: q.syllabus.map(dotToSlash),
      tier: q.tier === 'extended' ? 'supplement' : 'core',
      commandWord: q.commandWord,
      marks: q.marks,
      stem: q.stem,
      ...(q.options ? { options: q.options, answerIndex: q.answerIndex } : {}),
      markScheme: q.markScheme.map((mp) => ({
        text: mp.text,
        marks: mp.marks,
        ...(mp.alternatives ? { alternatives: mp.alternatives } : {}),
      })),
      ...(q.examinerNote
        ? { examinerNote: { zh: zh(q.examinerNote, counters, `${q.id} examinerNote`), en: q.examinerNote.en } }
        : {}),
    };
  });

  for (const extra of lesson.extras ?? []) {
    counters.extrasByType[extra.type] = (counters.extrasByType[extra.type] ?? 0) + 1;
  }

  // extras：数据驱动交互模块（解剖探索器 / 流程图等）。源数据为纯 JSON
  // （Bilingual/数值/图片路径，无函数），直出；由 components/lesson-extras 渲染。
  const extras = lesson.extras && lesson.extras.length > 0 ? lesson.extras : undefined;

  const kp = {
    id: `igcse-${subject}-${lesson.slug}`,
    subject: subjectName,
    tier: lesson.tier,
    title: { zh: zh(lesson.title, counters, `${lesson.slug} title`), en: lesson.title.en },
    summary: { zh: zh(lesson.summary, counters, `${lesson.slug} summary`), en: lesson.summary.en },
    gradeTier: 'both',
    syllabus: { igcse: syllabusRefs },
    keywords: {
      zh: lesson.glossary.map((t) => t.zh),
      en: lesson.glossary.map((t) => t.en),
    },
    theory: { zh: theoryZh, en: theoryEn },
    quiz: [],
    examPractice,
    narration: NARRATION_PLACEHOLDER,
  };

  if (kp.keywords.zh.length === 0) {
    log(`  [warn] ${lesson.slug} glossary 为空，keywords 用标题填充`);
    kp.keywords.zh = [kp.title.zh];
    kp.keywords.en = [kp.title.en];
  }

  // simulation：完整 SimSpec 嵌入 simulation.mmx.spec，内核以函数引用挂 mmx.kernel
  // （占位符在 JSON 序列化后替换为 import 的内核标识符）。
  // params 全量映射（含 options 离散与 hidden 参数：本站完整性测试要求预设引用的
  // 每个 key 都在 params 中）；离散/隐藏参数在 mmx 模式下由 MmxStage 自管渲染。
  // presets 同时映射为本站 Preset（PresetBar 渲染）并保留在 spec 中。
  // 含 substitute 的 equations 经 igcseLiveFormulas 接入 liveFormulas
  // （ReadoutLiveFormula，substitute 接收内核 readouts；占位符同样后替换）。
  const outFile = join(KP_ROOT, subject, `${lesson.slug}.ts`);
  let kernelImport = '';
  let simulation: unknown;
  let presets: unknown;
  if (lesson.sim) {
    const kernelDest = join(KERNEL_ROOT, subject, lesson.slug, 'kernel.ts');
    if (!existsSync(kernelDest)) {
      throw new Error(`${lesson.slug} 声明了 sim 但内核不存在: ${kernelDest}`);
    }
    const sim = lesson.sim;
    simulation = {
      renderer: 'mmx',
      params: sim.params.map((p) => ({
        key: p.key,
        label: { zh: zh(p.label, counters, `${lesson.slug} param ${p.key}`), en: p.label.en },
        min: p.min,
        max: p.max,
        step: p.step,
        defaultValue: p.default,
        unit: p.unit,
      })),
      mmx: { spec: sim, kernel: KERNEL_REF_PLACEHOLDER },
      ...(hasEquations ? { liveFormulas: FORMULAS_PLACEHOLDER } : {}),
    };
    if (sim.presets && sim.presets.length > 0) {
      presets = sim.presets.map((p, i) => ({
        id: `preset-${i + 1}`,
        name: { zh: zh(p.label, counters, `${lesson.slug} preset ${i + 1}`), en: p.label.en },
        params: p.params,
      }));
    }
    kernelImport = `import kernel from '${relImport(outFile, join(KERNEL_ROOT, subject, lesson.slug, 'kernel'))}';\n`;
    counters.simsConverted++;
  }

  const kpOut = {
    ...kp,
    ...(simulation ? { simulation } : {}),
    ...(presets ? { presets } : {}),
    ...(extras ? { extras } : {}),
  };
  const json = JSON.stringify(kpOut, null, 2)
    .replace(`"${KERNEL_REF_PLACEHOLDER}"`, 'kernel')
    .replace(`"${NARRATION_PLACEHOLDER}"`, 'adaptIgcseNarration(narration)')
    .replace(`"${FORMULAS_PLACEHOLDER}"`, 'igcseLiveFormulas(equations)');
  // 轻量元数据：列表/搜索/筛选所需的字段，不含 theory/quiz/examPractice/simulation。
  // 首页与学科列表页只加载 meta，课程正文经 getKnowledgePoint 按课动态 import。
  const meta = {
    id: kp.id,
    subject: kp.subject,
    tier: kp.tier,
    title: kp.title,
    summary: kp.summary,
    gradeTier: kp.gradeTier,
    syllabus: kp.syllabus,
    keywords: kp.keywords,
    hasSimulation: simulation !== undefined,
    hasExamPractice: examPractice.length > 0,
    hasNarration: lesson.narration.sections.length > 0,
    hasExtras: extras !== undefined,
  };
  const narrationImport = `import narration from '${relImport(outFile, join(SRC_ROOT, subject, lesson.slug, 'narration'))}';\n`;
  const adaptImport = `import { adaptIgcseNarration${hasEquations ? ', igcseLiveFormulas' : ''} } from '${relImport(outFile, join(SRC_ROOT, 'adapt'))}';\n`;
  const equationsImport = hasEquations
    ? `import { equations } from '${relImport(outFile, join(SRC_ROOT, subject, lesson.slug, 'equations'))}';\n`
    : '';
  return {
    meta,
    source: `/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/${subject}/${lesson.slug}
 */
import type { KnowledgePoint } from '../../../types';
${adaptImport}${narrationImport}${equationsImport}${kernelImport}
export const ${exportName(lesson.slug)}: KnowledgePoint = ${json};
`,
  };
}

// ---------------------------------------------------------------------------
// 主流程
// ---------------------------------------------------------------------------
async function main() {
  const subject = process.argv[2];
  if (!subject || !SUBJECT_MAP[subject]) {
    console.error('用法: node scripts/convert-igcse-lessons.ts <subject>（0625 / 0620 / 0610）');
    process.exit(2);
  }
  const lessonsDir = join(REF_ROOT, 'content', 'lessons', subject);
  if (!existsSync(lessonsDir)) {
    console.error(`找不到课程目录: ${lessonsDir}`);
    process.exit(1);
  }

  const counters: Counters = {
    substitutesRestored: 0,
    substitutesUnattached: 0,
    narrationActionsRestored: 0,
    narrationLatexRestored: 0,
    narrationPausesRestored: 0,
    zhFallbacks: 0,
    markSumMismatches: [],
    unresolvedRefs: [],
    extrasByType: {},
    kernelsCopied: 0,
    kernelTestsCopied: 0,
    simsConverted: 0,
    narrationsCopied: 0,
    equationsEmitted: 0,
    theorySectionsWritten: 0,
  };

  const outDir = join(KP_ROOT, subject);
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  const srcOutDir = join(SRC_ROOT, subject);
  rmSync(srcOutDir, { recursive: true, force: true });
  mkdirSync(srcOutDir, { recursive: true });

  const slugs = readdirSync(lessonsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  let converted = 0;
  let questionCount = 0;
  let mcqCount = 0;
  const names: Array<{ slug: string; name: string }> = [];
  const metas: Array<Record<string, unknown>> = [];
  for (const slug of slugs) {
    try {
      const lesson = await loadLesson(subject, slug);
      // 先复制内核：convertLesson 会为声明了 sim 的课校验内核文件已存在
      copyKernels(subject, slug, counters);
      // 动态内容：讲解剧本原样复制；含 substitute 的 equations 提取为代码
      copyNarration(subject, slug, counters);
      const hasEquations = emitEquations(lesson, subject, counters);
      const { source, meta } = convertLesson(lesson, subject, counters, hasEquations);
      writeFileSync(join(outDir, `${slug}.ts`), source);
      questionCount += lesson.checkpoints.length;
      mcqCount += lesson.checkpoints.filter((q) => q.options).length;
      names.push({ slug, name: exportName(slug) });
      metas.push(meta);
      converted++;
      log(`[ok] ${slug}（checkpoints=${lesson.checkpoints.length}，narration sections=${lesson.narration.sections.length}）`);
    } catch (err) {
      log(`[fail] ${slug}: ${err instanceof Error ? err.message : err}`);
    }
  }

  // 轻量元数据聚合 meta.ts（不 import 课程正文，供首页/列表页静态加载）
  const metaSource = `// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
import type { KnowledgePointMeta } from '../../../types';

/** IGCSE ${subject} 转换课程轻量元数据（${metas.length} 课；正文经 getKnowledgePoint 按课懒加载） */
export const igcse${subject}Metas: KnowledgePointMeta[] = ${JSON.stringify(metas, null, 2)};
`;
  writeFileSync(join(outDir, 'meta.ts'), metaSource);

  // 学科聚合 index.ts
  const indexSource = `// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
import type { KnowledgePoint } from '../../../types';
${names.map((n) => `import { ${n.name} } from './${n.slug}';`).join('\n')}

/** IGCSE ${subject} 转换课程（${names.length} 课） */
export const igcse${subject}KnowledgePoints: KnowledgePoint[] = [
${names.map((n) => `  ${n.name},`).join('\n')}
];
`;
  writeFileSync(join(outDir, 'index.ts'), indexSource);

  console.log('\n===== 转换汇总 =====');
  console.log(`学科 ${subject}（${SUBJECT_MAP[subject]}）：成功 ${converted}/${slugs.length} 课`);
  console.log(`考试题 ${questionCount} 道（MCQ ${mcqCount} 道）`);
  console.log(`恢复动态内容：equation.substitute ${counters.substitutesRestored} 个（无 sim 未接入 ${counters.substitutesUnattached} 个），narration action ${counters.narrationActionsRestored} 个、latex ${counters.narrationLatexRestored} 个、pause ${counters.narrationPausesRestored} 个`);
  console.log(`中文缺失回退英文：${counters.zhFallbacks} 处`);
  console.log(`内核复制：kernel.ts ${counters.kernelsCopied} 个，kernel.test.ts ${counters.kernelTestsCopied} 个（含共享依赖，总文件数 ${copiedSources.size}）`);
  console.log(`讲解复制：narration.ts ${counters.narrationsCopied} 个；equations.ts ${counters.equationsEmitted} 个`);
  console.log(`theory 正文回写：narration section ${counters.theorySectionsWritten} 个（concept/equation/worked-example/application）`);
  console.log(`仿真接通：${counters.simsConverted} 课输出 simulation.mmx（renderer 'mmx'）`);
  console.log(`mark scheme 分值求和不符：${counters.markSumMismatches.length} 条`, counters.markSumMismatches);
  console.log(`无法解析的考纲引用：${counters.unresolvedRefs.length} 条`, counters.unresolvedRefs);
  console.log(`extras 转换（按类型）：`, counters.extrasByType);

  if (counters.unresolvedRefs.length > 0 || converted < slugs.length) process.exit(1);
}

await main();
