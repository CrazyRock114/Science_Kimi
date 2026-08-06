/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0610/17-1-inheritance
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0610/17-1-inheritance/narration';
import kernel from '../../../../simulations/igcse-kernels/0610/17-1-inheritance/kernel';

export const kp171Inheritance: KnowledgePoint = {
  "id": "igcse-0610-17-1-inheritance",
  "subject": "biology",
  "tier": "extended",
  "title": {
    "zh": "遗传",
    "en": "Inheritance"
  },
  "summary": {
    "zh": "四分之三的子代开红花，但其中只有一半携带白花等位基因——而红花本身丝毫看不出它属于哪一半。这道落差，就是这一章的全部内容。",
    "en": "Three quarters of the offspring are red, but only half of them carry the white allele — and nothing about a red flower tells you which half it is in. That gap is the whole subject."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0610/17.1.1",
      "0610/17.1.2",
      "0610/17.1.3",
      "0610/17.1.4",
      "0610/17.1.5",
      "0610/17.1.6",
      "0610/17.1.7",
      "0610/17.1.8",
      "0610/17.1.9",
      "0610/17.1.10",
      "0610/17.1.11",
      "0610/17.1.12",
      "0610/17.2.1",
      "0610/17.2.2",
      "0610/17.2.3",
      "0610/17.2.4",
      "0610/17.2.5",
      "0610/17.3.1",
      "0610/17.3.2",
      "0610/17.4.1",
      "0610/17.4.2",
      "0610/17.4.3",
      "0610/17.4.4",
      "0610/17.4.5",
      "0610/17.4.6",
      "0610/17.4.7",
      "0610/17.4.8",
      "0610/17.4.9",
      "0610/17.4.10",
      "0610/17.4.11",
      "0610/17.4.12",
      "0610/17.4.13",
      "0610/17.4.14",
      "0610/17.4.15",
      "0610/17.4.16",
      "0610/17.4.17",
      "0610/17.4.18"
    ]
  },
  "keywords": {
    "zh": [
      "基因",
      "等位基因",
      "基因型",
      "表现型",
      "测交",
      "共显性",
      "伴性性状",
      "单倍体"
    ],
    "en": [
      "gene",
      "allele",
      "genotype",
      "phenotype",
      "test cross",
      "codominance",
      "sex-linked characteristic",
      "haploid"
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
          "说明染色体由 DNA 构成，并给基因和等位基因下定义。",
          "用 X 和 Y 染色体描述人类性别的遗传。",
          "解释蛋白质的合成过程，以及 DNA 如何控制细胞功能。（Extended）",
          "描述单倍体核与二倍体核，以及有丝分裂与减数分裂的作用。（Extended）",
          "正确使用基因型、表现型、纯合、杂合、显性与隐性等术语。",
          "用棋盘格法预测单基因杂交的结果并计算比例。",
          "解读系谱图。",
          "解释测交如何确定未知基因型。（Extended）",
          "解释共显性、ABO 血型的遗传以及伴性遗传。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "基因究竟做什么"
      },
      {
        "type": "paragraph",
        "text": "基因并不编码某个特征。它编码一种蛋白质，特征只是随之而来的结果。基因中的碱基序列决定蛋白质中氨基酸的排列顺序，而氨基酸的顺序又决定蛋白质折叠成的形状。"
      },
      {
        "type": "paragraph",
        "text": "形状就是一切，因为蛋白质靠\"契合\"来工作。你已经见过两次了——酶有底物能嵌入的活性位点，神经元上有神经递质能结合的受体。改变一个氨基酸，形状就变了，契合也就失效了。"
      },
      {
        "type": "paragraph",
        "text": "合成发生在两个地方。DNA 不能离开细胞核，因此基因被转录成信使 RNA，经核孔进入细胞质。它到达核糖体，核糖体按 mRNA 指定的顺序把氨基酸连接起来。"
      },
      {
        "type": "paragraph",
        "text": "这里有一点值得停下来想想：你体内几乎每个细胞都含有你的全部基因。肝细胞里也有编码视网膜视杆细胞中那种蛋白质的基因，只是从不使用它。细胞之所以不同，是因为其中开启的基因不同，而不是因为它们拿到了不同的指令。"
      },
      {
        "type": "heading",
        "text": "细胞核分裂的两种方式"
      },
      {
        "type": "paragraph",
        "text": "有丝分裂产生两个与亲代细胞、彼此之间在遗传上完全相同的细胞。分裂前每条染色体都被精确复制；随后复制体分离，各进入一个新细胞。染色体数目不变——进去 46 条，出来的每个细胞仍是 46 条。"
      },
      {
        "type": "paragraph",
        "text": "生长需要的正是这个，修复和无性生殖也是。干细胞做的也是这件事——未分化的细胞进行分裂，其子细胞可以特化成身体所需要的任何类型。"
      },
      {
        "type": "paragraph",
        "text": "减数分裂是另一种，它产生配子。这是一种\"减数\"的分裂：染色体数目减半，从 46 条变为 23 条。这是必须的，因为受精时两个配子融合——如果每个都带 46 条，每一代都会翻倍。"
      },
      {
        "type": "heading",
        "text": "读懂一张系谱图"
      },
      {
        "type": "paragraph",
        "text": "系谱图是同样的信息，只不过针对真实的家庭。方形代表男性，圆形代表女性，横线连接双亲，竖线向下连到子女。涂黑表示患病。"
      },
      {
        "type": "paragraph",
        "text": "两个问题几乎能解开所有系谱题。第一：有没有两个未患病的双亲生出患病的孩子？如果有，那么这个等位基因一定是隐性的，因为它存在于双亲体内却都被掩盖了。"
      },
      {
        "type": "paragraph",
        "text": "第二：患者是不是以男性居多？X 染色体上的隐性病症在男性中出现得频繁得多，原因你刚才已经看到了——他们没有第二条 X 来掩盖它。患病的儿子很多而几乎没有患病的女儿，正是伴性遗传的特征。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "gene（基因）：编码一种蛋白质的一段 DNA。它不编码某个特征——特征是蛋白质带来的结果。",
          "allele（等位基因）：一个基因的不同版本之一。你的每个基因都有两个拷贝，而它们未必是同一个等位基因。",
          "genotype（基因型）：生物所携带的等位基因。它未必看得见：RR 与 Rr 外表完全相同。",
          "phenotype（表现型）：生物可观察到的特征——即基因型所产生的结果。",
          "test cross（测交）：与纯合隐性个体杂交，用来判断表现显性性状的个体是纯合还是杂合。",
          "codominance（共显性）：两个等位基因都对表现型有贡献，因此杂合体具有自己独特的表现型，而不是像某一亲本。",
          "sex-linked characteristic（伴性性状）：由性染色体携带的性状，实际上几乎总在 X 上。男性表现出隐性伴性病症的频率高得多，因为他们没有第二条 X 来掩盖它。",
          "haploid（单倍体）：只含一套染色体。配子是单倍体——人类为 23 条——使受精后恢复到二倍体的 46 条。"
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
          "State that chromosomes are made of DNA, and define a gene and an allele.",
          "Describe the inheritance of sex in humans using the X and Y chromosomes.",
          "Explain how a protein is made and how DNA controls cell function. (Extended)",
          "Describe haploid and diploid nuclei, and the roles of mitosis and meiosis. (Extended)",
          "Use genotype, phenotype, homozygous, heterozygous, dominant and recessive correctly.",
          "Use Punnett squares to predict the results of monohybrid crosses and calculate ratios.",
          "Interpret pedigree diagrams.",
          "Explain how a test cross identifies an unknown genotype. (Extended)",
          "Explain codominance, the inheritance of ABO blood groups, and sex linkage. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "What a gene actually does"
      },
      {
        "type": "paragraph",
        "text": "A gene does not code for a feature. It codes for a protein, and the feature is a consequence. The sequence of bases in the gene determines the sequence of amino acids in the protein, and the sequence of amino acids determines the shape the protein folds into."
      },
      {
        "type": "paragraph",
        "text": "Shape is everything, because a protein works by fitting something. You have met that twice already — an enzyme with an active site the substrate fits into, and a receptor on a neurone that a neurotransmitter fits into. Change one amino acid and the shape changes and the fit fails."
      },
      {
        "type": "paragraph",
        "text": "The making happens in two places. DNA cannot leave the nucleus, so a copy of the gene is made as messenger RNA, which passes out through a pore into the cytoplasm. There it goes to a ribosome, and the ribosome assembles amino acids in the order the mRNA specifies."
      },
      {
        "type": "paragraph",
        "text": "And here is the thing worth pausing on. Almost every cell in your body contains every one of your genes. A liver cell has the gene for the protein in a rod cell of your retina, and never uses it. Cells differ because different genes are switched on in them, not because they were given different instructions."
      },
      {
        "type": "heading",
        "text": "Two ways for a nucleus to divide"
      },
      {
        "type": "paragraph",
        "text": "Mitosis produces two cells genetically identical to the parent cell and to each other. Before it happens, every chromosome is copied exactly; then the copies separate, one to each new cell. The chromosome number is unchanged — forty-six in, forty-six in each cell out."
      },
      {
        "type": "paragraph",
        "text": "That is what growth needs, and repair, and asexual reproduction. It is also what a stem cell does — an unspecialised cell that divides and whose daughters can become specialised into whatever the body needs."
      },
      {
        "type": "paragraph",
        "text": "Meiosis is the other one, and it makes gametes. It is a reduction division: the chromosome number is halved, forty-six to twenty-three. Which has to happen, because at fertilisation two gametes fuse — and if each carried forty-six, every generation would double."
      },
      {
        "type": "heading",
        "text": "Reading a family tree"
      },
      {
        "type": "paragraph",
        "text": "A pedigree diagram is the same information for a real family. Squares are males, circles are females, a horizontal line joins parents and a vertical one drops to their children. Shaded means affected."
      },
      {
        "type": "paragraph",
        "text": "Two questions unlock nearly all of them. First: do two unaffected parents ever have an affected child? If so the allele must be recessive, because it was in both of them and hidden in both."
      },
      {
        "type": "paragraph",
        "text": "Second: is it mostly males? A recessive condition on the X chromosome shows up far more often in males, for the reason you just saw — they have no second X to mask it. A lot of affected sons and almost no affected daughters is the signature of sex linkage."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "gene (基因): A length of DNA that codes for one protein. Not for a feature — the feature is a consequence of the protein.",
          "allele (等位基因): One of the alternative versions of a gene. You carry two copies of every gene, and they need not be the same allele.",
          "genotype (基因型): The alleles an organism carries. Not always visible: RR and Rr look identical.",
          "phenotype (表现型): The observable features of an organism — what the genotype produces.",
          "test cross (测交): A cross with a homozygous recessive individual, used to find out whether an organism showing the dominant phenotype is homozygous or heterozygous.",
          "codominance (共显性): Where both alleles contribute to the phenotype, so the heterozygote has a phenotype of its own rather than resembling one parent.",
          "sex-linked characteristic (伴性性状): One carried on a sex chromosome, in practice almost always the X. Males show recessive sex-linked conditions far more often, having no second X to mask them.",
          "haploid (单倍体): Having one set of chromosomes. Gametes are haploid — 23 in a human — so that fertilisation restores the diploid 46."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "0610-17-1-cp1",
      "syllabus": [
        "0610/17.4.11",
        "0610/17.4.12"
      ],
      "tier": "core",
      "commandWord": "Predict",
      "marks": 4,
      "stem": "In pea plants, tall (T) is dominant to short (t). Two heterozygous tall plants are crossed. Draw a genetic diagram to predict the offspring, and state the expected phenotype ratio.",
      "markScheme": [
        {
          "text": "Parental genotypes Tt × Tt, with gametes T and t from each",
          "marks": 1
        },
        {
          "text": "A completed Punnett square giving TT, Tt, Tt, tt",
          "marks": 1
        },
        {
          "text": "Phenotypes: three tall, one short",
          "marks": 1
        },
        {
          "text": "Ratio 3 : 1 tall to short",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "分数是给推导过程的。只写一个\"3∶1\"而没有图，无论多正确都会丢掉四分中的三分。",
        "en": "Marks are for the working. A bare \"3 : 1\" with no diagram throws away three of the four, however right it is."
      }
    },
    {
      "id": "0610-17-1-cp2",
      "syllabus": [
        "0610/17.4.13"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 3,
      "stem": "A plant with red flowers may be homozygous or heterozygous. Describe how a test cross could be used to find out which, and state how the results would be interpreted.",
      "markScheme": [
        {
          "text": "Cross it with a homozygous recessive plant — one with white flowers",
          "marks": 1
        },
        {
          "text": "If all the offspring have red flowers, the unknown plant is homozygous",
          "marks": 1
        },
        {
          "text": "If about half the offspring have white flowers, the unknown plant is heterozygous",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "必须与纯合隐性个体杂交。与另一株红花杂交毫无用处，因为任一亲本提供的显性等位基因都会掩盖结果。",
        "en": "It must be the homozygous recessive. Crossing with another red plant tells you nothing, because a dominant allele from either parent would hide the result."
      }
    },
    {
      "id": "0610-17-1-cp3",
      "syllabus": [
        "0610/17.4.14",
        "0610/17.4.18"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 4,
      "stem": "Two people who each have sickle cell trait have a child. Explain the possible genotypes and phenotypes of the child, and give the probability of each.",
      "markScheme": [
        {
          "text": "Both parents are heterozygous, and each can pass on either allele",
          "marks": 1
        },
        {
          "text": "The child may be homozygous normal (1 in 4), heterozygous (2 in 4) or homozygous sickle (1 in 4)",
          "marks": 1
        },
        {
          "text": "Because the alleles are codominant, the heterozygote has its own phenotype — sickle cell trait — rather than appearing normal",
          "marks": 1
        },
        {
          "text": "So the phenotype ratio is 1 : 2 : 1 unaffected to trait to sickle cell anaemia",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "基因型与任何杂合杂交一样都是 1∶2∶1。共显性改变的是这三者在外观上都不同，因此表现型比是 1∶2∶1 而不是 3∶1。",
        "en": "The genotypes are the same 1 : 2 : 1 as any heterozygous cross. What codominance changes is that all three are visibly different, so the phenotype ratio is 1 : 2 : 1 and not 3 : 1."
      }
    },
    {
      "id": "0610-17-1-cp4",
      "syllabus": [
        "0610/17.4.16",
        "0610/17.4.17"
      ],
      "tier": "supplement",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Red–green colour blindness is caused by a recessive allele carried on the X chromosome. Explain why the condition is much more common in males than in females.",
      "markScheme": [
        {
          "text": "A male has only one X chromosome, so he has only one copy of the gene",
          "marks": 1
        },
        {
          "text": "The Y chromosome does not carry a matching allele, so a single recessive allele is expressed",
          "marks": 1
        },
        {
          "text": "A female has two X chromosomes, so a dominant allele on one masks a recessive allele on the other; she must inherit two recessive alleles to be affected",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "Y 染色体是关键，也是最常被漏掉的部分。\"男性只有一条 X\"只答了一半——得分点在于指出 Y 上没有可用来掩盖它的等位基因。",
        "en": "The Y is the key and is the part most often left out. \"Males only have one X\" is half of it — the mark is for saying the Y has no allele to mask it with."
      }
    },
    {
      "id": "0610-17-1-cp5",
      "syllabus": [
        "0610/17.1.4"
      ],
      "tier": "core",
      "commandWord": "Explain",
      "marks": 3,
      "stem": "Explain why approximately half of all babies born are male and half are female.",
      "markScheme": [
        {
          "text": "A mother has two X chromosomes, so every egg carries an X",
          "marks": 1
        },
        {
          "text": "A father has an X and a Y, so half of his sperm carry X and half carry Y",
          "marks": 1
        },
        {
          "text": "Each type of sperm is equally likely to fertilise the egg, giving an equal chance of XX and XY",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "孩子的性别由父亲决定，因为母亲只能提供 X。这正是本题的用意。",
        "en": "The sex of a child is decided by the father, because the mother has nothing but X to give. That is the point of the question."
      }
    },
    {
      "id": "0610-17-1-cp6",
      "syllabus": [
        "0610/17.1.5",
        "0610/17.1.6",
        "0610/17.1.8"
      ],
      "tier": "supplement",
      "commandWord": "Describe",
      "marks": 4,
      "stem": "Describe how the base sequence of a gene determines the structure and function of a protein.",
      "markScheme": [
        {
          "text": "The sequence of bases in the gene determines the sequence of amino acids in the protein",
          "marks": 1
        },
        {
          "text": "A copy of the gene is made as mRNA, which passes out of the nucleus to a ribosome",
          "marks": 1
        },
        {
          "text": "The ribosome assembles the amino acids in the order the mRNA specifies",
          "marks": 1
        },
        {
          "text": "The sequence of amino acids determines the shape the protein folds into, and its shape determines what it can do",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "要落在\"形状\"上收尾。蛋白质靠契合来工作——活性位点、受体——因此形状的改变就是功能的改变，这是链条的最后一环。",
        "en": "Finish on shape. A protein works by fitting something — an active site, a receptor — so a change in shape is a change in function, and that is the last link in the chain."
      }
    },
    {
      "id": "0610-17-1-cp7",
      "syllabus": [
        "0610/17.2.1",
        "0610/17.3.2"
      ],
      "tier": "supplement",
      "commandWord": "Compare",
      "marks": 3,
      "stem": "Compare mitosis and meiosis in terms of the number and genetic make-up of the cells produced.",
      "markScheme": [
        {
          "text": "Mitosis produces two cells; meiosis produces four",
          "marks": 1
        },
        {
          "text": "Mitosis keeps the chromosome number the same (diploid); meiosis halves it (haploid)",
          "marks": 1
        },
        {
          "text": "Mitosis gives cells genetically identical to the parent cell; meiosis gives cells that are genetically different",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "\"Compare\"要求每一点都写出两边。只写三条关于有丝分裂的事实而不提减数分裂，一分不得。",
        "en": "\"Compare\" needs both sides in each point. Three facts about mitosis with nothing about meiosis scores nothing."
      }
    },
    {
      "id": "0610-17-1-cp8",
      "syllabus": [
        "0610/17.4.10"
      ],
      "tier": "core",
      "commandWord": "Deduce",
      "marks": 2,
      "stem": "In a pedigree diagram, two unaffected parents have a daughter who is affected by a genetic condition. Deduce whether the allele causing the condition is dominant or recessive, and give a reason.",
      "markScheme": [
        {
          "text": "The allele is recessive",
          "marks": 1
        },
        {
          "text": "Because both parents must carry it without showing it, which is only possible if it is masked by a dominant allele",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "这一个对比就能定论。两个未患病的双亲生出患病的孩子，永远意味着隐性——而如果患病的是女儿，那多半也不是伴性遗传。",
        "en": "This one comparison settles it. Two unaffected parents with an affected child means recessive, every time — and if the affected child is a daughter, it is probably not sex-linked either."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "cross",
        "label": {
          "zh": "杂交类型",
          "en": "Cross"
        },
        "min": 1,
        "max": 3,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "father",
        "label": {
          "zh": "父本：该等位基因的拷贝数",
          "en": "Father: copies of the allele"
        },
        "min": 0,
        "max": 2,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      },
      {
        "key": "mother",
        "label": {
          "zh": "母本：该等位基因的拷贝数",
          "en": "Mother: copies of the allele"
        },
        "min": 0,
        "max": 2,
        "step": 1,
        "defaultValue": 1,
        "unit": ""
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "punnett",
        "kernel": "17-1-inheritance",
        "hint": {
          "en": "Set both parents to one copy and read the ratio. Then switch the cross and see the same four squares mean something different.",
          "zh": "把双亲都设为一个拷贝，读出比例。然后切换杂交类型，看同样的四个格子如何有了不同的含义。"
        },
        "params": [
          {
            "key": "cross",
            "label": {
              "en": "Cross",
              "zh": "杂交类型"
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
                  "en": "Flower colour",
                  "zh": "花色"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Sickle cell",
                  "zh": "镰状细胞"
                }
              },
              {
                "value": 3,
                "label": {
                  "en": "Colour blindness",
                  "zh": "色盲"
                }
              }
            ]
          },
          {
            "key": "father",
            "label": {
              "en": "Father: copies of the allele",
              "zh": "父本：该等位基因的拷贝数"
            },
            "unit": "",
            "min": 0,
            "max": 2,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "None",
                  "zh": "没有"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "One",
                  "zh": "一个"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Two",
                  "zh": "两个"
                }
              }
            ]
          },
          {
            "key": "mother",
            "label": {
              "en": "Mother: copies of the allele",
              "zh": "母本：该等位基因的拷贝数"
            },
            "unit": "",
            "min": 0,
            "max": 2,
            "step": 1,
            "default": 1,
            "options": [
              {
                "value": 0,
                "label": {
                  "en": "None",
                  "zh": "没有"
                }
              },
              {
                "value": 1,
                "label": {
                  "en": "One",
                  "zh": "一个"
                }
              },
              {
                "value": 2,
                "label": {
                  "en": "Two",
                  "zh": "两个"
                }
              }
            ]
          }
        ],
        "readouts": [
          {
            "key": "affected",
            "label": {
              "en": "Chance of showing the trait",
              "zh": "表现该性状的概率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "carrier",
            "label": {
              "en": "Chance of carrying one copy",
              "zh": "携带一个拷贝的概率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "unaffected",
            "label": {
              "en": "Chance of not showing it",
              "zh": "不表现该性状的概率"
            },
            "unit": "%",
            "sigFigs": 3,
            "exact": true
          },
          {
            "key": "outcomes",
            "label": {
              "en": "Different phenotypes",
              "zh": "不同表现型的数目"
            },
            "unit": "",
            "sigFigs": 1,
            "exact": true
          }
        ],
        "presets": [
          {
            "label": {
              "en": "Two heterozygotes: 3 : 1",
              "zh": "两个杂合体：3∶1"
            },
            "params": {
              "cross": 1,
              "father": 1,
              "mother": 1
            }
          },
          {
            "label": {
              "en": "Test cross",
              "zh": "测交"
            },
            "params": {
              "cross": 1,
              "father": 1,
              "mother": 2
            }
          },
          {
            "label": {
              "en": "Breeding true",
              "zh": "稳定遗传"
            },
            "params": {
              "cross": 1,
              "father": 0,
              "mother": 0
            }
          },
          {
            "label": {
              "en": "Codominance: 1 : 2 : 1",
              "zh": "共显性：1∶2∶1"
            },
            "params": {
              "cross": 2,
              "father": 1,
              "mother": 1
            }
          },
          {
            "label": {
              "en": "Sex determination",
              "zh": "性别决定"
            },
            "params": {
              "cross": 3,
              "father": 0,
              "mother": 0
            }
          },
          {
            "label": {
              "en": "A carrier mother",
              "zh": "携带者母亲"
            },
            "params": {
              "cross": 3,
              "father": 0,
              "mother": 1
            }
          },
          {
            "label": {
              "en": "A colour-blind daughter",
              "zh": "色盲的女儿"
            },
            "params": {
              "cross": 3,
              "father": 1,
              "mother": 1
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
        "zh": "两个杂合体：3∶1",
        "en": "Two heterozygotes: 3 : 1"
      },
      "params": {
        "cross": 1,
        "father": 1,
        "mother": 1
      }
    },
    {
      "id": "preset-2",
      "name": {
        "zh": "测交",
        "en": "Test cross"
      },
      "params": {
        "cross": 1,
        "father": 1,
        "mother": 2
      }
    },
    {
      "id": "preset-3",
      "name": {
        "zh": "稳定遗传",
        "en": "Breeding true"
      },
      "params": {
        "cross": 1,
        "father": 0,
        "mother": 0
      }
    },
    {
      "id": "preset-4",
      "name": {
        "zh": "共显性：1∶2∶1",
        "en": "Codominance: 1 : 2 : 1"
      },
      "params": {
        "cross": 2,
        "father": 1,
        "mother": 1
      }
    },
    {
      "id": "preset-5",
      "name": {
        "zh": "性别决定",
        "en": "Sex determination"
      },
      "params": {
        "cross": 3,
        "father": 0,
        "mother": 0
      }
    },
    {
      "id": "preset-6",
      "name": {
        "zh": "携带者母亲",
        "en": "A carrier mother"
      },
      "params": {
        "cross": 3,
        "father": 0,
        "mother": 1
      }
    },
    {
      "id": "preset-7",
      "name": {
        "zh": "色盲的女儿",
        "en": "A colour-blind daughter"
      },
      "params": {
        "cross": 3,
        "father": 1,
        "mother": 1
      }
    }
  ]
};
