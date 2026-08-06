import type { KnowledgePoint } from '../types';

export const phyPressure001: KnowledgePoint = {
  id: 'phy-pressure-001',
  subject: 'physics',
  title: { zh: '压强', en: 'Pressure' },
  summary: {
    zh: '理解压力的作用效果与压力大小、受力面积的关系，掌握压强的定义式 p = F/S 及增大、减小压强的方法。',
    en: 'Understand how the effect of a force depends on its magnitude and the contact area, and master the defining equation p = F/A together with ways to increase or decrease pressure.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-phy-j8b/ch3'],
    igcse: ['0625/1.8'],
  },
  keywords: {
    zh: ['压强', '压力', '受力面积', '帕斯卡', '增大压强', '减小压强'],
    en: ['pressure', 'force', 'contact area', 'pascal', 'p = F/A'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '压力的作用效果' },
      {
        type: 'paragraph',
        text: '压力是垂直作用在物体表面上的力。探究实验（小桌压在海绵上）表明：压力的作用效果不仅与压力大小有关，还与受力面积有关——压力相同时，受力面积越小，作用效果越明显。',
      },
      { type: 'heading', text: '压强的定义' },
      {
        type: 'paragraph',
        text: '物理学中用压强表示压力的作用效果：物体所受压力的大小与受力面积之比叫做压强。压强越大，压力的作用效果越明显。',
      },
      { type: 'formula', latex: 'p = \\dfrac{F}{S}', caption: 'p 为压强，F 为压力，S 为受力面积' },
      {
        type: 'paragraph',
        text: '压强的单位是帕斯卡，简称帕，符号 Pa，1 Pa = 1 N/m²。一张报纸平摊在桌面上对桌面的压强约为 0.5 Pa；一个成年人站立时对地面的压强约为 1.5 × 10⁴ Pa。',
      },
      { type: 'heading', text: '增大与减小压强的方法' },
      {
        type: 'list',
        items: [
          '增大压强：增大压力或减小受力面积。例如刀刃磨得很薄、图钉尖做得很尖、压路机的碾子质量很大。',
          '减小压强：减小压力或增大受力面积。例如坦克装有宽大的履带、书包用宽背带、铁轨铺在枕木上、滑雪板又长又宽。',
        ],
      },
      {
        type: 'paragraph',
        text: '注意：压力并不总等于重力。只有把物体放在水平面上且不受其他竖直方向的力时，压力大小才等于物体的重力。',
      },
    ],
    en: [
      { type: 'heading', text: 'The effect of a force' },
      {
        type: 'paragraph',
        text: 'A force acting perpendicular to a surface is called a contact force (or thrust). Experiments show that its effect depends not only on the magnitude of the force but also on the area over which it acts: for the same force, a smaller area produces a more obvious effect.',
      },
      { type: 'heading', text: 'Defining pressure' },
      {
        type: 'paragraph',
        text: 'Pressure is defined as the force acting per unit area. The greater the pressure, the more concentrated the effect of the force.',
      },
      { type: 'formula', latex: 'p = \\dfrac{F}{A}', caption: 'p is pressure, F is the force, A is the contact area' },
      {
        type: 'paragraph',
        text: 'The SI unit of pressure is the pascal (Pa): 1 Pa = 1 N/m². A newspaper lying flat on a table exerts about 0.5 Pa, while a standing adult exerts about 1.5 × 10⁴ Pa on the ground.',
      },
      { type: 'heading', text: 'Increasing and decreasing pressure' },
      {
        type: 'list',
        items: [
          'To increase pressure: increase the force or decrease the area. Examples: sharp knife blades, pointed drawing pins, heavy road rollers.',
          'To decrease pressure: decrease the force or increase the area. Examples: wide caterpillar tracks on tanks, wide bag straps, railway sleepers under rails, long wide skis.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Note: the force on a surface does not always equal the weight. Only for an object resting on a horizontal surface with no other vertical forces does the force equal the weight.',
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '一个重 500 N 的物体放在水平桌面上，与桌面的接触面积为 0.05 m²，它对桌面的压强是多少？',
        en: 'An object weighing 500 N rests on a horizontal table with a contact area of 0.05 m². What is the pressure on the table?',
      },
      options: {
        zh: ['25 Pa', '100 Pa', '10000 Pa', '25000 Pa'],
        en: ['25 Pa', '100 Pa', '10000 Pa', '25000 Pa'],
      },
      answerIndex: 2,
      explanation: {
        zh: 'p = F/S = 500 ÷ 0.05 = 10000 Pa。A 错在用 500 × 0.05；B、D 是面积换算或乘除混淆的结果。',
        en: 'p = F/A = 500 ÷ 0.05 = 10000 Pa. Option A wrongly multiplies 500 × 0.05; B and D come from confusing multiplication with division or unit conversion.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列做法中，为了减小压强的是（　）。',
        en: 'Which of the following is intended to decrease pressure?',
      },
      options: {
        zh: ['刀刃磨得很锋利', '坦克安装宽大的履带', '图钉尖做得很尖', '压路机碾子质量很大'],
        en: ['Sharpening a knife blade', 'Fitting a tank with wide caterpillar tracks', 'Making drawing pins very pointed', 'Giving a road roller a very heavy drum'],
      },
      answerIndex: 1,
      explanation: {
        zh: '履带增大了受力面积，在压力一定时减小压强。A、C 是减小受力面积来增大压强；D 是增大压力来增大压强。',
        en: 'Wide tracks increase the contact area, reducing pressure for the same force. A and C decrease the area to increase pressure; D increases the force to increase pressure.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '同一块砖平放和竖放在水平地面上，对地面的压力和压强的变化是（　）。',
        en: 'The same brick is placed flat and then upright on horizontal ground. How do the force and the pressure on the ground change?',
      },
      options: {
        zh: ['压力不变，压强不变', '压力不变，竖放时压强大', '压力变大，压强变大', '压力变小，竖放时压强大'],
        en: ['Force unchanged, pressure unchanged', 'Force unchanged, greater pressure when upright', 'Force increases, pressure increases', 'Force decreases, greater pressure when upright'],
      },
      answerIndex: 1,
      explanation: {
        zh: '砖的重力不变，对水平地面的压力不变；竖放时受力面积变小，由 p = F/S 知压强变大。',
        en: 'The weight, and hence the force on the horizontal ground, is unchanged; upright the contact area is smaller, so p = F/A gives a greater pressure.',
      },
    },
  ],
  related: ['phy-pressure-002', 'igcse-0625-1-6-momentum-pressure', 'phy-force-001'],
};
