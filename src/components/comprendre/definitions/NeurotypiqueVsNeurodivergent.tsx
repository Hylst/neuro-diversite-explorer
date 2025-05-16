import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const NeurotypiqueVsNeurodivergent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-neuro-purple" />
            <span>Neurotypique vs Neurodivergent</span>
          </CardTitle>
          <CardDescription>Comprendre la différence</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Neurotypique</strong> désigne les personnes dont le développement neurologique correspond aux schémas considérés comme "standards". 
          </p>
          <p className="mt-2">
            <strong>Neurodivergent</strong> fait référence aux personnes dont le cerveau fonctionne différemment de la norme statistique, comme les personnes avec TDAH, autisme, dyslexie et autres conditions neurologiques.
          </p>
          <p className="mt-2">
            Ces termes s'inscrivent dans une vision de la neurodiversité comme partie intégrante de la diversité humaine, plutôt que comme pathologie.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NeurotypiqueVsNeurodivergent;