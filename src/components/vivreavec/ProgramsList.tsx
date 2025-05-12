
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Brain, Award, Users, Calendar, MapPin, Clock, Target, Rocket } from 'lucide-react';

const ProgramsList = () => {
  return (
    <div className="p-6 bg-background rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <GraduationCap className="h-6 w-6 text-neuro-purple" />
        Programmes disponibles
      </h2>
      
      <Tabs defaultValue="formation">
        <TabsList className="w-full">
          <TabsTrigger value="formation">Formation</TabsTrigger>
          <TabsTrigger value="certification">Certification</TabsTrigger>
          <TabsTrigger value="entreprise">Entreprise</TabsTrigger>
        </TabsList>
        
        <TabsContent value="formation" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-neuro-purple" />
                  <CardTitle>Formation "Parents-Experts"</CardTitle>
                  <Badge variant="outline" className="ml-auto">Certifiante</Badge>
                </div>
                <CardDescription>Programme de 8 semaines pour développer des compétences d'accompagnement spécifiques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Cette formation vous donne les outils pour soutenir efficacement votre enfant neurodivergent au quotidien. Animée par des professionnels et des parents expérimentés, elle combine théorie et pratique dans une approche bienveillante.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" /> 
                      Prochaine session: 15 juin 2025
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" /> 
                      24h de formation
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3 text-muted-foreground" /> 
                      En ligne et présentiel
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" /> 
                      12 participants maximum
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Au programme :</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Comprendre le fonctionnement neurologique spécifique</li>
                      <li>Stratégies de communication adaptées</li>
                      <li>Gestion des émotions et des crises</li>
                      <li>Adaptation de l'environnement</li>
                      <li>Collaboration avec l'école et les professionnels</li>
                      <li>Développement de l'autonomie</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">Télécharger le programme complet</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-neuro-purple" />
                  <CardTitle>Ateliers "Comprendre la neurodiversité"</CardTitle>
                  <Badge variant="outline" className="ml-auto">Mensuel</Badge>
                </div>
                <CardDescription>Série de 6 ateliers pratiques pour mieux comprendre et accompagner</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Adaptés aux parents, enseignants et professionnels, ces sessions incluent des activités de mise en situation et des outils pratiques pour mieux comprendre et soutenir les personnes neurodivergentes.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" /> 
                      Tous les premiers samedis du mois
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" /> 
                      Strasbourg, Colmar, Mulhouse
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" /> 
                      12 participants maximum
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" /> 
                      3h par atelier
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Les thématiques :</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Atelier 1 : Bases neurologiques et particularités sensorielles</li>
                      <li>Atelier 2 : Communication et interactions sociales</li>
                      <li>Atelier 3 : Gestion des émotions et de l'anxiété</li>
                      <li>Atelier 4 : Adaptations scolaires et professionnelles</li>
                      <li>Atelier 5 : Vie quotidienne et autonomie</li>
                      <li>Atelier 6 : Outils numériques et ressources</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">Calendrier des ateliers</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-neuro-purple" />
                  <CardTitle>Programme "Stratégies du quotidien"</CardTitle>
                  <Badge variant="outline" className="ml-auto">Nouveau</Badge>
                </div>
                <CardDescription>Formation pour les adultes neurodivergents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Formation de 4 semaines conçue pour les adultes neurodivergents souhaitant développer des stratégies adaptées à leur mode de fonctionnement pour le quotidien personnel et professionnel.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" /> 
                      16h de formation
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3 text-muted-foreground" /> 
                      100% en ligne
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" /> 
                      Sessions toutes les 6 semaines
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" /> 
                      Animé par des professionnels neurodivergents
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Contenu :</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Auto-connaissance et forces spécifiques</li>
                      <li>Organisation et planification adaptées</li>
                      <li>Gestion de l'énergie et prévention du burnout</li>
                      <li>Communication en milieu professionnel</li>
                      <li>Adaptations et aménagements personnalisés</li>
                      <li>Développement d'une boîte à outils personnelle</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">S'inscrire à la prochaine session</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="certification" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-neuro-purple" />
                  <CardTitle>Accompagnant spécialisé en neurodiversité</CardTitle>
                  <Badge className="ml-auto bg-neuro-purple text-white">Niveau 5</Badge>
                </div>
                <CardDescription>Formation certifiante de 120h pour les professionnels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Reconnue par l'État, cette certification vous permet d'intervenir comme accompagnant spécialisé auprès de personnes neurodivergentes dans divers contextes : éducatif, professionnel ou associatif.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" /> 
                      3 sessions par an
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" /> 
                      120h + 40h de stage
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3 text-muted-foreground" /> 
                      Présentiel (Paris, Lyon, Strasbourg)
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" /> 
                      15 participants maximum
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Programme :</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Fondements neuroscientifiques de la neurodiversité</li>
                      <li>Approches et méthodes d'accompagnement spécifiques</li>
                      <li>Adaptation des environnements et des supports</li>
                      <li>Communication adaptée et gestion émotionnelle</li>
                      <li>Cadre éthique et collaboration avec les familles</li>
                      <li>Stage pratique supervisé et validation des compétences</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">Demander le programme détaillé</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-neuro-purple" />
                  <CardTitle>Référent inclusion et neurodiversité</CardTitle>
                  <Badge className="ml-auto bg-neuro-purple text-white">Niveau 6</Badge>
                </div>
                <CardDescription>Certification professionnelle pour les acteurs de l'inclusion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Cette certification forme des professionnels capables de concevoir, mettre en œuvre et évaluer des politiques d'inclusion en entreprise, établissements scolaires et structures d'accueil.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" /> 
                      Prochaine session: septembre 2025
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" /> 
                      180h de formation
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3 text-muted-foreground" /> 
                      Mixte (présentiel et distanciel)
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-3 w-3 text-muted-foreground" /> 
                      Mémoire professionnel requis
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Compétences développées :</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Diagnostic organisationnel et identification des besoins</li>
                      <li>Conception de plans d'action inclusifs</li>
                      <li>Sensibilisation et formation des équipes</li>
                      <li>Adaptation des processus et environnements</li>
                      <li>Accompagnement individualisé et médiation</li>
                      <li>Evaluation et amélioration continue des politiques d'inclusion</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">Conditions d'admission</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="entreprise" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-neuro-purple" />
                  <CardTitle>Sensibilisation à la neurodiversité</CardTitle>
                  <Badge variant="outline" className="ml-auto">Entreprises</Badge>
                </div>
                <CardDescription>Modules de formation pour les équipes et managers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Des formats adaptés à chaque organisation, de l'atelier d'une demi-journée à la formation complète de 2 jours pour les équipes RH et managers, pour favoriser l'inclusion et valoriser les talents neurodivergents.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3 text-muted-foreground" /> 
                      Sur site ou en ligne
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" /> 
                      De 5 à 20 participants
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" /> 
                      Formats de 3h à 2 jours
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-3 w-3 text-muted-foreground" /> 
                      Certification Qualiopi
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Modules disponibles :</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Introduction à la neurodiversité en milieu professionnel</li>
                      <li>Management inclusif des équipes neurodiverses</li>
                      <li>Recrutement et onboarding adaptés</li>
                      <li>Adaptation des postes et environnements de travail</li>
                      <li>Communication efficace avec des collaborateurs neurodivergents</li>
                      <li>Formation approfondie pour les référents handicap</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">Demander un devis personnalisé</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-neuro-purple" />
                  <CardTitle>Accompagnement à l'inclusion</CardTitle>
                  <Badge variant="outline" className="ml-auto">Sur mesure</Badge>
                </div>
                <CardDescription>Programme complet d'accompagnement pour les entreprises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Programme complet d'accompagnement pour les entreprises souhaitant mettre en place une politique d'inclusion de la neurodiversité dans leur stratégie RSE et leurs pratiques RH.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" /> 
                      6 à 12 mois d'accompagnement
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3 text-muted-foreground" /> 
                      Approche sur mesure
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" /> 
                      Tous secteurs d'activité
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-3 w-3 text-muted-foreground" /> 
                      Équipe pluridisciplinaire
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Notre accompagnement comprend :</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Diagnostic de l'organisation et identification des opportunités</li>
                      <li>Formation des équipes RH, managers et collaborateurs</li>
                      <li>Adaptation des processus de recrutement et d'évaluation</li>
                      <li>Mise en place d'aménagements et d'espaces adaptés</li>
                      <li>Accompagnement personnalisé des collaborateurs neurodivergents</li>
                      <li>Évaluation et valorisation de l'impact</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">Prendre rendez-vous avec un consultant</Button>
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

export default ProgramsList;
