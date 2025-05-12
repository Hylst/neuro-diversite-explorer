
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, FileText, Globe, BookOpen, Search, BookMarked, FileSearch } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface Reference {
  id: number;
  title: string;
  author: string;
  year: string;
  type: 'book' | 'article' | 'website' | 'research';
  description: string;
  link?: string;
  topics: string[];
}

const references: Reference[] = [
  {
    id: 1,
    title: "Neurotribes: The Legacy of Autism and the Future of Neurodiversity",
    author: "Steve Silberman",
    year: "2015",
    type: "book",
    description: "Une histoire complète de l'autisme et un plaidoyer pour la célébration de la neurodiversité.",
    topics: ["Autisme", "Histoire", "Neurodiversité"]
  },
  {
    id: 2,
    title: "L'autisme expliqué aux non-autistes",
    author: "Brigitte Harrisson et Lise St-Charles",
    year: "2017",
    type: "book",
    description: "Approche accessible pour comprendre le fonctionnement autistique du point de vue des personnes concernées.",
    topics: ["Autisme", "Vie quotidienne"]
  },
  {
    id: 3,
    title: "Vivre avec le TDAH à l'âge adulte",
    author: "Mélanie Grégoire",
    year: "2019",
    type: "book",
    description: "Guide pratique pour les adultes vivant avec un TDAH, avec des stratégies concrètes.",
    topics: ["TDAH", "Vie quotidienne", "Adultes"]
  },
  {
    id: 4,
    title: "La constellation des dys",
    author: "Michèle Mazeau",
    year: "2020",
    type: "book",
    description: "Panorama complet des troubles DYS et de leurs impacts sur l'apprentissage.",
    topics: ["Troubles Dys", "Apprentissage"]
  },
  {
    id: 5,
    title: "Ces troubles qui nous troublent",
    author: "Julie Dachez",
    year: "2018",
    type: "book",
    description: "Réflexion sur la neurodiversité et son acceptation dans la société contemporaine.",
    topics: ["Neurodiversité", "Société", "Inclusion"]
  },
  {
    id: 6,
    title: "Accompagner un enfant autiste",
    author: "Peter Vermeulen",
    year: "2016",
    type: "book",
    description: "Conseils pratiques pour les parents et les éducateurs d'enfants autistes.",
    topics: ["Autisme", "Parentalité", "Éducation"]
  },
  {
    id: 7,
    title: "L'autisme et les troubles d'apprentissage spécifiques",
    author: "Tony Attwood",
    year: "2022",
    type: "article",
    description: "Analyse des comorbidités entre l'autisme et les troubles d'apprentissage.",
    link: "https://example.com/article1",
    topics: ["Autisme", "Troubles Dys", "Comorbidités"]
  },
  {
    id: 8,
    title: "Stratégies sensorielles pour les personnes neurodivergentes",
    author: "Centre de recherche sur la neurodiversité",
    year: "2023",
    type: "article",
    description: "Techniques et approches pour gérer les hypersensibilités sensorielles.",
    link: "https://example.com/article2",
    topics: ["Sensorialité", "Bien-être", "Adaptation"]
  },
  {
    id: 9,
    title: "Spectrum News",
    author: "Équipe éditoriale de Spectrum",
    year: "Actualisé régulièrement",
    type: "website",
    description: "Site d'information scientifique sur l'autisme et la neurodiversité.",
    link: "https://example.com/spectrum",
    topics: ["Autisme", "Recherche", "Actualités"]
  },
  {
    id: 10,
    title: "TDAH France",
    author: "Association TDAH France",
    year: "Actualisé régulièrement",
    type: "website",
    description: "Ressources et soutien pour les personnes concernées par le TDAH en France.",
    link: "https://example.com/tdahfrance",
    topics: ["TDAH", "Ressources", "France"]
  },
  {
    id: 11,
    title: "La dyspraxie à tous les âges de la vie",
    author: "Caroline Huron",
    year: "2021",
    type: "book",
    description: "Évolution et adaptation des personnes dyspraxiques de l'enfance à l'âge adulte.",
    topics: ["Dyspraxie", "Développement", "Vie quotidienne"]
  },
  {
    id: 12,
    title: "Neuropsychologie des troubles d'apprentissage",
    author: "Michèle Mazeau et Alain Pouhet",
    year: "2018",
    type: "research",
    description: "Étude approfondie des mécanismes neurocognitifs impliqués dans les troubles d'apprentissage.",
    topics: ["Neuropsychologie", "Troubles Dys", "Apprentissage"]
  },
  {
    id: 13,
    title: "Impact des interventions précoces chez les enfants autistes",
    author: "Équipe de recherche de l'Université de Montréal",
    year: "2022",
    type: "research",
    description: "Méta-analyse des études sur l'efficacité des interventions précoces.",
    link: "https://example.com/research1",
    topics: ["Autisme", "Intervention précoce", "Recherche"]
  },
  {
    id: 14,
    title: "Comprendre le cerveau dyslexique",
    author: "Stanislas Dehaene",
    year: "2017",
    type: "research",
    description: "Études en neuroimagerie sur les particularités cérébrales liées à la dyslexie.",
    link: "https://example.com/research2",
    topics: ["Dyslexie", "Neurosciences", "Cerveau"]
  },
  {
    id: 15,
    title: "Le guide TDAH pour les adultes",
    author: "Russell A. Barkley",
    year: "2020",
    type: "book",
    description: "Ouvrage de référence pour comprendre et gérer le TDAH à l'âge adulte.",
    topics: ["TDAH", "Adultes", "Gestion quotidienne"]
  },
  {
    id: 16,
    title: "Développer les compétences sociales des personnes autistes",
    author: "Michelle Garcia Winner",
    year: "2019",
    type: "book",
    description: "Méthodologie pour l'apprentissage des habiletés sociales chez les personnes autistes.",
    topics: ["Autisme", "Compétences sociales", "Éducation"]
  },
  {
    id: 17,
    title: "Dyslexie et technologies d'assistance",
    author: "Association internationale de la dyslexie",
    year: "2023",
    type: "website",
    description: "Ressources sur les outils numériques pour compenser les difficultés liées à la dyslexie.",
    link: "https://example.com/dyslexiatech",
    topics: ["Dyslexie", "Technologie", "Outils"]
  },
  {
    id: 18,
    title: "Neurodiversité en milieu professionnel",
    author: "Fabienne Cazalis",
    year: "2021",
    type: "article",
    description: "Analyse des enjeux d'inclusion et des adaptations nécessaires en entreprise.",
    link: "https://example.com/article3",
    topics: ["Emploi", "Inclusion", "Adaptations"]
  }
];

