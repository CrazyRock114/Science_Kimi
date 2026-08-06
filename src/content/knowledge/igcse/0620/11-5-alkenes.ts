/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/11-5-alkenes
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0620/11-5-alkenes/narration';
import { equations } from '../../igcse-src/0620/11-5-alkenes/equations';
import kernel from '../../../../simulations/igcse-kernels/0620/11-5-alkenes/kernel';

export const kp115Alkenes: KnowledgePoint = {
  "id": "igcse-0620-11-5-alkenes",
  "subject": "chemistry",
  "tier": "extended",
  "title": {
    "zh": "烷烃与烯烃：加成与取代",
    "en": "Alkanes and alkenes: addition and substitution"
  },
  "summary": {
    "zh": "把同一种试剂分别加给饱和分子与不饱和分子。前者毫无反应，后者打开双键把试剂整个吞下。",
    "en": "Put the same reagent to a saturated molecule and an unsaturated one. One does nothing; the other opens its double bond and swallows the reagent whole."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0620/11.4.1",
      "0620/11.4.2",
      "0620/11.4.3",
      "0620/11.4.4",
      "0620/11.5.1",
      "0620/11.5.2",
      "0620/11.5.3",
      "0620/11.5.4",
      "0620/11.5.5",
      "0620/11.5.6"
    ]
  },
  "keywords": {
    "zh": [
      "不饱和",
      "加成反应",
      "取代反应",
      "裂化"
    ],
    "en": [
      "unsaturated",
      "addition reaction",
      "substitution reaction",
      "cracking"
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
          "说明烷烃只含单键、属于饱和烃。",
          "说明烷烃除燃烧外一般不活泼。",
          "说明取代反应是一个原子或基团被另一个替换。（Extended）",
          "描述烷烃在紫外光下与氯的取代反应。（Extended）",
          "说明烯烃含碳碳双键、属于不饱和烃。",
          "描述用裂化法制取烯烃，并说明其原因。",
          "描述用溴水检验不饱和烃。",
          "说明加成反应只生成一种产物。（Extended）",
          "描述烯烃与溴、氢气和水蒸气的加成反应。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "三种可以加成到 C=C 上的物质"
      },
      {
        "type": "paragraph",
        "text": "氢气也能加成上去，用镍作催化剂、约 150 °C。看产物——又变回烷烃了。给不饱和分子加氢就是使其饱和，人造黄油正是这样由植物油制得的。"
      },
      {
        "type": "paragraph",
        "text": "水蒸气以 H 和 OH 的形式加成，生成醇。乙烯加水蒸气生成乙醇，条件是催化剂、约 300 °C、60 atm。工业乙醇大多是这样制得的。"
      },
      {
        "type": "paragraph",
        "text": "这三个反应中，双键都变成了单键，而且产物都只有一种。看读数里的产物分子数——始终是 1。"
      },
      {
        "type": "heading",
        "text": "烯烃从哪里来"
      },
      {
        "type": "paragraph",
        "text": "原油中长链烷烃远多于市场所需，短链烷烃却远远不够。汽油供不应求，沥青却堆在罐里。"
      },
      {
        "type": "paragraph",
        "text": "于是把长分子裂化：在催化剂存在下加热到约 600 °C，把它们断成较短的分子。一个十碳烷烃可能裂化成一个八碳烷烃和乙烯。"
      },
      {
        "type": "paragraph",
        "text": "这样做有两个原因，考题通常两个都要。一是把过剩的长链馏分转化为紧缺的汽油。二是它是烯烃的来源，而烯烃是制醇和所有加聚物的起点。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{C_2H_4} + \\mathrm{Br_2} \\rightarrow \\mathrm{C_2H_4Br_2}",
        "caption": "加成：整个试剂并入分子，右边除了唯一的产物什么都没有。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{CH_4} + \\mathrm{Cl_2} \\xrightarrow{\\text{UV}} \\mathrm{CH_3Cl} + \\mathrm{HCl}",
        "caption": "取代：一个氢被换下，并以氯化氢的形式离开——这就是第二种产物。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{C_{10}H_{22}} \\rightarrow \\mathrm{C_8H_{18}} + \\mathrm{C_2H_4}",
        "caption": "裂化：长链烷烃断裂成较短的烷烃和一个烯烃。两边原子数必须配平。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "unsaturated（不饱和）：含有至少一个碳碳双键，因此还能再加上原子。",
          "addition reaction（加成反应）：双键打开、试剂加成到两端的反应，只生成一种产物。",
          "substitution reaction（取代反应）：一个原子或基团被另一个替换的反应。被替换下来的原子成为第二种产物。",
          "cracking（裂化）：在加热和催化剂作用下把长链烷烃断裂成较短的烷烃和烯烃。"
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
          "State that alkanes contain only single covalent bonds and are saturated.",
          "Describe alkanes as generally unreactive except in combustion.",
          "State that a substitution reaction replaces one atom or group with another. (Extended)",
          "Describe the substitution of alkanes with chlorine in ultraviolet light. (Extended)",
          "State that alkenes contain a C=C double bond and are unsaturated.",
          "Describe the manufacture of alkenes by cracking, and why it is done.",
          "Describe the bromine water test for unsaturation.",
          "State that an addition reaction gives only one product. (Extended)",
          "Describe the addition reactions of alkenes with bromine, hydrogen and steam. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Three things that add across a C=C"
      },
      {
        "type": "paragraph",
        "text": "Hydrogen adds across it too, over a nickel catalyst at about a hundred and fifty degrees. Look at the product — that is the alkane again. Adding hydrogen to an unsaturated molecule saturates it, which is exactly how margarine is made from vegetable oil."
      },
      {
        "type": "paragraph",
        "text": "Steam adds as H and OH, giving an alcohol. Ethene plus steam gives ethanol, over a catalyst at about three hundred degrees and sixty atmospheres. This is how most industrial ethanol is made."
      },
      {
        "type": "paragraph",
        "text": "In every one of those, the double bond became a single bond and there was exactly one product. Count the product molecules in the readings — always one."
      },
      {
        "type": "heading",
        "text": "Where alkenes come from"
      },
      {
        "type": "paragraph",
        "text": "Crude oil gives us far more long-chain alkanes than anyone wants, and far fewer short ones than everyone needs. Petrol sells; bitumen sits in the tank."
      },
      {
        "type": "paragraph",
        "text": "So the long molecules are cracked: heated to about six hundred degrees over a catalyst, which breaks them into shorter ones. A ten-carbon alkane might crack into an eight-carbon alkane and ethene."
      },
      {
        "type": "paragraph",
        "text": "Two reasons to do it, and an exam question usually wants both. It converts surplus long-chain fractions into petrol, which is in demand. And it is the source of alkenes, which are the starting point for alcohols and for every addition polymer."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{C_2H_4} + \\mathrm{Br_2} \\rightarrow \\mathrm{C_2H_4Br_2}",
        "caption": "Addition: the whole reagent joins the molecule, so nothing appears on the right except the single product."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{CH_4} + \\mathrm{Cl_2} \\xrightarrow{\\text{UV}} \\mathrm{CH_3Cl} + \\mathrm{HCl}",
        "caption": "Substitution: one hydrogen is swapped out, and it leaves as hydrogen chloride — a second product."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{C_{10}H_{22}} \\rightarrow \\mathrm{C_8H_{18}} + \\mathrm{C_2H_4}",
        "caption": "Cracking: a long alkane breaks into a shorter alkane and an alkene. The atoms must balance on both sides."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "unsaturated (不饱和): Containing at least one carbon–carbon double bond, so more atoms can still be added.",
          "addition reaction (加成反应): A reaction in which a double bond opens and a reagent adds across it, giving a single product.",
          "substitution reaction (取代反应): A reaction in which one atom or group is replaced by another. The displaced atom leaves as a second product.",
          "cracking (裂化): Breaking long-chain alkanes into shorter alkanes and alkenes, using heat and a catalyst."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0620-11-5-cp1",
      "syllabus": [
        "0620/11.5.4"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 2,
      "stem": "Describe a chemical test that would distinguish ethane from ethene, and give the result for each.",
      "markScheme": [
        {
          "text": "Add bromine water to each",
          "marks": 1
        },
        {
          "text": "Ethene decolourises it (orange to colourless); ethane leaves it orange",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两个结果都要写。只写\"乙烯使溴水褪色\"无法区分——必须说明另一种物质的现象，检验才成立。",
        "en": "Both results are needed. \"Ethene decolourises bromine water\" alone does not distinguish anything — a test only identifies something if you say what the other one does."
      }
    },
    {
      "id": "0620-11-5-cp2",
      "syllabus": [
        "0620/11.4.3",
        "0620/11.5.5"
      ],
      "tier": "supplement",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Ethene reacts with bromine, and ethane reacts with chlorine in ultraviolet light. Compare these two reactions.",
      "markScheme": [
        {
          "text": "Ethene undergoes addition: the C=C opens and the whole Br₂ molecule adds on",
          "marks": 1
        },
        {
          "text": "Ethane undergoes substitution: a chlorine atom replaces a hydrogen atom",
          "marks": 1
        },
        {
          "text": "Addition gives one product; substitution gives two, the second being HCl",
          "marks": 1,
          "alternatives": [
            "The substitution needs ultraviolet light; the addition does not"
          ]
        }
      ],
      "examinerNote": {
        "zh": "\"Compare\" 类题要在同一句里比较双方——说明各自的行为，而不是写两段独立描述。产物数目是最清晰的一个差别。",
        "en": "A \"compare\" question needs both sides in the same sentence — say what each does, not two separate descriptions. The number of products is the cleanest single difference."
      }
    },
    {
      "id": "0620-11-5-cp3",
      "syllabus": [
        "0620/11.5.2",
        "0620/11.5.3"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Long-chain alkanes from crude oil are cracked. Explain why this is done and state the conditions used.",
      "markScheme": [
        {
          "text": "There is a surplus of long-chain fractions and a shortage of shorter ones such as petrol",
          "marks": 1
        },
        {
          "text": "Cracking also produces alkenes, which are needed to make alcohols and polymers",
          "marks": 1
        },
        {
          "text": "A high temperature (about 600 °C) and a catalyst",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "有两个原因，不是一个。只写\"为了制汽油\"只答了一半——生成的烯烃是整个高分子工业的原料，考官要找的正是第二个原因。",
        "en": "Two reasons, not one. \"To make petrol\" is half the answer — the alkenes produced are the feedstock for the whole polymer industry, and examiners look for that second reason."
      }
    },
    {
      "id": "0620-11-5-cp4",
      "syllabus": [
        "0620/11.5.6"
      ],
      "tier": "supplement",
      "commandWord": "Deduce",
      "marks": 2,
      "stem": "Propene, C₃H₆, reacts completely with hydrogen. Deduce the molecular formula of the product and name it.",
      "options": [
        "C₃H₈, propane",
        "C₃H₆, propene",
        "C₃H₈O, propan-1-ol",
        "C₃H₆Br₂, dibromopropane"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "C₃H₈",
          "marks": 1
        },
        {
          "text": "Propane",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "氢以 H₂ 形式加成，所以增加两个氢原子，双键变为单键。加成反应中碳原子数不会改变。",
        "en": "Hydrogen adds as H₂, so two hydrogen atoms join and the double bond becomes single. The carbon count never changes in an addition reaction."
      }
    },
    {
      "id": "0620-11-5-cp5",
      "syllabus": [
        "0620/11.4.1",
        "0620/11.4.2"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 2,
      "stem": "State what is meant by a saturated hydrocarbon, and state one reaction that alkanes do undergo.",
      "markScheme": [
        {
          "text": "A hydrocarbon containing only single carbon–carbon bonds",
          "marks": 1
        },
        {
          "text": "Combustion (burning in oxygen)",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "写\"没有双键\"可以接受，但写\"键都饱和了\"不行——得分点是碳原子之间只有单键。",
        "en": "Saying \"it has no double bonds\" is accepted, but \"all its bonds are full\" is not — the mark is for single bonds between carbon atoms specifically."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "carbons",
        "label": {
          "zh": "碳原子数",
          "en": "Carbon atoms"
        },
        "min": 1,
        "max": 4,
        "step": 1,
        "defaultValue": 2,
        "unit": ""
      },
      {
        "key": "family",
        "label": {
          "zh": "烃的类别",
          "en": "Hydrocarbon"
        },
        "min": 0,
        "max": 1,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "reagent",
        "label": {
          "zh": "试剂",
          "en": "Reagent"
        },
        "min": 0,
        "max": 4,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "molecule",
        "kernel": "11-5-alkenes",
        "hint": {
          "en": "Pick a reagent, then flip between alkane and alkene with everything else held still. Watch the product molecule count.",
          "zh": "先选一种试剂，再在烷烃与烯烃之间切换，其余条件不变。注意产物分子数的变化。"
        },
        "params": [
          {
            "key": "carbons",
            "label": {
              "en": "Carbon atoms",
              "zh": "碳原子数"
            },
            "unit": "",
            "symbol": "n",
            "min": 1,
            "max": 4,
            "step": 1,
            "default": 2
          },
          {
            "key": "family",
            "label": {
              "en": "Hydrocarbon",
              "zh": "烃的类别"
            },
            "unit": "",
            "min": 0,
            "max": 1,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "Alkane (saturated)",
                  "zh": "烷烃（饱和）"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Alkene (unsaturated)",
                  "zh": "烯烃（不饱和）"
                }
              }
            ]
          },
          {
            "key": "reagent",
            "label": {
              "en": "Reagent",
              "zh": "试剂"
            },
            "unit": "",
            "min": 0,
            "max": 4,
            "step": 1,
            "default": 0,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "None",
                  "zh": "不加"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "Bromine Br₂",
                  "zh": "溴 Br₂"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Hydrogen H₂",
                  "zh": "氢气 H₂"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Steam H₂O",
                  "zh": "水蒸气 H₂O"
                }
              },
              {
                "value": 4,
                "label": {
                  "en": "Chlorine Cl₂ + UV",
                  "zh": "氯气 Cl₂ + 紫外光"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "productMolecules",
            "label": {
              "en": "Product molecules",
              "zh": "产物分子数"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          },
          {
            "key": "relativeMolecularMass",
            "label": {
              "en": "Relative molecular mass",
              "zh": "相对分子质量"
            },
            "unit": "",
            "symbol": "M_r",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "carbons",
            "label": {
              "en": "Carbon atoms",
              "zh": "碳原子数"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "hydrogens",
            "label": {
              "en": "Hydrogen atoms",
              "zh": "氢原子数"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Bromine water: alkane",
              "zh": "溴水：烷烃"
            },
            "params": {
              "carbons": 2,
              "family": 0,
              "reagent": 1
            }
          },
          {
            "label": {
              "en": "Bromine water: alkene",
              "zh": "溴水：烯烃"
            },
            "params": {
              "carbons": 2,
              "family": 1,
              "reagent": 1
            }
          },
          {
            "label": {
              "en": "Ethene + steam → ethanol",
              "zh": "乙烯 + 水蒸气 → 乙醇"
            },
            "params": {
              "carbons": 2,
              "family": 1,
              "reagent": 3
            }
          },
          {
            "label": {
              "en": "Methane + chlorine (UV)",
              "zh": "甲烷 + 氯气（紫外光）"
            },
            "params": {
              "carbons": 1,
              "family": 0,
              "reagent": 4
            }
          },
          {
            "label": {
              "en": "Hydrogenating propene",
              "zh": "丙烯加氢"
            },
            "params": {
              "carbons": 3,
              "family": 1,
              "reagent": 2
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
        "zh": "溴水：烷烃",
        "en": "Bromine water: alkane"
      },
      "params": {
        "carbons": 2,
        "family": 0,
        "reagent": 1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "溴水：烯烃",
        "en": "Bromine water: alkene"
      },
      "params": {
        "carbons": 2,
        "family": 1,
        "reagent": 1
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "乙烯 + 水蒸气 → 乙醇",
        "en": "Ethene + steam → ethanol"
      },
      "params": {
        "carbons": 2,
        "family": 1,
        "reagent": 3
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "甲烷 + 氯气（紫外光）",
        "en": "Methane + chlorine (UV)"
      },
      "params": {
        "carbons": 1,
        "family": 0,
        "reagent": 4
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "丙烯加氢",
        "en": "Hydrogenating propene"
      },
      "params": {
        "carbons": 3,
        "family": 1,
        "reagent": 2
      }
    }
  ]
};
