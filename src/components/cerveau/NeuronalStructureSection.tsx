import React, { Suspense } from 'react';
import { Zap, Share2, Network } from 'lucide-react';
import LoadingSpinner from '@/components/ui/loading-spinner';

// Lazy loaded component
const InteractiveNeuron = React.lazy(() => import('@/components/brain/InteractiveNeuron'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full flex justify-center py-12">
    <LoadingSpinner text="Chargement du contenu..." />
  </div>
);

const NeuronalStructureSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Structure Neuronale</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Les neurones sont les cellules fondamentales du système nerveux. Découvrez leur anatomie et leur fonctionnement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Suspense fallback={<SectionLoader />}>
              <InteractiveNeuron />
            </Suspense>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Fonctionnement d'un Neurone</h3>
            <p>
              Les neurones communiquent entre eux grâce à des signaux électriques et chimiques. Un neurone reçoit l'information par ses dendrites, l'intègre dans le corps cellulaire, puis la transmet le long de son axone jusqu'aux synapses.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-neuro-purple/10 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-neuro-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">Potentiel d'Action</h4>
                  <p className="text-sm text-muted-foreground">Signal électrique qui se propage le long de l'axone lorsque le seuil d'excitation est atteint.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-neuro-purple/10 p-2 rounded-full">
                  <Share2 className="h-5 w-5 text-neuro-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">Transmission Synaptique</h4>
                  <p className="text-sm text-muted-foreground">Processus par lequel les neurotransmetteurs sont libérés dans la fente synaptique pour communiquer avec d'autres neurones.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-neuro-purple/10 p-2 rounded-full">
                  <Network className="h-5 w-5 text-neuro-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">Plasticité Synaptique</h4>
                  <p className="text-sm text-muted-foreground">Capacité des synapses à se renforcer ou s'affaiblir en fonction de l'activité, base de l'apprentissage et de la mémoire.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuronalStructureSection;