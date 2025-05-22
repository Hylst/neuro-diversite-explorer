// src/components/ui/ContextualDetail.tsx
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { cn } from '@/lib/utils';

interface ContextualDetailProps {
  term: string;
  shortDescription: string;
  longDescription: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Composant qui ajoute des détails contextuels à un terme ou concept
 * Affiche une infobulle au survol et une boîte de dialogue au clic
 */
export function ContextualDetail({
  term,
  shortDescription,
  longDescription,
  children
}: ContextualDetailProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <DialogTrigger asChild>
            <TooltipTrigger asChild>
              <span className="contextual-detail-term">
                {children || term}
              </span>
            </TooltipTrigger>
          </DialogTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <p>{shortDescription}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <DialogContent className="max-w-md md:max-w-lg contextual-detail-dialog">
        <DialogHeader>
          <DialogTitle>{term}</DialogTitle>
        </DialogHeader>
        <div className="contextual-detail-content dark:text-foreground">
          {typeof longDescription === 'string' ? (
            <p>{longDescription}</p>
          ) : (
            longDescription
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}