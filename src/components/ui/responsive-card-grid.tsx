import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveCardGridProps {
  children: ReactNode;
  className?: string;
  columns?: {
    xs?: number; // Mobile par défaut (< 640px)
    sm?: number; // Small (≥ 640px)
    md?: number; // Medium (≥ 768px)
    lg?: number; // Large (≥ 1024px)
    xl?: number; // Extra large (≥ 1280px)
  };
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Composant de grille responsive pour afficher des cartes
 * Adapte automatiquement le nombre de colonnes en fonction de la taille de l'écran
 */
export function ResponsiveCardGrid({
  children,
  className,
  columns = { xs: 1, sm: 2, md: 2, lg: 3 },
  gap = 'md',
}: ResponsiveCardGridProps) {
  // Mapping des valeurs de gap vers des classes Tailwind
  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10',
  };

  // Construction des classes de colonnes responsives
  const gridColsClasses = [
    columns.xs && `grid-cols-${columns.xs}`,
    columns.sm && `sm:grid-cols-${columns.sm}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`,
    columns.xl && `xl:grid-cols-${columns.xl}`,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cn(
        'grid w-full',
        gridColsClasses,
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}