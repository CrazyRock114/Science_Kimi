import type { KnowledgePoint } from '../types';

export const phyKinematicsReferenceFrame: KnowledgePoint = {
  id: 'phy-kinematics-reference-frame',
  subject: 'physics',
  title: { zh: '运动的描述：参照物与相对运动', en: 'Describing Motion: Reference Frames and Relative Motion' },
  summary: {
    zh: '判断物体是运动还是静止，必须先选定参照物。选择不同的参照物，对同一物体运动状态的描述可能不同——运动和静止是相对的。',
    en: 'To say whether an object is moving or at rest, a reference frame must be chosen first. Different reference frames can give different descriptions of the same motion — motion and rest are relative.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-phy-j8a/ch1', 'pep-phy-s1/ch1'],
    igcse: ['0625/1.2'],
  },
  keywords: {
    zh: ['参照物', '参考系', '机械运动', '相对静止', '相对运动', '运动的相对性'],
    en: ['reference frame', 'reference object', 'relative motion', 'relative rest', 'relativity of motion'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '机械运动与参照物' },
      {
        type: 'paragraph',
        text: '物理学中，把一个物体相对于另一个物体位置的变化叫做机械运动。要判断一个物体是否在运动，必须事先选定一个物体作为标准，这个被选作标准的物体叫做参照物。高中阶段把参照物及其配套的坐标系称为参考系。',
      },
      {
        type: 'list',
        items: [
          '研究对象相对于参照物的位置发生变化，就说它是运动的；位置不变，就说它是静止的。',
          '参照物的选择是任意的，但通常选地面或相对地面静止的物体，描述起来最方便。',
          '不能选研究对象本身作为参照物——那样它永远“静止”，研究就没有意义了。',
        ],
      },
      { type: 'heading', text: '运动和静止是相对的' },
      {
        type: 'paragraph',
        text: '同一物体，选择不同的参照物，得出的运动状态可能不同。例如坐在行驶列车里的乘客：以车厢为参照物他是静止的，以地面为参照物他在随列车一起运动。这就是运动和静止的相对性——世界上一切物体都在运动，绝对静止的物体是不存在的。',
      },
      {
        type: 'paragraph',
        text: '描述运动时常用的说法是：“以……为参照物，某物体是运动（或静止）的”。日常语言里省略的参照物通常是地面，例如“汽车在行驶”“教学楼静止不动”。',
      },
      { type: 'heading', text: '相对运动与相对速度' },
      {
        type: 'paragraph',
        text: '两个物体以同样的速度向同一方向运动时，它们之间的位置不发生变化，彼此相对静止——加油机给战斗机空中加油、同步卫星相对地面静止，利用的都是这个原理。反之，两车相向而行时，彼此看对方的靠近速度等于两车速度之和，这就是相对速度的思想。',
      },
      {
        type: 'list',
        items: [
          '相对静止的条件：两个物体速度的大小和方向都相同。',
          '空中加油时，加油机与受油机必须保持相对静止。',
          '地球同步卫星绕地球转动的周期与地球自转周期相同，因此相对地面静止。',
          '“月亮在云中穿行”是以云为参照物描述月亮的运动。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Mechanical motion and the reference frame' },
      {
        type: 'paragraph',
        text: 'In physics, a change in the position of one object relative to another is called mechanical motion. To judge whether an object is moving, another object must first be chosen as the standard — the reference object; together with its coordinate system this is called a reference frame.',
      },
      {
        type: 'list',
        items: [
          'If the object’s position relative to the reference frame changes, it is moving; if not, it is at rest.',
          'The choice of reference frame is arbitrary, but the ground — or objects at rest relative to it — is usually the most convenient.',
          'The object under study cannot serve as its own reference frame — it would always appear “at rest” and nothing could be learned.',
        ],
      },
      { type: 'heading', text: 'Motion and rest are relative' },
      {
        type: 'paragraph',
        text: 'The same object can be described differently from different reference frames. A passenger in a moving train is at rest relative to the carriage, but moving with the train relative to the ground. This is the relativity of motion: everything in the universe is in motion, and no object is absolutely at rest.',
      },
      {
        type: 'paragraph',
        text: 'A careful description states the frame explicitly: “relative to …, the object is moving (or at rest)”. In everyday language the unstated reference frame is usually the ground, as in “the car is moving” or “the school building is standing still”.',
      },
      { type: 'heading', text: 'Relative motion and relative velocity' },
      {
        type: 'paragraph',
        text: 'When two objects move in the same direction at the same speed, the distance between them does not change — they are at rest relative to each other. Mid-air refuelling and geostationary satellites both rely on this principle. Conversely, two cars approaching each other each see the other closing in at the sum of their speeds — the idea of relative velocity.',
      },
      {
        type: 'list',
        items: [
          'Condition for relative rest: both objects have the same speed in the same direction.',
          'During mid-air refuelling, the tanker and the receiving aircraft must remain at rest relative to each other.',
          'A geostationary satellite orbits with the same period as the Earth’s rotation, so it stays above a fixed point on the ground.',
          '“The moon drifts through the clouds” describes the moon’s motion using the clouds as the reference frame.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '坐在行驶列车里的乘客看到窗外的树木向后退去，他选择的参照物是什么？',
        en: 'A passenger in a moving train sees the trees outside moving backwards. What is his reference frame?',
      },
      options: {
        zh: ['地面', '树木', '列车（或他自己）', '天空中的云'],
        en: ['The ground', 'The trees', 'The train (or himself)', 'The clouds in the sky'],
      },
      answerIndex: 2,
      explanation: {
        zh: '以列车（或乘客自己）为参照物，树木的位置不断向后变化，所以看起来在向后退。若以地面为参照物，树木是静止的；树木不能作为自己的参照物。',
        en: 'Relative to the train (or the passenger himself), the trees’ positions keep shifting backwards, so they appear to recede. Relative to the ground the trees are at rest; an object cannot be its own reference frame.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '关于运动和静止，下列说法正确的是哪一项？',
        en: 'Which statement about motion and rest is correct?',
      },
      options: {
        zh: [
          '绝对静止的物体是存在的，例如楼房',
          '选择不同的参照物，对同一物体运动状态的描述一定不同',
          '不选定参照物，也能确定物体是运动还是静止',
          '运动和静止是相对的，判断时必须选定参照物',
        ],
        en: [
          'Absolutely stationary objects exist, such as buildings',
          'Choosing different reference frames always gives different descriptions of the same object’s motion',
          'We can tell whether an object moves without choosing any reference frame',
          'Motion and rest are relative; a reference frame must be chosen to judge them',
        ],
      },
      answerIndex: 3,
      explanation: {
        zh: '楼房相对地面静止，但相对太阳是运动的，绝对静止的物体不存在；不同参照物也可能得出相同结论（如地面和静止的汽车）；不选参照物谈运动状态是没有意义的。',
        en: 'A building is at rest relative to the ground but moves with the Earth relative to the Sun, so absolute rest does not exist; different frames can also give the same description (e.g. the ground and a parked car); and talking about motion without a reference frame is meaningless.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '两列动车在平行轨道上沿同一方向以相同速度并排行驶，以其中一列动车为参照物，另一列动车处于什么状态？',
        en: 'Two high-speed trains run side by side on parallel tracks in the same direction at the same speed. Relative to one train, what is the state of the other?',
      },
      options: {
        zh: ['向前运动', '向后运动', '静止', '无法判断'],
        en: ['Moving forwards', 'Moving backwards', 'At rest', 'Cannot be determined'],
      },
      answerIndex: 2,
      explanation: {
        zh: '两列车速度的大小和方向都相同，它们之间的位置不发生变化，因此彼此相对静止——这正是“相对静止”的条件，空中加油利用的就是这个原理。',
        en: 'The two trains have the same speed in the same direction, so their relative position never changes and they are at rest relative to each other — the condition for relative rest, the same principle used in mid-air refuelling.',
      },
    },
  ],
  related: ['igcse-0625-1-2-motion', 'phy-kinematics-velocity', 'phy-motion-001'],
};
