import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Brain, Heart, Users, Eye, Stethoscope, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
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
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

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
            <div className="space-y-4">
              {/* Behavioral Therapy */}
              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                  onClick={() => toggleSection('behavioral')}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-200">
                      <Brain className="h-4 w-4 text-green-700" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-green-900">Thérapie comportementale</h4>
                      <p className="text-sm text-green-700">Traitement de première ligne pour la plupart des troubles anxieux</p>
                    </div>
                  </div>
                  {openSections['behavioral'] ? 
                    <ChevronDown className="h-5 w-5 text-green-700" /> : 
                    <ChevronRight className="h-5 w-5 text-green-700" />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200 mt-2 space-y-3">
                    <div>
                      <h5 className="font-medium text-green-900 mb-2">Principes fondamentaux :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-green-800">
                        <li>Exposition graduelle aux situations anxiogènes</li>
                        <li>Désensibilisation systématique</li>
                        <li>Renforcement des comportements adaptatifs</li>
                        <li>Extinction des comportements d'évitement</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-900 mb-2">Techniques spécifiques :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-green-800">
                        <li><strong>Séparations systématiques :</strong> Imposer des séparations régulières et brèves</li>
                        <li><strong>Techniques de relaxation :</strong> Respiration profonde, relaxation musculaire progressive</li>
                        <li><strong>Gestion de l'anxiété :</strong> Identification des déclencheurs et stratégies d'adaptation</li>
                        <li><strong>Exposition in vivo :</strong> Confrontation progressive aux situations redoutées</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Efficacité :</strong> Particulièrement efficace pour l'anxiété de séparation et l'anxiété sociale chez l'enfant et l'adolescent.
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Cognitive-Behavioral Therapy */}
              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                  onClick={() => toggleSection('cognitive')}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-200">
                      <Brain className="h-4 w-4 text-blue-700" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-blue-900">Thérapie cognitivo-comportementale</h4>
                      <p className="text-sm text-blue-700">Restructuration des pensées négatives et modification des comportements</p>
                    </div>
                  </div>
                  {openSections['cognitive'] ? 
                    <ChevronDown className="h-5 w-5 text-blue-700" /> : 
                    <ChevronRight className="h-5 w-5 text-blue-700" />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200 mt-2 space-y-3">
                    <div>
                      <h5 className="font-medium text-blue-900 mb-2">Composantes cognitives :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-blue-800">
                        <li>Identification des pensées automatiques négatives</li>
                        <li>Restructuration cognitive des distorsions</li>
                        <li>Développement de pensées alternatives réalistes</li>
                        <li>Techniques de résolution de problèmes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-900 mb-2">Composantes comportementales :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-blue-800">
                        <li>Planification d'activités agréables</li>
                        <li>Exposition graduelle aux situations évitées</li>
                        <li>Entraînement aux compétences sociales</li>
                        <li>Techniques de gestion du stress</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-900 mb-2">Applications spécifiques :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-blue-800">
                        <li><strong>Trouble anxieux généralisé :</strong> Gestion des inquiétudes excessives</li>
                        <li><strong>TSPT :</strong> Thérapie axée sur le traumatisme</li>
                        <li><strong>Dépression :</strong> Modification des schémas de pensée négatifs</li>
                      </ul>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Durée :</strong> Généralement 12-16 séances, adaptée selon l'âge et la sévérité des symptômes.
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Family Approach */}
              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors"
                  onClick={() => toggleSection('family')}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-200">
                      <Users className="h-4 w-4 text-purple-700" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-purple-900">Approche familiale</h4>
                      <p className="text-sm text-purple-700">Implication des parents et de l'environnement dans le traitement</p>
                    </div>
                  </div>
                  {openSections['family'] ? 
                    <ChevronDown className="h-5 w-5 text-purple-700" /> : 
                    <ChevronRight className="h-5 w-5 text-purple-700" />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200 mt-2 space-y-3">
                    <div>
                      <h5 className="font-medium text-purple-900 mb-2">Implication des parents :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-purple-800">
                        <li>Formation aux techniques de gestion comportementale</li>
                        <li>Apprentissage de réponses neutres aux protestations</li>
                        <li>Maintien de routines structurées</li>
                        <li>Renforcement positif des comportements adaptatifs</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-900 mb-2">Collaboration école-famille :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-purple-800">
                        <li>Communication régulière avec les enseignants</li>
                        <li>Mise en place d'adaptations pédagogiques</li>
                        <li>Suivi coordonné des progrès</li>
                        <li>Prévention du refus scolaire</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-900 mb-2">Gestion de l'anxiété parentale :</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-purple-800">
                        <li>Identification des cercles vicieux anxiété parent-enfant</li>
                        <li>Techniques de gestion du stress parental</li>
                        <li>Soutien psychologique aux parents si nécessaire</li>
                        <li>Éducation sur les troubles mentaux de l'enfant</li>
                      </ul>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Importance :</strong> L'anxiété parentale peut aggraver les symptômes de l'enfant, créant un cercle vicieux qui ne peut être interrompu que par un traitement simultané.
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
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