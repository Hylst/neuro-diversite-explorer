
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TroubleHeader, TroubleDefinition, TroubleTabsSection } from '@/components/troubles/common';
import { TroubleTypesGrid, DysTroublesSection } from '@/components/troubles/dys';
import { GlossaryLink } from '@/components/ui';
import { dysphasieData } from '@/data/troubles/dysphasie';

const Dysphasie = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <TroubleHeader 
          title="La Dysphasie"
          description="Comprendre le trouble spécifique du développement du langage oral"
          backLink="/troubles"
          iconColor="#9333ea"
        />

        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la dysphasie ?</h2>
                <p className="text-muted-foreground mb-4">
                  La <GlossaryLink term='dysphasie'>dysphasie</GlossaryLink> est un <GlossaryLink term='trouble neurodéveloppemental'>trouble neurodéveloppemental</GlossaryLink> qui affecte spécifiquement l'acquisition et le développement du <GlossaryLink term='langage oral'>langage oral</GlossaryLink>. Ce trouble structurel, durable et persistant se manifeste dès les premiers stades du développement de l'enfant, en l'absence de trouble sensoriel, de déficience intellectuelle, ou de trouble psychologique grave.
                </p>
                <p className="text-muted-foreground mb-4">
                  Contrairement à un simple <GlossaryLink term='retard de langage'>retard de langage</GlossaryLink> qui peut se résorber avec le temps, la dysphasie est un trouble durable qui nécessite une prise en charge spécifique et adaptée. Elle touche environ 1% des enfants, avec une prévalence plus élevée chez les garçons que chez les filles.
                </p>
                <p className="text-muted-foreground mb-4">
                  Les personnes dysphasiques peuvent présenter des difficultés variables dans la formulation, la compréhension ou l'utilisation du langage oral, ce qui peut considérablement affecter leur communication quotidienne, leurs apprentissages scolaires et leurs interactions sociales.
                </p>
              </div>

              <DysTroublesSection 
                title="Les différents types de dysphasie"
                introduction="La dysphasie peut prendre différentes formes selon les composantes du langage qui sont affectées. On distingue généralement plusieurs types:"
                types={dysphasieData.types}
                conclusion="Il est important de noter que ces catégories ne sont pas hermétiques et qu'une personne peut présenter une forme mixte combinant plusieurs aspects des différents types de dysphasie."
              />

              <TroubleTabsSection 
                tabs={dysphasieData.tabs}
              />
            </div>

            {/* Sidebar content */}
            <div className="space-y-6">
              {dysphasieData.sidebar}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dysphasie;
