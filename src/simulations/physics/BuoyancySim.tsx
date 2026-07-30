import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import {
  buoyantForce,
  floatState,
  objectMass,
  submergedFraction,
  weight,
} from '../kernels/buoyancy';

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
    ctx.fillText(label, x2 + 6, y2 + 4);
  }
}

/**
 * 浮力仿真：水槽中物体按密度关系漂浮 / 悬浮 / 沉底，
 * 重力与浮力箭头长度成比例，显示 F_b = ρgV排 与浮沉结论。
 */
export default function BuoyancySim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const posRef = useRef<number | null>(null); // 当前物块中心 y（动画插值）

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;

    const draw = (now: number) => {
      const objectDensity = Number(paramsRef.current.objectDensity ?? 500);
      const liquidDensity = Number(paramsRef.current.liquidDensity ?? 1000);
      const volume = Number(paramsRef.current.volume ?? 500);

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

      const state = floatState(objectDensity, liquidDensity);
      const frac = submergedFraction(objectDensity, liquidDensity);
      const m = objectMass(objectDensity, volume);
      const W = weight(objectDensity, volume);
      const Fb = buoyantForce(objectDensity, liquidDensity, volume);

      // 水槽几何
      const tankL = 70;
      const tankR = cssWidth - 70;
      const waterTop = 78;
      const tankBottom = cssHeight - 26;
      const cx = (tankL + tankR) / 2;

      // 物块边长随体积立方根缩放
      const side = Math.min(110, Math.max(26, Math.cbrt(volume) * 9));

      // 目标位置（物块中心 y）
      let targetY: number;
      if (state === 'float') {
        // 漂浮：底部浸入 frac·side
        targetY = waterTop + frac * side - side / 2;
      } else if (state === 'suspend') {
        targetY = (waterTop + tankBottom) / 2;
      } else {
        targetY = tankBottom - side / 2;
      }
      // 平滑过渡 + 漂浮轻微起伏
      if (posRef.current === null) posRef.current = targetY;
      posRef.current += (targetY - posRef.current) * 0.07;
      const bob = state === 'float' ? Math.sin(now / 450) * 1.5 : 0;
      const cy = posRef.current + bob;

      // 槽体
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(tankL, waterTop - 20);
      ctx.lineTo(tankL, tankBottom);
      ctx.lineTo(tankR, tankBottom);
      ctx.lineTo(tankR, waterTop - 20);
      ctx.stroke();
      // 液体
      ctx.fillStyle = 'rgba(37, 99, 235, 0.12)';
      ctx.fillRect(tankL + 1, waterTop, tankR - tankL - 2, tankBottom - waterTop - 1);
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(tankL + 1, waterTop);
      ctx.lineTo(tankR - 1, waterTop);
      ctx.stroke();

      // 物块（液面下部分用深色区分 V排）
      const bx = cx - side / 2;
      const by = cy - side / 2;
      const subDepth = Math.max(0, Math.min(side, by + side - waterTop));
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(bx, by, side, side);
      if (subDepth > 0) {
        ctx.fillStyle = '#d97706';
        ctx.fillRect(bx, by + side - subDepth, side, subDepth);
      }
      ctx.strokeStyle = '#92400e';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(bx, by, side, side);

      // 重力（红，向下）与浮力（绿，向上）箭头，长度成比例
      const kF = 62 / Math.max(W, Fb, 1e-9);
      drawArrow(ctx, bx - 8, cy, bx - 8, cy + W * kF, '#dc2626', 'W = mg');
      drawArrow(ctx, bx + side + 8, cy, bx + side + 8, cy - Fb * kF, '#059669', 'F_b');

      // 读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`ρ_obj = ${objectDensity} kg/m³   ρ_liq = ${liquidDensity} kg/m³   V = ${volume} cm³`, 10, 16);
      ctx.fillText(
        `m = ρV = ${m.toFixed(3)} kg   W = mg = ${W.toFixed(2)} N   F_b = ρ_liq·g·V_sub = ${Fb.toFixed(2)} N   V_sub/V = ${(frac * 100).toFixed(0)}%`,
        10,
        34,
      );
      ctx.textAlign = 'right';
      ctx.fillStyle = state === 'float' ? '#059669' : state === 'sink' ? '#dc2626' : '#2563eb';
      const verdict =
        state === 'float'
          ? 'ρ_obj < ρ_liq → floats'
          : state === 'sink'
            ? 'ρ_obj > ρ_liq → sinks'
            : 'ρ_obj = ρ_liq → suspended';
      ctx.fillText(verdict, cssWidth - 10, 16);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="buoyancy-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Buoyancy: object floating, suspended or sinking in a liquid tank"
    />
  );
}
