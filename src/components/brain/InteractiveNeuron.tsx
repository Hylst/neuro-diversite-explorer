
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface NeuronPart {
  id: string;
  name: string;
  description: string;
  coordinates: {
    x: number;
    y: number;
  };
  color: string;
}

const neuronParts: NeuronPart[] = [
  {
    id: 'soma',
    name: 'Corps cellulaire (Soma)',
    description: 'Centre métabolique du neurone qui contient le noyau et gère les fonctions vitales de la cellule.',
    coordinates: { x: 50, y: 50 },
    color: '#8B5CF6' // Purple
  },
  {
    id: 'axon',
    name: 'Axone',
    description: 'Extension longue et fine qui transmet les signaux électriques du corps cellulaire vers d\'autres neurones.',
    coordinates: { x: 75, y: 50 },
    color: '#0EA5E9' // Blue
  },
  {
    id: 'dendrites',
    name: 'Dendrites',
    description: 'Extensions ramifiées qui reçoivent les signaux des autres neurones et les transmettent au corps cellulaire.',
    coordinates: { x: 25, y: 50 },
    color: '#10B981' // Green
  },
  {
    id: 'myelin',
    name: 'Gaine de myéline',
    description: 'Couche isolante qui entoure l\'axone et accélère la transmission des signaux électriques.',
    coordinates: { x: 65, y: 50 },
    color: '#F59E0B' // Amber
  },
  {
    id: 'synapse',
    name: 'Synapse',
    description: 'Jonction où l\'information est transmise d\'un neurone à un autre par l\'intermédiaire de neurotransmetteurs.',
    coordinates: { x: 90, y: 50 },
    color: '#EC4899' // Pink
  }
];

const InteractiveNeuron = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[400px] bg-muted/30 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full max-w-full max-h-full">
          {/* Dendrites */}
          <motion.path 
            d="M10,40 Q15,30 20,35 Q25,40 25,30 M10,50 L25,50 M10,60 Q15,70 20,65 Q25,60 25,70"
            stroke="#10B981"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`${hoveredPart === 'dendrites' || activePart === 'dendrites' ? 'stroke-[1.5]' : 'stroke-1'}`}
          />
          
          {/* Cell Body (Soma) */}
          <motion.circle
            cx="40"
            cy="50"
            r="15"
            fill="#8B5CF6"
            fillOpacity="0.2"
            stroke="#8B5CF6"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${hoveredPart === 'soma' || activePart === 'soma' ? 'stroke-[1.5]' : 'stroke-1'}`}
          />
          
          {/* Nucleus */}
          <motion.circle
            cx="40"
            cy="50"
            r="5"
            fill="#8B5CF6"
            fillOpacity="0.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          
          {/* Axon */}
          <motion.line
            x1="55"
            y1="50"
            x2="85"
            y2="50"
            stroke="#0EA5E9"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className={`${hoveredPart === 'axon' || activePart === 'axon' ? 'stroke-[3]' : 'stroke-2'}`}
          />
          
          {/* Myelin Sheath */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.rect
              key={i}
              x={57 + i * 5}
              y="47"
              width="3"
              height="6"
              fill="#F59E0B"
              fillOpacity="0.7"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
              className={`${hoveredPart === 'myelin' || activePart === 'myelin' ? 'fill-opacity-90' : 'fill-opacity-70'}`}
            />
          ))}
          
          {/* Synapse */}
          <motion.circle
            cx="90"
            cy="50"
            r="3"
            fill="#EC4899"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            className={`${hoveredPart === 'synapse' || activePart === 'synapse' ? 'fill-opacity-90' : 'fill-opacity-70'}`}
          />
          
          {/* Neurotransmitters */}
          {activePart === 'synapse' && Array.from({ length: 5 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={90 + (i % 3) * 2}
              cy={52 + Math.floor(i / 3) * 2}
              r="0.5"
              fill="#EC4899"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 52 + Math.floor(i / 3) * 2, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          ))}
          
          {/* Interactive hotspots */}
          {neuronParts.map((part) => (
            <Popover
              key={part.id}
              open={activePart === part.id}
              onOpenChange={(open) => !open && setActivePart(null)}
            >
              <PopoverTrigger asChild>
                <motion.circle
                  cx={part.coordinates.x}
                  cy={part.coordinates.y}
                  r={hoveredPart === part.id || activePart === part.id ? 3 : 2}
                  fill={part.color}
                  opacity={0}
                  whileHover={{ scale: 1.5 }}
                  onMouseEnter={() => setHoveredPart(part.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => setActivePart(part.id === activePart ? null : part.id)}
                  className="cursor-pointer"
                  style={{ opacity: 0.01 }} // Make it invisible but clickable
                />
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg" style={{ color: part.color }}>{part.name}</h3>
                  <p className="text-sm">{part.description}</p>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center">
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 flex gap-3 flex-wrap justify-center">
          {neuronParts.map((part) => (
            <div 
              key={part.id}
              className="flex items-center gap-1 text-xs cursor-pointer"
              onClick={() => setActivePart(part.id === activePart ? null : part.id)}
            >
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: part.color }}
              />
              <span>{part.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Title */}
      <div className="absolute top-4 left-4">
        <h3 className="font-bold">Anatomie d'un Neurone</h3>
        <p className="text-xs text-muted-foreground">Cliquez sur les différentes parties pour en savoir plus</p>
      </div>
    </div>
  );
};

export default InteractiveNeuron;
