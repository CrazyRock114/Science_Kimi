import type { KnowledgePoint } from '../types';

export const bioHealth002: KnowledgePoint = {
  id: 'bio-health-002',
  subject: 'biology',
  title: { zh: '免疫与计划免疫', en: 'Immunity and Planned Immunisation' },
  summary: {
    zh: '认识人体的三道防线，区分非特异性免疫与特异性免疫，理解抗原与抗体的关系，了解免疫的功能、疫苗的原理和计划免疫的意义。',
    en: 'Explore the body’s three lines of defence, distinguish non-specific from specific immunity, understand antigens and antibodies, and see how vaccines and planned immunisation programmes protect whole populations.',
  },
  gradeTier: 'middle',
  syllabus: {
    pep: ['pep-bio-j8b/ch2'],
    igcse: ['0610/10.1'],
  },
  keywords: {
    zh: ['免疫', '三道防线', '非特异性免疫', '特异性免疫', '抗原', '抗体', '疫苗', '计划免疫'],
    en: ['immunity', 'lines of defence', 'non-specific immunity', 'specific immunity', 'antigen', 'antibody', 'vaccine', 'immunisation'],
  },
  theory: {
    zh: [
      { type: 'heading', text: '学习目标' },
      {
        type: 'list',
        items: [
          '说出人体三道防线的组成和作用，区分非特异性免疫与特异性免疫。',
          '说明抗原和抗体的概念，解释抗原刺激淋巴细胞产生抗体的过程。',
          '概述免疫的功能，解释疫苗预防传染病的原理和计划免疫的意义。',
        ],
      },
      { type: 'heading', text: '人体的三道防线' },
      {
        type: 'list',
        items: [
          '第一道防线：皮肤和黏膜。它们能够阻挡大多数病原体侵入人体，分泌物（如胃酸、呼吸道黏液）还有杀菌或黏附清扫病原体的作用。',
          '第二道防线：体液中的杀菌物质（如溶菌酶，能溶解细菌的细胞壁）和吞噬细胞（一种白细胞，能包围、吞噬和消化病原体）。',
          '第三道防线：免疫器官（胸腺、淋巴结和脾脏等）和免疫细胞（淋巴细胞，属于白细胞）。淋巴细胞受到抗原刺激后产生抗体，专门消灭特定的病原体。',
        ],
      },
      { type: 'heading', text: '非特异性免疫与特异性免疫' },
      {
        type: 'paragraph',
        text: '第一道和第二道防线是人生来就有的，不针对某一种特定的病原体，而是对多种病原体都有防御作用，叫做非特异性免疫（又称先天性免疫）。第三道防线是人体在出生以后逐渐建立起来的，只针对某一特定的病原体或异物起作用，叫做特异性免疫（又称后天性免疫或获得性免疫）。',
      },
      {
        type: 'list',
        items: [
          '非特异性免疫：生来就有；对多种病原体起作用；由第一、二道防线完成。',
          '特异性免疫：出生后才产生；只针对特定的病原体；由第三道防线（免疫器官和免疫细胞）完成。',
        ],
      },
      { type: 'heading', text: '抗原与抗体' },
      {
        type: 'paragraph',
        text: '引起人体产生抗体的物质（如病原体、花粉、移植的器官等异物）叫做抗原。当病原体侵入人体后，刺激淋巴细胞产生一种抵抗该病原体的特殊蛋白质，叫做抗体。一定的抗体能与一定的抗原结合，从而促进吞噬细胞的吞噬作用，将抗原清除。抗体具有专一性：一种抗体通常只针对一种抗原起作用。抗体产生后还能在体内留存一段时间，再次遇到同样抗原时反应更快、更强。',
      },
      { type: 'heading', text: '免疫的功能' },
      {
        type: 'list',
        items: [
          '防御感染：抵抗抗原的侵入，防止疾病的产生。',
          '自身稳定：清除体内衰老、死亡和损伤的细胞。',
          '免疫监视：监视、识别和清除体内产生的异常细胞（如肿瘤细胞）。',
          '免疫并不总是对人体有益：器官移植时会产生排斥反应；免疫功能过强时，某些物质会引起过敏反应。',
        ],
      },
      { type: 'heading', text: '疫苗与计划免疫' },
      {
        type: 'paragraph',
        text: '疫苗通常是用失活的或减毒的病原体制成的生物制品。接种后，疫苗作为抗原刺激淋巴细胞产生相应的抗体，人不会因此得病，却获得了对该传染病的抵抗力——这属于特异性免疫。计划免疫是根据某些传染病的发生规律，将各种安全有效的疫苗，按照科学的免疫程序，有计划地给儿童接种，以达到预防、控制和消灭相应传染病的目的。例如接种卡介苗预防结核病、口服脊髓灰质炎糖丸预防脊髓灰质炎。当人群中接种者的比例足够高时，病原体难以传播，还能间接保护未接种者。',
      },
      { type: 'heading', text: '艾滋病与免疫' },
      {
        type: 'paragraph',
        text: '艾滋病（AIDS）是由人类免疫缺陷病毒（HIV）引起的传染病。HIV 主要侵犯并瓦解人体的免疫系统，使人体丧失抵御各种疾病的能力。它通过血液、性接触和母婴途径传播，握手、共餐、蚊虫叮咬等日常接触不会传播。',
      },
      { type: 'heading', text: '术语表' },
      {
        type: 'list',
        items: [
          'antigen（抗原）：能引起人体产生抗体的物质，如病原体表面的成分、异物。',
          'antibody（抗体）：淋巴细胞受抗原刺激后产生的、能抵抗该抗原的特殊蛋白质。',
          'non-specific immunity（非特异性免疫）：生来就有、对多种病原体起作用的免疫，由第一、二道防线完成。',
          'specific immunity（特异性免疫）：出生后获得、只针对特定抗原的免疫，由第三道防线完成。',
          'vaccine（疫苗）：用失活或减毒的病原体制成的、能使人体产生抗体的生物制品。',
          'lymphocyte（淋巴细胞）：产生抗体的免疫细胞，属于白细胞。',
        ],
      },
    ],
    en: [
      { type: 'heading', text: 'Learning objectives' },
      {
        type: 'list',
        items: [
          'Describe the body’s three lines of defence and distinguish non-specific from specific immunity.',
          'Define antigen and antibody, and explain how an antigen stimulates lymphocytes to produce antibodies.',
          'Outline the functions of the immune system, and explain how vaccines and planned immunisation programmes work.',
        ],
      },
      { type: 'heading', text: 'The three lines of defence' },
      {
        type: 'list',
        items: [
          'First line: the skin and mucous membranes. They block most pathogens, and their secretions (such as stomach acid and mucus in the airways) kill or trap and sweep out pathogens.',
          'Second line: antimicrobial substances in body fluids (such as lysozyme, which dissolves bacterial cell walls) and phagocytes — white blood cells that surround, engulf and digest pathogens.',
          'Third line: the immune organs (thymus, lymph nodes, spleen) and immune cells (lymphocytes, a type of white blood cell). Stimulated by an antigen, lymphocytes produce antibodies that target one specific pathogen.',
        ],
      },
      { type: 'heading', text: 'Non-specific and specific immunity' },
      {
        type: 'paragraph',
        text: 'The first and second lines of defence are present from birth. They do not target one particular pathogen but act against many — this is non-specific (innate) immunity. The third line develops after birth and acts only against a specific pathogen or foreign substance — this is specific (acquired) immunity.',
      },
      {
        type: 'list',
        items: [
          'Non-specific immunity: present at birth; acts against many pathogens; carried out by the first and second lines of defence.',
          'Specific immunity: acquired after birth; acts only against a particular pathogen; carried out by the third line (immune organs and immune cells).',
        ],
      },
      { type: 'heading', text: 'Antigens and antibodies' },
      {
        type: 'paragraph',
        text: 'A substance that causes the body to produce antibodies — such as a pathogen, pollen or a transplanted organ — is an antigen. When a pathogen enters the body, it stimulates lymphocytes to make an antibody: a special protein that resists that particular pathogen. An antibody binds to its matching antigen, helping phagocytes to engulf and clear it. Antibodies are specific: one antibody usually acts against only one antigen. Antibodies also persist in the body for some time, so a second encounter with the same antigen triggers a faster, stronger response.',
      },
      { type: 'heading', text: 'Functions of the immune system' },
      {
        type: 'list',
        items: [
          'Defence against infection: resisting invading antigens and preventing disease.',
          'Self-stability: clearing aged, dead and damaged cells from the body.',
          'Immune surveillance: detecting and destroying abnormal cells (such as tumour cells).',
          'Immunity is not always beneficial: transplanted organs can be rejected, and an over-reactive immune system causes allergies.',
        ],
      },
      { type: 'heading', text: 'Vaccines and planned immunisation' },
      {
        type: 'paragraph',
        text: 'A vaccine is usually made from a dead or weakened (attenuated) pathogen. After vaccination it acts as an antigen, stimulating lymphocytes to produce the matching antibodies — the person does not fall ill but gains resistance to that disease, an example of specific immunity. Planned immunisation means giving children safe, effective vaccines on a scientific schedule, in step with how each disease spreads, in order to prevent, control and eventually eliminate it. Examples are the BCG vaccine against tuberculosis and the oral polio vaccine. When a high enough proportion of a population is vaccinated, the pathogen cannot spread easily, which also indirectly protects the unvaccinated.',
      },
      { type: 'heading', text: 'AIDS and the immune system' },
      {
        type: 'paragraph',
        text: 'AIDS is an infectious disease caused by the human immunodeficiency virus (HIV). HIV invades and breaks down the immune system, leaving the body unable to resist other diseases. It is transmitted through blood, sexual contact and from mother to child; everyday contact such as handshakes, sharing meals or mosquito bites does not spread it.',
      },
      { type: 'heading', text: 'Glossary' },
      {
        type: 'list',
        items: [
          'antigen (抗原): a substance that triggers the production of antibodies, e.g. components on a pathogen’s surface.',
          'antibody (抗体): a special protein made by lymphocytes in response to an antigen, which acts against that antigen.',
          'non-specific immunity (非特异性免疫): immunity present from birth that acts against many pathogens — the first and second lines of defence.',
          'specific immunity (特异性免疫): immunity acquired after birth that targets a particular antigen — the third line of defence.',
          'vaccine (疫苗): a preparation of dead or weakened pathogen that stimulates the body to make antibodies.',
          'lymphocyte (淋巴细胞): the immune cell, a white blood cell, that produces antibodies.',
        ],
      },
    ],
  },
  quiz: [
    {
      id: 'q1',
      question: {
        zh: '皮肤阻挡病原体、体液中的溶菌酶溶解细菌，这两种防御作用属于（　）',
        en: 'The skin blocking pathogens and lysozyme in body fluids dissolving bacteria are both examples of',
      },
      options: {
        zh: [
          '第一道防线、特异性免疫',
          '第一、二道防线、非特异性免疫',
          '第三道防线、特异性免疫',
          '第二、三道防线、特异性免疫',
        ],
        en: [
          'the first line of defence; specific immunity',
          'the first and second lines of defence; non-specific immunity',
          'the third line of defence; specific immunity',
          'the second and third lines of defence; specific immunity',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '皮肤和黏膜是第一道防线，体液中的杀菌物质（溶菌酶）和吞噬细胞是第二道防线；这两道防线生来就有、对多种病原体起作用，属于非特异性免疫。只有第三道防线（免疫器官和免疫细胞产生抗体）才是特异性免疫，故其余选项错在把这两道防线归入特异性免疫或第三道防线。',
        en: 'Skin and mucous membranes form the first line, and antimicrobial substances (lysozyme) plus phagocytes the second; both are present from birth and act against many pathogens, so they are non-specific immunity. Only the third line (immune organs and cells producing antibodies) is specific — every other option wrongly assigns these defences to specific immunity or to the third line.',
      },
    },
    {
      id: 'q2',
      question: {
        zh: '下列关于抗原和抗体的叙述，正确的是（　）',
        en: 'Which statement about antigens and antibodies is correct?',
      },
      options: {
        zh: [
          '抗原一定是侵入人体的病原体',
          '一种抗体可以抵抗多种不同的病原体',
          '抗体是淋巴细胞受抗原刺激后产生的特殊蛋白质',
          '抗体产生后马上被分解，不会留在体内',
        ],
        en: [
          'An antigen must be a pathogen that has invaded the body',
          'One kind of antibody can act against many different pathogens',
          'An antibody is a special protein produced by lymphocytes after stimulation by an antigen',
          'Antibodies are broken down at once and never remain in the body',
        ],
      },
      answerIndex: 2,
      explanation: {
        zh: '抗体是淋巴细胞受到抗原刺激后产生的、能抵抗该抗原的特殊蛋白质，C 正确。抗原是能引起人体产生抗体的物质，花粉、移植器官等异物也可以是抗原，不一定是病原体，A 错；抗体具有专一性，一种抗体通常只针对一种抗原，B 错；抗体产生后能在体内留存一段时间，这正是接种疫苗能获得持久免疫力的原因之一，D 错。',
        en: 'An antibody is a special protein made by lymphocytes after stimulation by an antigen, so C is correct. Antigens are any substances that trigger antibody production — pollen or transplanted organs can be antigens too, so A is wrong. Antibodies are specific: one antibody usually targets one antigen, so B is wrong. Antibodies persist in the body for some time — one reason vaccination gives lasting protection — so D is wrong.',
      },
    },
    {
      id: 'q3',
      question: {
        zh: '儿童接种卡介苗后能预防结核病。从免疫的角度看，这种免疫属于（　）',
        en: 'Children vaccinated with BCG become protected against tuberculosis. In terms of immunity, this protection is',
      },
      options: {
        zh: [
          '非特异性免疫，因为疫苗能杀死多种病原体',
          '特异性免疫，因为接种后人体产生了针对该病原体的抗体',
          '第一道防线的作用，因为疫苗增强了皮肤的屏障功能',
          '自然获得的免疫，与抗原、抗体无关',
        ],
        en: [
          'non-specific immunity, because vaccines kill many kinds of pathogens',
          'specific immunity, because vaccination makes the body produce antibodies against that pathogen',
          'the first line of defence, because the vaccine strengthens the skin barrier',
          'natural immunity, unrelated to antigens and antibodies',
        ],
      },
      answerIndex: 1,
      explanation: {
        zh: '疫苗（失活或减毒的病原体）作为抗原刺激淋巴细胞产生相应的抗体，只针对该种病原体起作用，属于特异性免疫。A 错在疫苗本身并不"杀"病原体，且作用是专一的；C 错，疫苗与皮肤、黏膜的屏障作用无关；D 错，接种疫苗正是通过抗原—抗体反应获得的免疫，只是病原体是人为引入的。',
        en: 'The vaccine (a dead or weakened pathogen) acts as an antigen, stimulating lymphocytes to make matching antibodies that act only against that pathogen — specific immunity. A is wrong because the vaccine itself does not "kill" pathogens, and the response is specific. C is wrong because vaccination has nothing to do with the skin barrier. D is wrong because vaccination works precisely through the antigen–antibody response; the pathogen is simply introduced deliberately.',
      },
    },
  ],
  examPractice: [
    {
      id: 'ep-vaccination-herd-immunity',
      syllabus: ['0610/10.1.11', '0610/10.1.12'],
      tier: 'supplement',
      commandWord: 'Explain',
      marks: 4,
      stem: 'Explain how vaccination protects a person against a disease, and how vaccinating most of a population protects those who have not been vaccinated.',
      markScheme: [
        {
          text: 'The vaccine contains a weakened or dead pathogen, or its antigens, which cannot cause the disease',
          marks: 1,
        },
        {
          text: 'Lymphocytes recognise the antigens and produce antibodies, exactly as in a real infection',
          marks: 1,
        },
        {
          text: 'Memory cells remain, so a later infection by the real pathogen produces a rapid secondary response before symptoms develop',
          marks: 1,
        },
        {
          text: 'If most of the population is immune the pathogen cannot pass easily from host to host, so it does not spread to the unvaccinated',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '最后一分讲的是"传播"，不是个体。另外，疫苗并不是"给你抗体"——它是让你自己产生抗体。',
        en: 'The last mark is about transmission, not about the individual. And a vaccine does not "give you antibodies" — it makes you produce your own.',
      },
    },
    {
      id: 'ep-antibody-secondary-response',
      syllabus: ['0610/10.1.10', '0610/10.1.11'],
      tier: 'supplement',
      commandWord: 'Explain',
      marks: 4,
      stem: 'A graph shows antibody concentration after a first exposure to a pathogen and after a second exposure to the same pathogen. Describe the differences between the two responses and explain what causes them.',
      markScheme: [
        {
          text: 'The second response begins sooner — antibodies appear after a much shorter delay',
          marks: 1,
        },
        {
          text: 'It reaches a much higher concentration of antibodies',
          marks: 1,
        },
        {
          text: 'and the antibodies remain at a raised level for longer',
          marks: 1,
        },
        {
          text: 'because memory cells produced during the first response are already present, already specific to that antigen, and can divide and produce antibodies immediately',
          marks: 1,
        },
      ],
      examinerNote: {
        zh: '三点差异加一个原因。学生常常只写"更强"就停下了——"更快"和"更持久"是各自独立的得分点。',
        en: 'Three differences and one cause. Students routinely give "it is bigger" and stop — faster and longer are separate marks.',
      },
    },
  ],
  related: ['bio-health-001', 'bio-health-003', 'igcse-0610-10-1-disease-immunity'],
};
