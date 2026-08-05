/**
 * 双语渲染组件——IGCSE_miniMax `components/i18n/T` 的本站适配版。
 *
 * 源项目按 assist level（off/hover/inline）渲染英文+中文支架；本站是整站语言切换
 * （react-i18next 全局单例），故简化为：按当前语言显示，中文缺失时回退英文。
 */
import type { ElementType, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import type { Bilingual } from './types';

/** 当前界面语言（'zh' | 'en'；任何非 en 的语言按 zh 处理，与本站 Lang 一致）。 */
export function useMmxLang(): 'zh' | 'en' {
  const { i18n } = useTranslation();
  return i18n.language === 'en' ? 'en' : 'zh';
}

interface TProps {
  value: Bilingual;
  /** 渲染为的元素，默认为 <span> */
  as?: ElementType;
  className?: string;
}

export function T({ value, as: As = 'span', className }: TProps): ReactNode {
  const lang = useMmxLang();
  const text = lang === 'zh' ? (value.zh ?? value.en) : value.en;
  const AsAny = As as React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  return <AsAny className={className}>{text}</AsAny>;
}

/** 与 T 同规则，但返回纯字符串——用于 aria-label、title 等 JSX 不可用的位置。 */
export function useBilingualText(value: Bilingual): string {
  const lang = useMmxLang();
  return lang === 'zh' ? (value.zh ?? value.en) : value.en;
}
