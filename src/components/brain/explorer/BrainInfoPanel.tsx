
import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BrainRegion } from '../types/brain-types';

interface BrainInfoPanelProps {
  activeRegion: BrainRegion | null;
  onClose: () => void;
}

const BrainInfoPanel: React.FC<BrainInfoPanelProps> = ({ activeRegion, onClose }) => {
  if (!activeRegion) {
    return (
      <div className="flex items-center justify-center h-full text-center">
        <div className="space-y-4">
          <Brain className="h-12 w-12 text-neuro-purple mx-auto opacity-40" />
          <p className="text-muted-foreground">
            Sélectionnez une région cérébrale pour afficher des informations détaillées.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: activeRegion.color }}></div>
        <h3 className="text-xl font-bold">{activeRegion.name}</h3>
      </div>
      
      <Card className="bg-secondary/50 border-none">
        <div className="p-4">
          <p>{activeRegion.description}</p>
        </div>
      </Card>
      
      {activeRegion.functions && (
        <div>
          <h4 className="font-semibold mb-2">Fonctions principales</h4>
          <ul className="list-disc pl-5 space-y-1">
            {activeRegion.functions.map((func, idx) => (
              <li key={idx}>{func}</li>
            ))}
          </ul>
        </div>
      )}
      
      {activeRegion.disorders && (
        <div>
          <h4 className="font-semibold mb-2">Troubles associés</h4>
          <ul className="list-disc pl-5 space-y-1">
            {activeRegion.disorders.map((disorder, idx) => (
              <li key={idx}>{disorder}</li>
            ))}
          </ul>
        </div>
      )}
      
      <Button variant="outline" className="w-full" onClick={onClose}>
        Revenir à la vue d'ensemble
      </Button>
    </div>
  );
};

export default BrainInfoPanel;
