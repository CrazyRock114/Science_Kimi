/**
 * IGCSE 考纲 statement 覆盖度审计。
 *
 * 统计每个学科（0625/0620/0610）的 statement 总数、被至少一个知识点引用
 * （syllabus.igcse）的数量与覆盖率，输出表格。
 *
 * 判定规则：statement id 与某条引用完全相等，或以 "引用." 为前缀
 * （topic 引用 "0625/1" 覆盖整个 topic，subtopic 引用 "0625/1.2" 覆盖整个 subtopic，
 * 旧骨架合并 subtopic 引用如 "0625/1.5" 覆盖其拆分后的 1.5.x）。
 *
 * 用法：node scripts/check-igcse-coverage.ts [--min N]
 *   --min N   任一学科覆盖率（百分比）低于 N 时以非零退出码结束
 *
 * 与 server/ 一致，直接用 node 运行 TS（需 Node >= 22.18 的类型剥离）。
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { igcseStatements } from '../src/content/syllabus/igcse-statements.ts';

const SYLLABUS_NAMES: Record<string, string> = {
  '0625': 'physics',
  '0620': 'chemistry',
  '0610': 'biology',
};

// 从知识点源文件中提取全部 IGCSE 引用（知识点索引的 import 不带扩展名，
// node 类型剥离无法直接 import，故按文本提取 "06xx/..." 引用串）。
// 递归扫描子目录（转换课程位于 knowledge/igcse/<subject>/ 下）。
function collectKnowledgeRefs(): Set<string> {
  const root = join(import.meta.dirname, '../src/content/knowledge');
  const refs = new Set<string>();
  const pattern = /["'](06\d{2}\/[0-9.]+)["']/g;
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(path);
      } else if (entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
        const text = readFileSync(path, 'utf8');
        for (const match of text.matchAll(pattern)) refs.add(match[1]);
      }
    }
  };
  walk(root);
  return refs;
}

function parseMin(argv: string[]): number | undefined {
  const i = argv.indexOf('--min');
  if (i === -1) return undefined;
  const value = Number(argv[i + 1]);
  if (!Number.isFinite(value) || value < 0 || value > 100) {
    console.error(`--min 需要 0–100 的数字，收到: ${argv[i + 1]}`);
    process.exit(2);
  }
  return value;
}

const min = parseMin(process.argv.slice(2));
const refs = collectKnowledgeRefs();

const isCovered = (id: string): boolean => {
  for (const ref of refs) {
    if (id === ref || id.startsWith(ref + '.')) return true;
  }
  return false;
};

console.log('IGCSE 考纲 statement 覆盖度（被知识点 syllabus.igcse 引用）\n');
const codeWidth = 8;
const nameWidth = 10;
console.log(
  `${'code'.padEnd(codeWidth)}${'subject'.padEnd(nameWidth)}${'total'.padStart(7)}${'covered'.padStart(9)}${'coverage'.padStart(10)}`,
);
console.log('-'.repeat(codeWidth + nameWidth + 26));

let failed = false;
for (const [code, name] of Object.entries(SYLLABUS_NAMES)) {
  const statements = igcseStatements.filter((s) => s.id.startsWith(`${code}/`));
  const covered = statements.filter((s) => isCovered(s.id)).length;
  const pct = statements.length === 0 ? 0 : (covered / statements.length) * 100;
  if (min !== undefined && pct < min) failed = true;
  console.log(
    `${code.padEnd(codeWidth)}${name.padEnd(nameWidth)}${String(statements.length).padStart(7)}${String(covered).padStart(9)}${(pct.toFixed(1) + '%').padStart(10)}`,
  );
}

const total = igcseStatements.length;
const totalCovered = igcseStatements.filter((s) => isCovered(s.id)).length;
const totalPct = total === 0 ? 0 : (totalCovered / total) * 100;
console.log('-'.repeat(codeWidth + nameWidth + 26));
console.log(
  `${'total'.padEnd(codeWidth)}${''.padEnd(nameWidth)}${String(total).padStart(7)}${String(totalCovered).padStart(9)}${(totalPct.toFixed(1) + '%').padStart(10)}`,
);

if (min !== undefined) {
  console.log(`\n阈值 --min ${min}%: ${failed ? '未达标' : '达标'}`);
  if (failed) process.exit(1);
}
