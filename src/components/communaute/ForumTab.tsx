
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, MessageSquare, Filter, Users, User, Bell, Search, PenLine } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

// Import des nouveaux composants
import ForumSearchBar from './ForumSearchBar';
import ForumActions from './ForumActions';
import ForumCategoriesTab from './ForumCategoriesTab';
import ForumRecentTab from './ForumRecentTab';
import ForumCreateForm from './ForumCreateForm';
import ForumRules from './ForumRules';
import { ForumCategoryProps } from './ForumCategory';
import { ForumTopicProps } from './ForumTopicItem';
import { getIconForCategory } from './ForumCategory';

const ForumTab = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Référence pour le contenu du forum
  const forumContentRef = useRef<HTMLDivElement>(null);
  
  // Fonction de défilement fluide
  const scrollToContent = () => {
    if (forumContentRef.current) {
      forumContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const categories: ForumCategoryProps[] = [
    {
      id: 'temoignages',
      name: 'Témoignages',
      description: 'Partagez vos expériences personnelles et vos histoires',
      topics: 24,
      icon: getIconForCategory('temoignages')
    },
    {
      id: 'experts',
      name: 'Questions aux experts',
      description: 'Posez vos questions aux professionnels et spécialistes',
      topics: 16,
      icon: getIconForCategory('experts')
    },
    {
      id: 'famille',
      name: 'Parents & Famille',
      description: 'Discussions sur le soutien familial et l\'accompagnement',
      topics: 18,
      icon: getIconForCategory('famille')
    },
    {
      id: 'scolarite',
      name: 'Scolarité',
      description: 'Échanges sur l\'éducation et l\'accompagnement scolaire',
      topics: 12,
      icon: getIconForCategory('scolarite')
    },
    {
      id: 'professionnel',
      name: 'Vie professionnelle',
      description: 'Discussions sur le milieu de travail et l\'emploi',
      topics: 9,
      icon: getIconForCategory('professionnel')
    },
    {
      id: 'diagnostic',
      name: 'Diagnostic',
      description: 'Informations et échanges sur le processus de diagnostic',
      topics: 14,
      icon: getIconForCategory('diagnostic')
    }
  ];
  
  const recentTopics: ForumTopicProps[] = [
    {
      id: 'topic1',
      title: 'Comment expliquer la neurodiversité à mon entourage ?',
      author: 'ClaireB',
      category: 'temoignages',
      date: '2025-05-08',
      replies: 12,
      views: 143,
      lastActivity: '2025-05-09',
      isNew: true
    },
    {
      id: 'topic2',
      title: 'Aménagements scolaires pour enfant avec TDAH',
      author: 'ParentInquiet',
      category: 'scolarite',
      date: '2025-05-07',
      replies: 8,
      views: 98,
      lastActivity: '2025-05-09',
      isNew: true
    },
    {
      id: 'topic3',
      title: 'Ressources pour adultes autistes à Paris',
      author: 'Thomas75',
      category: 'ressources',
      date: '2025-05-06',
      replies: 5,
      views: 67,
      lastActivity: '2025-05-08',
      isNew: false
    },
    {
      id: 'topic4',
      title: 'Conseils pour entretien d\'embauche avec dyspraxie',
      author: 'MarineL',
      category: 'professionnel',
      date: '2025-05-05',
      replies: 14,
      views: 210,
      lastActivity: '2025-05-09',
      isNew: false
    },
    {
      id: 'topic5',
      title: 'Témoignage - Mon diagnostic tardif d\'autisme à 35 ans',
      author: 'NeuroDiff42',
      category: 'temoignages',
      date: '2025-05-04',
      replies: 23,
      views: 278,
      lastActivity: '2025-05-09',
      isNew: false
    },
    {
      id: 'topic6',
      title: 'Quelles démarches pour obtenir une RQTH ?',
      author: 'Julien_T',
      category: 'administratif',
      date: '2025-05-03',
      replies: 16,
      views: 189,
      lastActivity: '2025-05-08',
      isNew: false
    }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Recherche en cours pour : ${searchQuery}`);
      // Future implementation: Real search functionality
    }
  };
  
  const handleNewTopic = () => {
    toast.info("Cette fonctionnalité sera disponible prochainement");
    // Future scroll to form or open modal
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Forum de discussion</CardTitle>
          <CardDescription>
            Échangez avec d'autres personnes concernées par la neurodiversité
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Skip to content link for keyboard navigation */}
          <button onClick={scrollToContent} className="skip-to-content">
            Aller au contenu du forum
          </button>
          
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <ForumSearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={handleSearch}
            />
            
            <ForumActions onNewTopic={handleNewTopic} />
          </div>
          
          <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mt-6" ref={forumContentRef}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="categories">Catégories</TabsTrigger>
              <TabsTrigger value="recent">Discussions récentes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="categories">
              <ForumCategoriesTab categories={categories} />
            </TabsContent>
            
            <TabsContent value="recent">
              <ForumRecentTab topics={recentTopics} />
            </TabsContent>
          </Tabs>

          <ForumRules />
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" onClick={() => toast.info("Forum complet disponible prochainement")}>
            Explorer toutes les discussions
          </Button>
        </CardFooter>
      </Card>
      
      {/* Formulaire de création de discussion */}
      <ForumCreateForm categories={categories} />
      
      <div className="mt-8">
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default ForumTab;
