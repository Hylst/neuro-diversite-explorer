import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Zap, AlertTriangle } from 'lucide-react';

/**
 * Component for Anxiety Disorders section with detailed information
 * about different types of anxiety disorders in children and adolescents
 */
const AnxietyDisordersSection = () => {
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-red">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-neuro-red" />
            Troubles Anxieux
          </CardTitle>
          <CardDescription>
            Les troubles anxieux sont caractérisés par une peur, une inquiétude ou une appréhension disproportionnée aux circonstances
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="separation" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid w-full max-w-4xl grid-cols-4">
            <TabsTrigger value="separation">Anxiété de séparation</TabsTrigger>
            <TabsTrigger value="social">Anxiété sociale</TabsTrigger>
            <TabsTrigger value="generalise">Anxiété généralisée</TabsTrigger>
            <TabsTrigger value="panique">Trouble panique</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="separation">
          <Card className="neuro-card border-neuro-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-neuro-blue" />
                Trouble d'anxiété de séparation
              </CardTitle>
              <CardDescription>
                Peur persistante et intense de la séparation d'une figure d'attachement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Manifestations principales :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Crises spectaculaires lors des séparations</li>
                    <li>Refus scolaire persistant</li>
                    <li>Plaintes somatiques (maux de tête, maux de ventre)</li>
                    <li>Cauchemars liés à la séparation</li>
                    <li>Peur excessive qu'il arrive quelque chose aux parents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Traitement :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Thérapie comportementale avec séparations systématiques</li>
                    <li>Techniques de relaxation et de gestion de l'anxiété</li>
                    <li>Implication des parents dans le processus</li>
                    <li>ISRS dans les cas sévères</li>
                    <li>Maintien progressif de la scolarisation</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Important :</strong> Le diagnostic nécessite que les symptômes persistent pendant au moins 4 semaines 
                  et causent une détresse significative ou une altération du fonctionnement.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card className="neuro-card border-neuro-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-neuro-green" />
                Trouble d'anxiété sociale
              </CardTitle>
              <CardDescription>
                Peur persistante du ridicule et de l'humiliation en contexte social
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Symptômes chez l'adolescent :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Évitement des situations sociales</li>
                    <li>Inquiétude excessive avant les événements sociaux</li>
                    <li>Refus scolaire lié aux interactions</li>
                    <li>Plaintes somatiques avant les activités sociales</li>
                    <li>Isolement social progressif</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Symptômes chez l'enfant :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Crises de colère ou pleurs</li>
                    <li>Figement en situation sociale</li>
                    <li>Retrait social marqué</li>
                    <li>Mutisme sélectif possible</li>
                    <li>Accrochage aux parents en public</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <ul className="list-disc pl-5 space-y-1 text-green-800 text-sm">
                    <li>Thérapie comportementale en première ligne</li>
                    <li>Maintien obligatoire de la scolarisation</li>
                    <li>Exposition graduelle aux situations sociales</li>
                    <li>ISRS pour les cas sévères facilitant la participation à la thérapie</li>
                    <li>Techniques de gestion de l'anxiété sociale</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Diagnostic :</strong> L'anxiété doit persister pendant ≥ 6 mois et être présente 
                  de manière cohérente dans des contextes similaires.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="generalise">
          <Card className="neuro-card border-neuro-orange">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-neuro-orange" />
                Trouble anxieux généralisé
              </CardTitle>
              <CardDescription>
                Anxiété excessive concernant diverses activités pendant au moins 6 mois
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Symptômes principaux :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Inquiétudes excessives et incontrôlables</li>
                    <li>Agitation ou sensation d'être survolté</li>
                    <li>Fatigue facile</li>
                    <li>Difficultés de concentration</li>
                    <li>Irritabilité</li>
                    <li>Tension musculaire</li>
                    <li>Troubles du sommeil</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Comorbidités fréquentes :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Trouble dépressif majeur</li>
                    <li>Trouble panique</li>
                    <li>Autres troubles anxieux</li>
                    <li>Troubles somatiques</li>
                    <li>Troubles du sommeil</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <ul className="list-disc pl-5 space-y-1 text-orange-800 text-sm">
                    <li>ISRS (inhibiteurs sélectifs de la recapture de la sérotonine)</li>
                    <li>Inhibiteurs de la recapture sérotonine-noradrénaline</li>
                    <li>Psychothérapie cognitivo-comportementale</li>
                    <li>Benzodiazépines (usage limité)</li>
                    <li>Buspirone comme alternative</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="panique">
          <Card className="neuro-card border-neuro-purple">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-neuro-purple" />
                Trouble panique
              </CardTitle>
              <CardDescription>
                Attaques de panique répétées avec anxiété anticipatoire
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Caractéristiques :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Attaques de panique récurrentes et inattendues</li>
                    <li>Anxiété anticipatoire persistante</li>
                    <li>Évitement des situations déclenchantes</li>
                    <li>Début habituel à la fin de l'adolescence</li>
                    <li>Peur de perdre le contrôle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Symptômes d'une attaque :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Palpitations cardiaques</li>
                    <li>Transpiration excessive</li>
                    <li>Tremblements</li>
                    <li>Sensation d'étouffement</li>
                    <li>Douleur thoracique</li>
                    <li>Nausées</li>
                    <li>Vertiges</li>
                    <li>Peur de mourir</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Comorbidités fréquentes :</h4>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <ul className="list-disc pl-5 space-y-1 text-purple-800 text-sm">
                    <li>Autres troubles anxieux (agoraphobie, anxiété sociale)</li>
                    <li>Trouble dépressif majeur</li>
                    <li>Trouble bipolaire</li>
                    <li>Troubles liés à l'usage de substances</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-sm text-indigo-800">
                    <strong>Approche combinée :</strong> Médicaments (ISRS, benzodiazépines à court terme) 
                    et psychothérapie (TCC, thérapie d'exposition). L'éducation du patient et de la famille 
                    est essentielle pour comprendre la nature des attaques de panique.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnxietyDisordersSection;