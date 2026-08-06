import type { KnowledgePoint } from '../types';

export const phyInfo001: KnowledgePoint = {
  id: 'phy-info-001',
  subject: 'physics',
  title: { zh: '信息的传递', en: 'Communication and the Transmission of Information' },
  summary: {
    zh: '了解电磁波的产生与传播条件，掌握波速、波长、频率的关系 c = λf，认识电磁波谱，并了解广播、电视、移动通信、卫星通信与光纤通信等现代通信方式。',
    en: 'Learn how electromagnetic waves are produced and travel, use c = λf to relate speed, wavelength and frequency, survey the electromagnetic spectrum, and meet modern communications: radio, TV, mobile phones, satellites and optical fibres.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j9/ch9'],
    igcse: ['0625/3.1', '0625/3.3'],
  },
  keywords: {
    zh: ['电磁波', '波速', '波长', '频率', '电磁波谱', '无线电波', '微波通信', '卫星通信', '光纤通信', '网络通信'],
    en: ['electromagnetic wave', 'wave speed', 'wavelength', 'frequency', 'electromagnetic spectrum', 'radio waves', 'microwave communication', 'satellite communication', 'optical fibres', 'the Internet'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '知道导线中迅速变化的电流会在周围空间产生电磁波。',
          '知道电磁波的传播不需要介质，在真空中的传播速度 c = 3×10⁸ m/s。',
          '理解波速、波长、频率的关系 c = λf，并能进行简单计算。',
          '了解电磁波谱的组成及无线电波、微波等的应用；了解微波通信、卫星通信、光纤通信、网络通信等现代通信方式。',
        ],
      },
      { type: 'heading', text: '电磁波的产生' },
      {
        type: 'paragraph',
        text: '迅速变化的电流会在周围空间产生电磁波。打开或关闭收音机、电灯时产生的短暂“咔哒”声，就是电路通断瞬间激发的电磁波被收音机接收到的结果。电磁波是个大家族：无线电波、红外线、可见光、紫外线、X 射线、γ 射线都是电磁波，只是频率（波长）不同。',
      },
      { type: 'heading', text: '电磁波的传播' },
      {
        type: 'paragraph',
        text: '声音的传播需要介质，而电磁波的传播不需要介质，可以在真空中传播——宇航员在月球上正是靠电磁波与地面通话。电磁波在真空中的传播速度与光速相同，c = 3×10⁸ m/s，这是宇宙中物质运动的极限速度。在空气中，电磁波的传播速度与真空中近似相同。',
      },
      { type: 'heading', text: '波速、波长与频率' },
      {
        type: 'paragraph',
        text: '波长 λ 是相邻两个波峰（或波谷）间的距离，单位是米（m）；频率 f 是每秒内振动的次数，单位是赫兹（Hz），常用单位还有千赫（kHz）、兆赫（MHz），1 MHz = 10⁶ Hz。真空中所有电磁波的波速都相同，因此频率越高的电磁波，波长越短。',
      },
      { type: 'formula', latex: 'c = \\lambda f', caption: '波速 = 波长 × 频率：c = 3×10⁸ m/s，λ 单位 m，f 单位 Hz；如 f = 100 MHz 的电磁波，λ = c/f = 3 m' },
      { type: 'heading', text: '现代通信方式' },
      {
        type: 'list',
        items: [
          '广播、电视和移动通信：利用无线电波传递声音和图像信号；手机既是发射台又是接收台，通话要靠基地台转接。',
          '微波通信：微波沿直线传播，不能绕地球表面弯曲，需每隔 50 km 左右建微波中继站接力传输。',
          '卫星通信：用通信卫星做中继站，在地球周围均匀配置 3 颗同步卫星，就能实现全球通信（两极地区除外）。',
          '光纤通信：激光在光导纤维内壁多次反射，从一端传到另一端，容量大、抗干扰、保密性好。',
          '网络通信：计算机通过互联网连在一起，实现电子邮件、资源共享等信息传递。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'electromagnetic wave（电磁波）：由迅速变化的电流激发、可在真空中以 c = 3×10⁸ m/s 传播的波。',
          'wavelength（波长）：相邻两个波峰（或波谷）间的距离，符号 λ，单位 m。',
          'frequency（频率）：每秒内振动的次数，符号 f，单位 Hz（1 MHz = 10⁶ Hz）。',
          'electromagnetic spectrum（电磁波谱）：按频率（波长）排列的电磁波家族：无线电波、红外线、可见光、紫外线、X 射线、γ 射线。',
          'optical fibre（光导纤维）：利用光的全反射传输激光信号的纤维，用于光纤通信。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Know that a rapidly changing current in a conductor produces electromagnetic waves.',
          'Know that electromagnetic waves need no medium and travel in a vacuum at c = 3×10⁸ m/s.',
          'Use c = λf to relate wave speed, wavelength and frequency in simple calculations.',
          'Survey the electromagnetic spectrum and modern communications: radio, TV and mobile phones, microwave links, satellites, optical fibres and the Internet.',
        ],
      },
      { type: 'heading', text: 'Producing electromagnetic waves' },
      {
        type: 'paragraph',
        text: 'A rapidly changing electric current radiates electromagnetic waves. The brief click heard on a radio when a nearby switch is turned on or off is exactly such a burst being picked up. Electromagnetic waves form a large family — radio waves, infrared, visible light, ultraviolet, X-rays and gamma rays — differing only in frequency (and hence wavelength).',
      },
      { type: 'heading', text: 'How they travel' },
      {
        type: 'paragraph',
        text: 'Sound needs a medium; electromagnetic waves do not — they travel through a vacuum, which is how astronauts on the Moon spoke to Earth. In a vacuum all electromagnetic waves travel at the speed of light, c = 3×10⁸ m/s, the greatest speed possible. In air the speed is almost the same.',
      },
      { type: 'heading', text: 'Speed, wavelength and frequency' },
      {
        type: 'paragraph',
        text: 'The wavelength λ is the distance between neighbouring crests (or troughs), measured in metres; the frequency f is the number of oscillations per second, measured in hertz (Hz), with 1 MHz = 10⁶ Hz. Since all electromagnetic waves share the same speed in a vacuum, a higher frequency always means a shorter wavelength.',
      },
      { type: 'formula', latex: 'c = \\lambda f', caption: 'Speed = wavelength × frequency: c = 3×10⁸ m/s, λ in m, f in Hz; e.g. f = 100 MHz gives λ = c/f = 3 m' },
      { type: 'heading', text: 'Modern communications' },
      {
        type: 'list',
        items: [
          'Radio, TV and mobile phones: radio waves carry sound and picture signals; a mobile phone is both transmitter and receiver, linked through base stations.',
          'Microwave links: microwaves travel in straight lines and cannot follow the Earth’s curve, so relay towers are needed every 50 km or so.',
          'Satellite communication: relay stations in orbit — three evenly spaced geostationary satellites give global coverage (except the poles).',
          'Optical fibres: laser light reflects repeatedly along the inside of a fibre — huge capacity, immune to interference and secure.',
          'The Internet: computers linked worldwide, carrying e-mail and shared resources.',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'electromagnetic wave (电磁波): A wave radiated by a rapidly changing current, travelling in a vacuum at c = 3×10⁸ m/s.',
          'wavelength (波长): The distance between adjacent crests, symbol λ, in metres.',
          'frequency (频率): Oscillations per second, symbol f, in hertz (1 MHz = 10⁶ Hz).',
          'electromagnetic spectrum (电磁波谱): The family of electromagnetic waves ordered by frequency: radio, infrared, visible light, ultraviolet, X-rays, gamma rays.',
          'optical fibre (光导纤维): A fibre carrying laser signals by repeated internal reflection, used in optical-fibre communication.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '关于电磁波，下列说法正确的是（　）',
        en: 'Which statement about electromagnetic waves is correct?',
      },
      options: {
        zh: [
          '电磁波的传播需要介质，不能在真空中传播',
          '电磁波在真空中的传播速度约为 3×10⁸ m/s',
          '可见光不是电磁波',
          '电磁波的频率越高，波长越长',
        ],
        en: [
          'electromagnetic waves need a medium and cannot travel through a vacuum',
          'electromagnetic waves travel in a vacuum at about 3×10⁸ m/s',
          'visible light is not an electromagnetic wave',
          'the higher the frequency of an electromagnetic wave, the longer its wavelength',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '电磁波传播不需要介质，能在真空中传播，速度为 3×10⁸ m/s，A 错、B 对；可见光、红外线、X 射线等都是电磁波家族的成员，C 错；由 c = λf，c 一定时 f 越大 λ 越短，D 错。',
        en: 'Electromagnetic waves need no medium and cross a vacuum at 3×10⁸ m/s (A wrong, B right). Visible light, infrared and X-rays all belong to the electromagnetic family (C wrong). From c = λf with c fixed, higher frequency means shorter wavelength (D wrong).',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '某广播电台发射的电磁波频率为 100 MHz，它在真空中的波长约为（　）',
        en: 'A radio station broadcasts at a frequency of 100 MHz. The wavelength in a vacuum is about',
      },
      options: {
        zh: ['3 m', '30 m', '0.33 m', '300 m'],
        en: ['3 m', '30 m', '0.33 m', '300 m'],
      },
      answerIndex: 0,
      explanation: {
        zh: '由 c = λf 得 λ = c/f = (3×10⁸ m/s) ÷ (100×10⁶ Hz) = 3 m。B 是把 100 MHz 当成 10 MHz；C 把乘除弄反了（算了 f/c）；D 多乘了 100 倍。注意先把 MHz 换算成 Hz。',
        en: 'From c = λf: λ = c/f = (3×10⁸ m/s) ÷ (100×10⁶ Hz) = 3 m. B treats 100 MHz as 10 MHz; C inverts the relation (f/c); D is out by a factor of 100. Convert MHz to Hz first.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '实现全球通信（两极地区除外），最少需要在地球周围均匀配置同步通信卫星（　）',
        en: 'To provide global communication coverage (except the polar regions), the minimum number of evenly spaced geostationary satellites needed is',
      },
      options: {
        zh: ['1 颗', '2 颗', '3 颗', '5 颗'],
        en: ['1', '2', '3', '5'],
      },
      answerIndex: 2,
      explanation: {
        zh: '微波沿直线传播，一颗同步卫星只能覆盖地球表面的一部分；在地球周围均匀配置 3 颗同步卫星，其覆盖区域相互衔接，即可覆盖几乎全球。1 颗、2 颗都会有覆盖不到的区域。',
        en: 'Microwaves travel in straight lines, so one satellite covers only part of the globe. Three evenly spaced geostationary satellites have overlapping footprints covering nearly the whole Earth; one or two would leave gaps.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-wavelength-calculation',
      syllabus: ['0625/3.3.6'],
      tier: 'supplement',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'A microwave transmitter emits waves of frequency 1.5×10¹⁰ Hz. The speed of electromagnetic waves in a vacuum is 3.0×10⁸ m/s. Calculate the wavelength of these microwaves.',
      markScheme: [
        {
          text: 'Uses λ = c / f',
          marks: 1,
          alternatives: ['3.0×10⁸ / 1.5×10¹⁰', 'c = fλ rearranged'],
        },
        {
          text: '0.020 m (2.0×10⁻² m)',
          marks: 1,
          alternatives: ['2.0 cm'],
        },
      ],
      examinerNote: {
        zh: '先写符号式 λ = c/f 再代入。常见错误是算 f/c 得到 50 m（单位其实是 s/m² 级别，量纲已错）；或漏写单位。结果 0.020 m 写作 2.0 cm 同样给分。',
        en: 'Write λ = c/f before substituting. The classic error is computing f/c (giving 50, with impossible units); another is omitting the unit. 0.020 m and 2.0 cm both earn the mark.',
      },
    },
    {
      id: 'ep-satellite-microwaves',
      syllabus: ['0625/3.3.5'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'Satellite television uses one region of the electromagnetic spectrum to carry signals between the ground and the satellite. State which region is used.',
      options: ['Radio waves', 'Microwaves', 'Infrared', 'Visible light'],
      answerIndex: 1,
      markScheme: [
        {
          text: 'Microwaves',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '卫星通信用微波：波长短、方向性好，且能穿透电离层。选 radio waves 是最常见的错误——广播用的无线电波会被电离层反射，无法到达同步卫星。',
        en: 'Satellite links use microwaves: short wavelength, easily beamed, and they pass through the ionosphere. Choosing radio waves is the classic mistake — broadcast radio waves are reflected by the ionosphere and never reach the satellite.',
      },
    },
  ],
  related: ['igcse-0625-3-3-em-spectrum', 'igcse-0625-3-1-waves', 'phy-optics-001'],
};
