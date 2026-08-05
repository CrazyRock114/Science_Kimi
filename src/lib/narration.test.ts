import { describe, expect, it, vi } from 'vitest';
import { buildNarrationQueue, dispatchNarrationAction } from './narration';
import type { NarrationScript } from '../content/types';

const sectionLevelScript: NarrationScript = {
  sections: [
    { id: 's1', kind: 'intro', text: { zh: '引入', en: 'Intro' } },
    { id: 's2', kind: 'summary', text: { zh: '总结', en: 'Summary' } },
  ],
};

const lineLevelScript: NarrationScript = {
  sections: [
    {
      id: 'intro',
      kind: 'intro',
      text: { zh: '两张图', en: 'Two graphs' },
      lines: [
        {
          id: 'intro-1',
          text: { zh: '第一句', en: 'First' },
          action: { type: 'setParams', params: { u: 0, a: 2 } },
        },
        { id: 'intro-2', text: { zh: '第二句', en: 'Second' }, latex: 'v = \\frac{s}{t}', pause: 1 },
      ],
    },
    {
      id: 'concept',
      kind: 'concept',
      text: { zh: '概念', en: 'Concept' },
      lines: [{ id: 'concept-1', text: { zh: '第三句', en: 'Third' } }],
    },
  ],
};

describe('buildNarrationQueue', () => {
  it('段落级剧本（手写知识点）：一段一项，行为不变', () => {
    const queue = buildNarrationQueue(sectionLevelScript);
    expect(queue).toHaveLength(2);
    expect(queue[0]).toEqual({
      id: 's1',
      kind: 'intro',
      text: { zh: '引入', en: 'Intro' },
    });
  });

  it('行级剧本（IGCSE 转换课程）：展开为行，保留 action/latex/pause 并继承段落 kind', () => {
    const queue = buildNarrationQueue(lineLevelScript);
    expect(queue.map((item) => item.id)).toEqual(['intro-1', 'intro-2', 'concept-1']);
    expect(queue[0].action).toEqual({ type: 'setParams', params: { u: 0, a: 2 } });
    expect(queue[1].latex).toBe('v = \\frac{s}{t}');
    expect(queue[1].pause).toBe(1);
    expect(queue[1].kind).toBe('intro');
    expect(queue[2].kind).toBe('concept');
    // 无 action/latex/pause 的行不带这些字段
    expect(queue[2]).not.toHaveProperty('action');
    expect(queue[2]).not.toHaveProperty('latex');
    expect(queue[2]).not.toHaveProperty('pause');
  });

  it('空 lines 数组按段落级处理', () => {
    const queue = buildNarrationQueue({
      sections: [{ id: 's', kind: 'concept', text: { zh: '段', en: 'Sec' }, lines: [] }],
    });
    expect(queue).toHaveLength(1);
    expect(queue[0].id).toBe('s');
  });
});

describe('dispatchNarrationAction', () => {
  function makeHandlers() {
    return {
      setParams: vi.fn(),
      resetParams: vi.fn(),
      play: vi.fn(),
      pause: vi.fn(),
      highlight: vi.fn(),
    };
  }

  it('setParams 合并参数', () => {
    const h = makeHandlers();
    dispatchNarrationAction({ type: 'setParams', params: { u: 10, a: 0 } }, h);
    expect(h.setParams).toHaveBeenCalledWith({ u: 10, a: 0 });
    expect(h.resetParams).not.toHaveBeenCalled();
  });

  it('reset / play / pause 分发到对应处理器', () => {
    const h = makeHandlers();
    dispatchNarrationAction({ type: 'reset' }, h);
    dispatchNarrationAction({ type: 'play' }, h);
    dispatchNarrationAction({ type: 'pause' }, h);
    expect(h.resetParams).toHaveBeenCalledTimes(1);
    expect(h.play).toHaveBeenCalledTimes(1);
    expect(h.pause).toHaveBeenCalledTimes(1);
  });

  it('highlight 按选择器高亮；缺 target 时忽略', () => {
    const h = makeHandlers();
    dispatchNarrationAction({ type: 'highlight', target: '.sim-canvas' }, h);
    expect(h.highlight).toHaveBeenCalledWith('.sim-canvas');
    dispatchNarrationAction({ type: 'highlight' }, h);
    expect(h.highlight).toHaveBeenCalledTimes(1);
  });

  it('setParams 缺 params 时忽略', () => {
    const h = makeHandlers();
    dispatchNarrationAction({ type: 'setParams' }, h);
    expect(h.setParams).not.toHaveBeenCalled();
  });
});
