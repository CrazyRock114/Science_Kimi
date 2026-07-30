import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import {
  flightTime,
  maxHeight,
  positionAt,
  range,
  velocityAt,
} from '../kernels/projectile';

const HOLD = 0.8; // 落地后停留时长（秒）

function drawArrow(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  label?: string,
) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  if (len < 2) return;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const head = Math.min(8, len * 0.4);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - head * Math.cos(ang - 0.45), y2 - head * Math.sin(ang - 0.45));
  ctx.lineTo(x2 - head * Math.cos(ang + 0.45), y2 - head * Math.sin(ang + 0.45));
  ctx.closePath();
  ctx.fill();
  if (label) {
    ctx.font = '12px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(label, x2 + 5, y2 - 5);
  }
}

/**
 * 抛体运动仿真：小球飞行 + 轨迹线 + 速度矢量分解，
 * 实时显示射程 / 最大高度 / 飞行时间。
 */
export default function ProjectileMotionSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const v0 = Number(paramsRef.current.v0 ?? 20);
      const angle = Number(paramsRef.current.angle ?? 45);
      const g = Number(paramsRef.current.g ?? 9.8);

      // devicePixelRatio 适配
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

      const R = range(v0, angle, g);
      const H = maxHeight(v0, angle, g);
      const T = flightTime(v0, angle, g);

      // 动画时间：飞完 T 后停留 HOLD 再循环
      const elapsed = (now - start) / 1000;
      let t = elapsed % (T + HOLD);
      if (t > T) t = T;

      // 坐标映射：世界坐标（m）→ 画布坐标
      const padL = 40;
      const padR = 24;
      const padT = 40;
      const padB = 36;
      const plotW = cssWidth - padL - padR;
      const plotH = cssHeight - padT - padB;
      const scale = Math.min(plotW / Math.max(R, 1e-6), plotH / Math.max(H, 1e-6));
      const toX = (x: number) => padL + x * scale;
      const toY = (y: number) => padT + plotH - y * scale;

      // 地面与 y 轴
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL - 8, toY(0));
      ctx.lineTo(padL + plotW + 8, toY(0));
      ctx.moveTo(toX(0), toY(0));
      ctx.lineTo(toX(0), padT - 6);
      ctx.stroke();
      ctx.fillStyle = '#64748b';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('y/m', padL - 30, padT - 2);
      ctx.textAlign = 'right';
      ctx.fillText('x/m', padL + plotW + 8, toY(0) + 16);

      // 射程刻度
      const step = Math.max(1, Math.round(R / 8));
      ctx.textAlign = 'center';
      for (let x = step; x <= R; x += step) {
        ctx.strokeStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.moveTo(toX(x), toY(0));
        ctx.lineTo(toX(x), toY(0) + 4);
        ctx.stroke();
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(String(x), toX(x), toY(0) + 15);
      }

      // 轨迹线
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let tt = 0; tt <= T; tt += T / 120) {
        const p = positionAt(v0, angle, g, tt);
        const px = toX(p.x);
        const py = toY(Math.max(0, p.y));
        if (tt === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 最大高度虚线与落点标记
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(toX(0), toY(H));
      ctx.lineTo(toX(R / 2), toY(H));
      ctx.moveTo(toX(R), toY(0));
      ctx.lineTo(toX(R), toY(Math.min(H, R) * 0.15));
      ctx.stroke();
      ctx.setLineDash([]);

      // 小球
      const p = positionAt(v0, angle, g, t);
      const bx = toX(p.x);
      const by = toY(Math.max(0, p.y));
      ctx.fillStyle = '#2563eb';
      ctx.beginPath();
      ctx.arc(bx, by, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#1e40af';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 速度矢量分解：vx（绿）、vy（橙）
      const v = velocityAt(v0, angle, g, t);
      const vScale = 48 / v0;
      drawArrow(ctx, bx, by, bx + v.vx * vScale, by, '#059669', 'vₓ');
      drawArrow(ctx, bx, by, bx, by - v.vy * vScale, '#ea580c', 'vᵧ');

      // 参数与读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`v₀ = ${v0} m/s   θ = ${angle}°   g = ${g} m/s²`, 10, 16);
      ctx.textAlign = 'right';
      ctx.fillText(
        `R = ${R.toFixed(1)} m   h_max = ${H.toFixed(1)} m   T = ${T.toFixed(2)} s`,
        cssWidth - 10,
        16,
      );
      const speed = Math.hypot(v.vx, v.vy);
      ctx.fillText(
        `t = ${t.toFixed(2)} s   x = ${p.x.toFixed(1)} m   y = ${Math.max(0, p.y).toFixed(1)} m   |v| = ${speed.toFixed(1)} m/s`,
        cssWidth - 10,
        32,
      );

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="projectile-motion-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Projectile motion: trajectory with velocity components"
    />
  );
}
