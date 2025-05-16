import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const GlossaireTermes: React.FC = () => {
  const termes = [
    {
      term: "Neurodiversité",
      definition: "Concept selon lequel les variations neurologiques font partie de la diversité humaine naturelle"
    },
    {
      term: "Spectre",
      definition: "Éventail continu de caractéristiques ou de traits, sans frontières nettes entre les catégories"
    },
    {
      term: "Comorbidité",
      definition: "Présence simultanée de plusieurs troubles ou conditions chez une même personne"
    },
    {
      term: "Fonctions exécutives",
      definition: "Ensemble de processus cognitifs permettant la planification, l'organisation et l'exécution des tâches"
    },
    {
      term: "Stimming",
      definition: "Comportements répétitifs d'autostimulation qui aident à réguler les émotions ou les sensations"
    },
    {
      term: "Hypersensibilité",
      definition: "Sensibilité accrue aux stimuli sensoriels (bruits, lumières, textures...)"
    },
    {
      term: "Hyposensibilité",
      definition: "Réactivité réduite aux stimuli sensoriels, pouvant conduire à rechercher des sensations plus intenses"
    },
    {
      term: "Masking/Camouflage",
      definition: "Effort conscient de dissimuler les traits neurodivergents pour paraître plus neurotypique"
    },
    {
      term: "Double empathie",
      definition: "Théorie expliquant les difficultés de communication entre personnes neurotypiques et neurodivergentes comme mutuelles"
    },
    {
      term: "Monotropisme",
      definition: "Tendance à concentrer l'attention sur un nombre limité d'intérêts à la fois, souvent associée à l'autisme"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-neuro-purple" />
            <span>Glossaire des termes essentiels</span>
          </CardTitle>
          <CardDescription>Comprendre le vocabulaire de la neurodiversité</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {termes.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <dt className="font-semibold">{item.term}</dt>
                <dd className="text-muted-foreground">{item.definition}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GlossaireTermes;