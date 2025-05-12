
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SearchBar } from '@/components/glossary/SearchBar';
import { GlossaryTermComponent } from '@/components/glossary/GlossaryTerm';
import { glossaryTerms } from '@/data/glossaryTerms';

const Glossaire = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || term.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTerms = [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="neuro-gradient-text">Glossaire</span> de la neurodiversité
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Exploration des termes essentiels pour comprendre la neurodiversité
              </p>
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
          </div>
        </div>

        <div className="container max-w-4xl mx-auto py-12">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-1">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="concepts">Concepts</TabsTrigger>
                <TabsTrigger value="troubles">Troubles</TabsTrigger>
                <TabsTrigger value="termes-medicaux">Termes médicaux</TabsTrigger>
                <TabsTrigger value="administratif">Administratif</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="space-y-6">
                {sortedTerms.length > 0 ? (
                  sortedTerms.map((term, index) => (
                    <GlossaryTermComponent key={index} term={term} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Aucun résultat trouvé pour votre recherche.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>    </div>
  );
};

export default Glossaire;
