// 由 scripts/convert-igcse-lessons.ts 生成，请勿手改。
// 来源：IGCSE_miniMax（作者 CrazyRock114，non-commercial）content/lessons/0620/2-6-giant-structures/lesson.ts 的 equations
// （substitute 函数源码原样保留，formatSigFigs 指向 igcse-kernels 下复制的共享 lib）
import type { EquationBlock } from '../../types';

export const equations: EquationBlock[] = [
  {
    latex: "\\text{properties} \\leftarrow \\text{structure and bonding}",
    meaning: {"en":"The direction of every answer in this topic. Start from how the atoms are joined, then say what that allows or prevents — hardness, conduction, sliding — and only then name the use.","zh":"本主题所有答案的推理方向。先说原子如何连接，再说这允许或阻止了什么——硬度、导电、滑动——最后才说用途。"},
    substitute: (r) => `\\text{bonds per atom} = ${r["bondsPerAtom"] ?? 0} \\quad \\text{atoms drawn} = ${r["atomsShown"] ?? 0}`,
  },
];
