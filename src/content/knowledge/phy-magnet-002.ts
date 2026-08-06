import type { KnowledgePoint } from '../types';

export const phyMagnet002: KnowledgePoint = {
  id: 'phy-magnet-002',
  subject: 'physics',
  title: { zh: '电流的磁效应与电磁铁', en: 'Magnetic Effect of a Current and Electromagnets' },
  summary: {
    zh: '通过奥斯特实验认识电流的磁效应，探究通电螺线管的磁场并用安培定则判断磁极，了解电磁铁的构造、影响因素及其在电磁继电器中的应用。',
    en: 'From Oersted’s experiment to the magnetic field of a solenoid, use the right-hand grip rule to find poles, and learn how electromagnets work and where they are used, such as in relays.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch8'],
    igcse: ['0625/4.5.3'],
  },
  keywords: {
    zh: ['电流的磁效应', '奥斯特实验', '通电螺线管', '安培定则', '电磁铁', '电磁继电器', '电铃', '电磁起重机'],
    en: ['magnetic effect of a current', 'Oersted’s experiment', 'solenoid', 'right-hand grip rule', 'electromagnet', 'relay', 'electric bell', 'electromagnetic crane'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '描述奥斯特实验，知道电流周围存在磁场（电流的磁效应），磁场方向与电流方向有关。',
          '知道通电螺线管外部的磁场与条形磁体的磁场相似，会用安培定则判断螺线管的磁极。',
          '了解电磁铁的构造，知道其磁性强弱与电流大小、线圈匝数的关系。',
          '举例说明电磁铁在电磁继电器、电铃、电磁起重机等装置中的应用。',
        ],
      },
      { type: 'heading', text: '奥斯特实验：电流的磁效应' },
      {
        type: 'paragraph',
        text: '1820 年，丹麦物理学家奥斯特发现：静止在导线下方的小磁针，在导线通电时发生偏转，断电后恢复原状；改变电流方向，小磁针偏转方向也相反。这说明通电导线周围存在磁场，且磁场方向跟电流的方向有关。这种现象叫电流的磁效应，它是人类第一次揭示电与磁之间的联系。',
      },
      { type: 'heading', text: '通电螺线管的磁场' },
      {
        type: 'paragraph',
        text: '把导线绕在圆筒上做成螺线管，通电后各圈导线产生的磁场叠加，其外部的磁场与条形磁体的磁场相似，两端相当于条形磁体的两个磁极。改变电流方向，螺线管两端的极性对调。在螺线管中插入铁芯，磁场会大大增强，这就是电磁铁的基本结构。',
      },
      { type: 'heading', text: '安培定则（右手螺旋定则）' },
      {
        type: 'paragraph',
        text: '判断通电螺线管极性的方法：用右手握住螺线管，让四指指向螺线管中电流的方向，则大拇指所指的那端就是螺线管的 N 极。反过来，已知螺线管的极性，也可以用安培定则推断电流方向或电源的正负极。',
      },
      { type: 'heading', text: '电磁铁' },
      {
        type: 'paragraph',
        text: '内部插有铁芯的通电螺线管叫电磁铁。电磁铁与永磁体相比有突出的优点：磁性的有无可以通过通断电来控制；磁极的极性可以通过改变电流方向来改变；磁性的强弱可以通过改变电流大小或线圈匝数来调节。实验表明：匝数一定时，电流越大，电磁铁的磁性越强；电流一定时，外形相同的螺线管，匝数越多，磁性越强。',
      },
      { type: 'heading', text: '电磁铁的应用' },
      {
        type: 'list',
        items: [
          '电磁继电器：用低电压、弱电流电路控制电磁铁，吸合衔铁来接通或断开高电压、强电流的工作电路，实现远距离操作和安全控制。',
          '电铃：电磁铁交替吸合、释放衔铁，带动小锤反复敲击铃碗发声。',
          '电磁起重机：通电产生强磁场吸起钢铁废料，断电后放下，便于搬运。',
          '磁浮列车、扬声器、电话听筒等也都利用电流的磁效应工作。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'magnetic effect of a current（电流的磁效应）：通电导体周围存在磁场的现象，由奥斯特首先发现。',
          'solenoid（螺线管）：绕成螺旋形的线圈，通电后外部磁场与条形磁体相似。',
          'right-hand grip rule（安培定则）：右手握住螺线管，四指指向电流方向，拇指所指的一端为 N 极。',
          'electromagnet（电磁铁）：插有软铁芯的通电线圈，磁性可用电流的有无、大小和方向控制。',
          'relay（继电器）：利用电磁铁以小电流控制大电流电路的开关装置。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Describe Oersted’s experiment and know that a current produces a magnetic field whose direction depends on the current direction.',
          'Know that the field outside a current-carrying solenoid resembles that of a bar magnet, and use the right-hand grip rule to find its poles.',
          'Know the construction of an electromagnet and how its strength depends on current and the number of turns.',
          'Give applications of electromagnets: relays, electric bells, electromagnetic cranes and more.',
        ],
      },
      { type: 'heading', text: 'Oersted’s experiment: the magnetic effect of a current' },
      {
        type: 'paragraph',
        text: 'In 1820 the Danish physicist Hans Christian Oersted noticed that a compass needle placed near a wire deflected when the current was switched on, returned when it was switched off, and deflected the opposite way when the current was reversed. A current-carrying conductor is therefore surrounded by a magnetic field whose direction depends on the current direction — the magnetic effect of a current. It was the first evidence that electricity and magnetism are connected.',
      },
      { type: 'heading', text: 'The field of a solenoid' },
      {
        type: 'paragraph',
        text: 'Winding the wire into a coil (a solenoid) makes the fields of the turns add up: outside, the pattern is just like that of a bar magnet, with the two ends acting as poles. Reversing the current swaps the polarity. Sliding a soft-iron core inside greatly strengthens the field — this combination is an electromagnet.',
      },
      { type: 'heading', text: 'The right-hand grip rule' },
      {
        type: 'paragraph',
        text: 'To find the polarity of a solenoid, grip it with the right hand so that the curled fingers point in the direction of the current around the coils; the thumb then points to the N pole. The rule also works backwards: from a known polarity you can deduce the current direction and hence which terminal of the supply is positive.',
      },
      { type: 'heading', text: 'Electromagnets' },
      {
        type: 'paragraph',
        text: 'An electromagnet is a coil with a soft-iron core. Compared with a permanent magnet it has decisive advantages: the magnetism can be switched on and off with the current, the polarity can be swapped by reversing the current, and the strength can be adjusted. Experiments show that for a fixed number of turns a larger current gives a stronger magnet, and for the same current more turns give a stronger magnet.',
      },
      { type: 'heading', text: 'Applications of electromagnets' },
      {
        type: 'list',
        items: [
          'Relay: a small, safe current energises an electromagnet that pulls an armature, switching a separate high-voltage, high-current circuit — allowing remote and safe control.',
          'Electric bell: the electromagnet repeatedly attracts and releases the armature so a hammer strikes the gong over and over.',
          'Electromagnetic crane: a strong field lifts scrap iron and steel; switching off releases the load.',
          'Maglev trains, loudspeakers and telephone earpieces also rely on the magnetic effect of a current.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'magnetic effect of a current (电流的磁效应): A current-carrying conductor is surrounded by a magnetic field — first observed by Oersted.',
          'solenoid (螺线管): A coil of wire whose external field, when carrying a current, resembles that of a bar magnet.',
          'right-hand grip rule (安培定则): Grip the coil with fingers following the current; the thumb points to the N pole.',
          'electromagnet (电磁铁): A coil with a soft-iron core; its magnetism is controlled by the current.',
          'relay (继电器): A switch operated by an electromagnet, letting a small current control a much larger one.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '奥斯特实验表明（　）',
        en: 'Oersted’s experiment showed that',
      },
      options: {
        zh: [
          '通电导线周围存在磁场，且磁场方向与电流方向有关',
          '小磁针具有磁性，能吸引导线',
          '导线通电后温度升高',
          '磁场能产生电流',
        ],
        en: [
          'a current-carrying wire is surrounded by a magnetic field whose direction depends on the current direction',
          'a compass needle is magnetic and attracts the wire',
          'the wire heats up when carrying a current',
          'a magnetic field can produce a current',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '奥斯特实验中，小磁针通电时偏转、断电复原、电流反向后偏转方向也相反，说明电流周围存在磁场且方向与电流方向有关，A 正确。小磁针偏转是受磁场力而非“吸引导线”，B 错；发热与实验现象无关，C 错；“磁场产生电流”是电磁感应，不是本实验的结论，D 错。',
        en: 'The needle deflected with the current on, returned with it off, and deflected the other way when the current reversed — a field exists around the wire and its direction follows the current (A). The needle is pushed by the field, not “attracting the wire” (B); heating is irrelevant to the observation (C); a field producing a current is electromagnetic induction, a different phenomenon (D).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '用安培定则判断通电螺线管的磁极时，正确的是（　）',
        en: 'When using the right-hand grip rule to find the poles of a solenoid, the correct procedure is',
      },
      options: {
        zh: [
          '用右手握住螺线管，让四指指向电流方向，大拇指所指的一端是 N 极',
          '用左手握住螺线管，让四指指向电流方向，大拇指所指的一端是 N 极',
          '用右手握住螺线管，让大拇指指向电流方向，四指所指的一端是 N 极',
          '用右手握住螺线管，让四指指向电流方向，大拇指所指的一端是 S 极',
        ],
        en: [
          'grip the solenoid with the right hand, fingers pointing in the current direction; the thumb points to the N pole',
          'grip the solenoid with the left hand, fingers pointing in the current direction; the thumb points to the N pole',
          'grip the solenoid with the right hand, thumb pointing in the current direction; the fingers point to the N pole',
          'grip the solenoid with the right hand, fingers pointing in the current direction; the thumb points to the S pole',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '安培定则规定用右手：四指弯曲指向螺线管中电流的方向，大拇指所指的那端就是 N 极。用左手是常见错误（B）；拇指与四指的含义不能颠倒（C）；拇指指的是 N 极而不是 S 极（D）。',
        en: 'The rule uses the right hand: curled fingers follow the current around the coil, and the thumb gives the N pole. Using the left hand is the classic mistake (B); the roles of thumb and fingers must not be swapped (C); the thumb marks the N pole, not the S pole (D).',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '为了增强电磁铁的磁性，下列措施可行的是（　）',
        en: 'Which measure can strengthen an electromagnet?',
      },
      options: {
        zh: [
          '增大线圈中的电流',
          '减少线圈的匝数',
          '把铁芯换成铜芯',
          '改变电流的方向',
        ],
        en: [
          'increasing the current through the coil',
          'reducing the number of turns of the coil',
          'replacing the iron core with a copper core',
          'reversing the direction of the current',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '电磁铁磁性强弱与电流大小、线圈匝数有关：电流越大、匝数越多，磁性越强，A 正确、B 错误。铜不是磁性材料，不能被磁化，换铜芯会大大减弱磁性，C 错；改变电流方向只改变磁极极性，不改变磁性强弱，D 错。',
        en: 'The strength depends on the current and the number of turns: more current or more turns means a stronger magnet, so A is right and B wrong. Copper is not a magnetic material and cannot be magnetised — the field would collapse (C). Reversing the current swaps the poles but leaves the strength unchanged (D).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-solenoid-field',
      syllabus: ['0625/4.5.3.1'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 2,
      stem: 'Describe the pattern and direction of the magnetic field in and around a long current-carrying solenoid.',
      markScheme: [
        {
          text: 'Outside the solenoid the pattern is like that of a bar magnet, with lines running from the N pole to the S pole',
          marks: 1,
          alternatives: ['Field outside resembles a bar magnet’s field'],
        },
        {
          text: 'Inside the solenoid the field is strong and (nearly) uniform, with lines from S to N; direction found with the right-hand grip rule',
          marks: 1,
          alternatives: ['Direction given by right-hand grip rule: fingers with current, thumb to N pole'],
        },
      ],
      examinerNote: {
        zh: '常见失分：只写外部“像条形磁体”而忽略管内磁场强且均匀；或方向说反。先答分布形状，再答方向判定方法，两点各一分。',
        en: 'Common losses: mentioning only the bar-magnet-like outside field and omitting the strong, uniform field inside; or reversing the direction. Give the pattern first, then how the direction is found — one mark each.',
      },
    },
    {
      id: 'ep-relay',
      syllabus: ['0625/4.5.3.3'],
      tier: 'core',
      commandWord: 'Describe',
      marks: 2,
      stem: 'A relay is used so that a small current in one circuit can switch on a large current in another circuit. Describe how the electromagnet in the relay achieves this.',
      markScheme: [
        {
          text: 'The small current energises the electromagnet',
          marks: 1,
        },
        {
          text: 'The electromagnet attracts the (soft iron) armature, which closes the contacts of the second circuit',
          marks: 1,
          alternatives: ['Armature moves and completes the high-current circuit'],
        },
      ],
      examinerNote: {
        zh: '因果链要完整：小电流→电磁铁有磁性→吸动衔铁→接通工作电路。只写“电磁铁吸合开关”不提衔铁，或漏掉第二个电路被接通，都会丢分。',
        en: 'Keep the causal chain complete: small current → electromagnet magnetised → armature pulled → second circuit completed. Omitting the armature or the closing of the second circuit costs a mark.',
      },
    },
  ],
  related: ['phy-magnet-001', 'phy-magnet-003', 'igcse-0625-4-5-motor'],
};
