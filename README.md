# 双语科学实验室 · Bilingual Science Lab

面向初中/高中学生的中英双语科学（物理/化学/生物）学习网站。每个知识点配有交互仿真、双语理论讲解、可判分的随堂小测与 IGCSE 真题演练，并同时标注人教版教材章节与 Cambridge IGCSE 考纲（Physics 0625 / Chemistry 0620 / Biology 0610）topic，支持双课程体系对照学习。

**线上地址（GitHub Pages）**：https://crazyrock114.github.io/Science_Kimi/

## 功能板块

- **知识点课程（145 个）**：70 个手写知识点 + 75 个 IGCSE 转换课程（0625/0620/0610 各 28/27/20 课）。每课包含双语理论（KaTeX 公式）、参数化仿真、生活场景预设、随堂小测；IGCSE 课程另附真题演练（mark scheme 分值经测试校验）与学习目标/词汇表。所有知识点正文按课懒加载，首页/列表页只加载轻量元数据。
- **化学实验台（102 个实验）**：酸碱、气体、金属、氧化还原、沉淀、热化学、配位、分析、有机 9 大类，由纯函数化学引擎驱动，支持自由混合试剂并经探针测试校验反应结果。
- **3D 细胞工坊**：three.js / React Three Fiber 细胞结构查看器。
- **考纲地图**：IGCSE 三科 statement 级考纲（2026–2028 周期）与人教版章节的双向索引浏览。
- **TTS 讲解**：83+ 课行级讲解剧本，优先播放预生成 mp3（`audio/narrations/{kpId}/{lang}/{lineId}.mp3`），缺失时回退浏览器 speechSynthesis。
- **AI 导师（可选后端）**：`server/` 提供 `/api/tutor`（携带知识点上下文与当前仿真参数提问）与 `/api/report`；前端未配置 `VITE_AI_API_URL` 时 AI 功能优雅降级，静态站可完整运行。
- **学习进度**：小测最好成绩、完成标记保存在浏览器 localStorage，无账号体系。

## 技术栈

- Vite 5 + React 18 + TypeScript（strict）+ Tailwind CSS v3
- react-router-dom v6（`/zh`、`/en` 双语路由）+ react-i18next（UI 文案）
- KaTeX（公式）、three.js + @react-three/fiber + drei（3D）
- 双轨仿真：手写 Canvas 2D 仿真（registry 按 renderer id 懒加载）+ IGCSE 课程的 mmx 声明式仿真（SimSpec + 纯函数内核）
- Vitest + @testing-library/react（约 5000 个测试）
- ESLint 10 flat config（typescript-eslint + react-hooks）
- AI 后端与 scripts/ 直接由 Node 原生运行 TS（类型剥离，**需 Node ≥ 22.18**）

## 快速开始

要求 **Node.js ≥ 22.18**（`package.json` engines；前端构建本身低版本也可，但 `server/` 与 `scripts/` 依赖 Node 原生 TS 类型剥离）。

```bash
npm install
npm run dev        # http://localhost:5173
```

AI 功能（可选）：复制 `.env.example` 为 `.env` 并填入 `LLM_API_KEY`（OpenAI 兼容接口，默认 DeepSeek），然后 `npm run ai:dev`（监听 8787）。不配置时前端 AI 入口显示"未配置"提示，其余功能不受影响。

## 开发命令

