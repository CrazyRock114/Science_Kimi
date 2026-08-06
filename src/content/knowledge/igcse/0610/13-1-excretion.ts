/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/13-1-excretion
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/13-1-excretion/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/13-1-excretion/kernel';

export const kp131Excretion: KnowledgePoint = {
  "id": "igcse-0610-13-1-excretion",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "排泄",
    "en": "Excretion"
  },
  "summary": {
    "zh": "肾不是滤器。它先把血液中几乎所有的小分子挤出去，再把大部分收回来，逐一决定留下什么。",
    "en": "A kidney is not a filter. It forces almost everything out of the blood and then takes most of it back, deciding substance by substance what to keep."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/13.1.1",
      "0610/13.1.2",
      "0610/13.1.3",
      "0610/13.1.4",
      "0610/13.1.5",
      "0610/13.1.6",
      "0610/13.1.7",
      "0610/13.1.8",
      "0610/13.1.9"
    ]
  },
  "keywords": {
    "zh": [
      "排泄",
      "脱氨基",
      "超滤",
      "选择性重吸收",
      "肾单位"
    ],
    "en": [
      "excretion",
      "deamination",
      "ultrafiltration",
      "selective reabsorption",
      "nephron"
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
          "说明二氧化碳经肺排出，肾排出尿素及多余的水和离子。",
          "识别肾、输尿管、膀胱与尿道，以及肾的皮质与髓质。（Extended）",
          "概述肾单位及其血管的结构与功能。（Extended）",
          "描述肝脏在氨基酸同化中的作用，以及脱氨基。（Extended）",
          "用尿素的毒性解释排泄的重要性。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "这一切发生在哪里"
      },
      {
        "type": "paragraph",
        "text": "泌尿系统：两个肾，各连一条输尿管把尿液送到膀胱贮存，再由尿道排出。两条输尿管、一条尿道——英文拼写几乎一样，但分数可不一样。"
      },
      {
        "type": "paragraph",
        "text": "把肾横切开，可见两个区域：外层的皮质和内层的髓质。肾小球和肾小囊都在皮质中；肾小管的袢向下深入髓质，大部分水正是在那里被回收的。"
      },
      {
        "type": "paragraph",
        "text": "每个肾单位都有自己的血管全程伴行——这是必须的，因为被重吸收的一切都要回到血液中，而且必须沿肾小管全程收集，而不是在某一点收集。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "excretion（排泄）：排出代谢废物、有毒物质以及超出需要的物质。与排遗不同。",
          "deamination（脱氨基）：在肝脏中去除氨基酸的含氮部分。多余的氨基酸无法贮存，因此必须被分解。",
          "ultrafiltration（超滤）：在肾小球处高压下进行的滤过，只按分子大小筛选。蛋白质分子太大而无法通过。",
          "selective reabsorption（选择性重吸收）：沿肾小管把有用物质从滤液中收回血液——葡萄糖全部收回，水大部分收回，尿素几乎不收回。",
          "nephron（肾单位）：肾的功能单位：包在肾小囊中的肾小球，随后是肾小管，并有自己的血管全程伴行。"
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
          "State that carbon dioxide is excreted through the lungs, and that the kidneys excrete urea, excess water and ions.",
          "Identify the kidneys, ureters, bladder and urethra, and the cortex and medulla of the kidney. (Extended)",
          "Outline the structure and function of a nephron and its blood vessels. (Extended)",
          "Describe the role of the liver in the assimilation of amino acids, and deamination. (Extended)",
          "Explain the importance of excretion in terms of the toxicity of urea. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Where all this happens"
      },
      {
        "type": "paragraph",
        "text": "The urinary system: two kidneys, a ureter from each carrying urine down to the bladder, which stores it, and the urethra carrying it out. Two ureters, one urethra — the spelling is nearly the same and the marks are not."
      },
      {
        "type": "paragraph",
        "text": "Cut a kidney across and there are two regions: an outer cortex and an inner medulla. The glomeruli and capsules are all in the cortex; the loops of the tubules run down into the medulla, which is where most of the water is reclaimed."
      },
      {
        "type": "paragraph",
        "text": "And each nephron has its own blood supply running alongside it the whole way — which it must, because everything reabsorbed has to go back into the blood, and it has to be collected all along the tubule rather than at one point."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "excretion (排泄): Removing the waste products of metabolism, toxic materials and substances in excess of requirements. Not the same as egestion.",
          "deamination (脱氨基): Removing the nitrogen-containing part of an amino acid in the liver. There is no store for excess amino acids, so they must be broken down.",
          "ultrafiltration (超滤): Filtration at the glomerulus under high pressure, selecting by molecule size alone. Protein molecules are too large to pass.",
          "selective reabsorption (选择性重吸收): Taking useful substances back from the filtrate into the blood along the tubule — all of the glucose, most of the water, almost none of the urea.",
          "nephron (肾单位): The working unit of a kidney: a glomerulus in a capsule, then a tubule, with its own blood supply running alongside."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-13-1-cp1",
      "syllabus": [
        "0610/13.1.5"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Glucose is present in the filtrate in the capsule but absent from the urine of a healthy person. Explain why.",
      "markScheme": [
        {
          "text": "Glucose molecules are small enough to pass through the capillary wall during ultrafiltration, so all of it enters the filtrate",
          "marks": 1
        },
        {
          "text": "Glucose is a valuable respiratory substrate and must not be lost",
          "marks": 1
        },
        {
          "text": "It is reabsorbed from the tubule back into the blood by selective reabsorption",
          "marks": 1
        },
        {
          "text": "using active transport, against a concentration gradient and requiring energy from respiration",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "超滤无法把葡萄糖排除在外——它只按分子大小筛选，而葡萄糖很小。所有有用的物质都是先被滤出，再被收回。",
        "en": "Ultrafiltration cannot exclude glucose — it selects by size alone, and glucose is small. Everything useful is filtered out first and then reclaimed."
      }
    },
    {
      "id": "0610-13-1-cp2",
      "syllabus": [
        "0610/13.1.5"
      ],
      "tier": "supplement",
      "commandWord": "Deduce",
      "marks": 3,
      "stem": "A urine sample from a patient is found to contain protein. Deduce what this indicates about the patient’s kidneys, and explain your reasoning.",
      "markScheme": [
        {
          "text": "The glomerulus (or the capillary wall) is damaged",
          "marks": 1
        },
        {
          "text": "because protein molecules are normally too large to pass through during ultrafiltration, so they never enter the filtrate at all",
          "marks": 1
        },
        {
          "text": "The fault therefore cannot be one of reabsorption — there is normally no protein in the filtrate to reabsorb",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "多吃蛋白质升高的是尿素，而不是尿蛋白——两者无关，把它们混淆是这道题最常见的错误答案。",
        "en": "Eating more protein raises urea, not urinary protein — the two are unrelated, and confusing them is the commonest wrong answer here."
      }
    },
    {
      "id": "0610-13-1-cp3",
      "syllabus": [
        "0610/13.1.6",
        "0610/13.1.7",
        "0610/13.1.8"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "Describe what happens to amino acids that are absorbed in excess of the body’s requirements.",
      "markScheme": [
        {
          "text": "Excess amino acids cannot be stored in the body",
          "marks": 1
        },
        {
          "text": "They are carried to the liver and deaminated",
          "marks": 1
        },
        {
          "text": "The nitrogen-containing part is removed and converted into urea",
          "marks": 1
        },
        {
          "text": "The remainder is used in respiration or converted to glycogen or fat for storage; the urea is carried in the blood to the kidneys and excreted",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"无法贮存\"是整个过程存在的原因，值得先写出来。另外，尿素在肝脏产生——肾只负责把它排出。",
        "en": "\"Cannot be stored\" is the reason the whole process exists, and it is worth stating first. And urea is made in the liver — the kidney only removes it."
      }
    },
    {
      "id": "0610-13-1-cp4",
      "syllabus": [
        "0610/13.1.9"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 2,
      "stem": "Explain why a person whose kidneys have failed will become seriously ill within a few days without treatment.",
      "markScheme": [
        {
          "text": "Urea is no longer excreted, so it accumulates in the blood",
          "marks": 1
        },
        {
          "text": "Urea is toxic, and excess water and ions also accumulate, upsetting the water potential of the blood and tissues",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要写明尿素有毒。\"废物堆积\"没有说清为什么这有影响，得分点正是\"毒性\"。",
        "en": "Say that urea is toxic. \"Waste builds up\" does not say why that matters, and the mark is for the toxicity."
      }
    },
    {
      "id": "0610-13-1-cp5",
      "syllabus": [
        "0610/13.1.2"
      ],
      "tier": "core",
      "commandWord": "Predict",
      "marks": 3,
      "stem": "A person drinks two litres of water in a short time. Predict what happens to the volume and concentration of their urine over the next few hours, and explain why.",
      "markScheme": [
        {
          "text": "The volume of urine increases and it becomes more dilute",
          "marks": 1
        },
        {
          "text": "because the water potential of the blood has risen above normal",
          "marks": 1
        },
        {
          "text": "so less water is reabsorbed from the filtrate along the tubule and more is lost in the urine",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "改变的是重吸收，而不是滤过——两种情况下滤出的量是一样的。而且总会有一部分水离开，因为尿素得随它排出。",
        "en": "Reabsorption is what changes, not filtration — the same volume is filtered either way. And some water always leaves, because the urea has to go with it."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "water",
        "label": {
          "zh": "饮水量",
          "en": "Water drunk"
        },
        "min": 0,
        "max": 200,
        "step": 10,
        "defaultValue": 100,
        "unit": "%"
      },
      {
        "key": "protein",
        "label": {
          "zh": "膳食中的蛋白质",
          "en": "Protein in the diet"
        },
        "min": 0,
        "max": 200,
        "step": 10,
        "defaultValue": 100,
        "unit": "%"
      },
      {
        "key": "damage",
        "label": {
          "zh": "肾小球的损伤程度",
          "en": "Damage to the glomerulus"
        },
        "min": 0,
        "max": 100,
        "step": 5,
        "defaultValue": 0,
        "unit": "%"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "13-1-excretion",
        "hint": {
          "en": "Follow the glucose line to the end, then the urea line. Then damage the glomerulus and see which line changes.",
          "zh": "先把葡萄糖那条线看到末端，再看尿素那条。然后损伤肾小球，看哪条线发生了变化。"
        },
        "params": [
          {
            "key": "water",
            "label": {
              "en": "Water drunk",
              "zh": "饮水量"
            },
            "unit": "%",
            "min": 0,
            "max": 200,
            "step": 10,
            "default": 100
          },
          {
            "key": "protein",
            "label": {
              "en": "Protein in the diet",
              "zh": "膳食中的蛋白质"
            },
            "unit": "%",
            "min": 0,
            "max": 200,
            "step": 10,
            "default": 100
          },
          {
            "key": "damage",
            "label": {
              "en": "Damage to the glomerulus",
              "zh": "肾小球的损伤程度"
            },
            "unit": "%",
            "min": 0,
            "max": 100,
            "step": 5,
            "default": 0
          }
        ],
        "readouts": [
          {
            "key": "urineWater",
            "label": {
              "en": "Water in the urine",
              "zh": "尿中的水"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "urineUrea",
            "label": {
              "en": "Urea in the urine",
              "zh": "尿中的尿素"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "urineGlucose",
            "label": {
              "en": "Glucose in the urine",
              "zh": "尿中的葡萄糖"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "urineProtein",
            "label": {
              "en": "Protein in the urine",
              "zh": "尿中的蛋白质"
            },
            "unit": "",
            "sigFigs": 3,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "A normal day",
              "zh": "普通的一天"
            },
            "params": {
              "water": 100,
              "protein": 100,
              "damage": 0
            }
          },
          {
            "label": {
              "en": "Drank a great deal",
              "zh": "大量饮水"
            },
            "params": {
              "water": 190,
              "protein": 100,
              "damage": 0
            }
          },
          {
            "label": {
              "en": "Drank almost nothing",
              "zh": "几乎没喝水"
            },
            "params": {
              "water": 15,
              "protein": 100,
              "damage": 0
            }
          },
          {
            "label": {
              "en": "A high-protein diet",
              "zh": "高蛋白饮食"
            },
            "params": {
              "water": 100,
              "protein": 190,
              "damage": 0
            }
          },
          {
            "label": {
              "en": "A damaged glomerulus",
              "zh": "肾小球受损"
            },
            "params": {
              "water": 100,
              "protein": 100,
              "damage": 70
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
        "zh": "普通的一天",
        "en": "A normal day"
      },
      "params": {
        "water": 100,
        "protein": 100,
        "damage": 0
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "大量饮水",
        "en": "Drank a great deal"
      },
      "params": {
        "water": 190,
        "protein": 100,
        "damage": 0
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "几乎没喝水",
        "en": "Drank almost nothing"
      },
      "params": {
        "water": 15,
        "protein": 100,
        "damage": 0
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "高蛋白饮食",
        "en": "A high-protein diet"
      },
      "params": {
        "water": 100,
        "protein": 190,
        "damage": 0
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "肾小球受损",
        "en": "A damaged glomerulus"
      },
      "params": {
        "water": 100,
        "protein": 100,
        "damage": 70
      }
    }
  ]
};
