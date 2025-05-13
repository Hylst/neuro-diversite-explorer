import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import ForumTopicItem, { ForumTopicProps } from './ForumTopicItem';
import { Tag } from 'lucide-react';

interface ForumTopicListProps {
  topics: ForumTopicProps[];
  emptyMessage?: string;
}

const ForumTopicList: React.FC<ForumTopicListProps> = ({ 
  topics, 
  emptyMessage = "Aucune discussion ne correspond aux critères"
}) => {
  return (
    <ScrollArea className="h-[400px]">
      {topics.length > 0 ? (
        topics.map((topic) => (
          <ForumTopicItem
            key={topic.id}
            {...topic}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-32 text-center text-muted-foreground">
          <Tag className="h-8 w-8 mb-2 opacity-50" />
          <p>{emptyMessage}</p>
        </div>
      )}
    </ScrollArea>
  );
};

export default ForumTopicList;