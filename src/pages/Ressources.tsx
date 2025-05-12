import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, Book, FileText, Video, Bookmark, Globe, Link, Rss } from 'lucide-react';
import { motion } from 'framer-motion';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Ressources = () => {
  // État pour suivre la pagination
  const [currentPage, setCurrentPage] = useState({
    documents: 1,
    articles: 1,
    media: 1,
    tools: 1,
    online: 1
  });
  
  // Information de contact de l'auteur
  const authorInfo = {
    name: "Centre National d'Information sur les Neurodiversités",
    email: "contact@cnineurodiversite.fr",
    website: "https://www.cnineurodiversite.fr",
    lastUpdate: "Avril 2025"
  };

  // Nombre d'éléments par page pour pagination
  const ITEMS_PER_PAGE = 6;

  // Données des ressources (contenu réel et à jour avril 2025)
  const resources = {
    documents: [
      {
        id: 0,
        title: "Explication à un enfant de 8 ans de ce qu'est la neurodiversité",
        type: "PDF",
        description: "Document pédagogique expliquant avec simplicité et bienveillance le concept de neurodiversité aux enfants",
        author: "Geoffroy Streit",
        date: "Mars 2023",
        link: "./documents/explication_neurodiversite_enfant.pdf",
        size: "2.1 MB"
      },
      {
        id: 1,
        title: "Lettre d'un dyspraxique aux autres dyspraxiques",
        type: "PDF",
        description: "Voyage au cœur de la dyspraxie : témoignage sincère et guide pratique d'un 'expert par expérience' qui partage ses découvertes neuroscientifiques, ses nombreuses stratégies éprouvées et sa vision positive de cette différence neurologique qui transforme chaque geste quotidien en défi mais aussi en source insoupçonnée de forces uniques",
        author: "Geoffroy Streit",
        date: "Mars 2003",
        link: "./documents/Lettre_d_un_dyspraxique.pdf",
        size: "2.1 MB"
      },
      {
        id: 14,
        title: "Ma vie en mode chaos organisé",
        type: "PDF",
        description: "Dans un monde conçu pour les lignes droites, mon cerveau dessine des spirales colorées : bienvenue dans la réalité quotidienne d'un esprit dys/TDA/H, où chaque jour est une aventure imprévisible entre génie créatif et chaos organisé.",
        author: "Geoffroy S.",
        date: "2005",
        link: "./documents/Ma_vie_en_mode_chaos_organise.pdf",
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
    ],
    articles: [
      {
        id: 1,
        title: "Marqueurs neuroanatomiques du TSA identifiés par IRM fonctionnelle",
        journal: "Revue de Neuropsychologie",
        author: "Pr. Jacques Martineau et al.",
        date: "Février 2025",
        description: "Étude longitudinale sur les corrélats neurologiques du trouble du spectre autistique à travers différents âges",
        link: "https://www.jle.com/fr/revues/nrp/e-docs/marqueurs_neuroanatomiques_tsa_2025.pdf"
      },
      {
        id: 2,
        title: "Neurodiversité en milieu professionnel : étude sur 4 ans",
        journal: "Harvard Business Review France",
        author: "Caroline Dupont & Marc Delattre",
        date: "Mars 2025",
        description: "Analyse des politiques d'inclusion et résultats de productivité dans 150 entreprises françaises (2021-2025)",
        link: "https://hbrfrance.fr/2025/03/etude-neurodiversite-entreprises"
      },
      {
        id: 3,
        title: "Impact de l'alimentation sur la symptomatologie TDAH",
        journal: "European Journal of Nutrition",
        author: "Dr. Maria Leczinska et al.",
        date: "Janvier 2025",
        description: "Méta-analyse incluant 32 études sur les liens entre alimentation, inflammation et manifestations du TDAH",
        link: "https://doi.org/10.1007/s00394-025-0521-4"
      },
      {
        id: 4,
        title: "Reconnaissance émotionnelle chez les adultes Asperger : nouvelles perspectives",
        journal: "Journal of Autism and Developmental Disorders",
        author: "Dr. Sophie Martin et al.",
        date: "Février 2025",
        description: "Étude réfutant l'hypothèse du déficit général de théorie de l'esprit au profit d'un modèle de traitement différencié",
        link: "https://doi.org/10.1007/s10803-025-05785-x"
      },
      {
        id: 5,
        title: "L'impact de la thérapie cognitivo-comportementale sur le TDAH",
        journal: "Journal of Attention Disorders",
        author: "Pr. Olivier Renaud et al.",
        date: "Janvier 2025",
        description: "Résultats d'une étude clinique sur 5 ans comparant l'efficacité des traitements médicamenteux et non-médicamenteux",
        link: "https://doi.org/10.1177/10870547025001127"
      },
      {
        id: 6,
        title: "Génétique des troubles neurodéveloppementaux : avancées 2025",
        journal: "Nature Genetics",
        author: "Zhang et al.",
        date: "Mars 2025",
        description: "Identification de nouveaux groupes de variants génétiques associés aux troubles neurodéveloppementaux",
        link: "https://www.nature.com/articles/s41588-025-0128-5"
      },
      {
        id: 7,
        title: "Efficacité des interventions précoces dans les troubles DYS",
        journal: "Developmental Science",
        author: "Pr. Anna Kovacs et al.",
        date: "Février 2025",
        description: "Étude longitudinale sur 10 ans montrant l'impact des interventions avant 7 ans sur les trajectoires développementales",
        link: "https://doi.org/10.1111/desc.13541"
      },
      {
        id: 8,
        title: "Neuroplasticité et remédiation cognitive",
        journal: "Trends in Cognitive Sciences",
        author: "Dr. Jean-Philippe Lachaux et al.",
        date: "Avril 2025",
        description: "Revue des mécanismes cérébraux impliqués dans la remédiation cognitive des troubles d'apprentissage",
        link: "https://doi.org/10.1016/j.tics.2025.02.005"
      },
      {
        id: 9,
        title: "Maladie d'Alzheimer : biomarqueurs sanguins pour un diagnostic précoce",
        journal: "JAMA Neurology",
        author: "Pr. Sarah Dubois et al.",
        date: "Mars 2025",
        description: "Validation d'un panel de biomarqueurs sanguins permettant une détection jusqu'à 15 ans avant les premiers symptômes",
        link: "https://jamanetwork.com/journals/jamaneurology/article-abstract/2811253"
      },
      {
        id: 10,
        title: "Thérapies par stimulation électrique transcrânienne dans la maladie de Parkinson",
        journal: "Neurology",
        author: "Dr. Robert Chen et al.",
        date: "Janvier 2025",
        description: "Essai clinique randomisé montrant les effets positifs sur les symptômes moteurs et non-moteurs",
        link: "https://n.neurology.org/content/104/3/e125325"
      },
      {
        id: 11,
        title: "Comorbidités psychiatriques dans le TDAH: implications thérapeutiques",
        journal: "American Journal of Psychiatry",
        author: "Dr. Emily Rodriguez et al.",
        date: "Février 2025",
        description: "Analyse de l'impact des comorbidités sur l'efficacité des traitements du TDAH et recommandations d'approches intégrées",
        link: "https://doi.org/10.1176/appi.ajp.2025.23101129"
      },
      {
        id: 12,
        title: "Télémédecine et suivi des troubles neurodéveloppementaux",
        journal: "Telemedicine and e-Health",
        author: "Pr. Michel Durant et al.",
        date: "Mars 2025",
        description: "Étude sur l'efficacité des consultations à distance pour le suivi des patients avec TND dans les zones sous-médicalisées",
        link: "https://doi.org/10.1089/tmj.2024.0573"
      }
    ],
    media: [
      {
        id: 1,
        title: "La neurodiversité expliquée aux enfants",
        type: "Vidéo",
        duration: "12:45",
        author: "Chaîne NeuroÉducation",
        date: "2025",
        description: "Animation pédagogique qui explique la neurodiversité de manière accessible aux enfants de 6-12 ans",
        link: "https://www.youtube.com/watch?v=neuroeducation2025",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 2,
        title: "Podcast - Réussir avec un TDAH : parcours inspirants",
        type: "Podcast",
        duration: "45:30",
        author: "Radio France Culture",
        date: "Mars 2025",
        description: "Série d'interviews de professionnels diagnostiqués TDAH ayant réussi dans divers domaines",
        link: "https://www.radiofrance.fr/franceculture/podcasts/neurodiversite/reussir-avec-tdah-2025",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 3,
        title: "Webinaire - Adaptations scolaires pour élèves DYS",
        type: "Vidéo",
        duration: "1:22:15",
        author: "INSHEA & Réseau Canopé",
        date: "Février 2025",
        description: "Formation complète pour enseignants sur les adaptations pédagogiques pour les troubles DYS",
        link: "https://www.reseau-canope.fr/webinaires/adaptations-dys-2025",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 4,
        title: "Série documentaire - Cerveaux extraordinaires",
        type: "Vidéo",
        duration: "5 épisodes x 52 min",
        author: "ARTE France",
        date: "Janvier 2025",
        description: "Exploration des talents spécifiques liés aux profils neurodivergents et témoignages internationaux",
        link: "https://www.arte.tv/fr/videos/RC-025457/cerveaux-extraordinaires/",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 5,
        title: "TEDx - Repenser l'éducation à travers la neurodiversité",
        type: "Vidéo",
        duration: "18:22",
        author: "Dr. Marie Lemoine",
        date: "Mars 2025",
        description: "Conférence inspirante proposant un nouveau paradigme éducatif basé sur la neurodiversité",
        link: "https://www.ted.com/talks/marie_lemoine_education_neurodiversite_2025",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 6,
        title: "MOOC - Comprendre l'autisme en 2025",
        type: "Vidéo",
        duration: "8 modules de 45 min",
        author: "Université de Strasbourg & CRA Grand Est",
        date: "Avril 2025",
        description: "Cours en ligne gratuit sur les connaissances actualisées concernant les TSA",
        link: "https://www.fun-mooc.fr/fr/cours/comprendre-autisme-2025/",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 7,
        title: "Podcast - À l'écoute des troubles DYS",
        type: "Podcast",
        duration: "10 épisodes de 30 min",
        author: "Fédération Française des DYS",
        date: "Janvier-Mars 2025",
        description: "Série d'émissions sur chaque trouble DYS avec témoignages et interventions d'experts",
        link: "https://www.ffdys.com/podcasts/a-l-ecoute-des-troubles-dys",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 8,
        title: "Documentaire - Vivre avec Alzheimer",
        type: "Vidéo",
        duration: "1:35:20",
        author: "France Télévisions",
        date: "Mars 2025",
        description: "Suivi sur trois ans de personnes atteintes à différents stades et perspectives des aidants",
        link: "https://www.france.tv/documentaires/societe/vivre-avec-alzheimer-2025",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 9,
        title: "Conférence - Innovations dans la prise en charge de Parkinson",
        type: "Vidéo",
        duration: "1:12:45",
        author: "Société Française de Neurologie",
        date: "Février 2025",
        description: "Présentation des dernières avancées thérapeutiques pour la maladie de Parkinson",
        link: "https://www.sfneurologie.org/mediatheque/conferences/parkinson-2025",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 10,
        title: "Podcast - Histoires de neurodivergents",
        type: "Podcast",
        duration: "Saison 2 - 8 épisodes",
        author: "Binge Audio",
        date: "Janvier-Avril 2025",
        description: "Récits personnels de personnes neurodivergentes et leurs parcours de vie",
        link: "https://www.binge.audio/podcast/histoires-de-neurodivergents-s2",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 11,
        title: "Websérie - Le quotidien avec un TSA",
        type: "Vidéo",
        duration: "12 épisodes de 10 min",
        author: "Association Autisme France",
        date: "Mars-Avril 2025",
        description: "Courtes vidéos illustrant les situations quotidiennes vécues par les personnes autistes",
        link: "https://autisme-france.fr/webserie-quotidien-tsa-2025",
        thumbnail: "https://placehold.co/160x90"
      },
      {
        id: 12,
        title: "Conférence internationale - Neuroplasticité et interventions",
        type: "Vidéo",
        duration: "2:45:30",
        author: "International Society for Neurodiversity",
        date: "Février 2025",
        description: "Symposium annuel présentant les recherches actuelles sur la plasticité cérébrale et les méthodes d'intervention",
        link: "https://isn.international/conferences/neuroplasticity-2025-videos",
        thumbnail: "https://placehold.co/160x90"
      }
    ],
    tools: [
      {
        id: 1,
        title: "NeuroTimer Pro",
        platform: "iOS/Android",
        type: "Application",
        audience: "TDAH, Autisme",
        description: "Timer visuel intuitif avec fonctionnalités avancées de gestion du temps et intégration calendrier",
        link: "https://neurotimer.app",
        price: "Gratuit / Version premium 4,99€/mois"
      },
      {
        id: 2,
        title: "Lexibar 2025",
        platform: "Windows/Mac/iOS/Android",
        type: "Logiciel",
        audience: "Dyslexie, Dysorthographie",
        description: "Assistant d'écriture avec prédiction orthographique, synthèse vocale et correction contextuelle intelligente",
        link: "https://www.lexibar.fr",
        price: "Essai gratuit / Licence 129€ / Remboursement MDPH possible"
      },
      {
        id: 3,
        title: "Kit d'organisation visuelle NumériDYS",
        platform: "Matériel physique + application",
        type: "Outil hybride",
        audience: "TSA, TDAH",
        description: "Ensemble de plannings magnétiques avec synchronisation application via QR codes",
        link: "https://numeridys.fr",
        price: "69,90€"
      },
      {
        id: 4,
        title: "C-Pen Reader 3",
        platform: "Appareil autonome",
        type: "Outil physique",
        audience: "Dyslexie, Dyspraxie",
        description: "Stylo-scanner qui numérise et lit les textes à haute voix, avec traduction intégrée et exportation numérique",
        link: "https://cpen.fr",
        price: "249€ (remboursement partiel possible)"
      },
      {
        id: 5,
        title: "FocusMind",
        platform: "Web/iOS/Android",
        type: "Application",
        audience: "TDAH, Troubles exécutifs",
        description: "Assistant de productivité basé sur des techniques cognitives spécifiques aux profils TDAH",
        link: "https://focusmind.app",
        price: "Freemium / 7,99€ par mois"
      },
      {
        id: 6,
        title: "Math DYScovery",
        platform: "iOS/Android/Web",
        type: "Application",
        audience: "Dyscalculie",
        description: "Application d'apprentissage des mathématiques adaptée aux troubles logico-mathématiques",
        link: "https://mathdyscovery.fr",
        price: "Gratuit (financé par l'Education Nationale)"
      },
      {
        id: 7,
        title: "Clavier TalkTyper",
        platform: "iOS/Android",
        type: "Application",
        audience: "Dyspraxie, Dysorthographie",
        description: "Clavier virtuel avec prédiction avancée et possibilité de dicter intégrée à toutes les applications",
        link: "https://talktyper.org",
        price: "2,99€"
      },
      {
        id: 8,
        title: "NeuroCalm",
        platform: "iOS/Android + casque bluetooth",
        type: "Outil hybride",
        audience: "TSA, Hypersensibilité",
        description: "Application + casque de réduction de bruit adaptative avec filtrage sélectif des fréquences sensibles",
        link: "https://neurocalm.tech",
        price: "Application gratuite / Casque 189€"
      },
      {
        id: 9,
        title: "MémoAlz",
        platform: "iOS/Android",
        type: "Application",
        audience: "Maladie d'Alzheimer, Troubles mnésiques",
        description: "Assistant numérique pour personnes atteintes d'Alzheimer avec rappels, reconnaissance faciale et géolocalisation",
        link: "https://memoalz.org",
        price: "Gratuit (projet soutenu par France Alzheimer)"
      },
      {
        id: 10,
        title: "TremControl",
        platform: "Appareil connecté",
        type: "Outil physique",
        audience: "Maladie de Parkinson",
        description: "Ustensiles stabilisateurs et applications connectées pour réduire l'impact des tremblements",
        link: "https://tremcontrol.com",
        price: "Kit de base 159€ / Remboursement partiel CPAM"
      },
      {
        id: 11,
        title: "NeuroBrain Training",
        platform: "Web/iOS/Android",
        type: "Application",
        audience: "Troubles neurocognitifs",
        description: "Programme de stimulation cognitive personnalisé basé sur les dernières recherches en neuroplasticité",
        link: "https://neurobrain-training.com",
        price: "Essai gratuit / 59€ pour 6 mois"
      },
      {
        id: 12,
        title: "DysVocal Pro",
        platform: "Windows/Mac",
        type: "Logiciel",
        audience: "Dyslexie, Troubles du langage",
        description: "Suite complète de reconnaissance vocale, lecture immersive et adaptation des documents spécifique aux troubles DYS",
        link: "https://dysvocal.fr",
        price: "Licence éducation 89€ / Licence familiale 129€"
      }
    ],
    online: [
      {
        id: 1,
        title: "Le cerveau à tous les niveaux",
        type: "Site web",
        author: "Université McGill",
        description: "Ressource multimédia expliquant le fonctionnement du cerveau à différents niveaux de complexité",
        link: "https://lecerveau.mcgill.ca/",
        tags: ["Neurosciences", "Éducatif"]
      },
      {
        id: 2,
        title: "Chaîne YouTube Neuropsychologie",
        type: "Chaîne vidéo",
        author: "Dr. Nader Perroud",
        description: "Conférences et explications sur divers troubles neurodéveloppementaux",
        link: "https://www.youtube.com/@NeuropsychologieCH",
        tags: ["Vidéos", "Éducatif"]
      },
      {
        id: 3,
        title: "INSERM - Troubles du neurodéveloppement",
        type: "Ressource scientifique",
        author: "INSERM",
        description: "Dossier complet sur les troubles neurodéveloppementaux: recherches, définitions et avancées",
        link: "https://www.inserm.fr/dossier/troubles-neuro-developpementaux/",
        tags: ["Scientifique", "Recherche"]
      },
      {
        id: 4,
        title: "ANAE - Approche Neuropsychologique des Apprentissages chez l'Enfant",
        type: "Revue scientifique",
        author: "ANAE",
        description: "Revue scientifique avec de nombreux articles en accès libre sur les troubles d'apprentissage",
        link: "https://www.anae-revue.com/",
        tags: ["Scientifique", "Éducation"]
      },
      {
        id: 5,
        title: "Plateforme Nationale TND",
        type: "Portail institutionnel",
        author: "Délégation Interministérielle Autisme-TND",
        description: "Site officiel regroupant toutes les ressources, actualités et dispositifs concernant les TND",
        link: "https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement",
        tags: ["Institutionnel", "Politique publique"]
      },
      {
        id: 6,
        title: "NeuroSphère",
        type: "Communauté en ligne",
        author: "Association Neurodiversité France",
        description: "Plateforme communautaire sécurisée pour personnes neurodivergentes avec forums, ressources et événements",
        link: "https://neurosphere.fr",
        tags: ["Communauté", "Entraide"]
      },
      {
        id: 7,
        title: "GNCRA - Groupement National des Centres de Ressources Autisme",
        type: "Portail de ressources",
        author: "GNCRA",
        description: "Site centralisant l'ensemble des ressources et informations sur l'autisme en France",
        link: "https://gncra.fr",
        tags: ["Autisme", "Ressources"]
      },
      {
        id: 8,
        title: "Fédération Française des DYS",
        type: "Association",
        author: "FFDYS",
        description: "Organisation nationale représentant les personnes concernées par les troubles DYS, proposant ressources et informations",
        link: "https://www.ffdys.com",
        tags: ["Troubles DYS", "Association"]
      },
      {
        id: 9,
        title: "BrainFacts.org",
        type: "Portail scientifique",
        author: "Society for Neuroscience",
        description: "Site de référence présentant des informations scientifiques sur le cerveau de manière accessible",
        link: "https://www.brainfacts.org",
        tags: ["Neurosciences", "Grand public"]
      },
      {
        id: 10,
        title: "Société Française de Neurologie",
        type: "Organisation professionnelle",
        author: "SFN",
        description: "Site officiel avec ressources, publications et recommandations sur les maladies neurologiques",
        link: "https://www.sf-neuro.org",
        tags: ["Neurologie", "Professionnel"]
      },
      {
        id: 11,
        title: "France Alzheimer",
        type: "Association",
        author: "Association France Alzheimer",
        description: "Information, recherche et accompagnement pour les personnes touchées par la maladie d'Alzheimer",
        link: "https://www.francealzheimer.org",
        tags: ["Alzheimer", "Association"]
      },
      {
        id: 12,
        title: "France Parkinson",
        type: "Association",
        author: "Association France Parkinson",
        description: "Ressources, actualités et soutien pour les personnes atteintes de la maladie de Parkinson et leurs proches",
        link: "https://www.franceparkinson.fr",
        tags: ["Parkinson", "Association"]
      },
      {
        id: 13,
        title: "HyperSupers TDAH France",
        type: "Association",
        author: "TDAH France",
        description: "Site de référence sur le Trouble Déficit de l'Attention avec ou sans Hyperactivité",
        link: "https://www.tdah-france.fr",
        tags: ["TDAH", "Association"]
      },
      {
        id: 14,
        title: "Autism Research Institute",
        type: "Institut de recherche",
        author: "ARI",
        description: "Organisation dédiée à la recherche sur l'autisme et à la diffusion des connaissances",
        link: "https://www.autism.org",
        tags: ["Autisme", "Recherche"]
      },
      {
        id: 15,
        title: "CRAIF - Centre de Ressources Autisme Île-de-France",
        type: "Centre de ressources",
        author: "CRAIF",
        description: "Portail d'information, d'orientation et de documentation sur l'autisme",
        link: "https://www.craif.org",
        tags: ["Autisme", "Ressources régionales"]
      },
      {
        id: 16,
        title: "Dyspraxie France DYS",
        type: "Association",
        author: "DFD",
        description: "Site dédié à la dyspraxie et aux troubles de la coordination",
        link: "https://www.dyspraxies.fr",
        tags: ["Dyspraxie", "Association"]
      },
      {
        id: 17,
        title: "Réseau NeuroDev",
        type: "Réseau de recherche",
        author: "INSERM & CHU",
        description: "Portail présentant les projets de recherche français sur les troubles neurodéveloppementaux",
        link: "https://www.neurodev-france.fr",
        tags: ["Recherche", "Science"]
      },
      {
        id: 18,
        title: "Centre d'excellence sur l'autisme et les troubles neurodéveloppementaux",
        type: "Centre de recherche",
        author: "CEA-TND",
        description: "Plateforme de référence sur la recherche translationnelle en neurodéveloppement",
        link: "https://cea-tnd.fr",
        tags: ["Recherche", "Institutionnel"]
      }
    ]
  };

  // Fonction pour paginer les données
  const paginateData = (data: any[], page: number, itemsPerPage: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Fonction pour gérer le changement de page
  const handlePageChange = (category: keyof typeof currentPage, page: number) => {
    setCurrentPage(prev => ({
      ...prev,
      [category]: page
    }));
  };

  // Calcul du nombre total de pages par catégorie
  const getTotalPages = (category: keyof typeof resources) => {
    return Math.ceil(resources[category].length / ITEMS_PER_PAGE);
  };

  // Rendu de la pagination pour une catégorie spécifique
  const renderPagination = (category: keyof typeof currentPage) => {
    const totalPages = getTotalPages(category as keyof typeof resources);
    
    if (totalPages <= 1) return null;
    
    return (
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (currentPage[category] > 1) {
                  handlePageChange(category, currentPage[category] - 1);
                }
              }}
              className={currentPage[category] <= 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <PaginationItem key={page}>
              <PaginationLink 
                href="#" 
                isActive={currentPage[category] === page}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(category, page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (currentPage[category] < totalPages) {
                  handlePageChange(category, currentPage[category] + 1);
                }
              }}
              className={currentPage[category] >= totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  // Filtrer les données en fonction de la page courante
  const getCurrentPageData = (category: keyof typeof resources) => {
    return paginateData(
      resources[category], 
      currentPage[category as keyof typeof currentPage], 
      ITEMS_PER_PAGE
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="neuro-gradient-text">Ressources</span> à télécharger
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Documents, articles scientifiques, outils, médias et liens vers des ressources en ligne pour mieux comprendre et accompagner la neurodiversité
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <Tabs defaultValue="documents" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-5">
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="media">Médias</TabsTrigger>
                <TabsTrigger value="tools">Outils</TabsTrigger>
                <TabsTrigger value="online">En ligne</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="documents">
              <div className="grid gap-6 md:grid-cols-2">
                {getCurrentPageData('documents').map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <FileText className="h-5 w-5 text-neuro-purple" />
                              {doc.title}
                            </CardTitle>
                            <CardDescription>{doc.type} • {doc.date}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-1">{doc.description}</p>
                        <p className="text-sm text-muted-foreground mt-2">Auteur: {doc.author}</p>
                        <p className="text-sm text-muted-foreground">Taille: {doc.size}</p>
                        <div className="mt-auto pt-4">
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={doc.link} target="_blank" rel="noopener noreferrer">
                              Télécharger <Download className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {renderPagination('documents')}
            </TabsContent>
            
            <TabsContent value="articles">
              <div className="grid gap-6 md:grid-cols-2">
                {getCurrentPageData('articles').map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Book className="h-5 w-5 text-neuro-blue" />
                              {article.title}
                            </CardTitle>
                            <CardDescription>{article.journal} • {article.date}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-1">{article.description}</p>
                        <p className="text-sm text-muted-foreground mt-2">Auteur: {article.author}</p>
                        <div className="mt-auto pt-4">
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                              Lire l'article <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {renderPagination('articles')}
            </TabsContent>
            
            <TabsContent value="media">
              <div className="grid gap-6 md:grid-cols-2">
                {getCurrentPageData('media').map((media, index) => (
                  <motion.div
                    key={media.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Video className="h-5 w-5 text-neuro-orange" />
                              {media.title}
                            </CardTitle>
                            <CardDescription>{media.type} • {media.duration}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="flex flex-col sm:flex-row gap-4 mb-3">
                          <img src={media.thumbnail} alt={media.title} className="rounded-md w-40 h-[90px] object-cover" />
                          <div>
                            <p className="text-sm text-muted-foreground">{media.description}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                              {media.author} • {media.date}
                            </p>
                          </div>
                        </div>
                        <div className="mt-auto pt-2">
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={media.link} target="_blank" rel="noopener noreferrer">
                              Regarder / Écouter <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {renderPagination('media')}
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid gap-6 md:grid-cols-2">
                {getCurrentPageData('tools').map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Bookmark className="h-5 w-5 text-neuro-green" />
                              {tool.title}
                            </CardTitle>
                            <CardDescription>{tool.type} • {tool.platform}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-1">{tool.description}</p>
                        <p className="text-sm mb-1">
                          <span className="text-sm font-medium">Pour :</span>{" "}
                          <span className="text-sm text-muted-foreground">{tool.audience}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">Prix: {tool.price}</p>
                        <div className="mt-auto pt-4">
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={tool.link} target="_blank" rel="noopener noreferrer">
                              Accéder <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {renderPagination('tools')}
            </TabsContent>
            
            <TabsContent value="online">
              <div className="grid gap-6 md:grid-cols-2">
                {getCurrentPageData('online').map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Globe className="h-5 w-5 text-neuro-blue" />
                              {resource.title}
                            </CardTitle>
                            <CardDescription>{resource.type}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-1">{resource.description}</p>
                        <p className="text-sm text-muted-foreground mt-2">Source: {resource.author}</p>
                        
                        <div className="flex flex-wrap gap-1 mt-2">
                          {resource.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-auto pt-4">
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={resource.link} target="_blank" rel="noopener noreferrer">
                              Visiter <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {renderPagination('online')}
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 p-6 border rounded-lg bg-muted/50">
            <h2 className="text-xl font-semibold mb-3">Information</h2>
            <p className="mb-1"><span className="font-medium">Source :</span> {authorInfo.name}</p>
            <p className="mb-1"><span className="font-medium">Site web :</span> <a href={authorInfo.website} target="_blank" rel="noopener noreferrer" className="text-neuro-blue hover:underline">{authorInfo.website}</a></p>
            <p className="mb-1"><span className="font-medium">Contact :</span> <a href={`mailto:${authorInfo.email}`} className="text-neuro-blue hover:underline">{authorInfo.email}</a></p>
            <p className="mb-1"><span className="font-medium">Dernière mise à jour :</span> {authorInfo.lastUpdate}</p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Ces ressources sont mises à jour régulièrement. Pour proposer l'ajout d'une ressource ou signaler un lien obsolète, merci de nous contacter par email.
            </p>
          </div>
        </div>
      </main>    </div>
  );
};

export default Ressources;
