import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { ForumCategoryProps } from './ForumCategory';
import { ForumTopicProps } from './ForumTopicItem';
import ForumTopicList from './ForumTopicList';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ForumCategoryTopicsProps {
  category: ForumCategoryProps;
  topics: ForumTopicProps[];
  onBack: () => void;
  onTopicClick: (topic: ForumTopicProps) => void;
}

const ForumCategoryTopics: React.FC<ForumCategoryTopicsProps> = ({ 
  category, 
  topics, 
  onBack,
  onTopicClick
}) => {
  const [sort, setSort] = useState('recent');
  
  // Filtrer les sujets par catégorie
  const filteredTopics = topics.filter(topic => topic.category === category.id);
  
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

  // Ajouter la fonction onClick à chaque topic
  const topicsWithClick = sortedTopics.map(topic => ({
    ...topic,
    onClick: () => onTopicClick(topic)
  }));

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="mb-2">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour aux catégories
      </Button>
      
      <Card>
        <CardHeader>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
              {category.icon}
            </div>
            <div>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground">
              {filteredTopics.length} discussion{filteredTopics.length > 1 ? 's' : ''}
            </div>
            
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Plus récents</SelectItem>
                <SelectItem value="popular">Plus vus</SelectItem>
                <SelectItem value="replies">Plus de réponses</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <ForumTopicList 
            topics={topicsWithClick} 
            emptyMessage={`Aucune discussion dans la catégorie ${category.name}`} 
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForumCategoryTopics;