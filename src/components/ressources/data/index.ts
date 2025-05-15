import { documents } from './documents';
import { articles } from './articles';
import { media } from './media';
import { tools } from './tools';
import { onlineResources } from './online';
import { ResourcesData, AuthorInfo } from '../types';

// Information de contact de l'auteur
export const authorInfo: AuthorInfo = {
  name: "Centre National d'Information sur les Neurodiversités",
  email: "contact@cnineurodiversite.fr",
  website: "https://www.cnineurodiversite.fr",
  lastUpdate: "Avril 2025"
};

// Regroupement de toutes les ressources
export const resourcesData: ResourcesData = {
  documents,
  articles,
  media,
  tools,
  online: onlineResources
};

// Exporter les données individuelles
export { documents, articles, media, tools, onlineResources };