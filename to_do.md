# Liste des erreurs et améliorations à apporter - NeuroDiversité Explorer

Ce document liste toutes les erreurs, incohérences et problèmes identifiés dans l'application NeuroDiversiteExplorer, avec des étapes précises pour les résoudre.

## 1. Problèmes dans les composants d'évaluation

### 1.1. Incohérences dans la gestion d'état et la navigation entre questions

**Problème** : Différentes approches sont utilisées pour gérer la navigation entre les questions et la sélection des options.

- Dans `TDAHAssessment.tsx` et d'autres composants, il existe deux méthodes redondantes pour gérer les réponses :
  - `handleOptionSelect` + `handleNextQuestion`
  - `handleAnswer` (qui fait les deux en une seule fonction)

- Certains composants utilisent `setTimeout` pour passer à la question suivante avec des délais différents (50ms vs 500ms).

**Solution** :
1. Standardiser l'approche de navigation entre les questions dans tous les composants d'évaluation
2. Utiliser systématiquement le composant `QuestionnaireNavigation`
3. Supprimer la fonction redondante `handleAnswer`
4. Standardiser le délai de `setTimeout` à 50ms partout

### 1.2. Utilisation incohérente des composants communs

**Problème** : Certains composants utilisent les composants communs (`QuestionnaireNavigation`, `ResultsDisplay`, `QuestionTooltip`), d'autres réimplémentent la même fonctionnalité.

- `DyslexieAssessment.tsx` et `TDAHAssessment.tsx` utilisent les composants communs
- `DyscalculieAssessment.tsx` et `DyspraxieAssessment.tsx` réimplémentent la navigation et l'affichage des résultats

**Solution** :
1. Utiliser systématiquement les composants communs dans tous les composants d'évaluation
2. Remplacer le code dupliqué par les composants réutilisables
3. Mettre à jour `DyscalculieAssessment.tsx` et `DyspraxieAssessment.tsx` pour utiliser `QuestionnaireNavigation` et `ResultsDisplay`

### 1.3. Incohérences dans le calcul des scores

**Problème** : Différentes méthodes de calcul des scores sont utilisées selon les évaluations.

- `AutismeAssessment.tsx` utilise un système de scoring complexe avec des questions inversées
- `TDAHAssessment.tsx` utilise un système de catégories (inattention, hyperactivité, impulsivité)
- Les autres évaluations utilisent un système plus simple

**Solution** :
1. Documenter clairement la méthode de calcul pour chaque évaluation
2. Standardiser l'approche quand c'est possible
3. S'assurer que les calculs sont corrects selon les critères cliniques
4. Créer des fonctions utilitaires pour les calculs de score communs

### 1.4. Variable non utilisée dans TDAHAssessment

**Problème** : Dans `TDAHAssessment.tsx`, la variable `currentAnswer` est déclarée mais jamais utilisée.

**Solution** :
1. Supprimer cette variable inutile

### 1.5. Incohérences dans l'interface QuestionTooltip

**Problème** : Le composant `QuestionTooltip` est utilisé de manière incohérente.

- Dans `TDAHAssessment.tsx`, il est utilisé avec la prop `content`
- Dans d'autres composants comme `DyslexieAssessment.tsx`, il est utilisé avec les props `text` et `tooltip`

**Solution** :
1. Standardiser l'interface du composant `QuestionTooltip`
2. Mettre à jour tous les composants pour utiliser la même interface

### 1.6. Duplication de ressources

**Problème** : Les ressources pour chaque trouble sont définies à la fois dans les composants d'évaluation et dans la page `AutoEvaluation.tsx`.

**Solution** :
1. Centraliser les ressources dans un seul fichier (par exemple, un nouveau fichier `src/data/resources.ts`)
2. Importer ces ressources dans les composants qui en ont besoin

### 1.7. Incohérences dans la structure des questions

**Problème** : La structure des questions varie selon les évaluations.
- Certaines ont des tooltips, d'autres non
- Certaines ont des catégories, d'autres non

**Solution** :
1. Standardiser l'interface `Question` pour tous les composants
2. Rendre optionnels les champs spécifiques (tooltip, catégorie)
3. Créer une interface commune dans `custom-types.ts`

### 1.8. Incohérences dans les échelles de réponse

**Problème** : Les options de réponse varient selon les évaluations.
- Certaines utilisent "jamais" à "toujours"
- D'autres utilisent "pas du tout d'accord" à "tout à fait d'accord"

**Solution** :
1. Documenter clairement pourquoi différentes échelles sont utilisées
2. Standardiser les libellés des options quand c'est possible
3. Créer des constantes pour les échelles de réponse

## 2. Problèmes de structure et d'organisation

### 2.1. Manque de séparation entre données et composants

**Problème** : Les questions et ressources sont définies directement dans les composants d'évaluation.

**Solution** :
1. Déplacer les données de questions dans des fichiers séparés (par exemple, `src/data/questions/tdah.ts`)
2. Importer ces données dans les composants

