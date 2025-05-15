import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, BookOpen, ChartBar, Scale, Lightbulb, History, 
  Users, HeartHandshake, BookMarked, ExternalLink as ExternalLinkIcon,
  FileVideo, Globe as GlobeIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Comprendre = () => {
  // Références pour les sections
  const conceptsRef = useRef<HTMLDivElement>(null);
  const ressourcesRef = useRef<HTMLDivElement>(null);
  
  // Fonction de défilement fluide
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Comprendre la <span className="neuro-gradient-text">neurodiversité</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Découvrez les fondements théoriques, les concepts clés et les différentes approches de la neurodiversité
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection(conceptsRef)}
                >
                  Explorer les concepts
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection(ressourcesRef)}
                >
                  Ressources d'apprentissage
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div ref={conceptsRef} className="container py-12">
          <Tabs defaultValue="definitions" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="grid w-full max-w-4xl grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="definitions">Définitions clés</TabsTrigger>
                <TabsTrigger value="cerveau">Fonctionnement cérébral</TabsTrigger>
                <TabsTrigger value="historique">Historique</TabsTrigger>
                <TabsTrigger value="statistiques">Chiffres clés</TabsTrigger>
                <TabsTrigger value="approches">Approches</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="definitions">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Brain className="h-5 w-5 text-neuro-purple" />
                          <span>Neurotypique vs Neurodivergent</span>
                        </CardTitle>
                        <CardDescription>Comprendre la différence</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>
                          <strong>Neurotypique</strong> désigne les personnes dont le développement neurologique correspond aux schémas considérés comme "standards". 
                        </p>
                        <p className="mt-2">
                          <strong>Neurodivergent</strong> fait référence aux personnes dont le cerveau fonctionne différemment de la norme statistique, comme les personnes avec TDAH, autisme, dyslexie et autres conditions neurologiques.
                        </p>
                        <p className="mt-2">
                          Ces termes s'inscrivent dans une vision de la neurodiversité comme partie intégrante de la diversité humaine, plutôt que comme pathologie.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Scale className="h-5 w-5 text-neuro-purple" />
                          <span>Modèle médical vs Modèle social</span>
                        </CardTitle>
                        <CardDescription>Deux approches du handicap</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>
                          <strong>Le modèle médical</strong> considère le handicap comme un problème individuel nécessitant un traitement ou une adaptation de la personne.
                        </p>
                        <p className="mt-2">
                          <strong>Le modèle social</strong> envisage le handicap comme résultant de l'inadaptation de la société aux besoins des personnes neurodivergentes.
                        </p>
                        <p className="mt-2">
                          L'approche de la neurodiversité s'inscrit davantage dans le modèle social, tout en reconnaissant l'importance des soutiens et adaptations individuelles.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-neuro-purple" />
                        <span>Glossaire des termes essentiels</span>
                      </CardTitle>
                      <CardDescription>Comprendre le vocabulaire de la neurodiversité</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            term: "Neurodiversité",
                            definition: "Concept selon lequel les variations neurologiques font partie de la diversité humaine naturelle"
                          },
                          {
                            term: "Spectre",
                            definition: "Éventail continu de caractéristiques ou de traits, sans frontières nettes entre les catégories"
                          },
                          {
                            term: "Comorbidité",
                            definition: "Présence simultanée de plusieurs troubles ou conditions chez une même personne"
                          },
                          {
                            term: "Fonctions exécutives",
                            definition: "Ensemble de processus cognitifs permettant la planification, l'organisation et l'exécution des tâches"
                          },
                          {
                            term: "Stimming",
                            definition: "Comportements répétitifs d'autostimulation qui aident à réguler les émotions ou les sensations"
                          },
                          {
                            term: "Hypersensibilité",
                            definition: "Sensibilité accrue aux stimuli sensoriels (bruits, lumières, textures...)"
                          },
                          {
                            term: "Hyposensibilité",
                            definition: "Réactivité réduite aux stimuli sensoriels, pouvant conduire à rechercher des sensations plus intenses"
                          },
                          {
                            term: "Masking/Camouflage",
                            definition: "Effort conscient de dissimuler les traits neurodivergents pour paraître plus neurotypique"
                          },
                          {
                            term: "Double empathie",
                            definition: "Théorie expliquant les difficultés de communication entre personnes neurotypiques et neurodivergentes comme mutuelles"
                          },
                          {
                            term: "Monotropisme",
                            definition: "Tendance à concentrer l'attention sur un nombre limité d'intérêts à la fois, souvent associée à l'autisme"
                          },
                        ].map((item, index) => (
                          <div key={index} className="border-b pb-2">
                            <dt className="font-semibold">{item.term}</dt>
                            <dd className="text-muted-foreground">{item.definition}</dd>
                          </div>
                        ))}
                      </dl>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-neuro-purple" />
                        <span>Paradigmes fondamentaux</span>
                      </CardTitle>
                      <CardDescription>Principes sous-jacents à la compréhension de la neurodiversité</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg">La neurodiversité comme identité</h3>
                        <p className="text-muted-foreground">
                          Pour de nombreuses personnes, notamment autistes, la neurodivergence n'est pas seulement une condition médicale mais une partie intégrante de leur identité. Cette perspective influence profondément leur expérience du monde et leurs interactions sociales.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">Diversité des besoins de soutien</h3>
                        <p className="text-muted-foreground">
                          Les besoins varient considérablement d'une personne à l'autre, même au sein d'une même catégorie diagnostique. Certaines personnes nécessitent peu de soutien tandis que d'autres ont besoin d'un accompagnement important au quotidien.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">Le rôle de l'environnement</h3>
                        <p className="text-muted-foreground">
                          Les difficultés rencontrées sont souvent liées à l'inadéquation entre les caractéristiques neurologiques de la personne et son environnement plutôt qu'à un déficit intrinsèque.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
            
            <TabsContent value="cerveau">
              <div className="max-w-4xl mx-auto space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Fonctionnement cérébral et neurodiversité</CardTitle>
                      <CardDescription>
                        Comment les différences neurologiques façonnent notre perception et notre interaction avec le monde
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg">Fonctions exécutives</h3>
                        <p className="text-muted-foreground mb-3">
                          Ensemble de processus cérébraux qui permettent la planification, l'organisation, la mémoire de travail et l'inhibition des comportements. Les personnes TDAH peuvent présenter un développement atypique de ces fonctions, particulièrement dans le cortex préfrontal.
                        </p>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Impact sur la vie quotidienne</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                            <li>Difficultés à initier ou terminer des tâches</li>
                            <li>Challenges dans la gestion du temps</li>
                            <li>Problèmes d'organisation</li>
                            <li>Impulsivité dans la prise de décision</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">Traitement sensoriel</h3>
                        <p className="text-muted-foreground mb-3">
                          Le cerveau neurodivergent peut traiter les informations sensorielles différemment. Chez les personnes autistes par exemple, certaines zones cérébrales montrent une hyperconnectivité ou hypoconnectivité qui influence la perception sensorielle.
                        </p>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Manifestations</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                            <li>Hypersensibilité aux stimuli (lumières, sons, textures)</li>
                            <li>Hyposensibilité nécessitant une stimulation plus intense</li>
                            <li>Perception atypique du temps et de l'espace</li>
                            <li>Synesthésie (fusion de sens) plus fréquente</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">Réseaux neuronaux de la lecture</h3>
                        <p className="text-muted-foreground mb-3">
                          Les troubles comme la dyslexie impliquent des différences dans le traitement phonologique et les réseaux cérébraux impliqués dans la lecture, notamment dans les régions temporo-pariétales et occipito-temporales.
                        </p>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Mécanismes</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                            <li>Activation atypique lors du décodage phonologique</li>
                            <li>Différences dans le traitement visuel des mots</li>
                            <li>Connectivité modifiée entre les régions cérébrales du langage</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4">
                        <Button 
                          variant="secondary" 
                          className="px-6 py-8 h-auto flex-1 max-w-xs flex flex-col items-center gap-2"
                          asChild
                        >
                          <Link to="/cerveau">
                            <Brain className="h-12 w-12 text-neuro-purple mb-2" />
                            <p className="text-sm font-medium">Carte interactive du cerveau en développement</p>
                          </Link>
                        </Button>
                        <Button 
                          variant="secondary" 
                          className="px-6 py-8 h-auto flex-1 max-w-xs flex flex-col items-center gap-2"
                          asChild
                        >
                          <Link to="/cerveau#neurotransmittersRef">
                            <Lightbulb className="h-12 w-12 text-neuro-orange mb-2" />
                            <p className="text-sm font-medium">Explorer les neurotransmetteurs et leur rôle</p>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
            
            <TabsContent value="historique">
              <div className="max-w-4xl mx-auto space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <History className="h-5 w-5 text-neuro-purple" />
                        <span>Histoire du mouvement de la neurodiversité</span>
                      </CardTitle>
                      <CardDescription>L'évolution de la compréhension et des approches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative border-l-2 border-muted-foreground/30 pl-6 space-y-10 py-2">
                        <div className="relative">
                          <div className="absolute -left-8 w-4 h-4 rounded-full bg-neuro-purple"></div>
                          <div>
                            <h3 className="font-bold text-lg">1990s : Émergence du concept</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              Le terme "neurodiversité" est utilisé pour la première fois par la sociologue australienne Judy Singer (elle-même autiste) à la fin des années 1990.
                            </p>
                            <p className="text-sm">
                              Cette période marque le début d'une reconceptualisation des conditions neurologiques comme faisant partie de la diversité humaine naturelle plutôt que comme des pathologies à "guérir".
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-8 w-4 h-4 rounded-full bg-neuro-purple"></div>
                          <div>
                            <h3 className="font-bold text-lg">Années 2000 : Développement du mouvement</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              Émergence d'organisations dirigées par des personnes neurodivergentes et développement d'une conscience communautaire.
                            </p>
                            <p className="text-sm">
                              Internet joue un rôle crucial en permettant aux personnes neurodivergentes de se connecter, de partager leurs expériences et de s'organiser politiquement.
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-8 w-4 h-4 rounded-full bg-neuro-purple"></div>
                          <div>
                            <h3 className="font-bold text-lg">2010s : Reconnaissance scientifique et sociale</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              Les recherches en neurosciences apportent un soutien croissant à l'idée que les variations neurologiques sont naturelles.
                            </p>
                            <p className="text-sm">
                              Évolution des critères diagnostiques (DSM-5) vers une vision plus dimensionnelle des troubles neurodéveloppementaux.
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-8 w-4 h-4 rounded-full bg-neuro-purple"></div>
                          <div>
                            <h3 className="font-bold text-lg">Aujourd'hui : Intégration et défis</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              Incorporation progressive du paradigme de la neurodiversité dans les politiques éducatives, professionnelles et de santé.
                            </p>
                            <p className="text-sm">
                              Tensions persistantes entre le modèle médical traditionnel et l'approche de la neurodiversité, avec des débats sur l'équilibre entre célébration des différences et reconnaissance des besoins de soutien.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-neuro-purple" />
                        <span>Figures emblématiques</span>
                      </CardTitle>
                      <CardDescription>Penseurs et militants qui ont façonné le mouvement</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-semibold mb-1">Judy Singer</h3>
                          <p className="text-sm text-muted-foreground">Sociologue australienne qui a popularisé le terme "neurodiversité" dans les années 1990, contribuant à lancer le mouvement.</p>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="font-semibold mb-1">Steve Silberman</h3>
                          <p className="text-sm text-muted-foreground">Auteur de "NeuroTribes", ouvrage majeur retraçant l'histoire de l'autisme et du mouvement pour la neurodiversité.</p>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="font-semibold mb-1">Temple Grandin</h3>
                          <p className="text-sm text-muted-foreground">Scientifique autiste dont les écrits ont aidé à comprendre la perception sensorielle et la pensée visuelle chez les personnes autistes.</p>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="font-semibold mb-1">Nick Walker</h3>
                          <p className="text-sm text-muted-foreground">Théoricien et éducateur autiste qui a développé le concept de "neuroqueer" et approfondi la théorie de la neurodiversité.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
            
            <TabsContent value="statistiques">
              <div className="max-w-4xl mx-auto space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ChartBar className="h-5 w-5 text-neuro-purple" />
                        <span>Chiffres clés et statistiques</span>
                      </CardTitle>
                      <CardDescription>Prévalence et impact des troubles neurodéveloppementaux</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-muted rounded-lg p-4 text-center">
                          <h3 className="text-2xl font-bold text-neuro-purple">1 sur 36</h3>
                          <p className="text-sm text-muted-foreground">Enfants diagnostiqués avec un trouble du spectre autistique aux États-Unis (CDC, 2023)</p>
                        </div>
                        
                        <div className="bg-muted rounded-lg p-4 text-center">
                          <h3 className="text-2xl font-bold text-neuro-purple">5-8%</h3>
                          <p className="text-sm text-muted-foreground">Prévalence mondiale estimée du TDAH chez les enfants et adolescents</p>
                        </div>
                        
                        <div className="bg-muted rounded-lg p-4 text-center">
                          <h3 className="text-2xl font-bold text-neuro-purple">10%</h3>
                          <p className="text-sm text-muted-foreground">Estimation de la population présentant une forme de trouble DYS (dyslexie, dyscalculie, etc.)</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Évolution des diagnostics</h3>
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-3">
                            L'augmentation des taux de diagnostic reflète une meilleure sensibilisation, des critères plus inclusifs et une reconnaissance accrue, plutôt qu'une augmentation réelle de la prévalence.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-sm mb-1">Autisme</h4>
                              <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                                <li>1980s: environ 1 sur 2000</li>
                                <li>2000s: environ 1 sur 150</li>
                                <li>2023: environ 1 sur 36</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm mb-1">TDAH</h4>
                              <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                                <li>Augmentation de 42% des diagnostics entre 2003 et 2011</li>
                                <li>Reconnaissance croissante chez les filles et les adultes</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Impact socio-économique</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-muted p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Emploi</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                              <li>85% des adultes autistes diplômés universitaires sont sans emploi ou sous-employés</li>
                              <li>Les adultes TDAH gagnent en moyenne 17% de moins que leurs pairs neurotypiques</li>
                              <li>Les personnes dyslexiques sont surreprésentées dans l'entrepreneuriat (35% des entrepreneurs)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-muted p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Éducation</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                              <li>Les élèves TDAH ont un risque 3x plus élevé d'abandon scolaire</li>
                              <li>50% des élèves dyslexiques bénéficient de soutien approprié (France)</li>
                              <li>33% des élèves TSA ne terminent pas leur secondaire</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center my-4">
                        <div className="bg-secondary px-6 py-4 rounded-lg text-center">
                          <ChartBar className="h-12 w-12 text-neuro-purple mx-auto mb-2" />
                          <p className="text-sm font-medium">Infographies et statistiques plus détaillées en développement</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
            
            <TabsContent value="approches">
              <div className="max-w-4xl mx-auto space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <HeartHandshake className="h-5 w-5 text-neuro-purple" />
                        <span>Approches d'accompagnement</span>
                      </CardTitle>
                      <CardDescription>Différentes perspectives pour soutenir la neurodiversité</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Approche développementale</h3>
                            <p className="text-sm text-muted-foreground">
                              Priorité au développement relationnel et à la communication réciproque. Exemples : modèle DIR/Floortime, Early Start Denver Model.
                            </p>
                          </div>
                          
                          <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Approche comportementale</h3>
                            <p className="text-sm text-muted-foreground">
                              Structuration de l'apprentissage par renforcement des comportements adaptés. Exemples : ABA, TEACCH, méthodes de gestion comportementale pour TDAH.
                            </p>
                          </div>
                          
                          <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Approche affirmative</h3>
                            <p className="text-sm text-muted-foreground">
                              Acceptation et valorisation de l'identité neurodivergente, création d'environnements adaptés. Développée par et pour les personnes neurodivergentes.
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Débats contemporains</h3>
                          <div className="bg-muted p-4 rounded-lg">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium">Accommodation vs Normalisation</h4>
                                <p className="text-sm text-muted-foreground">
                                  Tension entre les efforts pour modifier l'environnement et les approches visant à rendre la personne "plus normative". Question fondamentale : faut-il adapter la société ou adapter l'individu?
                                </p>
                              </div>
                              
                              <div>
                                <h4 className="font-medium">Langage et étiquettes</h4>
                                <p className="text-sm text-muted-foreground">
                                  Débats sur la terminologie préférée : langage basé sur l'identité ("personne autiste") vs langage centré sur la personne ("personne avec autisme"). Les préférences varient selon les communautés et les individus.
                                </p>
                              </div>
                              
                              <div>
                                <h4 className="font-medium">Neurodiversité et médicalisation</h4>
                                <p className="text-sm text-muted-foreground">
                                  Comment réconcilier la perspective identitaire de la neurodiversité avec les besoins de diagnostic, de soutien médical et d'accès aux services?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div ref={ressourcesRef} className="bg-muted py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Pour aller plus loin</h2>
                <p className="text-muted-foreground">
                  Ressources recommandées pour approfondir votre compréhension de la neurodiversité
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookMarked className="h-5 w-5 text-neuro-purple" />
                      <span>Lectures essentielles</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="border-b pb-2">
                        <p className="font-medium">NeuroTribes (Steve Silberman)</p>
                        <p className="text-sm text-muted-foreground">Histoire de l'autisme et du mouvement pour la neurodiversité</p>
                      </li>
                      <li className="border-b pb-2">
                        <p className="font-medium">Divergent Mind (Jenara Nerenberg)</p>
                        <p className="text-sm text-muted-foreground">Exploration des cerveaux féminins neurodivergents</p>
                      </li>
                      <li className="border-b pb-2">
                        <p className="font-medium">La différence invisible (Julie Dachez)</p>
                        <p className="text-sm text-muted-foreground">BD autobiographique sur le syndrome d'Asperger</p>
                      </li>
                      <li>
                        <p className="font-medium">L'Autisme au Féminin (Rudy Simone)</p>
                        <p className="text-sm text-muted-foreground">Guide pour comprendre l'autisme chez les femmes</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileVideo className="h-5 w-5 text-neuro-purple" />
                      <span>Vidéos et documentaires</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="border-b pb-2">
                        <p className="font-medium">
                          <a href="https://www.youtube.com/@ludosens8098" target="_blank" rel="noopener noreferrer">
                            Ludosens
                          </a>
                        </p>
                        <p className="text-sm text-muted-foreground">L'institut de la neurodiversité</p>
                      </li>
                      <li className="border-b pb-2">
                        <p className="font-medium">The Reason I Jump</p>
                        <p className="text-sm text-muted-foreground">Documentaire basé sur le livre de Naoki Higashida</p>
                      </li>
                      <li className="border-b pb-2">
                        <p className="font-medium">Attention à la déficit (Arte)</p>
                        <p className="text-sm text-muted-foreground">Documentaire sur le TDAH adulte</p>
                      </li>
                      <li className="border-b pb-2">
                        <p className="font-medium">Autism: The Musical</p>
                        <p className="text-sm text-muted-foreground">La créativité et l'expression chez les enfants autistes</p>
                      </li>
                      <li>
                        <p className="font-medium">Chaîne YesouiCAN</p>
                        <p className="text-sm text-muted-foreground">Chaîne YouTube sur l'autisme au féminin</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GlobeIcon className="h-5 w-5 text-neuro-purple" />
                      <span>Ressources en ligne</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="border-b pb-2">
                        <p className="font-medium">Revue Neurodiversité</p>
                        <p className="text-sm text-muted-foreground">Publication dédiée à la neurodiversité</p>
                        <a href="https://revue-neurodiversite.org" className="text-sm text-neuro-purple hover:underline inline-flex items-center gap-1">
                          Visiter <ExternalLinkIcon className="h-3 w-3" />
                        </a>
                      </li>
                      <li className="border-b pb-2">
                        <p className="font-medium">INSERM - Dossier Troubles Neurodéveloppementaux</p>
                        <p className="text-sm text-muted-foreground">Ressource scientifique complète</p>
                        <a href="https://www.inserm.fr/dossier/troubles-neuro-developpementaux/" className="text-sm text-neuro-purple hover:underline inline-flex items-center gap-1">
                          Visiter <ExternalLinkIcon className="h-3 w-3" />
                        </a>
                      </li>
                      <li>
                        <p className="font-medium">Zèbres & Cie</p>
                        <p className="text-sm text-muted-foreground">Magazine dédié à la neurodiversité</p>
                        <a href="https://zebre-et-compagnie.fr" className="text-sm text-neuro-purple hover:underline inline-flex items-center gap-1">
                          Visiter <ExternalLinkIcon className="h-3 w-3" />
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            <div className="text-center mt-8">
              <Button asChild>
                <Link to="/ressources">Toutes nos ressources</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>    </div>
  );
};

export default Comprendre;
