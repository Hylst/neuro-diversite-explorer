import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Users, BookOpen, Target, Lightbulb, Zap, Info, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

/**
 * Component for displaying "La pensée en ébullition" article
 * Rewritten with improved textual presentation based on the original text
 */
const PenseeEnEbullition: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/ressources');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux ressources
          </Button>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Brain className="w-10 h-10 text-neuro-purple" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                La pensée en ébullition
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Pourquoi certains esprits neurodivergents peinent à structurer leurs idées
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-medium">Par Geoffroy Streit</span>
              <span>•</span>
              <span>2021 - revu et amélioré en 2025</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-l-4 border-l-neuro-purple shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neuro-purple/10 p-3 rounded-full flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-neuro-purple" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Introduction</h2>
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        De nombreuses personnes neuroatypiques, notamment celles présentant un <strong>Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDA/H)</strong>, un <strong>Trouble du Spectre de l'Autisme (TSA)</strong> ou des <strong>troubles "dys"</strong> (dyslexie, dyspraxie, dysphasie), éprouvent des difficultés significatives à structurer leurs pensées et à mener leurs réflexions à leur terme.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                        <p className="text-blue-800 dark:text-blue-200 font-medium flex items-start gap-2">
                          <Info className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <span>Loin d'être un signe de manque d'intelligence, ce phénomène s'explique par des fonctionnements cognitifs distincts, propres à chaque profil.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* TDA/H Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-l-4 border-l-amber-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-gray-100">
                  <div className="bg-amber-500/10 p-2 rounded-full">
                    <Zap className="w-6 h-6 text-amber-600" />
                  </div>
                  Le TDA/H : Une pensée en arborescence et des fonctions exécutives en première ligne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Les personnes avec un TDA/H sont souvent décrites comme ayant une <strong>"pensée en arborescence"</strong>. Une idée en entraîne une multitude d'autres, créant un réseau complexe et foisonnant mais rendant difficile le suivi d'un fil de pensée linéaire. Cette particularité, bien que source de créativité, peut mener à une sensation de chaos mental et à des difficultés à hiérarchiser et finaliser les réflexions.
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Cette difficulté est principalement due à un déficit des <strong>fonctions exécutives</strong>, un ensemble de processus mentaux de haut niveau qui agissent comme le "chef d'orchestre" du cerveau. Celles-ci incluent :
                  </p>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Les fonctions exécutives affectées :
                    </h4>
                    <ul className="space-y-3 text-amber-700 dark:text-amber-300">
                      <li className="flex items-start gap-3">
                        <Target className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <strong>La planification et l'organisation :</strong> La capacité à décomposer une tâche complexe en étapes, à organiser les idées de manière logique et à anticiper les besoins futurs est souvent altérée.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Brain className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <strong>La mémoire de travail :</strong> Retenir et manipuler des informations sur une courte période est un défi. Il peut être compliqué de se souvenir du début d'une idée une fois arrivé à la fin d'une phrase.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <strong>L'inhibition :</strong> La difficulté à filtrer les pensées non pertinentes et les distractions externes ou internes (d'autres idées qui surgissent) perturbe la concentration sur une seule ligne de raisonnement.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <BookOpen className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <strong>L'initiation de la tâche :</strong> Le simple fait de commencer une réflexion structurée peut représenter un obstacle majeur.
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      Ainsi, le profil TDA/H est l'un des plus sujets à la pensée désorganisée et à l'incapacité d'aller au bout d'un raisonnement complexe, non par manque de capacité, mais par une difficulté à canaliser et à gérer le flux constant d'informations et d'idées.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* TSA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="border-l-4 border-l-purple-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-gray-100">
                  <div className="bg-purple-500/10 p-2 rounded-full">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  Le TSA : Une structure de pensée singulière et un traitement de l'information différent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Les personnes autistes présentent une structure cognitive qui leur est propre. Leurs difficultés à organiser leurs pensées ne proviennent pas nécessairement d'un "désordre", mais d'une manière différente de traiter l'information. Plusieurs facteurs peuvent l'expliquer :
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        Une pensée souvent rigide ou axée sur les détails
                      </h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        La pensée autistique peut être caractérisée par une forte focalisation sur les détails (pensée par le détail ou "bottom-up"), ce qui peut rendre difficile la synthèse et la vision d'ensemble nécessaires à la structuration d'une réflexion globale.
                      </p>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Des difficultés avec la "Théorie de l'Esprit"
                      </h4>
                      <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                        La capacité à comprendre et à anticiper les pensées, les intentions et les perspectives des autres peut être altérée. Cela peut se manifester dans la difficulté à structurer un discours ou une argumentation en tenant compte du point de vue de l'interlocuteur.
                      </p>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Un traitement de l'information littéral et un besoin de règles explicites
                      </h4>
                      <p className="text-teal-700 dark:text-teal-300 text-sm">
                        L'implicite et les concepts abstraits peuvent être difficiles à appréhender, ce qui complique la navigation dans des réflexions qui ne sont pas basées sur des faits concrets et des règles claires.
                      </p>
                    </div>
                    
                    <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-rose-800 dark:text-rose-200 mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Une charge cognitive et sensorielle
                      </h4>
                      <p className="text-rose-700 dark:text-rose-300 text-sm">
                        Une hypersensibilité sensorielle et une gestion de l'anxiété peuvent mobiliser une grande partie des ressources cognitives, laissant moins d'énergie disponible pour des tâches complexes comme la structuration de la pensée.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Troubles Dys Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="border-l-4 border-l-green-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-gray-100">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  Les troubles "dys" : L'impact de la surcharge cognitive et des difficultés spécifiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Pour les personnes présentant des troubles "dys", les difficultés de structuration de la pensée sont souvent une conséquence indirecte de leurs défis spécifiques :
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">La Dysphasie</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Ce trouble du langage oral affecte directement la capacité à formuler des phrases et à organiser un discours. La difficulté à trouver les mots et à construire une syntaxe correcte est souvent le reflet d'une difficulté sous-jacente à structurer la pensée elle-même.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">La Dyslexie</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm mb-2">
                        Bien que principalement un trouble de la lecture et de l'écriture, la dyslexie peut entraîner une surcharge cognitive importante. L'effort constant requis pour décoder le langage écrit peut épuiser les ressources mentales nécessaires à l'organisation des idées.
                      </p>
                      <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded text-xs">
                        <strong className="text-green-800 dark:text-green-200">💡 Point positif :</strong>
                        <span className="text-green-700 dark:text-green-300"> Les personnes dyslexiques développent souvent des forces en matière de pensée holistique, créative et visuelle.</span>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">La Dyspraxie</h4>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">
                        Ce trouble de la planification et de la coordination des gestes peut également affecter la planification des pensées. L'automatisation des séquences, qu'elles soient motrices ou cognitives, est un défi. Organiser ses idées peut alors être perçu comme une tâche nécessitant une planification consciente et laborieuse.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profils les plus touchés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="border-l-4 border-l-red-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-gray-100">
                  <div className="bg-red-500/10 p-2 rounded-full">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  Profils les plus touchés : Une question de combinaisons et d'intensité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Il est difficile de désigner une seule catégorie de neurodiversité comme étant la plus affectée. Le <strong>TDA/H</strong> est sans doute le trouble où la difficulté à structurer sa pensée est la plus centrale et la plus fréquemment décrite, en raison de l'atteinte directe des fonctions exécutives.
                  </p>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Profils combinés
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                      Cependant, la réalité est souvent plus complexe, avec de fréquents chevauchements entre ces troubles. Une personne peut être à la fois TDA/H et autiste (parfois appelé <Badge variant="outline" className="mx-1">"AuDHD"</Badge>), ou présenter un TDA/H avec une dyslexie. Dans ces cas, les difficultés peuvent s'additionner et se manifester de manière unique et intense.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="border-l-4 border-l-neuro-purple shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-gray-100">
                  <div className="bg-neuro-purple/10 p-2 rounded-full">
                    <Target className="w-6 h-6 text-neuro-purple" />
                  </div>
                  Conclusion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    En conclusion, la difficulté à structurer ses pensées et à aller au bout de ses réflexions chez les personnes neurodivergentes est un enjeu réel et souvent invisible. Elle n'est pas le fruit d'une paresse ou d'un manque de volonté, mais la conséquence directe de fonctionnements cérébraux atypiques.
                  </p>
                  
                  <div className="bg-gradient-to-r from-neuro-purple/10 to-blue-500/10 p-5 rounded-lg border border-neuro-purple/20">
                    <p className="text-gray-800 dark:text-gray-200 font-medium text-center">
                      🌟 <strong>Comprendre ces mécanismes est essentiel pour proposer un accompagnement adapté et pour reconnaître la richesse et la diversité de ces formes de pensée.</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Author info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center py-6"
          >
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                <strong>Auteur :</strong> Geoffroy Streit • 2021 - revu et amélioré en 2025
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                Titre : La pensée en ébullition : Pourquoi certains esprits neurodivergents peinent à structurer leurs idées
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PenseeEnEbullition;