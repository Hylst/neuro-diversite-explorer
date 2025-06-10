/**
 * Fichier de configuration centralisé pour les routes de l'application
 * Ce fichier contient toutes les définitions de routes et des fonctions utilitaires
 * pour la génération de routes.
 */

// Définition des routes principales
export const ROUTES = {
  // Pages principales
  HOME: '/',
  COMPRENDRE: '/comprendre',
  CERVEAU: '/cerveau',
  COMMUNAUTE: '/communaute',
  VIVRE_AVEC: '/vivre-avec',
  APPRENTISSAGE: '/apprentissage',
  RECHERCHE: '/recherche',
  AUTO_EVALUATION: '/auto-evaluation',
  PROFILE: '/profile',
  GLOSSAIRE: '/glossaire',
  A_PROPOS: '/a-propos',
  
  // Pages légales
  POLITIQUE_CONFIDENTIALITE: '/politique-confidentialite',
  MENTIONS_LEGALES: '/mentions-legales',
  
  // Section Troubles
  TROUBLES: {
    INDEX: '/troubles',
    DYS: '/troubles/dys',
    DYSLEXIE: '/troubles/dyslexie',
    DYSPHASIE: '/troubles/dysphasie',
    DYSORTHOGRAPHIE: '/troubles/dysorthographie',
    DYSGRAPHIE: '/troubles/dysgraphie',
    TDAH: '/troubles/tdah',
    AUTISME: '/troubles/autisme',
    AUTISME_DETAIL: '/troubles/autisme-detail',
    TSA: '/troubles/tsa',
    DYSPRAXIE: '/troubles/dyspraxie',
    DYSCALCULIE: '/troubles/dyscalculie',
    NEURODEGENERATIFS: '/troubles/neurodegeneratifs',
    POST_TRAUMATIQUES: '/troubles/post-traumatiques',
    LESIONS_CEREBRALES: '/troubles/lesions-cerebrales',
  },
  
  // Section Ressources
  RESSOURCES: {
    INDEX: '/ressources',
    GUIDE_ADMINISTRATIF: '/ressources/guide-administratif',
    STRATEGIES_APPRENTISSAGE: '/ressources/strategies-apprentissage',
    COMMUNICATION: '/ressources/communication',
    APPLICATIONS: '/ressources/applications',
    PLANNINGS: '/ressources/plannings',
    KITS: '/ressources/kits',
    REFLEXION_STRUCTUREE: '/ressources/reflexion-structuree',
    PENSEE_EN_EBULLITION: '/ressources/pensee-en-ebullition',
    NEURODIVERSITE_ENFANT: '/ressources/neurodiversite-enfant',
  },
  
  // Blog
  BLOG: {
    DETAIL: '/blog/:slug',
    IMPORT: '/blog_article_import',
  },
  
  // Page 404
  NOT_FOUND: '*',
};

/**
 * Génère une URL pour un article de blog spécifique
 * @param slug - Le slug de l'article
 * @returns L'URL complète de l'article
 */
export const getBlogUrl = (slug: string): string => {
  return ROUTES.BLOG.DETAIL.replace(':slug', slug);
};

/**
 * Vérifie si une route est active
 * @param path - Le chemin à vérifier
 * @param currentPath - Le chemin actuel (avec HashRouter, ce sera la partie après le #)
 * @returns true si la route est active, false sinon
 */
export const isRouteActive = (path: string, currentPath: string): boolean => {
  // Avec HashRouter, nous devons nous assurer que currentPath ne contient pas le # initial
  const normalizedCurrentPath = currentPath.startsWith('#') ? currentPath.substring(1) : currentPath;
  
  // Gestion spéciale pour la page d'accueil
  if (path === ROUTES.HOME) {
    return normalizedCurrentPath === ROUTES.HOME || normalizedCurrentPath === '';
  }
  
  // Pour les autres routes, vérifie si le chemin actuel commence par le chemin spécifié
  return normalizedCurrentPath.startsWith(path);
};

/**
 * Groupe les routes par catégorie pour faciliter la navigation
 */
export const ROUTE_GROUPS = {
  MAIN: [
    { path: ROUTES.HOME, label: 'Accueil' },
    { path: ROUTES.COMPRENDRE, label: 'Comprendre' },
    { path: ROUTES.CERVEAU, label: 'Le Cerveau' },
    { path: ROUTES.TROUBLES.INDEX, label: 'Troubles' },
    { path: ROUTES.RESSOURCES.INDEX, label: 'Ressources' },
    { path: ROUTES.VIVRE_AVEC, label: 'Vivre Avec' },
    { path: ROUTES.COMMUNAUTE, label: 'Communauté' },
  ],
  TROUBLES: [
    { path: ROUTES.TROUBLES.DYS, label: 'Troubles DYS' },
    { path: ROUTES.TROUBLES.DYSLEXIE, label: 'Dyslexie' },
    { path: ROUTES.TROUBLES.DYSPHASIE, label: 'Dysphasie' },
    { path: ROUTES.TROUBLES.DYSORTHOGRAPHIE, label: 'Dysorthographie' },
    { path: ROUTES.TROUBLES.DYSGRAPHIE, label: 'Dysgraphie' },
    { path: ROUTES.TROUBLES.TDAH, label: 'TDAH' },
    { path: ROUTES.TROUBLES.AUTISME, label: 'Autisme' },
    { path: ROUTES.TROUBLES.TSA, label: 'TSA' },
    { path: ROUTES.TROUBLES.DYSPRAXIE, label: 'Dyspraxie' },
    { path: ROUTES.TROUBLES.DYSCALCULIE, label: 'Dyscalculie' },
    { path: ROUTES.TROUBLES.NEURODEGENERATIFS, label: 'Troubles Neurodégénératifs' },
    { path: ROUTES.TROUBLES.POST_TRAUMATIQUES, label: 'Troubles Post-Traumatiques' },
    { path: ROUTES.TROUBLES.LESIONS_CEREBRALES, label: 'Lésions Cérébrales' },
  ],
  RESSOURCES: [
    { path: ROUTES.RESSOURCES.GUIDE_ADMINISTRATIF, label: 'Guide Administratif' },
    { path: ROUTES.RESSOURCES.STRATEGIES_APPRENTISSAGE, label: 'Stratégies d\'Apprentissage' },
    { path: ROUTES.RESSOURCES.COMMUNICATION, label: 'Communication' },
    { path: ROUTES.RESSOURCES.APPLICATIONS, label: 'Applications' },
    { path: ROUTES.RESSOURCES.PLANNINGS, label: 'Plannings' },
    { path: ROUTES.RESSOURCES.KITS, label: 'Kits' },
  ],
  FOOTER: [
    { path: ROUTES.A_PROPOS, label: 'À Propos' },
    { path: ROUTES.POLITIQUE_CONFIDENTIALITE, label: 'Politique de Confidentialité' },
    { path: ROUTES.MENTIONS_LEGALES, label: 'Mentions Légales' },
    { path: ROUTES.GLOSSAIRE, label: 'Glossaire' },
  ],
};