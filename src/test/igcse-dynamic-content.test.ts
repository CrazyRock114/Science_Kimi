/**
 * IGCSE 转换课程恢复的动态内容的集成验证。
 *
 * 转换器（scripts/convert-igcse-lessons.ts）把源课程的 narration 行级
 * action/latex/pause 与 equations 的 substitute(readouts) 以代码形式接入。
 * 这里对全部 75 门转换课程断言：
 * - 讲解剧本含行级 lines，且播放队列 id 全局唯一（播放器以其为音频寻址与 React key）；
 * - liveFormulas 的 substituteFromReadouts 用真实内核读数执行返回合法 KaTeX 字符串
 *   （等价于对 substitute 函数源码的逐课运行验证）。
 */
import { describe, expect, it } from 'vitest';
import { getAllKnowledgePoints } from '../content/knowledge';
import { buildNarrationQueue } from '../lib/narration';

const knowledgePoints = await getAllKnowledgePoints();
const igcsePoints = knowledgePoints.filter((kp) => kp.id.startsWith('igcse-'));

describe('IGCSE 转换课程的动态内容（narration lines + liveFormulas）', () => {
  it('覆盖全部三科转换课程', () => {
    expect(igcsePoints.length).toBe(75);
  });

  for (const kp of igcsePoints) {
    describe(kp.id, () => {
      it('讲解剧本含行级 lines，播放队列 id 唯一', () => {
        expect(kp.narration, '转换课程必须有讲解剧本').toBeDefined();
        const queue = buildNarrationQueue(kp.narration!);
        expect(queue.length).toBeGreaterThan(0);
        expect(
          kp.narration!.sections.some((s) => s.lines && s.lines.length > 0),
          '转换课程的讲解剧本必须含行级 lines',
        ).toBe(true);
        const ids = queue.map((item) => item.id);
        expect(new Set(ids).size, '播放队列 id 重复').toBe(ids.length);
        for (const item of queue) {
          expect(item.text.zh.trim(), `行 ${item.id} 缺少中文`).not.toBe('');
          expect(item.text.en.trim(), `行 ${item.id} 缺少英文`).not.toBe('');
        }
      });

      it('liveFormulas 用内核读数代入可执行', () => {
        const mmx = kp.simulation?.mmx;
        if (!mmx || !kp.simulation?.liveFormulas) return;
        const defaults = Object.fromEntries(mmx.spec.params.map((p) => [p.key, p.default]));
        const readouts = mmx.kernel(defaults).readouts;
        for (const lf of kp.simulation.liveFormulas) {
          expect('substitute' in lf, '转换课程的 liveFormulas 必须是读数代入变体').toBe(false);
          if ('substituteFromReadouts' in lf) {
            const latex = lf.substituteFromReadouts(readouts);
            expect(typeof latex, `${lf.id} substitute 未返回字符串`).toBe('string');
            expect(latex.trim(), `${lf.id} substitute 返回空`).not.toBe('');
          }
        }
      });
    });
  }

  it('恢复的动态内容总量与源课程一致', () => {
    let substitutes = 0;
    let actions = 0;
    let latexes = 0;
    let pauses = 0;
    for (const kp of igcsePoints) {
      substitutes += kp.simulation?.liveFormulas?.length ?? 0;
      for (const item of buildNarrationQueue(kp.narration!)) {
        if (item.action) actions++;
        if (item.latex) latexes++;
        if (item.pause) pauses++;
      }
    }
    // 源课程（IGCSE_miniMax）总量：substitute 48+36+15，action 111+140+106，
    // latex 22+1+0，pause 29+36+28（转换日志口径）
    expect(substitutes).toBe(99);
    expect(actions).toBe(357);
    expect(latexes).toBe(23);
    expect(pauses).toBe(93);
  });
});
