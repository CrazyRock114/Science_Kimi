import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ExamPracticeSection } from './ExamPracticeSection';
import { kp12Motion } from '../../content/knowledge/igcse/0625/1-2-motion';

const items = kp12Motion.examPractice!;
const mcq = items.find((q) => q.options)!;
const structured = items.find((q) => !q.options)!;

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

describe('ExamPracticeSection 组件', () => {
  it('显示英文题干、command word 徽章与分值', () => {
    render(<ExamPracticeSection items={items} lang="zh" />);
    expect(screen.getByText(new RegExp(escapeRegExp(mcq.stem.slice(0, 30))))).toBeInTheDocument();
    expect(screen.getAllByText('Calculate').length).toBeGreaterThan(0);
    for (const q of items) {
      expect(screen.getAllByText(`${q.marks} 分`).length).toBeGreaterThan(0);
    }
  });

  it('MCQ：选对显示正确', async () => {
    const user = userEvent.setup();
    render(<ExamPracticeSection items={[mcq]} lang="zh" />);
    await user.click(screen.getByLabelText(mcq.options![mcq.answerIndex!]));
    await user.click(screen.getByRole('button', { name: '查看答案' }));
    expect(screen.getByText('回答正确')).toBeInTheDocument();
  });

  it('MCQ：选错显示错误', async () => {
    const user = userEvent.setup();
    render(<ExamPracticeSection items={[mcq]} lang="zh" />);
    const wrong = (mcq.answerIndex! + 1) % mcq.options!.length;
    await user.click(screen.getByLabelText(mcq.options![wrong]));
    await user.click(screen.getByRole('button', { name: '查看答案' }));
    expect(screen.getByText('回答错误')).toBeInTheDocument();
  });

  it('结构化题：展开评分标准，逐条显示得分点与双语考官点评', async () => {
    const user = userEvent.setup();
    render(<ExamPracticeSection items={[structured]} lang="zh" />);
    expect(screen.queryByText(/评分标准：/)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '显示评分标准' }));
    for (const mp of structured.markScheme) {
      expect(
        screen.getByText((_, el) => el?.tagName === 'LI' && (el.textContent ?? '').includes(mp.text)),
      ).toBeInTheDocument();
    }
    expect(screen.getByText(/考官点评/)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(escapeRegExp(structured.examinerNote!.zh.slice(0, 10)))),
    ).toBeInTheDocument();
  });
});
