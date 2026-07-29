import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { QuizSection } from './QuizSection';
import { chemPh001 } from '../../content/knowledge/chem-ph-001';
import { getKnowledgePointProgress, resetProgress } from '../../lib/progress';

const items = chemPh001.quiz;

describe('QuizSection 组件', () => {
  beforeEach(() => {
    resetProgress();
    localStorage.clear();
  });

  it('未答完时提交给出提示', async () => {
    const user = userEvent.setup();
    render(<QuizSection kpId="test-kp" items={items} lang="zh" />);
    await user.click(screen.getByRole('button', { name: '提交答案' }));
    expect(screen.getByText('请回答所有题目后再提交。')).toBeInTheDocument();
  });

  it('全部答对：显示满分、解析，并记录完成状态', async () => {
    const user = userEvent.setup();
    render(<QuizSection kpId="test-kp-full" items={items} lang="zh" />);
    for (const item of items) {
      await user.click(screen.getByLabelText(item.options.zh[item.answerIndex]));
    }
    await user.click(screen.getByRole('button', { name: '提交答案' }));

    expect(screen.getByText(`得分：${items.length} / ${items.length}`)).toBeInTheDocument();
    expect(screen.getAllByText('回答正确')).toHaveLength(items.length);
    expect(screen.getAllByText(/解析/)).toHaveLength(items.length);

    const progress = getKnowledgePointProgress('test-kp-full');
    expect(progress.completed).toBe(true);
    expect(progress.bestScore).toBe(items.length);
  });

  it('答错时显示错误标记，且不标记完成', async () => {
    const user = userEvent.setup();
    render(<QuizSection kpId="test-kp-wrong" items={items} lang="zh" />);
    for (const item of items) {
      const wrongIndex = (item.answerIndex + 1) % item.options.zh.length;
      await user.click(screen.getByLabelText(item.options.zh[wrongIndex]));
    }
    await user.click(screen.getByRole('button', { name: '提交答案' }));

    expect(screen.getByText(`得分：0 / ${items.length}`)).toBeInTheDocument();
    expect(screen.getAllByText('回答错误')).toHaveLength(items.length);
    expect(getKnowledgePointProgress('test-kp-wrong').completed).toBe(false);
  });
});
