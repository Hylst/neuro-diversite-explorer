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

**Problème** : Support incomplet pour les lecteurs d'écran et la navigation au clavier. Les composants interactifs manquent d'attributs ARIA essentiels, et la navigation au clavier est limitée ou inexistante dans plusieurs sections de l'application.

**Détails du problème** :
- Les boutons et contrôles interactifs n'ont pas d'attributs `aria-label` ou `aria-labelledby`
- Les composants personnalisés comme `QuestionnaireNavigation` ne communiquent pas correctement leur état aux technologies d'assistance
- L'ordre de tabulation (tab order) n'est pas logique dans les questionnaires
- Absence de raccourcis clavier pour les actions principales
- Les messages d'erreur et notifications ne sont pas annoncés aux lecteurs d'écran
- Les tooltips et informations contextuelles ne sont pas accessibles via clavier

**Solution** :
1. Ajouter des attributs ARIA appropriés aux composants interactifs :
   - `aria-label` ou `aria-labelledby` pour tous les contrôles sans texte visible
   - `aria-expanded`, `aria-haspopup` pour les menus déroulants
   - `aria-current` pour indiquer la question active dans les questionnaires
   - `aria-live` pour les zones de contenu dynamique (résultats, notifications)
   - `aria-required` et `aria-invalid` pour les champs de formulaire

2. Améliorer la navigation au clavier :
   - Implémenter une gestion cohérente du focus avec `useRef` et `focus()`
   - Assurer que tous les éléments interactifs sont accessibles par tabulation
   - Créer un ordre de tabulation logique avec l'attribut `tabIndex`
   - Ajouter des gestionnaires d'événements clavier (`onKeyDown`, `onKeyPress`)
   - Implémenter des raccourcis clavier pour les actions principales (navigation, validation)
   - Assurer que le focus visuel est clairement visible (outline CSS)

3. Tester avec différentes technologies d'assistance :
   - NVDA et JAWS sous Windows
   - VoiceOver sous macOS et iOS
   - TalkBack sous Android
   - Utiliser des outils automatisés comme Axe, Lighthouse ou Wave
   - Effectuer des tests manuels avec des utilisateurs réels

### 4.2. Contraste et lisibilité insuffisants

**Problème** : Certains éléments peuvent avoir un contraste insuffisant, rendant l'application difficile à utiliser pour les personnes ayant des déficiences visuelles ou des troubles cognitifs.

**Détails du problème** :
- Texte sur fond coloré avec un ratio de contraste insuffisant
- Taille de police trop petite dans certaines sections (notamment les tooltips)
- Absence d'options pour ajuster la taille du texte ou le contraste
- Utilisation de couleurs comme seul moyen de transmettre une information
- Espacement insuffisant entre les éléments interactifs
- Manque de cohérence dans la hiérarchie visuelle

**Solution** :
1. Vérifier et corriger les ratios de contraste selon les normes WCAG :
   - Assurer un ratio minimum de 4.5:1 pour le texte normal (niveau AA)
   - Assurer un ratio minimum de 3:1 pour le texte large ou les éléments d'interface
   - Utiliser des outils comme Contrast Checker ou Colour Contrast Analyser
   - Revoir la palette de couleurs pour garantir l'accessibilité

2. Améliorer la lisibilité du texte :
   - Augmenter la taille de base du texte à au moins 16px
   - Utiliser des unités relatives (rem, em) plutôt que des pixels
   - Assurer un espacement suffisant entre les lignes (line-height)
   - Limiter la largeur des blocs de texte pour faciliter la lecture
   - Choisir des polices optimisées pour la lecture à l'écran

3. Ajouter des options de personnalisation pour les utilisateurs :
   - Mode sombre / mode clair
   - Réglage de la taille du texte
   - Options de contraste élevé
   - Possibilité de désactiver les animations
   - Préférences de réduction des mouvements (prefers-reduced-motion)
   - Sauvegarde des préférences utilisateur

