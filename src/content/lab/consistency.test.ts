// 数据一致性测试（适配双语数据结构）：probe 声明的核心反应试剂必须真实存在于
// 该实验的 reagents 列表（按中文名解析），防止"probe 用列表外试剂"导致用户在
// 实验台拖入实际试剂却无现象（如原仓库 fe2-fe3-conversion 旧问题）。
// 移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
import { describe, it, expect } from "vitest";
import { allLabExperiments } from "./index";
import { resolveSubstance } from "../../chem-engine/reagents";
import { knowledgePointMetas } from "../knowledge";
import { resolveIgcseRef } from "../syllabus/igcse";
import { resolvePepRef } from "../syllabus/pep";

describe("实验数据一致性", () => {
  it("每个 probe 的 reagentKeys 都能由该实验的 reagents 覆盖（化学式一致）", () => {
    const offenders: string[] = [];
    for (const e of allLabExperiments) {
      if (!e.probe) continue;
      const reagentForms = new Set(
        e.reagents.zh.map((r) => resolveSubstance(r).formula),
      );
      for (const key of e.probe.reagentKeys) {
        if (!reagentForms.has(resolveSubstance(key).formula)) {
          offenders.push(`${e.slug}: probe "${key}" 不在 reagents`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });

  it("每个实验都有标题、描述、目标与正向时长（双语）", () => {
    for (const e of allLabExperiments) {
      expect(e.title.zh.length).toBeGreaterThan(0);
      expect(e.title.en.length).toBeGreaterThan(0);
      expect(e.description.zh.length).toBeGreaterThanOrEqual(10);
      expect(e.description.en.length).toBeGreaterThanOrEqual(10);
      expect(e.objectives.zh.length).toBeGreaterThan(0);
      expect(e.objectives.en.length).toBeGreaterThan(0);
      expect(e.estimatedMinutes).toBeGreaterThan(0);
    }
  });

  it("related 知识点 id 与 syllabus 考纲引用可解析", () => {
    const kpIds = new Set(knowledgePointMetas.map((m) => m.id));
    for (const e of allLabExperiments) {
      for (const id of e.related ?? []) {
        expect(kpIds.has(id), `${e.slug} related 引用了不存在的知识点: ${id}`).toBe(true);
      }
      for (const ref of e.syllabus?.igcse ?? []) {
        expect(resolveIgcseRef(ref), `${e.slug} IGCSE 引用无法解析: ${ref}`).toBeDefined();
      }
      for (const ref of e.syllabus?.pep ?? []) {
        expect(resolvePepRef(ref), `${e.slug} 人教版引用无法解析: ${ref}`).toBeDefined();
      }
    }
  });
});
