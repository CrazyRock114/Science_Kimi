import { kinematicsKernel } from '../../simulations/kernels/kinematics';
import type { KnowledgePoint } from '../types';

export const phyKinematicsVelocity: KnowledgePoint = {
  id: 'phy-kinematics-velocity',
  subject: 'physics',
  title: { zh: '速度与平均速度', en: 'Speed, Velocity and Average Velocity' },
  summary: {
    zh: '区分瞬时速度与平均速度，用 v = s/t 和 v-t 图像定量描述物体运动的快慢。',
    en: 'Distinguish instantaneous and average velocity, and describe how fast objects move using v = s/t and velocity–time graphs.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j8a/ch1', 'pep-phy-s1/ch1'],
    igcse: ['0625/1.2'],
  },
  keywords: {
    zh: ['速度', '平均速度', '瞬时速度', '速率', '位移', 'v-t 图像', '机械运动'],
    en: ['speed', 'velocity', 'average speed', 'instantaneous velocity', 'displacement', 'v-t graph'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '速度：描述运动快慢的物理量' },
      {
        type: 'paragraph',
        text: '速度等于物体通过的路程（位移）与所用时间之比。速度越大，物体运动得越快。速度是矢量，既有大小也有方向；它的大小称为速率。',
      },
      { type: 'formula', latex: 'v = \\frac{s}{t}', caption: '速度的定义式：s 为位移（初中为路程），t 为时间' },
      {
        type: 'list',
        items: [
          '速度的常用单位是米每秒（m/s），生活中也常用千米每小时（km/h），1 m/s = 3.6 km/h。',
          '速度的方向就是物体运动的方向；速率只有大小、没有方向，是标量。',
        ],
      },
      { type: 'heading', text: '平均速度与瞬时速度' },
      {
        type: 'paragraph',
        text: '变速运动中，物体在整段位移 s 与总时间 t 内的比值称为这段时间的平均速度，它只能粗略描述这段过程的快慢。物体在某一时刻（或某一位置）的速度称为瞬时速度，汽车速度表显示的就是瞬时速度的大小。',
      },
      { type: 'formula', latex: '\\bar{v} = \\frac{s_{\\text{总}}}{t_{\\text{总}}}', caption: '平均速度：必须用总位移除以总时间' },
      {
        type: 'paragraph',
        text: '对于匀变速直线运动，平均速度还等于初、末速度的平均值；v-t 图像是一条倾斜直线，其斜率就是加速度。',
      },
      { type: 'formula', latex: '\\bar{v} = \\frac{u + v}{2}', caption: '仅适用于匀变速直线运动：u 为初速度，v 为末速度' },
      {
        type: 'list',
        items: [
          '平均速度不是速度的平均值，必须按“总位移 ÷ 总时间”计算（匀变速时二者恰好相等）。',
          '匀速直线运动中，任意时刻的瞬时速度都等于整段的平均速度。',
          '中途停留的时间也要计入总时间：走走停停时平均速度会变小。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Velocity: how fast and in which direction' },
      {
        type: 'paragraph',
        text: 'Velocity is the displacement travelled per unit time. The greater the velocity, the faster the object moves. Velocity is a vector with both magnitude and direction; its magnitude is called speed.',
      },
      { type: 'formula', latex: 'v = \\frac{s}{t}', caption: 'Definition of velocity: s is displacement, t is time' },
      {
        type: 'list',
        items: [
          'The SI unit of velocity is metres per second (m/s); kilometres per hour (km/h) is also common, and 1 m/s = 3.6 km/h.',
          'The direction of the velocity is the direction of motion; speed is a scalar with magnitude only.',
        ],
      },
      { type: 'heading', text: 'Average velocity and instantaneous velocity' },
      {
        type: 'paragraph',
        text: 'In non-uniform motion, the total displacement divided by the total time gives the average velocity over that interval — only a rough description of the motion. The velocity at a particular instant is the instantaneous velocity; a car speedometer shows the instantaneous speed.',
      },
      { type: 'formula', latex: '\\bar{v} = \\frac{s_{\\text{total}}}{t_{\\text{total}}}', caption: 'Average velocity: always total displacement over total time' },
      {
        type: 'paragraph',
        text: 'For uniformly accelerated motion the average velocity also equals the mean of the initial and final velocities; the v–t graph is a straight sloping line whose gradient is the acceleration.',
      },
      { type: 'formula', latex: '\\bar{v} = \\frac{u + v}{2}', caption: 'Uniform acceleration only: u is initial velocity, v is final velocity' },
      {
        type: 'list',
        items: [
          'Average velocity is not the mean of speeds — it must be computed as total displacement ÷ total time (for uniform acceleration the two happen to agree).',
          'In uniform motion the instantaneous velocity at every moment equals the average velocity over the whole journey.',
          'Time spent stopped still counts towards the total time, so stop-and-start journeys have a smaller average velocity.',
        ],
      },
    ],
  },
  simulation: {
    renderer: 'motion-graphs',
    params: [
      {
        key: 'u',
        label: { zh: '初速度 u', en: 'Initial velocity u' },
        min: 0,
        max: 30,
        step: 0.5,
        defaultValue: 5,
        unit: 'm/s',
      },
      {
        key: 'a',
        label: { zh: '加速度 a', en: 'Acceleration a' },
        min: -5,
        max: 5,
        step: 0.1,
        defaultValue: 2,
        unit: 'm/s²',
      },
    ],
    liveFormulas: [
      {
        id: 'velocity',
        latex: 'v = u + at',
        substitute: (p) => `v = ${p.u} + (${p.a})\\,t`,
      },
      {
        id: 'average-velocity',
        latex: '\\bar{v} = \\frac{s}{t} = u + \\tfrac{1}{2}at',
        substitute: (p) => `\\bar{v} = ${p.u} + \\tfrac{1}{2}\\times(${p.a})\\,t`,
      },
    ],
  },
  presets: [
    {
      id: 'bike-cruise',
      name: { zh: '自行车匀速骑行', en: 'Cycling at constant speed' },
      description: {
        zh: '自行车以 6 m/s 匀速前进，任意时刻的瞬时速度都等于平均速度。',
        en: 'A cyclist moves at a constant 6 m/s, so the instantaneous velocity always equals the average velocity.',
      },
      params: { u: 6, a: 0 },
    },
    {
      id: 'train-depart',
      name: { zh: '列车出站加速', en: 'Train accelerating out of a station' },
      description: {
        zh: '列车从静止以 1.2 m/s² 加速，平均速度随时间均匀增大。',
        en: 'A train accelerates from rest at 1.2 m/s²; its average velocity grows steadily with time.',
      },
      params: { u: 0, a: 1.2 },
    },
    {
      id: 'car-brake',
      name: { zh: '汽车进站减速', en: 'Car slowing into a stop' },
      description: {
        zh: '汽车以 20 m/s 行驶，以 -4 m/s² 减速，5 s 后停下。',
        en: 'A car travelling at 20 m/s decelerates at −4 m/s² and stops after 5 s.',
      },
      params: { u: 20, a: -4 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '小明在百米赛跑中以 12.5 s 跑完全程，他全程的平均速度是多少？',
        en: 'A sprinter finishes a 100 m race in 12.5 s. What is his average velocity over the whole race?',
      },
      options: {
        zh: ['8 m/s', '10 m/s', '12.5 m/s', '6.25 m/s'],
        en: ['8 m/s', '10 m/s', '12.5 m/s', '6.25 m/s'],
      },
      answerIndex: 0,
      explanation: {
        zh: '平均速度 = 总位移 ÷ 总时间 = 100 m ÷ 12.5 s = 8 m/s。10 m/s 和 12.5 m/s 是把时间误当速度或随意拼凑的结果；6.25 m/s 是用 100 ÷ 16 等无关计算得到的。',
        en: 'Average velocity = total displacement ÷ total time = 100 m ÷ 12.5 s = 8 m/s. The other values come from misusing the time or arbitrary combinations of the numbers.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于平均速度，下列说法正确的是哪一项？',
        en: 'Which statement about average velocity is correct?',
      },
      options: {
        zh: [
          '平均速度就是各个时刻速度的平均值',
          '平均速度等于总位移与总时间的比值',
          '平均速度一定等于初、末速度之和的一半',
          '物体中途停下休息时，停留时间不计入总时间',
        ],
        en: [
          'Average velocity is the mean of the velocities at every instant',
          'Average velocity equals total displacement divided by total time',
          'Average velocity always equals half the sum of the initial and final velocities',
          'Time spent at rest during the journey is not counted in the total time',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '平均速度的定义是总位移 ÷ 总时间。它一般不等于各时刻速度的平均值；只有匀变速直线运动时才等于 (u+v)/2；中途停留的时间必须计入总时间。',
        en: 'By definition average velocity is total displacement ÷ total time. It is generally not the mean of instantaneous velocities; (u+v)/2 holds only for uniform acceleration; and any stopped time must be included in the total time.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '一个物体做匀速直线运动，5 s 内通过了 30 m。下列说法正确的是哪一项？',
        en: 'An object in uniform linear motion covers 30 m in 5 s. Which statement is correct?',
      },
      options: {
        zh: [
          '它全程的平均速度是 6 m/s，且任意时刻的瞬时速度也是 6 m/s',
          '它全程的平均速度是 6 m/s，但瞬时速度时刻在变化',
          '它的速度越来越快',
          '它在第 1 s 内通过的路程小于第 5 s 内的',
        ],
        en: [
          'Its average velocity is 6 m/s and its instantaneous velocity is 6 m/s at every moment',
          'Its average velocity is 6 m/s but its instantaneous velocity keeps changing',
          'It keeps speeding up',
          'It covers less distance in the 1st second than in the 5th second',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: 'v = 30 ÷ 5 = 6 m/s。匀速直线运动中速度保持不变，所以瞬时速度处处等于平均速度，任意相等时间内通过的路程也相等。',
        en: 'v = 30 ÷ 5 = 6 m/s. In uniform motion the velocity is constant, so the instantaneous velocity equals the average velocity everywhere, and equal distances are covered in equal time intervals.',
      },
    },
  ],
  kernels: {
    kinematics: kinematicsKernel,
  },
  expectedResults: [
    {
      id: 'probe-average-accelerating',
      description: {
        zh: 'u = 4 m/s、a = 2 m/s² 运动 5 s：v = 14 m/s，s = 45 m，平均速度 v̄ = s/t = 9 m/s = (u+v)/2',
        en: 'u = 4 m/s, a = 2 m/s² for 5 s: v = 14 m/s, s = 45 m, average velocity s/t = 9 m/s = (u+v)/2',
      },
      kernel: 'kinematics',
      input: { u: 4, a: 2, t: 5 },
      expected: { v: 14, s: 45 },
    },
    {
      id: 'probe-braking-average',
      description: {
        zh: '20 m/s 以 -4 m/s² 刹车 5 s 停下：v = 0，s = 50 m，平均速度 10 m/s，恰为初、末速度的平均',
        en: 'Braking from 20 m/s at −4 m/s² for 5 s: v = 0, s = 50 m, average velocity 10 m/s, the mean of initial and final velocities',
      },
      kernel: 'kinematics',
      input: { u: 20, a: -4, t: 5 },
      expected: { v: 0, s: 50 },
    },
    {
      id: 'probe-uniform-average',
      description: {
        zh: '匀速运动（a = 0）6 m/s 运动 10 s：s = 60 m，平均速度 = 瞬时速度 = 6 m/s',
        en: 'Uniform motion (a = 0) at 6 m/s for 10 s: s = 60 m, average velocity = instantaneous velocity = 6 m/s',
      },
      kernel: 'kinematics',
      input: { u: 6, a: 0, t: 10 },
      expected: { v: 6, s: 60 },
    },
  ],
  narration: {
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        text: {
          zh: '百米飞人冲线那一刻时速超过 40 公里，可他全程的平均速度其实还不到 29 公里每小时。一个“快”字，其实藏着两种不同的速度——这节课我们就把它们分清楚。',
          en: 'A top sprinter crosses the line at over 40 kilometres per hour, yet his average speed for the whole race is under 29. That one word "fast" hides two different speeds — and this lesson keeps them apart.',
        },
      },
      {
        id: 'concept-velocity',
        kind: 'concept',
        text: {
          zh: '速度描述运动的快慢和方向：位移除以时间，v 等于 s 比 t。它是矢量——有大小也有方向；只有大小的那一半叫速率。单位米每秒，生活里常用千米每小时，记住 1 米每秒等于 3.6 千米每小时。',
          en: 'Velocity describes how fast something moves and in which direction: displacement over time, v equals s over t. It is a vector — magnitude plus direction; the magnitude alone is the speed. The unit is metres per second; everyday life uses kilometres per hour, and 1 m/s is 3.6 km/h.',
        },
      },
      {
        id: 'concept-average',
        kind: 'concept',
        text: {
          zh: '变速运动里，全程的快慢用平均速度来概括：总位移除以总时间。两个坑要避开：中途停下来休息的时间也得算进总时间；平均速度一般不是各段速度的平均值。只有匀变速直线运动时，它才恰好等于初末速度之和的一半——这个巧合别乱用。',
          en: 'For non-uniform motion the average velocity sums up the journey: total displacement over total time. Two traps: time spent stopped still counts towards the total; and average velocity is generally not the mean of the speeds. Only for uniform acceleration does it happen to equal half the sum of the initial and final velocities — do not borrow that coincidence elsewhere.',
        },
      },
      {
        id: 'try-it',
        kind: 'interaction',
        text: {
          zh: '来仿真里感受一下。先点“自行车匀速骑行”：v-t 图像是水平线，任意时刻的瞬时速度都等于平均速度。再点“列车出站加速”，看 v-t 图线爬坡——平均速度就藏在图线下的面积里。最后点“汽车进站减速”，拖一拖初速度和加速度滑块，看刹车的快慢怎么改变图线的斜率。',
          en: 'Feel it in the simulation. Start with "cycling at constant speed": the v–t graph is flat, and the instantaneous velocity equals the average at every moment. Then tap "train accelerating out of a station" and watch the v–t line climb — the average velocity hides in the area beneath it. Finally try "car slowing into a stop", and drag the initial-velocity and acceleration sliders to see how brisk braking steepens the line.',
        },
      },
      {
        id: 'summary',
        kind: 'summary',
        text: {
          zh: '收个尾：速度是位移与时间的比，是矢量；平均速度只认“总位移除以总时间”；匀变速时才有 v̄ 等于 (u+v)/2 这个捷径；匀速时瞬时速度处处等于平均速度。概念分清了，小测里那些陷阱选项就骗不到你。',
          en: 'Wrapping up: velocity is displacement over time, a vector; average velocity means total displacement over total time, nothing else; the shortcut v-bar equals (u+v)/2 works only for uniform acceleration; and in uniform motion the instantaneous velocity equals the average everywhere. With the concepts sorted, the quiz traps won\'t catch you.',
        },
      },
    ],
  },
  related: ['igcse-0625-1-2-motion', 'phy-motion-001', 'phy-kinematics-reference-frame'],
};
