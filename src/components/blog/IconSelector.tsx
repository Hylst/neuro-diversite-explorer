
import React from 'react';
import { 
  Book, FileText, Tag, Calendar, Pencil, 
  Brain, BrainCircuit, Users, UsersRound, Accessibility, BrainCog,
  Lightbulb, Heart, Activity, Puzzle, Star, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IconSelectorProps {
  selectedIcon: string;
  onSelectIcon: (icon: string) => void;
}

const icons = [
  // Icônes existantes
  { name: 'brain', component: Brain },
  { name: 'brain-circuit', component: BrainCircuit },
  { name: 'brain-cog', component: BrainCog },
  { name: 'accessibility', component: Accessibility },
  { name: 'users', component: Users },
  { name: 'users-round', component: UsersRound },
  { name: 'book', component: Book },
  { name: 'file-text', component: FileText },
  { name: 'tag', component: Tag },
  { name: 'calendar', component: Calendar },
  { name: 'pencil', component: Pencil },
  // Nouvelles icônes liées à la neurodiversité
  { name: 'lightbulb', component: Lightbulb }, // Pour représenter les idées brillantes et différentes façons de penser
  { name: 'heart', component: Heart }, // Pour l'inclusion et la compassion
  { name: 'activity', component: Activity }, // Pour symboliser l'activité cérébrale
  { name: 'puzzle', component: Puzzle }, // Symbolise les différentes pièces qui s'assemblent, diversité
  { name: 'star', component: Star }, // Pour symboliser les talents spéciaux
  { name: 'sparkles', component: Sparkles }, // Pour les capacités uniques et spéciales
];

export const IconSelector: React.FC<IconSelectorProps> = ({ selectedIcon, onSelectIcon }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
      {icons.map((icon) => {
        const IconComponent = icon.component;
        return (
          <Button
            key={icon.name}
            type="button"
            variant={selectedIcon === icon.name ? "default" : "outline"}
            className={cn(
              "flex flex-col items-center p-3 h-auto",
              selectedIcon === icon.name ? "border-primary bg-primary text-primary-foreground" : ""
            )}
            onClick={() => onSelectIcon(icon.name)}
          >
            <IconComponent className="h-6 w-6 mb-1" />
            <span className="text-xs">{icon.name}</span>
          </Button>
        );
      })}
    </div>
  );
};
