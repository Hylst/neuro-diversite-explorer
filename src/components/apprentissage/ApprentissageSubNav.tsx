import React from 'react';
import { cn } from '@/lib/utils';
import { Book, Lightbulb, GraduationCap, Users, Brain, Heart } from 'lucide-react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Composant de sous-navigation pour la section Apprentissage
 * Affiche les onglets Fondations, Outils, Matières & Classes, etc.
 * avec un espacement amélioré et des icônes pour tous les éléments
 */
const ApprentissageSubNav: React.FC = () => {
  return (
    <div className="flex justify-center mb-8">
      <TabsList className="bg-muted/40 p-2 flex flex-wrap justify-center gap-3 h-auto">
        <TabsTrigger 
          value="fondations" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-background"
        >
          <Book className="h-5 w-5" />
          <span>Fondations</span>
        </TabsTrigger>
        
        <TabsTrigger 
          value="outils" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-background"
        >
          <Lightbulb className="h-5 w-5" />
          <span>Outils</span>
        </TabsTrigger>
        
        <TabsTrigger 
          value="strategies" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-background"
        >
          <GraduationCap className="h-5 w-5" />
          <span>Matières & Classes</span>
        </TabsTrigger>
        
        <TabsTrigger 
          value="equipe" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-background"
        >
          <Users className="h-5 w-5" />
          <span>Équipe Gagnante</span>
        </TabsTrigger>
        
        <TabsTrigger 
          value="zoom" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-background"
        >
          <Brain className="h-5 w-5" />
          <span>Neurodiversité</span>
        </TabsTrigger>
        
        <TabsTrigger 
          value="hygiene" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-background"
        >
          <Heart className="h-5 w-5" />
          <span>Hygiène de vie</span>
        </TabsTrigger>
      </TabsList>
    </div>
  );
};


export default ApprentissageSubNav;