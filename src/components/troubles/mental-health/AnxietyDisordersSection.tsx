import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Heart, Users, Zap, AlertTriangle, Shield, Eye, ChevronDown, ChevronRight, Brain } from 'lucide-react';
import { useState } from 'react';
import PTSDSection from './PTSDSection';
import AgoraphobiaSection from './AgoraphobiaSection';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

/**
 * Component for Anxiety Disorders section with detailed information
 * about different types of anxiety disorders in children and adolescents
 */
const AnxietyDisordersSection = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-red">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-neuro-red" />
            Troubles Anxieux
          </CardTitle>
          <CardDescription>
            Les troubles anxieux sont caractérisés par une peur, une inquiétude ou une appréhension disproportionnée aux circonstances
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="separation" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid w-full max-w-4xl grid-cols-6">
            <TabsTrigger value="separation" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Séparation</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Social</span>
            </TabsTrigger>
            <TabsTrigger value="generalise" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Généralisé</span>
            </TabsTrigger>
            <TabsTrigger value="panique" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Panique</span>
            </TabsTrigger>
            <TabsTrigger value="ptsd" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">TSPT</span>
            </TabsTrigger>
            <TabsTrigger value="agoraphobia" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">Agoraphobie</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="separation">
          <Card className="neuro-card border-neuro-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-neuro-blue" />
                Trouble d'anxiété de séparation
              </CardTitle>
              <CardDescription>
                Peur persistante et intense de la séparation d'une figure d'attachement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Manifestations principales :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Crises spectaculaires lors des séparations</li>
                    <li>Refus scolaire persistant</li>
                    <li>Plaintes somatiques (maux de tête, maux de ventre)</li>
                    <li>Cauchemars liés à la séparation</li>
                    <li>Peur excessive qu'il arrive quelque chose aux parents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Traitement :</h4>
                  <div className="space-y-3">
                    {/* Behavioral Therapy with Systematic Separations */}
                    <Collapsible>
                      <CollapsibleTrigger 
                        className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                        onClick={() => toggleSection('separation-behavioral')}
                      >
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-blue-900 text-sm">Thérapie comportementale avec séparations systématiques</span>
                        </div>
                        {openSections['separation-behavioral'] ? 
                          <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                          <ChevronRight className="h-4 w-4 text-blue-600" />
                        }
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-3 pb-3">
                        <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 space-y-2">
                          <div>
                            <h6 className="font-medium text-blue-900 mb-1 text-sm">Protocole de séparation :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                              <li>Imposer des séparations brèves et régulières (5-10 minutes initialement)</li>
                              <li>Augmentation progressive de la durée (15, 30, 60 minutes)</li>
                              <li>Maintenir des adieux brefs et neutres</li>
                              <li>Éviter les négociations ou les promesses excessives</li>
                              <li>Retour systématique comme promis pour renforcer la confiance</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-blue-900 mb-1 text-sm">Techniques d'exposition :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                              <li>Hiérarchie des situations anxiogènes (de la moins à la plus difficile)</li>
                              <li>Exposition graduelle avec soutien émotionnel</li>
                              <li>Renforcement positif des comportements adaptatifs</li>
                              <li>Prévention des comportements d'évitement</li>
                            </ul>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Relaxation and Anxiety Management */}
                    <Collapsible>
                      <CollapsibleTrigger 
                        className="flex items-center justify-between w-full p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                        onClick={() => toggleSection('separation-relaxation')}
                      >
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-900 text-sm">Techniques de relaxation et de gestion de l'anxiété</span>
                        </div>
                        {openSections['separation-relaxation'] ? 
                          <ChevronDown className="h-4 w-4 text-green-600" /> : 
                          <ChevronRight className="h-4 w-4 text-green-600" />
                        }
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-3 pb-3">
                        <div className="bg-white p-3 rounded-lg border border-green-200 mt-2 space-y-2">
                          <div>
                            <h6 className="font-medium text-green-900 mb-1 text-sm">Techniques de respiration :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                              <li>Respiration abdominale profonde (4-7-8 : inspirer 4s, retenir 7s, expirer 8s)</li>
                              <li>Exercices de cohérence cardiaque</li>
                              <li>Techniques de pleine conscience adaptées à l'âge</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-green-900 mb-1 text-sm">Relaxation musculaire :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                              <li>Relaxation musculaire progressive de Jacobson</li>
                              <li>Techniques de visualisation positive</li>
                              <li>Yoga et méditation adaptés aux enfants</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-green-900 mb-1 text-sm">Stratégies d'adaptation :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                              <li>Objets transitionnels (photo, peluche)</li>
                              <li>Techniques d'auto-apaisement</li>
                              <li>Planification d'activités rassurantes</li>
                            </ul>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Parental Involvement */}
                    <Collapsible>
                      <CollapsibleTrigger 
                        className="flex items-center justify-between w-full p-3 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors"
                        onClick={() => toggleSection('separation-parents')}
                      >
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span className="font-medium text-purple-900 text-sm">Implication des parents dans le processus</span>
                        </div>
                        {openSections['separation-parents'] ? 
                          <ChevronDown className="h-4 w-4 text-purple-600" /> : 
                          <ChevronRight className="h-4 w-4 text-purple-600" />
                        }
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-3 pb-3">
                        <div className="bg-white p-3 rounded-lg border border-purple-200 mt-2 space-y-2">
                          <div>
                            <h6 className="font-medium text-purple-900 mb-1 text-sm">Formation parentale :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                              <li>Apprentissage de réponses neutres aux protestations</li>
                              <li>Éviter la surprotection et les accommodations excessives</li>
                              <li>Maintien de routines prévisibles et rassurantes</li>
                              <li>Gestion de leur propre anxiété de séparation</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-purple-900 mb-1 text-sm">Stratégies de séparation :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                              <li>Adieux brefs et confiants</li>
                              <li>Éviter les retours multiples</li>
                              <li>Préparation de l'enfant aux séparations</li>
                              <li>Communication claire des horaires de retour</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-purple-900 mb-1 text-sm">Collaboration école-famille :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                              <li>Plan d'intervention coordonné</li>
                              <li>Communication régulière avec les enseignants</li>
                              <li>Adaptation progressive du temps scolaire</li>
                              <li>Prévention du refus scolaire</li>
                            </ul>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Important :</strong> Le diagnostic nécessite que les symptômes persistent pendant au moins 4 semaines 
                  et causent une détresse significative ou une altération du fonctionnement.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card className="neuro-card border-neuro-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-neuro-green" />
                Trouble d'anxiété sociale
              </CardTitle>
              <CardDescription>
                Peur persistante du ridicule et de l'humiliation en contexte social
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Symptômes chez l'adolescent :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Évitement des situations sociales</li>
                    <li>Inquiétude excessive avant les événements sociaux</li>
                    <li>Refus scolaire lié aux interactions</li>
                    <li>Plaintes somatiques avant les activités sociales</li>
                    <li>Isolement social progressif</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Symptômes chez l'enfant :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Crises de colère ou pleurs</li>
                    <li>Figement en situation sociale</li>
                    <li>Retrait social marqué</li>
                    <li>Mutisme sélectif possible</li>
                    <li>Accrochage aux parents en public</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Traitement :</h4>
                <div className="space-y-3">
                  {/* Behavioral Therapy First Line */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                      onClick={() => toggleSection('social-behavioral')}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-900 text-sm">Thérapie comportementale en première ligne</span>
                      </div>
                      {openSections['social-behavioral'] ? 
                        <ChevronDown className="h-4 w-4 text-green-600" /> : 
                        <ChevronRight className="h-4 w-4 text-green-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-green-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Exposition graduelle :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Hiérarchie des situations sociales (du moins au plus anxiogène)</li>
                            <li>Jeux de rôle et simulations d'interactions sociales</li>
                            <li>Exposition in vivo progressive (groupes restreints puis élargis)</li>
                            <li>Renforcement positif des tentatives d'interaction</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Entraînement aux compétences sociales :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Apprentissage du contact visuel approprié</li>
                            <li>Techniques de conversation (initiation, maintien, clôture)</li>
                            <li>Gestion des silences et des malaises sociaux</li>
                            <li>Reconnaissance et expression des émotions</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Maintien scolaire obligatoire :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Prévention de l'évitement scolaire</li>
                            <li>Collaboration avec l'équipe éducative</li>
                            <li>Adaptations pédagogiques temporaires si nécessaire</li>
                            <li>Réintégration progressive des activités de groupe</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Social Anxiety Management Techniques */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                      onClick={() => toggleSection('social-management')}
                    >
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900 text-sm">Techniques de gestion de l'anxiété sociale</span>
                      </div>
                      {openSections['social-management'] ? 
                        <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Restructuration cognitive :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Identification des pensées catastrophiques</li>
                            <li>Remise en question des croyances négatives sur soi</li>
                            <li>Développement de pensées alternatives réalistes</li>
                            <li>Techniques de défusion cognitive</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Gestion des symptômes physiques :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Techniques de respiration pour contrôler l'hyperventilation</li>
                            <li>Relaxation musculaire progressive</li>
                            <li>Gestion des rougissements et tremblements</li>
                            <li>Techniques de grounding (ancrage dans le présent)</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Stratégies d'adaptation :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Préparation mentale avant les événements sociaux</li>
                            <li>Techniques d'auto-encouragement</li>
                            <li>Planification d'échappatoires socialement acceptables</li>
                            <li>Développement d'un réseau de soutien social</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Diagnostic :</strong> L'anxiété doit persister pendant ≥ 6 mois et être présente 
                  de manière cohérente dans des contextes similaires.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="generalise">
          <Card className="neuro-card border-neuro-orange">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-neuro-orange" />
                Trouble anxieux généralisé
              </CardTitle>
              <CardDescription>
                Anxiété excessive concernant diverses activités pendant au moins 6 mois
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Symptômes principaux :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Inquiétudes excessives et incontrôlables</li>
                    <li>Agitation ou sensation d'être survolté</li>
                    <li>Fatigue facile</li>
                    <li>Difficultés de concentration</li>
                    <li>Irritabilité</li>
                    <li>Tension musculaire</li>
                    <li>Troubles du sommeil</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Comorbidités fréquentes :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Trouble dépressif majeur</li>
                    <li>Trouble panique</li>
                    <li>Autres troubles anxieux</li>
                    <li>Troubles somatiques</li>
                    <li>Troubles du sommeil</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Traitement :</h4>
                <div className="space-y-3">
                  {/* Cognitive-Behavioral Psychotherapy */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
                      onClick={() => toggleSection('generalized-cbt')}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-orange-600" />
                        <span className="font-medium text-orange-900 text-sm">Psychothérapie cognitivo-comportementale</span>
                      </div>
                      {openSections['generalized-cbt'] ? 
                        <ChevronDown className="h-4 w-4 text-orange-600" /> : 
                        <ChevronRight className="h-4 w-4 text-orange-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-orange-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Gestion des inquiétudes excessives :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Identification et remise en question des pensées catastrophiques</li>
                            <li>Techniques de résolution de problèmes structurées</li>
                            <li>Apprentissage de la tolérance à l'incertitude</li>
                            <li>Restriction du temps consacré aux inquiétudes ("worry time")</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Techniques de relaxation :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Relaxation musculaire progressive</li>
                            <li>Techniques de respiration diaphragmatique</li>
                            <li>Méditation de pleine conscience</li>
                            <li>Yoga thérapeutique adapté à l'âge</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Restructuration cognitive :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Identification des distorsions cognitives</li>
                            <li>Développement de pensées alternatives réalistes</li>
                            <li>Techniques de défusion cognitive</li>
                            <li>Entraînement à l'auto-observation des pensées</li>
                          </ul>
                        </div>
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <p className="text-xs text-orange-800">
                            <strong>Durée :</strong> 12-16 séances généralement, avec possibilité de séances de rappel.
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Medication Management */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                      onClick={() => toggleSection('generalized-medication')}
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900 text-sm">Approche médicamenteuse</span>
                      </div>
                      {openSections['generalized-medication'] ? 
                        <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">ISRS (première ligne) :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Sertraline, fluoxétine, escitalopram</li>
                            <li>Début à faible dose avec augmentation progressive</li>
                            <li>Surveillance étroite des effets secondaires</li>
                            <li>Évaluation du risque suicidaire (surtout début de traitement)</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">IRSN (alternative) :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Venlafaxine, duloxétine</li>
                            <li>Efficaces sur l'anxiété et les symptômes somatiques</li>
                            <li>Surveillance de la tension artérielle</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Autres options :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li><strong>Buspirone :</strong> Alternative sans dépendance</li>
                            <li><strong>Benzodiazépines :</strong> Usage très limité (2-4 semaines max)</li>
                            <li><strong>Hydroxyzine :</strong> Pour l'anxiété somatique</li>
                          </ul>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <p className="text-xs text-blue-800">
                            <strong>Important :</strong> Surveillance régulière, évaluation bénéfice/risque, arrêt progressif.
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="panique">
          <Card className="neuro-card border-neuro-red">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-neuro-red" />
                Trouble panique
              </CardTitle>
              <CardDescription>
                Attaques de panique récurrentes et imprévisibles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Symptômes d'une attaque de panique :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Palpitations ou accélération du rythme cardiaque</li>
                    <li>Transpiration</li>
                    <li>Tremblements ou secousses</li>
                    <li>Sensation de souffle coupé ou d'étouffement</li>
                    <li>Sensation d'étranglement</li>
                    <li>Douleur ou gêne thoracique</li>
                    <li>Nausées ou gêne abdominale</li>
                    <li>Sensation de vertige ou d'évanouissement</li>
                    <li>Frissons ou bouffées de chaleurs</li>
                    <li>Engourdissements ou picotements</li>
                    <li>Déréalisation ou dépersonnalisation</li>
                    <li>Peur de perdre le contrôle ou de devenir fou</li>
                    <li>Peur de mourir</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Caractéristiques chez l'enfant :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Difficultés à verbaliser les sensations</li>
                    <li>Comportements d'évitement marqués</li>
                    <li>Recherche de réassurance constante</li>
                    <li>Refus de rester seul</li>
                    <li>Plaintes somatiques fréquentes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Traitement spécialisé :</h4>
                <div className="space-y-3">
                  {/* TCC for Panic Disorder */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                      onClick={() => toggleSection('panic-cbt')}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900 text-sm">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="underline cursor-help">TCC spécialisée pour le trouble panique</span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              Thérapie Cognitivo-Comportementale adaptée spécifiquement au trouble panique, combinant restructuration cognitive et techniques comportementales
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </div>
                      {openSections['panic-cbt'] ? 
                        <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Restructuration cognitive :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Identification des pensées catastrophiques ("Je vais mourir", "Je deviens fou")</li>
                            <li>Remise en question des interprétations erronées des sensations corporelles</li>
                            <li>Développement de pensées alternatives réalistes</li>
                            <li>Éducation sur la physiologie de l'anxiété et des attaques de panique</li>
                            <li>Techniques de défusion cognitive pour prendre du recul avec les pensées</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Techniques comportementales :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Exercices de respiration contrôlée pour prévenir l'hyperventilation</li>
                            <li>Relaxation musculaire progressive pour réduire la tension</li>
                            <li>Techniques de grounding (ancrage sensoriel dans le présent)</li>
                            <li>Planification d'activités graduées pour reprendre confiance</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Gestion des crises :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Plan d'action personnalisé en cas d'attaque de panique</li>
                            <li>Techniques d'auto-apaisement immédiat</li>
                            <li>Stratégies de communication avec l'entourage</li>
                            <li>Prévention des comportements d'évitement secondaires</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Exposure Therapy for Panic */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                      onClick={() => toggleSection('panic-exposure')}
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-900 text-sm">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="underline cursor-help">Thérapie d'exposition intéroceptive</span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              Exposition contrôlée aux sensations corporelles qui déclenchent la panique pour réduire la peur de ces sensations
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </div>
                      {openSections['panic-exposure'] ? 
                        <ChevronDown className="h-4 w-4 text-green-600" /> : 
                        <ChevronRight className="h-4 w-4 text-green-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-green-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Exposition aux sensations corporelles :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Exercices de respiration rapide pour reproduire l'essoufflement</li>
                            <li>Rotation de la tête pour créer des vertiges contrôlés</li>
                            <li>Exercices physiques pour augmenter le rythme cardiaque</li>
                            <li>Respiration à travers une paille pour simuler l'étouffement</li>
                            <li>Exposition progressive et répétée jusqu'à habituation</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Exposition situationnelle :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Hiérarchie des situations évitées (ascenseurs, transports, foules)</li>
                            <li>Exposition graduelle avec accompagnement initial</li>
                            <li>Augmentation progressive de la durée et de l'intensité</li>
                            <li>Prévention des comportements de sécurité (évitement subtil)</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Protocole d'exposition :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Séances de 45-60 minutes, 2-3 fois par semaine</li>
                            <li>Maintien de l'exposition jusqu'à réduction de l'anxiété</li>
                            <li>Enregistrement des niveaux d'anxiété avant/pendant/après</li>
                            <li>Exercices à domicile entre les séances</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>Important :</strong> Le trouble panique est rare chez les enfants prépubères. 
                  Il apparaît généralement à l'adolescence ou au début de l'âge adulte.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ptsd">
          <Card className="neuro-card border-neuro-purple">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-neuro-purple" />
                Trouble de stress post-traumatique (TSPT)
              </CardTitle>
              <CardDescription>
                Réactions persistantes suite à un événement traumatisant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Critères traumatiques :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Exposition à la mort, blessure grave ou violence sexuelle</li>
                    <li>Vécu direct, témoin, ou connaissance d'un proche</li>
                    <li>Exposition répétée aux détails (professionnels)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Symptômes principaux :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Reviviscences (flashbacks, cauchemars)</li>
                    <li>Évitement des rappels du trauma</li>
                    <li>Altérations cognitives et émotionnelles</li>
                    <li>Hyperactivation (hypervigilance, sursauts)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Manifestations chez l'enfant :</h4>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <ul className="list-disc pl-5 space-y-1 text-purple-800 text-sm">
                    <li><strong>Jeu répétitif :</strong> Reproduction du trauma dans le jeu</li>
                    <li><strong>Régression :</strong> Perte d'acquis développementaux</li>
                    <li><strong>Troubles du sommeil :</strong> Cauchemars, terreurs nocturnes</li>
                    <li><strong>Irritabilité :</strong> Colères, agressivité</li>
                    <li><strong>Difficultés de concentration :</strong> Impact scolaire</li>
                    <li><strong>Somatisations :</strong> Maux de tête, ventre</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Traitements spécialisés :</h4>
                <div className="space-y-3">
                  {/* TCC for PTSD */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                      onClick={() => toggleSection('ptsd-cbt')}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900 text-sm">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="underline cursor-help">TCC axée sur le traumatisme</span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              Thérapie Cognitivo-Comportementale spécialement adaptée au TSPT, intégrant traitement du trauma et restructuration cognitive
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </div>
                      {openSections['ptsd-cbt'] ? 
                        <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Restructuration cognitive spécialisée :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Identification des cognitions post-traumatiques (culpabilité, honte, peur)</li>
                            <li>Remise en question des croyances sur la sécurité et la contrôlabilité</li>
                            <li>Travail sur les distorsions cognitives liées au trauma</li>
                            <li>Développement d'un sens de cohérence et de signification</li>
                            <li>Reconstruction d'une vision équilibrée du monde et de soi</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Techniques comportementales :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Exposition graduelle aux souvenirs traumatiques</li>
                            <li>Techniques de gestion de l'activation (respiration, relaxation)</li>
                            <li>Entraînement aux compétences d'adaptation</li>
                            <li>Planification d'activités agréables et significatives</li>
                            <li>Prévention des comportements d'évitement</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Protocole de traitement :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>12-16 séances individuelles de 60-90 minutes</li>
                            <li>Phase de stabilisation et psychoéducation</li>
                            <li>Phase de traitement du trauma</li>
                            <li>Phase d'intégration et de prévention de rechute</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Gradual Exposure Therapy */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                      onClick={() => toggleSection('ptsd-exposure')}
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-900 text-sm">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="underline cursor-help">Thérapie d'exposition graduelle</span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              Exposition progressive et contrôlée aux souvenirs, émotions et situations liées au trauma pour réduire l'évitement et l'anxiété
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </div>
                      {openSections['ptsd-exposure'] ? 
                        <ChevronDown className="h-4 w-4 text-green-600" /> : 
                        <ChevronRight className="h-4 w-4 text-green-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-green-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Exposition imaginaire :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Récit détaillé et répété du trauma en séance</li>
                            <li>Enregistrement audio pour écoute à domicile</li>
                            <li>Progression du général au spécifique</li>
                            <li>Maintien de l'exposition jusqu'à réduction de l'anxiété</li>
                            <li>Traitement des points de blocage émotionnel</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Exposition in vivo :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Hiérarchie des situations évitées (lieux, personnes, activités)</li>
                            <li>Exposition progressive avec accompagnement</li>
                            <li>Exercices entre les séances</li>
                            <li>Prévention des comportements de sécurité</li>
                            <li>Généralisation à différents contextes</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Adaptation pour enfants :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Utilisation du dessin et du jeu pour l'exposition</li>
                            <li>Séances plus courtes (30-45 minutes)</li>
                            <li>Implication des parents dans le processus</li>
                            <li>Techniques de régulation émotionnelle adaptées à l'âge</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* EMDR Therapy */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors"
                      onClick={() => toggleSection('ptsd-emdr')}
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-purple-600" />
                        <span className="font-medium text-purple-900 text-sm">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="underline cursor-help">EMDR (Eye Movement Desensitization and Reprocessing)</span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              Thérapie utilisant les mouvements oculaires pour faciliter le traitement des souvenirs traumatiques et réduire leur charge émotionnelle
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </div>
                      {openSections['ptsd-emdr'] ? 
                        <ChevronDown className="h-4 w-4 text-purple-600" /> : 
                        <ChevronRight className="h-4 w-4 text-purple-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-purple-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-purple-900 mb-1 text-sm">Protocole EMDR :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                            <li>Phase 1-2 : Préparation et stabilisation du patient</li>
                            <li>Phase 3-6 : Traitement du trauma avec stimulations bilatérales</li>
                            <li>Phase 7-8 : Clôture et réévaluation</li>
                            <li>Séances de 60-90 minutes, fréquence hebdomadaire</li>
                            <li>Suivi de l'évolution avec échelles standardisées</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-purple-900 mb-1 text-sm">Stimulations bilatérales :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                            <li>Mouvements oculaires horizontaux (méthode principale)</li>
                            <li>Stimulations tactiles alternées (tapotements)</li>
                            <li>Stimulations auditives bilatérales</li>
                            <li>Adaptation selon les préférences et capacités de l'enfant</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-purple-900 mb-1 text-sm">Spécificités pédiatriques :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                            <li>Adaptation du protocole selon l'âge développemental</li>
                            <li>Utilisation d'objets ludiques pour les stimulations</li>
                            <li>Séances plus courtes pour les jeunes enfants</li>
                            <li>Implication des parents dans la préparation</li>
                            <li>Techniques de stabilisation renforcées</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Play Therapy */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-yellow-50 rounded-lg border border-yellow-200 hover:bg-yellow-100 transition-colors"
                      onClick={() => toggleSection('ptsd-play')}
                    >
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-900 text-sm">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="underline cursor-help">Thérapie de jeu traumatique</span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              Utilisation du jeu comme moyen d'expression et de traitement du trauma chez les jeunes enfants qui ont des difficultés à verbaliser
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </div>
                      {openSections['ptsd-play'] ? 
                        <ChevronDown className="h-4 w-4 text-yellow-600" /> : 
                        <ChevronRight className="h-4 w-4 text-yellow-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-yellow-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-yellow-900 mb-1 text-sm">Techniques de jeu thérapeutique :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-yellow-800">
                            <li>Jeu libre pour l'expression spontanée du trauma</li>
                            <li>Jeu dirigé pour traiter des aspects spécifiques</li>
                            <li>Utilisation de figurines, poupées, maison de poupée</li>
                            <li>Jeu de sable et miniatures pour reconstituer les scènes</li>
                            <li>Art-thérapie (dessin, peinture, modelage)</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-yellow-900 mb-1 text-sm">Objectifs thérapeutiques :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-yellow-800">
                            <li>Expression des émotions liées au trauma</li>
                            <li>Maîtrise et contrôle sur l'expérience traumatique</li>
                            <li>Développement de narratifs cohérents</li>
                            <li>Réduction des symptômes post-traumatiques</li>
                            <li>Restauration du sentiment de sécurité</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-yellow-900 mb-1 text-sm">Indications spécifiques :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-yellow-800">
                            <li>Enfants de 3 à 12 ans avec TSPT</li>
                            <li>Difficultés de verbalisation du trauma</li>
                            <li>Jeu répétitif post-traumatique</li>
                            <li>Régression développementale</li>
                            <li>Combinaison avec d'autres approches thérapeutiques</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Family Therapy */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
                      onClick={() => toggleSection('ptsd-family')}
                    >
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-orange-600" />
                        <span className="font-medium text-orange-900 text-sm">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="underline cursor-help">Thérapie familiale post-traumatique</span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              Approche systémique impliquant la famille dans le traitement du trauma pour restaurer la cohésion et le soutien familial
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </div>
                      {openSections['ptsd-family'] ? 
                        <ChevronDown className="h-4 w-4 text-orange-600" /> : 
                        <ChevronRight className="h-4 w-4 text-orange-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-orange-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Objectifs familiaux :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Psychoéducation sur le TSPT et ses manifestations</li>
                            <li>Amélioration de la communication familiale</li>
                            <li>Développement de stratégies de soutien adaptées</li>
                            <li>Traitement du trauma familial secondaire</li>
                            <li>Restauration des routines et de la sécurité familiale</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Interventions spécifiques :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Séances familiales conjointes et individuelles</li>
                            <li>Formation des parents aux techniques de gestion</li>
                            <li>Travail sur la culpabilité et la honte familiales</li>
                            <li>Développement de rituels de sécurité</li>
                            <li>Coordination avec l'école et autres intervenants</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Soutien parental :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Gestion du stress parental post-traumatique</li>
                            <li>Techniques de régulation émotionnelle pour les parents</li>
                            <li>Prévention de la surprotection ou de l'évitement</li>
                            <li>Maintien des limites et de la structure familiale</li>
                            <li>Groupes de soutien pour parents d'enfants traumatisés</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>Important :</strong> Le TSPT nécessite une évaluation spécialisée. Les symptômes doivent persister plus d'un mois et causer une détresse significative.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agoraphobia">
          <AgoraphobiaSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnxietyDisordersSection;