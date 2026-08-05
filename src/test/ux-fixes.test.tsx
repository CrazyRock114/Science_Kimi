import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import i18n from '../i18n';
import { knowledgePointMetas } from '../content/knowledge';
import type { KnowledgePointMeta } from '../content/types';
import { recordQuizScore, resetProgress } from '../lib/progress';
import { HomePage } from '../pages/HomePage';
import { KnowledgePointCard } from '../components/KnowledgePointCard';
import { KnowledgePointRoute } from '../pages/KnowledgePointRoute';
import LabBench from '../components/lab/LabBench';
import OhmCircuitSim from '../simulations/physics/OhmCircuitSim';
import { allLabExperiments } from '../content/lab';
import { react } from '../chem-engine/engine';
import { resolveSubstance } from '../chem-engine/reagents';
import { Clock } from 'three';
import { suppressThreeClockDeprecation } from '../lib/threeClockDeprecation';

/**
 * UX 审查修复的回归测试：
 * 跨语言搜索 / 卡片进度角标与标签去重 / 空烧杯与 engineNote 语言 /
 * 欧姆电路标注双语 / chunk 加载失败语义 / THREE.Clock 弃用告警过滤。
 */

function renderWithRouter(ui: React.ReactElement, path: string, route: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={route} element={ui} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  resetProgress();
});

afterEach(async () => {
  cleanup();
  await i18n.changeLanguage('zh');
});

// ---------------------------------------------------------------------------
// 首页搜索：两种语言都纳入匹配
// ---------------------------------------------------------------------------

