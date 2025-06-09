
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface CommunauteLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const CommunauteLayout = ({ children, title, subtitle }: CommunauteLayoutProps) => {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neuro-gradient-text">{title}</span> {subtitle}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Trouvez du soutien, des professionnels, des événements et des témoignages pour vous accompagner dans votre parcours
            </p>
          </div>
        </div>
      </div>
      
      {/* Disclaimer Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div className="container">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 mb-1">
                  Événements réels 2025
                </p>
                <p className="text-blue-700">
                  La section <strong>Événements</strong> présente des événements réels de neurodiversité en France pour 2025. 
                  Le <strong>Forum</strong> est encore en développement. 
                  Nous encourageons les associations, institutions et organisations à nous communiquer 
                  leurs prochains événements publics sur le thème de la neurodiversité.
                </p>
              </div>
            </div>
          </div>
        </div>
      
      <div className="container py-12">
        {children}
      </div>
    </>
  );
};

export default CommunauteLayout;
