import React, { Suspense, useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { useLocation } from 'react-router-dom';

// Lazy loaded components
const BrainStructures = React.lazy(() => import('@/components/brain/BrainStructures'));
const BrainFunctions = React.lazy(() => import('@/components/brain/BrainFunctions'));
const BrainDevelopment = React.lazy(() => import('@/components/brain/BrainDevelopment'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full flex justify-center py-12">
    <LoadingSpinner text="Chargement du contenu..." />
  </div>
);

interface BrainTabsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const BrainTabsSection: React.FC<BrainTabsSectionProps> = ({ sectionRef }) => {
  const [activeTab, setActiveTab] = useState('structures');
  const location = useLocation();
  
  // Vérifier si des paramètres d'état ont été passés pour la navigation
  useEffect(() => {
    if (location.state && location.state.activeTab) {
      setActiveTab(location.state.activeTab);
      
      // Si un sous-onglet est spécifié, il sera géré par le composant enfant
      // (par exemple BrainDevelopment)
      
      // Faire défiler vers cette section
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state, sectionRef]);
  return (
    <section ref={sectionRef} className="py-16 bg-muted">
      <div className="container">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-3xl grid-cols-3">
              <TabsTrigger value="structures">Structures</TabsTrigger>
              <TabsTrigger value="functions">Fonctions</TabsTrigger>
              <TabsTrigger value="development">Développement</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="structures">
            <Suspense fallback={<SectionLoader />}>
              <BrainStructures />
            </Suspense>
          </TabsContent>
          
          <TabsContent value="functions">
            <Suspense fallback={<SectionLoader />}>
              <BrainFunctions />
            </Suspense>
          </TabsContent>
          
          <TabsContent value="development">
            <Suspense fallback={<SectionLoader />}>
              <BrainDevelopment />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BrainTabsSection;