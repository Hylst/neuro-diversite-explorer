import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const ModelesMedicalSocial: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-neuro-purple" />
            <span>Modèle médical vs Modèle social</span>
          </CardTitle>
          <CardDescription>Deux approches du handicap</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Le modèle médical</strong> considère le handicap comme un problème individuel nécessitant un traitement ou une adaptation de la personne.
          </p>
          <p className="mt-2">
            <strong>Le modèle social</strong> envisage le handicap comme résultant de l'inadaptation de la société aux besoins des personnes neurodivergentes.
          </p>
          <p className="mt-2">
            L'approche de la neurodiversité s'inscrit davantage dans le modèle social, tout en reconnaissant l'importance des soutiens et adaptations individuelles.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ModelesMedicalSocial;