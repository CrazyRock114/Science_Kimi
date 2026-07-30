/**
 * 气体压强内核（纯函数）：p = nRT/V，物质的量 n 固定。
 * 基准状态：p₀ = 1 atm，V₀ = 1（相对体积），T₀ = 20 °C = 293.15 K。
 * volume: 相对体积（1 = V₀），temperatureC: 摄氏温度 (°C)。
 */

export const P0_ATM = 1;
export const T0_CELSIUS = 20;
export const T0_KELVIN = 273.15 + T0_CELSIUS; // 293.15 K

/** 压强 p = p₀·(T/T₀)·(V₀/V) (atm)，T 必须用热力学温度 */
export function pressure(volume: number, temperatureC: number): number {
  const tKelvin = 273.15 + temperatureC;
  return (P0_ATM * tKelvin) / (T0_KELVIN * volume);
}

/**
 * pV 乘积（以 atm·V₀ 为单位）。
 * 等温时恒定（玻意耳定律）；数值上 pV/p₀V₀ = T/T₀。
 */
export function pvProduct(volume: number, temperatureC: number): number {
  return pressure(volume, temperatureC) * volume;
}

/** 探针用：命名输入 → 命名输出 */
export function gasKernel(input: Record<string, number>): Record<string, number> {
  const { volume, temperature } = input;
  return {
    pressure: pressure(volume, temperature),
    pv: pvProduct(volume, temperature),
  };
}
