
import React, { useState } from 'react';
import { MessageCircle, User, Users, PenLine, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';

export interface ForumCategoryProps {
  id: string;
  name: string;
  description: string;
  topics: number;
  icon: React.ReactNode;
  exampleTopics?: string[];
  badge?: React.ReactNode;
}

const ForumCategory: React.FC<ForumCategoryProps> = ({ 
  id, 
  name, 
  description, 
  topics, 
  icon, 
  exampleTopics = [],
  badge
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border hover:border-primary/30 transition-colors w-full">
      <button
        className="text-left p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onClick={() => toast.info(`Catégorie ${name} - Disponible prochainement`)}
      >
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold">{name}</h3>
              {badge}
            </div>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
            <div className="mt-2 text-xs text-muted-foreground flex items-center">
              <span>{topics} discussions</span>
              {exampleTopics && exampleTopics.length > 0 && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className="ml-3 text-primary flex items-center hover:underline"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Masquer les sujets' : 'Voir les sujets'}
                  {isExpanded ? <ChevronUp className="h-3 w-3 ml-1" /> : <ChevronDown className="h-3 w-3 ml-1" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </button>

      {isExpanded && exampleTopics && exampleTopics.length > 0 && (
        <div className="px-4 pb-3 border-t border-border mt-2 pt-2">
          <ul className="text-sm space-y-1.5">
            {exampleTopics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <MessageCircle className="h-3 w-3 mr-2 mt-1 text-muted-foreground" />
                <span className="text-muted-foreground hover:text-foreground cursor-pointer">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const getIconForCategory = (categoryId: string) => {
  switch (categoryId) {
    case 'temoignages':
      return <MessageCircle className="h-5 w-5" />;
    case 'experts':
      return <User className="h-5 w-5" />;
    case 'famille':
      return <Users className="h-5 w-5" />;
    case 'scolarite':
      return <PenLine className="h-5 w-5" />;
    case 'professionnel':
      return <User className="h-5 w-5" />;
    case 'diagnostic':
      return <Search className="h-5 w-5" />;
    default:
      return <MessageCircle className="h-5 w-5" />;
  }
};

export default ForumCategory;
