
import { LucideIcon } from 'lucide-react';
import { Json } from '@/integrations/supabase/types';

export interface BlogAuthor {
  name: string;
  avatar: string;
  bio: string;
}

// Helper type to handle both BlogAuthor and Json from Supabase
export type AuthorData = BlogAuthor | Json;

// Helper functions to safely access author properties
export const getAuthorName = (author: AuthorData): string => {
  if (typeof author === 'object' && author !== null && !Array.isArray(author)) {
    return (author as any).name || '';
  }
  return '';
};

export const getAuthorAvatar = (author: AuthorData): string => {
  try {
    if (typeof author === 'object' && author !== null && !Array.isArray(author)) {
      const avatar = (author as any).avatar;
      // Check if the avatar exists and is a valid string
      if (avatar && typeof avatar === 'string' && avatar.trim() !== '') {
        // Handle external URLs that might cause CORS issues
        if (avatar.startsWith('https://i.pravatar.cc') || 
            avatar.startsWith('http://i.pravatar.cc')) {
          // Return a local fallback avatar instead of external URLs that might fail
          return '/assets/avatars/avatar-1.png';
        }
        return avatar;
      }
    }
    // Fallback to a default avatar
    return '/assets/avatars/avatar-1.png';
  } catch (error) {
    console.error("Error getting author avatar:", error);
    return '/assets/avatars/avatar-1.png';
  }
};

export const getAuthorBio = (author: AuthorData): string => {
  if (typeof author === 'object' && author !== null && !Array.isArray(author)) {
    return (author as any).bio || '';
  }
  return '';
};

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: AuthorData;
  date: string;
  readtime: string;
  likes: number;
  comments: number;
  tags: string[];
  image?: string;
  icon?: string;
  avatar_id?: string;
  avatar_url?: string;
}
