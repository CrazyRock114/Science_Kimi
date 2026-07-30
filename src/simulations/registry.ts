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
  'projectile-motion': lazy(() => import('./physics/ProjectileMotionSim')),
  'newton-second-law': lazy(() => import('./physics/NewtonSecondLawSim')),
  buoyancy: lazy(() => import('./physics/BuoyancySim')),
  'lever-balance': lazy(() => import('./physics/LeverBalanceSim')),
  'inclined-plane': lazy(() => import('./physics/InclinedPlaneSim')),
  'ohm-circuit': lazy(() => import('./physics/OhmCircuitSim')),
  'series-parallel': lazy(() => import('./physics/SeriesParallelSim')),
  'convex-lens': lazy(() => import('./physics/ConvexLensSim')),
  refraction: lazy(() => import('./physics/RefractionSim')),
  'gas-law': lazy(() => import('./physics/GasLawSim')),
  'mendel-genetics': lazy(() => import('./biology/MendelGeneticsSim')),
  osmosis: lazy(() => import('./biology/OsmosisSim')),
  'photosynthesis-rate': lazy(() => import('./biology/PhotosynthesisRateSim')),
  'enzyme-activity': lazy(() => import('./biology/EnzymeActivitySim')),
  diffusion: lazy(() => import('./biology/DiffusionSim')),
  'population-growth': lazy(() => import('./biology/PopulationGrowthSim')),
};

export function getSimulationRenderer(
  id: string,
): LazyExoticComponent<ComponentType<SimulationProps>> | undefined {
  return registry[id];
}

export function hasSimulationRenderer(id: string): boolean {
  return id in registry;
}
