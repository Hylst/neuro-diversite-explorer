
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
import ForumTopicDetail from './ForumTopicDetail';
import ForumCategoryTopics from './ForumCategoryTopics';
import ForumStats from './ForumStats';
import { ForumCategoryProps } from './ForumCategory';
import { ForumTopicProps } from './ForumTopicItem';
import { getIconForCategory } from './ForumCategory';

const ForumTab = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopicProps | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ForumCategoryProps | null>(null);
  
  // Référence pour le contenu du forum
  const forumContentRef = useRef<HTMLDivElement>(null);
  
  // Fonction de défilement fluide
  const scrollToContent = () => {
    if (forumContentRef.current) {
      forumContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Fonction pour ouvrir le détail d'une discussion
  const handleOpenTopic = (topic: ForumTopicProps) => {
    setSelectedTopic(topic);
    setSelectedCategory(null);
  };
  
  // Fonction pour revenir à la liste des discussions
  const handleBackToList = () => {
    setSelectedTopic(null);
  };
  
  // Fonction pour ouvrir une catégorie
  const handleOpenCategory = (category: ForumCategoryProps) => {
    setSelectedCategory(category);
    setSelectedTopic(null);
  };
  
  // Fonction pour revenir à la liste des catégories
  const handleBackToCategories = () => {
    setSelectedCategory(null);
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
    <div className="space-y-6">
      {selectedTopic ? (
        <ForumTopicDetail topic={selectedTopic} onBack={handleBackToList} />
      ) : selectedCategory ? (
        <ForumCategoryTopics 
          category={selectedCategory} 
          topics={recentTopics} 
          onBack={handleBackToCategories} 
          onTopicClick={handleOpenTopic} 
        />
      ) : showCreateForm ? (
        <div className="space-y-4">
          <Button variant="ghost" onClick={() => setShowCreateForm(false)} className="mb-2">
            Retour aux discussions
          </Button>
          <ForumCreateForm categories={categories} />
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1">
              <ForumSearchBar value={searchQuery} onChange={setSearchQuery} onSearch={handleSearch} />
            </div>
            <ForumActions onNewTopic={() => setShowCreateForm(true)} />
          </div>
          
          <ForumStats 
            totalTopics={93}
            totalReplies={427}
            activeUsers={156}
            lastActive="aujourd'hui"
          />
          
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Forum de discussion
              </CardTitle>
              <CardDescription>
                Échangez avec la communauté sur tous les sujets liés à la neurodiversité
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="categories" onClick={scrollToContent}>
                    <Users className="h-4 w-4 mr-2" />
                    Catégories
                  </TabsTrigger>
                  <TabsTrigger value="recent" onClick={scrollToContent}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discussions récentes
                  </TabsTrigger>
                </TabsList>
                
                <div ref={forumContentRef}>
                  <TabsContent value="categories" className="mt-6">
                    <ForumCategoriesTab 
                      categories={categories.map(category => ({
                        ...category,
                        onClick: () => handleOpenCategory(category)
                      }))} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="recent" className="mt-6">
                    <ForumRecentTab topics={recentTopics.map(topic => ({
                      ...topic,
                      onClick: () => handleOpenTopic(topic)
                    }))} />
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col bg-muted/50 rounded-b-lg">
              <ForumRules />
            </CardFooter>
          </Card>
          
          <NewsletterSignup />
        </>
      )}
    </div>
  );
};

export default ForumTab;
