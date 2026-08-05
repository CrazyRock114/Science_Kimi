/**
 * lesson-extras 移植组件的 zh 本地化聚焦测试。
 *
 * 这些组件由 scripts/port-mmx-extras.mjs 生成（含 PATCH 步骤），源项目遗留的
 * 硬编码英文 UI 文案应经 <T> / useBilingualText 双语渲染：zh 语言下显示中文，
 * en 语言下仍显示英文。这里渲染两个代表性组件（BalancedPlate / TeethAnatomy）
 * 验证补丁确实生效。
 */
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { BalancedPlate } from '../components/lesson-extras/BalancedPlate';
import { TeethAnatomy } from '../components/lesson-extras/TeethAnatomy';
import type { BalancedPlateExtra, TeethAnatomyExtra } from '../components/lesson-extras/types';

const plateExtra: BalancedPlateExtra = {
  type: 'balanced-plate',
  id: 'plate',
  title: { en: 'Build a balanced plate', zh: '搭配均衡餐盘' },
  hint: { en: 'Click foods', zh: '点击食物' },
  foods: [
    { id: 'rice', name: { en: 'Rice', zh: '米饭' }, group: 'carb', glyph: '🍚' },
    { id: 'broccoli', name: { en: 'Broccoli', zh: '西兰花' }, group: 'veg', glyph: '🥦' },
  ],
  targets: { carb: 1, protein: 1, veg: 2, fruit: 1, dairy: 1, fat: 1 },
};

const teethExtra: TeethAnatomyExtra = {
  type: 'teeth-anatomy',
  id: 'teeth',
  title: { en: 'Teeth', zh: '牙齿' },
  hint: { en: 'Click to explore', zh: '点击探索' },
  layers: [
    { id: 'enamel', name: { en: 'Enamel', zh: '牙釉质' }, description: { en: 'Hard coat', zh: '坚硬的外层' } },
  ],
  kinds: [
    { id: 'incisor', name: { en: 'Incisors', zh: '切牙' }, count: 8, role: { en: 'Biting', zh: '切割食物' } },
    { id: 'canine', name: { en: 'Canines', zh: '尖牙' }, count: 4, role: { en: 'Tearing', zh: '撕裂食物' } },
  ],
};

beforeAll(async () => {
  await act(async () => {
    await i18n.changeLanguage('zh');
  });
});

afterEach(() => {
  cleanup();
});

describe('lesson-extras 组件 zh 本地化', () => {
  it('BalancedPlate：食物组清单显示中文组名，餐盘 aria-label 为中文', () => {
    const { container } = render(<BalancedPlate extra={plateExtra} />);

    // 清单显示翻译后的组名，而不是组 id（veg / fruit / protein ...）
    expect(screen.getByText('蔬菜')).toBeInTheDocument();
    expect(screen.getByText('蛋白质')).toBeInTheDocument();
    expect(screen.getByText('水果')).toBeInTheDocument();
    expect(screen.queryByText('veg')).toBeNull();
    expect(screen.queryByText('protein')).toBeNull();

    // SVG 餐盘的 aria-label 双语化
    expect(container.querySelector('svg[role="img"]')).toHaveAttribute(
      'aria-label',
      '一个分成六个扇区的餐盘',
    );

    // 点击食物卡片后，总计文案为中文
    fireEvent.click(screen.getByText('米饭'));
    expect(screen.getByText('份已上盘')).toBeInTheDocument();
  });

  it('TeethAnatomy：标题、计数说明与图片 alt 均为中文', () => {
    render(<TeethAnatomy extra={teethExtra} />);

    expect(screen.getByText('点击牙齿任一层，了解它的作用。')).toBeInTheDocument();
    expect(screen.getByText('成人的四类牙齿')).toBeInTheDocument();
    expect(screen.getByText(/8 颗切牙 \+ 4 颗尖牙 \+ 8 颗前磨牙 \+ 12 颗磨牙/)).toBeInTheDocument();
    expect(screen.getByAltText('切牙纵切面')).toBeInTheDocument();

    // 对应的英文原文不应出现在 zh 页面
    expect(screen.queryByText('The four types of teeth in an adult')).toBeNull();
    expect(screen.queryByText(/Counts: 8 incisors/)).toBeNull();
  });

  it('en 语言下同一组件仍显示英文', async () => {
    await act(async () => {
      await i18n.changeLanguage('en');
    });
    try {
      render(<TeethAnatomy extra={teethExtra} />);
      expect(screen.getByText('Click a layer of the tooth to read what it does.')).toBeInTheDocument();
      expect(screen.getByText('The four types of teeth in an adult')).toBeInTheDocument();
      expect(screen.getByAltText('Longitudinal section of an incisor tooth')).toBeInTheDocument();
    } finally {
      await act(async () => {
        await i18n.changeLanguage('zh');
      });
    }
  });
});
