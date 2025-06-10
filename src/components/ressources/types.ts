// Types pour les ressources

// Type pour les documents
export interface Document {
  id: number;
  title: string;
  type: string;
  description: string;
  author: string;
  date: string;
  link: string;
  consultLink?: string;
  size: string;
}

// Type pour les articles
export interface Article {
  id: number;
  title: string;
  journal: string;
  author: string;
  date: string;
  description: string;
  link: string;
}

// Type pour les médias
export interface Media {
  id: number;
  title: string;
  type: string;
  duration: string;
  author: string;
  date: string;
  description: string;
  link: string;
  thumbnail: string;
}

// Type pour les outils
export interface Tool {
  id: number;
  title: string;
  platform: string;
  type: string;
  audience: string;
  description: string;
  link: string;
  price: string;
  thumbnail?: string;
}

// Type pour les ressources en ligne
export interface OnlineResource {
  id: number;
  title: string;
  type: string;
  organization: string;
  description: string;
  link: string;
  language: string;
  access: string;
}

// Type pour les informations de l'auteur
export interface AuthorInfo {
  name: string;
  email: string;
  website: string;
  lastUpdate: string;
}

// Type pour la pagination
export interface PaginationState {
  documents: number;
  articles: number;
  media: number;
  tools: number;
  online: number;
}

// Type pour toutes les ressources
export interface ResourcesData {
  documents: Document[];
  articles: Article[];
  media: Media[];
  tools: Tool[];
  online: OnlineResource[];
}