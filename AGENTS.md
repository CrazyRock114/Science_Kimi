# AGENTS.md — 给 AI 代理与新人的项目指南

双语科学教育网站（Vite + React 18 + TS + Tailwind）。详细功能与维护流程见 `README.md`；本文件聚焦动手前必须知道的架构与约定。

## 架构速览

- **内容 = 数据**：每个知识点是一个声明式数据对象（`src/content/types.ts` 的 `KnowledgePoint`），由 `src/components/knowledge/` 的统一渲染引擎呈现。改内容改数据文件，不要为单个知识点写组件。
- **meta 层 + 按课懒加载**：首页/列表页只消费轻量元数据 `knowledgePointMetas`（`src/content/knowledge/index.ts`）；正文经 `getKnowledgePoint()` 按课动态 import（每课一个 chunk）。手写课 meta 由 `npm run extract:metas` 生成到 `knowledge/metas.ts`；应用代码不要 import 具体课程文件。
- **双轨仿真**：
  - native：手写课用 Canvas 2D 组件，`simulations/registry.ts` 按 renderer id 懒加载，计算内核是 `simulations/kernels/` 的纯函数（仿真与探针共用）；
  - mmx：IGCSE 转换课用声明式 SimSpec + `simulations/igcse-kernels/` 内核，由 `simulations/mmx/MmxStage` 渲染（renderer id 为 `'mmx'`）。
- **生成器工作流**：`scripts/` 下的转换/提取脚本（Node ≥ 22.18 原生 TS）从上游或正文生成代码。改生成物的正确姿势是改源头或生成器再重跑，绝不手改生成文件。

## 常用命令

```bash
npm run dev            # 开发服务器
npm run test           # 全部测试（Vitest，约 5000 个；提交前必须全绿）
npm run lint           # ESLint（禁 console.log/info，warn/error 除外）
npm run build          # tsc -b && vite build
npm run extract:metas  # 改动手写知识点后必跑（否则一致性测试失败）
npm run convert:igcse -- 0625   # 重转 IGCSE 课程（0625/0620/0610；需 .reference/IGCSE_miniMax）
npm run ai:dev         # AI 后端（需 .env 的 LLM_API_KEY）
npm run check:coverage # IGCSE 考纲覆盖度报告
```

## 关键约定

- **Localized 双语必填**：所有面向学生的文本都是 `{ zh, en }` 两个字段，缺一测试即失败；不要只写一种语言"以后再补"。
- **探针（expectedResults）**：知识点/实验声明「输入 → 预期数值/现象」，`src/test/probes.test.ts` 与 `src/content/lab/probe.test.ts` 自动遍历断言。新增带仿真的知识点必须写探针；改内核数值行为必须同步更新探针预期。
- **生成文件勿手改**（重跑即覆盖）：`src/content/knowledge/metas.ts`、`src/content/knowledge/igcse/`、`src/content/knowledge/igcse-src/`、`src/simulations/igcse-kernels/`。上游 IGCSE_miniMax 在 `.reference/`（gitignored，需自行 clone）。
- **考纲引用格式**：人教版 `"册id/章id"`（如 `pep-che-j9b/ch3`，见 `content/syllabus/pep.ts`）；IGCSE topic `"0625/1.2"`、statement `"0625/1.2.6"`（见 `content/syllabus/igcse.ts` 与 `igcse-statements.ts`）。引用必须可解析，测试会校验。
- **分层依赖**：content 层（数据）不依赖 components/simulations 的 UI 代码；仿真组件只经 registry 引用。
- **console**：业务代码禁 `console.log/info`（ESLint error），告警用 `console.warn/error`；CLI 脚本（scripts/、server/）不受限。

## 测试要求

- 提交前：`npm run test`、`npm run lint`、`npm run build` 全部通过。
- 内容正确性靠探针 + 内容完整性测试兜底，新增内容页功能时在 `src/test/` 补对应断言。
- 改动手写知识点（含小测、标题、关键词等任何 meta 字段）后必须重跑 `npm run extract:metas`，否则 metas 一致性测试失败。

## 许可红线

- `src/chem-engine/` 是 MIT 协议 ChemAIForge 移植（保留目录内 LICENSE）；`mmx/`、`lesson-extras/`、`igcse*/` 内容来自 IGCSE_miniMax（non-commercial）。
- IGCSE 考纲原文有版权：只引用编号 + 自有表述，不复制考纲原文。
