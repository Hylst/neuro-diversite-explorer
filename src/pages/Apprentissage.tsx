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

const Apprentissage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
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
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-3xl grid-cols-6">
                  <TabsTrigger value="fondations" onClick={scrollToTop} className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Fondations
                  </TabsTrigger>
                  <TabsTrigger value="outils" onClick={scrollToTop} className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Outils
                  </TabsTrigger>
                  <TabsTrigger value="strategies" onClick={scrollToTop} className="flex items-center gap-2">
                    <School className="h-4 w-4" />
                    Matières & Classes
                  </TabsTrigger>
                  <TabsTrigger value="equipe" onClick={scrollToTop} className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Équipe Gagnante
                  </TabsTrigger>
                  <TabsTrigger value="zoom" onClick={scrollToTop} className="flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Neurodiversité
                  </TabsTrigger>
                  <TabsTrigger value="hygiene" onClick={scrollToTop} className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Hygiène de vie
                  </TabsTrigger>
                </TabsList>
              </div>
              
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