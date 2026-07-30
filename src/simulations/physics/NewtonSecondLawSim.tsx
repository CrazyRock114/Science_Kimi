import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import {
  acceleration,
  displacementAt,
  maxFriction,
  netForce,
  speedAt,
} from '../kernels/newton';

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
    ctx.textAlign = 'center';
    ctx.fillText(label, (x1 + x2) / 2, y1 - 8);
  }
}

/**
 * 牛顿第二定律仿真：水平面上物块受力加速，
 * 显示拉力 / 摩擦力箭头、合力、a = F_net/m、实时速度与位移。
 */
export default function NewtonSecondLawSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const cycleStartRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    cycleStartRef.current = performance.now();

    const draw = (now: number) => {
      const mass = Number(paramsRef.current.mass ?? 2);
      const force = Number(paramsRef.current.force ?? 10);
      const mu = Number(paramsRef.current.mu ?? 0.1);

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

      const friction = maxFriction(mass, mu);
      const fNet = netForce(force, mass, mu);
      const a = acceleration(force, mass, mu);
      const moving = fNet > 0;

      // 物块几何：边长随质量增大（平方根缩放）
      const blockSize = 34 + Math.sqrt(mass) * 10;
      const groundY = cssHeight - 56;
      const startX = 30;

      // 位移换算：让物块约 6 秒横穿画面
      let pxPerM = 0;
      if (moving) pxPerM = ((cssWidth - startX - blockSize - 40) / displacementAt(force, mass, mu, 6)) || 0;

      // 动画时间（冲出画面后重新计时）
      let t = (now - cycleStartRef.current) / 1000;
      let s = moving ? displacementAt(force, mass, mu, t) : 0;
      if (moving && startX + s * pxPerM > cssWidth - blockSize - 20) {
        cycleStartRef.current = now;
        t = 0;
        s = 0;
      }
      const v = moving ? speedAt(force, mass, mu, t) : 0;
      const blockX = startX + s * pxPerM;
      const blockY = groundY - blockSize;

      // 地面
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(cssWidth, groundY);
      ctx.stroke();
      // 地面阴影线
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cbd5e1';
      for (let x = 8; x < cssWidth; x += 16) {
        ctx.beginPath();
        ctx.moveTo(x, groundY + 2);
        ctx.lineTo(x - 6, groundY + 9);
        ctx.stroke();
      }

      // 物块
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(blockX, blockY, blockSize, blockSize);
      ctx.strokeStyle = '#1e40af';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(blockX, blockY, blockSize, blockSize);
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`m = ${mass} kg`, blockX + blockSize / 2, blockY + blockSize / 2 + 4);

      // 力箭头：拉力 F（红，向右）、摩擦力 f（橙，向左）
      // 静止时摩擦与拉力等大反向；运动时 f = μmg
      const fActual = moving ? friction : Math.min(force, friction);
      const kF = 110 / 50; // px/N（拉力量程 0–50 N）
      const cy = blockY + blockSize / 2;
      drawArrow(ctx, blockX + blockSize, cy, blockX + blockSize + force * kF, cy, '#dc2626', 'F');
      drawArrow(ctx, blockX, cy, blockX - fActual * kF, cy, '#ea580c', 'f');
      // 合力箭头（绿，仅运动时）
      if (moving) {
        drawArrow(ctx, blockX + blockSize / 2, blockY - 14, blockX + blockSize / 2 + fNet * kF, blockY - 14, '#059669', 'F_net');
      }

      // 参数与读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`m = ${mass} kg   F = ${force} N   μ = ${mu}`, 10, 16);
      ctx.fillText(
        `f_max = μmg = ${friction.toFixed(2)} N   F_net = ${fNet.toFixed(2)} N   a = F_net/m = ${a.toFixed(2)} m/s²`,
        10,
        34,
      );
      ctx.textAlign = 'right';
      if (moving) {
        ctx.fillText(`t = ${t.toFixed(1)} s   v = ${v.toFixed(2)} m/s   s = ${s.toFixed(2)} m`, cssWidth - 10, 16);
      } else {
        ctx.fillStyle = '#b45309';
        ctx.fillText(`F ≤ μmg — stays at rest`, cssWidth - 10, 16);
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="newton-second-law-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Newton's second law: block accelerating on a horizontal surface"
    />
  );
}
