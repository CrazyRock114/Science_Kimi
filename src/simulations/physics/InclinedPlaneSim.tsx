import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import {
  acceleration,
  components,
  maxFriction,
  parallelComponent,
  willSlide,
} from '../kernels/incline';

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
    ctx.fillText(label, x2 + 5, y2 + 4);
  }
}

const SLOPE_METERS = 10; // 斜面物理长度（m）

/**
 * 斜面与摩擦仿真：重力沿/垂直斜面分解箭头，
 * 比较 mg·sinθ 与 μmg·cosθ 判断静止或下滑，下滑时做加速动画。
 */
export default function InclinedPlaneSim({ params }: SimulationProps) {
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
      const angleDeg = Number(paramsRef.current.angle ?? 30);
      const mu = Number(paramsRef.current.mu ?? 0.2);
      const mass = Number(paramsRef.current.mass ?? 2);

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

      const rad = (angleDeg * Math.PI) / 180;
      const comp = components(mass, angleDeg);
      const frictionMax = maxFriction(mass, angleDeg, mu);
      const sliding = willSlide(mass, angleDeg, mu);
      const a = acceleration(mass, angleDeg, mu);

      // 斜面几何：底角在左下，斜边向右上
      const baseX = 60;
      const groundY = cssHeight - 34;
      const slopeLen = Math.min(
        (cssWidth - baseX - 150) / Math.cos(rad),
        (groundY - 60) / Math.sin(rad),
      );
      const topX = baseX + slopeLen * Math.cos(rad);
      const topY = groundY - slopeLen * Math.sin(rad);
      const pxPerM = slopeLen / SLOPE_METERS;

      // 斜面三角形
      ctx.fillStyle = '#e2e8f0';
      ctx.beginPath();
      ctx.moveTo(baseX, groundY);
      ctx.lineTo(topX, topY);
      ctx.lineTo(topX, groundY);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(baseX, groundY);
      ctx.lineTo(topX, topY);
      ctx.lineTo(topX, groundY);
      ctx.stroke();
      // 地面延长线
      ctx.beginPath();
      ctx.moveTo(10, groundY);
      ctx.lineTo(cssWidth - 10, groundY);
      ctx.stroke();

      // 底角圆弧 + θ 标注
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(baseX, groundY, 26, -rad, 0);
      ctx.stroke();
      ctx.fillStyle = '#64748b';
      ctx.font = '12px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('θ', baseX + 32, groundY - 6);

      // 物块位置：下滑时由顶端附近加速滑下，滑到底后循环；静止时停在中部
      const blockSize = 22 + Math.sqrt(mass) * 4;
      let sMeters: number; // 距斜面顶端的物理位移
      let t = 0;
      if (sliding) {
        t = (now - cycleStartRef.current) / 1000;
        sMeters = 1 + 0.5 * a * t * t;
        if (sMeters * pxPerM > slopeLen - blockSize) {
          cycleStartRef.current = now;
          t = 0;
          sMeters = 1;
        }
      } else {
        sMeters = SLOPE_METERS * 0.4;
      }
      const along = sMeters * pxPerM; // 距顶端沿斜面的像素距离
      // 物块与斜面接触点（物块绕该点旋转贴合斜面）
      const cxp = topX - along * Math.cos(rad);
      const cyp = topY + along * Math.sin(rad);

      // 物块（旋转到与斜面平行）
      ctx.save();
      ctx.translate(cxp, cyp);
      ctx.rotate(-rad);
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(-blockSize / 2, -blockSize, blockSize, blockSize);
      ctx.strokeStyle = '#1e40af';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-blockSize / 2, -blockSize, blockSize, blockSize);
      ctx.fillStyle = '#ffffff';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${mass} kg`, 0, -blockSize / 2 + 4);
      ctx.restore();

      // 力的分解箭头（从物块中心出发）
      const mg = mass * 9.8;
      const kF = 56 / mg; // px/N，使 mg 对应固定长度
      const cx0 = cxp;
      const cy0 = cyp - blockSize / 2;
      // 沿斜面向下：mg·sinθ（红）
      drawArrow(
        ctx,
        cx0,
        cy0,
        cx0 - comp.parallel * kF * Math.cos(rad),
        cy0 + comp.parallel * kF * Math.sin(rad),
        '#dc2626',
        'mg·sinθ',
      );
      // 垂直斜面向内：mg·cosθ（蓝）
      drawArrow(
        ctx,
        cx0,
        cy0,
        cx0 + comp.perpendicular * kF * Math.sin(rad),
        cy0 + comp.perpendicular * kF * Math.cos(rad),
        '#2563eb',
        'mg·cosθ',
      );
      // 摩擦力：静止时 f = mg·sinθ，滑动时 f = μN（橙，沿斜面向上）
      const fActual = sliding ? frictionMax : parallelComponent(mass, angleDeg);
      drawArrow(
        ctx,
        cx0,
        cy0,
        cx0 + fActual * kF * Math.cos(rad),
        cy0 - fActual * kF * Math.sin(rad),
        '#ea580c',
        'f',
      );

      // 读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`θ = ${angleDeg}°   μ = ${mu}   m = ${mass} kg`, 10, 16);
      ctx.fillText(
        `mg·sinθ = ${comp.parallel.toFixed(2)} N   f_max = μmg·cosθ = ${frictionMax.toFixed(2)} N`,
        10,
        34,
      );
      ctx.textAlign = 'right';
      if (sliding) {
        ctx.fillStyle = '#059669';
        ctx.fillText(`slides: a = g(sinθ − μcosθ) = ${a.toFixed(2)} m/s²`, cssWidth - 10, 16);
        ctx.fillStyle = '#0f172a';
        ctx.fillText(`t = ${t.toFixed(1)} s   v = ${(a * t).toFixed(2)} m/s`, cssWidth - 10, 34);
      } else {
        ctx.fillStyle = '#b45309';
        ctx.fillText('mg·sinθ ≤ μmg·cosθ → stays at rest', cssWidth - 10, 16);
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="inclined-plane-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Inclined plane: block with gravity components and friction"
    />
  );
}
