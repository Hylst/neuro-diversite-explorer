import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface GlossaryTermProps {
  term: string;
  definition: string;
  children: React.ReactNode;
  title?: string;
}

/**
 * Composant réutilisable pour afficher des termes du glossaire avec infobulle au survol
 * et boîte de dialogue détaillée au clic
 */
const GlossaryTerm: React.FC<GlossaryTermProps> = ({
  term,
  definition,
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        className="border-dotted border-b-2 border-neuro-purple/70 text-neuro-purple cursor-help hover:bg-neuro-purple/10 transition-colors px-0.5 rounded"
        onClick={() => setIsOpen(true)}
        title={`Cliquez pour plus de détails sur "${term}"`}
      >
        {children}
      </span>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{title || term}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-semibold">Terme:</span> {term}
            </p>
            <div className="prose prose-sm dark:prose-invert">
              {definition}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlossaryTerm;