import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { SimulationProps } from '../registry';
import { current, power } from '../kernels/circuits';

const PARTICLE_COUNT = 18;

/** 矩形回路路径（电池左、电阻右、电流表上），返回周长与取点函数 */
function makeLoop(x0: number, y0: number, x1: number, y1: number) {
  const w = x1 - x0;
  const h = y1 - y0;
  const perimeter = 2 * (w + h);
  // 顺时针：上边走 +x，右边走 +y，下边走 −x，左边走 −y
  const pointAt = (d: number): { x: number; y: number } => {
    let s = ((d % perimeter) + perimeter) % perimeter;
    if (s < w) return { x: x0 + s, y: y0 };
    s -= w;
    if (s < h) return { x: x1, y: y0 + s };
    s -= h;
    if (s < w) return { x: x1 - s, y: y1 };
    s -= w;
    return { x: x0, y: y1 - s };
  };
  return { perimeter, pointAt };
}

/**
 * 欧姆定律仿真：电池 + 电阻 + 电流表回路，电流粒子速度随 I 变化。
 */
export default function OhmCircuitSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  // 画面内文字标注走 i18n：rAF 循环每帧经 ref 取最新语言
  const { t } = useTranslation();
  const tRef = useRef(t);
  tRef.current = t;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let offset = 0; // 粒子沿回路的累计位移
    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const U = Number(paramsRef.current.voltage);
      const R = Number(paramsRef.current.resistance);
      const I = current(U, R);
      const P = power(U, R);

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

      // 回路几何
      const x0 = 80;
      const x1 = cssWidth - 80;
      const y0 = 80;
      const y1 = cssHeight - 80;
      const midX = (x0 + x1) / 2;
      const midY = (y0 + y1) / 2;
      const { perimeter, pointAt } = makeLoop(x0, y0, x1, y1);

      // 导线
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);

      // 电池（左边中点）：长线为正极（上）、短粗线为负极（下）
      const batGap = 26;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x0 - 2, midY - batGap / 2, 4, batGap); // 遮断导线
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2;
      ctx.beginPath(); // 正极长板
      ctx.moveTo(x0 - 12, midY - 7);
      ctx.lineTo(x0 + 12, midY - 7);
      ctx.stroke();
      ctx.lineWidth = 5;
      ctx.beginPath(); // 负极短板
      ctx.moveTo(x0 - 5, midY + 7);
      ctx.lineTo(x0 + 5, midY + 7);
      ctx.stroke();
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('+', x0 - 20, midY - 3);
      ctx.fillText('−', x0 - 20, midY + 11);
      // 电压标注画在回路内侧，避免被画布左边缘裁切
      ctx.textAlign = 'left';
      ctx.fillText(`U = ${U.toFixed(1)} V`, x0 + 26, midY + 4);

      // 电阻（右边中点，方盒画法）
      const rw = 14;
      const rh = 34;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x1 - rw / 2, midY - rh / 2, rw, rh);
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2;
      ctx.strokeRect(x1 - rw / 2, midY - rh / 2, rw, rh);
      ctx.fillStyle = '#2563eb';
      ctx.textAlign = 'left';
      ctx.fillText(`R = ${R.toFixed(0)} Ω`, x1 + rw / 2 + 8, midY + 4);

      // 电流表（上边中点，圆圈 A）
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(midX, y0, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#059669';
      ctx.font = 'bold 13px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('A', midX, y0 + 4.5);

      // 电流粒子（速度正比于 I，钳制避免过快/过慢）
      const speed = Math.max(20, Math.min(240, 60 + 120 * I)); // px/s
      offset += speed * dt;
      ctx.fillStyle = '#f59e0b';
      for (let k = 0; k < PARTICLE_COUNT; k += 1) {
        const p = pointAt(offset + (k / PARTICLE_COUNT) * perimeter);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`I = U/R = ${I.toFixed(2)} A`, midX, y1 + 32);
      ctx.fillText(`P = UI = ${P.toFixed(2)} W`, midX, y1 + 50);
      ctx.fillStyle = '#64748b';
      ctx.fillText(tRef.current('sim.ohm.conventionalCurrent'), midX, y0 - 22);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="ohm-circuit-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label={t('sim.ohm.ariaLabel')}
    />
  );
}
