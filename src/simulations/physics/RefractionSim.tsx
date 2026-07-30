import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import {
  criticalAngle,
  isTotalInternalReflection,
  refractionAngle,
} from '../kernels/refraction';

const DEG = Math.PI / 180;

/** 画角度弧线并标注 */
function drawAngleArc(
  ctx: CanvasRenderingContext2D,
  o: { x: number; y: number },
  radius: number,
  fromRad: number,
  toRad: number,
  label: string,
  labelDy: number,
) {
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(o.x, o.y, radius, fromRad, toRad);
  ctx.stroke();
  const mid = (fromRad + toRad) / 2;
  ctx.fillStyle = '#64748b';
  ctx.font = '12px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(
    label,
    o.x + Math.cos(mid) * (radius + 14),
    o.y + Math.sin(mid) * (radius + 14) + labelDy,
  );
}

/**
 * 光的折射仿真：斯涅尔定律 + 全反射。
 * n1 上半介质，n2 下半介质，入射角自法线量起。光脉冲沿光线传播。
 */
export default function RefractionSim({ params }: SimulationProps) {
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
      const n1 = Number(paramsRef.current.n1);
      const n2 = Number(paramsRef.current.n2);
      const theta1 = Number(paramsRef.current.incidentAngle);
      const tir = isTotalInternalReflection(n1, n2, theta1);
      const theta2 = refractionAngle(n1, n2, theta1); // TIR 时为 NaN
      const critical = criticalAngle(n1, n2);

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

      const o = { x: cssWidth / 2, y: cssHeight / 2 };
      const rayLen = Math.min(cssWidth, cssHeight) * 0.42;

      // 两种介质背景
      ctx.fillStyle = 'rgba(37, 99, 235, 0.04)';
      ctx.fillRect(0, 0, cssWidth, o.y);
      ctx.fillStyle = 'rgba(5, 150, 105, 0.07)';
      ctx.fillRect(0, o.y, cssWidth, cssHeight - o.y);

      // 界面与法线
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, o.y);
      ctx.lineTo(cssWidth, o.y);
      ctx.stroke();
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(o.x, 8);
      ctx.lineTo(o.x, cssHeight - 8);
      ctx.stroke();
      ctx.setLineDash([]);

      // 介质标签
      ctx.fillStyle = '#64748b';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`n₁ = ${n1.toFixed(2)}`, 12, 22);
      ctx.fillText(`n₂ = ${n2.toFixed(2)}`, 12, cssHeight - 12);
      ctx.textAlign = 'right';
      ctx.fillText('normal', o.x - 8, 20);

      const s1 = Math.sin(theta1 * DEG);
      const c1 = Math.cos(theta1 * DEG);
      const inStart = { x: o.x - rayLen * s1, y: o.y - rayLen * c1 };
      const outEnd = tir
        ? { x: o.x + rayLen * s1, y: o.y - rayLen * c1 } // 反射光线
        : {
            x: o.x + rayLen * Math.sin(theta2 * DEG),
            y: o.y + rayLen * Math.cos(theta2 * DEG),
          };

      // 入射光线
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(inStart.x, inStart.y);
      ctx.lineTo(o.x, o.y);
      ctx.stroke();

      // 折射 / 全反射光线
      ctx.strokeStyle = tir ? '#f59e0b' : '#059669';
      ctx.beginPath();
      ctx.moveTo(o.x, o.y);
      ctx.lineTo(outEnd.x, outEnd.y);
      ctx.stroke();

      // 光脉冲动画：入射段 → 出射段循环
      const period = 2.4; // 秒
      const phase = (((now - start) / 1000) % period) / period;
      const pulse = phase < 0.5
        ? {
            x: inStart.x + (o.x - inStart.x) * (phase * 2),
            y: inStart.y + (o.y - inStart.y) * (phase * 2),
          }
        : {
            x: o.x + (outEnd.x - o.x) * (phase * 2 - 1),
            y: o.y + (outEnd.y - o.y) * (phase * 2 - 1),
          };
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(pulse.x, pulse.y, 4, 0, Math.PI * 2);
      ctx.fill();

      // 角度弧（Canvas 弧度：上方法线为 -π/2，下方为 π/2，左半平面方向为 π）
      drawAngleArc(ctx, o, 34, -Math.PI / 2 - theta1 * DEG, -Math.PI / 2, `θ₁ = ${theta1.toFixed(0)}°`, 0);
      if (!tir) {
        drawAngleArc(ctx, o, 34, Math.PI / 2 - theta2 * DEG, Math.PI / 2, `θ₂ = ${theta2.toFixed(1)}°`, 0);
      }

      // 读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'right';
      const eq = tir
        ? `θ₁ > θc = ${critical.toFixed(1)}° : total internal reflection`
        : `n₁sinθ₁ = n₂sinθ₂   θ₂ = ${theta2.toFixed(1)}°`;
      ctx.fillText(eq, cssWidth - 12, cssHeight - 12);
      if (!Number.isNaN(critical)) {
        ctx.fillStyle = '#64748b';
        ctx.fillText(`critical angle θc = ${critical.toFixed(1)}°`, cssWidth - 12, cssHeight - 28);
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="refraction-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Refraction of light at a media interface"
    />
  );
}
