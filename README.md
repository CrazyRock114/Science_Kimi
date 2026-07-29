# 双语科学实验室 · Bilingual Science Lab

面向初中/高中学生的中英双语科学（物理/化学/生物）学习网站。每个知识点配有交互仿真、双语理论讲解、可判分的随堂小测，并同时标注人教版教材章节与 Cambridge IGCSE 考纲（Physics 0625 / Chemistry 0620 / Biology 0610）topic，支持双课程体系对照学习。

纯静态站，无后端、无数据库；学习进度（小测最好成绩、完成标记）保存在浏览器 localStorage。

## 技术栈

- Vite + React 18 + TypeScript（strict）+ Tailwind CSS v3
- react-router-dom v6（`/zh`、`/en` 双语路由）
- react-i18next（UI 文案 i18n）
- KaTeX（公式渲染）
- Vitest + @testing-library/react（测试）

## 开发命令

```bash
npm install       # 安装依赖
npm run dev       # 开发服务器（默认 http://localhost:5173）
npm run build     # 类型检查 + 生产构建（输出 dist/）
npm run preview   # 预览生产构建
npm run test      # 运行全部测试（Vitest）
npm run test:watch
```

## 目录结构

```
src/
  components/            # 通用组件
    layout/LangLayout.tsx    # 语言布局（校验 lang、联动 i18n、顶部导航）
    knowledge/               # 知识点统一渲染引擎
      KnowledgePointPage.tsx #   标题/摘要/考纲标签 → 理论 → 公式代入 → 参数 → 仿真 → 预设 → 小测
      TheorySection.tsx      #   理论区（段落/公式 KaTeX/列表/小标题）
      ParamPanel.tsx         #   参数滑块面板（受控）
      SimulationCanvas.tsx   #   仿真画布（按 renderer id 懒加载）
      PresetBar.tsx          #   生活场景预设按钮
      QuizSection.tsx        #   小测（判分/解析/成绩记录）
    Formula.tsx              # KaTeX 公式组件
    LanguageSwitcher.tsx     # 语言切换（保持当前路径）
  content/
    types.ts             # 内容模型（KnowledgePoint / Localized / Probe / Preset …）
    syllabus/igcse.ts    # IGCSE 0625/0620/0610 考纲 topic 结构 + 查询辅助函数
    syllabus/pep.ts      # 人教版初高中理化生章节骨架 + 查询辅助函数
    knowledge/           # 知识点数据（每个知识点一个文件）+ index.ts 汇总
  simulations/
    registry.ts          # 仿真渲染器注册表（renderer id → React.lazy 组件）
    kernels/             # 仿真/计算内核纯函数（探针测试与仿真共用）
    physics/ chemistry/  # Canvas 2D 仿真组件
  lib/progress.ts        # localStorage 进度记录（最好成绩、完成标记）
  i18n/                  # UI 文案（zh.ts / en.ts）
  pages/                 # HomePage / SubjectPage / KnowledgePointRoute / NotFoundPage
  test/                  # 探针测试、内容完整性测试、测试 setup
```

## 如何新增一个知识点

1. **写数据文件**：在 `src/content/knowledge/` 新建 `xxx.ts`，按 `src/content/types.ts` 的 `KnowledgePoint` 接口填写。所有面向学生的文本必须是 `{ zh, en }` 双语（测试会断言双语齐全）。
2. **挂考纲映射**：`syllabus.pep` 填人教版章节引用（`"册id/章id"`，见 `content/syllabus/pep.ts`），`syllabus.igcse` 填 IGCSE topic 引用（如 `"0625/1.2"`，见 `content/syllabus/igcse.ts`）。引用必须能解析，否则测试失败。
3. **（可选）加仿真**：
   - 在 `src/simulations/kernels/` 写内核纯函数（命名输入 → 命名输出）；
   - 在 `src/simulations/<subject>/` 写 Canvas 2D 组件（接收 `params` props，内部 `requestAnimationFrame` + devicePixelRatio 适配，卸载时取消动画帧）；
   - 在 `src/simulations/registry.ts` 注册 renderer id；
   - 在知识点的 `simulation` 里填 renderer id、参数定义与 `liveFormulas`（公式数值代入）。
4. **写探针**：`kernels` 表挂内核函数，`expectedResults` 声明「输入参数 → 预期数值」断言，`npm run test` 会自动遍历执行。
5. **登记**：在 `src/content/knowledge/index.ts` 的 `knowledgePoints` 数组中加入。
6. **验证**：`npm run test`（探针 + 内容完整性自动校验）与 `npm run build` 必须通过。

## 内容正确性保障

- 仿真/计算内核为纯函数，Vitest 单测；
- 每个知识点用 `expectedResults` 探针声明预期数值/现象，测试自动遍历断言（`src/test/probes.test.ts`）；
- 内容完整性测试断言：双语字段非空、小测答案索引合法、考纲/教材引用可解析、仿真渲染器已注册、参数默认值与预设取值在范围内（`src/test/content-integrity.test.ts`）。

## 合规说明

所有代码与文案均为原创。IGCSE 考纲原文有版权，本站仅以编号引用 topic 并使用自有表述的名称。
