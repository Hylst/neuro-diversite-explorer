
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Lightbulb, Book, Users, MessageCircle, ArrowLeft, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Dyspraxie = () => {
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
                <span className="text-neuro-orange">Dyspraxie</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Trouble de la coordination et de la planification des mouvements
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
                <TabsTrigger value="symptoms">Symptômes</TabsTrigger>
                <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
                <TabsTrigger value="interventions">Interventions</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Presentation Tab */}
            <TabsContent value="presentation">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <BrainCircuit className="h-6 w-6 text-neuro-orange" />
                      <CardTitle>Comprendre la dyspraxie</CardTitle>
                    </div>
                    <CardDescription>
                      Trouble neurodéveloppemental affectant la coordination et la planification motrice
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Définition</h3>
                      <p className="text-muted-foreground">
                        La dyspraxie, également appelée Trouble Développemental de la Coordination (TDC), est un trouble neurodéveloppemental qui affecte la capacité 
                        à planifier, coordonner et exécuter des mouvements volontaires. Elle se manifeste par des difficultés significatives dans l'acquisition et 
                        l'exécution de compétences motrices coordonnées, sans que cela soit attribuable à une déficience intellectuelle ou à un trouble neurologique identifiable.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Prévalence</h3>
                      <p className="text-muted-foreground">
                        La dyspraxie touche environ 5 à 6% des enfants d'âge scolaire, avec une prévalence plus élevée chez les garçons (ratio de 3 garçons pour 1 fille). 
                        Ce trouble persiste généralement à l'âge adulte, bien que les manifestations puissent évoluer avec le développement de stratégies compensatoires.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Origines et causes</h3>
                      <p className="text-muted-foreground mb-4">
                        Les causes exactes de la dyspraxie ne sont pas entièrement élucidées, mais plusieurs facteurs sont identifiés :
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs neurologiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Atypicités dans le développement cérébral</li>
                            <li>Différences dans les circuits neuronaux impliqués dans la planification motrice</li>
                            <li>Particularités dans le traitement des informations proprioceptives et kinesthésiques</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs génétiques et environnementaux</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Prédisposition génétique (antécédents familiaux fréquents)</li>
                            <li>Facteurs périnataux (prématurité, faible poids de naissance)</li>
                            <li>Expositions prénatales à certaines substances</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Types de dyspraxie</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyspraxie idéomotrice</h4>
                          <p className="text-muted-foreground">
                            Difficulté à exécuter des gestes simples et isolés, notamment sur demande ou imitation.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyspraxie idéatoire</h4>
                          <p className="text-muted-foreground">
                            Difficulté à conceptualiser, planifier et exécuter une séquence complexe de mouvements coordonnés.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyspraxie visuo-spatiale</h4>
                          <p className="text-muted-foreground">
                            Difficulté à comprendre et interpréter les informations visuelles pour guider les mouvements.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyspraxie constructive</h4>
                          <p className="text-muted-foreground">
                            Difficulté à assembler des éléments pour former un tout cohérent (puzzles, constructions).
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyspraxie verbale</h4>
                          <p className="text-muted-foreground">
                            Difficulté à planifier et coordonner les mouvements nécessaires à la parole.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Comorbidités fréquentes</h3>
                      <p className="text-muted-foreground mb-3">
                        La dyspraxie est souvent associée à d'autres troubles neurodéveloppementaux :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Trouble du déficit de l'attention avec ou sans hyperactivité (TDAH)</li>
                        <li>Troubles des apprentissages (dyslexie, dyscalculie)</li>
                        <li>Trouble du spectre autistique</li>
                        <li>Trouble du traitement sensoriel</li>
                        <li>Troubles anxieux</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Symptoms Tab */}
            <TabsContent value="symptoms">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-neuro-orange" />
                      <CardTitle>Symptômes et manifestations</CardTitle>
                    </div>
                    <CardDescription>
                      Les signes caractéristiques de la dyspraxie à différents âges
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Difficultés motrices globales</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
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
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
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
                      <div className="bg-secondary p-4 rounded-lg mb-4">
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
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Impact sur les apprentissages scolaires</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Difficultés en géométrie et en mathématiques (alignement des chiffres, utilisation des outils)</li>
                          <li>Difficultés en lecture (suivi des lignes, organisation spatiale du texte)</li>
                          <li>Production écrite laborieuse et chronophage</li>
                          <li>Difficultés en arts plastiques, en technologie, en éducation physique</li>
                          <li>Décalage fréquent entre les capacités intellectuelles et les performances scolaires</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Manifestations selon l'âge</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Petite enfance (0-3 ans)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Retard dans les acquisitions motrices (se retourner, s'asseoir, marcher)</li>
                            <li>Difficultés à manipuler les jouets</li>
                            <li>Peu d'intérêt pour les activités de motricité fine</li>
                            <li>Difficultés d'alimentation (mastication, utilisation des couverts)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Âge préscolaire (3-6 ans)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés à apprendre à s'habiller seul</li>
                            <li>Maladresse dans les jeux de construction</li>
                            <li>Difficultés avec les puzzles et jeux d'encastrement</li>
                            <li>Difficultés à dessiner, colorier dans les contours</li>
                            <li>Problèmes de coordination dans les jeux de groupe</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Âge scolaire (6-12 ans)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés d'apprentissage de l'écriture</li>
                            <li>Problèmes en géométrie et en mathématiques</li>
                            <li>Difficultés dans les activités sportives</li>
                            <li>Lenteur d'exécution des tâches scolaires</li>
                            <li>Difficultés d'organisation du cartable, des cahiers</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Adolescence et âge adulte</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Persistance des difficultés d'écriture et d'organisation</li>
                            <li>Défis dans l'apprentissage de la conduite automobile</li>
                            <li>Difficultés avec certaines tâches professionnelles nécessitant de la coordination fine</li>
                            <li>Problèmes potentiels d'estime de soi et d'anxiété sociale</li>
                            <li>Développement de stratégies compensatoires efficaces chez certains</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Impact psychosocial</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Frustration et baisse de l'estime de soi face aux difficultés quotidiennes</li>
                          <li>Fatigue accrue due à l'effort supplémentaire nécessaire pour accomplir des tâches simples</li>
                          <li>Évitement de certaines activités sociales ou sportives</li>
                          <li>Risque accru d'anxiété et de troubles de l'humeur</li>
                          <li>Incompréhension de l'entourage (les difficultés étant souvent invisibles ou interprétées comme un manque d'effort)</li>
                          <li>Impact potentiel sur les relations sociales et la confiance en soi</li>
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
                      <CardTitle>Diagnostic et évaluation</CardTitle>
                    </div>
                    <CardDescription>
                      Processus et outils pour identifier et évaluer la dyspraxie
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Processus diagnostique</h3>
                      <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
                        <li>
                          <span className="font-medium">Repérage initial</span>
                          <p>Par les parents, enseignants ou médecins, suite à l'observation de difficultés persistantes dans la coordination motrice</p>
                        </li>
                        <li>
                          <span className="font-medium">Consultation médicale</span>
                          <p>Examen clinique, antécédents médicaux et développementaux, exclusion d'autres causes potentielles</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation multidisciplinaire</span>
                          <p>Orientation vers des professionnels spécialisés pour une évaluation approfondie</p>
                        </li>
                        <li>
                          <span className="font-medium">Synthèse diagnostique</span>
                          <p>Mise en commun des résultats et établissement du diagnostic selon les critères standardisés</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Critères diagnostiques</h3>
                      <p className="text-muted-foreground mb-3">
                        Selon le DSM-5 (Manuel diagnostique et statistique des troubles mentaux), le Trouble Développemental de la Coordination (TDC) est diagnostiqué sur la base de quatre critères :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">A. Acquisition et exécution des compétences motrices coordonnées</h4>
                          <p className="text-muted-foreground">
                            Significativement inférieures à celles attendues compte tenu de l'âge chronologique et des opportunités d'apprentissage.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">B. Impact fonctionnel</h4>
                          <p className="text-muted-foreground">
                            Interférence significative avec les activités de la vie quotidienne, la réussite scolaire ou professionnelle, les activités de loisirs.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">C. Début des symptômes</h4>
                          <p className="text-muted-foreground">
                            Durant la période développementale précoce.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">D. Exclusion d'autres causes</h4>
                          <p className="text-muted-foreground">
                            Les difficultés ne sont pas mieux expliquées par une déficience intellectuelle, un trouble visuel, ou une affection neurologique.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Professionnels impliqués</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation médicale</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Médecin généraliste</li>
                            <li>Pédiatre</li>
                            <li>Neuropédiatre</li>
                            <li>Médecin de rééducation fonctionnelle</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation fonctionnelle</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Psychomotricien</li>
                            <li>Ergothérapeute</li>
                            <li>Orthophoniste (si dyspraxie verbale)</li>
                            <li>Psychologue ou neuropsychologue</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Outils d'évaluation</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Tests standardisés de motricité</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>M-ABC (Movement Assessment Battery for Children)</li>
                            <li>BOT-2 (Bruininks-Oseretsky Test of Motor Proficiency)</li>
                            <li>DCDQ (Developmental Coordination Disorder Questionnaire)</li>
                            <li>BHK (test d'évaluation de l'écriture)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluations complémentaires</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Évaluation des fonctions visuo-spatiales</li>
                            <li>Évaluation des praxies gestuelles et constructives</li>
                            <li>Évaluation des compétences graphomotrices</li>
                            <li>Observation en situation écologique (activités quotidiennes)</li>
                            <li>Questionnaires parentaux et enseignants</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Diagnostic différentiel</h3>
                      <p className="text-muted-foreground mb-3">
                        Plusieurs conditions peuvent présenter des symptômes similaires et doivent être distinguées de la dyspraxie :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Troubles neurologiques (paralysie cérébrale légère, dystonie)</li>
                        <li>Troubles musculaires ou articulaires</li>
                        <li>Déficience visuelle non corrigée</li>
                        <li>Déficience intellectuelle (mais la dyspraxie peut coexister avec elle)</li>
                        <li>Trouble du spectre autistique (qui peut également être comorbide)</li>
                        <li>Troubles de l'attention sans difficultés motrices spécifiques</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Diagnostic chez l'adulte</h3>
                      <p className="text-muted-foreground mb-3">
                        Le diagnostic de la dyspraxie à l'âge adulte présente des spécificités :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Souvent réalisé suite à une auto-identification ou à des difficultés persistantes</li>
                        <li>Nécessité de reconstituer l'histoire développementale (témoignages parentaux, bulletins scolaires)</li>
                        <li>Évaluation des stratégies compensatoires développées</li>
                        <li>Tests adaptés à l'âge adulte</li>
                        <li>Prise en compte de l'impact fonctionnel dans la vie professionnelle et personnelle</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Importance du diagnostic précoce</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Mise en place d'interventions adaptées dès que possible</li>
                          <li>Prévention des difficultés scolaires et des répercussions psychologiques</li>
                          <li>Adaptation de l'environnement éducatif et familial</li>
                          <li>Meilleure compréhension des difficultés par l'enfant et son entourage</li>
                          <li>Accès aux dispositifs d'aide et d'aménagements scolaires</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Interventions Tab */}
            <TabsContent value="interventions">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="h-6 w-6 text-neuro-orange" />
                      <CardTitle>Interventions et accompagnement</CardTitle>
                    </div>
                    <CardDescription>
                      Approches thérapeutiques et adaptations pour les personnes dyspraxiques
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Principes d'intervention</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Intervention précoce dès l'identification des difficultés</li>
                        <li>Approche multidisciplinaire coordonnée</li>
                        <li>Programmes personnalisés selon les besoins spécifiques</li>
                        <li>Implication des parents et de l'environnement scolaire</li>
                        <li>Valorisation des forces et compétences de la personne</li>
                        <li>Développement de l'autonomie et de l'estime de soi</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Rééducations spécialisées</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Psychomotricité</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Développement de la coordination globale et de l'équilibre</li>
                            <li>Amélioration du schéma corporel et de l'orientation spatiale</li>
                            <li>Travail sur la planification motrice</li>
                            <li>Renforcement des compétences visuo-spatiales</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Ergothérapie</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Développement des habiletés motrices fines</li>
                            <li>Apprentissage de stratégies pour les activités quotidiennes</li>
                            <li>Adaptation des outils et de l'environnement</li>
                            <li>Rééducation de l'écriture ou proposition d'alternatives</li>
                            <li>Entraînement aux activités fonctionnelles spécifiques</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Orthophonie</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Pour les cas de dyspraxie verbale</li>
                            <li>Travail sur la planification et la coordination des mouvements articulatoires</li>
                            <li>Amélioration de l'intelligibilité du discours</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Adaptations scolaires</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Aménagements pédagogiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Temps supplémentaire pour les évaluations</li>
                            <li>Réduction de la quantité d'écrit</li>
                            <li>Photocopies des cours</li>
                            <li>Présentation adaptée des documents</li>
                            <li>Évaluations à l'oral plutôt qu'à l'écrit</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Outils technologiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Ordinateur avec logiciels adaptés</li>
                            <li>Logiciels de dictée vocale</li>
                            <li>Calculatrice pour les mathématiques</li>
                            <li>Applications spécifiques pour l'organisation</li>
                            <li>Enregistreurs pour les cours</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Dispositifs institutionnels</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Plan d'Accompagnement Personnalisé (PAP)</li>
                          <li>Projet Personnalisé de Scolarisation (PPS) avec la MDPH</li>
                          <li>Accompagnant d'Élève en Situation de Handicap (AESH)</li>
                          <li>Services d'éducation spéciale (SESSAD)</li>
                          <li>Aménagements pour les examens</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Adaptations dans la vie quotidienne</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Habillage et soins personnels</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Vêtements avec velcro plutôt que boutons</li>
                            <li>Chaussures à scratch ou élastiques</li>
                            <li>Organisation séquentielle des routines d'hygiène</li>
                            <li>Utilisation d'aides visuelles et de check-lists</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Organisation et repères</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Codes couleur pour le rangement</li>
                            <li>Emplois du temps visuels</li>
                            <li>Applications de rappel et d'organisation</li>
                            <li>Préparation et anticipation des changements</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Alimentation</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Couverts adaptés avec manches plus épais</li>
                            <li>Assiettes antidérapantes</li>
                            <li>Verres avec couvercle ou paille</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien psychologique</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Renforcement de l'estime de soi</li>
                          <li>Gestion de la frustration et de l'anxiété</li>
                          <li>Développement de stratégies de coping</li>
                          <li>Accompagnement dans l'acceptation des différences</li>
                          <li>Thérapies cognitives et comportementales si nécessaire</li>
                          <li>Groupes de parole et d'entraide</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Transition vers l'âge adulte</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Orientation professionnelle</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Évaluation des forces et intérêts</li>
                            <li>Choix de formations adaptées</li>
                            <li>Reconnaissance de la qualité de travailleur handicapé (RQTH)</li>
                            <li>Accompagnement vers l'emploi</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Vie autonome</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Apprentissage de la gestion budgétaire</li>
                            <li>Développement des compétences domestiques</li>
                            <li>Gestion administrative</li>
                            <li>Mobilité et déplacements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien aux familles</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Information et formation sur la dyspraxie</li>
                          <li>Guidance parentale pour les adaptations à domicile</li>
                          <li>Orientation vers les associations et ressources</li>
                          <li>Aide administrative pour les démarches MDPH</li>
                          <li>Groupes de parents et réseaux de soutien</li>
                        </ul>
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
                      Informations, associations et outils pour les personnes dyspraxiques et leurs proches
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Associations</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Dyspraxie France Dys (DFD)</span>
                            <p>Association nationale proposant information, soutien, formations et défense des droits</p>
                          </li>
                          <li>
                            <span className="font-medium">Fédération Française des Dys (FFDys)</span>
                            <p>Regroupement d'associations concernant les troubles spécifiques du langage et des apprentissages</p>
                          </li>
                          <li>
                            <span className="font-medium">DMF - Dyspraxique Mais Fantastique</span>
                            <p>Association sensibilisant le grand public et soutenant les familles</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Documentation et guides</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pour les familles</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>"100 idées pour aider les élèves dyspraxiques" - Amanda Kirby</li>
                            <li>"La dyspraxie : 100 questions/réponses" - Caroline Huron</li>
                            <li>"Mon cerveau ne m'écoute pas : Comprendre et aider l'enfant dyspraxique" - Sylvie Breton</li>
                            <li>Guides pratiques des associations spécialisées</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pour les enseignants</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>"Troubles des apprentissages : l'école inclusive" - INSHEA</li>
                            <li>"Scolariser les élèves dyspraxiques" - Éduscol</li>
                            <li>Fiches pratiques pour les adaptations en classe</li>
                            <li>Ressources pédagogiques adaptées par matière</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Outils et logiciels</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Aides à l'écriture</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Logiciels de traitement de texte avec prédiction de mots</li>
                            <li>Logiciels de dictée vocale</li>
                            <li>Claviers adaptés</li>
                            <li>Stylos numériques et scanners portables</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Organisation et planification</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Applications de gestion du temps</li>
                            <li>Agendas électroniques avec alertes</li>
                            <li>Applications de check-lists et de rappels</li>
                            <li>Organisateurs visuels et mind mapping</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Outils spécifiques pour l'école</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Logiciels de géométrie adaptés</li>
                          <li>Calculatrices à grand affichage</li>
                          <li>Logiciels de cartographie mentale</li>
                          <li>Applications pour la lecture et la prise de notes</li>
                          <li>Matériel adapté (règles avec poignée, ciseaux spéciaux)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Formation et sensibilisation</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Pour les professionnels</span>
                            <p>Formations continues sur la dyspraxie proposées par diverses institutions</p>
                          </li>
                          <li>
                            <span className="font-medium">Pour les familles</span>
                            <p>Ateliers parents organisés par les associations</p>
                          </li>
                          <li>
                            <span className="font-medium">Pour le grand public</span>
                            <p>Conférences de sensibilisation, documentaires, témoignages</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Témoignages et communauté</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Forums en ligne pour parents et personnes dyspraxiques</li>
                          <li>Groupes de soutien locaux</li>
                          <li>Blogs et chaînes YouTube de personnes partageant leur expérience</li>
                          <li>Réseaux sociaux dédiés aux troubles neurodéveloppementaux</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ressources institutionnelles</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">MDPH (Maison Départementale des Personnes Handicapées)</span>
                            <p>Pour la reconnaissance du handicap et l'accès aux droits</p>
                          </li>
                          <li>
                            <span className="font-medium">Centres de référence des troubles des apprentissages</span>
                            <p>Pour le diagnostic et l'orientation vers les soins adaptés</p>
                          </li>
                          <li>
                            <span className="font-medium">Éducation nationale</span>
                            <p>Ressources pour la scolarisation et les aménagements</p>
                          </li>
                          <li>
                            <span className="font-medium">INSHEA</span>
                            <p>Institut national supérieur de formation et de recherche pour l'éducation des jeunes handicapés</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>    </div>
  );
};

export default Dyspraxie;
