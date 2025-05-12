
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Book, BrainCircuit, Puzzle, Calculator, Brain, AlertTriangle, ScanSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topics = [
  {
    id: 'dyslexie',
    title: 'Dyslexie',
    description: 'Trouble spécifique de l\'apprentissage de la lecture et de l\'orthographe.',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'bg-neuro-light-blue',
    iconColor: 'text-neuro-blue',
    link: '/troubles/dyslexie'
  },
  {
    id: 'tdah',
    title: 'TDAH',
    description: 'Trouble du déficit de l\'attention avec ou sans hyperactivité.',
    icon: <ScanSearch className="h-6 w-6" />,
    color: 'bg-neuro-light-purple',
    iconColor: 'text-neuro-purple',
    link: '/troubles/tdah'
  },
  {
    id: 'autisme',
    title: 'Autisme',
    description: 'Trouble du spectre autistique affectant la communication et les interactions sociales.',
    icon: <Puzzle className="h-6 w-6" />,
    color: 'bg-neuro-light-green',
    iconColor: 'text-neuro-green',
    link: '/troubles/autisme'
  },
  {
    id: 'dyspraxie',
    title: 'Dyspraxie',
    description: 'Trouble de la coordination et de la planification des mouvements.',
    icon: <BrainCircuit className="h-6 w-6" />,
    color: 'bg-neuro-light-orange',
    iconColor: 'text-neuro-orange',
    link: '/troubles/dyspraxie'
  },
  {
    id: 'dyscalculie',
    title: 'Dyscalculie',
    description: 'Trouble spécifique des apprentissages en mathématiques.',
    icon: <Calculator className="h-6 w-6" />,
    color: 'bg-neuro-light-green',
    iconColor: 'text-neuro-green',
    link: '/troubles/dyscalculie'
  },
  {
    id: 'neurodegeneratifs',
    title: 'Maladies neurodégénératives',
    description: 'Troubles progressifs du système nerveux comme Alzheimer ou Parkinson.',
    icon: <Brain className="h-6 w-6" />,
    color: 'bg-neuro-light-blue',
    iconColor: 'text-neuro-blue',
    link: '/troubles/neurodegeneratifs'
  },
  {
    id: 'post-traumatiques',
    title: 'Troubles post-traumatiques',
    description: 'Séquelles neurologiques suite aux traumatismes crâniens.',
    icon: <AlertTriangle className="h-6 w-6" />,
    color: 'bg-neuro-light-orange',
    iconColor: 'text-neuro-orange',
    link: '/troubles/post-traumatiques'
  },
  {
    id: 'comprendre',
    title: 'Comprendre la neurodiversité',
    description: 'Fondements théoriques et approches de la neurodiversité.',
    icon: <Book className="h-6 w-6" />,
    color: 'bg-neuro-light-blue',
    iconColor: 'text-neuro-blue',
    link: '/comprendre'
  },
  {
    id: 'autisme-detail',
    title: 'Explorer l\'autisme en détail',
    description: 'Approfondissement des aspects cliniques, du diagnostic et des interventions.',
    icon: <Puzzle className="h-6 w-6" />,
    color: 'bg-neuro-light-green',
    iconColor: 'text-neuro-green',
    link: '/troubles/autisme-detail'
  },
];

const FeaturedTopics = () => {
  return (
    <section className="py-12 bg-secondary" id="featured-topics">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Explorer par thématique</h2>
          <p className="text-muted-foreground mt-2">
            Découvrez des informations détaillées sur chaque trouble neuro-atypique
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.slice(0, 6).map((topic, index) => (
            <motion.div
              key={topic.id}
              className={`neuro-card-interactive ${topic.color}`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 100 
              }}
            >
              <div 
                className="flex flex-col h-full gap-4"
                tabIndex={0}
                role="button"
                aria-label={`En savoir plus sur ${topic.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.location.href = topic.link;
                  }
                }}
              >
                <div className={`p-3 rounded-full w-fit ${topic.color}`}>
                  <div className={`${topic.iconColor}`} aria-hidden="true">
                    {topic.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                  <p className="text-white/80 mt-2">
                    {topic.description}
                  </p>
                </div>
                
                <Link 
                  to={topic.link}
                  className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`En savoir plus sur ${topic.title}`}
                >
                  <Button variant="link" className="p-0 text-white">
                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            size="lg" 
            asChild
            className="focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Link to="/troubles">Voir tous les sujets</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTopics;
