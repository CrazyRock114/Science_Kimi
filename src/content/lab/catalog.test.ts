// 实验目录数据驱动测试（适配双语数据结构，含双语完整性断言）
// 移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// 遍历全部实验，逐一验证：
//  1) slug 唯一、字段完整、分类/难度合法
//  2) zh/en 双语字段均非空且数组按索引一一对应
//  3) 预计时长为正整数
import { describe, expect, it } from "vitest";
import { allLabExperiments } from "./index";
import {
  ExperimentCategory,
  ExperimentDifficulty,
} from "../../chem-engine/experiment-types";
import type { Localized } from "../types";

const CATEGORIES = Object.values(ExperimentCategory);
const DIFFICULTIES = Object.values(ExperimentDifficulty);
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe("实验目录 - 规模与唯一性", () => {
  it("实验数量不少于 100 个", () => {
    expect(allLabExperiments.length).toBeGreaterThanOrEqual(100);
  });

  it("所有 slug 唯一且符合 kebab-case", () => {
    const slugs = allLabExperiments.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(SLUG_RE);
  });
});

describe.each(allLabExperiments.map((e) => [e.slug, e] as const))(
  "实验字段完整性 - %s",
  (_slug, exp) => {
    it("标题与描述非空（双语）", () => {
      expect(exp.title.zh.trim().length).toBeGreaterThan(0);
      expect(exp.title.en.trim().length).toBeGreaterThan(0);
      expect(exp.description.zh.trim().length).toBeGreaterThan(0);
      expect(exp.description.en.trim().length).toBeGreaterThan(0);
    });

    it("分类与难度合法", () => {
      expect(CATEGORIES).toContain(exp.category);
      expect(DIFFICULTIES).toContain(exp.difficulty);
    });

    it("试剂/仪器/目标均非空数组（双语）", () => {
      for (const field of [
        exp.reagents,
        exp.apparatus,
        exp.objectives,
      ] as Localized<string[]>[]) {
        expect(field.zh.length).toBeGreaterThan(0);
        expect(field.en.length).toBeGreaterThan(0);
      }
    });

    it("双语数组按索引一一对应且逐项非空", () => {
      for (const field of [
        exp.reagents,
        exp.apparatus,
        exp.objectives,
      ] as Localized<string[]>[]) {
        expect(field.en.length).toBe(field.zh.length);
        for (const item of [...field.zh, ...field.en]) {
          expect(item.trim().length).toBeGreaterThan(0);
        }
      }
    });

    it("预计时长为正整数", () => {
      expect(Number.isInteger(exp.estimatedMinutes)).toBe(true);
      expect(exp.estimatedMinutes).toBeGreaterThan(0);
    });
  },
);
