
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, BookOpen, FileDown, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const StrategiesApprentissage = () => {
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
              <BreadcrumbLink>Stratégies d'apprentissage adaptées</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Stratégies d'apprentissage adaptées</h1>
          <p className="text-muted-foreground">
            Mis à jour en avril 2025 - Découvrez des techniques d'apprentissage efficaces et personnalisées pour chaque profil neurodivergent, basées sur les dernières recherches scientifiques.
          </p>
        </div>

        <Tabs defaultValue="tdah" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="tdah">TDAH</TabsTrigger>
            <TabsTrigger value="dyslexie">Dyslexie</TabsTrigger>
            <TabsTrigger value="autisme">Autisme</TabsTrigger>
            <TabsTrigger value="dyspraxie">Dyspraxie</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tdah">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 gap-2">
                  <Brain className="h-6 w-6 text-neuro-purple" />
                  <h2 className="text-2xl font-bold">Stratégies pour le TDAH</h2>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Gestion de l'attention</h3>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">Technique Pomodoro modifiée</p>
                        <p className="text-sm text-muted-foreground">Travaillez pendant 15-20 minutes (au lieu de 25) et faites des pauses plus courtes mais plus fréquentes.</p>
                      </li>
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">Environnement de travail adapté</p>
                        <p className="text-sm text-muted-foreground">Créez un espace de travail avec des distractions minimales. Pour certains, un bruit blanc ou une musique instrumentale douce peut aider à rester concentré.</p>
                      </li>
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">Blocage des distractions numériques</p>
                        <p className="text-sm text-muted-foreground">Utilisez des applications comme Freedom ou Forest pour bloquer les sites et applications distrayants pendant les sessions de travail.</p>
                      </li>
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">Mouvement intégré</p>
                        <p className="text-sm text-muted-foreground">Utilisez une balle anti-stress, un fidget spinner ou un bureau debout pour canaliser le besoin de bouger.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Organisation et mémorisation</h3>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Cartes mentales colorées</p>
                        <p className="text-sm text-muted-foreground">Utilisez des mind maps avec codes couleurs pour structurer l'information et créer des liens visuels entre les concepts.</p>
                      </li>
                      <li className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Système de signets chronologiques</p>
                        <p className="text-sm text-muted-foreground">Utilisez un système de marquage temporel dans vos notes pour retrouver facilement l'information.</p>
                      </li>
                      <li className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Technique d'apprentissage par microchunking</p>
                        <p className="text-sm text-muted-foreground">Divisez l'information en très petites unités et associez chacune à une image ou à une émotion.</p>
                      </li>
                      <li className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Rappels externes multiples</p>
                        <p className="text-sm text-muted-foreground">Utilisez une combinaison d'alarmes, de post-it et d'applications de rappel configurées avec des intervalles stratégiques.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Applications et outils recommandés pour le TDAH</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">FocusMate (2025)</p>
                      <p className="text-sm text-muted-foreground">Sessions de travail en binôme virtuel pour maintenir la concentration et la responsabilité.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">Todoist avec mode TDAH</p>
                      <p className="text-sm text-muted-foreground">Gestionnaire de tâches avec fonctionnalités spécifiques pour le TDAH, incluant la décomposition automatique des tâches.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">Brain.fm</p>
                      <p className="text-sm text-muted-foreground">Musique conçue scientifiquement pour améliorer la concentration.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="flex items-center gap-2" asChild>
                    <a href="#" download>
                      <FileDown className="h-4 w-4" />
                      <span>Télécharger le guide complet TDAH</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="dyslexie">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 gap-2">
                  <BookOpen className="h-6 w-6 text-neuro-green" />
                  <h2 className="text-2xl font-bold">Stratégies pour la dyslexie</h2>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Lecture adaptée</h3>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">Méthode de fenêtrage</p>
                        <p className="text-sm text-muted-foreground">Utilisez une règle ou une fenêtre de lecture pour isoler une ligne de texte à la fois et réduire la surcharge visuelle.</p>
                      </li>
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">Typographie personnalisée</p>
                        <p className="text-sm text-muted-foreground">Utilisez des polices spécifiques comme OpenDyslexic ou Dyslexie, conçues pour faciliter la lecture.</p>
                      </li>
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">Lecture multimodale</p>
                        <p className="text-sm text-muted-foreground">Combinez la lecture visuelle avec l'écoute (livres audio) pour renforcer la compréhension et réduire la fatigue.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Expression écrite</h3>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-neuro-orange pl-4 py-1">
                        <p className="font-medium">Dictée vocale avancée</p>
                        <p className="text-sm text-muted-foreground">Utilisez des logiciels de reconnaissance vocale pour contourner les difficultés d'écriture.</p>
                      </li>
                      <li className="border-l-2 border-neuro-orange pl-4 py-1">
                        <p className="font-medium">Cartes conceptuelles préalables</p>
                        <p className="text-sm text-muted-foreground">Avant d'écrire, créez une carte conceptuelle pour organiser vos idées visuellement.</p>
                      </li>
                      <li className="border-l-2 border-neuro-orange pl-4 py-1">
                        <p className="font-medium">Correcteurs orthographiques spécialisés</p>
                        <p className="text-sm text-muted-foreground">Utilisez des correcteurs qui identifient les erreurs typiques de la dyslexie (ex: Antidote avec mode dyslexie).</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Applications et outils recommandés pour la dyslexie</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">Speechify</p>
                      <p className="text-sm text-muted-foreground">Application de synthèse vocale qui lit tout texte à voix haute.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">Helperbird</p>
                      <p className="text-sm text-muted-foreground">Extension de navigateur avec de nombreuses fonctionnalités d'accessibilité pour la dyslexie.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">ClaroRead</p>
                      <p className="text-sm text-muted-foreground">Logiciel complet avec synthèse vocale, prédiction de mots et outils visuels.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="flex items-center gap-2" asChild>
                    <a href="#" download>
                      <FileDown className="h-4 w-4" />
                      <span>Télécharger le guide complet dyslexie</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="autisme">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 gap-2">
                  <Database className="h-6 w-6 text-neuro-purple" />
                  <h2 className="text-2xl font-bold">Stratégies pour l'autisme</h2>
                </div>
                
                <p className="mb-6">Les stratégies pour les personnes autistes varient considérablement selon le profil individuel. Voici des approches qui peuvent être adaptées selon les besoins personnels.</p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Gestion sensorielle et environnementale</h3>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">Environnement d'apprentissage adapté</p>
                        <p className="text-sm text-muted-foreground">Créez un espace d'étude avec éclairage ajustable, minimisez les bruits de fond et utilisez des meubles confortables.</p>
                      </li>
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">Outils sensoriels d'autorégulation</p>
                        <p className="text-sm text-muted-foreground">Intégrez des objets sensoriels (balles anti-stress, fidgets) pour aider à maintenir un niveau optimal d'éveil.</p>
                      </li>
                      <li className="border-l-2 border-neuro-purple pl-4 py-1">
                        <p className="font-medium">Casques antibruit ou écouteurs</p>
                        <p className="text-sm text-muted-foreground">Utilisez des casques antibruit ou à réduction de bruit active pour filtrer les stimuli sonores distrayants.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Structure et organisation</h3>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Routines d'apprentissage visuelles</p>
                        <p className="text-sm text-muted-foreground">Créez des horaires et des routines visuelles détaillées pour rendre les attentes claires et prévisibles.</p>
                      </li>
                      <li className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Décomposition par étapes</p>
                        <p className="text-sm text-muted-foreground">Divisez les tâches complexes en étapes concrètes et séquentielles avec des instructions visuelles.</p>
                      </li>
                      <li className="border-l-2 border-neuro-blue pl-4 py-1">
                        <p className="font-medium">Gestion du temps visuelle</p>
                        <p className="text-sm text-muted-foreground">Utilisez des minuteurs visuels (ex: Time Timer) pour rendre le temps abstrait plus concret et gérable.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Stratégies d'apprentissage spécialisées</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-neuro-orange pl-4 py-1">
                      <p className="font-medium">Exploitation des intérêts spécifiques</p>
                      <p className="text-sm text-muted-foreground">Intégrez les intérêts particuliers dans l'apprentissage pour augmenter la motivation et faciliter la compréhension.</p>
                    </div>
                    <div className="border-l-2 border-neuro-orange pl-4 py-1">
                      <p className="font-medium">Approche concrète et explicite</p>
                      <p className="text-sm text-muted-foreground">Privilégiez l'enseignement explicite des concepts, évitez les ambiguïtés et les expressions idiomatiques.</p>
                    </div>
                    <div className="border-l-2 border-neuro-orange pl-4 py-1">
                      <p className="font-medium">Support visuel renforcé</p>
                      <p className="text-sm text-muted-foreground">Utilisez abondamment les supports visuels (schémas, diagrammes, vidéos) pour compléter les informations verbales ou écrites.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="flex items-center gap-2" asChild>
                    <a href="#" download>
                      <FileDown className="h-4 w-4" />
                      <span>Télécharger le guide complet autisme</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="dyspraxie">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 gap-2">
                  <Lightbulb className="h-6 w-6 text-neuro-green" />
                  <h2 className="text-2xl font-bold">Stratégies pour la dyspraxie</h2>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Écriture et prise de notes</h3>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">Utilisation d'outils technologiques</p>
                        <p className="text-sm text-muted-foreground">Privilégiez la prise de notes sur ordinateur ou tablette avec des claviers adaptés.</p>
                      </li>
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">Enregistrement audio</p>
                        <p className="text-sm text-muted-foreground">Enregistrez les cours pour les réécouter plutôt que d'essayer de tout noter.</p>
                      </li>
                      <li className="border-l-2 border-neuro-green pl-4 py-1">
                        <p className="font-medium">Notes préstructurées</p>
                        <p className="text-sm text-muted-foreground">Utilisez des modèles de notes avec des sections prédéfinies pour faciliter l'organisation.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Organisation de l'espace et du matériel</h3>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-neuro-orange pl-4 py-1">
                        <p className="font-medium">Codage couleur systématique</p>
                        <p className="text-sm text-muted-foreground">Attribuez une couleur spécifique à chaque matière ou projet pour faciliter le repérage.</p>
                      </li>
                      <li className="border-l-2 border-neuro-orange pl-4 py-1">
                        <p className="font-medium">Organisation visuelle du bureau</p>
                        <p className="text-sm text-muted-foreground">Utilisez des supports, des séparateurs et des zones délimitées sur votre espace de travail.</p>
                      </li>
                      <li className="border-l-2 border-neuro-orange pl-4 py-1">
                        <p className="font-medium">Limitation des transitions</p>
                        <p className="text-sm text-muted-foreground">Minimisez les déplacements et les changements d'outils pendant une session de travail.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Applications et outils recommandés pour la dyspraxie</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">Clavier BigKeys</p>
                      <p className="text-sm text-muted-foreground">Clavier avec des touches plus grandes pour faciliter la frappe.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">Dragon NaturallySpeaking</p>
                      <p className="text-sm text-muted-foreground">Logiciel de reconnaissance vocale avancé pour dicter textes et commandes.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="font-medium">Stylo enregistreur Livescribe</p>
                      <p className="text-sm text-muted-foreground">Stylo qui enregistre l'audio pendant que vous prenez des notes manuscrites.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="flex items-center gap-2" asChild>
                    <a href="#" download>
                      <FileDown className="h-4 w-4" />
                      <span>Télécharger le guide complet dyspraxie</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Principes généraux d'apprentissage pour les personnes neurodivergentes</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="border-l-2 border-neuro-purple pl-4 py-1">
                  <p className="font-medium">Multimodalité</p>
                  <p className="text-sm text-muted-foreground">Privilégiez les approches qui combinent plusieurs modes d'apprentissage (visuel, auditif, kinesthésique) pour renforcer la compréhension et la mémorisation.</p>
                </div>
                <div className="border-l-2 border-neuro-purple pl-4 py-1">
                  <p className="font-medium">Métacognition adaptée</p>
                  <p className="text-sm text-muted-foreground">Aidez l'apprenant à prendre conscience de ses propres stratégies d'apprentissage efficaces et à développer une boîte à outils personnalisée.</p>
                </div>
                <div className="border-l-2 border-neuro-purple pl-4 py-1">
                  <p className="font-medium">Auto-advocacy</p>
                  <p className="text-sm text-muted-foreground">Encouragez l'apprenant à identifier et exprimer ses besoins spécifiques auprès des enseignants et des pairs.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-neuro-blue pl-4 py-1">
                  <p className="font-medium">Gestion de l'énergie cognitive</p>
                  <p className="text-sm text-muted-foreground">Reconnaissez que certaines tâches demandent plus d'effort pour les personnes neurodivergentes et intégrez des stratégies de récupération adaptées.</p>
                </div>
                <div className="border-l-2 border-neuro-blue pl-4 py-1">
                  <p className="font-medium">Renforcement positif</p>
                  <p className="text-sm text-muted-foreground">Mettez l'accent sur les forces et les progrès plutôt que sur les déficits, en utilisant un système de récompenses personnalisé.</p>
                </div>
                <div className="border-l-2 border-neuro-blue pl-4 py-1">
                  <p className="font-medium">Flexibilité et adaptabilité</p>
                  <p className="text-sm text-muted-foreground">Soyez prêt à ajuster les stratégies en fonction de l'efficacité, de l'humeur et du niveau d'énergie, qui peuvent varier considérablement.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Ressources supplémentaires</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Guide complet d'apprentissage multimodal</h3>
                  <p className="text-sm text-muted-foreground mb-2">Stratégies détaillées pour tous les profils neurodivergents</p>
                  <Button variant="outline" size="sm">Télécharger (.pdf)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Fiches de stratégies par matière</h3>
                  <p className="text-sm text-muted-foreground mb-2">Techniques adaptées aux mathématiques, langues, sciences, etc.</p>
                  <Button variant="outline" size="sm">Télécharger (.zip)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Planning d'étude personnalisable</h3>
                  <p className="text-sm text-muted-foreground mb-2">Modèle adaptable à différents profils cognitifs</p>
                  <Button variant="outline" size="sm">Télécharger (.xlsx)</Button>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg flex items-start gap-3">
                <FileDown className="h-6 w-6 text-neuro-purple mt-1" />
                <div>
                  <h3 className="font-semibold">Cartes mentales prêtes à l'emploi</h3>
                  <p className="text-sm text-muted-foreground mb-2">Templates pour différentes matières et concepts</p>
                  <Button variant="outline" size="sm">Télécharger (.pdf)</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>    </div>
  );
};

export default StrategiesApprentissage;
