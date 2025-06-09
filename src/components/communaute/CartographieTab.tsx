
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
  // Ressources basées sur des organisations réelles françaises de neurodiversité
  const [resources, setResources] = useState<Resource[]>([
    {
      id: 1,
      name: "Centre Ressources Autisme Île-de-France (CRAIF)",
      type: "Professionnel",
      region: "Île-de-France",
      description: "Centre pluridisciplinaire spécialisé dans l'évaluation et l'accompagnement des troubles du spectre autistique",
      website: "https://www.craif.org",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: "Collectif Atypique",
      type: "Association",
      region: "National",
      description: "Association pour l'inclusion et le mieux-être des personnes issues de la neurodiversité (TDAH, dyslexie, dyscalculie)",
      website: "https://blog.francetvinfo.fr/dans-vos-tetes/",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 3,
      name: "Specialisterne France",
      type: "Service en ligne",
      region: "National",
      description: "Insertion professionnelle des personnes autistes et neurodivergentes dans le secteur technologique",
      website: "https://fr.specialisterne.com",
      rating: 4.7,
      reviews: 178
    },
    {
      id: 4,
      name: "Collectif Parents TDAH Ouest",
      type: "Communauté",
      region: "Ouest de la France",
      description: "Forum francophone pour parents et patients concernés par le TDAH",
      website: "http://www.collectif-parents-tdah-ouest.fr",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 5,
      name: "Délégation Interministérielle TND",
      type: "Professionnel",
      region: "National",
      description: "Stratégie nationale pour les troubles du neurodéveloppement : autisme, Dys, TDAH, TDI",
      website: "https://handicap.gouv.fr",
      rating: 4.6,
      reviews: 124
    },
    {
      id: 6,
      name: "Forum Asperansa",
      type: "Service en ligne",
      region: "National",
      description: "Forum de discussion sur l'autisme et le syndrome d'Asperger",
      website: "https://forum.asperansa.org",
      rating: 4.7,
      reviews: 92
    },
    {
      id: 7,
      name: "Autisme France",
      type: "Association",
      region: "National",
      description: "Association nationale de défense des droits des personnes autistes et de leurs familles",
      website: "https://www.autisme-france.fr",
      rating: 4.8,
      reviews: 167
    },
    {
      id: 8,
      name: "Fédération Française des DYS",
      type: "Service en ligne",
      region: "National",
      description: "Ressources et accompagnement pour les troubles DYS (dyslexie, dyspraxie, dysorthographie)",
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
