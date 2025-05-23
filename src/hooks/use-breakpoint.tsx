import * as React from "react";
import { BREAKPOINTS } from "@/utils/responsive-utils";

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/**
 * Hook amélioré pour la détection des breakpoints
 * Permet de vérifier si l'écran est plus petit qu'un breakpoint spécifique
 * 
 * Exemple d'utilisation:
 * const isMobile = useBreakpoint('md'); // Vrai si l'écran est plus petit que 768px
 * const isTablet = useBreakpoint('lg'); // Vrai si l'écran est plus petit que 1024px
 */
export function useBreakpoint(breakpoint: Breakpoint = 'md') {
  const [isSmaller, setIsSmaller] = React.useState<boolean | undefined>(undefined);
  
  React.useEffect(() => {
    const breakpointValue = BREAKPOINTS[breakpoint];
    const mql = window.matchMedia(`(max-width: ${breakpointValue - 1}px)`);
    
    const onChange = () => {
      setIsSmaller(window.innerWidth < breakpointValue);
    };
    
    mql.addEventListener("change", onChange);
    setIsSmaller(window.innerWidth < breakpointValue);
    
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);
  
  return !!isSmaller;
}

/**
 * Hook pour vérifier si l'écran est mobile (< 768px)
 * Maintenu pour la compatibilité avec le code existant
 */
export function useIsMobile() {
  return useBreakpoint('md');
}

/**
 * Hook pour obtenir la taille d'écran actuelle
 * Retourne un objet avec des booléens pour chaque breakpoint
 */
export function useScreenSize() {
  const [screenSize, setScreenSize] = React.useState({
    isXs: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    isXxl: false,
    width: 0
  });
  
  React.useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isXs: width < BREAKPOINTS.sm,
        isSm: width >= BREAKPOINTS.sm && width < BREAKPOINTS.md,
        isMd: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
        isLg: width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl,
        isXl: width >= BREAKPOINTS.xl && width < BREAKPOINTS.xxl,
        isXxl: width >= BREAKPOINTS.xxl,
        width
      });
    };
    
    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);
  
  return screenSize;
}