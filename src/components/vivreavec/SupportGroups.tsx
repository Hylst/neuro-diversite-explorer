
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Globe, Calendar, Users, Clock, AlertCircle, Info } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const SupportGroups = () => {
  return (
    <div className="p-6 bg-background rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Users className="h-6 w-6 text-neuro-purple" />
        Groupes de soutien
      </h2>
      
      <div className="mb-6 p-4 bg-muted rounded-lg flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-neuro-purple mt-0.5" />
        <div>
          <p className="text-sm">
            Trouver du soutien est essentiel dans le parcours avec la neurodiversité. Les groupes ci-dessous offrent accompagnement, partage d'expériences et ressources pratiques.
          </p>
          <p className="text-sm mt-2">
            <span className="font-medium">Important :</span> Vérifiez les disponibilités et modalités d'accès avant de vous déplacer. Certains groupes requièrent une inscription préalable.
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="associations">
        <TabsList className="w-full">
          <TabsTrigger value="associations">Associations</TabsTrigger>
          <TabsTrigger value="groups">Groupes d'entraide</TabsTrigger>
          <TabsTrigger value="centers">Centres de référence</TabsTrigger>
        </TabsList>
        
        <TabsContent value="associations" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Association Française de Personnes Autistes</CardTitle>
                <CardDescription>Soutien et défense des droits des personnes autistes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>25 rue de la République, 75011 Paris</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>01 45 XX XX XX</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <a href="https://example.com/afpa" className="text-neuro-purple hover:underline">www.afpa-autisme.org</a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Permanence téléphonique : Lundi-Vendredi, 9h-17h</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Contacter</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Réseau Dys-France</CardTitle>
                <CardDescription>Information et accompagnement pour les troubles DYS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>12 avenue Victor Hugo, 69003 Lyon</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>04 72 XX XX XX</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <a href="https://example.com/rdf" className="text-neuro-purple hover:underline">www.reseaudys.fr</a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Antennes régionales dans toute la France</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Contacter</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>TDA/H France</CardTitle>
                <CardDescription>Association nationale pour les personnes concernées par le TDAH</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <a href="https://example.com/tdahfrance" className="text-neuro-purple hover:underline">www.tdahfrance.fr</a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Ligne d'écoute : Mardi et Jeudi, 20h-22h</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Groupes de parole mensuels dans plusieurs villes</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Contacter</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Collectif Autisme</CardTitle>
                <CardDescription>Défense des droits et sensibilisation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>5 rue des Lilas, 33000 Bordeaux</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>05 56 XX XX XX</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <a href="https://example.com/collectif" className="text-neuro-purple hover:underline">www.collectif-autisme.org</a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Permanence : Lundi et Mercredi, 14h-18h</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Contacter</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="groups" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Groupe d'entraide TDAH Lyon</CardTitle>
                    <CardDescription>Rencontres mensuelles et forum en ligne</CardDescription>
                  </div>
                  <Badge>Adultes</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Maison des associations, Lyon 7ème</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Chaque 1er samedi du mois, 14h-16h</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Groupe animé par des pairs, gratuit sur inscription</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">S'inscrire</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Café-Asperger Paris</CardTitle>
                    <CardDescription>Espace de rencontre pour adultes Asperger</CardDescription>
                  </div>
                  <Badge>Adultes</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Café Le Petit Marcel, 75011 Paris</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Chaque 3ème dimanche du mois, 15h-18h</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Ambiance calme, pas de réservation nécessaire</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Plus d'informations</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Parents d'enfants Dys</CardTitle>
                    <CardDescription>Groupe de soutien et d'échange</CardDescription>
                  </div>
                  <Badge>Parents</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Centre social des Aubiers, Bordeaux</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Chaque 2ème jeudi du mois, 20h-22h</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Animé par une psychologue et un parent référent</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Contacter</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Entr'Autistes</CardTitle>
                    <CardDescription>Groupe d'entraide en ligne</CardDescription>
                  </div>
                  <Badge>En ligne</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <a href="https://example.com/entrautistes" className="text-neuro-purple hover:underline">www.entrautistes.fr</a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Réunions Zoom hebdomadaires, forum actif 24/7</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Modération par des personnes autistes</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Rejoindre</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="centers" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Centre de Référence Autisme</CardTitle>
                <CardDescription>Diagnostic, évaluation et orientation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>CHU Pitié-Salpêtrière, 75013 Paris</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>01 42 XX XX XX</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Délai d'attente moyen : 12-18 mois</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Adressage par médecin traitant nécessaire</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Informations</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Centre de Diagnostic TDAH</CardTitle>
                <CardDescription>Équipe pluridisciplinaire spécialisée</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Hôpital Robert Debré, 75019 Paris</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>01 40 XX XX XX</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Enfants, adolescents et adultes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Évaluations neuropsychologiques complètes</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Contacter</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Réseau de Soins pour les Troubles Dys</CardTitle>
                <CardDescription>Coordination des professionnels de santé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Plusieurs centres en région Auvergne-Rhône-Alpes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <a href="https://example.com/resodys" className="text-neuro-purple hover:underline">www.reseau-dys.fr</a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Parcours coordonné : orthophonie, ergothérapie, psychomotricité</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Trouver un centre</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Centre d'Excellence pour les Neurodiversités</CardTitle>
                <CardDescription>Approche globale et inclusive</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>55 boulevard Haussmann, 75008 Paris</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>01 44 XX XX XX</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Diagnostic, accompagnement et recherche</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>Equipe composée de professionnels et de personnes neurodivergentes</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">En savoir plus</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupportGroups;
