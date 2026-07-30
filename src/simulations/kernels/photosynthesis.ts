/**
 * 光合作用速率内核（纯函数）：限制因子模型。
 * lightIntensity: 光照强度 (0–100 %)
 * co2Level: CO₂ 浓度 (0–100 相对单位)
 * temperature: 温度 (0–45 °C)
 *
 * 速率 = min(光照饱和曲线, CO₂ 饱和曲线) × 温度系数（钟形，最适 25–30 °C，45 °C 趋近 0）。
 * 输出为相对速率（0–1 量级）。
 */

export const T_OPT = 27.5; // 最适温度中点 (°C)
export const T_SIGMA = 8; // 温度钟形曲线宽度
export const K_LIGHT = 20; // 光半饱和常数 (%)
export const K_CO2 = 20; // CO₂ 半饱和常数

const EPS = 1e-9;

/** 光照饱和曲线（米氏型）：0 → 0，随光强趋于 1 */
export function lightSaturation(light: number): number {
  if (light <= 0) return 0;
  return light / (light + K_LIGHT);
}

/** CO₂ 饱和曲线（米氏型） */
export function co2Saturation(co2: number): number {
  if (co2 <= 0) return 0;
  return co2 / (co2 + K_CO2);
}

/** 温度系数：钟形曲线，最适 27.5 °C 时为 1，0 °C 与 45 °C 趋近 0 */
export function temperatureFactor(temp: number): number {
  const d = temp - T_OPT;
  return Math.exp(-(d * d) / (2 * T_SIGMA * T_SIGMA));
}

/** 相对光合速率：限制因子（取最小饱和值）× 温度系数 */
export function rate(light: number, co2: number, temp: number): number {
  return Math.min(lightSaturation(light), co2Saturation(co2)) * temperatureFactor(temp);
}

/**
 * 当前限制因素编码：0 = 光照，1 = CO₂，2 = 共同限制（两者饱和值相等）。
 * 温度通过系数整体缩放，不作为此处 min 的候选。
 */
export function limitingFactor(light: number, co2: number): number {
  const ls = lightSaturation(light);
  const cs = co2Saturation(co2);
  if (Math.abs(ls - cs) <= EPS) return 2;
  return ls < cs ? 0 : 1;
}

/** 探针用：命名输入 → 命名输出 */
export function photosynthesisKernel(input: Record<string, number>): Record<string, number> {
  const { lightIntensity, co2Level, temperature } = input;
  return {
    rate: rate(lightIntensity, co2Level, temperature),
    limiting: limitingFactor(lightIntensity, co2Level),
    tempFactor: temperatureFactor(temperature),
    lightSat: lightSaturation(lightIntensity),
    co2Sat: co2Saturation(co2Level),
  };
}
