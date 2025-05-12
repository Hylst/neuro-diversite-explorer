
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileDown, BookOpen, GraduationCap, Package, Users, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Kits = () => {
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
              <BreadcrumbLink>Kits pédagogiques</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Kits pédagogiques</h1>
          <p className="text-muted-foreground">
            Mis à jour en avril 2025 - Matériel éducatif complet pour enseignants et parents, conçu pour soutenir l'apprentissage des personnes neurodivergentes.
          </p>
        </div>

        <Tabs defaultValue="enseignants" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="enseignants">Pour enseignants</TabsTrigger>
            <TabsTrigger value="parents">Pour parents</TabsTrigger>
            <TabsTrigger value="professionnels">Pour professionnels</TabsTrigger>
          </TabsList>
          
          <TabsContent value="enseignants">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6 gap-2">
                  <GraduationCap className="h-6 w-6 text-neuro-purple" />
                  <h2 className="text-2xl font-bold">Kits pour enseignants</h2>
                </div>
                
                <p className="mb-6">
                  Ressources pédagogiques conçues par des experts en neurodiversité et éducation, pour faciliter l'inclusion et l'apprentissage des élèves neurodivergents en milieu scolaire.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Kit d'adaptation de classe inclusive</h3>
                      <p className="text-sm text-muted-foreground mt-1">Guide complet d'aménagement de l'environnement scolaire</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide pratique pour adapter l'environnement physique et les approches pédagogiques afin de créer une classe inclusive. Inclut des fiches par profil cognitif, des checklists d'aménagements et des modèles de supports visuels.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Tous profils</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Primaire et secondaire</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">156 pages</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide principal</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Ressources annexes</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Trousse d'évaluation différenciée</h3>
                      <p className="text-sm text-muted-foreground mt-1">Systèmes d'évaluation adaptés et équitables</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Collection d'outils d'évaluation alternatifs permettant de mesurer avec justesse les acquis des élèves neurodivergents. Inclut des modèles d'évaluation multimodale, des grilles adaptées et des exemples concrets.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Dyslexie</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Dyscalculie</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF complet</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Modèles Word</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Activités pédagogiques inclusives</h3>
                      <p className="text-sm text-muted-foreground mt-1">100+ activités adaptées par matière</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Recueil d'activités pédagogiques adaptées pour les classes inclusives, organisées par matière, âge et type de trouble. Chaque activité inclut des variantes et des adaptations spécifiques pour différents profils neurodivergents.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Primaire</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Interdisciplinaire</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Multi-niveaux</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF par matière</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Fiches imprimables</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Module de sensibilisation pour la classe</h3>
                      <p className="text-sm text-muted-foreground mt-1">Kit pour expliquer la neurodiversité aux élèves</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Kit pédagogique complet pour sensibiliser les élèves à la neurodiversité. Inclut des présentations adaptées par âge, des activités interactives, des vidéos et des supports à distribution. Conçu pour favoriser l'empathie et l'inclusion.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Tous niveaux</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Formation vivre-ensemble</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Clé en main</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Présentation PowerPoint</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Kit d'activités</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Kit de gestion de classe neurosensible</h3>
                      <p className="text-sm text-muted-foreground mt-1">Approche de discipline positive adaptée</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide pratique pour adopter une approche de gestion de classe qui tient compte des spécificités neurodéveloppementales. Propose des stratégies alternatives aux méthodes punitives, des systèmes de renforcement efficaces et des approches de résolution de conflits.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Troubles du comportement</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide principal</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Outils visuels</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Guide des technologies assistives en classe</h3>
                      <p className="text-sm text-muted-foreground mt-1">Sélection et implémentation d'outils adaptés</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide pratique pour l'intégration des technologies assistives dans l'enseignement. Analyse comparative d'outils, conseils d'implémentation, solutions gratuites et compatibles RGPD, et stratégies d'utilisation en collectif.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Dyslexie</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Dysgraphie</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Tous profils</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide des outils</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Tutoriels vidéo</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="parents">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6 gap-2">
                  <Users className="h-6 w-6 text-neuro-green" />
                  <h2 className="text-2xl font-bold">Kits pour parents</h2>
                </div>
                
                <p className="mb-6">
                  Ressources pratiques pour aider les parents à soutenir leur enfant neurodivergent à la maison, complémenter l'éducation scolaire et faciliter le développement des compétences essentielles.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Kit d'activités éducatives à domicile</h3>
                      <p className="text-sm text-muted-foreground mt-1">Activités ludiques et adaptées par domaine d'apprentissage</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Collection d'activités éducatives à faire à la maison, conçues pour renforcer les apprentissages scolaires tout en respectant les spécificités cognitives de l'enfant. Classées par âge, matière et type de trouble.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Dyslexie</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Dyscalculie</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">6-12 ans</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF par âge</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Matériel imprimable</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Guide de soutien aux devoirs</h3>
                      <p className="text-sm text-muted-foreground mt-1">Méthodes efficaces et bienveillantes</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide pratique pour accompagner efficacement son enfant pendant les devoirs, en minimisant le stress et les conflits. Inclut des stratégies spécifiques par type de trouble, des aménagements simples et des conseils pour la collaboration école-maison.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Troubles exécutifs</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Gestion des émotions</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide principal</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Outils organisationnels</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Kit de communication école-famille</h3>
                      <p className="text-sm text-muted-foreground mt-1">Outils pour une collaboration efficace</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Ensemble d'outils pour optimiser la communication avec les enseignants et l'équipe éducative. Inclut des modèles de courriers, des guides d'entretien, des exemples de PAP/PPS commentés et des fiches de liaison quotidiennes.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Tous profils</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Communication</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Droits</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Modèles Word</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide pratique</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Programme de compétences socio-émotionnelles</h3>
                      <p className="text-sm text-muted-foreground mt-1">Activités pour développer les habiletés sociales</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Programme structuré pour développer les compétences sociales et émotionnelles à la maison. Inclut des activités ludiques, des jeux de rôle, des scénarios sociaux, et des guides pour aider votre enfant à comprendre et exprimer ses émotions.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Anxiété sociale</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">3-15 ans</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide parents</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Matériel d'activités</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Kit d'autonomie quotidienne</h3>
                      <p className="text-sm text-muted-foreground mt-1">Développement des compétences de la vie quotidienne</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Programme structuré pour développer l'autonomie dans les tâches quotidiennes. Séquences visuelles, systèmes de motivation adaptés, techniques de micro-progression et guides par étapes selon l'âge et le profil cognitif.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Dyspraxie</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>PDF par âge</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Routines visuelles</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Guide de soutien aux frères et sœurs</h3>
                      <p className="text-sm text-muted-foreground mt-1">Ressources pour la fratrie d'enfants neurodivergents</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide pour aider les fratries à comprendre et accepter la neurodiversité, développer une relation positive et gérer les émotions complexes. Inclut des activités familiales, des livres recommandés et des conseils par tranche d'âge.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Fratrie</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Gestion émotionnelle</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Relations familiales</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide parents</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Livret enfants</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="professionnels">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6 gap-2">
                  <BookOpen className="h-6 w-6 text-neuro-blue" />
                  <h2 className="text-2xl font-bold">Kits pour professionnels de santé et accompagnement</h2>
                </div>
                
                <p className="mb-6">
                  Ressources spécialisées pour les professionnels travaillant avec des personnes neurodivergentes: psychologues, orthophonistes, ergothérapeutes, éducateurs spécialisés et autres intervenants.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Boîte à outils d'évaluation fonctionnelle</h3>
                      <p className="text-sm text-muted-foreground mt-1">Tests et grilles d'observation standardisés</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Collection d'outils d'évaluation fonctionnelle pour identifier les forces, défis et besoins spécifiques des personnes neurodivergentes. Inclut des questionnaires, grilles d'observation et tests informels classés par domaine fonctionnel.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Multidisciplinaire</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Tous profils</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Usage professionnel</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Manuel professionnel</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Outils d'évaluation</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Manuel d'intervention multimodale</h3>
                      <p className="text-sm text-muted-foreground mt-1">Programmes d'intervention basés sur les preuves</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide pratique présentant des approches d'intervention evidence-based pour chaque profil neurodéveloppemental. Protocoles détaillés, séquences de progression, techniques de généralisation et méthodes d'évaluation des progrès.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Troubles DYS</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Manuel complet</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Matériel d'intervention</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Kit de thérapie cognitivo-comportementale adaptée</h3>
                      <p className="text-sm text-muted-foreground mt-1">TCC modifiée pour les neurodivergences</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Adaptation des techniques de TCC pour les personnes neurodivergentes, avec modifications visuelles, concrètes et sensorielles. Inclut des matériels pour l'anxiété, les compétences sociales et l'autorégulation émotionnelle.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Psychologues</span>
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Anxiété</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide thérapeute</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Matériel thérapeutique</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <h3 className="text-lg font-bold">Programme d'entraînement aux fonctions exécutives</h3>
                      <p className="text-sm text-muted-foreground mt-1">Matériel clinique pour renforcer les FE</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Programme structuré pour l'entraînement des fonctions exécutives: mémoire de travail, inhibition, flexibilité cognitive, planification et organisation. Organisé par module, avec progression de difficulté et adaptation par âge.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TDAH</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Troubles exécutifs</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">5-25 ans</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Manuel intervention</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Matériel par module</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <h3 className="text-lg font-bold">Guide d'intervention sensorielle</h3>
                      <p className="text-sm text-muted-foreground mt-1">Évaluation et gestion des profils sensoriels</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Guide pratique pour l'évaluation et l'intervention en intégration sensorielle. Inclut des outils d'évaluation, des programmes d'activités sensorielles, des stratégies d'adaptation environnementale et des plans d'intervention personnalisés.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Ergothérapeutes</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Autisme</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Sensibilités sensorielles</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide professionnel</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Fiches d'activités</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <h3 className="text-lg font-bold">Kit de transition vers l'âge adulte</h3>
                      <p className="text-sm text-muted-foreground mt-1">Accompagnement des jeunes adultes neurodivergents</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Programme complet pour accompagner la transition vers l'autonomie adulte. Couvre l'insertion professionnelle, la gestion financière, l'autonomie résidentielle, la vie sociale, et l'auto-défense de ses droits (self-advocacy).</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">16-25 ans</span>
                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Tous profils</span>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Autonomie</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Guide intervenant</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="#" download>
                            <FileDown className="h-3.5 w-3.5" />
                            <span>Workbook jeune adulte</span>
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
            <div className="flex items-center mb-6 gap-2">
              <Package className="h-6 w-6 text-neuro-purple" />
              <h2 className="text-2xl font-bold">Collections complètes et ressources annexes</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-neuro-light-purple p-4">
                  <h3 className="text-lg font-bold">Collection intégrale enseignants</h3>
                  <p className="text-sm text-muted-foreground mt-1">Tous les kits pédagogiques en un seul package</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-4">Ensemble complet regroupant tous les kits pour enseignants, avec matériel supplémentaire exclusif. Idéal pour les établissements scolaires souhaitant développer une approche globale d'inclusion.</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 flex items-center gap-1" asChild>
                      <a href="#" download>
                        <Download className="h-3.5 w-3.5" />
                        <span>Télécharger (1.2 GB)</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-neuro-light-green p-4">
                  <h3 className="text-lg font-bold">Collection intégrale parents</h3>
                  <p className="text-sm text-muted-foreground mt-1">Tous les kits familiaux en un seul package</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-4">Ensemble complet regroupant tous les kits pour parents, avec bonus exclusifs. Ressource essentielle pour accompagner votre enfant neurodivergent dans tous les aspects de son développement.</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 flex items-center gap-1" asChild>
                      <a href="#" download>
                        <Download className="h-3.5 w-3.5" />
                        <span>Télécharger (950 MB)</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-neuro-light-blue p-4">
                  <h3 className="text-lg font-bold">Collection intégrale professionnels</h3>
                  <p className="text-sm text-muted-foreground mt-1">Tous les kits cliniques en un seul package</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-4">Ensemble complet regroupant tous les kits pour professionnels de santé et d'accompagnement, avec accès aux mises à jour pendant un an et formations complémentaires.</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 flex items-center gap-1" asChild>
                      <a href="#" download>
                        <Download className="h-3.5 w-3.5" />
                        <span>Télécharger (1.8 GB)</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Guide de formation à l'utilisation des kits</h3>
                  <p className="text-sm text-muted-foreground mb-2">Sessions d'accompagnement pour une utilisation optimale</p>
                  <Button variant="outline" size="sm">Télécharger (.pdf + vidéos)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Étude d'impact et témoignages</h3>
                  <p className="text-sm text-muted-foreground mb-2">Résultats de l'utilisation des kits en milieu scolaire et clinique</p>
                  <Button variant="outline" size="sm">Télécharger (.pdf)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Bibliographie commentée</h3>
                  <p className="text-sm text-muted-foreground mb-2">Références scientifiques par thématique et trouble</p>
                  <Button variant="outline" size="sm">Télécharger (.pdf)</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>    </div>
  );
};

export default Kits;
