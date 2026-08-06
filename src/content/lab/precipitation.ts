// 沉淀与复分解类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const precipitationExperiments: LabExperiment[] = [
  {
    slug: "agcl-precipitation",
    related: ["chem-acidbase-004", "igcse-0620-12-5-tests"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5", "0620/7.3"],
    },
    title: { zh: "氯离子的检验", en: "Test for Chloride Ions" },
    description: {
      zh: "向氯化钠溶液滴加硝酸银，生成不溶于稀硝酸的白色沉淀，确认氯离子。",
      en: "Add silver nitrate dropwise to a sodium chloride solution; a white precipitate insoluble in dilute nitric acid confirms the presence of chloride ions.",
    },
    category: C.PRECIPITATION,
    difficulty: D.EASY,
    reagents: {
      zh: ["氯化钠", "硝酸银", "硝酸"],
      en: ["sodium chloride", "silver nitrate", "nitric acid"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["掌握氯离子检验", "观察白色沉淀", "理解复分解条件"],
      en: ["Learn the test for chloride ions", "Observe the white precipitate", "Understand the conditions for double decomposition"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["氯化钠", "硝酸银"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "baso4-precipitation",
    related: ["chem-acidbase-004", "igcse-0620-12-5-tests"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "硫酸根离子的检验", en: "Test for Sulfate Ions" },
    description: {
      zh: "用氯化钡溶液检验硫酸钠中的硫酸根，生成不溶于酸的白色硫酸钡沉淀。",
      en: "Use barium chloride solution to test for sulfate ions in sodium sulfate; a white barium sulfate precipitate insoluble in acid is formed.",
    },
    category: C.PRECIPITATION,
    difficulty: D.EASY,
    reagents: {
      zh: ["硫酸钠", "氯化钡", "盐酸"],
      en: ["sodium sulfate", "barium chloride", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管", "离心机"],
      en: ["test tube", "dropping pipette", "centrifuge"],
    },
    objectives: {
      zh: ["掌握硫酸根检验", "排除干扰离子", "观察沉淀"],
      en: ["Learn the test for sulfate ions", "Rule out interfering ions", "Observe the precipitate"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["硫酸钠", "氯化钡"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "cuoh2-precipitation",
    related: ["chem-acidbase-003", "chem-acidbase-004", "igcse-0620-12-5-tests"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5", "0620/7.3"],
    },
    title: { zh: "氢氧化铜的制取", en: "Preparing Copper(II) Hydroxide" },
    description: {
      zh: "硫酸铜溶液与氢氧化钠反应生成蓝色氢氧化铜沉淀，观察絮状沉淀特征。",
      en: "Copper(II) sulfate solution reacts with sodium hydroxide to form a blue copper(II) hydroxide precipitate; observe its gelatinous appearance.",
    },
    category: C.PRECIPITATION,
    difficulty: D.EASY,
    reagents: {
      zh: ["硫酸铜", "氢氧化钠"],
      en: ["copper(II) sulfate", "sodium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["制取氢氧化铜", "观察蓝色沉淀", "书写离子方程式"],
      en: ["Prepare copper(II) hydroxide", "Observe the blue precipitate", "Write ionic equations"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["硫酸铜", "氢氧化钠"], expect: { reacted: true, precipitate: true, colorChange: true } },
  },
  {
    slug: "feoh3-precipitation",
    related: ["chem-acidbase-003", "chem-acidbase-004", "igcse-0620-12-5-tests"],
    syllabus: {
      pep: ["pep-che-j9b/ch4", "pep-che-s1/ch3"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "氢氧化铁的制取", en: "Preparing Iron(III) Hydroxide" },
    description: {
      zh: "氯化铁溶液与氢氧化钠反应生成红褐色氢氧化铁沉淀，认识铁(III)的特征。",
      en: "Iron(III) chloride solution reacts with sodium hydroxide to form a reddish-brown iron(III) hydroxide precipitate, illustrating the characteristics of iron(III).",
    },
    category: C.PRECIPITATION,
    difficulty: D.EASY,
    reagents: {
      zh: ["氯化铁", "氢氧化钠"],
      en: ["iron(III) chloride", "sodium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["制取氢氧化铁", "观察红褐色沉淀", "区分铁的价态"],
      en: ["Prepare iron(III) hydroxide", "Observe the reddish-brown precipitate", "Distinguish between the oxidation states of iron"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["氯化铁", "氢氧化钠"], expect: { reacted: true, precipitate: true, colorChange: true } },
  },
  {
    slug: "caco3-precipitation",
    related: ["chem-acidbase-004", "igcse-0620-7-3-salts"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/7.3"],
    },
    title: { zh: "碳酸钙的生成", en: "Formation of Calcium Carbonate" },
    description: {
      zh: "碳酸钠溶液与氯化钙反应生成白色碳酸钙沉淀，理解微溶物的转化。",
      en: "Sodium carbonate solution reacts with calcium chloride to form a white calcium carbonate precipitate; understand how sparingly soluble substances form.",
    },
    category: C.PRECIPITATION,
    difficulty: D.EASY,
    reagents: {
      zh: ["碳酸钠", "氯化钙"],
      en: ["sodium carbonate", "calcium chloride"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["观察沉淀生成", "理解复分解", "联系水垢成因"],
      en: ["Observe precipitate formation", "Understand double decomposition", "Relate the reaction to the formation of limescale"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["碳酸钠", "氯化钙"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "mgoh2-precipitation",
    related: ["chem-acidbase-003", "chem-acidbase-004"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/7.3"],
    },
    title: { zh: "氢氧化镁的制取", en: "Preparing Magnesium Hydroxide" },
    description: {
      zh: "氯化镁与氢氧化钠反应生成白色氢氧化镁沉淀，认识难溶碱的制备。",
      en: "Magnesium chloride reacts with sodium hydroxide to form a white magnesium hydroxide precipitate; learn how insoluble bases are prepared.",
    },
    category: C.PRECIPITATION,
    difficulty: D.EASY,
    reagents: {
      zh: ["氯化镁", "氢氧化钠"],
      en: ["magnesium chloride", "sodium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["制取氢氧化镁", "观察白色沉淀", "联系海水提镁"],
      en: ["Prepare magnesium hydroxide", "Observe the white precipitate", "Relate the reaction to extracting magnesium from seawater"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["氯化镁", "氢氧化钠"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "agi-precipitation",
    related: ["igcse-0620-8-2-groups", "chem-acidbase-004"],
    syllabus: {
      pep: ["pep-che-s1/ch2"],
      igcse: ["0620/8.3", "0620/12.5"],
    },
    title: { zh: "碘化银沉淀与人工降雨", en: "Silver Iodide Precipitate and Cloud Seeding" },
    description: {
      zh: "硝酸银与碘化钾反应生成黄色碘化银沉淀，了解其在人工降雨中的应用。",
      en: "Silver nitrate reacts with potassium iodide to form a yellow silver iodide precipitate; learn about its use in cloud seeding.",
    },
    category: C.PRECIPITATION,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["硝酸银", "碘化钾"],
      en: ["silver nitrate", "potassium iodide"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["观察黄色沉淀", "比较卤化银颜色", "联系实际应用"],
      en: ["Observe the yellow precipitate", "Compare the colours of the silver halides", "Relate the reaction to real-world applications"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["硝酸银", "碘化钾"], expect: { reacted: true, precipitate: true, colorChange: true } },
  },
  {
    slug: "agbr-precipitation",
    related: ["igcse-0620-8-2-groups", "chem-acidbase-004"],
    syllabus: {
      pep: ["pep-che-s1/ch2"],
      igcse: ["0620/8.3"],
    },
    title: { zh: "溴化银沉淀与感光材料", en: "Silver Bromide Precipitate and Photosensitive Materials" },
    description: {
      zh: "硝酸银与溴化钾反应生成浅黄色溴化银沉淀，认识其感光性与照相原理。",
      en: "Silver nitrate reacts with potassium bromide to form a pale yellow silver bromide precipitate; learn about its light sensitivity and the principle of photography.",
    },
    category: C.PRECIPITATION,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["硝酸银", "溴化钾"],
      en: ["silver nitrate", "potassium bromide"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管", "避光容器"],
      en: ["test tube", "dropping pipette", "lightproof container"],
    },
    objectives: {
      zh: ["观察浅黄沉淀", "了解感光性", "联系胶片技术"],
      en: ["Observe the pale yellow precipitate", "Learn about light sensitivity", "Relate the reaction to photographic film technology"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["硝酸银", "溴化钾"], expect: { reacted: true, precipitate: true, colorChange: true } },
  },
  {
    slug: "precipitation-conversion",
    related: ["chem-acidbase-004", "igcse-0620-6-3-equilibrium", "chem-energetics-003"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/6.3", "0620/7.3"],
    },
    title: { zh: "沉淀的转化", en: "Conversion of Precipitates" },
    description: {
      zh: "向氢氧化镁沉淀中加入氯化铁溶液，观察白色沉淀转化为红褐色，理解溶度积。",
      en: "Add iron(III) chloride solution to a magnesium hydroxide precipitate and observe the white precipitate turn reddish-brown; understand solubility products.",
    },
    category: C.PRECIPITATION,
    difficulty: D.HARD,
    reagents: {
      zh: ["氯化镁", "氢氧化钠", "氯化铁"],
      en: ["magnesium chloride", "sodium hydroxide", "iron(III) chloride"],
    },
    apparatus: {
      zh: ["试管", "离心机", "胶头滴管"],
      en: ["test tube", "centrifuge", "dropping pipette"],
    },
    objectives: {
      zh: ["理解沉淀转化", "认识溶度积大小", "分析转化方向"],
      en: ["Understand the conversion of precipitates", "Compare solubility products", "Analyse the direction of the conversion"],
    },
    estimatedMinutes: 40,
    probe: { reagentKeys: ["氯化铁", "氢氧化钠"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "hard-water-softening",
    related: ["chem-acidbase-004", "igcse-0620-10-1-water"],
    syllabus: {
      pep: ["pep-che-j9a/ch4"],
      igcse: ["0620/10.1"],
    },
    title: { zh: "硬水的软化", en: "Softening Hard Water" },
    description: {
      zh: "向硬水中加入碳酸钠使钙镁离子沉淀，认识硬水危害与软化方法。",
      en: "Add sodium carbonate to hard water to precipitate the calcium and magnesium ions; learn about the problems caused by hard water and how it is softened.",
    },
    category: C.PRECIPITATION,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["氯化钙", "碳酸钠", "肥皂水"],
      en: ["calcium chloride", "sodium carbonate", "soap solution"],
    },
    apparatus: {
      zh: ["烧杯", "玻璃棒", "试管"],
      en: ["beaker", "glass rod", "test tube"],
    },
    objectives: {
      zh: ["认识硬水成分", "掌握软化原理", "对比软硬水"],
      en: ["Identify what hard water contains", "Understand the principle of water softening", "Compare hard and soft water"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["氯化钙", "碳酸钠"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "baso4-gravimetric",
    related: ["chem-acidbase-004", "chem-stoich-004", "igcse-0620-3-3-moles"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5", "0620/3.3"],
    },
    title: { zh: "硫酸钡重量法测硫含量", en: "Gravimetric Determination of Sulfur Content as Barium Sulfate" },
    description: {
      zh: "用氯化钡沉淀硫酸根，经过滤、洗涤、灼烧、称量测定样品中硫酸盐含量。",
      en: "Precipitate sulfate ions with barium chloride, then filter, wash, ignite and weigh the precipitate to determine the sulfate content of a sample.",
    },
    category: C.PRECIPITATION,
    difficulty: D.HARD,
    reagents: {
      zh: ["硫酸钠", "氯化钡", "盐酸"],
      en: ["sodium sulfate", "barium chloride", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["坩埚", "马弗炉", "分析天平", "干燥器"],
      en: ["crucible", "muffle furnace", "analytical balance", "desiccator"],
    },
    objectives: {
      zh: ["掌握重量分析法", "规范沉淀洗涤", "计算硫含量"],
      en: ["Learn gravimetric analysis", "Wash the precipitate correctly", "Calculate the sulfur content"],
    },
    estimatedMinutes: 60,
    probe: { reagentKeys: ["硫酸钠", "氯化钡"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "double-decomposition-rule",
    related: ["chem-acidbase-004", "igcse-0620-7-3-salts"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/7.3"],
    },
    title: { zh: "复分解反应发生条件", en: "Conditions for Double Decomposition Reactions" },
    description: {
      zh: "通过多组盐与碱、盐与盐反应，归纳复分解反应需生成沉淀、气体或水的条件。",
      en: "Carry out several reactions between salts and bases, and between salts, to deduce that a double decomposition reaction requires the formation of a precipitate, a gas or water.",
    },
    category: C.PRECIPITATION,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["硫酸铜", "氢氧化钠", "氯化钡", "碳酸钠"],
      en: ["copper(II) sulfate", "sodium hydroxide", "barium chloride", "sodium carbonate"],
    },
    apparatus: {
      zh: ["试管", "试管架", "胶头滴管"],
      en: ["test tube", "test tube rack", "dropping pipette"],
    },
    objectives: {
      zh: ["归纳反应条件", "对比有无沉淀", "书写离子方程式"],
      en: ["Deduce the conditions for reaction", "Compare cases with and without a precipitate", "Write ionic equations"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["硫酸铜", "氢氧化钠"], expect: { reacted: true, precipitate: true } },
  },
];
