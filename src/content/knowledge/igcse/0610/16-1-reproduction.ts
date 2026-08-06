/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/16-1-reproduction
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/16-1-reproduction/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/16-1-reproduction/kernel';

export const kp161Reproduction: KnowledgePoint = {
  "id": "igcse-0610-16-1-reproduction",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "生殖",
    "en": "Reproduction"
  },
  "summary": {
    "zh": "排卵是在下一次月经的前十四天，而不是上一次月经之后的第十四天。把周期调长，看它如何移动。",
    "en": "Ovulation is fourteen days before the next period, not fourteen days after the last one. Lengthen the cycle and watch it move."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/16.1.1",
      "0610/16.1.2",
      "0610/16.1.3",
      "0610/16.2.1",
      "0610/16.2.2",
      "0610/16.2.3",
      "0610/16.2.4",
      "0610/16.3.1",
      "0610/16.3.2",
      "0610/16.3.3",
      "0610/16.3.4",
      "0610/16.3.5",
      "0610/16.3.6",
      "0610/16.3.7",
      "0610/16.3.8",
      "0610/16.3.9",
      "0610/16.3.10",
      "0610/16.3.11",
      "0610/16.3.12",
      "0610/16.4.1",
      "0610/16.4.2",
      "0610/16.4.3",
      "0610/16.4.4",
      "0610/16.4.5",
      "0610/16.4.6",
      "0610/16.4.7",
      "0610/16.4.8",
      "0610/16.4.9",
      "0610/16.4.10",
      "0610/16.5.1",
      "0610/16.5.2",
      "0610/16.5.3",
      "0610/16.5.4",
      "0610/16.6.1",
      "0610/16.6.2",
      "0610/16.6.3",
      "0610/16.6.4",
      "0610/16.6.5"
    ]
  },
  "keywords": {
    "zh": [
      "传粉",
      "受精",
      "合子",
      "黄体",
      "胎盘",
      "顶体",
      "羊水"
    ],
    "en": [
      "pollination",
      "fertilisation",
      "zygote",
      "corpus luteum",
      "placenta",
      "acrosome",
      "amniotic fluid"
    ]
  },
  "theory": {
    "zh": [
      {
        "type": "heading",
        "text": "学习目标"
      },
      {
        "type": "list",
        "items": [
          "描述无性生殖与有性生殖，并讨论各自的优缺点。（Extended）",
          "识别虫媒花的各部分并说出其功能。",
          "描述植物的传粉与受精，以及虫媒花与风媒花的适应特征。",
          "描述自花与异花传粉及其对种群的影响，以及花粉管的生长。（Extended）",
          "识别人体生殖系统各部分，并解释精子与卵细胞的适应性特征。",
          "说出胎盘、脐带与羊膜囊的功能，并描述胎盘处的物质交换。（Extended）",
          "描述并解释月经周期与妊娠的激素调控。（Extended）",
          "描述性传播感染、HIV 的传播途径，以及如何控制其扩散。"
        ]
      },
      {
        "type": "heading",
        "text": "花就是生殖器官"
      },
      {
        "type": "paragraph",
        "text": "雄性部分是雄蕊：产生花粉的花药，由花丝托起。雌性部分是心皮：接受花粉的柱头、支撑它的花柱，以及含有胚珠的子房。围绕它们的是吸引昆虫的花瓣，以及曾保护花蕾的萼片。"
      },
      {
        "type": "paragraph",
        "text": "传粉是花粉由花药转移到柱头。它不是受精——受精发生在之后，当花粉的核与胚珠中的核融合时。把这两个词弄反，是试卷上最常见的错误之一。"
      },
      {
        "type": "paragraph",
        "text": "虫媒花在\"做广告\"：花瓣大而鲜艳、有香气、有花蜜，花药和柱头藏在里面，昆虫必须擦身而过。它的花粉黏或带刺、数量少，以便附着在昆虫身上。"
      },
      {
        "type": "paragraph",
        "text": "风媒花完全不做这些。花瓣小而暗淡甚至没有，无香气、无花蜜。花药悬垂在外承接气流，柱头大而呈羽毛状以捕捉飘过的花粉。它产生大量细小、光滑、轻盈的花粉——因为风不会瞄准。"
      },
      {
        "type": "paragraph",
        "text": "自花传粉是花粉落到同一植株的柱头上；异花传粉则是落到同种的另一植株上。自花传粉可靠——不需要传粉者——但产生的变异较少，因而种群适应得更慢。异花传粉正好相反。"
      },
      {
        "type": "paragraph",
        "text": "花粉落定后，花粉管沿花柱向下生长至子房，把雄性细胞核带入胚珠。种子萌发需要三个条件——水、氧气和适宜的温度。不需要光：大多数种子是在地下的黑暗中萌发的。"
      },
      {
        "type": "heading",
        "text": "为相反任务而生的两种细胞"
      },
      {
        "type": "paragraph",
        "text": "精子必须移动。因此它很小，有一条用来游动的尾，中段密布线粒体以释放游动所需的能量。顶端是顶体，内含能消化卵细胞外层的酶。"
      },
      {
        "type": "paragraph",
        "text": "卵细胞必须\"供养\"。因此它大得多，充满细胞质，其中含有胚胎在植入前赖以生存的养料贮备。一旦有一个精子进入，它的胶质层立即改变，第二个精子便无法进入——否则合子将成为三倍体。"
      },
      {
        "type": "paragraph",
        "text": "数量上也相反：精子数以百万计，一同释放且能自主移动；卵子每月一个，单独排出，由纤毛沿输卵管推送。受精是两个细胞核的融合，发生在输卵管中，而不是子宫里。"
      },
      {
        "type": "paragraph",
        "text": "合子一边向子宫移动一边分裂，到达时已是一团细胞，即胚胎，随后植入子宫内膜。接下来它需要营养，这正是胎盘的作用。"
      },
      {
        "type": "heading",
        "text": "两套永不相接的循环"
      },
      {
        "type": "paragraph",
        "text": "胎盘是母体血液与胎儿血液极为靠近、通过扩散交换物质的地方。氧气、葡萄糖、氨基酸和抗体进入胎儿；二氧化碳和尿素返回母体。"
      },
      {
        "type": "paragraph",
        "text": "虽然靠得很近，却从不混合，这一点很重要。两者的血型可能不同，而母体血液的压力高得多——足以损伤胎儿的血管。脐带负责在胎儿与胎盘之间输送血液。"
      },
      {
        "type": "paragraph",
        "text": "胎儿周围是羊膜囊，内含羊水，可以缓冲外来撞击并支撑胎儿的重量，使其能够均匀生长。"
      },
      {
        "type": "paragraph",
        "text": "但胎盘是筛子，不是墙。有些病原体能够穿过它——风疹病毒、HIV——毒素也能，包括尼古丁、酒精和许多药物。这就是孕妇摄入的东西同样会到达胎儿的原因。"
      },
      {
        "type": "heading",
        "text": "经由这一途径传播的感染"
      },
      {
        "type": "paragraph",
        "text": "性传播感染是通过性接触传播的感染。HIV 是引起这类感染的病原体，未经治疗的 HIV 感染最终可能发展为艾滋病。"
      },
      {
        "type": "paragraph",
        "text": "HIV 通过体液传播：无保护的性接触；血液——共用针具或输入被感染的血液；以及母亲经胎盘、分娩过程或母乳传给孩子。"
      },
      {
        "type": "paragraph",
        "text": "控制的关键在于切断这些途径：使用安全套、输血前筛查血液、使用一次性针具、对感染者进行检测与治疗，以及向公众普及真正的传播方式。"
      },
      {
        "type": "paragraph",
        "text": "HIV 攻击淋巴细胞——正是产生抗体的那类细胞。因此危害并非病毒直接造成，而在于免疫系统再也无法应对其他任何病原体。艾滋病，是其他感染对一个已无力自卫的身体所造成的后果。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "pollination（传粉）：花粉由花药转移到柱头。它不是受精——受精发生在其后，当细胞核融合时。",
          "fertilisation（受精）：两个配子细胞核的融合，形成二倍体合子。在人体中它发生于输卵管。",
          "zygote（合子）：两个单倍体配子核融合后形成的二倍体细胞。它分裂形成胚胎。",
          "corpus luteum（黄体）：排卵后卵泡剩余的部分。它分泌孕激素，若无胚胎植入便会退化。",
          "placenta（胎盘）：母体血液与胎儿血液足够接近以进行扩散交换的器官——但两者从不混合。",
          "acrosome（顶体）：精子的顶端，内含能消化卵细胞外层、开出通路的酶。",
          "amniotic fluid（羊水）：羊膜囊中的液体。它缓冲外来撞击并支撑胎儿的重量。"
        ]
      }
    ],
    "en": [
      {
        "type": "heading",
        "text": "Learning objectives"
      },
      {
        "type": "list",
        "items": [
          "Describe asexual and sexual reproduction, and discuss the advantages and disadvantages of each. (Extended)",
          "Identify the parts of an insect-pollinated flower and state their functions.",
          "Describe pollination and fertilisation in plants, and the adaptations of insect- and wind-pollinated flowers.",
          "Describe self- and cross-pollination and their effects on a population, and the growth of the pollen tube. (Extended)",
          "Identify the parts of the human reproductive systems and explain the adaptive features of sperm and egg cells.",
          "State the functions of the placenta, umbilical cord and amniotic sac, and describe exchange at the placenta. (Extended)",
          "Describe and explain the hormonal control of the menstrual cycle and of pregnancy. (Extended)",
          "Describe sexually transmitted infections, the transmission of HIV, and how their spread is controlled."
        ]
      },
      {
        "type": "heading",
        "text": "A flower is a reproductive organ"
      },
      {
        "type": "paragraph",
        "text": "The male parts are the stamens: an anther, which makes pollen, held up by a filament. The female parts are the carpel: a stigma that catches pollen, a style holding it up, and an ovary containing ovules. Around them, petals to attract insects and sepals that protected the bud."
      },
      {
        "type": "paragraph",
        "text": "Pollination is the transfer of pollen from an anther to a stigma. It is not fertilisation — that comes later, when a pollen nucleus fuses with a nucleus in an ovule. Getting those two words the wrong way round is one of the commonest errors in the paper."
      },
      {
        "type": "paragraph",
        "text": "An insect-pollinated flower advertises: large bright petals, scent, nectar, and anthers and stigma tucked inside where an insect must brush past them. Its pollen is sticky or spiky, in small amounts, so it clings to the insect."
      },
      {
        "type": "paragraph",
        "text": "A wind-pollinated flower does none of that. Small dull petals or none, no scent, no nectar. Anthers dangle outside in the airflow and stigmas are large and feathery to catch what drifts by. And it makes enormous quantities of small, smooth, light pollen — because the wind is not aiming."
      },
      {
        "type": "paragraph",
        "text": "Self-pollination is pollen reaching a stigma of the same plant; cross-pollination is pollen reaching a different plant of the same species. Self-pollination is reliable — no pollinator needed — but it produces less variation, so the population adapts more slowly. Cross-pollination is the opposite trade."
      },
      {
        "type": "paragraph",
        "text": "Once pollen lands, a pollen tube grows down through the style to the ovary, carrying the male nucleus with it into the ovule. And a seed needs three things to germinate — water, oxygen and a suitable temperature. Not light: most seeds germinate underground in the dark."
      },
      {
        "type": "heading",
        "text": "Two cells built for opposite jobs"
      },
      {
        "type": "paragraph",
        "text": "A sperm has to travel. So it is small, it has a tail to swim with, and a middle section packed with mitochondria to release the energy for swimming. At its tip is an acrosome, holding enzymes that digest a way through the egg’s outer layers."
      },
      {
        "type": "paragraph",
        "text": "An egg has to supply. So it is very much larger, full of cytoplasm containing the food store the embryo will live on before it implants. Its jelly coat changes the moment one sperm gets in, so no second one can — otherwise the zygote would be triploid."
      },
      {
        "type": "paragraph",
        "text": "And the numbers are opposite too: millions of sperm, released together and mobile; one egg a month, released alone and moved along the oviduct by cilia. Fertilisation is the fusion of the two nuclei, and it happens in the oviduct, not in the uterus."
      },
      {
        "type": "paragraph",
        "text": "The zygote divides as it travels down to the uterus and arrives as a ball of cells, an embryo, which implants in the uterus lining. And then it needs feeding, which is what the placenta is for."
      },
      {
        "type": "heading",
        "text": "Two circulations that never touch"
      },
      {
        "type": "paragraph",
        "text": "The placenta is where the mother’s blood and the fetus’s blood come very close together and exchange materials by diffusion. Oxygen, glucose, amino acids and antibodies cross to the fetus; carbon dioxide and urea cross back."
      },
      {
        "type": "paragraph",
        "text": "Close together, but never mixed, and that matters. The two may have different blood groups, and the mother’s blood is at a much higher pressure — enough to damage the fetus’s vessels. The umbilical cord carries the blood between fetus and placenta."
      },
      {
        "type": "paragraph",
        "text": "Around the fetus, the amniotic sac holds amniotic fluid, which cushions it against knocks and supports its weight so it can grow evenly."
      },
      {
        "type": "paragraph",
        "text": "But the placenta is a filter, not a wall. Some pathogens cross it — rubella, HIV — and so do toxins including nicotine, alcohol and many drugs. That is why what a pregnant woman takes in reaches the fetus too."
      },
      {
        "type": "heading",
        "text": "Infections that travel this way"
      },
      {
        "type": "paragraph",
        "text": "A sexually transmitted infection is one passed on through sexual contact. HIV is a pathogen that causes one, and an untreated HIV infection may eventually lead to AIDS."
      },
      {
        "type": "paragraph",
        "text": "HIV is transmitted in body fluids: through unprotected sexual contact, through blood — sharing needles, or transfusion of infected blood — and from a mother to her child across the placenta, during birth, or in breast milk."
      },
      {
        "type": "paragraph",
        "text": "Control is about breaking those routes. Condoms, screening blood before transfusion, single-use needles, testing and treating people who are infected, and educating people about how transmission actually happens."
      },
      {
        "type": "paragraph",
        "text": "HIV attacks lymphocytes — the very cells that make antibodies. So the damage is not what the virus does directly; it is that the immune system stops being able to deal with anything else. AIDS is what other infections do to a body that can no longer defend itself."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "pollination (传粉): The transfer of pollen from an anther to a stigma. Not fertilisation — that happens afterwards, when nuclei fuse.",
          "fertilisation (受精): The fusion of the nuclei of two gametes, giving a diploid zygote. In humans it happens in the oviduct.",
          "zygote (合子): The diploid cell formed when two haploid gamete nuclei fuse. It divides to form an embryo.",
          "corpus luteum (黄体): What remains of the follicle after ovulation. It secretes progesterone, and breaks down if no embryo implants.",
          "placenta (胎盘): The organ where the mother’s and the fetus’s blood come close enough to exchange materials by diffusion — without ever mixing.",
          "acrosome (顶体): The tip of a sperm, holding enzymes that digest a path through the outer layers of the egg.",
          "amniotic fluid (羊水): The fluid in the amniotic sac. It cushions the fetus against knocks and supports its weight."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-16-1-cp1",
      "syllabus": [
        "0610/16.5.4"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain how the hormones FSH, oestrogen, LH and progesterone control the menstrual cycle.",
      "markScheme": [
        {
          "text": "FSH from the pituitary gland causes a follicle to develop in the ovary and stimulates the ovary to secrete oestrogen",
          "marks": 1
        },
        {
          "text": "Oestrogen causes the uterus lining to thicken, and when it is high enough it triggers a surge of LH",
          "marks": 1
        },
        {
          "text": "The LH surge causes ovulation — the release of the egg from the follicle",
          "marks": 1
        },
        {
          "text": "Progesterone from the corpus luteum maintains the thickened lining and inhibits FSH and LH",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要把它当作一条因果链来答，而不是四段互不相干的描述。每种激素都应当对下一阶段\"起作用\"。",
        "en": "Answer it as a chain of causes, not four separate descriptions. Each hormone should be doing something *to* the next stage."
      }
    },
    {
      "id": "0610-16-1-cp2",
      "syllabus": [
        "0610/16.5.4"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain why menstruation does not occur if the egg is fertilised and the embryo implants.",
      "markScheme": [
        {
          "text": "The corpus luteum is maintained rather than breaking down, so progesterone stays high",
          "marks": 1
        },
        {
          "text": "Progesterone maintains the thickened uterus lining",
          "marks": 1
        },
        {
          "text": "so the lining is not shed, and it continues to supply the embryo until the placenta takes over",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "机制在于孕激素\"没有下降\"。写\"身体知道自己怀孕了\"只是描述结果，没有说出激素。",
        "en": "The mechanism is progesterone *not falling*. Answers that say \"the body knows it is pregnant\" describe the outcome without naming the hormone."
      }
    },
    {
      "id": "0610-16-1-cp3",
      "syllabus": [
        "0610/16.4.9"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "At the placenta the blood of the mother and the blood of the fetus come very close together but do not mix. Explain why they must not mix, and state two substances that pass from mother to fetus.",
      "markScheme": [
        {
          "text": "The mother’s blood is at a much higher pressure and would damage the fetus’s vessels",
          "marks": 1
        },
        {
          "text": "The two may have different blood groups, so the blood could clot / agglutinate",
          "marks": 1
        },
        {
          "text": "Two from: oxygen, glucose, amino acids, antibodies, water, minerals",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要写\"通过扩散进行交换\"，绝不要写\"血液流过去\"。穿过胎盘的是物质，不是血液。",
        "en": "Say \"exchange by diffusion\", never \"the blood passes across\". Materials cross the placenta; blood does not."
      }
    },
    {
      "id": "0610-16-1-cp4",
      "syllabus": [
        "0610/16.4.4",
        "0610/16.4.5",
        "0610/16.4.6"
      ],
      "tier": "core",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Compare a human sperm cell with a human egg cell, giving three differences and relating each to its function.",
      "markScheme": [
        {
          "text": "The sperm is much smaller and has a tail so that it can swim to the egg; the egg is large and does not move itself",
          "marks": 1
        },
        {
          "text": "The egg has a large amount of cytoplasm containing a food store for the early embryo; the sperm has very little",
          "marks": 1
        },
        {
          "text": "Sperm are produced in millions while one egg is usually released per cycle; or the sperm has an acrosome of enzymes to penetrate the egg",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"把每一点与功能联系起来\"是题目的一部分。只列差异而不给理由，大约只能得一半分。",
        "en": "\"Relating each to its function\" is part of the question. A list of differences with no reasons scores about half."
      }
    },
    {
      "id": "0610-16-1-cp5",
      "syllabus": [
        "0610/16.3.7"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain how the structure of a wind-pollinated flower is adapted for pollination by wind.",
      "markScheme": [
        {
          "text": "Anthers hang outside the flower so that the wind can carry the pollen away",
          "marks": 1
        },
        {
          "text": "Stigmas are large and feathery, giving a large surface area to catch pollen from the air",
          "marks": 1
        },
        {
          "text": "Pollen is produced in very large quantities, because most of it will not land on a stigma",
          "marks": 1
        },
        {
          "text": "Pollen grains are small, light and smooth so that they are carried easily by the wind",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每个特征都要给出理由。只写\"它没有花瓣\"不得分——得分点在于说明没有需要吸引的昆虫。",
        "en": "Every feature needs its reason. \"It has no petals\" alone scores nothing — the mark is for saying there is no insect to attract."
      }
    },
    {
      "id": "0610-16-1-cp6",
      "syllabus": [
        "0610/16.1.3",
        "0610/16.2.4"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 3,
      "stem": "A grower propagates strawberry plants from runners rather than from seed. Suggest one advantage and one disadvantage of this for the grower.",
      "markScheme": [
        {
          "text": "Advantage: the offspring are genetically identical to the parent, so a variety with desirable features is reproduced exactly",
          "marks": 1
        },
        {
          "text": "It is also faster and needs no pollinator or second plant",
          "marks": 1
        },
        {
          "text": "Disadvantage: there is no genetic variation, so a single disease or change in conditions could destroy the whole crop",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "题目要求两面都答，就都要写。而缺点针对的是整片作物，不是说单株植物更弱。",
        "en": "The question asks for both sides, so give both. And the disadvantage is about the whole crop, not about an individual plant being weaker."
      }
    },
    {
      "id": "0610-16-1-cp7",
      "syllabus": [
        "0610/16.6.4",
        "0610/16.6.5"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe two ways in which HIV is transmitted, and describe two methods used to control the spread of the infection.",
      "markScheme": [
        {
          "text": "Two from: unprotected sexual contact; sharing needles; transfusion of infected blood; mother to child across the placenta, during birth or in breast milk",
          "marks": 2
        },
        {
          "text": "Two from: using condoms; screening donated blood; using single-use needles; testing and treating those infected; education about transmission",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "HIV 不通过日常接触传播——共用杯子、握手或咳嗽都不会。写出其中任何一项都会失分。",
        "en": "HIV is not spread by ordinary contact — sharing cups, shaking hands or coughing. Naming one of those loses the mark."
      }
    },
    {
      "id": "0610-16-1-cp8",
      "syllabus": [
        "0610/16.3.5",
        "0610/16.3.12"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe what happens between a pollen grain landing on a stigma and the fertilisation of an ovule.",
      "markScheme": [
        {
          "text": "The pollen grain germinates and a pollen tube grows out of it",
          "marks": 1
        },
        {
          "text": "The pollen tube grows down through the style towards the ovary, carrying the male nucleus",
          "marks": 1
        },
        {
          "text": "It enters an ovule, and the male nucleus fuses with the female nucleus inside it — fertilisation",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "花粉粒本身并不沿花柱下行——是花粉管向下生长并携带细胞核。这个区别值一分。",
        "en": "The pollen grain does not travel down the style — the tube grows down and carries the nucleus. That distinction is worth a mark."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "day",
        "label": {
          "zh": "周期的第几天",
          "en": "Day of the cycle"
        },
        "min": 1,
        "max": 35,
        "step": 1,
        "defaultValue": 14,
        "unit": ""
      },
      {
        "key": "cycleLength",
        "label": {
          "zh": "周期长度",
          "en": "Length of the cycle"
        },
        "min": 21,
        "max": 35,
        "step": 1,
        "defaultValue": 28,
        "unit": "days"
      },
      {
        "key": "pregnant",
        "label": {
          "zh": "卵子是否受精？",
          "en": "Was the egg fertilised?"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "16-1-reproduction",
        "hint": {
          "en": "Step the day through one cycle and follow the lining first. Then switch the pregnancy on, and then lengthen the cycle.",
          "zh": "把日期逐天推进一个周期，先跟着子宫内膜看。然后打开\"妊娠\"，再把周期调长。"
        },
        "params": [
          {
            "key": "day",
            "label": {
              "en": "Day of the cycle",
              "zh": "周期的第几天"
            },
            "unit": "",
            "min": 1,
            "max": 35,
            "step": 1,
            "default": 14
          },
          {
            "key": "cycleLength",
            "label": {
              "en": "Length of the cycle",
              "zh": "周期长度"
            },
            "unit": "days",
            "min": 21,
            "max": 35,
            "step": 1,
            "default": 28
          },
          {
            "key": "pregnant",
            "label": {
              "en": "Was the egg fertilised?",
              "zh": "卵子是否受精？"
            },
            "unit": "",
            "min": 0,
            "max": 1,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "No",
                  "zh": "否"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Yes",
                  "zh": "是"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "ovulation",
            "label": {
              "en": "Ovulation falls on day",
              "zh": "排卵发生在第几天"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "oestrogen",
            "label": {
              "en": "Oestrogen today",
              "zh": "当天的雌激素"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "progesterone",
            "label": {
              "en": "Progesterone today",
              "zh": "当天的孕激素"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "lining",
            "label": {
              "en": "Lining thickness today",
              "zh": "当天的内膜厚度"
            },
            "unit": "mm",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Menstruation",
              "zh": "月经期"
            },
            "params": {
              "day": 2,
              "cycleLength": 28,
              "pregnant": 0
            }
          },
          {
            "label": {
              "en": "Rebuilding the lining",
              "zh": "内膜重建期"
            },
            "params": {
              "day": 10,
              "cycleLength": 28,
              "pregnant": 0
            }
          },
          {
            "label": {
              "en": "Ovulation: the LH surge",
              "zh": "排卵：LH 峰"
            },
            "params": {
              "day": 14,
              "cycleLength": 28,
              "pregnant": 0
            }
          },
          {
            "label": {
              "en": "Progesterone at its peak",
              "zh": "孕激素峰值"
            },
            "params": {
              "day": 21,
              "cycleLength": 28,
              "pregnant": 0
            }
          },
          {
            "label": {
              "en": "No pregnancy: the lining goes",
              "zh": "未受孕：内膜脱落"
            },
            "params": {
              "day": 27,
              "cycleLength": 28,
              "pregnant": 0
            }
          },
          {
            "label": {
              "en": "Pregnancy: it is maintained",
              "zh": "妊娠：内膜得以维持"
            },
            "params": {
              "day": 27,
              "cycleLength": 28,
              "pregnant": 1
            }
          },
          {
            "label": {
              "en": "A 35-day cycle",
              "zh": "35 天的周期"
            },
            "params": {
              "day": 21,
              "cycleLength": 35,
              "pregnant": 0
            }
          }
        ]
      },
      "kernel": kernel
    }
  },
  "presets": [
    {
      "id": "preset-1",
      "name": {
        "zh": "月经期",
        "en": "Menstruation"
      },
      "params": {
        "day": 2,
        "cycleLength": 28,
        "pregnant": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "内膜重建期",
        "en": "Rebuilding the lining"
      },
      "params": {
        "day": 10,
        "cycleLength": 28,
        "pregnant": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "排卵：LH 峰",
        "en": "Ovulation: the LH surge"
      },
      "params": {
        "day": 14,
        "cycleLength": 28,
        "pregnant": 0
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "孕激素峰值",
        "en": "Progesterone at its peak"
      },
      "params": {
        "day": 21,
        "cycleLength": 28,
        "pregnant": 0
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "未受孕：内膜脱落",
        "en": "No pregnancy: the lining goes"
      },
      "params": {
        "day": 27,
        "cycleLength": 28,
        "pregnant": 0
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "妊娠：内膜得以维持",
        "en": "Pregnancy: it is maintained"
      },
      "params": {
        "day": 27,
        "cycleLength": 28,
        "pregnant": 1
      }
    },
    {
      "id": "preset-7",
      "name": {
        "zh": "35 天的周期",
        "en": "A 35-day cycle"
      },
      "params": {
        "day": 21,
        "cycleLength": 35,
        "pregnant": 0
      }
    }
  ]
};