### 2.2. Composants volumineux

**Problème** : Plusieurs composants sont excessivement volumineux, comme `TDAHAssessment.tsx` (348 lignes).

**Solution** :
1. Décomposer ces composants en sous-composants plus petits et réutilisables
2. Extraire la logique dans des hooks personnalisés

### 2.3. Incohérence dans la structure des dossiers

**Problème** : Manque de cohérence dans l'organisation des fichiers et dossiers.

**Solution** :
1. Réorganiser la structure du projet selon une architecture plus cohérente
2. Regrouper les composants par fonctionnalité plutôt que par type
3. Créer des dossiers pour les composants partagés

## 3. Problèmes de performance

### 3.1. Chargement non optimisé des composants

**Problème** : Tous les composants sont importés et chargés dès le démarrage de l'application.

**Solution** :
1. Utiliser `React.lazy()` et `Suspense` pour les composants de page
2. Ajouter des indicateurs de chargement pendant le chargement des composants
3. Prioriser le chargement des composants critiques

### 3.2. Animations potentiellement coûteuses

**Problème** : Utilisation intensive de Framer Motion sans optimisation.

**Solution** :
1. Limiter les animations aux propriétés performantes (transform, opacity)
2. Désactiver les animations complexes sur les appareils à faible puissance
3. Utiliser `React.memo` pour éviter les rendus inutiles

## 4. Problèmes d'accessibilité

### 4.1. Manque de support pour les technologies d'assistance

**Problème** : Support incomplet pour les lecteurs d'écran et la navigation au clavier.

**Solution** :
1. Ajouter des attributs ARIA appropriés aux composants interactifs
2. Améliorer la navigation au clavier avec des gestionnaires de focus
3. Tester avec différentes technologies d'assistance

### 4.2. Contraste et lisibilité insuffisants

**Problème** : Certains éléments peuvent avoir un contraste insuffisant.

**Solution** :
1. Vérifier et corriger les ratios de contraste selon les normes WCAG
2. Augmenter la taille de base du texte pour une meilleure lisibilité
3. Ajouter des options de personnalisation pour les utilisateurs

## 5. Problèmes de routage

### 5.1. Structure de routage non optimisée

**Problème** : Routes définies de manière plate dans `App.tsx` sans utilisation de routes imbriquées.

**Solution** :
1. Restructurer le routage avec des routes imbriquées
2. Utiliser `<Outlet />` pour les layouts partagés
3. Regrouper les routes par catégorie (troubles, ressources, etc.)

### 5.2. Duplication de fichiers de routage

**Problème** : Présence de fichiers `fix-duplicate-navbars.js` et `fix-duplicate-navbars.mjs` qui semblent être des tentatives de correction.

**Solution** :
1. Identifier le problème de duplication des barres de navigation
2. Appliquer la correction appropriée
3. Supprimer les fichiers redondants

## 6. Problèmes de cohérence visuelle

### 6.1. Incohérence dans les composants UI

**Problème** : Utilisation incohérente des composants UI entre les différentes pages.

**Solution** :
1. Créer une bibliothèque de composants UI réutilisables
2. Standardiser l'utilisation des composants dans toute l'application
3. Documenter les composants et leur utilisation

### 6.2. Incohérence dans les styles

**Problème** : Styles incohérents entre les différentes pages et composants.

**Solution** :
1. Créer un système de design cohérent
2. Utiliser des variables CSS ou des tokens de design
3. Standardiser les espacements, couleurs et typographies

## 7. Problèmes de gestion d'état

### 7.1. Utilisation excessive du state local

**Problème** : Utilisation excessive de `useState` pour gérer l'état local des composants.

**Solution** :
1. Utiliser des hooks personnalisés pour encapsuler la logique d'état
2. Considérer l'utilisation de Context API pour l'état partagé
3. Évaluer l'utilisation d'une bibliothèque de gestion d'état comme Redux ou Zustand pour les états complexes

## 8. Plan d'action pour résoudre ces problèmes

### Étape 1: Standardisation des composants d'évaluation
1. Créer des interfaces communes pour les questions et les résultats
2. Standardiser l'utilisation des composants communs
3. Extraire les données dans des fichiers séparés

### Étape 2: Refactorisation de la structure du projet
1. Réorganiser les dossiers et fichiers
2. Décomposer les composants volumineux
3. Créer des hooks personnalisés pour la logique partagée

### Étape 3: Optimisation des performances
1. Implémenter le chargement paresseux
2. Optimiser les animations
3. Mettre en place la mise en cache des données

### Étape 4: Amélioration de l'accessibilité
1. Ajouter des attributs ARIA
2. Améliorer la navigation au clavier
3. Corriger les problèmes de contraste

### Étape 5: Restructuration du routage
1. Implémenter des routes imbriquées
2. Centraliser la configuration des routes
3. Corriger les problèmes de navigation

### Étape 6: Standardisation de l'UI
1. Créer un système de design cohérent
2. Standardiser les composants UI
3. Documenter les composants et leur utilisation