
import React from 'react';
import ForumCategory, { ForumCategoryProps, getIconForCategory } from './ForumCategory';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, School, Users } from 'lucide-react';

interface ForumCategoriesTabProps {
  categories: ForumCategoryProps[];
}

// Exemples de sujets par catégories pour enrichir le contenu
export const getExampleTopics = (categoryId: string): string[] => {
  switch (categoryId) {
    case 'temoignages':
      return [
        "Mon parcours de diagnostic tardif à 35 ans",
        "Comment j'ai appris à gérer ma sensibilité sensorielle",
        "Ma vie professionnelle avec le TDAH : défis et réussites",
        "Parentalité et neurodiversité : mon expérience"
      ];
    case 'experts':
      return [
        "Différence entre TDAH chez l'enfant et l'adulte ?",
        "Comment expliquer la neurodiversité à mon employeur ?",
        "Quelles approches thérapeutiques pour la dyslexie ?",
        "Les médicaments pour le TDAH : effets secondaires et bénéfices"
      ];
    case 'famille':
      return [
        "Comment soutenir mon enfant autiste pendant les fêtes de famille",
        "Communication avec les grands-parents sur la neurodiversité",
        "Fratrie et neurodiversité : équilibrer l'attention",
        "Routines familiales adaptées aux besoins neurodivergents"
      ];
    case 'scolarite':
      return [
        "PAP, PPS, AESH : quel dispositif pour mon enfant ?",
        "Comment collaborer efficacement avec les enseignants",
        "Adaptations pour les examens et contrôles",
        "Harcèlement scolaire : prévention et solutions"
      ];
    case 'professionnel':
      return [
        "Révéler ou non son diagnostic au travail ?",
        "Aménagements de poste : mes droits et démarches",
        "Entrepreneuriat et neurodiversité",
        "Gestion du temps et organisation au travail"
      ];
    case 'diagnostic':
      return [
        "Parcours de diagnostic pour adultes : par où commencer ?",
        "Coûts et remboursements des évaluations",
        "Quels professionnels consulter selon les troubles ?",
        "Après le diagnostic : quelles étapes ?"
      ];
    default:
      return [];
  }
};

// Ajout de badges pour catégoriser les discussions (populaire, nouveau, officiel)
export const getCategoryBadges = (categoryId: string) => {
  switch (categoryId) {
    case 'temoignages':
      return <Badge variant="secondary" className="ml-2">Très actif</Badge>;
    case 'experts':
      return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 ml-2">Vérifié</Badge>;
    case 'diagnostic':
      return <Badge variant="outline" className="bg-blue-100 text-blue-800 ml-2">Ressources</Badge>;
    case 'scolarite':
      return <Badge variant="outline" className="bg-green-100 text-green-800 ml-2">Nouveau</Badge>;
    default:
      return null;
  }
};

const ForumCategoriesTab: React.FC<ForumCategoriesTabProps> = ({ categories }) => {
  return (
    <div className="space-y-6 mt-4">
      {/* Section des catégories principales */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Catégories principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories
            .filter(cat => ['temoignages', 'experts', 'famille', 'scolarite'].includes(cat.id))
            .map((category) => (
              <ForumCategory 
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                topics={category.topics}
                icon={category.icon}
                exampleTopics={getExampleTopics(category.id)}
                badge={getCategoryBadges(category.id)}
                onClick={category.onClick}
              />
            ))}
        </div>
      </div>
      
      {/* Section des catégories spécialisées */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Catégories spécialisées</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories
            .filter(cat => ['professionnel', 'diagnostic'].includes(cat.id))
            .map((category) => (
              <ForumCategory 
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                topics={category.topics}
                icon={category.icon}
                exampleTopics={getExampleTopics(category.id)}
                badge={getCategoryBadges(category.id)}
                onClick={category.onClick}
              />
            ))}
        </div>
      </div>
      
      {/* Liens vers les aides spécifiques */}
      <div className="mt-6 bg-muted/50 p-4 rounded-lg">
        <h3 className="text-base font-medium mb-2">Ressources recommandées</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 p-2 bg-background rounded border hover:border-primary cursor-pointer transition-colors">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  <span>Guide des démarches administratives</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Explications sur les dossiers MDPH, RQTH, etc.</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 p-2 bg-background rounded border hover:border-primary cursor-pointer transition-colors">
                  <School className="h-4 w-4 text-muted-foreground" />
                  <span>Droits en milieu scolaire</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Informations sur les adaptations et aménagements scolaires</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 p-2 bg-background rounded border hover:border-primary cursor-pointer transition-colors">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>Groupes de soutien locaux</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Trouvez des groupes de soutien près de chez vous</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default ForumCategoriesTab;
