/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/2-1-cells
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/2-1-cells/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/2-1-cells/kernel';

export const kp21Cells: KnowledgePoint = {
  "id": "igcse-0610-2-1-cells",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "细胞与生物大分子",
    "en": "Cells and biological molecules"
  },
  "summary": {
    "zh": "植物细胞并不是\"动物细胞加几样东西\"。把结构分一分类就会发现，大多数结构每种细胞都有——而细菌的特征恰恰在于它缺什么。",
    "en": "A plant cell is not an animal cell with extras. Sort the structures and most of them turn out to be in every cell — a bacterium is defined by what it lacks."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/2.1.1",
      "0610/2.1.2",
      "0610/2.1.3",
      "0610/2.1.4",
      "0610/2.1.5",
      "0610/2.1.6",
      "0610/2.1.7",
      "0610/2.2.1",
      "0610/2.2.2",
      "0610/2.2.3",
      "0610/4.1.1",
      "0610/4.1.2",
      "0610/4.1.3",
      "0610/4.1.4"
    ]
  },
  "keywords": {
    "zh": [
      "细胞器",
      "质粒",
      "组织",
      "放大倍数",
      "还原糖",
      "双螺旋"
    ],
    "en": [
      "organelle",
      "plasmid",
      "tissue",
      "magnification",
      "reducing sugar",
      "double helix"
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
          "描述并比较植物、动物与细菌细胞的结构，并说出各结构的功能。",
          "说明新细胞由已有细胞分裂产生，特化细胞具有特定功能。",
          "说明细胞、组织、器官、器官系统与个体的含义。",
          "写出并使用\"放大倍数 = 图像大小 ÷ 实际大小\"，并在毫米与微米之间换算。（Extended）",
          "列出糖类、脂肪与蛋白质所含的元素，以及构成各自的小分子。",
          "描述淀粉、还原糖、蛋白质、脂肪与维生素 C 的检验方法。",
          "把 DNA 的结构描述为碱基配对的双螺旋。（Extended）"
        ]
      },
      {
        "type": "paragraph",
        "text": "植物细胞并不是\"动物细胞加几样东西\"。把结构分一分类就会发现，大多数结构每种细胞都有——而细菌的特征恰恰在于它缺什么。"
      },
      {
        "type": "formula",
        "latex": "M = \\dfrac{\\text{image size}}{\\text{actual size}}",
        "caption": "长度除以长度，因此放大倍数没有单位。要在做除法之前把毫米换算成微米，而不是之后——1 毫米等于 1000 微米。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "organelle（细胞器）：细胞内部具有特定功能的结构。细菌完全没有膜包被的细胞器。",
          "plasmid（质粒）：细菌中额外的小环状 DNA。它既是把基因导入细菌的途径，也是抗生素耐药性在细菌间传播的方式。",
          "tissue（组织）：一群结构相似、共同完成同一功能的细胞。",
          "magnification（放大倍数）：图像大小除以实际大小。长度除以长度，因此没有单位。",
          "reducing sugar（还原糖）：能使本尼迪克特试验呈阳性的糖——加热后由蓝色变为绿、黄、橙或砖红色。",
          "double helix（双螺旋）：DNA 的形状：两条链相互缠绕，由成对的碱基连接在一起。"
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
          "Describe and compare the structures of plant, animal and bacterial cells, and state the functions of those structures.",
          "State that new cells come from division of existing cells, and that specialised cells have specific functions.",
          "Describe the terms cell, tissue, organ, organ system and organism.",
          "State and use magnification = image size ÷ actual size, converting between millimetres and micrometres. (Extended)",
          "List the elements in carbohydrates, fats and proteins, and the small molecules that build each.",
          "Describe the food tests for starch, reducing sugars, protein, fats and vitamin C.",
          "Describe the structure of DNA as a double helix of paired bases. (Extended)"
        ]
      },
      {
        "type": "paragraph",
        "text": "A plant cell is not an animal cell with extras. Sort the structures and most of them turn out to be in every cell — a bacterium is defined by what it lacks."
      },
      {
        "type": "formula",
        "latex": "M = \\dfrac{\\text{image size}}{\\text{actual size}}",
        "caption": "A length divided by a length, so magnification has no units. Convert millimetres to micrometres before dividing, not after — there are 1000 micrometres in a millimetre."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "organelle (细胞器): A structure inside a cell with its own job. Bacteria have no membrane-bound organelles at all.",
          "plasmid (质粒): A small extra ring of DNA in a bacterium. How genes are put into bacteria, and how antibiotic resistance spreads between them.",
          "tissue (组织): A group of cells of similar structure working together on one function.",
          "magnification (放大倍数): Image size divided by actual size. A length over a length, so it has no units.",
          "reducing sugar (还原糖): A sugar that gives a positive Benedict’s test — blue to green, yellow, orange or brick red on heating.",
          "double helix (双螺旋): The shape of DNA: two strands wound round each other, held together by pairs of bases."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-2-1-cp1",
      "syllabus": [
        "0610/2.1.1",
        "0610/2.1.2"
      ],
      "tier": "core",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Compare the structure of a bacterial cell with that of a plant cell. Give three differences.",
      "markScheme": [
        {
          "text": "A bacterial cell has no nucleus — its DNA is a circular loop free in the cytoplasm — while a plant cell has a nucleus",
          "marks": 1
        },
        {
          "text": "A bacterial cell has no chloroplasts or mitochondria, or no membrane-bound organelles at all",
          "marks": 1
        },
        {
          "text": "A bacterial cell wall is not made of cellulose, and a bacterium may have plasmids while a plant cell does not; or a plant cell has a large permanent vacuole",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"Compare\"要求每条差异都写出两边。另外，细菌确实有细胞壁、细胞质、细胞膜和核糖体——写\"它没有细胞壁\"是常见且代价不小的错误。",
        "en": "\"Compare\" needs both sides of each difference. And a bacterium does have a cell wall, cytoplasm, a membrane and ribosomes — saying it has \"no cell wall\" is a common and costly error."
      }
    },
    {
      "id": "0610-2-1-cp2",
      "syllabus": [
        "0610/2.2.2",
        "0610/2.2.3"
      ],
      "tier": "supplement",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A drawing of a cell is 60 mm long. The actual cell is 30 micrometres long. Calculate the magnification of the drawing. Show your working.",
      "markScheme": [
        {
          "text": "Converts to the same unit: 60 mm = 60 000 µm (or 30 µm = 0.03 mm)",
          "marks": 1
        },
        {
          "text": "Magnification = image size ÷ actual size = 60 000 ÷ 30",
          "marks": 1
        },
        {
          "text": "= × 2000, with no units",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "先换算。不换算就用 60 除以 30 会得到 ×2，所有分数全丢。另外，放大倍数不带单位。",
        "en": "Convert first. Dividing 60 by 30 without converting gives × 2 and throws away every mark. And magnification carries no unit."
      }
    },
    {
      "id": "0610-2-1-cp3",
      "syllabus": [
        "0610/4.1.3"
      ],
      "tier": "core",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "A student is given a solution and asked to find out whether it contains starch and whether it contains a reducing sugar. Describe the two tests, including the results that would be positive.",
      "markScheme": [
        {
          "text": "Add iodine solution to a sample",
          "marks": 1
        },
        {
          "text": "A positive result is a colour change from orange-brown to blue-black",
          "marks": 1
        },
        {
          "text": "To a separate sample add Benedict’s solution and heat it in a water bath",
          "marks": 1
        },
        {
          "text": "A positive result is a colour change from blue to green, yellow, orange or brick red",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "每种检验都要写出前后两种颜色，并且不要忘记本尼迪克特试剂必须加热。要用分开的样品——两种检验不能在同一支试管里做。",
        "en": "Give both colours for each test, and do not forget that Benedict’s must be heated. Use separate samples — you cannot run both tests in the same tube."
      }
    },
    {
      "id": "0610-2-1-cp4",
      "syllabus": [
        "0610/4.1.1",
        "0610/4.1.2"
      ],
      "tier": "core",
      "commandWord": "State",
      "marks": 3,
      "stem": "State the small molecules from which starch, protein and fat are built, and state which of the three contains nitrogen.",
      "markScheme": [
        {
          "text": "Starch is built from simple sugars (glucose)",
          "marks": 1
        },
        {
          "text": "Protein is built from amino acids; fat from fatty acids and glycerol",
          "marks": 1
        },
        {
          "text": "Protein is the one that contains nitrogen",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"含氮\"是从元素清单中辨认蛋白质的依据，也是植物需要从土壤中吸收硝酸根离子的原因。",
        "en": "Nitrogen is how you identify a protein from a list of elements, and it is why a plant needs nitrate ions from the soil."
      }
    },
    {
      "id": "0610-2-1-cp5",
      "syllabus": [
        "0610/2.1.6",
        "0610/2.1.7"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Using an example, explain the difference between a tissue and an organ.",
      "markScheme": [
        {
          "text": "A tissue is a group of cells of similar structure working together — for example muscle tissue",
          "marks": 1
        },
        {
          "text": "An organ is several different tissues working together for one function — for example the stomach, which contains muscle, glandular and epithelial tissue",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "区别在于\"一种细胞\"与\"多种组织\"。举例能让它变得具体，而题目正要求举例。",
        "en": "The distinction is \"one kind of cell\" against \"several kinds of tissue\". An example makes it concrete and the question asks for one."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "stage",
        "label": {
          "zh": "练习",
          "en": "Exercise"
        },
        "min": 1,
        "max": 3,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "place-s-chloroplast",
        "label": {
          "zh": "叶绿体",
          "en": "Chloroplasts"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-membrane",
        "label": {
          "zh": "细胞膜",
          "en": "Cell membrane"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-plasmid",
        "label": {
          "zh": "质粒",
          "en": "Plasmids"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-nucleus",
        "label": {
          "zh": "细胞核",
          "en": "Nucleus"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-ribosome",
        "label": {
          "zh": "核糖体",
          "en": "Ribosomes"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-vacuole",
        "label": {
          "zh": "大的永久液泡",
          "en": "Large permanent vacuole"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-cytoplasm",
        "label": {
          "zh": "细胞质",
          "en": "Cytoplasm"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-mito",
        "label": {
          "zh": "线粒体",
          "en": "Mitochondria"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-loopdna",
        "label": {
          "zh": "游离于细胞质的环状 DNA",
          "en": "Circular DNA, free in the cytoplasm"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-s-wall",
        "label": {
          "zh": "纤维素细胞壁",
          "en": "Cellulose cell wall"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-m-haemoglobin",
        "label": {
          "zh": "血红蛋白",
          "en": "Haemoglobin"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-m-oliveoil",
        "label": {
          "zh": "橄榄油",
          "en": "Olive oil"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-m-starch",
        "label": {
          "zh": "淀粉",
          "en": "Starch"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-m-amylase",
        "label": {
          "zh": "淀粉酶",
          "en": "Amylase"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-m-cellulose",
        "label": {
          "zh": "纤维素",
          "en": "Cellulose"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-m-butter",
        "label": {
          "zh": "黄油",
          "en": "Butter"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-m-glycogen",
        "label": {
          "zh": "糖原",
          "en": "Glycogen"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-m-antibody",
        "label": {
          "zh": "抗体",
          "en": "An antibody"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-t-vitc",
        "label": {
          "zh": "维生素 C",
          "en": "Vitamin C"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-t-starch",
        "label": {
          "zh": "淀粉",
          "en": "Starch"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-t-fat",
        "label": {
          "zh": "脂肪",
          "en": "Fat"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-t-glucose",
        "label": {
          "zh": "葡萄糖（还原糖）",
          "en": "Glucose (a reducing sugar)"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      },
      {
        "key": "place-t-protein",
        "label": {
          "zh": "蛋白质",
          "en": "Protein"
        },
        "min": 0,
        "max": 5,
        "step": 1,
        "defaultValue": 0,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "sort",
        "kernel": "2-1-cells",
        "hint": {
          "en": "Read the features on each group first. A wrong placement stays put and is marked — click it to take it back.",
          "zh": "先读每个类别上的说明。放错的会留在原处并被标出——点击它即可取回。"
        },
        "params": [
          {
            "key": "stage",
            "label": {
              "en": "Exercise",
              "zh": "练习"
            },
            "unit": "",
            "min": 1,
            "max": 3,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 1,
                "label": {
                  "en": "Cell structures",
                  "zh": "细胞结构"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Building blocks",
                  "zh": "构成单元"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Food tests",
                  "zh": "食物检验"
                }
              }
            ]
          },
          {
            "key": "place-s-chloroplast",
            "label": {
              "en": "Chloroplasts",
              "zh": "叶绿体"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-membrane",
            "label": {
              "en": "Cell membrane",
              "zh": "细胞膜"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-plasmid",
            "label": {
              "en": "Plasmids",
              "zh": "质粒"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-nucleus",
            "label": {
              "en": "Nucleus",
              "zh": "细胞核"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-ribosome",
            "label": {
              "en": "Ribosomes",
              "zh": "核糖体"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-vacuole",
            "label": {
              "en": "Large permanent vacuole",
              "zh": "大的永久液泡"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-cytoplasm",
            "label": {
              "en": "Cytoplasm",
              "zh": "细胞质"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-mito",
            "label": {
              "en": "Mitochondria",
              "zh": "线粒体"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-loopdna",
            "label": {
              "en": "Circular DNA, free in the cytoplasm",
              "zh": "游离于细胞质的环状 DNA"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-s-wall",
            "label": {
              "en": "Cellulose cell wall",
              "zh": "纤维素细胞壁"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-m-haemoglobin",
            "label": {
              "en": "Haemoglobin",
              "zh": "血红蛋白"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-m-oliveoil",
            "label": {
              "en": "Olive oil",
              "zh": "橄榄油"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-m-starch",
            "label": {
              "en": "Starch",
              "zh": "淀粉"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-m-amylase",
            "label": {
              "en": "Amylase",
              "zh": "淀粉酶"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-m-cellulose",
            "label": {
              "en": "Cellulose",
              "zh": "纤维素"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-m-butter",
            "label": {
              "en": "Butter",
              "zh": "黄油"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-m-glycogen",
            "label": {
              "en": "Glycogen",
              "zh": "糖原"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-m-antibody",
            "label": {
              "en": "An antibody",
              "zh": "抗体"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-t-vitc",
            "label": {
              "en": "Vitamin C",
              "zh": "维生素 C"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-t-starch",
            "label": {
              "en": "Starch",
              "zh": "淀粉"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-t-fat",
            "label": {
              "en": "Fat",
              "zh": "脂肪"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-t-glucose",
            "label": {
              "en": "Glucose (a reducing sugar)",
              "zh": "葡萄糖（还原糖）"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          },
          {
            "key": "place-t-protein",
            "label": {
              "en": "Protein",
              "zh": "蛋白质"
            },
            "unit": "",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "hidden": true
          }
        ],
        "readouts": [
          {
            "key": "correct",
            "label": {
              "en": "Correct",
              "zh": "正确"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "placed",
            "label": {
              "en": "Placed",
              "zh": "已放置"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          },
          {
            "key": "total",
            "label": {
              "en": "Items",
              "zh": "条目总数"
            },
            "unit": "",
            "sigFigs": 2,
            "exact": true
          }
        ]
      },
      "kernel": kernel
    }
  }
};
