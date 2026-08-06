/**
 * IGCSE_miniMax 转换课程的仿真集成冒烟测试。
 *
 * 类比探针（probes.test.ts）的冒烟层：对每门转换课程，以其 mmx 内核在默认参数
 * 与每个预设参数下调用，断言返回合法的 SimResult——读数非 NaN、series/bodies/links
 * 等结构合法。另对代表性基元做 jsdom 渲染冒烟，验证移植的基元层真的能画出来。
 */
import { cleanup, render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { igcse0625KnowledgePoints } from '../content/knowledge/igcse/0625';
import type { KnowledgePoint } from '../content/types';
import { KnowledgePointPage } from '../components/knowledge/KnowledgePointPage';
import MmxStage from '../simulations/mmx/MmxStage';
import {
  IMPLEMENTED_PRIMITIVES,
  SIM_PRIMITIVES,
  type MmxSimulation,
  type SimResult,
} from '../simulations/mmx/types';

// 已移植基元清单派生自单一来源（content/sim-spec.ts，经 mmx/types re-export），
// 不再在此另维护一份
const KNOWN_PRIMITIVES = new Set<string>(IMPLEMENTED_PRIMITIVES);

function defaultParams(mmx: MmxSimulation): Record<string, number> {
  return Object.fromEntries(mmx.spec.params.map((p) => [p.key, p.default]));
}

function expectFinite(value: number, what: string) {
  expect(Number.isFinite(value), `${what} 不是有限数: ${value}`).toBe(true);
}

/** SimResult 结构合法性断言（readouts 数值非 NaN，各可选字段结构正确）。 */
function expectValidResult(result: SimResult, mmx: MmxSimulation, what: string) {
  expect(Array.isArray(result.series), `${what}: series 必须是数组`).toBe(true);
  for (const series of result.series) {
    expect(typeof series.key).toBe('string');
    expect(Array.isArray(series.points), `${what}: series ${series.key} points 必须是数组`).toBe(true);
    for (const [x, y] of series.points) {
      expectFinite(x, `${what}: series ${series.key} 点 x`);
      expectFinite(y, `${what}: series ${series.key} 点 y`);
    }
  }

  // spec 声明的每个读数都必须有对应的有限数值
  for (const spec of mmx.spec.readouts) {
    const value = result.readouts[spec.key];
    expect(value, `${what}: 读数 ${spec.key} 缺失`).toBeDefined();
    expectFinite(value, `${what}: 读数 ${spec.key}`);
  }

  if (result.bodies) {
    for (const body of result.bodies) {
      expectFinite(body.x, `${what}: body.x`);
      expectFinite(body.y, `${what}: body.y`);
    }
  }
  if (result.links) {
    const bodyCount = result.bodies?.length ?? 0;
    for (const link of result.links) {
      expect(link.a, `${what}: link.a 越界`).toBeLessThan(bodyCount);
      expect(link.b, `${what}: link.b 越界`).toBeLessThan(bodyCount);
    }
  }
  if (result.markers) {
    for (const marker of result.markers) {
      expectFinite(marker.x, `${what}: marker.x`);
      expectFinite(marker.y, `${what}: marker.y`);
    }
  }
  if (result.bounds) {
    expectFinite(result.bounds.xMin, `${what}: bounds.xMin`);
    expectFinite(result.bounds.xMax, `${what}: bounds.xMax`);
    expectFinite(result.bounds.yMin, `${what}: bounds.yMin`);
    expectFinite(result.bounds.yMax, `${what}: bounds.yMax`);
  }
  if (result.assignment) {
    expect(result.assignment.items.length, `${what}: assignment items 为空`).toBeGreaterThan(0);
    expect(result.assignment.targets.length, `${what}: assignment targets 为空`).toBeGreaterThan(0);
  }
  if (result.grid) {
    expect(result.grid.cells.length, `${what}: grid cells 为空`).toBeGreaterThan(0);
  }
  if (result.pyramid) {
    expect(result.pyramid.levels.length, `${what}: pyramid levels 为空`).toBeGreaterThan(0);
  }
  if (result.equation) {
    expect(result.equation.tally.length, `${what}: equation tally 为空`).toBeGreaterThan(0);
  }
  if (result.chromatogram) {
    expectFinite(result.chromatogram.solventDistance, `${what}: chromatogram.solventDistance`);
  }
}

describe('IGCSE 0625 转换课程 mmx 仿真', () => {
  it('28 课全部带有 simulation.mmx', () => {
    expect(igcse0625KnowledgePoints.length).toBe(28);
    for (const kp of igcse0625KnowledgePoints) {
      expect(kp.simulation?.mmx, `${kp.id} 缺少 simulation.mmx`).toBeDefined();
      expect(kp.simulation?.renderer).toBe('mmx');
    }
  });

  for (const kp of igcse0625KnowledgePoints) {
    describe(kp.id, () => {
      const mmx = kp.simulation!.mmx!;

      it('primitive 已知，spec 结构合法', () => {
        expect(
          KNOWN_PRIMITIVES.has(mmx.spec.primitive),
          `未移植的 primitive: ${mmx.spec.primitive}`,
        ).toBe(true);
        expect(mmx.spec.params.length, 'params 为空').toBeGreaterThan(0);
        for (const p of mmx.spec.params) {
          expectFinite(p.default, `param ${p.key} default`);
          expect(p.min).toBeLessThan(p.max);
          expect(p.step).toBeGreaterThan(0);
        }
      });

      it('默认参数下内核返回合法 SimResult', () => {
        expectValidResult(mmx.kernel(defaultParams(mmx)), mmx, '默认参数');
      });

      it('每个预设下内核返回合法 SimResult', () => {
        for (const preset of mmx.spec.presets ?? []) {
          const params = { ...defaultParams(mmx), ...preset.params };
          expectValidResult(mmx.kernel(params), mmx, `预设 ${preset.label.en}`);
        }
      });
    });
  }
});

// --- 移植基元层的渲染冒烟（jsdom）---

describe('mmx 基元渲染冒烟', () => {
  afterEach(cleanup);

  // 覆盖 0625 用到的代表性基元：plot2d / waves(含 animate) / circuit / field2d / raytrace
  const RENDER_SLUGS = [
    'igcse-0625-1-2-motion',
    'igcse-0625-3-1-waves',
    'igcse-0625-4-3-2-series-parallel',
    'igcse-0625-4-1-magnetism',
    'igcse-0625-3-2-2-refraction',
  ];

  for (const id of RENDER_SLUGS) {
    it(`${id} 渲染出 SVG 画布与读数面板`, () => {
      const kp = igcse0625KnowledgePoints.find((k) => k.id === id);
      expect(kp, `知识点不存在: ${id}`).toBeDefined();
      const mmx = kp!.simulation!.mmx!;
      const { container } = render(
        createElement(MmxStage, { params: defaultParams(mmx), mmx }),
      );
      expect(container.querySelector('svg'), '未渲染出 SVG 画布').not.toBeNull();
      // 读数面板：每个 spec 读数对应一个 <dd> 数值
      expect(container.querySelectorAll('dd').length).toBe(mmx.spec.readouts.length);
    });
  }
});

// --- 基元清单单一来源（SIM_PRIMITIVES / IMPLEMENTED_PRIMITIVES）---

describe('mmx 基元清单', () => {
  it('IMPLEMENTED_PRIMITIVES 是 SIM_PRIMITIVES 的子集，且两者均无重复', () => {
    expect(new Set(SIM_PRIMITIVES).size).toBe(SIM_PRIMITIVES.length);
    expect(new Set(IMPLEMENTED_PRIMITIVES).size).toBe(IMPLEMENTED_PRIMITIVES.length);
    for (const p of IMPLEMENTED_PRIMITIVES) {
      expect(SIM_PRIMITIVES, `IMPLEMENTED 中的 ${p} 不在 SIM_PRIMITIVES`).toContain(p);
    }
    // 未实现的基元（走 SimStage fallback）仍保留在类型联合中
    expect(SIM_PRIMITIVES.length).toBeGreaterThan(IMPLEMENTED_PRIMITIVES.length);
  });
});

// --- 内核单次计算：result prop 复用 ---

describe('mmx 内核单次计算', () => {
  afterEach(cleanup);

  const kp = igcse0625KnowledgePoints[0];

  it('MmxStage：传入 result 时不再调用内核，未传时自行计算一次', () => {
    const mmx = kp.simulation!.mmx!;
    const kernel = vi.fn(mmx.kernel);
    const spyMmx: MmxSimulation = { spec: mmx.spec, kernel };
    const params = defaultParams(mmx);
    const result = mmx.kernel(params);

    const { unmount } = render(createElement(MmxStage, { params, mmx: spyMmx, result }));
    expect(kernel, '传入 result 后不应再跑内核').not.toHaveBeenCalled();
    unmount();

    render(createElement(MmxStage, { params, mmx: spyMmx }));
    expect(kernel, '未传 result 时内部自行计算一次').toHaveBeenCalledTimes(1);
  });

  it('知识点页：liveFormulas 与 MmxStage 共享同一次内核计算', async () => {
    const withFormulas = igcse0625KnowledgePoints.find(
      (k) => (k.simulation?.liveFormulas?.length ?? 0) > 0,
    );
    expect(withFormulas, '测试数据中应存在带 liveFormulas 的 mmx 课程').toBeDefined();
    const mmx = withFormulas!.simulation!.mmx!;
    const kernel = vi.fn(mmx.kernel);
    const kpSpy: KnowledgePoint = {
      ...withFormulas!,
      simulation: { ...withFormulas!.simulation!, mmx: { spec: mmx.spec, kernel } },
    };

    const { container } = render(
      createElement(
        MemoryRouter,
        { initialEntries: ['/zh'] },
        createElement(KnowledgePointPage, { kp: kpSpy, lang: 'zh' as const }),
      ),
    );
    // MmxStage 经 React.lazy 加载：等画布真正挂载后再断言总调用次数
    await waitFor(() => expect(container.querySelector('svg')).not.toBeNull());
    expect(kernel, '内核应只计算一次').toHaveBeenCalledTimes(1);
  });
});
