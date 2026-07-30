import { useEffect, useRef } from 'react';
import type { SimulationProps } from '../registry';
import { pressure, pvProduct, T0_KELVIN } from '../kernels/gas';

const MOLECULE_COUNT = 36;

interface Molecule {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

/** 初始化分子：位置均匀散布于单位体积，速度方向随机、速率 1（每帧按 √(T/T₀) 缩放） */
function initMolecules(): Molecule[] {
  const list: Molecule[] = [];
  for (let k = 0; k < MOLECULE_COUNT; k += 1) {
    const angle = Math.random() * Math.PI * 2;
    list.push({
      x: 0.05 + Math.random() * 0.9,
      y: Math.random(),
      vx: Math.cos(angle),
      vy: Math.sin(angle),
    });
  }
  return list;
}

/**
 * 气体压强与体积仿真（玻意耳定律）：气缸活塞位置随体积变化，
 * 分子热运动速率随温度变化，读数 p = nRT/V 与 pV 乘积。
 */
export default function GasLawSim({ params }: SimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const moleculesRef = useRef<Molecule[]>(initMolecules());

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

      const volume = Number(paramsRef.current.volume); // 相对体积，1 = V₀
      const tempC = Number(paramsRef.current.temperature);
      const tK = 273.15 + tempC;
      const p = pressure(volume, tempC);
      const pv = pvProduct(volume, tempC);

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

      // 气缸几何：左壁固定，活塞位置 ∝ 体积
      const wallX = 40;
      const maxLen = cssWidth * 0.58; // V₀ 对应的气缸长度
      const top = 90;
      const bottom = cssHeight - 100;
      const pistonX = wallX + volume * maxLen;
      const cylH = bottom - top;

      // 分子运动（归一化坐标：x∈[0,volume]，y∈[0,1]，速率 ∝ √(T/T₀)）
      const speed = 0.55 * Math.sqrt(tK / T0_KELVIN); // 归一化单位/秒
      for (const mol of moleculesRef.current) {
        mol.x += mol.vx * speed * dt;
        mol.y += mol.vy * speed * dt;
        if (mol.x < 0) {
          mol.x = -mol.x;
          mol.vx = -mol.vx;
        } else if (mol.x > volume) {
          mol.x = 2 * volume - mol.x;
          mol.vx = -mol.vx;
        }
        // 体积突变时钳制回腔内，避免分子卡在活塞外
        mol.x = Math.min(Math.max(mol.x, 0), volume);
        mol.y = Math.min(Math.max(mol.y, 0), 1);
        if (mol.y < 0) {
          mol.y = -mol.y;
          mol.vy = -mol.vy;
        } else if (mol.y > 1) {
          mol.y = 2 - mol.y;
          mol.vy = -mol.vy;
        }
      }

      // 气缸壁（左、上、下）
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(wallX + maxLen + 60, top);
      ctx.lineTo(wallX, top);
      ctx.lineTo(wallX, bottom);
      ctx.lineTo(wallX + maxLen + 60, bottom);
      ctx.stroke();

      // 活塞（带连杆与阴影线）
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(pistonX - 4, top, 10, cylH);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(pistonX + 6, (top + bottom) / 2);
      ctx.lineTo(pistonX + 46, (top + bottom) / 2);
      ctx.stroke();
      for (let hy = top + 6; hy < bottom; hy += 10) {
        ctx.beginPath();
        ctx.moveTo(pistonX + 6, hy);
        ctx.lineTo(pistonX + 14, hy + 8);
        ctx.stroke();
      }

      // 分子
      ctx.fillStyle = '#2563eb';
      for (const mol of moleculesRef.current) {
        ctx.beginPath();
        ctx.arc(wallX + mol.x * maxLen, top + mol.y * cylH, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 体积刻度（V₀ 基准线）
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(wallX + maxLen, top - 8);
      ctx.lineTo(wallX + maxLen, bottom + 8);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#64748b';
      ctx.font = '12px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('V₀', wallX + maxLen, bottom + 22);
      ctx.fillText(`V = ${volume.toFixed(2)} V₀`, wallX + (volume * maxLen) / 2, top - 12);

      // 读数面板
      ctx.fillStyle = '#0f172a';
      ctx.font = '13px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`T = ${tempC.toFixed(0)} °C = ${tK.toFixed(1)} K`, 16, 26);
      ctx.fillText(`p = nRT/V = ${p.toFixed(2)} atm`, 16, 44);
      ctx.fillText(`pV = ${pv.toFixed(3)} atm·V₀  (p₀ = 1 atm at V₀, 20 °C)`, 16, 62);

      // 温度指示（右上色条）
      const frac = Math.min(1, tempC / 100);
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(cssWidth - 130, 18, 110, 10);
      ctx.fillStyle = `hsl(${(1 - frac) * 220}, 70%, 50%)`;
      ctx.fillRect(cssWidth - 130, 18, 110 * frac, 10);
      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'left';
      ctx.fillText('T', cssWidth - 144, 27);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="gas-law-canvas"
      className="h-72 w-full rounded-lg bg-white"
      aria-label="Gas in a cylinder with a movable piston"
    />
  );
}
