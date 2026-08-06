import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import i18n from '../i18n';
import { getKnowledgePointMeta, knowledgePointMetas } from '../content/knowledge';
import type { KnowledgePoint } from '../content/types';
import type { LabExperiment } from '../content/lab/types';
import { KnowledgePointPage } from '../components/knowledge/KnowledgePointPage';
import { LabBenchPage } from '../pages/LabBenchPage';

/**
 * 相关课程 / 相关实验互链测试。
 * 实验数据已全部填写 related，这里经 vi.mock 注入两条假实验（一条带 related、
 * 一条不带），验证双向链接（知识点页反向查实验、实验台页正向链知识点）。
 */

const TEST_KP_ID = 'test-kp-related';
const realMeta = knowledgePointMetas[0];

const fakeExperiment: LabExperiment = {
  slug: 'fake-exp-related',
  title: { zh: '关联假实验', en: 'Fake related experiment' },
  description: { zh: '用于互链测试的假实验，描述长度足够。', en: 'A fake experiment for related-link tests.' },
  category: 'ACID_BASE',
  difficulty: 'EASY',
  reagents: { zh: ['盐酸'], en: ['hydrochloric acid'] },
  apparatus: { zh: ['烧杯'], en: ['beaker'] },
  objectives: { zh: ['验证互链渲染'], en: ['Verify related-link rendering'] },
  estimatedMinutes: 5,
  related: [realMeta.id],
};

/** 无 related 的假实验：验证实验台页不渲染"相关知识点"区块 */
const plainExperiment: LabExperiment = {
  slug: 'fake-exp-plain',
  title: { zh: '无关联假实验', en: 'Fake plain experiment' },
  description: { zh: '用于互链测试的无关联假实验，描述长度足够。', en: 'A fake experiment without related knowledge points.' },
  category: 'ACID_BASE',
  difficulty: 'EASY',
  reagents: { zh: ['盐酸'], en: ['hydrochloric acid'] },
  apparatus: { zh: ['烧杯'], en: ['beaker'] },
  objectives: { zh: ['验证无关联渲染'], en: ['Verify rendering without related links'] },
  estimatedMinutes: 5,
};

vi.mock('../content/lab', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../content/lab')>();
  return {
    ...actual,
    getLabExperiment: (slug: string) =>
      slug === 'fake-exp-related'
        ? fakeExperiment
        : slug === 'fake-exp-plain'
          ? plainExperiment
          : actual.getLabExperiment(slug),
    // 只有 TEST_KP_ID 这门课有"相关实验"（反向查找命中假实验）
    getLabExperimentsForKnowledgePoint: (kpId: string) =>
      kpId === 'test-kp-related' ? [fakeExperiment] : [],
  };
});

// 实验台主体与本测试无关，替换为占位组件避免重渲染开销
vi.mock('../components/lab/LabBench', () => ({ default: () => <div>lab-bench-stub</div> }));

function fakeKp(overrides: Partial<KnowledgePoint> = {}): KnowledgePoint {
  return {
    id: TEST_KP_ID,
    subject: 'physics',
    title: { zh: '互链测试课', en: 'Related-link test lesson' },
    summary: { zh: '摘要', en: 'Summary' },
    gradeTier: 'middle',
    syllabus: {},
    keywords: { zh: ['测试'], en: ['test'] },
    theory: {
      zh: [{ type: 'paragraph', text: '正文。' }],
      en: [{ type: 'paragraph', text: 'Body.' }],
    },
    quiz: [],
    ...overrides,
  };
}

function renderKpPage(kp: KnowledgePoint, lang: 'zh' | 'en' = 'zh') {
  return render(
    <MemoryRouter initialEntries={[`/${lang}`]}>
      <KnowledgePointPage kp={kp} lang={lang} />
    </MemoryRouter>,
  );
}

function renderLabBenchPage(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/zh/chemistry/lab/${slug}`]}>
      <Routes>
        <Route path="/:lang/chemistry/lab/:slug" element={<LabBenchPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

afterEach(async () => {
  cleanup();
  await i18n.changeLanguage('zh');
});

describe('互链数据 helper', () => {
  it('getKnowledgePointMeta：已知 id 返回 meta，未知 id 返回 undefined', () => {
    expect(getKnowledgePointMeta(realMeta.id)?.id).toBe(realMeta.id);
    expect(getKnowledgePointMeta('no-such-kp')).toBeUndefined();
  });
});

describe('知识点页互链区块', () => {
  it('渲染相关课程与相关实验链接', () => {
    renderKpPage(fakeKp({ related: [realMeta.id] }));
    const lessonLink = screen.getByRole('link', { name: realMeta.title.zh });
    expect(lessonLink).toHaveAttribute('href', `/zh/${realMeta.subject}/${realMeta.id}`);
    expect(screen.getByText('相关课程')).toBeInTheDocument();
    const expLink = screen.getByRole('link', { name: fakeExperiment.title.zh });
    expect(expLink).toHaveAttribute('href', `/zh/chemistry/lab/${fakeExperiment.slug}`);
    expect(screen.getByText('相关实验')).toBeInTheDocument();
  });

  it('英文界面渲染英文标题与区块名', async () => {
    await i18n.changeLanguage('en');
    renderKpPage(fakeKp({ related: [realMeta.id] }), 'en');
    expect(screen.getByText('Related lessons')).toBeInTheDocument();
    expect(screen.getByText('Related experiments')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: fakeExperiment.title.en })).toHaveAttribute(
      'href',
      `/en/chemistry/lab/${fakeExperiment.slug}`,
    );
  });

  it('related 中的未知 id 被跳过（不渲染课程区块，实验区块不受影响）', () => {
    renderKpPage(fakeKp({ related: ['no-such-kp'] }));
    expect(screen.queryByText('相关课程')).not.toBeInTheDocument();
    expect(screen.getByText('相关实验')).toBeInTheDocument();
  });

  it('无 related 且无关联实验时整个区块不渲染', () => {
    renderKpPage(fakeKp({ id: 'test-kp-no-related' }));
    expect(screen.queryByTestId('related-sections')).not.toBeInTheDocument();
  });
});

describe('实验台页相关知识点区块', () => {
  it('实验声明 related 时渲染相关知识点链接', () => {
    renderLabBenchPage(fakeExperiment.slug);
    expect(screen.getByText('相关知识点')).toBeInTheDocument();
    const link = screen.getByRole('link', { name: realMeta.title.zh });
    expect(link).toHaveAttribute('href', `/zh/${realMeta.subject}/${realMeta.id}`);
  });

  it('无 related 的实验不渲染该区块', () => {
    renderLabBenchPage(plainExperiment.slug);
    expect(screen.queryByText('相关知识点')).not.toBeInTheDocument();
  });
});
