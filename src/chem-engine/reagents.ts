// 移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// 试剂物性映射层：将实验配置中的中文试剂名解析为引擎可识别的 Substance。
// 这里只描述"物质是什么"（化学式/类别），不含任何反应规则——
// 反应判定与现象计算一律交给 src/lib/chem/engine。
//
// 规则按数组顺序优先匹配（顺序敏感）：具体盐 / 有机物等需排在"酸/碱"等
// 通用关键字之前，避免"硝酸银"被误判为酸、"乙酸"被误判为通用酸等。
import type { Substance, SubstanceCategory } from "./engine";
import { REAGENT_RULES } from "./reagentRules";

// 一条关键字 → 物性的匹配规则
export interface ReagentRule {
  keywords: string[];
  formula: string;
  category: SubstanceCategory;
}

// 将试剂标签解析为 Substance；无法识别时归为 other 类，仍可拖入但不触发反应
export function resolveSubstance(label: string): Substance {
  for (const rule of REAGENT_RULES) {
    if (rule.keywords.some((kw) => label.includes(kw))) {
      return { formula: rule.formula, name: label, category: rule.category };
    }
  }
  return { formula: label, name: label, category: "other" };
}

// —— 以下为本项目新增（非 ChemAIForge 原有内容）——
// 常见溶液的显示颜色（供 2D 实验台液体着色用），按化学式索引。
// 仅覆盖试剂库中显色明显的物质；未列出的视为无色透明。
export const SOLUTION_COLORS: Record<string, string> = {
  CuSO4: "#3b82f6", // 蓝色
  CuCl2: "#2563eb", // 蓝绿色（简化为蓝）
  "Cu(NO3)2": "#3b82f6",
  FeCl3: "#d97706", // 黄色/棕黄
  "Fe2(SO4)3": "#d97706",
  "Fe(NO3)3": "#d97706",
  FeSO4: "#4ade80", // 浅绿色
  FeCl2: "#4ade80",
  KMnO4: "#7c3aed", // 紫红色
  K2Cr2O7: "#ea580c", // 橙色
  Cl2: "#a3e635", // 黄绿色（氯水）
  Br2: "#b45309", // 橙红色（溴水）
  I2: "#78350f", // 棕黄色（碘水）
  phenolphthalein: "#f9a8d4", // 酚酞（碱性中显粉红，此处作试剂标识色）
  litmus: "#8b5cf6", // 石蕊紫色
  "methyl-orange": "#f97316", // 甲基橙
};

// 常见沉淀颜色（供沉淀动画用），按产物化学式索引。
export const PRECIPITATE_COLORS: Record<string, string> = {
  "Cu(OH)2": "#3b82f6", // 蓝色絮状
  "Fe(OH)3": "#b45309", // 红褐色
  "Fe(OH)2": "#4ade80", // 白色→灰绿（简化为浅绿）
  "Mg(OH)2": "#e2e8f0", // 白色
  "Al(OH)3": "#e2e8f0",
  CaCO3: "#f1f5f9", // 白色
  BaSO4: "#f8fafc",
  BaCO3: "#f8fafc",
  AgCl: "#f1f5f9", // 白色
  AgBr: "#fef08a", // 淡黄色
  AgI: "#facc15", // 黄色
};

/** 查询某物质溶液的显示颜色；无记录时返回 null（无色） */
export function solutionColor(formula: string): string | null {
  return SOLUTION_COLORS[formula] ?? null;
}
