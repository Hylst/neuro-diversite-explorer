import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, Heart, AlertTriangle, Scissors } from 'lucide-react';
import NonSuicidalSelfInjurySection from './NonSuicidalSelfInjurySection';

/**
 * Component for Specialized Disorders section with detailed information
 * about OCD, somatoform disorders, and self-harm/suicidal behavior
 */
const SpecializedDisordersSection = () => {
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-purple">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-neuro-purple" />
            Troubles Spécialisés
          </CardTitle>
          <CardDescription>
            Troubles spécifiques nécessitant une attention particulière
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="toc" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid w-full max-w-3xl grid-cols-4">
            <TabsTrigger value="toc">TOC</TabsTrigger>
            <TabsTrigger value="somatoformes">Somatoformes</TabsTrigger>
            <TabsTrigger value="autolesion">Auto-lésion/Suicide</TabsTrigger>
            <TabsTrigger value="nssi" className="flex items-center gap-2">
              <Scissors className="h-4 w-4" />
              <span className="hidden sm:inline">NSSI</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="toc">
          <Card className="neuro-card border-neuro-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-neuro-blue" />
                Trouble obsessionnel-compulsif (TOC)
              </CardTitle>
              <CardDescription>
                Pensées intrusives récurrentes et comportements répétitifs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Définition :</h4>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    Le TOC se caractérise par la présence d'obsessions (pensées, images ou impulsions 
                    intrusives et récurrentes) et/ou de compulsions (comportements répétitifs ou actes 
                    mentaux) qui causent une détresse significative et interfèrent avec le fonctionnement quotidien.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Obsessions courantes :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li><strong>Contamination :</strong> Peur des germes, saleté</li>
                    <li><strong>Doute :</strong> "Ai-je fermé la porte ?"</li>
                    <li><strong>Ordre/symétrie :</strong> Besoin que tout soit "juste"</li>
                    <li><strong>Pensées interdites :</strong> Sexuelles, religieuses, violentes</li>
                    <li><strong>Accumulation :</strong> Peur de jeter des objets</li>
                    <li><strong>Superstitions :</strong> Pensées magiques</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Compulsions courantes :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li><strong>Lavage :</strong> Mains, corps, objets</li>
                    <li><strong>Vérification :</strong> Portes, appareils, devoirs</li>
                    <li><strong>Rangement :</strong> Ordre parfait, symétrie</li>
                    <li><strong>Comptage :</strong> Répétition de nombres</li>
                    <li><strong>Rituels mentaux :</strong> Prières, phrases</li>
                    <li><strong>Évitement :</strong> Situations déclenchantes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Manifestations chez l'enfant et l'adolescent :</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Enfants (6-12 ans)</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Rituels au coucher</li>
                      <li>• Lavage excessif des mains</li>
                      <li>• Vérifications répétées</li>
                      <li>• Besoin de réassurance</li>
                      <li>• Difficultés à terminer les devoirs</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <h5 className="font-medium text-orange-900 text-sm mb-1">Adolescents (13+ ans)</h5>
                    <ul className="text-xs text-orange-800 space-y-1">
                      <li>• Obsessions sexuelles/religieuses</li>
                      <li>• Rituels complexes</li>
                      <li>• Évitement social</li>
                      <li>• Perfectionnisme excessif</li>
                      <li>• Dissimulation des symptômes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Impact fonctionnel :</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <ul className="list-disc pl-5 space-y-1 text-yellow-800 text-sm">
                    <li><strong>Scolaire :</strong> Retards, difficultés à terminer les tâches</li>
                    <li><strong>Social :</strong> Isolement, évitement des activités</li>
                    <li><strong>Familial :</strong> Implication de la famille dans les rituels</li>
                    <li><strong>Émotionnel :</strong> Anxiété, dépression, culpabilité</li>
                    <li><strong>Temps :</strong> Heures consacrées aux rituels</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">TCC avec exposition</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Exposition et prévention de la réponse</li>
                      <li>• Restructuration cognitive</li>
                      <li>• Techniques de relaxation</li>
                      <li>• Implication familiale</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Médicaments</h5>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• ISRS (doses plus élevées)</li>
                      <li>• Clomipramine (tricyclique)</li>
                      <li>• Traitement à long terme</li>
                      <li>• Surveillance des effets secondaires</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="somatoformes">
          <Card className="neuro-card border-neuro-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-neuro-green" />
                Troubles somatoformes
              </CardTitle>
              <CardDescription>
                Symptômes physiques sans cause médicale identifiable
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Définition :</h4>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    Les troubles somatoformes se caractérisent par des symptômes physiques 
                    qui suggèrent une affection médicale mais qui ne peuvent être expliqués 
                    entièrement par une condition médicale générale, les effets directs d'une 
                    substance ou un autre trouble mental.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Types principaux :</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Trouble de somatisation</h5>
                    <p className="text-xs text-blue-800">
                      Multiples symptômes physiques récurrents (douleurs, gastro-intestinaux, 
                      sexuels, pseudo-neurologiques) débutant avant 30 ans.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                    <h5 className="font-medium text-purple-900 text-sm mb-1">Trouble de conversion</h5>
                    <p className="text-xs text-purple-800">
                      Symptômes neurologiques (paralysie, cécité, convulsions) sans base 
                      neurologique, souvent liés à un stress psychologique.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <h5 className="font-medium text-orange-900 text-sm mb-1">Hypocondrie</h5>
                    <p className="text-xs text-orange-800">
                      Préoccupation excessive d'avoir une maladie grave basée sur 
                      l'interprétation erronée de sensations corporelles.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Manifestations chez l'enfant et l'adolescent :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-sm mb-2">Symptômes fréquents :</h5>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-xs">
                      <li>Maux de tête récurrents</li>
                      <li>Douleurs abdominales</li>
                      <li>Nausées et vomissements</li>
                      <li>Fatigue chronique</li>
                      <li>Douleurs musculaires</li>
                      <li>Troubles du sommeil</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-2">Facteurs déclenchants :</h5>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-xs">
                      <li>Stress scolaire</li>
                      <li>Conflits familiaux</li>
                      <li>Changements importants</li>
                      <li>Traumatismes</li>
                      <li>Problèmes relationnels</li>
                      <li>Perfectionnisme</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Impact sur la vie quotidienne :</h4>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <ul className="list-disc pl-5 space-y-1 text-red-800 text-sm">
                    <li><strong>Absentéisme scolaire :</strong> Fréquent et prolongé</li>
                    <li><strong>Consultations médicales :</strong> Multiples et répétées</li>
                    <li><strong>Examens médicaux :</strong> Nombreux sans résultats</li>
                    <li><strong>Activités :</strong> Limitation des activités physiques et sociales</li>
                    <li><strong>Famille :</strong> Stress et inquiétude des parents</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Approche thérapeutique :</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Approche multidisciplinaire</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Collaboration médecin-psychologue</li>
                      <li>• Validation des symptômes</li>
                      <li>• Éviter les examens excessifs</li>
                      <li>• Retour progressif aux activités</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Interventions psychologiques</h5>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• TCC pour la gestion du stress</li>
                      <li>• Techniques de relaxation</li>
                      <li>• Thérapie familiale</li>
                      <li>• Gestion de l'anxiété</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="autolesion">
          <Card className="neuro-card border-neuro-red">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-neuro-red" />
                Auto-lésion et comportement suicidaire
              </CardTitle>
              <CardDescription>
                Comportements d'auto-agression et risque suicidaire chez les jeunes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <p className="text-sm text-red-900 font-medium mb-2">
                  ⚠️ URGENCE MÉDICALE : Tout comportement suicidaire nécessite une évaluation immédiate
                </p>
                <p className="text-xs text-red-800">
                  En cas de crise : Contactez immédiatement les services d'urgence (15, 112) 
                  ou Suicide Écoute (01 45 39 40 00)
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Auto-lésion non suicidaire :</h4>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="text-sm text-orange-800 mb-2">
                    Comportements intentionnels d'auto-agression sans intention suicidaire, 
                    souvent utilisés pour réguler les émotions ou communiquer une détresse.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <h5 className="font-medium text-orange-900 text-xs mb-1">Méthodes courantes :</h5>
                      <ul className="text-xs text-orange-700 space-y-1">
                        <li>• Coupures (bras, jambes)</li>
                        <li>• Brûlures</li>
                        <li>• Coups auto-infligés</li>
                        <li>• Griffures</li>
                        <li>• Arrachage de cheveux</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-900 text-xs mb-1">Fonctions :</h5>
                      <ul className="text-xs text-orange-700 space-y-1">
                        <li>• Régulation émotionnelle</li>
                        <li>• Soulagement de la tension</li>
                        <li>• Expression de la douleur</li>
                        <li>• Sentiment de contrôle</li>
                        <li>• Autopunition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Facteurs de risque suicidaire :</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-900 text-sm mb-1">Individuels</h5>
                    <ul className="text-xs text-red-800 space-y-1">
                      <li>• Dépression majeure</li>
                      <li>• Troubles bipolaires</li>
                      <li>• Abus de substances</li>
                      <li>• Impulsivité</li>
                      <li>• Antécédents de trauma</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <h5 className="font-medium text-orange-900 text-sm mb-1">Familiaux</h5>
                    <ul className="text-xs text-orange-800 space-y-1">
                      <li>• Antécédents familiaux</li>
                      <li>• Conflits familiaux</li>
                      <li>• Maltraitance</li>
                      <li>• Négligence</li>
                      <li>• Instabilité familiale</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <h5 className="font-medium text-yellow-900 text-sm mb-1">Sociaux</h5>
                    <ul className="text-xs text-yellow-800 space-y-1">
                      <li>• Harcèlement scolaire</li>
                      <li>• Isolement social</li>
                      <li>• Discrimination</li>
                      <li>• Stress scolaire</li>
                      <li>• Ruptures relationnelles</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Signaux d'alarme :</h4>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-red-900 text-sm mb-1">Verbaux :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-red-800 text-xs">
                        <li>"Je veux mourir"</li>
                        <li>"Vous seriez mieux sans moi"</li>
                        <li>"Je ne peux plus supporter"</li>
                        <li>"Bientôt ce sera fini"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-900 text-sm mb-1">Comportementaux :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-red-800 text-xs">
                        <li>Isolement soudain</li>
                        <li>Don d'objets personnels</li>
                        <li>Recherche de moyens létaux</li>
                        <li>Changements d'humeur extrêmes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Évaluation du risque :</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Risque faible</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Idées passagères</li>
                      <li>• Pas de plan précis</li>
                      <li>• Facteurs protecteurs</li>
                      <li>• Demande d'aide</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <h5 className="font-medium text-orange-900 text-sm mb-1">Risque modéré</h5>
                    <ul className="text-xs text-orange-800 space-y-1">
                      <li>• Idées récurrentes</li>
                      <li>• Plan vague</li>
                      <li>• Facteurs de risque</li>
                      <li>• Ambivalence</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-900 text-sm mb-1">Risque élevé</h5>
                    <ul className="text-xs text-red-800 space-y-1">
                      <li>• Plan précis et létal</li>
                      <li>• Moyens disponibles</li>
                      <li>• Intention ferme</li>
                      <li>• Isolement social</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Intervention et traitement :</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 text-sm mb-1">Intervention de crise</h5>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• Évaluation immédiate du risque</li>
                      <li>• Sécurisation de l'environnement</li>
                      <li>• Hospitalisation si nécessaire</li>
                      <li>• Contrat de sécurité</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 text-sm mb-1">Suivi thérapeutique</h5>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• TCC pour la prévention du suicide</li>
                      <li>• Thérapie dialectique comportementale</li>
                      <li>• Traitement des troubles sous-jacents</li>
                      <li>• Soutien familial intensif</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                    <h5 className="font-medium text-purple-900 text-sm mb-1">Prévention</h5>
                    <ul className="text-xs text-purple-800 space-y-1">
                      <li>• Programmes de sensibilisation</li>
                      <li>• Formation des professionnels</li>
                      <li>• Réseaux de soutien</li>
                      <li>• Accès aux soins de santé mentale</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Ressources d'aide :</h4>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <ul className="list-disc pl-5 space-y-1 text-blue-800 text-sm">
                    <li><strong>Suicide Écoute :</strong> 01 45 39 40 00 (24h/24)</li>
                    <li><strong>SOS Amitié :</strong> 09 72 39 40 50</li>
                    <li><strong>Fil Santé Jeunes :</strong> 0800 235 236</li>
                    <li><strong>Urgences :</strong> 15 (SAMU) ou 112</li>
                    <li><strong>Chat en ligne :</strong> suicide-ecoute.fr</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nssi">
          <NonSuicidalSelfInjurySection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpecializedDisordersSection;