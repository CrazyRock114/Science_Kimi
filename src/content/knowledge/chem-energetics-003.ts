import type { KnowledgePoint } from '../types';

export const chemEnergetics003: KnowledgePoint = {
  id: 'chem-energetics-003',
  subject: 'chemistry',
  title: { zh: '可逆反应与化学平衡入门', en: 'Reversible Reactions and an Introduction to Chemical Equilibrium' },
  summary: {
    zh: '有些反应在同一条件下既能向正反应方向进行，又能向逆反应方向进行。认识可逆反应的特点，理解化学平衡是一种动态平衡：正、逆反应速率相等，各组分的浓度保持不变。',
    en: 'Some reactions can proceed in both the forward and reverse directions under the same conditions. Meet reversible reactions and understand chemical equilibrium as a dynamic state: the forward and reverse rates are equal and the concentrations stay constant.',
  },
  gradeTier: 'senior',
  syllabus: {
    pep: ['pep-che-s2/ch2'],
    igcse: ['0620/6'],
  },
  keywords: {
    zh: ['可逆反应', '化学平衡', '动态平衡', '正反应速率', '逆反应速率', '平衡状态'],
    en: ['reversible reaction', 'chemical equilibrium', 'dynamic equilibrium', 'forward reaction', 'reverse reaction', 'equilibrium position'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '可逆反应' },
      {
        type: 'paragraph',
        text: '在同一条件下，既能向正反应方向进行，同时又能向逆反应方向进行的反应，称为可逆反应，化学方程式中用"⇌"代替"="。可逆反应不能进行到底：反应物不可能全部转化为生成物，体系中反应物和生成物总是同时存在。',
      },
      {
        type: 'formula',
        latex: '\\mathrm{N}_2 + 3\\mathrm{H}_2 \\underset{\\text{高温、高压}}{\\overset{\\text{催化剂}}{\\rightleftharpoons}} 2\\mathrm{NH}_3',
        caption: '合成氨：典型的可逆反应',
      },
      {
        type: 'formula',
        latex: '2\\mathrm{SO}_2 + \\mathrm{O}_2 \\underset{\\Delta}{\\overset{\\text{催化剂}}{\\rightleftharpoons}} 2\\mathrm{SO}_3',
        caption: '二氧化硫的催化氧化：工业制硫酸的关键反应',
      },
      { type: 'heading', text: '化学平衡状态' },
      {
        type: 'paragraph',
        text: '一定条件下的可逆反应进行到某一时刻，正反应速率与逆反应速率相等，反应物和生成物的浓度不再发生变化，这时体系所处的状态称为化学平衡状态。平衡是动态平衡：反应并没有停止，正、逆反应仍在不断进行，只是两者速率相等，宏观上各组分的浓度保持不变。',
      },
      {
        type: 'list',
        items: [
          '逆：化学平衡研究的对象是可逆反应。',
          '等：v(正) = v(逆) ≠ 0，这是平衡的本质特征。',
          '动：平衡是动态平衡，反应仍在进行。',
          '定：各组分的浓度（或含量）保持一定，这是平衡的宏观表现。',
          '变：平衡是有条件的，外界条件（浓度、温度、压强等）改变时，原平衡会被破坏，并在新条件下建立新的平衡。',
        ],
      },
      {
        type: 'paragraph',
        text: '常见误解提醒：达到平衡时各组分浓度"相等"是错的——是"保持不变"，反应物与生成物的浓度一般并不相等；平衡也不是反应停止，而是正、逆反应以相同速率同时进行。',
      },
    ],
    en: [
      { type: 'heading', text: 'Reversible reactions' },
      {
        type: 'paragraph',
        text: 'A reversible reaction can proceed in both the forward and reverse directions under the same conditions, and its equation uses "⇌" instead of "→". A reversible reaction never goes to completion: the reactants can never be fully converted into products, so reactants and products are always present together in the mixture.',
      },
      {
        type: 'formula',
        latex: '\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightleftharpoons 2\\mathrm{NH}_3',
        caption: 'Ammonia synthesis (Haber process): a typical reversible reaction',
      },
      {
        type: 'formula',
        latex: '2\\mathrm{SO}_2 + \\mathrm{O}_2 \\rightleftharpoons 2\\mathrm{SO}_3',
        caption: 'Catalytic oxidation of sulfur dioxide: the key reaction in making sulfuric acid',
      },
      { type: 'heading', text: 'The equilibrium state' },
      {
        type: 'paragraph',
        text: 'When a reversible reaction under fixed conditions reaches the point where the forward and reverse rates become equal, the concentrations of reactants and products no longer change. The system is then at chemical equilibrium. Equilibrium is dynamic: the reaction has not stopped — the forward and reverse reactions keep going at equal rates, so the concentrations appear constant at the macroscopic level.',
      },
      {
        type: 'list',
        items: [
          'Reversible: equilibrium only applies to reversible reactions.',
          'Equal rates: rate(forward) = rate(reverse) ≠ 0 — the essential feature of equilibrium.',
          'Dynamic: both reactions continue; the balance never sleeps.',
          'Constant concentrations: the macroscopic sign of equilibrium.',
          'Conditional: if conditions (concentration, temperature, pressure) change, the old equilibrium is disturbed and a new one is established under the new conditions.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Common misconception: at equilibrium the concentrations are "constant", not "equal" — reactant and product concentrations are generally different. Nor does equilibrium mean the reaction has stopped; both directions continue at the same rate.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一定条件下，可逆反应达到化学平衡状态时，下列说法正确的是？',
        en: 'A reversible reaction has reached chemical equilibrium under fixed conditions. Which statement is correct?',
      },
      options: {
        zh: [
          '正、逆反应都停止了',
          '反应物和生成物的浓度相等',
          '正、逆反应速率相等且不为零，各组分浓度保持不变',
          '反应物已经全部转化为生成物',
        ],
        en: [
          'Both the forward and reverse reactions have stopped',
          'The concentrations of reactants and products are equal',
          'The forward and reverse rates are equal and non-zero, and all concentrations stay constant',
          'The reactants have been completely converted into products',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '化学平衡是动态平衡：v(正) = v(逆) ≠ 0，反应仍在进行，只是各组分浓度保持不变。浓度"不变"不等于"相等"；可逆反应不能进行到底，反应物不可能全部转化。',
        en: 'Equilibrium is dynamic: rate(forward) = rate(reverse) ≠ 0, so the reactions continue while concentrations remain constant. "Constant" does not mean "equal", and a reversible reaction never converts all reactants into products.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '一定温度下，密闭容器中发生反应 N₂ + 3H₂ ⇌ 2NH₃。下列哪种情况能说明反应达到了平衡状态？',
        en: 'At a fixed temperature, N₂ + 3H₂ ⇌ 2NH₃ takes place in a closed container. Which observation shows that equilibrium has been reached?',
      },
      options: {
        zh: [
          '单位时间内消耗 1 mol N₂，同时生成 2 mol NH₃',
          '单位时间内消耗 1 mol N₂，同时消耗 2 mol NH₃',
          '容器中 N₂、H₂、NH₃ 的分子数之比为 1∶3∶2',
          '反应开始时 N₂ 的浓度最大',
        ],
        en: [
          'For every 1 mol of N₂ consumed per unit time, 2 mol of NH₃ are formed',
          'For every 1 mol of N₂ consumed per unit time, 2 mol of NH₃ are consumed',
          'The ratio of N₂∶H₂∶NH₃ molecules in the container is 1∶3∶2',
          'The concentration of N₂ is greatest at the start of the reaction',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '判断是否平衡要看正、逆两个方向的速率是否符合化学计量关系：消耗 N₂ 是正反应方向，消耗 NH₃ 是逆反应方向，1 mol N₂ 对应 2 mol NH₃，说明 v(正) = v(逆)。选项 A 描述的都是正反应方向，不能说明平衡；浓度或分子数之比等于化学计量数之比也不是平衡的必要条件。',
        en: 'Equilibrium must be judged by comparing rates in opposite directions with the stoichiometric ratio: consuming N₂ is the forward direction, consuming NH₃ is the reverse, and 1 mol N₂ corresponds to 2 mol NH₃ — so the two rates are equal. Option A describes only the forward direction; a 1∶3∶2 ratio of molecules is not required for equilibrium either.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '在密闭容器中充入 SO₂ 和用 ¹⁸O 标记的氧气（¹⁸O₂），发生反应 2SO₂ + O₂ ⇌ 2SO₃。达到平衡后，¹⁸O 会存在于哪些物质中？',
        en: 'A closed container is filled with SO₂ and oxygen labelled with ¹⁸O (¹⁸O₂), and the reaction 2SO₂ + O₂ ⇌ 2SO₃ occurs. Once equilibrium is reached, where will the ¹⁸O atoms be found?',
      },
      options: {
        zh: [
          '只存在于 SO₃ 中',
          '只存在于 O₂ 和 SO₃ 中',
          '存在于 SO₂、O₂ 和 SO₃ 三种物质中',
          '只存在于 O₂ 中',
        ],
        en: [
          'Only in SO₃',
          'Only in O₂ and SO₃',
          'In all three substances: SO₂, O₂ and SO₃',
          'Only in O₂',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '化学平衡是动态平衡：¹⁸O₂ 与 SO₂ 通过正反应生成含 ¹⁸O 的 SO₃，同时 SO₃ 又通过逆反应分解，把 ¹⁸O 带回 SO₂ 和 O₂ 中。最终三种物质中都含有 ¹⁸O。这道题说明平衡时正、逆反应都仍在进行。',
        en: 'Equilibrium is dynamic: ¹⁸O₂ and SO₂ form ¹⁸O-labelled SO₃ in the forward reaction, while SO₃ decomposes in the reverse reaction, carrying ¹⁸O back into SO₂ and O₂. At equilibrium all three substances contain ¹⁸O — direct evidence that both directions of the reaction are still proceeding.',
      },
    },
  ],
};
