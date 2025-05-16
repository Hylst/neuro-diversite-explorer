import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NeuroplasticitySection: React.FC = () => {
  const navigate = useNavigate();
  
  // Fonction pour naviguer vers l'onglet Neuroplasticité dans la section Développement
  const navigateToPlasticityTab = () => {
    navigate('/cerveau', { state: { activeTab: 'development', activeSubTab: 'plasticity' } });
    // Faire défiler vers le haut de la page après la navigation
    window.scrollTo(0, 0);
  };
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Neuroplasticité</h2>
            <p className="text-lg">
              La neuroplasticité est la capacité du cerveau à se réorganiser en formant de nouvelles connexions neuronales tout au long de la vie.
            </p>
            <p>
              Cette propriété remarquable permet au cerveau de s'adapter aux changements, d'apprendre de nouvelles compétences et de récupérer après des lésions. La neuroplasticité est à la base de tous nos apprentissages et de notre capacité d'adaptation.
            </p>
            <p>
              Contrairement à ce que l'on pensait autrefois, le cerveau n'est pas figé après l'enfance mais continue d'évoluer et de se remodeler en fonction de nos expériences, de nos apprentissages et de notre environnement.
            </p>
            <Button variant="outline" className="mt-4" onClick={navigateToPlasticityTab}>
              En savoir plus <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Types de neuroplasticité</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Structurelle :</span> 
                    <span className="text-muted-foreground">Modifications physiques des connexions neuronales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Fonctionnelle :</span> 
                    <span className="text-muted-foreground">Réorganisation des schémas d'activité neuronale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Synaptique :</span> 
                    <span className="text-muted-foreground">Renforcement ou affaiblissement des connexions existantes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Facteurs favorisants</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Stimulation cognitive :</span> 
                    <span className="text-muted-foreground">Apprentissage, résolution de problèmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Activité physique :</span> 
                    <span className="text-muted-foreground">Augmente la production de BDNF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Sommeil de qualité :</span> 
                    <span className="text-muted-foreground">Consolidation des apprentissages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Applications cliniques</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Rééducation post-AVC :</span> 
                    <span className="text-muted-foreground">Récupération des fonctions motrices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Thérapies cognitives :</span> 
                    <span className="text-muted-foreground">Traitement des troubles mentaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Traitement des addictions :</span> 
                    <span className="text-muted-foreground">Modification des circuits de récompense</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Limites et défis</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Vieillissement :</span> 
                    <span className="text-muted-foreground">Diminution progressive de la plasticité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Pathologies neurodégénératives :</span> 
                    <span className="text-muted-foreground">Altération des mécanismes de plasticité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Plasticité maladaptative :</span> 
                    <span className="text-muted-foreground">Douleur chronique, ESPT</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroplasticitySection;