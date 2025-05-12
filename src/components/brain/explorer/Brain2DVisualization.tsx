
import React from 'react';
import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { brainRegions } from '../data/brain-regions-data';
import { BrainViewMode } from '../types/brain-types';

interface Brain2DVisualizationProps {
  viewMode: BrainViewMode;
  zoomLevel: number;
  rotation: number;
  hoveredRegion: string | null;
  setHoveredRegion: (id: string | null) => void;
  activeRegion: string | null;
  setActiveRegion: (id: string | null) => void;
}

const Brain2DVisualization: React.FC<Brain2DVisualizationProps> = ({
  viewMode,
  zoomLevel,
  rotation,
  hoveredRegion,
  setHoveredRegion,
  activeRegion,
  setActiveRegion
}) => {
  return (
    <motion.div
      style={{ 
        transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease'
      }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-4/5 h-4/5 max-w-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Brain outline */}
        <motion.path
          d="M50,10 C30,10 15,25 15,50 C15,75 30,90 50,90 C70,90 85,75 85,50 C85,25 70,10 50,10 Z"
          fill="#E5DEFF"
          stroke="#9b87f5"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Brain inner details */}
        <motion.path
          d="M30,30 C35,25 45,25 50,30 C55,25 65,25 70,30 C75,35 75,45 70,50 C75,55 75,65 70,70 C65,75 55,75 50,70 C45,75 35,75 30,70 C25,65 25,55 30,50 C25,45 25,35 30,30 Z"
          fill="none"
          stroke="#9b87f5"
          strokeWidth="0.5"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Additional brain structures based on view mode */}
        {viewMode === 'medial' && (
          <motion.path
            d="M50,20 C45,30 45,70 50,80 C55,70 55,30 50,20"
            fill="none"
            stroke="#9b87f5"
            strokeWidth="0.5"
            opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
          />
        )}
        
        {viewMode === 'superior' && (
          <motion.ellipse 
            cx="50" 
            cy="50" 
            rx="35" 
            ry="25" 
            fill="none"
            stroke="#9b87f5"
            strokeWidth="0.5"
            opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
          />
        )}
        
        {/* Brain regions as interactive circles */}
        {brainRegions.map((region) => (
          <Popover key={region.id} open={activeRegion === region.id} onOpenChange={(open) => !open && setActiveRegion(null)}>
            <PopoverTrigger asChild>
              <motion.circle
                cx={region.coordinates?.x || 50}
                cy={region.coordinates?.y || 50}
                r={hoveredRegion === region.id || activeRegion === region.id ? 8 : 6}
                fill={region.color}
                opacity={hoveredRegion === region.id || activeRegion === region.id ? 0.9 : 0.7}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ 
                  type: "spring", 
                  delay: 1.5 + brainRegions.indexOf(region) * 0.2,
                  duration: 0.5
                }}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
                className="cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h3 className="font-bold text-lg" style={{ color: region.color }}>{region.name}</h3>
                <p className="text-sm">{region.description}</p>
                
                {region.functions && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold mb-1">Fonctions principales :</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.functions.map((func) => (
                        <div 
                          key={func} 
                          className="px-2 py-1 rounded-full bg-secondary text-xs font-medium"
                        >
                          {func}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {region.disorders && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold mb-1">Troubles associés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.disorders.map((disorder) => (
                        <div 
                          key={disorder} 
                          className="px-2 py-1 rounded-full bg-muted text-xs font-medium"
                        >
                          {disorder}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
        ))}
        
        {/* Connecting neural pathways */}
        {brainRegions.map((region, i) => {
          const nextRegion = brainRegions[(i + 1) % brainRegions.length];
          return (
            <motion.line
              key={`${region.id}-${nextRegion.id}`}
              x1={region.coordinates?.x || 0}
              y1={region.coordinates?.y || 0}
              x2={nextRegion.coordinates?.x || 0}
              y2={nextRegion.coordinates?.y || 0}
              stroke="#9b87f5"
              strokeWidth="0.5"
              strokeDasharray="3,3"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
            />
          );
        })}
      </motion.svg>
      
      {/* Brain legend */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center">
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 flex gap-3 flex-wrap justify-center">
          {brainRegions.map((region) => (
            <div 
              key={region.id}
              className="flex items-center gap-1 text-xs cursor-pointer"
              onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
            >
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: region.color }}
              />
              <span>{region.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Brain2DVisualization;
