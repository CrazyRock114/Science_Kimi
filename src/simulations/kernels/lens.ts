/**
 * 凸透镜成像内核（纯函数）。
 * f: 焦距 (cm)，u: 物距 (cm)，薄透镜公式 1/f = 1/u + 1/v。
 * 符号约定：实像 v > 0（异侧、倒立）；虚像 v < 0（同侧、正立）。
 */

/** 像距 v = fu/(u−f) (cm)；u = f 时返回 Infinity（不成像） */
export function imageDistance(f: number, u: number): number {
  return (f * u) / (u - f);
}

/**
 * 放大率（带符号）m = −v/u。
 * m < 0：倒立实像；m > 0：正立虚像；|m| 为放大倍数。
 */
export function magnification(f: number, u: number): number {
  return -imageDistance(f, u) / u;
}

export type ImageType = 'real-inverted' | 'virtual-upright' | 'no-image';

/** 成像性质：u > f 实像倒立；u < f 虚像正立（放大镜）；u = f 不成像 */
export function imageType(f: number, u: number): ImageType {
  if (u === f) return 'no-image';
  return u > f ? 'real-inverted' : 'virtual-upright';
}

/** 数值编码的成像性质（探针用）：0 = 实像倒立，1 = 虚像正立，2 = 不成像 */
export function imageTypeCode(f: number, u: number): number {
  const t = imageType(f, u);
  return t === 'real-inverted' ? 0 : t === 'virtual-upright' ? 1 : 2;
}

/** 探针用：命名输入 → 命名输出 */
export function lensKernel(input: Record<string, number>): Record<string, number> {
  const { focalLength: f, objectDistance: u } = input;
  return {
    v: imageDistance(f, u),
    m: magnification(f, u),
    type: imageTypeCode(f, u),
  };
}
