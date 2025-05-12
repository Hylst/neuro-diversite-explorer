
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, School, MessageSquare, Lightbulb, Book, ArrowLeft, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dyslexie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <Button variant="ghost" size="icon" asChild className="w-fit">
                <Link to="/troubles">
                  <ArrowLeft className="h-6 w-6" />
                </Link>
              </Button>
              <div>
                <h1 className="text-4xl font-bold flex items-center gap-2">
                  <BookOpen className="h-8 w-8 text-neuro-blue" />
                  <span>Dyslexie</span>
                </h1>
                <p className="text-muted-foreground">Trouble spécifique de l'apprentissage de la lecture et de l'orthographe</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="md:col-span-2 neuro-card border-neuro-blue">
                <CardHeader>
                  <CardTitle>Comprendre la dyslexie</CardTitle>
                  <CardDescription>Une perspective neurologique</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    La dyslexie est un trouble neurologique qui affecte spécifiquement la capacité d'une personne à lire et à écrire, 
                    indépendamment de son intelligence, de son éducation ou de sa motivation. Elle touche environ 5 à 10% de la population.
                  </p>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Mécanismes neurologiques</h3>
                    <p className="text-sm text-muted-foreground">
                      Les recherches en neurosciences ont montré que le cerveau des personnes dyslexiques présente des particularités 
                      dans les zones impliquées dans le traitement phonologique et le décodage des mots. 
                      Ces différences ne sont pas des déficits, mais des variations neurologiques naturelles 
                      qui nécessitent des adaptations dans l'apprentissage de la lecture.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Manifestations principales</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Difficultés dans la correspondance graphème-phonème (lettres/sons)</li>
                      <li>Confusion entre des lettres visuellement similaires (b/d, p/q)</li>
                      <li>Lenteur importante dans le déchiffrage et la lecture</li>
                      <li>Difficultés d'orthographe persistantes</li>
                      <li>Fatigue excessive lors des activités de lecture prolongées</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full neuro-card border-neuro-blue">
                  <CardHeader>
                    <CardTitle>Points forts associés</CardTitle>
                    <CardDescription>Les atouts souvent présents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        {
                          icon: <Brain className="h-5 w-5 text-neuro-blue" />,
                          title: "Pensée en 3D",
                          description: "Excellente capacité de visualisation spatiale et de pensée tridimensionnelle"
                        },
                        {
                          icon: <Lightbulb className="h-5 w-5 text-neuro-orange" />,
                          title: "Créativité",
                          description: "Approche innovante et perspectives uniques des problèmes"
                        },
                        {
                          icon: <MessageSquare className="h-5 w-5 text-neuro-green" />,
                          title: "Communication orale",
                          description: "Souvent d'excellentes capacités d'expression verbale et narrative"
                        },
                        {
                          icon: <Book className="h-5 w-5 text-neuro-purple" />,
                          title: "Compréhension profonde",
                          description: "Aptitude à saisir les concepts complexes malgré les difficultés de décodage"
                        }
                      ].map((strength, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1">{strength.icon}</div>
                          <div>
                            <p className="font-medium">{strength.title}</p>
                            <p className="text-sm text-muted-foreground">{strength.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <Tabs defaultValue="diagnostic" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl mx-auto mb-8">
              <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
              <TabsTrigger value="adaptations">Adaptations</TabsTrigger>
              <TabsTrigger value="temoignages">Témoignages</TabsTrigger>
              <TabsTrigger value="resources">Ressources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="diagnostic">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Parcours diagnostique</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="border-l-2 border-neuro-blue pl-4 py-2">
                        <h3 className="font-semibold text-xl">Quand s'inquiéter ?</h3>
                        <p className="text-muted-foreground">
                          Les signes d'alerte apparaissent généralement lors de l'apprentissage de la lecture, mais certains 
                          indices peuvent être observés dès la maternelle (difficultés avec les rimes, retard de langage, 
                          confusion des sons proches).
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Professionnels impliqués</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <Card className="bg-muted">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base flex items-center gap-2">
                                <span className="p-1 rounded-full bg-neuro-light-blue">
                                  <School className="h-4 w-4 text-neuro-blue" />
                                </span>
                                Médecin scolaire
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p>Première évaluation et orientation vers les spécialistes adaptés</p>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-muted">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base flex items-center gap-2">
                                <span className="p-1 rounded-full bg-neuro-light-green">
                                  <MessageSquare className="h-4 w-4 text-neuro-green" />
                                </span>
                                Orthophoniste
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p>Évaluation approfondie des compétences en lecture et langage écrit</p>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-muted">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base flex items-center gap-2">
                                <span className="p-1 rounded-full bg-neuro-light-purple">
                                  <Brain className="h-4 w-4 text-neuro-purple" />
                                </span>
                                Neuropsychologue
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <p>Évaluation cognitive globale pour écarter d'autres causes ou identifier des comorbidités</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Tests utilisés</h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>ODEDYS : Outil de dépistage des dyslexies</li>
                          <li>BALE : Batterie analytique du langage écrit</li>
                          <li>L2MA : Langage oral, Langage écrit, Mémoire, Attention</li>
                          <li>BELEC : Batterie d'évaluation du langage écrit</li>
                        </ul>
                        <p className="mt-3 text-sm italic">
                          L'évaluation complète requiert généralement plusieurs séances et l'intervention de différents professionnels.
                        </p>
                      </div>
                      
                      <div className="bg-neuro-light-blue/20 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Check className="h-5 w-5 text-neuro-blue" />
                          Diagnostic différentiel
                        </h3>
                        <p className="text-sm">
                          Il est important de distinguer la dyslexie d'autres causes de difficultés de lecture comme :
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li>Déficience intellectuelle</li>
                          <li>Troubles sensoriels (vision, audition)</li>
                          <li>Troubles psychologiques</li>
                          <li>Scolarisation insuffisante ou inadaptée</li>
                          <li>Bilinguisme mal accompagné</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="adaptations">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Adaptations et accompagnement</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <School className="h-5 w-5 text-neuro-blue" />
                        <span>Adaptations scolaires</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Aménagements pédagogiques</h3>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Photocopies des cours pour éviter la prise de notes</li>
                          <li>Utilisation de polices adaptées (OpenDyslexic, Arial, Comic Sans)</li>
                          <li>Temps supplémentaire pour les évaluations</li>
                          <li>Réduction de la quantité de lecture et d'écriture</li>
                          <li>Mise en évidence des informations essentielles</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Outils compensatoires</h3>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Logiciels de synthèse vocale</li>
                          <li>Correcteurs orthographiques spécialisés</li>
                          <li>Cartes mentales pour structurer les idées</li>
                          <li>Enregistreurs pour les cours magistraux</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Dispositifs officiels</h3>
                        <p className="text-sm">
                          Le Plan d'Accompagnement Personnalisé (PAP) et le Projet Personnalisé de Scolarisation (PPS) permettent 
                          de formaliser les adaptations nécessaires tout au long du parcours scolaire.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-neuro-purple" />
                        <span>Rééducation et développement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Rééducation orthophonique</h3>
                        <p className="text-muted-foreground">
                          La prise en charge orthophonique est au cœur du traitement de la dyslexie. Elle vise à :
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2 text-muted-foreground">
                          <li>Renforcer la conscience phonologique</li>
                          <li>Améliorer le décodage graphème-phonème</li>
                          <li>Développer la fluidité en lecture</li>
                          <li>Consolider les compétences orthographiques</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Approches complémentaires</h3>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Méthodes multi-sensorielles (DAVIS, VITTOZ)</li>
                          <li>Entraînement de la mémoire de travail</li>
                          <li>Activités visuelles et visuo-attentionnelles</li>
                          <li>Jeux phonologiques et linguistiques</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Fréquence et durée</h3>
                        <p className="text-sm">
                          Une rééducation efficace demande généralement 1 à 2 séances hebdomadaires, 
                          sur une période de plusieurs années. La régularité et l'implication des parents 
                          et de l'école sont des facteurs déterminants du succès.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-neuro-orange" />
                      <span>Stratégies quotidiennes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Pour les parents</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Lecture partagée régulière, même après l'apprentissage initial</li>
                          <li>Patience face aux difficultés persistantes</li>
                          <li>Valorisation des progrès et des forces de l'enfant</li>
                          <li>Focus sur la compréhension plutôt que sur le déchiffrage parfait</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Pour les enseignants</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Structuration claire des informations écrites</li>
                          <li>Alternance des modalités d'enseignement (oral, visuel, kinesthésique)</li>
                          <li>Évaluation différenciée qui ne pénalise pas l'orthographe</li>
                          <li>Communication régulière avec les parents et thérapeutes</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Pour les adultes dyslexiques</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Utilisation systématique d'outils numériques compensatoires</li>
                          <li>Organisation du temps supplémentaire pour les tâches de lecture</li>
                          <li>Mise en place de routines de révision et vérification</li>
                          <li>Développement de stratégies personnalisées efficaces</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="temoignages">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Témoignages et parcours</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      name: "Léa, 14 ans",
                      quote: "Avant mon diagnostic en CE2, je pensais que j'étais juste moins intelligente que les autres. Maintenant, avec mes adaptations et ma tablette, je réussis aussi bien qu'eux, juste différemment.",
                      context: "Dyslexie modérée, suivie en orthophonie depuis 4 ans"
                    },
                    {
                      name: "Thomas, 23 ans",
                      quote: "À l'université, j'ai enfin pu jouer sur mes forces. J'excelle en mathématiques et en sciences, où la compréhension des concepts est plus importante que la lecture rapide. Je suis maintenant en doctorat de physique.",
                      context: "Dyslexie sévère, diagnostiqué tardivement à 16 ans"
                    },
                    {
                      name: "Nathalie, mère de Théo",
                      quote: "Le plus difficile a été le temps perdu avant le diagnostic. Son estime de soi était au plus bas. La rééducation a été un long chemin, mais voir mon fils reprendre confiance en lui n'a pas de prix.",
                      context: "Son fils de 11 ans a une dyslexie associée à une dysorthographie"
                    },
                    {
                      name: "Marc, 41 ans",
                      quote: "Dans mon métier d'architecte, ma façon de penser en 3D est un avantage considérable. Ma dyslexie m'a appris à trouver des solutions créatives aux problèmes, une compétence précieuse dans mon domaine.",
                      context: "Entrepreneur, a créé sa propre agence d'architecture"
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card>
                        <CardContent className="pt-6">
                          <blockquote className="border-l-4 border-neuro-blue pl-4 italic">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="mt-4 flex justify-between items-end">
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.context}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                  
                  <div className="text-center mt-8">
                    <Button>Partager votre expérience</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Ressources et outils</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Associations spécialisées</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-b pb-3">
                        <h3 className="font-medium">Fédération Française des DYS (FFDYS)</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Organisation nationale regroupant les associations spécialisées dans les troubles DYS.
                        </p>
                        <a href="https://www.ffdys.com" className="text-sm text-neuro-blue hover:underline">
                          www.ffdys.com
                        </a>
                      </div>
                      
                      <div className="border-b pb-3">
                        <h3 className="font-medium">Association APEDYS</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Réseau d'associations locales de parents d'enfants dyslexiques.
                        </p>
                        <a href="https://www.apedys.org" className="text-sm text-neuro-blue hover:underline">
                          www.apedys.org
                        </a>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Anapedys</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Association nationale de parents d'enfants dyslexiques.
                        </p>
                        <a href="https://www.anapedys.org" className="text-sm text-neuro-blue hover:underline">
                          www.anapedys.org
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Outils numériques</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-b pb-3">
                        <h3 className="font-medium">Dysvocal</h3>
                        <p className="text-sm text-muted-foreground">
                          Logiciel complet offrant synthèse vocale, prédiction de mots et correction orthographique.
                        </p>
                      </div>
                      
                      <div className="border-b pb-3">
                        <h3 className="font-medium">Antidote</h3>
                        <p className="text-sm text-muted-foreground">
                          Correcteur orthographique et grammatical avancé avec dictionnaire intégré.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Fontes adaptées</h3>
                        <p className="text-sm text-muted-foreground">
                          OpenDyslexic, Dyslexie, Lexie Readable : polices conçues pour faciliter la lecture.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Livres et publications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h3 className="font-medium">Pour les professionnels et parents</h3>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-muted-foreground">
                            <li>"La dyslexie à livre ouvert" - A. Van Hout et F. Estienne</li>
                            <li>"100 idées pour venir en aide aux élèves dyslexiques" - G. Reid et S. Green</li>
                            <li>"Dyslexie et troubles associés, on s'en sort !" - C. Deman-Debals</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted p-4 rounded-lg">
                          <h3 className="font-medium">Livres adaptés pour enfants</h3>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-muted-foreground">
                            <li>Collection "Dyscool" - Nathan</li>
                            <li>Collection "Flash Fiction" - Rageot</li>
                            <li>Collection "Les romans qui donnent des ailes" - Castelmore</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>    </div>
  );
};

export default Dyslexie;
