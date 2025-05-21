import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { School, BookOpen, Calculator, GraduationCap, Lightbulb, Pencil } from 'lucide-react';

const StrategiesMatiere = () => {
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
          <span className="neuro-gradient-text">Module 3:</span> À chaque matière son secret
        </h2>
        
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          Stratégies spécifiques par matière et par niveau, du CP au Bac
        </p>

        <div className="bg-muted p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Les indispensables transversaux</h3>
          
          <p className="mb-4">
            Quelle que soit la matière ou le niveau, certaines stratégies sont essentielles pour tous les élèves neurodivergents.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2 text-neuro-purple">Organisation et présentation</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Tenue des supports</span> : Propre, claire, aérée. "Votre cahier, c'est votre carte de visite intellectuelle."
                </li>
                <li>
                  <span className="font-medium">Présentation soignée</span> : Ça compte pour le prof, mais aussi pour votre propre clarté.
                </li>
                <li>
                  <span className="font-medium">Spécificité Neurodiversité</span> : Outils compensatoires (ordinateur, logiciels), indulgence sur la présentation manuscrite si besoin, valoriser le fond.
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2 text-neuro-purple">Méthodes d'apprentissage actif</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Relecture active</span> : Pas juste parcourir, mais vérifier, corriger, annoter.
                </li>
                <li>
                  <span className="font-medium">Correction des évaluations</span> : L'erreur est une mine d'or pour progresser. Comprendre ses erreurs.
                </li>
                <li>
                  <span className="font-medium">Aller au-delà de la simple lecture</span> : Questionner, relier aux connaissances existantes, chercher des exemples concrets.
                </li>
                <li>
                  <span className="font-medium">Technique de Feynman</span> : Expliquer avec ses propres mots. "Si vous pouvez expliquer un concept à votre petit frère ou à votre grand-mère, c'est que vous avez VRAIMENT compris."
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Tabs defaultValue="elementaire" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="elementaire" className="flex items-center gap-2">
              <School className="h-4 w-4" />
              Élémentaire
            </TabsTrigger>
            <TabsTrigger value="college" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Collège
            </TabsTrigger>
            <TabsTrigger value="lycee" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Lycée
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="elementaire">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">École Élémentaire (CP-CM2) : L'Apprentissage par le Jeu et la Découverte</h3>
                
                <p className="mb-4">
                  À cet âge, l'apprentissage doit rester ludique et concret, particulièrement pour les enfants neurodivergents 
                  qui peuvent avoir besoin de manipuler et d'expérimenter pour comprendre.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Pencil className="h-4 w-4 text-neuro-purple" /> Français
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Lecture plaisir</span> : Proposer des livres sur des sujets qui passionnent l'enfant
                      </li>
                      <li>
                        <span className="font-medium">Jeux de lettres</span> : Utiliser des lettres magnétiques, des jeux de société adaptés
                      </li>
                      <li>
                        <span className="font-medium">Raconter des histoires</span> : Encourager l'enfant à inventer et raconter ses propres histoires
                      </li>
                      <li>
                        <span className="font-medium">Exemple d'activité</span> : Créer un abécédaire illustré personnel avec des mots qui ont du sens pour l'enfant
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calculator className="h-4 w-4 text-neuro-purple" /> Mathématiques
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Manipulations</span> : Utiliser des objets concrets (cubes, jetons) pour comprendre les concepts
                      </li>
                      <li>
                        <span className="font-medium">Jeux de logique</span> : Proposer des énigmes et des puzzles adaptés à l'âge
                      </li>
                      <li>
                        <span className="font-medium">Problèmes concrets</span> : Relier les mathématiques à des situations du quotidien
                      </li>
                      <li>
                        <span className="font-medium">Exemple d'activité</span> : Faire les courses et calculer le rendu de monnaie (fictivement !)
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-neuro-purple pl-4 mt-6">
                  <h4 className="font-semibold mb-2">Conseil aux parents</h4>
                  <p>
                    Encouragez la curiosité, lisez ensemble, jouez ! À cet âge, l'apprentissage doit rester un plaisir. 
                    Valorisez les efforts plus que les résultats et créez un environnement d'apprentissage positif et sans pression excessive.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="college">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Collège (6ème-3ème) : Vers l'Autonomie et la Méthode</h3>
                
                <p className="mb-4">
                  Au collège, l'accent est mis sur le développement de méthodes de travail efficaces et l'acquisition progressive d'autonomie, 
                  tout en tenant compte des spécificités neurodéveloppementales.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Français et Langues</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Fiches de lecture</span> : Créer des fiches synthétiques avec codes couleurs
                      </li>
                      <li>
                        <span className="font-medium">Analyse de textes</span> : Utiliser la méthode QQOQCP (Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?)
                      </li>
                      <li>
                        <span className="font-medium">Langues vivantes</span> : Écouter des chansons, regarder des séries en VOST, utiliser des applications ludiques
                      </li>
                      <li>
                        <span className="font-medium">Exemple d'activité</span> : Transformer un chapitre de roman en BD ou apprendre 5 nouveaux mots par jour et les utiliser dans une phrase
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mathématiques et Sciences</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Comprendre la logique</span> : Se concentrer sur le raisonnement derrière les formules
                      </li>
                      <li>
                        <span className="font-medium">Refaire les exercices types</span> : S'entraîner régulièrement sur des exercices similaires
                      </li>
                      <li>
                        <span className="font-medium">Histoire-Géographie</span> : Créer des frises chronologiques et des cartes mentales
                      </li>
                      <li>
                        <span className="font-medium">Sciences</span> : Réaliser des schémas, faire des expériences simples à la maison (avec supervision)
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2 text-neuro-purple">Conseils spécifiques pour les élèves neurodivergents</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Utiliser un code couleur cohérent pour toutes les matières</li>
                    <li>Prévoir des temps de pause réguliers pendant les devoirs</li>
                    <li>Fractionner les grandes tâches en étapes plus petites et gérables</li>
                    <li>Utiliser des applications de rappel pour les devoirs et les contrôles</li>
                    <li>Demander à l'enseignant des supports de cours adaptés si nécessaire</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-neuro-purple pl-4 mt-6">
                  <h4 className="font-semibold mb-2">Conseil aux parents</h4>
                  <p>
                    Aidez à planifier et à organiser, soyez disponible pour répondre aux questions, mais laissez votre enfant chercher 
                    par lui-même. L'équilibre entre soutien et autonomie est essentiel à cette période.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="lycee">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Lycée (Seconde-Terminale) : Approfondissement et Esprit Critique</h3>
                
                <p className="mb-4">
                  Au lycée, les exigences augmentent et la charge de travail s'intensifie. Les élèves neurodivergents doivent 
                  développer des stratégies plus sophistiquées tout en gérant le stress des examens.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Méthodes de travail avancées</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Prise de notes efficace</span> : Méthode Cornell, abréviations personnalisées, mind mapping
                      </li>
                      <li>
                        <span className="font-medium">Fiches de révision synthétiques</span> : Une page par notion clé, avec schémas et mots-clés
                      </li>
                      <li>
                        <span className="font-medium">Travail en groupe constructif</span> : Organiser des sessions d'étude avec échange de fiches et quiz
                      </li>
                      <li>
                        <span className="font-medium">Entraînement sur annales</span> : S'habituer aux formats d'examen et gérer le temps
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Stratégies par domaine</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Philosophie</span> : Lire, questionner, argumenter, débattre. Organiser un mini-débat sur un sujet d'actualité
                      </li>
                      <li>
                        <span className="font-medium">Matières scientifiques</span> : Rigueur, précision, capacité à modéliser et à résoudre des problèmes complexes
                      </li>
                      <li>
                        <span className="font-medium">Matières littéraires/SES</span> : Développer la capacité d'analyse et de synthèse, enrichir sa culture générale
                      </li>
                      <li>
                        <span className="font-medium">Langues vivantes</span> : Immersion régulière (podcasts, séries, applications d'échange linguistique)
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-neuro-purple" />
                    Spécificités pour les élèves neurodivergents
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Utiliser les points forts (ex: hyperfocus pour les sujets passionnants, pensée en arborescence pour les cartes mentales)</li>
                    <li>Adapter les supports (audio, vidéo, schémas) selon votre profil d'apprentissage</li>
                    <li>Fractionner les révisions en sessions courtes mais fréquentes</li>
                    <li>Demander des aménagements si nécessaire (tiers-temps, consignes claires, utilisation d'ordinateur)</li>
                    <li>Prévoir des stratégies de gestion du stress (techniques de respiration, visualisation positive)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-neuro-purple pl-4 mt-6">
                  <h4 className="font-semibold mb-2">Conseil aux parents</h4>
                  <p>
                    Faites confiance, apportez un soutien moral, aidez à la gestion du stress (examens), et respectez l'autonomie grandissante 
                    de votre adolescent. Votre rôle évolue vers celui d'un coach bienveillant plutôt que d'un superviseur direct.
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
              <CardTitle className="text-xl font-semibold text-neuro-purple">Matières & Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Encart Mathématiques */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Mathématiques</h3>
                  <p className="text-sm text-muted-foreground">Stratégies visuelles et concrètes pour rendre les concepts mathématiques accessibles.</p>
                </div>
                
                {/* Encart Langues */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Langues</h3>
                  <p className="text-sm text-muted-foreground">Approches multisensorielles pour faciliter l'apprentissage de la lecture, l'écriture et les langues étrangères.</p>
                </div>
                
                {/* Encart Sciences */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Sciences</h3>
                  <p className="text-sm text-muted-foreground">Expériences pratiques et projets concrets pour explorer les concepts scientifiques.</p>
                </div>
                
                {/* Encart Arts */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Arts & Créativité</h3>
                  <p className="text-sm text-muted-foreground">Exploiter les talents créatifs souvent présents chez les personnes neurodivergentes.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </aside>
    </div>
  );
};

export default StrategiesMatiere;