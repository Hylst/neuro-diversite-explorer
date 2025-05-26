import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Users } from 'lucide-react';

/**
 * Component for Behavior Disorders section with detailed information
 * about oppositional defiant disorder and conduct disorders
 */
const BehaviorDisordersSection = () => {
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-red">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-neuro-red" />
            Troubles du Comportement
          </CardTitle>
          <CardDescription>
            Troubles caractérisés par des comportements perturbateurs, agressifs ou antisociaux
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="oppositionnel" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-2">
            <TabsTrigger value="oppositionnel">Trouble oppositionnel</TabsTrigger>
            <TabsTrigger value="conduites">Troubles des conduites</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="oppositionnel">
          <Card className="neuro-card border-neuro-orange">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-neuro-orange" />
                Trouble oppositionnel avec provocation (TOP)
              </CardTitle>
              <CardDescription>
                Comportements récurrents négatifs, provocateurs et désobéissants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Définition et caractéristiques :</h4>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="text-sm text-orange-800 mb-2">
                    Le TOP se caractérise par un ensemble persistant de comportements négatifs, 
                    hostiles et provocateurs envers les figures d'autorité, sans violation majeure 
                    des droits d'autrui ou des normes sociales.
                  </p>
                  <p className="text-xs text-orange-700">
                    <strong>Distinction importante :</strong> Contrairement au trouble des conduites, 
                    le TOP n'implique pas de violation des droits fondamentaux d'autrui.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Symptômes principaux :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Se met souvent en colère</li>
                    <li>Conteste les adultes</li>
                    <li>Défie activement les règles</li>
                    <li>Dérange délibérément les autres</li>
                    <li>Blâme les autres pour ses erreurs</li>
                    <li>Susceptible et facilement agacé</li>
                    <li>Souvent en colère et rancunier</li>
                    <li>Méchant et vindicatif</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Manifestations par âge :</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <h5 className="font-medium text-blue-900 text-sm mb-1">Enfants (6-11 ans)</h5>
                      <ul className="text-xs text-blue-800 space-y-1">
                        <li>• Crises de colère fréquentes</li>
                        <li>• Refus d'obéir aux règles</li>
                        <li>• Disputes avec les parents</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-900 text-sm mb-1">Adolescents (12+ ans)</h5>
                      <ul className="text-xs text-green-800 space-y-1">
                        <li>• Défiance envers l'autorité</li>
                        <li>• Comportements provocateurs</li>
                        <li>• Irritabilité chronique</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Critères diagnostiques :</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <ul className="list-disc pl-5 space-y-1 text-yellow-800 text-sm">
                    <li><strong>Durée :</strong> Au moins 6 mois</li>
                    <li><strong>Fréquence :</strong> Comportements plus fréquents que la normale pour l'âge</li>
                    <li><strong>Impact :</strong> Altération significative du fonctionnement</li>
                    <li><strong>Contexte :</strong> Avec au moins une personne qui n'est pas un frère/sœur</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Comorbidités fréquentes :</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-900 text-sm mb-1">TDAH</h5>
                    <p className="text-xs text-red-800">Très fréquent (30-50%)</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                    <h5 className="font-medium text-purple-900 text-sm mb-1">Troubles anxieux</h5>
                    <p className="text-xs text-purple-800">Anxiété de séparation</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Troubles de l'humeur</h5>
                    <p className="text-xs text-blue-800">Dépression, irritabilité</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Techniques comportementales</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Gestion des contingences</li>
                      <li>• Renforcement positif</li>
                      <li>• Établissement de limites claires</li>
                      <li>• Formation parentale</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Thérapie de groupe</h5>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• Développement des compétences sociales</li>
                      <li>• Gestion de la colère</li>
                      <li>• Résolution de problèmes</li>
                      <li>• Thérapie familiale</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <p className="text-xs text-orange-800">
                    <strong>Médicaments :</strong> Parfois utilisés pour traiter les comorbidités 
                    (TDAH, anxiété, dépression) mais pas le TOP lui-même.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conduites">
          <Card className="neuro-card border-neuro-red">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-neuro-red" />
                Troubles des conduites
              </CardTitle>
              <CardDescription>
                Violation répétée des droits d'autrui et des normes sociales appropriées à l'âge
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Définition :</h4>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800">
                    Les troubles des conduites se caractérisent par un ensemble persistant de 
                    comportements qui violent les droits fondamentaux d'autrui ou les normes 
                    et règles sociales appropriées à l'âge. Le pronostic est généralement 
                    plus sombre que celui du trouble oppositionnel.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Catégories de comportements :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-red-100 p-3 rounded-lg border border-red-300">
                      <h5 className="font-medium text-red-900 text-sm mb-1">Agression envers personnes/animaux</h5>
                      <ul className="text-xs text-red-800 space-y-1">
                        <li>• Brutalise, menace ou intimide</li>
                        <li>• Initie souvent des bagarres</li>
                        <li>• Utilise des armes</li>
                        <li>• Cruauté envers les personnes</li>
                        <li>• Cruauté envers les animaux</li>
                        <li>• Vols avec confrontation</li>
                        <li>• Contrainte à l'activité sexuelle</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-lg border border-orange-300">
                      <h5 className="font-medium text-orange-900 text-sm mb-1">Destruction de biens</h5>
                      <ul className="text-xs text-orange-800 space-y-1">
                        <li>• Mise à feu délibérée</li>
                        <li>• Destruction de propriété d'autrui</li>
                        <li>• Vandalisme</li>
                        <li>• Dégradations volontaires</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                      <h5 className="font-medium text-yellow-900 text-sm mb-1">Fraude ou vol</h5>
                      <ul className="text-xs text-yellow-800 space-y-1">
                        <li>• Effraction</li>
                        <li>• Mensonges fréquents</li>
                        <li>• Vol d'objets de valeur</li>
                        <li>• Escroquerie</li>
                      </ul>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-lg border border-purple-300">
                      <h5 className="font-medium text-purple-900 text-sm mb-1">Violations graves des règles</h5>
                      <ul className="text-xs text-purple-800 space-y-1">
                        <li>• Reste dehors la nuit malgré interdiction</li>
                        <li>• Fugues répétées</li>
                        <li>• École buissonnière fréquente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Âge de début :</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Début précoce (avant 10 ans)</h5>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• Pronostic plus sombre</li>
                      <li>• Plus de risques de trouble antisocial</li>
                      <li>• Souvent associé au TDAH</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Début adolescent (après 10 ans)</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Meilleur pronostic</li>
                      <li>• Souvent lié aux pairs</li>
                      <li>• Peut être transitoire</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Facteurs de risque :</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-900 text-sm mb-1">Individuels</h5>
                    <ul className="text-xs text-red-800 space-y-1">
                      <li>• Tempérament difficile</li>
                      <li>• QI faible</li>
                      <li>• TDAH</li>
                      <li>• Troubles de l'apprentissage</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <h5 className="font-medium text-orange-900 text-sm mb-1">Familiaux</h5>
                    <ul className="text-xs text-orange-800 space-y-1">
                      <li>• Maltraitance</li>
                      <li>• Négligence</li>
                      <li>• Discipline incohérente</li>
                      <li>• Conflits familiaux</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <h5 className="font-medium text-yellow-900 text-sm mb-1">Sociaux</h5>
                    <ul className="text-xs text-yellow-800 space-y-1">
                      <li>• Pauvreté</li>
                      <li>• Pairs déviants</li>
                      <li>• Quartier défavorisé</li>
                      <li>• Exposition à la violence</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Évolution et pronostic :</h4>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <ul className="list-disc pl-5 space-y-1 text-gray-800 text-sm">
                    <li><strong>Trouble de la personnalité antisociale :</strong> Risque élevé à l'âge adulte</li>
                    <li><strong>Problèmes judiciaires :</strong> Délinquance juvénile et criminalité</li>
                    <li><strong>Difficultés relationnelles :</strong> Problèmes interpersonnels durables</li>
                    <li><strong>Troubles de l'usage de substances :</strong> Risque accru</li>
                    <li><strong>Problèmes professionnels :</strong> Difficultés d'insertion</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Interventions psychosociales</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Thérapie familiale multisystémique</li>
                      <li>• Formation parentale</li>
                      <li>• Thérapie cognitivo-comportementale</li>
                      <li>• Programmes de compétences sociales</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Interventions institutionnelles</h5>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• Programmes scolaires spécialisés</li>
                      <li>• Centres de jour thérapeutiques</li>
                      <li>• Placement en institution (cas sévères)</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <h5 className="font-medium text-orange-900 text-sm mb-1">Médicaments</h5>
                    <p className="text-xs text-orange-800">
                      Traitement des comorbidités (TDAH, dépression, anxiété) mais pas du trouble des conduites lui-même.
                    </p>
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

export default BehaviorDisordersSection;