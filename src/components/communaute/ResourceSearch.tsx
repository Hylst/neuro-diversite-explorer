
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ResourceSearchProps {
  onSearch: (query: string, filters: { type: string; region: string }) => void;
}

const ResourceSearch = ({ onSearch }: ResourceSearchProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSearch(searchQuery, { type: typeFilter, region: regionFilter });
  };

  const handleReset = () => {
    setSearchQuery('');
    setTypeFilter('');
    setRegionFilter('');
    onSearch('', { type: '', region: '' });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher une ressource..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="flex items-center gap-2">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Type de ressource" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="Association">Association</SelectItem>
              <SelectItem value="Professionnel">Professionnel</SelectItem>
              <SelectItem value="Communauté">Communauté</SelectItem>
              <SelectItem value="Service en ligne">Service en ligne</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Select value={regionFilter} onValueChange={setRegionFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Région" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les régions</SelectItem>
              <SelectItem value="National">National</SelectItem>
              <SelectItem value="Île-de-France">Île-de-France</SelectItem>
              <SelectItem value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</SelectItem>
              <SelectItem value="PACA">PACA</SelectItem>
              <SelectItem value="En ligne">En ligne</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-2">
          <Button type="submit" className="flex-1">
            Rechercher
          </Button>
          <Button variant="outline" onClick={handleReset} size="icon" type="button">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ResourceSearch;
