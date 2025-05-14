import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface QuestionTooltipProps {
  content?: string;
  text?: string;
  tooltip?: string;
}

/**
 * Composant réutilisable pour afficher des tooltips explicatifs sur les questions
 */
const QuestionTooltip: React.FC<QuestionTooltipProps> = ({ content, text, tooltip }) => {
  // Déterminer le contenu à afficher dans l'infobulle
  const tooltipContent = content || tooltip;
  // Déterminer le texte de la question
  const questionText = text || '';
  
  return (
    <>
      {questionText && <span>{questionText}</span>}
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <span className="inline-flex ml-1 cursor-help">
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </span>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-sm">
            {tooltipContent}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default QuestionTooltip;