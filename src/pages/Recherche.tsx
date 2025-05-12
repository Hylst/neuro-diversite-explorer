
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, FilterX, Tag, BookOpen, BrainCircuit, Puzzle, Calculator, Brain, AlertTriangle, ScanSearch } from 'lucide-react';

const Recherche = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [category, setCategory] = useState('all');
  const [ageGroup, setAgeGroup] = useState('all');
  const [hasResults, setHasResults] = useState(!!initialQuery);
  
  useEffect(() => {
    // Update the URL when the search query changes
    if (searchQuery) {
      navigate(`/recherche?q=${encodeURIComponent(searchQuery)}`, { replace: true });
      setHasResults(true);
    } else {
      navigate('/recherche', { replace: true });
      setHasResults(false);
    }
  }, [searchQuery, navigate]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasResults(true);
    }
  };

  const handleReset = () => {
    setSearchQuery('');
    setCategory('all');
    setAgeGroup('all');
    setHasResults(false);
    navigate('/recherche', { replace: true });
  };

  // Mock search results
  const results = {
    troubles: [
      {
        id: 1,
        title: "TDAH - Trouble du Déficit de l'Attention avec ou sans Hyperactivité",
        excerpt: "Comprendre les symptômes, le diagnostic et les traitements du TDAH.",
        category: "TDAH",
        icon: <ScanSearch className="h-5 w-5" />,
        link: "/troubles/tdah"
      },
      {
        id: 2,
        title: "Dyslexie - Trouble spécifique de la lecture",
        excerpt: "Informations complètes sur la dyslexie, ses manifestations et les adaptations possibles.",
        category: "Dyslexie",
        icon: <BookOpen className="h-5 w-5" />,
        link: "/troubles/dyslexie"
      },
      {
        id: 3,
        title: "Trouble du Spectre Autistique (TSA)",
        excerpt: "Guide complet sur l'autisme, de la détection précoce aux stratégies d'accompagnement.",
        category: "Autisme",
        icon: <Puzzle className="h-5 w-5" />,
        link: "/troubles/autisme"
      }
    ],
    resources: [
      {
        id: 1,
        title: "Association Française de Personnes Autistes",
        type: "Association",
        region: "National",
        description: "Soutien et défense des droits des personnes autistes",
        link: "/communaute"
      },
      {
        id: 2,
        title: "Centre de Diagnostic TDAH Paris",
        type: "Professionnel",
        region: "Île-de-France",
        description: "Équipe pluridisciplinaire spécialisée dans le diagnostic du TDAH",
        link: "/communaute"
      }
    ],
    articles: [
      {
        id: 1,
        title: "Comment j'ai découvert mon TDAH à 35 ans",
        excerpt: "Mon parcours de diagnostic et comment il a transformé ma vie professionnelle et personnelle...",
        date: "15 avril 2024",
        author: "Jean Dupont",
        category: "TDAH",
        link: "/blog/decouverte-tdah-35-ans"
      },
      {
        id: 2,
        title: "Guide des aménagements scolaires pour enfants dyslexiques",
        excerpt: "Les outils et stratégies qui ont fait leurs preuves pour aider les enfants dyslexiques à l'école...",
        date: "28 mars 2024",
        author: "Marie Lambert",
        category: "Dyslexie",
        link: "/blog/amenagements-scolaires-dyslexie"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-center">
                Recherche <span className="neuro-gradient-text">avancée</span>
              </h1>
              
              <form onSubmit={handleSearch} className="space-y-4 mt-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Rechercher un trouble, un symptôme, une ressource..."
                    className="pl-10 py-6 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes les catégories</SelectItem>
                        <SelectItem value="tdah">TDAH</SelectItem>
                        <SelectItem value="dyslexie">Dyslexie</SelectItem>
                        <SelectItem value="autisme">Autisme</SelectItem>
                        <SelectItem value="dyspraxie">Dyspraxie</SelectItem>
                        <SelectItem value="dyscalculie">Dyscalculie</SelectItem>
                        <SelectItem value="neuro">Maladies neurodégénératives</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Select value={ageGroup} onValueChange={setAgeGroup}>
                      <SelectTrigger>
                        <SelectValue placeholder="Groupe d'âge" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les âges</SelectItem>
                        <SelectItem value="child">Enfants (0-12 ans)</SelectItem>
                        <SelectItem value="teen">Adolescents (13-18 ans)</SelectItem>
                        <SelectItem value="adult">Adultes (19-59 ans)</SelectItem>
                        <SelectItem value="senior">Seniors (60+ ans)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex gap-2 justify-center mt-4">
                  <Button type="submit" size="lg">
                    Rechercher
                  </Button>
                  <Button type="button" variant="outline" size="lg" onClick={handleReset}>
                    <FilterX className="mr-2 h-4 w-4" />
                    Réinitialiser
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {hasResults && (
          <div className="container py-12">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="all">Tout</TabsTrigger>
                  <TabsTrigger value="troubles">Troubles</TabsTrigger>
                  <TabsTrigger value="resources">Ressources</TabsTrigger>
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Troubles</h2>
                      <Button variant="ghost" size="sm" onClick={() => navigate('/troubles')}>
                        Voir tout
                      </Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                      {results.troubles.map(result => (
                        <Card key={result.id} className="h-full">
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              {result.icon}
                              <Tag className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{result.category}</span>
                            </div>
                            <CardTitle className="text-lg">{result.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">{result.excerpt}</p>
                          </CardContent>
                          <CardFooter className="border-t bg-muted/50 p-3">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-auto"
                              onClick={() => navigate(result.link)}
                            >
                              En savoir plus
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Ressources</h2>
                      <Button variant="ghost" size="sm" onClick={() => navigate('/communaute')}>
                        Voir tout
                      </Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {results.resources.map(result => (
                        <Card key={result.id} className="h-full">
                          <CardHeader>
                            <CardTitle className="text-lg">{result.title}</CardTitle>
                            <CardDescription>{result.type} • {result.region}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">{result.description}</p>
                          </CardContent>
                          <CardFooter className="border-t bg-muted/50 p-3">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-auto"
                              onClick={() => navigate(result.link)}
                            >
                              Voir détails
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Articles</h2>
                      <Button variant="ghost" size="sm" onClick={() => navigate('/communaute')}>
                        Voir tout
                      </Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {results.articles.map(result => (
                        <Card key={result.id} className="h-full">
                          <CardHeader>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                              <Tag className="h-4 w-4" />
                              <span>{result.category}</span>
                            </div>
                            <CardTitle className="text-lg">{result.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">{result.excerpt}</p>
                          </CardContent>
                          <CardFooter className="border-t bg-muted/50 p-3">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-auto"
                              onClick={() => navigate(result.link)}
                            >
                              Lire l'article
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="troubles">
                <div className="grid gap-6 md:grid-cols-3">
                  {results.troubles.map(result => (
                    <Card key={result.id} className="h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          {result.icon}
                          <Tag className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{result.category}</span>
                        </div>
                        <CardTitle className="text-lg">{result.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{result.excerpt}</p>
                      </CardContent>
                      <CardFooter className="border-t bg-muted/50 p-3">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="ml-auto"
                          onClick={() => navigate(result.link)}
                        >
                          En savoir plus
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="resources">
                <div className="grid gap-6 md:grid-cols-3">
                  {results.resources.map(result => (
                    <Card key={result.id} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{result.title}</CardTitle>
                        <CardDescription>{result.type} • {result.region}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{result.description}</p>
                      </CardContent>
                      <CardFooter className="border-t bg-muted/50 p-3">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="ml-auto"
                          onClick={() => navigate(result.link)}
                        >
                          Voir détails
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="articles">
                <div className="grid gap-6 md:grid-cols-3">
                  {results.articles.map(result => (
                    <Card key={result.id} className="h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <Tag className="h-4 w-4" />
                          <span>{result.category}</span>
                        </div>
                        <CardTitle className="text-lg">{result.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{result.excerpt}</p>
                      </CardContent>
                      <CardFooter className="border-t bg-muted/50 p-3">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="ml-auto"
                          onClick={() => navigate(result.link)}
                        >
                          Lire l'article
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>    </div>
  );
};

export default Recherche;
