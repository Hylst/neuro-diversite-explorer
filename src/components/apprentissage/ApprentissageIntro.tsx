import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const ApprentissageIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="border-2 border-neuro-purple/20 shadow-lg">
        <CardContent className="pt-6 px-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Bienvenue dans l'espace apprentissage !</h2>
          
          <p className="mb-4">
            Saviez-vous que notre cerveau est comme un smartphone dernier cri, mais avec des applications personnalisées pour chacun ? 
            Certains ont l'appli "Mémoire Photographique Pro" tandis que d'autres disposent de "Créativité Sans Limites Premium" !
          </p>
          
          <p className="mb-4">
            La neurodiversité nous rappelle que chaque cerveau apprend différemment. Ce n'est pas un défaut, 
            c'est une fonctionnalité ! Imaginez un monde où tous les cerveaux fonctionneraient de la même façon... 
            Quel ennui cosmique ce serait !
          </p>
          
          <p className="mb-4">
            Dans cette section, nous explorons comment transformer les défis d'apprentissage en super-pouvoirs. 
            Que vous soyez enseignant, parent, ou simplement curieux de comprendre comment fonctionne votre propre 
            cerveau extraordinaire, vous trouverez ici des ressources adaptées.
          </p>
          
          <div className="bg-muted p-4 rounded-lg mt-6">
            <h3 className="font-semibold mb-2">Comment naviguer dans cette section :</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Module 1 : Fondations</strong> - Comprendre les bases de l'apprentissage neurodivergent</li>
              <li><strong>Module 2 : Boîte à outils</strong> - Des stratégies pratiques et des ressources à utiliser au quotidien</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ApprentissageIntro;