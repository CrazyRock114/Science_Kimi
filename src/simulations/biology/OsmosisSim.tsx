import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { plasmolysisDegree, waterFlowDirection } from '../kernels/osmosis';

const WATER_DOTS_OUT = 40; // 外界水分子粒子数
const WATER_DOTS_IN = 16; // 细胞内水分子粒子数

interface Dot {
  x: number; // 归一化坐标
  y: number;
  phase: number;
}

function initDots(count: number): Dot[] {
  const list: Dot[] = [];
  for (let i = 0; i < count; i += 1) {
    list.push({ x: Math.random(), y: Math.random(), phase: Math.random() * Math.PI * 2 });
  }
  return list;
}

/** 第 i 个溶质颗粒的确定性伪随机位置（浓度滑块拖动时位置稳定） */
function hashPos(i: number, salt: number): number {
  const v = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return v - Math.floor(v);
}

/**
 * 渗透作用与质壁分离仿真：植物细胞（细胞壁 + 细胞膜 + 液泡）浸在溶液中。
 * 水分子净流动方向由浓度差决定；外界高浓度时液泡缩小、膜与壁分离。
 */
export default function OsmosisSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const outDotsRef = useRef<Dot[]>(initDots(WATER_DOTS_OUT));
  const inDotsRef = useRef<Dot[]>(initDots(WATER_DOTS_IN));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;

    const draw = (now: number) => {
      const internalConc = Number(paramsRef.current.internalConc);
      const externalConc = Number(paramsRef.current.externalConc);
      const flow = waterFlowDirection(internalConc, externalConc);
      const degree = plasmolysisDegree(internalConc, externalConc);
      const gradient = Math.abs(externalConc - internalConc);

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

      // 外界溶液背景（浓度越高蓝色越深）
      const solAlpha = 0.08 + externalConc * 0.25;
      ctx.fillStyle = `rgba(59, 130, 246, ${solAlpha.toFixed(3)})`;
      ctx.fillRect(0, 0, cssWidth, cssHeight);

      // 细胞几何：细胞壁固定矩形（带圆角效果以粗线绘制）
      const wallX = cssWidth * 0.3;
      const wallY = 56;
      const wallW = cssWidth * 0.4;
      const wallH = cssHeight - 116;
      // 质壁分离：膜/液泡自壁向内收缩 degree 比例
      const maxInset = Math.min(wallW, wallH) * 0.22;
      const inset = 6 + degree * maxInset;
      const memX = wallX + inset;
      const memY = wallY + inset;
      const memW = wallW - inset * 2;
      const memH = wallH - inset * 2;

      // 膜外空间（质壁分离时充满外界溶液）
      if (degree > 0) {
        ctx.fillStyle = `rgba(59, 130, 246, ${(solAlpha + 0.05).toFixed(3)})`;
        ctx.fillRect(wallX, wallY, wallW, wallH);
      }

      // 液泡/原生质体（膜内区域）
      ctx.fillStyle = flow === 'into' ? '#dcfce7' : '#f0fdf4';
      ctx.fillRect(memX, memY, memW, memH);

      // 细胞壁（粗绿棕线）
      ctx.strokeStyle = '#78716c';
      ctx.lineWidth = 6;
      ctx.strokeRect(wallX, wallY, wallW, wallH);
      // 细胞膜（细红线）
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(memX, memY, memW, memH);

      // 溶质颗粒：外界 ∝ externalConc，细胞内 ∝ internalConc
      ctx.fillStyle = '#1d4ed8';
      const nOut = Math.round(externalConc * 50);
      for (let i = 0; i < nOut; i += 1) {
        const px = hashPos(i, 1) * cssWidth;
        const py = hashPos(i, 2) * cssHeight;
        // 跳过落在细胞壁内的点（保持在外界溶液中）
        if (px > wallX - 4 && px < wallX + wallW + 4 && py > wallY - 4 && py < wallY + wallH + 4) continue;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#7c3aed';
      const nIn = Math.round(internalConc * 24);
      for (let i = 0; i < nIn; i += 1) {
        const px = memX + 6 + hashPos(i, 3) * Math.max(memW - 12, 1);
        const py = memY + 6 + hashPos(i, 4) * Math.max(memH - 12, 1);
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 水分子粒子：布朗抖动 + 跨膜净漂移
      const t = now / 1000;
      const driftSpeed = 30 + gradient * 120; // 跨膜移动速度 ∝ 浓度差
      ctx.fillStyle = 'rgba(37, 99, 235, 0.7)';
      for (const d of outDotsRef.current) {
        // 粒子沿水平方向在细胞两侧往复穿膜；相位速度 ∝ 浓度差
        const dir = flow === 'none' ? 0 : flow === 'into' ? 1 : -1;
        const travel = (t * driftSpeed * 0.002 + d.x) % 1;
        const pxBase = wallX - 70 + travel * 140; // 壁左侧往复带
        const px = dir >= 0 ? pxBase : wallX + wallW + 70 - travel * 140;
        const py = wallY + d.y * wallH + Math.sin(t * 2 + d.phase) * 4;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const d of inDotsRef.current) {
        const px = memX + ((d.x + Math.sin(t * 0.7 + d.phase) * 0.02 + 1) % 1) * memW;
        const py = memY + ((d.y + Math.cos(t * 0.9 + d.phase) * 0.02 + 1) % 1) * memH;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 跨膜净流动箭头（速率 ∝ 浓度差；平衡时不画）
      if (flow !== 'none') {
        const arrowDir = flow === 'into' ? 1 : -1;
        const offset = (t * driftSpeed) % 24;
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2;
        for (let k = 0; k < 3; k += 1) {
          const ay = wallY + wallH * (0.25 + k * 0.25);
          const ax0 = wallX - 34 + (arrowDir > 0 ? offset : 24 - offset);
          const ax1 = ax0 + 20 * arrowDir;
          ctx.beginPath();
          ctx.moveTo(ax0, ay);
          ctx.lineTo(ax1, ay);
          ctx.lineTo(ax1 - 6 * arrowDir, ay - 4);
          ctx.moveTo(ax1, ay);
          ctx.lineTo(ax1 - 6 * arrowDir, ay + 4);
          ctx.stroke();
        }
      }

      // 标注（英文符号）
      ctx.fillStyle = '#334155';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('cell wall', wallX + wallW / 2, wallY - 8);
      ctx.fillText(
        degree > 0 ? 'cell membrane (detached)' : 'cell membrane',
        wallX + wallW / 2,
        memY + memH + 16,
      );
      ctx.fillText('vacuole', wallX + wallW / 2, memY + memH / 2 + 4);
      ctx.textAlign = 'left';
      ctx.fillText('external solution', 10, cssHeight - 10);

      // 读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`cell sap: ${internalConc.toFixed(2)} mol/L`, 10, 20);
      ctx.fillText(`external: ${externalConc.toFixed(2)} mol/L`, 10, 38);
      ctx.textAlign = 'right';
      const stateText =
        flow === 'none'
          ? 'isotonic: no net flow'
          : flow === 'into'
            ? 'hypotonic outside: H₂O in (turgid)'
            : `hypertonic outside: H₂O out, plasmolysis ${(degree * 100).toFixed(0)}%`;
      ctx.fillText(stateText, cssWidth - 10, 20);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="osmosis-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Plant cell in solution showing osmosis and plasmolysis"
    />
  );
}
