/**
 * IGCSE_miniMax 源课程动态内容 → 本站内容模型的适配层。
 *
 * 转换课程（igcse/<subject>/<slug>.ts，由 scripts/convert-igcse-lessons.ts 生成）
 * import igcse-src 下原样复制的 narration 与提取的 equations，经这里适配为
 * 本站的 NarrationScript（行级 lines + action/latex/pause）与 ReadoutLiveFormula
 * （substitute 接收内核 readouts）。
 */
import type {
  NarrationScript as OurNarrationScript,
  NarrationSectionKind,
  ReadoutLiveFormula,
} from '../../types';
import type { EquationBlock, NarrationScript as RefNarrationScript } from './types';

/** 源讲解段落类型 → 本站段落类型 */
function mapSectionKind(type: string): NarrationSectionKind {
  switch (type) {
    case 'intro':
      return 'intro';
    case 'interaction':
    case 'animation':
      return 'interaction';
    case 'summary':
      return 'summary';
    default:
      return 'concept';
  }
}

/**
 * 源讲解剧本（段落含行，zh 可选）→ 本站 NarrationScript。
 * 段落标题作为段落级 text；每行保留 latex/action/pause，zh 缺失回退 en。
 */
export function adaptIgcseNarration(script: RefNarrationScript): OurNarrationScript {
  return {
    sections: script.sections.map((section) => ({
      id: section.id,
      kind: mapSectionKind(section.type),
      text: { zh: section.title.zh ?? section.title.en, en: section.title.en },
      lines: section.lines.map((line) => ({
        id: line.id,
        text: { zh: line.text.zh ?? line.text.en, en: line.text.en },
        ...(line.latex !== undefined ? { latex: line.latex } : {}),
        ...(line.action !== undefined ? { action: line.action } : {}),
        ...(line.pause !== undefined ? { pause: line.pause } : {}),
      })),
    })),
  };
}

/**
 * 源 equations（substitute 接收内核 readouts）→ 本站 ReadoutLiveFormula 列表。
 * 只保留带 substitute 的公式；无 substitute 的公式仍由理论区静态公式块展示。
 */
export function igcseLiveFormulas(equations: EquationBlock[]): ReadoutLiveFormula[] {
  return equations.flatMap((eq, index) =>
    eq.substitute
      ? [{ id: `eq-${index + 1}`, latex: eq.latex, substituteFromReadouts: eq.substitute }]
      : [],
  );
}
