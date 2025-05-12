
import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { BrainRegion } from '../types/brain-types';
import { Vector3 } from 'three';

interface BrainRegionMeshProps {
  region: BrainRegion;
  isActive: boolean;
  onRegionClick: (id: string) => void;
}

const BrainRegionMesh: React.FC<BrainRegionMeshProps> = ({
  region,
  isActive,
  onRegionClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Positions et formes des différentes régions du cerveau
  let meshPosition: [number, number, number] = [0, 0, 0];
  let meshShape: JSX.Element;
  let meshScale: [number, number, number] = [1, 1, 1];
  let meshRotation: [number, number, number] = [0, 0, 0];
  
  switch(region.id) {
    case 'frontal':
      meshPosition = [0, 0.4, 0.6];
      meshShape = <sphereGeometry args={[0.6, 32, 16]} />
      meshScale = [1.2, 0.8, 0.7];
      meshRotation = [0.2, 0, 0];
      break;
    case 'parietal':
      meshPosition = [0, 0.4, -0.2];
      meshShape = <sphereGeometry args={[0.55, 32, 16]} />
      meshScale = [1.2, 0.7, 0.7];
      break;
    case 'temporal':
      meshPosition = [0.6, -0.1, 0.1];
      meshShape = <sphereGeometry args={[0.4, 32, 32]} />
      meshScale = [1, 0.75, 1.5];
      meshRotation = [0, 0.5, 0];
      break;
    case 'occipital':
      meshPosition = [0, 0, -0.8];
      meshShape = <sphereGeometry args={[0.5, 32, 16]} />
      meshScale = [1, 0.8, 0.6];
      break;
    case 'cerebellum':
      meshPosition = [0, -0.6, -0.7];
      meshShape = <sphereGeometry args={[0.4, 32, 16]} />
      meshScale = [1.1, 0.5, 0.7];
      break;
    case 'brainstem':
      meshPosition = [0, -1, -0.4];
      meshShape = <cylinderGeometry args={[0.2, 0.15, 0.6, 16]} />
      meshRotation = [0.3, 0, 0];
      break;
    case 'limbic':
      meshPosition = [0, 0, 0];
      meshShape = <torusGeometry args={[0.35, 0.15, 16, 32, Math.PI]} />
      meshRotation = [Math.PI/2, 0, 0];
      break;
    default:
      meshPosition = region.position || [0, 0, 0];
      meshShape = <sphereGeometry args={[0.4, 32, 32]} />
  }

  const handleClick = () => {
    onRegionClick(region.id);
  };

  // Ensure that scaleValue is always a tuple of 3 elements
  const scaleValue: [number, number, number] = isActive || isHovered ? 
    [meshScale[0] * 1.05, meshScale[1] * 1.05, meshScale[2] * 1.05] : 
    meshScale;

  return (
    <mesh
      position={meshPosition}
      scale={scaleValue}
      rotation={meshRotation}
      onClick={handleClick}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {meshShape}
      <meshStandardMaterial 
        color={region.color} 
        transparent 
        opacity={isActive || isHovered ? 0.9 : 0.7}
        roughness={0.3}
        metalness={0.2}
      />
      {(isHovered || isActive) && (
        <Html distanceFactor={10} position={[0, 0.8, 0]} className="pointer-events-none">
          <div className="bg-background/80 backdrop-blur-sm rounded px-2 py-1 text-sm text-center shadow-md">
            {region.name}
          </div>
        </Html>
      )}
    </mesh>
  );
};

export default BrainRegionMesh;
