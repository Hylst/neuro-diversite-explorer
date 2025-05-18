import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import TroubleIcon, { TroubleIconType } from './TroubleIcon';

export interface TroubleHeaderProps {
  title: string;
  description: string;
  trouble?: TroubleIconType;
  iconColor?: string;
  backLink?: string;
  onBackClick?: () => void;
}

export const TroubleHeader: React.FC<TroubleHeaderProps> = ({ 
  title, 
  description, 
  trouble,
  iconColor,
  backLink = '/troubles',
  onBackClick
}) => {
  // Version avec style centré pour les pages principales
  if (!trouble) {
    return (
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link to={backLink}>
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Retour</span>
              </Link>
            </Button>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title.split(' ').map((word, index) => 
                index === title.split(' ').length - 1 ? 
                  <span key={index}><span className="neuro-gradient-text">{word}</span></span> : 
                  <span key={index}>{word} </span>
              )}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  // Version avec icône pour les pages de troubles spécifiques
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <Button 
        variant="ghost" 
        size="icon" 
        asChild={!onBackClick} 
        className="w-fit"
        onClick={onBackClick}
      >
        {onBackClick ? (
          <ArrowLeft className="h-6 w-6" />
        ) : (
          <Link to={backLink}>
            <ArrowLeft className="h-6 w-6" />
          </Link>
        )}
      </Button>
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <TroubleIcon trouble={trouble} className="h-8 w-8" color={iconColor} />
          <span>{title}</span>
        </h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};