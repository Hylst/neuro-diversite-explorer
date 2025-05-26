
import React, { useState } from 'react';
import { BookOpen, Brain, School, MessageSquare, Lightbulb, Book, Check, ArrowLeft, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { TroubleHeader } from '@/components/troubles/common';

const Dyslexie = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const Tooltip = ({ id, children, content }) => (
    <span 
      className="relative inline-block cursor-help"
      onMouseEnter={() => setActiveTooltip(id)}
      onMouseLeave={() => setActiveTooltip(null)}
    >
      <span className="border-b-2 border-dotted border-neuro-blue text-neuro-blue font-medium">
        {children}
      </span>
      {activeTooltip === id && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg max-w-xs whitespace-normal"
        >
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </motion.div>
      )}
    </span>
  );

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
                  La <Tooltip id="dyslexie-def" content="Trouble neurodéveloppemental spécifique de l'apprentissage de la lecture, d'origine neurobiologique, qui persiste malgré un enseignement approprié et une intelligence normale.">dyslexie</Tooltip> est un <Tooltip id="trouble-neurologique" content="Le trouble a une base neurobiologique, avec des différences observables dans le fonctionnement cérébral.">trouble neurologique</Tooltip> qui affecte spécifiquement la capacité d'une personne à lire et à écrire, 
                  indépendamment de son intelligence, de son éducation ou de sa motivation. Elle touche environ <Tooltip id="prevalence" content="La prévalence varie selon les études et les critères diagnostiques utilisés, mais se situe généralement entre 5 et 10% de la population.">5 à 10% de la population</Tooltip>.
                </p>
                <p className="text-muted-foreground mb-4">
                  Les recherches en <Tooltip id="neurosciences" content="Sciences qui étudient le système nerveux et le cerveau. L'imagerie cérébrale a révélé des différences dans l'activation de certaines zones chez les dyslexiques.">neurosciences</Tooltip> ont montré que le cerveau des personnes dyslexiques présente des particularités 
                  dans les zones impliquées dans le <Tooltip id="traitement-phonologique" content="Capacité à manipuler les sons du langage (phonèmes). Essentiel pour associer les lettres aux sons.">traitement phonologique</Tooltip> et le décodage des mots. 
                  Ces différences ne sont pas des déficits, mais des <Tooltip id="variations-neurologiques" content="Différences naturelles dans le fonctionnement cérébral, comme la diversité des empreintes digitales.">variations neurologiques naturelles</Tooltip> 
                  qui nécessitent des adaptations dans l'apprentissage de la lecture.
                </p>
                <p className="text-muted-foreground">
                  La dyslexie est un <Tooltip id="trouble-durable" content="Le trouble ne disparaît pas mais peut être largement compensé par des stratégies et des outils appropriés.">trouble durable</Tooltip> qui persiste tout au long de la vie, mais avec des adaptations appropriées 
                  et une <Tooltip id="prise-en-charge" content="Accompagnement multidisciplinaire incluant orthophonie, adaptations scolaires, et soutien psychologique si nécessaire.">prise en charge adaptée</Tooltip>, les personnes dyslexiques peuvent développer des stratégies efficaces pour surmonter 
                  leurs difficultés et réussir dans leurs études et leur vie professionnelle.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Manifestations principales</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      rotateY: 2,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="p-4 border-neuro-blue transition-all duration-300 hover:border-neuro-blue/80 hover:bg-blue-50/50">
                      <h3 className="font-semibold mb-2 text-neuro-blue flex items-center gap-2">
                        Difficultés de <Tooltip id="decodage" content="Processus de conversion des lettres écrites en sons correspondants, étape fondamentale de la lecture.">décodage</Tooltip>
                        <HelpCircle className="h-4 w-4 text-neuro-blue/60" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Problèmes dans la <Tooltip id="grapheme-phoneme" content="Relation entre les lettres (graphèmes) et les sons (phonèmes). Par exemple, 'ch' = /ʃ/ ou 'eau' = /o/.">correspondance graphème-phonème</Tooltip> (lettres/sons), rendant difficile la lecture de nouveaux mots.
                      </p>
                    </Card>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      rotateY: -2,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="p-4 border-neuro-blue transition-all duration-300 hover:border-neuro-blue/80 hover:bg-blue-50/50">
                      <h3 className="font-semibold mb-2 text-neuro-blue flex items-center gap-2">
                        <Tooltip id="confusions-visuelles" content="Difficultés à distinguer des lettres ou mots similaires visuellement, fréquent en dyslexie.">Confusions visuelles</Tooltip>
                        <HelpCircle className="h-4 w-4 text-neuro-blue/60" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Confusion entre des lettres visuellement similaires (<Tooltip id="exemples-confusions" content="Ces confusions sont dues à des difficultés de traitement visuo-spatial et de mémoire de travail visuelle.">b/d, p/q, m/n</Tooltip>) ou des mots proches visuellement.
                      </p>
                    </Card>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      rotateY: 2,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="p-4 border-neuro-blue transition-all duration-300 hover:border-neuro-blue/80 hover:bg-blue-50/50">
                      <h3 className="font-semibold mb-2 text-neuro-blue flex items-center gap-2">
                        <Tooltip id="lenteur-lecture" content="La lecture demande plus d'effort cognitif, réduisant la vitesse et augmentant la fatigue.">Lenteur de lecture</Tooltip>
                        <HelpCircle className="h-4 w-4 text-neuro-blue/60" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <Tooltip id="dechiffrage-laborieux" content="Processus de lecture non automatisé qui mobilise beaucoup de ressources attentionnelles.">Déchiffrage laborieux et lent</Tooltip>, nécessitant un effort cognitif important qui peut entraîner une <Tooltip id="fatigue-cognitive" content="Épuisement mental dû à l'effort soutenu nécessaire pour lire, pouvant affecter la concentration.">fatigue excessive</Tooltip>.
                      </p>
                    </Card>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      rotateY: -2,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="p-4 border-neuro-blue transition-all duration-300 hover:border-neuro-blue/80 hover:bg-blue-50/50">
                      <h3 className="font-semibold mb-2 text-neuro-blue flex items-center gap-2">
                        Difficultés <Tooltip id="orthographiques" content="L'orthographe implique la mémorisation de la forme visuelle des mots, particulièrement difficile en dyslexie.">orthographiques</Tooltip>
                        <HelpCircle className="h-4 w-4 text-neuro-blue/60" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Difficultés persistantes à orthographier correctement les mots, même après de <Tooltip id="expositions-multiples" content="Contrairement aux lecteurs typiques, les dyslexiques ont besoin de beaucoup plus d'expositions pour mémoriser l'orthographe.">nombreuses expositions</Tooltip>.
                      </p>
                    </Card>
                  </motion.div>
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
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="default" 
                            className="transition-all duration-300 hover:shadow-lg hover:bg-neuro-blue/90"
                          >
                            Partager votre expérience
                          </Button>
                        </motion.div>
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
                          <motion.div 
                            className="border-b pb-3"
                            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)", x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <h3 className="font-medium flex items-center gap-2">
                              Dysvocal
                              <Tooltip id="dysvocal" content="Logiciel français développé spécifiquement pour les troubles DYS. Il combine plusieurs outils : lecture vocale, prédiction de mots, et aide à l'écriture.">
                                <HelpCircle className="h-4 w-4 text-neuro-blue" />
                              </Tooltip>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Logiciel complet offrant <Tooltip id="synthese-vocale" content="Technologie qui convertit le texte écrit en parole, permettant d'écouter au lieu de lire.">synthèse vocale</Tooltip>, <Tooltip id="prediction-mots" content="Système qui propose des mots pendant la frappe, réduisant les erreurs et accélérant l'écriture.">prédiction de mots</Tooltip> et correction orthographique.
                            </p>
                          </motion.div>
                          
                          <motion.div 
                            className="border-b pb-3"
                            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)", x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <h3 className="font-medium flex items-center gap-2">
                              Antidote
                              <Tooltip id="antidote" content="Suite logicielle québécoise reconnue pour sa qualité. Particulièrement utile pour les dyslexiques grâce à ses explications détaillées des erreurs.">
                                <HelpCircle className="h-4 w-4 text-neuro-blue" />
                              </Tooltip>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              <Tooltip id="correcteur-avance" content="Va au-delà de la simple correction : analyse le style, la syntaxe, et propose des améliorations contextuelles.">Correcteur orthographique et grammatical avancé</Tooltip> avec dictionnaire intégré.
                            </p>
                          </motion.div>
                          
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)", x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <h3 className="font-medium flex items-center gap-2">
                              Fontes adaptées
                              <Tooltip id="fontes-adaptees" content="Polices de caractères spécialement conçues pour réduire les confusions visuelles courantes en dyslexie (b/d, p/q, etc.).">
                                <HelpCircle className="h-4 w-4 text-neuro-blue" />
                              </Tooltip>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              <Tooltip id="exemples-fontes" content="OpenDyslexic : gratuite, caractères avec base lourde. Dyslexie : développée par un dyslexique. Lexie Readable : optimisée pour la lisibilité.">OpenDyslexic, Dyslexie, Lexie Readable</Tooltip> : polices conçues pour faciliter la lecture.
                            </p>
                          </motion.div>
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
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline" className="w-full justify-start transition-all duration-300 hover:bg-neuro-blue/10 hover:border-neuro-blue" asChild>
                        <Link to="/auto-evaluation">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                          >
                            <Brain className="mr-2 h-4 w-4" />
                          </motion.div>
                          Test d'auto-évaluation
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline" className="w-full justify-start transition-all duration-300 hover:bg-neuro-blue/10 hover:border-neuro-blue" asChild>
                        <Link to="/glossaire">
                          <motion.div
                            animate={{ rotateY: [0, 180, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                          >
                            <Book className="mr-2 h-4 w-4" />
                          </motion.div>
                          Glossaire des termes
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline" className="w-full justify-start transition-all duration-300 hover:bg-neuro-blue/10 hover:border-neuro-blue" asChild>
                        <Link to="/ressources">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                          </motion.div>
                          Consulter un spécialiste
                        </Link>
                      </Button>
                    </motion.div>
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
