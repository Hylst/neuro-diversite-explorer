import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TroubleCard from '../common/TroubleCard';

interface DysTroublesSectionProps {
  onNavigate?: () => void;
}

const DysTroublesSection: React.FC<DysTroublesSectionProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = () => {
    navigate('/troubles/dys');
    scrollToTop();
    if (onNavigate) onNavigate();
  };

  const troublesData = [
    {
      id: 'dyslexie',
      title: 'Dyslexie',
      description: 'Trouble spécifique de l\'apprentissage de la lecture et de l\'orthographe',
      symptoms: ['Difficultés à décoder les mots', 'Confusion entre lettres similaires', 'Lenteur de lecture', 'Difficultés d\'orthographe'],
      color: 'border-neuro-blue'
    },
    {
      id: 'dyspraxie',
      title: 'Dyspraxie',
      description: 'Trouble affectant la coordination des mouvements et la motricité fine',
      symptoms: ['Maladresse motrice', 'Difficultés d\'écriture', 'Problèmes d\'organisation spatiale', 'Difficultés avec les gestes du quotidien'],
      color: 'border-neuro-orange'
    },
    {
      id: 'dyscalculie',
      title: 'Dyscalculie',
      description: 'Trouble spécifique des apprentissages en mathématiques',
      symptoms: ['Difficultés avec les nombres', 'Problèmes avec les opérations de base', 'Confusion dans les étapes de résolution', 'Troubles de mémorisation des tables'],
      color: 'border-neuro-green'
    },
    {
      id: 'dysphasie',
      title: 'Dysphasie',
      description: 'Trouble spécifique du développement du langage oral',
      symptoms: ['Retard d\'acquisition du langage', 'Difficultés d\'expression', 'Troubles de compréhension', 'Vocabulaire limité'],
      color: 'border-neuro-purple'
    },
    {
      id: 'dysorthographie',
      title: 'Dysorthographie',
      description: 'Trouble spécifique de l\'acquisition et de la maîtrise de l\'orthographe',
      symptoms: ['Erreurs phonologiques', 'Difficultés avec les règles grammaticales', 'Omission de lettres', 'Souvent associée à la dyslexie'],
      color: 'border-neuro-red'
    },
    {
      id: 'dysgraphie',
      title: 'Dysgraphie',
      description: 'Trouble spécifique de l\'écriture affectant le geste graphique',
      symptoms: ['Écriture illisible', 'Tenue incorrecte du stylo', 'Lenteur d\'écriture', 'Fatigue rapide lors de l\'écriture'],
      color: 'border-neuro-blue'
    }
  ];

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {troublesData.map((trouble) => (
          <TroubleCard
            key={trouble.id}
            id={trouble.id as any}
            title={trouble.title}
            description={trouble.description}
            symptoms={trouble.symptoms}
            color={trouble.color}
            linkTo={`/troubles/${trouble.id}`}
          />
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Les troubles Dys sont souvent associés entre eux et peuvent être accompagnés d'autres 
          troubles neurodéveloppementaux. Une approche globale est essentielle pour un diagnostic 
          précis et une prise en charge adaptée.
        </p>
        <Button onClick={handleNavigate}>
          Voir tous les troubles Dys
        </Button>
      </div>
    </>
  );
};

export default DysTroublesSection;