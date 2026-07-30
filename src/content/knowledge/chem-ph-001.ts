import { phKernel } from '../../simulations/kernels/ph';
import type { KnowledgePoint } from '../types';

export const chemPh001: KnowledgePoint = {
  id: 'chem-ph-001',
  subject: 'chemistry',
  title: { zh: '酸碱与 pH', en: 'Acids, Bases and pH' },
  summary: {
    zh: 'pH 是衡量溶液酸碱性强弱的标度。拖动滑块改变 pH，观察通用指示剂的颜色变化与氢离子浓度的数量级变化。',
    en: 'pH measures how acidic or alkaline a solution is. Drag the slider to change the pH and observe the universal indicator colour and the hydrogen ion concentration.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9b/ch3'],
    igcse: ['0620/7.1'],
  },
  keywords: {
    zh: ['pH', '酸', '碱', '指示剂', '氢离子浓度', '中性', '酸碱度'],
    en: ['pH', 'acid', 'base', 'alkali', 'indicator', 'hydrogen ion concentration', 'neutral'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '什么是 pH？' },
      {
        type: 'paragraph',
        text: 'pH 是用来表示溶液酸碱性强弱程度的标度，取值范围通常为 0 到 14。pH = 7 时溶液呈中性（如纯水）；pH < 7 时呈酸性，数值越小酸性越强；pH > 7 时呈碱性，数值越大碱性越强。',
      },
      { type: 'formula', latex: '\\mathrm{pH} = -\\lg\\,[\\mathrm{H}^+]', caption: 'pH 的定义：[H⁺] 为氢离子浓度（mol/L）' },
      { type: 'formula', latex: '[\\mathrm{H}^+] = 10^{-\\mathrm{pH}}', caption: '由 pH 求氢离子浓度' },
      {
        type: 'paragraph',
        text: 'pH 每减小 1，氢离子浓度增大为原来的 10 倍。因此 pH = 3 的溶液比 pH = 5 的溶液酸性强 100 倍。',
      },
      { type: 'heading', text: '通用指示剂' },
      {
        type: 'paragraph',
        text: '通用指示剂是多种指示剂的混合物，在不同 pH 下呈现不同颜色：强酸性为红色，弱酸性为橙黄色，中性为绿色，弱碱性为蓝色，强碱性为紫色。可以据此粗略判断溶液的 pH。',
      },
      {
        type: 'list',
        items: [
          '酸性溶液：使蓝色石蕊变红，pH < 7，如柠檬汁、食醋、胃酸。',
          '中性溶液：pH = 7，如纯水、食盐水。',
          '碱性溶液：使红色石蕊变蓝，pH > 7，如肥皂水、石灰水、氨水。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'What is pH?' },
      {
        type: 'paragraph',
        text: 'pH is a scale for measuring how acidic or alkaline a solution is, usually ranging from 0 to 14. A solution with pH = 7 is neutral (like pure water); pH < 7 is acidic, and the lower the value the stronger the acid; pH > 7 is alkaline, and the higher the value the stronger the alkali.',
      },
      { type: 'formula', latex: '\\mathrm{pH} = -\\log_{10}[\\mathrm{H}^+]', caption: 'Definition of pH: [H⁺] is the hydrogen ion concentration (mol/L)' },
      { type: 'formula', latex: '[\\mathrm{H}^+] = 10^{-\\mathrm{pH}}', caption: 'Hydrogen ion concentration from pH' },
      {
        type: 'paragraph',
        text: 'Each decrease of 1 in pH means the hydrogen ion concentration becomes 10 times greater. So a solution at pH 3 is 100 times more acidic than one at pH 5.',
      },
      { type: 'heading', text: 'Universal indicator' },
      {
        type: 'paragraph',
        text: 'Universal indicator is a mixture of several indicators that shows different colours at different pH values: red for strongly acidic, orange-yellow for weakly acidic, green for neutral, blue for weakly alkaline and purple for strongly alkaline solutions. It gives a rough estimate of the pH of a solution.',
      },
      {
        type: 'list',
        items: [
          'Acidic solutions turn blue litmus red, pH < 7 — e.g. lemon juice, vinegar, gastric acid.',
          'Neutral solutions have pH = 7 — e.g. pure water, salt solution.',
          'Alkaline solutions turn red litmus blue, pH > 7 — e.g. soap solution, limewater, ammonia solution.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'ph-indicator',
    params: [
      {
        key: 'pH',
        label: { zh: 'pH 值', en: 'pH value' },
        min: 0,
        max: 14,
        step: 0.1,
        defaultValue: 7,
      },
    ],
    liveFormulas: [
      {
        id: 'h-concentration',
        latex: '[\\mathrm{H}^+] = 10^{-\\mathrm{pH}}\\ \\mathrm{mol/L}',
        substitute: (p) => {
          const conc = 10 ** -p.pH;
          return `[\\mathrm{H}^+] = 10^{-${p.pH}} = ${conc.toExponential(1).replace('e', '\\times 10^{') + '}'}}\\ \\mathrm{mol/L}`;
        },
      },
    ],
  },
  presets: [
    {
      id: 'gastric-acid',
      name: { zh: '胃酸', en: 'Gastric acid' },
      description: { zh: '强酸性，pH 约 1.5。', en: 'Strongly acidic, pH ≈ 1.5.' },
      params: { pH: 1.5 },
    },
    {
      id: 'lemon-juice',
      name: { zh: '柠檬汁', en: 'Lemon juice' },
      description: { zh: '弱酸性，pH 约 2.4。', en: 'Weakly acidic, pH ≈ 2.4.' },
      params: { pH: 2.4 },
    },
    {
      id: 'pure-water',
      name: { zh: '纯水', en: 'Pure water' },
      description: { zh: '中性，pH = 7。', en: 'Neutral, pH = 7.' },
      params: { pH: 7 },
    },
    {
      id: 'soap-solution',
      name: { zh: '肥皂水', en: 'Soap solution' },
      description: { zh: '弱碱性，pH 约 10。', en: 'Weakly alkaline, pH ≈ 10.' },
      params: { pH: 10 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '某溶液的 pH = 3，该溶液呈什么性？',
        en: 'A solution has a pH of 3. What is its nature?',
      },
      options: {
        zh: ['酸性', '中性', '碱性', '无法判断'],
        en: ['Acidic', 'Neutral', 'Alkaline', 'Cannot be determined'],
      },
      answerIndex: 0,
      explanation: {
        zh: 'pH < 7 的溶液呈酸性，pH 越小酸性越强。',
        en: 'A solution with pH < 7 is acidic; the lower the pH, the stronger the acidity.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '溶液的 pH 从 5 变为 3，氢离子浓度变为原来的多少倍？',
        en: 'When the pH of a solution changes from 5 to 3, by what factor does the hydrogen ion concentration change?',
      },
      options: {
        zh: ['2 倍', '20 倍', '100 倍', '1000 倍'],
        en: ['2 times', '20 times', '100 times', '1000 times'],
      },
      answerIndex: 2,
      explanation: {
        zh: 'pH 每减小 1，[H⁺] 增大 10 倍；pH 从 5 到 3 减小了 2，所以 [H⁺] 增大 10² = 100 倍。',
        en: 'Each decrease of 1 in pH multiplies [H⁺] by 10. A drop from pH 5 to pH 3 is 2 units, so [H⁺] increases by 10² = 100 times.',
      },
    },
  ],
  kernels: {
    ph: phKernel,
  },
  expectedResults: [
    {
      id: 'probe-neutral-water',
      description: {
        zh: '中性水（pH = 7）：[H⁺] = 1×10⁻⁷ mol/L',
        en: 'Neutral water (pH = 7): [H⁺] = 1×10⁻⁷ mol/L',
      },
      kernel: 'ph',
      input: { pH: 7 },
      expected: { hConcentration: 1e-7 },
    },
    {
      id: 'probe-strong-acid',
      description: {
        zh: 'pH = 0：[H⁺] = 1 mol/L；pH = 2：[H⁺] = 0.01 mol/L',
        en: 'pH = 0: [H⁺] = 1 mol/L; pH = 2: [H⁺] = 0.01 mol/L',
      },
      kernel: 'ph',
      input: { pH: 2 },
      expected: { hConcentration: 0.01 },
    },
    {
      id: 'probe-strong-alkali',
      description: {
        zh: 'pH = 14：[H⁺] = 1×10⁻¹⁴ mol/L',
        en: 'pH = 14: [H⁺] = 1×10⁻¹⁴ mol/L',
      },
      kernel: 'ph',
      input: { pH: 14 },
      expected: { hConcentration: 1e-14 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '柠檬汁酸得倒牙，肥皂水滑溜溜的，纯水喝起来什么味道都没有。这些差别，其实用一个数字就能说清楚——那就是 pH。接下来几分钟，我们就来认识这把衡量酸碱强弱的"尺子"。',
          en: "Lemon juice makes your mouth pucker, soapy water feels slippery, and pure water tastes like nothing at all. It turns out a single number can describe all of these differences — the pH. Over the next few minutes, let's get to know this scale for measuring acids and alkalis.",
        },
      },
      {
        id: 'concept-ph-scale',
        kind: 'concept',
        text: {
          zh: 'pH 的取值通常在 0 到 14 之间。正好等于 7 的是中性，比如纯水；小于 7 是酸性，数值越小酸得越厉害；大于 7 是碱性，数值越大碱性越强。所以记住一个 7，你就抓住了整把尺子的中心。',
          en: "The pH scale usually runs from 0 to 14. A value of exactly 7 means neutral, like pure water. Below 7 is acidic, and the lower the number, the stronger the acid. Above 7 is alkaline, and the higher the number, the stronger the alkali. So just remember the number 7 — that's the centre of the whole scale.",
        },
      },
      {
        id: 'concept-log-scale',
        kind: 'concept',
        text: {
          zh: '有一点特别要小心：pH 不是普通的刻度，它是按十倍十倍跳的。pH 每减小 1，溶液里的氢离子浓度就增大 10 倍。所以 pH 等于 3 的溶液，可比 pH 等于 5 的溶液酸性强整整 100 倍，而不是只强一点点。',
          en: "Now here's the part that trips people up: the pH scale doesn't move in even steps — it jumps in powers of ten. Every time the pH drops by 1, the hydrogen ion concentration becomes ten times greater. So a solution at pH 3 isn't just a bit more acidic than one at pH 5 — it's a hundred times more acidic.",
        },
      },
      {
        id: 'concept-indicator',
        kind: 'concept',
        text: {
          zh: '那我们怎么知道一杯溶液的 pH 大概是多少呢？可以请通用指示剂帮忙。它在强酸里显红色，弱酸里显橙黄色，中性时是绿色，弱碱显蓝色，强碱里会变成紫色。看一眼颜色，酸碱强弱心里就有数了。',
          en: "So how do we actually find the pH of a solution? That's where universal indicator comes in. It turns red in strong acids, orange-yellow in weak acids, green when neutral, blue in weak alkalis and purple in strong alkalis. One look at the colour gives you a rough idea of the pH.",
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '现在轮到你了。拖动下面的 pH 滑块，从 0 慢慢拉到 14，盯着指示剂的颜色看它是怎么从红色一路变到紫色的。再点几个预设：胃酸、柠檬汁、纯水、肥皂水，看看它们各自落在尺子的什么位置，顺便留意下方氢离子浓度的数量级变化有多大。',
          en: "Now it's your turn. Drag the pH slider below slowly from 0 all the way to 14, and watch the indicator colour sweep from red through to purple. Then tap the presets — gastric acid, lemon juice, pure water, soap solution — and see where each one sits on the scale. Keep an eye on the hydrogen ion concentration too, and notice how dramatically it changes.",
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '来总结一下：pH 是衡量酸碱性强弱的标度，7 是中性，越小越酸，越大越碱。它每差 1，氢离子浓度就差 10 倍，而通用指示剂的颜色能帮我们快速判断 pH 的大小。掌握了这把尺子，生活里那些酸的碱的就都骗不了你了。',
          en: "Let's wrap up. pH measures how acidic or alkaline a solution is: 7 is neutral, lower means more acidic, higher means more alkaline. Each step of 1 on the scale means a tenfold change in hydrogen ion concentration, and universal indicator gives us a quick colour-based readout. With this scale in hand, the acids and alkalis around you can't fool you anymore.",
        },
      },
    ],
  },
};
