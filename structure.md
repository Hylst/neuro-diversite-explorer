
# Structure et Architecture de NeuroDiversité Explorer

## 1. Vue d'ensemble

NeuroDiversité Explorer est une application web React complète dédiée à la neurodiversité, offrant des informations, des ressources et des outils pour comprendre et vivre avec différentes formes de neurodiversité. L'application est construite avec des technologies modernes et propose une interface utilisateur responsive et accessible.

L'architecture du projet suit les principes de conception modernes pour les applications React :
- **Architecture modulaire** : Organisation en composants réutilisables
- **Séparation des préoccupations** : Distinction claire entre UI, logique métier et gestion d'état
- **Accessibilité native** : Conçue dès le départ pour être accessible à tous les utilisateurs
- **Performance optimisée** : Utilisation des meilleures pratiques pour garantir des temps de chargement rapides

## 2. Stack Technologique

- **Frontend**: React 18 avec TypeScript
- **Routage**: React Router Dom v6
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (basé sur Radix UI)
- **Animations**: Framer Motion
- **Gestion d'État**: React Context API, React Query
- **Backend**: Supabase (Auth, Database)
- **Visualisations 3D**: Three.js, React Three Fiber
- **Formulaires**: React Hook Form avec Zod pour la validation

## 3. Structure des Dossiers

```
src/
├── components/            # Composants réutilisables
│   ├── auth/              # Composants liés à l'authentification
│   │   ├── LoginForm.tsx  # Formulaire de connexion
│   │   └── SignUpForm.tsx # Formulaire d'inscription
│   ├── brain/             # Visualisations interactives du cerveau
│   │   ├── BrainModel.tsx # Modèle 3D principal du cerveau
│   │   └── BrainRegions/  # Composants pour chaque région cérébrale
│   ├── communaute/        # Composants pour la section communauté
│   │   ├── Forum/         # Composants du forum de discussion
│   │   └── Map/           # Cartographie des ressources
│   ├── evaluation/        # Tests d'auto-évaluation
│   ├── glossary/          # Composants du glossaire
│   │   ├── GlossaryList.tsx  # Liste des termes
│   │   └── GlossaryTerm.tsx  # Affichage détaillé d'un terme
│   ├── home/              # Composants de la page d'accueil
│   ├── layout/            # Structure de l'interface (navbar, footer)
│   │   ├── Navbar.tsx     # Barre de navigation principale
│   │   ├── Footer.tsx     # Pied de page
│   │   └── Sidebar.tsx    # Barre latérale (si applicable)
│   ├── ui/                # Composants UI génériques (shadcn)
│   │   ├── Button.tsx     # Boutons personnalisés
│   │   ├── Card.tsx       # Composant de carte
│   │   └── Dialog.tsx     # Fenêtres modales
│   └── vivreavec/         # Composants pour la section "Vivre avec"
├── data/                  # Données statiques (termes du glossaire, etc.)
│   ├── glossaryTerms.ts   # Définitions du glossaire
│   └── troublesData.ts    # Informations sur les troubles
├── hooks/                 # Hooks React personnalisés
│   ├── use-mobile.tsx     # Détection des appareils mobiles
│   └── use-toast.ts       # Système de notifications toast
├── integrations/          # Intégrations avec services externes
│   └── supabase/          # Configuration et types Supabase
├── lib/                   # Utilitaires et fonctions helper
│   └── utils.ts           # Fonctions utilitaires génériques
├── pages/                 # Composants de pages principales
│   ├── ressources/        # Pages de ressources
│   └── troubles/          # Pages détaillant les différents troubles
└── types/                 # Définitions de types TypeScript
    └── custom-types.ts    # Types personnalisés pour l'application
```

## 4. Composants Clés

### Composants Principaux

- **Navbar** : Navigation principale avec menu responsive et liens d'accessibilité
- **BrainModel** : Visualisation 3D interactive du cerveau utilisant Three.js
- **GlossaryList** : Liste des termes du glossaire avec filtrage et recherche
- **BlogPosts** : Affichage des témoignages et articles avec système de tags
- **ResourceMap** : Cartographie des ressources avec filtrage géographique
- **EvaluationForm** : Questionnaires d'auto-évaluation avec calcul de score
- **ForumDiscussion** : Interface de discussion communautaire

### Composants UI Réutilisables

- **Button** : Boutons personnalisés avec variantes (primaire, secondaire, etc.)
- **Card** : Conteneur pour l'affichage d'informations structurées
- **Dialog** : Fenêtres modales pour les interactions complexes
- **Tabs** : Navigation par onglets pour organiser le contenu
- **Toast** : Notifications temporaires pour le feedback utilisateur
- **Dropdown** : Menus déroulants pour les sélections
- **Accordion** : Panneaux expansibles pour organiser l'information

## 5. Bonnes Pratiques de Développement

### Conventions de Code
- **Nommage** : Utilisation du camelCase pour les variables et fonctions, PascalCase pour les composants
- **Typage** : TypeScript strict avec interfaces et types explicites
- **Commentaires** : Documentation JSDoc pour les fonctions et composants complexes
- **Tests** : Tests unitaires pour les fonctions utilitaires et les composants critiques

### Patterns React
- **Composition** : Préférer la composition de composants à l'héritage
- **Hooks** : Utiliser des hooks personnalisés pour extraire la logique réutilisable
- **Mémoïsation** : Utiliser React.memo, useMemo et useCallback pour optimiser les performances
- **Lazy Loading** : Charger les composants à la demande pour améliorer les performances initiales

