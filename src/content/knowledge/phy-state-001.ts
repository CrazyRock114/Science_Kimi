import type { KnowledgePoint } from '../types';

export const phyState001: KnowledgePoint = {
  id: 'phy-state-001',
  subject: 'physics',
  title: { zh: '物态变化', en: 'Changes of State' },
  summary: {
    zh: '认识熔化与凝固、汽化与液化、升华与凝华六种物态变化及吸放热规律，区分晶体与非晶体的熔化特点，并能用物态变化解释生活中的热现象。',
    en: 'Learn the six changes of state — melting and solidification, vaporisation and condensation, sublimation and deposition — with their energy transfers, distinguish crystalline from non-crystalline melting behaviour, and explain everyday thermal phenomena.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8a/ch3'],
    igcse: ['0625/2.1.1', '0625/2.2.3', '0620/1.1'],
  },
  keywords: {
    zh: ['熔化', '凝固', '汽化', '液化', '升华', '凝华', '熔点', '沸点', '晶体', '非晶体', '吸热', '放热'],
    en: ['melting', 'solidification', 'vaporisation', 'condensation', 'sublimation', 'deposition', 'melting point', 'boiling point', 'crystalline', 'non-crystalline', 'energy absorbed', 'energy released'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '知道物质有固、液、气三种状态，能说出六种物态变化的名称和吸放热情况。',
          '区分晶体与非晶体：晶体有固定的熔点，熔化时吸热但温度不变；非晶体没有固定熔点。',
          '知道汽化的两种方式（蒸发和沸腾）及液化的两种方法（降低温度、压缩体积）。',
          '能用物态变化及吸放热规律解释生活中的现象，如"白气"、霜、蒸发致冷。',
        ],
      },
      { type: 'heading', text: '六种物态变化总览' },
      {
        type: 'list',
        items: [
          '熔化：物质从固态变成液态，吸热。凝固：从液态变成固态，放热。',
          '汽化：物质从液态变成气态，吸热。液化：从气态变成液态，放热。',
          '升华：物质从固态直接变成气态，吸热。凝华：从气态直接变成固态，放热。',
          '记忆线索：凡向"更疏松"的状态变化（固→液→气）都吸热，反向变化都放热。',
        ],
      },
      { type: 'heading', text: '熔化与凝固：晶体和非晶体' },
      {
        type: 'paragraph',
        text: '固体分为晶体和非晶体。冰、海波、食盐、各种金属都是晶体，它们有固定的熔化温度——熔点；晶体在熔化过程中虽然不断吸热，温度却保持在熔点不变，凝固时放热，温度保持在凝固点不变（同种晶体的熔点和凝固点相同，标准大气压下冰的熔点为 0 ℃）。蜡、松香、玻璃、沥青是非晶体，没有固定的熔点，受热时先变软、再变稀，温度持续上升。',
      },
      { type: 'heading', text: '汽化与液化' },
      {
        type: 'list',
        items: [
          '汽化有两种方式：蒸发和沸腾。蒸发是在任何温度下、只在液体表面发生的缓慢汽化；沸腾是在一定温度（沸点）下、在液体内部和表面同时发生的剧烈汽化，沸腾时吸热但温度不变（标准大气压下水的沸点为 100 ℃）。',
          '影响蒸发快慢的因素：液体的温度、表面积、液面上方空气的流动速度。蒸发吸热，有制冷作用（中暑时擦酒精降温）。',
          '液化的两种方法：降低温度和压缩体积。液化石油气就是在常温下压缩体积液化的。',
          '生活中的"白气"（冰棍周围、烧水壶嘴上方）不是水蒸气，而是水蒸气遇冷液化形成的小水滴。',
        ],
      },
      { type: 'heading', text: '升华与凝华' },
      {
        type: 'paragraph',
        text: '升华是物质从固态直接变为气态：衣柜里的樟脑丸变小、严冬冰冻的衣服也能晾干、干冰（固态二氧化碳）升华吸热可用于人工降雨和舞台"云雾"。凝华是其逆过程：深秋和初冬早晨的霜、北方冬天的雾凇，都是水蒸气遇冷直接凝华成的小冰晶；用久的白炽灯泡内壁发黑，是钨丝先升华、钨蒸气又在灯泡壁上凝华的结果。',
      },
      { type: 'heading', text: '吸放热规律的应用' },
      {
        type: 'list',
        items: [
          '熔化吸热：用 0 ℃ 的冰冷却食品比 0 ℃ 的水效果好，因为冰熔化还要吸收大量的热。',
          '凝固放热：北方冬天在菜窖里放几桶水，利用水凝固放热防止蔬菜冻坏。',
          '蒸发吸热：人游泳后上岸觉得冷，因为身上的水蒸发吸热；狗热天伸舌头也是靠蒸发散热。',
          '液化放热：被 100 ℃ 的水蒸气烫伤往往比 100 ℃ 的开水更严重，因为水蒸气液化时还要放出大量的热。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'melting / solidification（熔化 / 凝固）：固态 ⇌ 液态的变化，熔化吸热、凝固放热。',
          'vaporisation / condensation（汽化 / 液化）：液态 ⇌ 气态的变化，汽化吸热、液化放热。',
          'sublimation / deposition（升华 / 凝华）：固态与气态之间的直接相互变化，升华吸热、凝华放热。',
          'melting point（熔点）：晶体熔化时的温度；同种晶体的凝固点与熔点相同。',
          'crystalline / non-crystalline（晶体 / 非晶体）：有无固定熔点的两类固体，如冰与蜡。',
          'evaporation / boiling（蒸发 / 沸腾）：汽化的两种方式，前者任何温度下仅在表面发生，后者在沸点下内外同时发生。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Know the three states of matter and name the six changes of state with the direction of energy transfer.',
          'Distinguish crystalline from non-crystalline solids: a crystal melts at a definite melting point, absorbing energy while its temperature stays constant; a non-crystalline solid has no fixed melting point.',
          'Know the two ways of vaporisation (evaporation and boiling) and the two ways of liquefying a gas (cooling and compression).',
          'Explain everyday phenomena — "white mist", frost, evaporative cooling — using changes of state and their energy transfers.',
        ],
      },
      { type: 'heading', text: 'The six changes of state' },
      {
        type: 'list',
        items: [
          'Melting: solid to liquid, absorbing energy. Solidification (freezing): liquid to solid, releasing energy.',
          'Vaporisation: liquid to gas, absorbing energy. Condensation: gas to liquid, releasing energy.',
          'Sublimation: solid directly to gas, absorbing energy. Deposition: gas directly to solid, releasing energy.',
          'Memory aid: changes towards a "looser" state (solid → liquid → gas) always absorb energy; the reverse changes always release it.',
        ],
      },
      { type: 'heading', text: 'Melting and solidification: crystalline and non-crystalline' },
      {
        type: 'paragraph',
        text: 'Solids are either crystalline or non-crystalline. Ice, hypo (sodium thiosulfate), table salt and all metals are crystalline: they melt at a definite melting point, and while melting they keep absorbing energy without any temperature rise; on freezing they release energy at the same temperature (the melting point of ice at standard pressure is 0 °C). Wax, rosin, glass and asphalt are non-crystalline: with no fixed melting point, they soften and thin gradually while the temperature keeps rising.',
      },
      { type: 'heading', text: 'Vaporisation and condensation' },
      {
        type: 'list',
        items: [
          'Vaporisation takes two forms: evaporation and boiling. Evaporation happens slowly at any temperature, only at the liquid surface; boiling happens violently at a definite temperature (the boiling point) throughout the liquid, which absorbs energy without a temperature change (water boils at 100 °C at standard pressure).',
          'Evaporation is faster at higher temperature, larger surface area and greater air movement over the surface. It absorbs energy and so cools (rubbing alcohol on the skin of a feverish patient).',
          'A gas can be liquefied by cooling or by compression. Liquefied petroleum gas is compressed into liquid at room temperature.',
          'The "white mist" around an ice lolly or above a kettle spout is not steam — it is tiny droplets formed when water vapour condenses in the cooler air.',
        ],
      },
      { type: 'heading', text: 'Sublimation and deposition' },
      {
        type: 'paragraph',
        text: 'Sublimation is the direct change from solid to gas: mothballs shrinking in a wardrobe, frozen laundry drying in midwinter, and dry ice (solid carbon dioxide) absorbing energy as it sublimes, used for cloud seeding and stage fog. Deposition is the reverse: frost on an autumn morning and rime on winter trees are ice crystals deposited directly from water vapour; the darkening inside an old filament bulb comes from tungsten first subliming off the filament and then depositing on the glass.',
      },
      { type: 'heading', text: 'Using the energy transfers' },
      {
        type: 'list',
        items: [
          'Melting absorbs energy: ice at 0 °C cools food better than water at 0 °C, because melting the ice takes in a great deal of extra energy.',
          'Freezing releases energy: barrels of water in a northern vegetable cellar release energy as they freeze, protecting the vegetables from frost damage.',
          'Evaporation absorbs energy: you feel cold climbing out of a pool as the water on your skin evaporates; a dog pants in hot weather for the same reason.',
          'Condensation releases energy: a scald from steam at 100 °C is worse than one from boiling water, because the steam releases extra energy as it condenses.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'melting / solidification (熔化 / 凝固): Changes between solid and liquid; melting absorbs energy, freezing releases it.',
          'vaporisation / condensation (汽化 / 液化): Changes between liquid and gas; vaporisation absorbs energy, condensation releases it.',
          'sublimation / deposition (升华 / 凝华): Direct changes between solid and gas; sublimation absorbs energy, deposition releases it.',
          'melting point (熔点): The temperature at which a crystalline solid melts; its freezing point is the same temperature.',
          'crystalline / non-crystalline (晶体 / 非晶体): The two classes of solid, with and without a fixed melting point — e.g. ice and wax.',
          'evaporation / boiling (蒸发 / 沸腾): The two forms of vaporisation — slow at the surface at any temperature, or throughout the liquid at the boiling point.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '在探究海波（晶体）熔化规律的实验中，对正在熔化的海波持续加热，此过程中海波（　）',
        en: 'In an experiment on the melting of sodium thiosulfate ("hypo", a crystal), heat is supplied continuously while it is melting. During this process the hypo',
      },
      options: {
        zh: [
          '吸热，温度不断升高',
          '吸热，温度保持不变',
          '不吸热，温度保持不变',
          '放热，温度不断降低',
        ],
        en: [
          'absorbs energy and its temperature keeps rising',
          'absorbs energy while its temperature stays constant',
          'absorbs no energy and its temperature stays constant',
          'releases energy and its temperature keeps falling',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '海波是晶体，有固定熔点：熔化过程中吸收的热量用来破坏晶体的规则结构而不是升高温度，所以吸热而温度不变。"吸热升温"是熔化前（固态）或熔化完（液态）的阶段；不吸热温度不可能自发保持熔化，放热降温更与加热事实矛盾。',
        en: 'Hypo is crystalline with a definite melting point: during melting the absorbed energy breaks up the ordered structure instead of raising the temperature, so it absorbs energy at constant temperature. "Absorbing energy and warming up" describes the solid before melting or the liquid after; absorbing nothing or releasing energy contradicts the fact that it is being heated.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '夏天，从冰箱里取出的冰棍周围会冒"白气"。这些"白气"是（　）',
        en: 'In summer, "white mist" appears around an ice lolly just taken out of the freezer. The mist is',
      },
      options: {
        zh: [
          '冰棍升华变成的水蒸气',
          '冰棍汽化冒出的小气泡',
          '空气中的水蒸气遇冷液化形成的小水滴',
          '冰棍表面的冰熔化流下的水',
        ],
        en: [
          'water vapour sublimed from the ice lolly',
          'small bubbles vaporised from the ice lolly',
          'tiny droplets condensed from water vapour in the air on meeting the cold',
          'water melted off the surface of the ice lolly',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '水蒸气本身是无色透明、看不见的，"白气"是空气中的水蒸气遇到冷的冰棍放热液化形成的小水滴悬浮在空气中。A 错在把水蒸气当成可见的白气；冰棍周围没有沸腾，谈不上汽化冒泡，B 错；熔化流下的水会往下淌而不是飘在周围，D 错。',
        en: 'Water vapour itself is colourless and invisible. The mist is tiny droplets formed when water vapour in the air meets the cold lolly, releases energy and condenses. A is wrong because vapour cannot be the visible mist; there is no boiling around the lolly, so B is wrong; meltwater would drip down rather than hang in the air, so D is wrong.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '衣柜里防虫用的樟脑丸，过一段时间后变小甚至消失了。这一过程中樟脑发生的物态变化是（　）',
        en: 'A mothball in a wardrobe shrinks and eventually disappears after some time. The change of state involved is',
      },
      options: {
        zh: ['熔化', '汽化', '升华', '凝华'],
        en: ['melting', 'vaporisation', 'sublimation', 'deposition'],
      },
      answerIndex: 2,
      explanation: {
        zh: '樟脑丸由固态直接变成气态散发到空气中，没有经历液态，属于升华（吸热）。熔化会先变成液体流淌，A 不符合；汽化是从液态变气态，樟脑并未先液化，B 错；凝华是气态变固态，方向相反，D 错。',
        en: 'The mothball goes directly from solid to gas, dispersing into the air without passing through the liquid state — that is sublimation (absorbing energy). Melting would leave liquid behind (A); vaporisation starts from liquid, which never forms here (B); deposition is gas to solid, the opposite direction (D).',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-name-the-change',
      syllabus: ['0625/2.1.1.2'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'What is the name of the change of state when a gas turns into a liquid?',
      options: ['Evaporation', 'Condensation', 'Sublimation', 'Solidification'],
      answerIndex: 1,
      markScheme: [
        {
          text: 'Condensation',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '六个名称要成对记准方向：气 → 液是 condensation（液化），液 → 气是 vaporisation/evaporation；固 ⇌ 气是 sublimation/deposition；液 → 固是 solidification。方向记反是这类题唯一的失分原因。',
        en: 'Learn the six names in pairs with their directions: gas → liquid is condensation, liquid → gas is vaporisation; solid ⇌ gas is sublimation/deposition; liquid → solid is solidification. Reversing a direction is the only way to lose this mark.',
      },
    },
    {
      id: 'ep-melting-energy',
      syllabus: ['0625/2.2.3.1'],
      tier: 'core',
      commandWord: 'Explain',
      marks: 2,
      stem: 'Ice at 0 °C is heated and melts into water at 0 °C. Explain, in terms of energy and temperature, what happens during the melting.',
      markScheme: [
        {
          text: 'Energy is absorbed / taken in from the surroundings during melting',
          marks: 1,
          alternatives: ['The ice must be supplied with thermal energy to melt'],
        },
        {
          text: 'The temperature stays constant (at 0 °C) during the melting, because the energy is used to break the bonds between particles, not to raise the temperature',
          marks: 1,
          alternatives: ['No temperature change occurs while the ice is melting'],
        },
      ],
      examinerNote: {
        zh: '两个得分点缺一不可：吸热 + 温度不变。只写"冰变成了水"是在描述现象而不是解释；点出能量用于克服粒子间的作用、而非升温，才答到"Explain"的层次。',
        en: 'Both marking points are needed: energy absorbed, and temperature constant. Saying only "the ice turns into water" describes rather than explains; noting that the energy separates the particles instead of raising the temperature is what the command word "Explain" demands.',
      },
    },
  ],
  related: ['phy-thermal-001', 'igcse-0625-2-1-gas-particles', 'igcse-0625-2-2-thermal-properties'],
};
