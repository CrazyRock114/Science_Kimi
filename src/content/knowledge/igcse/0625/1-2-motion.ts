/**
 * 由 scripts/convert-igcse-lessons.ts 自动生成，请勿手改。
 * 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0625/1-2-motion
 */
import type { KnowledgePoint } from '../../../types';
import { adaptIgcseNarration, igcseLiveFormulas } from '../../igcse-src/adapt';
import narration from '../../igcse-src/0625/1-2-motion/narration';
import { equations } from '../../igcse-src/0625/1-2-motion/equations';
import kernel from '../../../../simulations/igcse-kernels/0625/1-2-motion/kernel';

export const kp12Motion: KnowledgePoint = {
  "id": "igcse-0625-1-2-motion",
  "subject": "physics",
  "tier": "extended",
  "title": {
    "zh": "运动图像",
    "en": "Motion graphs"
  },
  "summary": {
    "zh": "从位移–时间图和速度–时间图中读出速度与加速度，并由图像下的面积求路程。",
    "en": "Read speed and acceleration off distance–time and speed–time graphs, and get distance back from the area underneath."
  },
  "gradeTier": "both",
  "syllabus": {
    "igcse": [
      "0625/1.2.1",
      "0625/1.2.2",
      "0625/1.2.3",
      "0625/1.2.4",
      "0625/1.2.5",
      "0625/1.2.6",
      "0625/1.2.7",
      "0625/1.2.8",
      "0625/1.2.9",
      "0625/1.2.11",
      "0625/1.2.12"
    ]
  },
  "keywords": {
    "zh": [
      "速率",
      "速度",
      "斜率",
      "加速度",
      "减速"
    ],
    "en": [
      "speed",
      "velocity",
      "gradient",
      "acceleration",
      "deceleration"
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
          "定义速率与速度，并使用 v = s / t。",
          "画出并解读位移–时间图与速度–时间图。",
          "由图像判断物体处于静止、匀速、加速还是减速。",
          "由位移–时间图的斜率求速度。",
          "由速度–时间图下的面积求路程。",
          "由速度–时间图的斜率求加速度，减速视为负值。（Extended）"
        ]
      },
      {
        "type": "heading",
        "text": "斜率代表变化率"
      },
      {
        "type": "paragraph",
        "text": "位移–时间图的斜率就是速度。越陡越快。水平线表示物体静止。"
      },
      {
        "type": "formula",
        "latex": "v = \\frac{\\Delta s}{\\Delta t}"
      },
      {
        "type": "paragraph",
        "text": "速度–时间图的斜率是加速度。把加速度设为零，速度–时间图变成水平线，而位移–时间图变成一条直的斜线。"
      },
      {
        "type": "formula",
        "latex": "a = \\frac{\\Delta v}{\\Delta t}"
      },
      {
        "type": "heading",
        "text": "速度–时间图的面积是路程"
      },
      {
        "type": "paragraph",
        "text": "速度–时间图下的面积给出通过的路程。矩形就是速度乘时间；三角形是二分之一乘底乘高。"
      },
      {
        "type": "formula",
        "latex": "s = \\text{area under } v\\text{–}t"
      },
      {
        "type": "paragraph",
        "text": "这不是近似。你可以验证：下方的路程读数由公式算出，与图像下的面积完全一致。"
      },
      {
        "type": "formula",
        "latex": "v = \\frac{s}{t}",
        "caption": "速率等于通过的距离除以所用时间。"
      },
      {
        "type": "formula",
        "latex": "a = \\frac{\\Delta v}{\\Delta t}",
        "caption": "加速度等于速度变化量除以所用时间。"
      },
      {
        "type": "formula",
        "latex": "s = ut + \\tfrac{1}{2}at^{2}",
        "caption": "匀加速运动通过的距离——下方图像画的就是它。"
      },
      {
        "type": "heading",
        "text": "术语表"
      },
      {
        "type": "list",
        "items": [
          "speed（速率）：单位时间内通过的距离。标量，没有方向。",
          "velocity（速度）：有指定方向的速率。矢量。考试中把它与速率混用会失分。",
          "gradient（斜率）：直线的陡峭程度，等于纵坐标变化量除以横坐标变化量。",
          "acceleration（加速度）：单位时间内速度的变化量。单位为 m / s²。",
          "deceleration（减速）：速度减小。在计算中它就是负的加速度。"
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
          "Define speed and velocity, and use v = s / t.",
          "Sketch, plot and interpret distance–time and speed–time graphs.",
          "Decide from a graph whether an object is at rest, moving steadily, accelerating or decelerating.",
          "Find speed from the gradient of a distance–time graph.",
          "Find distance from the area under a speed–time graph.",
          "Find acceleration from the gradient of a speed–time graph, treating deceleration as negative. (Extended)"
        ]
      },
      {
        "type": "heading",
        "text": "Gradient tells you the rate"
      },
      {
        "type": "paragraph",
        "text": "The gradient of a distance–time graph is the speed. Steeper means faster. A horizontal line means the object is at rest."
      },
      {
        "type": "formula",
        "latex": "v = \\frac{\\Delta s}{\\Delta t}"
      },
      {
        "type": "paragraph",
        "text": "The gradient of a speed–time graph is the acceleration. Set the acceleration to zero and watch the speed–time line go flat while the distance–time graph becomes a straight slope."
      },
      {
        "type": "formula",
        "latex": "a = \\frac{\\Delta v}{\\Delta t}"
      },
      {
        "type": "heading",
        "text": "Area under speed–time is distance"
      },
      {
        "type": "paragraph",
        "text": "The area under a speed–time graph gives the distance travelled. For a rectangle that is just speed times time; for a triangle it is a half times base times height."
      },
      {
        "type": "formula",
        "latex": "s = \\text{area under } v\\text{–}t"
      },
      {
        "type": "paragraph",
        "text": "This is not an approximation. Check it: the distance readout below is calculated from the equation, and it matches the area under the graph exactly."
      },
      {
        "type": "formula",
        "latex": "v = \\frac{s}{t}",
        "caption": "Speed is distance travelled divided by the time taken."
      },
      {
        "type": "formula",
        "latex": "a = \\frac{\\Delta v}{\\Delta t}",
        "caption": "Acceleration is the change in velocity divided by the time it took."
      },
      {
        "type": "formula",
        "latex": "s = ut + \\tfrac{1}{2}at^{2}",
        "caption": "Distance travelled under constant acceleration — this is what the graph below is drawing."
      },
      {
        "type": "heading",
        "text": "Glossary"
      },
      {
        "type": "list",
        "items": [
          "speed (速率): The distance travelled per unit time. A scalar — it has no direction.",
          "velocity (速度): Speed in a given direction. A vector. Exams penalise using this word when you mean speed.",
          "gradient (斜率): The steepness of a line, found as the change in the y value divided by the change in the x value.",
          "acceleration (加速度): The change in velocity per unit time. Measured in m / s².",
          "deceleration (减速): Slowing down. In calculations it is simply a negative acceleration."
        ]
      }
    ]
  },
  "quiz": [],
  "examPractice": [
    {
      "id": "1-2-motion-cp1",
      "syllabus": [
        "0625/1.2.5"
      ],
      "tier": "core",
      "commandWord": "Identify",
      "marks": 1,
      "stem": "A distance–time graph for a moving object is a horizontal straight line. Identify the motion of the object.",
      "options": [
        "It is at rest",
        "It is moving at constant speed",
        "It is accelerating",
        "It is decelerating"
      ],
      "answerIndex": 0,
      "markScheme": [
        {
          "text": "At rest / stationary / not moving",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "位移–时间图上的水平线表示位移不变，物体静止。选\"匀速\"的同学是把它当成速度–时间图了。",
        "en": "A horizontal line on a distance–time graph means the distance is not changing, so the object is stationary. Candidates who read it as \"constant speed\" have confused it with a speed–time graph."
      }
    },
    {
      "id": "1-2-motion-cp2",
      "syllabus": [
        "0625/1.2.7"
      ],
      "tier": "core",
      "commandWord": "Calculate",
      "marks": 3,
      "stem": "A car accelerates uniformly from rest to 20 m / s in 8.0 s. Calculate the distance it travels in this time.",
      "markScheme": [
        {
          "text": "Uses the area under the speed–time graph, or s = ½(u + v)t",
          "marks": 1,
          "alternatives": [
            "½ × 8.0 × 20",
            "average speed = 10 m/s"
          ]
        },
        {
          "text": "Correct substitution of values",
          "marks": 1
        },
        {
          "text": "80 m",
          "marks": 1,
          "alternatives": [
            "80"
          ]
        }
      ],
      "examinerNote": {
        "zh": "图像是三角形，面积 = ½ × 底 × 高 = ½ × 8.0 × 20 = 80 m。常见错误是算成 20 × 8.0 = 160 m，那是把速度当成恒定值了。",
        "en": "The graph is a triangle, so the area is ½ × base × height = ½ × 8.0 × 20 = 80 m. A common error is 20 × 8.0 = 160 m, which treats the speed as constant."
      }
    },
    {
      "id": "1-2-motion-cp3",
      "syllabus": [
        "0625/1.2.11",
        "0625/1.2.12"
      ],
      "tier": "supplement",
      "commandWord": "Determine",
      "marks": 3,
      "stem": "A cyclist travelling at 12 m / s brakes and comes to rest in 4.0 s. Determine the acceleration of the cyclist, and state what the sign of your answer means.",
      "markScheme": [
        {
          "text": "Uses a = Δv / Δt",
          "marks": 1,
          "alternatives": [
            "(0 − 12) / 4.0"
          ]
        },
        {
          "text": "−3.0 m / s²",
          "marks": 1,
          "alternatives": [
            "3.0 m/s² deceleration"
          ]
        },
        {
          "text": "The negative sign shows the cyclist is decelerating / slowing down",
          "marks": 1
        }
      ],
      "examinerNote": {
        "zh": "速度变化量是末速度减初速度，即 0 − 12 = −12 m / s。只写 12 / 4.0 = 3.0 而不加负号或\"减速\"二字，会丢掉第三分。",
        "en": "The change in velocity is the final value minus the initial value, so 0 − 12 = −12 m / s. Writing 12 / 4.0 = 3.0 without a sign or the word \"deceleration\" loses the third mark."
      }
    }
  ],
  "narration": adaptIgcseNarration(narration),
  "simulation": {
    "renderer": "mmx",
    "params": [
      {
        "key": "u",
        "label": {
          "zh": "初速度",
          "en": "Initial speed"
        },
        "min": 0,
        "max": 30,
        "step": 0.5,
        "defaultValue": 0,
        "unit": "m / s"
      },
      {
        "key": "a",
        "label": {
          "zh": "加速度",
          "en": "Acceleration"
        },
        "min": -6,
        "max": 6,
        "step": 0.1,
        "defaultValue": 2,
        "unit": "m / s²"
      },
      {
        "key": "duration",
        "label": {
          "zh": "时间",
          "en": "Time"
        },
        "min": 1,
        "max": 20,
        "step": 0.5,
        "defaultValue": 10,
        "unit": "s"
      }
    ],
    "mmx": {
      "spec": {
        "primitive": "plot2d",
        "kernel": "1-2-motion",
        "params": [
          {
            "key": "u",
            "label": {
              "en": "Initial speed",
              "zh": "初速度"
            },
            "unit": "m / s",
            "symbol": "u",
            "min": 0,
            "max": 30,
            "step": 0.5,
            "default": 0
          },
          {
            "key": "a",
            "label": {
              "en": "Acceleration",
              "zh": "加速度"
            },
            "unit": "m / s²",
            "symbol": "a",
            "min": -6,
            "max": 6,
            "step": 0.1,
            "default": 2
          },
          {
            "key": "duration",
            "label": {
              "en": "Time",
              "zh": "时间"
            },
            "unit": "s",
            "symbol": "t",
            "min": 1,
            "max": 20,
            "step": 0.5,
            "default": 10
          }
        ],
        "readouts": [
          {
            "key": "finalSpeed",
            "label": {
              "en": "Final speed",
              "zh": "末速度"
            },
            "unit": "m / s",
            "symbol": "v",
            "sigFigs": 3
          },
          {
            "key": "distance",
            "label": {
              "en": "Distance travelled",
              "zh": "通过的路程"
            },
            "unit": "m",
            "symbol": "s",
            "sigFigs": 3
          },
          {
            "key": "averageSpeed",
            "label": {
              "en": "Average speed",
              "zh": "平均速率"
            },
            "unit": "m / s",
            "sigFigs": 3
          },
          {
            "key": "timeToRest",
            "label": {
              "en": "Time until at rest",
              "zh": "停止所需时间"
            },
            "unit": "s",
            "sigFigs": 3
          }
        ]
      },
      "kernel": kernel
    },
    "liveFormulas": igcseLiveFormulas(equations)
  }
};
