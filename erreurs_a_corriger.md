# Liste des erreurs et incohérences à corriger

Ce document liste toutes les erreurs, incohérences et problèmes identifiés dans l'application NeuroDiversiteExplorer, avec des étapes précises pour les résoudre.

## Problèmes dans les composants d'évaluation

### 1. Incohérences dans la gestion d'état et la navigation entre questions

**Problème** : Différentes approches sont utilisées pour gérer la navigation entre les questions et la sélection des options.

- Dans `TDAHAssessment.tsx` et d'autres composants, il existe deux méthodes redondantes pour gérer les réponses :
  - `handleOptionSelect` + `handleNextQuestion`
  - `handleAnswer` (qui fait les deux en une seule fonction)

- Certains composants utilisent `setTimeout` pour passer à la question suivante, d'autres non.

**Solution** :
1. Standardiser l'approche de navigation entre les questions dans tous les composants d'évaluation
2. Choisir entre l'approche avec bouton explicite (via `QuestionnaireNavigation`) ou l'approche automatique
3. Supprimer les fonctions redondantes

### 2. Utilisation incohérente des composants communs

**Problème** : Certains composants utilisent les composants communs (`QuestionnaireNavigation`, `ResultsDisplay`, `QuestionTooltip`), d'autres réimplémentent la même fonctionnalité.

- `DyslexieAssessment.tsx` utilise les composants communs
- `DyscalculieAssessment.tsx` et `DyspraxieAssessment.tsx` réimplémentent la navigation et l'affichage des résultats

**Solution** :
1. Utiliser systématiquement les composants communs dans tous les composants d'évaluation
2. Remplacer le code dupliqué par les composants réutilisables

### 3. Incohérences dans le calcul des scores

**Problème** : Différentes méthodes de calcul des scores sont utilisées selon les évaluations.

- `AutismeAssessment.tsx` utilise un système de scoring complexe avec des questions inversées
- `TDAHAssessment.tsx` utilise un système de catégories (inattention, hyperactivité, impulsivité)
- Les autres évaluations utilisent un système plus simple

**Solution** :
1. Documenter clairement la méthode de calcul pour chaque évaluation
2. Standardiser l'approche quand c'est possible
3. S'assurer que les calculs sont corrects selon les critères cliniques

### 4. Variable non utilisée dans TDAHAssessment

**Problème** : Dans `TDAHAssessment.tsx`, la variable `currentAnswer` est déclarée mais jamais utilisée.

**Solution** :
1. Supprimer cette variable inutile

### 5. Incohérences dans l'affichage des résultats

**Problème** : Certains composants utilisent le composant `ResultsDisplay`, d'autres implémentent leur propre affichage.

**Solution** :
1. Utiliser systématiquement le composant `ResultsDisplay` pour tous les composants d'évaluation
2. S'assurer que tous les composants fournissent les mêmes types de données au composant de résultats

### 6. Duplication de ressources

**Problème** : Les ressources pour chaque trouble sont définies à la fois dans les composants d'évaluation et dans la page `AutoEvaluation.tsx`.

**Solution** :
1. Centraliser les ressources dans un seul fichier (par exemple, un nouveau fichier `src/data/resources.ts`)
2. Importer ces ressources dans les composants qui en ont besoin

### 7. Incohérences dans la structure des questions

**Problème** : La structure des questions varie selon les évaluations.
- Certaines ont des tooltips, d'autres non
- Certaines ont des catégories, d'autres non

**Solution** :
1. Standardiser l'interface `Question` pour tous les composants
2. Rendre optionnels les champs spécifiques (tooltip, catégorie)

### 8. Incohérences dans les échelles de réponse

**Problème** : Les options de réponse varient selon les évaluations.
- Certaines utilisent "jamais" à "toujours"
- D'autres utilisent "pas du tout d'accord" à "tout à fait d'accord"

**Solution** :
1. Documenter clairement pourquoi différentes échelles sont utilisées
2. Standardiser les libellés des options quand c'est possible

## Problèmes de structure et d'organisation

### 9. Manque de séparation entre données et composants

**Problème** : Les questions et ressources sont définies directement dans les composants d'évaluation.

**Solution** :
1. Déplacer les données de questions dans des fichiers séparés (par exemple, `src/data/questions/tdah.ts`)
2. Importer ces données dans les composants

### 10. Manque de types pour les options de réponse

**Problème** : Les options de réponse sont codées en dur comme des chaînes de caractères.

**Solution** :
1. Créer des types pour les options de réponse
2. Utiliser ces types pour améliorer la sécurité du code

## Plan d'action pour résoudre ces problèmes

### Étape 1 : Standardisation des données
1. Créer des fichiers de données séparés pour les questions et ressources
2. Définir des types communs pour les questions et réponses

### Étape 2 : Refactorisation des composants communs
1. Améliorer les composants communs pour qu'ils puissent gérer tous les cas d'utilisation
2. S'assurer que `ResultsDisplay` peut gérer tous les types de résultats

### Étape 3 : Mise à jour des composants d'évaluation
1. Standardiser l'utilisation des composants communs
2. Supprimer le code dupliqué
3. Corriger les variables inutilisées

### Étape 4 : Tests et validation
1. Tester chaque évaluation pour s'assurer que les fonctionnalités sont préservées
2. Vérifier que les calculs de score sont corrects
3. S'assurer que l'expérience utilisateur est cohérente