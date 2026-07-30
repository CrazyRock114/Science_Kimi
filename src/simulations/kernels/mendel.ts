/**
 * 孟德尔遗传内核（纯函数）。
 * crossType: 0 = Aa×Aa 自交, 1 = Aa×aa 测交, 2 = AaBb×AaBb 双因子自交
 * sampleSize: 模拟取样个体数；seed: 伪随机种子（保证探针确定性）
 */

export interface OffspringRatios {
  /** 基因型 → 理论比例（合计为 1） */
  genotypes: Record<string, number>;
  /** 表型 → 理论比例（合计为 1） */
  phenotypes: Record<string, number>;
}

/** 各杂交方式的基因型与表型理论比例 */
export function offspringRatios(crossType: number): OffspringRatios {
  if (crossType === 1) {
    // Aa × aa 测交
    return {
      genotypes: { Aa: 1 / 2, aa: 1 / 2 },
      phenotypes: { dominant: 1 / 2, recessive: 1 / 2 },
    };
  }
  if (crossType === 2) {
    // AaBb × AaBb 双因子自交：9 种基因型、4 种表型
    return {
      genotypes: {
        AABB: 1 / 16,
        AABb: 2 / 16,
        AAbb: 1 / 16,
        AaBB: 2 / 16,
        AaBb: 4 / 16,
        Aabb: 2 / 16,
        aaBB: 1 / 16,
        aaBb: 2 / 16,
        aabb: 1 / 16,
      },
      phenotypes: { A_B_: 9 / 16, A_bb: 3 / 16, aaB_: 3 / 16, aabb: 1 / 16 },
    };
  }
  // 0：Aa × Aa 自交
  return {
    genotypes: { AA: 1 / 4, Aa: 1 / 2, aa: 1 / 4 },
    phenotypes: { dominant: 3 / 4, recessive: 1 / 4 },
  };
}

/** 基因型 → 表型键（与 offspringRatios().phenotypes 的键一致） */
export function phenotypeOf(genotype: string): string {
  if (genotype.length <= 2) {
    return genotype.includes('A') ? 'dominant' : 'recessive';
  }
  const geneA = genotype.slice(0, 2);
  const geneB = genotype.slice(2, 4);
  const a = geneA.includes('A') ? 'A_' : 'aa';
  const b = geneB.includes('B') ? 'B_' : 'bb';
  return a + b;
}

/** mulberry32 确定性伪随机数发生器（探针可复现） */
function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let z = s;
    z = Math.imul(z ^ (z >>> 15), z | 1);
    z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
    return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
  };
}

/** 由两个随机数决定一对等位基因（显性纯合/杂合/隐性纯合） */
function genePair(r1: number, r2: number, upper: string, lower: string): string {
  const a1 = r1 < 0.5 ? upper : lower;
  const a2 = r2 < 0.5 ? upper : lower;
  if (a1 === upper && a2 === upper) return upper + upper;
  if (a1 === lower && a2 === lower) return lower + lower;
  return upper + lower;
}

/**
 * 确定性伪随机抽样：返回基因型 → 抽样计数（合计为 n）。
 * 同一 (crossType, n, seed) 必然得到相同结果。
 */
export function simulateSample(
  crossType: number,
  n: number,
  seed: number,
): Record<string, number> {
  const rand = mulberry32(seed);
  const counts: Record<string, number> = {};
  for (const g of Object.keys(offspringRatios(crossType).genotypes)) counts[g] = 0;

  for (let i = 0; i < n; i += 1) {
    let genotype: string;
    if (crossType === 1) {
      // Aa × aa：父本 Aa 给 A/a，母本 aa 恒给 a
      genotype = rand() < 0.5 ? 'Aa' : 'aa';
    } else if (crossType === 2) {
      // AaBb × AaBb：两对基因独立分配、雌雄配子随机结合
      genotype = genePair(rand(), rand(), 'A', 'a') + genePair(rand(), rand(), 'B', 'b');
    } else {
      // Aa × Aa
      genotype = genePair(rand(), rand(), 'A', 'a');
    }
    counts[genotype] += 1;
  }
  return counts;
}

/** 探针用：命名输入 → 命名输出（抽样计数 + 理论表型比例） */
export function mendelKernel(input: Record<string, number>): Record<string, number> {
  const { crossType, sampleSize, seed } = input;
  const counts = simulateSample(crossType, sampleSize, seed);
  const ratios = offspringRatios(crossType);
  const out: Record<string, number> = { n: sampleSize };
  for (const [g, c] of Object.entries(counts)) out[`count_${g}`] = c;
  for (const [p, r] of Object.entries(ratios.phenotypes)) out[`ratio_${p}`] = r;
  return out;
}
