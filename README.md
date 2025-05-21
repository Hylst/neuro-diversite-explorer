
# NeuroDiversité Explorer

## À propos du projet

![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)
![Licence](https://img.shields.io/badge/licence-MIT-green.svg)
![Statut](https://img.shields.io/badge/statut-en%20développement-orange.svg)

**NeuroDiversité Explorer** est une plateforme web complète dédiée à la compréhension et à la sensibilisation autour de la neurodiversité. Le site propose des ressources éducatives, un glossaire détaillé, des témoignages, et une communauté d'entraide pour les personnes neurodivergentes, leurs familles, et les professionnels.

Ce projet vise à créer un espace inclusif où la neurodiversité est célébrée comme une richesse plutôt que perçue comme un déficit. Notre mission est de fournir des informations fiables, des outils pratiques et un espace communautaire bienveillant.

> **Note:** Ce projet est actuellement en phase de développement actif. Certaines fonctionnalités peuvent être incomplètes ou en cours d'implémentation.

## Fonctionnalités principales

### Documentation et information
- **Comprendre la neurodiversité** : Explications détaillées des différents aspects de la neurodiversité
- **Glossaire complet** : Plus de 60 termes spécialisés avec définitions accessibles et catégorisation
- **Documentation des troubles** : Information sur les troubles neurodéveloppementaux (TDAH, autisme, dyslexie, etc.)
- **Modèle interactif du cerveau** : Visualisation 3D des structures cérébrales et leur relation avec la neurodiversité

### Ressources et outils
- **Auto-évaluation** : Questionnaires indicatifs pour différents profils neurodivergents
- **Ressources pratiques** : Documents téléchargeables, plannings, kits de communication
- **Guide administratif** : Accompagnement dans les démarches administratives
- **Stratégies d'apprentissage** : Techniques adaptées aux différents profils

### Communauté et partage
- **Blog et témoignages** : Récits personnels de personnes neurodivergentes
- **Forum de discussion** : Échange entre membres de la communauté
- **Cartographie des ressources** : Base de données géolocalisée de professionnels et associations
- **Événements** : Calendrier d'événements liés à la neurodiversité

### Fonctionnalités techniques
- Interface responsive adaptée à tous les appareils
- Mode sombre/clair pour un confort visuel optimal
- Fonctionnalités d'accessibilité avancées
- Importation d'articles via formulaire sécurisé
- Sélection d'avatars personnalisés

## Technologies utilisées

Ce projet utilise les technologies modernes suivantes :

- **Frontend** :
  - React 18 avec TypeScript
  - Vite comme bundler et serveur de développement
  - Tailwind CSS pour le styling
  - shadcn/ui pour les composants d'interface
  - Framer Motion pour les animations
  - React Router pour la navigation

- **Visualisations** :
  - Three.js et React Three Fiber pour les modèles 3D
  - Recharts pour les graphiques et visualisations de données

- **État et données** :
  - React Query pour la gestion des requêtes
  - Context API pour la gestion d'état globale
  - Supabase pour l'authentification et la base de données

- **Accessibilité** :
  - Conformité WCAG AA visée
  - Composants accessibles via clavier
  - Support des lecteurs d'écran

## Installation et démarrage

```sh
# Cloner le dépôt
git clone <URL_DU_REPO>

# Naviguer dans le répertoire du projet
cd neurodiversite-explorer

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## Configuration de l'environnement

Pour configurer correctement l'environnement de développement :

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez les variables d'environnement suivantes :

```
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anonyme_supabase
```

3. Assurez-vous que votre base de données Supabase est correctement configurée avec les tables nécessaires

## Structure du projet

```
src/
├── components/            # Composants réutilisables
│   ├── auth/              # Authentification
│   ├── brain/             # Modèles du cerveau et visualisations
│   ├── communaute/        # Forum, blog et ressources communautaires
│   ├── evaluation/        # Tests d'auto-évaluation
│   ├── glossary/          # Composants du glossaire
│   ├── home/              # Composants de la page d'accueil
│   ├── layout/            # Structure (navbar, footer)
│   ├── ui/                # Composants UI génériques
│   └── vivreavec/         # Ressources pratiques
├── data/                  # Données statiques
├── hooks/                 # Hooks personnalisés
├── integrations/          # Intégrations externes
├── lib/                   # Utilitaires
├── pages/                 # Pages principales
└── types/                 # Types TypeScript
```

## Guide d'utilisation

### Comment poster un article de blog

La plateforme permet aux utilisateurs autorisés d'ajouter des témoignages et articles de blog. Voici la procédure complète :

1. **Accès au formulaire d'ajout** :
   - Connectez-vous avec un compte administrateur
   - Naviguez vers la section Blog
   - Cliquez sur le bouton "Ajouter un témoignage" (visible uniquement pour les utilisateurs autorisés)

2. **Remplir le formulaire** :
   - **Titre** : Choisissez un titre concis et descriptif
   - **Auteur** : Indiquez le nom de l'auteur (peut être un pseudonyme)
   - **Avatar** : Trois options disponibles :
     - Sélectionnez parmi 16 avatars prédéfinis dans la galerie
     - Téléchargez une image personnalisée (formats acceptés : JPG, PNG, SVG)
     - Fournissez une URL externe vers une image
   - **Contenu** : Rédigez le corps de l'article avec le formatage Markdown
   - **Tags** : Ajoutez jusqu'à 5 tags pertinents pour faciliter la recherche
   - **Icône** : Choisissez une icône représentative parmi les options disponibles (puzzle, music, book-open, sparkles, stars, cloud, etc.)

3. **Prévisualisation** :
   - Utilisez le bouton "Prévisualiser" pour vérifier l'apparence de l'article
   - Vérifiez que le formatage Markdown s'affiche correctement
   - Assurez-vous que l'avatar s'affiche correctement

4. **Publication** :
   - Cliquez sur "Publier" pour rendre l'article visible sur la plateforme
   - L'article apparaîtra immédiatement dans la section Blog

5. **Modification ultérieure** :
   - Les articles peuvent être modifiés après publication
   - Accédez à l'article et cliquez sur "Modifier" (visible uniquement pour les administrateurs)

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre guide de contribution pour plus de détails.

## Résolution de problèmes courants

### Problèmes d'installation
- **Erreur de dépendances** : Essayez `npm clean-install`
- **Problèmes avec Vite** : Vérifiez que vous utilisez Node.js v14.18+ ou v16+

### Problèmes d'authentification
- Vérifiez que vos variables d'environnement Supabase sont correctement configurées
- Assurez-vous que les règles de sécurité Supabase sont correctement définies

## Performance et Accessibilité

Le projet met un accent particulier sur la performance et l'accessibilité :

- **Performance** : Optimisation des images, code splitting, lazy loading des composants
- **Accessibilité** : Conformité WCAG AA visée, navigation au clavier, support des lecteurs d'écran, liens d'évitement
- **Responsive** : Interface adaptative pour tous les appareils (mobile, tablette, desktop)
- **Thèmes** : Support des modes clair/sombre et préférences de contraste

## Contribuer au projet

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter à geoffroy.streit@gmail.com ou ouvrir une issue sur GitHub.

## Fonctionnalités d'accessibilité et d'apprentissage

### Système de détails contextuels
Le site intègre un système de détails contextuels qui permet aux utilisateurs de découvrir des informations supplémentaires sur des concepts clés, du vocabulaire spécifique ou des méthodes évoquées dans le contenu. Ce système est accessible via :

- Un soulignement pointillé indiquant qu'un terme possède des détails supplémentaires
- Une infobulle apparaissant au survol de la souris
- Une boîte de dialogue complète s'ouvrant au clic sur le terme

Cette fonctionnalité améliore l'expérience d'apprentissage en permettant d'approfondir certains concepts sans quitter la page principale.

### Syntaxe Markdown supportée

Le système supporte les éléments Markdown suivants :
- Titres (`#`, `##`, `###`)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`-`, `1.`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Blocs de code (\```code\```)

## Feuille de route

### Réalisé
- [x] Documentation complète des troubles neurodéveloppementaux
- [x] Glossaire avec système de recherche (plus de 60 termes)
- [x] Témoignages et blog avec système d'import d'articles
- [x] Cartographie des ressources géolocalisées
- [x] Modèle interactif 3D du cerveau
- [x] Système d'authentification utilisateur
- [x] Fonctionnalités d'accessibilité de base

### En cours
- [x] Finalisation du forum de discussion
- [ ] Complétion des questionnaires d'auto-évaluation
- [ ] Amélioration de l'expérience mobile

### Planifié
- [ ] Tests automatisés (unitaires et d'intégration)
- [ ] Support multilingue complet
- [ ] Application mobile native
- [ ] Système de favoris pour les ressources
- [ ] Optimisation des performances

## Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`
