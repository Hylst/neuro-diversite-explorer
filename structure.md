
# Structure et Architecture de NeuroDiversité Explorer

## 1. Vue d'ensemble

NeuroDiversité Explorer est une application web React complète dédiée à la neurodiversité, offrant des informations, des ressources et des outils pour comprendre et vivre avec différentes formes de neurodiversité. L'application est construite avec des technologies modernes et propose une interface utilisateur responsive et accessible.

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
│   ├── brain/             # Visualisations interactives du cerveau
│   ├── communaute/        # Composants pour la section communauté
│   ├── evaluation/        # Tests d'auto-évaluation
│   ├── glossary/          # Composants du glossaire
│   ├── home/              # Composants de la page d'accueil
│   ├── layout/            # Structure de l'interface (navbar, footer)
│   ├── ui/                # Composants UI génériques (shadcn)
│   └── vivreavec/         # Composants pour la section "Vivre avec"
├── data/                  # Données statiques (termes du glossaire, etc.)
├── hooks/                 # Hooks React personnalisés
├── integrations/          # Intégrations avec services externes
│   └── supabase/          # Configuration et types Supabase
├── lib/                   # Utilitaires et fonctions helper
├── pages/                 # Composants de pages principales
│   ├── ressources/        # Pages de ressources
│   └── troubles/          # Pages détaillant les différents troubles
└── types/                 # Définitions de types TypeScript
```

## 4. Flux de l'Application

### Initialisation
1. `main.tsx` initialise l'application React
2. `App.tsx` configure les providers globaux:
   - React Query pour les requêtes de données
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
