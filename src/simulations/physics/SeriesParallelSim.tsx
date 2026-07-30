import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import {
  branchCurrents,
  branchVoltages,
  equivalentResistance,
} from '../kernels/circuits';

/** 沿线段 (ax,ay)→(bx,by) 绘制一列等间距电流粒子 */
function drawParticles(
  ctx: CanvasRenderingContext2D,
  ax: number,
  ay: number,
  bx: number,
  by: number,
  offset: number,
  spacing: number,
) {
  const len = Math.hypot(bx - ax, by - ay);
  if (len <= 0) return;
  const n = Math.max(2, Math.floor(len / spacing));
  ctx.fillStyle = '#f59e0b';
  for (let k = 0; k < n; k += 1) {
    const d = (offset + k * (len / n)) % len;
    const x = ax + ((bx - ax) * d) / len;
    const y = ay + ((by - ay) * d) / len;
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** 电阻方盒（horizontal 为横向）并标注 */
function drawResistor(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  horizontal: boolean,
  label: string,
) {
  const w = horizontal ? 36 : 14;
  const h = horizontal ? 14 : 36;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(cx - w / 2, cy - h / 2, w, h);
  ctx.strokeStyle = '#2563eb';
  ctx.lineWidth = 2;
  ctx.strokeRect(cx - w / 2, cy - h / 2, w, h);
  ctx.fillStyle = '#2563eb';
  ctx.font = '12px system-ui, sans-serif';
  ctx.textAlign = horizontal ? 'center' : 'left';
  ctx.fillText(label, horizontal ? cx : cx + 12, horizontal ? cy - 10 : cy + 4);
}

/**
 * 串并联电路仿真：circuitType 0 = 串联，1 = 并联。
 * 显示各支路电流/电压分配与等效电阻，粒子速度正比于所在支路电流。
 */
export default function SeriesParallelSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const offsetsRef = useRef({ main: 0, b1: 0, b2: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let last = performance.now();

    const speedOf = (i: number) => Math.max(24, Math.min(260, 30 + 150 * i)); // px/s

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const U = Number(paramsRef.current.voltage);
      const R1 = Number(paramsRef.current.r1);
      const R2 = Number(paramsRef.current.r2);
      const type = Number(paramsRef.current.circuitType);
      const rEq = equivalentResistance(R1, R2, type);
      const { i1, i2, iTotal } = branchCurrents(U, R1, R2, type);
      const { v1, v2 } = branchVoltages(U, R1, R2, type);

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

      const offsets = offsetsRef.current;
      offsets.main += speedOf(iTotal) * dt;
      offsets.b1 += speedOf(i1) * dt;
      offsets.b2 += speedOf(i2) * dt;

      ctx.font = '13px system-ui, sans-serif';

      if (type === 0) {
        // ---------- 串联 ----------
        const x0 = 90;
        const x1 = cssWidth - 90;
        const y0 = 70;
        const y1 = cssHeight - 90;
        const midX = (x0 + x1) / 2;
        const midY = (y0 + y1) / 2;

        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);

        // 电池（左边中点）
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x0 - 2, midY - 13, 4, 26);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x0 - 12, midY - 7);
        ctx.lineTo(x0 + 12, midY - 7);
        ctx.stroke();
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(x0 - 5, midY + 7);
        ctx.lineTo(x0 + 5, midY + 7);
        ctx.stroke();
        ctx.fillStyle = '#0f172a';
        ctx.textAlign = 'right';
        ctx.fillText(`U = ${U.toFixed(1)} V`, x0 - 24, midY + 4);

        drawResistor(ctx, midX, y0, true, `R₁ = ${R1.toFixed(0)} Ω`);
        drawResistor(ctx, x1, midY, false, `R₂ = ${R2.toFixed(0)} Ω`);

        // 粒子（顺时针：上边 → 右边 → 下边 → 左边）
        drawParticles(ctx, x0, y0, x1, y0, offsets.main, 46);
        drawParticles(ctx, x1, y0, x1, y1, offsets.main, 46);
        drawParticles(ctx, x1, y1, x0, y1, offsets.main, 46);
        drawParticles(ctx, x0, y1, x0, y0, offsets.main, 46);

        ctx.fillStyle = '#0f172a';
        ctx.textAlign = 'center';
        ctx.fillText(
          `series   R_eq = R₁+R₂ = ${rEq.toFixed(0)} Ω`,
          midX,
          y1 + 30,
        );
        ctx.fillText(
          `I = ${iTotal.toFixed(2)} A    U₁ = ${v1.toFixed(1)} V    U₂ = ${v2.toFixed(1)} V`,
          midX,
          y1 + 48,
        );
      } else {
        // ---------- 并联 ----------
        const xL = 90;
        const xR = cssWidth - 90;
        const yB1 = 80;
        const yB2 = 140;
        const yBot = cssHeight - 90;
        const midX = (xL + xR) / 2;
        const midY = (yB1 + yBot) / 2;

        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        // 左右汇流排
        ctx.moveTo(xL, yB1);
        ctx.lineTo(xL, yBot);
        ctx.moveTo(xR, yB1);
        ctx.lineTo(xR, yBot);
        // 两条支路
        ctx.moveTo(xL, yB1);
        ctx.lineTo(xR, yB1);
        ctx.moveTo(xL, yB2);
        ctx.lineTo(xR, yB2);
        // 底部干路
        ctx.moveTo(xL, yBot);
        ctx.lineTo(xR, yBot);
        ctx.stroke();

        // 电池（底部干路中点，正极在左）
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(midX - 13, yBot - 2, 26, 4);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(midX - 7, yBot - 12);
        ctx.lineTo(midX - 7, yBot + 12);
        ctx.stroke();
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(midX + 7, yBot - 5);
        ctx.lineTo(midX + 7, yBot + 5);
        ctx.stroke();
        ctx.fillStyle = '#0f172a';
        ctx.textAlign = 'center';
        ctx.fillText(`U = ${U.toFixed(1)} V`, midX, yBot - 18);

        drawResistor(ctx, midX, yB1, true, `R₁ = ${R1.toFixed(0)} Ω`);
        drawResistor(ctx, midX, yB2, true, `R₂ = ${R2.toFixed(0)} Ω`);

        // 干路粒子（底部向左、左排向上、右排向下，速度 ∝ 总电流）
        drawParticles(ctx, midX, yBot, xL, yBot, offsets.main, 46);
        drawParticles(ctx, xL, yBot, xL, yB1, offsets.main, 46);
        drawParticles(ctx, xR, yB1, xR, yBot, offsets.main, 46);
        drawParticles(ctx, xR, yBot, midX, yBot, offsets.main, 46);
        // 支路粒子（速度 ∝ 支路电流）
        drawParticles(ctx, xL, yB1, xR, yB1, offsets.b1, 46);
        drawParticles(ctx, xL, yB2, xR, yB2, offsets.b2, 46);

        ctx.fillStyle = '#0f172a';
        ctx.textAlign = 'center';
        ctx.fillText(
          `parallel   R_eq = ${rEq.toFixed(1)} Ω`,
          midX,
          midY + 4,
        );
        ctx.fillText(
          `I₁ = ${i1.toFixed(2)} A    I₂ = ${i2.toFixed(2)} A    I = ${iTotal.toFixed(2)} A    U₁ = U₂ = ${v1.toFixed(1)} V`,
          midX,
          yBot + 32,
        );
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="series-parallel-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Series and parallel circuit"
    />
  );
}
