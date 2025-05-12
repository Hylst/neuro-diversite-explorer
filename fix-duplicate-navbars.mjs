// Script pour corriger les pages avec des barres de navigation dupliquées
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire actuel en utilisant ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction pour corriger un fichier
function fixFile(filePath) {
  try {
    // Lire le contenu du fichier
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Vérifier si le fichier contient les imports de MainNavbar et Footer
    const hasMainNavbar = content.includes("import MainNavbar from '@/components/layout/MainNavbar'") || 
                          content.includes('import MainNavbar from "@/components/layout/MainNavbar"');
    const hasFooter = content.includes("import Footer from '@/components/layout/Footer'") || 
                      content.includes('import Footer from "@/components/layout/Footer"');
    
    if (hasMainNavbar || hasFooter) {
      // Supprimer les imports
      content = content.replace(/import MainNavbar from ['"]@\/components\/layout\/MainNavbar['"];?\n?/g, '');
      content = content.replace(/import Footer from ['"]@\/components\/layout\/Footer['"];?\n?/g, '');
      
      // Supprimer les composants MainNavbar et Footer du JSX
      content = content.replace(/<MainNavbar \/>\n?\s*/g, '');
      content = content.replace(/\n?\s*<Footer \/>\n?/g, '');
      
      // Remplacer la structure div avec min-h-screen par une structure plus simple
      content = content.replace(
        /<div className="min-h-screen flex flex-col">\s*<MainNavbar \/>\s*<main className="flex-1">/g, 
        '<div>'
      );
      content = content.replace(
        /<\/main>\s*<Footer \/>\s*<\/div>/g, 
        '</div>'
      );
      
      // Écrire le contenu modifié dans le fichier
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Corrigé: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Erreur lors de la correction de ${filePath}:`, error);
    return false;
  }
}

// Fonction pour parcourir récursivement un répertoire
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  let count = 0;
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Récursion pour les sous-répertoires
      count += processDirectory(filePath);
    } else if (stat.isFile() && file.endsWith('.tsx')) {
      // Traiter uniquement les fichiers .tsx
      if (fixFile(filePath)) {
        count++;
      }
    }
  }
  
  return count;
}

// Répertoire principal des pages
const pagesDir = path.join(__dirname, 'src', 'pages');

// Exécuter la correction
const fixedCount = processDirectory(pagesDir);
console.log(`Correction terminée. ${fixedCount} fichiers ont été corrigés.`);