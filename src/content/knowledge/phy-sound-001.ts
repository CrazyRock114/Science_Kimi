import type { KnowledgePoint } from '../types';

export const phySound001: KnowledgePoint = {
  id: 'phy-sound-001',
  subject: 'physics',
  title: { zh: '声现象', en: 'Sound Phenomena' },
  summary: {
    zh: '认识声音由物体振动产生、靠介质传播，知道 15 ℃ 空气中的声速约 340 m/s，理解音调、响度、音色三要素，了解噪声的控制途径与超声、次声的应用。',
    en: 'Learn that sound is produced by vibrating objects and needs a medium to travel, know that the speed of sound in air at 15 °C is about 340 m/s, understand pitch, loudness and timbre, and survey noise control and the uses of ultrasound and infrasound.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8a/ch2'],
    igcse: ['0625/3.4'],
  },
  keywords: {
    zh: ['振动', '介质', '真空不能传声', '声速', '音调', '响度', '音色', '噪声控制', '超声波', '次声波'],
    en: ['vibration', 'medium', 'sound cannot travel through a vacuum', 'speed of sound', 'pitch', 'loudness', 'timbre', 'noise control', 'ultrasound', 'infrasound'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '通过实验认识声音由物体振动产生，知道声音的传播需要介质，真空不能传声。',
          '知道 15 ℃ 时空气中的声速约为 340 m/s，一般 v固 > v液 > v气，会用 v = s/t 进行回声测距等简单计算。',
          '理解音调由频率决定、响度由振幅决定、音色由发声体本身决定，能辨析生活中的实例。',
          '知道控制噪声的三条途径，了解超声波与次声波的特点及应用。',
        ],
      },
      { type: 'heading', text: '声音的产生与传播' },
      {
        type: 'paragraph',
        text: '声音是由物体的振动产生的：说话时声带在振动，敲鼓时鼓面在振动，振动停止，发声也停止。声音以波的形式向外传播，叫做声波。声音的传播需要介质，固体、液体、气体都能传声；真空不能传声——把闹钟放在抽空的玻璃罩内就几乎听不到铃声，航天员在月球上面对面也要靠无线电交谈。',
      },
      { type: 'heading', text: '声速与回声' },
      {
        type: 'paragraph',
        text: '声音在不同介质中传播的快慢不同：一般在固体中最快，液体中次之，气体中最慢。15 ℃ 时空气中的声速约为 340 m/s。声音遇到障碍物会被反射回来形成回声；人耳能区分回声与原声的时间间隔要大于 0.1 s。利用回声可以测距：测出声音往返时间 t，则距离 s = vt/2（除以 2 是因为声音走了往返两段路程）。',
      },
      { type: 'formula', latex: 'v = \\dfrac{s}{t}', caption: '声速公式：v 为声速（m/s），s 为路程（m），t 为时间（s）；回声测距 s = vt/2' },
      { type: 'heading', text: '声音的三个特性' },
      {
        type: 'list',
        items: [
          '音调：声音的高低，由发声体振动的频率决定。频率越高，音调越高。频率的单位是赫兹（Hz）。',
          '响度：声音的强弱（大小），由发声体振动的振幅决定，还与到发声体的距离有关。振幅越大，响度越大。',
          '音色：声音的品质与特色，由发声体的材料、结构决定。"闻其声而知其人"靠的就是音色。',
        ],
      },
      { type: 'heading', text: '噪声的危害与控制' },
      {
        type: 'paragraph',
        text: '从物理学角度看，噪声是发声体做无规则振动时发出的声音；从环保角度看，凡是妨碍人们正常休息、学习和工作的声音都是噪声。声音的强弱用分贝（dB）表示。控制噪声有三条途径：在声源处减弱（如禁止鸣笛、机器加消声器）、在传播过程中减弱（如植树、装隔音板、关门窗）、在人耳处减弱（如戴耳塞、耳罩）。',
      },
      { type: 'heading', text: '超声波与次声波' },
      {
        type: 'list',
        items: [
          '人耳能听到的频率范围约为 20 Hz～20000 Hz。',
          '超声波：频率高于 20000 Hz 的声。方向性好、穿透能力强，应用于声呐测距、B 超检查、超声碎石、超声清洗等。',
          '次声波：频率低于 20 Hz 的声。传播距离远，地震、火山爆发、核爆炸都会产生次声波，可用于监测自然灾害。',
          '声既能传递信息（回声定位、听诊），也能传递能量（超声碎石、清洗）。',
        ],
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'vibration（振动）：物体在平衡位置附近的往复运动，是一切声音的源头。',
          'medium（介质）：传播声音的物质，固体、液体、气体都行，真空不行。',
          'pitch（音调）：声音的高低，由频率决定，频率越高音调越高。',
          'loudness（响度）：声音的强弱，由振幅决定，单位用分贝（dB）量度。',
          'timbre（音色）：声音的品质特色，由发声体的材料和结构决定。',
          'ultrasound（超声波）：频率高于 20000 Hz、人耳听不到的声；infrasound（次声波）：频率低于 20 Hz 的声。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Show experimentally that sound is produced by vibrating objects and needs a medium; sound cannot travel through a vacuum.',
          'Know that the speed of sound in air at 15 °C is about 340 m/s, generally v(solid) > v(liquid) > v(gas), and use v = s/t in simple echo-ranging calculations.',
          'Understand that pitch is set by frequency, loudness by amplitude and timbre by the source itself, and apply this to everyday examples.',
          'Know the three routes for controlling noise, and the characteristics and uses of ultrasound and infrasound.',
        ],
      },
      { type: 'heading', text: 'Production and propagation of sound' },
      {
        type: 'paragraph',
        text: 'Sound is produced by vibrating objects: your vocal cords vibrate when you speak, and a drum skin vibrates when struck; when the vibration stops, the sound stops. Sound travels outwards as a wave. It needs a medium — solids, liquids and gases all transmit sound, but a vacuum does not: an alarm clock inside an evacuated bell jar falls silent, and astronauts on the Moon must talk by radio even face to face.',
      },
      { type: 'heading', text: 'Speed of sound and echoes' },
      {
        type: 'paragraph',
        text: 'Sound travels at different speeds in different media: generally fastest in solids, slower in liquids and slowest in gases. In air at 15 °C the speed of sound is about 340 m/s. Sound reflected from an obstacle returns as an echo; the human ear can tell the echo from the original sound only if they are separated by more than 0.1 s. Echoes can measure distances: if the round trip takes time t, the distance is s = vt/2 (dividing by 2 because the sound travels there and back).',
      },
      { type: 'formula', latex: 'v = \\dfrac{s}{t}', caption: 'v is the speed of sound (m/s), s the distance (m), t the time (s); for echo ranging, s = vt/2' },
      { type: 'heading', text: 'The three characteristics of sound' },
      {
        type: 'list',
        items: [
          'Pitch: how high or low a sound is, determined by the frequency of vibration, measured in hertz (Hz). Higher frequency means higher pitch.',
          'Loudness: how strong a sound is, determined by the amplitude of vibration and by the distance from the source. Greater amplitude means louder sound.',
          'Timbre: the quality of a sound, determined by the material and structure of the source. Recognising a friend by their voice relies on timbre.',
        ],
      },
      { type: 'heading', text: 'Noise and its control' },
      {
        type: 'paragraph',
        text: 'Physically, noise is the sound produced by irregular vibration; environmentally, any sound that disturbs rest, study or work counts as noise. Sound level is measured in decibels (dB). Noise can be controlled along three routes: at the source (no-honking rules, silencers on machines), along its path (planting trees, sound-proof panels, closing windows), and at the ear (earplugs and earmuffs).',
      },
      { type: 'heading', text: 'Ultrasound and infrasound' },
      {
        type: 'list',
        items: [
          'The human audible range is roughly 20 Hz to 20 000 Hz.',
          'Ultrasound: sound above 20 000 Hz. It is directional and penetrating, used in sonar ranging, medical scanning, breaking kidney stones and ultrasonic cleaning.',
          'Infrasound: sound below 20 Hz. It travels great distances; earthquakes, volcanic eruptions and nuclear explosions emit it, so it helps monitor natural disasters.',
          'Sound can both carry information (echo location, stethoscopes) and transfer energy (breaking stones, cleaning).',
        ],
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'vibration (振动): A to-and-fro motion about an equilibrium position; the origin of every sound.',
          'medium (介质): The material that carries sound — solid, liquid or gas, but never a vacuum.',
          'pitch (音调): How high or low a sound is, set by frequency; higher frequency, higher pitch.',
          'loudness (响度): The strength of a sound, set by amplitude and measured in decibels (dB).',
          'timbre (音色): The quality of a sound, set by the material and structure of the source.',
          'ultrasound (超声波): Sound above 20 000 Hz, beyond human hearing; infrasound (次声波): sound below 20 Hz.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '航天员在月球表面面对面说话时，必须借助无线电设备才能听清对方，这是因为（　）',
        en: 'Astronauts standing face to face on the Moon must use radios to hear each other, because',
      },
      options: {
        zh: [
          '月球上噪声太大',
          '月球上重力太小，声音太弱',
          '月球表面没有空气，真空不能传声',
          '航天服能把声音完全反射回去',
        ],
        en: [
          'the Moon is too noisy',
          'the gravity is too weak for sound to be loud enough',
          'there is no air on the Moon, and sound cannot travel through a vacuum',
          'the spacesuits reflect all the sound away',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '声音的传播需要介质，月球表面是真空环境，没有传声的介质，所以必须靠电磁波（无线电）通信。A、B 与月球环境不符；航天服不会"完全反射"声音，D 错。',
        en: 'Sound needs a medium, and the lunar surface is a vacuum with nothing to carry sound, so communication must use radio waves (electromagnetic waves). A and B do not match the lunar environment; a spacesuit does not reflect all sound, so D is wrong.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '"闻其声而知其人"，意思是听到声音就能分辨出是哪位熟人在说话，判断的主要依据是声音的（　）',
        en: '"Know the person by their voice" — recognising who is speaking mainly depends on the sound’s',
      },
      options: {
        zh: ['音调', '响度', '音色', '声速'],
        en: ['pitch', 'loudness', 'timbre', 'speed'],
      },
      answerIndex: 2,
      explanation: {
        zh: '不同人的声带材料和结构不同，发出声音的音色不同，所以能"闻声知人"。音调只决定声音高低，响度只决定强弱，声速在同种介质中相同，都不能用来区分说话人。',
        en: 'Different people have vocal cords of different material and structure, giving their voices different timbres — hence recognition by voice. Pitch only sets how high the sound is, loudness only how strong, and the speed of sound is the same in the same medium; none of these distinguishes speakers.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '一辆汽车停在山崖前，司机鸣笛后 2 s 听到回声。已知此时空气中的声速为 340 m/s，则汽车到山崖的距离约为（　）',
        en: 'A car stops in front of a cliff. The driver sounds the horn and hears the echo 2 s later. With the speed of sound 340 m/s, the distance from the car to the cliff is about',
      },
      options: {
        zh: ['170 m', '340 m', '680 m', '1360 m'],
        en: ['170 m', '340 m', '680 m', '1360 m'],
      },
      answerIndex: 1,
      explanation: {
        zh: '2 s 是声音往返的时间，单程距离 s = vt/2 = 340 × 2 ÷ 2 = 340 m。680 m 是忘了除以 2 的往返路程；170 m 是把时间也除了 2；1360 m 是把 2 s 当成单程时间还乘了 2。',
        en: 'The 2 s is the round-trip time, so the one-way distance is s = vt/2 = 340 × 2 ÷ 2 = 340 m. 680 m forgets to halve the round trip; 170 m halves the time as well; 1360 m treats 2 s as one-way and doubles again.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-ultrasound-definition',
      syllabus: ['0625/3.4.9'],
      tier: 'core',
      commandWord: 'State',
      marks: 1,
      stem: 'A sound wave has a frequency of 25 000 Hz. What is a sound of this frequency called?',
      options: ['Infrasound', 'Audible sound', 'Ultrasound', 'Noise'],
      answerIndex: 2,
      markScheme: [
        {
          text: 'Ultrasound (sound with frequency above 20 000 Hz)',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '记住分界：人耳听觉范围约 20 Hz～20000 Hz，高于 20000 Hz 是超声波，低于 20 Hz 是次声波。25000 Hz 高于上限，是超声波，不是"听得见的声"。',
        en: 'Remember the boundaries: the audible range is about 20 Hz to 20 000 Hz; above 20 000 Hz is ultrasound, below 20 Hz is infrasound. 25 000 Hz lies above the upper limit, so it is ultrasound, not audible sound.',
      },
    },
    {
      id: 'ep-echo-depth',
      syllabus: ['0625/3.4.12'],
      tier: 'supplement',
      commandWord: 'Calculate',
      marks: 2,
      stem: 'A ship sends an ultrasound pulse vertically downwards and detects the echo from the seabed 0.80 s later. The speed of sound in seawater is 1500 m/s. Calculate the depth of the sea beneath the ship.',
      markScheme: [
        {
          text: 'Uses distance = speed × time with the halving for the return journey, s = vt / 2',
          marks: 1,
          alternatives: ['1500 × 0.80 / 2'],
        },
        {
          text: '600 m',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '回声测距最常见的失分点就是忘记除以 2：0.80 s 是脉冲到达海底再返回的总时间。1500 × 0.80 = 1200 m 是往返路程，水深是它的一半。',
        en: 'The classic lost mark in echo ranging is forgetting to halve: 0.80 s is the total time for the pulse to reach the seabed and return. 1500 × 0.80 = 1200 m is the round trip; the depth is half of that.',
      },
    },
  ],
  related: ['igcse-0625-3-4-sound', 'igcse-0625-3-1-waves', 'phy-motion-001'],
};
