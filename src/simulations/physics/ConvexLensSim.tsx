import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { imageDistance, imageType, magnification } from '../kernels/lens';

/** 从 P 沿 P→Q 方向延伸到 x = edgeX，返回终点 */
function extendToX(
  p: { x: number; y: number },
  q: { x: number; y: number },
  edgeX: number,
): { x: number; y: number } {
  const dx = q.x - p.x;
  if (Math.abs(dx) < 1e-9) return { x: p.x, y: q.y };
  const t = (edgeX - p.x) / dx;
  return { x: edgeX, y: p.y + t * (q.y - p.y) };
}

/**
 * 凸透镜成像仿真：主光轴 + 薄透镜 + 三条特殊光线。
 * u > f 实像倒立；u < f 虚像正立（放大镜）；u = f 不成像。
 */
export default function ConvexLensSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;

    const draw = () => {
      const f = Number(paramsRef.current.focalLength);
      const u = Number(paramsRef.current.objectDistance);
      const v = imageDistance(f, u);
      const m = magnification(f, u);
      const type = imageType(f, u);

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

      const cx = cssWidth / 2;
      const axisY = cssHeight * 0.55;
      const hObj = 45; // 物高 (px)
      const edgeX = cssWidth - 16;

      // 比例尺：保证物、焦点与（钳制后的）像都落在画面内
      const vForScale = Number.isFinite(v) ? Math.min(Math.abs(v), 3 * f + 30) : 0;
      const span = Math.max(u, vForScale, 1.4 * f, 12);
      const scale = (cx - 56) / span; // px/cm
      const toX = (cm: number) => cx + cm * scale;

      // 主光轴
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(16, axisY);
      ctx.lineTo(edgeX, axisY);
      ctx.stroke();

      // 焦点 F 与 2F 标记
      ctx.fillStyle = '#64748b';
      ctx.font = '12px system-ui, sans-serif';
      ctx.textAlign = 'center';
      for (const s of [-1, 1]) {
        const fx = toX(s * f);
        ctx.beginPath();
        ctx.arc(fx, axisY, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText('F', fx, axisY + 16);
        const f2x = toX(s * 2 * f);
        if (f2x > 16 && f2x < edgeX) {
          ctx.beginPath();
          ctx.arc(f2x, axisY, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillText('2F', f2x, axisY + 16);
        }
      }

      // 薄透镜（双凸，上下带箭头）
      const lensHalfH = Math.min(78, axisY - 24);
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, axisY, 9, lensHalfH, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath(); // 上箭头
      ctx.moveTo(cx, axisY - lensHalfH - 2);
      ctx.lineTo(cx - 5, axisY - lensHalfH + 7);
      ctx.moveTo(cx, axisY - lensHalfH - 2);
      ctx.lineTo(cx + 5, axisY - lensHalfH + 7);
      // 下箭头
      ctx.moveTo(cx, axisY + lensHalfH + 2);
      ctx.lineTo(cx - 5, axisY + lensHalfH - 7);
      ctx.moveTo(cx, axisY + lensHalfH + 2);
      ctx.lineTo(cx + 5, axisY + lensHalfH - 7);
      ctx.stroke();

      // 物体箭头（轴上向上）
      const objX = toX(-u);
      const tip = { x: objX, y: axisY - hObj };
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(objX, axisY);
      ctx.lineTo(tip.x, tip.y);
      ctx.moveTo(tip.x, tip.y);
      ctx.lineTo(tip.x - 4, tip.y + 9);
      ctx.moveTo(tip.x, tip.y);
      ctx.lineTo(tip.x + 4, tip.y + 9);
      ctx.stroke();
      ctx.fillStyle = '#0f172a';
      ctx.fillText('object', objX, axisY + 16);

      // 像的位置与大小
      const hasImage = type !== 'no-image' && Number.isFinite(v);
      const vClamped = hasImage ? Math.max(-span, Math.min(span, v)) : 0;
      const imgX = toX(vClamped);
      const imgTipY = axisY - m * hObj; // m<0 → 轴下方（倒立）
      const imgOnScreen = hasImage && Math.abs(v) <= span;

      // 三条特殊光线（u ≤ f 时“过焦点”光线不适用，只画前两条）
      const farF = { x: toX(f), y: axisY };
      const nearF = { x: toX(-f), y: axisY };
      const l1 = { x: cx, y: tip.y }; // 平行光碰镜点
      const center = { x: cx, y: axisY };
      let l3: { x: number; y: number } | null = null;
      if (u > f) {
        // 过近焦点入射，碰镜点后平行出射
        const s = (cx - tip.x) / (nearF.x - tip.x);
        l3 = { x: cx, y: tip.y + s * (nearF.y - tip.y) };
      }

      const ray = (
        from: { x: number; y: number },
        lensPt: { x: number; y: number },
        dirPt: { x: number; y: number } | null,
      ) => {
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(lensPt.x, lensPt.y);
        if (dirPt) {
          const end = extendToX(lensPt, dirPt, edgeX);
          ctx.lineTo(end.x, end.y);
        }
        ctx.stroke();
      };

      // 光线 1：平行入射 → 过远焦点
      ray(tip, l1, farF);
      // 光线 2：过光心不偏折
      ray(tip, center, extendToX(tip, center, edgeX));
      // 光线 3：过近焦点 → 平行出射
      if (l3) {
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tip.x, tip.y);
        ctx.lineTo(l3.x, l3.y);
        ctx.lineTo(edgeX, l3.y);
        ctx.stroke();
      }

      if (type === 'real-inverted' && imgOnScreen) {
        // 实像：倒立在异侧
        ctx.strokeStyle = '#059669';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(imgX, axisY);
        ctx.lineTo(imgX, imgTipY);
        ctx.moveTo(imgX, imgTipY);
        ctx.lineTo(imgX - 4, imgTipY + 9 * Math.sign(axisY - imgTipY));
        ctx.moveTo(imgX, imgTipY);
        ctx.lineTo(imgX + 4, imgTipY + 9 * Math.sign(axisY - imgTipY));
        ctx.stroke();
        ctx.fillStyle = '#059669';
        ctx.fillText('image', imgX, axisY + 16);
      } else if (type === 'virtual-upright') {
        // 虚像：折射光线反向延长线（虚线）交于同侧正立虚像
        const vTip = { x: imgX, y: imgTipY };
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(l1.x, l1.y);
        ctx.lineTo(vTip.x, vTip.y);
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(vTip.x, vTip.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.strokeStyle = '#059669';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(imgX, axisY);
        ctx.lineTo(imgX, imgTipY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#059669';
        ctx.fillText('virtual image', imgX, axisY + 16);
      } else if (type === 'real-inverted') {
        // 实像太远超出画面：标注方向
        ctx.fillStyle = '#059669';
        ctx.textAlign = 'right';
        ctx.fillText('image → off screen', edgeX, axisY - 8);
      }

      // 读数面板
      const absM = Math.abs(m);
      const sizeWord = absM > 1.001 ? 'magnified' : absM < 0.999 ? 'diminished' : 'same size';
      const desc =
        type === 'no-image'
          ? 'u = f : rays emerge parallel, no image'
          : type === 'real-inverted'
            ? `real, inverted, ${sizeWord}`
            : `virtual, upright, ${sizeWord}`;
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(
        `f = ${f.toFixed(1)} cm    u = ${u.toFixed(0)} cm    v = ${Number.isFinite(v) ? `${v.toFixed(1)} cm` : '∞'}    m = ${Number.isFinite(m) ? m.toFixed(2) : '∞'}`,
        16,
        20,
      );
      ctx.fillText(desc, 16, 38);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="convex-lens-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Convex lens ray diagram"
    />
  );
}
