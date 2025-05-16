import React, { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/loading-spinner';

// Lazy loaded component
const BrainExplorer = React.lazy(() => import('@/components/brain/BrainExplorer'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full flex justify-center py-12">
    <LoadingSpinner text="Chargement du contenu..." />
  </div>
);

interface BrainExplorerSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const BrainExplorerSection: React.FC<BrainExplorerSectionProps> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Explorez le Cerveau en Détail</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Utilisez notre explorateur interactif pour découvrir les différentes structures cérébrales, leurs fonctions et la manière dont elles interagissent.
          </p>
        </div>
        
        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <Suspense fallback={<SectionLoader />}>
            <BrainExplorer />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default BrainExplorerSection;