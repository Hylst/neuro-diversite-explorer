
import React from 'react';
import { BookOpen, Brain, School, MessageSquare, Lightbulb, Book, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { TroubleHeader } from '@/components/troubles/common';

const Dyslexie = () => {
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
                La <span className="neuro-gradient-text">Dyslexie</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Trouble spécifique de l'apprentissage de la lecture et de l'orthographe
              </p>
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la dyslexie ?</h2>
                <p className="text-muted-foreground mb-4">
                  La dyslexie est un trouble neurologique qui affecte spécifiquement la capacité d'une personne à lire et à écrire, 
                  indépendamment de son intelligence, de son éducation ou de sa motivation. Elle touche environ 5 à 10% de la population.
                </p>
                <p className="text-muted-foreground mb-4">
                  Les recherches en neurosciences ont montré que le cerveau des personnes dyslexiques présente des particularités 
                  dans les zones impliquées dans le traitement phonologique et le décodage des mots. 
                  Ces différences ne sont pas des déficits, mais des variations neurologiques naturelles 
                  qui nécessitent des adaptations dans l'apprentissage de la lecture.
                </p>
                <p className="text-muted-foreground">
                  La dyslexie est un trouble durable qui persiste tout au long de la vie, mais avec des adaptations appropriées 
                  et une prise en charge adaptée, les personnes dyslexiques peuvent développer des stratégies efficaces pour surmonter 
                  leurs difficultés et réussir dans leurs études et leur vie professionnelle.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Manifestations principales</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4 border-neuro-blue">
                    <h3 className="font-semibold mb-2 text-neuro-blue">Difficultés de décodage</h3>
                    <p className="text-sm text-muted-foreground">
                      Problèmes dans la correspondance graphème-phonème (lettres/sons), rendant difficile la lecture de nouveaux mots.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <h3 className="font-semibold mb-2 text-neuro-blue">Confusions visuelles</h3>
                    <p className="text-sm text-muted-foreground">
                      Confusion entre des lettres visuellement similaires (b/d, p/q, m/n) ou des mots proches visuellement.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <h3 className="font-semibold mb-2 text-neuro-blue">Lenteur de lecture</h3>
                    <p className="text-sm text-muted-foreground">
                      Déchiffrage laborieux et lent, nécessitant un effort cognitif important qui peut entraîner une fatigue excessive.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <h3 className="font-semibold mb-2 text-neuro-blue">Difficultés orthographiques</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés persistantes à orthographier correctement les mots, même après de nombreuses expositions.
                    </p>
                  </Card>
                </div>
              </div>

              <Tabs defaultValue="diagnostic" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
                  <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
                  <TabsTrigger value="adaptations">Adaptations</TabsTrigger>
                  <TabsTrigger value="temoignages">Témoignages</TabsTrigger>
                  <TabsTrigger value="resources">Ressources</TabsTrigger>
                </TabsList>
                
                <TabsContent value="diagnostic" className="space-y-4">
                  <h3 className="text-xl font-semibold">Parcours diagnostique</h3>
                  <p className="text-muted-foreground mb-4">
                    Le diagnostic de la dyslexie est réalisé par des professionnels spécialisés, généralement après l'âge de 7-8 ans, 
                    lorsque l'apprentissage de la lecture est bien engagé et que les difficultés persistent malgré un enseignement adapté.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-muted p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <School className="h-4 w-4 text-neuro-blue" />
                        Médecin scolaire
                      </h4>
                      <p className="text-sm text-muted-foreground">Première évaluation et orientation</p>
                    </Card>
                    <Card className="bg-muted p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-neuro-green" />
                        Orthophoniste
                      </h4>
                      <p className="text-sm text-muted-foreground">Évaluation du langage écrit</p>
                    </Card>
                    <Card className="bg-muted p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Brain className="h-4 w-4 text-neuro-purple" />
                        Neuropsychologue
                      </h4>
                      <p className="text-sm text-muted-foreground">Évaluation cognitive globale</p>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Fréquence et durée</h3>
                    <p className="text-sm">
                      Une rééducation efficace demande généralement 1 à 2 séances hebdomadaires, 
                      sur une période de plusieurs années. La régularité et l'implication des parents 
                      et de l'école sont des facteurs déterminants du succès.
                    </p>
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
                </TabsContent>
                
                <TabsContent value="adaptations" className="space-y-4">
                  <h3 className="text-xl font-semibold">Adaptations et aménagements</h3>
                  <p className="text-muted-foreground mb-4">
                    De nombreuses adaptations peuvent être mises en place pour faciliter l'apprentissage et le quotidien des personnes dyslexiques.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Utilisation de polices adaptées (OpenDyslexic, Dyslexie Font)</li>
                    <li>Logiciels de synthèse vocale et de dictée vocale</li>
                    <li>Temps supplémentaire pour les examens et évaluations</li>
                    <li>Supports visuels et multisensoriels pour l'apprentissage</li>
                    <li>Aménagements pédagogiques (cours adaptés, photocopies des cours)</li>
                  </ul>
                </TabsContent>
                
                <TabsContent value="temoignages" className="space-y-4">
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
                        <Button variant="default">Partager votre expérience</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="resources" className="space-y-4">
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
            
            {/* Sidebar content */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-neuro-green" />
                    <span>À retenir</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-neuro-light-blue flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm">La dyslexie est un trouble persistant des apprentissages en lecture et orthographe</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-neuro-light-blue flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm">Elle peut affecter le sens du texte, les procédures ou la mémoire</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-neuro-light-blue flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm">Elle n'est pas liée à un manque d'effort ou d'intelligence</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-neuro-light-blue flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm">L'orthophonie et la neuropsychologie sont au cœur de la prise en charge</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-neuro-light-blue flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm">Les outils numériques offrent d'excellentes solutions compensatoires</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-neuro-light-blue flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm">Des adaptations scolaires sont indispensables pour la réussite</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-neuro-blue" />
                    <span>Ressources complémentaires</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/auto-evaluation">
                        <Brain className="mr-2 h-4 w-4" />
                        Test d'auto-évaluation
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/glossaire">
                        <Book className="mr-2 h-4 w-4" />
                        Glossaire des termes
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/ressources">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Consulter un spécialiste
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dyslexie;
