
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Users, ClipboardCheck, Lightbulb, MessageCircle, ArrowLeft, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const TDAH = () => {
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
                <span className="text-neuro-purple">TDAH</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Trouble du déficit de l'attention avec ou sans hyperactivité
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
                <TabsTrigger value="interventions">Traitements</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Presentation Tab */}
            <TabsContent value="presentation">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Brain className="h-6 w-6 text-neuro-purple" />
                      <CardTitle>Comprendre le TDAH</CardTitle>
                    </div>
                    <CardDescription>
                      Un trouble neurodéveloppemental affectant l'attention, l'impulsivité et parfois l'activité motrice
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Content goes here */}
                    <p className="text-muted-foreground">
                      Le Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDAH) est un trouble neurodéveloppemental 
                      qui affecte la capacité d'une personne à maintenir son attention, à contrôler son impulsivité et, dans certains cas, 
                      à réguler son niveau d'activité. Ces difficultés sont plus prononcées que ce qu'on pourrait attendre pour l'âge de la personne 
                      et entraînent un impact significatif sur son fonctionnement quotidien.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Prévalence</h3>
                      <p className="text-muted-foreground">
                        Le TDAH touche environ 5% des enfants et 2,5% des adultes dans le monde. Il est diagnostiqué plus fréquemment 
                        chez les garçons que chez les filles, bien que cette différence puisse être en partie due à des biais diagnostiques, 
                        les filles présentant souvent des symptômes moins visibles d'hyperactivité.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Causes et facteurs de risque</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs neurologiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Différences dans la structure et le fonctionnement cérébral</li>
                            <li>Déséquilibres des neurotransmetteurs (dopamine, noradrénaline)</li>
                            <li>Développement atypique des circuits préfrontaux</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs génétiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Héritabilité élevée (environ 70-80%)</li>
                            <li>Présence fréquente d'antécédents familiaux</li>
                            <li>Identification de plusieurs gènes candidats</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Facteurs environnementaux</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Complications durant la grossesse ou l'accouchement</li>
                          <li>Exposition prénatale à certaines substances (alcool, nicotine)</li>
                          <li>Prématurité et faible poids de naissance</li>
                          <li>Exposition à certaines toxines environnementales</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Mécanismes neurologiques</h3>
                      <p className="text-muted-foreground mb-3">
                        Les recherches en neurosciences ont permis d'identifier plusieurs particularités cérébrales chez les personnes avec TDAH :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Volume légèrement réduit dans certaines régions cérébrales (cortex préfrontal, ganglions de la base, cervelet)</li>
                        <li>Activité cérébrale atypique, notamment dans les réseaux impliqués dans le contrôle exécutif</li>
                        <li>Connectivité modifiée entre différentes régions du cerveau</li>
                        <li>Développement cérébral légèrement retardé (particulièrement dans les régions frontales)</li>
                        <li>Fonctionnement atypique des systèmes dopaminergique et noradrénergique</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Présentations cliniques</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Présentation à prédominance inattentive</h4>
                          <p className="text-muted-foreground">
                            Difficultés principalement liées à l'attention, la concentration et l'organisation, sans hyperactivité marquée.
                            Cette présentation est plus fréquente chez les filles et peut passer inaperçue plus longtemps.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Présentation à prédominance hyperactive/impulsive</h4>
                          <p className="text-muted-foreground">
                            Hyperactivité et impulsivité prédominantes, avec des difficultés moindres au niveau de l'attention.
                            Cette présentation est plus facilement identifiable en raison des comportements visibles.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Présentation combinée</h4>
                          <p className="text-muted-foreground">
                            Association significative de symptômes d'inattention et d'hyperactivité/impulsivité.
                            C'est la présentation la plus fréquemment diagnostiquée.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évolution au cours de la vie</h3>
                      <p className="text-muted-foreground mb-3">
                        Le TDAH est un trouble chronique dont les manifestations évoluent avec l'âge :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Enfance</h4>
                          <p className="text-muted-foreground">
                            Hyperactivité souvent plus visible, difficultés d'apprentissage, problèmes de comportement.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Adolescence</h4>
                          <p className="text-muted-foreground">
                            L'hyperactivité peut diminuer mais les difficultés d'attention persistent, défis académiques plus importants,
                            prises de risques accrues.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Âge adulte</h4>
                          <p className="text-muted-foreground">
                            Hyperactivité souvent internalisée (agitation intérieure), difficultés organisationnelles, professionnelles et relationnelles,
                            problèmes de gestion du temps et des priorités.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Comorbidités fréquentes</h3>
                      <p className="text-muted-foreground mb-3">
                        Plus de 60% des personnes avec TDAH présentent au moins un autre trouble associé :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Troubles des apprentissages (dyslexie, dyscalculie...)</li>
                        <li>Troubles anxieux</li>
                        <li>Troubles de l'humeur (dépression)</li>
                        <li>Trouble oppositionnel avec provocation</li>
                        <li>Trouble du spectre autistique</li>
                        <li>Troubles du sommeil</li>
                        <li>Chez l'adulte : risque accru d'abus de substances et de troubles de la personnalité</li>
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
                      <Users className="h-6 w-6 text-neuro-purple" />
                      <CardTitle>Symptômes et manifestations</CardTitle>
                    </div>
                    <CardDescription>
                      Les signes caractéristiques du TDAH et leur impact au quotidien
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Content here */}
                    <p className="text-muted-foreground">
                      Le diagnostic du TDAH repose sur l'identification de symptômes persistants d'inattention et/ou d'hyperactivité-impulsivité 
                      qui interfèrent avec le fonctionnement quotidien. Ces symptômes doivent être présents dans au moins deux environnements 
                      différents (par exemple, à l'école et à la maison).
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Symptômes d'inattention</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Difficulté à maintenir l'attention sur une tâche, particulièrement si elle est longue ou peu stimulante</li>
                          <li>Tendance à faire des erreurs d'inattention dans les travaux scolaires ou autres activités</li>
                          <li>Semble souvent ne pas écouter quand on lui parle directement</li>
                          <li>Difficulté à suivre les instructions et à terminer les tâches</li>
                          <li>Problèmes d'organisation et de planification des activités</li>
                          <li>Évitement ou aversion pour les tâches nécessitant un effort mental soutenu</li>
                          <li>Perte fréquente des objets nécessaires aux activités (matériel scolaire, clés, etc.)</li>
                          <li>Distractibilité par des stimuli externes ou des pensées non pertinentes</li>
                          <li>Oublis fréquents dans les activités quotidiennes</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        Ces difficultés d'attention ne sont pas dues à un manque de volonté ou à de la paresse, mais à un fonctionnement cérébral atypique 
                        qui rend difficile le filtrage des informations non pertinentes et le maintien d'un effort attentionnel soutenu.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Symptômes d'hyperactivité et d'impulsivité</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Hyperactivité</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Agitation des mains ou des pieds, se tortille sur son siège</li>
                            <li>Difficulté à rester assis quand c'est requis</li>
                            <li>Court ou grimpe de façon excessive dans des situations inappropriées</li>
                            <li>Difficulté à jouer ou à s'engager dans des activités calmes</li>
                            <li>"Sur la brèche", agit comme "monté sur ressorts"</li>
                            <li>Parle souvent de façon excessive</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Impulsivité</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Répond avant que la question ne soit terminée</li>
                            <li>Difficulté à attendre son tour</li>
                            <li>Interrompt souvent les autres ou s'immisce dans leurs conversations/jeux</li>
                            <li>Agit sans réfléchir aux conséquences</li>
                            <li>Difficulté à inhiber les réponses inappropriées</li>
                            <li>Prend des décisions hâtives</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Chez l'adulte, l'hyperactivité peut se manifester différemment, souvent sous forme d'agitation intérieure, de sentiments 
                        subjectifs d'impatience ou de difficulté à se détendre.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Manifestations selon l'âge</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Âge préscolaire (3-5 ans)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Niveau élevé d'activité physique, difficulté à tenir en place lors des activités de groupe</li>
                            <li>Difficulté à attendre son tour dans les jeux</li>
                            <li>Passe rapidement d'une activité à l'autre</li>
                            <li>Tendance aux accidents et aux blessures</li>
                            <li>Défis lors des transitions entre les activités</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Âge scolaire primaire (6-12 ans)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés scolaires malgré des capacités intellectuelles normales ou supérieures</li>
                            <li>Problèmes pour suivre les instructions complexes ou à plusieurs étapes</li>
                            <li>Devoirs inachevés ou bâclés</li>
                            <li>Dérangement en classe, difficultés à respecter les règles</li>
                            <li>Difficultés relationnelles avec les pairs</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Adolescence (13-17 ans)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Diminution des symptômes d'hyperactivité physique mais persistance de l'agitation interne</li>
                            <li>Difficultés organisationnelles plus marquées avec l'augmentation des exigences scolaires</li>
                            <li>Procrastination, difficultés de gestion du temps</li>
                            <li>Risque accru de comportements à risque (conduite dangereuse, sexualité précoce)</li>
                            <li>Défis d'autorégulation émotionnelle plus saillants</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Âge adulte</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés professionnelles (respect des délais, organisation, maintien de l'emploi)</li>
                            <li>Problèmes de gestion financière et administrative</li>
                            <li>Challenges dans les relations interpersonnelles et familiales</li>
                            <li>Difficultés à suivre des conversations longues ou à maintenir la concentration lors de réunions</li>
                            <li>Sentiment d'agitation intérieure, difficultés à se détendre</li>
                            <li>Prise de décisions impulsives (achats impulsifs, changements professionnels fréquents)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Impacts fonctionnels</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Impact académique et professionnel</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Résultats scolaires en deçà du potentiel intellectuel</li>
                            <li>Difficultés à terminer les études</li>
                            <li>Changements d'emploi plus fréquents</li>
                            <li>Productivité variable et inconsistante</li>
                            <li>Difficultés avec les tâches administratives</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Impact social et relationnel</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés à maintenir des amitiés durables</li>
                            <li>Tensions dans les relations familiales</li>
                            <li>Taux plus élevés de séparations et divorces</li>
                            <li>Maladresses sociales dues à l'impulsivité</li>
                            <li>Difficulté à percevoir les signaux sociaux subtils</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Impact émotionnel et sur l'estime de soi</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Frustration chronique face aux échecs répétés malgré les efforts</li>
                          <li>Sentiment d'être incompris ou jugé (paresseux, peu motivé)</li>
                          <li>Autocritique excessive, perfectionnisme comme stratégie compensatoire</li>
                          <li>Intériorisation des critiques extérieures, formant une image négative de soi</li>
                          <li>Oscillation entre découragement et optimisme excessif ("cette fois je vais y arriver")</li>
                          <li>Sensibilité accrue au rejet et à la critique</li>
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
                      <ClipboardCheck className="h-6 w-6 text-neuro-purple" />
                      <CardTitle>Diagnostic et évaluation</CardTitle>
                    </div>
                    <CardDescription>
                      Le processus diagnostique et les outils d'évaluation du TDAH
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Content here */}
                    <p className="text-muted-foreground">
                      Le diagnostic du TDAH est un processus clinique qui repose sur une évaluation approfondie des symptômes, de leur développement 
                      dans le temps et de leur impact fonctionnel. Il n'existe pas de test unique ou de marqueur biologique pour confirmer le diagnostic.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Critères diagnostiques</h3>
                      <p className="text-muted-foreground mb-3">
                        Selon le DSM-5 (Manuel diagnostique et statistique des troubles mentaux), le diagnostic du TDAH repose sur les critères suivants :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">A. Mode persistant d'inattention et/ou d'hyperactivité-impulsivité</h4>
                          <p className="text-muted-foreground">
                            Au moins 6 symptômes d'inattention et/ou 6 symptômes d'hyperactivité-impulsivité chez l'enfant,
                            ou au moins 5 symptômes dans chaque catégorie chez l'adulte (à partir de 17 ans).
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">B. Plusieurs symptômes présents avant l'âge de 12 ans</h4>
                          <p className="text-muted-foreground">
                            Les symptômes doivent avoir débuté dans l'enfance, même si le diagnostic peut être posé plus tard.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">C. Présence dans plusieurs contextes</h4>
                          <p className="text-muted-foreground">
                            Les symptômes sont présents dans au moins deux environnements différents (école/travail, maison, activités sociales).
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">D. Impact fonctionnel significatif</h4>
                          <p className="text-muted-foreground">
                            Les symptômes interfèrent avec le fonctionnement social, scolaire ou professionnel, ou réduisent la qualité de ces domaines.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">E. Exclusion d'autres troubles</h4>
                          <p className="text-muted-foreground">
                            Les symptômes ne sont pas mieux expliqués par un autre trouble mental et ne surviennent pas exclusivement au cours d'un autre trouble.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Démarche diagnostique</h3>
                      <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
                        <li>
                          <span className="font-medium">Entretien clinique approfondi</span>
                          <p>Histoire développementale, antécédents médicaux et familiaux, symptômes actuels et leur impact</p>
                        </li>
                        <li>
                          <span className="font-medium">Recueil d'informations auprès de l'entourage</span>
                          <p>Parents, enseignants, conjoint(e), selon l'âge de la personne</p>
                        </li>
                        <li>
                          <span className="font-medium">Questionnaires et échelles standardisés</span>
                          <p>Outils spécifiques pour évaluer les symptômes du TDAH selon l'âge</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation des comorbidités</span>
                          <p>Recherche d'autres troubles pouvant coexister ou expliquer les symptômes</p>
                        </li>
                        <li>
                          <span className="font-medium">Examen médical</span>
                          <p>Pour écarter d'autres causes médicales pouvant expliquer les symptômes</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation neuropsychologique (dans certains cas)</span>
                          <p>Tests cognitifs pour évaluer les fonctions attentionnelles et exécutives</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Professionnels impliqués</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Diagnostic initial</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Pédopsychiatre</li>
                            <li>Psychiatre</li>
                            <li>Neurologue</li>
                            <li>Neuropédiatre</li>
                            <li>Médecin spécialisé dans le TDAH</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation complémentaire</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Psychologue ou neuropsychologue</li>
                            <li>Orthophoniste</li>
                            <li>Psychomotricien</li>
                            <li>Ergothérapeute</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Outils d'évaluation</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Questionnaires pour enfants</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Conners (versions parent et enseignant)</li>
                            <li>ADHD Rating Scale</li>
                            <li>SNAP-IV</li>
                            <li>CBCL (Child Behavior Checklist)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Questionnaires pour adultes</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>ASRS (Adult ADHD Self-Report Scale)</li>
                            <li>WURS (Wender Utah Rating Scale) pour les symptômes rétrospectifs</li>
                            <li>CAARS (Conners Adult ADHD Rating Scale)</li>
                            <li>DIVA (Diagnostic Interview for ADHD in Adults)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Tests neuropsychologiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Tests d'attention soutenue (CPT - Continuous Performance Test)</li>
                            <li>Tests des fonctions exécutives (planification, inhibition, flexibilité)</li>
                            <li>Tests de mémoire de travail</li>
                            <li>Tests d'impulsivité</li>
                            <li>Évaluation du QI pour écarter une déficience intellectuelle</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Diagnostic différentiel</h3>
                      <p className="text-muted-foreground mb-3">
                        Plusieurs conditions peuvent présenter des symptômes similaires au TDAH et doivent être considérées dans le diagnostic différentiel :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Troubles anxieux (l'anxiété peut causer des difficultés de concentration)</li>
                        <li>Troubles de l'humeur (dépression, trouble bipolaire)</li>
                        <li>Troubles d'apprentissage spécifiques</li>
                        <li>Trouble du spectre autistique</li>
                        <li>Troubles du sommeil</li>
                        <li>Troubles sensoriels non diagnostiqués (audition, vision)</li>
                        <li>Effets secondaires de médicaments</li>
                        <li>Problèmes médicaux (dysfonction thyroïdienne, épilepsie)</li>
                        <li>Troubles liés à des traumatismes ou à des stress importants</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Défis diagnostiques</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Présentation différente selon le genre</span>
                            <p>Les filles présentent souvent moins d'hyperactivité visible et plus de symptômes internalisés, ce qui peut retarder le diagnostic</p>
                          </li>
                          <li>
                            <span className="font-medium">Comorbidités masquant ou compliquant le tableau</span>
                            <p>La présence d'autres troubles peut rendre le diagnostic plus complexe</p>
                          </li>
                          <li>
                            <span className="font-medium">Variabilité des symptômes selon le contexte</span>
                            <p>Les symptômes peuvent être moins évidents dans certaines situations (activités très structurées, nouveauté, intérêt élevé)</p>
                          </li>
                          <li>
                            <span className="font-medium">Stratégies compensatoires</span>
                            <p>Certaines personnes développent des mécanismes d'adaptation qui masquent partiellement les symptômes</p>
                          </li>
                          <li>
                            <span className="font-medium">Diagnostic à l'âge adulte</span>
                            <p>Difficulté à établir l'histoire développementale et à distinguer les symptômes d'autres troubles</p>
                          </li>
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
                      <Lightbulb className="h-6 w-6 text-neuro-purple" />
                      <CardTitle>Traitements et accompagnement</CardTitle>
                    </div>
                    <CardDescription>
                      Approches thérapeutiques et adaptations pour les personnes avec TDAH
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Content here */}
                    <p className="text-muted-foreground">
                      La prise en charge du TDAH repose sur une approche multimodale, combinant différentes interventions adaptées 
                      aux besoins spécifiques de chaque personne. L'objectif est d'améliorer le fonctionnement quotidien 
                      et la qualité de vie, non pas de "guérir" le TDAH.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Approche multimodale</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <p className="text-muted-foreground mb-2">
                          Les études montrent que la combinaison de plusieurs approches offre les meilleurs résultats :
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Traitements médicamenteux (quand indiqués)</li>
                          <li>Interventions psychosociales et comportementales</li>
                          <li>Adaptations environnementales (éducatives, professionnelles)</li>
                          <li>Information et éducation sur le TDAH (psychoéducation)</li>
                          <li>Soutien familial</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Traitements médicamenteux</h3>
                      <p className="text-muted-foreground mb-3">
                        Les médicaments sont souvent une composante importante du traitement, particulièrement dans les cas modérés à sévères :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Psychostimulants</h4>
                          <p className="text-muted-foreground mb-2">Médicaments de première intention, efficaces chez 70-80% des patients :</p>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Méthylphénidate (Ritaline, Concerta, Quasym, Medikinet)</li>
                            <li>Amphétamines (Adderall, Vyvanse) - moins disponibles en France</li>
                            <li>Action : augmentation de la disponibilité de la dopamine et de la noradrénaline dans le cerveau</li>
                            <li>Effets possibles : amélioration de l'attention, réduction de l'impulsivité et de l'hyperactivité</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Non-stimulants</h4>
                          <p className="text-muted-foreground mb-2">Options alternatives ou complémentaires :</p>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Atomoxétine (Strattera)</li>
                            <li>Guanfacine (Intuniv)</li>
                            <li>Action : influencent principalement le système noradrénergique</li>
                            <li>Avantages : effet continu sur 24h, moins de risque d'abus, alternatives pour les personnes ne répondant pas aux stimulants</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Suivi médical</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Ajustement personnalisé de la posologie</li>
                            <li>Surveillance des effets secondaires potentiels</li>
                            <li>Évaluation régulière de l'efficacité et de la tolérance</li>
                            <li>Monitoring de la croissance chez l'enfant</li>
                            <li>Considération des comorbidités dans le choix du traitement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Interventions psychosociales</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Thérapie comportementale</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Renforcement positif des comportements adaptés</li>
                            <li>Systèmes de récompenses et conséquences</li>
                            <li>Modification de l'environnement</li>
                            <li>Apprentissage de l'auto-régulation</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Remédiation cognitive</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Entraînement de la mémoire de travail</li>
                            <li>Développement des fonctions exécutives</li>
                            <li>Programmes informatisés d'entraînement attentionnel</li>
                            <li>Neurofeedback (encore en évaluation)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Thérapies cognitivo-comportementales (TCC)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Identification et modification des pensées négatives</li>
                            <li>Développement de stratégies d'adaptation</li>
                            <li>Particulièrement utile chez l'adolescent et l'adulte</li>
                            <li>Aide pour les comorbidités (anxiété, dépression)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Coaching TDAH</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Accompagnement pratique et personnalisé</li>
                            <li>Développement de compétences organisationnelles</li>
                            <li>Mise en place de stratégies concrètes</li>
                            <li>Soutien à l'application quotidienne des stratégies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Adaptations scolaires et professionnelles</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Aménagements scolaires</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Place privilégiée en classe (près de l'enseignant, loin des distractions)</li>
                            <li>Consignes claires, fractionnées et visuelles</li>
                            <li>Temps supplémentaire pour les examens</li>
                            <li>Pauses structurées pour permettre le mouvement</li>
                            <li>Mise en place d'un PAP (Plan d'Accompagnement Personnalisé) ou PPS (Projet Personnalisé de Scolarisation)</li>
                            <li>Utilisation d'outils d'organisation (agendas, applications)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Adaptations professionnelles</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Environnement de travail adapté (limitation des distractions)</li>
                            <li>Tâches clairement définies avec échéances précises</li>
                            <li>Possibilité de télétravail partiel pour certains profils</li>
                            <li>Utilisation d'outils de gestion du temps et d'organisation</li>
                            <li>Reconnaissance RQTH (Reconnaissance de la Qualité de Travailleur Handicapé) si nécessaire</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien familial</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Programmes de formation parentale</span>
                            <p>Techniques de gestion du comportement, compréhension du TDAH</p>
                          </li>
                          <li>
                            <span className="font-medium">Guidance parentale</span>
                            <p>Conseils personnalisés pour adapter l'environnement familial</p>
                          </li>
                          <li>
                            <span className="font-medium">Thérapie familiale</span>
                            <p>Amélioration de la communication et réduction des conflits</p>
                          </li>
                          <li>
                            <span className="font-medium">Groupes de soutien</span>
                            <p>Partage d'expériences entre familles confrontées aux mêmes défis</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Stratégies d'auto-gestion</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Organisation</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Utilisation d'agenda électronique avec alertes</li>
                            <li>Décomposition des tâches complexes en étapes</li>
                            <li>Systèmes de classement simples et visuels</li>
                            <li>Routines quotidiennes structurées</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Gestion de l'attention</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Technique Pomodoro (travail en sessions courtes)</li>
                            <li>Élimination des distractions dans l'environnement</li>
                            <li>Utilisation stratégique de la nouveauté et l'intérêt</li>
                            <li>Pauses programmées et structurées</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Hygiène de vie</h4>
                          <ul className="list-disc pl-5 text-muted-foreground mb-4">
                            <li>Activité physique régulière</li>
                            <li>Sommeil suffisant et régulier</li>
                            <li>Alimentation équilibrée</li>
                            <li>Techniques de relaxation et pleine conscience</li>
                          </ul>
                          
                          <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <h5 className="font-medium text-orange-800 mb-2 flex items-center">
                              🎯 Focus : Influence du sucre sur le TDAH
                            </h5>
                            <div className="space-y-3 text-sm">
                              <div>
                                <span className="font-medium text-orange-700">Pic glycémique :</span>
                                <span className="text-gray-700 ml-1">Les sucres rapides provoquent des variations brutales de glycémie, accentuant l'instabilité attentionnelle.</span>
                              </div>
                              <div>
                                <span className="font-medium text-orange-700">Neurotransmetteurs :</span>
                                <span className="text-gray-700 ml-1">L'excès de sucre perturbe la dopamine et sérotonine, déjà fragiles dans le TDAH.</span>
                              </div>
                              <div>
                                <span className="font-medium text-orange-700">Hypersensibilité :</span>
                                <span className="text-gray-700 ml-1">Les personnes TDAH sont plus sensibles aux fluctuations glycémiques.</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                            <h5 className="font-medium text-green-800 mb-2">🥣 Petit déjeuner recommandé pour TDAH</h5>
                            <p className="text-sm text-gray-700 mb-3">Privilégier un index glycémique bas avec protéines, fibres et bonnes graisses :</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="font-medium text-green-700">✓ Recommandé :</span>
                                <ul className="text-gray-700 ml-4 mt-1">
                                  <li>• Œufs + pain complet</li>
                                  <li>• Flocons d'avoine + noix</li>
                                  <li>• Yaourt nature + baies</li>
                                  <li>• Fruits entiers (pas de jus)</li>
                                </ul>
                              </div>
                              <div>
                                <span className="font-medium text-red-700">✗ À éviter :</span>
                                <ul className="text-gray-700 ml-4 mt-1">
                                  <li>• Céréales sucrées</li>
                                  <li>• Viennoiseries</li>
                                  <li>• Jus de fruits industriels</li>
                                  <li>• Pain blanc + confiture</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 className="font-medium text-blue-800 mb-2">🧠 Conseils nutritionnels spécifiques TDAH</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• <strong>Protéines à chaque repas</strong> pour stabiliser l'attention</li>
                              <li>• <strong>Éviter le sucre raffiné</strong>, surtout le matin et en collation</li>
                              <li>• <strong>Limiter la caféine</strong> qui peut aggraver la nervosité</li>
                              <li>• <strong>Régularité des repas</strong> pour éviter les fluctuations d'énergie</li>
                              <li>• <strong>Compléments possibles</strong> (sous suivi médical) : oméga-3, magnésium, zinc</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-3">🔧 Outils technologiques</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Les technologies peuvent considérablement améliorer la gestion quotidienne du TDAH en compensant les difficultés d'organisation, d'attention et de mémoire.
                          </p>
                          
                          <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <h5 className="font-medium text-blue-800 mb-2 flex items-center">
                                📱 Applications dédiées au TDAH
                                <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full cursor-help" title="Applications spécialement conçues pour répondre aux besoins des personnes avec TDAH">
                                  ℹ️
                                </span>
                              </h5>
                              <div className="space-y-3 text-sm">
                                <div>
                                  <span className="font-medium text-blue-700">Focus Apps :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://www.forestapp.cc/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Forest</a></strong> : Technique Pomodoro gamifiée avec plantation d'arbres virtuels</li>
                                    <li>• <strong><a href="https://brainfocus.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Brain Focus</a></strong> : Timer personnalisable avec statistiques de productivité</li>
                                    <li>• <strong><a href="https://focuskeeperapp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Focus Keeper</a></strong> : Sessions de travail chronométrées avec pauses automatiques</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-medium text-blue-700">Gestion des tâches :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://todoist.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Todoist</a></strong> : Organisation par projets avec rappels intelligents</li>
                                    <li>• <strong><a href="https://www.any.do/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Any.do</a></strong> : Interface simple avec reconnaissance vocale</li>
                                    <li>• <strong><a href="https://ticktick.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">TickTick</a></strong> : Calendrier intégré et gestion des habitudes</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-medium text-blue-700">Spécialisées TDAH :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://play.google.com/store/apps/details?id=com.adhdassistant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ADHD Assistant</a></strong> : Rappels personnalisés et suivi des médicaments</li>
                                    <li>• <strong><a href="https://brili.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Brili</a></strong> : Routines visuelles pour enfants et adolescents</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                              <h5 className="font-medium text-green-800 mb-2 flex items-center">
                                📅 Logiciels de planification et de rappel
                                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full cursor-help" title="Outils pour structurer le temps et éviter les oublis, essentiels pour compenser les difficultés de mémoire de travail">
                                  ℹ️
                                </span>
                              </h5>
                              <div className="space-y-3 text-sm">
                                <div>
                                  <span className="font-medium text-green-700">Calendriers intelligents :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://calendar.google.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">Google Calendar</a></strong> : Synchronisation multi-appareils avec rappels multiples</li>
                                    <li>• <strong><a href="https://flexibits.com/fantastical" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">Fantastical</a></strong> : Saisie en langage naturel ("Rendez-vous demain 14h")</li>
                                    <li>• <strong><a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">Calendly</a></strong> : Planification automatique de rendez-vous</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-medium text-green-700">Rappels avancés :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://www.dueapp.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">Due</a></strong> : Rappels persistants jusqu'à validation</li>
                                    <li>• <strong><a href="https://yoctoville.com/alarmed/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">Alarmed</a></strong> : Notifications récurrentes personnalisables</li>
                                    <li>• <strong><a href="https://ifttt.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">IFTTT</a></strong> : Automatisation de rappels contextuels (lieu, heure, météo)</li>
                                  </ul>
                                </div>
                                <div className="p-2 bg-green-100 rounded text-xs text-green-800">
                                  <strong>💡 Astuce :</strong> Programmer des rappels 15 minutes avant les événements importants pour compenser les difficultés de transition.
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                              <h5 className="font-medium text-red-800 mb-2 flex items-center">
                                🚫 Bloqueurs de distractions en ligne
                                <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full cursor-help" title="Outils pour limiter l'accès aux sites distrayants et maintenir la concentration sur les tâches importantes">
                                  ℹ️
                                </span>
                              </h5>
                              <div className="space-y-3 text-sm">
                                <div>
                                  <span className="font-medium text-red-700">Extensions navigateur :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://getcoldturkey.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">Cold Turkey Blocker</a></strong> : Blocage programmé avec mode strict</li>
                                    <li>• <strong><a href="https://freedom.to/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">Freedom</a></strong> : Synchronisation multi-appareils (PC, mobile, tablette)</li>
                                    <li>• <strong><a href="https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">StayFocusd</a></strong> : Limitation du temps sur sites spécifiques</li>
                                    <li>• <strong><a href="https://www.proginosko.com/leechblock/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">LeechBlock</a></strong> : Blocage par plages horaires personnalisables</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-medium text-red-700">Applications mobiles :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://offtime.app/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">Offtime</a></strong> : Mode "ne pas déranger" intelligent</li>
                                    <li>• <strong><a href="https://findyourphonelifebalance.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">Space</a></strong> : Analyse et réduction du temps d'écran</li>
                                    <li>• <strong><a href="https://inthemoment.io/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">Moment</a></strong> : Suivi détaillé de l'usage du téléphone</li>
                                  </ul>
                                </div>
                                <div className="p-2 bg-red-100 rounded text-xs text-red-800">
                                  <strong>⚠️ Important :</strong> Commencer par des blocages courts (30-60 min) pour éviter la frustration et augmenter progressivement.
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                              <h5 className="font-medium text-purple-800 mb-2 flex items-center">
                                🎙️ Enregistreurs pour les réunions importantes
                                <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full cursor-help" title="Outils pour compenser les difficultés d'attention et de mémoire de travail lors de réunions ou cours">
                                  ℹ️
                                </span>
                              </h5>
                              <div className="space-y-3 text-sm">
                                <div>
                                  <span className="font-medium text-purple-700">Enregistrement audio :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://otter.ai/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Otter.ai</a></strong> : Transcription automatique en temps réel avec recherche</li>
                                    <li>• <strong><a href="https://www.rev.com/voicerecorder" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Rev Voice Recorder</a></strong> : Enregistrement haute qualité avec service de transcription</li>
                                    <li>• <strong>Voice Memos</strong> (iOS) / <strong>Enregistreur</strong> (Android) : Solutions natives simples</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-medium text-purple-700">Prise de notes intelligente :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Notion</a></strong> : Combinaison notes, tâches et base de données</li>
                                    <li>• <strong><a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Obsidian</a></strong> : Liens entre idées avec visualisation graphique</li>
                                    <li>• <strong><a href="https://roamresearch.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Roam Research</a></strong> : Réseau de connaissances interconnectées</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-medium text-purple-700">Outils de visioconférence :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://zoom.us/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Zoom</a></strong> : Enregistrement cloud avec transcription automatique</li>
                                    <li>• <strong><a href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Microsoft Teams</a></strong> : Intégration OneNote pour notes partagées</li>
                                    <li>• <strong><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Google Meet</a></strong> : Sous-titres automatiques en temps réel</li>
                                  </ul>
                                </div>
                                <div className="p-2 bg-purple-100 rounded text-xs text-purple-800">
                                  <strong>📝 Conseil :</strong> Toujours demander l'autorisation avant d'enregistrer et informer les participants.
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                              <h5 className="font-medium text-yellow-800 mb-2 flex items-center">
                                🎯 Outils spécialisés supplémentaires
                              </h5>
                              <div className="space-y-3 text-sm">
                                <div>
                                  <span className="font-medium text-yellow-700">Gestion financière :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://www.youneedabudget.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 underline">YNAB (You Need A Budget)</a></strong> : Budgétisation proactive avec alertes</li>
                                    <li>• <strong><a href="https://mint.intuit.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 underline">Mint</a></strong> : Suivi automatique des dépenses avec catégorisation</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-medium text-yellow-700">Méditation et relaxation :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 underline">Headspace</a></strong> : Méditations guidées spécifiques TDAH</li>
                                    <li>• <strong><a href="https://www.calm.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 underline">Calm</a></strong> : Sons de fond et exercices de respiration</li>
                                    <li>• <strong><a href="https://insighttimer.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 underline">Insight Timer</a></strong> : Large bibliothèque de méditations gratuites</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-medium text-yellow-700">Suivi des habitudes :</span>
                                  <ul className="text-gray-700 ml-4 mt-1">
                                    <li>• <strong><a href="https://habitica.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 underline">Habitica</a></strong> : Gamification des habitudes avec système de récompenses</li>
                                    <li>• <strong><a href="https://streaksapp.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 underline">Streaks</a></strong> : Suivi visuel simple des habitudes quotidiennes</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4 p-3 bg-gray-100 rounded border border-gray-300">
                              <h6 className="font-medium text-gray-800 mb-2">💡 Conseils d'utilisation optimale :</h6>
                              <ul className="text-xs text-gray-700 space-y-1">
                                <li>• <strong>Commencer progressivement</strong> : Introduire un outil à la fois pour éviter la surcharge</li>
                                <li>• <strong>Personnaliser les notifications</strong> : Adapter la fréquence selon vos besoins sans créer de stress</li>
                                <li>• <strong>Synchroniser entre appareils</strong> : Assurer la continuité entre téléphone, ordinateur et tablette</li>
                                <li>• <strong>Évaluer régulièrement</strong> : Garder uniquement les outils qui apportent une réelle valeur ajoutée</li>
                                <li>• <strong>Créer des sauvegardes</strong> : Protéger vos données importantes avec des exports réguliers</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Approches complémentaires</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-muted-foreground mb-2">
                          Certaines approches peuvent avoir un effet positif en complément des traitements conventionnels :
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Activité physique régulière (bénéfices démontrés scientifiquement)</li>
                          <li>Pleine conscience et méditation (amélioration de la régulation attentionnelle)</li>
                          <li>Optimisation de l'alimentation (réduction des additifs et colorants artificiels)</li>
                          <li>Supplémentation en oméga-3 (résultats modérés dans certaines études)</li>
                        </ul>
                        <p className="text-muted-foreground mt-2 italic">
                          Note : Ces approches ne remplacent pas les traitements conventionnels mais peuvent les compléter utilement.
                        </p>
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
                      <Book className="h-6 w-6 text-neuro-purple" />
                      <CardTitle>Ressources et soutien</CardTitle>
                    </div>
                    <CardDescription>
                      Informations, associations et outils pour les personnes avec TDAH
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Content here */}
                    <div>
                      <h3 className="text-lg font-medium mb-2">Associations spécialisées</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">HyperSupers - TDAH France</span>
                            <p>Association nationale de soutien aux personnes concernées par le TDAH. Offre information, accueil, écoute et entraide.</p>
                          </li>
                          <li>
                            <span className="font-medium">TDAH Partout Pareil</span>
                            <p>Association sensibilisant le grand public et les professionnels aux réalités du TDAH.</p>
                          </li>
                          <li>
                            <span className="font-medium">ADANA (Association nationale d'adultes avec TDAH)</span>
                            <p>Soutien et information spécifiquement pour les adultes concernés par le TDAH.</p>
                          </li>
                          <li>
                            <span className="font-medium">CHADD (Children and Adults with ADHD)</span>
                            <p>Organisation internationale offrant de nombreuses ressources en anglais.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ressources pédagogiques et informatives</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Livres pour comprendre le TDAH</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>"Mon cerveau a besoin de lunettes" - Annick Vincent (pour les enfants)</li>
                            <li>"Mon cerveau a encore besoin de lunettes" - Annick Vincent (pour les adultes)</li>
                            <li>"TDAH chez l'adulte : Le déficit de l'attention avec ou sans hyperactivité" - Dr François Bange</li>
                            <li>"100 idées pour mieux gérer les troubles de l'attention" - Francine Lussier</li>
                            <li>"Mieux vivre avec le TDAH à l'adolescence" - Annick Vincent et Caroline Huron</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pour les parents et enseignants</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>"L'enfant avec un TDAH et l'école" - Francine Lussier</li>
                            <li>"Accompagner l'enfant atteint de TDAH" - Diane Dulude</li>
                            <li>"Scolariser un enfant avec un TDAH" - Éduscol (ressources pédagogiques)</li>
                            <li>"Guide pour les enseignants des élèves présentant un TDAH" - HyperSupers</li>
                            <li>"Le trouble déficitaire de l'attention avec ou sans hyperactivité" - Dr Michel Lecendreux</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ressources numériques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sites d'information</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>TDAsolutions.fr - Informations et ressources sur le TDAH</li>
                            <li>tdah-france.fr - Site de l'association HyperSupers</li>
                            <li>attentiondeficit-info.com - Ressources en français</li>
                            <li>Understood.org - Ressources pour les troubles d'apprentissage et d'attention (en anglais)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Applications mobiles</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Focus@Will - Musique optimisée pour la concentration</li>
                            <li>Forest - Application anti-procrastination</li>
                            <li>Todoist - Gestion des tâches et planification</li>
                            <li>Trello - Organisation visuelle des projets</li>
                            <li>Pomodoro timers - Travail en sessions chronométrées</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Centres de référence et professionnels spécialisés</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Centres Référents des Troubles du Langage et des Apprentissages (CRTLA)</li>
                          <li>Centres Médico-Psycho-Pédagogiques (CMPP)</li>
                          <li>Services de psychiatrie de l'enfant et de l'adolescent</li>
                          <li>Réseaux de psychologues et neuropsychologues spécialisés (liste disponible auprès des associations)</li>
                          <li>Médecins spécialistes du TDAH (liste disponible auprès des associations)</li>
                          <li>Coachs TDAH certifiés</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Droits et démarches administratives</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">En milieu scolaire</span>
                            <p>Informations sur les PAP (Plan d'Accompagnement Personnalisé) et PPS (Projet Personnalisé de Scolarisation)</p>
                          </li>
                          <li>
                            <span className="font-medium">MDPH (Maison Départementale des Personnes Handicapées)</span>
                            <p>Pour la reconnaissance du handicap et l'accès à certaines aides</p>
                          </li>
                          <li>
                            <span className="font-medium">RQTH (Reconnaissance de la Qualité de Travailleur Handicapé)</span>
                            <p>Pour les aménagements en milieu professionnel</p>
                          </li>
                          <li>
                            <span className="font-medium">Remboursement des soins</span>
                            <p>Informations sur la prise en charge des consultations et traitements</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Communautés et entraide</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Groupes de parole organisés par les associations locales</li>
                          <li>Forums en ligne (forum TDAH-France, forums Reddit en français)</li>
                          <li>Groupes Facebook dédiés aux personnes concernées par le TDAH</li>
                          <li>Chaînes YouTube et podcasts sur le TDAH en français</li>
                          <li>Conférences et webinaires réguliers organisés par les associations</li>
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

export default TDAH;
