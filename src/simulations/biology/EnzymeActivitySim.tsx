import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { DENATURE_TEMP, ENZYME_PEPSIN, phFactor, rate, temperatureFactor } from '../kernels/enzyme';

const SUBSTRATE_COUNT = 10;

interface Substrate {
  x: number; // 归一化位置（试管内）
  y: number;
  progress: number; // 0 = 完整底物，1 = 完全分解
}

function initSubstrates(): Substrate[] {
  const list: Substrate[] = [];
  for (let i = 0; i < SUBSTRATE_COUNT; i += 1) {
    list.push({ x: 0.15 + Math.random() * 0.7, y: 0.15 + Math.random() * 0.7, progress: Math.random() });
  }
  return list;
}

const ENZYME_NAMES = ['salivary amylase (opt. 37 °C, pH 7)', 'pepsin (opt. 37 °C, pH 2)'];

/**
 * 酶活性仿真：rate–温度与 rate–pH 双曲线（带当前条件标记点）+
 * 试管中底物分解动画，分解速率 ∝ 酶活性。高温变性（不可逆）有明确提示。
 */
export default function EnzymeActivitySim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const substratesRef = useRef<Substrate[]>(initSubstrates());

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
      const ph = Number(paramsRef.current.ph);
      const enzymeType = Math.round(Number(paramsRef.current.enzymeType));
      const currentRate = rate(temperature, ph, enzymeType);
      const denatured = temperature >= DENATURE_TEMP;

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

      // ---------- 左侧：rate–温度、rate–pH 双曲线 ----------
      const padL = 46;
      const plotW = cssWidth * 0.52 - padL - 12;
      const plotTop = 36;
      const plotH = (cssHeight - plotTop - 34) / 2 - 8;

      const drawPlot = (
        idx: number,
        xLabel: string,
        xMax: number,
        valueAt: (x: number) => number,
        currentX: number,
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

        ctx.strokeStyle = '#7c3aed';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x <= xMax; x += xMax / 80) {
          const px = toX(x);
          const py = toY(valueAt(x));
          if (x === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(toX(currentX), toY(valueAt(currentX)), 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#64748b';
        ctx.font = '10px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(xLabel, 4, y0 + 10);
      };

      // 曲线随另一因素当前值缩放（rate = tempFactor × phFactor）
      drawPlot(0, 'rate ~ temp (°C)', 80, (x) => rate(x, ph, enzymeType), temperature);
      drawPlot(1, 'rate ~ pH', 14, (x) => rate(temperature, x, enzymeType), ph);

      // 标题与读数
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(ENZYME_NAMES[enzymeType === ENZYME_PEPSIN ? 1 : 0], padL, 16);
      ctx.font = '12px system-ui, sans-serif';
      ctx.fillStyle = '#334155';
      ctx.fillText(
        `T = ${temperature.toFixed(0)} °C   pH = ${ph.toFixed(1)}   rate = ${currentRate.toFixed(3)}`,
        padL,
        cssHeight - 8,
      );

      // ---------- 右侧：试管底物分解动画 ----------
      const tubeX = cssWidth * 0.62;
      const tubeW = cssWidth * 0.2;
      const tubeTop = 44;
      const tubeH = cssHeight - tubeTop - 46;

      // 试管（圆底）
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(tubeX, tubeTop);
      ctx.lineTo(tubeX, tubeTop + tubeH - tubeW / 2);
      ctx.arc(tubeX + tubeW / 2, tubeTop + tubeH - tubeW / 2, tubeW / 2, Math.PI, 0, true);
      ctx.lineTo(tubeX + tubeW, tubeTop);
      ctx.stroke();

      // 反应液（变性时颜色变浑浊）
      ctx.fillStyle = denatured ? 'rgba(120, 113, 108, 0.25)' : 'rgba(251, 191, 36, 0.2)';
      ctx.fillRect(tubeX + 2, tubeTop + 20, tubeW - 4, tubeH - 24);

      // 底物 → 产物：方块逐渐变小，产物小圆点向两侧漂移
      const innerW = tubeW - 12;
      const innerH = tubeH - 40;
      for (const s of substratesRef.current) {
        s.progress += currentRate * dt * 0.6;
        if (s.progress >= 1) {
          s.progress = 0;
          s.x = 0.15 + Math.random() * 0.7;
          s.y = 0.15 + Math.random() * 0.7;
        }
        const sx = tubeX + 6 + s.x * innerW;
        const sy = tubeTop + 24 + s.y * innerH;
        const remain = 1 - s.progress;

        // 残余底物（淀粉/蛋白质方块）
        if (remain > 0.15) {
          ctx.fillStyle = '#b45309';
          const sz = 7 * remain;
          ctx.fillRect(sx - sz / 2, sy - sz / 2, sz, sz);
        }
        // 产物小分子（蓝色成对小点）
        ctx.fillStyle = `rgba(37, 99, 235, ${(0.3 + s.progress * 0.7).toFixed(2)})`;
        const spread = 3 + s.progress * 10;
        ctx.beginPath();
        ctx.arc(sx - spread, sy, 1.8, 0, Math.PI * 2);
        ctx.arc(sx + spread, sy, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // 标注
      ctx.fillStyle = '#334155';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('substrate → products', tubeX + tubeW / 2, tubeTop + tubeH + 16);

      // 状态提示：高温不可逆变性 / 低温抑制
      ctx.textAlign = 'left';
      if (denatured) {
        ctx.fillStyle = '#b91c1c';
        ctx.font = 'bold 12px system-ui, sans-serif';
        ctx.fillText('Enzyme denatured (irreversible)', cssWidth * 0.55, 20);
      } else if (temperature <= 5) {
        ctx.fillStyle = '#1d4ed8';
        ctx.font = '12px system-ui, sans-serif';
        ctx.fillText('Low temperature: inhibited, not denatured', cssWidth * 0.55, 20);
      } else {
        ctx.fillStyle = '#64748b';
        ctx.font = '12px system-ui, sans-serif';
        ctx.fillText(
          `temp factor = ${temperatureFactor(temperature, enzymeType).toFixed(2)}  pH factor = ${phFactor(ph, enzymeType).toFixed(2)}`,
          cssWidth * 0.55,
          20,
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
      data-testid="enzyme-activity-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Enzyme activity curves and substrate breakdown in a test tube"
    />
  );
}
