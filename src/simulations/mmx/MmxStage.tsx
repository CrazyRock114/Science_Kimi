/**
 * MmxStage：miniMax 通用仿真基元层在本站的集成入口。
 *
 * 对应源项目（IGCSE_miniMax，作者 CrazyRock114，non-commercial）LessonPage 中的
 * 仿真区块：基元画布（SimStage 按 spec.primitive 分发）+ 参数面板（含离散参数的
 * 选项按钮、隐藏参数过滤）+ 读数面板（有效数字格式化）+ 动画时钟播放/暂停。
 *
 * 参数 state 由外层（KnowledgePointPage）持有并经 onParamChange 回写，因此画布拖拽
 * （draggable）与时钟驱动（animate）与滑块写参走的是同一条通道；预设按钮复用本站
 * PresetBar（数据在 kp.presets），故这里不向 ParamPanel 传 presets。
 *
 * 内核结果：KnowledgePointPage 还需 readouts 做 liveFormulas 代入，故内核在外层算一次
 * 后经 result prop 传入（避免同一参数下内核跑两次）；独立使用/测试不传 result 时
 * 本组件自行计算。
 *
 * 本模块只经 React.lazy 加载（见 simulations/registry.ts 的 'mmx' 条目与
 * KnowledgePointPage 的 mmx 分支），不进首屏主 chunk。
 */
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { SimStage } from './SimStage';
import { ParamPanel } from './ParamPanel';
import { ReadoutPanel } from './ReadoutPanel';
import { T } from './T';
import { ui } from './lib/ui-strings';
import { advanceLooping, useAnimationFrame } from './lib/useAnimationFrame';
import type { MmxSimulation, SimResult } from './types';

/** 外部播放控制指令（讲解 action 驱动）：nonce 变化时执行一次 */
export interface MmxClockCommand {
  type: 'play' | 'pause';
  /** 递增序号：同一指令可重复下发（与画布按钮的手动状态解耦） */
  nonce: number;
}

export interface MmxStageProps {
  params: Record<string, number>;
  /** 完整 miniMax 仿真定义；缺省时渲染错误提示（正常路径不会走到） */
  mmx?: MmxSimulation;
  /** 单参数回写（滑块 / 选项按钮 / 画布拖拽 / 动画时钟共用） */
  onParamChange?: (key: string, value: number) => void;
  /** 动画时钟的外部控制（讲解 action 的 play/pause）；无 animate 的仿真忽略 */
  clockCommand?: MmxClockCommand;
  /** 外层已算好的内核结果（与 liveFormulas 共享一次计算）；缺省时内部自行计算 */
  result?: SimResult | null;
}

function MmxStage({ params, mmx, onParamChange, clockCommand, result: externalResult }: MmxStageProps) {
  const setParam = useCallback(
    (key: string, value: number) => onParamChange?.(key, value),
    [onParamChange],
  );

  // 外部传入 result 时直接复用（同一参数不再重算内核）；否则自行计算
  const ownResult = useMemo(
    () => (mmx && !externalResult ? mmx.kernel(params) : null),
    [mmx, params, externalResult],
  );
  const result = externalResult ?? ownResult;

  // 动画时钟每帧需要最新的参数值；用 ref 避免每帧重建回调
  const paramsRef = useRef(params);
  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  const animate = mmx?.spec.animate;
  const clock = useAnimationFrame(
    Boolean(animate),
    useCallback(
      (delta: number) => {
        if (!animate) return;
        const spec = mmx?.spec.params.find((p) => p.key === animate.param);
        setParam(
          animate.param,
          advanceLooping(
            paramsRef.current[animate.param] ?? 0,
            delta,
            animate.speed,
            animate.loop,
            spec?.min ?? 0,
          ),
        );
      },
      [animate, mmx, setParam],
    ),
  );

  // 外部播放控制（讲解 action 的 play/pause）：nonce 变化时对时钟执行一次。
  // 以 clock.playing 为准纠偏，与学生手动点播放/暂停按钮的状态兼容。
  const commandNonce = clockCommand?.nonce;
  useEffect(() => {
    if (!clockCommand || !animate) return;
    if (clockCommand.type === 'play' && !clock.playing) clock.toggle();
    if (clockCommand.type === 'pause' && clock.playing) clock.toggle();
    // 仅在 nonce 变化时执行；clock/clockCommand 取当次渲染值即可
  }, [commandNonce]);

  if (!mmx || !result) {
    return (
      <div className="flex h-72 items-center justify-center rounded-lg bg-red-50 text-sm text-red-600">
        <T value={ui.mmxMissingSpec} />
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      {/* min-w-0 是承重的：grid item 默认 min-width:auto，460 单位 viewBox 的 SVG
          会把整列撑到 460px，窄屏上整页横向滚动（源项目注释同款教训） */}
      <div className="min-w-0">
        <div className="rounded-xl border border-line bg-surface p-4">
          <SimStage spec={mmx.spec} result={result} params={params} onParamChange={setParam} />
          {animate && (
            <div className="mt-3 border-t border-line pt-3">
              <button
                type="button"
                onClick={clock.toggle}
                className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                <T value={clock.playing ? ui.pauseLabel : ui.playLabel} />
              </button>
            </div>
          )}
        </div>
      </div>

      <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
        <div className="rounded-xl border border-line bg-surface p-4">
          <h3 className="text-sm font-semibold text-ink">
            <T value={ui.controlsLabel} />
          </h3>
          <p className="mb-3 mt-1 text-xs leading-relaxed text-muted">
            <T value={mmx.spec.hint ?? ui.controlsHintFallback} />
          </p>
          <ParamPanel params={mmx.spec.params} values={params} onChange={setParam} />
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <h3 className="mb-3 text-sm font-semibold text-ink">
            <T value={ui.readingsLabel} />
          </h3>
          <ReadoutPanel readouts={mmx.spec.readouts} values={result.readouts} />
        </div>
      </aside>
    </div>
  );
}

export default MmxStage;
