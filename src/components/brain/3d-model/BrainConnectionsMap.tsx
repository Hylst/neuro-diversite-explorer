
import React from 'react';
import { brainRegions } from '../data/brain-regions-data';
import { BrainRegion } from '../types/brain-types';
import NeuralPathway from './NeuralPathway';

interface Connection {
  targetId: string;
  width: number;
  opacity: number;
}

const getRegionConnections = (regionId: string): Connection[] => {
  switch(regionId) {
    case 'frontal':
      return [
        {targetId: 'parietal', width: 0.03, opacity: 0.6},
        {targetId: 'temporal', width: 0.025, opacity: 0.5},
        {targetId: 'limbic', width: 0.03, opacity: 0.7}
      ];
    case 'parietal':
      return [
        {targetId: 'occipital', width: 0.025, opacity: 0.6},
        {targetId: 'temporal', width: 0.02, opacity: 0.5}
      ];
    case 'temporal':
      return [
        {targetId: 'occipital', width: 0.02, opacity: 0.4},
        {targetId: 'limbic', width: 0.025, opacity: 0.6}
      ];
    case 'occipital':
      return [{targetId: 'cerebellum', width: 0.015, opacity: 0.4}];
    case 'cerebellum':
      return [{targetId: 'brainstem', width: 0.025, opacity: 0.6}];
    case 'brainstem':
      return [{targetId: 'limbic', width: 0.02, opacity: 0.5}];
    case 'limbic':
      return [];
    default:
      return [];
  }
};

const BrainConnectionsMap: React.FC = () => {
  const pathways = brainRegions.flatMap((sourceRegion) => {
    const connections = getRegionConnections(sourceRegion.id);
    return connections.map((connection) => {
      const targetRegion = brainRegions.find(r => r.id === connection.targetId);
      if (!targetRegion) return null;
      
      return (
        <NeuralPathway 
          key={`${sourceRegion.id}-${targetRegion.id}`}
          sourceRegion={sourceRegion}
          targetRegion={targetRegion}
          width={connection.width}
          opacity={connection.opacity}
        />
      );
    }).filter(Boolean);
  });

  return <>{pathways}</>;
};

export default BrainConnectionsMap;
