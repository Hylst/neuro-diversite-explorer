
import React, { useRef, Suspense, lazy } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { brainRegions } from '../data/brain-regions-data';
import LoadingSpinner from '@/components/ui/loading-spinner';

// Lazy load heavy 3D components
const BrainBase = lazy(() => import('./BrainBase'));
const BrainRegionMesh = lazy(() => import('./BrainRegionMesh'));
const BrainConnectionsMap = lazy(() => import('./BrainConnectionsMap'));

interface RealisticBrainModelProps {
  activeRegion: string | null;
  setActiveRegion: (id: string | null) => void;
  position?: [number, number, number];
  scale?: number;
}

// Component for loading state inside canvas
const ModelLoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[0.5, 16, 16]} />
    <meshBasicMaterial color="#D6BCFA" wireframe opacity={0.5} transparent />
  </mesh>
);

const RealisticBrainModel: React.FC<RealisticBrainModelProps> = ({
  activeRegion,
  setActiveRegion,
  position = [0, 0, 0],
  scale = 1
}) => {
  const group = useRef<Group>(null);

  // Animation du cerveau
  useFrame((state) => {
    if (group.current && !activeRegion) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.1;
    }
  });

  const handleRegionClick = (id: string) => {
    setActiveRegion(id === activeRegion ? null : id);
  };

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Base du cerveau */}
      <Suspense fallback={<ModelLoadingFallback />}>
        <BrainBase />
      </Suspense>
      
      {/* Régions cérébrales */}
      <Suspense fallback={null}>
        {brainRegions.map((region) => (
          <BrainRegionMesh
            key={region.id}
            region={region}
            isActive={activeRegion === region.id}
            onRegionClick={handleRegionClick}
          />
        ))}
      </Suspense>
      
      {/* Connexions neuronales */}
      <Suspense fallback={null}>
        <BrainConnectionsMap />
      </Suspense>
    </group>
  );
};

export default RealisticBrainModel;
