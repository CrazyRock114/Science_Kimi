// 配位与显色类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const coordinationExperiments: LabExperiment[] = [
  {
    slug: "fe3-scn-coloring",
    related: ["igcse-0620-12-5-tests", "chem-metal-001"],
    syllabus: {
      pep: ["pep-che-s1/ch3"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "铁(III)离子的硫氰酸盐检验", en: "The Thiocyanate Test for Iron(III) Ions" },
    description: {
      zh: "向氯化铁溶液滴加硫氰酸钾，溶液变血红色，掌握铁(III)的灵敏检验方法。",
      en: "Add potassium thiocyanate dropwise to iron(III) chloride solution; the solution turns blood-red, demonstrating the sensitive test for iron(III) ions.",
    },
    category: C.COORDINATION,
    difficulty: D.EASY,
    reagents: {
      zh: ["氯化铁", "硫氰酸钾"],
      en: ["iron(III) chloride", "potassium thiocyanate"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管", "白瓷板"],
      en: ["test tube", "dropping pipette", "white spotting tile"],
    },
    objectives: {
      zh: ["掌握 Fe³⁺ 检验", "观察血红显色", "认识配位反应"],
      en: ["Carry out the test for Fe³⁺ ions", "Observe the blood-red colouration", "Recognise a complexation reaction"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["氯化铁", "硫氰酸钾"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "copper-ammonia-complex",
    related: ["igcse-0620-12-5-tests", "igcse-0620-8-2-groups"],
    syllabus: {
      pep: ["pep-che-s1/ch3"],
      igcse: ["0620/8.4", "0620/12.5"],
    },
    title: { zh: "铜氨配离子的形成", en: "Formation of the Tetraamminecopper(II) Complex Ion" },
    description: {
      zh: "向硫酸铜溶液中逐滴加入氨水，先生成蓝色沉淀后溶解为深蓝色铜氨溶液。",
      en: "Add aqueous ammonia dropwise to copper(II) sulfate solution: a blue precipitate forms first, then dissolves to give a deep blue copper–ammonia solution.",
    },
    category: C.COORDINATION,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["硫酸铜", "氨水"],
      en: ["copper(II) sulfate", "aqueous ammonia"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["观察沉淀溶解", "认识配离子", "理解配位平衡"],
      en: ["Observe the precipitate dissolving", "Recognise a complex ion", "Understand ligand-exchange equilibrium"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["硫酸铜", "氨水"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "fe3-equilibrium-shift",
    related: ["chem-energetics-003", "igcse-0620-6-3-equilibrium"],
    syllabus: {
      pep: ["pep-che-s2/ch2"],
      igcse: ["0620/6.3"],
    },
    title: { zh: "铁硫氰配合物平衡移动", en: "Shifting the Equilibrium of the Iron(III) Thiocyanate Complex" },
    description: {
      zh: "在血红色铁硫氰溶液中改变铁离子或硫氰根浓度，观察颜色深浅变化，验证平衡移动。",
      en: "Vary the concentration of iron(III) ions or thiocyanate ions in the blood-red iron(III) thiocyanate solution and observe the change in colour intensity to verify the shift in equilibrium.",
    },
    category: C.COORDINATION,
    difficulty: D.HARD,
    reagents: {
      zh: ["氯化铁", "硫氰酸钾", "氯化钠"],
      en: ["iron(III) chloride", "potassium thiocyanate", "sodium chloride"],
    },
    apparatus: {
      zh: ["试管", "比色管", "胶头滴管"],
      en: ["test tube", "Nessler cylinder", "dropping pipette"],
    },
    objectives: {
      zh: ["理解化学平衡", "验证浓度影响", "定性分析颜色"],
      en: ["Understand chemical equilibrium", "Verify the effect of concentration on equilibrium", "Compare colour intensity qualitatively"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["氯化铁", "硫氰酸钾"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "phenol-fecl3-coloring",
    related: ["igcse-0620-12-5-tests", "igcse-0620-11-6-alcohols-acids"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/12.5", "0620/11.6"],
    },
    title: { zh: "苯酚的显色检验", en: "The Colour Test for Phenol" },
    description: {
      zh: "向苯酚溶液中加入氯化铁，溶液显紫色，掌握酚羟基的特征检验。",
      en: "Add iron(III) chloride to a phenol solution; the solution turns violet, demonstrating the characteristic test for the phenolic hydroxyl group.",
    },
    category: C.COORDINATION,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["苯酚", "氯化铁"],
      en: ["phenol", "iron(III) chloride"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["掌握苯酚检验", "观察紫色显色", "认识酚的特性"],
      en: ["Carry out the test for phenol", "Observe the violet colouration", "Recognise the characteristic properties of phenols"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["苯酚", "氯化铁"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "silver-ammonia-prep",
    related: ["igcse-0620-12-5-tests", "igcse-0620-11-6-alcohols-acids"],
    syllabus: {
      pep: ["pep-che-s2/ch3"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "银氨溶液的配制", en: "Preparing Tollens' Reagent" },
    description: {
      zh: "向硝酸银中滴加氨水至沉淀恰好溶解，制备银氨溶液（多伦试剂）用于醛基检验。",
      en: "Add aqueous ammonia dropwise to silver nitrate solution until the precipitate just dissolves, preparing Tollens' reagent for the test for aldehydes.",
    },
    category: C.COORDINATION,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["硝酸银", "氨水"],
      en: ["silver nitrate", "aqueous ammonia"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["配制银氨溶液", "理解配位溶解", "为银镜反应做准备"],
      en: ["Prepare Tollens' reagent", "Understand dissolution by complex formation", "Prepare for the silver mirror test"],
    },
    estimatedMinutes: 20,
  },
  {
    slug: "diammine-silver-test",
    related: ["igcse-0620-10-1-water", "igcse-0620-3-3-moles"],
    syllabus: {
      pep: ["pep-che-j9a/ch4"],
      igcse: ["0620/10.1", "0620/12.1"],
    },
    title: { zh: "硬水中钙镁离子的配位滴定", en: "Complexometric Titration of Calcium and Magnesium Ions in Hard Water" },
    description: {
      zh: "用 EDTA 配位滴定法测定水样硬度，以铬黑 T 为指示剂判断终点。",
      en: "Determine the hardness of a water sample by complexometric titration with EDTA, using Eriochrome Black T as the indicator to detect the end point.",
    },
    category: C.COORDINATION,
    difficulty: D.HARD,
    reagents: {
      zh: ["氯化钙", "氢氧化钠", "氨水"],
      en: ["calcium chloride", "sodium hydroxide", "aqueous ammonia"],
    },
    apparatus: {
      zh: ["碱式滴定管", "锥形瓶", "缓冲溶液"],
      en: ["burette (for alkaline solutions)", "conical flask", "buffer solution"],
    },
    objectives: {
      zh: ["掌握配位滴定", "测定水硬度", "判断显色终点"],
      en: ["Carry out a complexometric titration", "Determine water hardness", "Identify the colour-change end point"],
    },
    estimatedMinutes: 50,
  },
  {
    slug: "cobalt-chloride-equilibrium",
    related: ["chem-energetics-003", "igcse-0620-6-3-equilibrium"],
    syllabus: {
      pep: ["pep-che-s2/ch2"],
      igcse: ["0620/6.3"],
    },
    title: { zh: "氯化钴显色平衡", en: "The Colour Equilibrium of Cobalt(II) Chloride" },
    description: {
      zh: "观察氯化钴溶液在加水稀释与加热时粉红与蓝色间的转变，认识配位平衡移动。",
      en: "Observe the change between pink and blue when a cobalt(II) chloride solution is diluted with water or heated, and relate this to the shift in complex equilibrium.",
    },
    category: C.COORDINATION,
    difficulty: D.HARD,
    reagents: {
      zh: ["盐酸", "蒸馏水"],
      en: ["hydrochloric acid", "distilled water"],
    },
    apparatus: {
      zh: ["试管", "水浴", "胶头滴管"],
      en: ["test tube", "water bath", "dropping pipette"],
    },
    objectives: {
      zh: ["认识配位平衡", "观察颜色互变", "理解平衡移动"],
      en: ["Recognise a complex equilibrium", "Observe the reversible colour change", "Understand the shift of equilibrium"],
    },
    estimatedMinutes: 30,
  },
  {
    slug: "prussian-blue",
    related: ["igcse-0620-12-5-tests", "igcse-0620-6-4-redox"],
    syllabus: {
      pep: ["pep-che-s1/ch3"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "普鲁士蓝的生成", en: "Formation of Prussian Blue" },
    description: {
      zh: "亚铁离子与铁氰化钾反应生成蓝色沉淀，认识经典颜料普鲁士蓝并用于铁离子检验。",
      en: "Iron(II) ions react with potassium hexacyanoferrate(III) to form a blue precipitate, introducing the classic pigment Prussian blue and its use in testing for iron ions.",
    },
    category: C.COORDINATION,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["硫酸亚铁", "氢氧化钠"],
      en: ["iron(II) sulfate", "sodium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["认识普鲁士蓝", "检验亚铁离子", "联系颜料历史"],
      en: ["Recognise Prussian blue", "Test for iron(II) ions", "Relate the reaction to the history of pigments"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["硫酸亚铁", "氢氧化钠"], expect: { reacted: true, precipitate: true } },
  },
];