### 4.3. Alternatives textuelles et sémantique HTML

**Problème** : Utilisation insuffisante des alternatives textuelles et de la sémantique HTML appropriée.

**Détails du problème** :
- Images sans attributs `alt` descriptifs
- Utilisation excessive de balises `<div>` et `<span>` au lieu d'éléments sémantiques
- Structure de titres (`<h1>` à `<h6>`) incohérente ou incorrecte
- Absence de landmarks ARIA pour définir les régions de la page
- Formulaires sans étiquettes correctement associées
- Tableaux sans en-têtes appropriés ou sans résumé

**Solution** :
1. Améliorer les alternatives textuelles :
   - Ajouter des attributs `alt` descriptifs à toutes les images
   - Fournir des transcriptions pour les contenus audio ou vidéo
   - Utiliser `aria-describedby` pour les descriptions plus longues
   - S'assurer que les icônes ont des alternatives textuelles

2. Renforcer la sémantique HTML :
   - Utiliser des éléments HTML5 sémantiques (`<nav>`, `<main>`, `<section>`, etc.)
   - Structurer correctement les titres de manière hiérarchique
   - Utiliser `<button>` pour les éléments cliquables au lieu de `<div>` avec des gestionnaires d'événements
   - Associer correctement les étiquettes aux champs de formulaire

3. Ajouter des landmarks ARIA :
   - Définir les régions principales avec `role="banner"`, `role="main"`, `role="navigation"`, etc.
   - Utiliser `aria-labelledby` pour associer les titres aux sections
   - Implémenter des skiplinks pour permettre aux utilisateurs de sauter les sections répétitives

### 4.4. Tests et validation d'accessibilité

**Problème** : Absence de processus systématique pour tester et valider l'accessibilité de l'application.

**Détails du problème** :
- Aucune procédure de test d'accessibilité en place
- Manque de connaissances sur les outils de validation d'accessibilité
- Absence de documentation sur les fonctionnalités d'accessibilité
- Pas de retour d'utilisateurs ayant des besoins spécifiques

**Solution** :
1. Mettre en place un processus de test d'accessibilité :
   - Intégrer des tests automatisés avec des outils comme Axe, Lighthouse ou WAVE
   - Créer une checklist d'accessibilité basée sur les critères WCAG 2.1 niveau AA
   - Effectuer des audits réguliers d'accessibilité
   - Documenter les problèmes identifiés et les solutions appliquées

2. Réaliser des tests manuels :
   - Tester la navigation au clavier sur tous les parcours utilisateur
   - Vérifier la compatibilité avec les lecteurs d'écran (NVDA, JAWS, VoiceOver)
   - Tester avec différents paramètres d'affichage (zoom, contraste élevé)
   - Vérifier l'accessibilité sur différents appareils et tailles d'écran

3. Impliquer des utilisateurs ayant des besoins spécifiques :
   - Organiser des sessions de test avec des utilisateurs en situation de handicap
   - Recueillir et intégrer les retours d'expérience
   - Créer un canal pour signaler les problèmes d'accessibilité
   - Documenter les fonctionnalités d'accessibilité pour les utilisateurs

## 5. Problèmes de routage

### 5.1. Structure de routage non optimisée

**Problème** : Routes définies de manière plate dans `App.tsx` sans utilisation de routes imbriquées. L'application utilise actuellement une structure de routage non hiérarchique où toutes les routes sont définies au même niveau, ce qui rend difficile la maintenance et l'organisation du code.

**Analyse détaillée** :
- L'application utilise actuellement `HashRouter` au lieu de `BrowserRouter` (visible dans `App.tsx`)
- Toutes les routes sont définies au même niveau dans `App.tsx`, sans regroupement logique
- Il existe un fichier `App.tsx.new` qui semble être une tentative de refactorisation avec `BrowserRouter`
- Les routes sont définies dans un fichier centralisé `routes.ts`, mais leur implémentation dans `App.tsx` ne reflète pas la structure hiérarchique définie dans `ROUTE_GROUPS`

