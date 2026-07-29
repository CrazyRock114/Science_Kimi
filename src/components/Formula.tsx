import { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface FormulaProps {
  latex: string;
  block?: boolean;
  className?: string;
}

/** KaTeX 公式渲染组件 */
export function Formula({ latex, block = false, className = '' }: FormulaProps) {
  const html = useMemo(
    () =>
      katex.renderToString(latex, {
        displayMode: block,
        throwOnError: false,
      }),
    [latex, block],
  );
  if (block) {
    return (
      <div
        className={`overflow-x-auto py-2 text-center ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
