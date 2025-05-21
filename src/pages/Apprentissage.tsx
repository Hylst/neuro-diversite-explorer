import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, School, Users, Brain, Heart } from 'lucide-react';

// Importation des composants modulaires
import ApprentissageIntro from '@/components/apprentissage/ApprentissageIntro';
import FondationsApprentissage from '@/components/apprentissage/FondationsApprentissage';
import BoiteOutils from '@/components/apprentissage/BoiteOutils';
import StrategiesMatiere from '@/components/apprentissage/StrategiesMatiere';
import EquipeGagnante from '@/components/apprentissage/EquipeGagnante';
import ZoomSpecialNeurodiversite from '@/components/apprentissage/ZoomSpecialNeurodiversite';
import HygieneVie from '@/components/apprentissage/HygieneVie';

import ApprentissageSubNav from '@/components/apprentissage/ApprentissageSubNav';

const Apprentissage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="neuro-gradient-text">Apprentissage</span> et neurodiversité
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Découvrez des stratégies adaptées et des outils pratiques pour faciliter l'apprentissage des personnes neurodivergentes
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          {/* Introduction générale */}
          <ApprentissageIntro />
          
          <div className="mt-16">
            <Tabs defaultValue="fondations" className="w-full">
              <ApprentissageSubNav />
              
              <TabsContent value="fondations">
                <FondationsApprentissage />
              </TabsContent>
              
              <TabsContent value="outils">
                <BoiteOutils />
              </TabsContent>
              
              <TabsContent value="strategies">
                <StrategiesMatiere />
              </TabsContent>
              
              <TabsContent value="equipe">
                <EquipeGagnante />
              </TabsContent>

              <TabsContent value="zoom">
                <ZoomSpecialNeurodiversite />
              </TabsContent>
              
              <TabsContent value="hygiene">
                <HygieneVie />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apprentissage;