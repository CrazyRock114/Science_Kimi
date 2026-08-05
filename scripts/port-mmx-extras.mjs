/**
 * 一次性移植脚本：IGCSE_miniMax 课程 extras 交互模块 → src/components/lesson-extras/。
 *
 * 用法：node scripts/port-mmx-extras.mjs
 *
 * 复制 .reference/IGCSE_miniMax（只读，作者 CrazyRock114，non-commercial）的
 * src/components/lesson-extras/**.tsx（解剖探索器 / 流程图 / 对比卡片等 20 个
 * 数据驱动模块 + LessonExtras 分发器）与 src/lib/lessonExtrasStrings.ts，
 * 并从源 src/content/types.ts 抽取 LessonExtra 联合类型段落生成 types.ts。
 *
 * @/ import 改写（与 port-mmx-primitives.mjs 同款模式）：
 *   @/content/types           → ./types（本目录由源类型段落抽取的 LessonExtra 类型）
 *   @/components/i18n/T       → ../../simulations/mmx/T（按本站 i18n 当前语言简化的双语组件）
 *   @/lib/lessonExtrasStrings → ./lessonExtrasStrings
 *
 * Anatomy3D（three.js 3D 心脏标签页）保持源项目的 lazy import，仅在学生
 * 切换到 3D 标签时加载 three。
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

// LessonExtra 联合类型段落：从源 content/types.ts 的 "Lesson extras" 节抽取到文件尾。
// 该节只引用 Bilingual（与本节内部类型），Bilingual 改由 mmx types 引入。
const typesText = readFileSync(REF_TYPES, 'utf8');
const marker = '// Lesson extras — visual / interactive learning modules';
const markerIdx = typesText.indexOf(marker);
if (markerIdx === -1) throw new Error('未找到 Lesson extras 类型段落标记');
// 回退到标记前的分隔注释行（// ----...）
const sepIdx = typesText.lastIndexOf('// ----', markerIdx);
const section = typesText.slice(sepIdx).trimEnd() + '\n';
if (/^import /m.test(section)) throw new Error('类型段落意外包含 import');
writeFileSync(
  join(DEST, 'types.ts'),
  HEADER('src/content/types.ts（Lesson extras 类型段落，Bilingual 改由 mmx types 引入）') +
    `import type { Bilingual } from '../../simulations/mmx/types';\n\n` +
    `export type { Bilingual };\n\n` +
    section,
);
console.log('[port] LessonExtra 类型段落 → types.ts');
console.log('完成。');
