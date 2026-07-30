/**
 * 酶活性内核（纯函数）：温度与 pH 均为钟形曲线，速率 = 温度因子 × pH 因子。
 * enzymeType: 0 = 唾液淀粉酶（最适 ~37 °C / pH ~7），1 = 胃蛋白酶（最适 ~37 °C / pH ~2）
 * 高温（≥ 60 °C）使酶变性失活，且不可逆。
 */

export const ENZYME_AMYLASE = 0;
export const ENZYME_PEPSIN = 1;
export const DENATURE_TEMP = 60; // 视为完全变性的温度阈值 (°C)

const T_OPT = 37; // 两种酶的最适温度 (°C)
const T_SIGMA_AMYLASE = 12;
const T_SIGMA_PEPSIN = 10;
const PH_OPT_AMYLASE = 7;
const PH_OPT_PEPSIN = 2;
const PH_SIGMA_AMYLASE = 1.5;
const PH_SIGMA_PEPSIN = 1.0;

function isPepsin(type: number): boolean {
  return type === ENZYME_PEPSIN;
}

/** 温度因子：钟形曲线，最适温度处为 1，高温急剧下降（变性） */
export function temperatureFactor(temp: number, type: number): number {
  const sigma = isPepsin(type) ? T_SIGMA_PEPSIN : T_SIGMA_AMYLASE;
  const d = temp - T_OPT;
  return Math.exp(-(d * d) / (2 * sigma * sigma));
}

/** pH 因子：钟形曲线，各自最适 pH 处为 1，过酸过碱失活 */
export function phFactor(ph: number, type: number): number {
  const opt = isPepsin(type) ? PH_OPT_PEPSIN : PH_OPT_AMYLASE;
  const sigma = isPepsin(type) ? PH_SIGMA_PEPSIN : PH_SIGMA_AMYLASE;
  const d = ph - opt;
  return Math.exp(-(d * d) / (2 * sigma * sigma));
}

/** 相对催化速率（0–1） */
export function rate(temp: number, ph: number, type: number): number {
  return temperatureFactor(temp, type) * phFactor(ph, type);
}

/** 探针用：命名输入 → 命名输出（denatured: 1 = 高温不可逆变性） */
export function enzymeKernel(input: Record<string, number>): Record<string, number> {
  const { temperature, ph, enzymeType } = input;
  return {
    rate: rate(temperature, ph, enzymeType),
    tempFactor: temperatureFactor(temperature, enzymeType),
    phFactor: phFactor(ph, enzymeType),
    denatured: temperature >= DENATURE_TEMP ? 1 : 0,
  };
}
