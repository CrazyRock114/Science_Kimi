import { lensKernel } from '../../simulations/kernels/lens';
import type { KnowledgePoint } from '../types';

export const phyOptics002: KnowledgePoint = {
  id: 'phy-optics-002',
  subject: 'physics',
  title: { zh: '凸透镜成像', en: 'Image Formation by a Convex Lens' },
  summary: {
    zh: '用薄透镜公式探究物距如何决定凸透镜所成像的位置、大小与虚实，理解照相机、投影仪和放大镜的原理。',
    en: 'Use the thin lens equation to explore how object distance determines the position, size and nature of the image formed by a convex lens, and understand cameras, projectors and magnifying glasses.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8a/ch5'],
    igcse: ['0625/3.2'],
  },
  keywords: {
    zh: ['凸透镜', '焦距', '物距', '像距', '实像', '虚像', '放大率', '照相机', '投影仪', '放大镜'],
    en: ['convex lens', 'focal length', 'object distance', 'image distance', 'real image', 'virtual image', 'magnification', 'camera', 'projector', 'magnifying glass'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '凸透镜与焦点' },
      {
        type: 'paragraph',
        text: '凸透镜中间厚、边缘薄，对光有会聚作用。平行于主光轴的光经凸透镜后会聚于焦点 F，光心到焦点的距离叫做焦距 f。物距 u 是物体到光心的距离，像距 v 是像到光心的距离。',
      },
      { type: 'formula', latex: '\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}', caption: '薄透镜公式（实像 v > 0，虚像 v < 0）' },
      { type: 'formula', latex: 'm = -\\dfrac{v}{u}', caption: '放大率：|m| 为放大倍数，m < 0 表示倒立' },
      { type: 'heading', text: '物距决定成像性质' },
      {
        type: 'paragraph',
        text: '物体在不同位置时，凸透镜所成的像性质不同。核心分界点是焦点 F 和二倍焦距点 2F：物距大于焦距成实像（倒立，可用光屏承接），物距小于焦距成虚像（正立，只能用眼睛透过透镜观察）。',
      },
      {
        type: 'list',
        items: [
          'u > 2f：成倒立、缩小的实像，f < v < 2f——照相机的原理。',
          'f < u < 2f：成倒立、放大的实像，v > 2f——投影仪的原理。',
          'u = f：折射光平行射出，不成像（v → ∞）。',
          'u < f：成正立、放大的虚像，像与物在透镜同侧——放大镜的原理。',
        ],
      },
      { type: 'heading', text: '实像与虚像' },
      {
        type: 'paragraph',
        text: '实像是实际光线会聚而成的，倒立，可以呈现在光屏上；虚像是光线的反向延长线会聚而成的，正立，不能用光屏承接。物体越靠近焦点（u 从大于 f 接近 f），实像越远、越大。',
      },
    ],
    en: [
      { type: 'heading', text: 'The convex lens and its focus' },
      {
        type: 'paragraph',
        text: 'A convex lens is thicker in the middle than at the edges and converges light. Rays parallel to the principal axis converge at the principal focus F; the distance from the optical centre to F is the focal length f. The object distance u is measured from the object to the optical centre, and the image distance v from the image to the optical centre.',
      },
      { type: 'formula', latex: '\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}', caption: 'Thin lens equation (real image v > 0, virtual image v < 0)' },
      { type: 'formula', latex: 'm = -\\dfrac{v}{u}', caption: 'Magnification: |m| is the scale factor; m < 0 means inverted' },
      { type: 'heading', text: 'How object distance determines the image' },
      {
        type: 'paragraph',
        text: 'The nature of the image depends on where the object is placed. The key boundaries are the focal point F and the point at twice the focal length 2F: an object beyond F gives a real, inverted image that can be projected on a screen; an object inside F gives a virtual, upright image seen only by looking through the lens.',
      },
      {
        type: 'list',
        items: [
          'u > 2f: real, inverted, diminished image with f < v < 2f — the camera.',
          'f < u < 2f: real, inverted, magnified image with v > 2f — the projector.',
          'u = f: the emergent rays are parallel, so no image is formed (v → ∞).',
          'u < f: virtual, upright, magnified image on the same side as the object — the magnifying glass.',
        ],
      },
      { type: 'heading', text: 'Real and virtual images' },
      {
        type: 'paragraph',
        text: 'A real image is formed where actual rays converge; it is inverted and can be projected on a screen. A virtual image is formed where the backward extensions of rays appear to meet; it is upright and cannot be projected. As the object approaches F from outside, the real image moves further away and grows larger.',
      },
    ],
  },
  simulation: {
    renderer: 'convex-lens',
    params: [
      {
        key: 'focalLength',
        label: { zh: '焦距 f', en: 'Focal length f' },
        min: 5,
        max: 20,
        step: 0.5,
        defaultValue: 10,
        unit: 'cm',
      },
      {
        key: 'objectDistance',
        label: { zh: '物距 u', en: 'Object distance u' },
        min: 3,
        max: 60,
        step: 1,
        defaultValue: 30,
        unit: 'cm',
      },
    ],
    liveFormulas: [
      {
        id: 'thin-lens',
        latex: '\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}',
        substitute: (p) =>
          `\\dfrac{1}{v} = \\dfrac{1}{${p.focalLength}} - \\dfrac{1}{${p.objectDistance}}`,
      },
    ],
  },
  presets: [
    {
      id: 'camera',
      name: { zh: '照相机', en: 'Camera' },
      description: {
        zh: '物距 u = 30 cm 大于二倍焦距，成倒立缩小的实像。',
        en: 'Object at u = 30 cm, beyond 2f: a diminished real image is formed.',
      },
      params: { focalLength: 10, objectDistance: 30 },
    },
    {
      id: 'projector',
      name: { zh: '投影仪', en: 'Projector' },
      description: {
        zh: '物距 u = 15 cm 介于一倍与二倍焦距之间，成倒立放大的实像。',
        en: 'Object at u = 15 cm, between f and 2f: a magnified real image is formed.',
      },
      params: { focalLength: 10, objectDistance: 15 },
    },
    {
      id: 'magnifier',
      name: { zh: '放大镜', en: 'Magnifying glass' },
      description: {
        zh: '物距 u = 6 cm 小于焦距，成正立放大的虚像。',
        en: 'Object at u = 6 cm, inside the focal length: a magnified upright virtual image is formed.',
      },
      params: { focalLength: 10, objectDistance: 6 },
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一个焦距为 10 cm 的凸透镜，物体放在距透镜 30 cm 处，像距是多少？',
        en: 'An object is placed 30 cm from a convex lens of focal length 10 cm. What is the image distance?',
      },
      options: {
        zh: ['10 cm', '15 cm', '20 cm', '30 cm'],
        en: ['10 cm', '15 cm', '20 cm', '30 cm'],
      },
      answerIndex: 1,
      explanation: {
        zh: '由 1/v = 1/f − 1/u = 1/10 − 1/30 = 2/30，得 v = 15 cm。v = 10 cm 是把 v 当成 f 的错误；v = 20 cm 对应 u = 20 cm（u = 2f 时 v = 2f）；v = u = 30 cm 不满足透镜公式。',
        en: 'From 1/v = 1/f − 1/u = 1/10 − 1/30 = 2/30, so v = 15 cm. 10 cm wrongly takes v = f; 20 cm would correspond to u = 2f = 20 cm; v = u = 30 cm does not satisfy the lens equation.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '用焦距 10 cm 的凸透镜作放大镜观察邮票，要想看到正立放大的虚像，邮票应放在：',
        en: 'To use a convex lens of focal length 10 cm as a magnifying glass for viewing a stamp, where should the stamp be placed?',
      },
      options: {
        zh: ['距透镜 6 cm 处', '距透镜 10 cm 处', '距透镜 15 cm 处', '距透镜 30 cm 处'],
        en: ['6 cm from the lens', '10 cm from the lens', '15 cm from the lens', '30 cm from the lens'],
      },
      answerIndex: 0,
      explanation: {
        zh: '只有 u < f 时才成正立放大的虚像，故选 6 cm。u = 10 cm（焦点处）不成像；u = 15 cm 和 u = 30 cm 都大于焦距，成倒立的实像，不能透过透镜直接观察正立像。',
        en: 'An upright magnified virtual image requires u < f, so 6 cm. At u = 10 cm (the focal point) no image is formed; at 15 cm and 30 cm the object is beyond f and the images are real and inverted, not upright images seen through the lens.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '凸透镜成像时，物体从距透镜 30 cm 处移到 15 cm 处（f = 10 cm），所成实像将如何变化？',
        en: 'For a convex lens with f = 10 cm, an object moves from 30 cm to 15 cm. How does the real image change?',
      },
      options: {
        zh: [
          '像距变小，像变小',
          '像距变大，像变大',
          '像距不变，像大小不变',
          '像由实像变成虚像',
        ],
        en: [
          'The image distance decreases and the image shrinks',
          'The image distance increases and the image grows',
          'The image distance and size stay the same',
          'The image changes from real to virtual',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: 'u = 30 cm 时 v = 15 cm、m = −0.5；u = 15 cm 时 v = 30 cm、m = −2。物体靠近透镜（仍大于 f）时像距变大、像变大。物距始终大于焦距，像始终是实像，故不会变成虚像。',
        en: 'At u = 30 cm, v = 15 cm and m = −0.5; at u = 15 cm, v = 30 cm and m = −2. As the object moves closer to the lens (still beyond f), the image moves further away and grows. Since u > f throughout, the image stays real and never becomes virtual.',
      },
    },
  ],
  kernels: {
    lens: lensKernel,
  },
  expectedResults: [
    {
      id: 'probe-camera',
      description: {
        zh: 'f = 10 cm，u = 30 cm（照相机）：v = 15 cm，m = −0.5，倒立实像',
        en: 'f = 10 cm, u = 30 cm (camera): v = 15 cm, m = −0.5, inverted real image',
      },
      kernel: 'lens',
      input: { focalLength: 10, objectDistance: 30 },
      expected: { v: 15, m: -0.5, type: 0 },
    },
    {
      id: 'probe-projector',
      description: {
        zh: 'f = 10 cm，u = 15 cm（投影仪）：v = 30 cm，m = −2，倒立放大实像',
        en: 'f = 10 cm, u = 15 cm (projector): v = 30 cm, m = −2, magnified inverted real image',
      },
      kernel: 'lens',
      input: { focalLength: 10, objectDistance: 15 },
      expected: { v: 30, m: -2, type: 0 },
    },
    {
      id: 'probe-magnifier',
      description: {
        zh: 'f = 10 cm，u = 6 cm（放大镜）：v = −15 cm，m = 2.5，正立放大虚像',
        en: 'f = 10 cm, u = 6 cm (magnifier): v = −15 cm, m = 2.5, upright magnified virtual image',
      },
      kernel: 'lens',
      input: { focalLength: 10, objectDistance: 6 },
      expected: { v: -15, m: 2.5, type: 1 },
    },
  ],
};
