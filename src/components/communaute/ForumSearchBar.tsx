
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ForumSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

const ForumSearchBar: React.FC<ForumSearchBarProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <form onSubmit={onSearch} className="flex w-full sm:w-auto">
      <div className="relative w-full sm:w-64">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Rechercher dans le forum..." 
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Rechercher dans le forum"
        />
      </div>
      <Button type="submit" variant="outline" className="ml-2">
        Chercher
      </Button>
    </form>
  );
};

export default ForumSearchBar;
