// 氧化还原类实验（双语）
// 数据移植自 ChemAIForge（https://github.com/zhangifonly/ChemAIForge）
// MIT License — Copyright (c) 2026 zhangifonly，完整许可文本见本目录 LICENSE。
// zh 字段保留原文，en 字段为本项目翻译。
import {
  ExperimentCategory as C,
  ExperimentDifficulty as D,
} from "../../chem-engine/experiment-types";
import type { LabExperiment } from "./types";

export const redoxExperiments: LabExperiment[] = [
  {
    slug: "kmno4-oxalic-acid",
    title: { zh: "高锰酸钾氧化草酸", en: "Potassium Manganate(VII) Oxidising Oxalic Acid" },
    description: {
      zh: "酸性高锰酸钾与草酸反应紫红色褪去，探究浓度、温度对反应速率的影响。",
      en: "Acidified potassium manganate(VII) is decolourised when it reacts with oxalic acid; investigate how concentration and temperature affect the rate of reaction.",
    },
    category: C.REDOX,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["高锰酸钾", "草酸", "硫酸"],
      en: ["potassium manganate(VII)", "oxalic acid", "sulfuric acid"],
    },
    apparatus: {
      zh: ["试管", "水浴", "秒表"],
      en: ["test tube", "water bath", "stopwatch"],
    },
    objectives: {
      zh: ["观察氧化褪色", "理解强氧化性", "探究反应速率"],
      en: ["Observe the decolourisation caused by oxidation", "Understand the strong oxidising power of manganate(VII)", "Investigate the rate of reaction"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["高锰酸钾", "草酸"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "kmno4-fe2",
    title: { zh: "高锰酸钾滴定亚铁离子", en: "Titrating Iron(II) Ions with Potassium Manganate(VII)" },
    description: {
      zh: "用高锰酸钾标准液滴定硫酸亚铁，以紫红色不褪为终点，掌握氧化还原滴定。",
      en: "Titrate iron(II) sulfate against standard potassium manganate(VII) solution, taking the point at which the purple colour no longer fades as the end point, and master redox titration.",
    },
    category: C.REDOX,
    difficulty: D.HARD,
    reagents: {
      zh: ["高锰酸钾", "硫酸亚铁", "硫酸"],
      en: ["potassium manganate(VII)", "iron(II) sulfate", "sulfuric acid"],
    },
    apparatus: {
      zh: ["酸式滴定管", "锥形瓶", "移液管"],
      en: ["acid burette", "conical flask", "pipette"],
    },
    objectives: {
      zh: ["掌握氧化还原滴定", "自身指示剂判断终点", "计算亚铁含量"],
      en: ["Master redox titration", "Use the self-indicating reagent to detect the end point", "Calculate the iron(II) content"],
    },
    estimatedMinutes: 45,
    probe: { reagentKeys: ["高锰酸钾", "硫酸亚铁"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "halogen-displacement-cl-br",
    title: { zh: "氯气置换溴", en: "Chlorine Displacing Bromine" },
    description: {
      zh: "向溴化钾溶液通入氯气，置换出橙色溴，验证卤素氧化性强弱顺序。",
      en: "Bubble chlorine into potassium bromide solution to displace orange bromine, confirming the order of oxidising power of the halogens.",
    },
    category: C.REDOX,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["氯水", "溴化钾", "四氯化碳"],
      en: ["chlorine water", "potassium bromide", "tetrachloromethane"],
    },
    apparatus: {
      zh: ["分液漏斗", "试管"],
      en: ["separating funnel", "test tube"],
    },
    objectives: {
      zh: ["验证卤素活泼性", "观察萃取分层", "书写离子方程式"],
      en: ["Confirm the reactivity of the halogens", "Observe extraction and layer separation", "Write the ionic equation"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["氯水", "溴化钾"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "halogen-displacement-br-i",
    title: { zh: "溴置换碘", en: "Bromine Displacing Iodine" },
    description: {
      zh: "向碘化钾溶液中加入溴水，置换出碘并以淀粉显蓝验证，比较溴碘氧化性。",
      en: "Add bromine water to potassium iodide solution to displace iodine, confirmed by the blue colour it gives with starch, and compare the oxidising power of bromine and iodine.",
    },
    category: C.REDOX,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["溴水", "碘化钾", "淀粉"],
      en: ["bromine water", "potassium iodide", "starch"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["验证溴碘活泼性", "碘淀粉显色", "理解置换规律"],
      en: ["Confirm the relative reactivity of bromine and iodine", "Observe the iodine–starch colour test", "Understand the rules of displacement"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["溴水", "碘化钾"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "iodine-starch",
    title: { zh: "碘与淀粉显色", en: "The Iodine–Starch Colour Reaction" },
    description: {
      zh: "观察碘单质遇淀粉变蓝的特征反应，用于碘的检验与碘量法终点判断。",
      en: "Observe the characteristic reaction in which iodine turns blue-black with starch, used to test for iodine and to detect the end point in iodometric titrations.",
    },
    category: C.REDOX,
    difficulty: D.EASY,
    reagents: {
      zh: ["碘水", "淀粉"],
      en: ["iodine solution", "starch"],
    },
    apparatus: {
      zh: ["试管", "白瓷板", "胶头滴管"],
      en: ["test tube", "white spotting tile", "dropping pipette"],
    },
    objectives: {
      zh: ["观察特征蓝色", "理解显色原理", "应用于定量分析"],
      en: ["Observe the characteristic blue colour", "Understand the principle of the colour reaction", "Apply it to quantitative analysis"],
    },
    estimatedMinutes: 15,
    probe: { reagentKeys: ["碘水", "淀粉"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "so2-bromine-water",
    title: { zh: "二氧化硫使溴水褪色", en: "Sulfur Dioxide Decolourising Bromine Water" },
    description: {
      zh: "将二氧化硫通入溴水，橙色褪去，验证二氧化硫的还原性而非漂白性。",
      en: "Bubble sulfur dioxide into bromine water so that the orange colour fades, showing that sulfur dioxide here acts as a reducing agent rather than a bleach.",
    },
    category: C.REDOX,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["二氧化硫", "溴水"],
      en: ["sulfur dioxide", "bromine water"],
    },
    apparatus: {
      zh: ["导管", "试管"],
      en: ["delivery tube", "test tube"],
    },
    objectives: {
      zh: ["认识 SO₂ 还原性", "区分还原与漂白", "书写方程式"],
      en: ["Recognise the reducing property of SO₂", "Distinguish reduction from bleaching", "Write the equation"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["二氧化硫", "溴水"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "h2o2-ki-catalysis",
    title: { zh: "碘离子催化过氧化氢分解", en: "Iodide Ions Catalysing the Decomposition of Hydrogen Peroxide" },
    description: {
      zh: "以碘化钾催化过氧化氢分解放出氧气，观察催化剂在反应前后不变。",
      en: "Use potassium iodide to catalyse the decomposition of hydrogen peroxide, which releases oxygen, and observe that the catalyst is unchanged by the reaction.",
    },
    category: C.REDOX,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["过氧化氢", "碘化钾"],
      en: ["hydrogen peroxide", "potassium iodide"],
    },
    apparatus: {
      zh: ["锥形瓶", "带火星木条", "导管"],
      en: ["conical flask", "glowing splint", "delivery tube"],
    },
    objectives: {
      zh: ["理解催化分解", "检验氧气", "认识催化剂特性"],
      en: ["Understand catalytic decomposition", "Test for oxygen", "Recognise the properties of a catalyst"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["过氧化氢", "碘化钾"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "copper-nitric-acid",
    title: { zh: "铜与硝酸反应", en: "Copper Reacting with Nitric Acid" },
    description: {
      zh: "铜与稀硝酸反应生成蓝色溶液并放出气体，认识硝酸的强氧化性（通风操作）。",
      en: "Copper reacts with dilute nitric acid to give a blue solution and a gas, showing the strong oxidising power of nitric acid (work in a fume cupboard).",
    },
    category: C.REDOX,
    difficulty: D.HARD,
    reagents: {
      zh: ["铜", "硝酸"],
      en: ["copper", "nitric acid"],
    },
    apparatus: {
      zh: ["试管", "通风橱", "导管"],
      en: ["test tube", "fume cupboard", "delivery tube"],
    },
    objectives: {
      zh: ["认识硝酸氧化性", "观察气体与变色", "理解不产氢"],
      en: ["Recognise the oxidising power of nitric acid", "Observe the gas and the colour change", "Understand why no hydrogen is produced"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["铜", "硝酸"], expect: { reacted: true } },
  },
  {
    slug: "fe3-reduction-by-iron",
    title: { zh: "铁还原铁(III)离子", en: "Iron Reducing Iron(III) Ions" },
    description: {
      zh: "向氯化铁溶液中加入铁粉，棕黄色变浅绿，验证铁把三价铁还原为二价铁。",
      en: "Add iron powder to iron(III) chloride solution; the yellow-brown colour turns pale green, showing that iron reduces iron(III) to iron(II).",
    },
    category: C.REDOX,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["氯化铁", "铁"],
      en: ["iron(III) chloride", "iron"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管"],
      en: ["test tube", "dropping pipette"],
    },
    objectives: {
      zh: ["理解中间价态", "观察颜色变化", "书写离子方程式"],
      en: ["Understand intermediate oxidation states", "Observe the colour change", "Write the ionic equation"],
    },
    estimatedMinutes: 25,
    probe: { reagentKeys: ["氯化铁", "铁"], expect: { reacted: true } },
  },
  {
    slug: "kmno4-ethanol",
    title: { zh: "高锰酸钾氧化乙醇", en: "Potassium Manganate(VII) Oxidising Ethanol" },
    description: {
      zh: "酸性高锰酸钾氧化乙醇紫红色褪去，认识醇的还原性与氧化产物。",
      en: "Acidified potassium manganate(VII) oxidises ethanol and its purple colour fades; learn about the reducing behaviour of alcohols and their oxidation products.",
    },
    category: C.REDOX,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["高锰酸钾", "乙醇", "硫酸"],
      en: ["potassium manganate(VII)", "ethanol", "sulfuric acid"],
    },
    apparatus: {
      zh: ["试管", "水浴"],
      en: ["test tube", "water bath"],
    },
    objectives: {
      zh: ["观察氧化褪色", "认识醇被氧化", "联系酒驾检测原理"],
      en: ["Observe the decolourisation caused by oxidation", "Recognise that alcohols can be oxidised", "Relate the reaction to the principle of drink-driving tests"],
    },
    estimatedMinutes: 30,
    probe: { reagentKeys: ["高锰酸钾", "乙醇"], expect: { reacted: true, colorChange: true } },
  },
  {
    slug: "iodine-clock",
    title: { zh: "碘钟反应", en: "The Iodine Clock Reaction" },
    description: {
      zh: "混合碘酸盐与还原剂体系，经一段诱导期后溶液骤然变蓝，认识反应速率与振荡现象。",
      en: "Mix an iodate with a reducing-agent system; after an induction period the solution suddenly turns blue, introducing reaction rates and oscillating behaviour.",
    },
    category: C.REDOX,
    difficulty: D.HARD,
    reagents: {
      zh: ["碘化钾", "过氧化氢", "硫酸", "淀粉"],
      en: ["potassium iodide", "hydrogen peroxide", "sulfuric acid", "starch"],
    },
    apparatus: {
      zh: ["烧杯", "秒表", "磁力搅拌器"],
      en: ["beaker", "stopwatch", "magnetic stirrer"],
    },
    objectives: {
      zh: ["观察碘钟现象", "理解诱导期", "探究浓度影响"],
      en: ["Observe the iodine-clock phenomenon", "Understand the induction period", "Investigate the effect of concentration"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["过氧化氢", "碘化钾"], expect: { reacted: true, gas: true } },
  },
  {
    slug: "chlorine-bleaching",
    title: { zh: "氯水的漂白作用", en: "The Bleaching Action of Chlorine Water" },
    description: {
      zh: "用氯水使有色布条或品红褪色，认识次氯酸的强氧化性与漂白原理。",
      en: "Use chlorine water to bleach a piece of coloured cloth or magenta dye, and learn about the strong oxidising power of chloric(I) acid and the principle of bleaching.",
    },
    category: C.REDOX,
    difficulty: D.MEDIUM,
    reagents: {
      zh: ["氯水", "石蕊"],
      en: ["chlorine water", "litmus"],
    },
    apparatus: {
      zh: ["试管", "有色布条"],
      en: ["test tube", "piece of coloured cloth"],
    },
    objectives: {
      zh: ["认识漂白原理", "区分氯气与次氯酸", "联系漂白粉"],
      en: ["Understand the principle of bleaching", "Distinguish chlorine from chloric(I) acid", "Relate the reaction to bleaching powder"],
    },
    estimatedMinutes: 20,
  },
  {
    slug: "fe2-fe3-conversion",
    title: { zh: "铁的两种价态相互转化", en: "Interconversion of the Two Oxidation States of Iron" },
    description: {
      zh: "用氯水把亚铁离子氧化为铁离子、用铁粉把铁离子还原为亚铁，认识变价金属。",
      en: "Oxidise iron(II) ions to iron(III) with chlorine water and reduce iron(III) ions back to iron(II) with iron powder, introducing metals with variable oxidation states.",
    },
    category: C.REDOX,
    difficulty: D.HARD,
    reagents: {
      zh: ["硫酸亚铁", "氯水", "铁", "硫氰酸钾"],
      en: ["iron(II) sulfate", "chlorine water", "iron", "potassium thiocyanate"],
    },
    apparatus: {
      zh: ["试管", "胶头滴管", "白瓷板"],
      en: ["test tube", "dropping pipette", "white spotting tile"],
    },
    objectives: {
      zh: ["理解价态转化", "用显色验证", "书写氧化还原方程式"],
      en: ["Understand the interconversion of oxidation states", "Confirm the conversion with colour tests", "Write redox equations"],
    },
    estimatedMinutes: 35,
    probe: { reagentKeys: ["硫酸亚铁", "氯水"], expect: { reacted: true, colorChange: true } },
  },
];