const Bibliography = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [topicFilter, setTopicFilter] = useState<string | null>(null);

  // Extraire tous les sujets uniques
  const allTopics = Array.from(new Set(references.flatMap(ref => ref.topics)));

  // Filtrer les références
  const filteredReferences = references.filter(ref => {
    // Filtre par type
    const typeMatch = activeTab === 'all' || ref.type === activeTab;
    
    // Filtre par sujet
    const topicMatch = !topicFilter || ref.topics.includes(topicFilter);
    
    // Filtre par recherche textuelle
    const searchMatch = 
      searchTerm === '' || 
      ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ref.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ref.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return typeMatch && topicMatch && searchMatch;
  });

  // Fonction pour obtenir l'icône selon le type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <Book className="h-4 w-4" />;
      case 'article':
        return <FileText className="h-4 w-4" />;
      case 'website':
        return <Globe className="h-4 w-4" />;
      case 'research':
        return <FileSearch className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 bg-background rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookMarked className="h-6 w-6 text-neuro-purple" />
        Bibliographie
      </h2>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par titre, auteur ou contenu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="book">Livres</TabsTrigger>
            <TabsTrigger value="article">Articles</TabsTrigger>
            <TabsTrigger value="website">Sites Web</TabsTrigger>
            <TabsTrigger value="research">Recherches</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="mb-6">
        <p className="text-sm mb-2">Filtrer par sujet :</p>
        <div className="flex flex-wrap gap-2">
          {topicFilter && (
            <Badge 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => setTopicFilter(null)}
            >
              Tous
            </Badge>
          )}
          {allTopics.map(topic => (
            <Badge 
              key={topic} 
              variant={topicFilter === topic ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setTopicFilter(topic === topicFilter ? null : topic)}
            >
              {topic}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredReferences.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            Aucune référence ne correspond à votre recherche.
          </div>
        ) : (
          <>
            <div className="text-sm text-muted-foreground mb-2">
              {filteredReferences.length} résultat{filteredReferences.length > 1 ? 's' : ''}
            </div>
            {filteredReferences.map(ref => (
              <div key={ref.id} className="border p-4 rounded-lg hover:border-neuro-purple transition-colors">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {getTypeIcon(ref.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{ref.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {ref.author} • {ref.year}
                    </p>
                    <p className="text-sm mt-2">{ref.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {ref.topics.map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    {ref.link && (
                      <div className="mt-3">
                        <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                          <a href={ref.link} target="_blank" rel="noopener noreferrer">
                            Consulter la ressource
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Bibliography;
