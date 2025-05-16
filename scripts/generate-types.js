// Script pour générer automatiquement les types TypeScript à partir de Supabase
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Créer une interface pour lire l'entrée utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Demander l'ID du projet Supabase
rl.question('Veuillez entrer votre ID de projet Supabase : ', (projectId) => {
  if (!projectId || projectId.trim() === '') {
    console.error('Erreur : ID de projet non valide');
    rl.close();
    return;
  }

  // Vérifier le format de l'ID du projet (généralement 20-22 caractères alphanumériques)
  if (!/^[a-zA-Z0-9]{20,22}$/.test(projectId)) {
    console.warn('Attention : Le format de l\'ID du projet semble inhabituel. Assurez-vous qu\'il est correct.');
  }

  console.log(`Génération des types TypeScript pour le projet ${projectId}...`);

  try {
    // Créer le répertoire de destination s'il n'existe pas
    const typesDir = path.join(__dirname, '..', 'src', 'integrations', 'supabase');
    if (!fs.existsSync(typesDir)) {
      fs.mkdirSync(typesDir, { recursive: true });
    }

    // Exécuter la commande pour générer les types
    const command = `npx supabase gen types typescript --project-id ${projectId} --schema public > src/integrations/supabase/types.ts`;
    execSync(command, { stdio: 'inherit' });

    console.log('\nTypes TypeScript générés avec succès dans src/integrations/supabase/types.ts');
    console.log('\nN\'oubliez pas de mettre à jour votre base de données Supabase avec le script SQL fourni dans le dossier supabase/migrations/');
  } catch (error) {
    console.error('Erreur lors de la génération des types :', error.message);
  }

  rl.close();
});