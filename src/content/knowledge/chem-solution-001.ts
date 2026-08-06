import type { KnowledgePoint } from '../types';

export const chemSolution001: KnowledgePoint = {
  id: 'chem-solution-001',
  subject: 'chemistry',
  title: { zh: '溶液的形成与溶解度', en: 'Formation of Solutions and Solubility' },
  summary: {
    zh: '认识溶液的均一性与稳定性，区分饱和溶液与不饱和溶液，理解固体溶解度的四要素，学会读溶解度曲线并选择恰当的结晶方法。',
    en: 'Learn what makes a solution homogeneous and stable, distinguish saturated from unsaturated solutions, master the four key points of solubility, and read solubility curves to choose the right crystallisation method.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9b/ch2'],
    igcse: ['0620/12.1', '0620/7.3'],
  },
  keywords: {
    zh: ['溶液', '溶质', '溶剂', '饱和溶液', '不饱和溶液', '溶解度', '溶解度曲线', '结晶'],
    en: ['solution', 'solute', 'solvent', 'saturated solution', 'unsaturated solution', 'solubility', 'solubility curve', 'crystallisation'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出溶液、溶质、溶剂的概念，能判断常见溶液中的溶质和溶剂。',
          '理解饱和溶液与不饱和溶液的含义及其相互转化的条件。',
          '理解固体溶解度概念的四要素，会从溶解度曲线获取信息。',
          '能根据溶解度受温度影响的大小，选择蒸发结晶或降温结晶。',
        ],
      },
      { type: 'heading', text: '溶液的形成与特征' },
      {
        type: 'paragraph',
        text: '一种或几种物质分散到另一种物质里，形成均一的、稳定的混合物，叫做溶液。被溶解的物质叫溶质（可以是固体、液体或气体），能溶解其他物质的物质叫溶剂。水是最常用的溶剂，酒精、汽油等也可以作溶剂——碘酒就是碘的酒精溶液。',
      },
      {
        type: 'list',
        items: [
          '均一性：溶液各部分的组成和性质完全相同。',
          '稳定性：外界条件不变时，溶质不会从溶剂中分离出来。',
          '溶液是混合物：由溶质和溶剂组成；均一、稳定 ≠ 纯净，蒸馏水均一稳定但不是溶液。',
          '溶液不一定无色：硫酸铜溶液呈蓝色，氯化亚铁溶液呈浅绿色。',
        ],
      },
      { type: 'heading', text: '溶解时的吸热与放热' },
      {
        type: 'paragraph',
        text: '物质溶解时往往伴随着热量的变化：氢氧化钠（NaOH）溶于水时放热，溶液温度升高；硝酸铵（NH₄NO₃）溶于水时吸热，溶液温度降低；氯化钠（NaCl）溶于水时温度基本不变。利用这一差异可以鉴别物质，也可以解释"摇摇冰"等生活现象。',
      },
      { type: 'heading', text: '饱和溶液与不饱和溶液' },
      {
        type: 'paragraph',
        text: '在一定温度下，向一定量的溶剂里加入某种溶质，当溶质不能继续溶解时，所得到的溶液叫做这种溶质的饱和溶液；还能继续溶解的，叫做不饱和溶液。概念中"一定温度"和"一定量的溶剂"两个前提缺一不可——改变温度或溶剂的量，饱和与不饱和可以相互转化。',
      },
      {
        type: 'list',
        items: [
          '不饱和 → 饱和：增加溶质、蒸发溶剂；对大多数固体还可降低温度。',
          '饱和 → 不饱和：增加溶剂；对大多数固体还可升高温度。',
          '判断依据：在该条件下还能否继续溶解该溶质；有未溶解的溶质且不再减少，说明已饱和。',
          '饱和溶液不一定是浓溶液，不饱和溶液也不一定是稀溶液——"饱和"与"浓稀"是两个不同的角度。',
        ],
      },
      { type: 'heading', text: '固体的溶解度' },
      {
        type: 'paragraph',
        text: '在一定温度下，某固态物质在 100 g 溶剂里达到饱和状态时所溶解的质量，叫做这种物质在这种溶剂里的溶解度。理解这个概念要抓住四要素：一定的温度、100 g 溶剂、达到饱和状态、溶解的溶质质量（单位为克）。例如 20 ℃ 时氯化钠的溶解度为 36 g，表示 20 ℃ 时 100 g 水中最多能溶解 36 g 氯化钠。',
      },
      {
        type: 'paragraph',
        text: '气体的溶解度随温度升高而减小、随压强增大而增大。汽水中溶有二氧化碳：打开瓶盖压强减小，气体逸出；喝入胃中温度升高，又会打嗝排出二氧化碳。',
      },
      { type: 'heading', text: '溶解度曲线与结晶' },
      {
        type: 'paragraph',
        text: '溶解度曲线以温度为横坐标、溶解度为纵坐标。大多数固体（如 KNO₃）的溶解度随温度升高显著增大；少数固体（如 NaCl）受温度影响不大；极少数固体（如 Ca(OH)₂）随温度升高反而减小。曲线上的点表示该温度下的饱和溶液，曲线上方的区域有未溶解的溶质，下方为不饱和溶液。',
      },
      {
        type: 'list',
        items: [
          '降温结晶（冷却热饱和溶液）：适合溶解度随温度变化大的物质，如从热饱和溶液中提取 KNO₃。',
          '蒸发结晶：适合溶解度受温度影响小的物质，如海水晒盐提取 NaCl。',
          '结晶得到的晶体是纯净物，母液仍是该温度下的饱和溶液。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'solution（溶液）：一种或几种物质分散到另一种物质里形成的均一、稳定的混合物。',
          'solute / solvent（溶质/溶剂）：被溶解的物质 / 能溶解其他物质的物质。',
          'saturated solution（饱和溶液）：在一定温度下、一定量溶剂里不能再继续溶解某溶质的溶液。',
          'solubility（溶解度）：一定温度下，某物质在 100 g 溶剂中达到饱和时所溶解的质量（g）。',
          'crystallisation（结晶）：溶质以晶体形式从溶液中析出的过程，用于分离和提纯。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Define solution, solute and solvent, and identify the solute and solvent in common solutions.',
          'Explain saturated and unsaturated solutions and how each can be converted into the other.',
          'State the four key points in the definition of solubility and read information from solubility curves.',
          'Choose between evaporating and cooling crystallisation based on how solubility varies with temperature.',
        ],
      },
      { type: 'heading', text: 'How solutions form and what they are like' },
      {
        type: 'paragraph',
        text: 'When one or more substances disperse into another substance to form a homogeneous, stable mixture, we call it a solution. The substance that dissolves is the solute (it may be a solid, liquid or gas), and the substance that does the dissolving is the solvent. Water is the most common solvent, but ethanol and petrol also work — tincture of iodine is a solution of iodine in ethanol.',
      },
      {
        type: 'list',
        items: [
          'Homogeneous: every part of a solution has the same composition and properties.',
          'Stable: the solute does not separate out as long as conditions stay the same.',
          'A solution is a mixture of solute and solvent — homogeneous and stable does not mean pure; distilled water is homogeneous and stable but is not a solution.',
          'Solutions are not necessarily colourless: copper(II) sulfate solution is blue and iron(II) chloride solution is pale green.',
        ],
      },
      { type: 'heading', text: 'Energy changes on dissolving' },
      {
        type: 'paragraph',
        text: 'Dissolving is often accompanied by an energy change. Sodium hydroxide releases heat as it dissolves, so the solution warms up; ammonium nitrate absorbs heat, so the solution cools down; sodium chloride dissolves with almost no temperature change. These differences can identify substances and explain everyday tricks such as instant cold packs.',
      },
      { type: 'heading', text: 'Saturated and unsaturated solutions' },
      {
        type: 'paragraph',
        text: 'At a fixed temperature, when no more solute can dissolve in a given amount of solvent, the solution is saturated; if more solute can still dissolve, it is unsaturated. The conditions "fixed temperature" and "fixed amount of solvent" are essential parts of the definition — change either one and a saturated solution can become unsaturated, or vice versa.',
      },
      {
        type: 'list',
        items: [
          'Unsaturated → saturated: add more solute, evaporate solvent, or (for most solids) lower the temperature.',
          'Saturated → unsaturated: add more solvent, or (for most solids) raise the temperature.',
          'Test: check whether more of that solute can still dissolve; undissolved solute that stops shrinking means the solution is saturated.',
          'Saturated is not the same as concentrated, and unsaturated is not the same as dilute — they describe different things.',
        ],
      },
      { type: 'heading', text: 'Solubility of solids' },
      {
        type: 'paragraph',
        text: 'The solubility of a solid is the mass of it that saturates 100 g of solvent at a stated temperature. Four key points define it: a stated temperature, 100 g of solvent, a saturated state, and the mass dissolved in grams. For example, the solubility of sodium chloride at 20 °C is 36 g, meaning at most 36 g of it dissolves in 100 g of water at 20 °C.',
      },
      {
        type: 'paragraph',
        text: 'Gases behave oppositely to most solids: their solubility decreases as temperature rises and increases as pressure rises. That is why opening a fizzy drink releases bubbles (pressure drops) and why a warm drink makes you burp (temperature rises).',
      },
      { type: 'heading', text: 'Solubility curves and crystallisation' },
      {
        type: 'paragraph',
        text: 'A solubility curve plots solubility against temperature. For most solids, such as KNO₃, solubility rises steeply with temperature; for a few, such as NaCl, it barely changes; for a very few, such as Ca(OH)₂, it actually falls. A point on the curve represents a saturated solution; a point above the curve means undissolved solute is present, and a point below means the solution is unsaturated.',
      },
      {
        type: 'list',
        items: [
          'Cooling crystallisation (cooling a hot saturated solution): best for solutes whose solubility changes a lot with temperature, such as KNO₃.',
          'Evaporating crystallisation: best for solutes whose solubility barely changes with temperature, such as NaCl in sea-salt production.',
          'The crystals collected are a pure substance; the mother liquor left behind is still a saturated solution at that temperature.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'solution (溶液): A homogeneous, stable mixture formed when one or more substances disperse into another substance.',
          'solute / solvent (溶质/溶剂): The substance that dissolves / the substance that does the dissolving.',
          'saturated solution (饱和溶液): A solution in which no more of a solute can dissolve at that temperature in that amount of solvent.',
          'solubility (溶解度): The mass of solute that saturates 100 g of solvent at a stated temperature, in grams.',
          'crystallisation (结晶): The process in which a solute separates from solution as crystals, used for separation and purification.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列关于溶液的说法中，正确的是（　）',
        en: 'Which statement about solutions is correct?',
      },
      options: {
        zh: [
          '溶液都是无色透明的液体',
          '均一、稳定的液体一定是溶液',
          '溶液是均一、稳定的混合物',
          '溶液中的溶质只能是固体',
        ],
        en: [
          'All solutions are colourless, transparent liquids',
          'Any homogeneous, stable liquid must be a solution',
          'A solution is a homogeneous, stable mixture',
          'The solute in a solution can only be a solid',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '溶液的本质是均一、稳定的混合物，C 正确。A 错：硫酸铜溶液是蓝色的；B 错：蒸馏水均一、稳定，但它是纯净物，不是溶液；D 错：溶质可以是固体（食盐水）、液体（白酒中的酒精）或气体（汽水里的二氧化碳）。',
        en: 'A solution is by definition a homogeneous, stable mixture, so C is correct. A is wrong: copper(II) sulfate solution is blue. B is wrong: distilled water is homogeneous and stable but it is a pure substance, not a solution. D is wrong: solutes can be solids (salt water), liquids (ethanol in spirits) or gases (carbon dioxide in fizzy drinks).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '20 ℃ 时氯化钠的溶解度为 36 g。向 20 ℃ 的 100 g 水中加入 40 g 氯化钠，充分搅拌后所得溶液的质量是（　）',
        en: 'The solubility of sodium chloride at 20 °C is 36 g. If 40 g of sodium chloride is stirred into 100 g of water at 20 °C, what is the mass of the solution obtained?',
      },
      options: {
        zh: ['140 g', '136 g', '120 g', '104 g'],
        en: ['140 g', '136 g', '120 g', '104 g'],
      },
      answerIndex: 1,
      explanation: {
        zh: '20 ℃ 时 100 g 水中最多只能溶解 36 g 氯化钠，剩余 4 g 不溶解。溶液质量 = 100 g + 36 g = 136 g。选 140 g 是把未溶解的 4 g 也算进了溶液；注意"溶液质量"只包括已溶解的溶质和溶剂。',
        en: 'At 20 °C only 36 g can dissolve in 100 g of water, leaving 4 g undissolved. The solution mass is 100 g + 36 g = 136 g. Choosing 140 g wrongly counts the undissolved 4 g; only dissolved solute and solvent belong to the solution.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '硝酸钾的溶解度随温度升高显著增大，氯化钠的溶解度受温度影响不大。要从硝酸钾的热饱和溶液中获得较多硝酸钾晶体，最适宜的方法是（　）',
        en: 'The solubility of potassium nitrate rises steeply with temperature, while that of sodium chloride barely changes. To obtain plenty of potassium nitrate crystals from its hot saturated solution, the best method is',
      },
      options: {
        zh: ['蒸发溶剂结晶', '冷却热饱和溶液结晶', '过滤', '蒸馏'],
        en: ['evaporating the solvent', 'cooling the hot saturated solution', 'filtration', 'distillation'],
      },
      answerIndex: 1,
      explanation: {
        zh: '硝酸钾溶解度随温度降低而大幅减小，冷却热饱和溶液时大量晶体析出，B 正确。蒸发结晶更适合溶解度受温度影响小的氯化钠；过滤只能分离不溶性固体与液体，硝酸钾已溶解，无法滤出；蒸馏得到的是溶剂（水），不是溶质晶体。',
        en: 'Because the solubility of KNO₃ falls sharply as temperature drops, cooling a hot saturated solution deposits a large amount of crystals, so B is correct. Evaporation suits NaCl, whose solubility hardly changes with temperature. Filtration only separates insoluble solids from liquids — dissolved KNO₃ passes through. Distillation recovers the solvent (water), not solute crystals.',
      },
    },
  ],
  examPractice: [
    {
      id: 'chem-solution-001-cp1',
      syllabus: ['0620/12.1.3'],
      tier: 'core',
      commandWord: 'Define',
      marks: 2,
      stem: 'Define the terms solute and saturated solution.',
      markScheme: [
        { text: 'Solute: the substance that dissolves (in a solvent)', marks: 1 },
        { text: 'Saturated solution: a solution that can dissolve no more solute at that temperature', marks: 1 },
      ],
      examinerNote: {
        zh: '定义饱和溶液时必须带上限定条件"在该温度下"，漏掉温度和溶剂的限定是这一题最常见的失分点。',
        en: 'The condition "at that temperature" must appear in the definition of a saturated solution; omitting the limits of temperature and amount of solvent is the most common way to lose this mark.',
      },
    },
    {
      id: 'chem-solution-001-cp2',
      syllabus: ['0620/7.3.1'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 4,
      stem: 'Describe how you would prepare pure, dry crystals of copper(II) sulfate from copper(II) oxide and dilute sulfuric acid.',
      markScheme: [
        { text: 'Warm the dilute sulfuric acid and add copper(II) oxide until no more dissolves', marks: 1 },
        { text: 'Filter to remove the excess copper(II) oxide', marks: 1 },
        { text: 'Heat the filtrate to the point of crystallisation', marks: 1 },
        { text: 'Leave to cool and crystallise, then dry the crystals between filter papers', marks: 1 },
      ],
      examinerNote: {
        zh: '绝不要写"蒸干"。煮干会赶走结晶水，留下粉末而不是晶体——单是这一点就可能丢掉两分。核心思路正是"蒸发浓缩 + 降温结晶"：硫酸铜溶解度随温度变化大，所以冷却热饱和溶液结晶。',
        en: 'Never write "evaporate to dryness". Boiling dry drives off the water of crystallisation and leaves a powder, not crystals — that alone can cost two of these marks. The core idea is exactly "concentrate by evaporation, then crystallise by cooling": copper(II) sulfate solubility changes greatly with temperature.',
      },
    },
  ],
  related: ['chem-solution-002', 'chem-acidbase-004', 'igcse-0620-7-3-salts'],
};
