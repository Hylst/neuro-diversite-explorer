
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileDown, CheckSquare, Calendar, Clock, Notebook, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Plannings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/ressources">Ressources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Plannings et checklists</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Plannings et checklists</h1>
          <p className="text-muted-foreground">
            Mis à jour en avril 2025 - Modèles téléchargeables et personnalisables pour améliorer l'organisation, adaptés aux différents profils neurodivergents.
          </p>
        </div>

        <Tabs defaultValue="quotidien" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="quotidien">Quotidien</TabsTrigger>
            <TabsTrigger value="scolaire">Scolaire</TabsTrigger>
            <TabsTrigger value="professionnel">Professionnel</TabsTrigger>
            <TabsTrigger value="familial">Familial</TabsTrigger>
          </TabsList>
          
          <TabsContent value="quotidien">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6 gap-2">
                  <Clock className="h-6 w-6 text-neuro-purple" />
                  <h2 className="text-2xl font-bold">Organisation quotidienne</h2>
                </div>
                
                <p className="mb-6">
                  Ces plannings et listes sont conçus pour structurer les activités quotidiennes, réduire la charge cognitive et faciliter les transitions entre les différentes activités.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Planning visuel de routine quotidienne</h3>
                      <p className="text-sm text-muted-foreground mt-1">Format personnalisable avec codes couleur et icônes</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Idéal pour les personnes ayant besoin d'une structure claire et prévisible. Inclut des zones pour les routines du matin et du soir, les tâches principales, les pauses sensorielles et les temps de transition.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Troubles exécutifs</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Version Excel</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Système de suivi d'habitudes par niveau</h3>
                      <p className="text-sm text-muted-foreground mt-1">Approche gamifiée pour développer des routines</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Inspiré des techniques de jeux vidéo, ce système permet de visualiser la progression des habitudes comme une montée de niveau. Particulièrement motivant pour les personnes avec TDAH ou difficultés de motivation.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Dyspraxie</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Motivation</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Application mobile</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Checklist de tâches décomposées</h3>
                      <p className="text-sm text-muted-foreground mt-1">Microétapes pour tâches complexes du quotidien</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Décompose les tâches quotidiennes (ménage, hygiène, courses, etc.) en micro-étapes très détaillées. Utile pour les personnes avec difficultés de planification ou d'initiation d'action.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Troubles exécutifs</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Anxiété</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Version Word</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Agenda sensoriel et émotionnel</h3>
                      <p className="text-sm text-muted-foreground mt-1">Suivi des besoins sensoriels et émotionnels</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Combine planification des activités avec suivi des besoins sensoriels, émotionnels et énergétiques. Aide à prévenir les surcharges en équilibrant les activités stimulantes et récupératrices.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Hypersensibilité</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Régulation émotionnelle</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Journal numérique</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scolaire">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6 gap-2">
                  <Notebook className="h-6 w-6 text-neuro-blue" />
                  <h2 className="text-2xl font-bold">Organisation scolaire et académique</h2>
                </div>
                
                <p className="mb-6">
                  Ces outils aident à structurer le travail scolaire, à gérer les projets et devoirs, et à organiser les révisions selon des méthodes adaptées aux besoins neurodivergents.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Planner d'étude adaptatif</h3>
                      <p className="text-sm text-muted-foreground mt-1">Planification des révisions avec courbe d'attention</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Système de planification qui tient compte des courbes d'attention personnelles. Inclut des trackers de concentration, des méthodes de révision adaptées et un système d'alternance matières difficiles/faciles.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Dyslexie</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Étudiants</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Version Notion</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Système de prise de notes visuel</h3>
                      <p className="text-sm text-muted-foreground mt-1">Templates pour cartes mentales et notes structurées</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Collection de modèles pour transformer les informations linéaires en formats visuels et spatiaux. Particulièrement utile pour les apprenants visuels et ceux qui ont des difficultés avec le texte linéaire.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Dyslexie</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Pensée visuelle</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Mémorisation</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Templates numériques</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Décomposeur de projets académiques</h3>
                      <p className="text-sm text-muted-foreground mt-1">Système pour fractionner les grands projets</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Outil pour décomposer les mémoires, dissertations et grands projets en tâches très spécifiques et gérables. Inclut des repères temporels, des rubriques pour les ressources nécessaires et des points de vérification.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Troubles exécutifs</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Procrastination</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Version Trello</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Organisateur d'examens et évaluations</h3>
                      <p className="text-sm text-muted-foreground mt-1">Système complet de préparation aux examens</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Kit complet pour gérer l'anxiété et l'organisation autour des périodes d'examen. Inclut des checklists de préparation matérielle, des stratégies de gestion du stress et des techniques de mémorisation adaptées.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Anxiété</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Organisation</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Tous profils</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Kit complet</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="professionnel">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6 gap-2">
                  <Calendar className="h-6 w-6 text-neuro-green" />
                  <h2 className="text-2xl font-bold">Organisation professionnelle</h2>
                </div>
                
                <p className="mb-6">
                  Ces outils sont conçus pour la gestion des tâches professionnelles, l'organisation du travail et la communication en entreprise, avec des adaptations spécifiques pour les besoins neurodivergents.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Gestionnaire de workflow adaptatif</h3>
                      <p className="text-sm text-muted-foreground mt-1">Système kanban modifié pour les besoins exécutifs</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Version adaptée du système kanban qui intègre des indications visuelles d'urgence/importance, des estimations de charge cognitive et des rappels d'initiation de tâche. Idéal pour les environnements professionnels complexes.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Troubles exécutifs</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Professionnels</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Template Notion</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Version Trello</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Script pour réunions et présentations</h3>
                      <p className="text-sm text-muted-foreground mt-1">Templates de préparation et suivi</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide structuré pour préparer, participer et faire le suivi des réunions professionnelles. Inclut des scripts pour différentes situations, des modèles de prise de notes et des systèmes de préparation aux interactions sociales.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Anxiété sociale</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Communication</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Version Word</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Organisateur d'environnement de travail</h3>
                      <p className="text-sm text-muted-foreground mt-1">Guide pour optimiser l'espace et les outils de travail</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide complet pour créer un environnement de travail adapté aux besoins sensoriels et attentionnels spécifiques. Inclut des listes de vérification, des recommandations d'équipement et des stratégies d'aménagement.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Sensibilités sensorielles</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Ergonomie</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Checklist interactive</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Gestionnaire de temps adaptable</h3>
                      <p className="text-sm text-muted-foreground mt-1">Planification tenant compte des variations d'énergie</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Système de planification qui s'adapte aux fluctuations d'énergie, d'attention et de motivation. Inclut des zones pour le travail profond, les tâches administratives et les périodes de récupération cognitive.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Gestion d'énergie</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Version GCal</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="familial">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6 gap-2">
                  <ListChecks className="h-6 w-6 text-neuro-purple" />
                  <h2 className="text-2xl font-bold">Organisation familiale</h2>
                </div>
                
                <p className="mb-6">
                  Ces outils sont destinés à aider les familles avec membres neurodivergents à s'organiser efficacement, à gérer les routines et à faciliter la communication et la coordination.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Tableau de communication familiale</h3>
                      <p className="text-sm text-muted-foreground mt-1">Système visuel de coordination et communication</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Système visuel complet pour coordonner les activités familiales, communiquer les besoins et les émotions, et prévoir les changements. Adapté aux familles avec enfants et/ou parents neurodivergents.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Communication</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Kit complet PDF</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Version mobile</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Système de routines visuelles</h3>
                      <p className="text-sm text-muted-foreground mt-1">Séquences visuelles pour les moments clés</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Collection de séquences visuelles pour les routines cruciales (matin, soir, devoirs, transitions...). Personnalisable avec photos ou pictogrammes, idéal pour les enfants ayant besoin de structure.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Anxiété</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Enfants</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Pictogrammes</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Guide de gestion des devoirs</h3>
                      <p className="text-sm text-muted-foreground mt-1">Système structuré pour parents et enfants</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Cadre complet pour accompagner les enfants neurodivergents dans leurs devoirs. Inclut des techniques de fractionnement, des routines de démarrage, des stratégies de motivation et de gestion des frustrations.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Dyslexie</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Parents</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide parents PDF</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Kit enfants</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Gestionnaire de surcharge sensorielle</h3>
                      <p className="text-sm text-muted-foreground mt-1">Système d'alerte et plan d'action</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Outil pour aider les enfants (et adultes) à identifier et communiquer leur niveau de surcharge sensorielle. Inclut un système visuel d'autoévaluation et des plans d'action gradués selon le niveau d'inconfort.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Hypersensibilité</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Autorégulation</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF imprimable</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Cartes plastifiées</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Guides et ressources complémentaires</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Guide de personnalisation des plannings</h3>
                  <p className="text-sm text-muted-foreground mb-2">Comment adapter les modèles à vos besoins spécifiques</p>
                  <Button variant="outline" size="sm">Télécharger (.pdf)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Kit de pictogrammes universels</h3>
                  <p className="text-sm text-muted-foreground mb-2">200+ icônes et symboles pour personnaliser vos plannings</p>
                  <Button variant="outline" size="sm">Télécharger (.zip)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Webinaire: Systèmes d'organisation efficaces</h3>
                  <p className="text-sm text-muted-foreground mb-2">Présentation par des experts en TDAH et troubles exécutifs</p>
                  <Button variant="outline" size="sm">Accéder (.mp4)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Collection complète tous profils</h3>
                  <p className="text-sm text-muted-foreground mb-2">Tous nos plannings et checklists dans un seul package</p>
                  <Button variant="outline" size="sm">Télécharger (.zip)</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>    </div>
  );
};

export default Plannings;
