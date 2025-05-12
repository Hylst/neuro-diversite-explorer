
# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

## [1.2.0] - Prochaine version

### Ajouté
- Nouveaux témoignages neurodivergents dans la section Blog (synesthésie, douance/TDAH, trisomie 21, bipolarité, trouble dissociatif, hypersensibilité sensorielle, autisme à diagnostic tardif)
- Support pour davantage d'icônes dans les cartes de blog (puzzle, music, book-open, sparkles, stars, cloud)
- Amélioration de l'affichage des avatars locaux pour les nouveaux témoignages
- Complétion des témoignages sur divers profils neurodivergents
- Amélioration du sélecteur d'avatars avec 16 options d'avatars prédéfinis, upload d'image et URL personnalisée
- Restriction d'accès aux fonctionnalités administratives (ajout de témoignages, synchronisation des données)
- Formulaire optimisé pour l'import d'articles de blog avec une meilleure interface utilisateur
- Support complet pour les avatars personnalisés avec 3 méthodes : galerie prédéfinie, upload ou URL externe
- Gestion améliorée des avatars dans la base de données avec de nouveaux champs dédiés
- Amélioration de l'accessibilité avec liens d'évitement et navigation au clavier
- Début d'implémentation des fonctionnalités du forum dans la section Communauté
- Amélioration du contraste des titres dans la section Explorer par thématique
- Ajout de couleurs de fond dégradées pour les cartes de thématique pour un meilleur contraste
- Refactorisation du forum en composants modulaires plus maintenables
- Documentation complète du projet dans le README
- Structure de forum améliorée avec catégories, discussions récentes et formulaire de création
- Enrichissement du contenu des catégories de forum avec exemples de sujets et badges
- Ajout d'un système de prévisualisation des messages dans le forum
- Mise en place d'un système de formatage de texte simple pour les messages du forum
- Implémentation de filtres et tris pour les sujets de discussion
- Amélioration de l'UI des règles du forum avec sections collapsibles
- Exemples de discussions pertinentes pour chaque catégorie du forum
- Badges et indicateurs visuels pour les discussions populaires, nouvelles et résolues
- Message d'avertissement sur le site en cours de développement (page d'accueil et à propos)
- Ajout de l'association Ludosens dans la section cartographie des ressources
- Mise à jour des liens fictifs dans la cartographie par des liens réels et valides
- Désactivation temporaire des boutons de réseaux sociaux dans le footer

### Corrections
- Correction d'une erreur de chaîne non terminée dans BlogData.ts
- Correction de l'affichage des icônes dans les cartes d'articles de blog
- Correction du chevauchement du footer avec les cartes de blog
- Correction de l'affichage des avatars d'auteurs dans les articles de blog
- Correction des problèmes de gestion d'URL d'avatars externes avec fallback
- Amélioration des fonctionnalités d'import d'articles de blog
- Limitation du nombre de tags affichés sur les cartes pour une meilleure lisibilité
- Uniformisation de la taille des cartes de blog pour une meilleure cohérence visuelle
- Correction du problème de tailles inégales des cartes de blog dans l'interface
- Correction des erreurs TypeScript liées à l'accès aux propriétés d'avatars dans BlogPosts.tsx
- Amélioration des fonctions utilitaires pour manipuler de façon sécurisée les données d'auteur et d'avatar
- Correction des erreurs TypeScript liées aux éléments Three.js dans les composants du modèle de cerveau 3D
- Ajout de la dépendance manquante @react-three/fiber pour les composants 3D
- Correction des erreurs TypeScript en ajoutant la propriété meshName à l'interface BrainRegion
- Amélioration de la navigation au clavier et focus visibles sur tous les éléments interactifs
- Correction de l'erreur d'importation de l'icône QuestionMark, remplacée par HelpCircle
- Remplacement des liens fictifs de la cartographie par des liens réels vers des organisations existantes

### À améliorer
- Optimisation des performances sur les pages complexes
- Refactorisation des composants volumineux
- Finalisation du forum de discussion
- Enrichissement des ressources locales
- Implémentation de tests automatisés

### TODO: Liens à vérifier et corriger
- Compléter les liens de la section des événements communautaires
- Vérifier les liens vers les documents PDF dans la section ressources :
  - Modèles de lettres pour demande de PAP
  - Formulaire MDPH 2025
  - Guide RQTH étape par étape
  - Checklist des aménagements professionnels
- Compléter les liens pour les applications recommandées dans la section ressources/applications

### TODO: Contenu à compléter
- Terminer le contenu des pages de troubles spécifiques encore incomplètes
- Compléter les témoignages avec des histoires plus diversifiées mais cohérentes 
- Finaliser le contenu du glossaire pour les termes encore sans définition détaillée
- Ajouter plus de ressources locales géographiquement diversifiées dans la cartographie
- Compléter les réponses dans la FAQ de la section communauté
- Enrichir les témoignages de la section "Vivre avec"

## [1.1.0] - 2025-04-17

### Ajouté
- Enrichissement significatif du glossaire avec plus de 30 nouvelles définitions
- Nouvelles catégories de termes dans le glossaire
- Amélioration des définitions existantes
- Animation interactive du logo NeuroDiversitéExplorer
- Mise à jour des événements communautaires avec contenu réel pour avril 2025
- Contenu enrichi pour la section cartographie des ressources

### Modifié
- Refactorisation de la page Glossaire pour une meilleure maintenabilité
- Amélioration des définitions du glossaire
- Optimisation des performances de recherche
- Amélioration de l'expérience utilisateur sur la page Communauté

### Corrigé
- Corrections de bugs d'interface utilisateur
- Amélioration de la réactivité sur mobile
- Correction des liens non fonctionnels dans la section Communauté
- Amélioration de la cohérence visuelle entre les sections

### Problèmes identifiés
- Temps de chargement élevé sur certaines pages complexes
- Composants trop volumineux nécessitant une refactorisation
- Manque de tests automatisés
- Sections en développement incomplètes (forum)

## [1.0.0] - 2025-04-17

### Ajouté
- Page d'accueil avec présentation de la neurodiversité
- Glossaire complet avec système de recherche et filtrage
- Navigation principale et menus déroulants
- Support des thèmes clair/sombre
- Fonctionnalités d'accessibilité
- Documentation complète des troubles neurodéveloppementaux

### Modifié
- Refactorisation de la page Glossaire pour une meilleure maintenabilité
- Amélioration des définitions du glossaire
- Optimisation des performances de recherche

### Corrigé
- Corrections de bugs d'interface utilisateur
- Amélioration de la réactivité sur mobile
