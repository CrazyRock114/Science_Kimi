// 实验目录聚合入口（双语版）
// 移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
import type { LabExperiment } from "./types";
import { acidBaseExperiments } from "./acid-base";
import { gasExperiments } from "./gas";
import { precipitationExperiments } from "./precipitation";
import { redoxExperiments } from "./redox";
import { metalExperiments } from "./metal";
import { coordinationExperiments } from "./coordination";
import { organicExperiments } from "./organic";
import { thermoExperiments } from "./thermo";
import { analysisExperiments } from "./analysis";

export const allLabExperiments: LabExperiment[] = [
  ...acidBaseExperiments,
  ...gasExperiments,
  ...precipitationExperiments,
  ...redoxExperiments,
  ...metalExperiments,
  ...coordinationExperiments,
  ...organicExperiments,
  ...thermoExperiments,
  ...analysisExperiments,
];

/** 按 slug 查找实验 */
export function getLabExperiment(slug: string): LabExperiment | undefined {
  return allLabExperiments.find((e) => e.slug === slug);
}

export type { LabExperiment, ReactionProbe, ReactionExpectation } from "./types";
