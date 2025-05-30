import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Users, Lightbulb, Heart } from 'lucide-react';
import GlossaryTerm from '@/components/ui/glossary-term';
import glossaryTerms from '@/data/glossary-terms';

const FondationsApprentissage = () => {
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
          <span className="neuro-gradient-text">Fondations:</span> Fondations de l'apprentissage
        </h2>
        
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          Comprendre comment fonctionne l'apprentissage chez les personnes <GlossaryTerm {...glossaryTerms.neurodivergent}>neurodivergentes</GlossaryTerm>
        </p>

        <Tabs defaultValue="cerveau" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="cerveau" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Cerveau & Apprentissage
            </TabsTrigger>
            <TabsTrigger value="styles" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Styles d'apprentissage
            </TabsTrigger>
            <TabsTrigger value="environnement" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Environnement adapté
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="cerveau">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Comment notre cerveau apprend-il ?</h3>
                
                <p className="mb-4">
                  Imaginez votre cerveau comme un réseau social ultra-sophistiqué où des milliards de neurones font la fête et échangent des informations. 
                  Chez les personnes <GlossaryTerm {...glossaryTerms.neurodivergent}>neurodivergentes</GlossaryTerm>, certains chemins de communication sont des autoroutes tandis que d'autres ressemblent plus à des 
                  sentiers forestiers pleins de surprises !
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Particularités d'apprentissage</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Traitement de l'information parfois plus lent mais souvent plus profond</li>
                      <li><GlossaryTerm {...glossaryTerms.hyperfocalisation}>Hyperfocalisation</GlossaryTerm> sur des sujets d'intérêt (un vrai super-pouvoir !)</li>
                      <li><GlossaryTerm {...glossaryTerms.penseeAssociative}>Pensée associative et non-linéaire</GlossaryTerm> (parfait pour les connexions créatives)</li>
                      <li>Sensibilité accrue aux stimuli environnementaux</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Forces cognitives fréquentes</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><GlossaryTerm {...glossaryTerms.penseeVisuelle}>Pensée visuelle et spatiale</GlossaryTerm> exceptionnelle</li>
                      <li>Mémoire détaillée dans les domaines d'intérêt</li>
                      <li>Capacité à repérer des patterns invisibles pour les autres</li>
                      <li>Créativité et résolution de problèmes hors des sentiers battus</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="styles">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Les différents styles d'apprentissage</h3>
                
                <p className="mb-4">
                  Si les cerveaux étaient des instruments de musique, certains seraient des pianos, d'autres des batteries, 
                  et d'autres encore des <GlossaryTerm {...glossaryTerms.theremin}>théremins</GlossaryTerm> ! Chacun produit une belle mélodie, mais de façon très différente.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-green-500">●</span> <GlossaryTerm {...glossaryTerms.apprentissageVisuel}>Apprentissage visuel</GlossaryTerm>
                    </h4>
                    <p>"Montre-moi et je comprendrai"</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li><GlossaryTerm {...glossaryTerms.cartesMentales}>Cartes mentales</GlossaryTerm> et schémas</li>
                      <li>Codes couleurs et surligneurs</li>
                      <li>Vidéos et démonstrations</li>
                    </ul>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-blue-500">●</span> <GlossaryTerm {...glossaryTerms.apprentissageAuditif}>Apprentissage auditif</GlossaryTerm>
                    </h4>
                    <p>"Explique-moi et je saisirai"</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Discussions et débats</li>
                      <li>Podcasts et audiolivres</li>
                      <li>Répétition à voix haute</li>
                    </ul>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-red-500">●</span> <GlossaryTerm {...glossaryTerms.apprentissageKinesthesique}>Apprentissage kinesthésique</GlossaryTerm>
                    </h4>
                    <p>"Laisse-moi essayer et je maîtriserai"</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Manipulation d'objets</li>
                      <li>Jeux de rôle et simulations</li>
                      <li>Expériences pratiques</li>
                    </ul>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-500">●</span> Apprentissage par lecture/écriture
                    </h4>
                    <p>"Donne-moi des mots et je comprendrai"</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Prise de notes détaillées</li>
                      <li>Résumés et fiches</li>
                      <li>Recherches approfondies</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg mt-6">
                  <p className="italic text-sm">
                    <Lightbulb className="h-4 w-4 inline mr-2" />
                    Astuce : La plupart des personnes neurodivergentes combinent plusieurs styles d'apprentissage, 
                    avec souvent une préférence marquée pour le visuel ou le kinesthésique. L'idéal est d'explorer 
                    différentes approches pour trouver celle qui vous convient le mieux !
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="environnement">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Créer un environnement d'apprentissage adapté</h3>
                
                <p className="mb-4">
                  Si le cerveau neurodivergent était un smartphone, l'environnement d'apprentissage serait son chargeur. 
                  Avec le bon chargeur, la batterie se remplit rapidement. Avec un chargeur inadapté... eh bien, 
                  nous connaissons tous cette frustration !
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Espace physique</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Réduction des distractions sensorielles</li>
                      <li>Éclairage adapté (éviter les néons clignotants)</li>
                      <li>Possibilité de mouvement (balles anti-stress, chaises pivotantes)</li>
                      <li>Zones de calme pour les pauses</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Structure temporelle</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Routines prévisibles mais flexibles</li>
                      <li>Séquençage clair des activités</li>
                      <li>Temps alloué pour les transitions</li>
                      <li>Alternance entre concentration et pauses</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Climat émotionnel</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Valorisation des différences cognitives</li>
                      <li>Tolérance aux comportements d'<GlossaryTerm {...glossaryTerms.autorégulation}>autorégulation</GlossaryTerm></li>
                      <li>Communication claire et directe</li>
                      <li>Célébration des progrès, même minimes</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-neuro-purple pl-4 mt-6">
                  <p className="italic">
                    "L'environnement idéal n'est pas celui qui supprime tous les défis, mais celui qui donne 
                    les outils pour les surmonter et qui transforme les différences en atouts."
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>


        </Tabs>
      </motion.div>
    </div> {/* Closes md:w-2/3 */}

    {/* Sidebar column */}
    <aside className="md:w-1/5 mt-8 md:mt-0">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="sticky top-24"> {/* Adjust top-X based on actual navbar height */}
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-neuro-purple">Fondations de l'apprentissage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">              {/* Encart Cerveau */}
              <div className="bg-muted/30 p-4 rounded-lg space-y-4">
                <h3 className="font-semibold text-neuro-purple flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Cerveau
                </h3>
                <div>
                  <h4 className="font-semibold mb-1">Astuce Rapide</h4>
                  <p className="text-sm text-muted-foreground">Utilisez des analogies visuelles pour expliquer des concepts complexes aux personnes neurodivergentes.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Le Saviez-vous ?</h4>
                  <p className="text-sm text-muted-foreground">Le cerveau neurodivergent peut traiter jusqu'à 40% plus d'informations sensorielles que le cerveau neurotypique.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ressources Utiles</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><a href="https://www.understood.org/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Understood.org - Comprendre les différences d'apprentissage</a></li>
                    <li><a href="https://www.neurodiversitehub.org/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Neurodiversité Hub - Ressources éducatives</a></li>
                  </ul>
                </div>
              </div>
              
              {/* Encart Styles */}
              <div className="bg-muted/30 p-4 rounded-lg space-y-4">
                <h3 className="font-semibold text-neuro-purple flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Styles
                </h3>
                <div>
                  <h4 className="font-semibold mb-1">Astuce Rapide</h4>
                  <p className="text-sm text-muted-foreground">Proposez toujours plusieurs formats d'apprentissage pour le même contenu (texte, audio, visuel, pratique).</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Le Saviez-vous ?</h4>
                  <p className="text-sm text-muted-foreground">65% des personnes sont des apprenants visuels, mais ce pourcentage est encore plus élevé chez les personnes neurodivergentes.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ressources Utiles</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><a href="https://www.vark-learn.com/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">VARK - Questionnaire des styles d'apprentissage</a></li>
                    <li><a href="https://www.mindmeister.com/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">MindMeister - Outil de cartes mentales</a></li>
                  </ul>
                </div>
              </div>
              
              {/* Encart Environnement */}
              <div className="bg-muted/30 p-4 rounded-lg space-y-4">
                <h3 className="font-semibold text-neuro-purple flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Environnement
                </h3>
                <div>
                  <h4 className="font-semibold mb-1">Astuce Rapide</h4>
                  <p className="text-sm text-muted-foreground">Créez un coin "refuge sensoriel" avec des options de stimulation ou d'apaisement selon les besoins.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Le Saviez-vous ?</h4>
                  <p className="text-sm text-muted-foreground">Un environnement adapté peut améliorer les performances cognitives de 30% chez les personnes neurodivergentes.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ressources Utiles</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><a href="https://www.sensorysmart.org/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Sensory Smart - Aménagements sensoriels</a></li>
                    <li><a href="https://www.autismclassroomresources.com/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Autism Classroom Resources - Environnements d'apprentissage</a></li>
                  </ul>
                </div>
              </div>
            
            <div className="mt-6 border-t pt-4">
              <h4 className="font-semibold mb-3">Points clés des fondations</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Brain className="h-4 w-4 text-neuro-purple mt-1 mr-2" />
                  <span className="text-sm">Le cerveau neurodivergent traite l'information différemment, créant des forces uniques</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-4 w-4 text-neuro-purple mt-1 mr-2" />
                  <span className="text-sm">Adapter les méthodes d'apprentissage aux styles cognitifs individuels</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-4 w-4 text-neuro-purple mt-1 mr-2" />
                  <span className="text-sm">L'environnement joue un rôle crucial dans le succès d'apprentissage</span>
                </li>
              </ul>
            </div>
          </div>
          </CardContent>
        </Card>
      </motion.div>

    </aside>
  </div> /* Closes max-w-7xl flex container */
);
};

export default FondationsApprentissage;