import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Focus, Brain, Clock, Sparkles, Lightbulb, BookOpen, Layers } from 'lucide-react';

const BoiteOutils = () => {
  return (
    <div className="max-w-4xl mx-auto">
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
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Stratégies de mémorisation efficaces</h3>
                
                <p className="mb-4">
                  La mémoire neurodivergente fonctionne souvent comme une bibliothèque avec un système de classement 
                  unique : certaines informations sont archivées avec une précision extraordinaire, tandis que d'autres 
                  semblent s'évaporer mystérieusement. Voici comment optimiser votre système de mémorisation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-green-500">●</span> Techniques visuelles
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Cartes mentales</span> : Organisez visuellement les informations 
                        en créant des connexions entre les concepts
                      </li>
                      <li>
                        <span className="font-medium">Palais de mémoire</span> : Associez des informations à des lieux 
                        familiers dans votre esprit
                      </li>
                      <li>
                        <span className="font-medium">Sketchnoting</span> : Prenez des notes visuelles combinant texte, 
                        images et structure
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-blue-500">●</span> Techniques multimodales
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Méthode des associations absurdes</span> : Plus l'association est 
                        bizarre ou drôle, plus elle sera mémorable
                      </li>
                      <li>
                        <span className="font-medium">Technique d'enseignement</span> : Expliquez le concept à quelqu'un 
                        d'autre (ou à un objet inanimé !)
                      </li>
                      <li>
                        <span className="font-medium">Apprentissage par le mouvement</span> : Marchez ou faites des gestes 
                        spécifiques en révisant
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2 text-neuro-purple">Applications et outils numériques</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-medium">Répétition espacée</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Anki</li>
                        <li>Quizlet</li>
                        <li>RemNote</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Organisation visuelle</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>MindMeister</li>
                        <li>Miro</li>
                        <li>Notion</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Aide-mémoire</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Evernote</li>
                        <li>Google Keep</li>
                        <li>Microsoft OneNote</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-neuro-purple pl-4 mt-6">
                  <p className="italic">
                    "La mémoire neurodivergente n'est pas déficiente, elle est différente. Trouvez les techniques 
                    qui correspondent à votre façon unique de traiter l'information, et vous découvrirez des capacités 
                    de mémorisation que vous ne soupçonniez pas."
                  </p>
                </div>
              </CardContent>
            </Card>
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
  );
};

export default BoiteOutils;