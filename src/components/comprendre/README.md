# Plan de Refactorisation pour Comprendre.tsx

## Analyse du problème

Le fichier `Comprendre.tsx` est actuellement très volumineux (plus de 760 lignes) et contient plusieurs sections distinctes qui peuvent être extraites en composants séparés pour améliorer la maintenabilité et la lisibilité du code.

Les sections principales identifiées sont :
- Définitions clés
- Fonctionnement cérébral
- Historique
- Chiffres clés
- Approches
- Ressources d'apprentissage

## Architecture proposée

### Structure des dossiers

```
src/
  components/
    comprendre/
      definitions/
        NeurotypiqueVsNeurodivergent.tsx
        ModelesMedicalSocial.tsx
        GlossaireTermes.tsx
        ParadigmesFondamentaux.tsx
        index.tsx (exporte DefinitionsTab)
      cerveau/
        FonctionnementCerebral.tsx
        index.tsx (exporte CerveauTab)
      historique/
        HistoriqueNeurodiversite.tsx
        FiguresEmblematiques.tsx
        index.tsx (exporte HistoriqueTab)
      statistiques/
        ChiffresStatistiques.tsx
        index.tsx (exporte StatistiquesTab)
      approches/
        ApprochesAccompagnement.tsx
        index.tsx (exporte ApprochesTab)
      ressources/
        RessourcesApprentissage.tsx
        index.tsx (exporte RessourcesSection)
      layout/
        HeroSection.tsx
        TabsContainer.tsx
      index.ts (exporte tous les composants principaux)
```

### Composants principaux

1. **HeroSection** : La bannière principale avec le titre et les boutons de navigation
2. **TabsContainer** : Le conteneur des onglets pour les différentes sections
3. **DefinitionsTab** : L'onglet des définitions clés
4. **CerveauTab** : L'onglet du fonctionnement cérébral
5. **HistoriqueTab** : L'onglet de l'historique
6. **StatistiquesTab** : L'onglet des chiffres clés
7. **ApprochesTab** : L'onglet des approches
8. **RessourcesSection** : La section des ressources d'apprentissage

## Plan d'implémentation

### Étape 1 : Créer la structure de dossiers

Créer la structure de dossiers proposée ci-dessus dans `src/components/comprendre/`.

### Étape 2 : Extraire les composants de base

1. Extraire `HeroSection.tsx` et `TabsContainer.tsx` dans le dossier `layout`
2. Créer les fichiers `index.tsx` pour chaque section (definitions, cerveau, historique, statistiques, approches, ressources)

### Étape 3 : Implémenter les composants de chaque section

1. Extraire les composants de la section Définitions
2. Extraire les composants de la section Cerveau
3. Extraire les composants de la section Historique
4. Extraire les composants de la section Statistiques
5. Extraire les composants de la section Approches
6. Extraire les composants de la section Ressources

### Étape 4 : Refactoriser le composant principal

Réécrire le composant `Comprendre.tsx` pour utiliser les nouveaux composants modulaires.

### Étape 5 : Tests et validation

Vérifier que toutes les fonctionnalités, liens et dépendances sont préservés après la refactorisation.

## Avantages de cette refactorisation

1. **Maintenabilité améliorée** : Chaque composant a une responsabilité unique et claire
2. **Lisibilité accrue** : Les fichiers plus petits sont plus faciles à comprendre
3. **Réutilisabilité** : Les composants peuvent être réutilisés dans d'autres parties de l'application
4. **Performance** : Possibilité d'optimiser le chargement avec React.lazy() pour les composants volumineux
5. **Collaboration** : Plusieurs développeurs peuvent travailler sur différents composants simultanément

## Considérations importantes

- Maintenir la cohérence des styles et des animations
- Préserver les références pour le défilement fluide
- S'assurer que les imports sont correctement configurés
- Conserver les props et les états nécessaires entre les composants