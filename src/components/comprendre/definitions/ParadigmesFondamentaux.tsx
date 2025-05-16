import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const ParadigmesFondamentaux: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-neuro-purple" />
            <span>Paradigmes fondamentaux</span>
          </CardTitle>
          <CardDescription>Principes sous-jacents à la compréhension de la neurodiversité</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">La neurodiversité comme identité</h3>
            <p className="text-muted-foreground">
              Pour de nombreuses personnes, notamment autistes, la neurodivergence n'est pas seulement une condition médicale mais une partie intégrante de leur identité. Cette perspective influence profondément leur expérience du monde et leurs interactions sociales.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Diversité des besoins de soutien</h3>
            <p className="text-muted-foreground">
              Les besoins varient considérablement d'une personne à l'autre, même au sein d'une même catégorie diagnostique. Certaines personnes nécessitent peu de soutien tandis que d'autres ont besoin d'un accompagnement important au quotidien.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Le rôle de l'environnement</h3>
            <p className="text-muted-foreground">
              Les difficultés rencontrées sont souvent liées à l'inadéquation entre les caractéristiques neurologiques de la personne et son environnement plutôt qu'à un déficit intrinsèque.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ParadigmesFondamentaux;