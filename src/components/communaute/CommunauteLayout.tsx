
import React from 'react';

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
      <div className="container py-12">
        {children}
      </div>
    </>
  );
};

export default CommunauteLayout;
