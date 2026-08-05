/**
 * IGCSE_miniMax 转换课程的仿真集成冒烟测试。
 *
 * 类比探针（probes.test.ts）的冒烟层：对每门转换课程，以其 mmx 内核在默认参数
 * 与每个预设参数下调用，断言返回合法的 SimResult——读数非 NaN、series/bodies/links
 * 等结构合法。另对代表性基元做 jsdom 渲染冒烟，验证移植的基元层真的能画出来。
 */
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { igcse0625KnowledgePoints } from '../content/knowledge/igcse/0625';
import MmxStage from '../simulations/mmx/MmxStage';
import type { MmxSimulation, SimResult } from '../simulations/mmx/types';

const KNOWN_PRIMITIVES = new Set([
  'plot2d',
  'atom',
  'molecule',
  'balance',
  'bonding',
  'chromatogram',
  'giant',
  'ladder',
  'lattice',
  'periodictable',
  'sort',
  'match',
  'punnett',
  'pyramid',
  'beam',
  'vectors',
  'particles',
  'waves',
  'raytrace',
  'circuit',
  'field2d',
]);

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
