import React, { useRef } from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedTopics from '@/components/home/FeaturedTopics';
import ComparativeTable from '@/components/home/ComparativeTable';
import TestimonialSection from '@/components/home/TestimonialSection';
import ResourceSection from '@/components/home/ResourceSection';
import Presentation from '@/components/home/Presentation';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Index = () => {
  // Référence pour le contenu principal
  const mainContentRef = useRef<HTMLDivElement>(null);
  
  // Fonction de défilement fluide
  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      {/* Lien d'accessibilité pour sauter au contenu principal */}
      <button onClick={scrollToContent} className="skip-to-content">
        Aller au contenu principal
      </button>

      {/* AVERTISSEMENT auteur non médecin */}
      <div className="container mt-4">
        <Alert variant="warning" className="mb-6 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
          <Info className="h-5 w-5 text-yellow-500" />
          <AlertTitle className="text-yellow-700 dark:text-yellow-300 font-medium">Avertissement</AlertTitle>
          <AlertDescription className="text-yellow-900 dark:text-yellow-100 text-sm">
            L'auteur de ce site n'est ni neuro-psychologue, ni médecin, mais une personne se documentant depuis des années, et souhaitant aider les neuro-divers en situation de difficulté, et leurs proches, à améliorer leur quotidien, en s'informant de manière accessible (gratuité, disponibilité, vulgarisation).<br/>
            <strong>Ces informations ne remplacent toutefois pas, en aucun cas, une consultation chez un spécialiste</strong>, tant chaque cas peut être complexe et demande souvent l'expertise d'un professionnel pour un diagnostic et traitement pertinent.<br/>
            Mais ces informations permettent de se donner déjà une 1ère idée des cas de figure, paramètres influents, et possibilités.
          </AlertDescription>
        </Alert>
      </div>
      
      <div ref={mainContentRef}>
      
        <HeroBanner />
        <div className="container py-6">
          <Presentation />
        </div>
        <FeaturedTopics />
        <ComparativeTable />
        <TestimonialSection />
        <ResourceSection />
        <div className="container mt-4">
          <Alert variant="warning" className="mb-6 border-amber-500 bg-amber-50 dark:bg-amber-900/20">
            <Info className="h-5 w-5 text-amber-500" />
            <AlertTitle className="text-amber-600 dark:text-amber-400 font-medium">Site en développement</AlertTitle>
            <AlertDescription className="text-amber-700 dark:text-amber-300">
              Ce site est actuellement en cours de développement. Certains contenus sont encore incomplets 
              et les témoignages présentés sont issus de personnes fictives (bien que représentatifs des expériences réelles).
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </>
  );
};

export default Index;
