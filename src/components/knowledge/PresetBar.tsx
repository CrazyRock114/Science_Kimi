import type { Lang, ParamValues, Preset } from '../../content/types';

interface PresetBarProps {
  presets: Preset[];
  lang: Lang;
  onApply: (params: ParamValues) => void;
}

/** 生活场景预设：一键应用参数 */
export function PresetBar({ presets, lang, onApply }: PresetBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {presets.map((preset) => (
        <button
          key={preset.id}
          type="button"
          title={preset.description?.[lang]}
          onClick={() => onApply({ ...preset.params })}
          className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
        >
          {preset.name[lang]}
        </button>
      ))}
    </div>
  );
}
