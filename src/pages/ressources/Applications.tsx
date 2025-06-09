
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, FileDown, ExternalLink, DownloadCloud, Star, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Applications = () => {
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
              <BreadcrumbLink>Applications recommandées</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Applications recommandées</h1>
          <p className="text-muted-foreground">
            Mis à jour en avril 2025 - Sélection d'applications utiles pour les personnes neurodivergentes, testées et recommandées par notre communauté.
          </p>
        </div>

        <Tabs defaultValue="organisation" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="organisation">Organisation</TabsTrigger>
            <TabsTrigger value="apprentissage">Apprentissage</TabsTrigger>
            <TabsTrigger value="sensoriel">Sensoriel</TabsTrigger>
            <TabsTrigger value="social">Communication</TabsTrigger>
          </TabsList>
          
          <TabsContent value="organisation">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Applications d'organisation et de productivité</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">NeuroTasks Pro</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 5 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Gestionnaire de tâches adapté aux besoins neurodivergents</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Application de gestion de tâches spécialement conçue pour les personnes avec TDAH et troubles exécutifs, avec décomposition automatique des tâches, rappels contextuels, et visualisation adaptative.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Multiplateforme</span>
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Gratuit + Premium</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Mars 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.neurotaskspro.com" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/neurotaskspro" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">TimeBlock AI</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Planification intelligente adaptée au TDAH</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">TimeBlock utilise l'IA pour créer automatiquement des horaires réalistes en tenant compte de l'énergie cognitive, des préférences et des habitudes personnelles. Fonction de replanification dynamique en cas d'imprévus.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">iOS et Android</span>
                          <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Abonnement</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Avril 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.timeblock.ai" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://play.google.com/store/apps/timeblock" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">FocusMate 2.0</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 5 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Sessions de travail virtuelles avec partenaire</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Plateforme qui vous met en relation avec un partenaire de travail par session vidéo, créant une structure et une responsabilité sociale. La version 2.0 inclut des options pour neurodivergents et des sessions par centres d'intérêt.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Web</span>
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">3 sessions gratuites/semaine</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Février 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.focusmate.com" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">MemoryMap</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Assistant de mémoire spatiale et contextuelle</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Utilise la réalité augmentée pour vous aider à retrouver des objets égarés, en créant des "ancres" virtuelles dans votre environnement. Fonctionnalité de rappels contextuels basés sur la localisation GPS.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">iOS et Android</span>
                          <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Achat unique</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Janvier 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.memorymap.app" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/memorymap" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="apprentissage">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Applications d'apprentissage et d'aide cognitive</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">DysReader Pro</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 5 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Lecteur adapté pour la dyslexie et troubles visuels</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Lecteur personnalisable avec polices adaptées, suivi visuel, conversion texte-parole avancée et ajustement dynamique de l'espacement des lettres. Permet d'importer des documents, pages web, et de prendre des notes visuelles.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Multiplateforme</span>
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Version gratuite limitée</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Mars 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.dysreader.com" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/dysreader" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">MathVisual</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Visualisation mathématique pour dyscalculie</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Transforme les concepts mathématiques abstraits en représentations visuelles et manipulables. Adapté aux personnes dyscalculiques avec approche multi-sensorielle et progression personnalisée.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">iPad et Android</span>
                          <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Abonnement familial disponible</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Février 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.mathvisual.edu" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://play.google.com/store/apps/mathvisual" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">Scriptify</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Assistant d'écriture pour troubles dysgraphiques</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Combine reconnaissance vocale avancée, prédiction de mots contextualisée et outils d'organisation des idées. Aide à surmonter les difficultés d'écriture avec un mode de dictée naturelle.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">iOS, Android, Desktop</span>
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Freemium</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Avril 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.scriptify.app" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/scriptify" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">NeuroStudy</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 5 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Système d'apprentissage adaptatif pour neurodivergents</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Plateforme complète qui adapte automatiquement le contenu et les méthodes d'apprentissage en fonction du profil cognitif. Utilise l'IA pour identifier les forces et proposer des stratégies personnalisées.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Web et mobile</span>
                          <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Abonnement éducatif</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Mars 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.neurostudy.io" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/neurostudy" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sensoriel">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Applications de régulation sensorielle</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">Sensory Space</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 5 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Environnement sensoriel adaptatif</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Crée un environnement sensoriel personnalisé combinant sons, lumières et visualisations apaisantes. Modes spécifiques pour surcharge sensorielle, anxiété et aide à la concentration, avec mode enfant sécurisé.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">iOS et Android</span>
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Version de base gratuite</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Avril 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.sensoryspace.app" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/sensoryspace" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">SoundScape AI</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Sons et musique adaptés neurocognitifs</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Génère des paysages sonores et musicaux personnalisés en fonction de votre état neurologique actuel (focus, calme, sommeil). L'IA adapte les fréquences et rythmes en temps réel en fonction des réactions cérébrales.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Multiplateforme</span>
                          <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Essai 14 jours</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Mars 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.soundscape-ai.com" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://play.google.com/store/apps/soundscape-ai" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">Stim Guide</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Guide et simulations de stimming adaptatif</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Collection de stimulations visuelles et interactives pour l'autorégulation, avec suggestions personnalisées selon vos préférences sensorielles. Inclut un journal de suivi et des guides éducatifs.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">iOS et Android</span>
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Gratuit</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Février 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.stimguide.org" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/stimguide" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="social">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Applications de communication et d'aide sociale</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-purple p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">Social Script</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 5 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Guide de scénarios sociaux personnalisables</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Bibliothèque de scénarios sociaux avec préparation aux situations courantes, adaptée pour les personnes autistes. Créez des scripts personnalisés avec des indices visuels et des simulations interactives.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">iOS et Android</span>
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Version limitée gratuite</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Mars 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.socialscript.app" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/socialscript" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-green p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">EmotionLens</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Reconnaissance émotionnelle en temps réel</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Utilise la caméra pour analyser les expressions faciales et le ton de voix, offrant des indices discrets sur l'état émotionnel des interlocuteurs. Mode pratique pour s'entraîner à reconnaître les émotions.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">iOS et Android</span>
                          <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Abonnement mensuel</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Avril 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.emotionlens.app" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://play.google.com/store/apps/emotionlens" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-neuro-light-blue p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">NeuroConnect</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Réseau social adapté aux neurodivergents</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-4">Plateforme sociale conçue spécifiquement pour les personnes neurodivergentes, avec des fonctionnalités d'accessibilité avancées, groupes d'intérêts spécifiques et options de communication adaptées.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Web et mobile</span>
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Gratuit</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Dernière mise à jour: Février 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href="https://www.neuroconnect.com" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Site web</span>
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-1" asChild>
                          <a href="https://apps.apple.com/app/neuroconnect" target="_blank" rel="noopener noreferrer">
                            <DownloadCloud className="h-3.5 w-3.5" />
                            <span>Télécharger</span>
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
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1">Documents éducatifs</h3>
                  <p className="text-sm text-blue-700">
                    Les guides et documents proposés ci-dessous sont des ressources éducatives créées par notre équipe. 
                    Ils ne remplacent pas les documentations officielles des éditeurs d'applications ou des systèmes d'exploitation.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4">Guides d'accessibilité numérique</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Guide d'optimisation des appareils</h3>
                  <p className="text-sm text-muted-foreground mb-2">Configuration des paramètres d'accessibilité sur iOS, Android et Windows</p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="/documents/guide-optimisation-appareils-2025.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Télécharger (.pdf)
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Sécurité numérique adaptée</h3>
                  <p className="text-sm text-muted-foreground mb-2">Protection des comptes et gestion des mots de passe pour neurodivergents</p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="/documents/securite-numerique-neurodivergents-2025.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Télécharger (.pdf)
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Comparatif détaillé d'applications</h3>
                  <p className="text-sm text-muted-foreground mb-2">Analyse de 50+ applications par type de trouble et fonctionnalité</p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="/documents/comparatif-applications-neurodiversite-2025.xlsx" 
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Télécharger (.xlsx)
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Extensions de navigateur utiles</h3>
                  <p className="text-sm text-muted-foreground mb-2">Guide d'installation et configuration pour Chrome, Firefox et Edge</p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="/documents/extensions-navigateur-neurodiversite-2025.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Télécharger (.pdf)
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>    </div>
  );
};

export default Applications;
