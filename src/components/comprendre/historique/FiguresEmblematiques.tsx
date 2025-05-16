import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const FiguresEmblematiques: React.FC = () => {
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
            <Users className="h-5 w-5 text-neuro-purple" />
            <span>Figures emblématiques</span>
          </CardTitle>
          <CardDescription>Penseurs et militants qui ont façonné le mouvement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-1">Judy Singer</h3>
              <p className="text-sm text-muted-foreground">Sociologue australienne qui a popularisé le terme "neurodiversité" dans les années 1990, contribuant à lancer le mouvement.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-1">Steve Silberman</h3>
              <p className="text-sm text-muted-foreground">Auteur de "NeuroTribes", ouvrage majeur retraçant l'histoire de l'autisme et du mouvement pour la neurodiversité.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-1">Temple Grandin</h3>
              <p className="text-sm text-muted-foreground">Scientifique autiste dont les écrits ont aidé à comprendre la perception sensorielle et la pensée visuelle chez les personnes autistes.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-1">Nick Walker</h3>
              <p className="text-sm text-muted-foreground">Théoricien et éducateur autiste qui a développé le concept de "neuroqueer" et approfondi la théorie de la neurodiversité.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FiguresEmblematiques;