/**
 * 一次性移植脚本：IGCSE_miniMax 通用仿真基元层 → src/simulations/mmx/。
 *
 * 用法：node scripts/port-mmx-primitives.mjs
 *
 * 复制 .reference/IGCSE_miniMax（只读，作者 CrazyRock114，non-commercial）的
 * src/sim/**（SimStage + 21 个基元）与所需 src/lib 片段，并改写 @/ import：
 *   @/content/types                     → mmx/types（本项目 shim）
 *   @/components/i18n/T                 → mmx/T（按本站 i18n 当前语言简化的双语组件）
 *   @/lib/{units,assignment,formula,molecularFormula,ui-strings,useAnimationFrame}
 *                                       → mmx/lib/（原样复制）
 *   @/content/lessons/0620/2-2-atomic-structure/kernel → mmx/lib/elements（仅 ELEMENTS）
 *
 * 不移植：plot2d/guides.test.ts（断言的是 0620 化学课的 guide 位置，与本项目无关）、
 * lib/fieldLines.*（仅内核使用，已由 convert-igcse-lessons.ts 复制到 igcse-kernels/lib）。
 */
import { copyFileSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const REF_SIM = resolve(import.meta.dirname, '../.reference/IGCSE_miniMax/src/sim');
const REF_LIB = resolve(import.meta.dirname, '../.reference/IGCSE_miniMax/src/lib');
const REF_PANELS = resolve(import.meta.dirname, '../.reference/IGCSE_miniMax/src/components/lesson');
const MMX = resolve(import.meta.dirname, '../src/simulations/mmx');

const HEADER = (rel) =>
  `// 移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：${rel}\n` +
  `// import 路径由 scripts/port-mmx-primitives.mjs 改写，勿手改 import 区块以外的差异\n`;

/** 按文件在 mmx/ 下的深度改写 @/ import。 */
function rewriteImports(text, destAbs) {
  const at = (targetNoExt) => {
    let rel = relative(dirname(destAbs), join(MMX, targetNoExt)).split(sep).join('/');
    if (!rel.startsWith('.')) rel = './' + rel;
    return rel;
  };
  return text.replace(/from '(@\/[^']+)'/g, (_m, spec) => {
    if (spec === '@/content/types') return `from '${at('types')}'`;
    if (spec === '@/components/i18n/T') return `from '${at('T')}'`;
    const lib = spec.match(/^@\/lib\/(.+)$/);
    if (lib) return `from '${at('lib/' + lib[1])}'`;
    if (spec === '@/content/lessons/0620/2-2-atomic-structure/kernel') {
      return `from '${at('lib/elements')}'`;
    }
    throw new Error(`未处理的 import: ${spec}`);
  });
}

function port(srcAbs, destAbs, refRel) {
  const text = readFileSync(srcAbs, 'utf8');
  mkdirSync(dirname(destAbs), { recursive: true });
  writeFileSync(destAbs, HEADER(refRel) + rewriteImports(text, destAbs));
  console.log('[port]', refRel, '→', relative(MMX, destAbs));
}

rmSync(MMX, { recursive: true, force: true });
mkdirSync(MMX, { recursive: true });

// SimStage + 全部基元目录（跳过 guides.test.ts，见头部说明）
port(join(REF_SIM, 'SimStage.tsx'), join(MMX, 'SimStage.tsx'), 'src/sim/SimStage.tsx');
for (const dir of readdirSync(REF_SIM, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  for (const file of readdirSync(join(REF_SIM, dir.name))) {
    if (file === 'guides.test.ts') continue;
    port(
      join(REF_SIM, dir.name, file),
      join(MMX, dir.name, file),
      `src/sim/${dir.name}/${file}`,
    );
  }
}

// 所需 lib 片段（含测试）
const LIBS = [
  'units.ts',
  'units.test.ts',
  'assignment.ts',
  'assignment.test.ts',
  'formula.ts',
  'formula.test.ts',
  'molecularFormula.ts',
  'molecularFormula.test.ts',
  'ui-strings.ts',
  'useAnimationFrame.ts',
  'useAnimationFrame.test.ts',
];
for (const f of LIBS) port(join(REF_LIB, f), join(MMX, 'lib', f), `src/lib/${f}`);

// 控制面板 / 读数面板（源项目在 components/lesson/ 下）
port(join(REF_PANELS, 'ParamPanel.tsx'), join(MMX, 'ParamPanel.tsx'), 'src/components/lesson/ParamPanel.tsx');
port(join(REF_PANELS, 'ReadoutPanel.tsx'), join(MMX, 'ReadoutPanel.tsx'), 'src/components/lesson/ReadoutPanel.tsx');

// Atom 基元依赖的元素数据（源：0620/2-2-atomic-structure/kernel.ts 的 ELEMENTS）
const atomKernel = readFileSync(
  resolve(import.meta.dirname, '../.reference/IGCSE_miniMax/src/content/lessons/0620/2-2-atomic-structure/kernel.ts'),
  'utf8',
);
const elementsBlock = atomKernel.match(/export const ELEMENTS = [\s\S]*?\] as const/);
if (!elementsBlock) throw new Error('未能从 0620 kernel 提取 ELEMENTS');
writeFileSync(
  join(MMX, 'lib', 'elements.ts'),
  HEADER('src/content/lessons/0620/2-2-atomic-structure/kernel.ts（仅 ELEMENTS 常量）') +
    elementsBlock[0] +
    '\n',
);
console.log('[port] ELEMENTS → lib/elements.ts');
console.log('完成。');
