import { describe, expect, it } from 'vitest';
import {
  MAX_HISTORY_ITEMS,
  buildReportMessages,
  buildTutorMessages,
  type TutorHistoryItem,
  type TutorPromptInput,
} from './prompts.ts';

const baseInput: TutorPromptInput = {
  kpTitle: '自由落体运动',
  kpSummary: '物体只在重力作用下从静止开始下落的运动。',
  kpTheory: '自由落体是匀加速直线运动，加速度 g≈9.8 m/s²。',
  language: 'zh',
  gradeTier: 'senior',
  params: { g: 9.8, height: 45 },
  history: [],
  question: '为什么羽毛和铁球在真空中同时落地？',
};

describe('buildTutorMessages', () => {
  it('首条为 system，定义助教角色且不泄露规则', () => {
    const messages = buildTutorMessages(baseInput);
    expect(messages[0].role).toBe('system');
    expect(messages[0].content).toContain('助教');
    expect(messages[0].content.toLowerCase()).toContain('never reveal');
  });

  it('知识点标题/摘要/理论进入上下文消息', () => {
    const messages = buildTutorMessages(baseInput);
    const context = messages.find((m) => m.content.includes(baseInput.kpTitle));
    expect(context).toBeDefined();
    expect(context!.role).toBe('user');
    expect(context!.content).toContain(baseInput.kpSummary);
    expect(context!.content).toContain(baseInput.kpTheory);
  });

  it('当前仿真参数被组装进上下文', () => {
    const messages = buildTutorMessages(baseInput);
    const context = messages.find((m) => m.content.includes(baseInput.kpTitle))!;
    expect(context.content).toContain('g = 9.8');
    expect(context.content).toContain('height = 45');
  });

  it('无参数时上下文不含仿真状态段', () => {
    const messages = buildTutorMessages({ ...baseInput, params: undefined });
    const context = messages.find((m) => m.content.includes(baseInput.kpTitle))!;
    expect(context.content).not.toContain('仿真');
  });

  it('按学段调整深度：初中与高中提示不同', () => {
    const middle = buildTutorMessages({ ...baseInput, gradeTier: 'middle' })[0].content;
    const senior = buildTutorMessages({ ...baseInput, gradeTier: 'senior' })[0].content;
    expect(middle).toContain('初中');
    expect(senior).toContain('高中');
    expect(middle).not.toBe(senior);
  });

  it('按提问语言作答：英文时 system 用英文并要求 English', () => {
    const messages = buildTutorMessages({ ...baseInput, language: 'en' });
    expect(messages[0].content).toContain('English');
    expect(messages[0].content).toContain('tutor');
  });

  it('历史只保留最近 10 条，且顺序保持', () => {
    const history: TutorHistoryItem[] = Array.from({ length: 15 }, (_, i) => ({
      role: i % 2 === 0 ? 'user' : 'assistant',
      content: `msg-${i}`,
    }));
    const messages = buildTutorMessages({ ...baseInput, history });
    const historyMessages = messages.filter((m) => m.content.startsWith('msg-'));
    expect(historyMessages).toHaveLength(MAX_HISTORY_ITEMS);
    expect(historyMessages[0].content).toBe('msg-5');
    expect(historyMessages[MAX_HISTORY_ITEMS - 1].content).toBe('msg-14');
  });

  it('最后一条是学生的当前问题', () => {
    const messages = buildTutorMessages(baseInput);
    const last = messages[messages.length - 1];
    expect(last.role).toBe('user');
    expect(last.content).toBe(baseInput.question);
  });
});

describe('buildReportMessages', () => {
  const records = [
    { title: '自由落体运动', bestScore: 3, total: 3, completed: true },
    { title: '牛顿第二定律', bestScore: 1, total: 3, completed: false },
  ];

  it('要求 Markdown 输出且包含三个小节', () => {
    const messages = buildReportMessages({ language: 'zh', records });
    expect(messages[0].role).toBe('system');
    expect(messages[0].content).toContain('Markdown');
    expect(messages[0].content).toContain('掌握较好的领域');
    expect(messages[0].content).toContain('薄弱点');
    expect(messages[0].content).toContain('下一步建议');
  });

  it('学习记录（标题/最好成绩/完成度）进入 user 消息', () => {
    const messages = buildReportMessages({ language: 'zh', records });
    const user = messages[messages.length - 1];
    expect(user.role).toBe('user');
    expect(user.content).toContain('自由落体运动');
    expect(user.content).toContain('3/3');
    expect(user.content).toContain('completed');
    expect(user.content).toContain('1/3');
    expect(user.content).toContain('in-progress');
  });

  it('英文报告用英文小节标题', () => {
    const messages = buildReportMessages({ language: 'en', records });
    expect(messages[0].content).toContain('Strong Areas');
    expect(messages[0].content).toContain('Weak Spots');
    expect(messages[0].content).toContain('Next Steps');
  });
});