### Accessibilité
- **Sémantique HTML** : Utiliser les éléments HTML appropriés pour leur signification
- **ARIA** : Ajouter des attributs ARIA lorsque nécessaire pour améliorer l'accessibilité
- **Focus** : Assurer une navigation au clavier logique et visible
- **Contraste** : Maintenir un ratio de contraste conforme aux normes WCAG AA

### Sécurité
- **Validation** : Valider toutes les entrées utilisateur côté client et serveur
- **Authentification** : Utiliser les mécanismes sécurisés de Supabase pour l'authentification
- **Autorisations** : Implémenter des politiques RLS (Row Level Security) dans Supabase
- **Sanitization** : Nettoyer les données HTML pour éviter les attaques XSS

## 6. Flux de l'Application

### Initialisation
1. `main.tsx` initialise l'application React
2. `App.tsx` configure les providers globaux:
   - React Query pour les requêtes de données
   - Contexte d'authentification Supabase
   - Contexte de thème (clair/sombre)
   - Contexte de préférences d'accessibilité
3. Le routeur principal (`routes.ts`) définit la structure de navigation
4. `MainLayout.tsx` établit la mise en page commune à toutes les pages

### Flux de Données
1. **Données statiques** : Importées directement depuis les fichiers dans `/data`
2. **Données dynamiques** : Récupérées via Supabase avec React Query
   - Mise en cache automatique des requêtes fréquentes
   - Invalidation intelligente du cache lors des mutations
3. **État local** : Géré par useState et useReducer dans les composants
4. **État global** : Géré par Context API pour les données partagées

### Flux Utilisateur
1. **Navigation** : Gérée par React Router avec transitions fluides
2. **Authentification** : 
   - Inscription/Connexion via Supabase Auth
   - Persistance de session avec localStorage
   - Routes protégées pour le contenu réservé
3. **Interactions** :
   - Formulaires validés avec React Hook Form et Zod
   - Feedback immédiat via le système de toast
   - Animations contextuelles avec Framer Motion
   - ThemeProvider pour le thème clair/sombre
   - AuthProvider pour l'authentification
   - Toaster pour les notifications
   - BrowserRouter pour le routage

### Routing
L'application utilise React Router avec une structure de routes définie dans `App.tsx`, incluant:
- Routes principales (`/`, `/comprendre`, `/troubles`, etc.)
- Sous-routes pour les troubles spécifiques (`/troubles/dyslexie`, etc.)
- Routes pour les ressources (`/ressources/guide-administratif`, etc.)

### État Global
- **Authentification**: Gérée via `AuthProvider.tsx` qui utilise Supabase Auth
- **Thème**: Système de thème clair/sombre via next-themes
- **Accessibilité**: Paramètres d'accessibilité dans un context dédié

## 5. Fonctionnalités Principales

### Système d'Authentification
- Inscription et connexion via Supabase Auth
- Persistance de session
- Profil utilisateur

### Navigation et Interface
- Barre de navigation responsive avec menus déroulants
- Navigation mobile via menu burger
- Footer avec liens importants et légaux

### Contenu Informatif
- Documentation détaillée sur la neurodiversité
- Pages spécifiques pour chaque trouble
- Modèles interactifs du cerveau
- Glossaire complet avec système de recherche

### Ressources et Outils
- Auto-évaluation pour différents troubles
- Ressources téléchargeables
- Cartographie de professionnels et associations
- Blog et témoignages

### Communauté
- Forum (en développement)
- Cartographie des ressources
- Événements
- FAQ

## 6. Composants Clés

### Layout
- `MainNavbar.tsx`: Navigation principale avec animation du logo
- `DesktopNavbar.tsx` & `MobileNavbar.tsx`: Versions adaptatives de la navigation
- `Footer.tsx`: Pied de page avec liens et informations légales

### Pages Principales
- `Index.tsx`: Page d'accueil avec sections de présentation
- `Comprendre.tsx`: Informations sur la neurodiversité
- `Troubles.tsx`: Hub central pour les différents troubles
- `VivreAvec.tsx`: Conseils et ressources pratiques
- `Communaute.tsx`: Section communauté et ressources
- `Glossaire.tsx`: Dictionnaire des termes de neurodiversité

### Composants Interactifs
- `Brain3DModel.tsx`: Modèle 3D interactif du cerveau
- Tests d'auto-évaluation pour différents troubles
- Filtres de recherche pour ressources et glossaire

## 7. Intégration Supabase

L'application utilise Supabase pour:
- **Authentification**: Inscription, connexion, gestion de session
- **Base de données**: Stockage des données utilisateur et ressources
- Actuellement, l'application ne semble pas utiliser beaucoup de fonctionnalités de Supabase au-delà de l'authentification

## 8. Optimisations et Points d'Attention

### Problèmes de Performance
- Pages volumineuses comme `Communaute.tsx` (518 lignes)
- Utilisation intensive de composants animés avec Framer Motion
- Chargement potentiellement lourd des modèles 3D du cerveau
- Manque de code splitting pour optimiser le chargement initial

### Dette Technique
- Certains fichiers sont trop volumineux et mériteraient d'être refactorisés
- Manque de tests automatisés
- Commentaires limités dans certaines parties complexes du code

## 9. Accessibilité

L'application prend en compte l'accessibilité via:
- Menu d'accessibilité dédié
- Support du mode sombre
- Composants UI accessibles (shadcn/ui basé sur Radix UI)
- Attributs ARIA et contraste de couleurs

## 10. Extension et Évolutivité

Le projet est structuré pour permettre:
- L'ajout de nouvelles pages de troubles ou ressources
- L'extension du glossaire
- L'intégration de nouvelles fonctionnalités communautaires
- L'amélioration des visualisations interactives
