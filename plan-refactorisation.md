# Plan de Refactorisation du Composant Troubles.tsx

## Objectif

Refactoriser le fichier `Troubles.tsx` (430+ lignes) en composants modulaires pour améliorer la maintenabilité, la lisibilité et les performances du code.

## Structure de Dossiers Proposée

```
src/
  components/
    troubles/
      common/
        TroubleCard.tsx         # Composant réutilisable pour les cartes de troubles
        TroubleIcon.tsx         # Composant pour gérer les icônes des troubles
        TroubleHeader.tsx       # En-tête commun pour les pages de troubles
      dys/
        DysTroublesList.tsx     # Liste des troubles Dys
        DysTroublesSection.tsx  # Section complète des troubles Dys
      tdah/
        TDAHSection.tsx         # Section TDAH
      tsa/
        TSASection.tsx          # Section TSA (Autisme)
      neuro/
        NeuroSection.tsx        # Section troubles neurodégénératifs
        NeuroDegeneratifsCard.tsx # Carte pour maladies neurodégénératives
        LesionsCerebralesCard.tsx # Carte pour troubles post-traumatiques
  pages/
    Troubles.tsx               # Page principale refactorisée
    troubles/
      # Pages existantes conservées
```

## Plan d'Action Détaillé

### 1. Créer les Composants Communs

#### 1.1 TroubleCard.tsx
- Créer un composant réutilisable pour les cartes de troubles
- Paramètres: id, title, description, symptoms, color, icon
- Inclure le bouton "En savoir plus" avec lien dynamique

#### 1.2 TroubleIcon.tsx
- Extraire la logique des icônes dans un composant séparé
- Centraliser la gestion des icônes pour tous les troubles

#### 1.3 TroubleHeader.tsx
- Créer un composant d'en-tête réutilisable pour les pages de détail
- Paramètres: title, description, icon

### 2. Refactoriser les Sections de Troubles

#### 2.1 Section Troubles Dys
- Créer `DysTroublesList.tsx` pour la liste des troubles Dys
- Créer `DysTroublesSection.tsx` qui inclut la liste et le texte explicatif
- Utiliser les composants communs pour les cartes

#### 2.2 Section TDAH
- Créer `TDAHSection.tsx` pour encapsuler tout le contenu TDAH
- Utiliser les composants communs pour la structure

#### 2.3 Section TSA (Autisme)
- Créer `TSASection.tsx` pour encapsuler tout le contenu TSA
- Utiliser les composants communs pour la structure

#### 2.4 Section Troubles Neurodégénératifs
- Créer `NeuroSection.tsx` pour la section principale
- Créer `NeuroDegeneratifsCard.tsx` pour la carte des maladies neurodégénératives
- Créer `LesionsCerebralesCard.tsx` pour la carte des troubles post-traumatiques

### 3. Refactoriser la Page Principale

#### 3.1 Troubles.tsx
- Importer et utiliser les nouveaux composants modulaires
- Conserver uniquement la structure principale (en-tête, onglets)
- Réduire la taille du fichier en déléguant le contenu aux composants

### 4. Mise à Jour des Routes et Liens

- Vérifier que tous les liens internes fonctionnent correctement
- S'assurer que les routes vers les pages détaillées sont maintenues

## Avantages de cette Refactorisation

1. **Maintenabilité améliorée**: Fichiers plus petits et plus faciles à comprendre
2. **Réutilisation du code**: Composants communs utilisables dans différentes sections
3. **Performance**: Chargement potentiellement plus rapide grâce à des composants plus petits
4. **Développement parallèle**: Possibilité de travailler sur différentes sections indépendamment
5. **Testabilité**: Composants plus petits et plus faciles à tester

## Étapes d'Implémentation

1. Créer les composants communs
2. Créer les composants de section pour chaque type de trouble
3. Refactoriser la page principale pour utiliser ces composants
4. Tester toutes les fonctionnalités et liens
5. Optimiser si nécessaire

Cette approche modulaire permettra de maintenir toutes les fonctionnalités existantes tout en améliorant significativement la structure du code.