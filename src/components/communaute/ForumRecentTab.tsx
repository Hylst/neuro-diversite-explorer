
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, FlameKindling, Tag } from 'lucide-react';
import ForumTopicItem, { ForumTopicProps } from './ForumTopicItem';

interface ForumRecentTabProps {
  topics: ForumTopicProps[];
}

const ForumRecentTab: React.FC<ForumRecentTabProps> = ({ topics }) => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('recent');
  
  // Filtrage des topics selon le critère actif
  const filteredTopics = topics.filter(topic => {
    if (filter === 'all') return true;
    if (filter === 'new') return topic.isNew;
    return topic.category === filter;
  });
  
  // Tri des topics selon le critère actif
  const sortedTopics = [...filteredTopics].sort((a, b) => {
    if (sort === 'recent') {
      return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime();
    } else if (sort === 'popular') {
      return b.views - a.views;
    } else if (sort === 'replies') {
      return b.replies - a.replies;
    }
    return 0;
  });

  return (
    <div className="space-y-4 mt-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between mb-4">
        <Tabs defaultValue="all" value={filter} onValueChange={setFilter} className="space-y-2">
          <TabsList className="h-9">
            <TabsTrigger value="all" className="text-xs">Tous</TabsTrigger>
            <TabsTrigger value="new" className="text-xs">
              <Badge variant="outline" className="bg-green-100 text-green-800 mr-1 h-5 px-1">Nouveau</Badge> Nouveaux
            </TabsTrigger>
            <TabsTrigger value="temoignages" className="text-xs">Témoignages</TabsTrigger>
            <TabsTrigger value="scolarite" className="text-xs">Scolarité</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-2" />
                <span>Plus récents</span>
              </div>
            </SelectItem>
            <SelectItem value="popular">
              <div className="flex items-center">
                <FlameKindling className="h-3.5 w-3.5 mr-2" />
                <span>Plus vus</span>
              </div>
            </SelectItem>
            <SelectItem value="replies">
              <div className="flex items-center">
                <CheckCircle className="h-3.5 w-3.5 mr-2" />
                <span>Plus de réponses</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="hidden md:flex items-center text-sm text-muted-foreground border-b pb-2 font-medium">
        <div className="flex-1">Sujet</div>
        <div className="w-28 text-center">Réponses</div>
        <div className="w-28 text-center">Vues</div>
        <div className="w-32 text-right">Dernière activité</div>
      </div>
      
      <ScrollArea className="h-[400px]">
        {sortedTopics.length > 0 ? (
          sortedTopics.map((topic) => (
            <ForumTopicItem
              key={topic.id}
              {...topic}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-32 text-center text-muted-foreground">
            <Tag className="h-8 w-8 mb-2 opacity-50" />
            <p>Aucune discussion ne correspond aux critères</p>
          </div>
        )}
      </ScrollArea>
      
      <div className="text-xs text-muted-foreground mt-2">
        Affichage de {sortedTopics.length} discussion(s) sur {topics.length}
      </div>
    </div>
  );
};

export default ForumRecentTab;
