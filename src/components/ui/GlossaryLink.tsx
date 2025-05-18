import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface GlossaryLinkProps {
  term: string;
  children: React.ReactNode;
}

const GlossaryLink: React.FC<GlossaryLinkProps> = ({ term, children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link 
            to={`/glossaire?term=${encodeURIComponent(term)}`} 
            className="text-neuro-purple underline underline-offset-2 decoration-dotted hover:decoration-solid"
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>Voir dans le glossaire</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default GlossaryLink;