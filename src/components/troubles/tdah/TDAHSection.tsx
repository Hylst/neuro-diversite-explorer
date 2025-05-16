import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TroubleIcon from '../common/TroubleIcon';

const TDAHSection: React.FC = () => {
  const presentationTypes = [
    {
      type: 'Inattentif',
      symptoms: ['Difficultés à maintenir l\'attention', 'Distractibilité', 'Oublis fréquents', 'Perte d\'objets']
    },
    {
      type: 'Hyperactif/Impulsif',
      symptoms: ['Agitation motrice', 'Difficultés à rester assis', 'Interruption des autres', 'Impatience']
    },
    {
      type: 'Mixte',
      symptoms: ['Combine des symptômes des deux types', 'Présentation la plus fréquente', 'Varie selon les contextes']
    }
  ];

  const ageGroups = [
    {
      age: 'Enfant',
      signs: ['Agitation constante', 'Difficultés scolaires', 'Impulsivité dans les jeux', 'Oubli du matériel']
    },
    {
      age: 'Adolescent',
      signs: ['Désorganisation', 'Procrastination', 'Difficultés à suivre des conversations', 'Prise de risque']
    },
    {
      age: 'Adulte',
      signs: ['Difficultés professionnelles', 'Problèmes d\'organisation', 'Impatience', 'Épuisement mental']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="neuro-card border-neuro-purple">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-secondary">
              <TroubleIcon trouble="tdah" className="h-6 w-6 text-neuro-purple" />
            </div>
            <CardTitle>Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDAH)</CardTitle>
          </div>
          <CardDescription>
            Trouble neurodéveloppemental caractérisé par des difficultés d'attention, 
            d'impulsivité et/ou d'hyperactivité
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Les trois présentations du TDAH:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {presentationTypes.map((presentation, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">Type {presentation.type}</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {presentation.symptoms.map((symptom, i) => (
                      <li key={i}>{symptom}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Manifestations selon l'âge:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {ageGroups.map((ageGroup, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">{ageGroup.age}</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {ageGroup.signs.map((sign, i) => (
                      <li key={i}>{sign}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/troubles/tdah">
              Explorer le TDAH en détail <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TDAHSection;