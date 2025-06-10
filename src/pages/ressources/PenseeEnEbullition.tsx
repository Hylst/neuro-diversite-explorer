import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Brain, Users, Lightbulb, Target, BookOpen, Zap, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OptimizedTooltip from '../../components/ui/OptimizedTooltip';
import OptimizedCollapsibleSection from '../../components/ui/OptimizedCollapsibleSection';

/**
 * Component for displaying "La pensée en ébullition" article
 * Enhanced version with better design, tooltips, and interactive elements
 */
const PenseeEnEbullition: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState('modular');

  /**
   * Handle navigation back to resources page
   */
  const handleBack = useCallback(() => {
    navigate('/ressources');
  }, [navigate]);

  /**
   * Toggle section expansion
   */
  const toggleSection = useCallback((id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux ressources
          </Button>
          
          <div className="text-center">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="inline-block w-8 h-8 mr-3 text-neuro-purple" />
              La pensée en ébullition
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pourquoi certains esprits neurodivergents peinent à structurer leurs idées
            </motion.p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
              <span>Par Geoffroy Streit</span>
              <span>•</span>
              <span>2021 - revu et amélioré en 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with tabs */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="modular" className="text-sm font-medium">
              Présentation modulaire
            </TabsTrigger>
            <TabsTrigger value="textual" className="text-sm font-medium">
              Présentation textuelle
            </TabsTrigger>
          </TabsList>

          <TabsContent value="modular" className="space-y-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="mb-8 border-l-4 border-l-neuro-purple">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-neuro-purple/10 p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-neuro-purple" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Introduction</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    De nombreuses personnes{' '}
                    <OptimizedTooltip id="neuroatypique-tip" content="Personnes dont le fonctionnement neurologique diffère de la norme statistique">
                      <span className="text-neuro-purple font-medium cursor-help border-b border-dotted border-neuro-purple">
                        neuroatypiques
                      </span>
                    </OptimizedTooltip>
                    , notamment celles présentant un{' '}
                    <OptimizedTooltip id="tdah-tip" content="Trouble neurodéveloppemental caractérisé par des difficultés d'attention, d'hyperactivité et d'impulsivité">
                      <span className="text-neuro-purple font-medium cursor-help border-b border-dotted border-neuro-purple">
                        Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDA/H)
                      </span>
                    </OptimizedTooltip>
                    , un{' '}
                    <OptimizedTooltip id="tsa-tip" content="Condition neurodéveloppementale caractérisée par des différences dans la communication sociale et des intérêts restreints">
                      <span className="text-neuro-purple font-medium cursor-help border-b border-dotted border-neuro-purple">
                        Trouble du Spectre de l'Autisme (TSA)
                      </span>
                    </OptimizedTooltip>
                    {' '}ou des{' '}
                    <OptimizedTooltip id="dys-tooltip" content="Troubles spécifiques des apprentissages affectant la lecture, l'écriture, le calcul ou la coordination">
                      <span className="text-neuro-purple font-medium cursor-help border-b border-dotted border-neuro-purple">
                        troubles "dys"
                      </span>
                    </OptimizedTooltip>
                    {' '}(dyslexie, dyspraxie, dysphasie), éprouvent des difficultés significatives à structurer leurs pensées et à mener leurs réflexions à leur terme.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-blue-800 font-medium">
                      💡 Point clé : Loin d'être un signe de manque d'intelligence, ce phénomène s'explique par des fonctionnements cognitifs distincts, propres à chaque profil.
                    </p>
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
          <OptimizedCollapsibleSection
            id="tdah"
            title="Le TDA/H : Une pensée en arborescence"
            icon={Zap} // Removed isExpanded, onToggle, and className props
            
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Les personnes avec un TDA/H sont souvent décrites comme ayant une{' '}
                <OptimizedTooltip id="arborescence-tip" content="Mode de pensée où une idée génère spontanément de multiples branches d'idées connexes, comme les branches d'un arbre">
                  <span className="text-neuro-purple font-medium cursor-help border-b border-dotted border-neuro-purple">
                    "pensée en arborescence"
                  </span>
                </OptimizedTooltip>
                . Une idée en entraîne une multitude d'autres, créant un réseau complexe et foisonnant mais rendant difficile le suivi d'un fil de pensée linéaire.
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-semibold text-amber-800 mb-2">🧠 Les fonctions exécutives en jeu :</h4>
                <ul className="space-y-2 text-amber-700">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Planification et organisation :</strong> Difficulté à décomposer une tâche complexe en étapes logiques
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Mémoire de travail :</strong> Défi pour retenir et manipuler des informations sur une courte période
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Inhibition :</strong> Difficulté à filtrer les pensées non pertinentes et les distractions
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Initiation de la tâche :</strong> Obstacle pour commencer une réflexion structurée
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800">
                  <strong>💪 Forces associées :</strong> Cette pensée arborescente est aussi source de créativité exceptionnelle, d'innovation et de capacité à faire des liens inattendus entre les concepts.
                </p>
              </div>
            </div>
          </OptimizedCollapsibleSection>
        </motion.div>

        {/* TSA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <OptimizedCollapsibleSection
            id="tsa"
            title="Le TSA : Une structure de pensée singulière"
            icon={Users} // Removed className prop
            
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Les personnes autistes présentent une structure cognitive qui leur est propre. Leurs difficultés à organiser leurs pensées ne proviennent pas nécessairement d'un "désordre", mais d'une manière différente de traiter l'information.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Pensée par le détail
                  </h4>
                  <p className="text-purple-700 text-sm">
                    Forte focalisation sur les détails (pensée "bottom-up"), pouvant rendre difficile la synthèse globale.
                  </p>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Théorie de l'Esprit
                  </h4>
                  <p className="text-indigo-700 text-sm">
                    Difficulté à anticiper les perspectives des autres, impactant la structuration du discours.
                  </p>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Traitement littéral
                  </h4>
                  <p className="text-teal-700 text-sm">
                    Besoin de règles explicites, difficulté avec l'implicite et les concepts abstraits.
                  </p>
                </div>
                
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-800 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Charge cognitive
                  </h4>
                  <p className="text-rose-700 text-sm">
                    Hypersensibilité sensorielle mobilisant les ressources cognitives disponibles.
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800">
                  <strong>💪 Forces associées :</strong> Attention exceptionnelle aux détails, pensée logique rigoureuse, expertise approfondie dans les domaines d'intérêt.
                </p>
              </div>
            </div>
          </OptimizedCollapsibleSection>
        </motion.div>

        {/* Troubles Dys Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <OptimizedCollapsibleSection
            id="dys"
            title="Les troubles 'dys' : Impact de la surcharge cognitive"
            icon={BookOpen} // Removed className prop
            
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pour les personnes présentant des troubles "dys", les difficultés de structuration de la pensée sont souvent une conséquence indirecte de leurs défis spécifiques :
              </p>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Dysphasie</h4>
                  <p className="text-blue-700 text-sm">
                    Trouble du langage oral affectant directement la capacité à formuler des phrases et organiser un discours.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Dyslexie</h4>
                  <p className="text-green-700 text-sm">
                    L'effort constant pour décoder le langage écrit peut épuiser les ressources mentales nécessaires à l'organisation des idées.
                  </p>
                  <p className="text-green-600 text-xs mt-1 font-medium">
                    💡 Compensation : Développement de forces en pensée holistique, créative et visuelle.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-2">Dyspraxie</h4>
                  <p className="text-orange-700 text-sm">
                    Trouble de la planification des gestes pouvant aussi affecter la planification des pensées.
                  </p>
                </div>
              </div>
            </div>
          </OptimizedCollapsibleSection>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 p-3 rounded-full">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Conclusion : Comprendre pour mieux accompagner</h2>
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      La difficulté à structurer ses pensées et à aller au bout de ses réflexions chez les personnes neurodivergentes est un enjeu réel et souvent invisible. Elle n'est pas le fruit d'une paresse ou d'un manque de volonté, mais la conséquence directe de fonctionnements cérébraux atypiques.
                    </p>
                    
                    <div className="bg-gradient-to-r from-neuro-purple/10 to-blue-500/10 p-4 rounded-lg">
                      <p className="text-gray-800 font-medium">
                        🌟 <strong>Message d'espoir :</strong> Comprendre ces mécanismes est essentiel pour proposer un accompagnement adapté et pour reconnaître la richesse et la diversité de ces formes de pensée.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">🔄 Profils combinés</h4>
                      <p className="text-yellow-700 text-sm">
                        La réalité est souvent complexe, avec de fréquents chevauchements entre ces troubles. Une personne peut être à la fois TDA/H et autiste ("AuDHD"), ou présenter un TDA/H avec une dyslexie. Dans ces cas, les difficultés peuvent s'additionner et se manifester de manière unique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

            {/* Author info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center text-gray-500 text-sm"
            >
              <div className="border-t pt-4">
                <p>Auteur : <strong>Geoffroy Streit</strong> • 2021 - revu et amélioré en 2025</p>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="textual" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="prose prose-lg max-w-none dark:prose-invert">
                <CardContent className="pt-6">
                  <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      De nombreuses personnes neuroatypiques, notamment celles présentant un Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDA/H), un Trouble du Spectre de l'Autisme (TSA) ou des troubles "dys" (dyslexie, dyspraxie, dysphasie), éprouvent des difficultés significatives à structurer leurs pensées et à mener leurs réflexions à leur terme. Loin d'être un signe de manque d'intelligence, ce phénomène s'explique par des fonctionnements cognitifs distincts, propres à chaque profil.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                      Le TDA/H : Une pensée en arborescence et des fonctions exécutives en première ligne
                    </h3>
                    <p>
                      Les personnes avec un TDA/H sont souvent décrites comme ayant une "pensée en arborescence". Une idée en entraîne une multitude d'autres, créant un réseau complexe et foisonnant mais rendant difficile le suivi d'un fil de pensée linéaire. Cette particularité, bien que source de créativité, peut mener à une sensation de chaos mental et à des difficultés à hiérarchiser et finaliser les réflexions.
                    </p>
                    <p>
                      Cette difficulté est principalement due à un déficit des fonctions exécutives, un ensemble de processus mentaux de haut niveau qui agissent comme le "chef d'orchestre" du cerveau. Celles-ci incluent :
                    </p>
                    <p>
                      <strong>La planification et l'organisation :</strong> La capacité à décomposer une tâche complexe en étapes, à organiser les idées de manière logique et à anticiper les besoins futurs est souvent altérée.
                    </p>
                    <p>
                      <strong>La mémoire de travail :</strong> Retenir et manipuler des informations sur une courte période est un défi. Il peut être compliqué de se souvenir du début d'une idée une fois arrivé à la fin d'une phrase.
                    </p>
                    <p>
                      <strong>L'inhibition :</strong> La difficulté à filtrer les pensées non pertinentes et les distractions externes ou internes (d'autres idées qui surgissent) perturbe la concentration sur une seule ligne de raisonnement.
                    </p>
                    <p>
                      <strong>L'initiation de la tâche :</strong> Le simple fait de commencer une réflexion structurée peut représenter un obstacle majeur.
                    </p>
                    <p>
                      Ainsi, le profil TDA/H est l'un des plus sujets à la pensée désorganisée et à l'incapacité d'aller au bout d'un raisonnement complexe, non par manque de capacité, mais par une difficulté à canaliser et à gérer le flux constant d'informations et d'idées.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                      Le TSA : Une structure de pensée singulière et un traitement de l'information différent
                    </h3>
                    <p>
                      Les personnes autistes présentent une structure cognitive qui leur est propre. Leurs difficultés à organiser leurs pensées ne proviennent pas nécessairement d'un "désordre", mais d'une manière différente de traiter l'information. Plusieurs facteurs peuvent l'expliquer :
                    </p>
                    <p>
                      <strong>Une pensée souvent rigide ou axée sur les détails :</strong> La pensée autistique peut être caractérisée par une forte focalisation sur les détails (pensée par le détail ou "bottom-up"), ce qui peut rendre difficile la synthèse et la vision d'ensemble nécessaires à la structuration d'une réflexion globale.
                    </p>
                    <p>
                      <strong>Des difficultés avec la "Théorie de l'Esprit" :</strong> La capacité à comprendre et à anticiper les pensées, les intentions et les perspectives des autres peut être altérée. Cela peut se manifester dans la difficulté à structurer un discours ou une argumentation en tenant compte du point de vue de l'interlocuteur.
                    </p>
                    <p>
                      <strong>Un traitement de l'information littéral et un besoin de règles explicites :</strong> L'implicite et les concepts abstraits peuvent être difficiles à appréhender, ce qui complique la navigation dans des réflexions qui ne sont pas basées sur des faits concrets et des règles claires.
                    </p>
                    <p>
                      <strong>Une charge cognitive et sensorielle :</strong> Une hypersensibilité sensorielle et une gestion de l'anxiété peuvent mobiliser une grande partie des ressources cognitives, laissant moins d'énergie disponible pour des tâches complexes comme la structuration de la pensée.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                      Les troubles "dys" : L'impact de la surcharge cognitive et des difficultés spécifiques
                    </h3>
                    <p>
                      Pour les personnes présentant des troubles "dys", les difficultés de structuration de la pensée sont souvent une conséquence indirecte de leurs défis spécifiques :
                    </p>
                    <p>
                      <strong>La Dysphasie :</strong> Ce trouble du langage oral affecte directement la capacité à formuler des phrases et à organiser un discours. La difficulté à trouver les mots et à construire une syntaxe correcte est souvent le reflet d'une difficulté sous-jacente à structurer la pensée elle-même.
                    </p>
                    <p>
                      <strong>La Dyslexie :</strong> Bien que principalement un trouble de la lecture et de l'écriture, la dyslexie peut entraîner une surcharge cognitive importante. L'effort constant requis pour décoder le langage écrit peut épuiser les ressources mentales nécessaires à l'organisation des idées. Cependant, il est à noter que les personnes dyslexiques développent souvent des forces en matière de pensée holistique, créative et visuelle.
                    </p>
                    <p>
                      <strong>La Dyspraxie :</strong> Ce trouble de la planification et de la coordination des gestes peut également affecter la planification des pensées. L'automatisation des séquences, qu'elles soient motrices ou cognitives, est un défi. Organiser ses idées peut alors être perçu comme une tâche nécessitant une planification consciente et laborieuse.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                      Profils les plus touchés : Une question de combinaisons et d'intensité
                    </h3>
                    <p>
                      Il est difficile de désigner une seule catégorie de neurodiversité comme étant la plus affectée. Le TDA/H est sans doute le trouble où la difficulté à structurer sa pensée est la plus centrale et la plus fréquemment décrite, en raison de l'atteinte directe des fonctions exécutives.
                    </p>
                    <p>
                      Cependant, la réalité est souvent plus complexe, avec de fréquents chevauchements entre ces troubles. Une personne peut être à la fois TDA/H et autiste (parfois appelé "AuDHD"), ou présenter un TDA/H avec une dyslexie. Dans ces cas, les difficultés peuvent s'additionner et se manifester de manière unique et intense.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                      Conclusion
                    </h3>
                    <p>
                      En conclusion, la difficulté à structurer ses pensées et à aller au bout de ses réflexions chez les personnes neurodivergentes est un enjeu réel et souvent invisible. Elle n'est pas le fruit d'une paresse ou d'un manque de volonté, mais la conséquence directe de fonctionnements cérébraux atypiques. Comprendre ces mécanismes est essentiel pour proposer un accompagnement adapté et pour reconnaître la richesse et la diversité de ces formes de pensée.
                    </p>

                    <div className="border-t pt-6 mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                      <p>Auteur : <strong>Geoffroy Streit</strong> - 2021 - revu et amélioré en 2025</p>
                      <p className="mt-1">Titre : La pensée en ébullition : Pourquoi certains esprits neurodivergents peinent à structurer leurs idées</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PenseeEnEbullition;