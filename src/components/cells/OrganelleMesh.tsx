import { useMemo } from 'react';
import type { ThreeEvent } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import type { Organelle } from '../../content/cells';

/**
 * 细胞器渲染器：完全由 three.js 图元程序化建模，无任何外部模型文件。
 * 渲染层只读取 Organelle 数据（kind / color / position / size / rotation / copies）。
 */

interface ShapeProps {
  organelle: Organelle;
  selected: boolean;
}

/** 确定性伪随机（保证每次渲染排布一致） */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 选中时的高亮：发光增强 + 轻微放大 */
function highlight(selected: boolean) {
  return {
    emissiveIntensity: selected ? 0.65 : 0.1,
    scale: selected ? 1.07 : 1,
  };
}

/** 细胞膜：半透明壳（球体或长方体），点击穿透以便选中内部细胞器 */
function Membrane({ organelle, selected, box }: ShapeProps & { box: boolean }) {
  const s = organelle.size;
  return (
    <mesh raycast={() => null} scale={highlight(selected).scale}>
      {box ? <boxGeometry args={[s * 2, s * 1.36, s * 1.36]} /> : <sphereGeometry args={[s, 48, 32]} />}
      <meshStandardMaterial
        color={organelle.color}
        transparent
        opacity={selected ? 0.32 : 0.16}
        roughness={0.35}
        depthWrite={false}
      />
      {box && <Edges scale={1.001} color={selected ? '#db2777' : '#94a3b8'} />}
    </mesh>
  );
}

/** 细胞壁：半透明长方体外壳 + 描边，点击穿透 */
function CellWall({ organelle, selected }: ShapeProps) {
  const s = organelle.size;
  return (
    <mesh raycast={() => null} scale={highlight(selected).scale}>
      <boxGeometry args={[s * 2, s * 1.36, s * 1.36]} />
      <meshStandardMaterial
        color={organelle.color}
        transparent
        opacity={selected ? 0.3 : 0.14}
        roughness={0.6}
        depthWrite={false}
      />
      <Edges scale={1.001} color={selected ? '#0f766e' : '#78716c'} />
    </mesh>
  );
}

/** 大液泡：大半透明球，点击穿透 */
function Vacuole({ organelle, selected }: ShapeProps) {
  return (
    <mesh raycast={() => null} scale={highlight(selected).scale}>
      <sphereGeometry args={[organelle.size, 40, 28]} />
      <meshStandardMaterial
        color={organelle.color}
        transparent
        opacity={selected ? 0.34 : 0.18}
        roughness={0.3}
        depthWrite={false}
      />
      <Edges scale={1.001} color={selected ? '#2563eb' : '#bfdbfe'} />
    </mesh>
  );
}

/** 细胞核：半球透明外壳 + 核仁 */
function Nucleus({ organelle, selected }: ShapeProps) {
  const s = organelle.size;
  const h = highlight(selected);
  return (
    <group scale={h.scale}>
      <mesh>
        <sphereGeometry args={[s, 40, 28]} />
        <meshStandardMaterial
          color={organelle.color}
          transparent
          opacity={0.6}
          roughness={0.4}
          emissive={organelle.color}
          emissiveIntensity={h.emissiveIntensity}
        />
      </mesh>
      {/* 核仁 */}
      <mesh position={[s * 0.28, s * 0.12, s * 0.28]}>
        <sphereGeometry args={[s * 0.3, 24, 16]} />
        <meshStandardMaterial color="#4f46e5" roughness={0.5} />
      </mesh>
      {/* 核膜轮廓 */}
      <mesh raycast={() => null}>
        <sphereGeometry args={[s * 1.08, 32, 24]} />
        <meshStandardMaterial color={organelle.color} transparent opacity={0.22} roughness={0.3} depthWrite={false} />
      </mesh>
    </group>
  );
}

