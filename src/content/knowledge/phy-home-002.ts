import type { KnowledgePoint } from '../types';

export const phyHome002: KnowledgePoint = {
  id: 'phy-home-002',
  subject: 'physics',
  title: { zh: '安全用电', en: 'Electrical Safety' },
  summary: {
    zh: '知道触电的原因与类型，记住安全电压，理解接地保护的原理，掌握安全用电的基本原则与触电急救方法。',
    en: 'Learn why and how electric shocks happen, remember the safe voltage, understand earthing, and master the rules of electrical safety and first aid.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch7'],
    igcse: ['0625/4.4'],
  },
  keywords: {
    zh: ['触电', '安全电压', '接地保护', '三脚插头', '单线触电', '双线触电', '跨步电压'],
    en: ['electric shock', 'safe voltage', 'earthing', 'three-pin plug', 'electric hazards', 'first aid'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '知道触电是人体中有电流通过，说出常见的触电类型。',
          '记住对人体安全的电压不高于 36 V，并能解释潮湿环境更危险的原因。',
          '理解金属外壳接地（三脚插头）的保护原理，掌握安全用电原则与触电急救的正确做法。',
        ],
      },
      { type: 'heading', text: '触电：电流通过人体' },
      {
        type: 'paragraph',
        text: '人体是导体。当人体直接或间接接触带电体，有电流通过人体并达到一定大小时，就会发生触电事故。通过人体的电流越大、时间越长，伤害越严重。触电时电流的大小取决于加在人体两端的电压和人体的电阻——皮肤干燥时电阻较大，潮湿时电阻大大减小，所以同样电压下湿手触电危险得多。',
      },
      { type: 'heading', text: '常见的触电类型' },
      {
        type: 'list',
        items: [
          '单线触电（低压）：人站在地上接触火线，电流经人体流入大地，形成回路。',
          '双线触电（低压）：人体同时接触火线和零线，电流经人体在两根线之间形成回路。',
          '高压电弧触电：人体靠近高压带电体时，高压击穿空气放电，电弧通过人体。',
          '跨步电压触电：高压输电线断落在地时，以落地点为中心向四周电压逐渐降低，人在附近迈开双脚，两脚之间的电压使电流通过人体。应并拢双脚或单脚跳着离开。',
        ],
      },
      { type: 'heading', text: '安全电压' },
      {
        type: 'paragraph',
        text: '经验证明，只有不高于 36 V 的电压才是安全的。家庭电路的电压是 220 V，工厂里动力电路的电压是 380 V，高压输电线的电压高达几十万伏，都远远超出安全电压。在潮湿环境中，人体电阻减小，安全电压还要更低（如 24 V、12 V），所以浴室等潮湿场所的用电器要求特别严格。',
      },
      { type: 'heading', text: '接地保护' },
      {
        type: 'paragraph',
        text: '洗衣机、电冰箱等有金属外壳的用电器，一旦内部绝缘破损，外壳就可能与火线相连而带电，人接触外壳就会触电。三脚插头上有一脚连接用电器金属外壳，插入三孔插座后通过地线与大地相连：万一外壳带电，电流会经地线流入大地（并促使保险丝熔断或漏电保护器动作），而不会经过人体。地线的一脚做得稍长，插拔时保证外壳先接地、后断开。',
      },
      { type: 'heading', text: '安全用电原则与急救' },
      {
        type: 'list',
        items: [
          '不接触低压带电体，不靠近高压带电体。',
          '不弄湿用电器，不损坏导线的绝缘层；不用湿手扳开关、插拔插头。',
          '更换灯泡、搬动用电器前先断开开关；保险丝不能用铜丝、铁丝代替。',
          '发现有人触电，应立即切断电源（或用干燥的木棍等绝缘体挑开电线），绝不能直接用手去拉触电者；发生火灾时先断电再灭火。',
          '有金属外壳的用电器要使用三脚插头并可靠接地；雷雨天不在大树下避雨。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'electric shock（触电）：电流通过人体造成的伤害，危险程度取决于电流大小与通电时间。',
          'safe voltage（安全电压）：对人体安全的电压，不高于 36 V；潮湿环境中更低。',
          'earthing（接地）：把用电器的金属外壳经地线与大地相连，防止外壳带电造成触电。',
          'three-pin plug（三脚插头）：多出一个接地脚的插头，接地脚稍长，保证外壳先接地后通电。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Know that an electric shock is a current passing through the body, and describe the common types of shock accident.',
          'Remember that a voltage safe for the human body is no more than 36 V, and explain why damp conditions are more dangerous.',
          'Understand how earthing a metal case (via a three-pin plug) protects the user, and master the rules of electrical safety and correct first aid.',
        ],
      },
      { type: 'heading', text: 'Electric shock: current through the body' },
      {
        type: 'paragraph',
        text: 'The human body is a conductor. When it touches a live part, directly or indirectly, and a large enough current passes through it, an electric shock results. The larger the current and the longer it flows, the worse the injury. That current depends on the voltage across the body and the body’s resistance — dry skin has a fairly high resistance, but damp skin conducts far better, so the same voltage is far more dangerous with wet hands.',
      },
      { type: 'heading', text: 'Common types of shock accident' },
      {
        type: 'list',
        items: [
          'Live-to-earth shock (low voltage): a person standing on the ground touches the live wire, and the current flows through the body to earth.',
          'Live-to-neutral shock (low voltage): the body touches both the live and the neutral wires at once, and the current passes straight through it.',
          'High-voltage arc shock: coming too close to a high-voltage conductor lets the voltage break down the air and strike an arc through the body.',
          'Step-voltage shock: near a fallen high-voltage cable the ground potential falls away from the point of contact, so the voltage between a person’s two feet drives a current through the body — hop or shuffle away with feet together.',
        ],
      },
      { type: 'heading', text: 'Safe voltage' },
      {
        type: 'paragraph',
        text: 'Experience shows that only a voltage not exceeding 36 V is safe for the human body. Mains voltage is 220 V in the home and 380 V for industrial power, while transmission lines carry hundreds of thousands of volts — all far above the safe value. In damp conditions the body’s resistance drops, so the safe voltage is lower still (24 V or 12 V), which is why appliances in bathrooms must meet especially strict requirements.',
      },
      { type: 'heading', text: 'Earthing' },
      {
        type: 'paragraph',
        text: 'Appliances with metal cases, such as washing machines and refrigerators, become dangerous if internal insulation fails and the case touches a live part — anyone touching the case would get a shock. One pin of a three-pin plug is connected to the metal case and, through the socket, to an earth wire leading into the ground: if the case becomes live, the current flows away through the earth wire (and blows the fuse or trips the RCD) instead of passing through a person. The earth pin is made slightly longer, so the case is earthed before the supply connects and disconnected after it breaks.',
      },
      { type: 'heading', text: 'Safety rules and first aid' },
      {
        type: 'list',
        items: [
          'Do not touch low-voltage live parts; do not go near high-voltage conductors.',
          'Keep appliances dry and insulation undamaged; never operate switches or plugs with wet hands.',
          'Switch off before changing a lamp or moving an appliance; never replace a fuse with copper or iron wire.',
          'If someone is receiving a shock, cut the supply at once (or push the wire away with a dry wooden stick); never pull the victim away with bare hands. In an electrical fire, disconnect the power before fighting it.',
          'Appliances with metal cases must use a three-pin plug with a reliable earth; do not shelter under tall trees in a thunderstorm.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'electric shock (触电): Injury caused by a current passing through the body; the danger depends on the size and duration of the current.',
          'safe voltage (安全电压): A voltage safe for the human body — no more than 36 V, and lower in damp conditions.',
          'earthing (接地): Connecting the metal case of an appliance to the ground so that a fault current flows to earth rather than through a person.',
          'three-pin plug (三脚插头): A plug with an extra, slightly longer earth pin, so the case is earthed before the live connection is made.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '经验证明，对人体安全的电压是（　）',
        en: 'Experience shows that the voltage safe for the human body is',
      },
      options: {
        zh: ['不高于 36 V', '不高于 220 V', '等于 36 V 才安全，低于或高于都危险', '越高越安全'],
        en: ['no more than 36 V', 'no more than 220 V', 'exactly 36 V — lower or higher is dangerous', 'the higher the safer'],
      },
      answerIndex: 0,
      explanation: {
        zh: '安全电压的表述是“不高于 36 V”，即 36 V 及以下。220 V 是家庭电路电压，远超安全值；“越高越安全”显然错误；36 V 以下同样安全，C 的说法把范围说反了。潮湿环境中安全电压还要更低。',
        en: 'The safe voltage is stated as “no more than 36 V” — 36 V and below. 220 V is the mains voltage, far above the safe value; “the higher the safer” is plainly wrong; voltages below 36 V are equally safe, so C inverts the range. In damp conditions the safe value is even lower.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '有金属外壳的用电器使用三脚插头，把外壳与大地相连，其目的是（　）',
        en: 'Appliances with metal cases use a three-pin plug to connect the case to earth. The purpose is',
      },
      options: {
        zh: [
          '让插头插入插座更牢固',
          '节约用电',
          '防止外壳带电时人接触外壳发生触电',
          '防止用电器被烧坏',
        ],
        en: [
          'to make the plug fit the socket more firmly',
          'to save electricity',
          'to prevent a shock if a fault makes the case live',
          'to protect the appliance itself from burning out',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '接地是为了保护人：外壳一旦因绝缘破损而带电，电流经地线流入大地，人接触外壳就不会触电。插头更牢固是附带效果而非目的；接地与节电无关；保护电器本身不受大电流损害主要靠保险丝，故 A、B、D 都不是接地的主要目的。',
        en: 'Earthing protects people: if damaged insulation makes the case live, the fault current flows to earth through the earth wire, so touching the case does not give a shock. A firmer fit is incidental, earthing saves no energy, and protecting the appliance itself is the fuse’s job — so A, B and D all miss the point.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '发现有人触电时，下列做法正确的是（　）',
        en: 'If you find someone receiving an electric shock, the correct action is to',
      },
      options: {
        zh: [
          '立即用手把触电者拉开',
          '立即切断电源，或用干燥的木棍挑开电线',
          '先拨打急救电话，再考虑断电',
          '向触电者身上泼水使其清醒',
        ],
        en: [
          'pull the victim away at once with your bare hands',
          'cut off the supply at once, or push the wire away with a dry wooden stick',
          'phone for an ambulance first, then think about the power',
          'splash water on the victim to revive them',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '人体是导体，直接用手拉触电者会使自己也触电；泼水同样导电，极其危险。正确做法是第一时间切断电源，或用干燥木棍等绝缘体挑开电线，使触电者脱离电源后再施救。只打电话而不断电，触电会持续造成伤害。',
        en: 'The body conducts: grabbing the victim with bare hands gives you the same shock, and water conducts too. The correct response is to cut the supply immediately — or push the wire away with a dry insulator such as a wooden stick — and only then give first aid. Phoning without cutting the power leaves the current flowing.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-earthing-double-insulation',
      syllabus: ['0625/4.4.4', '0625/4.4.5'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 4,
      stem: 'A metal-cased appliance is earthed, while a plastic-cased one is double insulated and has no earth wire. Explain how each is made safe, and state what the fuse in the double-insulated appliance protects.',
      markScheme: [
        {
          text: 'If a live wire touches an earthed metal case, a very large current flows through the earth wire to the ground',
          marks: 1,
        },
        {
          text: 'That large current blows the fuse and disconnects the supply before anyone can touch the case',
          marks: 1,
        },
        {
          text: 'A double-insulated appliance has a non-conducting casing with no exposed metal, so no part a user can touch can ever become live — which is why it needs no earth',
          marks: 1,
        },
        {
          text: 'Its fuse protects the cable, stopping the flex overheating and catching fire if too large a current is drawn',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '最后一分最容易被漏掉。既没有地线、也没有会带电的金属，保险丝就不是在保护使用者免受外壳危害——它保护的是线路。',
        en: 'The last mark is the one that catches people out. With no earth and no metal to become live, the fuse is not protecting the user from the casing — it is protecting the wiring.',
      },
    },
    {
      id: 'ep-home-hazards',
      syllabus: ['0625/4.4.1'],
      tier: 'core',
      commandWord: 'State',
      marks: 3,
      stem: 'State three electrical hazards in the home and, for each, state why it is dangerous.',
      markScheme: [
        {
          text: 'Damaged insulation exposes a live conductor that could be touched',
          marks: 1,
        },
        {
          text: 'Overloaded sockets or cables that are too thin overheat and can start a fire',
          marks: 1,
        },
        {
          text: 'Damp conditions allow current to pass through water to earth, and through a person',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '每种危险都要写出其后果。“水很危险”不算答案；“水能导电，因此电流可以经人体流入大地”才是。',
        en: 'Each hazard needs its consequence. “Water is dangerous” is not an answer; “water conducts, so current can flow through a person to earth” is.',
      },
    },
  ],
  related: ['phy-home-001', 'phy-electric-001', 'igcse-0625-4-4-safety'],
};
