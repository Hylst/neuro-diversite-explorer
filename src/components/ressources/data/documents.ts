import { Document } from '../types';
import { ROUTES } from '../../../routes';

// Données des documents
// Function to handle document downloads
const getDownloadPath = (filename: string) => `/assets/downloads/${filename}`;

// Updated documents with corrected paths
export const documents: Document[] = [
  {
    id: 19,
    title: "Apprendre quand ton cerveau préfère danser plutôt que rester assis",
    type: "Article",
    description: "Guide pratique pour les esprits dynamiques, curieux… et un peu rétifs aux méthodes scolaires classiques. Découvrez des techniques d'apprentissage actives qui transforment l'étude en mouvement et en plaisir.",
    author: "Geoffroy Streit",
    date: "2025",
    link: ROUTES.RESSOURCES.APPRENDRE_CERVEAU_DANSE,
    size: "Guide pratique"
  },
  {
    id: 18,
    title: "Guide Pratique : Naviguer dans le Labyrinthe des Idées",
    type: "Article",
    description: "Pour les esprits foisonnants qui peinent à structurer leurs pensées et à retenir l'essentiel. Ce guide propose des stratégies pour décharger la mémoire de travail et libérer des ressources mentales au profit de la structuration.",
    author: "Geoffroy Streit",
    date: "2021 - revu 2025",
    link: ROUTES.RESSOURCES.NAVIGATION_LABYRINTHE_IDEES,
    size: "Guide complet"
  },
  {
    id: 17,
    title: "Mémoire et Neurodiversité : Un Labyrinthe aux Multiples Facettes",
    type: "Article",
    description: "Guide complet sur les troubles de la mémoire chez les personnes neurodivergentes. Exploration des différents types de mémoire, leurs atteintes spécifiques et leurs impacts sur le quotidien.",
    author: "Geoffroy Streit",
    date: "2021 - revu 2025",
    link: ROUTES.RESSOURCES.MEMOIRE_NEURODIVERSITE,
    size: "Guide complet"
  },
  {
    id: 16,
    title: "La pensée en ébullition",
    type: "Article",
    description: "Pourquoi certains esprits neurodivergents peinent à structurer leurs idées. Une analyse approfondie des mécanismes cognitifs chez les personnes TDA/H, TSA et présentant des troubles dys.",
    author: "Geoffroy Streit",
    date: "2021 - revu 2025",
    link: "/ressources/pensee-en-ebullition",
    size: "Article complet"
  },
  {
    id: 15,
    title: "Marre d'Apprendre ? Et si c'était la Clé de Toutes les Aventures ?",
    type: "PDF",
    description: "Un guide pour redécouvrir le plaisir d'apprendre et transformer l'apprentissage en aventure passionnante.",
    author: "Geoffroy Streit",
    date: "2025",
    link: getDownloadPath("marre_d_apprendre.pdf"),
    consultLink: "/ressources/marre-apprendre",
    size: "2.1 MB"
  },
  {
    id: 0,
    title: "Explication à un enfant de 8 ans de ce qu'est la neurodiversité",
    type: "PDF",
    description: "Document pédagogique expliquant avec simplicité et bienveillance le concept de neurodiversité aux enfants",
    author: "Geoffroy Streit",
    date: "Mars 2023",
    link: getDownloadPath("explication_neurodiversite_enfant.pdf"),
    consultLink: "/ressources/neurodiversite-enfant",
    size: "2.1 MB"
  },
  {
    id: 1,
    title: "Lettre d'un dyspraxique aux autres dyspraxiques",
    type: "PDF",
    description: "Voyage au cœur de la dyspraxie : témoignage sincère et guide pratique d'un 'expert par expérience' qui partage ses découvertes neuroscientifiques, ses nombreuses stratégies éprouvées et sa vision positive de cette différence neurologique qui transforme chaque geste quotidien en défi mais aussi en source insoupçonnée de forces uniques",
    author: "Geoffroy Streit",
    date: "Mars 2003",
    link: getDownloadPath("lettre_d_un_dyspraxique.pdf"),
    consultLink: "/ressources/lettre-dyspraxique",
    size: "2.1 MB"
  },
  {
    id: 14,
    title: "Ma vie en mode chaos organisé",
    type: "PDF",
    description: "Dans un monde conçu pour les lignes droites, mon cerveau dessine des spirales colorées : bienvenue dans la réalité quotidienne d'un esprit dys/TDA/H, où chaque jour est une aventure imprévisible entre génie créatif et chaos organisé.",
    author: "Geoffroy S.",
    date: "2005",
    link: getDownloadPath("ma_vie_en_mode_chaos_organise.pdf"),
    consultLink: "/ressources/vie-chaos-organise",
    size: "2.3 MB"
  },
  {
    id: 2,
    title: "Guide officiel des troubles neurodéveloppementaux 2025",
    type: "PDF",
    description: "Document de référence de la HAS (Haute Autorité de Santé) avec les dernières recommandations diagnostiques et thérapeutiques",
    author: "Haute Autorité de Santé",
    date: "Janvier 2025",
    link: "https://www.has-sante.fr/jcms/p_3288794/fr/troubles-neurodeveloppementaux",
    size: "4.2 MB"
  },
  {
    id: 3,
    title: "Adaptations scolaires pour élèves à besoins particuliers",
    type: "PDF",
    description: "Guide complet des aménagements pédagogiques reconnus par l'Éducation Nationale pour les élèves neurodivergents",
    author: "Ministère de l'Éducation Nationale",
    date: "Mars 2025",
    link: "https://www.education.gouv.fr/bo/25/Hebdo5/MENE2503538C.htm",
    size: "2.8 MB"
  },
  {
    id: 4,
    title: "Comprendre la dyslexie : guide pratique",
    type: "PDF",
    description: "Document explicatif basé sur les neurosciences actuelles à destination des parents et enseignants",
    author: "Fédération Française des DYS",
    date: "Novembre 2024",
    link: "https://www.ffdys.com/documentation/guide-dyslexie-2024",
    size: "3.1 MB"
  },
  {
    id: 5,
    title: "Guide du TDAH à l'âge adulte",
    type: "PDF",
    description: "Document complet sur les manifestations du TDAH chez l'adulte et les stratégies d'adaptation",
    author: "Association TDAH France",
    date: "Décembre 2024",
    link: "https://www.tdah-france.fr/Guide-TDAH-Adulte-2024.html",
    size: "5.3 MB"
  },
  {
    id: 6,
    title: "Le spectre autistique sans déficience intellectuelle",
    type: "PDF",
    description: "État des connaissances sur l'autisme de niveau 1 (anciennement syndrome d'Asperger)",
    author: "Centre de Ressources Autisme France",
    date: "Février 2025",
    link: "https://gncra.fr/documentation/spectrum-autistique-2025",
    size: "3.7 MB"
  },
  {
    id: 7,
    title: "Outils pratiques pour la dyspraxie",
    type: "PDF",
    description: "Guide d'accompagnement quotidien et présentations de matériels adaptés pour les troubles de la coordination",
    author: "Association Dyspraxie France DYS",
    date: "Janvier 2025",
    link: "https://dyspraxies.fr/ressources/guide-pratique-2025",
    size: "4.5 MB"
  },
  {
    id: 8,
    title: "Guide de l'accessibilité numérique pour les personnes neurodivergentes",
    type: "PDF",
    description: "Recommandations pour adapter les interfaces et contenus numériques aux différents profils neurocognitifs",
    author: "Délégation Ministérielle à l'Accessibilité Numérique",
    date: "Mars 2025",
    link: "https://accessibilite.numerique.gouv.fr/publications/guide-neurodiversite-2025/",
    size: "6.2 MB"
  },
  {
    id: 9,
    title: "Soutenir l'emploi des personnes neurodivergentes",
    type: "PDF",
    description: "Guide pour les employeurs et services RH sur les aménagements raisonnables et la valorisation des talents neurodivergents",
    author: "AGEFIPH & FIPHFP",
    date: "Avril 2025",
    link: "https://www.agefiph.fr/publications/guide-neurodiversite-emploi-2025",
    size: "3.9 MB"
  },
  {
    id: 10,
    title: "Les troubles DYS en milieu scolaire",
    type: "PDF",
    description: "Kit complet pour enseignants avec fiches pratiques par matière et niveau scolaire",
    author: "INSERM & Réseau CANOPÉ",
    date: "Février 2025",
    link: "https://www.reseau-canope.fr/publications/troubles-dys-scolaire-2025",
    size: "8.1 MB"
  },
  {
    id: 11,
    title: "Diagnostic différentiel des troubles neurodéveloppementaux",
    type: "PDF",
    description: "Guide clinique pour professionnels de santé sur les critères diagnostiques et comorbidités",
    author: "Société Française de Psychiatrie de l'Enfant et de l'Adolescent",
    date: "Janvier 2025",
    link: "https://sfpeada.fr/publications/guide-diagnostique-tnd-2025",
    size: "7.3 MB"
  },
  {
    id: 12,
    title: "Dyscalculie et troubles logico-mathématiques",
    type: "PDF",
    description: "Comprendre et accompagner les difficultés mathématiques d'origine neurodéveloppementale",
    author: "Laboratoire Cognisciences - Université Grenoble Alpes",
    date: "Mars 2025",
    link: "https://cognisciences.com/documentation/dyscalculie-2025",
    size: "4.8 MB"
  },
  {
    id: 13,
    title: "Neuropsychologie des apprentissages chez l'enfant",
    type: "PDF",
    description: "Synthèse des connaissances sur le développement cognitif et ses variations",
    author: "Collège de Neuropsychologie",
    date: "Février 2025",
    link: "https://www.ofpn.fr/documentation/neuropsychologie-enfant-2025",
    size: "6.5 MB"
  }
];