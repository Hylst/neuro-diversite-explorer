import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TroubleHeaderProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const TroubleHeader: React.FC<TroubleHeaderProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="bg-muted py-12 md:py-20">
      <div className="container">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link to="/troubles">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Retour</span>
            </Link>
          </Button>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {icon && <span className="mr-2">{icon}</span>}
            {title.startsWith('La') || title.startsWith('Le') ? (
              <>
                {title.split(' ')[0]}{' '}
                <span className="neuro-gradient-text">
                  {title.split(' ').slice(1).join(' ')}
                </span>
              </>
            ) : (
              <>
                La <span className="neuro-gradient-text">{title}</span>
              </>
            )}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TroubleHeader;