/** 线粒体单体：胶囊体外膜 + 内膜褶皱（嵴）示意 */
function MitochondrionBody({ organelle, selected }: ShapeProps) {
  const s = organelle.size;
  const h = highlight(selected);
  return (
    <group scale={h.scale} rotation={organelle.rotation ?? [0, 0, 0]}>
      <mesh>
        <capsuleGeometry args={[s, s * 1.6, 8, 20]} />
        <meshStandardMaterial
          color={organelle.color}
          transparent
          opacity={0.8}
          roughness={0.45}
          emissive={organelle.color}
          emissiveIntensity={h.emissiveIntensity}
        />
      </mesh>
      {/* 内膜褶皱（嵴）：三个嵌套圆环 */}
      {[-0.5, 0, 0.5].map((y) => (
        <mesh key={y} position={[0, y * s * 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[s * 0.55, s * 0.14, 8, 24]} />
          <meshStandardMaterial color="#c2410c" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

/** 线粒体：本体 + 数据中的副本 */
function Mitochondrion({ organelle, selected }: ShapeProps) {
  return (
    <group>
      <MitochondrionBody organelle={organelle} selected={selected} />
      {(organelle.copies ?? []).map((pos, i) => (
        <group key={i} position={[(pos[0] - organelle.position[0]), (pos[1] - organelle.position[1]), (pos[2] - organelle.position[2])]}>
          <MitochondrionBody
            organelle={{ ...organelle, rotation: [0.4 + i, 0.3 * i, 1.2 - 0.5 * i] }}
            selected={selected}
          />
        </group>
      ))}
    </group>
  );
}

/** 核糖体：一簇确定性散布的小球 */
function Ribosomes({ organelle, selected }: ShapeProps) {
  const s = organelle.size;
  const h = highlight(selected);
  const dots = useMemo(() => {
    const rand = mulberry32(20240701 + Math.round(s * 1000));
    return Array.from({ length: 16 }, () => {
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      const r = s * (0.35 + 0.65 * rand());
      return [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ] as [number, number, number];
    });
  }, [s]);
  return (
    <group scale={h.scale}>
      {dots.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.075, 12, 10]} />
          <meshStandardMaterial
            color={organelle.color}
            roughness={0.5}
            emissive={organelle.color}
            emissiveIntensity={h.emissiveIntensity}
          />
        </mesh>
      ))}
    </group>
  );
}

/** 内质网：多层折叠弧形膜片（torus 弧）+ 附着核糖体小点（粗面） */
function EndoplasmicReticulum({ organelle, selected }: ShapeProps) {
  const s = organelle.size;
  const h = highlight(selected);
  const studs = useMemo(() => {
    const rand = mulberry32(20240702 + Math.round(s * 1000));
    return Array.from({ length: 10 }, () => {
      const layer = Math.floor(rand() * 3) - 1;
      const angle = rand() * Math.PI;
      const r = s * (0.55 + 0.14 * (layer + 1));
      return [Math.cos(angle) * r, layer * s * 0.42 + 0.1, Math.sin(angle) * r] as [number, number, number];
    });
  }, [s]);
  return (
    <group scale={h.scale} rotation={organelle.rotation ?? [0, 0, 0]}>
      {[-1, 0, 1].map((layer) => (
        <mesh key={layer} position={[0, layer * s * 0.42, 0]} rotation={[Math.PI / 2, 0, layer * 0.35]}>
          <torusGeometry args={[s * (0.55 + 0.14 * (layer + 1)), s * 0.13, 8, 40, Math.PI]} />
          <meshStandardMaterial
            color={organelle.color}
            roughness={0.45}
            emissive={organelle.color}
            emissiveIntensity={h.emissiveIntensity}
          />
        </mesh>
      ))}
      {studs.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.055, 10, 8]} />
          <meshStandardMaterial color="#facc15" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

/** 高尔基体：叠层扁平囊 + 分泌小泡 */
function Golgi({ organelle, selected }: ShapeProps) {
  const s = organelle.size;
  const h = highlight(selected);
  const vesicles = useMemo(() => {
    const rand = mulberry32(20240703 + Math.round(s * 1000));
    return Array.from({ length: 5 }, () => {
      const angle = rand() * Math.PI * 2;
      const r = s * (1.05 + 0.35 * rand());
      return [Math.cos(angle) * r, (rand() - 0.5) * s * 1.4, Math.sin(angle) * r] as [number, number, number];
    });
  }, [s]);
  return (
    <group scale={h.scale} rotation={organelle.rotation ?? [0, 0, 0]}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, (i - 1.5) * s * 0.4, 0]} scale={[1, 0.26, 0.8]}>
          <sphereGeometry args={[s * (1 - i * 0.1), 28, 20]} />
          <meshStandardMaterial
            color={organelle.color}
            roughness={0.45}
            emissive={organelle.color}
            emissiveIntensity={h.emissiveIntensity}
          />
        </mesh>
      ))}
      {vesicles.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[s * 0.16, 12, 10]} />
          <meshStandardMaterial color="#059669" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

