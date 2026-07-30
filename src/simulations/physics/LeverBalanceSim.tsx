import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { isBalanced, netTorque, torque } from '../kernels/lever';

function drawArrowDown(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  len: number,
  color: string,
  label?: string,
) {
  if (len < 2) return;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + len);
  ctx.stroke();
  const head = Math.min(8, len * 0.4);
  ctx.beginPath();
  ctx.moveTo(x, y + len);
  ctx.lineTo(x - head * 0.6, y + len - head);
  ctx.lineTo(x + head * 0.6, y + len - head);
  ctx.closePath();
  ctx.fill();
  if (label) {
    ctx.font = '12px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y + len + 15);
  }
}

/**
 * 杠杆平衡仿真：带刻度的杠杆按力矩差倾斜或平衡，
 * 显示两侧力矩数值与平衡条件 F₁d₁ = F₂d₂。
 */
export default function LeverBalanceSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const angleRef = useRef(0); // 当前倾角（动画插值）

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;

    const draw = () => {
      const f1 = Number(paramsRef.current.f1 ?? 6);
      const d1 = Number(paramsRef.current.d1 ?? 4);
      const f2 = Number(paramsRef.current.f2 ?? 4);
      const d2 = Number(paramsRef.current.d2 ?? 6);

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

      const tauL = torque(f1, d1);
      const tauR = torque(f2, d2);
      const net = netTorque(f1, d1, f2, d2);
      const balanced = isBalanced(f1, d1, f2, d2);

      // 杠杆几何：支点居中，臂长 10 格
      const pivotX = cssWidth / 2;
      const pivotY = cssHeight / 2 - 6;
      const unitPx = Math.min((cssWidth / 2 - 70) / 10, 22);
      const halfLen = 10 * unitPx;

      // 倾角：净力矩 → 目标倾角（左重则左端下沉），平滑过渡
      const targetAngle = balanced ? 0 : Math.max(-0.16, Math.min(0.16, -net * 0.008));
      angleRef.current += (targetAngle - angleRef.current) * 0.08;
      const ang = angleRef.current;

      // 支点（三角形支座 + 底座）
      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(pivotX - 16, pivotY + 26);
      ctx.lineTo(pivotX + 16, pivotY + 26);
      ctx.closePath();
      ctx.fill();
      ctx.fillRect(pivotX - 28, pivotY + 26, 56, 5);

      // 杠杆（绕支点旋转）
      ctx.save();
      ctx.translate(pivotX, pivotY);
      ctx.rotate(ang);
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(-halfLen, -4, halfLen * 2, 8);
      // 刻度
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.font = '10px system-ui, sans-serif';
      ctx.textAlign = 'center';
      for (let i = 1; i <= 10; i++) {
        for (const sideSign of [-1, 1]) {
          const x = sideSign * i * unitPx;
          ctx.beginPath();
          ctx.moveTo(x, -4);
          ctx.lineTo(x, 4);
          ctx.stroke();
          ctx.fillStyle = '#64748b';
          ctx.fillText(String(i), x, 18);
        }
      }
      ctx.restore();
      // 支点圆点
      ctx.fillStyle = '#1e40af';
      ctx.beginPath();
      ctx.arc(pivotX, pivotY, 4, 0, Math.PI * 2);
      ctx.fill();

      // 两侧向下的力箭头（位置随杠杆旋转，长度与力成比例）
      const kF = 90 / 20; // px/N（力量程 1–20 N）
      const leftX = pivotX - d1 * unitPx * Math.cos(ang);
      const leftY = pivotY - d1 * unitPx * Math.sin(ang);
      const rightX = pivotX + d2 * unitPx * Math.cos(ang);
      const rightY = pivotY + d2 * unitPx * Math.sin(ang);
      drawArrowDown(ctx, leftX, leftY + 4, f1 * kF, '#dc2626', `F₁ = ${f1} N`);
      drawArrowDown(ctx, rightX, rightY + 4, f2 * kF, '#ea580c', `F₂ = ${f2} N`);
      // 力臂虚线
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY - 12);
      ctx.lineTo(leftX, leftY - 12);
      ctx.moveTo(pivotX, pivotY - 12);
      ctx.lineTo(rightX, rightY - 12);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#64748b';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`d₁ = ${d1}`, (pivotX + leftX) / 2, (pivotY + leftY) / 2 - 16);
      ctx.fillText(`d₂ = ${d2}`, (pivotX + rightX) / 2, (pivotY + rightY) / 2 - 16);

      // 读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(
        `τ_left = F₁·d₁ = ${f1} × ${d1} = ${tauL.toFixed(1)} N·unit    τ_right = F₂·d₂ = ${f2} × ${d2} = ${tauR.toFixed(1)} N·unit`,
        10,
        16,
      );
      ctx.textAlign = 'right';
      if (balanced) {
        ctx.fillStyle = '#059669';
        ctx.fillText('F₁d₁ = F₂d₂ → balanced', cssWidth - 10, 16);
      } else {
        ctx.fillStyle = '#b45309';
        ctx.fillText(
          `Στ = ${net.toFixed(1)} N·unit → tips ${net > 0 ? 'left' : 'right'}`,
          cssWidth - 10,
          16,
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
      data-testid="lever-balance-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Lever balance: beam tilts according to the net torque"
    />
  );
}