**Solution détaillée** :
1. **Migrer de HashRouter vers BrowserRouter** :
   - Remplacer `HashRouter` par `BrowserRouter` dans `App.tsx`
   - Configurer correctement le serveur pour gérer les routes côté client (rediriger vers index.html)
   - Mettre à jour les liens dans l'application si nécessaire

2. **Restructurer le routage avec des routes imbriquées** :
   - Créer des composants de layout pour chaque section principale (MainLayout, TroublesLayout, RessourcesLayout)
   - Utiliser `<Outlet />` dans ces layouts pour rendre le contenu des routes enfants
   - Regrouper les routes par catégorie selon la structure définie dans `ROUTE_GROUPS`

3. **Implémenter une structure de routes hiérarchique** :
   ```jsx
   <BrowserRouter>
     <Routes>
       {/* Route d'accueil */}
       <Route path={ROUTES.HOME} element={<Index />} />
       
       {/* Routes avec le layout principal */}
       <Route element={<MainLayout />}>
         <Route path={ROUTES.COMPRENDRE} element={<Comprendre />} />
         <Route path={ROUTES.CERVEAU} element={<Cerveau />} />
         
         {/* Section Troubles avec son propre layout */}
         <Route path={ROUTES.TROUBLES.INDEX} element={<TroublesLayout />}>
           <Route index element={<Troubles />} />
           <Route path="dys" element={<TroublesDys />} />
           <Route path="dyslexie" element={<Dyslexie />} />
           {/* Autres routes de troubles */}
         </Route>
         
         {/* Section Ressources avec son propre layout */}
         <Route path={ROUTES.RESSOURCES.INDEX} element={<RessourcesLayout />}>
           <Route index element={<Ressources />} />
           <Route path="guide-administratif" element={<GuideAdministratif />} />
           {/* Autres routes de ressources */}
         </Route>
         
         {/* Autres routes principales */}
       </Route>
       
       {/* Route 404 */}
       <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
     </Routes>
   </BrowserRouter>
   ```

4. **Créer les composants de layout nécessaires** :
   - Créer `src/layouts/TroublesLayout.tsx` et `src/layouts/RessourcesLayout.tsx`
   - Implémenter la navigation spécifique à chaque section dans ces layouts
   - Utiliser `<Outlet />` pour rendre le contenu des routes enfants

### 5.2. Duplication des barres de navigation

**Problème** : Présence de fichiers `fix-duplicate-navbars.js` et `fix-duplicate-navbars.mjs` qui sont des scripts de correction pour un problème de duplication des barres de navigation dans les pages.

**Analyse détaillée** :
- Les scripts `fix-duplicate-navbars.js` et `fix-duplicate-navbars.mjs` sont conçus pour supprimer les imports et les composants `MainNavbar` et `Footer` des fichiers de pages
- Ce problème est survenu car les composants de navigation étaient inclus à la fois dans les pages individuelles et dans le layout principal
- La présence de deux versions du script (CommonJS et ESM) indique une tentative de résoudre le problème avec différentes configurations
- Le problème fondamental est lié à l'absence d'une structure de routage correcte avec des layouts partagés

**Solution détaillée** :
1. **Vérifier l'état actuel des pages** :
   - Examiner un échantillon de fichiers de pages pour vérifier si les composants `MainNavbar` et `Footer` sont encore présents
   - Confirmer que le layout principal (`MainLayout.tsx`) inclut déjà ces composants

2. **Exécuter le script de correction si nécessaire** :
   - Utiliser la version ESM du script (`fix-duplicate-navbars.mjs`) pour corriger les pages restantes
   - Vérifier les résultats pour s'assurer que toutes les pages ont été correctement mises à jour

