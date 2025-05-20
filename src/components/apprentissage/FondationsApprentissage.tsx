import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Users, Lightbulb, Heart } from 'lucide-react';

const FondationsApprentissage = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex md:gap-8 px-4">
      {/* Main content column */}
      <div className="md:w-2/3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="neuro-gradient-text">Module 1:</span> Fondations de l'apprentissage
        </h2>
        
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          Comprendre comment fonctionne l'apprentissage chez les personnes neurodivergentes
        </p>

        <Tabs defaultValue="cerveau" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
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
            <TabsTrigger value="hygiene" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Hygiène de vie
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="cerveau">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Comment notre cerveau apprend-il ?</h3>
                
                <p className="mb-4">
                  Imaginez votre cerveau comme un réseau social ultra-sophistiqué où des milliards de neurones font la fête et échangent des informations. 
                  Chez les personnes neurodivergentes, certains chemins de communication sont des autoroutes tandis que d'autres ressemblent plus à des 
                  sentiers forestiers pleins de surprises !
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Particularités d'apprentissage</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Traitement de l'information parfois plus lent mais souvent plus profond</li>
                      <li>Hyperfocalisation sur des sujets d'intérêt (un vrai super-pouvoir !)</li>
                      <li>Pensée associative et non-linéaire (parfait pour les connexions créatives)</li>
                      <li>Sensibilité accrue aux stimuli environnementaux</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Forces cognitives fréquentes</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Pensée visuelle et spatiale exceptionnelle</li>
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
                  et d'autres encore des théremins ! Chacun produit une belle mélodie, mais de façon très différente.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-green-500">●</span> Apprentissage visuel
                    </h4>
                    <p>"Montre-moi et je comprendrai"</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Cartes mentales et schémas</li>
                      <li>Codes couleurs et surligneurs</li>
                      <li>Vidéos et démonstrations</li>
                    </ul>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-blue-500">●</span> Apprentissage auditif
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
                      <span className="text-red-500">●</span> Apprentissage kinesthésique
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
                      <li>Tolérance aux comportements d'autorégulation</li>
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

          <TabsContent value="hygiene">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Hygiène de vie et Apprentissage</h3>
                <p className="mb-4">
                  Une bonne hygiène de vie est fondamentale pour optimiser les capacités d'apprentissage, particulièrement pour les cerveaux neurodivergents. 
                  Un corps et un esprit sains créent un terrain fertile pour l'acquisition de nouvelles connaissances et compétences.
                </p>
                
                <div className="space-y-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-blue">Sommeil Réparateur</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Routine régulière :</strong> Se coucher et se lever à heures fixes, même le week-end.</li>
                      <li><strong>Environnement propice :</strong> Chambre sombre, calme et fraîche. Éviter les écrans avant le coucher.</li>
                      <li><strong>Gestion de l'hyperactivité mentale :</strong> Techniques de relaxation, méditation ou lecture apaisante avant de dormir.</li>
                      <li><strong>Siestes courtes :</strong> Si besoin, des siestes de 20-30 minutes peuvent aider, mais éviter les longues siestes tardives.</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-green">Alimentation Équilibrée</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Repas réguliers :</strong> Éviter de sauter des repas pour maintenir un niveau d'énergie stable.</li>
                      <li><strong>Nutriments essentiels :</strong> Privilégier les fruits, légumes, protéines maigres et grains entiers.</li>
                      <li><strong>Hydratation :</strong> Boire suffisamment d'eau tout au long de la journée.</li>
                      <li><strong>Sensibilités alimentaires :</strong> Être attentif aux éventuelles sensibilités (gluten, produits laitiers, additifs) qui peuvent impacter la concentration.</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-orange">Exercice Physique Régulier</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Activité plaisante :</strong> Choisir une activité que l'on aime pour favoriser la régularité (marche, vélo, danse, yoga).</li>
                      <li><strong>Bénéfices multiples :</strong> Améliore la concentration, réduit le stress et favorise un meilleur sommeil.</li>
                      <li><strong>Adapté aux besoins :</strong> Pour certains, des activités intenses sont bénéfiques, pour d'autres, des mouvements plus doux sont préférables.</li>
                      <li><strong>Intégration au quotidien :</strong> Marcher pour de courts trajets, prendre les escaliers.</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-red">Gestion du Stress et Bien-être Mental</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Techniques de relaxation :</strong> Respiration profonde, pleine conscience, méditation.</li>
                      <li><strong>Temps pour soi :</strong> Activités relaxantes et plaisantes (hobbies, nature, musique).</li>
                      <li><strong>Expression émotionnelle :</strong> Parler de ses ressentis, tenir un journal.</li>
                      <li><strong>Limiter la surcharge sensorielle :</strong> Prévoir des moments de calme et des environnements apaisants.</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-neuro-purple pl-4 mt-8">
                  <p className="italic">
                    <Lightbulb className="h-4 w-4 inline mr-2" />
                    N'oubliez pas : chaque personne est unique. Expérimentez pour découvrir ce qui fonctionne le mieux pour vous ou pour la personne que vous accompagnez. 
                    Ces recommandations sont des pistes générales à adapter individuellement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div> {/* Closes md:w-2/3 */}

    {/* Sidebar column */}
    <aside className="md:w-1/3 mt-8 md:mt-0">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="sticky top-24"> {/* Adjust top-X based on actual navbar height */}
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-neuro-purple">Encarts Clés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Astuce Rapide</h4>
                <p className="text-sm text-muted-foreground">Pensez à faire des pauses régulières pour mieux assimiler l'information.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Le Saviez-vous ?</h4>
                <p className="text-sm text-muted-foreground">L'apprentissage multisensoriel peut grandement bénéficier aux personnes neurodivergentes.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Ressource Utile</h4>
                <p className="text-sm text-muted-foreground"><a href="#" className="text-neuro-blue hover:underline">Guide des stratégies d'étude</a></p>
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