
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Puzzle, Brain, ClipboardCheck, Lightbulb, Book, Users, MessageCircle, ArrowLeft, HeartHandshake, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Autisme = () => {
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
                <span className="text-neuro-green">Autisme</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Trouble du spectre autistique
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
                <TabsTrigger value="symptoms">Caractéristiques</TabsTrigger>
                <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
                <TabsTrigger value="interventions">Accompagnement</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Presentation Tab */}
            <TabsContent value="presentation">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Puzzle className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Comprendre l'autisme</CardTitle>
                    </div>
                    <CardDescription>
                      Un trouble neurodéveloppemental qui affecte la communication et les interactions sociales
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Définition</h3>
                      <p className="text-muted-foreground">
                        L'autisme, ou trouble du spectre de l'autisme (TSA), est un trouble neurodéveloppemental caractérisé par des difficultés dans les interactions sociales, 
                        la communication verbale et non verbale, ainsi que par des comportements ou intérêts restreints et répétitifs. L'autisme est considéré comme un "spectre" 
                        car il se manifeste différemment chez chaque personne, avec une grande variabilité dans la nature et l'intensité des symptômes.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Prévalence</h3>
                      <p className="text-muted-foreground">
                        Selon les dernières estimations, l'autisme touche environ 1 personne sur 100 dans le monde. Les diagnostics ont considérablement augmenté ces dernières décennies, 
                        en partie grâce à une meilleure reconnaissance du trouble et à l'élargissement des critères diagnostiques. L'autisme est diagnostiqué environ quatre fois plus souvent 
                        chez les garçons que chez les filles, bien que des recherches récentes suggèrent que les filles pourraient être sous-diagnostiquées en raison de présentations différentes.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Origines et causes</h3>
                      <p className="text-muted-foreground mb-4">
                        L'autisme est d'origine neurobiologique et résulte d'une combinaison complexe de facteurs génétiques et environnementaux qui influencent le développement cérébral.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs génétiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Plus de 100 gènes identifiés comme potentiellement impliqués</li>
                            <li>Risque accru en cas d'antécédents familiaux</li>
                            <li>Taux de concordance élevé chez les jumeaux monozygotes</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs environnementaux</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Facteurs prénataux (âge parental avancé, complications durant la grossesse)</li>
                            <li>Expositions à certains agents environnementaux</li>
                            <li>Interactions complexes entre gènes et environnement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Particularités neurologiques</h3>
                      <p className="text-muted-foreground mb-3">
                        Les recherches en neurosciences ont identifié plusieurs particularités dans le cerveau des personnes autistes :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Connectivité cérébrale atypique (surconnectivité locale, sous-connectivité entre régions distantes)</li>
                        <li>Différences dans le développement et la maturation des circuits neuronaux</li>
                        <li>Traitement sensoriel altéré (hypersensibilité ou hyposensibilité)</li>
                        <li>Particularités dans les mécanismes de l'attention et du traitement de l'information sociale</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Le concept de neurodiversité</h3>
                      <p className="text-muted-foreground">
                        Le mouvement de la neurodiversité considère l'autisme non comme un trouble à guérir, mais comme une variation naturelle du cerveau humain. 
                        Cette perspective met l'accent sur les forces et les talents uniques des personnes autistes, tout en reconnaissant les défis qu'elles peuvent rencontrer 
                        dans un monde principalement conçu pour les personnes neurotypiques. L'approche de la neurodiversité promeut l'acceptation, l'inclusion et l'adaptation 
                        de l'environnement plutôt que l'effort de normalisation des personnes autistes.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Comorbidités fréquentes</h3>
                      <p className="text-muted-foreground mb-3">
                        L'autisme est souvent associé à d'autres conditions :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Trouble du déficit de l'attention avec ou sans hyperactivité (TDAH)</li>
                        <li>Troubles anxieux</li>
                        <li>Troubles de l'humeur</li>
                        <li>Épilepsie (chez environ 20-30% des personnes autistes)</li>
                        <li>Troubles du sommeil</li>
                        <li>Troubles gastro-intestinaux</li>
                        <li>Troubles des apprentissages spécifiques</li>
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
                      <Users className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Caractéristiques de l'autisme</CardTitle>
                    </div>
                    <CardDescription>
                      Les manifestations varient considérablement d'une personne à l'autre
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Communication et interactions sociales</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Difficultés à initier ou maintenir des conversations</li>
                          <li>Compréhension limitée des règles sociales implicites</li>
                          <li>Difficultés à comprendre les expressions faciales, le ton de voix et le langage corporel</li>
                          <li>Tendance à interpréter littéralement le langage</li>
                          <li>Contact visuel atypique (évitement ou fixation)</li>
                          <li>Défis dans le développement et le maintien des relations amicales</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        Les difficultés sociales ne signifient pas un manque d'intérêt pour les relations. Beaucoup de personnes autistes désirent des connections sociales 
                        mais peuvent se sentir dépassées ou ne pas savoir comment naviguer dans les situations sociales complexes.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Comportements et intérêts restreints et répétitifs</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Intérêts spécifiques et intenses</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Passion et expertise dans des domaines particuliers</li>
                            <li>Connaissance approfondie et détaillée de sujets spécifiques</li>
                            <li>Absorption complète dans des activités d'intérêt</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Mouvements répétitifs</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Balancements, battements de mains (stimming)</li>
                            <li>Comportements auto-apaisants</li>
                            <li>Mouvements qui aident à réguler les émotions ou la sensorialité</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Besoin de prévisibilité</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Attachement aux routines et aux rituels</li>
                            <li>Détresse face aux changements inattendus</li>
                            <li>Préférence pour l'ordre et les structures claires</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pensée et perception</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Attention aux détails (parfois au détriment de la vision globale)</li>
                            <li>Pensée visuelle souvent développée</li>
                            <li>Approche logique et systématique des problèmes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Sensorialité atypique</h3>
                      <p className="text-muted-foreground mb-3">
                        Les personnes autistes traitent souvent l'information sensorielle différemment :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Hypersensibilités</h4>
                          <p className="text-muted-foreground mb-2">Réactions exacerbées aux stimuli sensoriels :</p>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Sons (bruits de fond, sons aigus ou inattendus)</li>
                            <li>Lumières (néons, lumières vives ou clignotantes)</li>
                            <li>Textures (vêtements, aliments, contacts physiques)</li>
                            <li>Odeurs ou goûts intenses</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Hyposensibilités</h4>
                          <p className="text-muted-foreground mb-2">Réactions diminuées aux stimuli sensoriels :</p>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Seuil de douleur élevé</li>
                            <li>Recherche de stimulations sensorielles intenses</li>
                            <li>Conscience corporelle réduite</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Fonctionnement cognitif</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <p className="text-muted-foreground mb-2">
                          Les personnes autistes présentent souvent des profils cognitifs particuliers :
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Forces dans le traitement des détails et l'analyse systématique</li>
                          <li>Mémoire exceptionnelle dans certains domaines</li>
                          <li>Pensée originale et créative</li>
                          <li>Aptitudes particulières en mathématiques, musique, arts ou sciences pour certains</li>
                          <li>Défis dans les fonctions exécutives (planification, organisation, flexibilité cognitive)</li>
                          <li>Difficultés potentielles avec la théorie de l'esprit (comprendre les pensées et émotions d'autrui)</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        Les capacités intellectuelles des personnes autistes sont très variables. L'autisme peut être associé à une déficience intellectuelle, 
                        à une intelligence moyenne ou supérieure à la moyenne. Environ 30 à 50% des personnes autistes ont une déficience intellectuelle associée.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Régulation émotionnelle</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Difficultés à identifier et exprimer ses propres émotions (alexithymie)</li>
                          <li>Réactions émotionnelles qui peuvent sembler disproportionnées</li>
                          <li>"Surcharges" (meltdowns) en situation de stress ou de surcharge sensorielle</li>
                          <li>Anxiété fréquente face aux situations sociales ou aux changements</li>
                          <li>Expressions émotionnelles qui peuvent être mal interprétées par les autres</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Diversité des profils</h3>
                      <p className="text-muted-foreground mb-3">
                        L'autisme se manifeste de façon extrêmement variable. Parmi les facteurs qui influencent cette diversité :
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li><span className="font-medium">Niveau de soutien nécessaire</span> : Les classifications actuelles distinguent trois niveaux selon l'intensité du soutien requis (léger, modéré, important)</li>
                        <li><span className="font-medium">Développement du langage</span> : Certaines personnes autistes ne développent pas de langage verbal, d'autres ont un langage fluide mais avec des particularités pragmatiques</li>
                        <li><span className="font-medium">Différences liées au genre</span> : L'autisme peut se présenter différemment chez les filles et les femmes (meilleures stratégies de camouflage social, intérêts spécifiques plus socialement acceptés)</li>
                        <li><span className="font-medium">Évolution avec l'âge</span> : Les manifestations changent souvent au cours du développement, avec généralement une amélioration des compétences sociales et adaptatives</li>
                      </ul>
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
                      <ClipboardCheck className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Diagnostic de l'autisme</CardTitle>
                    </div>
                    <CardDescription>
                      Un processus multidisciplinaire basé sur l'observation et l'évaluation standardisée
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Signes précoces</h3>
                      <p className="text-muted-foreground mb-3">
                        Certains indicateurs peuvent être observés dès la petite enfance :
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Avant 12 mois</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Peu de contact visuel ou d'attention conjointe</li>
                            <li>Absence de babillage ou de gestes sociaux (pointer, faire coucou)</li>
                            <li>Réactions inhabituelles aux stimuli sensoriels</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Entre 12 et 24 mois</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Retard ou régression dans le développement du langage</li>
                            <li>Absence de jeu symbolique</li>
                            <li>Intérêt limité pour les interactions sociales</li>
                            <li>Mouvements répétitifs ou inhabituels</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Démarche diagnostique</h3>
                      <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
                        <li>
                          <span className="font-medium">Repérage des signes d'alerte</span>
                          <p>Par les parents, éducateurs, médecins ou enseignants</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation médicale préliminaire</span>
                          <p>Examen clinique, antécédents familiaux, développement de l'enfant</p>
                        </li>
                        <li>
                          <span className="font-medium">Orientation vers des spécialistes</span>
                          <p>Centres de diagnostic spécialisés, pédopsychiatres, équipes multidisciplinaires</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation diagnostique complète</span>
                          <p>Entretiens, observations directes, tests standardisés, évaluations fonctionnelles</p>
                        </li>
                        <li>
                          <span className="font-medium">Examens complémentaires</span>
                          <p>Si nécessaire : tests génétiques, évaluations neurologiques, audiométrie, etc.</p>
                        </li>
                        <li>
                          <span className="font-medium">Synthèse et annonce du diagnostic</span>
                          <p>Présentation des résultats, niveau de sévérité, recommandations personnalisées</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Professionnels impliqués</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Pédopsychiatre ou psychiatre</li>
                          <li>Psychologue spécialisé en neurodéveloppement</li>
                          <li>Orthophoniste</li>
                          <li>Psychomotricien ou ergothérapeute</li>
                          <li>Neurologue (dans certains cas)</li>
                          <li>Généticien (dans certains cas)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Outils diagnostiques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Outils d'observation</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>ADOS-2 (Autism Diagnostic Observation Schedule)</li>
                            <li>CARS (Childhood Autism Rating Scale)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Entretiens et questionnaires</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>ADI-R (Autism Diagnostic Interview-Revised)</li>
                            <li>M-CHAT (Modified Checklist for Autism in Toddlers)</li>
                            <li>SCQ (Social Communication Questionnaire)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Critères diagnostiques</h3>
                      <p className="text-muted-foreground mb-3">
                        Selon le DSM-5, le diagnostic du Trouble du Spectre de l'Autisme (TSA) repose sur deux domaines principaux :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">A. Déficits persistants de la communication et des interactions sociales</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés dans la réciprocité socio-émotionnelle</li>
                            <li>Déficits des comportements communicatifs non verbaux</li>
                            <li>Difficultés à développer, maintenir et comprendre les relations sociales</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">B. Caractère restreint et répétitif des comportements, intérêts ou activités</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Mouvements, utilisation d'objets ou langage stéréotypés ou répétitifs</li>
                            <li>Insistance sur la similitude, adhésion inflexible aux routines</li>
                            <li>Intérêts très restreints et fixes, anormaux dans leur intensité ou leur objet</li>
                            <li>Hyper ou hypo-réactivité à des stimuli sensoriels ou intérêt inhabituel pour les aspects sensoriels de l'environnement</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-3">
                        Ces symptômes doivent être présents dès la petite enfance et entraîner des limitations significatives dans le fonctionnement quotidien.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Niveaux de sévérité</h3>
                      <p className="text-muted-foreground mb-3">
                        Le DSM-5 définit trois niveaux de sévérité selon l'intensité du soutien nécessaire :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Niveau 1 : "Nécessitant un soutien"</h4>
                          <p className="text-muted-foreground">
                            Difficultés dans l'initiation des interactions sociales, réponses atypiques aux ouvertures sociales des autres. 
                            Inflexibilité comportementale causant une interférence significative avec le fonctionnement.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Niveau 2 : "Nécessitant un soutien substantiel"</h4>
                          <p className="text-muted-foreground">
                            Déficits marqués dans les compétences de communication verbale et non verbale. 
                            Inflexibilité comportementale, difficulté à faire face au changement, comportements répétitifs fréquents.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Niveau 3 : "Nécessitant un soutien très substantiel"</h4>
                          <p className="text-muted-foreground">
                            Déficits graves dans la communication verbale et non verbale causant un handicap sévère dans le fonctionnement. 
                            Inflexibilité comportementale extrême, grande détresse lors des changements, comportements répétitifs interférant avec tous les domaines du fonctionnement.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Diagnostic différentiel</h3>
                      <p className="text-muted-foreground mb-3">
                        Plusieurs conditions peuvent présenter des caractéristiques qui se chevauchent avec l'autisme :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Trouble du développement du langage</li>
                        <li>Trouble de l'attachement</li>
                        <li>Trouble déficitaire de l'attention avec hyperactivité (TDAH)</li>
                        <li>Trouble obsessionnel-compulsif</li>
                        <li>Trouble anxieux social</li>
                        <li>Déficience intellectuelle sans autisme</li>
                        <li>Troubles sensoriels (auditifs, visuels) non diagnostiqués</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Diagnostic chez l'adulte</h3>
                      <p className="text-muted-foreground mb-3">
                        De nombreuses personnes reçoivent un diagnostic à l'âge adulte, ce qui présente des spécificités :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Reconnaissance croissante de l'autisme chez les adultes, particulièrement ceux sans déficience intellectuelle</li>
                        <li>Difficultés liées au développement de stratégies de compensation qui peuvent masquer certains symptômes</li>
                        <li>Importance de l'autoévaluation et de l'histoire développementale</li>
                        <li>Outils spécifiques comme l'AAA (Adult Asperger Assessment) ou le RAADS-R (Ritvo Autism Asperger Diagnostic Scale-Revised)</li>
                        <li>Bénéfices du diagnostic : meilleure compréhension de soi, accès aux soutiens adaptés, reconnaissance légale</li>
                      </ul>
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
                      <Lightbulb className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Accompagnement et soutien</CardTitle>
                    </div>
                    <CardDescription>
                      Approches et interventions pour favoriser le développement et la qualité de vie
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Principes généraux</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Intervention précoce dès l'identification des premiers signes</li>
                        <li>Approche individualisée adaptée aux forces et défis spécifiques</li>
                        <li>Implication active des parents et de la famille</li>
                        <li>Coordination entre les différents professionnels</li>
                        <li>Objectifs ciblant l'amélioration de la qualité de vie et de l'autonomie</li>
                        <li>Adaptation de l'environnement plutôt que normalisation forcée</li>
                        <li>Respect de la neurodiversité et des particularités de chaque personne</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Approches d'intervention</h3>
                      <div className="space-y-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Approches développementales</h4>
                          <p className="text-muted-foreground mb-2">
                            Centrées sur le développement des relations sociales et de la communication à partir des intérêts de l'enfant :
                          </p>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>ESDM (Early Start Denver Model)</li>
                            <li>DIR/Floortime (Developmental, Individual Difference, Relationship-based)</li>
                            <li>PACT (Paediatric Autism Communication Therapy)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Approches comportementales</h4>
                          <p className="text-muted-foreground mb-2">
                            Structurées autour de l'apprentissage de compétences spécifiques :
                          </p>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>ABA (Applied Behavior Analysis) dans ses formes contemporaines</li>
                            <li>TEACCH (Treatment and Education of Autistic and related Communication handicapped CHildren)</li>
                            <li>PRT (Pivotal Response Treatment)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Thérapies ciblées</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-medium">Communication</p>
                              <ul className="list-disc pl-5 text-muted-foreground">
                                <li>Orthophonie</li>
                                <li>PECS (Picture Exchange Communication System)</li>
                                <li>Communication alternative et augmentée</li>
                              </ul>
                            </div>
                            
                            <div>
                              <p className="font-medium">Motricité et sensoriel</p>
                              <ul className="list-disc pl-5 text-muted-foreground">
                                <li>Ergothérapie</li>
                                <li>Psychomotricité</li>
                                <li>Intégration sensorielle</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Interventions sociales et émotionnelles</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Groupes d'habiletés sociales</li>
                            <li>Thérapie cognitivo-comportementale adaptée</li>
                            <li>Scénarios sociaux</li>
                            <li>Apprentissage de la reconnaissance et de la régulation émotionnelle</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien à l'éducation</h3>
                      <div className="bg-secondary p-4 rounded-lg space-y-3">
                        <h4 className="font-medium">Adaptations en milieu scolaire</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Projet Personnalisé de Scolarisation (PPS)</li>
                          <li>Accompagnants d'Élèves en Situation de Handicap (AESH)</li>
                          <li>Adaptations pédagogiques (consignes visuelles, temps supplémentaire)</li>
                          <li>Aménagements sensoriels (place dans la classe, réduction des stimuli)</li>
                          <li>Utilisation d'outils numériques adaptés</li>
                        </ul>
                        
                        <h4 className="font-medium">Dispositifs spécialisés</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>ULIS (Unités Localisées pour l'Inclusion Scolaire)</li>
                          <li>IME (Instituts Médico-Éducatifs)</li>
                          <li>SESSAD (Services d'Éducation Spéciale et de Soins à Domicile)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien à l'adolescence et à l'âge adulte</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Transition vers l'âge adulte</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Préparation à l'autonomie dans la vie quotidienne</li>
                            <li>Orientation professionnelle adaptée aux intérêts et compétences</li>
                            <li>Apprentissage des compétences sociales pour les contextes adultes</li>
                            <li>Soutien à l'autodétermination et aux choix de vie</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Vie professionnelle</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Entreprises adaptées</li>
                            <li>Job coaching et emploi accompagné</li>
                            <li>Aménagements du poste de travail</li>
                            <li>Reconnaissance de la Qualité de Travailleur Handicapé (RQTH)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien aux familles</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Programmes de formation pour les parents (ex : programmes de guidance parentale)</li>
                          <li>Groupes de parole et d'entraide</li>
                          <li>Répit (accueils temporaires, séjours adaptés)</li>
                          <li>Soutien psychologique</li>
                          <li>Aide administrative pour l'accès aux droits</li>
                          <li>Guidance pour la fratrie</li>
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
                      <Book className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Ressources utiles</CardTitle>
                    </div>
                    <CardDescription>
                      Associations, livres, et outils pour s'informer et trouver du soutien
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Associations et organismes</h3>
                      <div className="grid gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">En France</h4>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                              <span className="font-medium">Autisme France</span>
                              <p>Association nationale de familles et de personnes autistes</p>
                              <p className="text-neuro-green">www.autisme-france.fr</p>
                            </li>
                            <li>
                              <span className="font-medium">CRA (Centres Ressources Autisme)</span>
                              <p>Centres régionaux d'évaluation, d'information et de formation</p>
                              <p className="text-neuro-green">www.gncra.fr</p>
                            </li>
                            <li>
                              <span className="font-medium">AFFA (Association Francophone de Femmes Autistes)</span>
                              <p>Association dédiée aux femmes et filles autistes</p>
                              <p className="text-neuro-green">www.femmes-autistes-francophonie.com</p>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">À l'international</h4>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                              <span className="font-medium">Autism Speaks</span>
                              <p>Organisation américaine de recherche et de sensibilisation</p>
                              <p className="text-neuro-green">www.autismspeaks.org</p>
                            </li>
                            <li>
                              <span className="font-medium">National Autistic Society (UK)</span>
                              <p>Association britannique pour les personnes autistes</p>
                              <p className="text-neuro-green">www.autism.org.uk</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Livres et publications</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pour les personnes autistes</h4>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>"Je suis né un jour bleu" - Daniel Tammet</li>
                            <li>"Je suis à l'Est !" - Josef Schovanec</li>
                            <li>"Saccades" - Temple Grandin</li>
                            <li>"Le Bizarre Incident du chien pendant la nuit" - Mark Haddon (fiction)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pour les parents et proches</h4>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>"L'autisme expliqué aux non-autistes" - Brigitte Harrisson et Lise St-Charles</li>
                            <li>"Comprendre l'autisme pour les nuls" - Stephen Shore et Linda G. Rastelli</li>
                            <li>"Le guide de survie de la personne autiste" - Jen Birch</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pour les professionnels</h4>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>"L'intervention précoce pour enfants avec autisme" - Sally J. Rogers et Geraldine Dawson</li>
                            <li>"Autisme : la décennie neuronale" - Éric Lemonnier et Catherine Barthélémy</li>
                            <li>"Recommandations pour la pratique clinique du dépistage et du diagnostic de l'autisme" - HAS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Ressources numériques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sites d'information</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Participate! (plateforme d'information sur l'autisme)</li>
                            <li>Spectre de l'autisme (informations en français)</li>
                            <li>Autism Research Institute (recherches scientifiques)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Applications et outils</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Visual Timer (gestion du temps visuelle)</li>
                            <li>Pictogram Agenda (planification visuelle)</li>
                            <li>Social Stories Creator</li>
                            <li>Calm Counter (gestion des émotions)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Témoignages et blogs</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Le Carnet d'Emma</span>
                            <p>Blog d'une jeune femme autiste sur son quotidien</p>
                          </li>
                          <li>
                            <span className="font-medium">Aspie-Friendly</span>
                            <p>Témoignages et conseils de personnes autistes Asperger</p>
                          </li>
                          <li>
                            <span className="font-medium">La Différence Invisible</span>
                            <p>BD sur l'autisme au féminin par Julie Dachez</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Événements et formations</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Journée mondiale de sensibilisation à l'autisme (2 avril)</li>
                          <li>Congrès annuel d'Autisme France</li>
                          <li>Formations pour les aidants familiaux (proposées par les CRA)</li>
                          <li>Webinaires et MOOC sur l'autisme (plateforme FUN-MOOC)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Lignes d'écoute et de soutien</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Autisme Info Service</span>
                            <p>0 800 71 40 40 (gratuit)</p>
                            <p>Service national d'information et d'orientation par téléphone</p>
                          </li>
                          <li>
                            <span className="font-medium">SOS Autisme France</span>
                            <p>0 800 34 00 40 (gratuit)</p>
                            <p>Écoute, soutien et conseils aux familles</p>
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

export default Autisme;
