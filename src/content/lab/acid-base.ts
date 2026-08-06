// 酸碱反应类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const acidBaseExperiments: LabExperiment[] = [
  {
    slug: "acid-base-titration",
    related: ["chem-acidbase-001", "igcse-0620-7-1-acids-bases", "igcse-0620-3-3-moles"],
    syllabus: {
      pep: ["pep-che-j9b/ch3"],
      igcse: ["0620/7.1", "0620/12.2", "0620/3.3"],
    },
    title: { zh: "酸碱中和滴定", en: "Acid–Base Titration" },
    description: {
      zh: "用标准盐酸滴定未知浓度的氢氧化钠溶液，借助酚酞指示剂判断终点，掌握定量分析基本操作。",
      en: "Titrate a sodium hydroxide solution of unknown concentration against standard hydrochloric acid, using phenolphthalein to identify the end point, and practise basic volumetric analysis technique.",
    },
    category: C.ACID_BASE,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["0.1 mol/L 盐酸标准液", "待测氢氧化钠溶液", "酚酞"],
      en: ["0.1 mol/L standard hydrochloric acid", "sodium hydroxide solution (unknown concentration)", "phenolphthalein"],
    },
    apparatus: {
      zh: ["酸式滴定管", "锥形瓶", "移液管", "铁架台"],
      en: ["acid burette", "conical flask", "pipette", "retort stand"],
    },
    objectives: {
      zh: ["理解中和滴定原理与终点判断", "规范使用滴定管", "计算未知浓度"],
      en: ["Understand the principle of neutralisation titrations and end-point detection", "Use a burette correctly", "Calculate an unknown concentration"],
    },
    estimatedMinutes: 45,
    probe: { reagentKeys: ["盐酸", "氢氧化钠"], expect: { reacted: true, thermal: "exothermic" } },
  },
  {
    slug: "hcl-naoh-neutralization",
    related: ["chem-acidbase-001", "chem-energetics-001", "igcse-0620-5-1-energetics"],
    syllabus: {
      pep: ["pep-che-j9b/ch3", "pep-che-s2/ch2"],
      igcse: ["0620/7.1", "0620/5.1"],
    },
    title: { zh: "盐酸与氢氧化钠中和热测定", en: "Measuring the Heat of Neutralisation of Hydrochloric Acid and Sodium Hydroxide" },
    description: {
      zh: "在保温杯量热计中测定盐酸与氢氧化钠反应的中和热，理解放热反应能量变化。",
      en: "Measure the heat of neutralisation of the reaction between hydrochloric acid and sodium hydroxide in an insulated-cup calorimeter, and understand the energy change of an exothermic reaction.",
    },
    category: C.ACID_BASE,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["盐酸", "氢氧化钠", "蒸馏水"],
      en: ["hydrochloric acid", "sodium hydroxide", "distilled water"],
    },
    apparatus: {
      zh: ["量热计", "温度计", "量筒", "环形玻璃搅拌棒"],
      en: ["calorimeter", "thermometer", "measuring cylinder", "ring-shaped glass stirrer"],
    },
    objectives: {
      zh: ["测定中和热", "理解放热反应", "分析实验误差来源"],
      en: ["Measure the heat of neutralisation", "Understand exothermic reactions", "Analyse sources of experimental error"],
    },
    estimatedMinutes: 40,
    probe: { reagentKeys: ["盐酸", "氢氧化钠"], expect: { reacted: true, thermal: "exothermic", gas: false } },
  },
  {
    slug: "indicator-color-change",
    related: ["chem-ph-001", "chem-acidbase-001", "igcse-0620-7-1-acids-bases"],
    syllabus: {
      pep: ["pep-che-j9b/ch3"],
      igcse: ["0620/7.1"],
    },
    title: { zh: "酸碱指示剂变色规律", en: "Colour Changes of Acid–Base Indicators" },
    description: {
      zh: "观察石蕊、酚酞、甲基橙在酸性与碱性溶液中的颜色变化，归纳变色范围。",
      en: "Observe the colour changes of litmus, phenolphthalein and methyl orange in acidic and alkaline solutions, and summarise their colour-change ranges.",
    },
    category: C.ACID_BASE,
    difficulty: D.EASY,
    reagents: {
      zh: ["稀盐酸", "氢氧化钠溶液", "石蕊", "酚酞", "甲基橙"],
      en: ["dilute hydrochloric acid", "sodium hydroxide solution", "litmus", "phenolphthalein", "methyl orange"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管", "白瓷板"],
      en: ["test tube", "dropper", "white tile"],
    },
    objectives: {
      zh: ["认识常见指示剂", "掌握变色规律", "学会判断溶液酸碱性"],
      en: ["Recognise common indicators", "Learn the rules of colour change", "Learn to tell whether a solution is acidic or alkaline"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["氢氧化钠溶液", "酚酞"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "vinegar-soda",
    related: ["chem-acidbase-002", "chem-gas-002", "igcse-0620-7-1-acids-bases"],
    syllabus: {
      pep: ["pep-che-j9b/ch3", "pep-che-j9a/ch6"],
      igcse: ["0620/7.1"],
    },
    title: { zh: "食醋与小苏打反应", en: "Reaction of Vinegar and Baking Soda" },
    description: {
      zh: "探究厨房中食醋（乙酸）与小苏打反应产生二氧化碳的现象，联系生活中的化学。",
      en: "Investigate the carbon dioxide produced when vinegar (ethanoic acid) reacts with baking soda in the kitchen, linking the reaction to chemistry in everyday life.",
    },
    category: C.ACID_BASE,
    difficulty: D.EASY,
    reagents: {
      zh: ["乙酸", "碳酸氢钠"],
      en: ["ethanoic acid", "sodium hydrogencarbonate"],
    },
    apparatus: {
      zh: ["烧杯", "气球", "锥形瓶"],
      en: ["beaker", "balloon", "conical flask"],
    },
    objectives: {
      zh: ["观察弱酸与碳酸氢盐反应", "认识二氧化碳生成", "联系生活实例"],
      en: ["Observe the reaction of a weak acid with a hydrogencarbonate", "Recognise the formation of carbon dioxide", "Relate the reaction to everyday examples"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["乙酸", "碳酸氢钠"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "metal-oxide-acid",
    related: ["chem-acidbase-002", "igcse-0620-7-1-acids-bases", "chem-acidbase-004"],
    syllabus: {
      pep: ["pep-che-j9b/ch3"],
      igcse: ["0620/7.1", "0620/7.2"],
    },
    title: { zh: "氧化铜与稀硫酸反应", en: "Reaction of Copper(II) Oxide with Dilute Sulfuric Acid" },
    description: {
      zh: "观察黑色氧化铜溶于稀硫酸生成蓝色硫酸铜溶液，认识金属氧化物与酸的反应。",
      en: "Observe black copper(II) oxide dissolving in dilute sulfuric acid to form a blue copper(II) sulfate solution, and learn how metal oxides react with acids.",
    },
    category: C.ACID_BASE,
    difficulty: D.EASY,
    reagents: {
      zh: ["氧化铜", "硫酸"],
      en: ["copper(II) oxide", "sulfuric acid"],
    },
    apparatus: {
      zh: ["试管", "酒精灯", "试管夹"],
      en: ["test tube", "alcohol lamp", "test-tube holder"],
    },
    objectives: {
      zh: ["认识碱性氧化物与酸反应", "观察溶液颜色变化", "书写化学方程式"],
      en: ["Learn how basic oxides react with acids", "Observe the colour change of the solution", "Write chemical equations"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["氧化铜", "硫酸"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "limewater-co2",
    related: ["chem-gas-002", "chem-acidbase-003", "igcse-0620-12-5-tests"],
    syllabus: {
      pep: ["pep-che-j9a/ch6"],
      igcse: ["0620/12.5", "0620/7.2"],
    },
    title: { zh: "二氧化碳与石灰水反应", en: "Reaction of Carbon Dioxide with Limewater" },
    description: {
      zh: "向澄清石灰水中通入二氧化碳，观察变浑浊，掌握二氧化碳的检验方法。",
      en: "Bubble carbon dioxide through clear limewater, observe it turning milky, and learn the test for carbon dioxide.",
    },
    category: C.ACID_BASE,
    difficulty: D.EASY,
    reagents: {
      zh: ["氢氧化钙", "二氧化碳"],
      en: ["calcium hydroxide", "carbon dioxide"],
    },
    apparatus: {
      zh: ["试管", "导管", "集气瓶"],
      en: ["test tube", "delivery tube", "gas jar"],
    },
    objectives: {
      zh: ["掌握 CO₂ 检验", "理解碱与酸性氧化物反应", "观察沉淀生成"],
      en: ["Learn the test for CO₂", "Understand the reaction of an alkali with an acidic oxide", "Observe the formation of a precipitate"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["氢氧化钙", "二氧化碳"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "carbonate-acid-identify",
    related: ["chem-acidbase-002", "igcse-0620-12-5-tests", "chem-gas-002"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5", "0620/7.1"],
    },
    title: { zh: "碳酸盐的检验", en: "Testing for Carbonates" },
    description: {
      zh: "用稀盐酸鉴别碳酸钠固体，依据放出能使石灰水变浑浊的气体确认碳酸根。",
      en: "Identify solid sodium carbonate with dilute hydrochloric acid, confirming the carbonate ion by the gas evolved that turns limewater milky.",
    },
    category: C.ACID_BASE,
    difficulty: D.EASY,
    reagents: {
      zh: ["碳酸钠", "盐酸", "氢氧化钙"],
      en: ["sodium carbonate", "hydrochloric acid", "calcium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "导管", "胶头滴管"],
      en: ["test tube", "delivery tube", "dropper"],
    },
    objectives: {
      zh: ["掌握碳酸根检验", "观察产气现象", "联系定性分析"],
      en: ["Learn the test for the carbonate ion", "Observe the evolution of gas", "Relate the test to qualitative analysis"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["碳酸钠", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "ph-measurement",
    related: ["chem-ph-001", "igcse-0620-7-1-acids-bases"],
    syllabus: {
      pep: ["pep-che-j9b/ch3"],
      igcse: ["0620/7.1"],
    },
    title: { zh: "常见溶液 pH 的测定", en: "Measuring the pH of Common Solutions" },
    description: {
      zh: "用 pH 试纸和 pH 计测定多种生活溶液的酸碱度，比较两种方法的精度。",
      en: "Measure the acidity or alkalinity of several everyday solutions with pH paper and a pH meter, and compare the precision of the two methods.",
    },
    category: C.ACID_BASE,
    difficulty: D.EASY,
    reagents: {
      zh: ["盐酸", "氢氧化钠溶液", "食盐水", "pH 试纸"],
      en: ["hydrochloric acid", "sodium hydroxide solution", "sodium chloride solution", "pH paper"],
    },
    apparatus: {
      zh: ["pH 计", "比色卡", "玻璃棒", "表面皿"],
      en: ["pH meter", "colour chart", "glass rod", "watch glass"],
    },
    objectives: {
      zh: ["掌握 pH 测定方法", "理解 pH 与酸碱性", "比较测量精度"],
      en: ["Learn how to measure pH", "Understand the relationship between pH and acidity/alkalinity", "Compare the precision of the measurements"],
    },
    estimatedMinutes: 30,
  },
  {
    slug: "weak-acid-ionization",
    related: ["chem-ph-001", "igcse-0620-7-1-acids-bases", "igcse-0620-6-3-equilibrium"],
    syllabus: {
      pep: ["pep-che-s1/ch1"],
      igcse: ["0620/7.1"],
    },
    title: { zh: "弱电解质的电离", en: "Ionisation of Weak Electrolytes" },
    description: {
      zh: "对比相同浓度盐酸与乙酸的导电性与 pH，理解弱电解质部分电离的特点。",
      en: "Compare the conductivity and pH of hydrochloric acid and ethanoic acid at the same concentration, and understand that weak electrolytes only partially ionise.",
    },
    category: C.ACID_BASE,
    difficulty: D.HARD,
    reagents: {
      zh: ["盐酸", "乙酸", "镁"],
      en: ["hydrochloric acid", "ethanoic acid", "magnesium"],
    },
    apparatus: {
      zh: ["电导率仪", "pH 计", "试管"],
      en: ["conductivity meter", "pH meter", "test tube"],
    },
    objectives: {
      zh: ["区分强弱电解质", "理解电离平衡", "解释导电性差异"],
      en: ["Distinguish strong from weak electrolytes", "Understand ionisation equilibrium", "Explain the difference in conductivity"],
    },
    estimatedMinutes: 40,
    probe: { reagentKeys: ["乙酸", "镁"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "salt-hydrolysis",
    related: ["chem-acidbase-004", "chem-ph-001", "igcse-0620-7-1-acids-bases"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/7.1"],
    },
    title: { zh: "盐类水解探究", en: "Investigating Salt Hydrolysis" },
    description: {
      zh: "测定碳酸钠、氯化铵、氯化钠溶液的 pH，探究盐类水解使溶液呈酸碱性的规律。",
      en: "Measure the pH of sodium carbonate, ammonium chloride and sodium chloride solutions, and investigate how salt hydrolysis makes solutions acidic or alkaline.",
    },
    category: C.ACID_BASE,
    difficulty: D.HARD,
    reagents: {
      zh: ["碳酸钠", "氯化铵", "氯化钠", "酚酞"],
      en: ["sodium carbonate", "ammonium chloride", "sodium chloride", "phenolphthalein"],
    },
    apparatus: {
      zh: ["试管", "pH 计", "胶头滴管"],
      en: ["test tube", "pH meter", "dropper"],
    },
    objectives: {
      zh: ["理解盐类水解原理", "判断盐溶液酸碱性", "书写水解方程式"],
      en: ["Understand the principle of salt hydrolysis", "Judge whether a salt solution is acidic or alkaline", "Write hydrolysis equations"],
    },
    estimatedMinutes: 40,
  },
  {
    slug: "antacid-stomach",
    related: ["chem-acidbase-001", "chem-acidbase-003", "igcse-0620-7-1-acids-bases"],
    syllabus: {
      pep: ["pep-che-j9b/ch3"],
      igcse: ["0620/7.1"],
    },
    title: { zh: "胃药中和胃酸探究", en: "Investigating Antacids Neutralising Stomach Acid" },
    description: {
      zh: "用氢氧化铝、碳酸氢钠等胃药中和模拟胃酸的稀盐酸，联系医药中的酸碱中和。",
      en: "Use antacids such as aluminium hydroxide and sodium hydrogencarbonate to neutralise dilute hydrochloric acid that simulates stomach acid, linking the experiment to acid–base neutralisation in medicine.",
    },
    category: C.ACID_BASE,
    difficulty: D.EASY,
    reagents: {
      zh: ["盐酸", "碳酸氢钠", "甲基橙"],
      en: ["hydrochloric acid", "sodium hydrogencarbonate", "methyl orange"],
    },
    apparatus: {
      zh: ["烧杯", "玻璃棒", "pH 计"],
      en: ["beaker", "glass rod", "pH meter"],
    },
    objectives: {
      zh: ["认识抗酸药原理", "观察中和过程", "联系医学应用"],
      en: ["Understand how antacids work", "Observe the neutralisation process", "Relate the reaction to medical applications"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["盐酸", "碳酸氢钠"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "diprotic-acid-titration",
    related: ["chem-acidbase-001", "chem-acidbase-002", "igcse-0620-3-3-moles"],
    syllabus: {
      pep: ["pep-che-j9b/ch3"],
      igcse: ["0620/7.1", "0620/12.2", "0620/3.3"],
    },
    title: { zh: "二元酸的分步滴定", en: "Stepwise Titration of a Diprotic Acid" },
    description: {
      zh: "用氢氧化钠分步滴定硫酸，结合 pH 曲线认识多元强酸的中和特征。",
      en: "Titrate sulfuric acid stepwise with sodium hydroxide and, using the pH curve, learn the neutralisation behaviour of a strong polyprotic acid.",
    },
    category: C.ACID_BASE,
    difficulty: D.HARD,
    reagents: {
      zh: ["硫酸", "氢氧化钠", "酚酞"],
      en: ["sulfuric acid", "sodium hydroxide", "phenolphthalein"],
    },
    apparatus: {
      zh: ["碱式滴定管", "锥形瓶", "pH 计"],
      en: ["alkali burette", "conical flask", "pH meter"],
    },
    objectives: {
      zh: ["绘制滴定曲线", "认识多元酸", "计算浓度"],
      en: ["Plot a titration curve", "Recognise polyprotic acids", "Calculate a concentration"],
    },
    estimatedMinutes: 45,
    probe: { reagentKeys: ["硫酸", "氢氧化钠"], expect: { reacted: true, thermal: "exothermic" } },
  },
  {
    slug: "buffer-solution",
    related: ["chem-ph-001", "igcse-0620-7-1-acids-bases", "chem-energetics-003"],
    syllabus: {
      pep: ["pep-che-s1/ch1"],
      igcse: ["0620/7.1"],
    },
    title: { zh: "缓冲溶液的性质", en: "Properties of Buffer Solutions" },
    description: {
      zh: "配制乙酸-乙酸钠缓冲液并测试加入少量酸碱后 pH 的稳定性，理解缓冲作用。",
      en: "Prepare an ethanoic acid–sodium ethanoate buffer and test the stability of its pH when small amounts of acid or alkali are added, to understand buffer action.",
    },
    category: C.ACID_BASE,
    difficulty: D.HARD,
    reagents: {
      zh: ["乙酸", "氢氧化钠", "盐酸"],
      en: ["ethanoic acid", "sodium hydroxide", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["pH 计", "烧杯", "移液管"],
      en: ["pH meter", "beaker", "pipette"],
    },
    objectives: {
      zh: ["理解缓冲原理", "测试 pH 稳定性", "联系血液缓冲"],
      en: ["Understand the principle of buffering", "Test the pH stability", "Relate buffering to blood buffers"],
    },
    estimatedMinutes: 40,
    probe: { reagentKeys: ["乙酸", "氢氧化钠"], expect: { reacted: true } },
  },
];
