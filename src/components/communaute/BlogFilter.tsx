
import React from 'react';
import { Button } from '@/components/ui/button';

interface BlogFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

const BlogFilter: React.FC<BlogFilterProps> = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center">
      <Button 
        variant={selectedTag === null ? "default" : "outline"} 
        size="sm"
        onClick={() => onSelectTag(null)}
      >
        Tous
      </Button>
      {tags.map(tag => (
        <Button 
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"} 
          size="sm"
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default BlogFilter;
