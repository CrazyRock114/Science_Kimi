import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import {
  co2Saturation,
  lightSaturation,
  limitingFactor,
  rate,
  temperatureFactor,
} from '../kernels/photosynthesis';

const MAX_BUBBLES_PER_SEC = 14; // 满速率时的气泡生成速率

interface Bubble {
  x: number; // 相对水草的偏移
  y: number; // 0 = 叶片处，1 = 水面
  r: number;
  speed: number;
}

const LIMITING_NAMES = ['light intensity', 'CO₂ concentration', 'co-limiting (light = CO₂)'];

/**
 * 光合作用速率与限制因素仿真：rate–光照 / rate–CO₂ / rate–温度三条曲线 +
 * 伊乐藻光照冒气泡动画，气泡速率 ∝ 当前光合速率。
 */
export default function PhotosynthesisRateSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const bubblesRef = useRef<Bubble[]>([]);
  const spawnAccRef = useRef(0);

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

      const light = Number(paramsRef.current.lightIntensity);
      const co2 = Number(paramsRef.current.co2Level);
      const temp = Number(paramsRef.current.temperature);
      const currentRate = rate(light, co2, temp);
      const limiting = limitingFactor(light, co2);

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

      // ---------- 左侧：三条速率曲线 ----------
      const plotW = cssWidth * 0.52 - 56;
      const plotTop = 34;
      const plotH = (cssHeight - plotTop - 30) / 3 - 8;
      const padL = 46;

      const drawPlot = (
        idx: number,
        xLabel: string,
        xMax: number,
        valueAt: (x: number) => number,
        currentX: number,
        highlight: boolean,
      ) => {
        const y0 = plotTop + idx * (plotH + 8);
        const toX = (x: number) => padL + (x / xMax) * plotW;
        const toY = (v: number) => y0 + plotH - v * plotH;

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padL, y0);
        ctx.lineTo(padL, y0 + plotH);
        ctx.lineTo(padL + plotW, y0 + plotH);
        ctx.stroke();

        ctx.strokeStyle = highlight ? '#059669' : '#86efac';
        ctx.lineWidth = highlight ? 2.5 : 1.5;
        ctx.beginPath();
        for (let x = 0; x <= xMax; x += xMax / 60) {
          const px = toX(x);
          const py = toY(valueAt(x));
          if (x === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // 当前条件标记点
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(toX(currentX), toY(valueAt(currentX)), 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#64748b';
        ctx.font = '10px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(xLabel, 4, y0 + 10);
      };

      // 曲线 1：rate–光照（其余因素取当前值）
      drawPlot(0, 'rate ~ light', 100, (x) => rate(x, co2, temp), light, limiting === 0);
      // 曲线 2：rate–CO₂
      drawPlot(1, 'rate ~ CO₂', 100, (x) => rate(light, x, temp), co2, limiting === 1);
      // 曲线 3：rate–温度
      drawPlot(2, 'rate ~ temp', 45, (x) => rate(light, co2, x), temp, false);

      // 读数
      ctx.fillStyle = '#0f172a';
      ctx.font = '12px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`rate = ${currentRate.toFixed(3)} (rel.)`, padL, 16);
      ctx.fillStyle = '#b45309';
      ctx.textAlign = 'right';
      ctx.fillText(`limiting: ${LIMITING_NAMES[limiting]}`, cssWidth * 0.52 - 8, 16);

      // ---------- 右侧：烧杯中的伊乐藻与气泡 ----------
      const beakX = cssWidth * 0.58;
      const beakW = cssWidth - beakX - 24;
      const beakTop = 40;
      const beakH = cssHeight - beakTop - 30;
      const waterTop = beakTop + 22;

      // 光照强度 → 背景光晕
      const lightAlpha = (light / 100) * 0.25;
      ctx.fillStyle = `rgba(250, 204, 21, ${lightAlpha.toFixed(3)})`;
      ctx.fillRect(beakX - 8, 0, beakW + 16, waterTop);

      // 烧杯
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(beakX, beakTop);
      ctx.lineTo(beakX, beakTop + beakH);
      ctx.lineTo(beakX + beakW, beakTop + beakH);
      ctx.lineTo(beakX + beakW, beakTop);
      ctx.stroke();
      // 水面
      ctx.fillStyle = 'rgba(147, 197, 253, 0.35)';
      ctx.fillRect(beakX + 1.5, waterTop, beakW - 3, beakH - 22);
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(beakX + 2, waterTop);
      ctx.lineTo(beakX + beakW - 2, waterTop);
      ctx.stroke();

      // 伊乐藻（茎 + 叶轮生）
      const plantX = beakX + beakW / 2;
      const plantBase = beakTop + beakH - 6;
      const plantH = beakH - 48;
      ctx.strokeStyle = '#15803d';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(plantX, plantBase);
      ctx.lineTo(plantX, plantBase - plantH);
      ctx.stroke();
      ctx.lineWidth = 1.5;
      for (let k = 0; k < 7; k += 1) {
        const ly = plantBase - (k + 0.5) * (plantH / 7);
        for (const s of [-1, 1]) {
          ctx.beginPath();
          ctx.moveTo(plantX, ly);
          ctx.quadraticCurveTo(plantX + s * 14, ly - 4, plantX + s * 22, ly - 10);
          ctx.stroke();
        }
      }

      // 气泡：生成速率 ∝ rate，自叶片上升
      spawnAccRef.current += currentRate * MAX_BUBBLES_PER_SEC * dt;
      while (spawnAccRef.current >= 1) {
        spawnAccRef.current -= 1;
        bubblesRef.current.push({
          x: (Math.random() - 0.5) * 44,
          y: 0,
          r: 1.5 + Math.random() * 2,
          speed: 0.25 + Math.random() * 0.2,
        });
      }
      const bubbles = bubblesRef.current;
      for (let i = bubbles.length - 1; i >= 0; i -= 1) {
        const b = bubbles[i];
        b.y += b.speed * dt * (0.5 + currentRate);
        if (b.y >= 1) {
          bubbles.splice(i, 1);
          continue;
        }
        const by = plantBase - plantH * 0.5 - b.y * (plantBase - plantH * 0.5 - waterTop - 4);
        const bx = plantX + b.x + Math.sin(b.y * 12) * 3;
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.8)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, b.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 标注
      ctx.fillStyle = '#334155';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Elodea (pondweed)', plantX, beakTop + beakH + 18);
      ctx.textAlign = 'left';
      ctx.fillText(`O₂ bubbles/s ≈ ${(currentRate * MAX_BUBBLES_PER_SEC).toFixed(1)}`, beakX, 30);
      ctx.fillStyle = '#64748b';
      ctx.fillText(`light ${light.toFixed(0)}%  CO₂ ${co2.toFixed(0)}  T ${temp.toFixed(0)} °C`, beakX, 14);

      // 温度系数提示（钟形曲线位置）
      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'right';
      ctx.fillText(`temp factor = ${temperatureFactor(temp).toFixed(2)}`, cssWidth - 10, cssHeight - 8);
      ctx.fillText(
        `light sat = ${lightSaturation(light).toFixed(2)}  CO₂ sat = ${co2Saturation(co2).toFixed(2)}`,
        cssWidth - 10,
        cssHeight - 22,
      );

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="photosynthesis-rate-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Photosynthesis rate curves and bubbling pondweed"
    />
  );
}
