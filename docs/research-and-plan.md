# 双语科学课网站：调研结论与开发计划

## 一、项目定位

面向初中/高中生的中英双语科学（物理/化学/生物）学习网站，同时索引中国教材（人教版为主）与国际课程体系（Cambridge IGCSE：Physics 0625 / Chemistry 0620 / Biology 0610 / Co-ordinated Sciences 0654）。

**核心差异化**（所有参考站都没做的）：
1. **真双语**：数据模型层就是 `{ zh, en }` 双字段全文双语（理论、题目、讲解、UI），而非标题级双语。
2. **考纲双索引**：每个知识点同时映射到人教版教材章节和 IGCSE syllabus topic 编号，支持按教材/年级/考试局筛选。
3. **学练闭环**：动画演示 → 参数交互 → 随堂小测（可判分）→ 进度记录。

## 二、调研结论摘要

| 参考资源 | 形态/技术 | 协议 | 可借鉴点 | 缺口 |
|---|---|---|---|---|
| gitee 数理化学习动画 | 零依赖原生 HTML + Canvas 2D，68 个知识点单页动画 | **无协议（不可复用）** | "一知识点一自包含页"、滑块调参+公式+图像三方联动、"动画+知识点+例题"三段式 | 无双语、无生物、无考纲映射 |
| physics.whaty.org | React+Vite SPA，300 实验懒加载分包，r3f 3D | 闭源 | 预生成 Azure TTS 双声线讲解、真仿真内核、实验按难度/适龄标注 | 无课纲、无测验、无双语 |
| 物理学与现代生活 (tcloudbaseapp) | 原生 JS + **声明式数据驱动知识点模型**（theory/params/presets/render/quiz） | 无协议 | 数据驱动架构（最值得借鉴）、随堂 quiz、生活场景预设、Web Audio 零成本音效、Web Speech API TTS | 双语仅标题级 |
| chem.whaty.org = **ChemAIForge** | Next.js+TS+Tailwind+Prisma/SQLite，three.js 3D 实验台 | **MIT（可直接复用）** | 四套纯函数化学引擎、102 个实验数据、ReactionProbe 反应探针测试（内容正确性自动化）、AI 导师感知实验台上下文 | 仅化学仅实验、纯中文 |
| bio.whaty.org | React SPA，300 实验 Canvas 2D 手写仿真 | 闭源 | AI 助教请求携带 experimentId+实时参数+ageTier（少儿/青少年/成人/银发四档讲解）、引导问题 | 闭源、无课纲、无双语 |
| synthoming.whaty.org | 手写静态站，24 课合成生物学科普 | 闭源 | 同一内容四档文案切换（localStorage）、预录音频+speechSynthesis 兜底、声明式目录数据 | 无扩展机制、无双语 |
| GordenSun/LearningCell | Vite+React19+three.js/r3f，5 个 3D 细胞模型 | **无协议（不可复用）** | R3F 教学查看器架构（数据与渲染分离）、Draco 压缩+流式渐进加载策略 | 仅 5 模型、无交互热点 |
| zhangifonly/mathviz | React+Vite，300+ 数学实验，KaTeX/mathjs/Plotly | **PolyForm NC（商用需付费）** | "纯函数内核+绘制层+组件"三层、讲解剧本 JSON+TTS 同步播放（NarrationPresenter） | 仅数学、纯中文 |
| 3b1b/manim | Python 动画引擎 | MIT（宽松） | 内容理念（连续变形建立直觉）；可离线渲染概念引入短视频嵌入课程页 | 非网页交互、无内容 |
| wy51ai/edulab | AI 课件生成技能包，sympy 符号内核+单文件 HTML 模板 | **Apache-2.0（可复用）** | **AI 内容生产管线范式**：LLM 只做理解，数值全部由符号内核产出+三重自检；化学微观 3D 演示 | 覆盖面窄、绑定 AI Agent 运行时 |

附带发现：**bio-vibe.com.cn**（上海名师工作室团队，300+ 生物交互实验，系统覆盖人教版初高中生物教材，基于 DeepSeek）——证明"交互实验+贴课标"路线可行，可作为生物内容组织的对标。

**合规红线**：除 ChemAIForge（MIT）、edulab（Apache-2.0）、manim（MIT）外，其余参考站的代码、文案、插画、音频均不可直接搬运，只借鉴架构与交互模式。mathviz 为 PolyForm NC，有商业化可能则代码不可复用。IGCSE 考纲原文有版权，用自有表述+topic 编号引用。

## 三、技术架构（已确认：静态站 + 独立 AI 后端）

### 前端（纯静态）
- **Vite + React 18 + TypeScript + Tailwind CSS**（与参考站主流栈一致，便于借鉴其模式）。
- **i18n 从第一天引入**：react-i18next，URL 路由 `/zh/...` `/en/...`，内容数据全部 `{ zh, en }` 双字段。
- **可视化分层**：
  - 知识点动画/仿真：Canvas 2D + `requestAnimationFrame` 手写仿真循环（性价比最高，覆盖 80% 需求）；
  - 3D 结构（细胞、分子、实验装置）：three.js + @react-three/fiber + drei（借鉴 LearningCell 的查看器架构与渐进加载）；
  - 公式：KaTeX；数据图表：自绘 SVG/Canvas，暂不引入 D3。
