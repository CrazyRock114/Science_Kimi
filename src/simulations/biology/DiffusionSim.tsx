import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { equilibriumCount, expectedLeftCount } from '../kernels/diffusion';

interface Particle {
  x: number; // 归一化坐标：x∈[0,1]（0.5 为膜），y∈[0,1]
  y: number;
  vx: number;
  vy: number;
}

function spawnLeft(n: number): Particle[] {
  const list: Particle[] = [];
  for (let i = 0; i < n; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    list.push({
      x: 0.02 + Math.random() * 0.44, // 全部从左室开始
      y: 0.05 + Math.random() * 0.9,
      vx: Math.cos(angle),
      vy: Math.sin(angle),
    });
  }
  return list;
}

const HISTORY_WINDOW = 20; // 浓度曲线滑动窗口（秒）

/**
 * 扩散作用仿真：带半透膜隔板的双室容器，粒子布朗运动（速度 ∝ 温度），
 * 从高浓度侧向低浓度侧净扩散直至动态平衡；底部为左侧计数的实测/理论曲线。
 */
export default function DiffusionSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const particlesRef = useRef<Particle[]>([]);
  const countRef = useRef(-1); // 当前粒子数对应的 initialCount（-1 = 未初始化）
  const historyRef = useRef<{ t: number; frac: number }[]>([]);
  const simTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const temperature = Number(paramsRef.current.temperature);
      const initialCount = Math.round(Number(paramsRef.current.initialCount));

      // initialCount 变化时重置粒子与历史曲线
      if (countRef.current !== initialCount) {
        countRef.current = initialCount;
        particlesRef.current = spawnLeft(initialCount);
        historyRef.current = [];
        simTimeRef.current = 0;
      }
      simTimeRef.current += dt;
      const simT = simTimeRef.current;

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

      // ---------- 上部：双室容器 ----------
      const chamX = 30;
      const chamY = 34;
      const chamW = cssWidth - 60;
      const chamH = cssHeight * 0.52;
      const midX = chamX + chamW / 2;

      // 粒子运动：速度 ∝ 温度（0 °C 时冻结，60 °C 最快）
      const speed = 0.45 * (temperature / 60);
      let leftCount = 0;
      for (const p of particlesRef.current) {
        p.x += p.vx * speed * dt;
        p.y += p.vy * speed * dt;
        // 容器壁反弹（膜可自由通过，仅作视觉分隔）
        if (p.x < 0.01) {
          p.x = 0.02 - p.x;
          p.vx = -p.vx;
        } else if (p.x > 0.99) {
          p.x = 1.98 - p.x;
          p.vx = -p.vx;
        }
        if (p.y < 0.02) {
          p.y = 0.04 - p.y;
          p.vy = -p.vy;
        } else if (p.y > 0.98) {
          p.y = 1.96 - p.y;
          p.vy = -p.vy;
        }
        p.x = Math.min(Math.max(p.x, 0.01), 0.99);
        p.y = Math.min(Math.max(p.y, 0.02), 0.98);
        if (p.x < 0.5) leftCount += 1;
      }

      // 容器壁
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.strokeRect(chamX, chamY, chamW, chamH);
      // 半透膜（虚线隔板）
      ctx.strokeStyle = '#0ea5e9';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 5]);
      ctx.beginPath();
      ctx.moveTo(midX, chamY);
      ctx.lineTo(midX, chamY + chamH);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#0ea5e9';
      ctx.font = '10px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('semipermeable membrane', midX, chamY - 6);

      // 粒子
      ctx.fillStyle = '#2563eb';
      for (const p of particlesRef.current) {
        ctx.beginPath();
        ctx.arc(chamX + p.x * chamW, chamY + p.y * chamH, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 实时计数
      const rightCount = initialCount - leftCount;
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 13px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`left: ${leftCount}`, chamX + chamW * 0.25, chamY + chamH + 16);
      ctx.fillText(`right: ${rightCount}`, chamX + chamW * 0.75, chamY + chamH + 16);
      ctx.fillStyle = '#64748b';
      ctx.font = '11px system-ui, sans-serif';
      ctx.fillText(`equilibrium: ${equilibriumCount(initialCount).toFixed(0)} each side`, midX, chamY + chamH + 32);

      // ---------- 下部：左侧计数曲线（实测 vs 理论） ----------
      historyRef.current.push({ t: simT, frac: leftCount / initialCount });
      while (historyRef.current.length > 0 && historyRef.current[0].t < simT - HISTORY_WINDOW) {
        historyRef.current.shift();
      }

      const plotTop = chamY + chamH + 42;
      const plotH = cssHeight - plotTop - 14;
      const plotL = 40;
      const plotW = cssWidth - plotL - 16;
      if (plotH > 20) {
        const toX = (t: number) => plotL + ((t - (simT - HISTORY_WINDOW)) / HISTORY_WINDOW) * plotW;
        const toY = (frac: number) => plotTop + plotH - frac * plotH;

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(plotL, plotTop);
        ctx.lineTo(plotL, plotTop + plotH);
        ctx.lineTo(plotL + plotW, plotTop + plotH);
        ctx.stroke();

        // 平衡线（0.5）
        ctx.strokeStyle = '#cbd5e1';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(plotL, toY(0.5));
        ctx.lineTo(plotL + plotW, toY(0.5));
        ctx.stroke();
        ctx.setLineDash([]);

        // 理论曲线（指数趋衡模型，τ = 2 个任意时间单位）
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let t = Math.max(0, simT - HISTORY_WINDOW); t <= simT; t += 0.1) {
          const frac = expectedLeftCount(t, initialCount) / initialCount;
          const px = toX(t);
          const py = toY(frac);
          if (t <= Math.max(0, simT - HISTORY_WINDOW) + 0.05) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // 实测曲线
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2;
        ctx.beginPath();
        historyRef.current.forEach((h, i) => {
          const px = toX(h.t);
          const py = toY(h.frac);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '10px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('left fraction: blue = measured, gray = theory', plotL, plotTop - 4);
      }

      // 顶部读数
      ctx.fillStyle = '#0f172a';
      ctx.font = '12px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`T = ${temperature.toFixed(0)} °C  (particle speed ∝ T)`, 12, 16);
      ctx.textAlign = 'right';
      ctx.fillText(`net diffusion: high → low concentration`, cssWidth - 12, 16);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="diffusion-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Particles diffusing across a semipermeable membrane toward equilibrium"
    />
  );
}
