
import { BrainRegion } from '../types/brain-types';

export const brainRegions: BrainRegion[] = [
  {
    id: 'frontal',
    name: 'Lobe frontal',
    description: 'Contrôle des fonctions exécutives, prise de décision, planification',
    meshName: 'frontal',
    functions: ['Fonctions exécutives', 'Contrôle moteur', 'Langage expressif', 'Régulation émotionnelle', 'Planification'],
    disorders: ['TDAH', 'Troubles exécutifs', 'Changements de personnalité', 'Aphasie de Broca'],
    color: '#8B5CF6', // Purple
  },
  {
    id: 'parietal',
    name: 'Lobe pariétal',
    description: 'Traitement sensoriel, orientation spatiale, calcul',
    meshName: 'parietal',
    functions: ['Intégration sensorielle', 'Perception spatiale', 'Calcul mental', 'Traitement tactile', 'Orientation corporelle'],
    disorders: ['Dyscalculie', 'Négligence spatiale', 'Apraxie', 'Troubles de l\'attention'],
    color: '#10B981', // Green
  },
  {
    id: 'temporal',
    name: 'Lobe temporal',
    description: 'Audition, mémoire, langage, reconnaissance visuelle',
    meshName: 'temporal',
    functions: ['Audition', 'Compréhension du langage', 'Mémoire à long terme', 'Reconnaissance des objets', 'Traitement émotionnel'],
    disorders: ['Dyslexie', 'Épilepsie temporale', 'Syndrome de Korsakoff', 'Difficultés de reconnaissance'],
    color: '#0EA5E9', // Blue
  },
  {
    id: 'occipital',
    name: 'Lobe occipital',
    description: 'Traitement visuel, reconnaissance des formes et couleurs',
    meshName: 'occipital',
    functions: ['Traitement visuel', 'Reconnaissance des couleurs', 'Perception du mouvement', 'Interprétation visuelle'],
    disorders: ['Agnosie visuelle', 'Cécité corticale', 'Hallucinations visuelles', 'Prosopagnosie'],
    color: '#F59E0B', // Amber
  },
  {
    id: 'cerebellum',
    name: 'Cervelet',
    description: 'Coordination motrice, équilibre, posture, certaines fonctions cognitives',
    meshName: 'cerebellum',
    functions: ['Coordination motrice', 'Équilibre', 'Apprentissage moteur', 'Timing des mouvements'],
    disorders: ['Dyspraxie', 'Ataxie', 'Dysarthrie', 'Troubles de l\'équilibre'],
    color: '#F97316', // Orange
  },
  {
    id: 'brainstem',
    name: 'Tronc cérébral',
    description: 'Fonctions vitales, respiration, rythme cardiaque, vigilance',
    meshName: 'brainstem',
    functions: ['Fonctions autonomes', 'Respiration', 'Rythme cardiaque', 'Vigilance', 'Réflexes'],
    disorders: ['Troubles du sommeil', 'Atteintes des nerfs crâniens', 'Problèmes respiratoires'],
    color: '#EF4444', // Red
  },
  {
    id: 'limbic',
    name: 'Système limbique',
    description: 'Émotions, mémoire, comportement, motivation',
    meshName: 'limbic',
    functions: ['Traitement émotionnel', 'Formation de la mémoire', 'Motivation', 'Comportements instinctifs'],
    disorders: ['Troubles anxieux', 'Dépression', 'Syndrome de stress post-traumatique', 'Amnésie'],
    color: '#EC4899', // Pink
  },
];