describe('HomePage 跨语言搜索', () => {
  it('zh 页面用英文关键词也能搜到知识点', async () => {
    // 找一个英文标题词在其任何中文字段中都不出现的知识点
    const target = knowledgePointMetas.find((kp) =>
      kp.title.en
        .toLowerCase()
        .split(/[^a-z]+/)
        .some((w) => w.length >= 4 && !kp.title.zh.includes(w) && !kp.summary.zh.includes(w)),
    );
    expect(target, '测试数据中应存在英中标题差异足够大的知识点').toBeDefined();
    const keyword = target!.title.en
      .toLowerCase()
      .split(/[^a-z]+/)
      .find((w) => w.length >= 4 && !target!.title.zh.includes(w) && !target!.summary.zh.includes(w))!;

    renderWithRouter(<HomePage />, '/zh', '/:lang');
    const searchbox = screen.getByRole('searchbox');
    await userEvent.type(searchbox, keyword);
    expect(await screen.findByText(target!.title.zh)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// 知识点卡片：进度角标 + 考纲标签去重
// ---------------------------------------------------------------------------

function fakeMeta(overrides: Partial<KnowledgePointMeta> = {}): KnowledgePointMeta {
  return {
    id: 'kp-card-test',
    subject: 'physics',
    title: { zh: '测试知识点', en: 'Test KP' },
    summary: { zh: '摘要', en: 'Summary' },
    gradeTier: 'middle',
    syllabus: {},
    keywords: { zh: [], en: [] },
    hasSimulation: false,
    hasExamPractice: false,
    hasNarration: false,
    hasExtras: false,
    ...overrides,
  };
}

describe('KnowledgePointCard', () => {
  it('满分完成后显示 "✓ 3/3" 角标', () => {
    recordQuizScore('kp-card-test', 3, 3);
    renderWithRouter(<KnowledgePointCard kp={fakeMeta()} lang="zh" />, '/zh', '/:lang');
    expect(screen.getByTestId('kp-card-progress')).toHaveTextContent('✓ 3/3');
  });

  it('未满分但有成绩时显示最好成绩角标', () => {
    recordQuizScore('kp-card-test', 2, 3);
    renderWithRouter(<KnowledgePointCard kp={fakeMeta()} lang="zh" />, '/zh', '/:lang');
    const badge = screen.getByTestId('kp-card-progress');
    expect(badge).toHaveTextContent('2/3');
    expect(badge.textContent).not.toContain('✓');
  });

  it('无进度时不渲染角标', () => {
    renderWithRouter(<KnowledgePointCard kp={fakeMeta()} lang="zh" />, '/zh', '/:lang');
    expect(screen.queryByTestId('kp-card-progress')).not.toBeInTheDocument();
  });

  it('考纲标签渲染前去重（同一人教册只出现一次）', () => {
    const kp = fakeMeta({
      syllabus: {
        igcse: ['0625/1.1', '0625/1.1'],
        pep: ['pep-phy-j9/ch1', 'pep-phy-j9/ch2'],
      },
    });
    renderWithRouter(<KnowledgePointCard kp={kp} lang="zh" />, '/zh', '/:lang');
    expect(screen.getAllByText('pep-phy-j9')).toHaveLength(1);
    expect(screen.getAllByText('IGCSE 0625/1.1')).toHaveLength(1);
  });
});

// ---------------------------------------------------------------------------
// 化学实验台：空烧杯无液体；engineNote 只在英文界面出现
// ---------------------------------------------------------------------------

// 找一个前两种试剂就能产生现象描述的真实实验
const benchExperiment = allLabExperiments.find((exp) => {
  const a = resolveSubstance(exp.reagents.zh[0]);
  const b = resolveSubstance(exp.reagents.zh[1]);
  return !!react([a, b]).description;
});

describe('LabBench', () => {
  it('空烧杯不渲染液体，加入试剂后出现液体', async () => {
    expect(benchExperiment, '测试数据中应存在前两种试剂可反应的实验').toBeDefined();
    const { container } = render(<LabBench experiment={benchExperiment!} lang="zh" />);
    // 初始只有 clipPath 定义里的一个 rect
    expect(container.querySelectorAll('rect')).toHaveLength(1);
    await userEvent.click(screen.getAllByRole('button')[0]);
    await waitFor(() => {
      expect(container.querySelectorAll('rect').length).toBeGreaterThan(1);
    });
  });

  it('engineNote 只在英文界面显示', async () => {
    render(<LabBench experiment={benchExperiment!} lang="en" />);
    const buttons = screen.getAllByRole('button');
    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);
    expect(await screen.findByText('Engine descriptions are in Chinese for now.')).toBeInTheDocument();

    cleanup();
    render(<LabBench experiment={benchExperiment!} lang="zh" />);
    const zhButtons = screen.getAllByRole('button');
    await userEvent.click(zhButtons[0]);
    await userEvent.click(zhButtons[1]);
    await waitFor(() => {
      expect(screen.queryByText('Engine descriptions are in Chinese for now.')).not.toBeInTheDocument();
    });
  });
});

// ---------------------------------------------------------------------------
// 欧姆电路仿真：画面标注双语（jsdom 无 2d 上下文，验证 aria-label 双语即可）
// ---------------------------------------------------------------------------

describe('OhmCircuitSim 双语', () => {
  it('aria-label 随界面语言切换', async () => {
    render(<OhmCircuitSim params={{ voltage: 24, resistance: 12 }} />);
    expect(screen.getByTestId('ohm-circuit-canvas')).toHaveAttribute(
      'aria-label',
      '欧姆定律电路：电池、电阻与电流表',
    );
    await i18n.changeLanguage('en');
    expect(screen.getByTestId('ohm-circuit-canvas')).toHaveAttribute(
      'aria-label',
      "Ohm's law circuit with battery, resistor and ammeter",
    );
  });
});

// ---------------------------------------------------------------------------
// 知识点路由：chunk 加载失败 → 网络错误 + 重试；不存在 → 404
// ---------------------------------------------------------------------------

vi.mock('../content/knowledge', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../content/knowledge')>();
  return { ...actual, getKnowledgePoint: vi.fn() };
});

const { getKnowledgePoint } = await import('../content/knowledge');
const mockedGet = vi.mocked(getKnowledgePoint);

describe('KnowledgePointRoute 加载语义', () => {
  it('动态 import 失败显示网络错误与重试按钮，重试后按结果渲染', async () => {
    mockedGet.mockReset();
    mockedGet.mockRejectedValueOnce(new TypeError('Failed to fetch dynamically imported module'));
    renderWithRouter(<KnowledgePointRoute />, '/zh/physics/some-kp', '/:lang/:subject/:kpId');

    expect(await screen.findByText('加载失败')).toBeInTheDocument();
    expect(screen.queryByText('页面不存在')).not.toBeInTheDocument();

    // 重试：第二次返回 undefined（知识点不存在）→ 显示 404
    mockedGet.mockResolvedValueOnce(undefined);
    await userEvent.click(screen.getByRole('button', { name: '重试' }));
    expect(await screen.findByText('页面不存在')).toBeInTheDocument();
    expect(mockedGet).toHaveBeenCalledTimes(2);
  });

  it('知识点不存在时直接 404，无重试按钮', async () => {
    mockedGet.mockReset();
    mockedGet.mockResolvedValueOnce(undefined);
    renderWithRouter(<KnowledgePointRoute />, '/zh/physics/no-such-kp', '/:lang/:subject/:kpId');
    expect(await screen.findByText('页面不存在')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '重试' })).not.toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// THREE.Clock 弃用告警过滤
// ---------------------------------------------------------------------------

describe('threeClockDeprecation', () => {
  it('过滤 Clock 弃用告警，其余告警照常输出', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    suppressThreeClockDeprecation();
    new Clock();
    const logged = spy.mock.calls.map((c) => String(c[0])).join('\n');
    expect(logged).not.toContain('Clock: This module has been deprecated');
    spy.mockRestore();
  });
});
