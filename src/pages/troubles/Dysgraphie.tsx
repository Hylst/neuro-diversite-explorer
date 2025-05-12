
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pencil, BookOpen, Brain, HeartPulse, GraduationCap, Hand, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dysgraphie = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                La <span className="neuro-gradient-text">Dysgraphie</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Comprendre le trouble spécifique du geste graphique et de l'écriture manuscrite
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la dysgraphie ?</h2>
                <p className="text-muted-foreground mb-4">
                  La dysgraphie est un trouble neurodéveloppemental qui affecte spécifiquement la production 
                  d'écriture manuscrite. Elle se caractérise par des difficultés persistantes à former les lettres 
                  et à produire un texte manuscrit lisible et fluide, indépendamment des capacités intellectuelles 
                  et linguistiques de la personne.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ce trouble touche environ 5 à 10% des enfants d'âge scolaire, avec une prévalence plus élevée 
                  chez les garçons que chez les filles. La dysgraphie peut exister seule, mais elle est souvent 
                  associée à d'autres troubles neurodéveloppementaux comme la dyspraxie, la dyslexie, le TDAH 
                  ou les troubles du spectre autistique.
                </p>
                <p className="text-muted-foreground">
                  Contrairement à une simple "mauvaise écriture", la dysgraphie constitue un véritable handicap 
                  qui entrave la capacité à communiquer par écrit, affecte la scolarité et peut avoir un impact 
                  significatif sur l'estime de soi et le bien-être émotionnel de l'enfant ou de l'adulte concerné.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Les différents types de dysgraphie</h2>
                <p className="text-muted-foreground mb-4">
                  On distingue généralement plusieurs types de dysgraphie, selon l'origine des difficultés:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4 border-neuro-blue">
                    <h3 className="font-semibold mb-2 text-neuro-blue">Dysgraphie motrice</h3>
                    <p className="text-sm text-muted-foreground">
                      Liée à des difficultés de coordination motrice fine. La personne connaît la forme des lettres 
                      mais ne parvient pas à produire le geste graphique avec précision et fluidité.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <h3 className="font-semibold mb-2 text-neuro-blue">Dysgraphie spatiale</h3>
                    <p className="text-sm text-muted-foreground">
                      Caractérisée par des difficultés d'organisation dans l'espace: mauvais alignement des lettres, 
                      espacement irrégulier, non-respect des marges et des lignes.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <h3 className="font-semibold mb-2 text-neuro-blue">Dysgraphie perceptive</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficulté à percevoir et à se représenter la forme des lettres. La personne peine à convertir 
                      l'image mentale des lettres en tracé graphique.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <h3 className="font-semibold mb-2 text-neuro-blue">Dysgraphie liée à la pression</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficulté à réguler la pression exercée sur le crayon: pression excessive causant fatigue et 
                      crispation, ou pression insuffisante rendant le tracé à peine visible.
                    </p>
                  </Card>
                </div>
                
                <p className="text-muted-foreground">
                  Ces différentes formes peuvent coexister et s'influencer mutuellement. L'identification du type 
                  prédominant est importante pour orienter la prise en charge de manière adaptée.
                </p>
              </div>

              <Tabs defaultValue="symptoms">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="symptoms">Symptômes</TabsTrigger>
                  <TabsTrigger value="diagnosis">Diagnostic</TabsTrigger>
                  <TabsTrigger value="treatment">Prise en charge</TabsTrigger>
                  <TabsTrigger value="daily">Vie quotidienne</TabsTrigger>
                </TabsList>
                
                <TabsContent value="symptoms" className="space-y-4">
                  <h3 className="text-xl font-semibold">Signes et symptômes</h3>
                  <p className="text-muted-foreground mb-4">
                    La dysgraphie se manifeste par divers signes observables dans l'écriture et le comportement:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Pencil className="h-5 w-5 text-neuro-blue" />
                        <h4 className="font-medium">Aspects graphiques</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Écriture illisible ou difficilement déchiffrable</li>
                        <li>Formation incorrecte ou inconstante des lettres</li>
                        <li>Taille irrégulière des caractères</li>
                        <li>Espacement inégal entre les lettres et les mots</li>
                        <li>Non-respect des lignes et des marges</li>
                        <li>Mélanges de styles (cursive/script)</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Hand className="h-5 w-5 text-neuro-blue" />
                        <h4 className="font-medium">Posture et préhension</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Tenue inappropriée du crayon (crispée, trop serrée)</li>
                        <li>Position inconfortable du poignet ou du bras</li>
                        <li>Pression excessive ou insuffisante sur le papier</li>
                        <li>Posture corporelle inadéquate pendant l'écriture</li>
                        <li>Fatigue et douleurs lors de l'écriture prolongée</li>
                        <li>Recours à des positions de compensation</li>
                      </ul>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="h-5 w-5 text-neuro-blue" />
                        <h4 className="font-medium">Processus d'écriture</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Lenteur excessive de production écrite</li>
                        <li>Décalage important entre pensée et transcription</li>
                        <li>Difficultés à automatiser le geste d'écriture</li>
                        <li>Incapacité à prendre des notes tout en écoutant</li>
                        <li>Concentration excessive sur le geste au détriment du contenu</li>
                        <li>Erreurs d'orthographe liées à la surcharge cognitive</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-neuro-blue" />
                        <h4 className="font-medium">Impact émotionnel et comportemental</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Évitement des activités d'écriture</li>
                        <li>Frustration et découragement face aux tâches écrites</li>
                        <li>Production écrite minimaliste par rapport aux capacités orales</li>
                        <li>Anxiété avant les activités nécessitant d'écrire</li>
                        <li>Sentiment d'échec et baisse de l'estime de soi</li>
                        <li>Réticence à montrer ses productions écrites</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <h4 className="font-medium mb-2">Attention: ne pas confondre</h4>
                    <p className="text-sm text-muted-foreground">
                      Il est important de distinguer la dysgraphie:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>D'une simple "mauvaise écriture" transitoire pendant l'apprentissage</li>
                      <li>D'un manque de motivation ou d'application</li>
                      <li>De difficultés temporaires liées à une croissance rapide</li>
                      <li>D'un trouble purement visuel ou moteur qui affecterait d'autres activités</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      La dysgraphie est caractérisée par sa persistance, son caractère résistant aux méthodes 
                      habituelles d'enseignement et son impact fonctionnel significatif.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="diagnosis" className="space-y-4">
                  <h3 className="text-xl font-semibold">Parcours diagnostic</h3>
                  <p className="text-muted-foreground mb-4">
                    Le diagnostic de la dysgraphie est pluridisciplinaire et repose sur l'évaluation 
                    de différents aspects du geste graphique et des compétences associées.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Quand s'inquiéter ?</h4>
                      <p className="text-sm text-muted-foreground">
                        Il est recommandé de consulter lorsque:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>L'écriture reste illisible après la période normale d'apprentissage (7-8 ans)</li>
                        <li>L'enfant manifeste une souffrance ou un évitement marqué face à l'écriture</li>
                        <li>La lenteur d'écriture entrave significativement la scolarité</li>
                        <li>L'écriture ne s'améliore pas malgré un entraînement régulier</li>
                        <li>Des douleurs ou une fatigue excessive accompagnent systématiquement l'écriture</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Professionnels impliqués</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Plusieurs spécialistes peuvent intervenir dans le diagnostic:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Médecin</span>: pour éliminer toute cause médicale (neurologique, visuelle, etc.)</li>
                        <li><span className="font-medium">Psychomotricien</span>: évalue la motricité fine, la coordination et l'organisation spatiale</li>
                        <li><span className="font-medium">Ergothérapeute</span>: analyse précisément le geste graphique et la posture</li>
                        <li><span className="font-medium">Neuropsychologue</span>: évalue les fonctions cognitives impliquées dans l'écriture</li>
                        <li><span className="font-medium">Orthophoniste</span>: si des troubles du langage écrit sont associés</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Évaluations spécifiques</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Le diagnostic repose sur plusieurs types d'évaluations:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Analyse d'échantillons d'écriture dans différentes situations (copie, dictée, production libre)</li>
                        <li>Évaluation de la vitesse d'écriture par rapport aux normes de l'âge</li>
                        <li>Analyse de la posture et de la préhension du crayon</li>
                        <li>Tests de motricité fine et de coordination oculo-manuelle</li>
                        <li>Évaluation des capacités visuo-spatiales et perceptives</li>
                        <li>Observation des stratégies et de l'automatisation du geste</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Critères diagnostiques</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pour qu'un diagnostic de dysgraphie soit posé, plusieurs critères doivent être réunis:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Compétences d'écriture nettement inférieures au niveau attendu pour l'âge et l'intelligence</li>
                        <li>Interférence significative avec la réussite scolaire ou les activités quotidiennes</li>
                        <li>Difficultés non explicables uniquement par un déficit sensoriel, intellectuel ou neurologique</li>
                        <li>Persistance des difficultés malgré un enseignement adéquat et une pratique suffisante</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="treatment" className="space-y-4">
                  <h3 className="text-xl font-semibold">Approches thérapeutiques</h3>
                  <p className="text-muted-foreground mb-4">
                    La prise en charge de la dysgraphie est pluridisciplinaire et combine différentes approches 
                    selon les besoins spécifiques identifiés.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Rééducation en ergothérapie</h4>
                      <p className="text-sm text-muted-foreground">
                        Centrale dans la prise en charge, elle vise à:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Améliorer la posture et la préhension du crayon</li>
                        <li>Développer les habiletés motrices fines</li>
                        <li>Travailler le contrôle du geste et sa fluidité</li>
                        <li>Renforcer la coordination œil-main</li>
                        <li>Améliorer l'organisation spatiale sur la page</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Psychomotricité</h4>
                      <p className="text-sm text-muted-foreground">
                        Complémentaire à l'ergothérapie, elle travaille sur:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>La motricité globale et l'équilibre</li>
                        <li>La latéralité et le schéma corporel</li>
                        <li>La structuration spatiale et temporelle</li>
                        <li>La relaxation et la régulation tonique</li>
                        <li>La coordination des mouvements</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Adaptations et compensations</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Utilisation d'outils adaptés (grips, stylos ergonomiques)</li>
                        <li>Supports d'écriture spécifiques (lignages adaptés, plan incliné)</li>
                        <li>Recours à l'ordinateur et aux technologies d'assistance</li>
                        <li>Adaptations des exigences scolaires (temps supplémentaire)</li>
                        <li>Utilisation d'un secrétaire pour certaines tâches</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Méthodes pédagogiques</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Apprentissage multisensoriel de l'écriture</li>
                        <li>Décomposition des lettres en mouvements simples</li>
                        <li>Utilisation de repères visuels et kinesthésiques</li>
                        <li>Exercices de préparation au geste graphique</li>
                        <li>Entrainement régulier mais de courte durée</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Techniques spécifiques</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">Pour les difficultés motrices:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Exercices de renforcement des doigts et de la main</li>
                          <li>Activités de motricité fine (pâte à modeler, origami)</li>
                          <li>Exercices graphiques préparatoires (boucles, vagues)</li>
                          <li>Apprentissage des patterns moteurs de base</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Pour les difficultés visuo-spatiales:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Utilisation de repères visuels (lignages colorés)</li>
                          <li>Activités de repérage dans l'espace</li>
                          <li>Jeux d'orientation et de reproduction de formes</li>
                          <li>Exercices de géométrie et de symétrie</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Méthodes d'écriture adaptées:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Méthode Jeannot (mouvements de base)</li>
                          <li>Méthode Dumont (approche fonctionnelle)</li>
                          <li>Graphothérapie</li>
                          <li>Approche CO-OP (problem-solving)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Technologies d'assistance:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Logiciels de traitement de texte adaptés</li>
                          <li>Reconnaissance vocale</li>
                          <li>Applications de prise de notes</li>
                          <li>Claviers adaptés ou prédictifs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="daily" className="space-y-4">
                  <h3 className="text-xl font-semibold">Vivre avec une dysgraphie</h3>
                  <p className="text-muted-foreground mb-4">
                    La dysgraphie peut avoir un impact significatif sur la vie quotidienne, mais diverses 
                    stratégies permettent d'en réduire les conséquences.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">À l'école</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Mise en place d'un Plan d'Accompagnement Personnalisé (PAP)</li>
                        <li>Réduction de la quantité d'écrit demandée</li>
                        <li>Attribution de temps supplémentaire pour les contrôles</li>
                        <li>Fourniture des cours en format numérique</li>
                        <li>Autorisation d'utiliser un ordinateur en classe</li>
                        <li>Évaluation adaptée (privilégier l'oral quand possible)</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">À la maison</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Créer un espace de travail ergonomique</li>
                        <li>Fractionner les périodes d'écriture</li>
                        <li>Varier les activités pour développer la motricité fine</li>
                        <li>Encourager l'utilisation de l'ordinateur pour les devoirs longs</li>
                        <li>Valoriser les réussites dans d'autres domaines</li>
                        <li>Éviter la surcharge de devoirs écrits</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Adolescence et vie adulte</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Maîtriser la dactylographie (cours de frappe au clavier)</li>
                        <li>S'équiper d'outils technologiques adaptés</li>
                        <li>Choisir des orientations professionnelles limitant l'écriture manuscrite</li>
                        <li>Maintenir une pratique régulière pour ne pas perdre les acquis</li>
                        <li>Développer des stratégies de prise de notes efficaces</li>
                        <li>Savoir expliquer ses besoins spécifiques</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Soutien psychologique</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Aspects importants à considérer:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Développer l'estime de soi au-delà des difficultés graphiques</li>
                        <li>Apprendre à expliquer sa dysgraphie sans honte</li>
                        <li>Gérer la frustration liée à l'écart entre idées et transcription</li>
                        <li>Valoriser les compétences préservées et les talents</li>
                        <li>Prévenir le décrochage scolaire lié à l'évitement</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Témoignage</h4>
                    <blockquote className="italic text-sm text-muted-foreground border-l-4 border-neuro-blue pl-4">
                      "À l'école, j'étais 'celui qui écrit comme un médecin'. Les professeurs me reprochaient de ne pas faire d'efforts, 
                      alors que j'en faisais énormément. Le diagnostic de dysgraphie en 5ème a tout changé: j'ai pu utiliser un ordinateur 
                      pour les cours et les examens. L'ergothérapie m'a donné des techniques pour améliorer mon écriture quand je dois 
                      absolument écrire à la main. Aujourd'hui, à 25 ans, je suis développeur informatique. Mon clavier est devenu mon 
                      meilleur allié, et ma dysgraphie n'est plus qu'une particularité avec laquelle j'ai appris à vivre."
                      <footer className="mt-2 font-medium not-italic">Julien, 25 ans</footer>
                    </blockquote>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      Note: Ce témoignage est fictif, créé à des fins pédagogiques pour illustrer le vécu possible d'une personne dysgraphique.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Outils et ressources</h2>
                <p className="text-muted-foreground mb-4">
                  De nombreux outils peuvent faciliter l'écriture ou la remplacer:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Adaptations pour l'écriture manuscrite</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Grips et adaptateurs de crayon</li>
                      <li>Stylos ergonomiques (à poignée, lestés)</li>
                      <li>Papiers à lignages spéciaux (Seyès coloré, guidages)</li>
                      <li>Plans inclinés et pupitres ergonomiques</li>
                      <li>Règles de lecture et guides-doigts</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Technologies numériques</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Logiciels de traitement de texte avec prédiction</li>
                      <li>Applications de reconnaissance vocale</li>
                      <li>Scanners et logiciels OCR</li>
                      <li>Applications d'enregistrement et de gestion de notes</li>
                      <li>Claviers adaptés (physiques ou virtuels)</li>
                    </ul>
                  </Card>
                </div>
                
                <p className="text-muted-foreground mt-4">
                  Pour plus d'informations sur les outils technologiques adaptés, consultez notre page 
                  dédiée aux <a href="/ressources/applications" className="text-neuro-blue hover:underline">applications recommandées</a>.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-neuro-blue" />
                  <h3 className="text-xl font-bold">À retenir</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">La dysgraphie est un trouble persistant du geste graphique</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Elle peut être motrice, spatiale ou perceptive</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Elle n'est pas liée à l'intelligence ou au manque d'effort</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">L'ergothérapie est au cœur de la prise en charge</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Les outils numériques offrent d'excellentes alternatives</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Des adaptations scolaires sont indispensables</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Comorbidités fréquentes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  La dysgraphie est souvent associée à d'autres troubles:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Dyspraxie</span>
                      <p className="text-xs text-muted-foreground">Trouble de la coordination plus général</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">TDAH</span>
                      <p className="text-xs text-muted-foreground">Difficultés attentionnelles impactant le contrôle du geste</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Dyslexie/dysorthographie</span>
                      <p className="text-xs text-muted-foreground">Troubles souvent associés dans le cadre du langage écrit</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Testez vos connaissances</h3>
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                  onClick={scrollToTop}
                >
                  <Link to="/auto-evaluation">
                    Faire le test sur les troubles DYS
                  </Link>
                </Button>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Explorer d'autres troubles</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/dyspraxie">
                      Dyspraxie
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/dysorthographie">
                      Dysorthographie
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/dyslexie">
                      Dyslexie
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>    </div>
  );
};

export default Dysgraphie;
