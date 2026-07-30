import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { MODEL_LOGISTIC, doublingTime, populationAt } from '../kernels/population';

const SIM_SECONDS = 12; // 一次完整扫描的真实时长（秒），循环播放
const MAX_DOTS = 220; // 培养皿中最多显示的菌落点数

/** 第 i 个菌落点的确定性位置（单位圆盘内均匀散布） */
function dishPos(i: number): { x: number; y: number } {
  const angle = i * 2.399963; // 黄金角 → 均匀螺旋散布
  const radius = Math.sqrt((i + 0.5) / MAX_DOTS) * 0.92;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

/**
 * 种群数量增长仿真：N–t 曲线逐帧绘制（J 型指数 / S 型逻辑斯谛），
 * K 值虚线（logistic），培养皿菌落点随曲线增长，读数面板含倍增时间。
 */
export default function PopulationGrowthSim({ params }: SimulationProps) {
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
      const model = Math.round(Number(paramsRef.current.model));
      const r = Number(paramsRef.current.r);
      const k = Number(paramsRef.current.k);
      const n0 = Number(paramsRef.current.n0);

      // 仿真时间范围：指数型画到 N 触及 K；S 型画到 N 达 0.99K
      let tEnd: number;
      if (model === MODEL_LOGISTIC) {
        tEnd = Math.min(400, Math.max(10, Math.log((99 * (k - n0)) / n0) / r));
      } else {
        tEnd = Math.max(5, Math.log(k / n0) / r);
      }
      const yMax = k * 1.08;
      const t = (((now - start) / 1000) % SIM_SECONDS) / SIM_SECONDS * tEnd;
      const nNow = populationAt(t, model, r, k, n0);

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

      // ---------- 左侧：N–t 曲线 ----------
      const padL = 52;
      const plotTop = 40;
      const plotW = cssWidth * 0.56 - padL - 10;
      const plotH = cssHeight - plotTop - 34;
      const toX = (tt: number) => padL + (tt / tEnd) * plotW;
      const toY = (n: number) => plotTop + plotH - (Math.min(n, yMax) / yMax) * plotH;

      // 坐标轴
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, plotTop);
      ctx.lineTo(padL, plotTop + plotH);
      ctx.lineTo(padL + plotW, plotTop + plotH);
      ctx.stroke();
      ctx.fillStyle = '#64748b';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('N', padL - 30, plotTop + 10);
      ctx.textAlign = 'right';
      ctx.fillText('t', padL + plotW, plotTop + plotH + 16);

      // K 虚线（logistic 环境容纳量）
      if (model === MODEL_LOGISTIC) {
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 5]);
        ctx.beginPath();
        ctx.moveTo(padL, toY(k));
        ctx.lineTo(padL + plotW, toY(k));
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#dc2626';
        ctx.textAlign = 'left';
        ctx.fillText(`K = ${k.toFixed(0)}`, padL + 6, toY(k) - 6);
      }

      // 完整曲线（淡色底）+ 已流逝部分（粗线）
      const curveColor = model === MODEL_LOGISTIC ? '#059669' : '#2563eb';
      ctx.strokeStyle = model === MODEL_LOGISTIC ? '#a7f3d0' : '#bfdbfe';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let tt = 0; tt <= tEnd; tt += tEnd / 200) {
        const px = toX(tt);
        const py = toY(populationAt(tt, model, r, k, n0));
        if (tt === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.strokeStyle = curveColor;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let tt = 0; tt <= t; tt += tEnd / 200) {
        const px = toX(tt);
        const py = toY(populationAt(tt, model, r, k, n0));
        if (tt === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 当前点
      ctx.fillStyle = curveColor;
      ctx.beginPath();
      ctx.arc(toX(t), toY(nNow), 5, 0, Math.PI * 2);
      ctx.fill();

      // 读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(model === MODEL_LOGISTIC ? 'Logistic growth (S curve)' : 'Exponential growth (J curve)', padL, 18);
      ctx.font = '12px system-ui, sans-serif';
      ctx.fillStyle = '#334155';
      ctx.fillText(`t = ${t.toFixed(1)}   N = ${nNow.toFixed(0)}`, padL, cssHeight - 22);
      ctx.fillText(`r = ${r.toFixed(2)}   N₀ = ${n0.toFixed(0)}   doubling time = ${doublingTime(r).toFixed(1)}`, padL, cssHeight - 6);

      // ---------- 右侧：培养皿菌落 ----------
      const dishCX = cssWidth * 0.56 + (cssWidth * 0.44) / 2;
      const dishCY = (cssHeight - 24) / 2 + 8;
      const dishR = Math.min(cssWidth * 0.44, cssHeight - 60) / 2 - 8;

      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(dishCX, dishCY, dishR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = '#fef3c7';
      ctx.beginPath();
      ctx.arc(dishCX, dishCY, dishR - 2, 0, Math.PI * 2);
      ctx.fill();

      // 菌落点数 ∝ N（相对 K 缩放，指数型超过 K 时封顶）
      const dotCount = Math.min(MAX_DOTS, Math.round((nNow / k) * MAX_DOTS));
      ctx.fillStyle = '#b45309';
      for (let i = 0; i < dotCount; i += 1) {
        const p = dishPos(i);
        ctx.beginPath();
        ctx.arc(dishCX + p.x * dishR, dishCY + p.y * dishR, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#334155';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`colonies in dish ≈ ${nNow.toFixed(0)}`, dishCX, cssHeight - 8);
      if (model !== MODEL_LOGISTIC && nNow >= k) {
        ctx.fillStyle = '#b91c1c';
        ctx.fillText('N exceeds K: no limit in J curve', dishCX, 16);
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="population-growth-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Population growth curve and colony dots in a petri dish"
    />
  );
}
