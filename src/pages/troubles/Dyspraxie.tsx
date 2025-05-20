
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit, Lightbulb, Book, Users, MessageCircle, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TroubleHeader } from '@/components/troubles/common';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dyspraxie = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <TroubleHeader 
          title="La Dyspraxie"
          description="Trouble de la coordination et de la planification des mouvements"
          backLink="/troubles"
          iconColor="#f97316" // Orange color for dyspraxie
        />

        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la dyspraxie ?</h2>
                <p className="text-muted-foreground mb-4">
                  La dyspraxie, également appelée Trouble Développemental de la Coordination (TDC), est un trouble neurodéveloppemental qui affecte la capacité 
                  à planifier, coordonner et exécuter des mouvements volontaires. Elle se manifeste par des difficultés significatives dans l'acquisition et 
                  l'exécution de compétences motrices coordonnées, sans que cela soit attribuable à une déficience intellectuelle ou à un trouble neurologique identifiable.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ce trouble persiste généralement à l'âge adulte, bien que les manifestations puissent évoluer avec le développement de stratégies compensatoires.
                  La dyspraxie touche environ 5 à 6% des enfants d'âge scolaire, avec une prévalence plus élevée chez les garçons (ratio de 3 garçons pour 1 fille).
                </p>
                <p className="text-muted-foreground mb-4">
                  Les personnes dyspraxiques peuvent présenter des difficultés variables dans la coordination motrice, l'organisation spatiale et temporelle, ce qui peut 
                  considérablement affecter leurs activités quotidiennes, leurs apprentissages scolaires et leurs interactions sociales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Les différents types de dyspraxie</h2>
                <p className="text-muted-foreground mb-4">
                  La dyspraxie peut prendre différentes formes selon les composantes motrices qui sont affectées. On distingue généralement plusieurs types:
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dyspraxie idéomotrice</h3>
                    <p className="text-muted-foreground">
                      Difficulté à exécuter des gestes simples et isolés, notamment sur demande ou imitation.
                    </p>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dyspraxie idéatoire</h3>
                    <p className="text-muted-foreground">
                      Difficulté à conceptualiser, planifier et exécuter une séquence complexe de mouvements coordonnés.
                    </p>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dyspraxie visuo-spatiale</h3>
                    <p className="text-muted-foreground">
                      Difficulté à comprendre et interpréter les informations visuelles pour guider les mouvements.
                    </p>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dyspraxie constructive</h3>
                    <p className="text-muted-foreground">
                      Difficulté à assembler des éléments pour former un tout cohérent (puzzles, constructions).
                    </p>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dyspraxie verbale</h3>
                    <p className="text-muted-foreground">
                      Difficulté à planifier et coordonner les mouvements nécessaires à la parole.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  Il est important de noter que ces catégories ne sont pas hermétiques et qu'une personne peut présenter une forme mixte combinant plusieurs aspects des différents types de dyspraxie.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Manifestations et symptômes</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Difficultés motrices globales</h3>
                    <div className="bg-secondary p-4 rounded-lg">
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Maladresse générale, chutes fréquentes</li>
                        <li>Difficultés d'équilibre et de coordination</li>
                        <li>Mouvements saccadés ou peu fluides</li>
                        <li>Difficultés dans les activités sportives (lancer/attraper une balle, sauter, courir)</li>
                        <li>Acquisition tardive de certaines habiletés motrices (vélo, natation)</li>
                        <li>Fatigabilité accrue lors d'activités physiques</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Difficultés motrices fines</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-secondary p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Écriture et dessin</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Dysgraphie (écriture illisible, lente ou laborieuse)</li>
                          <li>Difficulté à maintenir une préhension correcte du crayon</li>
                          <li>Pression inappropriée sur le stylo</li>
                          <li>Difficultés à respecter les lignes, l'espacement</li>
                        </ul>
                      </div>
                      
                      <div className="bg-secondary p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Activités quotidiennes</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Difficulté à s'habiller (boutons, lacets, zip)</li>
                          <li>Maladresse avec les couverts, renversements fréquents</li>
                          <li>Difficultés à utiliser des ciseaux, règles, compas</li>
                          <li>Difficultés avec l'hygiène personnelle</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Difficultés visuo-spatiales et organisationnelles</h3>
                    <div className="bg-secondary p-4 rounded-lg">
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Difficultés d'orientation dans l'espace</li>
                        <li>Problèmes pour suivre des directives impliquant des notions spatiales (en haut, à droite...)</li>
                        <li>Difficultés à copier des formes ou à reproduire un modèle</li>
                        <li>Problèmes d'organisation du matériel et de l'espace de travail</li>
                        <li>Difficultés de gestion du temps et de planification des tâches</li>
                        <li>Problèmes pour lire des cartes ou suivre un plan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Diagnostic et évaluation</h2>
                <p className="text-muted-foreground mb-4">
                  Le diagnostic de la dyspraxie repose sur une évaluation pluridisciplinaire qui permet d'identifier les difficultés spécifiques et d'écarter d'autres causes possibles.
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Professionnels impliqués</h3>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Médecin (pédiatre, neuropédiatre)</li>
                      <li>Psychomotricien</li>
                      <li>Ergothérapeute</li>
                      <li>Neuropsychologue</li>
                      <li>Orthophoniste (pour la dyspraxie verbale)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Évaluations réalisées</h3>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Bilan psychomoteur</li>
                      <li>Évaluation des capacités visuo-spatiales</li>
                      <li>Tests de coordination motrice fine et globale</li>
                      <li>Évaluation des capacités d'organisation et de planification</li>
                      <li>Observation en situation écologique (activités quotidiennes)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Interventions et accompagnement</h2>
                <p className="text-muted-foreground mb-4">
                  La prise en charge de la dyspraxie est multidisciplinaire et vise à développer des stratégies compensatoires tout en renforçant les compétences motrices.
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Rééducations spécialisées</h3>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Psychomotricité</li>
                      <li>Ergothérapie</li>
                      <li>Orthophonie (pour la dyspraxie verbale)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Adaptations scolaires</h3>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Utilisation de l'ordinateur pour l'écriture</li>
                      <li>Aménagements pour les activités manuelles et sportives</li>
                      <li>Adaptation des supports pédagogiques</li>
                      <li>Tiers-temps pour les examens</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Adaptations quotidiennes</h3>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Vêtements adaptés (velcro plutôt que boutons, etc.)</li>
                      <li>Ustensiles ergonomiques</li>
                      <li>Organisation structurée de l'espace de vie</li>
                      <li>Routines prévisibles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar content */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-neuro-orange" />
                    <CardTitle className="text-lg">À retenir</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">La dyspraxie est un trouble neurodéveloppemental qui affecte la coordination et la planification des mouvements</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Elle touche environ 5 à 6% des enfants d'âge scolaire</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Les difficultés peuvent concerner la motricité fine, globale et l'organisation visuo-spatiale</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Le diagnostic repose sur une évaluation pluridisciplinaire</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Les adaptations et rééducations permettent de développer des stratégies compensatoires efficaces</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-neuro-orange" />
                    <CardTitle className="text-lg">Comorbidités fréquentes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Trouble du déficit de l'attention avec ou sans hyperactivité (TDAH)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Troubles des apprentissages (dyslexie, dyscalculie)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Trouble du spectre autistique</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Trouble du traitement sensoriel</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Troubles anxieux</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BrainCircuit className="h-5 w-5 text-neuro-orange" />
                    <CardTitle className="text-lg">Origines et causes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm mb-2">Facteurs neurologiques</h3>
                    <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
                      <li>Atypicités dans le développement cérébral</li>
                      <li>Différences dans les circuits neuronaux impliqués dans la planification motrice</li>
                      <li>Particularités dans le traitement des informations proprioceptives</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm mb-2">Facteurs génétiques et environnementaux</h3>
                    <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
                      <li>Prédisposition génétique (antécédents familiaux fréquents)</li>
                      <li>Facteurs périnataux (prématurité, faible poids de naissance)</li>
                      <li>Expositions prénatales à certaines substances</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-neuro-orange" />
                    <CardTitle className="text-lg">Impact psychosocial</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Frustration et baisse de l'estime de soi face aux difficultés quotidiennes</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Fatigue accrue due à l'effort supplémentaire nécessaire</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Évitement de certaines activités sociales ou sportives</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Risque accru d'anxiété et de troubles de l'humeur</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neuro-orange">•</span>
                      <span className="text-muted-foreground text-sm">Incompréhension de l'entourage (difficultés souvent invisibles)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dyspraxie;
