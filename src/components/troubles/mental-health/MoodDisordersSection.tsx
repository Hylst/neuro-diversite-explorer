import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, CloudRain } from 'lucide-react';

/**
 * Component for Mood Disorders section with detailed information
 * about bipolar disorder and depression in children and adolescents
 */
const MoodDisordersSection = () => {
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-blue">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-neuro-blue" />
            Troubles de l'Humeur
          </CardTitle>
          <CardDescription>
            Les troubles de l'humeur affectent l'état émotionnel de base et peuvent considérablement impacter le fonctionnement quotidien
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="bipolaire" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-2">
            <TabsTrigger value="bipolaire">Trouble bipolaire</TabsTrigger>
            <TabsTrigger value="depression">Dépression et dysrégulation</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="bipolaire">
          <Card className="neuro-card border-neuro-orange">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-neuro-orange" />
                Trouble bipolaire
              </CardTitle>
              <CardDescription>
                Alternance entre épisodes maniaques et dépressifs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Épisodes maniaques :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Humeur élevée, expansive ou irritable</li>
                    <li>Estime de soi grandiose</li>
                    <li>Diminution du besoin de sommeil</li>
                    <li>Logorrhée (parole rapide)</li>
                    <li>Fuite des idées</li>
                    <li>Distractibilité</li>
                    <li>Augmentation de l'activité dirigée vers un but</li>
                    <li>Engagement dans des activités à risque</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Épisodes dépressifs :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Humeur dépressive ou irritabilité</li>
                    <li>Anhédonie (perte d'intérêt)</li>
                    <li>Troubles du sommeil</li>
                    <li>Troubles de l'appétit</li>
                    <li>Fatigue ou perte d'énergie</li>
                    <li>Sentiments de culpabilité</li>
                    <li>Difficultés de concentration</li>
                    <li>Idées suicidaires</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Causes et facteurs de risque :</h4>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <ul className="list-disc pl-5 space-y-1 text-orange-800 text-sm">
                    <li><strong>Hérédité :</strong> Forte composante génétique</li>
                    <li><strong>Anomalies neurochimiques :</strong> Déséquilibres des neurotransmetteurs</li>
                    <li><strong>Anomalies anatomiques :</strong> Modifications structurelles cérébrales</li>
                    <li><strong>Stress :</strong> Événements de vie traumatisants</li>
                    <li><strong>Substances :</strong> Certains médicaments, drogues</li>
                    <li><strong>Cannabis :</strong> Usage précoce augmente le risque</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Diagnostic différentiel :</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Important :</strong> Le trouble bipolaire est rare chez les jeunes enfants. 
                    Il est souvent confondu avec le trouble disruptif avec dysrégulation de l'humeur (DMDD), 
                    qui se caractérise par une irritabilité chronique sans épisodes maniaques distincts.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Stabilisateurs de l'humeur</h5>
                    <p className="text-xs text-blue-800">Lithium, valproate, carbamazépine</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Antidépresseurs</h5>
                    <p className="text-xs text-green-800">Avec précaution, risque de virage maniaque</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                    <h5 className="font-medium text-purple-900 text-sm mb-1">Psychothérapie</h5>
                    <p className="text-xs text-purple-800">TCC, thérapie familiale, psychoéducation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="depression">
          <Card className="neuro-card border-neuro-purple">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CloudRain className="h-5 w-5 text-neuro-purple" />
                Dépression et trouble disruptif avec dysrégulation de l'humeur
              </CardTitle>
              <CardDescription>
                Troubles dépressifs et de régulation émotionnelle chez l'enfant et l'adolescent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Dépression majeure :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Humeur dépressive persistante</li>
                    <li>Perte d'intérêt pour les activités</li>
                    <li>Troubles du sommeil (insomnie ou hypersomnie)</li>
                    <li>Troubles de l'appétit</li>
                    <li>Fatigue ou perte d'énergie</li>
                    <li>Sentiments de dévalorisation</li>
                    <li>Difficultés de concentration</li>
                    <li>Pensées suicidaires</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Particularités chez l'enfant :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Irritabilité plutôt que tristesse</li>
                    <li>Plaintes somatiques fréquentes</li>
                    <li>Régression comportementale</li>
                    <li>Difficultés scolaires soudaines</li>
                    <li>Retrait social</li>
                    <li>Troubles du comportement</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Trouble disruptif avec dysrégulation de l'humeur (DMDD) :</h4>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <ul className="list-disc pl-5 space-y-1 text-purple-800 text-sm">
                    <li><strong>Critères :</strong> Crises de colère sévères et récurrentes</li>
                    <li><strong>Fréquence :</strong> Au moins 3 fois par semaine</li>
                    <li><strong>Humeur :</strong> Irritabilité persistante entre les crises</li>
                    <li><strong>Âge :</strong> Début avant 10 ans, diagnostic entre 6 et 18 ans</li>
                    <li><strong>Durée :</strong> Symptômes présents depuis au moins 12 mois</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Facteurs de risque :</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-900 text-sm mb-1">Facteurs biologiques</h5>
                    <ul className="text-xs text-red-800 space-y-1">
                      <li>• Antécédents familiaux</li>
                      <li>• Déséquilibres neurochimiques</li>
                      <li>• Maladies chroniques</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <h5 className="font-medium text-orange-900 text-sm mb-1">Facteurs psychosociaux</h5>
                    <ul className="text-xs text-orange-800 space-y-1">
                      <li>• Traumatismes</li>
                      <li>• Stress chronique</li>
                      <li>• Problèmes familiaux</li>
                      <li>• Harcèlement scolaire</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Risque suicidaire :</h4>
                <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                  <p className="text-sm text-red-900">
                    <strong>⚠️ Attention :</strong> La dépression chez l'enfant et l'adolescent s'accompagne 
                    d'un risque accru de comportement suicidaire. Une évaluation et un suivi réguliers 
                    sont essentiels, particulièrement lors de l'initiation d'un traitement antidépresseur.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Psychothérapie</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• TCC (première ligne)</li>
                      <li>• Thérapie interpersonnelle</li>
                      <li>• Thérapie familiale</li>
                      <li>• Thérapie de groupe</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Médicaments</h5>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• ISRS (fluoxétine, sertraline)</li>
                      <li>• Surveillance étroite</li>
                      <li>• Évaluation risque/bénéfice</li>
                      <li>• Suivi régulier</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MoodDisordersSection;