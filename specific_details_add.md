# Guide d'implémentation : Système de détails contextuels

## Architecture du système

### 1. Composants React

#### `ContextualDetail.tsx`
Composant principal qui enveloppe un terme avec des détails contextuels.

```tsx
// src/components/ui/ContextualDetail.tsx
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './Dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip';

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
      
      <DialogContent className="max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>{term}</DialogTitle>
        </DialogHeader>
        <div className="contextual-detail-content">
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
```

### 2. Styles CSS

```css
/* src/styles/contextual-details.css */
.contextual-detail-term {
  cursor: help;
  border-bottom: 1px dotted #3b82f6;
  transition: all 0.2s ease;
}

.contextual-detail-term:hover {
  color: #2563eb;
  border-bottom-style: solid;
}

.contextual-detail-content {
  line-height: 1.6;
  padding: 1rem 0;
}
```

### 3. Intégration dans le layout principal

```tsx
// src/layouts/MainLayout.tsx
import { ContextualDetailProvider } from '../components/ui/ContextualDetailProvider';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContextualDetailProvider>
      {/* ... existing layout code ... */}
      {children}
    </ContextualDetailProvider>
  );
}
```