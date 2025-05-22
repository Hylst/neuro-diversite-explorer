# Erreurs de Codage Courantes à Éviter

## Erreurs TypeScript dans le Projet NeuroDiversité Explorer

Ce document répertorie les erreurs courantes rencontrées dans notre projet et fournit des conseils pour les éviter à l'avenir.

## 1. Propriétés manquantes dans les objets

### Problème

Erreur : `Property 'X' does not exist on type 'Y'`

Cette erreur se produit lorsque vous essayez d'accéder à une propriété qui n'a pas été définie dans l'objet ou l'interface.

### Exemple d'erreur

```typescript
// Dans Organisation.tsx
<GlossaryTerm {...organisationGlossary.stationsTravaill}>Stations de travail</GlossaryTerm>
// Erreur: Property 'stationsTravaill' does not exist on type...
```

### Solution

1. Vérifiez l'orthographe exacte des propriétés (attention aux fautes de frappe)
2. Assurez-vous que toutes les propriétés utilisées sont correctement définies dans l'objet source
3. Utilisez des interfaces TypeScript pour définir clairement la structure des objets

```typescript
// Définir correctement toutes les propriétés dans l'objet
const organisationGlossary = {
  stationsTravaill: { /* ... */ },  // Propriété correctement définie
  // ...
};
```

## 2. Erreurs de syntaxe dans la définition des objets

### Problème

Erreurs comme : 
- `',' expected.`
- `This expression is not callable.`
- `Unterminated string literal.`

Ces erreurs se produisent lorsque la syntaxe de définition d'un objet est incorrecte.

### Exemple d'erreur

```typescript
// Syntaxe incorrecte
stationsTravaill: {
  term: 'Stations de travail',
  title: 'Stations de travail dédiées',
  information // Erreur: virgule manquante et utilisation incorrecte du raccourci de propriété
  'définition': // Erreur: chaîne non terminée et utilisation incorrecte des guillemets
  definition // Erreur: nom de propriété sans valeur
}
```

### Solution

1. Assurez-vous que chaque paire clé-valeur est séparée par une virgule
2. Vérifiez que toutes les chaînes de caractères sont correctement fermées avec le même type de guillemets
3. Utilisez la syntaxe correcte pour les objets JavaScript/TypeScript
4. Utilisez un éditeur avec coloration syntaxique et validation en temps réel

```typescript
// Syntaxe correcte
stationsTravaill: {
  term: 'Stations de travail',
  title: 'Stations de travail dédiées',
  definition: `<p>Contenu de la définition...</p>`
}
```

## 3. Cohérence des noms de propriétés

### Problème

Utilisation incohérente des noms de propriétés entre la définition et l'utilisation.

### Exemple d'erreur

```typescript
// Dans le glossaire
const glossary = {
  item: { definition: '...' }
};

// Dans le composant
<Component {...glossary.itemm}> // Erreur: faute de frappe 'itemm'
```

### Solution

1. Adoptez une convention de nommage cohérente (camelCase, snake_case, etc.)
2. Utilisez des constantes pour les noms de propriétés utilisés à plusieurs endroits
3. Envisagez d'utiliser TypeScript avec des interfaces strictes

```typescript
// Définir une interface
interface GlossaryItem {
  term: string;
  title: string;
  definition: string;
}

interface GlossaryData {
  [key: string]: GlossaryItem;
}

const glossary: GlossaryData = {
  // TypeScript vérifiera maintenant la structure
};
```

## 4. Problèmes avec les chaînes de caractères multilignes

### Problème

Erreurs de syntaxe avec les chaînes de caractères multilignes, particulièrement avec les backticks (\`).

### Solution

1. Utilisez des backticks (\`) pour les chaînes multilignes, pas des guillemets simples ou doubles
2. Assurez-vous que chaque backtick d'ouverture a un backtick de fermeture correspondant
3. Faites attention aux caractères d'échappement à l'intérieur des chaînes

```typescript
// Correct
definition: `<p>Première ligne
Deuxième ligne</p>`

// Incorrect
definition: '<p>Première ligne
Deuxième ligne</p>' // Les guillemets simples ne supportent pas les sauts de ligne
```

## Bonnes pratiques générales

1. **Utilisez un linter** comme ESLint pour détecter les erreurs de syntaxe avant l'exécution
2. **Activez le mode strict de TypeScript** pour bénéficier de vérifications plus rigoureuses
3. **Testez régulièrement** votre code pendant le développement, pas seulement à la fin
4. **Utilisez des interfaces** pour définir clairement la structure des objets
5. **Commentez votre code** pour expliquer les structures de données complexes
6. **Factoriser les structures répétitives** pour réduire les risques d'erreurs

En suivant ces conseils, vous pourrez éviter la plupart des erreurs courantes dans le développement TypeScript de notre projet NeuroDiversité Explorer.