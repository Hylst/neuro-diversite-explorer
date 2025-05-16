import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TroubleIcon from '../common/TroubleIcon';

const TSASection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="neuro-card border-neuro-green">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-secondary">
              <TroubleIcon trouble="tsa" className="h-6 w-6 text-neuro-green" />
            </div>
            <CardTitle>Trouble du Spectre de l'Autisme (TSA)</CardTitle>
          </div>
          <CardDescription>
            Condition neurodéveloppementale caractérisée par des différences dans la communication sociale
            et des particularités sensorielles et comportementales
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            Le concept de "spectre" souligne la grande diversité des manifestations de l'autisme, 
            qui varient considérablement d'une personne à l'autre en termes d'intensité des traits et de besoins de soutien.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Caractéristiques principales:</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Différences dans la communication sociale et les interactions</li>
                <li>Intérêts spécifiques souvent intenses et focalisés</li>
                <li>Sensibilité sensorielle différente (hyper ou hyposensibilité)</li>
                <li>Besoin de routines et réactions au changement</li>
                <li>Mouvements répétitifs ou stimming (autorégulation)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Forces souvent associées:</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Attention aux détails et excellente mémoire</li>
                <li>Pensée logique et analytique</li>
                <li>Expertise approfondie dans les domaines d'intérêt</li>
                <li>Franchise et honnêteté</li>
                <li>Perception différente et créativité</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Parcours de diagnostic:</h4>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Le diagnostic de TSA est établi par une équipe pluridisciplinaire (psychiatre, psychologue, orthophoniste, 
                psychomotricien...) à l'aide d'observations cliniques et d'outils standardisés. De nombreuses personnes 
                reçoivent un diagnostic tardif, notamment les femmes et les personnes présentant moins de traits visibles.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/troubles/autisme-detail">
              Explorer l'autisme en détail <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TSASection;