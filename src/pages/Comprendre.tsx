import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TabsContent } from '@/components/ui/tabs';

// Import des composants modulaires
import {
  HeroSection,
  TabsContainer,
  DefinitionsTab,
  CerveauTab,
  HistoriqueTab,
  StatistiquesTab,
  ApprochesTab,
  RessourcesSection
} from '@/components/comprendre';

// Import des animations
import { fadeIn } from '@/lib/animations';

const Comprendre: React.FC = () => {
  // Références pour le défilement
  const conceptsRef = useRef<HTMLDivElement>(null);
  const ressourcesRef = useRef<HTMLDivElement>(null);

  // Fonction pour faire défiler vers une section
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Section Héro */}
      <HeroSection 
        scrollToSection={scrollToSection}
        conceptsRef={conceptsRef}
        ressourcesRef={ressourcesRef}
      />

      {/* Section Concepts */}
      <motion.div 
        ref={conceptsRef}
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Concepts fondamentaux</h2>
          
          <TabsContainer>
            <TabsContent value="definitions">
              <DefinitionsTab />
            </TabsContent>
            
            <TabsContent value="cerveau">
              <CerveauTab />
            </TabsContent>
            
            <TabsContent value="historique">
              <HistoriqueTab />
            </TabsContent>
            
            <TabsContent value="statistiques">
              <StatistiquesTab />
            </TabsContent>
            
            <TabsContent value="approches">
              <ApprochesTab />
            </TabsContent>
          </TabsContainer>
        </div>
      </motion.div>

      {/* Section Ressources */}
      <motion.div 
        ref={ressourcesRef}
        className="py-12 bg-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Ressources d'apprentissage</h2>
          <RessourcesSection />
        </div>
      </motion.div>
    </div>
  );
};

export default Comprendre;