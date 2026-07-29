import type { TheoryBlock } from '../../content/types';
import { Formula } from '../Formula';

interface TheorySectionProps {
  blocks: TheoryBlock[];
}

/** 理论区：按数据渲染段落 / 公式（KaTeX）/ 列表 / 小标题 */
export function TheorySection({ blocks }: TheorySectionProps) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h3 key={i} className="pt-2 text-lg font-semibold text-slate-900">
                {block.text}
              </h3>
            );
          case 'paragraph':
            return (
              <p key={i} className="leading-7 text-slate-700">
                {block.text}
              </p>
            );
          case 'formula':
            return (
              <div key={i} className="rounded-lg bg-slate-50 px-4 py-3">
                <Formula latex={block.latex} block />
                {block.caption && (
                  <p className="mt-1 text-center text-sm text-slate-500">{block.caption}</p>
                )}
              </div>
            );
          case 'list':
            return (
              <ul key={i} className="list-disc space-y-1 pl-6 leading-7 text-slate-700">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
        }
      })}
    </div>
  );
}
