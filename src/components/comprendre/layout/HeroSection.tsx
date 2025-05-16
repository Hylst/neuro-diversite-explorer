import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  conceptsRef: React.RefObject<HTMLDivElement>;
  ressourcesRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  scrollToSection, 
  conceptsRef, 
  ressourcesRef 
}) => {
  return (
    <div className="bg-muted py-12 md:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprendre la <span className="neuro-gradient-text">neurodiversité</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Découvrez les fondements théoriques, les concepts clés et les différentes approches de la neurodiversité
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection(conceptsRef)}
            >
              Explorer les concepts
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection(ressourcesRef)}
            >
              Ressources d'apprentissage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;