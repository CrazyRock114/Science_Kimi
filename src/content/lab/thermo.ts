// 热力学与能量类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const thermoExperiments: LabExperiment[] = [
  {
    slug: "solubility-measurement",
    title: { zh: "硝酸钾溶解度测定", en: "Measuring the Solubility of Potassium Nitrate" },
    description: {
      zh: "在不同温度下测定硝酸钾溶解度并绘制溶解度曲线，探究温度对溶解度的影响。",
      en: "Measure the solubility of potassium nitrate at different temperatures, plot a solubility curve, and investigate the effect of temperature on solubility.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.HARD,
    reagents: {
      zh: ["硝酸钾", "蒸馏水"],
      en: ["potassium nitrate", "distilled water"],
    },
    apparatus: {
      zh: ["烧杯", "温度计", "电子天平", "玻璃棒"],
      en: ["beaker", "thermometer", "electronic balance", "glass rod"],
    },
    objectives: {
      zh: ["掌握溶解度概念", "探究温度影响", "绘制溶解度曲线"],
      en: ["Understand the concept of solubility", "Investigate the effect of temperature", "Plot a solubility curve"],
    },
    estimatedMinutes: 60,
  },
  {
    slug: "dissolution-heat",
    title: { zh: "溶解过程的吸热与放热", en: "Endothermic and Exothermic Dissolving" },
    description: {
      zh: "对比氢氧化钠、硝酸铵、氯化钠溶于水时的温度变化，认识溶解热效应。",
      en: "Compare the temperature changes when sodium hydroxide, ammonium nitrate and sodium chloride dissolve in water, and recognise the heat effects of dissolving.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.EASY,
    reagents: {
      zh: ["氢氧化钠", "硝酸铵", "氯化钠", "蒸馏水"],
      en: ["sodium hydroxide", "ammonium nitrate", "sodium chloride", "distilled water"],
    },
    apparatus: {
      zh: ["烧杯", "温度计", "玻璃棒"],
      en: ["beaker", "thermometer", "glass rod"],
    },
    objectives: {
      zh: ["认识溶解热", "区分吸放热", "联系即热即冷包"],
      en: ["Recognise the heat of dissolving", "Distinguish endothermic from exothermic dissolving", "Relate to instant hot and cold packs"],
    },
    estimatedMinutes: 25,
  },
  {
    slug: "neutralization-enthalpy",
    title: { zh: "中和反应反应热测定", en: "Measuring the Enthalpy Change of Neutralisation" },
    description: {
      zh: "测定强酸强碱中和反应的反应热，理解放热反应与能量守恒。",
      en: "Measure the enthalpy change of the neutralisation between a strong acid and a strong alkali, and understand exothermic reactions and the conservation of energy.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["盐酸", "氢氧化钠"],
      en: ["hydrochloric acid", "sodium hydroxide"],
    },
    apparatus: {
      zh: ["量热计", "温度计", "量筒"],
      en: ["calorimeter", "thermometer", "measuring cylinder"],
    },
    objectives: {
      zh: ["测定中和热", "理解反应热", "分析误差"],
      en: ["Measure the enthalpy change of neutralisation", "Understand enthalpy changes of reaction", "Analyse sources of error"],
    },
    estimatedMinutes: 40,
    probe: { reagentKeys: ["盐酸", "氢氧化钠"], expect: { reacted: true, thermal: "exothermic" } },
  },
  {
    slug: "endothermic-reaction",
    title: { zh: "吸热反应探究", en: "Investigating an Endothermic Reaction" },
    description: {
      zh: "氢氧化钡晶体与氯化铵固体混合反应温度骤降，认识典型吸热反应。",
      en: "Mix barium hydroxide crystals with solid ammonium chloride: the temperature drops sharply, illustrating a classic endothermic reaction.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["氢氧化钡", "氯化铵"],
      en: ["barium hydroxide", "ammonium chloride"],
    },
    apparatus: {
      zh: ["小烧杯", "温度计", "玻璃片", "木板"],
      en: ["small beaker", "thermometer", "glass plate", "wooden board"],
    },
    objectives: {
      zh: ["认识吸热反应", "观察结冰现象", "理解能量变化"],
      en: ["Recognise endothermic reactions", "Observe the freezing of water", "Understand energy changes"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["氢氧化钡", "氯化铵"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "reaction-rate-temperature",
    title: { zh: "温度对反应速率的影响", en: "The Effect of Temperature on the Rate of Reaction" },
    description: {
      zh: "对比不同温度下硫代硫酸钠与稀硫酸反应出现浑浊的时间，探究温度对速率的影响。",
      en: "Compare the time taken for the mixture of sodium thiosulfate and dilute sulfuric acid to turn cloudy at different temperatures, and investigate the effect of temperature on the rate of reaction.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["硫酸", "蒸馏水"],
      en: ["sulfuric acid", "distilled water"],
    },
    apparatus: {
      zh: ["锥形瓶", "水浴", "秒表", "温度计"],
      en: ["conical flask", "water bath", "stopwatch", "thermometer"],
    },
    objectives: {
      zh: ["探究温度影响", "控制变量", "记录反应时间"],
      en: ["Investigate the effect of temperature", "Control variables", "Record the reaction time"],
    },
    estimatedMinutes: 35,
  },
  {
    slug: "concentration-rate",
    title: { zh: "浓度对反应速率的影响", en: "The Effect of Concentration on the Rate of Reaction" },
    description: {
      zh: "对比不同浓度盐酸与同样大小镁条反应产气快慢，定量认识浓度对速率的影响。",
      en: "Compare how quickly gas is produced when magnesium strips of the same size react with hydrochloric acid of different concentrations, and understand quantitatively the effect of concentration on the rate of reaction.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["盐酸", "镁"],
      en: ["hydrochloric acid", "magnesium"],
    },
    apparatus: {
      zh: ["试管", "秒表", "量筒"],
      en: ["test tube", "stopwatch", "measuring cylinder"],
    },
    objectives: {
      zh: ["探究浓度影响", "控制变量", "记录产气速率"],
      en: ["Investigate the effect of concentration", "Control variables", "Record the rate of gas production"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["盐酸", "镁"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "catalyst-rate",
    title: { zh: "催化剂对反应速率的影响", en: "The Effect of a Catalyst on the Rate of Reaction" },
    description: {
      zh: "对比有无二氧化锰时过氧化氢分解产氧速率，认识催化剂显著加快反应。",
      en: "Compare the rate of oxygen production from the decomposition of hydrogen peroxide with and without manganese(IV) oxide, and recognise that a catalyst significantly speeds up a reaction.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.EASY,
    reagents: {
      zh: ["过氧化氢", "二氧化锰"],
      en: ["hydrogen peroxide", "manganese(IV) oxide"],
    },
    apparatus: {
      zh: ["锥形瓶", "带火星木条", "秒表"],
      en: ["conical flask", "glowing splint", "stopwatch"],
    },
    objectives: {
      zh: ["认识催化作用", "对比反应速率", "理解催化机理"],
      en: ["Recognise catalysis", "Compare rates of reaction", "Understand how a catalyst works"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["过氧化氢", "二氧化锰"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "surface-area-rate",
    title: { zh: "接触面积对反应速率的影响", en: "The Effect of Surface Area on the Rate of Reaction" },
    description: {
      zh: "对比块状与粉末状碳酸钙与盐酸反应的快慢，认识反应物接触面积的影响。",
      en: "Compare how quickly lump and powdered calcium carbonate react with hydrochloric acid, and recognise the effect of the surface area of reactants.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.EASY,
    reagents: {
      zh: ["碳酸钙", "盐酸"],
      en: ["calcium carbonate", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["锥形瓶", "电子天平", "秒表"],
      en: ["conical flask", "electronic balance", "stopwatch"],
    },
    objectives: {
      zh: ["探究接触面积", "控制变量", "记录产气量"],
      en: ["Investigate the effect of surface area", "Control variables", "Record the volume of gas produced"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["碳酸钙", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "chemical-equilibrium-temp",
    title: { zh: "温度对化学平衡的影响", en: "The Effect of Temperature on Chemical Equilibrium" },
    description: {
      zh: "通过二氧化氮与四氧化二氮平衡体系在冷热水中的颜色变化，认识温度对平衡的影响。",
      en: "Observe the colour change of the nitrogen dioxide / dinitrogen tetroxide equilibrium mixture in cold and hot water, and recognise the effect of temperature on equilibrium.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.HARD,
    reagents: {
      zh: ["蒸馏水"],
      en: ["distilled water"],
    },
    apparatus: {
      zh: ["密封球管", "冷水浴", "热水浴"],
      en: ["sealed tube", "cold water bath", "hot water bath"],
    },
    objectives: {
      zh: ["认识平衡移动", "观察颜色变化", "理解勒夏特列原理"],
      en: ["Recognise shifts in equilibrium", "Observe colour changes", "Understand Le Chatelier's principle"],
    },
    estimatedMinutes: 30,
  },
  {
    slug: "instant-cold-pack",
    title: { zh: "化学冷热袋原理", en: "The Principle of Chemical Hot and Cold Packs" },
    description: {
      zh: "利用硝酸铵溶解吸热制作简易冷敷袋，联系溶解热在生活中的应用。",
      en: "Use the endothermic dissolving of ammonium nitrate to make a simple cold pack, and relate the heat of dissolving to everyday applications.",
    },
    category: C.THERMODYNAMICS,
    difficulty: D.EASY,
    reagents: {
      zh: ["硝酸铵", "蒸馏水"],
      en: ["ammonium nitrate", "distilled water"],
    },
    apparatus: {
      zh: ["密封袋", "温度计"],
      en: ["sealable bag", "thermometer"],
    },
    objectives: {
      zh: ["应用溶解吸热", "测量降温幅度", "联系医用冷敷"],
      en: ["Apply endothermic dissolving", "Measure the temperature drop", "Relate to medical cold packs"],
    },
    estimatedMinutes: 20,
  },
];
