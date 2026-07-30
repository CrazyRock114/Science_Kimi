// 气体制备与性质类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const gasExperiments: LabExperiment[] = [
  {
    slug: "co2-preparation",
    title: { zh: "二氧化碳的实验室制取", en: "Laboratory Preparation of Carbon Dioxide" },
    description: {
      zh: "用大理石（碳酸钙）与稀盐酸反应制取二氧化碳，掌握气体发生与收集装置。",
      en: "Prepare carbon dioxide by reacting marble (calcium carbonate) with dilute hydrochloric acid, and learn how to set up gas generation and collection apparatus.",
    },
    category: C.GAS,
    difficulty: D.EASY,
    reagents: {
      zh: ["碳酸钙", "盐酸", "氢氧化钙"],
      en: ["calcium carbonate", "hydrochloric acid", "calcium hydroxide"],
    },
    apparatus: {
      zh: ["启普发生器", "集气瓶", "导管", "玻璃片"],
      en: ["Kipp's apparatus", "gas jar", "delivery tube", "glass plate"],
    },
    objectives: {
      zh: ["掌握 CO₂ 制取原理", "学会向上排空气法收集", "检验 CO₂"],
      en: ["Master the principle of CO2 preparation", "Learn to collect gas by upward displacement of air", "Test for CO2"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["碳酸钙", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "o2-from-h2o2",
    title: { zh: "过氧化氢制氧气", en: "Preparing Oxygen from Hydrogen Peroxide" },
    description: {
      zh: "以二氧化锰为催化剂分解过氧化氢制取氧气，理解催化剂的作用。",
      en: "Prepare oxygen by decomposing hydrogen peroxide with manganese(IV) oxide as the catalyst, and understand the role of a catalyst.",
    },
    category: C.GAS,
    difficulty: D.EASY,
    reagents: {
      zh: ["过氧化氢", "二氧化锰"],
      en: ["hydrogen peroxide", "manganese(IV) oxide"],
    },
    apparatus: {
      zh: ["锥形瓶", "分液漏斗", "导管", "集气瓶"],
      en: ["conical flask", "separating funnel", "delivery tube", "gas jar"],
    },
    objectives: {
      zh: ["掌握氧气制取", "理解催化剂作用", "学会排水法收集"],
      en: ["Master the preparation of oxygen", "Understand the action of a catalyst", "Learn to collect gas over water"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["过氧化氢", "二氧化锰"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "h2-from-zinc",
    title: { zh: "锌与稀硫酸制氢气", en: "Preparing Hydrogen from Zinc and Dilute Sulfuric Acid" },
    description: {
      zh: "用锌粒与稀硫酸反应制取氢气，验证氢气的可燃性与爆鸣实验。",
      en: "Prepare hydrogen by reacting zinc granules with dilute sulfuric acid, and demonstrate its flammability with the pop test.",
    },
    category: C.GAS,
    difficulty: D.EASY,
    reagents: {
      zh: ["锌", "硫酸"],
      en: ["zinc", "sulfuric acid"],
    },
    apparatus: {
      zh: ["试管", "导管", "尖嘴管", "肥皂水"],
      en: ["test tube", "delivery tube", "jet tube", "soap solution"],
    },
    objectives: {
      zh: ["掌握氢气制取", "检验氢气纯度", "观察爆鸣现象"],
      en: ["Master the preparation of hydrogen", "Test the purity of hydrogen", "Observe the pop test"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["锌", "硫酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "nh3-preparation",
    title: { zh: "氨气的制取与喷泉实验", en: "Preparing Ammonia and the Fountain Experiment" },
    description: {
      zh: "氯化铵与熟石灰共热制取氨气，并完成经典的氨气喷泉实验观察其极易溶于水。",
      en: "Prepare ammonia by heating ammonium chloride with slaked lime, then perform the classic ammonia fountain experiment to show its extreme solubility in water.",
    },
    category: C.GAS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["氯化铵", "氢氧化钙", "酚酞"],
      en: ["ammonium chloride", "calcium hydroxide", "phenolphthalein"],
    },
    apparatus: {
      zh: ["大试管", "圆底烧瓶", "导管", "胶头滴管"],
      en: ["large test tube", "round-bottom flask", "delivery tube", "dropping pipette"],
    },
    objectives: {
      zh: ["掌握氨气制取", "理解喷泉原理", "检验氨气"],
      en: ["Master the preparation of ammonia", "Understand the principle of the fountain experiment", "Test for ammonia"],
    },
    estimatedMinutes: 40,
    probe: { reagentKeys: ["氯化铵", "氢氧化钙"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "so2-preparation",
    title: { zh: "二氧化硫的制取与性质", en: "Preparation and Properties of Sulfur Dioxide" },
    description: {
      zh: "亚硫酸钠与硫酸反应制取二氧化硫，验证其漂白性与还原性。",
      en: "Prepare sulfur dioxide by reacting sodium sulfite with sulfuric acid, and demonstrate its bleaching and reducing properties.",
    },
    category: C.GAS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["亚硫酸钠", "硫酸", "石蕊"],
      en: ["sodium sulfite", "sulfuric acid", "litmus"],
    },
    apparatus: {
      zh: ["圆底烧瓶", "分液漏斗", "导管", "集气瓶"],
      en: ["round-bottom flask", "separating funnel", "delivery tube", "gas jar"],
    },
    objectives: {
      zh: ["掌握 SO₂ 制取", "验证漂白性", "认识其污染性"],
      en: ["Master the preparation of SO2", "Demonstrate its bleaching action", "Recognise it as an air pollutant"],
    },
    estimatedMinutes: 40,
    probe: { reagentKeys: ["亚硫酸钠", "硫酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "h2s-preparation",
    title: { zh: "硫化氢的制取与检验", en: "Preparation and Testing of Hydrogen Sulfide" },
    description: {
      zh: "硫化亚铁与稀盐酸反应制取硫化氢，认识其臭鸡蛋气味与强还原性（注意通风）。",
      en: "Prepare hydrogen sulfide by reacting iron(II) sulfide with dilute hydrochloric acid, and recognise its rotten-egg smell and strong reducing power (ensure good ventilation).",
    },
    category: C.GAS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["硫化亚铁", "盐酸"],
      en: ["iron(II) sulfide", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["启普发生器", "导管", "通风橱"],
      en: ["Kipp's apparatus", "delivery tube", "fume cupboard"],
    },
    objectives: {
      zh: ["掌握 H₂S 制取", "认识其毒性", "了解还原性"],
      en: ["Master the preparation of H2S", "Recognise its toxicity", "Understand its reducing properties"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["硫化亚铁", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "co2-baking-soda",
    title: { zh: "碳酸氢钠受热与产气对比", en: "Heating Sodium Hydrogencarbonate and Comparing Gas Production" },
    description: {
      zh: "对比碳酸氢钠与稀盐酸反应产气，理解小苏打作为膨松剂的化学原理。",
      en: "Compare the gas produced when sodium hydrogencarbonate is heated and when it reacts with dilute hydrochloric acid, and understand the chemistry of baking soda as a raising agent.",
    },
    category: C.GAS,
    difficulty: D.EASY,
    reagents: {
      zh: ["碳酸氢钠", "盐酸", "氢氧化钙"],
      en: ["sodium hydrogencarbonate", "hydrochloric acid", "calcium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "导管", "酒精灯"],
      en: ["test tube", "delivery tube", "alcohol lamp"],
    },
    objectives: {
      zh: ["观察产气现象", "联系生活应用", "检验 CO₂"],
      en: ["Observe gas production", "Relate the reaction to everyday applications", "Test for CO2"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["碳酸氢钠", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "ammonia-fountain-hcl",
    title: { zh: "氨气与氯化氢相遇成烟", en: "Ammonia and Hydrogen Chloride Forming White Smoke" },
    description: {
      zh: "将蘸有浓氨水与浓盐酸的玻璃棒靠近，观察生成白烟氯化铵，认识气体间反应。",
      en: "Bring glass rods dipped in concentrated ammonia solution and concentrated hydrochloric acid close together, observe the white smoke of ammonium chloride, and recognise a reaction between two gases.",
    },
    category: C.GAS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["氨水", "盐酸"],
      en: ["ammonia solution", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["玻璃棒", "广口瓶"],
      en: ["glass rod", "wide-necked bottle"],
    },
    objectives: {
      zh: ["观察白烟现象", "理解气体反应", "认识氯化铵生成"],
      en: ["Observe the white smoke", "Understand reactions between gases", "Recognise the formation of ammonium chloride"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["氨水", "盐酸"], expect: { reacted: true } },
  },
  {
    slug: "carbonate-thermal",
    title: { zh: "碳酸氢铵分解探究", en: "Investigating the Decomposition of Ammonium Hydrogencarbonate" },
    description: {
      zh: "加热碳酸氢铵观察其完全分解为氨气、水和二氧化碳，理解不稳定铵盐特性。",
      en: "Heat ammonium hydrogencarbonate and observe its complete decomposition into ammonia, water and carbon dioxide, illustrating the instability of ammonium salts.",
    },
    category: C.GAS,
    difficulty: D.EASY,
    reagents: {
      zh: ["碳酸铵", "氢氧化钙"],
      en: ["ammonium carbonate", "calcium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "导管", "酒精灯", "湿润石蕊试纸"],
      en: ["test tube", "delivery tube", "alcohol lamp", "moist litmus paper"],
    },
    objectives: {
      zh: ["观察分解产气", "检验氨气与 CO₂", "认识铵盐不稳定性"],
      en: ["Observe the gases released on decomposition", "Test for ammonia and CO2", "Recognise the instability of ammonium salts"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["碳酸铵", "氢氧化钙"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "co2-properties",
    title: { zh: "二氧化碳的性质探究", en: "Investigating the Properties of Carbon Dioxide" },
    description: {
      zh: "验证二氧化碳不支持燃烧、密度比空气大，并与水反应生成碳酸使石蕊变红。",
      en: "Show that carbon dioxide does not support combustion and is denser than air, and that it reacts with water to form carbonic acid, which turns litmus red.",
    },
    category: C.GAS,
    difficulty: D.EASY,
    reagents: {
      zh: ["二氧化碳", "石蕊", "蒸馏水"],
      en: ["carbon dioxide", "litmus", "distilled water"],
    },
    apparatus: {
      zh: ["阶梯蜡烛", "烧杯", "软塑料瓶"],
      en: ["candles arranged on steps", "beaker", "soft plastic bottle"],
    },
    objectives: {
      zh: ["认识 CO₂ 性质", "验证与水反应", "联系灭火应用"],
      en: ["Recognise the properties of CO2", "Demonstrate its reaction with water", "Relate it to fire extinguishing"],
    },
    estimatedMinutes: 30,
  },
  {
    slug: "o2-properties",
    title: { zh: "氧气的性质探究", en: "Investigating the Properties of Oxygen" },
    description: {
      zh: "用带火星木条、铁丝、硫粉验证氧气的助燃性，观察剧烈燃烧现象。",
      en: "Use a glowing splint, iron wire and sulfur powder to show that oxygen supports combustion, and observe the vigorous burning.",
    },
    category: C.GAS,
    difficulty: D.EASY,
    reagents: {
      zh: ["过氧化氢", "二氧化锰", "铁"],
      en: ["hydrogen peroxide", "manganese(IV) oxide", "iron"],
    },
    apparatus: {
      zh: ["集气瓶", "燃烧匙", "坩埚钳"],
      en: ["gas jar", "deflagrating spoon", "crucible tongs"],
    },
    objectives: {
      zh: ["认识氧气助燃性", "观察铁丝燃烧", "理解助燃与可燃"],
      en: ["Recognise that oxygen supports combustion", "Observe iron wire burning in oxygen", "Distinguish supporting combustion from being flammable"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["过氧化氢", "二氧化锰"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "chlorine-preparation",
    title: { zh: "氯气的实验室制取", en: "Laboratory Preparation of Chlorine" },
    description: {
      zh: "用二氧化锰与浓盐酸加热制取氯气，验证其漂白性与刺激性（通风橱操作）。",
      en: "Prepare chlorine by heating manganese(IV) oxide with concentrated hydrochloric acid, and demonstrate its bleaching action and pungent, irritating nature (work in a fume cupboard).",
    },
    category: C.GAS,
    difficulty: D.HARD,
    reagents: {
      zh: ["二氧化锰", "盐酸", "石蕊"],
      en: ["manganese(IV) oxide", "hydrochloric acid", "litmus"],
    },
    apparatus: {
      zh: ["圆底烧瓶", "分液漏斗", "通风橱", "集气瓶"],
      en: ["round-bottom flask", "separating funnel", "fume cupboard", "gas jar"],
    },
    objectives: {
      zh: ["掌握氯气制取", "验证漂白性", "认识尾气处理"],
      en: ["Master the preparation of chlorine", "Demonstrate its bleaching action", "Understand the treatment of waste gas"],
    },
    estimatedMinutes: 45,
  },
];
