import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { hydrogenIonConcentration, universalIndicatorColor } from '../kernels/ph';

/**
 * pH 指示剂仿真：烧杯中溶液颜色随 pH 变化（通用指示剂近似色），
 * 并显示氢离子浓度。Canvas 2D + requestAnimationFrame（轻微液面波动）。
 */
export default function PhIndicatorSim({ params }: SimulationProps) {
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
      const pH = paramsRef.current.pH;
      const elapsed = (now - start) / 1000;

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

      const color = universalIndicatorColor(pH);

      // 烧杯
      const beakerW = Math.min(220, cssWidth * 0.45);
      const beakerH = cssHeight * 0.72;
      const bx = (cssWidth - beakerW) / 2;
      const by = cssHeight * 0.16;
      const wall = 8;

      // 液体（液面带轻微正弦波动）
      const liquidTop = by + beakerH * 0.18;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(bx + wall, by + beakerH - wall);
      ctx.lineTo(bx + wall, liquidTop);
      const waveSegments = 24;
      for (let i = 0; i <= waveSegments; i++) {
        const x = bx + wall + ((beakerW - wall * 2) * i) / waveSegments;
        const y = liquidTop + Math.sin(elapsed * 2 + (i / waveSegments) * Math.PI * 2) * 3;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(bx + beakerW - wall, by + beakerH - wall);
      ctx.closePath();
      ctx.fill();

      // 烧杯壁
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx, by + beakerH);
      ctx.lineTo(bx + beakerW, by + beakerH);
      ctx.lineTo(bx + beakerW, by);
      ctx.stroke();

      // pH 色标
      const scaleY = by + beakerH + 18;
      const scaleH = 12;
      const segments = 70;
      const segW = cssWidth / segments;
      for (let i = 0; i < segments; i++) {
        ctx.fillStyle = universalIndicatorColor((i / (segments - 1)) * 14);
        ctx.fillRect(i * segW, scaleY, segW + 0.5, scaleH);
      }
      // 当前位置指示
      const markerX = (pH / 14) * cssWidth;
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.moveTo(markerX, scaleY - 6);
      ctx.lineTo(markerX - 5, scaleY - 14);
      ctx.lineTo(markerX + 5, scaleY - 14);
      ctx.closePath();
      ctx.fill();
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillStyle = '#64748b';
      ctx.fillText('0', 0, scaleY + scaleH + 14);
      ctx.textAlign = 'center';
      ctx.fillText('7', cssWidth / 2, scaleY + scaleH + 14);
      ctx.textAlign = 'right';
      ctx.fillText('14', cssWidth, scaleY + scaleH + 14);

      // 读数
      const conc = hydrogenIonConcentration(pH);
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`pH = ${pH.toFixed(1)}`, cssWidth / 2, 18);
      ctx.fillText(`[H⁺] = ${conc.toExponential(2)} mol/L`, cssWidth / 2, 36);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="ph-indicator-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Solution colour under universal indicator at the given pH"
    />
  );
}
