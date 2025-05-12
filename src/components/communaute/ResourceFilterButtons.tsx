
import React from 'react';
import { Button } from '@/components/ui/button';

interface ResourceFilterButtonsProps {
  onFilterClick: (type: string, region: string) => void;
}

const ResourceFilterButtons = ({ onFilterClick }: ResourceFilterButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 mt-8 justify-center">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onFilterClick('', '')}
      >
        Tous
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onFilterClick('Association', '')}
      >
        Associations
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onFilterClick('Professionnel', '')}
      >
        Professionnels
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onFilterClick('Communauté', '')}
      >
        Groupes d'entraide
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onFilterClick('', 'En ligne')}
      >
        Services en ligne
      </Button>
    </div>
  );
};

export default ResourceFilterButtons;
