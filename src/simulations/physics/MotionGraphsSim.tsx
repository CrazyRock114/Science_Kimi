import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { displacementAt, velocityAt } from '../kernels/kinematics';

const DURATION = 10; // 动画时长（秒，仿真时间）

/**
 * 匀变速直线运动仿真：s-t 与 v-t 图像联动。
 * Canvas 2D + requestAnimationFrame，适配 devicePixelRatio。
 */
export default function MotionGraphsSim({ params }: SimulationProps) {
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
      const { u, a } = paramsRef.current;
      const t = ((now - start) / 1000) % DURATION;

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

      const v = velocityAt(u, a, t);
      const s = displacementAt(u, a, t);

      // 上下两个图：s-t（上）、v-t（下）
      const padL = 44;
      const padR = 12;
      const padT = 26;
      const padB = 22;
      const plotW = cssWidth - padL - padR;
      const plotH = (cssHeight - padT - padB * 2 - 8) / 2;

      // 数值范围（取整个动画周期内的极值，留边距）
      const sValues = [0, 1];
      const vValues = [0, 1, -1];
      for (let tt = 0; tt <= DURATION; tt += 0.5) {
        sValues.push(displacementAt(u, a, tt));
        vValues.push(velocityAt(u, a, tt));
      }
      const sMax = Math.max(...sValues) * 1.1;
      const sMin = Math.min(0, Math.min(...sValues) * 1.1);
      const vMax = Math.max(...vValues) * 1.1;
      const vMin = Math.min(0, Math.min(...vValues) * 1.1);

      const drawPlot = (
        y0: number,
        height: number,
        yLabel: string,
        valueAt: (tt: number) => number,
        min: number,
        max: number,
        color: string,
        current: number,
      ) => {
        const toX = (tt: number) => padL + (tt / DURATION) * plotW;
        const toY = (val: number) => y0 + height - ((val - min) / (max - min)) * height;

        // 坐标轴
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padL, y0);
        ctx.lineTo(padL, y0 + height);
        ctx.lineTo(padL + plotW, y0 + height);
        ctx.stroke();
        // 零线
        if (min < 0) {
          ctx.strokeStyle = '#e2e8f0';
          ctx.beginPath();
          ctx.moveTo(padL, toY(0));
          ctx.lineTo(padL + plotW, toY(0));
          ctx.stroke();
        }
        // 轴标签
        ctx.fillStyle = '#64748b';
        ctx.font = '12px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(yLabel, 4, y0 + 12);
        ctx.textAlign = 'right';
        ctx.fillText('t/s', padL + plotW, y0 + height + 16);

        // 曲线
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let tt = 0; tt <= DURATION; tt += 0.05) {
          const x = toX(tt);
          const yy = toY(valueAt(tt));
          if (tt === 0) ctx.moveTo(x, yy);
          else ctx.lineTo(x, yy);
        }
        ctx.stroke();

        // 当前时刻动点
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(toX(t), toY(current), 5, 0, Math.PI * 2);
        ctx.fill();
      };

      drawPlot(padT, plotH, 's/m', (tt) => displacementAt(u, a, tt), sMin, sMax, '#2563eb', s);
      drawPlot(padT + plotH + padB + 8, plotH, 'v/(m·s⁻¹)', (tt) => velocityAt(u, a, tt), vMin, vMax, '#059669', v);

      // 实时读数
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(
        `t = ${t.toFixed(1)} s   v = ${v.toFixed(1)} m/s   s = ${s.toFixed(1)} m`,
        cssWidth - padR,
        16,
      );

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="motion-graphs-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="s-t and v-t graphs of the motion"
    />
  );
}
