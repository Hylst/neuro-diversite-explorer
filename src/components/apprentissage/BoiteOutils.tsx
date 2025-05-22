import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Focus, Brain, Clock, Sparkles, Lightbulb, BookOpen, Layers } from 'lucide-react';

// Import du composant modulaire Memorisation
import Memorisation from './Memorisation';

const BoiteOutils = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex md:gap-8 px-4">
      {/* Main content column */}
      <div className="md:w-4/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="neuro-gradient-text">Module 2:</span> Boîte à outils d'apprentissage
        </h2>
        
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          Techniques et stratégies pratiques pour optimiser l'apprentissage des personnes neurodivergentes
        </p>

        <Tabs defaultValue="concentration" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="concentration" className="flex items-center gap-2">
              <Focus className="h-4 w-4" />
              Concentration
            </TabsTrigger>
            <TabsTrigger value="memorisation" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Mémorisation
            </TabsTrigger>
            <TabsTrigger value="organisation" className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Organisation
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="concentration">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Techniques pour améliorer la concentration</h3>
                
                <p className="mb-4">
                  Pour un cerveau neurodivergent, la concentration peut ressembler à essayer de suivre une conversation 
                  dans une salle bondée avec plusieurs télévisions allumées. Voici des techniques pour créer votre 
                  "bulle de concentration" personnalisée.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Techniques de gestion du temps</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Technique Pomodoro adaptée</span> : Sessions de 15-25 minutes 
                        (au lieu des 25-30 traditionnelles) avec pauses plus fréquentes
                      </li>
                      <li>
                        <span className="font-medium">Méthode des blocs d'énergie</span> : Planifier les tâches 
                        en fonction de vos pics d'énergie naturels dans la journée
                      </li>
                      <li>
                        <span className="font-medium">Technique du "juste une chose"</span> : Se concentrer sur une 
                        seule tâche à la fois, en éliminant toutes les autres distractions
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Outils et supports</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Bruit blanc ou musique adaptée</span> : Applications comme 
                        Brain.fm, Noisli ou playlists lo-fi sans paroles
                      </li>
                      <li>
                        <span className="font-medium">Objets de stimulation sensorielle</span> : Fidget toys, 
                        balles anti-stress, tangle toys pour canaliser l'énergie
                      </li>
                      <li>
                        <span className="font-medium">Applications de blocage</span> : Forest, Freedom ou Cold Turkey 
                        pour bloquer les distractions numériques
                      </li>
                      <li>
                        <span className="font-medium">Casques anti-bruit</span> : Pour créer une bulle sonore 
                        protectrice dans les environnements bruyants
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-neuro-purple" />
                    Astuce spéciale : L'hyperfocalisation comme alliée
                  </h4>
                  <p>
                    L'hyperfocalisation, souvent présente chez les personnes neurodivergentes, peut devenir un 
                    super-pouvoir lorsqu'elle est bien canalisée. Essayez de :
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Créer un "rituel de démarrage" qui signale à votre cerveau qu'il est temps d'entrer en mode hyperfocus</li>
                    <li>Utiliser des minuteurs visuels pour rester conscient du temps qui passe</li>
                    <li>Préparer à l'avance tout ce dont vous aurez besoin pour éviter les interruptions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="memorisation">
            {/* Intégration du composant modulaire Memorisation */}
            <Memorisation />
          </TabsContent>
          
          <TabsContent value="organisation">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Systèmes d'organisation adaptés</h3>
                
                <p className="mb-4">
                  L'organisation peut être un défi particulier pour les cerveaux neurodivergents. La clé n'est pas 
                  d'adopter des systèmes conventionnels, mais de créer des méthodes qui fonctionnent avec votre 
                  façon unique de penser et de traiter l'information.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Gestion du temps
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Utiliser des planificateurs visuels avec codes couleurs</li>
                      <li>Prévoir des "tampons" entre les activités (temps de transition)</li>
                      <li>Estimer les durées x 1,5 pour compenser la distorsion temporelle</li>
                      <li>Créer des routines flexibles plutôt que des horaires rigides</li>
                      <li>Utiliser des minuteurs visuels (Time Timer, applications à sablier)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple flex items-center gap-2">
                      <BookOpen className="h-4 w-4" /> Organisation des études
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Décomposer les grands projets en micro-tâches très spécifiques</li>
                      <li>Utiliser des systèmes de classement visuels (couleurs, icônes)</li>
                      <li>Créer des "stations de travail" dédiées à des activités spécifiques</li>
                      <li>Mettre en place des rappels multiples et redondants</li>
                      <li>Utiliser la méthode "mise en scène" (préparer tout le matériel la veille)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" /> Gestion des idées
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Maintenir un système de capture d'idées toujours accessible</li>
                      <li>Utiliser des applications de notes vocales pour les idées en déplacement</li>
                      <li>Créer un "jardin d'idées" numérique ou physique</li>
                      <li>Pratiquer la technique des "connexions forcées" entre concepts</li>
                      <li>Réserver des moments dédiés à l'exploration libre des idées</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2">Outils d'organisation recommandés</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Applications numériques</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Notion (système tout-en-un hautement personnalisable)</li>
                        <li>Trello (organisation visuelle par tableaux et cartes)</li>
                        <li>Todoist (listes de tâches avec rappels intelligents)</li>
                        <li>Microsoft OneNote / Google Keep (capture rapide d'idées)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Outils physiques</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Bullet Journal adapté (système flexible et personnalisable)</li>
                        <li>Tableaux blancs magnétiques (visualisation et réorganisation facile)</li>
                        <li>Notes adhésives repositionnables (idées mobiles et visuelles)</li>
                        <li>Classeurs à intercalaires colorés (organisation par thèmes)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg mt-6">
                  <p className="italic text-sm">
                    <Lightbulb className="h-4 w-4 inline mr-2" />
                    Astuce : N'essayez pas d'adopter un système d'organisation complet d'un coup. Commencez par 
                    une seule technique qui répond à votre besoin le plus urgent, puis ajoutez progressivement 
                    d'autres éléments. La cohérence est plus importante que la perfection !
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </motion.div>
      </div>
      
      {/* Sidebar column */}
      <aside className="md:w-1/5 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-neuro-purple">Boîte à outils</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Encart Outils numériques */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Outils numériques</h3>
                  <p className="text-sm text-muted-foreground">Applications et logiciels adaptés pour faciliter l'apprentissage des personnes neurodivergentes.</p>
                </div>
                
                {/* Encart Aménagements */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Aménagements</h3>
                  <p className="text-sm text-muted-foreground">Adaptations pratiques pour créer un environnement d'apprentissage optimal et inclusif.</p>
                </div>
                
                {/* Encart Ressources */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Ressources</h3>
                  <p className="text-sm text-muted-foreground">Livres, sites web et communautés pour approfondir vos connaissances sur la neurodiversité.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </aside>
    </div>
  );
};

export default BoiteOutils;