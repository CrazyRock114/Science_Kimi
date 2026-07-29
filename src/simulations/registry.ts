/**
 * 仿真渲染器注册表：renderer id → 懒加载组件。
 * 每个知识点按 renderer id 从这里取组件，组件随路由分包懒加载。
 */

import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { ParamValues } from '../content/types';

export interface SimulationProps {
  params: ParamValues;
}

const registry: Record<string, LazyExoticComponent<ComponentType<SimulationProps>>> = {
  'motion-graphs': lazy(() => import('./physics/MotionGraphsSim')),
  'ph-indicator': lazy(() => import('./chemistry/PhIndicatorSim')),
};

export function getSimulationRenderer(
  id: string,
): LazyExoticComponent<ComponentType<SimulationProps>> | undefined {
  return registry[id];
}

export function hasSimulationRenderer(id: string): boolean {
  return id in registry;
}
