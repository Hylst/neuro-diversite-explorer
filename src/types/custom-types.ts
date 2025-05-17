
// Types personnalisés pour l'application
// Fusionné depuis updated-custom-types.ts pour éviter la duplication
import { Database } from '@/integrations/supabase/types';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Favorite = Database['public']['Tables']['favorites']['Row'];
export type Comment = Database['public']['Tables']['comments']['Row'];

// Nouveaux types pour les tables ajoutées
export type AssessmentResult = Database['public']['Tables']['assessment_results']['Row'];
export type UserNote = Database['public']['Tables']['user_notes']['Row'];

export interface UserSession {
  user: {
    id: string;
    email?: string;
  } | null;
  session: unknown | null;
}

export interface UserProfile {
  username: string;
  avatar_url: string | null;
  avatar_base64: string | null; // Nouveau champ ajouté
  bio: string | null;
  interests: string[] | null;
  preferred_themes: 'light' | 'dark' | 'system';
  accessibility_settings: {
    highContrast: boolean;
    largeText: boolean;
    reduceMotion: boolean;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  content?: string;
  readTime?: string;
  image?: string;
}

export interface ResourceProps {
  id: number;
  name: string;
  type: string;
  region: string;
  description: string;
  website: string;
  rating?: number;
  reviews?: number;
}

export interface EventProps {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
}

export interface AssessmentResult {
  score?: number;
  level: string;
  description: string;
  color: string;
  suggestions?: string[];
}

// Ajouter d'autres types personnalisés au besoin

