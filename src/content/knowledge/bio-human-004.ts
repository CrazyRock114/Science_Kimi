import type { KnowledgePoint } from '../types';

export const bioHuman004: KnowledgePoint = {
  id: 'bio-human-004',
  subject: 'biology',
  title: { zh: '神经调节：反射与反射弧', en: 'Nervous Control: Reflexes and the Reflex Arc' },
  summary: {
    zh: '认识神经元的结构与功能，理解神经调节的基本方式——反射，掌握反射弧的五个环节以及非条件反射与条件反射的区别。',
    en: 'Learn the structure of neurones, understand the reflex as the basic unit of nervous control, and master the five components of the reflex arc and the difference between simple and conditioned reflexes.',
  },
  gradeTier: 'both',
  syllabus: {
    pep: ['pep-bio-j7b/ch1'],
    igcse: ['0610/14'],
  },
  keywords: {
    zh: ['神经元', '反射', '反射弧', '感受器', '传入神经', '神经中枢', '传出神经', '效应器', '非条件反射', '条件反射'],
    en: ['neurone', 'reflex', 'reflex arc', 'receptor', 'sensory neurone', 'relay neurone', 'motor neurone', 'effector', 'synapse', 'central nervous system', 'simple reflex', 'conditioned reflex'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '神经系统的组成与神经元' },
      {
        type: 'paragraph',
        text: '神经系统由脑、脊髓和它们所发出的神经组成。脑和脊髓是神经系统的中枢部分，组成中枢神经系统；脑神经和脊神经是周围部分，组成周围神经系统。神经元（神经细胞）是神经系统结构和功能的基本单位，由细胞体和突起（树突和轴突）构成，能接受刺激、产生并传导神经冲动。神经冲动沿“树突 → 细胞体 → 轴突”的方向传导。',
      },
      { type: 'heading', text: '反射：神经调节的基本方式' },
      {
        type: 'paragraph',
        text: '人体通过神经系统，对外界或内部的各种刺激所发生的有规律的反应，叫做反射。反射是神经调节的基本方式，能够使人体迅速、准确地适应环境变化，如手碰到烫的物体立即缩回、强光下瞳孔缩小、食物入口分泌唾液等。',
      },
      { type: 'heading', text: '反射弧：完成反射的结构基础' },
      {
        type: 'paragraph',
        text: '反射必须通过完整的反射弧才能完成。反射弧由五个环节组成，神经冲动的传导途径是：感受器（接受刺激、产生冲动）→ 传入神经（把冲动传到神经中枢）→ 神经中枢（在脊髓或脑中，对信息进行分析综合）→ 传出神经（把指令传到效应器）→ 效应器（肌肉或腺体，作出反应）。反射弧任何一环受损，反射都不能完成；神经中枢受损时，即使感受器、效应器完好，反射也会消失。',
      },
      {
        type: 'formula',
        latex: '\\text{感受器} \\rightarrow \\text{传入神经} \\rightarrow \\text{神经中枢} \\rightarrow \\text{传出神经} \\rightarrow \\text{效应器}',
        caption: '反射弧中神经冲动的传导方向',
      },
      { type: 'heading', text: '非条件反射与条件反射' },
      {
        type: 'paragraph',
        text: '生来就有、不需要学习的反射叫做非条件反射（简单反射），神经中枢一般位于脊髓或脑干，如膝跳反射、缩手反射、眨眼反射，是适应环境的基本能力。通过长期生活经验的积累、在非条件反射的基础上形成的反射叫做条件反射（复杂反射），神经中枢位于大脑皮层，如望梅止渴、听到铃声进教室。条件反射可以建立也可以消退，大大提高了人和动物适应环境的能力；人类还能对语言、文字等抽象信号建立条件反射，这是人类特有的。',
      },
      {
        type: 'list',
        items: [
          '膝跳反射：叩击膝盖下方韧带，小腿突然抬起，中枢在脊髓，属于非条件反射。',
          '缩手反射：手触烫物先缩回、后感觉到烫，因为冲动先经脊髓引起反射，再上传到大脑皮层形成感觉。',
          '望梅止渴：由具体信号（梅子的形状、颜色）引起的条件反射；谈梅止渴则是由语言文字引起的人类特有的条件反射。',
        ],
      },
      { type: 'heading', text: '反射的意义' },
      {
        type: 'paragraph',
        text: '反射弧的传导速度极快，许多保护性反射（如缩手、眨眼）不经过大脑思考即可完成，最大限度减少伤害；条件反射则使机体能“预见”环境变化并提前作出反应。神经调节反应迅速、定位准确、作用时间短暂，与体液调节（激素调节）的缓慢而持久相互配合，共同维持人体的稳态。',
      },
    ],
    en: [
      { type: 'heading', text: 'The nervous system and the neurone' },
      {
        type: 'paragraph',
        text: 'The nervous system consists of the central nervous system (CNS — the brain and spinal cord) and the peripheral nervous system (the nerves connecting the CNS to the rest of the body). Its structural and functional unit is the neurone: a cell body with dendrites that receive impulses and a long axon that conducts them away. Impulses travel dendrite → cell body → axon. Sensory neurones carry impulses from receptors to the CNS, relay neurones pass them within the CNS, and motor neurones carry them from the CNS to effectors.',
      },
      { type: 'heading', text: 'The reflex: the basic unit of nervous control' },
      {
        type: 'paragraph',
        text: 'A reflex is a rapid, automatic, involuntary response to a stimulus, coordinated by the nervous system. Reflexes allow the body to react quickly and protectively without conscious thought — withdrawing a hand from a hot object, the pupil constricting in bright light, saliva flowing when food enters the mouth.',
      },
      { type: 'heading', text: 'The reflex arc: the structural basis of a reflex' },
      {
        type: 'paragraph',
        text: 'Every reflex depends on a complete reflex arc of five components: receptor (detects the stimulus) → sensory neurone (carries the impulse to the CNS) → relay neurone in the spinal cord or brain (passes the impulse on, across synapses) → motor neurone (carries the impulse to the effector) → effector (a muscle that contracts or a gland that secretes). If any link is damaged, the reflex cannot occur; if the centre in the CNS is damaged, the reflex is lost even though receptor and effector are intact.',
      },
      {
        type: 'formula',
        latex: '\\text{receptor} \\rightarrow \\text{sensory neurone} \\rightarrow \\text{relay neurone} \\rightarrow \\text{motor neurone} \\rightarrow \\text{effector}',
        caption: 'Pathway of the impulse in a reflex arc',
      },
      { type: 'heading', text: 'Simple and conditioned reflexes' },
      {
        type: 'paragraph',
        text: 'A simple (unconditioned) reflex is inborn and needs no learning; its centre lies in the spinal cord or brain stem, as in the knee-jerk and withdrawal reflexes. A conditioned reflex is acquired through experience on the basis of simple reflexes, with its centre in the cerebral cortex — for example, salivating at the sight of a favourite food. Conditioned reflexes can be formed, reinforced or extinguished, greatly increasing the ability to adapt. In humans, spoken and written words can themselves act as signals — a capacity unique to our species.',
      },
      {
        type: 'list',
        items: [
          'Knee-jerk reflex: a tap below the kneecap makes the lower leg kick out; the centre is in the spinal cord — a simple reflex.',
          'Withdrawal reflex: the hand pulls back from a hot object before pain is felt, because the impulse triggers the reflex in the spinal cord and only then travels up to the brain.',
          'The synapse: a junction between neurones where the impulse is transmitted by chemical transmitter molecules diffusing across a tiny gap.',
        ],
      },
      { type: 'heading', text: 'Why reflexes matter' },
      {
        type: 'paragraph',
        text: 'Conduction along a reflex arc is extremely fast, and protective reflexes are completed without involving conscious thought, minimising injury. Nervous control is rapid, precisely targeted and short-lived, complementing the slower, longer-lasting control by hormones; together they coordinate the body’s activities and maintain a stable internal environment.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '神经冲动在反射弧中的传导途径是（　）',
        en: 'The pathway of a nerve impulse along a reflex arc is',
      },
      options: {
        zh: [
          '感受器 → 传入神经 → 神经中枢 → 传出神经 → 效应器',
          '效应器 → 传出神经 → 神经中枢 → 传入神经 → 感受器',
          '感受器 → 传出神经 → 神经中枢 → 传入神经 → 效应器',
          '感受器 → 传入神经 → 效应器 → 传出神经 → 神经中枢',
        ],
        en: [
          'receptor → sensory neurone → relay neurone (CNS) → motor neurone → effector',
          'effector → motor neurone → CNS → sensory neurone → receptor',
          'receptor → motor neurone → CNS → sensory neurone → effector',
          'receptor → sensory neurone → effector → motor neurone → CNS',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '冲动由感受器产生，经传入神经传到神经中枢，再经传出神经到达效应器引起反应。选 B 是把方向完全弄反；选 C 混淆了传入与传出神经；选 D 中冲动不可能绕过神经中枢直接到效应器。',
        en: 'The impulse starts at the receptor, travels along the sensory neurone to the relay neurone in the CNS, then along the motor neurone to the effector. B reverses the whole pathway; C confuses sensory with motor neurones; in D the impulse cannot bypass the CNS and reach the effector directly.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '手被烫后，往往是先缩回手、后感觉到烫。这一现象说明（　）',
        en: 'When you touch something hot, the hand withdraws before you feel the heat. This shows that',
      },
      options: {
        zh: [
          '缩手反射的中枢在脊髓，神经冲动先完成反射、再上传到大脑皮层形成感觉',
          '感觉在大脑皮层产生，所以先有感觉后有反射',
          '缩手反射的中枢在大脑皮层，反应比感觉快',
          '传入神经受损，所以感觉出现得晚',
        ],
        en: [
          'the withdrawal reflex is centred in the spinal cord; the impulse completes the reflex first and is then relayed up to the cortex, where the sensation forms',
          'sensation forms in the cortex, so feeling must come before the reflex',
          'the withdrawal reflex is centred in the cerebral cortex and is simply faster than sensation',
          'the sensory neurone is damaged, which delays the sensation',
        ],
      },
      answerIndex: 0,
      explanation: {
        zh: '缩手反射是非条件反射，中枢在脊髓，传导路径短，反应快；形成烫的感觉需要冲动沿脊髓上行到大脑皮层，路径长、耗时多，所以先缩手后感觉烫。B 与实际顺序相反；C 错在把中枢说成大脑皮层；D 错，该过程中传入神经是完好的。',
        en: 'The withdrawal reflex is a simple reflex centred in the spinal cord — a short, fast pathway. Feeling the heat requires the impulse to ascend to the cerebral cortex, a longer, slower route, so withdrawal comes first. B inverts the order; C wrongly places the centre in the cortex; in D the sensory neurone is intact.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '下列反射中，属于人类特有的条件反射的是（　）',
        en: 'Which of the following is a conditioned reflex unique to humans?',
      },
      options: {
        zh: ['吃到酸梅分泌唾液', '看到酸梅分泌唾液', '听到别人谈论酸梅时分泌唾液', '膝跳反射'],
        en: [
          'salivating when tasting a sour plum',
          'salivating at the sight of a sour plum',
          'salivating on hearing people talk about sour plums',
          'the knee-jerk reflex',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '吃酸梅分泌唾液是生来就有的非条件反射，故 A 错；看到酸梅分泌唾液是由具体信号引起的条件反射，人和动物都可能形成，故 B 排除；对语言、文字等抽象信号建立条件反射是人类特有的，故选 C；膝跳反射是非条件反射，故 D 错。',
        en: 'Salivating on tasting a sour plum is an inborn simple reflex (A wrong). Salivating at the sight of the fruit is a conditioned reflex to a concrete signal, which animals can also form (B excluded). Responding to spoken or written words — abstract signals — is unique to humans (C correct). The knee-jerk is a simple reflex (D wrong).',
      },
    },
  ],
};