- **数据驱动内容模型**（借鉴 tcloudbaseapp + ChemAIForge）：每个知识点是声明式数据对象 + 统一渲染引擎；每个实验一个懒加载 chunk；公式代入数值、参数、图像三方联动。
- **正确性保障**（借鉴 ChemAIForge ReactionProbe + edulab 自检）：仿真/计算内核为纯函数，Vitest 单测；每个实验声明预期现象/预期数值，测试自动验证。
- **进度记录**：localStorage 起步（完成标记、小测成绩），无账号体系。
- **TTS 讲解**：预生成 mp3（edge-tts 离线生成，中英各一份剧本）+ 浏览器 speechSynthesis 兜底。

### AI 后端（独立、后置）
- 单独的小后端（Serverless 云函数，国内云），与静态站解耦；静态站无 AI 也能完整运行。
- AI 导师请求携带 `{ knowledgePointId, language, gradeTier, 当前仿真参数 }` 作上下文（借鉴 bio.whaty.org），LLM 用国内可用 API。
- 二期再做；**AI 内容生产管线**（AI 起草课件内容 → 符号内核/测试校验 → 人工审校）从第一期就用于内容生产。

### 部署
- 静态站：国内云静态托管/对象存储 + CDN（面向国内用户为主）；同步一份 GitHub Pages 供海外访问。
- 内容更新 = 重新构建部署，无运行时数据库。

## 四、内容模型设计（第一优先级，决定一切）

```ts
interface KnowledgePoint {
  id: string;                        // e.g. "phy-motion-001"
  subject: 'physics' | 'chemistry' | 'biology';
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  gradeTier: 'middle' | 'senior' | 'both';
  syllabus: {
    pep?: string[];                  // 人教版章节，如 "必修1-第二章-匀变速直线运动"
    igcse?: string[];                // 如 "0625/1.2 Motion"（只引用编号+自有表述）
  };
  keywords: { zh: string[]; en: string[] };   // 站内搜索
  theory: Localized<TheoryBlock[]>;  // 概念/公式(KaTeX)/意义，双语文本
  simulation?: SimulationDef;        // 参数定义 + 纯函数内核 + 渲染器引用
  presets?: Preset[];                // 生活场景预设
  quiz: QuizItem[];                  // 随堂小测，可判分，双语题干选项
  narration?: Localized<NarrationScript>;  // 讲解剧本（TTS 用）
  expectedResults?: Probe[];         // 正确性探针（测试断言用）
}
```

IGCSE topic 映射表 + 人教版章节映射表作为独立数据文件维护，是项目最重要的基础设施之一。

## 五、分阶段开发计划

### Phase 0：脚手架与内容基础设施（第 1–2 周）
1. 初始化 Vite+React+TS+Tailwind 项目。
2. 接入 react-i18next、KaTeX、路由（`/zh|en/subject/...`）。
3. 定义 `KnowledgePoint` 内容模型 + 统一渲染引擎（理论区/参数面板/仿真画布/小测组件）。
4. 建立 IGCSE（0625/0620/0610）topic 清单与人教版理化生章节清单数据文件。
5. 门户首页：学段 Tab + 学科色彩编码 + 双语关键词搜索（客户端过滤）+ 考纲/教材双维度筛选。
6. CI：Vitest + 构建 + 部署流水线。

### Phase 1：化学模块 MVP（第 3–6 周）——起步最快
1. 复用 MIT 协议的 **ChemAIForge**：四套纯函数化学引擎 + 102 个实验数据，剥离其 Next.js/Prisma 层，改造为静态数据 + 前端渲染。
2. 实验台 UI 先用 Canvas 2D/SVG 轻量实现（变色/气泡/沉淀/温度），3D 装置后置。
3. 完成 20–30 个核心化学知识点的双语文案与考纲映射（初中酸碱/气体制备 + IGCSE 0620 高频 topic 优先）。
4. 随堂小测判分 + localStorage 进度。
5. ReactionProbe 式测试：每个实验的预期现象进 Vitest。

### Phase 2：物理模块（第 7–10 周）
1. 按内容模型自建物理仿真（Canvas 2D）：力学/电学/光学/热学核心知识点 20–30 个。
2. 滑块调参 + 公式实时代入 + 图像联动 + 生活场景预设。
3. 补齐双语文案与人教版/IGCSE 0625 映射。

### Phase 3：生物模块（第 11–14 周）
1. 3D 结构查看器（r3f，借鉴 LearningCell 架构但代码自研）：细胞、DNA、器官等，配中英术语对照标注热点。
2. 经典实验 Canvas 仿真（孟德尔遗传、渗透、光合作用等）10–20 个。
3. 对标 bio-vibe.com.cn 的人教版覆盖思路确定选题清单。

### Phase 4：AI 与增强功能（第 15–18 周）
1. 独立 AI 后端：云函数 + 国内 LLM API，AI 导师携带知识点上下文与实时参数作答；预置引导问题。
2. TTS 讲解：中英剧本 + edge-tts 预生成 + speechSynthesis 兜底 + 字幕动画同步（借鉴 mathviz NarrationPresenter 思路）。
3. AI 实验/学习报告生成。
4. 题库扩充（AI 生产管线 + 内核校验 + 人工审校）。

### Phase 5：打磨上线（第 19–20 周）
性能（懒加载、HiDPI 适配、`prefers-reduced-motion`）、SEO（静态预渲染）、无障碍、多端适配、备案与上线。

## 六、执行要点

- **内容正确性 > 内容数量**：内核纯函数 + 探针测试 + 人工审校三层保障，AI 生成内容必须过测试才入库。
- **双语不是翻译任务而是数据模型**：任何新知识点录入时 zh/en 同时必填，测试断言双字段齐全。
- **考纲映射是最早的数据工作**：Phase 0 就建表，之后每个知识点必挂映射，否则不予上线。
- 每期结束得到可用产品：Phase 1 后站点即有完整化学双语内容可上线试运行。
