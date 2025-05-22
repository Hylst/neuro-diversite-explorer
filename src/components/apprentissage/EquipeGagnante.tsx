import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Users, User, School, Heart, MessageSquare, Lightbulb, UserPlus, BookOpen } from 'lucide-react';
import { ContextualDetail } from '@/components/ui/ContextualDetail';
import { equipeGagnanteDetails } from '@/data/equipe-gagnante-details';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const EquipeGagnante = () => {
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
          <span className="neuro-gradient-text">Module 4:</span> 
          <ContextualDetail 
            term="L'Équipe Gagnante"
            shortDescription={equipeGagnanteDetails.equipeGagnante.shortDescription}
            longDescription={equipeGagnanteDetails.equipeGagnante.longDescription}
          >
            L'Équipe Gagnante
          </ContextualDetail>
        </h2>
        
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          Parents, Enfants, et l'École : Ensemble, on va plus loin !
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
                <g transform="translate(60, 50)">
                  <circle cx="0" cy="0" r="25" fill="#c084fc" opacity="0.7" />
                  <text x="0" y="5" textAnchor="middle" fill="#4b5563" fontWeight="bold">Parents</text>
                </g>
                <g transform="translate(140, 50)">
                  <circle cx="0" cy="0" r="25" fill="#60a5fa" opacity="0.7" />
                  <text x="0" y="5" textAnchor="middle" fill="#4b5563" fontWeight="bold">École</text>
                </g>
                <g transform="translate(100, 130)">
                  <circle cx="0" cy="0" r="25" fill="#34d399" opacity="0.7" />
                  <text x="0" y="5" textAnchor="middle" fill="#4b5563" fontWeight="bold">Enfant</text>
                </g>
                <line x1="80" y1="60" x2="120" y2="60" stroke="#6b7280" strokeWidth="2" strokeDasharray="4" />
                <line x1="70" y1="75" x2="90" y2="110" stroke="#6b7280" strokeWidth="2" strokeDasharray="4" />
                <line x1="130" y1="75" x2="110" y2="110" stroke="#6b7280" strokeWidth="2" strokeDasharray="4" />
                <circle cx="100" cy="100" r="15" fill="#fde68a" opacity="0.7" />
                <text x="100" y="103" textAnchor="middle" fill="#4b5563" fontSize="8" fontWeight="bold">Équipe</text>
              </svg>
            </div>
          </div>
        </div>

        <Tabs defaultValue="parents" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <TabsTrigger value="parents" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Parents
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{equipeGagnanteDetails.parents.shortDescription}</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <TabsTrigger value="enfants" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Enfants/Ados
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{equipeGagnanteDetails.enfantsAdos.shortDescription}</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <TabsTrigger value="ecole" className="flex items-center gap-2">
                    <School className="h-4 w-4" />
                    Relation avec l'École
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{equipeGagnanteDetails.ecole.shortDescription}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TabsList>
          
          <TabsContent value="parents">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  <ContextualDetail 
                    term="Parents : Coachs Bienveillants"
                    shortDescription={equipeGagnanteDetails.parents.shortDescription}
                    longDescription={equipeGagnanteDetails.parents.longDescription}
                  >
                    Parents : Coachs Bienveillants, Pas Bourreaux (ni magiciens)
                  </ContextualDetail>
                </h3>
                
                <p className="mb-4">
                  Le rôle des parents d'enfants neurodivergents est particulièrement délicat : soutenir sans surprotéger, 
                  encourager sans mettre de pression, comprendre sans excuser tous les comportements. Voici comment trouver cet équilibre.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Attitudes fondamentales</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Créer un climat de confiance et de dialogue</span> : Être à l'écoute sans jugement, même quand c'est difficile
                      </li>
                      <li>
                        <span className="font-medium">Valoriser les efforts plus que les notes</span> : Reconnaître le travail fourni, pas seulement le résultat
                      </li>
                      <li>
                        <span className="font-medium">Fixer des attentes réalistes et individualisées</span> : Adapter les objectifs aux capacités spécifiques de votre enfant
                      </li>
                      <li>
                        <span className="font-medium">Savoir quand aider et quand laisser chercher</span> : L'art de ne pas faire à la place de l'enfant
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Actions concrètes</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Établir des routines claires</span> : Structurer le temps pour réduire l'anxiété et faciliter l'organisation
                      </li>
                      <li>
                        <span className="font-medium">Aménager un espace de travail adapté</span> : Calme, bien éclairé, avec les outils nécessaires
                      </li>
                      <li>
                        <span className="font-medium">Décomposer les tâches complexes</span> : Aider à planifier par étapes les devoirs ou projets
                      </li>
                      <li>
                        <span className="font-medium">Être le porte-parole de votre enfant</span> : Communiquer ses besoins spécifiques aux enseignants
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-neuro-purple" />
                    Spécificité Neurodiversité
                  </h4>
                  <p className="mb-2">
                    Les parents d'enfants neurodivergents ont des responsabilités supplémentaires :
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Devenir l'expert de votre enfant : observer, comprendre ses particularités uniques</li>
                    <li>Défendre ses besoins : être son avocat dans le système scolaire</li>
                    <li>Collaborer étroitement avec l'école pour les aménagements nécessaires</li>
                    <li>Trouver l'équilibre entre soutien et développement de l'autonomie</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-amber-400 pl-4 mt-6 italic">
                  <p>
                    "Oui, on sait, parfois vous avez envie de refaire leur rédaction ou de résoudre cette équation impossible... 
                    Respirez, et faites-leur confiance (un peu)."
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="enfants">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  <ContextualDetail 
                    term="Enfants et Adolescents"
                    shortDescription={equipeGagnanteDetails.enfantsAdos.shortDescription}
                    longDescription={equipeGagnanteDetails.enfantsAdos.longDescription}
                  >
                    Enfants/Ados : Acteurs de Votre Réussite !
                  </ContextualDetail>
                </h3>
                
                <p className="mb-4">
                  Être neurodivergent dans un monde conçu pour les neurotypiques peut être un défi quotidien. 
                  Mais tu as aussi des super-pouvoirs que les autres n'ont pas ! Voici comment devenir acteur de ta réussite.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-neuro-purple" /> Communication
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Oser poser des questions</span> : Il n'y a pas de questions bêtes ! Si tu ne comprends pas, demande
                      </li>
                      <li>
                        <span className="font-medium">Exprimer tes difficultés</span> : Apprends à dire ce qui est difficile pour toi, de façon précise
                      </li>
                      <li>
                        <span className="font-medium">Demander de l'aide</span> : Ce n'est pas un signe de faiblesse, mais d'intelligence
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-neuro-purple" /> Auto-évaluation
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">S'auto-évaluer régulièrement</span> : Qu'est-ce que j'ai compris ? Où est-ce que je bloque ?
                      </li>
                      <li>
                        <span className="font-medium">Identifier tes forces</span> : Sur quels points es-tu particulièrement bon ?
                      </li>
                      <li>
                        <span className="font-medium">Célébrer tes progrès</span> : Même les petites victoires méritent d'être reconnues
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2 text-neuro-purple">Stratégies d'organisation personnalisées</h4>
                  <p className="mb-2">
                    Trouve les méthodes qui fonctionnent pour TOI, pas celles qui marchent pour tout le monde :
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Expérimente différentes techniques d'organisation jusqu'à trouver celle qui te convient</li>
                    <li>Utilise la technologie à ton avantage (applications, rappels, assistants vocaux)</li>
                    <li>Crée ton propre système de codes couleurs, symboles ou abréviations</li>
                    <li>Aménage ton espace de travail selon TES besoins sensoriels</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-neuro-purple pl-4 mt-6">
                  <h4 className="font-semibold mb-2">Message important</h4>
                  <p>
                    Ta neurodivergence n'est pas un défaut à corriger, mais une différence à comprendre et à utiliser. 
                    Tu as une façon unique de voir le monde, et c'est une force quand tu apprends à la canaliser.
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <UserPlus className="h-4 w-4 text-neuro-purple" />
                    Témoignages inspirants
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white dark:bg-muted/30 rounded-lg">
                      <p className="text-sm italic mb-2">
                        "J'ai appris à utiliser mes hyperfocus comme une force. Maintenant, je suis en école d'ingénieur et je développe des applications."
                      </p>
                      <p className="text-xs text-right font-medium">- Thomas, 19 ans, TDAH</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-muted/30 rounded-lg">
                      <p className="text-sm italic mb-2">
                        "Les stratégies visuelles m'ont aidée à mieux m'organiser. J'utilise des codes couleurs pour tout et ça a changé ma vie scolaire."
                      </p>
                      <p className="text-xs text-right font-medium">- Léa, 15 ans, dyslexie</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-neuro-purple" />
                    Ressources complémentaires
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a href="/ressources/documents" className="text-neuro-purple hover:underline">
                        Guide pratique : "Stratégies d'apprentissage pour étudiants neurodivergents"
                      </a>
                    </li>
                    <li>
                      <a href="/communaute/forum" className="text-neuro-purple hover:underline">
                        Groupe d'entraide entre jeunes neurodivergents
                      </a>
                    </li>
                    <li>
                      <a href="/ressources/applications" className="text-neuro-purple hover:underline">
                        Applications d'organisation et d'aide à l'apprentissage
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ecole">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  <ContextualDetail 
                    term="Relation avec l'École"
                    shortDescription={equipeGagnanteDetails.ecole.shortDescription}
                    longDescription={equipeGagnanteDetails.ecole.longDescription}
                  >
                    La Relation avec l'École : Des Alliés, Pas des Adversaires
                  </ContextualDetail>
                </h3>
                
                <p className="mb-4">
                  Une collaboration efficace entre la famille et l'équipe éducative est essentielle pour la réussite 
                  des élèves neurodivergents. Voici comment construire cette alliance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Communication efficace</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Importance de la communication régulière</span> : Réunions parents-profs, carnet de correspondance, emails
                      </li>
                      <li>
                        <span className="font-medium">Comprendre le rôle de chacun</span> : Enseignants, CPE, AESH, psychologue scolaire, médecin scolaire
                      </li>
                      <li>
                        <span className="font-medium">Partager les informations utiles</span> : Informer l'école des spécificités de votre enfant sans le réduire à ses difficultés
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-neuro-purple">Résolution de problèmes</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Comment aborder un problème</span> : Approche constructive, centrée sur les solutions
                      </li>
                      <li>
                        <span className="font-medium">Préparer les rendez-vous</span> : Noter les points à aborder, apporter des exemples concrets
                      </li>
                      <li>
                        <span className="font-medium">Suivi des décisions</span> : S'assurer que les aménagements convenus sont bien mis en place
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-neuro-purple" />
                    Créer un partenariat durable
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Reconnaître l'expertise des enseignants tout en affirmant votre connaissance unique de votre enfant</li>
                    <li>Proposer votre aide pour des projets ou activités de classe quand c'est possible</li>
                    <li>Exprimer votre gratitude pour les efforts des enseignants qui s'adaptent aux besoins de votre enfant</li>
                    <li>Partager les ressources et informations sur la neurodiversité qui pourraient être utiles</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 mt-6">
                  <h4 className="font-semibold mb-2">Pour les enseignants</h4>
                  <p>
                    Les parents d'enfants neurodivergents sont souvent épuisés par les multiples rendez-vous, démarches et adaptations 
                    quotidiennes. Votre écoute bienveillante et votre flexibilité font une énorme différence dans leur parcours. 
                    Ensemble, vous formez une équipe dont l'objectif commun est l'épanouissement de l'enfant.
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-neuro-purple" />
                    Outils de collaboration
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a href="/ressources/documents" className="text-neuro-purple hover:underline">
                        Modèle de cahier de liaison adapté aux besoins spécifiques
                      </a>
                    </li>
                    <li>
                      <a href="/ressources/documents" className="text-neuro-purple hover:underline">
                        Guide des dispositifs d'accompagnement scolaire (PAP, PPS, PPRE)
                      </a>
                    </li>
                    <li>
                      <a href="/ressources/applications" className="text-neuro-purple hover:underline">
                        Applications de suivi collaboratif des progrès
                      </a>
                    </li>
                  </ul>
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
              <CardTitle className="text-xl font-semibold text-neuro-purple">Équipe Gagnante</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Encart Parents */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Parents
                  </h3>
                  <p className="text-sm text-muted-foreground">Stratégies pour soutenir votre enfant tout en préservant l'équilibre familial.</p>
                </div>
                
                {/* Encart Enfants/Ados */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Enfants/Ados
                  </h3>
                  <p className="text-sm text-muted-foreground">Outils d'auto-régulation et de confiance en soi pour les jeunes neurodivergents.</p>
                </div>
                
                {/* Encart École */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple flex items-center gap-2">
                    <School className="h-4 w-4" />
                    Relation avec l'École
                  </h3>
                  <p className="text-sm text-muted-foreground">Conseils pour établir une collaboration efficace avec les enseignants et l'administration.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </aside>
    </div>
  );
};

export default EquipeGagnante;