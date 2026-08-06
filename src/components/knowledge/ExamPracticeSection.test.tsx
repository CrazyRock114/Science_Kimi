import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { ExamPracticeSection } from './ExamPracticeSection';
import { getKnowledgePointProgress, resetProgress } from '../../lib/progress';
import { kp12Motion } from '../../content/knowledge/igcse/0625/1-2-motion';

const items = kp12Motion.examPractice!;
const mcq = items.find((q) => q.options)!;
const structured = items.find((q) => !q.options)!;

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

beforeEach(() => {
  resetProgress();
});

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

  it('结构化题：展开评分标准后出现自评按钮，点击计入进度（可改判）', async () => {
    const user = userEvent.setup();
    const kpId = 'test-kp-self-assess';
    render(<ExamPracticeSection items={[structured]} lang="zh" kpId={kpId} />);
    // 未展开评分标准时不出现自评
    expect(screen.queryByTestId('exam-self-assess')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '显示评分标准' }));
    const correctBtn = screen.getByRole('button', { name: '我答对了' });
    const wrongBtn = screen.getByRole('button', { name: '我答错了' });

    await user.click(correctBtn);
    expect(getKnowledgePointProgress(kpId).examSelfAssessment?.[structured.id]).toBe(true);
    expect(correctBtn).toHaveAttribute('aria-pressed', 'true');

    // 改判：覆盖同一题的自评结果
    await user.click(wrongBtn);
    expect(getKnowledgePointProgress(kpId).examSelfAssessment?.[structured.id]).toBe(false);
    expect(wrongBtn).toHaveAttribute('aria-pressed', 'true');
    expect(correctBtn).toHaveAttribute('aria-pressed', 'false');
  });

  it('结构化题：无 kpId 时自评仅更新界面，不落盘', async () => {
    const user = userEvent.setup();
    render(<ExamPracticeSection items={[structured]} lang="zh" />);
    await user.click(screen.getByRole('button', { name: '显示评分标准' }));
    const correctBtn = screen.getByRole('button', { name: '我答对了' });
    await user.click(correctBtn);
    expect(correctBtn).toHaveAttribute('aria-pressed', 'true');
    expect(getKnowledgePointProgress(structured.id).examSelfAssessment).toBeUndefined();
  });

  it('MCQ：即使展开评分标准也不出现自评按钮', async () => {
    const user = userEvent.setup();
    render(<ExamPracticeSection items={[mcq]} lang="zh" kpId="test-kp-mcq" />);
    await user.click(screen.getByRole('button', { name: '显示评分标准' }));
    expect(screen.queryByTestId('exam-self-assess')).not.toBeInTheDocument();
  });
});
