/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/5-1-atom-nucleus
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/5-1-atom-nucleus/narration';
import { equations } from '../../igcse-src/0625/5-1-atom-nucleus/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/5-1-atom-nucleus/kernel';

export const kp51AtomNucleus: KnowledgePoint = {
  "id": "igcse-0625-5-1-atom-nucleus",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "原子与原子核",
    "en": "The atom and the nucleus"
  },
  "summary": {
    "zh": "质子决定它是什么，中子决定它是哪种同位素，电子决定它的电荷。三个看似可以互换、实则完全不同的滑块。",
    "en": "Protons decide what it is, neutrons decide which isotope of it, electrons decide its charge. Three sliders that look interchangeable and are not."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/5.1.1.1",
      "0625/5.1.1.2",
      "0625/5.1.1.3",
      "0625/5.1.2.1",
      "0625/5.1.2.2",
      "0625/5.1.2.3",
      "0625/5.1.2.4",
      "0625/5.1.2.5",
      "0625/5.1.2.6",
      "0625/5.1.2.7",
      "0625/5.1.2.8"
    ]
  },
  "keywords": {
    "zh": [
      "核子",
      "质子数",
      "同位素",
      "核裂变",
      "核聚变"
    ],
    "en": [
      "nucleon",
      "proton number",
      "isotope",
      "nuclear fission",
      "nuclear fusion"
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
          "把原子结构描述为带正电的原子核与绕核运动的带负电电子。",
          "知道原子如何通过失去或得到电子形成正、负离子。",
          "描述α粒子散射实验如何支持核式原子模型。（Extended）",
          "把原子核描述为质子与中子，并说出质子、中子与电子的相对电荷和相对质量。",
          "定义质子数与核子数，计算中子数，并使用核素符号。",
          "解释什么是同位素，以及同一元素的同位素为何化学性质相同。",
          "描述核裂变与核聚变，并配平相应的核素方程。（Extended）",
          "把质子数与核的相对电荷联系起来，把核子数与核的相对质量联系起来。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "人们是怎么知道的"
      },
      {
        "type": "paragraph",
        "text": "这些都不是显而易见的，确立它们的那个实验值得细致了解。用α粒子——带正电、质量相对较大——轰击金箔，并把探测器绕金箔移动，统计各个方向上到达的粒子数目。"
      },
      {
        "type": "paragraph",
        "text": "有三个结果。绝大多数α粒子径直穿过，完全没有偏转。少数被偏转了明显的角度。而极少数——大约八千分之一——被弹回到源的方向。"
      },
      {
        "type": "paragraph",
        "text": "现在把每个结果都当作证据来读。大多数径直穿过，说明原子内部大部分是空的。有些被偏转，说明其中有带正电的东西在排斥它们。而少数几乎原路返回——这就要求那些正电荷集中在极小的体积内，并且质量大到不会被撞开。"
      },
      {
        "type": "paragraph",
        "text": "最后这一条是决定性的结果，也是答题时应当引用的。被它推翻的那个模型认为正电荷均匀分布在整个原子中，而分散的电荷无法把高速α粒子掉转回来。只有一个微小、致密、质量大且带正电的核才能做到。弹回现象之稀少，本身就衡量了原子核有多小。"
      },
      {
        "type": "heading",
        "text": "分裂与结合"
      },
      {
        "type": "paragraph",
        "text": "核裂变是大核分裂成两个较小的核。铀-235 核吸收一个慢中子后变得不稳定并裂开——放出能量，而且关键是放出两三个中子，这些中子又能继续使别的核裂变。这就是反应堆加以控制、而炸弹不加控制的链式反应。"
      },
      {
        "type": "paragraph",
        "text": "一个典型方程：铀-235 加一个中子，生成钡-141、氪-92 和 3 个中子。按考官的方式核对一下。核子数：235 + 1 = 236，而 141 + 92 + 3 = 236。质子数：92 + 0 = 92，而 56 + 36 + 0 = 92。两边都平衡，也都必须平衡。"
      },
      {
        "type": "paragraph",
        "text": "核聚变则相反：两个很轻的核结合成一个较重的核。氢的两种同位素氘和氚聚变生成氦-4 和一个中子。核子数：2 + 3 = 5，4 + 1 = 5。质子数：1 + 1 = 2，2 + 0 = 2。每次都是同样的核对方法。"
      },
      {
        "type": "paragraph",
        "text": "聚变是太阳的能量来源，它需要极高的温度和压强——因为两个原子核都带正电、彼此强烈排斥，必须以足够大的力量撞到一起才能克服排斥。裂变不需要这样的条件，这正是我们已有裂变电站而仍在努力建造聚变电站的原因。"
      },
      {
        "type": "formula",
        "latex": "{}^{A}_{Z}\\mathrm{X}",
        "caption": "核素符号：上方是核子数 A，下方是质子数 Z。中子数为 A − Z，这是本主题最常要求的计算。"
      },
      {
        "type": "formula",
        "latex": "N = A - Z",
        "caption": "数完质子后，核子中剩下的就是中子。原子核本身的相对电荷为 +Z，相对质量为 A。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "nucleon（核子）：质子或中子——原子核中的两类粒子之一。每个的相对质量都是 1，因此核子数就是原子核的相对质量。",
          "proton number（质子数）：原子核中质子的数目，记作 Z。它决定原子属于哪种元素，原子的其他任何变化都无法改变它。",
          "isotope（同位素）：同一元素中子数不同的原子——质子数相同，核子数不同。同位素化学性质完全相同，因为它们的电子相同。",
          "nuclear fission（核裂变）：大核吸收中子后分裂成两个较小的核，放出能量并放出可引发链式反应的中子。",
          "nuclear fusion（核聚变）：两个轻核结合成一个较重的核。它需要极高的温度和压强，因为两个核都带正电、彼此排斥。"
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
          "Describe the structure of an atom as a positively charged nucleus with negatively charged electrons in orbit.",
          "Know how atoms form positive and negative ions by losing or gaining electrons.",
          "Describe how the alpha-particle scattering experiment supports the nuclear model. (Extended)",
          "Describe the nucleus as protons and neutrons, and state the relative charges and masses of protons, neutrons and electrons.",
          "Define proton number and nucleon number, calculate the number of neutrons, and use nuclide notation.",
          "Explain what an isotope is and why isotopes of an element are chemically identical.",
          "Describe nuclear fission and fusion, and balance nuclide equations for them. (Extended)",
          "Relate the proton number to the relative charge on a nucleus, and the nucleon number to its relative mass. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "How anyone knew"
      },
      {
        "type": "paragraph",
        "text": "None of that is obvious, and the experiment that established it is worth knowing in detail. A thin gold foil was bombarded with alpha particles — which are positively charged and comparatively heavy — and a detector was moved around the foil to count how many arrived in each direction."
      },
      {
        "type": "paragraph",
        "text": "Three results. The great majority of alpha particles went straight through with no deflection at all. A small number were deflected through noticeable angles. And a very few — about one in eight thousand — came back towards the source."
      },
      {
        "type": "paragraph",
        "text": "Now read each result as evidence. Most went straight through, so the atom must be mostly empty space. Some were deflected, so there is something positively charged in there repelling them. And a few came almost straight back — which needs that positive charge to be concentrated in a tiny volume and to be massive enough not to be shoved aside."
      },
      {
        "type": "paragraph",
        "text": "That last one is the decisive result, and it is the one to quote in an answer. The model it replaced had the positive charge spread evenly through the atom, and spread-out charge cannot turn a fast alpha particle round. Only a tiny, dense, massive, positively charged nucleus can. The rarity of the bounce-back is itself the measure of how small the nucleus is."
      },
      {
        "type": "heading",
        "text": "Splitting and joining"
      },
      {
        "type": "paragraph",
        "text": "Nuclear fission is a large nucleus splitting into two smaller ones. A uranium-235 nucleus absorbs a slow neutron, becomes unstable, and breaks apart — releasing energy and, crucially, two or three more neutrons, which can go on to split further nuclei. That is the chain reaction a reactor controls and a bomb does not."
      },
      {
        "type": "paragraph",
        "text": "A typical equation: uranium-235 plus a neutron gives barium-141, krypton-92 and three neutrons. Check it the way an examiner will. Nucleon numbers: 235 plus 1 is 236, and 141 plus 92 plus 3 is also 236. Proton numbers: 92 plus 0 is 92, and 56 plus 36 plus 0 is 92. Both sides balance, and both must."
      },
      {
        "type": "paragraph",
        "text": "Nuclear fusion is the opposite: two very light nuclei joining to make a heavier one. Two isotopes of hydrogen, deuterium and tritium, fuse to give helium-4 and a neutron. Nucleon numbers, 2 plus 3 is 5, and 4 plus 1 is 5. Proton numbers, 1 plus 1 is 2, and 2 plus 0 is 2. Same check, every time."
      },
      {
        "type": "paragraph",
        "text": "Fusion is what powers the Sun, and it needs enormous temperatures and pressures — because two nuclei are both positive and repel each other fiercely, and they have to be thrown together hard enough to overcome that. Fission needs no such conditions, which is why we have fission power stations and are still trying to build a fusion one."
      },
      {
        "type": "formula",
        "latex": "{}^{A}_{Z}\\mathrm{X}",
        "caption": "Nuclide notation: the nucleon number A above, the proton number Z below. The number of neutrons is A − Z, which is the calculation this topic asks for most often."
      },
      {
        "type": "formula",
        "latex": "N = A - Z",
        "caption": "Neutrons are whatever is left of the nucleons once the protons are counted. The nucleus itself has a relative charge of +Z and a relative mass of A."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "nucleon (核子): A proton or a neutron — either of the particles in a nucleus. Each has a relative mass of 1, which is why the nucleon number is the relative mass of the nucleus.",
          "proton number (质子数): The number of protons in a nucleus, written Z. It decides which element the atom is, and nothing else about the atom can change it.",
          "isotope (同位素): An atom of the same element with a different number of neutrons — same proton number, different nucleon number. Isotopes are chemically identical, because they have the same electrons.",
          "nuclear fission (核裂变): A large nucleus splitting into two smaller ones after absorbing a neutron, releasing energy and further neutrons that can cause a chain reaction.",
          "nuclear fusion (核聚变): Two light nuclei joining to form a heavier one. It needs enormous temperature and pressure, because both nuclei are positive and repel each other."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0625-5-1-cp1",
      "syllabus": [
        "0625/5.1.2.3",
        "0625/5.1.2.4"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 3,
      "stem": "A nuclide is written as ²³⁸₉₂U. State the proton number, the nucleon number and the number of neutrons in this nucleus.",
      "markScheme": [
        {
          "text": "Proton number = 92",
          "marks": 1
        },
        {
          "text": "Nucleon number = 238",
          "marks": 1
        },
        {
          "text": "Neutrons = 238 − 92 = 146",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "下标总是较小的那个数，因为质子是核子的一部分。若算出的中子数为负，说明两个数读反了。",
        "en": "The lower number is always the smaller one, because the protons are a subset of the nucleons. If your neutron count comes out negative, the two numbers have been read the wrong way round."
      }
    },
    {
      "id": "0625-5-1-cp2",
      "syllabus": [
        "0625/5.1.1.3"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "In the alpha-particle scattering experiment, most alpha particles passed straight through a thin gold foil, a small number were deflected through large angles, and a very few were deflected back towards the source. Explain what each of these three observations shows about the structure of the atom.",
      "markScheme": [
        {
          "text": "Most passing straight through undeflected shows that the atom is mostly empty space",
          "marks": 1
        },
        {
          "text": "Deflection of some alpha particles shows there is a concentration of positive charge in the atom, which repels the positively charged alpha particles",
          "marks": 1
        },
        {
          "text": "The very few deflected straight back show that this positive charge is concentrated in a very small volume — the nucleus — since a head-on approach is rare",
          "marks": 1
        },
        {
          "text": "and that the nucleus is far more massive than an alpha particle, otherwise it would be pushed aside rather than turning the alpha particle round",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每个现象都要给出各自的结论。大角度偏转之稀少本身就是证据——正是它说明原子核很小，而不只是\"存在\"。",
        "en": "Each observation needs its own conclusion. The rarity of the large deflections is itself evidence — it is what shows the nucleus is small rather than merely present."
      }
    },
    {
      "id": "0625-5-1-cp3",
      "syllabus": [
        "0625/5.1.2.5"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Chlorine exists as two isotopes, ³⁵₁₇Cl and ³⁷₁₇Cl. Explain what is meant by an isotope, and explain why these two isotopes take part in exactly the same chemical reactions.",
      "markScheme": [
        {
          "text": "Isotopes are atoms of the same element with the same proton number but different nucleon numbers — here both have 17 protons but one has 18 neutrons and the other 20",
          "marks": 1
        },
        {
          "text": "Both atoms have 17 electrons, because the number of electrons in a neutral atom equals the number of protons",
          "marks": 1
        },
        {
          "text": "Chemical behaviour is determined by the electrons, particularly the outer-shell electrons, so identical electron arrangements give identical chemistry",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "最后一分需要写出理由，而不只是事实。\"它们电子相同\"离\"而化学性质取决于电子\"还差一步。",
        "en": "The final mark needs the reason, not just the fact. \"They have the same electrons\" is one step short of \"and chemistry depends on electrons\"."
      }
    },
    {
      "id": "0625-5-1-cp4",
      "syllabus": [
        "0625/5.1.1.2",
        "0625/5.1.2.2"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "A neutral magnesium atom has 12 protons, 12 neutrons and 12 electrons. Describe how it becomes a Mg²⁺ ion, and state the number of protons, neutrons and electrons in that ion.",
      "markScheme": [
        {
          "text": "The atom loses two electrons",
          "marks": 1
        },
        {
          "text": "leaving 12 protons and only 10 electrons, so there are two more positive charges than negative and the ion has a charge of 2+",
          "marks": 1
        },
        {
          "text": "The nucleus is unchanged: still 12 protons and 12 neutrons",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "最后一分能查出那些为了得到 2+ 离子而\"移走两个质子\"的答案。移走质子会变成另一种元素——形成离子只涉及电子的转移。",
        "en": "The last mark catches people who \"remove two protons\" to make a 2+ ion. Removing protons would make a different element altogether — ions are made by moving electrons only."
      }
    },
    {
      "id": "0625-5-1-cp5",
      "syllabus": [
        "0625/5.1.2.6"
      ],
      "tier": "supplement",
      "commandWord": "Determine",
      "marks": 3,
      "stem": "A uranium-235 nucleus absorbs a neutron and undergoes fission according to: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ᵃ_bKr + 3 ¹₀n. Determine the values of a and b, and state how you checked your answer.",
      "markScheme": [
        {
          "text": "Nucleon numbers must balance: 235 + 1 = 141 + a + 3, so a = 92",
          "marks": 1
        },
        {
          "text": "Proton numbers must balance: 92 + 0 = 56 + b + 0, so b = 36",
          "marks": 1
        },
        {
          "text": "Checked by confirming that both the total nucleon number and the total proton number are the same on each side of the equation",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "放出的三个中子有核子数但不带电，因此只出现在一个等式中而不出现在另一个中。在核子数平衡时漏掉它们是常见的失误。",
        "en": "The three released neutrons carry nucleon number but no charge, so they appear in one sum and not the other. Forgetting them in the nucleon balance is the usual slip."
      }
    },
    {
      "id": "0625-5-1-cp6",
      "syllabus": [
        "0625/5.1.2.7",
        "0625/5.1.2.8"
      ],
      "tier": "supplement",
      "commandWord": "Deduce",
      "marks": 2,
      "stem": "A nucleus has a relative charge of +13 and a relative mass of 27. Deduce the number of protons and the number of neutrons in this nucleus.",
      "markScheme": [
        {
          "text": "The relative charge equals the proton number, since each proton carries +1 and neutrons carry none, so there are 13 protons",
          "marks": 1
        },
        {
          "text": "The relative mass equals the nucleon number, since protons and neutrons each have a relative mass of 1, so neutrons = 27 − 13 = 14",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这两个事实直接来自各粒子的相对电荷与相对质量。中子对质量有贡献而对电荷没有贡献，这正是两个数不同的原因。",
        "en": "These two facts fall straight out of the relative charges and masses of the particles. Neutrons contribute to the mass and nothing to the charge, which is what separates the two numbers."
      }
    },
    {
      "id": "0625-5-1-cp7",
      "syllabus": [
        "0625/5.1.1.1",
        "0625/5.1.2.1"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "Describe the structure of an atom, and state where almost all of its mass is found and why.",
      "markScheme": [
        {
          "text": "A small central nucleus containing protons and neutrons, with a positive charge",
          "marks": 1
        },
        {
          "text": "surrounded by negatively charged electrons in orbits around it",
          "marks": 1
        },
        {
          "text": "Almost all the mass is in the nucleus, because protons and neutrons each have a relative mass of 1 while an electron's mass is negligible in comparison",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "质量与体积恰好相反：原子核占了几乎全部质量，却几乎不占体积。两方面都值得写出来。",
        "en": "The mass and the size point in opposite directions: the nucleus holds nearly all the mass while occupying almost none of the volume. Both halves are worth stating."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "protonNumber",
        "label": {
          "zh": "质子数 (Z)",
          "en": "Protons (Z)"
        },
        "min": 1,
        "max": 20,
        "step": 1,
        "defaultValue": 6,
        "unit": ""
      },
      {
        "key": "neutrons",
        "label": {
          "zh": "中子数 (N)",
          "en": "Neutrons (N)"
        },
        "min": 0,
        "max": 30,
        "step": 1,
        "defaultValue": 6,
        "unit": ""
      },
      {
        "key": "charge",
        "label": {
          "zh": "电荷",
          "en": "Charge"
        },
        "min": -2,
        "max": 3,
        "step": 1,
        "defaultValue": 0,
        "unit": "e"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "atom",
        "kernel": "5-1-atom-nucleus",
        "hint": {
          "en": "Add neutrons and watch the element name refuse to change. Then change the charge and watch the nucleus refuse to change.",
          "zh": "增加中子，看元素名称如何丝毫不变。再改变电荷，看原子核如何丝毫不变。"
        },
        "params": [
          {
            "key": "protonNumber",
            "label": {
              "en": "Protons (Z)",
              "zh": "质子数 (Z)"
            },
            "unit": "",
            "min": 1,
            "max": 20,
            "step": 1,
            "default": 6
          },
          {
            "key": "neutrons",
            "label": {
              "en": "Neutrons (N)",
              "zh": "中子数 (N)"
            },
            "unit": "",
            "min": 0,
            "max": 30,
            "step": 1,
            "default": 6
          },
          {
            "key": "charge",
            "label": {
              "en": "Charge",
              "zh": "电荷"
            },
            "unit": "e",
            "min": -2,
            "max": 3,
            "step": 1,
            "default": 0
          }
        ],
        "readouts": [
          {
            "key": "massNumber",
            "label": {
              "en": "Nucleon number (A)",
              "zh": "核子数 (A)"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "neutrons",
            "label": {
              "en": "Neutrons (A − Z)",
              "zh": "中子数 (A − Z)"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "nuclearCharge",
            "label": {
              "en": "Relative charge on the nucleus",
              "zh": "原子核的相对电荷"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "electrons",
            "label": {
              "en": "Electrons",
              "zh": "电子数"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Carbon-12",
              "zh": "碳-12"
            },
            "params": {
              "protonNumber": 6,
              "neutrons": 6,
              "charge": 0
            }
          },
          {
            "label": {
              "en": "Carbon-14 — an isotope",
              "zh": "碳-14——一种同位素"
            },
            "params": {
              "protonNumber": 6,
              "neutrons": 8,
              "charge": 0
            }
          },
          {
            "label": {
              "en": "Same isotope, now an ion",
              "zh": "同一同位素，现在是离子"
            },
            "params": {
              "protonNumber": 6,
              "neutrons": 8,
              "charge": 2
            }
          },
          {
            "label": {
              "en": "Nitrogen-14 — a different element",
              "zh": "氮-14——另一种元素"
            },
            "params": {
              "protonNumber": 7,
              "neutrons": 7,
              "charge": 0
            }
          },
          {
            "label": {
              "en": "A sodium ion, Na⁺",
              "zh": "钠离子 Na⁺"
            },
            "params": {
              "protonNumber": 11,
              "neutrons": 12,
              "charge": 1
            }
          },
          {
            "label": {
              "en": "A chloride ion, Cl⁻",
              "zh": "氯离子 Cl⁻"
            },
            "params": {
              "protonNumber": 17,
              "neutrons": 18,
              "charge": -1
            }
          }
        ]
      },
      "kernel": kernel
    },
    "liveFormulas": igcseLiveFormulas(equations)
  },
  "presets": [
    {
      "id": "preset-1",
      "name": {
        "zh": "碳-12",
        "en": "Carbon-12"
      },
      "params": {
        "protonNumber": 6,
        "neutrons": 6,
        "charge": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "碳-14——一种同位素",
        "en": "Carbon-14 — an isotope"
      },
      "params": {
        "protonNumber": 6,
        "neutrons": 8,
        "charge": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "同一同位素，现在是离子",
        "en": "Same isotope, now an ion"
      },
      "params": {
        "protonNumber": 6,
        "neutrons": 8,
        "charge": 2
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "氮-14——另一种元素",
        "en": "Nitrogen-14 — a different element"
      },
      "params": {
        "protonNumber": 7,
        "neutrons": 7,
        "charge": 0
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "钠离子 Na⁺",
        "en": "A sodium ion, Na⁺"
      },
      "params": {
        "protonNumber": 11,
        "neutrons": 12,
        "charge": 1
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "氯离子 Cl⁻",
        "en": "A chloride ion, Cl⁻"
      },
      "params": {
        "protonNumber": 17,
        "neutrons": 18,
        "charge": -1
      }
    }
  ]
};