/** 叶绿体单体：绿色椭球外膜 + 基粒（类囊体堆叠） */
function ChloroplastBody({ organelle, selected }: ShapeProps) {
  const s = organelle.size;
  const h = highlight(selected);
  return (
    <group scale={h.scale} rotation={organelle.rotation ?? [0, 0, 0]}>
      <mesh scale={[1.4, 0.78, 0.95]}>
        <sphereGeometry args={[s, 32, 24]} />
        <meshStandardMaterial
          color={organelle.color}
          transparent
          opacity={0.75}
          roughness={0.4}
          emissive={organelle.color}
          emissiveIntensity={h.emissiveIntensity}
        />
      </mesh>
      {/* 基粒：类囊体圆盘堆 */}
      {[-1.5, -0.5, 0.5, 1.5].map((k) => (
        <mesh key={k} position={[0, k * s * 0.22, 0]}>
          <cylinderGeometry args={[s * 0.42, s * 0.42, s * 0.1, 20]} />
          <meshStandardMaterial color="#15803d" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

/** 叶绿体：本体 + 数据中的副本 */
function Chloroplast({ organelle, selected }: ShapeProps) {
  return (
    <group>
      <ChloroplastBody organelle={organelle} selected={selected} />
      {(organelle.copies ?? []).map((pos, i) => (
        <group
          key={i}
          position={[pos[0] - organelle.position[0], pos[1] - organelle.position[1], pos[2] - organelle.position[2]]}
        >
          <ChloroplastBody
            organelle={{ ...organelle, rotation: [0.3 * i + 0.8, 0.5 * i, 0.9 - 0.4 * i] }}
            selected={selected}
          />
        </group>
      ))}
    </group>
  );
}

export interface OrganelleMeshProps {
  organelle: Organelle;
  /** 细胞外形，决定膜的建模方式 */
  boundary: 'sphere' | 'box';
  selected: boolean;
  onSelect: (id: string) => void;
}

export function OrganelleMesh({ organelle, boundary, selected, onSelect }: OrganelleMeshProps) {
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(organelle.id);
  };

  let body: React.ReactNode;
  switch (organelle.kind) {
    case 'cellMembrane':
      body = <Membrane organelle={organelle} selected={selected} box={boundary === 'box'} />;
      break;
    case 'cellWall':
      body = <CellWall organelle={organelle} selected={selected} />;
      break;
    case 'vacuole':
      body = <Vacuole organelle={organelle} selected={selected} />;
      break;
    case 'nucleus':
      body = <Nucleus organelle={organelle} selected={selected} />;
      break;
    case 'mitochondrion':
      body = <Mitochondrion organelle={organelle} selected={selected} />;
      break;
    case 'ribosome':
      body = <Ribosomes organelle={organelle} selected={selected} />;
      break;
    case 'endoplasmicReticulum':
      body = <EndoplasmicReticulum organelle={organelle} selected={selected} />;
      break;
    case 'golgiApparatus':
      body = <Golgi organelle={organelle} selected={selected} />;
      break;
    case 'chloroplast':
      body = <Chloroplast organelle={organelle} selected={selected} />;
      break;
  }

  return (
    <group
      position={organelle.position}
      onClick={handleClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
      }}
    >
      {body}
    </group>
  );
}
