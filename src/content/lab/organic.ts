// 有机化学类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const organicExperiments: LabExperiment[] = [
  {
    slug: "ester-synthesis",
    related: ["igcse-0620-11-6-alcohols-acids", "chem-energetics-003"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.6", "0620/11.7"],
    },
    title: { zh: "乙酸乙酯的制取", en: "Preparing Ethyl Ethanoate" },
    description: {
      zh: "乙酸与乙醇在浓硫酸催化下酯化生成有果香味的乙酸乙酯，掌握酯化反应。",
      en: "Ethanoic acid reacts with ethanol in the presence of concentrated sulfuric acid as a catalyst to form fruity-smelling ethyl ethanoate, illustrating the esterification reaction.",
    },
    category: C.ORGANIC,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["乙酸", "乙醇", "硫酸", "碳酸钠"],
      en: ["ethanoic acid", "ethanol", "sulfuric acid", "sodium carbonate"],
    },
    apparatus: {
      zh: ["试管", "导管", "酒精灯", "饱和碳酸钠溶液"],
      en: ["test tube", "delivery tube", "alcohol lamp", "saturated sodium carbonate solution"],
    },
    objectives: {
      zh: ["掌握酯化反应", "理解催化与脱水", "认识可逆反应"],
      en: ["Carry out an esterification reaction", "Understand catalysis and dehydration", "Recognise reversible reactions"],
    },
    estimatedMinutes: 40,
    probe: { reagentKeys: ["乙酸", "乙醇", "硫酸"], expect: { reacted: true } },
  },
  {
    slug: "silver-mirror",
    related: ["igcse-0620-11-6-alcohols-acids", "igcse-0620-12-5-tests"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.6"],
    },
    title: { zh: "银镜反应", en: "The Silver Mirror Test" },
    description: {
      zh: "乙醛与银氨溶液水浴加热，在试管壁形成光亮银镜，检验醛基的还原性。",
      en: "Ethanal is warmed with ammoniacal silver nitrate solution (Tollens' reagent) in a water bath, forming a bright silver mirror on the wall of the test tube and demonstrating the reducing property of the aldehyde group.",
    },
    category: C.ORGANIC,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["乙醛", "硝酸银", "氨水"],
      en: ["ethanal", "silver nitrate", "aqueous ammonia"],
    },
    apparatus: {
      zh: ["洁净试管", "水浴", "胶头滴管"],
      en: ["clean test tube", "water bath", "dropping pipette"],
    },
    objectives: {
      zh: ["掌握醛基检验", "观察银镜生成", "理解还原性"],
      en: ["Test for the aldehyde group", "Observe the formation of a silver mirror", "Understand reducing properties"],
    },
    estimatedMinutes: 35,
    probe: {
      reagentKeys: ["乙醛", "硝酸银", "氨水"],
      expect: { reacted: true, precipitate: true, colorChange: true },
    },
  },
  {
    slug: "glucose-fehling",
    related: ["igcse-0620-11-6-alcohols-acids", "chem-acidbase-003"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.6"],
    },
    title: { zh: "葡萄糖与新制氢氧化铜反应", en: "Reaction of Glucose with Freshly Prepared Copper(II) Hydroxide" },
    description: {
      zh: "葡萄糖与新制氢氧化铜加热生成砖红色氧化亚铜，检验葡萄糖中的醛基。",
      en: "Glucose is heated with freshly prepared copper(II) hydroxide to produce brick-red copper(I) oxide, testing for the aldehyde group in glucose.",
    },
    category: C.ORGANIC,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["葡萄糖", "硫酸铜", "氢氧化钠"],
      en: ["glucose", "copper(II) sulfate", "sodium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "酒精灯", "试管夹"],
      en: ["test tube", "alcohol lamp", "test tube holder"],
    },
    objectives: {
      zh: ["检验葡萄糖", "观察砖红沉淀", "联系糖尿病检测"],
      en: ["Test for glucose", "Observe the brick-red precipitate", "Relate the test to diabetes screening"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["硫酸铜", "氢氧化钠"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "ethylene-bromine",
    related: ["igcse-0620-11-5-alkenes", "igcse-0620-11-1-homologous-series"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.5"],
    },
    title: { zh: "乙烯使溴水褪色", en: "Decolourising Bromine Water with Ethene" },
    description: {
      zh: "将乙烯通入溴水，橙色褪去，验证碳碳双键的加成反应。",
      en: "Ethene is bubbled through bromine water and the orange colour disappears, demonstrating the addition reaction of the carbon–carbon double bond.",
    },
    category: C.ORGANIC,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["乙烯", "溴水"],
      en: ["ethene", "bromine water"],
    },
    apparatus: {
      zh: ["试管", "导管"],
      en: ["test tube", "delivery tube"],
    },
    objectives: {
      zh: ["认识加成反应", "区分饱和与不饱和", "观察褪色"],
      en: ["Recognise addition reactions", "Distinguish saturated from unsaturated compounds", "Observe the decolourisation"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["乙烯", "溴水"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "ethanol-sodium",
    related: ["igcse-0620-11-6-alcohols-acids", "chem-metal-001"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.6"],
    },
    title: { zh: "乙醇与钠反应", en: "Reaction of Ethanol with Sodium" },
    description: {
      zh: "金属钠投入无水乙醇缓慢放出氢气，对比与水反应的剧烈程度，认识羟基活泼氢。",
      en: "Sodium metal is added to anhydrous ethanol and hydrogen gas is released slowly; comparing this with the vigorous reaction with water illustrates the reactive hydrogen of the hydroxyl group.",
    },
    category: C.ORGANIC,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["乙醇", "钠"],
      en: ["ethanol", "sodium"],
    },
    apparatus: {
      zh: ["试管", "导管", "镊子"],
      en: ["test tube", "delivery tube", "forceps"],
    },
    objectives: {
      zh: ["认识羟基反应", "对比反应速率", "检验氢气"],
      en: ["Recognise reactions of the hydroxyl group", "Compare reaction rates", "Test for hydrogen gas"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["乙醇", "钠"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "phenol-bromine-water",
    related: ["igcse-0620-11-1-homologous-series", "igcse-0620-11-6-alcohols-acids"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.1"],
    },
    title: { zh: "苯酚与溴水反应", en: "Reaction of Phenol with Bromine Water" },
    description: {
      zh: "向苯酚溶液中加入溴水生成白色三溴苯酚沉淀，验证苯环受羟基活化的取代反应。",
      en: "Adding bromine water to a phenol solution produces a white precipitate of 2,4,6-tribromophenol, demonstrating a substitution reaction in which the benzene ring is activated by the hydroxyl group.",
    },
    category: C.ORGANIC,
    difficulty: D.HARD,
    reagents: {
      zh: ["苯酚", "溴水"],
      en: ["phenol", "bromine water"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["认识取代反应", "观察白色沉淀", "理解基团影响"],
      en: ["Recognise substitution reactions", "Observe the white precipitate", "Understand the influence of functional groups"],
    },
    estimatedMinutes: 25,
    probe: {
      reagentKeys: ["苯酚", "溴水"],
      expect: { reacted: true, precipitate: true, colorChange: true },
    },
  },
  {
    slug: "starch-iodine-test",
    related: ["igcse-0620-12-5-tests", "bio-plant-001"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.8"],
    },
    title: { zh: "淀粉的检验", en: "Testing for Starch" },
    description: {
      zh: "用碘液检验食物中的淀粉，变蓝则含淀粉，联系食品成分分析。",
      en: "Iodine solution is used to test foods for starch: a blue-black colour indicates that starch is present, linking to the analysis of food components.",
    },
    category: C.ORGANIC,
    difficulty: D.EASY,
    reagents: {
      zh: ["淀粉", "碘水"],
      en: ["starch", "iodine solution"],
    },
    apparatus: {
      zh: ["点滴板", "胶头滴管"],
      en: ["spotting tile", "dropping pipette"],
    },
    objectives: {
      zh: ["检验淀粉", "观察显色", "联系生活食品"],
      en: ["Test for starch", "Observe the colour change", "Relate the test to everyday foods"],
    },
    estimatedMinutes: 15,
    probe: { reagentKeys: ["碘水", "淀粉"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "sucrose-hydrolysis",
    related: ["igcse-0620-11-1-homologous-series", "chem-energetics-002"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.1"],
    },
    title: { zh: "蔗糖的水解", en: "Hydrolysis of Sucrose" },
    description: {
      zh: "蔗糖在稀硫酸催化下水解为葡萄糖与果糖，再用银氨溶液检验产物。",
      en: "Sucrose is hydrolysed to glucose and fructose with dilute sulfuric acid as a catalyst, and the products are then tested with ammoniacal silver nitrate solution (Tollens' reagent).",
    },
    category: C.ORGANIC,
    difficulty: D.HARD,
    reagents: {
      zh: ["蔗糖", "硫酸", "氢氧化钠", "硝酸银"],
      en: ["sucrose", "sulfuric acid", "sodium hydroxide", "silver nitrate"],
    },
    apparatus: {
      zh: ["试管", "水浴", "胶头滴管"],
      en: ["test tube", "water bath", "dropping pipette"],
    },
    objectives: {
      zh: ["认识水解反应", "理解催化作用", "检验水解产物"],
      en: ["Recognise hydrolysis reactions", "Understand the role of a catalyst", "Test the hydrolysis products"],
    },
    estimatedMinutes: 40,
  },
  {
    slug: "ethanol-oxidation-copper",
    related: ["igcse-0620-11-6-alcohols-acids", "chem-energetics-002"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.6"],
    },
    title: { zh: "乙醇的催化氧化", en: "Catalytic Oxidation of Ethanol" },
    description: {
      zh: "用灼热铜丝催化乙醇氧化为乙醛，铜丝黑红交替变化，认识醇的催化氧化。",
      en: "A red-hot copper wire catalyses the oxidation of ethanol to ethanal, alternately turning black and red, illustrating the catalytic oxidation of alcohols.",
    },
    category: C.ORGANIC,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["乙醇", "铜", "氧气"],
      en: ["ethanol", "copper", "oxygen"],
    },
    apparatus: {
      zh: ["试管", "酒精灯", "铜丝"],
      en: ["test tube", "alcohol lamp", "copper wire"],
    },
    objectives: {
      zh: ["认识催化氧化", "观察铜丝变化", "理解催化剂循环"],
      en: ["Recognise catalytic oxidation", "Observe the changes in the copper wire", "Understand how the catalyst is regenerated"],
    },
    estimatedMinutes: 25,
  },
  {
    slug: "soap-saponification",
    related: ["igcse-0620-11-6-alcohols-acids", "chem-acidbase-003"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/11.6"],
    },
    title: { zh: "肥皂的制取（皂化反应）", en: "Making Soap (Saponification)" },
    description: {
      zh: "油脂在氢氧化钠溶液中加热水解生成高级脂肪酸钠（肥皂）与甘油。",
      en: "Vegetable oil or fat is heated with sodium hydroxide solution and hydrolysed to form the sodium salts of long-chain fatty acids (soap) and glycerol.",
    },
    category: C.ORGANIC,
    difficulty: D.HARD,
    reagents: {
      zh: ["氢氧化钠", "食盐", "蒸馏水"],
      en: ["sodium hydroxide", "table salt (sodium chloride)", "distilled water"],
    },
    apparatus: {
      zh: ["蒸发皿", "酒精灯", "玻璃棒", "烧杯"],
      en: ["evaporating dish", "alcohol lamp", "glass rod", "beaker"],
    },
    objectives: {
      zh: ["认识皂化反应", "掌握盐析操作", "联系日用化工"],
      en: ["Recognise the saponification reaction", "Carry out salting out", "Relate the process to everyday chemical products"],
    },
    estimatedMinutes: 50,
  },
];
