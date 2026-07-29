import { Suspense } from 'react';
import type { ParamValues } from '../../content/types';
import { getSimulationRenderer } from '../../simulations/registry';

interface SimulationCanvasProps {
  rendererId: string;
  params: ParamValues;
}

/** 仿真画布区：按 renderer id 从注册表取组件，懒加载 */
export function SimulationCanvas({ rendererId, params }: SimulationCanvasProps) {
  const Renderer = getSimulationRenderer(rendererId);
  if (!Renderer) {
    return (
      <div className="flex h-72 items-center justify-center rounded-lg bg-red-50 text-sm text-red-600">
        Unknown simulation renderer: {rendererId}
      </div>
    );
  }
  return (
    <Suspense
      fallback={
        <div className="flex h-72 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-400">
          Loading…
        </div>
      }
    >
      <Renderer params={params} />
    </Suspense>
  );
}
