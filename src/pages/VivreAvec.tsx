
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import DailyLifeTips from '@/components/vivreavec/DailyLifeTips';
import ProfessionalLife from '@/components/vivreavec/ProfessionalLife';
import EducationSupport from '@/components/vivreavec/EducationSupport';
import FamilyRelationships from '@/components/vivreavec/FamilyRelationships';
import TestimonialsSection from '@/components/vivreavec/Testimonials';

const VivreAvec = () => {
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
                <span className="neuro-gradient-text">Vivre</span> avec la neurodiversité
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Conseils pratiques et stratégies pour faciliter le quotidien des personnes neurodivergentes et de leur entourage
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <Tabs defaultValue="quotidien" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-4">
                <TabsTrigger value="quotidien" onClick={scrollToTop}>Vie quotidienne</TabsTrigger>
                <TabsTrigger value="education" onClick={scrollToTop}>Scolarité</TabsTrigger>
                <TabsTrigger value="professionnel" onClick={scrollToTop}>Vie professionnelle</TabsTrigger>
                <TabsTrigger value="famille" onClick={scrollToTop}>Relations familiales</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="quotidien">
              <DailyLifeTips />
            </TabsContent>
            
            <TabsContent value="education">
              <EducationSupport />
            </TabsContent>
            
            <TabsContent value="professionnel">
              <ProfessionalLife />
            </TabsContent>
            
            <TabsContent value="famille">
              <FamilyRelationships />
            </TabsContent>
          </Tabs>
          
          <div className="mt-16">
            <TestimonialsSection />
          </div>
        </div>
      </main>    </div>
  );
};

export default VivreAvec;
