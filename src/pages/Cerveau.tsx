import React, { Suspense, lazy, useRef } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Activity, 
  Zap, 
  BookOpen, 
  ExternalLink, 
  Microscope, 
  FlaskConical, 
  Network,
  HeartPulse,
  Dna,
  Share2
} from 'lucide-react';
import LoadingSpinner from '@/components/ui/loading-spinner';

// Lazy loaded components
const BrainExplorer = lazy(() => import('@/components/brain/BrainExplorer'));
const BrainStructures = lazy(() => import('@/components/brain/BrainStructures'));
const BrainFunctions = lazy(() => import('@/components/brain/BrainFunctions'));
const BrainDevelopment = lazy(() => import('@/components/brain/BrainDevelopment'));
const InteractiveNeuron = lazy(() => import('@/components/brain/InteractiveNeuron'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full flex justify-center py-12">
    <LoadingSpinner text="Chargement du contenu..." />
  </div>
);

const Cerveau = () => {
  // Références pour les sections
  const brainExplorerRef = useRef<HTMLElement>(null);
  const brainTabsRef = useRef<HTMLElement>(null);
  const neurotransmittersRef = useRef<HTMLElement>(null);
  
  // Fonction de défilement fluide
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Le <span className="text-neuro-purple">Cerveau</span> Humain
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Explorez l'organe le plus complexe du corps humain à travers une expérience interactive et éducative
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-neuro-purple hover:bg-neuro-purple/90"
                    onClick={() => scrollToSection(brainExplorerRef)}
                  >
                    Explorer en 3D <Brain className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => scrollToSection(brainTabsRef)}
                  >
                    En savoir plus <BookOpen className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Brain Explorer with Suspense */}
        <section ref={brainExplorerRef} className="py-16 bg-background">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Explorez le Cerveau en Détail</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Utilisez notre explorateur interactif pour découvrir les différentes structures cérébrales, leurs fonctions et la manière dont elles interagissent.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <Suspense fallback={<SectionLoader />}>
                <BrainExplorer />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Neuronal Structure with Suspense */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Structure Neuronale</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Les neurones sont les cellules fondamentales du système nerveux. Découvrez leur anatomie et leur fonctionnement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Suspense fallback={<SectionLoader />}>
                  <InteractiveNeuron />
                </Suspense>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Fonctionnement d'un Neurone</h3>
                <p>
                  Les neurones communiquent entre eux grâce à des signaux électriques et chimiques. Un neurone reçoit l'information par ses dendrites, l'intègre dans le corps cellulaire, puis la transmet le long de son axone jusqu'aux synapses.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-neuro-purple/10 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-neuro-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Potentiel d'Action</h4>
                      <p className="text-sm text-muted-foreground">Signal électrique qui se propage le long de l'axone lorsque le seuil d'excitation est atteint.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-neuro-purple/10 p-2 rounded-full">
                      <Share2 className="h-5 w-5 text-neuro-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Transmission Synaptique</h4>
                      <p className="text-sm text-muted-foreground">Processus par lequel les neurotransmetteurs sont libérés dans la fente synaptique pour communiquer avec d'autres neurones.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-neuro-purple/10 p-2 rounded-full">
                      <Network className="h-5 w-5 text-neuro-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Plasticité Synaptique</h4>
                      <p className="text-sm text-muted-foreground">Capacité des synapses à se renforcer ou s'affaiblir en fonction de l'activité, base de l'apprentissage et de la mémoire.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neurotransmitters Section */}
        <section ref={neurotransmittersRef} className="py-16 bg-background">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Neurotransmetteurs</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Les messagers chimiques du cerveau qui jouent un rôle crucial dans la transmission de l'information neuronale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <HeartPulse className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>Sérotonine</CardTitle>
                  <CardDescription>Le régulateur de l'humeur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Impliquée dans la régulation de l'humeur, du sommeil, de l'appétit et de la perception de la douleur. Un déséquilibre peut contribuer à la dépression et l'anxiété.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Troubles associés:</span>
                    <span>Dépression, Anxiété, TOC</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <Zap className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle>Dopamine</CardTitle>
                  <CardDescription>Le messager du plaisir et de la récompense</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Essentielle dans les circuits de récompense, la motivation, la mémoire et l'attention. Son dysfonctionnement est lié à plusieurs troubles neurologiques.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Troubles associés:</span>
                    <span>Parkinson, TDAH, Addiction</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <FlaskConical className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle>GABA</CardTitle>
                  <CardDescription>L'inhibiteur principal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Principal neurotransmetteur inhibiteur du cerveau, il réduit l'excitabilité neuronale. Il joue un rôle important dans la réduction de l'anxiété et la détente.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Troubles associés:</span>
                    <span>Anxiété, Épilepsie, Insomnie</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <Activity className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle>Noradrénaline</CardTitle>
                  <CardDescription>Le neurotransmetteur de l'éveil</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Joue un rôle clé dans l'attention, la vigilance et la réponse au stress. Impliquée dans la régulation du cycle veille-sommeil et la réactivité émotionnelle.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Troubles associés:</span>
                    <span>TDAH, Dépression, Stress post-traumatique</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                    <Microscope className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle>Acétylcholine</CardTitle>
                  <CardDescription>Le messager de la mémoire</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Essentielle pour la mémoire, l'apprentissage et le contrôle musculaire. Premier neurotransmetteur découvert, elle est cruciale pour les fonctions cognitives.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Troubles associés:</span>
                    <span>Alzheimer, Myasthénie, Parkinson</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <Dna className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle>Glutamate</CardTitle>
                  <CardDescription>L'excitateur principal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Principal neurotransmetteur excitateur du cerveau, essentiel pour l'apprentissage et la mémoire. Son excès peut être neurotoxique et contribuer à diverses pathologies.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Troubles associés:</span>
                    <span>Épilepsie, AVC, Sclérose latérale</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-3">
                    <HeartPulse className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle>Endorphines</CardTitle>
                  <CardDescription>Les analgésiques naturels</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Produites par l'organisme en réponse à la douleur ou au stress, elles procurent une sensation de bien-être et réduisent la perception de la douleur. Elles sont impliquées dans la réponse au plaisir et l'euphorie.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Effets:</span>
                    <span>Analgésie, Euphorie, Réduction du stress</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-3">
                    <Zap className="h-6 w-6 text-teal-500" />
                  </div>
                  <CardTitle>Histamine</CardTitle>
                  <CardDescription>Le régulateur de l'éveil</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Au-delà de son rôle dans les réactions allergiques, l'histamine agit comme neurotransmetteur impliqué dans la régulation du cycle veille-sommeil, l'appétit et la vigilance. Elle joue un rôle clé dans le maintien de l'éveil.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Fonctions:</span>
                    <span>Éveil, Attention, Réponse immunitaire</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                    <Network className="h-6 w-6 text-indigo-500" />
                  </div>
                  <CardTitle>Mélatonine</CardTitle>
                  <CardDescription>L'hormone du sommeil</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Bien que principalement considérée comme une hormone, la mélatonine agit également comme neurotransmetteur. Elle régule le cycle circadien et favorise l'endormissement. Sa production est inhibée par la lumière et stimulée par l'obscurité.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Fonctions:</span>
                    <span>Régulation du sommeil, Antioxydant, Immunité</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                    <Brain className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle>Ocytocine</CardTitle>
                  <CardDescription>L'hormone de l'attachement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    À la fois hormone et neurotransmetteur, l'ocytocine joue un rôle crucial dans les comportements sociaux, l'attachement et la confiance. Elle est impliquée dans la formation des liens affectifs, l'empathie et la réduction du stress social.
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Fonctions:</span>
                    <span>Attachement, Confiance, Réduction de l'anxiété</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tabbed Content with Suspense */}
        <section ref={brainTabsRef} className="py-16 bg-muted">
          <div className="container">
            <Tabs defaultValue="structures" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-3xl grid-cols-3">
                  <TabsTrigger value="structures">Structures</TabsTrigger>
                  <TabsTrigger value="functions">Fonctions</TabsTrigger>
                  <TabsTrigger value="development">Développement</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="structures">
                <Suspense fallback={<SectionLoader />}>
                  <BrainStructures />
                </Suspense>
              </TabsContent>
              
              <TabsContent value="functions">
                <Suspense fallback={<SectionLoader />}>
                  <BrainFunctions />
                </Suspense>
              </TabsContent>
              
              <TabsContent value="development">
                <Suspense fallback={<SectionLoader />}>
                  <BrainDevelopment />
                </Suspense>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Neuroplasticity Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold">Neuroplasticité</h2>
                <p className="text-lg">
                  La neuroplasticité est la capacité du cerveau à se réorganiser en formant de nouvelles connexions neuronales tout au long de la vie.
                </p>
                <p>
                  Cette propriété remarquable permet au cerveau de s'adapter aux changements, d'apprendre de nouvelles compétences et de récupérer après des lésions. La neuroplasticité est à la base de tous nos apprentissages et de notre capacité d'adaptation.
                </p>
                <div className="pt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-neuro-purple/10 p-2 rounded-full">
                      <Brain className="h-5 w-5 text-neuro-purple" />
                    </div>
                    <div className="font-medium">Apprentissage et mémoire</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-neuro-purple/10 p-2 rounded-full">
                      <Activity className="h-5 w-5 text-neuro-purple" />
                    </div>
                    <div className="font-medium">Récupération après traumatisme</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-neuro-purple/10 p-2 rounded-full">
                      <Dna className="h-5 w-5 text-neuro-purple" />
                    </div>
                    <div className="font-medium">Adaptation aux changements environnementaux</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-muted rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <g key={i}>
                          <circle 
                            cx={Math.random() * 100} 
                            cy={Math.random() * 100} 
                            r={Math.random() * 3 + 1}
                            fill="#8B5CF6"
                          />
                          <line 
                            x1={Math.random() * 100}
                            y1={Math.random() * 100}
                            x2={Math.random() * 100}
                            y2={Math.random() * 100}
                            stroke="#8B5CF6"
                            strokeWidth="0.5"
                            strokeOpacity="0.3"
                          />
                        </g>
                      ))}
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Stimuler la neuroplasticité</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-4 min-h-4 rounded-full bg-neuro-purple"></div>
                        <span>Apprentissage continu et résolution de problèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-4 min-h-4 rounded-full bg-neuro-purple"></div>
                        <span>Exercice physique régulier</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-4 min-h-4 rounded-full bg-neuro-purple"></div>
                        <span>Méditation et techniques de pleine conscience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-4 min-h-4 rounded-full bg-neuro-purple"></div>
                        <span>Sommeil de qualité et nutrition équilibrée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-4 min-h-4 rounded-full bg-neuro-purple"></div>
                        <span>Interactions sociales enrichissantes</span>
                      </li>
                    </ul>
                    <Button 
                      className="mt-6 bg-neuro-purple hover:bg-neuro-purple/90"
                      onClick={() => scrollToSection(neurotransmittersRef)}
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facts & Statistics */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Le Cerveau en Chiffres</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-secondary border-none">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-neuro-purple/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <Brain className="h-8 w-8 text-neuro-purple" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">86</h3>
                    <p className="text-muted-foreground">Milliards de neurones</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary border-none">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-neuro-purple/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <Activity className="h-8 w-8 text-neuro-purple" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">100 000</h3>
                    <p className="text-muted-foreground">Km de connexions</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary border-none">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-neuro-purple/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <Zap className="h-8 w-8 text-neuro-purple" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">20%</h3>
                    <p className="text-muted-foreground">De l'énergie corporelle</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary border-none">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-neuro-purple/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-neuro-purple" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">2,5</h3>
                    <p className="text-muted-foreground">Millions d'octets d'informations</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources & References */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Ressources et Références</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Articles Scientifiques</CardTitle>
                  <CardDescription>Publications académiques récentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        Neuroscience moderne et cartographie cérébrale
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        Plasticité cérébrale et réadaptation
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        Connectome humain: état de la recherche
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Vidéos Éducatives</CardTitle>
                  <CardDescription>Ressources audiovisuelles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        Le cerveau expliqué - Série documentaire
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        Visualisation 3D des circuits neuronaux
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        Neuromythes et réalités scientifiques
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Livres Recommandés</CardTitle>
                  <CardDescription>Ouvrages de référence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        L'erreur de Descartes - A. Damasio
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        Le cerveau et ses automatismes - D. Kahneman
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-neuro-purple hover:underline">
                        Neuroanatomie fonctionnelle - J.F. Mangin
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>    </div>
  );
};

export default Cerveau;
