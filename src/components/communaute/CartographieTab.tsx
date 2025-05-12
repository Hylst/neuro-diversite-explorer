
import React, { useState } from 'react';
import ResourceSearch from './ResourceSearch';
import ResourceFilterButtons from './ResourceFilterButtons';
import ResourceList from './ResourceList';
import ResourceSubmissionForm from './ResourceSubmissionForm';

interface Resource {
  id: number;
  name: string;
  type: string;
  region: string;
  description: string;
  website: string;
  rating: number;
  reviews: number;
  address?: string;
  phone?: string;
  email?: string;
}

const CartographieTab = () => {
  const [resources, setResources] = useState<Resource[]>([
    {
      id: 1,
      name: "Centre Ressources Autisme Île-de-France",
      type: "Professionnel",
      region: "Île-de-France",
      description: "Centre pluridisciplinaire spécialisé dans l'évaluation et l'accompagnement des troubles neurodéveloppementaux",
      website: "https://www.craif.org",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: "Association Française de Gestion des Services Spécialisés",
      type: "Association",
      region: "National",
      description: "Sensibilisation, accompagnement et défense des droits des personnes neurodivergentes",
      website: "https://www.afgsa.fr",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 3,
      name: "Autism Connect",
      type: "Service en ligne",
      region: "En ligne",
      description: "Plateforme digitale de mise en relation avec des professionnels et ressources en neurodiversité",
      website: "https://www.autismconnect.com",
      rating: 4.7,
      reviews: 178
    },
    {
      id: 4,
      name: "Collectif Neurodiversité Auvergne",
      type: "Communauté",
      region: "Auvergne-Rhône-Alpes",
      description: "Groupe d'entraide et d'activités pour adultes neurodivergents",
      website: "https://www.collectif-neurodiversite-auvergne.org",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 5,
      name: "Centre de Recherche Cerveau et Cognition",
      type: "Professionnel",
      region: "Occitanie",
      description: "Centre de recherche et de consultation spécialisé en neurosciences et troubles neurodéveloppementaux",
      website: "https://www.cerco.cnrs.fr",
      rating: 4.6,
      reviews: 124
    },
    {
      id: 6,
      name: "FabLab Neurodiversité",
      type: "Professionnel",
      region: "National",
      description: "Développement de solutions technologiques innovantes pour la neurodiversité",
      website: "https://www.fablabfrance.fr",
      rating: 4.7,
      reviews: 92
    },
    {
      id: 7,
      name: "UNAPEI",
      type: "Association",
      region: "National",
      description: "Réseau national de professionnels et structures engagés pour l'inclusion des personnes neurodivergentes",
      website: "https://www.unapei.org",
      rating: 4.8,
      reviews: 167
    },
    {
      id: 8,
      name: "Fédération Française des DYS",
      type: "Service en ligne",
      region: "En ligne",
      description: "Outils et ressources numériques adaptés aux besoins spécifiques des personnes neurodivergentes",
      website: "https://www.ffdys.com",
      rating: 4.5,
      reviews: 145
    },
    {
      id: 9,
      name: "Ludosens",
      type: "Association",
      region: "Nouvelle-Aquitaine",
      description: "Nous sommes une association de la transition. Nous invitons à un changement de paradigme sur la différence. Longtemps perçu sous le prisme de la pathologie, le handicap invisible (TSA, TDAH, DYS…) est pour nous une invitation à faire société différemment. Nous mettons en place différentes solutions d'inclusion, innovantes et évolutives autour des publics ayant reçu ces diagnostics.",
      website: "https://ludosens.com",
      rating: 4.9,
      reviews: 112,
      address: "1 Place du 14 Juillet - 33130, Bègles",
      phone: "06.31.02.11.97",
      email: "contact@ludosens.com"
    }
  ]);

  const [filteredResources, setFilteredResources] = useState(resources);

  const handleSearch = (query: string, filters: { type: string; region: string }) => {
    let results = resources;
    
    if (query) {
      const searchTerm = query.toLowerCase();
      results = results.filter(resource => 
        resource.name.toLowerCase().includes(searchTerm) || 
        resource.description.toLowerCase().includes(searchTerm)
      );
    }
    
    if (filters.type && filters.type !== "all") {
      results = results.filter(resource => resource.type === filters.type);
    }
    
    if (filters.region && filters.region !== "all") {
      results = results.filter(resource => resource.region === filters.region);
    }
    
    setFilteredResources(results);
  };

  const handleFilterClick = (type: string, region: string) => {
    handleSearch('', { type, region });
  };

  React.useEffect(() => {
    const handleResetFilters = () => handleSearch('', { type: '', region: '' });
    window.addEventListener('resetFilters', handleResetFilters);
    return () => window.removeEventListener('resetFilters', handleResetFilters);
  }, [resources]);

  return (
    <div className="mb-8">
      <ResourceSearch onSearch={handleSearch} />
      <ResourceFilterButtons onFilterClick={handleFilterClick} />
      <ResourceList resources={filteredResources} />
      <div className="text-center mt-10">
        <p className="text-muted-foreground mb-4">
          Vous connaissez une ressource qui n'est pas répertoriée ?
        </p>
        <ResourceSubmissionForm />
      </div>
    </div>
  );
};

export default CartographieTab;
