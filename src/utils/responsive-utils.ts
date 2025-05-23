/**
 * Utilitaires pour améliorer l'expérience responsive et mobile
 */

// Définition des breakpoints standard de l'application
export const BREAKPOINTS = {
  xs: 480,  // Extra small devices
  sm: 640,  // Small devices
  md: 768,  // Medium devices (tablettes)
  lg: 1024, // Large devices (desktop)
  xl: 1280, // Extra large devices
  xxl: 1536 // Extra extra large devices
};

/**
 * Fonction pour générer des styles CSS conditionnels basés sur la taille de l'écran
 * Utile pour les styles inline qui doivent changer en fonction de la taille de l'écran
 */
export function getResponsiveValue<T>(values: {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}, currentWidth: number): T {
  if (currentWidth >= BREAKPOINTS.xl && values.xl !== undefined) {
    return values.xl;
  }
  if (currentWidth >= BREAKPOINTS.lg && values.lg !== undefined) {
    return values.lg;
  }
  if (currentWidth >= BREAKPOINTS.md && values.md !== undefined) {
    return values.md;
  }
  if (currentWidth >= BREAKPOINTS.sm && values.sm !== undefined) {
    return values.sm;
  }
  return values.base;
}

/**
 * Fonction pour tronquer le texte en fonction de la taille de l'écran
 * Utile pour les titres et descriptions qui doivent être plus courts sur mobile
 */
export function truncateTextByScreenSize(text: string, options: {
  mobile: number;
  tablet?: number;
  desktop?: number;
}, currentWidth: number): string {
  let maxLength = options.mobile; // Valeur par défaut pour mobile
  
  if (currentWidth >= BREAKPOINTS.lg && options.desktop !== undefined) {
    maxLength = options.desktop;
  } else if (currentWidth >= BREAKPOINTS.md && options.tablet !== undefined) {
    maxLength = options.tablet;
  }
  
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.substring(0, maxLength) + '...';
}

/**
 * Fonction pour ajuster le nombre d'éléments affichés en fonction de la taille de l'écran
 * Utile pour les listes, grilles et carousels
 */
export function limitItemsByScreenSize<T>(items: T[], options: {
  mobile: number;
  tablet?: number;
  desktop?: number;
}, currentWidth: number): T[] {
  let maxItems = options.mobile; // Valeur par défaut pour mobile
  
  if (currentWidth >= BREAKPOINTS.lg && options.desktop !== undefined) {
    maxItems = options.desktop;
  } else if (currentWidth >= BREAKPOINTS.md && options.tablet !== undefined) {
    maxItems = options.tablet;
  }
  
  return items.slice(0, maxItems);
}

/**
 * Fonction pour déterminer si l'interface doit utiliser une mise en page simplifiée sur mobile
 * Utile pour les composants complexes qui doivent être simplifiés sur petit écran
 */
export function shouldUseSimplifiedLayout(currentWidth: number, threshold = BREAKPOINTS.md): boolean {
  return currentWidth < threshold;
}