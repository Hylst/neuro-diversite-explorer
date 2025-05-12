
import React from 'react';
import { Button } from '@/components/ui/button';

interface EventTypeFilterProps {
  selectedType: string;
  onSelectType: (type: string) => void;
}

const EventTypeFilter = ({ selectedType, onSelectType }: EventTypeFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center">
      <Button 
        variant={selectedType === "tous" ? "default" : "outline"} 
        size="sm"
        onClick={() => onSelectType("tous")}
      >
        Tous
      </Button>
      <Button 
        variant={selectedType === "conférence" ? "default" : "outline"} 
        size="sm"
        onClick={() => onSelectType("conférence")}
      >
        Conférences
      </Button>
      <Button 
        variant={selectedType === "atelier" ? "default" : "outline"} 
        size="sm"
        onClick={() => onSelectType("atelier")}
      >
        Ateliers
      </Button>
      <Button 
        variant={selectedType === "sensibilisation" ? "default" : "outline"} 
        size="sm"
        onClick={() => onSelectType("sensibilisation")}
      >
        Sensibilisation
      </Button>
      <Button 
        variant={selectedType === "rencontre" ? "default" : "outline"} 
        size="sm"
        onClick={() => onSelectType("rencontre")}
      >
        Rencontres
      </Button>
    </div>
  );
};

export default EventTypeFilter;
