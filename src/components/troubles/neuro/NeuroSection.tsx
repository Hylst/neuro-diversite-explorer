import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TroubleIcon from '../common/TroubleIcon';

const NeuroSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Troubles neurodégénératifs et post-traumatiques</h2>
        <p className="text-muted-foreground mt-2">
          Ces troubles concernent la dégénérescence ou les lésions du système nerveux, entraînant des modifications cognitives et comportementales
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Card className="neuro-card border-neuro-red">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary">
                <TroubleIcon trouble="neurodegeneratifs" className="h-6 w-6 text-neuro-red" />
              </div>
              <CardTitle>Maladies neurodégénératives</CardTitle>
            </div>
            <CardDescription>
              Conditions progressives affectant les cellules nerveuses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Types principaux:</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Maladie d'Alzheimer:</span> Troubles de la mémoire, désorientation, changements de personnalité</li>
                <li><span className="font-medium">Maladie de Parkinson:</span> Tremblements, rigidité musculaire, lenteur des mouvements</li>
                <li><span className="font-medium">Sclérose en plaques:</span> Fatigue, troubles visuels, problèmes de coordination</li>
                <li><span className="font-medium">Maladie de Huntington:</span> Mouvements involontaires, troubles cognitifs et psychiatriques</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Impact neuropsychologique:</h4>
              <p className="text-sm text-muted-foreground">
                Ces maladies provoquent des déficits progressifs dans diverses fonctions cognitives comme la mémoire, 
                l'attention, les fonctions exécutives ou le langage, nécessitant des adaptations continues de l'environnement 
                et des stratégies de communication.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/troubles/neurodegeneratifs">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="neuro-card border-neuro-blue">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary">
                <TroubleIcon trouble="lesions-cerebrales" className="h-6 w-6 text-neuro-blue" />
              </div>
              <CardTitle>Troubles post-traumatiques cérébraux</CardTitle>
            </div>
            <CardDescription>
              Conséquences neurologiques suite à des lésions cérébrales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Causes fréquentes:</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Accidents vasculaires cérébraux (AVC)</li>
                <li>Traumatismes crâniens (accidents, chutes, sports)</li>
                <li>Anoxie cérébrale (privation d'oxygène)</li>
                <li>Infections neurologiques (encéphalites, méningites)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Conséquences possibles:</h4>
              <p className="text-sm text-muted-foreground">
                Les lésions cérébrales peuvent entraîner divers déficits cognitifs et comportementaux: troubles 
                de l'attention, difficultés de mémoire, difficultés de planification, changements émotionnels, 
                altérations de la personnalité. Contrairement aux maladies neurodégénératives, une amélioration est 
                souvent possible grâce à la plasticité cérébrale et à la rééducation.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/troubles/lesions-cerebrales">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Différences avec les troubles neurodéveloppementaux</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Troubles neurodéveloppementaux:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Présents dès la naissance ou l'enfance</li>
              <li>Résultent d'anomalies dans le développement du cerveau</li>
              <li>Relativement stables dans le temps</li>
              <li>Nécessitent des adaptations permanentes</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Troubles neurodégénératifs/traumatiques:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Surviennent après un développement normal</li>
              <li>Causés par des maladies ou des traumatismes</li>
              <li>Évolutifs (dégénératifs) ou avec potentiel de récupération (traumatiques)</li>
              <li>Nécessitent des adaptations évolutives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuroSection;