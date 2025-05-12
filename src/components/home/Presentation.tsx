import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Presentation = () => {
  return (
    <Card className="bg-muted shadow-sm border-0 mb-8">
      <CardContent className="pt-6 px-6 text-center">
        <p className="text-lg text-muted-foreground">
          NeuroDiversité Explorer est une plateforme éducative interactive dédiée à la compréhension des troubles neurodéveloppementaux. 
          Elle propose des informations détaillées sur les différents troubles (DYS, TDAH, TSA, neurodégénératifs, etc.), des guides, 
          des témoignages, des outils d'auto-évaluation, et des ressources pratiques pour les personnes concernées, leurs proches, 
          et les professionnels. Découvrez, apprenez et partagez dans un espace bienveillant qui célèbre la diversité neurologique.
        </p>
      </CardContent>
    </Card>
  );
};

export default Presentation;