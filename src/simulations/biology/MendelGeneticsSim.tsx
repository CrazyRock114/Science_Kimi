import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { offspringRatios, phenotypeOf, simulateSample } from '../kernels/mendel';

const BASE_SEED = 42; // 固定基础种子：探针可测，迭代种子 = BASE_SEED + 代数
const RESAMPLE_MS = 2200; // 重新抽样间隔

/** 各杂交方式的亲本配子（列 × 行） */
function gametesFor(crossType: number): { cols: string[]; rows: string[] } {
  if (crossType === 2) return { cols: ['AB', 'Ab', 'aB', 'ab'], rows: ['AB', 'Ab', 'aB', 'ab'] };
  if (crossType === 1) return { cols: ['A', 'a'], rows: ['a', 'a'] };
  return { cols: ['A', 'a'], rows: ['A', 'a'] };
}

/** 雌雄配子结合 → 子代基因型（等位基因按显性在前排列） */
function combine(g1: string, g2: string): string {
  if (g1.length === 1) return [g1, g2].sort().join('');
  const geneA = [g1[0], g2[0]].sort().join('');
  const geneB = [g1[1], g2[1]].sort().join('');
  return geneA + geneB;
}

const PHENO_FILL: Record<string, string> = {
  dominant: '#86efac',
  recessive: '#e2e8f0',
  A_B_: '#4ade80',
  A_bb: '#bbf7d0',
  aaB_: '#fde68a',
  aabb: '#e2e8f0',
};

const CROSS_NAMES = ['Aa × Aa (self)', 'Aa × aa (testcross)', 'AaBb × AaBb (dihybrid)'];

interface SampleState {
  signature: string;
  generation: number;
  lastSample: number;
  displayed: Record<string, number>; // 表型 → 当前显示比例（缓动）
  target: Record<string, number>; // 表型 → 目标抽样比例
}

/**
 * 孟德尔遗传仿真：庞纳特方格 + 理论表型比例 + 抽样计数收敛对比。
 * 每 RESAMPLE_MS 毫秒按新种子重新抽样，比例缓动收敛到理论值附近。
 */
export default function MendelGeneticsSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const sampleRef = useRef<SampleState>({
    signature: '',
    generation: 0,
    lastSample: 0,
    displayed: {},
    target: {},
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;

    const draw = (now: number) => {
      const crossType = Math.round(Number(paramsRef.current.crossType));
      const sampleSize = Math.round(Number(paramsRef.current.sampleSize));
      const ratios = offspringRatios(crossType);
      const phenoKeys = Object.keys(ratios.phenotypes);

      const dpr = window.devicePixelRatio || 1;
      const cssWidth = canvas.clientWidth;
      const cssHeight = canvas.clientHeight;
      const pixelWidth = Math.round(cssWidth * dpr);
      const pixelHeight = Math.round(cssHeight * dpr);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      // 抽样状态：参数变化时重置；到时间按新种子重新抽样
      const state = sampleRef.current;
      const signature = `${crossType}|${sampleSize}`;
      if (state.signature !== signature) {
        state.signature = signature;
        state.generation = 0;
        state.lastSample = now;
        state.displayed = {};
        state.target = {};
      }
      if (now - state.lastSample >= RESAMPLE_MS || state.generation === 0) {
        state.lastSample = now;
        state.generation += 1;
        const counts = simulateSample(crossType, sampleSize, BASE_SEED + state.generation);
        const target: Record<string, number> = {};
        for (const p of phenoKeys) target[p] = 0;
        for (const [g, c] of Object.entries(counts)) {
          target[phenotypeOf(g)] += c / sampleSize;
        }
        state.target = target;
      }
      // 缓动逼近目标比例（重新抽样的动画过渡）
      for (const p of phenoKeys) {
        const cur = state.displayed[p] ?? 0;
        const tgt = state.target[p] ?? 0;
        state.displayed[p] = cur + (tgt - cur) * 0.12;
      }

      // ---------- 左侧：庞纳特方格 ----------
      const { cols, rows } = gametesFor(crossType);
      const n = cols.length;
      const gridX = 44;
      const gridY = 52;
      const cell = Math.min(44, (cssWidth * 0.42 - gridX - 8) / (n + 1), (cssHeight - gridY - 30) / (n + 1));

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(CROSS_NAMES[crossType] ?? CROSS_NAMES[0], 12, 18);
      ctx.fillStyle = '#64748b';
      ctx.font = '11px system-ui, sans-serif';
      ctx.fillText('Punnett square', 12, 34);

      // 配子标签
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#334155';
      for (let c = 0; c < n; c += 1) {
        ctx.fillText(cols[c], gridX + (c + 1) * cell + cell / 2, gridY + cell * 0.7);
      }
      for (let r = 0; r < n; r += 1) {
        ctx.textAlign = 'right';
        ctx.fillText(rows[r], gridX + cell * 0.85, gridY + (r + 1) * cell + cell / 2 + 4);
      }

      // 子代格子（按表型着色）
      ctx.font = `${n > 2 ? 9 : 11}px system-ui, sans-serif`;
      for (let r = 0; r < n; r += 1) {
        for (let c = 0; c < n; c += 1) {
          const genotype = combine(cols[c], rows[r]);
          const x = gridX + (c + 1) * cell;
          const y = gridY + (r + 1) * cell;
          ctx.fillStyle = PHENO_FILL[phenotypeOf(genotype)] ?? '#e2e8f0';
          ctx.fillRect(x, y, cell, cell);
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, cell, cell);
          ctx.fillStyle = '#0f172a';
          ctx.textAlign = 'center';
          ctx.fillText(genotype, x + cell / 2, y + cell / 2 + 3);
        }
      }

      // ---------- 右侧：理论 vs 抽样表型比例条形图 ----------
      const chartX = cssWidth * 0.52;
      const chartW = cssWidth - chartX - 20;
      const chartTop = 52;
      const rowH = Math.min(52, (cssHeight - chartTop - 46) / phenoKeys.length);
      const barH = Math.min(14, (rowH - 18) / 2);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Phenotype ratios: theory vs sample', chartX, 18);
      ctx.fillStyle = '#64748b';
      ctx.font = '11px system-ui, sans-serif';
      ctx.fillText(`generation ${state.generation}, n = ${sampleSize}`, chartX, 34);

      phenoKeys.forEach((p, i) => {
        const y = chartTop + i * rowH;
        const theory = ratios.phenotypes[p];
        const sampled = state.displayed[p] ?? 0;
        ctx.fillStyle = '#334155';
        ctx.font = '11px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(p, chartX, y + 10);

        // 理论比例（蓝）
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(chartX, y + 14, chartW * theory, barH);
        ctx.fillStyle = '#0f172a';
        ctx.textAlign = 'right';
        ctx.fillText(`theory ${(theory * 100).toFixed(1)}%`, chartX + chartW * theory + 62, y + 14 + barH - 3);

        // 抽样比例（橙）
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(chartX, y + 16 + barH, chartW * sampled, barH);
        ctx.fillStyle = '#0f172a';
        ctx.fillText(`sample ${(sampled * 100).toFixed(1)}%`, chartX + chartW * sampled + 62, y + 16 + barH * 2 - 3);
      });

      // 底部提示
      ctx.fillStyle = '#64748b';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Resampling every ~2 s: sample ratios fluctuate around theory (law of large numbers).', 12, cssHeight - 10);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="mendel-genetics-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Punnett square and phenotype ratio bar chart for a Mendelian cross"
    />
  );
}
