# Instructions pour la mise à jour de la base de données Supabase

## Contexte

Ce dossier contient des scripts SQL pour mettre à jour la structure de la base de données Supabase de l'application NeuroDiversité Explorer. Le script principal `add_avatar_base64_and_enhancements.sql` ajoute la colonne `avatar_base64` à la table `profiles` et crée de nouvelles tables pour stocker les résultats d'évaluation et les notes des utilisateurs.

## Comment exécuter le script

1. Connectez-vous à votre projet Supabase via le tableau de bord (https://app.supabase.io)
2. Naviguez vers l'onglet "SQL Editor"
3. Copiez le contenu du fichier `add_avatar_base64_and_enhancements.sql`
4. Collez-le dans l'éditeur SQL
5. Cliquez sur "Run" pour exécuter le script

## Résolution du problème de génération des types TypeScript

Pour résoudre l'erreur lors de l'exécution de la commande `npx supabase gen types typescript`, vous devez utiliser votre ID de projet Supabase réel au lieu de `votre-id-projet`. 

Voici comment procéder :

1. Connectez-vous à votre tableau de bord Supabase
2. Allez dans les paramètres du projet (icône d'engrenage)
3. Dans l'onglet "General", vous trouverez votre "Project ID" (un identifiant de format `abcdefghijklmnopqrst`)
4. Utilisez cette valeur dans la commande :

```bash
npx supabase gen types typescript --project-id votre-id-projet-réel --schema public > src/integrations/supabase/types.ts
```

## Améliorations apportées à la base de données

Le script effectue les modifications suivantes :

1. **Ajout de la colonne `avatar_base64` à la table `profiles`** - Permet de stocker les avatars directement en base64 dans la base de données

2. **Création de la table `assessment_results`** - Pour stocker les résultats des évaluations de neurodiversité des utilisateurs
   - Champs : id, user_id, assessment_type, score, level, description, color, suggestions, created_at, updated_at

3. **Création de la table `user_notes`** - Pour permettre aux utilisateurs de prendre des notes personnelles
   - Champs : id, user_id, title, content, tags, created_at, updated_at

4. **Configuration de la sécurité RLS (Row Level Security)** - Assure que les utilisateurs ne peuvent accéder qu'à leurs propres données

5. **Création d'index** - Optimise les performances des requêtes fréquentes

6. **Mise en place de triggers** - Met à jour automatiquement les timestamps lors des modifications

## Après l'exécution du script

Après avoir exécuté le script avec succès, n'oubliez pas de régénérer les types TypeScript avec la commande mentionnée ci-dessus pour que votre application puisse utiliser les nouvelles structures de données.