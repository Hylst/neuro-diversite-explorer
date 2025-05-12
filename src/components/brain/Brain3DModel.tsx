
import React, { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';

// Lazy load the heavy 3D model
const RealisticBrainModel = lazy(() => import('./3d-model/RealisticBrainModel'));

// Simple loading component to show in the canvas while loading
const CanvasLoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[1, 16, 16]} />
    <meshBasicMaterial color="#D6BCFA" wireframe opacity={0.5} transparent />
  </mesh>
);

interface Brain3DModelProps {
  activeRegion: string | null; 
  setActiveRegion: (id: string | null) => void;
  showLabels?: boolean;
  rotationSpeed?: number;
}

const Brain3DModel: React.FC<Brain3DModelProps> = ({ 
  activeRegion, 
  setActiveRegion, 
  showLabels = true, 
  rotationSpeed = 0.5 
}) => {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#ffffff00']} />  {/* Fond transparent */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
        
        <Suspense fallback={<CanvasLoadingFallback />}>
          <RealisticBrainModel 
            activeRegion={activeRegion} 
            setActiveRegion={setActiveRegion} 
            scale={1.5} 
          />
          
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={1.5} 
            far={1.5} 
          />
        </Suspense>
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minPolarAngle={Math.PI / 6} 
          maxPolarAngle={Math.PI - Math.PI / 6} 
          autoRotate={!activeRegion} 
          autoRotateSpeed={rotationSpeed}
        />
      </Canvas>
    </div>
  );
};

export default Brain3DModel;
