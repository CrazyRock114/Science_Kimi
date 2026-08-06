import type { KnowledgePoint } from '../types';

export const phyMagnet003: KnowledgePoint = {
  id: 'phy-magnet-003',
  subject: 'physics',
  title: { zh: '电动机与电磁感应', en: 'Electric Motors and Electromagnetic Induction' },
  summary: {
    zh: '理解磁场对通电导体的作用与电动机的原理（换向器的作用），认识法拉第电磁感应现象、感应电流产生的条件，了解发电机的原理及两种装置的能量转化。',
    en: 'Understand the force on a current-carrying conductor and how a d.c. motor works (including the commutator), then Faraday’s electromagnetic induction, the conditions for an induced current, the a.c. generator, and the energy transfers in both devices.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch8'],
    igcse: ['0625/4.5.1', '0625/4.5.2', '0625/4.5.4', '0625/4.5.5'],
  },
  keywords: {
    zh: ['磁场对电流的作用', '电动机', '换向器', '电磁感应', '感应电流', '法拉第', '发电机', '能量转化'],
    en: ['force on a current-carrying conductor', 'd.c. motor', 'split-ring commutator', 'electromagnetic induction', 'induced current', 'Faraday', 'a.c. generator', 'energy transfer'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '知道通电导体在磁场中要受到力的作用，力的方向与电流方向、磁场方向有关。',
          '了解直流电动机的构造与工作原理，知道换向器的作用，说出电动机的能量转化。',
          '知道电磁感应现象：闭合电路的一部分导体在磁场中做切割磁感线运动时，导体中会产生感应电流。',
          '了解发电机的原理与能量转化，能对比电动机与发电机的区别。',
        ],
      },
      { type: 'heading', text: '磁场对通电导体的作用' },
      {
        type: 'paragraph',
        text: '实验表明：通电导体在磁场中要受到力的作用，力的方向跟电流方向和磁感线的方向都有关系。当电流方向或磁场方向中有一个反向时，受力方向也反向；两者同时反向，受力方向不变。电流越大、磁场越强，导体受到的力越大。',
      },
      { type: 'heading', text: '直流电动机' },
      {
        type: 'paragraph',
        text: '电动机的基本构造是定子（磁体）和转子（线圈）。通电线圈在磁场中两边受力方向相反，形成转动力偶，使线圈转动。当线圈转过平衡位置后，靠换向器（两个半铜环）在恰当时刻自动改变线圈中的电流方向，线圈才能持续朝一个方向转动；电刷把电源与转动的换向器接通。电动机工作时把电能转化为机械能。增大电流、增强磁场或增加线圈匝数，都能使线圈转动更有力、更快。',
      },
      { type: 'heading', text: '电磁感应' },
      {
        type: 'paragraph',
        text: '1831 年，英国物理学家法拉第发现了电磁感应现象：闭合电路的一部分导体在磁场中做切割磁感线的运动时，导体中就会产生电流。这种由于导体在磁场中运动而产生电流的现象叫电磁感应，产生的电流叫感应电流。感应电流的方向跟导体运动方向和磁场方向有关；感应电流的大小与磁场强弱、导体运动快慢、线圈匝数等有关。导体平行于磁感线运动（不切割磁感线）或电路不闭合时，都不会产生感应电流。',
      },
      { type: 'heading', text: '发电机' },
      {
        type: 'paragraph',
        text: '发电机是利用电磁感应现象制成的。线圈在磁场中转动时，两边不断切割磁感线，线圈中就产生感应电流。线圈每转过半圈，切割磁感线的方向改变一次，感应电流方向也改变一次，因此交流发电机输出的是方向周期性变化的交流电；通过滑环和电刷把电流引出。发电机工作时把机械能转化为电能。我国电网提供的交流电频率为 50 Hz，即每秒电流方向改变 100 次。',
      },
      { type: 'heading', text: '电动机与发电机的对比' },
      {
        type: 'list',
        items: [
          '原理：电动机——磁场对通电导体有力的作用；发电机——电磁感应。',
          '能量转化：电动机把电能转化为机械能；发电机把机械能转化为电能。',
          '电路角色：电动机是用电器（消耗电能）；发电机是电源（提供电能）。',
          '结构：直流电动机用换向器维持转向，交流发电机用滑环引出交流电。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'force on a current-carrying conductor（磁场对电流的作用）：磁场中的通电导体受到力的作用，方向取决于电流方向与磁场方向。',
          'split-ring commutator（换向器）：直流电动机中的两个半环，适时改变线圈中电流方向以保持持续转动。',
          'electromagnetic induction（电磁感应）：导体切割磁感线或穿过线圈的磁通量变化时产生感应电动势（电流）的现象。',
          'induced current（感应电流）：电磁感应中产生的电流。',
          'a.c. generator（交流发电机）：利用电磁感应把机械能转化为交流电能的装置。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Know that a current-carrying conductor in a magnetic field experiences a force whose direction depends on the current and field directions.',
          'Describe the construction and working of a d.c. motor, the role of the split-ring commutator, and the energy transfer involved.',
          'Know electromagnetic induction: a current is induced when part of a closed circuit moves so as to cut magnetic field lines.',
          'Describe the a.c. generator and its energy transfer, and contrast the motor with the generator.',
        ],
      },
      { type: 'heading', text: 'Force on a current-carrying conductor' },
      {
        type: 'paragraph',
        text: 'Experiment shows that a conductor carrying a current across a magnetic field experiences a force. The force direction depends on both the current direction and the field direction: reversing either one reverses the force; reversing both leaves the force unchanged. A larger current or a stronger field gives a larger force.',
      },
      { type: 'heading', text: 'The d.c. motor' },
      {
        type: 'paragraph',
        text: 'A motor consists of a stator (the magnet) and a rotor (the coil). The two sides of a current-carrying coil in a field are pushed in opposite directions, producing a couple that turns the coil. Just past the vertical (balance) position, the split-ring commutator — two half-rings of copper — swaps the connections and reverses the coil current, so the coil keeps turning the same way; carbon brushes press on the rings to feed the current in. A motor transfers electrical energy to mechanical (kinetic) energy. Increasing the current, strengthening the field or adding turns makes it turn faster and harder.',
      },
      { type: 'heading', text: 'Electromagnetic induction' },
      {
        type: 'paragraph',
        text: 'In 1831 Michael Faraday discovered electromagnetic induction: when part of a closed circuit moves through a magnetic field so as to cut the field lines, a current is induced in the conductor. The direction of the induced current depends on the direction of motion and the field direction; its size depends on the field strength, the speed of movement and the number of turns. Moving parallel to the field lines (no cutting), or leaving the circuit open, produces no current.',
      },
      { type: 'heading', text: 'The a.c. generator' },
      {
        type: 'paragraph',
        text: 'A generator applies electromagnetic induction. As a coil rotates in a magnetic field, its sides keep cutting field lines and a current is induced. Every half turn, the direction of cutting reverses, so the induced current reverses too — the output is alternating current, led out through slip rings and brushes. A generator transfers mechanical energy to electrical energy. The a.c. mains in China alternates at 50 Hz, so the current reverses 100 times each second.',
      },
      { type: 'heading', text: 'Motor versus generator' },
      {
        type: 'list',
        items: [
          'Principle: motor — the force on a current-carrying conductor; generator — electromagnetic induction.',
          'Energy transfer: motor turns electrical energy into mechanical energy; a generator does the reverse.',
          'Circuit role: a motor is a load (consumes electrical energy); a generator is a source (supplies it).',
          'Construction: a d.c. motor uses a split-ring commutator; an a.c. generator uses slip rings.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'force on a current-carrying conductor (磁场对电流的作用): A conductor carrying current in a field experiences a force set by the current and field directions.',
          'split-ring commutator (换向器): Two half-rings in a d.c. motor that reverse the coil current each half turn to keep it rotating.',
          'electromagnetic induction (电磁感应): The production of an e.m.f. (and current) when field lines are cut or the flux through a coil changes.',
          'induced current (感应电流): The current produced by electromagnetic induction.',
          'a.c. generator (交流发电机): A device using induction to transfer mechanical energy into alternating electrical energy.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '直流电动机中换向器的作用是（　）',
        en: 'In a d.c. motor, the function of the split-ring commutator is to',
      },
      options: {
        zh: [
          '把直流电变成交流电',
          '在线圈转过平衡位置时自动改变线圈中的电流方向，使线圈持续转动',
          '增大线圈中的电流',
          '把机械能转化为电能',
        ],
        en: [
          'convert direct current into alternating current',
          'automatically reverse the current in the coil just past the balance position, so the coil keeps rotating',
          'increase the current in the coil',
          'transfer mechanical energy into electrical energy',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '线圈靠惯性转过平衡位置后，若不改变电流方向，受力将阻碍继续转动；换向器在此时自动对调电流方向，使线圈始终朝一个方向转动，B 正确。换向器不改变电流的种类（A 错），也不能增大电流（C 错）；电动机是电能→机械能，D 说的是发电机。',
        en: 'Past the balance position, the forces would oppose further rotation unless the coil current were reversed; the commutator does this automatically each half turn, keeping the rotation going (B). It does not change d.c. into a.c. (A) nor raise the current (C); mechanical→electrical describes a generator, not a motor (D).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列情况中，导体中会产生感应电流的是（　）',
        en: 'In which situation is a current induced in the conductor?',
      },
      options: {
        zh: [
          '闭合电路的一部分导体在磁场中做切割磁感线运动',
          '闭合电路中的导体沿磁感线方向运动',
          '断开的电路中，导体在磁场中做切割磁感线运动',
          '闭合电路中的导体静止在磁场中',
        ],
        en: [
          'part of a closed circuit moves through a field so as to cut the field lines',
          'a conductor in a closed circuit moves along the field lines',
          'a conductor cuts field lines in an open (broken) circuit',
          'a conductor in a closed circuit is held still in the field',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '产生感应电流的条件有三：电路闭合、只有一部分导体参与、做切割磁感线运动。沿磁感线运动不切割磁感线（B 错）；电路断开时只可能有感应电动势而无电流（C 错）；静止时没有相对运动，不产生感应（D 错）。',
        en: 'Three conditions: the circuit must be closed, only part of it moves, and the motion must cut field lines. Moving along the lines cuts nothing (B); an open circuit can have an induced e.m.f. but no current (C); no relative motion, no induction (D).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '关于电动机和发电机，下列说法正确的是（　）',
        en: 'Which statement about motors and generators is correct?',
      },
      options: {
        zh: [
          '电动机利用电磁感应现象制成',
          '发电机工作时把电能转化为机械能',
          '电动机工作时把机械能转化为电能',
          '发电机利用电磁感应现象制成，工作时把机械能转化为电能',
        ],
        en: [
          'a motor works on electromagnetic induction',
          'a generator transfers electrical energy into mechanical energy',
          'a motor transfers mechanical energy into electrical energy',
          'a generator works on electromagnetic induction and transfers mechanical energy into electrical energy',
        ],
      },
      answerIndex: 3,
      explanation: {
        zh: '电动机的原理是磁场对通电导体有力的作用，把电能转化为机械能；发电机的原理是电磁感应，把机械能转化为电能。A 把两者原理弄混，B、C 把能量转化方向说反了。',
        en: 'A motor relies on the force on a current-carrying conductor and turns electrical energy into mechanical energy; a generator relies on induction and does the opposite. A confuses the principles; B and C reverse the energy transfers.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-induced-emf-factors',
      syllabus: ['0625/4.5.1.3'],
      tier: 'core',
      commandWord: 'State',
      marks: 2,
      stem: 'A wire is moved through a magnetic field so that an e.m.f. is induced across it. State two changes that would increase the size of the induced e.m.f.',
      markScheme: [
        {
          text: 'Move the wire faster (increase the speed of relative motion)',
          marks: 1,
        },
        {
          text: 'Use a stronger magnet / magnetic field (or more turns of wire cutting the field)',
          marks: 1,
          alternatives: ['Increase the strength of the magnetic field'],
        },
      ],
      examinerNote: {
        zh: '“增大磁铁体积”不等于“增强磁场”，表述要落到磁场更强、运动更快、匝数更多。改变方向只影响感应电动势的方向，不影响大小。',
        en: '“A bigger magnet” is not the same as “a stronger field” — the answer must land on stronger field, faster motion, or more turns. Changing directions affects only the polarity, not the size.',
      },
    },
    {
      id: 'ep-motor-turning-effect',
      syllabus: ['0625/4.5.5.1'],
      tier: 'core',
      commandWord: 'State',
      marks: 2,
      stem: 'A current-carrying coil in a magnetic field rotates in a simple d.c. motor. State two changes that would increase the turning effect on the coil.',
      markScheme: [
        {
          text: 'Increase the current in the coil',
          marks: 1,
        },
        {
          text: 'Increase the strength of the magnetic field / increase the number of turns on the coil',
          marks: 1,
          alternatives: ['Use a stronger magnet', 'Add more turns to the coil'],
        },
      ],
      examinerNote: {
        zh: '注意“换更强的电源”若表述为增大电压从而增大电流同样给分；但“换向器反接”只会改变转动方向，不增大转动效果，不给分。',
        en: '“Use a higher-voltage supply” earns credit only if linked to a larger current. Reversing the connections merely changes the direction of rotation — no mark.',
      },
    },
  ],
  related: ['phy-magnet-002', 'igcse-0625-4-5-motor', 'igcse-0625-4-5-induction'],
};
