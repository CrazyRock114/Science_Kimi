import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Formula } from './Formula';

describe('Formula 组件（KaTeX）', () => {
  it('渲染块级公式', () => {
    const { container } = render(<Formula latex="v = u + at" block />);
    expect(container.querySelector('.katex')).not.toBeNull();
    expect(container.querySelector('.katex-display')).not.toBeNull();
  });

  it('渲染行内公式', () => {
    const { container } = render(<Formula latex="s = vt" />);
    expect(container.querySelector('.katex')).not.toBeNull();
    expect(container.querySelector('.katex-display')).toBeNull();
  });

  it('公式内容可读', () => {
    const { container } = render(<Formula latex="\\mathrm{pH} = 7" block />);
    expect(container.textContent).toContain('pH');
  });
});
