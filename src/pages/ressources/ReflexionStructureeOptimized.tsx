import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Brain, Target, Lightbulb, Users, BookOpen, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OptimizedTooltip from '../../components/ui/OptimizedTooltip';
import OptimizedCollapsibleSection from '../../components/ui/OptimizedCollapsibleSection';
import PerformanceMonitor from '../../components/ui/PerformanceMonitor';

/**
 * Optimized Reflexion Structuree Component
 * Performance improvements:
 * 1. useCallback for event handlers
 * 2. useMemo for expensive computations
 * 3. Optimized animations
 * 4. Reduced re-renders
 * 5. Lazy loading of content
 * 6. Performance monitoring
 */
const ReflexionStructureeOptimized: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const handleBack = useCallback(() => {
    navigate('/ressources');
  }, [navigate]);

  const toggleSection = useCallback((id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  // Memoized content sections to prevent unnecessary re-renders
  const contentSections = useMemo(() => [
    {
      id: 'introduction',
      title: 'Introduction à la Réflexion Structurée',
      icon: Brain,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            La <OptimizedTooltip id="reflexion-structuree" content="Méthode de pensée organisée qui permet d'analyser les situations de manière systématique et efficace.">réflexion structurée</OptimizedTooltip> est une approche méthodologique qui permet aux personnes neuroatypiques de mieux organiser leurs pensées et d'optimiser leur processus de prise de décision.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Cette méthode s'avère particulièrement bénéfique pour les personnes avec <OptimizedTooltip id="tdah" content="Trouble Déficitaire de l'Attention avec ou sans Hyperactivité - condition neurologique affectant l'attention, l'hyperactivité et l'impulsivité.">TDAH</OptimizedTooltip>, <OptimizedTooltip id="autisme" content="Trouble du spectre autistique - condition neurologique affectant la communication, les interactions sociales et les comportements.">autisme</OptimizedTooltip>, ou d'autres formes de neurodiversité.
          </p>
        </div>
      )
    },
    {
      id: 'methodes',
      title: 'Méthodes et Techniques',
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">1. La Méthode SMART</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">2. Le Mind Mapping</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Visualisation des idées sous forme de cartes mentales
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">3. La Matrice d'Eisenhower</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Priorisation des tâches selon leur urgence et importance
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Applications Pratiques',
      icon: Lightbulb,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-medium mb-2">Dans le travail</h5>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Planification de projets</li>
                <li>• Résolution de problèmes</li>
                <li>• Prise de décisions</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-medium mb-2">Dans la vie quotidienne</h5>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Organisation personnelle</li>
                <li>• Gestion du temps</li>
                <li>• Relations sociales</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <PerformanceMonitor componentName="ReflexionStructureeOptimized" />
      
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux ressources</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Réflexion Structurée
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Développez vos capacités de réflexion et d'analyse avec des méthodes adaptées aux profils neuroatypiques
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {contentSections.map((section) => (
              <OptimizedCollapsibleSection
                key={section.id}
                id={section.id}
                title={section.title}
                icon={section.icon}
                defaultExpanded={section.id === 'introduction'}
              >
                {section.content}
              </OptimizedCollapsibleSection>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Prêt à structurer votre réflexion ?</h3>
              <p className="text-blue-100 mb-6">
                Explorez nos autres ressources pour approfondir vos connaissances
              </p>
              <button
                onClick={handleBack}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Découvrir plus de ressources
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReflexionStructureeOptimized;