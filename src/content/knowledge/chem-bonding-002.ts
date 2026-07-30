import type { KnowledgePoint } from '../types';

export const chemBonding002: KnowledgePoint = {
  id: 'chem-bonding-002',
  subject: 'chemistry',
  title: { zh: '共价键与共价分子', en: 'Covalent Bonds and Covalent Molecules' },
  summary: {
    zh: '非金属原子之间通过共用电子对形成共价键，结合成共价分子。理解共价键的形成原理、常见共价分子的构成，以及共价型物质的性质特点。',
    en: 'Non-metal atoms share pairs of electrons to form covalent bonds and covalent molecules. Learn how covalent bonds form, the make-up of common covalent molecules, and the properties of covalent substances.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-che-j9a/ch3', 'pep-che-s1/ch4'],
    igcse: ['0620/2'],
  },
  keywords: {
    zh: ['共价键', '共用电子对', '共价分子', '共价化合物', '分子', '非金属'],
    en: ['covalent bond', 'shared electron pair', 'covalent molecule', 'covalent compound', 'molecule', 'non-metal'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '共用电子对：共价键的形成' },
      {
        type: 'paragraph',
        text: '两个非金属原子都想得到电子来达到稳定结构，谁也不容易把电子"让"给对方。于是它们各拿出部分最外层电子，形成为两个原子所共用的电子对——这种通过共用电子对形成的相互作用叫做共价键。由共价键结合成的微粒集团叫分子。',
      },
      { type: 'formula', latex: '\\mathrm{H} + \\mathrm{H} \\rightarrow \\mathrm{H}_2', caption: '两个氢原子共用一对电子形成氢分子，可写作 H—H' },
      { type: 'formula', latex: '\\mathrm{Cl} + \\mathrm{Cl} \\rightarrow \\mathrm{Cl}_2', caption: '两个氯原子共用一对电子形成氯分子，可写作 Cl—Cl' },
      { type: 'heading', text: '常见的共价分子' },
      {
        type: 'list',
        items: [
          '双原子分子：H₂、O₂、N₂、Cl₂——由同种非金属原子构成，属于单质。',
          '共价化合物的分子：H₂O、CO₂、CH₄、HCl——由不同种非金属原子构成。',
          '每个原子形成的共价键数目有规可循：H 形成 1 个，O 形成 2 个，N 形成 3 个，C 形成 4 个。',
        ],
      },
      { type: 'formula', latex: '\\mathrm{C} + 4\\,\\mathrm{H} \\rightarrow \\mathrm{CH}_4', caption: '碳原子与 4 个氢原子各共用一对电子，形成甲烷分子' },
      { type: 'heading', text: '共价型物质的性质' },
      {
        type: 'paragraph',
        text: '由小分子构成的共价物质（如 H₂O、CO₂、CH₄）分子之间的作用力较弱，因此熔点、沸点一般较低，许多在常温下是气体或液体；它们中没有可以自由移动的带电粒子，所以通常不导电。这与熔点高、熔融能导电的离子化合物形成鲜明对比。',
      },
    ],
    en: [
      { type: 'heading', text: 'Shared electron pairs: how covalent bonds form' },
      {
        type: 'paragraph',
        text: 'Two non-metal atoms both want to gain electrons to reach a stable arrangement, so neither will give electrons away. Instead, each contributes outer-shell electrons to form a pair shared by both atoms — this attraction created by a shared pair of electrons is called a covalent bond. A group of atoms held together by covalent bonds is a molecule.',
      },
      { type: 'formula', latex: '\\mathrm{H} + \\mathrm{H} \\rightarrow \\mathrm{H}_2', caption: 'Two hydrogen atoms share one pair of electrons, written H—H' },
      { type: 'formula', latex: '\\mathrm{Cl} + \\mathrm{Cl} \\rightarrow \\mathrm{Cl}_2', caption: 'Two chlorine atoms share one pair of electrons, written Cl—Cl' },
      { type: 'heading', text: 'Common covalent molecules' },
      {
        type: 'list',
        items: [
          'Diatomic molecules: H₂, O₂, N₂, Cl₂ — made of one kind of non-metal atom; these are elements.',
          'Molecules of covalent compounds: H₂O, CO₂, CH₄, HCl — made of different non-metal atoms.',
          'The number of bonds each atom forms follows a pattern: H forms 1, O forms 2, N forms 3, C forms 4.',
        ],
      },
      { type: 'formula', latex: '\\mathrm{C} + 4\\,\\mathrm{H} \\rightarrow \\mathrm{CH}_4', caption: 'A carbon atom shares a pair of electrons with each of four hydrogen atoms, forming methane' },
      { type: 'heading', text: 'Properties of covalent substances' },
      {
        type: 'paragraph',
        text: 'Simple covalent substances such as H₂O, CO₂ and CH₄ consist of small molecules with only weak forces between them, so their melting and boiling points are usually low and many are gases or liquids at room temperature. They contain no freely moving charged particles, so they do not conduct electricity — a sharp contrast with ionic compounds, which have high melting points and conduct when molten.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '氯化氢（HCl）分子中，氢原子与氯原子之间的结合方式是？',
        en: 'How are the hydrogen and chlorine atoms joined in a hydrogen chloride (HCl) molecule?',
      },
      options: {
        zh: [
          '共用一对电子形成共价键',
          '氢原子把电子转移给氯原子形成离子键',
          '靠分子间作用力松散地结合',
          '氯原子把电子转移给氢原子形成离子键',
        ],
        en: [
          'They share a pair of electrons in a covalent bond',
          'The hydrogen atom transfers an electron to chlorine, forming an ionic bond',
          'They are loosely held by intermolecular forces',
          'The chlorine atom transfers an electron to hydrogen, forming an ionic bond',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '氢和氯都是非金属元素，都倾向于得到电子，因此通过共用一对电子形成共价键结合成分子，而不是发生电子转移。离子键一般出现在金属与非金属之间。',
        en: 'Both hydrogen and chlorine are non-metals that tend to gain electrons, so they share a pair of electrons in a covalent bond rather than transferring electrons. Ionic bonds usually form between a metal and a non-metal.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列物质中，原子之间通过共价键结合的是？',
        en: 'In which substance are the atoms held together by covalent bonds?',
      },
      options: {
        zh: ['二氧化碳（CO₂）', '氯化钠（NaCl）', '氧化镁（MgO）', '氯化钙（CaCl₂）'],
        en: ['Carbon dioxide (CO₂)', 'Sodium chloride (NaCl)', 'Magnesium oxide (MgO)', 'Calcium chloride (CaCl₂)'],
      },
      answerIndex: 0,
      explanation: {
        zh: 'CO₂ 由碳、氧两种非金属元素组成，原子间通过共用电子对（共价键）结合；NaCl、MgO、CaCl₂ 都由金属与非金属组成，属于离子化合物，靠离子键结合。',
        en: 'CO₂ contains only non-metal atoms, which share electrons in covalent bonds. NaCl, MgO and CaCl₂ are metal–non-metal compounds held together by ionic bonds.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '甲烷（CH₄）分子中，碳原子共形成了几个共价键？',
        en: 'How many covalent bonds does the carbon atom form in a methane (CH₄) molecule?',
      },
      options: {
        zh: ['1 个', '2 个', '3 个', '4 个'],
        en: ['1', '2', '3', '4'],
      },
      answerIndex: 3,
      explanation: {
        zh: '碳原子最外层有 4 个电子，还差 4 个电子达到稳定结构，因此与 4 个氢原子各共用一对电子，形成 4 个共价键。每个氢原子形成 1 个共价键。',
        en: 'A carbon atom has 4 outer electrons and needs 4 more for a stable arrangement, so it shares one pair of electrons with each of 4 hydrogen atoms — 4 covalent bonds in total. Each hydrogen forms just 1 bond.',
      },
    },
  ],
};
