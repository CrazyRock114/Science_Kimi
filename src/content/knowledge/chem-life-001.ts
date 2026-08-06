import type { KnowledgePoint } from '../types';

export const chemLife001: KnowledgePoint = {
  id: 'chem-life-001',
  subject: 'chemistry',
  title: { zh: '化学与生活', en: 'Chemistry in Everyday Life' },
  summary: {
    zh: '认识六大营养素与人体健康所需的化学元素，了解塑料、合成纤维、合成橡胶三大合成材料及"白色污染"的防治，关注空气与水污染等环境问题。',
    en: 'Meet the six nutrient groups and the chemical elements the human body needs, learn about the three synthetic materials — plastics, synthetic fibres and synthetic rubber — together with "white pollution", and consider air and water pollution.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-che-j9b/ch5'],
    igcse: ['0620/11.8', '0620/10.3', '0610/7.1'],
  },
  keywords: {
    zh: ['营养素', '蛋白质', '糖类', '维生素', '微量元素', '有机合成材料', '白色污染', '酸雨'],
    en: ['nutrients', 'protein', 'carbohydrates', 'vitamins', 'trace elements', 'synthetic materials', 'polymers', 'acid rain'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出六大营养素及其主要食物来源与生理功能。',
          '知道常量元素与微量元素的划分，说出几种元素缺乏引起的疾病。',
          '识别三大合成材料，会比较热塑性塑料与热固性塑料。',
          '了解"白色污染"、酸雨等环境问题的成因与防治措施。',
        ],
      },
      { type: 'heading', text: '人类重要的营养物质' },
      {
        type: 'paragraph',
        text: '食物中含有蛋白质、糖类、油脂、维生素、无机盐和水六大营养素。蛋白质是构成细胞的基本物质，存在于肉、蛋、奶、豆制品中；糖类是人体最主要的供能物质，淀粉在体内最终转化为葡萄糖；油脂是重要的备用能源；维生素需求量小但不可缺少，主要起调节新陈代谢的作用。',
      },
      { type: 'formula', latex: '\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2} \\xrightarrow{\\text{酶}} 6\\mathrm{CO_2} + 6\\mathrm{H_2O}', caption: '葡萄糖在体内缓慢氧化，为人体活动提供能量' },
      {
        type: 'list',
        items: [
          '缺乏维生素 C 会引起坏血病，缺乏维生素 A 会引起夜盲症。',
          '一氧化碳与血红蛋白结合能力约为氧的 200～300 倍，使血红蛋白失去输氧能力，故吸烟和煤气泄漏都十分危险。',
          '甲醛能使蛋白质变性，绝不能用甲醛溶液浸泡水产品。',
        ],
      },
      { type: 'heading', text: '化学元素与人体健康' },
      {
        type: 'paragraph',
        text: '人体中含量超过 0.01% 的元素称为常量元素，如氧、碳、氢、氮、钙、磷、钾等；含量在 0.01% 以下的称为微量元素，如铁、锌、碘、氟、硒等。微量元素虽少，却对健康影响很大，摄入不足或过量都会患病，应当均衡膳食、合理补充。',
      },
      {
        type: 'list',
        items: [
          '缺钙：幼儿及青少年患佝偻病，老年人骨质疏松。',
          '缺铁：引起贫血（铁是血红蛋白的成分）。',
          '缺碘：引起甲状腺肿大，食用加碘盐可预防。',
          '缺锌：食欲不振、生长迟缓、发育不良。',
        ],
      },
      { type: 'heading', text: '有机合成材料' },
      {
        type: 'paragraph',
        text: '含碳元素的化合物叫有机化合物（CO、CO₂、碳酸及碳酸盐等少数物质除外）。相对分子质量很大的有机物叫有机高分子化合物。塑料、合成纤维、合成橡胶是三大合成材料。链状结构的高分子材料（如聚乙烯）受热熔化、冷却凝固，可反复加工，具有热塑性；网状结构的（如酚醛塑料，俗称电木）一经成型就不再熔化，具有热固性。',
      },
      {
        type: 'list',
        items: [
          '天然纤维（棉、羊毛、蚕丝）与合成纤维（涤纶、锦纶、腈纶）可用灼烧法鉴别：羊毛灼烧有烧焦羽毛的气味，棉有烧纸气味，合成纤维则熔缩成硬球。',
          '合成材料耐化学腐蚀、强度高、绝缘性好，但大多数塑料在自然条件下降解极慢。',
          '废弃塑料带来的"白色污染"会破坏土壤、污染地下水、危害海洋生物。',
          '防治措施：减少不必要的使用、重复使用、使用可降解塑料、回收再利用。',
        ],
      },
      { type: 'heading', text: '化学与环境' },
      {
        type: 'paragraph',
        text: '煤、石油等化石燃料的燃烧会产生二氧化硫、氮氧化物等气体，它们溶于雨水形成酸雨（pH 小于 5.6），腐蚀建筑、酸化土壤和水体。一氧化碳有毒，是城市空气的主要污染物之一。二氧化碳本身无毒、不计入空气污染物，但排放过多会加剧温室效应。水体污染主要来自工业废水、生活污水和农业上化肥农药的不合理使用，含磷洗涤剂会造成水体富营养化。治理环境要从源头入手：使用清洁能源、处理达标后排放、发展"绿色化学"。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'nutrient（营养素）：食物中维持生命活动的物质，共六类：蛋白质、糖类、油脂、维生素、无机盐、水。',
          'trace element（微量元素）：人体中含量在 0.01% 以下的必需元素，如铁、锌、碘。',
          'polymer（聚合物/高分子）：由许多小分子（单体）连接而成的相对分子质量很大的化合物，塑料由聚合物制成。',
          'thermoplastic / thermosetting plastic（热塑性/热固性塑料）：受热可反复熔化成型 / 一经成型不再熔化的塑料。',
          'acid rain（酸雨）：pH 小于 5.6 的雨水，主要由二氧化硫和氮氧化物溶于水形成。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Name the six nutrient groups with their main food sources and functions.',
          'Distinguish major elements from trace elements and state diseases caused by some deficiencies.',
          'Identify the three synthetic materials and compare thermoplastic with thermosetting plastics.',
          'Describe the causes and control of environmental problems such as "white pollution" and acid rain.',
        ],
      },
      { type: 'heading', text: 'Nutrients that matter' },
      {
        type: 'paragraph',
        text: 'Food supplies six nutrient groups: proteins, carbohydrates, fats and oils, vitamins, mineral salts and water. Proteins are the basic building material of cells, found in meat, eggs, milk and soya products. Carbohydrates are the body’s main energy source — starch is finally converted into glucose. Fats and oils serve as a reserve energy store. Vitamins are needed only in tiny amounts but are essential for regulating metabolism.',
      },
      { type: 'formula', latex: '\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2} \\xrightarrow{\\text{enzymes}} 6\\mathrm{CO_2} + 6\\mathrm{H_2O}', caption: 'Glucose is slowly oxidised in the body, releasing energy for its activities' },
      {
        type: 'list',
        items: [
          'A lack of vitamin C causes scurvy; a lack of vitamin A causes night blindness.',
          'Carbon monoxide binds to haemoglobin about 200–300 times more strongly than oxygen, so the blood can no longer carry oxygen — smoking and gas leaks are both dangerous.',
          'Formaldehyde denatures proteins and must never be used to preserve seafood.',
        ],
      },
      { type: 'heading', text: 'Chemical elements and human health' },
      {
        type: 'paragraph',
        text: 'Elements making up more than 0.01% of the body are called major elements — oxygen, carbon, hydrogen, nitrogen, calcium, phosphorus, potassium and others. Those below 0.01% are trace elements, such as iron, zinc, iodine, fluorine and selenium. Tiny as they are, they matter greatly: both deficiency and excess cause illness, so a balanced diet with sensible supplementation is the rule.',
      },
      {
        type: 'list',
        items: [
          'Calcium deficiency: rickets in children and teenagers, osteoporosis in the elderly.',
          'Iron deficiency: anaemia (iron is part of haemoglobin).',
          'Iodine deficiency: goitre; iodised salt prevents it.',
          'Zinc deficiency: poor appetite, slow growth and delayed development.',
        ],
      },
      { type: 'heading', text: 'Synthetic organic materials' },
      {
        type: 'paragraph',
        text: 'Compounds containing carbon are organic compounds (with a few exceptions such as CO, CO₂, carbonic acid and the carbonates). Organic molecules of very large relative molecular mass are polymers. Plastics, synthetic fibres and synthetic rubber are the three great synthetic materials. Chain-structured polymers such as poly(ethene) melt when heated and solidify when cooled — they can be reshaped repeatedly and are thermoplastic. Network-structured ones such as phenolic resin (Bakelite) never melt once moulded — they are thermosetting.',
      },
      {
        type: 'list',
        items: [
          'Natural fibres (cotton, wool, silk) can be told from synthetic fibres (polyester, nylon, acrylic) by burning: wool smells of burnt feathers, cotton smells of burning paper, and synthetic fibres shrink into hard beads.',
          'Synthetic materials resist chemical attack, are strong and insulate well, but most plastics degrade extremely slowly in nature.',
          'Discarded plastics cause "white pollution": they damage soil, contaminate groundwater and endanger marine life.',
          'Countermeasures: cut unnecessary use, reuse, choose biodegradable plastics, and recycle.',
        ],
      },
      { type: 'heading', text: 'Chemistry and the environment' },
      {
        type: 'paragraph',
        text: 'Burning fossil fuels such as coal and oil releases sulfur dioxide and nitrogen oxides, which dissolve in rain to form acid rain (pH below 5.6) that corrodes buildings and acidifies soil and lakes. Carbon monoxide is toxic and a major urban air pollutant. Carbon dioxide itself is non-toxic and is not classed as an air pollutant, but excessive emissions intensify the greenhouse effect. Water pollution comes mainly from industrial effluent, domestic sewage and the unreasonable use of fertilisers and pesticides; phosphate detergents cause eutrophication. Environmental protection starts at the source: clean energy, treating waste to standard before discharge, and developing "green chemistry".',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'nutrient (营养素): A substance in food that sustains life; the six groups are proteins, carbohydrates, fats and oils, vitamins, mineral salts and water.',
          'trace element (微量元素): An essential element making up less than 0.01% of the body, such as iron, zinc or iodine.',
          'polymer (聚合物/高分子): A very large molecule built from many small units (monomers); plastics are made from polymers.',
          'thermoplastic / thermosetting plastic (热塑性/热固性塑料): A plastic that can be remelted and reshaped / one that never melts once moulded.',
          'acid rain (酸雨): Rain with pH below 5.6, formed mainly from sulfur dioxide and nitrogen oxides dissolving in water.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '人体缺乏下列哪种元素会引起贫血？（　）',
        en: 'A deficiency of which element causes anaemia in humans?',
      },
      options: {
        zh: ['钙', '铁', '碘', '锌'],
        en: ['calcium', 'iron', 'iodine', 'zinc'],
      },
      answerIndex: 1,
      explanation: {
        zh: '铁是血红蛋白的成分，缺铁会使血红蛋白合成不足，引起贫血。缺钙引起佝偻病或骨质疏松；缺碘引起甲状腺肿大；缺锌引起食欲不振、生长迟缓。注意把元素与对应的缺乏症一一对应记忆。',
        en: 'Iron is part of haemoglobin, so iron deficiency limits haemoglobin production and causes anaemia. Calcium deficiency causes rickets or osteoporosis; iodine deficiency causes goitre; zinc deficiency causes poor appetite and slow growth. Keep each element paired with its deficiency disease.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列材料中，属于有机合成材料的是（　）',
        en: 'Which of the following is a synthetic organic material?',
      },
      options: {
        zh: ['棉花', '不锈钢', '塑料', '玻璃'],
        en: ['cotton', 'stainless steel', 'plastic', 'glass'],
      },
      answerIndex: 2,
      explanation: {
        zh: '塑料与合成纤维、合成橡胶并称三大有机合成材料，C 正确。棉花是天然有机高分子材料，不是"合成"的；不锈钢是铁的合金，属于金属材料；玻璃的主要成分是硅酸盐，属于无机非金属材料。',
        en: 'Plastics, synthetic fibres and synthetic rubber are the three synthetic organic materials, so C is correct. Cotton is a natural organic polymer, not synthetic; stainless steel is an alloy of iron — a metallic material; glass is mainly silicates — an inorganic non-metallic material.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '为减少废弃塑料带来的"白色污染"，下列做法不合理的是（　）',
        en: 'To reduce the "white pollution" caused by waste plastics, which practice is NOT reasonable?',
      },
      options: {
        zh: [
          '回收各种废弃塑料',
          '用布袋代替塑料袋购物',
          '露天焚烧废弃塑料',
          '使用可降解塑料',
        ],
        en: [
          'recycling all kinds of waste plastic',
          'shopping with cloth bags instead of plastic bags',
          'burning waste plastic in the open air',
          'using biodegradable plastics',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '露天焚烧塑料会产生氯化氢等有害气体和大量烟尘，造成二次污染，C 不合理。回收利用、以布袋替代塑料袋（减少使用）、使用可降解塑料，分别从回收、减量、替代的角度减少"白色污染"，都是合理措施。',
        en: 'Burning plastics in the open releases hydrogen chloride and other harmful gases plus heavy smoke — secondary pollution — so C is unreasonable. Recycling, substituting cloth bags (reducing use) and biodegradable plastics all attack white pollution from valid angles: recovery, reduction and replacement.',
      },
    },
  ],
  examPractice: [
    {
      id: 'chem-life-001-cp1',
      syllabus: ['0620/11.8.5'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 1,
      stem: 'Disposal of waste poly(ethene) in landfill sites causes a long-term environmental problem. Explain why.',
      markScheme: [
        { text: 'Poly(ethene) is non-biodegradable / is not broken down by microorganisms, so it remains in the ground for a very long time', marks: 1 },
      ],
      examinerNote: {
        zh: '关键词是 non-biodegradable（不可生物降解）。答"塑料有害"或"塑料很多"都不得分——要解释的是为什么填埋会造成长期问题。',
        en: 'The key word is non-biodegradable. "Plastic is harmful" or "there is a lot of it" earn nothing — the question asks why landfill causes a long-term problem.',
      },
    },
  ],
  related: ['igcse-0620-11-8-polymers', 'igcse-0620-10-3-air-and-climate', 'igcse-0610-7-1-nutrition', 'chem-energetics-004'],
};
