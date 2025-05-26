import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Heart, Users, Eye, Stethoscope } from 'lucide-react';
import AnxietyDisordersSection from './AnxietyDisordersSection';
import MoodDisordersSection from './MoodDisordersSection';
import BehaviorDisordersSection from './BehaviorDisordersSection';
import PsychoticDisordersSection from './PsychoticDisordersSection';
import SpecializedDisordersSection from './SpecializedDisordersSection';

/**
 * Main component for Mental Health section with nested tabs structure
 * Provides overview and categorized mental health disorders for children and adolescents
 */
const MentalHealthSection = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Introduction and Comparison Section */}
      <Card className="neuro-card border-neuro-purple">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-secondary">
              <Brain className="h-6 w-6 text-neuro-purple" />
            </div>
            <CardTitle>Santé Mentale chez les Enfants et Adolescents</CardTitle>
          </div>
          <CardDescription>
            Comprendre les troubles mentaux et leur distinction avec les troubles neurodéveloppementaux
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* General Presentation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Présentation générale</h3>
            <div className="bg-secondary p-4 rounded-lg space-y-2">
              <p className="text-sm text-muted-foreground">
                • Jusqu'à 20% des enfants et adolescents peuvent présenter un trouble mental diagnosticable
              </p>
              <p className="text-sm text-muted-foreground">
                • Les troubles incluent dépression, troubles anxieux, troubles des conduites alimentaires
              </p>
              <p className="text-sm text-muted-foreground">
                • L'autisme se développe exclusivement pendant l'enfance
              </p>
              <p className="text-sm text-muted-foreground">
                • La schizophrénie est moins fréquente et débute généralement entre le milieu de l'adolescence et le début de l'âge adulte
              </p>
            </div>
          </div>

          {/* Comparison Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Troubles neurodéveloppementaux vs Troubles santé mentale</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Troubles neurodéveloppementaux (Dys/TSA/TDAH)</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Origine : Altérations précoces du développement cérébral</li>
                  <li>• Manifestation : Difficultés d'apprentissage, traitement sensoriel</li>
                  <li>• Prise en charge : Adaptations pédagogiques, ergothérapie</li>
                  <li>• Évolution : Généralement stables, amélioration avec accompagnement</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Troubles santé mentale</h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Origine : Facteurs psychosociaux + vulnérabilité biologique</li>
                  <li>• Manifestation : Détresse émotionnelle, comportements inadaptés</li>
                  <li>• Prise en charge : Psychothérapie, pharmacothérapie</li>
                  <li>• Évolution : Variable, épisodique, réversible avec traitement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* COVID-19 Impact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Impact de la pandémie COVID-19</h3>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Doublement des symptômes d'anxiété chez les jeunes, particulièrement les filles</li>
                <li>• Facteurs prédictifs : mauvaise relation avec les soignants, troubles du sommeil, temps d'écran excessif</li>
                <li>• Augmentation de 43% des consultations de santé mentale pour anxiété</li>
              </ul>
            </div>
          </div>

          {/* General Therapeutic Approaches */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Approches thérapeutiques générales</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Thérapie comportementale",
                  description: "Traitement de première ligne pour la plupart des troubles anxieux"
                },
                {
                  title: "Thérapie cognitivo-comportementale",
                  description: "Efficace pour restructurer les pensées négatives"
                },
                {
                  title: "Médicaments",
                  description: "ISRS principalement, avec surveillance étroite des effets secondaires"
                },
                {
                  title: "Approche familiale",
                  description: "Implication des parents et de l'école essentielle"
                },
                {
                  title: "Intervention précoce",
                  description: "Améliore significativement le pronostic à long terme"
                }
              ].map((approach, index) => (
                <div key={index} className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-900 text-sm">{approach.title}</h5>
                  <p className="text-xs text-green-800 mt-1">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mental Health Categories Tabs */}
      <Tabs defaultValue="anxieux" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid w-full max-w-3xl grid-cols-5">
            <TabsTrigger value="anxieux" className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Anxieux</span>
            </TabsTrigger>
            <TabsTrigger value="humeur" className="flex items-center gap-1">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">Humeur</span>
            </TabsTrigger>
            <TabsTrigger value="comportement" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Comportement</span>
            </TabsTrigger>
            <TabsTrigger value="psychotiques" className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">Psychotiques</span>
            </TabsTrigger>
            <TabsTrigger value="specialises" className="flex items-center gap-1">
              <Stethoscope className="h-4 w-4" />
              <span className="hidden sm:inline">Spécialisés</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="anxieux">
          <AnxietyDisordersSection />
        </TabsContent>

        <TabsContent value="humeur">
          <MoodDisordersSection />
        </TabsContent>

        <TabsContent value="comportement">
          <BehaviorDisordersSection />
        </TabsContent>

        <TabsContent value="psychotiques">
          <PsychoticDisordersSection />
        </TabsContent>

        <TabsContent value="specialises">
          <SpecializedDisordersSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentalHealthSection;