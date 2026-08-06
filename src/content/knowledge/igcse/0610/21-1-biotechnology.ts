/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/21-1-biotechnology
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/21-1-biotechnology/narration';
import { equations } from '../../igcse-src/0610/21-1-biotechnology/equations';
import kernel from '../../../../simulations/igcse-kernels/0610/21-1-biotechnology/kernel';

export const kp211Biotechnology: KnowledgePoint = {
  "id": "igcse-0610-21-1-biotechnology",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "生物技术与基因改造",
    "en": "Biotechnology and genetic modification"
  },
  "summary": {
    "zh": "发酵罐上的水冷夹层是用来带走热量的，不是供热的。微生物自己把罐加热，若不冷却，它们会让自己的酶变性。",
    "en": "The water jacket on a fermenter is there to take heat away, not to supply it. The microorganisms heat the vessel themselves, and without cooling they denature their own enzymes."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/21.1.1",
      "0610/21.1.2",
      "0610/21.2.1",
      "0610/21.2.2",
      "0610/21.2.3",
      "0610/21.2.4",
      "0610/21.2.5",
      "0610/21.2.6",
      "0610/21.2.7",
      "0610/21.3.1",
      "0610/21.3.2",
      "0610/21.3.3",
      "0610/21.3.4"
    ]
  },
  "keywords": {
    "zh": [
      "发酵罐",
      "质粒",
      "限制酶",
      "连接酶",
      "黏性末端"
    ],
    "en": [
      "fermenter",
      "plasmid",
      "restriction enzyme",
      "ligase",
      "sticky ends"
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
          "讨论细菌为何在生物技术与基因改造中有用。（Extended）",
          "描述酵母无氧呼吸在制取乙醇与面包制作中的作用。",
          "描述果胶酶在果汁生产中的应用，以及酶在生物洗衣粉中的作用。",
          "解释用乳糖酶生产无乳糖牛奶。（Extended）",
          "描述发酵罐的用途，并描述与解释罐内需要控制的条件。（Extended）",
          "描述基因改造，并概述利用细菌生产人类蛋白质的过程。（Extended）",
          "讨论转基因作物的优点与缺点。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "一个反应，两个行业"
      },
      {
        "type": "paragraph",
        "text": "酵母进行无氧呼吸，把葡萄糖转化为乙醇和二氧化碳。就是这一个反应支撑起两个完全不同的行业，而你想要哪种产物，决定了整个操作方式。"
      },
      {
        "type": "paragraph",
        "text": "酿酒时，乙醇是产物。把酵母与来自大麦或葡萄的糖液混合，保持无氧条件，任其发酵。二氧化碳是副产物——不过在起泡酒中它被保留了下来。"
      },
      {
        "type": "paragraph",
        "text": "做面包时，二氧化碳才是产物。把酵母揉进面团，气泡被面筋网络截留，面团于是发起来。乙醇成了副产物，在烤箱中蒸发掉——这就是为什么面包不会让人喝醉。"
      },
      {
        "type": "paragraph",
        "text": "酶也被用于工业，模式总是相同的：酶能在低温下完成本来需要加热、强化学品、甚至根本无法完成的事。果胶酶分解水果细胞壁中的果胶，释放出更多果汁，并使其澄清而非浑浊。"
      },
      {
        "type": "paragraph",
        "text": "生物洗衣粉含蛋白酶和脂肪酶，把蛋白质和油脂污渍消化成可溶的小分子而被洗去——而且它们在低温下就能起作用，从而省电。乳糖酶把牛奶中的乳糖转化为葡萄糖和半乳糖，为不能自行消化乳糖的人生产无乳糖牛奶。"
      },
      {
        "type": "heading",
        "text": "把一个基因搬过去"
      },
      {
        "type": "paragraph",
        "text": "基因改造是通过删除、改变或插入单个基因来改变生物的遗传物质。能生产胰岛素的细菌、抗除草剂或抗虫的作物，以及经改造能合成 β-胡萝卜素的水稻，都是标准实例。"
      },
      {
        "type": "paragraph",
        "text": "用细菌生产人胰岛素的过程是这样的。限制酶把人胰岛素基因从人的 DNA 中切下来，留下黏性末端——短的单链突出端。同一种限制酶切开细菌的质粒，留下互补的黏性末端。"
      },
      {
        "type": "paragraph",
        "text": "两端配对，连接酶把它们永久连在一起。质粒被放回细菌，细菌在发酵罐中培养——它的每一个后代都携带这个人类基因并生产人胰岛素，随后加以提取和纯化。"
      },
      {
        "type": "paragraph",
        "text": "两种酶都重要，也都是考点。限制酶负责切，连接酶负责连。而黏性末端才是整件事能成立的关键——正因为有它们，人类基因才能嵌进细菌质粒，而不是直接掉出来。"
      },
      {
        "type": "paragraph",
        "text": "关于转基因作物的争论，两方的理由都值得了解。支持方：产量更高，同样的土地产出更多粮食；抗虫，从而减少杀虫剂使用；增加营养，如黄金大米中的维生素 A；以及耐旱或耐盐。"
      },
      {
        "type": "paragraph",
        "text": "反对方：改造过的基因可能经传粉扩散到野生近缘种；对健康的长期影响尚未完全清楚；种子往往被专利保护，农民无法留种；而传统品种的消失会减少遗传变异——正如你在保护那一节看到的，遗传变异正是物种适应变化所必需的。"
      },
      {
        "type": "formula",
        "latex": "\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\,\\mathrm{C_2H_5OH} + 2\\,\\mathrm{CO_2}",
        "caption": "酵母的无氧呼吸。酿酒时乙醇是产物，做面包时二氧化碳才是。一个反应，两个行业。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "fermenter（发酵罐）：用于工业规模培养微生物的大型无菌容器，温度、pH、氧气与搅拌都受到控制。",
          "plasmid（质粒）：细菌中的小环状 DNA，可以被切开、插入新基因后再放回。",
          "restriction enzyme（限制酶）：在特定序列处切开 DNA、留下黏性末端的酶。它负责\"切\"。",
          "ligase（连接酶）：把 DNA 片段永久连接在一起的酶。它负责\"接\"。",
          "sticky ends（黏性末端）：限制酶切割后留下的短单链突出端。它们与互补末端配对，正因如此人类基因才能嵌入细菌质粒。"
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
          "Discuss why bacteria are useful in biotechnology and genetic modification. (Extended)",
          "Describe the role of anaerobic respiration in yeast in making ethanol and in bread-making.",
          "Describe the use of pectinase in fruit juice production and of enzymes in biological washing powders.",
          "Explain the use of lactase to produce lactose-free milk. (Extended)",
          "Describe how fermenters are used, and describe and explain the conditions controlled inside them. (Extended)",
          "Describe genetic modification and outline the process of using bacteria to make a human protein. (Extended)",
          "Discuss the advantages and disadvantages of genetically modifying crops. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "One reaction, two industries"
      },
      {
        "type": "paragraph",
        "text": "Yeast respiring anaerobically converts glucose into ethanol and carbon dioxide. That single reaction underlies two entirely different industries, and which product you want decides everything about how you run it."
      },
      {
        "type": "paragraph",
        "text": "For brewing, the ethanol is the product. Yeast is mixed with a sugar solution from barley or grapes, kept anaerobic, and left to ferment. The carbon dioxide is the by-product — though in a sparkling wine it is kept in."
      },
      {
        "type": "paragraph",
        "text": "For bread, the carbon dioxide is the product. Yeast is mixed into dough, and the gas bubbles are trapped by the gluten, so the dough rises. The ethanol is the by-product, and it evaporates in the oven — which is why bread does not make you drunk."
      },
      {
        "type": "paragraph",
        "text": "Enzymes are used industrially too, and the pattern is always the same: an enzyme does at low temperature what would otherwise need heat, harsh chemicals or nothing at all. Pectinase breaks down pectin in fruit cell walls, releasing more juice and making it clear rather than cloudy."
      },
      {
        "type": "paragraph",
        "text": "Biological washing powders contain proteases and lipases, which digest protein and fat stains into small soluble molecules that wash away — and they work at low temperatures, which saves energy. Lactase converts the lactose in milk into glucose and galactose, producing lactose-free milk for people who cannot digest it themselves."
      },
      {
        "type": "heading",
        "text": "Moving a gene"
      },
      {
        "type": "paragraph",
        "text": "Genetic modification is changing an organism’s genetic material by removing, changing or inserting individual genes. Insulin-producing bacteria, crops resistant to herbicides or insects, and rice modified to make beta-carotene are the standard examples."
      },
      {
        "type": "paragraph",
        "text": "Making human insulin in bacteria goes like this. Restriction enzymes cut the human insulin gene out of human DNA, leaving sticky ends — short single-stranded overhangs. The same restriction enzyme cuts open a bacterial plasmid, leaving complementary sticky ends."
      },
      {
        "type": "paragraph",
        "text": "The ends pair up, and ligase joins them permanently. The plasmid is put back into a bacterium, which is grown in a fermenter — and every one of its descendants carries the human gene and makes human insulin, which is then extracted and purified."
      },
      {
        "type": "paragraph",
        "text": "Both enzymes matter and both are examinable. The restriction enzyme cuts; the ligase joins. And the sticky ends are what make it work at all — they are why the human gene fits into a bacterial plasmid instead of simply falling out."
      },
      {
        "type": "paragraph",
        "text": "The arguments about GM crops are worth knowing on both sides. For: higher yields, so more food from the same land; resistance to pests, so fewer pesticides; added nutrients, such as vitamin A in golden rice; and tolerance of drought or salt."
      },
      {
        "type": "paragraph",
        "text": "Against: the modified genes may spread to wild relatives by pollination; the long-term effects on health are not fully known; seed is often patented, so farmers cannot save it; and the loss of traditional varieties reduces genetic variation — which, as you saw with conservation, is what a species needs in order to adapt."
      },
      {
        "type": "formula",
        "latex": "\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\,\\mathrm{C_2H_5OH} + 2\\,\\mathrm{CO_2}",
        "caption": "Anaerobic respiration in yeast. In brewing the ethanol is the product; in bread-making the carbon dioxide is. One reaction, two industries."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "fermenter (发酵罐): A large sterile vessel for growing microorganisms on an industrial scale, with temperature, pH, oxygen and stirring all controlled.",
          "plasmid (质粒): A small ring of DNA in a bacterium that can be cut open, given a new gene and put back.",
          "restriction enzyme (限制酶): An enzyme that cuts DNA at a specific sequence, leaving sticky ends. It does the cutting.",
          "ligase (连接酶): An enzyme that joins DNA fragments together permanently. It does the joining.",
          "sticky ends (黏性末端): Short single-stranded overhangs left by a restriction enzyme. They pair with complementary ends, which is what lets a human gene fit into a bacterial plasmid."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-21-1-cp1",
      "syllabus": [
        "0610/21.2.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Explain why the temperature, pH, oxygen supply and stirring must all be controlled inside an industrial fermenter.",
      "markScheme": [
        {
          "text": "Temperature is kept at the optimum for the enzymes controlling the reactions; too high and they denature",
          "marks": 1
        },
        {
          "text": "pH is kept at the optimum for those enzymes, so the reactions proceed at the maximum rate",
          "marks": 1
        },
        {
          "text": "Oxygen is supplied because the microorganisms respire aerobically, which releases far more energy per glucose molecule",
          "marks": 1
        },
        {
          "text": "Stirring keeps the microorganisms suspended and in contact with the nutrients and oxygen, and distributes the heat evenly",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "四项条件、四条理由——只罗列条件而不给理由，一分不得。其中两条理由都与酶有关，值得明确写出来。",
        "en": "Four conditions, four reasons — a list of the conditions with no reasons scores nothing. Two of the four reasons are about enzymes, which is worth saying explicitly."
      }
    },
    {
      "id": "0610-21-1-cp2",
      "syllabus": [
        "0610/21.2.7"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "A large industrial fermenter is fitted with a jacket through which cold water is circulated. Explain why cooling, rather than heating, is needed.",
      "markScheme": [
        {
          "text": "The microorganisms respire, and respiration releases energy as heat",
          "marks": 1
        },
        {
          "text": "There are very large numbers of them, and a large vessel has a small surface area relative to its volume, so the heat cannot escape fast enough",
          "marks": 1
        },
        {
          "text": "Without cooling the temperature would rise above the optimum and the enzymes would denature, killing the culture",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "热量来自内部。以为发酵罐像水浴一样需要加热的学生，就完全没有抓住夹层的用意。",
        "en": "The heat comes from inside. Students who assume a fermenter is heated like a water bath miss the whole point of the jacket."
      }
    },
    {
      "id": "0610-21-1-cp3",
      "syllabus": [
        "0610/21.3.3"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 5,
      "stem": "Describe how bacteria can be genetically modified to produce human insulin.",
      "markScheme": [
        {
          "text": "A restriction enzyme is used to cut the insulin gene out of human DNA, leaving sticky ends",
          "marks": 1
        },
        {
          "text": "The same restriction enzyme cuts open a plasmid taken from a bacterium, leaving complementary sticky ends",
          "marks": 1
        },
        {
          "text": "The sticky ends of the gene and the plasmid pair up, and ligase joins them together",
          "marks": 1
        },
        {
          "text": "The plasmid is inserted into a bacterium, which is then grown in a fermenter",
          "marks": 1
        },
        {
          "text": "Every descendant carries the gene and produces human insulin, which is extracted and purified",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "两种酶都要说出，且分工不能弄混：限制酶负责切，连接酶负责接。黏性末端正是基因能留在质粒中而不掉出来的原因。",
        "en": "Name both enzymes and keep their jobs straight: restriction enzymes cut, ligase joins. The sticky ends are why the gene stays in the plasmid rather than falling out."
      }
    },
    {
      "id": "0610-21-1-cp4",
      "syllabus": [
        "0610/21.2.1",
        "0610/21.2.2"
      ],
      "tier": "core",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Yeast is used in both brewing and bread-making. Compare how the same reaction is used differently in each.",
      "markScheme": [
        {
          "text": "In both, yeast respires anaerobically, converting glucose into ethanol and carbon dioxide",
          "marks": 1
        },
        {
          "text": "In brewing the ethanol is the useful product and the carbon dioxide is usually allowed to escape",
          "marks": 1
        },
        {
          "text": "In bread-making the carbon dioxide is the useful product — it is trapped in the dough and makes it rise — while the ethanol evaporates during baking",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "先说明反应是同一个，再分开讲。另外\"使面团发起来\"需要气体被截留，而不只是被产生出来。",
        "en": "Start by saying the reaction is the same, then split. And \"it makes the dough rise\" needs the gas being trapped, not just produced."
      }
    },
    {
      "id": "0610-21-1-cp5",
      "syllabus": [
        "0610/21.1.2"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain why bacteria are particularly suitable for use in genetic modification.",
      "markScheme": [
        {
          "text": "They contain plasmids, small rings of DNA that can be removed, cut open, given a gene and returned",
          "marks": 1
        },
        {
          "text": "They reproduce very rapidly, so large numbers of the modified bacteria are produced quickly",
          "marks": 1
        },
        {
          "text": "The genetic code is universal, so a human gene is read in the same way and the bacterium produces the human protein; and there are few ethical objections compared with using animals",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"遗传密码通用\"这一分最常被漏掉，而它正是整项技术之所以可行的根本原因。",
        "en": "The universal genetic code is the mark most often missed, and it is the reason the whole technique works at all."
      }
    },
    {
      "id": "0610-21-1-cp6",
      "syllabus": [
        "0610/21.2.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Explain how lactase is used to produce milk suitable for people who cannot digest lactose.",
      "markScheme": [
        {
          "text": "Lactase breaks down the lactose in the milk into glucose and galactose",
          "marks": 1
        },
        {
          "text": "These are absorbed without needing the person’s own lactase, so the milk can be drunk without symptoms",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这种酶在牛奶被喝下之前就完成了消化，使人不必自己去消化。整个思路就在于此。",
        "en": "The enzyme does the digestion before the milk is drunk, so the person does not have to. That is the whole idea."
      }
    },
    {
      "id": "0610-21-1-cp7",
      "syllabus": [
        "0610/21.3.4"
      ],
      "tier": "supplement",
      "commandWord": "Suggest",
      "marks": 4,
      "stem": "Suggest two advantages and two disadvantages of growing genetically modified crops.",
      "markScheme": [
        {
          "text": "Advantage: higher yields, so more food is produced from the same area of land",
          "marks": 1
        },
        {
          "text": "Advantage: resistance to pests or herbicides reduces pesticide use, or added nutrients such as vitamin A address deficiency diseases",
          "marks": 1
        },
        {
          "text": "Disadvantage: modified genes may spread to wild relatives by pollination, or long-term effects on health are not fully known",
          "marks": 1
        },
        {
          "text": "Disadvantage: seed is often patented so farmers cannot save it, or loss of traditional varieties reduces genetic variation",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "正反各两点。只写一面，无论论述多好都会丢掉一半分数。",
        "en": "Two of each. Answering with only one side loses half the marks however well it is argued."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "target",
        "label": {
          "zh": "夹层维持的温度",
          "en": "Temperature the jacket holds"
        },
        "min": 5,
        "max": 45,
        "step": 1,
        "defaultValue": 30,
        "unit": "°C"
      },
      {
        "key": "oxygen",
        "label": {
          "zh": "通入的氧气",
          "en": "Oxygen bubbled through"
        },
        "min": 0,
        "max": 200,
        "step": 5,
        "defaultValue": 100,
        "unit": "%"
      },
      {
        "key": "ph",
        "label": {
          "zh": "培养液的 pH",
          "en": "pH of the culture"
        },
        "min": 3,
        "max": 10,
        "step": 0.5,
        "defaultValue": 6.5,
        "unit": ""
      },
      {
        "key": "cooling",
        "label": {
          "zh": "冷却系统的效能",
          "en": "How well the cooling works"
        },
        "min": 0,
        "max": 100,
        "step": 5,
        "defaultValue": 100,
        "unit": "%"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "21-1-biotechnology",
        "hint": {
          "en": "Turn the cooling down and watch the temperature go up. Nothing heated it from outside.",
          "zh": "把冷却调低，看温度如何上升。没有任何外部热源加热它。"
        },
        "params": [
          {
            "key": "target",
            "label": {
              "en": "Temperature the jacket holds",
              "zh": "夹层维持的温度"
            },
            "unit": "°C",
            "min": 5,
            "max": 45,
            "step": 1,
            "default": 30
          },
          {
            "key": "oxygen",
            "label": {
              "en": "Oxygen bubbled through",
              "zh": "通入的氧气"
            },
            "unit": "%",
            "min": 0,
            "max": 200,
            "step": 5,
            "default": 100
          },
          {
            "key": "ph",
            "label": {
              "en": "pH of the culture",
              "zh": "培养液的 pH"
            },
            "unit": "",
            "min": 3,
            "max": 10,
            "step": 0.5,
            "default": 6.5
          },
          {
            "key": "cooling",
            "label": {
              "en": "How well the cooling works",
              "zh": "冷却系统的效能"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 5,
            "default": 100
          }
        ],
        "readouts": [
          {
            "key": "temperature",
            "label": {
              "en": "Temperature reached",
              "zh": "实际达到的温度"
            },
            "unit": "°C",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "growthRate",
            "label": {
              "en": "Growth rate",
              "zh": "生长速率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "finalBiomass",
            "label": {
              "en": "Microorganisms at the end",
              "zh": "结束时的微生物量"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "yield",
            "label": {
              "en": "Product obtained",
              "zh": "获得的产物"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Everything at its optimum",
              "zh": "各项条件均为最适"
            },
            "params": {
              "target": 30,
              "oxygen": 100,
              "ph": 6.5,
              "cooling": 100
            }
          },
          {
            "label": {
              "en": "The cooling has failed",
              "zh": "冷却系统失效"
            },
            "params": {
              "target": 30,
              "oxygen": 100,
              "ph": 6.5,
              "cooling": 0
            }
          },
          {
            "label": {
              "en": "Cooling only half working",
              "zh": "冷却只发挥一半作用"
            },
            "params": {
              "target": 30,
              "oxygen": 100,
              "ph": 6.5,
              "cooling": 50
            }
          },
          {
            "label": {
              "en": "Short of oxygen",
              "zh": "氧气不足"
            },
            "params": {
              "target": 30,
              "oxygen": 5,
              "ph": 6.5,
              "cooling": 100
            }
          },
          {
            "label": {
              "en": "The pH has drifted",
              "zh": "pH 已偏离"
            },
            "params": {
              "target": 30,
              "oxygen": 100,
              "ph": 3.5,
              "cooling": 100
            }
          },
          {
            "label": {
              "en": "Set too cold",
              "zh": "设定温度过低"
            },
            "params": {
              "target": 10,
              "oxygen": 100,
              "ph": 6.5,
              "cooling": 100
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
        "zh": "各项条件均为最适",
        "en": "Everything at its optimum"
      },
      "params": {
        "target": 30,
        "oxygen": 100,
        "ph": 6.5,
        "cooling": 100
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "冷却系统失效",
        "en": "The cooling has failed"
      },
      "params": {
        "target": 30,
        "oxygen": 100,
        "ph": 6.5,
        "cooling": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "冷却只发挥一半作用",
        "en": "Cooling only half working"
      },
      "params": {
        "target": 30,
        "oxygen": 100,
        "ph": 6.5,
        "cooling": 50
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "氧气不足",
        "en": "Short of oxygen"
      },
      "params": {
        "target": 30,
        "oxygen": 5,
        "ph": 6.5,
        "cooling": 100
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "pH 已偏离",
        "en": "The pH has drifted"
      },
      "params": {
        "target": 30,
        "oxygen": 100,
        "ph": 3.5,
        "cooling": 100
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "设定温度过低",
        "en": "Set too cold"
      },
      "params": {
        "target": 10,
        "oxygen": 100,
        "ph": 6.5,
        "cooling": 100
      }
    }
  ]
};
