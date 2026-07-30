import type { KnowledgePoint } from '../types';

export const chemEnergetics001: KnowledgePoint = {
  id: 'chem-energetics-001',
  subject: 'chemistry',
  title: { zh: '吸热反应与放热反应', en: 'Endothermic and Exothermic Reactions' },
  summary: {
    zh: '化学反应总是伴随着能量变化，通常表现为热量的吸收或放出。认识放热反应与吸热反应，并从化学键的角度理解能量变化的来源。',
    en: 'Chemical reactions are always accompanied by energy changes, usually as heat released or absorbed. Learn exothermic and endothermic reactions, and understand the energy change in terms of bond breaking and bond making.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch7', 'pep-che-s2/ch2'],
    igcse: ['0620/5'],
  },
  keywords: {
    zh: ['放热反应', '吸热反应', '能量变化', '反应热', '焓变', '化学键', '燃烧', '中和反应'],
    en: ['exothermic reaction', 'endothermic reaction', 'energy change', 'enthalpy change', 'bond energy', 'combustion', 'neutralisation'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '化学反应中的能量变化' },
      {
        type: 'paragraph',
        text: '化学反应在生成新物质的同时，总是伴随着能量的变化，通常表现为热量的变化。放出热量的反应称为放热反应，吸收热量的反应称为吸热反应。判断依据是反应体系与外界之间的热量传递：放热反应使体系温度升高（向外界放热），吸热反应使体系温度降低（从外界吸热）。',
      },
      {
        type: 'list',
        items: [
          '常见的放热反应：所有燃烧反应、酸碱中和反应、金属与酸的反应、生石灰（CaO）与水的反应。',
          '常见的吸热反应：碳与二氧化碳在高温下生成一氧化碳、碳酸钙高温分解、氢氧化钡晶体与氯化铵的反应。',
          '注意：需要加热才能发生的反应不一定是吸热反应（如燃烧需先点燃，但总体放热）；放热反应也可能需要引发条件。',
        ],
      },
      { type: 'heading', text: '从化学键的角度理解（高中）' },
      {
        type: 'paragraph',
        text: '化学反应的本质是旧化学键断裂和新化学键形成。断裂化学键需要吸收能量，形成化学键会放出能量。当形成新键放出的能量大于断裂旧键吸收的能量时，反应总体放热；反之则总体吸热。',
      },
      {
        type: 'formula',
        latex: '\\Delta H = E(\\text{断裂反应物化学键吸收的能量}) - E(\\text{形成生成物化学键放出的能量})',
        caption: '反应热（焓变）：ΔH < 0 为放热反应，ΔH > 0 为吸热反应',
      },
      {
        type: 'formula',
        latex: '\\mathrm{C} + \\mathrm{O}_2 \\xrightarrow{\\text{点燃}} \\mathrm{CO}_2 \\quad \\Delta H = -393.5\\ \\mathrm{kJ/mol}',
        caption: '放热反应示例：碳完全燃烧放出热量',
      },
      {
        type: 'formula',
        latex: '\\mathrm{CaCO}_3 \\xrightarrow{\\text{高温}} \\mathrm{CaO} + \\mathrm{CO}_2\\uparrow \\quad \\Delta H \\approx +178\\ \\mathrm{kJ/mol}',
        caption: '吸热反应示例：石灰石高温煅烧需要持续供热',
      },
    ],
    en: [
      { type: 'heading', text: 'Energy changes in chemical reactions' },
      {
        type: 'paragraph',
        text: 'Chemical reactions always involve an energy change, usually as heat. A reaction that releases heat to the surroundings is exothermic, and one that takes in heat from the surroundings is endothermic. You can tell from the temperature of the mixture: it rises in an exothermic reaction and falls in an endothermic one.',
      },
      {
        type: 'list',
        items: [
          'Common exothermic reactions: all combustion, neutralisation of acids by alkalis, metals reacting with acids, and quicklime (CaO) reacting with water.',
          'Common endothermic reactions: carbon reacting with carbon dioxide at high temperature, thermal decomposition of calcium carbonate, and the reaction between barium hydroxide crystals and ammonium chloride.',
          'Note: a reaction that needs heating to start is not necessarily endothermic — burning must be ignited first, but it is strongly exothermic overall.',
        ],
      },
      { type: 'heading', text: 'Bond breaking and bond making (advanced)' },
      {
        type: 'paragraph',
        text: 'A chemical reaction involves breaking bonds in the reactants and forming new bonds in the products. Breaking bonds takes in energy; forming bonds releases energy. If the energy released in bond making is greater than the energy taken in for bond breaking, the reaction is exothermic overall; otherwise it is endothermic.',
      },
      {
        type: 'formula',
        latex: '\\Delta H = E(\\text{bond breaking, taken in}) - E(\\text{bond making, released})',
        caption: 'Enthalpy change: ΔH < 0 exothermic, ΔH > 0 endothermic',
      },
      {
        type: 'formula',
        latex: '\\mathrm{C} + \\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 \\quad \\Delta H = -393.5\\ \\mathrm{kJ/mol}',
        caption: 'Exothermic example: complete combustion of carbon',
      },
      {
        type: 'formula',
        latex: '\\mathrm{CaCO}_3 \\rightarrow \\mathrm{CaO} + \\mathrm{CO}_2 \\quad \\Delta H \\approx +178\\ \\mathrm{kJ/mol}',
        caption: 'Endothermic example: thermal decomposition of limestone needs continuous heating',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '下列反应中，属于吸热反应的是哪一个？',
        en: 'Which of the following reactions is endothermic?',
      },
      options: {
        zh: [
          '镁与稀盐酸反应',
          '碳与二氧化碳在高温下反应生成一氧化碳',
          '氢气在氧气中燃烧',
          '氢氧化钠溶液与稀盐酸中和',
        ],
        en: [
          'Magnesium reacting with dilute hydrochloric acid',
          'Carbon reacting with carbon dioxide at high temperature to form carbon monoxide',
          'Hydrogen burning in oxygen',
          'Sodium hydroxide solution neutralising dilute hydrochloric acid',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '燃烧、酸碱中和、金属与酸的反应都是典型的放热反应；碳与二氧化碳在高温下生成一氧化碳需要持续吸热，是常见的吸热反应。',
        en: 'Combustion, neutralisation and metal–acid reactions are all typically exothermic. The reaction of carbon with carbon dioxide needs continuous heat input at high temperature, so it is endothermic.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '氢气在氧气中燃烧生成水是放热反应。从化学键的角度分析，原因是？',
        en: 'Hydrogen burning in oxygen to form water is exothermic. In terms of chemical bonds, this is because…',
      },
      options: {
        zh: [
          '断裂 H–H 键和 O=O 键不需要能量',
          '形成 H–O 键放出的能量大于断裂 H–H 键和 O=O 键吸收的能量',
          '形成 H–O 键吸收的能量大于断裂旧键放出的能量',
          '反应中没有化学键断裂',
        ],
        en: [
          'Breaking H–H and O=O bonds requires no energy',
          'The energy released in forming H–O bonds is greater than the energy taken in to break H–H and O=O bonds',
          'Forming H–O bonds takes in more energy than is released by breaking the old bonds',
          'No bonds are broken during the reaction',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '断键吸热、成键放热。氢气燃烧总体放热，说明形成 H–O 键放出的能量多于断裂 H–H 键和 O=O 键吸收的能量，ΔH < 0。',
        en: 'Bond breaking takes in energy and bond making releases it. Since burning hydrogen is exothermic overall, the energy released when H–O bonds form must exceed the energy taken in to break H–H and O=O bonds, giving ΔH < 0.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列关于吸热反应和放热反应的说法中，正确的是？',
        en: 'Which statement about endothermic and exothermic reactions is correct?',
      },
      options: {
        zh: [
          '需要加热才能发生的反应一定是吸热反应',
          '放热反应在常温下不需要任何条件就能发生',
          '反应是吸热还是放热，取决于断键吸收的能量与成键放出的能量的相对大小',
          '吸热反应发生后体系的温度会升高',
        ],
        en: [
          'Any reaction that needs heating to start must be endothermic',
          'Exothermic reactions always happen at room temperature without any activation',
          'Whether a reaction is endo- or exothermic depends on the balance between energy taken in to break bonds and energy released in making bonds',
          'The temperature of the mixture rises after an endothermic reaction',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '判断吸热或放热要看能量收支：断键吸收的能量与成键放出的能量之差决定 ΔH 的正负。燃烧需点燃但总体放热，说明"需要加热"不等于"吸热"；吸热反应从环境吸热，体系温度降低。',
        en: 'The sign of ΔH is decided by the energy balance: energy taken in to break bonds versus energy released in making bonds. Burning needs ignition yet is exothermic, so "needs heating" does not mean "endothermic"; an endothermic reaction cools the mixture by taking heat from the surroundings.',
      },
    },
  ],
};
