
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Import des composants modulaires
import {
  PresentationSection,
  SymptomsSection,
  DiagnosticSection,
  InterventionsSection,
  ResourcesSection
} from '@/components/troubles/dyscalculie';

const Dyscalculie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="icon" asChild className="mr-2">
                <Link to="/troubles">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Retour</span>
                </Link>
              </Button>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-neuro-green">Dyscalculie</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Trouble spécifique des apprentissages en mathématiques
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge variant="default" className="bg-neuro-green text-white border-none px-3 py-1 font-medium">
                  3-7% de prévalence
                </Badge>
                <Badge variant="default" className="bg-neuro-green text-white border-none px-3 py-1 font-medium">
                  Diagnostic dès 7-8 ans
                </Badge>
                <Badge variant="default" className="bg-neuro-green text-white border-none px-3 py-1 font-medium">
                  Trouble neurodéveloppemental
                </Badge>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-12">
          <Tabs defaultValue="presentation" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-5">
                <TabsTrigger value="presentation">Présentation</TabsTrigger>
                <TabsTrigger value="symptoms">Symptômes</TabsTrigger>
                <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
                <TabsTrigger value="interventions">Interventions</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Onglets avec composants modulaires */}
            <TabsContent value="presentation">
              <PresentationSection />
            </TabsContent>
            
            <TabsContent value="symptoms">
              <SymptomsSection />
            </TabsContent>
            
            <TabsContent value="diagnostic">
              <DiagnosticSection />
            </TabsContent>
            
            <TabsContent value="interventions">
              <InterventionsSection />
            </TabsContent>
            
            <TabsContent value="resources">
              <ResourcesSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dyscalculie;
