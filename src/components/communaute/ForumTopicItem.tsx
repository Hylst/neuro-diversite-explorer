
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CheckCircle, Eye, MessageCircle, Star } from 'lucide-react';
import { toast } from 'sonner';

export interface ForumTopicProps {
  id: string;
  title: string;
  author: string;
  category: string;
  date: string;
  replies: number;
  views: number;
  lastActivity: string;
  isNew: boolean;
  isSticky?: boolean;
  isResolved?: boolean;
  isPopular?: boolean;
  avatar?: string;
}

// Fonction pour générer les initiales d'un nom
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

// Fonction pour obtenir le libellé de la catégorie
const getCategoryLabel = (categoryId: string): string => {
  const categories: Record<string, string> = {
    'temoignages': 'Témoignages',
    'experts': 'Questions aux experts',
    'famille': 'Parents & Famille',
    'scolarite': 'Scolarité',
    'professionnel': 'Vie professionnelle',
    'diagnostic': 'Diagnostic',
    'administratif': 'Démarches administratives',
    'ressources': 'Ressources'
  };
  return categories[categoryId] || categoryId;
};

const ForumTopicItem: React.FC<ForumTopicProps> = ({
  id,
  title,
  author,
  category,
  date,
  replies,
  views,
  lastActivity,
  isNew,
  isSticky = false,
  isResolved = false,
  isPopular = false,
  avatar
}) => {
  return (
    <button
      className="w-full text-left border-b border-border last:border-0 py-4 px-2 hover:bg-muted/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
      onClick={() => toast.info(`Discussion ${title} - Disponible prochainement`)}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="flex-1">
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8 hidden sm:flex">
              <AvatarImage src={avatar} alt={author} />
              <AvatarFallback>{getInitials(author)}</AvatarFallback>
            </Avatar>
            
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium text-base">{title}</h3>
                <div className="flex flex-wrap gap-1">
                  {isNew && (
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary">
                      Nouveau
                    </Badge>
                  )}
                  {isSticky && (
                    <Badge variant="outline" className="text-xs bg-amber-100 text-amber-800">
                      Épinglé
                    </Badge>
                  )}
                  {isResolved && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge variant="outline" className="text-xs bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Résolu
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Cette question a reçu une réponse acceptée</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mt-1">
                <span>Par {author}</span>
                <span className="text-muted-foreground">•</span>
                <Badge variant="secondary" className="text-xs font-normal">
                  {getCategoryLabel(category)}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-28 text-sm text-center flex items-center md:justify-center">
          <MessageCircle className="h-3.5 w-3.5 text-muted-foreground md:hidden mr-1.5" />
          <span className="md:hidden font-medium mr-2">Réponses:</span>
          <span className={replies > 5 ? "font-medium" : ""}>{replies}</span>
        </div>
        
        <div className="md:w-28 text-sm text-center flex items-center md:justify-center">
          <Eye className="h-3.5 w-3.5 text-muted-foreground md:hidden mr-1.5" />
          <span className="md:hidden font-medium mr-2">Vues:</span>
          <span className={views > 100 ? "font-medium" : ""}>{views}</span>
          {isPopular && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Star className="h-3.5 w-3.5 text-amber-500 ml-1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Discussion populaire</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        
        <div className="md:w-32 text-sm md:text-right">
          <span className="md:hidden font-medium mr-2">Dernière activité:</span>
          <span className="whitespace-nowrap">{lastActivity}</span>
        </div>
      </div>
    </button>
  );
};

export default ForumTopicItem;
