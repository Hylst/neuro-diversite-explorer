
import React from 'react';
import { GlossaryTerm as GlossaryTermType } from '@/data/glossaryTerms';

interface GlossaryTermProps {
  term: GlossaryTermType;
}

export const GlossaryTermComponent = ({ term }: GlossaryTermProps) => {
  return (
    <div className="p-4 rounded-lg border bg-card transition-all hover:shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-neuro-purple">{term.term}</h3>
      <p className="text-muted-foreground">{term.definition}</p>
    </div>
  );
};