3. **Mettre en place une structure de layout robuste** :
   - S'assurer que tous les composants de page utilisent le layout approprié via le système de routage
   - Vérifier que `MainLayout.tsx` inclut correctement `<Outlet />` pour rendre le contenu des routes enfants

4. **Supprimer les scripts de correction** :
   - Une fois que toutes les pages ont été corrigées et que la structure de routage a été mise à jour, supprimer les fichiers `fix-duplicate-navbars.js` et `fix-duplicate-navbars.mjs`

### 5.3. Plan d'implémentation chronologique

1. **Phase préparatoire** (1-2 jours) :
   - Analyser la structure actuelle du routage et des layouts
   - Identifier toutes les pages qui nécessitent une correction de la duplication des barres de navigation
   - Créer une branche de développement pour les modifications

2. **Phase de correction des duplications** (1 jour) :
   - Exécuter le script `fix-duplicate-navbars.mjs` pour corriger les pages avec des barres de navigation dupliquées
   - Vérifier manuellement un échantillon de pages pour confirmer que les corrections ont été appliquées correctement
   - Supprimer les imports et composants redondants qui n'auraient pas été détectés par le script

3. **Phase de restructuration du routage** (2-3 jours) :
   - Créer les composants de layout nécessaires (`TroublesLayout.tsx`, `RessourcesLayout.tsx`, etc.)
   - Mettre à jour `App.tsx` pour utiliser `BrowserRouter` et implémenter la structure de routes hiérarchique
   - Adapter les liens de navigation dans l'application si nécessaire

4. **Phase de test et validation** (1-2 jours) :
   - Tester toutes les routes pour s'assurer qu'elles fonctionnent correctement
   - Vérifier que la navigation fonctionne comme prévu dans toutes les sections
   - S'assurer que les layouts sont correctement appliqués à toutes les pages

5. **Phase de nettoyage** (0.5 jour) :
   - Supprimer les fichiers `fix-duplicate-navbars.js` et `fix-duplicate-navbars.mjs`
   - Supprimer le fichier `App.tsx.new` s'il n'est plus nécessaire
   - Mettre à jour la documentation du projet

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
1. Ajouter des attributs ARIA et améliorer la sémantique HTML :
   - Auditer tous les composants interactifs et ajouter les attributs ARIA appropriés
   - Remplacer les éléments non sémantiques par des éléments HTML5 appropriés
   - Implémenter les landmarks ARIA pour définir les régions de la page
   - Ajouter des alternatives textuelles à tous les éléments visuels

2. Améliorer la navigation au clavier :
   - Implémenter une gestion cohérente du focus dans tous les composants
   - Créer un ordre de tabulation logique dans l'application
   - Ajouter des raccourcis clavier pour les actions principales
   - Assurer que tous les composants sont utilisables sans souris

3. Corriger les problèmes de contraste et de lisibilité :
   - Vérifier tous les ratios de contraste avec des outils spécialisés
   - Revoir la palette de couleurs pour garantir l'accessibilité
   - Augmenter la taille de base du texte et utiliser des unités relatives
   - Implémenter des options de personnalisation (mode sombre, taille de texte, etc.)

4. Mettre en place des tests d'accessibilité :
   - Intégrer des tests automatisés (Axe, Lighthouse, WAVE)
   - Établir une checklist basée sur WCAG 2.1 niveau AA
   - Réaliser des tests manuels avec différentes technologies d'assistance
   - Organiser des sessions de test avec des utilisateurs ayant des besoins spécifiques
   - Documenter les fonctionnalités d'accessibilité pour les utilisateurs

### Étape 5: Restructuration du routage
1. Implémenter des routes imbriquées
2. Centraliser la configuration des routes
3. Corriger les problèmes de navigation

### Étape 6: Standardisation de l'UI
1. Créer un système de design cohérent
2. Standardiser les composants UI
3. Documenter les composants et leur utilisation