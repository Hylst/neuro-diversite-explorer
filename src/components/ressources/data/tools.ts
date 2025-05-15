import { Tool } from '../types';

// Données des outils
export const tools: Tool[] = [
  {
    id: 1,
    title: "FlashStudy - Version de base",
    platform: "Web",
    type: "Application",
    audience: "Tous profils, Troubles d'apprentissage",
    description: "Créateur de flashcards pour l'apprentissage avec interface intuitive, modes d'édition et de révision",
    link: "/apps/flash_study_base.html",
    price: "Gratuit",
    thumbnail: "/apps/flash_study_base.png"
  },
  {
    id: 2,
    title: "FlashStudy - Version avancée",
    platform: "Web",
    type: "Application",
    audience: "Tous profils, Troubles d'apprentissage",
    description: "Version améliorée avec spaced repetition, suivi des performances et import/export Anki",
    link: "/apps/flash_study_v2wip.html",
    price: "Gratuit",
    thumbnail: "/apps/flash_study_v2wip.png"
  },
  {
    id: 3,
    title: "NeuroTimer Pro",
    platform: "iOS/Android",
    type: "Application",
    audience: "TDAH, Autisme",
    description: "Timer visuel intuitif avec fonctionnalités avancées de gestion du temps et intégration calendrier",
    link: "https://neurotimer.app",
    price: "Gratuit / Version premium 4,99€/mois"
  },
  {
    id: 4,
    title: "Lexibar 2025",
    platform: "Windows/Mac/iOS/Android",
    type: "Logiciel",
    audience: "Dyslexie, Dysorthographie",
    description: "Assistant d'écriture avec prédiction orthographique, synthèse vocale et correction contextuelle intelligente",
    link: "https://www.lexibar.fr",
    price: "Essai gratuit / Licence 129€ / Remboursement MDPH possible"
  },
  {
    id: 5,
    title: "Kit d'organisation visuelle NumériDYS",
    platform: "Matériel physique + application",
    type: "Outil hybride",
    audience: "TSA, TDAH",
    description: "Ensemble de plannings magnétiques avec synchronisation application via QR codes",
    link: "https://numeridys.fr",
    price: "69,90€"
  },
  {
    id: 6,
    title: "C-Pen Reader 3",
    platform: "Appareil autonome",
    type: "Outil physique",
    audience: "Dyslexie, Dyspraxie",
    description: "Stylo-scanner qui numérise et lit les textes à haute voix, avec traduction intégrée et exportation numérique",
    link: "https://cpen.fr",
    price: "249€ (remboursement partiel possible)"
  },
  {
    id: 7,
    title: "FocusMind",
    platform: "Web/iOS/Android",
    type: "Application",
    audience: "TDAH, Troubles exécutifs",
    description: "Assistant de productivité basé sur des techniques cognitives spécifiques aux profils TDAH",
    link: "https://focusmind.app",
    price: "Freemium / 7,99€ par mois"
  },
  {
    id: 8,
    title: "Math DYScovery",
    platform: "iOS/Android/Web",
    type: "Application",
    audience: "Dyscalculie",
    description: "Application d'apprentissage des mathématiques adaptée aux troubles logico-mathématiques",
    link: "https://mathdyscovery.fr",
    price: "Gratuit (financé par l'Education Nationale)",
    thumbnail: "/apps/mathdyscovery.png"
  },
  {
    id: 9,
    title: "Clavier TalkTyper",
    platform: "iOS/Android",
    type: "Application",
    audience: "Dyspraxie, Dysorthographie",
    description: "Clavier virtuel avec prédiction avancée et possibilité de dicter intégrée à toutes les applications",
    link: "https://talktyper.org",
    price: "2,99€"
  },
  {
    id: 10,
    title: "NeuroCalm",
    platform: "iOS/Android + casque bluetooth",
    type: "Outil hybride",
    audience: "TSA, Hypersensibilité",
    description: "Application + casque de réduction de bruit adaptative avec filtrage sélectif des fréquences sensibles",
    link: "https://neurocalm.tech",
    price: "Application gratuite / Casque 189€",
    thumbnail: "/apps/neurocalm.png"
  },
  {
    id: 11,
    title: "MémoAlz",
    platform: "iOS/Android",
    type: "Application",
    audience: "Maladie d'Alzheimer, Troubles mnésiques",
    description: "Assistant numérique pour personnes atteintes d'Alzheimer avec rappels, reconnaissance faciale et géolocalisation",
    link: "https://memoalz.org",
    price: "Gratuit (projet soutenu par France Alzheimer)"
  },
  {
    id: 12,
    title: "TremControl",
    platform: "Appareil connecté",
    type: "Outil physique",
    audience: "Maladie de Parkinson",
    description: "Ustensiles stabilisateurs et applications connectées pour réduire l'impact des tremblements",
    link: "https://tremcontrol.com",
    price: "Kit de base 159€ / Remboursement partiel CPAM"
  }
];