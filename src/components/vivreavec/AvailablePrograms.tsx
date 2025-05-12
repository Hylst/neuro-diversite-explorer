
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Rocket, GraduationCap, Brain, Award, Users, Calendar, MapPin, Sparkles, Clock, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AvailablePrograms = () => {
  return (
    <ScrollArea className="h-[500px] pr-4">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <GraduationCap className="h-5 w-5 text-neuro-purple mr-2" />
            Programmes de formation
          </h3>
          <div className="grid gap-4">
            <div className="border p-4 rounded-lg hover:border-neuro-purple transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-neuro-purple" />
                <h4 className="font-medium">Formation "Parents-Experts"</h4>
                <Badge variant="outline" className="ml-auto">Certifiante</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Programme de 8 semaines pour développer des compétences d'accompagnement spécifiques. Cette formation vous donne les outils pour soutenir efficacement votre enfant neurodivergent au quotidien.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 
                  Prochaine session: 15 juin 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 
                  24h de formation
                </span>
                <span className="flex items-center gap-1">
                  <Target className="h-3 w-3" /> 
                  En ligne et présentiel
                </span>
              </div>
              <Button size="sm">Télécharger le programme</Button>
            </div>

            <div className="border p-4 rounded-lg hover:border-neuro-purple transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-5 w-5 text-neuro-purple" />
                <h4 className="font-medium">Ateliers "Comprendre la neurodiversité"</h4>
                <Badge variant="outline" className="ml-auto">Mensuel</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Série de 6 ateliers pratiques pour mieux comprendre et accompagner. Adaptés aux parents, enseignants et professionnels, ces sessions incluent des activités de mise en situation et des outils pratiques.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 
                  Tous les premiers samedis du mois
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> 
                  Strasbourg, Colmar, Mulhouse
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" /> 
                  12 participants maximum
                </span>
              </div>
              <Button size="sm">Calendrier des ateliers</Button>
            </div>
            
            <div className="border p-4 rounded-lg hover:border-neuro-purple transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-neuro-purple" />
                <h4 className="font-medium">Programme "Stratégies du quotidien"</h4>
                <Badge variant="outline" className="ml-auto">Nouveau</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Formation de 4 semaines conçue pour les adultes neurodivergents souhaitant développer des stratégies adaptées à leur mode de fonctionnement pour le quotidien.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 
                  16h de formation
                </span>
                <span className="flex items-center gap-1">
                  <Target className="h-3 w-3" /> 
                  100% en ligne
                </span>
              </div>
              <Button size="sm">S'inscrire</Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Award className="h-5 w-5 text-neuro-purple mr-2" />
            Certifications professionnelles
          </h3>
          <div className="grid gap-4">
            <div className="border p-4 rounded-lg hover:border-neuro-purple transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-neuro-purple" />
                <h4 className="font-medium">Accompagnant spécialisé en neurodiversité</h4>
                <Badge className="ml-auto bg-neuro-purple text-white">Niveau 5</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Formation certifiante de 120h pour les professionnels. Reconnue par l'État, cette certification vous permet d'intervenir comme accompagnant spécialisé auprès de personnes neurodivergentes.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 
                  3 sessions par an
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 
                  120h + 40h de stage
                </span>
                <span className="flex items-center gap-1">
                  <Target className="h-3 w-3" /> 
                  Présentiel (Paris, Lyon, Strasbourg)
                </span>
              </div>
              <Button size="sm">Programme détaillé</Button>
            </div>
            
            <div className="border p-4 rounded-lg hover:border-neuro-purple transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-5 w-5 text-neuro-purple" />
                <h4 className="font-medium">Référent inclusion et neurodiversité</h4>
                <Badge className="ml-auto bg-neuro-purple text-white">Niveau 6</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Certification professionnelle pour les acteurs de l'inclusion en entreprise, établissements scolaires et structures d'accueil.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 
                  Prochaine session: septembre 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 
                  180h de formation
                </span>
              </div>
              <Button size="sm">Conditions d'admission</Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Rocket className="h-5 w-5 text-neuro-purple mr-2" />
            Programmes en entreprise
          </h3>
          <div className="grid gap-4">
            <div className="border p-4 rounded-lg hover:border-neuro-purple transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="h-5 w-5 text-neuro-purple" />
                <h4 className="font-medium">Sensibilisation à la neurodiversité</h4>
                <Badge variant="outline" className="ml-auto">Entreprises</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Modules de formation pour les équipes et managers. Des formats adaptés à chaque organisation, de l'atelier d'une demi-journée à la formation complète de 2 jours pour les équipes RH et managers.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Target className="h-3 w-3" /> 
                  Sur site ou en ligne
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" /> 
                  De 5 à 20 participants
                </span>
              </div>
              <Button size="sm">Demander un devis</Button>
            </div>
            
            <div className="border p-4 rounded-lg hover:border-neuro-purple transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-neuro-purple" />
                <h4 className="font-medium">Accompagnement à l'inclusion</h4>
                <Badge variant="outline" className="ml-auto">Sur mesure</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Programme complet d'accompagnement pour les entreprises souhaitant mettre en place une politique d'inclusion de la neurodiversité.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 
                  6 à 12 mois d'accompagnement
                </span>
              </div>
              <Button size="sm">Prendre rendez-vous</Button>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AvailablePrograms;
