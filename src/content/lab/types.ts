// 实验目录数据类型（双语版）
// 移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原仓库中文原文，en 字段为本项目翻译（IGCSE 常用表述）。
// probe 描述该实验"核心反应"的可验证特征：把 reagentKeys 经试剂库解析后送入
// 反应引擎，断言产出的现象与 expect 一致 —— 这保证每个实验在系统里"真能反应"。
import type {
  ExperimentCategory,
  ExperimentDifficulty,
} from "../../chem-engine/experiment-types";
import type { Localized } from "../types";

/** 反应探针的预期现象（仅声明关心的维度，未声明的不校验） */
export interface ReactionExpectation {
  /** 是否应发生反应 */
  reacted: boolean;
  /** 是否产气 */
  gas?: boolean;
  /** 是否产沉淀 */
  precipitate?: boolean;
  /** 是否变色 */
  colorChange?: boolean;
  /** 热效应 */
  thermal?: "exothermic" | "endothermic" | "none";
}

/** 核心反应探针：用于测试与实验台默认演示 */
export interface ReactionProbe {
  /** 参与核心反应的试剂中文名（须能被 resolveSubstance 解析，保持中文）*/
  reagentKeys: string[];
  /** 预期现象 */
  expect: ReactionExpectation;
}

/** 一条实验的完整定义（双语） */
export interface LabExperiment {
  slug: string;
  title: Localized<string>;
  description: Localized<string>;
  category: ExperimentCategory;
  difficulty: ExperimentDifficulty;
  /** 试剂名（zh/en 数组按索引一一对应） */
  reagents: Localized<string[]>;
  /** 仪器名（zh/en 数组按索引一一对应） */
  apparatus: Localized<string[]>;
  /** 实验目标（zh/en 数组按索引一一对应） */
  objectives: Localized<string[]>;
  estimatedMinutes: number;
  /** 核心反应探针；纯观察 / 测量类实验可省略（无强反应） */
  probe?: ReactionProbe;
}
