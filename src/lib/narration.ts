/**
 * 讲解播放的纯逻辑：播放队列构建与讲解动作分发。
 * 与 UI 解耦，供 NarrationPlayer / KnowledgePointPage 使用并单测。
 */
import type {
  Localized,
  NarrationAction,
  NarrationScript,
  NarrationSectionKind,
} from '../content/types';

/** 播放队列的一项：无行剧本时一段一项，有行剧本时一行一项 */
export interface NarrationQueueItem {
  /** 音频与 React key 寻址 id（行剧本为行 id，否则为段落 id） */
  id: string;
  kind: NarrationSectionKind;
  text: Localized<string>;
  /** 随行展示的公式（KaTeX） */
  latex?: string;
  /** 开始播放时应用到仿真的动作 */
  action?: NarrationAction;
  /** 播完后停顿的秒数 */
  pause?: number;
}

/**
 * 把讲解剧本摊平为播放队列：含 lines 的段落展开为行（kind 继承段落），
 * 否则段落自身作为一项（手写知识点的段落级剧本，行为不变）。
 */
export function buildNarrationQueue(narration: NarrationScript): NarrationQueueItem[] {
  const queue: NarrationQueueItem[] = [];
  for (const section of narration.sections) {
    if (section.lines && section.lines.length > 0) {
      for (const line of section.lines) {
        queue.push({
          id: line.id,
          kind: section.kind,
          text: line.text,
          ...(line.latex !== undefined ? { latex: line.latex } : {}),
          ...(line.action !== undefined ? { action: line.action } : {}),
          ...(line.pause !== undefined ? { pause: line.pause } : {}),
        });
      }
    } else {
      queue.push({ id: section.id, kind: section.kind, text: section.text });
    }
  }
  return queue;
}

/** 讲解动作的执行环境（由页面接线注入） */
export interface NarrationActionHandlers {
  /** 合并写入仿真参数 */
  setParams: (params: Record<string, number>) => void;
  /** 恢复仿真默认参数 */
  resetParams: () => void;
  /** 启动仿真动画时钟（mmx；原生仿真无时钟时由调用方决定忽略） */
  play: () => void;
  /** 暂停仿真动画时钟 */
  pause: () => void;
  /** 按 CSS 选择器短暂高亮页面元素 */
  highlight: (target: string) => void;
}

/**
 * 分发一条讲解动作。未知类型忽略（源数据未来可能扩展动作类型，
 * 播放器不应因此中断讲解）。
 */
export function dispatchNarrationAction(
  action: NarrationAction,
  handlers: NarrationActionHandlers,
): void {
  switch (action.type) {
    case 'setParams':
      if (action.params) handlers.setParams(action.params);
      break;
    case 'reset':
      handlers.resetParams();
      break;
    case 'play':
      handlers.play();
      break;
    case 'pause':
      handlers.pause();
      break;
    case 'highlight':
      if (action.target) handlers.highlight(action.target);
      break;
  }
}
