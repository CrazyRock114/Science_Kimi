import type { ParamValues, SimulationParamDef } from '../../content/types';
import type { Lang } from '../../content/types';

interface ParamPanelProps {
  defs: SimulationParamDef[];
  values: ParamValues;
  lang: Lang;
  onChange: (key: string, value: number) => void;
}

/** 参数面板：受控滑块 */
export function ParamPanel({ defs, values, lang, onChange }: ParamPanelProps) {
  return (
    <div className="space-y-4">
      {defs.map((def) => (
        <div key={def.key}>
          <div className="mb-1 flex items-baseline justify-between">
            <label htmlFor={`param-${def.key}`} className="text-sm font-medium text-slate-700">
              {def.label[lang]}
            </label>
            <span className="text-sm tabular-nums text-slate-900">
              {values[def.key]}
              {def.unit ? ` ${def.unit}` : ''}
            </span>
          </div>
          <input
            id={`param-${def.key}`}
            type="range"
            min={def.min}
            max={def.max}
            step={def.step}
            value={values[def.key]}
            onChange={(e) => onChange(def.key, Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>{def.min}</span>
            <span>{def.max}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
