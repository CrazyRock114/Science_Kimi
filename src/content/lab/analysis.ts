// 分析检验与电化学类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const analysisExperiments: LabExperiment[] = [
  {
    slug: "flame-test",
    related: ["igcse-0620-12-5-tests", "chem-atomic-001"],
    syllabus: {
      pep: ["pep-che-s1/ch2"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "焰色反应", en: "Flame Tests" },
    description: {
      zh: "用铂丝蘸取不同金属盐在火焰中灼烧，观察钠黄、钾紫、钙砖红等特征焰色。",
      en: "Dip a platinum wire into different metal salts and hold it in a flame to observe the characteristic flame colours, such as yellow for sodium, lilac for potassium, and brick-red for calcium.",
    },
    category: C.ANALYSIS,
    difficulty: D.EASY,
    reagents: {
      zh: ["氯化钠", "氯化钙", "硝酸钾"],
      en: ["sodium chloride", "calcium chloride", "potassium nitrate"],
    },
    apparatus: {
      zh: ["铂丝", "酒精灯", "蓝色钴玻璃", "盐酸"],
      en: ["platinum wire", "Bunsen burner", "blue cobalt glass", "hydrochloric acid"],
    },
    objectives: {
      zh: ["掌握焰色反应", "识别金属元素", "联系烟花原理"],
      en: ["Carry out flame tests", "Identify metal elements", "Relate the results to the principle of fireworks"],
    },
    estimatedMinutes: 30,
  },
  {
    slug: "chloride-identification",
    related: ["igcse-0620-12-5-tests", "chem-acidbase-004"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "氯离子的定性检验", en: "Qualitative Test for Chloride Ions" },
    description: {
      zh: "用硝酸银和稀硝酸检验溶液中的氯离子，依据白色沉淀确认。",
      en: "Use silver nitrate and dilute nitric acid to test for chloride ions in solution, confirming them by the formation of a white precipitate.",
    },
    category: C.ANALYSIS,
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
      zh: ["掌握氯离子检验", "排除干扰", "观察沉淀"],
      en: ["Carry out the test for chloride ions", "Eliminate interference", "Observe the precipitate"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["氯化钠", "硝酸银"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "sulfate-identification",
    related: ["igcse-0620-12-5-tests", "chem-acidbase-004"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "硫酸根的定性检验", en: "Qualitative Test for Sulfate Ions" },
    description: {
      zh: "用氯化钡和稀盐酸检验硫酸根离子，依据不溶于酸的白色沉淀确认。",
      en: "Use barium chloride and dilute hydrochloric acid to test for sulfate ions, confirming them by the formation of a white precipitate that is insoluble in acid.",
    },
    category: C.ANALYSIS,
    difficulty: D.EASY,
    reagents: {
      zh: ["硫酸钠", "氯化钡", "盐酸"],
      en: ["sodium sulfate", "barium chloride", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["掌握硫酸根检验", "排除碳酸根干扰", "观察沉淀"],
      en: ["Carry out the test for sulfate ions", "Eliminate interference from carbonate ions", "Observe the precipitate"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["硫酸钠", "氯化钡"], expect: { reacted: true, precipitate: true } },
  },
  {
    slug: "carbonate-identification",
    related: ["igcse-0620-12-5-tests", "chem-gas-002", "chem-acidbase-002"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "碳酸根的定性检验", en: "Qualitative Test for Carbonate Ions" },
    description: {
      zh: "用稀盐酸和澄清石灰水检验碳酸根，依据产气并使石灰水变浑浊确认。",
      en: "Use dilute hydrochloric acid and limewater to test for carbonate ions, confirming them by the gas evolved which turns limewater milky.",
    },
    category: C.ANALYSIS,
    difficulty: D.EASY,
    reagents: {
      zh: ["碳酸钠", "盐酸", "氢氧化钙"],
      en: ["sodium carbonate", "hydrochloric acid", "calcium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "导管", "胶头滴管"],
      en: ["test tube", "delivery tube", "dropping pipette"],
    },
    objectives: {
      zh: ["掌握碳酸根检验", "观察产气", "检验 CO₂"],
      en: ["Carry out the test for carbonate ions", "Observe the gas evolved", "Test for CO₂"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["碳酸钠", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "fe3-identification",
    related: ["igcse-0620-12-5-tests", "igcse-0620-6-4-redox"],
    syllabus: {
      pep: ["pep-che-s1/ch3"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "铁(III)离子的检验", en: "Test for Iron(III) Ions" },
    description: {
      zh: "用硫氰酸钾检验铁(III)离子，溶液变血红色，掌握灵敏的定性检验。",
      en: "Use potassium thiocyanate to test for iron(III) ions; the solution turns blood-red in this sensitive qualitative test.",
    },
    category: C.ANALYSIS,
    difficulty: D.EASY,
    reagents: {
      zh: ["氯化铁", "硫氰酸钾"],
      en: ["iron(III) chloride", "potassium thiocyanate"],
    },
    apparatus: {
      zh: ["试管", "白瓷板"],
      en: ["test tube", "white spotting tile"],
    },
    objectives: {
      zh: ["掌握 Fe³⁺ 检验", "观察显色", "区分铁价态"],
      en: ["Carry out the test for Fe³⁺ ions", "Observe the colour formed", "Distinguish between the oxidation states of iron"],
    },
    estimatedMinutes: 15,
    probe: { reagentKeys: ["氯化铁", "硫氰酸钾"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "ammonium-identification",
    related: ["igcse-0620-12-5-tests", "chem-acidbase-003"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5", "0620/10.2"],
    },
    title: { zh: "铵根离子的检验", en: "Test for Ammonium Ions" },
    description: {
      zh: "向铵盐中加碱共热放出氨气，使湿润红色石蕊试纸变蓝，确认铵根离子。",
      en: "Warm an ammonium salt with an alkali to release ammonia gas, which turns damp red litmus paper blue, confirming the presence of ammonium ions.",
    },
    category: C.ANALYSIS,
    difficulty: D.EASY,
    reagents: {
      zh: ["氯化铵", "氢氧化钠"],
      en: ["ammonium chloride", "sodium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "酒精灯", "湿润石蕊试纸"],
      en: ["test tube", "Bunsen burner", "damp litmus paper"],
    },
    objectives: {
      zh: ["掌握铵根检验", "检验氨气", "理解产气条件"],
      en: ["Carry out the test for ammonium ions", "Test for ammonia gas", "Understand the conditions needed for gas evolution"],
    },
    estimatedMinutes: 20,
    probe: { reagentKeys: ["氯化铵", "氢氧化钠"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "copper-identification",
    related: ["igcse-0620-12-5-tests", "chem-acidbase-003"],
    syllabus: {
      pep: ["pep-che-j9b/ch4"],
      igcse: ["0620/12.5"],
    },
    title: { zh: "铜(II)离子的检验", en: "Test for Copper(II) Ions" },
    description: {
      zh: "向含铜离子溶液中加入氢氧化钠生成蓝色沉淀，确认铜(II)离子。",
      en: "Add sodium hydroxide to a solution containing copper ions to form a blue precipitate, confirming the presence of copper(II) ions.",
    },
    category: C.ANALYSIS,
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
      zh: ["掌握铜离子检验", "观察蓝色沉淀", "联系颜色特征"],
      en: ["Carry out the test for copper ions", "Observe the blue precipitate", "Relate the result to characteristic colours"],
    },
    estimatedMinutes: 15,
    probe: { reagentKeys: ["硫酸铜", "氢氧化钠"], expect: { reacted: true, precipitate: true, colorChange: true } },
  },
  {
    slug: "copper-electrolysis",
    related: ["igcse-0620-4-1-electrolysis", "igcse-0620-6-4-redox"],
    syllabus: {
      pep: ["pep-che-s2/ch2"],
      igcse: ["0620/4.1"],
    },
    title: { zh: "电解硫酸铜溶液", en: "Electrolysis of Copper(II) Sulfate Solution" },
    description: {
      zh: "电解硫酸铜溶液，阴极析出铜、阳极放出氧气，认识电解原理与电极反应。",
      en: "Electrolyse copper(II) sulfate solution, with copper deposited at the cathode and oxygen released at the anode, to understand the principles of electrolysis and the electrode reactions.",
    },
    category: C.ELECTROCHEM,
    difficulty: D.HARD,
    reagents: {
      zh: ["硫酸铜", "蒸馏水"],
      en: ["copper(II) sulfate", "distilled water"],
    },
    apparatus: {
      zh: ["电解槽", "碳电极", "直流电源", "导线"],
      en: ["electrolytic cell", "carbon electrodes", "d.c. power supply", "connecting wires"],
    },
    objectives: {
      zh: ["理解电解原理", "书写电极反应", "观察两极现象"],
      en: ["Understand the principles of electrolysis", "Write the electrode reactions", "Observe what happens at each electrode"],
    },
    estimatedMinutes: 40,
  },
  {
    slug: "copper-zinc-cell",
    related: ["igcse-0620-4-1-electrolysis", "igcse-0620-6-4-redox", "chem-metal-001"],
    syllabus: {
      pep: ["pep-che-s2/ch2"],
      igcse: ["0620/4.1", "0620/6.4"],
    },
    title: { zh: "铜锌原电池", en: "Copper–Zinc Simple Cell" },
    description: {
      zh: "用铜片、锌片和稀硫酸构成原电池，使电流计偏转，认识化学能转化为电能。",
      en: "Build a simple cell from copper and zinc strips in dilute sulfuric acid so that the galvanometer deflects, showing how chemical energy is converted into electrical energy.",
    },
    category: C.ELECTROCHEM,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["锌", "铜", "硫酸"],
      en: ["zinc", "copper", "sulfuric acid"],
    },
    apparatus: {
      zh: ["电流计", "导线", "烧杯", "盐桥"],
      en: ["galvanometer", "connecting wires", "beaker", "salt bridge"],
    },
    objectives: {
      zh: ["认识原电池", "判断正负极", "理解能量转化"],
      en: ["Understand the simple cell", "Identify the positive and negative electrodes", "Understand the energy conversion involved"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["锌", "硫酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "electroplating-copper",
    related: ["igcse-0620-4-1-electrolysis", "igcse-0620-6-4-redox"],
    syllabus: {
      pep: ["pep-che-s2/ch2"],
      igcse: ["0620/4.1"],
    },
    title: { zh: "电镀铜实验", en: "Copper Electroplating" },
    description: {
      zh: "以待镀件为阴极、铜为阳极在硫酸铜溶液中电镀，认识电镀原理与应用。",
      en: "Electroplate an object in copper(II) sulfate solution using the object as the cathode and copper as the anode, to understand the principles and applications of electroplating.",
    },
    category: C.ELECTROCHEM,
    difficulty: D.HARD,
    reagents: {
      zh: ["硫酸铜", "铜"],
      en: ["copper(II) sulfate", "copper"],
    },
    apparatus: {
      zh: ["直流电源", "铜电极", "导线", "烧杯"],
      en: ["d.c. power supply", "copper electrode", "connecting wires", "beaker"],
    },
    objectives: {
      zh: ["理解电镀原理", "控制电流", "观察镀层"],
      en: ["Understand the principles of electroplating", "Control the current", "Observe the coating formed"],
    },
    estimatedMinutes: 40,
  },
  {
    slug: "iron-electrochemical-corrosion",
    related: ["igcse-0620-6-4-redox", "chem-metal-001"],
    syllabus: {
      pep: ["pep-che-s2/ch2", "pep-che-j9b/ch1"],
      igcse: ["0620/9.5", "0620/6.4"],
    },
    title: { zh: "铁的电化学腐蚀", en: "Electrochemical Corrosion of Iron" },
    description: {
      zh: "用食盐水模拟钢铁吸氧腐蚀，结合铁氰化钾指示剂观察腐蚀微电池。",
      en: "Use salt water to simulate the oxygen-absorbing corrosion of steel, and use potassium ferricyanide indicator to observe the tiny corrosion cells that form.",
    },
    category: C.ELECTROCHEM,
    difficulty: D.HARD,
    reagents: {
      zh: ["铁", "食盐", "酚酞"],
      en: ["iron", "sodium chloride", "phenolphthalein"],
    },
    apparatus: {
      zh: ["培养皿", "琼脂", "导线"],
      en: ["Petri dish", "agar", "connecting wires"],
    },
    objectives: {
      zh: ["认识吸氧腐蚀", "理解微电池", "联系金属防护"],
      en: ["Understand oxygen-absorbing corrosion", "Understand how tiny corrosion cells work", "Relate the findings to protecting metals"],
    },
    estimatedMinutes: 45,
  },
  {
    slug: "sacrificial-anode",
    related: ["chem-metal-001", "igcse-0620-9-4-reactivity-series"],
    syllabus: {
      pep: ["pep-che-j9b/ch1"],
      igcse: ["0620/9.5", "0620/9.4"],
    },
    title: { zh: "牺牲阳极保护法", en: "Sacrificial Protection" },
    description: {
      zh: "用锌块连接铁制品减缓铁的腐蚀，认识牺牲阳极的阴极保护原理。",
      en: "Connect a block of zinc to an iron object to slow down the corrosion of the iron, demonstrating the principle of cathodic protection by a sacrificial anode.",
    },
    category: C.ELECTROCHEM,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["铁", "锌", "食盐"],
      en: ["iron", "zinc", "sodium chloride"],
    },
    apparatus: {
      zh: ["培养皿", "导线", "电流计"],
      en: ["Petri dish", "connecting wires", "galvanometer"],
    },
    objectives: {
      zh: ["理解阴极保护", "对比腐蚀速率", "联系船舶防腐"],
      en: ["Understand cathodic protection", "Compare corrosion rates", "Relate the method to preventing ships from rusting"],
    },
    estimatedMinutes: 35,
  },
  {
    slug: "gas-volume-measurement",
    related: ["chem-stoich-004", "igcse-0620-3-3-moles", "chem-gas-002"],
    syllabus: {
      pep: ["pep-che-j9a/ch5"],
      igcse: ["0620/3.3", "0620/12.1"],
    },
    title: { zh: "气体体积的测量", en: "Measuring Gas Volumes" },
    description: {
      zh: "用排水量气法测定碳酸钙与盐酸反应放出二氧化碳的体积，练习定量气体测量。",
      en: "Measure the volume of carbon dioxide released when calcium carbonate reacts with hydrochloric acid by collecting the gas over water, practising quantitative gas measurement.",
    },
    category: C.ANALYSIS,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["碳酸钙", "盐酸"],
      en: ["calcium carbonate", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["量气管", "水准管", "锥形瓶"],
      en: ["gas measuring tube", "levelling tube", "conical flask"],
    },
    objectives: {
      zh: ["掌握量气法", "读取气体体积", "计算反应量"],
      en: ["Use the gas collection method", "Read gas volumes accurately", "Calculate the amounts reacting"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["碳酸钙", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "crystallization-purification",
    related: ["chem-bonding-004", "igcse-0620-12-3-chromatography"],
    syllabus: {
      pep: ["pep-che-j9b/ch2"],
      igcse: ["0620/12.4"],
    },
    title: { zh: "粗盐的提纯", en: "Purification of Rock Salt" },
    description: {
      zh: "通过溶解、过滤、蒸发结晶提纯含泥沙的粗盐，掌握混合物分离基本操作。",
      en: "Purify rock salt containing sand and mud by dissolving, filtering, and crystallising by evaporation, mastering the basic techniques for separating mixtures.",
    },
    category: C.ANALYSIS,
    difficulty: D.EASY,
    reagents: {
      zh: ["食盐", "蒸馏水"],
      en: ["sodium chloride", "distilled water"],
    },
    apparatus: {
      zh: ["漏斗", "滤纸", "蒸发皿", "酒精灯", "玻璃棒"],
      en: ["funnel", "filter paper", "evaporating dish", "Bunsen burner", "glass rod"],
    },
    objectives: {
      zh: ["掌握过滤操作", "掌握蒸发结晶", "理解提纯思路"],
      en: ["Carry out filtration", "Carry out crystallisation by evaporation", "Understand the strategy for purification"],
    },
    estimatedMinutes: 40,
  },
];
