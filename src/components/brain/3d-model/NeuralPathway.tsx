
import React from 'react';
import { BrainRegion } from '../types/brain-types';

interface NeuralPathwayProps {
  sourceRegion: BrainRegion;
  targetRegion: BrainRegion;
  width: number;
  opacity: number;
}

const NeuralPathway: React.FC<NeuralPathwayProps> = ({
  sourceRegion,
  targetRegion,
  width,
  opacity
}) => {
  // Déterminer les positions source et cible
  let sourcePosition: [number, number, number] = [0, 0, 0];
  let targetPosition: [number, number, number] = [0, 0, 0];
  
  // Position source
  switch(sourceRegion.id) {
    case 'frontal': sourcePosition = [0, 0.4, 0.6]; break;
    case 'parietal': sourcePosition = [0, 0.4, -0.2]; break;
    case 'temporal': sourcePosition = [0.6, -0.1, 0.1]; break;
    case 'occipital': sourcePosition = [0, 0, -0.8]; break;
    case 'cerebellum': sourcePosition = [0, -0.6, -0.7]; break;
    case 'brainstem': sourcePosition = [0, -1, -0.4]; break;
    case 'limbic': sourcePosition = [0, 0, 0]; break;
  }
  
  // Position cible
  switch(targetRegion.id) {
    case 'frontal': targetPosition = [0, 0.4, 0.6]; break;
    case 'parietal': targetPosition = [0, 0.4, -0.2]; break;
    case 'temporal': targetPosition = [0.6, -0.1, 0.1]; break;
    case 'occipital': targetPosition = [0, 0, -0.8]; break;
    case 'cerebellum': targetPosition = [0, -0.6, -0.7]; break;
    case 'brainstem': targetPosition = [0, -1, -0.4]; break;
    case 'limbic': targetPosition = [0, 0, 0]; break;
  }

  // Vecteur de direction
  const direction: [number, number, number] = [
    targetPosition[0] - sourcePosition[0],
    targetPosition[1] - sourcePosition[1],
    targetPosition[2] - sourcePosition[2]
  ];
  
  // Longueur du chemin
  const length = Math.sqrt(direction[0]**2 + direction[1]**2 + direction[2]**2);
  
  // Point médian pour positionner le cylindre
  const midpoint: [number, number, number] = [
    sourcePosition[0] + direction[0] / 2,
    sourcePosition[1] + direction[1] / 2,
    sourcePosition[2] + direction[2] / 2
  ];

  // Calcul de la rotation pour aligner le cylindre
  const phi = Math.atan2(direction[2], direction[0]);
  const theta = Math.atan2(Math.sqrt(direction[0]**2 + direction[2]**2), direction[1]);

  return (
    <mesh position={midpoint} rotation={[Math.PI/2 - theta, 0, -phi]}>
      <cylinderGeometry args={[width, width, length, 8]} />
      <meshStandardMaterial color="#9b87f5" transparent opacity={opacity} />
    </mesh>
  );
};

export default NeuralPathway;
