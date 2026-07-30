import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { CellModel } from '../../content/cells';
import { OrganelleMesh } from './OrganelleMesh';

export interface CellSceneProps {
  model: CellModel;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

/** 3D 舞台：灯光 + 轨道控制器 + 全部细胞器网格 */
export function CellScene({ model, selectedId, onSelect }: CellSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 2.5, 9.5], fov: 45 }}
      onPointerMissed={() => onSelect(null)}
      className="touch-none"
    >
      <color attach="background" args={['#f8fafc']} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[6, 8, 5]} intensity={1.1} />
      <directionalLight position={[-6, -4, -6]} intensity={0.3} />

      {model.organelles.map((organelle) => (
        <OrganelleMesh
          key={organelle.id}
          organelle={organelle}
          boundary={model.boundary}
          selected={organelle.id === selectedId}
          onSelect={onSelect}
        />
      ))}

      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={4}
        maxDistance={18}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
