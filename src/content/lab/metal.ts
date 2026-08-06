// 金属与活动性类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const metalExperiments: LabExperiment[] = [
  {
    slug: "metal-activity-acid",
    related: ["chem-metal-001", "chem-metal-002", "igcse-0620-9-4-reactivity-series"],
    syllabus: {
      pep: ["pep-che-j9b/ch1"],
      igcse: ["0620/9.4"],
    },
    title: { zh: "金属活动性顺序探究", en: "Investigating the Reactivity Series of Metals" },
    description: {
      zh: "比较镁、锌、铁与稀盐酸反应放出氢气的剧烈程度，排列金属活动性顺序。",
      en: "Compare how vigorously magnesium, zinc and iron react with dilute hydrochloric acid to give off hydrogen, and use the results to arrange the metals in a reactivity series.",
    },
    category: C.METAL,
    difficulty: D.EASY,
    reagents: {
      zh: ["镁", "锌", "铁", "盐酸"],
      en: ["magnesium", "zinc", "iron", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["试管", "试管架", "镊子"],
      en: ["test tube", "test tube rack", "forceps"],
    },
    objectives: {
      zh: ["比较反应剧烈程度", "排列活动性顺序", "检验氢气"],
      en: ["Compare how vigorously the metals react", "Arrange the metals in a reactivity series", "Test for hydrogen gas"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["镁", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "iron-copper-sulfate",
    related: ["chem-metal-002", "chem-metal-001", "igcse-0620-9-4-reactivity-series"],
    syllabus: {
      pep: ["pep-che-j9b/ch1"],
      igcse: ["0620/9.4", "0620/6.4"],
    },
    title: { zh: "铁置换硫酸铜中的铜", en: "Iron Displacing Copper from Copper(II) Sulfate" },
    description: {
      zh: "将铁钉浸入硫酸铜溶液，表面析出红色铜、溶液蓝色变浅，验证金属置换。",
      en: "Place an iron nail in copper(II) sulfate solution: red-brown copper is deposited on its surface and the blue colour of the solution fades, demonstrating a metal displacement reaction.",
    },
    category: C.METAL,
    difficulty: D.EASY,
    reagents: {
      zh: ["铁", "硫酸铜"],
      en: ["iron", "copper(II) sulfate"],
    },
    apparatus: {
      zh: ["试管", "砂纸", "镊子"],
      en: ["test tube", "sandpaper", "forceps"],
    },
    objectives: {
      zh: ["观察置换现象", "理解活动性差异", "书写方程式"],
      en: ["Observe the signs of a displacement reaction", "Understand differences in metal reactivity", "Write the equation for the reaction"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["铁", "硫酸铜"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "copper-silver-nitrate",
    related: ["chem-metal-002", "igcse-0620-9-4-reactivity-series"],
    syllabus: {
      pep: ["pep-che-j9b/ch1"],
      igcse: ["0620/9.4"],
    },
    title: { zh: "铜置换硝酸银中的银", en: "Copper Displacing Silver from Silver Nitrate" },
    description: {
      zh: "铜丝插入硝酸银溶液，表面生成银白色银树、溶液变蓝，观察置换与晶体生长。",
      en: "Place a copper wire in silver nitrate solution: silvery-white crystals of silver grow on its surface like a tree and the solution turns blue, showing both displacement and crystal growth.",
    },
    category: C.METAL,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["铜", "硝酸银"],
      en: ["copper", "silver nitrate"],
    },
    apparatus: {
      zh: ["试管", "铜丝", "放大镜"],
      en: ["test tube", "copper wire", "magnifying glass"],
    },
    objectives: {
      zh: ["观察银树生长", "理解置换反应", "认识溶液变蓝原因"],
      en: ["Observe the growth of the silver 'tree'", "Understand displacement reactions", "Explain why the solution turns blue"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["铜", "硝酸银"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "sodium-water",
    related: ["chem-metal-001", "igcse-0620-8-2-groups"],
    syllabus: {
      pep: ["pep-che-s1/ch2"],
      igcse: ["0620/8.2"],
    },
    title: { zh: "钠与水反应", en: "The Reaction of Sodium with Water" },
    description: {
      zh: "金属钠投入滴有酚酞的水中，浮、熔、游、响、红，认识活泼金属与水反应。",
      en: "Drop a piece of sodium into water containing phenolphthalein: it floats, melts into a ball, darts about, fizzes, and turns the solution pink — an introduction to how reactive metals react with water.",
    },
    category: C.METAL,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["钠", "蒸馏水", "酚酞"],
      en: ["sodium", "distilled water", "phenolphthalein"],
    },
    apparatus: {
      zh: ["烧杯", "镊子", "滤纸", "小刀"],
      en: ["beaker", "forceps", "filter paper", "scalpel"],
    },
    objectives: {
      zh: ["观察五大现象", "认识强碱生成", "理解钠的保存"],
      en: ["Observe the five characteristic signs of the reaction", "Recognise that a strong alkali is formed", "Understand why sodium must be stored under oil"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["钠", "蒸馏水"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "iron-rusting",
    related: ["chem-metal-001", "igcse-0620-9-4-reactivity-series"],
    syllabus: {
      pep: ["pep-che-j9b/ch1"],
      igcse: ["0620/9.5"],
    },
    title: { zh: "铁生锈条件探究", en: "Investigating the Conditions for Iron to Rust" },
    description: {
      zh: "对比铁钉在干燥、潮湿、隔绝空气等条件下的锈蚀，探究铁生锈需要水和氧气。",
      en: "Compare the rusting of iron nails kept dry, kept damp, and sealed off from air, to show that both water and oxygen are needed for iron to rust.",
    },
    category: C.METAL,
    difficulty: D.EASY,
    reagents: {
      zh: ["铁", "蒸馏水", "食盐"],
      en: ["iron", "distilled water", "table salt"],
    },
    apparatus: {
      zh: ["试管", "棉花", "干燥剂", "植物油"],
      en: ["test tube", "cotton wool", "drying agent", "vegetable oil"],
    },
    objectives: {
      zh: ["探究生锈条件", "理解防锈原理", "设计对照实验"],
      en: ["Investigate the conditions needed for rusting", "Understand the principles of rust prevention", "Design a fair controlled experiment"],
    },
    estimatedMinutes: 40,
  },
  {
    slug: "aluminum-acid-base",
    related: ["chem-metal-002", "chem-acidbase-002", "chem-acidbase-003"],
    syllabus: {
      pep: ["pep-che-j9b/ch1"],
      igcse: ["0620/9.1"],
    },
    title: { zh: "铝的两性探究", en: "Investigating the Amphoteric Nature of Aluminium" },
    description: {
      zh: "分别将铝片放入盐酸和氢氧化钠溶液，均放出氢气，认识铝既能与酸又能与碱反应。",
      en: "Place pieces of aluminium in hydrochloric acid and in sodium hydroxide solution separately: hydrogen is given off in both cases, showing that aluminium reacts with both acids and alkalis.",
    },
    category: C.METAL,
    difficulty: D.HARD,
    reagents: {
      zh: ["铝", "盐酸", "氢氧化钠"],
      en: ["aluminium", "hydrochloric acid", "sodium hydroxide"],
    },
    apparatus: {
      zh: ["试管", "导管", "镊子"],
      en: ["test tube", "delivery tube", "forceps"],
    },
    objectives: {
      zh: ["认识铝的两性", "对比产气", "书写两类方程式"],
      en: ["Recognise the amphoteric nature of aluminium", "Compare the gas evolved in each case", "Write equations for both types of reaction"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["铝", "盐酸"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "magnesium-burning",
    related: ["chem-metal-001", "chem-energetics-001", "chem-gas-001"],
    syllabus: {
      pep: ["pep-che-j9a/ch2", "pep-che-j9b/ch1"],
      igcse: ["0620/9.1", "0620/5.1"],
    },
    title: { zh: "镁条燃烧", en: "Burning Magnesium Ribbon" },
    description: {
      zh: "点燃镁条发出耀眼白光生成白色氧化镁，认识剧烈放热的氧化反应。",
      en: "Ignite a strip of magnesium ribbon: it burns with a brilliant white flame to form white magnesium oxide, a striking example of a strongly exothermic oxidation reaction.",
    },
    category: C.METAL,
    difficulty: D.EASY,
    reagents: {
      zh: ["镁", "氧气"],
      en: ["magnesium", "oxygen"],
    },
    apparatus: {
      zh: ["坩埚钳", "石棉网", "酒精灯"],
      en: ["crucible tongs", "wire gauze", "Bunsen burner"],
    },
    objectives: {
      zh: ["观察燃烧现象", "认识氧化镁", "理解放热反应"],
      en: ["Observe what happens when magnesium burns", "Identify the product, magnesium oxide", "Understand exothermic reactions"],
    },
    estimatedMinutes: 20,
  },
  {
    slug: "thermite-reaction",
    related: ["chem-metal-001", "chem-energetics-001", "igcse-0620-9-6-extraction"],
    syllabus: {
      pep: ["pep-che-s1/ch3"],
      igcse: ["0620/9.6", "0620/6.4"],
    },
    title: { zh: "铝热反应", en: "The Thermite Reaction" },
    description: {
      zh: "铝粉与氧化铁在高温下剧烈反应生成铁和氧化铝，认识强放热的置换反应应用。",
      en: "Aluminium powder and iron(III) oxide react violently at high temperature to form iron and aluminium oxide — a strongly exothermic displacement reaction with industrial uses.",
    },
    category: C.METAL,
    difficulty: D.HARD,
    reagents: {
      zh: ["铝", "氧化铁"],
      en: ["aluminium", "iron(III) oxide"],
    },
    apparatus: {
      zh: ["蒸发皿", "镁条引燃", "沙土"],
      en: ["evaporating dish", "magnesium ribbon (as a fuse)", "sand"],
    },
    objectives: {
      zh: ["认识铝热反应", "理解工业焊接应用", "注意安全操作"],
      en: ["Learn about the thermite reaction", "Understand its use in welding railway tracks", "Follow the safety precautions carefully"],
    },
    estimatedMinutes: 30,
  },
  {
    slug: "metal-displacement-series",
    related: ["chem-metal-002", "chem-metal-001", "igcse-0620-9-6-extraction"],
    syllabus: {
      pep: ["pep-che-j9b/ch1"],
      igcse: ["0620/9.4", "0620/9.6"],
    },
    title: { zh: "湿法炼铜", en: "Extracting Copper by Displacement" },
    description: {
      zh: "用铁置换硫酸铜溶液中的铜，模拟古代湿法炼铜，理解金属冶炼原理。",
      en: "Use iron to displace copper from copper(II) sulfate solution, reproducing the ancient Chinese method of extracting copper from solution, and understand the principles of metal extraction.",
    },
    category: C.METAL,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["铁", "硫酸铜"],
      en: ["iron", "copper(II) sulfate"],
    },
    apparatus: {
      zh: ["烧杯", "玻璃棒", "过滤装置"],
      en: ["beaker", "glass rod", "filtration apparatus"],
    },
    objectives: {
      zh: ["理解湿法冶金", "回收金属铜", "联系历史文化"],
      en: ["Understand extraction of metals from solution", "Recover metallic copper", "Connect the chemistry with its historical background"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["铁", "硫酸铜"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "aluminum-oxide-film",
    related: ["chem-metal-001", "chem-metal-002"],
    syllabus: {
      pep: ["pep-che-j9b/ch1"],
      igcse: ["0620/9.1", "0620/9.5"],
    },
    title: { zh: "铝的氧化膜保护作用", en: "The Protective Oxide Layer on Aluminium" },
    description: {
      zh: "对比经砂纸打磨与未打磨的铝片在盐酸中的反应，认识致密氧化膜的保护性。",
      en: "Compare how sanded and unsanded pieces of aluminium react in hydrochloric acid, and discover how the thin, dense oxide layer protects aluminium from attack.",
    },
    category: C.METAL,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["铝", "盐酸"],
      en: ["aluminium", "hydrochloric acid"],
    },
    apparatus: {
      zh: ["试管", "砂纸"],
      en: ["test tube", "sandpaper"],
    },
    objectives: {
      zh: ["认识氧化膜作用", "对比反应速率", "联系铝制品耐腐蚀"],
      en: ["Understand the role of the oxide layer", "Compare the rates of reaction", "Relate this to the corrosion resistance of aluminium products"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["铝", "盐酸"], expect: { reacted: true, gas: true } },
  },
];
