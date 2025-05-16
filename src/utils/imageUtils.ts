/**
 * Utilitaires pour la manipulation d'images
 */

/**
 * Redimensionne une image et la convertit en base64
 * @param file - Le fichier image à traiter
 * @param maxWidth - Largeur maximale de l'image (par défaut 92px)
 * @param maxHeight - Hauteur maximale de l'image (par défaut 92px)
 * @param format - Format de sortie (par défaut 'jpeg')
 * @param quality - Qualité de l'image (0-1, par défaut 0.8)
 * @returns Promise avec la chaîne base64 de l'image
 */
export const resizeAndConvertToBase64 = (
  file: File,
  maxWidth: number = 92,
  maxHeight: number = 92,
  format: 'jpeg' | 'png' = 'jpeg',
  quality: number = 0.8
): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Créer un élément image pour charger le fichier
    const img = new Image();
    const reader = new FileReader();

    // Lire le fichier comme une URL de données
    reader.onload = (e) => {
      if (!e.target?.result) {
        reject(new Error('Échec de la lecture du fichier'));
        return;
      }

      // Charger l'image à partir de l'URL de données
      img.onload = () => {
        // Calculer les dimensions proportionnelles
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round(height * (maxWidth / width));
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round(width * (maxHeight / height));
            height = maxHeight;
          }
        }

        // Créer un canvas pour redimensionner l'image
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        // Dessiner l'image redimensionnée sur le canvas
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Impossible de créer le contexte de canvas'));
          return;
        }
        
        ctx.drawImage(img, 0, 0, width, height);

        // Convertir le canvas en base64
        const dataUrl = canvas.toDataURL(`image/${format}`, quality);
        
        // Extraire uniquement la partie base64 (sans le préfixe data:image/...)
        const base64 = dataUrl.split(',')[1];
        resolve(base64);
      };

          img.onerror = () => {
        reject(new Error('Échec du chargement de l\'image'));
      };

      img.src = e.target.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Échec de la lecture du fichier'));
    };

    reader.readAsDataURL(file);
  });
};