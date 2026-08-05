import { describe, expect, it } from 'vitest';
import { getAllKnowledgePoints } from '../content/knowledge';

/**
 * 探针机制：遍历所有知识点的 expectedResults，执行内核纯函数并断言预期数值。
 * 内容正确性的自动化保障（新增知识点时探针随数据一起入库）。
 */
// IGCSE 转换课程正文按课懒加载，测试统一异步收集全量知识点（测试不在 bundle 内）
const knowledgePoints = await getAllKnowledgePoints();

describe('内容探针（expectedResults）', () => {
  const cases = knowledgePoints.flatMap((kp) =>
    (kp.expectedResults ?? []).map((probe) => ({ kp, probe })),
  );

  it('至少存在一个探针', () => {
    expect(cases.length).toBeGreaterThan(0);
  });

  for (const { kp, probe } of cases) {
    it(`${kp.id} / ${probe.id}: ${probe.description.zh}`, () => {
      const kernel = kp.kernels?.[probe.kernel];
      expect(kernel, `知识点 ${kp.id} 缺少内核函数 "${probe.kernel}"`).toBeDefined();
      const actual = kernel!(probe.input);
      const tolerance = probe.tolerance ?? 1e-6;
      for (const [key, expected] of Object.entries(probe.expected)) {
        const value = actual[key];
        expect(value, `输出 "${key}" 缺失`).toBeDefined();
        const delta = Math.abs(value - expected);
        const allowed = Math.max(tolerance, tolerance * Math.abs(expected));
        expect(
          delta,
          `${key}: 预期 ${expected}，实际 ${value}`,
        ).toBeLessThanOrEqual(allowed);
      }
    });
  }
});
