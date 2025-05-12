import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Book, Users, ClipboardCheck, Lightbulb, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const PostTraumatiques = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="icon" asChild className="mr-2">
                <Link to="/troubles">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Retour</span>
                </Link>
              </Button>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-neuro-orange">Troubles post-traumatiques cérébraux</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Séquelles neurologiques suite aux traumatismes crâniens
              </motion.p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-12">
          <Tabs defaultValue="presentation" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-5">
                <TabsTrigger value="presentation">Présentation</TabsTrigger>
                <TabsTrigger value="consequences">Conséquences</TabsTrigger>
                <TabsTrigger value="diagnostic">Évaluation</TabsTrigger>
                <TabsTrigger value="readaptation">Réadaptation</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Presentation Tab */}
            <TabsContent value="presentation">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-6 w-6 text-neuro-orange" />
                      <CardTitle>Comprendre les traumatismes crâniens</CardTitle>
                    </div>
                    <CardDescription>
                      Bases et mécanismes des lésions cérébrales traumatiques
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Un traumatisme crânien (TC) survient lorsque la tête subit un choc violent qui perturbe le fonctionnement normal du cerveau. 
                      Ces traumatismes peuvent entraîner des lésions cérébrales qui vont de légères et temporaires à graves et permanentes, 
                      avec des conséquences potentiellement invalidantes sur les plans physique, cognitif et comportemental.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Épidémiologie</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>En France, environ 150 000 personnes sont victimes d'un traumatisme crânien chaque année</li>
                        <li>Environ 30 000 cas sont considérés comme modérés à sévères</li>
                        <li>Populations particulièrement à risque : jeunes adultes (15-30 ans), personnes âgées ({'>'}75 ans), hommes (ratio 3:1)</li>
                        <li>Principales causes : accidents de la route (50%), chutes (30%), sports et activités récréatives (10%), violences (10%)</li>
                        <li>Le traumatisme crânien représente la première cause de handicap chez les jeunes adultes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Mécanismes lésionnels</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Lésions primaires</h4>
                          <p className="text-muted-foreground mb-2">Surviennent au moment de l'impact :</p>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Lésions focales : contusions, hématomes</li>
                            <li>Lésions axonales diffuses (étirement et rupture des axones)</li>
                            <li>Lésions vasculaires</li>
                            <li>Fractures crâniennes</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Lésions secondaires</h4>
                          <p className="text-muted-foreground mb-2">Se développent progressivement après l'impact :</p>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Œdème cérébral</li>
                            <li>Hypoxie/ischémie cérébrale</li>
                            <li>Hypertension intracrânienne</li>
                            <li>Infections</li>
                            <li>Mécanismes excitotoxiques</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Gravité des traumatismes crâniens</h3>
                      <p className="text-muted-foreground mb-3">
                        La classification traditionnelle se base principalement sur le score de Glasgow initial et la durée de la perte de conscience :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">TC léger (80% des cas)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Score de Glasgow : 13-15</li>
                            <li>Perte de conscience : absente ou {'<'} 30 minutes</li>
                            <li>Amnésie post-traumatique : {'<'} 24 heures</li>
                            <li>Exemples : commotions cérébrales simples</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">TC modéré (10-15% des cas)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Score de Glasgow : 9-12</li>
                            <li>Perte de conscience : 30 minutes à 24 heures</li>
                            <li>Amnésie post-traumatique : 24 heures à 7 jours</li>
                            <li>Lésions cérébrales visibles à l'imagerie</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">TC sévère (5-10% des cas)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Score de Glasgow : 3-8</li>
                            <li>Perte de conscience : {'>'} 24 heures</li>
                            <li>Amnésie post-traumatique : {'>'} 7 jours</li>
                            <li>Lésions cérébrales graves avec pronostic réservé</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Particularités des différents types de traumatismes</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Traumatismes ouverts</h4>
                          <p className="text-muted-foreground">
                            Avec brèche ostéo-méningée et pénétration d'objets dans le cerveau (projectiles, fragments osseux). 
                            Risque infectieux important.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Traumatismes fermés</h4>
                          <p className="text-muted-foreground">
                            Sans rupture de la dure-mère. Mécanismes d'accélération/décélération provoquant des lésions de 
                            contrecoup et des lésions axonales diffuses.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Commotions cérébrales répétées</h4>
                          <p className="text-muted-foreground">
                            Particulièrement dans le sport (football, rugby, boxe). Risque d'encéphalopathie traumatique chronique 
                            à long terme.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Facteurs pronostiques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Liés au traumatisme</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Sévérité initiale (score de Glasgow)</li>
                            <li>Durée du coma et de l'amnésie post-traumatique</li>
                            <li>Type et étendue des lésions cérébrales</li>
                            <li>Présence de lésions associées</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Liés au patient</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Âge (meilleure récupération chez les jeunes)</li>
                            <li>État de santé antérieur</li>
                            <li>Facteurs génétiques</li>
                            <li>Niveau d'éducation et réserve cognitive</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Liés à la prise en charge</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Rapidité des soins d'urgence</li>
                          <li>Qualité de la prise en charge en réanimation</li>
                          <li>Prévention et traitement des complications</li>
                          <li>Accès précoce à une rééducation spécialisée</li>
                          <li>Soutien psychosocial et familial</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Neuroplasticité et récupération</h3>
                      <p className="text-muted-foreground">
                        Le cerveau possède une capacité remarquable à se réorganiser après une lésion, notamment chez les jeunes. 
                        Cette neuroplasticité permet une récupération fonctionnelle qui peut se poursuivre pendant plusieurs années 
                        après le traumatisme, bien que la phase de récupération la plus rapide se situe généralement dans les 6 à 18 
                        premiers mois. La rééducation intensive vise à stimuler et optimiser ces mécanismes naturels de récupération.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Consequences Tab */}
            <TabsContent value="consequences">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Brain className="h-6 w-6 text-neuro-orange" />
                      <CardTitle>Conséquences et séquelles</CardTitle>
                    </div>
                    <CardDescription>
                      Les impacts neuropsychologiques et fonctionnels des traumatismes crâniens
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Les séquelles d'un traumatisme crânien peuvent être extrêmement variées, affectant potentiellement toutes les 
                      sphères du fonctionnement humain. Elles dépendent de la localisation et de l'étendue des lésions cérébrales, 
                      ainsi que des caractéristiques individuelles de la personne. La nature multidimensionnelle de ces conséquences 
                      nécessite une approche holistique de l'évaluation et de la prise en charge.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Troubles cognitifs</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Troubles attentionnels</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés de concentration</li>
                            <li>Distractibilité accrue</li>
                            <li>Ralentissement du traitement de l'information</li>
                            <li>Difficultés à maintenir l'attention dans la durée</li>
                            <li>Difficultés à gérer plusieurs tâches simultanément</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Troubles mnésiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Amnésie post-traumatique (période entourant l'accident)</li>
                            <li>Difficultés d'apprentissage de nouvelles informations</li>
                            <li>Troubles de la mémoire de travail</li>
                            <li>Difficultés de récupération des souvenirs</li>
                            <li>Fausses reconnaissances et confabulations</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Troubles exécutifs</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés de planification et d'organisation</li>
                            <li>Problèmes d'initiation et de motivation</li>
                            <li>Manque de flexibilité mentale</li>
                            <li>Difficultés à inhiber les comportements inappropriés</li>
                            <li>Troubles du jugement et de la prise de décision</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Autres troubles cognitifs</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Troubles du langage (aphasie, manque du mot)</li>
                            <li>Difficultés visuo-spatiales</li>
                            <li>Troubles praxiques (difficultés à réaliser des gestes)</li>
                            <li>Anosognosie (non-conscience des déficits)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Troubles comportementaux et émotionnels</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Irritabilité et diminution du seuil de tolérance à la frustration</li>
                          <li>Impulsivité et désinhibition</li>
                          <li>Apathie et manque d'initiative</li>
                          <li>Changements de personnalité (souvent perçus par l'entourage comme "ce n'est plus la même personne")</li>
                          <li>Labilité émotionnelle (changements rapides d'humeur)</li>
                          <li>Anxiété, dépression et risque suicidaire accru</li>
                          <li>Comportements socialement inappropriés</li>
                          <li>Agressivité (verbale ou physique)</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        Ces troubles comportementaux et émotionnels sont souvent les plus difficiles à gérer pour les familles et 
                        peuvent fortement compromettre la réinsertion sociale et professionnelle, même lorsque les séquelles physiques 
                        sont relativement limitées.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Troubles physiques et neurologiques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Troubles moteurs</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Paralysies (hémiplégie, tétraplégie)</li>
                            <li>Troubles de la coordination (ataxie)</li>
                            <li>Spasticité et contractures</li>
                            <li>Troubles de l'équilibre</li>
                            <li>Tremblements et mouvements anormaux</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Troubles sensoriels</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Troubles visuels (diplopie, hémianopsie)</li>
                            <li>Troubles auditifs</li>
                            <li>Vertiges et troubles vestibulaires</li>
                            <li>Altérations de la sensibilité (paresthésies)</li>
                            <li>Douleurs chroniques</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Autres séquelles neurologiques</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Épilepsie post-traumatique (5-20% des TC modérés à sévères)</li>
                          <li>Céphalées post-traumatiques</li>
                          <li>Troubles du sommeil (insomnie, hypersomnie)</li>
                          <li>Troubles neurovégétatifs</li>
                          <li>Troubles sphinctériens</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Syndrome post-commotionnel</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <p className="text-muted-foreground mb-2">
                          Ensemble de symptômes persistant après un traumatisme crânien, même léger :
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Céphalées persistantes</li>
                          <li>Vertiges et troubles de l'équilibre</li>
                          <li>Fatigue chronique et intolérance aux efforts</li>
                          <li>Troubles de la concentration et de la mémoire</li>
                          <li>Irritabilité et labilité émotionnelle</li>
                          <li>Anxiété et dépression</li>
                          <li>Hypersensibilité au bruit et à la lumière</li>
                          <li>Troubles du sommeil</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        Ce syndrome touche 15 à 30% des patients après un TC léger et peut persister plusieurs mois, voire années. 
                        Son origine est multifactorielle, combinant des mécanismes neurobiologiques et psychologiques.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Impact sur le fonctionnement quotidien et social</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Autonomie dans la vie quotidienne</h4>
                          <p className="text-muted-foreground">
                            Difficultés variables dans les activités de base (toilette, habillage, alimentation) et instrumentales 
                            (gestion administrative, préparation des repas, utilisation des transports).
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Impact professionnel</h4>
                          <p className="text-muted-foreground">
                            Difficultés de retour à l'emploi, nécessité de réorientation professionnelle, aménagements de poste, 
                            baisse de productivité, risque de licenciement.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Relations familiales</h4>
                          <p className="text-muted-foreground">
                            Modifications des rôles et équilibres familiaux, risque d'épuisement des aidants, incompréhension face aux 
                            changements comportementaux, risque accru de séparation conjugale.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Relations sociales</h4>
                          <p className="text-muted-foreground">
                            Appauvrissement du réseau social, difficultés relationnelles liées aux troubles comportementaux et à la 
                            fatigabilité, risque d'isolement et de repli.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Évolution à long terme</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Récupération</span>
                            <p>Phase rapide (6-18 mois) puis plus lente, pouvant se poursuivre plusieurs années</p>
                          </li>
                          <li>
                            <span className="font-medium">Stabilisation</span>
                            <p>Séquelles résiduelles persistantes nécessitant des adaptations durables</p>
                          </li>
                          <li>
                            <span className="font-medium">Risques à long terme</span>
                            <p>Vulnérabilité accrue aux maladies neurodégénératives (Alzheimer, Parkinson), épilepsie, troubles psychiatriques</p>
                          </li>
                          <li>
                            <span className="font-medium">Encéphalopathie traumatique chronique</span>
                            <p>Risque spécifique lié aux traumatismes crâniens répétés (sports de contact), évoluant vers une démence progressive</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Diagnostic Tab */}
            <TabsContent value="diagnostic">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <ClipboardCheck className="h-6 w-6 text-neuro-orange" />
                      <CardTitle>Évaluation et bilan</CardTitle>
                    </div>
                    <CardDescription>
                      L'approche multidisciplinaire pour évaluer les séquelles de traumatisme crânien
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      L'évaluation des séquelles post-traumatiques cérébrales nécessite une approche globale et multidisciplinaire, 
                      tenant compte de la complexité et de la diversité des déficits potentiels. Cette évaluation se déroule à 
                      différentes étapes du parcours de soins et s'adapte à l'évolution de l'état du patient.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évaluation en phase aiguë</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation clinique</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Score de Glasgow (évaluation de la conscience)</li>
                            <li>Échelle de Rankin modifiée (handicap global)</li>
                            <li>Examen neurologique standard</li>
                            <li>Évaluation des fonctions vitales</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Imagerie cérébrale</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Scanner cérébral (en urgence)</li>
                            <li>IRM cérébrale (lésions plus fines)</li>
                            <li>Angiographie (lésions vasculaires)</li>
                            <li>Imagerie fonctionnelle dans certains cas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évaluation neuropsychologique</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation cognitive globale</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>MoCA (Montreal Cognitive Assessment)</li>
                            <li>MMSE (Mini Mental State Examination)</li>
                            <li>GOAT (Galveston Orientation and Amnesia Test)</li>
                            <li>Batterie d'évaluation cognitive pour les TC (BECT)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation des fonctions spécifiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Attention : Test d2, PASAT, Trail Making Test</li>
                            <li>Mémoire : Échelle clinique de mémoire de Wechsler, California Verbal Learning Test</li>
                            <li>Fonctions exécutives : Wisconsin Card Sorting Test, Tour de Londres, Stroop</li>
                            <li>Langage : Boston Diagnostic Aphasia Examination, DO80</li>
                            <li>Praxies et fonctions visuo-spatiales : Figure complexe de Rey, Test des cloches</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évaluation comportementale et émotionnelle</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Outils d'auto-évaluation</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Échelles d'anxiété et de dépression (HAD, Beck)</li>
                            <li>Questionnaires de qualité de vie (QOLIBRI)</li>
                            <li>Inventaire du fardeau du traumatisme crânien</li>
                            <li>Échelle de fatigue mentale</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation par l'entourage</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Inventaire du comportement frontal</li>
                            <li>Questionnaire de dysexécution comportementale</li>
                            <li>Inventaire neuropsychiatrique</li>
                            <li>Échelle d'adaptabilité Mayo-Portland (MPAI-4)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évaluation fonctionnelle</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Autonomie dans la vie quotidienne</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Mesure d'indépendance fonctionnelle (MIF)</li>
                            <li>Échelle de Glasgow des activités (GOS-E)</li>
                            <li>Échelles ADL (activités de la vie quotidienne)</li>
                            <li>IADL (activités instrumentales)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Capacités physiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Bilan moteur et musculaire</li>
                            <li>Tests d'équilibre (Berg, Tinetti)</li>
                            <li>Évaluation de la marche et des transferts</li>
                            <li>Tests d'endurance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évaluation de la participation sociale</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Mesure des habitudes de vie (MHAVIE)</li>
                          <li>Échelle de réintégration à la vie normale</li>
                          <li>Questionnaires de participation communautaire</li>
                          <li>Évaluation des capacités professionnelles</li>
                          <li>Échelles de handicap social</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évaluations spécialisées complémentaires</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Bilans sensoriels</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Bilan orthoptique et ophtalmologique</li>
                            <li>Bilan ORL et audiométrie</li>
                            <li>Bilan vestibulaire</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Examens électrophysiologiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Électroencéphalogramme (EEG)</li>
                            <li>Potentiels évoqués</li>
                            <li>Électromyogramme (EMG)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluations spécifiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Bilan orthophonique approfondi</li>
                            <li>Évaluation neuropsychologique en situation écologique</li>
                            <li>Bilan des fonctions exécutives en vie quotidienne</li>
                            <li>Évaluation de la conduite automobile</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Approche multidisciplinaire</h3>
                      <p className="text-muted-foreground mb-3">
                        L'évaluation implique généralement une équipe de professionnels spécialisés :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Médecin MPR (Médecine Physique et de Réadaptation)</li>
                        <li>Neurologue</li>
                        <li>Neuropsychologue</li>
                        <li>Kinésithérapeute</li>
                        <li>Ergothérapeute</li>
                        <li>Orthophoniste</li>
                        <li>Psychiatre ou psychologue clinicien</li>
                        <li>Infirmier(ère) spécialisé(e)</li>
                        <li>Assistant(e) social(e)</li>
                        <li>Autres spécialistes selon les besoins</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évaluation longitudinale</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-muted-foreground mb-2">
                          Les évaluations sont répétées régulièrement pour :
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Suivre l'évolution des capacités du patient</li>
                          <li>Ajuster les objectifs de rééducation</li>
                          <li>Mesurer l'efficacité des interventions</li>
                          <li>Adapter les aides et l'accompagnement</li>
                          <li>Préparer les transitions (retour à domicile, réinsertion professionnelle)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Readaptation Tab */}
            <TabsContent value="readaptation">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="h-6 w-6 text-neuro-orange" />
                      <CardTitle>Réadaptation et réinsertion</CardTitle>
                    </div>
                    <CardDescription>
                      Approches et parcours de soins pour optimiser la récupération après un traumatisme crânien
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      La réadaptation après un traumatisme crânien est un processus complexe et personnalisé visant à réduire les séquelles, 
                      compenser les déficits persistants et favoriser une réinsertion sociale, familiale et parfois professionnelle 
                      optimale. Elle débute dès la phase aiguë et peut se poursuivre sur plusieurs années.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Principes de la réadaptation</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Précocité de la prise en charge</li>
                        <li>Approche globale et coordonnée</li>
                        <li>Personnalisation des objectifs et des interventions</li>
                        <li>Implication active du patient et de son entourage</li>
                        <li>Continuité des soins tout au long du parcours</li>
                        <li>Réévaluations régulières et ajustements des stratégies</li>
                        <li>Collaboration étroite entre les différents intervenants</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Parcours de soins</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Phase aiguë</h4>
                          <p className="text-muted-foreground">
                            Services de réanimation et neurochirurgie, prévention des complications secondaires, début de la stimulation 
                            et de la mobilisation précoce.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Phase post-aiguë</h4>
                          <p className="text-muted-foreground">
                            Continuation des soins de réadaptation, évaluation régulière des capacités du patient, adaptation des interventions.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Phase de réinsertion</h4>
                          <p className="text-muted-foreground">
                            Adaptation aux nouvelles situations, aide à la reinsertion professionnelle, soutien psychosocial et familial.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Resources Tab */}
            <TabsContent value="resources">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Book className="h-6 w-6 text-neuro-orange" />
                      <CardTitle>Ressources et soutien</CardTitle>
                    </div>
                    <CardDescription>
                      Informations, associations et outils pour les personnes et leurs familles
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Informations sur les traumatismes crâniens, évaluation des séquelles, ressources pour la réadaptation et soutien psychologique.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>    </div>
  );
};

export default PostTraumatiques;
