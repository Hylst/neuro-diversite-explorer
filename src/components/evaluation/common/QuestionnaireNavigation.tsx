import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuestionnaireNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  canGoNext: boolean;
  isFirstQuestion: boolean;
}

/**
 * Composant réutilisable pour la navigation dans les questionnaires
 * Fournit des boutons précédent/suivant et une barre de progression
 */
const QuestionnaireNavigation: React.FC<QuestionnaireNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  canGoNext,
  isFirstQuestion
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} sur {totalQuestions}
        </span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      
      <Progress value={progress} className="h-2" />
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Précédent
        </Button>
        
        <Button 
          onClick={onNext} 
          disabled={!canGoNext}
          className="flex items-center gap-2"
        >
          Suivant
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuestionnaireNavigation;