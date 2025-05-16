import React, { useRef } from 'react';

// Importation des composants modulaires
import {
  HeroSection,
  BrainExplorerSection,
  NeuronalStructureSection,
  NeurotransmittersSection,
  BrainTabsSection,
  NeuroplasticitySection
} from '@/components/cerveau';

const Cerveau = () => {
  // Références pour les sections
  const brainExplorerRef = useRef<HTMLElement>(null);
  const brainTabsRef = useRef<HTMLElement>(null);
  const neurotransmittersRef = useRef<HTMLElement>(null);
  
  // Fonction de défilement fluide
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          onExploreClick={() => scrollToSection(brainExplorerRef)}
          onLearnMoreClick={() => scrollToSection(brainTabsRef)}
        />

        {/* Interactive Brain Explorer Section */}
        <BrainExplorerSection sectionRef={brainExplorerRef} />

        {/* Neuronal Structure Section */}
        <NeuronalStructureSection />

        {/* Neurotransmitters Section */}
        <NeurotransmittersSection sectionRef={neurotransmittersRef} />

        {/* Tabbed Content Section */}
        <BrainTabsSection sectionRef={brainTabsRef} />

        {/* Neuroplasticity Section */}
        <NeuroplasticitySection />
      </main>
    </div>
  );
};

export default Cerveau;
