
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Group } from 'three';

interface BrainRegion {
  id: string;
  name: string;
  description: string;
  relatedTo: string[];
  coordinates: {
    x: number;
    y: number;
    z: number;
  };
  color: string;
}

const brainRegions: BrainRegion[] = [
  {
    id: 'frontal',
    name: 'Cortex préfrontal',
    description: 'Impliqué dans les fonctions exécutives, la planification et l\'attention. Souvent concerné dans le TDAH.',
    relatedTo: ['TDAH', 'Fonctions exécutives', 'Planification'],
    coordinates: { x: 0, y: 0.5, z: 0.7 },
    color: '#8B5CF6' // Purple
  },
  {
    id: 'temporal',
    name: 'Lobe temporal',
    description: 'Traite les informations auditives et linguistiques. Impliqué dans la dyslexie et dysphasie.',
    relatedTo: ['Dyslexie', 'Dysphasie', 'Traitement du langage'],
    coordinates: { x: 0.7, y: 0, z: 0 },
    color: '#0EA5E9' // Blue
  },
  {
    id: 'parietal',
    name: 'Lobe pariétal',
    description: 'Responsable de l\'intégration sensorielle et des compétences mathématiques. Lié à la dyscalculie.',
    relatedTo: ['Dyscalculie', 'Traitement sensoriel'],
    coordinates: { x: 0, y: 0.5, z: -0.5 },
    color: '#10B981' // Green
  },
  {
    id: 'cerebellum',
    name: 'Cervelet',
    description: 'Contrôle la coordination motrice. Impliqué dans la dyspraxie.',
    relatedTo: ['Dyspraxie', 'Coordination motrice'],
    coordinates: { x: 0, y: -0.7, z: 0 },
    color: '#F97316' // Orange
  },
];

const SimpleBrainModel = ({ activeRegion, setActiveRegion }: { 
  activeRegion: string | null; 
  setActiveRegion: (id: string | null) => void 
}) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const group = React.useRef<Group>(null);

  // Gentle rotation animation
  useFrame((state) => {
    if (group.current && !activeRegion) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Base brain structure */}
      <mesh>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="#E5DEFF" transparent opacity={0.2} roughness={0.7} />
      </mesh>
      
      {/* Cerebral cortex */}
      <mesh>
        <sphereGeometry args={[0.95, 32, 16]} />
        <meshStandardMaterial color="#D6BCFA" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Brain regions */}
      {brainRegions.map((region) => (
        <mesh
          key={region.id}
          position={[region.coordinates.x, region.coordinates.y, region.coordinates.z]}
          scale={hoveredRegion === region.id || activeRegion === region.id ? 1.2 : 1}
          onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
          onPointerOver={() => setHoveredRegion(region.id)}
          onPointerOut={() => setHoveredRegion(null)}
        >
          <sphereGeometry args={[0.25, 32, 16]} />
          <meshStandardMaterial 
            color={region.color} 
            transparent 
            opacity={hoveredRegion === region.id || activeRegion === region.id ? 0.9 : 0.7}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const Brain3D = ({ activeRegion, setActiveRegion }: { 
  activeRegion: string | null; 
  setActiveRegion: (id: string | null) => void 
}) => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 50 }}>
      <color attach="background" args={['#ffffff00']} />  {/* Transparent background */}
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      <SimpleBrainModel activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      
      <Environment preset="city" />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={1.5} far={1.5} />
      
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        minPolarAngle={Math.PI / 6} 
        maxPolarAngle={Math.PI - Math.PI / 6} 
        autoRotate={!activeRegion} 
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

const BrainInteractive = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  // Find the currently active region
  const selectedRegion = activeRegion 
    ? brainRegions.find(region => region.id === activeRegion) 
    : null;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 3D Brain */}
      <div className="w-full h-full">
        <Brain3D activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      </div>
      
      {/* Info panel */}
      {selectedRegion && (
        <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 rounded-t-lg">
          <h3 className="text-lg font-bold" style={{ color: selectedRegion.color }}>{selectedRegion.name}</h3>
          <p className="text-sm mt-1">{selectedRegion.description}</p>
          
          <div className="mt-2">
            <h4 className="text-xs font-semibold">Troubles associés:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {selectedRegion.relatedTo.map((item) => (
                <div 
                  key={item} 
                  className="px-2 py-1 rounded-full bg-secondary text-xs font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Pulse effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full bg-neuro-purple/5 animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default BrainInteractive;
