import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onLearnMoreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onLearnMoreClick }) => {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Le <span className="text-neuro-purple">Cerveau</span> Humain
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explorez l'organe le plus complexe du corps humain à travers une expérience interactive et éducative
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-neuro-purple hover:bg-neuro-purple/90"
                onClick={onExploreClick}
              >
                Explorer en 3D <Brain className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onLearnMoreClick}
              >
                En savoir plus <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;