| 命令 | 说明 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run build` | 类型检查 + 生产构建（输出 `dist/`） |
| `npm run preview` | 预览生产构建 |
| `npm run test` / `test:watch` | 运行全部测试（Vitest，约 5000 个） |
| `npm run lint` | ESLint（flat config；禁 `console.log/info`） |
| `npm run ai:dev` | AI 后端本地开发服务器（需 `.env` 里的 `LLM_API_KEY`） |
| `npm run extract:metas` | 重新生成手写知识点元数据 `src/content/knowledge/metas.ts`（改动手写知识点后必跑） |
| `npm run convert:igcse -- <0625\|0620\|0610>` | 从 `.reference/IGCSE_miniMax` 重新转换 IGCSE 课程（生成文件整体覆盖） |
| `npm run check:coverage` | IGCSE 考纲 statement 覆盖度报告（不卡构建） |

## 内容维护指南

### 新增一个手写知识点

1. **写数据文件**：在 `src/content/knowledge/` 新建 `<id>.ts`（文件名与 `id` 一致，如 `phy-motion-001`），按 `src/content/types.ts` 的 `KnowledgePoint` 接口填写。所有面向学生的文本必须是 `{ zh, en }` 双语（测试断言双语齐全）。
2. **挂考纲映射**：`syllabus.pep` 填人教版章节引用（`"册id/章id"`，见 `content/syllabus/pep.ts`），`syllabus.igcse` 填 IGCSE topic 引用（如 `"0625/1.2"`，见 `content/syllabus/igcse.ts`）。引用必须可解析，否则测试失败。
3. **（可选）加仿真**：在 `src/simulations/kernels/` 写内核纯函数；在 `src/simulations/<subject>/` 写 Canvas 2D 组件；在 `src/simulations/registry.ts` 注册 renderer id；在知识点的 `simulation` 里填 renderer id、参数定义与 `liveFormulas`。
4. **写探针**：`kernels` 表挂内核函数，`expectedResults` 声明「输入参数 → 预期数值」断言，`npm run test` 自动遍历执行。
5. **重新生成元数据**：运行 `npm run extract:metas`。无需手工登记——`knowledge/index.ts` 经 `import.meta.glob` 按文件名自动发现正文，列表页元数据由该脚本生成到 `metas.ts`（生成文件，勿手改）。
6. **验证**：`npm run test`、`npm run lint`、`npm run build` 必须通过。

### 维护 IGCSE 转换课程

IGCSE 课程内容来自同作者的 IGCSE_miniMax 项目，经 `scripts/convert-igcse-lessons.ts` 转换生成，**不要手改以下生成物**（重跑转换器会整体覆盖）：

- `src/content/knowledge/igcse/<subject>/`（课程正文、meta.ts、index.ts）
- `src/content/knowledge/igcse-src/<subject>/`（narration.ts、equations.ts）
- `src/simulations/igcse-kernels/`（内核与内核测试）

重跑转换：

```bash
# 需要 .reference/IGCSE_miniMax（gitignored，需自行 clone 同作者的 IGCSE_miniMax 仓库到该路径）
npm run convert:igcse -- 0625   # 或 0620 / 0610
```

修改课程内容的正确姿势是改上游 IGCSE_miniMax 或改转换器本身，然后重跑并 diff 确认。

### 生成讲解音频

见 `tools/generate-narration-audio.md`：用 edge-tts 按行级剧本批量合成 mp3 到 `public/audio/narrations/{kpId}/{lang}/{lineId}.mp3`，播放器命中 mp3 走 `<audio>`，缺失自动回退 speechSynthesis。

## 测试与 CI

- **探针测试**（`src/test/probes.test.ts`）：遍历每个知识点的 `expectedResults`，断言内核输出与预期数值一致；化学实验同样有反应探针（`src/content/lab/probe.test.ts`）。
- **内容完整性测试**（`src/test/content-integrity.test.ts`）：断言双语字段非空、小测答案索引合法、考纲/教材引用可解析、渲染器已注册、参数默认值与预设取值在范围内、`metas.ts` 与正文一致等。
- **CI**（`.github/workflows/deploy.yml`）：push 到 main 后依次 `npm run test` → `npm run lint` → `npm run check:coverage` → `npm run build`（`VITE_BASE=/Science_Kimi/`）→ 部署 GitHub Pages。

## 目录结构

```
src/
  components/            # 通用组件
    knowledge/               # 知识点统一渲染引擎（理论/参数/仿真/预设/小测/讲解播放器）
    lab/                     # 化学实验台 UI
    cells/                   # 3D 细胞查看器
    ai/                      # AI 导师前端
    lesson-extras/           # IGCSE 课程附加模块（移植自 IGCSE_miniMax）
    layout/                  # 语言布局与导航
  content/
    types.ts             # 内容模型（KnowledgePoint / Localized / Probe / Preset …）
    syllabus/            # 人教版章节 + IGCSE topic/statement 数据与查询辅助
    knowledge/           # 手写知识点（每课一个文件）
      metas.ts               # 手写知识点元数据（extract:metas 生成，勿手改）
      igcse/                 # IGCSE 转换课程（convert:igcse 生成，勿手改）
      igcse-src/             # 转换课程的 narration/equations（生成，勿手改）
    lab/                 # 102 个化学实验数据（9 大类）+ 目录/探针测试
  chem-engine/           # 纯函数化学引擎（移植自 MIT 协议 ChemAIForge，LICENSE 在本目录）
  simulations/
    registry.ts          # 仿真渲染器注册表（renderer id → React.lazy 组件）
    kernels/             # 手写仿真/计算内核纯函数（探针与仿真共用）
    physics/ chemistry/ biology/   # Canvas 2D 仿真组件
    mmx/                 # IGCSE 课程声明式仿真运行时（移植自 IGCSE_miniMax）
    igcse-kernels/       # IGCSE 课程内核（生成，勿手改）
  pages/                 # Home / Subject / KnowledgePoint / LabBench / LabList / CellExplorer / SyllabusMap / NotFound
  lib/                   # localStorage 进度、工具函数
  i18n/                  # UI 文案（zh.ts / en.ts）
  test/                  # 探针测试、内容完整性测试、测试 setup
server/                  # AI 后端（fetch 风格 handler + node 开发服务器；Node 原生 TS）
scripts/               # convert-igcse-lessons / extract-handwritten-metas / check-igcse-coverage / mmx 移植脚本
tools/                 # 讲解音频批量生成操作文档（edge-tts）
.reference/            # 上游项目（gitignored，需自行 clone；转换器只读引用）
```

## 许可说明

- 本项目手写部分的代码与文案为原创。
- `src/chem-engine/` 移植自 [ChemAIForge](https://github.com/zhangifonly/ChemAIForge)（MIT License，版权 zhangifonly，完整许可文本见该目录 `LICENSE`）。
- `src/simulations/mmx/`、`src/components/lesson-extras/`、`src/content/knowledge/igcse*/` 及 `src/content/syllabus/igcse-statements.ts` 移植/转换自 IGCSE_miniMax（作者 CrazyRock114，声明 non-commercial 用途，本项目同为非商业用途）。
- IGCSE 考纲原文 © Cambridge University Press & Assessment。本站仅以编号引用 topic/statement 并使用自有表述的名称。
