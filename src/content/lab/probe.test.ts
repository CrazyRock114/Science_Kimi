// 实验反应探针测试（适配双语数据结构）
// 移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// 对每个带 probe 的实验：把 reagentKeys 解析为 Substance 送入反应引擎，
// 断言引擎产出的现象与 probe.expect 声明一致。
// 这是「实验真能反应」的核心校验 —— 引擎是事实来源，probe 是该实验的契约。
import { describe, expect, it } from "vitest";
import { allLabExperiments } from "./index";
import { resolveSubstance } from "../../chem-engine/reagents";
import { react } from "../../chem-engine/engine";

const withProbe = allLabExperiments.filter((e) => e.probe);

describe("实验反应探针 - 覆盖率", () => {
  it("过半实验声明了可验证的核心反应探针", () => {
    expect(withProbe.length).toBeGreaterThanOrEqual(
      Math.floor(allLabExperiments.length / 2),
    );
  });
});

describe.each(withProbe.map((e) => [e.slug, e] as const))(
  "反应探针 - %s",
  (_slug, exp) => {
    const probe = exp.probe!;

    it("核心试剂均可被试剂库解析（非 other 兜底）", () => {
      for (const key of probe.reagentKeys) {
        const sub = resolveSubstance(key);
        // 解析命中具体物质时 formula 会不同于原始标签或类别非 other
        expect(sub.category !== "other" || sub.formula !== key).toBe(true);
      }
    });

    it("引擎计算现象与探针声明一致", () => {
      const inputs = probe.reagentKeys.map(resolveSubstance);
      const r = react(inputs);
      const e = probe.expect;

      expect(r.reacted).toBe(e.reacted);
      if (e.gas !== undefined) expect(r.producesGas).toBe(e.gas);
      if (e.precipitate !== undefined)
        expect(r.producesPrecipitate).toBe(e.precipitate);
      if (e.colorChange !== undefined)
        expect(r.colorChange).toBe(e.colorChange);
      if (e.thermal !== undefined) expect(r.thermal).toBe(e.thermal);
    });
  },
);
